---
title: Gambar dinding pintar, pintu, dan jendela dalam 2D
summary: Gambar dinding seperti polyline, sambungkan dengan rapi, dan tempatkan pintu serta jendela yang ikut bergerak bersama dinding. Semuanya 2D, tanpa model 3D.
keywords: dinding, dinding pintar, WALL, WA, pintu, DOOR, DR, jendela, WINDOW, WN, DELOPENING, denah lantai, ayun, engsel, bukaan
from: 45845d49
---

Dinding di sini adalah objek gambar 2D. Dinding tidak membuat model 3D, sehingga denah tetap seringan gambar garis. Untuk model bangunan, gunakan BimCraft.

## Gambar dinding

Ketik `WALL` (`WA`), atau pilih {{ui:Dinding}} di menu {{ui:Lainnya}} pada grup {{ui:Gambar}}, lalu klik titik-titik seperti saat menggambar polyline. Tekan {{key:Enter}} untuk selesai, atau ketik `C` untuk menutup ruangan.

- `T` mengatur ketebalan.
- `J` menentukan apa yang diikuti klik Anda: pusat dinding, atau sisi kiri atau kanannya.
- `F` mengatur isian: tidak ada, padat, atau hatch.

Sudut dibuat miter dengan sendirinya. Dinding yang berakhir di dalam ketebalan dinding lain tersambung membentuk sambungan T yang rapi, dan dinding yang bersilangan saling terbuka. Sambungan disimpan bersama dinding. Untuk persegi panjang, poligon, busur, pemecahan, kunci, dan lainnya, lihat "Bentuk, potongan, offset, dan kunci untuk dinding 2D".

## Tambahkan pintu dan jendela

Ketik `DOOR` (`DR`) atau `WINDOW` (`WN`), lalu klik pada dinding. Pintu berayun ke sisi dinding tempat Anda mengklik. `W` mengatur lebar, `Y` jenisnya, dan `H` sisi engselnya. Terus klik untuk menempatkan lebih banyak, dan tekan {{key:Enter}} untuk selesai. Pintu dapat berupa tunggal, ganda, geser, atau bukaan tanpa daun pintu. Jendela dapat berupa mati, kasemen, atau geser.

## Ubah pintu dan jendela

Pilih dinding untuk melihat gripnya:

- Grip ujung merentangkan dinding. Dinding yang tersambung padanya ikut.
- Grip tengah memindahkan dinding.
- Grip pada bukaan menggesernya sepanjang dinding.
- Panah membalik engsel dan arah ayun pintu.

Properti menampilkan ketebalan, isian, dan setiap bukaan: jenis, lebar, posisi, engsel, ayun, tampil terbuka atau tertutup, serta {{ui:Buang}}. `DELOPENING` menghapus bukaan yang paling dekat dengan tempat Anda mengklik.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY`, dan `ERASE` bekerja seperti biasa. Pintu dan jendela ikut dinding mereka, dinding yang tersambung mempertahankan sambungannya, dan satu {{ui:Urungkan}} membatalkan semuanya.

## Di program lain

Setiap dinding disimpan sebagai blok biasa, sehingga program CAD lain menampilkannya dengan benar dan dapat memindahkannya, tetapi mereka tidak dapat menyuntingnya sebagai dinding. `EXPLODE` mengubah dinding menjadi garis dan busur biasa, dan dinding itu tidak lagi menjadi dinding.
