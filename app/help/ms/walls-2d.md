---
title: Lukis dinding, pintu dan tingkap pintar dalam 2D
summary: Lukis dinding seperti polygaris, cantumkannya dengan kemas, dan letakkan pintu serta tingkap yang bergerak bersama dinding. Semuanya 2D, tanpa model 3D.
keywords: dinding, dinding, WALL, WA, pintu, DOOR, DR, tingkap, WINDOW, WN, DELOPENING, dinding pintar, pelan lantai, ayun, engsel, bukaan
from: 45845d49
---

Dinding di sini ialah objek lukisan 2D. Ia tidak membuat model 3D, jadi pelan kekal seringan lukisan garisan. Untuk model bangunan, gunakan BimCraft.

## Lukis dinding

Taip `WALL` (`WA`), atau pilih {{ui:Wall}} dalam menu {{ui:More}} kumpulan {{ui:Draw}}, kemudian klik titik seperti yang anda lakukan untuk polygaris. Tekan {{key:Enter}} untuk selesai, atau taip `C` untuk menutup bilik.

- `T` menetapkan ketebalan.
- `J` menentukan apa yang diikuti klik anda: tengah dinding, atau muka kirinya atau kanannya.
- `F` menetapkan isian: tiada, pepejal atau hatch.

Sudut dikerat dengan sendirinya. Dinding yang berakhir dalam ketebalan dinding lain bercantum dengannya sebagai T yang kemas, dan dinding yang bersilang terbuka antara satu sama lain. Cantuman disimpan bersama dinding. Untuk segi empat tepat, poligon, lengkok, pemisahan, kunci dan lain-lain, lihat "Bentuk dinding, potongan, ofset dan kunci untuk dinding 2D".

## Tambah pintu dan tingkap

Taip `DOOR` (`DR`) atau `WINDOW` (`WN`) dan klik pada dinding. Pintu berayun ke sisi dinding yang anda klik. `W` menetapkan lebar, `Y` jenisnya dan `H` sisi engselnya. Teruskan mengklik untuk meletakkan lebih banyak, dan tekan {{key:Enter}} untuk selesai. Pintu boleh berupa tunggal, berkembar, gelangsar atau pintu gerbang terbuka. Tingkap boleh tetap, engsel (casement) atau gelangsar.

## Tukar

Pilih dinding untuk melihat gripnya:

- Grip hujung meregangkan dinding. Dinding yang dicantumkan padanya mengikut.
- Grip tengah mengalihkan dinding.
- Grip pada bukaan menggelongsorkannya sepanjang dinding.
- Anak panah membalikkan engsel dan ayunan pintu.

{{ui:Properties}} menunjukkan ketebalan, isian dan setiap bukaan: jenis, lebar, kedudukan, engsel, ayunan, sama ada ditunjukkan terbuka atau tertutup, dan {{ui:Remove}}. `DELOPENING` membuang bukaan yang paling hampir dengan tempat anda klik.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` dan `ERASE` berfungsi seperti biasa. Pintu dan tingkap mengikut dinding mereka, dinding yang dicantumkan mengekalkan cantumannya, dan satu {{ui:Undo}} membatalkan semuanya.

## Dalam program lain

Setiap dinding disimpan sebagai blok biasa, jadi program CAD lain menunjukkannya dengan betul dan boleh mengalihkannya, tetapi mereka tidak boleh menyuntingnya sebagai dinding. `EXPLODE` menukar dinding kepada garisan dan lengkok biasa, dan ia tidak lagi menjadi dinding.
