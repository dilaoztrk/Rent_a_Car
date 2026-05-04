/* ============================================
   araclar.js — Araçlar Sayfası JavaScript
   ============================================ */
"use strict";

/* ──────────────────────────────────────────
   VERİ
────────────────────────────────────────── */
const CARS_DATA = [
  {
    id: 1,
    name: "BMW 3 Serisi",
    brand: "BMW",
    year: 2023,
    type: "Sedan",
    gear: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    price: 1500,
    image: "image/bmw-3-serisi.jpeg",
    isAccessible: false,
    description:
      "BMW 3 Serisi, sportif sürüş dinamikleri ve premium konforu bir arada sunar. Şehir içi çevikliği ve uzun yol performansıyla sınıfının en iyisi olma özelliğini korumaktadır.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 2,
    name: "Audi A4",
    brand: "Audi",
    year: 2023,
    type: "Sedan",
    gear: "Otomatik",
    fuel: "Dizel",
    seats: 5,
    price: 1400,
    image: "image/audi-a4.jpeg",
    isAccessible: false,
    description:
      "Audi A4, zarif tasarımı ve ileri teknolojisiyle her yolculuğu konforlu kılar. Güçlü dizel motoruyla düşük yakıt tüketimi ve yüksek performansı bir arada sunar.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Park Sensörü",
      "Hız Sabitleyici",
      "LED Far",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 3,
    name: "Mercedes C200",
    brand: "Mercedes",
    year: 2023,
    type: "Sedan",
    gear: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    price: 1800,
    image: "image/Mercedes_c200.png",
    isAccessible: false,
    description:
      "Mercedes C200, lüks ve teknolojinin mükemmel birleşimidir. Üstün sürüş konforu, geniş iç mekan ve premium malzemelerle iş ve tatil yolculuklarınızı ayrıcalıklı kılar.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Park Sensörü",
      "Isıtmalı Koltuk",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 4,
    name: "Volkswagen Passat",
    brand: "Volkswagen",
    year: 2022,
    type: "Sedan",
    gear: "Otomatik",
    fuel: "Dizel",
    seats: 5,
    price: 1200,
    image: "image/volkswagen_passat.jpg",
    isAccessible: false,
    description:
      "Volkswagen Passat, geniş iç mekanı ve verimli dizel motoruyla uzun yol seyahatlerinin vazgeçilmezi. Alman mühendisliğinin güvenilirliği ile konforlu bir sürüş deneyimi sunar.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "AUX / USB",
    ],
  },
  {
    id: 5,
    name: "Renault Clio",
    brand: "Renault",
    year: 2022,
    type: "Hatchback",
    gear: "Manuel",
    fuel: "Benzin",
    seats: 5,
    price: 900,
    image: "image/renault_cio.png",
    isAccessible: false,
    description:
      "Renault Clio, şehir içi kullanım için ideal kompakt ve çevik yapısıyla öne çıkar. Ekonomik yakıt tüketimi ve kolay park kabiliyetiyle günlük kullanımda büyük kolaylık sağlar.",
    features: [
      "Klima",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Park Sensörü",
      "AUX / USB",
    ],
  },
  {
    id: 6,
    name: "Hyundai i20",
    brand: "Hyundai",
    year: 2022,
    type: "Hatchback",
    gear: "Manuel",
    fuel: "Benzin",
    seats: 5,
    price: 850,
    image: "image/hyundai_i20.png",
    isAccessible: false,
    description:
      "Hyundai i20, modern tasarımı ve ekonomik yapısıyla şehir hayatına uyum sağlar. Geniş iç mekanı ve zengin donanımıyla segmentinde öne çıkan bir tercih olmaya devam etmektedir.",
    features: ["Klima", "Bluetooth", "Park Sensörü", "AUX / USB"],
  },
  {
    id: 7,
    name: "Peugeot 3008",
    brand: "Peugeot",
    year: 2023,
    type: "SUV",
    gear: "Otomatik",
    fuel: "Dizel",
    seats: 5,
    price: 1300,
    image: "image/Peugeout_3008.png",
    isAccessible: true,
    description:
      "Peugeot 3008, etkileyici tasarımı ve yüksek sürüş pozisyonuyla hem şehirde hem yolda fark yaratır. Engelli bireylere uygun geniş kapı açıklığı ve kolay erişim özellikleriyle donatılmıştır.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Start / Stop",
    ],
  },
  {
    id: 8,
    name: "Toyota Corolla",
    brand: "Toyota",
    year: 2023,
    type: "Sedan",
    gear: "Otomatik",
    fuel: "Hibrit",
    seats: 5,
    price: 1600,
    image: "image/Toyota_corolla.png",
    isAccessible: false,
    description:
      "Toyota Corolla hibrit teknolojisiyle çevre dostu ve ekonomik bir sürüş sunar. Dünya genelinde milyonlarca kişinin tercihi olan Corolla, güvenilirlik ve konforun simgesidir.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 9,
    name: "Ford Focus",
    brand: "Ford",
    year: 2022,
    type: "Hatchback",
    gear: "Manuel",
    fuel: "Benzin",
    seats: 5,
    price: 800,
    image: "image/ford_focus.png",
    isAccessible: false,
    description:
      "Ford Focus, sportif karakteri ve keyifli sürüş dinamikleriyle her gün kullanıma uygundur. Pratik hatchback gövdesi ve geniş bagaj hacmiyle ailelere ve iş insanlarına hitap eder.",
    features: [
      "Klima",
      "Bluetooth",
      "Park Sensörü",
      "Geri Görüş Kamerası",
      "AUX / USB",
    ],
  },
  {
    id: 10,
    name: "Honda CR-V",
    brand: "Honda",
    year: 2023,
    type: "SUV",
    gear: "Otomatik",
    fuel: "Hibrit",
    seats: 5,
    price: 1700,
    image: "image/honda_crv.png",
    isAccessible: true,
    description:
      "Honda CR-V hibrit, geniş iç mekanı ve yakıt verimliliğiyle ideal aile SUV'udur. Engelli kullanıcılar için özel düzenlenmiş erişim kolaylıkları ile konforlu yolculuklar sunar.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Isıtmalı Koltuk",
      "Start / Stop",
    ],
  },
  {
    id: 11,
    name: "Volvo XC60",
    brand: "Volvo",
    year: 2023,
    type: "SUV",
    gear: "Otomatik",
    fuel: "Hibrit",
    seats: 5,
    price: 2200,
    image: "image/volvo_xc610.png",
    isAccessible: true,
    description:
      "Volvo XC60, İskandinav tasarım anlayışı ve üst düzey güvenlik teknolojileriyle premium SUV segmentinin gözdesidir. Engelli erişim düzenlemeleri ve geniş kapı açıklığıyla herkes için uygundur.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Isıtmalı Koltuk",
      "Sunroof",
      "Start / Stop",
    ],
  },
  {
    id: 12,
    name: "Renault Megane SW",
    brand: "Renault",
    year: 2022,
    type: "Station Wagon",
    gear: "Manuel",
    fuel: "Dizel",
    seats: 5,
    price: 1000,
    image: "image/renault-megane-sw.jpeg",
    isAccessible: false,
    description:
      "Renault Megane SW, station wagon pratiğini şık tasarımla buluşturur. Devasa bagaj hacmi ve uzun yol konforu ile tatil ve iş seyahatlerinde ideal bir tercih sunar.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Park Sensörü",
      "Hız Sabitleyici",
      "AUX / USB",
    ],
  },
  {
    id: 13,
    name: "Skoda Octavia",
    brand: "Skoda",
    year: 2023,
    type: "Station Wagon",
    gear: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    price: 1100,
    image: "image/skoda_octavia.png",
    isAccessible: false,
    description:
      "Skoda Octavia, sınıfının en geniş iç mekanına sahip pratik ve güvenilir bir otomobildir. Akıllı depolama çözümleri ve modern teknolojisiyle ailelerin vazgeçilmezi olmaya devam etmektedir.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Park Sensörü",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 14,
    name: "BMW 5 Serisi",
    brand: "BMW",
    year: 2023,
    type: "Sedan",
    gear: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    price: 2500,
    image: "image/bmw_5_serisi.png",
    isAccessible: false,
    description:
      "BMW 5 Serisi, yönetici sınıfı konforu ve dinamik sürüş performansını üst düzeyde sunar. Lüks iç mekan malzemeleri ve gelişmiş sürücü destek sistemleriyle sizi ön plana çıkarır.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Isıtmalı Koltuk",
      "Sunroof",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 15,
    name: "Audi Q5",
    brand: "Audi",
    year: 2023,
    type: "SUV",
    gear: "Otomatik",
    fuel: "Dizel",
    seats: 5,
    price: 2100,
    image: "image/audi_q5.png",
    isAccessible: false,
    description:
      "Audi Q5, premium SUV segmentinin en prestijli temsilcilerinden biridir. Quattro dört çeker sistemi ve lüks iç mekanıyla hem şehirde hem arazide üstün performans sunar.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Isıtmalı Koltuk",
      "LED Far",
      "Start / Stop",
    ],
  },
  {
    id: 16,
    name: "Mercedes GLC",
    brand: "Mercedes",
    year: 2023,
    type: "SUV",
    gear: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    price: 2400,
    image: "image/mercedes_glc.png",
    isAccessible: true,
    description:
      "Mercedes GLC, lüks SUV deneyimini en üst seviyede yaşatır. Engelli kullanıcılar için özel erişim kolaylıkları sunulan bu araç, yüksek oturum pozisyonu ve geniş kapı açıklığıyla herkes için uygundur.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Isıtmalı Koltuk",
      "Sunroof",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 17,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    year: 2023,
    type: "Hatchback",
    gear: "Otomatik",
    fuel: "Benzin",
    seats: 5,
    price: 1050,
    image: "image/Volkswagen_golf.png",
    isAccessible: false,
    description:
      "Volkswagen Golf, onlarca yıldır değişmeyen kalitesiyle hatchback segmentinin efsane modeli olmaya devam etmektedir. Modern teknoloji ve güçlü performansı uygun fiyatla buluşturur.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Park Sensörü",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 18,
    name: "Peugeot 208",
    brand: "Peugeot",
    year: 2022,
    type: "Hatchback",
    gear: "Manuel",
    fuel: "Elektrik",
    seats: 5,
    price: 950,
    image: "image/Peugeout_208.png",
    isAccessible: false,
    description:
      "Peugeot 208 elektrik, sıfır emisyonlu sürüşü şık tasarımla buluşturur. Şehir içi kullanım için mükemmel menzili ve hızlı şarj özelliğiyle çevre dostu bir alternatif sunar.",
    features: [
      "Klima",
      "Bluetooth",
      "Park Sensörü",
      "Geri Görüş Kamerası",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 19,
    name: "Tesla Model 3",
    brand: "Tesla",
    year: 2023,
    type: "Sedan",
    gear: "Otomatik",
    fuel: "Elektrik",
    seats: 5,
    price: 2000,
    image: "image/tesla_model_3.png",
    isAccessible: true,
    description:
      "Tesla Model 3, elektrikli araç devriminin simgesidir. Autopilot sürüş yardımcısı, dev dokunmatik ekran ve üstün hızlanma performansıyla teknolojinin zirvesinde yer almaktadır.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Hız Sabitleyici",
      "Park Sensörü",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 20,
    name: "Toyota Yaris",
    brand: "Toyota",
    year: 2022,
    type: "Hatchback",
    gear: "Otomatik",
    fuel: "Hibrit",
    seats: 5,
    price: 880,
    image: "image/toyota_yaris.png",
    isAccessible: false,
    description:
      "Toyota Yaris hibrit, şehir içi kullanımda yakıt tasarrufunu maksimuma çıkarır. Kompakt boyutu ve otomatik şanzımanıyla trafik yoğun şehirlerde sürüşü keyifli hale getirir.",
    features: [
      "Klima",
      "Bluetooth",
      "Park Sensörü",
      "Geri Görüş Kamerası",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 21,
    name: "Ford Puma",
    brand: "Ford",
    year: 2023,
    type: "SUV",
    gear: "Otomatik",
    fuel: "Hibrit",
    seats: 5,
    price: 1350,
    image: "image/ford_puma.png",
    isAccessible: true,
    description:
      "Ford Puma hibrit, crossover pratiğini sportif tasarımla harmanlayan dikkat çekici bir modeldir. Engelli bireylere uygun erişim düzenlemeleri ve yüksek sürüş konforu bir arada sunulmaktadır.",
    features: [
      "Klima",
      "Navigasyon",
      "Bluetooth",
      "Geri Görüş Kamerası",
      "Park Sensörü",
      "Hız Sabitleyici",
      "Start / Stop",
    ],
  },
  {
    id: 22,
    name: "Honda Jazz",
    brand: "Honda",
    year: 2022,
    type: "Hatchback",
    gear: "Otomatik",
    fuel: "Hibrit",
    seats: 5,
    price: 920,
    image: "image/honda_jazz.png",
    isAccessible: false,
    description:
      "Honda Jazz hibrit, akıllı Magic Seat sistemiyle inanılmaz derecede esnek iç mekan sunar. Şehir içinde çevik ve yakıt tasarruflu yapısıyla pratik bir günlük araç olarak öne çıkar.",
    features: [
      "Klima",
      "Bluetooth",
      "Park Sensörü",
      "Geri Görüş Kamerası",
      "Start / Stop",
      "AUX / USB",
    ],
  },
  {
    id: 23,
    name: "Fiat Egea",
    brand: "Fiat",
    year: 2020,
    type: "Sedan",
    gear: "Manuel",
    fuel: "Benzin",
    seats: 5,
    price: 800,
    image: "image/fiat_egea.png",
    isAccessible: false,
    description:
      "Fiat Egea, geniş iç mekanı ve uygun fiyatıyla Türkiye'nin en çok tercih edilen otomobilleri arasındadır. Sade tasarımı ve pratik yapısıyla hem aile hem iş kullanımına uygundur.",
    features: ["Klima", "Bluetooth", "Park Sensörü", "AUX / USB"],
  },
];

const ITEMS_PER_PAGE = 8;

/* ──────────────────────────────────────────
   STATE
────────────────────────────────────────── */
let state = {
  currentPage: 1,
  viewMode: "grid",
  sortBy: "recommended",
  filters: {
    brand: "",
    gear: "",
    fuel: "",
    type: "",
    maxPrice: 10000,
    yearMin: 2010,
    yearMax: 2025,
    startDate: "",
    endDate: "",
    accessible: false,
  },
  wishlist: new Set(),
};

/* ──────────────────────────────────────────
   DOM
────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);

const dom = {
  grid: $("carsGrid"),
  count: $("carCount"),
  pagination: $("pagination"),
  sortSelect: $("sortSelect"),
  gridViewBtn: $("gridViewBtn"),
  listViewBtn: $("listViewBtn"),
  btnApply: $("btnApply"),
  btnClear: $("btnClear"),
  themeToggle: $("themeToggle"),
  filterBrand: $("filterBrand"),
  filterGear: $("filterGear"),
  filterFuel: $("filterFuel"),
  filterType: $("filterType"),
  priceRange: $("priceRange"),
  priceRangeVal: $("priceRangeVal"),
  yearMin: $("yearMin"),
  yearMax: $("yearMax"),
  startDate: $("startDate"),
  endDate: $("endDate"),
  daysBadge: $("daysBadge"),
  filterAccessible: $("filterAccessible"),
};

/* ──────────────────────────────────────────
   FİLTRELEME & SIRALAMA
────────────────────────────────────────── */
function getFilteredCars() {
  const f = state.filters;
  let result = CARS_DATA.filter((car) => {
    if (f.brand && car.brand !== f.brand) return false;
    if (f.gear && car.gear !== f.gear) return false;
    if (f.fuel && car.fuel !== f.fuel) return false;
    if (f.type && car.type !== f.type) return false;
    if (car.price > f.maxPrice) return false;
    if (car.year < f.yearMin || car.year > f.yearMax) return false;
    if (f.accessible && !car.isAccessible) return false;
    return true;
  });
  switch (state.sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "year-desc":
      result.sort((a, b) => b.year - a.year);
      break;
    case "year-asc":
      result.sort((a, b) => a.year - b.year);
      break;
  }
  return result;
}

function getPaginatedCars(cars) {
  const start = (state.currentPage - 1) * ITEMS_PER_PAGE;
  return cars.slice(start, start + ITEMS_PER_PAGE);
}

/* ──────────────────────────────────────────
   TARİH HESAPLAMA
────────────────────────────────────────── */
function calcDays(start, end) {
  if (!start || !end) return 0;
  const diff = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
  return diff > 0 ? Math.ceil(diff) : 0;
}

function updateDaysBadge() {
  const days = calcDays(state.filters.startDate, state.filters.endDate);
  if (days > 0) {
    dom.daysBadge.textContent = `${days} gün seçildi`;
    dom.daysBadge.style.display = "block";
  } else dom.daysBadge.style.display = "none";
}

/* ──────────────────────────────────────────
   RENDER: ARAÇ KARTI
────────────────────────────────────────── */
function renderCarCard(car) {
  const typeClass = "badge-" + car.type.replace(/\s+/g, "");
  const isWished = state.wishlist.has(car.id);
  const days = calcDays(state.filters.startDate, state.filters.endDate);

  let imgHTML = car.image
    ? `<img src="${car.image}" alt="${car.name}" onerror="this.parentElement.innerHTML='<div class=car-img-placeholder>🚗</div>'">`
    : `<div class="car-img-placeholder">🚗</div>`;

  let priceHTML = `
    <div>
      <span class="car-price">₺${car.price.toLocaleString("tr-TR")}<span class="per-day"> / gün</span></span>
      ${days > 0 ? `<div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${days} gün → <strong style="color:var(--accent)">₺${(car.price * days).toLocaleString("tr-TR")}</strong></div>` : ""}
      ${car.isAccessible ? `<span class="badge-accessible">♿ Engelli Dostu</span>` : ""}
    </div>`;

  return `
    <div class="car-card" data-id="${car.id}">
      <div class="car-img-wrap">
        ${imgHTML}
        <span class="car-year-badge">${car.year}</span>
        <button class="wishlist-btn ${isWished ? "active" : ""}" data-wish="${car.id}" title="${isWished ? "Favorilerden çıkar" : "Favoriye ekle"}">${isWished ? "❤️" : "🤍"}</button>
      </div>
      <div class="car-body">
        <span class="car-type-badge ${typeClass}">${car.type}</span>
        <div class="car-name">${car.name}</div>
        <div class="car-meta">
          <span>${car.year}</span><span class="dot">•</span>
          <span>${car.gear}</span><span class="dot">•</span>
          <span>${car.fuel}</span>
        </div>
        <div class="car-tags">
          <span class="car-tag">👥 ${car.seats} Kişi</span>
          <span class="car-tag">⚙️ ${car.gear}</span>
          <span class="car-tag">⛽ ${car.fuel}</span>
        </div>
        <div class="car-footer">
          ${priceHTML}
          <button class="btn-incele" data-id="${car.id}">
            İncele
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </div>`;
}

/* ──────────────────────────────────────────
   RENDER: PAGİNATİON
────────────────────────────────────────── */
function renderPagination(total) {
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  if (totalPages <= 1) {
    dom.pagination.innerHTML = "";
    return;
  }

  const pages = buildPageNumbers(state.currentPage, totalPages);
  let html = `<button class="page-btn" id="prevPage" ${state.currentPage === 1 ? "disabled" : ""}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
  </button>`;
  pages.forEach((p) => {
    if (p === "...") html += `<span class="page-dots">…</span>`;
    else
      html += `<button class="page-btn ${p === state.currentPage ? "active" : ""}" data-page="${p}">${p}</button>`;
  });
  html += `<button class="page-btn" id="nextPage" ${state.currentPage === totalPages ? "disabled" : ""}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
  </button>`;
  dom.pagination.innerHTML = html;

  dom.pagination.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.currentPage = +btn.dataset.page;
      renderAll();
    });
  });
  const prev = $("prevPage"),
    next = $("nextPage");
  if (prev)
    prev.addEventListener("click", () => {
      state.currentPage--;
      renderAll();
    });
  if (next)
    next.addEventListener("click", () => {
      state.currentPage++;
      renderAll();
    });
}

function buildPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [1];
  if (current > 3) pages.push("...");
  for (
    let i = Math.max(2, current - 1);
    i <= Math.min(total - 1, current + 1);
    i++
  )
    pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

/* ──────────────────────────────────────────
   ANA RENDER
────────────────────────────────────────── */
function renderAll() {
  const filtered = getFilteredCars();
  const paginated = getPaginatedCars(filtered);
  dom.count.textContent = filtered.length;
  if (paginated.length === 0) {
    dom.grid.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>Araç bulunamadı</h3><p>Filtrelerinizi değiştirerek tekrar deneyin.</p></div>`;
  } else {
    dom.grid.innerHTML = paginated.map(renderCarCard).join("");
    attachCardEvents();
  }
  renderPagination(filtered.length);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ──────────────────────────────────────────
   KART OLAYLARI
────────────────────────────────────────── */
function attachCardEvents() {
  dom.grid.querySelectorAll("[data-wish]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = +btn.dataset.wish;
      if (state.wishlist.has(id)) {
        state.wishlist.delete(id);
        btn.textContent = "🤍";
        btn.classList.remove("active");
        btn.title = "Favoriye ekle";
      } else {
        state.wishlist.add(id);
        btn.textContent = "❤️";
        btn.classList.add("active");
        btn.title = "Favorilerden çıkar";
      }
    });
  });
  dom.grid.querySelectorAll(".btn-incele").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.location.href = `detay.html?id=${btn.dataset.id}`;
    });
  });
  dom.grid.querySelectorAll(".car-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".wishlist-btn") || e.target.closest(".btn-incele"))
        return;
      window.location.href = `detay.html?id=${card.dataset.id}`;
    });
  });
}

/* ──────────────────────────────────────────
   FİLTRE OKUMA & TEMİZLEME
────────────────────────────────────────── */
function readFilters() {
  state.filters.brand = dom.filterBrand.value;
  state.filters.gear = dom.filterGear.value;
  state.filters.fuel = dom.filterFuel.value;
  state.filters.type = dom.filterType ? dom.filterType.value : "";
  state.filters.maxPrice = +dom.priceRange.value;
  state.filters.yearMin = +dom.yearMin.value || 2010;
  state.filters.yearMax = +dom.yearMax.value || 2025;
  state.filters.startDate = dom.startDate.value;
  state.filters.endDate = dom.endDate.value;
  state.filters.accessible = dom.filterAccessible
    ? dom.filterAccessible.checked
    : false;
}

function clearFilters() {
  dom.filterBrand.value = "";
  dom.filterGear.value = "";
  dom.filterFuel.value = "";
  if (dom.filterType) dom.filterType.value = "";
  dom.priceRange.value = 10000;
  dom.priceRangeVal.textContent = "₺10.000";
  dom.yearMin.value = 2010;
  dom.yearMax.value = 2025;
  dom.startDate.value = "";
  dom.endDate.value = "";
  dom.daysBadge.style.display = "none";
  if (dom.filterAccessible) dom.filterAccessible.checked = false;
  state.filters = {
    brand: "",
    gear: "",
    fuel: "",
    type: "",
    maxPrice: 10000,
    yearMin: 2010,
    yearMax: 2025,
    startDate: "",
    endDate: "",
    accessible: false,
  };
  state.currentPage = 1;
  renderAll();
}

/* ──────────────────────────────────────────
   EVENTS
────────────────────────────────────────── */
function initEvents() {
  dom.priceRange.addEventListener("input", () => {
    dom.priceRangeVal.textContent =
      "₺" + (+dom.priceRange.value).toLocaleString("tr-TR");
  });
  const today = new Date().toISOString().split("T")[0];
  dom.startDate.min = today;
  dom.endDate.min = today;
  dom.startDate.addEventListener("change", () => {
    state.filters.startDate = dom.startDate.value;
    if (
      state.filters.endDate &&
      state.filters.endDate < state.filters.startDate
    ) {
      dom.endDate.value = "";
      state.filters.endDate = "";
    }
    dom.endDate.min = state.filters.startDate;
    updateDaysBadge();
  });
  dom.endDate.addEventListener("change", () => {
    state.filters.endDate = dom.endDate.value;
    updateDaysBadge();
  });
  dom.yearMin.addEventListener("input", () => {
    if (+dom.yearMin.value > +dom.yearMax.value)
      dom.yearMin.value = dom.yearMax.value;
  });
  dom.yearMax.addEventListener("input", () => {
    if (+dom.yearMax.value < +dom.yearMin.value)
      dom.yearMax.value = dom.yearMin.value;
  });
  dom.btnApply.addEventListener("click", () => {
    readFilters();
    state.currentPage = 1;
    renderAll();
  });
  dom.btnClear.addEventListener("click", clearFilters);
  dom.sortSelect.addEventListener("change", () => {
    state.sortBy = dom.sortSelect.value;
    state.currentPage = 1;
    renderAll();
  });
  dom.gridViewBtn.addEventListener("click", () => {
    state.viewMode = "grid";
    $("carsGrid").classList.remove("list-view");
    dom.gridViewBtn.classList.add("active");
    dom.listViewBtn.classList.remove("active");
  });
  dom.listViewBtn.addEventListener("click", () => {
    state.viewMode = "list";
    $("carsGrid").classList.add("list-view");
    dom.listViewBtn.classList.add("active");
    dom.gridViewBtn.classList.remove("active");
  });
  if (dom.themeToggle) {
    dom.themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      dom.themeToggle.textContent = document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
    });
  }
}

/* ──────────────────────────────────────────
   BAŞLAT
────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initEvents();
  renderAll();
});
