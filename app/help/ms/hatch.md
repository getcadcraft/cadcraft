---
title: Hatch dan kawasan isian
summary: Isi kawasan dengan warna pepejal atau corak piawai dengan mengkliknya di dalam atau dengan memilih bentuk tertutup, tetapkan skala dan sudut corak, dan ubah hatch selepas itu.
keywords: hatch, bhatch, isian, isian pepejal, corak, ansi31, ansi37, brick, earth, net, garisan keratan, poché, pulau, sempadan, skala, sudut
from: e7feb344
---

## Apa yang akan anda hasilkan

Keratan dinding yang diisi dengan corak ANSI31, sebatang tiang di dalamnya dibiarkan kosong, dan isian pepejal dalam tiang itu.

## Hatch dengan mengklik di dalam kawasan

1. Lukis segi empat tepat (`REC`, `0,0`, `@2000,1200`) dan bulatan di dalamnya (`C`, `1000,600`, `300`). Klik {{ui:Extents}}.
2. Klik {{ui:Hatch}} dalam kumpulan {{ui:Draw}}, atau taip `H` dan tekan {{key:Enter}}. Sejarah memberitahu corak yang sedang digunakan, contohnya `Current hatch: ANSI31, scale 1, angle 0°`.
3. Taip `P` dan tekan {{key:Enter}}, taip `ANSI31` dan tekan {{key:Enter}}.
4. Taip `SC` dan tekan {{key:Enter}}, taip `20` dan tekan {{key:Enter}}. Saiz corak adalah pada kertas, jadi lukisan yang dicetak pada 1:20 memerlukan skala 20.
5. Pada `Pick internal point`, klik di dalam segi empat tepat, di luar bulatan. Hatch ditunjukkan sebagai pratonton.
6. Tekan {{key:Enter}}. Segi empat tepat di-hatch; bulatan di dalamnya kekal kosong, kerana ia ialah pulau.

Klik di dalam beberapa kawasan sebelum menekan {{key:Enter}} untuk menjadikannya satu hatch. `U` membatalkan kawasan terakhir.

## Isian pepejal

1. Taip `H` dan tekan {{key:Enter}}.
2. Taip `P`, tekan {{key:Enter}}, taip `SOLID` dan tekan {{key:Enter}}.
3. Klik di dalam bulatan, kemudian tekan {{key:Enter}}.

## Hatch bentuk tertutup yang anda pilih

Daripada mengklik di dalam, taip `S` (Select objects) pada `Pick internal point` dan pilih polygaris tertutup, bulatan atau elips tertutup, kemudian tekan {{key:Enter}}. Bentuk di dalam bentuk lain dibiarkan kosong secara bergilir (yang luar di-hatch, yang seterusnya di dalam kosong, dan seterusnya).

## Corak

Taip `?` pada soalan corak untuk senarai. Corak piawai ialah ANSI31 hingga ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS dan EARTH, dan SOLID. Dalam lukisan dalam inci (atau dengan kaki dan inci sebagai format panjangnya), saiz corak dalam inci digunakan, seperti dalam AutoCAD; jika tidak, saiz milimeter.

{{ui:Angle}} (`A`) memutar keseluruhan corak: ANSI31 pada 90° condong ke arah lain.

**Fail corak.** Taip `F` (Fail corak) pada `Pick internal point` dan pilih fail `.pat`. Corak dalamnya menyertai senarai; jika lebih daripada satu, anda ditanya yang mana hendak digunakan. Fail tanpa corak yang CadCraft boleh baca memberitahu begitu, dan mana-mana corak yang dilangkau dikira. Saiz dalam fail `.pat` tidak mempunyai unit sendiri, jadi ia dibaca dalam unit lukisan. Hanya fail yang ditulis dalam format `.pat` biasa telah dicuba; tiada yang dibuat oleh program lain.

## Tukar hatch

Pilih ia (klik satu garisannya). Dalam {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} dan {{ui:Pattern angle}}. Hatch daripada lukisan yang dibuka menunjukkan coraknya apabila ia salah satu yang piawai; yang lain ditunjukkan sebagai tona cerah warnanya.

## Kesilapan biasa

