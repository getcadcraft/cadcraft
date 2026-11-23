---
title: Peta arahan: apa yang perlu ditaip
summary: Setiap arahan CadCraft dengan nama pendeknya, A hingga Z, dibuat daripada program itu sendiri, dan tabiat daripada perisian lukisan lain yang berbeza.
keywords: peta arahan, arahan, alias, nama pendek, datang daripada, senarai arahan, apa yang perlu ditaip, padam, pangkas, setara, perbezaan
from: 9426856f
---

CadCraft menerima nama arahan dan nama pendek yang biasa anda kenali daripada perisian lukisan lain: taip `L` untuk garisan, `TR` untuk memangkas, `E` untuk memadam. Jadi tiada jadual terjemahan untuk dipelajari bagi kebanyakan arahan: nama yang anda tahu ialah nama di sini. Senarai di bawah ialah setiap arahan yang CadCraft ada, dibuat daripada program itu sendiri. {{key:Enter}} mengulang arahan terakhir; `HELP` pada baris arahan mencetak senarai yang sama.

Yang sedikit berbeza, atau belum dibina:

- **Save** memuat turun salinan dalam pelayar ({{cmd:SAVE}}, {{cmd:SAVEAS}}); dalam CadCraft Studio ia menulis fail. Lihat [Datang daripada perisian lukisan lain](topic:coming-from).
- **PLOT** menghasilkan PDF (juga PNG dan SVG), dengan jadual gaya plot; tiada pengurus persediaan halaman.
- **DIMSTYLE** dan **PEDIT** telah dibina; **PEDIT** tiada pilihan Edit-vertex (grip melakukannya).
- **TABLE** belum dibina; {{cmd:XREF}}, {{cmd:SPLINE}} dan {{cmd:WBLOCK}} sudah dibina.
- Arahan sendiri sesuatu rutin (AutoLISP `C:NAME`) muncul selepas anda memuatnya dengan {{cmd:APPLOAD}}; ia tidak disenaraikan di sini.

## Semua arahan (402)

