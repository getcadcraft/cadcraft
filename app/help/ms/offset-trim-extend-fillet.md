---
title: Ofset, pangkas, panjangkan, fillet dan chamfer dinding
summary: Tukar garisan tunggal kepada dinding berkembar dengan Ofset, bersihkan sudut dengan Fillet, dan potong serta panjangkan garisan dengan Pangkas dan Panjangkan.
keywords: ofset, offset, pangkas, panjangkan, fillet, chamfer, serong, bevel, pecah, break, breakatpoint, panjangkan, lengthen, dinding, walls, sudut, corner, potong, cut, selari, parallel, jejari, radius, pembersihan, cleanup
from: c6c5cbd0
---

## Apa yang akan anda hasilkan

Sebuah bilik kecil dengan dinding tebal 200: muka dalam dilukis, muka luar diofset, sudut dibersihkan, dan bukaan pintu dipotong melalui satu dinding.

## Lukis muka dalam

1. Taip `L` dan tekan {{key:Enter}}.
2. Taip `0,0` dan tekan {{key:Enter}}.
3. Taip `@5000,0` dan tekan {{key:Enter}}.
4. Taip `@0,4000` dan tekan {{key:Enter}}.
5. Taip `@-5000,0` dan tekan {{key:Enter}}.
6. Taip `C` dan tekan {{key:Enter}}.
7. Klik {{ui:Lingkungan}}.

Anda mempunyai empat garisan berasingan. (Polygaris tertutup boleh diofset sekali gus; garisan berasingan menunjukkan cara Fillet membersihkan sudut.)

## Ofset muka luar

1. Taip `O` dan tekan {{key:Enter}}. Gesaan berbunyi `Specify offset distance [Through] <Through>:`.
2. Taip `200` dan tekan {{key:Enter}}.
3. Pada `Select object to offset`, klik garisan bawah.
4. Pada `Specify point on side to offset`, klik di mana-mana di bawahnya. Garisan selari muncul 200 di bawah.
5. Klik garisan kanan, kemudian klik di sebelah kanannya.
6. Klik garisan atas, kemudian klik di atasnya.
7. Klik garisan kiri, kemudian klik di sebelah kirinya.
8. Tekan {{key:Enter}} untuk menamatkan arahan.

Anda sepatutnya nampak empat garisan luar, setiap satu sepanjang sama dengan garisan dalamnya, jadi sudut luar tidak bertemu.

:::tip
Tekan {{key:Enter}} pada gesaan jarak untuk menggunakan semula jarak terakhir. Taip `T` (Melalui): maka setiap salinan melalui titik yang anda klik, pada jarak berapa pun itu.
:::

{{cmd:OFFSET}} berfungsi pada garisan, lengkok, bulatan dan polygaris. Mengofset polygaris tertutup mengofset keseluruhan garis luar, termasuk sudutnya.

## Bersihkan sudut luar dengan Fillet

{{cmd:FILLET}} menyambungkan dua garisan pada satu sudut: ia memangkas atau memanjangkan kedua-duanya supaya bertemu. Dengan jejari 0, sudut menjadi bersegi.

1. Taip `F` dan tekan {{key:Enter}}. Gesaan berbunyi `Select first line [Radius]:`.
2. Jika fillet terakhir yang anda buat menggunakan jejari, taip `R`, tekan {{key:Enter}}, taip `0` dan tekan {{key:Enter}}.
3. Klik garisan bawah luar berhampiran hujung kanannya.
4. Pada `Select second line`, klik garisan kanan luar berhampiran hujung bawahnya.

Dua garisan kini bertemu pada sudut tajam, dan arahan tamat.

5. Tekan {{key:Enter}} untuk mengulang {{cmd:FILLET}}, dan buat sudut seterusnya.
6. Ulang sehingga keempat-empat sudut luar bertemu.

Klik setiap garisan pada bahagian yang anda mahu **kekalkan**. Dengan jejari melebihi 0, Fillet menambah lengkok di antara garisan sebagai gantinya.

:::tip
Taip `M` pada gesaan pertama untuk membuat keempat-empat sudut sekali gus, atau lukis muka luar sebagai satu polygaris tertutup dan taip `P`: setiap sudut dibuat serentak. Tahan {{key:Shift}} semasa anda klik garisan kedua untuk mendapatkan sudut tajam tanpa menukar jejari.
:::

## Serongkan sudut dengan Chamfer

{{cmd:CHAMFER}} memotong sudut dengan garisan lurus.

1. Taip `CHA` dan tekan {{key:Enter}}.
2. Taip `D` (Jarak) dan tekan {{key:Enter}}. Taip `300` dan tekan {{key:Enter}} untuk jarak pertama, kemudian tekan {{key:Enter}} untuk menggunakan 300 juga untuk yang kedua.
3. Klik garisan dalam atas berhampiran hujung kirinya, kemudian garisan dalam kiri berhampiran hujung atasnya.

Sudut dipotong balik 300 sepanjang setiap garisan, dan garisan serong menyambungkannya. Taip `A` (Sudut) sebagai ganti `D` untuk memberi panjang pada garisan pertama dan sudut.

## Potong pintu dengan Trim

Mula-mula lukis dua kaki pintu merentasi dinding bawah, kemudian pangkas garisan dinding di antara keduanya.

