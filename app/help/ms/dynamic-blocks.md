---
title: Blok dinamik
summary: Apa yang CadCraft lakukan dengan blok dinamik dalam DWG: ia mengekalkan nama sebenar, menunjukkan keadaan yang disimpan, menukar keadaan keterlihatan, menunjukkan nilai lain yang dimilikinya, dan kekal dinamik apabila disimpan.
keywords: blok dinamik, blok dinamik, keterlihatan, keadaan keterlihatan, flip, regang, carian, parameter, tersuai, sifat blok, *u blocks, dinamik
from: dea2ee7c
---

## Apa yang berfungsi

Sebuah DWG yang dibuat dengan blok dinamik dibuka dengan ia berfungsi setakat ini:

- **Nama sebenar mereka.** Blok dinamik disenaraikan dalam panel {{ui:Blocks}} di bawah namanya sendiri ("Receptacle", "Sink"), bukan sebagai blok `*U` tanpa nama.
- **Keadaan yang disimpan.** Setiap rujukan menunjukkan dengan tepat apa yang ditunjukkan oleh program lain: keadaan keterlihatan yang ditetapkannya, diregangkan atau dibalikkan seperti yang disimpan.
- **Menukar keadaan keterlihatan.** Pilih satu rujukan (atau beberapa daripada blok yang sama), buka {{ui:Properties}}, dan dalam bahagian {{ui:Custom}} pilih keadaan lain daripada senarai {{ui:Visibility}}. Rujukan menunjukkan keadaan itu serta-merta, atribut-atributnya juga: yang disembunyikan oleh keadaan itu hilang, yang ditunjukkannya muncul dengan nilainya. Rujukan mengekalkan setiap nilai, jadi tiada apa yang kembali kosong; {{ui:Properties}} menyenaraikan yang tersembunyi ditanda "hidden". {{key:Mod+Z}} mengembalikan keadaan lama dalam satu langkah.
- **Grip.** Blok dinamik yang dipilih menunjukkan gripnya sendiri di tempat parameternya berada: segi tiga kecil untuk keadaan keterlihatan (klik untuk senarai keadaan), anak panah di hujung jarak, anak panah dua hala untuk flip. Hanya grip keterlihatan yang berfungsi hari ini; yang lain memberitahu begitu dalam bar status.
- **Nilai lain, baca sahaja.** Di bawah senarai keterlihatan, {{ui:Custom}} juga menunjukkan jarak, sudut penjajaran, keadaan flip dan titik blok seperti yang dipegang oleh lukisan.
- **Menyunting keadaan keterlihatan.** Buka blok dengan {{cmd:BEDIT}}: penyunting menunjukkan satu keadaan, dinamakan dalam bar di atas lukisan (pilih yang lain di sana). Taip {{cmd:BVSTATE}} untuk menukar, menambah (menyembunyikan segalanya, menunjukkan segalanya, atau mengekalkan apa yang ditunjukkan), menamakan semula atau memadam satu keadaan; {{cmd:BVHIDE}} menyembunyikan objek yang dipilih dalam keadaan yang ditunjukkan; {{cmd:BVSHOW}} menunjukkan yang tersembunyi secara pudar supaya anda boleh mengklik yang hendak dikembalikan. Simpan blok: rujukan yang ditetapkan kepada keadaan yang dinamakan semula mengekalkannya di bawah nama baharunya, dan yang ditetapkan kepada keadaan yang dipadam menunjukkan keadaan pertama.
- **Kekal dinamik.** Disimpan sebagai DWG dalam versi lukisan itu datang, blok kekal dinamik, dengan keadaan yang anda pilih: program lain membukanya sebagai blok dinamik yang sama. Keadaan keterlihatan yang anda sunting juga disimpan: nama baharunya, keadaan yang anda tambah dan apa yang ditunjukkan setiap satu.

## Apa yang hanya dibaca, atau belum ada

