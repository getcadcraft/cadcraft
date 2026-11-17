---
title: Referensi perintah
summary: Setiap perintah di aplikasi menggambar CadCraft, dengan aliasnya, pertanyaan yang diajukannya, opsi, dan nilai bawaannya.
keywords: perintah, alias, daftar perintah, luas, keliling, measuregeom, garis, pline, lingkaran, busur, pangkas, offset, dimlinear, blok, sisipkan, layout, plot, zoom, bantuan, copyclip, cutclip, pasteclip, pasteorig, copybase, duplikat, selectall
from: 7db2646b
---

Ketik nama perintah atau alias lalu tekan {{key:Enter}} atau {{key:Space}}. Huruf besar atau kecil sama saja, dan `_`, `-`, `.` atau `'` di awal diabaikan. Ketik `HELP` (atau `?`) untuk mencetak daftar singkat setiap perintah di riwayat baris perintah; tekan {{key:F1}} untuk bantuan ini.

Cara membaca prompt: opsi berada di dalam kurung siku, dan Anda memilih salah satunya dengan mengetik huruf kapitalnya (`D` untuk Diameter). Nilai bawaan berada di dalam tanda kurung sudut; tekan {{key:Enter}} untuk menerimanya. Jika diminta sebuah titik, Anda bisa mengklik atau mengetik salah satu format di [Entri koordinat dan jarak](topic:coordinate-entry). Jika diminta sebuah jarak, Anda bisa mengetik angka atau mengklik dua titik.

Menekan {{key:Enter}} saat sebuah titik atau objek diperlukan, dan tidak ada nilai bawaannya, mengakhiri perintah. {{key:Esc}} membatalkannya. Apa pun yang dilakukan sebuah perintah adalah satu langkah urungkan.

## Gambar

### LINE

Alias: `L`. Segmen lurus, masing-masing objek sendiri.

- `Specify first point` (Enter: mulai dari titik terakhir yang Anda berikan)
- `Specify next point [Undo]`, diulang. Setelah dua segmen: `[Undo/Close]`.
- `U` mengambil kembali segmen terakhir, `C` menutup ke titik pertama dan selesai. Enter mengakhiri.

### PLINE

Alias: `PL`. Satu polyline dari segmen garis dan busur.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close setelah ada dua segmen)
- `A` beralih ke busur: `Specify endpoint of arc [Line/CLose/Undo]`. Setiap busur bersambung secara singgung dengan segmen sebelumnya. `L` kembali ke garis, `CL` menutup dengan busur.
- Enter mengakhiri; polyline tetap terbuka.

### CIRCLE

Alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` meminta `Specify diameter of circle`.
- `2P`: dua ujung sebuah diameter. `3P`: tiga titik pada lingkaran.
- `T` (juga perintah `TTR`, dan {{ui:Gambar}} › {{ui:Lainnya}} › {{ui:Lingkaran: Singgung, Singgung, Radius}}): `Specify point on object for first tangent of circle`, lalu yang kedua, lalu radiusnya (Enter: yang terakhir). Lingkaran menyinggung kedua objek (garis, busur, lingkaran, segmen polyline, juga di dalam blok); dari lingkaran yang memenuhi, yang menyinggung paling dekat dengan pilihan Anda. "Circle does not exist" saat tidak ada yang cocok.
- `TTT` (atau {{ui:Gambar}} › {{ui:Lainnya}} › {{ui:Lingkaran: Singgung, Singgung, Singgung}}): tiga objek; lingkaran yang menyinggung ketiganya, paling dekat dengan pilihan Anda (tiga garis menghasilkan lingkaran dalam atau luar, tergantung di mana Anda memilih).

### ARC

Alias: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: busur melalui tiga titik.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Busur berjalan berlawanan arah jarum jam dari awal ke akhir.

### RECTANG

Alias: `REC`, `RECTANGLE`. Polyline tertutup.

- `Specify first corner point`, `Specify other corner point`. Ketik `@width,height` untuk sudut kedua.

### POLYGON

Alias: `POL`. Poligon beraturan sebagai polyline tertutup.

- `Enter number of sides <4>` (3 sampai 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klik atau ketik sebuah titik; jaraknya menentukan ukuran dan arahnya memutar poligon.

### ELLIPSE

Alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, lalu jarak ke sumbu lainnya.
- `I` (`Isocircle`, hanya saat {{cmd:ISODRAFT}} aktif): pusat, lalu radius atau `Diameter`: elips yang ditampilkan lingkaran pada bidang isometrik saat ini.

### HATCH

Alias: `H`, `BH`, `BHATCH`; atau {{ui:Hatch}} di bilah alat. Mencetak pola, skala, dan sudut saat ini lebih dulu.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, diulang (`Undo` setelah ada satu area): setiap klik menambahkan area tertutup di sekitarnya, dengan bentuk tertutup di dalamnya sebagai pulau. Enter membuat satu hatch dari semuanya.
- `S`: `Select closed objects` (polyline tertutup, lingkaran, elips tertutup).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): isiannya berupa gradasi, bukan pola. Lihat {{cmd:GRADIENT}} untuk pertanyaannya.

Lihat [Hatch dan area isian](topic:hatch).

### GRADIENT

Alias: `GD`. Mengisi area dengan gradasi satu atau dua warna. Pertama ia menanyakan gradasinya, lalu berjalan seperti {{cmd:HATCH}} (`Pick internal point`, `S` untuk objek tertutup, {{key:Enter}} untuk selesai).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, diulang; setiap kali mencetak gradasi seperti sekarang.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, atau salah satunya dibalik (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Huruf pertama sudah cukup.
- `O`: satu warna, lalu tintanya dari 0 sampai 1 (0 menggelapkannya menjadi hitam, 0,5 adalah warnanya sendiri, 1 memutihkannya menjadi putih). `TW`: warna pertama dan kedua. Warna berupa angka dari 1 sampai 255, tiga angka seperti `255,128,0`, atau `#rrggbb`.
- `A`: sudut tempat gradasi berjalan. `C`: centered Ya atau Tidak (Tidak memindahkan titik tengah gradasi ke satu sisi).
- Ia menolak warna atau jenis yang tidak dikenal, dan tinta di luar 0 sampai 1.

{{cmd:HATCHEDIT}} `G` dan Properti (Gradient) mengubah gradasi nanti, atau mengubah hatch apa pun menjadi gradasi. Gradasi digambar di layar dan dicetak. DWG 2004 dan yang lebih baru menyimpannya sebagai hatch gradasi yang sebenarnya; DXF 2000 dan DWG 2000 menyimpannya untuk CadCraft, dan program lain melihatnya sebagai isian solid dengan warna pertama.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Membuat kembali batas dari hatch yang kehilangannya. `Select hatches` (atau pilih dulu), lalu `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Setiap loop hatch menjadi polyline tertutup di layer hatch; polyline baru tetap terpilih. Tepi melengkung kembali sebagai potongan lurus pendek yang dipertahankan hatch.
- Dengan Yes, hatch mengikuti batas barunya, seperti hatch yang dibuat dengan {{cmd:HATCH}}. Satu langkah urungkan.
- Ia memberi tahu jika tidak ada hatch yang dipilih.

### POINT

Alias: `PO`; atau {{ui:Gambar}} › {{ui:Lainnya}} › {{ui:Titik}}. Objek titik, satu per klik, sampai Enter.

- `Specify a point`

### XLINE

Alias: `XL`; atau {{ui:Gambar}} › {{ui:Lainnya}} › {{ui:Garis konstruksi}}. Garis konstruksi, tak berujung ke kedua arah. Lihat [Garis konstruksi dan sinar](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, lalu `Specify through point` untuk setiap garis, sampai Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` meminta `Select a line object` lebih dulu.
- `B`: `Specify angle vertex point`, `Specify angle start point`, lalu `Specify angle end point` untuk setiap garis.
- `O`: `Specify offset distance [Through] <Through>`, lalu `Select a line object` dan `Specify side to offset` (atau `Specify through point`) untuk setiap garis.

### RAY

Tidak ada alias; atau {{ui:Gambar}} › {{ui:Lainnya}} › {{ui:Sinar}}. `Specify start point`, lalu `Specify through point` untuk setiap sinar, sampai Enter.

### TEXT

Alias: `DT`, `DTEXT`; atau {{ui:Teks}} di bilah alat. Teks satu baris; setiap baris adalah objek sendiri.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, lalu `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, diulang: setiap Enter memulai baris berikutnya di bawahnya. Enter pada baris kosong mengakhiri. {{key:Space}} mengetik spasi di sini.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} menaruh tanda pada garis, busur, lingkaran, polyline, spline, atau elips yang membaginya menjadi bagian yang sama. Pilih objeknya, lalu berikan jumlah bagian (2 sampai 32767). Objek terbuka mendapat satu tanda lebih sedikit daripada jumlah bagian; objek tertutup mendapat tanda juga di titik awalnya. Objek itu sendiri tidak dipotong. Tandanya berupa titik; `Block` meminta blok dari gambar ini sebagai gantinya dan apakah ia berputar mengikuti objek. Panjang sepanjang spline dan elips diukur sepanjang tali pendek. Ia menolak teks, hatch, dan objek lain yang tidak punya panjang.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} menaruh tanda setiap panjang tertentu di sepanjang garis, busur, lingkaran, polyline, spline, atau elips, dihitung dari ujung yang paling dekat dengan tempat Anda memilih (objek tertutup: dari titik awalnya). Berikan panjangnya dengan mengetiknya atau dengan dua titik. Ujung jauh objek terbuka tidak mendapat tanda. `Block` menempatkan blok di setiap tanda, bukan titik. Ia menolak panjang 0, panjang yang lebih panjang dari objek, dan panjang yang membuat lebih dari 32767 tanda.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} membuat polyline tertutup di sekeliling area yang memuat titik yang Anda pilih, dari garis, busur, lingkaran, polyline, dan kurva apa pun yang membatasinya di layar. Potongan yang berada pada busur atau lingkaran kembali sebagai segmen busur; potongan elips dan spline kembali sebagai segmen lurus pendek. Dengan `Islands` aktif (pengaturan awal), setiap area tertutup di dalamnya juga mendapat polyline sendiri. Terus pilih titik; Enter mengakhiri. Objek yang membatasi area dibiarkan apa adanya. Ia memberi tahu jika tidak ada area tertutup yang memuat titik itu.

### BLEND

{{cmd:BLEND}} menggambar spline di antara ujung dua kurva terbuka. Pilih setiap kurva dekat ujung yang akan disambung. `CONtinuity` memilih `Tangent` (spline meninggalkan dan tiba sepanjang kedua kurva) atau `Smooth` (juga mengikuti cara keduanya melengkung di ujungnya); pilihan itu diingat untuk sesi ini. Kedua kurva tidak diubah. Ia menolak objek tertutup dan dua ujung yang sudah bertemu.

### REGION

Alias: `REG`. {{cmd:REGION}} mengubah objek tertutup menjadi region: area datar yang bisa Anda gabungkan, potong, dan ukur. Pilih lingkaran, polyline tertutup, elips tertutup, atau spline tertutup, atau garis, busur, dan polyline terbuka yang menutup satu loop ujung ke ujung; setiap loop menjadi satu region dan menggantikan objek asalnya. Busur tetap busur; elips dan spline menjadi segmen lurus pendek. Yang tidak tertutup dan tidak menutup loop dibiarkan, dan ia menyebutkan jumlahnya. Di gambar, region adalah satu atau beberapa polyline tertutup yang disatukan sebagai grup tanpa nama, sehingga satu klik memilih seluruh region dan salinan adalah region tersendiri; program lain yang membuka file melihat polyline tertutup.

Jika ada region di gambar, {{cmd:UNION}}, {{cmd:SUBTRACT}}, dan {{cmd:INTERSECT}} pada tab 2D bekerja pada region: `UNION` menggabungkan region yang dipilih menjadi satu (region yang terpisah menjadi satu region dengan beberapa garis luar), `SUBTRACT` meminta region yang akan dikurangi lalu yang akan diambil (lubang tetap bagian dari region), `INTERSECT` menyimpan area yang dimiliki bersama. Masing-masing menyebutkan area hasilnya dan merupakan satu langkah urungkan. Ia menolak jika tidak ada yang tersisa atau tidak ada yang dimiliki bersama. Pada tab 3D, dan di gambar tanpa region, perintah yang sama bekerja pada solid seperti sebelumnya.

## Ubah

Alias: `MT`, `T`; atau {{ui:Paragraf}} di bilah alat. Teks paragraf yang membungkus pada lebar tertentu, diketik di tempat.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: lebar di antara dua sudut adalah tempat teks dibungkus. `H` meminta `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` dan melewati sudut kedua.
- Lalu sebuah kotak terbuka di gambar: ketik, {{key:Enter}} untuk paragraf baru, {{key:Mod+Enter}} atau klik di luar untuk selesai, {{key:Esc}} untuk membatalkan. Barnya mengatur tinggi, spasi baris, lebar, dan perataan. Lihat [Tambahkan teks dan label](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; atau klik dua kali sebuah teks. `Select a text to edit`, diulang sampai {{key:Enter}}: setiap teks terbuka di kotak yang sama. Jika dimulai pada teks yang dipilih atau yang diklik dua kali, ia mengedit teks itu saja dan berakhir.

### ERASE

Alias: `E`, `DELETE`; atau tekan {{key:Delete}} saat objek dipilih.

- `Select objects` (dilewati jika objek sudah dipilih)

### MOVE

Alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, diketik sebagai `dx,dy`.

### COPY

Alias: `CO`, `CP`. Menyalin sebanyak titik yang Anda berikan.

`Array` pada prompt titik kedua membuat satu baris sekaligus: berikan jumlah item (yang asli dihitung satu), lalu titik tempat salinan pertama diletakkan; yang lain mengikuti dengan jarak yang sama. `Fit` menjadikan titik itu tempat salinan terakhir sebagai gantinya, dengan yang lain tersebar merata di antaranya.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, diulang sampai Enter. `U` mengambil kembali salinan terakhir.

### ROTATE

Alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: derajat, positif berlawanan arah jarum jam; atau klik sebuah titik untuk memutar ke arahnya.

### SCALE

Alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: ketik faktor seperti `0.5` atau `2`. Titik yang diklik memberikan jaraknya dari titik dasar sebagai faktor.

### MIRROR

Alias: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; atau {{ui:Ubah}} › {{ui:Lainnya}} › {{ui:Sejajarkan}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Dengan dua pasang: `Scale objects based on alignment points? [Yes/No] <N>`

Lihat [Sejajarkan objek](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (atau pilihan), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` meminta titiknya. Pilihan tetap.

### DISTRIBUTE

- `Select objects` (minimal tiga), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Dua objek terluar tetap; pilihan tetap.

### ALIGNPANEL

Alias: `ALP`; atau {{ui:Ubah}} › {{ui:Lainnya}} › {{ui:Sejajarkan dan distribusikan}}. Membuka panel yang menjalankan ALIGNTO dan DISTRIBUTE dengan klik.

### LASER

Alias: `LASERCUT`; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Laser…}}. Membuka panel Laser di atas gambar: apa yang dilakukan setiap layer (potong, goresan, ukir, isi, gambar), pratinjau, G-code GRBL untuk disimpan, dan pembingkaian serta pengiriman lewat Web Serial. Lihat [Kirim gambar ke laser](topic:laser-cutting).

