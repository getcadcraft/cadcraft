---
title: Rujukan arahan
summary: Setiap arahan dalam aplikasi lukisan CadCraft, dengan alias, soalan yang ditanyanya, pilihan dan lalainya.
keywords: arahan, alias, senarai arahan, luas, perimeter, measuregeom, garisan, pline, bulatan, lengkok, pangkas, ofset, dimlinear, blok, selit, layout, plot, zum, bantuan, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Taip nama arahan atau alias dan tekan {{key:Enter}} atau {{key:Space}}. Huruf besar atau kecil tidak penting, dan `_`, `-`, `.` atau `'` di hadapan diabaikan. Taip `HELP` (atau `?`) untuk mencetak senarai ringkas setiap arahan dalam sejarah baris arahan; tekan {{key:F1}} untuk bantuan ini.

Cara membaca gesaan: pilihan berada dalam kurungan segi, dan anda memilih satu dengan menaip huruf besarnya (`D` untuk Diameter). Lalai berada dalam kurungan sudut; tekan {{key:Enter}} untuk menerimanya. Di mana titik diminta, anda boleh klik atau taip mana-mana format dalam [Kemasukan koordinat dan jarak](topic:coordinate-entry). Di mana jarak diminta, anda boleh menaip nombor atau klik dua titik.

Tekan {{key:Enter}} di mana titik atau objek diperlukan, dan tiada lalai, untuk menamatkan arahan. {{key:Esc}} membatalkannya. Apa sahaja yang dilakukan oleh arahan ialah satu langkah buat asal.

## Lukis

### LINE

Alias: `L`. Segmen lurus, setiap satu objek sendiri.

- `Tentukan titik pertama` (Enter: mula dari titik terakhir yang anda berikan)
- `Tentukan titik seterusnya [Buat asal (U)]`, diulang. Selepas dua segmen: `[Buat asal (U)/Tutup (C)]`.
- `U` mengambil semula segmen terakhir, `C` menutup ke titik pertama dan menamatkan. Enter menamatkan.

### PLINE

Alias: `PL`. Satu polygaris segmen garisan dan lengkok.

- `Tentukan titik mula`
- `Tentukan titik seterusnya [Lengkok (A)/Tutup (C)/Buat asal (U)]` (Tutup apabila ada dua segmen)
- `A` bertukar kepada lengkok: `Tentukan titik hujung lengkok [Garisan (L)/Tutup (C)/Buat asal (U)]`. Setiap lengkok bersambung secara bertangen dengan segmen sebelumnya. `L` kembali kepada garisan, `CL` menutup dengan lengkok.
- Enter menamatkan; polygaris kekal terbuka.

### CIRCLE

Alias: `C`.

