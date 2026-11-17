---
title: Offset, pangkas, perpanjang, fillet dan chamfer dinding
summary: Ubah garis tunggal menjadi dinding ganda dengan Offset, bersihkan sudut dengan Fillet, dan potong serta panjangkan garis dengan Pangkas dan Perpanjang.
keywords: offset, pangkas, perpanjang, fillet, chamfer, bevel, break, breakatpoint, lengthen, dinding, sudut, potong, lengthen, sejajar, radius, pembersihan
from: c6c5cbd0
---

## Yang akan Anda buat

Ruangan kecil dengan dinding tebal 200: sisi dalam digambar, sisi luar di-offset, sudutnya dibersihkan, dan bukaan pintu dipotong di salah satu dinding.

## Gambar sisi dalam

1. Ketik `L` lalu tekan {{key:Enter}}.
2. Ketik `0,0` lalu tekan {{key:Enter}}.
3. Ketik `@5000,0` lalu tekan {{key:Enter}}.
4. Ketik `@0,4000` lalu tekan {{key:Enter}}.
5. Ketik `@-5000,0` lalu tekan {{key:Enter}}.
6. Ketik `C` lalu tekan {{key:Enter}}.
7. Klik {{ui:Batas}}.

Anda memiliki empat garis terpisah. (Polyline tertutup akan di-offset sekaligus; garis terpisah menunjukkan bagaimana Fillet membersihkan sudut.)

## Offset sisi luar

1. Ketik `O` lalu tekan {{key:Enter}}. Prompt menampilkan `Tentukan jarak offset [Tembus] <Tembus>:`.
2. Ketik `200` lalu tekan {{key:Enter}}.
3. Pada `Pilih objek untuk di-offset`, klik garis bawah.
4. Pada `Tentukan titik di sisi untuk di-offset`, klik di mana saja di bawahnya. Garis sejajar muncul 200 di bawahnya.
5. Klik garis kanan, lalu klik ke kanannya.
6. Klik garis atas, lalu klik di atasnya.
7. Klik garis kiri, lalu klik ke kirinya.
8. Tekan {{key:Enter}} untuk mengakhiri perintah.

Anda seharusnya melihat empat garis luar, masing-masing sepanjang garis dalamnya, sehingga sudut luarnya tidak bertemu.

:::tip
Tekan {{key:Enter}} pada prompt jarak untuk memakai jarak terakhir lagi. Ketik `T` untuk Tembus: lalu setiap salinan melewati titik yang Anda klik, pada jarak berapa pun itu.
:::

{{cmd:OFFSET}} bekerja pada garis, busur, lingkaran dan polyline. Meng-offset polyline tertutup berarti meng-offset seluruh garis luar, termasuk sudutnya.

## Bersihkan sudut luar dengan Fillet

{{cmd:FILLET}} menyambungkan dua garis di sudut: ia memangkas atau memperpanjang keduanya sehingga bertemu. Dengan radius 0 sudutnya siku.

1. Ketik `F` lalu tekan {{key:Enter}}. Prompt menampilkan `Pilih garis pertama [Radius]:`.
2. Jika fillet terakhir yang Anda lakukan memakai radius, ketik `R`, tekan {{key:Enter}}, ketik `0` dan tekan {{key:Enter}}.
3. Klik garis bawah luar dekat ujung kanannya.
4. Pada `Pilih garis kedua`, klik garis kanan luar dekat ujung bawahnya.

Kedua garis sekarang bertemu di sudut tajam, dan perintah berakhir.

5. Tekan {{key:Enter}} untuk mengulang {{cmd:FILLET}}, dan kerjakan sudut berikutnya.
6. Ulangi sampai keempat sudut luar bertemu.

Klik setiap garis di bagian yang ingin Anda **pertahankan**. Dengan radius di atas 0, Fillet menambahkan busur di antara garis-garis tersebut.

:::tip
Ketik `M` pada prompt pertama untuk mengerjakan keempat sudut sekaligus, atau gambar sisi luar sebagai satu polyline tertutup dan ketik `P`: setiap sudut dikerjakan sekaligus. Tahan {{key:Shift}} saat Anda mengklik garis kedua untuk sudut tajam tanpa mengubah radius.
:::

## Serongkan sudut dengan Chamfer

{{cmd:CHAMFER}} memotong sudut dengan garis lurus.

1. Ketik `CHA` lalu tekan {{key:Enter}}.
2. Ketik `D` lalu tekan {{key:Enter}}. Ketik `300` lalu tekan {{key:Enter}} untuk jarak pertama, lalu tekan {{key:Enter}} untuk memakai 300 juga untuk yang kedua.
3. Klik garis dalam atas dekat ujung kirinya, lalu garis dalam kiri dekat ujung atasnya.

Sudut dipotong mundur 300 sepanjang setiap garis dan garis serong menghubungkannya. Ketik `A` alih-alih `D` untuk memberikan panjang pada garis pertama dan sudut.

## Potong bukaan pintu dengan Pangkas

Pertama gambar dua kusen pintu melintang di dinding bawah, lalu pangkas garis dinding di antaranya.

1. Ketik `L` lalu tekan {{key:Enter}}.
2. Ketik `1000,200` lalu tekan {{key:Enter}}.
3. Ketik `@0,-600` lalu tekan {{key:Enter}}, kemudian tekan {{key:Enter}} lagi.
4. Tekan {{key:Enter}} untuk mengulang {{cmd:LINE}}.
5. Ketik `1900,200` lalu tekan {{key:Enter}}.
6. Ketik `@0,-600` lalu tekan {{key:Enter}}, kemudian tekan {{key:Enter}} lagi.

