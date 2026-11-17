---
title: Butang milik anda (Alatan saya)
summary: Tambah butang bar alat yang menjalankan makro anda sendiri, beri kekunci pintasan, kongsi sebagai fail, dan bawa butang masuk dari fail penyesuaian CUIx.
keywords: alatan saya, butang tersuai, butang bar alat, makro, macros, cui, cuix, sesuaikan, customize, customise, menu, kekunci pintasan, papan kekunci, diesel, ^c^c, import butang, eksport butang
from: 36618802
---

## Apa yang akan anda pelajari

Cara meletakkan butang anda sendiri pada bar alat, setiap butang menjalankan makro yang ditulis seperti yang AutoCAD tulis, cara memberi butang satu kekunci, dan cara membawa butang daripada fail CUIx.

## Tambah butang

1. Buka {{ui:Tetapan}} ({{key:Mod+,}}) dan kekal pada tab {{ui:CadCraft}}. Tatal ke {{ui:Alatan saya}}.
2. Klik {{ui:Tambah butang…}}.
3. Isi kotak:
   - {{ui:Kumpulan}}: kumpulan bar alat tempat ia masuk, contohnya `Alatan saya`. Nama baharu mencipta kumpulan baharu.
   - {{ui:Label}}: perkataan pada butang.
   - {{ui:Makro}}: apa yang ditaipnya, contohnya `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Kekunci pintasan}}: klik kotak dan tekan kekunci, contohnya {{key:Ctrl+Alt+B}}.
   - {{ui:Ikon}}: gambar PNG atau SVG tidak melebihi 64 KB, atau tiada (bintang akan dipaparkan).
4. Klik {{ui:Simpan}}.

Butang muncul di hujung bar alat, dalam kumpulannya. Klik, atau tekan kekuncinya, untuk menjalankannya. {{ui:Sunting}} dan {{ui:Padam}} dalam senarai menukar atau mengalih keluarnya.

## Tulis makro

Makro ialah apa yang anda taip pada baris arahan, dengan beberapa tanda:

| Tanda | Maksud |
|---|---|
| `^C` | Batalkan apa sahaja yang sedang berjalan (`^C^C` ialah permulaan biasa) |
| `;` atau ruang | {{key:Enter}} |
| `\` | Tunggu anda: satu klik atau jawapan yang ditaip, kemudian makro diteruskan |
| `_` atau `.` sebelum arahan | Diterima dan diabaikan (nama antarabangsa dan terbina dalam) |
| `*` pada permulaan | Jalankan semula setiap kali ia tamat, sehingga anda tekan {{key:Esc}} |
| `^O`, `^G` | Hidupkan atau matikan Ortho dan grid |
| `$M=` | Selebihnya ialah DIESEL. Hanya `$(if,…)`, `$(getvar,…)`, `$(=,…)` dan `$(eq,…)` dibaca; butang yang menggunakan yang lain memberitahu demikian dan tidak melakukan apa-apa |

Contoh:

- `^C^C_line;0,0;@100,0;;` melukis garisan sepanjang 100 dari asalan.
- `^C^C_circle;\25;` meminta anda tentukan pusat, kemudian melukis bulatan berjejari 25 di situ.
- `^C^C_turnright` memusingkan pandangan 90° ke kanan.

## Kekunci pintasan

Kekunci memerlukan {{key:Mod}} (Ctrl, atau Cmd pada Mac) atau {{key:Alt}} dengan huruf atau digit, atau salah satu kekunci fungsi yang bebas {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Huruf sahaja pergi ke baris arahan. Kekunci yang sudah digunakan oleh CadCraft, aplikasi atau pelayar (seperti {{key:Ctrl+S}} atau {{key:Ctrl+Z}}) dan kekunci yang digunakan oleh butang lain ditolak, dan kotak itu memberitahu sebabnya.

## Kongsi butang anda

- {{ui:Eksport…}} menyimpan setiap kumpulan dan butang (dengan ikon dan kekunci) sebagai `my-tools.json`.
- {{ui:Import…}} menambah kumpulan daripada fail sebegitu selepas kumpulan anda. Nama kumpulan yang sudah anda guna mendapat "(2)"; kekunci yang akan bertembung ditinggalkan, dan panel memberitahu demikian.

## Bawa butang masuk daripada fail CUIx

1. Klik {{ui:Import CUIx…}} dan pilih fail `.cuix`.

Bar alat dan panel reben daripadanya menjadi kumpulan, setiap butang dengan makro dan gambarnya (PNG, atau BMP yang ditukar kepada PNG). Kekunci pintasannya masuk dalam kumpulan tersendiri, setiap butang dengan kekuncinya; alias arahan yang mungkin dibawanya masuk dalam kumpulan {{ui:Alias}}. Panel menyenaraikan apa yang telah dibawa masuk.

:::note
Fail itu hanya dibaca. Arahan yang CadCraft tidak miliki disenaraikan mengikut nama, bukan diagak: butangnya memberitahu demikian apabila diklik. DIESEL melebihi beberapa fungsi di atas, menu, butang tetikus dan ruang kerja tidak dibaca.
:::

## Perkara yang perlu diketahui

- Butang disimpan dalam pelayar ini (atau aplikasi desktop ini), bukan dalam lukisan.
- Butang berjalan melalui baris arahan, jadi ia dibatalkan seperti apa-apa yang anda taip: satu {{key:Mod+Z}} bagi setiap arahan yang dijalankannya.
