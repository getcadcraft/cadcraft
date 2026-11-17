---
title: Panel Sifat
summary: Lihat dan tukar segala-galanya tentang objek yang dipilih, banyak sekali gus: koordinat dengan Z, saiz, teks, tetapan dimensi, ketelusan dan lain-lain. Medan menerima ungkapan dan panjang dengan unit.
keywords: jumlah, jumlah panjang, jumlah luas, hasil tambah, panjang pilihan, sifat, palet sifat, ctrl+1, pr, ch, mo, ddmodify, berbeza, pilihan pantas, pickadd, koordinat, z, ketinggian, ketebalan, ketelusan, bahan, pautan hiper, ungkapan, quickcalc, bucu, gaya dimensi, toleransi, perpuluhan
from: 10d6a829
---

## Apa yang akan anda pelajari

Cara membuka panel Sifat, menukar satu atau seratus objek dalam satu langkah, menaip koordinat tepat (dengan Z), menggunakan ungkapan dan unit dalam mana-mana medan nombor, dan apa yang dipaparkan oleh setiap jenis objek.

## Buka

Panel terletak di sebelah kanan. Untuk membawanya ke depan:

- Tekan {{key:Mod+1}}, atau taip {{cmd:PROPERTIES}} (atau `PR`, `CH`, `MO`).
- Klik dua kali objek (teks dan multipetunjuk membuka penyunting teks mereka).

Panel ini ialah panel boleh alih seperti yang lain: seret pemegangnya untuk melekapkannya di kiri, kanan atau bawah, atau lepaskannya di atas lukisan untuk menerapungkannya (lihat [Susun panel dan gunakan monitor kedua](common:arrange-panels)).

### Lipat

Butang pin di bahagian atas kanan panel menghidupkan **sembunyi automatik**: panel dilipat kepada jalur di tepi kanan dan lukisan mendapat ruang. Tuding ke jalur itu (atau tekan {{key:Mod+1}}) dan ia dibuka di atas lukisan; alih keluar dan ia dilipat semula. Klik pin sekali lagi untuk mengekalkannya terbuka. {{cmd:PROPERTIESCLOSE}} melipatnya juga.

## Bahagian

Sifat dikumpulkan dalam bahagian yang boleh dilipat: **Umum**, **Geometri**, **Teks**, **Garisan dan anak panah**, **Muat**, **Unit utama**, **Unit alternatif**, **Toleransi**, **Corak**, **Pelbagai**, dan untuk blok **Atribut** dan **Item pustaka**. Klik nama bahagian untuk melipat atau membukanya; CadCraft mengingati bahagian mana yang anda lipat.

Seret garis nipis antara nama dan nilai untuk melebarkan atau menyempitkan nama. Klik dua kali padanya untuk mengembalikannya. Dengan papan kekunci, fokuskannya dan gunakan kekunci anak panah.

## Tukar nilai

1. Klik satu baris. Tajuknya menunjukkan "Garisan".
2. Klik dalam {{ui:Panjang}}. Semasa anda menyunting, medan menunjukkan nilai penuh, bukan nilai yang dibundarkan.
3. Taip `2500` dan tekan {{key:Enter}}. Garisan itu kini 2500 panjangnya, mengekalkan titik mula dan sudutnya.

{{key:Enter}} atau klik di tempat lain menggunakan nilai; {{key:Esc}} mengembalikan nilai lama. Setiap perubahan ialah satu langkah buat asal.

### Ungkapan dan unit

Setiap medan nombor menerima lebih daripada nombor biasa:

| Anda taip | Anda dapat |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inci, dalam lukisan dalam kaki dan inci) |
| `900mm`, `3.5m`, `2ft` | Ditukar kepada unit lukisan |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (medan sudut) |
| `0.5r`, `100g` | Radian dan grad, sebagai darjah |

Panjang dengan unit memerlukan lukisan mempunyai unit: tetapkan {{ui:Unit}} di bawah {{ui:Objek baharu}} (tiada apa yang dipilih) dahulu. Entri yang tidak sah ditolak dengan nota di bawah panel dan tiada apa yang berubah; ia tidak pernah disimpan sebagai 0. Fungsi: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; sudut dalam darjah.

## Tukar banyak objek sekali gus

1. Pilih beberapa objek, contohnya 8 garisan dan 4 dimensi.
2. Tajuknya menyatakan "12 objek", dan senarai di atas menawarkan **Semua (12)**, **Garisan (8)** dan **Dimensi (4)**.
3. **Semua** menunjukkan apa yang dimiliki setiap objek (lapisan, warna, jenis garisan…). Pilih **Dimensi (4)** untuk melihat tetapan dimensi.
4. Tukar nilai, contohnya {{ui:Perpuluhan}} kepada `1`.

