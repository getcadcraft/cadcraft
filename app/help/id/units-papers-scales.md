---
title: Satuan, ukuran kertas, dan skala
summary: Arti satuan gambar di CadCraft, ukuran kertas untuk lembar dan plot, setiap skala standar, serta hubungan ukuran teks dan dimensi dengan skala plot.
keywords: satuan, milimeter, inci, kaki, kaki dan inci, arsitektural, teknik, pecahan, lunits, format panjang, presisi, meter, ukuran kertas, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 inci, skala arsitektural, skala teknik, insunits
from: 8346236a
---

## Satuan gambar

Anda menggambar pada ukuran penuh, dalam satuan gambar. Apa yang diwakili satu satuan adalah pengaturan **Satuan** gambar:

1. Tekan {{key:Esc}} agar tidak ada yang dipilih, pada tab {{ui:Model}}.
2. Di {{ui:Pengaturan saat ini}}, pilih {{ui:Satuan}}: {{ui:Tanpa satuan}}, {{ui:Milimeter}}, {{ui:Sentimeter}}, {{ui:Meter}}, {{ui:Inci}} atau {{ui:Kaki}}.

Dimensi dapat menulis panjangnya dalam milimeter, sentimeter, meter, atau kilometer, apa pun satuan gambarnya: lihat [Dimensi dalam mm, cm, m, atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Mengubah satuan tidak mengubah ukuran apa pun. Yang berubah adalah cara skala dibaca pada lembar dan dalam plot, serta skala mana yang ditawarkan. Gambar yang dibuka dari DWG atau DXF mempertahankan satuan yang tersimpan dalam file; bagian {{ui:Gambar}} di panel kiri menampilkannya.

Gambar {{ui:Tanpa satuan}} diperlakukan seolah-olah berada dalam satuan kertas: milimeter pada kertas ISO, inci pada kertas US.

## Kaki dan inci, serta pecahan

Cara panjang **ditulis dan diketik** adalah pengaturan terpisah, yaitu format panjang. Ia tidak mengubah geometri apa pun, hanya cara angka tampil dan apa yang dapat Anda ketik.

1. Tekan {{key:Esc}} agar tidak ada yang dipilih, pada tab {{ui:Model}}.
2. Di {{ui:Pengaturan saat ini}}, pilih {{ui:Format panjang}}: {{ui:Desimal}} (`150.5`), {{ui:Arsitektural}} (`12'-6 1/2"`), {{ui:Teknik}} (`12'-6.5"`), {{ui:Pecahan}} (`150 1/2`) atau {{ui:Ilmiah}} (`1.505E+02`).
3. Pilih {{ui:Presisi}}: jumlah angka desimal, atau pecahan terkecil (1/16 adalah pilihan umum untuk arsitektural).

Atau ketik {{cmd:UNITS}} (`UN`) dan jawab kedua pertanyaannya.

Dengan {{ui:Arsitektural}} atau {{ui:Teknik}}, satu satuan gambar adalah satu inci, seperti di AutoCAD: atur {{ui:Satuan}} ke {{ui:Inci}} juga. Anda kemudian dapat mengetik panjang dalam kaki dan inci di mana pun panjang diminta, dan di kotak {{ui:Properti}}:

| Anda mengetik | Artinya |
|---|---|
| `12'6"` atau `12'-6"` | 12 kaki 6 inci (150) |
| `12'6-1/2"` | 12 kaki 6½ inci. Gunakan tanda hubung sebelum pecahan: {{key:Space}} sama dengan {{key:Enter}} di baris perintah. |
| `12'` | 12 kaki |
| `6"` atau `6` | 6 inci: angka biasa berarti inci |
| `1/2`, `6-1/2` | pecahan berfungsi di format apa pun |

Titik menerima panjang yang sama: `@12'6",0` atau `@10'<90`. Sudut tetap dalam derajat.

Format tampil di riwayat ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: luas dalam inci persegi dan kaki persegi), di {{ui:Properti}}, pada koordinat di bilah status, dan di **dimensi baru**. Lembar mempertahankan satuan kertasnya (milimeter atau inci) sebagai desimal.

:::note
Format panjang disimpan dalam file DWG dan DXF, dan setiap dimensi mempertahankan formatnya sendiri: gambar yang disimpan dibuka kembali seperti yang Anda tinggalkan.
:::

