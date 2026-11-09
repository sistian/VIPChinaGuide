#!/usr/bin/env python3
"""VIPChinaGuide indexability fixer (idempotent).

Fixes:
 1. Add self-referencing absolute canonical to indexable pages missing one.
 2. Differentiate duplicate title/description on duplicated page pairs
    (X-museums.html vs X-science-museums.html), correcting grammar.
 3. Add a footer "City Guides" link zone to each city hub page so the
    chinese-new-year / food / how-to-get-to / tea-culture / nightlife /
    sports-events / concerts / zodiac family pages get real inbound links.
 4. Link blog.html + contact.html from the homepage footer.

Never touches: noindex pages, test-footer-*.html, visible body copy,
URL paths, existing style class names, JS, analytics, CSP.
"""
import os, re, sys, json
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://www.vipchinaguide.com"
LOG = []

SKIP_FILES = {
    "test-footer-cny.html", "test-footer-index.html",
    "test-footer-tea.html", "test-footer-visa.html",
    "index.html", "404.html",
}


def html_files():
    return sorted(f for f in os.listdir(ROOT) if f.endswith(".html") and os.path.isfile(os.path.join(ROOT, f)))


def path(f):
    return os.path.join(ROOT, f)


def read(f):
    with open(path(f), encoding="utf-8", errors="replace") as fh:
        return fh.read()


def write(f, s):
    with open(path(f), "w", encoding="utf-8") as fh:
        fh.write(s)


def meta(s, name):
    m = re.search(r'<meta\s+name="%s"\s+content="([^"]*)"' % re.escape(name), s, re.I)
    return m.group(1) if m else None


def title_of(s):
    m = re.search(r"<title>(.*?)</title>", s, re.S | re.I)
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else None


def canonical_of(s):
    m = re.search(r'<link\s+rel="canonical"\s+href="([^"]*)"', s, re.I)
    return m.group(1) if m else None


def noindex(s):
    m = re.search(r'<meta\s+name="robots"\s+content="([^"]*)"', s, re.I)
    return bool(m and "noindex" in m.group(1).lower())


def pretty_city(slug):
    special = {"xi'an": "Xi'an", "urumqi": "Urumqi", "lhasa": "Lhasa"}
    if slug in special:
        return special[slug]
    return " ".join(w.capitalize() for w in slug.split("-"))


# ---------------------------------------------------------------- fix 1: canonical
def fix_canonical(files):
    changed = []
    for f in files:
        if f in SKIP_FILES:
            continue
        s = read(f)
        if canonical_of(s):
            continue
        if noindex(s):
            continue  # private pages: skip
        link = '<link rel="canonical" href="%s/%s">' % (BASE, f)
        m = re.search(r"<title>.*?</title>", s, re.S | re.I)
        if m:
            s = s[: m.end()] + "\n" + link + s[m.end():]
        else:
            m = re.search(r"</head>", s, re.I)
            if not m:
                continue
            s = s[: m.start()] + link + "\n" + s[m.start():]
        write(f, s)
        changed.append(f)
    if changed:
        LOG.append("canonical_added(%d): %s" % (len(changed), " ".join(changed)))


# ---------------------------------------------------------------- fix 2: duplicate title/desc
KIND_SUFFIXES = ["science-museums", "museums", "art-galleries", "bike-tours",
                 "walking-tours", "english-tour-guide"]

KIND_LABEL = {
    "science-museums": "Science Museums",
    "museums": "Museums",
    "art-galleries": "Art Galleries",
    "bike-tours": "Bike Tours",
    "walking-tours": "Walking Tours",
    "english-tour-guide": "English Tour Guide",
}


def split_city_kind(fname):
    """beijing-science-museums.html -> ('beijing', 'science-museums')"""
    stem = fname[:-len(".html")]
    for k in KIND_SUFFIXES:
        if stem.endswith("-" + k):
            return stem[: -(len(k) + 1)], k
    return None, None


