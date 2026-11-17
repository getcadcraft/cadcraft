---
title: Gunakan parameter dan persamaan
summary: Namakan saiz, pacu dengan ungkapan seperti width / 2, dan taip nombor pada saiz yang dipacu untuk mengubah apa yang memacunya.
keywords: parameters, par, pengurus parameter, persamaan, equations, ungkapan, expressions, pembolehubah, variables, dua hala, niat reka bentuk, design intent, parameter pengguna, user parameter, fx
from: 650b9844
---

## Satu jadual untuk setiap saiz

Panel {{ui:Parameter}} (butang {{ui:Parameter}} dalam kumpulan {{ui:Parametrik}}, atau taip {{cmd:PARAMETERS}}) menyenaraikan setiap kekangan dimensi (`d1`, `rad1`, `dia1`, `ang1`, atau nama yang anda beri) dan parameter anda sendiri bersama-sama. Sebarang nama boleh digunakan dalam mana-mana ungkapan.

Setiap baris mempunyai:

- **Nama**: taip nama baharu untuk menamakannya semula; setiap ungkapan yang menggunakannya akan mengikutinya.
- **Ungkapan**: nombor (`40`) atau ungkapan (`width / 2 + gap`). Taip di dalamnya dan tekan {{key:Enter}}: lukisan mengikutinya.
- **Nilai**: hasil pengiraannya. Pada baris yang dipacu oleh ungkapan, anda juga boleh menaip nombor di sini: CadCraft mengira parameter di sebaliknya. Dengan `d1 = width / 2`, menaip `30` dalam nilai d1 menetapkan `width` kepada 60.

Apabila dua parameter memacu satu nilai (`width / 2 + gap`), dialog bertanya yang mana satu hendak diubah. Setiap perubahan ialah satu langkah buat asal ({{key:Mod+Z}}).

## Tambah sendiri

1. Buka panel {{ui:Parameter}}.
2. Taip nama (`gap`) dan nilai (`10`), kemudian pilih {{ui:Tambah (A)}}.
3. Gunakannya: dalam ungkapan d1, taip `width / 2 + gap` dan tekan {{key:Enter}}.

Nama bermula dengan huruf atau `_` dan mengandungi huruf, digit dan `_`. Nama fungsi, `pi` dan nama unit tidak boleh digunakan sebagai nama.

## Ungkapan

| Tulis | Maksud |
|---|---|
| `+ - * / ^ %` | tambah, tolak, darab, bahagi, kuasa, baki |
| `( )` | pengelompokan |
| `sin cos tan asin acos atan atan2` | trigonometri dalam darjah |
| `sqrt pow exp ln log abs sign` | punca, kuasa, logaritma |
| `ceil floor int round min max` | pembundaran dan had |
| `if(a > b, x, y)` | satu pilihan |
| `pi` | 3.14159… |

Nombor boleh membawa unit: `25mm`, `1in`, `2'`, `90deg`. Panjang dengan unit ditukar kepada milimeter, jadi gunakan unit hanya dalam lukisan yang diukur dalam milimeter; di tempat lain, taip nombor biasa.

## Pada baris arahan

`-PARAMETERS` melakukan perkara yang sama tanpa panel: `N` (Baharu), `E` (Sunting, kekangan dimensi juga), `R` (Namakan semula), `D` (Padam), `?` (Senarai).

## Apa yang ditolak

- Ungkapan yang menggunakan dirinya sendiri, sama ada secara langsung atau melalui yang lain: "width, d1 saling menggunakan."
- Nilai yang saiz tidak dapat terima: panjang negatif, atau sudut melebihi 180°.
- Nilai yang lukisan tidak dapat terima bersama kekangan lainnya: tiada yang berubah, dan mesej menamakan kekangan yang menghalang.
- Memadam parameter yang digunakan oleh sesuatu: panel menawarkan untuk menulis nilainya ke dalam ungkapan itu dahulu. Nama kekangan dimensi dipadam dengan memadam kekangan itu.
