
import React from 'react';
import { Villa, MenuItem, ActivityCategory, Offer, Experience, Package, Translation, Review } from './types';

export const TRANSLATIONS: Translation = {
  heroHeadline: {
    id: 'KEMBALI KE ALAM YANG SESUNGGUHNYA',
    en: 'CLAIM YOUR MOUNTAIN SANCTUARY',
    zh: '重返真正的自然',
    de: 'IHR ZUFLUCHTSORT IN DEN BERGEN'
  },
  heroSub: {
    id: 'Hanya 2 Jam dari Jakarta. Sebuah pelarian eksklusif di Gunung Puntang.',
    en: 'Only 2 Hours from Jakarta. An exclusive escape in Mount Puntang.',
    zh: '距雅加达仅2小时车程。 蓬唐山的独家度假胜地。',
    de: 'Nur 2 Stunden von Jakarta entfernt. Ein exklusiver Rückzugsort am Mount Puntang.'
  },
  introText: {
    id: 'Setiap sudut Bougenville dirancang untuk mendekatkan Anda dengan alam, keluarga, dan diri sendiri. Temukan kemewahan autentik di tengah hutan pinus purba.',
    en: 'Every corner of Bougenville is designed to bring you closer to nature, family, and yourself. Discover authentic luxury amidst the ancient pine forest.',
    zh: 'Bougenville 的每个角落都旨在让您更接近自然、家庭和自己。 在古老的松林中发现真正的奢华。',
    de: 'Jeder Winkel von Bougenville ist darauf ausgelegt, Sie der Natur, Ihrer Familie und sich selbst näher zu bringen. Entdecken Sie authentischen Luxus inmitten des alten Kiefernwaldes.'
  },
  historyTitle: {
    id: 'Warisan Nagara Puntang',
    en: 'The Heritage of Nagara Puntang',
    zh: '纳加拉蓬唐的遗产',
    de: 'Das Erbe von Nagara Puntang'
  },
  historyDesc: {
    id: 'Berabad lalu, kerajaan "Nagara Puntang" berdiri megah di tanah ini. Kami menjaga semangat tersebut melalui arsitektur yang menghormati alam dan keramahtamahan Sunda yang tulus.',
    en: 'Centuries ago, the "Nagara Puntang" kingdom stood majestically on this land. We preserve that spirit through nature-respecting architecture and genuine Sundanese hospitality.',
    zh: '几个世纪前，“纳加拉蓬唐”王国在这片土地上巍然屹立。 我们通过尊重自然的建筑和真诚的巽他热情好客来保持这种精神。',
    de: 'Vor Jahrhunderten stand das Königreich "Nagara Puntang" majestätisch auf diesem Land. Wir bewahren diesen Geist durch naturverbundene Architektur und echte sundanesische Gastfreundschaft.'
  },
  ctaBook: {
    id: 'RESERVASI SEKARANG',
    en: 'RESERVE YOUR STAY',
    zh: '立即预订',
    de: 'JETZT BUCHEN'
  },
  ctaChat: {
    id: 'CHAT CONCIERGE',
    en: 'CHAT CONCIERGE',
    zh: '礼宾聊天',
    de: 'CONCIERGE CHAT'
  },
  villasTitle: {
    id: 'Koleksi Villa Privat',
    en: 'Private Villa Collection',
    zh: '私人别墅系列',
    de: 'Private Villenkollektion'
  },
  villasSub: {
    id: 'Ruang pribadi untuk menciptakan momen berkesan',
    en: 'Private spaces to create memorable moments',
    zh: '创造难忘时刻的私人空间',
    de: 'Private Räume für unvergessliche Momente'
  },
  experiencesTitle: {
    id: 'Curated Mountain Experiences',
    en: 'Curated Mountain Experiences',
    zh: '精心策划的山地体验',
    de: 'Kuratierte Bergerlebnisse'
  },
  startFrom: {
    id: 'Mulai dari',
    en: 'Starts from',
    zh: '起价',
    de: 'Ab'
  },
  perNight: {
    id: '/malam',
    en: '/night',
    zh: '/晚',
    de: '/Nacht'
  },
  bookNow: {
    id: 'Book Now',
    en: 'Book Now',
    zh: '立即预订',
    de: 'Jetzt buchen'
  },
  learnMore: {
    id: 'Discover More',
    en: 'Discover More',
    zh: '了解更多',
    de: 'Mehr entdecken'
  }
};

// ===================================================================
// LUXURY VILLAS - FOREST HOUSE & MOOI LAKE
// ===================================================================