1. Taip `L` dan tekan {{key:Enter}}.
2. Taip `1000,200` dan tekan {{key:Enter}}.
3. Taip `@0,-600` dan tekan {{key:Enter}}, kemudian tekan {{key:Enter}} sekali lagi.
4. Tekan {{key:Enter}} untuk mengulang {{cmd:LINE}}.
5. Taip `1900,200` dan tekan {{key:Enter}}.
6. Taip `@0,-600` dan tekan {{key:Enter}}, kemudian tekan {{key:Enter}} sekali lagi.

Anda kini mempunyai dua garisan pendek yang merentasi dinding bawah, terpisah 900.

7. Taip `TR` dan tekan {{key:Enter}}. Sejarah menyatakan `Current settings: Quick mode, edges: No extend`.
8. Klik garisan dalam bawah di antara dua kaki. Kepingan itu hilang. (Alihkan penunjuk padanya dahulu: kepingan yang akan dibuang bertukar kelabu dan putus-putus.)
9. Klik garisan luar bawah di antara dua kaki. Kepingan itu juga hilang.
10. Klik bahagian setiap kaki yang menonjol di atas dinding, dan bahagian di bawahnya.
11. Tekan {{key:Enter}} untuk menamatkan arahan.

Anda sepatutnya nampak bukaan 900 dalam dinding bawah, dengan kaki menutup hujung dinding.

Dalam mod Pantas (lalai), Pangkas tidak meminta anda memilih tepi pemotong dahulu: setiap objek yang kelihatan ialah tepi pemotong. Pilih kepingan yang anda mahu hilang, atau seret laluan merentasi beberapa kepingan untuk memangkasnya sekali gus. Taip `U` (Buat asal) dan tekan {{key:Enter}} untuk mengembalikan pilihan atau seretan terakhir tanpa keluar daripada arahan. Pagar, silang, tepi yang dipilih dan {{key:Shift}} untuk memanjangkan ada dalam [Pangkas dan panjangkan](topic:trim-and-extend).

## Panjangkan garisan untuk bertemu yang lain

{{cmd:EXTEND}} memanjangkan hujung garisan, lengkok atau polygaris sehingga bertemu objek seterusnya dalam arah itu.

1. Taip `L` dan tekan {{key:Enter}}.
2. Taip `1000,2000` dan tekan {{key:Enter}}.
3. Taip `@2000,0` dan tekan {{key:Enter}}, kemudian tekan {{key:Enter}} sekali lagi. Garisan berhenti 2000 sebelum dinding kanan.
4. Taip `EX` dan tekan {{key:Enter}}.
5. Klik garisan baharu berhampiran hujung kanannya.
6. Tekan {{key:Enter}} untuk menamatkan arahan.

Garisan kini berjalan ke muka dalam dinding kanan. Setiap objek yang kelihatan ialah sempadan; pilih berhampiran hujung yang patut memanjang. Dalam {{cmd:TRIM}}, {{key:Shift}}+klik melakukan perkara yang sama.

## Pecah dan panjangkan

{{cmd:BREAK}} (`BR`, atau {{ui:Ubah}} › {{ui:Lagi}} › {{ui:Pecah}}) memotong jurang tanpa tepi pemotong: klik objek di tempat jurang bermula (klik itu ialah titik pertama), kemudian klik di tempat ia berakhir. Pada bulatan, bahagian lawan arah jam dari titik pertama ke titik kedua akan dikeluarkan. Taip `F` pada soalan kedua untuk memberi titik pertama semula, dan {{cmd:BREAKATPOINT}} memecahkan objek kepada dua pada satu titik tanpa jurang.

{{cmd:LENGTHEN}} (`LEN`) menukar panjang pada satu hujung:

1. Taip `LEN` dan tekan {{key:Enter}}. Klik garisan untuk melihat panjang semasanya; gesaan bertanya semula.
2. Pilih cara: `DE` (Delta: jumlah untuk ditambah, negatif untuk ditolak; `A` untuk sudut lengkok), `P` (Peratus: 50 membahagi dua panjangnya), `T` (Jumlah: panjang yang sepatutnya) atau `DY` (Dinamik: seret hujung).
3. Klik setiap objek berhampiran hujung yang patut bergerak. `U` membatalkan yang terakhir; {{key:Enter}} menamatkan.

Garisan, lengkok dan polygaris terbuka (segmen hujungnya) boleh dipanjangkan.

## Kesilapan biasa

- **Seluruh garisan hilang.** Tiada apa yang merentasinya, jadi mod Pantas memadamkannya. Taip `U` untuk mengembalikannya; semak sama ada garisan pemotong benar-benar merentasinya (zum masuk) dan tidak berada pada lapisan yang dimatikan.
- **"No boundary in that direction."** Tiada sempadan dalam arah itu. Extend tidak menemui apa-apa untuk dilanggar. Pilih berhampiran hujung yang patut memanjang.
- **"Radius is too large."** Jejari terlalu besar. Lengkok akan melepasi hujung salah satu garisan. Gunakan jejari yang lebih kecil.
- **"Only the first or last segment of an open polyline can be cut back."** Hanya segmen pertama atau terakhir polygaris terbuka boleh dipotong balik. Pilih dua segmen polygaris yang bersebelahan, atau taip `P` untuk membundarkan setiap sudutnya.
- **Ofset pergi ke sisi yang salah.** Sisinya ialah tempat anda klik selepas memilih objek. Buat asal dengan {{key:Mod+Z}} dan klik di sisi yang satu lagi.
- **"Cannot offset that far."** Tidak dapat mengofset sejauh itu. Ofset akan membalikkan lengkok, bulatan atau polygaris ke dalam luar. Gunakan jarak yang lebih kecil.
