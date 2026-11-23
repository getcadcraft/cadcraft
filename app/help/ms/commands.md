---
title: Rujukan arahan
summary: Setiap arahan dalam aplikasi lukisan CadCraft, dengan nama pendeknya, soalan yang ditanya, pilihannya dan nilai lalainya.
keywords: arahan, alias, senarai arahan, luas, perimeter, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Taip nama arahan atau nama pendek dan tekan {{key:Enter}} atau {{key:Space}}. Huruf besar atau kecil tidak penting, dan `_`, `-`, `.` atau `'` di hadapan diabaikan. Taip `HELP` (atau `?`) untuk mencetak senarai ringkas setiap arahan dalam sejarah baris arahan; tekan {{key:F1}} untuk bantuan ini.

Cara membaca gesaan: pilihan berada dalam kurungan segi, dan anda memilih satu dengan menaip huruf besarnya (`D` untuk Diameter). Lalai berada dalam kurungan sudut; tekan {{key:Enter}} untuk menerimanya. Apabila titik diminta, anda boleh klik atau menaip mana-mana format dalam [Kemasukan koordinat dan jarak](topic:coordinate-entry). Apabila jarak diminta, anda boleh menaip nombor atau mengklik dua titik.

Menekan {{key:Enter}} apabila titik atau objek diperlukan, dan tiada lalai, menamatkan arahan. {{key:Esc}} membatalkannya. Apa sahaja yang dilakukan arahan ialah satu langkah buat asal.

## Lukis

### LINE

Nama pendek: `L`. Segmen lurus, setiap satu objek sendiri.

- `Specify first point` (Enter: mula dari titik terakhir yang anda beri)
- `Specify next point [Undo]`, diulang. Selepas dua segmen: `[Undo/Close]`.
- `U` membatalkan segmen terakhir, `C` menutup ke titik pertama dan menamatkan. Enter menamatkan.

### PLINE

Nama pendek: `PL`. Satu polygaris segmen garisan dan lengkok.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close apabila ada dua segmen)
- `A` bertukar kepada lengkok: `Specify endpoint of arc [Line/CLose/Undo]`. Setiap lengkok diteruskan secara bertangen dengan segmen sebelumnya. `L` kembali kepada garisan, `CL` menutup dengan lengkok.
- Enter menamatkan; polygaris kekal terbuka.

### CIRCLE

Nama pendek: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` meminta `Specify diameter of circle`.
- `2P`: dua hujung diameter. `3P`: tiga titik pada bulatan.
- `T` (juga arahan `TTR`, dan {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, kemudian yang kedua, kemudian jejari (Enter: yang terakhir). Bulatan menyentuh kedua-dua objek (garisan, lengkok, bulatan, segmen polygaris, juga di dalam blok); antara bulatan yang berbuat demikian, yang menyentuh paling dekat dengan pilihan anda. "Circle does not exist" apabila tiada yang sesuai.
- `TTT` (atau {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): tiga objek; bulatan yang menyentuh ketiga-tiganya, paling dekat dengan pilihan anda (tiga garisan memberi bulatan dalam atau luar, bergantung pada tempat anda memilih).

### ARC

Nama pendek: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: lengkok melalui tiga titik.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Lengkok berjalan lawan jam dari mula ke tamat.

### RECTANG

Nama pendek: `REC`, `RECTANGLE`. Polygaris tertutup.

- `Specify first corner point`, `Specify other corner point`. Taip `@width,height` untuk penjuru kedua.

### POLYGON

Nama pendek: `POL`. Poligon sekata sebagai polygaris tertutup.

- `Enter number of sides <4>` (3 hingga 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klik atau taip satu titik; jaraknya menetapkan saiz dan arahnya memutar poligon.

### ELLIPSE

Nama pendek: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, kemudian jarak ke paksi yang satu lagi.
- `I` (`Isocircle`, hanya ketika {{cmd:ISODRAFT}} hidup): pusat, kemudian jejari atau `Diameter`: elips yang ditunjukkan bulatan pada satah isometrik semasa.

### HATCH

Nama pendek: `H`, `BH`, `BHATCH`; atau {{ui:Hatch}} pada bar alat. Mencetak corak, skala dan sudut semasa dahulu.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, diulang (`Undo` apabila sudah ada kawasan): setiap klik menambah kawasan tertutup di sekelilingnya, dengan bentuk tertutup di dalamnya sebagai pulau. Enter membuat satu hatch daripada semuanya.
- `S`: `Select closed objects` (polygaris tertutup, bulatan, elips tertutup).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): isian ialah kecerunan dan bukannya corak. Lihat {{cmd:GRADIENT}} untuk soalannya.

Lihat [Hatch dan kawasan isian](topic:hatch).

### GRADIENT

Nama pendek: `GD`. Mengisi kawasan dengan kecerunan satu atau dua warna. Ia bertanya kecerunan dahulu, kemudian meneruskan seperti {{cmd:HATCH}} (`Pick internal point`, `S` untuk objek tertutup, {{key:Enter}} untuk selesai).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, diulang; ia mencetak kecerunan seperti sekarang setiap kali.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, atau salah satu daripadanya songsang (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Huruf pertama sudah memadai.
- `O`: satu warna, kemudian tonanya dari 0 hingga 1 (0 menggelapkannya menjadi hitam, 0.5 ialah warna itu sendiri, 1 mencerahkannya menjadi putih). `TW`: warna pertama dan kedua. Warna ialah nombor dari 1 hingga 255, tiga nombor seperti `255,128,0`, atau `#rrggbb`.
- `A`: sudut kecerunan itu berjalan. `C`: berpusat Yes atau No (No menggerakkan tengah kecerunan ke satu sisi).
- Ia menolak warna atau jenis yang tidak diketahui, dan tona di luar 0 hingga 1.

{{cmd:HATCHEDIT}} `G` dan Properties (Gradient) menukar kecerunan kemudian, atau menjadikan mana-mana hatch sebagai kecerunan. Kecerunan dilukis pada skrin dan dicetak. DWG 2004 dan lebih baharu menyimpannya sebagai hatch kecerunan sebenar; DXF 2000 dan DWG 2000 menyimpannya untuk CadCraft, dan program lain melihat isian pepejal dalam warna pertama.

### HATCHGENERATEBOUNDARY

Nama pendek: `HGB`. Membuat semula sempadan daripada hatch yang kehilangannya. `Select hatches` (atau pilih dahulu), kemudian `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Setiap gelung hatch menjadi polygaris tertutup pada lapisan hatch; polygaris baharu kekal dipilih. Tepi melengkung kembali sebagai kepingan lurus pendek yang disimpan hatch.
- Dengan Yes hatch mengikut sempadan barunya, seperti hatch yang dibuat dengan {{cmd:HATCH}}. Satu langkah buat asal.
- Ia memberitahu begitu apabila tiada hatch dipilih.

### POINT

Nama pendek: `PO`; atau {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Objek titik, satu setiap klik, sehingga Enter.

- `Specify a point`

### XLINE

Nama pendek: `XL`; atau {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Garisan binaan, tidak berkesudahan ke kedua-dua arah. Lihat [Garisan binaan dan sinar](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, kemudian `Specify through point` bagi setiap garisan, sehingga Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` meminta `Select a line object` dahulu.
- `B`: `Specify angle vertex point`, `Specify angle start point`, kemudian `Specify angle end point` bagi setiap garisan.
- `O`: `Specify offset distance [Through] <Through>`, kemudian `Select a line object` dan `Specify side to offset` (atau `Specify through point`) bagi setiap garisan.

### RAY

