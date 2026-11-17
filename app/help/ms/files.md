---
title: Fail: apa yang dibuka, apa yang disimpan
summary: Format yang CadCraft buka, simpan dan eksport, apa yang dikekalkan atau ditukar, dan ke mana fail pergi.
keywords: xclip, clip, sempadan xclip, ikat yang diklip, dwg, dxf, pdf, r12, buka, simpan, eksport, import, format, penukaran, muat turun, saveas, dxfout, simpan sebagai, simpan dwg, format, qsave, xref, xattach, lukisan dipautkan, rujukan luaran, ikat, muat semula, leraikan
from: b8c5778d
---

## Sepintas lalu

| Format | Buka | Simpan | Nota |
|---|---|---|---|
| DXF (teks atau perduaan, mana-mana versi) | Ya | Ya, sebagai DXF R12, DXF 2000 atau DXF 2000 (perduaan) | DXF perduaan dibuka seperti yang berbentuk teks dan disimpan semula sebagai perduaan. |
| DWG | Ya | Ya, sebagai DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 atau 2018) | Dibaca dan ditulis oleh pustaka DWG CadCraft sendiri (fail AutoCAD R13 hingga 2018). DWG anda tidak pernah diubah. Fail yang rosak, atau versi yang pembaca tidak kendalikan, ditolak dengan mesej. |
| PDF | Membawa masuk satu halaman: sebagai underlay atau sebagai objek ([Underlay PDF](topic:pdf-underlay)) | Ya, dengan plot | PDF vektor bagi helaian, atau bagi model pada skala. |

Setiap lukisan yang anda buka (atau mula dengan {{ui:New}}) mendapat tabnya sendiri di atas kawasan lukisan; lukisan baharu yang belum disentuh digunakan dan bukannya menambah tab. Klik tab untuk bertukar, {{ui:×}}nya untuk menutup (CadCraft bertanya dahulu jika ada perubahan yang belum disimpan), atau susun lukisan terbuka bersebelahan: lihat [Bahagikan skrin](topic:split-screen).

## Membuka lukisan

- Tekan {{key:Mod+O}}, klik {{ui:Open}}, atau taip `OPEN`, kemudian pilih fail.
- Atau seret fail `.dwg` atau `.dxf` ke kawasan lukisan.

Fail dibaca di dalam pelayar anda. Ia tidak dimuat naik ke mana-mana. Sejarah melaporkan berapa banyak objek dan lapisan yang masuk serta berapa lama masa diambil, dan seksyen {{ui:Drawing}} dalam panel kiri menunjukkan format, contohnya "DWG 2018 (AC1032)".

Pembaca DWG ialah sebahagian daripada CadCraft dan dimuat turun bersama DWG pertama yang anda buka selepas halaman dimuatkan (beberapa ratus KB), jadi tiada muat turun berasingan untuk ditunggu. Ia membaca fail di latar belakang, jadi halaman terus bertindak balas semasa DWG besar dibuka.

DXF dibaca dalam kepingan kira-kira 4 MB, tidak pernah sebagai satu blok teks, jadi DXF melebihi 512 MB pun dibuka. Yang menghadkannya ialah memori komputer anda: semasa DXF dibuka, jangkakan ia menggunakan kira-kira 16 hingga 20 kali saiz fail (DXF 100 MB dengan kira-kira 690,000 objek menggunakan kira-kira 1.5 GB dalam ujian kami).

### Apa yang dibawa masuk

