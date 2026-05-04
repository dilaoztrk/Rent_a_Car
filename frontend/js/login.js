// Aktif sekme: 'kullanici' veya 'yonetici'
let activeTab = "kullanici";

// Sekme değiştirme
function switchTab(btn, tab) {
  activeTab = tab;
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
}

// Şifre göster/gizle
function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// Giriş yap
async function handleLogin() {
  if (activeTab === "yonetici") {
    window.location.href = "admin.html";
    return;
  }

  // Kullanıcı girişi → araçlar sayfasına yönlendir
  window.location.href = "araclar.html";
}