export const FOREST_HOUSE_VILLAS: Villa[] = [
  {
    id: 'forest-house',
    name: 'Forest House',
    cluster: 'Forest House Puntang',
    capacity: '13-16 orang',
    bedrooms: 5,
    area: 436.00,
    toilets: 4,
    price: 25000000,
    priceWeekday: 25000000,
    priceWeekend: 30000000,
    priceHighSeason: 35000000,
    category: 'luxury',
    badge: 'Most Exclusive',
    features: ['Private Waterfall', 'Garden & Pond', 'Gazebo', 'Full Board Meals', 'Premium Service'],
    image: '/images/fh-hero.webp',
    bedConfiguration: [
      { room: 1, beds: '1 king bed (180x200 cm)' },
      { room: 2, beds: '1 king bed (180x200 cm)' },
      { room: 3, beds: '1 queen bed (160x200 cm)' },
      { room: 4, beds: '1 queen bed (160x200 cm)' },
      { room: 5, beds: '1 queen bed (160x200 cm) + 1 trundle bed (2 orang)' }
    ],
    facilities: {
      room: [
        { id: '1 Ruang keluarga', en: '1 Family room', zh: '1间家庭房', de: '1 Familienzimmer' },
        { id: '1 Ruang tamu', en: '1 Living room', zh: '1间客厅', de: '1 Wohnzimmer' },
        { id: '2 Ruang makan (indoor & outdoor)', en: '2 Dining areas (indoor & outdoor)', zh: '2个用餐区（室内和室外）', de: '2 Essbereiche (innen & außen)' },
        { id: '1 Dapur bersih', en: '1 Clean kitchen', zh: '1间干净厨房', de: '1 Saubere Küche' },
        { id: '1 Teras luar di kamar utama', en: '1 Outdoor terrace in master bedroom', zh: '主卧1个户外露台', de: '1 Außenterrasse im Hauptschlafzimmer' },
        { id: '1 Teras luar sisi sungai', en: '1 Riverside outdoor terrace', zh: '1个河畔户外露台', de: '1 Außenterrasse am Flussufer' },
        { id: '1 Gazebo', en: '1 Gazebo', zh: '1个凉亭', de: '1 Gazebo' }
      ],
      amenities: [
        { id: '1 Air terjun & taman', en: '1 Waterfall & garden', zh: '1个瀑布和花园', de: '1 Wasserfall & Garten' },
        { id: '1 Kolam ikan', en: '1 Fish pond', zh: '1个鱼塘', de: '1 Fischteich' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Snacks premium', en: 'Premium snacks', zh: '优质小吃', de: 'Premium-Snacks' }
      ],
      natural: [
        { id: 'Air terjun & taman privat', en: 'Private waterfall & garden', zh: '私人瀑布和花园', de: 'Privater Wasserfall & Garten' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz' },
        { id: 'Trekking/ hiking', en: 'Trekking/ hiking', zh: '徒步旅行', de: 'Trekking / Wandern' },
        { id: '2 kolam renang air dingin (umum)', en: '2 Cold water swimming pools (public)', zh: '2个冷水游泳池（公共）', de: '2 Kaltwasser-Schwimmbäder (öffentlich)' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung (melalui Tol Soroja dan keluar di Exit Tol Soreang, kemudian mengambil arah Banjaran-Pangalengan).', en: 'Estimated travel time about 1-2 hours from Bandung city center (via Soroja Toll and exit at Soreang Toll Exit, then take direction to Banjaran-Pangalengan).', zh: '预计从万隆市中心出发约需1-2小时（经Soroja收费站，在Soreang收费站出口下，然后往Banjaran-Pangalengan方向行驶）。', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung (über Soroja-Maut und Ausfahrt Soreang, dann Richtung Banjaran-Pangalengan).' },
        { id: 'Harga belum termasuk Tax 10%', en: 'Price excludes 10% Tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa privat super mewah dengan pemandangan hutan langsung. Kapasitas 13-16 orang dengan fasilitas air terjun & taman privat.',
      en: 'Super luxurious private villa with direct forest views. Capacity for 13-16 people with private waterfall & garden facilities.',
      zh: '超豪华私人别墅，可直接欣赏森林美景。 可容纳13-16人，配有私人瀑布和花园设施。',
      de: 'Super luxuriöse Privatvilla mit direktem Waldblick. Kapazität für 13-16 Personen mit privatem Wasserfall & Gartenanlagen.'
    },
    longDescription: {
      id: 'Forest House Puntang, villa privat super mewah dengan pemandangan hutan langsung yang berada di dalam kawasan Taman Wisata Bougenville. Luas villa 450 m2. Termasuk sarapan, makan siang & malam, snacks premium.',
      en: 'Forest House Puntang, a super luxurious private villa with direct forest views located within the Taman Wisata Bougenville area. Villa area 450 m2. Includes breakfast, lunch & dinner, premium snacks.',
      zh: 'Forest House Puntang，位于 Taman Wisata Bougenville 区域内的超豪华私人别墅，可直接欣赏森林美景。 别墅面积450平方米。 包括早餐、午餐和晚餐、优质小吃。',
      de: 'Forest House Puntang, eine super luxuriöse Privatvilla mit direktem Waldblick im Gebiet Taman Wisata Bougenville. Villengröße 450 m2. Inklusive Frühstück, Mittag- & Abendessen, Premium-Snacks.'
    }
  }
];

export const MOOI_LAKE_VILLAS: Villa[] = [
  {
    id: 'mooi-lake',
    name: 'Mooi Lake House',
    cluster: 'Mooi Lake House Puntang',
    capacity: '9 orang',
    bedrooms: 3,
    area: 116.80,
    toilets: 2,
    price: 12500000,
    priceWeekday: 12500000,
    priceWeekend: 15000000,
    priceHighSeason: 17500000,
    category: 'luxury',
    badge: 'Lakeside Living',
    features: ['Private Lake & Boat', 'Full Board Meals', 'Lakeside Terrace'],
    image: '/images/mlh-hero.webp',
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (king bed)' },
      { room: 2, beds: 'Kids bedroom 1 (3 single bed)' },
      { room: 3, beds: 'Kids bedroom 2 (4 single bed)' }
    ],
    facilities: {
      room: [
        { id: '1 Ruang keluarga', en: '1 Living room', zh: '1客厅', de: '1 Wohnzimmer' },
        { id: '1 Dapur bersih', en: '1 Clean kitchen', zh: '1干净的厨房', de: '1 Saubere Küche' },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse' }
      ],
      amenities: [
        { id: '2 Kamar mandi & toilet', en: '2 Bathrooms & toilets', zh: '2间浴室和卫生间', de: '2 Badezimmer & Toiletten' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Cemilan premium', en: 'Premium snacks', zh: '优质小吃', de: 'Premium-Snacks' }
      ],
      natural: [
        { id: 'Danau & perahu privat', en: 'Private lake & boat', zh: '私人湖泊和船', de: 'Privater See & Boot' },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz' },
        { id: 'Trekking/ hiking', en: 'Trekking/hiking', zh: '徒步旅行', de: 'Trekking/Wandern' },
        { id: '2 kolam renang air dingin (umum)', en: '2 Cold water swimming pools (public)', zh: '2个冷水游泳池（公共）', de: '2 Kaltwasser-Schwimmbäder (öffentlich)' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Taman bunga', en: 'Flower garden', zh: '花园', de: 'Blumengarten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung (melalui Tol Soroja dan keluar di Exit Tol Soreang, kemudian mengambil arah Banjaran-Pangalengan).', en: 'Estimated travel time about 1-2 hours from Bandung city center (via Soroja Toll and exit at Soreang Toll Exit, then take direction to Banjaran-Pangalengan).', zh: '从万隆市中心出发约1-2小时（通过Soroja收费站，在Soreang收费站出口下，然后前往Banjaran-Pangalengan方向）。', de: 'Geschätzte Fahrzeit ca. 1-2 Stunden vom Stadtzentrum Bandung (über Soroja Maut und Ausfahrt bei Soreang Maut-Ausfahrt, dann Richtung Banjaran-Pangalengan).' },
        { id: 'Harga belum termasuk Tax 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa mewah privat dengan pemandangan danau langsung. Kapasitas untuk 9 orang, sudah termasuk fasilitas menginap lengkap.',
      en: 'Luxurious private villa with direct lake views. Capacity for 9 people, includes complete stay facilities.',
      zh: '豪华私人别墅，可直接欣赏湖景。 可容纳9人，包括完整的住宿设施。',
      de: 'Luxuriöse Privatvilla mit direktem Seeblick. Kapazität für 9 Personen, inklusive kompletter Aufenthaltsmöglichkeiten.'
    },
    longDescription: {
      id: 'Villa mewah privat dengan pemandangan danau langsung, berada di dalam kawasan Taman Wisata Bougenville. Kapasitas untuk 9 orang, sudah termasuk fasilitas menginap lengkap diantaranya sarapan, makan siang dan makan malam plus cemilan premium.',
      en: 'Luxurious private villa with direct lake views, located within the Taman Wisata Bougenville area. Capacity for 9 people, includes complete stay facilities including breakfast, lunch and dinner plus premium snacks.',
      zh: '豪华私人别墅，可直接欣赏湖景，位于 Taman Wisata Bougenville 区域内。 可容纳9人，包括完整的住宿设施，包括早餐、午餐和晚餐以及优质小吃。',
      de: 'Luxuriöse Privatvilla mit direktem Seeblick im Gebiet Taman Wisata Bougenville. Kapazität für 9 Personen, inklusive kompletter Aufenthaltsmöglichkeiten wie Frühstück, Mittag- und Abendessen sowie Premium-Snacks.'
    }
  }
];

// ===================================================================
// DANDENONG VILLAS (American Farmhouse)
// ===================================================================

export const DANDENONG_VILLAS: Villa[] = [
  {
    id: 'emerald-02',
    name: 'Emerald 02 (Unit Atas)',
    cluster: 'Dandenong Villas',
    capacity: '7 orang',
    bedrooms: 2,
    area: 134.67,
    toilets: 2,
    price: 8500000,
    priceWeekday: 8500000,
    priceWeekend: 9500000,
    priceHighSeason: 11000000,
    category: 'luxury',
    features: ['American Farmhouse', 'Mountain View', 'Balcony'],
    image: '/images/emerald-atas-hero.webp',
    bedConfiguration: [
      { room: 1, beds: '1 tempat tidur King (180 x 200 cm) dan 1 tempat tidur Single (90 x 200 cm)' },
      { room: 2, beds: '2 tempat tidur Queen (160 x 200 cm) masing-masing' }
    ],
    facilities: {
      room: [
        { id: '2 kamar tidur', en: '2 Bedrooms', zh: '2间卧室', de: '2 Schlafzimmer' },
        { id: '2 toilet', en: '2 Toilets', zh: '2个卫生间', de: '2 Toiletten' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle' },
        { id: 'Mesin kopi', en: 'Coffee machine', zh: '咖啡机', de: 'Kaffeemaschine' },
        { id: 'Kompor listrik', en: 'Electric stove', zh: '电炉', de: 'Elektroherd' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruits', en: 'Welcome fruits', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser' },
        { id: 'Kopi kapsul, teh, dan gula', en: 'Capsule coffee, tea, and sugar', zh: '胶囊咖啡，茶和糖', de: 'Kapselkaffee, Tee und Zucker' }
      ],
      natural: [
        { id: 'Playground', en: 'Playground', zh: '游乐场', de: 'Spielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: '2 kolam renang umum', en: '2 Public swimming pools', zh: '2个公共游泳池', de: '2 Öffentliche Schwimmbäder' },
        { id: 'Area bermain di sungai', en: 'River play area', zh: '河边游乐区', de: 'Flussspielbereich' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak menyediakan dan/atau menggunakan ekstra bed', en: 'Does not provide and/or use extra bed', zh: '不提供和/或使用加床', de: 'Kein Zustellbett verfügbar' },
        { id: 'Tidak dapat menampung kapasitas lebih dari 7 orang', en: 'Cannot accommodate more than 7 people', zh: '无法容纳超过7人', de: 'Kann nicht mehr als 7 Personen beherbergen' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa bergaya American Farmhouse dengan pemandangan pegunungan yang menakjubkan. Unit atas dengan balkon luas.',
      en: 'American Farmhouse style villa with stunning mountain views. Upper unit with spacious balcony.',
      zh: '美式农舍风格别墅，享有迷人的山景。 上层单元设有宽敞的阳台。',
      de: 'Villa im amerikanischen Farmhouse-Stil mit atemberaubendem Bergblick. Obere Einheit mit großem Balkon.'
    }
  },
  {
    id: 'emerald-01',
    name: 'Emerald 01 (Unit Bawah)',
    cluster: 'Dandenong Villas',
    capacity: '7 orang',
    bedrooms: 2,
    area: 135.33,
    toilets: 2,
    price: 8750000,
    priceWeekday: 8750000,
    priceWeekend: 10000000,
    priceHighSeason: 12000000,
    category: 'luxury',
    features: ['American Farmhouse', 'Garden Access', 'Patio'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600',
    bedConfiguration: [
      { room: 1, beds: '1 tempat tidur King (180 x 200 cm) dan 1 tempat tidur Single (90 x 200 cm)' },
      { room: 2, beds: '2 tempat tidur Queen (160 x 200 cm) masing-masing' }
    ],
    facilities: {
      room: [
        { id: '2 kamar tidur', en: '2 Bedrooms', zh: '2间卧室', de: '2 Schlafzimmer' },
        { id: '2 toilet', en: '2 Toilets', zh: '2个卫生间', de: '2 Toiletten' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle' },
        { id: 'Mesin kopi', en: 'Coffee machine', zh: '咖啡机', de: 'Kaffeemaschine' },
        { id: 'Kompor listrik', en: 'Electric stove', zh: '电炉', de: 'Elektroherd' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruits', en: 'Welcome fruits', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser' },
        { id: 'Kopi kapsul, teh, dan gula', en: 'Capsule coffee, tea, and sugar', zh: '胶囊咖啡，茶和糖', de: 'Kapselkaffee, Tee und Zucker' }
      ],
      natural: [
        { id: 'Playground', en: 'Playground', zh: '游乐场', de: 'Spielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: '2 kolam renang umum', en: '2 Public swimming pools', zh: '2个公共游泳池', de: '2 Öffentliche Schwimmbäder' },
        { id: 'Area bermain di sungai', en: 'River play area', zh: '河边游乐区', de: 'Flussspielbereich' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak menyediakan dan/atau menggunakan ekstra bed', en: 'Does not provide and/or use extra bed', zh: '不提供和/或使用加床', de: 'Kein Zustellbett verfügbar' },
        { id: 'Tidak dapat menampung kapasitas lebih dari 7 orang', en: 'Cannot accommodate more than 7 people', zh: '无法容纳超过7人', de: 'Kann nicht mehr als 7 Personen beherbergen' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa bergaya American Farmhouse dengan akses langsung ke taman. Unit bawah yang nyaman untuk keluarga.',
      en: 'American Farmhouse style villa with direct garden access. Comfortable lower unit for families.',
      zh: '美式农舍风格别墅，可直接通往花园。 舒适的下层单元，适合家庭入住。',
      de: 'Villa im amerikanischen Farmhouse-Stil mit direktem Gartenzugang. Komfortable untere Einheit für Familien.'
    }
  },
  {
    id: 'olinda',
    name: 'Olinda Villa',
    cluster: 'Dandenong Villas',
    capacity: '12 orang',
    bedrooms: 3,
    area: 145.40,
    toilets: 2,
    price: 15000000,
    priceWeekday: 15000000,
    priceWeekend: 17500000,
    priceHighSeason: 20000000,
    category: 'luxury',
    features: ['Spacious Living', 'Large Garden', 'Jacuzzi'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600',
    bedConfiguration: [
      { room: 1, beds: '1 king bed (180 x 200)' },
      { room: 2, beds: '2 queen bed (160 x 200)' },
      { room: 3, beds: '2 queen bed (160 x 200) & 2 single bed (90 x 200)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer' },
        { id: 'Meja makan', en: 'Dining table', zh: '餐桌', de: 'Esstisch' },
        { id: 'Dapur', en: 'Kitchen', zh: '厨房', de: 'Küche' },
        { id: '3 Kamar tidur', en: '3 Bedrooms', zh: '3间卧室', de: '3 Schlafzimmer' },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse' }
      ],
      amenities: [
        { id: '2 Toilet & kamar mandi', en: '2 Toilets & bathrooms', zh: '2个卫生间和浴室', de: '2 Toiletten & Badezimmer' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN' },
        { id: 'Jacuzzi', en: 'Jacuzzi', zh: '按摩浴缸', de: 'Whirlpool' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle' },
        { id: 'ketel listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher' },
        { id: 'kompor listrik', en: 'Electric stove', zh: '电炉', de: 'Elektroherd' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Kopi, teh, gula, creamer', en: 'Coffee, tea, sugar, creamer', zh: '咖啡，茶，糖，奶精', de: 'Kaffee, Tee, Zucker, Sahne' },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser' }
      ],
      natural: [
        { id: 'Jacuzzi private', en: 'Private Jacuzzi', zh: '私人按摩浴缸', de: 'Privater Whirlpool' },
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 150 m dari area parkir)', en: 'Stairs access (about 150 m from parking area)', zh: '楼梯通道（距停车场约150米）', de: 'Treppenzugang (ca. 150 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '预计从万隆市中心出发约需1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa luas dengan kapasitas besar dan Jacuzzi pribadi. Cocok untuk gathering keluarga besar.',
      en: 'Spacious villa with large capacity and private Jacuzzi. Perfect for large family gatherings.',
      zh: '宽敞的别墅，容量大，设有私人按摩浴缸。 非常适合大型家庭聚会。',
      de: 'Geräumige Villa mit großer Kapazität und privatem Jacuzzi. Perfekt für große Familientreffen.'
    }
  },
  {
    id: 'selby',
    name: 'Selby Villa',
    cluster: 'Dandenong Villas',
    capacity: '4 orang',
    bedrooms: 2,
    area: 76.45,
    toilets: 1,
    price: 5000000,
    priceWeekday: 5000000,
    priceWeekend: 6000000,
    priceHighSeason: 7500000,
    category: 'luxury',
    features: ['Cozy', 'Private', 'Garden View'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600',
    bedConfiguration: [
      { room: 1, beds: '1 king bed 180 x 200' },
      { room: 2, beds: '1 queen bed 160 x 200' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Dapur', en: 'Kitchen', zh: '厨房', de: 'Küche' },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '卫生间和浴室', de: 'Toilette & Badezimmer' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN' },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank' },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle' },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Kopi, gula, teh, creamer', en: 'Coffee, sugar, tea, creamer', zh: '咖啡，糖，茶，奶精', de: 'Kaffee, Zucker, Tee, Sahne' },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 150 m dari area parkir)', en: 'Stairs access (about 150 m from parking area)', zh: '楼梯通道（距停车场约150米）', de: 'Treppenzugang (ca. 150 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '预计从万隆市中心出发约需1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa cozy untuk keluarga kecil. Suasana tenang dengan pemandangan taman.',
      en: 'Cozy villa for small families. Quiet atmosphere with garden views.',
      zh: '适合小家庭的舒适别墅。 环境幽静，享有花园美景。',
      de: 'Gemütliche Villa für kleine Familien. Ruhige Atmosphäre mit Gartenblick.'
    }
  }
];

// ===================================================================
// PROVINCIAL VILLAS (French Countryside)
// ===================================================================

export const PROVINCIAL_VILLAS: Villa[] = [
  {
    id: 'villa-gordes',
    name: 'Villa Gordes (Hijau)',
    cluster: 'Provincial Villas',
    capacity: '4 orang',
    bedrooms: 2,
    area: 76.96,
    toilets: 1,
    price: 5000000,
    priceWeekday: 5000000,
    priceWeekend: 6000000,
    priceHighSeason: 7500000,
    category: 'luxury',
    color: 'Hijau',
    features: ['French Style', 'Garden View', 'Charming'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600',
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm' },
      { room: 2, beds: 'queen bed 160x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '卫生间和浴室', de: 'Toilette & Badezimmer' },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN' },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '矿泉水和饮水机', de: 'Mineralwasser & Spender' },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '咖啡，奶精，糖，茶', de: 'Kaffee, Sahne, Zucker, Tee' },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '胶囊咖啡', de: 'Kapselkaffee' },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '咖啡机', de: 'Kaffeemaschine' },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Taman', en: 'Garden', zh: '花园', de: 'Garten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '预计从万隆市中心出发约需1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan sentuhan pedesaan Prancis. Nuansa hijau yang menenangkan.',
      en: 'Villa with a touch of French countryside. Soothing green nuances.',
      zh: '带有法国乡村气息的别墅。 舒缓的绿色细微差别。',
      de: 'Villa mit einem Hauch von französischer Landschaft. Beruhigende grüne Nuancen.'
    }
  },
  {
    id: 'villa-roussillon',
    name: 'Villa Roussillon (Abu-abu)',
    cluster: 'Provincial Villas',
    capacity: '5 orang',
    bedrooms: 2,
    area: 102.09,
    toilets: 1,
    price: 6500000,
    priceWeekday: 6500000,
    priceWeekend: 7500000,
    priceHighSeason: 9000000,
    category: 'luxury',
    color: 'Abu-abu',
    features: ['French Style', 'Elegant', 'Garden View'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600',
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm dan single bed 90x200cm' },
      { room: 2, beds: 'queen bed 160x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '卫生间和浴室', de: 'Toilette & Badezimmer' },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN' },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '矿泉水和饮水机', de: 'Mineralwasser & Spender' },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '咖啡，奶精，糖，茶', de: 'Kaffee, Sahne, Zucker, Tee' },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '胶囊咖啡', de: 'Kapselkaffee' },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '咖啡机', de: 'Kaffeemaschine' },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Taman', en: 'Garden', zh: '花园', de: 'Garten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '预计从万隆市中心出发约需1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan nuansa abu-abu klasik. Cocok untuk keluarga kecil.',
      en: 'Elegant villa with classic gray nuances. Suitable for small families.',
      zh: '优雅的别墅，带有经典的灰色细微差别。 适合小家庭。',
      de: 'Elegante Villa mit klassischen grauen Nuancen. Geeignet für kleine Familien.'
    }
  },
  {
    id: 'villa-lourmarin',
    name: 'Villa Lourmarin (Coklat)',
    cluster: 'Provincial Villas',
    capacity: '6 orang',
    bedrooms: 2,
    area: 106.24,
    toilets: 1,
    price: 7500000,
    priceWeekday: 7500000,
    priceWeekend: 9000000,
    priceHighSeason: 11000000,
    category: 'luxury',
    color: 'Coklat',
    features: ['French Style', 'Warm', 'Garden View'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600',
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm dan single bed 90x200 cm' },
      { room: 2, beds: 'queen bed 160x200 cm dan single bed 90x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer' },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '卫生间和浴室', de: 'Toilette & Badezimmer' },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen' },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN' },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '矿泉水和饮水机', de: 'Mineralwasser & Spender' },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '咖啡，奶精，糖，茶', de: 'Kaffee, Sahne, Zucker, Tee' },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '胶囊咖啡', de: 'Kapselkaffee' },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '咖啡机', de: 'Kaffeemaschine' },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta' },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Taman', en: 'Garden', zh: '花园', de: 'Garten' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)' },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '预计从万隆市中心出发约需1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa hangat dengan nuansa coklat kayu. Kapasitas lebih besar untuk kenyamanan ekstra.',
      en: 'Warm villa with wood brown nuances. Larger capacity for extra comfort.',
      zh: '温暖的别墅，带有木棕色细微差别。 容量更大，更加舒适。',
      de: 'Warme Villa mit holzbraunen Nuancen. Größere Kapazität für zusätzlichen Komfort.'
    }
  }
];

// Couple Retreat
export const RIVERSIDE_VILLAS: Villa[] = [
  {
    id: 'riverside-hana',
    name: 'Villa Hana',
    cluster: 'Riverside Villas',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 129.5,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Elegant Grey Interior'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800',
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '家庭房', de: 'Familienzimmer' },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '厨房和餐厅', de: 'Küche und Esszimmer' },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '别墅内卫生间和浴室', de: 'Toilette & Badezimmer in der Villa' },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '别墅大堂卫生间和浴室', de: 'Toilette & Badezimmer in der Villenlobby' },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '徒步旅行', de: 'Trekking / Wandern' },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior abu-abu bernuansa modern yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with modern grey interior located right next to the Cigeureuh river.',
      zh: '优雅的别墅，拥有现代灰色内饰，位于 Cigeureuh 河畔。',
      de: 'Elegante Villa mit modernem grauem Interieur direkt am Fluss Cigeureuh.'
    }
  },
  {
    id: 'riverside-fiore',
    name: 'Villa Fiore',
    cluster: 'Riverside Villas',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 129.5,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Fresh Green Interior'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '家庭房', de: 'Familienzimmer' },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '厨房和餐厅', de: 'Küche und Esszimmer' },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '别墅内卫生间和浴室', de: 'Toilette & Badezimmer in der Villa' },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '别墅大堂卫生间和浴室', de: 'Toilette & Badezimmer in der Villenlobby' },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '徒步旅行', de: 'Trekking / Wandern' },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior hijau bernuansa segar dan sejuk yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with fresh green interior located right next to the Cigeureuh river.',
      zh: '优雅的别墅，拥有清新的绿色内饰，位于 Cigeureuh 河畔。',
      de: 'Elegante Villa mit frischem grünem Interieur direkt am Fluss Cigeureuh.'
    }
  },
  {
    id: 'riverside-blomst',
    name: 'Villa Blomst',
    cluster: 'Riverside Villas',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 240.4,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Warm Brown Interior'],
    image: 'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?q=80&w=800',
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '家庭房', de: 'Familienzimmer' },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '厨房和餐厅', de: 'Küche und Esszimmer' },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '别墅内卫生间和浴室', de: 'Toilette & Badezimmer in der Villa' },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '别墅大堂卫生间和浴室', de: 'Toilette & Badezimmer in der Villenlobby' },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '徒步旅行', de: 'Trekking / Wandern' },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior coklat bernuansa hangat yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with warm brown interior located right next to the Cigeureuh river.',
      zh: '优雅的别墅，拥有温暖的棕色内饰，位于 Cigeureuh 河畔。',
      de: 'Elegante Villa mit warmem braunem Interieur direkt am Fluss Cigeureuh.'
    }
  }
];

