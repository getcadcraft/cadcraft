---
title: Dimensikan pelan
summary: Tambah dimensi lelurus, sejajar, sudut, jejari dan diameter, rangkaikannya dengan Sambung dan Garis dasar, dan tulis ganti teksnya.
keywords: dimensi, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, rangkai, rentetan, anotasi, alat dimensi, di mana, cari, bar alat, ukur, mm, cm, m, km, unit
from: 9ee65123
---

## Apa yang akan anda hasilkan

Sebuah bilik yang didimensikan: lebar dan tinggi keseluruhan, satu rentetan dimensi sepanjang satu dinding, dinding bersudut, sudut bulat dan satu sudut.

Sebelum anda mula, baca [Tetapkan saiz dimensi](topic:dimension-settings) jika lukisan anda besar: teks dimensi ialah 2.5 unit lukisan tinggi secara lalai, yang terlalu kecil dalam lukisan yang diukur dalam milimeter. Untuk langkah di bawah, taip `DIMSCALE`, tekan {{key:Enter}}, taip `50` dan tekan {{key:Enter}} dahulu.

## Di mana alat dimensi

Dengan gaya menu CadCraft (yang CadCraft mulakan dengannya), alat dimensi berada dalam bar alat di atas lukisan, dalam kumpulan {{ui:Anotasi}}: {{ui:Lelurus}}, {{ui:Sejajar}}, {{ui:Sudut}}, {{ui:Jejari}} dan {{ui:Diameter}}. Menu {{ui:Lagi}} kumpulan itu mempunyai {{ui:Sambung dimensi}} dan {{ui:Dimensi garis dasar}}. Letakkan penunjuk di atas butang untuk melihat apa yang dilakukannya.

- Dengan gaya menu {{ui:Lukisan klasik}} atau {{ui:Reben}}, buka tab {{ui:Anotasi}}: alat berada dalam panel {{ui:Dimensi}}nya. {{ui:Lukisan klasik}} juga mempunyai {{ui:Lelurus}} pada tab {{ui:Laman utama}}, di bawah {{ui:Anotasi}}. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).
- Atau taip arahan pada baris arahan di bawah lukisan dan tekan {{key:Enter}}: `DLI` (lelurus), `DAL` (sejajar), `DAN` (sudut), `DRA` (jejari), `DDI` (diameter), `DCO` (sambung), `DBA` (garis dasar).
- Pada skrin sempit bar alat ialah satu baris: leret ke sisi untuk sampai ke {{ui:Anotasi}}.

Untuk menunjukkan panjang dalam milimeter, sentimeter, meter atau kilometer, lihat [Dimensi dalam mm, cm, m atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Lukis sesuatu untuk didimensikan

1. Taip `PL` dan tekan {{key:Enter}}.
2. Taip `0,0` dan tekan {{key:Enter}}.
3. Taip `@6000,0` dan tekan {{key:Enter}}.
4. Taip `@1500<60` dan tekan {{key:Enter}}.
5. Taip `@0,2700` dan tekan {{key:Enter}}.
6. Taip `@-6750,0` dan tekan {{key:Enter}}.
7. Taip `C` dan tekan {{key:Enter}}. Garis luar itu tertutup.
8. Taip `C` dan tekan {{key:Enter}} untuk mula bulatan.
9. Klik di dalam bilik, jauh dari dinding, untuk pusat.
10. Taip `600` dan tekan {{key:Enter}}. Ini ialah tiang.
11. Klik {{ui:Lingkungan}}.

## Lelurus: mengufuk atau menegak

1. Taip `DLI` dan tekan {{key:Enter}}.
2. Pada `Specify first extension line origin`, snap ke bucu kiri bawah (Titik hujung) dan klik.
3. Pada `Specify second extension line origin`, snap ke bucu kanan bawah dan klik.
4. Gerakkan rerambut silang di bawah bilik. Dimensi mengikut, mengufuk.
5. Klik untuk meletakkan garis dimensi.

Sejarah berbunyi `Dimension text = 6000`.

Di mana anda meletakkan garis menentukan arahnya: di bawah atau di atas memberi dimensi mengufuk, di kiri atau kanan memberi yang menegak. Untuk memaksanya, taip `H` (mengufuk), `V` (menegak) atau `R` (diputar, kemudian satu sudut) sebelum anda meletakkannya.

:::tip
Tekan {{key:Enter}} pada gesaan pertama dan bukannya memilih titik, kemudian klik satu garisan, lengkok, bulatan atau segmen polisegmen. CadCraft mengambil kedua-dua hujung untuk anda.
:::

## Sambung: rentetan dimensi

{{cmd:DIMCONTINUE}} ({{ui:Anotasi}} › {{ui:Lagi}} › {{ui:Sambung dimensi}}, atau `DCO`) menyambung dari dimensi lelurus atau sejajar terakhir yang anda buat, dengan setiap dimensi baharu bermula di tempat yang terakhir berakhir.

1. Taip `DLI` dan tekan {{key:Enter}}.
2. Taip `0,0` dan tekan {{key:Enter}} untuk asal pertama.
3. Taip `2000,0` dan tekan {{key:Enter}} untuk asal kedua.
4. Klik di bawah bilik untuk meletakkannya.
5. Taip `DCO` dan tekan {{key:Enter}}.
6. Taip `4500,0` dan tekan {{key:Enter}}. Dimensi kedua mengikut dari yang pertama, pada garisan yang sama.
7. Snap ke bucu kanan bawah dan klik. Yang ketiga melengkapkan rentetan.
8. Tekan {{key:Enter}} untuk menamatkan arahan.

:::note
Di sini titik ditaip sebagai koordinat mutlak dengan sengaja. Titik `@` mengira dari titik terakhir yang anda beri, dan titik terakhir ialah tempat anda meletakkan garis dimensi sebelumnya, bukan hujung dimensi. Titik mutlak, snap atau jarak terus dengan {{ui:Ortho}} dihidupkan adalah lebih selamat dalam rentetan dimensi.
:::

Taip `U` dan tekan {{key:Enter}} untuk mengambil balik dimensi terakhir dalam rentetan tanpa meninggalkan arahan.

## Garis dasar: dimensi disusun dari satu garisan

{{cmd:DIMBASELINE}} ({{ui:Anotasi}} › {{ui:Lagi}} › {{ui:Dimensi garis dasar}}, atau `DBA`) mengukur setiap dimensi baharu dari asal pertama yang terakhir, dan menyusun setiap satu sejauh satu langkah lebih keluar.

1. Taip `DLI` dan tekan {{key:Enter}}.
2. Snap ke bucu kiri bawah dan klik.
3. Snap ke bucu kiri atas dan klik.
4. Gerakkan rerambut silang ke kiri bilik dan klik. Dimensi menegak muncul.
5. Taip `DBA` dan tekan {{key:Enter}}.
6. Snap ke hujung atas dinding 60 darjah (Titik hujung) dan klik. Dimensi menegak kedua muncul, sejauh satu langkah lebih keluar daripada yang pertama.
7. Tekan {{key:Enter}} untuk tamat.

## Sejajar: panjang sebenar garisan condong

1. Taip `DAL` dan tekan {{key:Enter}}.
2. Tekan {{key:Enter}} untuk memilih objek.
3. Klik dinding 60 darjah.
4. Gerakkan ke luar dan klik untuk meletakkan.

Teks berbunyi 1500: panjang sebenar, diukur sepanjang dinding.

## Jejari dan diameter

1. Taip `DRA` dan tekan {{key:Enter}}.
2. Klik bulatan tiang.
3. Gerakkan rerambut silang. Penunjuk menghala dari pusat ke arah rerambut silang.
4. Klik untuk meletakkan teks.

Teks berbunyi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) melakukan perkara yang sama dengan tanda ⌀ dan diameter.

