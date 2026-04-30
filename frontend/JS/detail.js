function rentCar() {
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;

  if (!start || !end) {
    alert("Lütfen tarih seç!");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const carId = params.get("id");

  let cars = JSON.parse(localStorage.getItem("cars")) || [];

  // 🔥 TEK DEĞİŞKEN KULLAN
  const selectedCar = cars.find((c) => String(c.id) === String(carId));

  if (!selectedCar) {
    alert("Araç bulunamadı!");
    return;
  }

  if (selectedCar.durum !== "Müsait") {
    alert("Bu araç şu anda müsait değil!");
    return;
  }

  // 🔥 DURUMU DEĞİŞTİR
  selectedCar.durum = "Kiralandı";

  localStorage.setItem("cars", JSON.stringify(cars));

  // 🔥 rezervasyon
  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  reservations.push({
    id: Date.now(),
    carId: selectedCar.id,
    carName: selectedCar.brand,
    startDate: start,
    endDate: end,
  });

  localStorage.setItem("reservations", JSON.stringify(reservations));

  alert("Araç başarıyla kiralandı 🚗");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}
