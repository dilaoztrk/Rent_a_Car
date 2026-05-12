let activeTab = 'kullanici';

function switchTab(btn, tab) {
  activeTab = tab;

  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('active');
  });

  btn.classList.add('active');
}

function togglePassword() {

  const input = document.getElementById('password');

  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
}

async function handleLogin() {

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // BOŞ ALAN KONTROLÜ
  if (!email || !password) {
    alert('Lütfen e-posta ve şifrenizi girin.');
    return;
  }

  try {

    const response = await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    if (response.ok) {

      localStorage.setItem('token', data.token);
      localStorage.setItem(
  'companyId',
  data.companyId
);
      localStorage.setItem('role', data.user.role);
      localStorage.setItem('userId', data.user.id);

      // ROLE KONTROL
      if (activeTab === 'yonetici' && data.user.role === 'ADMIN') {

        window.location.href = 'admin.html';

      } else if (activeTab === 'kullanici') {

        window.location.href = 'index.html';

      } else {

        alert('Bu giriş tipi için yetkiniz yok.');
      }

    } else {

      alert(data.message || 'Giriş başarısız.');
    }

  } catch (error) {

    alert('Sunucuya bağlanılamadı.');
    console.error(error);
  }
}