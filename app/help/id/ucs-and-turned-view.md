---
title: Putar tampilan dan gunakan koordinat Anda sendiri (UCS)
summary: Putar tampilan 90° atau ke sudut mana pun tanpa memindahkan apa pun di gambar, dan atur sistem koordinat pengguna (UCS) agar titik, ortho, pelacakan polar, grid, dan teks baru mengikuti sumbu bangunan sendiri.
keywords: ucs, sistem koordinat pengguna, denah, putar tampilan, rotasi tampilan, putaran tampilan, ucs z, ucs 3point, ucs object, ucs world, ucs bernama, ucsfollow, turnleft, turnright, turnworld, bangunan miring, grid berputar
from: 6f152c65
---

## Yang akan Anda pelajari

Cara melihat gambar yang diputar, sehingga bangunan yang digambar miring terbaca tegak lurus di layar, dan cara mengetik titik sepanjang sumbunya sendiri. Tidak ada yang di gambar bergerak saat Anda melakukan ini: objek mempertahankan koordinatnya, putaran bukan suatu edit, dan gambar tidak ditandai sebagai berubah.

## Putar tampilan seperempat

1. Klik {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}} atau {{ui:Turn view 90° right}}.

Gambar berputar di layar di sekitar tengah area gambar. Lakukan lagi untuk terus memutar.

2. Klik {{ui:View}} › {{ui:More}} › {{ui:Back to world}} untuk meratakannya kembali.

Perintah di baliknya adalah {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}}, dan {{cmd:TURNWORLD}}. Untuk memberinya tombol pintas, tambahkan baris seperti `TL=TURNLEFT` ke alias Anda dengan {{cmd:ALIASEDIT}}.

## Sejajarkan dengan bangunan miring

1. Ketik `UCS` dan tekan {{key:Enter}}, lalu `OB` dan {{key:Enter}}.
2. Klik garis dinding di dekat ujung yang seharusnya menjadi titik asal.

UCS sekarang dimulai di ujung itu dengan sumbu X-nya sepanjang dinding, dan tampilan berputar sehingga dinding rata di layar. Ikon sumbu di sudut kiri bawah menunjukkan ke arah mana sumbu UCS menunjuk.

3. Gambar seperti biasa. Dengan UCS yang diatur:
   - `x,y` dan `@dx,dy` diukur sepanjang sumbu UCS; `d<a` mengukur sudut dari sumbu X UCS.
   - {{ui:Ortho}}, pelacakan polar, dan grid mengikuti sumbu UCS, begitu pula kursor silang.
   - Teks baru dan paragraf baru berjalan sepanjang sumbu X UCS; horizontal dan vertikal {{cmd:DIMLINEAR}} juga mengikutinya.
   - Koordinat di bilah status dan dari {{cmd:ID}} adalah koordinat UCS.
4. Untuk mengetik titik dunia saat UCS diatur, tulis `*` di depannya: `*0,0` atau `@*100,0`.
5. Ketik `UCS`, {{key:Enter}}, lalu {{key:Enter}} lagi untuk kembali ke dunia.

## Cara lain mengatur UCS

Pada prompt {{cmd:UCS}}:

| Anda mengetik | Yang terjadi |
|---|---|
| titik | Titik asal baru; lalu klik titik pada sumbu X baru, atau tekan {{key:Enter}} untuk mempertahankan sudut |
| `Z` (Putar) | Memutar UCS mengelilingi titik asalnya sebesar sudut yang Anda ketik (derajat, berlawanan arah jarum jam) atau pilih |
| `3` (3 titik) | Titik asal, titik sepanjang sumbu X positif, dan titik di sisi Y positif |
| `OB` (Objek) | Dari garis, busur, lingkaran, segmen polyline, teks, referensi blok, titik, atau garis konstruksi |
| `P` (Sebelumnya) | UCS sebelum yang ini (sepuluh terakhir disimpan selama gambar terbuka) |
| `W` (Dunia) | Kembali ke dunia |
| `NA` (Bernama) | `S` menyimpan UCS saat ini dengan nama, `R` memulihkan satu, `D` menghapus satu, `?` mendaftarkannya |

Setiap perubahan memutar tampilan sehingga sumbu X UCS baru menjadi rata. {{cmd:PLAN}} memutar tampilan tanpa mengubah UCS: {{key:Enter}} untuk UCS saat ini, `U` untuk yang tersimpan, `W` untuk dunia.

## Yang perlu diketahui

- Setiap panel dari layar terbagi mempertahankan putarannya sendiri. UCS milik gambar.
- Lembar bekerja dalam koordinat kertas; atur UCS di tab {{ui:Model}}, atau di dalam viewport.
- Jendela seleksi yang diseret pada tampilan yang diputar memilih apa yang berada di dalamnya di layar.
- Rutin LISP menerima titik dalam UCS dari `getpoint`, dapat membaca `UCSORG`, `UCSXDIR`, `UCSYDIR`, dan `VIEWTWIST`, dan `trans` mengonversi antara dunia, UCS, dan tampilan.

:::note
File yang disimpan mempertahankan UCS dan putaran tampilan pada build berikutnya; sampai saat itu keduanya bertahan selama gambar terbuka.
:::
