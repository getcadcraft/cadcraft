---
title: Bentuk dinding, potongan, offset, dan kunci untuk dinding 2D
summary: Gambar dinding sebagai persegi panjang, poligon, dan busur, pisahkan dan satukan kembali, pindahkan dengan dimensi, dan kunci satu dinding ke dinding lain atau ke garis grid. Alat yang sama dengan dinding BimCraft.
keywords: dinding, bilah alat dinding, tombol dinding, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, gaya sambungan, miter, tumpul, potong datar, gembok, grip, seret ujung, putar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sambung, larang sambungan, kunci, garis grid, potong, celah, offset, garis lokasi
from: 49044181
---

Alat-alat ini bekerja pada dinding 2D dari `WALL` (lihat "Gambar dinding, pintu, dan jendela pintar 2D"). Alat ini memakai aturan yang sama dengan alat dinding di BimCraft, sehingga dinding berperilaku sama di keduanya.

## Di mana alatnya

- Di bilah alat, grup {{ui:Dinding}} memiliki {{ui:Dinding}}, {{ui:Persegi panjang}}, {{ui:Pisah}} dan {{ui:Offset}}. Menu {{ui:Lainnya}}-nya memuat setiap alat dinding lain, masing-masing dengan ikonnya.
- Di gaya menu pita, tab {{ui:Dinding}} memiliki panel {{ui:Gambar dinding}}, {{ui:Potong}}, {{ui:Atur dan ubah}}, {{ui:Tahan}} dan {{ui:Sambung}}.
- Di tata letak, baris alat dan kotak alat menampilkan grup {{ui:Dinding}} yang sama.
- Anda juga dapat mengetik perintah apa pun yang disebutkan di bawah.

## Sambungan disimpan

Saat ujung dinding jatuh di atas dinding lain, CadCraft menyimpan sambungan itu bersama kedua dinding. Ia tidak lagi menghitung ulang sambungan dari tempat ujungnya kebetulan berada. Jadi:

- Dinding yang tersambung ke dinding yang Anda pindahkan akan mengikutinya dan tetap tersambung. Ujungnya meluncur di sepanjang garisnya sendiri, sehingga tidak ada yang berputar.
- Seret satu ujung dinding dengan gripnya dan dinding yang tersambung di sana tetap mempertahankan arahnya. Ujungnya meluncur di sepanjang garisnya sendiri untuk bertemu dinding yang diseret, sehingga ujung yang diseret jatuh di garis itu, tidak selalu di bawah kursor. Pratinjau menunjukkan di mana. Dinding yang menempel ke dinding yang diseret mengikuti di sepanjang garisnya sendiri. Menyeret ujung lurus di sepanjang dinding mengubah panjangnya, dan dinding yang tersambung di sana ikut bergerak.
- `ROTATE` pada dinding yang tersambung bekerja dengan cara yang sama: ujung tetangganya meluncur di sepanjang garisnya sendiri ke dinding yang diputar.
- Untuk memindahkan sudut, pilih kedua dinding yang bertemu di sana dan seret grip di sudut itu. Kedua dinding tetap di sudut dan keduanya berputar. Dinding yang lebih jauh tetap seperti semula.
- Tahan {{key:Alt}} saat Anda mengklik tempat baru grip untuk memutus sambungan dengan sengaja: dinding pergi ke tempat yang Anda tentukan dan tidak ada yang mengikuti.
- Jika seretan akan memutar dinding yang tersambung melewati ujung jauhnya sendiri, seretan itu ditolak dan tidak ada yang berubah.
- Dinding yang Anda gambar dengan {{ui:Larang sambungan}} (`D` di `WALL`), atau dimatikan di Properti ({{ui:Larang sambungan di awal}}, {{ui:Larang sambungan di akhir}}), tetap bebas di ujung itu, meskipun menyentuh dinding lain, sampai Anda mengizinkannya lagi.
- `WALLDISJOIN` ({{ui:Larang sambungan}} di grup {{ui:Dinding}}) melakukan hal yang sama dengan satu klik: klik dinding dekat salah satu ujung untuk melarang sambungan di ujung itu, dan klik lagi untuk mengizinkannya.
- Gambar yang lebih tua belum memiliki sambungan tersimpan. Perubahan pertama yang Anda buat menemukannya sekali, dari keadaan dinding sebelum perubahan, lalu menyimpannya. `WALLJOINS` melakukannya sekaligus.
- File DWG dan DXF membawa sambungan di dalam setiap dinding. CadCraft membacanya kembali seperti tersimpan. Program yang tidak menyimpan data tambahan menampilkan dinding sebagai blok biasa dan membuang sambungan, dan sambungan yang dindingnya dipindahkan di program lain dibuang saat Anda mengubah salah satu dinding berikutnya.