## Ukuran kertas

Lembar dan plot model menggunakan ukuran ini, dalam kedua orientasi:

| Kertas | Ukuran | Satuan di lembar |
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

Lembar baru dimulai dengan ISO A3 untuk gambar metrik dan tanpa satuan, dan dengan Tabloid untuk gambar dalam inci atau kaki. Plot model dimulai dengan ISO A4 atau Letter dengan cara yang sama, lalu mengingat pilihan terakhir Anda. Lembar dari file yang dibuka mempertahankan ukurannya sendiri, ditampilkan sebagai "Custom" jika bukan salah satu dari ini.

## Skala

Skala `1:n` berarti satu satuan di kertas menunjukkan n satuan yang sama pada model, sehingga 1:100 menunjukkan 1 m bangunan sebagai 10 mm kertas. CadCraft menghitungnya dari satuan gambar dan satuan kertas.

**Skala metrik**, ditawarkan untuk setiap gambar: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Skala arsitektural**, ditawarkan saat satuannya inci atau kaki: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Skala teknik**, ditawarkan saat satuannya inci atau kaki: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Skala Anda sendiri.** Ketik `SCALELISTEDIT` (atau `SCALELIST`) untuk menambah skala sendiri, seperti 1:75 atau skala lokasi 2 kertas : 300 gambar. `Tambah (A)` meminta nama, lalu satuan kertas dan satuan gambar (nama seperti `1:75` menawarkan angkanya sendiri; tekan {{key:Enter}} untuk memakainya). `Edit`, `Hapus (D)`, `Daftar (L)` dan `Atur ulang (R)` bekerja pada daftar yang sama; `Atur ulang (R)` kembali ke daftar standar. Skala Anda muncul setelah skala standar dalam daftar skala viewport di Properti dan di dialog {{ui:Plot to PDF}}; viewport pada skala itu terbaca dengan namanya, dan skala disimpan dalam gambar (DWG dan DXF 2000) sebagai daftar skala gambar. Gambar yang dibuka dari program lain membawa daftarnya sendiri; skala yang cocok dengan skala standar tidak ditampilkan dua kali.

Saat sebuah viewport diarahkan dengan {{ui:Tampilkan seluruh model}} atau {{ui:Pilih jendela pada model…}}, CadCraft memilih skala standar terbesar yang muat. {{ui:Paskan seluruh model}} menetapkan skala tepat sebagai gantinya, yang tampil sebagai rasio biasa.

## Ukuran di kertas dan di model

Ukuran teks dan dimensi berada dalam satuan ruang tempat Anda menggambar.

| Yang Anda inginkan di kertas | Digambar pada lembar | Digambar di model pada 1:50 (gambar mm) | Digambar di model pada 1/4" = 1'-0" (gambar inci) |
|---|---|---|---|
| teks 2.5 mm | 2.5 | 125 | — |
| teks 3/32" | 0.09375 | — | 4.5 |

Untuk dimensi, pertahankan ukuran sebagai ukuran kertas dan atur skala keseluruhan ({{cmd:DIMSCALE}}) ke skala plot: 50 untuk 1:50, 48 untuk 1/4" = 1'-0". Lihat [Atur ukuran dimensi](topic:dimension-settings).

## Anotasi menurut skala

Gambarlah model pada ukuran penuh dan biarkan CadCraft menghitung semua perkalian di atas untuk Anda.

1. Pilih teks atau dimensi yang harus mempertahankan ukurannya di kertas. Di Properti centang {{ui:Anotatif}}. {{ui:Ukuran di kertas}} lalu menampilkan, misalnya, `2.5 mm at 1:50`.
2. Ketik {{cmd:ANNOSCALE}} dan skala tempat gambar akan dicetak, misalnya `1:100`.

Setiap teks dan dimensi anotatif diubah ukurannya sehingga tercetak dengan ukuran yang sama pada skala baru: teks 2.5 mm tingginya 125 pada gambar mm di 1:50 dan 250 pada 1:100. Lebar paragraf ikut berubah; teks dimensi, panah, dan celahnya berubah bersama (skala keseluruhannya). Ini satu langkah urung, dan objek yang tidak anotatif tidak pernah diubah.