export const KAMPUH_BECIK_VILLAS: Villa[] = [
  // Executive Type Units
  {
    id: 'kampuh-becik-abutilon',
    name: 'Abutilon',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=800',
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom.',
      zh: '行政型小木屋别墅，拥有自然氛围。 配备适合拍照的半户外浴室。',
      de: 'Executive-Kabinen-Villa mit natürlicher Atmosphäre. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-agaphantus',
    name: 'Agaphantus',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'Twin Bed'],
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=800',
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom.',
      zh: '行政型小木屋别墅，拥有自然氛围。 配备适合拍照的半户外浴室。',
      de: 'Executive-Kabinen-Villa mit natürlicher Atmosphäre. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-allamanda',
    name: 'Allamanda',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=800',
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom.',
      zh: '行政型小木屋别墅，拥有自然氛围。 配备适合拍照的半户外浴室。',
      de: 'Executive-Kabinen-Villa mit natürlicher Atmosphäre. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-azalea',
    name: 'Azalea',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'Twin Bed'],
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=800',
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom.',
      zh: '行政型小木屋别墅，拥有自然氛围。 配备适合拍照的半户外浴室。',
      de: 'Executive-Kabinen-Villa mit natürlicher Atmosphäre. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },
  {
    id: 'kampuh-becik-buddleja',
    name: 'Buddleja',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=800',
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom.',
      zh: '行政型小木屋别墅，拥有自然氛围。 配备适合拍照的半户外浴室。',
      de: 'Executive-Kabinen-Villa mit natürlicher Atmosphäre. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.'
    }
  },

  // Deluxe Type Units
  {
    id: 'kampuh-becik-calathea',
    name: 'Calathea',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Deluxe-Kabinen-Villa mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-camelia',
    name: 'Camelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-jacaranda',
    name: 'Jacaranda',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-kigelia',
    name: 'Kigelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-lophantera',
    name: 'Lophantera',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-monstera',
    name: 'Monstera',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-philodendron',
    name: 'Philodendron',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  },
  {
    id: 'kampuh-becik-russelia',
    name: 'Russelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800',
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '卧室', de: 'Schlafzimmer' },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon' }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '半户外浴室和卫生间', de: 'Halb-offenes Badezimmer & Toilette' },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen' },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen' },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '迎宾水果', de: 'Begrüßungsfrüchte' },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '费列罗巧克力', de: 'Ferrero Rocher Schokolade' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo' },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '楼梯通道。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '舒适的豪华型小木屋别墅，设有放松阳台。',
      de: 'Gemütliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.'
    }
  }
];

