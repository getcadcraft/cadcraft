---
title: Blok dinamis
summary: Apa yang dilakukan CadCraft dengan blok dinamis dalam DWG: mereka mempertahankan nama aslinya, menampilkan keadaan saat disimpan, berpindah keadaan visibilitas, menampilkan nilai lainnya, dan tetap dinamis saat disimpan.
keywords: blok dinamis, dynamic block, visibilitas, keadaan visibilitas, balik, regangkan, lookup, parameter, kustom, properti blok, *u blok, dinamis
from: dea2ee7c
---

## Yang berfungsi

Sebuah DWG yang dibuat dengan blok dinamis dibuka dengan blok-blok itu berfungsi sejauh ini:

- **Nama aslinya.** Blok dinamis terdaftar di panel {{ui:Blok}} dengan namanya sendiri ("Receptacle", "Sink"), bukan sebagai blok `*U` tanpa nama.
- **Keadaan saat disimpan.** Setiap referensi menampilkan persis apa yang ditampilkan program lain: keadaan visibilitas yang diaturnya, diregangkan atau dibalik seperti saat disimpan.
- **Berpindah keadaan visibilitas.** Pilih satu referensi (atau beberapa dari blok yang sama), buka {{ui:Properti}}, dan di bagian {{ui:Kustom}} pilih keadaan lain dari daftar {{ui:Visibilitas}}. Referensi langsung menampilkan keadaan itu, beserta atributnya: yang disembunyikan keadaan itu hilang, dan yang ditampilkannya muncul dengan nilainya. Referensi menyimpan setiap nilai, sehingga tidak ada yang kembali kosong; {{ui:Properti}} mendaftarkan yang tersembunyi dengan tanda "hidden". {{key:Mod+Z}} mengembalikan keadaan lama dalam satu langkah.
- **Grip.** Blok dinamis yang dipilih menampilkan grip sendiri di tempat parameternya berada: segitiga kecil untuk keadaan visibilitas (klik untuk daftar keadaan), panah di ujung jarak, dan panah ganda untuk balik. Hanya grip visibilitas yang berfungsi saat ini; yang lain menyebutkannya di bilah status.
- **Nilai lainnya, hanya baca.** Di bawah daftar visibilitas, {{ui:Kustom}} juga menampilkan jarak, sudut penjajaran, keadaan balik, dan titik blok seperti yang dipegang gambar.
- **Mengedit keadaan visibilitas.** Buka blok dengan {{cmd:BEDIT}}: editor menampilkan satu keadaan, yang dinamai di bilah di atas gambar (pilih yang lain di sana). Ketik {{cmd:BVSTATE}} untuk berpindah, menambah (menyembunyikan semuanya, menampilkan semuanya, atau mempertahankan yang tampil), mengganti nama, atau menghapus keadaan; {{cmd:BVHIDE}} menyembunyikan objek yang dipilih dalam keadaan yang sedang tampil; {{cmd:BVSHOW}} menampilkan yang tersembunyi dengan pudar sehingga Anda dapat mengklik yang ingin dikembalikan. Simpan blok: referensi yang diatur ke keadaan yang diganti namanya tetap memakainya dengan nama baru, dan yang diatur ke keadaan yang dihapus menampilkan keadaan pertama.
- **Tetap dinamis.** Disimpan sebagai DWG dalam versi tempat gambar itu berasal, blok tetap dinamis, dengan keadaan yang Anda pilih: program lain membukanya sebagai blok dinamis yang sama. Keadaan visibilitas yang Anda edit juga disimpan: nama barunya, keadaan yang Anda tambahkan, dan apa yang ditampilkan masing-masing.

## Yang hanya baca, atau belum ada

