---
title: Panel Properti
summary: Lihat dan ubah semua hal tentang objek yang dipilih, banyak sekaligus: koordinat dengan Z, ukuran, teks, pengaturan dimensi, transparansi, dan lainnya. Kolom menerima ekspresi dan panjang dengan satuan.
keywords: totals, total panjang, total luas, jumlah, panjang pilihan, properties, palet properti, ctrl+1, pr, ch, mo, ddmodify, varies, pemilihan cepat, pickadd, koordinat, z, elevasi, ketebalan, transparansi, material, hyperlink, ekspresi, quickcalc, verteks, gaya dimensi, toleransi, desimal
from: 10d6a829
---

## Yang akan Anda pelajari

Cara membuka panel Properti, mengubah satu objek atau seratus dalam satu langkah, mengetik koordinat yang tepat (dengan Z), menggunakan ekspresi dan satuan di kolom angka mana pun, dan apa yang ditampilkan setiap jenis objek.

## Buka panel

Panel berada di sebelah kanan. Untuk membawanya ke depan:

- Tekan {{key:Mod+1}}, atau ketik {{cmd:PROPERTIES}} (atau `PR`, `CH`, `MO`).
- Klik ganda objek (teks dan multileader membuka editor teksnya).

Panel ini adalah panel yang dapat dipindah seperti yang lain: seret gripnya untuk menambatkannya di kiri, kanan, atau bawah, atau jatuhkannya di atas gambar untuk membuatnya mengambang (lihat [Atur panel dan gunakan monitor kedua](common:arrange-panels)).

### Lipat

Tombol pin di kanan atas panel menyalakan **auto-hide**: panel terlipat menjadi strip di tepi kanan dan gambar mendapat ruang. Arahkan ke strip (atau tekan {{key:Mod+1}}) dan panel terbuka di atas gambar; pindah menjauh dan ia terlipat lagi. Klik pin lagi untuk membiarkannya terbuka. {{cmd:PROPERTIESCLOSE}} juga melipatnya.

## Bagian

Properti dikelompokkan dalam bagian yang dapat Anda lipat: **General**, **Geometry**, **Text**, **Lines and arrows**, **Fit**, **Primary units**, **Alternate units**, **Tolerances**, **Pattern**, **Misc**, dan untuk blok **Attributes** serta **Library item**. Klik nama bagian untuk melipat atau membukanya; CadCraft mengingat mana yang Anda lipat.

Seret garis tipis di antara nama dan nilai untuk membuat nama lebih lebar atau lebih sempit. Klik ganda garis itu untuk mengembalikannya. Dengan keyboard, fokuskan garis itu dan gunakan tombol panah.

## Ubah nilai

1. Klik sebuah baris. Judulnya tertulis "Line".
2. Klik di {{ui:Length}}. Saat Anda mengedit, kolom menampilkan nilai penuh, bukan yang dibulatkan.
3. Ketik `2500` dan tekan {{key:Enter}}. Garisnya kini 2500 panjangnya, dengan titik awal dan sudutnya tetap.

{{key:Enter}} atau klik di tempat lain menerapkan nilai; {{key:Esc}} mengembalikan nilai lama. Setiap perubahan adalah satu langkah urungkan.

### Ekspresi dan satuan

Setiap kolom angka menerima lebih dari sekadar angka biasa:

| Anda ketik | Anda dapat |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inci, dalam gambar dengan kaki dan inci) |
| `900mm`, `3.5m`, `2ft` | Dikonversi ke satuan gambar |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (kolom sudut) |
| `0.5r`, `100g` | Radian dan grad, sebagai derajat |

Panjang dengan satuan membutuhkan gambar yang memiliki satuan: atur {{ui:Units}} di bawah {{ui:New objects}} (tanpa ada yang dipilih) terlebih dahulu. Entri yang buruk ditolak dengan catatan di bawah panel dan tidak ada yang berubah; ia tidak pernah disimpan sebagai 0. Fungsi: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; sudut dalam derajat.

## Ubah banyak objek sekaligus

