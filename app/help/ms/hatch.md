---
title: Hatch dan isian kawasan
summary: Isi kawasan dengan warna pepejal atau corak piawai dengan klik di dalamnya atau dengan memilih bentuk tertutup, tetapkan skala dan sudut corak, dan ubah hatch selepas itu.
keywords: hatch, bhatch, isian, isian pepejal, corak, ansi31, ansi37, bata, tanah, jaringan, garis keratan, poché, pulau, sempadan, skala, sudut
from: 14399174
---

## Apa yang akan anda hasilkan

Keratan dinding yang diisi dengan corak ANSI31, sebuah tiang di dalamnya dibiarkan kosong, dan isian pepejal dalam tiang tersebut.

## Hatch dengan klik di dalam kawasan

1. Lukis segi empat tepat (`REC`, `0,0`, `@2000,1200`) dan bulatan di dalamnya (`C`, `1000,600`, `300`). Klik {{ui:Lingkungan}}.
2. Klik {{ui:Hatch}} dalam kumpulan {{ui:Lukis}}, atau taip `H` dan tekan {{key:Enter}}. Sejarah menyatakan corak yang semasa, contohnya `Hatch semasa: ANSI31, skala 1, sudut 0°`.
3. Taip `P` dan tekan {{key:Enter}}, taip `ANSI31` dan tekan {{key:Enter}}.
4. Taip `SC` dan tekan {{key:Enter}}, taip `20` dan tekan {{key:Enter}}. Saiz corak adalah pada kertas, jadi lukisan yang diplot pada 1:20 memerlukan skala 20.
5. Pada `Tentukan titik dalaman`, klik di dalam segi empat tepat, di luar bulatan. Hatch dipaparkan sebagai pratonton.
6. Tekan {{key:Enter}}. Segi empat tepat itu di-hatch; bulatan di dalamnya kekal kosong kerana ia ialah pulau.

Klik di dalam beberapa kawasan sebelum menekan {{key:Enter}} untuk menjadikannya satu hatch. `U` membatalkan kawasan terakhir.

## Isian pepejal

1. Taip `H` dan tekan {{key:Enter}}.
2. Taip `P`, tekan {{key:Enter}}, taip `SOLID` dan tekan {{key:Enter}}.
3. Klik di dalam bulatan, kemudian tekan {{key:Enter}}.

## Hatch bentuk tertutup yang anda pilih

Daripada klik di dalam, taip `S` (Pilih objek) pada `Tentukan titik dalaman` dan pilih polygaris, bulatan atau elips tertutup, kemudian tekan {{key:Enter}}. Bentuk di dalam bentuk lain dibiarkan kosong secara bergilir (yang luar di-hatch, yang seterusnya dibiarkan kosong, dan seterusnya).

## Corak

Taip `?` pada soalan corak untuk senarai. Yang piawai ialah ANSI31 hingga ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS dan EARTH, serta SOLID. Dalam lukisan dalam inci (atau dengan kaki dan inci sebagai format panjangnya), saiz inci bagi corak digunakan, seperti dalam AutoCAD; jika tidak, saiz milimeter digunakan.

{{ui:Sudut}} (`A`) memutar keseluruhan corak: ANSI31 pada 90° condong ke arah sebaliknya.

**Fail corak.** Taip `F` (Fail corak) pada `Tentukan titik dalaman` dan pilih fail `.pat`. Corak dalamnya disertakan dalam senarai; jika lebih daripada satu, anda akan ditanya yang mana hendak digunakan. Fail yang tiada corak yang boleh dibaca oleh CadCraft akan dinyatakan, dan sebarang corak yang dilangkau dikira. Saiz dalam fail `.pat` tidak mempunyai unit sendiri, jadi ia dibaca dalam unit lukisan. Hanya fail yang ditulis dalam format `.pat` biasa telah diuji; tiada yang dibuat oleh program lain.

## Tukar hatch

Pilih hatch (klik salah satu garisnya). Dalam {{ui:Sifat}}: {{ui:Corak}}, {{ui:Skala corak}} dan {{ui:Sudut corak}}. Hatch daripada lukisan yang dibuka menunjukkan coraknya jika ia salah satu yang piawai; yang lain dipaparkan sebagai tona cerah bagi warnanya.