def fix_dup_meta(files):
    titles, descs = defaultdict(list), defaultdict(list)
    for f in files:
        s = read(f)
        t, d = title_of(s), meta(s, "description")
        if t: titles[t].append(f)
        if d: descs[d].append(f)

    pairs = set()
    for g in list(titles.values()) + list(descs.values()):
        if len(g) > 1:
            pairs.add(tuple(sorted(g)))
    changed = []
    for group in sorted(pairs):
        keeper = group[0]          # e.g. beijing-museums.html  (kept as the primary page)
        other = group[1]           # e.g. beijing-science-museums.html (gets differentiated)
        ocity, okind = split_city_kind(other)
        kcity_slug, kkind = split_city_kind(keeper)
        if not okind or not kkind or okind == kkind:
            continue
        city = pretty_city(ocity)
        kind = okind
        s = read(other)
        new_title = "%s %s 2026 | %s guide | China Travel Guide | VIPChinaGuide" % (
            city, KIND_LABEL[kind], city)
        if kind == "english-tour-guide":
            lead = "Hire a %s English tour guide with VIPChinaGuide" % city
        else:
            lead = "Book %s %s with VIPChinaGuide" % (city, KIND_LABEL[kind].lower())
        new_desc = ("%s — your trusted %s guide and China travel guide. "
                    "Licensed English-speaking guides, custom itineraries, free cancellation. "
                    "%s tours for every traveler." % (lead, city, city))
        s2 = re.sub(r"<title>.*?</title>",
                    "<title>%s</title>" % new_title.replace("&", "&amp;"),
                    s, count=1, flags=re.S | re.I)
        s2 = re.sub(r'(<meta\s+name="description"\s+content=")[^"]*(")',
                    lambda mm: mm.group(1) + new_desc.replace('"', "&quot;") + mm.group(2),
                    s2, count=1, flags=re.I)
        if s2 != s:
            write(other, s2)
            changed.append(other)
        # also correct grammar on the keeper's description (keeps uniqueness, fixes "Book a X museums" / lowercase city)
        mk_city, mk_kind = kcity_slug, kkind
        if mk_city:
            sk = read(keeper)
            kcity = pretty_city(mk_city)
            if kkind == "english-tour-guide":
                klead = "Hire a %s English tour guide with VIPChinaGuide" % kcity
            else:
                klead = "Book %s %s with VIPChinaGuide" % (kcity, KIND_LABEL[kkind].lower())
            kdesc = ("%s — your trusted %s guide and China travel guide. "
                     "Licensed English-speaking guides, custom itineraries, free cancellation. "
                     "%s tours for every traveler." % (klead, kcity, kcity))
            sk2 = re.sub(r'(<meta\s+name="description"\s+content=")[^"]*(")',
                         lambda mm: mm.group(1) + kdesc.replace('"', "&quot;") + mm.group(2),
                         sk, count=1, flags=re.I)
            if sk2 != sk:
                write(keeper, sk2)
                changed.append(keeper)
    if changed:
        LOG.append("dup_meta_fixed(%d): %s" % (len(changed), " ".join(sorted(set(changed)))))


# ---------------------------------------------------------------- fix 3: island pages -> footer link zone
FAMILIES = [
    ("chinese-new-year-in-%s.html", "Chinese New Year"),
    ("food-in-%s.html", "Food"),
    ("how-to-get-to-%s.html", "How to Get To"),
    ("tea-culture-in-%s.html", "Tea Culture"),
    ("nightlife-in-%s.html", "Nightlife"),
    ("sports-events-in-%s.html", "Sports Events"),
    ("concerts-and-shows-in-%s.html", "Concerts &amp; Shows"),
    ("zodiac-travel-in-%s.html", "Zodiac Travel"),
]

MARK = "city-guide-links"


def make_footer_block(city_slug):
    items = []
    for tmpl, label in FAMILIES:
        fn = tmpl % city_slug
        if os.path.exists(path(fn)):
            items.append((fn, "%s in %s" % (label, pretty_city(city_slug))))
    if not items:
        return None
    links = "\n".join(
        '        <a href="%s">%s</a>' % (href, lbl) for href, lbl in items)
    return (
        '\n  <div class="city-guide-links">\n'
        '    <div class="footer-friendly-links">\n'
        '      <div class="footer-container">\n'
        '        <h4><i class="fas fa-map-marker-alt"></i> %s City Guides</h4>\n'
        '        <div class="fl-list">\n'
        '%s\n'
        '        </div>\n'
        '      </div>\n'
        '    </div>\n'
        '  </div>\n' % (pretty_city(city_slug), links)
    )


def inject_footer_block(f, block):
    s = read(f)
    if MARK in s:
        return False
    m = re.search(r"</footer>", s, re.I)
    if not m:
        return False
    s = s[: m.start()] + block + s[m.start():]
    write(f, s)
    return True


def fix_islands(files):
    hubs = sorted(f[:-len("-english-tour-guide.html")] for f in files
                  if f.endswith("-english-tour-guide.html"))
    changed = []
    for city in hubs:
        hub = city + "-english-tour-guide.html"
        if not os.path.exists(path(hub)):
            continue
        block = make_footer_block(city)
        if not block:
            continue
        if inject_footer_block(hub, block):
            changed.append(hub)
    if changed:
        LOG.append("footer_city_guide_links(%d): %s" % (len(changed), " ".join(changed)))


# ---------------------------------------------------------------- fix 4: blog/contact inbound links
def fix_blog_contact(files):
    changed = []
    f = "index.html"
    if not os.path.exists(path(f)):
        return
    s = read(f)
    if 'href="blog.html"' in s and 'href="contact.html"' in s:
        return
    block = (
        '\n  <div class="city-guide-links">\n'
        '    <div class="footer-friendly-links">\n'
        '      <div class="footer-container">\n'
        '        <h4><i class="fas fa-newspaper"></i> More from VIPChinaGuide</h4>\n'
        '        <div class="fl-list">\n'
        '        <a href="blog.html">Travel Blog</a>\n'
        '        <a href="contact.html">Contact Us</a>\n'
        '        </div>\n'
        '      </div>\n'
        '    </div>\n'
        '  </div>\n'
    )
    if inject_footer_block(f, block):
        changed.append(f)
    if changed:
        LOG.append("blog_contact_links(%d): %s" % (len(changed), " ".join(changed)))


def main():
    files = html_files()
    which = sys.argv[1] if len(sys.argv) > 1 else "all"
    if which in ("all", "canonical"):
        fix_canonical(files)
    if which in ("all", "dup"):
        fix_dup_meta(files)
    if which in ("all", "islands"):
        fix_islands(files)
    if which in ("all", "blog"):
        fix_blog_contact(files)
    print(json.dumps(LOG, indent=1, ensure_ascii=False) if LOG else "no changes")


if __name__ == "__main__":
    main()