Pengaturan ini disimpan dalam DWG dan DXF: program lain membaca penanda anotatif, dan CadCraft juga menyimpan skala tempat setiap objek diukur.

Jika kantor Anda menetapkan tinggi kertas di add-on Kebijakan Bawaan (Pengaturan › Global › Kebijakan Bawaan › Ukuran anotasi di kertas), {{cmd:ANNOSCALE}} juga mengatur tinggi awal teks baru ke tinggi kantor untuk catatan pada skala itu. Lihat [Kebijakan Bawaan](topic:default-policies).

### Satu objek pada beberapa skala

Lembar sering menampilkan denah yang sama pada 1:100 dan sebagian darinya pada 1:50. Berikan catatan dan dimensi kedua skala, dan setiap viewport menampilkannya pada ukuran kertasnya:

1. Pilih teks dan dimensi anotatif, lalu ketik `OBJECTSCALE`.
2. Pilih `Tambah (A)` dan ketik skalanya, misalnya `1:50`. (`Skala saat ini (C)` menambahkan skala anotasi gambar; `Daftar (L)` menampilkan apa yang dipertahankan setiap objek; `Hapus (D)` menghapus satu skala.)

Viewport yang skalanya ada dalam daftar sebuah objek menampilkannya pada ukuran untuk skala itu: teks 2.5 mm digambar setinggi 250 melalui viewport 1:100 dan setinggi 125 melalui viewport 1:50, di layar maupun dalam plot. Objek tetap di tempatnya; hanya ukurannya yang berbeda. Di viewport dengan skala yang tidak ada dalam daftar objek, objek tampil pada ukuran yang dimilikinya, sampai Anda mengetik `ANNOALLVISIBLE` dan memilih `OFF`: maka objek itu disembunyikan di sana. {{cmd:ANNOSCALE}} mengubah ukuran objek yang mencantumkan skala baru dan membiarkan yang lain seperti semula.

Daftar disimpan dalam DWG dan DXF sebagai data milik CadCraft. Program lain melihat setiap objek sebagai anotatif, pada satu skala yang menjadi ukurannya. Sakelar ANNOALLVISIBLE tidak disimpan dalam file.

## Tebal garis dan jenis garis

Sebuah layer, atau objek, dapat memiliki **tebal garis** (0.05 sampai 2.11 mm) dan **jenis garis** (putus-putus, tersembunyi, sumbu, fantom, titik…). Atur di panel kanan: saat tidak ada yang dipilih, {{ui:Jenis garis}} dan {{ui:Tebal garis}} di bawah {{ui:Pengaturan saat ini}} adalah yang didapat objek baru ({{ui:Menurut layer}} untuk mengikuti layernya), dan dua baris di bawah {{ui:Layer …}} adalah milik layer aktif. Dengan objek terpilih, dua baris yang sama dan {{ui:Skala jenis garis}} mengubah objek-objek itu. Perintahnya adalah {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) dan {{cmd:LTSCALE}} (`LTS`).

Jenis garis tampil di layar dan dalam plot. Putus-putusnya dalam satuan gambar: gambar metrik memakai ukuran ISO (DASHED: putus-putus 12.7 mm), gambar inci memakai ukuran inci (0.5"). Jika putus-putus terlihat terlalu kecil atau terlalu besar, ubah {{ui:Skala jenis garis}} gambar (LTSCALE): setiap putus dan celah dikalikan dengannya; skala milik objek dikalikan lagi. Pola yang terlalu halus untuk dilihat digambar sebagai garis padat.

Tebal garis tercetak dalam plot, dalam mm di kertas apa pun skalanya. Garis dengan tebal {{ui:Bawaan}} menggunakan lebar pena yang dipilih di dialog {{ui:Plot to PDF}} (0.13 sampai 0.70 mm; mulai dari 0.25 mm); tebal garis 0 tercetak sebagai garis paling tipis. Di layar setiap garis lebarnya satu piksel sampai Anda menekan {{ui:LWT}} di bilah status (atau mengetik {{cmd:LWDISPLAY}}): maka tebal garis di atas 0.25 mm digambar lebih lebar (0.5 mm = 2 piksel) pada model, dan pada lebar sebenarnya di kertas pada lembar. Pilihan ini disimpan di peramban ini.
