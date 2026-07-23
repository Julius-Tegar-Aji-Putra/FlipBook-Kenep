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
<p>Penulis<br><strong>Drs. H. Mulyono, Sehono</strong></p>`
  },
  {
    layout: 'layout-e',
    image: 'assets/Sungai Begawan Solo 1.webp',
    imageAlt: 'Sungai Bengawan Solo',
    content: `
<h2 class="page-chapter-title">I. RIWAYAT DESA KEDUNGGUDEL DAN MASJID DARUSSALAM</h2>
<p>Sejarah ini merupakan saksi bisu lewat pemahaman 3 Dekade: Dekade sebelum Islam, Dekade Perjuangan, dan Dekade Paska Penjajahan.</p>
<p><strong>A. DEKADE SEBELUM ISLAM</strong></p>
<p>Keyakinan masa itu sangat dipengaruhi faham Hinduisme. Desa Gisikan yang dilingkari Sungai Bengawan Solo telah menjadi pusat perdagangan Jawa Selatan. Perusahaan kecil yang menjamur: Batik, Tenun Sarung (ATBM), makanan tradisional, karak, jenang, rasikan, dan emping mlinjo.</p>
<p>Para pedagang Gujarat datang berdagang sekaligus menyiarkan Islam. Pada tahun 1478 berdirilah Kerajaan Islam Demak Bintoro, dibantu Wali Songo — satu diantaranya yang sangat terkenal yaitu <strong>SUNAN KALIJOGO</strong>.</p>
`
  },
  {
    layout: 'layout-d',
    content: `<h2 style="text-align:center; margin-bottom:5%;">Lanjutan: Perjalanan Kyai Lombok</h2>
<p>Ketenaran Sunan Kalijogo tercium hingga Pulau Lombok. Seorang pemuda Lombok pergi ke Demak berguru kepada Sunan Kalijogo tentang Ajaran Islam dan diberi sebutan <strong>"Kyai Lombok"</strong>.</p>
<p>Sunan Kalijogo memberi arahan ke sebelah barat laut Gunung Gajah Mungkur. Dengan niat yang kuat, Kyai Lombok menelusuri desa demi desa hingga tiba di Desa "Gisikan" — tempat yang dikelilingi aliran Sungai Bengawan Solo menyerupai delta.</p>
<p>Di Gisikan, Kyai Lombok menemui tokoh masyarakat bernama <strong>Kyai Sodiq</strong>. Tujuannya: mengajak warga Gisikan mengenal dan mendalami Agama Islam. Dalam waktu singkat, warga mengikuti jejak mereka. Siang berwirausaha, malam silaturahmi memperdalam Islam.</p>
<p>Pengaruh Islam melunturkan faham Hinduisme. Kyai Lombok merekrut warga lewat kesenian, sarasehan, dan pengajian dengan sarana sederhana. Muncullah gagasan membuat surau (langgar) sebagai tempat ibadah dan mengaji.</p>
<p>Suatu saat Kyai Lombok menemukan dua (2) pohon yang sama — ia beri nama pohon Gendayaan. Ia memohon izin pada Kyai Sodiq agar nama desa GISIKAN diganti menjadi <strong>"DAYAK DAMPIT"</strong>. Permohonan dikabulkan dan masyarakat mulai menggunakan identitas desa ini adalah "Dayak Dampit".</p>`
  },
  {
    layout: 'layout-d',
    content: `<h2 style="text-align:center; margin-bottom:4%;">SEJARAH NAMA DESA KEDUNGGUDEL</h2>
