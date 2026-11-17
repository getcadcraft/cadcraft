---
title: Tetapan CadCraft
summary: Tetapan yang tergolong dalam aplikasi lukisan: saiz kursor, tempat salinan yang ditampal digantung daripada kursor, apa yang dilakukan klik terhadap pilihan, berapa baris yang digunakan bar alat, di mana baris arahan berada dan ketinggiannya, bahagian atas yang padat, dan penunjuk sudut.
keywords: baris arahan, baris arahan terapung, terapung, lekap, satu baris, f2, sejarah arahan, commandline, cmdline, toparea, kawasan atas, padat, cursorsize, crosshair skrin penuh, kursor skrin penuh, tepi ke tepi, baris bar alat, paparan bar alat, ctrl f1, tetapan, keutamaan, pilihan, penunjuk sudut, view cube, ikon paksi, ikon ucs, kursor, crosshair, kotak pilih, titik tampal, titik asas, klik objek, pilihan, pickadd, shift, tetapkan semula
from: 0896eb42
---

Buka {{ui:Tetapan}} dengan ikon gear pada bar aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:CadCraft}}, memuatkan tetapan yang tergolong dalam aplikasi ini; {{ui:Umum}} memuatkan tetapan yang dikongsi oleh setiap aplikasi dalam keluarga ini (tema, saiz dan lebar teks panel, rupa dan susunan bar alat). Tetapan CadCraft hanya wujud dalam aplikasi: anda menukarnya di sini, dan pelayar ini mengingatinya. Tetapkan semula tetapan CadCraft mengembalikan setiap satu kepada permulaan.

## Kursor

**Kecil**, **Sederhana** (permulaan), **Besar** atau **Skrin penuh**: saiz crosshair dan kotak pilih dalam lukisan. Kotak pilih yang lebih besar juga memilih objek dari jarak yang sedikit lebih jauh, yang membantu pada skrin sentuh atau lukisan yang sangat halus.

**Skrin penuh** menjadikan dua garisan crosshair merentasi lukisan dari tepi ke tepi, juga apabila tiada arahan berjalan, supaya anda boleh memeriksa dengan mata bahawa dua perkara sejajar merentasi keseluruhan pandangan. Dengan pandangan dibahagi, garisan kekal dalam anak tetingkap yang sedang anda kerjakan. Sama seperti {{cmd:CURSORSIZE}} 100 dalam AutoCAD: taip {{cmd:CURSORSIZE}} dan 100 untuk skrin penuh; nombor yang lebih kecil memilih saiz terdekat (di bawah 5 Kecil, 5 hingga 9 Sederhana, 10 hingga 99 Besar).

## Titik tampal

Tempat salinan yang ditampal tergantung daripada kursor selepas {{key:Mod+V}} ({{cmd:PASTECLIP}}), sehingga anda klik:

- **Sudut kiri bawah** (permulaan): sudut kiri bawah lingkungan objek yang disalin, seperti dalam AutoCAD.
- **Pusat**: bahagian tengah lingkungannya. Berguna untuk meletakkan simbol dengan mata.

Salinan yang dibuat dengan `COPYBASE` sentiasa tergantung daripada titik asas yang anda pilih. {{ui:Tampal di tempat yang sama}} ({{key:Mod+Shift+V}}) mengabaikan tetapan ini: ia mengekalkan koordinat asal. Lihat [Salin, tampal dan pendua](topic:copy-paste).

## Klik objek

Apa yang dilakukan klik dalam lukisan terhadap pilihan apabila tiada arahan berjalan:

- **Menambah pada pilihan** (permulaan): setiap klik atau tetingkap menambah objek; {{key:Shift}}+klik, atau {{key:Shift}}+tetingkap, mengeluarkannya.
- **Menggantikan pilihan**: klik atau tetingkap hanya memilih apa yang dipilihnya. {{key:Shift}}+klik menambah objek, atau mengeluarkan satu yang sudah dipilih; {{key:Shift}}+tetingkap menambah.

Pada gesaan `Pilih objek:` dalam arahan, klik sentiasa menambah (dan {{key:Shift}} mengeluarkan), tanpa mengira tetapan ini. Lihat [Pilih objek](topic:select-objects).

## Klik pada ruang kosong

Apa yang dilakukan klik di tempat tiada objek apabila tiada arahan berjalan. Sama ada cara, ia memulakan tetingkap pilihan (klik kedua menamatkannya).

- **Mengosongkan pilihan** (permulaan): apa yang dipilih dilepaskan. Tahan {{key:Shift}} semasa klik untuk mengekalkannya.
- **Mengekalkan pilihan**: pilihan kekal, seperti dalam program lukisan lain; tetingkap menambahnya. Tekan {{key:Esc}} untuk mengosongkan pilihan.

