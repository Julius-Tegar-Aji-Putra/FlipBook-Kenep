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
    content: `<h4 style="text-align: center; margin-bottom: 20px; font-family: inherit; font-size: 14px; letter-spacing: 2px; border-bottom: 1px solid #444; padding-bottom: 5px;">DAFTAR ISI</h4>

<!-- Pengaturan Gaya CSS Inline untuk baris Daftar Isi (TOC Item) -->
<div style="display: flex; flex-direction: column; gap: 8px;">

    <!-- Item: SAMBUTAN LURAH -->
    <div onclick="goToPage(event, 3);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span style="font-weight: 600;">SAMBUTAN LURAH KENEP</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span style="font-weight: 600;">3</span>
    </div>

    <!-- Item: KATA PENGANTAR -->
    <div onclick="goToPage(event, 4);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span style="font-weight: 600;">KATA PENGANTAR</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span style="font-weight: 600;">4</span>
    </div>

    <!-- Item: BAB I -->
    <div onclick="goToPage(event, 5);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; margin-top: 8px; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span style="font-weight: bold;">I. RIWAYAT DESA & MASJID DARUSSALAM</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span style="font-weight: bold;">5</span>
    </div>

    <!-- Sub-item: A -->
    <div onclick="goToPage(event, 5);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; padding-left: 15px; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span>A. Dekade Sebelum Islam</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span>5</span>
    </div>

    <!-- Sub-item: B -->
    <div onclick="goToPage(event, 12);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; padding-left: 15px; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span>B. Dekade Perjuangan</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span>12</span>
    </div>
    
    <!-- Sub-sub-item: B.1 -->
    <div onclick="goToPage(event, 13);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; padding-left: 30px; font-size: 11.5px; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span>1. Masa Perang Diponegoro</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span>13</span>
    </div>

    <!-- Sub-sub-item: B.2 -->
    <div onclick="goToPage(event, 15);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; padding-left: 30px; font-size: 11.5px; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span>2. Masa Perang Kemerdekaan</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span>15</span>
    </div>

    <!-- Sub-item: C -->
    <div onclick="goToPage(event, 16);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; padding-left: 15px; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span>C. Dekade Paska Peperangan</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span>16</span>
    </div>

    <!-- Item: BAB II -->
    <div onclick="goToPage(event, 22);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; margin-top: 8px; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span style="font-weight: bold;">II. PENUTUP</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span style="font-weight: bold;">22</span>
    </div>

    <!-- Item: DAFTAR PUSTAKA -->
    <div onclick="goToPage(event, 23);" onmousedown="if(event) event.stopPropagation();" onmouseup="if(event) event.stopPropagation();" onpointerdown="if(event) event.stopPropagation();" onpointerup="if(event) event.stopPropagation();" style="display: flex; align-items: baseline; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
        <span style="font-weight: bold;">DAFTAR PUSTAKA</span>
        <span style="flex-grow: 1; border-bottom: 1.5px dotted #666; margin: 0 6px;"></span>
        <span style="font-weight: bold;">23</span>
    </div>
</div>`
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
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">PEMUGARAN & SENGKALAN</h4>
<p style="margin-bottom: 5px;">Paska perang Diponegoro para Kyai dan tokoh-tokoh agama mulai menata kehidupan bersama di Kedunggudel. Tokoh-tokoh itu antara lain:</p>
<ol type="a" style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>KRMT Taruna Negara</li>
    <li>P. Selarong</li>
    <li>Kyai Jamsari</li>
    <li>Kyai Gampang</li>
    <li>Kyai Slamet</li>