// Log Home
export const LOG_HOME_VILLAS: Villa[] = [
  {
    id: 'villa-campaka',
    name: 'Villa Campaka',
    cluster: 'Nawa Bumi Villas',
    capacity: '12 Pax',
    bedrooms: 4,
    area: 146.40,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7500000,
    priceHighSeason: 9000000,
    features: ['Ruang Keluarga', 'Dapur Lengkap', 'Dekat Mushola'],
    image: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?q=80&w=800',
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: '1 king bed' },
      { room: 2, beds: '2 queen bed' },
      { room: 3, beds: '6 single bed' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Living room', zh: '客厅', de: 'Wohnzimmer' },
        { id: 'Dapur bersih dengan alat masak dan alat makan standar', en: 'Clean kitchen with standard cooking and dining utensils', zh: '配有标准炊具和餐具的干净厨房', de: 'Saubere Küche mit Standard-Koch- und Essgeschirr' },
        { id: 'Balkon/ teras', en: 'Balcony/terrace', zh: '阳台/露台', de: 'Balkon/Terrasse' },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆柴火', de: 'Lagerfeuerstelle & 1 Bündel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Warmwasserbereiter' },
        { id: 'TV', en: 'TV', zh: '电视', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: 'Wifi', de: 'WLAN' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder' },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspielbereich' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '码头', de: 'Anlegestelle' },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spots', zh: '自然摄影点', de: 'Natürliche Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '禁止携带宠物、扬声器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '禁止携带外食。', de: 'Speisen von außerhalb sind nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 4 kamar tidur dan dapur bersih. Akses paling dekat dengan kolam renang atas dan mushola umum.',
      en: 'Villa with 4 bedrooms and clean kitchen. Closest access to upper swimming pool and public prayer room.',
      zh: '设有4间卧室和干净厨房的别墅。 距上层游泳池和公共祈祷室最近.',
      de: 'Villa mit 4 Schlafzimmern und sauberer Küche. Nächster Zugang zum oberen Schwimmbad und öffentlichen Gebetsraum.'
    }
  },
  {
    id: 'villa-suren',
    name: 'Villa Suren',
    cluster: 'Nawa Bumi Villas',
    capacity: '8 Pax',
    bedrooms: 2,
    area: 61.28,
    toilets: 1,
    price: 2750000,
    priceWeekday: 2750000,
    priceWeekend: 3250000,
    priceHighSeason: 3900000,
    features: ['Lapangan Luas', 'Api Unggun', 'Family Friendly'],
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800',
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: 'Total 8 single bed di 2 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '阳台/露台', de: 'Balkon/Terrasse' },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆柴火', de: 'Lagerfeuerplatz & 1 Bündel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'TV', en: 'TV', zh: '电视', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'W-lan' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2个冷水池', de: '2 Kaltwasserpools' },
        { id: 'Water playing', en: 'Water playing', zh: '玩水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '码头', de: 'Pier' },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '自然拍照点', de: 'Natur-Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht erlaubt.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '不允许携带外食。', de: 'Das Mitbringen von Speisen von außerhalb ist nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '道路需要上下楼梯。', de: 'Der Weg beinhaltet Treppensteigen.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税费', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 2 kamar tidur dan lapangan terbuka luas. Spot api unggun tersedia.',
      en: 'Villa with 2 bedrooms and spacious open field. Bonfire spot available.',
      zh: '设有2间卧室和宽敞开放空间的别墅。 提供篝火点。',
      de: 'Villa mit 2 Schlafzimmern und geräumigem offenem Feld. Lagerfeuerplatz vorhanden.'
    }
  },
  {
    id: 'villa-pinus',
    name: 'Villa Pinus',
    cluster: 'Nawa Bumi Villas',
    capacity: '12 Pax',
    bedrooms: 2,
    area: 88.92,
    toilets: 1,
    price: 4250000,
    priceWeekday: 4250000,
    priceWeekend: 4750000,
    priceHighSeason: 5750000,
    features: ['Lapangan Luas', 'Api Unggun', 'Dekat Mushola'],
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800',
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: 'Total 12 single bed di 2 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '阳台/露台', de: 'Balkon/Terrasse' },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆柴火', de: 'Lagerfeuerplatz & 1 Bündel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'TV', en: 'TV', zh: '电视', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'W-lan' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2个冷水池', de: '2 Kaltwasserpools' },
        { id: 'Water playing', en: 'Water playing', zh: '玩水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '码头', de: 'Pier' },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '自然拍照点', de: 'Natur-Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht erlaubt.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '不允许携带外食。', de: 'Das Mitbringen von Speisen von außerhalb ist nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '道路需要上下楼梯。', de: 'Der Weg beinhaltet Treppensteigen.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税费', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 2 kamar tidur dan lapangan terbuka. Dekat dengan mushola umum.',
      en: 'Villa with 2 bedrooms and open field. Close to public prayer room.',
      zh: '设有2间卧室和开放空间的别墅。 靠近公共祈祷室。',
      de: 'Villa mit 2 Schlafzimmern und offenem Feld. In der Nähe des öffentlichen Gebetsraums.'
    }
  },
  {
    id: 'villa-puspa',
    name: 'Villa Puspa',
    cluster: 'Nawa Bumi Villas',
    capacity: '15 Pax',
    bedrooms: 3,
    area: 152.61,
    toilets: 2,
    price: 5950000,
    priceWeekday: 5950000,
    priceWeekend: 6500000,
    priceHighSeason: 7950000,
    features: ['Dapur Lengkap', 'Lapangan Luas', 'Dekat Skywalk'],
    image: 'https://images.unsplash.com/photo-1621618304659-2b2f8a2b2c7c?q=80&w=800',
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: '1 king bed dan 13 single bed di 3 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Dapur bersih dengan alat masak dan alat makan standar', en: 'Clean kitchen with standard cooking and dining utensils', zh: '带标准烹饪和用餐用具的干净厨房', de: 'Saubere Küche mit Standard-Koch- und Essgeschirr' },
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '阳台/露台', de: 'Balkon/Terrasse' },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆柴火', de: 'Lagerfeuerplatz & 1 Bündel Brennholz' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'TV', en: 'TV', zh: '电视', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'W-lan' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2个冷水池', de: '2 Kaltwasserpools' },
        { id: 'Water playing', en: 'Water playing', zh: '玩水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '码头', de: 'Pier' },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '自然拍照点', de: 'Natur-Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht erlaubt.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '不允许携带外食。', de: 'Das Mitbringen von Speisen von außerhalb ist nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '道路需要上下楼梯。', de: 'Der Weg beinhaltet Treppensteigen.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税费', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 3 kamar tidur dan dapur lengkap. Dekat area Skywalk dengan lapangan terbuka luas.',
      en: 'Villa with 3 bedrooms and complete kitchen. Near Skywalk area with spacious open field.',
      zh: '设有3间卧室和完整厨房的别墅。 靠近Skywalk区，设有宽救的开放空间。',
      de: 'Villa mit 3 Schlafzimmern und kompletter Küche. In der Nähe des Skywalk-Bereichs mit geräumigem Freifeldbereich.'
    }
  },
  {
    id: 'villa-meranti',
    name: 'Villa Meranti',
    cluster: 'Nawa Bumi Villas',
    capacity: '5 Pax',
    bedrooms: 1,
    area: 36,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Dekat Cafe Warung Linggih', 'Dekat Parkir', 'Compact'],
    image: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=800',
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: '5 single bed di 1 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '阳台/露台', de: 'Balkon/Terrasse' }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher' },
        { id: 'TV', en: 'TV', zh: '电视', de: 'Fernseher' },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'W-lan' },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender' },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife' },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo' }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück' }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2个冷水池', de: '2 Kaltwasserpools' },
        { id: 'Water playing', en: 'Water playing', zh: '玩水', de: 'Wasserspiele' },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss' },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中步道', de: 'Skywalk' },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke' },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Pavillon' },
        { id: 'Dermaga', en: 'Pier', zh: '码头', de: 'Pier' },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '自然拍照点', de: 'Natur-Fotospots' }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht erlaubt.' },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '不允许携带外食。', de: 'Das Mitbringen von Speisen von außerhalb ist nicht gestattet.' },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '道路需要上下楼梯。', de: 'Der Weg beinhaltet Treppensteigen.' },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%税费', de: 'Preis exklusive 10% Steuer' }
      ]
    },
    description: {
      id: 'Villa dengan 1 kamar tidur bersama (5 single bed). Dekat area parkir dan kolam renang atas. Hanya termasuk sarapan.',
      en: 'Villa with 1 shared bedroom (5 single beds). Near parking area and upper swimming pool. Breakfast only included.',
      zh: '设有1间共用卧室（5张单人床）的别墅。 靠近停车场和上层游泳池。 仅含早餐。',
      de: 'Villa mit 1 gemeinsamen Schlafzimmer (5 Einzelbetten). In der Nähe des Parkplatzes und des oberen Pools. Nur Frühstück inbegriffen.'
    }
  }
];

