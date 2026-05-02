// ===== SECTION YÖNETİMİ =====
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
 
  const section = document.getElementById('section-' + name);
  if (section) section.style.display = 'block';
 
  // Başlıkları güncelle
  const titles = {
    'dashboard':  ['Hoş geldiniz, Yönetici 👋', 'Araçlarınızı yönetin, rezervasyonları takip edin.'],
    'arac-ekle':  ['Araç Ekle', 'Yeni araç bilgilerini girerek sisteme kaydedin.'],
    'araclar':    ['Araç Listesi', 'Şirketinize ait tüm araçlar.'],
  };
 
  if (titles[name]) {
    document.getElementById('pageTitle').textContent = titles[name][0];
    document.getElementById('pageSubtitle').textContent = titles[name][1];
  }
 
  // Araç listesi açılırsa yükle
  if (name === 'araclar') araclariYukle();
}
 
// ===== FORM SEKME YÖNETİMİ =====
function switchFormTab(btn, tab) {
  document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.form-tab-content').forEach(c => c.style.display = 'none');
  btn.classList.add('active');
  document.getElementById('tab-' + tab).style.display = 'block';
}
 
// ===== FORM TEMİZLE =====
function temizleForm() {
  ['plaka','model_adi','yil','gunluk_ucret','aciklama','airbag_sayisi'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  ['marka','kategori','yakit_turu','vites_turu'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.selectedIndex = 0;
  });
  document.getElementById('durum').value = 'uygun';
  ['klima','cocuk_koltugu','apple_carplay','geri_kamera','bluetooth','navigasyon'].forEach(id => {
    document.getElementById(id).checked = false;
  });
}
 
// ===== ARAÇ EKLE API =====
async function aracEkle() {
  const plaka       = document.getElementById('plaka').value.trim();
  const marka       = document.getElementById('marka').value;
  const model_adi   = document.getElementById('model_adi').value.trim();
  const kategori    = document.getElementById('kategori').value;
  const yakit_turu  = document.getElementById('yakit_turu').value;
  const vites_turu  = document.getElementById('vites_turu').value;
  const yil         = document.getElementById('yil').value;
  const gunluk_ucret= document.getElementById('gunluk_ucret').value;
  const durum       = document.getElementById('durum').value;
  const aciklama    = document.getElementById('aciklama').value.trim();
  const airbag      = document.getElementById('airbag_sayisi').value;
 
  if (!plaka || !marka || !model_adi || !kategori || !yakit_turu || !vites_turu || !yil || !gunluk_ucret) {
    alert('Lütfen zorunlu alanları (*) doldurun.');
    return;
  }
 
  const body = {
    plaka,
    marka,
    model_adi,
    kategori,
    yakit_turu,
    vites_turu,
    yil: parseInt(yil),
    gunluk_ucret: parseFloat(gunluk_ucret),
    durum,
    aciklama,
    airbag_sayisi: airbag ? parseInt(airbag) : null,
    klima_var_mi:              document.getElementById('klima').checked,
    cocuk_koltugu_var_mi:      document.getElementById('cocuk_koltugu').checked,
    apple_carplay_var_mi:      document.getElementById('apple_carplay').checked,
    geri_gorus_kamerasi_var_mi:document.getElementById('geri_kamera').checked,
    bluetooth_var_mi:          document.getElementById('bluetooth').checked,
    navigasyon_var_mi:         document.getElementById('navigasyon').checked,
  };
 
  const token = localStorage.getItem('token');
 
  try {
    const response = await fetch('http://localhost:5000/api/araclar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
 
    const data = await response.json();
 
    if (response.ok) {
      alert('Araç başarıyla eklendi!');
      temizleForm();
      showSection('araclar');
    } else {
      alert(data.message || 'Araç eklenemedi.');
    }
  } catch (error) {
    alert('Sunucuya bağlanılamadı.');
    console.error(error);
  }
}
 
// ===== ARAÇLARI YÜKLE =====
async function araclariYukle() {
  const token = localStorage.getItem('token');
  const tbody = document.getElementById('aracTableBody');
 
  tbody.innerHTML = '<tr><td colspan="9" class="empty-row">Yükleniyor...</td></tr>';
 
  try {
    const response = await fetch('http://localhost:5000/api/araclar', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
 
    const data = await response.json();
 
    if (response.ok && data.length > 0) {
      // İstatistik güncelle
      document.getElementById('statToplam').textContent = data.length;
 
      tbody.innerHTML = data.map(arac => `
        <tr>
          <td><strong>${arac.plaka}</strong></td>
          <td>${arac.marka} ${arac.model_adi}</td>
          <td>${arac.kategori}</td>
          <td>${arac.yakit_turu}</td>
          <td>${arac.vites_turu}</td>
          <td>${arac.yil}</td>
          <td>₺${Number(arac.gunluk_ucret).toLocaleString('tr-TR')}</td>
          <td><span class="badge ${arac.durum}">${durumText(arac.durum)}</span></td>
          <td>
            <div class="action-btns">
              <button class="action-btn" title="Görüntüle">👁️</button>
              <button class="action-btn" title="Düzenle" onclick="aracDuzenle(${arac.arac_id})">✏️</button>
              <button class="action-btn" title="Sil" onclick="aracSil(${arac.arac_id})">🗑️</button>
            </div>
          </td>
        </tr>
      `).join('');
    } else {
      tbody.innerHTML = '<tr><td colspan="9" class="empty-row">Henüz araç eklenmedi.</td></tr>';
    }
  } catch (error) {
    tbody.innerHTML = '<tr><td colspan="9" class="empty-row">Veriler yüklenemedi.</td></tr>';
    console.error(error);
  }
}
 
// ===== ARAÇ SİL =====
async function aracSil(id) {
  if (!confirm('Bu aracı silmek istediğinize emin misiniz?')) return;
 
  const token = localStorage.getItem('token');
 
  try {
    const response = await fetch(`http://localhost:5000/api/araclar/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
 
    if (response.ok) {
      alert('Araç silindi.');
      araclariYukle();
    } else {
      alert('Silme işlemi başarısız.');
    }
  } catch (error) {
    alert('Sunucuya bağlanılamadı.');
    console.error(error);
  }
}
 
function aracDuzenle(id) {
  alert('Düzenleme özelliği yakında eklenecek. Araç ID: ' + id);
}
 
// ===== FİLTRELE =====
function araclariFiltrele(query) {
  const rows = document.querySelectorAll('#aracTableBody tr');
  rows.forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(query.toLowerCase()) ? '' : 'none';
  });
}
 
// ===== YARDIMCI =====
function durumText(durum) {
  const map = { uygun: 'Uygun', rezerve: 'Rezerve', bakimda: 'Bakımda' };
  return map[durum] || durum;
}