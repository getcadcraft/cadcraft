---
title: Belum dibina
summary: Perkara yang belum dilakukan oleh binaan aplikasi lukisan CadCraft ini, dan apa yang perlu dilakukan sebagai ganti hari ini.
keywords: tiada, had, ctb, stb, gaya plot, sifat, ucs, beranotasi, blok dinamik, splin, peta jalan, tidak disokong, simpan dwg, hatch, regang, tatasusunan, cantum, matchprop, putus, panjangkan, jenis garisan, ketebalan garisan, xref, awan, 3d, pepejal, boolean, multipetunjuk, wipeout
from: 87e56521
---

CadCraft sedang dibangunkan. Halaman ini menyenaraikan perkara yang tidak dilakukan oleh binaan semasa, supaya anda tidak perlu mencarinya. Setiap item menyatakan apa yang perlu dilakukan sebagai ganti hari ini.

## Fail dan simpanan

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| DWG CadCraft yang disemak dalam AutoCAD sendiri | Setiap versi yang disimpan dibaca semula oleh tiga pembaca DWG program lain dan oleh CadCraft. Lihat [Apa yang DWG simpan dan ubah](topic:files#what-a-dwg-keeps-and-changes). |
| Menyimpan DXF yang lebih baharu daripada 2000 | Simpan sebagai DXF 2000, atau sebagai DWG sehingga AutoCAD 2018. |
| Menyimpan ganti fail yang dibuka dalam pelayar | Setiap simpanan memuat turun salinan baharu; ganti fail lama dengan tangan jika anda mahu. Dalam CadCraft Studio, {{key:Mod+S}} menulis semula ke fail yang anda buka. |
| Simpanan awan dan penyegerakan antara komputer | CadCraft belum menghantar simpanan ke awan: simpan fail DWG dan DXF anda dalam folder anda sendiri. Dalam CadCraft Studio, [Sejarah](topic:history) menyenaraikan versi awan bagi lukisan yang disimpan dari tempat lain dan salinan simpanan anda sendiri pada komputer ini. |
| Overlay, dan menyunting lukisan yang dipautkan di tempatnya | Lampirkan lukisan sebagai pautan dan muat semula selepas menukar lukisan yang satu lagi. Pautan kekal sebagai pautan apabila anda simpan sebagai DWG, dan {{cmd:XCLIP}} memotongnya. |
| Gambar dalam DXF; wipeout yang menyembunyikan apa yang ada di bawahnya | DXF menyimpan gambar sebagai bingkainya dengan nama fail; DWG menyimpannya sebagai gambar — lihat [Gambar dalam lukisan](topic:pictures). Wipeout dipaparkan sebagai bingkainya. |
| Menyunting multipetunjuk dengan garisan petunjuk melengkung, dengan garisan petunjuk di kedua-dua sisi kandungan, atau dengan blok yang diputar atau diskala tidak sekata | Ia dilukis seperti yang dilukis oleh program lain dan bergerak sebagai satu. Multipetunjuk dengan garisan petunjuk lurus ke satu pendaratan, dan teks atau blok sebagai kandungan, boleh disunting ({{cmd:MLEADEREDIT}}). |
| Dalam jadual daripada program lain: sel yang mengandungi blok, pemformatan teks dalam sel, sempadan dan warna setiap sel bagi jadual DXF, atau jadual yang dipecahkan kepada lajur | Jadual dibuka sebagai jadual yang boleh disunting ({{cmd:TABLEDIT}}) dan dipaparkan seperti yang dilukis oleh program lain sehingga anda menyuntingnya; kemudian CadCraft melukis semula daripada selnya: teks biasa, formula seperti `=G3*H3` dan `=Sum(I3:I9)`, penjajaran dan ketinggian teks. Sel blok menjadi kosong. Jadual DWG yang tidak disunting disimpan semula dengan data sel yang dibawanya. |
| Objek jadual sebenar dalam DXF yang disimpan | DWG menyimpan jadual sebagai jadual yang boleh disunting oleh program lain. DXF menyimpannya sebagai blok yang melukisnya, dengan rekod CadCraft sendiri: CadCraft membukanya semula sebagai jadual; program lain melihat blok. Jadual yang dicerminkan atau diskala tidak sekata disimpan begitu juga dalam DWG. |
| Salin dan tampal dengan program lain | Papan keratan CadCraft berfungsi antara lukisan CadCraft dan tab dalam pelayar yang sama, bukan dengan program lain. Simpan sebagai DWG atau DXF dan buka di sana. Lihat [Salin, tampal dan pendua](topic:copy-paste). |

## Melukis dan menyunting

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| Corak hatch yang CadCraft tidak ada, dan isian kecerunan tepat seperti yang dicat oleh program lain | Hatch dibuka dengan corak yang CadCraft tidak ada dipaparkan sebagai satu tona. Isian kecerunan ({{cmd:GRADIENT}}) dicat mengikut cara CadCraft sendiri bagi setiap jenis: serupa dari segi jenisnya dengan program lain, bukan titik demi titik. DWG 2004 dan yang lebih baharu menyimpannya sebagai hatch kecerunan sebenar; dalam fail DXF 2000 atau DWG 2000 hanya CadCraft yang membacanya semula, dan program lain melihat isian pepejal. Corak dimuat dari fail `.pat`, dan hatch boleh dipautkan kepada sempadannya supaya ia mengikutnya: lihat [Hatch dan kawasan isian](topic:hatch). |
| Jenis garisan dengan bentuk atau teks di dalamnya, dan ketebalan garisan dalam DXF R12 yang disimpan | Bentuk dan teks dalam jenis garisan fail ditinggalkan daripada putus-putusnya; simpan sebagai DWG untuk mengekalkan ketebalan garisan. |
| Hatch berpola dalam DXF yang disimpan | R12 tiada hatch: ia disimpan sebagai garis luarnya. Simpan sebagai DWG untuk mengekalkan corak. |
| Tatasusunan yang dibuat oleh program lain atau yang boleh disunting olehnya; baris dan aras dalam tatasusunan laluan dan kutub; tatasusunan yang mengikut lengkung lintasannya | Tatasusunan yang dibuat dengan ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; ditukar dengan {{cmd:ARRAYEDIT}}) disimpan sebagai rujukan blok dengan nombor CadCraft sendiri: program lain memaparkan, menggerak, mencetak dan memecahkannya tetapi tidak dapat menukar kiraannya, dan tatasusunan yang dibuat dalam program lain dibuka di sini sebagai rujukan blok biasa. Tatasusunan laluan menyimpan satu salinan lintasannya: menyunting lengkung selepas itu tidak menggerakkan item. |
| Viewport helaian yang dipotong daripada dan ke program lain | Viewport yang dipotong dengan {{cmd:VPCLIP}} atau dibuat dengan {{cmd:MVIEW}} Polygonal atau Object disimpan dengan garis luar CadCraft sendiri: program lain membukanya sebagai segi empat tepat di sekelilingnya, dan viewport yang dipotong dalam program lain dibuka di sini sebagai segi empat tepatnya. DXF R12 hanya menyimpan segi empat tepat. |
| {{cmd:STRETCH}} dengan poligon silang | Gunakan satu atau lebih tetingkap silang. |
| {{cmd:PEDIT}} Edit vertex (satu bucu setiap kali pada baris arahan) | Grip, dan pelayar bucu dalam Sifat (setiap bucu, lebarnya dan bulge). Selebihnya PEDIT sudah dibina: lihat [Splin dan polygaris](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} dan {{cmd:JOIN}} pada elips dan splin | {{cmd:EXPLODE}} splin (atau {{cmd:PEDIT}} ia) untuk mendapat polygaris yang boleh digunakan oleh arahan ini. |
| Fillet dan chamfer antara segmen lengkok polygaris dan segmen di sebelahnya; fillet yang menyambungkan garisan ke dalam polygaris | {{cmd:EXPLODE}} polygaris, kemudian fillet bahagian-bahagiannya. Lengkok fillet ditambah sebagai objek sendiri. |
| Pangkas dan panjangkan: pilihan Projek (3D) dan memanjangkan hujung lengkok polygaris | Pangkas dalam satah lukisan; bagi hujung lengkok, pecahkan polygaris atau lukis semula lengkok itu. |
| Objek OLE: memasukkannya, menjalankan atau menyuntingnya; memaparkan yang ada dalam DWG di tempat fail meletakkannya; gambar metafail | Lihat [Gambar](topic:pictures#objects-from-other-programs-ole). Objek DXF dipaparkan sebagai bitmapnya atau bingkai berlabel; objek DWG dikekalkan, tidak dilukis di tempatnya ({{cmd:OLELIST}} menyenaraikannya dan meletakkan salinan gambar di tempat yang anda nyatakan). |
| Menaip kod pemformatan (tebal, pecahan bertindan, warna mengikut perkataan) dalam teks perenggan; fon selain fon gaya Helvetica; lajur | Pemformatan yang datang dalam fail dikekalkan, dilukis dan disimpan (lihat Teks); teks perenggan baharu mempunyai satu ketinggian dan satu warna. |
| Teks perenggan yang disunting pada putarannya | Penyunting dibuka mendatar; teks mengekalkan putarannya. |
| Multipetunjuk yang disimpan sebagai objek multipetunjuk dalam DXF | DWG menyimpannya sebagai multipetunjuk, dengan setiap garisan petunjuk dan blok sebagai kandungan; DXF menyimpan apa yang dilukisnya (garisan, kepala anak panah, dan teks atau blok). |
| Dalam jadual ({{cmd:TABLE}}): teks yang dibalut dalam sel, jadual yang dipecahkan kepada bahagian, gaya teks sendiri jadual dan warna mengikut jenis baris dalam kotak dialog, atau pautan data ke fail hamparan (`.xlsx`) atau yang membaca fail itu sendiri | Teks sel hanya pecah di tempat anda memecahkannya ({{key:Alt+Enter}}); lebarkan lajur. {{cmd:DATALINK}} membaca fail `.csv`, dan {{cmd:DATALINKUPDATE}} meminta anda memilih fail semula. {{cmd:DATAEXTRACTION}} dan {{cmd:COUNTTABLE}} menghasilkan jadual yang tidak mengikut lukisan dengan sendirinya: jalankan semula (kiraan hidup: {{cmd:BOMTABLE}}). |
| Definisi atribut yang berdiri sendiri dalam fail yang disimpan (di luar blok), atribut berbilang baris | Letakkan definisi atribut ke dalam blok sebelum menyimpan: jika berdiri sendiri ia disimpan sebagai teks yang memaparkan tag. |
| Keadaan lapisan (menyimpan dan memulihkan lapisan mana yang hidup) | Gunakan {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, atau hidupkan dan matikan lapisan dengan tangan. |
| Pemilihan poligon tetingkap dan poligon silang, dan penapis pilihan yang disimpan | Pagar (`F`), Tetingkap, Silang, Alih keluar (`R`), {{cmd:QSELECT}} untuk peraturan. |


## Panel Sifat

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| Melukis pilihan Fit, dan kedudukan teks mendatar serta teks di bawah garisan bagi dimensi selain linear dan sejajar | Ia dikekalkan pada objek, dipaparkan dalam Sifat dan disimpan; CadCraft meletakkan teks mengikut peraturannya sendiri. |
| Bahan yang dilihat oleh program lain | Fail yang disimpan mengekalkan nama bahan untuk CadCraft; program lain memaparkan bahan lapisan. |
| Ketelusan dalam DWG 2000 dan fail DXF | Program lain memaparkan objek tersebut sebagai pepejal; CadCraft mengekalkan ketelusan. Simpan sebagai DWG 2004 atau yang lebih baharu untuk semua pihak. |
| Pautan hatch yang dibuat dalam program lain | CadCraft menyimpan pautannya sendiri dalam fail DWG dan DXF 2000; pautan yang dibuat dalam program lain tidak dibaca. Gunakan `HATCHEDIT` dan Pautan: lihat [Hatch dan kawasan isian](topic:hatch). |
| Koordinat dalam Sifat pada UCS | Sifat memaparkan koordinat dunia; bar status dan {{cmd:ID}} menunjukkan koordinat UCS. Lihat [Pusingkan pandangan dan guna koordinat anda sendiri](topic:ucs-and-turned-view). |
| Kedudukan berasingan bagi objek beranotasi pada setiap skalanya; membaca rekod setiap skala yang disimpan oleh program lain | Teks atau dimensi beranotasi menyimpan senarai skala ({{cmd:OBJECTSCALE}}) dan setiap viewport memaparkannya pada saiz bagi skalanya, di tempat yang sama. Senarai itu disimpan sebagai data CadCraft sendiri: program lain melihat objek pada satu skala yang ia disaiz untuknya, dan senarai yang dibuat dalam program lain tidak dibaca. Lihat [Unit, kertas dan skala](topic:units-papers-scales#annotate-by-scale). |
| Menukar jarak, sudut atau pembalikan blok dinamik; blok dinamik kekal dinamik apabila anda simpan dalam versi DWG lain atau sebagai DXF | Tukar keadaan keterlihatannya dalam Sifat › {{ui:Tersuai}}; nilai lainnya dipaparkan di situ secara baca sahaja. Ia kekal dinamik apabila anda simpan sebagai DWG dalam versi yang sama dengan lukisan itu. Lihat [Blok dinamik](topic:dynamic-blocks). |
| Toleransi suai splin, darjah splin 6 ke atas, splin 3D | Titik suai dan titik kawalan, darjah 1 hingga 5 dan berat sudah dibina: lihat [Splin dan polygaris](topic:splines). Ketinggian splin (Z) tidak dikekalkan. |

## Alat ketepatan

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| Penjejakan daripada titik merentas arahan, dan kotak dialog tetapan penjejakan (sudut kutub relatif, sudut tambahan) | {{cmd:POLARANG}} menetapkan langkah; dapatkan semula titik dalam arahan seterusnya. |
| Snap ke grid | Taip koordinat; grid hanya panduan visual. |
| Pilihan Lengkok dan Panjang semasa memilih bucu kawasan, dan MEASUREGEOM Volume | Lukis garis luar dengan {{cmd:PLINE}} (termasuk lengkok), kemudian {{cmd:AREA}} `O`. |
| Input dinamik untuk grip, dan senarai pilihannya (anak panah bawah) | Baris arahan memaparkan pilihan. |
| Sudut dalam darah-minit-saat, gred atau bearing juru ukur | Taip darjah perpuluhan: `30.5` untuk 30°30'. |
| Kotak dialog pengurus pandangan; pandangan bernama bagi helaian yang kembali pada helaian itu | {{cmd:NAMEDVIEW}} menyenaraikan dan memulihkan pandangan. Fail yang disimpan mengekalkannya, tetapi pandangan helaian kembali pada helaian pertama. |

## Helaian, dimensi dan plot

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| Medan untuk skala viewport, objek bernama seperti lapisan atau blok, hiperpautan, dan medan set helaian selain nombor dan nama helaian; medan yang ditulis sebagai objek medan yang dikemas kini oleh program lain | {{cmd:FIELD}} ada tarikh, nama fail, nombor helaian, nama dan kiraan, sifat lukisan ({{cmd:DWGPROPS}}), luas, panjang dan sifat lain bagi objek, serta formula, dalam teks, atribut dan sel jadual. Program lain memaparkan medan CadCraft sebagai teks yang terakhir dibacanya; CadCraft membaca medan tarikh, nama fail, sifat, helaian dan ungkapan program lain dan meninggalkan jenis lain sebagai teks. Skala viewport ditaip dengan tangan. |
| Menyimpan gaya dimensi mana yang semasa; teks dimensi yang diseret ke tempat bebas | Lukisan dibuka dengan Standard semasa. Teks berada di atas garisan dimensi ({{cmd:DIMTEDIT}} Kiri / Kanan / Tengah). Lihat [Tetapkan saiz dimensi](topic:dimension-settings). |
| Dimensi sudut dua baris yang boleh disunting daripada fail terbuka yang CadCraft tidak dapat menentukannya | Ia dipaparkan seperti yang dilukis dalam fail. Dimensi ordinat, panjang lengkok dan jejari berpatah dibuka sebagai dimensi yang boleh anda sunting. |
| Menyemak pembaca CTB terhadap fail daripada program lain (ia dibina, daripada huraian yang diterbitkan), gaya plot bernama (STB), dither, nombor pen, skala kelabu daripada CTB dan pelarasan jenis garisan adaptif dalam gaya plot | Buat jadual dalam {{ui:Jadual gaya plot}} (warna, kelabu, dakwat, ketebalan garisan, jenis garisan, hujung dan sambungan garisan, dan gaya isian setiap warna): lihat [Jadual gaya plot](topic:plot-pdf#plot-style-tables). |
| Persediaan halaman | Pilih kertas, skala dan gaya plot dalam kotak dialog {{ui:Plot ke PDF}}; helaian menyimpan gaya plotnya. |
| Hindi dan tulisan lain yang memerlukan pembentukan kompleks dalam PDF, dan ideograf jarang (cetakan tulisan Eropah, Cyrillic, Greek, Hebrew, Arab, Parsi, Urdu, Thai, Cina, Jepun dan Korea) | Ia dicetak sebagai "?". |
| Teks tulisan Arab dan teks Cina, Jepun atau Korea dalam PDF yang diplot sama | Satu plot membawa satu fon: salah satu daripada dua tulisan dicetak sebagai "?". |
| Tanda arah eksplisit dalam teks (embedding, override, isolate) | Ia diabaikan: setiap baris disusun mengikut hurufnya sahaja. |
| Gambar dalam halaman PDF yang dilampirkan, dalam plot | Garisan, isian dan teks halaman dicetak. Halaman yang hanya gambar dimasukkan dengan {{cmd:SCANATTACH}}, dan gambar dicetak. Lihat [Underlay PDF](topic:pdf-underlay#plot-and-save). |
| Menghantar kerja ke laser dari CadCraft Studio (Studio tiada Web Serial) | Simpan G-code dan hantar dengan program laser anda sendiri, atau hantar dari Chrome atau Edge. Lihat [Hantar lukisan ke laser](topic:laser-cutting#send-from-the-browser). |

## Kekangan dan parameter

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| Kekangan pada helaian, dalam blok, pada elips, splin atau teks | Kekang pada tab {{ui:Model}}, pada garisan, polygaris, bulatan, lengkok dan titik. |
| Lancar (G2), dan mengekang lengkok polygaris secara langsung | Tangen dan sama; segmen lengkok mengikut dua hujungnya. |
| Kekangan dimensi rujukan (dipacu), dan `3Point` dalam {{cmd:DCANGULAR}} | Dimensi biasa (DIMLINEAR …) menunjukkan nilai tanpa memacunya. |
| Kekangan dimensi bersaiz tetap pada kertas, dan mencetaknya | Ia hanya dipaparkan pada skrin; tambah dimensi biasa untuk plot. |
| Kekangan yang dikekalkan melalui EXPLODE, BREAK, JOIN dan arahan lain yang mencipta objek baharu, dan pada polygaris yang dipangkas | Kekang semula (AUTOCONSTRAIN membantu). {{cmd:MIRROR}} dan {{cmd:TRIM}} bagi garisan, lengkok dan bulatan mengekalkannya. |
| Jadual reka bentuk (konfigurasi) dalam CadCraft | Tukar parameter dalam panel. |
| Pusingan ujian penuh dengan SolidWorks | Semak lakaran yang dibina oleh makro sebelum anda bergantung kepadanya. |

## 3D

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| Fillet, chamfer, cangkerang dan loft; sweep sepanjang lintasan yang naik (lintasan 3D) | Ekstrud garis luar dengan lengkok, tolak dan tarik muka, putar dan sweep sepanjang lintasan mendatar. |
| Ekstrud ke arah selain ke atas | Lukis bentuk di atas tanah dan ekstrud ke atas atau ke bawah (dengan cerun tarik atau sepanjang lintasan jika mahu); putar pepejal selepas itu. |
| Ketinggian dan ketebalan objek 2D | Lukisan terletak di atas tanah (ketinggian 0) pada tab 3D. |
| Menyunting pepejal, region dan jasad dari program lain; memaparkannya dalam blok; muka mereka pada permukaan sweep, loft atau permukaan bebas lain; polyface dan jejaring poligon | Pepejal ruang model dipaparkan pada tab 3D seperti adanya dan disimpan semula tanpa perubahan dalam DWG; apa yang tidak dilukis disenaraikan apabila tab 3D dibuka. Minta jejaring sebagai muka 3D dalam ruang model. Lihat [Pepejal dari program lain](topic:3d-solids#solids-from-other-programs). |
| Salin dan tampal pepejal | Pada tab 3D, guna {{cmd:COPY}}. Papan keratan hanya memegang objek 2D. |
| Keratan, pandangan yang mengikut perubahan kemudian pada pepejal, dan pepejal teduh pada helaian yang diplot | {{cmd:VIEWBASE}} meletakkan pandangan rata (syot kilat); jalankan semula selepas menukar pepejal. |
| Tetapan bahan, tekstur dan pencahayaan | Gaya visual: teduh, tepi, garisan tersembunyi, rangka dawai, sinar-X. |
| Lapisan peta yang dicetak, pada viewport helaian dan dalam tab 3D; gambar daripada fail yang disimpan bersama lukisan; lokasi lukisan yang ditulis untuk program lain dalam DWG 2000–2007 dan DXF R12 | Lapisan peta dipaparkan di bawah ruang model pada skrin; sistem dan senarai lapisan disimpan bersama lukisan: lihat [Lapisan peta di bawah lukisan](topic:map-layers) |
| Imbasan E57 melebihi 6 juta titik atau 512 MB, fail asal pengeluar pengimbas (RCP, RCS, FLS, LGS, TZF, ZFS), awan titik yang disimpan bersama lukisan atau diplot, snap ke awan pada tab 3D, hirisan tegak (keratan) pada tab Model | Eksport imbasan besar atau fail asal pengeluar sebagai LAS atau LAZ ([Format awan titik](topic:point-cloud-formats)); lampirkan awan setiap kali anda membuka lukisan; surih dari hirisan pelan pada tab Model: lihat [Surih garisan as-built atas awan titik](topic:point-clouds) |
| Mendaftarkan imbasan: mencari sasaran (sfera, papan dam) dalam imbasan dengan sendirinya, menyelesaikan semua imbasan serentak (pelarasan berkas), skala, mendaftar terhadap model | Pilih titik yang sepadan atau taip koordinat sasaran, kemudian perhalusi satu imbasan setiap kali dengan ICP: lihat [Daftarkan beberapa imbasan menjadi satu](topic:register-scans) |

## Rutin dan penyesuaian

| Belum dibina | Gantinya, buat masa ini |
|---|---|
| LISP yang disusun atau dilindungi (.fas, .vlx), program asli (.arx, .crx, .dbx) dan VBA (.dvb) | Muat sumber .lsp rutin dengan {{cmd:APPLOAD}}. |
| `grread` LISP, reaktor (`vlr-…`), fungsi lengkung (`vlax-curve-…`), kamus dan data lanjutan, `acet-…` Express Tools | Selebihnya bahasa berjalan: lihat [Jalankan rutin LISP](topic:run-lisp). Baris arahan menamakan fungsi yang hilang apabila rutin mencapainya. |
| Imej dan slaid dalam kotak dialog rutin | Ia dipaparkan sebagai bingkai kosong; selebihnya kotak dialog berfungsi. |
| CraftScript (.craft), Lua dan Python dalam CadCraft | Jalankannya dalam ruang kerja Skrip PartCraft. |
| Senarai lapisan, warna dan jenis garisan dalam gaya menu reben | Gunakan panel {{ui:Lapisan}} dan {{ui:Sifat}}. |
| Suite Permulaan dan alias yang disimpan pada komputer anda atau disegerakkan | Ia disimpan dalam pelayar ini; aplikasi desktop dan perkhidmatan awan akan menyimpannya untuk anda. Dalam Studio, `acad.lsp` dan `acaddoc.lsp` dibaca dari folder sokongan yang anda pilih (Muat aplikasi). |

## Bantuan

Bantuan menerangkan binaan ini. Apabila sesuatu ditambah, ia dipindahkan dari halaman ini ke panduan langkah demi langkah.
