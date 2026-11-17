---
title: Belum dibuat
summary: Apa yang belum dilakukan build CadCraft ini, dan apa yang bisa Anda lakukan hari ini sebagai gantinya.
keywords: belum ada, batasan, ctb, stb, gaya plot, properti, ucs, anotatif, blok dinamis, spline, peta jalan, tidak didukung, simpan dwg, hatch, regangkan, array, gabungkan, matchprop, putuskan, ubah panjang, jenis garis, tebal garis, xref, awan, 3d, solid, boolean, multileader, wipeout
from: 87e56521
---

CadCraft sedang dalam pengembangan. Halaman ini mencantumkan apa yang tidak dilakukan build saat ini, agar Anda tidak perlu mencarinya. Setiap item menjelaskan apa yang bisa Anda lakukan hari ini sebagai gantinya.

## File dan penyimpanan

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| DWG CadCraft yang diperiksa di AutoCAD itu sendiri | Setiap versi yang disimpan dibaca kembali oleh tiga pembaca DWG program lain dan oleh CadCraft. Lihat [Apa yang disimpan dan diubah DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Menyimpan DXF yang lebih baru dari 2000 | Simpan sebagai DXF 2000, atau sebagai DWG hingga AutoCAD 2018. |
| Menyimpan ulang di atas file yang dibuka di peramban | Setiap penyimpanan mengunduh salinan baru; ganti file lama secara manual jika Anda mau. Di CadCraft Studio, {{key:Mod+S}} menulis kembali ke file yang Anda buka. |
| Penyimpanan dan sinkronisasi cloud antarkomputer | CadCraft belum mengirim penyimpanan Anda ke cloud: simpan file DWG dan DXF Anda di folder Anda sendiri. Di CadCraft Studio, [Riwayat](topic:history) mencantumkan versi cloud dari gambar yang disimpan di tempat lain, dan salinan penyimpanan Anda sendiri di komputer ini. |
| Overlay, dan menyunting gambar tertaut di tempat | Lampirkan gambar sebagai tautan dan muat ulang setelah mengubah gambar lainnya. Tautan tetap tautan saat Anda menyimpan sebagai DWG, dan {{cmd:XCLIP}} memotongnya. |
| Gambar di DXF; wipeout yang menyembunyikan apa yang ada di bawahnya | DXF menyimpan gambar sebagai bingkainya dengan nama file; DWG menyimpannya sebagai gambar. Lihat [Gambar dalam gambar](topic:pictures). Wipeout ditampilkan sebagai bingkainya. |
| Menyunting multileader dengan garis pemimpin melengkung, dengan garis pemimpin di kedua sisi isi, atau dengan blok yang diputar atau diskalakan tidak merata | Digambar seperti program lain menggambarnya dan bergerak sebagai satu. Multileader dengan garis pemimpin lurus ke satu tujuan, dan teks atau blok sebagai isi, masuk dalam keadaan bisa disunting ({{cmd:MLEADEREDIT}}). |
| Pada tabel dari program lain: sel yang berisi blok, format teks di dalam sel, batas dan warna per sel pada tabel DXF, tabel yang terpecah menjadi kolom | Tabel dibuka sebagai tabel yang bisa disunting ({{cmd:TABLEDIT}}) dan ditampilkan seperti yang digambar program lain sampai Anda menyuntingnya. Setelah itu CadCraft menggambarnya ulang dari selnya: teks biasa, rumus seperti `=G3*H3` dan `=Sum(I3:I9)`, perataan, dan tinggi teks. Sel blok kemudian kosong. Tabel DWG yang tidak disunting disimpan kembali dengan data sel yang dibawanya. |
| Objek tabel asli di DXF yang disimpan | DWG menyimpan tabel sebagai tabel yang bisa disunting program lain. DXF menyimpannya sebagai blok yang menggambarnya, dengan catatan milik CadCraft sendiri: CadCraft membukanya kembali sebagai tabel, sedangkan program lain melihat blok. Tabel yang dicerminkan atau diskalakan tidak merata disimpan begitu juga dalam DWG. |
| Salin dan tempel dengan program lain | Papan klip CadCraft bekerja di antara gambar CadCraft dan tab di peramban yang sama, bukan dengan program lain. Simpan sebagai DWG atau DXF dan buka di sana. Lihat [Salin, tempel, dan duplikat](topic:copy-paste). |

## Menggambar dan menyunting

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Pola hatch yang tidak dimiliki CadCraft, dan isian gradien persis seperti yang dicat program lain | Hatch yang dibuka dengan pola yang tidak dimiliki CadCraft ditampilkan sebagai satu nada. Isian gradien ({{cmd:GRADIENT}}) dicat dengan cara milik CadCraft untuk tiap jenis: serupa dengan program lain dalam jenisnya, tidak titik demi titik. DWG 2004 dan yang lebih baru menyimpannya sebagai hatch gradien sungguhan; dalam file DXF 2000 atau DWG 2000 hanya CadCraft yang membacanya kembali, dan program lain melihat isian padat. Pola dimuat dari file `.pat`, dan hatch dapat ditautkan ke batasnya lalu mengikutinya: lihat [Hatch dan area isian](topic:hatch). |
| Jenis garis dengan bentuk atau teks di dalamnya, dan tebal garis dalam DXF R12 yang disimpan | Bentuk dan teks dalam jenis garis file dihilangkan dari putus-putusnya; simpan sebagai DWG untuk mempertahankan tebal garis. |
| Hatch berpola dalam DXF yang disimpan | R12 tidak memiliki hatch: disimpan sebagai garis tepinya. Simpan sebagai DWG untuk mempertahankan pola. |
| Array yang dibuat program lain atau bisa disunting olehnya; baris dan level pada array jalur dan polar; array yang mengikuti kurva jalurnya | Array yang dibuat dengan ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; diubah dengan {{cmd:ARRAYEDIT}}) disimpan sebagai referensi blok dengan angka milik CadCraft: program lain menampilkan, memindahkan, mencetak, dan mengurainya, tetapi tidak dapat mengubah jumlahnya. Array yang dibuat di program lain dibuka di sini sebagai referensi blok biasa. Array jalur menyimpan salinan jalurnya: menyunting kurva setelahnya tidak memindahkan item. |
| Viewport lembar yang dipotong dari dan ke program lain | Viewport yang dipotong dengan {{cmd:VPCLIP}} atau dibuat dengan {{cmd:MVIEW}} Polygonal atau Object disimpan dengan garis tepi milik CadCraft: program lain membukanya sebagai persegi panjang di sekelilingnya, dan viewport yang dipotong di program lain dibuka di sini sebagai persegi panjangnya. DXF R12 hanya menyimpan persegi panjang. |
| {{cmd:STRETCH}} dengan poligon silang | Gunakan satu atau lebih jendela silang. |
| {{cmd:PEDIT}} Edit vertex (satu vertex sekali waktu di baris perintah) | Grip, dan penjelajah vertex di Properti (setiap vertex, lebarnya, dan bulge-nya). Sisa PEDIT sudah dibuat: lihat [Spline dan polyline](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} dan {{cmd:JOIN}} pada elips dan spline | {{cmd:EXPLODE}} spline (atau {{cmd:PEDIT}} padanya) untuk mendapatkan polyline yang bisa dipakai perintah-perintah ini. |
| Fillet dan chamfer antara segmen busur polyline dan segmen di sebelahnya; fillet yang menggabungkan garis menjadi polyline | {{cmd:EXPLODE}} polyline, lalu fillet potongannya. Busur fillet ditambahkan sebagai objek tersendiri. |
| Trim dan extend: opsi Project (3D) dan memperpanjang ujung busur polyline | Trim pada bidang gambar; untuk ujung busur, urai polyline atau gambar ulang busurnya. |
| Objek OLE: menyisipkan, menjalankan, atau menyuntingnya; menampilkan yang ada di DWG tempat file menaruhnya; gambar metafile | Lihat [Gambar](topic:pictures#objects-from-other-programs-ole). Objek DXF tampil sebagai bitmap atau bingkai berlabel; objek DWG dipertahankan, tidak digambar di tempatnya (OLELIST mencantumkannya dan menempatkan salinan gambar di tempat yang Anda tentukan). |
| Mengetik kode format (tebal, pecahan bertumpuk, warna per kata) dalam teks paragraf; font selain satu font gaya Helvetica; kolom | Format yang datang dalam file dipertahankan, digambar, dan disimpan (lihat Teks). Teks paragraf baru memiliki satu tinggi dan satu warna. |
| Teks paragraf yang disunting pada rotasinya | Editor terbuka datar; teks mempertahankan rotasinya. |
| Multileader yang disimpan sebagai objek multileader dalam DXF | DWG menyimpannya sebagai multileader, dengan setiap garis pemimpin dan blok sebagai isi. DXF menyimpan apa yang digambarnya (garis, mata panah, dan teks atau blok). |
| Dalam tabel ({{cmd:TABLE}}): teks yang membungkus dalam sel, tabel yang terpecah menjadi beberapa bagian, gaya teks tabel dan warna per jenis baris dalam dialog, tautan data ke file spreadsheet (`.xlsx`) atau yang membaca file sendiri | Teks sel hanya terpisah di tempat Anda memisahkannya ({{key:Alt+Enter}}); lebarkan kolom. {{cmd:DATALINK}} membaca file `.csv`, dan {{cmd:DATALINKUPDATE}} meminta Anda memilih file lagi. {{cmd:DATAEXTRACTION}} dan {{cmd:COUNTTABLE}} membuat tabel yang tidak mengikuti gambar dengan sendirinya: jalankan lagi (hitungan langsung: {{cmd:BOMTABLE}}). |
| Definisi atribut yang berdiri sendiri dalam file yang disimpan (di luar blok), atribut multibaris | Masukkan definisi atribut ke dalam blok sebelum menyimpan: sendirian, ia disimpan sebagai teks yang menampilkan tag. |
| Keadaan layer (menyimpan dan memulihkan layer mana yang nyala) | Gunakan {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, atau nyalakan dan matikan layer secara manual. |
| Pemilihan poligon jendela dan poligon silang, serta filter pilihan yang disimpan | Pagar (`F`), Jendela, Silang, Keluarkan (`R`), {{cmd:QSELECT}} untuk suatu aturan. |


## Panel Properti

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Menggambar pilihan Fit, dan posisi teks horizontal serta teks di bawah garis pada dimensi selain linear dan sejajar | Ini disimpan pada objek, ditampilkan di Properti dan disimpan; CadCraft menempatkan teks dengan aturannya sendiri. |
| Material yang dilihat program lain | File yang disimpan mempertahankan nama material untuk CadCraft; program lain menampilkan material layer. |
| Transparansi dalam file DWG 2000 dan DXF | Program lain menampilkan objek itu padat; CadCraft mempertahankan transparansinya. Simpan sebagai DWG 2004 atau yang lebih baru agar terlihat oleh semua orang. |
| Tautan hatch yang dibuat di program lain | CadCraft menyimpan tautannya sendiri dalam file DWG dan DXF 2000; tautan dari program lain tidak dibaca. Gunakan `HATCHEDIT` dan Tautan: lihat [Hatch dan area isian](topic:hatch). |
| Koordinat di Properti dalam UCS | Properti menampilkan koordinat dunia; bilah status dan {{cmd:ID}} menampilkan koordinat UCS. Lihat [Putar tampilan dan gunakan koordinat Anda sendiri](topic:ucs-and-turned-view). |
| Posisi terpisah untuk objek anotatif pada tiap skalanya; membaca catatan per skala yang disimpan program lain | Teks atau dimensi anotatif menyimpan daftar skala ({{cmd:OBJECTSCALE}}), dan tiap viewport menampilkannya pada ukuran untuk skalanya, di tempat yang sama. Daftar disimpan sebagai data milik CadCraft: program lain melihat objek pada satu skala tempat ia diukur, dan daftar yang dibuat di program lain tidak dibaca. Lihat [Satuan, kertas, dan skala](topic:units-papers-scales#annotate-by-scale). |
| Mengubah jarak, sudut, atau pembalikan blok dinamis; blok dinamis tetap dinamis saat Anda menyimpan dalam versi DWG lain atau sebagai DXF | Ubah keadaan visibilitasnya di Properti › {{ui:Custom}}; nilai lainnya tampil di sana hanya-baca. Ia tetap dinamis saat disimpan sebagai DWG dalam versi tempat gambar itu datang. Lihat [Blok dinamis](topic:dynamic-blocks). |
| Toleransi fit spline, derajat spline 6 ke atas, spline 3D | Titik fit dan kontrol, derajat 1 sampai 5, dan bobot sudah dibuat: lihat [Spline dan polyline](topic:splines). Tinggi spline (Z) tidak disimpan. |
## Alat presisi

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Pelacakan dari titik lintas perintah, dan dialog pengaturan pelacakan (sudut polar relatif, sudut tambahan) | {{cmd:POLARANG}} mengatur langkah; dapatkan kembali titik-titiknya pada perintah berikutnya. |
| Snap ke grid | Ketik koordinat; grid hanya panduan visual. |
| Opsi Busur dan Panjang saat memilih sudut area, dan Volume MEASUREGEOM | Gambar garis tepi dengan {{cmd:PLINE}} (termasuk busur), lalu {{cmd:AREA}} `O`. |
| Input dinamis untuk grip, dan daftar opsinya (panah bawah) | Baris perintah menampilkan opsi. |
| Sudut dalam derajat-menit-detik, grad, atau bearing surveyor | Ketik derajat desimal: `30.5` untuk 30°30'. |
| Dialog pengelola tampilan; tampilan bernama sebuah lembar yang kembali pada lembar itu | {{cmd:NAMEDVIEW}} mencantumkan dan memulihkan tampilan. File yang disimpan mempertahankannya, tetapi tampilan lembar kembali pada lembar pertama. |

## Lembar, dimensi, dan pencetakan

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Field untuk skala viewport, objek bernama seperti layer atau blok, hyperlink, dan field set lembar di luar nomor dan nama lembar; field yang ditulis sebagai objek field yang diperbarui program lain | {{cmd:FIELD}} memiliki tanggal, nama file, nomor lembar, nama dan jumlah, properti gambar ({{cmd:DWGPROPS}}), luas, panjang, dan properti lain sebuah objek, serta rumus, dalam teks, atribut, dan sel tabel. Program lain menampilkan field CadCraft sebagai teks yang terakhir dibacanya; CadCraft membaca field tanggal, nama file, properti, lembar, dan ekspresi milik program lain, dan membiarkan jenis lainnya sebagai teks. Skala viewport diketik secara manual. |
| Menyimpan gaya dimensi mana yang aktif; teks dimensi yang diseret ke tempat bebas | Gambar terbuka dengan Standard aktif. Teks berada di garis dimensi (DIMTEDIT Left / Right / Center). Lihat [Atur ukuran dimensi](topic:dimension-settings). |
| Dimensi sudut dua baris yang dapat disunting dari file terbuka yang tidak dapat dihitung CadCraft | Ditampilkan seperti yang digambar dalam file. Dimensi ordinat, panjang busur, dan radius patah terbuka sebagai dimensi yang bisa Anda sunting. |
| Memeriksa pembaca CTB terhadap file dari program lain (sudah dibuat, dari deskripsi yang dipublikasikan), gaya plot bernama (STB), dither, nomor pena, skala abu-abu dari CTB, dan penyesuaian jenis garis adaptif dalam gaya plot | Buat tabel di {{ui:Plot style tables}} (warna, abu-abu, tinta, tebal garis, jenis garis, ujung dan sambungan garis, serta gaya isian per warna): lihat [Tabel gaya plot](topic:plot-pdf#plot-style-tables). |
| Page setup | Pilih kertas, skala, dan gaya plot di dialog {{ui:Plot to PDF}}; lembar menyimpan gaya plotnya. |
| Bahasa Hindi dan skrip lain yang membutuhkan pembentukan kompleks dalam PDF, serta ideograf langka (cetak skrip Eropa, Siril, Yunani, Ibrani, Arab, Persia, Urdu, Thai, Tionghoa, Jepang, dan Korea) | Dicetak sebagai "?". |
| Teks skrip Arab dan Tionghoa, Jepang, atau Korea dalam PDF plot yang sama | Satu plot membawa satu font: salah satu dari dua skrip dicetak sebagai "?". |
| Penanda arah eksplisit dalam teks (embedding, override, isolate) | Diabaikan: setiap baris diurutkan hanya berdasarkan hurufnya. |
| Gambar di dalam halaman PDF yang dilampirkan, dalam plot | Garis, isian, dan teks halaman tercetak. Halaman yang hanya berupa gambar dimasukkan dengan {{cmd:SCANATTACH}}, dan gambar akan tercetak. Lihat [Underlay PDF](topic:pdf-underlay#plot-and-save). |
| Mengirim pekerjaan ke laser dari CadCraft Studio (Studio tidak memiliki Web Serial) | Simpan G-code dan kirim dengan program laser Anda sendiri, atau kirim dari Chrome atau Edge. Lihat [Kirim gambar ke laser](topic:laser-cutting#send-from-the-browser). |

## Batasan dan parameter

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Batasan pada lembar, dalam blok, pada elips, spline, atau teks | Tetapkan batasan di tab {{ui:Model}}, pada garis, polyline, lingkaran, busur, dan titik. |
| Halus (G2), dan membatasi lengkung busur polyline secara langsung | Singgung dan sama; segmen busur mengikuti kedua ujungnya. |
| Batasan dimensi referensi (driven), dan `3Point` di {{cmd:DCANGULAR}} | Dimensi biasa (DIMLINEAR …) menampilkan nilai tanpa menggerakkannya. |
| Batasan dimensi dengan ukuran tetap di kertas, dan mencetaknya | Ditampilkan di layar saja; tambahkan dimensi biasa untuk plot. |
| Batasan yang bertahan melalui EXPLODE, BREAK, JOIN dan perintah lain yang membuat objek baru, dan pada polyline yang dipangkas | Tetapkan lagi (AUTOCONSTRAIN membantu). {{cmd:MIRROR}} dan {{cmd:TRIM}} pada garis, busur, dan lingkaran mempertahankannya. |
| Tabel desain (konfigurasi) di CadCraft | Ubah parameter di panel. |
| Uji round trip yang teruji dengan SolidWorks | Periksa sketsa yang dibuat makro sebelum Anda mengandalkannya. |

## 3D

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| Fillet, chamfer, shell, dan loft; sweep sepanjang jalur yang naik (jalur 3D) | Ekstrusi garis luar dengan busur, dorong dan tarik permukaan, revolusi, dan sweep sepanjang jalur datar. |
| Ekstrusi ke arah selain ke atas | Gambar bentuk di tanah dan ekstrusi ke atas atau ke bawah (dengan kemiringan atau sepanjang jalur jika Anda mau); putar solid setelahnya. |
| Elevasi dan ketebalan objek 2D | Gambar berada di tanah (tinggi 0) di tab 3D. |
| Menyunting solid, region, dan bodi dari program lain; menampilkan yang ada di dalam blok; permukaannya pada permukaan swept, lofted, atau bentuk bebas lainnya; polyface dan mesh poligon | Solid di ruang model tampil di tab 3D apa adanya dan disimpan kembali tanpa perubahan dalam DWG; yang tidak tergambar didaftar saat tab 3D terbuka. Minta mesh sebagai 3D face di ruang model. Lihat [Solid dari program lain](topic:3d-solids#solids-from-other-programs). |
| Salin dan tempel solid | Di tab 3D, gunakan {{cmd:COPY}}. Papan klip hanya menyimpan objek 2D. |
| Potongan, tampilan yang mengikuti perubahan solid berikutnya, dan solid berbayang pada lembar yang dicetak | {{cmd:VIEWBASE}} menempatkan tampilan datar (snapshot); jalankan lagi setelah mengubah solid. |
| Pengaturan material, tekstur, dan pencahayaan | Gaya visual: berbayang, tepi, garis tersembunyi, rangka kawat, sinar-X. |
| Layer peta yang dicetak, di viewport lembar dan di tab 3D; gambar dari file yang disimpan bersama gambar; lokasi gambar yang ditulis untuk program lain dalam DWG 2000–2007 dan DXF R12 | Layer peta tampil di bawah ruang model di layar; sistem dan daftar layer disimpan bersama gambar: lihat [Layer peta di bawah gambar](topic:map-layers) |
| Pemindaian E57 lebih dari 6 juta titik atau 512 MB, file asli pembuat pemindai (RCP, RCS, FLS, LGS, TZF, ZFS), awan titik yang disimpan bersama gambar atau dicetak, snap ke awan di tab 3D, irisan tegak (potongan) di tab Model | Ekspor pemindaian besar atau milik pembuat sebagai LAS atau LAZ ([Format awan titik](topic:point-cloud-formats)); lampirkan awan setiap kali Anda membuka gambar; lacak dari irisan denah di tab Model: lihat [Lacak garis as-built di atas awan titik](topic:point-clouds) |
| Registrasi pemindaian: mencari target (bola, papan catur) dalam pemindaian sendiri, menyelesaikan semua pemindaian bersama (bundle adjustment), skala, registrasi terhadap model | Pilih titik yang cocok atau ketik koordinat target, lalu perbaiki satu pemindaian sekaligus dengan ICP: lihat [Registrasi beberapa pemindaian menjadi satu](topic:register-scans) |

## Rutin dan kustomisasi

| Belum dibuat | Sebagai gantinya, hari ini |
|---|---|
| LISP terkompilasi atau terlindungi (.fas, .vlx), program native (.arx, .crx, .dbx), dan VBA (.dvb) | Muat sumber .lsp rutin dengan {{cmd:APPLOAD}}. |
| `grread` LISP, reactor (`vlr-…`), fungsi kurva (`vlax-curve-…`), kamus dan data diperluas, `acet-…` dari Express Tools | Sisa bahasanya berjalan: lihat [Jalankan rutin LISP](topic:run-lisp). Baris perintah menyebut fungsi yang hilang saat rutin mencapainya. |
| Gambar dan slide dalam dialog rutin | Tampil sebagai bingkai kosong; sisa dialog tetap berfungsi. |
| CraftScript (.craft), Lua, dan Python di CadCraft | Jalankan di ruang kerja Script PartCraft. |
| Daftar layer, warna, dan jenis garis dalam gaya menu pita | Gunakan panel {{ui:Layers}} dan {{ui:Properties}}. |
| Startup Suite dan alias yang disimpan di komputer Anda atau disinkronkan | Disimpan di peramban ini; aplikasi desktop dan layanan cloud akan menyimpannya untuk Anda. Di Studio, `acad.lsp` dan `acaddoc.lsp` dibaca dari folder dukungan yang Anda pilih (Muat aplikasi). |

## Bantuan

Bantuan ini menjelaskan build ini. Saat sesuatu ditambahkan, ia dipindahkan dari halaman ini ke panduan langkah demi langkah.