<p>Kyai Sodiq menjodohkan putrinya dengan Kyai Lombok. Putranya bernama "GAMPANG" menjadi <strong>"Kyai Gampang"</strong>. Dalam menggali sejarah, banyak versi yang punya argumen kuat:</p>
<ol style="font-size:13px; line-height:1.7; margin-left:16px; margin-bottom:10px; font-style:italic;">
  <li style="margin-bottom:6px;">Pohon Tanjung kembar diberi nama Dayak Dampit. Anak kerbau (gudel) kesayangan tenggelam di kedung Sungai Bengawan Solo — nama desa berubah menjadi <strong>"Kedunggudel"</strong>.</li>
  <li style="margin-bottom:6px;">Seorang Demang minta ikan dari penguasa kedung. Anak kerbau kesayangannya dijadikan gantinya. Untuk mengenang peristiwa itu, nama desa menjadi <strong>"Kedunggudel"</strong>.</li>
  <li style="margin-bottom:6px;">Dari sudut filsafat: <em>Kedung</em> = tempat yang dalam; <em>Gudel</em> = anak kerbau, gambaran generasi penerus. Kedunggudel adalah wadah mencetak generasi muda berguna bagi nusa dan bangsa. Buktinya: Muhammadiyah, pesantren, ahli ekonomi, kesenian Hadrah, dan tradisi pernikahan di Masjid.
    <ul style="margin-top:4px; margin-left:14px;">
      <li>Munculnya perserikatan Muhammadiyah</li>
      <li>Pesantren-pesantren</li>
      <li>Ahli ekonomi dan perdagangan</li>
      <li>Makanan ciri khas daerah</li>
      <li>Kesenian Islami Hadrah</li>
      <li>Pernikahan dilaksanakan di Masjid, diiringi jedor berkeliling desa</li>
    </ul>
  </li>
</ol>
<p>Warga bergotong royong membangun <strong>Masjid TIBAN</strong>, di sebelah barat pohon Dayak Dampit. Masjid ini menjadi pusat kegiatan keagamaan Islam yang sangat pesat.</p>
<p>Akhir hayatnya, Kyai Lombok, Nyai Lombok, dan Kyai Gampang dimakamkan di sebelah barat Masjid Tiban — dan Nyai Lombok dimakamkan di sebelah timur masjid (makam terpisah).</p>`
  },
  {
    layout: 'layout-c',
    content: `<p>Sirkulasi perdagangan mampu mengangkat perekonomian di wilayah Solo umumnya. Maka para pedagang dari segala penjuru melihat adanya potensi Desa Gisikan ini yang sudah menjamurnya perusahaan kecil diantaranya</p>
<ol style="margin-left:16px; margin-bottom:12px;">
  <li>Perusahaan batik</li>
  <li>Perusahaan tenun sarung (ATBM)</li>
  <li>Perusahaan makanan tradisional khas Desa Gisikan</li>
  <li>Perusahaan karak, jenang, rasikan, dll</li>
  <li>Emping mlinjo</li>
</ol>
<p>Bersamaan dengan terkenalnya perusahaan ini, maka mampu mengundang para saudagar untuk ke Desa Gisikan. Dari sekian banyak pedagang terselip juga para pedagang Gujarat yang datang dengan tujuan berdagang dan menyiarkan Ajaran Agama Islam.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h3 style="text-align: center; margin-bottom: 20px;">Perjalanan Kyai Lombok</h3>
<p style="margin-bottom: 12px;">Ketenaran Sunan Kalijogo sampai tercium di seluruh pelosok Nusantara, diantaranya sampai Pulau Lombok. Pendek cerita ada seorang Pemuda Lombok untuk memperdalam ajaran Islam lewat para wali, niat yang kuat ini diridhoi oleh Allah SWT, sehingga dengan susah payah pergi ke Demak untuk menemui Sunan Kalijogo.</p>
<p style="margin-bottom: 12px;">Bersamaan saat itu Demak sedang giat membuat Masjid sampailah pemuda itu di Demak, kemudian bertemu dengan Sunan Kalijogo untuk berguru tentang Ajaran Islam. Sunan Kalijogo dengan senang hati menerima pemuda itu menjadi muridnya, kalau siang bekerja membangun masjid, waktu malam belajra agama Islam. Setelah lama belajar Ilmu Agama Islam Sunan Kalijaga memandang bahwa pemuda itu telah mampu menguasai Ilmu Agama Islam dan patut mendapat sebutan "Mubaligh", sehubungan pemuda itu berasal dari Pulau Lombok, maka ia diberi sebutan "Kyai Lombok".</p>
<p style="margin-bottom: 12px;">Pada suatu waktu Sunan Kalijogo memanggil Kyai Lombok untuk menyebarluaskan Ilmu Agama Islam, dan memberi petunjuk atau arahan tempat tujuan ke sebelah barat laut gunung Gajah Mungkur.</p>
<p style="margin-bottom: 12px;">Dengan dorongan batin yang kuat dan didorong doa restu sang guru (Sunan Kalijogo) berangkatlah Kyai Lombok ketujuan itu. Hanya berbekal niat yang kuat maka, Kyai Lombok menelusuri desa ke desa, atau hutan ke hutan serta melewati sungai yang sungguh melelahkan. Sepanjang jalan sambil istirahat untuk melepaskan lelah, setiap bertemu orang awam memberi pengertian tentang islam.</p>
<p style="margin-bottom: 12px;">Perjalanan dari hari ke hari, dari bulan ke bulan akhirnya tercium oleh sebuah tempat yang arahnya seperti petunjuk gurunya, sangat ramai saudagar beraktivitas. Sampailah di suatu tempat yang dikelilingi aliran sungai Bengawan Solo yang menyerupai delta, itulah Desa "Gisikan". Di desa ini Kyai Lombok menemui tokoh masyarakat Gisikan yang bernama Kyai Sodiq, tujuannya agar boleh diterima menumpang di daerah ini, dengan senang hati Kyai Sodiq mau menerimanya. Dialog antara Kyai Lombok dengan Kyai Sodiq bahwa tujuannya ingin mengajak warga Gisikan ini untuk mengenal dan mendalami Agama Islam.</p>`
  },
  {
    layout: 'layout-f',
    imageClass: 'polaroid-gudel',
    imageImgClass: 'polaroid-img-gudel',
    image: 'assets/Gudel.webp',
    caption: 'Gudel (Anak Kerbau)',
    content: `<h3 style="text-align: center; margin-bottom: 15px;">SEJARAH NAMA DESA KEDUNGGUDEL</h3>
