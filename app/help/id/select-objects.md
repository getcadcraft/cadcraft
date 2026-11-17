---
title: Pilih objek
summary: Pilih objek satu per satu, dengan jendela atau silang, sebelum atau selama perintah, dan keluarkan objek dari pilihan.
keywords: pilih, pilihan, jendela, silang, noun-verb, pilih, semua, terakhir, sebelumnya, pagar, buang, tambah, tab, siklus, tumpang tindih, qselect, pilih cepat, filter, pilih yang serupa, selectsimilar, shift, batalkan pilihan, ctrl+a, pickfirst
from: 676508c7
---

## Yang akan Anda pelajari

Cara memilih objek yang dikerjakan sebuah perintah. CadCraft memiliki dua cara kerja, dan keduanya sama baiknya:

- **Pilih dulu, lalu perintah** (noun-verb). Pilih objek, lalu ketik `M` untuk Pindahkan. Perintah mengambil pilihan Anda dan langsung melanjutkan ke pertanyaan berikutnya.
- **Perintah dulu, lalu pilih** (verb-noun). Ketik `M`; perintah menanyakan `Pilih objek:`; Anda memilih, lalu menekan {{key:Enter}}.

## Pilih satu objek dalam satu waktu

1. Tanpa perintah yang berjalan, klik sebuah garis. Garis itu disorot dan gagangnya (kotak kecil) muncul. Panel kanan menampilkan propertinya.
2. Klik objek lain. Objek itu ditambahkan ke pilihan.
3. Tahan {{key:Shift}} dan klik objek yang terpilih. Objek itu dikeluarkan dari pilihan.
4. Tekan {{key:Esc}}. Tidak ada yang terpilih.

## Jendela dan silang

Klik sekali di ruang kosong, gerakkan, dan klik lagi: sebuah persegi panjang. Menekan dan menyeret menggambar laso bebas sebagai gantinya, dengan dua jenis yang sama (lihat [Pemilihan laso](topic:lasso-selection); Pengaturan dapat membuat seretan menggambar persegi panjang). Objek yang Anda dapatkan bergantung pada arahnya:

| Anda bergerak | Kotak | Memilih |
|---|---|---|
| Kiri ke kanan | Jendela | Hanya objek **sepenuhnya di dalam** kotak |
| Kanan ke kiri | Silang | Objek di dalam kotak **dan** objek yang disentuhnya |

1. Gambar beberapa garis dan lingkaran yang saling tumpang tindih.
2. Klik ruang kosong di sebelah kiri beberapa objek, gerakkan ke kanan, dan klik lagi. Hanya objek yang sepenuhnya di dalam yang terpilih.
3. Tekan {{key:Esc}}.
4. Klik ruang kosong di sebelah kanan, gerakkan ke kiri melintasi beberapa objek, dan klik lagi. Semua yang disentuh kotak terpilih.
5. Tahan {{key:Shift}} dan gambar kotak atau laso di atas beberapa objek yang sudah terpilih. Objek itu keluar dari pilihan.

## Pilih, lalu jalankan perintah

1. Pilih dua lingkaran.
2. Ketik `M` dan tekan {{key:Enter}}.

Riwayat menampilkan `2 dipilih`, dan prompt langsung ke `Tentukan titik dasar`. Selesaikan pemindahan (lihat [Pindahkan, salin, putar, skala dan cerminkan](topic:modify-objects)).

Saat sebuah perintah selesai, pilihan dihapus, sehingga perintah berikutnya dimulai dari awal.

Perintah yang menerima pilihan dengan cara ini: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} dan {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} dan {{cmd:CHAMFER}} selalu meminta Anda memilih objek satu per satu; {{cmd:TRIM}} dan {{cmd:EXTEND}} menerima satu pilihan atau jalur yang Anda seret melewati potongan-potongannya (lihat [Pangkas dan perpanjang](topic:trim-and-extend)).

## Jalankan perintah, lalu pilih

