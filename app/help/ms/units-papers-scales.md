---
title: Unit, saiz kertas dan skala
summary: Maksud unit lukisan dalam CadCraft, saiz kertas untuk helaian dan plot, setiap skala standard, dan bagaimana saiz teks serta dimensi berkaitan dengan skala plot.
keywords: unit, milimeter, inci, kaki, kaki dan inci, seni bina, kejuruteraan, pecahan, pecahan, lunits, format panjang, ketepatan, meter, saiz kertas, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 inci, skala seni bina, skala kejuruteraan, insunits
from: 8346236a
---

## Unit lukisan

Anda melukis pada saiz penuh, dalam unit lukisan. Apa yang diwakili oleh satu unit ialah tetapan **Units** lukisan:

1. Tekan {{key:Esc}} supaya tiada apa dipilih, pada tab {{ui:Model}}.
2. Dalam {{ui:Current settings}}, pilih {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} atau {{ui:Feet}}.

Dimensi boleh menulis panjangnya dalam milimeter, sentimeter, meter atau kilometer tanpa mengira unit lukisan: lihat [Dimensi dalam mm, cm, m atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Menukar unit tidak mengubah saiz apa-apa. Ia menukar cara skala dibaca pada helaian dan dalam plot, serta skala mana yang ditawarkan. Lukisan yang dibuka daripada DWG atau DXF mengekalkan unit yang disimpan dalam fail; seksyen {{ui:Drawing}} dalam panel kiri menunjukkannya.

Lukisan {{ui:Unitless}} dianggap sebagai unit kertas: milimeter pada kertas ISO, inci pada kertas US.

## Kaki dan inci, dan pecahan

Cara panjang **ditulis dan ditaip** ialah tetapan berasingan, iaitu format panjang. Ia tidak mengubah geometri, hanya cara nombor kelihatan dan apa yang boleh anda taip.

1. Tekan {{key:Esc}} supaya tiada apa dipilih, pada tab {{ui:Model}}.
2. Dalam {{ui:Current settings}}, pilih {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) atau {{ui:Scientific}} (`1.505E+02`).
3. Pilih {{ui:Precision}}: tempat perpuluhan, atau pecahan terkecil (1/16 ialah pilihan biasa untuk seni bina).

Atau taip {{cmd:UNITS}} (`UN`) dan jawab dua soalannya.

Dengan {{ui:Architectural}} atau {{ui:Engineering}}, satu unit lukisan ialah satu inci, seperti dalam AutoCAD: tetapkan {{ui:Units}} kepada {{ui:Inches}} juga. Anda kemudian boleh menaip panjang dalam kaki dan inci di mana-mana panjang diminta, dan dalam kotak {{ui:Properties}}:

| Anda taip | Maksudnya |
|---|---|
| `12'6"` atau `12'-6"` | 12 kaki 6 inci (150) |
| `12'6-1/2"` | 12 kaki 6½ inci. Gunakan sengkang sebelum pecahan: {{key:Space}} ialah {{key:Enter}} pada baris arahan. |
| `12'` | 12 kaki |
| `6"` atau `6` | 6 inci: nombor biasa ialah inci |
| `1/2`, `6-1/2` | pecahan berfungsi dalam mana-mana format |

Titik mengambil panjang yang sama: `@12'6",0` atau `@10'<90`. Sudut kekal dalam darjah.

Format itu ditunjukkan dalam sejarah ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: luas sebagai inci persegi dan kaki persegi), dalam {{ui:Properties}}, dalam koordinat pada bar status, dan dalam **dimensi baharu**. Helaian mengekalkan unit kertasnya (milimeter atau inci) sebagai perpuluhan.

:::note
Format panjang disimpan dalam fail DWG dan DXF, dan setiap dimensi mengekalkan miliknya sendiri: lukisan yang disimpan dibuka semula seperti yang anda tinggalkan.
:::

## Saiz kertas

Helaian dan plot model menggunakan saiz ini, dalam mana-mana orientasi:

| Kertas | Saiz | Unit pada helaian |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimeter |
| ISO A3 | 420 × 297 mm | milimeter |
| ISO A2 | 594 × 420 mm | milimeter |
| ISO A1 | 841 × 594 mm | milimeter |
| ISO A0 | 1189 × 841 mm | milimeter |
| Letter | 11 × 8.5 in | inci |
| Legal | 14 × 8.5 in | inci |
| Tabloid / ANSI B | 17 × 11 in | inci |
| ANSI C | 22 × 17 in | inci |
| ANSI D | 34 × 22 in | inci |
| ARCH C | 24 × 18 in | inci |
| ARCH D | 36 × 24 in | inci |
| ARCH E | 48 × 36 in | inci |

