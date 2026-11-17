---
title: Gambar teks dengan font SHX milik Anda
summary: Berikan CadCraft folder font SHX (atau pilih filenya), dan gaya teks yang menyebutkan namanya akan digambar dengan font itu, di layar dan dalam plot atau PDF, dengan tinggi, faktor lebar dan kemiringan gaya.
keywords: shx, font, font bentuk, big font, bigfont, unifont, lama, persian, farsi, arab, gaya teks, font hilang, font diganti, SHXFONTS, folder, balik, urutan visual, simplex, isocp
from: 14b0a4ab
---

Gambar dari program lain sering menyebutkan **font SHX** di gaya teks mereka, dan DWG tidak menyimpannya. Tanpa font itu, CadCraft menggambar teks tersebut dengan wajah bawaannya sendiri, yang baik untuk teks Latin biasa tetapi tidak untuk font lama yang memetakan kode karakter biasa ke bentuk huruf lain, seperti anotasi Persia lama.

Berikan font kepada CadCraft, dan ia menggambar teks dengan font itu.

## Muat font Anda

Ketik {{cmd:SHXFONTS}} (`SHX`) dan pilih:

- {{ui:Folder}} (CadCraft Studio): pilih folder. Setiap file `.shx` di dalamnya dibaca sekarang, dan lagi setiap kali CadCraft dimulai.
- {{ui:File}} (peramban): pilih satu atau beberapa file `.shx`. Mereka disimpan di peramban ini dan tidak pernah diunggah.
- {{ui:Daftar}}: font yang dimuat, dan font yang dinamai oleh gambar yang terbuka tetapi belum Anda muat.
- {{ui:Buang}} dan {{ui:Kosongkan}}: lupakan satu font, atau semuanya.

CadCraft tidak dapat menyertakan font pihak ketiga, sehingga ia tidak pernah mengirimkannya: font berasal dari Anda. Sebuah gambar hanya menyebutkan fontnya, dan tidak menyimpan salinannya.

## Yang terjadi

Nama font sebuah gaya teks dicocokkan dengan font yang dimuat berdasarkan namanya, tanpa membedakan huruf besar-kecil, folder dan `.shx` (`SIMPLEX.SHX` menemukan `simplex`). Teks dalam gaya seperti itu digambar sebagai garis, di layar, dalam plot dan dalam PDF, pada tempat, tinggi, rotasi, faktor lebar dan sudut miring teks itu sendiri. Lebarnya adalah lebar font itu sendiri, sehingga perataan {{ui:Pusat}} dan {{ui:Kanan}}, pembungkusan dan pemilihan cocok dengan apa yang Anda lihat. Gaya yang fontnya belum dimuat tetap memakai wajah bawaan, dan ketika Anda membuka gambar yang menyebut font yang belum Anda muat, baris perintah memberitahunya.

Gaya Standar juga berlaku: gambar yang gaya Standar-nya menyebutkan font sendiri tetap memakainya.

## Font yang sudah dalam urutan visual

Banyak font SHX Persia dan Arab lama menyimpan huruf yang sudah dibentuk untuk layar dan digambar dari kiri ke kanan, sehingga teks yang diketik dalam urutan logis keluar terbalik. Ketik {{cmd:SHXFONTS}}, pilih {{ui:Balik}}, dan sebutkan font-nya: teksnya kemudian disusun dengan huruf terakhir di depan. Jalankan lagi untuk membatalkannya. Sakelar ini milik font itu, disimpan di peramban ini, dan tidak disimpan dalam gambar.

## Yang belum tercakup

- Teks dengan kode format inline (warna, tumpukan dalam MTEXT) tetap memakai wajah bawaan.
- Big font (jenis dua-byte) mengisi kode yang tidak dimiliki font utama, tetapi teks dalam kode halaman Asia Timur yang sudah diubah CadCraft menjadi Unicode tidak dipetakan kembali ke kode dua-byte font itu.
- Pembaca font mengikuti deskripsi format yang dipublikasikan dan diuji dengan font yang dibuat untuk CadCraft. Jika salah satu font Anda menggambar dengan salah, kirimkan font dan gambarnya kepada kami.