Kesemua empat dimensi berubah, dalam satu langkah buat asal. Medan yang dibaca **Berbeza** bermakna objek itu berbeza; menaip nilai menetapkannya pada semua. Objek pada lapisan yang dikunci dibiarkan seperti sedia ada, dan nota menyatakan berapa banyak.

## Jumlah bagi pilihan

Apabila beberapa objek dipilih, bahagian {{ui:Jumlah}} di atas menyatakan:

- **Objek**: berapa banyak bagi setiap jenis, contohnya "8 garisan, 2 polygaris, 1 bulatan".
- **Jumlah panjang**: garisan, lengkok dan polygaris dijumlahkan (splin juga dikira), dan berapa banyak objek itu.
- **Jumlah luas**: yang tertutup dijumlahkan: bulatan, elips penuh, polygaris tertutup dan hatch (lubang hatch ditolak).

Ia berada dalam format panjang lukisan (kaki dan inci apabila ia menggunakannya; luas kemudian dalam inci persegi dan kaki persegi). Bar status menunjukkan panjang dan luas yang sama setiap kali objek dipilih; {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Panjang dan luas pilihan}} › {{ui:Disembunyikan}} mematikannya. Bagi satu objek, {{ui:Geometri}} menunjukkan panjang dan luasnya sendiri, seperti dahulu.

## Koordinat

Setiap titik menunjukkan **X**, **Y** dan **Z**: titik mula dan akhir garisan, pusat, titik sisipan, kedudukan teks, bucu polygaris semasa. Garisan juga menunjukkan **Delta X**, **Delta Y** dan **Delta Z** (baca sahaja). Polygaris dan hatch mempunyai **Ketinggian** (satu Z bagi keseluruhan objek).

Butang sasaran di sebelah nama titik membolehkan anda memilihnya dalam lukisan sebaliknya: klik, kemudian klik kedudukan baharu (snap berfungsi). Nilai ialah koordinat dunia.

## Umum