</ol>
<p style="margin-bottom: 10px;">Tokoh-tokoh itu bermusyawarah untuk memperbaiki kondisi fisik Masjid Kedunggudel yang juga mendapat restu dari SISKS PB VIII (Pangeran Purboyo).</p>
<p style="margin-bottom: 10px;">Pemugaran Masjid pada hari Minggu Pon tanggal 18 Jumadil Awal 1765 H berisengkalan (pepeling): "MARGANING RASA PANDITA NABI" bila dengan kata-kata LIMA NENEM PITU TUNGGAL (1765H). Prasasti ini dimunculkan untuk mengenang waktu pemugaran masjid TIBAN di Kedunggudel.</p>
<p style="margin-bottom: 10px;">Paska perang Diponegoro, pengikut-pengikut setia dari Pangeran Diponegoro melepaskan atribut keprajuritan selanjutnya memilih pakai atribut seorang Dai (Mubaligh).</p>
<p style="margin-bottom: 10px;">Mulai saat inilah Islam di Kedunggudel tumbuh kembali dan aktivitas pun maju, sehingga beliau Pangeran Pakubuwono IX (Bangun Topo) bekenan todhak (berkunjung) ke Kedunggudel untuk bertemu dengan tokoh-tokoh Islam para Kyai di Kedunggudel.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">2. MASA PERANG KEMERDEKAAN</h4>
<p style="margin-bottom: 10px;">Pada tahun 1949 (Agresi Belanda ke II) Kedunggudel dianggap tempat yang tepat bagi para pejuang sebagai pusat (markas) Pemerintahan Karesidenan Surakarta Selatan. Hal ini disamping tempat yang strategis juga masyarakatnya yang kooperatif bagi gerilyawan.</p>
<p style="margin-bottom: 5px;">Tokoh-tokoh pejuang yang bermarkas di Desa Kedunggudel antara lain:</p>
<ol type="a" style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>Jendral Gatot Subroto</li>
    <li>Resident Sudiro</li>
    <li>Komandan PMB Mayor N. Sunaryo</li>
    <li>Komandan STE Letkol Mursito</li>
</ol>
<p style="margin-bottom: 10px;">Kehadiran para tokoh-tokoh itu menggugah jiwa nasionalisme dan semangat juang lewat sarana (media) kesenian keroncong yang syair-syairnya bernuansa perjuangan.</p>
<p style="margin-bottom: 10px;">Aktivitas tokoh-tokoh itu tercium oleh Belanda lewat mata-matanya, akhirnya bertepatan pada hari Rabu tanggal 1 svawal 1949 masyarakat sedang melaksanakan sholat Idul Fitri melihat glagat keamanan terancam maka para pejuang meninggalkan Kedunggudel untuk pengamanan.</p>
<p style="margin-bottom: 10px;">Pada hari Kamis, 2 syawal 1949 itu juga Belanda menyerang Kedunggudel di Bombardir sebanyak 21 kali, namun karena perlindungan Allah SWT, dari 21 itu yang meletus hanya 1 (satu) dan menghancurkan serambi masjid bagian utara, dan mengakibatkan 6 warga sipil meninggal dunia.</p>
<p style="margin-bottom: 5px;">Tidak luput juga tempat (markas) yang diduga menjadi para pejuang itu antara lain:</p>
<ol type="a" style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>Rumah Bapak Parto Siswoyo</li>
    <li>Rumah Bapak Cipto Diharjo</li>
    <li>Rumah Bapak Sosroharjo</li>
    <li>Rumah Ibu Kartono</li>
    <li>Rumah Bapak Jo Sumarto</li>
</ol>
<p style="margin-bottom: 10px;">Serangan artileri ini oleh Belanda tidak berhasil secara optimal, karena para tokoh-tokoh pejuang RI sudah keluar dari Kedunggudel. Tepatnya setelah pasukan Belanda sampai di Desa Krecekan (utara Kedunggudel), tidak dapat masuk Desa Kedunggudel dikarenakan terhalang tembok yang besar dan tinggi, akhirnya belok ke arah kiri sampai di Desa Banmati. Tujuannya agar serangan dapat dilakukan dari arah timur, tetapi Belanda juga tidak dapat masuk ke Desa Kedunggudel karena terhalang sebuah tembok yang tinggi dan besar.</p>
<p style="margin-bottom: 10px;">Warga Kedunggudel masih punya keyakinan (kepercayaan) selama ini masih dijangkung (dijaga) oleh roh/ Kyai Lombok, Nyai Lombok, dan Kyai Gampang sebagai cikal bakal berdirinya Masjid.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 5px; font-family: inherit; font-size: 13.5px;">C. DEKADE PASKA PEPERANGAN</h4>
<p style="text-align: center; margin-bottom: 15px; font-weight: bold; font-size: 11.5px;">(Struktur Pemerintahan Kademangan)</p>
<p style="margin-bottom: 12px;">Sebelum perang kemerdekaan atau negara Kesatuan Republik Indonesia belum berdiri, Kedunggudel adalah daerah kademangan yang termasuk dalam wilayah Nagari Dalem Surakarta Hadiningrat. Dengan demikian daerah Kedunggudel pemerintahannya dipimpin oleh seorang demang yang turun temurun dan bertanggungjawab pada pemerintah keraton.</p>
<p style="margin-bottom: 8px;">Sedangkan Demang terakhir di Kedunggudel bernama Kyai Demang Rengga Suwarno. Dalam menjalankan tugas-tugasnya, Kyai Demang dibantu dengan beberapa stafnya, antara lain:</p>
<ol style="margin-top: 0; margin-bottom: 12px; padding-left: 20px;">
    <li style="margin-bottom: 5px;"><strong>Bekel:</strong> Ki Karya Niman, yang bertugas sebagai kepala lingkungan;</li>
    <li style="margin-bottom: 5px;"><strong>Modin:</strong> Ki Soma Sajad, bertugas melayani warga dalam bidang sosial keagamaan misalnya pernikahan, kematian, dan lain-lain;</li>
    <li style="margin-bottom: 5px;"><strong>Ulu-ulu:</strong> Ki Suro, bertugas mengatur irigasi dan pertanian;</li>
    <li style="margin-bottom: 5px;"><strong>Jogo boyo:</strong> Ki Kerta Mrajak, bertugas pada keamanan di lingkungan kademangan.</li>