- `Tentukan titik pusat bulatan [3P/2P/Ttr (tangen tangen jejari)]`
- `Tentukan jejari bulatan [Diameter] <jejari terakhir>`; `D` meminta `Tentukan diameter bulatan`.
- `2P`: dua hujung diameter. `3P`: tiga titik pada bulatan.
- `T` (juga arahan `TTR`, dan {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Tentukan titik pada objek untuk tangen pertama bulatan`, yang kedua, kemudian jejari (Enter: yang terakhir). Bulatan menyentuh kedua-dua objek (garisan, lengkok, bulatan, segmen polygaris, juga di dalam blok); antara bulatan yang berbuat demikian, yang menyentuh berhampiran pilihan anda. `Bulatan tidak wujud` apabila tiada yang sesuai.
- `TTT` (atau {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): tiga objek; bulatan yang menyentuh ketiga-tiganya, paling dekat dengan pilihan anda (tiga garisan memberi bulatan dalam atau luar, bergantung pada tempat anda memilih).

### ARC

Alias: `A`.

- `Tentukan titik mula lengkok [Pusat (C)]`, `Tentukan titik kedua lengkok`, `Tentukan titik tamat lengkok`: lengkok melalui tiga titik.
- `C`: `Tentukan titik pusat lengkok`, `Tentukan titik mula lengkok`, `Tentukan titik tamat lengkok`. Lengkok berjalan lawan arah jam dari mula ke tamat.

### RECTANG

Alias: `REC`, `RECTANGLE`. Polygaris tertutup.

- `Tentukan titik bucu pertama`, `Tentukan titik bucu lain`. Taip `@lebar,tinggi` untuk bucu kedua.

### POLYGON

Alias: `POL`. Poligon sekata sebagai polygaris tertutup.

- `Masukkan bilangan sisi <4>` (3 hingga 1024)
- `Tentukan pusat poligon`
- `Masukkan pilihan [Terterap dalam bulatan (I)/Tercatat pada bulatan (C)] <I>`
- `Tentukan jejari bulatan`: klik atau taip satu titik; jaraknya menetapkan saiz dan arahnya memutar poligon.

### ELLIPSE

Alias: `EL`.

- `Tentukan titik hujung paksi elips [Pusat (C)]`, `Tentukan titik hujung paksi yang lain`, `Tentukan jarak ke paksi yang lain`
- `C`: `Tentukan pusat elips`, `Tentukan titik hujung paksi`, kemudian jarak ke paksi yang lain.
- `I` (`Isocircle`, hanya ketika {{cmd:ISODRAFT}} dihidupkan): pusat, kemudian jejari atau `Diameter`: elips yang ditunjukkan oleh bulatan pada satah isometrik semasa.

### HATCH

Alias: `H`, `BH`, `BHATCH`; atau {{ui:Hatch}} pada bar alat. Mencetak corak, skala dan sudut semasa dahulu.

- `Pilih titik dalaman [Pilih objek (S)/Corak (P)/Skala (SC)/Sudut (A)]`, diulang (`Buat asal (U)` sekali ada kawasan): setiap klik menambah kawasan tertutup di sekelilingnya, dengan bentuk tertutup di dalamnya sebagai pulau. Enter membuat satu hatch daripada semuanya.
- `S`: `Pilih objek tertutup` (polygaris tertutup, bulatan, elips tertutup).
- `P`: `Masukkan nama corak, SOLID, atau ? untuk senarai <semasa>`. `SC`: `Tentukan skala corak`. `A`: `Tentukan sudut corak`.
- `G` (Kecerunan): isian ialah kecerunan dan bukan corak. Lihat {{cmd:GRADIENT}} untuk soalannya.

Lihat [Hatch dan kawasan isian](topic:hatch).

### GRADIENT

Alias: `GD`. Mengisi kawasan dengan kecerunan satu atau dua warna. Ia bertanya kecerunan dahulu, kemudian meneruskan seperti {{cmd:HATCH}} (`Tentukan titik dalaman`, `S` untuk objek tertutup, {{key:Enter}} untuk selesai).

- `Masukkan pilihan kecerunan [Jenis (T)/Satu warna (O)/Dua warna (TW)/Sudut (A)/Berpusat (C)/Keluar (X)] <X>`, diulang; ia mencetak kecerunan seperti sekarang setiap kali.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, atau salah satu daripadanya diterbalikkan (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Huruf pertama sudah memadai.
- `O`: satu warna, kemudian tonnya dari 0 hingga 1 (0 menggelapkannya kepada hitam, 0.5 ialah warna itu sendiri, 1 mencerahkannya kepada putih). `TW`: warna pertama dan kedua. Warna ialah nombor dari 1 hingga 255, tiga nombor seperti `255,128,0`, atau `#rrggbb`.
- `A`: sudut kecerunan itu berjalan. `C`: berpusat Yes atau No (No memindahkan tengah kecerunan ke satu sisi).
- Ia menolak warna atau jenis yang tidak dikenali, dan ton di luar 0 hingga 1.

{{cmd:HATCHEDIT}} `G` dan Sifat (Kecerunan) menukar kecerunan kemudian, atau menukar mana-mana hatch menjadi kecerunan. Kecerunan dilukis pada skrin dan dicetak. DWG 2004 dan kemudian menyimpannya sebagai hatch kecerunan sebenar; DXF 2000 dan DWG 2000 menyimpannya untuk CadCraft, dan program lain melihat isian pepejal dalam warna pertama.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Menjana semula sempadan daripada hatch yang telah kehilangannya. `Pilih hatch` (atau pilih dahulu), kemudian `Pautkan setiap hatch kepada sempadan barunya, supaya hatch mengikutnya? [Yes/No] <Yes>`.

- Setiap gelung hatch menjadi polygaris tertutup pada lapisan hatch; polygaris baharu ditinggalkan dipilih. Tepi melengkung kembali sebagai bahagian garisan lurus pendek yang disimpan hatch.
- Dengan Yes hatch mengikut sempadan barunya, seperti hatch yang dibuat dengan {{cmd:HATCH}}. Satu langkah buat asal.
- Ia memberitahu apabila tiada hatch dipilih.

### POINT

Alias: `PO`; atau {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Objek titik, satu setiap klik, sehingga Enter.

- `Tentukan satu titik`

### XLINE

Alias: `XL`; atau {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Garisan binaan, tanpa hujung ke dua arah. Lihat [Garisan binaan dan sinar](topic:construction-lines).

- `Tentukan satu titik [Hor/Ver/Ang/Bisect/Offset]`, kemudian `Tentukan titik melalui` bagi setiap garisan, sehingga Enter.
- `A`: `Masukkan sudut garisan binaan [Rujukan] <0>`; `R` meminta `Pilih objek garisan` dahulu.
- `B`: `Tentukan titik bucu sudut`, `Tentukan titik mula sudut`, kemudian `Tentukan titik tamat sudut` bagi setiap garisan.
- `O`: `Tentukan jarak ofset [Melalui] <Melalui>`, kemudian `Pilih objek garisan` dan `Tentukan sisi untuk diofset` (atau `Tentukan titik melalui`) bagi setiap garisan.

### RAY

Tiada alias; atau {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Tentukan titik mula`, kemudian `Tentukan titik melalui` bagi setiap sinar, sehingga Enter.

### TEXT

Alias: `DT`, `DTEXT`; atau {{ui:Text}} pada bar alat. Teks satu baris; setiap baris ialah objek sendiri.

- `Tentukan titik mula teks [Penjajaran (J)]`
- `J`: `Masukkan pilihan [Left/Center/Right/Middle/TL/MC] <L>`, kemudian `Tentukan titik selitan teks`
- `Tentukan tinggi <tinggi teks semasa>`
- `Tentukan sudut putaran teks <0>`
- `Masukkan teks`, diulang: setiap Enter memulakan baris seterusnya di bawah. Enter pada baris kosong menamatkan. {{key:Space}} menaip ruang di sini.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} meletakkan tanda pada garisan, lengkok, bulatan, polygaris, splin atau elips yang memotongnya kepada bahagian sama. Pilih objek, kemudian beri bilangan bahagian (2 hingga 32767). Objek terbuka mendapat satu tanda kurang daripada bahagian; yang tertutup mendapat tanda pada permulaannya juga. Objek itu sendiri tidak dipotong. Tanda ialah titik; `Block` meminta blok lukisan ini sebaliknya dan sama ada ia berputar mengikut objek. Panjang sepanjang splin dan elips diukur sepanjang kord pendek. Ia menolak teks, hatch dan objek lain yang tiada panjang.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} meletakkan satu tanda setiap panjang yang diberi sepanjang garisan, lengkok, bulatan, polygaris, splin atau elips, dikira dari hujung yang paling dekat dengan tempat anda memilih (objek tertutup: dari permulaannya). Beri panjang dengan menaipnya atau dengan dua titik. Hujung jauh objek terbuka tidak mendapat tanda. `Block` meletakkan blok pada setiap tanda dan bukannya titik. Ia menolak panjang 0, panjang yang lebih daripada objek, dan panjang yang akan menghasilkan lebih 32767 tanda.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} membuat polygaris tertutup di sekeliling kawasan yang mengandungi titik yang anda pilih, daripada mana-mana garisan, lengkok, bulatan, polygaris dan lengkung yang mengelilinginya pada skrin. Bahagian yang terletak pada lengkok atau bulatan kembali sebagai segmen lengkok; bahagian elips dan splin kembali sebagai segmen lurus pendek. Dengan `Islands` dihidupkan (tetapan permulaan) setiap kawasan tertutup di dalamnya juga mendapat polygarisnya sendiri. Teruskan memilih titik; Enter menamatkan. Objek yang membentuk kawasan dibiarkan seperti sedia ada. Ia memberitahu apabila tiada kawasan tertutup mengandungi titik itu.

### BLEND

{{cmd:BLEND}} melukis splin antara hujung dua lengkung terbuka. Pilih setiap lengkung berhampiran hujung untuk dicantumkan. `CONtinuity` memilih `Tangent` (splin meninggalkan dan tiba sepanjang kedua-dua lengkung) atau `Smooth` (ia juga melengkung mengikut cara kedua-duanya melengkung di hujung); pilihan itu dikekalkan untuk sesi. Kedua-dua lengkung tidak berubah. Ia menolak objek tertutup dan dua hujung yang sudah bertemu.

### REGION

Alias: `REG`. {{cmd:REGION}} menukar objek tertutup menjadi rantau: kawasan rata yang boleh anda cantumkan, potong dan ukur. Pilih bulatan, polygaris tertutup, elips tertutup atau splin tertutup, atau garisan, lengkok dan polygaris terbuka yang menutup gelung hujung ke hujung; setiap gelung menjadi satu rantau dan menggantikan objek asalnya. Lengkok kekal sebagai lengkok; elips dan splin menjadi segmen lurus pendek. Apa yang tidak tertutup dan tidak menutup gelung dibiarkan seperti sedia ada, dan ia memberitahu berapa banyak. Dalam lukisan, rantau ialah satu atau lebih polygaris tertutup yang dipegang bersama sebagai kumpulan tanpa nama, jadi satu klik memilih keseluruhan rantau dan salinan ialah rantau tersendiri; program lain yang membuka fail melihat polygaris tertutup.

Dengan rantau dalam lukisan, {{cmd:UNION}}, {{cmd:SUBTRACT}} dan {{cmd:INTERSECT}} pada tab 2D berfungsi pada rantau: `UNION` mencantumkan rantau yang dipilih menjadi satu (rantau yang berasingan menjadi satu rantau berbilang garis luar), `SUBTRACT` meminta rantau untuk ditolak daripadanya dan kemudian yang akan dialih keluar (lubang kekal sebahagian daripada rantau), `INTERSECT` mengekalkan kawasan yang dikongsi oleh semuanya. Setiap satu memberitahu luas hasilnya dan merupakan satu langkah buat asal. Ia menolak apabila tiada apa yang tinggal atau tiada yang dikongsi. Pada tab 3D, dan dalam lukisan tanpa rantau, arahan yang sama berfungsi pada pepejal seperti sebelum ini.

## Ubah

### MTEXT

Alias: `MT`, `T`; atau {{ui:Paragraph}} pada bar alat. Teks perenggan yang dibalut kepada lebar, ditaip di tempat.

- `Tentukan bucu pertama`
- `Tentukan bucu bertentangan [Tinggi (H)/Penjajaran (J)/Jarak baris (L)/Putaran (R)/Lebar (W)]`: lebar merentas dua bucu ialah tempat teks dibalut. `H` meminta `Tentukan tinggi`, `J` `Masukkan penjajaran [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Masukkan faktor jarak baris (0.25 hingga 4)`, `R` `Tentukan sudut putaran`, `W` `Tentukan lebar (0 untuk tiada pembalutan)` dan melangkau bucu kedua.
- Kemudian kotak terbuka pada lukisan: taip, {{key:Enter}} untuk perenggan baharu, {{key:Mod+Enter}} atau klik di luar untuk selesai, {{key:Esc}} untuk batal. Bar kotaknya menetapkan tinggi, jarak baris, lebar dan penjajaran. Lihat [Tambah teks dan label](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; atau klik dua kali pada teks. `Pilih teks untuk disunting`, diulang sehingga {{key:Enter}}: setiap satu dibuka dalam kotak yang sama. Dimulakan pada teks yang dipilih atau diklik dua kali, ia menyunting teks itu dan menamatkan.

### ERASE

Alias: `E`, `DELETE`; atau tekan {{key:Delete}} dengan objek dipilih.

- `Pilih objek` (dilangkau apabila objek sudah dipilih)

### MOVE

Alias: `M`.

- `Pilih objek`
- `Tentukan titik asas [Anjakan (D)]`, `Tentukan titik kedua`
- `D`: `Tentukan anjakan`, ditaip sebagai `dx,dy`.

### COPY

Alias: `CO`, `CP`. Salinan sebanyak kali anda beri titik.

`Array` pada gesaan titik kedua membuat satu baris sekali gus: beri bilangan item (asal dikira sebagai satu), kemudian titik tempat salinan pertama diletakkan; yang lain mengikut pada jarak yang sama. `Fit` menjadikan titik itu tempat salinan terakhir sebaliknya, dengan yang lain tersebar sama rata di antaranya.

- `Pilih objek`
- `Tentukan titik asas [Anjakan (D)]`
- `Tentukan titik kedua [Buat asal (U)]`, diulang sehingga Enter. `U` mengambil semula salinan terakhir.

### ROTATE

Alias: `RO`.

- `Pilih objek`, `Tentukan titik asas`
- `Tentukan sudut putaran <sudut terakhir>`: darjah, positif lawan arah jam; atau klik satu titik untuk memutar ke arahnya.

### SCALE

Alias: `SC`.

- `Pilih objek`, `Tentukan titik asas`
- `Tentukan faktor skala`: taip faktor seperti `0.5` atau `2`. Titik yang diklik memberi jaraknya dari titik asas sebagai faktor.

### MIRROR

Alias: `MI`.

- `Pilih objek`
- `Tentukan titik pertama garisan cermin`, `Tentukan titik kedua garisan cermin`
- `Padam objek sumber? [Yes/No] <N>`

### ALIGN

Alias: `AL`; atau {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Pilih objek`
- `Tentukan titik sumber pertama`, `Tentukan titik destinasi pertama`
- `Tentukan titik sumber kedua (Enter untuk teruskan)`, `Tentukan titik destinasi kedua`
- `Tentukan titik sumber ketiga (Enter untuk teruskan)`, `Tentukan titik destinasi ketiga`
- Dengan dua pasangan: `Skalakan objek berdasarkan titik penjajaran? [Yes/No] <N>`

Lihat [Jajarkan objek](topic:modify-objects#align-objects).

### ALIGNTO

- `Pilih objek` (atau pilihan), `Jajar [Left/Center/Right/Top/Middle/Bottom] <Left>`, `Kepada [Selection/First/Last/Point] <Selection>`; `P` meminta titik. Pilihan kekal.

### DISTRIBUTE

- `Pilih objek` (sekurang-kurangnya tiga), `Agih [Horizontally/Vertically] <Horizontally>`, `Jarakkan sama rata [Centers/Gaps] <Gaps>`. Dua di luar kekal; pilihan kekal.

### ALIGNPANEL

Alias: `ALP`; atau {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Membuka panel yang menjalankan ALIGNTO dan DISTRIBUTE melalui klik.

### LASER

Alias: `LASERCUT`; atau {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Membuka panel Laser di atas lukisan: apa yang dilakukan setiap lapisan (potong, skor, ukir, isi, gambar), pratonton, kod G GRBL untuk disimpan, dan pembingkaian serta penghantaran melalui Web Serial. Lihat [Hantar lukisan ke laser](topic:laser-cutting).

### STRETCH

Alias: `S`; atau {{ui:Stretch}}. `Pilih objek untuk diregangkan`: seret tetingkap silang (atau taip `C`) ke atas hujung untuk mengalih. `Tentukan titik asas [Anjakan (D)]`, `Tentukan titik kedua`. Titik di dalam tetingkap bergerak: hujung garisan, bucu polygaris (segmen lengkok mengekalkan ketinggiannya), titik dimensi; bulatan, elips, teks, titik dan blok bergerak sepenuhnya apabila pusat atau titik selitannya berada di dalam. Pilihan yang dibuat sebelum arahan mengekalkan tetingkap silang (dan lasso) yang membentuknya, supaya ia meregang dengan cara yang sama. Tanpa tetingkap, objek bergerak sepenuhnya.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; atau {{ui:Array}}. `Pilih objek`, kemudian `Masukkan jenis tatasusunan [Rectangular/POlar] <Rectangular>` (ARRAY sahaja).

- Rectangular bermula dengan 4 lajur × 3 baris, berjarak 1.5 kali saiz objek, dipaparkan sebagai pratonton. `Masukkan pilihan [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` meminta lajur dan baris, `S` jarak antara lajur dan antara baris (negatif pergi ke kiri atau bawah), `COL` dan `R` satu arah setiap satu.
- Polar meminta `Tentukan titik pusat tatasusunan`, bermula dengan 6 item mengelilingi sepenuhnya, diputar. `Masukkan pilihan [Items/Fill angle/ROTate items/eXit] <X>`: `I` item, `F` sudut untuk diisi (+ lawan arah jam, − arah jam), `ROT` Yes atau No.
- {{key:Enter}} (eXit) membuat salinan, sebagai objek biasa. Satu langkah buat asal.
- `AS` (ASsociative) bertukar antara salinan biasa dan tatasusunan yang kekal boleh disunting: satu objek yang anda ubah kemudian dengan {{cmd:ARRAYEDIT}}, melalui gripnya atau dalam Sifat. Pilihan itu diingati ({{cmd:ARRAYASSOCIATIVITY}}); ia bermula pada salinan biasa.

### ARRAYPATH

Salinan sepanjang lengkung. `Pilih objek`, kemudian `Pilih lengkung laluan`: garisan, lengkok, bulatan, elips, polygaris atau splin (bukan salah satu objek yang disusun tatasusunan). Laluan bermula di hujungnya yang lebih dekat dengan objek, dan item pertama ialah objek di tempatnya.

- `Masukkan pilihan [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, dengan pratonton. `M`: `Divide` menyebarkan item sama rata sepanjang keseluruhan laluan, `Measure` meletakkan satu setiap jarak tertentu sepanjangnya. `I`: bilangan item (dengan Measure, 0 bermaksud sebanyak yang muat; nombor melebihi hujung laluan dihadkan kepada yang muat). `SP`: jarak antara item sepanjang laluan (bertukar kepada Measure). `AL`: Yes memutar setiap item untuk mengikut laluan, No mengekalkannya tegak.
- `AS` seperti dalam {{cmd:ARRAY}}. Dengan ia dihidupkan, tatasusunan menyimpan salinan bentuk laluan sendiri: menyunting lengkung laluan kemudian tidak mengalihkan item.
- Ia menolak laluan yang bukan lengkung, dan satu item.

### ARRAYEDIT

Menukar tatasusunan yang dibuat dengan ASsociative. `Pilih tatasusunan` (atau pilih dahulu). Ia mencetak keadaan tatasusunan sekarang, kemudian bertanya sehingga {{key:Enter}}:

- Rectangular: `COL` lajur dan jaraknya, `R` baris dan jaraknya, `A` sudut lajur berjalan.
- Polar: `I` item, `F` sudut isian, `ROT` putar item Yes atau No.
- Path: `M` Divide atau Measure, `I` item, `SP` jarak, `AL` jajar dengan laluan.
- `S` (Source) membuka objek yang diulang oleh tatasusunan, sendirian, seperti penyunting blok. Lukis dan sunting di sana; {{cmd:ARRAYCLOSE}} menyimpan atau membuang, dan setiap item mengikut.
- `REP` (REPlace): `Pilih objek ganti`, `Tentukan titik asas objek ganti`, kemudian klik item yang akan digantikan, {{key:Enter}}. Item tersebut menunjukkan gantian; objek gantian meninggalkan lukisan dan hidup dalam tatasusunan. `RES` (RESet) menunjukkan semula objek sumber dalam setiap item.
- Setiap perubahan ialah satu langkah buat asal. Ia menolak salinan biasa, rujukan blok biasa dan tatasusunan pada lapisan terkunci.

Nombor yang sama terdapat dalam Sifat di bawah Tatasusunan, dan tatasusunan mempunyai grip: titik asasnya mengalihkannya, grip pada item kedua menetapkan jarak, grip melepasi item terakhir menetapkan bilangan (polar: item kedua menetapkan bilangan item, item terakhir sudut isian). {{cmd:EXPLODE}} menukar tatasusunan kembali kepada salinan biasa.

### ARRAYCLOSE

Menamatkan {{cmd:ARRAYEDIT}} Source: `Simpan perubahan kepada objek sumber tatasusunan? [Save/Discard] <Save>`. Ia memberitahu apabila tiada objek sumber tatasusunan dibuka. {{cmd:BCLOSE}} melakukan perkara yang sama.

### ARRAYASSOCIATIVITY

`Masukkan nilai baharu untuk ARRAYASSOCIATIVITY (1 = tatasusunan kekal boleh disunting, 0 = salinan biasa)`. Menetapkan apa yang dimulakan oleh {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR dan {{cmd:ARRAYPATH}}; pilihan `AS` mereka menukar tetapan yang sama. Diingati dalam pelayar ini.

### OFFSET

Alias: `O`. Garisan, lengkok, bulatan dan polygaris.

Apabila polygaris bergerak ke luar dan segmen lurusnya terpisah pada bucu, {{cmd:OFFSETGAPTYPE}} memutuskan bagaimana jurang itu ditutup.

- `Tentukan jarak ofset [Melalui] <jarak terakhir, atau Melalui>`
- `Pilih objek untuk diofset`, kemudian `Tentukan titik pada sisi untuk diofset` (atau, dengan Through, `Tentukan titik melalui`), diulang sehingga Enter.

### OFFSETGAPTYPE

- `Jurang bucu ofset: 0 lanjutkan, 1 fillet, 2 chamfer`: bagaimana {{cmd:OFFSET}} menutup jurang pada bucu luar polygaris. `0` memanjangkan segmen sehingga bertemu (tetapan permulaan), `1` menyambungkannya dengan lengkok di sekeliling bucu lama, `2` dengan potongan lurus. Bucu dalam dan segmen lengkok tidak terjejas. Dikekalkan untuk sesi ini.

### EXTRIM

{{cmd:EXTRIM}} memangkas segala-galanya pada satu sisi tepi. Pilih tepi pemotong (garisan, lengkok, bulatan, polygaris, elips, splin atau garisan binaan), kemudian pilih titik pada sisi yang akan dikosongkan: setiap garisan, lengkok, bulatan, polygaris dan garisan binaan yang bersilang dengan tepi kehilangan bahagiannya pada sisi itu, di mana ia bermula pada tepi. Semasa anda memilih sisi, bahagian yang akan hilang mengikut penuding. Bagi tepi tertutup sisinya ialah dalam dan luar. Objek yang hanya menyentuh tepi, dan teks, hatch, splin dan elips yang merentasinya, dibiarkan seperti sedia ada. Satu langkah buat asal.

### TRIMEXTENDMODE

- `Masukkan nilai baharu untuk TRIMEXTENDMODE (1 Quick, 0 Standard)`: cara {{cmd:TRIM}} dan {{cmd:EXTEND}} bermula. `1` Quick: setiap objek ialah tepi pemotong atau sempadan. `0` Standard: mereka meminta tepi dahulu. Juga `(setvar "TRIMEXTENDMODE" 0)` dalam LISP.

### TRIM

Alias: `TR`. Mencetak `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` dahulu. Dalam mod Quick setiap objek yang kelihatan ialah tepi pemotong, dan objek yang tiada apa bersilang dengannya dipadam; dalam mod Standard ia bertanya `Pilih tepi pemotong (Enter = setiap objek)` dahulu dan memotong hanya di situ.

- `Pilih objek untuk dipangkas atau shift-pilih untuk memanjangkan [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, diulang: klik bahagian yang hendak dialih keluar (ia kelihatan kelabu dan putus-putus semasa penuding berada di atasnya), seret laluan melalui beberapa bahagian (semuanya dalam satu langkah), atau klik dua tempat kosong untuk pagar di antaranya. {{key:Shift}} memanjangkan sebaliknya. `T` memilih tepi pemotong (mod Standard), `F` meminta titik pagar, `C` dua bucu tetingkap (bahagian yang separuh di dalam turut pergi), `O` meminta `Masukkan pilihan mod pangkas [Quick/Standard]`, `E` meminta `Masukkan mod lanjutan tepi tersirat [Extend/No extend]` (EDGEMODE), `R` memadam objek yang anda pilih, `U` membuat asal pilihan atau seretan terakhir. Enter menamatkan. Lihat [Pangkas dan panjangkan](topic:trim-and-extend).

- Klik pada hatch memangkas hatch: tepi pemotong membahagikan kawasan berlorek, dan bahagian yang anda klik diambil (tiada garis luar yang dilukis ditinggalkan di tempatnya). Hatch mengekalkan coraknya atau kecerunannya; hatch yang dipautkan kepada sempadannya tidak lagi dipautkan selepas itu, kerana ia tidak lagi mengisi sempadan itu. Ia memberitahu apabila tiada tepi pemotong membahagikan hatch di situ, apabila klik berada di luar hatch, dan apabila tiada apa yang akan tinggal (gunakan {{cmd:ERASE}}). Laluan atau pagar yang diseret tidak memangkas hatch.

### EXTEND

Alias: `EX`. Sama seperti TRIM tetapi sebaliknya: `Pilih objek untuk dipanjangkan atau shift-pilih untuk memangkas [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Satu klik memanjangkan hujung yang paling dekat dengannya ke sempadan seterusnya; laluan atau pagar yang diseret memanjangkan setiap objek yang dilintasinya; {{key:Shift}} memangkas. `B` memilih tepi sempadan (mod Standard). Mode dan Edge dikongsi dengan TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; atau {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, atau ikon pautan pada tab lukisan. `Pautkan pandangan anak tetingkap [ON/OFF]` (Enter mengambil keadaan yang satu lagi): semasa dihidupkan, satu pan atau zum dalam anak tetingkap aktif mengalihkan setiap anak tetingkap yang menunjukkan jenis ruang yang sama. Lihat [Bahagikan skrin](topic:split-screen).

### OPENIN3D

Tiada alias; atau {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} di mana aplikasi pemodelan 3D menerima lukisan yang dihantar. Membukanya di sana dalam tab baharu, sebagai DWG (tiada apa dimuat naik). Jika pelayar menyekat tab, ia memberitahu anda.

### LASSOMODE

`Masukkan nilai baharu untuk LASSOMODE (1 = lasso, 0 = segi empat tepat)`: apa yang ditekan dan diseret pada tempat kosong akan lukis. Sama seperti Tetapan › CadCraft › Seret untuk memilih. Lihat [Pemilihan lasso](topic:lasso-selection).

### FILLET

Alias: `F`. Garisan, lengkok, bulatan dan polygaris. Mencetak `Current settings: Mode = TRIM, Radius = 0` dahulu.

- `Pilih objek pertama [Buat asal (U)/Polyline (P)/Radius (R)/Trim (T)/Multiple (M)]`
  - `R` meminta `Tentukan jejari fillet <terakhir>`. `T` meminta `Masukkan pilihan mod Trim [Trim/No trim]`: dengan No trim objek kekal seperti sedia ada dan hanya lengkok ditambah.
  - `M` meneruskan arahan untuk lebih banyak bucu sehingga {{key:Enter}}; `U` mengambil semula bucu terakhir tanpa meninggalkan arahan.
  - `P` meminta `Pilih polygaris 2D [Radius]` dan membundarkan setiap bucu tempat dua segmen lurus bertemu. Fillet yang sudah ada digantikan dengan jejari baharu; jejari 0 mengeluarkannya. Bucu yang sisinya terlalu pendek untuk jejari dibiarkan dan dikira.
- `Pilih objek kedua atau shift-pilih untuk menggunakan bucu [Radius]`. Tahan {{key:Shift}} semasa anda klik untuk bucu tajam, tanpa mengira jejari.

Klik setiap objek pada bahagian yang anda mahu kekalkan. Dua garisan yang tidak bertemu dipanjangkan. Dua garisan selari mendapat separuh bulatan merentas jurang, pada hujung garisan pertama yang paling dekat dengan klik anda. Bulatan tidak pernah dipotong. Dua segmen satu polygaris yang bersebelahan mendapat lengkok di dalam polygaris; satu polygaris dan objek lain berfungsi apabila potongan jatuh pada segmen pertama atau terakhir polygaris itu.

### CHAMFER

Alias: `CHA`. Garisan dan segmen lurus polygaris. Mencetak jarak semasa (atau panjang dan sudut) dahulu.

- `Pilih garisan pertama [Buat asal (U)/Polyline (P)/Distance (D)/Angle (A)/Trim (T)/mEthod (E)/Multiple (M)]`
  - `D` meminta `Tentukan jarak chamfer pertama <terakhir>` dan `Tentukan jarak chamfer kedua <yang pertama>`: yang pertama dipotong dari garisan pertama yang anda pilih, yang kedua dari yang satu lagi.
  - `A` meminta `Tentukan panjang chamfer pada garisan pertama` dan `Tentukan sudut chamfer dari garisan pertama`.
  - `E` (mEthod) memilih yang mana antara kedua-dua chamfer seterusnya menggunakan. `T`, `M`, `U` dan `P` berfungsi seperti dalam {{cmd:FILLET}}.
- `Pilih garisan kedua atau shift-pilih untuk menggunakan bucu [Distance/Angle/mEthod]`. {{key:Shift}}+klik membuat bucu tajam.

Jarak yang lebih panjang daripada garisan ditolak (`Distance is too large.`).

### BREAK dan BREAKATPOINT

Alias: `BR`. `Pilih objek` (tempat anda klik ialah titik pertama), `Tentukan titik putus kedua [Titik pertama (F)]`; `F` meminta `Tentukan titik putus pertama` dan `Tentukan titik putus kedua`. Bahagian di antaranya hilang; pada bulatan, lawan arah jam dari titik pertama. BREAKATPOINT meminta `Tentukan titik putus` dan memisahkan objek kepada dua di situ (bukan bulatan).

### LENGTHEN

Alias: `LEN`. `Pilih objek untuk diukur [DElta/Percent/Total/DYnamic]`: satu pilihan mencetak `Current length` (dan sudut terangkum lengkok) dan bertanya semula. `DE` meminta `Masukkan panjang delta (negatif memendekkan) [Angle]`, `P` `Masukkan panjang peratusan`, `T` `Tentukan jumlah panjang [Angle]`, `DY` menyeret. Kemudian `Pilih objek untuk diubah [Buat asal (U)]`, diulang: hujung yang paling dekat dengan klik bergerak. Garisan, lengkok dan polygaris terbuka.

### JOIN

Alias: `J`. `Pilih objek untuk dicantumkan`. Garisan, lengkok dan polygaris terbuka yang bertemu hujung ke hujung menjadi polygaris (tertutup apabila rantai itu menutup); garisan pada satu garisan menjadi satu garisan; lengkok satu bulatan menjadi satu lengkok atau bulatan. Sejarah memberitahu berapa objek yang dicantumkan dan berapa yang tidak.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Pilih objek sumber`, kemudian `Pilih objek destinasi [Settings]` dan {{key:Enter}}. Menyalin lapisan dan warna, dan antara objek jenis yang sama, tinggi dan lebar teks, saiz dimensi, atau corak hatch. `S` meminta `Hidupkan atau matikan sifat [Color/LAyer/Text/Dimension/Hatch]`, diulang sehingga {{key:Enter}}; pilihan itu diingati untuk sesi.

### EXPLODE

Alias: `X`. Polygaris menjadi garisan dan lengkok, rujukan blok menjadi objeknya, dimensi menjadi garisan, anak panah dan teks. Tatasusunan yang kekal boleh disunting ({{cmd:ARRAYEDIT}}) menjadi salinan biasa bagi objeknya.

- `Pilih objek`

### GROUP

Alias: `G`. {{cmd:GROUP}} memberikan objek yang dipilih satu nama yang dikongsi. Pilih objek, kemudian taip nama (tiada ruang; `?` menyenaraikan kumpulan; Enter membuat kumpulan tanpa nama) dan, untuk kumpulan bernama, huraian pilihan. Selepas itu satu klik pada salah satu daripadanya, atau tetingkap yang mengambil salah satu, memilih kesemuanya, supaya ia bergerak, disalin dan dipadam bersama; setiap objek kekal sebagai objek sendiri. Objek boleh berada dalam beberapa kumpulan. Salinan keseluruhan kumpulan ialah kumpulan tanpa nama baharu; salinan satu ahli sahaja menyertai kumpulan. Kumpulan dimiliki oleh ruang tempat ia dibuat (model atau helaian). Ia dikekalkan apabila anda simpan sebagai DWG atau DXF dan buka semula fail dalam CadCraft; fail DXF 2000 juga membawanya sebagai objek kumpulan untuk program lain, dan kumpulan yang dibuat dalam program lain dibaca apabila DXF atau DWG dibuka.

### UNGROUP

{{cmd:UNGROUP}} meleraikan kumpulan: pilih objek kumpulan (setiap kumpulan yang mereka ada akan dileraikan) atau taip `Name` dan nama kumpulan. Objek kekal dalam lukisan. Satu langkah buat asal mengembalikan kumpulan.

### GROUPEDIT

{{cmd:GROUPEDIT}} menukar satu kumpulan. Pilih satu objeknya, atau `Name` dan namanya; kumpulan yang sudah dipilih diambil sebagaimana adanya. Kemudian: `Add` objek (dipilih satu demi satu, bukan kumpulan demi kumpulan), `Remove` objek, `REName` kumpulan, tukar `Description`nya, atau tetapkan `Selectable` (sama ada klik pada satu objek memilih keseluruhan kumpulan). `eXit` atau Enter menamatkan. Kumpulan tanpa objek lagi akan hilang.

### PICKSTYLE

- `Pilihan kumpulan: 0 klik memilih satu objek, 1 seluruh kumpulannya`: dengan `1` (tetapan permulaan) satu klik atau tetingkap pada objek berkumpulan memilih seluruh kumpulannya; dengan `0` objek tunggal, supaya anda boleh menyunting satu ahli. Dikekalkan untuk sesi ini.

## Papan keratan

Papan keratan CadCraft sendiri: ia berfungsi dalam satu lukisan, antara lukisan dan antara tab CadCraft dalam pelayar ini. Lihat [Salin, tampal dan pendua](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, atau {{ui:Copy}} dalam kumpulan {{ui:Edit}}. Menyalin objek ke papan keratan, dengan blok dan lapisan yang digunakannya. Objek kekal dipilih.

- `Pilih objek untuk disalin` (dilangkau apabila objek sudah dipilih)

### CUTCLIP

{{key:Mod+X}}, atau {{ui:Cut}} dalam menu {{ui:More}}. Menyalin objek ke papan keratan, kemudian memadamnya (satu langkah buat asal).

- `Pilih objek untuk dipotong` (dilangkau apabila objek sudah dipilih)

### COPYBASE

Menyalin objek ke papan keratan dengan titik asas yang anda pilih; menampal meletakkan titik itu.

- `Tentukan titik asas`
- `Pilih objek untuk disalin`

### PASTECLIP

{{key:Mod+V}}, atau {{ui:Paste}} dalam kumpulan {{ui:Edit}}. Salinan mengikut kursor, tergantung dari bucu kiri bawah lingkungannya (atau pusatnya, atau titik `COPYBASE`; lihat [Tetapan CadCraft](topic:settings)).

- `Tentukan titik selitan`

Objek yang ditampal dipilih. Blok yang sudah ada dalam lukisan dengan nama yang sama mengekalkan takrifan lukisan ini.

Apabila kawasan yang disalin dalam MarkupCraft lebih baharu daripada yang disalin CadCraft (dan kurang daripada 6 jam), {{key:Mod+V}} dan `PASTECLIP` menampal kawasan itu sebaliknya: lihat `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Paste a copied area}} dalam menu {{ui:More}}. Menampal kawasan yang disalin dengan {{ui:Copy area}} dalam MarkupCraft sebagai gambar pada saiz sebenarnya. Lihat [Gambar dalam lukisan](topic:pictures).

- `Tentukan titik bucu kiri bawah kawasan yang disalin`
- `Skalakan saiz kertasnya mengikut (100 untuk helaian 1:100; Points: dua titik padanya dan jarak sebenarnya) [Points] <1>` (hanya apabila helaian tiada skala lukisan): satu nombor, {{key:Enter}} untuk saiz kertas, atau `P`, kemudian `Titik pertama pada kawasan yang ditampal`, `Titik kedua pada kawasan yang ditampal` dan jarak sebenarnya.

### PASTEORIG

{{key:Mod+Shift+V}}, atau {{ui:Paste in place}} dalam menu {{ui:More}}. Menampal pada koordinat tempat objek disalin. Tidak bertanya apa-apa.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, atau {{ui:Duplicate and move}} dalam menu {{ui:More}}. Salinan objek bergerak bersama penuding dari tempatnya sekarang; {{key:Esc}} tidak meninggalkan apa-apa. Tidak menggunakan papan keratan.

- `Pilih objek untuk diduplikasi` (dilangkau apabila objek sudah dipilih)
- `Tentukan tempat salinan pergi (Esc tidak meninggalkan apa-apa)`: klik, taip titik, `@dx,dy` (dari tempat penuding berada), atau jarak ke arah kursor.

### SELECT

Bertanya `Pilih objek` (dengan setiap pilihan di bawah) dan membiarkan apa yang anda pilih dipilih, untuk arahan seterusnya atau untuk `P` kemudian.

### QSELECT

Alias: `QS`. Dalam pelayar, kotak dialog {{ui:Quick select}} (lihat [Pilih objek](topic:select-objects#select-by-a-rule-quick-select)). Tanpanya, baris arahan bertanya `Masukkan jenis objek`, `Masukkan sifat`, `Masukkan pengendali [=/<>/>/</*/Select all] <=>` dan `Masukkan nilai`. Padanan menjadi pilihan.

### SELECTSIMILAR

Alias: `SIM`. `Pilih objek [SEttings]` (atau pilihan semasa): memilih setiap objek jenis yang sama dengan lapisan dan warna yang sama (dan nama blok, corak hatch). `SE` meminta `Hidupkan atau matikan sifat [LAyer/COlor/NAme/PAttern/HEight]`, diulang sehingga {{key:Enter}}.

### FIND

Tiada alias; atau {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Dalam pelayar, kotak dialog {{ui:Find and replace}} (lihat [Tambah teks dan label](topic:text#find-and-replace-words)). Tanpanya: `Masukkan teks untuk dicari`, kemudian `Masukkan teks gantian (Enter: pilih apa yang dijumpai)`. Mencari dalam teks, nilai atribut dan teks dimensi, pada tab terbuka atau dalam pilihan.

### SELECTALL dan DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) memilih setiap objek yang boleh anda sunting pada tab terbuka. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; atau {{key:Esc}}) mengosongkan pilihan.

## Dimensi

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Jarak mengufuk atau menegak.

- `Tentukan asalan garis lanjutan pertama [Select object]` (Enter atau `S`: `Pilih objek untuk didimensikan`, kemudian klik satu segmen garisan, lengkok, bulatan atau polygaris)
- `Tentukan asalan garis lanjutan kedua`
- `Tentukan lokasi garis dimensi [Text/Horizontal/Vertical/Rotated]`. `T` meminta teks (`<>` ialah nilai yang diukur), `H` dan `V` menetapkan arah, `R` meminta `Tentukan sudut garis dimensi <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. Jarak sebenar antara dua titik.

- Asalan seperti dalam {{cmd:DIMLINEAR}}, kemudian `Tentukan lokasi garis dimensi [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Pilih lengkok, bulatan atau garisan, atau Enter untuk bucu`
- Lengkok: sudutnya. Bulatan: `Tentukan titik hujung sudut kedua`. Garisan: `Pilih garisan kedua`. Enter: `Tentukan bucu sudut`, `Tentukan titik hujung sudut pertama`, `Tentukan titik hujung sudut kedua`.
- `Tentukan lokasi garis dimensi [Text]`: klik di dalam sudut untuk diukur.

### DIMRADIUS dan DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Pilih lengkok atau bulatan`, kemudian `Tentukan lokasi garis dimensi [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Meneruskan dari dimensi linear atau sejajar terakhir yang dibuat (atau bertanya `Pilih dimensi linear atau sejajar`).

- `Tentukan titik asalan garis lanjutan kedua [Buat asal (U)]`, diulang sehingga Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Seperti {{cmd:DIMCONTINUE}}, tetapi setiap dimensi bermula dari asalan pertama dan ditindih lebih jauh ke luar.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Tentukan lokasi ciri`, kemudian `Tentukan titik hujung petunjuk [Xdatum/Ydatum/Text]`. Menulis berapa jauh ciri itu dari asalan UCS sepanjang X atau sepanjang Y, pada petunjuk: petunjuk yang berjalan kebanyakannya ke atas atau ke bawah dibaca sebagai X, yang berjalan ke sisi dibaca sebagai Y; `Xdatum` dan `Ydatum` menetapkan yang mana. Tetapkan asalan dahulu dengan {{cmd:UCS}} (tanpanya ia ialah 0,0 lukisan). Grip mengalihkan ciri, asalan dan hujung petunjuk, dan nilainya mengikut. Disimpan sebagai dimensi koordinat sebenar dalam DWG dan DXF. Menolak hujung petunjuk pada ciri itu sendiri.

### DIMARC

Alias: `DAR`. `Pilih lengkok atau bahagian lengkok polygaris`, kemudian `Tentukan lokasi dimensi panjang lengkok [Text]`. Mengukur sepanjang lengkok (bukan kord) dan menulis simbol lengkok sebelum nilai. Menolak bulatan penuh, garisan atau segmen lurus polygaris. DWG menyimpannya sebagai dimensi panjang lengkok; DXF menyimpannya sebagai dimensi sudut dengan panjang sebagai teksnya, dan CadCraft membukanya semula sebagai dimensi panjang lengkok.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Pilih lengkok atau bulatan`, `Tentukan lata pusat`, `Tentukan lokasi patah`. Dimensi jejari untuk lengkung yang pusatnya jauh atau di luar helaian: garis dimensi bermula pada titik yang anda beri dan bukannya pusat, dengan patah di dalamnya, dan tetap menulis jejari sebenar. DWG menyimpannya sebagai dimensi jejari berpatah; DXF menyimpannya sebagai dimensi jejari, dan CadCraft membukanya semula sebagai berpatah.

### DIMJOGLINE

Alias: `DJL`. `Pilih dimensi untuk menambah patah [Remove]`, kemudian `Tentukan lokasi patah (atau tekan Enter)`. Meletakkan simbol patah pada garis dimensi linear atau sejajar, untuk menunjukkan jarak tidak dilukis mengikut skala; nilainya tidak berubah. `Remove` mengalihkannya. Menolak jenis dimensi lain.

### QDIM

Tiada alias. `Pilih geometri untuk didimensikan`, kemudian `Tentukan kedudukan garis dimensi [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Mendimensikan beberapa objek dalam satu langkah, dari hujung garisan dan segmen polygaris, pusat bulatan dan lengkok, titik dan rujukan blok. Kedudukan di atas atau di bawah objek mengukur merentas, yang di sebelahnya mengukur ke atas. `Continuous` merantaikan titik, `Baseline` mengukur semua dari yang pertama, `Staggered` menyusun pasangan dari tengah ke luar, `Ordinate` memberi setiap titik jaraknya dari datum (`datumPoint` memilih yang baharu), `Radius` dan `Diameter` mendimensikan setiap bulatan dan lengkok yang dipilih. Mod itu diingati. Semua yang dibuatnya ialah satu langkah buat asal. Ia memberitahu apabila terdapat kurang daripada dua titik, atau tiada lengkok atau bulatan untuk Radius dan Diameter.

### DIMBREAK

Alias: `DBREAK`. `Pilih dimensi untuk menambah atau mengalih keluar putusan`, kemudian `Putuskan di tempat objek lain bersilang [Auto/Manual/Remove] <Auto>`. `Auto` meninggalkan jurang dalam garis dimensi dan garis lanjutan di mana sahaja objek lain bersilang dengannya, dan mengira semula jurang itu apabila objek atau dimensi itu bergerak. `Manual` (satu dimensi) meminta dua titik dan meninggalkan jurang di antaranya. `Remove` mengalih keluar semua jurang. Jurang ialah 1.5 kali tinggi teks dimensi.

### DIMSPACE

Tiada alias. `Pilih dimensi asas`, `Pilih dimensi untuk dijarakkan`, `Masukkan nilai jarak atau Auto <Auto>`. Mengalihkan garis dimensi bagi dimensi linear dan sejajar yang selari (atau dimensi sudut pada bucu yang sama) supaya ia berada pada jarak yang sama, dikira dari dimensi asas, setiap satu pada sisi tempat ia berada. `0` menjajarkannya dengan asas; `Auto` ialah dua kali tinggi teks dimensi asas. Dimensi yang tidak selari dengan asas dibiarkan.

### DIMINSPECT

Tiada alias. `Pilih dimensi`, `Bentuk bingkai pemeriksaan [Round/Angular/None/remove] <Round>`, `Masukkan label`, `Masukkan kadar pemeriksaan <100%>`. Melukis bingkai sekeliling nilai dengan label sebelumnya dan kadar pemeriksaan selepasnya. `remove` mengalih keluar bingkai. Teks toleransi kekal bersama nilai.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Masukkan nama pembolehubah dimensi untuk ditindih atau Clear`, `Masukkan nilai baharu untuk …`, sekali lagi sehingga Enter, kemudian `Pilih dimensi`. Menukar tetapan itu pada dimensi yang dipilih sahaja; gaya dimensi tidak berubah. Menerima pembolehubah yang berupa nombor atau suis (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` mengembalikan dimensi yang dipilih kepada gayanya. Menolak nama yang bukan pembolehubah sedemikian dan nilai yang tidak boleh diterima.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Pilih dimensi`, kemudian untuk setiap satu asalan garis lanjutannya (`Tentukan asalan garis lanjutan pertama pada objek`: melekat pada hujung atau tengah garisan, bucu polygaris, pusat; Enter membiarkan titik itu bebas), atau untuk jejari, diameter, jejari berpatah atau dimensi panjang lengkok `Pilih lengkok atau bulatan`. Dimensi kemudian diikat pada objek tersebut: apabila ia bergerak atau berubah saiz ia mengikut dalam langkah buat asal yang sama dan diukur semula. Menggerakkan titik yang diikat dengan tangan, atau memadam objek, menamatkan ikatan itu. Ikatan disimpan dalam DWG dan DXF 2000 sebagai data CadCraft sendiri; program lain melihat dimensi biasa.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Pilih dimensi`. Membebaskannya daripada objek yang diikatnya; tiada apa yang bergerak.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Pilih bulatan atau lengkok untuk menambah tanda pusat`, diulang sehingga Enter. Melukis silang di pusat dan empat garis pusat sehingga sedikit melepasi lengkung (jenis garisan CENTER), sebagai garisan biasa pada lapisan semasa; disaiz daripada saiz anak panah dan skala keseluruhan tetapan dimensi semasa, diputar dengan UCS. Ia tidak mengikut bulatan jika bulatan itu bergerak.

### CENTERLINE

Alias: `CL`. `Pilih garisan pertama`, `Pilih garisan kedua`. Melukis garisan separuh jalan antara dua garisan (sepanjang pembahagi sudut apabila ia bertemu), sedikit lebih panjang daripadanya, dalam jenis garisan CENTER. Garisan biasa: ia tidak mengikut dua garisan itu.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Tiada alias. Setiap satu meminta `Masukkan nilai baharu untuk … <semasa>` dan menetapkan saiz itu untuk dimensi **baharu**: skala keseluruhan, tinggi teks, saiz anak panah, tempat perpuluhan (sehingga 8), jurang sekeliling teks, lanjutan melepasi garis dimensi, ofset dari asalan. Lihat [Tetapkan saiz dimensi](topic:dimension-settings).

### DIMLUNIT

Tetapan dimensi: format panjang bagi dimensi baharu sahaja (1 saintifik, 2 perpuluhan, 3 kejuruteraan, 4 seni bina, 5 pecahan).

### DIMSTYLE dan -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Pengurus gaya dimensi: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` pada baris arahan: `Gaya dimensi [Restore/Save/Delete/Apply/Compare/reName/List]`. Lihat [Tetapkan saiz dimensi](topic:dimension-settings#named-dimension-styles).

### DIMEDIT dan DIMTEDIT

`DIMEDIT` (`DED`): `Sunting dimensi [Home/New/Rotate/Oblique] <Home>`, kemudian dimensi (atau yang sudah dipilih). New meminta teks (`<>` = ukuran); Rotate untuk sudut (0 meletakkan semula teks); Oblique untuk sudut garis lanjutan dari paksi X (Enter = tiada; garisan linear dan sejajar sahaja). `DIMTEDIT` (`DIMTED`): `Teks dimensi [Left/Right/Center/Home/Angle] <Center>`. Lihat [Tetapkan saiz dimensi](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Unit dalam teks dimensi baharu [Drawing units/mm/cm/m/km]`, atau dengan dimensi dipilih `Unit dalam teks dimensi yang dipilih`. Menulis panjang yang diukur dalam unit itu dengan unit selepasnya (DIMLFAC dan akhiran DIMPOST); `D` kembali kepada unit lukisan. Lihat [Dimensi dalam mm, cm, m atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Mencetak `Panjang lengkok: … Jenis: …`, kemudian `Tentukan titik pertama [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular meminta `Tentukan bucu bertentangan`; Polygonal `Tentukan titik seterusnya (Enter menutup awan) [Buat asal (U)]`; Freehand mengikut penuding sehingga klik atau {{key:Enter}}; `O` meminta `Pilih objek` dan `Balikkan arah? [Yes/No] <N>` dan menukar objek menjadi awan. `A` meminta `Tentukan panjang setiap lengkok`. `R`, `P` dan `F` memilih jenis untuk awan seterusnya. Hasilnya ialah polygaris tertutup lengkok.

### MLEADER

Alias: `MLD`; atau {{ui:Leader}}. `Tentukan lokasi hujung anak panah petunjuk [Arrowhead size/Landing distance/Block]`, `Tentukan lokasi pendaratan petunjuk`, kemudian teks dalam kotak di tempat (atau, tanpanya, `Masukkan teks (baris kosong menamatkan)`). `Block` meminta nama blok dahulu dan multipetunjuk menunjukkan blok itu dan bukan teks. Lebih banyak garisan petunjuk: {{cmd:MLEADEREDIT}}. Disimpan sebagai multipetunjuk sebenar dalam DWG; DXF mengekalkan garisan, anak panah dan teks yang dilukisnya.

### MLEADEREDIT

Alias: `MLE`. `Pilih multipetunjuk`, kemudian `Tentukan lokasi hujung anak panah petunjuk [Remove leaders/Block content/Text content]`: setiap titik menambah satu garisan petunjuk dari anak panah baharu ke pendaratan yang sama, sehingga Enter. `Remove leaders` kemudian mengalih keluar garisan petunjuk yang anda klik (multipetunjuk mengekalkan sekurang-kurangnya satu). `Block content` meminta nama blok dan menunjukkan blok itu dan bukan teks (atributnya ditanya); `Text content` mengembalikan teks. Setiap garisan petunjuk mempunyai grip sendiri. DWG menyimpan setiap garisan petunjuk dan blok dalam satu multipetunjuk.

### MLEADERALIGN

Alias: `MLA`. `Pilih multipetunjuk`, kemudian `Pilih multipetunjuk untuk dijajarkan [Distribute/Spacing/Use current spacing]` dan `Tentukan arah`. Mengalihkan pendaratan multipetunjuk lain (dan teks atau blok mereka) ke garisan melalui pendaratan yang dipilih dalam arah itu; anak panah kekal menunjuk ke tempat ia menunjuk. `Spacing` juga menetapkan jarak sama antara mereka; `Distribute` meminta dua titik dan menyebarkan mereka sama rata di antaranya. Memerlukan sekurang-kurangnya dua multipetunjuk.

### MLEADERCOLLECT

Alias: `MLC`. `Pilih multipetunjuk`, kemudian `Tentukan lokasi multipetunjuk dikumpulkan [Vertical/Horizontal]` (Enter mengekalkan tempat yang pertama). Membuat satu multipetunjuk daripada beberapa: kandungan blok masuk ke blok baharu yang memegang setiap blok bersebelahan atau satu di bawah yang lain; kandungan teks menjadi satu nota dengan satu baris bagi setiap satu. Multipetunjuk pertama mengekalkan garisan petunjuknya; yang lain dibuang. Menolak campuran kandungan teks dan blok.

### TABLE

Alias: `TB`; atau {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Membuat jadual: satu objek yang anda alih, salin, putar, skala dan plot seperti objek lain, dengan selnya disimpan sebagai data.

- `Bilangan baris data atau [Paste/File/Style] <3>`, kemudian `Bilangan lajur <3>`, `Tinggi teks` dan `Bucu kiri atas jadual`. Jadual mendapat baris tajuk (satu sel bercantum) dan baris kepala di atas baris data.
- `P`: jadual daripada sel hamparan pada papan keratan (teks dengan tab antara sel). Menekan {{key:Ctrl+V}} dengan sel sedemikian pada papan keratan melakukan perkara yang sama, melainkan salinan CadCraft sendiri yang lebih baharu (atau CadCraft tidak dapat membezakan: kemudian ia menampal salinannya sendiri dan memberitahu anda). `F`: jadual daripada fail `.csv` atau fail berpisah tab. Baris pertama menjadi baris kepala; lebar lajur muat teks.
- `S`: pilih gaya jadual untuk jadual ini (lihat {{cmd:TABLESTYLE}}).
- Ia menolak bilangan baris atau lajur yang bukan nombor bulat, dan lebih banyak sel daripada yang dapat dipegang jadual (2,000 baris, 200 lajur, 40,000 sel).
- {{cmd:EXPLODE}} menukar jadual menjadi garisan dan teks. Disimpan sebagai DWG jadual ialah objek jadual sebenar yang program lain boleh sunting; disimpan sebagai DXF ia ialah blok yang melukisnya, dan CadCraft membukanya semula sebagai jadual.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; atau klik dua kali pada sel. Menyunting jadual.

- `Pilih sel untuk ditaip (Enter untuk selesai) atau [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klik sel, atau dengan jadual dipilih taip namanya (`B3`: lajur B, baris 3; baris tajuk ialah baris 1). Dalam pelayar kotak dibuka di atas sel: {{key:Enter}} menyimpan teks, {{key:Tab}} pergi ke sel seterusnya, {{key:Alt+Enter}} memulakan baris baharu, {{key:Esc}} membiarkan sel seperti sedia ada.
- Teks yang bermula dengan `=` ialah formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, dengan `+ - * / ^`, kurungan dan fungsi seperti `sqrt` dan `round`. Sel menunjukkan nilainya; formula yang menamakan selnya sendiri, sel di luar jadual atau sel tanpa nombor menunjukkan `####` dan baris arahan memberitahu sebabnya.
- `R` / `C`: `Insert` atau `Delete` baris atau lajur pada sel yang dipilih (berapa banyak, dan di atas atau bawah, kiri atau kanan). Formula mengikut sel yang dinamakannya.
- `S`: lebar lajur dan tinggi baris. Baris tidak pernah lebih rendah daripada yang diperlukan teksnya. Jadual yang dipilih juga mempunyai grip pada setiap tepi lajur dan baris.
- `M`: gabungkan dari satu sel yang dipilih ke sel lain; `U`: nyahgabungkan. `A`: penjajaran (`TL` kiri atas … `MC` tengah … `BR` kanan bawah). `H`: tinggi teks sel ini sendiri (0 = gaya). `K`: jadikan baris sebagai baris tajuk, kepala atau data. `CL`: kosongkan sel.
- Ia menolak jadual pada lapisan terkunci, memadam setiap baris atau lajur, dan penggabungan yang akan memotong sel bercantum yang lain kepada dua.

### TABLESTYLE

Alias: `TS`. Menyenaraikan gaya jadual dengan bilangan jadual yang menggunakan setiap satu, kemudian `Gaya jadual: [New/Set/Edit/Delete/Apply]`.

- Gaya memegang tinggi teks dan penjajaran bagi baris tajuk, kepala dan data, margin sel, dan sempadan mana yang dilukis (luar, antara baris, antara lajur).
- `N` membuat gaya daripada yang semasa dan menjadikannya semasa; `S` menetapkan gaya semasa (jadual baharu mengambilnya); `E` menyunting satu: jadual yang menggunakannya dilukis semula; `A` memberi jadual yang dipilih gaya semasa; `D` memadam satu (bukan Standard, bukan yang semasa; jadual yang menggunakannya mengekalkan rupanya).
- Gaya disimpan bersama lukisan (DWG dan DXF).

### TABLEEXPORT

Menyimpan apa yang ditunjukkan oleh jadual sebagai fail CSV (formula sebagai nilainya). `Pilih jadual`, atau pilih satu dahulu. Sel teks yang bermula dengan `=`, `+`, `-` atau `@` mendapat `'` di hadapan supaya hamparan tidak menjalankannya.

### TABLEPASTE

Alias: `PASTETABLE`. Membuat jadual daripada sel hamparan pada papan keratan, kemudian bertanya bucu kiri atasnya. Sama seperti {{cmd:TABLE}} › `Paste`.

### DATALINK

Alias: `DL`. `Pautan data: [New/List/Remove] <New>`. `N` meminta fail CSV, meletakkan jadual daripadanya dan mengingati nama fail; `L` menyenaraikan pautan dengan fail, saiz, bila ia dibaca dan berapa jadual menggunakannya; `R` mengalih keluar pautan (jadualnya kekal sebagai jadual biasa).

### DATALINKUPDATE

Alias: `DLU`. Membaca semula fail pautan data dan mengisi semula jadual yang dipautkan kepadanya (baris dan lajur ditambah atau dibuang untuk sepadan). Pelayar tidak dapat membuka fail dengan sendirinya, jadi ia meminta anda memilih fail semula. Dengan beberapa pautan ia bertanya yang mana.

### FIELD

Meletakkan medan dalam lukisan: teks yang mengira sendiri. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: sekarang, atau tarikh disimpan, dicipta atau diplot, dan format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: nama fail, dengan atau tanpa sambungannya. `S`: nombor helaian, tajuknya, atau berapa banyak helaian. `P`: sifat lukisan mengikut nama (lihat {{cmd:DWGPROPS}}). `O`: pilih objek, kemudian apa yang hendak dibaca (luas, panjang, perimeter, jejari, diameter, lapisan, nama, x, y, teks, putaran, warna) dan tempat perpuluhan. `E`: formula. `C`: teks dengan kod yang ditaip seperti sedia ada, seperti `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Kemudian `Pilih teks, sel jadual atau blok dengan atribut untuk meletakkannya (Enter: teks baharu)`: teks yang dipilih mendapat medan ditambah selepas apa yang ada padanya; sel jadual juga; rujukan blok bertanya atribut mana; {{key:Enter}} meminta ketinggian dan titik untuk teks baharu.
- Pada skrin medan mempunyai latar kelabu muda; plot dan PDF tidak pernah memilikinya. Menaip ganti teks medan dengan tangan menamatkan medan. Medan yang tidak dapat dikira menunjukkan `####`.
- Medan objek mencari objeknya melalui kunci yang CadCraft simpan pada objek (Tetapan › CadCraft › Fail mesra gabungan); dengan kunci dimatikan ia menolak.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Pilih objek yang medannya hendak dikemas kini (Enter: setiap medan) atau [Settings]`. `S` menetapkan bila medan dikemas kini dengan sendirinya: taip huruf `O` open, `S` save, `P` plot, `R` regen (semua empat untuk bermula), atau `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Menyenaraikan sifat lukisan, kemudian `Tukar: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Enam yang pertama ialah yang ditunjukkan oleh panel {{ui:Drawing details}}; `U` menambah nama dan nilai anda sendiri, `R` mengalih keluar satu. Medan membacanya (`%<prop:title>%`, `%<prop:Client>%`) dan mengikut serta-merta. Ia menolak nama tersuai yang merupakan salah satu nama terbina dalam, atau yang mengandungi `%`, `<`, `>`, tanda petikan atau garis condong terbalik.

## Parametrik

Lihat [Kekang lukisan](topic:constraints) dan [Guna parameter dan persamaan](topic:parameters). Kekangan berfungsi pada tab {{ui:Model}}.

### GEOMCONSTRAINT dan arahan GC

Alias `GCON`: `Masukkan jenis kekangan [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, kemudian gesaan arahan itu.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Pilih objek [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Pilih objek pertama`, `Pilih objek kedua` (yang kedua bergerak).
- {{cmd:GCCOINCIDENT}}: `Pilih titik pertama [Object/Autoconstrain] <Object>`, `Pilih titik kedua [Object] <Object>`.
- {{cmd:GCFIX}}: `Pilih titik [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Pilih objek pertama [2Points] <2Points>`, `Pilih objek kedua`, `Pilih garisan simetri`.

### DIMCONSTRAINT dan arahan DC

Alias `DCON`: `Pilih dimensi bersekutu untuk ditukar [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Tentukan titik kekangan pertama [Object] <Object>`, `Tentukan titik kekangan kedua`, `Tentukan lokasi garis dimensi`, `Teks dimensi <d1=40>` (nombor, ungkapan, atau `nama=ungkapan`).
- {{cmd:DCALIGNED}}: seperti di atas, dengan `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Pilih lengkok atau bulatan`. {{cmd:DCANGULAR}}: `Pilih garisan atau lengkok pertama`, `Pilih garisan kedua`.
- {{cmd:DCCONVERT}}: `Pilih dimensi untuk ditukar`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Pilih objek [Settings]`. `S` meminta toleransi jarak dan sudut.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Pilih objek`; kekangan mereka dibuang.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Pilih objek [Showall/Hideall]`, kemudian `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Masukkan pilihan [Show/Hide]`.

### PARAMETERS dan -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) membuka panel {{ui:Parameters}}. `-PARAMETERS`: `Masukkan pilihan [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Memuat turun makro (.swb) yang membina semula model sebagai satu lakaran berkekangan dalam SolidWorks. Lihat [Pindahkan lakaran ke dan dari pemodel bahagian lain](topic:solidworks-sketches).

## Blok

### ANNOSCALE

Alias: `CANNOSCALE`. Memberitahu skala anotasi lukisan dan berapa banyak objek beranotasi yang ada, kemudian bertanya `Skala anotasi baharu`: taip `1:50`, `1:100`, `2:1`, nombor sahaja (`50` ialah 1:50) atau nama salah satu skala lukisan itu sendiri. Setiap teks dan dimensi beranotasi diubah saiz supaya dicetak pada saiz yang sama pada skala baharu, dalam satu langkah buat asal; objek yang tidak beranotasi dibiarkan, dan begitu juga objek yang menyimpan senarai skala tanpa yang baharu ({{cmd:OBJECTSCALE}}). Lihat [Unit, kertas dan skala](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Pilih objek beranotasi`, kemudian `Skala anotasi objek yang dipilih [Add/Delete/Current scale/List/eXit] <Add>`. Teks atau dimensi beranotasi menyimpan senarai skala anotasi. `Add` dan `Delete` meminta skala (`1:50`, `2:1`, nombor sahaja, atau nama salah satu skala lukisan); `Current scale` menambah skala anotasi lukisan; `List` mencetak skala setiap objek. Viewport yang skalanya ada dalam senarai objek menunjukkan objek itu pada saiz yang mencetak ketinggian kertasnya pada skala itu, pada skrin dan dalam plot. Skala terakhir tidak boleh dipadam. Objek yang tidak beranotasi dikecualikan: hidupkan Annotative dalam Sifat dahulu. Senarai disimpan dalam DWG dan DXF sebagai data CadCraft sendiri. Lihat [Unit, kertas dan skala](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Tunjukkan objek beranotasi pada semua skala [ON/OFF]`. Dihidupkan (apabila lukisan bermula): objek beranotasi juga ditunjukkan dalam viewport, atau dalam model, yang skalanya tidak ada dalam senaraiannya, pada saiz yang dimilikinya. Dimatikan: ia tidak ditunjukkan di sana, dan tidak boleh dipilih dalam model. Suis itu ialah satu langkah buat asal; ia tidak disimpan dalam fail.

### SCALELISTEDIT

Alias: `SCALELIST`. `Senarai skala [Add/Edit/Delete/List/Reset]` sehingga {{key:Enter}}. Add: `Nama skala`, `Unit kertas`, `Unit lukisan`. Edit dan Delete meminta nama skala. Skala lukisan itu sendiri menyertai senarai skala viewport dan plot dan disimpan bersama lukisan. Lihat [Unit, kertas dan skala](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT dan PEDIT

`SPLINE` (`SPL`): `Titik pertama splin [Method/Object] (Fit points)`. Fit: titik yang dilalui lengkung; `Close`, `Undo`, kemudian `Tangen mula` dan `Tangen tamat` (satu titik, atau {{key:Enter}}). Method › Control vertices meminta darjah (1 hingga 5) dan melukis daripada poligon kawalan. Object menukar polygaris kepada splin melalui bucunya. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` untuk beberapa objek; garisan, lengkok dan splin ditawarkan sebagai polygaris dahulu. Lihat [Splin dan polygaris](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Masukkan nama blok`. Jika ia wujud: `Blok "…" sudah wujud. Takrifkan semula? [Yes/No] <N>`.
- `Tentukan titik asas selitan`
- `Pilih objek`. Ia digantikan dengan satu rujukan kepada blok baharu.

### WBLOCK

Alias: `W`, `-WBLOCK`. Menulis blok, sesetengah objek atau seluruh lukisan sebagai fail DWG atau DXF baharu. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Tentukan titik asas selitan` (ia menjadi asalan lukisan baharu), `Pilih objek`, kemudian `Format fail [DWG/DXF/R12 DXF]` dan `Nama fail untuk lukisan baharu`, kemudian `Apa yang hendak dilakukan dengan objek [Retain/Convert to block/Delete]`. Convert menggantikannya dengan satu rujukan kepada blok bernama sama dengan fail; Delete membuangnya.
- **Block**: `Blok untuk ditulis`. Objek blok itu sendiri, dengan titik asasnya sebagai asalan, termasuk blok bersarang.
- **Entire drawing**: setiap objek dalam ruang model. Helaian tidak ditulis; gunakan {{cmd:SAVEAS}} untuk salinan yang mengekalkannya.

Fail baharu hanya memegang lapisan, jenis garisan, teks dan gaya dimensi serta blok yang digunakan objeknya, dan unit lukisan. Versi DWG ialah yang terakhir digunakan oleh {{cmd:SAVEAS}}. Dalam pelayar fail dimuat turun; dalam Studio kotak simpan dibuka.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Mencetak mod, kemudian `Masukkan pilihan untuk ditukar (Enter apabila selesai) [Invisible/Constant/Preset]`, `Masukkan nama tag atribut`, `Masukkan gesaan atribut`, `Masukkan nilai atribut lalai` (`Masukkan nilai atribut` apabila constant), `Tentukan titik mula teks`, `Tentukan tinggi teks`, `Tentukan sudut putaran teks`. {{cmd:BLOCK}} memasukkan takrif atribut ke dalam blok.

### EATTEDIT dan ATTEDIT

`EATTEDIT` (`DDATTE`, atau klik dua kali pada rujukan dengan atribut; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Pilih rujukan blok dengan atribut`, kemudian kotak dialog {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): rujukan yang sama, kemudian `<gesaan> (<TAG>) <nilai>` bagi setiap atribut; {{key:Enter}} mengekalkan nilai. Lihat [Atribut](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Kemas kini atribut rujukan blok yang mana [Name/Select/All] <Select>`. Nilai dikekalkan; atribut baharu mendapat lalainya, yang dibuang pergi, kedudukan ditetapkan semula.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Kotak dialog: blok, atribut (tag, gesaan, lalai, mod, susunan), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT dan REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Pilih rujukan blok untuk disunting di tempat` (atau pilihan). `REFCLOSE`: `Simpan perubahan kepada "…" [Save/Discard] <Save>`; {{ui:Save the block}} dan {{ui:Discard}} pada bar melakukan perkara yang sama. Keseluruhan suntingan ialah satu langkah buat asal. Lihat [Atribut](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT dan BCLOSE

`BE`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Masukkan nama blok untuk disunting <blok rujukan yang dipilih>` membuka penyunting blok. `BCLOSE` bertanya `Tutup penyunting blok pada "…" [Save/Discard] <Save>`; {{ui:Save block}} dan {{ui:Discard changes}} pada sepanduk melakukan perkara yang sama. Segala yang dilakukan dalam penyunting ialah satu langkah buat asal.

### VIEWBASE

Alias: `FLATSHOT`. Pandangan 2D rata bagi pepejal pada tab 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, skala (`1:20`, `2:1`; {{key:Enter}} mengambil yang sesuai dengan helaian), kemudian pusat pandangan. Satu rujukan blok, tepi yang kelihatan pada VIEW-VISIBLE, yang tersembunyi putus-putus pada VIEW-HIDDEN. Lihat [Pandangan rata pada helaian](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; atau {{ui:All sheets in one PDF}} dalam kotak dialog {{ui:Plot to PDF}}. `Helaian untuk diplot [All/Some]`: {{key:Enter}} memplot setiap helaian, `S` meminta nama dipisahkan dengan koma. Satu PDF, satu halaman dan satu penanda buku bagi setiap helaian. Lihat [Setiap helaian dalam satu PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Membawa anda ke bahagian {{ui:Sheet set}} pada panel kiri: helaian daripada banyak lukisan, dinomborkan dan diberi tajuk, blok tajuknya diisi daripada set itu, diterbitkan sebagai satu PDF. Lihat [Set helaian](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): pilih DWG atau DXF, kemudian titik selitannya. {{cmd:XREF}} (`XR`, `-XREF`): `Lukisan dipautkan [?/Attach/Reload/Bind/Detach] (Enter: ?)`; dengan lebih daripada satu pautan, pilih salah satu rujukannya atau taip `N` dan namanya. Lihat [Lukisan dipautkan](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Pilih rujukan blok untuk dikira, atau [All/Export] (Enter: All)`: satu pilihan memilih dan mengira setiap rujukan blok itu dalam ruang ini; {{key:Enter}} atau `A` menyenaraikan semuanya; `E` kemudian `C` (kiraan) atau `A` (atribut) memuat turun CSV. Lihat [Kira blok dan eksport jadual](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Masukkan nama blok atau [File/Library] <blok terakhir>` (huruf besar atau kecil tidak penting). `F` meminta DWG atau DXF, kemudian keseluruhan lukisan atau salah satu blok daripadanya; nama yang sudah digunakan meminta {{ui:Keep existing}} atau {{ui:Rename}}. `L` membuka panel pustaka.
- `Tentukan titik selitan [Scale/Rotate]`. `S` meminta `Tentukan faktor skala`, `R` meminta `Tentukan sudut putaran`; kedua-duanya diingati.
- Apabila blok sudah berada di sebelah objek yang berulang di tempat lain tanpanya, satu baris memberitahu berapa banyak tempat dicadangkan dan gesaan mendapat `suGgested`: `G` menunjukkannya; klik berhampiran satu untuk meletakkan blok di situ, `A` untuk semuanya, {{key:Enter}} untuk kembali. Ia mengambil putaran jirannya dan nilai atribut lalai. Lukisan melebihi 20,000 objek dalam ruang terbuka tidak dicari.
- Kemudian `Masukkan <gesaan> (<TAG>) <lalai>` bagi setiap atribut yang diminta blok. Lihat [Atribut blok](topic:attributes).

### LIBRARY

Alias: `LIB`. Membuka panel pustaka: letakkan item, semak kemas kini, kredit pustaka. Tiada soalan. Lihat [Selit daripada fail atau pustaka](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; atau {{ui:3D member}} pada tab {{ui:Standard}} pustaka. `Saiz keratan <W12x26>` (seperti yang disenaraikan oleh tab), kemudian `Titik mula [Column]` dan `Titik tamat`: anggota pepejal pada tab 3D antara dua titik, duduk di atas tanah. `C` meminta titik asas tiang dan ketinggiannya. Satu langkah buat asal. Lihat [Letakkan keratan keluli dan bahagian standard](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Bucu kiri atas senarai bahagian`, kemudian `Tinggi teks <2.5>`: melukis jadual bagi setiap bahagian standard dan keratan keluli yang diletakkan daripada pustaka (nombor item, kuantiti, bahagian, standard, saiz, panjang, bahan, jisim). Satu langkah buat asal. Lihat [Letakkan keratan keluli dan bahagian standard](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Mengalih keluar takrif blok yang tiada apa gunakan. Tiada soalan.

### DELBLOCKS

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Pilih blok untuk dipadam [Name/eXit]`: pilih rujukan blok, atau `N` untuk senarai blok dengan penapis (pilih beberapa), atau `X` / {{key:Enter}} untuk menamatkan. Setiap rujukan pergi — dalam model, pada setiap helaian dan di dalam blok lain — kemudian takrifannya, dan baris arahan memberitahu apa yang dipadam dan apa yang tidak dapat. Blok tanpa nama dan lukisan dipautkan tidak ditawarkan. Gesaan kembali untuk blok seterusnya; keseluruhan arahan ialah satu langkah buat asal.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} menampal apa yang anda salin ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) sebagai satu blok: pilih titik selitan dan satu rujukan kepada blok baharu pergi ke sana, dipilih. Blok mendapat nama sendiri (`A$C` dan nombor); {{cmd:RENAME}} memberinya nama anda. Satu langkah buat asal mengeluarkan rujukan dan blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} meminta blok untuk diganti dan blok untuk menggantikannya (`?` menyenaraikan blok), kemudian menukar setiap rujukan dalam model, pada setiap helaian dan di dalam blok lain. Setiap rujukan mengekalkan tempat, skala, putaran, lapisan dan nilai atribut yang kedua-dua blok miliki; atribut yang hanya ada pada blok baharu bermula pada lalainya, dan ia memberitahu anda nilai mana yang digugurkan. Apabila tiada apa yang menggunakan blok lama lagi, ia menawarkan untuk mengalihkannya. Ia menolak lukisan dipautkan dan gantian yang akan meletakkan blok di dalam dirinya sendiri. Satu langkah buat asal.

### MINSERT

{{cmd:MINSERT}} meletakkan blok dalam baris dan lajur: nama blok, titik selitan, skala, putaran, bilangan baris dan lajur, dan jarak antaranya. Keseluruhan set berputar dengan putaran itu. Setiap satu ialah rujukannya sendiri (10,000 paling banyak), jadi mana-mana daripadanya boleh dialih atau dipadam kemudian.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Menunjukkan panel {{ui:Blocks}} dengan kursor dalam penapisnya. Setiap blok mempunyai gambar kecil; yang paling baru diletakkan dahulu. Dua butang di sebelah penapis bertukar antara senarai dan grid gambar. Klik gambar (atau {{ui:Insert}}) untuk meletakkan blok dengan {{cmd:INSERT}}, atau seret ke lukisan untuk meletakkannya di tempat anda melepaskannya.

{{ui:Libraries}}, di bawah senarai: {{ui:Add a drawing}} mengambil fail DWG atau DXF anda sendiri dan menyenaraikan blok-bloknya dengan gambar, dan keseluruhan lukisan sebagai satu blok. Meletakkan satu menyalin takrifannya (dan blok yang dibersarangkannya, dan lapisannya) ke dalam lukisan ini, seperti pilihan `File` {{cmd:INSERT}}; blok yang sudah ada di sini dengan takrif yang sama digunakan tanpa soalan, satu yang bernama sama tetapi berbeza meminta {{ui:Keep existing}} atau {{ui:Rename}}. Dalam pelayar fail kekal sehingga halaman ditutup. Dalam CadCraft Studio {{ui:Add a folder}} menyenaraikan lukisan dalam folder, setiap satu dibuka apabila anda klik, dan fail serta folder diingati. Ikon x kecil mengalih keluar pustaka daripada senarai; fail tidak disentuh. {{ui:Library}} yang dikongsi ialah perkara yang berbeza: lihat [Selit daripada fail atau pustaka](topic:insert-from-file-and-library).

### BCONVERT

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Mencari geometri yang berulang dan menukar setiap salinan menjadi rujukan kepada satu blok.

- `Pilih objek yang berulang, atau [Block]`: objek satu salinan. `B` menamakan blok sedia ada sebaliknya, untuk mencari salinan longgar objeknya.
- `Salinan boleh jadi: mirrored = No, scaled = No; layer, color, linetype dan lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` dan `P` menukar apa yang dikira sebagai salinan; {{key:Enter}} mencari. Tetapan diingati.
- `Nama untuk blok baharu <Block1>`, kemudian `Tentukan titik asas blok` ({{key:Enter}} mengambil bucu kiri bawah pilihan).
- Ia memberitahu berapa set objek lain yang mempunyai geometri sama, menyerlahkan setiap yang akan digantikannya, dan bertanya `Yes/No`.

Salinan ialah objek yang sama yang dialihkan dan diputar pada sebarang sudut (dan dicerminkan atau diskalakan dengan satu faktor apabila ia dihidupkan): setiap objek mesti mempunyai pasangannya, dalam satu juta daripada saiz pilihan. Setiap rujukan mendapat putarannya sendiri dan skalanya sendiri (yang dicerminkan mendapat skala Y negatif), dan lapisan yang dikongsi objeknya. Objek pada lapisan terkunci dibiarkan dan dikira. Ia mencari dalam ruang terbuka (model atau helaian yang dibuka). Carian yang sangat besar berhenti pada had kerja dan memberitahu anda. Satu langkah buat asal.

### BSEARCH

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Cari blok mengikut [Name/Attribute/Geometry] <Name>`:

- `N`: sebahagian nama blok, atau corak dengan `*` dan `?`. Menyenaraikan setiap blok dengan rujukannya di sini dan dalam keseluruhan lukisan.
- `A`: nilai atribut, atau `TAG=value`. Menyenaraikan blok yang rujukannya memegangnya, dengan nilai yang dijumpai. Atribut malar dikira.
- `G`: pilih objek, atau satu rujukan blok, dan blok yang bentuknya sekurang-kurangnya 85% serupa disenaraikan, yang terbaik dahulu. Saiz, putaran dan cermin tidak dikira. Ukuran itu membandingkan jarak antara titik yang tersebar di sepanjang garis luar, jadi ia mencari yang menyerupai; gunakan {{cmd:BCONVERT}} untuk mencari salinan tepat.

Rujukan yang dijumpai dalam ruang terbuka dipilih, sedia untuk arahan seterusnya.

### BREPLACE

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Ganti [Selected/All]`: `S` menggantikan rujukan blok yang anda pilih dengan blok yang anda namakan; `A` meminta blok dan gantiannya dan menukar setiap rujukan, seperti {{cmd:BLOCKREPLACE}} (kod yang sama). Rujukan mengekalkan tempat, skala, putaran, lapisan dan nilai atribut yang kedua-dua blok miliki; nilai yang tiada tempat dalam blok baharu digugurkan dan dinamakan. `?` menyenaraikan blok. Satu langkah buat asal.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Menyenaraikan blok, atributnya dan sifat objek sebagai jadual atau fail CSV.

- Berfungsi pada pilihan, atau bertanya `Pilih objek (Enter: semua dalam ruang ini)`.
- `List: [Blocks/Objects/All]` apabila pilihan mengandungi kedua-duanya. Blok tanpa nama, jadual dan bil bahan tidak pernah disenaraikan.
- Ia mencetak lajur untuk dipilih (nama, jenis, lapisan, X, Y, putaran, skala, panjang, luas, warna, jenis garisan, ruang, dan satu bagi setiap tag atribut), kemudian `Lajur, mengikut nama atau nombor dengan koma`. {{key:Enter}} mengambil yang berbintang: nama dan setiap atribut bagi blok; jenis, lapisan dan panjang bagi objek.
- `Letakkan baris yang sama bersama dengan kiraan? [Yes/No] <Yes>`, kemudian `Letakkan senarai dalam: [Table/Csv] <Table>`. Jadual ialah jadual biasa ({{cmd:TABLEDIT}} menyuntingnya) dan tidak langsung: jalankan semula arahan apabila lukisan berubah.
- Ia menolak lajur yang tiada dalam senarai. Jadual memegang 1,999 baris data; fail CSV memegang semuanya.

### COUNTTABLE

Mengira rujukan blok bagi pilihan (atau ruang terbuka) dan meletakkan kiraan dalam jadual (`Block`, `Count`) atau fail CSV. Untuk kiraan yang mengikut lukisan dengan sendirinya, lihat {{cmd:BOMTABLE}}.

## Helaian dan plot

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; atau butang {{ui:+}} di bawah lukisan. Helaian baharu dengan sempadan, blok tajuk dan satu viewport, pada ISO A3 (atau Tabloid untuk lukisan dalam inci atau kaki). Tiada soalan.

### MVIEW

Alias: `MV`. Pada helaian sahaja ({{cmd:VPORTS}} pada helaian melakukan perkara yang sama).

- `Tentukan bucu viewport [Polygonal/Object]`, `Tentukan bucu bertentangan`. Viewport menunjukkan keseluruhan model pada skala standard.
- `P` (Polygonal): klik bucu garis luar (`Undo`, `Close`), {{key:Enter}} apabila selesai. Ia menolak kurang daripada tiga bucu.
- `O` (Object): `Pilih objek tertutup untuk garis luar viewport`: polygaris tertutup, bulatan atau elips pada helaian. Viewport mengambil bentuknya (lengkung sebagai bahagian lurus pendek); objek kekal seperti sedia ada. Ia menolak objek yang tidak tertutup.

### VPCLIP

Memotong viewport yang sudah ada pada helaian. `Pilih viewport untuk dipotong` (atau pilih dahulu), kemudian `Pilih objek untuk dipotong kepada [Polygonal/Delete]`:

- Klik polygaris tertutup, bulatan atau elips, atau {{key:Enter}} (atau `P`) untuk klik bucu poligon.
- `D` (Delete, ditawarkan apabila viewport dipotong) menjadikannya segi empat tepat semula: kotak sekeliling garis luar yang pernah dimilikinya.
- Apa yang ditunjukkan viewport tidak bergerak di atas kertas, dan skalanya kekal. Model dilukis dan diplot hanya di dalam garis luar, dan sempadan mengikutnya. Satu langkah buat asal.
- Viewport yang dipotong mempunyai grip pada setiap bucu garis luarnya, selain pusat dan empat bucu kotaknya (menyeret bucu kotak meregangkan garis luar bersamanya). Sifat menunjukkan Outline: Rectangle, atau Clipped dengan bilangan bucu.
- Fail DWG dan DXF 2000 menyimpan garis luar untuk CadCraft. Program lain membuka viewport sebagai segi empat tepat di sekelilingnya; DXF R12 hanya menyimpan segi empat tepat.
- Pada tab model ia memberitahu bahawa viewport terdapat pada helaian.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} adalah sama dari helaian juga, dan {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} menjalankannya. Pada model: `Masukkan bilangan anak tetingkap [SIngle/2/3/4] <3>`; `2` meminta `[Horizontal/Vertical] <Vertical>` (Vertical = sebelah menyebelah), `3` meminta `[Left/Right] <Right>` (di mana anak tetingkap besar pergi). Setiap anak tetingkap mengekalkan pandangan dan ruangnya sendiri; klik menjadikan satu anak tetingkap aktif. Pada helaian ia ialah {{cmd:MVIEW}}. Lihat [Bahagikan skrin](topic:split-screen).

### VPVIEW

Tiada alias. Pada helaian sahaja.

- `Pilih viewport` (dilangkau jika satu dipilih), kemudian pada model: `Tentukan bucu pertama tetingkap untuk ditunjukkan`, `Tentukan bucu bertentangan`.

### UCS

Tiada alias. Sistem koordinat anda sendiri; bukan suntingan. `Tentukan asalan UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: satu titik ialah asalan baharu, kemudian `Tentukan titik pada paksi X (Enter mengekalkan sudut)`. `Z`: `Tentukan sudut putaran sekitar paksi Z <90>`. `3`: asalan, satu titik pada paksi X positif, satu titik pada sisi Y positif. `OB`: `Pilih objek untuk menjajarkan UCS`. `NA`: `[Restore/Save/Delete/?]` dan satu nama. Pandangan berputar supaya paksi X baharu mendatar. Lihat [Putar pandangan dan guna koordinat anda sendiri](topic:ucs-and-turned-view).

### PLAN

Tiada alias. `Masukkan pilihan [Current ucs/Ucs/World] <Current ucs>`: memutar pandangan anak tetingkap aktif supaya paksi X UCS (atau dunia) mendatar. Tiada apa dalam lukisan yang bergerak.

### TURNLEFT, TURNRIGHT, TURNWORLD

Tiada alias; atau {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Sama seperti `UCS Z -90`, `UCS Z 90` dan `UCS W`, dengan pandangan mengikut.

### VPLAYER

Tiada alias. Pada helaian, atau di dalam viewport. `Masukkan pilihan [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` meminta nama lapisan (koma, aksara wildcard `*` dan `?`), kemudian viewport `[All/Select/Current] <Current>`; Reset meletakkan setiap lapisan kembali kepada lalai "dibekukan dalam viewport baharu"; `V` menetapkan lalai itu (`[Frozen/Thawed]`), yang digunakan oleh {{cmd:MVIEW}}. `?` menyenaraikan lapisan yang dibekukan dalam viewport semasa. Lajur viewport panel Lapisan melakukan perkara yang sama untuk satu viewport. Lihat [Bekukan lapisan dalam satu viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; atau klik dua kali di dalam viewport. Pada helaian sahaja. Bekerja pada model melalui viewport: yang dipilih, satu-satunya pada helaian, atau `Klik di dalam viewport untuk bekerja di dalamnya`. Pan dan zum di dalamnya menukar pandangan viewport (yang dikunci paparannya mengekalkannya dan helaian bergerak sebaliknya); pandangan baharu ditulis sebagai satu langkah buat asal. Lihat [Bekerja pada model melalui viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; atau klik dua kali di luar viewport, atau klik tab di bawah lukisan. Kembali ke helaian.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; atau {{key:Mod+P}}. Membuka kotak dialog {{ui:Plot to PDF}}. Lihat [Plot ke PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; atau {{ui:Edit tables…}} dalam kotak dialog {{ui:Plot to PDF}}. Membuka {{ui:Plot style tables}}: apa yang dicetak bagi setiap warna (warna, kelabu, dakwat, ketebalan garisan), disimpan bersama lukisan. Lihat [Jadual gaya plot](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} mengalihkan objek antara helaian dan model melalui viewport, diskalakan dan diputar supaya kelihatan sama dari sisi yang satu lagi. Pada helaian, pilih objek dan ia pergi ke model (pilih viewport apabila helaian mempunyai lebih daripada satu). Semasa anda bekerja pada model melalui viewport ({{cmd:MSPACE}}), objek yang dipilih datang ke helaian. Ia memberitahu berapa kali ganda lebih besar atau lebih kecil ia menjadi. Viewport kekal pada helaiannya. Satu langkah buat asal.

### ISODRAFT

{{cmd:ISODRAFT}} menghidupkan atau mematikan lukisan isometrik `ON` atau `OFF`, atau terus ke satah `Left`, `Top` atau `Right`. Semasa ia dihidupkan: Ortho ({{key:F8}}) memastikan garisan mengikut dua paksi satah (kiri: 90° dan 150°; atas: 30° dan 150°; kanan: 30° dan 90°), penjejakan kutub ({{key:F10}}) mengikut paksi yang sama, snap ke grid ({{key:F9}}) menggunakan grid isometrik, dan grid ({{key:F7}}) dilukis dengan garisan pada 30°, 90° dan 150°. {{cmd:ELLIPSE}} mendapat `Isocircle`: beri pusat dan jejari (atau `Diameter`) dan ia melukis elips yang ditunjukkan oleh bulatan pada satah semasa. Lukisan kekal rata: ini ialah alat bantu untuk melukis pandangan bergambar, bukan model 3D. Tetapan ini untuk sesi ini dan tidak disimpan dalam fail.

### ISOPLANE

{{cmd:ISOPLANE}} memilih satah yang dikerjakan oleh lukisan isometrik: `Left`, `Top` atau `Right`. Enter pergi ke satah seterusnya. Semasa lukisan isometrik dihidupkan, {{key:F5}} melakukan perkara yang sama di tengah-tengah arahan; semasa ia dimatikan, {{key:F5}} dibiarkan kepada pelayar.

## Pertanyaan

### CAL

Mencetak nilai satu pengiraan, seperti yang dibaca di mana-mana panjang ditaip.

- `Ungkapan`: taip, contohnya `12'6"+3/4"` atau `(24'-0")/3`, dan tekan {{key:Enter}}. CadCraft mencetak `= 12'-6 3/4"   (150.75 unit lukisan)`. Lihat [Aritmetik dalam nilai yang ditaip](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; atau {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Tentukan titik pertama`, `Tentukan titik kedua`. Mencetak jarak, sudut, Delta X dan Delta Y.

### AREA

Alias: `AA`; atau {{ui:View}} › {{ui:More}} › {{ui:Area}}. Mencetak luas dan perimeter.

- `Tentukan bucu pertama [Object/Add area/Subtract area] <Object>`
  - Klik atau taip bucu; pada `Tentukan titik seterusnya (Enter menutup) [Buat asal (U)]` tekan {{key:Enter}} untuk menutup garis luar. `U` mengambil semula bucu terakhir.
  - {{key:Enter}} atau `O`, kemudian `Pilih objek`: bulatan (mencetak lilitannya), elips, polygaris (satu yang terbuka ditutup dengan garisan lurus untuk luas, dan panjangnya dicetak), atau hatch (lubang ditolak).
  - `A` (Add area) dan `S` (Subtract area) menyimpan jumlah berjalan: gesaan bermula dengan `(ADD mode)` atau `(SUBTRACT mode)`, setiap luas ditambah atau ditolak, dan `Total area = …` dicetak selepas setiap satu. Dalam mod ini `O` memilih objek sehingga {{key:Enter}}, dan {{key:Enter}} pada gesaan pertama menamatkan arahan.

### MEASUREGEOM

Alias: `MEA`. `Masukkan pilihan [Distance/Radius/Angle/ARea] <Distance>`; selepas setiap ukuran ia bertanya semula, dengan `eXit` sebagai lalai.

`Quick` mengukur di sekeliling penuding semasa anda menggerakkannya: jarak ke objek terdekat di kanan, atas, kiri dan bawah (sepanjang paksi UCS semasa), dilukis semasa anda bergerak, dan sudut di mana dua jiran itu lurus dan bertemu. Klik menulis empat jarak, lebar dan tinggi bersih dan sudut ke dalam sejarah; Enter kembali kepada pilihan. Ia membaca apa yang ada di skrin.

- `D`: dua titik, seperti {{cmd:DIST}}.
- `R`: `Pilih lengkok atau bulatan`; mencetak jejari dan diameter.
- `A`: satu lengkok (sudut terangkumnya), satu garisan dan kemudian garisan kedua (sudut antara keduanya, ke arah hujung jauh mereka), atau {{key:Enter}} dan tiga titik (bucu, kemudian dua hujung).
- `AR`: seperti {{cmd:AREA}}, satu luas.

### ID

Tiada alias. `Tentukan titik`; mencetak X dan Y-nya.

### LIST

Alias: `LI`, `LS`. `Pilih objek`; mencetak jenis, lapisan dan ukuran utama setiap objek.

### MASSPROP

{{cmd:MASSPROP}} memberikan sifat seksyen rantau dan objek tertutup yang anda pilih, diambil bersama: luas, perimeter, kotak sempadan, centroid, momen inersia sekitar paksi X dan Y melalui asalan, hasil darab inersia, jejari girasi, momen yang sama sekitar centroid, dan momen utama dengan arah paksinya. Lubang dalam rantau dikira sebagai lubang. Angka dalam unit lukisan dan tepat bagi garis luar yang dibuat daripada garisan dan lengkok; elips dan splin diukur sebagai segmen lurus pendek, dan ia memberitahu anda. Selepas laporan ia bertanya sama ada hendak menulisnya ke fail teks. Objek yang tidak tertutup dibiarkan, dan ia memberitahu berapa banyak.

## Paparan, fail dan lain-lain

### ZOOM

Alias: `Z`.

- `Tentukan bucu tetingkap, masukkan faktor skala (nX) [Extents/All/Window/Previous/Scale/Center]`. Klik dua bucu untuk tetingkap. `E`, `A` atau Enter: seluruh lukisan.
- `P` (Previous, atau {{ui:Previous}} pada bar alat) kembali kepada pandangan sebelum ini, sehingga 10 pandangan setiap tab; satu siri langkah roda atau satu pan dikira sebagai satu pandangan.
- Nombor seperti `2`, `2x` atau `0.5x` (atau `S` dan kemudian nombor) zum masuk atau keluar dengan faktor itu di sekeliling tengah skrin.
- `C` meminta `Tentukan titik pusat` dan `Masukkan ketinggian atau pembesaran (nX)`.

### PDFATTACH, PDFIMPORT dan arahan PDF

Alias: `PDFATT` bagi {{cmd:PDFATTACH}}, `PDFIM` bagi {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} meletakkan halaman PDF di bawah lukisan (fail, halaman, titik selitan, skala, putaran); {{cmd:PDFIMPORT}} menukar garisan, lengkung, isian dan teks halaman menjadi objek lukisan pada lapisan yang dinamakan sempena PDF, pada saiz sebenar, skala yang ditaip, atau diskalakan daripada dua titik dan jarak sebenar. {{cmd:PDFCLIP}} memotong underlay, {{cmd:PDFADJUST}} menetapkan pudar, kontras, monokrom atau mematikannya, {{cmd:PDFLAYERS}} menghidupkan atau mematikan lapisan PDF itu sendiri, dan {{cmd:PDF}} memberikan CadCraft fail yang digunakan oleh underlay lukisan semula. Lihat [Underlay PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autolengkap lukisan: apabila tiada arahan berjalan, hantu kelabu menunjukkan apa yang dikatakan corak lukisan anda sebagai seterusnya. {{cmd:AUTOCOMPLETE}} menghidupkannya `On` atau mematikannya `Off` (juga Tetapan › CadCraft) atau `Show` apa yang akan dicadangkannya sekarang. **Tab** melukis hantu sebagai satu langkah buat asal, **Esc** menolaknya sehingga lukisan berubah. Ia mencari tiga perkara dalam objek terbaru: salinan seterusnya bagi sesuatu yang dilukis dua kali atau lebih pada langkah sama (tiang, lajur, tangga bahagian tegak dan injak), langkah seterusnya bagi tangga polygaris, dan sisi yang hilang bagi satu bilik atau rantai dinding. Di tengah-tengah {{cmd:LINE}} atau {{cmd:PLINE}} hantu ialah **titik seterusnya**: langkah seterusnya bagi tangga (tegak, injak, tegak…), bucu keempat segi empat tepat, titik yang menutupnya, atau satu lagi langkah sama. Bawa kursor berhampiran dan tekan **Tab**, seolah-olah anda mengkliknya di situ; teruskan atau tekan Enter. Dikira di komputer ini mengikut peraturan, tanpa model.

### AUTOSHEET

Alias: `ASH`. Helaian yang mengatur dirinya sendiri. {{cmd:AUTOSHEET}} mengambil bahagian lukisan (pandangan bernama anda, atau bahagian berasingan bagi model, atau keseluruhan model), memilih saiz kertas (atau yang anda beri), memberi setiap bahagian skala standard (satu skala untuk semua, atau yang terbesar yang setiap satu boleh terima) dan meletakkan pandangan dalam baris pada helaian baharu dengan blok tajuk dan kapsyen (nama dan skala) di bawah setiap satu. Apa yang tidak muat pada satu helaian mendapat helaian sendiri. Satu langkah buat asal. Dikira di komputer ini mengikut peraturan, tanpa model.

### PHOTOSKETCH

Alias: `PSK`. Lakaran foto kepada lukisan. Pilih foto (JPEG, PNG atau TIFF) lakaran tangan di atas sehelai kertas. {{cmd:PHOTOSKETCH}} mencari empat bucu helaian, meluruskan perspektif, mengambil saiz kertas yang anda namakan (`Paper`, atau yang standard terdekat) dan `Scale` lakaran (1 : n), kemudian mengesan garisan pen menjadi garisan, lengkok dan bulatan, satu lapisan bagi setiap warna pen (hitam, merah, biru, hijau). Jika ia tidak dapat mencari tepi kertas, ia mengambil keseluruhan foto sebagai helaian dan memberitahu anda. Tulisan dibiarkan. Satu langkah buat asal. Dibuat di komputer ini dengan pemprosesan imej klasik, tiada model, tiada apa dihantar ke mana-mana. Lihat juga arahan lukisan imbasan.

### AUTODIM

Alias: `ADIM`. Dimensi automatik mengikut peraturan. {{cmd:AUTODIM}} mendimensikan objek yang dipilih (atau seluruh lukisan) daripada tepi aras dan tegak mereka: rantai dimensi sepanjang sisi yang anda pilih (`Sides`), satu dimensi keseluruhan di luarnya, lebar setiap bukaan (jurang antara garisan dinding segaris), diameter bagi setiap saiz lubang, dan dengan `Grid` jarak antara garisan grid. Dimensi yang sudah ada tidak dibuat semula. Satu langkah buat asal. Dikira di komputer ini mengikut peraturan, tanpa model.

### GRIDMOVE

Alias: `GM`. Menggerakkan garisan grid membawa set itu bersama. {{cmd:GRIDMOVE}} mengalihkan garisan grid (garisan pada lapisan yang namanya menyebut grid atau axis) dan apa yang bergantung padanya: dinding dengan hujung pada garisan itu meregang untuk mengikutinya, dinding sepanjangnya bergerak sepenuhnya, tiang (rujukan blok dan bulatan pada garisan), gelembungnya dan tagnya bergerak, dan dimensi yang titiknya berada pada garisan itu mengukur jarak baharu. Berikan dua titik (hanya bahagian merentas garisan dikira) atau `Distance`. Satu langkah buat asal mengembalikan semuanya. Dilakukan mengikut peraturan di komputer ini.

### DETAILS

Alias: `DET`. Perincian yang mencari anda. {{cmd:DETAILS}} menyimpan perincian firma anda sendiri: `Add` meletakkan blok lukisan ini dalam senarai, `List` dan `Remove` mengurusnya, dan `Find` menyusun mengikut kedudukan untuk apa yang dipilih (atau apa yang anda lukis terakhir) mengikut perkataan pada lapisannya, nama blok, corak hatch dan nota berbanding nama dan nota setiap perincian, supaya kepala tingkap mencari flashing ambang anda. Pilih nombor dan titik untuk meletakkannya. Dengan `Hint` dihidupkan (juga Tetapan › CadCraft), memilih sesuatu yang dipadankan oleh perincian meletakkan satu baris dalam bar status. Senarai disimpan dalam pelayar ini, pada komputer ini, dan senarai itulah yang dicari. `Share` memasukkannya ke dalam folder Dokumen anda juga (`.cadcraft/firm-details.json`, dengan lukisan setiap blok): `Pull` menambah apa yang dimiliki pasukan anda dan anda tiada, `Push` menambah apa yang anda miliki dan mereka tiada, `Both` melakukan kedua-duanya, dan tiada apa yang pernah dialih keluar daripada mana-mana pihak. Buka folder Dokumen dahulu ({{cmd:DOCUMENTS}}); apabila folder itu ialah folder Team Cloud Plan, seluruh pasukan berkongsi satu senarai. Item perincian dalam panel Pustaka mempunyai butang **Tambah ke perincian firma saya** yang meletakkannya dalam senarai yang sama. Dikira di komputer ini mengikut perkataan, tanpa model.

### SKETCHFIX

Alias: `SKF`. Lakaran pen menjadi geometri yang tepat. Tekan dan seret satu goresan bebas pada satu masa (pen, tetikus atau jari), kemudian Enter. Setiap goresan dibaca sebagai garisan, bulatan, lengkok, segi empat tepat atau polygaris: garisan hampir mendatar dan menegak dijadikan tepat mendatar dan menegak, goresan bulat tertutup menjadi bulatan, goresan tertutup dengan empat bucu bersudut tegak menjadi segi empat tepat, dan hujung goresan ditarik bersama dan ke hujung yang sudah ada dalam lukisan. Satu langkah buat asal. Dikira di komputer ini mengikut peraturan, tanpa model.

### SCANATTACH dan arahan lukisan imbasan

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} tiada. Mereka berfungsi pada gambar, satu langkah buat asal setiap satu. {{cmd:SCANATTACH}} memasukkan PNG, JPEG, TIFF (satu halaman atau semua) atau halaman PDF yang merupakan gambar. {{cmd:SCANSCALE}} menskalakan helaian daripada dua titik yang dipilih dan jarak sebenar. {{cmd:SCANALIGN}} mengalihkan dan memutarnya ke dua titik (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} menunjukkan sudut garisan panjang helaian dan memutar helaian sebaik sahaja anda `Accept` atau beri `Value`. {{cmd:SCANCLEAN}} menjadikannya hitam putih (`Threshold` Auto/Adaptive/Level, `Specks`) dan `Run`. {{cmd:SCANCROP}} mengekalkan satu tetingkap. {{cmd:SCANERASE}} memadam `Rectangle`, `Polygon` atau `Lasso`. {{cmd:SCANTRACE}} menyurih garisan dan lengkok ke lapisan baharu (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) dan melaporkan apa yang dijumpainya dan apa yang ditinggalkan sebagai raster. {{cmd:SCANINFO}} menyenaraikan fail asal dan langkah-langkahnya. {{cmd:RASTERSNAP}} menghidupkan atau mematikan snap ke garisan helaian imbasan. Lihat topik Lukisan imbasan dan surih.

### REGEN dan REGENALL

Alias: `RE` bagi {{cmd:REGEN}}, `REA` bagi {{cmd:REGENALL}}. Membina semula apa yang dilukis pada skrin daripada lukisan: {{cmd:REGEN}} tab yang anda lihat (pada helaian, model yang ditunjukkan oleh viewportnya juga), {{cmd:REGENALL}} setiap tab, setiap anak tetingkap skrin berpecah dan setiap lukisan yang dibuka. Gunakannya apabila gambar kelihatan lapuk selepas perubahan berskrip atau sangat besar, atau apabila pembantu mengedit lukisan; lukisan itu sendiri tidak disentuh, jadi tiada apa untuk dibuat asal.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Masukkan pilihan [?/Restore/Save/Window/Delete] <Restore>`, kemudian nama pandangan. `S` menyimpan pandangan di skrin, `W` tetingkap yang anda pilih, `R` menunjukkan pandangan yang disimpan, `D` memadam satu, `?` menyenaraikan pandangan tab ini. Menyimpan di bawah nama sedia ada menggantikannya; setiap perubahan ialah satu langkah buat asal. Pandangan tergolong pada tab tempat ia disimpan. Fail DWG dan DXF menyimpannya (jadual VIEW); pandangan helaian kembali pada helaian pertama, kerana fail tidak menyatakan yang mana.

### UNDO dan REDO

Alias: `U` bagi {{cmd:UNDO}}; {{cmd:REDO}} tiada. Juga {{key:Mod+Z}} dan {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Melompat ke panel {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Masukkan jenis garisan untuk objek baharu` — `ByLayer`, `ByBlock` atau nama (`?` menyenaraikannya: Continuous, milik lukisan, dan DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE dengan saiz `2` (separuh) dan `X2` (dua kali)). {{cmd:LWEIGHT}} (`LW`): ketebalan garisan bagi objek baharu dalam mm, atau `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): skala jenis garisan lukisan (boleh dibuat asal). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — sama seperti butang {{ui:LWT}} dalam bar status. Lihat [Ketebalan garisan dan jenis garisan](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Masukkan jenis objek untuk dinamakan semula [LAyer/Block]`, `Masukkan nama lama`, kemudian nama baharu; objek atau rujukan mengikut. {{cmd:LAYMRG}}: `Pilih objek pada lapisan untuk digabungkan atau [Name]` sehingga {{key:Enter}}, kemudian `Pilih objek pada lapisan sasaran atau [Name]` dan `Y`. {{cmd:LAYDEL}}: `Pilih objek pada lapisan untuk dipadam atau [Name]`, kemudian `Y`: lapisan dan setiap objek di atasnya pergi (bukan lapisan 0, DEFPOINTS atau lapisan semasa). Satu langkah buat asal setiap satu. Lihat [Susun lukisan dengan lapisan](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lapisan dengan memilih objek; juga dalam menu {{ui:Tools}} panel {{ui:Layers}}. {{cmd:LAYISO}}: `Pilih objek pada lapisan yang akan dipencilkan`, kemudian {{key:Enter}}: setiap lapisan lain dimatikan. {{cmd:LAYUNISO}} menghidupkannya semula. {{cmd:LAYOFF}} dan {{cmd:LAYFRZ}}: `Pilih objek pada lapisan yang akan dimatikan` (atau dibekukan), berulang kali; `U` mengambil semula yang terakhir, {{key:Enter}} menamatkan. {{cmd:LAYMCUR}}: `Pilih objek yang lapisannya akan menjadi semasa`. {{cmd:LAYON}} menghidupkan setiap lapisan, {{cmd:LAYTHW}} menyahbekukan setiap lapisan. Setiap arahan ialah satu langkah buat asal. Lihat [Susun lukisan dengan lapisan](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} memulakan lukisan kosong dan {{cmd:OPEN}} membuka DWG atau DXF, setiap satu dalam tab sendiri di atas lukisan (lukisan baharu yang tidak disentuh digunakan sebagai ganti tab baharu). Menutup tab dengan perubahan yang belum disimpan bertanya dahulu. Lihat [Bahagikan skrin](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, juga {{key:Mod+S}}) memuat turun salinan dalam format lukisan: DWG jika ia dibuka daripada DWG, DXF jika daripada DXF. Lukisan baharu menggunakan format yang terakhir dipilih dalam Simpan sebagai dalam pelayar ini, jika tidak DWG.

{{cmd:SAVEAS}} (juga {{key:Mod+Shift+S}}) membuka kotak dialog {{ui:Save a copy as}}: pilih {{ui:DWG}} (dan {{ui:Version}}nya), {{ui:DXF R12}} atau {{ui:DXF 2000}}, kemudian {{ui:Save}}. Pilihan itu kekal untuk lukisan ini dan untuk lukisan baharu dalam pelayar ini.

{{cmd:DXFOUT}} sentiasa memuat turun salinan DXF R12, tanpa menukar format yang digunakan {{cmd:SAVE}}.

Lihat [Fail: apa yang dibuka, apa yang disimpan](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Memulakan semula lawatan enam langkah lukisan pertama. Lihat [Bermula](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Kedudukan bar alat [Top/Bottom/Left/Right]`. Lihat [Tetapan](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Baris arahan [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: melekapkan atau menerapungkan baris arahan, menjadikannya satu baris, bertanya berapa baris sejarah untuk ditunjukkan (0 hingga 12), atau membuka sejarah. Lihat [Tetapan](topic:settings#command-line).

### TOPAREA

`Kawasan atas [Standard/Compact]`: bar di atas lukisan seperti sedia ada, atau padat. Lihat [Tetapan](topic:settings#top-area).

### POLARANG

`Masukkan langkah sudut kutub dalam darjah <90>`: langkah yang diselaraskan oleh penjejakan {{ui:Polar}} (lebih daripada 0, sehingga 180). Dikekalkan dalam pelayar ini.

### UNITS

Alias: `UN`. Cara panjang ditulis dan ditaip.

- `Masukkan format panjang [Scientific/Decimal/Engineering/Architectural/Fractional] <semasa>`
- Architectural dan Fractional: `Masukkan penyebut pecahan terkecil untuk dipaparkan (1, 2, 4, 8, 16, 32, 64, 128 atau 256)`. Yang lain: `Masukkan bilangan tempat perpuluhan (0 hingga 8)`.

Dimensi baharu mengikutnya. Satu langkah buat asal. Sama seperti {{ui:Length format}} dan {{ui:Precision}} dalam {{ui:Current settings}}; lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Melihat susun atur IC (fail aliran GDSII): spike makmal, untuk melihat dan mengukur sahaja.

- Pemilih fail mengambil fail `.gds`; dengan beberapa sel teratas, `Masukkan sel teratas untuk dilukis`.
- Setiap lapisan dan datatype menjadi lapisan lukisan (`GDS 1`, `GDS 2/5`), rujukan dan tatasusunan diletakkan rata, dalam unit pengguna fail (biasanya mikrometer). Satu langkah buat asal. Tiada apa disimulasikan atau diperiksa dan fail tidak ditulis semula.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Gambar rajah daripada teks.

- Kotak mengambil teks (atau satu baris dengan `;` antara penyata pada baris arahan): carta alir Mermaid, gambar rajah komponen PlantUML, D2 atau senarai dari-ke.
- `Tentukan bucu kiri atas gambar rajah`, kemudian `Tentukan tinggi teks`.

Blok dan penyambung ialah objek biasa pada lapisan `Diagram`, dipilih apabila ia tamat. Satu langkah buat asal. Lihat [Lukis gambar rajah daripada teks](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Objek OLE yang dibawa oleh DWG yang CadCraft tidak dapat letakkan sendiri.

- Menyenaraikan setiap satu: nombor, jenis, saiz, sama ada ia menyimpan gambar.
- `Masukkan pilihan [Place/eXit] <eXit>`: Place meminta nombor, bucu kiri bawah dan lebar, dan melukis bingkai dengan gambar. Satu langkah buat asal; objek yang disimpan tidak berubah. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Fon SHX anda sendiri.

- `Masukkan pilihan fon SHX [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} membaca setiap `.shx` dalam satu folder (CadCraft Studio; sekali lagi pada setiap permulaan), {{ui:Files}} mengambil fail yang dipilih (pelayar), {{ui:Reverse}} menyusun huruf satu fon dengan huruf terakhir dahulu. Gaya teks yang menamakan fon yang dimuatkan dilukis dengannya. Lihat [Lukis teks dalam fon SHX anda sendiri](topic:shx-fonts).

### LIMITS

Sebesar mana lukisan itu dimaksudkan.

- `Tentukan bucu kiri bawah atau [ON/OFF] <semasa>`: satu titik, `ON` atau `OFF`.
- `Tentukan bucu kanan atas <semasa>`.

Grid mengisi had itu, {{cmd:ZOOM}} All menunjukkannya, dan dengan had ON satu titik di luarnya ditolak (`**Outside limits`). Satu langkah buat asal; disimpan dalam DWG dan DXF. Lihat [Tetapkan had lukisan](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Cara sudut ditunjukkan dan ditaip.

- `Masukkan format sudut [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <semasa>`
- `Masukkan bilangan tempat perpuluhan (0 hingga 8)`, atau untuk dua yang lain `Masukkan ketepatan` (0 darjah, 2 minit, 4 saat, 5 hingga 8 tempat perpuluhan bagi saat).

Satu langkah buat asal; disimpan dalam DWG dan DXF. Sama seperti {{ui:Angle format}} dalam {{ui:Current settings}}. Lihat [Taip dan tunjukkan bearing dan sudut](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; atau {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Kotak dialog {{ui:Load applications}}: muat rutin `.lsp` dan fail kotak dialog `.dcl`, nyahmuatkannya, muat semula daripada sejarah, dan Startup Suite. Arahan `(defun c:NAME …)` rutin kemudian berfungsi seperti arahan lain. Lihat [Muat aplikasi](topic:load-applications) dan [Jalankan rutin LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (atau {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) membuka fail alias anda (baris `ALIAS, *COMMAND`); {{ui:Save}} menggunakannya. {{cmd:REINIT}} menggunakannya semula. Lihat [Sunting alias arahan](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; atau {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Membuka penyunting LISP, tetingkap yang kekal terbuka di sebelah lukisan.

- Teksnya: nombor baris, pasangan kurungan pada kursor ditandakan (merah apabila tiada), {{key:Enter}} menjarakkan baris baharu di bawah kurungan terbuka, {{key:Tab}} menaip dua ruang, {{key:Esc}} meninggalkan teks.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): membaca setiap borang, seperti {{cmd:APPLOAD}} melakukannya dengan fail, dan membuat arahan `c:`nya. Fail muncul dalam senarai {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): menilai borang yang dipilih, atau borang tempat kursor berada.
- {{ui:Stop}}: menamatkan rutin yang sedang berjalan.
- {{ui:Console}}: apa yang dicetak oleh rutin, dan setiap ralat dengan barisnya; klik ralat untuk pergi ke sana. Teks dijalankan satu borang peringkat atas pada satu masa, jadi barisnya ialah milik borang itu, atau di dalamnya baris yang memanggil fungsi yang dinamakan oleh ralat.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): fail `.lsp`. Teks juga disimpan dalam pelayar ini, jadi menutup tetingkap tidak kehilangannya.
- Di sebelah teks: fungsi yang ditakrifkan oleh rutin, yang dipanggilnya tetapi LISP ini belum ada, yang dipanggilnya tetapi tidak ditakrifkan di dalamnya mahupun terbina dalam, dan senarai penuh apa yang dibina dan apa yang tidak.

Teks dengan kurungan yang tidak pernah ditutup, atau rentetan yang tidak pernah tamat, tidak dijalankan: barisnya dinamakan. Tiada penyahpepijat langkah demi langkah, titik henti atau tetingkap tontonan. Lihat [Jalankan rutin LISP](topic:run-lisp).

### HELP

Alias: `?`. Mencetak setiap arahan, aliasnya dan penerangan satu baris dalam sejarah baris arahan. Ia tidak membuka bantuan ini: tekan {{key:F1}} atau klik {{ui:Help}} untuk itu.

## Gesaan pilih objek

Pada mana-mana gesaan `Pilih objek`: klik objek, lukis tetingkap (kiri ke kanan) dan silang (kanan ke kiri) dengan dua klik, atau tekan dan seret lasso ({{key:Space}} semasa menyeret: tetingkap, silang, pagar), {{key:Shift}}+klik untuk mengalih keluar, dan tekan {{key:Enter}} untuk selesai. Anda juga boleh menaip `ALL` (semua), `L` (objek terakhir), `P` (Previous: apa yang digunakan arahan terakhir), `F` (Fence: objek yang dilintasi oleh satu garisan titik; `U` mengambil semula satu titik), `W` (Window), `C` (Crossing), `R` (mod Remove: pilihan mengeluarkan objek; gesaan berbunyi `Remove objects`) dan `A` (Add semula). `?` menyenaraikannya. Ia tidak ditunjukkan dalam gesaan. {{key:Tab}} ke atas objek bertindih menyerlahkan yang seterusnya; klik untuk memilihnya. Lihat [Pilih objek](topic:select-objects).

### ACCESS

Alias: `AX`. Melukis tanpa penglihatan. {{cmd:ACCESS}} menghidupkan atau mematikan Access (`On`, `Off`) dan menukar bunyi snap (`Sound`) dan arahan suara (`Voice`); ia memberitahu keadaan dahulu. Dengan Access dihidupkan, setiap arahan dan hasil dituturkan melalui pembaca skrin anda dan kawasan lukisan mempunyai kursor papan kekunci. Topik bantuan "Lukis tanpa penglihatan" mempunyai kekunci-kekunci itu.

### DESCRIBE

Alias: `DESC`. Nyatakan apa yang ada dalam lukisan: berapa objek, jenis apa, sebesar mana, berapa lapisan, apa yang dipilih. Hanya membaca; tidak mengubah apa-apa.

### WHEREAMI

Alias: `WHERE`. Nyatakan di mana kursor berada, dalam unit lukisan.

### NEARBY

Nyatakan apa yang berada berhampiran kursor, yang terdekat dahulu, setiap satu dengan jaraknya dan sisi tempat ia berada.

### SAYSEL

Nyatakan apa yang dipilih, satu ayat bagi setiap objek (panjang garisan, hujung dan sudut; jejari dan pusat bulatan; teks seperti yang ditulis).

### VOICE

Hidupkan atau matikan arahan suara. Ia dikenali pada komputer ini; di mana pelayar tidak boleh berbuat demikian, suara kekal mati melainkan anda memilih perkhidmatan dalam talian pelayar dalam Tetapan.

### TOUCHCROSSHAIR

Alias: `TCX`. Garis silang berofset untuk melukis dengan jari, supaya hujung jari tidak menutupi titik yang anda pilih. Semasa ia dihidupkan, satu jari di atas lukisan tidak memilih: ia menggerakkan garis silang yang berada di atas jari dan di satu sisi. Snap objek dan penjejakan mengikut garis silang. Mengangkat jari tidak memilih apa-apa dan meninggalkan garis silang di tempatnya. Untuk memilih, tekan butang {{ui:Click}} di sudut lukisan, atau ketik di mana-mana pada lukisan dengan jari kedua. Tahan {{ui:Click}} semasa anda menggerakkan jari yang satu lagi untuk menyeret (tetingkap pilihan, lasso, grip). Jari yang ditekan dan dipegang diam, atau butang {{ui:Enter}}, ialah Enter. Dua jari menggelek dan zum seperti sebelum ini. Berhampiran tepi bawah dan tepi sisi jauh, garis silang mendekati jari, supaya setiap bahagian lukisan boleh dicapai. Pen dan tetikus sentiasa memilih secara terus.

{{cmd:TOUCHCROSSHAIR}} memberitahu keadaannya dan bertanya `ON`, `OFF`, `Auto` (hidup hanya di mana jari ialah satu-satunya penuding, jadi mati pada komputer dengan tetikus), `Distance` (berapa jauh garis silang berada dari jari, 24 hingga 240 piksel) atau `Side` (`Left`: ke atas dan ke kiri, untuk tangan kanan; `Right` untuk tangan kiri; butang berpindah ke sudut yang satu lagi). Pilihan yang sama terdapat dalam Tetapan › CadCraft, dan pada peranti skrin sentuh bar status mempunyai suis {{ui:Offset crosshair}}. Pilihan disimpan dalam pelayar ini.

### WHOHAS

Menyatakan siapa yang membuka lukisan. Dalam CadCraft Studio pada komputer, membuka DWG atau DXF menulis satu fail kunci kecil di sebelahnya (`Plan.dwg.cclock`: siapa, sejak bila, versi mana), menyegarkannya setiap minit semasa lukisan dibuka, dan membuangnya apabila lukisan ditutup. Membuka lukisan yang orang lain sedang buka memberitahu siapa dan sejak bila, dan menawarkan {{ui:Open read-only}} (Save kemudian meminta nama baharu), {{ui:Open anyway}} (orang lain diberitahu pada penyegaran seterusnya) atau {{ui:Cancel}}. Menyimpan ke atas fail yang orang lain sedang buka bertanya dahulu. Kunci yang tidak disegarkan selama lima minit dikatakan lapuk: salinan lain ditutup tanpa menyimpan atau komputer sedang tidur.

{{cmd:WHOHAS}} bertanya `Current` (lukisan yang dibuka), `File` (pilih satu), `FOlder` (pilih folder: setiap lukisan di dalamnya yang dibuka di mana-mana disenaraikan), `Path` (taip laluan penuh) atau `Name` (nama yang dilihat orang lain; nama akaun anda apabila anda log masuk). Studio hanya boleh mencapai folder yang anda pilih: bagi lukisan yang dibuka daripada folder yang tidak pernah dipilih, ia memberitahu sekali bahawa ia tidak boleh mencatatkan lukisan itu sebagai dibuka; `FOlder` memilih folder itu, dan kunci berfungsi di sana sejak itu. Kunci ialah nota untuk orang, bukan halangan: program lain masih boleh menulis fail itu. Dalam pelayar tiada folder untuk dilihat, dan arahan memberitahu begitu.

### OVERKILL

Memadam objek pendua dan mengemas garisan dan lengkok yang bertindih, untuk lukisan yang datang penuh dengan garisan berganda. `Pilih objek untuk dibersihkan`, {{key:Enter}}, kemudian {{key:Enter}} sekali lagi untuk membersihkan dengan tetapan yang ditunjukkan, atau tukar satu dahulu:

- `Tolerance`: sedekat mana dua koordinat mesti untuk dikira sama (0.000001 untuk bermula; 0 bermaksud tepat sama).
- `Ignore`: sifat yang mungkin berbeza antara dua objek yang sebaliknya sama. Taip nama untuk menukarnya: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, atau `None` / `All`. {{key:Enter}} apabila selesai.
- `Overlap`: hidup atau mati. Dihidupkan, garisan sepanjang satu garis lurus yang bertindih menjadi satu garisan (garisan yang terletak di dalam garisan lain hanya dipadam), dan lengkok pada satu bulatan yang bertindih menjadi satu lengkok; lengkok yang menutup satu pusingan penuh menjadi bulatan, dan lengkok yang terletak pada bulatan dipadam.
- `Ends`: hidup atau mati. Dihidupkan, garisan sepanjang satu garis lurus dan lengkok pada satu bulatan yang hanya bersentuhan hujung ke hujung menjadi satu bahagian.

Setiap jenis objek diperiksa untuk pendua: dua objek adalah pendua apabila geometrinya sama dalam toleransi dan lapisan, warna, jenis garisan, skala jenis garisan, ketebalan garisan, ketebalan, kelutsinaran dan tinggi mereka sepadan (tolak yang anda abaikan). Garisan dan polygaris terbuka juga sepadan apabila dilukis dari arah sebaliknya. Objek pertama dalam susunan lukisan kekal dan mengekalkan sifatnya sendiri. Arahan melaporkan berapa objek yang diperiksa dan dipadam: pendua, bahagian bertindih yang digabungkan, bahagian yang dicantumkan hujung ke hujung. Satu {{cmd:UNDO}} mengembalikan semuanya. Tetapan kekal sehingga anda menutup tetingkap lukisan.

Ia membiarkan: objek pada lapisan terkunci dan objek tersembunyi. Ia tidak menggabungkan garisan yang mempunyai ketinggian (Z) (pendua tepat bagi mereka tetap dipadam), dan ia tidak menyentuh segmen dalam polygaris (ia tidak dikurangkan), garisan yang terletak pada segmen polygaris, dan polygaris tertutup yang dilukis dari arah sebaliknya.

### DRAWORDER

Menukar objek mana yang dilukis di hadapan. `Pilih objek untuk disusun semula`, {{key:Enter}}, kemudian `Above objects`, `Under objects`, `Front` atau `Back` ({{key:Enter}} = `Back`). `Above objects` dan `Under objects` meminta objek rujukan: pilihan pergi tepat di hadapan yang paling depan daripadanya, atau tepat di belakang yang paling belakang. Objek yang dipilih mengekalkan susunannya sendiri antara mereka. Satu langkah buat asal. Susunan disimpan bersama lukisan dalam DWG dan DXF, di mana ia ialah susunan objek ditulis.

Pada skrin CadCraft melukis kawasan berisi (hatch pepejal, polygaris lebar, topeng) dahulu, kemudian garisan, kemudian teks, supaya teks sentiasa dibaca di atas isian; susunan lukisan ditunjukkan dalam kalangan objek berisi dan dalam kalangan gambar. Program lain yang membuka fail melukis setiap objek mengikut susunan yang disimpan.

### TEXTTOFRONT

Membawa teks, dimensi dan petunjuk ke hadapan segala-galanya lain dalam ruang terbuka: `Text`, `Dimensions`, `Leaders` atau `All` ({{key:Enter}} = `All`). Satu langkah buat asal. Ia memberitahu apabila tiada apa, atau apabila ia sudah di hadapan.

### HATCHTOBACK

Menghantar setiap hatch dalam ruang terbuka ke belakang segala-galanya, supaya isian tidak lagi menutupi garisan dan teks dalam fail yang disimpan. Tiada gesaan. Satu langkah buat asal.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Menunjukkan hanya objek yang dipilih: segala-galanya yang lain dalam ruang terbuka hilang daripada pandangan sehingga {{cmd:UNISOLATEOBJECTS}}. Tidak seperti {{cmd:LAYISO}}, ia berfungsi pada objek yang anda pilih, apa pun lapisannya, dan tidak menukar mana-mana lapisan. Objek tersembunyi tidak dilukis, tidak dipilih, tidak ditangkap snap, tidak di-zum kepadanya atau diplot, dan arahan yang mengambil `ALL` melangkaunya. Apa yang anda lukis semasa objek dipencilkan ditunjukkan seperti biasa.

Ini hanya untuk sesi: tiada apa mengenainya yang disimpan bersama lukisan, ia bukan langkah buat asal, dan membuka semula lukisan menunjukkan segalanya. Semasa objek tersembunyi, bar status menunjukkan butang dengan bilangannya; klik untuk menunjukkannya semula.

### HIDEOBJECTS

Menyembunyikan objek yang dipilih sehingga {{cmd:UNISOLATEOBJECTS}}. Peraturan yang sama seperti {{cmd:ISOLATEOBJECTS}}: untuk sesi sahaja, tidak disimpan, bukan langkah buat asal.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Menunjukkan semula setiap objek yang disembunyikan oleh {{cmd:ISOLATEOBJECTS}} atau {{cmd:HIDEOBJECTS}}, dan memberitahu berapa banyak yang kembali.

### LAYLOCKFADE

Menetapkan bagaimana objek pada lapisan terkunci kelihatan dan sama ada klik sampai kepadanya. Ia memberitahu keadaan semasa, kemudian menerima:

- nombor dari 0 hingga 90: jumlah pudar dalam peratus (50 untuk bermula). 0 mematikan pudar.
- `ON` atau `OFF`: pudar dihidupkan atau dimatikan, dengan jumlahnya dikekalkan.
- `Pick`, kemudian `Yes` atau `No`: bolehkah klik memilih objek pada lapisan terkunci semasa tiada arahan berjalan? `No` (lalai): ia tidak boleh dipilih langsung. `Yes`: klik atau tetingkap memilihnya supaya {{ui:Properties}} boleh menunjukkannya; ia masih tidak boleh diubah, dan `Select objects` sendiri arahan tidak pernah mengambilnya.

Snap objek mencari objek pada lapisan terkunci dalam kedua-dua keadaan. Plot tidak pernah dipudarkan. Kedua-dua tetapan itu milik anda, bukan milik lukisan, dan juga terdapat dalam {{ui:Settings}} di bawah {{ui:Locked layers}}.

### BURST

Meletupkan rujukan blok dan mengekalkan apa yang dikatakan atributnya. `Pilih rujukan blok untuk diletupkan`, {{key:Enter}}: setiap rujukan digantikan dengan objek blok, dan nilai setiap atribut yang kelihatan menjadi teks biasa pada lapisan atribut itu sendiri (atribut pada lapisan 0 jatuh pada lapisan rujukan, seperti objek blok yang lain pada lapisan 0). Atribut yang tidak kelihatan digugurkan. Blok di dalam blok kekal sebagai rujukan blok. Satu langkah buat asal; ia melaporkan rujukan yang diletupkan dan nilai atribut yang menjadi teks.

Ia menolak lukisan dipautkan mengikut nama (ikatnya dahulu, atau salin daripadanya dengan {{cmd:NCOPY}}), dan membiarkan objek lain yang dipilih. Bagi rujukan blok {{cmd:EXPLODE}} memberikan objek yang sama; {{cmd:BURST}} hanya mengambil rujukan blok dan mengira teks atribut.

### TXT2MTXT

Alias: `T2M`. Mencantumkan teks satu baris menjadi satu teks perenggan. `Pilih teks satu baris untuk dicantumkan`, {{key:Enter}}, kemudian `Paragraph` (baris bergabung dan dibalut pada lebar baris terlebar) atau `Lines` (setiap teks kekal sebagai baris sendiri); {{key:Enter}} mengambil yang digunakan terakhir. Baris disusun dari atas ke bawah, kemudian kiri ke kanan, sepanjang arah teks atas. Perenggan itu digantung dari bucu kiri atas teks atas dan mengambil ketinggian, putaran, gaya, lapisan dan warnanya. Satu langkah buat asal.

Teks yang sudah berbentuk perenggan, teks kosong dan objek lain dalam pilihan dibiarkan, dan arahan memberitahu berapa banyak.

### NCOPY

Menyalin objek keluar daripada rujukan blok atau lukisan dipautkan ke dalam lukisan, tanpa memecahkan apa-apa. `Pilih objek di dalam rujukan blok atau lukisan dipautkan`: objek paling dekat dengan pilihan itu disalin di tempat ia kelihatan, walau sedalam mana blok pun; pilih lebih banyak, kemudian {{key:Enter}}. Seterusnya `Titik asas untuk mengalihkan salinan`: {{key:Enter}} membiarkannya di tempatnya, atau beri titik asas dan titik kedua. Keseluruhan arahan ialah satu langkah buat asal.

Salinan mengambil lapisan tempat ia kelihatan: objek pada lapisan 0 di dalam blok jatuh pada lapisan rujukan tempat ia berada, dan warna ByBlock menjadi warna rujukan itu. Daripada lukisan dipautkan, lapisan `Plan|Walls` menjadi `Plan$0$Walls` (nama yang diberikan oleh ikatan pautan), dibuat dengan warna, jenis garisan dan ketebalan garisan lapisan yang dipautkan. Nilai atribut disalin sebagai teks. Rujukan blok pada lapisan terkunci tidak boleh dipilih.

### FLATTEN

Menetapkan ketinggian (Z) dan ketebalan objek yang dipilih kepada 0. `Pilih objek untuk diratakan`, {{key:Enter}}. Ia juga meratakan objek di dalam takrifan blok yang digunakan pilihan (dan blok di dalamnya), supaya setiap rujukan kepada blok itu berubah; lukisan dipautkan dibiarkan seperti sedia ada. Satu langkah buat asal; ia melaporkan berapa objek berubah, dan memberitahu apabila tiada yang mempunyai ketinggian atau ketebalan.

Apa yang CadCraft simpan tentang dimensi ketiga dalam lukisan 2D ialah: ketinggian pada bulatan, lengkok, elips, titik, teks, rujukan blok, hatch, petunjuk dan polygaris (ketinggian mereka), ketinggian pada setiap hujung garisan, dan ketebalan pada garisan, bulatan, lengkok, polygaris, titik dan teks, seperti yang ada dalam fail. {{cmd:FLATTEN}} mengosongkan tepat perkara-perkara itu. Ia tidak menyentuh model 3D pada tab 3D, muka atau pepejal 3D, dan objek yang dilukis pada satah condong sudah dibawa ke satah lukisan apabila fail dibuka.

### BREAKLINE

Melukis garisan dengan simbol putus, untuk pandangan yang dipotong pendek. Ia menyatakan saiz dan lanjutan semasa, kemudian `First point of the break line` (atau `Size` / `Extension` untuk menukarnya dahulu), `Second point`, dan `Where the break symbol sits`: klik sepanjang garisan, atau {{key:Enter}} untuk tengah. Hasilnya ialah satu polygaris pada lapisan semasa: garisan, melepasi setiap titik sebanyak lanjutan, dengan goresan berbentuk Z setinggi saiz dan separuh panjangnya.

`Size` dan `Extension` diingati sebagai tetapan anda (saiz bermula pada dua kali tinggi teks dimensi didarab skala dimensi; lanjutan pada separuh saiz). {{key:Enter}} mengulang arahan.

### AUDIT

Menyemak lukisan yang dibuka untuk kerosakan dan membaikinya. {{cmd:AUDIT}} memeriksa setiap objek dalam model, pada helaian dan di dalam blok, dan jadual lapisan, dan menyenaraikan apa yang dijumpainya mengikut jenis:

- nombor yang tidak terhingga atau terlalu besar;
- objek tanpa saiz: garisan tanpa panjang, bulatan tanpa jejari, polygaris dengan satu tempat, teks tanpa huruf atau tinggi, rujukan blok dengan skala sifar;
- objek pada lapisan yang tiada dalam lukisan; rujukan kepada blok yang tiada; nama gaya teks dan dimensi serta nama jenis garisan yang tiada dalam lukisan;
- blok yang mengandungi dirinya, secara langsung atau melalui blok lain;
- objek yang berkongsi id, kunci atau pengendali fail yang sama;
- dimensi tanpa titik yang diukurnya, dan hatch yang sempadannya bukan garis luar tertutup.

Kemudian ia bertanya `Fix them? [Yes/No]`. `No` tidak mengubah apa-apa. `Yes` membaiki semuanya dalam satu langkah buat asal: apa yang tidak dapat dilukis dialih keluar (nombor buruk, tiada saiz, blok yang hilang, dimensi rosak, hatch tanpa sempadan yang boleh digunakan, rujukan yang menutup bulatan blok); lapisan yang hilang dibuat; nama gaya dan jenis garisan yang tidak diketahui kembali kepada lalai; kunci yang dikongsi digantikan. Ia mencetak berapa objek dialih keluar dan berapa dibaiki. Penemuan yang sama muncul dalam panel Masalah, setiap satu dengan {{ui:Repair}} sendiri.

Ia tidak menolak apa-apa, tetapi hanya memeriksa apa yang CadCraft sendiri lukis: data yang disimpan untuk program lain (pepejal 3D, objek OLE) tidak dibuka.

### RECOVER

Membuka DXF atau DWG yang rosak. {{cmd:RECOVER}} meminta fail, membaca apa yang boleh dibaca dan bukannya menolak fail, menyenaraikan apa yang dilangkau atau diandaikan, kemudian menyemak dan membaiki lukisan seperti {{cmd:AUDIT}} dengan `Yes`.

- DXF: baris yang bukan sebahagian daripada pasangan kod dan nilai dilangkau sehingga pasangan itu sejajar semula; bahagian tanpa penamat ditutup; fail yang terpotong dibaca sehingga tempat terpotong; DXF binari yang terpotong dibaca sehingga nilai penuh terakhirnya. Apabila bahagian, blok atau objek masih tidak dapat dibaca, ia ditinggalkan dan dinamakan, dan pembacaan diteruskan melepasinya.
- DWG: objek yang gagal semakannya atau tidak dapat dinyahkod ditinggalkan, dan senarai objek yang hilang dibina semula dengan merentasi data objek.

Fail pada cakera tidak diubah. Lukisan yang dipulihkan dibuka belum disimpan: simpannya dengan nama baharu. Fail yang tiada apa-apa boleh dibaca daripadanya ditolak, dengan sebabnya.

### LEGACYTEXT

Menukar teks yang ditaip dengan fon Vietnam 8-bit lama kepada Unicode. Nama pendek `TEXTTOUNICODE` dan `VNTEXT`.

Lukisan Vietnam yang lebih lama menyimpan teksnya sebagai aksara Barat yang hanya fon menjadikannya Vietnam: teks TCVN3 dalam fon ABC (`.VnTime`, `.VnArial`, dan fon huruf besar yang namanya berakhir dengan `H`), dan teks VNI dalam fon VNI (`VNI-Times`). CadCraft memaparkan teks sedemikian seperti yang dibacanya sebaik sahaja lukisan dibuka, mengikut fon gaya teksnya, objeknya, atau satu run dalam teks perenggan; fail masih menyimpan aksara lama.

{{cmd:LEGACYTEXT}} memberitahu berapa banyak teks yang ditemuinya dalam setiap pengekodan dan bertanya `Convert … to Unicode?`. `Yes` menulis semula setiap satu (model, helaian, blok, nilai dan takrif atribut), dan memberikan gaya teks fon Unicode (Times New Roman, Arial atau Courier New mengikut jenis fon lama), dalam satu langkah buat asal. Pemformatan dalam teks perenggan dikekalkan.

Apabila tiada teks menggunakan fon yang diketahui (gaya yang kehilangan nama fonnya), ia bertanya `Read selected texts as [Tcvn3/Vni/None]`: pilih pengekodan dan pilih teks. Teks yang sudah Unicode dibiarkan. Penggantian teks dimensi dan teks multipetunjuk tidak ditukar.