1. Pilih beberapa objek, misalnya 8 garis dan 4 dimensi.
2. Judulnya menulis "12 objects", dan sebuah daftar di atas menawarkan **All (12)**, **Line (8)**, dan **Dimension (4)**.
3. **All** menampilkan apa yang dimiliki setiap objek (layer, warna, jenis garis…). Pilih **Dimension (4)** untuk melihat pengaturan dimensi.
4. Ubah sebuah nilai, misalnya {{ui:Decimals}} menjadi `1`.

Keempat dimensi berubah, dalam satu langkah urungkan. Kolom yang bertuliskan **Varies** berarti objek-objeknya berbeda; mengetik nilai akan mengatur nilai itu ke semuanya. Objek pada layer terkunci dibiarkan apa adanya, dan catatannya menyebutkan berapa banyak.

## Total dari pilihan

Dengan beberapa objek dipilih, bagian {{ui:Totals}} di atas menyatakan:

- **Objects**: berapa banyak dari setiap jenis, misalnya "8 lines, 2 polylines, 1 circle".
- **Total length**: garis, busur, dan polyline dijumlahkan (spline ikut dihitung), dan berapa banyak objek itu.
- **Total area**: yang tertutup dijumlahkan: lingkaran, elips utuh, polyline tertutup, dan hatch (lubang pada hatch dikurangkan).

Totalnya ditampilkan dalam format panjang gambar (kaki dan inci bila gambar memakainya; luas kemudian dalam inci persegi dan kaki persegi). Status bar menampilkan panjang dan luas yang sama setiap kali objek dipilih; {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Length and area of the selection}} › {{ui:Hidden}} mematikannya. Untuk satu objek, {{ui:Geometry}} menampilkan panjang dan luasnya sendiri, seperti sebelumnya.

## Koordinat

Setiap titik menampilkan **X**, **Y**, dan **Z**: awal dan akhir garis, pusat, titik sisip, posisi teks, verteks polyline saat ini. Garis juga menampilkan **Delta X**, **Delta Y**, dan **Delta Z** (hanya baca). Polyline dan hatch memiliki **Elevation** (satu Z untuk seluruh objek).

Tombol bidik di sebelah nama titik memungkinkan Anda memilihnya di gambar sebagai gantinya: klik, lalu klik posisi baru (snap berfungsi). Nilai adalah koordinat dunia.

## General

