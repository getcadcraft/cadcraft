---
title: Peta perintah: apa yang diketik
summary: Setiap perintah yang dimiliki CadCraft dengan nama pendeknya, dari A sampai Z, dibuat dari programnya sendiri, beserta kebiasaan dari program gambar lain yang berbeda.
keywords: peta perintah, perintah, alias, nama pendek, asal dari, daftar perintah, apa yang diketik, hapus, pangkas, setara, perbedaan
from: 3bdfd3e6
---

CadCraft menggunakan nama perintah dan nama pendek yang sudah Anda kenal dari program gambar lain: ketik `L` untuk garis, `TR` untuk memangkas, `E` untuk menghapus. Jadi untuk sebagian besar perintah tidak ada tabel terjemahan yang perlu dipelajari: nama yang Anda kenal adalah nama yang dipakai di sini. Daftar di bawah berisi setiap perintah yang dimiliki CadCraft, dibuat dari programnya sendiri. {{key:Enter}} mengulang perintah terakhir; `HELP` di baris perintah menampilkan daftar yang sama.

Beberapa yang tidak sama, atau belum dibuat:

- **Simpan** mengunduh salinan di peramban ({{cmd:SAVE}}, {{cmd:SAVEAS}}); di CadCraft Studio perintah ini menulis file. Lihat [Dari perangkat lunak gambar lain](topic:coming-from).
- **PLOT** membuat PDF (juga PNG dan SVG), dengan tabel gaya plot; tidak ada pengelola pengaturan halaman.
- **DIMSTYLE** dan **PEDIT** sudah dibuat; **PEDIT** tidak memiliki opsi Edit-vertex (grip yang melakukannya).
- **TABLE** belum dibuat; {{cmd:XREF}}, {{cmd:SPLINE}} dan {{cmd:WBLOCK}} sudah dibuat.
- Perintah milik sebuah rutin (AutoLISP `C:NAME`) muncul setelah Anda memuatnya dengan {{cmd:APPLOAD}}; perintah itu tidak tercantum di sini.

## Semua perintah (398)

