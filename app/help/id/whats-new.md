---
title: Yang baru di 0.7
summary: Underlay PDF dan impor PDF, gambar hasil pindaian dengan penelusuran otomatis, spline sungguhan dengan SPLINE, SPLINEDIT, dan PEDIT, pengelola gaya dimensi, teks yang mempertahankan format, WBLOCK dan skala buatan Anda sendiri, solid 3D dari program lain, registrasi scan, panel Laser, ekspor USD, Riwayat dan pencetakan di CadCraft Studio, gambar pertama yang dipandu, bilah alat di sisi mana pun atau dalam baris yang lebih sedikit, dan lebih banyak lagi untuk asisten AI.
keywords: yang baru, rilis, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, pdf, pdfattach, pdfimport, underlay, scan, scanattach, scantrace, telusuri, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, format, wblock, scalelistedit, daftar skala, acis, solid 3d, registerscans, registrasi scan, icp, e57, las, laser, grbl, g-code, usd, usdout, riwayat, versi, bandingkan, cetak, printer, png, svg, gaya plot, jenis garis, tur, lembar contekan, peta perintah, posisi bilah alat, baris bilah alat, toolbardock, regen, regenall, trackpad, usap, code page, sirilik, korea, tiongkok, jepang, listrik, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder dukungan, asisten, mcp, satuan, portugis
from: b9258ca6
---

Berikut perubahan di CadCraft 0.7 dibandingkan 0.6. Sebagian besar diminta di Discord. Daftar dikelompokkan menurut area, dengan yang terpenting lebih dulu.

## Baru

### PDF dan gambar hasil pindaian