</ol>
<p style="margin-bottom: 10px;">Sedangkan tempat atau kantor pemerintahan secara otomatis menempati rumah Kyai Demang (atau disebut Ndemangan).</p>`
  },
  {
    layout: 'layout-k',
    image: 'assets/Sungai Begawan Solo 3.webp',
    imageAlt: 'Meluapnya Bengawan Solo',
    caption: 'Sungai Begawan Solo',
    content: `<h4 style="text-align: center; margin-bottom: 10px; font-family: inherit; font-size: 13.5px;">KETEGANGAN POLITIK &<br>"BEDAH SOLO"</h4>
<p style="margin-bottom: 10px;">Karena Kyai Demang sudah sepuh pada tahun 1960, beliau mengangkat asisten. Di sekitar tahun ini perpustakaan desa didirikan oleh Bapak Sujita. Disekitar tahun (1965) karena pemerintah mengeluarkan UU Pertanahan (Land Reform) banyak kaum priyayi Kedunggudel yang memiliki tanah dan sawah di daerah luar daerah kehilangan hak kepemilikannya.</p>
<p style="margin-bottom: 10px;">Ketegangan masyarakat terjadi pada 1965 tatkala Kedunggudel dipengaruhi keadaan politik negara, masyarakat Kedunggudel terbagi pada tiga partai besar yaitu PKI, PNI, dan Masyumi.</p>
<p style="margin-bottom: 10px;">Setelah ketegangan mereda tahun 1966 Kedunggudel menjadi lautan karena meluapnya Bengawan Solo yang lebih dikenal istilah "Bedah Solo". Pada tahun 1967, Kyai Demang resmi Purna tugas dan pada tanggal 1 Juli 1969 beliau meninggal.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">ERA KEEMASAN<br>(TAHUN 70-AN)</h4>
<p style="margin-bottom: 5px;">Pada tahun 1968 diadakan Pilkades I di Kedunggudel yang diikuti 5 calon yaitu:</p>
<ol style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>Bapak Pono Suharjo</li>
    <li>Bapak Cipto Isman</li>
    <li>Bapak Tiknyo</li>
    <li>Bapak Dalhari</li>
    <li>Bapak Wanto Diharjo</li>
</ol>
<p style="margin-bottom: 10px;">Pilkades pertama ini juga adalah Pilkades terakhir bagi masyarakat Kedunggudel dan dari 5 calon tersebut dimenangkan asisten demang Bapak Pono Suharjo.</p>
<p style="margin-bottom: 8px;">Karena keadaan negara tahun 70an ini stabil berimbas pada majunya masyarakat pedesaan. Di Kedunggudel industri kecil tumbuh subur, sehingga menjadi tujuan bagi orang-orang luar daerah untuk mencari pekerjaan. Pertumbuhan ekonomi yang cepat bagi para pengusaha di Kedunggudel membawa dampak pada berbagai bidang, seperti:</p>
<ol style="margin-top: 0; margin-bottom: 12px; padding-left: 20px;">
    <li style="margin-bottom: 6px;"><strong>Bidang Pendidikan:</strong> Kedunggudel mempunyai sekolah dasar dimana daerah lain sekolah dasar belum ada.</li>
    <li style="margin-bottom: 6px;"><strong>Bidang Olahraga:</strong> Beberapa kali pemuda-pemuda Kedunggudel mendapat juara tingkat Kabupaten dan Provinsi. Diantaranya: Sepak bola, dayung, Volly, Badminton.</li>
    <li style="margin-bottom: 6px;"><strong>Bidang Seni:</strong> Di Kedunggudel waktu itu ada banyak kelompok karawitan, seni tari, dipimpin oleh Alm. Bapak Tejo, Kismo, Yadi. Seni rebana jedoran santri swara, orkes keroncong, dll.</li>
    <li style="margin-bottom: 6px;"><strong>Bidang Agama:</strong> Di Masjid diadakan peringatan-peringatan hari besar Islam diperingati warga Kedunggudel dengan meriah. Pada tahun 1979 secara swadaya memugar (meninggikan) lantai masjid.</li>
    <li style="margin-bottom: 6px;"><strong>Bidang Teknologi:</strong> Warga Kedunggudel mulai menggunakan barang-barang Teknologi modern. Seperti: Mobil, sepeda motor, televisi, radio, dll.</li>
