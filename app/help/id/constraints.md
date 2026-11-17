---
title: Batasi gambar
summary: Jaga garis tetap horizontal, ujung-ujungnya tetap bertemu, dan ukurannya tetap dengan batasan geometris dan dimensi, lalu biarkan gambar mengikuti saat Anda mengubah sebuah ukuran.
keywords: batasan, constraint, constraints, parametrik, parametric, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, derajat kebebasan, terbatasi penuh
from: f8f21fa4
---

## Yang akan Anda buat

Sebuah pelat yang lebarnya dapat Anda ubah di satu tempat: sisinya tetap siku, satu sudut tetap di tempatnya, dan tingginya tetap setengah dari lebarnya.

Batasan bekerja pada garis, polyline, lingkaran, busur, dan titik di tab {{ui:Model}}. Setiap batasan yang Anda tambahkan adalah satu langkah urungkan.

## Gambar dan batasi garis luarnya

1. Ketik `REC` lalu tekan {{key:Enter}}. Ketik `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Ketik `AUTOCONSTRAIN` lalu tekan {{key:Enter}}. Ketik `ALL`, {{key:Enter}}, lalu {{key:Enter}} sekali lagi.

   Riwayat menulis "4 batasan diterapkan". Kotak kecil dengan **H** dan **V** muncul di samping sisi-sisinya: inilah bilah batasan.
3. Ketik `GCFIX` lalu tekan {{key:Enter}}. Klik dekat sudut kiri bawah. Sebuah kotak dengan ⊕ muncul: sudut itu tetap di tempatnya.

`AUTOCONSTRAIN` menambahkan batasan berimpit di tempat ujung-ujung garis hampir bertemu, dan batasan horizontal atau vertikal di tempat garis hampir datar atau tegak. Ketik `S` pada prompt-nya untuk mengubah seberapa dekat (awalnya 0,05 satuan gambar dan 1°).

## Tambahkan ukurannya

1. Ketik `DCHORIZONTAL` lalu tekan {{key:Enter}}.
2. Klik dekat sudut kiri bawah, lalu dekat sudut kanan bawah.
3. Klik di bawah persegi panjang untuk garis dimensi.
4. Prompt menampilkan `Teks dimensi <d1=100>`. Ketik `width=120` lalu tekan {{key:Enter}}.

   Persegi panjang kini lebarnya 120, dan labelnya berbunyi `width=120`.
5. Ketik `DCVERTICAL` lalu tekan {{key:Enter}}, ketik `O` lalu tekan {{key:Enter}}, kemudian klik sisi kanan.
6. Klik di sebelah kanannya, ketik `width/2` lalu tekan {{key:Enter}}.

   Tingginya kini 60. Labelnya berbunyi `fx: d1=width/2`: sebuah ekspresi menggerakkannya.

Riwayat sekarang menyatakan bahwa garis luarnya terbatasi penuh. Untuk mengubah ukurannya, ubah `width` (lihat [Gunakan parameter dan persamaan](topic:parameters)), atau klik ganda label `width=120`, ketik nilai baru, lalu pilih {{ui:Terapkan}}.

## Memindahkan objek yang dibatasi

Pindahkan, putar, skala, grip, dan panel Properti semuanya mempertahankan batasan: objek yang Anda pindahkan ditahan, dan sisanya mengikuti. Jika batasan tidak dapat mengikuti, pengeditan tidak dilakukan dan riwayat menjelaskan alasannya, misalnya "Tidak dilakukan: batasan menahan objek itu di tempatnya". Menghapus objek juga menghapus batasannya.

## Cerminkan dan pangkas objek yang dibatasi

- {{cmd:MIRROR}} menyalin batasan di antara objek yang Anda cerminkan ke salinannya. Sisi (arah sentuhan garis singgung, sisi tempat jarak diukur) dihitung ulang untuk salinan cermin, dan dimensi yang disalin mendapat nama sendiri, seperti saat menempel. Dengan `Hapus objek sumber` `Y`, batasan tetap berada pada objek cermin. Riwayat menyebutkan berapa banyak yang ikut.
- {{cmd:TRIM}} mempertahankan batasan garis atau busur pada bagian yang tersisa: batasan pada ujung dipindahkan ke potongan yang masih memiliki ujung itu, aturan arah ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Parallel}}, {{ui:Perpendicular}}) berlaku pada setiap potongan, dan dimensi di antara dua ujung luar tetap mengukurnya. Batasan yang menahan bagian yang dipotong, atau panjang yang diubah pemangkasan ({{ui:Equal}}, sapuan busur), akan hilang. Lingkaran yang dipangkas tetap mempertahankan batasan pusat dan radiusnya. Polyline yang dipangkas kehilangan batasannya.

## Daftar batasan

| Perintah | Mempertahankan |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | sebuah garis atau segmen tetap datar atau tegak (`2P`: dua titik datar atau tegak) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dua garis sejajar, siku, atau segaris |
| {{cmd:GCCOINCIDENT}} | dua titik berimpit; `O`: sebuah titik pada garis, lingkaran, atau busur |
| {{cmd:GCTANGENT}} | sebuah garis dan lingkaran atau busur, atau dua di antaranya, saling menyentuh |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dua lingkaran atau busur dengan satu pusat; dua panjang atau dua radius sama |
| {{cmd:GCSYMMETRIC}} | dua titik, garis, atau lingkaran yang dicerminkan melintasi sebuah garis |
| {{cmd:GCFIX}} | sebuah titik (klik dekatnya) atau seluruh objek (`O`) tetap di tempatnya |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | sebuah jarak |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | sebuah radius, sebuah diameter, sudut di antara dua garis, atau sudut sebuah busur |

{{cmd:GEOMCONSTRAINT}} dan {{cmd:DIMCONSTRAINT}} menanyakan mana yang dimaksud; {{ui:Batasi}} dan {{ui:Dimensi}} pada grup {{ui:Parametrik}} menjalankannya, dan {{ui:Lainnya}} di sana mencantumkan masing-masing. Tempat Anda mengklik menentukan bagiannya: klik dekat ujung, tengah, atau pusat mengambil titik itu; klik pada polyline mengambil segmen di bawahnya. Objek pertama tetap, dan objek kedua bergerak untuk bertemu dengannya.

Batasan yang bertentangan dengan batasan lain, atau tidak menambah apa pun karena batasan lain sudah menyiratkannya, ditolak dengan pesan dan tidak ada yang bergerak.

## Lihat, pilih, dan hapus

- Klik kotak pada bilah batasan (atau kotak berimpit, atau label dimensi) untuk memilih batasan itu; riwayat menyebutkan namanya. Tekan {{key:Delete}} untuk menghapusnya.
- {{cmd:DELCONSTRAINT}} menghapus setiap batasan dari objek yang Anda pilih.
- {{cmd:CONSTRAINTBAR}}: `S` menampilkan semua bilah, `H` menyembunyikannya; pilih objek lebih dulu untuk menampilkan atau menyembunyikan bilahnya. {{ui:Lainnya}} memiliki {{ui:Tampilkan bilah batasan}} dan {{ui:Sembunyikan bilah batasan}}.
- {{cmd:DCDISPLAY}} menampilkan atau menyembunyikan batasan dimensi. Batasan dimensi tidak pernah tercetak.
- {{cmd:DCCONVERT}} mengubah dimensi yang digambar pada garis, lingkaran, dan busur menjadi batasan dimensi.

:::note
Jika Anda pernah memakai gambar parametrik AutoCAD, nama perintah dan prompt-nya sama. Batasan dan parameter disimpan dalam file DWG dan DXF dalam bentuk yang diabaikan program lain; lihat [File](topic:files#constraints-in-files).
:::