## Gaya sambungan sudut

Sudut tempat dua dinding bertemu ujung ke ujung digambar sebagai miter, kecuali Anda memilih gaya lain.

- `WALLJOINSTYLE` ({{ui:Gaya sambungan}} di grup {{ui:Dinding}}): klik sudutnya. Setiap klik berpindah ke gaya berikutnya: {{ui:Miter}}, {{ui:Tumpul}}, {{ui:Potong datar}}, lalu {{ui:Miter}} lagi. Ketik `T` untuk berpindah dinding mana yang menembus sudut yang terakhir Anda klik. Tekan {{key:Enter}} untuk selesai. Satu kali menjalankan perintah adalah satu langkah urungkan.
- {{ui:Tumpul}}: satu dinding menembus sampai ke muka jauh dinding lain, dan dinding lain berhenti di sisinya. {{ui:Potong datar}}: sama, tetapi dinding yang menembus berakhir siku-siku terhadap dirinya sendiri. Pada sudut siku-siku keduanya tampak sama.
- Di Properti sebuah dinding: {{ui:Gaya sambungan di awal}}, {{ui:Gaya sambungan di akhir}}, dan {{ui:Menembus di awal}}, {{ui:Menembus di akhir}}.
- Gaya disimpan bersama kedua dinding dan ikut dalam file DWG dan DXF. Salinan dinding dimulai tanpa gaya itu.
- Sambungan T tidak memiliki gaya untuk dipilih: dinding yang sisinya dikenai akan menembus. Sudut tempat tiga dinding atau lebih bertemu tetap miter. Begitu pula sudut yang sangat tajam (di bawah sekitar 30 derajat) dan dua dinding dalam satu garis.

## Menggambar bentuk dinding

Setiap perintah membuat dinding dalam satu langkah urungkan, dengan sudutnya tersambung. Di `WALL`, `O` mengatur offset penempatan (seberapa jauh ke kiri dari klik Anda dinding itu berada), dan `D` mematikan penyambungan untuk dinding yang akan Anda gambar berikutnya.

- `WALLRECT` (`WR`): dua sudut berseberangan, seperti `RECTANG`.
- `WALLROT`: sisi pertama, lalu seberapa jauh sisi lainnya keluar, untuk persegi panjang pada sudut apa pun.
- `WALLPOLY` (`WP`): jumlah sisi (3 sampai 64), pusat, `I` untuk tertulis atau `C` untuk terlingkar, lalu jari-jari, seperti `POLYGON`: klik, atau ketik (jari-jari yang diketik mengarah ke penunjuk, atau sepanjang X saat penunjuk masih di pusat).
- `WALLARC` (`WARC`): pusat, awal, akhir. `D` membalik arah busur.
- `WALLTAN`: klik dekat ujung dinding, lalu ujung busur, yang berangkat sepanjang dinding itu.
- `WALLPICK`: klik garis atau polyline dan katakan apakah akan mengambil juga garis yang tersambung padanya.
- `WALLTRACE`: klik di dalam area tertutup dari garis dan dinding untuk membuat dinding mengelilingi area terkecil.

Dinding denah itu lurus, sehingga busur digambar sebagai dinding lurus pendek 15 derajat masing-masing. Dinding-dinding itu tersambung seperti sudut biasa.

## Memotong dinding

- `WALLSPLIT` (`WS`): klik dinding, lalu titiknya. `C` memotong di tempat dinding lain melintang, `G` membiarkan celah di antara bagian-bagiannya, `F` membuat ujung potongan bebas alih-alih tersambung. Bagian pertama tetap di tempat dinding dalam gambar, dan pintu serta jendela ikut bagiannya. Potongan yang melalui pintu atau jendela ditolak.
- `WALLSPLITGAP` ({{ui:Pisah dengan celah}}): pemisahan yang sama, tetapi menanyakan celahnya lebih dahulu.
- `WALLDELSEG`: klik dinding, lalu dua ujung potongan yang akan dihapus.
- `WALLREJOIN`: klik dua bagian dari satu dinding untuk menjadikannya satu lagi.