Tiada nama pendek; atau {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Specify start point`, kemudian `Specify through point` bagi setiap sinar, sehingga Enter.

### TEXT

Nama pendek: `DT`, `DTEXT`; atau {{ui:Text}} pada bar alat. Teks satu baris; setiap baris ialah objek sendiri.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, kemudian `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, diulang: setiap Enter memulakan baris seterusnya di bawah. Enter pada baris kosong menamatkan. {{key:Space}} menaip ruang di sini.

### DIVIDE

Nama pendek: `DIV`. {{cmd:DIVIDE}} meletakkan tanda pada garisan, lengkok, bulatan, polygaris, splin atau elips yang memotongnya kepada bahagian sama. Pilih objek, kemudian beri bilangan bahagian (2 hingga 32767). Objek terbuka mendapat satu tanda kurang daripada bahagian; yang tertutup mendapat tanda pada permulaannya juga. Objek itu sendiri tidak dipotong. Tanda ialah titik; `Block` meminta satu blok lukisan ini sebaliknya dan sama ada ia berpusing mengikut objek. Panjang sepanjang splin dan elips diukur sepanjang kord pendek. Ia menolak teks, hatch dan objek lain yang tiada panjang.

### MEASURE

Nama pendek: `ME`. {{cmd:MEASURE}} meletakkan tanda setiap panjang yang diberi sepanjang garisan, lengkok, bulatan, polygaris, splin atau elips, dihitung dari hujung yang paling dekat dengan tempat anda memilih (objek tertutup: dari permulaannya). Beri panjang dengan menaipnya atau dengan dua titik. Hujung jauh objek terbuka tidak mendapat tanda. `Block` meletakkan satu blok pada setiap tanda dan bukannya titik. Ia menolak panjang 0, panjang yang lebih besar daripada objek, dan panjang yang akan menghasilkan lebih 32767 tanda.

### BOUNDARY

Nama pendek: `BO`, `BPOLY`. {{cmd:BOUNDARY}} membuat polygaris tertutup mengelilingi kawasan yang mengandungi titik yang anda pilih, daripada mana-mana garisan, lengkok, bulatan, polygaris dan lengkung yang membataskannya pada skrin. Kepingan yang terletak pada lengkok atau bulatan kembali sebagai segmen lengkok; kepingan elips dan splin kembali sebagai segmen lurus pendek. Dengan `Islands` hidup (tetapan permulaan), setiap kawasan tertutup di dalamnya juga mendapat polygarisnya sendiri. Teruskan memilih titik; Enter menamatkan. Objek yang membataskan kawasan dibiarkan seperti sedia ada. Ia memberitahu begitu apabila tiada kawasan tertutup mengandungi titik itu.

### BLEND

{{cmd:BLEND}} melukis splin antara hujung dua lengkung terbuka. Pilih setiap lengkung berhampiran hujung untuk dicantumkan. `CONtinuity` memilih `Tangent` (splin keluar dan tiba sepanjang kedua-dua lengkung) atau `Smooth` (ia juga melengkung mengikut cara kedua-duanya melengkung di hujung); pilihan itu disimpan untuk sesi. Kedua-dua lengkung tidak diubah. Ia menolak objek tertutup dan dua hujung yang sudah bertemu.

### REGION

Nama pendek: `REG`. {{cmd:REGION}} menukar objek tertutup kepada rantau: kawasan rata yang boleh anda cantumkan, potong dan ukur. Pilih bulatan, polygaris tertutup, elips tertutup atau splin tertutup, atau garisan, lengkok dan polygaris terbuka yang menutup gelung hujung ke hujung; setiap gelung menjadi satu rantau dan menggantikan objek asalnya. Lengkok kekal sebagai lengkok; elips dan splin menjadi segmen lurus pendek. Apa yang tidak tertutup dan tidak menutup gelung dibiarkan seperti sedia ada, dan ia memberitahu berapa banyak. Dalam lukisan, rantau ialah satu atau lebih polygaris tertutup yang dipegang bersama sebagai kumpulan tanpa nama, jadi satu klik memilih keseluruhan rantau dan salinan ialah rantau tersendiri; program lain yang membuka fail melihat polygaris tertutup.

Dengan rantau dalam lukisan, {{cmd:UNION}}, {{cmd:SUBTRACT}} dan {{cmd:INTERSECT}} pada tab 2D berfungsi pada rantau: `UNION` mencantumkan rantau yang dipilih menjadi satu (rantau yang berjauhan menjadi satu rantau dengan beberapa garis luar), `SUBTRACT` meminta rantau untuk ditolak daripada dan kemudian yang hendak dikeluarkan (lubang kekal sebahagian daripada rantau), `INTERSECT` menyimpan kawasan yang dikongsi semuanya. Setiap satu menyatakan luas hasilnya dan ialah satu langkah buat asal. Ia menolak apabila tiada apa yang akan tinggal atau tiada apa yang dikongsi. Pada tab 3D, dan dalam lukisan tanpa rantau, arahan yang sama berfungsi pada pepejal seperti sebelumnya.

## Ubah

### MTEXT

Nama pendek: `MT`, `T`; atau {{ui:Paragraph}} pada bar alat. Teks perenggan yang dibungkus mengikut lebar, ditaip di tempat.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: lebar merentas dua penjuru ialah tempat teks dibungkus. `H` meminta `Specify height`, `J` meminta `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` meminta `Enter line spacing factor (0.25 to 4)`, `R` meminta `Specify rotation angle`, `W` meminta `Specify width (0 for no wrapping)` dan melangkau penjuru kedua.
- Kemudian kotak dibuka pada lukisan: taip, {{key:Enter}} untuk perenggan baharu, {{key:Mod+Enter}} atau klik di luar untuk selesai, {{key:Esc}} untuk membatalkan. Bar kotak itu menetapkan ketinggian, jarak baris, lebar dan penjajaran. Lihat [Tambah teks dan label](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Nama pendek: `ED`, `DDEDIT`; atau klik dua kali pada teks. `Select a text to edit`, diulang sehingga {{key:Enter}}: setiap satu dibuka dalam kotak yang sama. Dimulakan pada teks yang dipilih atau diklik dua kali, ia menyunting satu itu dan menamatkan.

### ERASE

Nama pendek: `E`, `DELETE`; atau tekan {{key:Delete}} dengan objek dipilih.

- `Select objects` (dilangkau apabila objek sudah dipilih)

### MOVE

Nama pendek: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, ditaip sebagai `dx,dy`.

### COPY

Nama pendek: `CO`, `CP`. Salinan seberapa kali anda memberi titik.

`Array` pada gesaan titik kedua membuat satu baris sekali gus: beri bilangan item (asal dikira sebagai satu), kemudian titik tempat salinan pertama pergi; yang lain mengikut dengan jarak yang sama. `Fit` menjadikan titik itu tempat salinan terakhir sebaliknya, dengan yang lain tersebar sama rata di antaranya.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, diulang sehingga Enter. `U` membatalkan salinan terakhir.

### ROTATE

Nama pendek: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: darjah, positif lawan jam; atau klik satu titik untuk memutar ke arahnya.

### SCALE

Nama pendek: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: taip faktor seperti `0.5` atau `2`. Titik yang diklik memberi jaraknya dari titik asas sebagai faktor.

### MIRROR

Nama pendek: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Nama pendek: `AL`; atau {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Dengan dua pasangan: `Scale objects based on alignment points? [Yes/No] <N>`

Lihat [Jajarkan objek](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (atau pilihan), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` meminta titik. Pilihan kekal.

### DISTRIBUTE

- `Select objects` (sekurang-kurangnya tiga), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Dua yang luar kekal; pilihan kekal.

### ALIGNPANEL

Nama pendek: `ALP`; atau {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Membuka panel yang menjalankan ALIGNTO dan DISTRIBUTE dengan klik.

### LASER

Nama pendek: `LASERCUT`; atau {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Membuka panel Laser di atas lukisan: apa yang dilakukan setiap lapisan (potong, skor, ukir, isi, gambar), pratonton, kod-G GRBL untuk disimpan, dan pembingkaian serta penghantaran melalui Web Serial. Lihat [Hantar lukisan ke laser](topic:laser-cutting).

### STRETCH

Nama pendek: `S`; atau {{ui:Stretch}}. `Select objects to stretch`: seret tetingkap bersilang (atau taip `C`) ke atas hujung untuk mengalih. `Specify base point [Displacement]`, `Specify second point`. Titik di dalam tetingkap bergerak: hujung garisan, bucu polygaris (segmen lengkok mengekalkan ketinggiannya), titik dimensi; bulatan, elips, teks, titik dan blok bergerak seluruhnya apabila pusat atau titik selitannya berada di dalam. Pilihan yang dibuat sebelum arahan mengekalkan tetingkap silang (dan lasso) yang membuatnya, supaya ia meregang dengan cara yang sama. Tanpa tetingkap, objek bergerak seluruhnya.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Nama pendek: `AR`; atau {{ui:Array}}. `Select objects`, kemudian `Enter array type [Rectangular/POlar] <Rectangular>` (ARRAY sahaja).

- Rectangular bermula pada 4 lajur × 3 baris, berjarak 1.5 kali saiz objek, ditunjukkan sebagai pratonton. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` meminta lajur dan baris, `S` jarak antara lajur dan antara baris (negatif pergi ke kiri atau ke bawah), `COL` dan `R` satu arah setiap satu.
- Polar meminta `Specify center point of array`, bermula dengan 6 item mengelilingi sepenuhnya, diputar. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` item, `F` sudut untuk diisi (+ lawan jam, − ikut jam), `ROT` Yes atau No.
- {{key:Enter}} (eXit) membuat salinan, sebagai objek biasa. Satu langkah buat asal.
- `AS` (ASsociative) bertukar antara salinan biasa dan tatasusunan yang kekal boleh disunting: satu objek yang anda ubah kemudian dengan {{cmd:ARRAYEDIT}}, melalui gripnya atau dalam Properties. Pilihan itu diingati ({{cmd:ARRAYASSOCIATIVITY}}); ia bermula pada salinan biasa.

### ARRAYPATH

Salinan sepanjang lengkung. `Select objects`, kemudian `Select path curve`: garisan, lengkok, bulatan, elips, polygaris atau splin (bukan salah satu objek yang sedang disusun). Laluan bermula di hujungnya yang lebih dekat dengan objek, dan item pertama ialah objek di tempat asalnya.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, dengan pratonton. `M`: `Divide` menyebarkan item sama rata sepanjang keseluruhan laluan, `Measure` meletakkan satu setiap jarak tertentu sepanjangnya. `I`: bilangan item (dengan Measure, 0 bermaksud sebanyak yang muat; nombor melebihi hujung laluan dipegang kepada apa yang muat). `SP`: jarak antara item sepanjang laluan (bertukar kepada Measure). `AL`: Yes memusingkan setiap item untuk mengikut laluan, No mengekalkannya tegak.
- `AS` seperti dalam {{cmd:ARRAY}}. Dengan ia hidup, tatasusunan menyimpan salinannya sendiri bentuk laluan: menyunting lengkung laluan selepas itu tidak mengalihkan item.
- Ia menolak laluan yang bukan lengkung, dan satu item.

### ARRAYEDIT

Menukar tatasusunan yang dibuat dengan ASsociative. `Select array` (atau pilih dahulu). Ia mencetak apa tatasusunan itu sekarang, kemudian bertanya sehingga {{key:Enter}}:

- Rectangular: `COL` lajur dan jaraknya, `R` baris dan jaraknya, `A` sudut lajur berjalan.
- Polar: `I` item, `F` sudut isian, `ROT` putar item Yes atau No.
- Path: `M` Divide atau Measure, `I` item, `SP` jarak, `AL` jajar dengan laluan.
- `S` (Source) membuka objek yang diulang oleh tatasusunan, secara sendiri, seperti penyunting blok. Lukis dan sunting di sana; {{cmd:ARRAYCLOSE}} menyimpan atau membuang, dan setiap item mengikut.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, kemudian klik item yang hendak diganti, {{key:Enter}}. Item itu menunjukkan gantian sebaliknya; objek gantian meninggalkan lukisan dan tinggal dalam tatasusunan. `RES` (RESet) menunjukkan semula objek sumber dalam setiap item.
- Setiap perubahan ialah satu langkah buat asal. Ia menolak salinan biasa, rujukan blok biasa dan tatasusunan pada lapisan terkunci.

Nombor yang sama terdapat dalam Properties di bawah Array, dan tatasusunan mempunyai grip: titik asasnya mengalihkannya, grip pada item kedua menetapkan jarak, grip melepasi item terakhir menetapkan bilangan (polar: item kedua menetapkan berapa banyak item, item terakhir sudut isian). {{cmd:EXPLODE}} menukar tatasusunan kembali kepada salinan biasa.

### ARRAYCLOSE

Menamatkan {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Ia memberitahu begitu apabila tiada objek sumber tatasusunan dibuka. {{cmd:BCLOSE}} melakukan perkara yang sama.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Menetapkan apa yang {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR dan {{cmd:ARRAYPATH}} bermula dengannya; pilihan `AS` mereka menukar tetapan yang sama. Diingati dalam pelayar ini.

### OFFSET

Nama pendek: `O`. Garisan, lengkok, bulatan dan polygaris.

Apabila polygaris bergerak keluar dan segmen lurusnya terpisah di sudut, {{cmd:OFFSETGAPTYPE}} memutuskan bagaimana jurang itu ditutup.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, kemudian `Specify point on side to offset` (atau, dengan Through, `Specify through point`), diulang sehingga Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: bagaimana {{cmd:OFFSET}} menutup jurang di sudut luar polygaris. `0` memanjangkan segmen sehingga bertemu (tetapan permulaan), `1` menyambungkannya dengan lengkok mengelilingi sudut lama, `2` dengan potongan lurus. Sudut dalam dan segmen lengkok tidak terjejas. Disimpan untuk sesi ini.

### EXTRIM

{{cmd:EXTRIM}} memangkas segala-galanya di satu sisi tepi. Pilih tepi pemotong (garisan, lengkok, bulatan, polygaris, elips, splin atau garisan binaan), kemudian pilih satu titik di sisi untuk dibersihkan: setiap garisan, lengkok, bulatan, polygaris dan garisan binaan yang merentasi tepi kehilangan bahagiannya di sisi itu, dengan ia bermula di tepi. Semasa anda memilih sisi, kepingan yang akan hilang mengikut penuding. Untuk tepi tertutup, sisinya ialah dalam dan luar. Objek yang hanya menyentuh tepi, dan teks, hatch, splin dan elips yang merentasinya, dibiarkan seperti sedia ada. Satu langkah buat asal.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: bagaimana {{cmd:TRIM}} dan {{cmd:EXTEND}} bermula. `1` Quick: setiap objek ialah tepi pemotong atau sempadan. `0` Standard: mereka meminta tepi dahulu. Juga `(setvar "TRIMEXTENDMODE" 0)` dalam LISP.

### TRIM

Nama pendek: `TR`. Mencetak `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` dahulu. Dalam mod Quick setiap objek yang kelihatan ialah tepi pemotong, dan objek yang tiada apa bersilang dengannya dipadam; dalam mod Standard ia meminta `Select cutting edges (Enter = every object)` dahulu dan hanya memotong pada tepi tersebut.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, diulang: klik kepingan yang hendak dibuang (ia kelihatan kelabu dan putus-putus semasa penuding berada di atasnya), seret laluan melalui beberapa kepingan (semua pergi dalam satu langkah), atau klik dua tempat kosong untuk pagar di antaranya. {{key:Shift}} memanjangkan sebaliknya. `T` memilih tepi pemotong (mod Standard), `F` meminta titik pagar, `C` dua penjuru tetingkap (kepingan yang separuh di dalam pergi), `O` meminta `Enter a trim mode option [Quick/Standard]`, `E` meminta `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` memadam objek yang anda pilih, `U` membatalkan pilihan atau seretan terakhir. Enter menamatkan. Lihat [Pangkas dan panjangkan](topic:trim-and-extend).

- Klik pada hatch memotong hatch: tepi pemotong memisahkan kawasan berhatch, dan kepingan yang anda klik dibuang (tiada garis luar yang dilukis dibiarkan di tempat asalnya). Hatch mengekalkan coraknya atau kecerunannya; hatch yang dipautkan kepada sempadannya tidak lagi dipautkan selepas itu, kerana ia tidak lagi mengisinya. Ia memberitahu begitu apabila tiada tepi pemotong memisahkan hatch di situ, apabila klik berada di luar hatch, dan apabila tiada apa yang akan tinggal (gunakan {{cmd:ERASE}}). Laluan atau pagar yang diseret tidak memotong hatch.

### EXTEND

Nama pendek: `EX`. Sama seperti TRIM tetapi terbalik: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Satu klik memanjangkan hujung yang paling dekat dengannya ke sempadan seterusnya; laluan atau pagar yang diseret memanjangkan setiap objek yang dilaluinya; {{key:Shift}} memangkas. `B` memilih tepi sempadan (mod Standard). Mode dan Edge dikongsi dengan TRIM.

### LINKVIEWS

Nama pendek: `SYNCVIEWS`; atau {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, atau ikon pautan pada tab lukisan. `Link the panes' views [ON/OFF]` (Enter menukar keadaan yang lain): semasa hidup, pan atau zum dalam anak tetingkap aktif menggerakkan setiap anak tetingkap yang menunjukkan jenis ruang yang sama. Lihat [Bahagikan skrin](topic:split-screen).

### OPENIN3D

Tiada nama pendek; atau {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} tempat aplikasi pemodelan 3D menerima lukisan yang diserahkan. Membukanya di sana dalam tab baharu, sebagai DWG (tiada apa yang dimuat naik). Jika pelayar menyekat tab itu, ia memberitahu begitu.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: apa yang dilukis apabila anda menekan dan menyeret di tempat kosong. Sama seperti Settings › CadCraft › Dragging to select. Lihat [Pilihan lasso](topic:lasso-selection).

### FILLET

Nama pendek: `F`. Garisan, lengkok, bulatan dan polygaris. Mencetak `Current settings: Mode = TRIM, Radius = 0` dahulu.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` meminta `Specify fillet radius <last>`. `T` meminta `Enter Trim mode option [Trim/No trim]`: dengan No trim objek kekal seperti sedia ada dan hanya lengkok ditambah.
  - `M` mengekalkan arahan untuk lebih banyak sudut sehingga {{key:Enter}}; `U` membatalkan sudut terakhir tanpa meninggalkan arahan.
  - `P` meminta `Select 2D polyline [Radius]` dan membundarkan setiap sudut tempat dua segmen lurus bertemu. Fillet yang sudah ada digantikan dengan jejari baharu; jejari 0 mengeluarkannya. Sudut yang sisinya terlalu pendek untuk jejari dibiarkan dan dikira.
- `Select second object or shift-select to apply corner [Radius]`. Tahan {{key:Shift}} semasa anda klik untuk sudut tajam, apa pun jejarinya.

Klik setiap objek pada bahagian yang anda mahu simpan. Dua garisan yang tidak bertemu dilanjutkan. Dua garisan selari mendapat separuh bulatan merentasi jurang, di hujung garisan pertama yang paling dekat dengan klik anda. Bulatan tidak pernah dipotong. Dua segmen satu polygaris bersebelahan mendapat lengkok di dalam polygaris; polygaris dan objek lain berfungsi apabila potongan jatuh pada segmen pertama atau terakhir polygaris.

### CHAMFER

Nama pendek: `CHA`. Garisan dan segmen lurus polygaris. Mencetak jarak semasa (atau panjang dan sudut) dahulu.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` meminta `Specify first chamfer distance <last>` dan `Specify second chamfer distance <the first>`: yang pertama dipotong dari garisan pertama yang anda pilih, yang kedua dari yang lain.
  - `A` meminta `Specify chamfer length on the first line` dan `Specify chamfer angle from the first line`.
  - `E` (mEthod) memilih yang mana antara dua itu digunakan oleh chamfer seterusnya. `T`, `M`, `U` dan `P` berfungsi seperti dalam {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik membuat sudut tajam.

Jarak yang lebih panjang daripada garisan ditolak (`Distance is too large.`).

### BREAK dan BREAKATPOINT

Nama pendek: `BR`. `Select object` (tempat anda klik ialah titik pertama), `Specify second break point [First point]`; `F` meminta `Specify first break point` dan `Specify second break point`. Bahagian di antaranya hilang; pada bulatan, lawan jam dari titik pertama. BREAKATPOINT meminta `Specify break point` dan membahagikan objek kepada dua di situ (bukan bulatan).

### LENGTHEN

Nama pendek: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: satu pilihan mencetak `Current length` (dan sudut tertutup lengkok) dan bertanya semula. `DE` meminta `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` menyeret. Kemudian `Select an object to change [Undo]`, diulang: hujung yang paling dekat dengan klik bergerak. Garisan, lengkok dan polygaris terbuka.

### JOIN

Nama pendek: `J`. `Select objects to join`. Garisan, lengkok dan polygaris terbuka yang bertemu hujung ke hujung menjadi polygaris (tertutup apabila rantai itu menutup); garisan pada satu garisan menjadi satu garisan; lengkok pada satu bulatan menjadi satu lengkok atau bulatan. Sejarah memberitahu berapa objek yang bercantum dan berapa yang tidak.

### MATCHPROP

Nama pendek: `MA`, `PAINTER`. `Select source object`, kemudian `Select destination objects [Settings]` dan {{key:Enter}}. Menyalin lapisan dan warna, dan antara objek jenis yang sama ketinggian dan lebar teks, saiz dimensi, atau corak hatch. `S` meminta `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, diulang sehingga {{key:Enter}}; pilihan itu diingati untuk sesi.

### EXPLODE

Nama pendek: `X`. Polygaris menjadi garisan dan lengkok, rujukan blok menjadi objeknya, dimensi menjadi garisan, anak panah dan teks. Tatasusunan yang kekal boleh disunting ({{cmd:ARRAYEDIT}}) menjadi salinan biasa bagi objeknya.

- `Select objects`

### GROUP

Nama pendek: `G`. {{cmd:GROUP}} memberi objek yang dipilih satu nama yang mereka kongsi. Pilih objek, kemudian taip nama (tiada ruang; `?` menyenaraikan kumpulan; Enter membuat kumpulan tanpa nama) dan, untuk kumpulan bernama, huraian pilihan. Selepas itu klik pada salah satunya, atau tetingkap yang mengambil salah satunya, memilih kesemuanya, jadi mereka bergerak, disalin dan dipadam bersama; setiap objek tetap objek sendiri. Objek boleh berada dalam beberapa kumpulan. Salinan keseluruhan kumpulan ialah kumpulan tanpa nama baharu; salinan seorang ahli sahaja menyertai kumpulan. Kumpulan tergolong dalam ruang tempat ia dibuat (model atau helaian). Ia disimpan apabila anda menyimpan sebagai DWG atau DXF dan membukanya semula dalam CadCraft; fail DXF 2000 juga membawanya sebagai objek kumpulan untuk program lain, dan kumpulan yang dibuat dalam program lain dibaca apabila DXF atau DWG dibuka.

### UNGROUP

Nama pendek: tiada. {{cmd:UNGROUP}} memisahkan kumpulan: pilih objek kumpulan (setiap kumpulan yang mereka berada dileraikan) atau taip `Name` dan nama kumpulan. Objek kekal dalam lukisan. Satu langkah buat asal mengembalikan kumpulan.

### GROUPEDIT

{{cmd:GROUPEDIT}} menukar satu kumpulan. Pilih satu objeknya, atau `Name` dan namanya; kumpulan yang sudah dipilih diambil seperti adanya. Kemudian: `Add` objek (dipilih satu demi satu, bukan kumpulan demi kumpulan), `Remove` objek, `REName` kumpulan, tukar `Description`-nya, atau tetapkan `Selectable` (sama ada klik pada satu objek memilih keseluruhan kumpulan). `eXit` atau Enter menamatkan. Kumpulan tanpa objek lagi akan hilang.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: dengan `1` (tetapan permulaan) klik atau tetingkap pada objek berkumpulan memilih seluruh kumpulannya; dengan `0` objek tunggal, supaya anda boleh menyunting satu ahli. Disimpan untuk sesi ini.

## Papan keratan

Papan keratan CadCraft sendiri: ia berfungsi dalam satu lukisan, antara lukisan dan antara tab CadCraft dalam pelayar ini. Lihat [Salin, tampal dan pendua](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, atau {{ui:Copy}} dalam kumpulan {{ui:Edit}}. Menyalin objek ke papan keratan, dengan blok dan lapisan yang digunakannya. Objek kekal dipilih.

- `Select objects to copy` (dilangkau apabila objek sudah dipilih)

### CUTCLIP

{{key:Mod+X}}, atau {{ui:Cut}} dalam menu {{ui:More}}. Menyalin objek ke papan keratan, kemudian memadamkannya (satu langkah buat asal).

- `Select objects to cut` (dilangkau apabila objek sudah dipilih)

### COPYBASE

Menyalin objek ke papan keratan dengan titik asas yang anda pilih; menampal meletakkan titik itu.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, atau {{ui:Paste}} dalam kumpulan {{ui:Edit}}. Salinan mengikut kursor, digantung dari penjuru kiri bawah lingkungannya (atau pusatnya, atau titik `COPYBASE`; lihat [Tetapan CadCraft](topic:settings)).

- `Specify insertion point`

Objek yang ditampal dipilih. Blok yang sudah ada dalam lukisan di bawah nama yang sama mengekalkan takrifan lukisan ini.

Apabila kawasan yang disalin dalam MarkupCraft lebih baharu daripada apa yang CadCraft salin (dan kurang daripada 6 jam), {{key:Mod+V}} dan `PASTECLIP` menampal kawasan itu sebaliknya: lihat `PASTEAREA`.

### PASTEAREA

Nama pendek: `PAREA`. {{ui:Paste a copied area}} dalam menu {{ui:More}}. Menampal kawasan yang disalin dengan {{ui:Copy area}} dalam MarkupCraft sebagai gambar pada saiz sebenarnya. Lihat [Gambar dalam lukisan](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (hanya apabila helaian tidak mempunyai skala lukisan): satu nombor, {{key:Enter}} untuk saiz kertas, atau `P`, kemudian `First point on the pasted area`, `Second point on the pasted area` dan jarak sebenarnya.

### PASTEORIG

{{key:Mod+Shift+V}}, atau {{ui:Paste in place}} dalam menu {{ui:More}}. Menampal pada koordinat objek itu disalin. Tidak bertanya apa-apa.

### DUPLICATE

Nama pendek: `DUP`. {{key:Mod+D}}, atau {{ui:Duplicate and move}} dalam menu {{ui:More}}. Salinan objek bergerak dengan penuding dari tempat ia berada; {{key:Esc}} tidak meninggalkan apa-apa. Tidak menggunakan papan keratan.

- `Select objects to duplicate` (dilangkau apabila objek sudah dipilih)
- `Specify where the copy goes (Esc leaves nothing)`: klik, taip satu titik, `@dx,dy` (dari tempat penuding berada), atau jarak ke arah kursor.

### SELECT

Meminta `Select objects` (dengan setiap pilihan di bawah) dan membiarkan apa yang anda pilih dipilih, untuk arahan seterusnya atau untuk `P` kemudian.

### QSELECT

Nama pendek: `QS`. Dalam pelayar, dialog {{ui:Quick select}} (lihat [Pilih objek](topic:select-objects#select-by-a-rule-quick-select)). Tanpanya, baris arahan meminta `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` dan `Enter value`. Yang sepadan menjadi pilihan.

### SELECTSIMILAR

Nama pendek: `SIM`. `Select objects [SEttings]` (atau pilihan semasa): memilih setiap objek jenis yang sama dengan lapisan dan warna yang sama (dan nama blok, corak hatch). `SE` meminta `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, diulang sehingga {{key:Enter}}.

### FIND

Tiada nama pendek; atau {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Dalam pelayar, dialog {{ui:Find and replace}} (lihat [Tambah teks dan label](topic:text#find-and-replace-words)). Tanpanya: `Enter text to find`, kemudian `Enter replacement text (Enter: select what is found)`. Mencari dalam teks, nilai atribut dan teks dimensi, pada tab terbuka atau dalam pilihan.

### SELECTALL dan DESELECT

`SELECTALL` (nama pendek `AI_SELALL`, {{key:Mod+A}}) memilih setiap objek yang boleh anda sunting pada tab terbuka. `DESELECT` (nama pendek `AI_DESELECT`, `SELECTNONE`; atau {{key:Esc}}) mengosongkan pilihan.

## Dimensi

### DIMLINEAR

Nama pendek: `DLI`, `DIMLIN`. Jarak mengufuk atau menegak.

- `Specify first extension line origin [Select object]` (Enter atau `S`: `Select object to dimension`, kemudian klik garisan, lengkok, bulatan atau segmen polygaris)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` meminta teks (`<>` ialah nilai yang diukur), `H` dan `V` menetapkan arah, `R` meminta `Specify angle of dimension line <0>`.

### DIMALIGNED

Nama pendek: `DAL`, `DIMALI`. Jarak sebenar antara dua titik.

- Asal seperti dalam {{cmd:DIMLINEAR}}, kemudian `Specify dimension line location [Text]`.

### DIMANGULAR

Nama pendek: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Lengkok: sudutnya. Bulatan: `Specify second angle endpoint`. Garisan: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klik di dalam sudut untuk diukur.

### DIMRADIUS dan DIMDIAMETER

Nama pendek: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, kemudian `Specify dimension line location [Text]`.

### DIMCONTINUE

Nama pendek: `DCO`, `DIMCONT`. Meneruskan dari dimensi linear atau sejajar terakhir yang dibuat (atau bertanya `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, diulang sehingga Enter.

### DIMBASELINE

Nama pendek: `DBA`, `DIMBASE`. Sama seperti {{cmd:DIMCONTINUE}}, tetapi setiap dimensi bermula dari asal pertama dan ditindih lebih jauh ke luar.

### DIMORDINATE

Nama pendek: `DOR`, `DIMORD`. `Specify feature location`, kemudian `Specify leader endpoint [Xdatum/Ydatum/Text]`. Menulis betapa jauh ciri itu dari asal UCS sepanjang X atau sepanjang Y, pada petunjuk: petunjuk yang berjalan kebanyakannya ke atas atau ke bawah dibaca X, yang berjalan ke sisi dibaca Y; `Xdatum` dan `Ydatum` menetapkan yang mana. Tetapkan asal dahulu dengan {{cmd:UCS}} (tanpanya ia ialah 0,0 lukisan). Grip menggerakkan ciri, asal dan hujung petunjuk, dan nilainya mengikut. Disimpan sebagai dimensi ordinat sebenar dalam DWG dan DXF. Menolak hujung petunjuk pada ciri itu sendiri.

### DIMARC

Nama pendek: `DAR`. `Select arc or polyline arc segment`, kemudian `Specify arc length dimension location [Text]`. Mengukur sepanjang lengkok (bukan kord) dan menulis simbol lengkok sebelum nilainya. Menolak bulatan penuh, garisan atau segmen lurus polygaris. DWG menyimpannya sebagai dimensi panjang lengkok; DXF menyimpannya sebagai dimensi sudut dengan panjang sebagai teksnya, dan CadCraft membukanya semula sebagai dimensi panjang lengkok.

### DIMJOGGED

Nama pendek: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Dimensi jejari untuk lengkung yang pusatnya jauh atau di luar helaian: garisan dimensi bermula di titik yang anda beri dan bukannya pusat, dengan patahan di dalamnya, dan tetap menulis jejari sebenar. DWG menyimpannya sebagai dimensi jejari berpatah; DXF menyimpannya sebagai dimensi jejari, dan CadCraft membukanya semula berpatah.

### DIMJOGLINE

Nama pendek: `DJL`. `Select dimension to add jog [Remove]`, kemudian `Specify jog location (or press Enter)`. Meletakkan simbol patah pada garisan dimensi linear atau sejajar, untuk menunjukkan jarak tidak dilukis mengikut skala; nilainya tidak berubah. `Remove` mengeluarkannya. Menolak jenis dimensi lain.

### QDIM

Tiada nama pendek. `Select geometry to dimension`, kemudian `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Mendimensikan beberapa objek sekali gus, dari hujung garisan dan segmen polygaris, pusat bulatan dan lengkok, titik dan rujukan blok. Kedudukan di atas atau di bawah objek mengukur merentas, satu di sebelahnya mengukur ke atas. `Continuous` merantai titik, `Baseline` mengukur semuanya dari yang pertama, `Staggered` menyusun pasangan dari tengah ke luar, `Ordinate` memberi setiap titik jaraknya dari datum (`datumPoint` memilih datum baharu), `Radius` dan `Diameter` mendimensikan setiap bulatan dan lengkok yang dipilih. Mod itu diingati. Semua yang dibuatnya ialah satu langkah buat asal. Ia memberitahu begitu apabila terdapat kurang daripada dua titik, atau tiada lengkok atau bulatan untuk Radius dan Diameter.

### DIMBREAK

Nama pendek: `DBREAK`. `Select dimensions to add or remove breaks`, kemudian `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` meninggalkan jurang dalam garisan dimensi dan lanjutan di mana sahaja objek lain bersilang dengannya, dan mengira semula jurang itu apabila objek tersebut atau dimensi bergerak. `Manual` (satu dimensi) meminta dua titik dan meninggalkan jurang antaranya. `Remove` mengeluarkan setiap jurang. Jurang ialah 1.5 kali ketinggian teks dimensi.

### DIMSPACE

Tiada nama pendek. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Menggerakkan garisan dimensi bagi dimensi linear dan sejajar yang selari (atau dimensi sudut pada bucu yang sama) supaya ia berjarak sama, dikira dari dimensi asas, setiap satu di sisi tempat ia berada. `0` menjajarkannya dengan asas; `Auto` ialah dua kali ketinggian teks dimensi asas. Dimensi yang tidak selari dengan asas dibiarkan.

### DIMINSPECT

Tiada nama pendek. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Melukis bingkai di sekeliling nilai dengan label sebelumnya dan kadar pemeriksaan selepasnya. `remove` mengeluarkan bingkai. Teks toleransi kekal bersama nilai.

### DIMOVERRIDE

Nama pendek: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, sekali lagi sehingga Enter, kemudian `Select dimensions`. Menukar tetapan itu pada dimensi yang dipilih sahaja; gaya dimensi tidak berubah. Menerima pembolehubah yang berupa nombor atau suis (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` mengembalikan dimensi yang dipilih kepada gayanya. Menolak nama yang bukan pembolehubah sebegitu dan nilai yang tidak boleh diterimanya.

### DIMREASSOCIATE

Nama pendek: `DRE`, `DIMREASSOC`. `Select dimensions`, kemudian untuk setiap satu titik lanjutannya (`Specify first extension line origin on an object`: snap ke hujung atau tengah garisan, bucu polygaris, pusat; Enter mengekalkan titik itu bebas), atau untuk jejari, diameter, jejari berpatah atau dimensi panjang lengkok `Select arc or circle`. Dimensi kemudian diikat kepada objek tersebut: apabila ia bergerak atau berubah saiz, ia mengikut dalam langkah buat asal yang sama dan mengukur semula. Mengalihkan titik terikat dengan tangan, atau memadam objek, menamatkan ikatan itu. Ikatan disimpan dalam DWG dan DXF 2000 sebagai data CadCraft sendiri; program lain melihat dimensi biasa.

### DIMDISASSOCIATE

Nama pendek: `DDA`, `DIMDISASSOC`. `Select dimensions`. Membebaskannya daripada objek yang diikat kepadanya; tiada apa yang bergerak.

### CENTERMARK

Nama pendek: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, sekali lagi sehingga Enter. Melukis palang di pusat dan empat garis pusat hingga sedikit melepasi lengkung (jenis garisan CENTER), sebagai garisan biasa pada lapisan semasa; saiznya dari saiz anak panah dan skala keseluruhan tetapan dimensi semasa, diputar dengan UCS. Ia tidak mengikut bulatan jika bulatan bergerak.

### CENTERLINE

Nama pendek: `CL`. `Select first line`, `Select second line`. Melukis garisan di tengah antara dua garisan (sepanjang pembahagi dua jika ia bertemu), sedikit lebih panjang daripada keduanya, dalam jenis garisan CENTER. Garisan biasa: ia tidak mengikut dua garisan itu.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Tiada nama pendek. Setiap satu meminta `Enter new value for … <current>` dan menetapkan saiz itu untuk dimensi **baharu**: skala keseluruhan, ketinggian teks, saiz anak panah, tempat perpuluhan (sehingga 8), jurang sekeliling teks, lanjutan melepasi garis dimensi, ofset dari asal. Lihat [Tetapkan saiz dimensi](topic:dimension-settings).

### DIMLUNIT

Tetapan dimensi: format panjang bagi dimensi baharu sahaja (1 saintifik, 2 perpuluhan, 3 kejuruteraan, 4 seni bina, 5 pecahan).

### DIMSTYLE dan -DIMSTYLE

Nama pendek: `DST`, `DDIM`, `D`. Pengurus gaya dimensi: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` pada baris arahan: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Lihat [Tetapkan saiz dimensi](topic:dimension-settings#named-dimension-styles).

### DIMEDIT dan DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, kemudian dimensi (atau yang sudah dipilih). New meminta teks (`<>` = ukuran); Rotate untuk sudut (0 meletakkan teks kembali); Oblique untuk sudut lanjutan garisan dari paksi X (Enter = tiada; dimensi linear dan sejajar sahaja). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Lihat [Tetapkan saiz dimensi](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Nama pendek: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, atau dengan dimensi dipilih `Units in the text of the selected dimensions`. Menulis panjang yang diukur dalam unit itu dengan unit selepasnya (DIMLFAC dan akhiran DIMPOST); `D` kembali kepada unit lukisan. Lihat [Dimensi dalam mm, cm, m atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Nama pendek: `RC`. Mencetak `Arc length: … Type: …`, kemudian `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular meminta `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand mengikut penuding sehingga klik atau {{key:Enter}}; `O` meminta `Select object` dan `Reverse direction? [Yes/No] <N>` dan menukar objek kepada awan. `A` meminta `Specify the length of each arc`. `R`, `P` dan `F` memilih jenis untuk awan seterusnya. Hasilnya ialah polygaris tertutup lengkok.

### MLEADER

Nama pendek: `MLD`; atau {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, kemudian teks dalam kotak di tempat (atau, tanpanya, `Enter text (an empty line ends)`). `Block` meminta nama blok dahulu dan multipetunjuk menunjukkan blok itu dan bukannya teks. Lebih banyak garisan petunjuk: {{cmd:MLEADEREDIT}}. Disimpan sebagai multipetunjuk sebenar dalam DWG; DXF menyimpan garisan, anak panah dan teks yang dilukisnya.

### MLEADEREDIT

Nama pendek: `MLE`. `Select a multileader`, kemudian `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: setiap titik menambah garisan petunjuk dari anak panah baharu ke pendaratan yang sama, sehingga Enter. `Remove leaders` kemudian mengeluarkan garisan petunjuk yang anda klik (multipetunjuk kekal dengan sekurang-kurangnya satu). `Block content` meminta nama blok dan menunjukkan blok itu dan bukannya teks (atributnya diminta); `Text content` mengembalikan teks. Setiap garisan petunjuk mempunyai gripnya sendiri. DWG menyimpan setiap garisan petunjuk dan blok dalam satu multipetunjuk.

### MLEADERALIGN

Nama pendek: `MLA`. `Select multileaders`, kemudian `Select multileader to align to [Distribute/Spacing/Use current spacing]` dan `Specify direction`. Mengalihkan pendaratan multipetunjuk lain (dan teks atau blok mereka) ke garisan melalui pendaratan yang dipilih ke arah itu; anak panah kekal menunjuk ke tempat asal. `Spacing` juga memberi mereka jarak sama; `Distribute` meminta dua titik dan menyebarkannya sama rata di antaranya. Memerlukan sekurang-kurangnya dua multipetunjuk.

### MLEADERCOLLECT

Nama pendek: `MLC`. `Select multileaders`, kemudian `Specify collected multileader location [Vertical/Horizontal]` (Enter mengekalkan tempat yang pertama). Menjadikan beberapa multipetunjuk satu: kandungan blok masuk ke dalam blok baharu yang memegang setiap blok bersebelahan atau satu di bawah satu; kandungan teks menjadi satu nota dengan satu baris bagi setiap satu. Multipetunjuk pertama mengekalkan garisan petunjuknya; yang lain dibuang. Menolak campuran kandungan teks dan blok.

### TABLE

Nama pendek: `TB`; atau {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Membuat jadual: satu objek yang anda alih, salin, putar, skalakan dan plot seperti objek lain, dengan selnya disimpan sebagai data.

- `Number of data rows or [Paste/File/Style] <3>`, kemudian `Number of columns <3>`, `Text height` dan `Top left corner of the table`. Jadual mendapat baris tajuk (satu sel bercantum) dan baris pengepala di atas baris data.
- `P`: jadual daripada sel hamparan pada papan keratan (teks dengan tab antara sel). Menekan {{key:Ctrl+V}} dengan sel sebegitu pada papan keratan melakukan perkara yang sama, melainkan salinan CadCraft sendiri lebih baharu (atau CadCraft tidak boleh memberitahu: maka ia menampal salinannya sendiri dan memberitahu begitu). `F`: jadual daripada fail `.csv` atau fail dipisahkan tab. Baris pertama menjadi baris pengepala; lebar lajur muat teks.
- `S`: pilih gaya jadual untuk jadual ini (lihat {{cmd:TABLESTYLE}}).
- Ia menolak bilangan baris atau lajur yang bukan nombor bulat, dan lebih banyak sel daripada yang boleh dipegang jadual (2,000 baris, 200 lajur, 40,000 sel).
- {{cmd:EXPLODE}} menukar jadual kepada garisan dan teks. Disimpan sebagai DWG, jadual ialah objek jadual sebenar yang boleh disunting program lain; disimpan sebagai DXF ia ialah blok yang melukisnya, dan CadCraft membukanya semula sebagai jadual.

### TABLEDIT

Nama pendek: `TABLEEDIT`, `TABEDIT`; atau klik dua kali pada sel. Menyunting jadual.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klik sel, atau dengan jadual dipilih taip namanya (`B3`: lajur B, baris 3; baris tajuk ialah baris 1). Dalam pelayar, kotak dibuka di atas sel: {{key:Enter}} mengekalkan teks, {{key:Tab}} pergi ke sel seterusnya, {{key:Alt+Enter}} memulakan baris baharu, {{key:Esc}} meninggalkan sel seperti sedia ada.
- Teks yang bermula dengan `=` ialah formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, dengan `+ - * / ^`, kurungan dan fungsi seperti `sqrt` dan `round`. Sel menunjukkan nilai; formula yang menamakan selnya sendiri, sel di luar jadual atau sel tanpa nombor menunjukkan `####` dan baris arahan memberitahu sebabnya.
- `R` / `C`: `Insert` atau `Delete` baris atau lajur pada sel yang dipilih (berapa banyak, dan atas atau bawah, kiri atau kanan). Formula mengikut sel yang dinamakannya.
- `S`: lebar lajur dan ketinggian baris. Baris tidak pernah lebih rendah daripada teksnya perlukan. Jadual yang dipilih juga mempunyai grip pada tepi setiap lajur dan setiap baris.
- `M`: gabungkan dari satu sel yang dipilih ke yang lain; `U`: nyahgabung. `A`: penjajaran (`TL` atas kiri … `MC` tengah tengah … `BR` bawah kanan). `H`: ketinggian teks sel ini sendiri (0 = gaya). `K`: jadikan baris sebagai baris tajuk, pengepala atau data. `CL`: kosongkan sel.
- Ia menolak jadual pada lapisan terkunci, memadam setiap baris atau lajur, dan gabungan yang akan memotong sel bercantum yang lain kepada dua.

### TABLESTYLE

Nama pendek: `TS`. Menyenaraikan gaya jadual dengan bilangan jadual yang menggunakan setiap satu, kemudian `Table style: [New/Set/Edit/Delete/Apply]`.

- Satu gaya memegang ketinggian teks dan penjajaran baris tajuk, pengepala dan data, margin sel, dan sempadan mana yang dilukis (luar, antara baris, antara lajur).
- `N` membuat gaya daripada yang semasa dan menjadikannya semasa; `S` menetapkan gaya semasa (jadual baharu mengambilnya); `E` menyunting satu: jadual yang menggunakannya dilukis semula; `A` memberi jadual yang dipilih gaya semasa; `D` memadam satu (bukan Standard, bukan yang semasa; jadual yang menggunakannya mengekalkan rupanya).
- Gaya disimpan bersama lukisan (DWG dan DXF).

### TABLEEXPORT

Menyimpan apa yang ditunjukkan jadual sebagai fail CSV (formula sebagai nilainya). `Select a table`, atau pilih satu dahulu. Sel teks yang bermula dengan `=`, `+`, `-` atau `@` mendapat `'` di hadapan supaya hamparan tidak menjalankannya.

### TABLEPASTE

Nama pendek: `PASTETABLE`. Membuat jadual daripada sel hamparan pada papan keratan, kemudian bertanya penjuru kiri atas jadual. Sama seperti {{cmd:TABLE}} › `Paste`.

### DATALINK

Nama pendek: `DL`. `Data link: [New/List/Remove] <New>`. `N` meminta fail CSV, meletakkan jadual daripadanya dan mengingati nama fail; `L` menyenaraikan pautan dengan fail, saiz, bila ia dibaca dan berapa jadual yang menggunakannya; `R` mengeluarkan pautan (jadualnya kekal sebagai jadual biasa).

### DATALINKUPDATE

Nama pendek: `DLU`. Membaca semula fail pautan data dan mengisi semula jadual yang dipautkan kepadanya (baris dan lajur ditambah atau dibuang untuk sepadan). Pelayar tidak boleh membuka fail sendiri, jadi ia meminta anda memilih fail semula. Dengan beberapa pautan ia bertanya yang mana.

### FIELD

Meletakkan medan dalam lukisan: teks yang mengira sendiri. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: sekarang, atau tarikh yang disimpan, dicipta atau diplot, dan format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: nama fail, dengan atau tanpa sambungannya. `S`: nombor helaian, tajuknya, atau berapa banyak helaian. `P`: sifat lukisan mengikut nama (lihat {{cmd:DWGPROPS}}). `O`: pilih objek, kemudian apa yang hendak dibaca (luas, panjang, perimeter, jejari, diameter, lapisan, nama, x, y, teks, putaran, warna) dan tempat perpuluhan. `E`: formula. `C`: teks dengan kod ditaip seperti adanya, seperti `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Kemudian `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: teks yang dipilih mendapat medan ditambah selepas apa yang dipegangnya; sel jadual sama; rujukan blok meminta atribut mana; {{key:Enter}} meminta ketinggian dan titik untuk teks baharu.
- Pada skrin medan mempunyai latar belakang kelabu muda; plot dan PDF tidak pernah memilikinya. Menaip di atas teks medan dengan tangan menamatkan medan itu. Medan yang tidak boleh dikira menunjukkan `####`.
- Medan objek mencari objeknya melalui kunci yang disimpan CadCraft pada objek (Settings › CadCraft › Merge-friendly files); dengan kunci dimatikan ia menolak.

### UPDATEFIELD

Nama pendek: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` menetapkan bila medan dikemas kini sendiri: taip huruf `O` open, `S` save, `P` plot, `R` regen (kesemuanya empat untuk permulaan), atau `NONE`.

### DWGPROPS

Nama pendek: `DRAWINGPROPS`. Menyenaraikan sifat lukisan, kemudian `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Enam yang pertama ialah yang ditunjukkan panel {{ui:Drawing details}}; `U` menambah nama dan nilai anda sendiri, `R` mengeluarkan satu. Medan membacanya (`%<prop:title>%`, `%<prop:Client>%`) dan mengikut serta-merta. Ia menolak nama tersuai yang merupakan salah satu nama terbina atau mengandungi `%`, `<`, `>`, tanda petikan atau garis sengkang terbalik.

## Parametrik

Lihat [Kekang lukisan](topic:constraints) dan [Guna parameter dan persamaan](topic:parameters). Kekangan berfungsi pada tab {{ui:Model}}.

### GEOMCONSTRAINT dan arahan GC

Nama pendek `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, kemudian gesaan arahan itu.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (yang kedua bergerak).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT dan arahan DC

Nama pendek `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (nombor, ungkapan, atau `name=expression`).
- {{cmd:DCALIGNED}}: sama seperti di atas, dengan `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` meminta toleransi jarak dan sudut.
- {{cmd:DELCONSTRAINT}} (nama pendek `DELCON`): `Select objects`; kekangan mereka hilang.
- {{cmd:CONSTRAINTBAR}} (nama pendek `CBAR`): `Select objects [Showall/Hideall]`, kemudian `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS dan -PARAMETERS

{{cmd:PARAMETERS}} (nama pendek `PAR`, `PARAM`) membuka panel {{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Nama pendek `SWMACRO`. Memuat turun makro (.swb) yang membina semula model sebagai satu lakaran berkekangan dalam SolidWorks. Lihat [Pindahkan lakaran ke dan dari pemodel bahagian lain](topic:solidworks-sketches).

## Blok

### ANNOSCALE

Nama pendek: `CANNOSCALE`. Menyatakan skala anotasi lukisan dan berapa banyak objek beranotasi yang dipegangnya, kemudian bertanya `New annotation scale`: taip `1:50`, `1:100`, `2:1`, nombor tanpa apa-apa (`50` ialah 1:50) atau nama salah satu skala lukisan. Setiap teks dan dimensi beranotasi diubah saiz supaya dicetak pada saiz yang sama pada skala baharu, dalam satu langkah buat asal; objek yang bukan beranotasi dibiarkan, begitu juga objek yang menyimpan senarai skala tanpa yang baharu ({{cmd:OBJECTSCALE}}). Lihat [Unit, kertas dan skala](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Nama pendek: `OBJSCALE`. `Select annotative objects`, kemudian `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Teks dan dimensi beranotasi menyimpan senarai skala anotasi. `Add` dan `Delete` meminta skala (`1:50`, `2:1`, nombor tanpa apa-apa, atau nama salah satu skala lukisan); `Current scale` menambah skala anotasi lukisan; `List` mencetak skala setiap objek. Viewport yang skalanya berada dalam senarai objek menunjukkan objek itu pada saiz yang mencetak ketinggian kertasnya pada skala itu, pada skrin dan dalam plot. Skala terakhir tidak boleh dipadam. Objek yang bukan beranotasi ditinggalkan: hidupkan Annotative dalam Properties dahulu. Senarai disimpan dalam DWG dan DXF sebagai data CadCraft sendiri. Lihat [Unit, kertas dan skala](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Nama pendek: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Hidup (apabila lukisan bermula): objek beranotasi juga ditunjukkan dalam viewport, atau dalam model, yang skalanya tiada dalam senarainya, pada saiz yang dimilikinya. Mati: ia tidak ditunjukkan di sana, dan tidak boleh dipilih dalam model. Suis itu ialah satu langkah buat asal; ia tidak disimpan dalam fail.

### SCALELISTEDIT

Nama pendek: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` sehingga {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit dan Delete meminta nama skala. Skala lukisan sendiri menyertai senarai skala viewport dan plot, dan disimpan bersama lukisan. Lihat [Unit, kertas dan skala](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT dan PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: titik yang dilalui lengkung; `Close`, `Undo`, kemudian `Start tangent` dan `End tangent` (satu titik, atau {{key:Enter}}). Method › Control vertices meminta darjah (1 hingga 5) dan melukis dari poligon kawalan. Object menukar polygaris kepada splin melalui bucunya. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` untuk beberapa objek; garisan, lengkok dan splin ditawarkan sebagai polygaris dahulu. Lihat [Splin dan polygaris](topic:splines).

### BLOCK

Nama pendek: `B`, `BMAKE`.

- `Enter block name`. Jika ia wujud: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Ia digantikan dengan satu rujukan kepada blok baharu.

### WBLOCK

Nama pendek: `W`, `-WBLOCK`. Menulis blok, sebahagian objek atau seluruh lukisan sebagai fail DWG atau DXF baharu. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ia menjadi asal lukisan baharu), `Select objects`, kemudian `File format [DWG/DXF/R12 DXF]` dan `File name for the new drawing`, kemudian `What to do with the objects [Retain/Convert to block/Delete]`. Convert menggantikannya dengan satu rujukan kepada blok yang dinamakan sempena fail; Delete membuangnya.
- **Block**: `Block to write out`. Objek blok itu sendiri, dengan titik asasnya sebagai asal, termasuk blok bersarang.
- **Entire drawing**: setiap objek dalam ruang model. Helaian tidak ditulis; gunakan {{cmd:SAVEAS}} untuk salinan yang mengekalkannya.

Fail baharu hanya memegang lapisan, jenis garisan, gaya teks dan dimensi, dan blok yang digunakan oleh objeknya, serta unit lukisan. Versi DWG ialah yang terakhir digunakan oleh {{cmd:SAVEAS}}. Dalam pelayar fail dimuat turun; dalam Studio dialog simpan dibuka.

### ATTDEF

Nama pendek: `ATT`, `DDATTDEF`, `-ATTDEF`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Mencetak mod, kemudian `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` apabila malar), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} membawa takrifan atribut ke dalam blok.

### EATTEDIT dan ATTEDIT

`EATTEDIT` (`DDATTE`, atau klik dua kali pada rujukan dengan atribut; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Select a block reference with attributes`, kemudian dialog {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): rujukan yang sama, kemudian `<prompt> (<TAG>) <value>` bagi setiap atribut; {{key:Enter}} mengekalkan nilai. Lihat [Atribut](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Nilai dikekalkan; atribut baharu mendapat lalainya, yang dibuang hilang, dan kedudukan ditetapkan semula.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Dialog: blok, atribut (tag, gesaan, lalai, mod, susunan), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT dan REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Select the block reference to edit in place` (atau pilihan). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Save the block}} dan {{ui:Discard}} pada bar melakukan perkara yang sama. Keseluruhan penyuntingan ialah satu langkah buat asal. Lihat [Atribut](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: sama ada tekanan goresan pen menetapkan ketebalan garisan bagi apa yang {{cmd:SKETCHFIX}} dan {{cmd:SKETCHLIVE}} hasilkan (hidup pada mulanya). Lihat [Lakar dengan pen](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Nama pendek: `OFFSTD`. Menyatakan standard pejabat mana yang berkuat kuasa untuk lukisan ini dan dari mana ia datang: rekod lukisan itu sendiri, standard kongsi pasukan anda, atau Default Policies anda (ketinggian teks `all.anno.*`); tanpa apa-apa, saiz program itu sendiri. `[Import/Layers/Title block/Clear/eXit]`: `Import` membaca fail `.json` `cc-office-standard` (rekod yang ditulis oleh SuperCad dan BimCraft) ke dalam lukisan ini, disimpan bersamanya dalam DWG dan DXF; `Layers` menambah lapisan pejabat yang tiada dalam lukisan, dalam satu langkah buat asal, dan tidak pernah mengeluarkan satu; `Title block` menyenaraikan medan pejabat dengan nilai lukisan ini sendiri; `Clear` mengeluarkan rekod lukisan itu sendiri. Ketinggian teks dan dimensi beranotasi mengikut standard yang berkuat kuasa. Lihat [Unit, kertas dan skala](topic:units-papers-scales).

### BPARAMS

Nama pendek: `BPM`, `BLOCKPARAMS`. Membuka pengurus Parameter bagi blok dalam penyunting blok, blok rujukan yang dipilih, atau blok yang anda namakan (`Block name`): parameter dengan formula, beberapa parameter keterlihatan dengan keadaannya, dan nilai serta keadaan rujukan yang dipilih. Lihat [Parameter dan keadaan keterlihatan anda sendiri](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` melakukan perkara yang sama pada baris arahan: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT dan BCLOSE

`BE`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Enter block name to edit <the selected reference's block>` membuka penyunting blok. `BCLOSE` meminta `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Save block}} dan {{ui:Discard changes}} pada sepanduk melakukan perkara yang sama. Setiap yang dilakukan dalam penyunting ialah satu langkah buat asal.

### VIEWBASE

Nama pendek: `FLATSHOT`. Pandangan 2D rata bagi pepejal pada tab 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, satu skala (`1:20`, `2:1`; {{key:Enter}} mengambil yang sesuai dengan helaian), kemudian pusat pandangan. Satu rujukan blok, tepi yang kelihatan pada VIEW-VISIBLE, tepi tersembunyi putus-putus pada VIEW-HIDDEN. Lihat [Pandangan rata pada helaian](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Nama pendek: `-PUBLISH`; atau {{ui:All sheets in one PDF}} dalam dialog {{ui:Plot to PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} mencetak setiap helaian, `S` meminta nama dipisahkan dengan koma. Satu PDF, satu halaman dan satu penanda buku bagi setiap helaian. Lihat [Setiap helaian dalam satu PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Nama pendek: `SSM`, `SHEETSETMANAGER`. Membawa anda ke bahagian {{ui:Sheet set}} panel kiri: helaian daripada banyak lukisan, dinomborkan dan diberi tajuk, blok tajuk mereka diisi daripada set itu, diterbitkan sebagai satu PDF. Lihat [Set helaian](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): pilih DWG atau DXF, kemudian titik selitannya. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; dengan lebih daripada satu pautan, pilih salah satu rujukannya atau taip `N` dan namanya. Lihat [Lukisan dipautkan](topic:files#linked-drawings-external-references).

### COUNT

Nama pendek: `BCOUNT`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Select a block reference to count, or [All/Export] (Enter: All)`: satu pilihan memilih dan mengira setiap rujukan blok itu dalam ruang ini; {{key:Enter}} atau `A` menyenaraikan semuanya; `E` kemudian `C` (kiraan) atau `A` (atribut) memuat turun CSV. Lihat [Kira blok dan eksport jadual](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Nama pendek: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (huruf besar atau kecil tidak penting). `F` meminta DWG atau DXF, kemudian keseluruhan lukisan atau salah satu bloknya; nama yang sudah digunakan meminta {{ui:Keep existing}} atau {{ui:Rename}}. `L` membuka panel pustaka.
- `Specify insertion point [Scale/Rotate]`. `S` meminta `Specify scale factor`, `R` meminta `Specify rotation angle`; kedua-duanya diingati.
- Apabila blok sudah berada di sebelah objek yang berulang di tempat lain tanpanya, satu baris memberitahu berapa banyak tempat dicadangkan dan gesaan mendapat `suGgested`: `G` menunjukkannya; klik berhampiran satu untuk meletakkan blok di situ, `A` untuk semuanya, {{key:Enter}} untuk kembali. Mereka mengambil putaran jirannya dan nilai atribut lalai. Lukisan melebihi 20,000 objek dalam ruang terbuka tidak dicari.
- Kemudian `Enter <prompt> (<TAG>) <default>` bagi setiap atribut yang diminta blok. Lihat [Atribut blok](topic:attributes).

### LIBRARY

Nama pendek: `LIB`. Membuka panel pustaka: letakkan item, semak kemas kini, kredit pustaka. Tiada soalan. Lihat [Selit daripada fail atau pustaka](topic:insert-from-file-and-library).

### STEELMEMBER

Nama pendek: `SMEMBER`; atau {{ui:3D member}} pada tab {{ui:Standard}} pustaka. `Section size <W12x26>` (seperti yang disenaraikan tab), kemudian `Start point [Column]` dan `End point`: ahli pepejal pada tab 3D antara dua titik, duduk di atas tanah. `C` meminta titik asas tiang dan ketinggiannya. Satu langkah buat asal. Lihat [Letakkan seksyen keluli dan bahagian standard](topic:steel-and-standard-parts).

### PARTSLIST

Nama pendek: `PLIST`. `Top left corner of the parts list`, kemudian `Text height <2.5>`: melukis jadual setiap bahagian standard dan seksyen keluli yang diletakkan dari pustaka (nombor item, kuantiti, bahagian, standard, saiz, panjang, bahan, jisim). Satu langkah buat asal. Lihat [Letakkan seksyen keluli dan bahagian standard](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Nama pendek: `PU`. Membuang takrifan blok yang tiada digunakan. Tiada soalan.

### DELBLOCKS

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Select block to delete [Name/eXit]`: pilih rujukan blok, atau `N` untuk senarai blok dengan penapis (pilih beberapa), atau `X` / {{key:Enter}} untuk menamatkan. Setiap rujukan pergi — dalam model, pada setiap helaian dan dalam blok lain — kemudian takrifannya, dan baris arahan memberitahu apa yang dipadam dan apa yang tidak dapat dipadam. Blok tanpa nama dan lukisan dipautkan tidak ditawarkan. Gesaan kembali untuk blok seterusnya; keseluruhan arahan ialah satu langkah buat asal.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} menampal apa yang anda salin ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) sebagai satu blok: pilih titik selitan dan satu rujukan kepada blok baharu diletakkan di situ, dipilih. Blok itu mendapat nama sendiri (`A$C` dan satu nombor); {{cmd:RENAME}} memberinya nama anda. Satu langkah buat asal membuang rujukan dan blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} meminta blok untuk digantikan dan blok untuk diletakkan di tempatnya (`?` menyenaraikan blok), kemudian menukar setiap rujukan dalam model, pada setiap helaian dan dalam blok lain. Setiap rujukan mengekalkan tempat, skala, putaran, lapisan dan nilai atribut yang kedua-dua blok ada; atribut yang hanya blok baharu ada bermula pada lalainya, dan ia memberitahu nilai mana yang digugurkan. Apabila tiada apa lagi menggunakan blok lama, ia menawarkan untuk membuangnya. Ia menolak lukisan dipautkan dan gantian yang akan meletakkan blok di dalam dirinya sendiri. Satu langkah buat asal.

### MINSERT

{{cmd:MINSERT}} meletakkan blok dalam baris dan lajur: nama blok, titik selitan, skala, putaran, bilangan baris dan lajur, dan jarak antaranya. Keseluruhan set berputar dengan putaran. Setiap satu ialah rujukannya sendiri (10,000 paling banyak), jadi mana-mana daripadanya boleh dialih atau dipadam kemudian.

### BLOCKSPALETTE

Nama pendek: `BLOCKSPAL`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Menunjukkan panel {{ui:Blocks}} dengan kursor dalam penapisnya. Setiap blok mempunyai gambar kecil; yang paling baru diletakkan datang dahulu. Dua butang di sebelah penapis bertukar antara senarai dan grid gambar. Klik gambar (atau {{ui:Insert}}) untuk meletakkan blok dengan {{cmd:INSERT}}, atau seretnya ke atas lukisan untuk meletakkannya di tempat anda jatuhkan.

{{ui:Libraries}}, di bawah senarai: {{ui:Add a drawing}} mengambil fail DWG atau DXF sendiri dan menyenaraikan blok-bloknya dengan gambar, dan keseluruhan lukisan sebagai satu blok. Meletakkan satu menyalin takrifannya (dan blok yang bersarang di dalamnya, dan lapisan mereka) ke dalam lukisan ini, seperti pilihan `File` {{cmd:INSERT}}; blok yang sudah ada di sini dengan takrifan yang sama digunakan tanpa soalan, satu dengan nama sama yang berbeza bertanya {{ui:Keep existing}} atau {{ui:Rename}}. Dalam pelayar fail kekal sehingga halaman ditutup. Dalam CadCraft Studio {{ui:Add a folder}} menyenaraikan lukisan dalam satu folder, setiap satu dibuka apabila anda klik, dan fail serta folder diingati. Huruf x kecil mengeluarkan pustaka dari senarai; fail tidak disentuh. Pustaka {{ui:Library}} yang dikongsi ialah perkara yang berbeza: lihat [Selit daripada fail atau pustaka](topic:insert-from-file-and-library).

### BCONVERT

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Mencari geometri yang berulang dan menukar setiap salinan kepada rujukan kepada satu blok.

- `Select the objects that repeat, or [Block]`: objek satu salinan. `B` menamakan blok sedia ada sebaliknya, untuk mencari salinan longgar objeknya.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` dan `P` menukar apa yang dikira sebagai salinan; {{key:Enter}} mencari. Tetapan itu diingati.
- `Name for the new block <Block1>`, kemudian `Specify the block's base point` ({{key:Enter}} mengambil penjuru kiri bawah pilihan).
- Ia memberitahu berapa set objek lain yang mempunyai geometri sama, menyerlahkan setiap yang akan digantikannya, dan bertanya `Yes/No`.

Salinan ialah objek yang sama yang dialih dan diputar pada sebarang sudut (dan dicermin atau diskalakan dengan satu faktor apabila ia dihidupkan): setiap objek mesti mempunyai pasangannya, dalam sejuta saiz pilihan. Setiap rujukan mendapat putaran dan skalanya sendiri (yang dicerminkan mendapat skala Y negatif), dan lapisan yang dikongsi objeknya. Objek pada lapisan terkunci dibiarkan dan dikira. Ia mencari ruang terbuka (model atau helaian terbuka). Carian yang sangat besar berhenti pada had kerja dan memberitahu begitu. Satu langkah buat asal.

### BSEARCH

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: sebahagian nama blok, atau corak dengan `*` dan `?`. Menyenaraikan setiap blok dengan rujukannya di sini dan dalam seluruh lukisan.
- `A`: nilai atribut, atau `TAG=value`. Menyenaraikan blok yang rujukannya memegangnya, dengan nilai yang dijumpai. Atribut malar dikira.
- `G`: pilih objek, atau satu rujukan blok, dan blok yang bentuknya sekurang-kurangnya 85% serupa disenaraikan, yang terbaik dahulu. Saiz, putaran dan cermin tidak dikira. Ukuran membandingkan jarak antara titik yang tersebar sepanjang garis luar, jadi ia menjumpai rupa yang serupa; gunakan {{cmd:BCONVERT}} untuk mencari salinan yang tepat.

Rujukan yang dijumpai dalam ruang terbuka dipilih, sedia untuk arahan seterusnya.

### BREPLACE

Atau {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Replace [Selected/All]`: `S` menggantikan rujukan blok yang anda pilih dengan blok yang anda namakan; `A` meminta satu blok dan gantiannya dan menukar setiap rujukan, seperti {{cmd:BLOCKREPLACE}} (kod yang sama). Rujukan mengekalkan tempat, skala, putaran, lapisan dan nilai atribut yang kedua-dua blok ada; nilai yang blok baharu tiada tempat untuknya digugurkan dan dinamakan. `?` menyenaraikan blok. Satu langkah buat asal.

### DATAEXTRACTION

Nama pendek: `EATTEXT`, `DX`; atau {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Menyenaraikan blok, atributnya dan sifat objek sebagai jadual atau fail CSV.

- Berfungsi pada pilihan, atau meminta `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` apabila pilihan mengandungi kedua-duanya. Blok tanpa nama, jadual dan senarai bahan tidak pernah disenaraikan.
- Ia mencetak lajur untuk dipilih (nama, jenis, lapisan, X, Y, putaran, skala, panjang, luas, warna, jenis garisan, ruang, dan satu bagi setiap tag atribut), kemudian `Columns, by name or number with commas between`. {{key:Enter}} mengambil yang berbintang: nama dan setiap atribut untuk blok; jenis, lapisan dan panjang untuk objek.
- `Put identical rows together with a count? [Yes/No] <Yes>`, kemudian `Put the list in a: [Table/Csv] <Table>`. Jadual ialah jadual biasa ({{cmd:TABLEDIT}} menyuntingnya) dan tidak hidup: jalankan semula arahan apabila lukisan berubah.
- Ia menolak lajur yang tiada dalam senarai. Jadual memegang 1,999 baris data; fail CSV memegang semuanya.

### COUNTTABLE

Mengira rujukan blok bagi pilihan (atau bagi ruang terbuka) dan meletakkan kiraan dalam jadual (`Block`, `Count`) atau fail CSV. Untuk kiraan yang mengikut lukisan dengan sendirinya, lihat {{cmd:BOMTABLE}}.

## Helaian dan plot

### LAYOUT

Nama pendek: `LO`, `NEWLAYOUT`; atau butang {{ui:+}} di bawah lukisan. Helaian baharu dengan sempadan, blok tajuk dan satu viewport, pada ISO A3 (atau Tabloid untuk lukisan dalam inci atau kaki). Tiada soalan.

### MVIEW

Nama pendek: `MV`. Pada helaian sahaja ({{cmd:VPORTS}} pada helaian melakukan perkara yang sama).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Viewport menunjukkan seluruh model pada skala piawai.
- `P` (Polygonal): klik penjuru garis luar (`Undo`, `Close`), {{key:Enter}} apabila selesai. Ia menolak kurang daripada tiga penjuru.
- `O` (Object): `Select a closed object for the viewport's outline`: polygaris tertutup, bulatan atau elips pada helaian. Viewport mengambil bentuknya (lengkung sebagai kepingan lurus pendek); objek kekal seperti sedia ada. Ia menolak objek yang tidak tertutup.

### VPCLIP

Mengklip viewport yang sudah berada pada helaian. `Select viewport to clip` (atau pilih dahulu), kemudian `Select the object to clip to [Polygonal/Delete]`:

- Klik polygaris tertutup, bulatan atau elips, atau {{key:Enter}} (atau `P`) untuk klik penjuru poligon.
- `D` (Delete, ditawarkan apabila viewport diklip) menjadikannya segi empat tepat semula: kotak di sekeliling garis luar yang dimilikinya.
- Apa yang ditunjukkan viewport tidak bergerak di atas kertas, dan skalanya kekal. Model dilukis dan dicetak hanya di dalam garis luar, dan sempadan mengikutinya. Satu langkah buat asal.
- Viewport yang diklip mempunyai grip di setiap penjuru garis luarnya, selain pusat dan empat penjuru kotaknya (menyeret penjuru kotak meregangkan garis luar bersamanya). Properties menunjukkan Outline: Rectangle, atau Clipped dengan bilangan penjuru.
- Fail DWG dan DXF 2000 menyimpan garis luar untuk CadCraft. Program lain membuka viewport sebagai segi empat tepat di sekelilingnya; DXF R12 hanya menyimpan segi empat tepat.
- Pada tab model ia memberitahu viewport terdapat pada helaian.

### VPORTS

Nama pendek: `VIEWPORTS`. {{cmd:SPLIT}} adalah sama dari helaian juga, dan {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} menjalankannya. Pada model: `Enter number of panes [SIngle/2/3/4] <3>`; `2` meminta `[Horizontal/Vertical] <Vertical>` (Vertical = sebelah menyebelah), `3` meminta `[Left/Right] <Right>` (di mana anak tetingkap besar pergi). Setiap anak tetingkap mengekalkan pandangan dan ruangnya sendiri; satu klik menjadikan anak tetingkap aktif. Pada helaian ia ialah {{cmd:MVIEW}}. Lihat [Bahagikan skrin](topic:split-screen).

### VPVIEW

Tiada nama pendek. Pada helaian sahaja.

- `Select viewport` (dilangkau jika satu dipilih), kemudian pada model: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Tiada nama pendek. Sistem koordinat anda sendiri; bukan suntingan. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: titik ialah asal baharu, kemudian `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: asal, satu titik pada paksi X positif, satu titik pada bahagian Y positif. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` dan satu nama. Paparan berpusing supaya paksi X baharu mendatar. Lihat [Pusingkan paparan dan gunakan koordinat anda sendiri](topic:ucs-and-turned-view).

### PLAN

Tiada nama pendek. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: memusingkan paparan viewport aktif supaya paksi X UCS itu (atau dunia) mendatar. Tiada apa dalam lukisan bergerak.

### TURNLEFT, TURNRIGHT, TURNWORLD

Tiada nama pendek; atau {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Sama seperti `UCS Z -90`, `UCS Z 90` dan `UCS W`, dengan paparan mengikut.

### VPLAYER

Tiada nama pendek. Pada helaian, atau di dalam viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` meminta nama lapisan (koma, kad liar `*` dan `?`), kemudian `[All/Select/Current] <Current>` viewport; Reset mengembalikan setiap lapisan kepada lalai "frozen in new viewports"-nya; `V` menetapkan lalai itu (`[Frozen/Thawed]`), yang digunakan oleh {{cmd:MVIEW}}. `?` menyenaraikan lapisan yang dibekukan dalam viewport semasa. Lajur viewport dalam panel Lapisan melakukan perkara yang sama untuk satu viewport. Lihat [Bekukan lapisan dalam satu viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Nama pendek: `MS`; atau klik dua kali di dalam viewport. Pada helaian sahaja. Bekerja pada model melalui viewport: yang dipilih, satu-satunya pada helaian, atau `Click inside the viewport to work in`. Pan dan zum di dalam menukar pandangan viewport (yang dikunci paparannya mengekalkannya dan helaian bergerak sebaliknya); pandangan baharu ditulis sebagai satu langkah buat asal. Lihat [Bekerja pada model melalui viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Nama pendek: `PS`; atau klik dua kali di luar viewport, atau klik tab di bawah lukisan. Kembali ke helaian.

### PLOT

Nama pendek: `PRINT`, `PUBLISH`, `EXPORTPDF`; atau {{key:Mod+P}}. Membuka dialog {{ui:Plot to PDF}}. Lihat [Plot ke PDF](topic:plot-pdf).

### PLOTSTYLES

Nama pendek: `STYLESMANAGER`, `PSTABLES`; atau {{ui:Edit tables…}} dalam dialog {{ui:Plot to PDF}}. Membuka {{ui:Plot style tables}}: apa yang dicetak oleh setiap warna (warna, kelabu, dakwat, ketebalan garisan), disimpan bersama lukisan. Lihat [Jadual gaya plot](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} memindahkan objek antara helaian dan model melalui viewport, diskalakan dan diputar supaya kelihatan sama dari sisi lain. Pada helaian, pilih objek dan ia pergi ke model (pilih viewport apabila helaian mempunyai lebih daripada satu). Semasa anda bekerja pada model melalui viewport ({{cmd:MSPACE}}), objek yang dipilih datang ke helaian. Ia memberitahu berapa kali lebih besar atau kecil ia menjadi. Viewport kekal pada helaiannya. Satu langkah buat asal.

### ISODRAFT

{{cmd:ISODRAFT}} menghidupkan atau mematikan lukisan isometrik `ON` atau `OFF`, atau terus ke satah `Left`, `Top` atau `Right`. Semasa ia hidup: Ortho ({{key:F8}}) mengekalkan garisan sepanjang dua paksi satah (kiri: 90° dan 150°; atas: 30° dan 150°; kanan: 30° dan 90°), penjejakan kutub ({{key:F10}}) mengikut paksi yang sama, snap ke grid ({{key:F9}}) menggunakan grid isometrik, dan grid ({{key:F7}}) dilukis dengan garisan pada 30°, 90° dan 150°. {{cmd:ELLIPSE}} mendapat `Isocircle`: beri pusat dan jejari (atau `Diameter`) dan ia melukis elips yang ditunjukkan bulatan pada satah semasa. Lukisan kekal rata: ini ialah bantuan untuk melukis pandangan bergambar, bukan model 3D. Tetapan itu untuk sesi ini dan tidak disimpan dalam fail.

### ISOPLANE

{{cmd:ISOPLANE}} memilih satah yang digunakan oleh lukisan isometrik: `Left`, `Top` atau `Right`. Enter pergi ke satah seterusnya. Semasa lukisan isometrik hidup, {{key:F5}} melakukan perkara yang sama di tengah-tengah arahan; semasa ia mati, {{key:F5}} dibiarkan kepada pelayar.

## Pertanyaan

### CAL

Mencetak nilai pengiraan, seperti yang akan dibaca di mana-mana panjang yang ditaip.

- `Expression`: taip, contohnya `12'6"+3/4"` atau `(24'-0")/3`, dan tekan {{key:Enter}}. CadCraft mencetak `= 12'-6 3/4"   (150.75 drawing units)`. Lihat [Aritmetik dalam nilai yang ditaip](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Nama pendek: `DI`; atau {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Specify first point`, `Specify second point`. Mencetak jarak, sudut, Delta X dan Delta Y.

### AREA

Nama pendek: `AA`; atau {{ui:View}} › {{ui:More}} › {{ui:Area}}. Mencetak luas dan perimeter.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klik atau taip penjuru; pada `Specify next point (Enter closes) [Undo]` tekan {{key:Enter}} untuk menutup garis luar. `U` membatalkan penjuru terakhir.
  - {{key:Enter}} atau `O`, kemudian `Select object`: bulatan (mencetak lilitannya), elips, polygaris (yang terbuka ditutup oleh garisan lurus untuk luas, dan panjangnya dicetak), atau hatch (lubang ditolak).
  - `A` (Add area) dan `S` (Subtract area) mengekalkan jumlah berjalan: gesaan bermula dengan `(ADD mode)` atau `(SUBTRACT mode)`, setiap kawasan ditambah atau ditolak, dan `Total area = …` dicetak selepas setiap satu. Dalam mod ini `O` memilih objek sehingga {{key:Enter}}, dan {{key:Enter}} pada gesaan pertama menamatkan arahan.

### MEASUREGEOM

Nama pendek: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; selepas setiap ukuran ia bertanya semula, dengan `eXit` sebagai lalai.

`Quick` mengukur di sekeliling penuding apabila anda menggerakkannya: jarak ke objek terdekat di kanan, atas, kiri dan bawah (sepanjang paksi UCS semasa), dilukis semasa anda bergerak, dan sudut di mana dua jiran itu lurus dan bertemu. Satu klik menulis empat jarak, lebar dan tinggi bersih dan sudut ke dalam sejarah; Enter kembali kepada pilihan. Ia membaca apa yang ada di skrin.

- `D`: dua titik, seperti {{cmd:DIST}}.
- `R`: `Select arc or circle`; mencetak jejari dan diameter.
- `A`: satu lengkok (sudut tertutupnya), satu garisan dan kemudian garisan kedua (sudut antara keduanya, ke arah hujung jauh mereka), atau {{key:Enter}} dan tiga titik (bucu, kemudian dua hujung).
- `AR`: sama seperti {{cmd:AREA}}, satu kawasan.

### ID

Tiada nama pendek. `Specify point`; mencetak X dan Y-nya.

### LIST

Nama pendek: `LI`, `LS`. `Select objects`; mencetak jenis, lapisan dan ukuran utama setiap objek.

### MASSPROP

{{cmd:MASSPROP}} memberi ciri keratan rentas bagi rantau dan objek tertutup yang anda pilih, diambil bersama: luas, perimeter, kotak sempadan, pusat graviti, momen inersia mengenai paksi X dan Y melalui asal, hasil darab inersia, jejari giratan, momen yang sama mengenai pusat graviti, dan momen utama dengan arah paksinya. Lubang dalam rantau dikira sebagai lubang. Angka dalam unit lukisan dan tepat untuk garis luar yang dibuat daripada garisan dan lengkok; elips dan splin diukur sebagai segmen lurus pendek, dan ia memberitahu begitu. Selepas laporan ia bertanya sama ada hendak menulisnya ke fail teks. Objek yang tidak tertutup ditinggalkan, dan ia memberitahu berapa banyak.

## Lihat, fail dan lain-lain

### ZOOM

Nama pendek: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klik dua penjuru untuk tetingkap. `E`, `A` atau Enter: seluruh lukisan.
- `P` (Previous, atau {{ui:Previous}} pada bar alat) kembali ke pandangan sebelumnya, sehingga 10 pandangan setiap tab; satu lariannya langkah roda tetikus atau satu pan dikira sebagai satu pandangan.
- Nombor seperti `2`, `2x` atau `0.5x` (atau `S` dan kemudian nombor) menzum masuk atau keluar dengan faktor itu di sekitar tengah skrin.
- `C` meminta `Specify center point` dan `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT dan arahan PDF

Nama pendek: `PDFATT` untuk {{cmd:PDFATTACH}}, `PDFIM` untuk {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} meletakkan halaman PDF di bawah lukisan (fail, halaman, titik selitan, skala, putaran); {{cmd:PDFIMPORT}} menukar garisan, lengkung, isian dan teks halaman kepada objek lukisan pada lapisan yang dinamakan sempena PDF, pada saiz sebenar, skala yang ditaip, atau diskalakan dari dua titik dan jarak sebenar. {{cmd:PDFCLIP}} mengklip underlay, {{cmd:PDFADJUST}} menetapkan pudar, kontras, monokrom atau mematikannya, {{cmd:PDFLAYERS}} menghidupkan atau mematikan lapisan PDF itu sendiri, dan {{cmd:PDF}} memberi CadCraft fail yang digunakan oleh underlay lukisan semula. Lihat [Underlay PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Nama pendek: `AUTOC`. Autolengkap lukisan: tanpa arahan berjalan, hantu kelabu menunjukkan apa yang dikatakan corak lukisan anda seterusnya. {{cmd:AUTOCOMPLETE}} menghidupkannya `On` atau mematikannya `Off` (juga Settings › CadCraft) atau `Show` apa yang akan dicadangkannya sekarang. **Tab** melukis hantu sebagai satu langkah buat asal, **Esc** menolaknya sehingga lukisan berubah. Ia mencari tiga perkara dalam objek yang paling baru: salinan seterusnya bagi sesuatu yang dilukis dua kali atau lebih pada langkah sama (tiang, kolum, anak tangga dan injak tangga), langkah seterusnya bagi tangga polygaris, dan sisi yang hilang bagi bilik atau rantai dinding. Di tengah {{cmd:LINE}} atau {{cmd:PLINE}} hantu ialah **titik seterusnya**: langkah seterusnya tangga (tegak, injak, tegak…), penjuru keempat segi empat tepat, titik yang menutupnya, atau satu lagi langkah sama. Bawa kursor berhampiran dan tekan **Tab**, seolah-olah anda telah mengklik di situ; teruskan atau tekan Enter. Dikira pada komputer ini dengan peraturan, tanpa model.

### AUTOSHEET

Nama pendek: `ASH`. Helaian yang menyusun diri sendiri. {{cmd:AUTOSHEET}} mengambil bahagian lukisan (pandangan bernama anda, atau bahagian model yang berasingan, atau keseluruhan model), memilih saiz kertas (atau yang anda beri), memberi setiap bahagian skala piawai (satu skala untuk semua, atau yang terbesar yang boleh diambil setiap satu), dan meletakkan pandangan dalam baris pada helaian baharu dengan blok tajuk dan kapsyen (nama dan skala) di bawah setiap satu. Apa yang tidak muat pada satu helaian mendapat helaian sendiri. Satu langkah buat asal. Dikira pada komputer ini dengan peraturan, tanpa model.

### PHOTOSKETCH

Nama pendek: `PSK`. Foto lakaran kepada lukisan. Pilih foto (JPEG, PNG atau TIFF) lakaran tangan di atas sehelai kertas. {{cmd:PHOTOSKETCH}} mencari empat penjuru helaian, meluruskan perspektif, mengambil saiz kertas yang anda namakan (`Paper`, atau yang piawai terdekat) dan `Scale` lakaran (1 : n), kemudian mengesan garisan pen menjadi garisan, lengkok dan bulatan, satu lapisan bagi setiap warna pen (hitam, merah, biru, hijau). Jika ia tidak dapat mencari tepi kertas, ia mengambil keseluruhan foto sebagai helaian dan memberitahu begitu. Tulisan tangan ditinggalkan. Satu langkah buat asal. Dilakukan pada komputer ini dengan pemprosesan imej klasik, tanpa model, tiada apa yang dihantar ke mana-mana. Lihat juga arahan lukisan yang diimbas.

### AUTODIM

Nama pendek: `ADIM`. Dimensi auto mengikut peraturan. {{cmd:AUTODIM}} mendimensikan objek yang dipilih (atau keseluruhan lukisan) daripada tepi tegak dan mendatarnya: rantai dimensi sepanjang sisi yang anda pilih (`Sides`), satu dimensi keseluruhan di luarnya, lebar setiap bukaan (jurang antara garisan dinding segaris), diameter bagi setiap saiz lubang, dan dengan `Grid` jarak antara garisan grid. Dimensi yang sudah ada tidak dibuat semula. Satu langkah buat asal. Dikira pada komputer ini dengan peraturan, tanpa model.

### GRIDMOVE

Nama pendek: `GM`. Menggerakkan garisan grid membawa set itu. {{cmd:GRIDMOVE}} mengalihkan garisan grid (garisan pada lapisan yang namanya mengandungi grid atau axis) dan apa yang bergantung padanya: dinding yang mempunyai hujung pada garisan meregang untuk mengikutnya, dinding sepanjangnya bergerak seluruhnya, tiang (rujukan blok dan bulatan pada garisan), gelembung dan tagnya bergerak, dan dimensi yang titiknya berada padanya mengukur jarak baharu. Berikan dua titik (hanya bahagian merentas garisan dikira) atau `Distance`. Satu langkah buat asal membawa semuanya kembali. Dilakukan dengan peraturan pada komputer ini.

### DETAILS

Nama pendek: `DET`. Perincian yang mencari anda. {{cmd:DETAILS}} menyimpan perincian tersendiri firma anda: `Add` meletakkan satu blok lukisan ini dalam senarai, `List` dan `Remove` mengurusnya, dan `Find` menyusun mereka untuk apa yang dipilih (atau untuk apa yang anda lukis terakhir) mengikut perkataan pada lapisannya, nama blok, corak hatch dan nota berbanding nama dan nota setiap perincian, jadi kepala tingkap mencari kepingan sill anda. Pilih satu nombor dan satu titik untuk meletakkannya. Dengan `Hint` hidup (juga Settings › CadCraft), memilih sesuatu yang sepadan dengan perincian meletakkan satu baris dalam bar status. Senarai disimpan dalam pelayar ini, pada komputer ini, dan senarai itulah yang dicari. `Share` meletakkannya dalam folder Dokumen anda juga (`.cadcraft/firm-details.json`, dengan lukisan setiap blok): `Pull` menambah apa yang pasukan anda ada dan anda tiada, `Push` menambah apa yang anda ada dan mereka tiada, `Both` melakukan kedua-duanya, dan tiada apa yang dikeluarkan daripada kedua-dua belah. Buka folder Dokumen dahulu ({{cmd:DOCUMENTS}}); apabila folder itu ialah folder Team Cloud Plan, seluruh pasukan berkongsi satu senarai. Item perincian dalam panel Pustaka mempunyai butang **Add to my firm's details** yang meletakkannya dalam senarai yang sama. Dikira pada komputer ini dengan perkataan, tanpa model.

### SKETCHFIX

Nama pendek: `SKF`. Lakaran pen menjadi geometri tepat. Tekan dan seret satu goresan bebas pada satu masa (pen, tetikus atau jari), kemudian Enter. Setiap goresan dibaca sebagai garisan, bulatan, lengkok, segi empat tepat atau polygaris: garisan yang hampir mendatar dan menegak dijadikan tepat mendatar dan menegak, goresan bulat tertutup menjadi bulatan, goresan tertutup dengan empat penjuru bersudut tegak menjadi segi empat tepat, dan hujung goresan ditarik bersama dan ke hujung yang sudah ada dalam lukisan. Satu langkah buat asal. Dikira pada komputer ini dengan peraturan, tanpa model.

### SCANATTACH dan arahan lukisan yang diimbas

Nama pendek: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} tiada nama pendek. Ia berfungsi pada gambar, satu langkah buat asal setiap satu. {{cmd:SCANATTACH}} memasukkan PNG, JPEG, TIFF (satu halaman atau semua) atau halaman PDF yang merupakan gambar. {{cmd:SCANSCALE}} menskalakan helaian daripada dua titik yang dipilih dan jarak sebenar. {{cmd:SCANALIGN}} mengalihkan dan memutarnya ke dua titik (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} menunjukkan sudut garisan panjang helaian dan memutar helaian sebaik sahaja anda `Accept` atau beri `Value`. {{cmd:SCANCLEAN}} menjadikannya hitam putih (`Threshold` Auto/Adaptive/Level, `Specks`) dan `Run`. {{cmd:SCANCROP}} mengekalkan satu tetingkap. {{cmd:SCANERASE}} memadam `Rectangle`, `Polygon` atau `Lasso`. {{cmd:SCANTRACE}} mengesan garisan dan lengkok pada lapisan baharu (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) dan melaporkan apa yang dijumpainya dan apa yang ditinggalkan sebagai raster. {{cmd:SCANINFO}} menyenaraikan fail asal dan langkahnya. {{cmd:RASTERSNAP}} menghidupkan atau mematikan snap ke garisan helaian yang diimbas. Lihat topik Lukisan yang diimbas dan pengesanan.

### REGEN dan REGENALL

Nama pendek: `RE` untuk {{cmd:REGEN}}, `REA` untuk {{cmd:REGENALL}}. Membina semula apa yang dilukis pada skrin daripada lukisan: {{cmd:REGEN}} tab yang anda lihat (pada helaian, model yang ditunjukkan viewportnya juga), {{cmd:REGENALL}} setiap tab, setiap anak tetingkap skrin berpecah dan setiap lukisan terbuka. Gunakannya apabila gambar kelihatan lapuk selepas perubahan berskrip atau sangat besar, atau apabila pembantu menyunting lukisan; lukisan itu sendiri tidak disentuh, jadi tiada apa untuk dibatalkan.

### NAMEDVIEW

Nama pendek: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, kemudian nama pandangan. `S` menyimpan pandangan di skrin, `W` tetingkap yang anda pilih, `R` menunjukkan pandangan yang disimpan, `D` memadam satu, `?` menyenaraikan pandangan tab ini. Menyimpan di bawah nama yang sedia ada menggantikannya; setiap perubahan ialah satu langkah buat asal. Pandangan tergolong dalam tab tempat ia disimpan. Fail DWG dan DXF menyimpannya (jadual VIEW); pandangan helaian kembali pada helaian pertama, kerana fail tidak menyatakan yang mana.

### UNDO dan REDO

Nama pendek: `U` untuk {{cmd:UNDO}}; {{cmd:REDO}} tiada nama pendek. Juga {{key:Mod+Z}} dan {{key:Mod+Y}}.

### LAYER

Nama pendek: `LA`. Melompat ke panel {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` atau nama (`?` menyenaraikannya: Continuous, milik lukisan, dan DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE dengan saiz `2` (separuh) dan `X2` (dua kali ganda) mereka). {{cmd:LWEIGHT}} (`LW`): ketebalan garisan bagi objek baharu dalam mm, atau `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): skala jenis garisan lukisan (boleh dibatalkan). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — sama seperti butang {{ui:LWT}} dalam bar status. Lihat [Ketebalan garisan dan jenis garisan](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, kemudian nama baharu; objek atau rujukan mengikut. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` sehingga {{key:Enter}}, kemudian `Select object on target layer or [Name]` dan `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, kemudian `Y`: lapisan dan setiap objek di atasnya pergi (bukan lapisan 0, DEFPOINTS atau lapisan semasa). Satu langkah buat asal setiap satu. Lihat [Atur lukisan dengan lapisan](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lapisan dengan memilih objek; juga dalam menu {{ui:Tools}} panel {{ui:Layers}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, kemudian {{key:Enter}}: setiap lapisan lain dimatikan. {{cmd:LAYUNISO}} menghidupkannya semula. {{cmd:LAYOFF}} dan {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (atau dibekukan), berulang kali; `U` membatalkan yang terakhir, {{key:Enter}} menamatkan. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} menghidupkan setiap lapisan, {{cmd:LAYTHW}} menyahbekukan setiap lapisan. Setiap arahan ialah satu langkah buat asal. Lihat [Atur lukisan dengan lapisan](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} memulakan lukisan kosong dan {{cmd:OPEN}} membuka DWG atau DXF, setiap satu dalam tab sendiri di atas lukisan (lukisan baharu yang belum disentuh digunakan sebaliknya tanpa tab baharu). Menutup tab dengan perubahan yang belum disimpan bertanya dahulu. Lihat [Bahagikan skrin](topic:split-screen).

{{cmd:SAVE}} (nama pendek `QSAVE`, juga {{key:Mod+S}}) memuat turun salinan dalam format lukisan: DWG jika ia dibuka daripada DWG, DXF jika daripada DXF. Lukisan baharu menggunakan format yang dipilih kali terakhir dalam Save as dalam pelayar ini, jika tidak DWG.

{{cmd:SAVEAS}} (juga {{key:Mod+Shift+S}}) membuka dialog {{ui:Save a copy as}}: pilih {{ui:DWG}} (dan {{ui:Version}}-nya), {{ui:DXF R12}} atau {{ui:DXF 2000}}, kemudian {{ui:Save}}. Pilihan itu kekal untuk lukisan ini dan untuk lukisan baharu dalam pelayar ini.

{{cmd:DXFOUT}} sentiasa memuat turun salinan DXF R12, tanpa menukar format yang digunakan {{cmd:SAVE}}.

Lihat [Fail: apa yang dibuka, apa yang disimpan](topic:files#saving).

### TOUR

Nama pendek: `TUTORIAL`. Memulakan semula lawatan enam langkah lukisan pertama. Lihat [Permulaan](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Nama pendek: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Lihat [Tetapan](topic:settings#toolbar-position).

### COMMANDLINE

Nama pendek: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: melekapkan atau mengapungkan baris arahan, menjadikannya satu baris, bertanya berapa baris sejarah untuk ditunjukkan (0 hingga 12), atau membuka sejarah. Lihat [Tetapan](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: bar di atas lukisan seperti sebelumnya, atau padat. Lihat [Tetapan](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: langkah yang digunakan oleh penjejakan {{ui:Polar}} untuk menjajar (lebih daripada 0, sehingga 180). Diingati dalam pelayar ini.

### UNITS

Nama pendek: `UN`. Cara panjang ditulis dan ditaip.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural dan Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Yang lain: `Enter number of decimal places (0 to 8)`.

Dimensi baharu mengikutinya. Satu langkah buat asal. Sama seperti {{ui:Length format}} dan {{ui:Precision}} dalam {{ui:Current settings}}; lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Nama pendek: `GDS`. Melihat susun atur IC (fail aliran GDSII): spike makmal, untuk melihat dan mengukur sahaja.

- Pemilih fail mengambil fail `.gds`; dengan beberapa sel atas, `Enter the top cell to draw`.
- Setiap lapisan dan jenis data menjadi lapisan lukisan (`GDS 1`, `GDS 2/5`), rujukan dan tatasusunan diletakkan rata, dalam unit pengguna fail (biasanya mikrometer). Satu langkah buat asal. Tiada apa yang disimulasi atau diperiksa, dan fail tidak ditulis semula.

### DIAGRAM

Nama pendek: `TEXTDIAGRAM`, `T2D`. Gambar rajah daripada teks.

- Kotak mengambil teks (atau satu baris dengan `;` antara pernyataan pada baris arahan): carta alir Mermaid, gambar rajah komponen PlantUML, D2 atau senarai dari-ke.
- `Specify the top left corner of the diagram`, kemudian `Specify the text height`.

Blok dan penyambung ialah objek biasa pada lapisan `Diagram`, dipilih apabila ia tamat. Satu langkah buat asal. Lihat [Lukis gambar rajah daripada teks](topic:text-to-diagram).

### OLELIST

Nama pendek: `OLES`. Objek OLE yang dibawa DWG dan yang tidak dapat diletakkan oleh CadCraft sendiri.

- Menyenaraikan setiap satu: nombor, jenis, saiz, sama ada ia menyimpan gambar.
- `Enter an option [Place/eXit] <eXit>`: Place meminta nombor, penjuru kiri bawah dan lebar, dan melukis bingkai dengan gambar. Satu langkah buat asal; objek yang disimpan tidak berubah. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Nama pendek: `SHX`. Fon SHX anda sendiri.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} membaca setiap `.shx` dalam satu folder (CadCraft Studio; sekali lagi pada setiap permulaan), {{ui:Files}} mengambil fail yang dipilih (pelayar), {{ui:Reverse}} meletakkan huruf satu fon terakhir dahulu. Gaya teks yang menamakan fon yang dimuatkan dilukis dengannya. Lihat [Lukis teks dengan fon SHX anda sendiri](topic:shx-fonts).

### LIMITS

Sebesar mana lukisan itu dimaksudkan.

- `Specify lower left corner or [ON/OFF] <current>`: satu titik, `ON` atau `OFF`.
- `Specify upper right corner <current>`.

Grid mengisi had, {{cmd:ZOOM}} All menunjukkannya, dan dengan had ON titik di luar ditolak (`**Outside limits`). Satu langkah buat asal; disimpan dalam DWG dan DXF. Lihat [Tetapkan had lukisan](topic:drawing-limits).

### AUNITS

Nama pendek: `ANGUNITS`. Cara sudut ditunjukkan dan ditaip.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, atau untuk dua yang lain `Enter precision` (0 darjah, 2 minit, 4 saat, 5 hingga 8 perpuluhan saat).

Satu langkah buat asal; disimpan dalam DWG dan DXF. Sama seperti {{ui:Angle format}} dalam {{ui:Current settings}}. Lihat [Taip dan tunjukkan bearing dan sudut](topic:bearings-and-angles).

### APPLOAD

Nama pendek: `AP`; atau {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Dialog {{ui:Load applications}}: muat rutin `.lsp` dan fail dialog `.dcl`, nyahmuatkannya, muat semula daripada sejarah, dan Startup Suite. Arahan `(defun c:NAME …)` sesuatu rutin kemudian berfungsi seperti mana-mana arahan lain. Lihat [Muat aplikasi](topic:load-applications) dan [Jalankan rutin LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (atau {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) membuka fail alias anda (baris `ALIAS, *COMMAND`); {{ui:Save}} menggunakannya. {{cmd:REINIT}} menggunakannya semula. Lihat [Sunting alias arahan](topic:command-aliases).

### OPTIONKEYS

Nama pendek: `OPTKEYS`; atau {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}. Membuka fail huruf pilihan anda (baris `COMMAND.OPTION, LETTERS`, seperti `ARRAY.PO, P`); {{ui:Save}} menggunakannya dan {{cmd:REINIT}} menggunakannya semula. Lihat [Berikan pilihan arahan huruf anda sendiri](topic:option-letters).

### LISPEDIT

Nama pendek: `VLIDE`; atau {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Membuka penyunting LISP, tetingkap yang kekal terbuka di sebelah lukisan.

- Teksnya: nombor baris, pasangan kurungan pada kursor ditanda (merah apabila tiada pasangan), {{key:Enter}} menjorokkan baris baharu di bawah kurungan terbuka, {{key:Tab}} menaip dua ruang, {{key:Esc}} meninggalkan teks.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): membaca setiap bentuk, seperti {{cmd:APPLOAD}} melakukannya dengan fail, dan membuat arahan `c:`-nya. Fail itu ditunjukkan dalam senarai {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): menilai bentuk yang dipilih, atau bentuk tempat kursor berada.
- {{ui:Stop}}: menamatkan rutin yang sedang berjalan.
- {{ui:Console}}: apa yang dicetak rutin, dan setiap ralat dengan barisnya; klik ralat untuk pergi ke sana. Teks dijalankan satu bentuk peringkat atas pada satu masa, jadi barisnya ialah bentuk itu, atau di dalamnya baris yang memanggil fungsi yang dinamakan ralat itu.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): fail `.lsp`. Teks juga disimpan dalam pelayar ini, jadi menutup tetingkap tidak kehilangannya.
- Di sebelah teks: fungsi yang ditakrifkan rutin, yang ia panggil dan LISP ini belum ada, yang ia panggil yang tidak ditakrifkan di dalamnya mahupun terbina, dan senarai penuh apa yang dibina dan apa yang tidak.

Teks dengan kurungan yang tidak pernah ditutup, atau rentetan yang tidak pernah berakhir, tidak dijalankan: baris dinamakan. Tiada penyahpepijat langkah demi langkah, titik henti atau tetingkap pantau. Lihat [Jalankan rutin LISP](topic:run-lisp).

### HELP

Nama pendek: `?`. Mencetak setiap arahan, nama pendeknya dan penerangan satu baris dalam sejarah baris arahan. Ia tidak membuka bantuan ini: tekan {{key:F1}} atau klik {{ui:Help}} untuk itu.

## Gesaan pilih objek

Pada mana-mana gesaan `Select objects`: klik objek, lukis tetingkap (dari kiri ke kanan) dan silang (dari kanan ke kiri) dengan dua klik, atau tekan dan seret lasso ({{key:Space}} semasa menyeret: tetingkap, silang, pagar), {{key:Shift}}+klik untuk membuang, dan tekan {{key:Enter}} untuk selesai. Anda juga boleh menaip `ALL` (segalanya), `L` (objek terakhir), `P` (Previous: apa yang digunakan arahan terakhir), `F` (Fence: objek yang dilalui garisan titik; `U` membatalkan satu titik), `W` (Window), `C` (Crossing), `R` (mod Remove: pilihan mengeluarkan objek; gesaan berbunyi `Remove objects`) dan `A` (Add semula). `?` menyenaraikannya. Ia tidak ditunjukkan dalam gesaan. {{key:Tab}} ke atas objek yang bertindih menyerlahkan yang seterusnya; klik untuk memilihnya. Lihat [Pilih objek](topic:select-objects).

### ACCESS

Nama pendek: `AX`. Lukisan tanpa penglihatan. {{cmd:ACCESS}} menghidupkan atau mematikan Access (`On`, `Off`) dan menukar bunyi snap (`Sound`) dan arahan suara (`Voice`); ia menyatakan keadaan dahulu. Dengan Access hidup, setiap arahan dan hasil dituturkan melalui pembaca skrin anda dan kawasan lukisan mempunyai kursor papan kekunci. Topik bantuan "Draft without sight" mempunyai kekunci.

### DESCRIBE

Nama pendek: `DESC`. Nyatakan apa yang ada dalam lukisan: berapa objek, jenis apa, betapa besar, berapa lapisan, apa yang dipilih. Hanya membaca; tidak mengubah apa-apa.

### WHEREAMI

Nama pendek: `WHERE`. Nyatakan di mana kursor berada, dalam unit lukisan.

### NEARBY

Nyatakan apa yang berada berhampiran kursor, terdekat dahulu, setiap satu dengan jaraknya dan sisi yang ia berada.

### SAYSEL

Nyatakan apa yang dipilih, satu ayat bagi setiap objek (panjang garisan, hujung dan sudut; jejari dan pusat bulatan; teks seperti yang ditulis).

### VOICE

Hidupkan atau matikan arahan lisan. Ia dikenali pada komputer ini; di tempat pelayar tidak boleh berbuat demikian, suara kekal mati melainkan anda memilih perkhidmatan dalam talian pelayar dalam Settings.

### TOUCHCROSSHAIR

Nama pendek: `TCX`. Silang ofset untuk melukis dengan jari, supaya hujung jari tidak menutup titik yang anda pilih. Semasa ia hidup, satu jari pada lukisan tidak memilih: ia menggerakkan silang yang terletak di atas jari dan di satu sisi. Snap objek dan penjejakan mengikut silang. Mengangkat jari tidak memilih apa-apa dan membiarkan silang di tempatnya. Untuk memilih, tekan butang {{ui:Click}} di sudut lukisan, atau ketik di mana-mana pada lukisan dengan jari kedua. Tahan {{ui:Click}} semasa anda menggerakkan jari yang satu lagi untuk menyeret (tetingkap pilihan, lasso, grip). Jari yang ditekan dan dipegang dengan pegun, atau butang {{ui:Enter}}, ialah Enter. Dua jari menggeser dan menzum seperti sebelumnya. Berhampiran tepi bawah dan tepi jauh, silang merapat ke jari, supaya setiap bahagian lukisan boleh dicapai. Pen dan tetikus sentiasa memilih secara langsung.

{{cmd:TOUCHCROSSHAIR}} memberitahu keadaannya dan bertanya `ON`, `OFF`, `Auto` (hidup hanya di tempat jari ialah satu-satunya penuding, jadi mati pada komputer dengan tetikus), `Distance` (sejauh mana silang berada dari jari, 24 hingga 240 piksel) atau `Side` (`Left`: ke atas dan ke kiri, untuk tangan kanan; `Right` untuk tangan kiri; butang berpindah ke sudut yang lain). Pilihan yang sama terdapat dalam Settings › CadCraft, dan pada peranti skrin sentuh bar status mempunyai suis {{ui:Offset crosshair}}. Pilihan disimpan dalam pelayar ini.

### WHOHAS

Memberitahu siapa yang membuka lukisan. Dalam CadCraft Studio pada komputer, membuka DWG atau DXF menulis fail kunci kecil di sebelahnya (`Plan.dwg.cclock`: siapa, sejak bila, versi mana), menyegarkannya setiap minit semasa lukisan terbuka, dan membuangnya apabila lukisan ditutup. Membuka lukisan yang dibuka orang lain memberitahu siapa dan sejak bila, dan menawarkan {{ui:Open read-only}} (Save kemudian meminta nama baharu), {{ui:Open anyway}} (orang lain diberitahu pada penyegaran seterusnya mereka) atau {{ui:Cancel}}. Menyimpan ke atas fail yang dibuka orang lain bertanya dahulu. Kunci yang belum disegarkan selama lima minit dikatakan lapuk: salinan lain ditutup tanpa menyimpan atau komputer sedang tidur.

{{cmd:WHOHAS}} bertanya `Current` (lukisan terbuka), `File` (pilih satu), `FOlder` (pilih folder: setiap lukisan di dalamnya yang dibuka di mana-mana disenaraikan), `Path` (taip laluan penuh) atau `Name` (nama yang dilihat orang lain; nama akaun anda apabila anda log masuk). Studio hanya boleh mencapai folder yang anda pilih: untuk lukisan yang dibuka daripada folder yang tidak pernah dipilih, ia memberitahu sekali bahawa ia tidak boleh mencatatkan lukisan itu sebagai dibuka; `FOlder` memilih folder itu, dan kunci berfungsi di sana selepas itu. Kunci ialah nota untuk orang ramai, bukan halangan: program lain masih boleh menulis fail itu. Dalam pelayar tiada folder untuk dilihat, dan arahan memberitahu begitu.

### OVERKILL

Memadam objek pendua dan mengemaskan garisan dan lengkok yang bertindih, untuk lukisan yang tiba penuh dengan garisan berganda. `Select objects to clean up`, {{key:Enter}}, kemudian {{key:Enter}} sekali lagi untuk membersihkan dengan tetapan yang ditunjukkan, atau tukar satu dahulu:

- `Tolerance`: sejauh mana dua koordinat mesti dekat untuk dikira sama (0.000001 pada permulaan; 0 bermaksud tepat sama).
- `Ignore`: sifat yang mungkin berbeza antara dua objek yang sebaliknya sama. Taip nama untuk menukarnya: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, atau `None` / `All`. {{key:Enter}} apabila selesai.
- `Overlap`: hidup atau mati. Dihidupkan, garisan sepanjang satu garisan lurus yang bertindih menjadi satu garisan (garisan yang terletak di dalam garisan lain hanya dipadam), dan lengkok pada satu bulatan yang bertindih menjadi satu lengkok; lengkok yang menutup satu pusingan penuh menjadi bulatan, dan lengkok yang terletak pada bulatan dipadam.
- `Ends`: hidup atau mati. Dihidupkan, garisan sepanjang satu garisan lurus dan lengkok pada satu bulatan yang hanya bersentuh hujung ke hujung menjadi satu kepingan.

Setiap jenis objek diperiksa untuk pendua: dua objek ialah pendua apabila geometrinya sama dalam toleransi dan lapisan, warna, jenis garisan, skala jenis garisan, ketebalan garisan, ketebalan, ketelusan dan ketinggian mereka sepadan (tolak yang anda abaikan). Garisan dan polygaris terbuka juga sepadan apabila dilukis dari arah sebaliknya. Objek pertama dalam susunan lukis kekal dan mengekalkan sifatnya sendiri. Arahan melaporkan berapa objek yang diperiksa dan dipadam: pendua, kepingan bertindih yang digabungkan, kepingan yang dicantum hujung ke hujung. Satu {{cmd:UNDO}} membatalkan semuanya. Tetapan kekal sehingga anda menutup tetingkap lukisan.

Ia membiarkan: objek pada lapisan terkunci dan objek tersembunyi. Ia tidak menggabungkan garisan dengan ketinggian (Z) (pendua tepat bagi mereka tetap dipadam), dan ia tidak menyentuh segmen dalam polygaris (mereka tidak dinipiskan), garisan yang terletak pada segmen polygaris, dan polygaris tertutup yang dilukis dari arah sebaliknya.

### DRAWORDER

Menukar objek mana yang dilukis di hadapan. `Select objects to re-order`, {{key:Enter}}, kemudian `Above objects`, `Under objects`, `Front` atau `Back` ({{key:Enter}} = `Back`). `Above objects` dan `Under objects` meminta objek rujukan: pilihan pergi tepat di hadapan yang paling hadapan daripadanya, atau tepat di belakang yang paling belakang. Objek yang dipilih mengekalkan susunan mereka sendiri di antara mereka. Satu langkah buat asal. Susunan disimpan bersama lukisan dalam DWG dan DXF, di mana ia ialah susunan objek ditulis.

Pada skrin setiap objek dilukis mengikut susunan lukisan, seperti program lain yang membuka fail itu melukisnya: hatch pepejal, polygaris lebar atau topeng teks menutup garisan dan teks di belakangnya, dan apa yang berada di hadapannya menutupnya. Di tempat garisan merentasi teks, kedua-duanya kelihatan. Gambar dan halaman PDF yang dilampirkan kekal di bawah garisan. Dalam lukisan yang sangat besar yang isian dan garisannya bertindih dan bergilir lebih daripada 256 kali, 256 pertama mengekalkan susunan mereka dan selebihnya melukis isian mereka di bawah garisan, supaya lukisan semula kekal pantas.

### TEXTTOFRONT

Membawa teks, dimensi dan petunjuk ke hadapan segala-galanya yang lain dalam ruang terbuka: `Text`, `Dimensions`, `Leaders` atau `All` ({{key:Enter}} = `All`). Satu langkah buat asal. Ia memberitahu begitu apabila tiada apa-apa, atau apabila ia sudah di hadapan.

### HATCHTOBACK

Menghantar setiap hatch ruang terbuka ke belakang segala-galanya yang lain, supaya isian berhenti menutup garisan dan teks dalam fail yang disimpan. Tiada prompt. Satu langkah buat asal.

### ISOLATEOBJECTS

Nama pendek: `ISOLATE`. Menunjukkan hanya objek yang dipilih: segala yang lain dalam ruang terbuka hilang daripada pandangan sehingga {{cmd:UNISOLATEOBJECTS}}. Tidak seperti {{cmd:LAYISO}}, ia berfungsi pada objek yang anda pilih, tanpa mengira lapisannya, dan tidak menukar mana-mana lapisan. Objek tersembunyi tidak dilukis, tidak dipilih, tidak di-snap, tidak di-zum kepada dan tidak dicetak, dan arahan yang mengambil `ALL` melangkaunya. Apa yang anda lukis semasa objek diasingkan ditunjukkan seperti biasa.

Ini hanya untuk sesi: tiada apa tentangnya disimpan bersama lukisan, ia bukan langkah buat asal, dan membuka semula lukisan menunjukkan segalanya. Semasa objek tersembunyi, bar status menunjukkan butang dengan bilangannya; klik untuk menunjukkannya semula.

### HIDEOBJECTS

Menyembunyikan objek yang dipilih sehingga {{cmd:UNISOLATEOBJECTS}}. Peraturan yang sama seperti {{cmd:ISOLATEOBJECTS}}: untuk sesi sahaja, tidak disimpan, bukan langkah buat asal.

### UNISOLATEOBJECTS

Nama pendek: `UNISOLATE`, `UNHIDE`. Menunjukkan semula setiap objek yang disembunyikan oleh {{cmd:ISOLATEOBJECTS}} atau {{cmd:HIDEOBJECTS}}, dan memberitahu berapa yang kembali.

### LAYLOCKFADE

Menetapkan rupa objek pada lapisan terkunci dan sama ada klik sampai kepadanya. Ia menyatakan keadaan semasa, kemudian menerima:

- nombor dari 0 hingga 90: jumlah pudar dalam peratus (50 pada permulaan). 0 mematikan pudar.
- `ON` atau `OFF`: pudar hidup atau mati, dengan mengekalkan jumlahnya.
- `Pick`, kemudian `Yes` atau `No`: bolehkah klik memilih objek pada lapisan terkunci semasa tiada arahan berjalan? `No` (lalai): ia tidak boleh dipilih sama sekali. `Yes`: klik atau tetingkap memilihnya supaya {{ui:Properties}} boleh menunjukkannya; ia masih tidak boleh diubah, dan gesaan `Select objects` arahan tidak pernah mengambilnya.

Snap objek mencari objek pada lapisan terkunci dengan cara mana pun. Plot tidak pernah dipudarkan. Kedua-dua tetapan itu milik anda, bukan milik lukisan, dan juga terdapat dalam {{ui:Settings}} di bawah {{ui:Locked layers}}.

### BURST

Memecahkan rujukan blok dan mengekalkan apa yang dikatakan atributnya. `Select block references to burst`, {{key:Enter}}: setiap rujukan digantikan dengan objek blok, dan setiap nilai atribut yang kelihatan menjadi teks biasa pada lapisan atribut itu sendiri (atribut pada lapisan 0 jatuh pada lapisan rujukan, seperti objek blok yang lain pada lapisan 0). Atribut yang tidak kelihatan digugurkan. Blok di dalam blok kekal sebagai rujukan blok. Satu langkah buat asal; ia melaporkan rujukan yang dipecahkan dan nilai atribut yang menjadi teks.

Ia menolak lukisan dipautkan mengikut nama (ikat dahulu, atau salin daripadanya dengan {{cmd:NCOPY}}), dan membiarkan objek lain yang dipilih. Untuk rujukan blok {{cmd:EXPLODE}} memberikan objek yang sama; {{cmd:BURST}} hanya mengambil rujukan blok dan mengira teks atribut.

### TXT2MTXT

Nama pendek: `T2M`. Mencantumkan teks satu baris menjadi satu teks perenggan. `Select single-line text to join`, {{key:Enter}}, kemudian `Paragraph` (baris digabungkan dan dibungkus mengikut lebar baris terlebar) atau `Lines` (setiap teks kekal sebagai baris sendiri); {{key:Enter}} mengambil yang digunakan terakhir. Baris disusun dari atas ke bawah, kemudian kiri ke kanan, sepanjang arah teks teratas. Perenggan itu tergantung dari penjuru kiri atas teks teratas dan mengambil ketinggian, putaran, gaya, lapisan dan warnanya. Satu langkah buat asal.

Teks yang sudah berupa teks perenggan, teks kosong dan objek lain dalam pilihan dibiarkan, dan arahan memberitahu berapa banyak.

### NCOPY

Menyalin objek daripada rujukan blok atau lukisan dipautkan ke dalam lukisan, tanpa memecahkan apa-apa. `Pick an object inside a block reference or a linked drawing`: objek yang paling dekat dengan pilihan disalin di tempat ia kelihatan, walau berapa dalam blok ia berada; pilih lebih banyak, kemudian {{key:Enter}}. Seterusnya `Base point to move the copies`: {{key:Enter}} membiarkannya di tempat, atau beri titik asas dan titik kedua. Keseluruhan arahan ialah satu langkah buat asal.

Salinan mengambil lapisan tempat ia kelihatan: objek pada lapisan 0 di dalam blok jatuh pada lapisan rujukan yang didudukinya, dan warna ByBlock menjadi warna rujukan itu. Daripada lukisan dipautkan, lapisan `Plan|Walls` menjadi `Plan$0$Walls` (nama yang diberikan oleh pautan), dibuat dengan warna, jenis garisan dan ketebalan garisan lapisan yang dipautkan. Nilai atribut disalin sebagai teks. Rujukan blok pada lapisan terkunci tidak boleh dipilih.

### FLATTEN

Menetapkan ketinggian (Z) dan ketebalan objek yang dipilih kepada 0. `Select objects to flatten`, {{key:Enter}}. Ia juga meratakan objek di dalam takrifan blok yang digunakan pilihan (dan blok di dalamnya), supaya setiap rujukan kepada blok itu berubah; lukisan dipautkan dibiarkan seperti sedia ada. Satu langkah buat asal; ia melaporkan berapa objek yang berubah, dan memberitahu begitu apabila tiada satu pun ada ketinggian atau ketebalan.

Apa yang CadCraft simpan tentang dimensi ketiga dalam lukisan 2D ialah: ketinggian pada bulatan, lengkok, elips, titik, teks, rujukan blok, hatch, petunjuk dan polygaris (ketinggian mereka), ketinggian di setiap hujung garisan, dan ketebalan pada garisan, bulatan, lengkok, polygaris, titik dan teks, seperti yang ada dalam fail. {{cmd:FLATTEN}} membersihkan tepat perkara itu sahaja. Ia tidak menyentuh model 3D pada tab 3D, muka 3D atau pepejal, dan objek yang dilukis dalam satah condong sudah dibawa ke dalam satah lukisan apabila fail dibuka.

### BREAKLINE

Melukis garisan dengan simbol putus, untuk pandangan yang dipotong pendek. Ia menyatakan saiz dan lanjutan semasa, kemudian `First point of the break line` (atau `Size` / `Extension` untuk menukarnya dahulu), `Second point`, dan `Where the break symbol sits`: klik sepanjang garisan, atau {{key:Enter}} untuk tengah. Hasilnya ialah satu polygaris pada lapisan semasa: garisan, melepasi setiap titik dengan lanjutan, dengan coretan berbentuk Z setinggi saiz dan separuh panjangnya.

`Size` dan `Extension` diingati sebagai tetapan anda (saiz bermula pada dua kali ketinggian teks dimensi didarab skala dimensi; lanjutan pada separuh saiz). {{key:Enter}} mengulang arahan.

### AUDIT

Memeriksa lukisan yang dibuka untuk kerosakan dan membaikinya. {{cmd:AUDIT}} melihat setiap objek dalam model, pada helaian dan di dalam blok, dan jadual lapisan, dan menyenaraikan apa yang dijumpai mengikut jenis:

- nombor yang tidak terhingga atau terlalu besar secara tidak masuk akal;
- objek tanpa saiz: garisan tanpa panjang, bulatan tanpa jejari, polygaris dengan satu tempat, teks tanpa huruf atau ketinggian, rujukan blok dengan skala sifar;
- objek pada lapisan yang tiada dalam lukisan; rujukan kepada blok yang tiada; nama gaya teks dan dimensi serta nama jenis garisan yang tiada dalam lukisan;
- blok yang mengandungi dirinya, secara langsung atau melalui blok lain;
- objek yang berkongsi id, kunci atau pengendali fail yang sama;
- dimensi tanpa titik yang diukur daripadanya, dan hatch yang sempadannya bukan garis luar tertutup.

Kemudian ia bertanya `Fix them? [Yes/No]`. `No` tidak mengubah apa-apa. `Yes` membaiki semuanya dalam satu langkah buat asal: apa yang tidak dapat dilukis dibuang (nombor buruk, tiada saiz, blok yang hilang, dimensi rosak, hatch tanpa sempadan yang boleh digunakan, rujukan yang menutup bulatan blok); lapisan yang hilang dibuat; nama gaya dan jenis garisan yang tidak diketahui kembali kepada lalai; kunci yang dikongsi digantikan. Ia mencetak berapa objek dibuang dan berapa yang dibaiki. Penemuan yang sama muncul dalam panel Problems, setiap satu dengan {{ui:Repair}} sendiri.

Ia tidak menolak apa-apa, tetapi hanya menyemak apa yang CadCraft sendiri lukis: data yang disimpan untuk program lain (pepejal 3D, objek OLE) tidak dibuka.

### RECOVER

Membuka DXF atau DWG yang rosak. {{cmd:RECOVER}} meminta fail, membaca apa yang boleh dibaca dan bukannya menolak fail, menyenaraikan apa yang dilangkau atau dianggap, kemudian menyemak dan membaiki lukisan seperti {{cmd:AUDIT}} dengan `Yes`.

- DXF: baris yang bukan sebahagian daripada pasangan kod dan nilai dilangkau sehingga pasangan itu sejajar semula; bahagian tanpa penamat ditutup; fail yang terpotong dibaca sehingga tempat terpotong; DXF binari yang terpotong dibaca sehingga nilai penuh terakhirnya. Apabila bahagian, blok atau objek masih tidak dapat dibaca, ia ditinggalkan dan dinamakan, dan pembacaan diteruskan melepasinya.
- DWG: objek yang gagal semakannya atau tidak dapat dinyahkod ditinggalkan, dan senarai objek yang hilang dibina semula dengan berjalan melalui data objek.

Fail pada cakera tidak diubah. Lukisan yang dipulihkan dibuka tanpa disimpan: simpan dengan nama baharu. Fail yang tidak dapat dibaca langsung ditolak, dengan sebabnya.

### LEGACYTEXT

Menukar teks yang ditaip dengan fon Vietnam 8-bit lama kepada Unicode. Nama pendek `TEXTTOUNICODE` dan `VNTEXT`.

Lukisan Vietnam yang lebih lama menyimpan teksnya sebagai aksara Barat yang hanya fon menukarnya kepada Vietnam: teks TCVN3 dalam fon ABC (`.VnTime`, `.VnArial`, dan fon huruf besar yang namanya berakhir dengan `H`), dan teks VNI dalam fon VNI (`VNI-Times`). CadCraft menunjukkan teks sebegitu seperti yang dibacanya sebaik sahaja lukisan dibuka, mengikut fon gaya teksnya, objeknya, atau satu larian dalam teks perenggan; fail masih mengandungi aksara lama.

{{cmd:LEGACYTEXT}} memberitahu berapa banyak teks yang dijumpainya dalam setiap pengekodan dan bertanya `Convert … to Unicode?`. `Yes` menulis semula setiap satu (model, helaian, blok, nilai dan takrifan atribut) dan memberi gaya teks fon Unicode (Times New Roman, Arial atau Courier New mengikut jenis fon lama), dalam satu langkah buat asal. Pemformatan dalam teks perenggan dikekalkan.

Apabila tiada teks menggunakan fon yang diketahui (gaya yang kehilangan nama fonnya), ia bertanya `Read selected texts as [Tcvn3/Vni/None]`: pilih pengekodan dan pilih teks. Teks yang sudah Unicode dibiarkan. Gantian teks dimensi dan teks multipetunjuk tidak ditukar.
