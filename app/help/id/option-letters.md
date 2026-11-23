---
title: Beri opsi perintah huruf Anda sendiri
summary: Jawab opsi perintah dengan huruf yang Anda pilih, dalam bahasa apa pun, dari satu file teks yang dapat Anda sunting, impor, dan ekspor.
keywords: huruf opsi, optionkeys, optkeys, kata kunci opsi, keyword, ganti, pemetaan, sesuaikan, huruf sendiri, polar, array, P, PO, bahasa, terjemahkan opsi, bentuk singkat, impor, ekspor, ambigu
from: 7c8328c6
---

## Yang akan Anda pelajari

Cara mengubah huruf yang Anda ketik untuk menjawab opsi perintah. Misalnya, {{cmd:ARRAY}} meminta `[Rectangular/POlar]` dan menerima `PO` untuk Polar; Anda dapat membuat `P` atau huruf lain melakukan hal yang sama, dalam bahasa Anda sendiri jika mau.

## Cara opsi dijawab

Jika sebuah perintah menampilkan opsi dalam tanda kurung siku, huruf kapital itulah yang diketik: `POlar` adalah `PO`, `eXit` adalah `X`.

Anda juga dapat mengetik lebih sedikit huruf. Jika yang Anda ketik hanya cocok dengan satu opsi yang ditampilkan, CadCraft menerimanya: dengan `[Rectangular/POlar]`, huruf `P` saja berarti Polar. Jika cocok dengan dua opsi, baris perintah menyebutkan keduanya dan bertanya lagi:

```
C could be COUnt, COLumns. Type more letters.
```

Angka tidak pernah ditebak, jadi jarak atau jumlah yang diketik selalu dibaca sebagai angka.

## Menambahkan huruf Anda sendiri

Setiap perintah tetap memakai huruf bawaannya. Anda menambahkan huruf sendiri di atasnya, sehingga daftar Anda hanya berisi apa yang Anda ubah.

1. Buka {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Huruf opsi}} lalu klik {{ui:Edit…}}. Atau ketik {{cmd:OPTIONKEYS}} lalu tekan {{key:Enter}}.
2. Di bawah {{ui:Perintah}}, pilih perintahnya, misalnya `ARRAY`. Daftar memuat setiap perintah yang meminta opsi, dan dimulai dari perintah yang terakhir Anda pakai.
3. Di bawah {{ui:Opsi}}, pilih opsinya. Setiap opsi menampilkan huruf bawaannya dalam tanda kurung, misalnya `POlar (PO)`.
4. Di {{ui:Huruf Anda}}, ketik huruf yang Anda inginkan, misalnya `P`, lalu klik {{ui:Tambah}}.
5. Opsi itu sekarang muncul di bawah {{ui:Huruf Anda}} dengan huruf bawaannya dan huruf Anda. Klik {{ui:Simpan}}.

Mulai {{cmd:ARRAY}}, pilih objek, dan tekan {{key:Enter}}. Perintah menampilkan huruf Anda setelah opsi, `POlar (P)`, dan `P` menjawabnya.

Untuk menghapus satu huruf, klik tanda x di ujung barisnya lalu {{ui:Simpan}}. Opsi itu kembali hanya memakai huruf bawaannya.

## Huruf yang tidak bisa dipakai

Editor menolak huruf yang akan menyembunyikan sesuatu yang sudah dibaca baris perintah, dan menjelaskan alasannya:

- huruf bawaan opsi lain dari perintah yang sama (`R` untuk Polar di `ARRAY`, karena `R` adalah Rectangular);
- kata penangkap objek tiga huruf atau lebih, seperti `END`, `MID` atau `CEN`, serta kata `ALL` dan `LAST`;
- huruf yang sama untuk dua opsi berbeda dalam satu perintah.

Selama ada baris yang ditandai merah, {{ui:Simpan}} nonaktif: perbaiki baris atau hapus, dan tombol akan aktif kembali. Huruf bawaan sebuah perintah selalu didahulukan atas huruf Anda, jadi daftar Anda tidak akan pernah menghentikan jawaban bawaan. Huruf yang kebetulan merupakan nama perintah, seperti `L` atau `C`, tidak apa-apa: pada prompt opsi, baris perintah sedang membaca jawaban, bukan memulai perintah.

