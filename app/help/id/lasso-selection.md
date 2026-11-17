---
title: Pemilihan lasso
summary: Tekan dan seret garis tepi bebas mengelilingi objek untuk memilihnya, sebagai jendela, silang, atau pagar; ganti dengan Space saat menyeret.
keywords: lasso, lassomode, seret, bebas, pilih, pilihan, jendela, silang, pagar, space, poligon, sentuh, pena, persegi panjang
from: 9ec6154d
---

## Yang akan Anda pelajari

Cara memilih objek dengan menggambar garis di sekelilingnya, dan cara mengembalikan persegi panjang saat Anda menginginkannya.

## Menggambar lasso

1. Gambar beberapa garis dan lingkaran yang berdekatan.
2. Tanpa perintah yang sedang berjalan, tekan tombol mouse pada tempat kosong, lalu seret mengelilingi sebagian objek, dengan bergerak **ke kanan** lebih dulu.
3. Lepaskan.

Hanya objek yang sepenuhnya berada di dalam garis tepi yang dipilih. Garis tepi digambar solid saat Anda menyeret: ini adalah lasso jendela.

## Jendela, silang, dan pagar

Objek yang Anda dapatkan bergantung pada gerakan pertama seretan Anda, dan pada {{key:Space}}:

| Anda menyeret | Lasso | Memilih |
|---|---|---|
| Ke kanan lebih dulu | Jendela (garis tepi solid) | Hanya objek yang **sepenuhnya di dalam** |
| Ke kiri lebih dulu | Silang (putus-putus, hijau) | Objek di dalam **dan** objek yang tersentuh garis tepi |
| Tekan {{key:Space}} saat menyeret | Jendela, lalu silang, lalu pagar | Pagar (jalur putus-putus, tidak tertutup): hanya objek yang dilintasi jalur |

1. Tekan pada tempat kosong dan seret mengelilingi beberapa objek, dengan bergerak **ke kiri** lebih dulu. Semua yang tersentuh garis tepi ikut dipilih.
2. Tekan {{key:Esc}}.
3. Tekan dan seret lagi; sambil tetap menahan tombol, tekan {{key:Space}} sekali. Garis tepi berubah menjadi silang; tekan {{key:Space}} lagi untuk pagar.

{{key:Shift}} saat Anda melepaskan tombol akan mengeluarkan objek dari pilihan (dengan "Klik objek: Tambah" di Pengaturan).

## Di dalam perintah

Lasso bekerja di mana pun CadCraft meminta `Pilih objek`: gambar lasso, lalu tekan {{key:Enter}} untuk selesai. {{cmd:STRETCH}} memakai lasso silang sebagai jendelanya, sehingga Anda dapat meregangkan bagian berbentuk L dari gambar sekaligus.

{{cmd:TRIM}} dan {{cmd:EXTEND}} memakai seretan secara berbeda: di sana, perintah memangkas (atau memperpanjang) setiap potongan yang dilintasi jalur. Lihat [Pangkas dan perpanjang](topic:trim-and-extend).

## Persegi panjang

Klik pada ruang kosong, satu gerakan, dan klik kedua selalu menggambar jendela persegi panjang (kiri ke kanan) atau silang (kanan ke kiri).

Untuk membuat seretan menggambar persegi panjang lagi, buka {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Menyeret untuk memilih}} dan pilih {{ui:Persegi panjang}}, atau ketik {{cmd:LASSOMODE}}, lalu `0`. Ketik {{cmd:LASSOMODE}}, lalu `1` untuk lasso. Pilihan ini disimpan di peramban ini.

:::touch
Seret dengan jari atau pena dengan cara yang sama. Ketukan tetap memilih satu objek.
:::

## Kesalahan umum

- **Tidak ada yang terpilih.** Lasso adalah jendela dan tidak ada objek yang berada sepenuhnya di dalamnya. Mulailah seretan ke kiri, atau tekan {{key:Space}} saat menyeret.
- **Seretan memindahkan grip.** Menekan grip objek yang terpilih akan memindahkan grip. Mulailah lasso pada tempat kosong.
- **Space mengakhiri perintah.** {{key:Space}} hanya mengganti lasso selama tombol mouse ditahan; jika tidak, fungsinya adalah Enter.
