---
title: Satuan, ukuran kertas, dan skala
summary: Arti satuan gambar di CadCraft, ukuran kertas untuk lembar dan plot, setiap skala standar, dan bagaimana ukuran teks dan dimensi berhubungan dengan skala cetak.
keywords: satuan, milimeter, inci, kaki, kaki dan inci, arsitektural, teknik, pecahan, fraksi, lunits, format panjang, presisi, meter, ukuran kertas, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 inci, skala arsitektural, skala teknik, insunits
from: 7dc9b62e
---

## Satuan gambar

Anda menggambar pada ukuran penuh, dalam satuan gambar. Apa yang diwakili satu satuan ditentukan oleh pengaturan **Satuan** gambar:

1. Tekan {{key:Esc}} agar tidak ada yang dipilih, di tab {{ui:Model}}.
2. Di {{ui:Pengaturan saat ini}}, pilih {{ui:Satuan}}: {{ui:Tanpa satuan}}, {{ui:Milimeter}}, {{ui:Sentimeter}}, {{ui:Meter}}, {{ui:Inci}}, atau {{ui:Kaki}}.

Dimensi dapat menulis panjangnya dalam milimeter, sentimeter, meter, atau kilometer, apa pun satuan gambarnya: lihat [Dimensi dalam mm, cm, m, atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Mengubah satuan tidak mengubah ukuran apa pun. Yang berubah adalah cara skala dibaca di lembar dan plot, serta skala mana yang ditawarkan. Gambar yang dibuka dari DWG atau DXF mempertahankan satuan yang disimpan di file; bagian {{ui:Gambar}} di panel kiri menampilkannya.

Gambar {{ui:Tanpa satuan}} diperlakukan sebagai satuan kertas: milimeter pada kertas ISO, inci pada kertas AS.

## Kaki dan inci, serta pecahan

Cara panjang **ditulis dan diketik** adalah pengaturan terpisah, yaitu format panjang. Ia tidak mengubah geometri apa pun, hanya tampilan angka dan apa yang dapat Anda ketik.

1. Tekan {{key:Esc}} agar tidak ada yang dipilih, di tab {{ui:Model}}.
2. Di {{ui:Pengaturan saat ini}}, pilih {{ui:Format panjang}}: {{ui:Desimal}} (`150.5`), {{ui:Arsitektural}} (`12'-6 1/2"`), {{ui:Teknik}} (`12'-6.5"`), {{ui:Pecahan}} (`150 1/2`), atau {{ui:Ilmiah}} (`1.505E+02`).
3. Pilih {{ui:Presisi}}: jumlah angka desimal, atau pecahan terkecil (1/16 adalah pilihan umum untuk arsitektural).

Atau ketik {{cmd:UNITS}} (`UN`) dan jawab dua pertanyaannya.

Dengan {{ui:Arsitektural}} atau {{ui:Teknik}}, satu satuan gambar adalah satu inci, seperti di AutoCAD: atur {{ui:Satuan}} ke {{ui:Inci}} juga. Anda kemudian dapat mengetik panjang dalam kaki dan inci di mana pun panjang diminta, dan di kotak {{ui:Properti}}:

| Anda ketik | Artinya |
|---|---|
| `12'6"` atau `12'-6"` | 12 kaki 6 inci (150) |
| `12'6-1/2"` | 12 kaki 6½ inci. Gunakan tanda hubung sebelum pecahan: {{key:Space}} adalah {{key:Enter}} di baris perintah. |
| `12'` | 12 kaki |
| `6"` atau `6` | 6 inci: angka biasa berarti inci |
| `1/2`, `6-1/2` | pecahan berfungsi di format apa pun |

Titik menerima panjang yang sama: `@12'6",0` atau `@10'<90`. Sudut tetap dalam derajat.

Format tampil di riwayat ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: luas dalam inci persegi dan kaki persegi), di {{ui:Properti}}, pada koordinat di bilah status, dan di **dimensi baru**. Lembar mempertahankan satuan kertasnya (milimeter atau inci) sebagai desimal.

:::note
Format panjang disimpan di file DWG dan DXF, dan setiap dimensi menyimpan formatnya sendiri: gambar yang disimpan terbuka lagi seperti yang Anda tinggalkan.
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
| Letter | 11 × 8,5 in | inci |
| Legal | 14 × 8,5 in | inci |
| Tabloid / ANSI B | 17 × 11 in | inci |
| ANSI C | 22 × 17 in | inci |
| ANSI D | 34 × 22 in | inci |
| ARCH C | 24 × 18 in | inci |
| ARCH D | 36 × 24 in | inci |
| ARCH E | 48 × 36 in | inci |

