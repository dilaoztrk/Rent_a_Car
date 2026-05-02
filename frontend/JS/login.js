// Aktif sekme: 'kullanici' veya 'yonetici'
let activeTab = 'kullanici';
 
// Sekme değiştirme
function switchTab(btn, tab) {
  activeTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}
 
// Şifre göster/gizle
function togglePassword() {
  const input = document.getElementById('password');
  input.type = input.type === 'password' ? 'text' : 'password';
}
 
// Giriş yap
//async function handleLogin() {
  //const email = document.getElementById('email').value.trim();
  //const password = document.getElementById('password').value.trim();
 
  //if (!email || !password) {
   // alert('Lütfen e-posta ve şifrenizi girin.');
    //return;
  //}
async function handleLogin() {
  if (activeTab === 'yonetici') {
    window.location.href = 'admin.html';
    return;
  }



 
  // API endpoint: kullanıcı mı yönetici mi?
  const endpoint = activeTab === 'kullanici'
    ? 'http://localhost:5000/api/auth/login'       // kullanıcı girişi
    : 'http://localhost:5000/api/auth/admin-login'; // yönetici girişi
 
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
 
    const data = await response.json();
 
    if (response.ok) {
      // Token'ı kaydet
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', activeTab);
 
      // Yönlendirme
      if (activeTab === 'yonetici') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'index.html';
      }
    } else {
      alert(data.message || 'Giriş başarısız. Bilgilerinizi kontrol edin.');
    }
 
  } catch (error) {
    alert('Sunucuya bağlanılamadı. Lütfen tekrar deneyin.');
    console.error(error);
  }
}