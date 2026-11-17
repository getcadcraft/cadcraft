---
title: Buka DWG, sunting, dan simpan salinan
summary: Buka gambar yang dikirim seseorang kepada Anda, periksa apa yang masuk, buat perubahan, dan kirim kembali salinan sebagai DWG atau DXF.
keywords: dwg, dxf, buka, impor, ekspor, simpan, r12, bolak-balik, konsultan, xref, periksa gambar, saveas, simpan sebagai, simpan dwg, format
from: 49de4bf6
---

## Yang akan Anda lakukan

Buka DWG dari konsultan, periksa apa yang bisa dan tidak bisa ditampilkan CadCraft, tambahkan catatan, cetak lembar ke PDF, dan simpan salinan untuk dikirim kembali, sebagai DWG atau DXF.

## Buka file

1. Tekan {{key:Mod+O}}, atau klik {{ui:Open}}.
2. Pilih file `.dwg`.

Baris status menampilkan "Membaca …" saat gambar dibaca. Saat selesai, gambar memenuhi layar, dan riwayat menyebutkan, misalnya, "Dibuka plan.dwg: 18,240 objek pada 64 layer", beserta lamanya waktu.

:::offline
Anda sedang offline. Jika tombol {{ui:Save for offline}} bertuliskan "Siap offline", file DWG terbuka seperti biasa. Jika tidak, dan belum ada DWG yang dibuka di tab ini, membuka DWG bisa gagal karena pembaca DWG CadCraft diambil bersama DWG pertama: buka DXF sebagai gantinya, atau simpan CadCraft untuk penggunaan offline saat Anda online lagi. Lihat [Bekerja offline](common:offline).
:::

## Periksa apa yang masuk

1. Lihat bagian {{ui:Drawing}} di panel kiri: format dan versi, satuan, jumlah objek dan layer, serta lembar.
2. Baca kotak "Tentang file ini" di bawahnya, jika ada.

Kotak itu mencantumkan:

- **Belum ditampilkan:** objek yang belum bisa digambar CadCraft, menurut jenis dan jumlahnya. Objek itu dibiarkan keluar, tidak ditebak.
- **Layout (lembar) ikut masuk:** bukalah dengan tab di bawah gambar.
- **Dimensi yang hanya bisa dibaca seperti yang digambar.**

3. Klik tab di bawah gambar untuk melihat setiap lembar.
4. Periksa {{ui:Units}} di {{ui:Current settings}} (tidak ada yang dipilih, tab {{ui:Model}}). Jika tertulis {{ui:Unitless}} tetapi Anda tahu gambarnya dalam milimeter, atur, agar skala lembar dan cetakan terbaca benar.

:::tip
Jika Anda mengharapkan sebagian gambar dan tidak bisa melihatnya, periksa panel {{ui:Layers}}: layer mungkin dimatikan atau dibekukan dalam file. Klik namanya untuk menjadikannya aktif; itu akan menyalakannya.
:::

## Buat perubahan Anda

1. Buat layer untuk catatan Anda: klik {{ui:New layer}}, ketik `NOTES` dan tekan {{key:Enter}}.
2. Ketik `DT` dan tekan {{key:Enter}}.
3. Klik tempat catatan itu diletakkan.
4. Ketik tinggi teks yang sesuai dengan gambar (lihat [Tambahkan teks dan label](topic:text)) dan tekan {{key:Enter}}.
5. Tekan {{key:Enter}} untuk mempertahankan rotasi 0.
6. Ketik catatan Anda dan tekan {{key:Enter}}.
7. Tekan {{key:Enter}} lagi untuk selesai.

Pengeditan dimensi yang diimpor tidak masalah: begitu Anda mengubahnya, CadCraft menggambarnya ulang dengan gayanya sendiri.

## Cetak lembar untuk ditinjau

1. Klik tab lembar.
2. Tekan {{key:Mod+P}}.
3. Klik {{ui:Download PDF}}.

Lihat [Cetak ke PDF](topic:plot-pdf).

## Simpan salinan

1. Tekan {{key:Mod+S}}, atau klik {{ui:Save}}.

Anda membuka DWG, jadi peramban mengunduh `<name>.dwg`, dalam versi tempat DWG itu datang. Riwayat menyebutkan, misalnya, "Salinan disimpan sebagai Plan.dwg (DWG (AutoCAD 2018))." dan mencantumkan, pada baris di bawahnya, apa pun yang berubah di sepanjang jalan.

