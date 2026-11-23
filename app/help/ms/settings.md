---
title: Tetapan CadCraft
summary: Tetapan yang tergolong dalam aplikasi lukisan: saiz kursor, di mana salinan yang ditampal digantung dari kursor, apa yang dilakukan klik pada pilihan, berapa baris yang digunakan bar alat, di mana baris arahan berada dan betapa tingginya, bahagian atas yang padat, dan penunjuk sudut.
keywords: baris arahan, baris arahan terapung, apung, dok, satu baris, f2, sejarah arahan, commandline, cmdline, toparea, bahagian atas, padat, cursorsize, silang skrin penuh, kursor skrin penuh, dari tepi ke tepi, baris bar alat, paparan bar alat, ctrl f1, tetapan, keutamaan, pilihan, penunjuk sudut, penunjuk paksi, ikon ucs, kursor, silang, kotak pilih, titik tampal, titik asas, mengklik objek, pilihan, pickadd, shift, tetapkan semula
from: ae1a81db
---

Buka {{ui:Settings}} dengan gear pada bar aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:CadCraft}}, memegang tetapan yang tergolong dalam aplikasi ini; {{ui:General}} memegang yang dikongsi oleh setiap aplikasi dalam keluarga (tema, saiz teks dan lebar panel, rupa dan susunan bar alat). Tetapan CadCraft hanya wujud dalam aplikasi: anda menukarnya di sini, dan pelayar ini mengingatinya. {{ui:Reset CadCraft settings}} mengembalikan setiap satunya kepada permulaan.

## Kursor

**Small**, **Medium** (permulaan), **Large** atau **Full screen**: saiz silang dan kotak pilih dalam lukisan. Kotak pilih yang lebih besar juga memilih objek dari jarak yang sedikit lebih jauh, yang membantu pada skrin sentuh atau lukisan yang sangat halus.

**Full screen** menjalankan dua garisan silang dari tepi ke tepi lukisan, juga apabila tiada arahan sedang berjalan, supaya anda boleh memeriksa dengan mata bahawa dua perkara sejajar merentas keseluruhan paparan. Dengan paparan dibahagi, garisan kekal dalam anak tetingkap yang anda kerjakan. Sama seperti {{cmd:CURSORSIZE}} 100 dalam AutoCAD: taip {{cmd:CURSORSIZE}} dan 100 untuk skrin penuh; nombor yang lebih kecil memilih saiz terdekat (di bawah 5 Small, 5 hingga 9 Medium, 10 hingga 99 Large).

## Titik tampal

Di mana salinan yang ditampal digantung dari kursor selepas {{key:Mod+V}} ({{cmd:PASTECLIP}}), sehingga anda mengklik:

- **Lower-left corner** (permulaan): penjuru kiri bawah lingkungan objek yang disalin, seperti dalam AutoCAD.
- **Center**: pusat lingkungannya. Berguna untuk meletakkan simbol mengikut mata.

Salinan yang dibuat dengan `COPYBASE` sentiasa digantung dari titik asas yang anda pilih. {{ui:Paste in place}} ({{key:Mod+Shift+V}}) mengabaikan tetapan ini: ia mengekalkan koordinat asal. Lihat [Salin, tampal dan pendua](topic:copy-paste).

## Mengklik objek

Apa yang dilakukan klik dalam lukisan kepada pilihan apabila tiada arahan sedang berjalan:

- **Adds to the selection** (permulaan): setiap klik atau tetingkap menambah objek; {{key:Shift}}+klik, atau {{key:Shift}}+tetingkap, mengeluarkannya.
- **Replaces the selection**: klik atau tetingkap hanya memilih apa yang dipilihnya. {{key:Shift}}+klik menambah objek, atau mengeluarkan satu yang sudah dipilih; {{key:Shift}}+tetingkap menambah.

Pada gesaan `Select objects:` di dalam arahan, klik sentiasa menambah (dan {{key:Shift}} mengeluarkan), tanpa mengira tetapan ini. Lihat [Pilih objek](topic:select-objects).

## Mengklik tempat kosong

Apa yang dilakukan klik di tempat tiada objek apabila tiada arahan sedang berjalan. Sama ada cara, ia memulakan tetingkap pilihan (klik kedua menamatkannya).

- **Clears the selection** (permulaan): apa yang dipilih dilepaskan. Tahan {{key:Shift}} semasa anda mengklik untuk menyimpannya.
- **Keeps the selection**: pilihan kekal, seperti dalam program lukisan lain; tetingkap menambah kepadanya. Tekan {{key:Esc}} untuk mengosongkan pilihan.

