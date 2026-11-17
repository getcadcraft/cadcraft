---
title: Membuat dan menyisipkan blok
summary: Ubah pintu yang sudah digambar menjadi blok, tempatkan lagi pada posisi, skala, dan sudut lain, lalu bersihkan blok yang tidak dipakai.
keywords: blok, bmake, sisipkan, ddinsert, simbol, purge, explode, redefine, titik dasar, referensi, hitung, bcount, jadwal, csv, atribut, ekstraksi data
from: 125a129d
---

## Yang akan Anda buat

Simbol pintu yang dijadikan blok bernama `DOOR-900`, lalu ditempatkan tiga kali: seperti digambar, diputar 90 derajat, dan dicerminkan.

Blok adalah kelompok objek yang diberi nama. Anda menggambarnya sekali; setiap tempat Anda memakainya adalah **referensi blok** yang menunjuk ke satu definisi yang sama. Bagian {{ui:Blok}} di panel kiri mencantumkan blok dalam gambar dan berapa kali setiap blok dipakai.

## Gambar pintu

1. Ketik `L` lalu tekan {{key:Enter}}.
2. Ketik `0,0` lalu tekan {{key:Enter}}.
3. Ketik `@0,900` lalu tekan {{key:Enter}}, lalu tekan {{key:Enter}} sekali lagi. Ini adalah daun pintu.
4. Ketik `A` lalu tekan {{key:Enter}}.
5. Ketik `C` lalu tekan {{key:Enter}} untuk menentukan pusat terlebih dahulu.
6. Ketik `0,0` lalu tekan {{key:Enter}} untuk pusat.
7. Ketik `900,0` lalu tekan {{key:Enter}} untuk titik awal.
8. Ketik `0,900` lalu tekan {{key:Enter}} untuk titik akhir. Ini adalah ayunan pintu.
9. Klik {{ui:Batas}}.

Busur bergerak berlawanan arah jarum jam dari titik awal ke titik akhir.

## Buat blok

1. Ketik `B` lalu tekan {{key:Enter}}, atau klik {{ui:Buat}} di grup Blok.
2. Pada `Enter block name`, ketik `DOOR-900` lalu tekan {{key:Enter}}.
3. Pada `Specify insertion base point`, ketik `0,0` lalu tekan {{key:Enter}}. Ini adalah engsel: titik yang berada di lokasi saat blok ditempatkan.
4. Pada `Select objects`, seret jendela melingkari daun dan busur.
5. Tekan {{key:Enter}}.

