---
title: Gambar hasil pindaian dan trace
summary: Masukkan lembar hasil pindaian, skalakan dan sikukan, bersihkan, hapus sebagiannya, snap ke garisnya, dan trace menjadi garis dan busur.
keywords: pindaian, gambar hasil pindaian, raster, tiff, jpeg, png, skala, sejajarkan, deskew, hapus bintik, ambang batas, hitam putih, potong, hapus, trace, vektorisasi, snap, busur, hatch, gambar kertas, gambar lama, scanattach, scantrace
from: 36227e5b
---

## Dari lembar kertas menjadi objek gambar

Gambar hasil pindaian adalah sebuah gambar. CadCraft menyimpan gambar yang Anda berikan dan tidak pernah mengubahnya: setiap langkah pembersihan membuat gambar baru, satu langkah urung untuk setiap langkah, dan {{cmd:SCANINFO}} mencantumkan file asli serta langkah-langkah yang diambil sejak itu. Tidak ada yang dikirim ke mana pun dan tidak ada yang ditebak oleh model terlatih: pembersihan dan trace adalah pemrosesan citra biasa, dan dijalankan di komputer Anda.

1. **Masukkan.** {{cmd:SCANATTACH}} membaca PNG, JPEG, TIFF (satu halaman, atau semua halaman dari file multi-halaman) atau halaman PDF yang berupa gambar. Perintah ini menanyakan halamannya, sudut kiri bawah dan lebarnya. Untuk halaman PDF, perintah ini juga menanyakan berapa piksel per inci untuk menggambar halaman itu.
2. **Skalakan.** {{cmd:SCANSCALE}}: pilih dua titik pada pindaian, lalu ketik jarak sebenarnya di antara keduanya. Lembar diskalakan terhadap titik pertama.
3. **Sejajarkan.** {{cmd:SCANALIGN}}: pilih dua titik pada pindaian dan dua tempat yang seharusnya ditempati titik-titik itu; lembar bergeser dan berputar agar pas, dan juga diskalakan kecuali Anda menjawab Tidak.
4. **Sikukan.** {{cmd:SCANDESKEW}} mengukur sudut tempat garis-garis panjang lembar berada dan menampilkannya, beserta seberapa yakin ia. Terima, atau ketik sudut Anda sendiri, dan lembar akan diputar. Lembar dengan sedikit garis panjang mendapat peringatan: periksa sudutnya sebelum Anda menerimanya.
5. **Bersihkan.** {{cmd:SCANCLEAN}} membuat lembar menjadi hitam putih (Auto meratakan kertas terlebih dahulu; Adaptive mengikuti perubahan kertas lebih dekat; Level adalah satu angka untuk seluruh lembar) dan menghapus bintik hingga ukuran yang Anda atur.
6. **Potong dan hapus.** {{cmd:SCANCROP}} mempertahankan satu jendela. {{cmd:SCANERASE}} menghapus persegi panjang, poligon atau laso (tekan dan seret): cap, catatan, bekas cangkir kopi.

Gambar yang sudah dibersihkan adalah yang disimpan dalam DWG (sebuah IMAGE dan IMAGEDEF, dengan file gambarnya di sebelah gambar, seperti gambar lainnya).

## Snap ke garis pindaian

Dengan {{cmd:RASTERSNAP}} aktif (default), object snap juga menemukan garis pada pindaian hitam putih: ujung garis, tengahnya, sudut dan perpotongan, ditampilkan dengan tanda snap biasa. Bagian lembar di bawah penunjuk ditelusuri saat Anda bergerak; perbesar cukup sehingga satu piksel berukuran beberapa piksel layar. Garis yang lebih panjang dari bagian yang sedang ditelusuri diikuti sampai ujung-ujungnya.

## Trace

{{cmd:SCANTRACE}} mengubah garis-garis lembar menjadi garis dan busur pada layer baru (SCAN-TRACE), sebagai satu langkah urung, dengan pindaian tetap berada di bawahnya. Anda mengatur:

- **Toleransi:** seberapa jauh garis atau busur hasil trace boleh berada dari garis pada pindaian, dalam satuan gambar (laporan juga memberikan piksel). Toleransi ketat mengikuti setiap goyangan; toleransi longgar menghasilkan lebih sedikit potongan yang lebih lurus.
- **Jendela:** sudut lembar, atau seluruh lembar.
- **Busur:** mati menghasilkan garis saja.
- **Sisa:** apa yang tidak di-trace digambar sebagai kotak pada layer yang dapat Anda matikan, atau tidak digambar sama sekali.

Trace menemukan pusat setiap goresan, mengikutinya, memasang garis lurus dan busur lingkaran padanya, menyambung rangkaian yang terputus ketika garis lain memotongnya, membuat garis yang hampir datar dan hampir tegak menjadi tepat datar dan tegak, dan menutup sudut. **Teks dan hatch tetap sebagai raster:** potongan seukuran huruf dikesampingkan, dan kumpulan garis pendek yang sejajar dianggap hatch dan dikesampingkan.

Saat selesai, trace melaporkan berapa banyak garis dan busur yang dibuat, toleransinya, dan berapa potongan yang ditinggalkan sebagai raster. **Itu adalah hasil dari piksel pada toleransi tersebut, dan bukan klaim bahwa hasilnya benar.** Bandingkan dengan lembarnya: trace dapat melewatkan garis samar, menyambung dua garis yang sangat berdekatan, atau menggambar garis di tempat yang hanya noda. Bersihkan pindaian terlebih dahulu (disikukan, hitam putih, bintik sudah hilang) dan hasilnya jauh lebih baik.

## Yang tidak dibaca

File TIFF yang disimpan dalam ubin, BigTIFF, TIFF dengan kompresi JPEG atau deflate, pengodean faks Group 3, dan warna yang disimpan dalam bidang terpisah ditolak dengan pesan; simpan ulang sebagai strip dengan kompresi LZW, PackBits, Group 4 atau tanpa kompresi. File PNG interlaced juga ditolak. File di atas 128 MB atau 100 million piksel ditolak, dan sebuah jendela trace paling banyak dapat memuat 64 million piksel.
