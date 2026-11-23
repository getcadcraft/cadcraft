---
title: Perkara baharu dalam 0.7 (lebih awal)
summary: Underlay PDF dan import PDF, lukisan diimbas dengan surih automatik, splin sebenar dengan SPLINE, SPLINEDIT dan PEDIT, pengurus gaya dimensi, teks yang mengekalkan format, WBLOCK dan skala anda sendiri, pepejal 3D daripada program lain, pendaftaran imbasan, panel Laser, eksport USD, Sejarah dan cetakan dalam CadCraft Studio, lukisan pertama berpandu, bar alat pada mana-mana sisi atau dalam lebih sedikit baris, dan lebih banyak untuk pembantu AI.
keywords: perkara baharu 0.7, keluaran terdahulu, nota keluaran, log perubahan, perubahan, 0.7, versi, ciri baharu, pdf, pdfattach, pdfimport, underlay, imbasan, scan, scanattach, scantrace, surih, trace, raster, rastersnap, splin, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, format, wblock, scalelistedit, senarai skala, acis, pepejal 3d, registerscans, daftar imbasan, icp, e57, las, laser, grbl, g-code, usd, usdout, sejarah, versi, bandingkan, cetak, pencetak, png, svg, gaya plot, jenis garisan, lawatan, helaian rujukan, peta arahan, kedudukan bar alat, baris bar alat, toolbardock, regen, regenall, pad sentuh, leret, halaman kod, cyrillic, korean, chinese, japanese, elektrik, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder sokongan, pembantu, mcp, unit, portugis
from: d9a8ea79
---

Inilah yang berubah dalam CadCraft 0.7, berbanding 0.6. Banyak daripadanya diminta di Discord. Senarai ini dikumpulkan mengikut bidang, dengan yang paling penting dahulu.

## Baharu

### PDF dan lukisan yang diimbas

