---
title: Tetapkan saiz dimensi, perpuluhan dan skala
summary: Pilih ketinggian teks, saiz anak panah, perpuluhan dan skala keseluruhan untuk dimensi baharu, tukar yang sedia ada, dan fahami cara gaya dimensi berfungsi dalam CadCraft.
keywords: gaya dimensi, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, skala keseluruhan, perpuluhan, saiz anak panah, skala anotasi, dimtextunit, unit dalam teks, mm, cm, m, km, milimeter, meter, dimlfac, dimpost
from: 8ec82a07
---

## Apa yang akan anda pelajari

Betapa besarnya teks dimensi dan anak panah, cara menetapkannya untuk lukisan yang dicetak pada 1:50 atau 1:100, dan cara menukar dimensi yang sudah anda buat.

## Bagaimana saiz dimensi berfungsi

Setiap dimensi membawa set saiznya sendiri: ketinggian teks, saiz anak panah, perpuluhan, jurang di sekeliling teks, sejauh mana garis lanjutan berjalan melepasi garis dimensi dan sejauh mana ia bermula dari objek. Lalai hampir dengan gaya ISO yang biasa:

| Tetapan | Lalai | Arahan |
|---|---|---|
| Ketinggian teks | 2.5 | {{cmd:DIMTXT}} |
| Saiz anak panah | 2.5 | {{cmd:DIMASZ}} |
| Perpuluhan | 2 (sifar di hujung dibuang) | {{cmd:DIMDEC}} |
| Jurang di sekeliling teks | 0.625 | {{cmd:DIMGAP}} |
| Lanjutan melepasi garis dimensi | 1.25 | {{cmd:DIMEXE}} |
| Ofset dari objek | 0.625 | {{cmd:DIMEXO}} |
| Skala keseluruhan | 1 | {{cmd:DIMSCALE}} |

Setiap saiz didarab dengan **skala keseluruhan**. Tetapkan saiz seperti yang anda mahukan pada kertas (teks 2.5 mm), dan tetapkan skala keseluruhan kepada skala cetakan (50 untuk 1:50). Teks kemudian 2.5 × 50 = 125 unit lukisan tinggi, yang dicetak pada 2.5 mm.

:::note
Gaya dimensi bernama diurus dengan {{cmd:DIMSTYLE}}: lihat bahagian di bawah. Setiap dimensi juga menyimpan tetapan yang digunakan semasa ia dibuat, jadi anda masih boleh menukar satu dimensi sahaja dalam {{ui:Sifat}}.
:::

## Tetapkan saiz untuk dimensi baharu

Kedua-dua cara di bawah hanya menukar dimensi yang anda buat selepas itu.

### Dalam panel Tetapan semasa

1. Tekan {{key:Esc}} supaya tiada apa yang dipilih. Pada tab {{ui:Model}} panel kanan berbunyi {{ui:Tetapan semasa}}.
2. Skrol ke bawah panel ke {{ui:Dimensi baharu}}, melepasi baris lapisan, warna, unit dan {{ui:Lapisan 0}} (pada skrin kecil ia bermula di bawah tepi bawah). Klik dalam {{ui:Skala keseluruhan}}, taip `50` dan tekan {{key:Enter}}.
3. Tetapkan {{ui:Ketinggian teks}}, {{ui:Saiz anak panah}} dan {{ui:Perpuluhan}} dengan cara yang sama jika anda mahukan nilai lain.

Bar status mengesahkan setiap satu, contohnya "Skala keseluruhan untuk dimensi baharu: 50".

### Pada baris arahan

1. Taip `DIMSCALE` dan tekan {{key:Enter}}.
2. Pada `Enter new value for DIMSCALE <1>`, taip `50` dan tekan {{key:Enter}}.

Sejarah mengesahkan "DIMSCALE = 50. Dimensi baharu menggunakannya; pilih yang sedia ada untuk menukar skalanya." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} dan {{cmd:DIMEXO}} berfungsi dengan cara yang sama. Tekan {{key:Enter}} pada gesaan untuk mengekalkan nilai semasa.

### Kaki dan inci dalam dimensi

Dimensi baharu menggunakan format panjang lukisan: tetapkannya dengan {{ui:Format panjang}} dalam {{ui:Tetapan semasa}} atau {{cmd:UNITS}} (lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions)), dan dimensi seterusnya membaca `12'-6 1/2"`. {{cmd:DIMLUNIT}} hanya menetapkan format dimensi (2 perpuluhan, 3 kejuruteraan, 4 seni bina, 5 pecahan). Untuk dimensi yang sudah anda buat, pilihnya dan pilih {{ui:Format}} dalam {{ui:Sifat}}; dengan format pecahan, kotak {{ui:Pecahan}} mengambil kuasa dua (4 = 1/16).

