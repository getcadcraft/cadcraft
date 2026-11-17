---
title: Buat dan selit blok
summary: Tukar pintu yang dilukis menjadi blok, letakkan semula pada kedudukan, skala dan sudut lain, dan kemas blok yang tidak digunakan.
keywords: blok, bmake, selit, ddinsert, simbol, purge, pecahkan, takrif semula, titik asas, rujukan, kira, bcount, jadual, csv, atribut, pengekstrakan data
from: 125a129d
---

## Apa yang anda akan buat

Simbol pintu yang dijadikan blok bernama `DOOR-900`, kemudian diletakkan tiga kali: seperti yang dilukis, diputar 90 darjah, dan dicerminkan.

Blok ialah kumpulan objek yang dinamakan. Anda melukisnya sekali; setiap tempat anda menggunakannya ialah **rujukan blok** yang merujuk kepada satu takrif yang sama. Seksyen {{ui:Blocks}} dalam panel kiri menyenaraikan blok dalam lukisan dan berapa kerap setiap blok digunakan.

## Lukis pintu

1. Taip `L` dan tekan {{key:Enter}}.
2. Taip `0,0` dan tekan {{key:Enter}}.
3. Taip `@0,900` dan tekan {{key:Enter}}, kemudian tekan {{key:Enter}} sekali lagi. Ini ialah daun pintu.
4. Taip `A` dan tekan {{key:Enter}}.
5. Taip `C` dan tekan {{key:Enter}} untuk memberikan pusat dahulu.
6. Taip `0,0` dan tekan {{key:Enter}} untuk pusat.
7. Taip `900,0` dan tekan {{key:Enter}} untuk titik mula.
8. Taip `0,900` dan tekan {{key:Enter}} untuk titik akhir. Ini ialah lengkung ayunan.
9. Klik {{ui:Extents}}.

Lengkok bergerak lawan arah jam dari titik mula ke titik akhir.

## Buat blok

1. Taip `B` dan tekan {{key:Enter}}, atau klik {{ui:Make}} dalam kumpulan {{ui:Blocks}}.
2. Pada `Masukkan nama blok`, taip `DOOR-900` dan tekan {{key:Enter}}.
3. Pada `Tentukan titik asas selitan`, taip `0,0` dan tekan {{key:Enter}}. Ini ialah engsel: titik yang diletakkan di tempat blok diletakkan.
4. Pada `Pilih objek`, seret tetingkap mengelilingi daun dan lengkok.
5. Tekan {{key:Enter}}.

Sejarah berbunyi `Blok "DOOR-900" dibuat daripada 2 objek, dan objek tersebut digantikan dengan satu rujukan kepadanya.` Panel {{ui:Blocks}} menyenaraikan DOOR-900 dengan `1×` di sebelahnya: satu rujukan. Klik pintu itu: ia kini dipilih sebagai satu objek, "Rujukan blok".

:::tip
Anda boleh memilih objek dahulu dan kemudian taip `B`. CadCraft tetap meminta nama dan titik asas, kemudian menggunakan pilihan anda.
:::

## Selit blok

1. Taip `I` dan tekan {{key:Enter}}, atau klik {{ui:Insert}} di sebelah DOOR-900 dalam panel {{ui:Blocks}}.
2. Pada `Masukkan nama blok atau [Fail/Pustaka (L)] <DOOR-900>`, tekan {{key:Enter}}. (Butang {{ui:Insert}} dalam panel mengisi nama untuk anda.)
3. Pintu mengikuti kursor silang. Klik di tempat engsel patut diletakkan.

Pintu kedua muncul.

## Selit diputar atau diskala

1. Taip `I` dan tekan {{key:Enter}}, kemudian tekan {{key:Enter}} untuk menerima nama.
2. Pada `Tentukan titik selitan [Skala/Putar (R)]`, taip `R` dan tekan {{key:Enter}}.
3. Taip `90` dan tekan {{key:Enter}}. Pratonton berputar.
4. Klik untuk meletakkannya.

Taip `S` sebaliknya untuk menetapkan faktor skala; ia terpakai kepada kedua-dua arah. Skala dan putaran diingati untuk selitan seterusnya. Untuk mencerminkan pintu, selitkannya dan gunakan {{cmd:MIRROR}} pada rujukan.

## Tukar blok yang diletakkan

