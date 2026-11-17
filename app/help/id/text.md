---
title: Tambahkan teks dan label
summary: Letakkan label ruangan dengan teks satu baris, tulis catatan yang dibungkus dengan teks paragraf yang diketik langsung di gambar, dan edit teks setelahnya.
keywords: teks, dtext, mtext, mleader, multileader, leader, revcloud, awan revisi, cloud, cari, ganti, cari dan ganti, paragraf, bungkus, spasi baris, label, catatan, anotasi, tinggi, rata, textmask, masker latar belakang, masker, wipeout, rotasi, edit teks, ddedit, textedit, font
from: 4b76be99
---

## Yang akan Anda buat

Dua label ruangan, di tengah masing-masing ruangan, sebuah catatan yang dibungkus sesuai lebarnya, lalu koreksi pada salah satu label.

## Tinggi teks dan skala gambar

Tinggi teks dinyatakan dalam satuan gambar. Pada gambar dalam milimeter yang akan dicetak pada 1:50, teks setinggi 2.5 mm di kertas harus 2.5 × 50 = 125 satuan tingginya di model. Pada tab lembar, Anda menggambar dalam satuan kertas, jadi nilai 2.5 di sana berarti 2.5 mm di kertas.

## Letakkan label di tengah

1. Ketik `DT` dan tekan {{key:Enter}} (atau klik {{ui:Text}} di bilah alat). Prompt-nya berbunyi `Specify start point of text [Justify]:`.
2. Ketik `J` dan tekan {{key:Enter}}.
3. Pada `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, ketik `MC` dan tekan {{key:Enter}}.
4. Pada `Specify insertion point of text`, klik bagian tengah sebuah ruangan.
5. Pada `Specify height`, ketik `250` dan tekan {{key:Enter}}.
6. Pada `Specify rotation angle of text <0>`, tekan {{key:Enter}}.
7. Pada `Enter text`, ketik `KITCHEN` dan tekan {{key:Enter}}.

Label muncul, di tengah titik yang Anda klik.

8. Tekan {{key:Enter}} pada prompt `Enter text` yang kosong untuk mengakhiri perintah.

## Tulis catatan yang dibungkus

Teks paragraf ({{cmd:MTEXT}}) dibungkus sesuai lebar tertentu dan diketik langsung di gambar.

1. Ketik `T` dan tekan {{key:Enter}}, atau klik {{ui:Paragraph}} di bilah alat.
2. Pada `Specify first corner`, klik tempat sudut kiri atas catatan.
3. Untuk mengubah tinggi lebih dulu, ketik `H`, tekan {{key:Enter}}, ketik `250`, lalu tekan {{key:Enter}}.
4. Pada `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, klik di sebelah kanan sudut pertama. Jarak mendatar itulah lebar tempat teks dibungkus; seberapa jauh Anda mengklik ke bawah tidak membatasinya.
5. Sebuah kotak terbuka di atas gambar dengan kursor di dalamnya. Ketik `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Kata-kata akan dibungkus pada lebar itu saat Anda mengetik.
6. Tekan {{key:Enter}} untuk memulai paragraf baru, lalu ketik `CHECK ON SITE`.
7. Tekan {{key:Mod+Enter}}, klik {{ui:OK}}, atau klik di luar kotak. Catatan menjadi satu objek.

Bilah di atas kotak dapat mengubah {{ui:Tinggi}}, {{ui:Spasi baris}} (1 adalah normal, 1.5 berarti setengah lebih banyak lagi), {{ui:Lebar}} (0 = tanpa pembungkusan) dan {{ui:Rata}} saat Anda mengetik. {{key:Esc}} atau {{ui:Batal}} menutup kotak tanpa menambahkan apa pun.

Opsi pada sudut kedua: `H` tinggi, `J` perataan (`TL` kiri atas … `BR` kanan bawah: sudut atau tengah kotak yang tetap di tempatnya), `L` spasi baris, `R` rotasi, `W` lebar yang diketik sebagai ganti sudut kedua.

:::note
Saat kotak terbuka, {{key:Space}} mengetik spasi dan {{key:Enter}} memulai paragraf baru. DWG yang disimpan menyimpan teks paragraf sebagai MTEXT; DXF R12 tidak memiliki teks paragraf, sehingga setiap baris disimpan sebagai teks tersendiri.
:::

### Beberapa baris tunggal sebagai gantinya

{{cmd:TEXT}} (`DT`) meminta satu baris dalam satu waktu: setiap {{key:Enter}} memulai baris berikutnya, 1.667 kali tinggi teks lebih rendah, dan setiap baris menjadi objek tersendiri. Tekan {{key:Enter}} pada baris kosong untuk selesai.

## Opsi perataan

| Opsi | Titik yang Anda klik adalah |
|---|---|
| Kiri (bawaan) | Ujung kiri garis dasar |
| Pusat | Tengah garis dasar |
| Kanan | Ujung kanan garis dasar |
| Tengah, MC | Tengah teks, baik mendatar maupun vertikal |
| TL | Sudut kiri atas |

## Edit teks

1. Klik dua kali objek teks. Teks terbuka di kotak yang sama dengan teks paragraf baru, dengan kursor di akhir.
2. Ubah kata-katanya.
3. Tekan {{key:Mod+Enter}} atau klik di luar kotak. Teks di gambar berubah; {{key:Esc}} membiarkannya seperti semula.

{{cmd:TEXTEDIT}} (`ED`) melakukan hal yang sama: pilih satu teks demi satu, dan tekan {{key:Enter}} jika sudah selesai.

Untuk mengubah teks dari panel kanan, pilih teksnya: {{ui:Teks}}, {{ui:Tinggi}}, {{ui:Lebar bungkus}} (0 = tanpa pembungkusan), {{ui:Spasi baris}}, {{ui:Rotasi}}, posisi X dan Y, serta {{ui:Rata}}. Daftar {{ui:Rata}} juga menawarkan Bottom left (kiri bawah), yang kadang dipakai teks dari program lain.

## Pemformatan di dalam teks paragraf dari program lain

Teks paragraf di DWG atau DXF dapat membawa kode di dalamnya: warna per kata, tebal dan miring, garis bawah, garis atas dan coretan, pecahan bertumpuk seperti 1/2, serta tinggi yang berbeda untuk satu kata. CadCraft menyimpan kode-kode itu, menggambarnya (di layar dan di PDF hasil cetak), dan menyimpannya kembali tanpa perubahan.

Saat Anda mengedit teks seperti itu (klik dua kali, {{cmd:TEXTEDIT}}, kolom Teks di panel kanan, atau {{cmd:FIND}} dengan Ganti), Anda mengedit kata-katanya saja. Kata yang Anda ketik masuk ke bagian teks di sebelahnya dan mengambil warna serta gayanya; kode lain tetap di tempatnya. Jika Anda mengetik ulang angka pada pecahan bertumpuk, pecahan itu menjadi teks biasa. Mengatur seluruh teks dari kolom Teks hanya mempertahankan kode jika CadCraft bisa mengetahui kata mana yang tidak berubah.

Nama font (`\F`) disimpan dan dipertahankan, tetapi semuanya digambar dengan satu font bergaya Helvetica. Belum ada bilah alat untuk mengetik kode.

## Menunjuk sesuatu: multileader

{{ui:Leader}} di grup {{ui:Anotasi}} ({{cmd:MLEADER}}, `MLD`) menggambar panah, garis leader, landing pendek, dan catatan sebagai satu objek.

1. Klik {{ui:Leader}}. Pada `Specify leader arrowhead location`, klik objek yang dibahas oleh catatan.
2. Pada `Specify leader landing location`, klik tempat catatan diletakkan. Landing menghadap ke sisi yang Anda klik.
3. Ketik catatan di kotak yang terbuka, lalu tekan {{key:Mod+Enter}}.

`A` dan `L` pada pertanyaan pertama mengatur ukuran mata panah dan panjang landing; tinggi teks berasal dari {{ui:Tinggi teks}} untuk dimensi baru, dikali {{ui:Skala keseluruhan}}. Klik dua kali multileader untuk mengubah katanya. Grip memindahkan mata panah dan landing; catatan mengikuti landing. Di {{ui:Properti}}: {{ui:Teks}}, {{ui:Tinggi}}, {{ui:Lebar bungkus}}, {{ui:Ukuran mata panah}} dan {{ui:Jarak landing}}.

:::note
Multileader disimpan sebagai multileader sungguhan di DWG. DXF tidak memiliki multileader di R12 atau 2000, sehingga di sana multileader disimpan sebagai garis, mata panah, dan teks yang digambarnya.
:::

## Tandai perubahan dengan awan revisi

{{ui:Anotasi}} › {{ui:Lainnya}} › {{ui:Awan revisi}} ({{cmd:REVCLOUD}}, `RC`) menggambar awan busur di sekeliling bagian yang berubah. Riwayat menampilkan panjang busur dan tipe yang akan digunakan.

- **Persegi panjang** (pertama kali): klik dua sudut.
- `P` **Poligonal**: klik sudut-sudutnya, {{key:Enter}} menutup awan.
- `F` **Bebas**: klik tempat awan dimulai, lalu gerakkan penunjuk mengelilingi area tanpa mengklik; sebuah busur ditambahkan setiap panjang busur. Klik atau tekan {{key:Enter}} untuk menutupnya.
- `O` **Objek**: pilih polyline tertutup, lingkaran atau elips (atau garis, busur, atau polyline terbuka); objek itu menjadi awan. `Reverse direction?` `Y` membalik busur ke arah dalam.
- `A` **Panjang busur**: panjang setiap busur. Pilih yang sesuai dengan skala cetak.

Awan adalah polyline tertutup yang terdiri dari busur, sehingga awan disimpan dalam setiap format.

## Cari dan ganti kata

{{ui:Edit}} › {{ui:Lainnya}} › {{ui:Cari dan ganti}} ({{cmd:FIND}}) mencari teks, nilai atribut blok, dan teks dimensi di tab yang terbuka (atau hanya di objek yang dipilih).

1. Ketik kata-katanya di {{ui:Cari}}. Daftar menampilkan setiap tempat kata itu berada, beserta jumlahnya.
2. Pilih {{ui:Cocokkan huruf besar/kecil}}, {{ui:Hanya kata utuh}} atau {{ui:Gunakan wildcard (* dan ?)}} jika perlu, dan hapus centang pada bagian yang tidak ingin dicari.
3. Klik {{ui:Pilih yang ditemukan}} untuk memilih objek-objek itu, atau ketik kata baru di {{ui:Ganti dengan}} (daftar menampilkan hasil setiap penggantian), lalu klik {{ui:Ganti semua}}. Satu {{key:Mod+Z}} membatalkan semua penggantian.

Nilai ukuran dimensi bukan teks, sehingga tidak pernah diganti: pada `<> TYP.`, hanya `TYP.` yang bisa diganti.

## Sembunyikan garis di belakang label

1. Pilih teksnya, ketik {{cmd:TEXTMASK}}, lalu tekan {{key:Enter}}.
2. `B` mewarnai latar belakang gambar di belakang teks; `C` meminta nomor warna. `O` menghapus masker.
3. `Border offset factor`: {{key:Enter}} mempertahankan 1.5, yaitu setengah tinggi teks di sekeliling teks.

Masker menutupi garis di bawah teks, di layar maupun saat dicetak. DWG 2004 atau yang lebih baru dan DXF 2000 mempertahankannya; format DWG 2000 dan DXF R12 tidak bisa, dan saat menyimpan akan ada pemberitahuan.

## Font

Semua teks digambar dengan font bergaya Helvetica, di layar dan di PDF. Teks dari gambar yang dibuka mempertahankan kata, tinggi, dan posisinya, tetapi tidak font aslinya (nama font di dalam teks paragraf tetap disimpan dalam file, lihat di atas).

Di PDF hasil cetak, teks dalam aksara Eropa, Sirilik, atau Yunani dicetak apa adanya (PDF memuat huruf yang diperlukan, dan teks tetap bisa dipilih serta dicari). Teks Tionghoa, Jepang, dan Korea juga dicetak apa adanya (cetakan mengambil font yang lebih besar saat pertama kali dibutuhkan). Teks Arab, Persia, Urdu, dan Ibrani juga dicetak apa adanya (lihat bagian berikutnya). Karakter yang tidak memiliki huruf di font mana pun dicetak sebagai "?", dan riwayat menyebutkan jumlahnya.

## Teks kanan-ke-kiri: Arab, Persia, Urdu, Ibrani

Ketik teks seperti biasa: {{cmd:TEXT}} dan {{cmd:MTEXT}} menggambar setiap baris dalam urutan baca. Baris yang huruf pertamanya Arab atau Ibrani dibaca dari kanan ke kiri; angka dan kata Latin di dalamnya mempertahankan urutan kiri-ke-kanan sendiri, dan huruf aksara Arab disambung. Baris yang dimulai dengan huruf Latin tetap dibaca kiri-ke-kanan, dengan kata kanan-ke-kiri di tempatnya di dalam baris. Setiap paragraf dalam teks multibaris memiliki arahnya sendiri, dan paragraf yang dibungkus mempertahankannya di setiap baris.

Teks disimpan seperti yang Anda ketik, sehingga file DWG dan DXF dapat dipertukarkan dengan program lain tanpa perubahan. Titik sisip dan perataan ({{ui:Kiri}}, {{ui:Pusat}}, {{ui:Kanan}}) berarti sisi yang sama seperti untuk teks apa pun: catatan kanan-ke-kiri yang harus menggantung dari ujung kanannya memerlukan {{ui:Kanan}}.

Di layar, huruf berasal dari font sistem Anda. Di PDF hasil cetak, Ibrani memakai font tertanam yang sama dengan teks Latin; teks aksara Arab membuat cetakan mengambil satu font tambahan (di bawah 1 MB, sekali saja), dan seluruh PDF kemudian dicetak dengan font tersebut. Font itu tidak memiliki bentuk sendiri untuk tiga karakter Urdu (heh goal, yeh barree, dan titik penuh Urdu): karakter tersebut dicetak dengan bentuk huruf Arab terdekat. Gambar yang memiliki teks aksara Arab sekaligus teks Tionghoa, Jepang, atau Korea akan mencetak salah satunya sebagai "?", karena satu cetakan hanya memuat satu font. Teks dalam font SHX yang dimuat akan diurutkan dan disambung jika font tersebut memiliki huruf pada posisi Unicode-nya; untuk font lama yang hurufnya sudah berbentuk, gunakan {{ui:Balik}} di {{cmd:SHXFONTS}} seperti sebelumnya.

## Kesalahan umum

- **Teks terlalu kecil untuk dilihat.** Tingginya dinyatakan dalam satuan gambar. Dalam gambar yang besar, gunakan tinggi yang besar (lihat di atas), atau perbesar tampilan.
- **Perintah berakhir setelah satu baris.** Anda menekan {{key:Enter}} pada baris kosong di {{cmd:TEXT}}. Mulai lagi, atau gunakan teks paragraf (`T`), tempat {{key:Enter}} memulai paragraf baru.
- **`T` membuka kotak alih-alih meminta satu baris.** Seperti di AutoCAD, `T` adalah teks paragraf ({{cmd:MTEXT}}); teks satu baris adalah `DT`.
- **Teks dibungkus di tempat yang berbeda dibandingkan AutoCAD.** CadCraft membungkus dengan lebar huruf Helvetica; font lain bisa memuat satu kata lebih banyak atau lebih sedikit dalam satu baris.
- **Teks pada salinan cermin.** Teks diletakkan secara cermin, tetapi tetap dapat dibaca dari kiri ke kanan.
