---
title: Mengedit alias perintah
summary: Simpan alias perintah Anda sendiri dalam satu file teks dengan format yang sudah dikenal, impor dan ekspor file .pgp, lalu muat ulang dengan REINIT.
keywords: alias, aliases, aliasedit, pgp, pintasan, nama pendek, reinit, keyboard, sesuaikan, edit alias
from: 6ab6fa0e
---

## Yang akan Anda pelajari

Cara menambahkan nama pendek Anda sendiri untuk perintah, misalnya `LL` untuk {{cmd:LINE}}, semuanya dalam satu file teks.

## Menambah alias

1. Buka {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Edit alias…}}, atau ketik {{cmd:ALIASEDIT}} lalu tekan {{key:Enter}}.
2. Tambahkan satu baris berisi alias, koma, dan perintah setelah tanda bintang:

```
LL,     *LINE
```

3. Klik {{ui:Simpan}}. Baris perintah memberi tahu berapa banyak alias Anda yang dipakai.
4. Ketik `LL` lalu tekan {{key:Enter}}: LINE dimulai.

Alias Anda berada di atas alias bawaan CadCraft. Baris Anda menang atas alias bawaan dengan nama yang sama; hapus baris Anda dan alias bawaannya kembali.

## Baris yang ditolak CadCraft

Editor mencantumkan setiap masalah beserta nomor barisnya saat Anda mengetik:

- perintahnya tidak ada;
- alias itu sendiri adalah nama perintah (`LINE, *CIRCLE` akan menyembunyikan LINE);
- baris itu bukan `ALIAS, *COMMAND`;
- alias yang sama ada di dua baris (baris yang lebih akhir yang menang).

Baris yang memulai program di komputer Anda, seperti `NOTEPAD, START, 1, *File to edit: ,`, dilewati dengan catatan: aplikasi di peramban tidak dapat memulai program.

## Membawa alias dari program lain

1. Di editor alias, klik {{ui:Impor .pgp…}} dan pilih file. Anda juga dapat menjatuhkan file `.pgp` ke gambar.
2. Periksa masalah yang tercantum (perintah yang tidak dimiliki CadCraft ditolak, sisanya berfungsi).
3. Klik {{ui:Simpan}}.

{{ui:Ekspor .pgp}} menyimpan alias CadCraft dan alias Anda sebagai satu file dalam format yang sama.

## Memuat ulang file

Ketik {{cmd:REINIT}} lalu tekan {{key:Enter}} untuk menerapkan kembali file alias Anda. File itu disimpan di peramban ini; aplikasi desktop akan menyimpannya di folder sendirinya, dan layanan cloud akan menyinkronkannya.

## Pintasan keyboard untuk perintah apa pun

Alias diketik; pintasan adalah tombol. Untuk memberi perintah tombol milik Anda sendiri:

1. Klik {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Pintasan keyboard…}}, atau ketik `KEYS` lalu tekan {{key:Enter}}.
2. Klik kotak {{ui:Tombol}} dan tekan tombolnya, misalnya {{key:Alt+Shift+C}}.
3. Di {{ui:Menjalankan}}, tulis perintahnya, dan jika Anda mau, apa yang diketik setelahnya: `CIRCLE`, atau `ZOOM E`.
4. Klik {{ui:Tambah}}.

Sebuah tombol memerlukan {{key:Mod}} atau {{key:Alt}} dengan huruf atau angka, atau tombol fungsi yang kosong ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tombol yang sudah dipakai CadCraft, aplikasi, atau peramban, dan tombol yang dimiliki tombol Alat Saya (lihat [Tombol milik Anda](topic:my-tools)), ditolak, dan kotaknya memberi tahu alasannya. Pintasan disimpan di peramban ini (atau aplikasi desktop); {{ui:Buang}} menghapus satu pintasan.
