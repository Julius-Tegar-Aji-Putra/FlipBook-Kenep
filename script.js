/**
 * ============================================
 * Interactive Flipbook — Cerita Rakyat Digital
 * ============================================
 *
 * Menggunakan StPageFlip (page-flip) library
 * untuk efek membalik halaman secara realistis.
 */

const BOOK_PAGES = [
  {
    layout: 'layout-a',
    image: 'assets/Gapura Desa Kreatif Kenep.webp',
    title: 'NGUNGAK SEJARAH: Desa Kedunggudel & Masjid Darussalam',
    subtitle: 'Disunting oleh: Drs. H. Mulyono & Sehono',
    motto: 'Motto: Tak Kenal Maka Tak Sayang — JASMERAH (Jangan Sekali-kali Meninggalkan Sejarah)'
  },
  {
    layout: 'layout-d',
    content: `<h2 style="text-align: center; margin-bottom: 5%;">SAMBUTAN LURAH KENEP</h2>
<p>Assalamu 'alaikum Wr.Wb.</p>
<p>Kami selaku pemerintah Kelurahan Kenep memberikan penghargaan yang sebesar-besarnya kepada penulis yang telah meluangkan waktu, mengorbankan gagasan untuk menggali nilai-nilai sejarah Kelurahan Kenep yang sudah terpendam.</p>
<p>Curahan pikiran penulis patutlah kita hargai yang akhirnya diharapkan sejarah ini dapat membangkitkan minat kepada generasi penerus agar mampu mengenang potensi sejarah yang ada di daerahnya.</p>
<p>Pengungkapan kembali sejarah ini merupakan upaya dalam mengenalkan kepada masyarakat madani sekaligus sebagai pelengkap adanya program "Desa Wisata di Kelurahan Kenep". Sehingga dapat diketahui dan difahami oleh seluruh masyarakat yang berkunjung.</p>
<p>Kami berharap agar buku ini dapat menambah khasanah ilmu pengetahuan bagi warga Kelurahan Kenep dan warga Kedunggudel pada khususnya. Semoga Allah memberikan jalan keluar yang terbaik sesuai dengan kehendakNya. Amin.</p>
<p>Terimakasih</p>
<p>Wassalamu 'alaikum Wr. Wb.</p>
<br>
<p>Lurah Kenep</p>
<p><strong>SOGIYATNO S.SOS</strong><br>Nip. 19590513 198503 1 012</p>`
  },
  {
    layout: 'layout-d',
    content: `<h2 style="text-align: center; margin-bottom: 5%;">KATA PENGANTAR</h2>
<p>Assalamu'alaikum Wr. Wb.</p>
<p>Berkat hidayah Allah SWT, penulis mencoba untuk mengungkap kembali Sejarah Desa Kedunggudel dan Masjid Darussalam.</p>
<p>Jasmerah inilah kata sakti yang simpel tapi bermakna luas. JASMERAH memang suatu slogan dari tokoh sejarah tersohor di lingkungan Regional, Nasional atau Internasional yang patut kita renungkan dan kita kenang. JASMERAH adalah kependekan dari kata-kata "Jangan Suka Meninggalkan Sejarah".</p>
<p>Terkait dengan suatu peristiwa yang sangat pelik untuk diketahui, direnungkan dan perlu dimengerti bagi masyarakat di desa Kedunggudel. Nama desa yang penuh misterius dan bersejarah ini, sudah terkubur dalam bayangan generasi penerus masa sekarang. Terpengaruh kemajuan Teknologi Informasi yang canggih saat ini baru menjamur, mempunyai dampak hilangnya pengertian dan pemahaman suatu sejarah yang sebenarnya perlu sekali dapat disikapi oleh generasi bangsa.</p>
<p>Sejarah ini tidak lapuk karena panas dan tidak luntur karena hujan. Luntur dan lapuknya suatu sejarah apabila generasi penerus tidak punya referensi yang ada di daerah ini, karena belum ada gagasan untuk itu, seharusnya wadah perpustakaan tersedia penampungan sejarah itu. Oleh sebab itu, penulis mencoba untuk menguak kembali sejarah yang ada di Desa Kedunggudel yang penuh sejarah dan kenangan.</p>
<p>Ungkapan ini dikandung maksud agar sejarah ini menjadi aset budaya dan penggugah tidurnya pemahaman bagi masyarakat Kedunggudel. Lebih jauh harapan penulis, pemahaman sejarah suatu tempat dapat digali dan difahami bagi warga umumnya dan bagi generasi muda khususnya, agar dapat mengenang jerih payah para pembina generasi yang patut kita sikapi secara positif.</p>
<p>Konsep DESA WISATA di Kedunggudel sudah dicanangkan tokoh-tokoh generasi penerus untuk ditampilkan pada khalayak umum agar gagasan dapat dilengkapi dengan adanya artikel tentang Desa Kedunggudel.</p>
<p>Akhirnya penulis menyadari bahwa dalam menggali potensi yang unik ini dapat menjadi acuan dalam pemahaman makna Desa Kedunggudel, bila masih ada kesalahan penulis mohon maaf.</p>
<p>Wassalamu'alaikum Wr. Wb.</p>
<br>
<p>Penulis<br><strong>Drs. H. Mulyono</strong></p>`
  },
  {
    layout: 'layout-b',
    image: 'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+4',
    text: 'Lanjutan cerita...'
  },
  {
    layout: 'layout-b',
    image: 'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+5',
    text: 'Cerita rakyat tentang tokoh-tokoh penting di masa lalu.'
  },
  {
    layout: 'layout-b',
    image: 'https://placehold.co/400x600/2d1b69/e8a838?text=Halaman+6',
    text: 'Penutup dari buku sejarah desa.'
  }
];

