---
title: Ubah ukuran teks dimensi
summary: Perbesar atau perkecil teks dimensi, untuk dimensi baru dan untuk dimensi yang sudah ada di gambar.
keywords: ukuran teks dimensi, tinggi teks, dimtxt, dimscale, teks dimensi terlalu kecil, teks dimensi terlalu besar, teks dimensi lebih besar, skala anotasi
from: 30e40633
---

## Untuk dimensi yang akan Anda buat berikutnya

1. Tekan {{key:Esc}} agar tidak ada yang dipilih: panel kanan menampilkan {{ui:Pengaturan saat ini}}.
2. Gulir panel ke bawah ke {{ui:Dimensi baru}}. Ketik tinggi yang Anda inginkan di atas kertas di {{ui:Tinggi teks}} (misalnya `2.5` untuk 2.5 mm, atau `3/32"`) dan tekan {{key:Enter}}.
3. Atur {{ui:Skala keseluruhan}} ke skala plot (`50` untuk 1:50, `48` untuk 1/4" = 1'-0"): setiap ukuran dikalikan dengan itu.

Pada baris perintah, {{cmd:DIMTXT}} mengatur tinggi dan {{cmd:DIMSCALE}} mengatur skala keseluruhan.

## Untuk dimensi yang sudah ada di gambar

1. Pilih dimensi (satu, atau beberapa: pilih {{ui:Dimensi}} di daftar di bagian atas Properti).
2. Ketik {{ui:Tinggi teks}} baru (di bagian {{ui:Teks}}), atau {{ui:Skala keseluruhan}} baru (di bagian {{ui:Penyesuaian}} lebih ke bawah), dan tekan {{key:Enter}}.

Dimensi digambar ulang seketika, dalam satu langkah urungkan. Dimensi dari file program lain digambar ulang dengan gaya CadCraft begitu Anda mengubahnya.

:::tip
Teks yang tampak benar di layar tetapi kecil sekali pada lembar yang diplot biasanya berarti skala keseluruhannya 1: atur ke skala lembar.
:::

Lihat [Atur ukuran dimensi, desimal dan skala](topic:dimension-settings) untuk setiap pengaturan.