| Belum ada | Sebagai gantinya, saat ini |
|---|---|
| Mengubah jarak, sudut, atau balik (aksi regangkan, pindahkan, balik) | Ditampilkan hanya baca di {{ui:Kustom}}; ubah di program yang membuat blok itu. |
| Parameter lookup, XY, rotasi, dan polar | Belum dibaca: referensi ditampilkan seperti tersimpan. |
| Menyeret grip jarak, balik, dan titik | Menunjukkan tempat parameternya berada; grip visibilitas dan daftar {{ui:Visibilitas}} di Properti yang berpindah keadaan. |
| Membuat blok dinamis dari jenis program lain (regangkan, balik, lookup) | Blok yang Anda buat di CadCraft adalah blok biasa; {{cmd:BPARAMETER}} menyebutkannya. Parameter Anda sendiri dan beberapa parameter visibilitas ada di pengelola Parameter (lihat "Parameter dan keadaan visibilitas Anda sendiri" di bawah). |
| Menambah atau menghapus objek blok dengan keadaan visibilitas di editor blok | Blok kemudian disimpan sebagai blok biasa (editor menyebutkannya saat ditutup). |
| Mempertahankan sifat dinamis di versi DWG lain atau di DXF | Disimpan sebagai blok biasa yang menampilkan keadaan yang Anda pilih, dan penyimpanan menyebutkannya. |

:::note
Memindahkan atau mengubah objek di {{cmd:BEDIT}} mempertahankan blok dengan keadaan visibilitas tetap dinamis. Blok tanpa keadaan, atau blok yang objeknya ditambah atau dihapus di editor, menjadi blok biasa.
:::

## Parameter dan keadaan visibilitas Anda sendiri

Blok yang Anda buat di CadCraft dapat membawa parameternya sendiri dan **beberapa** parameter visibilitas, masing-masing dengan keadaannya sendiri. Ketik {{cmd:BPARAMS}} (atau `BPM`) untuk membuka **pengelola Parameter** bagi blok yang sedang Anda edit di {{cmd:BEDIT}}, bagi blok dari referensi yang dipilih, atau bagi blok yang Anda sebutkan namanya.

- **Parameter**: nama, jenis (angka, panjang, sudut, jumlah, ya/tidak), dan nilai atau rumus atas parameter lain (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Comes to}} menampilkan hasilnya. Rumus yang tidak berfungsi, atau nilai yang tidak sesuai jenisnya (jumlah 1,5), ditolak dan pengelola menyebutkan alasannya; tidak ada yang lain berubah.
- **Parameter visibilitas**: {{ui:Tambah parameter visibilitas}} membuat satu dengan keadaan pertama. Setiap keadaan dapat diganti namanya, dihapus (yang terakhir tetap ada), atau diberi angka "shows when". Sebuah rumus memilih keadaan dari parameter (keadaan yang angkanya cocok, atau jika tidak, keadaan di posisi itu dalam daftar); tanpa rumus, setiap referensi memilih sendiri.
- **Menempatkan objek dalam sebuah keadaan**: di editor blok, pilih objek, ketik {{cmd:BPARAMS}}, lalu klik {{ui:Letakkan objek yang dipilih di sini}} pada keadaan itu. Objek yang tidak tercantum di parameter visibilitas mana pun selalu tampil.
- **Referensi ini**: jika dimulai dari referensi yang dipilih, pengelola juga menampilkan nilai dan keadaan milik referensi itu.

Di luar editor blok, setiap perubahan adalah satu langkah urungkan. Di editor blok, perubahannya milik editor: {{ui:Simpan blok}} menyimpannya. `-BPARAMS` menanyakan hal yang sama di baris perintah.

**Dalam file.** DWG dan DXF menyimpan parameter, objek mana berada di keadaan mana, dan nilai milik setiap referensi, dalam catatan CadCraft sendiri; buka file lagi di CadCraft dan semuanya kembali. Program lain melihat setiap referensi sebagai blok dengan semua objeknya, karena DWG hanya memuat paling banyak satu parameter visibilitas per blok dari jenisnya sendiri. Referensi yang dipindahkan program lain, atau blok yang objeknya diubah program lain, kembali tanpa bagian yang sudah tidak sejajar (tidak ada yang ditebak).
