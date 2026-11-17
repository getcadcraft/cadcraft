---
title: Plot ke PDF
summary: Buat PDF dari lembar pada ukuran penuh, atau dari model pada skala atau dipaskan ke kertas, cetak dari peramban atau dari Studio, atau simpan sebagai PNG atau SVG.
keywords: plot, cetak, printer, salinan, png, svg, gambar, pdf, publikasikan, exportpdf, kertas, skala, monokrom, skala abu-abu, hitam putih, tebal garis, pena, atur halaman, jendela plot, gaya plot, tabel gaya plot, ctb, bergantung warna, screening, plotstyles, stylesmanager
from: a4752f83
---

## Yang akan Anda buat

Sebuah PDF dari lembar pada ukuran penuh, lalu PDF cepat dari model pada 1:100, dan sebuah hasil cetak.

PDF dibuat di dalam peramban Anda; tidak ada yang diunggah. PDF ini berbentuk vektor: garis tetap tajam pada zoom berapa pun, dan teks dapat dicari.

## Plot sebuah lembar

1. Klik tab lembar di bawah gambar.
2. Tekan {{key:Mod+P}}, klik {{ui:Plot}}, atau ketik `PLOT` lalu tekan {{key:Enter}}.

Dialog {{ui:Plot to PDF}} terbuka. Dialog itu menyebutkan lembar mana yang di-plot dan pada kertas apa, "pada ukuran penuh … seperti yang Anda lihat". Pratinjau di sebelah kanan menampilkan lembar.

