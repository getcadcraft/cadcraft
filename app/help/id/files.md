---
title: File: apa yang dibuka, apa yang disimpan
summary: Format yang dibuka, disimpan, dan diekspor CadCraft, apa yang dipertahankan atau dikonversi, dan ke mana file-file pergi.
keywords: xclip, clip, batas xclip, bind clipped, dwg, dxf, pdf, r12, buka, simpan, ekspor, impor, format, konversi, unduh, saveas, dxfout, simpan sebagai, dwg save, format, qsave, xref, xattach, gambar tertaut, referensi eksternal, bind, reload, detach
from: b8c5778d
---

## Sekilas

| Format | Buka | Simpan | Catatan |
|---|---|---|---|
| DXF (teks atau biner, versi apa pun) | Ya | Ya, sebagai DXF R12, DXF 2000 atau DXF 2000 (biner) | DXF biner dibuka seperti DXF teks dan disimpan kembali sebagai biner. |
| DWG | Ya | Ya, sebagai DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 atau 2018) | Dibaca dan ditulis oleh pustaka DWG milik CadCraft sendiri (file AutoCAD R13 sampai 2018). DWG Anda tidak pernah diubah. File yang rusak, atau versi yang tidak ditangani pembaca, ditolak dengan pesan. |
| PDF | Membawa halaman masuk: sebagai underlay atau sebagai objek ([Underlay PDF](topic:pdf-underlay)) | Ya, dengan plot | PDF vektor dari lembar, atau dari model pada skala tertentu. |

Setiap gambar yang Anda buka (atau mulai dengan {{ui:Baru}}) mendapat tab sendiri di atas area gambar; gambar baru yang belum disentuh siapa pun dipakai sebagai gantinya dan tidak menambah tab. Klik tab untuk beralih, {{ui:×}} untuk menutupnya (CadCraft menanyakan dulu jika ada perubahan yang belum disimpan), atau susun gambar yang terbuka berdampingan: lihat [Bagi layar](topic:split-screen).

## Membuka gambar

- Tekan {{key:Mod+O}}, klik {{ui:Buka}}, atau ketik `OPEN`, lalu pilih file.
- Atau seret file `.dwg` atau `.dxf` ke area gambar.

File dibaca di dalam peramban Anda. File tidak diunggah ke mana pun. Riwayat melaporkan berapa banyak objek dan layer yang masuk serta berapa lama waktunya, dan bagian {{ui:Gambar}} di panel kiri menampilkan formatnya, misalnya "DWG 2018 (AC1032)".

Pembaca DWG adalah bagian dari CadCraft dan diambil bersama DWG pertama yang Anda buka setelah halaman dimuat (beberapa ratus KB), sehingga tidak ada unduhan terpisah yang perlu ditunggu. Pembaca bekerja di latar belakang, sehingga halaman tetap merespons saat DWG besar dibuka.

DXF dibaca dalam potongan sekitar 4 MB, tidak pernah sebagai satu blok teks, sehingga DXF di atas 512 MB pun dapat dibuka. Yang membatasi adalah memori komputer Anda: saat DXF dibuka, perkirakan penggunaan sekitar 16 sampai 20 kali ukuran file (DXF 100 MB dengan sekitar 690.000 objek memakai sekitar 1.5 GB dalam pengujian kami).

### Yang masuk