// Combined export - All villas from all categories
export const VILLAS: Villa[] = [
  ...FOREST_HOUSE_VILLAS,
  ...MOOI_LAKE_VILLAS,
  ...DANDENONG_VILLAS,
  ...PROVINCIAL_VILLAS,
  ...RIVERSIDE_VILLAS,
  ...KAMPUH_BECIK_VILLAS,
  ...LOG_HOME_VILLAS,
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'nature',
    title: {
      id: 'Mandi Hutan',
      en: 'Forest Bathing',
      zh: '森林浴',
      de: 'Waldbaden'
    },
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
    category: 'Wellness'
  },
  {
    id: 'dining',
    title: {
      id: 'Makan di Tepi Sungai',
      en: 'Riverfront Dining',
      zh: '河畔用餐',
      de: 'Essen am Flussufer'
    },
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=800&auto=format&fit=crop',
    category: 'Culinary'
  },
  {
    id: 'refresh',
    title: {
      id: 'Kolam Mata Air Alami',
      en: 'Natural Spring Pools',
      zh: '天然泉水池',
      de: 'Natürliche Quellpools'
    },
    image: 'https://images.unsplash.com/photo-1513258550130-9755146c6b41?q=80&w=800&auto=format&fit=crop',
    category: 'Relax'
  },
  {
    id: 'active',
    title: {
      id: 'Petualangan Skywalk',
      en: 'Skywalk Adventure',
      zh: '空中步道探险',
      de: 'Skywalk-Abenteuer'
    },
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
    category: 'Adventure'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'romantic',
    title: {
      id: 'Pelarian Romantis Gunung',
      en: 'Romantic Mountain Escape',
      zh: '浪漫山地逃亡',
      de: 'Romantische Bergflucht'
    },
    subtitle: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
      zh: '2天1夜',
      de: '2 Tage 1 Nacht'
    },
    duration: '2D1N',
    includes: ['Executive Villa', 'Candlelight Dinner by the River', 'Couple Spa Treatment', 'Breakfast in Bed', 'Flower Arrangement'],
    originalPrice: 4500000,
    price: 3500000,
    unit: 'couple',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    savings: 'Save 22%',
    type: 'romantic'
  },
  {
    id: 'family',
    title: {
      id: 'Ikatan Keluarga Utama',
      en: 'Ultimate Family Bonding',
      zh: '终极家庭纽带',
      de: 'Ultimative Familienbindung'
    },
    subtitle: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
      zh: '3天2夜',
      de: '3 Tage 2 Nächte'
    },
    duration: '3D2N',
    includes: ['Luxury Family Villa', 'Full Board Organic Meals', 'Private Bonfire & BBQ', 'Kids Nature Tour', 'Flying Fox Access'],
    originalPrice: 7500000,
    price: 5900000,
    unit: 'family (4-6 pax)',
    image: 'https://images.unsplash.com/photo-1542834323-5e025882fb84?q=80&w=800&auto=format&fit=crop',
    savings: 'Save 21%',
    type: 'family'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Clarissa S.',
    location: 'Jakarta Executive',
    rating: 5,
    text: "The silence here is expensive. Forest House gave us the privacy and luxury we couldn't find elsewhere in Bandung. Service was impeccable.",
    date: 'January 2025',
    avatar: 'https://i.pravatar.cc/150?u=clarissa',
    verified: true,
    platform: 'TripAdvisor'
  },
  {
    id: 2,
    name: 'David W.',
    location: 'Singapore',
    rating: 5,
    text: "A true hidden gem. The farm-to-table dining at Bale Puntang exceeded expectations. Highly recommend for a digital detox.",
    date: 'December 2024',
    avatar: 'https://i.pravatar.cc/150?u=david',
    verified: true,
    platform: 'Google'
  }
];

