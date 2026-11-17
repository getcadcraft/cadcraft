---
title: Memeriksa satuan gambar
summary: Lihat apakah gambar yang dibuka memakai milimeter, inci, atau satuan lain, periksa dengan mengukur, dan ketahui mengapa program lain bisa menyebut satuan berbeda untuk DXF yang sama.
keywords: satuan, satuan apa, satuan mana, periksa satuan, milimeter, mm, inci, metrik, imperial, satuan DXF, STEP ke DXF, satuan salah, inci atau mm, INSUNITS, MEASUREMENT, satuan gambar, DXF PartCraft
from: c0ee75bb
---

## Yang akan Anda lakukan

Mengetahui arti satu satuan dalam gambar yang dibuka, dan memastikan angka yang Anda baca sesuai dengan ukuran yang Anda harapkan.

## Langkah

1. Buka gambar, lalu tekan {{key:Esc}} agar tidak ada yang dipilih, pada tab {{ui:Model}}.
2. Di panel kanan, di bawah {{ui:Pengaturan saat ini}}, baca {{ui:Satuan}}. Di sana tertulis arti satu satuan gambar: {{ui:Milimeter}}, {{ui:Inci}}, {{ui:Kaki}}, dan seterusnya. DXF yang disimpan dari PartCraft menulis {{ui:Milimeter}}.
3. Periksa dengan mengukur sesuatu yang Anda ketahui ukurannya. Ketik {{cmd:DIST}} lalu pilih dua ujung sebuah tepi atau lubang. Jika sebuah part yang Anda ketahui berukuran 25 mm terbaca `25`, gambar memakai milimeter; jika terbaca sekitar `0.98`, gambar memakai inci.

{{ui:Tanpa satuan}} berarti file tidak menyebutkan satuannya. CadCraft kemudian memperlakukannya sebagai satuan kertas (milimeter pada kertas ISO, inci pada kertas US), dan angkanya hanya setepat program yang menuliskannya.

## Jika satuannya salah

Mengubah {{ui:Satuan}} **tidak mengubah ukuran apa pun**: angkanya tetap sama dan yang berubah hanya artinya. Maka atur hanya untuk menyatakan apa sebenarnya isi gambar. Jika angkanya milimeter dan {{ui:Satuan}} menulis {{ui:Inci}}, pilih {{ui:Milimeter}}. Jika Anda memerlukan geometri itu sendiri dalam satuan lain, skalakan dengan {{cmd:SCALE}} (25.4 dari inci ke milimeter, 1/25.4 sebaliknya) lalu atur {{ui:Satuan}}.

Cara panjang ditulis (desimal, kaki dan inci, pecahan) adalah pengaturan terpisah, {{ui:Format panjang}}: lihat [Satuan, ukuran kertas, dan skala](topic:units-papers-scales).

## Mengapa program lain bisa menyebut inci

DXF menyatakan satuannya di header-nya. DXF paling lama, R12, tidak punya variabel satuan sama sekali, sehingga program yang membaca R12 secara ketat mengabaikan satuan yang tertulis dan kembali ke bawaannya sendiri, yang sering kali inci. Geometri dalam file sama saja dalam kedua kasus: hanya labelnya yang berbeda. PartCraft menulis file DXF sebagai R12 dan menyatakan milimeter dua cara (`$INSUNITS` 4 dan `$MEASUREMENT` 1) agar lebih banyak program membacanya dengan benar. Jika sebuah program tetap menyebut inci, atur satuannya ke milimeter saat Anda membuka file.

Membawa file ke dalam gambar (bukan membukanya) mengonversi satuannya: lihat [Satuan saat impor](topic:units-on-import).