| Perintah | Nama pendek | Fungsi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Mengorbit tampilan 3D dengan tombol kiri |
| `ACCESS` | `AX` | Nyalakan atau matikan gambar tanpa penglihatan: hasil dibacakan lewat pembaca layar Anda, kursor keyboard pada gambar, suara snap dan perintah yang diucapkan. |
| `ALIASEDIT` |  | Edit alias perintah dalam satu file teks (format L, *LINE yang sudah dikenal) |
| `ALIGN` | `AL` | Pindahkan dan putar objek sehingga titik sumber jatuh di titik tujuan (satu, dua atau tiga pasang), dan skalakan jika Anda mau |
| `ALIGNPANEL` | `ALP` | Buka panel Sejajarkan dan distribusikan |
| `ALIGNTO` |  | Sejajarkan tepi kiri, tengah, kanan, atas, tengah, atau bawah objek yang dipilih, terhadap seleksi, objek pertama atau terakhir yang dipilih, atau suatu titik |
| `ANNOALLVISIBLE` | `ANNOALL` | Tampilkan objek anotatif di setiap skala, atau hanya di skala viewport (atau gambar) yang ada dalam daftarnya |
| `ANNOSCALE` | `CANNOSCALE` | Atur skala anotasi gambar: teks dan dimensi anotatif diubah ukurannya agar tercetak dengan ukuran yang sama |
| `APPLOAD` | `AP` | Muat aplikasi: rutin LISP (.lsp) dan file dialognya (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Busur: 3 Titik, Awal/Pusat/Akhir, Awal/Pusat/Sudut, Awal/Pusat/Panjang, Awal/Akhir/Sudut, Awal/Akhir/Arah, Awal/Akhir/Radius, Pusat/Awal/Akhir, Pusat/Awal/Sudut, Pusat/Awal/Panjang, Lanjutkan |
| `AREA` | `AA` | Luas dan keliling berdasarkan titik atau objek; Tambah dan Kurangi menyimpan total berjalan (AA) |
| `ARRAY` | `AR` | Salinan dalam baris dan kolom, atau melingkar di sekitar pusat (AR) |
| `ARRAYASSOCIATIVITY` |  | Mengatur apakah perintah ARRAY membuat array yang tetap bisa diedit (1) atau salinan biasa (0) |
| `ARRAYCLOSE` |  | Mengakhiri pengeditan objek sumber sebuah array |
| `ARRAYEDIT` |  | Mengubah array yang dibuat dengan opsi Asosiatif: jumlah, jarak, objek sumber, satu item |
| `ARRAYPATH` |  | Salinan objek sepanjang garis, busur, polyline, atau kurva lain |
| `ARRAYPOLAR` |  | Salinan melingkar di sekitar titik pusat |
| `ARRAYRECT` |  | Salinan dalam baris dan kolom |
| `ASBUILT` | `ASB` | ASBUILT membaca titik as-built yang diukur oleh regu (CSV / TXT, seperti yang ditulis EXPORTPOINTS) dan membandingkannya dengan titik gambar: di dalam atau di luar toleransi, tidak diukur, atau berlebih. Menandainya pada layer AS-BUILT dan mengunduh laporan CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Mendefinisikan atribut (tag yang diminta nilainya oleh blok) untuk dimasukkan ke dalam blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edit nilai atribut referensi blok di baris perintah, satu per satu (Enter mempertahankan nilai) |
| `ATTSYNC` |  | Samakan referensi blok dengan definisi atributnya: yang baru ditambahkan dengan nilai default, yang dihapus dibuang, posisi dan teks diatur ulang; nilai dipertahankan |
| `AUDIT` |  | Memeriksa gambar yang terbuka untuk kerusakan: angka yang tidak terbatas, objek tanpa ukuran, layer, blok, gaya dan jenis garis yang hilang, blok yang memuat dirinya sendiri, id yang dipakai bersama, dimensi dan hatch yang rusak. Menampilkan temuan menurut jenisnya dan bertanya sebelum memperbaiki; perbaikannya adalah satu langkah urungkan. |
| `AUNITS` | `ANGUNITS` | Cara sudut ditampilkan dan diketik: derajat desimal, derajat-menit-detik, atau bearing seperti N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocomplete gambar nyala atau mati, atau tampilkan saran dari pola gambar saat ini. |
| `AUTOCONSTRAIN` |  | Tambahkan batasan berimpit, horizontal dan vertikal jika geometrinya sudah berdekatan |
| `AUTODIM` | `ADIM` | Beri dimensi berdasarkan aturan: ukuran keseluruhan, rantai di sepanjang sisi, bukaan, diameter lubang, dan jarak grid, tanpa mengulang yang sudah diberi dimensi. |
| `AUTOSHEET` | `ASH` | Menata lembar sendiri: memilih kertas dan skala standar, serta menempatkan setiap tampilan dengan keterangan dan kepala gambar. |
| `BATTMAN` |  | Pengelola atribut blok: urutan, tag, prompt, default dan mode atribut sebuah blok, lalu referensinya diperbarui |
| `BCLOSE` |  | Tutup editor blok: simpan blok atau buang perubahan |
| `BCONVERT` |  | BCONVERT menemukan geometri yang berulang dan mengubahnya menjadi referensi blok. Pilih objek yang berulang: setiap kumpulan objek lain di ruang terbuka yang geometrinya sama, dipindahkan dan diputar dengan sudut apa pun, akan ditemukan; dan jika Cermin atau Skala diaktifkan, bayangan cermin dan salinan dengan ukuran lain juga. Beri nama blok baru dan titik dasar; pilihan dan setiap salinan menjadi referensi ke blok itu, masing-masing dengan rotasi dan skalanya sendiri. Atau pilih Blok dan beri nama blok yang ada untuk menemukan salinan lepas dari objeknya. Salinan harus memiliki layer, warna, jenis garis, dan tebal garis yang sama, kecuali Properti diatur ke Abaikan. Objek pada layer yang terkunci dibiarkan. Satu langkah urungkan. |
| `BEDIT` | `BE` | Editor blok: edit objek dan atribut blok; BCLOSE menyimpan (BE) |
| `BLEND` |  | BLEND: spline di antara ujung dua kurva terbuka, dipilih dekat ujungnya agar tersambung. CONtinuity: Singgung (T) mengikuti kedua arah, Halus (S) juga mengikuti bagaimana keduanya melengkung. |
| `BLOCK` | `B`, `BMAKE` | Buat blok dari objek (mereka menjadi satu referensi) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: setiap referensi ke satu blok menjadi referensi ke blok lain, di tempat yang sama dengan skala dan rotasi yang sama. Nilai atribut yang dimiliki kedua blok dipertahankan. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE menampilkan panel Blok dengan kursor di filternya. Panel menampilkan gambar setiap blok (yang terakhir ditempatkan di urutan pertama), dalam daftar atau kisi; klik gambar atau seret ke gambar untuk menempatkan blok dengan INSERT. Di bawah Pustaka, tambahkan file DWG atau DXF milik Anda: blok-bloknya didaftar dengan gambarnya dan disalin ke gambar ini saat Anda menempatkan salah satunya. Di CadCraft Studio, folder berisi gambar juga bisa ditambahkan, dan file serta folder diingat. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolom, pengelompokan, pengurutan, judul, total, dan catatan tabel daftar material |
| `BOMEXPORT` |  | Simpan tabel daftar material sebagai file .csv |
| `BOMTABLE` | `BOM` | Tabel daftar material yang langsung diperbarui untuk satu zona, atau untuk seluruh gambar |
| `BOMUPDATE` |  | Perbarui semua tabel daftar material sekarang, termasuk yang dibekukan |
| `BOMZONE` | `BZONE` | Area bernama pada gambar untuk daftar material: dua sudut, poligon, atau garis luar objek tertutup |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pilih titik di dalam area tertutup dan dapatkan polyline tertutup di sekelilingnya. Busur tetap busur. Pulau (I) juga membuat garis luar area di dalamnya. |
| `BOX` |  | Kotak: dua sudut dan tinggi (3D) |
| `BPARAMETER` | `BPARAM` | Belum dibuat: menambahkan parameter (seperti Visibilitas) ke sebuah blok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parameter blok: parameter bernama dengan rumus, dan beberapa parameter visibilitas dalam satu blok. Bekerja di editor blok (tetapkan objek yang dipilih ke suatu keadaan) dan pada referensi yang dipilih (nilai dan keadaannya sendiri). |
| `BREAK` | `BR` | Putus garis, busur, lingkaran, atau polyline di antara dua titik (BR) |
| `BREAKATPOINT` |  | Pisahkan garis, busur, atau polyline menjadi dua di suatu titik |
| `BREAKLINE` |  | Gambar garis dengan simbol putus; ukurannya dan perpanjangan melewati ujung-ujungnya diingat. |
| `BREPLACE` |  | BREPLACE menukar satu blok dengan blok lain. Dipilih: pilih referensi blok dan beri nama blok pengganti. Semua: beri nama sebuah blok dan penggantinya, dan setiap referensi di setiap ruang dan di dalam blok lain akan berubah. Referensi mempertahankan tempat, skala, rotasi dan layernya, serta nilai atribut yang dimiliki kedua blok; nilai yang tidak punya tempat di blok baru dibuang dan disebutkan namanya. |
| `BSEARCH` |  | BSEARCH mencari blok. Nama: sebagian nama blok, atau pola dengan * dan ?. Atribut: nilai (atau TAG=nilai) yang dimiliki atribut sebuah referensi. Geometri: pilih objek atau satu referensi blok, dan blok yang bentuknya mirip setidaknya 85% akan didaftar, yang paling mirip di urutan pertama; ukuran, rotasi dan pencerminan tidak dihitung. Referensi yang ditemukan di ruang terbuka akan dipilih, siap untuk perintah berikutnya. |
| `BURST` |  | Urai referensi blok dan pertahankan apa yang dikatakan atributnya: setiap nilai menjadi teks pada layer atributnya. |
| `BVHIDE` | `BVH` | Di editor blok: sembunyikan objek pada keadaan visibilitas saat ini. |
| `BVSHOW` | `BVSH` | Di editor blok: tampilkan objek yang disembunyikan oleh keadaan visibilitas saat ini (tampil pudar agar bisa dipilih). |
| `BVSTATE` | `BVS` | Di editor blok, pada blok dengan keadaan visibilitas: beralih ke suatu keadaan, atau menambah, mengganti nama, atau menghapus satu keadaan. |
| `CAL` |  | Hitung panjang atau angka: + − * / dan kurung, seperti yang Anda ketik di mana saja |
| `CENTERLINE` | `CL` | Garis pusat di antara dua garis: di tengah keduanya, atau sepanjang garis bagi jika keduanya bertemu (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Tanda pusat: silang di pusat lingkaran atau busur, dengan garis pusat hingga sedikit melewatinya (CM) |
| `CHAMFER` | `CHA` | Miringkan sudut di antara dua garis (Jarak (D) dua jarak; Panjang dan sudut (A); setiap sudut polyline (P)) |
| `CHSPACE` |  | CHSPACE: pindahkan objek antara lembar dan model melalui viewport. Objek diskalakan dan diputar agar tampak sama dari sisi lain. Di lembar, objek pindah ke model; saat Anda bekerja lewat viewport (MSPACE), objek pindah ke lembar. |
| `CIRCLE` | `C` | Pusat dan radius, diameter, 2 atau 3 titik |
| `CLASS` |  | Masukkan objek yang dipilih ke suatu kelas, atau tanpa pilihan atur kelas aktif (? menampilkan daftarnya) |
| `CLASSES` | `CLS` | Panel Kelas: kelas mengurutkan objek lintas layer; tampilkan, sembunyikan, dan beri gaya padanya, serta timpa per viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Tambatkan atau buat baris perintah mengambang, jadikan satu baris, atur jumlah baris riwayat, atau buka riwayat (F2) |
| `COMPARESETTINGS` | `CMPSET` | Bandingkan gaya dimensi, gaya teks, layer, lembar, atau satuan: dua dalam gambar ini, atau gambar ini dengan gambar lain yang terbuka, dan salin nilai di antaranya. |
| `CONSTRAINTBAR` | `CBAR` | Tampilkan atau sembunyikan bilah batasan (Tampilkan semua / Sembunyikan semua, atau per objek) |
| `COPY` | `CO`, `CP` | Salin objek, sebanyak yang Anda klik |
| `COPYBASE` |  | Salin objek ke papan klip dengan titik dasar yang Anda pilih |
| `COPYCLIP` |  | Salin objek ke papan klip (Ctrl+C); PASTECLIP menempatkannya |
| `COUNT` | `BCOUNT` | Hitung referensi blok: pilih satu untuk memilih dan menghitung setiap referensi blok tersebut |
| `COUNTTABLE` |  | Tempatkan tabel jumlah blok |
| `CREDITS` |  | Menempatkan kredit Pustaka di gambar sebagai tabel. Jalankan lagi untuk memperbarui tabel dari item yang ada di gambar sekarang. |
| `CURSORSIZE` |  | Ukuran garis silang: 100 membuatnya melintang dari tepi ke tepi gambar (Pengaturan › Kursor › Layar penuh) |
| `CUTCLIP` |  | Potong objek ke papan klip (Ctrl+X): salin, lalu hapus |
| `CYLINDER` | `CYL` | Silinder: pusat, radius, dan tinggi (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Daftar blok, atributnya, dan properti objek sebagai tabel di gambar atau file CSV |
| `DATALINK` | `DL` | Tabel dari file CSV yang mengingat file tersebut, sehingga bisa dibaca lagi |
| `DATALINKUPDATE` | `DLU` | Baca lagi file tautan data dan isi ulang tabelnya |
| `DCALIGNED` | `DCALI` | Batasan dimensi: jarak sebenarnya antara titik, titik dan garis, atau dua garis |
| `DCANGULAR` | `DCANG` | Batasan dimensi: sudut antara dua garis, atau sudut sebuah busur |
| `DCCONVERT` |  | Ubah dimensi yang digambar pada geometri yang bisa dibatasi menjadi batasan dimensi |
| `DCDIAMETER` | `DCDIA` | Batasan dimensi: diameter lingkaran atau busur |
| `DCDISPLAY` |  | Tampilkan atau sembunyikan batasan dimensi pada gambar |
| `DCHORIZONTAL` | `DCHOR` | Batasan dimensi: jarak horizontal |
| `DCLINEAR` | `DCLIN` | Batasan dimensi: jarak horizontal atau vertikal, dari tempat Anda meletakkannya |
| `DCRADIUS` | `DCRAD` | Batasan dimensi: radius lingkaran atau busur |
| `DCVERTICAL` | `DCVER` | Batasan dimensi: jarak vertikal |
| `DELBLOCKS` |  | Hapus blok: setiap referensi (termasuk yang bersarang, di setiap lembar) dan definisinya |
| `DELCONSTRAINT` | `DELCON` | Hapus setiap batasan (geometris dan dimensi) dari objek yang Anda pilih |
| `DELOPENING` |  | Keluarkan pintu atau jendela dari dinding. |
| `DESCRIBE` | `DESC` | Sebutkan isi gambar: berapa objek, jenisnya apa, seberapa besar, apa yang dipilih. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Batalkan pilihan (Esc) |
| `DETAILS` | `DET` | Detail milik firma Anda sendiri, ditemukan untuk apa yang sedang Anda gambar: cari, tambahkan blok, daftar, hapus, nyalakan atau matikan tawaran. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Gambar diagram dari teks: diagram alur Mermaid, diagram komponen PlantUML, D2, daftar dari-ke, atau XML draw.io, sebagai blok dan konektor yang bisa Anda edit |
| `DIMALIGNED` | `DAL`, `DIMALI` | Jarak sebenarnya antara dua titik |
| `DIMANGULAR` | `DAN`, `DIMANG` | Sudut antara dua garis, dari busur, atau dengan tiga titik |
| `DIMARC` | `DAR` | Dimensi panjang busur: jarak sepanjang busur, dengan simbol busur (DAR) |
| `DIMASZ` |  | Pengaturan dimensi: Ukuran panah |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Dimensi yang bertumpuk dari satu garis dasar |
| `DIMBREAK` | `DBREAK` | Putus garis dimensi dan garis bantu di tempat berpotongan dengan objek lain (Otomatis), di antara dua titik (Manual), atau hapus putusannya |
| `DIMCONSTRAINT` | `DCON` | Batasan dimensi: linier, sejajar, sudut, radius, diameter, ubah |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Rantai dimensi, masing-masing dari ujung yang terakhir |
| `DIMDEC` |  | Pengaturan dimensi: Jumlah desimal |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter sebuah busur atau lingkaran |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Lepaskan dimensi dari objek yang terikat padanya (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ubah teks dimensi (Beranda, Teks baru, Putar) atau miringkan garis bantu (Miring) |
| `DIMEXE` |  | Pengaturan dimensi: Perpanjangan melewati garis dimensi |
| `DIMEXO` |  | Pengaturan dimensi: Offset dari titik asal |
| `DIMGAP` |  | Pengaturan dimensi: Jarak di sekeliling teks |
| `DIMINSPECT` |  | Dimensi inspeksi: bingkai di sekeliling nilai dengan label dan seberapa sering bagian itu diperiksa |
| `DIMJOGGED` | `DJO`, `JOG` | Dimensi radius patah: radius yang digambar dari titik yang lebih dekat ketika pusatnya jauh (DJO) |
| `DIMJOGLINE` | `DJL` | Tambahkan simbol patah ke garis dimensi linier atau sejajar, untuk menunjukkan jaraknya tidak digambar dalam skala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Jarak horizontal atau vertikal (R untuk sudut apa pun) |
| `DIMLUNIT` |  | Pengaturan dimensi: format panjang (1 ilmiah, 2 desimal, 3 teknik, 4 arsitektural, 5 pecahan) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Dimensi ordinat: jarak X atau Y suatu titik dari titik asal UCS, pada leader (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Timpa variabel dimensi pada dimensi yang dipilih tanpa mengubah gayanya; Hapus mengembalikan gaya (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius sebuah busur atau lingkaran |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Ikat titik dimensi ke objek, sehingga dimensi mengikuti dan diukur ulang saat objek bergerak (DRE) |
| `DIMSCALE` |  | Pengaturan dimensi: Skala keseluruhan (ukuran × ini) |
| `DIMSPACE` |  | Jarak yang sama antara dimensi sejajar, diukur dari dimensi dasar (0 menyejajarkannya, Otomatis adalah dua kali tinggi teks) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Buat, ubah, atur sebagai saat ini, hapus, terapkan, dan bandingkan gaya dimensi bernama (kotak dialog; -DIMSTYLE di baris perintah) |
| `DIMTEDIT` | `DIMTED` | Pindahkan teks dimensi ke kiri, kanan, atau tengah garis dimensi, atau putar |
| `DIMTEXTUNIT` | `DTU` | Teks dimensi dalam mm, cm, m, atau km, atau dalam satuan gambar itu sendiri: dimensi yang dipilih, jika tidak ada, yang baru (DTU) |
| `DIMTXT` |  | Pengaturan dimensi: Tinggi teks |
| `DIST` | `DI` | Jarak dan sudut antara dua titik |
| `DISTRIBUTE` |  | Jarakkan objek yang dipilih secara merata, ke samping atau naik-turun: langkah yang sama antara pusat, atau celah yang sama; dua objek terluar tetap di tempatnya |
| `DIVIDE` | `DIV` | DIVIDE (DIV): tanda yang membagi garis, busur, lingkaran, polyline, spline, atau elips menjadi bagian yang sama. Titik, atau dengan Blok, sebuah blok di setiap tanda. |
| `DOCUMENTS` | `DOCS` | Buka panel Dokumen: periksa gambar keluar dan masuk, revisi, status rilis, dan persetujuan untuk folder proyek |
| `DOOR` | `DR` | Tempatkan pintu di dinding. Sisi yang Anda klik adalah sisi tempat pintu berayun. |
| `DRAWORDER` |  | Ubah urutan gambar: bawa objek ke depan, kirim ke belakang, atau letakkan di atas atau di bawah objek lain. |
| `DUPLICATE` | `DUP` | Salinan yang bergerak mengikuti penunjuk: klik untuk meletakkannya (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Properti gambar: judul, penulis, dan lainnya, serta pasangan nama dan nilai Anda sendiri |
| `DXFOUT` |  | Unduh gambar sebagai DXF R12 (Simpan tetap menggunakan formatnya sendiri) |
| `EATTEDIT` | `DDATTE` | Edit atribut referensi blok: nilai, teks, dan properti, satu atribut per waktu |
| `ELLIPSE` | `EL` | Titik ujung sumbu dan setengah sumbu lainnya |
| `ERASE` | `E`, `DELETE` | Hapus objek |
| `EXPLODE` | `X` | Pecah polyline, blok, dan dimensi menjadi bagian-bagiannya |
| `EXPORT` | `EXP` | Simpan salinan gambar dalam jenis file yang ditulis sebuah add-on |
| `EXPORT3D` | `3DEXPORT` | Ekspor model 3D: GLB, OBJ, atau STL |
| `EXPORTPOINTS` | `EXPPTS` | Tulis titik, dan titik sisip blok dengan satu atribut sebagai deskripsi, ke file CSV atau TXT (PNEZD, PENZD, atau XYZ) untuk program BIM dan survei |
| `EXTEND` | `EX` | Panjangkan objek sampai bertemu objek lain: klik dekat ujung, seret melewati beberapa, atau Shift+klik untuk memangkas |
| `EXTRIM` |  | EXTRIM: pilih satu tepi pemotong, lalu satu sisi. Semua yang berpotongan dengan tepi itu dipangkas di sisi tersebut. Bagian yang akan terbuang tampak saat Anda menggerakkan penunjuk. |
| `EXTRUDE` | `EXT` | Ekstrusi objek 2D tertutup menjadi solid (3D) |
| `FIELD` |  | Tempatkan field dalam teks, sel tabel, atau atribut: tanggal, nama file, nomor lembar, properti gambar, luas atau panjang objek, atau rumus |
| `FILLET` | `F` | Bulatkan atau buat siku sudut di antara dua objek (R radius, setiap sudut polyline (P), beberapa (M)) |
| `FIND` |  | Cari dan ganti kata dalam teks, nilai atribut, dan teks dimensi |
| `FLATTEN` |  | Atur tinggi (Z) dan ketebalan objek yang dipilih menjadi 0, juga di blok yang mereka gunakan. |
| `FLOOR` |  | Pilih lantai untuk menggambar, tambahkan satu, atau pindahkan atau salin pilihan ke sana. |
| `FLOORLAYERS` |  | Ubah lantai menjadi layer bernama Floor-Layer, untuk file yang akan diberikan kepada orang tanpa lantai. |
| `FLOORS` | `FLR` | Buka panel Lantai: tumpuk lantai dalam satu ruang model. |
| `GCCOINCIDENT` |  | Batasan: dua titik bertemu, atau sebuah titik tetap pada suatu objek |
| `GCCOLLINEAR` |  | Batasan: dua garis tetap pada satu garis |
| `GCCONCENTRIC` |  | Batasan: dua lingkaran atau busur berbagi pusat |
| `GCEQUAL` |  | Batasan: dua garis tetap sama panjang, atau dua lingkaran/busur sama radiusnya |
| `GCFIX` |  | Batasan: sebuah titik atau seluruh objek tetap di tempatnya |
| `GCHORIZONTAL` |  | Batasan: sebuah garis (atau dua titik) tetap horizontal |
| `GCPARALLEL` |  | Batasan: dua garis tetap sejajar |
| `GCPERPENDICULAR` |  | Batasan: dua garis tetap tegak lurus |
| `GCSYMMETRIC` |  | Batasan: dua titik, garis, atau lingkaran saling mencerminkan melintasi sebuah garis |
| `GCTANGENT` |  | Batasan: sebuah garis dan lingkaran atau busur (atau dua di antaranya) tetap bersinggungan |
| `GCVERTICAL` |  | Batasan: sebuah garis (atau dua titik) tetap vertikal |
| `GDSIN` | `GDS` | Lihat tata letak IC (file aliran GDSII): setiap layer dan datatype sebagai layer gambar, datar, dalam satuan pengguna; hanya untuk melihat dan mengukur (uji coba lab) |
| `GEOMCONSTRAINT` | `GCON` | Batasan geometris: horizontal, vertikal, sejajar, singgung, berimpit… |
| `GLBOUT` |  | Ekspor model 3D sebagai GLB (glTF) |
| `GRADIENT` | `GD` | Mengisi area dengan gradasi satu atau dua warna |
| `GRIDMOVE` | `GM` | Pindahkan garis grid dan bawa apa yang menggantung padanya: dinding meregang, kolom, gelembung, dan tag bergerak, dimensi mengikuti. |
| `GROUP` | `G` | GROUP (G): beri objek yang dipilih nama yang mereka bagi. Klik salah satunya kemudian memilih semuanya. Enter pada nama membuat grup tanpa nama. |
| `GROUPEDIT` |  | GROUPEDIT: ubah grup. Pilih salah satu objeknya atau berikan Nama, lalu Tambah atau Hapus objek, Ganti nama (RE), ubah Deskripsinya, atau tentukan apakah klik memilihnya secara utuh. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Isi area dengan isian solid atau pola: klik di dalamnya, atau pilih objek tertutup (H) |
| `HATCHEDIT` | `HE` | Ubah hatch: pola, skala, sudut, titik asal, dan tautannya ke batas. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Membuat ulang polyline batas dari hatch, ditautkan ke hatch atau tidak |
| `HATCHTOBACK` |  | Kirim setiap hatch ke belakang segala sesuatu yang lain. |
| `HELP` | `?` | Daftar ini |
| `HIDEOBJECTS` |  | Sembunyikan objek yang dipilih hingga UNISOLATEOBJECTS. Tidak disimpan bersama gambar. |
| `HISTORY` | `HIST` | HISTORY (HIST): versi gambar ini — salinan yang disimpan di komputer ini saat Studio menyimpannya, dan versi cloud — untuk dibuka, dipulihkan, dan dibandingkan, dengan perubahan ditampilkan dalam warna. |
| `ID` |  | Koordinat suatu titik |
| `IMAGE` | `IM` | Berikan CadCraft file gambar raster yang digunakan gambar (DWG hanya menyimpan lokasinya). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Tempatkan gambar raster (PNG atau JPEG) dari sebuah file. |
| `IMAGECLIP` | `ICL` | Klip gambar raster ke persegi panjang atau poligon, atau hapus klipnya. |
| `IMPORT` | `IMP` | Impor file dari jenis yang dibaca sebuah add-on, ke dalam gambar ini |
| `INSERT` | `I`, `DDINSERT` | Tempatkan blok (Skala (S), Rotasi (R)); Dari file DWG/DXF (F), dari pustaka (L) |
| `INTERSECT` | `IN` | Simpan hanya yang dimiliki bersama oleh solid (3D), atau area yang dibagi oleh region 2D |
| `ISODRAFT` |  | ISODRAFT: gambar isometrik nyala atau mati, atau langsung pada bidang Kiri, Atas, atau Kanan. Saat aktif, Ortho dan pelacakan polar mengikuti dua sumbu bidang, grid digambar isometrik, dan ELLIPSE memiliki Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Tampilkan hanya objek yang dipilih; semua yang lain di ruang ini disembunyikan hingga UNISOLATEOBJECTS. Tidak disimpan bersama gambar. |
| `ISOPLANE` |  | ISOPLANE: pilih bidang isometrik untuk menggambar: Kiri, Atas, atau Kanan. Enter berpindah ke yang berikutnya, seperti F5 saat gambar isometrik aktif. |
| `JOIN` | `J` | Sambungkan garis, busur, dan polyline yang bertemu ujung ke ujung menjadi satu polyline; garis pada satu garis menjadi satu garis (J) |
| `LASER` | `LASERCUT` | Buka panel Laser: kirim layer ke mesin pemotong atau pengukir laser (kode G GRBL) |
| `LASSOMODE` |  | Tekan dan seret membuat laso (1) atau persegi panjang (0) |
| `LAYDEL` |  | Hapus sebuah layer dan setiap objek di atasnya (di model, di lembar, dan di blok) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Buka pengelola layer: setiap layer dalam satu tabel |
| `LAYERPANEL` |  | Tampilkan panel layer |
| `LAYFRZ` |  | Bekukan layer dari setiap objek yang Anda pilih |
| `LAYGROUP` | `LG` | Kelompokkan layer ke dalam folder di panel Layer. |
| `LAYISO` |  | Isolasi layer objek yang dipilih (setiap layer lain mati) |
| `LAYLOCKFADE` |  | Atur seberapa pudar objek pada layer terkunci, dan apakah klik bisa memilihnya. |
| `LAYMCUR` |  | Jadikan layer objek yang Anda pilih sebagai layer aktif |
| `LAYMRG` |  | Gabungkan layer: objeknya pindah ke layer tujuan, dan layer yang digabung dihapus |
| `LAYOFF` |  | Matikan layer dari setiap objek yang Anda pilih |
| `LAYON` |  | Nyalakan setiap layer |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Lembar baru dengan kepala gambar dan viewport |
| `LAYTHW` |  | Cairkan setiap layer |
| `LAYUNISO` |  | Nyalakan lagi layer yang dimatikan oleh LAYISO |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Mengubah teks yang diketik dengan font Vietnam lama (font TCVN3 / ABC seperti .VnTime, dan font VNI seperti VNI-Times) menjadi Unicode. Teks seperti itu sudah tampil sebagaimana dibaca; perintah ini menulisnya ulang secara permanen, dengan hitungan dan satu langkah urungkan. |
| `LENGTHEN` | `LEN` | Panjangkan atau pendekkan garis, busur, dan polyline: sebesar jumlah, persentase, sampai total, atau dengan menyeret (LEN) |
| `LIBRARY` | `LIB` | Panel pustaka: tempatkan item, periksa pembaruan, kredit |
| `LIMITS` |  | Atur batas gambar: ON, OFF, atau sudut kiri-bawah dan kanan-atas. Dengan batas ON, titik di luar batas ditolak |
| `LINE` | `L` | Segmen lurus, masing-masing sebagai objek sendiri |
| `LINETYPE` | `LT`, `CELTYPE` | Jenis garis yang didapat objek baru (menurut layer, menurut blok, atau yang bernama) |
| `LINKVIEWS` | `SYNCVIEWS` | Geser dan zoom setiap panel bersama (layar terbagi), untuk membandingkan dua gambar atau revisi |
| `LISPEDIT` | `VLIDE` | LISPEDIT (atau VLIDE) membuka editor LISP: jendela untuk menulis, memuat, dan mencoba rutin. Muat ke gambar membaca setiap bentuk, seperti memuat file dengan APPLOAD, dan membuat perintahnya. Jalankan pilihan mengevaluasi bentuk yang dipilih, atau bentuk tempat kursor berada. Konsol menampilkan apa yang dicetak rutin dan setiap kesalahan beserta barisnya. Tanda kurung pasangannya ditandai saat Anda mengetik, dan Enter membuat indentasi pada baris baru. Baru, Buka, dan Simpan bekerja pada file .lsp. Daftar di samping teks menampilkan fungsi yang didefinisikan rutin, fungsi yang dipanggilnya tetapi belum ada di LISP ini, dan setiap fungsi yang dimilikinya. Jendela tidak memblokir gambar, sehingga rutin bisa meminta titik; Hentikan atau Esc mengakhiri rutin yang sedang berjalan. |
| `LIST` | `LI`, `LS` | Jelaskan objek di riwayat |
| `LTSCALE` | `LTS` | Skala jenis garis gambar (setiap garis putus dan spasi dikalikan dengannya) |
| `LWDISPLAY` | `LWT` | Tampilkan atau sembunyikan tebal garis di layar (tombol LWT di bilah status) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Tebal garis yang didapat objek baru (menurut layer, menurut blok, default, atau mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | layer peta di bawah ruang model: sistem koordinat gambar, ubin, WMS, WMTS, ArcGIS, gambar raster |
| `MASSPROP` |  | MASSPROP: properti penampang region dan objek tertutup: luas, keliling, pusat massa, momen dan produk inersia, radius girasi, dan sumbu utama. Tepat untuk garis dan busur. Dapat menulis laporan ke file teks. |
| `MATCHPROP` | `MA`, `PAINTER` | Samakan properti: salin layer, warna, dan lainnya dari satu objek ke objek lain (MA) |
| `MEASURE` | `ME` | MEASURE (ME): tanda setiap panjang tertentu sepanjang garis, busur, lingkaran, polyline, spline, atau elips, dari ujung terdekat pilihan Anda. Titik, atau dengan Blok, sebuah blok di setiap tanda. |
| `MEASUREGEOM` | `MEA` | Ukur jarak, radius, sudut, atau luas (MEA) |
| `MINSERT` |  | MINSERT: tempatkan blok dalam baris dan kolom sekaligus. Setiap satu adalah referensinya sendiri, sehingga Anda bisa memindahkan atau menghapus salah satunya. |
| `MIRROR` | `MI` | Cerminkan objek melintasi sebuah garis |
| `MLEADER` | `MLD`, `MLEAD` | Multileader: panah, leader, dan catatan, sebagai satu objek (MLD) |
| `MLEADERALIGN` | `MLA` | Sejajarkan multileader dengan salah satunya sepanjang arah, dengan jarak yang sama, atau didistribusikan di antara dua titik (MLA) |
| `MLEADERCOLLECT` | `MLC` | Kumpulkan beberapa multileader menjadi satu: blok-blok mereka dalam satu baris atau kolom, atau catatannya satu di bawah yang lain (MLC) |
| `MLEADEREDIT` | `MLE` | Tambahkan garis leader ke multileader atau hapus; ubah isinya antara teks dan blok (MLE) |
| `MLINE` |  | Gambar garis sejajar bersama, tersambung di sudut. |
| `MOVE` | `M` | Pindahkan objek dengan titik dasar dan titik kedua |
| `MSPACE` | `MS` | Kerjakan model melalui viewport pada lembar yang terbuka (atau klik dua kali di dalam viewport). |
| `MTEXT` | `MT`, `T` | Teks paragraf: seret lebarnya, lalu ketik di tempat; Enter memulai paragraf baru (T) |
| `MVIEW` | `MV` | Viewport ke model, pada layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Tampilan bernama: simpan tampilan di layar (atau jendela) dengan nama, lalu kembali ke sana (NV) |
| `NCOPY` |  | Salin objek dari referensi blok atau gambar tertaut ke dalam gambar, tanpa memecahnya. |
| `NEARBY` |  | Sebutkan apa yang ada dekat kursor, yang terdekat dahulu, dengan jarak dan sisinya. |
| `NEW` |  | Mulai gambar baru |
| `OBJECTSCALE` | `OBJSCALE` | Skala anotasi teks dan dimensi anotatif: tambah skala, hapus satu, tambahkan skala saat ini, atau daftarkan (setiap viewport menampilkannya dengan ukuran untuk skalanya sendiri) |
| `OBJOUT` |  | Ekspor model 3D sebagai OBJ |
| `OFFSET` | `O` | Salinan sejajar pada suatu jarak |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: cara OFFSET menutup celah di sudut luar polyline. 0 memperpanjang segmen, 1 menambahkan busur, 2 menambahkan potongan lurus. Disimpan untuk sesi ini. |
| `OLELIST` | `OLES` | Daftarkan objek OLE yang dibawa gambar dan letakkan salinan gambar salah satunya di tempat yang Anda pilih |
| `OPEN` |  | Buka DWG atau DXF dari komputer ini |
| `OPENIN3D` |  | Buka gambar ini di aplikasi pemodelan 3D, di tab baru (tidak ada yang diunggah) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Buka menu snap objek: pilih snap mana yang aktif. Juga klik kanan pada Snap di bilah status. |
| `OVERKILL` |  | Hapus objek duplikat dan gabungkan garis dan busur yang tumpang tindih atau ujung-ke-ujung, dalam toleransi. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parameter: parameter pengguna dan batasan dimensi dalam satu tabel |
| `PARTSLIST` | `PLIST` | Tabel daftar part dari setiap part standar dan profil baja yang ditempatkan dari Pustaka |
| `PASTEAREA` | `PAREA` | Tempel area yang disalin di MarkupCraft (Salin area) pada ukuran sebenarnya, sebagai gambar. |
| `PASTEBLOCK` |  | PASTEBLOCK: tempel apa yang Anda salin sebagai satu blok. Blok mendapat nama sendiri; RENAME memberinya nama Anda. |
| `PASTECLIP` |  | Tempel papan klip: ia mengikuti kursor, klik di tempat yang Anda inginkan (Ctrl+V) |
| `PASTEORIG` |  | Tempel papan klip pada koordinat tempat ia disalin (Ctrl+Shift+V) |
| `PDF` |  | Berikan CadCraft file PDF yang digunakan underlay gambar |
| `PDFADJUST` |  | Pudarkan, atur kontras, buat monokrom, atau matikan underlay PDF |
| `PDFATTACH` | `PDFATT` | Lampirkan halaman PDF sebagai underlay (PDFATTACH) |
| `PDFCLIP` |  | Klip underlay PDF ke persegi panjang atau poligon |
| `PDFIMPORT` | `PDFIM` | Ubah garis, isian, dan teks halaman PDF menjadi objek gambar (PDFIMPORT) |
| `PDFLAYERS` |  | Nyalakan atau matikan layer underlay PDF |
| `PEDIT` | `PE` | Edit polyline: tutup, buka, gabungkan, lebar, kurva pas, kurva spline, hapus lengkung, pembangkitan jenis garis, balik; garis, busur, dan spline dapat diubah menjadi polyline |
| `PHOTOSKETCH` | `PSK` | Mengubah foto sketsa tangan di atas kertas menjadi garis dan busur pada skala, meluruskan perspektif, dan memberi setiap warna pena layernya sendiri. |
| `PICKSTYLE` |  | PICKSTYLE: apakah memilih satu objek dari grup memilih seluruh grup (1, pengaturan awal) atau hanya objek itu (0). Disimpan untuk sesi ini. |
| `PLAN` |  | Putar tampilan agar sumbu X UCS (UCS saat ini, UCS tersimpan, atau World) datar di layar. Tidak ada yang di gambar yang bergerak. |
| `PLINE` | `PL` | Polyline dari segmen garis dan busur |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot ke PDF: sebuah layout, atau model pada skala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabel gaya plot: atur apa yang dicetak setiap warna (warna, hitam, abu-abu, tinta, tebal garis); disimpan bersama gambar (STYLESMANAGER) |
| `POINT` | `PO` | Objek titik |
| `POINTCLOUD` | `PC` | awan titik yang dilampirkan: iris, tinggi, ketebalan, warna, ukuran, tampak, zoom, lepaskan |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | lampirkan awan titik (LAS, LAZ, XYZ, PTS) di bawah gambar |
| `POLARANG` |  | Langkah pelacakan polar dalam derajat (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Poligon beraturan |
| `PRESSPULL` |  | Dorong atau tarik muka solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Buka panel Properti (juga Ctrl+1, atau klik dua kali objek) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Lipat panel Properti ke tepi jendela |
| `PSPACE` | `PS` | Tinggalkan viewport yang sedang Anda kerjakan dan kembali ke lembar (atau klik dua kali di luarnya). |
| `PUBLISH` | `-PUBLISH` | Plot beberapa atau semua lembar ke satu PDF (satu halaman dan satu bookmark per lembar) |
| `PURGE` | `PU` | Hapus definisi blok yang tidak digunakan |
| `QDIM` |  | Dimensi cepat: beri dimensi beberapa objek sekaligus (kontinu, dasar, bertingkat, ordinat, radius, atau diameter) |
| `QPMODE` | `QP` | Properti Cepat oleh kursor nyala atau mati |
| `QSELECT` | `QS` | Pilih cepat: setiap objek dari suatu jenis yang layer, warna, ukuran, atau namanya cocok (QS) |
| `RASTERSNAP` |  | Nyalakan atau matikan snap ke garis lembar hasil pindai. |
| `RAY` |  | Sinar: garis konstruksi dari satu titik, tanpa akhir ke satu arah. |
| `RECOVER` |  | Membuka DXF atau DWG yang rusak: melewati bagian yang tidak bisa dibaca alih-alih menolak file, memberi tahu apa yang dilewati, lalu memeriksa dan memperbaiki gambar seperti AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Polyline tertutup dari dua sudut |
| `REDLINE` | `RDL` | Redline ke revisi: baca paket redline MarkupCraft, terima atau tolak setiap perubahan, beri awan revisi pada yang diterima dengan log revisi, dan simpan file jawaban (RDL) |
| `REDO` |  | Ulangi apa yang diurungkan |
| `REFCLOSE` |  | Selesaikan pengeditan blok di tempat: simpan, atau buang perubahan |
| `REFEDIT` |  | Edit blok di tempat, di mana referensinya berada, dengan bagian gambar lainnya memudar; REFCLOSE menyimpannya |
| `REGEN` | `RE` | Bangun ulang yang digambar di tab ini dari gambar |
| `REGENALL` | `REA` | Bangun ulang yang digambar di setiap tab, panel, dan gambar yang terbuka |
| `REGION` | `REG` | REGION (REG): buat region datar dari objek tertutup, atau dari garis, busur, dan polyline yang menutup loop ujung ke ujung. UNION, SUBTRACT, dan INTERSECT kemudian menggabungkan region, dan MASSPROP memberikan properti penampangnya. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Daftarkan beberapa hasil pindai: tempatkan dalam satu bingkai dengan pasangan titik yang dipilih atau target, perhalus dengan ICP, ekspor satu LAS atau E57 |
| `REINIT` |  | Muat ulang file alias Anda |
| `RENAME` | `-RENAME`, `REN` | Ganti nama layer atau blok (setiap objek atau referensi mengikuti) |
| `REVCLOUD` | `RC` | Awan revisi: bulatkan persegi panjang, poligon, jalur bebas, atau objek (RC) |
| `REVOLVE` | `REV` | Putar objek 2D tertutup mengelilingi sumbu menjadi solid (3D) |
| `ROTATE` | `RO` | Putar objek mengelilingi titik dasar |
| `SAMPLES` | `SAMPLE` | Buka salah satu gambar contoh CadCraft (satu set arsitektur, sebuah as-built) untuk dipelajari |
| `SAVE` | `QSAVE` | Unduh gambar dalam formatnya (DWG atau DXF) |
| `SAVEAS` |  | Unduh gambar sebagai DWG atau DXF: pilih yang mana |
| `SAYSEL` |  | Sebutkan apa yang dipilih, satu kalimat untuk setiap objek. |
| `SCALE` | `SC` | Skala objek mengelilingi titik dasar |
| `SCALELISTEDIT` | `SCALELIST` | Tambah, edit, dan hapus skala milik gambar; skala tersebut muncul di daftar skala viewport dan plot, dan disimpan dalam file (SCALELIST) |
| `SCANALIGN` | `SCL` | Sejajarkan lembar hasil pindai ke dua titik: pindahkan, putar, dan jika Anda mau, skalakan. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Sisipkan gambar hasil pindai: PNG, JPEG, atau TIFF (satu halaman atau semua halaman dari file multi-halaman) atau halaman PDF yang berupa gambar. |
| `SCANCLEAN` | `SCC` | Jadikan lembar hasil pindai hitam putih dan hapus bintik-bintiknya. |
| `SCANCROP` | `SCR` | Potong lembar hasil pindai ke suatu jendela. |
| `SCANDESKEW` | `SCD` | Temukan sudut tempat garis panjang lembar hasil pindai berada, dan luruskan lembar setelah Anda menerima sudutnya. |
| `SCANERASE` | `SCE` | Hapus area lembar hasil pindai: persegi panjang, poligon, atau laso. |
| `SCANINFO` | `SCI` | Tampilkan file asli lembar hasil pindai dan langkah yang diambil sejak itu. |
| `SCANSCALE` | `SCS` | Skalakan lembar hasil pindai: pilih dua titik di atasnya dan ketik jarak sebenarnya di antara keduanya. |
| `SCANTRACE` | `SCT` | Lacak lembar hasil pindai menjadi garis dan busur pada layer baru, dengan toleransi yang Anda atur. Teks dan hatching tetap berupa raster. |
| `SELECT` |  | Pilih objek sekarang (untuk P, Sebelumnya (P), pada perintah berikutnya) |
| `SELECTALL` | `AI_SELALL` | Pilih setiap objek yang dapat Anda edit di tab ini (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Pilih setiap objek seperti yang Anda pilih: jenis, layer, dan warna yang sama (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Menampilkan panel Set lembar: lembar dari banyak gambar, dinomori, diterbitkan sebagai satu PDF. |
| `SHORTCUTS` | `KEYS` | Beri perintah apa pun tombol pintas sendiri (Ctrl atau Alt dengan huruf, atau tombol fungsi yang kosong), disimpan di peramban atau aplikasi desktop ini. |
| `SHXFONTS` | `SHX` | Berikan CadCraft font SHX dari folder atau file, sehingga gaya teks yang menyebutnya menggambar dengannya (daftar, hapus, balik) |
| `SKETCHFIX` | `SKF` | Gambar goresan bebas; setiap goresan menjadi garis, lingkaran, busur, persegi panjang, atau polyline yang rapi, dibuat siku dan disambung ke yang lain. |
| `SKETCHLIVE` | `SKL` | Sketsa dengan pena: setiap goresan menjadi garis, lingkaran, busur, atau persegi panjang yang presisi saat Anda mengangkat pena, ditempelkan ke gambar, dengan ukurannya yang bisa diketik di atasnya. |
| `SPLINE` | `SPL` | Gambar spline melalui titik (atau dengan poligon kontrol), atau ubah polyline menjadi spline |
| `SPLINEDIT` | `SPE` | Edit spline: titik pas, titik kontrol dan bobot, buka atau tutup, balik, atau ubah menjadi polyline |
| `SPLIT` |  | Bagi area gambar menjadi panel (sebagai VPORTS pada model; juga dari lembar) |
| `STEELMEMBER` | `SMEMBER` | Batang baja dalam 3D dari profil standar: dua titik (balok) atau titik dasar dan tinggi (Kolom) |
| `STLOUT` |  | Ekspor model 3D sebagai STL (milimeter) |
| `STRETCH` | `S` | Regangkan: seret jendela silang di atas ujung untuk memindahkan; yang di dalam bergerak, sisanya diam (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Gaya teks: font, tinggi, lebar, dan kemiringan yang didapat teks baru (kotak dialog; -STYLE di baris perintah) |
| `SUBTRACT` | `SU` | Kurangi solid dari yang lain (3D), atau region 2D dari region |
| `SWBOUT` | `SWMACRO` | Unduh makro untuk SolidWorks (.swb) yang membangun ulang model sebagai satu sketsa yang dibatasi |
| `SWEEP` |  | Sapu objek 2D tertutup sepanjang jalur (garis, polyline, busur, lingkaran) menjadi solid (3D) |
| `TABLE` | `TB` | Buat tabel: baris dan kolom, atau dari sel spreadsheet di papan klip atau file CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edit tabel: ketik di sel, sisipkan dan hapus baris dan kolom, ukuran, sel gabungan, perataan |
| `TABLEEXPORT` |  | Simpan yang ditampilkan tabel sebagai file CSV |
| `TABLEPASTE` | `PASTETABLE` | Buat tabel dari sel spreadsheet di papan klip |
| `TABLESTYLE` | `TS` | Gaya tabel: tinggi teks, perataan, margin, dan batas untuk baris judul, header, dan baris data |
| `TAGS` |  | Tag pada referensi blok: definisikan tag (jenis, nilai yang diizinkan, blok yang berlaku), atur pada referensi yang dipilih, dan daftarkan sebagai jadwal yang bisa Anda simpan sebagai CSV |
| `TEXT` | `DT`, `DTEXT` | Teks satu baris; Enter memulai baris berikutnya |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edit teks di tempat: pilih teks (atau klik dua kali) (ED) |
| `TEXTMASK` | `TMASK` | Pasang masker latar belakang di belakang teks (latar gambar atau warna), atau lepaskan. |
| `TEXTTOFRONT` |  | Bawa semua teks, dimensi, dan leader ke depan segala sesuatu yang lain. |
| `TOOLBAR` |  | Pilih apa yang ditampilkan tombol bilah alat: ikon dan teks, hanya ikon, atau hanya teks (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Tempatkan bilah alat di atas, bawah, kiri, atau kanan jendela |
| `TOOLBARROWS` |  | Pilih berapa baris yang digunakan bilah alat: menyesuaikan, 2, atau 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Buat bilah di atas gambar standar atau ringkas |
| `TOUCHCROSSHAIR` | `TCX` | Garis silang berjarak untuk menggambar dengan jari: satu jari menggerakkan garis silang yang berada di atas dan di samping jari, sehingga jari tidak menutupi titik yang dipilih. Mengangkat jari tidak memilih apa pun; tombol Klik, atau ketukan dengan jari kedua, memilih di garis silang, dan menahan Klik saat Anda bergerak akan menyeret. Tekan lama atau tombol Enter adalah Enter. Dua jari menggeser dan zoom. Opsi: ON, OFF, Otomatis (nyala hanya jika jari adalah satu-satunya penunjuk), Jarak, Sisi. |
| `TOUR` | `TUTORIAL` | Ambil lagi tur enam langkah gambar pertama |
| `TRIM` | `TR` | Potong objek sampai ke tempat objek lain berpotongan: klik satu bagian, seret melewati beberapa, atau Shift+klik untuk memperpanjang |
| `TRIMEXTENDMODE` |  | Cara TRIM dan EXTEND dimulai: 1 Cepat (setiap objek adalah tepi pemotong atau batas), 0 Standar (pilih tepi terlebih dahulu) |
| `TTR` |  | Lingkaran yang bersinggungan dengan dua objek, dengan radius yang Anda berikan (sama seperti CIRCLE T). |
| `TURNLEFT` |  | Putar tampilan 90° ke kiri (berlawanan arah jarum jam): UCS Z -90, dan tampilan mengikuti. Tidak ada yang di gambar yang bergerak. |
| `TURNRIGHT` |  | Putar tampilan 90° ke kanan (searah jarum jam): UCS Z 90, dan tampilan mengikuti. Tidak ada yang di gambar yang bergerak. |
| `TURNWORLD` |  | Kembali ke dunia: UCS World, dan tampilan kembali datar. |
| `TXT2MTXT` | `T2M` | Gabungkan teks satu baris menjadi satu teks paragraf, dari atas ke bawah. |
| `UCS` |  | Sistem koordinat Anda sendiri: titik asal dan sumbu X (asal, sudut Z, 3 titik, Objek, Sebelumnya, World, Bernama). Titik yang Anda ketik, ortho, pelacakan polar, grid, dan teks baru mengikutinya; tampilan diputar sehingga sumbu X-nya datar. Tidak ada yang di gambar yang bergerak. |
| `UNDO` | `U` | Urungkan perintah terakhir |
| `UNGROUP` |  | UNGROUP: pisahkan grup. Pilih objek dari grup, atau beri Nama. Objek tetap di gambar. |
| `UNION` | `UNI` | Gabungkan solid menjadi satu (3D), atau region 2D menjadi satu region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Tampilkan lagi setiap objek yang disembunyikan oleh ISOLATEOBJECTS atau HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cara panjang ditampilkan dan diketik: desimal, kaki dan inci, pecahan (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Hitung ulang field, dan pilih kapan field diperbarui sendiri |
| `USDOUT` |  | Ekspor model 3D sebagai USD (teks .usda, biner .usdc, atau paket .usdz) |
| `VIEW` | `-VIEW`, `V` | Tampilan 3D standar, perspektif atau paralel (3D) |
| `VIEWBASE` | `FLATSHOT` | Tempatkan tampilan 2D datar dari solid 3D (depan, atas, samping, atau isometrik, garis tersembunyi putus-putus) pada lembar atau di model |
| `VIEWLABEL` | `VL` | Judul tampilan pada lembar yang menunjukkan nama tampilan viewport-nya, dan berubah mengikutinya. |
| `VOICE` |  | Nyalakan atau matikan perintah suara. Dikenali di komputer ini. |
| `VPCLIP` |  | Klip viewport lembar ke objek tertutup atau poligon yang digambar; Hapus menjadikannya persegi panjang lagi |
| `VPLAYER` |  | Bekukan atau cairkan layer di beberapa viewport saja (Bekukan, Cairkan, Atur ulang), dan pilih layer mana yang dimulai beku oleh viewport baru (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Bagi area gambar menjadi panel, masing-masing dengan tampilannya sendiri (pada lembar: viewport, seperti MVIEW) |
| `VPVIEW` |  | Atur apa yang ditampilkan viewport: pilih jendela pada model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Gaya visual tampilan 3D: berbayang, tepi, garis tersembunyi, rangka kawat, atau sinar-X |
| `WALL` | `WA` | Gambar dinding 2D seperti polyline. Dinding tersambung, dan membawa pintu serta jendela. |
| `WALLARC` | `WARC` | Gambar busur dinding. Dinding denah itu lurus, jadi busur digambar sebagai dinding lurus pendek (masing-masing 15 derajat) yang tersambung. |
| `WALLDELSEG` |  | Hapus sebagian dinding di antara dua titik. Sisanya tetap sebagai satu atau dua dinding. |
| `WALLDIM` |  | Ketik nilai baru untuk dimensi: dinding di ujung jauhnya bergerak tegak lurus terhadap dirinya sendiri, dinding di ujung pertama tetap, dan dinding yang tersambung padanya mengikuti. |
| `WALLDISJOIN` |  | Pilih dinding dekat satu ujung untuk melarang sambungan di ujung itu: ujungnya digambar siku dan tidak ada yang mengikutinya. Pilih lagi untuk mengizinkannya. |
| `WALLGRID` |  | Kunci dinding ke garis grid: sepanjangnya, atau satu ujung di atasnya. Pindahkan garis dengan GRIDMOVE dan dinding mengikuti. |
| `WALLHOLD` |  | Ratakan dan kunci: dinding mempertahankan tempatnya terhadap dinding lain (pada garisnya, atau pada jarak yang dimilikinya). Jika satu bergerak, yang lain mengikuti. |
| `WALLHOLDDIM` |  | Kunci jarak antara dua dinding sejajar. Jika satu bergerak, yang lain mengikuti untuk menjaganya. |
| `WALLHOLDS` |  | Daftarkan kunci pada dinding. |
| `WALLJOINS` |  | Berikan setiap dinding gambar lama id-nya dan simpan sambungan di antara mereka. Ini juga terjadi pada perubahan pertama yang Anda buat. |
| `WALLJOINSTYLE` |  | Klik sudut tempat dua dinding bertemu ujung ke ujung untuk mengubah cara digambarnya: miter, butt, potong siku. T mengganti dinding mana yang melintas. |
| `WALLOFFSET` | `WO` | Pindahkan dinding siku ke dirinya sendiri sejauh jarak tertentu (dinding yang tersambung mengikuti), atau buat salinan pada jarak itu. |
| `WALLPICK` |  | Buat dinding pada garis atau polyline di gambar, dengan garis yang tersambung padanya jika Anda menjawab Ya. |
| `WALLPOLY` | `WP` | Gambar dinding mengelilingi poligon beraturan dengan 3 sampai 64 sisi, seperti POLYGON. |
| `WALLRECT` | `WR` | Gambar empat dinding tersambung dari dua sudut berlawanan, seperti RECTANG. |
| `WALLREJOIN` |  | Jadikan dua bagian dinding kembali satu dinding. Yang pertama mempertahankan tempatnya di gambar. |
| `WALLROT` |  | Gambar empat dinding tersambung sebagai persegi panjang yang diputar ke sudut mana pun: sisi pertama, lalu seberapa jauh ke luar. |
| `WALLSPLIT` | `WS` | Bagi dinding menjadi dua di suatu titik atau di tempat dinding lain melintang. Bagiannya tetap tersambung kecuali Anda meminta celah atau ujung bebas. Pintu dan jendela ikut bagiannya. |
| `WALLSPLITGAP` |  | Bagi dinding dengan meninggalkan celah: ketik celahnya, pilih dinding, lalu titiknya. Bagian-bagiannya memiliki ujung bebas dan bisa disambung kembali. |
| `WALLSTRETCH` |  | Regangkan dengan jendela: ujung dinding di dalamnya bergerak, dinding yang sepenuhnya di dalam bergerak utuh, dan dinding yang menempel ke sisinya bergeser bersamanya. |
| `WALLTAN` |  | Lanjutkan dinding dengan busur yang meninggalkannya sepanjang dinding (digambar sebagai dinding lurus pendek). |
| `WALLTRACE` |  | Buat dinding mengelilingi area tertutup terkecil dari garis dan dinding di sekitar titik yang Anda klik. |
| `WALLUNHOLD` |  | Lepaskan kunci dari dinding (dan kunci dinding lain ke dinding ini). |
| `WBLOCK` | `W`, `-WBLOCK` | Tulis blok, beberapa objek, atau seluruh gambar ke file DWG atau DXF baru (W) |
| `WEDGE` | `WE` | Baji: dua sudut dan tinggi; ia miring menjauh dari sudut pertama (3D) |
| `WHEREAMI` | `WHERE` | Sebutkan di mana kursor berada. |
| `WHOHAS` |  | Menyebutkan siapa yang membuka gambar. CadCraft Studio menyimpan file kunci kecil di samping setiap gambar yang terbuka (Plan.dwg.cclock: siapa, sejak kapan, versi mana) dan menghapusnya saat ditutup. Opsi: Saat ini (C), File, Folder (FO), Jalur (P), Nama (N). Kunci yang tidak diperbarui selama lima menit disebut usang. Tidak tersedia di peramban. |
| `WINDOW` | `WN` | Tempatkan jendela di dinding. |
| `XATTACH` | `XA` | Tautkan DWG atau DXF lain ke gambar ini, ditampilkan hanya-baca (XREF mendaftar dan memuatnya ulang) |
| `XCLIP` | `XC` | Klip referensi blok dan gambar tertaut ke persegi panjang atau poligon, atau hapus kliknya. |
| `XLINE` | `XL` | Garis konstruksi, tanpa akhir ke dua arah: melalui dua titik, horizontal, vertikal, pada sudut, membagi sudut dua, atau berjarak dari sebuah garis. |
| `XREF` | `XR`, `-XREF` | Gambar tertaut (referensi eksternal): daftar, lampirkan, muat ulang, ikat, lepaskan |
| `ZOOM` | `Z` | Batas, atau jendela |