- **Menaruh halaman PDF di bawah gambar.** {{cmd:PDFATTACH}} (`PDFATT`) menempatkan halaman pada ukuran sebenarnya atau skala yang Anda ketik. Snap ke garisnya, pudarkan, jadikan monokrom ({{cmd:PDFADJUST}}), klip ({{cmd:PDFCLIP}}), dan nyalakan atau matikan layer milik PDF itu sendiri ({{cmd:PDFLAYERS}}). Halaman di-plot sebagai garis, isian, dan teks, dan DWG atau DXF 2000 menyimpannya sebagai tautan ke file. Membuka PDF dengan {{ui:Buka}} menanyakan apakah akan dilampirkan atau diimpor. Lihat [Underlay PDF dan impor PDF](topic:pdf-underlay).
- **Mengubah halaman PDF menjadi objek gambar.** {{cmd:PDFIMPORT}} (`PDFIM`) membuat garis, polyline, lingkaran, busur, hatch solid, dan teks pada layer yang dinamai sesuai PDF, pada ukuran sebenarnya, skala yang diketik, atau diskalakan dari dua titik dan jarak nyata, dalam satu langkah urungkan. Lihat [Mengimpor halaman](topic:pdf-underlay#import-a-page).
- **Gambar hasil pindaian.** {{cmd:SCANATTACH}} memasukkan PNG, JPEG, atau TIFF (satu halaman atau semuanya) atau halaman PDF yang berupa gambar raster. Lalu skalakan dari dua titik ({{cmd:SCANSCALE}}), luruskan ({{cmd:SCANALIGN}}), siku-kan dari garis panjangnya sendiri ({{cmd:SCANDESKEW}}), jadikan hitam putih dan hapus bintik ({{cmd:SCANCLEAN}}), potong, dan hapus sebagiannya. Setiap langkah adalah satu langkah urungkan dan file asli dipertahankan. Lihat [Gambar hasil pindaian dan penelusuran](topic:scanned-drawings).
- **Menelusuri hasil pindaian menjadi garis dan busur.** {{cmd:SCANTRACE}} menggambar garis pindaian sebagai garis dan busur pada layer baru, SCAN-TRACE, dengan toleransi yang Anda atur, dan membiarkan teks dan arsiran apa adanya. Laporan menyebutkan apa yang dibuatnya dan apa yang ditinggalkannya, dan itu bukan klaim bahwa hasilnya benar: periksa terhadap lembarnya. {{cmd:RASTERSNAP}} membuat snap objek dapat menemukan ujung, sudut, dan perpotongan pindaian. Tidak ada yang dikirim ke mana pun dan tidak ada model terlatih yang dipakai. Lihat [Penelusuran](topic:scanned-drawings#the-trace).

### Menggambar dan mengedit

- **Spline sungguhan.** {{cmd:SPLINE}} (`SPL`) menggambar kurva melalui titik atau dari titik kontrol (derajat 1 sampai 5), dengan tangen ujung; {{cmd:SPLINEDIT}} (`SPE`) memindahkan, menambah, dan menghapus titik fit atau titik kontrol, mengatur bobot, membuka, menutup, membalik, atau mengubah spline menjadi polyline. Spline dari file DWG dan DXF terbuka sebagai spline, dan DWG serta DXF 2000 menyimpannya sebagai spline. Lihat [Spline dan polyline](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) menutup dan membuka polyline, menggabungkan garis dan busur ke dalamnya, mengatur satu lebar, memasang kurva fit melalui verteks atau spline di sepanjangnya dan membatalkannya dengan Decurve, membalik, dan mengedit beberapa sekaligus. Lihat [Mengedit polyline](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) menulis blok, beberapa objek, atau seluruh gambar ke DWG atau DXF baru yang hanya memuat layer, gaya, dan blok yang dipakainya. Lihat [Menulis blok atau objek ke file tersendiri](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN dan REGENALL.** {{cmd:REGEN}} (`RE`) menggambar ulang tab yang sedang Anda buka dari gambar, {{cmd:REGENALL}} (`REA`) setiap tab, panel, dan gambar yang terbuka. Lihat [REGEN dan REGENALL](topic:commands#regen-and-regenall).

### Teks dan dimensi

- **Teks mempertahankan formatnya.** Teks paragraf dari program lain mempertahankan warna per kata, tebal dan miring, garis bawah, pecahan bertumpuk, dan tinggi: semuanya digambar di layar dan di PDF, dipertahankan saat Anda mengedit kata-katanya, dan disimpan kembali. Lihat [Format di dalam teks paragraf dari program lain](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Pengelola gaya dimensi.** {{cmd:DIMSTYLE}} (`D`) membuat, mengubah, membandingkan, dan menerapkan gaya dimensi bernama; mengubah gaya mengubah setiap dimensi yang memakainya. {{cmd:DIMEDIT}} (`DED`) mengembalikan teks, mengetik teks baru, memutarnya, atau memiringkan garis bantu; {{cmd:DIMTEDIT}} memindahkan teks ke kiri, kanan, atau tengah. Lihat [Gaya dimensi bernama](topic:dimension-settings#named-dimension-styles).
- **Skala buatan Anda sendiri.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) menambahkan skala seperti 1:75 ke daftar skala viewport dan plot; skala disimpan dalam gambar (DWG dan DXF 2000), dan gambar dari program lain membawa daftarnya sendiri. Lihat [Skala](topic:units-papers-scales#scales).
- **Teks dalam alfabet lain.** File DXF yang disimpan dalam code page Sirilik, Korea, Tiongkok, Jepang, atau Vietnam kini terbuka dengan teksnya, dan teks Tiongkok, Jepang, dan Korea tercetak di PDF (plot mengambil font yang lebih besar pada kali pertama diperlukan). Lihat [Font](topic:text#font).

### Mem-plot dan mencetak

- **Lebih banyak dalam tabel gaya plot.** Untuk setiap warna, tabel kini juga dapat mengatur jenis garis, ujung garis dan sambungan garis, serta gaya isian yang mencetak isian solid sebagai garis hatch; tabel memiliki daftar tebal garisnya sendiri dan skala jenis garis. Lihat [Tabel gaya plot](topic:plot-pdf#plot-style-tables).
- **Cetak, serta file PNG dan SVG.** Dialog Plot memiliki {{ui:Cetak…}}, {{ui:Unduh PNG}} (300 dpi), dan {{ui:Unduh SVG}}. Di CadCraft Studio, dialog mencantumkan printer komputer, kertasnya, dan jumlah salinan. Lihat [Cetak](topic:plot-pdf#print) dan [File gambar dan SVG](topic:plot-pdf#picture-and-svg-files).

### 3D dan point cloud

- **Solid 3D dari program lain.** Solid, region, dan bodi di ruang model gambar tampil di tab 3D, hanya-baca, dan menyimpan sebagai DWG menulisnya kembali tanpa perubahan. Muka pada permukaan yang belum digambar CadCraft dicantumkan, bukan ditebak. Lihat [Solid dari program lain](topic:3d-solids#solids-from-other-programs).
- **Registrasi beberapa scan.** {{cmd:REGISTERSCANS}} (`REGSCAN`) menempatkan scan yang diambil dari posisi berbeda dalam satu kerangka, melalui pasangan titik atau koordinat target yang diketik, menyempurnakannya dengan ICP, menyimpan registrasi sebagai file proyek kecil, dan menulis cloud hasil registrasi sebagai satu file LAS atau E57. Lihat [Meregistrasi beberapa scan menjadi satu](topic:register-scans).
- **Ekspor USD.** {{cmd:USDOUT}}, atau {{cmd:EXPORT3D}} › {{ui:USD}}, menulis solid tab 3D sebagai `.usda`, `.usdc`, atau `.usdz`. Lihat [Mengekspor model 3D sebagai USD](topic:usd).
- **Perhitungan di tab 3D.** Di tempat alat tab 3D meminta jarak, Anda dapat mengetik perhitungan, seperti pada baris perintah. Lihat [Aritmetika dalam nilai yang diketik](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Membuat sesuatu

- **Mengirim gambar ke laser.** {{cmd:LASER}}, atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Laser…}}, membuka panel di atas gambar: setiap layer memotong, menggores, mengukir garis, mengisi bentuk, mengukir gambar, atau tidak dikirim, dengan daya, kecepatan, dan jumlah lintasannya. Pratinjau mengikuti edit Anda, {{ui:Simpan G-code…}} menulis G-code mode laser GRBL, dan di Chrome atau Edge panel dapat membingkai pekerjaan dan mengirimnya melalui USB. Pengaturan disimpan dalam gambar (DWG dan DXF). Lihat [Mengirim gambar ke laser](topic:laser-cutting).
- **Simbol instalasi gedung di add-on Listrik.** Stopkontak data, telepon, dan TV, sakelar kunci dan sakelar waktu, termostat, tanda keluar, detektor, titik panggil dan pengeras suara alarm, kipas, pemanas air, kompor, titik pengisian EV, meter energi dan sub-panel, serta simbol RCD dan RCBO. Sebuah sirkuit dapat membawa RCD, jadwal panel memiliki kolom RCD, dan pemeriksaan menyebutkan sirkuit stopkontak tanpa RCD 30 mA atau kurang. Ini adalah pengingat perencanaan, bukan pemeriksaan peraturan.
- **Add-on P&ID.** P&ID menggambar diagram proses: simbol dengan titik sambung, garis proses dan sinyal, tag, nomor garis, daftar garis, peralatan, instrumen, dan katup (CSV atau workbook), dan pemeriksaan. Add-on ini datang bersama CadCraft dan mati sampai Anda menyalakannya di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Add-on}}. Ini adalah alat bantu penggambaran, bukan persetujuan rekayasa, dan untuk sementara teksnya hanya dalam bahasa Inggris.

### Memulai dan layar

- **Gambar pertama yang dipandu.** {{cmd:TOUR}} (atau {{ui:Ikuti tur}} pada kartu awal) memandu Anda melalui enam langkah dalam gambar nyata: garis, lingkaran, pemindahan, pemangkasan, penghapusan, dan dimensi. Tur dimulai sendiri pada kali pertama CadCraft dibuka tanpa isi apa pun. Lihat [Lebih suka dipandu?](topic:getting-started#prefer-to-be-guided)
- **Lembar contekan dan peta perintah.** [Lembar contekan](topic:cheat-sheet) memuat 40 perintah sehari-hari dalam satu halaman, juga sebagai PDF untuk dicetak, dan [peta perintah](topic:command-map) mencantumkan perintah beserta nama pendeknya, A sampai Z.
- **Bilah alat di sisi mana pun.** {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Posisi bilah alat}}: atas (seperti sebelumnya), bawah, kiri, atau kanan, atau ketik {{cmd:TOOLBARDOCK}}. Lihat [Posisi bilah alat](topic:settings#toolbar-position).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Baris bilah alat}}: bungkus agar muat, 2 baris, atau 1 baris, untuk bilah alat CadCraft dan gaya Drafting klasik serta Pita. {{key:Shift+Ctrl+F1}} berganti di antaranya, {{key:Ctrl+F1}} berganti di antara apa yang ditampilkan tombol, dan {{cmd:TOOLBARROWS}} serta {{cmd:TOOLBAR}} mengaturnya. Petunjuk awal memiliki tombol tutup. Terima kasih kepada GJoe2, yang mengirimkannya sebagai pull request. Lihat [Baris bilah alat](topic:settings#toolbar-rows).

### Di CadCraft Studio

- **Riwayat.** {{cmd:HISTORY}} (`HIST`), atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Riwayat…}}: salinan yang disimpan Studio saat Anda membuka dan menyimpan gambar, serta versi cloud gambar bila Anda membukanya dari cloud. Buka atau pulihkan satu, atau bandingkan dua, dengan apa yang ditambahkan, dihapus, dan diubah ditampilkan dengan warna. Lihat [Riwayat](topic:history).
- **acad.lsp dan acaddoc.lsp.** Pilih folder dukungan di {{cmd:APPLOAD}}: kedua file itu dimuat saat CadCraft dimulai (acaddoc.lsp lagi untuk setiap tab gambar baru), dan `S::STARTUP` berjalan setelahnya. Lihat [Memuat aplikasi](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialog Plot di jendelanya sendiri.** Tombol di bilah judulnya memindahkannya ke jendela yang dapat Anda taruh di monitor lain. Lihat [Memindahkan dialog](common:arrange-panels#move-a-dialog).

### Untuk asisten AI

- **File menurut nama, di folder yang Anda pilih.** Di CadCraft Studio, asisten dapat membuka, menyimpan, dan mem-plot file menurut nama, dan menyerahkan kepada perintah file yang diminta (INSERT dari file, ekspor COUNT, SAVEAS, PLOT), tetapi hanya di dalam folder yang Anda tambahkan di {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Asisten}} › {{ui:Folder yang boleh dipakai}}. Lihat [Mengizinkannya memakai file di folder yang Anda pilih](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Lebih sedikit panggilan.** Asisten dapat mengetik seluruh baris perintah sekaligus, membiarkan perintah tetap terbuka di antara panggilannya, menghitung objek menurut tipe dan layer tanpa mendaftarkannya, dan menempatkan blok beserta nilai atributnya dalam satu langkah.
- **Tanpa jendela.** Baris perintah `cadcraft` menulis plot SVG serta mengonversi, mem-plot, memeriksa, atau mendeskripsikan banyak file sekaligus. Paket MCP belum diterbitkan. Lihat [Bekerja pada file tanpa membuka CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Diubah

- **Trackpad menggeser.** Gerakkan dua jari pada trackpad dan tampilan 2D mengikutinya; cubit dan roda mouse melakukan zoom. Lihat [Mouse, trackpad, dan sentuh](topic:mouse-trackpad-touch).
- **Objek OLE dipertahankan.** Objek tertanam dalam DXF tampil sebagai gambarnya atau sebagai bingkai berlabel dan disimpan kembali oleh DXF 2000. Objek dalam DWG dipertahankan dan ditulis kembali saat Anda menyimpan sebagai DWG, tetapi belum ditampilkan. Sebelumnya, objek itu hilang saat disimpan. Lihat [Objek dari program lain (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Satuan gambar baru** mengikuti satuan yang Anda beri bintang di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}}.

## Diperbaiki

- Layout yang terbuka kosong, atau kehilangan viewport dan menampilkan seluruh model sebagai gantinya, kini terbuka dengan viewport aslinya. Layout tanpa tautan ke isinya dipertahankan dan laporan pembukaan menyatakannya.
- File DXF dalam code page lama menampilkan teks Sirilik dan Korea yang kacau. Kini terbaca dengan benar.
- Teks paragraf dari program lain kehilangan formatnya saat dibuka dan disimpan kembali sebagai teks polos.

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar masing-masing untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran persis sesuai definisi satuannya (kaki survei AS adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda pakai dan satuan itu keluar dari daftar; beri bintang pada satu satuan dan pekerjaan baru dimulai dengannya. File selalu mempertahankan satuannya sendiri. Di CadCraft, bintang mengatur satuan gambar baru bila satuan itu dapat dibawa oleh gambar; kotak {{ui:Satuan}} milik CadCraft sendiri belum mengikuti sakelar tersebut. Setelah gambar memiliki satuan, panjang yang Anda ketik dapat membawa tanda satuan apa pun. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Tata letak lebih padat dan panel yang dapat dirapikan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Padat}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap memakai tombol besar). Setiap panel samping memiliki bilah judul ramping: seret untuk menambatkan atau mengambangkan panel, letakkan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar menggeser ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Menata panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog pada bilah judulnya agar menyingkir dari gambar; dialog kembali ke tempat Anda meninggalkannya. Klik ganda bilah judul untuk memusatkannya lagi. Lihat [Memindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan contoh untuk asisten Anda sendiri (merapikan gambar, mem-plot satu set, memeriksa gambar, mengajukan pertanyaan ke model, menjumlahkan takeoff, mencoba varian part…), masing-masing dengan alat yang dipanggil dan izin yang diperlukan, dan masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak memuat AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa itu, **Português (Brasil)**, **Español (México)**, dan **Bahasa Indonesia** kini memiliki setiap kata dalam aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan berbahasa Inggris.
- **CadCraft Studio** menyebutkan mengapa pemeriksaan pembaruan gagal (belum ada file untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikat belum selesai. Periksa SHA-256 di samping setiap file pada getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan pemasang, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, pada kali pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build untuk iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} tersimpan, tetapi belum ada kolom isian yang membacanya.
- Objek OLE dalam DWG dipertahankan tetapi tidak ditampilkan, dan gambar metafile di dalam objek OLE tidak digambar.
- Membaca tabel gaya plot (file CTB) dari program lain menunggu file contoh.
- Teks Asia lama yang ditulis sebagai kode `\M+` dibaca, tetapi belum diperiksa terhadap file dari program lain.
- Underlay PDF: gambar di dalam halaman tampil di layar tetapi tidak di-plot, plot oleh asisten tidak menyertakan underlay, dan cara program lain membaca klip dan skala yang disimpan belum diperiksa di program tersebut.
- Riwayat: CadCraft belum mengirim penyimpanannya ke cloud, sehingga versi cloud adalah yang disimpan dari perangkat lain dan web. Riwayat hanya ada di CadCraft Studio.
- Apakah Studio mempertahankan folder dukungan acad.lsp setelah restart belum diperiksa; jika bertanya, pilih lagi foldernya di APPLOAD.
- Panel Laser belum dicoba pada laser sungguhan: uji setiap pengaturan pada bahan sisa. CadCraft Studio tidak memiliki Web Serial, sehingga di Studio panel hanya menyimpan G-code.
- Registrasi scan telah diuji pada scan buatan, belum pada set dari pemindai sungguhan.
- Penggeseran dua jari telah dicoba dengan peristiwa trackpad simulasi, belum pada trackpad sungguhan.
- {{cmd:PEDIT}} tidak memiliki opsi Edit vertex (gunakan grip atau Properti). Offset, pangkas, perpanjang, fillet, putuskan, dan gabungkan belum menerima spline; tinggi spline (Z) tidak dipertahankan.
- Teks paragraf baru belum dapat diberi kode format, dan plot SVG menampilkan teks berformat dalam satu warna.
- Seluruh gambar pada WBLOCK hanya menulis model, bukan lembar. Gaya dimensi saat ini tidak disimpan dalam file: gambar terbuka dengan Standard sebagai yang aktif.
- Gaya menu pita belum memiliki daftar layer, warna, atau jenis garis: gunakan panel {{ui:Layer}} dan {{ui:Properti}}.
- Point cloud masih tidak disimpan dalam gambar atau di-plot, dan file E57 terbuka hingga 6 juta titik dan 512 MB.
- File DWG yang disimpan CadCraft belum diperiksa di AutoCAD itu sendiri.

Selebihnya ada di [Belum dibuat](topic:not-built-yet).
