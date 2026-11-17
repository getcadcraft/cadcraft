---
title: Bekerja pada satu gambar bersama, dengan Live TeamWork
summary: Apa yang berubah di CadCraft saat Anda berada dalam sesi Live TeamWork dari CadCraft Studio: kursor dan pilihan orang lain, objek yang sedang disunting seseorang, kunci host, urungkan milik Anda sendiri, dan bergabung dari peramban di jaringan yang sama.
keywords: live, live teamwork, live studio, bersama, kolaborasi, sunting bersama, sesi, bagikan live, gabung, kursor, tahan, menyunting, kunci, livelock, liveunlock, livehold, tahan layer, tahan area, gembok, urungkan, host, asisten, berkas yang sama, banyak orang, lambat, batas, siapa yang mengubah, suntingan terbaru, log suntingan
from: 0497d2a3
---

## Yang akan Anda pelajari

Apa yang Anda lihat dan apa yang terjadi pada suntingan Anda saat beberapa orang bekerja pada satu gambar secara bersamaan. CadCraft Studio memulai dan bergabung ke sesi Live TeamWork (Bagikan live, Gabung); halaman ini membahas gambarnya sendiri.

## Semua menggambar sekaligus

Gambar dan sunting seperti biasa. Suntingan Anda sendiri langsung tampil, bahkan sebelum yang lain memilikinya, dan suntingan mereka muncul di layar Anda sesaat setelah mereka membuatnya. Setiap perintah berfungsi: menggambar, memodifikasi, layer, blok, lembar, dimensi, dan batasan.

Dua orang dapat mengubah objek yang sama. Bila Anda mengubah hal yang berbeda, seperti warna dan titik ujung satu garis, kedua perubahan dipertahankan. Bila Anda mengubah hal yang sama, perubahan terakhirlah yang berlaku.

Yang tetap milik Anda sendiri: layer aktif, warna dan tinggi teks untuk objek baru, pengaturan dimensi Anda, tampilan Anda, layar terbagi, dan UCS. Gambarnya dibagikan; cara Anda melihatnya tidak.

## Orang lain di gambar Anda

- **Kursor:** penunjuk setiap orang tampil dengan namanya dalam warnanya sendiri, beserta perintah yang sedang mereka jalankan. Anda melihat kursor orang-orang yang bekerja dekat dengan apa yang ada di layar Anda.
- **Pilihan:** apa yang dipilih seseorang diberi garis tepi dalam warnanya.
- **Sedang disunting:** objek yang dipilih seseorang diberi label seperti "Ana sedang menyunting". Anda masih dapat mengubah warnanya atau memindahkannya, tetapi Anda tidak dapat menghapus, meledakkan, atau mengetik ulangnya sampai mereka melepasnya. Memilihnya memberi tahu Anda siapa yang memegangnya.
- **Siapa yang mengubahnya terakhir:** pilih satu objek yang diubah orang lain dalam sesi ini, dan baris perintah menyebut siapa dan apa perubahannya ("Ben mengubah itu terakhir: CIRCLE."). Panel Live milik Studio mendaftar setiap suntingan terbaru di bawah {{ui:Suntingan terbaru}}. Tidak ada hal ini yang disimpan dalam gambar: ia bertahan selama sesi berlangsung.

## Tahan layer atau area saat Anda bekerja di sana

Pada gambar besar dengan beberapa orang, tentukan bagian mana yang menjadi milik Anda untuk saat ini:

1. Ketik `LIVEHOLD` dan tekan {{key:Enter}}.
2. Pilih `L` dan ketik nama layer (Enter mempertahankan layer aktif), atau pilih `A` dan klik dua sudut area.
3. Suntingan orang lain pada layer itu, atau pada objek di area itu, ditarik kembali dan mereka diberi tahu bahwa Anda sedang bekerja di sana. Anda melihat area Anda sebagai bingkai putus-putus. Yang lain melihatnya dalam warna Anda dengan nama Anda, dan layer yang Anda tahan didaftar di pojok kiri atas gambar mereka.
4. `LIVEHOLD`, lalu `R`, melepas semua yang Anda tahan. Meninggalkan sesi juga melepasnya.

Siapa pun dalam sesi dapat menahan, termasuk host; kunci host tetap berlaku di atasnya. Penahanan tidak pernah disimpan dalam berkas.

## Saat suntingan ditarik kembali

Salinan gambar milik host memeriksa setiap suntingan. Beberapa tidak dapat masuk, dan CadCraft menariknya kembali di layar Anda serta menyebut alasannya di baris perintah, misalnya:

- seseorang menghapus objek, atau layer atau blok yang dibutuhkannya, tepat sebelum Anda;
- seseorang sedang menyunting objek itu, atau menahan layernya atau area tempat objek itu berada;
- host mengunci objek itu;
- blok yang Anda tempatkan telah dibersihkan, atau layer yang Anda hapus masih memiliki objek di atasnya.

## Urungkan hanya pekerjaan Anda sendiri

{{key:Mod+Z}} dan {{ui:Urungkan}} mengurungkan perintah terakhir Anda sendiri, seluruhnya, dan membiarkan pekerjaan orang lain tetap utuh. Bila seseorang mengubah hal yang sama sejak itu, tidak ada yang dikurungkan dan baris perintah menyebut siapa yang mengubahnya. {{key:Mod+Y}} mengulang.

## Kunci (host)

Host dapat melindungi objek atau seluruh layer agar tidak ada yang mengubahnya, termasuk host sendiri, sampai kuncinya dibuka:

1. Pilih objek, lalu ketik `LIVELOCK` dan tekan {{key:Enter}}. Atau ketik `LIVELOCK` tanpa ada yang dipilih dan pilih `L` untuk mengunci layer menurut nama: objek yang ditambahkan ke layer itu nanti juga terkunci.
2. Objek terkunci digambar putus-putus dengan label "Dikunci oleh host" di layar semua orang.
3. `LIVEUNLOCK` membuka kuncinya dengan cara yang sama.

Kunci milik sesi: ia berakhir saat sesi berakhir dan tidak pernah disimpan dalam berkas.

## Bergabung dengan berkas yang sama

Bila Anda membuka berkas yang sama persis dengan yang dibuka host (dari folder bersama atau salinan yang sama), bergabunglah dari jendela CadCraft Anda sendiri di Studio: buka panel {{ui:Hidup}} dan gunakan {{ui:Gabung di sini}} dengan kode host. Hanya perubahan yang dibuat sejak host membukanya yang dikirim, sehingga gambar besar langsung siap. Bila berkas Anda berbeda, gambar host menggantikannya di layar Anda (berkas Anda tetap seperti semula). Ini hanya berfungsi selama gambar Anda tidak berubah sejak Anda membukanya.

## Asisten dalam sesi live

Asisten yang terhubung ke jendela CadCraft Anda (lihat bantuan tentang bekerja dengan asisten AI) bergabung ke sesi sebagai peserta tersendiri, ditampilkan kepada semua orang sebagai "Asisten (via <nama Anda>)". Host mengizinkannya masuk, seperti halnya orang; asisten milik host bergabung seketika. Perubahannya memiliki urungkan sendiri: {{key:Mod+Z}} Anda mengurungkan pekerjaan Anda, dan urungkan asisten hanya mengurungkan miliknya sendiri. Asisten keluar dari sesi saat Anda memutuskannya atau saat Anda keluar, dan ia hanya dapat bekerja dalam sesi selama Anda dapat menyunting.

## Bergabung dari peramban

Rekan tim tanpa Studio dapat memindai gambar di bawah kode host dengan ponsel, tablet, atau komputer di jaringan yang sama. CadCraft terbuka di peramban, meminta nama Anda di baris perintah, dan terisi dengan gambar host setelah host mengizinkan Anda masuk. Tautan undangan memungkinkan seseorang bergabung dari jaringan lain: host memerlukan kursi Team Cloud Plan untuk aplikasi, sementara orang lain bergabung gratis, dan tautan hanya berfungsi selama sesi host terbuka.

## Banyak orang pada satu gambar

Setiap suntingan dikirim ke semua orang dalam sesi, sehingga semakin banyak orang, semakin lama setiap perubahan sampai ke masing-masing dari mereka, dan laptop serta koneksi yang lebih lambat akan tertinggal lebih dulu. Ukuran sesi yang biasa adalah 20 orang; host dapat mengizinkan lebih banyak untuk satu sesi (lihat bantuan tentang bekerja bersama secara live). Bila gambar terasa lambat dengan banyak orang, lebih sedikit orang, lebih sedikit yang menyunting pada saat yang sama, atau koneksi yang lebih baik akan membantu.

## Saat sesi berakhir

Hanya host yang menyimpan gambar. Saat host mengakhiri sesi, yang lain menyimpan salinan yang belum disimpan: simpan jika Anda ingin menyimpannya.

:::note
Sesuatu yang ditarik kembali digambar di atas objek sekitarnya di layar Anda sendiri sampai Anda membuka ulang gambar. Hatch dan objek berisi yang saling tumpang tindih mungkin tampak berbeda dari salinan host; gambarnya sendiri tetap sama.
:::
