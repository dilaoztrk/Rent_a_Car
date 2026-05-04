/* =====================================================
   detay.js  –  RentCar Araç Detay Sayfası
   ===================================================== */

/* ── ARAÇ VERİSİ (araclar.js ile senkron) ── */
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

/* ── İKON HARİTASI ── */
const IKON_MAP = {
  Klima: "fas fa-snowflake",
  Navigasyon: "fas fa-map-marker-alt",
  Bluetooth: "fab fa-bluetooth-b",
  "Geri Görüş Kamerası": "fas fa-video",
  "Hız Sabitleyici": "fas fa-tachometer-alt",
  "Park Sensörü": "fas fa-parking",
  "Start / Stop": "fas fa-power-off",
  "AUX / USB": "fas fa-plug",
  "Isıtmalı Koltuk": "fas fa-chair",
  Sunroof: "fas fa-sun",
  "LED Far": "fas fa-lightbulb",
};

document.addEventListener("DOMContentLoaded", () => {
  /* ── URL'DEN ARAÇ BUL ── */
  const params = new URLSearchParams(window.location.search);
  const aracId = parseInt(params.get("id"));
  const car = CARS_DATA.find((c) => c.id === aracId) || CARS_DATA[0];

  /* ── SAYFAYI DOLDUR ── */
  function doldurSayfa(car) {
    document.title = `${car.name} - RentCar`;

    // Breadcrumb
    const bcArac = document.querySelector(".breadcrumb span");
    if (bcArac) bcArac.textContent = car.name;

    // Başlık & kategori
    const aracAdi = document.querySelector(".arac-adi");
    if (aracAdi) aracAdi.textContent = car.name;

    const kategori = document.querySelector(".arac-kategori");
    if (kategori) kategori.textContent = car.type;

    // Fiyat
    const fiyat = document.querySelector(".fiyat");
    if (fiyat) fiyat.textContent = "₺" + car.price.toLocaleString("tr-TR");

    // Meta (yıl, yakıt, vites, kişi)
    const metaSpans = document.querySelectorAll(".arac-meta span");
    if (metaSpans.length >= 4) {
      metaSpans[0].innerHTML = `<i class="far fa-calendar-alt"></i> ${car.year}`;
      metaSpans[1].innerHTML = `<i class="fas fa-gas-pump"></i> ${car.fuel}`;
      metaSpans[2].innerHTML = `<i class="fas fa-cog"></i> ${car.gear}`;
      metaSpans[3].innerHTML = `<i class="fas fa-user-friends"></i> ${car.seats} Kişilik`;
    }

    // Engelli bilgisi
    const accessibleInfo = document.getElementById("accessibleInfo");
    if (accessibleInfo) {
      accessibleInfo.textContent = car.isAccessible
        ? "♿ Engelli bireyler için uygundur"
        : "";
    }

    // Ana görsel + thumblar
    const mainImg = document.getElementById("mainImg");
    if (mainImg) {
      mainImg.src = car.image;
      mainImg.alt = car.name;
    }
    document.querySelectorAll(".thumb").forEach((t) => {
      t.src = car.image;
      t.alt = car.name;
    });

    // ── AÇIKLAMA METNİ ──
    const aciklamaP = document.querySelector(".aciklama-card p");
    if (aciklamaP && car.description) {
      aciklamaP.textContent = car.description;
    }

    // ── ALT İKON LİSTESİ ──
    const ozIkonlar = document.querySelector(".ozellik-ikonlar");
    if (ozIkonlar && car.features) {
      ozIkonlar.innerHTML = car.features
        .map(
          (f) => `
        <div class="oz-ikon">
          <i class="${IKON_MAP[f] || "fas fa-check"}"></i>
          <span>${f}</span>
        </div>`,
        )
        .join("");
    }

    // ── SAĞ PANEL ÖZELLİK LİSTESİ ──
    const ozGrid = document.querySelector(".oz-grid");
    if (ozGrid && car.features) {
      ozGrid.innerHTML = car.features
        .map(
          (f) =>
            `<div class="oz-item"><i class="fas fa-check-circle"></i> ${f}</div>`,
        )
        .join("");
    }

    // Teknik bilgiler
    const teknikMap = {
      Motor: car.motor || "—",
      Güç: car.guc || "—",
      "Yakıt Tüketimi": car.yakit || "—",
      "Bagaj Hacmi": car.bagaj || "—",
      Vites: car.gear,
      Çekiş: car.cekis || "—",
    };
    document.querySelectorAll(".teknik-item").forEach((item) => {
      const label = item.querySelector(".teknik-label")?.textContent?.trim();
      const valEl = item.querySelector(".teknik-val");
      if (label && valEl && teknikMap[label] !== undefined) {
        valEl.textContent = teknikMap[label];
      }
    });
  }

  doldurSayfa(car);

  /* ── GALERİ ── */
  const mainImg = document.getElementById("mainImg");
  const thumbs = document.querySelectorAll(".thumb");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = Array.from(thumbs).map((t) => t.src);
  let current = 0;

  function goTo(idx) {
    current = (idx + images.length) % images.length;
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = images[current];
      mainImg.style.opacity = "1";
    }, 180);
    thumbs.forEach((t, i) => t.classList.toggle("active", i === current));
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goTo(current + 1));
  thumbs.forEach((t, i) => t.addEventListener("click", () => goTo(i)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  /* ── REZERVASYON & FİYAT HESAPLAMA ── */
  const teslimTarihInput = document.getElementById("teslimTarih");
  const iadeTarihInput = document.getElementById("iadeTarih");
  const toplamFiyatEl = document.getElementById("toplamFiyat");
  const gunSayisiEl = document.getElementById("gunSayisi");
  const GUNLUK_FIYAT = car.price;

  const bugun = new Date(),
    sonra = new Date();
  sonra.setDate(bugun.getDate() + 2);
  teslimTarihInput.value = formatDate(bugun);
  iadeTarihInput.value = formatDate(sonra);

  function formatDate(d) {
    return d.toISOString().split("T")[0];
  }

  function hesaplaFiyat() {
    const t = new Date(teslimTarihInput.value);
    const i = new Date(iadeTarihInput.value);
    if (!teslimTarihInput.value || !iadeTarihInput.value) {
      toplamFiyatEl.textContent = "₺0";
      gunSayisiEl.textContent = "";
      return;
    }
    const fark = Math.round((i - t) / (1000 * 60 * 60 * 24));
    if (fark <= 0) {
      toplamFiyatEl.textContent = "₺0";
      gunSayisiEl.textContent = "";
      iadeTarihInput.style.borderColor = "#ef4444";
      return;
    }
    iadeTarihInput.style.borderColor = "";
    toplamFiyatEl.textContent =
      "₺" + (fark * GUNLUK_FIYAT).toLocaleString("tr-TR");
    gunSayisiEl.textContent = `(${fark} gün)`;
  }

  teslimTarihInput.addEventListener("change", () => {
    if (
      iadeTarihInput.value &&
      iadeTarihInput.value <= teslimTarihInput.value
    ) {
      const yeni = new Date(teslimTarihInput.value);
      yeni.setDate(yeni.getDate() + 1);
      iadeTarihInput.value = formatDate(yeni);
    }
    hesaplaFiyat();
  });
  iadeTarihInput.addEventListener("change", hesaplaFiyat);
  hesaplaFiyat();

  /* ── REZERVASYON BUTONU ── */
  const rezervasyonBtn = document.getElementById("rezervasyonBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalKapat = document.getElementById("modalKapat");

  rezervasyonBtn.addEventListener("click", () => {
    if (!teslimTarihInput.value || !iadeTarihInput.value) {
      alert("Lütfen tarih seçiniz.");
      return;
    }
    const fark = Math.round(
      (new Date(iadeTarihInput.value) - new Date(teslimTarihInput.value)) /
        (1000 * 60 * 60 * 24),
    );
    if (fark <= 0) {
      alert("İade tarihi teslim tarihinden önce olamaz.");
      return;
    }
    try {
      localStorage.setItem(
        "sonRezervazyon",
        JSON.stringify({
          arac: car.name,
          aracId: car.id,
          teslimTarih: teslimTarihInput.value,
          teslimSaat: document.getElementById("teslimSaat").value,
          iadeTarih: iadeTarihInput.value,
          iadeSaat: document.getElementById("iadeSaat").value,
          gunSayisi: fark,
          toplamFiyat: fark * GUNLUK_FIYAT,
          tarih: new Date().toISOString(),
        }),
      );
    } catch (e) {}
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function kapatModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
  modalKapat.addEventListener("click", kapatModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) kapatModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") kapatModal();
  });

  /* ── HAMBURGEr MENÜ ── */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const open = navLinks.style.display === "flex";
      if (open) {
        navLinks.style.display = "none";
      } else {
        Object.assign(navLinks.style, {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "64px",
          left: "0",
          right: "0",
          background: "#0d1117",
          padding: "16px 24px",
          boxShadow: "0 8px 24px rgba(0,0,0,.3)",
          gap: "16px",
          zIndex: "99",
        });
      }
    });
  }
});