Riwayat berbunyi `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panel {{ui:Blok}} mencantumkan DOOR-900 dengan `1×` di sebelahnya: satu referensi. Klik pintu: sekarang ia terpilih sebagai satu objek, yaitu "Referensi blok".

:::tip
Anda dapat memilih objek terlebih dahulu lalu mengetik `B`. CadCraft tetap menanyakan nama dan titik dasar, lalu memakai pilihan Anda.
:::

## Sisipkan blok

1. Ketik `I` lalu tekan {{key:Enter}}, atau klik {{ui:Sisipkan}} di samping DOOR-900 pada panel {{ui:Blok}}.
2. Pada `Enter block name or [File/Library] <DOOR-900>`, tekan {{key:Enter}}. (Tombol {{ui:Sisipkan}} di panel sudah mengisi nama untuk Anda.)
3. Pintu mengikuti kursor silang. Klik di tempat engsel seharusnya berada.

Pintu kedua muncul.

## Sisipkan dengan diputar atau diskala

1. Ketik `I` lalu tekan {{key:Enter}}, kemudian tekan {{key:Enter}} untuk menerima nama.
2. Pada `Specify insertion point [Scale/Rotate]`, ketik `R` lalu tekan {{key:Enter}}.
3. Ketik `90` lalu tekan {{key:Enter}}. Pratinjau berputar.
4. Klik untuk menempatkannya.

Ketik `S` sebagai gantinya untuk menetapkan faktor skala; faktor ini berlaku untuk kedua arah. Skala dan rotasi diingat untuk sisipan berikutnya. Untuk mencerminkan pintu, sisipkan lalu gunakan {{cmd:MIRROR}} pada referensinya.

## Ubah blok yang sudah ditempatkan

Pilih referensi blok. Di panel kanan Anda dapat mengubah {{ui:X}}, {{ui:Y}}, {{ui:Skala X}}, {{ui:Skala Y}} dan {{ui:Rotasi}}. {{ui:Skala X}} bernilai negatif akan membaliknya.

## Definisikan ulang blok

Untuk mengubah setiap pintu sekaligus, buat blok dengan nama yang sama:

1. Gambar versi baru pintu.
2. Ketik `B` lalu tekan {{key:Enter}}, dan ketik `DOOR-900`.
3. Pada `Block "DOOR-900" already exists. Redefine it?`, ketik `Y` lalu tekan {{key:Enter}}.
4. Tentukan titik dasar dan pilih objek baru, seperti sebelumnya.

Setiap referensi ke DOOR-900 sekarang menampilkan versi baru.

Atau edit blok itu sendiri: {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Edit blok}} ({{cmd:BEDIT}}) membukanya secara terpisah, dan {{ui:Simpan blok}} menyimpannya kembali. Lihat [Atribut blok](topic:attributes#change-a-block-the-block-editor).

## Hitung blok dan ekspor jadwal

Ketik {{cmd:COUNT}} (atau {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Hitung blok}}), lalu:

- klik satu pintu: setiap pintu di ruang ini dipilih, dan riwayat menyebutkan berapa banyak di sini dan di seluruh gambar;
- atau tekan {{key:Enter}}: riwayat mencantumkan setiap blok dengan jumlahnya, yang terbanyak lebih dulu;
- atau ketik `E`, lalu `C` untuk CSV berisi jumlah (di model, di lembar, dan total), atau `A` untuk satu baris per referensi dengan layer, posisi, rotasi, dan setiap nilai atribut — jadwal yang dapat Anda buka di spreadsheet.

Blok tanpa nama (dimensi, tabel) dan referensi di dalam blok lain tidak dihitung. Sel yang diawali seperti rumus (`=`, `+`, `-`, `@`) diberi `'` di depannya agar spreadsheet menampilkannya sebagai teks.

## Urai dan bersihkan

- {{cmd:EXPLODE}} (`X`) mengubah referensi blok yang dipilih kembali menjadi objek terpisah. Definisinya tetap ada.
- {{cmd:PURGE}} (`PU`) menghapus definisi blok yang tidak lagi dipakai. Riwayat menyebutkan berapa banyak yang dihapus.

## Nama blok

Nama dapat terdiri dari hingga 255 karakter dan boleh berisi spasi, tetapi tidak boleh diawali tanda bintang, dan tidak boleh berisi `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` atau tanda backtick. Saat Anda menyimpan DXF R12, nama ditulis dengan huruf kapital, karakter selain huruf, angka, `$`, `_` dan `-` menjadi `_`, dan nama dipotong menjadi 31 karakter; riwayat menyebutkan berapa banyak yang berubah. Nama pendek dengan huruf kapital, angka, dan tanda hubung, seperti `DOOR-900`, tetap tidak berubah. DWG yang disimpan mempertahankan nama sesuai yang Anda ketik, huruf besar dan kecil; hanya karakter yang tidak diizinkan DWG yang berubah (`|` menjadi `$0$`, yang lain menjadi `_`).

## Tulis blok atau objek ke file tersendiri

Ketik `W` ({{cmd:WBLOCK}}) dan pilih **Objek**, **Blok** atau **Seluruh gambar**. Hasilnya adalah DWG atau DXF baru yang hanya berisi layer, gaya, dan blok yang dipakainya, dengan titik dasar Anda sebagai titik asal. Untuk objek, Anda dapat menyimpannya, mengubahnya menjadi blok, atau menghapusnya dari gambar ini.

## Kesalahan umum

- **Blok mendarat jauh dari kursor silang.** Titik dasar tidak berada pada objek. Buat ulang blok dengan titik dasar di sudut atau engsel.
- **"Tidak ada objek yang dipilih; tidak ada yang dibuat."** Anda menekan {{key:Enter}} sebelum memilih apa pun.
- **"Gambar ini belum memiliki blok: F menyisipkan dari file, L dari pustaka (atau buat satu dengan BLOCK)."** Ketik `F` untuk membawa blok dari gambar lain, atau `L` untuk pustaka. Lihat [Sisipkan dari file atau pustaka](topic:insert-from-file-and-library).
- **"Viewport tidak dapat dimasukkan ke dalam blok."** Jangan sertakan bingkai viewport dalam pilihan.
