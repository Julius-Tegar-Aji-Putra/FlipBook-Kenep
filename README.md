# FlipBook Kenep
## Dokumen Sejarah Digital Interaktif Desa Kedunggudel

---

## Deskripsi Sistem

FlipBook Kenep adalah sebuah dokumen sejarah digital berbasis web yang menampilkan riwayat, potensi, dan kekayaan budaya Desa Kenep — khususnya kawasan Kedunggudel dan Masjid Darussalam — dalam format buku interaktif yang dapat dibolak-balik halamannya secara digital.

Proyek ini dirancang agar dapat diakses dengan mudah oleh siapa saja, termasuk perangkat ponsel pintar maupun komputer. Fitur-fitur utama yang tersedia meliputi:

- Animasi membalik halaman yang realistis layaknya buku fisik.
- Navigasi cepat (Quick Jump) untuk melompat langsung ke halaman tertentu.
- Tampilan yang menyesuaikan ukuran layar secara otomatis (responsif).
- Fitur perbesaran foto (Lightbox) dengan mengetuk gambar.

Proyek ini dibangun sepenuhnya menggunakan HTML, CSS, dan JavaScript murni tanpa kerangka kerja yang kompleks. Animasi halaman buku menggunakan pustaka pihak ketiga bernama StPageFlip yang dimuat secara daring.

---

## Cara Penggunaan (Akses)

### Akses Langsung di Komputer Lokal

Tidak diperlukan instalasi perangkat lunak apa pun. Cukup ikuti langkah berikut:

1. Pastikan seluruh berkas proyek berada dalam satu folder yang sama (misalnya folder bernama `KKN`).
2. Buka folder tersebut menggunakan Windows Explorer.
3. Klik dua kali pada berkas `index.html`.
4. Buku digital akan terbuka secara otomatis di peramban (browser) bawaan komputer Anda.

> **Catatan Penting:** Koneksi internet tetap diperlukan untuk memuat animasi halaman buku. Apabila koneksi internet tidak tersedia, animasi tidak akan berfungsi, tetapi teks dan gambar di dalam buku tetap dapat dibaca.

### Navigasi di Dalam Buku

| Tindakan | Cara |
|---|---|
| Membalik ke halaman berikutnya | Klik tombol panah kanan ( > ) atau geser layar ke kiri |
| Membalik ke halaman sebelumnya | Klik tombol panah kiri ( < ) atau geser layar ke kanan |
| Melompat ke halaman tertentu | Klik kapsul nomor halaman di bagian bawah layar |
| Memperbesar foto | Klik atau ketuk foto yang ingin dilihat lebih besar |

---

## Struktur File Utama

```
KKN/
|
|-- index.html       <- File utama kerangka halaman buku
|-- style.css        <- File pengatur tampilan visual
|-- script.js        <- File logika dan konten buku
|
|-- assets/
    |-- (foto-foto dalam format .webp)
    |-- JAWAPALSU.TTF   <- File huruf (font) dekoratif
```

### Penjelasan Setiap File

**`index.html`**
Merupakan kerangka utama halaman web. File ini memuat struktur dasar antarmuka, termasuk judul di bagian atas, area tampilan buku, tombol navigasi, serta beberapa jendela pop-up (modal). Staf umumnya tidak perlu mengubah file ini.

**`style.css`**
Berisi seluruh pengaturan tampilan visual, seperti warna, ukuran teks, tata letak, animasi tombol, dan desain latar belakang. File ini tidak perlu diubah kecuali ada permintaan perubahan desain secara menyeluruh.

**`script.js`**
Merupakan jantung dari proyek ini. File ini memuat dua hal utama:
1. Seluruh **konten teks dan data** dari setiap halaman buku (tersimpan dalam variabel `BOOK_PAGES` di baris 10 ke bawah).
2. Seluruh **logika program**, seperti animasi membalik halaman, sistem navigasi cepat, dan perbesaran foto.

**Folder `assets/`**
Berisi semua berkas gambar (berformat `.webp`) yang digunakan di dalam halaman-halaman buku, serta berkas huruf dekoratif (`.TTF`) untuk judul.