<p style="margin-bottom: 10px;">Dalam menggali sejarah Desa Kedunggudel banyak versi yang sama-sama punya argument yang kuat.</p>
<ol style="padding-left: 20px; margin-bottom: 10px;">
<li style="margin-bottom: 10px;">Pohon yang ditemukan Kyai Lombok itu sebenarnya Pohon Tanjung yang tumbuh berimpitan/ kembar sehingga oleh Kyai Lombok diberi nama Dayak Dampit, yang akhirnya dengan suatu peristiwa kelangenan Kyai Lombok yaitu berupa anak kerbau (gudel) itu tenggelam di kedung Sungai Bengawan Solo, sehingga nama desa Dayak Dampit diubah menjadi Desa "Kedunggudel"</li>
<li style="margin-bottom: 10px;">Pada pemerintahan saat itu dipimpin oleh seorang demang, ketika Demang itu akan punya hajat/ punya kerja, minta pertolongan pada penguasa di kedung itu untuk minta ikan, dan diberinya ikan itu sejumlah 4 pikul &plusmn; 2 kwintal dengan perjanjian akan dikembalikan selesai hajatan dengan bentuk yang berbeda. Sudah lama Ki Demang tidak dapat mengembalikannya, maka sebagai gantinya kelangenan (kesayangan) Ki Demang berupa anak kerbaunya sebagai gantinya, untuk mengenang peristiwa itu maka nama Desa Dayak Dampit diubah menjadi "Kedunggudel",</li>
<li style="margin-bottom: 10px;">
Penulis menganalisa ditinjau dari sudut filsafat bahwa nama "Kedunggudel" terdiri dari dua (2) suku kata yang bermakna sangat dalam.<br><br>
Kedunggudel =&gt; "Kedung" dan "Gudel"<br><br>
<strong>Kedung</strong>: Berarti tempat yang dalam<br>
<strong>Gudel</strong>: Anak kerbau sebagai gambaran, Generasi penerus (generasi muda)<br><br>
Sehingga desa Kedunggudel adalah suatu wadah (tempat) untuk mencetak, membentuk, dan membina genersi muda agar kelak dapat menjadi anggota masyarkat yang berguna bagi nusa dan bangsa.
</li>
</ol>`
  },
  {
    layout: 'layout-d',
    content: `<h3 style="text-align: center; margin-bottom: 20px;">BERDIRINYA MASJID TIBAN</h3>
