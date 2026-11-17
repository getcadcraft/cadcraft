---
title: Datang dari perisian lukisan lain
summary: Cara arahan, kekunci dan tabiat yang biasa dipetakan kepada CadCraft, dan perbezaan yang menyebabkan pelukis berpengalaman tersandung.
keywords: peralihan, perbezaan, berpindah, tabiat, alias, input dinamik, pickfirst, pickadd, qsave, saveas, simpan sebagai, mtext, ctb, penjejakan kutub, xref, pintasan papan kekunci, biasa, copyclip, pasteclip, pasteorig, copybase, papan keratan
from: b58688e7
---

Jika anda pernah menggunakan AutoCAD, atau program yang dibina atas model yang sama, kebanyakan yang anda tahu berfungsi di sini: baris arahan, alias seperti `L`, `C`, `TR` dan `O`, Enter atau Space untuk mengulang, pemilihan tetingkap dan silang, snap objek pada F3, Ortho pada F8, ruang model dengan layout dan viewport. Halaman ini menyenaraikan apa yang dipetakan secara langsung, dan kemudian perbezaan yang memerangkap orang. Baca bahagian kedua walaupun anda hanya mengimbas bahagian pertama.

## Apa yang dipetakan secara langsung

| Tabiat | Dalam CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Arahan sama, alias sama |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Sama |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Arahan dimensi yang sama |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` ditaip pada baris arahan | Sama, untuk dimensi baharu |
| `B` untuk membuat blok, `I` untuk selit, `PU` untuk membuang | Sama (buang hanya mengalih keluar blok yang tidak digunakan) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` kemudian `E` atau `W` | Sama |
| Menaip `_LINE` atau `-LAYER` daripada skrip atau tabiat | Awalan `_`, `-`, `.` atau `'` diabaikan |
| Enter atau Space pada gesaan kosong mengulang arahan terakhir | Sama |
| Esc membatalkan; Esc sekali lagi mengosongkan pilihan | Sama |
| `@dx,dy`, `@d<a`, sudut yang ditaip berlawanan jam dari timur | Sama |
| Tetingkap dari kiri ke kanan, silang dari kanan ke kiri, klik-klik; tekan dan seret untuk lasso, Space bertukar antara tetingkap / silang / pagar (LASSOMODE) | Sama |
| Pilih dahulu, kemudian arahan (kata nama-kata kerja) | Sama; arahan yang selesai mengosongkan pilihan |
| `ALL` dan `L` pada Select objects | Sama |
| Shift+klik mengalih keluar daripada pilihan | Sama. Tetapan boleh menjadikan klik menggantikan pilihan, seperti PICKADD 0 lakukan: lihat [Tetapan CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Arahan dan kekunci sama; menampal meletakkan salinan mengikut sudut kiri bawahnya, seperti PASTECLIP lakukan |
| F3 snap objek, F7 grid, F8 Ortho | Kekunci sama |
| Klik dua kali roda untuk zum ke extents | Sama |
| Teks yang dicerminkan kekal boleh dibaca | Sama (seperti dengan MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Sama; pada Mac, Command juga berfungsi |

[Rujukan arahan](topic:commands) menyenaraikan setiap arahan dan alias.

:::tip
Jika anda suka reben AutoCAD, pilih gaya menu {{ui:Lukisan klasik}} dalam {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Menu, kekunci dan tetikus}}: tab Home, Insert, Annotate, Parametric, View, Manage dan Output di atas baris arahan yang sama, dan butang tengah melakukan pan manakala klik kanan ialah Enter. Lihat [Menu, kekunci dan tetikus](topic:menus-keys-and-mouse).
:::

[Peta arahan](topic:command-map) menyenaraikan setiap arahan CadCraft dengan nama pendeknya, dan [helaian ringkasan](topic:cheat-sheet) 40 arahan yang akan paling kerap anda gunakan (juga sebagai PDF satu halaman).

## Perbezaan yang memerangkap orang

### Titik yang ditaip ialah mutlak

Dengan input dinamik dihidupkan, program lain menganggap `100,0` yang ditaip untuk titik kedua sebagai relatif. **Baris arahan CadCraft tidak**: di sana, `x,y` sentiasa diukur dari asalan. Dengan {{ui:Dyn}} ({{key:F12}}) dihidupkan, gunakan medannya sebaliknya: jarak, {{key:Tab}}, sudut. Gunakan `@100,0` untuk "100 ke kanan titik terakhir", atau alihkan kursor ke arah yang betul dan taip `100` sahaja.

### Shift melangkau snap; ia tidak memberikan Ortho

Menahan Shift semasa anda klik mengabaikan snap objek bagi klik itu. Ia tidak menukar Ortho buat sementara. Gunakan F8 atau butang {{ui:Ortho}}.

### Klik kanan sentiasa Enter

Tiada menu klik kanan. Klik kanan dalam lukisan ialah Enter: ia menamatkan arahan, menyelesaikan pilihan, atau mengulang arahan terakhir. Semasa gerakan grip atau kotak pilihan, ia membatalkan sebaliknya. Seret dengan butang kanan untuk pan.

### Tiada pan dengan Space

Space ialah Enter, jadi menahan Space dan menyeret tidak melakukan pan. Lakukan pan dengan butang tengah atau butang kanan, atau zum keluar dan masuk semula di tempat lain dengan roda.

### Pangkas dan Panjangkan

Pangkas dan Panjangkan bermula dalam mod Pantas: setiap objek yang kelihatan ialah tepi pemotongan atau sempadan, bahagian di bawah penuding menunjukkan apa yang akan dibuang, laluan yang diseret memangkas setiap bahagian yang dilintasinya, dan objek yang tidak dilintasi apa-apa dipadam. {{key:Shift}} bertukar antara pangkas dan panjangkan. `O` bertukar kepada mod Standard (pilih tepi dahulu), `F` dan `C` ialah pagar dan silang, `E` ialah EDGEMODE, `R` memadam. Tiada pilihan `P` (Projek): CadCraft memangkas dalam satah lukisan.

### Fillet dan chamfer

{{cmd:FILLET}} dan {{cmd:CHAMFER}} menerima pilihan yang anda kenali: Undo, Polyline, Radius (atau Distance, Angle dan mEthod), Trim dan Multiple, dan {{key:Shift}}+klik untuk sudut tajam. Fillet antara polyline dan garisan menambah lengkok sebagai objeknya sendiri dan bukannya menyambungkannya ke dalam polyline, dan bucu polyline bersebelahan dengan segmen lengkok dibiarkan seperti sedia ada.

### Teks perenggan dan teks baris tunggal

`T`, `MT` dan `MTEXT` ialah teks perenggan yang ditaip di tempatnya, dengan lebar, jarak baris dan penjajaran; `DT` dan `DTEXT` ialah teks baris tunggal, seperti yang anda kenali. Tiada gaya teks atau lajur, dan anda belum boleh menaip pemformatan dalam teks (tebal, pecahan bertindan) lagi; pemformatan yang datang dalam fail dikekalkan, dilukis dan disimpan (lihat [Tambah teks dan label](topic:text#formatting-inside-paragraph-text-from-other-programs)). Semuanya dilukis dengan fon gaya Helvetica.

### Simpan bermaksud "muat turun salinan"

{{key:Mod+S}}, `SAVE` dan `QSAVE` memuat turun salinan dalam format lukisan: DWG yang anda buka disimpan sebagai DWG, DXF sebagai DXF. Dalam pelayar tiada apa ditulis ganti di tempat asal, dan fail yang dibuka tidak pernah diubah. Dalam CadCraft Studio, {{key:Mod+S}} menulis semula ke fail yang anda buka.

`SAVEAS` ({{key:Mod+Shift+S}}) ialah kotak dialog kecil, bukan pelayar fail: pilih {{ui:DWG}} (dengan {{ui:Versi}}nya, AutoCAD 2000 hingga 2018), {{ui:DXF R12}} atau {{ui:DXF 2000}} dan klik {{ui:Simpan}}. Pelayar memutuskan di mana muat turun pergi. `DXFOUT` sentiasa memuat turun DXF R12.

DWG yang anda buka disimpan dalam versi ia datang; lukisan baharu disimpan dalam format AutoCAD 2000 melainkan anda pilih yang lain. Helaian, dimensi dan corak hatch dikekalkan. Lihat [Fail: apa yang dibuka, apa yang disimpan](topic:files#saving).

### Lapisan: lebih ringkas

- Setiap perubahan lapisan (hidup, beku, kunci, warna, plot, jenis garisan, ketebalan garisan, lapisan semasa) ialah satu langkah {{ui:Buat asal}}.
- Mati dan beku memberi kesan yang sama dalam CadCraft.
- Lapisan yang dibekukan dalam satu viewport kekal beku di sana: pada skrin, dalam plot dan apabila anda menyimpannya sebagai DWG atau DXF.
- Viewport yang menunjukkan lapisan dalam warna, jenis garisan, ketebalan garisan atau ketelusannya sendiri terus berbuat demikian pada skrin, dalam plot dan dalam DWG yang disimpan (DXF mengekalkan tetapan lapisan itu sendiri; simpanan memberitahu anda begitu). Menukar perkara itu bagi setiap viewport belum dibina.
- Tiada pengurus sifat lapisan dan tiada keadaan lapisan; {{cmd:RENAME}}, {{cmd:LAYMRG}} dan {{cmd:LAYDEL}} menamakan semula, menggabung dan memadam lapisan. Jenis garisan dan ketebalan garisan ditetapkan dalam panel kanan (lihat [Ketebalan garisan dan jenis garisan](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} dan {{cmd:LAYMCUR}} berfungsi dengan memilih.
- Menyimpan ke DXF R12 menulis nama lapisan dalam huruf besar. DWG mengekalkannya seperti yang anda taip.

### Gaya dimensi

`DIMSTYLE` membuka pengurus untuk gaya bernama (baharu, ubah suai, tetapkan semasa, bandingkan, guna). `DIMSCALE` dan tetapan lain masih menukar apa yang dimensi baharu gunakan, dan setiap dimensi mengekalkan saiznya sendiri, yang juga boleh anda tukar dalam panel Sifat. Gaya semasa tidak disimpan dalam fail. Dimensi mengikut format panjang lukisan (perpuluhan, atau kaki dan inci dengan {{cmd:UNITS}}), atau {{ui:Format}} sendiri. Lihat [Tetapkan saiz dimensi](topic:dimension-settings).

### Plot lebih ringkas

Jadual gaya plot berfungsi mengikut warna, seperti fail CTB: Monokrom, Warna dan Skala kelabu dibina, anda boleh buat sendiri, dan setiap helaian mengekalkan jadualnya. Pembacaan fail CTB dibina daripada huraian yang diterbitkan dan hanya telah dicuba pada fail yang kami buat; jadual gaya plot bernama (STB) dan persediaan halaman belum dibina. Garisan dicetak pada ketebalan garisannya, yang lain pada satu lebar pen. Helaian diplot pada 1:1 pada kertasnya sendiri; model diplot pada skala yang dipilih atau dimuatkan. Lihat [Plot ke PDF](topic:plot-pdf).

### Bekerja di dalam viewport

Seperti yang anda kenali: klik dua kali di dalam viewport (atau taip {{cmd:MSPACE}}) untuk bekerja pada model melalui viewport itu, dan klik dua kali di luarnya (atau {{cmd:PSPACE}}) untuk kembali ke helaian. Di dalam, pan dan zum mengubah apa yang viewport tunjukkan, melainkan paparannya dikunci; kemudian ia menggerakkan helaian. Mengklik tab di bawah lukisan juga keluar dari viewport. Lihat [Bekerja pada model melalui viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Penjejakan dan input dinamik ya, snap grid belum lagi

Grid hanya untuk dilihat; titik tidak melekat padanya (tiada mod snap F9). Penjejakan kutub ({{key:F10}}, langkah ditetapkan dengan {{cmd:POLARANG}}) dan penjejakan snap objek ({{key:F11}}: berhenti pada titik snap untuk memperolehnya) berfungsi seperti yang anda kenali; lihat [Snap ke objek](topic:object-snaps#polar-tracking). Input dinamik ({{key:F12}}) menunjukkan jarak dan sudut (atau X dan Y) di sebelah kursor; lihat [Kemasukan koordinat dan jarak](topic:coordinate-entry#dynamic-input).

### Kaki dan inci

Pilih {{ui:Format panjang}} {{ui:Seni bina}} atau {{ui:Kejuruteraan}} (atau taip {{cmd:UNITS}}), dan taip panjang seperti yang anda kenali: `12'6"`, `12'6-1/2"`. Gunakan sengkang, bukan ruang, sebelum pecahan: {{key:Space}} ialah {{key:Enter}}. Tetapkan juga {{ui:Unit}} kepada {{ui:Inci}}, supaya helaian dan plot menawarkan skala seni bina. Format itu dikekalkan dalam fail DWG dan DXF yang disimpan. Lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions).

### Salin dan tampal kekal dalam CadCraft

{{key:Mod+C}}, {{key:Mod+X}} dan {{key:Mod+V}} menyalin, memotong dan menampal objek dalam satu lukisan, antara lukisan, dan antara tab CadCraft dalam pelayar yang sama. Papan keratannya milik CadCraft sendiri: anda tidak boleh menampal objek CadCraft ke dalam program lain, atau objek daripada program lain ke dalam CadCraft. Menampal daripada lukisan dalam unit lain tidak menskala semula: gunakan {{cmd:SCALE}} selepas itu. {{key:Mod+D}} ialah pendua yang bergerak bersama penuding, tambahan CadCraft. Lihat [Salin, tampal dan pendua](topic:copy-paste).

### Kekunci pelayar yang tidak boleh anda gunakan

Halaman web tidak boleh mengambil {{key:Mod+N}}, {{key:Mod+W}} atau {{key:Mod+T}} daripada pelayar: ia membuka dan menutup tetingkap dan tab. Gunakan butang {{ui:Baharu}} atau taip `NEW`. Lihat [Kekunci, tetikus dan pad sentuh](common:keys).

## Arahan yang mungkin anda cari yang belum ada di sini

{{cmd:TABLE}} belum dibina. Menaipnya memberi "Arahan tidak diketahui". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} dan {{cmd:XREF}} sudah dibina.) [Belum dibina](topic:not-built-yet) menyenaraikan apa yang perlu dilakukan sebaliknya hari ini.
