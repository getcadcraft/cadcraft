---
title: Atur batas gambar
summary: LIMITS mengatur persegi panjang untuk gambar: grid mengisinya, ZOOM Semua menampilkannya, dan saat batas menyala, titik di luarnya ditolak. Batas disimpan dalam file DWG dan DXF.
keywords: batas, batas gambar, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grid, di luar batas, ukuran lembar, area gambar, zoom semua, batas tepi
from: 9e97b30d
---

**Batas gambar** adalah persegi panjang yang menyatakan seberapa besar gambar dimaksudkan: area tempat Anda berencana menggambar, misalnya lembar 420 × 297. Gambar baru tidak memilikinya, sehingga grid dan area gambar tidak terbatas, seperti sebelumnya.

## Mengaturnya

Ketik {{cmd:LIMITS}} lalu jawab:

- `Tentukan sudut kiri bawah atau [ON/OFF] <0,0>`: sebuah titik, atau {{key:Enter}} untuk mempertahankan yang sekarang.
- `Tentukan sudut kanan atas <420,297>`: sebuah titik, atau {{key:Enter}} untuk mempertahankan yang sekarang. Titik ini harus berada di atas dan di kanan titik pertama.

Atau ketik `ON` atau `OFF` pada pertanyaan pertama untuk menyalakan atau mematikan pemeriksaan tanpa mengubah persegi panjangnya. Mengatur sudut adalah satu langkah urungkan, begitu pula setiap ON dan OFF.

## Fungsinya

- **Grid mengisi batas** dan berhenti di tepinya. Ini adalah gambaran area tersebut, jadi nyalakan {{ui:Grid}} untuk melihatnya.
- **ZOOM Semua** ({{cmd:ZOOM}}, lalu {{ui:Semua}}) menampilkan batas dan gambar bersamaan; {{ui:Batas}} tetap hanya menampilkan gambar.
- **Saat batas menyala**, titik yang Anda ketik atau klik di luarnya ditolak dengan `**Di luar batas` dan prompt tetap. Ini berlaku untuk perintah yang membuat objek: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, perintah dimensi, dan beberapa lainnya. Perintah yang hanya memindahkan, memilih, atau mengukur tidak dibatasi, begitu pula menempel, seret grip, atau objek yang dibuat oleh rutin LISP: batas adalah panduan untuk menggambar, bukan dinding. Saat batas mati, tidak ada yang ditolak.
- Objek yang sudah berada di luar tetap di tempatnya.

## Dalam file dan LISP

Batas disimpan dalam DWG dan DXF sebagai `$LIMMIN`, `$LIMMAX`, dan `$LIMCHECK`. File dari program lain yang hanya memiliki batas bawaan program itu (0,0 sampai 12,9 atau 420,297, pemeriksaan mati) dibuka tanpa batas, sehingga grid-nya tidak dimampatkan ke persegi panjang kecil; file dengan batas sendiri, atau dengan pemeriksaan menyala, mempertahankannya. Dalam LISP, `(getvar "LIMMIN")`, `LIMMAX`, dan `LIMCHECK` membacanya, dan `setvar` menulisnya sebagai satu langkah urungkan.

Batas milik model. Lembar (layout) memiliki ukuran kertasnya sendiri.
