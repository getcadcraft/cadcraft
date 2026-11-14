---
title: Fail: apa yang dibuka, apa yang disimpan
summary: Format yang CadCraft buka, simpan dan eksport, apa yang dikekalkan atau ditukar, dan ke mana fail pergi.
keywords: xclip, clip, sempadan xclip, ikat yang diklip, dwg, dxf, pdf, r12, buka, simpan, eksport, import, format, penukaran, muat turun, saveas, dxfout, simpan sebagai, simpan dwg, format, qsave, xref, xattach, lukisan dipautkan, rujukan luaran, ikat, muat semula, tanggalkan
from: 6d68b34e
---

## Sepintas lalu

| Format | Buka | Simpan | Nota |
|---|---|---|---|
| DXF (teks, mana-mana versi) | Ya | Ya, sebagai DXF R12 atau DXF 2000 | DXF binari ditolak: simpan sebagai teks DXF dahulu. |
| DWG | Ya | Ya, sebagai DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 atau 2018) | Dibaca dan ditulis oleh pustaka DWG CadCraft sendiri (fail AutoCAD R13 hingga 2018). DWG anda tidak pernah diubah. Fail rosak, atau versi yang pembaca tidak kendalikan, ditolak dengan mesej. |
| PDF | Membawa masuk satu halaman: sebagai underlay atau sebagai objek ([underlay PDF](topic:pdf-underlay)) | Ya, dengan plot | PDF vektor bagi helaian, atau model pada skala. |

Setiap lukisan yang anda buka (atau mulakan dengan {{ui:Baharu}}) mendapat tab sendiri di atas kawasan lukisan; lukisan baharu yang belum disentuh sesiapa digunakan dan bukannya menambah tab. Klik tab untuk bertukar, {{ui:×}} untuk menutupnya (CadCraft akan bertanya dahulu jika ada perubahan yang belum disimpan), atau susun lukisan yang dibuka bersebelahan: lihat [Bahagi skrin](topic:split-screen).

## Membuka lukisan

- Tekan {{key:Mod+O}}, klik {{ui:Buka}}, atau taip `OPEN`, kemudian pilih fail.
- Atau seret fail `.dwg` atau `.dxf` ke kawasan lukisan.

Fail dibaca di dalam pelayar anda. Ia tidak dimuat naik ke mana-mana. Sejarah melaporkan berapa banyak objek dan lapisan yang masuk serta masa yang diambil, dan bahagian {{ui:Lukisan}} pada panel kiri menunjukkan format, contohnya "DWG 2018 (AC1032)".

Pembaca DWG ialah sebahagian daripada CadCraft dan diambil bersama DWG pertama yang anda buka selepas halaman dimuatkan (beberapa ratus KB), jadi tiada muat turun berasingan untuk ditunggu. Ia membaca fail di latar belakang, jadi halaman terus bertindak balas semasa DWG besar dibuka.

### Apa yang masuk

