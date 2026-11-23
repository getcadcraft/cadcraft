---
title: Sisipkan dari file atau pustaka
summary: Bawa blok, atau seluruh gambar, dari DWG atau DXF lain, dan tempatkan item dari Pustaka, file, atau pustaka lain, beserta atribusi dan pembaruannya.
keywords: sisipkan, file, pustaka, librarycraft, item, peralatan, blok dari gambar lain, wblock, design center, atribusi, lisensi, pembaruan, feed, item.json
from: f6e4e452
---

## Menyisipkan blok dari gambar lain

1. Ketik `I` lalu tekan {{key:Enter}}, atau klik {{ui:Sisipkan}} di grup Blok.
2. Baris perintah di bagian bawah jendela menanyakan `Enter block name or [File/Library]`. Ketik `F` di sana lalu tekan {{key:Enter}}.
3. Pilih DWG atau DXF di komputer ini. Ia dibaca di sini; tidak dibuka, dan tidak ada yang diunggah.
4. Di dialog {{ui:Sisipkan dari}}, pilih blok dari daftar (ketik di {{ui:Filter blok}} untuk mencarinya), atau biarkan {{ui:Seluruh gambar}}. Klik {{ui:Sisipkan}}.
5. Klik di tempat ia akan diletakkan, dan isi atribut apa pun yang diminta.

Anda juga dapat mulai dari panel {{ui:Blok}}: ketik `F` di kotak {{ui:Filter blok}} lalu tekan {{key:Enter}}, atau ketik sesuatu yang tidak cocok dengan blok mana pun dan klik {{ui:Dari file…}}. `L` dan {{ui:Pustaka…}} membuka pustaka dengan cara yang sama. Sebelum versi 0.10.1, huruf yang diketik di {{ui:Filter blok}} hanya mencari blok gambar ini dan menjawab "No block matches the filter."

Untuk menyimpan gambar blok Anda sendiri agar mudah dijangkau, klik {{ui:Tambahkan gambar}} di bawah {{ui:Pustaka}} di panel {{ui:Blok}} dan pilih DWG atau DXF. Bloknya terdaftar dengan gambarnya; klik salah satu untuk menempatkannya.

Seluruh gambar masuk sebagai satu blok yang dinamai sesuai file. Blok di dalam blok yang Anda pilih ikut masuk. Lapisan yang dipakainya ditambahkan ke gambar ini.

Jika gambar lain memakai satuan berbeda (misalnya inci dan milimeter), CadCraft menskalakan referensi agar sesuai dan menyebutkannya di riwayat.

### Saat sebuah nama sudah dipakai

Jika gambar ini sudah memiliki blok dengan nama yang sama, CadCraft bertanya:

- {{ui:Pertahankan yang ada}} memakai blok gambar ini dengan nama itu.
- {{ui:Ganti nama}} memasukkan yang baru sebagai `Name (2)`.

Seluruh penyisipan adalah satu langkah: {{key:Mod+Z}} menghapus referensi dan definisi yang disalin.

## Membuka pustaka

Klik {{ui:Pustaka…}} di panel {{ui:Blok}}, atau {{ui:Pustaka}} di grup Blok, atau ketik `LIB`. Pada prompt `INSERT`, `L` juga membukanya.

Pustaka memiliki empat sumber, sebagai tab:

- {{ui:Pustaka}}: pustaka CadCraft. Cari berdasarkan nama, pembuat, atau model, dan saring berdasarkan kategori.
- {{ui:File…}}: file item (`item.json`) dari pustaka mana pun, atau gambar, lembar kerja, atau model 3D untuk membuat item: DWG atau DXF (setiap blok menjadi item), CSV dengan kolom nama dan ukuran, atau model glTF atau OBJ. Tidak ada yang diunggah.
- {{ui:Standar}}: profil baja (sebagai potongan, tampak, atau batang 3D) dan suku cadang standar seperti baut, mur, dan bantalan, dibuat di sini dari tabel yang diterbitkan. Lihat [Tempatkan profil baja dan suku cadang standar](topic:steel-and-standard-parts).
- {{ui:Feed lain}}: pustaka lain yang menjawab dengan cara yang sama seperti Pustaka. Tambahkan alamatnya sekali; peramban ini mengingatnya.

Setiap kartu menampilkan pratinjau, nama, pembuat dan model, lisensi, dan versi. Item yang ditarik ditandai {{ui:Ditarik}} dengan alasannya; CadCraft bertanya sebelum Anda menempatkannya.

## Menempatkan item

1. Klik {{ui:Tempatkan}} pada kartu.
2. Klik di tempat item akan diletakkan. Ketik `R` terlebih dahulu untuk memutarnya, atau `S` untuk menskalakannya.
3. Pada `Enter Item number (CC-ITEM)`, tekan {{key:Enter}} untuk nomor kosong berikutnya, atau ketik nomor Anda sendiri.

