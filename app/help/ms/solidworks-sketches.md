---
title: Pindahkan lakaran ke dan dari pemodel bahagian lain
summary: Tulis makro yang membina semula lukisan anda sebagai satu lakaran berkekangan dalam pemodel bahagian, dan buka lakaran yang dieksport daripadanya.
keywords: lakaran, makro, swb, vba, eksport, pemodel bahagian, pembolehubah global, persamaan, hubungan, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks tidak tersedia di tempat CadCraft dibina, jadi kedua-dua arah belum diuji dalam SolidWorks lagi. Apa yang CadCraft tulis hanya disemak dari segi struktur. Semak keputusan sebelum anda bergantung kepadanya.
:::

## Hantar lukisan sebagai lakaran

1. Kekang dan dimensikan lukisan (lihat [Kekang lukisan](topic:constraints)).
2. Dalam kumpulan {{ui:Parametrik}}, buka {{ui:Lagi}} dan pilih {{ui:Makro untuk SolidWorks (.swb)}}, atau taip {{cmd:SWBOUT}}.

   Fail dinamakan sempena lukisan, berakhir `.swb`, dan dimuat turun.
3. Dalam SolidWorks, pilih **Tools > Macro > Run** dan pilih fail itu.

Makro itu membuat bahagian baharu daripada templat bahagian lalai anda, membuka lakaran pada Front Plane dan melukis garisan, bulatan, lengkok, titik dan polygaris model di dalamnya, dengan:

- kekangan anda sebagai hubungan lakaran,
- kekangan dimensi anda sebagai dimensi dengan nama yang sama (`d1@Sketch1`),
- parameter anda sendiri sebagai pembolehubah global,
- setiap ungkapan sebagai persamaan.

Bahagian itu menggunakan unit panjang lukisan. Teks, blok, hatch (lorekan), dimensi dan helaian bukan sebahagian daripada lakaran; sejarah menyenaraikan apa yang ditinggalkan. Ungkapan yang tiada bentuk persamaan di sana (`if`, `min`, `max`, `round`, `%` dan beberapa lagi) ditulis sebagai nilai semasanya, dan sejarah menyatakannya. Apa-apa yang makro tidak dapat hasilkan ditulis ke fail log di sebelah makro, dan satu mesej meringkaskannya pada akhir.

## Buka lakaran daripada bahagian

1. Dalam SolidWorks, jalankan makro eksport CadCraft (muat turun dalam aplikasi PartCraft: File > Export > Export macro to bring parts back) pada bahagian itu. Ia menulis fail `.json` dalam format `cadcraft-sw-export` di sebelah bahagian.
2. Dalam CadCraft, pilih {{ui:Buka}} dan pilih fail `.json` itu.
3. Apabila bahagian mempunyai beberapa lakaran, pilih satu.

Lakaran menjadi lukisan, dalam milimeter: garisan, lengkok, bulatan dan titiknya, hubungannya sebagai kekangan, dimensinya sebagai kekangan dimensi yang dinamakan seperti asalnya (`D1`, `D2` …), pembolehubah globalnya sebagai parameter, dan persamaan pada dimensinya sebagai ungkapannya. Sejarah menyenaraikan apa yang tidak dibawa, seperti hubungan yang CadCraft tidak miliki. Kedudukan lakaran dalam bahagian tidak dikekalkan: ia dilukis rata, seperti yang dilihat pada satahnya.
