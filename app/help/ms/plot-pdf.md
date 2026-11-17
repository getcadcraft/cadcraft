---
title: Plot ke PDF
summary: Buat PDF bagi helaian pada saiz penuh, atau bagi model pada skala atau dimuat ke kertas, cetak dari pelayar atau dari Studio, atau simpan sebagai PNG atau SVG.
keywords: plot, cetak, pencetak, salinan, png, svg, gambar, pdf, terbitkan, exportpdf, kertas, skala, monokrom, skala kelabu, hitam putih, ketebalan garisan, pen, persediaan halaman, tetingkap plot, gaya plot, jadual gaya plot, ctb, bergantung warna, skrin, plotstyles, stylesmanager
from: a4752f83
---

## Apa yang akan anda hasilkan

PDF bagi helaian pada saiz penuh, kemudian PDF pantas bagi model pada 1:100, dan satu cetakan.

PDF dibuat di dalam pelayar anda; tiada apa-apa dimuat naik. Ia ialah PDF vektor: garisan kekal tajam pada mana-mana zum, dan teks boleh dicari.

## Plot satu helaian

1. Klik tab helaian di bawah lukisan.
2. Tekan {{key:Mod+P}}, klik {{ui:Plot}}, atau taip `PLOT` dan tekan {{key:Enter}}.

Dialog {{ui:Plot to PDF}} dibuka. Ia menyatakan helaian yang diplot dan pada kertas yang mana, "pada saiz penuh … seperti yang anda lihat". Pratonton di sebelah kanan menunjukkan helaian itu.

