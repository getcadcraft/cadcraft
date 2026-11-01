---
title: File: apa yang dibuka, apa yang disimpan
summary: Format yang dibuka, disimpan, dan diekspor CadCraft, apa yang dipertahankan atau dikonversi, dan ke mana file pergi.
keywords: xclip, klip, batas xclip, bind klip, dwg, dxf, pdf, r12, buka, simpan, ekspor, impor, format, konversi, unduh, saveas, dxfout, simpan sebagai, simpan dwg, qsave, xref, xattach, gambar tertaut, referensi eksternal, bind, muat ulang, lepas
from: 6d68b34e
---

## Sekilas

| Format | Buka | Simpan | Catatan |
|---|---|---|---|
| DXF (teks, versi apa pun) | Ya | Ya, sebagai DXF R12 atau DXF 2000 | DXF biner ditolak: simpan dahulu sebagai DXF teks. |
| DWG | Ya | Ya, sebagai DWG (AutoCAD 2000, 2004, 2007, 2010, 2013, atau 2018) | Dibaca dan ditulis oleh pustaka DWG milik CadCraft sendiri (file AutoCAD R13 sampai 2018). DWG Anda tidak pernah diubah. File rusak, atau versi yang tidak ditangani pembaca, ditolak dengan pesan. |
| PDF | Memasukkan satu halaman: sebagai underlay atau sebagai objek ([Underlay PDF](topic:pdf-underlay)) | Ya, dengan plot | PDF vektor sebuah lembar, atau model pada suatu skala. |

Setiap gambar yang Anda buka (atau mulai dengan {{ui:Baru}}) mendapat tabnya sendiri di atas area gambar; gambar baru yang belum disentuh siapa pun dipakai sebagai ganti menambah tab. Klik tab untuk berpindah, {{ui:×}}-nya untuk menutup (CadCraft bertanya dahulu jika ada perubahan yang belum disimpan), atau susun gambar yang terbuka berdampingan: lihat [Membagi layar](topic:split-screen).

## Membuka gambar

- Tekan {{key:Mod+O}}, klik {{ui:Buka}}, atau ketik `OPEN`, lalu pilih file.
- Atau seret file `.dwg` atau `.dxf` ke area gambar.

File dibaca di dalam peramban Anda. File tidak diunggah ke mana pun. Riwayat melaporkan berapa banyak objek dan layer yang masuk serta berapa lama waktunya, dan bagian {{ui:Gambar}} di panel kiri menampilkan formatnya, misalnya "DWG 2018 (AC1032)".

Pembaca DWG adalah bagian dari CadCraft dan diambil bersama DWG pertama yang Anda buka setelah halaman dimuat (beberapa ratus KB), sehingga tidak ada unduhan terpisah yang perlu ditunggu. Pembaca ini membaca file di latar belakang, sehingga halaman tetap responsif saat DWG besar terbuka.

### Yang masuk