- Garisan, lengkok, bulatan, polygaris (dengan segmen lengkok), elips, titik, teks dan teks berbilang baris, pepejal, hatch (corak standard dilukis sebagai garisnya, yang lain sebagai tona rata), rujukan blok dengan atributnya (nilai yang boleh anda sunting; lihat [Atribut blok](topic:attributes)), dimensi, dan layout dengan viewportnya.
- Splin masuk sebagai splin (darjah, titik kawalan, knot, berat, titik suai); lihat [Splin dan polygaris](topic:splines).
- Multipetunjuk dengan satu garisan petunjuk dan teks masuk sebagai multipetunjuk CadCraft yang boleh anda sunting (lihat {{cmd:MLEADER}}). Yang lain (dengan blok, beberapa garisan petunjuk atau garisan melengkung) dilukis seperti program lain melukisnya dan bergerak sebagai satu; sejarah menyatakan berapa banyak.
- Gambar dipaparkan sebagai bingkai dengan nama fail gambar itu sehingga anda memberikan fail kepada CadCraft dengan {{cmd:IMAGE}}: lihat [Gambar dalam lukisan](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout dipaparkan sebagai bingkainya, dan apa yang berada di bawahnya kekal kelihatan.
- Jadual dalam DWG masuk seperti yang dilukis oleh program lain.
- Muka 3D dalam ruang model masuk pada tab {{ui:3D}}, bukan sebagai objek 2D; begitu juga yang berada dalam blok, sekali bagi setiap rujukan blok dalam model. Dalam blok dan pada helaian ia turut dilukis rata, sebagai garis luar. Lihat [Model dalam 3D](topic:3d-solids).
- Lapisan mengekalkan warnanya, tetapan hidup, beku, kunci dan plot. DEFPOINTS tidak pernah diplot.
- Dimensi menjadi dimensi CadCraft yang sebenar dan boleh disunting apabila titik-titiknya dapat dibaca. Pada mulanya ia dipaparkan tepat seperti yang dilukis oleh program lain; sebaik sahaja anda menukar satu, CadCraft melukisnya semula dengan gayanya sendiri.
- Setiap layout menjadi tab helaian. Dalam program lain setiap layout mempunyai viewport pertama tersembunyi yang merupakan helaian itu sendiri; CadCraft tidak memasukkan yang itu.

### Apa yang belum masuk lagi

Apa-apa yang CadCraft tidak dapat lukis dikira, bukan diagak. Kotak "Mengenai fail ini" pada panel kiri menyenaraikannya sebagai "Belum ditunjukkan lagi:" diikuti setiap jenis objek dan bilangannya. Kes lazim ialah jadual dalam DXF, jejaring, dan pepejal 3D di dalam blok. Pepejal 3D, rantau dan jasad dalam ruang model dipaparkan pada tab 3D (lihat [Pepejal daripada program lain](topic:3d-solids#solids-from-other-programs)). Viewport yang terpilin dalam fail dipaparkan berpusing, seperti di sana, dan mengekalkan pusingannya apabila anda menyimpan; begitu juga UCS semasa, UCS yang dinamakan dan pandangan yang diputar.

Teks dilukis dalam satu fon gaya Helvetica. Label yang muat dalam satu baris dalam fon program asal yang lebih sempit boleh dibalut kepada dua baris dalam CadCraft.

## Menyimpan

Ada tiga cara untuk menyimpan. Setiap satu memuat turun satu salinan.

- **Simpan**: tekan {{key:Mod+S}}, klik {{ui:Simpan}}, atau taip `SAVE` (juga `QSAVE`). Ia menyimpan dalam format lukisan itu: DWG jika anda membuka DWG, DXF jika anda membuka DXF. DWG mengekalkan versi ia datang (fail 2018 disimpan sebagai 2018). Lukisan baharu menggunakan format dan versi DWG yang anda pilih kali terakhir dalam {{ui:Simpan sebagai}} dalam pelayar ini; jika anda tidak pernah memilih, DWG dalam format AutoCAD 2000.
- **Simpan sebagai**: tekan {{key:Mod+Shift+S}}, klik {{ui:Simpan sebagai}}, atau taip `SAVEAS`. Kotak dialog {{ui:Simpan salinan sebagai}} menawarkan {{ui:DWG}}, dengan senarai {{ui:Versi}} (AutoCAD 2018, 2013, 2010, 2007, 2004 atau 2000), {{ui:DXF R12}} dan {{ui:DXF 2000}}, setiap satu dengan nama fail yang akan diberikannya, dan format serta versi semasa lukisan sudah dipilih. Klik {{ui:Simpan}} untuk memuat turun, atau {{ui:Batal}} (atau {{key:Esc}}) untuk tidak menyimpan apa-apa; sejarah kemudian menyatakan "Tidak disimpan." Pilihan anda kekal: {{key:Mod+S}} menggunakannya untuk lukisan ini mulai dari sini, dan lukisan baharu dalam pelayar ini bermula dengannya.
- **DXFOUT**: taip `DXFOUT`. Ia sentiasa memuat turun salinan DXF R12, dan {{key:Mod+S}} seterusnya tetap menyimpan dalam format lukisan itu sendiri.

Pelayar memuat turun `<nama lukisan>.dwg` atau `<nama lukisan>.dxf`. Setiap simpanan ialah **muat turun baharu**; fail yang anda buka tidak pernah ditulis ganti atau diubah. Sejarah mengesahkannya, contohnya "Salinan disimpan sebagai Plan.dwg (DWG (AutoCAD 2018)). Plan.dxf asal anda tidak berubah." Bagi DXF ia berbunyi "(DXF R12, dibuka dalam mana-mana program CAD)". Baris di bawahnya menyenaraikan apa-apa yang berubah dalam proses itu.

Apabila CadCraft berjalan dalam aplikasi desktop, simpanan berfungsi seperti dalam program desktop lain: {{key:Mod+S}} menulis semula lukisan ke fail yang anda buka, dalam format dan versinya sendiri, dan sejarah menyatakan di mana ia disimpan. {{ui:Simpan sebagai}} dan eksport menunjukkan kotak dialog simpan sistem, dan fail `.dwg`, `.dxf` atau `.ccsheets` yang anda klik dua kali dibuka dalam CadCraft.

Untuk PDF, plot sebaliknya (lihat di bawah).

## Apa yang DWG kekalkan dan ubah

CadCraft menulis DWG sendiri, di dalam pelayar anda, dengan pustaka DWG yang sama ia baca. Pilih versi dalam {{ui:Simpan sebagai}}: format AutoCAD 2000 (versi fail AC1015) dibuka dalam kebanyakan program, termasuk yang lama; format yang lebih baharu (2004, AC1018, sehingga 2018, AC1032) turut mengekalkan warna sebenar. Tiada apa-apa dimuat naik, dan menyimpan DWG berfungsi luar talian.

Setiap versi disemak dengan membaca semula fail yang disimpan menggunakan tiga pembaca DWG program lain dan CadCraft sendiri. DWG CadCraft belum pernah dibuka dalam AutoCAD sendiri lagi.

### Apa yang DWG kekalkan

- Garisan, lengkok, bulatan, elips, titik, dan polygaris dengan segmen lengkoknya.
- Teks satu baris dengan penjajarannya dan faktor lebar.
- Teks berbilang baris dan teks dibalut, sebagai teks berbilang baris. Program lain membalutnya semula daripada lebar yang sama.
- Warna objek: mengikut lapisan, mengikut blok, 255 warna standard, dan warna sebenar dalam format 2004 dan seterusnya.
- Lapisan dengan warna, jenis garisan, ketebalan garisan dan tetapan hidup, beku, kunci dan plot; jenis garisan, ketebalan garisan dan skala jenis garisan milik objek; corak jenis garisan dan skala jenis garisan lukisan.
- Unit lukisan dan format panjang (perpuluhan, kaki dan inci, pecahan…).
- Blok dengan titik asasnya dan takrifan atribut, termasuk yang tidak kelihatan, tetap dan prasetan.
- Rujukan blok dengan skala, putaran dan nilai atributnya.
- Isian pepejal, dan hatch berkorak dengan corak, skala dan sudutnya (garisan corak itu sendiri, supaya program lain melukis garisan yang sama seperti CadCraft).
- Dimensi, sebagai dimensi sebenar: program lain mengukurnya semula apabila ia diregangkan. Setiap satu mengekalkan tetapannya sendiri (ketinggian teks, saiz anak panah, perpuluhan, format panjang) dan teksnya, serta membawa salinan lukisan yang dimiliki setiap dimensi DWG.
- Helaian (layout): setiap helaian dengan saiz kertas dan unitnya, apa yang dilukis di atasnya, dan viewportnya dengan pandangan dan skala.
- Pandangan yang dinamakan.
- Multipetunjuk, sebagai multipetunjuk.
- Nama lapisan dan blok seperti yang anda taip, dengan huruf besar dan kecil. (DXF R12 menulisnya dengan huruf besar.)

### Apa yang DWG ubah

Setiap satu daripada ini disenaraikan dalam sejarah selepas anda menyimpan, apabila ia terpakai pada lukisan anda.

| Dalam CadCraft | Dalam DWG yang disimpan |
|---|---|
| Warna sebenar (dipilih dengan pemilih warna), dalam format 2000 | Warna standard terdekat: format 2000 hanya ada 255. Simpan sebagai 2004 atau yang lebih baharu untuk mengekalkannya |
| Pandangan dinamakan bagi helaian | Pandangan ruang kertas: DWG tidak menyatakan helaian mana, jadi apabila CadCraft membuka fail itu semula ia tergolong pada helaian pertama |
| Teks berbilang baris dengan faktor lebar | Lebar huruf biasa: dalam DWG faktor lebar hanya terpakai pada teks satu baris |
| Nama lapisan atau blok dengan aksara yang DWG tidak benarkan | Diubah: nama daripada lukisan dipautkan seperti `Base\|Walls` menjadi `Base$0$Walls` (cara mengikat lukisan dipautkan menamakannya), dan aksara lain menjadi `_` |

### Mengapa R12, dan apa yang ditukar

Apabila anda menyimpan sebagai DXF, CadCraft menulis DXF R12, versi yang setiap program CAD boleh buka. Ia lebih lama daripada sesetengah ciri, jadi beberapa perkara ditulis dalam bentuk yang lebih ringkas:

| Dalam CadCraft | Dalam fail R12 yang disimpan |
|---|---|
| Teks berbilang baris | Satu objek teks bagi setiap baris |
| Elips | Polygaris yang mengikuti elips |
| Hatch (daripada fail yang dibuka) | Garis luarnya sahaja |
| Warna sebenar (dipilih dengan pemilih warna) | Warna standard terdekat |
| Ketebalan garisan, dan skala jenis garisan milik objek | Ditinggalkan: R12 tidak mempunyai kedua-duanya (jenis garisan dikekalkan) |
| Nama lapisan dan blok | Ditulis dengan huruf besar; ruang dan aksara lain menjadi `_`, dan nama dipotong kepada 31 aksara ("Blok tajuk" menjadi `BLOK_TAJUK`) |
| Lapisan yang ditetapkan tidak diplot | Program lain akan memplotnya (CadCraft mengingati tetapan itu apabila lukisan mempunyai helaian) |
| Dimensi | Dimensi sebenar dengan blok lukisannya sendiri, jadi program lain memaparkannya seperti yang anda lihat |
| Multipetunjuk | Garisan, kepala anak panah dan teks yang dilukisnya |
| Pandangan dinamakan | Dikekalkan, dengan nama dalam huruf besar; pandangan helaian kembali pada helaian pertama |
| Beberapa helaian | Helaian pertama ialah ruang kertas yang ditunjukkan oleh setiap program; yang lain dikekalkan sebagai blok bernama `CCLAYOUT_1`, `CCLAYOUT_2` … yang CadCraft tukar kembali menjadi helaian apabila ia membuka fail |

Sejarah menyenaraikan setiap satu yang terpakai pada lukisan anda.

:::tip
Untuk terus bekerja pada lukisan selama beberapa hari, simpan sebagai DXF dan buka DXF itu pada kali seterusnya. Setiap perkara yang CadCraft boleh lukis kekal semasa pusingan itu, termasuk dimensi, blok dan semua helaian.
:::

## Lukisan dipautkan (rujukan luaran)

{{cmd:XATTACH}} (`XA`, atau {{ui:Blok}} › {{ui:Lagi}} › {{ui:Pautkan lukisan (Xref)}}) memautkan DWG atau DXF lain: pilih fail, kemudian klik tempat ia diletakkan ({{key:Enter}} meletakkannya di 0,0). Ia masuk sebagai satu blok yang dinamakan mengikut fail itu, pada skala yang betul apabila kedua-dua lukisan mempunyai unit yang berbeza. Lapisan dan bloknya mengekalkan nama dengan nama pautan di depan — `Plan|Walls`, `Plan|Door` — supaya ia tidak bercampur dengan lukisan anda: hidupkan dan matikan lapisan yang dipautkan, bekukan atau kunci seperti lapisan anda sendiri. Pautan adalah baca sahaja: ubah lukisan lain dan muat semula. Apa yang anda tetapkan pada lapisan pautan (warna, jenis garisan, ketebalan garisan, hidup/mati, beku, kunci, plot) dikekalkan apabila anda memuat semula, apabila anda menyimpan lukisan sebagai DWG semasa pautan masih pautan, dan apabila lukisan lain memautkan yang ini.

{{cmd:XREF}} (`XR`): `?` menyenaraikan pautan (dimuatkan atau tidak, fail mana, berapa rujukan); `A` memasang; `R` memuat semula satu daripada failnya (pilih fail semula: pelayar tidak dapat mencapai folder anda sendiri); `B` mengikat satu (ia menjadi blok dan lapisan biasa yang dinamakan `Plan$0$Walls`); `D` menanggalkan satu (rujukan dan lapisannya hilang). Setiap satu ialah satu langkah buat asal.

{{cmd:XCLIP}} (`XC`) mengklip rujukan blok dan pautan: pilih, `N` untuk sempadan baharu, kemudian `R` dan dua penjuru atau `P` dan titik-titik poligon ({{key:Enter}} menutupnya); `D` mengalih keluar klip. Hanya apa yang berada di dalam ditunjukkan dan diplot, dan klip bergerak bersama rujukan. DWG dan DXF 2000 mengekalkan klip; DXF R12 menyimpan rujukan secara penuh dan memberitahu anda. Apabila anda mengikat pautan yang mempunyai rujukan terklip, {{cmd:XREF}} `B` bertanya: `A` mengikat semuanya, `C` hanya mengekalkan bahagian terklip bagi setiap rujukan (garisan dan lengkok dipotong pada sempadan; teks dan blok bersarang kekal apabila titik sisipannya berada di dalam).

Lukisan yang anda buka mungkin memautkan fail yang CadCraft tidak dapat lihat: ia memberitahu berapa banyak yang belum dimuatkan. Gunakan {{cmd:XREF}}, `R` dan pilih setiap fail untuk melihatnya.

Apabila anda menyimpan, pautan yang dimuatkan **diikat** ke dalam fail (program lain melihat blok dan lapisan biasa yang dinamakan `Plan$0$…`), dan sejarah menyatakannya. Pautan yang tidak dimuatkan kekal sebagai pautan kepada failnya, dalam DWG dan DXF.

## Buka dalam 3D

{{ui:Pandangan}} › {{ui:Lagi}} › {{ui:Buka dalam ModelCraft}} ({{cmd:OPENIN3D}}) membuka lukisan dalam aplikasi pemodelan 3D dalam tab baharu, sebagai DWG, tanpa memuat naiknya. Perubahan yang dibuat di sana kekal di sana; simpan di sana. Item menu hanya dipaparkan di tempat aplikasi itu boleh menerima lukisan yang diserahkan.

## Memplot PDF

Tekan {{key:Mod+P}}, klik {{ui:Plot}}, atau taip `PLOT`. PDF dibuat di dalam pelayar dan dimuat turun, atau dibuka dalam tab baharu untuk dicetak. Lihat [Plot ke PDF](topic:plot-pdf).

## Ke mana fail pergi

Setiap simpanan dan setiap plot ialah muat turun, jadi fail tiba di mana sahaja pelayar anda meletakkan muat turun: biasanya folder Muat turun. Untuk memilih folder setiap kali, tukar tetapan muat turun dalam pelayar anda; [Pelayar dan komputer](common:browsers) menunjukkan lokasinya.

Tiada apa yang anda buka atau simpan dihantar kepada kami. Lihat [Ke mana fail anda pergi](common:your-files).

## Fail projek PLN dan PLA

CadCraft membuka lukisan DWG dan DXF, bukan fail Archicad sendiri (`.pln`, `.pla`, `.tpl`, `.bpn`). Membuka salah satu daripadanya memberitahu anda apa ia. Dalam Archicad, simpan pandangan atau layout yang anda perlukan sebagai DWG dan buka di sini, atau eksport model sebagai IFC dan buka dalam BimCraft. Di mana BimCraft boleh mengambil alih fail itu, CadCraft menawarkan {{ui:Buka dalam BimCraft}}.

## Jika halaman ditutup sebelum anda menyimpan

CadCraft menyimpan salinan setiap lukisan yang anda ubah, dalam pelayar ini sahaja, sebentar selepas anda berhenti menyunting. Jika tab ditutup, pelayar berhenti atau komputer dimulakan semula sebelum anda menyimpan, CadCraft bertanya **Pulihkan kerja anda?** apabila ia dimulakan kali seterusnya: {{ui:Pulihkan}} membuka semula lukisan itu, belum disimpan, dalam tab sendiri. Menyimpan lukisan itu mengalih keluar salinannya. Lihat [Pulihkan kerja anda](common:recover).

## Dalam talian dan luar talian

Membuka, melukis, menyimpan (DWG dan DXF) dan memplot semuanya berlaku pada komputer anda, jadi ia berfungsi tanpa sambungan selepas CadCraft dimuatkan.

Untuk menggunakan CadCraft tanpa sebarang sambungan, klik {{ui:Simpan untuk luar talian}} pada bar di bahagian atas semasa anda dalam talian. Label itu dikira naik ("Menyimpan 40 daripada 212") dan berakhir pada "Sedia untuk luar talian". Salinan yang disimpan termasuk pembaca DWG, kira-kira 5 MB keseluruhannya, jadi **fail DWG turut dibuka secara luar talian** setelah ia disimpan. Klik butang sekali lagi untuk {{ui:Simpan semula (dapatkan versi terkini)}} atau {{ui:Alih keluar salinan luar talian}}. "Tidak dapat menyimpan" bermaksud sesetengah fail tidak dimuat turun: semak sambungan dan klik untuk cuba semula. "Luar talian tidak tersedia" bermaksud tetingkap pelayar ini tidak boleh menyimpan salinan (tetingkap persendirian dan sesetengah komputer terurus).

Tanpa salinan yang disimpan, pembaca DWG diambil kali pertama anda membuka DWG selepas halaman dimuatkan, jadi membuka DWG secara luar talian boleh gagal; fail DXF tidak pernah memerlukannya. Jangan muat semula halaman semasa luar talian melainkan CadCraft telah disimpan.

Lihat [Bekerja luar talian](common:offline) untuk butiran.

:::offline
Anda kini luar talian. Lukisan disimpan sebagai DWG atau DXF dan diplot seperti biasa, dan fail DXF dibuka. Fail DWG dibuka jika CadCraft menunjukkan "Sedia untuk luar talian", atau jika pembaca DWG sudah dimuatkan dalam tab ini.
:::

## Kekangan dalam fail

Kekangan dan parameter (lihat [Kekang lukisan](topic:constraints)) disimpan dalam kedua-dua DWG dan DXF. Setiap objek yang dikekang membawa nota CadCraft kecil (data lanjutan), dan blok tidak digunakan bernama `CADCRAFT_PARAMETRIC` menyimpan kekangan dan jadual parameter. Program lain membuka lukisan seperti biasa dan mengabaikan kedua-duanya; mereka mungkin memadam blok yang tidak digunakan apabila melakukan purge. Nota itu merujuk objek mengikut kunci mereka sendiri, bukan pemegang fail, jadi program yang menomborkan semula pemegang tidak merosakkannya. Apabila program lain telah memadam atau mengubah objek yang dikekang, CadCraft membuang kekangan padanya apabila ia membuka fail dan memberitahu berapa banyak. Fail tanpa kekangan dibuka tanpa kekangan.

Lakaran yang dieksport daripada pemodel bahagian (`.json`) turut dibuka: lihat [Alih lakaran ke dan dari pemodel bahagian lain](topic:solidworks-sketches).

## Belum tersedia lagi

- Multipetunjuk sebagai objek multipetunjuk dalam DXF yang disimpan (R12 tidak mempunyai; ia disimpan sebagai apa yang dilukisnya).
- Gambar dalam DXF yang disimpan (ia disimpan sebagai bingkainya; DWG mengekalkannya sebagai gambar), dan wipeout yang menyembunyikan apa yang berada di bawahnya.
- Menyimpan versi DXF yang lebih baharu daripada 2000.
- Simpanan awan dan penyegerakan antara komputer.

Lihat [Belum dibina](topic:not-built-yet) untuk senarai penuh.
