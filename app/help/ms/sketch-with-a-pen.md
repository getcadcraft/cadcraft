---
title: Lakar dengan pen dan dapatkan geometri tepat
summary: Lukis secara bebas dengan pen, tetikus atau jari dan setiap goresan menjadi garisan, bulatan, lengkok, segi empat tepat atau polygaris yang kemas apabila anda mengangkat pen, dilekapkan kepada apa yang sudah dilukis, dengan saiznya sedia untuk ditaip ganti.
keywords: lakar, pen, stilus, bebas, jari, kemas, tepat, snap, SKETCHLIVE, SKETCHFIX, saiz, taip ganti, tekanan, ketebalan garisan, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Mulakan {{cmd:SKETCHLIVE}} (atau pilih **Draw › More › Sketch with a pen**) dan lukis satu goresan dengan menekan dan menyeret. Apabila anda mengangkat pen, CadCraft membaca apa yang anda maksudkan dan meletakkannya dalam lukisan:

| Goresan anda | Apa yang anda dapat |
|---|---|
| Hampir lurus | Garisan. Garisan yang hampir mendatar atau menegak dijadikan tepat mendatar atau menegak. |
| Tertutup dan bulat | Bulatan |
| Sebahagian daripada bentuk bulat | Lengkok |
| Tertutup dengan empat penjuru bersudut tegak | Segi empat tepat |
| Lain-lain | Polygaris dengan sisi yang disegi empatkan |

Hujung goresan ditarik ke hujung terdekat bagi apa yang sudah dilukis, jadi dinding yang dilakar bertemu dengan dinding di sebelahnya.

## Taip ganti saiz

Selepas setiap goresan, baris arahan menunjukkan saizannya (panjang garisan, jejari bulatan atau lengkok, lebar segi empat tepat) sebagai lalai. Tekan {{key:Enter}} untuk mengekalkannya, atau taip nombor atau panjang seperti `12'6"` untuk menggantikannya. Garisan mengekalkan hujung pertamanya, bulatan pusatnya, segi empat tepat penjuru pertamanya.

Tekan {{key:Enter}} pada gesaan kosong untuk selesai, atau taip `U` untuk membatalkan goresan terakhir. Keseluruhan sesi ialah satu langkah buat asal.

## Membersihkan beberapa goresan sekali gus

{{cmd:SKETCHFIX}} mengumpulkan goresan dan menjadikannya semua tepat apabila anda menekan {{key:Enter}}, yang sesuai untuk susun atur kasar yang dilukis dengan cepat.

:::note
Semuanya dikira pada komputer anda dengan peraturan, tiada model dan tiada apa yang dihantar ke mana-mana.
:::

## Tekanan menetapkan ketebalan garisan

Di mana pen dihidupkan untuk aplikasi (Settings › Global › Input devices › Pen), goresan yang dilukis dengan pen membawa setiap titik yang diberi pen dan tekanannya. Goresan ringan menghasilkan objek nipis dan yang tegas menjadikannya tebal: purata tekanan goresan memilih 0.18, 0.25, 0.35 atau 0.50 mm, dan baris arahan memberitahu yang mana. Goresan yang dilukis dengan tetikus atau jari mengambil ketebalan garisan semasa seperti sebelumnya. {{cmd:PENPRESSURE}} mematikan ini (atau menghidupkannya semula); pilihan itu disimpan dalam pelayar ini.
