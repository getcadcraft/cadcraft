---
title: Tetapkan had lukisan
summary: LIMITS menetapkan segi empat tepat untuk lukisan: grid mengisinya, ZOOM All menunjukkannya, dan dengan had dihidupkan, titik di luarnya ditolak. Ia disimpan dalam fail DWG dan DXF.
keywords: had, had lukisan, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grid, di luar had, saiz helaian, kawasan lukisan, zum semua, sempadan
from: 9e97b30d
---

**Had lukisan** ialah segi empat tepat yang menyatakan betapa besar lukisan itu dimaksudkan: kawasan yang anda rancang untuk melukis, seperti helaian 420 × 297. Lukisan baharu tidak mempunyai had, jadi grid dan kawasan lukisan tidak terhad, seperti sebelum ini.

## Tetapkannya

Taip {{cmd:LIMITS}} dan jawab:

- `Tentukan sudut kiri bawah atau [ON/OFF] <0,0>`: satu titik, atau {{key:Enter}} untuk mengekalkan yang semasa.
- `Tentukan sudut kanan atas <420,297>`: satu titik, atau {{key:Enter}} untuk mengekalkan yang semasa. Ia mesti di atas dan di kanan yang pertama.

Atau taip `ON` atau `OFF` pada soalan pertama untuk menukar semakan tanpa mengubah segi empat tepat. Menetapkan sudut ialah satu langkah buat asal, dan begitu juga setiap ON dan OFF.

## Apa yang dilakukannya

- **Grid mengisi had** dan berhenti pada tepinya. Ia gambaran kawasan itu, jadi hidupkan {{ui:Grid}} untuk melihatnya.
- **ZOOM All** ({{cmd:ZOOM}}, kemudian {{ui:All}}) menunjukkan had dan lukisan bersama; {{ui:Lingkungan}} masih hanya menunjukkan lukisan.
- **Dengan had HIDUP**, titik yang anda taip atau klik di luarnya ditolak dengan `**Di luar had` dan gesaan kekal. Ia meliputi arahan yang mencipta objek: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, arahan dimensi dan beberapa lagi. Arahan yang hanya mengalih, memilih atau mengukur tidak dihadkan, dan begitu juga menampal, seretan grip, atau objek yang dicipta oleh rutin LISP: had ialah panduan untuk melukis, bukan dinding. Dengan had MATI, tiada apa yang ditolak.
- Objek yang sudah berada di luar kekal di tempatnya.

## Dalam fail dan LISP

Ia disimpan dalam DWG dan DXF sebagai `$LIMMIN`, `$LIMMAX` dan `$LIMCHECK`. Fail dari program lain yang hanya mempunyai had lalai program itu (0,0 hingga 12,9 atau 420,297, semakan mati) dibuka tanpa had, supaya gridnya tidak dimampatkan ke dalam segi empat tepat kecil; fail dengan had sendiri, atau dengan semakan hidup, mengekalkannya. Dalam LISP, `(getvar "LIMMIN")`, `LIMMAX` dan `LIMCHECK` membacanya dan `setvar` menulisnya, sebagai satu langkah buat asal.

Had tergolong pada model. Helaian (layout) mempunyai saiz kertasnya sendiri.
