---
title: Sisipkan dari file atau pustaka
summary: Bawa blok, atau seluruh gambar, dari DWG atau DXF lain, dan letakkan item dari Pustaka, file, atau pustaka lain, lengkap dengan atribusi dan pembaruannya.
keywords: sisipkan, file, pustaka, librarycraft, item, peralatan, blok dari gambar lain, wblock, design center, kredit, atribusi, lisensi, pembaruan, feed, item.json
from: 316188d2
---

## Sisipkan blok dari gambar lain

1. Ketik `I` dan tekan {{key:Enter}}, atau klik {{ui:Sisipkan}} di grup Blok.
2. Pada `Masukkan nama blok atau [File/Pustaka (L)]`, ketik `F` dan tekan {{key:Enter}}.
3. Pilih DWG atau DXF di komputer ini. File dibaca di sini; ia tidak dibuka, dan tidak ada yang diunggah.
4. Pada dialog {{ui:Sisipkan dari}}, pilih blok dari daftar (ketik di {{ui:Filter blok}} untuk mencarinya), atau biarkan {{ui:Seluruh gambar}}. Klik {{ui:Sisipkan}}.
5. Klik di tempat blok akan diletakkan, lalu isi atribut apa pun yang diminta.

Seluruh gambar masuk sebagai satu blok yang dinamai menurut nama file. Blok di dalam blok yang Anda pilih ikut masuk. Layer yang digunakan ditambahkan ke gambar ini.

Jika gambar lain menggunakan satuan yang berbeda (misalnya inci dan milimeter), CadCraft menskalakan referensi agar sesuai dan memberi tahu hal itu di riwayat.

### Ketika nama sudah dipakai

Jika gambar ini sudah memiliki blok dengan nama yang sama, CadCraft akan bertanya:

- {{ui:Pertahankan yang ada}} memakai blok gambar ini dengan nama tersebut.
- {{ui:Ganti nama}} memasukkan yang baru sebagai `Nama (2)`.

Seluruh penyisipan adalah satu langkah: {{key:Mod+Z}} menghapus kembali referensi dan definisi yang disalin.

## Buka pustaka

Klik {{ui:Pustaka…}} di panel {{ui:Blok}}, atau {{ui:Pustaka}} di grup Blok, atau ketik `LIB`. Pada prompt `INSERT`, `L` juga membukanya.

Pustaka memiliki empat sumber, sebagai tab:

- {{ui:Pustaka}}: pustaka CadCraft. Cari berdasarkan nama, pembuat, atau model, dan saring berdasarkan kategori.
- {{ui:File…}}: file item (`item.json`) dari pustaka mana pun, atau gambar, spreadsheet, atau model 3D untuk membuat item: DWG atau DXF (setiap blok menjadi item), CSV dengan kolom nama dan ukuran, atau model glTF atau OBJ. Tidak ada yang diunggah.
- {{ui:Standar}}: profil baja (sebagai potongan, tampak, atau batang 3D) dan suku cadang standar seperti baut, mur, dan bantalan, dibuat di sini dari tabel yang dipublikasikan. Lihat [Tempatkan profil baja dan suku cadang standar](topic:steel-and-standard-parts).
- {{ui:Feed lain}}: pustaka lain yang menjawab dengan cara yang sama seperti Pustaka. Tambahkan alamatnya sekali; peramban ini akan mengingatnya.

Setiap kartu menampilkan pratinjau, nama, pembuat dan model, lisensi, serta versinya. Item yang ditarik ditandai {{ui:Ditarik}} beserta alasannya; CadCraft akan bertanya sebelum Anda menempatkannya.

## Tempatkan item

1. Klik {{ui:Tempatkan}} pada sebuah kartu.
2. Klik di tempat item akan diletakkan. Ketik `R` terlebih dahulu untuk memutarnya, atau `S` untuk mengubah skalanya.
3. Pada `Masukkan nomor Item (CC-ITEM)`, tekan {{key:Enter}} untuk nomor kosong berikutnya, atau ketik nomor Anda sendiri.