- Garisan, lengkok, bulatan, polygaris (dengan segmen lengkok), elips, titik, teks dan teks berbilang baris, pepejal, hatch (corak standard dilukis sebagai garisnya, yang lain sebagai tona rata), rujukan blok dengan atributnya (nilai yang boleh anda sunting; lihat [Atribut blok](topic:attributes)), dimensi, dan helaian dengan viewportnya.
- Splin dibawa masuk sebagai splin (darjah, titik kawalan, knot, berat, titik suai); lihat [Splin dan polygaris](topic:splines).
- Multipetunjuk dengan satu garis petunjuk dan teks dibawa masuk sebagai multipetunjuk CadCraft yang boleh anda sunting (lihat {{cmd:MLEADER}}). Yang lain (dengan blok, beberapa garis petunjuk atau garis melengkung) dilukis seperti yang dilukis oleh program lain dan bergerak sebagai satu; sejarah menyatakan berapa banyak.
- Gambar (imej) dipaparkan sebagai bingkai dengan nama fail gambar sehingga anda memberikan fail itu kepada CadCraft dengan {{cmd:IMAGE}}: lihat [Gambar dalam lukisan](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout dipaparkan sebagai bingkainya, dan apa yang berada di bawahnya kekal kelihatan.
- Jadual dalam DWG dibawa masuk seperti yang dilukis oleh program lain.
- Muka 3D dalam ruang model dibawa masuk pada tab {{ui:3D}}, bukan sebagai objek 2D; begitu juga yang berada di dalam blok, sekali bagi setiap rujukan blok dalam model. Dalam blok dan pada helaian ia juga dilukis rata, sebagai garis luar. Lihat [Model dalam 3D](topic:3d-solids).
- Lapisan mengekalkan warnanya, tetapan hidup, beku, kunci dan plot. DEFPOINTS tidak pernah diplot.
- Dimensi menjadi dimensi CadCraft yang sebenar dan boleh disunting apabila titiknya boleh dibaca. Pada mulanya ia dipaparkan tepat seperti yang dilukis oleh program lain; sebaik sahaja anda menukarnya, CadCraft melukisnya semula dengan gayanya sendiri.
- Setiap layout menjadi tab helaian. Dalam program lain setiap layout mempunyai viewport pertama yang tersembunyi yang merupakan helaian itu sendiri; CadCraft tidak membawanya masuk.

### Apa yang belum dibawa masuk

Apa-apa yang CadCraft tidak boleh lukis dikira, bukan diagak. Kotak "Tentang fail ini" dalam panel kiri menyenaraikannya sebagai "Belum ditunjukkan:" diikuti setiap jenis objek dan bilangannya. Kes biasa ialah jadual dalam DXF, mesh, dan pepejal 3D dalam blok. Pepejal 3D, rantau dan badan dalam ruang model dipaparkan pada tab 3D (lihat [Model dalam 3D](topic:3d-solids#solids-from-other-programs)). Viewport yang dipusingkan dalam fail dipaparkan terpusing, seperti di sana, dan mengekalkan pusingannya apabila anda menyimpan; begitu juga UCS semasa, UCS bernama dan pandangan yang dipusingkan.

Teks dilukis dalam satu fon gaya Helvetica. Label yang muat dalam satu baris dalam fon program asal yang lebih sempit boleh terbungkus kepada dua baris dalam CadCraft.

## Menyimpan

Ada tiga cara untuk menyimpan. Setiap satu memuat turun satu salinan.

- **Simpan**: tekan {{key:Mod+S}}, klik {{ui:Save}}, atau taip `SAVE` (juga `QSAVE`). Ia menyimpan dalam format lukisan: DWG jika anda membuka DWG, DXF jika anda membuka DXF. DWG mengekalkan versi ia datang (fail 2018 disimpan sebagai 2018). Lukisan baharu menggunakan format dan versi DWG yang terakhir anda pilih dalam Simpan sebagai dalam pelayar ini; jika anda tidak pernah memilih, DWG dalam format AutoCAD 2000.
- **Simpan sebagai**: tekan {{key:Mod+Shift+S}}, klik {{ui:Save as}}, atau taip `SAVEAS`. Kotak dialog {{ui:Save a copy as}} menawarkan {{ui:DWG}}, dengan senarai {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 atau 2000), {{ui:DXF R12}} dan {{ui:DXF 2000}}, setiap satu dengan nama fail yang akan diberikannya, dan format serta versi semasa lukisan sudah dipilih. Klik {{ui:Save}} untuk memuat turun, atau {{ui:Cancel}} (atau {{key:Esc}}) untuk tidak menyimpan apa-apa; sejarah kemudian berbunyi "Tidak disimpan." Apa yang anda pilih kekal: {{key:Mod+S}} menggunakannya untuk lukisan ini dari situ, dan lukisan baharu dalam pelayar ini bermula dengannya.
- **DXFOUT**: taip `DXFOUT`. Ia sentiasa memuat turun salinan DXF R12, dan {{key:Mod+S}} seterusnya masih menyimpan dalam format lukisan itu sendiri.

Fail dimuat turun sebagai `<nama lukisan>.dwg` atau `<nama lukisan>.dxf`. Setiap simpanan ialah **muat turun baharu**; fail yang anda buka tidak pernah ditulis ganti atau diubah. Sejarah mengesahkannya, contohnya "Salinan disimpan sebagai Plan.dwg (DWG (AutoCAD 2018)). Fail asal Plan.dxf anda tidak berubah." Bagi DXF ia berbunyi "(DXF R12, boleh dibuka dalam mana-mana program CAD)". Baris di bawahnya menyenaraikan apa-apa yang berubah sepanjang proses itu.

Apabila CadCraft dijalankan dalam aplikasi desktop, menyimpan berfungsi seperti dalam program desktop lain: {{key:Mod+S}} menulis semula lukisan ke fail yang anda buka, dalam format dan versinya sendiri, dan sejarah menyatakan di mana ia disimpan. {{ui:Save as}} dan eksport menunjukkan kotak dialog simpan sistem, dan fail `.dwg`, `.dxf` atau `.ccsheets` yang anda klik dua kali dibuka dalam CadCraft.

Untuk PDF, plot sebaliknya (lihat di bawah).

## Apa yang DWG kekalkan dan ubah

CadCraft menulis DWG itu sendiri, di dalam pelayar anda, dengan pustaka DWG yang sama yang digunakannya untuk membaca. Pilih versi dalam Simpan sebagai: format AutoCAD 2000 (versi fail AC1015) dibuka dalam kebanyakan program, termasuk yang lama; format yang lebih baharu (2004, AC1018, hingga 2018, AC1032) juga mengekalkan warna benar. Tiada apa dimuat naik, dan menyimpan DWG berfungsi luar talian.

Setiap versi disemak dengan membaca semula fail yang disimpan menggunakan tiga pembaca DWG program lain dan CadCraft sendiri. DWG CadCraft belum pernah dibuka dalam AutoCAD sendiri.

### Apa yang DWG kekalkan

- Garisan, lengkok, bulatan, elips, titik, dan polygaris dengan segmen lengkoknya.
- Teks baris tunggal dengan penjajaran dan faktor lebarnya.
- Teks berbilang dan terbungkus, sebagai teks berbilang baris. Program lain membungkusnya semula daripada lebar yang sama.
- Warna objek: mengikut lapisan, mengikut blok, 255 warna standard, dan warna benar dalam format 2004 dan kemudian.
- Lapisan dengan warna, jenis garisan, ketebalan garisan dan tetapan hidup, beku, kunci dan plot; jenis garisan, ketebalan garisan dan skala jenis garisan milik objek; corak jenis garisan dan skala jenis garisan lukisan.
- Unit lukisan dan format panjang (perpuluhan, kaki dan inci, pecahan…).
- Blok dengan titik asasnya dan takrif atribut, termasuk yang tidak kelihatan, malar dan pratetap.
- Rujukan blok dengan skala, putaran dan nilai atributnya.
- Isian pepejal, dan hatch berpola dengan corak, skala dan sudutnya (garis corak itu sendiri, supaya program lain melukis garis yang sama seperti CadCraft).
- Dimensi, sebagai dimensi sebenar: program lain mengukur semula apabila ia diregangkan. Setiap satu mengekalkan tetapannya sendiri (ketinggian teks, saiz anak panah, perpuluhan, format panjang) dan teksnya, dan membawa salinan lukisan yang setiap dimensi DWG ada.
- Helaian (layout): setiap helaian dengan saiz kertas dan unitnya, apa yang dilukis padanya, dan viewportnya dengan pandangan dan skalanya.
- Pandangan bernama.
- Multipetunjuk, sebagai multipetunjuk.
- Nama lapisan dan blok seperti yang anda taip, dalam huruf besar dan kecil. (DXF R12 menulisnya dalam huruf besar.)

### Apa yang DWG ubah

Setiap satu daripada ini disenaraikan dalam sejarah selepas anda menyimpan, apabila ia terpakai pada lukisan anda.

| Dalam CadCraft | Dalam DWG yang disimpan |
|---|---|
| Warna benar (dipilih dengan pemilih warna), dalam format 2000 | Warna standard yang terdekat: format 2000 hanya ada 255. Simpan sebagai 2004 atau lebih baharu untuk mengekalkannya |
| Pandangan bernama bagi helaian | Pandangan ruang kertas: DWG tidak menyatakan helaian mana, jadi apabila CadCraft membuka semula fail, ia tergolong pada helaian pertama |
| Teks berbilang baris dengan faktor lebar | Lebar huruf biasa: dalam DWG faktor lebar hanya terpakai pada teks baris tunggal |
| Nama lapisan atau blok dengan aksara yang DWG tidak benarkan | Diubah: nama daripada lukisan dipautkan seperti `Base\|Walls` menjadi `Base$0$Walls` (cara mengikat lukisan dipautkan menamakannya), dan aksara lain menjadi `_` |

### Mengapa R12, dan apa yang bertukar

Apabila anda menyimpan sebagai DXF, CadCraft menulis DXF R12, versi yang boleh dibuka oleh setiap program CAD. Ia lebih lama daripada sesetengah ciri, jadi beberapa perkara ditulis dalam bentuk yang lebih ringkas:

| Dalam CadCraft | Dalam fail R12 yang disimpan |
|---|---|
| Teks berbilang baris | Satu objek teks bagi setiap baris |
| Elips | Polygaris yang mengikut elips |
| Hatch (daripada fail yang dibuka) | Garis luarnya sahaja |
| Warna benar (dipilih dengan pemilih warna) | Warna standard yang terdekat |
| Ketebalan garisan, dan skala jenis garisan milik objek | Ditinggalkan: R12 tidak mempunyai kedua-duanya (jenis garisan dikekalkan) |
| Nama lapisan dan blok | Ditulis dalam huruf besar; ruang dan aksara lain menjadi `_`, dan nama dipotong kepada 31 aksara ("Title block" menjadi `TITLE_BLOCK`) |
| Lapisan yang ditetapkan tidak diplot | Program lain akan memplotnya (CadCraft mengingati tetapan itu apabila lukisan mempunyai helaian) |
| Dimensi | Dimensi sebenar dengan blok lukisannya sendiri, supaya program lain menunjukkannya seperti yang anda lihat |
| Multipetunjuk | Garisan, kepala anak panah dan teks yang dilukisnya |
| Pandangan bernama | Dikekalkan, dengan nama dalam huruf besar; pandangan helaian kembali pada helaian pertama |
| Beberapa helaian | Helaian pertama ialah ruang kertas yang setiap program tunjukkan; yang lain dikekalkan sebagai blok bernama `CCLAYOUT_1`, `CCLAYOUT_2` … yang CadCraft tukar kembali menjadi helaian apabila ia membuka fail itu |

Sejarah menyenaraikan setiap satu yang terpakai pada lukisan anda.

:::tip
Untuk terus bekerja pada lukisan selama beberapa hari, simpan sebagai DXF dan buka DXF itu pada kali seterusnya. Apa-apa yang CadCraft boleh lukis kekal semasa pusingan itu, termasuk dimensi, blok dan semua helaian.
:::

## Rujukan lukisan dipautkan (rujukan luaran)

{{cmd:XATTACH}} (`XA`, atau {{ui:Blocks}} › {{ui:More}} › {{ui:Link a drawing (xref)}}) memautkan DWG atau DXF lain: pilih fail, kemudian klik di tempat ia patut diletakkan ({{key:Enter}} meletakkannya di 0,0). Ia dibawa masuk sebagai satu blok dinamakan mengikut fail, pada skala yang betul apabila dua lukisan mempunyai unit yang berbeza. Lapisan dan bloknya mengekalkan nama mereka dengan nama pautan di hadapan: `Plan|Walls`, `Plan|Door` — supaya ia tidak bercampur dengan milik anda: hidupkan dan matikan lapisan yang dipautkan, beku atau kunci seperti lapisan anda sendiri. Pautan ialah baca sahaja: tukar lukisan lain dan muat semulanya. Apa yang anda tetapkan pada lapisan pautan (warna, jenis garisan, ketebalan garisan, hidup atau mati, beku, kunci, plot) dikekalkan apabila anda memuat semulanya, apabila anda menyimpan lukisan sebagai DWG semasa pautan masih pautan, dan apabila lukisan lain memautkan yang ini.

{{cmd:XREF}} (`XR`): `?` menyenaraikan pautan (dimuatkan atau tidak, fail yang mana, berapa banyak rujukan); `A` melampirkan; `R` memuat semula satu daripada failnya (pilih fail sekali lagi: pelayar tidak boleh mencapai folder anda sendiri); `B` mengikat satu (ia menjadi blok dan lapisan biasa bernama `Plan$0$Walls`); `D` melepaskan satu (rujukan dan lapisannya hilang). Setiap satu ialah satu langkah buat asal.

{{cmd:XCLIP}} (`XC`) memotong rujukan blok dan pautan: pilih, `N` untuk sempadan baharu, kemudian `R` dan dua sudut, atau `P` dan titik-titik poligon ({{key:Enter}} menutupnya); `D` mengalih keluar klip. Hanya apa yang berada di dalam kelihatan dan diplot, dan klip bergerak bersama rujukan. DWG dan DXF 2000 mengekalkan klip; DXF R12 menyimpan rujukan secara penuh dan memaklumkannya. Apabila anda mengikat pautan yang mempunyai rujukan terklip, {{cmd:XREF}} `B` bertanya: `A` mengikat semua, `C` hanya mengekalkan bahagian terklip bagi setiap rujukan (garisan dan lengkok dipotong pada sempadan; teks dan blok bersarang kekal apabila titik selitannya berada di dalam).

Lukisan yang anda buka mungkin memautkan fail yang CadCraft tidak dapat lihat: ia menyatakan berapa banyak yang tidak dimuatkan. Gunakan {{cmd:XREF}}, `R` dan pilih setiap fail untuk melihatnya.

Apabila anda menyimpan, pautan yang dimuatkan **diikat** ke dalam fail (program lain melihat blok dan lapisan biasa bernama `Plan$0$…`), dan sejarah menyatakannya. Pautan yang tidak dimuatkan kekal sebagai pautan ke failnya, dalam DWG dan DXF.

## Buka dalam 3D

{{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} ({{cmd:OPENIN3D}}) membuka lukisan dalam aplikasi pemodelan 3D dalam tab baharu, sebagai DWG, tanpa memuat naiknya. Perubahan yang dibuat di sana kekal di sana; simpan di sana. Item menu hanya muncul di tempat aplikasi itu boleh menerima lukisan yang diserahkan.

## Memplot PDF

Tekan {{key:Mod+P}}, klik {{ui:Plot}}, atau taip `PLOT`. PDF dibuat di dalam pelayar dan dimuat turun, atau dibuka dalam tab baharu untuk dicetak. Lihat [Plot ke PDF](topic:plot-pdf).

## Di mana fail pergi

Setiap simpanan dan setiap plot ialah muat turun, jadi fail mendarat di mana sahaja pelayar anda meletakkan muat turun: biasanya folder Muat turun. Untuk memilih folder setiap kali, tukar tetapan muat turun dalam pelayar anda; [Pelayar dan komputer](common:browsers) menunjukkan di mana.

Tiada apa yang anda buka atau simpan dihantar kepada kami. Lihat [Di mana fail anda pergi](common:your-files).

## Fail projek PLN dan PLA

CadCraft membuka lukisan DWG dan DXF, bukan fail Archicad sendiri (`.pln`, `.pla`, `.tpl`, `.bpn`). Membuka salah satu daripadanya memberitahu anda apakah ia. Dalam Archicad, simpan pandangan atau layout yang anda perlukan sebagai DWG dan buka di sini, atau eksport model sebagai IFC dan buka dalam BimCraft. Di tempat BimCraft boleh mengambil alih fail itu, CadCraft menawarkan {{ui:Open in BimCraft}}.

## Jika halaman ditutup sebelum anda menyimpan

CadCraft menyimpan salinan setiap lukisan yang anda ubah, dalam pelayar ini sahaja, sejurus selepas anda berhenti menyunting. Jika tab ditutup, pelayar berhenti atau komputer dimulakan semula sebelum anda menyimpan, CadCraft bertanya **Pulihkan kerja anda?** apabila ia bermula kali seterusnya: {{ui:Recover}} membuka semula lukisan itu, tanpa disimpan, dalam tabnya sendiri. Menyimpan lukisan mengalih keluar salinannya. Lihat [Pulihkan kerja anda](common:recover).

## Dalam talian dan luar talian

Membuka, melukis, menyimpan (DWG dan DXF) dan memplot semuanya berlaku pada komputer anda, jadi ia berfungsi tanpa sambungan sebaik sahaja CadCraft dimuatkan.

Untuk menggunakan CadCraft tanpa sebarang sambungan, klik {{ui:Save for offline}} dalam bar di atas semasa anda dalam talian. Label itu mengira ("Menyimpan 40 daripada 212") dan berakhir pada "Sedia luar talian". Salinan yang disimpan termasuk pembaca DWG, kira-kira 5 MB keseluruhannya, jadi **fail DWG juga dibuka luar talian** setelah ia disimpan. Klik butang sekali lagi untuk {{ui:Save again (get the newest version)}} atau {{ui:Remove the offline copy}}. "Could not save" bermaksud sebahagian fail tidak dimuat turun: semak sambungan dan klik untuk cuba semula. "Offline not available" bermaksud tetingkap pelayar ini tidak boleh menyimpan salinan (tetingkap persendirian dan sesetengah komputer yang diurus).

Tanpa salinan yang disimpan, pembaca DWG dimuat turun kali pertama anda membuka DWG selepas halaman dimuatkan, jadi membuka DWG luar talian boleh gagal; fail DXF tidak pernah memerlukannya. Jangan muat semula halaman semasa luar talian melainkan CadCraft telah disimpan.

Lihat [Bekerja luar talian](common:offline) untuk butiran.

:::offline
Anda kini luar talian. Lukisan disimpan sebagai DWG atau DXF dan diplot seperti biasa, dan fail DXF dibuka. Fail DWG dibuka jika CadCraft menunjukkan "Sedia luar talian", atau jika pembaca DWG sudah dimuatkan dalam tab ini.
:::

## Kekangan dalam fail

Kekangan dan parameter (lihat [Kekang lukisan](topic:constraints)) disimpan dalam kedua-dua DWG dan DXF. Setiap objek yang dikekang membawa nota CadCraft kecil (data lanjutan), dan blok tidak digunakan bernama `CADCRAFT_PARAMETRIC` memegang kekangan dan jadual parameter. Program lain membuka lukisan secara biasa dan mengabaikan kedua-duanya; mereka mungkin memadamkan blok yang tidak digunakan apabila mereka menjalankan PURGE. Nota merujuk objek dengan kunci mereka sendiri, bukan pemegang fail, jadi program yang menomborkan semula pemegang tidak memecahkannya. Apabila program lain telah memadamkan atau menukar objek yang dikekang, CadCraft menggugurkan kekangan padanya apabila ia membuka fail dan memberitahu berapa banyak. Fail tanpa kekangan dibuka tanpa kekangan.

Lakaran yang dieksport dari pemodel bahagian (`.json`) juga dibuka: lihat [Pindahkan lakaran ke dan dari pemodel bahagian lain](topic:solidworks-sketches).

## Belum tersedia

- Multipetunjuk sebagai objek multipetunjuk dalam DXF yang disimpan (R12 tiada; ia disimpan sebagai apa yang dilukisnya).
- Gambar dalam DXF yang disimpan (ia disimpan sebagai bingkainya; DWG mengekalkannya sebagai gambar), dan wipeout yang menyembunyikan apa yang berada di bawahnya.
- Menyimpan versi DXF yang lebih baharu daripada 2000.
- Penyimpanan awan dan penyegerakan antara komputer.

Lihat [Belum dibina](topic:not-built-yet) untuk senarai penuh.
