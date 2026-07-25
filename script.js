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
<p>Assalamu'alaikum wr. wb.</p>
<p>Pemerintah Kelurahan Kenep memberikan apresiasi yang setinggi-tingginya kepada para penulis atas dedikasi mereka. Para penulis telah meluangkan waktu dan pikiran untuk menggali kembali nilai-nilai sejarah Kelurahan Kenep yang selama ini terpendam. Curahan gagasan mereka merupakan karya berharga yang patut kita hargai bersama. Melalui catatan sejarah ini, kami berharap generasi penerus dapat terpanggil untuk mengenali dan melestarikan potensi luhur di daerahnya.</p>
<p>Pengungkapan sejarah ini juga menjadi langkah strategis dalam mengedukasi masyarakat luas. Upaya ini sekaligus menyempurnakan program "Desa Wisata di Kelurahan Kenep" yang tengah kita bangun. Dengan demikian, setiap wisatawan yang berkunjung dapat memahami akar identitas dan kekayaan budaya desa ini secara menyeluruh.</p>
<p>Kami berharap buku digital ini mampu memperkaya khazanah keilmuan bagi seluruh warga Kelurahan Kenep, terkhusus masyarakat Kedunggudel. Semoga Allah Swt. senantiasa memberikan petunjuk dan jalan terbaik bagi setiap niat baik kita. Amin.</p>
<p>Terima kasih.</p>
<p>Wassalamu'alaikum wr. wb.</p>
<br>
<p>Lurah Kenep,</p>
<p><strong>SOGIYATNO, S.Sos.</strong><br>NIP 19590513 198503 1 012</p>`
  },
  {
    layout: 'layout-d',
    content: `<h2 style="text-align: center; margin-bottom: 5%;">KATA PENGANTAR</h2>
<p>Assalamu'alaikum wr. wb.</p>
<p>Atas berkat dan hidayah Allah Swt., penulis memberanikan diri untuk mengungkap kembali rekam jejak historis Desa Kedunggudel dan Masjid Darussalam. Inisiatif ini didasari oleh semangat "JASMERAH" (Jangan Sekali-kali Meninggalkan Sejarah), sebuah semboyan legendaris yang patut senantiasa kita renungkan. Sejarah adalah fondasi bangsa yang tidak boleh dilupakan, terutama di tengah arus modernisasi saat ini.</p>
<p>Eksistensi Desa Kedunggudel menyimpan rentetan peristiwa pelik dan misteri masa lalu yang sangat berharga. Sayangnya, memori kolektif tersebut perlahan terkubur dari ingatan generasi muda. Pesatnya kemajuan teknologi informasi membawa dampak ganda, salah satunya adalah mengikis pemahaman masyarakat terhadap akar sejarah tanah kelahiran mereka sendiri.</p>
<p>Sejatinya, sejarah tidak akan lapuk oleh panas maupun luntur oleh hujan. Kelunturan sebuah sejarah hanya terjadi apabila generasi penerus kehilangan literatur dan referensi lokal. Menyadari ketiadaan wadah dokumentasi yang memadai, penulis berusaha keras merajut kembali serpihan kenangan yang terserak di Desa Kedunggudel.</p>
<p>Penulisan ini bertujuan agar sejarah lokal dapat bertransformasi menjadi aset budaya dan pengingat jati diri masyarakat Kedunggudel. Penulis berharap tulisan ini mampu menggugah kesadaran generasi muda untuk mempelajari masa lampau. Dengan demikian, pengorbanan para pendahulu dalam membangun desa ini dapat dihargai dan disikapi secara positif.</p>
<p>Saat ini, konsep "Desa Wisata" di Kedunggudel tengah dicanangkan oleh para tokoh masyarakat. Kehadiran buku ini diharapkan mampu melengkapi gagasan tersebut dengan menyediakan narasi sejarah yang komprehensif bagi khalayak umum. Penulis menyadari bahwa tulisan ini masih jauh dari sempurna, sehingga segala kritik dan saran senantiasa kami terima dengan tangan terbuka.</p>
<p>Wassalamu'alaikum wr. wb.</p>
<br>
<p>Penulis,<br><strong>Drs. H. Mulyono & Sehono</strong></p>`
  },
  {
    layout: 'layout-e',
    image: 'assets/Sungai Begawan Solo 1.webp',
    imageAlt: 'Sungai Bengawan Solo',
    content: `
