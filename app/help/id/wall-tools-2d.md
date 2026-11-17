---
title: Bentuk, potongan, offset, dan kunci untuk dinding 2D
summary: Gambar dinding sebagai persegi panjang, poligon, dan busur, pecah dan sambungkan kembali, pindahkan sejauh dimensi tertentu, dan kunci satu dinding ke dinding lain atau ke garis grid. Perkakas yang sama dengan dinding di BimCraft.
keywords: dinding, bilah alat dinding, tombol dinding, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, gaya sambungan, miter, tumpul, potong datar, gembok, grip, seret ujung, putar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sambungan, jangan sambungkan, kunci, garis grid, pecah, celah, offset, garis lokasi
from: f41e7433
---

Perkakas ini bekerja pada dinding 2D dari `WALL` (lihat "Gambar dinding pintar, pintu, dan jendela dalam 2D"). Perkakas ini menggunakan aturan yang sama dengan perkakas dinding di BimCraft, sehingga dinding berperilaku sama di keduanya.

## Di mana perkakasnya

- Di bilah alat, grup {{ui:Dinding}} memiliki {{ui:Dinding}}, {{ui:Persegi panjang}}, {{ui:Pecah}} dan {{ui:Offset}}. Menu {{ui:Lainnya}} di dalamnya memuat setiap perkakas dinding lainnya, masing-masing dengan ikonnya.
- Pada gaya menu pita, tab {{ui:Dinding}} memiliki panel {{ui:Gambar dinding}}, {{ui:Potong}}, {{ui:Atur dan ubah}}, {{ui:Tahan}} dan {{ui:Gabungkan}}.
- Di lembar, baris perkakas dan kotak perkakas menampilkan grup {{ui:Dinding}} yang sama.
- Anda juga dapat mengetik perintah apa pun yang disebut di bawah.

## Sambungan disimpan

Bila ujung dinding jatuh pada dinding lain, CadCraft menyimpan sambungan itu bersama kedua dinding. Ia tidak lagi menghitung ulang sambungan dari tempat ujung-ujungnya kebetulan berada. Maka:

- Dinding yang tersambung ke dinding yang Anda pindahkan akan mengikutinya dan tetap tersambung. Ujungnya meluncur sepanjang garisnya sendiri, sehingga tidak ada yang berputar.
- Seret salah satu ujung dinding dengan gripnya, dan dinding yang tersambung di sana juga mempertahankan arahnya. Ujungnya meluncur sepanjang garisnya sendiri untuk bertemu dengan dinding yang diseret, sehingga ujung yang diseret jatuh pada garis itu, tidak selalu di bawah kursor. Pratinjau menunjukkan posisinya. Dinding yang menumpul ke dinding yang diseret mengikuti sepanjang garisnya sendiri. Menyeret ujung lurus sepanjang dinding mengubah panjangnya, dan dinding yang tersambung di sana ikut bergerak.
- `ROTATE` pada dinding yang tersambung bekerja dengan cara yang sama: ujung tetangganya meluncur sepanjang garisnya sendiri ke dinding yang diputar.
- Untuk memindahkan sudut, pilih kedua dinding yang bertemu di sana, lalu seret grip di sudut itu. Kedua dinding tetap di sudut dan keduanya berputar. Dinding yang lebih jauh tetap seperti semula.
- Tahan {{key:Alt}} saat Anda mengklik posisi baru grip untuk memutus sambungan dengan sengaja: dinding pergi ke tempat yang Anda tentukan dan tidak ada yang mengikutinya.
- Jika seretan akan memutar dinding yang tersambung melewati ujung jauhnya sendiri, seretan itu ditolak dan tidak ada yang berubah.
- Dinding yang Anda gambar dengan {{ui:Jangan sambungkan}} (`D` di `WALL`), atau yang dimatikan di Properti ({{ui:Jangan sambungkan di awal}}, {{ui:Jangan sambungkan di akhir}}), tetap bebas di ujung itu, meskipun menyentuh dinding lain, sampai Anda mengizinkannya lagi.
- `WALLDISJOIN` ({{ui:Jangan sambungkan}} di grup {{ui:Dinding}}) melakukan hal yang sama dengan satu klik: klik dinding dekat salah satu ujung untuk menonaktifkan sambungan di ujung itu, dan klik lagi untuk mengizinkannya.
- Gambar yang lebih lama belum memiliki sambungan tersimpan. Perubahan pertama yang Anda buat menemukannya sekali, dari posisi dinding sebelum perubahan, lalu menyimpannya. `WALLJOINS` melakukannya sekaligus.
- Berkas DWG dan DXF membawa sambungan di dalam setiap dinding. CadCraft membacanya kembali seperti yang tersimpan. Program yang tidak menyimpan data tambahan (extended data) menampilkan dinding sebagai blok biasa dan membuang sambungannya. Sambungan yang dinding-dindingnya dipindahkan di program lain akan dibuang saat Anda mengubah salah satu dinding berikutnya.

