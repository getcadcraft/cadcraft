---
title: Underlay PDF dan import PDF
summary: Letakkan halaman PDF di bawah lukisan anda untuk dijejak dan diplot, atau tukarkan garisan dan teks halaman itu kepada objek lukisan.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, underlay, jejak, import pdf, imbasan, pelan tingkat, pudar, klip, lapisan, snap, buka pdf
from: aa301d0f
---

## Dua cara membawa masuk halaman PDF

- **Lampirkan** ({{cmd:PDFATTACH}}) menyimpan PDF sebagai gambar di bawah lukisan anda. Anda menjejak, snap ke garisannya, memudarkannya, mengklipkannya, dan ia dicetak bersama helaian. Lukisan hanya menyimpan nama fail itu.
- **Import** ({{cmd:PDFIMPORT}}) menukarkan garisan, lengkung, isian dan teks halaman itu kepada objek lukisan biasa, pada lapisan yang dinamakan mengikut PDF. Objek itu boleh anda sunting, dan PDF itu tidak diperlukan selepas itu.

Membuka PDF dengan {{ui:Buka}} bertanya yang mana satu anda mahu.

## Lampirkan halaman

1. Taip `PDFATTACH` (atau `PDFATT`) dan pilih PDF itu. Jika ia mempunyai beberapa halaman, taip nombor halaman.
2. Klik titik sisipan (bucu kiri bawah halaman).
3. Tekan {{key:Enter}} untuk saiz sebenar halaman, atau taip skala: unit lukisan bagi setiap titik PDF (satu titik ialah 1/72 inci, jadi 0.3528 bagi lukisan milimeter).
4. Tekan {{key:Enter}} untuk tiada pusingan, atau taip sudut.

Halaman ialah objek seperti rujukan blok: alih, putar, skala, salin, padam dan letakkannya pada lapisan. Matikan lapisannya dan ia hilang. Zum masuk dan halaman dilukis semula dengan tajam.

## Jejak

Dengan {{ui:Snap}} dihidupkan, kursor snap ke garisan PDF itu sendiri: titik hujung, titik tengah dan persilangan (dan {{ui:Terdekat}} apabila snap itu dihidupkan). Teks yang dilukis sebagai huruf pada halaman tidak di-snap.

## Laras

- `PDFADJUST`: **Pudar** (0 hingga 80 peratus), **Kontras** (0 hingga 100), **Monokrom**, dan **Onoff** untuk menyembunyikannya tanpa memadamnya.
- `PDFCLIP`: tunjukkan hanya segi empat tepat atau poligon halaman itu; **Padam** mengalih keluar klip.
- `PDFLAYERS`: PDF boleh mempunyai lapisannya sendiri. Arahan ini menyenaraikannya; taip nombor untuk menghidupkan atau mematikan lapisan itu bagi underlay ini. Lapisan yang dimatikan dalam fail bermula dalam keadaan mati.

## Plot dan simpan

PLOT mencetak halaman sebagai garisan, isian dan teks (supaya ia kekal tajam dan boleh dicari). Gambar di dalam PDF dipaparkan pada skrin tetapi belum dicetak.

DWG atau DXF 2000 menyimpan underlay sebagai pautan: nama fail, halaman, kedudukannya, skalanya, pusingan, klip, pudar dan kontras. PDF itu sendiri tidak berada dalam lukisan. Buka semula lukisan, taip `PDF` dan pilih fail itu semula; halaman dipaparkan sebagai bingkai sehingga itu dilakukan, dan mengambil saiz sebenar apabila itu dilakukan. DXF lama (R12) tidak mempunyai underlay: ia menyimpan bingkai dan nama sahaja. Cara program lain membaca klip dan skala yang disimpan belum diperiksa dalam program tersebut.

## Import halaman

1. Taip `PDFIMPORT` (atau `PDFIM`) dan pilih PDF dan halaman.
2. Klik di mana bucu kiri bawah halaman itu hendak diletakkan.
3. Tekan {{key:Enter}} untuk saiz sebenar, taip skala, atau pilih **Dua titik**: halaman dilukis pada saiz sebenar, kemudian anda klik dua titik bagi jarak yang anda ketahui dan taip jarak sebenar; semua dilaraskan skalanya agar sepadan.

Garisan menjadi garisan dan polygaris, bulatan dan lengkok dikenali, bentuk berisi menjadi hatch pepejal, dan teks menjadi teks pada lapisan yang berakhir dengan `-TEXT`. Ia ialah satu langkah buat asal. Gambar dalam PDF tidak diimport: lampirkan halaman itu sebaliknya. Imbasan (halaman yang hanya gambar) tiada garisan untuk diimport.

PDF dibaca sebagai fail yang tidak dipercayai: tiada skrip dijalankan, dan halaman yang sangat besar dipotong dan dimaklumkan.
