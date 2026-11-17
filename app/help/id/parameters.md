---
title: Gunakan parameter dan persamaan
summary: Beri nama ukuran, gerakkan dengan ekspresi seperti width / 2, dan ketik angka pada ukuran yang digerakkan untuk mengubah apa yang menggerakkannya.
keywords: parameter, par, pengelola parameter, persamaan, ekspresi, variabel, dua arah, maksud desain, parameter pengguna, fx
from: 650b9844
---

## Satu tabel untuk setiap ukuran

Panel {{ui:Parameter}} (tombol {{ui:Parameter}} di grup {{ui:Parametrik}}, atau ketik {{cmd:PARAMETERS}}) mencantumkan setiap batasan dimensi (`d1`, `rad1`, `dia1`, `ang1`, atau nama yang Anda beri) dan parameter Anda sendiri sekaligus. Nama apa pun dapat dipakai di ekspresi apa pun.

Setiap baris memiliki:

- **Nama**: ketik nama baru untuk mengganti namanya; setiap ekspresi yang memakainya ikut berubah.
- **Ekspresi**: angka (`40`) atau ekspresi (`width / 2 + gap`). Ketik di dalamnya dan tekan {{key:Enter}}: gambar akan mengikutinya.
- **Nilai**: hasil hitungannya. Pada baris yang digerakkan oleh ekspresi, Anda juga dapat mengetik angka di sini: CadCraft menghitung parameter di baliknya. Dengan `d1 = width / 2`, mengetik `30` di nilai d1 akan mengatur `width` menjadi 60.

Ketika dua parameter menggerakkan sebuah nilai (`width / 2 + gap`), dialog akan menanyakan yang mana yang akan diubah. Setiap perubahan adalah satu langkah urungkan ({{key:Mod+Z}}).

## Tambahkan milik Anda

1. Buka panel {{ui:Parameter}}.
2. Ketik nama (`gap`) dan nilai (`10`), lalu pilih {{ui:Tambah}}.
3. Gunakan: di ekspresi d1, ketik `width / 2 + gap` dan tekan {{key:Enter}}.

Nama dimulai dengan huruf atau `_` dan berisi huruf, angka dan `_`. Nama fungsi, `pi` dan nama satuan tidak dapat dijadikan nama.

## Ekspresi

| Tulis | Artinya |
|---|---|
| `+ - * / ^ %` | tambah, kurang, kali, bagi, pangkat, sisa |
| `( )` | pengelompokan |
| `sin cos tan asin acos atan atan2` | trigonometri dalam derajat |
| `sqrt pow exp ln log abs sign` | akar, pangkat, logaritma |
| `ceil floor int round min max` | pembulatan dan batas |
| `if(a > b, x, y)` | sebuah pilihan |
| `pi` | 3.14159… |

Angka dapat membawa satuan: `25mm`, `1in`, `2'`, `90deg`. Panjang dengan satuan diubah menjadi milimeter, jadi gunakan satuan hanya pada gambar yang diukur dalam milimeter; di tempat lain ketik angka biasa.

## Di baris perintah

`-PARAMETERS` melakukan hal yang sama tanpa panel: `N` baru, `E` edit (juga batasan dimensi), `R` ganti nama, `D` hapus, `?` daftar.

## Yang ditolak

- Ekspresi yang memakai dirinya sendiri, langsung atau melalui yang lain: "width, d1 saling bergantung."
- Nilai yang tidak dapat diterima ukuran: panjang negatif, atau sudut di atas 180°.
- Nilai yang tidak dapat diterima gambar bersama batasan lainnya: tidak ada yang berubah, dan pesan menyebutkan batasan yang menghalangi.
- Menghapus parameter yang dipakai sesuatu: panel menawarkan untuk menulis nilainya ke dalam ekspresi yang memakainya terlebih dulu. Nama batasan dimensi dihapus dengan menghapus batasan itu.