## Gaya sambungan sudut

Sudut tempat dua dinding bertemu ujung ke ujung digambar sebagai miter, kecuali Anda memilih gaya lain.

- `WALLJOINSTYLE` ({{ui:Gaya sambungan}} di grup {{ui:Dinding}}): klik sudutnya. Setiap klik berpindah ke gaya berikutnya: {{ui:Miter}}, {{ui:Tumpul}}, {{ui:Potong datar}}, lalu {{ui:Miter}} lagi. Ketik `T` untuk mengganti dinding mana dari kedua dinding yang menerus di sudut yang terakhir Anda klik. Tekan {{key:Enter}} untuk selesai. Satu kali jalankan perintah adalah satu langkah urungkan.
- {{ui:Tumpul}}: satu dinding menerus sampai ke sisi jauh dinding lainnya, dan dinding lain berhenti di sisinya. {{ui:Potong datar}}: sama, tetapi dinding yang menerus berakhir tegak lurus terhadap dirinya sendiri. Pada sudut siku-siku keduanya tampak sama.
- Di Properti dinding: {{ui:Gaya sambungan di awal}}, {{ui:Gaya sambungan di akhir}}, serta {{ui:Menerus di awal}}, {{ui:Menerus di akhir}}.
- Gaya disimpan bersama kedua dinding dan ikut dalam berkas DWG dan DXF. Salinan dinding dimulai tanpa gaya.
- Sambungan T tidak memiliki gaya untuk dipilih: dinding yang sisinya disentuh akan menerus. Sudut tempat tiga dinding atau lebih bertemu tetap berupa miter. Begitu juga sudut yang sangat tajam (di bawah sekitar 30 derajat) dan dua dinding dalam satu garis.

## Gambar bentuk dinding

Setiap perintah membuat dinding dalam satu langkah urungkan, dengan sudut yang tersambung. Di `WALL`, `O` mengatur offset penempatan (seberapa jauh di sebelah kiri klik Anda dinding itu berada), dan `D` mematikan penyambungan untuk dinding berikutnya yang Anda gambar.

- `WALLRECT` (`WR`): dua sudut berseberangan, seperti `RECTANG`.
- `WALLROT`: sisi pertama, lalu seberapa jauh sisi lainnya, untuk persegi panjang pada sudut apa pun.
- `WALLPOLY` (`WP`): jumlah sisi (3 sampai 64), pusat, `I` untuk berada di dalam atau `C` untuk berada di luar, lalu jari-jari, seperti `POLYGON`.
- `WALLARC` (`WARC`): pusat, awal, akhir. `D` membalik arah busur.
- `WALLTAN`: klik dekat ujung dinding, lalu ujung busur, yang keluar sepanjang dinding itu.
- `WALLPICK`: klik garis atau polyline, dan tentukan apakah garis yang tersambung dengannya juga diambil.
- `WALLTRACE`: klik di dalam area tertutup berisi garis dan dinding untuk membuat dinding mengelilingi area terkecil.

