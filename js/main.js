

// ========== CITIES DATA ==========
const CITIES = [
  { id: 'beijing', name: 'Beijing', tagline: 'The Great Wall, Forbidden City & Hutongs', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop' },
  { id: 'shanghai', name: 'Shanghai', tagline: 'The Bund, Skyscrapers & French Concession', image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop' },
  { id: 'xian', name: "Xi'an", tagline: 'Terracotta Warriors & Ancient City Wall', image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop' },
  { id: 'chengdu', name: 'Chengdu', tagline: 'Pandas, Spicy Food & Tea Houses', image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop' },
  { id: 'guilin', name: 'Guilin', tagline: 'Karst Mountains & Li River Cruise', image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop' },
  { id: 'wuhan', name: 'Wuhan', tagline: 'Yellow Crane Tower, East Lake & Hot Dry Noodles', image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop' },
  { id: 'changsha', name: 'Changsha', tagline: 'Hunan TV, Spicy Food & Orange Isle', image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600&h=400&fit=crop' },
  { id: 'shiyan', name: 'Shiyan / Wudang Mountain', tagline: 'Taoist Temples, Martial Arts & Sacred Mountains', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop' },
  { id: 'zhangjiajie', name: 'Zhangjiajie', tagline: 'Avatar Mountains & Glass Bridge', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop' },
  { id: 'chongqing', name: 'Chongqing', tagline: 'Hot Pot, Yangtze River & Mountain City', image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop' },
  { id: 'lhasa', name: 'Lhasa', tagline: 'Potala Palace, Tibetan Buddhism & Holy Lakes', image: 'https://images.unsplash.com/photo-1599708153386-62e27c51b33c?w=600&h=400&fit=crop' },
  { id: 'urumqi', name: 'Urumqi', tagline: 'Silk Road, Uyghur Culture & Grand Bazaar', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop' },
  { id: 'dali', name: 'Dali', tagline: 'Erhai Lake, Bai Culture & Ancient Town', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400&fit=crop' },
  { id: 'lijiang', name: 'Lijiang', tagline: 'Jade Dragon Snow Mountain & Naxi Culture', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400&fit=crop' },
  { id: 'xishuangbanna', name: 'Xishuangbanna', tagline: 'Tropical Rainforest, Dai Culture & Wildlife', image: 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=600&h=400&fit=crop' },
  { id: 'guangzhou', name: 'Guangzhou', tagline: 'Dim Sum, Canton Tower & Pearl River', image: 'https://images.unsplash.com/photo-1583491562506-36357526654f?w=600&h=400&fit=crop' },
  { id: 'shenzhen', name: 'Shenzhen', tagline: 'Tech Innovation, Skyscrapers & Shopping', image: 'https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=600&h=400&fit=crop' },
  { id: 'hangzhou', name: 'Hangzhou', tagline: 'West Lake, Longjing Tea & Silk Culture', image: 'https://images.unsplash.com/photo-1569668723429-9fb9d8a94c74?w=600&h=400&fit=crop' },
];



// ========== EXPERIENCES / PRODUCTS (NEW) ==========
const EXPERIENCES = [
{ id: 'bj-01', type: 'experience', title: 'Great Wall Sunrise Hike at Jinshanling', city: 'beijing', price: 145, duration: '8h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.9, reviews: 156,
    highlights: ['Unrestored Great Wall sections', 'Sunrise over mountains', 'Picnic breakfast included', 'Hotel pickup & drop-off'],
    description: 'Skip the tourist crowds at Badaling. Hike the authentic, unrestored Jinshanling Great Wall with a private expert guide. Watch the sunrise paint the ancient stones gold.',
    itinerary: ['05:30 Hotel pickup in central Beijing', '07:30 Arrive at Jinshanling, start sunrise hike', '09:00 Picnic breakfast on the Wall', '10:30 Explore watchtowers & photo stops', '12:30 Local farm lunch', '14:00 Return to Beijing', '15:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Jinshanling entrance ticket', 'Picnic breakfast', 'Farm lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'bj-02', type: 'experience', title: 'Forbidden City, Temple of Heaven & Hutong Food Walk', city: 'beijing', price: 125, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.8, reviews: 203,
    highlights: ['Skip-the-line Forbidden City', 'Temple of Heaven park stroll', 'Hutong hidden food gems', 'Rickshaw ride included'],
    description: 'Walk through 600 years of imperial history. Your expert guide reveals the secrets of the Forbidden City, then takes you to a hutong for food even locals queue for.',
    itinerary: ['08:30 Meet at hotel', '09:00 Forbidden City (skip-the-line entry)', '12:00 Authentic Beijing lunch', '14:00 Temple of Heaven & local seniors playing mahjong', '16:00 Hutong rickshaw ride', '17:00 Hidden food tour: 6+ street food stops', '19:00 End at Houhai Lake area'],
    includes: ['Private expert guide (8h)', 'Forbidden City skip-the-line ticket', 'Temple of Heaven ticket', 'Rickshaw ride (30 min)', 'All food tastings (6+ stops)', 'Bottled water'],
    excludes: ['Hotel pickup (meet at hotel/Dongzhimen)', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'bj-03', type: 'experience', title: 'Summer Palace, 798 Art Zone & Peking Duck Dinner', city: 'beijing', price: 115, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.7, reviews: 89,
    highlights: ['Summer Palace boat ride', '798 Art District galleries', 'Peking Duck at legendary restaurant', 'Kunming Lake sunset'],
    description: 'A perfect blend of imperial elegance and modern creativity. Stroll the Summer Palace gardens, discover Beijing\'s contemporary art scene, then feast on the city\'s most famous dish.',
    itinerary: ['13:00 Hotel pickup', '14:00 Summer Palace: Kunming Lake boat ride', '16:30 798 Art Zone: galleries, street art & coffee', '18:30 Peking Duck dinner at 150-year-old restaurant', '20:00 End at restaurant (Sanlitun area)'],
    includes: ['Private expert guide (7h)', 'Summer Palace entrance + boat ticket', '798 Art Zone walking tour', 'Peking Duck dinner (full duck)', 'Bottled water'],
    excludes: ['Hotel drop-off', 'Gratuities (optional)', 'Art purchases', 'Personal expenses'],
  },
{ id: 'bj-04', type: 'experience', title: 'Tiananmen Square, National Museum & Jingshan Park Sunset', city: 'beijing', price: 75, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.6, reviews: 134,
    highlights: ['Tiananmen Square photo walk', 'National Museum highlights tour', 'Jingshan Park panoramic view', 'Forbidden City moat stroll'],
    description: 'Explore the political and cultural heart of China. Your guide decodes the symbolism of Tiananmen, walks you through 5,000 years of Chinese history at the National Museum, and catches the sunset over the Forbidden City from Jingshan Park.',
    itinerary: ['14:00 Meet at Tiananmen Square', '14:30 Tiananmen Square: history & photo stops', '15:30 National Museum: ancient bronzes, terracotta warriors replica', '17:00 Walk to Jingshan Park', '17:30 Climb to Pavilion for panoramic Forbidden City view', '18:30 Sunset photography session', '19:00 End'],
    includes: ['Private expert guide (5h)', 'National Museum entry (free, guide included)', 'Jingshan Park ticket', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'bj-05', type: 'experience', title: 'Hutong Bike Tour + Shichahai Lakes & Drum Tower', city: 'beijing', price: 65, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.7, reviews: 178,
    highlights: ['Traditional hutong bike ride', 'Shichahai lakeside scenery', 'Drum Tower performance', 'Local courtyard visit'],
    description: 'Pedal through Beijing\'s most charming hutongs on a vintage bicycle. Visit a real courtyard home, watch the drum performance at the Drum Tower, and relax by the lakes.',
    itinerary: ['09:00 Bike rental & safety briefing', '09:30 Hutong bike ride: Yandaixiejie, Mao\'er Hutong', '10:30 Visit local courtyard home with family', '11:30 Drum Tower & drum performance', '12:00 Shichahai lakeside walk', '12:30 Local lunch: zhajiangmian', '13:00 End'],
    includes: ['Private expert guide (4h)', 'Vintage bike rental', 'Drum Tower ticket', 'Courtyard home visit', 'Lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'bj-06', type: 'experience', title: 'Mutianyu Great Wall + Toboggan Slide & Farm Lunch', city: 'beijing', price: 135, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.8, reviews: 245,
    highlights: ['Less-crowded Mutianyu section', 'Toboggan slide down the Wall', 'Cable car ascent', 'Organic farm lunch'],
    description: 'The Great Wall experience with a twist. Take the cable car up, hike the scenic Mutianyu section, then toboggan slide all the way down. Finish with an organic farm-to-table lunch in the Huairou valley.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Mutianyu, cable car up', '10:00 Hike the Wall (west route, 6 watchtowers)', '12:00 Toboggan slide down', '12:30 Organic farm lunch', '14:00 Free time for photos', '15:00 Return to Beijing', '16:30 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Mutianyu entrance + cable car + toboggan', 'Organic farm lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'bj-07', type: 'experience', title: 'Ming Tombs + Sacred Way + Changling Tomb Exploration', city: 'beijing', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.6, reviews: 87,
    highlights: ['Sacred Way stone statues', 'Changling Tomb underground palace', 'Feng shui master explanation', 'Less-visited Xianling Tomb'],
    description: 'Walk the path of emperors. The Sacred Way\'s stone guardians have stood for 600 years. Your guide explains feng shui principles used to choose this valley, then explores the underground palace of Emperor Yongle.',
    itinerary: ['09:00 Hotel pickup', '10:00 Sacred Way: stone animals & officials', '11:00 Changling Tomb: Hall of Eminent Favor', '12:00 Underground palace tour', '13:00 Lunch at local restaurant', '14:00 Xianling Tomb (less-visited, peaceful)', '15:30 Return to Beijing', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Ming Tombs entrance', 'Underground palace ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'bj-08', type: 'experience', title: 'Peking Duck Cooking Class + Market Tour', city: 'beijing', price: 95, duration: '4h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.8, reviews: 156,
    highlights: ['Wet market ingredient shopping', 'Chef-led duck preparation', 'Hand-pull noodle demo', 'Eat your own creation'],
    description: 'Learn the secrets of Peking Duck from a master chef. Shop for ingredients at a local wet market, watch the duck roasting process, then prepare and carve your own duck. Plus hand-pulled noodles demo.',
    itinerary: ['10:00 Meet at cooking school', '10:15 Wet market tour: pick fresh duck, vegetables, sauces', '11:00 Duck preparation: scoring, glazing, hanging', '11:30 Roast duck in traditional oven', '12:00 Hand-pulled noodle demonstration', '12:30 Carving lesson & plating', '13:00 Feast on your creation', '14:00 End'],
    includes: ['Private chef instructor (4h)', 'All ingredients', 'Wet market tour', 'One whole duck per 2 people', 'Noodle-making demo', 'Recipe cards to take home'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'bj-09', type: 'experience', title: 'Lama Temple, Confucius Temple & Guozijian Imperial College', city: 'beijing', price: 70, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.5, reviews: 98,
    highlights: ['Tibetan Buddhist architecture', '18m sandalwood Buddha', 'Ancient examination hall', 'Traditional tea ceremony'],
    description: 'Discover Beijing\'s spiritual side. The Lama Temple\'s 18-meter Buddha carved from a single sandalwood tree is breathtaking. Then walk to the Confucius Temple and imagine the imperial exams that shaped China\'s scholars for 600 years.',
    itinerary: ['09:00 Meet at Lama Temple', '09:15 Lama Temple: Tibetan Buddhist art & 18m Buddha', '11:00 Walk to Confucius Temple', '11:30 Ancient examination system explained', '12:00 Guozijian Imperial College', '13:00 Traditional tea ceremony', '14:00 End at Wudaoying Hutong'],
    includes: ['Private expert guide (5h)', 'Lama Temple ticket', 'Confucius Temple + Guozijian ticket', 'Tea ceremony', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Lunch'],
  },
{ id: 'bj-10', type: 'experience', title: 'Beihai Park, White Dagoba & Jingshan Sunset Photography', city: 'beijing', price: 60, duration: '4h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.6, reviews: 112,
    highlights: ['White Dagoba climb', 'Nine-Dragon Screen', 'Jingshan golden sunset', 'Photography tips from guide'],
    description: 'A photographer\'s dream afternoon. The White Dagoba reflected in Beihai\'s lake, the colorful Nine-Dragon Screen, and the golden hour over the Forbidden City from Jingshan\'s summit. Your guide shares composition tips.',
    itinerary: ['15:00 Meet at Beihai Park North Gate', '15:15 White Dagoba & lake reflection photos', '16:00 Nine-Dragon Screen & Five-Dragon Pavilions', '17:00 Walk to Jingshan Park', '17:30 Position for sunset photography', '18:30 Golden hour over Forbidden City', '19:00 End'],
    includes: ['Private expert guide (4h)', 'Beihai Park ticket', 'Jingshan Park ticket', 'Photography tips', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Camera equipment'],
  },
{ id: 'bj-11', type: 'experience', title: 'Beijing Opera Experience: Makeup, Costumes & Performance', city: 'beijing', price: 85, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.7, reviews: 67,
    highlights: ['Professional opera makeup session', 'Try on imperial costumes', 'Behind-the-scenes theater tour', 'Live opera excerpt'],
    description: 'Become a Beijing Opera star for a day. Get the full face paint treatment, try on elaborate costumes, learn basic gestures from a professional performer, then watch an excerpt from the backstage.',
    itinerary: ['14:00 Arrive at traditional theater', '14:15 Introduction to Beijing Opera history', '14:45 Professional makeup session (45 min)', '15:30 Costume fitting & photo shoot', '16:00 Gesture & movement lesson', '16:30 Backstage tour', '17:00 Live opera excerpt performance', '17:30 End'],
    includes: ['Professional opera performer guide', 'Makeup session', 'Costume rental', 'Backstage tour', 'Live performance viewing', 'Digital photos'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'bj-12', type: 'experience', title: 'Fragrant Hills (Xiangshan) Autumn Hiking + Wofo Temple', city: 'beijing', price: 90, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.8, reviews: 145,
    highlights: ['Best autumn foliage in Beijing', '500-year-old Wofo Temple', 'Cable car or hiking options', 'Panoramic city view'],
    description: 'When autumn paints Beijing in red and gold, Fragrant Hills is the place to be. Hike or cable car to the summit for panoramic views, then visit the ancient Wofo Temple with its giant reclining Buddha.',
    itinerary: ['08:00 Hotel pickup', '09:00 Arrive at Fragrant Hills', '09:30 Hike or cable car to summit', '11:00 Summit photography & rest', '12:00 Descend via maple forest path', '13:00 Lunch at mountain restaurant', '14:00 Wofo Temple: reclining Buddha', '15:30 Return to Beijing', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Fragrant Hills entrance', 'Cable car (one way)', 'Wofo Temple ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'bj-13', type: 'experience', title: '798 Art District Deep Dive: Galleries, Street Art & Artist Studios', city: 'beijing', price: 70, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.6, reviews: 78,
    highlights: ['Contemporary Chinese art', 'Meet working artists', 'Street art graffiti tour', 'Art cafe lunch'],
    description: 'Go beyond the tourist trail at 798. Your guide is an art insider who knows which studios are open, which artists are in town, and where to find the best street art. Meet working artists and understand China\'s contemporary art scene.',
    itinerary: ['10:00 Meet at 798 Art Zone', '10:15 UCCA Center: current exhibition', '11:00 Gallery hopping: Pace, Gagosian, local galleries', '12:30 Art cafe lunch', '14:00 Artist studio visits (2-3 studios)', '15:00 Street art & graffiti walk', '15:30 798 history: from factory to art zone', '16:00 End'],
    includes: ['Art insider guide (5h)', 'Gallery entrance fees', 'Artist studio visits', 'Lunch at art cafe', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Art purchases'],
  },
{ id: 'bj-14', type: 'experience', title: 'Sanlitun Fashion District + Craft Cocktail Bar Crawl', city: 'beijing', price: 75, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.5, reviews: 89,
    highlights: ['Trendy Taikoo Li shopping', 'Hidden speakeasies', 'Craft cocktail tasting', 'Beijing nightlife insider'],
    description: 'See how Beijing\'s young crowd lives. Explore the cutting-edge Taikoo Li shopping complex, then follow your nightlife-savvy guide to hidden speakeasies behind unmarked doors. Taste creative cocktails inspired by Chinese ingredients.',
    itinerary: ['19:00 Meet at Taikoo Li Sanlitun', '19:15 Taikoo Li architecture & shopping walk', '20:00 First speakeasy: baijiu-based cocktails', '20:45 Second bar: tea-infused drinks', '21:30 Third stop: rooftop bar with city view', '22:30 Optional: live music venue', '23:00 End'],
    includes: ['Nightlife expert guide (4h)', '3 craft cocktails', 'Bar cover charges', 'Local nightlife tips'],
    excludes: ['Hotel pickup/drop-off', 'Additional drinks', 'Gratuities (optional)'],
  },
{ id: 'bj-15', type: 'experience', title: 'Beijing Olympic Park: Bird\'s Nest, Water Cube & VR Experience', city: 'beijing', price: 80, duration: '5h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop', rating: 4.4, reviews: 56,
    highlights: ['Bird\'s Nest stadium interior', 'Water Cube swimming pool', 'VR sports experience', 'Olympic torch relay walk'],
    description: 'Relive the magic of Beijing 2008. Walk inside the iconic Bird\'s Nest stadium, see the pool where Michael Phelps won 8 gold medals, and try the VR sports simulator. Your guide shares behind-the-scenes Olympic stories.',
    itinerary: ['13:00 Hotel pickup', '13:30 Olympic Park: torch plaza & medal plaza', '14:00 Bird\'s Nest interior tour', '15:00 Water Cube: pool area & bubble structure', '15:45 VR sports experience (skiing, bobsled)', '16:30 Olympic forest park walk', '17:30 Olympic-themed dinner nearby', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Bird\'s Nest entrance', 'Water Cube entrance', 'VR experience (2 sessions)', 'Dinner', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'cd-01', type: 'experience', title: 'Panda Base, Wuhou Shrine & Jinli Ancient Street', city: 'chengdu', price: 115, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 312,
    highlights: ['Panda Base before crowds', 'Baby panda nursery', 'Wuhou Shrine Three Kingdoms stories', 'Jinli Street hot pot dinner'],
    description: 'Arrive before the crowds for an exclusive panda experience, then dive into Chengdu\'s 2,000-year history at Wuhou Shrine, ending with legendary Sichuan hot pot.',
    itinerary: ['07:00 Hotel pickup', '07:30 Panda Base: adult pandas, baby nursery, red pandas', '10:00 Wuhou Shrine: Three Kingdoms stories', '12:00 Jinli Ancient Street lunch: dan dan noodles', '14:00 Tea house experience: Sichuan opera face-changing (optional)', '15:00 Free time in Jinli for crafts & snacks', '18:00 Hot pot dinner at famous local restaurant', '20:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Panda Base entrance', 'Wuhou Shrine ticket', 'Lunch & hot pot dinner', 'Bottled water'],
    excludes: ['Sichuan opera show (optional, ~)', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'cd-02', type: 'experience', title: 'Dujiangyan Irrigation System & Mount Qingcheng', city: 'chengdu', price: 135, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.7, reviews: 98,
    highlights: ['2,200-year-old irrigation wonder', 'Taoist mountain hiking', 'Cable car to summit', 'Mountain temple tea'],
    description: 'Discover the ancient engineering marvel that still irrigates Chengdu plain, then hike Mount Qingcheng — birthplace of Taoism — with a private guide who knows every trail.',
    itinerary: ['08:00 Hotel pickup', '09:30 Dujiangyan: Anlan Bridge, Fish Mouth, Bottle-Neck', '12:00 Local lunch: river fish + mountain vegetables', '13:30 Mount Qingcheng: cable car up', '14:30 Summit temple visit & mountain tea ceremony', '16:00 Hike down through bamboo forest', '17:30 Return to Chengdu', '19:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Dujiangyan entrance', 'Mount Qingcheng entrance + cable car', 'Lunch', 'Mountain tea ceremony', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'cd-03', type: 'experience', title: 'Leshan Giant Buddha Day Trip', city: 'chengdu', price: 155, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.9, reviews: 178,
    highlights: ['71m tall stone Buddha', 'Boat view from river', 'Lingyun Temple', 'Wuyou Temple'],
    description: 'The Leshan Giant Buddha is the largest stone Buddha in the world — carved from a cliff face over 90 years during the Tang Dynasty. See it from the river by boat for the most impressive view, then climb to its head for scale.',
    itinerary: ['07:00 Hotel pickup', '09:00 Arrive at Leshan', '09:30 Boat cruise: full Buddha view from river', '10:30 Climb to Buddha head', '11:30 Lingyun Temple & cliff carvings', '12:30 Lunch: Leshan signature snacks', '14:00 Wuyou Temple walk', '15:00 Return to Chengdu', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Leshan entrance + boat cruise', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'cd-04', type: 'experience', title: 'Mount Emei Day Trip', city: 'chengdu', price: 175, duration: '10h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 134,
    highlights: ['UNESCO World Heritage site', 'Golden Summit sunrise option', 'Wild monkeys', 'Baoguo Temple'],
    description: 'Mount Emei is one of the Four Sacred Buddhist Mountains of China. Hike or cable car to the Golden Summit for panoramic views above the clouds, visit ancient temples, and encounter the famous wild monkeys.',
    itinerary: ['05:00 Hotel pickup (early for summit)', '07:00 Arrive at Emei, cable car to summit', '08:00 Golden Summit: sea of clouds & giant Buddha statue', '10:00 Hike down: ancient temples & monkey encounters', '12:30 Lunch at mountain restaurant', '14:00 Baoguo Temple at mountain base', '15:00 Return to Chengdu', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (10h)', 'Hotel pickup & drop-off', 'Emei entrance + cable car', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'cd-05', type: 'experience', title: 'Kuanzhai Alley + People\'s Park Tea House', city: 'chengdu', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.6, reviews: 167,
    highlights: ['Qing Dynasty alley architecture', 'People\'s Park tea ceremony', 'Ear cleaning service', 'Sichuan opera face-changing'],
    description: 'Experience Chengdu\'s famous laid-back lifestyle. Wander the beautifully restored Kuanzhai Alley, then spend hours at People\'s Park drinking tea, playing mahjong, and watching the world go by.',
    itinerary: ['14:00 Meet at Kuanzhai Alley', '14:15 Wide & Narrow alleys walk: architecture, shops, food', '15:30 People\'s Park: tea house seat by lake', '16:00 Tea ceremony: Longjing or jasmine', '16:30 Ear cleaning service (optional, traditional)', '17:00 Mahjong lesson with locals', '17:30 Sichuan opera face-changing show (15 min)', '18:00 End'],
    includes: ['Private expert guide (4h)', 'Tea ceremony', 'Mahjong lesson', 'Opera show', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Ear cleaning (optional, ~)'],
  },
{ id: 'cd-06', type: 'experience', title: 'Chengdu Hot Pot Experience + Chili Oil Making', city: 'chengdu', price: 75, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 245,
    highlights: ['Authentic Sichuan hot pot', 'Make your own chili oil', 'Meat & vegetable selection guide', 'Local beer pairing'],
    description: 'Learn what makes Sichuan hot pot the world\'s most addictive meal. Your guide takes you to a local-favorite restaurant, explains the dipping sauce secrets, and you\'ll even make your own jar of chili oil to take home.',
    itinerary: ['18:00 Meet at hot pot restaurant', '18:15 Hot pot 101: broth types, ingredient selection', '18:30 Make your own dipping sauce', '19:00 Cooking lesson: timing each ingredient', '19:30 Chili oil making demonstration', '20:00 Feast + local beer pairing', '20:30 Take home your chili oil jar', '21:00 End'],
    includes: ['Private food guide (3h)', 'Hot pot dinner (all ingredients)', 'Chili oil making', '1 local beer', 'Your chili oil jar to take home', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'cd-07', type: 'experience', title: 'Sanxingdui Museum: Ancient Alien Civilization', city: 'chengdu', price: 110, duration: '6h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.9, reviews: 89,
    highlights: ['3,000-year-old bronze masks', 'Mysterious giant eye sculptures', 'Ancient Shu Kingdom artifacts', 'Museum expert guide'],
    description: 'Sanxingdui\'s bizarre bronze masks with protruding eyes and huge ears look almost alien. These 3,000-year-old artifacts from the ancient Shu Kingdom challenge everything we thought we knew about Chinese civilization.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Sanxingdui Museum', '10:00 Bronze Hall: masks, statues, trees', '11:30 Gold & jade artifacts', '12:30 Lunch at museum restaurant', '14:00 Comprehensive Museum: daily life of Shu Kingdom', '15:30 Return to Chengdu', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Sanxingdui entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'cd-08', type: 'experience', title: 'Taikoo Li, IFS Panda & Chunxi Road Shopping', city: 'chengdu', price: 45, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.5, reviews: 156,
    highlights: ['IFS rooftop panda statue', 'Taikoo Li designer shops', 'Chunxi Road pedestrian street', 'Local snack tasting'],
    description: 'See Chengdu\'s modern side. The IFS building\'s giant panda climbing the facade is an icon. Explore luxury shopping at Taikoo Li, walk Chunxi Road, and snack your way through the pedestrian zone.',
    itinerary: ['14:00 Meet at IFS', '14:15 IFS rooftop: panda statue photo', '14:45 Taikoo Li: Sichuan-style architecture + designer brands', '15:30 Chunxi Road pedestrian walk', '16:00 Snack crawl: egg tarts, sugar oil果子, rabbit heads', '17:00 End'],
    includes: ['Shopping guide (3h)', 'Snack tastings (4+ items)', 'Shopping tips', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Shopping purchases'],
  },
{ id: 'cd-09', type: 'experience', title: 'Huanglongxi Ancient Town + Water Fun', city: 'chengdu', price: 85, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.6, reviews: 78,
    highlights: ['1,700-year-old water town', 'Ancient banyan trees', 'Water gun fights (summer)', 'Traditional boat ride'],
    description: 'Cool off at Huanglongxi — a 1,700-year-old water town where locals and tourists have epic water fights in the summer. Explore ancient temples, giant banyan trees, and take a traditional wooden boat ride.',
    itinerary: ['09:00 Hotel pickup', '10:00 Arrive at Huanglongxi', '10:15 Water town walk: ancient streets, temples', '11:00 Traditional boat ride', '12:00 Lunch: local fish + river shrimp', '13:30 Water fun: water guns, splashing (summer only)', '15:00 Free time for photos & snacks', '16:00 Return to Chengdu', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Huanglongxi entrance', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Water guns (rental available)'],
  },
{ id: 'cd-10', type: 'experience', title: 'Sichuan Face-Changing Opera + Teahouse Experience', city: 'chengdu', price: 65, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.7, reviews: 134,
    highlights: ['Face-changing performance', 'Fire-spitting act', 'Puppet show', 'Tea ceremony'],
    description: 'No trip to Chengdu is complete without seeing the legendary face-changing opera. Watch performers change masks in a fraction of a second, spit fire, and perform acrobatics — all while sipping tea in a traditional teahouse.',
    itinerary: ['19:00 Meet at Shufeng Yayun Teahouse', '19:15 Traditional tea ceremony', '19:30 Folk music & puppet show', '20:00 Fire-spitting performance', '20:15 Face-changing opera (main act)', '20:45 Audience interaction: try face-changing', '21:00 End'],
    includes: ['Private guide (3h)', 'Teahouse entrance', 'Premium seat', 'Tea service', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'cd-11', type: 'experience', title: 'Wolong Panda Base: Volunteer Experience', city: 'chengdu', price: 185, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.9, reviews: 67,
    highlights: ['Panda volunteer program', 'Prepare panda food', 'Clean panda enclosure', 'Feed pandas (close contact)'],
    description: 'Go beyond watching — become a panda volunteer for a day. Under expert supervision, prepare bamboo and special panda cakes, clean enclosures, and feed these gentle giants. An unforgettable hands-on experience.',
    itinerary: ['07:00 Hotel pickup', '09:00 Arrive at Wolong', '09:30 Orientation & safety briefing', '10:00 Prepare panda food (bamboo, special cakes)', '11:00 Clean panda enclosure', '12:00 Feed pandas (through fence, close contact)', '12:30 Lunch at base', '14:00 Documentary: panda conservation', '15:00 Receive volunteer certificate', '15:30 Return to Chengdu', '18:00 Hotel drop-off'],
    includes: ['Private guide + panda keeper (8h)', 'Hotel pickup & drop-off', 'Volunteer program fee', 'Lunch', 'Certificate', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'cd-12', type: 'experience', title: 'Chengdu Tea Ceremony + Sichuan Cuisine Cooking Class', city: 'chengdu', price: 90, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 112,
    highlights: ['Gaiwan tea ceremony', '3 Sichuan dishes cooking', 'Mapo tofu from scratch', 'Take home recipes'],
    description: 'Master the art of Sichuan cooking. Learn to make mapo tofu, kung pao chicken, and fish-fragrant eggplant from a local chef. Start with a traditional gaiwan tea ceremony to set the mood.',
    itinerary: ['10:00 Meet at cooking studio', '10:15 Gaiwan tea ceremony', '10:45 Cooking class starts: 3 signature dishes', '12:30 Plating & presentation', '13:00 Feast on your creations', '14:00 Recipe cards & spice guide', '14:30 End with tea'],
    includes: ['Private chef instructor (5h)', 'All ingredients & equipment', 'Tea ceremony', '3-course meal', 'Recipe cards', 'Spice guide to take home'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'cd-13', type: 'experience', title: 'Siguniang Mountain Day Trip', city: 'chengdu', price: 165, duration: '10h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.7, reviews: 45,
    highlights: ['Snow-capped peaks', 'Alpine meadows', 'Tibetan village visit', 'High-altitude hiking'],
    description: 'Siguniang Mountain is known as the Alps of the East. See snow-capped peaks, alpine meadows filled with wildflowers, and visit a Tibetan village. Perfect for nature lovers and photographers.',
    itinerary: ['06:00 Hotel pickup', '09:00 Arrive at Siguniang Mountain', '09:30 Shuangqiao Valley: scenic drive & short hikes', '12:00 Lunch at Tibetan guesthouse', '13:30 Tibetan village visit: architecture, culture', '15:00 Changping Valley walk', '16:00 Return to Chengdu', '20:00 Hotel drop-off'],
    includes: ['Private expert guide (10h)', 'Hotel pickup & drop-off', 'Siguniang entrance', 'Lunch at Tibetan guesthouse', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'cd-14', type: 'experience', title: 'Chengdu Museum + Tianfu Square & Sichuan Cuisine History', city: 'chengdu', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.5, reviews: 67,
    highlights: ['Chengdu Museum artifacts', 'Tianfu Square history', 'Sichuan pepper story', 'Brocade museum'],
    description: 'Discover Chengdu\'s 4,000-year history at the Chengdu Museum. From ancient Shu Kingdom to modern metropolis, learn how Sichuan cuisine evolved, and see the world-famous Shu brocade weaving demonstration.',
    itinerary: ['09:00 Meet at Chengdu Museum', '09:15 Ancient Shu Kingdom gallery', '10:00 Sichuan cuisine history exhibit', '11:00 Brocade weaving demonstration', '12:00 Tianfu Square: history & symbolism', '12:30 Lunch at museum cafe', '13:30 End'],
    includes: ['Museum guide (4h)', 'Chengdu Museum entry (free)', 'Brocade demo', 'Museum cafe lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'cd-15', type: 'experience', title: 'Anren Ancient Town + Jianchuan Museum Cluster', city: 'chengdu', price: 95, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.6, reviews: 34,
    highlights: ['Republican-era architecture', 'Jianchuan Museum: 8 museums', 'Foot binding history', 'Cultural revolution artifacts'],
    description: 'Anren is one of China\'s best-preserved Republican-era towns. The Jianchuan Museum Cluster here has 8 museums covering everything from the Cultural Revolution to the Sino-Japanese War to foot binding — a powerful, educational experience.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Anren Ancient Town', '10:00 Republican-era architecture walk', '11:00 Jianchuan Museum Cluster (choose 3 museums)', '12:30 Lunch at local restaurant', '14:00 Continue museum visits', '15:30 Ancient town free time', '16:00 Return to Chengdu', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Anren town entrance', '3 museum tickets', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-01', type: 'experience', title: 'Li River Cruise & Yangshuo Countryside Bike Ride', city: 'guilin', price: 125, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.9, reviews: 156,
    highlights: ['Li River 4-star cruise', 'Cormorant fisherman photo', 'Yangshuo countryside cycling', 'Moon Hill climb'],
    description: 'Cruise the world\'s most painted river, capture the iconic cormorant fisherman, then cycle through karst peaks and rice paddies in Yangshuo\'s dreamlike countryside.',
    itinerary: ['08:00 Hotel pickup in Guilin', '09:00 4-star Li River cruise (Guilin to Yangshuo)', '12:00 Arrive Yangshuo, local lunch', '14:00 Countryside bike ride: rice paddies, buffalo, karst peaks', '15:30 Moon Hill climb', '16:30 West Street free time', '18:00 Return to Guilin', '19:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Li River 4-star cruise ticket', 'Bike rental', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Moon Hill entrance (optional, ~)'],
  },
{ id: 'gl-02', type: 'experience', title: 'Longji Rice Terraces & Yao Minority Village', city: 'guilin', price: 120, duration: '8h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.8, reviews: 112,
    highlights: ['600-year-old rice terraces', 'Yao minority village visit', 'Bamboo tube rice lunch', 'Sunset viewpoint'],
    description: 'Hike through the spectacular Dragon\'s Backbone Rice Terraces, meet the Yao people who\'ve farmed here for centuries, and enjoy a traditional lunch cooked in bamboo.',
    itinerary: ['07:30 Hotel pickup', '09:30 Arrive Longji, hike to viewpoint 1', '11:00 Yao minority village: traditional clothing, long-hair show', '12:30 Bamboo tube rice lunch with local family', '14:00 Hike to viewpoint 2 (higher terrace view)', '16:00 Sunset viewpoint', '17:00 Return to Guilin', '19:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Longji entrance ticket', 'Bamboo tube rice lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'gl-03', type: 'experience', title: 'Yangshuo West Street + Impression Liu Sanjie Show', city: 'guilin', price: 95, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.7, reviews: 134,
    highlights: ['Yangshuo West Street shopping', 'Impression Liu Sanjie (Zhang Yimou)', 'Li River night scenery', 'Local beer fish dinner'],
    description: 'See the spectacular Impression Liu Sanjie — a light show on the Li River directed by Zhang Yimou (Hero, House of Flying Daggers). Before the show, explore West Street\'s unique blend of Chinese and Western culture.',
    itinerary: ['16:00 Hotel pickup', '17:00 Arrive Yangshuo', '17:15 West Street walk: shops, cafes, bars', '18:30 Local dinner: Yangshuo beer fish', '20:00 Impression Liu Sanjie show', '21:10 Return to Guilin', '22:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Impression Liu Sanjie ticket (VIP seat)', 'Dinner', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-04', type: 'experience', title: 'Elephant Trunk Hill + Two Rivers & Four Lakes', city: 'guilin', price: 50, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.5, reviews: 198,
    highlights: ['Elephant Trunk Hill icon', 'Two Rivers Four Lakes cruise', 'Ronghu & Shanhu lakes', 'Night light show'],
    description: 'See Guilin\'s most famous landmark — Elephant Trunk Hill, shaped like an elephant drinking from the Li River. Then cruise the Two Rivers & Four Lakes to see the city\'s stunning night lights.',
    itinerary: ['19:00 Meet at Elephant Trunk Hill', '19:15 Hill visit & photo stops', '20:00 Two Rivers Four Lakes cruise', '21:00 Sun & Moon Pagodas (illuminated)', '21:30 End'],
    includes: ['Private guide (3h)', 'Elephant Trunk Hill ticket', 'Night cruise ticket', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'gl-05', type: 'experience', title: 'Yulong River Bamboo Raft + Ten Mile Gallery', city: 'guilin', price: 85, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.8, reviews: 167,
    highlights: ['Traditional bamboo raft', 'Ten Mile Gallery cycling', 'Moon Hill', 'Big Banyan Tree'],
    description: 'Drift down the Yulong River on a traditional bamboo raft with a cormorant fisherman. Then cycle the famous Ten Mile Gallery — a road winding through the most spectacular karst scenery in China.',
    itinerary: ['09:00 Hotel pickup', '10:00 Yulong River bamboo raft', '11:30 Cycle Ten Mile Gallery', '12:30 Lunch at farmhouse', '14:00 Moon Hill climb', '15:00 Big Banyan Tree visit', '16:00 Return to Guilin', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Bamboo raft', 'Bike rental', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-06', type: 'experience', title: 'Reed Flute Cave + Seven Star Park', city: 'guilin', price: 65, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.6, reviews: 89,
    highlights: ['Colorful limestone formations', 'Seven Star Cave', 'Camel Hill', 'Panda house'],
    description: "Reed Flute Cave is a natural wonder of multicolored stalactites and stalagmites. Then explore Seven Star Park — Guilin's largest park with Camel Hill, caves, and even pandas.",
    itinerary: ['14:00 Hotel pickup', '14:30 Reed Flute Cave: guided tour', '16:00 Seven Star Park: Camel Hill, Seven Star Cave', '17:00 Panda house visit', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (4h)', 'Hotel pickup & drop-off', 'Reed Flute Cave ticket', 'Seven Star Park ticket', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-07', type: 'experience', title: 'Xingping Ancient Town + 20 Yuan Bill Viewpoint', city: 'guilin', price: 75, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.7, reviews: 145,
    highlights: ['Ancient town walk', '20 yuan bill scenery', 'Laozhai Mountain viewpoint', 'Fishing cormorants'],
    description: "The back of China's 20 yuan bill features the view from Xingping. Visit this ancient town, climb Laozhai Mountain for the iconic photo, and watch cormorant fishermen at work.",
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive Xingping', '09:45 Ancient town walk', '10:30 Laozhai Mountain climb (20 min)', '11:00 Iconic viewpoint photo', '12:00 Lunch: local river fish', '13:30 Cormorant fisherman demonstration', '14:30 Free time', '15:30 Return to Guilin', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Xingping entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-08', type: 'experience', title: 'Longsheng Hot Springs + Minority Villages', city: 'guilin', price: 140, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.5, reviews: 56,
    highlights: ['Natural hot springs', 'Red Yao village', 'Long hair women', 'Forest hiking'],
    description: 'Soak in natural hot springs surrounded by forest, then visit a Red Yao village where women grow their hair up to 2 meters long. Learn about their unique customs and enjoy a home-cooked meal.',
    itinerary: ['08:00 Hotel pickup', '10:00 Arrive Longsheng Hot Springs', '10:30 Hot spring soak (1.5h)', '12:00 Lunch at spring resort', '13:30 Red Yao village visit', '14:00 Long hair demonstration', '15:00 Traditional dance performance', '16:00 Return to Guilin', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Hot Springs entrance', 'Lunch', 'Village donation', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-09', type: 'experience', title: 'Jingjiang Princes' City + Solitary Beauty Peak', city: 'guilin', price: 60, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.4, reviews: 78,
    highlights: ['Ming Dynasty palace', 'Solitary Beauty Peak climb', 'Examination hall', 'City history'],
    description: "Jingjiang Princes' City was the residence of Ming Dynasty princes. Climb Solitary Beauty Peak for panoramic views, explore the ancient examination hall, and learn about Guilin's royal history.",
    itinerary: ["09:00 Meet at Jingjiang Princes' City", '09:15 Palace walk: halls, gardens, courtyards', '10:30 Solitary Beauty Peak climb', '11:30 Panoramic city view', '12:00 Ancient examination hall', '12:30 Lunch', '13:30 End'],
    includes: ['Private expert guide (4h)', 'Jingjiang entrance', 'Solitary Beauty Peak ticket', 'Lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'gl-10', type: 'experience', title: 'Silver Cave + Peach Blossom Land', city: 'guilin', price: 90, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.6, reviews: 67,
    highlights: ['Underground silver cave', 'Boat through cave', 'Peach Blossom Land boat ride', 'Traditional village'],
    description: "Explore Silver Cave's dazzling stalactites, then boat through Peach Blossom Land — a scenic area inspired by Tao Yuanming's famous poem about a hidden utopia. A perfect day of natural wonder.",
    itinerary: ['08:00 Hotel pickup', '09:30 Silver Cave: guided tour', '11:30 Boat ride through cave', '12:30 Lunch', '14:00 Peach Blossom Land: boat ride', '15:00 Traditional village walk', '16:00 Return to Guilin', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Silver Cave ticket', 'Peach Blossom Land ticket', 'Boat rides', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-11', type: 'experience', title: 'Guilin Rice Noodle Masterclass + Market Tour', city: 'guilin', price: 55, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.8, reviews: 134,
    highlights: ['Wet market tour', 'Rice noodle making', 'Brine & topping selection', 'Eat 3 bowls'],
    description: 'Guilin rice noodles are famous throughout China. Learn to make the noodles from scratch, prepare the signature brine, and select from 20+ toppings. Eat as many bowls as you can!',
    itinerary: ['10:00 Meet at noodle shop', '10:15 Wet market: buy fresh ingredients', '10:45 Rice noodle making demonstration', '11:15 Make your own noodles', '11:45 Brine preparation: secret recipe revealed', '12:00 Topping selection: 20+ options', '12:30 Eat your creations (unlimited bowls)', '13:30 End'],
    includes: ['Noodle master guide (3h)', 'All ingredients', 'Unlimited noodles', 'Recipe card', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'gl-12', type: 'experience', title: 'Resource Tianmen Mountain + Danxia Geology', city: 'guilin', price: 130, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.5, reviews: 34,
    highlights: ['Danxia red rock formations', 'Glass skywalk', 'Tianmen Temple', 'Cable car ride'],
    description: 'Resource Tianmen Mountain features spectacular Danxia (red rock) formations. Walk the glass skywalk, visit Tianmen Temple, and learn about this unique geology from your guide.',
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Resource Tianmen', '10:00 Cable car up', '10:30 Danxia formation walk', '12:00 Glass skywalk experience', '13:00 Lunch at mountain restaurant', '14:00 Tianmen Temple visit', '15:00 Return to Guilin', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Tianmen entrance + cable car', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-13', type: 'experience', title: 'Zhengyang Walking Street + East West Lane', city: 'guilin', price: 45, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.3, reviews: 89,
    highlights: ['Pedestrian shopping street', 'East West Lane history', 'Local snack tasting', 'Night photography'],
    description: "Walk Guilin's main pedestrian street — Zhengyang — lined with shops, cafes, and street food. Then explore East West Lane, a restored historic area with traditional architecture and modern boutiques.",
    itinerary: ['19:00 Meet at Zhengyang Street', '19:15 Walking tour: shops, street food, history', '20:00 East West Lane: ancient architecture', '20:30 Snack crawl: Guilin specialties', '21:00 Night photography spots', '21:30 End'],
    includes: ['Shopping guide (3h)', 'Snack tastings (5+ items)', 'Shopping tips', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Shopping purchases'],
  },
{ id: 'gl-14', type: 'experience', title: 'Huangyao Ancient Town Day Trip', city: 'guilin', price: 115, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.7, reviews: 78,
    highlights: ['1,000-year-old town', 'Stone bridges & alleys', 'Ancient banyan trees', 'Local tofu making'],
    description: "Huangyao is one of Guangxi's best-preserved ancient towns. Walk stone bridges, explore alleys unchanged for centuries, and watch locals make tofu the traditional way.",
    itinerary: ['08:00 Hotel pickup', '10:00 Arrive at Huangyao', '10:15 Ancient town walk: bridges, alleys, temples', '12:00 Lunch: local specialties', '13:30 Tofu making demonstration', '14:30 Ancient banyan tree visit', '15:00 Free time for photos', '16:00 Return to Guilin', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Huangyao entrance', 'Lunch', 'Tofu demo', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'gl-15', type: 'experience', title: 'Guilin Landscape Painting Class', city: 'guilin', price: 70, duration: '4h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Learn Chinese ink painting', 'Paint karst mountains', 'Professional artist guide', 'Take home your artwork'],
    description: "Learn the ancient art of Chinese landscape painting from a local artist. Paint Guilin's iconic karst mountains using traditional ink and brush techniques. No experience needed — beginners welcome!",
    itinerary: ['09:00 Meet at studio', '09:15 Introduction to Chinese painting', '09:30 Brush & ink techniques', '10:00 Paint karst mountains (step-by-step)', '12:00 Your artwork complete', '12:30 Tea & discussion', '13:00 End with your painting to take home'],
    includes: ['Professional artist guide (4h)', 'All materials', 'Tea service', 'Your artwork to take home', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'sh-01', type: 'experience', title: 'The Bund, French Concession & Skyline Night Cruise', city: 'shanghai', price: 105, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.9, reviews: 178,
    highlights: ['Bund colonial architecture walk', 'French Concession hidden lanes', 'Huangpu River night cruise', 'Rooftop bar skyline view'],
    description: 'From colonial grandeur to Art Deco elegance to futuristic skyline. Your Shanghai guide reveals the stories behind every facade, ending with a glittering river cruise.',
    itinerary: ['14:00 Hotel pickup', '14:30 The Bund: colonial bank buildings', '16:00 French Concession: Wukang Road, secret gardens', '18:00 Local dinner: soup dumplings + braised pork', '19:30 Huangpu River night cruise', '21:00 Rooftop bar with skyline view', '22:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Huangpu River cruise ticket', 'French Concession walking tour', 'Dinner (2 signature dishes)', 'One cocktail at rooftop bar', 'Bottled water'],
    excludes: ['Hotel pickup outside central Shanghai', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'sh-02', type: 'experience', title: 'Zhujiajiao Ancient Water Town Day Trip', city: 'shanghai', price: 95, duration: '6h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.7, reviews: 134,
    highlights: ['Ancient stone bridges (400+ years)', 'Boat ride through canals', 'Traditional teahouse lunch', 'Local craft workshops'],
    description: 'Escape Shanghai\'s skyscrapers for a 1,700-year-old water town. Cross ancient bridges, drift through canals, and try your hand at traditional crafts with a local artisan.',
    itinerary: ['09:00 Hotel pickup', '10:00 Arrive Zhujiajiao, canal boat ride', '11:00 Fangsheng Bridge & ancient alley walk', '12:30 Teahouse lunch: river fish + local vegetables', '14:00 Traditional craft workshop', '15:00 Free time for shopping & photos', '16:00 Return to Shanghai', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Zhujiajiao entrance', 'Canal boat ride', 'Teahouse lunch', 'Craft workshop', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal shopping', 'Travel insurance'],
  },
{ id: 'sh-03', type: 'experience', title: 'Shanghai Street Food Night Adventure', city: 'shanghai', price: 85, duration: '4h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.8, reviews: 245,
    highlights: ['10+ authentic dishes', 'Hidden alley restaurants', 'Family-run dumpling shop', 'Night market exploration'],
    description: 'Follow your guide through Shanghai\'s oldest neighborhoods after dark. Taste 10+ authentic dishes at places with no English menus.',
    itinerary: ['18:00 Meet at People\'s Square', '18:15 Soup dumplings at 40-year-old shop', '19:00 Alley walk: scallion pancakes, fried dumplings', '20:00 Family-run dumpling shop (grandma\'s recipe)', '20:45 Night market: stinky tofu, sugar-coated haws', '21:30 Hidden bar for craft cocktail', '22:00 End near Nanjing Road'],
    includes: ['Private expert guide (4h)', 'All food tastings (10+ dishes)', 'One craft cocktail', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'sh-04', type: 'experience', title: 'Yu Garden, City God Temple & Xiaolongbao Masterclass', city: 'shanghai', price: 80, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.7, reviews: 198,
    highlights: ['Classical Chinese garden design', 'City God Temple bazaar', 'Soup dumpling making class', 'Tea ceremony in garden'],
    description: 'Step into a Ming Dynasty garden in the heart of modern Shanghai. Wander Yu Garden\'s rockeries and pavilions, haggle at the bazaar, then learn to make xiaolongbao from a master.',
    itinerary: ['09:00 Meet at Yu Garden', '09:15 Yu Garden: rockeries, pavilions, dragon wall', '10:30 City God Temple bazaar walk', '11:30 Xiaolongbao masterclass (make 8 dumplings)', '12:30 Eat your creations + extras', '13:30 Tea ceremony in garden teahouse', '14:00 End'],
    includes: ['Private expert guide (5h)', 'Yu Garden entrance', 'Xiaolongbao class + ingredients', 'Tea ceremony', 'Lunch (dumplings)', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Bazaar purchases'],
  },
{ id: 'sh-05', type: 'experience', title: 'Shanghai Museum Masterpieces + People\'s Square & Nanjing Road', city: 'shanghai', price: 70, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.6, reviews: 112,
    highlights: ['Ancient bronzes & ceramics', 'Chinese painting gallery', 'People\'s Square history', 'Nanjing Road neon walk'],
    description: 'Shanghai Museum is a treasure trove of 5,000 years of Chinese art. Your art historian guide focuses on the masterpieces — from Shang Dynasty bronzes to Song Dynasty porcelain to Ming furniture.',
    itinerary: ['09:00 Meet at Shanghai Museum', '09:15 Ancient Bronzes: ritual vessels & weapons', '10:30 Ceramics gallery: evolution of porcelain', '11:30 Chinese Painting: landscape masterpieces', '12:30 Lunch at museum cafe', '14:00 People\'s Square: historical buildings', '15:00 Nanjing Road pedestrian street walk', '16:00 End at the Bund'],
    includes: ['Art historian guide (5h)', 'Shanghai Museum entry (free)', 'Museum cafe lunch', 'Nanjing Road walking tour', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'sh-06', type: 'experience', title: 'Tianzifang + Xintiandi: Shanghai\'s Creative & Fashion Heart', city: 'shanghai', price: 65, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.5, reviews: 134,
    highlights: ['Tianzifang alley art', 'Shikumen architecture', 'Xintiandi designer boutiques', 'Craft beer tasting'],
    description: 'From Tianzifang\'s bohemian art alleys to Xintiandi\'s sleek Shikumen redevelopment — see how Shanghai preserves its past while charging into the future. End with a craft beer at a local microbrewery.',
    itinerary: ['14:00 Meet at Tianzifang', '14:15 Art alley walk: galleries, studios, boutiques', '15:30 Shikumen architecture explained', '16:30 Walk to Xintiandi', '17:00 Xintiandi designer shopping & history', '18:00 Craft beer tasting at local microbrewery', '19:00 End'],
    includes: ['Private expert guide (4h)', 'Tianzifang art walk', 'Xintiandi history tour', '3 craft beer tastings', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Shopping purchases'],
  },
{ id: 'sh-07', type: 'experience', title: 'Shanghai Disneyland VIP Assistant Service', city: 'shanghai', price: 165, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.8, reviews: 89,
    highlights: ['Park entry assistance', 'Fast-pass strategy', 'Chinese-speaking assistant', 'Best photo spots'],
    description: 'Navigate Shanghai Disneyland like a pro. Your local assistant handles all communication, gets you on the best rides with minimal wait, and knows all the secret photo spots. Perfect for families with kids or first-time visitors.',
    itinerary: ['08:30 Hotel pickup', '09:00 Arrive at Disneyland', '09:15 Entry assistance & fast-pass strategy', '09:30 Tron Lightcycle (priority queue)', '10:30 Pirates of the Caribbean', '11:30 Roaring Rapids', '12:30 Lunch at restaurant (reservation secured)', '14:00 Peter Pan\'s Flight', '15:00 Marvel Universe & shows', '16:00 Best photo spots tour', '17:00 Fireworks viewing spot reservation', '17:30 End (optional: stay for fireworks)'],
    includes: ['Private assistant (8h)', 'Hotel pickup & drop-off', 'Park communication support', 'Fast-pass strategy', 'Restaurant reservation help', 'Photo spot guide'],
    excludes: ['Park entrance ticket (must be purchased separately)', 'Meals', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'sh-08', type: 'experience', title: 'Shanghai Tower Observation Deck + Lujiazui Finance Walk', city: 'shanghai', price: 85, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.7, reviews: 156,
    highlights: ['World\'s 3rd tallest building', '360° city view from 118F', 'Lujiazui skyscraper cluster', 'Oriental Pearl Tower exterior'],
    description: 'Rise above Shanghai\'s clouds. The Shanghai Tower\'s observation deck offers a view that stretches to the horizon. Then walk among the giants of Lujiazui — the world\'s most impressive skyline cluster.',
    itinerary: ['15:00 Meet at Shanghai Tower', '15:15 World\'s fastest elevator to 118F', '15:30 360° observation deck & photo time', '16:30 Descend & Lujiazui skyscraper walk', '17:00 Oriental Pearl Tower exterior', '17:30 Shanghai IFC Mall & Apple Store', '18:00 End with sunset view from riverside'],
    includes: ['Private expert guide (4h)', 'Shanghai Tower observation deck ticket', 'Lujiazui walking tour', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Oriental Pearl Tower interior (optional)'],
  },
{ id: 'sh-09', type: 'experience', title: 'Suzhou Day Trip: Classical Gardens & Silk Factory', city: 'shanghai', price: 145, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.8, reviews: 167,
    highlights: ['UNESCO Humble Administrator\'s Garden', 'Master of Nets Garden', 'Silk factory tour', 'Pingjiang Road canal walk'],
    description: 'Suzhou is the Venice of the East — and the birthplace of Chinese gardens. Visit two UNESCO World Heritage gardens, watch silk being made from cocoon to fabric, and walk the canal-side Pingjiang Road.',
    itinerary: ['08:00 Hotel pickup', '09:30 High-speed train to Suzhou (30 min)', '10:00 Humble Administrator\'s Garden', '12:00 Lunch: Suzhou noodles + sweet & sour mandarin fish', '13:30 Silk factory: cocoon to fabric demonstration', '15:00 Master of Nets Garden', '16:30 Pingjiang Road canal walk', '17:30 Return to Shanghai', '19:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Train tickets (round trip)', 'Garden entrance fees', 'Silk factory tour', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'sh-10', type: 'experience', title: 'Jewish Refugees Museum + Hongkew District History Walk', city: 'shanghai', price: 75, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.6, reviews: 78,
    highlights: ['Jewish Refugees Museum', 'Ohel Moshe Synagogue', 'Former ghetto area', 'Refugee survivor stories'],
    description: 'Discover a forgotten chapter of WWII history. Shanghai was the only city in the world that required no visa for Jewish refugees. Walk the streets of the former Jewish ghetto and hear remarkable survival stories.',
    itinerary: ['09:00 Meet at Jewish Refugees Museum', '09:15 Museum tour: visas, life in the ghetto', '10:30 Ohel Moshe Synagogue visit', '11:00 Former ghetto area walk: residences, shops', '11:45 Refugee survivor story session (when available)', '12:30 Lunch at historic Jewish cafe', '13:00 End'],
    includes: ['Private expert guide (4h)', 'Jewish Refugees Museum entry (free)', 'Synagogue visit', 'Historic district walk', 'Lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'sh-11', type: 'experience', title: 'Chongming Island Eco Tour + Dongtan Wetland Park', city: 'shanghai', price: 120, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.5, reviews: 45,
    highlights: ['Dongtan Wetland birdwatching', 'Organic farm visit', 'Chongming bicycle ride', 'Local crab lunch (seasonal)'],
    description: 'Escape the city to Shanghai\'s green lung. Chongming Island is a birdwatcher\'s paradise at Dongtan Wetlands, an organic farming showcase, and a peaceful cycling destination. Seasonal hairy crab lunch is a bonus.',
    itinerary: ['08:00 Hotel pickup', '09:00 Ferry to Chongming Island', '10:00 Dongtan Wetland Park: birdwatching walk', '12:00 Organic farm visit & vegetable picking', '13:00 Farm-to-table lunch', '14:30 Chongming bicycle ride (countryside path)', '16:00 Return ferry to Shanghai', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Ferry tickets', 'Dongtan Wetland entrance', 'Bicycle rental', 'Farm visit', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'sh-12', type: 'experience', title: 'M50 Creative Park + Suzhou Creek Street Art Walk', city: 'shanghai', price: 60, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.4, reviews: 67,
    highlights: ['M50 gallery hopping', 'Suzhou Creek graffiti', 'Contemporary Chinese art', 'Local artist meetups'],
    description: 'Explore Shanghai\'s industrial-chic art scene at M50, a former textile mill turned creative hub. Then walk along Suzhou Creek to discover hidden street art murals and graffiti that most tourists never see.',
    itinerary: ['14:00 Meet at M50', '14:15 Gallery hopping: 5+ contemporary galleries', '15:30 Artist studio visits (when available)', '16:30 Suzhou Creek street art walk', '17:30 Hidden mural spots & graffiti alley', '18:00 Coffee at riverside cafe', '18:30 End'],
    includes: ['Art insider guide (4h)', 'Gallery entrance fees', 'Artist studio visits', 'Coffee', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Art purchases'],
  },
{ id: 'sh-13', type: 'experience', title: 'Hangzhou Day Trip: West Lake, Lingyin Temple & Tea Plantation', city: 'shanghai', price: 155, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.9, reviews: 134,
    highlights: ['West Lake boat cruise', 'Lingyin Temple Buddhist art', 'Longjing tea plantation', 'High-speed train experience'],
    description: 'Just 45 minutes by high-speed train, Hangzhou is China\'s most beautiful city. Cruise West Lake, visit the ancient Lingyin Temple with its 1,000-year-old rock carvings, and sip Longjing dragon well tea at the source.',
    itinerary: ['08:00 Hotel pickup', '09:00 High-speed train to Hangzhou (45 min)', '10:00 West Lake: boat cruise & Three Pools Mirroring the Moon', '12:00 Lunch: Hangzhou signature dishes', '13:30 Lingyin Temple: Buddhist art & rock carvings', '15:00 Longjing Tea Village: tea picking demo & tasting', '16:30 Walk through bamboo forest path', '17:30 Return train to Shanghai', '19:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Train tickets (round trip)', 'West Lake boat ticket', 'Lingyin Temple entrance', 'Tea tasting', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'sh-14', type: 'experience', title: 'Shanghai Local Cooking Class: Benbang Cuisine', city: 'shanghai', price: 90, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.7, reviews: 98,
    highlights: ['Wet market shopping', 'Chef-led cooking class', 'Braised pork & soup dumplings', 'Eat your own creations'],
    description: 'Learn to cook authentic Shanghai Benbang cuisine. Shop for fresh ingredients at a neighborhood wet market, then follow a local chef to make red-braised pork, sweet & sour mandarin fish, and handmade soup dumplings.',
    itinerary: ['10:00 Meet at cooking studio', '10:15 Wet market tour: pick fresh ingredients', '11:00 Cooking class starts: braised pork, fish, dumplings', '12:30 Plating & presentation lesson', '13:00 Feast on your creations', '14:00 End with recipe cards'],
    includes: ['Private chef instructor (4h)', 'All ingredients & equipment', 'Wet market tour', '3-course meal (eat what you cook)', 'Recipe cards to take home', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'sh-15', type: 'experience', title: 'Shanghai Film Studio Tour: Old Shanghai & Movie Magic', city: 'shanghai', price: 85, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=600&h=400&fit=crop', rating: 4.3, reviews: 56,
    highlights: ['Film set visits', '1930s Shanghai street recreation', 'Costume photo shoot', 'Behind-the-scenes tour'],
    description: 'Step onto the sets where Chinese blockbusters are made. Visit Shanghai Film Studio\'s recreated 1930s streets, try on Republican-era costumes, and learn how filmmakers recreate old Shanghai.',
    itinerary: ['13:00 Hotel pickup', '14:00 Shanghai Film Studio arrival', '14:15 1930s Shanghai street set walk', '15:00 Costume fitting & photo shoot (Republican era)', '15:30 Behind-the-scenes: green screen & effects', '16:00 Film set visit (if shooting)', '16:30 Old Shanghai prop museum', '17:00 End'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Film Studio entrance', 'Costume rental', 'Photo shoot', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
];

// ========== GUIDE DATA ==========
const GUIDES = [
  { id: 'g1', name: 'David Wang', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', cities: ['beijing'], level: 'senior', english: 'expert', specialties: ['History', 'Architecture', 'Great Wall'], rating: 4.9, reviews: 128, priceEscort: 600, priceExpert: 900, bio: 'Licensed senior guide with 15 years experience. Former history teacher. Speaks fluent English and German. Expert in Ming & Qing dynasties.' },
  { id: 'g2', name: 'Linda Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face', cities: ['shanghai'], level: 'senior', english: 'expert', specialties: ['Modern Shanghai', 'Art Deco', 'Food Tours'], rating: 4.8, reviews: 96, priceEscort: 650, priceExpert: 1000, bio: 'Shanghai native and art historian. Specializes in the Bund\'s colonial architecture and French Concession stories.' },
  { id: 'g3', name: 'Mike Zhang', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', cities: ['xian'], level: 'intermediate', english: 'expert', specialties: ['Terracotta Warriors', 'Ancient History', 'Calligraphy'], rating: 4.7, reviews: 64, priceEscort: 450, priceExpert: 700, bio: 'Passionate about Xi\'an\'s 3000-year history. Can spend hours at the Terracotta Warriors explaining every detail.' },
  { id: 'g4', name: 'Sophie Liu', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', cities: ['chengdu'], level: 'intermediate', english: 'escort', specialties: ['Pandas', 'Sichuan Cuisine', 'Nightlife'], rating: 4.6, reviews: 52, priceEscort: 400, priceExpert: 600, bio: 'Fun-loving Chengdu girl who knows every hot pot spot in town. Great for food tours and panda base visits.' },
  { id: 'g5', name: 'James Li', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', cities: ['guilin','zhangjiajie'], level: 'senior', english: 'expert', specialties: ['Nature', 'Photography', 'Hiking'], rating: 4.9, reviews: 87, priceEscort: 550, priceExpert: 850, bio: 'Nature photographer turned guide. Knows the best sunrise spots in Guilin and Zhangjiajie.' },
  { id: 'g6', name: 'Amy Wu', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face', cities: ['beijing'], level: 'junior', english: 'escort', specialties: ['Street Food', 'Shopping', 'Local Life'], rating: 4.5, reviews: 31, priceEscort: 350, priceExpert: 500, bio: 'Young, energetic guide who loves Beijing\'s hutongs and street food. Great for budget travelers.' },
  { id: 'g7', name: 'Leo Fang', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face', cities: ['wuhan'], level: 'senior', english: 'expert', specialties: ['History', 'River Culture', 'Street Food'], rating: 4.9, reviews: 72, priceEscort: 500, priceExpert: 750, bio: 'Born and raised by the Yangtze River. Leo brings Wuhan\'s 3500-year history to life — from ancient Chu kingdom to modern metropolis. Knows every hidden breakfast spot for reganmian.' },
];

// ========== BLOG POSTS ==========
const BLOG_POSTS = [
  { id: 'b1', title: 'Why You Need a Guide in Beijing (And Not Just Google)', slug: 'why-guide-beijing', excerpt: 'The Forbidden City is 180 acres. Without a guide, you\'ll see buildings — but miss the stories that make them alive.', cover: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop', category: 'Travel Tips', date: '2025-06-15', readTime: '5 min' },
  { id: 'b2', title: 'The Real Cost of Traveling China Without a Guide', slug: 'real-cost-china-travel', excerpt: 'We crunched the numbers: getting lost, overpaying at tourist traps, and missed opportunities. The guide pays for itself.', cover: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=500&fit=crop', category: 'Money', date: '2025-06-10', readTime: '7 min' },
  { id: 'b3', title: 'Sichuan Food: A Guide to Eating Without Dying', slug: 'sichuan-food-survival', excerpt: 'Spicy is an understatement. Here\'s how to enjoy Sichuan cuisine without setting your mouth on fire — unless you want to.', cover: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=800&h=500&fit=crop', category: 'Food', date: '2025-06-05', readTime: '6 min' },
];

function getGuidesByCity(cityId) { return !cityId ? GUIDES : GUIDES.filter(g => g.cities.includes(cityId)); }
function getGuideById(id) { return GUIDES.find(g => g.id === id); }
function getExperiencesByCity(cityId) { return !cityId ? EXPERIENCES : EXPERIENCES.filter(e => e.city === cityId); }
function getExperienceById(id) { return EXPERIENCES.find(e => e.id === id); }

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '<i class="fas fa-star"></i>';
    else if (i - 0.5 <= rating) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return html;
}

function levelBadge(level) {
  if (level === 'senior') return '<span class="badge badge-gold"><i class="fas fa-medal"></i> Senior Guide</span>';
  if (level === 'intermediate') return '<span class="badge badge-silver"><i class="fas fa-medal"></i> Intermediate</span>';
  return '<span class="badge badge-bronze"><i class="fas fa-medal"></i> Junior Guide</span>';
}

function englishBadge(type) {
  if (type === 'expert') return '<span class="badge badge-primary"><i class="fas fa-comments"></i> Expert English</span>';
  return '<span class="badge badge-accent"><i class="fas fa-smile"></i> Escort (Basic)</span>';
}

function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function daysBetween(d1, d2) {
  if (!d1 || !d2) return 0;
  const a = new Date(d1), b = new Date(d2);
  return Math.max(1, Math.ceil((b - a) / (1000 * 60 * 60 * 24)) + 1);
}

// ========== PARTICLE ANIMATION ==========
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const count = 50;
  
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);
  
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.fill();
    }
  }
  
  for (let i = 0; i < count; i++) particles.push(new Particle());
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ========== COUNTDOWN TIMER ==========
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  endDate.setHours(23, 59, 59, 999);
  
  function update() {
    const now = new Date();
    const diff = endDate - now;
    if (diff <= 0) { el.innerHTML = 'Offer expired!'; return; }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    el.innerHTML = `<span style="font-weight:700;color:var(--accent);">${days}d ${hours}h ${minutes}m</span> left for early-bird pricing`;
  }
  update();
  setInterval(update, 60000);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initReveal();
  initFAQ();
  initSmoothScroll();
  updateAuthUI();
  initParticles();
  initCountdown();
});
{ id: 'wh-01', type: 'experience', title: 'Yellow Crane Tower, East Lake & Hubei Museum', city: 'wuhan', price: 95, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.8, reviews: 145,
    highlights: ['Yellow Crane Tower: 1,800 years of poetry', 'East Lake scenic bike ride', 'Hubei Museum: bronze bells & Chu culture', 'Wuhan cherry blossoms (seasonal)'],
    description: 'Wuhan is the heart of central China. Climb the Yellow Crane Tower for Yangtze River views, cycle around East Lake, and discover 2,000-year-old Chu Kingdom artifacts at the Hubei Museum.',
    itinerary: ['08:00 Hotel pickup', '09:00 Yellow Crane Tower: history & poetry', '10:30 Yangtze River waterfront walk', '12:00 Lunch: Wuhan hot dry noodles (reganmian)', '13:30 Hubei Museum: ancient bronze bells, Chu Kingdom artifacts', '15:30 East Lake: bike ride & cherry blossoms (seasonal)', '17:00 Luojia Hill viewpoint', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Yellow Crane Tower ticket', 'Hubei Museum entry', 'Bike rental', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-02', type: 'experience', title: 'Wuhan Street Food Night Tour: Reganmian, Duck Necks & Doupi', city: 'wuhan', price: 65, duration: '4h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.9, reviews: 234,
    highlights: ['15+ authentic street foods', 'Hot dry noodles masterclass', 'Spicy duck neck tasting', 'Doupi (tofu skin) making'],
    description: "Wuhan is China's breakfast capital. Follow your guide through night markets and alley food stalls to taste 15+ local specialties including the legendary hot dry noodles, spicy duck necks, and freshly made doupi.",
    itinerary: ['17:00 Meet at Jianghan Road', '17:15 Jianghan Road food walk: street snacks', '18:00 Reganmian masterclass: make your own noodles', '18:30 Jiqing Street: spicy duck necks, crawfish', '19:30 Hubu Alley: doupi, fried dumplings, rice wine', '20:30 Night market: stinky tofu, sugar-coated haws', '21:00 End'],
    includes: ['Private food expert guide (4h)', 'All food tastings (15+ dishes)', 'Reganmian making demo', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'wh-03', type: 'experience', title: 'Yangtze River Cruise, Wuhan Yangtze River Bridge & Jianghan Road', city: 'wuhan', price: 75, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.7, reviews: 178,
    highlights: ['Yangtze River sunset cruise', 'Wuhan Yangtze River Bridge history', 'Jianghan Road colonial architecture', 'Hankou concession district walk'],
    description: "Experience the mighty Yangtze River on a sunset cruise. Walk across the historic Wuhan Yangtze River Bridge, then explore Jianghan Road's colonial-era architecture and the former Hankou concession district.",
    itinerary: ['16:00 Hotel pickup', '16:30 Yangtze River cruise boarding', '17:00 Sunset cruise: city skyline, bridge views', '18:30 Walk across Wuhan Yangtze River Bridge', '19:30 Jianghan Road: colonial architecture walk', '20:00 Hankou concession district: historical buildings', '20:30 Night photography at the Bund of Wuhan', '21:00 End'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Yangtze River cruise ticket', 'Bridge walk', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner', 'Personal expenses'],
  },
{ id: 'wh-04', type: 'experience', title: 'Guiyuan Temple, Gude Temple & Buddhist Culture Tour', city: 'wuhan', price: 60, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.6, reviews: 89,
    highlights: ['Guiyuan Temple: 500 arhat statues', 'Gude Temple: Roman-style architecture', 'Buddhist vegetarian lunch', 'Meditation session'],
    description: "Visit two of Wuhan's most fascinating temples. Guiyuan Temple houses 500 life-sized arhat statues, each with a unique expression. Gude Temple is a bizarre fusion of Chinese, Roman, and Burmese architecture. End with a vegetarian lunch and meditation session.",
    itinerary: ['09:00 Hotel pickup', '09:30 Guiyuan Temple: 500 arhat statues', '11:00 Gude Temple: unique architecture fusion', '12:00 Buddhist vegetarian lunch', '13:00 Meditation session with monk', '14:00 End'],
    includes: ['Private expert guide (4h)', 'Hotel pickup & drop-off', 'Guiyuan Temple ticket', 'Gude Temple ticket', 'Vegetarian lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-05', type: 'experience', title: 'Wuhan University + Optical Valley Tech Tour', city: 'wuhan', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.5, reviews: 67,
    highlights: ['Wuhan University: 130-year-old campus', 'Cherry blossom avenue (seasonal)', 'Optical Valley tech hub', 'Innovation center visit'],
    description: "Explore one of China's most beautiful university campuses. Wuhan University combines traditional Chinese architecture with modern facilities. Then visit Optical Valley, China's Silicon Valley for photonics and fiber optics.",
    itinerary: ['09:00 Hotel pickup', '09:30 Wuhan University campus tour: old buildings, library', '10:30 Cherry blossom avenue (seasonal, Mar-Apr)', '11:30 University museum', '12:30 Lunch at campus restaurant', '14:00 Optical Valley: tech hub walk', '15:00 Innovation center visit', '16:00 End'],
    includes: ['University guide (4h)', 'Hotel pickup & drop-off', 'Campus entry', 'Museum entry', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-06', type: 'experience', title: 'Mulan Mountain + Huangpi Countryside', city: 'wuhan', price: 110, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.7, reviews: 45,
    highlights: ['Mulan Mountain hiking', 'Mulan Temple (legendary female warrior)', 'Countryside tea plantation', 'Farm-to-table lunch'],
    description: 'Hike Mulan Mountain, named after the legendary female warrior who disguised herself as a man to fight for her father. Visit the ancient temple dedicated to her, then enjoy tea picking and a farm-to-table lunch in the Huangpi countryside.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Mulan Mountain', '10:00 Hike to summit: forest, streams, temples', '12:00 Mulan Temple: history of the legendary warrior', '13:00 Lunch at farmhouse: local chicken, vegetables', '14:30 Tea plantation visit: picking & tasting', '16:00 Return to Wuhan', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Mulan Mountain entrance', 'Lunch', 'Tea tasting', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'wh-07', type: 'experience', title: 'Qingchuan Pavilion, Turtle Mountain TV Tower & Night Market', city: 'wuhan', price: 50, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.4, reviews: 112,
    highlights: ['Qingchuan Pavilion: riverside view', 'Turtle Mountain TV Tower', 'Guqin Terrace', 'Siji Street night market'],
    description: 'Visit Qingchuan Pavilion for views of the Yangtze and Han River confluence. Climb Turtle Mountain TV Tower for 360-degree city views, then dive into Siji Street night market for local snacks.',
    itinerary: ['17:00 Hotel pickup', '17:30 Qingchuan Pavilion: history & river views', '18:30 Turtle Mountain TV Tower: city panorama', '19:30 Guqin Terrace: ancient music history', '20:00 Siji Street night market: food crawl', '21:00 End'],
    includes: ['Private expert guide (4h)', 'Hotel pickup & drop-off', 'Qingchuan Pavilion ticket', 'TV Tower ticket', 'Snack tastings (5+ items)', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner', 'Personal expenses'],
  },
{ id: 'wh-08', type: 'experience', title: 'Wuhan Art Museum + 403 International Art Center', city: 'wuhan', price: 45, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.5, reviews: 78,
    highlights: ['Wuhan Art Museum: contemporary Chinese art', '403 International Art Center', 'Street art in Hankou', 'Artist studio visits'],
    description: "Discover Wuhan's booming art scene. The Wuhan Art Museum showcases cutting-edge Chinese contemporary art, while 403 International Art Center is a converted factory space hosting exhibitions and performances. Meet local artists in their studios.",
    itinerary: ['14:00 Meet at Wuhan Art Museum', '14:15 Contemporary art exhibition walk', '15:30 403 International Art Center: converted factory space', '16:30 Street art walk in Hankou', '17:00 Artist studio visit (when available)', '17:30 End'],
    includes: ['Art guide (3h)', 'Museum entrance', 'Art center entrance', 'Artist studio visit', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Art purchases'],
  },
{ id: 'wh-09', type: 'experience', title: 'Wuhan Revolutionary History: Wuchang Uprising Memorial', city: 'wuhan', price: 60, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.6, reviews: 56,
    highlights: ['Wuchang Uprising Memorial', '1911 Revolution Museum', "Sun Yat-sen's former residence", 'Red Building history'],
    description: 'Wuhan was the birthplace of the 1911 Revolution that ended 2,000 years of imperial rule. Visit the Wuchang Uprising Memorial, the 1911 Revolution Museum, and the Red Building where history was made.',
    itinerary: ['09:00 Hotel pickup', '09:30 Wuchang Uprising Memorial: bronze statues, artifacts', '11:00 1911 Revolution Museum: interactive exhibits', '12:30 Lunch at local restaurant', '14:00 Red Building: where the revolution began', "15:00 Sun Yat-sen's former residence", '16:00 End'],
    includes: ['Private historian guide (5h)', 'Hotel pickup & drop-off', 'All museum tickets', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-10', type: 'experience', title: 'Wuhan Cherry Blossom Festival (Seasonal)', city: 'wuhan', price: 85, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.9, reviews: 198,
    highlights: ['Wuhan University cherry blossoms', 'East Lake cherry garden', 'Moshan Hill viewpoints', 'Traditional hanfu costume'],
    description: 'March transforms Wuhan into a pink wonderland. Walk under the famous cherry blossom tunnels at Wuhan University and East Lake, climb Moshan Hill for panoramic views, and wear traditional hanfu costume for photos.',
    itinerary: ['08:00 Hotel pickup', '08:30 Wuhan University: cherry blossom avenue', '10:00 East Lake cherry garden: boat ride', '11:30 Moshan Hill climb', '12:30 Lunch with cherry blossom theme', '14:00 Hanfu costume rental & photo shoot', '15:30 Tea ceremony under cherry trees', '16:00 End'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'East Lake boat ticket', 'Hanfu costume rental', 'Lunch', 'Tea ceremony', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'wh-11', type: 'experience', title: 'Wuhan Coffee Culture + Tanhualin Art Street', city: 'wuhan', price: 40, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.3, reviews: 89,
    highlights: ['Tanhualin historic street', 'Third-wave coffee shops', 'Independent bookstores', 'Street art murals'],
    description: "Tanhualin is Wuhan's most artistic neighborhood. Explore historic streets lined with independent coffee shops, vintage bookstores, and street art. Your guide knows the best baristas and hidden cafes.",
    itinerary: ['14:00 Meet at Tanhualin', '14:15 Historic street walk: architecture, shops', '14:45 Coffee shop 1: pour-over specialty', '15:15 Bookstore: local literature & art books', '15:45 Coffee shop 2: signature latte art', '16:15 Street art mural walk', '16:45 End'],
    includes: ['Local guide (3h)', '2 specialty coffees', 'Bookstore visit', 'Street art tour', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional food/drinks'],
  },
{ id: 'wh-12', type: 'experience', title: 'Wuhan Wet Market + Home Cooking Experience', city: 'wuhan', price: 90, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.7, reviews: 67,
    highlights: ['Wet market ingredient shopping', 'Local family cooking class', 'Wuhan hot dry noodles from scratch', 'Eat with local family'],
    description: 'Shop for fresh ingredients at a traditional Wuhan wet market, then cook with a local family in their home. Learn to make authentic hot dry noodles, spicy fish, and lotus root soup. Dine with the family and hear their stories.',
    itinerary: ['09:00 Hotel pickup', '09:30 Wet market tour: pick fresh ingredients', '10:30 Arrive at local family home', '11:00 Cooking class: noodles, fish, lotus root soup', '12:30 Eat with the family', '13:30 Tea & conversation', '14:00 End'],
    includes: ['Private food guide (5h)', 'Hotel pickup & drop-off', 'Wet market tour', 'All ingredients', 'Home cooking class', 'Family lunch', 'Recipe cards', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-13', type: 'experience', title: 'Wuhan Sports Stadium Tour + Olympic Training Center', city: 'wuhan', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.2, reviews: 34,
    highlights: ['Wuhan Sports Center stadium', 'Olympic training facility', 'Athlete meet-and-greet (when available)', 'Sports museum'],
    description: 'Wuhan is a major sports hub in China. Tour the massive Wuhan Sports Center, visit the Olympic training facility where athletes prepare for international competitions, and explore the sports museum.',
    itinerary: ['09:00 Hotel pickup', '09:30 Wuhan Sports Center: stadium tour', '10:30 Olympic training facility: swimming, gymnastics', '11:30 Meet athletes (when available)', '12:00 Sports museum: medals, history', '12:30 Lunch at sports complex', '13:30 End'],
    includes: ['Sports guide (4h)', 'Hotel pickup & drop-off', 'Stadium tour', 'Training facility visit', 'Museum entry', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-14', type: 'experience', title: 'Wuhan Metro Museum + Urban Planning Exhibition', city: 'wuhan', price: 35, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.1, reviews: 45,
    highlights: ['Wuhan Metro system: 12 lines', 'Urban planning exhibition', 'Yangtze River Tunnel history', 'Future city models'],
    description: "Wuhan has one of the world's largest metro systems. Visit the Metro Museum to see how the city was built around the Yangtze River, explore the Urban Planning Exhibition with massive scale models, and learn about the Yangtze River Tunnel engineering marvel.",
    itinerary: ['09:00 Meet at Metro Museum', '09:15 Metro history: from 1 line to 12 lines', '10:00 Urban Planning Exhibition: scale model of Wuhan', '11:00 Yangtze River Tunnel: engineering marvel', '11:30 Future Wuhan: 2050 city plans', '12:00 End'],
    includes: ['Urban planning guide (3h)', 'Metro Museum entry', 'Urban Planning Exhibition entry', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Lunch'],
  },
{ id: 'wh-15', type: 'experience', title: 'Wuhan Day Trip to Jiugong Mountain', city: 'wuhan', price: 130, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.6, reviews: 23,
    highlights: ['Jiugong Mountain hiking', 'Cloud sea views', 'Ancient Taoist temple', 'Alpine meadow camping'],
    description: 'Jiugong Mountain is a hidden gem near Wuhan. Hike through cloud forests to the summit for spectacular sea-of-clouds views, visit an ancient Taoist temple, and enjoy the alpine meadow scenery.',
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Jiugong Mountain', '10:00 Forest hike: cloud forests & waterfalls', '12:00 Summit temple visit', '13:00 Lunch at mountain restaurant', '14:30 Alpine meadow walk', '16:00 Return to Wuhan', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Jiugong Mountain entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'xa-01', type: 'experience', title: 'Terracotta Warriors & Ancient City Wall Bike Ride', city: 'xian', price: 125, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.9, reviews: 198,
    highlights: ['Skip-the-line Terracotta Warriors', 'Pit 2 behind-the-scenes', 'City Wall bike ride', 'Traditional lunch'],
    description: 'Go beyond the standard tourist route. Your expert guide takes you to restricted areas of the Terracotta Warriors, then bike the 14th-century city wall at sunset.',
    itinerary: ['08:00 Hotel pickup', '09:00 Terracotta Warriors (skip-the-line)', '09:30 Pit 1: formation & restoration stories', '10:30 Pit 2: behind-the-scenes workshop', '11:30 Pit 3: command center', '12:30 Traditional Shaanxi lunch (biangbiang noodles + roujiamo)', '14:00 Return to city center', '15:00 Ancient City Wall bike ride (2 hours)', '17:00 End at South Gate'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Terracotta Warriors skip-the-line ticket', 'City Wall bike rental', 'Traditional lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'xa-02', type: 'experience', title: 'Muslim Quarter Food Tour & Tang Dynasty Show', city: 'xian', price: 95, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 167,
    highlights: ['15+ Muslim Quarter dishes', 'Grand Mosque visit', 'Tang Dynasty music & dance show', 'Calligraphy lesson'],
    description: "Eat your way through Xi'an's legendary Muslim Quarter, visit China's oldest mosque, and end with a spectacular Tang Dynasty performance with live music.",
    itinerary: ['16:00 Meet at Bell Tower', '16:15 Muslim Quarter food crawl: yangroupaomo, liangpi, jiasan, etc.', "17:30 Great Mosque of Xi'an", '18:30 Traditional dumpling dinner', '20:00 Tang Dynasty Music & Dance Show', '21:30 Optional: calligraphy lesson with local master', '22:00 End'],
    includes: ['Private expert guide (6h)', 'All food tastings (15+ dishes)', 'Great Mosque ticket', 'Tang Dynasty Show ticket', 'Dumpling dinner', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Calligraphy materials (optional)'],
  },
  { id: 'xa-03', type: 'experience', title: 'Mount Huashan Adventure: Plank Walk & Sunrise', city: 'xian', price: 165, duration: '10h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.9, reviews: 134,
    highlights: ["World's most dangerous hike", 'Plank walk on cliff edge', 'Sunrise from East Peak', 'Cable car options'],
    description: "Test your courage on Mount Huashan's infamous plank walk — a wooden path bolted to a sheer cliff face. Or take the cable car for equally spectacular views. Watch the sunrise from the East Peak for an unforgettable experience.",
    itinerary: ['21:00 Hotel pickup (night departure)', '23:00 Arrive at Huashan, night hike begins', '03:00 North Peak rest stop', '05:00 East Peak for sunrise', '06:00 Plank walk experience (optional)', '08:00 South Peak (highest point)', '10:00 West Peak cable car down', "12:00 Return to Xi'an", '14:00 Hotel drop-off'],
    includes: ['Private expert guide (10h)', 'Hotel pickup & drop-off', 'Huashan entrance', 'Cable car (one way)', 'Breakfast', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance', 'Second cable car (optional)'],
  },
{ id: 'xa-04', type: 'experience', title: 'Big Wild Goose Pagoda, Da Ci'en Temple & Fountain Show', city: 'xian', price: 65, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 112,
    highlights: ['7-story Tang Dynasty pagoda', "Da Ci'en Temple Buddhist art", 'Musical fountain show', 'Tang Culture Square'],
    description: "The Big Wild Goose Pagoda has stood for 1,300 years as a symbol of Xi'an. Climb to the top for city views, explore the temple complex, and end with Asia's largest musical fountain show.",
    itinerary: ['18:00 Meet at Big Wild Goose Pagoda South Square', '18:15 Pagoda climb: Buddhist relics & city view', "19:00 Da Ci'en Temple grounds walk", '19:30 Tang Culture Square: statues & history', '20:00 Musical fountain show (20 min)', '20:30 Night photography of illuminated pagoda', '21:00 End'],
    includes: ['Private expert guide (4h)', 'Big Wild Goose Pagoda ticket', 'Musical fountain show', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
{ id: 'xa-05', type: 'experience', title: 'Shaanxi History Museum Deep Dive + Small Goose Pagoda', city: 'xian', price: 75, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 145,
    highlights: ['300,000+ artifacts', 'Tang Dynasty gold & silver', 'Ancient murals tomb', 'Small Goose Pagoda serenity'],
    description: 'Shaanxi History Museum is often called the best museum in China. Your historian guide takes you through 5,000 years of history in 3 hours, focusing on the most remarkable pieces. End at the peaceful Small Goose Pagoda.',
    itinerary: ['09:00 Meet at Shaanxi History Museum', '09:15 Pre-Qin Dynasty: bronzes & weapons', '10:00 Han Dynasty: terracotta warriors & silk road', '11:00 Tang Dynasty: gold, silver & foreign trade', '12:00 Ancient tomb murals gallery', '13:00 Lunch at museum cafe', '14:00 Walk to Small Goose Pagoda', '14:30 Pagoda visit & Jianfu Temple', '15:30 End'],
    includes: ['History expert guide (5h)', 'Shaanxi History Museum entry (free)', 'Small Goose Pagoda ticket', 'Museum cafe lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'xa-06', type: 'experience', title: 'Hukou Waterfall Day Trip: Yellow River's Fury', city: 'xian', price: 155, duration: '8h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 89,
    highlights: ["World's largest yellow waterfall", 'Yellow River boat ride', 'Loess Plateau scenery', 'Local folk performance'],
    description: 'Witness the raw power of the Yellow River at Hukou Waterfall — the largest waterfall on the river and one of the most spectacular in China. The yellow water crashes through a narrow gorge creating thunderous spray and rainbows.',
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Hukou Waterfall', '10:00 Viewing platforms & photo stops', '11:00 Yellow River boat ride (near waterfall)', '12:00 Local folk performance', '12:30 Lunch: Yellow River carp + local dishes', '14:00 Loess Plateau viewpoint walk', "15:00 Return to Xi'an", '17:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Hukou Waterfall entrance', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'xa-07', type: 'experience', title: 'Xi'an City Wall + Shuyuanmen Cultural Street', city: 'xian', price: 55, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.5, reviews: 78,
    highlights: ['14th-century city wall walk', 'Shuyuanmen calligraphy street', 'Ancient academy visit', 'Shadow puppet workshop'],
    description: 'Walk the most complete ancient city wall in China, then explore Shuyuanmen — a street dedicated to traditional Chinese calligraphy, painting, and crafts. Try your hand at shadow puppet making.',
    itinerary: ['15:00 Meet at South Gate', '15:15 City Wall walk (South to East gate, 2km)', '16:30 Descend at East Gate', '17:00 Shuyuanmen calligraphy street walk', '17:30 Ancient academy visit', '18:00 Shadow puppet making workshop', '19:00 End'],
    includes: ['Private expert guide (3h)', 'City Wall ticket', 'Shadow puppet workshop', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
{ id: 'xa-08', type: 'experience', title: 'Qinling Wildlife Park + Cuihua Mountain', city: 'xian', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 67,
    highlights: ['Giant panda viewing', 'Golden snub-nose monkeys', 'Cuihua Mountain lake', 'Nature hike'],
    description: "See giant pandas without the Chengdu crowds at Qinling Wildlife Park. Then hike Cuihua Mountain's beautiful Tianchi Lake — a collapsed volcanic lake surrounded by forest. A perfect nature escape from the city.",
    itinerary: ['08:00 Hotel pickup', '09:00 Qinling Wildlife Park: pandas, monkeys, tigers', '11:00 Drive to Cuihua Mountain', '11:30 Tianchi Lake hike', '12:30 Lakeside picnic lunch', '14:00 Mountain forest walk', "15:00 Return to Xi'an", '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Wildlife Park entrance', 'Cuihua Mountain entrance', 'Picnic lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'xa-09', type: 'experience', title: 'Defuxiang Bar Street + Defu Lane Nightlife', city: 'xian', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.4, reviews: 89,
    highlights: ['Traditional courtyard bars', 'Live music venues', 'Local craft beer', 'Midnight snack tour'],
    description: "Experience Xi'an's surprisingly vibrant nightlife. Defuxiang's traditional courtyard bars offer a unique atmosphere — ancient architecture with modern cocktails. Your nightlife guide knows all the best spots.",
    itinerary: ['20:00 Meet at Defuxiang entrance', '20:15 Courtyard bar crawl: 4+ unique bars', '21:30 Live music venue', '22:30 Midnight snack: yangroupaomo & barbecue', '23:30 End'],
    includes: ['Nightlife expert guide (4h)', '4 bar visits', '2 craft beers', 'Midnight snack tour', 'Bottled water'],
    excludes: ['Hotel pickup/drop-off', 'Additional drinks', 'Gratuities (optional)'],
  },
{ id: 'xa-10', type: 'experience', title: 'Hanyangling Underground Museum', city: 'xian', price: 80, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 56,
    highlights: ['Underground pit museum', 'Han Dynasty figurines', 'Glass walkway over pits', 'Archaeological site'],
    description: 'Skip the Terracotta Warriors crowds for Hanyangling — the tomb of Emperor Jingdi. Walk on glass directly over the excavation pits, see thousands of miniature figurines, and understand Han Dynasty burial customs.',
    itinerary: ['09:00 Hotel pickup', '10:00 Hanyangling Underground Museum', '10:30 Glass walkway over pits', '11:00 Miniature figurines: soldiers, animals, dancers', '12:00 Archaeological explanation', '12:30 Lunch at site restaurant', "14:00 Return to Xi'an", '15:00 Hotel drop-off'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Hanyangling entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'xa-11', type: 'experience', title: 'Shadow Puppet Making + Qinqiang Opera Experience', city: 'xian', price: 85, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Hand-make shadow puppet', 'Learn puppet manipulation', 'Qinqiang opera performance', 'Take home your creation'],
    description: 'Learn the ancient art of shadow puppetry from a master craftsman. Carve your own puppet from leather, paint it, then learn to manipulate it behind the screen. End with a powerful Qinqiang opera performance.',
    itinerary: ['14:00 Meet at workshop', '14:15 Shadow puppet history & demonstration', '14:45 Carve your own puppet (leather, 1.5h)', '16:15 Paint & assemble puppet', '16:45 Puppet manipulation lesson', '17:15 Qinqiang opera performance', '18:00 End with your puppet to take home'],
    includes: ['Master craftsman guide (4h)', 'All materials', 'Puppet making lesson', 'Qinqiang opera show', 'Your puppet to take home', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'xa-12', type: 'experience', title: 'Zhongnan Mountain & Louguantai Taoist Temple', city: 'xian', price: 120, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.5, reviews: 34,
    highlights: ['Birthplace of Taoism', 'Laozi statue & temple', 'Mountain forest hike', 'Taoist tea ceremony'],
    description: 'Zhongnan Mountain is where Taoism was born. Visit Louguantai where Laozi wrote the Tao Te Ching, hike through bamboo forests, and experience a Taoist tea ceremony with a resident monk.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Zhongnan Mountain', '10:00 Louguantai Temple: Laozi & Tao Te Ching', '11:00 Bamboo forest hike', '12:30 Vegetarian lunch at temple', '14:00 Taoist tea ceremony', "15:00 Return to Xi'an", '17:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Louguantai entrance', 'Vegetarian lunch', 'Tea ceremony', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'xa-13', type: 'experience', title: 'Yongxingfang Foodie Paradise + Bowl-Dumping Wine', city: 'xian', price: 55, duration: '3h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 234,
    highlights: ['50+ Shaanxi street foods', 'Bowl-dumping wine ceremony', 'Traditional performances', 'Local craft stalls'],
    description: "Yongxingfang is Xi'an's hottest food destination — 50+ stalls of authentic Shaanxi cuisine in a beautifully restored Ming-style complex. Try the famous bowl-dumping wine and watch traditional performances.",
    itinerary: ['17:00 Meet at Yongxingfang entrance', '17:15 Food crawl: 8+ signature dishes', '18:30 Bowl-dumping wine ceremony', '19:00 Traditional performance: Qinqiang opera excerpt', '19:30 Dessert: rice cakes & sweet osmanthus', '20:00 End'],
    includes: ['Food expert guide (3h)', 'All food tastings (8+ dishes)', 'Bowl-dumping wine', 'Performance viewing', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'xa-14', type: 'experience', title: 'Tang Paradise Night Tour', city: 'xian', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 78,
    highlights: ['Tang Dynasty architecture', 'Laser & water show', 'Imperial garden walk', 'Tang costume rental'],
    description: 'Step into a living Tang Dynasty painting at Tang Paradise. This massive imperial garden features reconstructed palaces, laser shows on the lake, and the chance to wear Tang-era costumes for photos.',
    itinerary: ['18:00 Meet at Tang Paradise', '18:15 Imperial garden walk: palaces, pavilions, bridges', '19:00 Tang costume fitting & photo shoot', '20:00 Laser & water show on lake', '20:45 Tang Dynasty dance performance', '21:30 Night garden stroll', '22:00 End'],
    includes: ['Private expert guide (4h)', 'Tang Paradise entrance', 'Tang costume rental', 'Performance tickets', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
{ id: 'xa-15', type: 'experience', title: 'Qianling Mausoleum & Princess Yongtai Tomb', city: 'xian', price: 95, duration: '6h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Tang Dynasty royal tomb', 'Underground murals', 'Spirit Way stone statues', 'Princess Yongtai tomb'],
    description: 'Visit the tomb of Emperor Gaozong and Empress Wu Zetian — the only female emperor in Chinese history. The underground murals are remarkably preserved, showing Tang Dynasty court life in vivid color.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Qianling Mausoleum', '10:00 Spirit Way: stone animals & officials', '10:30 Main tomb: history of Wu Zetian', '11:30 Princess Yongtai tomb: underground murals', '12:30 Lunch at local restaurant', "14:00 Return to Xi'an", '15:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Qianling entrance', 'Princess Yongtai tomb ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-01', type: 'experience', title: 'Avatar Mountains, Tianzi Peak & Glass Bridge', city: 'zhangjiajie', price: 140, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.9, reviews: 134,
    highlights: ["Bailong Elevator (world's tallest)", 'Avatar Hallelujah Mountain', 'Zhangjiajie Glass Bridge', 'Tianzi Peak sunrise viewpoint'],
    description: "Walk the floating mountains that inspired Avatar. Ride the world's tallest outdoor elevator, cross the terrifying glass bridge, and hear the legends of the Tujia people.",
    itinerary: ['06:00 Hotel pickup', '06:30 Bailong Elevator sunrise ascent', '07:30 Yuanjiajie: Avatar Hallelujah Mountain', '09:30 Tianzi Peak: 3,000+ pillar view', '12:00 Mountain restaurant lunch', '14:00 Zhangjiajie Grand Canyon Glass Bridge', '16:00 Canyon hike & waterfall', '17:30 Return to hotel'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Zhangjiajie National Park entrance', 'Bailong Elevator ticket', 'Glass Bridge ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Cable car (optional alternative)'],
  },
{ id: 'zj-02', type: 'experience', title: 'Tianmen Mountain, Glass Skywalk & 99 Bends Road', city: 'zhangjiajie', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.8, reviews: 89,
    highlights: ["World's longest cable car", 'Glass skywalk on cliff edge', '99 Bends mountain road', "Heaven's Gate cave climb"],
    description: "Ride the 7.5km cable car from city to summit, walk the terrifying glass skywalk, and climb 999 steps through Heaven's Gate — the most spiritual mountain in China.",
    itinerary: ['08:00 Hotel pickup', '08:30 Tianmen Mountain cable car (30 min ascent)', '09:30 Glass skywalk on cliff edge', '10:30 Tianmen Temple & mountain-top walk', '12:00 Cliff-hanging restaurant lunch', '13:30 99 Bends road bus ride down', "14:30 Heaven's Gate: 999-step climb", '16:00 Return to hotel'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Tianmen Mountain entrance', 'Cable car round trip', 'Glass skywalk shoe covers', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Escalator down (optional, ~$5)'],
  },
{ id: 'zj-03', type: 'experience', title: 'Zhangjiajie Grand Canyon + Glass Bridge Full Day', city: 'zhangjiajie', price: 120, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.7, reviews: 112,
    highlights: ["World's longest glass bridge", '300m high glass walk', 'Canyon hiking', 'Waterfall swimming'],
    description: "Cross the world's longest and highest glass-bottomed bridge — 430 meters long and 300 meters above the ground. Then hike through the canyon, swim under waterfalls, and ride a zip line across the gorge.",
    itinerary: ['09:00 Hotel pickup', '10:00 Arrive at Grand Canyon', '10:15 Glass Bridge walk', '11:00 Canyon hike down', '12:30 Lunch at canyon restaurant', '14:00 Waterfall swimming', '15:00 Zip line across gorge', '16:00 Boat ride out of canyon', '17:00 Return to hotel'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Grand Canyon + Glass Bridge ticket', 'Zip line', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Swimsuit rental'],
  },
{ id: 'zj-04', type: 'experience', title: 'Yellow Dragon Cave & Baofeng Lake', city: 'zhangjiajie', price: 95, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.6, reviews: 78,
    highlights: ['Underground river cave', 'Stalactite formations', 'Baofeng Lake boat ride', 'Ethnic minority songs'],
    description: 'Yellow Dragon Cave is one of the largest karst caves in China. Explore its underground rivers and massive chambers, then take a peaceful boat ride on Baofeng Lake surrounded by peaks while listening to traditional Tujia songs.',
    itinerary: ['09:00 Hotel pickup', '10:00 Yellow Dragon Cave: guided tour', '12:00 Lunch at cave entrance', '13:30 Baofeng Lake boat ride', '14:30 Tujia folk song performance', '15:30 Lakeside walk', '16:30 Return to hotel'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Yellow Dragon Cave ticket', 'Baofeng Lake boat ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-05', type: 'experience', title: 'Tujia Folk Village + Baishou Dance Experience', city: 'zhangjiajie', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.5, reviews: 56,
    highlights: ['Traditional Tujia village', 'Baishou hand-waving dance', 'Local rice wine tasting', 'Batik craft workshop'],
    description: 'Visit an authentic Tujia village — the indigenous people of Zhangjiajie. Learn the Baishou hand-waving dance, taste homemade rice wine, and try your hand at traditional batik textile dyeing.',
    itinerary: ['14:00 Hotel pickup', '14:30 Arrive at Tujia village', '14:45 Village walk: traditional houses, totems', '15:15 Baishou dance lesson', '16:00 Rice wine tasting (3 varieties)', '16:30 Batik craft workshop', '17:30 Home-cooked dinner with local family', '18:30 Return to hotel'],
    includes: ['Private expert guide (4h)', 'Hotel pickup & drop-off', 'Village donation', 'Dance lesson', 'Wine tasting', 'Batik workshop', 'Dinner', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-06', type: 'experience', title: 'Mengdong River White Water Rafting', city: 'zhangjiajie', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.8, reviews: 45,
    highlights: ['Class III-IV rapids', 'Scenic canyon views', 'Tujia riverside villages', 'BBQ lunch on riverbank'],
    description: 'Experience thrilling white water rafting on the Mengdong River. Navigate Class III-IV rapids through a spectacular canyon, pass traditional Tujia villages, and enjoy a riverside BBQ lunch.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at rafting base', '10:00 Safety briefing & equipment', '10:30 Rafting begins (3 hours)', '13:30 Riverside BBQ lunch', '15:00 Return to hotel'],
    includes: ['Private guide + rafting instructor (6h)', 'Hotel pickup & drop-off', 'Rafting equipment & safety gear', 'BBQ lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance', 'Water shoes (rental available)'],
  },
{ id: 'zj-07', type: 'experience', title: 'Fenghuang Ancient Town Day Trip', city: 'zhangjiajie', price: 135, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.9, reviews: 167,
    highlights: ['1,300-year-old water town', 'Miao minority culture', 'Stilt houses over river', 'Night lantern cruise'],
    description: 'Fenghuang (Phoenix Town) is the most beautiful ancient town in China. Walk cobblestone streets, see traditional Miao stilt houses, and take a lantern-lit boat ride on the Tuo River at dusk.',
    itinerary: ['07:00 Hotel pickup', '10:00 Arrive at Fenghuang', '10:15 Ancient town walk: East Gate, stilt houses', '12:00 Lunch: Miao sour fish + rice wine', '14:00 Miao silver jewelry workshop', '15:30 Free time: alleys, shops, cafes', '17:00 Tuo River boat ride at sunset', '18:00 Return to Zhangjiajie', '21:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Fenghuang entrance', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'zj-08', type: 'experience', title: 'Tianmen Fox Fairy Show (Live Performance)', city: 'zhangjiajie', price: 75, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.7, reviews: 98,
    highlights: ['Outdoor mountain theater', 'Real cliff backdrop', 'Fox fairy love story', 'Laser & fire effects'],
    description: 'Tianmen Fox Fairy is a spectacular outdoor musical performed on a stage set against a real mountain cliff. The story of a fox fairy and a woodcutter features incredible acrobatics, lasers, and fire effects.',
    itinerary: ['19:00 Hotel pickup', '19:30 Arrive at theater', '20:00 Show begins', '21:30 Show ends', '22:00 Return to hotel'],
    includes: ['Private guide (3h)', 'Hotel pickup & drop-off', 'VIP theater ticket', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner'],
  },
{ id: 'zj-09', type: 'experience', title: 'Mengdong River Drifting + Jiutian Cave', city: 'zhangjiajie', price: 105, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.6, reviews: 34,
    highlights: ['Gentle river drifting', "Asia's largest cave", 'Underground river boat', 'Stalactite formations'],
    description: "Drift down the Mengdong River on a gentle bamboo raft, then explore Jiutian Cave — Asia's largest cave with an underground river you can boat through. A perfect mix of relaxation and adventure.",
    itinerary: ['08:00 Hotel pickup', '09:30 Mengdong River bamboo raft drifting', '11:00 Arrive at Jiutian Cave', '11:30 Underground river boat tour', '13:00 Lunch at cave entrance', '14:00 Above-ground cave walk', '15:30 Return to hotel'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Rafting ticket', 'Jiutian Cave entrance + boat', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-10', type: 'experience', title: 'Zhangjiajie Grand Theatre Show: Charming Xiangxi', city: 'zhangjiajie', price: 65, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.5, reviews: 67,
    highlights: ['Tujia & Miao dance', 'Fire-walking performance', 'Wedding customs demo', 'Local costume photo'],
    description: "Charming Xiangxi is a celebration of Zhangjiajie's ethnic cultures. Watch Tujia and Miao dancers, witness the terrifying fire-walking ceremony, and see traditional wedding customs reenacted on stage.",
    itinerary: ['19:00 Hotel pickup', '19:30 Arrive at theater', '20:00 Show begins', '21:15 Show ends', '21:30 Costume photo opportunity', '22:00 Return to hotel'],
    includes: ['Private guide (3h)', 'Hotel pickup & drop-off', 'Theater ticket (premium seat)', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner'],
  },
{ id: 'zj-11', type: 'experience', title: 'Wulingyuan Core Zone Deep Hike', city: 'zhangjiajie', price: 130, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.8, reviews: 56,
    highlights: ['Avatar Hallelujah Mountain', 'First Bridge Under Heaven', 'Imperial Brush Peak', 'Hidden trails'],
    description: "A full day of hiking through Wulingyuan's most spectacular areas. Your guide takes you beyond the main tourist paths to hidden viewpoints and less-visited trails with even better views.",
    itinerary: ['07:00 Hotel pickup', '08:00 Yuanjiajie: Avatar Mountain & First Bridge', '10:00 Hike to hidden viewpoints', '12:00 Mountain picnic lunch', '13:00 Yangjiajie: natural Great Wall', '15:00 Imperial Brush Peak', '16:00 Return to hotel'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Wulingyuan entrance', 'Picnic lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Cable car (optional)'],
  },
{ id: 'zj-12', type: 'experience', title: 'Dayong Ancient City + Lishui River Walk', city: 'zhangjiajie', price: 50, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.3, reviews: 45,
    highlights: ['Ming Dynasty city gate', 'Tujia architecture', 'Lishui River boardwalk', 'Local night market'],
    description: 'Explore Dayong — the ancient city at the heart of modern Zhangjiajie. Walk the Ming Dynasty city gate, see traditional Tujia architecture, and stroll the Lishui River boardwalk. End at the night market for local snacks.',
    itinerary: ['18:00 Meet at Dayong gate', '18:15 Ancient city wall walk', '18:45 Tujia architecture district', '19:15 Lishui River boardwalk', '19:45 Night market: local snacks', '20:30 End'],
    includes: ['Local guide (3h)', 'Snack tastings (4+ items)', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
{ id: 'zj-13', type: 'experience', title: 'Red Stone Forest (Hongshilin) + Zuolong Gorge', city: 'zhangjiajie', price: 115, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.5, reviews: 34,
    highlights: ['Red karst stone forest', 'Zuolong Gorge hiking', 'Natural swimming pools', 'Primitive forest'],
    description: 'Red Stone Forest is a unique geological formation of red karst pillars. Hike through Zuolong Gorge with its natural swimming pools and waterfalls, surrounded by primitive forest. A hidden gem most tourists miss.',
    itinerary: ['08:00 Hotel pickup', '10:00 Arrive at Red Stone Forest', '10:30 Stone forest walk', '12:00 Lunch at local restaurant', '13:30 Zuolong Gorge hike', '14:30 Natural swimming pool', '15:30 Waterfall visit', '16:00 Return to hotel'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Red Stone Forest entrance', 'Zuolong Gorge entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-14', type: 'experience', title: 'Zhangjiajie Geology Museum + Science Tour', city: 'zhangjiajie', price: 40, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.2, reviews: 23,
    highlights: ['Quartz sandstone geology', '3D mountain formation demo', 'Avatar connection exhibit', 'Fossil collection'],
    description: "Understand the science behind Zhangjiajie's otherworldly landscape. The geology museum explains how 380 million years of erosion created these quartz sandstone pillars — and how they inspired the floating mountains of Pandora.",
    itinerary: ['09:00 Meet at museum', '09:15 Zhangjiajie geology formation', '10:00 3D mountain formation demonstration', "10:30 Avatar connection: James Cameron's inspiration", '11:00 Local fossil & mineral collection', '11:30 Q&A with geologist guide', '12:00 End'],
    includes: ['Geologist guide (3h)', 'Museum entrance', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'zj-15', type: 'experience', title: 'Badagong Mountain Primitive Forest', city: 'zhangjiajie', price: 145, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.6, reviews: 12,
    highlights: ['UNESCO biosphere reserve', 'Rare golden snub-nose monkeys', 'Ancient trees', 'Waterfall hiking'],
    description: "Badagong Mountain is a UNESCO biosphere reserve with some of China's last primitive forest. Hike through ancient trees, spot rare wildlife including golden snub-nose monkeys, and discover hidden waterfalls.",
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Badagong', '10:00 Forest hike: ancient trees & wildlife spotting', '12:00 Lunch at forest station', '13:30 Waterfall hike', '15:00 Return to hotel'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Badagong entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
];
];

// ========== GUIDE DATA ==========
const GUIDES = [
  { id: 'g1', name: 'David Wang', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', cities: ['beijing'], level: 'senior', english: 'expert', specialties: ['History', 'Architecture', 'Great Wall'], rating: 4.9, reviews: 128, priceEscort: 600, priceExpert: 900, bio: 'Licensed senior guide with 15 years experience. Former history teacher. Speaks fluent English and German. Expert in Ming & Qing dynasties.' },
  { id: 'g2', name: 'Linda Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face', cities: ['shanghai'], level: 'senior', english: 'expert', specialties: ['Modern Shanghai', 'Art Deco', 'Food Tours'], rating: 4.8, reviews: 96, priceEscort: 650, priceExpert: 1000, bio: 'Shanghai native and art historian. Specializes in the Bund\'s colonial architecture and French Concession stories.' },
  { id: 'g3', name: 'Mike Zhang', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', cities: ['xian'], level: 'intermediate', english: 'expert', specialties: ['Terracotta Warriors', 'Ancient History', 'Calligraphy'], rating: 4.7, reviews: 64, priceEscort: 450, priceExpert: 700, bio: 'Passionate about Xi\'an\'s 3000-year history. Can spend hours at the Terracotta Warriors explaining every detail.' },
  { id: 'g4', name: 'Sophie Liu', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', cities: ['chengdu'], level: 'intermediate', english: 'escort', specialties: ['Pandas', 'Sichuan Cuisine', 'Nightlife'], rating: 4.6, reviews: 52, priceEscort: 400, priceExpert: 600, bio: 'Fun-loving Chengdu girl who knows every hot pot spot in town. Great for food tours and panda base visits.' },
  { id: 'g5', name: 'James Li', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', cities: ['guilin','zhangjiajie'], level: 'senior', english: 'expert', specialties: ['Nature', 'Photography', 'Hiking'], rating: 4.9, reviews: 87, priceEscort: 550, priceExpert: 850, bio: 'Nature photographer turned guide. Knows the best sunrise spots in Guilin and Zhangjiajie.' },
  { id: 'g6', name: 'Amy Wu', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face', cities: ['beijing'], level: 'junior', english: 'escort', specialties: ['Street Food', 'Shopping', 'Local Life'], rating: 4.5, reviews: 31, priceEscort: 350, priceExpert: 500, bio: 'Young, energetic guide who loves Beijing\'s hutongs and street food. Great for budget travelers.' },
  { id: 'g7', name: 'Leo Fang', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face', cities: ['wuhan'], level: 'senior', english: 'expert', specialties: ['History', 'River Culture', 'Street Food'], rating: 4.9, reviews: 72, priceEscort: 500, priceExpert: 750, bio: 'Born and raised by the Yangtze River. Leo brings Wuhan\'s 3500-year history to life — from ancient Chu kingdom to modern metropolis. Knows every hidden breakfast spot for reganmian.' },
];

// ========== BLOG POSTS ==========
const BLOG_POSTS = [
  { id: 'b1', title: 'Why You Need a Guide in Beijing (And Not Just Google)', slug: 'why-guide-beijing', excerpt: 'The Forbidden City is 180 acres. Without a guide, you\'ll see buildings — but miss the stories that make them alive.', cover: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop', category: 'Travel Tips', date: '2025-06-15', readTime: '5 min' },
  { id: 'b2', title: 'The Real Cost of Traveling China Without a Guide', slug: 'real-cost-china-travel', excerpt: 'We crunched the numbers: getting lost, overpaying at tourist traps, and missed opportunities. The guide pays for itself.', cover: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&h=500&fit=crop', category: 'Money', date: '2025-06-10', readTime: '7 min' },
  { id: 'b3', title: 'Sichuan Food: A Guide to Eating Without Dying', slug: 'sichuan-food-survival', excerpt: 'Spicy is an understatement. Here\'s how to enjoy Sichuan cuisine without setting your mouth on fire — unless you want to.', cover: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=800&h=500&fit=crop', category: 'Food', date: '2025-06-05', readTime: '6 min' },
];

function getGuidesByCity(cityId) { return !cityId ? GUIDES : GUIDES.filter(g => g.cities.includes(cityId)); }
function getGuideById(id) { return GUIDES.find(g => g.id === id); }
function getExperiencesByCity(cityId) { return !cityId ? EXPERIENCES : EXPERIENCES.filter(e => e.city === cityId); }
function getExperienceById(id) { return EXPERIENCES.find(e => e.id === id); }

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '<i class="fas fa-star"></i>';
    else if (i - 0.5 <= rating) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return html;
}

function levelBadge(level) {
  if (level === 'senior') return '<span class="badge badge-gold"><i class="fas fa-medal"></i> Senior Guide</span>';
  if (level === 'intermediate') return '<span class="badge badge-silver"><i class="fas fa-medal"></i> Intermediate</span>';
  return '<span class="badge badge-bronze"><i class="fas fa-medal"></i> Junior Guide</span>';
}

function englishBadge(type) {
  if (type === 'expert') return '<span class="badge badge-primary"><i class="fas fa-comments"></i> Expert English</span>';
  return '<span class="badge badge-accent"><i class="fas fa-smile"></i> Escort (Basic)</span>';
}

function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function daysBetween(d1, d2) {
  if (!d1 || !d2) return 0;
  const a = new Date(d1), b = new Date(d2);
  return Math.max(1, Math.ceil((b - a) / (1000 * 60 * 60 * 24)) + 1);
}

// ========== PARTICLE ANIMATION ==========
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const count = 50;
  
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);
  
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.fill();
    }
  }
  
  for (let i = 0; i < count; i++) particles.push(new Particle());
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ========== COUNTDOWN TIMER ==========
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  endDate.setHours(23, 59, 59, 999);
  
  function update() {
    const now = new Date();
    const diff = endDate - now;
    if (diff <= 0) { el.innerHTML = 'Offer expired!'; return; }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    el.innerHTML = `<span style="font-weight:700;color:var(--accent);">${days}d ${hours}h ${minutes}m</span> left for early-bird pricing`;
  }
  update();
  setInterval(update, 60000);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initReveal();
  initFAQ();
  initSmoothScroll();
  updateAuthUI();
  initParticles();
  initCountdown();
});
{ id: 'wh-01', type: 'experience', title: 'Yellow Crane Tower, East Lake & Hubei Museum', city: 'wh', price: 95, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.8, reviews: 145,
    highlights: ['Yellow Crane Tower: 1,800 years of poetry', 'East Lake scenic bike ride', 'Hubei Museum: bronze bells & Chu culture', 'Wuhan cherry blossoms (seasonal)'],
    description: 'Wuhan is the heart of central China. Climb the Yellow Crane Tower for Yangtze River views, cycle around East Lake, and discover 2,000-year-old Chu Kingdom artifacts at the Hubei Museum.',
    itinerary: ['08:00 Hotel pickup', '09:00 Yellow Crane Tower: history & poetry', '10:30 Yangtze River waterfront walk', '12:00 Lunch: Wuhan hot dry noodles (reganmian)', '13:30 Hubei Museum: ancient bronze bells, Chu Kingdom artifacts', '15:30 East Lake: bike ride & cherry blossoms (seasonal)', '17:00 Luojia Hill viewpoint', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Yellow Crane Tower ticket', 'Hubei Museum entry', 'Bike rental', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-02', type: 'experience', title: 'Wuhan Street Food Night Tour: Reganmian, Duck Necks & Doupi', city: 'wh', price: 65, duration: '4h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.9, reviews: 234,
    highlights: ['15+ authentic street foods', 'Hot dry noodles masterclass', 'Spicy duck neck tasting', 'Doupi (tofu skin) making'],
    description: "Wuhan is China's breakfast capital. Follow your guide through night markets and alley food stalls to taste 15+ local specialties including the legendary hot dry noodles, spicy duck necks, and freshly made doupi.",
    itinerary: ['17:00 Meet at Jianghan Road', '17:15 Jianghan Road food walk: street snacks', '18:00 Reganmian masterclass: make your own noodles', '18:30 Jiqing Street: spicy duck necks, crawfish', '19:30 Hubu Alley: doupi, fried dumplings, rice wine', '20:30 Night market: stinky tofu, sugar-coated haws', '21:00 End'],
    includes: ['Private food expert guide (4h)', 'All food tastings (15+ dishes)', 'Reganmian making demo', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'wh-03', type: 'experience', title: 'Yangtze River Cruise, Wuhan Yangtze River Bridge & Jianghan Road', city: 'wh', price: 75, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.7, reviews: 178,
    highlights: ['Yangtze River sunset cruise', 'Wuhan Yangtze River Bridge history', 'Jianghan Road colonial architecture', 'Hankou concession district walk'],
    description: "Experience the mighty Yangtze River on a sunset cruise. Walk across the historic Wuhan Yangtze River Bridge, then explore Jianghan Road's colonial-era architecture and the former Hankou concession district.",
    itinerary: ['16:00 Hotel pickup', '16:30 Yangtze River cruise boarding', '17:00 Sunset cruise: city skyline, bridge views', '18:30 Walk across Wuhan Yangtze River Bridge', '19:30 Jianghan Road: colonial architecture walk', '20:00 Hankou concession district: historical buildings', '20:30 Night photography at the Bund of Wuhan', '21:00 End'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Yangtze River cruise ticket', 'Bridge walk', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner', 'Personal expenses'],
  },
{ id: 'wh-04', type: 'experience', title: 'Guiyuan Temple, Gude Temple & Buddhist Culture Tour', city: 'wh', price: 60, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.6, reviews: 89,
    highlights: ['Guiyuan Temple: 500 arhat statues', 'Gude Temple: Roman-style architecture', 'Buddhist vegetarian lunch', 'Meditation session'],
    description: "Visit two of Wuhan's most fascinating temples. Guiyuan Temple houses 500 life-sized arhat statues, each with a unique expression. Gude Temple is a bizarre fusion of Chinese, Roman, and Burmese architecture. End with a vegetarian lunch and meditation session.",
    itinerary: ['09:00 Hotel pickup', '09:30 Guiyuan Temple: 500 arhat statues', '11:00 Gude Temple: unique architecture fusion', '12:00 Buddhist vegetarian lunch', '13:00 Meditation session with monk', '14:00 End'],
    includes: ['Private expert guide (4h)', 'Hotel pickup & drop-off', 'Guiyuan Temple ticket', 'Gude Temple ticket', 'Vegetarian lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-05', type: 'experience', title: 'Wuhan University + Optical Valley Tech Tour', city: 'wh', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.5, reviews: 67,
    highlights: ['Wuhan University: 130-year-old campus', 'Cherry blossom avenue (seasonal)', 'Optical Valley tech hub', 'Innovation center visit'],
    description: "Explore one of China's most beautiful university campuses. Wuhan University combines traditional Chinese architecture with modern facilities. Then visit Optical Valley, China's Silicon Valley for photonics and fiber optics.",
    itinerary: ['09:00 Hotel pickup', '09:30 Wuhan University campus tour: old buildings, library', '10:30 Cherry blossom avenue (seasonal, Mar-Apr)', '11:30 University museum', '12:30 Lunch at campus restaurant', '14:00 Optical Valley: tech hub walk', '15:00 Innovation center visit', '16:00 End'],
    includes: ['University guide (4h)', 'Hotel pickup & drop-off', 'Campus entry', 'Museum entry', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-06', type: 'experience', title: 'Mulan Mountain + Huangpi Countryside', city: 'wh', price: 110, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.7, reviews: 45,
    highlights: ['Mulan Mountain hiking', 'Mulan Temple (legendary female warrior)', 'Countryside tea plantation', 'Farm-to-table lunch'],
    description: 'Hike Mulan Mountain, named after the legendary female warrior who disguised herself as a man to fight for her father. Visit the ancient temple dedicated to her, then enjoy tea picking and a farm-to-table lunch in the Huangpi countryside.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Mulan Mountain', '10:00 Hike to summit: forest, streams, temples', '12:00 Mulan Temple: history of the legendary warrior', '13:00 Lunch at farmhouse: local chicken, vegetables', '14:30 Tea plantation visit: picking & tasting', '16:00 Return to Wuhan', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Mulan Mountain entrance', 'Lunch', 'Tea tasting', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'wh-07', type: 'experience', title: 'Qingchuan Pavilion, Turtle Mountain TV Tower & Night Market', city: 'wh', price: 50, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.4, reviews: 112,
    highlights: ['Qingchuan Pavilion: riverside view', 'Turtle Mountain TV Tower', 'Guqin Terrace', 'Siji Street night market'],
    description: 'Visit Qingchuan Pavilion for views of the Yangtze and Han River confluence. Climb Turtle Mountain TV Tower for 360-degree city views, then dive into Siji Street night market for local snacks.',
    itinerary: ['17:00 Hotel pickup', '17:30 Qingchuan Pavilion: history & river views', '18:30 Turtle Mountain TV Tower: city panorama', '19:30 Guqin Terrace: ancient music history', '20:00 Siji Street night market: food crawl', '21:00 End'],
    includes: ['Private expert guide (4h)', 'Hotel pickup & drop-off', 'Qingchuan Pavilion ticket', 'TV Tower ticket', 'Snack tastings (5+ items)', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner', 'Personal expenses'],
  },
{ id: 'wh-08', type: 'experience', title: 'Wuhan Art Museum + 403 International Art Center', city: 'wh', price: 45, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.5, reviews: 78,
    highlights: ['Wuhan Art Museum: contemporary Chinese art', '403 International Art Center', 'Street art in Hankou', 'Artist studio visits'],
    description: "Discover Wuhan's booming art scene. The Wuhan Art Museum showcases cutting-edge Chinese contemporary art, while 403 International Art Center is a converted factory space hosting exhibitions and performances. Meet local artists in their studios.",
    itinerary: ['14:00 Meet at Wuhan Art Museum', '14:15 Contemporary art exhibition walk', '15:30 403 International Art Center: converted factory space', '16:30 Street art walk in Hankou', '17:00 Artist studio visit (when available)', '17:30 End'],
    includes: ['Art guide (3h)', 'Museum entrance', 'Art center entrance', 'Artist studio visit', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Art purchases'],
  },
{ id: 'wh-09', type: 'experience', title: 'Wuhan Revolutionary History: Wuchang Uprising Memorial', city: 'wh', price: 60, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.6, reviews: 56,
    highlights: ['Wuchang Uprising Memorial', '1911 Revolution Museum', "Sun Yat-sen's former residence", 'Red Building history'],
    description: 'Wuhan was the birthplace of the 1911 Revolution that ended 2,000 years of imperial rule. Visit the Wuchang Uprising Memorial, the 1911 Revolution Museum, and the Red Building where history was made.',
    itinerary: ['09:00 Hotel pickup', '09:30 Wuchang Uprising Memorial: bronze statues, artifacts', '11:00 1911 Revolution Museum: interactive exhibits', '12:30 Lunch at local restaurant', '14:00 Red Building: where the revolution began', "15:00 Sun Yat-sen's former residence", '16:00 End'],
    includes: ['Private historian guide (5h)', 'Hotel pickup & drop-off', 'All museum tickets', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-10', type: 'experience', title: 'Wuhan Cherry Blossom Festival (Seasonal)', city: 'wh', price: 85, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.9, reviews: 198,
    highlights: ['Wuhan University cherry blossoms', 'East Lake cherry garden', 'Moshan Hill viewpoints', 'Traditional hanfu costume'],
    description: 'March transforms Wuhan into a pink wonderland. Walk under the famous cherry blossom tunnels at Wuhan University and East Lake, climb Moshan Hill for panoramic views, and wear traditional hanfu costume for photos.',
    itinerary: ['08:00 Hotel pickup', '08:30 Wuhan University: cherry blossom avenue', '10:00 East Lake cherry garden: boat ride', '11:30 Moshan Hill climb', '12:30 Lunch with cherry blossom theme', '14:00 Hanfu costume rental & photo shoot', '15:30 Tea ceremony under cherry trees', '16:00 End'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'East Lake boat ticket', 'Hanfu costume rental', 'Lunch', 'Tea ceremony', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'wh-11', type: 'experience', title: 'Wuhan Coffee Culture + Tanhualin Art Street', city: 'wh', price: 40, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.3, reviews: 89,
    highlights: ['Tanhualin historic street', 'Third-wave coffee shops', 'Independent bookstores', 'Street art murals'],
    description: "Tanhualin is Wuhan's most artistic neighborhood. Explore historic streets lined with independent coffee shops, vintage bookstores, and street art. Your guide knows the best baristas and hidden cafes.",
    itinerary: ['14:00 Meet at Tanhualin', '14:15 Historic street walk: architecture, shops', '14:45 Coffee shop 1: pour-over specialty', '15:15 Bookstore: local literature & art books', '15:45 Coffee shop 2: signature latte art', '16:15 Street art mural walk', '16:45 End'],
    includes: ['Local guide (3h)', '2 specialty coffees', 'Bookstore visit', 'Street art tour', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional food/drinks'],
  },
{ id: 'wh-12', type: 'experience', title: 'Wuhan Wet Market + Home Cooking Experience', city: 'wh', price: 90, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.7, reviews: 67,
    highlights: ['Wet market ingredient shopping', 'Local family cooking class', 'Wuhan hot dry noodles from scratch', 'Eat with local family'],
    description: 'Shop for fresh ingredients at a traditional Wuhan wet market, then cook with a local family in their home. Learn to make authentic hot dry noodles, spicy fish, and lotus root soup. Dine with the family and hear their stories.',
    itinerary: ['09:00 Hotel pickup', '09:30 Wet market tour: pick fresh ingredients', '10:30 Arrive at local family home', '11:00 Cooking class: noodles, fish, lotus root soup', '12:30 Eat with the family', '13:30 Tea & conversation', '14:00 End'],
    includes: ['Private food guide (5h)', 'Hotel pickup & drop-off', 'Wet market tour', 'All ingredients', 'Home cooking class', 'Family lunch', 'Recipe cards', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-13', type: 'experience', title: 'Wuhan Sports Stadium Tour + Olympic Training Center', city: 'wh', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.2, reviews: 34,
    highlights: ['Wuhan Sports Center stadium', 'Olympic training facility', 'Athlete meet-and-greet (when available)', 'Sports museum'],
    description: 'Wuhan is a major sports hub in China. Tour the massive Wuhan Sports Center, visit the Olympic training facility where athletes prepare for international competitions, and explore the sports museum.',
    itinerary: ['09:00 Hotel pickup', '09:30 Wuhan Sports Center: stadium tour', '10:30 Olympic training facility: swimming, gymnastics', '11:30 Meet athletes (when available)', '12:00 Sports museum: medals, history', '12:30 Lunch at sports complex', '13:30 End'],
    includes: ['Sports guide (4h)', 'Hotel pickup & drop-off', 'Stadium tour', 'Training facility visit', 'Museum entry', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'wh-14', type: 'experience', title: 'Wuhan Metro Museum + Urban Planning Exhibition', city: 'wh', price: 35, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.1, reviews: 45,
    highlights: ['Wuhan Metro system: 12 lines', 'Urban planning exhibition', 'Yangtze River Tunnel history', 'Future city models'],
    description: "Wuhan has one of the world's largest metro systems. Visit the Metro Museum to see how the city was built around the Yangtze River, explore the Urban Planning Exhibition with massive scale models, and learn about the Yangtze River Tunnel engineering marvel.",
    itinerary: ['09:00 Meet at Metro Museum', '09:15 Metro history: from 1 line to 12 lines', '10:00 Urban Planning Exhibition: scale model of Wuhan', '11:00 Yangtze River Tunnel: engineering marvel', '11:30 Future Wuhan: 2050 city plans', '12:00 End'],
    includes: ['Urban planning guide (3h)', 'Metro Museum entry', 'Urban Planning Exhibition entry', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Lunch'],
  },
{ id: 'wh-15', type: 'experience', title: 'Wuhan Day Trip to Jiugong Mountain', city: 'wh', price: 130, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1569617084133-26942bb441f2?w=600&h=400&fit=crop', rating: 4.6, reviews: 23,
    highlights: ['Jiugong Mountain hiking', 'Cloud sea views', 'Ancient Taoist temple', 'Alpine meadow camping'],
    description: 'Jiugong Mountain is a hidden gem near Wuhan. Hike through cloud forests to the summit for spectacular sea-of-clouds views, visit an ancient Taoist temple, and enjoy the alpine meadow scenery.',
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Jiugong Mountain', '10:00 Forest hike: cloud forests & waterfalls', '12:00 Summit temple visit', '13:00 Lunch at mountain restaurant', '14:30 Alpine meadow walk', '16:00 Return to Wuhan', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Jiugong Mountain entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'xa-04', type: 'experience', title: 'Big Wild Goose Pagoda, Da Ci'en Temple & Fountain Show', city: 'xa', price: 65, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 112,
    highlights: ['7-story Tang Dynasty pagoda', "Da Ci'en Temple Buddhist art", 'Musical fountain show', 'Tang Culture Square'],
    description: "The Big Wild Goose Pagoda has stood for 1,300 years as a symbol of Xi'an. Climb to the top for city views, explore the temple complex, and end with Asia's largest musical fountain show.",
    itinerary: ['18:00 Meet at Big Wild Goose Pagoda South Square', '18:15 Pagoda climb: Buddhist relics & city view', "19:00 Da Ci'en Temple grounds walk", '19:30 Tang Culture Square: statues & history', '20:00 Musical fountain show (20 min)', '20:30 Night photography of illuminated pagoda', '21:00 End'],
    includes: ['Private expert guide (4h)', 'Big Wild Goose Pagoda ticket', 'Musical fountain show', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
  { id: 'xa-05', type: 'experience', title: 'Shaanxi History Museum Deep Dive + Small Goose Pagoda', city: 'xa', price: 75, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 145,
    highlights: ['300,000+ artifacts', 'Tang Dynasty gold & silver', 'Ancient murals tomb', 'Small Goose Pagoda serenity'],
    description: 'Shaanxi History Museum is often called the best museum in China. Your historian guide takes you through 5,000 years of history in 3 hours, focusing on the most remarkable pieces. End at the peaceful Small Goose Pagoda.',
    itinerary: ['09:00 Meet at Shaanxi History Museum', '09:15 Pre-Qin Dynasty: bronzes & weapons', '10:00 Han Dynasty: terracotta warriors & silk road', '11:00 Tang Dynasty: gold, silver & foreign trade', '12:00 Ancient tomb murals gallery', '13:00 Lunch at museum cafe', '14:00 Walk to Small Goose Pagoda', '14:30 Pagoda visit & Jianfu Temple', '15:30 End'],
    includes: ['History expert guide (5h)', 'Shaanxi History Museum entry (free)', 'Small Goose Pagoda ticket', 'Museum cafe lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'xa-06', type: 'experience', title: 'Hukou Waterfall Day Trip: Yellow River's Fury', city: 'xa', price: 155, duration: '8h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 89,
    highlights: ["World's largest yellow waterfall", 'Yellow River boat ride', 'Loess Plateau scenery', 'Local folk performance'],
    description: 'Witness the raw power of the Yellow River at Hukou Waterfall — the largest waterfall on the river and one of the most spectacular in China. The yellow water crashes through a narrow gorge creating thunderous spray and rainbows.',
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Hukou Waterfall', '10:00 Viewing platforms & photo stops', '11:00 Yellow River boat ride (near waterfall)', '12:00 Local folk performance', '12:30 Lunch: Yellow River carp + local dishes', '14:00 Loess Plateau viewpoint walk', "15:00 Return to Xi'an", '17:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Hukou Waterfall entrance', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'xa-07', type: 'experience', title: 'Xi'an City Wall + Shuyuanmen Cultural Street', city: 'xa', price: 55, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.5, reviews: 78,
    highlights: ['14th-century city wall walk', 'Shuyuanmen calligraphy street', 'Ancient academy visit', 'Shadow puppet workshop'],
    description: 'Walk the most complete ancient city wall in China, then explore Shuyuanmen — a street dedicated to traditional Chinese calligraphy, painting, and crafts. Try your hand at shadow puppet making.',
    itinerary: ['15:00 Meet at South Gate', '15:15 City Wall walk (South to East gate, 2km)', '16:30 Descend at East Gate', '17:00 Shuyuanmen calligraphy street walk', '17:30 Ancient academy visit', '18:00 Shadow puppet making workshop', '19:00 End'],
    includes: ['Private expert guide (3h)', 'City Wall ticket', 'Shadow puppet workshop', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
  { id: 'xa-08', type: 'experience', title: 'Qinling Wildlife Park + Cuihua Mountain', city: 'xa', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 67,
    highlights: ['Giant panda viewing', 'Golden snub-nose monkeys', 'Cuihua Mountain lake', 'Nature hike'],
    description: "See giant pandas without the Chengdu crowds at Qinling Wildlife Park. Then hike Cuihua Mountain's beautiful Tianchi Lake — a collapsed volcanic lake surrounded by forest. A perfect nature escape from the city.",
    itinerary: ['08:00 Hotel pickup', '09:00 Qinling Wildlife Park: pandas, monkeys, tigers', '11:00 Drive to Cuihua Mountain', '11:30 Tianchi Lake hike', '12:30 Lakeside picnic lunch', '14:00 Mountain forest walk', "15:00 Return to Xi'an", '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Wildlife Park entrance', 'Cuihua Mountain entrance', 'Picnic lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'xa-09', type: 'experience', title: 'Defuxiang Bar Street + Defu Lane Nightlife', city: 'xa', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.4, reviews: 89,
    highlights: ['Traditional courtyard bars', 'Live music venues', 'Local craft beer', 'Midnight snack tour'],
    description: "Experience Xi'an's surprisingly vibrant nightlife. Defuxiang's traditional courtyard bars offer a unique atmosphere — ancient architecture with modern cocktails. Your nightlife guide knows all the best spots.",
    itinerary: ['20:00 Meet at Defuxiang entrance', '20:15 Courtyard bar crawl: 4+ unique bars', '21:30 Live music venue', '22:30 Midnight snack: yangroupaomo & barbecue', '23:30 End'],
    includes: ['Nightlife expert guide (4h)', '4 bar visits', '2 craft beers', 'Midnight snack tour', 'Bottled water'],
    excludes: ['Hotel pickup/drop-off', 'Additional drinks', 'Gratuities (optional)'],
  },
  { id: 'xa-10', type: 'experience', title: 'Hanyangling Underground Museum', city: 'xa', price: 80, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 56,
    highlights: ['Underground pit museum', 'Han Dynasty figurines', 'Glass walkway over pits', 'Archaeological site'],
    description: 'Skip the Terracotta Warriors crowds for Hanyangling — the tomb of Emperor Jingdi. Walk on glass directly over the excavation pits, see thousands of miniature figurines, and understand Han Dynasty burial customs.',
    itinerary: ['09:00 Hotel pickup', '10:00 Hanyangling Underground Museum', '10:30 Glass walkway over pits', '11:00 Miniature figurines: soldiers, animals, dancers', '12:00 Archaeological explanation', '12:30 Lunch at site restaurant', "14:00 Return to Xi'an", '15:00 Hotel drop-off'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Hanyangling entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'xa-11', type: 'experience', title: 'Shadow Puppet Making + Qinqiang Opera Experience', city: 'xa', price: 85, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Hand-make shadow puppet', 'Learn puppet manipulation', 'Qinqiang opera performance', 'Take home your creation'],
    description: 'Learn the ancient art of shadow puppetry from a master craftsman. Carve your own puppet from leather, paint it, then learn to manipulate it behind the screen. End with a powerful Qinqiang opera performance.',
    itinerary: ['14:00 Meet at workshop', '14:15 Shadow puppet history & demonstration', '14:45 Carve your own puppet (leather, 1.5h)', '16:15 Paint & assemble puppet', '16:45 Puppet manipulation lesson', '17:15 Qinqiang opera performance', '18:00 End with your puppet to take home'],
    includes: ['Master craftsman guide (4h)', 'All materials', 'Puppet making lesson', 'Qinqiang opera show', 'Your puppet to take home', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
  { id: 'xa-12', type: 'experience', title: 'Zhongnan Mountain & Louguantai Taoist Temple', city: 'xa', price: 120, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.5, reviews: 34,
    highlights: ['Birthplace of Taoism', 'Laozi statue & temple', 'Mountain forest hike', 'Taoist tea ceremony'],
    description: 'Zhongnan Mountain is where Taoism was born. Visit Louguantai where Laozi wrote the Tao Te Ching, hike through bamboo forests, and experience a Taoist tea ceremony with a resident monk.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Zhongnan Mountain', '10:00 Louguantai Temple: Laozi & Tao Te Ching', '11:00 Bamboo forest hike', '12:30 Vegetarian lunch at temple', '14:00 Taoist tea ceremony', "15:00 Return to Xi'an", '17:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Louguantai entrance', 'Vegetarian lunch', 'Tea ceremony', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'xa-13', type: 'experience', title: 'Yongxingfang Foodie Paradise + Bowl-Dumping Wine', city: 'xa', price: 55, duration: '3h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 234,
    highlights: ['50+ Shaanxi street foods', 'Bowl-dumping wine ceremony', 'Traditional performances', 'Local craft stalls'],
    description: "Yongxingfang is Xi'an's hottest food destination — 50+ stalls of authentic Shaanxi cuisine in a beautifully restored Ming-style complex. Try the famous bowl-dumping wine and watch traditional performances.",
    itinerary: ['17:00 Meet at Yongxingfang entrance', '17:15 Food crawl: 8+ signature dishes', '18:30 Bowl-dumping wine ceremony', '19:00 Traditional performance: Qinqiang opera excerpt', '19:30 Dessert: rice cakes & sweet osmanthus', '20:00 End'],
    includes: ['Food expert guide (3h)', 'All food tastings (8+ dishes)', 'Bowl-dumping wine', 'Performance viewing', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
  { id: 'xa-13', type: 'experience', title: 'Yongxingfang Foodie Paradise + Bowl-Dumping Wine', city: 'xa', price: 55, duration: '3h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 234,
    highlights: ['50+ Shaanxi street foods', 'Bowl-dumping wine ceremony', 'Traditional performances', 'Local craft stalls'],
    description: "Yongxingfang is Xi'an's hottest food destination — 50+ stalls of authentic Shaanxi cuisine in a beautifully restored Ming-style complex. Try the famous bowl-dumping wine and watch traditional performances.",
    itinerary: ['17:00 Meet at Yongxingfang entrance', '17:15 Food crawl: 8+ signature dishes', '18:30 Bowl-dumping wine ceremony', '19:00 Traditional performance: Qinqiang opera excerpt', '19:30 Dessert: rice cakes & sweet osmanthus', '20:00 End'],
    includes: ['Food expert guide (3h)', 'All food tastings (8+ dishes)', 'Bowl-dumping wine', 'Performance viewing', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
{ id: 'xa-14', type: 'experience', title: 'Tang Paradise Night Tour', city: 'xa', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 78,
    highlights: ['Tang Dynasty architecture', 'Laser & water show', 'Imperial garden walk', 'Tang costume rental'],
    description: 'Step into a living Tang Dynasty painting at Tang Paradise. This massive imperial garden features reconstructed palaces, laser shows on the lake, and the chance to wear Tang-era costumes for photos.',
    itinerary: ['18:00 Meet at Tang Paradise', '18:15 Imperial garden walk: palaces, pavilions, bridges', '19:00 Tang costume fitting & photo shoot', '20:00 Laser & water show on lake', '20:45 Tang Dynasty dance performance', '21:30 Night garden stroll', '22:00 End'],
    includes: ['Private expert guide (4h)', 'Tang Paradise entrance', 'Tang costume rental', 'Performance tickets', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
  { id: 'xa-14', type: 'experience', title: 'Tang Paradise Night Tour', city: 'xa', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 78,
    highlights: ['Tang Dynasty architecture', 'Laser & water show', 'Imperial garden walk', 'Tang costume rental'],
    description: 'Step into a living Tang Dynasty painting at Tang Paradise. This massive imperial garden features reconstructed palaces, laser shows on the lake, and the chance to wear Tang-era costumes for photos.',
    itinerary: ['18:00 Meet at Tang Paradise', '18:15 Imperial garden walk: palaces, pavilions, bridges', '19:00 Tang costume fitting & photo shoot', '20:00 Laser & water show on lake', '20:45 Tang Dynasty dance performance', '21:30 Night garden stroll', '22:00 End'],
    includes: ['Private expert guide (4h)', 'Tang Paradise entrance', 'Tang costume rental', 'Performance tickets', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
{ id: 'xa-15', type: 'experience', title: 'Qianling Mausoleum & Princess Yongtai Tomb', city: 'xa', price: 95, duration: '6h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Tang Dynasty royal tomb', 'Underground murals', 'Spirit Way stone statues', 'Princess Yongtai tomb'],
    description: 'Visit the tomb of Emperor Gaozong and Empress Wu Zetian — the only female emperor in Chinese history. The underground murals are remarkably preserved, showing Tang Dynasty court life in vivid color.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Qianling Mausoleum', '10:00 Spirit Way: stone animals & officials', '10:30 Main tomb: history of Wu Zetian', '11:30 Princess Yongtai tomb: underground murals', '12:30 Lunch at local restaurant', "14:00 Return to Xi'an", '15:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Qianling entrance', 'Princess Yongtai tomb ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'xa-15', type: 'experience', title: 'Qianling Mausoleum & Princess Yongtai Tomb', city: 'xa', price: 95, duration: '6h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Tang Dynasty royal tomb', 'Underground murals', 'Spirit Way stone statues', 'Princess Yongtai tomb'],
    description: 'Visit the tomb of Emperor Gaozong and Empress Wu Zetian — the only female emperor in Chinese history. The underground murals are remarkably preserved, showing Tang Dynasty court life in vivid color.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Qianling Mausoleum', '10:00 Spirit Way: stone animals & officials', '10:30 Main tomb: history of Wu Zetian', '11:30 Princess Yongtai tomb: underground murals', '12:30 Lunch at local restaurant', "14:00 Return to Xi'an", '15:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Qianling entrance', 'Princess Yongtai tomb ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-01', type: 'experience', title: 'Avatar Mountains, Tianzi Peak & Glass Bridge', city: 'zj', price: 140, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.9, reviews: 134,
    highlights: ["Bailong Elevator (world's tallest)", 'Avatar Hallelujah Mountain', 'Zhangjiajie Glass Bridge', 'Tianzi Peak sunrise viewpoint'],
    description: "Walk the floating mountains that inspired Avatar. Ride the world's tallest outdoor elevator, cross the terrifying glass bridge, and hear the legends of the Tujia people.",
    itinerary: ['06:00 Hotel pickup', '06:30 Bailong Elevator sunrise ascent', '07:30 Yuanjiajie: Avatar Hallelujah Mountain', '09:30 Tianzi Peak: 3,000+ pillar view', '12:00 Mountain restaurant lunch', '14:00 Zhangjiajie Grand Canyon Glass Bridge', '16:00 Canyon hike & waterfall', '17:30 Return to hotel'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Zhangjiajie National Park entrance', 'Bailong Elevator ticket', 'Glass Bridge ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Cable car (optional alternative)'],
  },
{ id: 'zj-02', type: 'experience', title: 'Tianmen Mountain, Glass Skywalk & 99 Bends Road', city: 'zj', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.8, reviews: 89,
    highlights: ["World's longest cable car", 'Glass skywalk on cliff edge', '99 Bends mountain road', "Heaven's Gate cave climb"],
    description: "Ride the 7.5km cable car from city to summit, walk the terrifying glass skywalk, and climb 999 steps through Heaven's Gate — the most spiritual mountain in China.",
    itinerary: ['08:00 Hotel pickup', '08:30 Tianmen Mountain cable car (30 min ascent)', '09:30 Glass skywalk on cliff edge', '10:30 Tianmen Temple & mountain-top walk', '12:00 Cliff-hanging restaurant lunch', '13:30 99 Bends road bus ride down', "14:30 Heaven's Gate: 999-step climb", '16:00 Return to hotel'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Tianmen Mountain entrance', 'Cable car round trip', 'Glass skywalk shoe covers', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Escalator down (optional, ~$5)'],
  },
{ id: 'zj-03', type: 'experience', title: 'Zhangjiajie Grand Canyon + Glass Bridge Full Day', city: 'zj', price: 120, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.7, reviews: 112,
    highlights: ["World's longest glass bridge", '300m high glass walk', 'Canyon hiking', 'Waterfall swimming'],
    description: "Cross the world's longest and highest glass-bottomed bridge — 430 meters long and 300 meters above the ground. Then hike through the canyon, swim under waterfalls, and ride a zip line across the gorge.",
    itinerary: ['09:00 Hotel pickup', '10:00 Arrive at Grand Canyon', '10:15 Glass Bridge walk', '11:00 Canyon hike down', '12:30 Lunch at canyon restaurant', '14:00 Waterfall swimming', '15:00 Zip line across gorge', '16:00 Boat ride out of canyon', '17:00 Return to hotel'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Grand Canyon + Glass Bridge ticket', 'Zip line', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Swimsuit rental'],
  },
{ id: 'zj-04', type: 'experience', title: 'Yellow Dragon Cave & Baofeng Lake', city: 'zj', price: 95, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.6, reviews: 78,
    highlights: ['Underground river cave', 'Stalactite formations', 'Baofeng Lake boat ride', 'Ethnic minority songs'],
    description: 'Yellow Dragon Cave is one of the largest karst caves in China. Explore its underground rivers and massive chambers, then take a peaceful boat ride on Baofeng Lake surrounded by peaks while listening to traditional Tujia songs.',
    itinerary: ['09:00 Hotel pickup', '10:00 Yellow Dragon Cave: guided tour', '12:00 Lunch at cave entrance', '13:30 Baofeng Lake boat ride', '14:30 Tujia folk song performance', '15:30 Lakeside walk', '16:30 Return to hotel'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Yellow Dragon Cave ticket', 'Baofeng Lake boat ticket', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-05', type: 'experience', title: 'Tujia Folk Village + Baishou Dance Experience', city: 'zj', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.5, reviews: 56,
    highlights: ['Traditional Tujia village', 'Baishou hand-waving dance', 'Local rice wine tasting', 'Batik craft workshop'],
    description: 'Visit an authentic Tujia village — the indigenous people of Zhangjiajie. Learn the Baishou hand-waving dance, taste homemade rice wine, and try your hand at traditional batik textile dyeing.',
    itinerary: ['14:00 Hotel pickup', '14:30 Arrive at Tujia village', '14:45 Village walk: traditional houses, totems', '15:15 Baishou dance lesson', '16:00 Rice wine tasting (3 varieties)', '16:30 Batik craft workshop', '17:30 Home-cooked dinner with local family', '18:30 Return to hotel'],
    includes: ['Private expert guide (4h)', 'Hotel pickup & drop-off', 'Village donation', 'Dance lesson', 'Wine tasting', 'Batik workshop', 'Dinner', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-06', type: 'experience', title: 'Mengdong River White Water Rafting', city: 'zj', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.8, reviews: 45,
    highlights: ['Class III-IV rapids', 'Scenic canyon views', 'Tujia riverside villages', 'BBQ lunch on riverbank'],
    description: 'Experience thrilling white water rafting on the Mengdong River. Navigate Class III-IV rapids through a spectacular canyon, pass traditional Tujia villages, and enjoy a riverside BBQ lunch.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at rafting base', '10:00 Safety briefing & equipment', '10:30 Rafting begins (3 hours)', '13:30 Riverside BBQ lunch', '15:00 Return to hotel'],
    includes: ['Private guide + rafting instructor (6h)', 'Hotel pickup & drop-off', 'Rafting equipment & safety gear', 'BBQ lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance', 'Water shoes (rental available)'],
  },
{ id: 'zj-07', type: 'experience', title: 'Fenghuang Ancient Town Day Trip', city: 'zj', price: 135, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.9, reviews: 167,
    highlights: ['1,300-year-old water town', 'Miao minority culture', 'Stilt houses over river', 'Night lantern cruise'],
    description: 'Fenghuang (Phoenix Town) is the most beautiful ancient town in China. Walk cobblestone streets, see traditional Miao stilt houses, and take a lantern-lit boat ride on the Tuo River at dusk.',
    itinerary: ['07:00 Hotel pickup', '10:00 Arrive at Fenghuang', '10:15 Ancient town walk: East Gate, stilt houses', '12:00 Lunch: Miao sour fish + rice wine', '14:00 Miao silver jewelry workshop', '15:30 Free time: alleys, shops, cafes', '17:00 Tuo River boat ride at sunset', '18:00 Return to Zhangjiajie', '21:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Fenghuang entrance', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
{ id: 'zj-08', type: 'experience', title: 'Tianmen Fox Fairy Show (Live Performance)', city: 'zj', price: 75, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.7, reviews: 98,
    highlights: ['Outdoor mountain theater', 'Real cliff backdrop', 'Fox fairy love story', 'Laser & fire effects'],
    description: 'Tianmen Fox Fairy is a spectacular outdoor musical performed on a stage set against a real mountain cliff. The story of a fox fairy and a woodcutter features incredible acrobatics, lasers, and fire effects.',
    itinerary: ['19:00 Hotel pickup', '19:30 Arrive at theater', '20:00 Show begins', '21:30 Show ends', '22:00 Return to hotel'],
    includes: ['Private guide (3h)', 'Hotel pickup & drop-off', 'VIP theater ticket', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner'],
  },
{ id: 'zj-09', type: 'experience', title: 'Mengdong River Drifting + Jiutian Cave', city: 'zj', price: 105, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.6, reviews: 34,
    highlights: ['Gentle river drifting', "Asia's largest cave", 'Underground river boat', 'Stalactite formations'],
    description: "Drift down the Mengdong River on a gentle bamboo raft, then explore Jiutian Cave — Asia's largest cave with an underground river you can boat through. A perfect mix of relaxation and adventure.",
    itinerary: ['08:00 Hotel pickup', '09:30 Mengdong River bamboo raft drifting', '11:00 Arrive at Jiutian Cave', '11:30 Underground river boat tour', '13:00 Lunch at cave entrance', '14:00 Above-ground cave walk', '15:30 Return to hotel'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Rafting ticket', 'Jiutian Cave entrance + boat', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-10', type: 'experience', title: 'Zhangjiajie Grand Theatre Show: Charming Xiangxi', city: 'zj', price: 65, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.5, reviews: 67,
    highlights: ['Tujia & Miao dance', 'Fire-walking performance', 'Wedding customs demo', 'Local costume photo'],
    description: "Charming Xiangxi is a celebration of Zhangjiajie's ethnic cultures. Watch Tujia and Miao dancers, witness the terrifying fire-walking ceremony, and see traditional wedding customs reenacted on stage.",
    itinerary: ['19:00 Hotel pickup', '19:30 Arrive at theater', '20:00 Show begins', '21:15 Show ends', '21:30 Costume photo opportunity', '22:00 Return to hotel'],
    includes: ['Private guide (3h)', 'Hotel pickup & drop-off', 'Theater ticket (premium seat)', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Dinner'],
  },
{ id: 'zj-11', type: 'experience', title: 'Wulingyuan Core Zone Deep Hike', city: 'zj', price: 130, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.8, reviews: 56,
    highlights: ['Avatar Hallelujah Mountain', 'First Bridge Under Heaven', 'Imperial Brush Peak', 'Hidden trails'],
    description: "A full day of hiking through Wulingyuan's most spectacular areas. Your guide takes you beyond the main tourist paths to hidden viewpoints and less-visited trails with even better views.",
    itinerary: ['07:00 Hotel pickup', '08:00 Yuanjiajie: Avatar Mountain & First Bridge', '10:00 Hike to hidden viewpoints', '12:00 Mountain picnic lunch', '13:00 Yangjiajie: natural Great Wall', '15:00 Imperial Brush Peak', '16:00 Return to hotel'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Wulingyuan entrance', 'Picnic lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Cable car (optional)'],
  },
{ id: 'zj-12', type: 'experience', title: 'Dayong Ancient City + Lishui River Walk', city: 'zj', price: 50, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.3, reviews: 45,
    highlights: ['Ming Dynasty city gate', 'Tujia architecture', 'Lishui River boardwalk', 'Local night market'],
    description: 'Explore Dayong — the ancient city at the heart of modern Zhangjiajie. Walk the Ming Dynasty city gate, see traditional Tujia architecture, and stroll the Lishui River boardwalk. End at the night market for local snacks.',
    itinerary: ['18:00 Meet at Dayong gate', '18:15 Ancient city wall walk', '18:45 Tujia architecture district', '19:15 Lishui River boardwalk', '19:45 Night market: local snacks', '20:30 End'],
    includes: ['Local guide (3h)', 'Snack tastings (4+ items)', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
{ id: 'zj-13', type: 'experience', title: 'Red Stone Forest (Hongshilin) + Zuolong Gorge', city: 'zj', price: 115, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.5, reviews: 34,
    highlights: ['Red karst stone forest', 'Zuolong Gorge hiking', 'Natural swimming pools', 'Primitive forest'],
    description: 'Red Stone Forest is a unique geological formation of red karst pillars. Hike through Zuolong Gorge with its natural swimming pools and waterfalls, surrounded by primitive forest. A hidden gem most tourists miss.',
    itinerary: ['08:00 Hotel pickup', '10:00 Arrive at Red Stone Forest', '10:30 Stone forest walk', '12:00 Lunch at local restaurant', '13:30 Zuolong Gorge hike', '14:30 Natural swimming pool', '15:30 Waterfall visit', '16:00 Return to hotel'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Red Stone Forest entrance', 'Zuolong Gorge entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
{ id: 'zj-14', type: 'experience', title: 'Zhangjiajie Geology Museum + Science Tour', city: 'zj', price: 40, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.2, reviews: 23,
    highlights: ['Quartz sandstone geology', '3D mountain formation demo', 'Avatar connection exhibit', 'Fossil collection'],
    description: "Understand the science behind Zhangjiajie's otherworldly landscape. The geology museum explains how 380 million years of erosion created these quartz sandstone pillars — and how they inspired the floating mountains of Pandora.",
    itinerary: ['09:00 Meet at museum', '09:15 Zhangjiajie geology formation', '10:00 3D mountain formation demonstration', "10:30 Avatar connection: James Cameron's inspiration", '11:00 Local fossil & mineral collection', '11:30 Q&A with geologist guide', '12:00 End'],
    includes: ['Geologist guide (3h)', 'Museum entrance', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
{ id: 'zj-15', type: 'experience', title: 'Badagong Mountain Primitive Forest', city: 'zj', price: 145, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', rating: 4.6, reviews: 12,
    highlights: ['UNESCO biosphere reserve', 'Rare golden snub-nose monkeys', 'Ancient trees', 'Waterfall hiking'],
    description: "Badagong Mountain is a UNESCO biosphere reserve with some of China's last primitive forest. Hike through ancient trees, spot rare wildlife including golden snub-nose monkeys, and discover hidden waterfalls.",
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Badagong', '10:00 Forest hike: ancient trees & wildlife spotting', '12:00 Lunch at forest station', '13:30 Waterfall hike', '15:00 Return to hotel'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Badagong entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
];

  { id: 'cd-11', type: 'experience', title: 'Wolong Panda Base: Volunteer Experience', city: 'chengdu', price: 185, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.9, reviews: 67,
    highlights: ['Panda volunteer program', 'Prepare panda food', 'Clean panda enclosure', 'Feed pandas (close contact)'],
    description: 'Go beyond watching — become a panda volunteer for a day. Under expert supervision, prepare bamboo and special panda cakes, clean enclosures, and feed these gentle giants. An unforgettable hands-on experience.',
    itinerary: ['07:00 Hotel pickup', '09:00 Arrive at Wolong', '09:30 Orientation & safety briefing', '10:00 Prepare panda food (bamboo, special cakes)', '11:00 Clean panda enclosure', '12:00 Feed pandas (through fence, close contact)', '12:30 Lunch at base', '14:00 Documentary: panda conservation', '15:00 Receive volunteer certificate', '15:30 Return to Chengdu', '18:00 Hotel drop-off'],
    includes: ['Private guide + panda keeper (8h)', 'Hotel pickup & drop-off', 'Volunteer program fee', 'Lunch', 'Certificate', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'cd-12', type: 'experience', title: 'Chengdu Tea Ceremony + Sichuan Cuisine Cooking Class', city: 'chengdu', price: 90, duration: '5h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 112,
    highlights: ['Gaiwan tea ceremony', '3 Sichuan dishes cooking', 'Mapo tofu from scratch', 'Take home recipes'],
    description: 'Master the art of Sichuan cooking. Learn to make mapo tofu, kung pao chicken, and fish-fragrant eggplant from a local chef. Start with a traditional gaiwan tea ceremony to set the mood.',
    itinerary: ['10:00 Meet at cooking studio', '10:15 Gaiwan tea ceremony', '10:45 Cooking class starts: 3 signature dishes', '12:30 Plating & presentation', '13:00 Feast on your creations', '14:00 Recipe cards & spice guide', '14:30 End with tea'],
    includes: ['Private chef instructor (5h)', 'All ingredients & equipment', 'Tea ceremony', '3-course meal', 'Recipe cards', 'Spice guide to take home'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
  { id: 'cd-13', type: 'experience', title: 'Siguniang Mountain Day Trip', city: 'chengdu', price: 165, duration: '10h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.7, reviews: 45,
    highlights: ['Snow-capped peaks', 'Alpine meadows', 'Tibetan village visit', 'High-altitude hiking'],
    description: 'Siguniang Mountain is known as the Alps of the East. See snow-capped peaks, alpine meadows filled with wildflowers, and visit a Tibetan village. Perfect for nature lovers and photographers.',
    itinerary: ['06:00 Hotel pickup', '09:00 Arrive at Siguniang Mountain', '09:30 Shuangqiao Valley: scenic drive & short hikes', '12:00 Lunch at Tibetan guesthouse', '13:30 Tibetan village visit: architecture, culture', '15:00 Changping Valley walk', '16:00 Return to Chengdu', '20:00 Hotel drop-off'],
    includes: ['Private expert guide (10h)', 'Hotel pickup & drop-off', 'Siguniang entrance', 'Lunch at Tibetan guesthouse', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'cd-14', type: 'experience', title: 'Chengdu Museum + Tianfu Square & Sichuan Cuisine History', city: 'chengdu', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.5, reviews: 67,
    highlights: ['Chengdu Museum artifacts', 'Tianfu Square history', 'Sichuan pepper story', 'Brocade museum'],
    description: 'Discover Chengdu\'s 4,000-year history at the Chengdu Museum. From ancient Shu Kingdom to modern metropolis, learn how Sichuan cuisine evolved, and see the world-famous Shu brocade weaving demonstration.',
    itinerary: ['09:00 Meet at Chengdu Museum', '09:15 Ancient Shu Kingdom gallery', '10:00 Sichuan cuisine history exhibit', '11:00 Brocade weaving demonstration', '12:00 Tianfu Square: history & symbolism', '12:30 Lunch at museum cafe', '13:30 End'],
    includes: ['Museum guide (4h)', 'Chengdu Museum entry (free)', 'Brocade demo', 'Museum cafe lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
  { id: 'cd-15', type: 'experience', title: 'Anren Ancient Town + Jianchuan Museum Cluster', city: 'chengdu', price: 95, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.6, reviews: 34,
    highlights: ['Republican-era architecture', 'Jianchuan Museum: 8 museums', 'Foot binding history', 'Cultural revolution artifacts'],
    description: 'Anren is one of China\'s best-preserved Republican-era towns. The Jianchuan Museum Cluster here has 8 museums covering everything from the Cultural Revolution to the Sino-Japanese War to foot binding — a powerful, educational experience.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Anren Ancient Town', '10:00 Republican-era architecture walk', '11:00 Jianchuan Museum Cluster (choose 3 museums)', '12:30 Lunch at local restaurant', '14:00 Continue museum visits', '15:30 Ancient town free time', '16:00 Return to Chengdu', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Anren town entrance', '3 museum tickets', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'gl-01', type: 'experience', title: 'Li River Cruise & Yangshuo Countryside Bike Ride', city: 'guilin', price: 125, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.9, reviews: 156,
    highlights: ['Li River 4-star cruise', 'Cormorant fisherman photo', 'Yangshuo countryside cycling', 'Moon Hill climb'],
    description: 'Cruise the world\'s most painted river, capture the iconic cormorant fisherman, then cycle through karst peaks and rice paddies in Yangshuo\'s dreamlike countryside.',
    itinerary: ['08:00 Hotel pickup in Guilin', '09:00 4-star Li River cruise (Guilin to Yangshuo)', '12:00 Arrive Yangshuo, local lunch', '14:00 Countryside bike ride: rice paddies, buffalo, karst peaks', '15:30 Moon Hill climb', '16:30 West Street free time', '18:00 Return to Guilin', '19:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Li River 4-star cruise ticket', 'Bike rental', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Moon Hill entrance (optional, ~)'],
  },
  { id: 'gl-02', type: 'experience', title: 'Longji Rice Terraces & Yao Minority Village', city: 'guilin', price: 120, duration: '8h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.8, reviews: 112,
    highlights: ['600-year-old rice terraces', 'Yao minority village visit', 'Bamboo tube rice lunch', 'Sunset viewpoint'],
    description: 'Hike through the spectacular Dragon\'s Backbone Rice Terraces, meet the Yao people who\'ve farmed here for centuries, and enjoy a traditional lunch cooked in bamboo.',
    itinerary: ['07:30 Hotel pickup', '09:30 Arrive Longji, hike to viewpoint 1', '11:00 Yao minority village: traditional clothing, long-hair show', '12:30 Bamboo tube rice lunch with local family', '14:00 Hike to viewpoint 2 (higher terrace view)', '16:00 Sunset viewpoint', '17:00 Return to Guilin', '19:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Longji entrance ticket', 'Bamboo tube rice lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'gl-03', type: 'experience', title: 'Yangshuo West Street + Impression Liu Sanjie Show', city: 'guilin', price: 95, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.7, reviews: 134,
    highlights: ['Yangshuo West Street shopping', 'Impression Liu Sanjie (Zhang Yimou)', 'Li River night scenery', 'Local beer fish dinner'],
    description: 'See the spectacular Impression Liu Sanjie — a light show on the Li River directed by Zhang Yimou (Hero, House of Flying Daggers). Before the show, explore West Street\'s unique blend of Chinese and Western culture.',
    itinerary: ['16:00 Hotel pickup', '17:00 Arrive Yangshuo', '17:15 West Street walk: shops, cafes, bars', '18:30 Local dinner: Yangshuo beer fish', '20:00 Impression Liu Sanjie show', '21:10 Return to Guilin', '22:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Impression Liu Sanjie ticket (VIP seat)', 'Dinner', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'gl-04', type: 'experience', title: 'Elephant Trunk Hill + Two Rivers & Four Lakes', city: 'guilin', price: 50, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.5, reviews: 198,
    highlights: ['Elephant Trunk Hill icon', 'Two Rivers Four Lakes cruise', 'Ronghu & Shanhu lakes', 'Night light show'],
    description: 'See Guilin\'s most famous landmark — Elephant Trunk Hill, shaped like an elephant drinking from the Li River. Then cruise the Two Rivers & Four Lakes to see the city\'s stunning night lights.',
    itinerary: ['19:00 Meet at Elephant Trunk Hill', '19:15 Hill visit & photo stops', '20:00 Two Rivers Four Lakes cruise', '21:00 Sun & Moon Pagodas (illuminated)', '21:30 End'],
    includes: ['Private guide (3h)', 'Elephant Trunk Hill ticket', 'Night cruise ticket', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },
  { id: 'gl-05', type: 'experience', title: 'Yulong River Bamboo Raft + Ten Mile Gallery', city: 'guilin', price: 85, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1548919973-5eaf877979e3?w=600&h=400&fit=crop', rating: 4.8, reviews: 167,
    highlights: ['Traditional bamboo raft', 'Ten Mile Gallery cycling', 'Moon Hill', 'Big Banyan Tree'],
    description: 'Drift down the Yulong River on a traditional bamboo raft with a cormorant fisherman. Then cycle the famous Ten Mile Gallery — a road winding through the most spectacular karst scenery in China.',
    itinerary: ['09:00 Hotel pickup', '10:00 Yulong River bamboo raft', '11:30 Cycle Ten Mile Gallery', '12:30 Lunch at farmhouse', '14:00 Moon Hill climb', '15:00 Big Banyan Tree visit', '16:00 Return to Guilin', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Bamboo raft', 'Bike rental', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },

  { id: 'cd-01', type: 'experience', title: 'Panda Base, Wuhou Shrine & Jinli Ancient Street', city: 'chengdu', price: 115, duration: '7h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 312,
    highlights: ['Panda Base before crowds', 'Baby panda nursery', 'Wuhou Shrine Three Kingdoms stories', 'Jinli Street hot pot dinner'],
    description: 'Arrive before the crowds for an exclusive panda experience, then dive into Chengdu\'s 2,000-year history at Wuhou Shrine, ending with legendary Sichuan hot pot.',
    itinerary: ['07:00 Hotel pickup', '07:30 Panda Base: adult pandas, baby nursery, red pandas', '10:00 Wuhou Shrine: Three Kingdoms stories', '12:00 Jinli Ancient Street lunch: dan dan noodles', '14:00 Tea house experience: Sichuan opera face-changing (optional)', '15:00 Free time in Jinli for crafts & snacks', '18:00 Hot pot dinner at famous local restaurant', '20:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Panda Base entrance', 'Wuhou Shrine ticket', 'Lunch & hot pot dinner', 'Bottled water'],
    excludes: ['Sichuan opera show (optional, ~)', 'Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'cd-02', type: 'experience', title: 'Dujiangyan Irrigation System & Mount Qingcheng', city: 'chengdu', price: 135, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.7, reviews: 98,
    highlights: ['2,200-year-old irrigation wonder', 'Taoist mountain hiking', 'Cable car to summit', 'Mountain temple tea'],
    description: 'Discover the ancient engineering marvel that still irrigates Chengdu plain, then hike Mount Qingcheng — birthplace of Taoism — with a private guide who knows every trail.',
    itinerary: ['08:00 Hotel pickup', '09:30 Dujiangyan: Anlan Bridge, Fish Mouth, Bottle-Neck', '12:00 Local lunch: river fish + mountain vegetables', '13:30 Mount Qingcheng: cable car up', '14:30 Summit temple visit & mountain tea ceremony', '16:00 Hike down through bamboo forest', '17:30 Return to Chengdu', '19:00 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Dujiangyan entrance', 'Mount Qingcheng entrance + cable car', 'Lunch', 'Mountain tea ceremony', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'cd-03', type: 'experience', title: 'Leshan Giant Buddha Day Trip', city: 'chengdu', price: 155, duration: '8h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.9, reviews: 178,
    highlights: ['71m tall stone Buddha', 'Boat view from river', 'Lingyun Temple', 'Wuyou Temple'],
    description: 'The Leshan Giant Buddha is the largest stone Buddha in the world — carved from a cliff face over 90 years during the Tang Dynasty. See it from the river by boat for the most impressive view, then climb to its head for scale.',
    itinerary: ['07:00 Hotel pickup', '09:00 Arrive at Leshan', '09:30 Boat cruise: full Buddha view from river', '10:30 Climb to Buddha head', '11:30 Lingyun Temple & cliff carvings', '12:30 Lunch: Leshan signature snacks', '14:00 Wuyou Temple walk', '15:00 Return to Chengdu', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Leshan entrance + boat cruise', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'cd-04', type: 'experience', title: 'Mount Emei Day Trip', city: 'chengdu', price: 175, duration: '10h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 134,
    highlights: ['UNESCO World Heritage site', 'Golden Summit sunrise option', 'Wild monkeys', 'Baoguo Temple'],
    description: 'Mount Emei is one of the Four Sacred Buddhist Mountains of China. Hike or cable car to the Golden Summit for panoramic views above the clouds, visit ancient temples, and encounter the famous wild monkeys.',
    itinerary: ['05:00 Hotel pickup (early for summit)', '07:00 Arrive at Emei, cable car to summit', '08:00 Golden Summit: sea of clouds & giant Buddha statue', '10:00 Hike down: ancient temples & monkey encounters', '12:30 Lunch at mountain restaurant', '14:00 Baoguo Temple at mountain base', '15:00 Return to Chengdu', '18:00 Hotel drop-off'],
    includes: ['Private expert guide (10h)', 'Hotel pickup & drop-off', 'Emei entrance + cable car', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'cd-05', type: 'experience', title: 'Kuanzhai Alley + People\'s Park Tea House', city: 'chengdu', price: 55, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.6, reviews: 167,
    highlights: ['Qing Dynasty alley architecture', 'People\'s Park tea ceremony', 'Ear cleaning service', 'Sichuan opera face-changing'],
    description: 'Experience Chengdu\'s famous laid-back lifestyle. Wander the beautifully restored Kuanzhai Alley, then spend hours at People\'s Park drinking tea, playing mahjong, and watching the world go by.',
    itinerary: ['14:00 Meet at Kuanzhai Alley', '14:15 Wide & Narrow alleys walk: architecture, shops, food', '15:30 People\'s Park: tea house seat by lake', '16:00 Tea ceremony: Longjing or jasmine', '16:30 Ear cleaning service (optional, traditional)', '17:00 Mahjong lesson with locals', '17:30 Sichuan opera face-changing show (15 min)', '18:00 End'],
    includes: ['Private expert guide (4h)', 'Tea ceremony', 'Mahjong lesson', 'Opera show', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Ear cleaning (optional, ~)'],
  },
  { id: 'cd-06', type: 'experience', title: 'Chengdu Hot Pot Experience + Chili Oil Making', city: 'chengdu', price: 75, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.8, reviews: 245,
    highlights: ['Authentic Sichuan hot pot', 'Make your own chili oil', 'Meat & vegetable selection guide', 'Local beer pairing'],
    description: 'Learn what makes Sichuan hot pot the world\'s most addictive meal. Your guide takes you to a local-favorite restaurant, explains the dipping sauce secrets, and you\'ll even make your own jar of chili oil to take home.',
    itinerary: ['18:00 Meet at hot pot restaurant', '18:15 Hot pot 101: broth types, ingredient selection', '18:30 Make your own dipping sauce', '19:00 Cooking lesson: timing each ingredient', '19:30 Chili oil making demonstration', '20:00 Feast + local beer pairing', '20:30 Take home your chili oil jar', '21:00 End'],
    includes: ['Private food guide (3h)', 'Hot pot dinner (all ingredients)', 'Chili oil making', '1 local beer', 'Your chili oil jar to take home', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Additional drinks'],
  },
  { id: 'cd-07', type: 'experience', title: 'Sanxingdui Museum: Ancient Alien Civilization', city: 'chengdu', price: 110, duration: '6h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.9, reviews: 89,
    highlights: ['3,000-year-old bronze masks', 'Mysterious giant eye sculptures', 'Ancient Shu Kingdom artifacts', 'Museum expert guide'],
    description: 'Sanxingdui\'s bizarre bronze masks with protruding eyes and huge ears look almost alien. These 3,000-year-old artifacts from the ancient Shu Kingdom challenge everything we thought we knew about Chinese civilization.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Sanxingdui Museum', '10:00 Bronze Hall: masks, statues, trees', '11:30 Gold & jade artifacts', '12:30 Lunch at museum restaurant', '14:00 Comprehensive Museum: daily life of Shu Kingdom', '15:30 Return to Chengdu', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Sanxingdui entrance', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'cd-08', type: 'experience', title: 'Taikoo Li, IFS Panda & Chunxi Road Shopping', city: 'chengdu', price: 45, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.5, reviews: 156,
    highlights: ['IFS rooftop panda statue', 'Taikoo Li designer shops', 'Chunxi Road pedestrian street', 'Local snack tasting'],
    description: 'See Chengdu\'s modern side. The IFS building\'s giant panda climbing the facade is an icon. Explore luxury shopping at Taikoo Li, walk Chunxi Road, and snack your way through the pedestrian zone.',
    itinerary: ['14:00 Meet at IFS', '14:15 IFS rooftop: panda statue photo', '14:45 Taikoo Li: Sichuan-style architecture + designer brands', '15:30 Chunxi Road pedestrian walk', '16:00 Snack crawl: egg tarts, sugar oil果子, rabbit heads', '17:00 End'],
    includes: ['Shopping guide (3h)', 'Snack tastings (4+ items)', 'Shopping tips', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Shopping purchases'],
  },
  { id: 'cd-09', type: 'experience', title: 'Huanglongxi Ancient Town + Water Fun', city: 'chengdu', price: 85, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.6, reviews: 78,
    highlights: ['1,700-year-old water town', 'Ancient banyan trees', 'Water gun fights (summer)', 'Traditional boat ride'],
    description: 'Cool off at Huanglongxi — a 1,700-year-old water town where locals and tourists have epic water fights in the summer. Explore ancient temples, giant banyan trees, and take a traditional wooden boat ride.',
    itinerary: ['09:00 Hotel pickup', '10:00 Arrive at Huanglongxi', '10:15 Water town walk: ancient streets, temples', '11:00 Traditional boat ride', '12:00 Lunch: local fish + river shrimp', '13:30 Water fun: water guns, splashing (summer only)', '15:00 Free time for photos & snacks', '16:00 Return to Chengdu', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Huanglongxi entrance', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Water guns (rental available)'],
  },
  { id: 'cd-10', type: 'experience', title: 'Sichuan Face-Changing Opera + Teahouse Experience', city: 'chengdu', price: 65, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1623136362586-9874f0a590c3?w=600&h=400&fit=crop', rating: 4.7, reviews: 134,
    highlights: ['Face-changing performance', 'Fire-spitting act', 'Puppet show', 'Tea ceremony'],
    description: 'No trip to Chengdu is complete without seeing the legendary face-changing opera. Watch performers change masks in a fraction of a second, spit fire, and perform acrobatics — all while sipping tea in a traditional teahouse.',
    itinerary: ['19:00 Meet at Shufeng Yayun Teahouse', '19:15 Traditional tea ceremony', '19:30 Folk music & puppet show', '20:00 Fire-spitting performance', '20:15 Face-changing opera (main act)', '20:45 Audience interaction: try face-changing', '21:00 End'],
    includes: ['Private guide (3h)', 'Teahouse entrance', 'Premium seat', 'Tea service', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)'],
  },

  { id: 'xa-09', type: 'experience', title: 'Defuxiang Bar Street + Defu Lane Nightlife', city: 'xian', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.4, reviews: 89,
    highlights: ['Traditional courtyard bars', 'Live music venues', 'Local craft beer', 'Midnight snack tour'],
    description: 'Experience Xi\'an\'s surprisingly vibrant nightlife. Defuxiang\'s traditional courtyard bars offer a unique atmosphere — ancient architecture with modern cocktails. Your nightlife guide knows all the best spots.',
    itinerary: ['20:00 Meet at Defuxiang entrance', '20:15 Courtyard bar crawl: 4+ unique bars', '21:30 Live music venue', '22:30 Midnight snack: yangroupaomo & barbecue', '23:30 End'],
    includes: ['Nightlife expert guide (4h)', '4 bar visits', '2 craft beers', 'Midnight snack tour', 'Bottled water'],
    excludes: ['Nightlife expert guide (4h)', '4 bar visits', '2 craft beers', 'Midnight snack tour', 'Bottled water'],
  },
  { id: 'xa-10', type: 'experience', title: 'Hanyangling Underground Museum', city: 'xian', price: 80, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 56,
    highlights: ['Underground pit museum', 'Han Dynasty figurines', 'Glass walkway over pits', 'Archaeological site'],
    description: 'Skip the Terracotta Warriors crowds for Hanyangling — the tomb of Emperor Jingdi. Walk on glass directly over the excavation pits, see thousands of miniature figurines, and understand Han Dynasty burial customs.',
    itinerary: ['09:00 Hotel pickup', '10:00 Hanyangling Underground Museum', '10:30 Glass walkway over pits', '11:00 Miniature figurines: soldiers, animals, dancers', '12:00 Archaeological explanation', '12:30 Lunch at site restaurant', '14:00 Return to Xi\'an', '15:00 Hotel drop-off'],
    includes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Hanyangling entrance', 'Lunch', 'Bottled water'],
    excludes: ['Private expert guide (5h)', 'Hotel pickup & drop-off', 'Hanyangling entrance', 'Lunch', 'Bottled water'],
  },
  { id: 'xa-11', type: 'experience', title: 'Shadow Puppet Making + Qinqiang Opera Experience', city: 'xian', price: 85, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Hand-make shadow puppet', 'Learn puppet manipulation', 'Qinqiang opera performance', 'Take home your creation'],
    description: 'Learn the ancient art of shadow puppetry from a master craftsman. Carve your own puppet from leather, paint it, then learn to manipulate it behind the screen. End with a powerful Qinqiang opera performance.',
    itinerary: ['14:00 Meet at workshop', '14:15 Shadow puppet history & demonstration', '14:45 Carve your own puppet (leather, 1.5h)', '16:15 Paint & assemble puppet', '16:45 Puppet manipulation lesson', '17:15 Qinqiang opera performance', '18:00 End with your puppet to take home'],
    includes: ['Master craftsman guide (4h)', 'All materials', 'Puppet making lesson', 'Qinqiang opera show', 'Your puppet to take home', 'Bottled water'],
    excludes: ['Master craftsman guide (4h)', 'All materials', 'Puppet making lesson', 'Qinqiang opera show', 'Your puppet to take home', 'Bottled water'],
  },
  { id: 'xa-12', type: 'experience', title: 'Zhongnan Mountain & Louguantai Taoist Temple', city: 'xian', price: 120, duration: '7h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.5, reviews: 34,
    highlights: ['Birthplace of Taoism', 'Laozi statue & temple', 'Mountain forest hike', 'Taoist tea ceremony'],
    description: 'Zhongnan Mountain is where Taoism was born. Visit Louguantai where Laozi wrote the Tao Te Ching, hike through bamboo forests, and experience a Taoist tea ceremony with a resident monk.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Zhongnan Mountain', '10:00 Louguantai Temple: Laozi & Tao Te Ching', '11:00 Bamboo forest hike', '12:30 Vegetarian lunch at temple', '14:00 Taoist tea ceremony', '15:00 Return to Xi\'an', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Louguantai entrance', 'Vegetarian lunch', 'Tea ceremony', 'Bottled water'],
    excludes: ['Private expert guide (7h)', 'Hotel pickup & drop-off', 'Louguantai entrance', 'Vegetarian lunch', 'Tea ceremony', 'Bottled water'],
  },
  { id: 'xa-13', type: 'experience', title: 'Yongxingfang Foodie Paradise + Bowl-Dumping Wine', city: 'xian', price: 55, duration: '3h', maxGuests: 8, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 234,
    highlights: ['50+ Shaanxi street foods', 'Bowl-dumping wine ceremony', 'Traditional performances', 'Local craft stalls'],
    description: 'Yongxingfang is Xi\'an\'s hottest food destination — 50+ stalls of authentic Shaanxi cuisine in a beautifully restored Ming-style complex. Try the famous bowl-dumping wine and watch traditional performances.',
    itinerary: ['17:00 Meet at Yongxingfang entrance', '17:15 Food crawl: 8+ signature dishes', '18:30 Bowl-dumping wine ceremony', '19:00 Traditional performance: Qinqiang opera excerpt', '19:30 Dessert: rice cakes & sweet osmanthus', '20:00 End'],
    includes: ['Food expert guide (3h)', 'All food tastings (8+ dishes)', 'Bowl-dumping wine', 'Performance viewing', 'Bottled water'],
    excludes: ['Food expert guide (3h)', 'All food tastings (8+ dishes)', 'Bowl-dumping wine', 'Performance viewing', 'Bottled water'],
  },
  { id: 'xa-14', type: 'experience', title: 'Tang Paradise Night Tour', city: 'xian', price: 70, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 78,
    highlights: ['Tang Dynasty architecture', 'Laser & water show', 'Imperial garden walk', 'Tang costume rental'],
    description: 'Step into a living Tang Dynasty painting at Tang Paradise. This massive imperial garden features reconstructed palaces, laser shows on the lake, and the chance to wear Tang-era costumes for photos.',
    itinerary: ['18:00 Meet at Tang Paradise', '18:15 Imperial garden walk: palaces, pavilions, bridges', '19:00 Tang costume fitting & photo shoot', '20:00 Laser & water show on lake', '20:45 Tang Dynasty dance performance', '21:30 Night garden stroll', '22:00 End'],
    includes: ['Private expert guide (4h)', 'Tang Paradise entrance', 'Tang costume rental', 'Performance tickets', 'Bottled water'],
    excludes: ['Private expert guide (4h)', 'Tang Paradise entrance', 'Tang costume rental', 'Performance tickets', 'Bottled water'],
  },
  { id: 'xa-15', type: 'experience', title: 'Qianling Mausoleum & Princess Yongtai Tomb', city: 'xian', price: 95, duration: '6h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 45,
    highlights: ['Tang Dynasty royal tomb', 'Underground murals', 'Spirit Way stone statues', 'Princess Yongtai tomb'],
    description: 'Visit the tomb of Emperor Gaozong and Empress Wu Zetian — the only female emperor in Chinese history. The underground murals are remarkably preserved, showing Tang Dynasty court life in vivid color.',
    itinerary: ['08:00 Hotel pickup', '09:30 Arrive at Qianling Mausoleum', '10:00 Spirit Way: stone animals & officials', '10:30 Main tomb: history of Wu Zetian', '11:30 Princess Yongtai tomb: underground murals', '12:30 Lunch at local restaurant', '14:00 Return to Xi\'an', '15:30 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Qianling entrance', 'Princess Yongtai tomb ticket', 'Lunch', 'Bottled water'],
    excludes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Qianling entrance', 'Princess Yongtai tomb ticket', 'Lunch', 'Bottled water'],
  },

  { id: 'xa-04', type: 'experience', title: 'Big Wild Goose Pagoda, Da Ci\'en Temple & Fountain Show', city: 'xian', price: 65, duration: '4h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 112,
    highlights: ['7-story Tang Dynasty pagoda', 'Da Ci\'en Temple Buddhist art', 'Musical fountain show', 'Tang Culture Square'],
    description: 'The Big Wild Goose Pagoda has stood for 1,300 years as a symbol of Xi\'an. Climb to the top for city views, explore the temple complex, and end with Asia\'s largest musical fountain show.',
    itinerary: ['18:00 Meet at Big Wild Goose Pagoda South Square', '18:15 Pagoda climb: Buddhist relics & city view', '19:00 Da Ci\'en Temple grounds walk', '19:30 Tang Culture Square: statues & history', '20:00 Musical fountain show (20 min)', '20:30 Night photography of illuminated pagoda', '21:00 End'],
    includes: ['Private expert guide (4h)', 'Big Wild Goose Pagoda ticket', 'Musical fountain show', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
  { id: 'xa-05', type: 'experience', title: 'Shaanxi History Museum Deep Dive + Small Goose Pagoda', city: 'xian', price: 75, duration: '5h', maxGuests: 4, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.7, reviews: 145,
    highlights: ['300,000+ artifacts', 'Tang Dynasty gold & silver', 'Ancient murals tomb', 'Small Goose Pagoda serenity'],
    description: 'Shaanxi History Museum is often called the best museum in China. Your historian guide takes you through 5,000 years of history in 3 hours, focusing on the most remarkable pieces. End at the peaceful Small Goose Pagoda.',
    itinerary: ['09:00 Meet at Shaanxi History Museum', '09:15 Pre-Qin Dynasty: bronzes & weapons', '10:00 Han Dynasty: terracotta warriors & silk road', '11:00 Tang Dynasty: gold, silver & foreign trade', '12:00 Ancient tomb murals gallery', '13:00 Lunch at museum cafe', '14:00 Walk to Small Goose Pagoda', '14:30 Pagoda visit & Jianfu Temple', '15:30 End'],
    includes: ['History expert guide (5h)', 'Shaanxi History Museum entry (free)', 'Small Goose Pagoda ticket', 'Museum cafe lunch', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Personal expenses'],
  },
  { id: 'xa-06', type: 'experience', title: 'Hukou Waterfall Day Trip: Yellow River\'s Fury', city: 'xian', price: 155, duration: '8h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.8, reviews: 89,
    highlights: ['World\'s largest yellow waterfall', 'Yellow River boat ride', 'Loess Plateau scenery', 'Local folk performance'],
    description: 'Witness the raw power of the Yellow River at Hukou Waterfall — the largest waterfall on the river and one of the most spectacular in China. The yellow water crashes through a narrow gorge creating thunderous spray and rainbows.',
    itinerary: ['07:00 Hotel pickup', '09:30 Arrive at Hukou Waterfall', '10:00 Viewing platforms & photo stops', '11:00 Yellow River boat ride (near waterfall)', '12:00 Local folk performance', '12:30 Lunch: Yellow River carp + local dishes', '14:00 Loess Plateau viewpoint walk', '15:00 Return to Xi\'an', '17:30 Hotel drop-off'],
    includes: ['Private expert guide (8h)', 'Hotel pickup & drop-off', 'Hukou Waterfall entrance', 'Boat ride', 'Lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses', 'Travel insurance'],
  },
  { id: 'xa-07', type: 'experience', title: 'Xi\'an City Wall + Shuyuanmen Cultural Street', city: 'xian', price: 55, duration: '3h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.5, reviews: 78,
    highlights: ['14th-century city wall walk', 'Shuyuanmen calligraphy street', 'Ancient academy visit', 'Shadow puppet workshop'],
    description: 'Walk the most complete ancient city wall in China, then explore Shuyuanmen — a street dedicated to traditional Chinese calligraphy, painting, and crafts. Try your hand at shadow puppet making.',
    itinerary: ['15:00 Meet at South Gate', '15:15 City Wall walk (South to East gate, 2km)', '16:30 Descend at East Gate', '17:00 Shuyuanmen calligraphy street walk', '17:30 Ancient academy visit', '18:00 Shadow puppet making workshop', '19:00 End'],
    includes: ['Private expert guide (3h)', 'City Wall ticket', 'Shadow puppet workshop', 'Bottled water'],
    excludes: ['Hotel pickup', 'Gratuities (optional)', 'Dinner'],
  },
  { id: 'xa-08', type: 'experience', title: 'Qinling Wildlife Park + Cuihua Mountain', city: 'xian', price: 110, duration: '6h', maxGuests: 6, image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=600&h=400&fit=crop', rating: 4.6, reviews: 67,
    highlights: ['Giant panda viewing', 'Golden snub-nose monkeys', 'Cuihua Mountain lake', 'Nature hike'],
    description: 'See giant pandas without the Chengdu crowds at Qinling Wildlife Park. Then hike Cuihua Mountain\'s beautiful Tianchi Lake — a collapsed volcanic lake surrounded by forest. A perfect nature escape from the city.',
    itinerary: ['08:00 Hotel pickup', '09:00 Qinling Wildlife Park: pandas, monkeys, tigers', '11:00 Drive to Cuihua Mountain', '11:30 Tianchi Lake hike', '12:30 Lakeside picnic lunch', '14:00 Mountain forest walk', '15:00 Return to Xi\'an', '17:00 Hotel drop-off'],
    includes: ['Private expert guide (6h)', 'Hotel pickup & drop-off', 'Wildlife Park entrance', 'Cuihua Mountain entrance', 'Picnic lunch', 'Bottled water'],
    excludes: ['Gratuities (optional)', 'Personal expenses'],
  },
// VIPChinaGuide — Global JavaScript
// Brand: VIPChinaGuide | Your Exclusive Journey Through China

// Load FontAwesome
const faLink = document.createElement('link');
faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
faLink.rel = 'stylesheet';
document.head.appendChild(faLink);

// ========== HEADER SCROLL EFFECT ==========
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
}

// ========== MOBILE NAV ==========
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
    toggle.classList.toggle('active');
  });
}

// ========== REVEAL ON SCROLL ==========
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// ========== FAQ ACCORDION ==========
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const parent = q.parentElement;
      const wasActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!wasActive) parent.classList.add('active');
    });
  });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(20px)'; setTimeout(() => toast.remove(), 300); }, 4000);
}

// ========== LOCALSTORAGE HELPERS ==========
const VCG = {
  get: (key, def) => { try { return JSON.parse(localStorage.getItem('vcg_' + key)) || def; } catch { return def; } },
  set: (key, val) => localStorage.setItem('vcg_' + key, JSON.stringify(val)),
  remove: (key) => localStorage.removeItem('vcg_' + key),
};

// ========== AUTH STATE ==========
function getUser() { return VCG.get('user', null); }
function setUser(user) { VCG.set('user', user); updateAuthUI(); }
function logout() { VCG.remove('user'); updateAuthUI(); showToast('Logged out successfully', 'success'); setTimeout(() => location.href = 'index.html', 800); }

function updateAuthUI() {
  const user = getUser();
  const authAreas = document.querySelectorAll('.auth-area');
  authAreas.forEach(authArea => {
    if (!authArea) return;
    if (user) {
      authArea.innerHTML = `<a href="account.html" style="display:flex;align-items:center;gap:8px;color:var(--text-secondary);text-decoration:none;font-size:14px;font-weight:500;"><span style="width:32px;height:32px;border-radius:50%;background:var(--gradient-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;">${user.name?.[0] || 'U'}</span>${user.name}</a><button onclick="logout()" style="background:none;border:none;color:var(--text-muted);font-size:13px;cursor:pointer;margin-left:4px;">Logout</button>`;
    } else {
      authArea.innerHTML = `<a href="login.html" style="font-size:14px;font-weight:500;color:var(--text-secondary);text-decoration:none;">Sign In</a><a href="login.html" class="btn-primary" style="padding:8px 16px;font-size:13px;">Sign Up</a>`;
    }
  });
}

// ========== ORDER HELPERS ==========
function generateOrderId() {
  return 'VCG-' + new Date().getFullYear() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
}
function getOrders() { return VCG.get('orders', []); }
function addOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  VCG.set('orders', orders);
  return order;
}
function findOrderById(id) { return getOrders().find(o => o.id === id); }
function findOrderByEmailAndId(email, id) { return getOrders().find(o => o.id === id && o.email === email); }
function updateOrderStatus(id, status) {
  const orders = getOrders();
  const order = orders.find(o => o.id === id);
  if (order) { order.status = status; VCG.set('orders', orders); return true; }
  return false;
}

// ========== SUBSCRIBERS ==========
function getSubscribers() { return VCG.get('subscribers', []); }
function addSubscriber(email, name) {
  const subs = getSubscribers();
  if (!subs.find(s => s.email === email)) {
    subs.push({ email, name, isActive: true, token: Math.random().toString(36).substr(2, 16), createdAt: new Date().toISOString() });
    VCG.set('subscribers', subs);
    return true;
  }
  return false;
}