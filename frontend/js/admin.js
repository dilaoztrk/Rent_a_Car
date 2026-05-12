// ===== SECTION YÖNETİMİ =====
function showSection(name) {

  document.querySelectorAll('.section')
    .forEach(s => s.style.display = 'none');

  document.querySelectorAll('.nav-item')
    .forEach(n => n.classList.remove('active'));

  const section =
    document.getElementById('section-' + name);

  if (section)
    section.style.display = 'block';

  const titles = {

    dashboard: [
      'Hoş geldiniz, Yönetici 👋',
      'Araçlarınızı yönetin, rezervasyonları takip edin.'
    ],

    'arac-ekle': [
      'Araç Ekle',
      'Yeni araç bilgilerini girerek sisteme kaydedin.'
    ],

    araclar: [
      'Araç Listesi',
      'Şirketinize ait tüm araçlar.'
    ]
  };

  if (titles[name]) {

    document.getElementById('pageTitle')
      .textContent = titles[name][0];

    document.getElementById('pageSubtitle')
      .textContent = titles[name][1];
  }

  if (name === 'araclar')
    araclariYukle();
}

// ===== FORM TEMİZLE =====
function temizleForm() {

  [
    'plaka',
    'model_adi',
    'yil',
    'gunluk_ucret',
    'aciklama',
    'airbag_sayisi'
  ].forEach(id => {

    const el = document.getElementById(id);

    if (el)
      el.value = '';
  });

  document.getElementById('durum').value = 'uygun';
}

// ===== ARAÇ EKLE =====
async function aracEkle() {

  const imageFile =
    document.getElementById('vehicleImage').files[0];

  let imageUrl = '';

  // FOTO YÜKLE
  if (imageFile) {

    const formData = new FormData();

    formData.append('file', imageFile);

    const uploadResponse =
      await fetch(
        'http://localhost:8080/api/upload',
        {
          method: 'POST',
          body: formData
        }
      );

    imageUrl =
      await uploadResponse.text();
  }

  const body = {

    plateNo:
      document.getElementById('plaka').value,

    year:
      parseInt(
        document.getElementById('yil').value
      ),

    dailyPrice:
      parseFloat(
        document.getElementById('gunluk_ucret').value
      ),

    status:
      document.getElementById('durum').value,

    description:
      document.getElementById('aciklama').value,

    imageUrl: imageUrl,

    airbagCount:
      parseInt(
        document.getElementById('airbag_sayisi').value
      ),

    hasAirConditioning:
      document.getElementById('klima').checked,

    hasBluetooth:
      document.getElementById('bluetooth').checked,

    hasNavigation:
      document.getElementById('navigasyon').checked
  };

  const token =
    localStorage.getItem('token');

  try {

    const response =
      await fetch(
        'http://localhost:8080/api/vehicles',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },

          body: JSON.stringify(body)
        }
      );

    if (response.ok) {

      alert('Araç başarıyla eklendi!');

      temizleForm();

      showSection('araclar');

    } else {

      alert('Araç eklenemedi.');
    }

  } catch (error) {

    console.error(error);

    alert('Sunucu hatası.');
  }
}

// ===== ARAÇLARI YÜKLE =====
async function araclariYukle() {

  const token =
    localStorage.getItem('token');

  const companyId =
    localStorage.getItem('companyId');

  const tbody =
    document.getElementById('aracTableBody');

  tbody.innerHTML =
    '<tr><td colspan="10">Yükleniyor...</td></tr>';

  try {

    const response =
      await fetch(
        `http://localhost:8080/api/vehicles/company/${companyId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

    const data =
      await response.json();

    tbody.innerHTML =
      data.map(arac => `

      <tr>

        <td>
          <img
            src="${arac.imageUrl}"
            width="120"
            style="
              border-radius:10px;
              object-fit:cover;
              height:70px;
            "
          />
        </td>

        <td>
          <strong>${arac.plateNo}</strong>
        </td>

        <td>${arac.year || '-'}</td>

        <td>${arac.status || '-'}</td>

        <td>
          ₺${Number(arac.dailyPrice)
            .toLocaleString('tr-TR')}
        </td>

        <td>
          ${arac.hasAirConditioning ? '✅' : '❌'}
        </td>

        <td>
          ${arac.hasBluetooth ? '✅' : '❌'}
        </td>

        <td>
          ${arac.hasNavigation ? '✅' : '❌'}
        </td>

        <td>
          ${arac.airbagCount || '-'}
        </td>

        <td>

          <div class="action-btns">

            <button
              class="action-btn"
              onclick="aracDuzenle(${arac.id})">

              ✏️

            </button>

            <button
              class="action-btn"
              onclick="aracSil(${arac.id})">

              🗑️

            </button>

          </div>

        </td>

      </tr>

    `).join('');

  } catch (error) {

    console.error(error);

    tbody.innerHTML =
      '<tr><td colspan="10">Veriler yüklenemedi.</td></tr>';
  }
}

// ===== ARAÇ SİL =====
async function aracSil(id) {

  if (!confirm('Araç silinsin mi?'))
    return;

  const token =
    localStorage.getItem('token');

  try {

    const response =
      await fetch(
        `http://localhost:8080/api/vehicles/${id}`,
        {
          method: 'DELETE',

          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

    if (response.ok) {

      alert('Araç silindi!');

      araclariYukle();
    }

  } catch (error) {

    console.error(error);
  }
}

// ===== ARAÇ DÜZENLE =====
async function aracDuzenle(id) {

  const yeniFiyat =
    prompt('Yeni fiyat girin');

  if (!yeniFiyat)
    return;

  const token =
    localStorage.getItem('token');

  try {

    const response =
      await fetch(
        `http://localhost:8080/api/vehicles/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

    const arac =
      await response.json();

    arac.dailyPrice =
      parseFloat(yeniFiyat);

    const updateResponse =
      await fetch(
        `http://localhost:8080/api/vehicles/${id}`,
        {
          method: 'PUT',

          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },

          body: JSON.stringify(arac)
        }
      );

    if (updateResponse.ok) {

      alert('Araç güncellendi!');

      araclariYukle();
    }

  } catch (error) {

    console.error(error);

    alert('Güncelleme başarısız.');
  }
}

// ===== FİLTRE =====
function araclariFiltrele(query) {

  const rows =
    document.querySelectorAll('#aracTableBody tr');

  rows.forEach(row => {

    row.style.display =
      row.textContent
        .toLowerCase()
        .includes(query.toLowerCase())
          ? ''
          : 'none';
  });
}