Lembar baru dimulai dengan ISO A3 untuk gambar metrik dan tanpa satuan, dan dengan Tabloid untuk gambar dalam inci atau kaki. Plot model dimulai dengan ISO A4 atau Letter dengan cara yang sama, lalu mengingat pilihan terakhir Anda. Lembar dari file yang dibuka mempertahankan ukurannya sendiri, ditampilkan sebagai "Custom" jika bukan salah satu dari ini.

## Skala

Skala `1:n` berarti satu satuan di kertas menampilkan n satuan yang sama di model, jadi 1:100 menampilkan 1 m bangunan sebagai 10 mm kertas. CadCraft menghitungnya dari satuan gambar dan satuan kertas.

**Skala metrik**, ditawarkan untuk setiap gambar: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Skala arsitektural**, ditawarkan saat satuannya inci atau kaki: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Skala teknik**, ditawarkan saat satuannya inci atau kaki: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Skala Anda sendiri.** Ketik `SCALELISTEDIT` (atau `SCALELIST`) untuk menambah skala sendiri, seperti 1:75 atau skala lokasi 2 kertas : 300 gambar. `Add` meminta nama, lalu satuan kertas dan satuan gambar (nama seperti `1:75` menawarkan angkanya sendiri; tekan {{key:Enter}} untuk mengambilnya). `Edit`, `Delete`, `List`, dan `Reset` bekerja pada daftar yang sama; `Reset` kembali ke daftar standar. Skala Anda muncul setelah skala standar di daftar skala viewport di Properti dan di dialog {{ui:Plot ke PDF}}, sebuah viewport pada skala itu dibaca dengan namanya, dan skala disimpan di gambar (DWG dan DXF 2000) sebagai daftar skala gambar. Gambar yang dibuka dari program lain membawa daftarnya; skala yang cocok dengan skala standar tidak ditampilkan dua kali.

Saat viewport diarahkan dengan {{ui:Tampilkan seluruh model}} atau {{ui:Pilih jendela pada model…}}, CadCraft memilih skala standar terbesar yang muat. {{ui:Paskan seluruh model}} menetapkan skala yang tepat sebagai gantinya, yang terbaca sebagai rasio biasa.

## Ukuran di kertas dan di model

Ukuran teks dan dimensi berada dalam satuan ruang tempat Anda menggambar.

| Yang Anda inginkan di kertas | Digambar di lembar | Digambar di model pada 1:50 (gambar mm) | Digambar di model pada 1/4" = 1'-0" (gambar inci) |
|---|---|---|---|
| teks 2,5 mm | 2,5 | 125 | — |
| teks 3/32" | 0,09375 | — | 4,5 |

Untuk dimensi, pertahankan ukuran sebagai ukuran kertas dan atur skala keseluruhan ({{cmd:DIMSCALE}}) ke skala cetak: 50 untuk 1:50, 48 untuk 1/4" = 1'-0". Lihat [Atur ukuran dimensi](topic:dimension-settings).

## Anotasi menurut skala

Gambar model pada ukuran penuh dan biarkan CadCraft melakukan hitungan di atas untuk Anda.

1. Pilih teks atau dimensi yang harus mempertahankan ukurannya di kertas. Di Properti, centang {{ui:Anotatif}}. {{ui:Ukuran di kertas}} lalu menampilkan, misalnya, `2.5 mm at 1:50`.
2. Ketik {{cmd:ANNOSCALE}} dan skala tempat gambar akan dicetak, misalnya `1:100`.

Setiap teks dan dimensi anotatif diubah ukurannya agar tercetak dengan ukuran yang sama pada skala baru: teks 2,5 mm setinggi 125 pada gambar milimeter di 1:50 dan setinggi 250 di 1:100. Lebar paragraf ikut berubah; teks, panah, dan celah dimensi berubah bersama (skala keseluruhannya). Ini satu langkah urungkan, dan objek yang tidak anotatif tidak pernah diubah.

Pengaturan ini disimpan di DWG dan DXF: program lain membaca tanda anotatifnya, dan CadCraft juga menyimpan skala yang diatur untuk setiap objek.

Jika kantor Anda mengatur tinggi kertas di add-on Kebijakan Bawaan (Pengaturan › Global › Kebijakan Bawaan › Ukuran anotasi di kertas), {{cmd:ANNOSCALE}} juga mengatur tinggi teks baru ke tinggi kantor untuk catatan pada skala itu. Lihat [Kebijakan Bawaan](topic:default-policies).