Sekarang Anda memiliki dua garis pendek yang memotong dinding bawah berjarak 900.

7. Ketik `TR` lalu tekan {{key:Enter}}. Riwayat menampilkan `Pengaturan saat ini: Mode cepat, tepi: Tanpa perpanjangan`.
8. Klik garis dalam bawah di antara kedua kusen. Potongan itu hilang. (Arahkan penunjuk ke atasnya terlebih dulu: potongan yang akan dihapus berubah menjadi abu-abu dan putus-putus.)
9. Klik garis luar bawah di antara kedua kusen. Potongan itu juga hilang.
10. Klik bagian setiap kusen yang menonjol di atas dinding, dan bagian di bawahnya.
11. Tekan {{key:Enter}} untuk mengakhiri perintah.

Anda seharusnya melihat bukaan 900 di dinding bawah, dengan kusen menutup ujung-ujung dinding.

Dalam Mode cepat (bawaan), Pangkas tidak meminta Anda memilih tepi pemotong terlebih dulu: setiap objek yang terlihat adalah tepi pemotong. Pilih potongan yang ingin dihapus, atau seret jalur melewati beberapa potongan untuk memangkasnya sekaligus. Ketik `U` lalu tekan {{key:Enter}} untuk mengembalikan pilihan atau seretan terakhir tanpa keluar dari perintah. Pagar, silang, tepi yang dipilih, dan {{key:Shift}} untuk memperpanjang dijelaskan di [Pangkas dan perpanjang](topic:trim-and-extend).

## Perpanjang garis hingga bertemu yang lain

{{cmd:EXTEND}} memanjangkan ujung garis, busur, atau polyline hingga bertemu objek berikutnya di arah itu.

1. Ketik `L` lalu tekan {{key:Enter}}.
2. Ketik `1000,2000` lalu tekan {{key:Enter}}.
3. Ketik `@2000,0` lalu tekan {{key:Enter}}, kemudian tekan {{key:Enter}} lagi. Garis berhenti 2000 sebelum dinding kanan.
4. Ketik `EX` lalu tekan {{key:Enter}}.
5. Klik garis baru dekat ujung kanannya.
6. Tekan {{key:Enter}} untuk mengakhiri perintah.

Garis sekarang berjalan hingga sisi dalam dinding kanan. Setiap objek yang terlihat adalah batas; pilih dekat ujung yang harus diperpanjang. Di dalam {{cmd:TRIM}}, {{key:Shift}}+klik melakukan hal yang sama.

## Putus dan panjangkan

{{cmd:BREAK}} (`BR`, atau {{ui:Ubah}} › {{ui:Lainnya}} › {{ui:Putuskan}}) memotong celah tanpa tepi pemotong: klik objek di tempat celah dimulai (klik itu adalah titik pertama), lalu klik di tempat celah berakhir. Pada lingkaran, bagian berlawanan arah jarum jam dari titik pertama ke titik kedua akan dihapus. `F` pada pertanyaan kedua memungkinkan Anda memberikan titik pertama lagi, dan {{cmd:BREAKATPOINT}} membagi objek menjadi dua pada satu titik tanpa celah.

{{cmd:LENGTHEN}} (`LEN`) mengubah panjang pada satu ujung:

1. Ketik `LEN` lalu tekan {{key:Enter}}. Klik garis untuk melihat panjangnya saat ini; prompt akan bertanya lagi.
2. Pilih caranya: `DE` (Delta: jumlah yang ditambahkan, negatif untuk dikurangi; `A` untuk sudut busur), `P` (Persen: 50 membuatnya setengah), `T` (Total: panjang yang seharusnya) atau `DY` (Dinamis: seret ujungnya).
3. Klik setiap objek di dekat ujung yang harus bergerak. `U` mengembalikan yang terakhir; {{key:Enter}} mengakhiri.

Garis, busur, dan polyline terbuka (segmen ujungnya) dapat dipanjangkan.

## Kesalahan umum

- **Seluruh garis hilang.** Tidak ada yang memotongnya, jadi Mode cepat menghapusnya. Ketik `U` untuk mengembalikannya; periksa bahwa garis pemotong benar-benar memotongnya (zoom masuk) dan tidak berada di layer yang mati.
- **"No boundary in that direction."** Tidak ada batas di arah itu. Perpanjang tidak menemukan apa pun untuk ditabrak. Pilih lebih dekat ke ujung yang harus bertambah.
- **"Radius is too large."** Radius terlalu besar. Busur akan melewati ujung salah satu garis. Gunakan radius yang lebih kecil.
- **"Only the first or last segment of an open polyline can be cut back."** Hanya segmen pertama atau terakhir dari polyline terbuka yang dapat dipangkas. Pilih dua segmen polyline yang berdampingan, atau ketik `P` untuk membulatkan setiap sudutnya.
- **Offset ke sisi yang salah.** Sisinya adalah tempat Anda mengklik setelah memilih objek. Urungkan dengan {{key:Mod+Z}} lalu klik di sisi lainnya.
- **"Cannot offset that far."** Tidak dapat meng-offset sejauh itu. Offset akan membalik busur, lingkaran, atau polyline ke dalam. Gunakan jarak yang lebih kecil.