Item menjadi blok bernama `LIB_<nama>_v<versi>`, digambar dalam satuan gambar ini. Jika gambar tidak memiliki satuan, item dimasukkan dalam milimeter dan riwayat akan memberi tahu; atur {{ui:Satuan}} di panel kanan terlebih dahulu.

Datanya ikut sebagai atribut tak terlihat: id dan versi item, lisensi dan atribusi, pembuat, model, kategori, dan ukuran. Lihat [Atribut blok](topic:attributes).

## Item dalam bahasa Anda

Item dapat membawa nama dan deskripsinya dalam bahasa lain. Ketika item memilikinya dalam bahasa yang diatur di CadCraft (Pengaturan › Umum › Bahasa), kartu dan nama item pada blok yang ditempatkan menggunakan bahasa tersebut. Blok itu sendiri tetap memakai nama yang dibuat dari nama item, sehingga sebuah gambar memiliki satu blok per item, apa pun bahasa yang digunakan untuk menempatkannya.

## Periksa pembaruan

1. Buka pustaka.
2. Klik {{ui:Periksa pembaruan}}.

Setiap item pustaka dalam gambar didaftar dengan nomor itemnya dan apakah ia mutakhir, memiliki versi yang lebih baru (dan apa yang berubah), atau telah ditarik. Klik {{ui:Perbarui}} pada sebuah baris, atau {{ui:Perbarui semua}}. Setiap referensi berpindah ke blok versi baru dan mempertahankan nomor item, jumlah, tempat, sudut, dan layernya. {{key:Mod+Z}} membatalkan pembaruan.

## Cantumkan yang Anda gunakan

Klik {{ui:Atribusi pustaka}}. Setiap item didaftar beserta baris atribusi dan lisensinya.

- {{ui:Salin atribusi}} menyalin baris satu item; {{ui:Salin semua}} menyalin setiap baris.
- {{ui:Unduh CSV}} menyimpan daftar dengan nomor item, pembuat, model, lisensi, dan atribusi. Ia dapat dibuka di spreadsheet mana pun.

Lisensi seperti CC BY meminta Anda mencantumkan penulisnya di tempat Anda menggunakan karya tersebut. Letakkan barisnya di gambar, di spesifikasi, atau di catatan proyek.

## Simbol dan aset

Pustaka memiliki tiga jenis item: Simbol (konvensi gambar, 2D), Tipe (apa yang menyusun sebuah elemen), dan Aset (objek fisik). Pada tab {{ui:Pustaka}}, daftar {{ui:Jenis item}} menampilkan Simbol dan Aset bersama-sama, hanya Simbol, atau hanya Aset. Tipe adalah bahan penyusun proyek BimCraft, jadi CadCraft tidak mendaftarnya.

## Masuk ke pustaka

Klik {{ui:Masuk ke pustaka}}. Sebuah jendela kecil terbuka di situs; setelah Anda masuk di sana, CadCraft dapat menampilkan item tim Anda dan mencatat apa yang Anda tempatkan, sehingga Anda diberi tahu ketika item yang Anda gunakan berubah. Masuk berlaku untuk tab peramban ini. Cabut kapan saja dari halaman keamanan akun Anda.

## Kesalahan umum

- **"Membuat item dari tipe IFC ada di BimCraft."** File IFC dan keluarga dibaca di aplikasi BimCraft. Buat item di sana atau di Pustaka, lalu gunakan `item.json`-nya di sini.
- **"Pustaka tidak dapat dihubungi."** Anda sedang luring, atau pustaka sedang tidak aktif. Item yang sudah ada di gambar tidak terpengaruh.
- **Sebuah item terlalu besar atau terlalu kecil.** Satuan gambar salah atau belum diatur. Urungkan, atur {{ui:Satuan}}, lalu tempatkan lagi.
