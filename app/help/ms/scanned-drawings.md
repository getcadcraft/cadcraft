---
title: Lukisan imbasan dan surihan
summary: Bawa masuk helaian imbasan, skalakan dan luruskan sudutnya, bersihkan, padam sebahagian daripadanya, lekapkan pada garisnya dan surih menjadi garisan dan lengkok.
keywords: imbas, lukisan imbasan, raster, tiff, jpeg, png, skala, jajar, luruskan sudut, buang bintik, ambang, hitam putih, potong, padam, surih, vektor, snap, lengkok, lorekan, lukisan kertas, lukisan lama, scanattach, scantrace
from: 36227e5b
---

## Daripada helaian kertas kepada objek lukisan

Lukisan imbasan ialah gambar. CadCraft mengekalkan gambar yang anda berikan dan tidak pernah mengubahnya: setiap langkah pembersihan menghasilkan gambar baharu, dengan satu langkah buat asal setiap satu, dan {{cmd:SCANINFO}} menyenaraikan fail asal serta langkah yang diambil sejak itu. Tiada apa-apa dihantar ke mana-mana dan tiada apa-apa ditebak oleh model terlatih: pembersihan dan surihan ialah pemprosesan imej biasa, dan ia dijalankan pada komputer anda.

1. **Masukkannya.** {{cmd:SCANATTACH}} membaca PNG, JPEG, TIFF (satu halaman, atau semua halaman fail berbilang halaman) atau halaman PDF yang berupa gambar. Ia meminta halaman, sudut kiri bawah dan lebarnya. Untuk halaman PDF, ia juga meminta bilangan piksel setiap inci untuk melukis halaman itu.
2. **Skalakannya.** {{cmd:SCANSCALE}}: pilih dua titik pada imbasan, kemudian taip jarak sebenar antara keduanya. Helaian diskalakan mengikut titik pertama.
3. **Jajarkannya.** {{cmd:SCANALIGN}}: pilih dua titik pada imbasan dan dua tempat yang sepatutnya didudukinya; helaian bergerak dan berputar untuk dipadankan, dan turut diskalakan melainkan anda menjawab Tidak.
4. **Luruskan sudutnya.** {{cmd:SCANDESKEW}} mengukur sudut yang dibentuk oleh garisan panjang helaian dan memaparkannya, bersama tahap keyakinannya. Terima, atau taip sudut anda sendiri, dan helaian akan dipusingkan. Helaian dengan sedikit garisan panjang akan menerima amaran: semak sudut sebelum anda menerimanya.
5. **Bersihkannya.** {{cmd:SCANCLEAN}} menjadikan helaian hitam dan putih (Auto meratakan kertas dahulu; Adaptive mengikuti perubahan kertas dengan lebih rapat; Level ialah satu nombor untuk seluruh helaian) dan membuang bintik sehingga saiz yang anda tetapkan.
6. **Potong dan padam.** {{cmd:SCANCROP}} mengekalkan satu tetingkap. {{cmd:SCANERASE}} memadam segi empat tepat, poligon atau lasso (tekan dan seret): cop, nota, kesan cawan kopi.

Gambar yang telah dibersihkan ialah apa yang dikandungi DWG yang disimpan (IMAGE dan IMAGEDEF-nya, dengan fail gambar di sebelah lukisan, seperti mana-mana gambar).

## Snap ke garisan imbasan

Dengan {{cmd:RASTERSNAP}} dihidupkan (lalai), snap objek turut mencari garisan imbasan hitam putih: hujung garisan, titik tengahnya, sudut dan persilangan, dipaparkan dengan tanda snap biasa. Bahagian helaian di bawah penunjuk disurih semasa anda bergerak; zum cukup dekat supaya satu piksel ialah beberapa piksel skrin. Garisan yang lebih panjang daripada bahagian yang sedang disurih akan diikuti sehingga hujungnya.

## Surihan

{{cmd:SCANTRACE}} menukar garisan helaian kepada garisan dan lengkok pada lapisan baharu (SCAN-TRACE), sebagai satu langkah buat asal, dengan imbasan masih berada di bawahnya. Anda menetapkan:

- **Toleransi:** sejauh mana garisan atau lengkok yang disurih boleh berada daripada garisan pada imbasan, dalam unit lukisan (laporan juga memberikan piksel). Toleransi yang ketat mengikuti setiap lenggokan; yang longgar menghasilkan lebih sedikit bahagian yang lebih lurus.
- **Tetingkap:** satu sudut helaian, atau seluruh helaian.
- **Lengkok:** mati menghasilkan garisan sahaja.
- **Bakian:** apa yang tidak disurih dilukis sebagai kotak pada lapisan yang boleh anda matikan, atau tidak dilukis.

Surihan mencari pusat setiap sapuan, mengikutinya, memadankan garisan lurus dan lengkok bulat kepadanya, menyambung larian yang terpotong di tempat garisan lain bersilang, menjadikan garisan yang hampir mendatar dan hampir menegak tepat mendatar dan menegak, serta menutup sudut. **Teks dan lorekan kekal sebagai raster:** bahagian sebesar tulisan diketepikan, dan kumpulan garisan pendek selari dianggap lorekan lalu diketepikan.

Apabila selesai, ia memaklumkan berapa banyak garisan dan lengkok yang dibuat, toleransinya, dan berapa bahagian yang ditinggalkan sebagai raster. **Itu ialah apa yang piksel berikan, pada toleransi tersebut, dan ia bukan dakwaan bahawa hasilnya betul.** Bandingkan dengan helaian: surihan mungkin terlepas garisan yang samar, menyambungkan dua garisan yang sangat dekat, atau melukis garisan di tempat yang hanya terdapat kesan kotor. Bersihkan imbasan dahulu (diluruskan, hitam putih, bintik dibuang) dan hasilnya jauh lebih baik.

## Apa yang tidak dibaca

Fail TIFF yang disimpan dalam jubin, BigTIFF, TIFF dengan mampatan JPEG atau deflate, pengekodan faks Group 3 dan warna yang disimpan dalam satah berasingan ditolak dengan mesej; simpan semula sebagai jalur dengan mampatan LZW, PackBits, Group 4 atau tanpa mampatan. Fail PNG berselang-seli juga ditolak. Fail melebihi 128 MB atau 100 juta piksel ditolak, dan tetingkap surihan boleh memuatkan paling banyak 64 juta piksel.