## Memindahkan dinding dengan jarak

- `WALLDIM` ({{ui:Edit menurut dimensi}}): klik dimensi linear atau sejajar yang membentang dari satu dinding ke dinding lain, lalu ketik nilai baru. Dinding di ujung jauh bergerak tegak lurus terhadap dirinya sendiri, dinding di ujung pertama tetap, dan dinding yang tersambung padanya mengikuti. Titik jauh dimensi ikut bergerak bersama dindingnya, sehingga dimensi menampilkan nilai yang Anda ketik.
- `WALLOFFSET` (`WO`): klik dinding, lalu sisi tempat memindahkannya (`D` mengetik jarak, `C` membuat salinan).
- `WALLSTRETCH`: jendela di sekitar ujung dinding, lalu titik dasar dan titik kedua.
- Di Properti, {{ui:Panjang}} yang diketik menjaga titik awal dan membawa dinding yang tersambung di ujung jauh; {{ui:Ketebalan}} baru tumbuh menjauhi {{ui:Garis lokasi}} yang Anda pilih (muka kiri, muka kanan, atau tengah).

## Dimensi antara garis tengah dinding

Garis tengah dinding tidak digambar, tetapi snap objek menemukannya. Dengan snap objek aktif ({{key:F3}}), arahkan penunjuk ke tengah ketebalan dinding: penanda membaca `Wall center: endpoint` atau `Wall center: midpoint`, dan garis tengah tampil sebagai garis putus-putus selama penanda berada di atasnya. Dengan {{ui:Tegak lurus}} atau {{ui:Terdekat}} diaktifkan di daftar snap objek, keduanya juga bekerja pada garis tengah.

1. Mulai `DIMLINEAR` (atau `DIMALIGNED`).
2. Klik dinding pertama saat penanda membaca `Wall center: midpoint` atau `Wall center: endpoint`.
3. Klik dinding kedua dengan cara yang sama, lalu klik tempat garis dimensi akan berada.
4. Untuk mengubah jaraknya, mulai `WALLDIM`, klik dimensi, dan ketik nilai baru. Dinding kedua bergerak.

Snap garis tengah bekerja di setiap perintah yang meminta titik.

## Mengunci dinding

Kunci tetap bersama dinding di dalam file. Jika Anda memindahkan satu dinding yang terkunci, yang lain mengikuti. Jika satu perubahan menggerakkan kedua dinding secara berbeda, perubahan itu ditolak dan tidak ada yang berubah.

- `WALLHOLD`: kunci satu dinding ke dinding lain. `A` memindahkannya ke garis dinding lain lebih dahulu, `K` mempertahankan jarak yang sudah dimilikinya.
- `WALLHOLDDIM`: kunci jarak antara dua dinding yang sejajar.
- `WALLGRID`: kunci dinding ke garis grid (garis di layer grid dengan tagnya dalam teks di salah satu ujung), baik sepanjang garisnya atau dengan satu ujung di atasnya. Dinding yang dikunci sepanjang garis mempertahankan jarak yang sudah dimilikinya darinya. Pindahkan garis grid dengan `GRIDMOVE` dan dinding mengikuti secara utuh, beserta dinding yang tersambung. Dinding yang berada sepanjang garis grid bergerak utuh bersamanya bahkan tanpa kunci, dan dinding yang hanya berakhir di garis itu tertarik oleh ujungnya.
- `WALLHOLDS` mendaftarkan kunci. `WALLUNHOLD` melepas kunci dari dinding.
- Setiap kunci menampilkan gembok kecil di denah: di sebelah tengah dinding yang terkunci, atau di sebelah ujung yang dikunci ke garis grid. Klik gembok untuk melepas kunci itu.

## Yang belum ada di sini

Kunci memakai garis tengah dinding. Dinding di sini tidak memiliki layer, sehingga tidak ada prioritas layer di persimpangan, dan dinding tidak melengkung (lihat busur di atas). Belum ada yang mencoba alat ini pada gambar besar, dan belum diperiksa di program CAD lain.