### STRETCH

Alias: `S`; atau {{ui:Regangkan}}. `Select objects to stretch`: seret jendela silang (atau ketik `C`) di atas ujung untuk memindahkan. `Specify base point [Displacement]`, `Specify second point`. Titik di dalam jendela bergerak: ujung garis, simpul polyline (segmen busur mempertahankan tingginya), titik dimensi; lingkaran, elips, teks, titik, dan blok bergerak utuh jika pusat atau titik sisipnya berada di dalam. Pilihan yang dibuat sebelum perintah mempertahankan jendela silang (dan lasso) yang membuatnya, sehingga keduanya teregang dengan cara yang sama. Tanpa jendela, objek bergerak utuh.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; atau {{ui:Array}}. `Select objects`, lalu `Enter array type [Rectangular/POlar] <Rectangular>` (hanya ARRAY).

- Rectangular dimulai dari 4 kolom × 3 baris, berjarak 1,5 kali ukuran objek, ditampilkan sebagai pratinjau. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` meminta kolom dan baris, `S` jarak antara kolom dan antara baris (negatif berarti ke kiri atau ke bawah), `COL` dan `R` masing-masing satu arah.
- Polar meminta `Specify center point of array`, dimulai dari 6 item melingkar penuh, diputar. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` item, `F` sudut yang diisi (+ berlawanan arah jarum jam, − searah jarum jam), `ROT` Yes atau No.
- {{key:Enter}} (eXit) membuat salinan, sebagai objek biasa. Satu langkah urungkan.
- `AS` (ASsociative) beralih antara salinan biasa dan array yang tetap bisa diedit: satu objek yang Anda ubah nanti dengan {{cmd:ARRAYEDIT}}, lewat grip-nya atau di Properti. Pilihannya diingat ({{cmd:ARRAYASSOCIATIVITY}}); awalnya berupa salinan biasa.

### ARRAYPATH

Salinan sepanjang kurva. `Select objects`, lalu `Select path curve`: garis, busur, lingkaran, elips, polyline, atau spline (bukan salah satu objek yang sedang dijadikan array). Jalur dimulai dari ujungnya yang lebih dekat dengan objek, dan item pertama adalah objek di tempat asalnya.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, dengan pratinjau. `M`: `Divide` menyebarkan item merata di seluruh jalur, `Measure` menaruh satu setiap jarak tertentu di sepanjangnya. `I`: jumlah item (dengan Measure, 0 berarti sebanyak yang muat; angka melebihi ujung jalur dibatasi pada yang muat). `SP`: jarak antar item sepanjang jalur (beralih ke Measure). `AL`: Yes memutar setiap item agar mengikuti jalur, No membiarkannya tegak.
- `AS` seperti di {{cmd:ARRAY}}. Jika aktif, array menyimpan salinan bentuk jalurnya sendiri: mengedit kurva jalur setelahnya tidak memindahkan item.
- Ia menolak jalur yang bukan kurva, dan satu item.

### ARRAYEDIT

Mengubah array yang dibuat dengan ASsociative. `Select array` (atau pilih dulu). Ia mencetak kondisi array sekarang, lalu bertanya sampai {{key:Enter}}:

- Rectangular: `COL` kolom dan jaraknya, `R` baris dan jaraknya, `A` sudut tempat kolom berjalan.
- Polar: `I` item, `F` sudut isian, `ROT` putar item Yes atau No.
- Path: `M` Divide atau Measure, `I` item, `SP` jarak, `AL` sejajar dengan jalur.
- `S` (Source) membuka objek yang diulang array, sendiri-sendiri, seperti editor blok. Gambar dan edit di sana; {{cmd:ARRAYCLOSE}} menyimpan atau membuang, dan setiap item mengikuti.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, lalu klik item yang akan diganti, {{key:Enter}}. Item itu menampilkan penggantinya; objek pengganti keluar dari gambar dan hidup di dalam array. `RES` (RESet) menampilkan objek sumber di setiap item lagi.
- Setiap perubahan adalah satu langkah urungkan. Ia menolak salinan biasa, referensi blok biasa, dan array di layer terkunci.

Angka yang sama ada di Properti di bawah Array, dan array memiliki grip: titik dasarnya memindahkannya, grip di item kedua mengatur jaraknya, grip setelah item terakhir mengatur jumlahnya (polar: item kedua mengatur berapa item, item terakhir mengatur sudut isian). {{cmd:EXPLODE}} mengubah array kembali menjadi salinan biasa.

### ARRAYCLOSE

Mengakhiri {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Ia memberi tahu jika tidak ada objek sumber array yang terbuka. {{cmd:BCLOSE}} melakukan hal yang sama.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Mengatur apa yang menjadi awal {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR, dan {{cmd:ARRAYPATH}}; opsi `AS` mereka mengubah pengaturan yang sama. Diingat di peramban ini.

### OFFSET

Alias: `O`. Garis, busur, lingkaran, dan polyline.

Jika polyline bergerak keluar dan segmen lurusnya terpisah di sudut, {{cmd:OFFSETGAPTYPE}} menentukan cara celahnya ditutup.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, lalu `Specify point on side to offset` (atau, dengan Through, `Specify through point`), diulang sampai Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: cara {{cmd:OFFSET}} menutup celah di sudut luar polyline. `0` memperpanjang segmen sampai bertemu (pengaturan awal), `1` menyambungkannya dengan busur di sekitar sudut lama, `2` dengan potongan lurus. Sudut dalam dan segmen busur tidak terpengaruh. Disimpan untuk sesi ini.

### EXTRIM

{{cmd:EXTRIM}} memangkas semua yang ada di satu sisi sebuah tepi. Pilih tepi pemotong (garis, busur, lingkaran, polyline, elips, spline, atau garis konstruksi), lalu pilih sebuah titik di sisi yang akan dibersihkan: setiap garis, busur, lingkaran, polyline, dan garis konstruksi yang memotong tepi itu kehilangan bagiannya di sisi tersebut, mulai dari tepinya. Saat Anda memilih sisinya, bagian yang akan hilang mengikuti penunjuk. Untuk tepi tertutup, sisinya adalah dalam dan luar. Objek yang hanya menyentuh tepi, serta teks, hatch, spline, dan elips yang memotongnya, dibiarkan apa adanya. Satu langkah urungkan.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: cara {{cmd:TRIM}} dan {{cmd:EXTEND}} dimulai. `1` Cepat: setiap objek adalah tepi pemotong atau batas. `0` Standar: mereka meminta tepinya dulu. Juga `(setvar "TRIMEXTENDMODE" 0)` di LISP.

### TRIM

Alias: `TR`. Mencetak `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` lebih dulu. Dalam mode Cepat setiap objek yang terlihat adalah tepi pemotong, dan objek yang tidak tersilang apa pun dihapus; dalam mode Standar ia meminta `Select cutting edges (Enter = every object)` dulu dan hanya memotong di tepi-tepi itu.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, diulang: klik bagian yang akan dihapus (tampil abu-abu dan putus-putus saat penunjuk berhenti di atasnya), seret jalur melewati beberapa bagian (semuanya masuk satu langkah), atau klik dua titik kosong untuk pagar di antaranya. {{key:Shift}} memanjangkan sebagai gantinya. `T` memilih tepi pemotong (mode Standar), `F` meminta titik pagar, `C` dua sudut jendela (bagian yang sebagian berada di dalam ikut), `O` meminta `Enter a trim mode option [Quick/Standard]`, `E` meminta `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` menghapus objek yang Anda pilih, `U` mengurungkan pilihan atau seretan terakhir. Enter mengakhiri. Lihat [Pangkas dan perpanjang](topic:trim-and-extend).

- Klik pada hatch memotong hatch: tepi pemotong membagi area yang berhatch, dan bagian yang Anda klik diambil (tidak ada garis yang tertinggal di tempat semula). Hatch mempertahankan polanya atau gradasinya; hatch yang tadinya tertaut ke batasnya tidak lagi tertaut setelahnya, karena tidak lagi mengisi batas itu. Ia memberi tahu jika tidak ada tepi pemotong yang membagi hatch di sana, jika klik berada di luar hatch, dan jika tidak ada yang tersisa (gunakan {{cmd:ERASE}}). Jalur atau pagar yang diseret tidak memotong hatch.

### EXTEND

Alias: `EX`. Sama dengan TRIM dari arah sebaliknya: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Satu klik memanjangkan ujung terdekatnya sampai batas berikutnya; jalur atau pagar yang diseret memanjangkan setiap objek yang dilintasinya; {{key:Shift}} memangkas. `B` memilih tepi batas (mode Standar). Mode dan Edge dipakai bersama dengan TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Tautkan tampilan panel}}, atau ikon tautan pada tab gambar. `Link the panes' views [ON/OFF]` (Enter beralih ke keadaan lain): saat aktif, geser atau zoom di panel yang aktif menggerakkan setiap panel yang menampilkan jenis ruang yang sama. Lihat [Bagi layar](topic:split-screen).

### OPENIN3D

Tidak ada alias; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Buka di ModelCraft}} tempat aplikasi pemodelan 3D menerima gambar yang diserahkan. Membukanya di sana, di tab baru, sebagai DWG (tidak ada yang diunggah). Jika peramban memblokir tab, ia memberi tahu.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: apa yang digambar saat Anda menekan dan menyeret di tempat kosong. Sama dengan Pengaturan › CadCraft › Seret untuk memilih. Lihat [Pilihan lasso](topic:lasso-selection).

### FILLET

Alias: `F`. Garis, busur, lingkaran, dan polyline. Mencetak `Current settings: Mode = TRIM, Radius = 0` lebih dulu.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` meminta `Specify fillet radius <last>`. `T` meminta `Enter Trim mode option [Trim/No trim]`: dengan No trim, objek tetap apa adanya dan hanya busur yang ditambahkan.
  - `M` membuat perintah berlanjut untuk lebih banyak sudut sampai {{key:Enter}}; `U` mengambil kembali sudut terakhir tanpa keluar dari perintah.
  - `P` meminta `Select 2D polyline [Radius]` dan membulatkan setiap sudut tempat dua segmen lurus bertemu. Fillet yang sudah ada diganti dengan radius baru; radius 0 menghilangkannya. Sudut yang sisinya terlalu pendek untuk radius itu dibiarkan dan dihitung.
- `Select second object or shift-select to apply corner [Radius]`. Tahan {{key:Shift}} saat mengklik untuk sudut tajam, apa pun radiusnya.

Klik setiap objek pada bagian yang ingin Anda simpan. Dua garis yang tidak bertemu akan diperpanjang. Dua garis sejajar mendapat setengah lingkaran melintasi celah, di ujung garis pertama yang paling dekat dengan klik Anda. Lingkaran tidak pernah dipotong. Dua segmen dari satu polyline yang berdampingan mendapat busur di dalam polyline; polyline dan objek lain bekerja jika potongannya jatuh pada segmen pertama atau terakhir polyline.

### CHAMFER

Alias: `CHA`. Garis dan segmen lurus polyline. Mencetak jarak saat ini (atau panjang dan sudut) lebih dulu.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` meminta `Specify first chamfer distance <last>` dan `Specify second chamfer distance <the first>`: yang pertama dipotong dari garis pertama yang Anda pilih, yang kedua dari garis lainnya.
  - `A` meminta `Specify chamfer length on the first line` dan `Specify chamfer angle from the first line`.
  - `E` (mEthod) memilih salah satu dari dua yang digunakan chamfer berikutnya. `T`, `M`, `U`, dan `P` bekerja seperti di {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik membuat sudut tajam.

Jarak yang lebih panjang dari garis ditolak (`Distance is too large.`).

### BREAK dan BREAKATPOINT

Alias: `BR`. `Select object` (tempat Anda klik adalah titik pertama), `Specify second break point [First point]`; `F` meminta `Specify first break point` dan `Specify second break point`. Bagian di antaranya dihapus; pada lingkaran, berlawanan arah jarum jam dari titik pertama. BREAKATPOINT meminta `Specify break point` dan membagi objek menjadi dua di sana (bukan lingkaran).

### LENGTHEN

Alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: sebuah pilihan mencetak `Current length` (dan sudut inklusi busur) lalu bertanya lagi. `DE` meminta `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` menyeret. Lalu `Select an object to change [Undo]`, diulang: ujung yang paling dekat dengan klik bergerak. Garis, busur, dan polyline terbuka.

### JOIN

Alias: `J`. `Select objects to join`. Garis, busur, dan polyline terbuka yang bertemu ujung ke ujung menjadi polyline (tertutup saat rantainya menutup); garis pada satu garis menjadi satu garis; busur pada satu lingkaran menjadi satu busur atau lingkaran. Riwayat menyebutkan berapa objek yang tergabung dan berapa yang tidak.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Select source object`, lalu `Select destination objects [Settings]` dan {{key:Enter}}. Menyalin layer dan warna, dan di antara objek dari jenis yang sama, tinggi dan lebar teks, ukuran dimensi, atau pola hatch. `S` meminta `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, diulang sampai {{key:Enter}}; pilihannya diingat untuk sesi ini.

### EXPLODE

Alias: `X`. Polyline menjadi garis dan busur, referensi blok menjadi objeknya, dimensi menjadi garis, panah, dan teks. Array yang tetap bisa diedit ({{cmd:ARRAYEDIT}}) menjadi salinan biasa dari objeknya.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} memberi objek yang dipilih sebuah nama yang mereka bagi. Pilih objeknya, lalu ketik nama (tanpa spasi; `?` mendaftar grup; Enter membuat grup tanpa nama) dan, untuk grup bernama, deskripsi opsional. Sejak saat itu, klik pada salah satunya, atau jendela yang mengenai salah satunya, memilih semuanya, sehingga mereka bergerak, disalin, dan dihapus bersama; setiap objek tetap objek sendiri. Sebuah objek bisa berada dalam beberapa grup. Salinan seluruh grup adalah grup tanpa nama baru; salinan satu anggota saja bergabung dengan grup. Grup milik ruang tempat mereka dibuat (model atau lembar). Mereka dipertahankan saat Anda menyimpan sebagai DWG atau DXF dan membuka file itu lagi di CadCraft; file DXF 2000 juga membawanya sebagai objek grup untuk program lain, dan grup yang dibuat di program lain dibaca saat DXF atau DWG dibuka.

### UNGROUP

{{cmd:UNGROUP}} memisahkan grup: pilih objek dari grup (setiap grup yang mereka ikuti dipisahkan) atau ketik `Name` dan nama grupnya. Objeknya tetap di gambar. Satu langkah urungkan mengembalikan grupnya.

### GROUPEDIT

{{cmd:GROUPEDIT}} mengubah satu grup. Pilih salah satu objeknya, atau `Name` dan namanya; grup yang sudah dipilih diambil apa adanya. Lalu: `Add` objek (dipilih satu per satu, bukan grup demi grup), `Remove` objek, `REName` grupnya, mengubah `Description`-nya, atau mengatur `Selectable` (apakah klik pada satu objek memilih seluruh grup). `eXit` atau Enter mengakhiri. Grup tanpa objek lagi akan hilang.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: dengan `1` (pengaturan awal) klik atau jendela pada objek yang berkelompok memilih seluruh grupnya; dengan `0` objek tunggal, sehingga Anda bisa mengedit satu anggota. Disimpan untuk sesi ini.