## Kesilapan biasa

- **"Tiada sempadan tertutup di sekeliling titik itu."** Terdapat jurang dalam garis luar, atau sebahagiannya berada di luar skrin: CadCraft hanya memeriksa apa yang ada pada skrin. Tutup jurang itu (zum masuk pada bucu), atau zum keluar.
- **"Corak terlalu padat untuk dilukis pada skala ini."** Garisan akan lebih rapat daripada yang boleh dipaparkan oleh lukisan. Gunakan skala yang lebih besar: cuba skala plot (20 bagi 1:20).
- Corak kelihatan besar atau kecil. Skala ialah unit lukisan bagi setiap unit corak; lihat langkah 4 di atas.
- **Mengalih garis luar tidak mengalihkan hatch.** Hatch tidak terikat dengan sempadannya. Alih kedua-duanya, atau hatch semula.

## Hatch yang kekal dengan sempadannya

Hatch yang anda buat dengan `HATCH` mengingati apa yang menjadi sempadannya. Alih, putar atau skala sempadan dan hatch serta coraknya turut bergerak. Seret grip untuk membentuk semula sempadan dan hatch dikira semula. Alih hatch sahaja dan sempadannya turut bergerak, sama seperti bentuk berisi dalam program lukisan.

Pautan akan tamat, dan baris arahan memaklumkannya, jika sempadan tidak lagi tertutup atau anda membentuk semula hatch secara manual. Hatch itu sendiri kekal. Taip `AS` semasa hatch untuk membuat hatch yang berdiri sendiri. Salin hatch bersama sempadannya dan salinan itu mempunyai pautannya sendiri.

`HATCHEDIT` (`HE`) menukar corak, skala, sudut dan asal bagi hatch, serta memautkannya kepada sempadan atau menamatkan pautan. Pautan disimpan dalam fail DWG dan DXF 2000. Fail DXF R12 tidak mempunyai objek hatch, dan pautan yang dibuat dalam program lain tidak dibaca: gunakan `HATCHEDIT` dan pilihan Pautkan untuk itu.

Hatch yang tiada sempadan lagi (sempadannya dipadam, atau fail itu tiba tanpanya) boleh dipulihkan: `HATCHGENERATEBOUNDARY` (`HGB`) melukis polygaris tertutup di sekeliling setiap gelung hatch dan, jika anda menjawab Ya, memautkan hatch kepada polygaris tersebut.

## Isian kecerunan

`GRADIENT` (`GD`) mengisi kawasan dengan kecerunan dan bukannya corak: pemilihan yang sama seperti `HATCH`, selepas ia bertanya jenisnya (linear, silinder, sfera, hemisfera, melengkung, dan setiap satu daripadanya diterbalikkan), satu warna dengan tona atau dua warna, sudut, dan sama ada berpusat atau tidak. Dalam `HATCH`, pilihan `G` melakukan perkara yang sama. `HATCHEDIT` `G`, atau {{ui:Sifat}} di bawah Kecerunan, menukar kecerunan atau menjadikan mana-mana hatch sebagai kecerunan.

Kecerunan dipaparkan pada skrin dan dalam plot. Simpan sebagai DWG 2004 atau yang lebih baharu dan program lain akan mendapat hatch kecerunan yang sebenar. DXF 2000 dan DWG 2000 tidak mempunyai kecerunan: di sana CadCraft menyimpannya untuk dirinya sendiri dan program lain melihat isian pepejal dalam warna pertama.

## Potong hatch

`TRIM` memangkas hatch seperti mana-mana objek lain. Klik hatch pada sisi tepi pemotong yang anda mahu buang: tepi-tepi itu membahagikan kawasan yang di-hatch dan kepingan itu dibuang. Dalam mod Pantas, setiap objek ialah tepi pemotong; pilih tepi dahulu (pilihan `T`) apabila banyak. Hatch yang dipangkas tidak lagi dipautkan kepada sempadannya, kerana ia tidak lagi mengisinya.