Pilih rujukan blok. Dalam panel kanan anda boleh menukar {{ui:X}}, {{ui:Y}}, {{ui:Scale X}}, {{ui:Scale Y}} dan {{ui:Rotation}}. {{ui:Scale X}} negatif akan membalikkannya.

## Takrif semula blok

Untuk menukar setiap pintu sekali gus, buat blok dengan nama yang sama:

1. Lukis versi baharu pintu.
2. Taip `B` dan tekan {{key:Enter}}, dan taip `DOOR-900`.
3. Pada `Blok "DOOR-900" sudah wujud. Takrifkan semula?`, taip `Y` dan tekan {{key:Enter}}.
4. Berikan titik asas dan pilih objek baharu, seperti sebelum ini.

Setiap rujukan kepada DOOR-900 kini menunjukkan versi baharu.

Atau sunting blok itu sendiri: {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}) membukanya secara berasingan, dan {{ui:Save block}} menyimpannya semula. Lihat [Atribut blok](topic:attributes#change-a-block-the-block-editor).

## Kira blok dan eksport jadual

Taip {{cmd:COUNT}} (atau {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}), kemudian:

- klik satu pintu: setiap pintu dalam ruang ini dipilih, dan sejarah menyatakan berapa banyak di sini dan dalam keseluruhan lukisan;
- atau tekan {{key:Enter}}: sejarah menyenaraikan setiap blok dengan kiraannya, yang paling banyak dahulu;
- atau taip `E`, kemudian `C` untuk CSV kiraan (dalam model, pada helaian, dan jumlah) atau `A` untuk satu baris bagi setiap rujukan dengan lapisannya, kedudukan, putaran dan setiap nilai atribut — jadual yang boleh anda buka dalam hamparan.

Blok tanpa nama (dimensi, jadual) dan rujukan di dalam blok lain tidak dikira. Sel yang bermula seperti formula (`=`, `+`, `-`, `@`) diberi `'` di hadapan supaya hamparan memaparkannya sebagai teks.

## Pecahkan dan purge

- {{cmd:EXPLODE}} (`X`) menukar rujukan blok yang dipilih kembali kepada objek berasingan. Takrifnya kekal.
- {{cmd:PURGE}} (`PU`) membuang takrif blok yang tiada apa-apa lagi gunakan. Sejarah menyatakan berapa banyak yang dibuang.

## Nama blok

Nama boleh mencapai 255 aksara dan boleh mengandungi ruang, tetapi tidak boleh bermula dengan asterisk, dan tidak boleh mengandungi `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` atau backtick. Apabila anda menyimpan DXF R12, nama ditulis dalam huruf besar, aksara selain huruf, digit, `$`, `_` dan `-` menjadi `_`, dan nama dipotong kepada 31 aksara; sejarah menyatakan berapa banyak yang berubah. Nama pendek dalam huruf besar, digit dan sengkang, seperti `DOOR-900`, kekal tanpa perubahan. DWG yang disimpan mengekalkan nama seperti yang anda taip, huruf besar dan kecil; hanya aksara yang DWG tidak benarkan yang berubah (`|` menjadi `$0$`, yang lain menjadi `_`).

## Tulis blok atau objek ke fail sendiri

Taip `W` ({{cmd:WBLOCK}}) dan pilih **Objek**, **Blok** atau **Seluruh lukisan**. Hasilnya ialah DWG atau DXF baharu yang hanya memegang lapisan, gaya dan blok yang digunakannya, dengan titik asas anda sebagai asalnya. Bagi objek, anda boleh menyimpannya, menukarnya menjadi blok, atau memadamkannya daripada lukisan ini.

## Ralat lazim

- **Blok mendarat jauh dari kursor silang.** Titik asas tidak berada pada objek. Buat semula blok dengan titik asas di sudut atau engsel.
- **"Tiada objek dipilih; tiada apa-apa dibuat."** Anda menekan {{key:Enter}} sebelum memilih apa-apa.
- **"Lukisan ini belum ada blok: F menyelit satu daripada fail, L daripada pustaka (atau buat satu dengan BLOCK)."** Taip `F` untuk membawa masuk blok daripada lukisan lain, atau `L` untuk pustaka. Lihat [Selit daripada fail atau pustaka](topic:insert-from-file-and-library).
- **"Viewport tidak boleh masuk ke dalam blok."** Tinggalkan bingkai viewport daripada pilihan.
