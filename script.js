/**
 * ============================================
 * Interactive Flipbook — Cerita Rakyat Digital
 * ============================================
 *
 * Menggunakan StPageFlip (page-flip) library
 * untuk efek membalik halaman secara realistis,
 * mendukung swipe/touch di perangkat mobile.
 *
 * @see https://github.com/nicklasserre/page-flip
 */

// ==============================================
// 📚 KONFIGURASI HALAMAN BUKU
// ==============================================
// ⬇️  GANTI ARRAY INI DENGAN PATH GAMBAR ASLI ANDA  ⬇️
// Contoh penggunaan path lokal:
//   'assets/pages/cover.jpg',
//   'assets/pages/page1.jpg',
//   'assets/pages/page2.jpg',
//   ...dst
//
// Tips: Gunakan resolusi gambar minimal 800x1200px
//       dengan aspect ratio 2:3 untuk hasil terbaik.
// ==============================================
const BOOK_PAGES = [
  'https://placehold.co/400x600/2d1b69/e8a838?text=Halaman+1%0ACover',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+2%0APembuka',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+3%0ACerita',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+4%0ACerita',
  'https://placehold.co/400x600/1a1929/fffffe?text=Halaman+5%0ACerita',
  'https://placehold.co/400x600/2d1b69/e8a838?text=Halaman+6%0APenutup',
];

// ==============================================
// ELEMEN DOM
// ==============================================
const flipbookEl = document.getElementById('flipbook');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const currentPageEl = document.getElementById('current-page');
const totalPagesEl = document.getElementById('total-pages');

// ==============================================
// UTILITAS: Hitung dimensi flipbook optimal
// ==============================================
/**
 * Menghitung ukuran flipbook yang sesuai dengan viewport
 * sambil menjaga aspect ratio 2:3 (lebar:tinggi).
 * Memberikan ruang untuk header, footer, dan controls.
 *
 * @returns {{ width: number, height: number }}
 */
function calculateBookSize() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Sisakan ruang vertikal untuk header (~80px), controls (~60px), footer (~40px)
  const reservedVertical = 200;
  const maxHeight = vh - reservedVertical;

  // Sisakan padding horizontal
  const maxWidth = vw - 32; // 16px padding kiri + kanan

  // Aspect ratio halaman = 2:3 (width:height)
  const pageRatio = 2 / 3;

  // Hitung berdasarkan tinggi yang tersedia
  let bookHeight = Math.min(maxHeight, 700); // Max 700px
  let bookWidth = bookHeight * pageRatio;

  // Jika terlalu lebar, hitung berdasarkan lebar layar
  if (bookWidth > maxWidth) {
    bookWidth = maxWidth;
    bookHeight = bookWidth / pageRatio;
  }

  // Minimum size agar tetap terbaca
  bookWidth = Math.max(bookWidth, 200);
  bookHeight = Math.max(bookHeight, 300);

  return {
    width: Math.round(bookWidth),
    height: Math.round(bookHeight),
  };
}

// ==============================================
// INISIALISASI PAGE FLIP
// ==============================================
let pageFlip = null;

/**
 * Membuat instance PageFlip baru dan menambahkan halaman
 * berdasarkan array BOOK_PAGES.
 */
function initFlipbook() {
  const size = calculateBookSize();

  // Hapus instance sebelumnya jika ada (untuk resize)
  if (pageFlip) {
    pageFlip.destroy();
    flipbookEl.innerHTML = '';
  }

  // Buat instance StPageFlip
  // Referensi API: https://github.com/nicklasserre/page-flip#api
  pageFlip = new St.PageFlip(flipbookEl, {
    width: size.width,
    height: size.height,
    size: 'fixed',

    // Tampilkan satu halaman di mode portrait (mobile)
    // dan dua halaman di mode landscape (desktop)
    showCover: true,
    usePortrait: true,

    // Animasi
    flippingTime: 800,
    maxShadowOpacity: 0.35,

    // Interaksi sentuh / swipe
    swipeDistance: 30,
    clickEventForward: true,

    // Styling
    drawShadow: true,
    autoSize: false,
    mobileScrollSupport: false, // Cegah scroll vertikal saat swipe
  });

  // Buat elemen halaman untuk setiap gambar
  const pages = BOOK_PAGES.map((src, index) => {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page';
    pageDiv.dataset.pageIndex = index;

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Halaman ${index + 1}`;
    img.loading = index < 2 ? 'eager' : 'lazy'; // Lazy load halaman setelah ke-2
    img.draggable = false;

    pageDiv.appendChild(img);
    return pageDiv;
  });

  // Muat halaman ke dalam flipbook
  pageFlip.loadFromHTML(pages);

  // Update indikator halaman
  updatePageIndicator();

  // Event listener: update indikator saat halaman berubah
  pageFlip.on('flip', (e) => {
    updatePageIndicator(e.data);
  });
}

// ==============================================
// NAVIGASI HALAMAN
// ==============================================

/**
 * Membalik ke halaman sebelumnya.
 */
function goToPrevPage() {
  if (pageFlip) {
    pageFlip.flipPrev();
  }
}

/**
 * Membalik ke halaman berikutnya.
 */
function goToNextPage() {
  if (pageFlip) {
    pageFlip.flipNext();
  }
}

/**
 * Memperbarui indikator nomor halaman saat ini.
 *
 * @param {number} [pageIndex] - Indeks halaman (0-based)
 */
function updatePageIndicator(pageIndex) {
  const current = pageIndex !== undefined ? pageIndex + 1 : 1;
  const total = BOOK_PAGES.length;

  currentPageEl.textContent = current;
  totalPagesEl.textContent = total;
}

// ==============================================
// EVENT LISTENERS
// ==============================================

// Tombol navigasi
btnPrev.addEventListener('click', goToPrevPage);
btnNext.addEventListener('click', goToNextPage);

// Keyboard navigation (arrow keys)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    goToPrevPage();
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    goToNextPage();
  }
});

// ==============================================
// RESIZE HANDLER
// ==============================================
let resizeTimeout = null;

/**
 * Debounced resize handler — menghancurkan dan membuat ulang
 * flipbook agar sesuai dengan ukuran viewport baru.
 */
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initFlipbook();
  }, 300);
});

// ==============================================
// STARTUP
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
  initFlipbook();
});