<h2 class="page-chapter-title">I. RIWAYAT DESA KEDUNGGUDEL DAN MASJID DARUSSALAM</h2>
<p>Catatan sejarah desa ini menjadi saksi bisu yang terbagi ke dalam tiga pembabakan waktu penting. Ketiga babak tersebut meliputi Dekade Sebelum Islam, Dekade Perjuangan, dan Dekade Paska Peperangan.</p>
<p><strong>A. DEKADE SEBELUM ISLAM</strong></p>
<p>Sebelum kehadiran Islam, sistem kepercayaan masyarakat lokal masih sangat dipengaruhi oleh ajaran Hinduisme. Pada masa itu, wilayah ini dikenal dengan nama Desa Gisikan. Berkat letak geografisnya yang dilingkari oleh aliran Sungai Bengawan Solo, Desa Gisikan berhasil berkembang pesat menjadi pusat perdagangan utama di kawasan Jawa bagian selatan.</p>
<p>Roda perekonomian Desa Gisikan digerakkan oleh menjamurnya berbagai industri kerajinan dan kuliner lokal. Beberapa komoditas unggulan masyarakat meliputi kain batik, tenun sarung menggunakan Alat Tenun Bukan Mesin (ATBM), serta aneka makanan tradisional seperti karak, jenang, rasikan, dan emping melinjo. Kemakmuran ini perlahan mengundang kedatangan para pedagang Gujarat yang berlabuh untuk berniaga sekaligus menyiarkan agama Islam.</p>
<p>Di tempat lain pada tahun 1478, berdirilah Kerajaan Demak Bintoro sebagai pusat kekuasaan Islam pertama di tanah Jawa. Perkembangan pesat kerajaan ini tidak lepas dari peran aktif majelis Wali Songo. Salah satu anggota majelis yang paling mahsyur dalam metode dakwah kulturalnya adalah <strong>Sunan Kalijogo</strong>.</p>
`
  },
  {
    layout: 'layout-d',
    content: `<h2 style="text-align:center; margin-bottom:5%;">Lanjutan: Perjalanan Kyai Lombok</h2>
<p>Ketenaran nama Sunan Kalijogo sebagai ulama besar rupanya terdengar hingga ke pesisir Pulau Lombok. Terdorong oleh dahaga spiritual, seorang pemuda asal Lombok rela menempuh perjalanan jauh menuju Demak demi berguru kepada beliau. Kegigihan pemuda tersebut membuahkan hasil, sehingga ia diangkat menjadi murid dan diberi gelar <strong>"Kyai Lombok"</strong>.</p>
<p>Setelah sekian lama menimba ilmu, Sunan Kalijogo memerintahkan Kyai Lombok untuk berdakwah ke arah barat laut Gunung Gajah Mungkur. Berbekal tekad yang bulat, Kyai Lombok berjalan menelusuri hutan dan perkampungan. Perjalanan panjang tersebut akhirnya membawa beliau tiba di Desa Gisikan, sebuah wilayah subur yang dikelilingi kelokan Sungai Bengawan Solo menyerupai delta.</p>
<p>Setibanya di Desa Gisikan, Kyai Lombok disambut oleh <strong>Kyai Sodiq</strong> yang merupakan tokoh masyarakat setempat. Kyai Lombok menyampaikan niat tulusnya untuk membimbing warga Gisikan mendalami agama Islam. Ajakan tersebut disambut dengan tangan terbuka, sehingga terbentuklah rutinitas baru warga: berniaga di siang hari dan memperdalam Islam di malam hari.</p>
<p>Pendekatan dakwah kultural melalui kesenian dan sarasehan terbukti sangat efektif di mata warga. Perlahan namun pasti, dominasi paham Hinduisme di desa tersebut mulai meluntur dan tergantikan oleh syariat Islam. Seiring bertambahnya jumlah jemaah, muncullah gagasan mulia untuk mendirikan sebuah surau sebagai pusat ibadah dan pendidikan.</p>
<p>Pada suatu hari, Kyai Lombok menemukan dua batang pohon tanjung yang tumbuh kembar berdampingan, lalu ia menamainya pohon Gendayaan. Beliau kemudian memohon izin kepada Kyai Sodiq untuk mengubah nama Desa Gisikan menjadi <strong>"Dayak Dampit"</strong> (bermakna kembar). Permohonan tersebut dikabulkan, dan warga pun mulai menggunakan nama baru tersebut sebagai identitas desa mereka.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h2 style="text-align:center; margin-bottom:4%;">SEJARAH NAMA DESA KEDUNGGUDEL</h2>
<p>Hubungan erat antara Kyai Sodiq dan Kyai Lombok berujung pada perjodohan Kyai Lombok dengan putri Kyai Sodiq. Dari pernikahan agung tersebut, lahirlah seorang putra bernama Gampang yang kelak dikenal sebagai <strong>Kyai Gampang</strong>. Terkait perubahan nama desa menjadi Kedunggudel, terdapat tiga versi sejarah yang berkembang di masyarakat:</p>
<ol style="font-size:13px; line-height:1.7; margin-left:16px; margin-bottom:10px; font-style:italic;">
  <li style="margin-bottom:6px;">Versi pertama menyebutkan bahwa nama desa diubah setelah seekor anak kerbau (gudel) kesayangan Kyai Lombok secara tragis tenggelam di kedung (palung sungai) Bengawan Solo. Peristiwa nahas tersebut memicu pergantian nama Dayak Dampit menjadi <strong>Kedunggudel</strong>.</li>
  <li style="margin-bottom:6px;">Versi kedua berkisah tentang seorang Demang yang meminta pasokan ikan melimpah dari makhluk gaib penguasa kedung. Sebagai imbalan atas ikan tersebut, sang Demang harus merelakan anak kerbaunya dijadikan tumbal gaib. Untuk mengenang perjanjian tersebut, desa ini dinamakan <strong>Kedunggudel</strong>.</li>
  <li style="margin-bottom:6px;">Versi ketiga meninjau dari kacamata filsafat. <em>Kedung</em> melambangkan tempat yang sangat dalam, sedangkan <em>gudel</em> merepresentasikan generasi muda. Kedunggudel bermakna sebagai kawah candradimuka untuk mencetak tunas bangsa. Hal ini dibuktikan dengan pesatnya kemajuan desa dalam berbagai bidang, di antaranya:
    <ul style="margin-top:4px; margin-left:14px;">
      <li>Pertumbuhan masif Perserikatan Muhammadiyah dan lembaga pesantren;</li>
      <li>Lahirnya para ahli ekonomi dan saudagar perdagangan;</li>
      <li>Ciptaan produk makanan yang menjadi ciri khas daerah;</li>
      <li>Pelestarian kesenian Islami bernuansa Hadrah;</li>
      <li>Tradisi unik pernikahan di masjid yang diiringi tabuhan jedor berkeliling desa.</li>
    </ul>
  </li>
