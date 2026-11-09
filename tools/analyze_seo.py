#!/usr/bin/env python3
"""VIPChinaGuide SEO indexability analyzer (idempotent, read-only)."""
import os, re, sys, json
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://www.vipchinaguide.com"

def html_files():
    return sorted(f for f in os.listdir(ROOT) if f.endswith(".html") and os.path.isfile(os.path.join(ROOT, f)))

def read(f):
    with open(os.path.join(ROOT, f), encoding="utf-8", errors="replace") as fh:
        return fh.read()

def meta(s, name):
    m = re.search(r'<meta\s+name="%s"\s+content="([^"]*)"' % re.escape(name), s, re.I)
    return m.group(1) if m else None

def canonical(s):
    m = re.search(r'<link\s+rel="canonical"\s+href="([^"]*)"', s, re.I)
    return m.group(1) if m else None

def title(s):
    m = re.search(r"<title>(.*?)</title>", s, re.S | re.I)
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else None

def noindex(s):
    m = re.search(r'<meta\s+name="robots"\s+content="([^"]*)"', s, re.I)
    return bool(m and "noindex" in m.group(1).lower())

def analyze():
    files = html_files()
    out = {
        "total_pages": len(files),
        "missing_canonical": [],
        "missing_canonical_indexable": [],
        "dup_title_groups": [],
        "dup_desc_groups": [],
        "island_pages": [],
        "island_pages_indexable": [],
        "orphan_files": [],
        "sitemap_urls": 0,
        "static_city_links_cities_html": 0,
    }
    titles = defaultdict(list)
    descs = defaultdict(list)
    pageinfo = {}
    for f in files:
        s = read(f)
        t, d, c = title(s), meta(s, "description"), canonical(s)
        titles[t].append(f) if t else None
        descs[d].append(f) if d else None
        pageinfo[f] = {"title": t, "desc": d, "canonical": c, "noindex": noindex(s)}
        if not c:
            out["missing_canonical"].append(f)
            if not noindex(s):
                out["missing_canonical_indexable"].append(f)
    for k, v in titles.items():
        if k and len(v) > 1:
            out["dup_title_groups"].append(sorted(v))
    for k, v in descs.items():
        if k and len(v) > 1:
            out["dup_desc_groups"].append(sorted(v))

    # inbound link counting (static hrefs across all html, excluding self-links and anchors)
    inbound = defaultdict(set)
    allhref = re.compile(r'href="([^"#][^"]*?)(?:#[^"]*)?"', re.I)
    for f in files:
        s = read(f)
        for m in allhref.finditer(s):
            href = m.group(1).strip()
            if href.startswith(("http://", "https://", "mailto:", "tel:", "//")):
                continue
            tgt = os.path.basename(href)
            if tgt and tgt.endswith(".html") and tgt != f:
                inbound[tgt].add(f)
    out["inbound_counts"] = {k: len(v) for k, v in inbound.items()}

    island = []
    for f in files:
        if f in ("index.html", "404.html"):
            continue
        if pageinfo[f]["noindex"]:
            continue
        if len(inbound.get(f, ())) == 0:
            island.append(f)
    out["island_pages_indexable"] = sorted(island)
    out["island_pages"] = sorted(island)

    # sitemap
    sp = os.path.join(ROOT, "sitemap.xml")
    if os.path.exists(sp):
        with open(sp, encoding="utf-8", errors="replace") as fh:
            out["sitemap_urls"] = len(re.findall(r"<loc>", fh.read()))
    return out

if __name__ == "__main__":
    r = analyze()
    mode = sys.argv[1] if len(sys.argv) > 1 else "report"
    if mode == "report":
        print(json.dumps({k: v for k, v in r.items() if k != "inbound_counts"}, indent=1, ensure_ascii=False))
    elif mode == "counts":
        print("total_pages", r["total_pages"])
        print("missing_canonical", len(r["missing_canonical"]))
        print("missing_canonical_indexable", len(r["missing_canonical_indexable"]))
        print("dup_title_groups", len(r["dup_title_groups"]))
        print("dup_desc_groups", len(r["dup_desc_groups"]))
        print("island_pages_indexable", len(r["island_pages_indexable"]))
        print("sitemap_urls", r["sitemap_urls"])
        for g in r["dup_title_groups"]:
            print("  TITLE DUP:", g)
        for g in r["dup_desc_groups"]:
            print("  DESC DUP:", g)
        print("  MISSING CANON:", r["missing_canonical_indexable"])
        print("  ISLANDS:", r["island_pages_indexable"])