## Seret untuk memilih

Apa yang dilukis apabila anda menekan dan menyeret di tempat kosong:

- **Lasso** (permulaan): garis luar bebas. Bergerak ke kanan dahulu memilih apa yang berada sepenuhnya di dalamnya, ke kiri dahulu apa yang disentuhnya; {{key:Space}} semasa menyeret bertukar antara tetingkap, silang dan pagar.
- **Rectangle**: kotak, seperti klik dan klik kedua melukisnya.

{{cmd:LASSOMODE}} `1` atau `0` menetapkan perkara yang sama. Lihat [Pilihan lasso](topic:lasso-selection).

## Seret untuk memangkas dan memanjangkan

Apa yang dilakukan apabila anda menekan di tempat kosong dan menyeret dalam {{cmd:TRIM}} dan {{cmd:EXTEND}}:

- **A path** (permulaan): laluan bebas; setiap kepingan yang dilaluinya dipangkas (atau dipanjangkan).
- **A window**: kotak; setiap kepingan yang disentuhnya dipangkas, seperti pilihan `C`.

Lihat [Pangkas dan panjangkan](topic:trim-and-extend).

## Kedudukan bar alat

{{ui:CadCraft}} › {{ui:Toolbar position}}: **Top** (permulaan, cara ia sentiasa ada), **Bottom**, **Left** atau **Right**. Di kiri atau kanan, kumpulan alatan disusun dalam lajur yang boleh digulung apabila ia lebih tinggi daripada tetingkap, dan butang dibungkus dua atau tiga sebaris. Pilihan disimpan bersama tetapan anda, dan {{cmd:TOOLBARDOCK}} (`TBDOCK`) menetapkannya dari baris arahan. {{ui:General}} › {{ui:Reset the layout}} meletakkan bar alat semula di atas.

Bar menu gaya itu terletak di dalam bar alat dan bergerak bersamanya, tetapi gaya {{ui:Ribbon}} dibuat untuk berjalan merentas bahagian atas atau bawah: di sisi ia mendapat lajur sempit yang boleh digulung. Pada telefon, bar alat kekal di tempat susun atur telefon meletakkannya.

## Baris bar alat

Berapa baris yang digunakan alatan di atas lukisan, dalam bar alat CadCraft dan dalam gaya {{ui:Drafting classic}} dan {{ui:Ribbon}}:

- **Wrap to fit** (permulaan): alatan dibungkus mengikut lebar tetingkap.
- **2 rows**: paling banyak dua baris. Apabila alatan dibungkus kepada dua baris atau kurang pada lebar ini, ia hanya dibungkus; jika tidak, ia terletak dalam dua baris yang boleh digulung ke sisi.
- **1 row**: satu baris yang digulung ke sisi, yang memberi lukisan ruang paling banyak.

{{key:Shift+Ctrl+F1}} bergerak melalui ketiga-tiganya, dan {{cmd:TOOLBARROWS}} menetapkan satu. Apa yang ditunjukkan butang (ikon dan teks, hanya ikon, atau hanya teks) ialah tetapan {{ui:General}} › {{ui:Toolbar}}; {{key:Ctrl+F1}} bergerak melaluinya dan {{cmd:TOOLBAR}} menetapkannya.

## Baris arahan

Baris arahan boleh kekal berlabuh di bawah lukisan, seperti sebelum ini, atau terapung di atasnya, dan ia boleh sekecil satu baris.

- **Apungkannya.** Seret pemegang di hujung kirinya ke dalam lukisan, atau pilih {{ui:Float over the drawing}} dalam menu {{ui:Command line options}} (tiga titik di hujung kanannya). Seret pemegang sekali lagi untuk mengalihkannya; tempatnya dikekalkan apabila tetingkap berubah saiz. Seret tepi kanannya untuk menjadikannya lebih lebar atau sempit. Lepaskannya pada bar status, atau pilih {{ui:Dock at the bottom}}, untuk melekapkannya semula.
- **Jadikannya lebih nipis atau lebih tinggi.** Seret tepi atasnya: setiap langkah ialah satu baris sejarah. Turun ke sifar baris ia menjadi **baris arahan satu baris**: hanya gesaan dan apa yang anda taip, dan mesej baharu ditunjukkan di atasnya seketika. Klik dua kali pada tepi atas bertukar antara satu baris dan ketinggian yang anda ada.
- **Sejarah.** {{key:F2}}, atau butang jam pada baris arahan ({{ui:Command history (F2)}}), membuka keseluruhan sejarah di atas baris (di bawahnya apabila baris terapung berhampiran bahagian atas tetingkap). Menaip masih pergi ke baris arahan; {{key:PageUp}} dan {{key:PageDown}} menggulung sejarah, dan {{key:Esc}}, {{key:F2}} atau klik di tempat lain menutupnya. Kekunci anda sendiri pada F2 mengatasi ini.
- **Dari papan kekunci.** Pemegang ialah butang: apabila ia fokus, kekunci anak panah menggerakkan baris arahan terapung (dengan {{key:Shift}}, dalam langkah yang lebih besar); {{key:Up}} mengapungkan yang berlabuh dan {{key:Down}} di tepi bawah melekapkannya. Tepi atas ialah pemisah: {{key:Up}} dan {{key:Down}} menambah atau mengambil satu baris, {{key:Home}} menjadikannya satu baris, {{key:End}} yang tertinggi. Pembaca skrin tetap mendengar setiap mesej, juga pada baris arahan satu baris.