Item menjadi blok bernama `LIB_<name>_v<version>`, digambar dalam satuan gambar ini. Jika gambar tidak memiliki satuan, item masuk dalam milimeter dan riwayat menyebutkannya; atur {{ui:Satuan}} di panel kanan terlebih dahulu.

Datanya ikut sebagai atribut tak terlihat: id dan versi item, lisensi dan atribusi, pembuat, model, kategori, dan ukuran. Lihat [Atribut blok](topic:attributes).

## Item dalam bahasa Anda

Sebuah item dapat membawa namanya dan deskripsinya dalam bahasa lain. Jika ada dalam bahasa yang diatur CadCraft (Pengaturan › Umum › Bahasa), kartu dan nama item blok yang ditempatkan memakainya. Blok itu sendiri tetap memakai nama yang dibuat dari nama item, sehingga gambar memiliki satu blok per item, apa pun bahasa yang dipakai untuk menempatkannya.

## Memeriksa pembaruan

1. Buka pustaka.
2. Klik {{ui:Periksa pembaruan}}.

Setiap item pustaka di gambar terdaftar dengan nomor itemnya dan apakah ia mutakhir, memiliki versi yang lebih baru (dan apa yang berubah), atau telah ditarik. Klik {{ui:Perbarui}} pada baris, atau {{ui:Perbarui semua}}. Setiap referensi berpindah ke blok versi baru dan mempertahankan nomor item, kuantitas, tempat, sudut, dan layernya. {{key:Mod+Z}} membatalkan pembaruan.

## Cantumkan yang Anda gunakan

Klik {{ui:Atribusi pustaka}}. Setiap item terdaftar dengan baris atribusi dan lisensinya.

- {{ui:Salin atribusi}} menyalin baris satu item; {{ui:Salin semua}} menyalin setiap baris.
- {{ui:Unduh CSV}} menyimpan daftar dengan nomor item, pembuat, model, lisensi, dan atribusi. Ia dapat dibuka di lembar kerja apa pun.

Lisensi seperti CC BY meminta Anda mencantumkan nama penulis di tempat Anda memakai karya itu. Letakkan barisnya di gambar, di spesifikasi, atau di catatan proyek.

## Simbol dan aset

Pustaka memiliki tiga jenis item: Simbol (konvensi gambar, 2D), Tipe (dari apa elemen dibuat), dan Aset (objek fisik). Di tab {{ui:Pustaka}}, daftar {{ui:Jenis item}} menampilkan Simbol dan aset bersama, hanya Simbol, atau hanya Aset. Tipe adalah bahan proyek BimCraft, sehingga CadCraft tidak mendaftarkannya.

## Masuk ke pustaka

Klik {{ui:Masuk ke pustaka}}. Jendela kecil terbuka di situs; setelah Anda masuk di sana, CadCraft dapat menampilkan item tim Anda dan mencatat apa yang Anda tempatkan, sehingga Anda diberi tahu saat item yang Anda pakai berubah. Masuknya berlaku untuk tab peramban ini. Cabut kapan saja dari halaman keamanan akun Anda.

## Simpan objek Anda di Objek saya

{{ui:Objek saya}} adalah daftar pribadi di Pustaka yang hanya dapat Anda lihat. Ia tidak ada di pustaka publik, tidak dalam pencarian, dan tidak ditampilkan kepada tim Anda, dan ia mengikuti akun Anda ke setiap komputer tempat Anda masuk ke pustaka.

1. Di panel Pustaka, klik {{ui:File…}} dan baca sebuah file.
2. Pada item yang ingin Anda pakai lagi, klik {{ui:Simpan di objek saya}}.
3. Nanti, klik {{ui:Objek saya}} lalu klik {{ui:Tempatkan}}. Ia ditempatkan seperti item pustaka lainnya, dan {{ui:Periksa pembaruan}} mencakupnya.
4. {{ui:Hapus dari objek saya}} mengeluarkannya dari daftar. Salinan yang sudah ditempatkan di gambar tetap ada.

Anda harus masuk ke pustaka. Membaca file tidak mengunggah apa pun; menyimpan item hanya mengirim item itu ke akun Anda.

:::note
Objek saya sedang diuji dan mungkin belum dibuka untuk akun Anda. Jika muncul "My objects is not open for this account yet", Anda tetap dapat menempatkan item dari file Anda sendiri dengan {{ui:File…}}.
:::

## Kesalahan umum

- **"Making items from IFC types is in BimCraft."** File IFC dan family dibaca di aplikasi BimCraft. Buat item di sana atau di Pustaka, lalu gunakan `item.json`-nya di sini.
- **"The library could not be reached."** Anda luring, atau pustakanya sedang mati. Item yang sudah ada di gambar tidak terpengaruh.
- **Sebuah item terlalu besar atau terlalu kecil.** Satuan gambar salah atau belum diatur. Urungkan, atur {{ui:Satuan}}, lalu tempatkan lagi.