3. Dalam {{ui:Plot style}}, pilih {{ui:Monochrome (black)}} untuk garisan hitam, {{ui:Colour (as drawn)}} untuk mengekalkan warna, {{ui:Grayscale}}, atau jadual sendiri (lihat [Jadual gaya plot](topic:plot-pdf#plot-style-tables)). Helaian menyimpan pilihan ini: ia disimpan bersama lukisan.
4. Dalam {{ui:Line weight}}, pilih lebar pen dari 0.13 mm hingga 0.70 mm. Garisan dengan ketebalan lalai dicetak pada lebar ini; garisan dengan ketebalan garisan sendiri (lapisan atau objek, atau pen warnanya dalam jadual) dicetak pada lebar itu.
5. Klik {{ui:Download PDF}}.

Pelayar memuat turun PDF yang dinamakan mengikut lukisan dan helaian, contohnya `Drawing1-A-101 Plan.pdf`. Sejarah melaporkan saiznya dalam bait dan saiz kertasnya dalam milimeter.

Helaian sentiasa diplot pada 1:1 di atas kertasnya sendiri. Untuk menukar kertas, tukarkannya pada helaian itu (lihat [Sediakan helaian](topic:sheets-and-viewports)). Lapisan yang ditetapkan supaya tidak diplot ditinggalkan, begitu juga bingkai viewport.

## Setiap helaian dalam satu PDF

Dengan dua atau lebih helaian, dialog {{ui:Plot to PDF}} mempunyai {{ui:All sheets in one PDF}}; atau taip {{cmd:PUBLISH}}. {{key:Enter}} memilih setiap helaian; `S` (Sebahagian) meminta nama mereka, dipisahkan dengan koma. Satu PDF dimuat turun dengan satu halaman bagi setiap helaian, mengikut urutan tab, setiap satu pada saiz kertasnya sendiri, dan satu penanda buku bagi setiap helaian dengan namanya. Setiap helaian diplot dengan jadual gaya plotnya sendiri; helaian yang tiada pilihan menggunakan jadual yang terakhir anda pilih dalam dialog, dan lebar pen yang terakhir anda pilih.

## Plot model

1. Klik tab {{ui:Model}}.
2. Tekan {{key:Mod+P}}.

Dialog menyatakan ia memplot model ke atas helaian kertas, dan menunjukkan lebih banyak tetapan:

3. Dalam {{ui:Area}}, pilih apa yang hendak diplot:
   - {{ui:Everything (extents)}}: keseluruhan lukisan.
   - {{ui:What is on screen}}: kawasan yang anda lihat dalam lukisan sekarang.
   - {{ui:A window…}}: kemudian klik {{ui:Pick}}, klik dua bucu pada lukisan, dan dialog akan kembali.
4. Dalam {{ui:Paper}}, pilih saiz: ISO A4 hingga A0, Letter, Legal, Tabloid dan ANSI C dan D, atau ARCH C, D dan E.
5. Dalam {{ui:Orientation}}, pilih {{ui:Landscape}} atau {{ui:Portrait}}.
6. Dalam {{ui:Scale}}, pilih {{ui:Fit to paper}} atau skala seperti `1:100`.

Di bawah tetapan, satu baris melaporkan skala dan betapa besar kawasan itu keluar pada kertas. Jika ia lebih besar daripada kertas, ia menyatakannya: tepi akan terpotong. Pilih skala yang lebih kecil, kertas yang lebih besar, atau {{ui:Fit to paper}}.

7. Klik {{ui:Download PDF}}.

Plot model meninggalkan margin 5 mm di sekeliling tepi, kerana kebanyakan pencetak tidak dapat mencetak sehingga ke tepi. {{ui:Fit to paper}} memberi skala ganjil (sejarah dan baris maklumat menyatakan "(muat)"); pilih skala piawai apabila lukisan mesti diukur dengan betul.

:::note
Skala dibaca dalam unit sebenar. Untuk 1:100 yang betul, tetapkan {{ui:Units}} dalam {{ui:Current settings}} kepada apa yang diwakili oleh satu unit lukisan. Lukisan tanpa unit dianggap dalam milimeter.
:::

## Jadual gaya plot

Jadual gaya plot menyatakan bagaimana setiap daripada 255 warna lukisan piawai dicetak, seperti yang dilakukan oleh jadual gaya plot bergantung warna (CTB) dalam program CAD lain. Tiga disediakan secara terbina dalam:

| Jadual | Dicetak |
|---|---|
| {{ui:Colour (as drawn)}} | Setiap objek dalam warnanya sendiri. |
| {{ui:Monochrome (black)}} | Setiap warna hitam: pilihan biasa untuk lukisan. |
| {{ui:Grayscale}} | Setiap warna sebagai kelabunya, supaya warna kekal berasingan pada pencetak hitam putih. |

Untuk membuat sendiri, contohnya garisan merah tebal dan hitam, yang lain nipis:

1. Dalam dialog {{ui:Plot to PDF}}, klik {{ui:Edit tables…}} (atau taip {{cmd:PLOTSTYLES}}).
2. Klik {{ui:New}}, dan taip nama seperti `office` dalam {{ui:Name}}. Untuk bermula dari jadual terbina dalam, pilih dalam {{ui:Table}} dan klik {{ui:Copy}}.
3. Klik warna dalam grid. {{key:Shift}}+klik memilih julat warna, {{key:Mod}}+klik menambah satu lagi, dan {{ui:Select every colour}} mengambil kesemuanya.
4. Tetapkan apa yang dicetak oleh warna yang dipilih:
   - {{ui:Prints in}}: {{ui:Its own colour}}, {{ui:Black}} atau {{ui:Another colour…}}.
   - {{ui:As a gray}}: warna itu sebagai kelabunya.
   - {{ui:Ink (%)}}: 100 ialah dakwat penuh, 50 ialah separuh jalan ke putih (skrin), untuk garisan latar belakang.
   - {{ui:Lineweight}}: {{ui:Its own lineweight}} mengekalkan ketebalan garisan objek atau lapisan; satu nilai mencetak setiap garisan bagi warna itu pada lebar tersebut.
   - {{ui:Linetype}}: cetak setiap garisan bagi warna itu dengan jenis garisan lain (contohnya semua merah putus-putus); {{ui:Use the object's linetype}} membiarkannya.
   - {{ui:Line end}} dan {{ui:Line join}}: hujung butt, persegi atau bulat, dan sudut miter, bevel atau bulat (bulat, seperti dahulu, apabila anda tidak tetapkan apa-apa).
   - {{ui:Fill style}}: isian pepejal bagi warna itu dicetak sebagai garisan lorekan (bar mendatar atau menegak, condong, silang, berlian, titik segi empat) dan bukan dakwat, untuk pencetak dan pelan yang memerlukan dakwat rata terlalu berat.

   Jadual itu sendiri mempunyai dua tetapan lagi: {{ui:Lineweights}}, lebar yang diketahuinya (garisan yang dicetak pergi ke yang terdekat daripadanya), dan {{ui:Linetype scale}}, faktor pada putus-putus bagi setiap jenis garisan yang bukan ISO.
5. Klik {{ui:Done}}. Jadual disimpan dalam lukisan, dan helaian (atau model) kini diplot dengannya. {{ui:Cancel}} membatalkan perubahan.

Warna dengan pen sendiri menunjukkan titik di sudutnya, dan titik di bahagian bawah apabila ia menetapkan ketebalan garisan. Objek dengan warna sebenar (bukan salah satu daripada 255) menggunakan pen warna piawai yang terdekat.

Lukisan menyimpan jadualnya dan pilihan setiap helaian apabila anda simpan sebagai DWG (2000 hingga 2018) atau DXF (R12 atau 2000), dan membukanya semula dengan jadual itu. Program lain hanya melihat nama dalam persediaan halaman setiap helaian (`office.ctb`), bukan jadual itu sendiri. Lukisan dari program lain yang persediaan halamannya menamakan jadual seperti `monochrome.ctb` diplot dengan jadual terbina dalam dengan nama itu; untuk sebarang nama lain dialog menyatakan lukisan itu tidak mempunyainya, dan memplot warna lukisan sehingga anda pilih jadual atau buat satu dengan nama itu.

Untuk menggunakan jadual dalam lukisan lain, klik {{ui:Export}} dalam {{ui:Jadual gaya plot}} (ia menyimpan `office.plotstyle.json`), kemudian {{ui:Import…}} dalam lukisan lain. {{ui:Import…}} juga menerima fail `.ctb` dari program lain: ia dibaca daripada penerangan terbitan format itu dan **belum disemak dengan fail sebenar**. Warna, skrin dan ketebalan garisan bagi setiap warna dibaca; skala kelabu, nombor pen, jenis garisan, hujung dan penyambungan garisan serta gaya isian tidak dibaca, dan jadual yang dinamakan (`.stb`) ditolak. Bandingkan plot pertama dengan apa yang anda jangkakan, dan hantarkan fail kepada kami jika ia salah.

## Cetak

**Dalam pelayar**, klik {{ui:Print…}}. CadCraft membuat PDF dan membuka dialog cetak pelayar sendiri untuknya. Pilih "Saiz sebenar" atau 100% (bukan "Muat") di situ untuk mengekalkan skala. Jika pelayar tidak akan mencetak dari halaman itu, PDF dibuka dalam tab baharu sebaliknya: cetaknya dari situ dengan {{key:Mod+P}}.

Anda juga boleh klik {{ui:Open to print}}: PDF dibuka dalam tab pelayar baharu, dan anda cetak dari situ.

:::safari
Safari mungkin memaparkan PDF dan menunggu anda gunakan **Fail**, kemudian **Cetak**.
:::

Jika pelayar anda menyekat tab baharu, CadCraft memuat turun PDF sebaliknya dan menyatakannya dalam sejarah. Benarkan tetingkap timul untuk laman itu supaya ia dibuka dalam tab pada kali seterusnya.

**Dalam CadCraft Studio**, dialog {{ui:Plot to PDF}} menyenaraikan pencetak komputer. Pilih {{ui:Printer}}, {{ui:Paper in the printer}} dan bilangan {{ui:Copies}}, kemudian klik {{ui:Print…}}. {{ui:Sama seperti plot}} memilih kertas pencetak yang bersaiz sama dengan helaian (A3 bagi helaian A3); apabila pencetak tiada kertas sedemikian, ia menggunakan kertasnya sendiri dan memuatkan helaian padanya. Pada Windows helaian dihantar sebagai gambar 300 dpi, kerana Windows tidak dapat mencetak PDF tanpa program PDF; pada Linux dan macOS PDF itu sendiri dihantar ke perkhidmatan cetakan sistem. Tiada apa-apa meninggalkan komputer.

## Fail gambar dan SVG

{{ui:Download PNG}} menyimpan helaian yang diplot sebagai gambar pada 300 dpi (diturunkan hanya apabila helaian yang sangat besar akan lebih besar daripada yang mampu dibuat oleh pelayar; sejarah menyatakannya). {{ui:Download SVG}} menyimpannya sebagai lukisan boleh skala dalam milimeter, dengan garisan dan teks plot. Kedua-duanya datang daripada plot yang sama dengan PDF, dengan gaya plot, ketebalan garisan dan kawasan yang sama. Gambar yang diletakkan dalam lukisan hanya ada dalam PDF; sejarah menyatakan berapa banyak yang ditinggalkan.

## Gambar

Gambar dicetak pada resolusinya sendiri, di bawah garisan. {{ui:Pictures}} dalam dialog mengehadkannya kepada 600, 300 atau 150 dpi untuk fail yang lebih kecil. Garisan, teks dan lorekan sentiasa kekal tajam (vektor), dan ketelusan kekal sebagai ketelusan. Lihat [Gambar dalam lukisan](topic:pictures).

## Tetapan yang diingati

Dialog mengingati kertas, orientasi, skala dan ketebalan garisan terakhir anda dalam pelayar ini. Jadual gaya plot disimpan bersama setiap helaian dalam lukisan; helaian yang tiada pilihan bermula dengan jadual yang anda pilih terakhir. Tetingkap yang dipilih disimpan sehingga anda muat semula halaman; selepas itu dialog bermula pada {{ui:Everything (extents)}}.

## Kesilapan biasa

- **PDF kosong atau butang kelabu.** Tiada apa untuk diplot (model kosong), atau {{ui:A window…}} dipilih dan belum ada tetingkap dipilih ("Pilih tetingkap untuk diplot.").
- **Teks menunjukkan "?" dalam PDF.** Teks dalam bahasa Poland, Czech, Cyrillic, Yunani dan skrip Eropah yang lain dicetak sebagai dirinya sendiri: PDF kemudian membawa huruf yang diperlukannya (daripada fon Liberation Sans, yang mempunyai lebar Helvetica), dan teks masih boleh dipilih dan dicari. Teks Cina, Jepun dan Korea juga dicetak sebagai dirinya sendiri: apabila lukisan mengandunginya, plot mengambil fon yang lebih besar (kira-kira 10 MB, sekali sahaja) dan PDF hanya membawa aksara yang digunakan, jadi ia memerlukan sambungan pada kali pertama (bukan dalam salinan luar talian yang disimpan sebelum itu). Teks Ibrani dicetak daripada fon terbenam yang sama dengan teks Latin, dan teks Arab, Parsi dan Urdu menjadikan plot mengambil satu lagi fon (kurang daripada 1 MB, sekali sahaja); baris dari kanan ke kiri disusun dan huruf-hurufnya bersambung (lihat [Teks](topic:text)). Ideograf jarang di luar fon tersebut, dan skrip yang memerlukan pembentukan kompleks seperti Hindi, dicetak sebagai "?", dan sejarah mengiranya.
- **Semua garisan sama tebal.** Ketebalan garisan mereka ialah nilai lalai: beri lapisan atau objek {{ui:Lineweight}} dalam panel kanan (lihat [Ketebalan garisan dan jenis garisan](topic:units-papers-scales#line-weights-and-linetypes)), atau tetapkan ketebalan garisan bagi setiap warna dalam [jadual gaya plot](topic:plot-pdf#plot-style-tables).
- **"(tiada dalam lukisan ini)" di sebelah gaya plot.** Lukisan datang daripada program lain dan menamakan jadual yang tidak disertakannya. Pilih salah satu jadual, atau buat satu dengan nama itu.
- **Garisan pembinaan tercetak.** Tetapkan lapisannya supaya tidak diplot: klik butang pencetaknya dalam panel {{ui:Lapisan}}.
- **Cetakan bersaiz salah.** Pencetak telah mengskalakannya. Cetak pada saiz sebenar.
- **{{key:Mod+P}} membuka dialog cetak pelayar.** Kursor berada dalam kotak dalam panel kanan, atau dialog lain sedang terbuka. Tekan {{key:Enter}} atau {{key:Esc}} untuk keluar dari kotak, kemudian cuba lagi, atau klik {{ui:Plot}}.
- **{{key:Mod+P}} tidak berbuat apa-apa.** Satu arahan sedang berjalan. Tekan {{key:Esc}} dahulu.
