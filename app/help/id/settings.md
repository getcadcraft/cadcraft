---
title: Pengaturan CadCraft
summary: Pengaturan yang termasuk aplikasi gambar: ukuran kursor, tempat salinan yang ditempel digantung dari kursor, apa yang dilakukan klik pada pilihan, berapa baris yang dipakai bilah alat, tempat baris perintah dan tingginya, area atas yang ringkas, dan indikator sudut.
keywords: baris perintah, baris perintah mengambang, mengambang, tambatkan, satu baris, f2, riwayat perintah, commandline, cmdline, toparea, area atas, ringkas, cursorsize, kursor layar penuh, tepi ke tepi, baris bilah alat, tampilan bilah alat, ctrl f1, pengaturan, preferensi, opsi, indikator sudut, kubus tampilan, ikon sumbu, ikon ucs, kursor, crosshair, kotak pilih, titik tempel, titik dasar, mengklik objek, pilihan, pickadd, shift, atur ulang
from: 0896eb42
---

Buka {{ui:Pengaturan}} dengan ikon roda gigi di bilah aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:CadCraft}}, berisi pengaturan yang termasuk aplikasi ini; {{ui:Umum}} berisi pengaturan yang dimiliki bersama oleh setiap aplikasi dalam keluarga (tema, ukuran dan lebar teks panel, tampilan dan urutan bilah alat). Pengaturan CadCraft hanya berlaku di aplikasi ini: Anda mengubahnya di sini, dan peramban ini mengingatnya. {{ui:Atur ulang pengaturan CadCraft}} mengembalikan setiap pengaturan ke keadaan awal.

## Kursor

**Kecil**, **Sedang** (awal), **Besar** atau **Layar penuh**: ukuran crosshair dan kotak pilih di gambar. Kotak pilih yang lebih besar juga memilih objek dari jarak yang sedikit lebih jauh, yang membantu pada layar sentuh atau gambar yang sangat halus.

**Layar penuh** menjalankan dua garis crosshair dari tepi ke tepi gambar, juga saat tidak ada perintah yang berjalan, sehingga Anda dapat memeriksa dengan mata bahwa dua hal sejajar di seluruh tampilan. Dengan tampilan terbagi, garis tetap berada di panel tempat Anda bekerja. Sama dengan {{cmd:CURSORSIZE}} 100 di AutoCAD: ketik {{cmd:CURSORSIZE}} dan 100 untuk layar penuh; angka yang lebih kecil memilih ukuran terdekat (di bawah 5 Kecil, 5 sampai 9 Sedang, 10 sampai 99 Besar).

## Titik tempel

Tempat salinan yang ditempel digantung dari kursor setelah {{key:Mod+V}} ({{cmd:PASTECLIP}}), sampai Anda mengklik:

- **Sudut kiri bawah** (awal): sudut kiri bawah dari batas objek yang disalin, seperti di AutoCAD.
- **Pusat**: titik tengah dari batas mereka. Berguna untuk menempatkan simbol dengan mata.

Salinan yang dibuat dengan `COPYBASE` selalu digantung dari titik dasar yang Anda pilih. {{ui:Tempel di tempat yang sama}} ({{key:Mod+Shift+V}}) mengabaikan pengaturan ini: ia mempertahankan koordinat asli. Lihat [Salin, tempel dan duplikat](topic:copy-paste).

## Mengklik objek

Apa yang dilakukan klik di gambar terhadap pilihan saat tidak ada perintah yang berjalan:

- **Menambah ke pilihan** (awal): setiap klik atau jendela menambahkan objek; {{key:Shift}}+klik, atau {{key:Shift}}+jendela, mengeluarkannya.
- **Mengganti pilihan**: klik atau jendela hanya memilih apa yang ditunjuknya. {{key:Shift}}+klik menambahkan objek, atau mengeluarkan satu yang sudah terpilih; {{key:Shift}}+jendela menambahkan.

Pada prompt `Pilih objek:` di dalam perintah, klik selalu menambahkan (dan {{key:Shift}} mengeluarkan), apa pun pengaturan ini. Lihat [Pilih objek](topic:select-objects).

## Mengklik tempat kosong

Apa yang dilakukan klik di tempat tanpa objek saat tidak ada perintah yang berjalan. Keduanya memulai jendela pilihan (klik kedua menyelesaikannya).