## Papan klip

Papan klip CadCraft sendiri: ia bekerja di dalam satu gambar, antar gambar, dan antar tab CadCraft di peramban ini. Lihat [Salin, tempel, dan duplikat](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, atau {{ui:Salin}} di grup {{ui:Edit}}. Menyalin objek ke papan klip, beserta blok dan layer yang dipakainya. Objek tetap terpilih.

- `Select objects to copy` (dilewati jika objek sudah dipilih)

### CUTCLIP

{{key:Mod+X}}, atau {{ui:Potong}} di menu {{ui:Lainnya}}. Menyalin objek ke papan klip, lalu menghapusnya (satu langkah urungkan).

- `Select objects to cut` (dilewati jika objek sudah dipilih)

### COPYBASE

Menyalin objek ke papan klip dengan titik dasar yang Anda pilih; menempelkannya menempatkan titik itu.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, atau {{ui:Tempel}} di grup {{ui:Edit}}. Salinan mengikuti kursor, tergantung dari sudut kiri-bawah ekstensinya (atau pusatnya, atau titik `COPYBASE`; lihat [Pengaturan CadCraft](topic:settings)).

- `Specify insertion point`

Objek yang ditempel menjadi terpilih. Blok yang sudah dimiliki gambar dengan nama yang sama mempertahankan definisi gambar ini.

Jika area yang disalin di MarkupCraft lebih baru daripada yang disalin CadCraft (dan kurang dari 6 jam), {{key:Mod+V}} dan `PASTECLIP` menempel area itu sebagai gantinya: lihat `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Tempel area yang disalin}} di menu {{ui:Lainnya}}. Menempel area yang disalin dengan {{ui:Salin area}} di MarkupCraft sebagai gambar pada ukuran sebenarnya. Lihat [Gambar dalam gambar](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (hanya jika lembar tidak punya skala gambar): sebuah angka, {{key:Enter}} untuk ukuran kertas, atau `P`, lalu `First point on the pasted area`, `Second point on the pasted area` dan jarak sebenarnya.

### PASTEORIG

{{key:Mod+Shift+V}}, atau {{ui:Tempel di tempat yang sama}} di menu {{ui:Lainnya}}. Menempel pada koordinat tempat objek disalin. Tidak menanyakan apa pun.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, atau {{ui:Duplikat dan pindahkan}} di menu {{ui:Lainnya}}. Salinan objek bergerak mengikuti penunjuk dari tempat ia berada; {{key:Esc}} tidak meninggalkan apa pun. Tidak memakai papan klip.

- `Select objects to duplicate` (dilewati jika objek sudah dipilih)
- `Specify where the copy goes (Esc leaves nothing)`: klik, ketik sebuah titik, `@dx,dy` (dari tempat penunjuk berada), atau jarak menuju kursor.

### SELECT

Menanyakan `Select objects` (dengan setiap opsi di bawah) dan membiarkan pilihan Anda tetap terpilih, untuk perintah berikutnya atau untuk `P` nanti.

### QSELECT

Alias: `QS`. Di peramban, dialog {{ui:Pilih cepat}} (lihat [Pilih objek](topic:select-objects#select-by-a-rule-quick-select)). Tanpa itu, baris perintah menanyakan `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` dan `Enter value`. Yang cocok menjadi pilihan.

### SELECTSIMILAR

Alias: `SIM`. `Select objects [SEttings]` (atau pilihan saat ini): memilih setiap objek dari jenis yang sama dengan layer dan warna yang sama (dan nama blok, pola hatch). `SE` meminta `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, diulang sampai {{key:Enter}}.

### FIND

Tidak ada alias; atau {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Cari dan ganti}}. Di peramban, dialog {{ui:Cari dan ganti}} (lihat [Tambahkan teks dan label](topic:text#find-and-replace-words)). Tanpa itu: `Enter text to find`, lalu `Enter replacement text (Enter: select what is found)`. Mencari di teks, nilai atribut, dan teks dimensi, pada tab yang terbuka atau pada pilihan.

### SELECTALL dan DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) memilih setiap objek yang bisa Anda edit pada tab yang terbuka. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; atau {{key:Esc}}) menghapus pilihan.

## Dimensi

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Jarak horizontal atau vertikal.

- `Specify first extension line origin [Select object]` (Enter atau `S`: `Select object to dimension`, lalu klik garis, busur, lingkaran, atau segmen polyline)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` meminta teks (`<>` adalah nilai yang diukur), `H` dan `V` mengunci arahnya, `R` meminta `Specify angle of dimension line <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. Jarak sebenarnya antara dua titik.

- Titik asal seperti di {{cmd:DIMLINEAR}}, lalu `Specify dimension line location [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Busur: sudutnya. Lingkaran: `Specify second angle endpoint`. Garis: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klik di dalam sudut yang akan diukur.

### DIMRADIUS dan DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, lalu `Specify dimension line location [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Melanjutkan dari dimensi linear atau sejajar terakhir yang dibuat (atau meminta `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, diulang sampai Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Seperti {{cmd:DIMCONTINUE}}, tetapi setiap dimensi dimulai dari titik asal pertama dan ditumpuk lebih jauh ke luar.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specify feature location`, lalu `Specify leader endpoint [Xdatum/Ydatum/Text]`. Menulis seberapa jauh fitur itu dari titik asal UCS sepanjang X atau sepanjang Y, pada leader: leader yang sebagian besar naik atau turun dibaca sebagai X, yang melintang dibaca sebagai Y; `Xdatum` dan `Ydatum` menetapkannya. Atur titik asal lebih dulu dengan {{cmd:UCS}} (tanpanya, titik asalnya adalah 0,0 gambar). Grip memindahkan fitur, titik asal, dan ujung leader, dan nilainya mengikuti. Disimpan sebagai dimensi ordinat yang sebenarnya di DWG dan DXF. Menolak ujung leader yang berada tepat di fiturnya.

### DIMARC

Alias: `DAR`. `Select arc or polyline arc segment`, lalu `Specify arc length dimension location [Text]`. Mengukur sepanjang busur (bukan tali) dan menulis simbol busur sebelum nilainya. Menolak lingkaran penuh, garis, atau segmen lurus polyline. DWG menyimpannya sebagai dimensi panjang busur; DXF menyimpannya sebagai dimensi sudut dengan panjangnya sebagai teks, dan CadCraft membukanya lagi sebagai dimensi panjang busur.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Dimensi radius untuk kurva yang pusatnya jauh atau di luar lembar: garis dimensi dimulai dari titik yang Anda berikan alih-alih dari pusat, dengan patahan di dalamnya, dan tetap menulis radius yang sebenarnya. DWG menyimpannya sebagai dimensi radius patah; DXF menyimpannya sebagai dimensi radius, dan CadCraft membukanya lagi sebagai patah.

### DIMJOGLINE

Alias: `DJL`. `Select dimension to add jog [Remove]`, lalu `Specify jog location (or press Enter)`. Menaruh simbol patah pada garis dimensi linear atau sejajar, untuk menunjukkan jaraknya tidak digambar sesuai skala; nilainya tidak berubah. `Remove` melepasnya. Menolak jenis dimensi lain.

### QDIM

Tidak ada alias. `Select geometry to dimension`, lalu `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Mendimensi beberapa objek sekaligus, dari ujung garis dan segmen polyline, pusat lingkaran dan busur, titik, dan referensi blok. Posisi di atas atau di bawah objek mengukur melintang, yang di samping mengukur ke atas. `Continuous` merangkai titik-titik, `Baseline` mengukur semuanya dari yang pertama, `Staggered` menyusun pasangan bersarang dari tengah ke luar, `Ordinate` memberi setiap titik jaraknya dari datum (`datumPoint` memilih datum baru), `Radius` dan `Diameter` mendimensi setiap lingkaran dan busur yang dipilih. Modenya diingat. Semua yang dibuatnya adalah satu langkah urungkan. Ia memberi tahu jika ada kurang dari dua titik, atau tidak ada busur atau lingkaran untuk Radius dan Diameter.

### DIMBREAK

Alias: `DBREAK`. `Select dimensions to add or remove breaks`, lalu `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` meninggalkan celah pada garis dimensi dan garis perpanjangan di setiap tempat objek lain memotongnya, dan menghitung ulang celah itu saat objek tersebut atau dimensinya bergerak. `Manual` (satu dimensi) meminta dua titik dan meninggalkan celah di antaranya. `Remove` menghapus semua celah. Celahnya 1,5 kali tinggi teks dimensi.

### DIMSPACE

Tanpa alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Memindahkan garis dimensi dari dimensi linear dan sejajar yang sejajar (atau dimensi sudut pada titik sudut yang sama) agar berjarak sama, dihitung dari dimensi dasar, masing-masing di sisi tempat ia berada. `0` meluruskannya dengan dasar; `Auto` adalah dua kali tinggi teks dimensi dasar. Dimensi yang tidak sejajar dengan dasar dibiarkan.

### DIMINSPECT

Tanpa alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Menggambar bingkai di sekitar nilai dengan label di depannya dan tingkat pemeriksaan di belakangnya. `remove` melepas bingkainya. Teks toleransi tetap bersama nilainya.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, diulang sampai Enter, lalu `Select dimensions`. Mengubah pengaturan itu hanya pada dimensi yang dipilih; gaya dimensi tidak berubah. Menerima variabel yang berupa angka atau sakelar (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` mengembalikan dimensi yang dipilih ke gayanya. Menolak nama yang bukan variabel seperti itu dan nilai yang tidak bisa diterimanya.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Select dimensions`, lalu untuk setiap dimensi, titik-titik garis perpanjangannya (`Specify first extension line origin on an object`: menempel ke ujung atau tengah garis, sudut polyline, pusat; Enter membiarkan titik itu bebas), atau untuk dimensi radius, diameter, patah, atau panjang busur `Select arc or circle`. Dimensi kemudian terikat pada objek-objek itu: saat objek bergerak atau berubah ukuran, dimensi ikut dan diukur ulang dalam langkah urungkan yang sama. Memindahkan titik yang terikat dengan tangan, atau menghapus objeknya, mengakhiri ikatan itu. Ikatan disimpan di DWG dan DXF 2000 sebagai data milik CadCraft; program lain melihat dimensi biasa.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Melepaskannya dari objek yang terikat padanya; tidak ada yang bergerak.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, diulang sampai Enter. Menggambar silang di pusat dan empat garis pusat sampai sedikit melewati kurva (jenis garis CENTER), sebagai garis biasa di layer aktif; ukurannya diambil dari ukuran panah dan skala keseluruhan pengaturan dimensi saat ini, diputar dengan UCS. Mereka tidak mengikuti lingkaran jika lingkaran itu dipindahkan.

### CENTERLINE

Alias: `CL`. `Select first line`, `Select second line`. Menggambar garis di tengah antara dua garis (sepanjang bisektor jika keduanya bertemu), sedikit lebih panjang dari keduanya, dengan jenis garis CENTER. Garis biasa: ia tidak mengikuti kedua garis itu.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Tanpa alias. Masing-masing meminta `Enter new value for … <current>` dan mengatur ukuran itu untuk dimensi **baru**: skala keseluruhan, tinggi teks, ukuran panah, jumlah desimal (hingga 8), celah di sekitar teks, perpanjangan melewati garis dimensi, offset dari titik asal. Lihat [Atur ukuran dimensi](topic:dimension-settings).

### DIMLUNIT

Pengaturan dimensi: format panjang dimensi baru saja (1 ilmiah, 2 desimal, 3 teknik, 4 arsitektural, 5 pecahan).

### DIMSTYLE dan -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Pengelola gaya dimensi: {{ui:Jadikan aktif}}, {{ui:Baru…}}, {{ui:Ubah…}}, {{ui:Ganti nama…}}, {{ui:Hapus}}, {{ui:Bandingkan…}}, {{ui:Terapkan ke yang dipilih}}. `-DIMSTYLE` di baris perintah: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Lihat [Atur ukuran dimensi](topic:dimension-settings#named-dimension-styles).

### DIMEDIT dan DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, lalu dimensinya (atau yang sudah dipilih). New meminta teks (`<>` = hasil ukur); Rotate meminta sudut (0 mengembalikan teks); Oblique meminta sudut garis perpanjangan dari sumbu X (Enter = tidak ada; hanya untuk dimensi linear dan sejajar). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Lihat [Atur ukuran dimensi](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, atau dengan dimensi terpilih `Units in the text of the selected dimensions`. Menulis panjang yang diukur dalam satuan itu dengan satuannya di belakang (DIMLFAC dan sufiks DIMPOST); `D` kembali ke satuan gambar. Lihat [Dimensi dalam mm, cm, m, atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Mencetak `Arc length: … Type: …`, lalu `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular meminta `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand mengikuti penunjuk sampai klik atau {{key:Enter}}; `O` meminta `Select object` dan `Reverse direction? [Yes/No] <N>` dan mengubah objek menjadi awan. `A` meminta `Specify the length of each arc`. `R`, `P`, dan `F` memilih jenis untuk awan berikutnya. Hasilnya adalah polyline tertutup dari busur.

### MLEADER

Alias: `MLD`; atau {{ui:Leader}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, lalu teksnya di kotak di tempat (atau, tanpa itu, `Enter text (an empty line ends)`). `Block` meminta nama blok dulu dan multileader menampilkan blok itu sebagai ganti teks. Garis leader tambahan: {{cmd:MLEADEREDIT}}. Disimpan sebagai multileader yang sebenarnya di DWG; DXF menyimpan garis, panah, dan teks yang digambarnya.

### MLEADEREDIT

Alias: `MLE`. `Select a multileader`, lalu `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: setiap titik menambahkan garis leader dari panah baru ke landing yang sama, sampai Enter. `Remove leaders` lalu menghapus garis leader yang Anda klik (multileader menyimpan setidaknya satu). `Block content` meminta nama blok dan menampilkan blok itu sebagai ganti teks (atributnya ditanyakan); `Text content` mengembalikan teks. Setiap garis leader punya grip sendiri. DWG menyimpan setiap garis leader dan blok dalam satu multileader.

### MLEADERALIGN

Alias: `MLA`. `Select multileaders`, lalu `Select multileader to align to [Distribute/Spacing/Use current spacing]` dan `Specify direction`. Memindahkan landing multileader lain (beserta teks atau blok mereka) ke garis yang melewati landing yang dipilih dalam arah itu; panahnya tetap menunjuk ke arah yang sama. `Spacing` juga membuat jaraknya sama; `Distribute` meminta dua titik dan menyebarkannya merata di antaranya. Membutuhkan minimal dua multileader.

### MLEADERCOLLECT

Alias: `MLC`. `Select multileaders`, lalu `Specify collected multileader location [Vertical/Horizontal]` (Enter mempertahankan tempat yang pertama). Membuat satu multileader dari beberapa: isi blok dimasukkan ke blok baru yang memuat setiap blok berdampingan atau satu di bawah yang lain; isi teks menjadi satu catatan dengan satu baris untuk setiap teks. Multileader pertama mempertahankan garis leadernya; yang lain dihapus. Menolak campuran isi teks dan blok.

### TABLE

Alias: `TB`; atau {{ui:Anotasi}} › {{ui:Lainnya}} › {{ui:Tabel}}. Membuat tabel: satu objek yang bisa Anda pindahkan, salin, putar, skalakan, dan cetak seperti objek lain, dengan selnya disimpan sebagai data.

- `Number of data rows or [Paste/File/Style] <3>`, lalu `Number of columns <3>`, `Text height`, dan `Top left corner of the table`. Tabel mendapat baris judul (satu sel digabung) dan baris header di atas baris data.
- `P`: tabel dari sel spreadsheet di papan klip (teks dengan tab di antara sel). Menekan {{key:Ctrl+V}} dengan sel seperti itu di papan klip melakukan hal yang sama, kecuali salinan CadCraft sendiri lebih baru (atau CadCraft tidak bisa membedakan: maka ia menempel salinannya sendiri dan memberi tahu). `F`: tabel dari file `.csv` atau file yang dipisah tab. Baris pertama menjadi baris header; lebar kolom menyesuaikan teksnya.
- `S`: memilih gaya tabel untuk tabel ini (lihat {{cmd:TABLESTYLE}}).
- Ia menolak jumlah baris atau kolom yang bukan bilangan bulat, dan lebih banyak sel daripada yang bisa ditampung tabel (2.000 baris, 200 kolom, 40.000 sel).
- {{cmd:EXPLODE}} mengubah tabel menjadi garis dan teks. Disimpan sebagai DWG, tabel adalah objek tabel sungguhan yang bisa diedit program lain; disimpan sebagai DXF, ia menjadi blok yang menggambarnya, dan CadCraft membukanya lagi sebagai tabel.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; atau klik dua kali sebuah sel. Mengedit tabel.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klik sebuah sel, atau dengan tabel terpilih ketik namanya (`B3`: kolom B, baris 3; baris judul adalah baris 1). Di peramban, sebuah kotak terbuka di atas sel: {{key:Enter}} menyimpan teks, {{key:Tab}} pindah ke sel berikutnya, {{key:Alt+Enter}} memulai baris baru, {{key:Esc}} membiarkan sel seperti semula.
- Teks yang diawali `=` adalah rumus: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, dengan `+ - * / ^`, kurung, dan fungsi seperti `sqrt` dan `round`. Sel menampilkan nilainya; rumus yang menyebut selnya sendiri, sel di luar tabel, atau sel tanpa angka menampilkan `####` dan baris perintah menjelaskan alasannya.
- `R` / `C`: `Insert` atau `Delete` baris atau kolom di sel yang dipilih (berapa banyak, dan di atas atau di bawah, kiri atau kanan). Rumus mengikuti sel yang mereka sebut.
- `S`: lebar kolom dan tinggi baris. Baris tidak pernah lebih rendah dari teksnya. Tabel yang dipilih juga memiliki grip di setiap tepi kolom dan baris.
- `M`: gabung dari satu sel yang dipilih ke sel lain; `U`: pisahkan. `A`: perataan (`TL` kiri atas … `MC` tengah … `BR` kanan bawah). `H`: tinggi teks sel ini sendiri (0 = gaya). `K`: jadikan baris sebagai judul, header, atau baris data. `CL`: kosongkan sel.
- Ia menolak tabel di layer terkunci, menghapus setiap baris atau kolom, dan penggabungan yang akan memotong sel gabungan lain menjadi dua.

### TABLESTYLE

Alias: `TS`. Mendaftar gaya tabel dengan jumlah tabel yang memakai masing-masing, lalu `Table style: [New/Set/Edit/Delete/Apply]`.

- Gaya menyimpan tinggi teks dan perataan baris judul, header, dan data, margin sel, serta garis tepi yang digambar (luar, di antara baris, di antara kolom).
- `N` membuat gaya dari gaya saat ini dan menjadikannya aktif; `S` mengatur gaya aktif (tabel baru memakainya); `E` mengedit satu gaya: tabel yang memakainya digambar ulang; `A` memberi tabel yang dipilih gaya aktif; `D` menghapus satu gaya (bukan Standard, bukan yang aktif; tabel yang memakainya tetap tampil seperti semula).
- Gaya disimpan bersama gambar (DWG dan DXF).

### TABLEEXPORT

Menyimpan yang ditampilkan tabel sebagai file CSV (rumus sebagai nilainya). `Select a table`, atau pilih satu dulu. Sel teks yang diawali `=`, `+`, `-`, atau `@` diberi `'` di depannya agar spreadsheet tidak menjalankannya.

### TABLEPASTE

Alias: `PASTETABLE`. Membuat tabel dari sel spreadsheet di papan klip, lalu menanyakan sudut kiri atasnya. Sama dengan {{cmd:TABLE}} › `Paste`.

### DATALINK

Alias: `DL`. `Data link: [New/List/Remove] <New>`. `N` meminta file CSV, menempatkan tabel darinya dan mengingat nama file itu; `L` mendaftar tautan dengan file, ukuran, kapan dibaca, dan berapa tabel yang memakainya; `R` menghapus tautan (tabelnya tetap sebagai tabel biasa).

### DATALINKUPDATE

Alias: `DLU`. Membaca ulang file tautan data dan mengisi ulang tabel yang tertaut padanya (baris dan kolom ditambah atau dihapus agar sesuai). Peramban tidak bisa membuka file dengan sendirinya, jadi ia meminta Anda memilih file lagi. Jika ada beberapa tautan, ia menanyakan yang mana.

### FIELD

Menempatkan field di gambar: teks yang menghitung sendiri. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: sekarang, atau tanggal disimpan, dibuat, atau dicetak, dan formatnya (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: nama file, dengan atau tanpa ekstensinya. `S`: nomor lembar, judulnya, atau berapa lembar yang ada. `P`: properti gambar berdasarkan nama (lihat {{cmd:DWGPROPS}}). `O`: pilih objek, lalu apa yang dibaca (luas, panjang, keliling, radius, diameter, layer, nama, x, y, teks, rotasi, warna) dan desimalnya. `E`: rumus. `C`: teks dengan kode yang diketik apa adanya, seperti `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Lalu `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: teks yang dipilih mendapat field ditambahkan setelah isinya; sel tabel juga begitu; referensi blok menanyakan atribut mana; {{key:Enter}} menanyakan tinggi dan titik untuk teks baru.
- Di layar, field memiliki latar abu-abu muda; cetakan dan PDF tidak pernah memilikinya. Mengetik di atas teks field dengan tangan mengakhiri field. Field yang tidak bisa dihitung menampilkan `####`.
- Field yang merujuk objek menemukan objeknya dengan kunci yang disimpan CadCraft pada objek (Pengaturan › CadCraft › File ramah penggabungan); dengan kunci dimatikan, ia menolak.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` mengatur kapan field diperbarui sendiri: ketik huruf `O` open, `S` save, `P` plot, `R` regen (ketiganya untuk memulai), atau `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Mendaftar properti gambar, lalu `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Enam yang pertama adalah yang ditampilkan panel {{ui:Properti gambar}}; `U` menambahkan nama dan nilai Anda sendiri, `R` menghapus satu. Field membacanya (`%<prop:title>%`, `%<prop:Client>%`) dan langsung mengikuti. Ia menolak nama kustom yang merupakan salah satu nama bawaan atau berisi `%`, `<`, `>`, tanda kutip, atau garis miring terbalik.

## Parametrik

Lihat [Batasi gambar](topic:constraints) dan [Gunakan parameter dan persamaan](topic:parameters). Batasan bekerja pada tab {{ui:Model}}.

### GEOMCONSTRAINT dan perintah GC

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, lalu prompt perintah itu.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (yang kedua bergerak).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT dan perintah DC

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (angka, ekspresi, atau `name=expression`).
- {{cmd:DCALIGNED}}: seperti di atas, dengan `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` meminta toleransi jarak dan sudut.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; batasan mereka dihapus.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, lalu `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS dan -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) membuka panel {{ui:Parameter}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Mengunduh makro (.swb) yang membangun ulang model sebagai satu sketsa dengan batasan di SolidWorks. Lihat [Pindahkan sketsa ke dan dari pemodel part lain](topic:solidworks-sketches).

## Blok

### ANNOSCALE

Alias: `CANNOSCALE`. Menyebutkan skala anotasi gambar dan berapa objek anotatif yang dimilikinya, lalu menanyakan `New annotation scale`: ketik `1:50`, `1:100`, `2:1`, angka saja (`50` berarti 1:50), atau nama salah satu skala milik gambar. Setiap teks dan dimensi anotatif diubah ukurannya agar tercetak dengan ukuran yang sama pada skala baru, dalam satu langkah urungkan; objek yang tidak anotatif dibiarkan, begitu juga objek yang menyimpan daftar skala tanpa skala baru itu ({{cmd:OBJECTSCALE}}). Lihat [Satuan, kertas, dan skala](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Select annotative objects`, lalu `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Teks dan dimensi anotatif menyimpan daftar skala anotasi. `Add` dan `Delete` meminta skala (`1:50`, `2:1`, angka saja, atau nama salah satu skala milik gambar); `Current scale` menambahkan skala anotasi gambar; `List` mencetak skala setiap objek. Viewport yang skalanya ada dalam daftar objek menampilkan objek itu dengan ukuran yang mencetak tinggi kertasnya pada skala tersebut, di layar dan dalam plot. Skala terakhir tidak bisa dihapus. Objek yang tidak anotatif dikecualikan: aktifkan Anotatif di Properti terlebih dulu. Daftarnya disimpan di DWG dan DXF sebagai data milik CadCraft. Lihat [Satuan, kertas, dan skala](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Aktif (saat gambar dimulai): objek anotatif juga tampil di viewport, atau di model, yang skalanya tidak ada dalam daftarnya, dengan ukuran yang dimilikinya. Nonaktif: ia tidak tampil di sana, dan tidak bisa dipilih di model. Sakelar ini satu langkah urungkan; ia tidak disimpan dalam file.

### SCALELISTEDIT

Alias: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` sampai {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit dan Delete meminta nama skala. Skala milik gambar bergabung ke daftar skala viewport dan plot, serta disimpan bersama gambar. Lihat [Satuan, kertas, dan skala](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT, dan PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: titik yang dilalui kurva; `Close`, `Undo`, lalu `Start tangent` dan `End tangent` (sebuah titik, atau {{key:Enter}}). Method › Control vertices meminta derajat (1 sampai 5) dan menggambar dari poligon kontrol. Object mengubah polyline menjadi spline melalui simpulnya. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` untuk beberapa objek; garis, busur, dan spline ditawarkan sebagai polyline lebih dulu. Lihat [Spline dan polyline](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Enter block name`. Jika sudah ada: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Objek-objek itu diganti dengan satu referensi ke blok baru.

### WBLOCK

Alias: `W`, `-WBLOCK`. Menulis blok, beberapa objek, atau seluruh gambar sebagai file DWG atau DXF baru. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (ia menjadi titik asal gambar baru), `Select objects`, lalu `File format [DWG/DXF/R12 DXF]` dan `File name for the new drawing`, lalu `What to do with the objects [Retain/Convert to block/Delete]`. Convert menggantinya dengan satu referensi ke blok yang diberi nama sesuai file; Delete menghapusnya.
- **Block**: `Block to write out`. Objek milik blok itu sendiri, dengan titik dasarnya sebagai titik asal, termasuk blok bersarang.
- **Entire drawing**: setiap objek di ruang model. Lembar tidak ditulis; gunakan {{cmd:SAVEAS}} untuk salinan yang mempertahankannya.

File baru hanya memuat layer, jenis garis, teks, dan gaya dimensi serta blok yang dipakai objeknya, dan satuan gambar. Versi DWG adalah yang terakhir dipakai {{cmd:SAVEAS}}. Di peramban, file diunduh; di Studio, dialog simpan terbuka.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Definisikan atribut}}. Mencetak mode, lalu `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` jika konstan), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} memasukkan definisi atribut ke dalam blok.

### EATTEDIT dan ATTEDIT

`EATTEDIT` (`DDATTE`, atau klik dua kali referensi dengan atribut; {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Edit atribut}}): `Select a block reference with attributes`, lalu dialog {{ui:Edit atribut}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): referensi yang sama, lalu `<prompt> (<TAG>) <value>` untuk setiap atribut; {{key:Enter}} mempertahankan nilai. Lihat [Atribut](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Nilai dipertahankan; atribut baru mendapat nilai bawaannya; yang dihapus hilang, penempatan diatur ulang.

### BATTMAN

{{ui:Blok}} › {{ui:Lainnya}} › {{ui:Pengelola atribut}}. Dialog: blok, atribut (tag, prompt, bawaan, mode, urutan), {{ui:Perbarui referensi (nilai dipertahankan)}}, {{ui:Terapkan}}.

### REFEDIT dan REFCLOSE

{{ui:Blok}} › {{ui:Lainnya}} › {{ui:Edit di tempat}}. `REFEDIT`: `Select the block reference to edit in place` (atau pilihan). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; {{ui:Simpan blok}} dan {{ui:Buang}} di bilah melakukan hal yang sama. Seluruh pengeditan adalah satu langkah urungkan. Lihat [Atribut](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT dan BCLOSE

`BE`; atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Edit blok}}. `Enter block name to edit <the selected reference's block>` membuka editor blok. `BCLOSE` menanyakan `Close the block editor on "…" [Save/Discard] <Save>`; {{ui:Simpan blok}} dan {{ui:Buang perubahan}} di spanduk melakukan hal yang sama. Semua yang dilakukan di editor adalah satu langkah urungkan.

### VIEWBASE

Alias: `FLATSHOT`. Tampilan 2D datar dari solid pada tab 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, skala (`1:20`, `2:1`; {{key:Enter}} memilih yang pas dengan lembar), lalu pusat tampilan. Satu referensi blok, tepi yang terlihat di VIEW-VISIBLE, dan tepi tersembunyi dibuat putus-putus di VIEW-HIDDEN. Lihat [Tampilan datar di lembar](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; atau {{ui:Semua lembar dalam satu PDF}} di dialog {{ui:Plot ke PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} mencetak setiap lembar, `S` meminta nama yang dipisahkan koma. Satu PDF, satu halaman dan satu bookmark per lembar. Lihat [Setiap lembar dalam satu PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Membawa Anda ke bagian {{ui:Set lembar}} di panel kiri: lembar dari banyak gambar, dinomori dan diberi judul, blok judulnya diisi dari set itu, diterbitkan sebagai satu PDF. Lihat [Set lembar](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): pilih DWG atau DXF, lalu titik sisipnya. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; dengan lebih dari satu tautan, pilih salah satu referensinya atau ketik `N` dan namanya. Lihat [Gambar tertaut](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Hitung blok}}. `Select a block reference to count, or [All/Export] (Enter: All)`: satu klik memilih dan menghitung setiap referensi blok itu di ruang ini; {{key:Enter}} atau `A` mendaftar semuanya; `E` lalu `C` (jumlah) atau `A` (atribut) mengunduh CSV. Lihat [Hitung blok dan ekspor jadwal](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (huruf besar atau kecil sama saja). `F` meminta DWG atau DXF, lalu seluruh gambar atau salah satu bloknya; nama yang sudah dipakai menanyakan {{ui:Pertahankan yang ada}} atau {{ui:Ganti nama}}. `L` membuka panel pustaka.
- `Specify insertion point [Scale/Rotate]`. `S` meminta `Specify scale factor`, `R` meminta `Specify rotation angle`; keduanya diingat.
- Jika blok sudah berdiri di samping objek yang berulang di tempat lain tanpanya, sebuah baris menyebutkan berapa tempat yang disarankan dan prompt bertambah `suGgested`: `G` menampilkannya; klik dekat salah satu untuk menaruh blok di sana, `A` untuk semuanya, {{key:Enter}} untuk kembali. Mereka mengambil rotasi tetangganya dan nilai atribut bawaan. Gambar dengan lebih dari 20.000 objek di ruang terbuka tidak dicari.
- Lalu `Enter <prompt> (<TAG>) <default>` untuk setiap atribut yang diminta blok. Lihat [Atribut blok](topic:attributes).

### LIBRARY

Alias: `LIB`. Membuka panel pustaka: menempatkan item, memeriksa pembaruan, kredit pustaka. Tanpa pertanyaan. Lihat [Sisipkan dari file atau pustaka](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; atau {{ui:Batang 3D}} di tab {{ui:Standar}} pada pustaka. `Section size <W12x26>` (seperti yang didaftar tab), lalu `Start point [Column]` dan `End point`: batang solid di tab 3D di antara kedua titik, berdiri di tanah. `C` meminta titik dasar kolom dan tingginya. Satu langkah urungkan. Lihat [Tempatkan profil baja dan suku cadang standar](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Top left corner of the parts list`, lalu `Text height <2.5>`: menggambar tabel setiap suku cadang standar dan profil baja yang ditempatkan dari pustaka (nomor item, jumlah, suku cadang, standar, ukuran, panjang, material, massa). Satu langkah urungkan. Lihat [Tempatkan profil baja dan suku cadang standar](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Menghapus definisi blok yang tidak dipakai apa pun. Tanpa pertanyaan.

### DELBLOCKS

Atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Hapus blok}}. `Select block to delete [Name/eXit]`: pilih referensi blok, atau `N` untuk daftar blok dengan filter (pilih beberapa), atau `X` / {{key:Enter}} untuk mengakhiri. Setiap referensi ikut hilang — di model, di setiap lembar, dan di dalam blok lain — lalu definisinya, dan baris perintah menyebutkan apa yang dihapus dan apa yang tidak bisa. Blok tanpa nama dan gambar tertaut tidak ditawarkan. Prompt kembali untuk blok berikutnya; seluruh perintah adalah satu langkah urungkan.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} menempel yang Anda salin ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) sebagai satu blok: pilih titik sisip dan satu referensi ke blok baru diletakkan di sana, terpilih. Blok mendapat nama sendiri (`A$C` dan sebuah angka); {{cmd:RENAME}} memberinya nama Anda. Satu langkah urungkan menghapus referensi dan bloknya.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} meminta blok yang akan diganti dan blok yang akan menggantikannya (`?` mendaftar blok), lalu mengubah setiap referensi di model, di setiap lembar, dan di dalam blok lain. Setiap referensi mempertahankan tempat, skala, rotasi, layer, dan nilai atribut yang dimiliki kedua blok; atribut yang hanya dimiliki blok baru dimulai dari nilai bawaannya, dan ia memberi tahu nilai mana yang dibuang. Saat tidak ada lagi yang memakai blok lama, ia menawarkan untuk menghapusnya. Ia menolak tautan gambar dan pengganti yang akan membuat blok berada di dalam dirinya sendiri. Satu langkah urungkan.

### MINSERT

{{cmd:MINSERT}} menempatkan blok dalam baris dan kolom: nama blok, titik sisip, skala, rotasi, jumlah baris dan kolom, serta jarak di antaranya. Seluruh kumpulan berputar dengan rotasinya. Setiap satu adalah referensinya sendiri (maksimal 10.000), sehingga masing-masing bisa dipindah atau dihapus nanti.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Panel blok}}. Menampilkan panel {{ui:Blok}} dengan kursor di filternya. Setiap blok punya gambar kecil; yang paling baru ditempatkan tampil lebih dulu. Dua tombol di samping filter beralih antara daftar dan grid gambar. Klik sebuah gambar (atau {{ui:Sisipkan}}) untuk menempatkan blok dengan {{cmd:INSERT}}, atau seret ke gambar untuk menempatkannya di tempat Anda melepasnya.

{{ui:Libraries}}, di bawah daftar: {{ui:Add a drawing}} mengambil file DWG atau DXF milik Anda dan mendaftar bloknya dengan gambarnya, serta seluruh gambar sebagai satu blok. Menempatkan satu menyalin definisinya (dan blok yang bersarang di dalamnya, serta layernya) ke gambar ini, seperti opsi `File` pada {{cmd:INSERT}}; blok yang sudah ada di sini dengan definisi yang sama dipakai tanpa pertanyaan, sedangkan yang namanya sama tetapi berbeda menanyakan {{ui:Pertahankan yang ada}} atau {{ui:Ganti nama}}. Di peramban, file tetap ada sampai halaman ditutup. Di CadCraft Studio, {{ui:Add a folder}} mendaftar gambar dalam sebuah folder, masing-masing dibuka saat Anda klik, dan file serta folder diingat. Tanda x kecil menghapus pustaka dari daftar; file-nya tidak disentuh. {{ui:Pustaka}} bersama adalah hal yang berbeda: lihat [Sisipkan dari file atau pustaka](topic:insert-from-file-and-library).

### BCONVERT

Atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Convert repeats to blocks}}. Menemukan geometri yang berulang dan mengubah setiap salinannya menjadi referensi ke satu blok.

- `Select the objects that repeat, or [Block]`: objek dari satu salinan. `B` memilih blok yang sudah ada sebagai gantinya, untuk mencari salinan lepas dari objeknya.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S`, dan `P` mengganti apa yang dihitung sebagai salinan; {{key:Enter}} mencari. Pengaturannya diingat.
- `Name for the new block <Block1>`, lalu `Specify the block's base point` ({{key:Enter}} mengambil sudut kiri-bawah pilihan).
- Ia menyebutkan berapa kumpulan objek lain yang geometrinya sama, menyorot semua yang akan diganti, dan menanyakan `Yes/No`.

Salinan adalah objek yang sama yang dipindah dan diputar dengan sudut apa pun (dan dicerminkan atau diskalakan dengan satu faktor jika itu aktif): setiap objek harus punya pasangannya, dalam satu per sejuta ukuran pilihan. Setiap referensi mendapat rotasi dan skalanya sendiri (yang dicerminkan mendapat skala Y negatif), dan layer yang dimiliki objeknya bersama. Objek di layer terkunci dibiarkan dan dihitung. Ia mencari di ruang terbuka (model atau lembar yang terbuka). Pencarian yang sangat besar berhenti di batas kerja dan memberi tahu. Satu langkah urungkan.

### BSEARCH

Atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Cari blok}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: sebagian nama blok, atau pola dengan `*` dan `?`. Mendaftar setiap blok dengan referensinya di sini dan di seluruh gambar.
- `A`: sebuah nilai atribut, atau `TAG=value`. Mendaftar blok yang referensinya memegangnya, dengan nilai yang ditemukan. Atribut konstan dihitung.
- `G`: pilih objek, atau satu referensi blok, dan blok yang bentuknya paling sedikit 85% mirip didaftar, yang terbaik lebih dulu. Ukuran, rotasi, dan pencerminan tidak dihitung. Ukurannya membandingkan jarak antar titik yang tersebar di sepanjang garis luar, sehingga ia menemukan yang mirip; gunakan {{cmd:BCONVERT}} untuk mencari salinan yang persis sama.

Referensi yang ditemukan di ruang terbuka dipilih, siap untuk perintah berikutnya.

### BREPLACE

Atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Ganti blok}}. `Replace [Selected/All]`: `S` mengganti referensi blok yang Anda pilih dengan blok yang Anda beri nama; `A` meminta sebuah blok dan penggantinya lalu mengubah setiap referensi, seperti {{cmd:BLOCKREPLACE}} (kodenya sama). Referensi mempertahankan tempat, skala, rotasi, layer, dan nilai atribut yang dimiliki kedua blok; nilai yang tidak punya tempat di blok baru dibuang dan disebutkan namanya. `?` mendaftar blok. Satu langkah urungkan.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Data extraction}}. Mendaftar blok, atributnya, dan properti objek sebagai tabel atau file CSV.

- Bekerja pada pilihan, atau bertanya `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` saat pilihan memuat keduanya. Blok tanpa nama, tabel, dan daftar material tidak pernah didaftar.
- Ia mencetak kolom yang bisa dipilih (nama, jenis, layer, X, Y, rotasi, skala, panjang, luas, warna, jenis garis, ruang, dan satu untuk setiap tag atribut), lalu `Columns, by name or number with commas between`. {{key:Enter}} memilih yang diberi bintang: nama dan setiap atribut untuk blok; jenis, layer, dan panjang untuk objek.
- `Put identical rows together with a count? [Yes/No] <Yes>`, lalu `Put the list in a: [Table/Csv] <Table>`. Tabel adalah tabel biasa ({{cmd:TABLEDIT}} mengeditnya) dan tidak hidup: jalankan perintah lagi setelah gambar berubah.
- Ia menolak kolom yang tidak ada dalam daftar. Tabel menampung 1.999 baris data; file CSV memuat semuanya.

### COUNTTABLE

Menghitung referensi blok dari pilihan (atau dari ruang terbuka) dan menaruh jumlahnya dalam tabel (`Block`, `Count`) atau file CSV. Untuk jumlah yang mengikuti gambar dengan sendirinya, lihat {{cmd:BOMTABLE}}.

## Lembar dan plot

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; atau tombol {{ui:+}} di bawah gambar. Lembar baru dengan bingkai, blok judul, dan satu viewport, pada ISO A3 (atau Tabloid untuk gambar dalam inci atau kaki). Tanpa pertanyaan.

### MVIEW

Alias: `MV`. Hanya pada lembar ({{cmd:VPORTS}} pada lembar melakukan hal yang sama).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Viewport menampilkan seluruh model pada skala standar.
- `P` (Polygonal): klik sudut-sudut garis luar (`Undo`, `Close`), {{key:Enter}} jika selesai. Ia menolak kurang dari tiga sudut.
- `O` (Object): `Select a closed object for the viewport's outline`: polyline tertutup, lingkaran, atau elips di lembar. Viewport mengambil bentuknya (kurva sebagai potongan lurus pendek); objeknya tetap seperti semula. Ia menolak objek yang tidak tertutup.

### VPCLIP

Memotong viewport yang sudah ada di lembar. `Select viewport to clip` (atau pilih dulu), lalu `Select the object to clip to [Polygonal/Delete]`:

- Klik polyline tertutup, lingkaran, atau elips, atau {{key:Enter}} (atau `P`) untuk mengklik sudut-sudut poligon.
- `D` (Delete, ditawarkan saat viewport sudah dipotong) menjadikannya persegi panjang lagi: kotak di sekeliling garis luar yang dimilikinya.
- Apa yang ditampilkan viewport tidak bergerak di kertas, dan skalanya tetap. Model digambar dan dicetak hanya di dalam garis luar, dan batasnya mengikuti. Satu langkah urungkan.
- Viewport yang dipotong punya grip di setiap sudut garis luarnya, selain pusat dan keempat sudut kotaknya (menyeret sudut kotak merentangkan garis luar bersamanya). Properti menampilkan Outline: Rectangle, atau Clipped dengan jumlah sudutnya.
- File DWG dan DXF 2000 menyimpan garis luar untuk CadCraft. Program lain membuka viewport sebagai persegi panjang di sekitarnya; DXF R12 hanya menyimpan persegi panjangnya.
- Pada tab model, ia memberi tahu bahwa viewport ada di lembar.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} sama dari lembar juga, dan {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Bagi berdampingan}}, {{ui:Bagi bertumpuk}}, {{ui:Empat panel}}, {{ui:Satu panel}} menjalankannya. Pada model: `Enter number of panes [SIngle/2/3/4] <3>`; `2` meminta `[Horizontal/Vertical] <Vertical>` (Vertical = berdampingan), `3` meminta `[Left/Right] <Right>` (tempat panel besar berada). Setiap panel mempertahankan tampilan dan ruangnya sendiri; klik menjadikan panel aktif. Pada lembar, ini adalah {{cmd:MVIEW}}. Lihat [Bagi layar](topic:split-screen).

### VPVIEW

Tanpa alias. Hanya pada lembar.

- `Select viewport` (dilewati jika satu sudah dipilih), lalu pada model: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Tanpa alias. Sistem koordinat milik Anda sendiri; bukan pengeditan. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: sebuah titik menjadi titik asal baru, lalu `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: titik asal, sebuah titik pada sumbu X positif, sebuah titik di sisi Y positif. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` dan sebuah nama. Tampilan berputar sehingga sumbu X baru menjadi rata. Lihat [Putar tampilan dan gunakan koordinat Anda sendiri](topic:ucs-and-turned-view).

### PLAN

Tanpa alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: memutar tampilan panel aktif agar sumbu X UCS (atau dunia) menjadi rata. Tidak ada yang di gambar yang bergerak.

### TURNLEFT, TURNRIGHT, TURNWORLD

Tanpa alias; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Putar tampilan 90° ke kiri}}, {{ui:Putar tampilan 90° ke kanan}}, {{ui:Kembali ke World}}. Sama dengan `UCS Z -90`, `UCS Z 90`, dan `UCS W`, dengan tampilan mengikuti.

### VPLAYER

Tanpa alias. Pada lembar, atau di dalam viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` meminta nama layer (dipisahkan koma, dengan wildcard `*` dan `?`), lalu viewport `[All/Select/Current] <Current>`; Reset mengembalikan setiap layer ke bawaan "dibekukan di viewport baru"; `V` mengatur bawaan itu (`[Frozen/Thawed]`), yang dipakai {{cmd:MVIEW}}. `?` mendaftar layer yang dibekukan di viewport saat ini. Kolom viewport di panel Layer melakukan hal yang sama untuk satu viewport. Lihat [Bekukan layer di satu viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; atau klik dua kali di dalam viewport. Hanya pada lembar. Bekerja pada model melalui viewport: yang dipilih, satu-satunya di lembar, atau `Click inside the viewport to work in`. Geser dan zoom di dalamnya mengubah tampilan viewport (viewport yang tampilannya dikunci tetap, dan lembarnya yang bergerak); tampilan baru ditulis sebagai satu langkah urungkan. Lihat [Bekerja pada model melalui viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; atau klik dua kali di luar viewport, atau klik tab di bawah gambar. Kembali ke lembar.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; atau {{key:Mod+P}}. Membuka dialog {{ui:Plot ke PDF}}. Lihat [Plot ke PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; atau {{ui:Edit tabel…}} di dialog {{ui:Plot ke PDF}}. Membuka {{ui:Tabel gaya plot}}: apa yang dicetak untuk setiap warna (warna, abu-abu, tinta, tebal garis), disimpan bersama gambar. Lihat [Tabel gaya plot](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} memindahkan objek antara lembar dan model melalui viewport, diskalakan dan diputar agar terlihat sama dari sisi lain. Di lembar, pilih objek dan mereka pergi ke model (pilih viewport jika lembar punya lebih dari satu). Saat Anda bekerja di model melalui viewport ({{cmd:MSPACE}}), objek yang dipilih datang ke lembar. Ia menyebutkan berapa kali lebih besar atau lebih kecil objek itu jadinya. Viewport tetap di lembarnya. Satu langkah urungkan.

### ISODRAFT

{{cmd:ISODRAFT}} mengaktifkan atau menonaktifkan menggambar isometrik `ON` atau `OFF`, atau langsung ke bidang `Left`, `Top`, atau `Right`. Saat aktif: Ortho ({{key:F8}}) menjaga garis di sepanjang dua sumbu bidang (kiri: 90° dan 150°; atas: 30° dan 150°; kanan: 30° dan 90°), pelacakan polar ({{key:F10}}) mengikuti sumbu yang sama, snap ke grid ({{key:F9}}) memakai grid isometrik, dan grid ({{key:F7}}) digambar dengan garis pada 30°, 90°, dan 150°. {{cmd:ELLIPSE}} mendapat `Isocircle`: berikan pusat dan radius (atau `Diameter`) dan ia menggambar elips yang ditampilkan lingkaran pada bidang saat ini. Gambar tetap datar: ini adalah alat bantu untuk menggambar tampilan perspektif, bukan model 3D. Pengaturannya untuk sesi ini dan tidak disimpan dalam file.

### ISOPLANE

{{cmd:ISOPLANE}} memilih bidang tempat menggambar isometrik bekerja: `Left`, `Top`, atau `Right`. Enter berpindah ke bidang berikutnya. Saat menggambar isometrik aktif, {{key:F5}} melakukan hal yang sama di tengah perintah; saat nonaktif, {{key:F5}} diserahkan ke peramban.

## Pemeriksaan

### CAL

Mencetak nilai sebuah perhitungan, seperti yang dibaca di mana pun panjang diketik.

- `Expression`: ketik, misalnya `12'6"+3/4"` atau `(24'-0")/3`, lalu tekan {{key:Enter}}. CadCraft mencetak `= 12'-6 3/4"   (150.75 drawing units)`. Lihat [Aritmetika dalam nilai yang diketik](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Ukur jarak}}.

- `Specify first point`, `Specify second point`. Mencetak jarak, sudut, Delta X, dan Delta Y.

### AREA

Alias: `AA`; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Luas}}. Mencetak luas dan keliling.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klik atau ketik sudut; pada `Specify next point (Enter closes) [Undo]` tekan {{key:Enter}} untuk menutup garis luar. `U` mengambil kembali sudut terakhir.
  - {{key:Enter}} atau `O`, lalu `Select object`: lingkaran (mencetak kelilingnya), elips, polyline (polyline terbuka ditutup dengan garis lurus untuk luasnya, dan panjangnya dicetak), atau hatch (lubang dikurangkan).
  - `A` (Add area) dan `S` (Subtract area) menyimpan total berjalan: prompt dimulai dengan `(ADD mode)` atau `(SUBTRACT mode)`, setiap luas ditambahkan atau dikurangkan, dan `Total area = …` dicetak setelah setiap langkah. Dalam mode ini `O` memilih objek sampai {{key:Enter}}, dan {{key:Enter}} pada prompt pertama mengakhiri perintah.

### MEASUREGEOM

Alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; setelah setiap pengukuran ia bertanya lagi, dengan `eXit` sebagai bawaan.

`Quick` mengukur di sekitar penunjuk saat Anda menggerakkannya: jarak ke objek terdekat di kanan, atas, kiri, dan bawah (sepanjang sumbu UCS saat ini), digambar saat Anda bergerak, dan sudut tempat dua tetangga itu lurus dan bertemu. Sebuah klik menulis keempat jarak, lebar dan tinggi bersih, serta sudutnya ke riwayat; Enter kembali ke opsi. Ia membaca apa yang ada di layar.

- `D`: dua titik, seperti {{cmd:DIST}}.
- `R`: `Select arc or circle`; mencetak radius dan diameter.
- `A`: sebuah busur (sudut inklusinya), sebuah garis lalu garis kedua (sudut di antara keduanya, ke arah ujung jauh mereka), atau {{key:Enter}} dan tiga titik (titik sudut, lalu kedua ujung).
- `AR`: seperti {{cmd:AREA}}, satu luas.

### ID

Tanpa alias. `Specify point`; mencetak X dan Y-nya.

### LIST

Alias: `LI`, `LS`. `Select objects`; mencetak jenis, layer, dan ukuran utama setiap objek.

### MASSPROP

{{cmd:MASSPROP}} memberikan properti penampang dari region dan objek tertutup yang Anda pilih, digabung bersama: luas, keliling, kotak pembatas, centroid, momen inersia terhadap sumbu X dan Y melalui titik asal, produk inersia, radius girasi, momen yang sama terhadap centroid, dan momen utama beserta arah sumbunya. Lubang di dalam region dihitung sebagai lubang. Angkanya dalam satuan gambar dan tepat untuk garis luar yang terbuat dari garis dan busur; elips dan spline diukur sebagai potongan lurus pendek, dan ia memberi tahu hal itu. Setelah laporan, ia menanyakan apakah akan menuliskannya ke file teks. Objek yang tidak tertutup dikecualikan, dan ia memberi tahu jumlahnya.

## Tampilan, file, dan lainnya

### ZOOM

Alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klik dua sudut untuk jendela. `E`, `A`, atau Enter: seluruh gambar.
- `P` (Previous, atau {{ui:Sebelumnya}} di bilah alat) kembali ke tampilan sebelumnya, sampai 10 tampilan per tab; sederetan langkah roda atau satu geseran dihitung sebagai satu tampilan.
- Angka seperti `2`, `2x`, atau `0.5x` (atau `S` lalu angkanya) memperbesar atau memperkecil dengan faktor itu di sekitar tengah layar.
- `C` meminta `Specify center point` dan `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT, dan perintah PDF

Alias: `PDFATT` untuk {{cmd:PDFATTACH}}, `PDFIM` untuk {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} menempatkan halaman PDF di bawah gambar (file, halaman, titik sisip, skala, rotasi); {{cmd:PDFIMPORT}} mengubah garis, kurva, isian, dan teks halaman menjadi objek gambar pada layer yang dinamai sesuai PDF, pada ukuran sebenarnya, pada skala yang diketik, atau diskalakan dari dua titik dan jarak sebenarnya. {{cmd:PDFCLIP}} memotong underlay, {{cmd:PDFADJUST}} mengatur pudar, kontras, monokrom, atau mematikannya, {{cmd:PDFLAYERS}} menyalakan atau mematikan layer milik PDF, dan {{cmd:PDF}} memberi CadCraft kembali file yang dipakai underlay gambar. Lihat [Underlay PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autolengkap gambar: tanpa perintah yang berjalan, bayangan abu-abu menunjukkan apa yang dikatakan pola gambar Anda sendiri sebagai langkah berikutnya. {{cmd:AUTOCOMPLETE}} mengaktifkan `On` atau menonaktifkannya `Off` (juga Pengaturan › CadCraft), atau `Show` menampilkan apa yang akan disarankannya sekarang. **Tab** menggambar bayangan itu sebagai satu langkah urungkan, **Esc** menutupnya sampai gambar berubah. Ia menemukan tiga hal pada objek terbaru: salinan berikutnya dari sesuatu yang digambar dua kali atau lebih dengan langkah sama (tiang, kolom, tanjakan dan injakan tangga), langkah berikutnya dari tangga polyline, dan sisi yang hilang dari rantai ruangan atau dinding. Di tengah {{cmd:LINE}} atau {{cmd:PLINE}}, bayangan itu adalah **titik berikutnya**: langkah berikutnya dari tangga (tanjakan, injakan, tanjakan…), sudut keempat sebuah persegi panjang, titik yang menutupnya, atau satu langkah sama lagi. Dekatkan kursor ke sana dan tekan **Tab**, seolah Anda mengkliknya; lanjutkan atau tekan Enter. Dihitung di komputer ini dengan aturan, tanpa model.

### AUTOSHEET

Alias: `ASH`. Lembar yang menata dirinya sendiri. {{cmd:AUTOSHEET}} mengambil bagian-bagian gambar (tampilan bernama Anda, atau bagian-bagian terpisah dari model, atau seluruh model), memilih ukuran kertas (atau yang Anda berikan), memberi setiap bagian skala standar (satu skala untuk semua, atau yang terbesar yang bisa diterima masing-masing), dan menempatkan tampilan dalam baris di lembar baru dengan blok judul dan keterangan (nama dan skala) di bawah setiap tampilan. Yang tidak muat di satu lembar mendapat lembarnya sendiri. Satu langkah urungkan. Dihitung di komputer ini dengan aturan, tanpa model.

### PHOTOSKETCH

Alias: `PSK`. Sketsa foto menjadi gambar. Pilih foto (JPEG, PNG, atau TIFF) dari sketsa tangan di atas kertas. {{cmd:PHOTOSKETCH}} menemukan keempat sudut lembar, meluruskan perspektif, mengambil ukuran kertas yang Anda sebut (`Paper`, atau yang standar terdekat) dan `Scale` sketsa (1 : n), lalu menelusuri garis pena menjadi garis, busur, dan lingkaran, dengan satu layer untuk setiap warna pena (hitam, merah, biru, hijau). Jika tidak bisa menemukan tepi kertas, ia menganggap seluruh foto sebagai lembar dan memberi tahu. Tulisan tangan tidak disertakan. Satu langkah urungkan. Dilakukan di komputer ini dengan pengolahan citra klasik, tanpa model, tidak ada yang dikirim ke mana pun. Lihat juga perintah gambar hasil pindai.

### AUTODIM

Alias: `ADIM`. Dimensi otomatis berdasarkan aturan. {{cmd:AUTODIM}} mendimensi objek yang dipilih (atau seluruh gambar) dari level dan tepi tegaknya: rantai dimensi di sepanjang sisi yang Anda pilih (`Sides`), satu dimensi keseluruhan di luarnya, lebar setiap bukaan (celah di antara garis dinding yang segaris), diameter untuk setiap ukuran lubang, dan dengan `Grid` jarak antar garis grid. Dimensi yang sudah ada tidak dibuat ulang. Satu langkah urungkan. Dihitung di komputer ini dengan aturan, tanpa model.

### GRIDMOVE

Alias: `GM`. Memindahkan garis grid membawa seluruh kumpulannya. {{cmd:GRIDMOVE}} memindahkan garis grid (garis pada layer yang namanya memuat grid atau axis) dan apa yang menggantung padanya: dinding yang berujung di garis itu meregang mengikutinya, dinding di sepanjang garis itu bergerak utuh, kolom (referensi blok dan lingkaran di garis itu), gelembung dan tag-nya ikut bergerak, dan dimensi yang titiknya berada di garis itu mengukur jarak baru. Berikan dua titik (hanya bagian yang melintasi garis yang dihitung) atau `Distance`. Satu langkah urungkan mengembalikan semuanya. Dilakukan dengan aturan di komputer ini.

### DETAILS

Alias: `DET`. Detail yang menemukan Anda. {{cmd:DETAILS}} menyimpan detail milik firma Anda sendiri: `Add` menempatkan blok gambar ini dalam daftar, `List` dan `Remove` mengelolanya, `Find` mengurutkannya untuk apa yang dipilih (atau untuk yang terakhir Anda gambar) berdasarkan kata pada layer, nama blok, pola hatch, dan catatannya dibandingkan dengan nama dan catatan setiap detail, sehingga ambang jendela Anda menemukan flashing ambang Anda. Pilih sebuah nomor dan sebuah titik untuk menempatkannya. Dengan `Hint` aktif (juga Pengaturan › CadCraft), memilih sesuatu yang cocok dengan sebuah detail menampilkan satu baris di bilah status. Daftarnya disimpan di peramban ini, di komputer ini, dan daftar itulah yang dicari. `Share` juga menempatkannya di folder Dokumen Anda (`.cadcraft/firm-details.json`, beserta gambar setiap blok): `Pull` menambahkan yang dimiliki tim Anda dan tidak Anda miliki, `Push` menambahkan yang Anda miliki dan mereka tidak miliki, `Both` melakukan keduanya, dan tidak ada yang pernah dihapus dari kedua sisi. Buka folder Dokumen dulu ({{cmd:DOCUMENTS}}); jika folder itu adalah folder Team Cloud Plan, seluruh tim berbagi satu daftar. Item detail di panel Pustaka punya tombol **Add to my firm's details** yang memasukkannya ke daftar yang sama. Dilakukan dengan kata-kata di komputer ini, tanpa model.

### SKETCHFIX

Alias: `SKF`. Sketsa pena menjadi geometri yang presisi. Tekan dan seret satu goresan bebas dalam satu waktu (pena, mouse, atau jari), lalu Enter. Setiap goresan dibaca sebagai garis, lingkaran, busur, persegi panjang, atau polyline: garis yang hampir datar dan tegak dibuat tepat datar dan tegak, goresan tertutup yang bulat menjadi lingkaran, goresan tertutup dengan empat sudut siku-siku menjadi persegi panjang, dan ujung goresan ditarik bersama dan ke ujung yang sudah ada di gambar. Satu langkah urungkan. Dilakukan dengan aturan di komputer ini, tanpa model.

### SCANATTACH dan perintah hasil pindai

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} tidak punya alias. Mereka bekerja pada gambar, masing-masing satu langkah urungkan. {{cmd:SCANATTACH}} menyisipkan PNG, JPEG, TIFF (satu halaman atau semua), atau halaman PDF yang berupa gambar. {{cmd:SCANSCALE}} menskalakan lembar dari dua titik yang dipilih dan jarak sebenarnya. {{cmd:SCANALIGN}} memindahkan dan memutarnya ke dua titik (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} menunjukkan sudut garis panjang lembar dan memutar lembar setelah Anda `Accept` atau memberi `Value`. {{cmd:SCANCLEAN}} membuatnya hitam-putih (`Threshold` Auto/Adaptive/Level, `Specks`) dan `Run`. {{cmd:SCANCROP}} menyimpan sebuah jendela. {{cmd:SCANERASE}} menghapus `Rectangle`, `Polygon`, atau `Lasso`. {{cmd:SCANTRACE}} menelusuri garis dan busur ke layer baru (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) dan melaporkan apa yang ditemukannya serta apa yang dibiarkan sebagai raster. {{cmd:SCANINFO}} mendaftar file asli dan langkah-langkahnya. {{cmd:RASTERSNAP}} mengaktifkan atau menonaktifkan snap ke garis lembar hasil pindai. Lihat topik Gambar hasil pindai dan penelusuran.

### REGEN dan REGENALL

Alias: `RE` untuk {{cmd:REGEN}}, `REA` untuk {{cmd:REGENALL}}. Membangun ulang apa yang digambar di layar dari gambar: {{cmd:REGEN}} untuk tab yang Anda lihat (pada lembar, model yang ditampilkan viewport-nya juga), {{cmd:REGENALL}} untuk setiap tab, setiap panel layar terbagi, dan setiap gambar yang terbuka. Gunakan keduanya saat gambarnya tampak usang setelah perubahan terskrip atau sangat besar, atau setelah asisten mengedit gambar; gambar itu sendiri tidak disentuh, jadi tidak ada yang perlu diurungkan.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, lalu nama tampilannya. `S` menyimpan tampilan di layar, `W` jendela yang Anda pilih, `R` menampilkan tampilan yang tersimpan, `D` menghapus satu, `?` mendaftar tampilan tab ini. Menyimpan dengan nama yang sudah ada menggantinya; setiap perubahan adalah satu langkah urungkan. Tampilan milik tab tempat mereka disimpan. File DWG dan DXF menyimpannya (tabel VIEW); tampilan lembar kembali di lembar pertama, karena file tidak menyebutkan mana yang mana.

### UNDO dan REDO

Alias: `U` untuk {{cmd:UNDO}}; {{cmd:REDO}} tidak punya alias. Juga {{key:Mod+Z}} dan {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Melompat ke panel {{ui:Layer}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock`, atau nama (`?` mendaftarkannya: Continuous, milik gambar, dan DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE dengan ukuran `2` (setengah) dan `X2` (dua kali)). {{cmd:LWEIGHT}} (`LW`): tebal garis untuk objek baru dalam mm, atau `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): skala jenis garis gambar (dapat diurungkan). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — sama dengan tombol {{ui:LWT}} di bilah status. Lihat [Tebal garis dan jenis garis](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, lalu nama baru; objek atau referensi ikut berubah. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` sampai {{key:Enter}}, lalu `Select object on target layer or [Name]` dan `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, lalu `Y`: layer dan setiap objek di atasnya hilang (bukan layer 0, DEFPOINTS, atau layer aktif). Satu langkah urungkan untuk masing-masing. Lihat [Atur gambar dengan layer](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Layer lewat memilih objek; juga di menu {{ui:Alat}} panel {{ui:Layer}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, lalu {{key:Enter}}: setiap layer lain dimatikan. {{cmd:LAYUNISO}} menyalakannya kembali. {{cmd:LAYOFF}} dan {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (atau dibekukan), berulang-ulang; `U` mengambil kembali yang terakhir, {{key:Enter}} mengakhiri. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} menyalakan setiap layer, {{cmd:LAYTHW}} mencairkan setiap layer. Setiap perintah adalah satu langkah urungkan. Lihat [Atur gambar dengan layer](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} memulai gambar kosong dan {{cmd:OPEN}} membuka DWG atau DXF, masing-masing dalam tabnya sendiri di atas gambar (gambar baru yang belum diubah dipakai sebagai ganti tab baru). Menutup tab yang punya perubahan belum disimpan akan bertanya dulu. Lihat [Bagi layar](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, juga {{key:Mod+S}}) mengunduh salinan dalam format gambar: DWG jika dibuka dari DWG, DXF jika dari DXF. Gambar baru memakai format yang terakhir dipilih di Simpan sebagai di peramban ini, jika tidak ada, DWG.

{{cmd:SAVEAS}} (juga {{key:Mod+Shift+S}}) membuka dialog {{ui:Simpan salinan sebagai}}: pilih {{ui:DWG}} (dan {{ui:Versi}}-nya), {{ui:DXF R12}} atau {{ui:DXF 2000}}, lalu {{ui:Simpan}}. Pilihan itu berlaku untuk gambar ini dan untuk gambar baru di peramban ini.

{{cmd:DXFOUT}} selalu mengunduh salinan DXF R12, tanpa mengubah format yang dipakai {{cmd:SAVE}}.

Lihat [File: apa yang bisa dibuka, apa yang disimpan](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Memulai lagi tur enam langkah untuk gambar pertama. Lihat [Memulai](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Lihat [Pengaturan](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: menambatkan atau mengambangkan baris perintah, menjadikannya satu baris, menanyakan berapa baris riwayat yang ditampilkan (0 sampai 12), atau membuka riwayat. Lihat [Pengaturan](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: bilah di atas gambar seperti sebelumnya, atau ringkas. Lihat [Pengaturan](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: langkah tempat garis pelacakan {{ui:Polar}} disejajarkan (lebih dari 0, sampai 180). Diingat di peramban ini.

### UNITS

Alias: `UN`. Cara panjang ditulis dan diketik.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural dan Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Yang lain: `Enter number of decimal places (0 to 8)`.

Dimensi baru mengikutinya. Satu langkah urungkan. Sama dengan {{ui:Format panjang}} dan {{ui:Presisi}} di {{ui:Pengaturan saat ini}}; lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Melihat tata letak IC (file aliran GDSII): spike lab, hanya untuk melihat dan mengukur.

- Pemilih file menerima file `.gds`; dengan beberapa sel teratas, `Enter the top cell to draw`.
- Setiap layer dan datatype menjadi layer gambar (`GDS 1`, `GDS 2/5`), referensi dan array ditempatkan datar, dalam satuan pengguna file (biasanya mikrometer). Satu langkah urungkan. Tidak ada yang disimulasikan atau diperiksa, dan file tidak ditulis kembali.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Diagram dari teks.

- Sebuah kotak menerima teks (atau satu baris dengan `;` di antara pernyataan di baris perintah): diagram alur Mermaid, diagram komponen PlantUML, D2, atau daftar dari-ke.
- `Specify the top left corner of the diagram`, lalu `Specify the text height`.

Blok dan konektor adalah objek biasa di layer `Diagram`, terpilih saat selesai. Satu langkah urungkan. Lihat [Gambar diagram dari teks](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Objek OLE yang dibawa DWG dan tidak bisa ditempatkan CadCraft sendiri.

- Mendaftar setiap objek: nomor, jenis, ukuran, dan apakah ia menyimpan gambar.
- `Enter an option [Place/eXit] <eXit>`: Place meminta nomor, sudut kiri-bawah, dan lebarnya, lalu menggambar bingkai dengan gambarnya. Satu langkah urungkan; objek yang disimpan tidak berubah. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Font SHX milik Anda sendiri.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Folder}} membaca setiap `.shx` di sebuah folder (CadCraft Studio; lagi di setiap awal), {{ui:Files}} mengambil file yang dipilih (peramban), {{ui:Reverse}} menata huruf satu font dari yang terakhir ke yang pertama. Gaya teks yang menyebutkan font yang dimuat digambar dengannya. Lihat [Gambar teks dengan font SHX milik Anda](topic:shx-fonts).

### LIMITS

Seberapa besar gambar dimaksudkan.

- `Specify lower left corner or [ON/OFF] <current>`: sebuah titik, `ON` atau `OFF`.
- `Specify upper right corner <current>`.

Grid mengisi batasnya, {{cmd:ZOOM}} All menampilkannya, dan dengan batas ON, titik di luarnya ditolak (`**Outside limits`). Satu langkah urungkan; disimpan di DWG dan DXF. Lihat [Atur batas gambar](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Cara sudut ditampilkan dan diketik.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, atau untuk dua lainnya `Enter precision` (0 derajat, 2 menit, 4 detik, 5 sampai 8 desimal detik).

Satu langkah urungkan; disimpan di DWG dan DXF. Sama dengan {{ui:Format sudut}} di {{ui:Pengaturan saat ini}}. Lihat [Ketik dan tampilkan bearing dan sudut](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Muat aplikasi…}}. Dialog {{ui:Muat aplikasi}}: muat rutin `.lsp` dan file dialog `.dcl`, bongkar, muat lagi dari riwayat, dan Startup Suite. Perintah `(defun c:NAME …)` dari rutin kemudian bekerja seperti perintah lainnya. Lihat [Muat aplikasi](topic:load-applications) dan [Jalankan rutin LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Edit alias…}}) membuka file alias Anda (baris `ALIAS, *COMMAND`); {{ui:Simpan}} menerapkannya. {{cmd:REINIT}} menerapkannya lagi. Lihat [Edit alias perintah](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; atau {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:LISP editor}}. Membuka editor LISP, jendela yang tetap terbuka di samping gambar.

- Teksnya: nomor baris, pasangan tanda kurung di kursor ditandai (merah jika tidak punya pasangan), {{key:Enter}} membuat indentasi baris baru di bawah tanda kurung yang terbuka, {{key:Tab}} mengetik dua spasi, {{key:Esc}} meninggalkan teks.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): membaca setiap bentuk, seperti {{cmd:APPLOAD}} dengan file, dan membuat perintah `c:`-nya. File tampil di daftar {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): mengevaluasi bentuk yang dipilih, atau bentuk tempat kursor berada.
- {{ui:Stop}}: mengakhiri rutin yang sedang berjalan.
- {{ui:Console}}: apa yang dicetak rutin, dan setiap galat beserta barisnya; klik galat untuk pergi ke sana. Teks dijalankan satu bentuk tingkat atas dalam satu waktu, jadi barisnya adalah milik bentuk itu, atau di dalamnya baris yang memanggil fungsi yang disebut galat.
- {{ui:Baru}}, {{ui:Open}}, {{ui:Simpan}} ({{key:Ctrl+S}}): file `.lsp`. Teks juga disimpan di peramban ini, sehingga menutup jendela tidak menghilangkannya.
- Di samping teks: fungsi yang didefinisikan rutin, yang dipanggilnya tetapi LISP ini belum punya, yang dipanggilnya tetapi tidak didefinisikan di dalamnya dan tidak bawaan, serta daftar lengkap apa yang dibangun dan apa yang tidak.

Teks dengan tanda kurung yang tidak pernah ditutup, atau string yang tidak pernah berakhir, tidak dijalankan: barisnya disebutkan. Tidak ada debugger langkah demi langkah, breakpoint, atau jendela watch. Lihat [Jalankan rutin LISP](topic:run-lisp).

### HELP

Alias: `?`. Mencetak setiap perintah, aliasnya, dan deskripsi satu baris di riwayat baris perintah. Ia tidak membuka bantuan ini: tekan {{key:F1}} atau klik {{ui:Bantuan}} untuk itu.

## Prompt pilih objek

Pada setiap prompt `Select objects`: klik objek, gambar jendela (kiri ke kanan) dan silang (kanan ke kiri) dengan dua klik, atau tekan dan seret lasso ({{key:Space}} saat menyeret: jendela, silang, pagar), {{key:Shift}}+klik untuk menghapus, dan tekan {{key:Enter}} untuk selesai. Anda juga bisa mengetik `ALL` (semuanya), `L` (objek terakhir), `P` (Previous: yang dipakai perintah terakhir), `F` (Fence: objek yang dilintasi garis titik; `U` mengambil kembali sebuah titik), `W` (Window), `C` (Crossing), `R` (mode Remove: pilihan mengeluarkan objek; prompt berbunyi `Remove objects`), dan `A` (Add again). `?` mendaftarkannya. Mereka tidak ditampilkan di prompt. {{key:Tab}} di atas objek yang bertumpuk menyorot yang berikutnya; klik untuk memilihnya. Lihat [Pilih objek](topic:select-objects).

### ACCESS

Alias: `AX`. Menggambar tanpa melihat. {{cmd:ACCESS}} mengaktifkan atau menonaktifkan Access (`On`, `Off`) dan mengganti suara snap (`Sound`) dan perintah suara (`Voice`); ia menyebutkan keadaan saat ini lebih dulu. Dengan Access aktif, setiap perintah dan hasil dibacakan lewat pembaca layar Anda, dan area gambar memiliki kursor keyboard. Topik bantuan "Draft without sight" berisi tombol-tombolnya.

### DESCRIBE

Alias: `DESC`. Menyebutkan isi gambar: berapa objek, jenis apa, seberapa besar, berapa layer, apa yang dipilih. Hanya membaca; tidak mengubah apa pun.

### WHEREAMI

Alias: `WHERE`. Menyebutkan di mana kursor berada, dalam satuan gambar.

### NEARBY

Menyebutkan apa yang ada dekat kursor, yang terdekat dulu, masing-masing dengan jaraknya dan sisi tempat ia berada.

### SAYSEL

Menyebutkan apa yang dipilih, satu kalimat per objek (panjang garis, ujung dan sudut; radius dan pusat lingkaran; teks seperti yang tertulis).

### VOICE

Mengaktifkan atau menonaktifkan perintah yang diucapkan. Dikenali di komputer ini; jika peramban tidak bisa melakukannya, suara tetap nonaktif kecuali Anda memilih layanan online peramban di Pengaturan.

### TOUCHCROSSHAIR

Alias: `TCX`. Kursor silang bergeser untuk menggambar dengan jari, sehingga ujung jari tidak menutupi titik yang Anda pilih. Saat aktif, satu jari di gambar tidak memilih: ia menggerakkan kursor silang yang berada di atas jari dan di satu sisi. Snap objek dan pelacakan mengikuti kursor silang. Mengangkat jari tidak memilih apa pun dan membiarkan kursor silang di tempatnya. Untuk memilih, tekan tombol {{ui:Click}} di sudut gambar, atau ketuk di mana saja pada gambar dengan jari kedua. Tahan {{ui:Click}} saat Anda menggerakkan jari lainnya untuk menyeret (jendela pilihan, lasso, grip). Jari yang ditekan dan ditahan diam, atau tombol {{ui:Enter}}, adalah Enter. Dua jari menggeser dan memperbesar seperti biasa. Dekat tepi bawah dan tepi jauh, kursor silang mendekati jari, sehingga setiap bagian gambar bisa dijangkau. Pena dan mouse selalu memilih secara langsung.

{{cmd:TOUCHCROSSHAIR}} menyebutkan keadaannya dan menanyakan `ON`, `OFF`, `Auto` (aktif hanya jika jari adalah satu-satunya penunjuk, sehingga nonaktif di komputer dengan mouse), `Distance` (seberapa jauh kursor silang dari jari, 24 sampai 240 piksel), atau `Side` (`Left`: ke atas dan ke kiri, untuk tangan kanan; `Right` untuk tangan kiri; tombol berpindah ke sudut lain). Pilihan yang sama ada di Pengaturan › CadCraft, dan di perangkat dengan layar sentuh bilah status memiliki sakelar {{ui:Offset crosshair}}. Pilihannya disimpan di peramban ini.

### WHOHAS

Menyebutkan siapa yang membuka sebuah gambar. Di CadCraft Studio pada komputer, membuka DWG atau DXF menulis file kunci kecil di sebelahnya (`Plan.dwg.cclock`: siapa, sejak kapan, versi mana), menyegarkannya setiap menit selama gambar terbuka, dan menghapusnya saat gambar ditutup. Membuka gambar yang sedang dibuka orang lain menyebutkan siapa dan sejak kapan, lalu menawarkan {{ui:Open read-only}} (Simpan kemudian meminta nama baru), {{ui:Open anyway}} (orang lain diberi tahu saat penyegarannya berikutnya), atau {{ui:Batal}}. Menyimpan di atas file yang dibuka orang lain bertanya dulu. Kunci yang tidak disegarkan selama lima menit disebut basi: salinan lain ditutup tanpa menyimpan atau komputernya sedang tidur.

{{cmd:WHOHAS}} menanyakan `Current` (gambar yang terbuka), `File` (pilih satu), `FOlder` (pilih folder: setiap gambar di dalamnya yang sedang terbuka di suatu tempat didaftar), `Path` (ketik path lengkap), atau `Name` (nama yang dilihat orang lain; nama akun Anda saat masuk). Studio hanya bisa menjangkau folder yang Anda pilih: untuk gambar yang dibuka dari folder yang tidak pernah dipilih, ia menyebutkan sekali bahwa ia tidak bisa mencatat gambar sebagai terbuka; `FOlder` memilih folder itu, dan kunci bekerja di sana sejak itu. Kunci hanyalah catatan untuk orang, bukan penghalang: program lain tetap bisa menulis file itu. Di peramban tidak ada folder untuk dilihat, dan perintah menyebutkan hal itu.

### OVERKILL

Menghapus objek duplikat dan merapikan garis dan busur yang tumpang tindih, untuk gambar yang datang penuh dengan garis ganda. `Select objects to clean up`, {{key:Enter}}, lalu {{key:Enter}} lagi untuk membersihkan dengan pengaturan yang ditampilkan, atau ubah satu dulu:

- `Tolerance`: seberapa dekat dua koordinat harus untuk dianggap sama (0.000001 pada awalnya; 0 berarti persis sama).
- `Ignore`: properti yang boleh berbeda di antara dua objek yang sebaliknya sama. Ketik sebuah nama untuk mengaturnya: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, atau `None` / `All`. {{key:Enter}} jika selesai.
- `Overlap`: aktif atau nonaktif. Jika aktif, garis pada satu garis lurus yang tumpang tindih menjadi satu garis (garis yang berada di dalam garis lain langsung dihapus), dan busur pada satu lingkaran yang tumpang tindih menjadi satu busur; busur yang menutup satu putaran penuh menjadi lingkaran, dan busur yang berada pada lingkaran dihapus.
- `Ends`: aktif atau nonaktif. Jika aktif, garis pada satu garis lurus dan busur pada satu lingkaran yang hanya bersentuhan ujung ke ujung menjadi satu potongan.

Setiap jenis objek diperiksa untuk duplikat: dua objek adalah duplikat jika geometrinya sama dalam toleransi dan layer, warna, jenis garis, skala jenis garis, tebal garis, ketebalan, transparansi, dan tingginya cocok (dikurangi yang Anda abaikan). Garis dan polyline terbuka juga cocok jika digambar dari arah sebaliknya. Objek pertama dalam urutan gambar tetap dan mempertahankan propertinya sendiri. Perintah melaporkan berapa objek yang diperiksa dan dihapus: duplikat, potongan yang tumpang tindih digabung, potongan yang disambung ujung ke ujung. Satu {{cmd:UNDO}} mengembalikan semuanya. Pengaturannya berlaku sampai Anda menutup jendela gambar.

Ia membiarkan: objek di layer terkunci dan objek tersembunyi. Ia tidak menggabungkan garis dengan tinggi (Z) (duplikat persis dari garis itu tetap dihapus), dan ia tidak menyentuh segmen di dalam polyline (tidak dipangkas), garis di atas segmen polyline, dan polyline tertutup yang digambar dari arah sebaliknya.

### DRAWORDER

Mengubah objek mana yang digambar di depan. `Select objects to re-order`, {{key:Enter}}, lalu `Above objects`, `Under objects`, `Front`, atau `Back` ({{key:Enter}} = `Back`). `Above objects` dan `Under objects` meminta objek referensi: pilihan diletakkan tepat di depan objek paling depan di antara mereka, atau tepat di belakang objek paling belakang. Objek yang dipilih mempertahankan urutannya sendiri di antara mereka. Satu langkah urungkan. Urutannya disimpan bersama gambar di DWG dan DXF, di mana ia adalah urutan objek ditulis.

Di layar CadCraft menggambar area berisi (hatch solid, polyline lebar, masker) lebih dulu, lalu garis, lalu teks, sehingga teks selalu terbaca di atas isian; urutan gambar tampak di antara objek berisi dan di antara gambar. Program lain yang membuka file menggambar setiap objek dalam urutan yang tersimpan.

### TEXTTOFRONT

Membawa teks, dimensi, dan leader ke depan segala yang lain di ruang terbuka: `Text`, `Dimensions`, `Leaders`, atau `All` ({{key:Enter}} = `All`). Satu langkah urungkan. Ia memberi tahu jika tidak ada yang seperti itu, atau jika sudah di depan.

### HATCHTOBACK

Mengirim setiap hatch di ruang terbuka ke belakang segala yang lain, sehingga isian berhenti menutupi garis dan teks di file yang tersimpan. Tanpa prompt. Satu langkah urungkan.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Hanya menampilkan objek yang dipilih: semua yang lain di ruang terbuka keluar dari pandangan sampai {{cmd:UNISOLATEOBJECTS}}. Tidak seperti {{cmd:LAYISO}}, ia bekerja pada objek yang Anda pilih, apa pun layernya, dan tidak mengubah layer. Objek tersembunyi tidak digambar, dipilih, ditangkap snap, di-zoom, atau dicetak, dan perintah yang menerima `ALL` melewatinya. Apa yang Anda gambar saat objek terisolasi tampil seperti biasa.

Ini hanya untuk sesi: tidak ada yang tersimpan bersama gambar, bukan langkah urungkan, dan membuka gambar lagi menampilkan semuanya. Selama objek tersembunyi, bilah status menampilkan tombol dengan jumlahnya; klik untuk menampilkannya lagi.

### HIDEOBJECTS

Menyembunyikan objek yang dipilih sampai {{cmd:UNISOLATEOBJECTS}}. Aturan yang sama dengan {{cmd:ISOLATEOBJECTS}}: hanya untuk sesi, tidak disimpan, bukan langkah urungkan.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Menampilkan lagi setiap objek yang disembunyikan oleh {{cmd:ISOLATEOBJECTS}} atau {{cmd:HIDEOBJECTS}}, dan menyebutkan berapa yang kembali.

### LAYLOCKFADE

Mengatur bagaimana objek di layer terkunci tampil dan apakah klik bisa mencapainya. Ia menyebutkan keadaan saat ini, lalu menerima:

- angka dari 0 sampai 90: jumlah pudar dalam persen (50 pada awalnya). 0 mematikan pudar.
- `ON` atau `OFF`: pudar aktif atau nonaktif, dengan jumlahnya dipertahankan.
- `Pick`, lalu `Yes` atau `No`: bolehkah klik memilih objek di layer terkunci saat tidak ada perintah yang berjalan? `No` (bawaan): mereka tidak bisa dipilih sama sekali. `Yes`: klik atau jendela memilihnya agar {{ui:Properti}} bisa menampilkannya; mereka tetap tidak bisa diubah, dan `Select objects` milik perintah tidak pernah mengambilnya.

Snap objek menemukan objek di layer terkunci dalam kedua keadaan. Cetakan tidak pernah dipudarkan. Kedua pengaturan adalah milik Anda, bukan milik gambar, dan juga ada di {{ui:Pengaturan}} di bawah {{ui:Locked layers}}.

### BURST

Memecah referensi blok dan mempertahankan apa yang dikatakan atributnya. `Select block references to burst`, {{key:Enter}}: setiap referensi diganti dengan objek blok, dan setiap nilai atribut yang terlihat menjadi teks biasa di layer atributnya sendiri (atribut di layer 0 jatuh ke layer referensi, seperti objek blok lainnya di layer 0). Atribut yang tidak terlihat dibuang. Blok di dalam blok tetap menjadi referensi blok. Satu langkah urungkan; ia melaporkan referensi yang dipecah dan nilai atribut yang diubah menjadi teks.

Ia menolak tautan gambar menurut nama (ikat dulu, atau salin darinya dengan {{cmd:NCOPY}}), dan membiarkan objek lain yang dipilih. Untuk referensi blok, {{cmd:EXPLODE}} memberikan objek yang sama; {{cmd:BURST}} hanya mengambil referensi blok dan menghitung teks atributnya.

### TXT2MTXT

Alias: `T2M`. Menggabungkan teks satu baris menjadi satu teks paragraf. `Select single-line text to join`, {{key:Enter}}, lalu `Paragraph` (baris-barisnya digabung dan dibungkus pada lebar baris terlebar) atau `Lines` (setiap teks tetap sebagai baris sendiri); {{key:Enter}} mengambil yang terakhir dipakai. Baris diurutkan dari atas ke bawah, lalu dari kiri ke kanan, sepanjang arah teks paling atas. Paragraf menggantung dari sudut kiri-atas teks paling atas dan mengambil tingginya, rotasinya, gayanya, layernya, dan warnanya. Satu langkah urungkan.

Teks yang sudah berupa paragraf, teks kosong, dan objek lain dalam pilihan dibiarkan, dan perintah menyebutkan berapa jumlahnya.

### NCOPY

Menyalin objek dari referensi blok atau gambar tertaut ke dalam gambar, tanpa memecah apa pun. `Pick an object inside a block reference or a linked drawing`: objek yang paling dekat dengan pilihan disalin di tempat ia terlihat, berapa pun kedalaman blok tempat ia berada; pilih lagi, lalu {{key:Enter}}. Berikutnya `Base point to move the copies`: {{key:Enter}} membiarkannya di tempat, atau berikan titik dasar dan titik kedua. Seluruh perintah adalah satu langkah urungkan.

Salinan mengambil layer tempat ia terlihat: objek di layer 0 di dalam blok jatuh ke layer referensi tempat ia berada, dan warna ByBlock menjadi warna referensi itu. Dari gambar tertaut, layer `Plan|Walls` menjadi `Plan$0$Walls` (nama yang diberikan tautan), dibuat dengan warna, jenis garis, dan tebal garis layer tertaut itu. Nilai atribut disalin sebagai teks. Referensi blok di layer terkunci tidak bisa dipilih.

### FLATTEN

Mengatur tinggi (Z) dan tebal objek yang dipilih menjadi 0. `Select objects to flatten`, {{key:Enter}}. Ia juga meratakan objek di dalam definisi blok yang digunakan pilihan (dan blok di dalamnya), sehingga setiap referensi ke blok itu berubah; gambar tertaut dibiarkan apa adanya. Satu langkah urungkan; ia melaporkan berapa objek yang berubah, dan menyebutkan jika tidak ada yang punya tinggi atau tebal.

Yang disimpan CadCraft dari dimensi ketiga dalam gambar 2D adalah: tinggi pada lingkaran, busur, elips, titik, teks, referensi blok, hatch, leader, dan polyline (elevasinya), tinggi di setiap ujung garis, dan tebal pada garis, lingkaran, busur, polyline, titik, dan teks, seperti yang dimiliki file itu. {{cmd:FLATTEN}} menghapus tepat itu. Ia tidak menyentuh model 3D di tab 3D, muka 3D, atau solid, dan objek yang digambar pada bidang miring sudah dibawa ke bidang gambar saat file dibuka.

### BREAKLINE

Menggambar garis dengan simbol putus, untuk tampilan yang dipotong pendek. Ia menyebutkan ukuran dan perpanjangan saat ini, lalu `First point of the break line` (atau `Size` / `Extension` untuk mengubahnya lebih dulu), `Second point`, dan `Where the break symbol sits`: klik sepanjang garis, atau {{key:Enter}} untuk tengah. Hasilnya adalah satu polyline di layer saat ini: garis yang melewati setiap titik sepanjang perpanjangan, dengan goresan berbentuk Z setinggi ukurannya dan setengah panjangnya.

`Size` dan `Extension` diingat sebagai pengaturan Anda (ukuran dimulai dari dua kali tinggi teks dimensi dikali skala dimensi; perpanjangan dimulai dari setengah ukuran). {{key:Enter}} mengulang perintah.

### AUDIT

Memeriksa gambar yang terbuka dari kerusakan dan memperbaikinya. {{cmd:AUDIT}} memeriksa setiap objek di model, di lembar, dan di dalam blok, serta tabel layer, lalu mendaftar apa yang ditemukan menurut jenisnya:

- angka yang tidak berhingga atau sangat besar;
- objek tanpa ukuran: garis tanpa panjang, lingkaran tanpa radius, polyline dengan satu titik, teks tanpa huruf atau tinggi, referensi blok dengan skala nol;
- objek di layer yang tidak dimiliki gambar; referensi ke blok yang tidak ada; nama gaya teks dan dimensi serta nama jenis garis yang tidak ada di gambar;
- blok yang memuat dirinya sendiri, langsung atau melalui blok lain;
- objek yang memakai id, kunci, atau handle file yang sama;
- dimensi tanpa titik yang diukur darinya, dan hatch yang batasnya bukan garis luar tertutup.

Lalu ia menanyakan `Fix them? [Yes/No]`. `No` tidak mengubah apa pun. `Yes` memperbaiki semuanya dalam satu langkah urungkan: yang tidak bisa digambar dihapus (angka buruk, tanpa ukuran, blok hilang, dimensi rusak, hatch tanpa batas yang bisa dipakai, referensi yang menutup lingkaran blok); layer yang hilang dibuat; nama gaya dan jenis garis yang tidak dikenal kembali ke bawaan; kunci yang sama diganti. Ia mencetak berapa objek yang dihapus dan berapa yang diperbaiki. Temuan yang sama muncul di panel Masalah, masing-masing dengan {{ui:Repair}} sendiri.

Ia tidak menolak apa pun, tetapi hanya memeriksa apa yang digambar CadCraft sendiri: data yang disimpan untuk program lain (solid 3D, objek OLE) tidak dibuka.

### RECOVER

Membuka DXF atau DWG yang rusak. {{cmd:RECOVER}} meminta file, membaca apa yang bisa dibaca alih-alih menolak file, mendaftar apa yang dilewati atau diasumsikan, lalu memeriksa dan memperbaiki gambar seperti yang dilakukan {{cmd:AUDIT}} dengan `Yes`.

- DXF: baris yang bukan bagian dari pasangan kode dan nilai dilewati sampai pasangannya sejajar lagi; bagian tanpa akhir ditutup; file yang terpotong dibaca sampai titik potongnya; DXF biner yang terpotong dibaca sampai nilai utuh terakhirnya. Ketika sebuah bagian, blok, atau objek masih tidak bisa dibaca, ia dikeluarkan dan disebutkan namanya, dan pembacaan berlanjut melewatinya.
- DWG: objek yang gagal pemeriksaannya atau tidak bisa didekode dikeluarkan, dan daftar objek yang hilang dibangun ulang dengan menelusuri data objek.

File di disk tidak diubah. Gambar yang dipulihkan terbuka dalam keadaan belum disimpan: simpan dengan nama baru. File yang tidak ada apa pun bisa dibaca darinya ditolak, dengan alasannya.

### LEGACYTEXT

Mengubah teks yang diketik dengan font Vietnam 8-bit lama menjadi Unicode. Nama pendeknya `TEXTTOUNICODE` dan `VNTEXT`.

Gambar Vietnam lama menyimpan teksnya sebagai karakter Barat yang hanya diubah menjadi Vietnam oleh font: teks TCVN3 dalam font ABC (`.VnTime`, `.VnArial`, dan font huruf kapital yang namanya berakhir `H`), dan teks VNI dalam font VNI (`VNI-Times`). CadCraft menampilkan teks seperti itu sebagaimana terbacanya sejak gambar dibuka, berdasarkan font gaya teksnya, objeknya, atau potongan dalam teks paragraf; file tetap menyimpan karakter lama.

{{cmd:LEGACYTEXT}} menyebutkan berapa teks yang ditemukan di setiap pengodean dan menanyakan `Convert … to Unicode?`. `Yes` menulis ulang setiap teks (model, lembar, blok, nilai dan definisi atribut), dan memberi gaya teks font Unicode (Times New Roman, Arial, atau Courier New, sesuai jenis font lama), dalam satu langkah urungkan. Format di dalam teks paragraf dipertahankan.

Ketika tidak ada teks yang memakai font yang dikenal (gaya yang kehilangan nama fontnya), ia menanyakan `Read selected texts as [Tcvn3/Vni/None]`: pilih pengodean dan pilih teksnya. Teks yang sudah Unicode dibiarkan. Penimpaan teks dimensi dan teks multileader tidak diubah.
