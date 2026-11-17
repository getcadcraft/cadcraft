---
title: Yang baru di 0.7 (sebelumnya)
summary: Underlay PDF dan impor PDF, gambar hasil pindai dengan jejak otomatis, spline sungguhan dengan SPLINE, SPLINEDIT dan PEDIT, pengelola gaya dimensi, teks yang mempertahankan formatnya, WBLOCK dan skala Anda sendiri, benda padat 3D dari program lain, registrasi hasil pindai, panel Laser, ekspor USD, Riwayat dan pencetakan di CadCraft Studio, gambar pertama yang dipandu, bilah alat di sisi mana pun atau dalam baris yang lebih sedikit, dan lebih banyak fitur untuk asisten AI.
keywords: yang baru 0.7, rilis sebelumnya, catatan rilis, changelog, perubahan, 0.7, versi, fitur baru, pdf, pdfattach, pdfimport, underlay, pindai, scanattach, scantrace, jejak, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, format, wblock, scalelistedit, daftar skala, acis, benda padat 3d, registerscans, registrasi pindai, icp, e57, las, laser, grbl, g-code, usd, usdout, riwayat, versi, bandingkan, cetak, printer, png, svg, gaya plot, jenis garis, tur, lembar contekan, peta perintah, posisi bilah alat, baris bilah alat, toolbardock, regen, regenall, trackpad, geser, halaman kode, sirilik, korea, tionghoa, jepang, kelistrikan, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder dukungan, asisten, mcp, satuan, portugis
from: d07ca034
---

Inilah yang berubah di CadCraft 0.7, dibandingkan dengan 0.6. Banyak dari fiturnya diminta di Discord. Daftar ini dikelompokkan per area, dengan yang paling penting di awal.

## Baru

### PDF dan gambar hasil pindai