| Medan | Apakah ia |
|---|---|
| {{ui:Lapisan}}, {{ui:Warna}}, {{ui:Jenis garisan}}, {{ui:Skala jenis garisan}}, {{ui:Ketebalan garisan}} | Seperti dalam panel lapisan; {{ui:Mengikut lapisan}} mengikut lapisan |
| {{ui:Kelutsinaran}} | Mengikut lapisan, mengikut blok, atau 0 hingga 90% |
| {{ui:Ketebalan}} | Sejauh mana garisan, bulatan, lengkok, polygaris, titik dan teks memanjang dalam Z |
| {{ui:Bahan}} | Mengikut lapisan, mengikut blok, Global atau nama yang dibawa oleh lukisan |
| {{ui:Gaya plot}} | Baca sahaja: lukisan dicetak mengikut warna, melalui [jadual gaya plot](topic:plot-pdf#plot-style-tables) helaian |
| {{ui:Pautan hiper}} | Alamat web yang disimpan bersama objek |

## Apa yang dipaparkan oleh setiap jenis

| Dipilih | Anda boleh tukar |
|---|---|
| Garisan | X, Y, Z titik mula dan akhir; panjang; sudut |
| Bulatan | Pusat; jejari; diameter; lilitan; luas (setiap satu menetapkan jejari) |
| Lengkok | Pusat; jejari; sudut mula dan akhir; jumlah sudut; korda (menunjukkan panjang lengkok dan luas) |
| Elips | Pusat; jejari utama dan kecil; nisbah jejari; sudut paksi utama; sudut mula dan akhir |
| Polygaris | Penyemak imbas bucu (di bawah); lebar global; ketinggian; tertutup; luas apabila tertutup (menskalakannya tentang pusatnya) |
| Teks | Kandungan; gaya; penjajaran; ketinggian; putaran; faktor lebar; sudut condong; lebar ditakrifkan; jarak baris; beranotasi; kedudukan |
| Rujukan blok | Titik sisipan; putaran; skala X, Y, Z dan skala seragam; nilai atribut |
| Hatch | Corak; skala; sudut; asal; bersekutu; pengesanan pulau; warna latar; ketinggian |
| Dimensi | Lihat di bawah |
| Multipetunjuk | Teks; ketinggian; lebar; sisi teks; saiz anak panah; jarak mendarat; titik anak panah |
| Viewport | Skala; pusat dan saiz pada helaian; pusat paparan dalam model; hidup; kunci paparan |

### Bucu polygaris

{{ui:Bucu semasa}} menunjukkan bucu yang medan di bawahnya miliki. Gunakan butang anak panah, atau taip nombor, untuk berpindah ke bucu lain; tiada had berapa banyak. Setiap bucu mempunyai X, Y, lebar segmen mula dan akhir, dan bulge segmen yang bermula di situ (0 = lurus).

## Dimensi

Dimensi menunjukkan **Gaya dimensi**-nya, apa yang diukurnya, titik-titiknya, dan setiap tetapan:

- **Garisan dan anak panah:** kepala anak panah bagi setiap hujung, saiz anak panah, saiz tanda, warna dan ketebalan garisan dimensi dan garisan lanjutan, menyembunyikan mana-mana separuh atau mana-mana garisan lanjutan, offset garisan lanjutan dan lanjutannya.
- **Teks:** ganti (biarkan kosong untuk nilai yang diukur; `<>` mewakilinya dalam teks anda sendiri), gaya, warna, ketinggian, offset, kedudukan menegak dan mendatar, sentiasa mengufuk, putaran, isian latar.
- **Muat:** skala keseluruhan, jarak garis asas, apa yang bergerak apabila ruang kurang, pergerakan teks.
- **Unit utama:** format, perpuluhan, pembundaran, awalan, akhiran, skala ukuran, pemisah perpuluhan, buang sifar depan dan belakang; bagi sudut, format sudut dan perpuluhan.
- **Unit alternatif:** hidup atau mati, format, perpuluhan, pengganda (25.4 menukar inci kepada milimeter), pembundaran, awalan dan akhiran.
- **Toleransi:** tiada, simetri, sisihan, had atau asas, dengan nilai atas dan bawah, perpuluhan, ketinggian dan kedudukan.

Mengubah mana-mana daripadanya pada dimensi yang dibuka menggugurkan lukisan yang dibuat program lain daripadanya, dan CadCraft melukisnya semula.

:::note
Kedudukan teks mendatar (bersebelahan garisan lanjutan pertama atau kedua) dan teks di bawah garisan dilukis pada dimensi linear dan sejajar; pada dimensi lain ia disimpan tetapi belum dilukis. Pilihan Muat disimpan dan disimpan tetapi belum dilukis: CadCraft meletakkan teks mengikut peraturannya sendiri (di atas garisan, di luar apabila ia tidak muat).
:::

## Tiada apa yang dipilih

Tanpa apa-apa yang dipilih, panel menunjukkan:

- **Objek baharu:** lapisan, warna, jenis garisan, ketebalan garisan dan ketinggian teks yang diperoleh objek baharu; unit lukisan dan format panjang; jenis garisan dan ketebalan garisan lapisan semasa; saiz bagi dimensi baharu. Pada helaian, nama helaian, kertas dan orientasi datang dahulu.
- **Paparan:** pusat, ketinggian dan lebar apa yang ada pada skrin. Taip nilai untuk menggerakkan paparan ke sana.
- **Pelbagai:** ikon UCS hidup atau mati, UCS (sentiasa Dunia: CadCraft belum mempunyai sistem koordinat pengguna lagi) dan skala anotasi.

## Butang di bahagian atas

| Butang | Fungsi |
|---|---|
| Corong | {{cmd:QSELECT}}: pilih mengikut jenis dan sifat |
| Penunjuk | {{cmd:SELECT}}: pilih objek pada baris arahan |
| Tanda tambah atau 1 | Sama ada klik menambah pada pilihan (tambah) atau menggantikannya (1); tetapan yang sama dengan Tetapan, {{ui:CadCraft}} |
| Pin | Sembunyi automatik, di atas |

## Kesilapan biasa

- **Menaip dalam medan tidak melakukan apa-apa.** Tekan {{key:Enter}} atau klik di tempat lain untuk menggunakannya. Medan merah dan nota bermakna entri itu ditolak.
- **Panjang dengan unit ditolak.** Lukisan tidak mempunyai unit. Tetapkan {{ui:Unit}} dengan tiada apa yang dipilih.
- **Hanya Lapisan dan Warna dipaparkan.** Beberapa jenis objek dipilih dan **Semua** dipilih. Pilih satu jenis dalam senarai di atas.
- **Sesetengah objek tidak berubah.** Ia berada pada lapisan yang dikunci. Buka kunci lapisan dalam panel lapisan.
- **Huruf yang ditaip masuk ke dalam medan.** Semasa medan mempunyai kursor, kekunci menaip di sana. Tekan {{key:Enter}} atau {{key:Esc}}, kemudian taip arahan.