- **Letakkan halaman PDF di bawah lukisan.** {{cmd:PDFATTACH}} (`PDFATT`) meletakkan halaman pada saiz sebenar atau skala yang anda taip. Snap ke garisnya, pudarkannya, jadikannya monokrom ({{cmd:PDFADJUST}}), potongnya ({{cmd:PDFCLIP}}) dan tukar lapisan PDF itu sendiri ({{cmd:PDFLAYERS}}). Ia diplot sebagai garisan, isian dan teks, dan DWG atau DXF 2000 menyimpannya sebagai pautan ke fail. Membuka PDF dengan {{ui:Open}} bertanya sama ada hendak melampirkan atau mengimportnya. Lihat [Underlay PDF dan import PDF](topic:pdf-underlay).
- **Tukar halaman PDF kepada objek lukisan.** {{cmd:PDFIMPORT}} (`PDFIM`) membuat garisan, polygaris, bulatan, lengkok, hatch pepejal dan teks pada lapisan yang dinamakan mengikut PDF, pada saiz sebenar, skala yang ditaip, atau diskalakan daripada dua titik dan jarak sebenar, dalam satu langkah buat asal. Lihat [Import halaman](topic:pdf-underlay#import-a-page).
- **Lukisan diimbas.** {{cmd:SCANATTACH}} membawa masuk PNG, JPEG atau TIFF (satu halaman atau semuanya) atau halaman PDF yang merupakan gambar. Kemudian skalakannya daripada dua titik ({{cmd:SCANSCALE}}), jajarkannya ({{cmd:SCANALIGN}}), tegakkannya daripada garisan panjangnya sendiri ({{cmd:SCANDESKEW}}), jadikannya hitam putih dan buang bintik ({{cmd:SCANCLEAN}}), potongnya dan padamkan sebahagian daripadanya. Setiap langkah ialah satu langkah buat asal dan fail asal dikekalkan. Lihat [Lukisan diimbas dan surih](topic:scanned-drawings).
- **Surih imbasan kepada garisan dan lengkok.** {{cmd:SCANTRACE}} melukis garisan imbasan sebagai garisan dan lengkok pada lapisan baharu, SCAN-TRACE, dengan toleransi yang anda tetapkan, dan membiarkan teks serta hatch seperti sedia ada. Laporan menyatakan apa yang dibuatnya dan apa yang ditinggalkan, dan ia bukan dakwaan bahawa hasilnya betul: semak dengan helaian. {{cmd:RASTERSNAP}} membolehkan snap objek mencari hujung, sudut dan persilangan imbasan. Tiada apa dihantar ke mana-mana dan tiada model terlatih digunakan. Lihat [Surih](topic:scanned-drawings#the-trace).

### Lukisan dan penyuntingan

- **Splin sebenar.** {{cmd:SPLINE}} (`SPL`) melukis lengkung melalui titik atau daripada titik kawalan (darjah 1 hingga 5), dengan tangen hujung; {{cmd:SPLINEDIT}} (`SPE`) mengalihkan, menambah dan memadam titik suai atau kawalan, menetapkan berat, membuka, menutup, membalikkan atau menukar splin kepada polygaris. Splin daripada fail DWG dan DXF dibuka sebagai splin, dan DWG serta DXF 2000 menyimpannya sebagai splin. Lihat [Splin dan polygaris](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) menutup dan membuka polygaris, mencantumkan garisan dan lengkok padanya, menetapkan satu lebar, memasang lengkung melalui bucu atau splin di sepanjangnya dan mengembalikannya dengan Decurve, membalikkan, dan menyunting beberapa sekaligus. Lihat [Sunting polygaris](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) menulis blok, sesetengah objek atau keseluruhan lukisan ke DWG atau DXF baharu yang hanya memegang lapisan, gaya dan blok yang digunakannya. Lihat [Tulis blok atau objek ke fail sendiri](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN dan REGENALL.** {{cmd:REGEN}} (`RE`) melukis semula tab yang anda sedang berada daripada lukisan, {{cmd:REGENALL}} (`REA`) setiap tab, anak tetingkap dan lukisan yang terbuka. Lihat [REGEN dan REGENALL](topic:commands#regen-and-regenall).

### Teks dan dimensi

- **Teks mengekalkan formatnya.** Teks perenggan daripada program lain mengekalkan warnanya mengikut perkataan, tebal dan condong, garis bawah, pecahan bertindan dan ketinggiannya: ia dilukis di skrin dan dalam PDF, dikekalkan apabila anda menyunting perkataan, dan disimpan semula. Lihat [Format dalam teks perenggan daripada program lain](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Pengurus gaya dimensi.** {{cmd:DIMSTYLE}} (`D`) membuat, menukar, membandingkan dan menggunakan gaya dimensi bernama; menukar gaya menukar setiap dimensi yang menggunakannya. {{cmd:DIMEDIT}} (`DED`) memulangkan teks, menaip teks baharu, memutarnya atau menyenget garis lanjutan; {{cmd:DIMTEDIT}} mengalihkan teks ke kiri, kanan atau tengah. Lihat [Gaya dimensi bernama](topic:dimension-settings#named-dimension-styles).
- **Skala anda sendiri.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) menambah skala seperti 1:75 pada senarai skala viewport dan plot; ia disimpan dalam lukisan (DWG dan DXF 2000), dan lukisan daripada program lain membawa senarainya sendiri. Lihat [Skala](topic:units-papers-scales#scales).
- **Teks dalam abjad lain.** Fail DXF yang disimpan dalam halaman kod Cyrillic, Korea, Cina, Jepun atau Vietnam kini dibuka dengan teksnya, dan teks Cina, Jepun serta Korea dicetak dalam PDF (plot mengambil fon yang lebih besar kali pertama ia memerlukannya). Lihat [Fon](topic:text#font).

### Plot dan cetak

- **Lebih banyak dalam jadual gaya plot.** Bagi setiap warna, jadual kini juga boleh menetapkan jenis garisan, hujung garisan dan sambungan garisan, dan gaya isian yang mencetak isian pepejal sebagai garisan hatch; jadual mempunyai senarai ketebalan garisannya sendiri dan skala jenis garisan. Lihat [Jadual gaya plot](topic:plot-pdf#plot-style-tables).
- **Cetak, dan fail PNG serta SVG.** Dialog Plot mempunyai {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) dan {{ui:Download SVG}}. Dalam CadCraft Studio ia menyenaraikan pencetak komputer, kertasnya dan bilangan salinan. Lihat [Cetak](topic:plot-pdf#print) dan [Fail gambar dan SVG](topic:plot-pdf#picture-and-svg-files).

### 3D dan awan titik

- **Pepejal 3D daripada program lain.** Pepejal, rantau dan badan dalam ruang model lukisan ditunjukkan pada tab 3D, baca sahaja, dan menyimpan sebagai DWG menulisnya semula tanpa perubahan. Muka pada permukaan yang CadCraft belum lukis disenaraikan, bukan diteka. Lihat [Pepejal daripada program lain](topic:3d-solids#solids-from-other-programs).
- **Daftar beberapa imbasan.** {{cmd:REGISTERSCANS}} (`REGSCAN`) meletakkan imbasan yang diambil dari kedudukan berbeza dalam satu bingkai, mengikut pasangan titik atau koordinat sasaran yang ditaip, memperhalusinya dengan ICP, menyimpan pendaftaran sebagai fail projek kecil, dan menulis awan yang didaftarkan sebagai satu fail LAS atau E57. Lihat [Daftar beberapa imbasan menjadi satu](topic:register-scans).
- **Eksport USD.** {{cmd:USDOUT}}, atau {{cmd:EXPORT3D}} › {{ui:USD}}, menulis pepejal tab 3D sebagai `.usda`, `.usdc` atau `.usdz`. Lihat [Eksport model 3D sebagai USD](topic:usd).
- **Pengiraan pada tab 3D.** Di mana alat tab 3D meminta jarak, anda boleh menaip pengiraan, seperti pada baris arahan. Lihat [Aritmetik dalam nilai yang ditaip](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Membuat sesuatu

- **Hantar lukisan ke laser.** {{cmd:LASER}}, atau {{ui:View}} › {{ui:More}} › {{ui:Laser…}}, membuka panel di atas lukisan: setiap lapisan dipotong, dicalar, diukir garisan, diisi bentuk, diukir gambar atau tidak dihantar, dengan kuasa, kelajuan dan laluannya. Pratonton mengikut suntingan anda, {{ui:Save G-code…}} menulis G-code mod laser GRBL, dan dalam Chrome atau Edge panel boleh membingkaikan kerja dan menghantarnya melalui USB. Tetapan disimpan dalam lukisan (DWG dan DXF). Lihat [Hantar lukisan ke laser](topic:laser-cutting).
- **Simbol pemasangan bangunan dalam add-on Elektrik.** Soket data, telefon dan TV, suis kunci dan masa, termostat, tanda keluar, pengesan, titik panggilan dan penggera, kipas, pemanas air, dapur, titik cas EV, meter tenaga dan sub-papan, serta simbol RCD dan RCBO. Litar boleh membawa RCD, jadual papan mempunyai lajur RCD, dan semakan menamakan litar soket tanpa RCD 30 mA atau kurang. Ia peringatan perancangan, bukan semakan kod.
- **Add-on P&ID.** P&ID melukis gambar rajah proses: simbol dengan titik sambungan, garisan proses dan isyarat, tag, nombor garisan, senarai garisan, peralatan, instrumen dan injap (CSV atau buku kerja) serta semakan. Ia disertakan dengan CadCraft dan dimatikan sehingga anda menghidupkannya dalam {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}. Ia alat bantu lukisan, bukan kelulusan kejuruteraan, dan perkataannya dalam bahasa Inggeris sahaja buat masa ini.

### Permulaan dan skrin

- **Lukisan pertama berpandu.** {{cmd:TOUR}} (atau {{ui:Take the tour}} pada kad permulaan) membawa anda melalui enam langkah dalam lukisan sebenar: garisan, bulatan, alih, pangkas, padam dan dimensi. Ia bermula sendiri kali pertama CadCraft dibuka tanpa apa-apa di dalamnya. Lihat [Lebih suka dipandu?](topic:getting-started#prefer-to-be-guided)
- **Helaian rujukan dan peta arahan.** [Helaian rujukan](topic:cheat-sheet) mempunyai 40 arahan harian pada satu halaman, juga sebagai PDF untuk dicetak, dan [peta arahan](topic:command-map) menyenaraikan arahan dengan nama pendeknya, A hingga Z.
- **Bar alat pada mana-mana sisi.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: atas (seperti dahulu), bawah, kiri atau kanan, atau taip {{cmd:TOOLBARDOCK}}. Lihat [Kedudukan bar alat](topic:settings#toolbar-position).
- **Baris bar alat.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: balut untuk muat, 2 baris atau 1 baris, untuk bar alat CadCraft dan gaya Drafting classic serta Ribbon. {{key:Shift+Ctrl+F1}} melangkah antara mereka, {{key:Ctrl+F1}} melalui apa yang ditunjukkan oleh butang, dan {{cmd:TOOLBARROWS}} serta {{cmd:TOOLBAR}} menetapkannya. Petunjuk permulaan mempunyai butang tutup. Terima kasih kepada GJoe2, yang menghantarnya sebagai pull request. Lihat [Baris bar alat](topic:settings#toolbar-rows).

### Dalam CadCraft Studio

- **Sejarah.** {{cmd:HISTORY}} (`HIST`), atau {{ui:View}} › {{ui:More}} › {{ui:History…}}: salinan yang disimpan Studio apabila anda membuka dan menyimpan lukisan, dan versi awan lukisan apabila anda membukanya dari awan. Buka atau pulihkan satu, atau bandingkan dua, dengan apa yang ditambah, dibuang dan diubah ditunjukkan dalam warna. Lihat [Sejarah](topic:history).
- **acad.lsp dan acaddoc.lsp.** Pilih folder sokongan dalam {{cmd:APPLOAD}}: kedua-dua fail itu dimuatkan apabila CadCraft bermula (acaddoc.lsp sekali lagi untuk setiap tab lukisan baharu), dan `S::STARTUP` berjalan selepas itu. Lihat [Muatkan aplikasi](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialog Plot dalam tetingkapnya sendiri.** Butang pada bar tajuknya memindahkannya ke dalam tetingkap yang boleh anda letakkan pada monitor lain. Lihat [Alih dialog](common:arrange-panels#move-a-dialog).

### Untuk pembantu AI

- **Fail mengikut nama, dalam folder yang anda pilih.** Dalam CadCraft Studio pembantu boleh membuka, menyimpan dan plot fail mengikut nama, dan memberi arahan fail yang diminta (INSERT daripada fail, eksport COUNT, SAVEAS, PLOT), tetapi hanya dalam folder yang anda tambah di bawah {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}. Lihat [Benarkan ia menggunakan fail dalam folder yang anda pilih](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Kurang panggilan.** Pembantu boleh menaip keseluruhan baris arahan sekaligus, mengekalkan arahan terbuka antara panggilannya, mengira objek mengikut jenis dan lapisan tanpa menyenaraikannya, dan meletakkan blok dengan nilai atributnya dalam satu langkah.
- **Tanpa tetingkap.** Baris arahan `cadcraft` menulis plot SVG dan menukar, memplot, menyemak atau menerangkan banyak fail sekaligus. Pakej MCP belum diterbitkan. Lihat [Bekerja pada fail tanpa membuka CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Berubah

- **Pad sentuh menggelongsor.** Gerakkan dua jari pada pad sentuh dan pandangan 2D mengikutinya; cubit dan roda tetikus untuk zum. Lihat [Tetikus, pad sentuh dan sentuhan](topic:mouse-trackpad-touch).
- **Objek OLE dikekalkan.** Objek terbenam DXF ditunjukkan sebagai gambarnya atau sebagai bingkai berlabel dan disimpan semula oleh DXF 2000. Objek DWG dikekalkan dan ditulis semula apabila anda menyimpan sebagai DWG, tetapi belum ditunjukkan lagi. Sebelum ini, ia hilang semasa disimpan. Lihat [Objek daripada program lain (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Unit lukisan baharu** mengikut unit yang anda tandakan dengan bintang dalam {{ui:Settings}} › {{ui:General}} › {{ui:Units}}.

## Diperbaiki

- Susun atur yang dibuka kosong, atau kehilangan viewport dan menunjukkan keseluruhan model di tempatnya, kini dibuka dengan viewport sebenar mereka. Susun atur tanpa pautan ke kandungannya dikekalkan dan laporan buka menyatakannya.
- Fail DXF dalam halaman kod lama menunjukkan teks Cyrillic dan Korea yang rosak. Ia dibaca dengan betul sekarang.
- Teks perenggan daripada program lain kehilangan formatnya apabila dibuka dan disimpan semula sebagai biasa.

## Dalam setiap aplikasi

- **Unit.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} mempunyai satu senarai setiap satu untuk panjang, luas, isi padu, sudut dan cerun, dengan saiz tepat yang diberikan oleh takrif unit (kaki tinjauan AS ialah unitnya sendiri). Matikan unit yang tidak pernah anda guna dan ia keluar daripada senarai unit; tandakan satu dengan bintang dan kerja baharu bermula dengannya. Fail sentiasa mengekalkan unitnya sendiri. Dalam CadCraft, bintang menetapkan unit lukisan baharu apabila ia unit yang boleh dibawa oleh lukisan; kotak {{ui:Units}} CadCraft sendiri belum mengikut suis. Apabila lukisan sudah mempunyai unit, panjang yang anda taip boleh membawa tanda mana-mana unit. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).
- **Susun atur yang lebih padat dan panel yang kemas.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} memuatkan lebih banyak pada skrin (skrin sentuh dan telefon mengekalkan butang besar mereka). Setiap panel sisi mempunyai bar tajuk nipis: seret untuk melekap atau mengapungkan panel, lepaskannya pada bar panel lain untuk berkongsi satu bingkai sebagai tab, pin untuk menggelongsor ke tepi, atau sembunyikan dan bawa balik dari tepi. Lihat [Susun panel](common:arrange-panels#make-the-layout-denser).
- **Dialog boleh dialih.** Seret dialog mengikut bar tajuknya keluar dari lukisan; ia kembali ke tempat anda tinggalkannya. Klik dua kali bar tajuk untuk memusatkannya semula. Lihat [Alih dialog](common:arrange-panels#move-a-dialog).
- **Resipi untuk pembantu AI.** Sepuluh permintaan yang dikerjakan untuk pembantu anda sendiri (kemaskan lukisan, plot satu set, semak lukisan, tanya model soalan, jumlahkan pengukuran kuantiti, cuba varian bahagian…), setiap satu dengan alat yang dipanggilnya dan kebenaran yang diperlukannya, dan setiap satu dimainkan semula oleh ujian kami. Aplikasi tidak mengandungi AI. Lihat [Resipi untuk pembantu AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baharu dalam {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ia, **Português (Brasil)**, **Español (México)** dan **Bahasa Indonesia** kini mempunyai setiap perkataan aplikasi, sebagai draf yang belum disemak oleh penutur asli. Topik bantuan dalam bahasa Inggeris.
- **CadCraft Studio** memberitahu sebab semakan kemas kini gagal (belum ada fail untuk sistem anda, tiada rangkaian, tandatangan buruk) dan bukannya hanya "Selesai", dan berhenti membawa balik kad Perkara baharu yang anda tutup sehingga ada keluaran yang lebih baharu.

## Belum ada dalam versi ini

- **0.7 tidak ditandatangani kod.** Penandatanganan dan pakej Microsoft Store dialihkan ke 0.8 kerana pengesahan sijil belum selesai. Semak SHA-256 di sebelah setiap fail di getcadcraft.com/download. Pada Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:More info}}, kemudian {{ui:Run anyway}}. Pada Mac, kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Open}}. CadCraft Studio belum berada dalam kedai aplikasi, dan belum ada binaan iPad atau iPhone.
- Sudut dan cerun dalam {{ui:Units}} disimpan, tetapi tiada kotak yang membacanya lagi.
- Objek OLE DWG dikekalkan tetapi tidak ditunjukkan, dan gambar metafail dalam objek OLE tidak dilukis.
- Membaca jadual gaya plot (fail CTB) daripada program lain menunggu fail contoh.
- Teks Asia yang lebih lama ditulis sebagai kod `\M+` dibaca, tetapi belum diperiksa dengan fail daripada program lain.
- Underlay PDF: gambar di dalam halaman ditunjukkan di skrin tetapi tidak diplot, plot pembantu meninggalkan underlay, dan cara program lain membaca klip serta skala yang disimpan belum diperiksa dalam program tersebut.
- Sejarah: CadCraft belum menghantar simpanannya ke awan lagi, jadi versi awan ialah yang disimpan daripada peranti dan web lain. Sejarah hanya ada dalam CadCraft Studio.
- Sama ada Studio mengekalkan folder sokongan acad.lsp selepas dimulakan semula belum diperiksa; jika ia bertanya, pilih semula folder dalam APPLOAD.
- Panel Laser belum dicuba pada laser sebenar: uji setiap tetapan pada sisa. CadCraft Studio tiada Web Serial, jadi dalam Studio panel hanya menyimpan G-code.
- Pendaftaran imbasan telah diuji pada imbasan rekaan, belum pada set pengimbas sebenar.
- Panning dua jari telah dicuba dengan acara pad sentuh simulasi, belum pada pad sentuh sebenar.
- {{cmd:PEDIT}} tiada pilihan Edit vertex (gunakan grip atau Sifat). Ofset, pangkas, panjangkan, fillet, putus dan cantum belum menerima splin; ketinggian splin (Z) tidak dikekalkan.
- Teks perenggan baharu belum boleh diberi kod format, dan plot SVG menunjukkan teks berformat dalam satu warna.
- WBLOCK "Entire drawing" menulis model sahaja, bukan helaian. Gaya dimensi semasa tidak disimpan dalam fail: lukisan dibuka dengan Standard sebagai semasa.
- Gaya menu reben belum mempunyai senarai lapisan, warna atau jenis garisan: gunakan panel {{ui:Layers}} dan {{ui:Properties}}.
- Awan titik masih tidak disimpan dalam lukisan atau diplot, dan fail E57 dibuka sehingga 6 juta titik dan 512 MB.
- Fail DWG yang disimpan CadCraft belum diperiksa dalam AutoCAD sendiri.

Yang lain ada dalam [Belum dibina](topic:not-built-yet).