<p style="margin-bottom: 12px;">Sejalan dengan perjalanan waktu perkembangan Islam yang sangat pesat, sehingga Kyai Sodiq dan teman-temannya bermusyawarah untuk mewadahi kegiatan keagamaan dengan membangun masjid. Dengan gotong royong penduduk Dayak Dampit berdirilah sebuah Masjid yang oleh kesepakatan warga diberi nama "Masjid TIBAN&rdquo;.</p>
<p style="margin-bottom: 12px;">Tempat pembuatan masjid diletakkan pada posisi sebelah barat pohon Dayak Dampit yang nama aslinya pohon itu pohon gendayaan (pohon tanjung). Dengan berdirinya masjid ini kegiatan keagamanan khususnya agama Islam sangat pesat sehingga menjadi pusat perhatian para penguasa keraton.</p>
<p style="margin-bottom: 12px;">Akhir hayatnya Kyai Lombok, Ny Lombok dan Kyai Gampang dimakamkan di sebelah barat masjid Tiban itu, dan Nyai Lombok dimakamkan disebelah timur masjid (makam terpisah).</p>`
  },
  {
    layout: 'layout-g',
    image: 'assets/Sungai Begawan Solo 2.webp',
    imageAlt: 'Sungai Bengawan Solo',
    caption: 'Kawasan Aliran Sungai Bengawan Solo & Tapak Sejarah Mataram',
    content: `<h4 style="text-align: center; margin-bottom: 8px; font-family: inherit; font-size: 13.5px;">B. DEKADE PERJUANGAN<br>(KONFLIK MATARAM)</h4>
<p style="margin-bottom: 8px;">Tahun 1675 terjadilah konflik dengan penguasa Giri Kedaton yang dibawahi pimpinan Amangkurat I (1675-1677). Penyebab konflik karena perkembangan pesantren memiliki kedekatan dengan daerah Jawa Timur yang akan mengganggu stabilitas politik Kerajaan Mataram.</p>
<p style="margin-bottom: 8px;">Akibat dari kecurigaan Mataram, maka dihancurkan pesantren-pesantren itu beserta tempat-tempat ibadah yang lain. Dampak hancurnya kondisi ini di Desa Kedunggudel, perkembangan agama Islam sempat terhambat.</p>`
  },
  {
    layout: 'layout-h',
    content: `<h4 style="text-align: center; margin-bottom: 10px; font-family: inherit; font-size: 13.5px;">1. MASA PERANG DIPONEGORO</h4>