| Arahan | Nama pendek | Apa yang dilakukannya |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbit paparan 3D dengan butang kiri |
| `ACCESS` | `AX` | Hidupkan atau matikan lukisan tanpa penglihatan: hasil dituturkan melalui pembaca skrin anda, kursor papan kekunci pada lukisan, bunyi snap dan arahan yang dituturkan. |
| `ALIASEDIT` |  | Sunting alias arahan dalam satu fail teks (format L, *LINE yang biasa) |
| `ALIGN` | `AL` | Alih dan putar objek supaya titik sumber jatuh pada titik destinasi (satu, dua atau tiga pasangan), dan skalakannya jika anda mahu |
| `ALIGNPANEL` | `ALP` | Buka panel Jajar dan agih |
| `ALIGNTO` |  | Jajarkan tepi kiri, tengah, kanan, atas, tengah atau bawah objek yang dipilih, pada pilihan, objek pertama atau terakhir yang dipilih, atau pada satu titik |
| `ANNOALLVISIBLE` | `ANNOALL` | Tunjukkan objek beranotasi pada setiap skala, atau hanya di tempat skala viewport (atau lukisan) berada dalam senarai mereka |
| `ANNOSCALE` | `CANNOSCALE` | Tetapkan skala anotasi lukisan: teks dan dimensi beranotasi diubah saiz supaya dicetak pada saiz yang sama |
| `APPLOAD` | `AP` | Muat aplikasi: rutin LISP (.lsp) dan fail dialog mereka (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Lengkok: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | Luas dan perimeter mengikut titik atau objek; Add dan Subtract mengekalkan jumlah berjalan (AA) |
| `ARRAY` | `AR` | Salinan dalam baris dan lajur, atau mengelilingi satu pusat (AR) |
| `ARRAYASSOCIATIVITY` |  | Menetapkan sama ada arahan ARRAY membuat tatasusunan yang kekal boleh disunting (1) atau salinan biasa (0) |
| `ARRAYCLOSE` |  | Menamatkan penyuntingan objek sumber tatasusunan |
| `ARRAYEDIT` |  | Menukar tatasusunan yang dibuat dengan pilihan Associative: bilangan, jarak, objek sumber, satu item |
| `ARRAYPATH` |  | Salinan objek sepanjang garisan, lengkok, polygaris atau lengkung lain |
| `ARRAYPOLAR` |  | Salinan mengelilingi satu titik pusat |
| `ARRAYRECT` |  | Salinan dalam baris dan lajur |
| `ASBUILT` | `ASB` | ASBUILT membaca titik as-built yang diukur oleh satu kru (CSV / TXT, seperti yang ditulis EXPORTPOINTS) dan membandingkannya dengan titik lukisan: dalam atau luar toleransi, tidak diukur, lebihan. Menandakannya pada lapisan AS-BUILT dan memuat turun laporan CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Takrifkan atribut (tag yang diminta sesuatu blok untuk nilai) untuk dimasukkan ke dalam blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Sunting nilai atribut rujukan blok pada baris arahan, satu demi satu (Enter mengekalkan nilai) |
| `ATTSYNC` |  | Selaraskan rujukan blok dengan takrifan atributnya: yang baharu ditambah dengan nilai lalai, yang dibuang digugurkan, kedudukan dan teks ditetapkan semula; nilai dikekalkan |
| `AUDIT` |  | Menyemak lukisan terbuka untuk kerosakan: nombor yang tidak terhingga, objek tanpa saiz, lapisan, blok, gaya dan jenis garisan yang hilang, blok yang mengandungi dirinya, id yang dikongsi, dimensi dan hatch yang rosak. Menyenaraikan apa yang dijumpai mengikut jenis dan bertanya sebelum membaiki; pembaikan ialah satu langkah buat asal. |
| `AUNITS` | `ANGUNITS` | Cara sudut ditunjukkan dan ditaip: darjah perpuluhan, darjah-minit-saat atau bearing seperti N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autolengkap lukisan hidup atau mati, atau senaraikan apa yang dicadangkan oleh corak lukisan sekarang. |
| `AUTOCONSTRAIN` |  | Tambah kekangan koinsiden, mengufuk dan menegak apabila geometrinya sudah hampir |
| `AUTODIM` | `ADIM` | Dimensi mengikut peraturan: saiz keseluruhan, rantai sepanjang sisi, bukaan, diameter lubang dan jarak grid, tanpa mengulang apa yang sudah didimensikan. |
| `AUTOSHEET` | `ASH` | Menyusun helaian sendiri: memilih kertas dan skala piawai, dan meletakkan setiap pandangan dengan kapsyen dan blok tajuk. |
| `BATTMAN` |  | Pengurus atribut blok: susunan, tag, gesaan, nilai lalai dan mod atribut sesuatu blok, kemudian rujukannya dikemas kini |
| `BCLOSE` |  | Tutup penyunting blok: simpan blok atau buang perubahan |
| `BCONVERT` |  | BCONVERT mencari geometri yang berulang dan menukarnya kepada rujukan blok. Pilih objek yang berulang: setiap set objek lain dalam ruang terbuka yang geometrinya sama, dialih dan diputar pada sebarang sudut, akan dijumpai, dan dengan Mirrored atau Scaled dihidupkan juga salinan cermin dan salinan pada saiz lain. Beri blok baharu satu nama dan titik asas; pilihan dan setiap salinan menjadi rujukan kepadanya, setiap satu dengan putaran dan skalanya sendiri. Atau pilih Block dan namakan blok sedia ada untuk mencari salinan longgar objeknya. Salinan mesti mempunyai lapisan, warna, jenis garisan dan ketebalan garisan yang sama melainkan Properties ditetapkan kepada Ignore. Objek pada lapisan terkunci dibiarkan. Satu langkah buat asal. |
| `BEDIT` | `BE` | Penyunting blok: sunting objek dan atribut sesuatu blok; BCLOSE menyimpan (BE) |
| `BLEND` |  | BLEND: splin antara hujung dua lengkung terbuka, dipilih berhampiran hujung untuk dicantumkan. CONtinuity: Tangent mengikut kedua-dua arah, Smooth juga mengikut bagaimana ia melengkung. |
| `BLOCK` | `B`, `BMAKE` | Buat blok daripada objek (ia menjadi satu rujukan) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: setiap rujukan kepada satu blok menjadi rujukan kepada blok lain, di tempat yang sama dengan skala dan putaran yang sama. Nilai atribut yang kedua-dua blok ada dikekalkan. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE memaparkan panel Blok dengan kursor dalam penapisnya. Panel menunjukkan gambar setiap blok (yang paling baru diletakkan dahulu), sebagai senarai atau grid; klik gambar atau seretnya ke atas lukisan untuk meletakkan blok dengan INSERT. Di bawah Pustaka, tambah fail DWG atau DXF sendiri: blok-blok di dalamnya disenaraikan dengan gambar dan disalin ke dalam lukisan ini apabila anda meletakkan satu. Dalam CadCraft Studio, folder lukisan juga boleh ditambah, dan fail serta folder diingati. |
| `BOMEDIT` | `BOMCOLUMNS` | Lajur, pengumpulan, penyusunan, tajuk, jumlah dan catatan jadual senarai bahan |
| `BOMEXPORT` |  | Simpan jadual senarai bahan sebagai fail .csv |
| `BOMTABLE` | `BOM` | Jadual senarai bahan hidup bagi satu zon, atau bagi seluruh lukisan |
| `BOMUPDATE` |  | Kemas kini setiap jadual senarai bahan sekarang, termasuk yang dibekukan |
| `BOMZONE` | `BZONE` | Kawasan lukisan yang dinamakan untuk senarai bahan: dua penjuru, poligon, atau garis luar objek tertutup |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): pilih titik di dalam kawasan tertutup dan dapatkan polygaris tertutup mengelilinginya. Lengkok kekal sebagai lengkok. Islands juga menggaris kawasan di dalamnya. |
| `BOX` |  | Kotak: dua penjuru dan ketinggian (3D) |
| `BPARAMETER` | `BPARAM` | Belum dibina: menambah parameter (seperti Visibility) pada blok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parameter blok: parameter bernama dengan formula, dan beberapa parameter keterlihatan dalam satu blok. Berfungsi dalam penyunting blok (tetapkan objek yang dipilih kepada satu keadaan) dan pada rujukan yang dipilih (nilai dan keadaannya sendiri). |
| `BREAK` | `BR` | Putuskan garisan, lengkok, bulatan atau polygaris antara dua titik (BR) |
| `BREAKATPOINT` |  | Pecahkan garisan, lengkok atau polygaris kepada dua pada satu titik |
| `BREAKLINE` |  | Lukis garisan dengan simbol putus; saiznya dan lanjutan melepasi hujungnya diingati. |
| `BREPLACE` |  | BREPLACE menukar satu blok dengan blok lain. Dipilih: pilih rujukan blok dan namakan blok yang akan digunakan sebagai gantinya. Semua: namakan blok dan gantiannya, dan setiap rujukan dalam setiap ruang dan dalam blok lain berubah. Rujukan mengekalkan tempat, skala, putaran dan lapisannya, serta nilai atribut yang kedua-dua blok ada; nilai yang blok baharu tiada tempat untuknya digugurkan dan dinamakan. |
| `BSEARCH` |  | BSEARCH mencari blok. Name: sebahagian nama blok, atau corak dengan * dan ?. Attribute: nilai (atau TAG=value) yang dipegang oleh atribut rujukan. Geometry: pilih objek atau satu rujukan blok, dan blok yang bentuknya sekurang-kurangnya 85% serupa disenaraikan, yang terbaik dahulu; saiz, putaran dan cermin tidak dikira. Rujukan yang dijumpai dalam ruang terbuka dipilih, sedia untuk arahan seterusnya. |
| `BURST` |  | Pecahkan rujukan blok dan kekalkan apa yang dikatakan atributnya: setiap nilai menjadi teks pada lapisan atribut itu. |
| `BVHIDE` | `BVH` | Dalam penyunting blok: sembunyikan objek dalam keadaan keterlihatan semasa. |
| `BVSHOW` | `BVSH` | Dalam penyunting blok: tunjukkan objek yang disembunyikan oleh keadaan keterlihatan semasa (ia kelihatan pudar untuk dipilih). |
| `BVSTATE` | `BVS` | Dalam penyunting blok, pada blok dengan keadaan keterlihatan: tukar kepada satu keadaan, atau tambah, namakan semula atau padam satu. |
| `CAL` |  | Kira panjang atau nombor: + − * / dan kurungan, seperti yang anda taip di mana-mana |
| `CENTERLINE` | `CL` | Garis pusat antara dua garisan: separuh jalan antara keduanya, atau sepanjang pembahagi dua apabila keduanya bertemu (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Tanda pusat: palang di pusat bulatan atau lengkok, dengan garis pusat hingga sedikit melepasinya (CM) |
| `CHAMFER` | `CHA` | Kikis sudut antara dua garisan (D dua jarak, A panjang dan sudut, P setiap sudut polygaris) |
| `CHSPACE` |  | CHSPACE: alih objek antara helaian dan model melalui viewport. Ia diskalakan dan diputar supaya kelihatan sama dari sisi lain. Pada helaian ia pergi ke model; semasa anda bekerja melalui viewport (MSPACE) ia datang ke helaian. |
| `CIRCLE` | `C` | Pusat dan jejari, diameter, 2 atau 3 titik |
| `CLASS` |  | Letakkan objek yang dipilih dalam kelas, atau dengan tiada apa yang dipilih tetapkan kelas aktif (? menyenaraikannya) |
| `CLASSES` | `CLS` | Panel Kelas: kelas menyusun objek merentas lapisan; tunjuk, sembunyi dan gayakannya, dan ganti setiap satu dalam viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Dok atau apungkan baris arahan, jadikannya satu baris, tetapkan baris sejarahnya, atau buka sejarah (F2) |
| `COMPARESETTINGS` | `CMPSET` | Bandingkan gaya dimensi, gaya teks, lapisan, helaian atau unit: dua dalam lukisan ini, atau lukisan ini dengan satu lagi yang terbuka, dan salin nilai merentasinya. |
| `CONSTRAINTBAR` | `CBAR` | Tunjuk atau sembunyi bar kekangan (Showall / Hideall, atau bagi setiap objek) |
| `COPY` | `CO`, `CP` | Salin objek, seberapa kali anda klik |
| `COPYBASE` |  | Salin objek ke papan keratan dengan titik asas yang anda pilih |
| `COPYCLIP` |  | Salin objek ke papan keratan (Ctrl+C); PASTECLIP meletakkannya |
| `COUNT` | `BCOUNT` | Kira rujukan blok: pilih satu untuk memilih dan mengira setiap rujukan bloknya |
| `COUNTTABLE` |  | Letakkan jadual kiraan blok |
| `CREDITS` |  | Meletakkan kredit Pustaka dalam lukisan sebagai jadual. Jalankan semula untuk mengemas kini jadual daripada item dalam lukisan sekarang. |
| `CURSORSIZE` |  | Saiz silang: 100 menjalankannya dari tepi ke tepi lukisan (Tetapan › Kursor › Skrin penuh) |
| `CUTCLIP` |  | Potong objek ke papan keratan (Ctrl+X): salin, kemudian padam |
| `CYLINDER` | `CYL` | Silinder: pusat, jejari dan ketinggian (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Senaraikan blok, atributnya dan sifat objek sebagai jadual dalam lukisan atau fail CSV |
| `DATALINK` | `DL` | Jadual daripada fail CSV yang mengingati fail itu, supaya ia boleh dibaca semula |
| `DATALINKUPDATE` | `DLU` | Baca semula fail pautan data dan isi semula jadualnya |
| `DCALIGNED` | `DCALI` | Kekangan dimensi: jarak sebenar antara titik, titik dan garisan, atau dua garisan |
| `DCANGULAR` | `DCANG` | Kekangan dimensi: sudut antara dua garisan, atau sudut lengkok |
| `DCCONVERT` |  | Tukar dimensi yang dilukis pada geometri yang boleh dikekang kepada kekangan dimensi |
| `DCDIAMETER` | `DCDIA` | Kekangan dimensi: diameter bulatan atau lengkok |
| `DCDISPLAY` |  | Tunjuk atau sembunyi kekangan dimensi pada lukisan |
| `DCHORIZONTAL` | `DCHOR` | Kekangan dimensi: jarak mengufuk |
| `DCLINEAR` | `DCLIN` | Kekangan dimensi: jarak mengufuk atau menegak, dari tempat anda meletakkannya |
| `DCRADIUS` | `DCRAD` | Kekangan dimensi: jejari bulatan atau lengkok |
| `DCVERTICAL` | `DCVER` | Kekangan dimensi: jarak menegak |
| `DELBLOCKS` |  | Padam blok: setiap rujukan (yang bersarang juga, pada setiap helaian) dan takrifannya |
| `DELCONSTRAINT` | `DELCON` | Alih keluar setiap kekangan (geometri dan dimensi) daripada objek yang anda pilih |
| `DELOPENING` |  | Keluarkan pintu atau tingkap daripada dinding. |
| `DESCRIBE` | `DESC` | Nyatakan apa yang ada dalam lukisan: berapa objek, jenis apa, betapa besar, apa yang dipilih. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Kosongkan pilihan (Esc) |
| `DETAILS` | `DET` | Perincian firma anda sendiri, dijumpai untuk apa yang anda lukis: cari, tambah blok, senarai, alih keluar, hidup atau matikan tawaran. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Lukis gambar rajah daripada teks: carta alir Mermaid, gambar rajah komponen PlantUML, D2, senarai dari-ke atau XML draw.io, sebagai blok dan penyambung yang boleh anda sunting |
| `DIMALIGNED` | `DAL`, `DIMALI` | Jarak sebenar antara dua titik |
| `DIMANGULAR` | `DAN`, `DIMANG` | Sudut antara dua garisan, bagi lengkok, atau dengan tiga titik |
| `DIMARC` | `DAR` | Dimensi panjang lengkok: jarak sepanjang lengkok, dengan simbol lengkok (DAR) |
| `DIMASZ` |  | Tetapan dimensi: saiz anak panah |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Dimensi disusun dari satu garis asas |
| `DIMBREAK` | `DBREAK` | Pecahkan garis dimensi dan lanjutan di tempat ia bersilang dengan objek lain (Auto), antara dua titik (Manual), atau alih keluar pemecahan |
| `DIMCONSTRAINT` | `DCON` | Kekangan dimensi: linear, sejajar, sudut, jejari, diameter, tukar |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Rantai dimensi, setiap satu dari hujung yang terakhir |
| `DIMDEC` |  | Tetapan dimensi: tempat perpuluhan |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter lengkok atau bulatan |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Bebaskan dimensi daripada objek yang diikatnya (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Tukar teks dimensi (Home, New text, Rotate) atau condongkan garis lanjutan (Oblique) |
| `DIMEXE` |  | Tetapan dimensi: lanjutan melepasi garis dimensi |
| `DIMEXO` |  | Tetapan dimensi: ofset dari asal |
| `DIMGAP` |  | Tetapan dimensi: jurang sekeliling teks |
| `DIMINSPECT` |  | Dimensi pemeriksaan: bingkai sekeliling nilai dengan label dan kekerapan bahagian diperiksa |
| `DIMJOGGED` | `DJO`, `JOG` | Dimensi jejari berpatah: jejari dilukis dari titik yang lebih dekat apabila pusatnya jauh (DJO) |
| `DIMJOGLINE` | `DJL` | Tambah simbol patah pada garis dimensi linear atau sejajar, untuk menunjukkan jarak tidak dilukis mengikut skala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Jarak mengufuk atau menegak (R untuk sebarang sudut) |
| `DIMLUNIT` |  | Tetapan dimensi: format panjang (1 saintifik, 2 perpuluhan, 3 kejuruteraan, 4 seni bina, 5 pecahan) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Dimensi ordinat: jarak X atau Y satu titik dari asal UCS, pada petunjuk (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Ganti pembolehubah dimensi pada dimensi yang dipilih tanpa menukar gayanya; Clear mengembalikan gaya itu (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Jejari lengkok atau bulatan |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Ikat titik dimensi kepada objek, supaya ia mengikut dan mengukur semula apabila objek itu bergerak (DRE) |
| `DIMSCALE` |  | Tetapan dimensi: skala keseluruhan (saiz × ini) |
| `DIMSPACE` |  | Jarak sama antara dimensi selari, diukur dari dimensi asas (0 menjajarkannya, Auto ialah dua kali ketinggian teks) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Buat, tukar, tetapkan semasa, padam, guna dan bandingkan gaya dimensi bernama (kotak dialog; -DIMSTYLE pada baris arahan) |
| `DIMTEDIT` | `DIMTED` | Alih teks dimensi ke kiri, kanan atau tengah garis dimensi, atau pusingkannya |
| `DIMTEXTUNIT` | `DTU` | Teks dimensi dalam mm, cm, m atau km, atau dalam unit lukisan itu sendiri: dimensi yang dipilih, jika tidak yang baharu (DTU) |
| `DIMTXT` |  | Tetapan dimensi: ketinggian teks |
| `DIST` | `DI` | Jarak dan sudut antara dua titik |
| `DISTRIBUTE` |  | Susun objek yang dipilih secara sama rata, sisi ke sisi atau atas ke bawah: langkah sama antara pusat, atau jurang sama; dua yang luar kekal |
| `DIVIDE` | `DIV` | DIVIDE (DIV): tanda yang memotong garisan, lengkok, bulatan, polygaris, splin atau elips kepada bahagian sama. Titik, atau dengan Block satu blok pada setiap tanda. |
| `DOCUMENTS` | `DOCS` | Buka panel Dokumen: semak lukisan keluar dan masuk, semakan, keadaan keluaran dan kelulusan untuk folder projek |
| `DOOR` | `DR` | Letakkan pintu dalam dinding. Sisi yang anda klik ialah sisi ia berayun ke. |
| `DRAWORDER` |  | Tukar susunan lukis: bawa objek ke depan, hantar ke belakang, atau letakkan di atas atau di bawah objek lain. |
| `DUPLICATE` | `DUP` | Salinan yang bergerak mengikut penuding: klik untuk meletakkannya (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Sifat lukisan: tajuk, pengarang dan lain-lain, serta pasangan nama dan nilai anda sendiri |
| `DXFOUT` |  | Muat turun lukisan sebagai DXF R12 (Simpan mengekalkan formatnya sendiri) |
| `EATTEDIT` | `DDATTE` | Sunting atribut rujukan blok: nilai, teks dan sifat, satu atribut setiap kali |
| `ELLIPSE` | `EL` | Hujung paksi dan separuh paksi yang satu lagi |
| `ERASE` | `E`, `DELETE` | Alih keluar objek |
| `EXPLODE` | `X` | Pecahkan polygaris, blok dan dimensi kepada bahagiannya |
| `EXPORT` | `EXP` | Simpan salinan lukisan dalam jenis fail yang ditulis oleh add-on |
| `EXPORT3D` | `3DEXPORT` | Eksport model 3D: GLB, OBJ atau STL |
| `EXPORTPOINTS` | `EXPPTS` | Tulis titik, dan titik selitan blok dengan satu atribut sebagai perihalan, ke fail CSV atau TXT (PNEZD, PENZD atau XYZ) untuk program BIM dan ukur |
| `EXTEND` | `EX` | Panjangkan objek untuk bertemu dengan yang lain: klik berhampiran satu hujung, seret melalui beberapa, atau Shift+klik untuk memangkas |
| `EXTRIM` |  | EXTRIM: pilih satu tepi pemotong, kemudian satu sisi. Semua yang bersilang dengan tepi itu dipangkas pada sisi tersebut. Kepingan yang akan hilang ditunjukkan semasa anda menggerakkan penuding. |
| `EXTRUDE` | `EXT` | Tolak objek 2D tertutup menjadi pepejal (3D) |
| `FIELD` |  | Letakkan medan dalam teks, sel jadual atau atribut: tarikh, nama fail, nombor helaian, sifat lukisan, luas atau panjang objek, atau formula |
| `FILLET` | `F` | Bundarkan atau segi empatkan sudut antara dua objek (R jejari, P setiap sudut polygaris, M beberapa) |
| `FIND` |  | Cari dan gantikan perkataan dalam teks, nilai atribut dan teks dimensi |
| `FLATTEN` |  | Tetapkan ketinggian (Z) dan ketebalan objek yang dipilih kepada 0, dalam blok yang digunakannya juga. |
| `FLOOR` |  | Pilih lantai untuk dilukis, tambah satu, atau alih atau salin pilihan ke satu lantai. |
| `FLOORLAYERS` |  | Tukar lantai kepada lapisan bernama Floor-Layer, untuk fail yang akan dihantar kepada orang tanpa lantai. |
| `FLOORS` | `FLR` | Buka panel Lantai: tindihkan lantai dalam satu ruang model. |
| `GCCOINCIDENT` |  | Kekangan: dua titik bertemu, atau satu titik kekal pada objek |
| `GCCOLLINEAR` |  | Kekangan: dua garisan kekal pada satu garisan |
| `GCCONCENTRIC` |  | Kekangan: dua bulatan atau lengkok berkongsi satu pusat |
| `GCEQUAL` |  | Kekangan: dua garisan kekal sama panjang, atau dua bulatan/lengkok sama jejari |
| `GCFIX` |  | Kekangan: satu titik atau satu objek penuh kekal di tempatnya |
| `GCHORIZONTAL` |  | Kekangan: garisan (atau dua titik) kekal mengufuk |
| `GCPARALLEL` |  | Kekangan: dua garisan kekal selari |
| `GCPERPENDICULAR` |  | Kekangan: dua garisan kekal bersudut tegak |
| `GCSYMMETRIC` |  | Kekangan: dua titik, garisan atau bulatan memantulkan satu sama lain merentas satu garisan |
| `GCTANGENT` |  | Kekangan: satu garisan dan bulatan atau lengkok (atau dua daripadanya) kekal bertangen |
| `GCVERTICAL` |  | Kekangan: garisan (atau dua titik) kekal menegak |
| `GDSIN` | `GDS` | Lihat susun atur IC (fail aliran GDSII): setiap lapisan dan jenis data sebagai lapisan lukisan, rata, dalam unit pengguna; untuk melihat dan mengukur sahaja (spike makmal) |
| `GEOMCONSTRAINT` | `GCON` | Kekangan geometri: mengufuk, menegak, selari, bertangen, koinsiden… |
| `GLBOUT` |  | Eksport model 3D sebagai GLB (glTF) |
| `GRADIENT` | `GD` | Mengisi kawasan dengan kecerunan satu atau dua warna |
| `GRID` |  | Tetapkan grid: jarak antara garisan, setiap garisan ke-N sebagai garisan utama, ON atau OFF, atau Auto untuk mengikut zum semula |
| `GRIDMOVE` | `GM` | Alih garisan grid dan bawa apa yang bergantung padanya: dinding meregang, tiang, gelembung dan tag bergerak, dimensi mengikut. |
| `GROUP` | `G` | GROUP (G): beri objek yang dipilih satu nama yang mereka kongsi. Klik pada salah satunya kemudian memilih kesemuanya. Enter pada nama membuat kumpulan tanpa nama. |
| `GROUPEDIT` |  | GROUPEDIT: tukar satu kumpulan. Pilih satu objeknya atau beri Namanya, kemudian Add atau Remove objek, REName, tukar Description, atau nyatakan sama ada klik memilihnya secara keseluruhan. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Isi kawasan dengan isian pepejal atau corak: klik di dalamnya, atau pilih objek tertutup (H) |
| `HATCHEDIT` | `HE` | Tukar hatch: corak, skala, sudut, asal, dan pautannya kepada sempadan. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Buat semula polygaris sempadan daripada hatch, dipautkan kepadanya atau tidak |
| `HATCHTOBACK` |  | Hantar setiap hatch ke belakang segala-galanya yang lain. |
| `HELP` | `?` | Senarai ini |
| `HIDEOBJECTS` |  | Sembunyikan objek yang dipilih sehingga UNISOLATEOBJECTS. Tidak disimpan bersama lukisan. |
| `HISTORY` | `HIST` | HISTORY (HIST): versi lukisan ini — salinan yang disimpan pada komputer ini apabila Studio menyimpannya, dan versi awan — untuk dibuka, dipulihkan, dan dibandingkan dengan apa yang berubah ditunjukkan dengan warna. |
| `ID` |  | Koordinat satu titik |
| `IMAGE` | `IM` | Beri CadCraft fail gambar yang digunakan oleh lukisan (DWG hanya menyimpan di mana ia berada). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Letakkan gambar (PNG atau JPEG) daripada fail. |
| `IMAGECLIP` | `ICL` | Klip gambar ke segi empat tepat atau poligon, atau alih keluar kliipnya. |
| `IMPORT` | `IMP` | Import fail jenis yang dibaca oleh add-on, ke dalam lukisan ini |
| `INSERT` | `I`, `DDINSERT` | Letakkan blok (S skala, R putar); F daripada fail DWG/DXF, L daripada pustaka |
| `INTERSECT` | `IN` | Simpan hanya apa yang pepejal kongsikan (3D), atau kawasan yang dikongsi oleh rantau 2D |
| `ISODRAFT` |  | ISODRAFT: lukisan isometrik hidup atau mati, atau terus pada satah Left, Top atau Right. Semasa ia hidup, Ortho dan penjejakan kutub mengikut dua paksi satah, grid dilukis secara isometrik, dan ELLIPSE mempunyai Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Tunjukkan hanya objek yang dipilih; segala yang lain dalam ruang ini tersembunyi sehingga UNISOLATEOBJECTS. Tidak disimpan bersama lukisan. |
| `ISOPLANE` |  | ISOPLANE: pilih satah isometrik untuk dilukis: Left, Top atau Right. Enter pergi ke yang seterusnya, seperti F5 apabila lukisan isometrik hidup. |
| `JOIN` | `J` | Cantumkan garisan, lengkok dan polygaris yang bertemu hujung ke hujung menjadi satu polygaris; garisan pada satu garisan menjadi satu garisan (J) |
| `LASER` | `LASERCUT` | Buka panel Laser: hantar lapisan ke pemotong laser atau pengukir (kod-G GRBL) |
| `LASSOMODE` |  | Tekan dan seret melukis lasso (1) atau segi empat tepat (0) |
| `LAYDEL` |  | Padam lapisan dan setiap objek di atasnya (dalam model, pada helaian dan dalam blok) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Buka pengurus lapisan: setiap lapisan dalam satu jadual |
| `LAYERPANEL` |  | Tunjukkan panel lapisan |
| `LAYFRZ` |  | Bekukan lapisan setiap objek yang anda pilih |
| `LAYGROUP` | `LG` | Kumpulkan lapisan ke dalam folder dalam panel Lapisan. |
| `LAYISO` |  | Asingkan lapisan objek yang dipilih (setiap lapisan lain mati) |
| `LAYLOCKFADE` |  | Tetapkan sejauh mana objek pada lapisan terkunci pudar, dan sama ada klik boleh memilihnya. |
| `LAYMCUR` |  | Jadikan lapisan objek yang anda pilih sebagai semasa |
| `LAYMRG` |  | Gabung lapisan: objeknya dipindahkan ke lapisan sasaran, dan lapisan yang digabungkan hilang |
| `LAYOFF` |  | Matikan lapisan setiap objek yang anda pilih |
| `LAYON` |  | Hidupkan setiap lapisan |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Helaian baharu dengan blok tajuk dan satu viewport |
| `LAYTHW` |  | Nyahbekukan setiap lapisan |
| `LAYUNISO` |  | Hidupkan semula lapisan yang dimatikan oleh LAYISO |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Menukar teks yang ditaip dengan fon Vietnam lama (fon TCVN3 / ABC seperti .VnTime, dan fon VNI seperti VNI-Times) kepada Unicode. Teks sebegitu sudah ditunjukkan seperti yang dibaca; ini menulisnya semula untuk selamanya, dengan kiraan dan satu langkah buat asal. |
| `LENGTHEN` | `LEN` | Panjangkan atau pendekkan garisan, lengkok dan polygaris: dengan jumlah, peratusan, kepada jumlah keseluruhan, atau dengan menyeret (LEN) |
| `LIBRARY` | `LIB` | Panel pustaka: letakkan item, semak kemas kini, kredit |
| `LIMITS` |  | Tetapkan had lukisan: ON, OFF, atau penjuru kiri bawah dan kanan atas. Dengan had ON, titik di luarnya ditolak |
| `LINE` | `L` | Segmen lurus, setiap satu objek sendiri |
| `LINETYPE` | `LT`, `CELTYPE` | Jenis garisan yang objek baharu perolehi (mengikut lapisan, mengikut blok, atau yang dinamakan) |
| `LINKVIEWS` | `SYNCVIEWS` | Pan dan zum setiap anak tetingkap bersama (skrin berpecah), untuk membandingkan dua lukisan atau semakan |
| `LISPEDIT` | `VLIDE` | LISPEDIT (atau VLIDE) membuka penyunting LISP: tetingkap untuk menulis, memuat dan mencuba rutin. Muat ke dalam lukisan membaca setiap bentuk, seperti memuat fail dengan APPLOAD, dan membuat arahannya. Jalankan pilihan menilai bentuk yang dipilih, atau bentuk tempat kursor berada. Konsol menunjukkan apa yang dicetak rutin dan setiap ralat dengan barisnya. Tanda kurungan yang sepadan ditanda semasa anda menaip dan Enter mengetuk baris baharu. New, Open dan Save berfungsi pada fail .lsp. Senarai di sebelah teks menunjukkan fungsi yang ditakrifkan rutin, yang ia panggil dan LISP ini belum ada, dan setiap fungsi yang ia ada. Tetingkap tidak menyekat lukisan, jadi rutin boleh meminta titik; Stop atau Esc menamatkan rutin yang sedang berjalan. |
| `LIST` | `LI`, `LS` | Terangkan objek dalam sejarah |
| `LTSCALE` | `LTS` | Skala jenis garisan lukisan (setiap sengkang dan jurang didarabkan dengannya) |
| `LWDISPLAY` | `LWT` | Tunjuk atau sembunyikan ketebalan garisan pada skrin (butang LWT dalam bar status) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Ketebalan garisan yang diperoleh objek baharu (mengikut lapisan, mengikut blok, lalai, atau mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Lapisan peta di bawah ruang model: sistem koordinat lukisan, jubin, WMS, WMTS, ArcGIS, gambar |
| `MASSPROP` |  | MASSPROP: ciri keratan rentas bagi rantau dan objek tertutup: luas, perimeter, pusat graviti, momen dan hasil darab inersia, jejari giratan dan paksi utama. Tepat untuk garisan dan lengkok. Ia boleh menulis laporan ke fail teks. |
| `MATCHPROP` | `MA`, `PAINTER` | Padankan sifat: salin lapisan, warna dan lebih daripada satu objek ke yang lain (MA) |
| `MEASURE` | `ME` | MEASURE (ME): satu tanda setiap panjang yang diberi sepanjang garisan, lengkok, bulatan, polygaris, splin atau elips, dari hujung yang paling dekat dengan pilihan anda. Titik, atau dengan Block satu blok pada setiap tanda. |
| `MEASUREGEOM` | `MEA` | Ukur jarak, jejari, sudut atau luas (MEA) |
| `MINSERT` |  | MINSERT: letakkan blok dalam baris dan lajur sekali gus. Setiap satu ialah rujukannya sendiri, jadi anda boleh mengalih atau memadam mana-mana satu. |
| `MIRROR` | `MI` | Cerminkan objek merentas satu garisan |
| `MLEADER` | `MLD`, `MLEAD` | Multipetunjuk: anak panah, petunjuk dan nota, sebagai satu objek (MLD) |
| `MLEADERALIGN` | `MLA` | Jajarkan multipetunjuk dengan salah satunya sepanjang satu arah, dengan jarak sama, atau diagihkan antara dua titik (MLA) |
| `MLEADERCOLLECT` | `MLC` | Kumpulkan beberapa multipetunjuk menjadi satu: blok mereka dalam baris atau lajur, atau nota mereka satu di bawah satu (MLC) |
| `MLEADEREDIT` | `MLE` | Tambah garisan petunjuk pada multipetunjuk atau alih keluarnya; tukar kandungannya antara teks dan blok (MLE) |
| `MLINE` |  | Lukis garisan selari bersama, bercantum di sudut. |
| `MOVE` | `M` | Alih objek mengikut titik asas dan titik kedua |
| `MSPACE` | `MS` | Bekerja pada model melalui viewport bagi helaian yang terbuka (atau klik dua kali di dalam viewport). |
| `MTEXT` | `MT`, `T` | Teks perenggan: seret lebarnya, kemudian taip di tempat; Enter memulakan perenggan baharu (T) |
| `MVIEW` | `MV` | Viewport ke atas model, pada layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pandangan bernama: simpan pandangan di skrin (atau tetingkap) dengan nama dan kembali kepadanya (NV) |
| `NCOPY` |  | Salin objek dari rujukan blok atau lukisan dipautkan ke dalam lukisan, tanpa memecahkannya. |
| `NEARBY` |  | Nyatakan apa yang berada dekat dengan kursor, terdekat dahulu, dengan jaraknya dan sisinya. |
| `NEW` |  | Mulakan lukisan baharu |
| `OBJECTSCALE` | `OBJSCALE` | Skala anotasi teks dan dimensi beranotasi: tambah skala, padam satu, tambah skala semasa, atau senaraikannya (setiap viewport menunjukkannya pada saiz untuk skalanya sendiri) |
| `OBJOUT` |  | Eksport model 3D sebagai OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Standard pejabat: ketinggian teks pada kertas, lapisan, medan blok tajuk dan templat dalam satu rekod. Menunjukkan yang sedang berkuat kuasa dan dari mana ia datang; Import fail rekod .json ke dalam lukisan ini, tambah lapisan pejabat yang tiada dalam lukisan, senaraikan medan blok tajuk. |
| `OFFSET` | `O` | Salinan selari pada satu jarak |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: bagaimana OFFSET menutup jurang pada sudut luar polygaris. 0 melanjutkan segmen, 1 menambah lengkok, 2 menambah potongan lurus. Disimpan untuk sesi ini. |
| `OLELIST` | `OLES` | Senaraikan objek OLE yang dibawa oleh lukisan dan letakkan salinan gambar salah satunya di tempat yang anda pilih |
| `OPEN` |  | Buka DWG atau DXF dari komputer ini |
| `OPENIN3D` |  | Buka lukisan ini dalam aplikasi pemodelan 3D, dalam tab baharu (tiada apa yang dimuat naik) |
| `OPTIONKEYS` | `OPTKEYS` | Beri pilihan arahan huruf sendiri (ARRAY.PO, P), dalam satu fail teks |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Buka menu snap objek: pilih snap mana yang hidup. Juga klik kanan pada Snap dalam bar status. |
| `OVERKILL` |  | Padam objek pendua dan kemaskan garisan serta lengkok yang bertindih atau bercantum hujung ke hujung, dalam toleransi. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parameter: parameter pengguna dan kekangan dimensi dalam satu jadual |
| `PARTSLIST` | `PLIST` | Jadual senarai bahagian bagi setiap bahagian standard dan seksyen keluli yang diletakkan dari Pustaka |
| `PASTEAREA` | `PAREA` | Tampal kawasan yang disalin dalam MarkupCraft (Salin kawasan) pada saiz sebenarnya, sebagai gambar. |
| `PASTEBLOCK` |  | PASTEBLOCK: tampal apa yang anda salin sebagai satu blok. Blok itu mendapat nama sendiri; RENAME memberinya nama anda. |
| `PASTECLIP` |  | Tampal papan keratan: ia mengikut kursor, klik di tempat ia pergi (Ctrl+V) |
| `PASTEORIG` |  | Tampal papan keratan pada koordinat tempat ia disalin (Ctrl+Shift+V) |
| `PDF` |  | Beri CadCraft fail PDF yang digunakan oleh underlay lukisan |
| `PDFADJUST` |  | Pudarkan, kontraskan, monokrom atau matikan underlay PDF |
| `PDFATTACH` | `PDFATT` | Lampirkan halaman PDF sebagai underlay (PDFATTACH) |
| `PDFCLIP` |  | Klipkan underlay PDF ke segi empat tepat atau poligon |
| `PDFIMPORT` | `PDFIM` | Tukar garisan, isian dan teks halaman PDF kepada objek lukisan (PDFIMPORT) |
| `PDFLAYERS` |  | Hidupkan atau matikan lapisan underlay PDF |
| `PEDIT` | `PE` | Sunting polygaris: tutup, buka, cantum, lebar, lengkung padan, lengkung splin, nyahlengkung, penjanaan jenis garisan, balikkan; garisan, lengkok dan splin boleh ditukar kepada polygaris |
| `PENPRESSURE` |  | Sama ada tekanan goresan pen menetapkan ketebalan garisan bagi apa yang SKETCHFIX dan SKETCHLIVE hasilkan (hidup secara lalai). Disimpan dalam pelayar ini. |
| `PHOTOSKETCH` | `PSK` | Menukar foto lakaran tangan di atas kertas kepada garisan dan lengkok pada skala, meluruskan perspektif dan memberi setiap warna pen lapisannya sendiri. |
| `PICKSTYLE` |  | PICKSTYLE: sama ada memilih satu objek dalam kumpulan memilih seluruh kumpulan (1, tetapan permulaan) atau objek itu sahaja (0). Disimpan untuk sesi ini. |
| `PLAN` |  | Putar paparan supaya paksi X UCS (Current ucs, Ucs yang disimpan, atau World) mendatar pada skrin. Tiada apa dalam lukisan bergerak. |
| `PLINE` | `PL` | Polygaris segmen garisan dan lengkok |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot ke PDF: satu layout, atau model pada satu skala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Jadual gaya plot: tetapkan apa yang setiap warna cetak sebagai (warna, hitam, kelabu, dakwat, ketebalan garisan); disimpan bersama lukisan (STYLESMANAGER) |
| `POINT` | `PO` | Objek titik |
| `POINTCLOUD` | `PC` | awan titik yang dilampirkan: hiris, ketinggian, ketebalan, warna, saiz, nampak, zum, leraikan |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | lampirkan awan titik (LAS, LAZ, XYZ, PTS) di bawah lukisan |
| `POLARANG` |  | Langkah penjejakan kutub dalam darjah (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Poligon sekata |
| `PRESSPULL` |  | Tolak atau tarik muka pepejal (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Buka panel Sifat (juga Ctrl+1, atau klik dua kali objek) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Lipat panel Sifat ke tepi tetingkap |
| `PSPACE` | `PS` | Tinggalkan viewport yang anda kerjakan dan kembali ke helaian (atau klik dua kali di luarnya). |
| `PUBLISH` | `-PUBLISH` | Plot beberapa atau semua helaian ke satu PDF (satu halaman dan satu penanda buku bagi setiap helaian) |
| `PURGE` | `PU` | Buang takrifan blok yang tiada digunakan |
| `QDIM` |  | Dimensi pantas: dimensikan beberapa objek sekali gus (berterusan, garis asas, berselang, ordinat, jejari atau diameter) |
| `QPMODE` | `QP` | Sifat Pantas oleh kursor hidup atau mati |
| `QSELECT` | `QS` | Pilih pantas: setiap objek jenis yang lapisan, warna, saiz atau namanya sepadan (QS) |
| `RASTERSNAP` |  | Hidupkan atau matikan snap ke garisan helaian yang diimbas. |
| `RAY` |  | Sinar: garisan binaan dari satu titik, tidak berkesudahan ke satu arah. |
| `RECOVER` |  | Membuka DXF atau DWG yang rosak: melangkau apa yang tidak dapat dibaca daripada menolak fail, memberitahu apa yang dilangkau, kemudian menyemak dan membaiki lukisan seperti AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Polygaris tertutup daripada dua penjuru |
| `REDLINE` | `RDL` | Redline kepada semakan: baca pakej redline MarkupCraft, terima atau tolak setiap perubahan, awankan yang diterima dengan log semakan, dan simpan fail jawapan (RDL) |
| `REDO` |  | Buat semula apa yang telah dibuat asal |
| `REFCLOSE` |  | Tamatkan penyuntingan blok di tempat: simpannya, atau buang perubahan |
| `REFEDIT` |  | Sunting blok di tempat, di mana rujukannya berada, dengan bahagian lukisan yang lain pudar; REFCLOSE menyimpannya |
| `REGEN` | `RE` | Bina semula apa yang dilukis dalam tab ini daripada lukisan |
| `REGENALL` | `REA` | Bina semula apa yang dilukis dalam setiap tab, anak tetingkap dan lukisan terbuka |
| `REGION` | `REG` | REGION (REG): jadikan rantau rata daripada objek tertutup, atau daripada garisan, lengkok dan polygaris yang menutup gelung hujung ke hujung. UNION, SUBTRACT dan INTERSECT kemudian menggabungkan rantau, dan MASSPROP memberi ciri keratan rentasnya. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Daftarkan beberapa imbasan: letakkannya dalam satu bingkai dengan pasangan titik yang dipilih atau sasaran, perhalusi dengan ICP, eksport satu LAS atau E57 |
| `REINIT` |  | Muat semula fail alias anda |
| `RENAME` | `-RENAME`, `REN` | Namakan semula lapisan atau blok (setiap objek atau rujukan mengikut) |
| `REVCLOUD` | `RC` | Awan semakan: bulatkan segi empat tepat, poligon, laluan bebas atau objek (RC) |
| `REVOLVE` | `REV` | Pusingkan objek 2D tertutup mengelilingi satu paksi menjadi pepejal (3D) |
| `ROTATE` | `RO` | Putar objek mengelilingi satu titik asas |
| `SAMPLES` | `SAMPLE` | Buka salah satu lukisan contoh CadCraft (satu set seni bina, as-built) untuk belajar daripadanya |
| `SAVE` | `QSAVE` | Muat turun lukisan dalam formatnya (DWG atau DXF) |
| `SAVEAS` |  | Muat turun lukisan sebagai DWG atau DXF: pilih yang mana |
| `SAYSEL` |  | Nyatakan apa yang dipilih, satu ayat bagi setiap objek. |
| `SCALE` | `SC` | Skalakan objek mengelilingi satu titik asas |
| `SCALELISTEDIT` | `SCALELIST` | Tambah, sunting dan padam skala lukisan sendiri; ia muncul dalam senarai skala viewport dan plot, dan disimpan dalam fail (SCALELIST) |
| `SCANALIGN` | `SCL` | Jajarkan helaian yang diimbas ke dua titik: alih, putar dan, jika anda pilih, skalakannya. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Masukkan lukisan yang diimbas: PNG, JPEG atau TIFF (satu halaman atau semua halaman fail berbilang halaman) atau halaman PDF yang merupakan gambar. |
| `SCANCLEAN` | `SCC` | Jadikan helaian yang diimbas hitam putih dan buang titik-titik kecil. |
| `SCANCROP` | `SCR` | Potong helaian yang diimbas kepada satu tetingkap. |
| `SCANDESKEW` | `SCD` | Cari sudut garisan panjang helaian yang diimbas dan putar helaian menjadi tegak sekali anda terima sudut itu. |
| `SCANERASE` | `SCE` | Padam satu kawasan helaian yang diimbas: segi empat tepat, poligon atau lasso. |
| `SCANINFO` | `SCI` | Tunjukkan fail asal helaian yang diimbas dan langkah yang diambil sejak itu. |
| `SCANSCALE` | `SCS` | Skalakan helaian yang diimbas: pilih dua titik di atasnya dan taip jarak sebenar antara keduanya. |
| `SCANTRACE` | `SCT` | Surih helaian yang diimbas menjadi garisan dan lengkok pada lapisan baharu, pada toleransi yang anda tetapkan. Teks dan arsiran kekal sebagai raster. |
| `SELECT` |  | Pilih objek sekarang (untuk P, Sebelumnya, dalam arahan seterusnya) |
| `SELECTALL` | `AI_SELALL` | Pilih setiap objek yang boleh anda sunting pada tab ini (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Pilih setiap objek seperti yang anda pilih: jenis, lapisan dan warna yang sama (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Menunjukkan panel Set Helaian: helaian daripada banyak lukisan, dinomborkan, diterbitkan sebagai satu PDF. |
| `SHORTCUTS` | `KEYS` | Beri mana-mana arahan kekunci sendiri (Ctrl atau Alt dengan huruf, atau kekunci fungsi percuma), disimpan dalam pelayar ini atau aplikasi desktop. |
| `SHXFONTS` | `SHX` | Beri CadCraft fon SHX daripada folder atau fail, supaya gaya teks yang menamakannya dilukis dengannya (senarai, alih keluar, balikkan) |
| `SKETCHFIX` | `SKF` | Lukis goresan bebas; setiap satu menjadi garisan, bulatan, lengkok, segi empat tepat atau polygaris yang kemas, disegi empatkan dan dicantumkan kepada yang lain. |
| `SKETCHLIVE` | `SKL` | Lakar dengan pen: setiap goresan menjadi garisan, bulatan, lengkok atau segi empat tepat yang tepat apabila anda mengangkat pen, dilekapkan kepada lukisan, dengan saiz untuk ditaip di atasnya. |
| `SPLINE` | `SPL` | Lukis splin melalui titik (atau dengan poligon kawalan), atau tukar polygaris kepada satu |
| `SPLINEDIT` | `SPE` | Sunting splin: titik lekapan, titik kawalan dan pemberat, buka atau tutup, balikkan, atau tukar kepada polygaris |
| `SPLIT` |  | Bahagikan kawasan lukisan kepada anak tetingkap (sebagai VPORTS pada model; dari helaian juga) |
| `STEELMEMBER` | `SMEMBER` | Ahli keluli dalam 3D daripada seksyen standard: dua titik (rasuk) atau titik asas dan ketinggian (Column) |
| `STLOUT` |  | Eksport model 3D sebagai STL (milimeter) |
| `STRETCH` | `S` | Regang: seret tetingkap bersilang ke atas hujung untuk mengalih; apa yang ada di dalam bergerak, selebihnya kekal (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Gaya teks: fon, ketinggian, lebar dan kecondongan yang diambil teks baharu (kotak dialog; -STYLE pada baris arahan) |
| `SUBTRACT` | `SU` | Keluarkan pepejal daripada yang lain (3D), atau rantau 2D daripada rantau |
| `SWBOUT` | `SWMACRO` | Muat turun makro untuk SolidWorks (.swb) yang membina semula model sebagai satu lakaran berkekangan |
| `SWEEP` |  | Sapu objek 2D tertutup sepanjang laluan (garisan, polygaris, lengkok, bulatan) menjadi pepejal (3D) |
| `TABLE` | `TB` | Buat jadual: baris dan lajur, atau daripada sel hamparan pada papan keratan atau fail CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Sunting jadual: taip dalam sel, masukkan dan padam baris dan lajur, saiz, sel bercantum, penjajaran |
| `TABLEEXPORT` |  | Simpan apa yang ditunjukkan jadual sebagai fail CSV |
| `TABLEPASTE` | `PASTETABLE` | Buat jadual daripada sel hamparan pada papan keratan |
| `TABLESTYLE` | `TS` | Gaya jadual: ketinggian teks, penjajaran, margin dan sempadan untuk baris tajuk, pengepala dan data |
| `TAGS` |  | Tag pada rujukan blok: takrifkan tag (jenis, nilai dibenarkan, blok yang dikenakannya), tetapkannya pada rujukan yang dipilih, dan senaraikannya sebagai jadual yang boleh disimpan sebagai CSV |
| `TEXT` | `DT`, `DTEXT` | Teks satu baris; Enter memulakan baris seterusnya |
| `TEXTEDIT` | `ED`, `DDEDIT` | Sunting teks di tempat: pilih satu teks (atau klik dua kali padanya) (ED) |
| `TEXTMASK` | `TMASK` | Letakkan topeng latar belakang di belakang teks (latar belakang lukisan atau satu warna), atau alihkannya. |
| `TEXTTOFRONT` |  | Bawa semua teks, dimensi dan petunjuk ke depan segala-galanya yang lain. |
| `TOOLBAR` |  | Pilih apa yang ditunjukkan butang bar alat: ikon dan teks, hanya ikon, atau hanya teks (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Letakkan bar alat di atas, bawah, kiri atau kanan tetingkap |
| `TOOLBARROWS` |  | Pilih berapa baris bar alat digunakan: bungkus untuk muat, 2, atau 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Jadikan bar di atas lukisan piawai atau padat |
| `TOUCHCROSSHAIR` | `TCX` | Silang ofset untuk melukis dengan jari: satu jari menggerakkan silang yang terletak di atas dan di sebelahnya, supaya jari tidak menutup titik pilihan. Mengangkat jari tidak memilih apa-apa; butang Click atau ketikan dengan jari kedua memilih pada silang, dan menahan Click semasa anda bergerak menyeret. Tekan lama atau butang Enter ialah Enter. Dua jari menggeser dan menzum. Pilihan: ON, OFF, Auto (hidup hanya di tempat jari ialah satu-satunya penuding), Distance, Side. |
| `TOUR` | `TUTORIAL` | Ambil semula lawatan enam langkah lukisan pertama |
| `TRIM` | `TR` | Potong objek balik ke tempat objek lain bersilang dengannya: klik satu kepingan, seret melalui beberapa, atau Shift+klik untuk melanjutkan |
| `TRIMEXTENDMODE` |  | Cara TRIM dan EXTEND bermula: 1 Quick (setiap objek ialah tepi pemotong atau sempadan), 0 Standard (pilih tepi dahulu) |
| `TTR` |  | Bulatan bertangen kepada dua objek, dengan jejari yang anda beri (sama seperti CIRCLE T). |
| `TURNLEFT` |  | Putar paparan 90° ke kiri (lawan jam): UCS Z -90, dan paparan mengikut. Tiada apa dalam lukisan bergerak. |
| `TURNRIGHT` |  | Putar paparan 90° ke kanan (ikut jam): UCS Z 90, dan paparan mengikut. Tiada apa dalam lukisan bergerak. |
| `TURNWORLD` |  | Kembali ke dunia: UCS World, dan paparan mendatar semula. |
| `TXT2MTXT` | `T2M` | Cantumkan teks satu baris menjadi satu teks perenggan, dari atas ke bawah. |
| `UCS` |  | Sistem koordinat anda sendiri: asal dan paksi X (origin, sudut Z, 3point, OBject, Previous, World, NAmed). Titik yang anda taip, ortho, penjejakan kutub, grid dan teks baharu mengikutnya; paparan berpusing supaya paksi X-nya mendatar. Tiada apa dalam lukisan bergerak. |
| `UNDO` | `U` | Buat asal arahan terakhir |
| `UNGROUP` |  | UNGROUP: leraikan kumpulan. Pilih objek kumpulan, atau beri Name. Objek kekal dalam lukisan. |
| `UNION` | `UNI` | Cantumkan pepejal menjadi satu (3D), atau rantau 2D menjadi satu rantau |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Tunjukkan semula setiap objek yang disembunyikan oleh ISOLATEOBJECTS atau HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Cara panjang ditunjukkan dan ditaip: perpuluhan, kaki dan inci, pecahan (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Kira semula medan, dan pilih bila ia dikemas kini sendiri |
| `USDOUT` |  | Eksport model 3D sebagai USD (.usda teks, .usdc binari atau pakej .usdz) |
| `VIEW` | `-VIEW`, `V` | Pandangan 3D piawai, perspektif atau selari (3D) |
| `VIEWBASE` | `FLATSHOT` | Letakkan pandangan 2D rata bagi pepejal 3D (depan, atas, sisi atau isometrik, garisan tersembunyi putus-putus) pada helaian atau dalam model |
| `VIEWLABEL` | `VL` | Tajuk pandangan pada helaian yang menunjukkan nama pandangan viewportnya, dan berubah bersamanya. |
| `VOICE` |  | Hidupkan atau matikan arahan lisan. Ia dikenali pada komputer ini. |
| `VPCLIP` |  | Klipkan viewport helaian ke objek tertutup atau poligon yang dilukis; Delete menjadikannya segi empat tepat semula |
| `VPLAYER` |  | Bekukan atau nyahbekukan lapisan dalam sesetengah viewport sahaja (Freeze, Thaw, Reset), dan pilih lapisan mana yang viewport baharu mulakan dalam keadaan beku (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Bahagikan kawasan lukisan kepada anak tetingkap, setiap satu dengan pandangannya sendiri (pada helaian: viewport, seperti MVIEW) |
| `VPVIEW` |  | Tetapkan apa yang ditunjukkan viewport: pilih satu tetingkap pada model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Gaya visual pandangan 3D: berlorek, tepi, garisan tersembunyi, rangka dawai, sinar-X |
| `WALL` | `WA` | Lukis dinding 2D seperti polygaris. Ia bercantum, dan membawa pintu serta tingkap. |
| `WALLARC` | `WARC` | Lukis satu lengkung dinding. Dinding pelan adalah lurus, jadi lengkung dilukis sebagai dinding lurus pendek (15 darjah setiap satu) yang bercantum. |
| `WALLDELSEG` |  | Padam sekeping dinding antara dua titik. Yang tinggal kekal sebagai satu atau dua dinding. |
| `WALLDIM` |  | Taip nilai baharu untuk dimensi: dinding di hujung jauhnya bergerak tegak lurus kepada dirinya, dinding di hujung pertama kekal, dan dinding yang bercantum dengannya mengikut. |
| `WALLDISJOIN` |  | Pilih dinding berhampiran satu hujung untuk tidak membenarkan cantum di hujung itu: hujung dilukis tegak dan tiada apa yang mengikutinya. Pilihnya sekali lagi untuk membenarkannya. |
| `WALLGRID` |  | Kunci dinding pada garisan grid: sepanjangnya, atau satu hujung padanya. Alih garisan dengan GRIDMOVE dan dinding mengikut. |
| `WALLHOLD` |  | Jajar dan kunci: dinding kekal di tempatnya berbanding dinding lain (pada garisannya, atau pada jarak yang dimilikinya). Jika satu bergerak, yang lain mengikut. |
| `WALLHOLDDIM` |  | Kunci jarak antara dua dinding selari. Jika satu bergerak, yang lain mengikut untuk mengekalkannya. |
| `WALLHOLDS` |  | Senaraikan kunci pada dinding. |
| `WALLJOINS` |  | Beri setiap dinding lukisan lama id-nya dan simpan cantuman antara mereka. Ini juga berlaku pada perubahan pertama yang anda buat. |
| `WALLJOINSTYLE` |  | Klik satu sudut tempat dua dinding bertemu hujung ke hujung untuk menukar cara ia dilukis: mitre, butt, square off. T menukar dinding mana yang melalui. |
| `WALLOFFSET` | `WO` | Alih dinding tegak lurus kepada dirinya sejauh satu jarak (dinding yang bercantum dengannya mengikut), atau buat salinan pada jarak itu. |
| `WALLPICK` |  | Buat dinding pada garisan atau polygaris dalam lukisan, dengan garisan yang bercantum dengannya jika anda kata Yes. |
| `WALLPOLY` | `WP` | Lukis dinding mengelilingi poligon sekata 3 hingga 64 sisi, seperti POLYGON. |
| `WALLRECT` | `WR` | Lukis empat dinding bercantum dari dua penjuru bertentangan, seperti RECTANG. |
| `WALLREJOIN` |  | Jadikan dua bahagian dinding menjadi satu dinding semula. Yang pertama kekal di tempatnya dalam lukisan. |
| `WALLROT` |  | Lukis empat dinding bercantum sebagai segi empat tepat yang diputar pada mana-mana sudut: sisi pertama, kemudian sejauh mana sisi lain keluar. |
| `WALLSPLIT` | `WS` | Pecahkan dinding kepada dua pada satu titik atau di tempat dinding lain bersilang. Bahagiannya kekal bercantum melainkan anda minta jurang atau hujung bebas. Pintu dan tingkap mengikut bahagiannya. |
| `WALLSPLITGAP` |  | Pecahkan dinding dengan meninggalkan jurang: taip jurang, pilih dinding, kemudian titik. Bahagiannya mengekalkan hujung bebas dan boleh dicantumkan semula. |
| `WALLSTRETCH` |  | Regang dengan tetingkap: hujung dinding di dalamnya bergerak, dinding yang berada sepenuhnya di dalamnya bergerak seluruhnya, dan dinding yang bersentuh sisinya meluncur bersamanya. |
| `WALLTAN` |  | Teruskan dinding dengan lengkok yang keluar daripadanya sepanjang dinding (dilukis sebagai dinding lurus pendek). |
| `WALLTRACE` |  | Buat dinding mengelilingi kawasan tertutup terkecil bagi garisan dan dinding di sekeliling titik yang anda klik. |
| `WALLUNHOLD` |  | Tanggalkan kunci daripada dinding (dan kunci dinding lain kepadanya). |
| `WBLOCK` | `W`, `-WBLOCK` | Tulis blok, beberapa objek atau keseluruhan lukisan ke fail DWG atau DXF baharu (W) |
| `WEDGE` | `WE` | Baji: dua penjuru dan ketinggian; ia condong menjauhi penjuru pertama (3D) |
| `WHEREAMI` | `WHERE` | Nyatakan di mana kursor berada. |
| `WHOHAS` |  | Memberitahu siapa yang membuka lukisan. CadCraft Studio menyimpan fail kunci kecil di sebelah setiap lukisan terbuka (Plan.dwg.cclock: siapa, sejak bila, versi mana) dan membuangnya apabila ditutup. Pilihan: Current (lukisan terbuka), File (pilih satu), FOlder (setiap lukisan dalam folder yang terbuka di mana-mana; ini juga membolehkan Studio menyimpan fail kunci dalam folder itu), Path (taip satu), Name (nama yang dilihat orang lain). Kunci yang tidak disegarkan selama lima minit dianggap lapuk. Tidak tersedia dalam pelayar. |
| `WINDOW` | `WN` | Letakkan tingkap dalam dinding. |
| `XATTACH` | `XA` | Pautkan DWG atau DXF lain ke dalam lukisan ini, ditunjukkan secara baca sahaja (XREF menyenaraikan dan memuat semulanya) |
| `XCLIP` | `XC` | Klipkan rujukan blok dan lukisan dipautkan ke segi empat tepat atau poligon, atau alih keluar kliipnya. |
| `XLINE` | `XL` | Garisan binaan, tidak berkesudahan ke kedua-dua arah: melalui dua titik, mengufuk, menegak, pada sudut, membahagi dua sudut, atau ofset dari satu garisan. |
| `XREF` | `XR`, `-XREF` | Lukisan dipautkan (rujukan luaran): senaraikan, lampirkan, muat semula, ikat, leraikan |
| `ZOOM` | `Z` | Lingkungan, atau satu tetingkap |
