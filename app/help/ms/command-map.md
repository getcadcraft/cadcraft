---
title: Peta arahan: apa yang hendak ditaip
summary: Setiap arahan CadCraft dengan nama pendeknya, A hingga Z, dibuat daripada program itu sendiri, serta tabiat daripada program lukisan lain yang berbeza.
keywords: peta arahan, arahan, alias, nama pendek, datang daripada, senarai arahan, apa yang hendak ditaip, padam, pangkas, setara, perbezaan
from: 3bdfd3e6
---

CadCraft mengambil nama arahan dan nama pendek yang biasa anda gunakan dalam program lukisan lain: taip `L` untuk garisan, `TR` untuk memangkas, `E` untuk memadam. Jadi tiada jadual terjemahan untuk dipelajari bagi kebanyakan arahan: nama yang anda tahu ialah nama di sini. Senarai di bawah ialah setiap arahan CadCraft, dibuat daripada program itu sendiri. {{key:Enter}} mengulang arahan yang terakhir; `HELP` dalam baris arahan memaparkan senarai yang sama.

Beberapa yang tidak sama, atau belum dibina:

- **Simpan** memuat turun salinan dalam pelayar ({{cmd:SAVE}}, {{cmd:SAVEAS}}); dalam CadCraft Studio ia menulis fail. Lihat [Datang daripada perisian lukisan lain](topic:coming-from).
- **PLOT** menghasilkan PDF (juga PNG dan SVG), dengan jadual gaya plot; tiada pengurus persediaan halaman.
- **DIMSTYLE** dan **PEDIT** telah dibina; **PEDIT** tiada pilihan Edit-vertex (grip yang melakukannya).
- **TABLE** belum dibina; {{cmd:XREF}}, {{cmd:SPLINE}} dan {{cmd:WBLOCK}} sudah dibina.
- Arahan sendiri bagi rutin (AutoLISP `C:NAME`) muncul selepas anda memuatkannya dengan {{cmd:APPLOAD}}; ia tidak disenaraikan di sini.

## Semua arahan (398)