---

## Panduan Pembaruan Konten

Bagian ini adalah panduan khusus bagi staf Kelurahan yang ingin memperbarui isi buku digital di masa mendatang. Bacalah dengan saksama sebelum melakukan perubahan apa pun.

> **Peringatan:** Sebelum melakukan perubahan apa pun, sangat dianjurkan untuk membuat salinan cadangan (backup) dari seluruh folder proyek terlebih dahulu. Tindakan ini mencegah kehilangan data apabila terjadi kesalahan yang tidak disengaja.

---

### Bagian 1: Cara Memperbarui Teks Tulisan Sejarah

Seluruh teks konten buku sejarah tersimpan di dalam file **`script.js`**.

**Langkah-langkah:**

1. Buka file `script.js` menggunakan aplikasi teks editor. Aplikasi yang dianjurkan adalah **Notepad++** (gratis) atau **Visual Studio Code** (gratis). Hindari menggunakan Notepad bawaan Windows karena dapat merusak format kode.

2. Di baris paling atas file tersebut, terdapat variabel utama bernama `BOOK_PAGES`. Variabel ini adalah sebuah daftar yang merangkum data seluruh 23 halaman buku.

3. Setiap halaman dalam daftar tersebut ditandai dengan tanda kurung kurawal buka (`{`) dan tutup (`}`). Konten teks pada masing-masing halaman berada di dalam properti `content:`.

4. Gunakan fitur **Cari (Find)** pada aplikasi teks editor (biasanya dengan menekan `Ctrl + F`) untuk mencari penggalan kata yang ingin diubah, kemudian ganti dengan teks yang baru.

**Contoh penggalan kode yang berisi teks:**
```javascript
{
  layout: 'layout-d',
  content: `<h2>SAMBUTAN LURAH KENEP</h2>
<p>Pemerintah Kelurahan Kenep memberikan apresiasi...</p>`
}
```
Teks yang dapat diubah adalah bagian di dalam tanda kutip di antara `<p>` dan `</p>`.

**Pemetaan Isi Tiap Halaman (Panduan Cari Cepat):**

Gunakan tabel berikut sebagai panduan untuk menemukan letak teks yang ingin diubah. Cukup cari kata kunci yang tercantum di kolom "Kata Kunci Pencarian" menggunakan fitur `Ctrl + F`.

| Nomor Halaman | Judul/Isi | Kata Kunci Pencarian |
|:---:|---|---|
| 1 | Halaman Sampul (Judul Buku) | `NGUNGAK SEJARAH` |
| 2 | Daftar Isi | `DAFTAR ISI` |
| 3 | Sambutan Lurah Kenep | `SAMBUTAN LURAH KENEP` |
| 4 | Kata Pengantar | `KATA PENGANTAR` |
| 5 | Riwayat Desa dan Dekade Sebelum Islam | `DEKADE SEBELUM ISLAM` |
| 6 | Lanjutan: Perjalanan Kyai Lombok | `Lanjutan: Perjalanan Kyai Lombok` |
| 7 | Sejarah Nama Desa Kedunggudel | `SEJARAH NAMA DESA KEDUNGGUDEL` |
| 8 | Gisikan sebagai Pusat Perdagangan | `perusahaan kecil diantaranya` |
| 9 | Lanjutan: Perjalanan Kyai Lombok (versi asli) | `Perjalanan Kyai Lombok` |
| 10 | Tragedi Anak Kerbau Gudel | `banyak versi yang sama-sama punya argument` |
| 11 | Berdirinya Masjid Tiban | `BERDIRINYA MASJID TIBAN` |
| 12 | Konflik Politik Kerajaan Mataram | `KONFLIK MATARAM` |
| 13 | Masa Perang Diponegoro | `MASA PERANG DIPONEGORO` |
| 14 | Pemugaran dan Prasasti Sengkalan | `PEMUGARAN` |
| 15 | Masa Perang Kemerdekaan | `MASA PERANG KEMERDEKAAN` |
| 16 | Struktur Pemerintahan Kademangan | `DEKADE PASKA PEPERANGAN` |
| 17 | Ketegangan Politik dan Bedah Solo | `KETEGANGAN POLITIK` |
| 18 | Era Keemasan Tahun 70-an | `ERA KEEMASAN` |
| 19 | Perubahan Geografis dan Meredupnya Perdagangan | `PERUBAHAN GEOGRAFIS` |
| 20 | Renovasi dan Penetapan Masjid Darussalam | `MASJID DARUSSALAM` |
| 21 | Potret Lawas Bengawan Solo | `Bengawan Solo, urat nadi` |
| 22 | Penutup | `II. PENUTUP` |
| 23 | Daftar Pustaka | `DAFTAR PUSTAKA` |