1. Pastikan tidak ada yang terpilih ({{key:Esc}}).
2. Ketik `E` dan tekan {{key:Enter}}. Prompt berbunyi `Pilih objek:`.
3. Klik objek, atau seret jendela dan silang. Riwayat menghitung setiap pilihan (`1 dipilih`, `3 dipilih`).
4. Tekan {{key:Enter}}, tekan {{key:Space}} atau klik kanan untuk selesai memilih.

Objek dihapus dan riwayat menyebutkan berapa banyak.

Pada prompt `Pilih objek:` Anda juga dapat mengetik:

- `ALL`, lalu {{key:Enter}}: setiap objek yang dapat Anda edit di tab yang terbuka.
- `L` (atau `LAST`), lalu {{key:Enter}}: objek yang paling baru digambar.
- `P` (Sebelumnya): objek yang dikerjakan perintah terakhir, jika masih ada.
- `F` (Pagar): klik atau ketik titik-titik sepanjang sebuah garis; setiap objek yang dilintasi garis itu ditambahkan. Tekan {{key:Enter}} untuk mengakhiri pagar; `U` menarik kembali titik terakhirnya.
- `W` (Jendela) atau `C` (Silang): dua sudut, ke arah mana pun Anda menyeret.
- `R` (Buang): mulai sekarang, klik, jendela dan pagar akan **mengeluarkan** objek. Prompt berbunyi `Buang objek:`. `A` (Tambah) kembali ke mode semula.
- `?`: daftar opsi-opsi ini di riwayat.

Opsi-opsi ini tidak ditampilkan di prompt, seperti di AutoCAD.

## Pilih satu dari beberapa objek yang saling menumpuk

Jika objek tumpang tindih atau bersentuhan, klik mengambil yang terdekat. Untuk mendapatkan objek lain:

1. Tahan penunjuk diam di atas titik itu.
2. Tekan {{key:Tab}}. Objek berikutnya di sana disorot, dan bilah status menyebutkan yang mana ("2 dari 3: Garis pada layer Walls").
3. Tekan {{key:Tab}} lagi sampai yang Anda inginkan disorot, lalu klik tanpa menggerakkan.

Menggerakkan penunjuk memulai dari awal. Ini bekerja tanpa perintah yang berjalan, pada `Pilih objek:`, dan di mana pun sebuah perintah meminta Anda memilih satu objek.

## Pilih berdasarkan aturan: Pilih cepat

{{cmd:QSELECT}} (`QS`, atau {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Pilih cepat}}) memilih setiap objek yang cocok dengan sebuah aturan, misalnya setiap lingkaran dengan radius di bawah 50, atau setiap blok referensi bernama DOOR-900.

1. Buka {{ui:Pilih cepat}}.
2. Pilih {{ui:Jenis objek}} (daftar menghitung setiap jenis), lalu {{ui:Properti}}: {{ui:Layer}}, {{ui:Warna}}, dan untuk beberapa jenis {{ui:Panjang}}, {{ui:Radius}}, {{ui:Luas}}, {{ui:Tinggi teks}}, {{ui:Isi teks}}, {{ui:Nama blok}} atau {{ui:Pola hatch}}.
3. Pilih {{ui:Operator}} dan {{ui:Nilai}}. `*` cocok dengan wildcard (`DOOR-*`); {{ui:Pilih semua}} mengambil setiap objek dari jenis itu. Angka di bagian bawah menunjukkan berapa banyak yang cocok saat Anda memilih.
4. {{ui:Cara menerapkan}}: sertakan yang cocok, atau semua selain itu. {{ui:Terapkan ke}} {{ui:Pilihan saat ini}} mempersempit apa yang sudah Anda pilih; {{ui:Tambahkan ke pilihan saat ini}} menambahkannya.
5. Klik {{ui:Pilih}}. Lalu jalankan perintah yang Anda inginkan: ia memakai pilihan itu.

## Pilih yang serupa