- Garis, busur, lingkaran, polyline (dengan segmen busur), elips, titik, teks dan teks multibaris, solid, hatch (pola standar digambar sebagai garisnya, pola lain sebagai nada datar), referensi blok dengan atributnya (nilai yang dapat Anda edit; lihat [Atribut blok](topic:attributes)), dimensi, dan layout dengan viewport-nya.
- Spline masuk sebagai spline (derajat, titik kontrol, knot, bobot, titik fit); lihat [Spline dan polyline](topic:splines).
- Multileader dengan satu garis pemimpin dan teks masuk sebagai multileader CadCraft yang dapat Anda sunting (lihat {{cmd:MLEADER}}). Yang lain (dengan blok, beberapa garis pemimpin, atau garis melengkung) digambar seperti yang digambar program lain dan bergerak sebagai satu kesatuan; riwayat menyebutkan berapa banyak.
- Gambar raster (image) tampil sebagai bingkai dengan nama file gambarnya sampai Anda memberi CadCraft file tersebut dengan {{cmd:IMAGE}}: lihat [Gambar raster dalam gambar](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout tampil sebagai bingkainya, dan apa pun di bawahnya tetap terlihat.
- Tabel dalam DWG masuk seperti yang digambar program lain.
- Muka 3D di ruang model masuk pada tab {{ui:3D}}, bukan sebagai objek 2D; begitu pula yang ada di dalam blok, sekali untuk setiap referensi blok di model. Di dalam blok dan pada lembar, muka tersebut juga digambar datar, sebagai garis tepi. Lihat [Model dalam 3D](topic:3d-solids).
- Layer mempertahankan warna, serta pengaturan nyala, beku, kunci, dan plot. DEFPOINTS tidak pernah diplot.
- Dimensi menjadi dimensi CadCraft yang nyata dan dapat disunting jika titik-titiknya dapat dibaca. Pada awalnya ditampilkan persis seperti yang digambar program lain; begitu Anda mengubah salah satunya, CadCraft menggambarnya ulang dengan gayanya sendiri.
- Setiap layout menjadi tab lembar. Di program lain, setiap layout memiliki viewport pertama yang tersembunyi dan itulah lembarnya sendiri; CadCraft tidak menyertakannya.

### Yang belum masuk

Apa pun yang tidak dapat digambar CadCraft dihitung, bukan ditebak. Kotak "Tentang file ini" di panel kiri mencantumkannya sebagai "Belum ditampilkan:" diikuti setiap jenis objek dan jumlahnya. Kasus yang umum adalah tabel dalam DXF, mesh, dan solid 3D di dalam blok. Solid 3D, region, dan body di ruang model tampil di tab 3D (lihat [Model dalam 3D](topic:3d-solids#solids-from-other-programs)). Viewport yang terpuntir dalam file tampil terpuntir, seperti di program asalnya, dan mempertahankan puntirannya saat Anda menyimpan; begitu juga UCS saat ini, UCS bernama, dan tampilan yang diputar.

Teks digambar dengan satu font bergaya Helvetica. Label yang muat dalam satu baris pada font program asli yang lebih sempit dapat terbungkus menjadi dua baris di CadCraft.

## Menyimpan

Ada tiga cara untuk menyimpan. Setiap cara mengunduh salinan.

- **Simpan**: tekan {{key:Mod+S}}, klik {{ui:Simpan}}, atau ketik `SAVE` (juga `QSAVE`). Ia menyimpan dalam format gambar: DWG jika Anda membuka DWG, DXF jika Anda membuka DXF. DWG mempertahankan versi yang dibawanya (file 2018 disimpan sebagai 2018). Gambar baru memakai format dan versi DWG yang terakhir Anda pilih di {{ui:Simpan sebagai}} pada peramban ini; jika Anda belum pernah memilih, DWG dalam format AutoCAD 2000.
- **Simpan sebagai**: tekan {{key:Mod+Shift+S}}, klik {{ui:Simpan sebagai}}, atau ketik `SAVEAS`. Dialog {{ui:Simpan salinan sebagai}} menawarkan {{ui:DWG}}, dengan daftar {{ui:Versi}} (AutoCAD 2018, 2013, 2010, 2007, 2004 atau 2000), {{ui:DXF R12}} dan {{ui:DXF 2000}}, masing-masing dengan nama file yang akan diberikannya, dan format serta versi gambar saat ini sudah terpilih. Klik {{ui:Simpan}} untuk mengunduh, atau {{ui:Batal}} (atau {{key:Esc}}) untuk tidak menyimpan apa pun; riwayat lalu menyebutkan "Tidak disimpan." Pilihan Anda berlaku: {{key:Mod+S}} memakainya untuk gambar ini sejak saat itu, dan gambar baru di peramban ini mulai dengannya.
- **DXFOUT**: ketik `DXFOUT`. Ia selalu mengunduh salinan DXF R12, dan {{key:Mod+S}} berikutnya tetap menyimpan dalam format asli gambar.

Peramban mengunduh `<nama gambar>.dwg` atau `<nama gambar>.dxf`. Setiap penyimpanan adalah **unduhan baru**; file yang Anda buka tidak pernah ditimpa atau diubah. Riwayat mengonfirmasinya, misalnya "Salinan disimpan sebagai Plan.dwg (DWG (AutoCAD 2018)). Plan.dxf asli Anda tidak berubah." Untuk DXF riwayat menulis "(DXF R12, dapat dibuka di program CAD apa pun)". Baris di bawahnya mencantumkan apa pun yang berubah dalam prosesnya.

Saat CadCraft berjalan sebagai aplikasi desktop, menyimpan bekerja seperti di program desktop lain: {{key:Mod+S}} menulis gambar kembali ke file yang Anda buka, dalam format dan versinya sendiri, dan riwayat menyebutkan lokasi penyimpanannya. {{ui:Simpan sebagai}} dan ekspor menampilkan dialog simpan sistem, dan file `.dwg`, `.dxf`, atau `.ccsheets` yang Anda klik dua kali akan dibuka di CadCraft.

Untuk PDF, gunakan plot (lihat di bawah).

## Yang disimpan dan diubah DWG

CadCraft menulis DWG itu sendiri, di dalam peramban Anda, dengan pustaka DWG yang sama dengan yang digunakannya untuk membaca. Pilih versinya di {{ui:Simpan sebagai}}: format AutoCAD 2000 (versi file AC1015) dibuka oleh paling banyak program, termasuk yang lama; format yang lebih baru (2004, AC1018, hingga 2018, AC1032) juga mempertahankan warna sebenarnya. Tidak ada yang diunggah, dan menyimpan DWG berfungsi secara luring.

Setiap versi diperiksa dengan membaca kembali file yang disimpan menggunakan pembaca DWG dari tiga program lain dan dengan CadCraft sendiri. DWG dari CadCraft belum pernah dibuka di AutoCAD itu sendiri.

### Yang dipertahankan DWG

- Garis, busur, lingkaran, elips, titik, dan polyline dengan segmen busurnya.
- Teks satu baris dengan perataan dan faktor lebarnya.
- Teks multibaris dan teks yang terbungkus, sebagai teks multibaris. Program lain membungkusnya lagi dari lebar yang sama.
- Warna objek: menurut layer, menurut blok, 255 warna standar, dan warna sebenarnya pada format 2004 ke atas.
- Layer dengan warna, jenis garis, tebal garis, dan pengaturan nyala, beku, kunci, dan plot; jenis garis, tebal garis, dan skala jenis garis milik objek, pola jenis garis, serta skala jenis garis gambar.
- Satuan gambar dan format panjang (desimal, kaki dan inci, pecahan…).
- Blok dengan titik dasarnya dan definisi atributnya, termasuk yang tak terlihat, konstan, dan yang sudah diisi.
- Referensi blok dengan skala, rotasi, dan nilai atributnya.
- Isian solid, dan hatch berpola dengan pola, skala, dan sudutnya (garis pola itu sendiri, sehingga program lain menggambar garis yang sama dengan yang digambar CadCraft).
- Dimensi, sebagai dimensi nyata: program lain mengukurnya ulang saat diregangkan. Setiap dimensi mempertahankan pengaturannya sendiri (tinggi teks, ukuran panah, desimal, format panjang) dan teksnya, serta membawa salinan gambar yang dimiliki setiap dimensi DWG.
- Lembar (layout): setiap lembar dengan ukuran kertas dan satuannya, apa yang digambar di atasnya, dan viewport-nya dengan tampilan dan skalanya.
- Tampilan bernama.
- Multileader, sebagai multileader.
- Nama layer dan blok seperti yang Anda ketik, huruf besar dan kecil. (DXF R12 menulisnya dengan huruf kapital.)

### Yang diubah DWG

Setiap hal ini dicantumkan dalam riwayat setelah Anda menyimpan, jika berlaku untuk gambar Anda.

| Di CadCraft | Di DWG yang disimpan |
|---|---|
| Warna sebenarnya (dipilih dengan pemilih warna), dalam format 2000 | Warna standar terdekat: format 2000 hanya memiliki 255 warna. Simpan sebagai 2004 atau yang lebih baru untuk mempertahankannya |
| Tampilan bernama pada lembar | Tampilan ruang kertas: DWG tidak menyebutkan lembar mana, sehingga saat CadCraft membuka file lagi, tampilan itu menjadi milik lembar pertama |
| Teks multibaris dengan faktor lebar | Lebar huruf normal: dalam DWG faktor lebar hanya berlaku untuk teks satu baris |
| Nama layer atau blok dengan karakter yang tidak diizinkan DWG | Diubah: nama dari gambar tertaut seperti `Base\|Walls` menjadi `Base$0$Walls` (cara mengikat gambar tertaut memberi nama), dan karakter lain menjadi `_` |

### Mengapa R12, dan apa yang dikonversi

Saat Anda menyimpan sebagai DXF, CadCraft menulis DXF R12, versi yang dapat dibuka oleh setiap program CAD. Versi ini lebih tua dari beberapa fitur, sehingga beberapa hal ditulis dalam bentuk yang lebih sederhana:

| Di CadCraft | Di file R12 yang disimpan |
|---|---|
| Teks multibaris | Satu objek teks per baris |
| Elips | Polyline yang mengikuti elips |
| Hatch (dari file yang dibuka) | Hanya garis tepinya |
| Warna sebenarnya (dipilih dengan pemilih warna) | Warna standar terdekat |
| Tebal garis, dan skala jenis garis milik objek | Dihilangkan: R12 tidak memilikinya (jenis garis tetap disimpan) |
| Nama layer dan blok | Ditulis dengan huruf kapital; spasi dan karakter lain menjadi `_`, dan nama dipotong menjadi 31 karakter ("Title block" menjadi `TITLE_BLOCK`) |
| Layer yang diatur tidak diplot | Program lain akan memplotnya (CadCraft mengingat pengaturan ini jika gambar memiliki lembar) |
| Dimensi | Dimensi nyata dengan blok gambarnya sendiri, sehingga program lain menampilkannya seperti yang Anda lihat |
| Multileader | Garis, mata panah, dan teks yang mereka gambar |
| Tampilan bernama | Dipertahankan, dengan nama huruf kapital; tampilan lembar kembali ke lembar pertama |
| Beberapa lembar | Lembar pertama adalah ruang kertas yang ditampilkan setiap program; yang lain disimpan sebagai blok bernama `CCLAYOUT_1`, `CCLAYOUT_2` … yang dikembalikan CadCraft menjadi lembar saat membuka file |

Riwayat mencantumkan masing-masing hal ini yang berlaku untuk gambar Anda.

:::tip
Untuk melanjutkan pekerjaan pada gambar selama beberapa hari, simpan sebagai DXF dan buka DXF itu lagi lain kali. Semua yang dapat digambar CadCraft bertahan dalam siklus ini, termasuk dimensi, blok, dan semua lembar.
:::

## Gambar tertaut (referensi eksternal)

{{cmd:XATTACH}} (`XA`, atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Tautkan gambar (xref)}}) menautkan DWG atau DXF lain: pilih file, lalu klik di tempat ia akan diletakkan ({{key:Enter}} menempatkannya di 0,0). Ia masuk sebagai satu blok bernama sesuai file, dengan skala yang tepat saat kedua gambar memiliki satuan berbeda. Layer dan blok-nya mempertahankan nama mereka dengan nama tautan di depannya: `Plan|Walls`, `Plan|Door`, sehingga tidak pernah bercampur dengan milik Anda. Nyalakan dan matikan layer tertaut, bekukan atau kunci seperti layer Anda sendiri. Tautan bersifat hanya-baca: ubah gambar lain lalu muat ulang. Yang Anda atur pada layer tautan (warna, jenis garis, tebal garis, nyala atau mati, beku, kunci, plot) dipertahankan saat Anda memuat ulang, saat Anda menyimpan gambar sebagai DWG selagi tautannya masih tautan, dan saat gambar lain menautkan gambar ini.

{{cmd:XREF}} (`XR`): `?` mencantumkan tautan (sudah dimuat atau belum, file mana, berapa referensi); `A` melampirkan; `R` memuat ulang satu tautan dari filenya (pilih file lagi: peramban tidak dapat menjangkau folder Anda sendiri); `B` mengikat satu tautan (ia menjadi blok dan layer biasa bernama `Plan$0$Walls`); `D` melepas satu tautan (referensi dan layernya hilang). Setiap langkah adalah satu langkah urung.

{{cmd:XCLIP}} (`XC`) memotong referensi blok dan tautan: pilih, `N` untuk batas baru, lalu `R` dan dua sudut, atau `P` dan titik-titik poligon ({{key:Enter}} menutupnya); `D` menghapus potongan. Hanya yang berada di dalam yang tampil dan diplot, dan potongan ikut bergerak bersama referensinya. DWG dan DXF 2000 mempertahankan potongan; DXF R12 menyimpan referensi secara utuh dan memberi tahu Anda. Saat Anda mengikat tautan yang memiliki referensi terpotong, {{cmd:XREF}} `B` akan bertanya: `A` mengikat semuanya, `C` hanya mempertahankan bagian terpotong dari setiap referensi (garis dan busur dipotong di batas; teks dan blok bersarang tetap ada jika titik sisipnya berada di dalam).

Gambar yang Anda buka mungkin menautkan file yang tidak dapat dilihat CadCraft: ia memberi tahu berapa banyak yang belum dimuat. Gunakan {{cmd:XREF}}, `R`, dan pilih setiap file untuk melihatnya.

Saat Anda menyimpan, tautan yang dimuat **diikat** ke dalam file (program lain melihat blok dan layer biasa bernama `Plan$0$…`), dan riwayat menyebutkannya. Tautan yang belum dimuat tetap menjadi tautan ke filenya, di DWG maupun DXF.

## Buka di 3D

{{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Buka di ModelCraft}} ({{cmd:OPENIN3D}}) membuka gambar di aplikasi pemodelan 3D pada tab baru, sebagai DWG, tanpa mengunggahnya. Perubahan yang dibuat di sana tetap di sana; simpan di sana. Item menu hanya muncul di tempat aplikasi tersebut dapat menerima gambar yang diserahkan.

## Plot PDF

Tekan {{key:Mod+P}}, klik {{ui:Plot}}, atau ketik `PLOT`. PDF dibuat di dalam peramban dan diunduh, atau dibuka di tab baru untuk dicetak. Lihat [Plot ke PDF](topic:plot-pdf).

## Di mana file disimpan

Setiap penyimpanan dan setiap plot adalah unduhan, jadi file berpindah ke mana pun peramban Anda menaruh unduhan: biasanya folder Unduhan. Untuk memilih folder setiap kali, ubah pengaturan unduhan di peramban Anda; [Peramban dan komputer](common:browsers) menunjukkan letaknya.

Tidak ada yang Anda buka atau simpan yang dikirim ke kami. Lihat [Ke mana file Anda pergi](common:your-files).

## File proyek PLN dan PLA

CadCraft membuka gambar DWG dan DXF, bukan file milik Archicad sendiri (`.pln`, `.pla`, `.tpl`, `.bpn`). Saat Anda membukanya, CadCraft memberi tahu apa itu. Di Archicad, simpan tampilan atau layout yang Anda butuhkan sebagai DWG dan buka di sini, atau ekspor model sebagai IFC dan buka di BimCraft. Jika BimCraft dapat mengambil alih file tersebut, CadCraft menawarkan {{ui:Buka di BimCraft}}.

## Jika halaman ditutup sebelum Anda menyimpan

CadCraft menyimpan salinan setiap gambar yang Anda ubah, hanya di peramban ini, sesaat setelah Anda berhenti menyunting. Jika tab ditutup, peramban berhenti, atau komputer dimulai ulang sebelum Anda menyimpan, CadCraft menanyakan **Pulihkan pekerjaan Anda?** saat ia dimulai berikutnya: {{ui:Pulihkan}} membuka gambar lagi, belum tersimpan, di tab tersendiri. Menyimpan gambar menghapus salinannya. Lihat [Pulihkan pekerjaan Anda](common:recover).

## Daring dan luring

Membuka, menggambar, menyimpan (DWG dan DXF), dan memplot semuanya terjadi di komputer Anda, sehingga berfungsi tanpa koneksi setelah CadCraft dimuat.

Untuk memakai CadCraft tanpa koneksi sama sekali, klik {{ui:Simpan untuk offline}} di bilah atas saat Anda daring. Label akan menghitung ("Menyimpan 40 dari 212") dan berakhir di "Siap offline". Salinan yang disimpan mencakup pembaca DWG, sekitar 5 MB seluruhnya, sehingga **file DWG juga dapat dibuka secara luring** setelah disimpan. Klik tombol lagi untuk {{ui:Simpan lagi (ambil versi terbaru)}} atau {{ui:Hapus salinan offline}}. "Tidak dapat menyimpan" berarti beberapa file tidak terunduh: periksa koneksi dan klik untuk mencoba lagi. "Offline tidak tersedia" berarti jendela peramban ini tidak dapat menyimpan salinan (jendela privat dan beberapa komputer terkelola).

Tanpa salinan yang disimpan, pembaca DWG diambil saat Anda pertama kali membuka DWG setelah halaman dimuat, sehingga membuka DWG secara luring dapat gagal; file DXF tidak pernah memerlukannya. Jangan muat ulang halaman saat luring kecuali CadCraft sudah disimpan.

Lihat [Bekerja offline](common:offline) untuk rinciannya.

:::offline
Anda sedang luring. Gambar disimpan sebagai DWG atau DXF dan diplot seperti biasa, dan file DXF terbuka. File DWG terbuka jika CadCraft menampilkan "Siap offline", atau jika pembaca DWG sudah dimuat di tab ini.
:::

## Batasan dalam file

Batasan dan parameter (lihat [Beri batasan pada gambar](topic:constraints)) disimpan di DWG maupun DXF. Setiap objek yang dibatasi membawa catatan kecil CadCraft (data diperluas), dan blok tak terpakai bernama `CADCRAFT_PARAMETRIC` menyimpan batasan dan tabel parameter. Program lain membuka gambar secara normal dan mengabaikan keduanya; mereka mungkin menghapus blok tak terpakai saat dibersihkan. Catatan merujuk objek dengan kuncinya sendiri, bukan handle file, sehingga program yang menomori ulang handle tidak merusaknya. Saat program lain telah menghapus atau mengubah objek yang dibatasi, CadCraft membuang batasan pada objek itu saat membuka file dan memberi tahu berapa banyak. File tanpa itu terbuka tanpa batasan.

Sketsa yang diekspor dari pemodel part (`.json`) juga dapat dibuka: lihat [Pindahkan sketsa ke dan dari pemodel part lain](topic:solidworks-sketches).

## Belum tersedia

- Multileader sebagai objek multileader di DXF yang disimpan (R12 tidak memilikinya: disimpan sebagai apa yang digambarnya).
- Gambar raster (picture) di DXF yang disimpan (disimpan sebagai bingkainya; DWG mempertahankannya sebagai gambar raster), dan wipeout yang menyembunyikan apa yang ada di bawahnya.
- Menyimpan versi DXF yang lebih baru dari 2000.
- Penyimpanan cloud dan sinkronisasi antar komputer.

Lihat [Belum dibuat](topic:not-built-yet) untuk daftar lengkap.
