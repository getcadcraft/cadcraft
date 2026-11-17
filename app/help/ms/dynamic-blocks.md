---
title: Blok dinamik
summary: Apa yang CadCraft lakukan dengan blok dinamik dalam DWG: ia mengekalkan nama sebenarnya, menunjukkan keadaan ia disimpan, menukar keadaan keterlihatan, menunjukkan nilai lain, dan kekal dinamik apabila disimpan.
keywords: blok dinamik, blok dinamik, keterlihatan, keadaan keterlihatan, balik, regang, carian, parameter, tersuai, sifat blok, blok *u, dinamik
from: 26b6aa80
---

## Apa yang berfungsi

DWG yang dibuat dengan blok dinamik dibuka dengan blok itu berfungsi setakat ini:

- **Nama sebenar mereka.** Blok dinamik disenaraikan dalam panel {{ui:Blok}} di bawah namanya sendiri ("Receptacle", "Sink"), bukan sebagai blok `*U` tanpa nama.
- **Keadaan ia disimpan.** Setiap rujukan menunjukkan dengan tepat apa yang ditunjukkan program lain: keadaan keterlihatan yang ditetapkan, diregang atau dibalikkan seperti yang disimpan.
- **Menukar keadaan keterlihatan.** Pilih satu rujukan (atau beberapa blok yang sama), buka {{ui:Sifat}}, dan dalam bahagian {{ui:Tersuai}} pilih keadaan lain daripada senarai {{ui:Keterlihatan}}. Rujukan itu menunjukkan keadaan tersebut serta-merta, begitu juga atributnya: yang disembunyikan oleh keadaan itu hilang, yang ditunjukkannya muncul dengan nilainya. Rujukan menyimpan setiap nilai, jadi tiada apa yang kembali kosong; {{ui:Sifat}} menyenaraikan yang tersembunyi bertanda "tersembunyi". {{key:Mod+Z}} mengembalikan keadaan lama dalam satu langkah.
- **Grip.** Blok dinamik yang dipilih menunjukkan grip sendiri di tempat parameternya: segi tiga kecil untuk keadaan keterlihatan (klik untuk senarai keadaan), anak panah di hujung jarak, anak panah dua hala untuk balik. Hanya grip keterlihatan berfungsi hari ini; yang lain memberitahunya dalam bar status.
- **Nilai lain, baca sahaja.** Di bawah senarai keterlihatan, {{ui:Tersuai}} turut menunjukkan jarak blok, sudut penjajaran, keadaan balik dan titik seperti yang disimpan dalam lukisan.
- **Menyunting keadaan keterlihatan.** Buka blok dengan {{cmd:BEDIT}}: editor menunjukkan satu keadaan, dinamakan dalam bar di atas lukisan (pilih yang lain di situ). Taip {{cmd:BVSTATE}} untuk bertukar, menambah (menyembunyikan semua, menunjukkan semua, atau mengekalkan yang ditunjukkan), menamakan semula atau memadam keadaan. {{cmd:BVHIDE}} menyembunyikan objek yang dipilih dalam keadaan yang ditunjukkan; {{cmd:BVSHOW}} menunjukkan yang tersembunyi dengan pudar supaya anda boleh klik yang hendak dikembalikan. Simpan blok: rujukan yang ditetapkan kepada keadaan yang dinamakan semula akan mengekalkannya dengan nama barunya, dan yang ditetapkan kepada keadaan yang dipadam akan menunjukkan keadaan pertama.
- **Kekal dinamik.** Apabila disimpan sebagai DWG dalam versi yang lukisan itu datang, blok kekal dinamik, dengan keadaan yang anda pilih: program lain membukanya sebagai blok dinamik yang sama. Keadaan keterlihatan yang anda sunting turut disimpan: nama baharunya, keadaan yang anda tambah dan apa yang ditunjukkan oleh setiap satu.

## Apa yang hanya baca, atau belum ada lagi

| Belum ada | Sebaliknya, hari ini |
|---|---|
| Menukar jarak, sudut atau balik (tindakan regang, alih, balik) | Ia ditunjukkan sebagai baca sahaja dalam {{ui:Tersuai}}; sunting dalam program yang mencipta blok itu. |
| Parameter carian, XY, putaran dan kutub | Belum dibaca: rujukan ditunjukkan seperti yang disimpan. |
| Menyeret grip jarak, balik dan titik | Ia ditunjukkan di tempat parameternya; grip keterlihatan dan senarai {{ui:Keterlihatan}} dalam Sifat menukar keadaan. |
| Mencipta blok dinamik (menambah parameter, atau keadaan keterlihatan kepada blok yang tiada) | Blok yang anda cipta dalam CadCraft ialah blok biasa; {{cmd:BPARAMETER}} memberitahunya. |
| Menambah atau memadam objek blok yang mempunyai keadaan keterlihatan dalam editor blok | Blok itu kemudian disimpan sebagai blok biasa (editor memberitahunya apabila ia ditutup). |
| Mengekalkannya dinamik dalam versi DWG lain atau dalam DXF | Ia disimpan sebagai blok biasa yang menunjukkan keadaan yang anda pilih, dan penyimpanan memberitahunya. |

:::note
Mengalih atau menukar objek dalam {{cmd:BEDIT}} mengekalkan blok yang mempunyai keadaan keterlihatan sebagai dinamik. Blok tanpa keadaan, atau yang objeknya ditambah atau dipadam dalam editor, menjadi blok biasa.
:::