## Menyeret untuk memilih

Apa yang dilukis apabila menekan dan menyeret di tempat kosong:

- **Lasso** (permulaan): garis luar bebas. Bergerak ke kanan dahulu memilih apa yang berada sepenuhnya di dalamnya, ke kiri dahulu apa yang disentuhnya; {{key:Space}} semasa menyeret bertukar antara tetingkap, silang dan pagar.
- **Segi empat tepat**: kotak, seperti yang dilukis oleh klik dan klik kedua.

{{cmd:LASSOMODE}} `1` atau `0` menetapkan perkara yang sama. Lihat [Pilihan lasso](topic:lasso-selection).

## Menyeret untuk memangkas dan memanjangkan

Apa yang dilakukan apabila menekan di tempat kosong dan menyeret dalam {{cmd:TRIM}} dan {{cmd:EXTEND}}:

- **Laluan** (permulaan): laluan bebas; setiap bahagian yang disilangnya dipangkas (atau dipanjangkan).
- **Tetingkap**: kotak; setiap bahagian yang disentuhnya dipangkas, seperti pilihan `C`.

Lihat [Pangkas dan panjangkan](topic:trim-and-extend).

## Kedudukan bar alat

{{ui:CadCraft}} › {{ui:Kedudukan bar alat}}: **Atas** (permulaan, seperti sentiasa), **Bawah**, **Kiri** atau **Kanan**. Di kiri atau kanan, kumpulan alat disusun dalam lajur yang boleh skrol apabila ia lebih tinggi daripada tetingkap, dan butang dibalut dua atau tiga setiap baris. Pilihan disimpan bersama tetapan anda, dan {{cmd:TOOLBARDOCK}} (`TBDOCK`) menetapkannya daripada baris arahan. {{ui:Umum}} › {{ui:Tetapkan semula susun atur}} mengembalikan bar alat ke atas.

Bar gaya menu berada di dalam bar alat dan bergerak bersamanya, tetapi gaya {{ui:Reben}} direka untuk berjalan merentasi atas atau bawah: di sisi ia mendapat lajur sempit yang boleh skrol. Pada telefon, bar alat kekal di tempat yang diletakkan oleh susun atur telefon.

## Baris bar alat

Berapa baris alat menggunakan di atas lukisan, dalam bar alat CadCraft dan dalam gaya {{ui:Lukisan klasik}} dan {{ui:Reben}}:

- **Balut mengikut muat** (permulaan): alat dibalut mengikut lebar tetingkap.
- **2 baris**: paling banyak dua baris. Apabila alat dibalut kepada dua baris atau kurang pada lebar ini, ia hanya dibalut; jika tidak, ia berada dalam dua baris yang boleh skrol ke sisi.
- **1 baris**: satu baris yang boleh skrol ke sisi, yang memberi ruang paling banyak kepada lukisan.

{{key:Shift+Ctrl+F1}} bergerak melalui ketiga-tiga, dan {{cmd:TOOLBARROWS}} menetapkan satu. Apa yang dipaparkan oleh butang (ikon dan teks, hanya ikon, atau hanya teks) ialah tetapan {{ui:Umum}} › {{ui:Bar alat}}; {{key:Ctrl+F1}} bergerak melaluinya dan {{cmd:TOOLBAR}} menetapkannya.

## Baris arahan

Baris arahan boleh kekal dilekapkan di bawah lukisan, seperti sebelum ini, atau terapung di atasnya, dan ia boleh senipis satu baris.

