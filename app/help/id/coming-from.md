---
title: Dari perangkat lunak gambar lain
summary: Bagaimana perintah, tombol, dan kebiasaan yang sudah dikenal dipetakan ke CadCraft, serta perbedaan yang sering membuat drafter berpengalaman tersandung.
keywords: peralihan, perbedaan, pindah, kebiasaan, alias, input dinamis, pickfirst, pickadd, qsave, saveas, simpan sebagai, mtext, ctb, pelacakan polar, xref, pintasan keyboard, sudah dikenal, copyclip, pasteclip, pasteorig, copybase, clipboard
from: b58688e7
---

Jika Anda pernah memakai AutoCAD, atau program yang dibangun di atas model yang sama, sebagian besar yang Anda ketahui tetap berfungsi di sini: baris perintah, alias seperti `L`, `C`, `TR`, dan `O`, Enter atau Spasi untuk mengulang, seleksi jendela dan silang, object snap pada F3, Ortho pada F8, ruang model dengan layout dan viewport. Halaman ini mencantumkan apa yang langsung terpetakan, lalu perbedaan yang menjebak orang. Baca paruh kedua walaupun Anda hanya membaca sekilas paruh pertama.

## Yang terpetakan langsung

| Kebiasaan | Di CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Perintah yang sama, alias yang sama |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Sama |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Perintah dimensi yang sama |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` diketik di baris perintah | Sama, untuk dimensi baru |
| `B` untuk membuat blok, `I` untuk menyisipkan, `PU` untuk membersihkan | Sama (pembersihan hanya menghapus blok yang tidak terpakai) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` lalu `E` atau `W` | Sama |
| Mengetik `_LINE` atau `-LAYER` dari skrip atau kebiasaan | Awalan `_`, `-`, `.`, atau `'` diabaikan |
| Enter atau Spasi pada prompt kosong mengulang perintah terakhir | Sama |
| Esc membatalkan; Esc lagi menghapus pilihan | Sama |
| `@dx,dy`, `@d<a`, sudut yang diketik berlawanan arah jarum jam dari timur | Sama |
| Jendela dari kiri ke kanan, silang dari kanan ke kiri, klik-klik; tekan dan seret untuk laso, Spasi berputar antara jendela / silang / pagar (LASSOMODE) | Sama |
| Pilih dulu, lalu perintah (kata benda-kata kerja) | Sama; perintah yang selesai menghapus pilihan |
| `ALL` dan `L` pada Select objects | Sama |
| Shift+klik menghapus dari pilihan | Sama. Pengaturan dapat membuat klik mengganti pilihan, seperti PICKADD 0: lihat [Pengaturan CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Perintah dan tombol yang sama; menempel menempatkan salinan berdasarkan sudut kiri bawahnya, seperti PASTECLIP |
| F3 object snap, F7 grid, F8 Ortho | Tombol yang sama |
| Klik dua kali roda untuk zoom batas | Sama |
| Teks cermin tetap terbaca | Sama (seperti MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Sama; di Mac, Command juga berfungsi |

[Referensi perintah](topic:commands) mencantumkan setiap perintah dan alias.

:::tip
Jika Anda menyukai pita AutoCAD, pilih gaya menu {{ui:Drafting klasik}} di {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Menu, tombol, dan mouse}}: tab Home, Insert, Annotate, Parametric, View, Manage, dan Output di atas baris perintah yang sama, dan tombol tengah menggeser sementara klik kanan adalah Enter. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).
:::

[Peta perintah](topic:command-map) mencantumkan setiap perintah CadCraft beserta nama pendeknya, dan [lembar contekan](topic:cheat-sheet) mencantumkan 40 perintah yang paling sering Anda pakai (juga sebagai PDF satu halaman).

## Perbedaan yang menjebak orang

### Titik yang diketik bersifat absolut

Dengan input dinamis aktif, program lain memperlakukan `100,0` yang diketik untuk titik kedua sebagai relatif. **Baris perintah CadCraft tidak begitu:** di sana, `x,y` selalu diukur dari titik asal. Dengan {{ui:Dyn}} ({{key:F12}}) aktif, gunakan kolomnya: jarak, {{key:Tab}}, sudut. Gunakan `@100,0` untuk "100 ke kanan dari titik terakhir", atau gerakkan kursor silang ke arah yang benar dan ketik `100` saja.

### Shift melewati snap; tidak mengaktifkan Ortho

Menahan Shift saat Anda mengklik mengabaikan object snap untuk klik itu. Ini tidak mengalihkan Ortho sementara. Gunakan F8 atau tombol {{ui:Ortho}}.

### Klik kanan selalu Enter