- **Menghapus pilihan** (awal): apa yang terpilih dilepaskan. Tahan {{key:Shift}} saat mengklik untuk mempertahankannya.
- **Mempertahankan pilihan**: pilihan tetap, seperti di program gambar lain; jendela menambahkannya. Tekan {{key:Esc}} untuk menghapus pilihan.

## Seret untuk memilih

Apa yang digambar ketika Anda menekan dan menyeret di ruang kosong:

- **Laso** (awal): garis luar bebas. Bergerak ke kanan terlebih dahulu memilih apa yang sepenuhnya berada di dalamnya, ke kiri terlebih dahulu apa yang disentuhnya; {{key:Space}} saat menyeret berpindah antara jendela, silang dan pagar.
- **Persegi panjang**: kotak, seperti klik dan klik kedua menggambarnya.

{{cmd:LASSOMODE}} `1` atau `0` mengatur hal yang sama. Lihat [Pemilihan laso](topic:lasso-selection).

## Seret untuk memangkas dan memperpanjang

Apa yang dilakukan menekan di ruang kosong dan menyeret di {{cmd:TRIM}} dan {{cmd:EXTEND}}:

- **Jalur** (awal): jalur bebas; setiap potongan yang dilintasinya dipangkas (atau diperpanjang).
- **Jendela**: kotak; setiap potongan yang disentuhnya dipangkas, seperti yang dilakukan opsi `C`.

Lihat [Pangkas dan perpanjang](topic:trim-and-extend).

## Posisi bilah alat

{{ui:CadCraft}} › {{ui:Posisi bilah alat}}: **Atas** (awal, seperti selalu), **Bawah**, **Kiri** atau **Kanan**. Di kiri atau kanan, grup alat tersusun dalam kolom yang dapat digulir ketika lebih tinggi dari jendela, dan tombolnya dibungkus dua atau tiga per baris. Pilihan disimpan bersama pengaturan Anda, dan {{cmd:TOOLBARDOCK}} (`TBDOCK`) mengaturnya dari baris perintah. {{ui:Umum}} › {{ui:Atur ulang tata letak}} mengembalikan bilah alat ke atas.

Bilah gaya menu berada di dalam bilah alat dan ikut bergerak bersamanya, tetapi gaya {{ui:Ribbon}} dibuat untuk berjalan di atas atau di bawah: di sisi, ia mendapat kolom sempit yang dapat digulir. Di ponsel, bilah alat tetap di tempat yang diatur tata letak ponsel.

## Baris bilah alat

Berapa baris yang dipakai alat di atas gambar, di bilah alat CadCraft dan di gaya {{ui:Drafting klasik}} dan {{ui:Ribbon}}:

- **Bungkus agar pas** (awal): alat dibungkus sesuai lebar jendela.
- **2 baris**: paling banyak dua baris. Jika alat dibungkus menjadi dua baris atau kurang pada lebar ini, mereka hanya dibungkus; jika tidak, mereka berada di dua baris yang dapat digulir ke samping.
- **1 baris**: satu baris yang dapat digulir ke samping, yang memberi gambar ruang paling banyak.

{{key:Shift+Ctrl+F1}} berpindah di antara ketiganya, dan {{cmd:TOOLBARROWS}} mengaturnya. Apa yang ditampilkan tombol (ikon dan teks, hanya ikon, atau hanya teks) adalah pengaturan {{ui:Umum}} › {{ui:Bilah alat}}; {{key:Ctrl+F1}} berpindah di antaranya dan {{cmd:TOOLBAR}} mengaturnya.

## Baris perintah

Baris perintah dapat tetap ditambatkan di bawah gambar, seperti biasa, atau mengambang di atasnya, dan dapat setipis satu baris.