## Dimensi dalam mm, cm, m atau km

Dimensi mengukur dalam unit lukisan. Ia boleh menulis panjang itu dalam milimeter, sentimeter, meter atau kilometer sebaliknya, dengan unit selepas nombor: dinding 1250 mm dibaca `1250 mm`, `125 cm`, `1.25 m` atau `0.00125 km`.

1. Tetapkan dahulu {{ui:Unit}} lukisan dalam {{ui:Tetapan semasa}} (lihat [Unit, saiz kertas dan skala](topic:units-papers-scales#drawing-units)), supaya CadCraft tahu apa itu satu unit lukisan. Lukisan tanpa unit dibaca sebagai milimeter, dan {{cmd:DIMTEXTUNIT}} menyatakannya.
2. Untuk dimensi baharu: tekan {{key:Esc}} supaya tiada apa yang dipilih, dan di bawah {{ui:Dimensi baharu}} pilih {{ui:Unit dalam teks}}: {{ui:Unit lukisan}}, `mm`, `cm`, `m` atau `km`.
3. Untuk dimensi yang sudah anda buat: pilihnya, dan dalam {{ui:Sifat}} › {{ui:Unit utama}} pilih {{ui:Unit dalam teks}}.

Atau taip {{cmd:DIMTEXTUNIT}} (`DTU`) dan jawab `D`, `MM`, `CM`, `M` atau `KM`: dengan dimensi dipilih ia menukarnya (satu langkah buat asal), tanpa apa yang dipilih ia menetapkan dimensi baharu.

{{ui:Perpuluhan}} ({{cmd:DIMDEC}}) masih menetapkan berapa tempat perpuluhan ditunjukkan: dengan meter dan 3 perpuluhan, 1234 mm dibaca `1.234 m`. Teks ditulis sebagai nombor perpuluhan. Pada helaian, dimensi diukur dalam unit kertas helaian (milimeter atau inci).

DWG atau DXF yang disimpan mengekalkan pilihan itu sebagai skala ukuran dimensi (DIMLFAC) dan akhiran (DIMPOST, ` m`), supaya program lain menunjukkan teks yang sama. Jika anda menukar {{ui:Unit}} lukisan kemudian, dimensi yang ditulis dalam mm, cm, m atau km akan disesuaikan semula, supaya ia terus menyatakan panjang yang betul. {{ui:Ditetapkan sendiri (skala atau akhiran)}} bermaksud {{ui:Skala ukuran}} atau akhiran dimensi ditetapkan dengan cara lain; pilih unit untuk menggantikannya.

## Tukar dimensi yang sudah anda buat

1. Klik satu dimensi. Tajuk panel kanan berbunyi {{ui:Dimensi}}.
2. Tetapan berada dalam bahagian; skrol ke bawah panel untuk sampai ke yang lebih lewat:
   - {{ui:Umum}}: {{ui:Gaya dimensi}}
   - {{ui:Geometri}}: {{ui:Jenis}} dan {{ui:Ukuran}} (baca sahaja)
   - {{ui:Teks}}: {{ui:Teks ganti}} dan {{ui:Ketinggian teks}}
   - {{ui:Garisan dan anak panah}}: {{ui:Saiz anak panah}}
   - {{ui:Muat}}: {{ui:Skala keseluruhan}}
   - {{ui:Unit utama}}: {{ui:Perpuluhan}}
3. Taip nilai baharu dan tekan {{key:Enter}}.

Dimensi dilukis semula serta-merta. Untuk dimensi sudut, {{ui:Perpuluhan (°)}} menetapkan perpuluhan sudut.

:::note
Dengan beberapa dimensi dipilih, panel menunjukkan baris yang mereka kongsi, dan nilai yang berbeza antara mereka dibaca {{ui:Berbeza-beza}}. Nilai yang anda taip menukar setiap dimensi yang dipilih dalam satu langkah, jadi satu {{key:Mod+Z}} mengembalikan semuanya.
:::

## Dimensi dari lukisan yang dibuka

Dimensi dari DWG atau DXF yang dibuka ditunjukkan tepat seperti program lain melukisnya. Panelnya berkata "Ditunjukkan seperti yang dilukis oleh program yang membuatnya. Tukarnya dan CadCraft melukisnya semula dalam gayanya sendiri." Sebaik sahaja anda menukar mana-mana nilai, mengalihkan grip, atau mengalihkan dimensi, CadCraft melukisnya semula dengan anak panah dan fontnya sendiri, menggunakan saiz yang dibacanya dari fail.

Sesetengah dimensi hanya boleh dibaca seperti yang dilukis, bukan sebagai dimensi yang boleh disunting; panel kemudian menunjukkan "Dilukis dari" dan nama blok, dan kotak "Tentang fail ini" mengiranya.

## Kesilapan biasa

- **Menukar DIMSCALE tidak mengubah apa-apa di skrin.** Tetapan itu untuk dimensi baharu. Pilih yang sedia ada dan tukar {{ui:Skala keseluruhan}} dalam panel.
- **Perpuluhan menunjukkan kurang digit daripada yang ditetapkan.** Sifar di hujung dibuang: 2 perpuluhan menunjukkan `1250` dan `1250.5`, bukan `1250.00`.
- **Teks mempunyai ketinggian yang betul pada kertas dalam viewport tetapi salah dalam cetakan model.** Skala keseluruhan mesti sepadan dengan skala yang anda cetak. Mencetak pada Muat ke kertas memberi skala yang ganjil; pilih skala standard dalam dialog cetakan.
- **Unit seperti mm atau m dalam teks.** Pilih {{ui:Unit dalam teks}} (lihat [Dimensi dalam mm, cm, m atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Untuk mana-mana perkataan lain selepas nombor, taipnya dalam penggantian: `<> TYP.`.

## Gaya dimensi bernama

Taip `DIMSTYLE` (`D`) untuk membuka {{ui:Pengurus gaya dimensi}}. Ia menyenaraikan gaya lukisan, berapa banyak dimensi menggunakan setiap satu, dan yang mana semasa. **Standard** sentiasa ada.

- {{ui:Tetapkan semasa}}: dimensi baharu menggunakan tetapan gaya itu dan membawa namanya.
- {{ui:Baharu…}}: gaya baharu yang bermula sebagai salinan satu yang anda pilih.
- {{ui:Ubah suai…}}: medan yang sama seperti bahagian dimensi dalam {{ui:Sifat}} (garisan dan anak panah, teks, muat, unit, unit alternatif, toleransi). Tekan {{ui:OK}} dan gaya itu berubah **dan setiap dimensi yang menggunakannya turut berubah bersamanya**, tetapan demi tetapan. Tetapan yang anda tukar pada satu dimensi sahaja kekal seperti itu melainkan gaya menukar tetapan itu.
- {{ui:Namakan semula…}} dan {{ui:Padam}}: Standard tidak boleh dinamakan semula atau dipadam, begitu juga gaya semasa atau gaya yang digunakan oleh dimensi.
- {{ui:Bandingkan…}}: apa yang berbeza antara dua gaya.
- {{ui:Guna pada yang dipilih}}: pilih dimensi dahulu; mereka mengambil tetapan gaya itu dan namanya.

`-DIMSTYLE` melakukan perkara yang sama pada baris arahan: `Restore`, `Save` (tetapan semasa, termasuk apa yang anda taip dengan {{cmd:DIMTXT}} dan yang lain, di bawah satu nama), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Gaya disimpan dalam DWG atau DXF (jadual gaya dimensinya) dan dibaca dari fail yang anda buka. Gaya *semasa* tidak disimpan: lukisan dibuka dengan Standard sebagai semasa. Standard mengekalkan tetapannya sendiri semasa gaya lain menjadi semasa.

## Tukar teks dimensi dan garis lanjutan

{{cmd:DIMEDIT}} (`DED`) berfungsi pada dimensi yang anda pilih: **Home** meletakkan semula teks ke tempat gaya meletakkannya, **New** menaip teks lain (`<>` mewakili ukuran), **Rotate** memutar teks, **Oblique** mencondongkan garis lanjutan bagi dimensi lelurus dan sejajar kepada sudut yang anda taip (tekan {{key:Enter}} untuk tiada). {{cmd:DIMTEDIT}} mengalihkan teks ke **Left**, **Right** atau **Center** garis dimensi, atau memutarnya (**Angle**), atau menghantarnya **Home**. Teks sentiasa berada pada garis dimensi: ia tidak boleh diseret ke tempat yang bebas.