<p style="margin-bottom: 10px;">Pada tahun 1825-1830 bangsa indonesia yang dipelopori Pangeran Diponegoro mengadakan perlawanan dengan Belanda.</p>
<p style="margin-bottom: 10px;">Pangeran Diponegoro sering mengadakan pertemuan di Masjid Kedunggudel dengan Pakubuwono IV, konspirasi ini dicium oleh Belanda akhirnya Kedunggudel dihancurkan yang kedua kalinya.</p>`
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
      pageDiv.innerHTML = `
        <div class="content-wrapper custom-scroll" style="padding-bottom: 20px; padding-right: 15px; text-align: left; font-size: 13px; line-height: 1.7; color: #2c2c2c; font-family: var(--font-serif);">
          ${data.content}
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-F (FOTO ATAS + TEKS SCROLL BAWAH) ---
    else if (data.layout === 'layout-f') {
      const imgClass = data.imageClass || 'polaroid-gudel';
      const imgImgClass = data.imageImgClass || 'polaroid-img-gudel';
      const cap = data.caption || 'Gambar';
      
      pageDiv.innerHTML = `
        <div class="layout-f-wrapper">
          <figure class="${imgClass}">
            <img src="${data.image}" alt="${cap}" class="${imgImgClass}" draggable="false">
            <figcaption class="polaroid-caption">${cap}</figcaption>
          </figure>
          <div class="content-wrapper custom-scroll" style="flex: 1; padding-right: 12px; text-align: left; font-size: 13px; line-height: 1.7; color: #2c2c2c; font-family: var(--font-serif);">
            ${data.content}
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-G (GAMBAR MENDOMINASI ATAS + TEKS RINGKAS BAWAH) ---
    else if (data.layout === 'layout-g') {
      pageDiv.innerHTML = `
        <div class="layout-g-wrapper">
          <figure class="landscape-historic-img" style="width: 85%; height: 48%; margin: 0 auto 12px auto; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff; padding: 5px 5px 12px 5px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); border: 1px solid #d0d0d0; box-sizing: border-box;">
            <img src="${data.image}" alt="${data.imageAlt}" style="width: 100%; height: 100%; object-fit: cover; display: block; filter: sepia(0.25) contrast(1.1) brightness(0.95);" draggable="false">
            <figcaption style="text-align: center; font-size: 11px; color: #555; font-style: italic; margin-top: 8px; font-family: inherit;">${data.caption}</figcaption>
          </figure>
          <div class="content-wrapper custom-scroll" style="flex: 1; overflow-y: auto; padding-right: 8px; text-align: left; font-size: 12.5px; line-height: 1.6; color: #2c2c2c; font-family: inherit;">
            ${data.content}
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-H (2 GAMBAR HORIZONTAL ATAS + TEKS SCROLL BAWAH) ---
    else if (data.layout === 'layout-h') {
      pageDiv.innerHTML = `
        <div class="layout-h">
          <div class="polaroid-row" style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 12px; width: 100%; margin-bottom: 12px;">
            <!-- Foto 1: Pangeran Diponegoro -->
            <figure style="width: 42%; max-width: 140px; background: white; padding: 5px 5px 12px 5px; box-shadow: 2px 3px 8px rgba(0,0,0,0.2); border: 1px solid #ddd; transform: rotate(-3deg); margin: 0; box-sizing: border-box;">
                <img src="assets/Pangeran Diponegoro.webp" alt="Pangeran Diponegoro" style="width: 100%; height: 110px; object-fit: cover; display: block;" draggable="false">
                <figcaption style="text-align: center; font-size: 10px; color: #444; font-style: italic; margin-top: 5px; font-family: inherit;">Pangeran Diponegoro</figcaption>
            </figure>
            <!-- Foto 2: Pakubuwono IV -->
            <figure style="width: 42%; max-width: 140px; background: white; padding: 5px 5px 12px 5px; box-shadow: 2px 3px 8px rgba(0,0,0,0.2); border: 1px solid #ddd; transform: rotate(3deg); margin: 0; box-sizing: border-box;">
                <img src="assets/Pakubuwono IV.webp" alt="Pakubuwono IV" style="width: 100%; height: 110px; object-fit: cover; display: block;" draggable="false">
                <figcaption style="text-align: center; font-size: 10px; color: #444; font-style: italic; margin-top: 5px; font-family: inherit;">Pakubuwono IV</figcaption>
            </figure>
          </div>
          <div class="content-wrapper custom-scroll" style="flex: 1; overflow-y: auto; padding-right: 10px; text-align: left; font-size: 12.5px; line-height: 1.6; color: #2c2c2c; font-family: inherit;">
            ${data.content}
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-E (TEKS ATAS + GAMBAR POLAROID BAWAH) ---
    else if (data.layout === 'layout-e') {
      pageDiv.innerHTML = `
        <div class="layout-e-content">
          <div class="layout-e-text custom-scroll">
            ${data.content}
          </div>
          <div class="layout-e-photo">
            <img src="${data.image}" alt="${data.imageAlt || ''}" draggable="false">
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-C (TEKS ATAS + KOLASE GAMBAR BAWAH) ---
    else if (data.layout === 'layout-c') {
      pageDiv.innerHTML = `
        <div class="page-7-wrapper">
          <div class="text-scroll-area custom-scroll">
            ${data.content}
          </div>
          <div class="polaroid-row">
            <img src="assets/Batik Kenep.jfif.webp" class="polaroid-img photo-1" alt="Batik Kenep" draggable="false">
            <img src="assets/Kerak Kenep.webp" class="polaroid-img photo-2" alt="Kerak Kenep" draggable="false">
            <img src="assets/Jenang Kenep.webp" class="polaroid-img photo-3" alt="Jenang Kenep" draggable="false">
          </div>
        </div>
      `;
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
