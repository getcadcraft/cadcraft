---
title: Perkara baharu dalam 0.7
summary: Underlay PDF dan import PDF, lukisan imbasan dengan surih automatik, splin sebenar dengan SPLINE, SPLINEDIT dan PEDIT, pengurus gaya dimensi, teks yang mengekalkan pemformatannya, WBLOCK dan skala anda sendiri, pepejal 3D daripada program lain, pendaftaran imbasan, panel Laser, eksport USD, Sejarah dan cetakan dalam CadCraft Studio, lukisan pertama yang dipandu, bar alat di mana-mana sisi atau dalam beberapa baris, dan lebih banyak untuk pembantu AI.
keywords: perkara baharu, apa yang baharu, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, pdf, pdfattach, pdfimport, underlay, imbasan, scanattach, scantrace, surih, raster, rastersnap, splin, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, pemformatan, wblock, scalelistedit, senarai skala, acis, pepejal 3d, registerscans, daftar imbasan, icp, e57, las, laser, grbl, g-code, usd, usdout, sejarah, versi, bandingkan, cetak, pencetak, png, svg, gaya plot, jenis garisan, panduan, helaian rujukan pantas, peta arahan, kedudukan bar alat, baris bar alat, toolbardock, regen, regenall, pad jejak, leret, laman kod, sirilik, korea, cina, jepun, elektrik, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder sokongan, pembantu, mcp, unit, portugis
from: b9258ca6
---

Ini ialah perkara yang berubah dalam CadCraft 0.7, berbanding 0.6. Banyak daripadanya diminta di Discord. Senarai ini dikumpulkan mengikut bidang, dengan yang paling penting dahulu.

## Baharu

### PDF dan lukisan imbasan

