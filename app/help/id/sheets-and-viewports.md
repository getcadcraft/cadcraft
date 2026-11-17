---
title: Atur lembar dengan kepala gambar dan viewport
summary: Buat lembar (layout) dengan batas dan kepala gambar, atur skala viewport, tambahkan viewport kedua untuk detail, dan isi kepala gambar.
keywords: layout, lembar, ruang kertas, viewport, mview, vpview, kepala gambar, skala, ukuran kertas, batas, vports, skala plot, mspace, pspace, ruang model, masuk viewport, klik dua kali viewport
from: 45a45de8
---

## Yang akan Anda buat

Lembar A3 dengan kepala gambar, seluruh denah dalam satu viewport pada 1:100, dan viewport kedua yang menampilkan satu sudut pada 1:20.

## Model dan lembar

Anda menggambar bangunan pada tab {{ui:Model}}, pada ukuran penuh: dinding 6 m panjangnya 6000 satuan dalam milimeter. **Lembar** (layout) adalah selembar kertas, diukur dalam milimeter atau inci. **Viewport** adalah jendela yang dipotong pada lembar dan menampilkan model pada suatu skala.

## Sebelum Anda mulai

1. Buka atau gambar denah pada tab {{ui:Model}}.
2. Tekan {{key:Esc}} agar tidak ada yang dipilih.
3. Di {{ui:Pengaturan saat ini}}, atur {{ui:Satuan}} ke satuan yang Anda gambar, misalnya {{ui:Milimeter}}.

Satuan penting: skala viewport seperti 1:100 berarti satu milimeter di kertas menunjukkan 100 milimeter sebenarnya, sehingga CadCraft perlu tahu apa arti satu satuan gambar. Gambar yang dibiarkan {{ui:Tanpa satuan}} dianggap berada dalam satuan kertas (milimeter pada kertas ISO, inci pada kertas US).

## Buat lembar

1. Klik tombol {{ui:+}} di sebelah kanan tab di bawah gambar, atau ketik `LAYOUT` lalu tekan {{key:Enter}}, atau klik {{ui:Lembar baru}}.

Tab baru, `Layout1`, terbuka. Anda akan melihat lembar di atas meja yang lebih gelap: batas, kepala gambar di sudut kanan bawah, dan satu viewport di atasnya yang menampilkan seluruh model pada skala standar terbesar yang muat. Riwayat menyebutkan kertasnya: ISO A3 untuk gambar metrik dan tanpa satuan, Tabloid (ANSI B) untuk gambar dalam inci atau kaki.

2. Klik {{ui:Batas}} untuk memuat lembar di layar.

## Pilih kertas

1. Tekan {{key:Esc}} agar tidak ada yang dipilih. Judul panel kanan berbunyi "Lembar: Layout1".
2. Di {{ui:Nama}}, ketik `A-101 Plan` lalu tekan {{key:Enter}}. Tab diganti namanya.
3. Di {{ui:Kertas}}, pilih ukuran.
4. Di {{ui:Orientasi}}, pilih {{ui:Lanskap}} atau {{ui:Potret}}.

:::warning
Mengubah kertas tidak memindahkan atau mengubah ukuran apa pun yang sudah ada di lembar. Setelah mengubahnya, periksa apakah batas, kepala gambar, dan viewport masih muat, lalu pindahkan atau ubah ukurannya dengan grip. Berpindah antara kertas milimeter dan inci mempertahankan angkanya, sehingga semuanya berubah ukuran: bilah status akan memperingatkan Anda.
:::

## Atur skala viewport

1. Klik bingkai viewport (tepinya). Judul panel berbunyi "Viewport".
2. Di {{ui:Skala}}, pilih `1:100`.