### Satu objek pada beberapa skala

Sebuah lembar sering menampilkan denah yang sama pada 1:100 dan sebagian darinya pada 1:50. Berikan catatan dan dimensi kedua skala dan setiap viewport menampilkannya pada ukuran kertasnya:

1. Pilih teks dan dimensi anotatif lalu ketik `OBJECTSCALE`.
2. Pilih `Add` dan ketik skalanya, misalnya `1:50`. (`Current scale` menambahkan skala anotasi gambar; `List` menampilkan apa yang disimpan setiap objek; `Delete` menghapus satu.)

Viewport yang skalanya ada di daftar objek menampilkan objek itu pada ukuran untuk skala tersebut: teks 2,5 mm digambar setinggi 250 melalui viewport 1:100 dan 125 melalui viewport 1:50, di layar dan di plot. Objek tetap di tempatnya; hanya ukurannya yang berbeda. Di viewport pada skala yang tidak ada di daftar objek, objek tampil pada ukuran yang dimilikinya, sampai Anda mengetik `ANNOALLVISIBLE` dan memilih `OFF`: maka objek itu tidak ditampilkan di sana. {{cmd:ANNOSCALE}} mengubah ukuran objek yang mendaftarkan skala baru dan membiarkan yang lain seperti semula.

Daftar disimpan di DWG dan DXF sebagai data CadCraft sendiri. Program lain melihat setiap objek sebagai anotatif, pada satu skala yang menjadi ukurannya. Sakelar ANNOALLVISIBLE tidak disimpan di file.

## Lebar garis dan jenis garis

Sebuah layer, atau sebuah objek, dapat memiliki **tebal garis** (0,05 sampai 2,11 mm) dan **jenis garis** (putus-putus, tersembunyi, tengah, phantom, titik…). Atur keduanya di panel kanan: tanpa ada yang dipilih, {{ui:Jenis garis}} dan {{ui:Tebal garis}} di bawah {{ui:Pengaturan saat ini}} adalah yang didapat objek baru ({{ui:Menurut layer}} untuk mengikuti layernya), dan keduanya di bawah {{ui:Layer …}} adalah milik layer aktif. Dengan objek yang dipilih, kedua baris yang sama dan {{ui:Skala jenis garis}} mengubah objek-objek itu. Perintahnya adalah {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`), dan {{cmd:LTSCALE}} (`LTS`).

Jenis garis tampil di layar dan di plot. Putusan garisnya dalam satuan gambar: gambar metrik memakai ukuran ISO (DASHED: putus 12,7 mm), gambar inci memakai ukuran inci (0,5"). Jika putusan tampak terlalu kecil atau terlalu besar, ubah {{ui:Skala jenis garis}} gambar (LTSCALE): setiap putus dan celah dikalikan dengannya; skala milik objek mengalikannya lagi. Pola yang terlalu halus untuk dilihat digambar sebagai garis padat.

Tebal garis tercetak di plot, dalam mm di kertas apa pun skalanya. Garis dengan tebal {{ui:Default}} memakai lebar pena yang dipilih di dialog {{ui:Plot ke PDF}} (0,13 sampai 0,70 mm; mulai dari 0,25 mm); tebal garis 0 tercetak sebagai garis paling tipis. Di layar setiap garis lebarnya satu piksel sampai Anda menekan {{ui:LWT}} di bilah status (atau mengetik {{cmd:LWDISPLAY}}): maka tebal garis di atas 0,25 mm digambar lebih lebar (0,5 mm = 2 piksel) di model, dan pada lebar sebenarnya di kertas pada lembar. Pilihan disimpan di peramban ini.

## Standar kantor

Sebuah kantor dapat menyimpan tinggi teks kertas, layer, bidang blok judul, dan templat dalam satu catatan, yaitu standar kantor. CadCraft membacanya dalam urutan ini: catatan gambar itu sendiri (diatur dengan {{cmd:OFFICESTANDARD}} › `Import`, disimpan dalam file), standar bersama tim Anda, lalu Kebijakan Bawaan Anda. Teks dan dimensi anotatif mengambil tinggi kertasnya dari standar itu pada skala anotasi. Standar yang kosong tidak mengubah apa pun. {{cmd:OFFICESTANDARD}} › `Layers` menambahkan layer kantor yang belum dimiliki gambar.