- **Letakkan halaman PDF di bawah lukisan.** {{cmd:PDFATTACH}} (`PDFATT`) meletakkan halaman pada saiz sebenarnya atau skala yang anda taip. Snap ke garisnya, pudarkannya, jadikannya monokrom ({{cmd:PDFADJUST}}), klipkannya ({{cmd:PDFCLIP}}) dan tukar lapisan PDF itu sendiri ({{cmd:PDFLAYERS}}). Ia diplot sebagai garisan, isian dan teks, dan DWG atau DXF 2000 menyimpannya sebagai pautan kepada fail itu. Membuka PDF dengan {{ui:Buka}} bertanya sama ada hendak melampirkan atau mengimportnya. Lihat [Underlay PDF dan import PDF](topic:pdf-underlay).
- **Tukar halaman PDF menjadi objek lukisan.** {{cmd:PDFIMPORT}} (`PDFIM`) membuat garisan, polygaris, bulatan, lengkok, hatch pepejal dan teks pada lapisan yang dinamakan mengikut PDF, pada saiz sebenar, skala yang ditaip, atau diskalakan daripada dua titik dan jarak sebenar, dalam satu langkah buat asal. Lihat [Import halaman](topic:pdf-underlay#import-a-page).
- **Lukisan imbasan.** {{cmd:SCANATTACH}} membawa masuk PNG, JPEG atau TIFF (satu halaman atau semuanya) atau halaman PDF yang berupa gambar. Kemudian skalakannya daripada dua titik ({{cmd:SCANSCALE}}), jajarkannya ({{cmd:SCANALIGN}}), tegakkannya daripada garisan panjangnya sendiri ({{cmd:SCANDESKEW}}), jadikannya hitam dan putih serta buang bintik ({{cmd:SCANCLEAN}}), potongnya dan padamkan sebahagian daripadanya. Setiap langkah ialah satu langkah buat asal dan fail asal dikekalkan. Lihat [Lukisan imbasan dan surih](topic:scanned-drawings).
- **Surih imbasan kepada garisan dan lengkok.** {{cmd:SCANTRACE}} melukis garisan imbasan sebagai garisan dan lengkok pada lapisan baharu, SCAN-TRACE, dengan toleransi yang anda tetapkan, dan membiarkan teks serta hatch seperti sedia ada. Laporan menyatakan apa yang dihasilkan dan apa yang ditinggalkan, dan ia bukan dakwaan bahawa hasilnya betul: semak dengan helaian. {{cmd:RASTERSNAP}} membolehkan snap objek mencari hujung, bucu dan persilangan imbasan. Tiada apa yang dihantar ke mana-mana dan tiada model terlatih digunakan. Lihat [Surih](topic:scanned-drawings#the-trace).

### Melukis dan menyunting

- **Splin sebenar.** {{cmd:SPLINE}} (`SPL`) melukis lengkung melalui titik atau daripada titik kawalan (darjah 1 hingga 5), dengan tangen hujung; {{cmd:SPLINEDIT}} (`SPE`) mengalih, menambah dan memadam titik suai atau titik kawalan, menetapkan berat, membuka, menutup, membalikkan, atau menukar splin menjadi polygaris. Splin daripada fail DWG dan DXF dibuka sebagai splin, dan DWG serta DXF 2000 menyimpannya sebagai splin. Lihat [Splin dan polygaris](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) menutup dan membuka polygaris, mencantumkan garisan dan lengkok kepadanya, menetapkan satu lebar, memadankan lengkung melalui bucu atau splin di sepanjangnya dan membatalkannya dengan Decurve, membalikkan, dan menyunting beberapa sekaligus. Lihat [Sunting polygaris](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) menulis blok, beberapa objek atau keseluruhan lukisan ke DWG atau DXF baharu yang hanya mengandungi lapisan, gaya dan blok yang digunakannya. Lihat [Tulis blok atau objek ke fail sendiri](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN dan REGENALL.** {{cmd:REGEN}} (`RE`) melukis semula tab yang anda sedang gunakan daripada lukisan, {{cmd:REGENALL}} (`REA`) setiap tab, anak tetingkap dan lukisan yang dibuka. Lihat [REGEN dan REGENALL](topic:commands#regen-and-regenall).

### Teks dan dimensi

- **Teks mengekalkan pemformatannya.** Teks perenggan daripada program lain mengekalkan warnanya bagi setiap perkataan, tebal dan condong, garis bawah, pecahan bertindan dan ketinggian: ia dilukis pada skrin dan dalam PDF, dikekalkan apabila anda menyunting perkataan, dan disimpan semula. Lihat [Pemformatan dalam teks perenggan daripada program lain](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Pengurus gaya dimensi.** {{cmd:DIMSTYLE}} (`D`) membuat, menukar, membandingkan dan menggunakan gaya dimensi yang dinamakan; menukar satu gaya menukar setiap dimensi yang menggunakannya. {{cmd:DIMEDIT}} (`DED`) mengembalikan teks, menaip teks baharu, memusingkannya atau mencondongkan garisan lanjutan; {{cmd:DIMTEDIT}} mengalihkan teks ke kiri, kanan atau ke tengah. Lihat [Gaya dimensi yang dinamakan](topic:dimension-settings#named-dimension-styles).
- **Skala anda sendiri.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) menambah skala seperti 1:75 pada senarai skala viewport dan plot; ia disimpan dalam lukisan (DWG dan DXF 2000), dan lukisan daripada program lain membawa senarainya sendiri. Lihat [Skala](topic:units-papers-scales#scales).
- **Teks dalam abjad lain.** Fail DXF yang disimpan dalam laman kod Sirilik, Korea, Cina, Jepun atau Vietnam kini dibuka dengan teksnya, dan teks Cina, Jepun serta Korea dicetak dalam PDF (plot mengambil fon yang lebih besar kali pertama ia memerlukannya). Lihat [Fon](topic:text#font).

### Plot dan cetakan

- **Lebih banyak dalam jadual gaya plot.** Bagi setiap warna, jadual kini juga boleh menetapkan jenis garisan, hujung garisan dan sambungan garisan, serta gaya isian yang mencetak isian pepejal sebagai garisan hatch; jadual itu mempunyai senarai ketebalan garisannya sendiri dan skala jenis garisan. Lihat [Jadual gaya plot](topic:plot-pdf#plot-style-tables).
- **Cetak, dan fail PNG serta SVG.** Kotak dialog Plot mempunyai {{ui:Cetak…}}, {{ui:Muat turun PNG}} (300 dpi) dan {{ui:Muat turun SVG}}. Dalam CadCraft Studio ia menyenaraikan pencetak komputer, kertasnya dan bilangan salinan. Lihat [Cetak](topic:plot-pdf#print) dan [Fail gambar dan SVG](topic:plot-pdf#picture-and-svg-files).

### 3D dan awan titik

- **Pepejal 3D daripada program lain.** Pepejal, rantau dan jasad dalam ruang model lukisan dipaparkan pada tab 3D, baca sahaja, dan menyimpan sebagai DWG menulisnya semula tanpa diubah. Muka pada permukaan yang CadCraft belum lukis disenaraikan, bukan diagak. Lihat [Pepejal daripada program lain](topic:3d-solids#solids-from-other-programs).
- **Daftar beberapa imbasan.** {{cmd:REGISTERSCANS}} (`REGSCAN`) meletakkan imbasan yang diambil dari kedudukan berbeza dalam satu bingkai, mengikut pasangan titik atau koordinat sasaran yang ditaip, memperhalusinya dengan ICP, menyimpan pendaftaran sebagai fail projek kecil, dan menulis awan yang didaftarkan sebagai satu fail LAS atau E57. Lihat [Daftar beberapa imbasan menjadi satu](topic:register-scans).
- **Eksport USD.** {{cmd:USDOUT}}, atau {{cmd:EXPORT3D}} › {{ui:USD}}, menulis pepejal tab 3D sebagai `.usda`, `.usdc` atau `.usdz`. Lihat [Eksport model 3D sebagai USD](topic:usd).
- **Pengiraan pada tab 3D.** Di mana alat tab 3D meminta jarak, anda boleh menaip pengiraan, seperti pada baris arahan. Lihat [Aritmetik dalam nilai yang ditaip](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Membuat sesuatu

- **Hantar lukisan ke laser.** {{cmd:LASER}}, atau {{ui:Pandangan}} › {{ui:Lagi}} › {{ui:Laser…}}, membuka panel di atas lukisan: setiap lapisan dipotong, dicalar, mengukir garisan, mengisi bentuk, mengukir gambar atau tidak dihantar, dengan kuasa, kelajuan dan laluannya. Pratonton mengikut suntingan anda, {{ui:Simpan G-code…}} menulis G-code mod laser GRBL, dan dalam Chrome atau Edge panel itu boleh membingkaikan kerja dan menghantarnya melalui USB. Tetapan disimpan dalam lukisan (DWG dan DXF). Lihat [Hantar lukisan ke laser](topic:laser-cutting).
- **Simbol pemasangan bangunan dalam add-on Elektrik.** Soket data, telefon dan TV, suis kunci dan masa, termostat, tanda keluar, pengesan, titik panggilan dan penggera, kipas, pemanas air, dapur, titik cas EV, meter tenaga dan sub-papan, serta simbol RCD dan RCBO. Satu litar boleh membawa RCD, jadual panel mempunyai lajur RCD, dan semakan menamakan litar soket tanpa RCD 30 mA atau kurang. Ia ialah peringatan perancangan, bukan semakan kod.
- **Add-on P&ID.** P&ID melukis gambar rajah proses: simbol dengan titik sambungan, garisan proses dan isyarat, tag, nombor garisan, senarai garisan, peralatan, instrumen dan injap (CSV atau buku kerja) serta semakan. Ia disertakan bersama CadCraft dan dimatikan sehingga anda menghidupkannya dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Add-on}}. Ia alat bantuan lukisan, bukan kelulusan kejuruteraan, dan perkataannya dalam Bahasa Inggeris sahaja buat masa ini.

### Bermula dan skrin

- **Lukisan pertama yang dipandu.** {{cmd:TOUR}} (atau {{ui:Ikuti panduan}} pada kad mula) membimbing anda melalui enam langkah dalam lukisan sebenar: garisan, bulatan, alih, pangkas, padam dan dimensi. Ia bermula sendiri kali pertama CadCraft dibuka tanpa apa-apa di dalamnya. Lihat [Lebih suka dipandu?](topic:getting-started#prefer-to-be-guided)
- **Helaian rujukan pantas dan peta arahan.** [Helaian rujukan pantas](topic:cheat-sheet) mempunyai 40 arahan harian dalam satu halaman, juga sebagai PDF untuk dicetak, dan [peta arahan](topic:command-map) menyenaraikan arahan dengan nama pendeknya, A hingga Z.
- **Bar alat di mana-mana sisi.** {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Kedudukan bar alat}}: atas (seperti sebelum ini), bawah, kiri atau kanan, atau taip {{cmd:TOOLBARDOCK}}. Lihat [Kedudukan bar alat](topic:settings#toolbar-position).
- **Baris bar alat.** {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Baris bar alat}}: balut mengikut muat, 2 baris atau 1 baris, untuk bar alat CadCraft dan gaya Drafting klasik dan Reben. {{key:Shift+Ctrl+F1}} bertukar antara baris, {{key:Ctrl+F1}} antara apa yang ditunjukkan butang, dan {{cmd:TOOLBARROWS}} serta {{cmd:TOOLBAR}} menetapkannya. Petunjuk mula mempunyai butang tutup. Terima kasih kepada GJoe2, yang menghantar ini sebagai permintaan tarik (pull request). Lihat [Baris bar alat](topic:settings#toolbar-rows).

### Dalam CadCraft Studio

- **Sejarah.** {{cmd:HISTORY}} (`HIST`), atau {{ui:Pandangan}} › {{ui:Lagi}} › {{ui:Sejarah…}}: salinan yang Studio simpan apabila anda membuka dan menyimpan lukisan, dan versi awan lukisan apabila anda membukanya daripada awan. Buka atau pulihkan satu, atau bandingkan dua, dengan apa yang ditambah, dialih keluar dan diubah ditunjukkan dalam warna. Lihat [Sejarah](topic:history).
- **acad.lsp dan acaddoc.lsp.** Pilih folder sokongan dalam {{cmd:APPLOAD}}: kedua-dua fail itu dimuatkan apabila CadCraft bermula (acaddoc.lsp sekali lagi bagi setiap tab lukisan baharu), dan `S::STARTUP` dijalankan selepasnya. Lihat [Muat aplikasi](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Kotak dialog Plot dalam tetingkapnya sendiri.** Satu butang pada bar tajuknya memindahkannya ke tetingkap yang boleh anda letakkan pada monitor lain. Lihat [Alih kotak dialog](common:arrange-panels#move-a-dialog).

### Untuk pembantu AI

- **Fail mengikut nama, dalam folder yang anda pilih.** Dalam CadCraft Studio pembantu boleh membuka, menyimpan dan memplot fail mengikut nama, dan memberikan arahan fail yang diminta (INSERT daripada fail, eksport COUNT, SAVEAS, PLOT), tetapi hanya di dalam folder yang anda tambah di bawah {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Pembantu}} › {{ui:Folder yang boleh digunakannya}}. Lihat [Benarkan ia menggunakan fail dalam folder yang anda pilih](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Panggilan yang lebih sedikit.** Pembantu boleh menaip keseluruhan baris arahan sekaligus, mengekalkan arahan terbuka antara panggilannya, mengira objek mengikut jenis dan lapisan tanpa menyenaraikannya, dan meletakkan blok dengan nilai atributnya dalam satu langkah.
- **Tanpa tetingkap.** Baris arahan `cadcraft` menulis plot SVG dan menukar, memplot, menyemak atau menerangkan banyak fail sekaligus. Pakej MCP belum diterbitkan lagi. Lihat [Bekerja pada fail tanpa membuka CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Diubah

- **Pad jejak melakukan pan.** Alihkan dua jari pada pad jejak dan paparan 2D mengikutinya; cubit dan roda tetikus untuk zum. Lihat [Tetikus, pad jejak dan sentuh](topic:mouse-trackpad-touch).
- **Objek OLE dikekalkan.** Objek terbenam DXF dipaparkan sebagai gambarnya atau sebagai bingkai berlabel dan disimpan semula oleh DXF 2000. Objek DWG dikekalkan dan ditulis semula apabila anda menyimpan sebagai DWG, tetapi belum ditunjukkan. Sebelum ini, ia hilang semasa simpanan. Lihat [Objek daripada program lain (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Unit lukisan baharu** mengikut unit yang anda tandakan dengan bintang dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}}.

## Dibetulkan

- Layout yang dibuka kosong, atau kehilangan viewport dan menunjukkan keseluruhan model di tempatnya, kini dibuka dengan viewport sebenar. Layout tanpa pautan kepada kandungannya dikekalkan dan laporan buka menyatakannya.
- Fail DXF dalam laman kod lama menunjukkan teks Sirilik dan Korea yang rosak. Kini ia dibaca dengan betul.
- Teks perenggan daripada program lain kehilangan pemformatannya apabila dibuka dan disimpan semula sebagai teks biasa.

## Dalam setiap aplikasi

- **Unit.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Unit}} mempunyai satu senarai bagi setiap panjang, luas, isi padu, sudut dan kecerunan, dengan saiz tepat yang diberikan oleh takrif unit (kaki tinjauan AS ialah unitnya sendiri). Matikan unit yang tidak pernah anda gunakan dan ia keluar daripada senarai unit; tandakan satu dengan bintang dan kerja baharu bermula dalamnya. Sebuah fail sentiasa mengekalkan unitnya sendiri. Dalam CadCraft, bintang menetapkan unit lukisan baharu apabila ia ialah unit yang boleh dibawa oleh lukisan; kotak {{ui:Unit}} milik CadCraft sendiri belum mengikut suis. Apabila lukisan mempunyai unit, panjang yang anda taip boleh membawa tanda mana-mana unit. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Layout lebih padat dan panel yang boleh dikemas simpan.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Ketumpatan reka letak}} › {{ui:Padat}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besarnya). Setiap panel sisi mempunyai bar tajuk yang nipis: seret untuk melekapkan atau menerapungkan panel, lepaskan pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pin untuk menggelongsor ke tepi, atau sorokkan dan bawa balik dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Kotak dialog boleh dialihkan.** Seret kotak dialog mengikut bar tajuknya ke luar daripada lukisan; ia kembali di tempat anda meninggalkannya. Klik dua kali bar tajuk untuk meletakkannya di tengah semula. Lihat [Alih kotak dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang telah dikerjakan untuk pembantu anda sendiri (kemaskan lukisan, plot satu set, semak lukisan, tanya model soalan, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukannya, dan setiap satu dimainkan semula oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** ialah baharu dalam {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Bahasa}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam Bahasa Inggeris.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (belum ada fail untuk sistem anda, tiada rangkaian, tandatangan rosak) dan bukannya hanya "Selesai", dan berhenti memaparkan semula kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan, dan pakej Microsoft Store, dipindahkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail pada getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Jalankan juga}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum berada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Senarai sudut dan kecerunan dalam {{ui:Unit}} disimpan, tetapi belum ada kotak yang membacanya.
- Objek OLE DWG dikekalkan tetapi tidak ditunjukkan, dan gambar metafail dalam objek OLE tidak dilukis.
- Membaca jadual gaya plot (fail CTB) daripada program lain menunggu fail sampel.
- Teks Asia lama yang ditulis sebagai kod `\M+` dibaca, tetapi belum disemak dengan fail daripada program lain.
- Underlay PDF: gambar dalam halaman dipaparkan pada skrin tetapi tidak diplot, plot pembantu mengecualikan underlay, dan cara program lain membaca klip dan skala yang disimpan belum disemak dalam program tersebut.
- Sejarah: CadCraft belum menghantar simpanannya ke awan, jadi versi awan ialah yang disimpan daripada peranti dan web lain. Sejarah hanya ada dalam CadCraft Studio.
- Sama ada Studio mengekalkan folder sokongan acad.lsp selepas dimulakan semula belum disemak; jika ia bertanya, pilih folder semula dalam APPLOAD.
- Panel Laser belum diuji pada laser sebenar: uji setiap tetapan pada bahan buangan. CadCraft Studio tiada Web Serial, jadi dalam Studio panel hanya menyimpan G-code.
- Pendaftaran imbasan telah diuji pada imbasan rekaan, belum lagi pada set pengimbas sebenar.
- Pan dua jari telah dicuba dengan peristiwa pad jejak simulasi, belum lagi pada pad jejak sebenar.
- {{cmd:PEDIT}} tidak mempunyai pilihan Edit vertex (gunakan grip atau {{ui:Sifat}}). Ofset, pangkas, panjangkan, fillet, pecah dan cantum belum menerima splin; ketinggian splin (Z) tidak dikekalkan.
- Teks perenggan baharu belum boleh diberikan kod pemformatan, dan plot SVG menunjukkan teks yang diformat dalam satu warna.
- Seluruh lukisan WBLOCK hanya menulis model, bukan helaian. Gaya dimensi semasa tidak disimpan dalam fail: lukisan dibuka dengan Standard sebagai semasa.
- Gaya menu reben belum mempunyai senarai lapisan, warna atau jenis garisan: gunakan panel {{ui:Lapisan}} dan {{ui:Sifat}}.
- Awan titik masih tidak disimpan dalam lukisan atau diplot, dan fail E57 dibuka sehingga 6 juta titik dan 512 MB.
- Fail DWG yang disimpan CadCraft belum disemak dalam AutoCAD sendiri lagi.

Yang lain terdapat dalam [Belum dibina](topic:not-built-yet).