Helaian baharu bermula pada ISO A3 bagi lukisan metrik dan tanpa unit, dan pada Tabloid bagi lukisan dalam inci atau kaki. Plot model bermula pada ISO A4 atau Letter dengan cara yang sama, kemudian mengingati pilihan terakhir anda. Helaian daripada fail yang dibuka mengekalkan saiz sendiri, yang ditunjukkan sebagai "Custom" apabila ia bukan salah satu daripada ini.

## Skala

Skala `1:n` bermaksud satu unit pada kertas menunjukkan n unit yang sama dalam model, jadi 1:100 menunjukkan 1 m bangunan sebagai 10 mm kertas. CadCraft mengira ini daripada unit lukisan dan unit kertas.

**Skala metrik**, ditawarkan untuk setiap lukisan: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Skala seni bina**, ditawarkan apabila unit ialah inci atau kaki: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Skala kejuruteraan**, ditawarkan apabila unit ialah inci atau kaki: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Skala anda sendiri.** Taip `SCALELISTEDIT` (atau `SCALELIST`) untuk menambah skala sendiri, seperti 1:75 atau skala tapak 2 kertas : 300 lukisan. `Add` meminta nama, kemudian unit kertas dan unit lukisan (nama seperti `1:75` menawarkan nombornya sendiri; tekan {{key:Enter}} untuk menerimanya). `Edit`, `Delete`, `List` dan `Reset` berfungsi pada senarai yang sama; `Reset` kembali kepada senarai standard. Skala anda muncul selepas yang standard dalam senarai skala viewport dalam {{ui:Properties}} dan dalam kotak dialog {{ui:Plot to PDF}}; viewport pada skala itu dibaca dengan namanya; dan ia disimpan dalam lukisan (DWG dan DXF 2000) sebagai senarai skala lukisan. Lukisan yang dibuka daripada program lain membawa senaraiannya masuk; skala yang sepadan dengan yang standard tidak ditunjukkan dua kali.

Apabila viewport disasarkan dengan {{ui:Show the whole model}} atau {{ui:Pick a window on the model…}}, CadCraft memilih skala standard terbesar yang muat. {{ui:Fit the whole model}} menetapkan skala tepat sebaliknya, yang dipaparkan sebagai nisbah biasa.

## Saiz pada kertas dan dalam model

Saiz teks dan dimensi berada dalam unit ruang yang anda lukis.

| Anda mahu pada kertas | Dilukis pada helaian | Dilukis dalam model pada 1:50 (lukisan mm) | Dilukis dalam model pada 1/4" = 1'-0" (lukisan inci) |
|---|---|---|---|
| teks 2.5 mm | 2.5 | 125 | — |
| teks 3/32" | 0.09375 | — | 4.5 |

Bagi dimensi, kekalkan saiz sebagai saiz kertas dan tetapkan skala keseluruhan ({{cmd:DIMSCALE}}) kepada skala plot: 50 untuk 1:50, 48 untuk 1/4" = 1'-0". Lihat [Tetapkan saiz dimensi](topic:dimension-settings).

## Anotasi mengikut skala

Lukis model pada saiz penuh dan biarkan CadCraft membuat pengiraan di atas untuk anda.

1. Pilih teks atau dimensi yang perlu mengekalkan saiznya pada kertas. Dalam {{ui:Properties}} tandakan {{ui:Annotative}}. {{ui:Size on paper}} kemudian berbunyi, contohnya, `2.5 mm at 1:50`.
2. Taip {{cmd:ANNOSCALE}} dan skala lukisan akan dicetak, seperti `1:100`.

Setiap teks dan dimensi beranotasi diubah saiz supaya ia dicetak pada saiz yang sama pada skala baharu: teks 2.5 mm ialah 125 tinggi dalam lukisan milimeter pada 1:50 dan 250 tinggi pada 1:100. Lebar perenggan berubah bersamanya; teks dimensi, anak panah dan jurangnya berubah bersama (skala keseluruhannya). Ia ialah satu langkah buat asal, dan objek yang bukan beranotasi tidak pernah diubah.