Opsi yang tercantum untuk sebuah perintah berasal dari perintah yang berbagi prompt yang sama, sehingga kadang sebuah perintah mencantumkan opsi yang hanya ditanyakannya dalam kondisi tertentu.

## Satu pilihan untuk setiap perintah

Di bawah {{ui:Perintah}}, pilih {{ui:Setiap perintah}}. Opsinya kemudian adalah semua opsi yang dimiliki perintah mana pun, seperti eXit atau Undo. Huruf yang Anda tambahkan di sana menjawab opsi itu di perintah mana pun yang menawarkannya. Huruf yang ditambahkan untuk satu perintah didahulukan atas pilihan ini.

## Huruf dalam bahasa Anda

Huruf boleh dari abjad apa pun, jadi Anda dapat menjawab opsi tanpa mengganti tata letak keyboard: tambahkan `З` untuk Close di bawah {{ui:Setiap perintah}}, atau `П` untuk POlar di `ARRAY`.

CadCraft hanya membawa huruf Inggris. Daftar Anda sendiri adalah cara Anda, kantor Anda, atau orang yang berbagi bahasa Anda melengkapi sisanya, dan {{ui:Ekspor}} membuat file yang dapat Anda berikan kepada orang lain.

## Sunting sebagai teks

{{ui:Sunting sebagai teks}} di editor menampilkan daftar yang sama sebagai baris teks, satu per opsi, dan inilah yang disimpan {{ui:Ekspor}}:

```
ARRAY.PO,  P
*.X,       Q
```

Setiap baris berisi perintah, titik, huruf bawaan opsi, koma, lalu huruf Anda. Bintang di tempat perintah berarti setiap perintah. Baris yang diawali `;` adalah catatan.

## Yang tetap sama

- Huruf bawaan tetap berfungsi di samping huruf Anda.
- Rutin dan tombol bilah alat tetap memakai huruf bawaan, sehingga yang sudah Anda muat tidak rusak. Untuk mengetik huruf bawaan sendiri jika huruf Anda mengganggu, tulis garis bawah di depannya: `_PO`.
- Nama pendek perintah adalah hal yang berbeda: lihat [Edit alias perintah](topic:command-aliases).

## Baris yang ditolak CadCraft

Saat Anda menyunting sebagai teks atau mengimpor file, editor mencantumkan setiap masalah beserta nomor barisnya:

- perintahnya tidak ada (alias perintah tidak masalah: `AR.PO` dibaca sebagai `ARRAY.PO`);
- baris tidak berbentuk `PERINTAH.OPSI, HURUF`;
- huruf mengandung spasi atau tanda (hanya huruf dan angka, paling banyak 16);
- huruf yang sama menjawab dua opsi berbeda dalam satu perintah.

## Impor dan ekspor

{{ui:Ekspor}} menyimpan huruf Anda sebagai file teks, untuk disimpan atau diberikan kepada orang lain. {{ui:Impor…}} membaca file seperti itu. Keduanya ada di editor dan di {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Huruf opsi}}.

Di Pengaturan, {{ui:Impor…}} mengganti file Anda dengan file yang Anda pilih. File yang memiliki baris bentrok atau tidak dapat dipakai tidak akan diambil; buka editor dan impor di sana untuk melihat barisnya. Di editor, impor hanya mengisi kotak: tidak ada yang berubah sampai Anda klik {{ui:Simpan}}.

## Muat ulang atau hapus

Ketik {{cmd:REINIT}} lalu tekan {{key:Enter}} untuk menerapkan lagi file Anda. Untuk menghapus sebuah huruf, hapus barisnya lalu klik {{ui:Simpan}}.

## Huruf Anda mengikuti akun Anda

Saat Anda masuk ke getcadcraft.com, huruf Anda disimpan bersama akun Anda. Buka CadCraft di peramban lain atau di komputer lain dengan akun yang sama dan huruf itu akan datang sendiri; baris perintah menampilkan `Option letters from your account`. Jika Anda mengubahnya di dua tempat, salinan yang paling baru dipakai dan salinan yang digantikannya disimpan sekali.

{{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Huruf opsi}} menunjukkan keadaannya. Saat keluar atau luring, huruf tetap berada di peramban ini dan dikirim ke akun Anda saat Anda menyimpannya lagi sambil masuk.

Terkait: [Edit alias perintah](topic:command-aliases) · [Pengaturan CadCraft](topic:settings) · [Perintah](topic:commands)
