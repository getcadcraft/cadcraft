---
title: Atur ukuran, desimal, dan skala dimensi
summary: Pilih tinggi teks, ukuran panah, desimal, dan skala keseluruhan untuk dimensi baru, ubah dimensi yang sudah ada, dan pahami cara kerja gaya dimensi di CadCraft.
keywords: gaya dimensi, dimension style, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, skala keseluruhan, overall scale, desimal, decimals, ukuran panah, arrow size, skala anotasi, annotation scale, dimtextunit, satuan pada teks, units in the text, mm, cm, m, km, milimeter, millimetres, meter, metres, dimlfac, dimpost
from: 8ec82a07
---

## Yang akan Anda pelajari

Seberapa besar teks dan panah dimensi, cara mengaturnya untuk gambar yang dicetak pada 1:50 atau 1:100, dan cara mengubah dimensi yang sudah Anda buat.

## Cara kerja ukuran dimensi

Setiap dimensi membawa set ukurannya sendiri: tinggi teks, ukuran panah, desimal, jarak di sekeliling teks, seberapa jauh garis bantu melewati garis dimensi, dan seberapa jauh ia mulai dari objek. Default-nya mendekati gaya ISO yang umum:

| Pengaturan | Default | Perintah |
|---|---|---|
| Tinggi teks | 2.5 | {{cmd:DIMTXT}} |
| Ukuran panah | 2.5 | {{cmd:DIMASZ}} |
| Desimal | 2 (angka nol di belakang dihapus) | {{cmd:DIMDEC}} |
| Jarak di sekeliling teks | 0.625 | {{cmd:DIMGAP}} |
| Perpanjangan melewati garis dimensi | 1.25 | {{cmd:DIMEXE}} |
| Offset dari objek | 0.625 | {{cmd:DIMEXO}} |
| Skala keseluruhan | 1 | {{cmd:DIMSCALE}} |

Setiap ukuran dikalikan dengan **skala keseluruhan**. Atur ukuran seperti yang Anda inginkan di kertas (teks 2.5 mm), dan atur skala keseluruhan ke skala cetak (50 untuk 1:50). Teks kemudian setinggi 2.5 × 50 = 125 satuan gambar, yang tercetak 2,5 mm.

:::note
Gaya dimensi bernama dikelola dengan {{cmd:DIMSTYLE}}: lihat bagian di bawah. Setiap dimensi juga menyimpan pengaturan yang dibuat dengannya, sehingga Anda tetap dapat mengubah satu dimensi saja di {{ui:Properti}}.
:::

## Atur ukuran untuk dimensi baru

Kedua cara di bawah hanya mengubah dimensi yang Anda buat setelahnya.

### Di panel Pengaturan saat ini

1. Tekan {{key:Esc}} agar tidak ada yang terpilih. Pada tab {{ui:Model}}, panel kanan bertuliskan {{ui:Pengaturan saat ini}}.
2. Gulir panel ke bawah ke {{ui:Dimensi baru}}, melewati baris layer, warna, satuan, dan {{ui:Layer 0}} (pada layar kecil ia mulai di bawah tepi bawah). Klik di {{ui:Skala keseluruhan}}, ketik `50` dan tekan {{key:Enter}}.
3. Atur {{ui:Tinggi teks}}, {{ui:Ukuran panah}}, dan {{ui:Desimal}} dengan cara yang sama jika Anda menginginkan nilai lain.

Bilah status mengonfirmasi setiap pengaturan, misalnya "Skala keseluruhan untuk dimensi baru: 50".

### Di baris perintah

1. Ketik `DIMSCALE` dan tekan {{key:Enter}}.
2. Pada `Masukkan nilai baru untuk DIMSCALE <1>`, ketik `50` dan tekan {{key:Enter}}.

Riwayat mengonfirmasi "DIMSCALE = 50. Dimensi baru memakainya; pilih yang sudah ada untuk mengubah miliknya." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}}, dan {{cmd:DIMEXO}} bekerja dengan cara yang sama. Tekan {{key:Enter}} pada prompt untuk mempertahankan nilai saat ini.

### Kaki dan inci dalam dimensi

