---
title: Peta perintah: apa yang diketik
summary: Setiap perintah CadCraft beserta nama pendeknya, dari A sampai Z, dibuat dari program itu sendiri, dan kebiasaan dari program gambar lain yang berbeda.
keywords: peta perintah, perintah, alias, nama pendek, datang dari, daftar perintah, apa yang diketik, hapus, pangkas, setara, perbedaan
from: 9426856f
---

CadCraft memakai nama perintah dan nama pendek yang sudah dikenal dari program gambar lain: ketik `L` untuk garis, `TR` untuk memangkas, `E` untuk menghapus. Jadi tidak ada tabel terjemahan yang harus dipelajari untuk sebagian besarnya: nama yang Anda kenal adalah nama di sini. Daftar di bawah adalah setiap perintah yang dimiliki CadCraft, dibuat dari program itu sendiri. {{key:Enter}} mengulangi yang terakhir; `HELP` di baris perintah mencetak daftar yang sama.

Yang sedikit berbeda, atau belum dibuat:

- **Simpan** mengunduh salinan di peramban ({{cmd:SAVE}}, {{cmd:SAVEAS}}); di CadCraft Studio ia menulis file. Lihat [Dari perangkat lunak gambar lain](topic:coming-from).
- **PLOT** membuat PDF (juga PNG dan SVG), dengan tabel gaya plot; tidak ada pengelola pengaturan halaman.
- **DIMSTYLE** dan **PEDIT** sudah dibuat; **PEDIT** tidak memiliki opsi Edit-vertex (grip yang melakukannya).
- **TABLE** belum dibuat; {{cmd:XREF}}, {{cmd:SPLINE}} dan {{cmd:WBLOCK}} sudah.
- Perintah milik suatu rutin (AutoLISP `C:NAME`) muncul setelah Anda memuatnya dengan {{cmd:APPLOAD}}; mereka tidak tercantum di sini.

## Semua perintah (402)