const flipbookEl = document.getElementById('flipbook');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const currentPageEl = document.getElementById('current-page');
const totalPagesEl = document.getElementById('total-pages');

let pageFlip = null;

/**
 * Menghitung ukuran dinamis agar selalu proporsional 2:3
 * dan otomatis mendeteksi mode Portrait (1 Halaman) / Landscape (2 Halaman)
 */
function calculateBookSize() {
  const wrapper = document.querySelector('.flipbook-wrapper');
  
  // Ambil sisa lebar dan tinggi yang tersedia di layar
  // (Sudah dikurangi header & footer oleh flexbox)
  let availableWidth = wrapper.clientWidth;
  let availableHeight = wrapper.clientHeight;
  
  // Berikan sedikit padding (margin aman) agar buku tidak mentok ke ujung layar
  availableWidth -= 20; 
  availableHeight -= 20;

  const pageRatio = 2 / 3; // Rasio buku 2:3
  let bookWidth, bookHeight;

  // Deteksi mode Portrait (jika lebar < tinggi layar)
  const isPortrait = availableWidth < availableHeight;

  if (isPortrait) {
    // MODE HP (1 HALAMAN)
    bookHeight = availableHeight;
    bookWidth = bookHeight * pageRatio;

    // Jika lebar hasil perhitungan melebihi layar, jadikan lebar layar sebagai patokan
    if (bookWidth > availableWidth) {
      bookWidth = availableWidth;
      bookHeight = bookWidth / pageRatio;
    }
  } else {
    // MODE PC/LAPTOP (2 HALAMAN SEBELAHAN)
    bookHeight = availableHeight;
    let singlePageWidth = bookHeight * pageRatio;

    // Jika 2 halaman sekaligus melebih layar, kecilkan patokan dari lebar layarnya
    if ((singlePageWidth * 2) > availableWidth) {
      singlePageWidth = availableWidth / 2;
      bookHeight = singlePageWidth / pageRatio;
    }
    
    // Width yang di-pass ke PageFlip adalah width 1 halaman (bukan 2 halaman digabung)
    bookWidth = singlePageWidth;
  }

  return {
    width: Math.floor(bookWidth),
    height: Math.floor(bookHeight)
  };
}

function initFlipbook() {
  if (pageFlip) {
    // Simpan halaman saat ini sebelum destroy agar tidak kembali ke halaman 1 saat di-resize
    const currentIdx = pageFlip.getCurrentPageIndex();
    pageFlip.destroy();
    flipbookEl.innerHTML = '';
    createFlipbook(currentIdx);
  } else {
    createFlipbook(0);
  }
}

function createFlipbook(startPage) {
  const size = calculateBookSize();

  pageFlip = new St.PageFlip(flipbookEl, {
    width: size.width,
    height: size.height,
    size: 'fixed',
    showCover: true,
    usePortrait: true, // Fitur sakti untuk mode 1 halaman di HP
    
    // Animasi
    flippingTime: 800,
    maxShadowOpacity: 0.5,
    
    // Interaksi
    swipeDistance: 30,
    clickEventForward: true,
    drawShadow: true,
    mobileScrollSupport: false,
    
    // Memulai pada halaman terakhir yang dilihat saat di-resize
    startPage: startPage
  });

  const pages = BOOK_PAGES.map((data, index) => {
    const pageDiv = document.createElement('div');
    pageDiv.className = `page ${data.layout}`;
    
    if (index % 2 === 0) {
      pageDiv.classList.add('--right');
    } else {
      pageDiv.classList.add('--left');
    }
    
    pageDiv.dataset.pageIndex = index;

    // --- STRUKTUR LAYOUT-A (COVER) ---
    if (data.layout === 'layout-a') {
      pageDiv.innerHTML = `
        <div class="page-content cover-content">
          <div class="cover-header">
            <h1 class="cover-title">${data.title}</h1>
            <p class="cover-subtitle">${data.subtitle}</p>
          </div>
          <div class="photo-container">
            <img src="${data.image}" alt="Cover Image" draggable="false">
          </div>
          <div class="cover-footer">
            <p class="cover-motto"><i>${data.motto}</i></p>
          </div>
        </div>
      `;
    } 
    // --- STRUKTUR LAYOUT-D (HALAMAN FULL TEKS) ---
    else if (data.layout === 'layout-d') {
      pageDiv.innerHTML = data.content;
    }
    // --- STRUKTUR LAYOUT-B (KONTEN BIASA) ---
    else {
      pageDiv.innerHTML = `
        <div class="page-content">
          <div class="photo-container">
            <img src="${data.image}" alt="Halaman ${index + 1}" draggable="false">
          </div>
          <div class="text-container">
            <p><strong>Halaman ${index + 1}</strong><br><br>${data.text}</p>
          </div>
        </div>
      `;
    }

    return pageDiv;
  });

  pageFlip.loadFromHTML(pages);
  updatePageIndicator(startPage);

  pageFlip.on('flip', (e) => {
    updatePageIndicator(e.data);
  });
}

function goToPrevPage() {
  if (pageFlip) pageFlip.flipPrev();
}

function goToNextPage() {
  if (pageFlip) pageFlip.flipNext();
}

function updatePageIndicator(pageIndex) {
  const current = pageIndex !== undefined ? pageIndex + 1 : 1;
  const total = BOOK_PAGES.length;

  currentPageEl.textContent = current;
  totalPagesEl.textContent = total;
}

btnPrev.addEventListener('click', goToPrevPage);
btnNext.addEventListener('click', goToNextPage);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    goToPrevPage();
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    goToNextPage();
  }
});

let resizeTimeout = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initFlipbook();
  }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
  initFlipbook();
});