| Kolom | Isinya |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Seperti di panel layer; {{ui:By layer}} mengikuti layer |
| {{ui:Transparency}} | By layer, by block, atau 0 sampai 90% |
| {{ui:Thickness}} | Seberapa jauh garis, lingkaran, busur, polyline, titik, dan teks meluas dalam Z |
| {{ui:Material}} | By layer, by block, Global, atau nama yang dibawa gambar |
| {{ui:Plot style}} | Hanya baca: gambar dicetak berdasarkan warna, melalui [tabel gaya plot](topic:plot-pdf#plot-style-tables) lembar |
| {{ui:Hyperlink}} | Alamat web yang disimpan bersama objek |

## Apa yang ditampilkan setiap jenis

| Dipilih | Yang dapat Anda ubah |
|---|---|
| Line | Awal dan akhir X, Y, Z; panjang; sudut |
| Circle | Pusat; radius; diameter; keliling; luas (masing-masing mengatur radius) |
| Arc | Pusat; radius; sudut awal dan akhir; sudut total; tali busur (menampilkan panjang busur dan luas) |
| Ellipse | Pusat; radius mayor dan minor; rasio radius; sudut sumbu mayor; sudut awal dan akhir |
| Polyline | Penelusur verteks (di bawah); lebar global; elevasi; tertutup; luas ketika tertutup (menskalakannya terhadap pusatnya) |
| Text | Isi; gaya; justifikasi; tinggi; rotasi; faktor lebar; sudut miring; lebar yang ditentukan; jarak baris; annotative; posisi |
| Block reference | Titik sisip; rotasi; skala X, Y, Z dan skala seragam; nilai atribut |
| Hatch | Pola; skala; sudut; origin; associative; deteksi pulau; warna latar; elevasi |
| Dimension | Lihat di bawah |
| Multileader | Teks; tinggi; lebar; sisi teks; ukuran mata panah; jarak pendaratan; titik mata panah |
| Viewport | Skala; pusat dan ukuran pada lembar; pusat tampilan di model; on; display locked |

### Verteks polyline

{{ui:Current vertex}} menunjukkan verteks mana yang dimiliki kolom-kolom di bawahnya. Gunakan tombol panah, atau ketik sebuah nomor, untuk berpindah ke verteks lain; tidak ada batas jumlahnya. Setiap verteks memiliki X, Y, lebar segmen awal dan akhir, serta bulge dari segmen yang dimulai di sana (0 = lurus).

## Dimensi

Sebuah dimensi menampilkan **Dimension style**-nya, apa yang diukurnya, titik-titiknya, dan setiap pengaturannya:

- **Lines and arrows:** mata panah untuk setiap ujung, ukuran panah, ukuran tanda, warna dan lebar garis dari garis dimensi dan garis bantu, menyembunyikan salah satu paruh atau salah satu garis bantu, offset garis bantu, dan perpanjangannya.
- **Text:** override (kosongkan untuk nilai yang diukur; `<>` mewakilinya di dalam teks Anda sendiri), gaya, warna, tinggi, offset, posisi vertikal dan horizontal, selalu horizontal, rotasi, isian latar.
- **Fit:** skala keseluruhan, jarak garis dasar, apa yang bergerak ketika ruang sempit, dan pergerakan teks.
- **Primary units:** format, desimal, pembulatan, awalan, akhiran, skala pengukuran, pemisah desimal, menekan nol di depan dan di belakang; untuk sudut, format sudut dan desimalnya.
- **Alternate units:** aktif atau tidak, format, desimal, pengali (25.4 mengubah inci menjadi milimeter), pembulatan, awalan, dan akhiran.
- **Tolerances:** none, symmetrical, deviation, limits, atau basic, dengan nilai atas dan bawah, desimal, tinggi, dan posisi.

Mengubah salah satunya pada dimensi yang dibuka membuang gambar yang dibuat program lain untuknya, dan CadCraft menggambarnya ulang.

:::note
Posisi teks horizontal (di samping garis bantu pertama atau kedua) dan teks di bawah garis digambar pada dimensi linear dan sejajar; pada dimensi lain, keduanya disimpan tetapi belum digambar. Pilihan Fit disimpan tetapi belum digambar: CadCraft menempatkan teks dengan aturannya sendiri (di atas garis, di luar bila tidak muat).
:::

## Tidak ada yang dipilih

Tanpa ada yang dipilih, panel menampilkan:

- **New objects:** layer, warna, jenis garis, tebal garis, dan tinggi teks yang didapat objek baru; satuan dan format panjang gambar; jenis garis dan tebal garis layer aktif; ukuran untuk dimensi baru. Pada lembar, nama, kertas, dan orientasi lembar tampil lebih dulu.
- **View:** pusat, tinggi, dan lebar dari apa yang ada di layar. Ketik nilai untuk memindahkan tampilan ke sana.
- **Misc:** ikon UCS aktif atau tidak, UCS (selalu World: CadCraft belum memiliki sistem koordinat pengguna) dan skala anotasi.

## Tombol di atas

| Tombol | Fungsinya |
|---|---|
| Corong | {{cmd:QSELECT}}: pilih berdasarkan jenis dan properti |
| Penunjuk | {{cmd:SELECT}}: pilih objek di baris perintah |
| Plus atau 1 | Apakah klik menambah ke pilihan (plus) atau menggantinya (1); pengaturan yang sama dengan Settings, {{ui:CadCraft}} |
| Pin | Auto-hide, di atas |

## Kesalahan umum

- **Mengetik di kolom tidak melakukan apa-apa.** Tekan {{key:Enter}} atau klik di tempat lain untuk menerapkannya. Kolom merah dan catatan berarti entri ditolak.
- **Panjang dengan satuan ditolak.** Gambar tidak memiliki satuan. Atur {{ui:Units}} tanpa ada yang dipilih.
- **Hanya Layer dan Color yang tampil.** Beberapa jenis objek dipilih dan **All** dipilih. Pilih satu jenis di daftar di atas.
- **Beberapa objek tidak berubah.** Objek itu berada di layer terkunci. Buka kunci layer di panel layer.
- **Huruf yang diketik masuk ke kolom.** Selama sebuah kolom memiliki kursor, tombol akan mengetik di sana. Tekan {{key:Enter}} atau {{key:Esc}}, lalu ketik perintahnya.
