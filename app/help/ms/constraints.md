---
title: Kekang lukisan
summary: Kekalkan garisan mengufuk, hujung bersatu dan saiz tetap dengan kekangan geometri dan dimensi, dan biarkan lukisan mengikut apabila anda menukar saiz.
keywords: kekangan, mengekang, parametrik, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, darjah kebebasan, dikekang sepenuhnya
from: f8f21fa4
---

## Apa yang akan anda hasilkan

Plat yang lebarnya anda tukar di satu tempat sahaja: sisinya kekal tegak bersudut, satu bucu kekal di tempatnya, dan ketinggiannya kekal separuh lebar.

Kekangan berfungsi pada garisan, polisegmen, bulatan, lengkok dan titik pada tab {{ui:Model}}. Setiap satu yang anda tambah ialah satu langkah buat asal.

## Lukis dan kekang lakaran luar

1. Taip `REC` dan tekan {{key:Enter}}. Taip `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Taip `AUTOCONSTRAIN` dan tekan {{key:Enter}}. Taip `ALL`, {{key:Enter}}, kemudian {{key:Enter}} sekali lagi.

   Sejarah berbunyi "4 kekangan digunakan". Kotak kecil dengan **H** dan **V** muncul di sebelah sisi: ini ialah bar kekangan.
3. Taip `GCFIX` dan tekan {{key:Enter}}. Klik berhampiran bucu kiri bawah. Kotak dengan ⊕ muncul: bucu itu kekal di tempatnya.

`AUTOCONSTRAIN` menambah kekangan koinsiden di tempat hujung-hujung hampir bertemu, dan kekangan mengufuk atau menegak di tempat garisan hampir rata atau tegak. Taip `S` pada gesaannya untuk menukar sejauh mana kedekatan (pada permulaan 0.05 unit lukisan dan 1°).

## Tambah saiz

1. Taip `DCHORIZONTAL` dan tekan {{key:Enter}}.
2. Klik berhampiran bucu kiri bawah, kemudian berhampiran bucu kanan bawah.
3. Klik di bawah segi empat tepat untuk garis dimensi.
4. Gesaan menunjukkan `Dimension text <d1=100>`. Taip `width=120` dan tekan {{key:Enter}}.

   Segi empat tepat itu kini lebar 120, dan labelnya berbunyi `width=120`.
5. Taip `DCVERTICAL` dan tekan {{key:Enter}}, taip `O` dan tekan {{key:Enter}}, kemudian klik sisi kanan.
6. Klik di sebelah kanannya, taip `width/2` dan tekan {{key:Enter}}.

   Ketinggiannya ialah 60. Labelnya berbunyi `fx: d1=width/2`: satu ungkapan memacu dimensi itu.

Sejarah kini menyatakan lakaran luar itu dikekang sepenuhnya. Untuk menukar saizannya, tukar `width` (lihat [Guna parameter dan persamaan](topic:parameters)), atau klik dua kali label `width=120`, taip nilai baharu dan pilih {{ui:Guna}}.

## Mengalih objek yang dikekang

Alih, putar, skala, grip dan panel Sifat semuanya mengekalkan kekangan: apa yang anda alihkan dipegang, dan selebihnya mengikut. Apabila kekangan tidak dapat mengikut, suntingan itu tidak dibuat dan sejarah menyatakan sebabnya, contohnya "Tidak dilakukan: kekangan memegang objek itu di tempatnya". Memadam objek turut memadam kekangannya.

## Cermin dan pangkas objek yang dikekang

- {{cmd:MIRROR}} menyalin kekangan antara objek yang anda cermin ke atas salinan. Hala (arah sentuhan tangen, sisi mana jarak diukur) dikira semula untuk salinan cermin, dan dimensi yang disalin mendapat nama sendiri, seperti tampalan. Dengan `Erase source objects` `Y`, kekangan kekal pada objek yang dicermin. Sejarah menyatakan berapa banyak yang turut dibawa.
- {{cmd:TRIM}} mengekalkan kekangan garisan atau lengkok pada bahagian yang tinggal: kekangan pada hujung pergi ke bahagian yang masih mempunyai hujung itu, peraturan arah ({{ui:Mengufuk}}, {{ui:Menegak}}, {{ui:Selari}}, {{ui:Serenjang}}) kekal pada setiap bahagian, dan dimensi antara dua hujung luar terus mengukurnya. Kekangan yang memegang bahagian yang dipotong, atau panjang yang diubah oleh pemotongan ({{ui:Sama}}, sapuan lengkok), akan hilang. Bulatan yang dipangkas mengekalkan kekangan pusat dan jejarinya. Polisegmen yang dipangkas kehilangan kekangannya.

## Kekangan

| Arahan | Mengekalkan |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | garisan atau segmen mengufuk atau menegak (`2P`: dua titik mengufuk atau menegak) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dua garisan selari, bersudut tegak atau segaris |
| {{cmd:GCCOINCIDENT}} | dua titik bersatu; `O`: satu titik pada garisan, bulatan atau lengkok |
| {{cmd:GCTANGENT}} | satu garisan dan satu bulatan atau lengkok, atau dua daripadanya, bersentuh |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dua bulatan atau lengkok pada satu pusat; dua panjang atau dua jejari sama |
| {{cmd:GCSYMMETRIC}} | dua titik, garisan atau bulatan dicerminkan merentasi satu garisan |
| {{cmd:GCFIX}} | satu titik (klik berhampirannya) atau satu objek penuh (`O`) di tempatnya |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | satu jarak |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | satu jejari, satu diameter, satu sudut antara dua garisan, atau sudut satu lengkok |

{{cmd:GEOMCONSTRAINT}} dan {{cmd:DIMCONSTRAINT}} bertanya yang mana satu; {{ui:Kekang}} dan {{ui:Dimensi}} dalam kumpulan {{ui:Parametrik}} menjalankannya, dan {{ui:Lagi}} di sana menyenaraikan setiap satu. Di mana anda klik menentukan bahagian yang dipilih: klik berhampiran hujung, tengah atau pusat mengambil titik itu; klik pada polisegmen mengambil segmen di bawahnya. Objek pertama kekal dan yang kedua bergerak untuk bertemu dengannya.

Kekangan yang bercanggah dengan yang lain, atau tidak menambah apa-apa kerana yang lain sudah membayangkannya, ditolak dengan mesej dan tiada apa yang bergerak.

## Lihat, pilih dan buang

- Klik kotak dalam bar kekangan (atau segi empat sama koinsiden, atau label dimensi) untuk memilih kekangan itu; sejarah menamakannya. Tekan {{key:Delete}} untuk membuangnya.
- {{cmd:DELCONSTRAINT}} membuang setiap kekangan daripada objek yang anda pilih.
- {{cmd:CONSTRAINTBAR}}: `S` menunjukkan semua bar, `H` menyembunyikannya; pilih objek dahulu untuk menunjuk atau menyembunyikan barnya. {{ui:Lagi}} mempunyai {{ui:Show constraint bars}} dan {{ui:Hide constraint bars}}.
- {{cmd:DCDISPLAY}} menunjuk atau menyembunyikan kekangan dimensi. Ia tidak pernah dicetak.
- {{cmd:DCCONVERT}} menukar dimensi yang dilukis pada garisan, bulatan dan lengkok kepada kekangan dimensi.

:::note
Jika anda pernah menggunakan lukisan parametrik AutoCAD, nama arahan dan gesaannya sama. Kekangan dan parameter disimpan dalam fail DWG dan DXF dalam bentuk yang diabaikan oleh program lain; lihat [Fail](topic:files#constraints-in-files).
:::
</content>