- **Buat mengambang.** Seret gagang di ujung kirinya ke dalam gambar, atau pilih {{ui:Mengambang di atas gambar}} di menu {{ui:Opsi baris perintah}} (tiga titik di ujung kanannya). Seret gagangnya lagi untuk memindahkan; tempatnya dipertahankan saat jendela berubah ukuran. Seret tepi kanannya untuk membuatnya lebih lebar atau lebih sempit. Jatuhkan di bilah status, atau pilih {{ui:Ditambatkan di bawah}}, untuk menambatkannya kembali.
- **Buat lebih tipis atau lebih tinggi.** Seret tepi atasnya: setiap langkah adalah satu baris riwayat. Hingga nol baris, ia menjadi **baris perintah satu baris**: hanya prompt dan apa yang Anda ketik, dan pesan baru muncul di atasnya sejenak. Klik ganda di tepi atas berpindah antara satu baris dan tinggi yang Anda miliki sebelumnya.
- **Riwayat.** {{key:F2}}, atau tombol jam di baris perintah ({{ui:Riwayat perintah (F2)}}), membuka seluruh riwayat di atas baris (di bawahnya saat baris mengambang dekat bagian atas jendela). Pengetikan tetap menuju baris perintah; {{key:PageUp}} dan {{key:PageDown}} menggulir riwayat, dan {{key:Esc}}, {{key:F2}} atau klik di tempat lain menutupnya. Tombol milik Anda sendiri pada F2 didahulukan.
- **Dari keyboard.** Gagang adalah tombol: saat fokus padanya, tombol panah menggerakkan baris perintah yang mengambang (dengan {{key:Shift}}, dalam langkah yang lebih besar); {{key:Up}} membuat baris yang ditambatkan mengambang, dan {{key:Down}} di tepi bawah menambatkannya. Tepi atas adalah pemisah: {{key:Up}} dan {{key:Down}} menambah atau mengurangi satu baris, {{key:Home}} membuatnya satu baris, {{key:End}} yang tertinggi. Pembaca layar tetap mendengar setiap pesan, juga di baris perintah satu baris.

{{ui:CadCraft}} › {{ui:Baris perintah}} memiliki pilihan yang sama: {{ui:Ditambatkan di bagian bawah}} atau {{ui:Mengambang}}, {{ui:Baris riwayat yang ditampilkan}} (0 sampai 12) dan {{ui:Tinggi standar}}. {{cmd:COMMANDLINE}} (`CMDLINE`) mengaturnya dari baris perintah. Tempat dan tinggi disimpan untuk CadCraft di peramban ini bersama tata letak lainnya, sehingga lingkungan kerja yang tersimpan membawanya; {{ui:Umum}} › {{ui:Atur ulang tata letak}} menambatkan baris perintah pada tinggi standarnya lagi. Di ponsel, baris perintah tetap ditambatkan dengan satu baris riwayat; tombol riwayat juga berfungsi di sana.

Saat jendela pendek dan pemeriksaan tata letak menawarkan tata letak yang lebih rapat, {{ui:Ya}}-nya juga mengubah baris perintah menjadi satu baris jika gambar masih pendek setelah bilah alat.

## Area atas

{{ui:CadCraft}} › {{ui:Area atas}}: **Standar** (awal) atau **Ringkas**. Ringkas menjaga bilah di atas gambar tetap kecil di setiap gaya menu: nama grup dan kata di bawah ikon dihilangkan (tooltip dan pembaca layar tetap memilikinya), dan tombolnya lebih rapat. Ini bekerja dengan [Baris bilah alat](topic:settings#toolbar-rows): Ringkas dan **1 baris** memberi gambar ruang paling banyak. {{cmd:TOPAREA}} mengaturnya.

## Indikator sudut

Apa yang ada di sudut gambar:

- **Otomatis** (awal): ikon sumbu di tab {{ui:Model}} dan kubus tampilan di tab {{ui:3D}}.
- **Ikon sumbu**: penanda X dan Y di kiri bawah tab {{ui:Model}}, dan penanda X, Y dan Z kecil di tab {{ui:3D}}.
- **Kubus tampilan**: kubus di kanan atas kedua tab. Di tab {{ui:Model}} ia menampilkan gambar dari atas, dan mengklik sisi, tepi atau sudut lain membuka tab {{ui:3D}} yang melihat dari sana. Di tab 3D ia berputar mengikuti tampilan: klik untuk melihat dari sisi, seret untuk orbit, dan ikon rumah kembali ke tampilan iso. Lihat [Model dalam 3D](topic:3d-solids).
- **Tidak ada**: tidak ada apa pun di sudut.

Lembar tidak menampilkan keduanya.

## Panjang dan luas pilihan

- **Di bilah status** (awal): dengan objek terpilih, bilah status menampilkan total panjangnya dan total luas dari yang tertutup. Lihat [Total pilihan](topic:properties-panel#totals-of-a-selection).
- **Tersembunyi**: bilah status tidak menampilkannya. Properti tetap menampilkannya untuk beberapa objek.

## Grid, Ortho dan snap

Ini tidak ada di dialog: tombol {{ui:Grid}}, {{ui:Ortho}} dan {{ui:Snap}} di bilah status (atau {{key:F7}}, {{key:F8}}, {{key:F3}}) dan daftar object snap di sebelahnya diingat saat Anda meninggalkannya. Lihat [Snap ke titik pada objek](topic:object-snaps).
