---
title: Semak lukisan itu dalam unit apa
summary: Lihat sama ada lukisan yang dibuka berada dalam milimeter, inci atau sesuatu yang lain, semak dengan mengukur, dan ketahui mengapa program lain boleh menamakan unit berbeza untuk DXF yang sama.
keywords: unit, unit apa, unit mana, semak unit, milimeter, mm, inci, metrik, imperial, unit DXF, STEP ke DXF, unit salah, inci atau mm, INSUNITS, MEASUREMENT, unit lukisan, DXF PartCraft
from: c0ee75bb
---

## Apa yang akan anda lakukan

Cari tahu apa yang diwakili oleh satu unit dalam lukisan yang dibuka, dan pastikan nombor yang anda baca sepadan dengan saiz yang anda jangkakan.

## Langkah

1. Buka lukisan, kemudian tekan {{key:Esc}} supaya tiada apa yang dipilih, pada tab {{ui:Model}}.
2. Dalam panel kanan, di bawah {{ui:Tetapan semasa}}, baca {{ui:Unit}}. Ia menyatakan apa yang satu unit lukisan wakili: {{ui:Milimeter}}, {{ui:Inci}}, {{ui:Kaki}} dan seterusnya. DXF yang disimpan daripada PartCraft menyatakan {{ui:Milimeter}}.
3. Semak dengan mengukur sesuatu yang saiznya anda tahu. Taip {{cmd:DIST}} dan pilih dua hujung tepi atau lubang. Jika bahagian yang anda tahu ialah 25 mm dan dibaca `25`, lukisan itu dalam milimeter; jika ia dibaca kira-kira `0.98`, ia dalam inci.

{{ui:Tanpa unit}} bermakna fail itu tidak menyatakannya. CadCraft kemudian menganggapnya sebagai unit kertas (milimeter pada kertas ISO, inci pada kertas US), dan nombornya hanya tepat setakat mana program yang menulisnya adalah tepat.

## Jika unit salah

Menukar {{ui:Unit}} **tidak mengubah saiz apa-apa**: nombor kekal sama dan hanya maksudnya yang berubah. Jadi tetapkannya hanya untuk menyatakan apa lukisan itu sebenarnya. Jika nombornya milimeter dan {{ui:Unit}} menyatakan {{ui:Inci}}, pilih {{ui:Milimeter}}. Jika anda perlukan geometri itu sendiri dalam unit lain, skalakannya dengan {{cmd:SCALE}} (25.4 dari inci ke milimeter, 1/25.4 sebaliknya) dan kemudian tetapkan {{ui:Unit}}.

Cara panjang ditulis (perpuluhan, kaki dan inci, pecahan) ialah tetapan berasingan, {{ui:Format panjang}}: lihat [Unit, saiz kertas dan skala](topic:units-papers-scales).

## Mengapa program lain boleh menyatakan inci

DXF menyatakan unitnya dalam pengepalanya (header). Jenis DXF yang paling lama, R12, tidak mempunyai pembolehubah unit langsung, jadi program yang membaca R12 secara ketat mengabaikan apa yang ditulis di situ dan kembali kepada lalai sendiri, yang selalunya inci. Geometri dalam fail itu sama dalam kedua-dua keadaan: hanya labelnya yang berbeza. PartCraft menulis fail DXFnya sebagai R12 dan menyatakan milimeter dalam dua cara (`$INSUNITS` 4 dan `$MEASUREMENT` 1) supaya lebih banyak program membacanya dengan betul. Jika program masih menyatakan inci, tetapkan unitnya kepada milimeter apabila anda membuka fail itu.

Membawa fail ke dalam lukisan (bukannya membukanya) menukar unitnya: lihat [Unit semasa import](topic:units-on-import).