- **"No closed boundary round that point."** Ada jurang dalam garis luar, atau sebahagian daripadanya di luar skrin: CadCraft hanya melihat apa yang ada di skrin. Tutup jurang (zum pada penjuru), atau zum keluar.
- **"The pattern is too dense to draw at this scale."** Garisan akan lebih rapat daripada yang dapat ditunjukkan lukisan. Gunakan skala yang lebih besar: cuba skala plot (20 untuk 1:20).
- **Corak kelihatan sangat besar atau kecil.** Skala ialah unit lukisan bagi setiap unit corak; lihat langkah 4 di atas.
- **Hatch berhenti mengikut garis luarnya.** Hatch yang dibuat dengan {{cmd:HATCH}} kekal bersama objek yang menjadikannya: alih, putar atau skalakan garis luar dan hatch turut bergerak; bentukkan semula dengan grip dan hatch dikira semula. Pautan tamat apabila garis luar tidak lagi tertutup, apabila anda membentuk semula hatch itu sendiri dengan tangan, atau apabila anda memangkasnya, dan baris arahan memberitahu begitu. Tiada apa yang hilang: hatch kawasan itu semula untuk memautkannya semula.

## Hatch yang kekal dengan sempadannya

Hatch yang anda buat dengan `HATCH` mengingati apa yang membataskannya. Alih, putar atau skalakan sempadan dan hatch serta coraknya turut bergerak. Seret grip untuk membentuk semula sempadan dan hatch dikira semula. Alih hatch sahaja dan sempadannya turut mengikut, seperti bentuk berisi dalam program lukisan.

Pautan tamat, dan baris arahan memberitahu begitu, jika sempadan tidak lagi tertutup atau anda membentuk semula hatch dengan tangan. Hatch itu sendiri kekal. Taip `AS` semasa hatch untuk membuat hatch yang berdiri sendiri. Salin hatch dengan sempadannya dan salinan itu mempunyai pautannya sendiri.

`HATCHEDIT` (`HE`) menukar corak, skala, sudut dan asal hatch, dan memautkannya kepada sempadan atau menamatkan pautan. Pautan disimpan dalam fail DWG dan DXF 2000. Fail DXF R12 tidak mempunyai objek hatch, dan pautan yang dibuat dalam program lain tidak dibaca: gunakan `HATCHEDIT` dan Link untuk itu.

Hatch yang tiada sempadan lagi (sempadan dipadam, atau fail datang tanpanya) boleh diberikan semula: `HATCHGENERATEBOUNDARY` (`HGB`) melukis polygaris tertutup mengelilingi setiap gelung hatch dan, jika anda jawab Yes, memautkan hatch kepadanya.

## Isian kecerunan

`GRADIENT` (`GD`) mengisi kawasan dengan kecerunan dan bukannya corak: pilihan yang sama seperti `HATCH`, selepas ia bertanya jenis (linear, silinder, sfera, hemisfera, lengkung, dan setiap satunya songsang), satu warna dengan tona atau dua warna, sudut, dan sama ada berpusat. Dalam `HATCH`, pilihan `G` melakukan perkara yang sama. `HATCHEDIT` `G`, atau {{ui:Properties}} di bawah Gradient, menukar kecerunan atau menjadikan mana-mana hatch sebagai kecerunan.

Kecerunan ditunjukkan pada skrin dan dalam plot. Simpan sebagai DWG 2004 atau lebih baharu dan program lain mendapat hatch kecerunan sebenar. DXF 2000 dan DWG 2000 tidak mempunyai kecerunan: di sana CadCraft menyimpannya untuk dirinya sendiri dan program lain melihat isian pepejal dalam warna pertama.

## Pangkas hatch

`TRIM` memangkas hatch seperti objek lain. Klik hatch di sisi tepi pemotong yang anda mahu buang: tepi memisahkan kawasan berhatch dan kepingan itu dibuang. Dalam mod Quick setiap objek ialah tepi pemotong; pilih tepi dahulu (pilihan `T`) apabila terdapat banyak. Hatch yang dipangkas tidak lagi dipautkan kepada sempadannya, kerana ia tidak lagi mengisinya.