3. Di {{ui:Plot style}}, pilih {{ui:Monochrome (black)}} untuk garis hitam, {{ui:Colour (as drawn)}} untuk mempertahankan warna, {{ui:Grayscale}}, atau tabel buatan Anda sendiri (lihat [Tabel gaya plot](topic:plot-pdf#plot-style-tables)). Lembar menyimpan pilihan ini: pilihan itu disimpan bersama gambar.
4. Di {{ui:Line weight}}, pilih lebar pena dari 0.13 mm sampai 0.70 mm. Garis dengan tebal default dicetak pada lebar ini; garis dengan tebal sendiri (layer atau objek, atau pena warnanya di tabel) dicetak pada lebar itu.
5. Klik {{ui:Download PDF}}.

Peramban mengunduh PDF yang dinamai menurut gambar dan lembarnya, misalnya `Drawing1-A-101 Plan.pdf`. Riwayat melaporkan ukurannya dalam byte dan ukuran kertasnya dalam milimeter.

Lembar selalu di-plot pada 1:1 di kertasnya sendiri. Untuk mengubah kertas, ubah pada lembar itu sendiri (lihat [Atur lembar](topic:sheets-and-viewports)). Layer yang diatur agar tidak di-plot ditinggalkan, begitu pula bingkai viewport.

## Setiap lembar dalam satu PDF

Dengan dua lembar atau lebih, dialog {{ui:Plot to PDF}} memiliki {{ui:All sheets in one PDF}}; atau ketik {{cmd:PUBLISH}}. {{key:Enter}} memilih setiap lembar; `S` (Beberapa) meminta nama lembar, dipisahkan dengan koma. Satu PDF diunduh dengan satu halaman per lembar, sesuai urutan tab, masing-masing pada ukuran kertasnya sendiri, dan satu bookmark per lembar dengan namanya. Setiap lembar di-plot dengan tabel gaya plotnya sendiri; lembar yang tidak memiliki pilihan memakai tabel yang terakhir Anda pilih di dialog, dan lebar pena yang terakhir Anda pilih.

## Plot model

1. Klik tab {{ui:Model}}.
2. Tekan {{key:Mod+P}}.

Dialog menyatakan bahwa ia akan mem-plot model ke selembar kertas, dan menampilkan pengaturan lainnya:

3. Di {{ui:Area}}, pilih apa yang akan di-plot:
   - {{ui:Everything (extents)}}: seluruh gambar.
   - {{ui:What is on screen}}: area yang Anda lihat di gambar sekarang.
   - {{ui:A window…}}: lalu klik {{ui:Pick}}, klik dua sudut pada gambar, dan dialog kembali.
4. Di {{ui:Paper}}, pilih ukuran: ISO A4 sampai A0, Letter, Legal, Tabloid, dan ANSI C dan D, atau ARCH C, D, dan E.
5. Di {{ui:Orientation}}, pilih {{ui:Landscape}} atau {{ui:Portrait}}.
6. Di {{ui:Scale}}, pilih {{ui:Fit to paper}} atau skala seperti `1:100`.

Di bawah pengaturan, sebuah baris melaporkan skala dan seberapa besar area itu di kertas. Jika lebih besar dari kertas, baris itu menyatakannya: tepinya terpotong. Pilih skala yang lebih kecil, kertas yang lebih besar, atau {{ui:Fit to paper}}.

7. Klik {{ui:Download PDF}}.

Plot model menyisakan margin 5 mm di sekeliling tepinya, karena kebanyakan printer tidak dapat mencetak sampai ke tepi. {{ui:Fit to paper}} menghasilkan skala yang tidak lazim (riwayat dan baris info menulis "(dipaskan)"); pilih skala standar jika gambar harus terukur sebenarnya.

:::note
Skala dibaca dalam satuan nyata. Agar 1:100 benar, atur {{ui:Units}} di {{ui:Current settings}} ke nilai satu satuan gambar. Gambar tanpa satuan dianggap dalam milimeter.
:::

## Tabel gaya plot

Tabel gaya plot menyatakan bagaimana setiap dari 255 warna gambar standar dicetak, seperti tabel gaya plot bergantung warna (CTB) pada program CAD lain. Tiga tabel sudah tersedia:

| Tabel | Dicetak sebagai |
|---|---|
| {{ui:Colour (as drawn)}} | Setiap objek dalam warnanya sendiri. |
| {{ui:Monochrome (black)}} | Setiap warna menjadi hitam: pilihan yang biasa untuk gambar. |
| {{ui:Grayscale}} | Setiap warna menjadi abu-abunya, sehingga warna tetap terpisah pada printer hitam putih. |

Untuk membuat tabel sendiri, misalnya garis merah yang tebal dan hitam, sisanya tipis:

1. Di dialog {{ui:Plot to PDF}}, klik {{ui:Edit tables…}} (atau ketik {{cmd:PLOTSTYLES}}).
2. Klik {{ui:New}}, dan ketik nama seperti `office` di {{ui:Name}}. Untuk mulai dari tabel bawaan, pilih di {{ui:Table}} dan klik {{ui:Copy}}.
3. Klik sebuah warna di kisi. {{key:Shift}}+klik memilih rentang warna, {{key:Mod}}+klik menambahkan satu lagi, dan {{ui:Select every colour}} memilih semuanya.
4. Atur apa yang dicetak oleh warna yang dipilih:
   - {{ui:Prints in}}: {{ui:Its own colour}}, {{ui:Black}}, atau {{ui:Another colour…}}.
   - {{ui:As a gray}}: warna sebagai abu-abunya.
   - {{ui:Ink (%)}}: 100 adalah tinta penuh, 50 adalah setengah jalan menuju putih (screening), untuk garis latar.
   - {{ui:Lineweight}}: {{ui:Its own lineweight}} mempertahankan tebal garis objek atau layer; sebuah nilai mencetak setiap garis dengan warna itu pada lebar tersebut.
   - {{ui:Linetype}}: cetak setiap garis dengan warna itu memakai jenis garis lain (misalnya semua merah putus-putus); {{ui:Use the object's linetype}} membiarkannya.
   - {{ui:Line end}} dan {{ui:Line join}}: ujung butt, square, atau round, dan sudut miter, bevel, atau round (round, seperti sebelumnya, saat Anda tidak mengatur apa pun).
   - {{ui:Fill style}}: isian padat dengan warna itu dicetak sebagai garis hatch (batang horizontal atau vertikal, miring, silang, berlian, titik persegi) alih-alih tinta, untuk printer dan denah yang tintanya terlalu berat.
   Tabel itu sendiri memiliki dua pengaturan lagi: {{ui:Lineweights}}, lebar yang dikenalnya (garis yang dicetak menuju yang terdekat di antaranya), dan {{ui:Linetype scale}}, faktor untuk garis putus-putus setiap jenis garis yang bukan ISO.
5. Klik {{ui:Done}}. Tabel disimpan di gambar, dan lembar (atau model) kini di-plot dengannya. {{ui:Cancel}} membuang perubahan.

Warna dengan pena sendiri menampilkan titik di sudutnya, dan titik di bawah saat mengatur tebal garis. Objek dengan warna sejati (bukan salah satu dari 255) memakai pena warna standar terdekat.

Gambar menyimpan tabelnya dan pilihan tiap lembar saat Anda menyimpan sebagai DWG (2000 sampai 2018) atau DXF (R12 atau 2000), dan membukanya kembali dengan itu. Program lain hanya melihat nama di pengaturan halaman setiap lembar (`office.ctb`), bukan tabelnya. Gambar dari program lain yang pengaturan halamannya menyebut tabel seperti `monochrome.ctb` di-plot dengan tabel bawaan bernama itu; untuk nama lain, dialog menyatakan bahwa gambar tidak memilikinya, dan mem-plot warna gambar sampai Anda memilih tabel atau membuat tabel dengan nama itu.

Untuk memakai tabel di gambar lain, klik {{ui:Export}} di {{ui:Plot style tables}} (menyimpan `office.plotstyle.json`), lalu {{ui:Import…}} di gambar lain. {{ui:Import…}} juga menerima file `.ctb` dari program lain: file itu dibaca dari deskripsi format yang dipublikasikan dan **belum diperiksa terhadap file asli**. Warna, screening, dan tebal garis setiap warna dibaca; skala abu-abu, nomor pena, jenis garis, ujung dan sambungan garis, serta gaya isian tidak dibaca, dan tabel bernama (`.stb`) ditolak. Bandingkan plot pertama dengan yang Anda harapkan, dan kirimkan file itu kepada kami jika salah.

## Cetak

**Di peramban**, klik {{ui:Print…}}. CadCraft membuat PDF dan membuka dialog cetak milik peramban untuk PDF itu. Pilih "Actual size" atau 100% (bukan "Fit") di sana agar skala tetap. Jika peramban tidak mau mencetak dari halaman, PDF dibuka di tab baru: cetak dari sana dengan {{key:Mod+P}}.

Anda juga dapat mengklik {{ui:Open to print}}: PDF dibuka di tab peramban baru, dan Anda mencetaknya dari sana.

:::safari
Safari mungkin menampilkan PDF dan menunggu Anda memilih **File**, lalu **Cetak**.
:::

Jika peramban Anda memblokir tab baru, CadCraft mengunduh PDF sebagai gantinya dan menyatakannya di riwayat. Izinkan pop-up untuk situs ini agar PDF dibuka di tab lain kali.

**Di CadCraft Studio**, dialog {{ui:Plot to PDF}} mendaftar printer di komputer. Pilih {{ui:Printer}}, {{ui:Paper in the printer}}, dan jumlah {{ui:Copies}}, lalu klik {{ui:Print…}}. Sama dengan plot memilih kertas printer yang berukuran sama dengan lembar (A3 untuk lembar A3); jika printer tidak memilikinya, ia memakai kertasnya sendiri dan memaskan lembar ke kertas itu. Di Windows lembar dikirim sebagai gambar 300 dpi, karena Windows tidak dapat mencetak PDF tanpa program PDF; di Linux dan macOS PDF itu sendiri dikirim ke layanan cetak sistem. Tidak ada yang meninggalkan komputer.

## File gambar dan SVG

{{ui:Download PNG}} menyimpan lembar yang sudah di-plot sebagai gambar pada 300 dpi (diturunkan hanya ketika lembar yang sangat besar akan melampaui batas yang dapat dibuat peramban; riwayat menyatakannya). {{ui:Download SVG}} menyimpannya sebagai gambar yang dapat diskalakan dalam milimeter, dengan garis dan teks dari plot. Keduanya berasal dari plot yang sama dengan PDF, dengan gaya plot, tebal garis, dan area yang sama. Gambar yang ditempatkan di dalam gambar hanya ada di PDF; riwayat menyatakan berapa banyak yang ditinggalkan.

## Gambar raster

Gambar tercetak pada resolusinya sendiri, di bawah garis. {{ui:Pictures}} di dialog membatasinya pada 600, 300, atau 150 dpi untuk file yang lebih kecil. Garis, teks, dan hatch selalu tajam (vektor), dan transparansi tetap transparan. Lihat [Gambar raster dalam gambar](topic:pictures).

## Pengaturan yang diingat

Dialog mengingat kertas, orientasi, skala, dan tebal garis terakhir Anda di peramban ini. Tabel gaya plot disimpan bersama setiap lembar di gambar; lembar tanpa pilihan dimulai dengan yang terakhir Anda pilih. Jendela yang dipilih disimpan sampai Anda memuat ulang halaman; setelah itu dialog mulai dari {{ui:Everything (extents)}}.

## Kesalahan umum

- **PDF kosong atau tombolnya abu-abu.** Tidak ada yang di-plot (model kosong), atau {{ui:A window…}} dipilih dan belum ada jendela yang dipilih ("Pilih jendela yang akan di-plot.").
- **Teks menampilkan "?" di PDF.** Teks dalam bahasa Polandia, Ceko, Sirilik, Yunani, dan aksara Eropa lainnya dicetak apa adanya: PDF lalu membawa huruf yang diperlukan (dari font Liberation Sans, yang memiliki lebar Helvetica), dan teks tetap dapat dipilih serta dicari. Teks Tionghoa, Jepang, dan Korea juga dicetak apa adanya: jika gambar memilikinya, plot mengambil font yang lebih besar (sekitar 10 MB, sekali), dan PDF hanya membawa karakter yang dipakai, sehingga perlu koneksi pada kali pertama (tidak berlaku untuk salinan offline yang disimpan sebelumnya). Teks Ibrani dicetak dari font tertanam yang sama dengan teks Latin, dan teks Arab, Persia, serta Urdu membuat plot mengambil satu font lagi (di bawah 1 MB, sekali); baris dari kanan ke kiri diurutkan dan hurufnya disambung (lihat [Teks](topic:text)). Ideograf langka di luar font tersebut, dan aksara yang memerlukan pembentukan kompleks seperti Hindi, dicetak sebagai "?", dan riwayat menghitungnya.
- **Semua garis memiliki ketebalan yang sama.** Tebal garisnya adalah default: beri layer atau objek {{ui:Lineweight}} di panel kanan (lihat [Tebal garis dan jenis garis](topic:units-papers-scales#line-weights-and-linetypes)), atau atur tebal garis per warna di [tabel gaya plot](topic:plot-pdf#plot-style-tables).
- **"(tidak ada di gambar ini)" di samping gaya plot.** Gambar berasal dari program lain dan menyebut tabel yang tidak disertakannya. Pilih salah satu tabel, atau buat tabel dengan nama itu.
- **Garis konstruksi ikut tercetak.** Atur layernya agar tidak di-plot: klik tombol printernya di panel {{ui:Layers}}.
- **Ukuran hasil cetak salah.** Printer telah memperkecil atau memperbesarnya. Cetak pada ukuran sebenarnya.
- **{{key:Mod+P}} membuka dialog cetak peramban.** Kursor berada di kotak di panel kanan, atau dialog lain sedang terbuka. Tekan {{key:Enter}} atau {{key:Esc}} untuk keluar dari kotak, lalu coba lagi, atau klik {{ui:Plot}}.
- **{{key:Mod+P}} tidak melakukan apa-apa.** Sebuah perintah sedang berjalan. Tekan {{key:Esc}} terlebih dahulu.