Model di dalam viewport digambar ulang pada 1:100, berpusat di tempat semula. Daftar menawarkan skala metrik dari 10:1 hingga 1:10000; gambar dalam inci atau kaki juga mendapat skala arsitektural (1/4" = 1'-0" dan sejenisnya) dan skala teknik (1" = 20' dan sejenisnya). {{ui:Paskan seluruh model}} menetapkan skala tepat yang tidak standar dan muat untuk semuanya.

3. Jika denah tidak lagi berada di tengah, ubah {{ui:X}} dan {{ui:Y}} di bawah {{ui:Pusat tampilan (model)}} di panel kanan: itu adalah titik model yang ditampilkan di tengah viewport.

## Tampilkan sebagian model dalam viewport

1. Dengan viewport terpilih, klik {{ui:Pilih jendela pada model…}} di panel kanan (atau ketik `VPVIEW` lalu tekan {{key:Enter}}).
2. CadCraft beralih ke tab {{ui:Model}}. Klik satu sudut area yang ingin ditampilkan.
3. Klik sudut yang berseberangan.

Anda kembali ke lembar, dan viewport menampilkan area itu pada skala standar terbesar yang muat; riwayat menyebutkan skalanya. {{ui:Tampilkan seluruh model}} mengembalikan seluruh denah pada skala standar.

## Tambahkan viewport kedua untuk detail

1. Buat ruang di lembar: pilih viewport pertama dan seret grip sudut untuk membuatnya lebih kecil.
2. Ketik `MV` lalu tekan {{key:Enter}}, atau klik {{ui:Viewport}} di grup Lembar.
3. Klik satu sudut viewport baru di lembar.
4. Klik sudut yang berseberangan.

Viewport baru menampilkan seluruh model. Riwayat menyebutkan skalanya.

5. Klik bingkai viewport baru.
6. Klik {{ui:Pilih jendela pada model…}} dan pilih area kecil di sekitar satu sudut denah.
7. Di {{ui:Skala}}, pilih `1:20`.

Bingkai viewport berada di layer `Viewports`, yang diatur untuk tidak diplot, sehingga bingkai tampil di layar tetapi tidak di PDF.

## Isi kepala gambar

Kepala gambar terdiri dari garis dan teks biasa pada layer `Title block`. Awalnya berisi nama gambar, skala viewport pertama, tanggal hari ini, dan nomor lembar.

1. Klik dua kali teks judul yang besar. Kotak penyuntingan terbuka di atasnya.
2. Ketik judul lembar.
3. Klik {{ui:OK}}, atau tekan {{key:Mod+Enter}}.

Lakukan hal yang sama untuk kolom lainnya. Gunakan {{cmd:TEXT}} untuk menulis di sel "DIGAMBAR OLEH" yang kosong. Teks SKALA tidak memperbarui dirinya sendiri saat Anda mengubah skala viewport: sunting secara manual.

## Gambar di lembar

Apa pun yang Anda gambar pada tab lembar berada di kertas, dalam satuan kertas: teks 3.5 tinggi berarti 3.5 mm tingginya pada lembar ISO. Catatan, panah utara, dan batas lembar termasuk di sini.

Untuk mengubah denah itu sendiri, buka tab {{ui:Model}}, atau bekerja melalui viewport (bagian berikutnya); setiap viewport menampilkan perubahan itu.

## Bekerja pada model melalui viewport

1. Klik dua kali di dalam viewport, jauh dari bingkainya. Atau ketik `MS` lalu tekan {{key:Enter}}: dengan satu viewport di lembar, Anda langsung masuk; dengan beberapa, klik di dalam yang Anda inginkan.

Bingkai digambar lebih tebal, riwayat menyebutkan Anda berada di dalam, dan tab lembar tetap terpilih. Semua yang Anda gambar atau ubah sekarang berada di model, dalam satuan model, seperti pada tab {{ui:Model}}: garis yang digambar di dalam viewport 1:100 berukuran milimeter sebenarnya. Layer yang dibekukan di viewport ini tidak dapat dipilih di sini.

2. Putar roda atau seret dengan tombol tengah untuk memperbesar dan menggeser apa yang ditampilkan viewport. Lembar tetap di tempatnya.
3. Klik dua kali di mana saja di luar bingkai, atau ketik `PS` lalu tekan {{key:Enter}}.

Anda kembali ke lembar. Viewport menyimpan tampilan yang Anda tinggalkan; {{key:Mod+Z}} mengembalikan tampilan lama dalam satu langkah. Mengklik tab mana pun di bawah gambar juga keluar dari viewport.

:::note
Viewport yang tampilannya dikunci ({{ui:Tampilan terkunci}} di {{ui:Properti}}) mempertahankan tampilannya: di dalamnya, geser dan perbesar menggerakkan seluruh lembar. Viewport yang dimatikan tidak dapat dimasuki.
:::

## Beri label tampilan dengan namanya

Judul tampilan di bawah viewport dapat menampilkan nama tampilan viewport dan mengikutinya:

1. Beri nama tampilan: pilih bingkai viewport dan isi {{ui:Nama tampilan}} di Properti — atau simpan tampilan di tab {{ui:Model}} dengan {{cmd:NAMEDVIEW}} dan, dengan viewport terpilih, ketik `VPVIEW`, `V`, dan nama tampilan: viewport menampilkan tampilan itu dan mengambil namanya.
2. Ketik `VIEWLABEL` (`VL`) lalu tekan {{key:Enter}}, kemudian klik di tempat label akan diletakkan ({{key:Enter}} menempatkannya di bawah sudut kiri bawah viewport).

Saat nama tampilan berubah, label ikut berubah, dalam langkah urung yang sama.

## Bekukan layer di satu viewport

Untuk menyembunyikan layer di satu viewport tetapi tidak di yang lain (misalnya perabot dalam detail):

1. Pilih bingkai viewport, atau bekerja di dalamnya (klik dua kali).

Panel {{ui:Layers}} mendapat satu tombol lagi di setiap baris, dan sebuah baris di atas daftar menyebutkannya.

2. Klik tombol itu pada baris layer.

Layer menghilang dari viewport itu saja. Klik lagi untuk mencairkannya; {{key:Mod+Z}} membatalkan keduanya. Untuk beberapa layer atau viewport sekaligus, ketik `VPLAYER`, lalu pilih Bekukan (F) atau Cairkan (T), nama layer (`A-*` mengambil setiap layer yang diawali A-), lalu Aktif (C), Semua (A) atau Pilih (S). `VPLAYER` `V` (Vpvisdflt) memilih layer yang akan dibekukan sejak awal pada viewport baru.

## Lembar lainnya

Setiap {{ui:+}} menambah lembar lain (`Layout2`, `Layout3` …) dengan nomor lembar berikutnya. Untuk menghapus lembar yang terbuka, tekan {{key:Esc}} lalu klik {{ui:Hapus lembar ini}} di panel kanan. Lembar dihapus tanpa bertanya; {{key:Mod+Z}} mengembalikannya.

Plot lembar dengan {{ui:Plot lembar ini}} atau {{key:Mod+P}}; lihat [Plot ke PDF](topic:plot-pdf).

## Kesalahan umum

- **Viewport tidak menampilkan apa pun.** Model kosong, atau tampilannya mengarah ke tempat lain. Pilih bingkai dan klik {{ui:Tampilkan seluruh model}}.
- **Daftar skala hanya menampilkan rasio dan tidak ada skala kaki-dan-inci.** Atur {{ui:Satuan}} ke {{ui:Inci}} atau {{ui:Kaki}} pada tab {{ui:Model}}.
- **1:100 terlihat sepuluh kali terlalu besar atau kecil.** Satuan gambar salah. Atur {{ui:Satuan}} ke apa yang sebenarnya merupakan satu satuan.
- **Mengklik denah di dalam viewport tidak memilih apa pun.** Di lembar, Anda memilih objek milik lembar itu sendiri. Klik dua kali di dalam viewport terlebih dahulu untuk mengerjakan denah melaluinya.
- **Klik di luar viewport tidak melakukan apa pun.** Anda berada di dalam viewport: klik dua kali di luarnya, atau ketik `PS`, untuk bekerja pada lembar lagi.
- **"Viewport hanya ada pada layout. Buka tab layout (atau buat dengan LAYOUT) terlebih dahulu."** {{cmd:MVIEW}} hanya berfungsi pada tab lembar.