| Arahan | Nama pendek | Fungsi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbit paparan 3D dengan butang kiri |
| `ACCESS` | `AX` | Hidupkan atau matikan lukisan tanpa penglihatan: hasil dituturkan melalui pembaca skrin anda, kursor papan kekunci pada lukisan, bunyi snap dan arahan yang dituturkan. |
| `ALIASEDIT` |  | Sunting alias arahan dalam satu fail teks (format L, *LINE yang biasa) |
| `ALIGN` | `AL` | Alih dan pusingkan objek supaya titik sumber jatuh pada titik destinasi (satu, dua atau tiga pasangan), dan skalakannya jika anda mahu |
| `ALIGNPANEL` | `ALP` | Buka panel Jajar dan agih |
| `ALIGNTO` |  | Jajarkan tepi kiri, pusat, kanan, atas, tengah atau bawah objek yang dipilih, pada pilihan, objek pertama atau terakhir yang dipilih, atau pada satu titik |
| `ANNOALLVISIBLE` | `ANNOALL` | Tunjukkan objek beranotasi pada setiap skala, atau hanya di tempat skala viewport (atau lukisan) ada dalam senarai mereka |
| `ANNOSCALE` | `CANNOSCALE` | Tetapkan skala anotasi lukisan: teks dan dimensi beranotasi diubah saiz supaya dicetak pada saiz yang sama |
| `APPLOAD` | `AP` | Muatkan aplikasi: rutin LISP (.lsp) dan fail dialognya (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Lengkok: 3 titik, Mula/Pusat/Akhir, Mula/Pusat/Sudut, Mula/Pusat/Panjang, Mula/Akhir/Sudut, Mula/Akhir/Arah, Mula/Akhir/Jejari, Pusat/Mula/Akhir, Pusat/Mula/Sudut, Pusat/Mula/Panjang, Teruskan |
| `AREA` | `AA` | Luas dan perimeter mengikut titik atau bagi objek; Tambah dan Tolak menyimpan jumlah berjalan (AA) |
| `ARRAY` | `AR` | Salinan dalam baris dan lajur, atau bulat mengelilingi pusat (AR) |
| `ARRAYASSOCIATIVITY` |  | Tetapkan sama ada arahan ARRAY membuat tatasusunan yang kekal boleh disunting (1) atau salinan biasa (0) |
| `ARRAYCLOSE` |  | Tamatkan penyuntingan objek sumber bagi tatasusunan |
| `ARRAYEDIT` |  | Tukar tatasusunan yang dibuat dengan pilihan Associative: kiraan, jarak, objek sumber, satu item |
| `ARRAYPATH` |  | Salinan objek sepanjang garisan, lengkok, polygaris atau lengkung lain |
| `ARRAYPOLAR` |  | Salinan mengelilingi satu titik pusat |
| `ARRAYRECT` |  | Salinan dalam baris dan lajur |
| `ASBUILT` | `ASB` | ASBUILT membaca titik as-built yang diukur oleh kru (CSV / TXT, seperti yang ditulis EXPORTPOINTS) dan membandingkannya dengan titik lukisan: dalam atau luar toleransi, tidak diukur, lebihan. Menandakannya pada lapisan AS-BUILT dan memuat turun laporan CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Takrifkan atribut (tag yang blok minta nilai untuknya) untuk dimasukkan ke dalam blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Sunting nilai atribut rujukan blok pada baris arahan, satu demi satu (Enter mengekalkan nilai) |
| `ATTSYNC` |  | Selaraskan rujukan blok dengan takrif atributnya: yang baharu ditambah dengan lalai, yang dibuang dialih keluar, kedudukan dan teks ditetapkan semula; nilai dikekalkan |
| `AUDIT` |  | Menyemak lukisan terbuka untuk kerosakan: nombor yang tidak terhingga, objek tanpa saiz, lapisan, blok, gaya dan jenis garisan yang hilang, blok yang mengandungi dirinya sendiri, id yang dikongsi, dimensi dan hatch yang rosak. Menyenaraikan apa yang ditemui mengikut jenis dan bertanya sebelum membetulkan; pembetulan ialah satu langkah buat asal. |
| `AUNITS` | `ANGUNITS` | Cara sudut ditunjukkan dan ditaip: darjah perpuluhan, darjah-minit-saat atau bearing seperti N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autolengkap lukisan dihidupkan atau dimatikan, atau senaraikan corak yang dicadangkan oleh lukisan sekarang. |
| `AUTOCONSTRAIN` |  | Tambah kekangan koinsiden, mengufuk dan menegak apabila geometrinya sudah hampir |
| `AUTODIM` | `ADIM` | Dimensi mengikut peraturan: saiz keseluruhan, rantai sepanjang sisi, bukaan, diameter lubang dan jarak grid, tanpa mengulang apa yang sudah didimensikan. |
| `AUTOSHEET` | `ASH` | Susun helaian sendiri: memilih kertas dan skala piawai dan meletakkan setiap pandangan dengan kapsyen dan blok tajuk. |
| `BATTMAN` |  | Pengurus atribut blok: susunan, tag, gesaan, nilai lalai dan mod atribut blok, kemudian rujukannya dikemas kini |
| `BCLOSE` |  | Tutup penyunting blok: simpan blok atau buang perubahan |
| `BCONVERT` |  | BCONVERT mencari geometri yang berulang dan menukarnya kepada rujukan blok. Pilih objek yang berulang: setiap set objek lain dalam ruang terbuka yang geometrinya sama, dialih dan diputar pada sebarang sudut, akan dijumpai, dan dengan Dicermin atau Diskala dihidupkan, imej cermin dan salinan pada saiz lain juga dijumpai. Berikan blok baharu satu nama dan titik asas; pilihan dan setiap salinan menjadi rujukan kepadanya, dengan putaran dan skala masing-masing. Atau pilih Blok dan namakan blok sedia ada untuk mencari salinan longgar objeknya. Salinan mesti mempunyai lapisan, warna, jenis garisan dan ketebalan garisan yang sama melainkan Sifat ditetapkan kepada Abaikan. Objek pada lapisan terkunci dibiarkan. Satu langkah buat asal. |
| `BEDIT` | `BE` | Penyunting blok: sunting objek dan atribut blok; BCLOSE menyimpan (BE) |
| `BLEND` |  | BLEND: splin antara hujung dua lengkung terbuka, dipilih berhampiran hujung untuk dicantum. CONtinuity: Tangent mengikut kedua-dua arah, Smooth juga mengikut bagaimana ia melengkung. |
| `BLOCK` | `B`, `BMAKE` | Buat blok daripada objek (ia menjadi satu rujukan) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: setiap rujukan kepada satu blok menjadi rujukan kepada blok lain, di tempat yang sama dengan skala dan putaran yang sama. Nilai atribut yang kedua-dua blok miliki dikekalkan. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE memaparkan panel Blok dengan kursor dalam penapisnya. Panel menunjukkan gambar setiap blok (yang diletakkan paling baru dahulu), sebagai senarai atau grid; klik gambar atau seretnya ke lukisan untuk meletakkan blok dengan INSERT. Di bawah Pustaka, tambah fail DWG atau DXF anda sendiri: blok-bloknya disenaraikan dengan gambar dan disalin ke dalam lukisan ini apabila anda meletakkan satu. Dalam CadCraft Studio, folder lukisan juga boleh ditambah, dan fail serta folder diingati. |
| `BOMEDIT` | `BOMCOLUMNS` | Lajur, pengumpulan, pengisihan, tajuk, jumlah dan catatan bagi jadual senarai bahan |
| `BOMEXPORT` |  | Simpan jadual senarai bahan sebagai fail .csv |
| `BOMTABLE` | `BOM` | Jadual senarai bahan langsung bagi satu zon, atau bagi seluruh lukisan |
| `BOMUPDATE` |  | Kemas kini setiap jadual senarai bahan sekarang, termasuk yang dibekukan |
| `BOMZONE` | `BZONE` | Kawasan bernama dalam lukisan untuk senarai bahan: dua bucu, poligon, atau garis luar objek tertutup |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pilih satu titik di dalam kawasan tertutup dan dapatkan polygaris tertutup mengelilinginya. Lengkok kekal sebagai lengkok. Pulau turut menggariskan kawasan di dalamnya. |
| `BOX` |  | Kotak: dua bucu dan ketinggian (3D) |
| `BPARAMETER` | `BPARAM` | Belum dibina: menambah parameter (seperti Visibility) kepada blok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parameter blok: parameter bernama dengan formula, dan beberapa parameter keterlihatan dalam satu blok. Berfungsi dalam penyunting blok (tetapkan objek yang dipilih kepada satu keadaan) dan pada rujukan yang dipilih (nilai dan keadaannya sendiri). |
| `BREAK` | `BR` | Putuskan garisan, lengkok, bulatan atau polygaris antara dua titik (BR) |
| `BREAKATPOINT` |  | Pisahkan garisan, lengkok atau polygaris kepada dua pada satu titik |
| `BREAKLINE` |  | Lukis garisan dengan simbol putus; saiznya dan lanjutan melepasi hujung diingati. |
| `BREPLACE` |  | BREPLACE menukar satu blok dengan blok lain. Dipilih: pilih rujukan blok dan namakan blok yang digunakan sebaliknya. Semua: namakan satu blok dan gantinya, dan setiap rujukan dalam setiap ruang dan di dalam blok lain berubah. Rujukan mengekalkan tempat, skala, putaran dan lapisannya, serta nilai atribut yang kedua-dua blok miliki; nilai yang blok baharu tiada tempat untuknya akan dibuang dan dinamakan. |
| `BSEARCH` |  | BSEARCH mencari blok. Nama: sebahagian nama blok, atau corak dengan * dan ?. Atribut: nilai (atau TAG=nilai) yang dipegang oleh atribut rujukan. Geometri: pilih objek atau satu rujukan blok, dan blok yang bentuknya sekurang-kurangnya 85% serupa disenaraikan, yang terbaik dahulu; saiz, putaran dan pencerminan tidak diambil kira. Rujukan yang dijumpai dalam ruang terbuka dipilih, bersedia untuk arahan seterusnya. |
| `BURST` |  | Pecahkan rujukan blok dan kekalkan apa yang dinyatakan oleh atributnya: setiap nilai menjadi teks pada lapisan atribut. |
| `BVHIDE` | `BVH` | Dalam penyunting blok: sembunyikan objek dalam keadaan keterlihatan semasa. |
| `BVSHOW` | `BVSH` | Dalam penyunting blok: tunjukkan objek yang disembunyikan oleh keadaan keterlihatan semasa (ia dipaparkan pudar untuk dipilih). |
| `BVSTATE` | `BVS` | Dalam penyunting blok, pada blok dengan keadaan keterlihatan: tukar kepada satu keadaan, atau tambah, namakan semula atau padam satu keadaan. |
| `CAL` |  | Kira panjang atau nombor: + − * / dan kurungan, seperti yang anda taip di mana-mana |
| `CENTERLINE` | `CL` | Garisan pusat antara dua garisan: di tengah antaranya, atau sepanjang pembahagi dua apabila ia bertemu (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Tanda pusat: palang di pusat bulatan atau lengkok, dengan garisan pusat hingga sedikit melepasinya (CM) |
| `CHAMFER` | `CHA` | Serongkan sudut antara dua garisan (Dua jarak, Panjang dan sudut (A), Pada setiap sudut polygaris) |
| `CHSPACE` |  | CHSPACE: alih objek antara helaian dan model melalui viewport. Ia diskala dan diputar supaya kelihatan sama dari sisi lain. Pada helaian ia pergi ke model; semasa anda bekerja melalui viewport (MSPACE) ia datang ke helaian. |
| `CIRCLE` | `C` | Pusat dan jejari, diameter, 2 atau 3 titik |
| `CLASS` |  | Letakkan objek yang dipilih dalam kelas, atau tanpa pilihan tetapkan kelas aktif (? menyenaraikannya) |
| `CLASSES` | `CLS` | Panel Kelas: kelas menyusun objek merentasi lapisan; tunjuk, sembunyi dan gayakannya, dan ganti setiap viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Lekapkan atau terapungkan baris arahan, jadikannya satu baris, tetapkan baris sejarahnya, atau buka sejarah (F2) |
| `COMPARESETTINGS` | `CMPSET` | Bandingkan gaya dimensi, gaya teks, lapisan, helaian atau unit: dua dalam lukisan ini, atau lukisan ini dengan satu lagi yang terbuka, dan salin nilai merentasinya. |
| `CONSTRAINTBAR` | `CBAR` | Tunjuk atau sembunyikan bar kekangan (Tunjuk semua / Sembunyi semua, atau mengikut objek) |
| `COPY` | `CO`, `CP` | Salin objek, seberapa banyak kali anda klik |
| `COPYBASE` |  | Salin objek ke papan keratan dengan titik asas yang anda pilih |
| `COPYCLIP` |  | Salin objek ke papan keratan (Ctrl+C); PASTECLIP meletakkannya |
| `COUNT` | `BCOUNT` | Kira rujukan blok: pilih satu untuk memilih dan mengira setiap rujukan blok itu |
| `COUNTTABLE` |  | Letakkan jadual kiraan blok |
| `CREDITS` |  | Letakkan kredit Pustaka dalam lukisan sebagai jadual. Jalankan semula untuk mengemas kini jadual daripada item dalam lukisan sekarang. |
| `CURSORSIZE` |  | Saiz rangka silang: 100 menjalankannya dari tepi ke tepi lukisan (Tetapan › Kursor › Skrin penuh) |
| `CUTCLIP` |  | Potong objek ke papan keratan (Ctrl+X): salin, kemudian padam |
| `CYLINDER` | `CYL` | Silinder: pusat, jejari dan ketinggian (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Senaraikan blok, atribut dan sifat objek sebagai jadual dalam lukisan atau fail CSV |
| `DATALINK` | `DL` | Jadual daripada fail CSV yang mengingati fail itu, supaya ia boleh dibaca semula |
| `DATALINKUPDATE` | `DLU` | Baca semula fail pautan data dan isi semula jadualnya |
| `DCALIGNED` | `DCALI` | Kekangan dimensi: jarak sebenar antara titik, antara titik dan garisan, atau antara dua garisan |
| `DCANGULAR` | `DCANG` | Kekangan dimensi: sudut antara dua garisan, atau sudut lengkok |
| `DCCONVERT` |  | Tukar dimensi yang dilukis pada geometri yang boleh dikekang kepada kekangan dimensi |
| `DCDIAMETER` | `DCDIA` | Kekangan dimensi: diameter bulatan atau lengkok |
| `DCDISPLAY` |  | Tunjuk atau sembunyikan kekangan dimensi pada lukisan |
| `DCHORIZONTAL` | `DCHOR` | Kekangan dimensi: jarak mengufuk |
| `DCLINEAR` | `DCLIN` | Kekangan dimensi: jarak mengufuk atau menegak, dari tempat anda meletakkannya |
| `DCRADIUS` | `DCRAD` | Kekangan dimensi: jejari bulatan atau lengkok |
| `DCVERTICAL` | `DCVER` | Kekangan dimensi: jarak menegak |
| `DELBLOCKS` |  | Padam blok: setiap rujukan (yang bersarang juga, pada setiap helaian) dan takrifannya |
| `DELCONSTRAINT` | `DELCON` | Alih keluar setiap kekangan (geometri dan dimensi) daripada objek yang anda pilih |
| `DELOPENING` |  | Keluarkan pintu atau tingkap daripada dinding. |
| `DESCRIBE` | `DESC` | Nyatakan apa yang ada dalam lukisan: berapa objek, jenis apa, sebesar mana, dan apa yang dipilih. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Kosongkan pilihan (Esc) |
| `DETAILS` | `DET` | Perincian syarikat anda sendiri, dijumpai untuk apa yang anda lukis: cari, tambah blok, senaraikan, alih keluar, hidupkan atau matikan tawaran. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Lukis gambar rajah daripada teks: carta alir Mermaid, gambar rajah komponen PlantUML, D2, senarai dari-ke atau XML draw.io, sebagai blok dan penyambung yang boleh anda sunting |
| `DIMALIGNED` | `DAL`, `DIMALI` | Jarak sebenar antara dua titik |
| `DIMANGULAR` | `DAN`, `DIMANG` | Sudut antara dua garisan, sudut lengkok, atau melalui tiga titik |
| `DIMARC` | `DAR` | Dimensi panjang lengkok: jarak sepanjang lengkok, dengan simbol lengkok (DAR) |
| `DIMASZ` |  | Tetapan dimensi: Saiz anak panah |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Dimensi bertindih dari satu garisan asas |
| `DIMBREAK` | `DBREAK` | Putuskan garis dimensi dan garis lanjutan di tempat ia bersilang dengan objek lain (Auto), antara dua titik (Manual), atau alih keluar putusannya |
| `DIMCONSTRAINT` | `DCON` | Kekangan dimensi: linear, sejajar, sudut, jejari, diameter, tukar |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Rantai dimensi, setiap satu dari hujung yang terakhir |
| `DIMDEC` |  | Tetapan dimensi: Tempat perpuluhan |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter lengkok atau bulatan |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Bebaskan dimensi daripada objek yang ia dikaitkan (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Tukar teks dimensi (Utama, Teks baharu, Putar) atau condongkan garis lanjutan (Serong) |
| `DIMEXE` |  | Tetapan dimensi: Lanjutan melepasi garis dimensi |
| `DIMEXO` |  | Tetapan dimensi: Ofset dari asal |
| `DIMGAP` |  | Tetapan dimensi: Jurang di sekeliling teks |
| `DIMINSPECT` |  | Dimensi pemeriksaan: bingkai di sekeliling nilai dengan label dan kekerapan bahagian diperiksa |
| `DIMJOGGED` | `DJO`, `JOG` | Dimensi jejari berpatah: jejari dilukis dari titik yang lebih dekat apabila pusatnya jauh (DJO) |
| `DIMJOGLINE` | `DJL` | Tambah simbol patah pada garis dimensi linear atau sejajar, untuk menunjukkan jarak tidak dilukis mengikut skala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Jarak mengufuk atau menegak (R untuk sebarang sudut) |
| `DIMLUNIT` |  | Tetapan dimensi: format panjang (1 saintifik, 2 perpuluhan, 3 kejuruteraan, 4 seni bina, 5 pecahan) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Dimensi ordinat: jarak X atau Y sesuatu titik dari asal UCS, pada petunjuk (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Ganti pembolehubah dimensi pada dimensi yang dipilih tanpa menukar gayanya; Clear mengembalikan gaya (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Jejari lengkok atau bulatan |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Kaitkan titik dimensi dengan objek, supaya ia mengikut dan mengukur semula apabila objek itu bergerak (DRE) |
| `DIMSCALE` |  | Tetapan dimensi: Skala keseluruhan (saiz × ini) |
| `DIMSPACE` |  | Jarak sama antara dimensi selari, diukur dari satu dimensi asas (0 menjajarkannya, Auto ialah dua kali tinggi teks) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Buat, tukar, tetapkan semasa, padam, guna dan bandingkan gaya dimensi bernama (kotak dialog; -DIMSTYLE pada baris arahan) |
| `DIMTEDIT` | `DIMTED` | Alihkan teks dimensi ke kiri, kanan atau tengah garis dimensi, atau hidupkan atau matikannya |
| `DIMTEXTUNIT` | `DTU` | Teks dimensi dalam mm, cm, m atau km, atau dalam unit lukisan sendiri: dimensi yang dipilih, jika tidak yang baharu (DTU) |
| `DIMTXT` |  | Tetapan dimensi: Tinggi teks |
| `DIST` | `DI` | Jarak dan sudut antara dua titik |
| `DISTRIBUTE` |  | Agihkan objek yang dipilih sama rata, sisi ke sisi atau atas ke bawah: langkah sama antara pusat, atau jurang sama; dua yang paling luar kekal |
| `DIVIDE` | `DIV` | DIVIDE (DIV): tanda yang memotong garisan, lengkok, bulatan, polygaris, splin atau elips kepada bahagian sama. Titik, atau dengan Blok satu blok di setiap tanda. |
| `DOCUMENTS` | `DOCS` | Buka panel Dokumen: semak lukisan keluar dan masuk, semakan, keadaan keluaran dan kelulusan untuk satu folder projek |
| `DOOR` | `DR` | Letakkan pintu dalam dinding. Sisi yang anda klik ialah sisi ia berayun ke. |
| `DRAWORDER` |  | Tukar susunan lukisan: bawa objek ke depan, hantar ke belakang, atau letakkan di atas atau di bawah objek lain. |
| `DUPLICATE` | `DUP` | Salinan yang bergerak mengikut penunjuk: klik untuk meletakkannya (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Sifat lukisan: tajuk, pengarang dan lain-lain, serta pasangan nama dan nilai anda sendiri |
| `DXFOUT` |  | Muat turun lukisan sebagai DXF R12 (Simpan mengekalkan formatnya sendiri) |
| `EATTEDIT` | `DDATTE` | Sunting atribut rujukan blok: nilai, teks dan sifat, satu atribut pada satu masa |
| `ELLIPSE` | `EL` | Titik hujung paksi dan separuh paksi yang lain |
| `ERASE` | `E`, `DELETE` | Padam objek |
| `EXPLODE` | `X` | Pecahkan polygaris, blok dan dimensi kepada bahagiannya |
| `EXPORT` | `EXP` | Simpan salinan lukisan dalam jenis fail yang ditulis oleh add-on |
| `EXPORT3D` | `3DEXPORT` | Eksport model 3D: GLB, OBJ atau STL |
| `EXPORTPOINTS` | `EXPPTS` | Tulis titik, dan titik selitan blok dengan satu atribut sebagai huraian, ke fail CSV atau TXT (PNEZD, PENZD atau XYZ) untuk program BIM dan ukur |
| `EXTEND` | `EX` | Panjangkan objek supaya bertemu dengan yang lain: klik berhampiran hujung, seret melalui beberapa, atau Shift+klik untuk memangkas |
| `EXTRIM` |  | EXTRIM: pilih satu tepi pemotong, kemudian satu sisi. Semua yang bersilang dengan tepi itu dipangkas di sisi tersebut. Bahagian yang akan hilang ditunjukkan semasa anda menggerakkan penunjuk. |
| `EXTRUDE` | `EXT` | Ekstrud objek 2D tertutup menjadi pepejal (3D) |
| `FIELD` |  | Letakkan medan dalam teks, sel jadual atau atribut: tarikh, nama fail, nombor helaian, sifat lukisan, luas atau panjang objek, atau formula |
| `FILLET` | `F` | Bundarkan atau segikan sudut antara dua objek (Jejari (R), Pada setiap sudut polygaris (P), Beberapa (M)) |
| `FIND` |  | Cari dan ganti perkataan dalam teks, nilai atribut dan teks dimensi |
| `FLATTEN` |  | Tetapkan ketinggian (Z) dan ketebalan objek yang dipilih kepada 0, dalam blok yang digunakannya juga. |
| `FLOOR` |  | Pilih tingkat untuk dilukis, tambah satu, atau alih atau salin pilihan ke satu tingkat. |
| `FLOORLAYERS` |  | Tukar tingkat kepada lapisan bernama Floor-Layer, untuk fail yang dihantar kepada seseorang tanpa tingkat. |
| `FLOORS` | `FLR` | Buka panel Tingkat: susun tingkat dalam satu ruang model. |
| `GCCOINCIDENT` |  | Kekangan: dua titik bertemu, atau satu titik kekal pada objek |
| `GCCOLLINEAR` |  | Kekangan: dua garisan kekal pada satu garis |
| `GCCONCENTRIC` |  | Kekangan: dua bulatan atau lengkok berkongsi pusat |
| `GCEQUAL` |  | Kekangan: dua garisan kekal sama panjang, atau dua bulatan atau lengkok kekal jejari yang sama |
| `GCFIX` |  | Kekangan: satu titik atau keseluruhan objek kekal di tempatnya |
| `GCHORIZONTAL` |  | Kekangan: garisan (atau dua titik) kekal mengufuk |
| `GCPARALLEL` |  | Kekangan: dua garisan kekal selari |
| `GCPERPENDICULAR` |  | Kekangan: dua garisan kekal pada sudut tegak |
| `GCSYMMETRIC` |  | Kekangan: dua titik, garisan atau bulatan mencerminkan satu sama lain merentasi satu garisan |
| `GCTANGENT` |  | Kekangan: satu garisan dan satu bulatan atau lengkok (atau dua daripadanya) kekal bertangen |
| `GCVERTICAL` |  | Kekangan: garisan (atau dua titik) kekal menegak |
| `GDSIN` | `GDS` | Lihat susun atur IC (fail aliran GDSII): setiap lapisan dan jenis data sebagai lapisan lukisan, rata, dalam unit pengguna; untuk melihat dan mengukur sahaja (spike makmal) |
| `GEOMCONSTRAINT` | `GCON` | Kekangan geometri: mengufuk, menegak, selari, tangen, koinsiden… |
| `GLBOUT` |  | Eksport model 3D sebagai GLB (glTF) |
| `GRADIENT` | `GD` | Isi satu kawasan dengan kecerunan satu atau dua warna |
| `GRIDMOVE` | `GM` | Alihkan garisan grid dan bawa apa yang bergantung padanya: dinding meregang, tiang, bulatan penanda dan tag bergerak, dimensi mengikut. |
| `GROUP` | `G` | GROUP (G): beri objek yang dipilih satu nama yang dikongsi. Klik pada salah satu daripadanya kemudian memilih semuanya. Enter pada nama membuat kumpulan tanpa nama. |
| `GROUPEDIT` |  | GROUPEDIT: tukar kumpulan. Pilih satu objeknya atau berikan Nama, kemudian Tambah atau Alih keluar objek, Nama semula (RE) untuk menamakannya semula, tukar Huraiannya, atau nyatakan sama ada klik memilihnya secara keseluruhan. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Isi kawasan dengan isian pepejal atau corak: klik di dalamnya, atau pilih objek tertutup (H) |
| `HATCHEDIT` | `HE` | Tukar hatch: corak, skala, sudut, asal, dan pautannya kepada sempadan. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Jana semula polygaris sempadan daripada hatch, sama ada dipautkan kepadanya atau tidak |
| `HATCHTOBACK` |  | Hantar setiap hatch ke belakang segala-galanya yang lain. |
| `HELP` | `?` | Senarai ini |
| `HIDEOBJECTS` |  | Sembunyikan objek yang dipilih sehingga UNISOLATEOBJECTS. Tidak disimpan bersama lukisan. |
| `HISTORY` | `HIST` | HISTORY (HIST): versi lukisan ini — salinan yang disimpan pada komputer ini apabila Studio menyimpannya, dan versi awan — untuk dibuka, dipulihkan, dan dibandingkan dengan apa yang berubah ditunjukkan dengan warna. |
| `ID` |  | Koordinat satu titik |
| `IMAGE` | `IM` | Beri CadCraft fail gambar yang digunakan lukisan (DWG hanya menyimpan tempat ia berada). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Letakkan gambar (PNG atau JPEG) daripada fail. |
| `IMAGECLIP` | `ICL` | Klip gambar kepada segi empat tepat atau poligon, atau alih keluar kliipnya. |
| `IMPORT` | `IMP` | Import fail daripada jenis yang dibaca oleh add-on, ke dalam lukisan ini |
| `INSERT` | `I`, `DDINSERT` | Letakkan blok (Skala (S), Putar (R)); F daripada fail DWG/DXF, L daripada pustaka |
| `INTERSECT` | `IN` | Simpan hanya apa yang pepejal kongsi (3D), atau kawasan yang dikongsi oleh wilayah 2D |
| `ISODRAFT` |  | ISODRAFT: lukisan isometrik dihidupkan atau dimatikan, atau terus pada satah Kiri, Atas atau Kanan. Semasa ia hidup, Ortho dan penjejakan kutub mengikut dua paksi satah, grid dilukis secara isometrik, dan ELLIPSE mempunyai Isobulatan. |
| `ISOLATEOBJECTS` | `ISOLATE` | Tunjukkan hanya objek yang dipilih; segala-galanya yang lain dalam ruang ini disembunyikan sehingga UNISOLATEOBJECTS. Tidak disimpan bersama lukisan. |
| `ISOPLANE` |  | ISOPLANE: pilih satah isometrik untuk dilukis: Kiri, Atas atau Kanan. Enter pergi ke yang seterusnya, seperti F5 semasa lukisan isometrik dihidupkan. |
| `JOIN` | `J` | Cantumkan garisan, lengkok dan polygaris yang bertemu hujung ke hujung menjadi satu polygaris; garisan pada satu garis menjadi satu garisan (J) |
| `LASER` | `LASERCUT` | Buka panel Laser: hantar lapisan ke pemotong laser atau pengukir (kod G GRBL) |
| `LASSOMODE` |  | Tekan dan seret untuk melukis lasso (1) atau segi empat tepat (0) |
| `LAYDEL` |  | Padam satu lapisan dan setiap objek di atasnya (dalam model, pada helaian dan dalam blok) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Buka pengurus lapisan: setiap lapisan dalam satu jadual |
| `LAYERPANEL` |  | Tunjukkan panel lapisan |
| `LAYFRZ` |  | Bekukan lapisan bagi setiap objek yang anda pilih |
| `LAYGROUP` | `LG` | Kumpulkan lapisan ke dalam folder dalam panel Lapisan. |
| `LAYISO` |  | Asingkan lapisan objek yang dipilih (setiap lapisan lain dimatikan) |
| `LAYLOCKFADE` |  | Tetapkan berapa banyak objek pada lapisan terkunci dipudarkan, dan sama ada klik boleh memilihnya. |
| `LAYMCUR` |  | Jadikan lapisan bagi objek yang anda pilih sebagai lapisan semasa |
| `LAYMRG` |  | Gabungkan lapisan: objeknya dipindahkan ke lapisan sasaran, dan lapisan yang digabungkan hilang |
| `LAYOFF` |  | Matikan lapisan bagi setiap objek yang anda pilih |
| `LAYON` |  | Hidupkan setiap lapisan |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Helaian baharu dengan blok tajuk dan viewport |
| `LAYTHW` |  | Nyahbekukan setiap lapisan |
| `LAYUNISO` |  | Hidupkan semula lapisan yang dimatikan oleh LAYISO |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Menukar teks yang ditaip dengan fon Vietnam lama (fon TCVN3 / ABC seperti .VnTime, dan fon VNI seperti VNI-Times) kepada Unicode. Teks sedemikian sudah ditunjukkan seperti yang dibacanya; ini menulisnya semula secara kekal, dengan kiraan dan satu langkah buat asal. |
| `LENGTHEN` | `LEN` | Panjangkan atau pendekkan garisan, lengkok dan polygaris: dengan jumlah, peratusan, kepada jumlah keseluruhan, atau dengan seret (LEN) |
| `LIBRARY` | `LIB` | Panel pustaka: letak item, semak kemas kini, kredit |
| `LIMITS` |  | Tetapkan had lukisan: ON, OFF, atau sudut kiri-bawah dan kanan-atas. Dengan had ON, titik di luarnya ditolak |
| `LINE` | `L` | Segmen lurus, setiap satu sebagai objeknya sendiri |
| `LINETYPE` | `LT`, `CELTYPE` | Jenis garisan yang diperoleh objek baharu (mengikut lapisan, mengikut blok, atau yang bernama) |
| `LINKVIEWS` | `SYNCVIEWS` | Gerakkan dan zum setiap anak tetingkap bersama (pisah skrin), untuk membandingkan dua lukisan atau semakan |
| `LISPEDIT` | `VLIDE` | LISPEDIT (atau VLIDE) membuka penyunting LISP: tetingkap untuk menulis, memuatkan dan mencuba rutin. Muat ke dalam lukisan membaca setiap bentuk, seperti memuatkan fail dengan APPLOAD, dan membuat arahannya. Jalankan pilihan menilai bentuk yang dipilih, atau bentuk tempat kursor berada. Konsol menunjukkan apa yang dicetak oleh rutin dan setiap ralat dengan barisnya. Kurungan padanan ditandakan semasa anda menaip dan Enter menjarakkan baris baharu. Baharu, Buka dan Simpan berfungsi pada fail .lsp. Senarai di sebelah teks menunjukkan fungsi yang ditakrifkan oleh rutin, yang dipanggilnya tetapi LISP ini belum ada, dan setiap fungsi yang dimilikinya. Tetingkap tidak menyekat lukisan, jadi rutin boleh meminta titik; Stop atau Esc menamatkan rutin yang sedang berjalan. |
| `LIST` | `LI`, `LS` | Terangkan objek dalam sejarah |
| `LTSCALE` | `LTS` | Skala jenis garisan lukisan (setiap sengkang dan jurang didarabkan dengannya) |
| `LWDISPLAY` | `LWT` | Tunjuk atau sembunyikan ketebalan garisan pada skrin (butang LWT dalam bar status) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Ketebalan garisan yang diperoleh objek baharu (mengikut lapisan, mengikut blok, lalai, atau mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Lapisan peta di bawah ruang model: sistem koordinat lukisan, jubin, WMS, WMTS, ArcGIS, gambar |
| `MASSPROP` |  | MASSPROP: sifat keratan wilayah dan objek tertutup: luas, perimeter, sentroid, momen dan hasil darab inersia, jejari kisaran dan paksi utama. Tepat untuk garisan dan lengkok. Ia boleh menulis laporan ke fail teks. |
| `MATCHPROP` | `MA`, `PAINTER` | Padankan sifat: salin lapisan, warna dan lebih banyak lagi daripada satu objek kepada yang lain (MA) |
| `MEASURE` | `ME` | MEASURE (ME): satu tanda setiap panjang yang diberikan sepanjang garisan, lengkok, bulatan, polygaris, splin atau elips, dari hujung yang paling dekat dengan pilihan anda. Titik, atau dengan Blok satu blok di setiap tanda. |
| `MEASUREGEOM` | `MEA` | Ukur jarak, jejari, sudut atau luas (MEA) |
| `MINSERT` |  | MINSERT: letakkan blok dalam baris dan lajur sekaligus. Setiap satu ialah rujukannya sendiri, jadi anda boleh mengalih atau memadam mana-mana daripadanya. |
| `MIRROR` | `MI` | Cermin objek merentasi satu garisan |
| `MLEADER` | `MLD`, `MLEAD` | Multipetunjuk: anak panah, petunjuk dan nota, sebagai satu objek (MLD) |
| `MLEADERALIGN` | `MLA` | Jajarkan multipetunjuk dengan salah satu daripadanya sepanjang satu arah, dengan jarak sama, atau diagihkan antara dua titik (MLA) |
| `MLEADERCOLLECT` | `MLC` | Kumpulkan beberapa multipetunjuk menjadi satu: blok mereka dalam satu baris atau lajur, atau nota mereka satu di bawah satu (MLC) |
| `MLEADEREDIT` | `MLE` | Tambah garis petunjuk pada multipetunjuk atau alih keluarnya; tukar kandungannya antara teks dan blok (MLE) |
| `MLINE` |  | Lukis garisan selari bersama, dicantumkan pada sudut. |
| `MOVE` | `M` | Alih objek mengikut titik asas dan titik kedua |
| `MSPACE` | `MS` | Bekerja pada model melalui viewport bagi helaian yang terbuka (atau klik dua kali di dalam viewport). |
| `MTEXT` | `MT`, `T` | Teks perenggan: seret lebarnya, kemudian taip di tempat; Enter memulakan perenggan baharu (T) |
| `MVIEW` | `MV` | Viewport ke model, pada layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pandangan bernama: simpan paparan di skrin (atau tetingkap) dengan satu nama dan kembali kepadanya (NV) |
| `NCOPY` |  | Salin objek daripada rujukan blok atau lukisan dipautkan ke dalam lukisan, tanpa memecahkannya. |
| `NEARBY` |  | Nyatakan apa yang berada berhampiran kursor, yang terdekat dahulu, dengan jarak dan sisinya. |
| `NEW` |  | Mulakan lukisan baharu |
| `OBJECTSCALE` | `OBJSCALE` | Skala anotasi bagi teks dan dimensi beranotasi: tambah skala, padam satu, tambah skala semasa, atau senaraikannya (setiap viewport menunjukkannya pada saiz untuk skalanya sendiri) |
| `OBJOUT` |  | Eksport model 3D sebagai OBJ |
| `OFFSET` | `O` | Salinan selari pada jarak |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: bagaimana OFFSET menutup jurang di sudut luar polygaris. 0 melanjutkan segmen, 1 menambah lengkok, 2 menambah potongan lurus. Disimpan untuk sesi ini. |
| `OLELIST` | `OLES` | Senaraikan objek OLE yang dibawa oleh lukisan dan letakkan salinan gambar salah satunya di tempat yang anda pilih |
| `OPEN` |  | Buka DWG atau DXF dari komputer ini |
| `OPENIN3D` |  | Buka lukisan ini dalam aplikasi pemodelan 3D, dalam tab baharu (tiada apa yang dimuat naik) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Buka menu snap objek: pilih snap mana yang dihidupkan. Juga klik kanan pada Snap dalam bar status. |
| `OVERKILL` |  | Padam objek pendua dan gabungkan garisan dan lengkok yang bertindih atau hujung ke hujung, dalam had toleransi. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parameter: parameter pengguna dan kekangan dimensi dalam satu jadual |
| `PARTSLIST` | `PLIST` | Jadual senarai bahagian bagi setiap bahagian standard dan keratan keluli yang diletakkan dari Pustaka |
| `PASTEAREA` | `PAREA` | Tampal kawasan yang disalin dalam MarkupCraft (Salin kawasan) pada saiz sebenarnya, sebagai gambar. |
| `PASTEBLOCK` |  | PASTEBLOCK: tampal apa yang anda salin sebagai satu blok. Blok itu mendapat nama sendiri; RENAME memberinya nama anda. |
| `PASTECLIP` |  | Tampal papan keratan: ia mengikut kursor, klik di tempat ia hendak pergi (Ctrl+V) |
| `PASTEORIG` |  | Tampal papan keratan pada koordinat tempat ia disalin (Ctrl+Shift+V) |
| `PDF` |  | Beri CadCraft fail PDF yang digunakan oleh underlay lukisan |
| `PDFADJUST` |  | Pudarkan, kontras, monokrom atau matikan underlay PDF |
| `PDFATTACH` | `PDFATT` | Lampirkan halaman PDF sebagai underlay (PDFATTACH) |
| `PDFCLIP` |  | Klip underlay PDF kepada segi empat tepat atau poligon |
| `PDFIMPORT` | `PDFIM` | Tukar garisan, isian dan teks halaman PDF kepada objek lukisan (PDFIMPORT) |
| `PDFLAYERS` |  | Hidupkan atau matikan lapisan underlay PDF |
| `PEDIT` | `PE` | Sunting polygaris: tutup, buka, cantum, lebar, lengkung padan, lengkung splin, nyahlengkung, penjanaan jenis garisan, songsang; garisan, lengkok dan splin boleh ditukar kepada polygaris |
| `PHOTOSKETCH` | `PSK` | Menukar foto lakaran tangan di atas kertas kepada garisan dan lengkok pada skala, meluruskan perspektif dan memberi setiap warna pen lapisannya sendiri. |
| `PICKSTYLE` |  | PICKSTYLE: sama ada memilih satu objek dalam kumpulan memilih seluruh kumpulan (1, tetapan permulaan) atau hanya objek itu (0). Disimpan untuk sesi ini. |
| `PLAN` |  | Pusingkan pandangan supaya paksi X UCS (UCS semasa, UCS yang disimpan, atau Dunia) mendatar pada skrin. Tiada apa dalam lukisan bergerak. |
| `PLINE` | `PL` | Polygaris segmen garisan dan lengkok |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot ke PDF: satu layout, atau model pada skala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Jadual gaya plot: tetapkan apa yang dicetak oleh setiap warna (warna, hitam, kelabu, dakwat, ketebalan garisan); disimpan bersama lukisan (STYLESMANAGER) |
| `POINT` | `PO` | Objek titik |
| `POINTCLOUD` | `PC` | awan titik yang dilampirkan: hiris, ketinggian, ketebalan, warna, saiz, boleh dilihat, zum, leraikan |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | lampirkan awan titik (LAS, LAZ, XYZ, PTS) di bawah lukisan |
| `POLARANG` |  | Langkah penjejakan kutub dalam darjah (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Poligon sekata |
| `PRESSPULL` |  | Tolak atau tarik muka pepejal (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Buka panel Sifat (juga Ctrl+1, atau klik dua kali pada objek) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Lipat panel Sifat ke tepi tetingkap |
| `PSPACE` | `PS` | Tinggalkan viewport yang sedang anda kerjakan dan kembali ke helaian (atau klik dua kali di luarnya). |
| `PUBLISH` | `-PUBLISH` | Plot beberapa atau semua helaian ke dalam satu PDF (satu halaman dan satu penanda buku bagi setiap helaian) |
| `PURGE` | `PU` | Alih keluar takrif blok yang tiada apa gunakan |
| `QDIM` |  | Dimensi pantas: dimensikan beberapa objek sekaligus (berterusan, garisan asas, berselang-seli, ordinat, jejari atau diameter) |
| `QPMODE` | `QP` | Sifat Pantas oleh kursor dihidupkan atau dimatikan |
| `QSELECT` | `QS` | Pilihan pantas: setiap objek jenis yang lapisan, warna, saiz atau namanya sepadan (QS) |
| `RASTERSNAP` |  | Hidupkan atau matikan snap ke garisan helaian imbasan. |
| `RAY` |  | Sinar: garisan pembinaan dari satu titik, tanpa hujung ke satu arah. |
| `RECOVER` |  | Membuka DXF atau DWG yang rosak: melangkau apa yang tidak dapat dibaca dan bukannya menolak fail, menyatakan apa yang dilangkau, kemudian menyemak dan membaiki lukisan seperti AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Polygaris tertutup daripada dua bucu |
| `REDLINE` | `RDL` | Redline ke semakan: baca pakej redline MarkupCraft, terima atau tolak setiap perubahan, awankan yang diterima dengan log semakan, dan simpan fail jawapan (RDL) |
| `REDO` |  | Buat semula apa yang dibuat asal |
| `REFCLOSE` |  | Tamatkan penyuntingan blok di tempat: simpan, atau buang perubahan |
| `REFEDIT` |  | Sunting blok di tempat, tempat rujukannya berada, dengan selebihnya lukisan dipudarkan; REFCLOSE menyimpannya |
| `REGEN` | `RE` | Bina semula apa yang dilukis dalam tab ini daripada lukisan |
| `REGENALL` | `REA` | Bina semula apa yang dilukis dalam setiap tab, anak tetingkap dan lukisan terbuka |
| `REGION` | `REG` | REGION (REG): buat kawasan rata (wilayah) daripada objek tertutup, atau daripada garisan, lengkok dan polygaris yang menutup gelung hujung ke hujung. UNION, SUBTRACT dan INTERSECT kemudian menggabungkan wilayah, dan MASSPROP memberikan sifat keratannya. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Daftarkan beberapa imbasan: letakkan dalam satu bingkai mengikut pasangan titik yang dipilih atau sasaran, perhalusi dengan ICP, eksport satu LAS atau E57 |
| `REINIT` |  | Muat semula fail alias anda |
| `RENAME` | `-RENAME`, `REN` | Namakan semula lapisan atau blok (setiap objek atau rujukan mengikut) |
| `REVCLOUD` | `RC` | Awan semakan: bulatkan segi empat tepat, poligon, laluan bebas atau objek (RC) |
| `REVOLVE` | `REV` | Putarkan objek 2D tertutup mengelilingi paksi menjadi pepejal (3D) |
| `ROTATE` | `RO` | Putar objek mengelilingi titik asas |
| `SAMPLES` | `SAMPLE` | Buka salah satu lukisan sampel CadCraft (set seni bina, as-built) untuk belajar daripadanya |
| `SAVE` | `QSAVE` | Muat turun lukisan dalam formatnya (DWG atau DXF) |
| `SAVEAS` |  | Muat turun lukisan sebagai DWG atau DXF: pilih yang mana |
| `SAYSEL` |  | Nyatakan apa yang dipilih, satu ayat bagi setiap satu. |
| `SCALE` | `SC` | Skalakan objek mengelilingi titik asas |
| `SCALELISTEDIT` | `SCALELIST` | Tambah, sunting dan padam skala lukisan sendiri; ia muncul dalam senarai skala viewport dan plot, dan disimpan dalam fail (SCALELIST) |
| `SCANALIGN` | `SCL` | Jajarkan helaian imbasan kepada dua titik: alih, putar dan, jika anda pilih, skalakan. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Selitkan lukisan imbasan: PNG, JPEG atau TIFF (satu halaman atau semua halaman bagi fail berbilang halaman) atau halaman PDF yang merupakan gambar. |
| `SCANCLEAN` | `SCC` | Jadikan helaian imbasan hitam dan putih serta alih keluar titik kecil. |
| `SCANCROP` | `SCR` | Potong helaian imbasan kepada tetingkap. |
| `SCANDESKEW` | `SCD` | Cari sudut garisan panjang helaian imbasan dan pusingkan helaian supaya tegak sebaik sahaja anda menerima sudut itu. |
| `SCANERASE` | `SCE` | Padam kawasan helaian imbasan: segi empat tepat, poligon atau lasso. |
| `SCANINFO` | `SCI` | Tunjukkan fail asal helaian imbasan dan langkah yang diambil sejak itu. |
| `SCANSCALE` | `SCS` | Skalakan helaian imbasan: pilih dua titik padanya dan taip jarak sebenar antara keduanya. |
| `SCANTRACE` | `SCT` | Surih helaian imbasan kepada garisan dan lengkok pada lapisan baharu, mengikut toleransi yang anda tetapkan. Teks dan hatch kekal sebagai raster. |
| `SELECT` |  | Pilih objek sekarang (untuk Sebelumnya (P) dalam arahan seterusnya) |
| `SELECTALL` | `AI_SELALL` | Pilih setiap objek yang boleh anda sunting pada tab ini (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Pilih setiap objek seperti yang anda pilih: jenis, lapisan dan warna yang sama (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Tunjuk panel Set Helaian: helaian daripada banyak lukisan, dinomborkan, diterbitkan sebagai satu PDF. |
| `SHORTCUTS` | `KEYS` | Berikan mana-mana arahan kekunci sendiri (Ctrl atau Alt dengan huruf, atau kekunci fungsi yang bebas), disimpan dalam pelayar atau aplikasi desktop ini. |
| `SHXFONTS` | `SHX` | Berikan CadCraft fon SHX daripada folder atau fail, supaya gaya teks yang menamakannya dilukis dengannya (senarai, alih keluar, songsang) |
| `SKETCHFIX` | `SKF` | Lukis goresan bebas; setiap satu menjadi garisan, bulatan, lengkok, segi empat tepat atau polygaris yang kemas, dibetulkan sudutnya dan dicantumkan dengan yang lain. |
| `SKETCHLIVE` | `SKL` | Lakar dengan pen: setiap goresan menjadi garisan, bulatan, lengkok atau segi empat tepat yang tepat semasa anda mengangkat pen, dilekatkan pada lukisan, dengan saiznya untuk ditaip di atasnya. |
| `SPLINE` | `SPL` | Lukis splin melalui titik (atau dengan poligon kawalan), atau tukar polygaris kepadanya |
| `SPLINEDIT` | `SPE` | Sunting splin: padankan titik, titik kawalan dan pemberat, buka atau tutupnya, songsangkannya, atau tukarkannya kepada polygaris |
| `SPLIT` |  | Bahagikan kawasan lukisan kepada anak tetingkap (seperti VPORTS pada model; juga dari helaian) |
| `STEELMEMBER` | `SMEMBER` | Anggota keluli dalam 3D daripada keratan piawai: dua titik (rasuk) atau titik asas dan ketinggian (Column) |
| `STLOUT` |  | Eksport model 3D sebagai STL (milimeter) |
| `STRETCH` | `S` | Regang: seret tetingkap silang ke atas hujung untuk mengalih; apa yang di dalam bergerak, selebihnya kekal (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Gaya teks: fon, tinggi, lebar dan kecondongan yang diambil oleh teks baharu (kotak dialog; -STYLE pada baris arahan) |
| `SUBTRACT` | `SU` | Keluarkan pepejal daripada yang lain (3D), atau wilayah 2D daripada wilayah |
| `SWBOUT` | `SWMACRO` | Muat turun makro untuk SolidWorks (.swb) yang membina semula model sebagai satu lakaran berkekang |
| `SWEEP` |  | Sapu objek 2D tertutup sepanjang laluan (garisan, polygaris, lengkok, bulatan) menjadi pepejal (3D) |
| `TABLE` | `TB` | Buat jadual: baris dan lajur, atau daripada sel hamparan pada papan keratan atau fail CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Sunting jadual: taip dalam sel, selit dan padam baris serta lajur, saiz, sel bercantum, penjajaran |
| `TABLEEXPORT` |  | Simpan apa yang ditunjukkan jadual sebagai fail CSV |
| `TABLEPASTE` | `PASTETABLE` | Buat jadual daripada sel hamparan pada papan keratan |
| `TABLESTYLE` | `TS` | Gaya jadual: tinggi teks, penjajaran, margin dan sempadan untuk baris tajuk, pengepala dan data |
| `TAGS` |  | Tag pada rujukan blok: takrifkan tag (jenis, nilai dibenarkan, blok yang dipakainya), tetapkannya pada rujukan yang dipilih, dan senaraikannya sebagai jadual yang boleh disimpan sebagai CSV |
| `TEXT` | `DT`, `DTEXT` | Teks satu baris; Enter memulakan baris seterusnya |
| `TEXTEDIT` | `ED`, `DDEDIT` | Sunting teks di tempat: pilih satu teks (atau klik dua kali padanya) (ED) |
| `TEXTMASK` | `TMASK` | Letakkan topeng latar belakang di belakang teks (latar belakang lukisan atau warna), atau alihkannya. |
| `TEXTTOFRONT` |  | Bawa semua teks, dimensi dan petunjuk ke depan segala-galanya yang lain. |
| `TOOLBAR` |  | Pilih apa yang ditunjukkan oleh butang bar alat: ikon dan teks, hanya ikon, atau hanya teks (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Letakkan bar alat di atas, bawah, kiri atau kanan tetingkap |
| `TOOLBARROWS` |  | Pilih berapa baris yang digunakan oleh bar alat: bungkus untuk muat, 2, atau 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Jadikan bar di atas lukisan standard atau padat |
| `TOUCHCROSSHAIR` | `TCX` | Rangka silang yang diimbangi untuk melukis dengan jari: satu jari menggerakkan rangka silang yang terletak di atas dan di sisinya, supaya jari tidak menutupi titik pilihan. Mengangkat jari tidak memilih apa-apa; butang Klik atau ketik dengan jari kedua memilih pada rangka silang, dan menahan Klik semasa anda bergerak menyeret. Tekan lama atau butang Enter ialah Enter. Dua jari menggelek dan zum. Pilihan: ON, OFF, Auto (hidup hanya di tempat jari ialah satu-satunya penunjuk), Jarak (D), Sisi. |
| `TOUR` | `TUTORIAL` | Ulang lawatan enam langkah lukisan pertama |
| `TRIM` | `TR` | Potong objek kembali ke tempat objek lain menyilang: klik satu bahagian, seret melalui beberapa, atau Shift+klik untuk melanjutkan |
| `TRIMEXTENDMODE` |  | Cara TRIM dan EXTEND bermula: 1 Pantas (setiap objek ialah tepi pemotong atau sempadan), 0 Piawai (pilih tepi dahulu) |
| `TTR` |  | Bulatan bertangen kepada dua objek, dengan jejari yang anda berikan (sama seperti CIRCLE T). |
| `TURNLEFT` |  | Pusingkan pandangan 90° ke kiri (lawan jam): UCS Z -90, dan pandangan mengikut. Tiada apa dalam lukisan bergerak. |
| `TURNRIGHT` |  | Pusingkan pandangan 90° ke kanan (ikut jam): UCS Z 90, dan pandangan mengikut. Tiada apa dalam lukisan bergerak. |
| `TURNWORLD` |  | Kembali ke dunia: UCS Dunia, dan pandangan mendatar semula. |
| `TXT2MTXT` | `T2M` | Cantumkan teks satu baris menjadi satu teks perenggan, dari atas ke bawah. |
| `UCS` |  | Sistem koordinat anda sendiri: satu asal dan paksi X (asal, sudut Z, 3 titik, Objek, Sebelumnya, Dunia, Bernama). Titik yang anda taip, ortho, penjejakan kutub, grid dan teks baharu mengikutnya; pandangan dipusingkan supaya paksi X-nya mendatar. Tiada apa dalam lukisan bergerak. |
| `UNDO` | `U` | Buat asal arahan terakhir |
| `UNGROUP` |  | UNGROUP: leraikan kumpulan. Pilih objek kumpulan, atau berikan Nama. Objek kekal dalam lukisan. |
| `UNION` | `UNI` | Cantumkan pepejal menjadi satu (3D), atau wilayah 2D menjadi satu wilayah |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Tunjukkan semula setiap objek yang disembunyikan oleh ISOLATEOBJECTS atau HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cara panjang ditunjukkan dan ditaip: perpuluhan, kaki dan inci, pecahan (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Kira semula medan, dan pilih bila ia dikemas kini dengan sendirinya |
| `USDOUT` |  | Eksport model 3D sebagai USD (.usda teks, .usdc binari atau pakej .usdz) |
| `VIEW` | `-VIEW`, `V` | Pandangan 3D standard, perspektif atau selari (3D) |
| `VIEWBASE` | `FLATSHOT` | Letakkan pandangan 2D rata bagi pepejal 3D (depan, atas, sisi atau isometrik, garisan tersembunyi putus-putus) pada helaian atau dalam model |
| `VIEWLABEL` | `VL` | Tajuk pandangan pada helaian yang menunjukkan nama pandangan viewportnya, dan berubah mengikutnya. |
| `VOICE` |  | Hidupkan atau matikan arahan yang dituturkan. Ia dikenali pada komputer ini. |
| `VPCLIP` |  | Klip viewport helaian kepada objek tertutup atau poligon yang dilukis; Delete menjadikannya segi empat tepat semula |
| `VPLAYER` |  | Bekukan atau nyahbekukan lapisan dalam sesetengah viewport sahaja (Freeze, Thaw, Reset), dan pilih lapisan mana yang viewport baharu mula dibekukan (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Bahagikan kawasan lukisan kepada anak tetingkap, setiap satu dengan pandangannya sendiri (pada helaian: viewport, seperti MVIEW) |
| `VPVIEW` |  | Tetapkan apa yang ditunjukkan oleh viewport: pilih tetingkap pada model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Gaya visual pandangan 3D: berlorek, tepi, garisan tersembunyi, rangka dawai, sinar-X |
| `WALL` | `WA` | Lukis dinding 2D seperti polygaris. Ia bercantum, dan membawa pintu dan tingkap. |
| `WALLARC` | `WARC` | Lukis lengkok dinding. Dinding pelan adalah lurus, jadi lengkok dilukis sebagai dinding lurus pendek (15 darjah setiap satu) yang bercantum. |
| `WALLDELSEG` |  | Padam sekeping dinding antara dua titik. Apa yang tinggal kekal sebagai satu atau dua dinding. |
| `WALLDIM` |  | Taip nilai baharu untuk dimensi: dinding di hujung jauhnya bergerak tegak lurus kepada dirinya, dinding di hujung pertama kekal, dan dinding yang bercantum dengannya mengikut. |
| `WALLDISJOIN` |  | Pilih dinding berhampiran satu hujung untuk tidak membenarkan cantuman di hujung itu: hujung dilukis tegak dan tiada apa mengikutnya. Pilih semula untuk membenarkannya. |
| `WALLGRID` |  | Kunci dinding pada garisan grid: sepanjangnya, atau satu hujung padanya. Alih garisan dengan GRIDMOVE dan dinding mengikut. |
| `WALLHOLD` |  | Jajar dan kunci: dinding mengekalkan tempatnya terhadap dinding lain (pada garisnya, atau pada jarak yang dimilikinya). Jika satu bergerak, yang lain mengikut. |
| `WALLHOLDDIM` |  | Kunci jarak antara dua dinding selari. Jika satu bergerak, yang lain mengikut untuk mengekalkannya. |
| `WALLHOLDS` |  | Senaraikan kunci pada dinding. |
| `WALLJOINS` |  | Berikan setiap dinding bagi lukisan lama id dan simpan cantuman antaranya. Ini juga berlaku pada perubahan pertama yang anda buat. |
| `WALLJOINSTYLE` |  | Klik satu sudut di mana dua dinding bertemu hujung ke hujung untuk menukar cara ia dilukis: mitre, butt, segikan. T menukar dinding mana yang melalui. |
| `WALLOFFSET` | `WO` | Alih dinding tegak lurus kepada dirinya dengan satu jarak (dinding yang bercantum dengannya mengikut), atau buat salinan pada jarak itu. |
| `WALLPICK` |  | Buat dinding pada garisan atau polygaris dalam lukisan, dengan garisan yang bercantum dengannya jika anda kata Ya. |
| `WALLPOLY` | `WP` | Lukis dinding mengelilingi poligon sekata 3 hingga 64 sisi, seperti POLYGON. |
| `WALLRECT` | `WR` | Lukis empat dinding bercantum dari dua bucu bertentangan, seperti RECTANG. |
| `WALLREJOIN` |  | Jadikan dua bahagian dinding menjadi satu dinding semula. Yang pertama mengekalkan tempatnya dalam lukisan. |
| `WALLROT` |  | Lukis empat dinding bercantum sebagai segi empat tepat yang diputar pada sebarang sudut: sisi pertama, kemudian sejauh mana keluarnya. |
| `WALLSPLIT` | `WS` | Pisahkan dinding kepada dua pada satu titik atau di tempat dinding lain bersilang. Bahagiannya kekal bercantum melainkan anda minta jurang atau hujung bebas. Pintu dan tingkap mengikut bahagiannya. |
| `WALLSPLITGAP` |  | Pisahkan dinding dengan meninggalkan jurang: taip jurangnya, pilih dinding, kemudian titik. Bahagian mengekalkan hujung bebas dan boleh dicantum semula. |
| `WALLSTRETCH` |  | Regang dengan tetingkap: hujung dinding di dalamnya bergerak, dinding yang sepenuhnya di dalam bergerak sepenuhnya, dan dinding yang berhujung pada sisinya meluncur bersama. |
| `WALLTAN` |  | Teruskan dinding dengan lengkok yang meninggalkannya sepanjang dinding (dilukis sebagai dinding lurus pendek). |
| `WALLTRACE` |  | Buat dinding mengelilingi kawasan tertutup terkecil bagi garisan dan dinding di sekeliling titik yang anda klik. |
| `WALLUNHOLD` |  | Alih kunci daripada dinding (dan kunci dinding lain kepadanya). |
| `WBLOCK` | `W`, `-WBLOCK` | Tulis blok, beberapa objek atau keseluruhan lukisan ke fail DWG atau DXF baharu (W) |
| `WEDGE` | `WE` | Baji: dua bucu dan ketinggian; ia landai dari bucu pertama (3D) |
| `WHEREAMI` | `WHERE` | Nyatakan di mana kursor berada. |
| `WHOHAS` |  | Menyatakan siapa yang membuka lukisan. CadCraft Studio menyimpan fail kunci kecil di sebelah setiap lukisan terbuka (Plan.dwg.cclock: siapa, sejak bila, versi mana) dan mengalih keluarnya apabila ditutup. Pilihan: Semasa (C) (lukisan terbuka), Fail (pilih satu), FOlder (setiap lukisan dalam folder yang dibuka di mana-mana; ini juga membolehkan Studio menyimpan fail kunci dalam folder itu), Laluan (P) (taip satu), Nama (nama yang dilihat orang lain). Kunci yang tidak disegarkan selama lima minit dikatakan lapuk. Tidak tersedia dalam pelayar. |
| `WINDOW` | `WN` | Letakkan tingkap dalam dinding. |
| `XATTACH` | `XA` | Pautkan DWG atau DXF lain ke dalam lukisan ini, dipaparkan sebagai baca sahaja (XREF menyenaraikan dan memuat semula mereka) |
| `XCLIP` | `XC` | Klip rujukan blok dan lukisan dipautkan kepada segi empat tepat atau poligon, atau alih keluar kliipnya. |
| `XLINE` | `XL` | Garisan pembinaan, tanpa hujung ke dua arah: melalui dua titik, mengufuk, menegak, pada sudut, membahagi dua sudut, atau ofset daripada satu garisan. |
| `XREF` | `XR`, `-XREF` | Lukisan dipautkan (rujukan luaran): senarai, lampirkan, muat semula, ikat, leraikan |
| `ZOOM` | `Z` | Lingkungan, atau tetingkap |
