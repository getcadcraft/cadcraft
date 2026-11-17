---
title: Pusing paparan dan guna koordinat anda sendiri (UCS)
summary: Pusing paparan 90° atau pada mana-mana sudut tanpa menggerakkan apa-apa dalam lukisan, dan tetapkan sistem koordinat pengguna (UCS) supaya titik, ortho, penjejakan kutub, grid dan teks baharu mengikut paksi bangunan sendiri.
keywords: ucs, sistem koordinat pengguna, pelan, pusing paparan, putar paparan, pusingan paparan, ucs z, ucs 3point, ucs object, ucs world, ucs bernama, ucsfollow, turnleft, turnright, turnworld, bangunan bersudut, grid berputar
from: 6f152c65
---

## Apa yang akan anda pelajari

Cara melihat lukisan yang dipusingkan, supaya bangunan yang dilukis pada sudut kelihatan tegak pada skrin, dan cara menaip titik sepanjang paksinya sendiri. Tiada apa dalam lukisan bergerak semasa anda melakukan ini: objek kekal dengan koordinatnya, pusingan bukan suntingan, dan lukisan tidak ditanda sebagai berubah.

## Pusing paparan seperempat

1. Klik {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}} atau {{ui:Turn view 90° right}}.

Lukisan berpusing pada skrin tentang tengah kawasan lukisan. Buat sekali lagi untuk terus berpusing.

2. Klik {{ui:View}} › {{ui:More}} › {{ui:Back to world}} untuk meratakannya semula.

Arahan di sebalik mereka ialah {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} dan {{cmd:TURNWORLD}}. Untuk memberikan satu daripadanya kekunci, tambahkan baris seperti `TL=TURNLEFT` pada alias anda dengan {{cmd:ALIASEDIT}}.

## Sejajarkan dengan bangunan bersudut

1. Taip `UCS` dan tekan {{key:Enter}}, kemudian `OB` dan {{key:Enter}}.
2. Klik garisan dinding berhampiran hujung yang sepatutnya menjadi asal.

UCS kini bermula di hujung itu dengan paksi X sepanjang dinding, dan paparan berpusing supaya dinding rata pada skrin. Ikon paksi di sudut kiri bawah menunjukkan arah paksi UCS.

3. Lukis seperti biasa. Dengan UCS ditetapkan:
   - `x,y` dan `@dx,dy` diukur sepanjang paksi UCS; `d<a` mengukur sudut dari paksi X UCS.
   - {{ui:Ortho}}, penjejakan kutub dan grid mengikut paksi UCS, dan begitu juga kursor silang.
   - Teks baharu dan perenggan baharu berjalan sepanjang paksi X UCS; mendatar dan menegak {{cmd:DIMLINEAR}} juga mengikutinya.
   - Koordinat pada bar status dan daripada {{cmd:ID}} ialah koordinat UCS.
4. Untuk menaip titik dunia semasa UCS ditetapkan, letakkan `*` di hadapan: `*0,0` atau `@*100,0`.
5. Taip `UCS`, {{key:Enter}}, kemudian {{key:Enter}} sekali lagi untuk kembali ke dunia.

## Cara lain untuk menetapkan UCS

Pada gesaan {{cmd:UCS}}:

| Anda taip | Apa yang dilakukannya |
|---|---|
| satu titik | Asal baharu; kemudian klik titik pada paksi X baharu, atau tekan {{key:Enter}} untuk mengekalkan sudut |
| `Z` | Pusingkan UCS tentang asalnya dengan sudut yang anda taip (darjah, lawan jam) atau pilih |
| `3` (3point) | Asal, satu titik sepanjang paksi X positif, dan satu titik di sisi Y positif |
| `OB` (Objek) | Daripada garisan, lengkok, bulatan, segmen polygaris, teks, rujukan blok, titik atau garisan binaan |
| `P` (Sebelumnya) | UCS sebelum yang ini (sepuluh terakhir disimpan semasa lukisan dibuka) |
| `W` (World) | Kembali ke dunia |
| `NA` (Bernama) | `S` menyimpan UCS semasa dengan nama, `R` memulihkan satu, `D` memadam satu, `?` menyenaraikannya |

Setiap perubahan memusingkan paparan supaya paksi X UCS baharu rata. {{cmd:PLAN}} memusingkan paparan tanpa mengubah UCS: {{key:Enter}} untuk UCS semasa, `U` untuk yang disimpan, `W` untuk dunia.

## Perkara yang perlu diketahui

- Setiap anak tetingkap skrin berpecah mengekalkan pusingannya sendiri. UCS tergolong kepada lukisan.
- Helaian bekerja dalam koordinat kertas; tetapkan UCS pada tab {{ui:Model}}, atau di dalam viewport.
- Tetingkap pemilihan yang diseret dalam paparan berpusing memilih apa yang terletak di dalamnya pada skrin.
- Rutin LISP menerima titik dalam UCS daripada `getpoint`, boleh membaca `UCSORG`, `UCSXDIR`, `UCSYDIR` dan `VIEWTWIST`, dan `trans` menukar antara dunia, UCS dan paparan.

:::note
Fail yang disimpan mengekalkan UCS dan pusingan paparan dalam binaan kemudian; sehingga itu ia kekal selagi lukisan dibuka.
:::