- Garis, busur, lingkaran, polyline (dengan segmen busur), elips, titik, teks dan teks multibaris, solid, hatch (pola standar digambar sebagai garisnya, lainnya sebagai warna rata), referensi blok beserta atributnya (nilai yang dapat Anda edit; lihat [Atribut blok](topic:attributes)), dimensi, dan layout beserta viewport-nya.
- Spline masuk sebagai spline (derajat, titik kontrol, knot, bobot, titik fit); lihat [Spline dan polyline](topic:splines).
- Multileader dengan satu garis leader dan teks masuk sebagai multileader CadCraft yang dapat Anda edit (lihat {{cmd:MLEADER}}). Lainnya (dengan blok, beberapa garis leader, atau garis lengkung) digambar seperti yang digambar program lain dan bergerak sebagai satu kesatuan; riwayat menyebutkan jumlahnya.
- Gambar raster (image) tampil sebagai bingkai dengan nama file gambar sampai Anda memberikan file itu kepada CadCraft dengan {{cmd:IMAGE}}: lihat [Gambar dalam gambar kerja](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout tampil sebagai bingkainya, dan apa yang berada di bawahnya tetap terlihat.
- Tabel dalam DWG masuk seperti yang digambar program lain.
- Muka 3D di ruang model masuk di tab {{ui:3D}}, bukan sebagai objek 2D; begitu juga yang berada di dalam blok, sekali per referensi blok di model. Dalam blok dan pada lembar, muka itu juga digambar datar, sebagai garis tepi. Lihat [Pemodelan 3D](topic:3d-solids).
- Layer mempertahankan warna, nyala, beku, kunci, dan pengaturan plot-nya. DEFPOINTS tidak pernah di-plot.
- Dimensi menjadi dimensi CadCraft yang nyata dan dapat diedit jika titik-titiknya dapat dibaca. Dimensi pertama kali ditampilkan persis seperti yang digambar program lain; begitu Anda mengubahnya, CadCraft menggambar ulang dengan gayanya sendiri.
- Setiap layout menjadi tab lembar. Di program lain setiap layout memiliki viewport pertama tersembunyi yang merupakan lembar itu sendiri; CadCraft tidak memasukkannya.

### Yang belum masuk

Apa pun yang tidak dapat digambar CadCraft dihitung, bukan ditebak. Kotak "Tentang file ini" di panel kiri mencantumkannya sebagai "Belum ditampilkan:" diikuti setiap jenis objek dan jumlahnya. Kasus yang umum adalah tabel dalam DXF, mesh, dan solid 3D di dalam blok. Solid 3D, region, dan bodi di ruang model tampil di tab 3D (lihat [Pemodelan 3D](topic:3d-solids#solids-from-other-programs)). Viewport yang terpelintir dalam file tampil terputar, seperti di sana, dan mempertahankan putarannya saat Anda menyimpan; begitu juga UCS saat ini, UCS bernama, dan tampilan yang diputar.

Teks digambar dalam satu font bergaya Helvetica. Label yang muat dalam satu baris pada font yang lebih sempit di program asal dapat membungkus menjadi dua baris di CadCraft.

## Menyimpan

Ada tiga cara menyimpan. Masing-masing mengunduh salinan.

- **Simpan**: tekan {{key:Mod+S}}, klik {{ui:Simpan}}, atau ketik `SAVE` (juga `QSAVE`). Menyimpan dalam format gambar: DWG jika Anda membuka DWG, DXF jika Anda membuka DXF. DWG mempertahankan versi asalnya (file 2018 disimpan sebagai 2018). Gambar baru memakai format dan versi DWG yang terakhir Anda pilih di Simpan sebagai di peramban ini; jika Anda belum pernah memilih, DWG dalam format AutoCAD 2000.
- **Simpan sebagai**: tekan {{key:Mod+Shift+S}}, klik {{ui:Simpan sebagai}}, atau ketik `SAVEAS`. Dialog {{ui:Simpan salinan sebagai}} menawarkan {{ui:DWG}}, dengan daftar {{ui:Versi}} (AutoCAD 2018, 2013, 2010, 2007, 2004, atau 2000), {{ui:DXF R12}}, dan {{ui:DXF 2000}}, masing-masing dengan nama file yang akan diberikannya, dengan format dan versi gambar saat ini sudah terpilih. Klik {{ui:Simpan}} untuk mengunduh, atau {{ui:Batal}} (atau {{key:Esc}}) untuk tidak menyimpan apa pun; riwayat lalu menyatakan "Tidak disimpan." Pilihan Anda bertahan: {{key:Mod+S}} memakainya untuk gambar ini selanjutnya, dan gambar baru di peramban ini dimulai dengannya.
- **DXFOUT**: ketik `DXFOUT`. Selalu mengunduh salinan DXF R12, dan {{key:Mod+S}} berikutnya tetap menyimpan dalam format gambar itu sendiri.

Peramban mengunduh `<nama gambar>.dwg` atau `<nama gambar>.dxf`. Setiap penyimpanan adalah **unduhan baru**; file yang Anda buka tidak pernah ditimpa atau diubah. Riwayat mengonfirmasinya, misalnya "Menyimpan salinan sebagai Plan.dwg (DWG (AutoCAD 2018)). Plan.dxf asli Anda tidak berubah." Untuk DXF tertulis "(DXF R12, terbuka di program CAD mana pun)". Baris di bawahnya mencantumkan apa pun yang berubah di tengah jalan.

Ketika CadCraft berjalan di aplikasi desktop, penyimpanan berfungsi seperti di program desktop lain: {{key:Mod+S}} menulis gambar kembali ke file yang Anda buka, dalam format dan versinya sendiri, dan riwayat menyebutkan tempat penyimpanannya. {{ui:Simpan sebagai}} dan ekspor menampilkan dialog simpan sistem, dan file `.dwg`, `.dxf`, atau `.ccsheets` yang Anda klik ganda terbuka di CadCraft.

Untuk PDF, gunakan plot (lihat di bawah).

## Yang dipertahankan dan diubah DWG

CadCraft menulis DWG sendiri, di dalam peramban Anda, dengan pustaka DWG yang sama dengan yang dipakai membaca. Pilih versi di Simpan sebagai: format AutoCAD 2000 (versi file AC1015) terbuka di paling banyak program, termasuk yang lama; format yang lebih baru (2004, AC1018, sampai 2018, AC1032) juga mempertahankan warna sejati. Tidak ada yang diunggah, dan menyimpan DWG berfungsi offline.

Setiap versi diperiksa dengan membaca kembali file yang disimpan menggunakan pembaca DWG dari tiga program lain dan CadCraft sendiri. DWG dari CadCraft belum dibuka di AutoCAD itu sendiri.

### Yang dipertahankan DWG

- Garis, busur, lingkaran, elips, titik, dan polyline beserta segmen busurnya.
- Teks satu baris dengan perataan dan faktor lebarnya.
- Teks multibaris dan teks yang membungkus, sebagai teks multibaris. Program lain membungkusnya lagi dari lebar yang sama.
- Warna objek: ByLayer, ByBlock, 255 warna standar, dan warna sejati pada format 2004 dan seterusnya.
- Layer beserta warna, jenis garis, tebal garis, dan pengaturan nyala, beku, kunci, dan plot-nya; jenis garis, tebal garis, dan skala jenis garis milik objek itu sendiri, pola jenis garis, dan skala jenis garis gambar.
- Satuan gambar dan format panjang (desimal, kaki dan inci, pecahan…).
- Blok beserta titik dasar dan definisi atributnya, termasuk yang tak terlihat, konstan, dan preset.
- Referensi blok beserta skala, rotasi, dan nilai atributnya.
- Isian solid, dan hatch berpola beserta pola, skala, dan sudutnya (garis pola itu sendiri, sehingga program lain menggambar garis yang sama dengan CadCraft).
- Dimensi, sebagai dimensi nyata: program lain mengukur ulang saat dimensi diregangkan. Masing-masing mempertahankan pengaturannya sendiri (tinggi teks, ukuran panah, desimal, format panjang) dan teksnya, dan membawa salinan gambar yang dimiliki setiap dimensi DWG.
- Lembar (layout): setiap lembar beserta ukuran kertas dan satuannya, apa yang digambar di atasnya, dan viewport-nya beserta tampilan dan skalanya.
- Tampilan bernama.
- Multileader, sebagai multileader.
- Nama layer dan blok seperti yang Anda ketik, dalam huruf besar dan kecil. (DXF R12 menulisnya dalam huruf kapital.)

### Yang diubah DWG

Masing-masing dicantumkan dalam riwayat setelah Anda menyimpan, bila berlaku untuk gambar Anda.

| Di CadCraft | Di DWG yang disimpan |
|---|---|
| Warna sejati (dipilih dengan pemilih warna), pada format 2000 | Warna standar terdekat: format 2000 hanya memiliki 255. Simpan sebagai 2004 atau lebih baru untuk mempertahankannya |
| Tampilan bernama pada lembar | Tampilan ruang kertas: DWG tidak menyebutkan lembar mana, sehingga ketika CadCraft membuka file lagi, tampilan itu menjadi milik lembar pertama |
| Teks multibaris dengan faktor lebar | Lebar huruf normal: dalam DWG faktor lebar hanya berlaku untuk teks satu baris |
| Nama layer atau blok dengan karakter yang tidak diizinkan DWG | Diubah: nama dari gambar tertaut seperti `Base\|Walls` menjadi `Base$0$Walls` (cara bind gambar tertaut menamainya), dan karakter lain menjadi `_` |

### Mengapa R12, dan apa yang dikonversi

Saat Anda menyimpan sebagai DXF, CadCraft menulis DXF R12, versi yang dapat dibuka setiap program CAD. Versi ini lebih tua daripada beberapa fitur, sehingga beberapa hal ditulis dalam bentuk yang lebih sederhana:

| Di CadCraft | Di file R12 yang disimpan |
|---|---|
| Teks multibaris | Satu objek teks per baris |
| Elips | Polyline yang mengikuti elips |
| Hatch (dari file yang dibuka) | Hanya garis tepinya |
| Warna sejati (dipilih dengan pemilih warna) | Warna standar terdekat |
| Tebal garis, dan skala jenis garis milik objek | Dihilangkan: R12 tidak memiliki keduanya (jenis garis dipertahankan) |
| Nama layer dan blok | Ditulis dalam huruf kapital; spasi dan karakter lain menjadi `_`, dan nama dipotong menjadi 31 karakter ("Title block" menjadi `TITLE_BLOCK`) |
| Layer yang diatur tidak di-plot | Program lain akan meng-plot-nya (CadCraft mengingat pengaturannya bila gambar memiliki lembar) |
| Dimensi | Dimensi nyata dengan blok gambarnya sendiri, sehingga program lain menampilkannya seperti yang Anda lihat |
| Multileader | Garis, mata panah, dan teks yang digambarnya |
| Tampilan bernama | Dipertahankan, dengan nama huruf kapital; tampilan sebuah lembar kembali pada lembar pertama |
| Beberapa lembar | Lembar pertama menjadi ruang kertas yang ditampilkan setiap program; lainnya dipertahankan sebagai blok bernama `CCLAYOUT_1`, `CCLAYOUT_2` … yang diubah CadCraft kembali menjadi lembar saat membuka file |

Riwayat mencantumkan masing-masing yang berlaku untuk gambar Anda.

:::tip
Untuk terus mengerjakan gambar selama beberapa hari, simpan sebagai DXF dan buka DXF itu lain kali. Semua yang dapat digambar CadCraft bertahan dalam proses bolak-balik itu, termasuk dimensi, blok, dan semua lembar.
:::

## Gambar tertaut (referensi eksternal)

{{cmd:XATTACH}} (`XA`, atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Tautkan gambar (xref)}}) menautkan DWG atau DXF lain: pilih file, lalu klik tempat penempatannya ({{key:Enter}} menaruhnya di 0,0). File masuk sebagai satu blok bernama sesuai file, pada skala yang benar bila kedua gambar memiliki satuan berbeda. Layer dan bloknya mempertahankan nama dengan nama tautan di depannya — `Plan|Walls`, `Plan|Door` — sehingga tidak pernah bercampur dengan milik Anda: nyalakan dan matikan layer tertaut, bekukan atau kunci seperti layer Anda sendiri. Tautan bersifat hanya-baca: ubah gambar lainnya dan muat ulang. Apa yang Anda atur pada layer tautan (warna, jenis garis, tebal garis, nyala/mati, beku, kunci, plot) dipertahankan saat Anda memuat ulang, saat Anda menyimpan gambar sebagai DWG selagi tautan masih berupa tautan, dan saat gambar lain menautkan gambar ini.

{{cmd:XREF}} (`XR`): `?` mencantumkan tautan (termuat atau tidak, file mana, berapa referensi); `A` melampirkan; `R` memuat ulang satu dari filenya (pilih file lagi: peramban tidak dapat menjangkau folder Anda sendiri); `B` mem-bind satu (menjadi blok dan layer biasa bernama `Plan$0$Walls`); `D` melepas satu (referensi dan layernya hilang). Masing-masing adalah satu langkah urungkan.

{{cmd:XCLIP}} (`XC`) memotong referensi blok dan tautan: pilih, `N` untuk batas baru, lalu `R` dan dua sudut atau `P` dan titik-titik poligon ({{key:Enter}} menutupnya); `D` menghapus klip. Hanya yang berada di dalam yang tampil dan di-plot, dan klip bergerak bersama referensi. DWG dan DXF 2000 mempertahankan klip; DXF R12 menyimpan referensi secara utuh dan menyatakannya. Ketika Anda mem-bind tautan yang memiliki referensi terklip, {{cmd:XREF}} `B` bertanya: `A` mem-bind semuanya, `C` hanya mempertahankan bagian terklip setiap referensi (garis dan busur dipotong di batas; teks dan blok bersarang tetap bila titik sisipnya berada di dalam).

Gambar yang Anda buka dapat menaut file yang tidak dapat dilihat CadCraft: CadCraft menyebutkan berapa yang tidak termuat. Gunakan {{cmd:XREF}}, `R` dan pilih setiap file untuk melihatnya.

Saat Anda menyimpan, tautan yang termuat di-**bind** ke dalam file (program lain melihat blok dan layer biasa bernama `Plan$0$…`), dan riwayat menyatakannya. Tautan yang tidak termuat tetap menjadi tautan ke filenya, di DWG dan DXF.

## Membuka dalam 3D

{{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Buka di ModelCraft}} ({{cmd:OPENIN3D}}) membuka gambar di aplikasi pemodelan 3D di tab baru, sebagai DWG, tanpa mengunggahnya. Perubahan yang dibuat di sana tetap di sana; simpan di sana. Item menu hanya tampil di tempat aplikasi itu dapat menerima gambar yang diserahkan.

## Mem-plot PDF

Tekan {{key:Mod+P}}, klik {{ui:Plot}}, atau ketik `PLOT`. PDF dibuat di dalam peramban lalu diunduh, atau dibuka di tab baru untuk dicetak. Lihat [Plot ke PDF](topic:plot-pdf).

## Ke mana file pergi

Setiap penyimpanan dan setiap plot adalah unduhan, sehingga file mendarat di mana pun peramban Anda menaruh unduhan: biasanya folder Downloads. Untuk memilih folder setiap kali, ubah pengaturan unduhan di peramban Anda; [Peramban dan komputer](common:browsers) menunjukkan tempatnya.

Tidak ada yang Anda buka atau simpan yang dikirim kepada kami. Lihat [Ke mana file Anda pergi](common:your-files).

## File proyek PLN dan PLA

CadCraft membuka gambar DWG dan DXF, bukan file milik Archicad sendiri (`.pln`, `.pla`, `.tpl`, `.bpn`). Membuka salah satunya akan memberi tahu apa itu. Di Archicad, simpan tampilan atau layout yang Anda perlukan sebagai DWG dan buka di sini, atau ekspor model sebagai IFC dan buka di BimCraft. Bila BimCraft dapat mengambil alih file, CadCraft menawarkan {{ui:Buka di BimCraft}}.

## Jika halaman tertutup sebelum Anda menyimpan

CadCraft menyimpan salinan setiap gambar yang Anda ubah, hanya di peramban ini, sesaat setelah Anda berhenti mengedit. Jika tab tertutup, peramban berhenti, atau komputer restart sebelum Anda menyimpan, CadCraft bertanya **Pulihkan pekerjaan Anda?** saat berikutnya dimulai: {{ui:Pulihkan}} membuka gambar lagi, belum disimpan, di tabnya sendiri. Menyimpan gambar menghapus salinannya. Lihat [Memulihkan pekerjaan Anda](common:recover).

## Online dan offline

Membuka, menggambar, menyimpan (DWG dan DXF), dan mem-plot semuanya terjadi di komputer Anda, sehingga berfungsi tanpa koneksi setelah CadCraft termuat.

Untuk memakai CadCraft tanpa koneksi sama sekali, klik {{ui:Simpan untuk offline}} di bilah atas saat Anda online. Labelnya menghitung naik ("Menyimpan 40 dari 212") dan berakhir di "Siap offline". Salinan yang disimpan menyertakan pembaca DWG, sekitar 5 MB seluruhnya, sehingga **file DWG juga terbuka secara offline** setelah disimpan. Klik tombol lagi untuk {{ui:Simpan lagi (ambil versi terbaru)}} atau {{ui:Hapus salinan offline}}. "Tidak dapat menyimpan" berarti sebagian file tidak terunduh: periksa koneksi dan klik untuk mencoba lagi. "Offline tidak tersedia" berarti jendela peramban ini tidak dapat menyimpan salinan (jendela pribadi dan sebagian komputer yang dikelola).

Tanpa salinan tersimpan, pembaca DWG diambil saat pertama kali Anda membuka DWG setelah halaman dimuat, sehingga membuka DWG secara offline dapat gagal; file DXF tidak pernah memerlukannya. Jangan muat ulang halaman saat offline kecuali CadCraft sudah disimpan.

Lihat [Bekerja offline](common:offline) untuk rinciannya.

:::offline
Anda sedang offline. Gambar disimpan sebagai DWG atau DXF dan di-plot seperti biasa, dan file DXF terbuka. File DWG terbuka jika CadCraft menampilkan "Siap offline", atau jika pembaca DWG sudah termuat di tab ini.
:::

## Batasan dalam file

Batasan dan parameter (lihat [Membatasi gambar](topic:constraints)) disimpan dalam DWG maupun DXF. Setiap objek yang dibatasi membawa catatan kecil CadCraft (data yang diperluas), dan blok yang tidak dipakai bernama `CADCRAFT_PARAMETRIC` menyimpan batasan dan tabel parameter. Program lain membuka gambar secara normal dan mengabaikan keduanya; program itu dapat menghapus blok yang tidak dipakai saat purge. Catatan merujuk objek melalui kuncinya sendiri, bukan handle file, sehingga program yang memberi nomor ulang handle tidak merusaknya. Ketika program lain telah menghapus atau mengubah objek yang dibatasi, CadCraft menghapus batasan padanya saat membuka file dan menyebutkan jumlahnya. File tanpa batasan terbuka tanpa batasan.

Sketsa yang diekspor dari pemodel part (`.json`) juga terbuka: lihat [Memindahkan sketsa ke dan dari pemodel part lain](topic:solidworks-sketches).

## Belum tersedia

- Multileader sebagai objek multileader dalam DXF yang disimpan (R12 tidak memilikinya: disimpan sebagai apa yang digambarnya).
- Gambar raster dalam DXF yang disimpan (disimpan sebagai bingkainya; DWG mempertahankannya sebagai gambar), dan wipeout yang menyembunyikan apa yang di bawahnya.
- Menyimpan versi DXF yang lebih baru daripada 2000.
- Penyimpanan cloud dan sinkronisasi antarkomputer.

Lihat [Belum dibuat](topic:not-built-yet) untuk daftar lengkapnya.