2. Baca baris-baris itu sebelum Anda mengirim file. [Apa yang disimpan dan diubah DWG](topic:files#what-a-dwg-keeps-and-changes) menjelaskan masing-masing.

DWG asli Anda tidak pernah diubah. Setiap penyimpanan adalah unduhan baru.

## Simpan sebagai DWG atau DXF

Untuk memilih format sendiri:

1. Tekan {{key:Mod+Shift+S}}, atau klik {{ui:Save as}}.

Dialog {{ui:Save a copy as}} terbuka dengan empat pilihan, masing-masing dengan nama file yang akan diberikannya: {{ui:DWG}}, dengan daftar {{ui:Version}}-nya, `DXF R12`, {{ui:DXF 2000}} dan {{ui:DXF 2000 (binary)}}. Format dan versi gambar saat ini sudah dipilih.

2. Klik format yang Anda inginkan. Untuk DWG, pilih versi yang dipakai kantor lain, atau versi yang lebih lama: AutoCAD 2018, 2013, 2010, 2007, 2004, atau 2000.
3. Klik {{ui:Save}}.

Salinan diunduh. Mulai sekarang, {{key:Mod+S}} menyimpan gambar ini dalam format itu, dan gambar baru juga memulai dengannya, di peramban ini. {{ui:Cancel}} atau {{key:Esc}} tidak menyimpan apa pun, dan riwayat menulis "Tidak disimpan."

Pilih yang mana:

- **DWG** menyimpan paling banyak: lembar dengan viewport-nya, dimensi sungguhan, pola hatch, nama layer dan blok seperti yang Anda ketik, serta teks multibaris sebagai teks multibaris. Versi AutoCAD 2000 terbuka di paling banyak program; 2004 dan yang lebih baru juga menyimpan warna sebenarnya.
- **DXF 2000** adalah file teks yang menyimpan hampir semua yang disimpan DWG: setiap lembar sebagai layout dengan viewport-nya, dimensi sungguhan, pola hatch, warna sebenarnya, tebal garis, jenis garis, dan nama seperti yang Anda ketik. Ia terbuka di AutoCAD 2000 dan yang lebih baru serta sebagian besar program CAD. Multileader menjadi garis, mata panah, dan teks yang digambarnya. DXF yang dibuka dalam versi 2000 atau lebih baru disimpan sebagai DXF 2000.
- **DXF 2000 (binary)** berisi konten yang sama dengan DXF 2000 dalam bentuk biner format itu: file yang lebih kecil yang menyimpan setiap angka dengan tepat. File DXF biner dari program lain terbuka seperti file teks, dan gambar yang dibuka dari DXF biner disimpan kembali sebagai biner.
- **DXF R12** terbuka di hampir semua program CAD. Ia menyimpan lembar pertama dengan viewport-nya, dan lembar CadCraft lainnya. Ia menyederhanakan hal-hal yang lebih baru, seperti teks multibaris dan hatch.

## Apa yang akan dilihat kantor lain

Dalam DWG:

- Garis, busur, lingkaran, elips, polyline, teks, teks multibaris, blok dengan atributnya, isian padat, pola hatch, dan layer seperti yang Anda lihat.
- Dimensi sungguhan: program lain mengukurnya ulang saat diregangkan.
- Setiap lembar, dengan kertas dan viewport-nya.
- Multileader sebagai multileader. Dalam versi AutoCAD 2000, warna sebenarnya menjadi warna standar terdekat.

Dalam DXF R12:

- Garis, busur, lingkaran, polyline, teks, referensi blok, dan dimensi seperti yang Anda lihat. Dimensi tetap sebagai dimensi sungguhan.
- Nama layer dalam huruf kapital, dengan spasi diganti `_`.
- Lembar pertama sebagai ruang kertas gambar, dengan viewport-nya. Lembar berikutnya tiba sebagai blok bernama `CCLAYOUT_1` dan seterusnya; jika mereka membutuhkan setiap lembar sebagai layout, cetak PDF setiap lembar untuk mereka juga.
- Teks multibaris sebagai baris terpisah, elips sebagai polyline, hatch sebagai garis tepi.

Bagaimanapun, apa pun yang tercantum sebagai "Belum ditampilkan" saat Anda membuka DWG **tidak** ada dalam salinan, kecuali riwayat menyebutkan bahwa ia dipertahankan: objek OLE DWG dan solid 3D-nya di ruang model ditulis kembali saat Anda menyimpan sebagai DWG. Beri tahu mereka, dan kirim PDF juga.

## Kesalahan umum

- **"CadCraft membuka gambar DWG dan DXF."** File memiliki ekstensi lain. Pastikan itu `.dwg` atau `.dxf`.
- **"Gambar ini tidak dapat dibaca."** DWG rusak atau dalam versi yang tidak ditangani pembaca. Minta DXF, atau DWG yang disimpan dalam versi lebih lama.
- **"File DXF biner ini berakhir di tengah sebuah objek."** File terpotong atau rusak. Ketik RECOVER untuk membuka bagian yang bisa dibaca, atau minta file itu lagi.
- **File yang disimpan bernama `name (1).dwg` atau `name (1).dxf`.** Peramban melakukan itu saat file dengan nama yang sama sudah ada di folder.
- **Mereka punya program lama yang tidak bisa membuka DWG.** Simpan sebagai DWG dengan {{ui:Version}} {{ui:AutoCAD 2000}}, atau sebagai `DXF R12`: hampir semua program CAD membukanya.
- **Sebagian gambar hilang.** Gambar tertaut (xref) tidak dimuat sampai Anda memilih file-nya ({{cmd:XREF}}, `R`), dan gambar tampil sebagai bingkai dengan nama file-nya.
