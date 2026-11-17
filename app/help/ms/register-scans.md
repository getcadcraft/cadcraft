---
title: Daftarkan beberapa imbasan menjadi satu
summary: Letakkan imbasan yang diambil dari kedudukan berbeza dalam satu bingkai dengan pasangan titik yang dipilih atau sasaran yang ditaip, perhalusi dengan ICP, simpan pendaftaran sebagai projek, dan eksport awan titik berdaftar sebagai LAS atau E57. Arahannya ialah REGISTERSCANS.
keywords: daftar, pendaftaran, imbasan, awan titik, icp, titik terdekat berulang, sasaran, pasangan titik, transformasi tegar, jajar, gabung, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Apa yang akan anda lakukan

Beberapa imbasan bagi satu tempat yang sama bermula dalam koordinatnya sendiri. Daftarkannya: berikan setiap imbasan satu penempatan supaya semuanya berada dalam satu bingkai, kemudian simpan sebagai projek dan tulis awan titik berdaftar sebagai satu fail LAS atau E57.

## Letakkan imbasan

1. Buka dialog (taip `REGISTERSCANS` (atau `REGSCAN`)). {{ui:Tambah imbasan…}} menerima fail LAS, LAZ, E57, PLY, PCD, PTX, PTS atau XYZ, atau lepaskannya pada dialog. Imbasan yang menggunakan unit berbeza ditolak dengan nota: tukar salah satu daripadanya dahulu.
2. Pilih {{ui:Imbasan untuk dialihkan}} dan {{ui:Letak terhadap}}. Gambar menunjukkan setiap imbasan dalam bingkai seperti sekarang, satu warna setiap satu: {{ui:Pelan}}, {{ui:Depan}} atau {{ui:Sisi}}; seret untuk pan, guna roda tetikus untuk zum.
3. **Mengikut pasangan titik.** Klik {{ui:Pilih pasangan}}, kemudian satu titik pada imbasan yang hendak dialihkan, kemudian tempat yang sama pada imbasan lain (sudut, sasaran, kaki tiang). Lakukan sekurang-kurangnya tiga kali, dengan titik yang tidak segaris dan tersebar. Klik {{ui:Letak mengikut pasangan}}: imbasan diletakkan dengan pemadanan kuasa dua terkecil, dan **Baki** menunjukkan sejauh mana setiap pasangan masih tersasar. Pasangan dengan nombor besar ialah pilihan yang salah: alih keluarkannya dengan tanda silang dan letakkan semula.
4. **Mengikut sasaran.** Jika koordinat sebenar titik diketahui (sasaran yang diukur), klik {{ui:Pilih, kemudian taip sasaran}}, klik titik pada imbasannya, dan taip X, Y dan Z sasaran dalam baris itu. Pasangan dan sasaran yang ditaip boleh digabungkan dengan bebas.

## Perhalus dengan ICP

Pasangan memberi penempatan kasar. {{ui:Perhalus}} mengalihkan imbasan sehingga permukaannya terletak pada permukaan imbasan lain: pertama **titik ke titik**, kemudian **titik ke satah**. Jadual menyenaraikan setiap langkah dengan ralatnya dan bilangan titik yang dipadankan; garisan di atasnya menunjukkan ralat yang semakin berkurang. {{ui:Henti}} menamatkan larian selepas langkah yang sedang berjalan dan mengekalkan apa yang telah dicapai. {{ui:Buat asal}} membatalkan keseluruhan larian (atau penempatan terakhir); {{ui:Tetapkan semula}} mengembalikan imbasan kepada koordinat failnya.

Supaya pantas pada komputer riba, ICP bekerja pada sebahagian titik yang dikurangkan ({{ui:Titik yang digunakan}}, 5,000 hingga 60,000) dan mengabaikan padanan yang lebih jauh daripada {{ui:Jarak padanan terbesar}} (secara lalai 5% saiz imbasan, mengecil apabila ia stabil). Ia memerlukan penempatan kasar terlebih dahulu: imbasan yang hampir tidak bertindih akan melaporkan bahawa ia tidak dapat dipadankan. Permukaan yang hanya rata atau hanya lurus tidak boleh membetulkan kedudukan sepanjang dirinya sendiri; dalam keadaan itu, tambahkan pasangan.

## Simpan dan eksport

- {{ui:Simpan projek}} menulis fail `.ccscans.json` yang kecil: nama setiap imbasan, saiznya dan cap jari 64 KB pertamanya, bersama transformasinya. Ia tidak mengandungi titik. {{ui:Buka projek…}} mencari fail imbasan mengikut rujukan tersebut (fail mesti ditambah dahulu) dan memulihkan setiap transformasi.
- {{ui:Eksport LAS}} dan {{ui:Eksport E57}} menulis satu fail dengan setiap imbasan di tempat berdaftarnya. Titik tidak pernah ditulis semula pada fail asal; transformasi digunakan semasa eksport. Dengan {{ui:Baca setiap titik daripada fail}} dihidupkan, setiap fail dibaca semula untuk setiap titik (sehingga 20 juta bagi setiap imbasan); jika dimatikan, hanya titik yang dipaparkan dalam penonton yang ditulis.
- {{ui:Tunjuk awan berdaftar}} (CadCraft) menulis LAS dan melampirkannya di bawah lukisan pada koordinatnya sendiri, seperti mana-mana awan lain.

:::note
Tiada apa-apa dimuat naik. Pendaftaran berfungsi dalam unit fail itu sendiri dan mengekalkan milimeter: LAS ditulis dengan skala yang sesuai (sehingga 0.1 mm), E57 dengan nombor dua kali ketepatan. Sistem koordinat hanya dibawa ke dalam LAS apabila setiap imbasan menamakan kod EPSG yang sama. Penulis E57 ialah penulis kami sendiri; ia disahkan dengan membaca semula fail-failnya menggunakan pembaca ini dan libE57Format.
:::