Tetapan itu disimpan dalam DWG dan DXF: program lain membaca bendera beranotasi, dan CadCraft juga mengekalkan skala yang setiap objek disaizkan untuknya.

Jika pejabat anda menetapkan ketinggian kertas dalam add-on Dasar Lalai (Tetapan › Global › Dasar Lalai › Saiz anotasi pada kertas), {{cmd:ANNOSCALE}} juga menetapkan ketinggian yang teks baharu mula dengannya kepada ketinggian pejabat untuk nota pada skala itu. Lihat [Dasar Lalai](topic:default-policies).

### Satu objek pada beberapa skala

Helaian selalunya menunjukkan pelan yang sama pada 1:100 dan sebahagian daripadanya pada 1:50. Berikan nota dan dimensi kedua-dua skala, dan setiap viewport menunjukkannya pada saiz kertasnya:

1. Pilih teks dan dimensi beranotasi, dan taip `OBJECTSCALE`.
2. Pilih `Add` dan taip skala, contohnya `1:50`. (`Current scale` menambah skala anotasi lukisan; `List` menunjukkan apa yang setiap objek simpan; `Delete` mengalih satu keluar.)

Viewport yang skalanya berada dalam senarai objek menunjukkannya pada saiz untuk skala itu: teks 2.5 mm dilukis 250 tinggi melalui viewport 1:100 dan 125 tinggi melalui yang 1:50, pada skrin dan dalam plot. Objek kekal di tempatnya; hanya saiznya berbeza. Dalam viewport pada skala yang tiada dalam senarai objek, objek ditunjukkan pada saiz yang dimilikinya, sehingga anda menaip `ANNOALLVISIBLE` dan memilih `OFF`: maka ia ditinggalkan di sana. {{cmd:ANNOSCALE}} mengubah saiz objek yang menyenaraikan skala baharu dan membiarkan yang lain seperti sedia ada.

Senarai disimpan dalam DWG dan DXF sebagai data CadCraft sendiri. Program lain melihat setiap objek sebagai beranotasi, pada satu skala yang ia disaizkan untuknya. Suis ANNOALLVISIBLE tidak disimpan dalam fail.

## Ketebalan garisan dan jenis garisan

Lapisan, atau objek, boleh mempunyai **ketebalan garisan** (0.05 hingga 2.11 mm) dan **jenis garisan** (putus-putus, tersembunyi, pusat, fantom, titik…). Tetapkannya dalam panel kanan: dengan tiada apa dipilih, {{ui:Linetype}} dan {{ui:Lineweight}} di bawah {{ui:Current settings}} ialah apa yang diterima objek baharu ({{ui:By layer}} untuk mengikut lapisan mereka), dan dua di bawah {{ui:Layer …}} ialah milik lapisan semasa. Dengan objek dipilih, dua baris yang sama dan {{ui:Linetype scale}} mengubah objek itu. Arahannya ialah {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) dan {{cmd:LTSCALE}} (`LTS`).

Jenis garisan dipaparkan pada skrin dan dalam plot. Putus-putusnya dalam unit lukisan: lukisan metrik menggunakan saiz ISO (DASHED: putus-putus 12.7 mm), lukisan inci saiz inci (0.5"). Jika putus-putus kelihatan terlalu kecil atau besar, tukar {{ui:Linetype scale}} lukisan (LTSCALE): setiap putus dan jurang didarab dengannya; skala milik objek mendarabkannya sekali lagi. Corak yang terlalu halus untuk dilihat langsung dilukis sebagai garisan pepejal.

Ketebalan garisan dicetak dalam plot, dalam mm pada kertas tanpa mengira skala. Garisan dengan ketebalan {{ui:Default}} menggunakan lebar pen yang dipilih dalam kotak dialog {{ui:Plot to PDF}} (0.13 hingga 0.70 mm; 0.25 mm sebagai permulaan); ketebalan garisan 0 dicetak sebagai garisan paling nipis. Pada skrin setiap garisan ialah satu piksel lebar sehingga anda menekan {{ui:LWT}} dalam bar status (atau taip {{cmd:LWDISPLAY}}): kemudian ketebalan garisan melebihi 0.25 mm dilukis lebih lebar (0.5 mm = 2 piksel) dalam model, dan pada lebar sebenar di atas kertas pada helaian. Pilihan itu disimpan dalam pelayar ini.
