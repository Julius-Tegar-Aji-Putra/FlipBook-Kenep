/**
 * ============================================
 * Interactive Flipbook — Cerita Rakyat Digital
 * ============================================
 *
 * Menggunakan StPageFlip (page-flip) library
 * untuk efek membalik halaman secara realistis.
 */

const BOOK_PAGES = [
  'https://placehold.co/400x600/2d1b69/e8a838?text=Halaman+1%0ACover',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+2%0APembuka',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+3%0ACerita',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+4%0ACerita',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+5%0ACerita',
  'https://placehold.co/400x600/2d1b69/e8a838?text=Halaman+6%0APenutup',
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
    size: 'fixed', // Gunakan fixed agar perhitungan aspect ratio presisi tanpa distorsi
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

  const pages = BOOK_PAGES.map((src, index) => {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page';
    
    if (index % 2 === 0) {
      pageDiv.classList.add('--right');
    } else {
      pageDiv.classList.add('--left');
    }
    
    pageDiv.dataset.pageIndex = index;

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Halaman ${index + 1}`;
    img.draggable = false;

    pageDiv.appendChild(img);
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