Dinding denah berbentuk lurus, jadi busur digambar sebagai dinding lurus pendek masing-masing 15 derajat. Dinding-dinding itu tersambung seperti sudut biasa.

## Potong dinding

- `WALLSPLIT` (`WS`): klik dinding, lalu titiknya. `C` memotong di tempat dinding lain melintang, `G` menyisakan celah di antara bagian-bagiannya, `F` membuat ujung potongan bebas alih-alih tersambung. Bagian pertama mempertahankan posisi dinding dalam gambar, dan pintu serta jendela ikut bagiannya. Pemotongan yang melewati pintu atau jendela ditolak.
- `WALLSPLITGAP` ({{ui:Pecah dengan celah}}): pemecahan yang sama, tetapi meminta celahnya terlebih dahulu.
- `WALLDELSEG`: klik dinding, lalu kedua ujung potongan yang akan dihapus.
- `WALLREJOIN`: klik dua bagian dari satu dinding untuk menyatukannya kembali.

## Pindahkan dinding sejauh tertentu

- `WALLDIM`: klik dimensi linear atau sejajar yang membentang dari satu dinding ke dinding lain, lalu ketik nilai barunya. Dinding di ujung jauh bergerak tegak lurus terhadap dirinya sendiri, dinding di ujung pertama tetap, dan dinding yang tersambung padanya mengikuti.
- `WALLOFFSET` (`WO`): klik dinding, lalu sisi tujuan pemindahannya (`D` mengetik jarak, `C` membuat salinan sebagai gantinya).
- `WALLSTRETCH`: jendela di sekitar ujung dinding, lalu titik dasar dan titik kedua.
- Di Properti, {{ui:Panjang}} yang diketik mempertahankan titik awal dan membawa dinding yang tersambung di ujung jauh, dan {{ui:Ketebalan}} baru tumbuh menjauh dari {{ui:Garis lokasi}} yang Anda pilih (sisi kiri, sisi kanan, atau tengah).

## Kunci dinding

Kunci tetap bersama dinding di dalam berkas. Bila Anda memindahkan satu dinding yang terkunci, dinding lainnya ikut. Bila satu perubahan menggerakkan kedua dinding secara berbeda, perubahan itu ditolak dan tidak ada yang berubah.

- `WALLHOLD`: kunci dinding ke dinding lain. `A` memindahkannya ke garis dinding lain terlebih dahulu, `K` mempertahankan jarak yang sudah ada.
- `WALLHOLDDIM`: kunci jarak antara dua dinding sejajar.
- `WALLGRID`: kunci dinding ke garis grid (garis di layer grid dengan labelnya dalam teks di salah satu ujungnya), baik sepanjang garis itu maupun dengan satu ujung di atasnya. Dinding yang terkunci sepanjang garis mempertahankan jarak yang dimilikinya darinya. Pindahkan garis grid dengan `GRIDMOVE` dan dinding ikut utuh, bersama dinding yang tersambung. Dinding yang berada sepanjang garis grid bergerak utuh bersamanya walaupun tanpa kunci, dan dinding yang hanya berakhir di garis itu akan direntangkan oleh ujungnya.
- `WALLHOLDS` mendaftar kunci. `WALLUNHOLD` melepas kunci dari dinding.
- Setiap kunci tampak sebagai gembok kecil di denah: di samping tengah dinding yang terkunci, atau di samping ujung yang terkunci ke garis grid. Klik gembok untuk melepas kunci itu.

## Yang belum ada

Kunci memakai garis tengah dinding. Dinding di sini tidak memiliki layer, jadi tidak ada prioritas layer pada pertemuan, dan dinding tidak melengkung (lihat busur di atas). Belum ada yang mencoba perkakas ini pada gambar besar, dan perkakas ini belum diperiksa di program CAD lain.