{{ui:CadCraft}} › {{ui:Command line}} mempunyai pilihan yang sama: {{ui:Docked at the bottom}} atau {{ui:Floating}}, {{ui:History lines shown}} (0 hingga 12) dan {{ui:Standard height}}. {{cmd:COMMANDLINE}} (`CMDLINE`) menetapkannya dari baris arahan. Tempat dan ketinggian disimpan untuk CadCraft dalam pelayar ini bersama susun atur yang lain, jadi persekitaran kerja yang disimpan membawanya; {{ui:General}} › {{ui:Reset the layout}} melekapkan baris arahan pada ketinggian standardnya semula. Pada telefon, baris arahan kekal berlabuh dengan satu baris sejarah; butang sejarah juga berfungsi di sana.

{{ui:CadCraft}} › {{ui:Option letters}} menyimpan huruf yang anda pilih untuk pilihan arahan: {{ui:Edit…}} membuka fail, {{ui:Import…}} menggantikannya dengan fail yang anda pilih dan {{ui:Export}} menyimpannya. Lihat [Berikan pilihan arahan huruf anda sendiri](topic:option-letters).

Apabila tetingkap pendek dan semakan susun atur menawarkan susun atur yang lebih ketat, {{ui:Yes}} juga menjadikan baris arahan satu baris jika lukisan masih pendek selepas bar alat.

## Bahagian atas

{{ui:CadCraft}} › {{ui:Top area}}: **Standard** (permulaan) atau **Compact**. Compact memastikan bar di atas lukisan kecil dalam setiap gaya menu: nama kumpulan dan perkataan di bawah ikon dibuang (tip alat dan pembaca skrin masih memilikinya) dan butang dibuat lebih rapat. Ia berfungsi bersama [Baris bar alat](topic:settings#toolbar-rows): Compact dan **1 row** memberi lukisan ruang paling banyak. {{cmd:TOPAREA}} menetapkannya.

## Penunjuk sudut

Apa yang berada di sudut lukisan:

- **Automatic** (permulaan): ikon paksi pada tab {{ui:Model}} dan kubus pandangan pada tab {{ui:3D}}.
- **Axis icon**: penanda X dan Y di sudut kiri bawah tab {{ui:Model}}, dan penanda X, Y dan Z kecil pada tab {{ui:3D}}.
- **View cube**: kubus di sudut kanan atas kedua-dua tab. Pada tab {{ui:Model}} ia menunjukkan lukisan dari atas, dan mengklik muka, tepi atau penjuru lain membuka tab {{ui:3D}} yang melihat dari situ. Pada tab 3D ia berpusing mengikut pandangan: klik untuk melihat dari sisi, seret untuk orbit, dan rumah kembali ke pandangan iso. Lihat [Model dalam 3D](topic:3d-solids).
- **None**: tiada apa-apa di sudut.

Helaian tidak menunjukkan kedua-duanya.

## Panjang dan luas pilihan

- **In the status bar** (permulaan): apabila objek dipilih, bar status menunjukkan jumlah panjangnya dan jumlah luas bagi yang tertutup. Lihat [Jumlah pilihan](topic:properties-panel#totals-of-a-selection).
- **Hidden**: bar status meninggalkannya. Sifat masih menunjukkannya untuk beberapa objek.

## Grid, Ortho dan snap

Ini tidak terdapat dalam dialog: butang {{ui:Grid}}, {{ui:Ortho}} dan {{ui:Snap}} dalam bar status (atau {{key:F7}}, {{key:F8}}, {{key:F3}}) dan senarai snap objek di sebelahnya diingati apabila anda meninggalkannya. Lihat [Snap ke titik pada objek](topic:object-snaps).