5. Setelah selesai mengedit, simpan file dengan menekan `Ctrl + S`.
6. Klik dua kali pada `index.html` untuk membuka kembali buku digital dan pastikan perubahan sudah tampil dengan benar.

---

### Bagian 2: Cara Mengganti Foto

Seluruh berkas foto tersimpan di dalam folder **`assets/`**. Cara mengganti foto cukup sederhana dan tidak memerlukan perubahan kode program sama sekali.

**Daftar Foto yang Digunakan dalam Buku:**

| Nama Berkas | Digunakan pada Halaman |
|---|:---:|
| `Gapura Desa Kreatif Kenep.webp` | 1 (Sampul) |
| `Sungai Begawan Solo 1.webp` | 5, 21 |
| `Sungai Begawan Solo 2.webp` | 12 |
| `Sungai Begawan Solo 3.webp` | 17 |
| `Sungai Begawan Solo 4.webp` | 21 |
| `Sungai Begawan Solo 6.webp` | 19 |
| `Gudel.webp` | 10 |
| `Pangeran Diponegoro.webp` | 13 |
| `Pakubuwono IV.webp` | 13 |
| `Desa Wisata Kreatif.webp` | 22 |

**Prosedur Mengganti Foto:**

1. Siapkan foto pengganti yang baru.
2. **Konversikan foto baru tersebut ke dalam format `.webp`** menggunakan layanan daring gratis seperti `https://squoosh.app` atau `https://cloudconvert.com`. Format `.webp` wajib digunakan agar sistem dapat membacanya.
3. **Ganti nama file foto baru tersebut** agar sama persis dengan nama file foto lama yang ingin digantikan. Perhatikan huruf besar dan kecil, termasuk spasi pada nama file.

    Contoh: Apabila ingin mengganti foto sampul, ubah nama file foto baru menjadi:
    ```
    Gapura Desa Kreatif Kenep.webp
    ```

4. **Salin (copy) file foto baru** tersebut ke dalam folder `assets/`.
5. Apabila sistem meminta konfirmasi untuk **menimpa (replace) file yang sudah ada**, pilih **Ya (Yes)**. Proses penggantian foto pun selesai.
6. Muat ulang (refresh) halaman buku digital di peramban untuk memastikan foto baru sudah tampil.

> **Catatan Penting:** Nama file baru harus benar-benar identik dengan nama file lama, termasuk penulisan huruf kapital dan spasi. Kesalahan pada nama file akan mengakibatkan foto tidak muncul di dalam buku (halaman akan tampak kosong).

---

## Informasi Teknis

| Keterangan | Detail |
|---|---|
| Teknologi yang Digunakan | HTML5, CSS3, JavaScript (Vanilla) |
| Pustaka Animasi | StPageFlip v2.0.7 (dimuat dari CDN) |
| Jumlah Halaman | 23 halaman |
| Format Gambar | WebP (.webp) |
| Kompatibilitas | Google Chrome, Mozilla Firefox, Microsoft Edge, Safari (versi terbaru) |

---

## Kontak Pengembang

Apabila terdapat kendala teknis yang tidak dapat diselesaikan secara mandiri berdasarkan panduan ini, silakan menghubungi pengembang awal proyek untuk mendapatkan bantuan lebih lanjut.

---

*Dokumen ini dibuat untuk keperluan operasional dan pemeliharaan proyek FlipBook Kenep.*