</ol>
<p style="margin-bottom: 10px; font-style: italic; text-align: center;">"Di tahun-tahun ini Kedunggudel suasananya bagaikan kampung Laweyan di Kota Surakarta."</p>`
  },
  {
    layout: 'layout-j',
    image: 'assets/Sungai Begawan Solo 6.webp',
    imageAlt: 'Sungai Bengawan Solo',
    caption: 'Pelurusan Alur Sungai Bengawan Solo (1992)',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">PERUBAHAN GEOGRAFIS & MEREDUPNYA PERDAGANGAN</h4>
<p style="margin-bottom: 10px;">Namun tatkala awal tahun 1990 karena industri kecil sudah tidak dapat bersaing dengan industri besar, banyak para pengusaha kecil di Kedunggudel gulung tikar. Kemunduran ini juga mempengaruhi mundurnya bidang-bidang lain di masyarakat Kedunggudel.</p>
<p style="margin-bottom: 10px;">Tahun 1991 Organisasi Kepemudaan di Kedunggudel pecah menjadi tiga, sesuai dengan wilayah masing-masing RW. Keadaan ini membuat lebih sulit bagi pemuda untuk merebut prestasi seperti masa sebelumnya.</p>
<p style="margin-bottom: 10px;">Pada tahun 1992 sungai yang melintasi barat kampung Kedunggudel dimatikan dan alur sungai diluruskan pemerintah. Jalur penyebrangan tradisional di selatan kampung, yang menghubungkan dengan kecamatan Tawangsari sudah tidak beroperasi membuat para pedagang dari daerah selatan enggan ke pasar Kedunggudel.</p>`
  },
  {
    layout: 'layout-m',
    content: `<h4 style="text-align: center; margin-bottom: 10px; font-family: inherit; font-size: 13.5px;">RENOVASI & PENETAPAN "MASJID DARUSSALAM"</h4>
<p style="margin-bottom: 8px;">Sejalan pertumbuhan ekonomi masyarakat serta tingkat kesadaran beragama semakin mantap muncullah gagasan pemugaran fisik masjid. Sebagai dasar pemugaran masjid di tahun 1979 ini adalah kerapnya terjadi banjir sehingga berakibat tambahnya lumpur di sekeliling masjid, dan keadaan lantai harus ditinggikan.</p>
<p style="margin-bottom: 8px;">Pada tahun 1985 terbentuklah Panitia Pembangunan Masjid dengan sasaran yang dibagian serambi dan pawastren. Tahun 1986 pemugaran selesai, akhirnya kedudukan Panitia Pembangunan dibubarkan. Atas kesepakatan Panitia dan warga maka masjid itu diberi nama <strong>"MASJID DARUSSALAM"</strong>.</p>
<p style="margin-bottom: 5px;">Sebagai penanggungjawab pengelolaan Masjid yang disebut "TAKMIR MASJID" sebagai Komposisi Takmir Masjid:</p>
<ul style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li style="margin-bottom: 4px;"><strong>Ketua:</strong> Bapak Warsono</li>
    <li style="margin-bottom: 4px;"><strong>Keuangan:</strong> Bapak H. Sumartono Hadi</li>
    <li style="margin-bottom: 4px;"><strong>Sekretaris:</strong> Bapak Muhammad Hani</li>
</ul>`
  },
  {
    layout: 'layout-n',
    content: `<!-- Foto Atas -->
<figure class="polaroid-top" style="margin: 0 auto; width: 85%; height: 32%; padding: 6px 6px 15px 6px; background: #fff; box-shadow: 2px 3px 10px rgba(0,0,0,0.15); border: 1px solid #ddd; display: flex; flex-direction: column; box-sizing: border-box; transform: rotate(-2deg);">
    <img src="assets/Sungai Begawan Solo 1.webp" alt="Bengawan Solo Masa Lampau" style="width: 100%; height: 100%; object-fit: cover; display: block; filter: sepia(0.2) contrast(1.05);" draggable="false">
</figure>

<!-- Teks Transisi (Di Tengah) -->
<div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 0 10px;">
    <p style="text-align: center; font-size: 13px; line-height: 1.6; color: #2c2c2c; font-family: inherit; font-style: italic; margin: 0; font-weight: 600;">
        "Bengawan Solo, urat nadi yang menghubungkan pesisir hingga pedalaman, menjadi saksi bisu pasang surutnya perjalanan Desa Kedunggudel dari masa ke masa."
    </p>
</div>

<!-- Foto Bawah -->
<figure class="polaroid-bottom" style="margin: 0 auto; width: 85%; height: 32%; padding: 6px 6px 15px 6px; background: #fff; box-shadow: 2px 3px 10px rgba(0,0,0,0.15); border: 1px solid #ddd; display: flex; flex-direction: column; box-sizing: border-box; transform: rotate(1.5deg);">
    <img src="assets/Sungai Begawan Solo 4.webp" alt="Alur Bengawan Solo" style="width: 100%; height: 100%; object-fit: cover; display: block; filter: sepia(0.25) contrast(1.05);" draggable="false">
</figure>`
  },
  {
    layout: 'layout-b',
    image: 'assets/Desa Wisata Kreatif.webp',
    imageAlt: 'Desa Wisata Kreatif',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">II. PENUTUP</h4>
<p style="margin-bottom: 8px;">Ibarat menebar sebutir pasir di samudera luas yang tidak ada artinya, namun harapan penulis yang ungkapkan ini mampu menambah keasanah ilmu pengetahuan demi kelestarian budaya daerah yang semakin terkikis oleh kemajuan teknologi.</p>
<p style="margin-bottom: 8px;">Lewat media ini pantaslah kiranya penulis menyampaikan beberapa hal:</p>
<ol style="margin-top: 0; margin-bottom: 12px; padding-left: 20px;">
    <li style="margin-bottom: 6px;">Penulis sangat berterima kasih atas dorongan dari narasumber, sehingga dapat kami gunakan sebagai referensi buku ini.</li>
    <li style="margin-bottom: 6px;">Penulis penuh berharap, sekecil apapun makna yang terkandung di dalam buku ini dapat menambah pemahaman tentang potensi daerah.</li>
    <li style="margin-bottom: 6px;">Penulis menyadari banyaknya kesalahan yang muncul pada buku ini karena refernsi yang sangat terbatas.</li>
    <li style="margin-bottom: 6px;">Tidak ada untaian kata yang pantas penulis sampaikan hanya mohon maaf bila ada kesalahan dan kekurangan.</li>
</ol>
<p style="text-align: center; font-weight: bold; margin-top: 15px; font-size: 13px; letter-spacing: 1px;">TERIMA KASIH --</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 20px; font-family: inherit; font-size: 13.5px; letter-spacing: 1px;">DAFTAR PUSTAKA</h4>

<ol style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Muh. Hani</strong> - Riwayat berdirinya Masjid Kedunggudel 1990.</li>
    <li style="margin-bottom: 8px;"><strong>Bupati Sukoharjo: Bp. Tejo Suminto</strong> dalam sambutannya pada kunjungannya, di masjid Darussalam Tahun 1990.</li>
    <li style="margin-bottom: 8px;"><strong>Prof. Dr. Kuncaraningrat</strong> - Kabudayaan Jawa Tengah.</li>
    <li style="margin-bottom: 8px;"><strong>Prof. Dr. Much Ardam</strong> - Al Quran dan Sulisme Mangkunegoro IV.</li>
    <li style="margin-bottom: 8px;"><strong>Dr. Suharto</strong> - Saksi Sejarah.</li>
    <li style="margin-bottom: 8px;"><strong>Abdul Samad Muhtadi Raharjo</strong> - Saksi Sejarah.</li>
    <li style="margin-bottom: 8px;"><strong>Jarwo Sujito</strong> - Saksi Sejarah.</li>
    <li style="margin-bottom: 8px;"><strong>Parto Siswoyo</strong> - Saksi Sejarah.</li>
</ol>`
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

function initFlipbook(startIndex) {
  if (pageFlip) {
    // Simpan halaman saat ini jika tidak ada startIndex yang diberikan (untuk resize)
    const currentIdx = startIndex !== undefined ? startIndex : pageFlip.getCurrentPageIndex();
    pageFlip.destroy();
    flipbookEl.innerHTML = '';
    createFlipbook(currentIdx);
  } else {
    createFlipbook(startIndex !== undefined ? startIndex : 0);
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
    // --- STRUKTUR LAYOUT-B (TEKS ATAS + 1 GAMBAR POLAROID BAWAH) ---
    else if (data.layout === 'layout-b') {
      pageDiv.innerHTML = `
        <div class="layout-b" style="display: flex; flex-direction: column; height: 100%; padding: 5% 6%; justify-content: flex-start; gap: 15px;">
            <div class="content-wrapper custom-scroll" style="flex: 1; overflow-y: auto; padding-right: 12px; text-align: left; font-size: 12px; line-height: 1.6; color: #2c2c2c; font-family: inherit;">
                ${data.content}
            </div>
            <figure class="polaroid-bottom" style="margin: 0 auto; width: 85%; height: 32%; padding: 6px 6px 15px 6px; background: #fff; box-shadow: 2px 3px 10px rgba(0,0,0,0.15); border: 1px solid #ddd; display: flex; flex-direction: column; box-sizing: border-box; transform: rotate(-1deg); flex-shrink: 0;">
                <img src="${data.image}" alt="${data.imageAlt}" style="width: 100%; height: 100%; object-fit: cover; display: block; filter: sepia(0.15) contrast(1.05);" draggable="false">
            </figure>
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
    // --- STRUKTUR LAYOUT-I (TEKS SCROLL ATAS + GAMBAR BAWAH) ---
    else if (data.layout === 'layout-i') {
      pageDiv.innerHTML = `
        <div class="layout-i">
          <div class="content-wrapper custom-scroll" style="flex: 1; overflow-y: auto; padding-right: 10px; text-align: left; font-size: 12.5px; line-height: 1.6; color: #2c2c2c; font-family: inherit;">
            ${data.content}
          </div>
          <div class="polaroid-row-bottom" style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 15px; width: 100%; flex-shrink: 0; box-sizing: border-box; margin-top: auto;">
            <!-- Foto 1: Masjid Kedunggudel -->
            <figure class="polaroid" style="width: 45%; max-width: 140px; background: white; padding: 5px 5px 12px 5px; box-shadow: 2px 3px 8px rgba(0,0,0,0.2); border: 1px solid #ddd; transform: rotate(-2deg); margin: 0; box-sizing: border-box;">
                <img src="assets/Fasad Masjid Darussalam.webp" alt="Masjid Kedunggudel" style="width: 100%; height: 100px; object-fit: cover; display: block;" draggable="false">
                <figcaption style="text-align: center; font-size: 10px; color: #444; font-style: italic; margin-top: 5px; font-family: inherit;">Masjid Kedunggudel</figcaption>
            </figure>
            <!-- Foto 2: Mimbar Masjid -->
            <figure class="polaroid" style="width: 45%; max-width: 140px; background: white; padding: 5px 5px 12px 5px; box-shadow: 2px 3px 8px rgba(0,0,0,0.2); border: 1px solid #ddd; transform: rotate(2deg); margin: 0; box-sizing: border-box;">
                <img src="assets/Mimbar Masjid Darussalam.webp" alt="Mimbar Masjid Darussalam" style="width: 100%; height: 100px; object-fit: cover; display: block;" draggable="false">
                <figcaption style="text-align: center; font-size: 10px; color: #444; font-style: italic; margin-top: 5px; font-family: inherit;">Mimbar Masjid</figcaption>
            </figure>
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-J (GAMBAR POLAROID ATAS + TEKS SCROLL BAWAH) ---
    else if (data.layout === 'layout-j') {
      pageDiv.innerHTML = `
        <div class="layout-j" style="display: flex; flex-direction: column; height: 100%; padding: 5% 6%; justify-content: flex-start; gap: 15px;">
          <figure class="polaroid-top" style="width: 85%; max-width: 320px; margin: 0 auto; background: white; padding: 6px; box-shadow: 2px 4px 10px rgba(0,0,0,0.2); border: 1px solid #ddd; transform: rotate(1.5deg); flex-shrink: 0; box-sizing: border-box;">
              <img src="${data.image}" alt="${data.imageAlt}" style="width: 100%; height: 140px; object-fit: cover; display: block; filter: sepia(0.15) contrast(1.05);" draggable="false">
          </figure>
          <div class="content-wrapper custom-scroll" style="flex: 1; overflow-y: auto; padding-right: 12px; text-align: left; font-size: 12.5px; line-height: 1.6; color: #2c2c2c; font-family: inherit;">
            ${data.content}
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-K (GAMBAR FILTER ATAS + TEKS BAWAH CUSTOM SCROLL) ---
    else if (data.layout === 'layout-k') {
      pageDiv.innerHTML = `
        <div class="layout-k" style="display: flex; flex-direction: column; height: 100%; padding: 5% 6%; justify-content: space-between; gap: 10px;">
          <figure class="landscape-historic-img" style="width: 100%; height: 48%; margin: 0 auto 12px auto; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff; padding: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); border: 1px solid #d0d0d0; box-sizing: border-box;">
              <img src="${data.image}" alt="${data.imageAlt}" style="width: 100%; flex: 1; min-height: 0; object-fit: cover; display: block; filter: sepia(0.25) contrast(1.1) brightness(0.95);" draggable="false">
              <figcaption style="text-align: center; font-size: 10.5px; color: #555; font-style: italic; margin-top: 6px; font-family: inherit;">${data.caption}</figcaption>
          </figure>
          <div class="content-wrapper custom-scroll" style="height: 48%; overflow-y: auto; padding-right: 8px; text-align: left; font-size: 12.5px; line-height: 1.6; color: #2c2c2c; font-family: inherit;">
            ${data.content}
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-M (2 POLAROID ATAS + TEKS BAWAH CUSTOM SCROLL) ---
    else if (data.layout === 'layout-m') {
      pageDiv.innerHTML = `
        <div class="layout-m" style="display: flex; flex-direction: column; height: 100%; padding: 5% 6%; justify-content: flex-start; gap: 12px;">
          <div style="display: flex; gap: 4%; justify-content: center; height: 38%; flex-shrink: 0;">
              <!-- Gambar 1: Masjid -->
              <figure class="polaroid" style="width: 48%; background: white; padding: 5px 5px 12px 5px; box-shadow: 2px 3px 8px rgba(0,0,0,0.15); border: 1px solid #ddd; transform: rotate(-2deg); margin: 0; display: flex; flex-direction: column; box-sizing: border-box;">
                  <img src="assets/Fasad Masjid Darussalam.webp" alt="Tampak Depan Masjid" style="width: 100%; height: 80%; object-fit: cover; display: block; filter: sepia(0.15) contrast(1.1);" draggable="false">
                  <figcaption style="text-align: center; font-size: 9.5px; color: #444; font-style: italic; margin-top: auto; font-family: inherit;">Tampak Depan</figcaption>
              </figure>
          
              <!-- Gambar 2: Mimbar -->
              <figure class="polaroid" style="width: 48%; background: white; padding: 5px 5px 12px 5px; box-shadow: 2px 3px 8px rgba(0,0,0,0.15); border: 1px solid #ddd; transform: rotate(1.5deg); margin: 0; display: flex; flex-direction: column; box-sizing: border-box;">
                  <img src="assets/Mimbar Masjid Darussalam.webp" alt="Mimbar Masjid" style="width: 100%; height: 80%; object-fit: cover; display: block; filter: sepia(0.15) contrast(1.1);" draggable="false">
                  <figcaption style="text-align: center; font-size: 9.5px; color: #444; font-style: italic; margin-top: auto; font-family: inherit;">Mimbar Masjid</figcaption>
              </figure>
          </div>
          <div class="content-wrapper custom-scroll" style="flex: 1; overflow-y: auto; padding-right: 12px; text-align: left; font-size: 12.5px; line-height: 1.6; color: #2c2c2c; font-family: inherit;">
            ${data.content}
          </div>
        </div>
      `;
    }
    // --- STRUKTUR LAYOUT-N (KOLASE ATAS-BAWAH DENGAN TEKS TENGAH) ---
    else if (data.layout === 'layout-n') {
      pageDiv.innerHTML = `
        <div class="layout-n" style="display: flex; flex-direction: column; height: 100%; padding: 6%; justify-content: space-between; box-sizing: border-box; gap: 10px;">
          ${data.content}
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

    // --- NOMOR HALAMAN DI DALAM KERTAS (kecuali Cover) ---
    if (index > 0) {
      const pageNum = document.createElement('div');
      pageNum.className = 'page-number-badge';
      pageNum.textContent = index + 1;
      pageDiv.appendChild(pageNum);
    }

    return pageDiv;
  });

  pageFlip.loadFromHTML(pages);
  window.pageFlip = pageFlip; // expose globally for TOC onclick links
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

/**
 * goToPage(n) — navigasi ke halaman ke-n (sesuai nomor di dalam kertas)
 */
window.goToPage = function(event, targetDisplayNum) {
  if (event) event.stopPropagation(); 
  
  if (!window.pageFlip) return;
  const targetIndex = targetDisplayNum - 1;
  const currentIndex = window.pageFlip.getCurrentPageIndex();
  const isLandscape = window.pageFlip.getOrientation() === 'landscape';

  function flashPage(indexToFlash) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
      if (parseInt(p.dataset.pageIndex) === indexToFlash) {
         p.style.transition = 'background-color 0.4s ease';
         p.style.backgroundColor = 'rgba(255, 235, 150, 0.7)';
         setTimeout(() => { p.style.backgroundColor = ''; }, 600);
      }
    });
  }

  if (isLandscape) {
    if (targetIndex === currentIndex || targetIndex === currentIndex + 1) {
      flashPage(targetIndex);
      return; 
    }
  } else {
    if (targetIndex === currentIndex) {
      flashPage(targetIndex);
      return; 
    }
  }

  // LOGIKA AUTO-STEPPER AMAN
  // Melakukan klik Next/Prev secara instan di balik layar.
  // Tidak menghancurkan DOM agar tidak terjadi crash render di HP.
  let failsafe = 0;
  
  if (targetIndex > currentIndex) {
    while (window.pageFlip.getCurrentPageIndex() < targetIndex && failsafe < 50) {
      window.pageFlip.turnToNextPage();
      failsafe++;
      if (isLandscape && window.pageFlip.getCurrentPageIndex() + 1 === targetIndex) break;
    }
  } else {
    while (window.pageFlip.getCurrentPageIndex() > targetIndex && failsafe < 50) {
      window.pageFlip.turnToPrevPage();
      failsafe++;
      if (isLandscape && window.pageFlip.getCurrentPageIndex() + 1 === targetIndex) break;
    }
  }
  
  setTimeout(() => {
    flashPage(targetIndex);
  }, 100);
};