</ol>
<p>Seiring pesatnya syiar Islam, masyarakat Dayak Dampit bergotong royong mendirikan sebuah tempat ibadah di sebelah barat pohon kembar. Bangunan suci ini kelak disepakati dengan nama <strong>Masjid Tiban</strong>, yang sukses menjadi episentrum kegiatan keagamaan terpadu.</p>
<p>Hingga akhir hayatnya, para perintis desa dimakamkan di kompleks masjid. Kyai Lombok dan Kyai Gampang dimakamkan di sisi barat Masjid Tiban, sedangkan pusara sang istri (Nyai Lombok) berada terpisah di sebelah timur masjid.</p>`
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
<p style="margin-bottom: 8px;">Memasuki tahun 1675, pecahlah sebuah konflik politik antara penguasa Kerajaan Mataram, Amangkurat I (1675-1677), dengan otoritas spiritual Giri Kedaton. Ketegangan ini dipicu oleh kecurigaan keraton terhadap pesatnya perkembangan jaringan pesantren. Amangkurat I menganggap kedekatan jaringan pesantren dengan wilayah Jawa Timur berpotensi mengancam stabilitas politik Mataram.</p>
<p style="margin-bottom: 8px;">Buntut dari sentimen kecurigaan tersebut, pasukan Mataram melancarkan agresi fisik yang berujung pada penghancuran pesantren dan berbagai tempat ibadah. Tragedi kelam ini turut meluluhlantakkan infrastruktur keagamaan di Desa Kedunggudel. Akibatnya, laju perkembangan syiar Islam di desa ini terpaksa mengalami masa suram dan kelumpuhan sementara.</p>`
  },
  {
    layout: 'layout-h',
    content: `<h4 style="text-align: center; margin-bottom: 10px; font-family: inherit; font-size: 13.5px;">1. MASA PERANG DIPONEGORO</h4>
<p style="margin-bottom: 10px;">Rentang tahun 1825 hingga 1830 menjadi saksi bisu kobaran api perlawanan bangsa Indonesia terhadap kolonialisme Belanda. Perjuangan suci ini dipelopori oleh Pangeran Diponegoro yang gagah berani mengangkat senjata. Desa Kedunggudel turut memainkan peran krusial sebagai titik kumpul rahasia dalam menyusun strategi perlawanan.</p>
<p style="margin-bottom: 10px;">Dalam catatan sejarah, Pangeran Diponegoro tercatat sering menggelar pertemuan tertutup dengan Pakubuwono IV di Masjid Kedunggudel. Sayangnya, pergerakan bawah tanah ini akhirnya terendus oleh intelijen militer Belanda. Sebagai tindakan balasan, pasukan Belanda melancarkan invasi yang berujung pada kehancuran Desa Kedunggudel untuk kali kedua.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">PEMUGARAN & SENGKALAN</h4>
<p style="margin-bottom: 5px;">Seusai Perang Diponegoro mereda, para kiai dan tokoh agama setempat bahu-membahu menata ulang serpihan kehidupan di Desa Kedunggudel. Pelopor kebangkitan kembali desa ini dipimpin oleh sejumlah tokoh terkemuka, di antaranya:</p>
<ol type="a" style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>K.R.M.T. Taruna Negara;</li>
    <li>Pangeran Selarong;</li>
    <li>Kyai Jamsari;</li>
    <li>Kyai Gampang;</li>
    <li>Kyai Slamet.</li>
</ol>
<p style="margin-bottom: 10px;">Para sesepuh tersebut menggelar musyawarah mufakat untuk merestorasi fisik bangunan Masjid Kedunggudel. Niat mulia ini bahkan mendapatkan dukungan dan restu penuh dari Sri Susuhunan Pakubuwono VIII (Pangeran Purboyo).</p>
<p style="margin-bottom: 10px;">Prosesi pemugaran masjid secara resmi dilaksanakan pada hari Minggu Pon, tanggal 18 Jumadil Awal tahun 1765 H. Momen bersejarah ini diabadikan melalui sebuah sengkalan (candra sengkala) berbunyi "MARGANING RASA PANDITA NABI" yang bermakna angka LIMA NENEM PITU TUNGGAL (1765 H). Prasasti sengkalan ini lantas diukir untuk mengenang titik balik kebangkitan Masjid Tiban.</p>
<p style="margin-bottom: 10px;">Di sisi lain, pasca-perang, banyak pengikut setia Pangeran Diponegoro yang memutuskan untuk menanggalkan seragam keprajuritan mereka. Para mantan laskar perang tersebut lebih memilih beralih peran mengenakan jubah pendakwah (mubalig) untuk menyiarkan agama secara damai.</p>
<p style="margin-bottom: 10px;">Pergeseran strategi ini membuahkan hasil manis, sehingga syiar Islam di Kedunggudel kembali bersemi dan menorehkan kemajuan pesat. Keharuman nama Kedunggudel bahkan sampai terdengar ke telinga Sri Susuhunan Pakubuwono IX (Bangun Topo), yang akhirnya berkenan <em>tedhak</em> (berkunjung) demi menjalin silaturahmi dengan para kiai setempat.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">2. MASA PERANG KEMERDEKAAN</h4>
<p style="margin-bottom: 10px;">Menghadapi Agresi Militer Belanda II pada tahun 1949, posisi geografis Desa Kedunggudel kembali memegang peran vital. Desa ini ditunjuk oleh para pejuang kemerdekaan sebagai markas sentral Pemerintahan Karesidenan Surakarta Selatan. Pemilihan lokasi ini didasarkan pada tata letak daerah yang strategis serta karakter masyarakatnya yang sangat kooperatif dalam melindungi para gerilyawan.</p>
<p style="margin-bottom: 5px;">Beberapa tokoh besar Republik Indonesia yang pernah bermarkas di Desa Kedunggudel meliputi:</p>
<ol type="a" style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>Jenderal Gatot Subroto;</li>
    <li>Residen Sudiro;</li>
    <li>Komandan PMB Mayor N. Sunaryo;</li>
    <li>Komandan STE Letkol Mursito.</li>
</ol>
<p style="margin-bottom: 10px;">Kehadiran para tokoh militer ini sukses membakar gelora nasionalisme penduduk setempat. Semangat juang tersebut terus dikobarkan melalui alunan musik keroncong, yang syair-syairnya disisipi pesan perjuangan dan cinta tanah air.</p>
<p style="margin-bottom: 10px;">Pergerakan masif di Kedunggudel rupanya berhasil diendus oleh jaringan mata-mata Belanda. Puncaknya terjadi pada hari Rabu, 1 Syawal 1949, tepat ketika warga tengah khusyuk menunaikan salat Idulfitri. Menyadari adanya manuver ancaman keamanan yang mendekat, para pejuang segera menginisiasi evakuasi taktis meninggalkan Kedunggudel demi menghindari korban sipil yang lebih besar.</p>
<p style="margin-bottom: 10px;">Keesokan harinya pada 2 Syawal 1949, pesawat tempur Belanda melancarkan serangan brutal dengan membombardir desa sebanyak 21 kali. Atas kuasa dan perlindungan Allah Swt., dari puluhan bom yang dijatuhkan, hanya satu peluru kendali yang berhasil meledak. Ledakan tersebut menghancurkan serambi utara masjid dan secara tragis merenggut enam nyawa warga sipil.</p>
<p style="margin-bottom: 5px;">Belanda juga menargetkan beberapa rumah warga yang dituduh sebagai basis perlindungan gerilyawan, di antaranya:</p>
<ol type="a" style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>Kediaman Bapak Parto Siswoyo;</li>
    <li>Kediaman Bapak Cipto Diharjo;</li>
    <li>Kediaman Bapak Sosroharjo;</li>
    <li>Kediaman Ibu Kartono;</li>
    <li>Kediaman Bapak Jo Sumarto.</li>
</ol>
<p style="margin-bottom: 10px;">Beruntungnya, operasi militer Belanda tersebut gagal membuahkan hasil karena para gerilyawan RI telah lebih dulu mengamankan diri. Terdapat fenomena gaib saat konvoi pasukan Belanda tertahan di Desa Krecekan (sebelah utara Kedunggudel). Mereka mengaku terhalang oleh penampakan tembok raksasa sehingga terpaksa memutar rute ke Desa Banmati. Setibanya di sana untuk menyerang dari sisi timur, ilusi tembok raksasa kembali menghalangi pandangan mereka.</p>
<p style="margin-bottom: 10px;">Terlepas dari logika peperangan, warga Kedunggudel meyakini fenomena tersebut sebagai wujud perlindungan metafisik. Penduduk percaya bahwa desa mereka masih senantiasa <em>dijangkung</em> (dijaga) oleh karomah roh Kyai Lombok, Nyai Lombok, dan Kyai Gampang selaku cikal bakal pembabat alas daerah tersebut.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 5px; font-family: inherit; font-size: 13.5px;">C. DEKADE PASKA PEPERANGAN</h4>
<p style="text-align: center; margin-bottom: 15px; font-weight: bold; font-size: 11.5px;">(Struktur Pemerintahan Kademangan)</p>
<p style="margin-bottom: 12px;">Sebelum Negara Kesatuan Republik Indonesia memproklamasikan kemerdekaan, sistem birokrasi di Kedunggudel masih menerapkan struktur feodal. Wilayah ini berstatus sebagai daerah Kademangan yang secara administratif tunduk di bawah payung keraton Nagari Dalem Surakarta Hadiningrat. Oleh karena itu, roda pemerintahan sehari-hari dikendalikan penuh oleh seorang Demang secara turun-temurun yang melapor langsung kepada pihak keraton.</p>
<p style="margin-bottom: 8px;">Dalam catatan sejarah, Kyai Demang Rengga Suwarno tercatat sebagai penguasa Kademangan Kedunggudel yang terakhir. Guna menopang jalannya pemerintahan, beliau dibantu oleh jajaran aparatur desa yang terdiri dari:</p>
<ol style="margin-top: 0; margin-bottom: 12px; padding-left: 20px;">
    <li style="margin-bottom: 5px;"><strong>Bekel (Ki Karya Niman):</strong> Bertindak selaku kepala lingkungan yang mengayomi warga;</li>
    <li style="margin-bottom: 5px;"><strong>Modin (Ki Soma Sajad):</strong> Mengurus pelayanan bidang sosial keagamaan, seperti prosesi pernikahan hingga pengurusan jenazah;</li>
    <li style="margin-bottom: 5px;"><strong>Ulu-ulu (Ki Suro):</strong> Bertanggung jawab mengatur sistem irigasi demi menunjang hasil pertanian;</li>
    <li style="margin-bottom: 5px;"><strong>Jogoboyo (Ki Kerta Mrajak):</strong> Bertugas sebagai garda terdepan dalam menjaga stabilitas keamanan wilayah kademangan.</li>
</ol>
<p style="margin-bottom: 10px;">Adapun pusat operasional pemerintahan kademangan dijalankan langsung dari kediaman pribadi Kyai Demang, yang oleh masyarakat setempat lazim disebut sebagai Ndemangan.</p>`
  },
  {
    layout: 'layout-k',
    image: 'assets/Sungai Begawan Solo 3.webp',
    imageAlt: 'Meluapnya Bengawan Solo',
    caption: 'Sungai Begawan Solo',
    content: `<h4 style="text-align: center; margin-bottom: 10px; font-family: inherit; font-size: 13.5px;">KETEGANGAN POLITIK &<br>"BEDAH SOLO"</h4>
<p style="margin-bottom: 10px;">Memasuki tahun 1960, Kyai Demang yang mulai uzur memutuskan untuk mengangkat seorang asisten demi menjaga kelancaran administrasi desa. Pada era yang sama, Bapak Sujita berhasil merintis pendirian perpustakaan desa sebagai mercusuar literasi. Sayangnya, ketenangan desa mulai goyah ketika regulasi Undang-Undang Pokok Agraria (Land Reform) diterbitkan, yang memaksa kaum priayi Kedunggudel kehilangan hak kepemilikan atas tanah dan sawah mereka di luar daerah.</p>
<p style="margin-bottom: 10px;">Puncak eskalasi ketegangan memuncak pada tahun 1965 seiring dengan gejolak perpolitikan nasional. Masyarakat Kedunggudel tidak luput dari pusaran konflik ideologi, yang berimbas pada terbelahnya polarisasi warga ke dalam tiga kubu partai besar, yakni PKI, PNI, dan Masyumi.</p>
<p style="margin-bottom: 10px;">Setahun berselang setelah friksi politik mereda, Kedunggudel justru dihadapkan pada ujian alam. Pada tahun 1966, luapan dahsyat Sungai Bengawan Solo menenggelamkan desa bak lautan, sebuah tragedi yang kelak dikenang dengan sebutan "Bedah Solo". Di tengah masa pemulihan bencana tersebut, Kyai Demang resmi purnatugas pada tahun 1967, sebelum akhirnya berpulang menghadap Sang Pencipta pada 1 Juli 1969.</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">ERA KEEMASAN<br>(TAHUN 70-AN)</h4>
<p style="margin-bottom: 5px;">Babak baru sistem demokrasi desa dimulai pada tahun 1968 melalui penyelenggaraan Pemilihan Kepala Desa (Pilkades) perdana. Pesta demokrasi ini diramaikan oleh lima orang kandidat, yakni:</p>
<ol style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li>Bapak Pono Suharjo;</li>
    <li>Bapak Cipto Isman;</li>
    <li>Bapak Tiknyo;</li>
    <li>Bapak Dalhari;</li>
    <li>Bapak Wanto Diharjo.</li>
</ol>
<p style="margin-bottom: 10px;">Secara tak terduga, Pilkades pertama ini sekaligus menjadi ajang Pilkades terakhir bagi sistem Kademangan Kedunggudel. Kontestasi politik tersebut akhirnya dimenangkan secara mutlak oleh mantan asisten demang, yakni Bapak Pono Suharjo.</p>
<p style="margin-bottom: 8px;">Stabilitas politik nasional pada dekade 70-an membawa angin segar bagi kemajuan masyarakat pedesaan. Industri skala kecil di Kedunggudel tumbuh bak jamur di musim hujan, menjadikannya magnet bagi para pencari kerja dari luar daerah. Laju perekonomian yang masif ini sukses memicu lompatan prestasi warga di berbagai sektor kehidupan, meliputi:</p>
<ol style="margin-top: 0; margin-bottom: 12px; padding-left: 20px;">
    <li style="margin-bottom: 6px;"><strong>Pendidikan:</strong> Berdirinya sekolah dasar unggulan di saat wilayah sekitarnya belum memiliki akses pendidikan setara;</li>
    <li style="margin-bottom: 6px;"><strong>Olahraga:</strong> Dominasi pemuda Kedunggudel dalam menyabet gelar juara tingkat kabupaten dan provinsi, khususnya pada cabang sepak bola, dayung, voli, dan bulu tangkis;</li>
    <li style="margin-bottom: 6px;"><strong>Kesenian:</strong> Lahirnya maestro seni dan menjamurnya kelompok karawitan, seni tari, orkes keroncong, serta grup rebana jedoran santri di bawah asuhan almarhum Bapak Tejo, Kismo, dan Yadi;</li>
    <li style="margin-bottom: 6px;"><strong>Keagamaan:</strong> Semaraknya perayaan hari besar Islam yang berpusat di masjid, disusul dengan swadaya warga dalam memugar peninggian lantai masjid pada tahun 1979;</li>
    <li style="margin-bottom: 6px;"><strong>Teknologi:</strong> Tingginya daya beli warga yang ditandai dengan kepemilikan masal atas barang elektronik modern dan kendaraan bermotor.</li>
</ol>
<p style="margin-bottom: 10px; font-style: italic; text-align: center;">"Di masa keemasan inilah, denyut nadi Kedunggudel berdetak kencang menyerupai gemerlapnya Kampung Laweyan di jantung Kota Surakarta."</p>`
  },
  {
    layout: 'layout-j',
    image: 'assets/Sungai Begawan Solo 6.webp',
    imageAlt: 'Sungai Bengawan Solo',
    caption: 'Pelurusan Alur Sungai Bengawan Solo (1992)',
    content: `<h4 style="text-align: center; margin-bottom: 12px; font-family: inherit; font-size: 13.5px;">PERUBAHAN GEOGRAFIS & MEREDUPNYA PERDAGANGAN</h4>
<p style="margin-bottom: 10px;">Roda zaman terus berputar, masa keemasan Kedunggudel pun perlahan menemui senjakala pada awal era 1990-an. Gempuran industrialisasi modern membuat sektor industri kecil kelimpungan karena gagal bersaing secara kapasitas dan harga. Efek domino dari fenomena ini menyebabkan banyak pengusaha lokal gulung tikar, yang bermuara pada kemunduran drastis di berbagai sendi kehidupan masyarakat.</p>
<p style="margin-bottom: 10px;">Di sektor kepemudaan, dinamika internal pada tahun 1991 memicu terpecahnya organisasi pemuda desa menjadi tiga fraksi yang mewakili masing-masing Rukun Warga (RW). Hilangnya rasa persatuan ini berdampak fatal pada sulitnya merajut kembali kekompakan demi mengukir prestasi gemilang seperti dekade sebelumnya.</p>
<p style="margin-bottom: 10px;">Pukulan terberat bagi urat nadi perekonomian desa terjadi pada tahun 1992 akibat adanya intervensi geografis. Pemerintah memutuskan untuk mematikan kelokan sungai di sebelah barat kampung demi memuluskan proyek pelurusan alur Bengawan Solo. Kebijakan ini serta-merta melumpuhkan fungsi jalur penyeberangan tradisional di selatan desa, sehingga memutus total akses para saudagar dari Kecamatan Tawangsari menuju pasar Kedunggudel.</p>`
  },
  {
    layout: 'layout-m',
    content: `<h4 style="text-align: center; margin-bottom: 10px; font-family: inherit; font-size: 13.5px;">RENOVASI & PENETAPAN "MASJID DARUSSALAM"</h4>
<p style="margin-bottom: 8px;">Kebangkitan taraf ekonomi masyarakat ternyata berbanding lurus dengan meningkatnya kesadaran spiritual religius. Menjelang akhir 1970-an, muncul desakan kuat dari warga untuk kembali merenovasi fisik bangunan masjid. Rencana pemugaran pada tahun 1979 ini didasari oleh intensitas banjir musiman yang kerap membawa endapan lumpur, sehingga memaksa struktur lantai masjid harus ditinggikan.</p>
<p style="margin-bottom: 8px;">Semangat peremajaan rumah ibadah berlanjut pada tahun 1985 dengan dibentuknya panitia khusus untuk memperluas area serambi dan pawastren. Setahun kemudian, setelah seluruh proyek pemugaran dinyatakan rampung, panitia pembangunan resmi dibubarkan. Melalui proses musyawarah mufakat bersama warga, bangunan suci yang menyimpan sejuta sejarah itu lantas dianugerahi nama baru, yakni <strong>Masjid Darussalam</strong>.</p>
<p style="margin-bottom: 5px;">Demi menjaga kelestarian dan kelancaran kegiatan peribadatan, warga mendelegasikan wewenang pengelolaan masjid kepada struktur dewan takmir perdana. Komposisi kepengurusan Takmir Masjid Darussalam diamanatkan kepada para tokoh berikut:</p>
<ul style="margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
    <li style="margin-bottom: 4px;"><strong>Ketua:</strong> Bapak Warsono;</li>
    <li style="margin-bottom: 4px;"><strong>Keuangan:</strong> Bapak H. Sumartono Hadi;</li>
    <li style="margin-bottom: 4px;"><strong>Sekretaris:</strong> Bapak Muhammad Hani.</li>
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
<p style="margin-bottom: 8px;">Menuliskan rentetan panjang sejarah layaknya menebar sebutir pasir di lautan lepas; tampak sangat kecil dan tak kasatmata. Walau demikian, penulis memendam secercah harapan agar karya sederhana ini mampu memperkaya khazanah ilmu pengetahuan masyarakat. Perekaman jejak masa lampau ini merupakan ikhtiar nyata demi membentengi kelestarian budaya daerah dari gerusan arus modernisasi teknologi.</p>
<p style="margin-bottom: 8px;">Pada pengujung lembaran narasi ini, izinkanlah penulis untuk menghaturkan beberapa patah kata penutup:</p>
<ol style="margin-top: 0; margin-bottom: 12px; padding-left: 20px;">
    <li style="margin-bottom: 6px;">Terima kasih yang tak terhingga kami sampaikan kepada seluruh narasumber tepercaya atas kesediaannya berbagi ingatan yang menjadi fondasi literatur sejarah ini;</li>
    <li style="margin-bottom: 6px;">Penulis memanjatkan doa, semoga penuangan gagasan historis ini mampu membuka mata generasi penerus akan luhurnya potensi yang tersimpan di tanah kelahiran mereka;</li>
    <li style="margin-bottom: 6px;">Kami menyadari sepenuhnya bahwa penyusunan buku ini masih diwarnai kekurangan akibat terbatasnya bahan rujukan dan literatur pendukung;</li>
    <li style="margin-bottom: 6px;">Tiada gading yang tak retak, tiada pula untaian kata yang luput dari salah. Penulis memohon pintu maaf yang sebesar-besarnya atas segala kekeliruan yang mungkin terselip dalam penyampaian sejarah ini.</li>
</ol>
<p style="text-align: center; font-weight: bold; margin-top: 15px; font-size: 13px; letter-spacing: 1px;">TERIMA KASIH</p>`
  },
  {
    layout: 'layout-d',
    content: `<h4 style="text-align: center; margin-bottom: 20px; font-family: inherit; font-size: 13.5px; letter-spacing: 1px;">DAFTAR PUSTAKA</h4>

<ol style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Muh. Hani</strong> — Riwayat Berdirinya Masjid Kedunggudel (1990).</li>
    <li style="margin-bottom: 8px;"><strong>Bupati Sukoharjo: Bp. Tejo Suminto</strong> — Dalam pidato kunjungannya di Masjid Darussalam (1990).</li>
    <li style="margin-bottom: 8px;"><strong>Prof. Dr. Kuncaraningrat</strong> — Kebudayaan Jawa Tengah.</li>
    <li style="margin-bottom: 8px;"><strong>Prof. Dr. Much Ardam</strong> — Al Quran dan Sufisme Mangkunegoro IV.</li>
    <li style="margin-bottom: 8px;"><strong>Dr. Suharto</strong> — Narasumber (Saksi Sejarah).</li>
    <li style="margin-bottom: 8px;"><strong>Abdul Samad Muhtadi Raharjo</strong> — Narasumber (Saksi Sejarah).</li>
    <li style="margin-bottom: 8px;"><strong>Jarwo Sujito</strong> — Narasumber (Saksi Sejarah).</li>
    <li style="margin-bottom: 8px;"><strong>Parto Siswoyo</strong> — Narasumber (Saksi Sejarah).</li>
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

  // Deteksi mode Portrait (jika lebar < tinggi layar)
  const isPortrait = availableWidth < availableHeight;
  
  // Gunakan rasio yang lebih lebar di PC (3:4) agar mengisi kekosongan,
  // dan rasio standar buku (2:3) di HP.
  const pageRatio = isPortrait ? (2 / 3) : (3 / 4); 

  let bookWidth, bookHeight;

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
  let targetIndex = startIndex !== undefined ? startIndex : 0;
  
  if (pageFlip) {
    // Simpan halaman saat ini jika tidak ada startIndex yang diberikan (untuk resize)
    targetIndex = startIndex !== undefined ? startIndex : pageFlip.getCurrentPageIndex();
    pageFlip.destroy();
  }
  
  // Wajib dibersihkan agar container bisa shrink (mengecil) saat window mengecil
  flipbookEl.innerHTML = '';
  flipbookEl.removeAttribute('style');
  flipbookEl.className = 'flipbook';
  
  createFlipbook(targetIndex);
}

function createFlipbook(startPage) {
  const size = calculateBookSize();
  const wrapper = document.querySelector('.flipbook-wrapper');
  const isPortrait = (wrapper.clientWidth - 20) < (wrapper.clientHeight - 20);

  pageFlip = new St.PageFlip(flipbookEl, {
    width: size.width,
    height: size.height,
    size: 'fixed',
    showCover: !isPortrait, // Matikan showCover di HP untuk mencegah bug animasi cover terangkat
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
        <div class="layout-d" style="display: flex; flex-direction: column; height: 100%; padding: 6% 7%; box-sizing: border-box;">
          <div class="content-wrapper custom-scroll" style="flex: 1; padding-bottom: 20px; padding-right: 15px; text-align: left; font-size: 13px; line-height: 1.7; color: #2c2c2c; font-family: var(--font-serif);">
            ${data.content}
          </div>
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

    // --- CUSTOM VISUAL SCROLLBAR UNTUK MOBILE (iOS/Android) ---
    // Karena iOS menyembunyikan scrollbar bawaan, kita buat scrollbar buatan
    const scrollContainers = pageDiv.querySelectorAll('.custom-scroll');
    scrollContainers.forEach(container => {
      const track = document.createElement('div');
      track.className = 'mobile-scrollbar-track';
      const thumb = document.createElement('div');
      thumb.className = 'mobile-scrollbar-thumb';
      track.appendChild(thumb);
      
      container.parentElement.style.position = 'relative';
      container.parentElement.appendChild(track);
      
      const updateScrollbar = () => {
        // Jika belum memiliki dimensi (misal disembunyikan oleh StPageFlip), jangan lakukan apapun
        if (container.clientHeight === 0) return;

        if (container.scrollHeight > container.clientHeight) {
          track.style.display = 'block';
          track.style.top = container.offsetTop + 'px';
          track.style.height = container.clientHeight + 'px';
          // Posisi track di ujung kanan elemen custom-scroll
          track.style.left = (container.offsetLeft + container.offsetWidth - 6) + 'px';
          
          const scrollRatio = container.clientHeight / container.scrollHeight;
          thumb.style.height = `${Math.max(scrollRatio * 100, 15)}%`;
          
          const scrollPercent = container.scrollTop / (container.scrollHeight - container.clientHeight);
          const maxThumbScroll = track.clientHeight - thumb.clientHeight;
          thumb.style.transform = `translateY(${scrollPercent * maxThumbScroll}px)`;
        } else {
          track.style.display = 'none';
        }
      };
      
      container.addEventListener('scroll', updateScrollbar);
      
      // Menggunakan ResizeObserver agar scrollbar langsung ter-update saat halaman 
      // yang sebelumnya tersembunyi (display: none) menjadi terlihat oleh StPageFlip.
      const observer = new ResizeObserver(() => {
        updateScrollbar();
      });
      observer.observe(container);
    });

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

  // LOGIKA ANIMASI FLIP (Cepat & Halus)
  // Karena bug bentrok klik St.PageFlip sudah diblokir oleh Capture Phase,
  // kita sekarang bisa menggunakan animasi bawaan yang sangat indah ini dengan aman.
  
  // Kita percepat sedikit animasinya khusus untuk lompatan dari Daftar Isi (500ms)
  const originalTime = window.pageFlip.getSettings().flippingTime;
  if (window.pageFlip.setting) {
    window.pageFlip.setting.flippingTime = 500;
  }

  // Lakukan animasi lompat halaman!
  window.pageFlip.flip(targetIndex);
  
  // Tunggu animasi hampir selesai, lalu kedipkan halaman target
  setTimeout(() => {
    flashPage(targetIndex);
    // Kembalikan kecepatan normal (800ms) untuk membalik halaman biasa
    if (window.pageFlip.setting) {
      window.pageFlip.setting.flippingTime = originalTime;
    }
  }, 600);
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

// Fix untuk masalah 100vh di mobile browser (Safari/Chrome)
function setBodyHeight() {
  document.body.style.height = window.innerHeight + 'px';
}
window.addEventListener('resize', setBodyHeight);
setBodyHeight();

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
  setBodyHeight();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      initFlipbook();
    });
  } else {
    initFlipbook();
  }

  // Modal Logic (Instruction)
  const modal = document.getElementById('instruction-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modal && modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  // Image Zoom Lightbox Logic
  const zoomModal = document.getElementById('image-zoom-modal');
  const zoomImg = document.getElementById('zoomed-image');
  const zoomCloseBtn = document.getElementById('zoom-close-btn');
  const bookWrapper = document.querySelector('.flipbook-wrapper');

  if (bookWrapper && zoomModal && zoomImg) {
    // Mencegah StPageFlip memproses mousedown/touchstart pada gambar
    const stopFlip = (e) => {
      if (e.target.tagName === 'IMG') {
        e.stopPropagation();
      }
    };
    bookWrapper.addEventListener('mousedown', stopFlip, true);
    bookWrapper.addEventListener('touchstart', stopFlip, true);
    bookWrapper.addEventListener('pointerdown', stopFlip, true);
    bookWrapper.addEventListener('mouseup', stopFlip, true);
    bookWrapper.addEventListener('touchend', stopFlip, true);
    bookWrapper.addEventListener('pointerup', stopFlip, true);

    bookWrapper.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        e.stopPropagation();
        e.preventDefault();
        zoomImg.src = e.target.src;
        zoomModal.classList.remove('hidden');
      }
    }, true);
  }

  if (zoomModal && zoomCloseBtn) {
    const closeZoom = () => {
      zoomModal.classList.add('hidden');
    };
    zoomCloseBtn.addEventListener('click', closeZoom);
    zoomModal.addEventListener('click', (e) => {
      if (e.target === zoomModal) closeZoom();
    });
  }
});