- **Terapungkannya.** Seret grip di hujung kirinya ke dalam lukisan, atau pilih {{ui:Terapung di atas lukisan}} dalam menu {{ui:Pilihan baris arahan}} (tiga titik di hujung kanannya). Seret grip sekali lagi untuk mengalihkannya; kedudukannya dikekalkan apabila tetingkap bertukar saiz. Seret tepi kanannya untuk menjadikannya lebih lebar atau lebih sempit. Lepaskannya pada bar status, atau pilih {{ui:Lekap di bahagian bawah}}, untuk melekapkannya semula.
- **Jadikannya lebih nipis atau lebih tinggi.** Seret tepi atasnya: setiap langkah ialah satu baris sejarah. Sehingga sifar baris, ia menjadi **baris arahan satu baris**: hanya gesaan dan apa yang anda taip, dan mesej baharu dipaparkan di atasnya seketika. Klik dua kali pada tepi atas bertukar antara satu baris dan ketinggian yang anda ada sebelum ini.
- **Sejarah.** {{key:F2}}, atau butang jam pada baris arahan ({{ui:Sejarah arahan (F2)}}), membuka keseluruhan sejarah di atas baris (di bawahnya apabila baris terapung berhampiran bahagian atas tetingkap). Menaip masih pergi ke baris arahan; {{key:PageUp}} dan {{key:PageDown}} menatal sejarah, dan {{key:Esc}}, {{key:F2}} atau klik di tempat lain menutupnya. Kekunci anda sendiri pada F2 mengatasi ini.
- **Dari papan kekunci.** Grip ialah butang: apabila ia difokuskan, kekunci anak panah mengalihkan baris arahan terapung (dengan {{key:Shift}}, dalam langkah yang lebih besar); {{key:Up}} menerapungkan yang dilekapkan dan {{key:Down}} di tepi bawah melekapkannya. Tepi atas ialah pemisah: {{key:Up}} dan {{key:Down}} menambah atau mengurangkan satu baris, {{key:Home}} menjadikannya satu baris, {{key:End}} yang tertinggi. Pembaca skrin tetap mendengar setiap mesej, juga dalam baris arahan satu baris.

{{ui:CadCraft}} › {{ui:Baris arahan}} mempunyai pilihan yang sama: {{ui:Dilekapkan di bahagian bawah}} atau {{ui:Terapung}}, {{ui:Baris sejarah ditunjukkan}} (0 hingga 12) dan {{ui:Tinggi standard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) menetapkannya daripada baris arahan. Kedudukan dan ketinggian disimpan untuk CadCraft dalam pelayar ini bersama baki susun atur, supaya persekitaran kerja yang disimpan membawanya; {{ui:Umum}} › {{ui:Tetapkan semula susun atur}} melekapkan semula baris arahan pada ketinggian standardnya. Pada telefon, baris arahan kekal dilekapkan dengan satu baris sejarah; butang sejarah turut berfungsi di sana.

Apabila tetingkap pendek dan semakan susun atur menawarkan susun atur yang lebih ketat, {{ui:Ya}} juga menukar baris arahan kepada satu baris jika lukisan masih pendek selepas bar alat.

## Kawasan atas

{{ui:CadCraft}} › {{ui:Kawasan atas}}: **Standard** (permulaan) atau **Padat**. Padat memastikan bar di atas lukisan kecil dalam setiap gaya menu: nama kumpulan dan perkataan di bawah ikon dibuang (tooltip dan pembaca skrin masih memilikinya) dan butangnya lebih rapat. Ia berfungsi dengan [Baris bar alat](topic:settings#toolbar-rows): Padat dan **1 baris** memberi ruang paling banyak kepada lukisan. {{cmd:TOPAREA}} menetapkannya.

## Penunjuk sudut

Apa yang berada di sudut lukisan:

- **Automatik** (permulaan): ikon paksi pada tab {{ui:Model}} dan ViewCube pada tab {{ui:3D}}.
- **Ikon paksi**: penanda X dan Y di sudut kiri bawah tab {{ui:Model}}, dan penanda X, Y dan Z kecil pada tab {{ui:3D}}.
- **ViewCube**: satu kubus di sudut kanan atas kedua-dua tab. Pada tab {{ui:Model}} ia menunjukkan lukisan dari atas, dan klik pada muka, tepi atau bucu lain membuka tab {{ui:3D}} yang memandang dari situ. Pada tab 3D ia berpusing mengikut pandangan: klik untuk melihat dari sisi, seret untuk orbit, dan ikon rumah kembali ke pandangan iso. Lihat [Model dalam 3D](topic:3d-solids).
- **Tiada**: tiada apa-apa di sudut.

Helaian tidak menunjukkan kedua-duanya.

## Panjang dan luas pilihan

- **Dalam bar status** (permulaan): apabila objek dipilih, bar status memaparkan jumlah panjangnya dan jumlah luas bagi yang tertutup. Lihat [Jumlah pilihan](topic:properties-panel#totals-of-a-selection).
- **Tersembunyi**: bar status tidak memaparkannya. {{ui:Sifat}} tetap memaparkannya untuk beberapa objek.

## Grid, Ortho dan snap

Ini tidak berada dalam kotak dialog: butang {{ui:Grid}}, {{ui:Ortho}} dan {{ui:Snap}} pada bar status (atau {{key:F7}}, {{key:F8}}, {{key:F3}}) dan senarai snap objek di sebelahnya diingati apabila anda meninggalkannya. Lihat [Snap ke titik pada objek](topic:object-snaps).