- **Taruh halaman PDF di bawah gambar.** {{cmd:PDFATTACH}} (`PDFATT`) menempatkan halaman pada ukuran sebenarnya atau skala yang Anda ketik. Snap ke garisnya, redupkan, buat monokrom ({{cmd:PDFADJUST}}), potong ({{cmd:PDFCLIP}}), dan ganti layer milik PDF itu ({{cmd:PDFLAYERS}}). Halaman dicetak sebagai garis, isian, dan teks, dan DWG atau DXF 2000 menyimpannya sebagai tautan ke berkas. Membuka PDF dengan {{ui:Buka}} menanyakan apakah akan dilampirkan atau diimpor. Lihat [Underlay PDF dan impor PDF](topic:pdf-underlay).
- **Ubah halaman PDF menjadi objek gambar.** {{cmd:PDFIMPORT}} (`PDFIM`) membuat garis, polyline, lingkaran, busur, hatch padat, dan teks pada layer yang dinamai sesuai PDF, pada ukuran sebenarnya, skala yang diketik, atau diskalakan dari dua titik dan jarak nyata, dalam satu langkah urungkan. Lihat [Impor halaman](topic:pdf-underlay#import-a-page).
- **Gambar hasil pindai.** {{cmd:SCANATTACH}} memasukkan PNG, JPEG, atau TIFF (satu halaman atau semuanya), atau halaman PDF yang berupa gambar. Lalu skalakan dari dua titik ({{cmd:SCANSCALE}}), sejajarkan ({{cmd:SCANALIGN}}), siku-sikukan dari garis panjangnya sendiri ({{cmd:SCANDESKEW}}), jadikan hitam-putih dan hapus bintik-bintik ({{cmd:SCANCLEAN}}), potong, dan hapus sebagian darinya. Setiap langkah adalah satu langkah urungkan dan berkas aslinya tetap disimpan. Lihat [Gambar hasil pindai dan jejak](topic:scanned-drawings).
- **Jejak hasil pindai menjadi garis dan busur.** {{cmd:SCANTRACE}} menggambar garis hasil pindai sebagai garis dan busur pada layer baru, SCAN-TRACE, dengan toleransi yang Anda atur, dan membiarkan teks serta arsiran apa adanya. Laporannya menyatakan apa yang dibuat dan apa yang ditinggalkan, dan itu bukan jaminan bahwa hasilnya benar: periksa terhadap lembarnya. {{cmd:RASTERSNAP}} memungkinkan snap objek menemukan ujung, sudut, dan perpotongan hasil pindai. Tidak ada yang dikirim ke mana pun, dan tidak ada model terlatih yang digunakan. Lihat [Jejak](topic:scanned-drawings#the-trace).

### Menggambar dan menyunting

- **Spline sungguhan.** {{cmd:SPLINE}} (`SPL`) menggambar kurva melalui titik atau dari titik kendali (derajat 1 sampai 5), dengan singgung di ujungnya; {{cmd:SPLINEDIT}} (`SPE`) memindahkan, menambah, dan menghapus titik fit atau kendali, mengatur bobot, membuka, menutup, membalik, atau mengubah spline menjadi polyline. Spline dari berkas DWG dan DXF dibuka sebagai spline, dan DWG serta DXF 2000 menyimpannya sebagai spline. Lihat [Spline dan polyline](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) menutup dan membuka polyline, menggabungkan garis dan busur ke dalamnya, mengatur satu lebar, menyesuaikan kurva melalui simpul atau spline di sepanjangnya dan mengembalikannya dengan Decurve, membalik, serta menyunting beberapa sekaligus. Lihat [Sunting polyline](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) menulis blok, beberapa objek, atau seluruh gambar ke DWG atau DXF baru yang hanya berisi layer, gaya, dan blok yang mereka gunakan. Lihat [Tulis blok atau objek ke berkas tersendiri](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN dan REGENALL.** {{cmd:REGEN}} (`RE`) menggambar ulang tab tempat Anda berada dari gambar, {{cmd:REGENALL}} (`REA`) setiap tab, panel, dan gambar yang terbuka. Lihat [REGEN dan REGENALL](topic:commands#regen-and-regenall).

### Teks dan dimensi

- **Teks mempertahankan formatnya.** Teks paragraf dari program lain tetap mempertahankan warna per kata, tebal dan miring, garis bawah, pecahan bertumpuk, dan tingginya: ia digambar di layar dan di PDF, tetap ada saat Anda menyunting kata-katanya, dan disimpan kembali. Lihat [Format di dalam teks paragraf dari program lain](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Pengelola gaya dimensi.** {{cmd:DIMSTYLE}} (`D`) membuat, mengubah, membandingkan, dan menerapkan gaya dimensi bernama; mengubah sebuah gaya mengubah setiap dimensi yang memakainya. {{cmd:DIMEDIT}} (`DED`) mengembalikan teks, mengetik teks baru, memutarnya, atau memiringkan garis bantu; {{cmd:DIMTEDIT}} memindahkan teks ke kiri, kanan, atau tengah. Lihat [Gaya dimensi bernama](topic:dimension-settings#named-dimension-styles).
- **Skala Anda sendiri.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) menambahkan skala seperti 1:75 ke daftar skala viewport dan cetak; skala itu disimpan dalam gambar (DWG dan DXF 2000), dan gambar dari program lain membawa daftarnya sendiri. Lihat [Skala](topic:units-papers-scales#scales).
- **Teks dalam aksara lain.** Berkas DXF yang disimpan dengan halaman kode Sirilik, Korea, Tionghoa, Jepang, atau Vietnam kini dibuka beserta teksnya, dan teks Tionghoa, Jepang, serta Korea tercetak di PDF (cetakan mengambil font yang lebih besar saat pertama kali membutuhkannya). Lihat [Font](topic:text#font).

### Plot dan cetak

- **Lebih banyak di tabel gaya plot.** Untuk setiap warna, tabel kini juga dapat mengatur jenis garis, ujung dan sambungan garis, serta gaya isian yang mencetak isian padat sebagai garis hatch. Tabel memiliki daftar tebal garisnya sendiri dan skala jenis garis. Lihat [Tabel gaya plot](topic:plot-pdf#plot-style-tables).
- **Cetak, serta berkas PNG dan SVG.** Dialog Plot memiliki {{ui:Cetak…}}, {{ui:Unduh PNG}} (300 dpi), dan {{ui:Unduh SVG}}. Di CadCraft Studio, dialog ini menampilkan printer komputer, kertas, dan jumlah salinannya. Lihat [Cetak](topic:plot-pdf#print) dan [Gambar dan berkas SVG](topic:plot-pdf#picture-and-svg-files).

### 3D dan awan titik

- **Benda padat 3D dari program lain.** Benda padat, region, dan badan di ruang model gambar tampil di tab 3D secara hanya-baca, dan menyimpan sebagai DWG menuliskannya kembali tanpa perubahan. Muka pada permukaan yang belum digambar CadCraft didaftar, tidak ditebak. Lihat [Benda padat dari program lain](topic:3d-solids#solids-from-other-programs).
- **Registrasi beberapa hasil pindai.** {{cmd:REGISTERSCANS}} (`REGSCAN`) menempatkan hasil pindai yang diambil dari posisi berbeda dalam satu bingkai, dengan pasangan titik atau koordinat target yang diketik. Ia menyempurnakannya dengan ICP, menyimpan registrasi sebagai berkas proyek kecil, dan menuliskan awan titik yang sudah diregistrasi sebagai satu berkas LAS atau E57. Lihat [Registrasi beberapa hasil pindai menjadi satu](topic:register-scans).
- **Ekspor USD.** {{cmd:USDOUT}}, atau {{cmd:EXPORT3D}} › {{ui:USD}}, menuliskan benda padat tab 3D sebagai `.usda`, `.usdc`, atau `.usdz`. Lihat [Ekspor model 3D sebagai USD](topic:usd).
- **Kalkulasi di tab 3D.** Di mana alat tab 3D meminta jarak, Anda dapat mengetik kalkulasi, seperti di baris perintah. Lihat [Aritmetika dalam nilai yang diketik](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Membuat sesuatu

- **Kirim gambar ke laser.** {{cmd:LASER}}, atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Laser…}}, membuka panel di atas gambar: setiap layer dipotong, digores, diukir garisnya, diisi bentuknya, diukir gambarnya, atau tidak dikirim, dengan daya, kecepatan, dan jumlah lintasannya. Pratinjau mengikuti suntingan Anda, {{ui:Simpan G-code…}} menulis G-code mode laser GRBL, dan di Chrome atau Edge panel dapat membingkai pekerjaan serta mengirimnya melalui USB. Pengaturannya disimpan dalam gambar (DWG dan DXF). Lihat [Kirim gambar ke laser](topic:laser-cutting).
- **Simbol instalasi bangunan di add-on Kelistrikan.** Outlet data, telepon, dan TV, saklar kunci dan waktu, termostat, tanda keluar, detektor, titik panggil dan sirene, kipas, pemanas air, kompor, titik pengisian EV, meter energi dan sub-panel, serta simbol RCD dan RCBO. Sebuah sirkuit dapat membawa RCD, jadwal panel memiliki kolom RCD, dan pemeriksaan menandai sirkuit stopkontak yang tidak memiliki RCD 30 mA atau kurang. Ini adalah pengingat perencanaan, bukan pemeriksaan kode.
- **Add-on P&ID.** P&ID menggambar diagram proses: simbol dengan titik sambungan, garis proses dan sinyal, tag, nomor garis, daftar peralatan, instrumen, dan katup (CSV atau buku kerja), serta pemeriksaan. Ia disertakan dengan CadCraft dan dimatikan sampai Anda menyalakannya di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Add-on}}. Ini adalah alat bantu gambar, bukan persetujuan rekayasa, dan teksnya hanya dalam bahasa Inggris untuk saat ini.

### Memulai dan layar

- **Gambar pertama yang dipandu.** {{cmd:TOUR}} (atau {{ui:Ikuti tur}} di kartu awal) memandu Anda melalui enam langkah di gambar sungguhan: garis, lingkaran, pemindahan, pemangkasan, penghapusan, dan dimensi. Ia mulai sendiri pertama kali CadCraft dibuka dalam keadaan kosong. Lihat [Lebih suka dipandu?](topic:getting-started#prefer-to-be-guided)
- **Lembar contekan dan peta perintah.** [Lembar contekan](topic:cheat-sheet) memuat 40 perintah sehari-hari dalam satu halaman, juga sebagai PDF untuk dicetak, dan [peta perintah](topic:command-map) mendaftar perintah dengan nama pendeknya, dari A sampai Z.
- **Bilah alat di sisi mana pun.** {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Posisi bilah alat}}: atas (seperti sebelumnya), bawah, kiri, atau kanan, atau ketik {{cmd:TOOLBARDOCK}}. Lihat [Posisi bilah alat](topic:settings#toolbar-position).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Baris bilah alat}}: bungkus agar muat, 2 baris, atau 1 baris, untuk bilah alat CadCraft serta gaya Drafting classic dan Ribbon. {{key:Shift+Ctrl+F1}} berganti di antaranya, {{key:Ctrl+F1}} berganti di antara apa yang ditampilkan tombol, dan {{cmd:TOOLBARROWS}} serta {{cmd:TOOLBAR}} mengaturnya. Petunjuk awal memiliki tombol tutup. Terima kasih kepada GJoe2, yang mengirimkan ini sebagai pull request. Lihat [Baris bilah alat](topic:settings#toolbar-rows).

### Di CadCraft Studio

- **Riwayat.** {{cmd:HISTORY}} (`HIST`), atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Riwayat…}}: salinan yang disimpan Studio saat Anda membuka dan menyimpan gambar, serta versi awan gambar bila Anda membukanya dari awan. Buka atau pulihkan salah satunya, atau bandingkan dua, dengan apa yang ditambahkan, dihapus, dan diubah ditampilkan dalam warna. Lihat [Riwayat](topic:history).
- **acad.lsp dan acaddoc.lsp.** Pilih folder dukungan di {{cmd:APPLOAD}}: kedua berkas itu dimuat saat CadCraft dimulai (acaddoc.lsp lagi untuk setiap tab gambar baru), dan `S::STARTUP` berjalan setelahnya. Lihat [Muat aplikasi](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialog Plot di jendelanya sendiri.** Sebuah tombol di bilah judulnya memindahkannya ke jendela yang dapat Anda letakkan di monitor lain. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).

### Untuk asisten AI

- **Berkas menurut nama, di folder yang Anda pilih.** Di CadCraft Studio, asisten dapat membuka, menyimpan, dan mencetak berkas dengan menyebut namanya, dan memberi perintah berkas yang diminta (INSERT dari berkas, ekspor COUNT, SAVEAS, PLOT), tetapi hanya di dalam folder yang Anda tambahkan di bawah {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Asisten}} › {{ui:Folder yang boleh dipakai}}. Lihat [Biarkan asisten memakai berkas di folder yang Anda pilih](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Lebih sedikit panggilan.** Asisten dapat mengetik seluruh baris perintah sekaligus, membiarkan perintah tetap terbuka di antara panggilannya, menghitung objek menurut jenis dan layer tanpa mendaftarnya, dan menempatkan blok beserta nilai atributnya dalam satu langkah.
- **Tanpa jendela.** Baris perintah `cadcraft` menulis plot SVG serta mengonversi, mencetak, memeriksa, atau mendeskripsikan banyak berkas sekaligus. Paket MCP belum dipublikasikan. Lihat [Bekerja dengan berkas tanpa membuka CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Berubah

- **Trackpad menggeser.** Gerakkan dua jari di trackpad dan tampilan 2D mengikutinya; cubit dan roda mouse untuk zoom. Lihat [Mouse, trackpad, dan sentuh](topic:mouse-trackpad-touch).
- **Objek OLE dipertahankan.** Objek tertanam DXF tampil sebagai gambarnya atau sebagai bingkai berlabel, dan disimpan kembali oleh DXF 2000. Objek DWG dipertahankan dan dituliskan kembali saat Anda menyimpan sebagai DWG, tetapi belum ditampilkan. Sebelumnya, objek itu hilang saat disimpan. Lihat [Objek dari program lain (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Satuan gambar baru** mengikuti satuan yang Anda beri bintang di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}}.

## Diperbaiki

- Lembar yang terbuka kosong, atau kehilangan viewport dan menampilkan seluruh model di tempatnya, kini terbuka dengan viewport aslinya. Lembar tanpa tautan ke isinya dipertahankan, dan laporan saat dibuka menyatakannya.
- Berkas DXF dalam halaman kode lama menampilkan teks Sirilik dan Korea yang rusak. Kini terbaca dengan benar.
- Teks paragraf dari program lain kehilangan formatnya saat dibuka, dan disimpan kembali sebagai teks polos.

## Di setiap aplikasi

- **Satuan.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Satuan}} memiliki satu daftar untuk panjang, luas, volume, sudut, dan kemiringan, dengan ukuran tepat yang diberikan definisi satuan (kaki survei AS adalah satuan tersendiri). Matikan satuan yang tidak pernah Anda gunakan dan satuan itu keluar dari daftar; beri bintang satu dan pekerjaan baru dimulai dengannya. Berkas selalu mempertahankan satuannya sendiri. Di CadCraft, bintang mengatur satuan gambar baru bila itu satuan yang dapat dibawa gambar; kotak {{ui:Satuan}} milik CadCraft belum mengikuti sakelar ini. Setelah gambar memiliki satuan, panjang yang Anda ketik dapat memakai tanda satuan apa pun. Lihat [Satuan, nilai yang diketik, dan daftar satuan](common:unit-lists).
- **Kepadatan tata letak yang lebih rapat dan panel yang tersimpan rapi.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Kepadatan tata letak}} › {{ui:Ringkas}} memuat lebih banyak di layar (layar sentuh dan ponsel tetap mempertahankan tombol besarnya). Setiap panel samping memiliki bilah judul yang ramping: seret untuk menambatkan atau mengambangkan panel, jatuhkan di bilah panel lain untuk berbagi satu bingkai sebagai tab, sematkan agar meluncur ke tepi, atau sembunyikan dan panggil kembali dari tepi. Lihat [Atur panel](common:arrange-panels#make-the-layout-denser).
- **Dialog dapat dipindahkan.** Seret dialog dengan bilah judulnya agar tidak menghalangi gambar; ia kembali ke tempat terakhir Anda meninggalkannya. Klik ganda bilah judul untuk memusatkannya kembali. Lihat [Pindahkan dialog](common:arrange-panels#move-a-dialog).
- **Resep untuk asisten AI.** Sepuluh permintaan contoh untuk asisten Anda sendiri (merapikan gambar, mencetak sekumpulan, memeriksa gambar, mengajukan pertanyaan tentang model, menjumlahkan takeoff, mencoba varian suku cadang...), masing-masing dengan alat yang dipanggilnya dan izin yang dibutuhkannya, dan masing-masing diputar ulang oleh pengujian kami. Aplikasi tidak berisi AI. Lihat [Resep untuk asisten AI](common:assistants-recipes).
- **Bahasa.** **Português (Portugal)** baru di {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Bahasa}}. Bahasa ini, **Português (Brasil)**, **Español (México)**, dan **Bahasa Indonesia** kini memiliki setiap kata dari aplikasi, sebagai draf yang belum ditinjau penutur asli. Topik bantuan dalam bahasa Inggris.
- **CadCraft Studio** menjelaskan mengapa pemeriksaan pembaruan gagal (belum ada berkas untuk sistem Anda, tidak ada jaringan, tanda tangan tidak valid) alih-alih hanya "Selesai", dan berhenti memunculkan kembali kartu Yang baru yang sudah Anda tutup sampai ada rilis yang lebih baru.

## Belum ada di versi ini

- **0.7 belum ditandatangani kode.** Penandatanganan, dan paket Microsoft Store, dipindahkan ke 0.8 karena validasi sertifikatnya belum selesai. Periksa SHA-256 di samping setiap berkas di getcadcraft.com/download. Di Windows, jika SmartScreen menghentikan penginstal, pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}. Di Mac, pada percobaan pertama, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. CadCraft Studio belum ada di toko aplikasi, dan belum ada build iPad atau iPhone.
- Daftar sudut dan kemiringan di {{ui:Satuan}} disimpan, tetapi belum ada kotak yang membacanya.
- Objek OLE DWG dipertahankan tetapi tidak ditampilkan, dan gambar metafile di dalam objek OLE tidak digambar.
- Membaca tabel gaya plot (berkas CTB) dari program lain menunggu berkas contoh.
- Teks Asia lama yang ditulis sebagai kode `\M+` dibaca, tetapi belum diperiksa terhadap berkas dari program lain.
- Underlay PDF: gambar di dalam halaman ditampilkan di layar tetapi tidak dicetak, plot asisten meninggalkan underlay, dan cara program lain membaca klip dan skala yang disimpan belum diperiksa di sana.
- Riwayat: CadCraft belum mengirim penyimpanannya ke awan, sehingga versi awan adalah yang disimpan dari perangkat lain dan dari web. Riwayat hanya ada di CadCraft Studio.
- Apakah Studio mempertahankan folder dukungan acad.lsp setelah dimulai ulang belum diperiksa. Jika diminta, pilih lagi folder itu di APPLOAD.
- Panel Laser belum dicoba pada laser sungguhan: uji setiap pengaturan pada bahan bekas. CadCraft Studio tidak memiliki Web Serial, sehingga di Studio panel hanya menyimpan G-code.
- Registrasi hasil pindai telah diuji pada hasil pindai buatan, belum pada set pemindai sungguhan.
- Penggeseran dua jari telah dicoba dengan peristiwa trackpad simulasi, belum pada trackpad sungguhan.
- {{cmd:PEDIT}} tidak memiliki opsi Edit vertex (gunakan grip atau Properti). Offset, trim, extend, fillet, break, dan join belum menerima spline; tinggi spline (Z) tidak dipertahankan.
- Teks paragraf baru belum dapat diberi kode format, dan keluaran SVG menampilkan teks berformat dalam satu warna.
- Opsi Seluruh gambar pada WBLOCK hanya menulis model, bukan lembar. Gaya dimensi saat ini tidak disimpan dalam berkas: gambar dibuka dengan Standard saat ini.
- Gaya menu pita belum memiliki daftar layer, warna, atau jenis garis: gunakan panel {{ui:Layer}} dan {{ui:Properti}}.
- Awan titik belum disimpan dalam gambar atau dicetak, dan berkas E57 dibuka hingga 6 juta titik dan 512 MB.
- Berkas DWG yang disimpan CadCraft belum diperiksa di AutoCAD sendiri.

Hal lainnya ada di [Belum dibuat](topic:not-built-yet).
