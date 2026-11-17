---
title: Pindahkan sketsa ke dan dari pemodel part lain
summary: Tulis makro yang membangun ulang gambar Anda sebagai satu sketsa dengan batasan di pemodel part, dan buka sketsa yang diekspor dari salah satunya.
keywords: sketsa, makro, swb, vba, ekspor, pemodel part, variabel global, persamaan, relasi, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks tidak tersedia di tempat CadCraft dibuat, sehingga kedua arah belum diuji di SolidWorks. Yang ditulis CadCraft hanya diperiksa strukturnya. Periksa hasilnya sebelum Anda mengandalkannya.
:::

## Kirim gambar sebagai sketsa

1. Beri batasan dan dimensi pada gambar (lihat [Beri batasan pada gambar](topic:constraints)).
2. Di grup {{ui:Parametrik}}, buka {{ui:Lainnya}} dan pilih {{ui:Makro untuk SolidWorks (.swb)}}, atau ketik {{cmd:SWBOUT}}.

   File bernama sesuai gambar, berakhiran `.swb`, akan diunduh.
3. Di SolidWorks, pilih **Tools > Macro > Run** lalu pilih file tersebut.

Makro membuat part baru dari templat part default Anda, membuka sketsa di Front Plane, dan menggambar garis, lingkaran, busur, titik, dan polyline model di dalamnya, dengan:

- batasan Anda sebagai relasi sketsa,
- batasan dimensi Anda sebagai dimensi dengan nama yang sama (`d1@Sketch1`),
- parameter Anda sendiri sebagai variabel global,
- setiap ekspresi sebagai persamaan.

Part menggunakan satuan panjang dari gambar. Teks, blok, hatch, dimensi, dan lembar tidak termasuk dalam sketsa; riwayat mencantumkan apa yang ditinggalkan. Ekspresi yang tidak memiliki bentuk persamaan di sana (`if`, `min`, `max`, `round`, `%` dan beberapa lainnya) ditulis sebagai nilai saat ini, dan riwayat menyatakan mana saja. Apa pun yang tidak dapat dibuat makro ditulis ke file log di sebelah makro, dan sebuah pesan merangkumnya di akhir.

## Buka sketsa dari part

1. Di SolidWorks, jalankan makro ekspor CadCraft (unduh di aplikasi PartCraft: File > Export > Ekspor makro untuk membawa part kembali) pada part tersebut. Makro ini menulis file `.json` dalam format `cadcraft-sw-export` di sebelah part.
2. Di CadCraft, pilih {{ui:Buka}} dan pilih file `.json` itu.
3. Jika part memiliki beberapa sketsa, pilih salah satu.

Sketsa menjadi gambar, dalam milimeter: garis, busur, lingkaran, dan titiknya; relasinya sebagai batasan; dimensinya sebagai batasan dimensi dengan nama seperti semula (`D1`, `D2` …); variabel globalnya sebagai parameter; dan persamaan pada dimensinya sebagai ekspresinya. Riwayat mencantumkan apa yang tidak terbawa, seperti relasi yang tidak dimiliki CadCraft. Posisi sketsa di dalam part tidak disimpan: sketsa digambar datar, seperti terlihat pada bidangnya.
