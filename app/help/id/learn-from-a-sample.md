---
title: Belajar dari gambar contoh
summary: Buka contoh rumah atau contoh as-built CadCraft dan telusuri lembar, kepala gambar, dimensi, dan layer-nya.
keywords: contoh, contoh gambar, belajar, tutorial, panduan langkah demi langkah, kepala gambar, lembar, as-built, set arsitektur, buka contoh
from: aa1f960a
---

## Yang akan Anda pelajari

Bagaimana satu set gambar jadi disusun: ruang model, lembar dengan viewport pada suatu skala, kepala gambar dengan atribut, dimensi dalam kaki dan inci serta dalam milimeter, dan layer. Contoh-contoh ini milik CadCraft sendiri dan bebas dipakai untuk apa saja (CC0).

## Membuka contoh

1. Di panel kiri, di bawah {{ui:Gambar}}, klik {{ui:Buka contoh}} (atau ketik {{cmd:SAMPLES}}; pada gaya pita, perintah ini ada di menu {{ui:File}}).
2. Klik {{ui:Buka}} di samping {{ui:Contoh rumah}}. Contoh terbuka di tab tersendiri, sehingga pekerjaan Anda tetap terbuka.

## Menelusuri model

1. Klik {{ui:Batas}} (atau ketik `ZOOM`, lalu `E`): denah lantai, tampak depan, sebuah potongan, dan detail dinding.
2. Di {{ui:Layer}}, klik ikon mata di samping `A-ANNO-DIMS` untuk menyembunyikan dimensi, dan klik lagi untuk menampilkannya.
3. Klik sebuah pintu: Properti menampilkan referensi blok `DOOR-32`. Pintu dan jendela adalah blok, ditempatkan dalam keadaan diputar dan dicerminkan.

## Lembar

1. Klik {{ui:A-101 FLOOR PLAN}} di bawah gambar: lembar ARCH D dengan satu viewport pada 1/4" = 1'-0".
2. Klik ganda di dalam viewport untuk mengerjakan model melaluinya; klik ganda di luar untuk kembali.
3. {{ui:A-501 DETAILS}} menampilkan detail dinding pada 1 1/2" = 1'-0": model yang sama, skala lain.

## Kepala gambar

1. Pada lembar mana pun, klik ganda kepala gambar: {{ui:Edit atribut}} mencantumkan PROJECT, TITLE, SCALE, DATE, DRAWN, dan SHEET.
2. Ubah DRAWN menjadi inisial Anda dan klik {{ui:OK}}.
3. Untuk mengubah kepala gambarnya sendiri pada setiap lembar, pilih kepala gambar lalu pilih {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Edit di tempat}}. Lihat [Atribut](topic:attributes).

## As-built

Buka {{ui:Contoh as-built}} dengan cara yang sama. Titik-titik abu-abu pada `SCAN-SLICE` adalah irisan hasil pindaian; dinding pada `AB-WALL` ditelusuri di atasnya. Dinding timur melenceng 35 mm dari siku: dimensi menyatakannya dua kali, dalam milimeter (`AB-DIMS-MM`) dan dalam kaki dan inci (`AB-DIMS-FTIN`, panjang yang sama melalui skala pengukuran). Awan merah pada `REV-1` menandai apa yang ditemukan survei.

## Selanjutnya

- [Mengubah ukuran teks dimensi](topic:change-dimension-text-size)
- [Plot ke PDF](topic:plot-pdf): plot {{ui:A-101 FLOOR PLAN}}.