Pilih satu atau beberapa objek dan ketik {{cmd:SELECTSIMILAR}} (`SIM`), atau pilih {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Pilih yang serupa}}. Setiap objek dengan jenis, layer dan warna yang sama akan terpilih; blok referensi juga memerlukan blok yang sama, dan hatch memerlukan pola yang sama. Ketik `SE` pada prompt `Pilih objek`-nya untuk memilih apa yang harus cocok.

## Pilih sekarang, pakai nanti

Ketik `SELECT` dan tekan {{key:Enter}}, pilih objek dengan salah satu cara di atas, lalu tekan {{key:Enter}}. Objek tetap terpilih untuk perintah berikutnya, dan `P` memilihnya kembali pada prompt `Pilih objek:` berikutnya.

## Pilih semuanya

Tanpa perintah yang berjalan, tekan {{key:Mod+A}}, atau pilih {{ui:Pilih semua}} di menu {{ui:Edit}} › {{ui:Lainnya}} pada bilah alat, untuk memilih setiap objek yang dapat Anda edit di tab yang terbuka. Jika Anda sudah mengetik sesuatu di baris perintah, {{key:Mod+A}} memilih teks itu: tekan {{key:Esc}} untuk menghapusnya terlebih dahulu. Pada prompt `Pilih objek:`, ketik `ALL`. {{ui:Batalkan pilihan}} di menu yang sama, atau {{key:Esc}}, menghapus pilihan.

:::tip
Jika Anda lebih suka setiap klik menggantikan pilihan (dan {{key:Shift}} menambahkannya), atur {{ui:Mengklik objek}} ke {{ui:Mengganti pilihan}} di [Pengaturan CadCraft](topic:settings).
:::

## Yang tidak dapat dipilih

- Objek pada layer yang **mati**, **dibekukan** atau **dikunci**. Objek terkunci tetap terlihat, dan Anda masih bisa men-snap ke sana, tetapi tidak dapat dipilih atau diubah.
- Pada tab lembar, model yang ditampilkan di dalam viewport. Anda memilih objek milik lembar itu sendiri (kepala gambar, catatan, bingkai viewport). Untuk mengedit model, buka tab {{ui:Model}}.

## Hapus dengan cepat

Pilih objek, lalu tekan {{key:Delete}} (atau {{key:Backspace}} ketika baris perintah tidak memiliki kursor). Pada keyboard Mac, tombol berlabel delete berfungsi setelah Anda mengklik gambar; saat baris perintah memiliki kursor, tekan fn dan delete bersamaan. Ini menjalankan {{cmd:ERASE}} pada pilihan. Jika tidak terjadi apa-apa, Anda mengetik sesuatu di baris perintah: tekan {{key:Esc}}, atau ketik `E` lalu tekan {{key:Enter}} sebagai gantinya.

## Kesalahan umum

- **Jendela mengambil terlalu sedikit.** Anda menyeret dari kiri ke kanan, yang hanya mengambil yang sepenuhnya di dalam. Seret dari kanan ke kiri untuk silang.
- **Klik di ruang kosong memulai sebuah kotak.** Satu klik di ruang kosong memulai jendela; klik kedua menyelesaikannya. Tekan {{key:Esc}} atau klik kanan untuk membatalkannya.
- **Klik di ruang kosong melepaskan pilihan.** Memang begitu, kecuali Anda menahan {{key:Shift}}. Untuk mempertahankan pilihan pada klik seperti itu dan menghapusnya hanya dengan {{key:Esc}}, atur {{ui:Mengklik tempat kosong}} ke {{ui:Mempertahankan pilihan}} di [Pengaturan CadCraft](topic:settings#clicking-an-empty-spot).
- **Perintah memakai objek yang tidak Anda maksud.** Sesuatu masih terpilih saat Anda memulainya. Tekan {{key:Esc}} sebelum perintah untuk memulai tanpa pilihan.
- **Tidak ada yang terpilih setelah perintah.** Itu disengaja: perintah yang selesai menghapus pilihan.