Dimensi baru memakai format panjang gambar: atur dengan {{ui:Format panjang}} di {{ui:Pengaturan saat ini}} atau {{cmd:UNITS}} (lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions)), dan dimensi berikutnya membaca `12'-6 1/2"`. {{cmd:DIMLUNIT}} hanya mengatur format dimensi (2 desimal, 3 teknik, 4 arsitektural, 5 pecahan). Untuk dimensi yang sudah Anda buat, pilih dimensinya dan pilih {{ui:Format}} di {{ui:Properti}}; dengan format pecahan, kotak {{ui:Pecahan}}-nya menerima pangkat dua (4 = 1/16).

## Dimensi dalam mm, cm, m, atau km

Dimensi mengukur dalam satuan gambar. Ia dapat menuliskan panjang itu dalam milimeter, sentimeter, meter, atau kilometer sebagai gantinya, dengan satuan setelah angka: dinding 1250 mm terbaca `1250 mm`, `125 cm`, `1.25 m`, atau `0.00125 km`.

1. Atur {{ui:Satuan}} gambar di {{ui:Pengaturan saat ini}} lebih dulu (lihat [Satuan, ukuran kertas, dan skala](topic:units-papers-scales#drawing-units)), agar CadCraft tahu apa itu satu satuan gambar. Gambar tanpa satuan dibaca sebagai milimeter, dan {{cmd:DIMTEXTUNIT}} menyatakannya.
2. Untuk dimensi baru: tekan {{key:Esc}} agar tidak ada yang terpilih, lalu di bawah {{ui:Dimensi baru}} pilih {{ui:Satuan pada teks}}: {{ui:Satuan gambar}}, `mm`, `cm`, `m`, atau `km`.
3. Untuk dimensi yang sudah Anda buat: pilih dimensinya, lalu di {{ui:Properti}} › {{ui:Satuan utama}} pilih {{ui:Satuan pada teks}}.

Atau ketik {{cmd:DIMTEXTUNIT}} (`DTU`) dan jawab `D`, `MM`, `CM`, `M`, atau `KM`: dengan dimensi terpilih ia mengubahnya (satu langkah urungkan); tanpa yang terpilih, ia mengatur dimensi baru.

{{ui:Desimal}} ({{cmd:DIMDEC}}) tetap mengatur berapa banyak tempat desimal yang tampil: dengan meter dan 3 desimal, 1234 mm terbaca `1.234 m`. Teks ditulis sebagai angka desimal. Pada lembar, dimensi mengukur dalam satuan kertas lembar (milimeter atau inci).

DWG atau DXF yang disimpan menyimpan pilihan itu sebagai skala ukur dimensi (DIMLFAC) dan sufiks (DIMPOST, ` m`), sehingga program lain menampilkan teks yang sama. Jika Anda nanti mengubah {{ui:Satuan}} gambar, dimensi yang ditulis dalam mm, cm, m, atau km disesuaikan ulang, sehingga tetap menyatakan panjang yang benar. {{ui:Diatur manual (skala atau sufiks)}} berarti {{ui:Skala ukur}} atau sufiks dimensi diatur dengan cara lain; pilih satuan untuk menggantinya.

## Ubah dimensi yang sudah Anda buat

1. Klik satu dimensi. Judul panel kanan bertuliskan {{ui:Dimensi}}.
2. Pengaturannya ada dalam beberapa bagian; gulir panel ke bawah untuk mencapai bagian berikutnya:
   - {{ui:Umum}}: {{ui:Gaya dimensi}}
   - {{ui:Geometri}}: {{ui:Jenis}} dan {{ui:Hasil ukur}} (hanya baca)
   - {{ui:Teks}}: {{ui:Teks pengganti}} dan {{ui:Tinggi teks}}
   - {{ui:Garis dan panah}}: {{ui:Ukuran panah}}
   - {{ui:Penyesuaian}}: {{ui:Skala keseluruhan}}
   - {{ui:Satuan utama}}: {{ui:Desimal}}
3. Ketik nilai baru dan tekan {{key:Enter}}.

Dimensi langsung digambar ulang. Untuk dimensi sudut, {{ui:Desimal (°)}} mengatur desimal sudutnya.

:::note
Dengan beberapa dimensi terpilih, panel menampilkan baris yang mereka miliki bersama, dan nilai yang berbeda di antara mereka tertulis {{ui:Bervariasi}}. Nilai yang Anda ketik mengubah setiap dimensi yang terpilih dalam satu langkah, sehingga satu {{key:Mod+Z}} mengembalikan semuanya.
:::

## Dimensi dari gambar yang dibuka

Dimensi dari DWG atau DXF yang dibuka ditampilkan persis seperti digambar program lain. Panelnya berbunyi "Ditampilkan seperti digambar oleh program pembuatnya. Ubah dan CadCraft menggambarnya ulang dengan gayanya sendiri." Begitu Anda mengubah nilai apa pun, memindahkan grip, atau memindahkan dimensinya, CadCraft menggambarnya ulang dengan panah dan font miliknya sendiri, memakai ukuran yang dibacanya dari file.

Beberapa dimensi hanya dapat dibaca sebagaimana digambar, bukan sebagai dimensi yang dapat diedit; panel kemudian menampilkan "Digambar dari" dan nama blok, dan kotak "Tentang file ini" menghitungnya.

## Kesalahan umum

- **Mengubah DIMSCALE tidak mengubah apa pun di layar.** Pengaturan itu untuk dimensi baru. Pilih yang sudah ada dan ubah {{ui:Skala keseluruhan}} di panel.
- **Desimal menampilkan lebih sedikit digit dari yang diatur.** Angka nol di belakang dihapus: 2 desimal menampilkan `1250` dan `1250.5`, bukan `1250.00`.
- **Teks setinggi yang benar di kertas dalam viewport, tetapi salah dalam cetak model.** Skala keseluruhan harus sama dengan skala tempat Anda mencetak. Mencetak dengan Pas ke kertas memberi skala yang aneh; pilih skala standar di dialog cetak.
- **Satuan seperti mm atau m di teks.** Pilih {{ui:Satuan pada teks}} (lihat [Dimensi dalam mm, cm, m, atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Untuk kata lain setelah angka, ketik di penggantian: `<> TYP.`.

## Gaya dimensi bernama

Ketik `DIMSTYLE` (`D`) untuk membuka {{ui:Pengelola gaya dimensi}}. Ia mencantumkan gaya gambar, berapa dimensi yang memakai setiap gaya, dan mana yang aktif. **Standard** selalu ada.

- {{ui:Jadikan aktif}}: dimensi baru memakai pengaturan gaya itu dan membawa namanya.
- {{ui:Baru…}}: gaya baru yang mulai sebagai salinan dari yang Anda pilih.
- {{ui:Ubah…}}: kolom yang sama dengan bagian dimensi di {{ui:Properti}} (garis dan panah, teks, penyesuaian, satuan, satuan alternatif, toleransi). Tekan {{ui:OK}} dan gaya berubah **dan setiap dimensi yang memakainya ikut berubah**, pengaturan demi pengaturan. Pengaturan yang Anda ubah pada satu dimensi saja tetap seperti semula kecuali gaya mengubah pengaturan itu.
- {{ui:Ganti nama…}} dan {{ui:Hapus}}: Standard tidak dapat diganti nama atau dihapus, begitu pula gaya yang aktif atau gaya yang dipakai dimensi.
- {{ui:Bandingkan…}}: apa yang berbeda di antara dua gaya.
- {{ui:Terapkan ke yang dipilih}}: pilih dimensi lebih dulu; mereka mengambil pengaturan gaya dan namanya.

`-DIMSTYLE` melakukan hal yang sama di baris perintah: `Restore`, `Save` (pengaturan saat ini, termasuk yang Anda ketik dengan {{cmd:DIMTXT}} dan lainnya, di bawah sebuah nama), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Gaya disimpan dalam DWG atau DXF (tabel gaya dimensinya) dan dibaca dari file yang Anda buka. Gaya yang *aktif* tidak disimpan: gambar terbuka dengan Standard aktif. Standard mempertahankan pengaturannya sendiri saat gaya lain aktif.

## Ubah teks dan garis bantu dimensi

{{cmd:DIMEDIT}} (`DED`) bekerja pada dimensi yang Anda pilih: **Home** mengembalikan teks ke tempat yang ditentukan gaya, **New** mengetik teks lain (`<>` mewakili pengukuran), **Rotate** memutar teks, **Oblique** memiringkan garis bantu dimensi linear dan sejajar ke sudut yang Anda ketik (tekan {{key:Enter}} untuk tidak ada). {{cmd:DIMTEDIT}} memindahkan teks ke **Left**, **Right**, atau **Center** dari garis dimensi, atau memutarnya (**Angle**), atau mengirimnya **Home**. Teks selalu berada di garis dimensi: ia tidak dapat diseret ke tempat bebas.