| Belum ada | Sebagai gantinya, hari ini |
|---|---|
| Menukar jarak, sudut atau flip (tindakan regang, alih, flip) | Ia ditunjukkan sebagai baca sahaja dalam {{ui:Custom}}; sunting dalam program yang membuat blok itu. |
| Parameter carian, XY, putaran dan kutub | Tidak dibaca lagi: rujukan ditunjukkan seperti yang disimpan. |
| Menyeret grip jarak, flip dan titik | Ia menunjukkan di mana parameternya berada; grip keterlihatan dan senarai {{ui:Visibility}} dalam Properties menukar keadaan. |
| Membuat blok dinamik jenis program lain (regang, flip, carian) | Blok yang anda buat dalam CadCraft ialah blok biasa; {{cmd:BPARAMETER}} memberitahu begitu. Parameter anda sendiri dan beberapa parameter keterlihatan berada dalam pengurus Parameter (lihat "Parameter dan keadaan keterlihatan anda sendiri" di bawah). |
| Menambah atau memadam objek blok dengan keadaan keterlihatan dalam penyunting blok | Blok itu kemudian disimpan sebagai blok biasa (penyunting memberitahu apabila ditutup). |
| Mengekalkannya dinamik dalam versi DWG lain atau dalam DXF | Ia disimpan sebagai blok biasa yang menunjukkan keadaan yang anda pilih, dan penyimpanan memberitahu begitu. |

:::note
Menggerakkan atau menukar objek dalam {{cmd:BEDIT}} mengekalkan blok dengan keadaan keterlihatan sebagai dinamik. Blok tanpa keadaan, atau yang objeknya ditambah atau dipadam dalam penyunting, menjadi blok biasa.
:::

## Parameter dan keadaan keterlihatan anda sendiri

Blok yang anda buat dalam CadCraft boleh membawa parameternya sendiri dan **beberapa** parameter keterlihatan, setiap satu dengan keadaannya sendiri. Taip {{cmd:BPARAMS}} (atau `BPM`) untuk membuka **Parameters manager** bagi blok yang anda sunting dalam {{cmd:BEDIT}}, bagi blok rujukan yang dipilih, atau bagi blok yang anda namakan.

- **Parameter**: nama, jenis (nombor, panjang, sudut, kiraan, ya/tidak), dan nilai atau formula ke atas parameter lain (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Comes to}} menunjukkan hasilnya. Formula yang tidak berfungsi, atau nilai yang tidak sesuai dengan jenisnya (kiraan 1.5), ditolak dan pengurus memberitahu sebabnya; tiada yang lain berubah.
- **Parameter keterlihatan**: {{ui:Add visibility parameter}} membuat satu dengan keadaan pertama. Setiap keadaan boleh dinamakan semula, dialih keluar (yang terakhir kekal) atau diberi nombor "shows when". Formula memilih keadaan daripada parameter (keadaan yang nombornya sepadan, jika tidak keadaan di kedudukan itu dalam senarai); tanpa formula, setiap rujukan memilih sendiri.
- **Meletakkan objek dalam keadaan**: dalam penyunting blok, pilih objek, taip {{cmd:BPARAMS}} dan klik {{ui:Put the selected objects here}} pada keadaan itu. Objek yang tiada parameter keterlihatan senaraikan sentiasa ditunjukkan.
- **Rujukan ini**: bermula pada rujukan yang dipilih, pengurus juga menunjukkan nilai dan keadaan rujukan itu sendiri.

Di luar penyunting blok setiap perubahan ialah satu langkah buat asal. Dalam penyunting blok, perubahan adalah milik penyunting: {{ui:Save block}} menyimpannya. `-BPARAMS` meminta perkara yang sama pada baris arahan.

**Dalam fail.** DWG dan DXF menyimpan parameter, objek mana dalam keadaan mana, dan nilai tersendiri setiap rujukan, dalam rekod CadCraft sendiri; buka semula fail dalam CadCraft dan semuanya kembali. Program lain melihat setiap rujukan sebagai blok dengan semua objeknya, kerana DWG hanya menyimpan paling banyak satu parameter keterlihatan bagi setiap blok jenisnya sendiri. Rujukan yang dialihkan oleh program lain, atau blok yang objeknya diubah olehnya, kembali tanpa bahagian yang tidak lagi sejajar (tiada apa yang diteka).