export const RESTO_MENU: MenuItem[] = [
  {
    id: 'nasi-liwet',
    name: 'Nasi Liwet Royal',
    description: {
      id: 'Nasi aromatik dimasak dalam kastrol besi dengan santan, sereh, dan salam. Disajikan dengan ayam kampung goreng lengkuas.',
      en: 'Aromatic rice slow-cooked in iron pot with coconut milk and lemongrass. Served with galangal free-range chicken.',
      zh: '用铁锅加椰奶和柠檬草慢煮的香米饭。 配上高良姜走地鸡。',
      de: 'Aromatischer Reis, langsam im Eisentopf mit Kokosmilch und Zitronengras gekocht. Serviert mit Galgant-Freilandhuhn.'
    },
    price: 85000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800',
    isSignature: true
  },
  {
    id: 'sop-buntut',
    name: 'Sop Buntut Puntang',
    description: {
      id: 'Buntut sapi impor pilihan, direbus perlahan 8 jam dengan rempah pala dan cengkeh. Kuah bening yang kaya rasa.',
      en: 'Selected imported oxtail, slow-simmered for 8 hours with nutmeg and cloves. Rich, clear broth.',
      zh: '精选进口牛尾，加肉豆蔻和丁香慢炖8小时。 浓郁清澈的肉汤。',
      de: 'Ausgewählter importierter Ochsenschwanz, 8 Stunden lang langsam mit Muskatnuss und Nelken gekocht. Reichhaltige, klare Brühe.'
    },
    price: 115000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800',
  },
  {
    id: 'kopi-v60',
    name: 'Puntang Single Origin (V60)',
    description: {
      id: 'Biji kopi Red Honey process pemenang penghargaan dunia. Notes: Floral, Fruity, Brown Sugar.',
      en: 'World award-winning Red Honey process beans. Notes: Floral, Fruity, Brown Sugar.',
      zh: '世界获奖的红蜜加工豆。 笔记：花香、果香、红糖。',
      de: 'Weltweit preisgekrönte Bohnen aus dem Red-Honey-Prozess. Noten: Blumig, Fruchtig, Brauner Zucker.'
    },
    price: 45000,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800',
    isSignature: true
  }
];

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  {
    id: 'nature',
    title: {
      id: 'Wisata Alam',
      en: 'Nature Discovery',
      zh: '自然探索',
      de: 'Naturentdeckung'
    },
    subtitle: {
      id: 'Kembali ke Alam',
      en: 'Reconnect with the Earth',
      zh: '重返地球',
      de: 'Wiederverbindung mit der Erde'
    },
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070',
    description: {
      id: 'Jelajahi keindahan Gunung Puntang yang masih alami melalui jalur trekking dan skywalk kami.',
      en: 'Explore the untouched beauty of Mount Puntang through curated trekking paths and our signature skywalk.',
      zh: '通过精心策划的徒步路径和我们的标志性空中步道，探索蓬唐山未受破坏的美景。',
      de: 'Erkunden Sie die unberührte Schönheit des Mount Puntang auf kuratierten Trekkingpfaden und unserem charakteristischen Skywalk.'
    },
    items: [
      {
        title: {
          id: 'Trekking Hutan Panduan',
          en: 'Guided Forest Trek',
          zh: '导游森林徒步',
          de: 'Geführte Waldwanderung'
        },
        description: {
          id: 'Perjalanan 2 jam menembus hutan pinus dan perkebunan kopi lokal dipandu oleh naturalis kami.',
          en: 'A 2-hour immersive journey through pine forests and local coffee plantations led by our naturalist.',
          zh: '由我们的博物学家带领，穿越松林和当地咖啡种植园的2小时沉浸式旅程。',
          de: 'Eine 2-stündige immersive Reise durch Kiefernwälder und lokale Kaffeeplantagen, geführt von unserem Naturforscher.'
        },
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800'
      },
      {
        title: {
          id: 'Canopy Skywalk',
          en: 'Canopy Skywalk',
          zh: '树冠空中步道',
          de: 'Baumkronen-Skywalk'
        },
        description: {
          id: 'Berjalan di antara pepohonan di jembatan gantung kami, menawarkan pemandangan lembah yang indah.',
          en: 'Walk among the treetops on our suspension bridge, offering panoramic valley views.',
          zh: '在我们的吊桥上漫步于树梢之间，欣赏全景山谷美景。',
          de: 'Spazieren Sie auf unserer Hängebrücke zwischen den Baumwipfeln und genießen Sie den Panoramablick auf das Tal.'
        },
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800'
      }
    ]
  },
  {
    id: 'wellness',
    title: {
      id: 'Kesehatan Gunung',
      en: 'Mountain Wellness',
      zh: '山地养生',
      de: 'Berg-Wellness'
    },
    subtitle: {
      id: 'Meremajakan Tubuh & Jiwa',
      en: 'Rejuvenate Body & Soul',
      zh: '恢复身心活力',
      de: 'Körper & Seele verjüngen'
    },
    heroImage: 'https://images.unsplash.com/photo-1572331165267-854da2b00dc1?q=80&w=2070',
    description: {
      id: 'Benamkan diri Anda dalam kekuatan penyembuhan air pegunungan dan udara segar.',
      en: 'Immerse yourself in the healing power of mountain water and fresh air.',
      zh: '让自己沉浸在山水和新鲜空气的治愈力量中。',
      de: 'Tauchen Sie ein in die heilende Kraft von Bergwasser und frischer Luft.'
    },
    items: [
      {
        title: {
          id: 'Meditasi Sungai',
          en: 'River Meditation',
          zh: '河流冥想',
          de: 'Flussmeditation'
        },
        description: {
          id: 'Temukan ketenangan di tepi Sungai Cigeureuh, ditemani suara aliran air.',
          en: 'Find your center on the banks of Cigeureuh River, accompanied by the sound of flowing water.',
          zh: '在 Cigeureuh 河畔寻找中心，伴随着流水的种种声音。',
          de: 'Finden Sie Ihre Mitte am Ufer des Cigeureuh-Flusses, begleitet vom Rauschen des fließenden Wassers.'
        },
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800'
      },
      {
        title: {
          id: 'Yoga Matahari Terbit',
          en: 'Sunrise Yoga',
          zh: '日出瑜伽',
          de: 'Sonnenaufgangs-Yoga'
        },
        description: {
          id: 'Sambut matahari saat terbit di atas lembah dari dek yoga kami.',
          en: 'Greet the sun as it rises over the valley from our yoga deck.',
          zh: '在我们的瑜伽甲板上迎接山谷上空的日出。',
          de: 'Begrüßen Sie die Sonne, wenn sie von unserem Yoga-Deck über dem Tal aufgeht.'
        },
        image: 'https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=800'
      }
    ]
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'romantic-mountain-escape',
    title: {
      id: 'Pelarian Romantis Gunung',
      en: 'Romantic Mountain Escape',
      zh: '浪漫山地逃亡',
      de: 'Romantische Bergflucht'
    },
    description: {
      id: 'Ciptakan kenangan tak terlupakan bersama orang terkasih. Termasuk makan malam romantis di tepi sungai, spa pasangan, sarapan di tempat tidur, dan rangkaian bunga eksklusif.',
      en: 'Create unforgettable memories with your loved one. Includes candlelight dinner by the river, couple spa treatment, breakfast in bed, and exclusive flower arrangements.',
      zh: '与您的爱人创造难忘的回忆。 包括河畔烛光晚餐、情侣水疗护理、床上早餐和独家插花。',
      de: 'Schaffen Sie unvergessliche Erinnerungen mit Ihrem Liebsten. Beinhaltet Candle-Light-Dinner am Fluss, Paar-Spa-Behandlung, Frühstück im Bett und exklusive Blumenarrangements.'
    },
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1600',
    validFrom: 'Jan 1, 2025',
    validTo: 'Mar 31, 2025',
    discount: 'Save 22%',
    price: 'Rp 3,500,000',
    inclusions: [
      '2 Days 1 Night in Executive Villa',
      'Candlelight Dinner by Cigeureuh River',
      'Couple Spa & Massage Treatment',
      'Breakfast in Bed with Mountain View',
      'Flower Arrangement & Decoration',
      'Complimentary Welcome Drink',
      'Late Check-out (2 PM)'
    ]
  },
  {
    id: 'family-bonding',
    title: {
      id: 'Ikatan Keluarga Utama',
      en: 'Ultimate Family Bonding',
      zh: '终极家庭纽带',
      de: 'Ultimative Familienbindung'
    },
    description: {
      id: 'Terhubung kembali dengan keluarga Anda di jantung alam. Makanan organik lengkap, api unggun pribadi, kegiatan alam untuk anak-anak, dan kenangan seumur hidup.',
      en: 'Reconnect with your family in the heart of nature. Full board organic meals, private bonfire, nature activities for kids, and memories that last a lifetime.',
      zh: '在大自然中心与家人重新建立联系。 全膳有机餐、私人篝火、儿童自然活动以及终生难忘的回忆。',
      de: 'Verbinden Sie sich wieder mit Ihrer Familie im Herzen der Natur. Vollpension mit Bio-Mahlzeiten, privates Lagerfeuer, Naturaktivitäten für Kinder und Erinnerungen, die ein Leben lang halten.'
    },
    image: 'https://images.unsplash.com/photo-1542834323-5e025882fb84?q=80&w=1600',
    validFrom: 'Jan 15, 2025',
    validTo: 'Apr 30, 2025',
    discount: 'Save 21%',
    price: 'Rp 5,900,000',
    inclusions: [
      '3 Days 2 Nights in Luxury Family Villa',
      'Full Board Organic Farm-to-Table Meals',
      'Private Bonfire & BBQ Night',
      'Guided Nature Discovery Tour for Kids',
      'Flying Fox & Adventure Activities',
      'Family Photography Session',
      'Complimentary Snacks & Drinks',
      'Early Check-in & Late Check-out'
    ]
  },
  {
    id: 'wellness-retreat',
    title: {
      id: 'Retret Kesehatan Gunung',
      en: 'Mountain Wellness Retreat',
      zh: '山地养生静修',
      de: 'Berg-Wellness-Retreat'
    },
    description: {
      id: 'Kembalikan keseimbangan tubuh dan pikiran Anda. Yoga harian, meditasi, makanan detoksifikasi, dan akses tak terbatas ke kolam mata air alami kami.',
      en: 'Restore balance to your body and mind. Daily yoga, meditation, detox meals, and unlimited access to our natural spring pools.',
      zh: '恢复身心平衡。 每日瑜伽、冥想、排毒餐以及无限次使用我们的天然泉水池。',
      de: 'Stellen Sie das Gleichgewicht von Körper und Geist wieder her. Tägliches Yoga, Meditation, Detox-Mahlzeiten und unbegrenzter Zugang zu unseren natürlichen Quellpools.'
    },
    image: 'https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=1600',
    validFrom: 'Feb 1, 2025',
    validTo: 'May 31, 2025',
    discount: 'Save 15%',
    price: 'Rp 2,800,000',
    inclusions: [
      '2 Days 1 Night in Wellness Cabin',
      'Full Board Detox Meals & Juices',
      'Morning Sunrise Yoga Session',
      'Guided River Meditation',
      'Traditional Sundanese Massage (90 min)',
      'Forest Bathing Experience',
      'Wellness Gift Pack'
    ]
  }
];
