---
title: Buka DWG CadCraft di program lain
summary: Program mana saja tempat DWG yang disimpan CadCraft telah dibuka, apa yang diperiksa, dan apa yang harus dilakukan ketika salah satu program mengeluh.
keywords: dwg, buka di program lain, kompatibilitas, apakah bisa dibuka, audit, trueview, program cad lain, dxf, periksa, simpan sebagai dwg
from: 0f8c15c4
---

## Yang ditulis CadCraft

{{ui:Simpan}} menulis DWG asli, dalam versi yang dimiliki gambar saat masuk atau yang Anda pilih di {{ui:Simpan sebagai}}: AutoCAD 2000, 2004, 2007, 2010, 2013, atau 2018. Tidak ada yang dikonversi diam-diam: riwayat mencantumkan apa pun yang berubah di tengah jalan (misalnya warna sejati yang ditulis sebagai warna standar terdekat dalam DWG 2000).

## Tempat file ini sudah dibuka

Setiap DWG yang ditulis CadCraft dibuka, di setiap versi, oleh tiga program yang bukan CadCraft: ODA File Converter (yang memeriksa file dan tidak memperbaiki apa pun di dalamnya), LibreDWG, dan libdxfrw. Pembacaan mereka dibandingkan dengan pembacaan CadCraft: objek, layer, blok dan atribut, dimensi, hatch, lembar dan viewport-nya.

Membuka file DWG CadCraft di AutoCAD dan di DWG TrueView gratis sedang diperiksa di Windows, jenis objek demi jenis objek (AUDIT, layer, lembar, dimensi, hatch, atribut, blok dinamis, referensi yang dipotong, gambar raster). Hasilnya akan dicantumkan di sini setelah tersedia.

## Ketika program lain mengeluh

1. Simpan lagi sebagai DXF ({{ui:Simpan sebagai}} › {{ui:DXF 2000}}) lalu buka itu: kebanyakan program membaca DXF.
2. Simpan DWG dalam versi yang lebih lama (2013 atau 2010).
3. Beri tahu kami di Discord program dan versi apa, serta apa yang dikatakannya; file tersebut sangat membantu.
