---
title: Blok dinamis
summary: Apa yang dilakukan CadCraft dengan blok dinamis dalam DWG: mereka mempertahankan nama aslinya, menampilkan keadaan saat disimpan, mengganti keadaan visibilitas, menampilkan nilai lainnya, dan tetap dinamis saat disimpan.
keywords: blok dinamis, visibilitas, keadaan visibilitas, flip, stretch, lookup, parameter, kustom, properti blok, blok *u, dynamic
from: 26b6aa80
---

## Yang berfungsi

DWG yang dibuat dengan blok dinamis dibuka dengan fungsi-fungsi berikut:

- **Nama aslinya.** Blok dinamis tercantum di panel {{ui:Blok}} dengan nama sendirinya ("Receptacle", "Sink"), bukan sebagai blok `*U` tanpa nama.
- **Keadaan saat disimpan.** Setiap referensi menampilkan persis apa yang ditampilkan program lain: keadaan visibilitas yang diatur, diregangkan atau dibalik seperti saat disimpan.
- **Mengganti keadaan visibilitas.** Pilih satu referensi (atau beberapa dari blok yang sama), buka {{ui:Properti}}, lalu di bagian {{ui:Kustom}} pilih keadaan lain dari daftar {{ui:Visibilitas}}. Referensi langsung menampilkan keadaan itu, begitu pula atributnya: yang disembunyikan oleh keadaan itu hilang, dan yang ditampilkannya muncul dengan nilainya. Referensi menyimpan setiap nilai, sehingga tidak ada yang kembali kosong; {{ui:Properti}} mencantumkan yang tersembunyi dengan tanda "tersembunyi". {{key:Mod+Z}} mengembalikan keadaan lama dalam satu langkah.
- **Grip.** Blok dinamis yang dipilih menampilkan grip-nya sendiri di tempat parameternya berada: segitiga kecil untuk keadaan visibilitas (klik untuk daftar keadaan), panah di ujung jarak, dan panah ganda untuk balik. Saat ini hanya grip visibilitas yang berfungsi; yang lain menyebutkannya di bilah status.
- **Nilai lainnya, hanya baca.** Di bawah daftar visibilitas, {{ui:Kustom}} juga menampilkan jarak, sudut penyejajaran, keadaan balik, dan titik blok seperti yang dimiliki gambar.
- **Mengedit keadaan visibilitas.** Buka blok dengan {{cmd:BEDIT}}: editor menampilkan satu keadaan, yang namanya tertera di bilah di atas gambar (pilih yang lain di sana). Ketik {{cmd:BVSTATE}} untuk berpindah, menambah (menyembunyikan semuanya, menampilkan semuanya, atau mempertahankan yang tampak), mengganti nama, atau menghapus keadaan. {{cmd:BVHIDE}} menyembunyikan objek yang dipilih dalam keadaan yang sedang tampil; {{cmd:BVSHOW}} menampilkan yang tersembunyi dengan memudar sehingga Anda dapat mengklik yang ingin dikembalikan. Simpan blok: referensi yang diatur ke keadaan yang diganti namanya tetap memakainya dengan nama barunya, dan yang diatur ke keadaan yang dihapus menampilkan keadaan pertama.
- **Tetap dinamis.** Disimpan sebagai DWG dalam versi tempat gambar masuk, blok tetap dinamis dengan keadaan yang Anda pilih: program lain membukanya sebagai blok dinamis yang sama. Keadaan visibilitas yang Anda edit juga disimpan: nama barunya, keadaan yang Anda tambahkan, dan apa yang ditampilkan masing-masing.

## Yang hanya dibaca, atau belum tersedia

| Belum tersedia | Sebagai gantinya, saat ini |
|---|---|
| Mengubah jarak, sudut, atau balik (aksi regang, pindah, balik) | Ditampilkan hanya baca di {{ui:Kustom}}; ubah di program yang membuat blok. |
| Parameter lookup, XY, rotasi, dan kutub | Belum dibaca: referensi ditampilkan seperti saat disimpan. |
| Menyeret grip jarak, balik, dan titik | Menunjukkan tempat parameternya berada; grip visibilitas dan daftar {{ui:Visibilitas}} di Properti yang mengganti keadaan. |
| Membuat blok dinamis (menambah parameter, atau keadaan visibilitas ke blok yang belum punya) | Blok yang Anda buat di CadCraft adalah blok biasa; {{cmd:BPARAMETER}} memberi tahu hal itu. |
| Menambah atau menghapus objek dari blok dengan keadaan visibilitas di editor blok | Blok kemudian disimpan sebagai blok biasa (editor memberi tahu saat ditutup). |
| Mempertahankan sifat dinamis di versi DWG lain atau di DXF | Disimpan sebagai blok biasa yang menampilkan keadaan yang Anda pilih, dan penyimpanan memberi tahu hal itu. |

:::note
Memindahkan atau mengubah objek di {{cmd:BEDIT}} mempertahankan blok dengan keadaan visibilitas tetap dinamis. Blok tanpa keadaan, atau blok yang objeknya ditambah atau dihapus di editor, menjadi blok biasa.
:::