## Sudut

Dinding di sini ialah satu polisegmen, jadi ukur bucunya. (Antara dua garisan berasingan, anda boleh klik garisan-garisan itu sebaliknya.)

1. Taip `DAN` dan tekan {{key:Enter}}.
2. Pada `Select arc, circle or line, or Enter for a vertex`, tekan {{key:Enter}}.
3. Pada `Specify angle vertex`, snap ke bucu kanan bawah dan klik.
4. Pada `Specify first angle endpoint`, snap ke bucu kiri bawah dan klik.
5. Pada `Specify second angle endpoint`, snap ke hujung atas dinding 60 darjah dan klik.
6. Gerakkan rerambut silang ke dalam bilik, berhampiran bucu, dan klik.

Teks berbunyi `120°`, sudut dalaman bucu itu. Jika diletakkan di sisi lain bucu, dimensi mengukur sudut di sisi itu. Klik satu lengkok pada gesaan pertama untuk mendimensikan sudut yang dirangkumnya, atau klik dua garisan untuk mendimensikan sudut antara keduanya.

## Tukar teks

Untuk menulis teks anda sendiri, taip `T` dan tekan {{key:Enter}} sebelum anda meletakkan dimensi, kemudian taip teksnya. Dalam teks anda, `<>` mewakili nilai yang diukur: `<> TYP.` memberi `6000 TYP.`. Tekan {{key:Enter}} pada baris kosong untuk mengekalkan nilai yang diukur.

Untuk menukar dimensi yang sedia ada:

1. Klik padanya.
2. Dalam panel kanan, taip dalam {{ui:Teks}}. Biarkan kosong untuk nilai yang diukur.
3. Tekan {{key:Enter}}.

## Dimensi mengikut geometri

Dimensi mengingati titik-titiknya. Seret salah satu gripnya, atau alih, putar atau skalakan bersama objek yang diukurnya, dan ia mengukur semula. Jika anda meregangkan geometri tanpa mengalihkan dimensi, dimensi itu tidak mengikut: ia mengekalkan titik-titiknya sendiri.

## Kesilapan biasa

- **Teks dan anak panah terlalu kecil atau terlalu besar.** Tetapkan skala keseluruhan: lihat [Tetapkan saiz dimensi](topic:dimension-settings).
- **"Pilih titik di dalam sudut yang anda mahu ukur."** Titik yang anda klik untuk dimensi sudut berada pada salah satu kaki. Alihkannya ke dalam sudut.
- **Sambung bermula dari dimensi yang salah.** Ia sentiasa menyambung dari dimensi lelurus atau sejajar terakhir yang dibuat dalam sesi ini. Buat (atau buat semula) yang hendak disambung dahulu.
- **Dimensi keluar menegak.** Anda meletakkannya di sisi. Taip `H` sebelum meletakkannya.
- **Kaki dan inci.** Tetapkan format panjang lukisan kepada {{ui:Seni bina}} dahulu, atau {{ui:Format}} dimensi dalam {{ui:Sifat}}: lihat [Kaki dan inci dalam dimensi](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Nombor tidak dalam unit yang anda mahu.** Pilih {{ui:Unit dalam teks}}: lihat [Dimensi dalam mm, cm, m atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
</content>