Tidak ada menu klik kanan. Klik kanan di gambar adalah Enter: ia mengakhiri perintah, menyelesaikan pilihan, atau mengulang perintah terakhir. Selama pemindahan grip atau kotak pilihan, ia membatalkan. Seret dengan tombol kanan untuk menggeser.

### Tidak ada geser dengan Spasi

Spasi adalah Enter, sehingga menahan Spasi lalu menyeret tidak menggeser. Geser dengan tombol tengah atau tombol kanan, atau perkecil lalu perbesar lagi di tempat lain dengan roda.

### Trim dan Extend

Trim dan Extend dimulai dalam mode Quick: setiap objek yang terlihat adalah tepi potong atau batas, potongan di bawah penunjuk menunjukkan apa yang akan hilang, jalur yang diseret memangkas setiap potongan yang dilewatinya, dan objek yang tidak dilewati apa pun dihapus. {{key:Shift}} beralih antara trim dan extend. `O` beralih ke mode Standard (pilih tepi lebih dulu), `F` dan `C` adalah pagar dan silang, `E` adalah EDGEMODE, `R` menghapus. Tidak ada opsi `P` (Project): CadCraft memangkas pada bidang gambar.

### Fillet dan chamfer

{{cmd:FILLET}} dan {{cmd:CHAMFER}} menerima opsi yang Anda kenal: Undo, Polyline, Radius (atau Distance, Angle, dan mEthod), Trim dan Multiple, dan {{key:Shift}}+klik untuk sudut tajam. Fillet antara polyline dan garis menambahkan busur sebagai objeknya sendiri alih-alih menggabungkannya ke dalam polyline, dan sudut polyline di sebelah segmen busur dibiarkan seperti semula.

### Teks paragraf dan teks satu baris