// --- PERLINDUNGAN EKSTRA (CAPTURE PHASE) ---
// Memblokir St.PageFlip agar tidak membaca klik pada Daftar Isi sebagai perintah balik halaman
document.addEventListener('mousedown', (e) => {
  if (e.target.closest('div[onclick*="goToPage"]')) {
    e.stopPropagation();
  }
}, true);

document.addEventListener('touchstart', (e) => {
  if (e.target.closest('div[onclick*="goToPage"]')) {
    e.stopPropagation();
  }
}, {capture: true, passive: false});

function updatePageIndicator(pageIndex) {
  if (pageIndex === undefined) {
    if (window.pageFlip) {
      pageIndex = window.pageFlip.getCurrentPageIndex();
    } else {
      pageIndex = 0;
    }
  }

  const current = pageIndex + 1;
  const total = BOOK_PAGES.length;

  // Jika buku terbuka 2 lembar sekaligus (layar PC)
  if (window.pageFlip && window.pageFlip.getOrientation() === 'landscape') {
    if (pageIndex === 0) {
      // Halaman Cover (sendirian di kanan)
      currentPageEl.textContent = current;
    } else if (pageIndex + 1 < total) {
      // Halaman tengah (ada kiri dan kanan)
      currentPageEl.textContent = `${current}-${current + 1}`;
    } else {
      // Halaman terakhir (jika sendirian di kiri)
      currentPageEl.textContent = current;
    }
  } else {
    // Jika buku terbuka 1 lembar (layar HP)
    currentPageEl.textContent = current;
  }
  
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
let lastWindowWidth = window.innerWidth;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const currentWidth = window.innerWidth;
    // Hanya re-init jika lebar layar benar-benar berubah (mengatasi resize palsu saat scroll)
    if (Math.abs(currentWidth - lastWindowWidth) > 10) {
      lastWindowWidth = currentWidth;
      initFlipbook();
    }
  }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
  initFlipbook();
});