| Perintah | Nama pendek | Yang dilakukannya |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Mengorbitkan tampilan 3D dengan tombol kiri |
| `ACCESS` | `AX` | Menyalakan atau mematikan gambar tanpa penglihatan: hasil diucapkan lewat pembaca layar Anda, kursor keyboard di gambar, bunyi snap, dan perintah yang diucapkan. |
| `ALIASEDIT` |  | Menyunting alias perintah dalam satu file teks (format L, *LINE yang dikenal) |
| `ALIGN` | `AL` | Memindahkan dan memutar objek sehingga titik sumber jatuh di titik tujuan (satu, dua, atau tiga pasang), dan menskalakannya jika Anda mau |
| `ALIGNPANEL` | `ALP` | Membuka panel Sejajarkan dan distribusikan |
| `ALIGNTO` |  | Menyejajarkan tepi kiri, tengah, kanan, atas, tengah, atau bawah objek yang dipilih, pada pilihan, objek pertama atau terakhir yang dipilih, atau sebuah titik |
| `ANNOALLVISIBLE` | `ANNOALL` | Menampilkan objek anotatif di setiap skala, atau hanya di mana skala viewport (atau gambar) ada dalam daftarnya |
| `ANNOSCALE` | `CANNOSCALE` | Mengatur skala anotasi gambar: teks dan dimensi anotatif diubah ukurannya agar tercetak dengan ukuran yang sama |
| `APPLOAD` | `AP` | Memuat aplikasi: rutin LISP (.lsp) dan file dialognya (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Busur: 3 titik, Awal/Pusat/Akhir, Awal/Pusat/Sudut, Awal/Pusat/Panjang, Awal/Akhir/Sudut, Awal/Akhir/Arah, Awal/Akhir/Jari-jari, Pusat/Awal/Akhir, Pusat/Awal/Sudut, Pusat/Awal/Panjang, Lanjutkan |
| `AREA` | `AA` | Luas dan keliling dengan titik atau dari suatu objek; Tambah dan Kurangi menyimpan total berjalan (AA) |
| `ARRAY` | `AR` | Salinan dalam baris dan kolom, atau melingkar di sekitar pusat (AR) |
| `ARRAYASSOCIATIVITY` |  | Mengatur apakah perintah ARRAY membuat array yang tetap dapat disunting (1) atau salinan biasa (0) |
| `ARRAYCLOSE` |  | Mengakhiri penyuntingan objek sumber sebuah array |
| `ARRAYEDIT` |  | Mengubah array yang dibuat dengan opsi Asosiatif: jumlah, jarak, objek sumber, satu item |
| `ARRAYPATH` |  | Salinan objek sepanjang garis, busur, polyline, atau kurva lain |
| `ARRAYPOLAR` |  | Salinan melingkar di sekitar titik pusat |
| `ARRAYRECT` |  | Salinan dalam baris dan kolom |
| `ASBUILT` | `ASB` | ASBUILT membaca titik as-built yang diukur tim (CSV / TXT, seperti yang ditulis EXPORTPOINTS) dan membandingkannya dengan titik gambar: dalam atau di luar toleransi, tidak diukur, lebih. Menandainya di layer AS-BUILT dan mengunduh laporan CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Mendefinisikan atribut (tag yang diminta sebuah blok untuk sebuah nilai) untuk dimasukkan ke blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Menyunting nilai atribut referensi blok di baris perintah, satu per satu (Enter mempertahankan nilai) |
| `ATTSYNC` |  | Menyamakan referensi blok dengan definisi atributnya: yang baru ditambahkan dengan nilai bawaannya, yang dihapus dibuang, posisi dan teks diatur ulang; nilai dipertahankan |
| `AUDIT` |  | Memeriksa gambar yang terbuka untuk kerusakan: angka yang tidak terbatas, objek tanpa ukuran, layer, blok, gaya, dan jenis garis yang hilang, blok yang memuat dirinya sendiri, id yang sama, dimensi dan hatch yang rusak. Mendaftarkan temuan menurut jenis dan bertanya sebelum memperbaiki; perbaikannya satu langkah urungkan. |
| `AUNITS` | `ANGUNITS` | Cara sudut ditampilkan dan diketik: derajat desimal, derajat-menit-detik, atau bearing seperti N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Pelengkapan otomatis gambar nyala atau mati, atau mendaftarkan apa yang disarankan pola gambar sekarang. |
| `AUTOCONSTRAIN` |  | Menambahkan batasan sejajar, horizontal, dan vertikal di tempat geometrinya sudah dekat |
| `AUTODIM` | `ADIM` | Memberi dimensi menurut aturan: ukuran keseluruhan, rantai di sepanjang sisi, bukaan, diameter lubang, dan jarak grid, tanpa mengulang yang sudah diberi dimensi. |
| `AUTOSHEET` | `ASH` | Menata lembar sendiri: memilih kertas dan skala standar, serta menempatkan setiap tampilan dengan keterangan dan blok judul. |
| `BATTMAN` |  | Pengelola atribut blok: urutan, tag, prompt, nilai bawaan, dan mode atribut sebuah blok, lalu referensinya diperbarui |
| `BCLOSE` |  | Menutup editor blok: simpan blok atau buang perubahan |
| `BCONVERT` |  | BCONVERT menemukan geometri yang berulang dan mengubahnya menjadi referensi blok. Pilih objek yang berulang: setiap kelompok objek lain di ruang terbuka yang berbentuk sama, dipindahkan dan diputar dengan sudut apa pun, akan ditemukan, dan dengan Mirrored atau Scaled aktif, bayangan cermin dan salinan dengan ukuran lain juga. Beri blok baru nama dan titik dasar; pilihan dan setiap salinan menjadi referensi ke blok itu, masing-masing dengan rotasi dan skalanya sendiri. Atau pilih Block dan sebutkan blok yang ada untuk menemukan salinan lepas dari objeknya. Salinan harus memiliki layer, warna, jenis garis, dan tebal garis yang sama kecuali Properties diatur ke Ignore. Objek di layer terkunci dibiarkan. Satu langkah urungkan. |
| `BEDIT` | `BE` | Editor blok: menyunting objek dan atribut blok; BCLOSE menyimpan (BE) |
| `BLEND` |  | BLEND: spline di antara ujung dua kurva terbuka, dipilih dekat ujung untuk disambung. CONtinuity: Tangent mengikuti kedua arah, Smooth juga mengikuti bagaimana keduanya melengkung. |
| `BLOCK` | `B`, `BMAKE` | Membuat blok dari objek (menjadi satu referensi) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: setiap referensi ke satu blok menjadi referensi ke blok lain, di tempat yang sama dengan skala dan rotasi yang sama. Nilai atribut yang dimiliki kedua blok dipertahankan. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE menampilkan panel Blok dengan kursor di filternya. Panel menampilkan gambar setiap blok (yang paling baru ditempatkan lebih dulu), sebagai daftar atau kisi; klik gambar atau seretnya ke gambar untuk menempatkan blok dengan INSERT. Di bawah Libraries, tambahkan file DWG atau DXF Anda sendiri: blok-bloknya terdaftar dengan gambar dan disalin ke gambar ini saat Anda menempatkan satu. Di CadCraft Studio, folder gambar juga dapat ditambahkan, dan file serta folder diingat. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolom, pengelompokan, pengurutan, judul, total, dan catatan sebuah tabel daftar material |
| `BOMEXPORT` |  | Menyimpan tabel daftar material sebagai file .csv |
| `BOMTABLE` | `BOM` | Tabel daftar material yang hidup untuk satu zona, atau seluruh gambar |
| `BOMUPDATE` |  | Memperbarui setiap tabel daftar material sekarang, termasuk yang dibekukan |
| `BOMZONE` | `BZONE` | Area bernama dari gambar untuk daftar material: dua sudut, poligon, atau garis luar objek tertutup |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pilih titik di dalam area tertutup dan dapatkan polyline tertutup di sekelilingnya. Busur tetap busur. Islands juga menggaris area di dalamnya. |
| `BOX` |  | Kotak: dua sudut dan tinggi (3D) |
| `BPARAMETER` | `BPARAM` | Belum dibuat: menambahkan parameter (seperti Visibility) ke blok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parameter blok: parameter bernama dengan rumus, dan beberapa parameter visibilitas dalam satu blok. Bekerja di editor blok (menugaskan objek yang dipilih ke suatu keadaan) dan pada referensi yang dipilih (nilai dan keadaannya sendiri). |
| `BREAK` | `BR` | Memutus garis, busur, lingkaran, atau polyline di antara dua titik (BR) |
| `BREAKATPOINT` |  | Memisahkan garis, busur, atau polyline menjadi dua di satu titik |
| `BREAKLINE` |  | Menggambar garis dengan simbol putus; ukuran dan perpanjangannya di luar ujung diingat. |
| `BREPLACE` |  | BREPLACE menukar satu blok dengan blok lain. Selected: pilih referensi blok dan sebutkan blok pengganti. All: sebutkan blok dan penggantinya, dan setiap referensi di setiap ruang dan di dalam blok lain berubah. Referensi mempertahankan tempat, skala, rotasi, dan layernya, serta nilai atribut yang dimiliki kedua blok; nilai yang tidak memiliki tempat di blok baru dibuang dan disebutkan. |
| `BSEARCH` |  | BSEARCH menemukan blok. Name: sebagian nama blok, atau pola dengan * dan ?. Attribute: nilai (atau TAG=nilai) yang dipegang atribut referensi. Geometry: pilih objek atau satu referensi blok, dan blok yang bentuknya paling sedikit 85% mirip akan didaftarkan, terbaik dulu; ukuran, rotasi, dan cermin tidak dihitung. Referensi yang ditemukan di ruang terbuka dipilih, siap untuk perintah berikutnya. |
| `BURST` |  | Meledakkan referensi blok dan mempertahankan apa yang dikatakan atributnya: setiap nilai menjadi teks di layer atributnya. |
| `BVHIDE` | `BVH` | Di editor blok: menyembunyikan objek dalam keadaan visibilitas sekarang. |
| `BVSHOW` | `BVSH` | Di editor blok: menampilkan objek yang disembunyikan keadaan visibilitas sekarang (tampil pudar agar bisa dipilih). |
| `BVSTATE` | `BVS` | Di editor blok, pada blok dengan keadaan visibilitas: berpindah ke satu keadaan, atau menambah, mengganti nama, atau menghapus satu. |
| `CAL` |  | Menghitung panjang atau angka: + − * / dan tanda kurung, seperti yang Anda ketik di mana saja |
| `CENTERLINE` | `CL` | Garis tengah di antara dua garis: di tengah di antaranya, atau sepanjang garis bagi saat keduanya bertemu (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Tanda pusat: silang di pusat lingkaran atau busur, dengan garis pusat sampai sedikit melewatinya (CM) |
| `CHAMFER` | `CHA` | Membuat sudut di antara dua garis miring (D dua jarak, A panjang dan sudut, P setiap sudut polyline) |
| `CHSPACE` |  | CHSPACE: memindahkan objek antara lembar dan model lewat viewport. Mereka diskalakan dan diputar agar tampak sama dari sisi lain. Di lembar, mereka pergi ke model; saat Anda bekerja lewat viewport (MSPACE), mereka datang ke lembar. |
| `CIRCLE` | `C` | Pusat dan jari-jari, diameter, 2 atau 3 titik |
| `CLASS` |  | Menempatkan objek yang dipilih dalam sebuah kelas, atau tanpa pilihan menetapkan kelas aktif (? mendaftarkannya) |
| `CLASSES` | `CLS` | Panel Kelas: kelas mengurutkan objek lintas layer; menampilkan, menyembunyikan, dan memberi gaya padanya, serta menimpanya per viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Menambatkan atau membuat baris perintah mengambang, menjadikannya satu baris, mengatur baris riwayatnya, atau membuka riwayat (F2) |
| `COMPARESETTINGS` | `CMPSET` | Membandingkan gaya dimensi, gaya teks, layer, lembar, atau satuan: dua di gambar ini, atau gambar ini dengan gambar lain yang terbuka, dan menyalin nilai ke seberang. |
| `CONSTRAINTBAR` | `CBAR` | Menampilkan atau menyembunyikan bilah batasan (Showall / Hideall, atau per objek) |
| `COPY` | `CO`, `CP` | Menyalin objek, sebanyak kali Anda mengklik |
| `COPYBASE` |  | Menyalin objek ke papan klip dengan titik dasar yang Anda pilih |
| `COPYCLIP` |  | Menyalin objek ke papan klip (Ctrl+C); PASTECLIP menempatkannya |
| `COUNT` | `BCOUNT` | Menghitung referensi blok: pilih satu untuk memilih dan menghitung setiap referensi bloknya |
| `COUNTTABLE` |  | Menempatkan tabel jumlah blok |
| `CREDITS` |  | Menempatkan atribusi Pustaka di gambar sebagai tabel. Jalankan lagi untuk memperbarui tabel dari item di gambar sekarang. |
| `CURSORSIZE` |  | Ukuran bidik silang: 100 menjalankannya dari tepi ke tepi gambar (Pengaturan › Kursor › Layar penuh) |
| `CUTCLIP` |  | Memotong objek ke papan klip (Ctrl+X): salin, lalu hapus |
| `CYLINDER` | `CYL` | Silinder: pusat, jari-jari, dan tinggi (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Mendaftarkan blok, atributnya, dan properti objek sebagai tabel di gambar atau file CSV |
| `DATALINK` | `DL` | Tabel dari file CSV yang mengingat file itu, sehingga dapat dibaca lagi |
| `DATALINKUPDATE` | `DLU` | Membaca lagi file tautan data dan mengisi ulang tabelnya |
| `DCALIGNED` | `DCALI` | Batasan dimensi: jarak sebenarnya antara titik, titik dan garis, atau dua garis |
| `DCANGULAR` | `DCANG` | Batasan dimensi: sudut antara dua garis, atau sudut busur |
| `DCCONVERT` |  | Mengubah dimensi yang digambar pada geometri yang dapat dibatasi menjadi batasan dimensi |
| `DCDIAMETER` | `DCDIA` | Batasan dimensi: diameter lingkaran atau busur |
| `DCDISPLAY` |  | Menampilkan atau menyembunyikan batasan dimensi di gambar |
| `DCHORIZONTAL` | `DCHOR` | Batasan dimensi: jarak horizontal |
| `DCLINEAR` | `DCLIN` | Batasan dimensi: jarak horizontal atau vertikal, dari tempat Anda menempatkannya |
| `DCRADIUS` | `DCRAD` | Batasan dimensi: jari-jari lingkaran atau busur |
| `DCVERTICAL` | `DCVER` | Batasan dimensi: jarak vertikal |
| `DELBLOCKS` |  | Menghapus blok: setiap referensi (yang bersarang juga, di setiap lembar) dan definisinya |
| `DELCONSTRAINT` | `DELCON` | Menghapus setiap batasan (geometris dan dimensi) dari objek yang Anda pilih |
| `DELOPENING` |  | Mengeluarkan pintu atau jendela dari dinding. |
| `DESCRIBE` | `DESC` | Mengatakan apa yang ada di gambar: berapa objek, jenisnya apa, seberapa besar, apa yang dipilih. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Menghapus pilihan (Esc) |
| `DETAILS` | `DET` | Detail milik perusahaan Anda sendiri, ditemukan untuk apa yang sedang Anda gambar: cari, tambahkan blok, daftar, buang, nyalakan atau matikan tawarannya. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Menggambar diagram dari teks: diagram alur Mermaid, diagram komponen PlantUML, D2, daftar dari-ke, atau XML draw.io, sebagai blok dan konektor yang dapat Anda sunting |
| `DIMALIGNED` | `DAL`, `DIMALI` | Jarak sebenarnya antara dua titik |
| `DIMANGULAR` | `DAN`, `DIMANG` | Sudut antara dua garis, sudut busur, atau dengan tiga titik |
| `DIMARC` | `DAR` | Dimensi panjang busur: jarak sepanjang busur, dengan simbol busur (DAR) |
| `DIMASZ` |  | Pengaturan dimensi: ukuran panah |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Dimensi bertumpuk dari satu garis dasar |
| `DIMBREAK` | `DBREAK` | Memutus garis dimensi dan garis perpanjangan di tempat mereka bersilangan dengan objek lain (Auto), di antara dua titik (Manual), atau menghapus putusnya |
| `DIMCONSTRAINT` | `DCON` | Batasan dimensi: linear, sejajar, sudut, jari-jari, diameter, konversi |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Rantai dimensi, masing-masing dari ujung yang terakhir |
| `DIMDEC` |  | Pengaturan dimensi: jumlah desimal |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter busur atau lingkaran |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Membebaskan dimensi dari objek yang diikatnya (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Mengubah teks dimensi (Home, New text, Rotate) atau memiringkan garis perpanjangan (Oblique) |
| `DIMEXE` |  | Pengaturan dimensi: perpanjangan di luar garis dimensi |
| `DIMEXO` |  | Pengaturan dimensi: offset dari titik asal |
| `DIMGAP` |  | Pengaturan dimensi: celah di sekitar teks |
| `DIMINSPECT` |  | Dimensi inspeksi: bingkai di sekeliling nilai dengan label dan seberapa sering bagian itu diperiksa |
| `DIMJOGGED` | `DJO`, `JOG` | Dimensi jari-jari berpatah: jari-jari yang digambar dari titik yang lebih dekat saat pusatnya jauh (DJO) |
| `DIMJOGLINE` | `DJL` | Menambahkan simbol patahan pada garis dimensi linear atau sejajar, untuk menunjukkan jarak tidak digambar sesuai skala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Jarak horizontal atau vertikal (R untuk sudut apa pun) |
| `DIMLUNIT` |  | Pengaturan dimensi: format panjang (1 ilmiah, 2 desimal, 3 teknik, 4 arsitektural, 5 pecahan) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Dimensi ordinat: jarak X atau Y dari sebuah titik ke titik asal UCS, pada leader (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Menimpa variabel dimensi pada dimensi yang dipilih tanpa mengubah gayanya; Clear mengembalikan gaya (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Jari-jari busur atau lingkaran |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Mengikat titik dimensi ke objek, sehingga ia mengikuti dan mengukur ulang saat objek itu bergerak (DRE) |
| `DIMSCALE` |  | Pengaturan dimensi: skala keseluruhan (ukuran × ini) |
| `DIMSPACE` |  | Jarak yang sama antara dimensi sejajar, diukur dari dimensi dasar (0 menyejajarkannya, Auto dua kali tinggi teks) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Membuat, mengubah, menjadikan aktif, menghapus, menerapkan, dan membandingkan gaya dimensi bernama (dialog; -DIMSTYLE di baris perintah) |
| `DIMTEDIT` | `DIMTED` | Memindahkan teks dimensi ke kiri, kanan, atau tengah garis dimensi, atau memutarnya |
| `DIMTEXTUNIT` | `DTU` | Teks dimensi dalam mm, cm, m, atau km, atau dalam satuan gambar itu sendiri: dimensi yang dipilih, jika tidak yang baru (DTU) |
| `DIMTXT` |  | Pengaturan dimensi: tinggi teks |
| `DIST` | `DI` | Jarak dan sudut antara dua titik |
| `DISTRIBUTE` |  | Memberi jarak yang sama pada objek yang dipilih, ke samping atau naik-turun: langkah yang sama antara pusat, atau celah yang sama; dua yang di luar tetap |
| `DIVIDE` | `DIV` | DIVIDE (DIV): tanda yang memotong garis, busur, lingkaran, polyline, spline, atau elips menjadi bagian yang sama. Titik, atau dengan Block sebuah blok di setiap tanda. |
| `DOCUMENTS` | `DOCS` | Membuka panel Dokumen: check-out dan check-in gambar, revisi, keadaan rilis, dan persetujuan untuk folder proyek |
| `DOOR` | `DR` | Menempatkan pintu di dinding. Sisi yang Anda klik adalah sisi tempat pintu berayun. |
| `DRAWORDER` |  | Mengubah urutan gambar: membawa objek ke depan, mengirimnya ke belakang, atau menempatkannya di atas atau di bawah objek lain. |
| `DUPLICATE` | `DUP` | Salinan yang bergerak mengikuti penunjuk: klik untuk meletakkannya (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Properti gambar: judul, penulis, dan lainnya, serta pasangan nama dan nilai milik Anda sendiri |
| `DXFOUT` |  | Mengunduh gambar sebagai DXF R12 (Simpan mempertahankan formatnya sendiri) |
| `EATTEDIT` | `DDATTE` | Menyunting atribut referensi blok: nilai, teks, dan properti, satu atribut per waktu |
| `ELLIPSE` | `EL` | Titik ujung sumbu dan setengah sumbu yang lain |
| `ERASE` | `E`, `DELETE` | Menghapus objek |
| `EXPLODE` | `X` | Memecah polyline, blok, dan dimensi menjadi bagiannya |
| `EXPORT` | `EXP` | Menyimpan salinan gambar dalam jenis file yang ditulis sebuah add-on |
| `EXPORT3D` | `3DEXPORT` | Mengekspor model 3D: GLB, OBJ, atau STL |
| `EXPORTPOINTS` | `EXPPTS` | Menulis titik, dan titik sisip blok dengan satu atribut sebagai deskripsi, ke file CSV atau TXT (PNEZD, PENZD, atau XYZ) untuk program BIM dan survei |
| `EXTEND` | `EX` | Memperpanjang objek untuk bertemu yang lain: klik dekat ujung, seret melewati beberapa, atau Shift+klik untuk memangkas |
| `EXTRIM` |  | EXTRIM: pilih satu tepi potong, lalu satu sisi. Semua yang bersilangan dengan tepi dipangkas di sisi itu. Potongan yang akan hilang tampil saat Anda menggerakkan penunjuk. |
| `EXTRUDE` | `EXT` | Mengekstrusi objek 2D tertutup menjadi solid (3D) |
| `FIELD` |  | Menempatkan bidang dalam teks, sel tabel, atau atribut: tanggal, nama file, nomor lembar, properti gambar, luas atau panjang objek, atau rumus |
| `FILLET` | `F` | Membulatkan atau memotong sudut di antara dua objek (R jari-jari, P setiap sudut polyline, M beberapa) |
| `FIND` |  | Mencari dan mengganti kata dalam teks, nilai atribut, dan teks dimensi |
| `FLATTEN` |  | Mengatur tinggi (Z) dan ketebalan objek yang dipilih menjadi 0, di blok yang dipakainya juga. |
| `FLOOR` |  | Memilih lantai untuk digambar, menambah satu, atau memindahkan atau menyalin pilihan ke sana. |
| `FLOORLAYERS` |  | Mengubah lantai menjadi layer bernama Floor-Layer, untuk file yang akan dikirim ke orang tanpa lantai. |
| `FLOORS` | `FLR` | Membuka panel Lantai: menumpuk lantai dalam satu ruang model. |
| `GCCOINCIDENT` |  | Batasan: dua titik bertemu, atau sebuah titik tetap di objek |
| `GCCOLLINEAR` |  | Batasan: dua garis tetap pada satu garis |
| `GCCONCENTRIC` |  | Batasan: dua lingkaran atau busur berbagi pusat |
| `GCEQUAL` |  | Batasan: dua garis tetap sama panjang, atau dua lingkaran/busur sama jari-jari |
| `GCFIX` |  | Batasan: sebuah titik atau seluruh objek tetap di tempatnya |
| `GCHORIZONTAL` |  | Batasan: sebuah garis (atau dua titik) tetap horizontal |
| `GCPARALLEL` |  | Batasan: dua garis tetap sejajar |
| `GCPERPENDICULAR` |  | Batasan: dua garis tetap siku-siku |
| `GCSYMMETRIC` |  | Batasan: dua titik, garis, atau lingkaran saling bercermin melintasi sebuah garis |
| `GCTANGENT` |  | Batasan: sebuah garis dan lingkaran atau busur (atau dua di antaranya) tetap menyinggung |
| `GCVERTICAL` |  | Batasan: sebuah garis (atau dua titik) tetap vertikal |
| `GDSIN` | `GDS` | Melihat tata letak IC (file aliran GDSII): setiap layer dan datatype sebagai layer gambar, datar, dalam satuan pengguna; hanya untuk melihat dan mengukur (lab spike) |
| `GEOMCONSTRAINT` | `GCON` | Batasan geometris: horizontal, vertikal, sejajar, menyinggung, koinsiden… |
| `GLBOUT` |  | Mengekspor model 3D sebagai GLB (glTF) |
| `GRADIENT` | `GD` | Mengisi area dengan gradasi dari satu atau dua warna |
| `GRID` |  | Mengatur grid: jarak antar garis, setiap garis ke-N sebagai garis utama, ON atau OFF, atau Auto untuk mengikuti zoom lagi |
| `GRIDMOVE` | `GM` | Memindahkan garis grid dan membawa yang tergantung padanya: dinding meregang, kolom, gelembung, dan tag bergerak, dimensi mengikuti. |
| `GROUP` | `G` | GROUP (G): memberi objek yang dipilih nama yang mereka bagi. Klik pada salah satunya kemudian memilih semuanya. Enter pada nama membuat grup tanpa nama. |
| `GROUPEDIT` |  | GROUPEDIT: mengubah grup. Pilih salah satu objeknya atau berikan Name, lalu Add atau Remove objek, REName, ubah Description-nya, atau tentukan apakah klik memilih seluruhnya. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Mengisi area dengan isian solid atau pola: klik di dalamnya, atau pilih objek tertutup (H) |
| `HATCHEDIT` | `HE` | Mengubah hatch: pola, skala, sudut, titik asal, dan tautannya ke batas. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Membuat ulang polyline batas dari hatch, ditautkan atau tidak |
| `HATCHTOBACK` |  | Mengirim setiap hatch ke belakang segalanya. |
| `HELP` | `?` | Daftar ini |
| `HIDEOBJECTS` |  | Menyembunyikan objek yang dipilih sampai UNISOLATEOBJECTS. Tidak disimpan bersama gambar. |
| `HISTORY` | `HIST` | HISTORY (HIST): versi gambar ini — salinan yang disimpan di komputer ini saat Studio menyimpannya, dan versi cloud — untuk dibuka, dipulihkan, dan dibandingkan dengan perubahan yang ditampilkan dalam warna. |
| `ID` |  | Koordinat sebuah titik |
| `IMAGE` | `IM` | Memberi CadCraft file gambar yang dipakai gambar (DWG hanya menyimpan di mana mereka berada). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Menempatkan gambar (PNG atau JPEG) dari file. |
| `IMAGECLIP` | `ICL` | Memotong gambar ke persegi panjang atau poligon, atau menghapus potongannya. |
| `IMPORT` | `IMP` | Mengimpor file dari jenis yang dibaca sebuah add-on, ke gambar ini |
| `INSERT` | `I`, `DDINSERT` | Menempatkan blok (S skala, R putar); F dari file DWG/DXF, L dari pustaka |
| `INTERSECT` | `IN` | Hanya menyimpan apa yang dimiliki solid bersama (3D), atau area yang dimiliki region 2D bersama |
| `ISODRAFT` |  | ISODRAFT: gambar isometrik nyala atau mati, atau langsung di bidang Left, Top, atau Right. Saat aktif, Ortho dan pelacakan polar mengikuti dua sumbu bidang, grid digambar isometrik, dan ELLIPSE memiliki Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Hanya menampilkan objek yang dipilih; segalanya yang lain di ruang ini disembunyikan sampai UNISOLATEOBJECTS. Tidak disimpan bersama gambar. |
| `ISOPLANE` |  | ISOPLANE: memilih bidang isometrik untuk digambar: Left, Top, atau Right. Enter berpindah ke yang berikutnya, seperti F5 saat gambar isometrik aktif. |
| `JOIN` | `J` | Menyambung garis, busur, dan polyline yang bertemu ujung ke ujung menjadi satu polyline; garis pada satu garis menjadi satu garis (J) |
| `LASER` | `LASERCUT` | Membuka panel Laser: mengirim layer ke pemotong atau pengukir laser (kode G GRBL) |
| `LASSOMODE` |  | Menekan dan menyeret menggambar lasso (1) atau persegi panjang (0) |
| `LAYDEL` |  | Menghapus layer dan setiap objek di atasnya (di model, di lembar, dan di blok) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Membuka pengelola Layer: setiap layer dalam satu tabel |
| `LAYERPANEL` |  | Menampilkan panel layer |
| `LAYFRZ` |  | Membekukan layer setiap objek yang Anda pilih |
| `LAYGROUP` | `LG` | Mengelompokkan layer menjadi folder di panel Layer. |
| `LAYISO` |  | Mengisolasi layer objek yang dipilih (setiap layer lain mati) |
| `LAYLOCKFADE` |  | Mengatur seberapa pudar objek di layer terkunci, dan apakah klik dapat memilihnya. |
| `LAYMCUR` |  | Menjadikan layer objek yang Anda pilih sebagai layer aktif |
| `LAYMRG` |  | Menggabungkan layer: objeknya pindah ke layer tujuan, dan layer yang digabung hilang |
| `LAYOFF` |  | Mematikan layer setiap objek yang Anda pilih |
| `LAYON` |  | Menyalakan setiap layer |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Lembar baru dengan blok judul dan viewport |
| `LAYTHW` |  | Mencairkan setiap layer |
| `LAYUNISO` |  | Menyalakan lagi layer yang dimatikan LAYISO |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Mengubah teks yang diketik dengan font Vietnam lama (font TCVN3 / ABC seperti .VnTime, dan font VNI seperti VNI-Times) menjadi Unicode. Teks seperti itu sudah tampil sebagaimana dibaca; perintah ini menulisnya ulang secara permanen, dengan jumlah dan satu langkah urungkan. |
| `LENGTHEN` | `LEN` | Memperpanjang atau memendekkan garis, busur, dan polyline: dengan jumlah, persentase, sampai total, atau dengan menyeret (LEN) |
| `LIBRARY` | `LIB` | Panel pustaka: menempatkan item, memeriksa pembaruan, atribusi |
| `LIMITS` |  | Mengatur batas gambar: ON, OFF, atau sudut kiri-bawah dan kanan-atas. Dengan batas ON, titik di luarnya ditolak |
| `LINE` | `L` | Segmen lurus, masing-masing objek tersendiri |
| `LINETYPE` | `LT`, `CELTYPE` | Jenis garis yang didapat objek baru (menurut layer, menurut blok, atau yang bernama) |
| `LINKVIEWS` | `SYNCVIEWS` | Menggeser dan memperbesar setiap panel bersama (layar terbagi), untuk membandingkan dua gambar atau revisi |
| `LISPEDIT` | `VLIDE` | LISPEDIT (atau VLIDE) membuka editor LISP: jendela untuk menulis, memuat, dan mencoba rutin. Load into the drawing membaca setiap bentuk, seperti memuat file dengan APPLOAD, dan membuat perintahnya. Run selection mengevaluasi bentuk yang dipilih, atau bentuk tempat kursor berada. Konsol menampilkan apa yang dicetak rutin dan setiap kesalahan dengan barisnya. Tanda kurung yang berpasangan ditandai saat Anda mengetik dan Enter menjorokkan baris baru. New, Open, dan Save bekerja pada file .lsp. Daftar di samping teks menampilkan fungsi yang didefinisikan rutin, yang dipanggilnya tetapi belum dimiliki LISP ini, dan setiap fungsi yang dimilikinya. Jendela tidak memblokir gambar, sehingga rutin dapat meminta titik; Stop atau Esc mengakhiri rutin yang sedang berjalan. |
| `LIST` | `LI`, `LS` | Mendeskripsikan objek dalam riwayat |
| `LTSCALE` | `LTS` | Skala jenis garis gambar (setiap putus dan celah dikalikan dengannya) |
| `LWDISPLAY` | `LWT` | Menampilkan atau menyembunyikan tebal garis di layar (tombol LWT di bilah status) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Tebal garis yang didapat objek baru (menurut layer, menurut blok, bawaan, atau mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | layer peta di bawah ruang model: sistem koordinat gambar, ubin, WMS, WMTS, ArcGIS, gambar |
| `MASSPROP` |  | MASSPROP: sifat penampang region dan objek tertutup: luas, keliling, centroid, momen dan hasil kali inersia, jari-jari girasi, dan sumbu utama. Tepat untuk garis dan busur. Dapat menulis laporan ke file teks. |
| `MATCHPROP` | `MA`, `PAINTER` | Mencocokkan properti: menyalin layer, warna, dan lainnya dari satu objek ke objek lain (MA) |
| `MEASURE` | `ME` | MEASURE (ME): tanda setiap panjang tertentu di sepanjang garis, busur, lingkaran, polyline, spline, atau elips, dari ujung terdekat pilihan Anda. Titik, atau dengan Block sebuah blok di setiap tanda. |
| `MEASUREGEOM` | `MEA` | Mengukur jarak, jari-jari, sudut, atau luas (MEA) |
| `MINSERT` |  | MINSERT: menempatkan blok dalam baris dan kolom sekaligus. Setiap satu adalah referensi tersendiri, sehingga Anda dapat memindahkan atau menghapus masing-masing. |
| `MIRROR` | `MI` | Mencerminkan objek melintasi sebuah garis |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: panah, leader, dan catatan, sebagai satu objek (MLD) |
| `MLEADERALIGN` | `MLA` | Menyejajarkan multileader dengan salah satunya sepanjang arah, dengan jarak sama, atau didistribusikan di antara dua titik (MLA) |
| `MLEADERCOLLECT` | `MLC` | Mengumpulkan beberapa multileader menjadi satu: blok mereka dalam baris atau kolom, atau catatannya satu di bawah yang lain (MLC) |
| `MLEADEREDIT` | `MLE` | Menambah garis leader ke multileader atau menghapusnya; mengganti kontennya antara teks dan blok (MLE) |
| `MLINE` |  | Menggambar garis sejajar bersama, tersambung di sudut. |
| `MOVE` | `M` | Memindahkan objek dengan titik dasar dan titik kedua |
| `MSPACE` | `MS` | Bekerja pada model lewat viewport lembar yang terbuka (atau klik dua kali di dalam viewport). |
| `MTEXT` | `MT`, `T` | Teks paragraf: seret lebarnya, lalu ketik di tempat; Enter memulai paragraf baru (T) |
| `MVIEW` | `MV` | Viewport ke model, pada tata letak |
| `NAMEDVIEW` | `NV`, `VIEWS` | Tampilan bernama: menyimpan tampilan di layar (atau jendela) dengan nama dan kembali ke sana (NV) |
| `NCOPY` |  | Menyalin objek dari referensi blok atau gambar tertaut ke dalam gambar, tanpa memecahnya. |
| `NEARBY` |  | Mengatakan apa yang berada dekat kursor, terdekat dulu, dengan jarak dan sisinya. |
| `NEW` |  | Memulai gambar baru |
| `OBJECTSCALE` | `OBJSCALE` | Skala anotasi teks dan dimensi anotatif: menambah skala, menghapus satu, menambah skala sekarang, atau mendaftarkannya (setiap viewport menampilkannya pada ukuran untuk skalanya sendiri) |
| `OBJOUT` |  | Mengekspor model 3D sebagai OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Standar kantor: tinggi teks di kertas, layer, bidang blok judul, dan templat dalam satu catatan. Menampilkan yang berlaku dan asalnya; Import file .json ke gambar ini, tambahkan layer kantor yang belum dimiliki gambar, mendaftarkan bidang blok judul. |
| `OFFSET` | `O` | Salinan sejajar pada suatu jarak |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: bagaimana OFFSET menutup celah di sudut luar polyline. 0 memperpanjang segmen, 1 menambahkan busur, 2 menambahkan potongan lurus. Disimpan untuk sesi ini. |
| `OLELIST` | `OLES` | Mendaftarkan objek OLE yang dibawa gambar dan menempatkan salinan gambarnya di tempat yang Anda pilih |
| `OPEN` |  | Membuka DWG atau DXF dari komputer ini |
| `OPENIN3D` |  | Membuka gambar ini di aplikasi pemodelan 3D, di tab baru (tidak ada yang diunggah) |
| `OPTIONKEYS` | `OPTKEYS` | Memberi opsi perintah huruf milik Anda (ARRAY.PO, P), dalam satu file teks |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Membuka menu snap objek: pilih snap mana yang aktif. Juga klik kanan pada Snap di bilah status. |
| `OVERKILL` |  | Menghapus objek duplikat dan menggabungkan garis atau busur yang tumpang tindih atau bersambung ujung ke ujung, dalam toleransi. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parameter: parameter pengguna dan batasan dimensi dalam satu tabel |
| `PARTSLIST` | `PLIST` | Tabel daftar suku cadang untuk setiap suku cadang standar dan profil baja yang ditempatkan dari Pustaka |
| `PASTEAREA` | `PAREA` | Menempelkan area yang disalin di MarkupCraft (Copy area) pada ukuran sebenarnya, sebagai gambar. |
| `PASTEBLOCK` |  | PASTEBLOCK: menempelkan apa yang Anda salin sebagai satu blok. Blok mendapat nama sendiri; RENAME memberinya nama Anda. |
| `PASTECLIP` |  | Menempelkan papan klip: ia mengikuti kursor, klik di tempat ia akan diletakkan (Ctrl+V) |
| `PASTEORIG` |  | Menempelkan papan klip pada koordinat tempat ia disalin (Ctrl+Shift+V) |
| `PDF` |  | Memberi CadCraft file PDF yang dipakai underlay gambar |
| `PDFADJUST` |  | Memudarkan, mengatur kontras, monokrom, atau mematikan underlay PDF |
| `PDFATTACH` | `PDFATT` | Melampirkan halaman PDF sebagai underlay (PDFATTACH) |
| `PDFCLIP` |  | Memotong underlay PDF ke persegi panjang atau poligon |
| `PDFIMPORT` | `PDFIM` | Mengubah garis, isian, dan teks halaman PDF menjadi objek gambar (PDFIMPORT) |
| `PDFLAYERS` |  | Menyalakan atau mematikan layer underlay PDF |
| `PEDIT` | `PE` | Menyunting polyline: menutup, membuka, menyambung, lebar, kurva pas, kurva spline, dekurve, pembuatan jenis garis, membalik; garis, busur, dan spline dapat diubah menjadi polyline |
| `PENPRESSURE` |  | Apakah tekanan goresan pena mengatur tebal garis dari yang dibuat SKETCHFIX dan SKETCHLIVE (aktif secara bawaan). Disimpan di peramban ini. |
| `PHOTOSKETCH` | `PSK` | Mengubah foto sketsa tangan di kertas menjadi garis dan busur dengan skala, meluruskan perspektif, dan memberi setiap warna pena layernya sendiri. |
| `PICKSTYLE` |  | PICKSTYLE: apakah memilih satu objek dalam grup memilih seluruh grup (1, pengaturan awal) atau hanya objek itu (0). Disimpan untuk sesi ini. |
| `PLAN` |  | Memutar tampilan sehingga sumbu X UCS (Current ucs, UCS tersimpan, atau World) datar di layar. Tidak ada yang di gambar bergerak. |
| `PLINE` | `PL` | Polyline dari segmen garis dan busur |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot ke PDF: sebuah lembar, atau model pada suatu skala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabel gaya plot: atur apa yang tercetak untuk setiap warna (warna, hitam, abu-abu, tinta, tebal garis); disimpan bersama gambar (STYLESMANAGER) |
| `POINT` | `PO` | Objek titik |
| `POINTCLOUD` | `PC` | awan titik yang dilampirkan: iris, tinggi, ketebalan, warna, ukuran, terlihat, zoom, lepaskan |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | melampirkan awan titik (LAS, LAZ, XYZ, PTS) di bawah gambar |
| `POLARANG` |  | Langkah pelacakan polar dalam derajat (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Poligon beraturan |
| `PRESSPULL` |  | Mendorong atau menarik muka solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Membuka panel Properti (juga Ctrl+1, atau klik dua kali objek) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Melipat panel Properti ke tepi jendela |
| `PSPACE` | `PS` | Keluar dari viewport tempat Anda bekerja dan kembali ke lembar (atau klik dua kali di luarnya). |
| `PUBLISH` | `-PUBLISH` | Mencetak beberapa atau semua lembar ke satu PDF (satu halaman dan satu bookmark per lembar) |
| `PURGE` | `PU` | Menghapus definisi blok yang tidak dipakai |
| `QDIM` |  | Dimensi cepat: memberi dimensi beberapa objek sekaligus (kontinu, dasar, bertingkat, ordinat, jari-jari, atau diameter) |
| `QPMODE` | `QP` | Properti Cepat oleh kursor nyala atau mati |
| `QSELECT` | `QS` | Pilih cepat: setiap objek dari suatu jenis yang layer, warna, ukuran, atau namanya cocok (QS) |
| `RASTERSNAP` |  | Menyalakan atau mematikan snap ke garis lembar hasil pindai. |
| `RAY` |  | Sinar: garis konstruksi dari sebuah titik, tak berhingga ke satu arah. |
| `RECOVER` |  | Membuka DXF atau DWG yang rusak: melewati apa yang tidak dapat dibaca alih-alih menolak file, menyebutkan apa yang dilewati, lalu memeriksa dan memperbaiki gambar seperti AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Polyline tertutup dari dua sudut |
| `REDLINE` | `RDL` | Redline ke revisi: membaca paket redline MarkupCraft, menerima atau menolak setiap perubahan, memberi awan revisi pada yang diterima dengan log revisi, dan menyimpan file jawaban (RDL) |
| `REDO` |  | Mengulangi yang dibatalkan |
| `REFCLOSE` |  | Menyelesaikan penyuntingan blok di tempat: simpan, atau buang perubahan |
| `REFEDIT` |  | Menyunting blok di tempat, di mana referensinya berada, dengan sisa gambar memudar; REFCLOSE menyimpannya |
| `REGEN` | `RE` | Membangun ulang apa yang digambar di tab ini dari gambar |
| `REGENALL` | `REA` | Membangun ulang apa yang digambar di setiap tab, panel, dan gambar yang terbuka |
| `REGION` | `REG` | REGION (REG): membuat area datar (region) dari objek tertutup, atau dari garis, busur, dan polyline yang menutup loop ujung ke ujung. UNION, SUBTRACT, dan INTERSECT lalu menggabungkan region, dan MASSPROP memberi sifat penampangnya. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Mendaftarkan beberapa hasil pindai: menempatkannya dalam satu bingkai dengan pasangan titik yang dipilih atau target, memperhalus dengan ICP, mengekspor satu LAS atau E57 |
| `REINIT` |  | Memuat ulang file alias Anda |
| `RENAME` | `-RENAME`, `REN` | Mengganti nama layer atau blok (setiap objek atau referensi mengikuti) |
| `REVCLOUD` | `RC` | Awan revisi: membulatkan persegi panjang, poligon, jalur bebas, atau objek (RC) |
| `REVOLVE` | `REV` | Memutar objek 2D tertutup terhadap sebuah sumbu menjadi solid (3D) |
| `ROTATE` | `RO` | Memutar objek terhadap titik dasar |
| `SAMPLES` | `SAMPLE` | Membuka salah satu gambar contoh CadCraft (satu set arsitektural, sebuah as-built) untuk dipelajari |
| `SAVE` | `QSAVE` | Mengunduh gambar dalam formatnya (DWG atau DXF) |
| `SAVEAS` |  | Mengunduh gambar sebagai DWG atau DXF: pilih yang mana |
| `SAYSEL` |  | Mengatakan apa yang dipilih, satu kalimat per objek. |
| `SCALE` | `SC` | Menskalakan objek terhadap titik dasar |
| `SCALELISTEDIT` | `SCALELIST` | Menambah, menyunting, dan menghapus skala milik gambar; mereka muncul di daftar skala viewport dan plot dan disimpan dalam file (SCALELIST) |
| `SCANALIGN` | `SCL` | Menyejajarkan lembar hasil pindai ke dua titik: memindahkan, memutar, dan, jika Anda pilih, menskalakan. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Menyisipkan gambar hasil pindai: PNG, JPEG, atau TIFF (satu halaman atau semua halaman dari file multihalaman) atau halaman PDF yang berupa gambar. |
| `SCANCLEAN` | `SCC` | Membuat lembar hasil pindai menjadi hitam-putih dan menghapus bintik. |
| `SCANCROP` | `SCR` | Memotong lembar hasil pindai ke sebuah jendela. |
| `SCANDESKEW` | `SCD` | Mencari sudut tempat garis panjang lembar hasil pindai berada dan memutar lembar menjadi tegak setelah Anda menerima sudutnya. |
| `SCANERASE` | `SCE` | Menghapus area lembar hasil pindai: persegi panjang, poligon, atau lasso. |
| `SCANINFO` | `SCI` | Menampilkan file asli lembar hasil pindai dan langkah yang dilakukan sejak itu. |
| `SCANSCALE` | `SCS` | Menskalakan lembar hasil pindai: pilih dua titik di atasnya dan ketik jarak sebenarnya di antara keduanya. |
| `SCANTRACE` | `SCT` | Menelusuri lembar hasil pindai menjadi garis dan busur di layer baru, dengan toleransi yang Anda atur. Teks dan arsiran tetap sebagai raster. |
| `SELECT` |  | Memilih objek sekarang (untuk P, Previous, pada perintah berikutnya) |
| `SELECTALL` | `AI_SELALL` | Memilih setiap objek yang dapat Anda sunting di tab ini (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Memilih setiap objek seperti yang Anda pilih: jenis, layer, dan warna yang sama (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Menampilkan panel Set Lembar: lembar dari banyak gambar, diberi nomor, diterbitkan sebagai satu PDF. |
| `SHORTCUTS` | `KEYS` | Memberi perintah apa pun tombol milik Anda (Ctrl atau Alt dengan huruf, atau tombol fungsi yang kosong), disimpan di peramban ini atau aplikasi desktop. |
| `SHXFONTS` | `SHX` | Memberi CadCraft font SHX dari folder atau file, sehingga gaya teks yang menyebutkannya digambar dengannya (daftar, buang, balik) |
| `SKETCHFIX` | `SKF` | Menggambar goresan bebas; setiap goresan menjadi garis, lingkaran, busur, persegi panjang, atau polyline yang rapi, disiku-sikukan dan disambung ke yang lain. |
| `SKETCHLIVE` | `SKL` | Sketsa dengan pena: setiap goresan menjadi garis, lingkaran, busur, atau persegi panjang yang presisi saat Anda mengangkat pena, di-snap ke gambar, dengan ukurannya untuk diketik ulang. |
| `SPLINE` | `SPL` | Menggambar spline melalui titik (atau dengan poligon kontrol), atau mengubah polyline menjadi spline |
| `SPLINEDIT` | `SPE` | Menyunting spline: titik pas, titik kontrol dan bobot, membuka atau menutupnya, membaliknya, atau mengubahnya menjadi polyline |
| `SPLIT` |  | Membagi area gambar menjadi panel (sebagai VPORTS pada model; dari lembar juga) |
| `STEELMEMBER` | `SMEMBER` | Batang baja 3D dari potongan standar: dua titik (balok) atau titik dasar dan tinggi (Column) |
| `STLOUT` |  | Mengekspor model 3D sebagai STL (milimeter) |
| `STRETCH` | `S` | Meregang: seret jendela silang di atas ujung untuk memindahkan; yang di dalam ikut bergerak, sisanya tetap (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Gaya teks: font, tinggi, lebar, dan kemiringan yang didapat teks baru (dialog; -STYLE di baris perintah) |
| `SUBTRACT` | `SU` | Mengambil solid dari yang lain (3D), atau region 2D dari region (3D) |
| `SWBOUT` | `SWMACRO` | Mengunduh makro untuk SolidWorks (.swb) yang membangun ulang model sebagai satu sketsa berbatasan |
| `SWEEP` |  | Menyapu objek 2D tertutup sepanjang jalur (garis, polyline, busur, lingkaran) menjadi solid (3D) |
| `TABLE` | `TB` | Membuat tabel: baris dan kolom, atau dari sel spreadsheet di papan klip atau file CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Menyunting tabel: ketik di sel, sisipkan dan hapus baris dan kolom, ukuran, sel gabungan, perataan |
| `TABLEEXPORT` |  | Menyimpan apa yang ditampilkan tabel sebagai file CSV |
| `TABLEPASTE` | `PASTETABLE` | Membuat tabel dari sel spreadsheet di papan klip |
| `TABLESTYLE` | `TS` | Gaya tabel: tinggi teks, perataan, margin, dan garis tepi untuk baris judul, header, dan data |
| `TAGS` |  | Tag pada referensi blok: mendefinisikan tag (jenis, nilai yang diizinkan, blok yang berlaku), mengaturnya pada referensi yang dipilih, dan mendaftarkannya sebagai jadwal yang dapat disimpan sebagai CSV |
| `TEXT` | `DT`, `DTEXT` | Teks satu baris; Enter memulai baris berikutnya |
| `TEXTEDIT` | `ED`, `DDEDIT` | Menyunting teks di tempat: pilih teks (atau klik dua kali) (ED) |
| `TEXTMASK` | `TMASK` | Memasang masker latar di belakang teks (latar gambar atau warna), atau menghilangkannya. |
| `TEXTTOFRONT` |  | Membawa semua teks, dimensi, dan leader ke depan segalanya. |
| `TOOLBAR` |  | Memilih apa yang ditampilkan tombol bilah alat: ikon dan teks, hanya ikon, atau hanya teks (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Menempatkan bilah alat di atas, bawah, kiri, atau kanan jendela |
| `TOOLBARROWS` |  | Memilih berapa baris yang dipakai bilah alat: dibungkus agar pas, 2, atau 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Membuat bilah di atas gambar standar atau ringkas |
| `TOUCHCROSSHAIR` | `TCX` | Bidik silang berofset untuk menggambar dengan jari: satu jari menggerakkan bidik silang yang berada di atas dan di samping jari, sehingga jari tidak menutupi titik yang dipilih. Mengangkat jari tidak memilih apa pun; tombol Click atau ketukan dengan jari kedua memilih di bidik silang, dan menahan Click saat Anda bergerak menyeret. Tekan lama atau tombol Enter adalah Enter. Dua jari menggeser dan memperbesar. Pilihan: ON, OFF, Auto (aktif hanya jika jari adalah satu-satunya penunjuk), Distance, Side. |
| `TOUR` | `TUTORIAL` | Mengulang tur enam langkah gambar pertama |
| `TRIM` | `TR` | Memangkas objek kembali ke tempat yang lain bersilangan dengannya: klik sepotong, seret melewati beberapa, atau Shift+klik untuk memperpanjang |
| `TRIMEXTENDMODE` |  | Bagaimana TRIM dan EXTEND dimulai: 1 Quick (setiap objek adalah tepi potong atau batas), 0 Standard (pilih tepi dahulu) |
| `TTR` |  | Lingkaran yang menyinggung dua objek, dengan jari-jari yang Anda berikan (sama dengan CIRCLE T). |
| `TURNLEFT` |  | Memutar tampilan 90° ke kiri (berlawanan arah jarum jam): UCS Z -90, dan tampilan mengikuti. Tidak ada yang di gambar bergerak. |
| `TURNRIGHT` |  | Memutar tampilan 90° ke kanan (searah jarum jam): UCS Z 90, dan tampilan mengikuti. Tidak ada yang di gambar bergerak. |
| `TURNWORLD` |  | Kembali ke dunia: UCS World, dan tampilan kembali datar. |
| `TXT2MTXT` | `T2M` | Menyambung teks satu baris menjadi satu teks paragraf, dari atas ke bawah. |
| `UCS` |  | Sistem koordinat Anda sendiri: titik asal dan sumbu X (origin, sudut Z, 3point, OBject, Previous, World, NAmed). Titik yang Anda ketik, ortho, pelacakan polar, grid, dan teks baru mengikutinya; tampilan berputar agar sumbu X-nya datar. Tidak ada yang di gambar bergerak. |
| `UNDO` | `U` | Membatalkan perintah terakhir |
| `UNGROUP` |  | UNGROUP: membongkar grup. Pilih objek dari grup, atau berikan Name. Objek tetap di gambar. |
| `UNION` | `UNI` | Menyambung solid menjadi satu (3D), atau region 2D menjadi satu region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Menampilkan lagi setiap objek yang disembunyikan oleh ISOLATEOBJECTS atau HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cara panjang ditampilkan dan diketik: desimal, kaki dan inci, pecahan (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Menghitung ulang bidang, dan memilih kapan mereka diperbarui sendiri |
| `USDOUT` |  | Mengekspor model 3D sebagai USD (.usda teks, .usdc biner, atau paket .usdz) |
| `VIEW` | `-VIEW`, `V` | Tampilan 3D standar, perspektif atau paralel (3D) |
| `VIEWBASE` | `FLATSHOT` | Menempatkan tampilan 2D datar dari solid 3D (depan, atas, samping, atau isometrik, garis tersembunyi putus-putus) pada lembar atau di model |
| `VIEWLABEL` | `VL` | Judul tampilan di lembar yang menampilkan nama tampilan viewport-nya, dan berubah mengikutinya. |
| `VOICE` |  | Menyalakan atau mematikan perintah yang diucapkan. Dikenali di komputer ini. |
| `VPCLIP` |  | Memotong viewport lembar ke objek tertutup atau poligon yang digambar; Delete membuatnya persegi panjang lagi |
| `VPLAYER` |  | Membekukan atau mencairkan layer di beberapa viewport saja (Freeze, Thaw, Reset), dan memilih layer mana yang dimulai dibekukan pada viewport baru (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Membagi area gambar menjadi panel, masing-masing dengan tampilannya sendiri (pada lembar: viewport, seperti MVIEW) |
| `VPVIEW` |  | Mengatur apa yang ditampilkan viewport: pilih jendela pada model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Gaya visual tampilan 3D: berbayang, tepi, garis tersembunyi, rangka kawat, sinar-X |
| `WALL` | `WA` | Menggambar dinding 2D seperti polyline. Mereka tersambung, dan membawa pintu dan jendela. |
| `WALLARC` | `WARC` | Menggambar busur dinding. Dinding denah lurus, sehingga busur digambar sebagai dinding lurus pendek (masing-masing 15 derajat) yang tersambung. |
| `WALLDELSEG` |  | Menghapus sepotong dinding di antara dua titik. Sisanya tetap sebagai satu atau dua dinding. |
| `WALLDIM` |  | Mengetik nilai baru untuk dimensi: dinding di ujung jauhnya bergerak tegak lurus terhadap dirinya sendiri, dinding di ujung pertama tetap, dan dinding yang tersambung padanya mengikuti. |
| `WALLDISJOIN` |  | Pilih dinding dekat satu ujung untuk melarang sambungan di ujung itu: ujungnya digambar siku-siku dan tidak ada yang mengikutinya. Pilih lagi untuk mengizinkannya. |
| `WALLGRID` |  | Mengunci dinding ke garis grid: sepanjangnya, atau satu ujung di atasnya. Pindahkan garis dengan GRIDMOVE dan dinding mengikuti. |
| `WALLHOLD` |  | Menyejajarkan dan mengunci: dinding mempertahankan tempatnya terhadap dinding lain (pada garisnya, atau pada jarak yang dimilikinya). Jika satu bergerak, yang lain mengikuti. |
| `WALLHOLDDIM` |  | Mengunci jarak di antara dua dinding sejajar. Jika satu bergerak, yang lain mengikuti untuk menjaganya. |
| `WALLHOLDS` |  | Mendaftarkan kunci pada dinding. |
| `WALLJOINS` |  | Memberi setiap dinding gambar yang lebih tua idnya dan menyimpan sambungan di antaranya. Ini juga terjadi pada perubahan pertama yang Anda buat. |
| `WALLJOINSTYLE` |  | Klik sudut tempat dua dinding bertemu ujung ke ujung untuk mengubah cara digambarnya: miter, tumpul, potong datar. T berpindah dinding mana yang menembus. |
| `WALLOFFSET` | `WO` | Memindahkan dinding siku-siku terhadap dirinya sendiri sejauh suatu jarak (dinding yang tersambung ikut), atau membuat salinan pada jarak itu. |
| `WALLPICK` |  | Membuat dinding pada garis atau polyline di gambar, dengan garis yang tersambung padanya jika Anda menjawab Ya. |
| `WALLPOLY` | `WP` | Menggambar dinding mengelilingi poligon beraturan dengan 3 sampai 64 sisi, seperti POLYGON. |
| `WALLRECT` | `WR` | Menggambar empat dinding tersambung dari dua sudut berseberangan, seperti RECTANG. |
| `WALLREJOIN` |  | Menjadikan dua bagian dinding kembali satu dinding. Yang pertama mempertahankan tempatnya di gambar. |
| `WALLROT` |  | Menggambar empat dinding tersambung sebagai persegi panjang yang diputar ke sudut apa pun: sisi pertama, lalu seberapa jauh sisi lainnya keluar. |
| `WALLSPLIT` | `WS` | Memisahkan dinding menjadi dua di satu titik atau di tempat dinding lain bersilangan. Bagiannya tetap tersambung kecuali Anda meminta celah atau ujung bebas. Pintu dan jendela ikut bagiannya. |
| `WALLSPLITGAP` |  | Memisahkan dinding dengan meninggalkan celah: ketik celahnya, pilih dinding, lalu titiknya. Bagiannya memiliki ujung bebas dan dapat disambung lagi. |
| `WALLSTRETCH` |  | Meregang dengan jendela: ujung dinding di dalamnya bergerak, dinding yang sepenuhnya di dalam bergerak utuh, dan dinding yang menempel ke sisinya meluncur bersama. |
| `WALLTAN` |  | Melanjutkan dinding dengan busur yang meninggalkannya sepanjang dinding itu (digambar sebagai dinding lurus pendek). |
| `WALLTRACE` |  | Membuat dinding mengelilingi area tertutup terkecil dari garis dan dinding di sekitar titik yang Anda klik. |
| `WALLUNHOLD` |  | Melepas kunci dari dinding (dan kunci dinding lain ke dinding itu). |
| `WBLOCK` | `W`, `-WBLOCK` | Menulis blok, beberapa objek, atau seluruh gambar ke file DWG atau DXF baru (W) |
| `WEDGE` | `WE` | Baji: dua sudut dan tinggi; ia miring menjauhi sudut pertama (3D) |
| `WHEREAMI` | `WHERE` | Mengatakan di mana kursor berada. |
| `WHOHAS` |  | Mengatakan siapa yang membuka gambar. CadCraft Studio menyimpan file kunci kecil di samping setiap gambar yang terbuka (Plan.dwg.cclock: siapa, sejak kapan, versi mana) dan menghapusnya saat ditutup. Pilihan: Current (gambar yang terbuka), File (pilih satu), FOlder (setiap gambar dalam folder yang sedang terbuka di suatu tempat; ini juga memungkinkan Studio menyimpan file kunci di folder itu), Path (ketik satu), Name (nama yang dilihat orang lain). Kunci yang tidak disegarkan selama lima menit disebut usang. Tidak tersedia di peramban. |
| `WINDOW` | `WN` | Menempatkan jendela di dinding. |
| `XATTACH` | `XA` | Menautkan DWG atau DXF lain ke gambar ini, ditampilkan hanya baca (XREF mendaftarkan dan memuatnya ulang) |
| `XCLIP` | `XC` | Memotong referensi blok dan gambar tertaut ke persegi panjang atau poligon, atau menghapus potongannya. |
| `XLINE` | `XL` | Garis konstruksi, tak berhingga di kedua arah: melalui dua titik, horizontal, vertikal, pada sudut, membagi sudut dua, atau offset dari garis. |
| `XREF` | `XR`, `-XREF` | Gambar tertaut (referensi eksternal): daftar, lampirkan, muat ulang, ikat, lepaskan |
| `ZOOM` | `Z` | Batas, atau sebuah jendela |