`T`, `MT`, dan `MTEXT` adalah teks paragraf yang diketik di tempat, dengan lebar, spasi baris, dan perataan; `DT` dan `DTEXT` adalah teks satu baris, seperti yang Anda kenal. Tidak ada gaya atau kolom teks, dan Anda belum dapat mengetik format di dalam teks (tebal, pecahan bertumpuk); format yang datang dari file tetap disimpan, digambar, dan disimpan kembali (lihat [Menambah teks dan label](topic:text#formatting-inside-paragraph-text-from-other-programs)). Semuanya digambar dengan font gaya Helvetica.

### Simpan berarti "unduh salinan"

{{key:Mod+S}}, `SAVE`, dan `QSAVE` mengunduh salinan dalam format gambar: DWG yang Anda buka disimpan sebagai DWG, DXF sebagai DXF. Di peramban tidak ada yang ditimpa di tempat, dan file yang dibuka tidak pernah diubah. Di CadCraft Studio, {{key:Mod+S}} menulis kembali ke file yang Anda buka.

`SAVEAS` ({{key:Mod+Shift+S}}) adalah dialog kecil, bukan penjelajah file: pilih {{ui:DWG}} (dengan {{ui:Versi}}-nya, AutoCAD 2000 sampai 2018), DXF R12 atau {{ui:DXF 2000}}, lalu klik {{ui:Simpan}}. Peramban yang memutuskan ke mana unduhan pergi. `DXFOUT` selalu mengunduh DXF R12.

DWG yang Anda buka disimpan dalam versi tempat ia datang; gambar baru disimpan dalam format AutoCAD 2000 kecuali Anda memilih yang lain. Lembar, dimensi, dan pola hatch tetap disimpan. Lihat [File: apa yang dibuka, apa yang disimpan](topic:files#saving).

### Layer: lebih sederhana

- Setiap perubahan layer (nyala, bekukan, kunci, warna, plot, jenis garis, tebal garis, layer aktif) adalah satu langkah urungkan.
- Mati dan beku memberi efek yang sama di CadCraft.
- Layer yang dibekukan gambar di satu viewport tetap beku di sana: di layar, di cetakan, dan saat Anda menyimpannya sebagai DWG atau DXF.
- Viewport yang menampilkan layer dengan warna, jenis garis, tebal garis, atau transparansinya sendiri tetap melakukannya di layar, di cetakan, dan di DWG yang disimpan (DXF menyimpan pengaturan layer itu sendiri; penyimpanan memberi tahu Anda). Mengubah itu per viewport belum dibuat.
- Tidak ada pengelola properti layer dan tidak ada status layer; {{cmd:RENAME}}, {{cmd:LAYMRG}}, dan {{cmd:LAYDEL}} mengganti nama, menggabungkan, dan menghapus layer. Jenis garis dan tebal garis diatur di panel kanan (lihat [Tebal garis dan jenis garis](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}}, dan {{cmd:LAYMCUR}} bekerja dengan menunjuk.
- Menyimpan ke DXF R12 menulis nama layer dengan huruf kapital. DWG menyimpannya seperti yang Anda ketik.

### Gaya dimensi

`DIMSTYLE` membuka pengelola untuk gaya bernama (baru, ubah, atur aktif, bandingkan, terapkan). `DIMSCALE` dan pengaturan lain tetap mengubah apa yang dipakai dimensi baru, dan setiap dimensi menyimpan ukurannya sendiri, yang juga bisa Anda ubah di panel Properti. Gaya aktif tidak disimpan dalam file. Dimensi mengikuti format panjang gambar (desimal, atau kaki dan inci dengan {{cmd:UNITS}}), atau {{ui:Format}} miliknya sendiri. Lihat [Atur ukuran dimensi](topic:dimension-settings).

### Mencetak lebih sederhana

Tabel gaya plot bekerja berdasarkan warna, seperti file CTB: Monochrome, Colour, dan Grayscale sudah tersedia, Anda dapat membuat sendiri, dan setiap lembar menyimpan tabelnya. Membaca file CTB dibuat dari deskripsi yang dipublikasikan dan baru diuji pada file yang kami buat sendiri; tabel gaya plot bernama (STB) dan pengaturan halaman belum dibuat. Garis dicetak pada tebal garisnya, yang lain pada satu lebar pena. Lembar dicetak 1:1 pada kertasnya sendiri; model dicetak pada skala yang dipilih atau dipas. Lihat [Cetak ke PDF](topic:plot-pdf).

### Bekerja di dalam viewport

Seperti yang Anda kenal: klik dua kali di dalam viewport (atau ketik {{cmd:MSPACE}}) untuk bekerja pada model melalui viewport itu, dan klik dua kali di luarnya (atau {{cmd:PSPACE}}) untuk kembali ke lembar. Di dalam, geser dan zoom mengubah apa yang ditampilkan viewport, kecuali tampilannya dikunci; jika dikunci, keduanya menggerakkan lembar. Mengklik tab di bawah gambar juga keluar dari viewport. Lihat [Bekerja pada model melalui viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Pelacakan dan input dinamis ya, snap grid belum

Grid hanya untuk dilihat; titik tidak menempel padanya (tidak ada mode snap F9). Pelacakan polar ({{key:F10}}, langkah diatur dengan {{cmd:POLARANG}}) dan pelacakan object snap ({{key:F11}}: diam di titik snap untuk mengambilnya) bekerja seperti yang Anda kenal; lihat [Snap ke objek](topic:object-snaps#polar-tracking). Input dinamis ({{key:F12}}) menampilkan jarak dan sudut (atau X dan Y) mengikuti kursor silang; lihat [Entri koordinat dan jarak](topic:coordinate-entry#dynamic-input).

### Kaki dan inci

Pilih {{ui:Format panjang}} {{ui:Arsitektural}} atau {{ui:Teknik}} (atau ketik {{cmd:UNITS}}), lalu ketik panjang seperti yang Anda kenal: `12'6"`, `12'6-1/2"`. Gunakan tanda hubung, bukan spasi, sebelum pecahan: {{key:Space}} adalah {{key:Enter}}. Atur {{ui:Satuan}} ke {{ui:Inci}} juga, agar lembar dan cetakan menawarkan skala arsitektur. Format ini disimpan dalam file DWG dan DXF yang disimpan. Lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions).

### Salin dan tempel tetap di dalam CadCraft

{{key:Mod+C}}, {{key:Mod+X}}, dan {{key:Mod+V}} menyalin, memotong, dan menempel objek di dalam satu gambar, antar gambar, dan antar tab CadCraft di peramban yang sama. Papan klip adalah milik CadCraft sendiri: Anda tidak dapat menempelkan objek CadCraft ke program lain, atau objek dari program lain ke CadCraft. Menempel dari gambar dengan satuan lain tidak menskala ulang: gunakan {{cmd:SCALE}} setelahnya. {{key:Mod+D}} adalah duplikat yang bergerak mengikuti penunjuk, tambahan dari CadCraft. Lihat [Salin, tempel, dan duplikat](topic:copy-paste).

### Tombol peramban yang tidak bisa Anda gunakan

Halaman web tidak dapat mengambil {{key:Mod+N}}, {{key:Mod+W}}, atau {{key:Mod+T}} dari peramban: tombol itu membuka dan menutup jendela serta tab. Gunakan tombol {{ui:Baru}} atau ketik `NEW`. Lihat [Tombol, mouse, dan trackpad](common:keys).

## Perintah yang mungkin Anda cari tetapi belum ada di sini

{{cmd:TABLE}} belum dibuat. Mengetiknya menampilkan "Unknown command". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}}, dan {{cmd:XREF}} sudah dibuat.) [Belum dibuat](topic:not-built-yet) mencantumkan apa yang bisa dilakukan sebagai gantinya saat ini.
