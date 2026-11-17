---
title: Gambar raster dalam gambar
summary: Tempatkan gambar PNG atau JPEG, potong ke persegi panjang atau poligon, tampilkan gambar yang dipakai DWG, dan plot dengan tajam.
keywords: pastearea, parea, salin area, area yang disalin, markupcraft, ukuran sebenarnya, ukuran asli, overlay, ole, ole2frame, objek tertanam, tempel gambar, tempel tangkapan layar, ctrl+v, gambar clipboard, tangkapan layar, gambar, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plot, pdf, resolusi
from: 4025ac97
---

## Yang akan Anda buat

Logo perusahaan yang ditempatkan di kepala gambar, dipotong pada bagian yang Anda inginkan, dan sebuah PDF yang mencetaknya pada resolusinya sendiri.

## Tempatkan gambar raster

1. Ketik {{cmd:IMAGEATTACH}} (atau `IAT`) lalu tekan {{key:Enter}}. Pilih file PNG atau JPEG.
2. `Specify the lower-left corner`: klik, atau ketik titik.
3. `Specify its width`: lebar dalam satuan gambar. {{key:Enter}} mempertahankan lebar yang ditawarkan: satu satuan per piksel, atau lebar yang Anda berikan untuk file ini terakhir kali (prompt menyebutkannya).
4. `Specify its rotation angle`: {{key:Enter}} untuk tanpa rotasi.

Gambar adalah satu objek: pilih melalui bingkainya, dan pindahkan, salin, putar, skala, atau hapus seperti blok apa pun.

:::note
File gambar tetap bersama gambar selama gambar itu terbuka. DWG yang disimpan menyebutkan nama file, seperti yang dilakukan program lain; ia tidak menyimpan pikselnya. Simpan gambar raster di sebelah gambar.
:::

## Tempel tangkapan layar atau gambar yang disalin

1. Salin gambar (tangkapan layar dengan {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=alat tangkapan layar Anda}}, atau Salin gambar di program lain atau peramban).
2. Arahkan ke tempat yang Anda inginkan pada gambar dan tekan {{key:Mod+V}}.

Sudut kiri bawah gambar mendarat di penunjuk (atau di tengah tampilan), dengan lebar 40 % dari yang Anda lihat; pindahkan, skala, dan potong seperti gambar raster lainnya. Namanya adalah nama gambar ditambah `-picture-1.png` (lalu `-2`, …), dan riwayat menyebutkannya. {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Tempel gambar raster}} melakukan hal yang sama dari menu (peramban mungkin bertanya terlebih dahulu).

DWG hanya menyimpan nama file gambar raster, sehingga menyimpan gambar juga menyimpan gambar raster sebagai file tersendiri. Simpan keduanya di folder yang sama: gambar menampilkan gambar raster dari sana. Di peramban, itu adalah unduhan kedua, dan riwayat menyebutkannya. Jika clipboard hanya berisi objek CadCraft, {{key:Mod+V}} menempelkan objek tersebut, seperti sebelumnya.

## Tempel area yang disalin di MarkupCraft

{{ui:Salin area}} di MarkupCraft menyalin sebagian lembar sebagai gambar raster yang mengetahui ukurannya sendiri. CadCraft menempelkannya pada ukuran itu.

1. Di MarkupCraft, salin area (persegi panjang, lingkaran, atau bentuk bebas; {{ui:Salin sebagai overlay}} jika Anda ingin melihat gambar Anda melaluinya).
2. Di CadCraft, tekan {{key:Mod+V}}, atau ketik {{cmd:PASTEAREA}} (atau `PAREA`), atau pilih {{ui:Edit}} › {{ui:Lainnya}} › {{ui:Tempel area yang disalin}}.
3. `Specify the lower-left corner of the copied area`: klik, atau ketik titik. Bingkai seukuran area mengikuti penunjuk.

Seberapa besar ukuran hasilnya:

- **Lembar memiliki skala gambar:** pada ukuran sebenarnya, dalam satuan gambar (detail 1:50 dari tangga 2 m panjangnya 2 m di gambar satuan meter, 78.74 in di gambar satuan inci). Tidak ada lagi yang ditanyakan.
- **Lembar tidak memiliki skala:** CadCraft menyebutkan ukurannya di kertas dan meminta skala: ketik `100` untuk lembar 1:100, tekan {{key:Enter}} untuk ukuran kertas, atau ketik `P`, klik dua titik pada gambar yang ditempel dan ketik seberapa jauh jaraknya sebenarnya (seperti yang dilakukan {{cmd:SCANSCALE}}). Sudut kiri bawah tetap di tempat Anda meletakkannya.

Gambar tanpa satuan menggunakan milimeter, seperti underlay PDF. Overlay mempertahankan kertasnya tetap tembus pandang dan dimulai pudar seperti saat disalin; di luar lingkaran atau bentuk bebas juga tembus pandang. Area yang ditempel adalah gambar seperti gambar lainnya: pindahkan, putar, skala, potong, atau hapus, dan seluruh penempelan adalah satu langkah urung. Disimpan sebagai DWG, ia menjadi IMAGE dengan pudar dan transparansinya.

{{key:Mod+V}} menempelkan area saat gambar di clipboard adalah milik area itu, atau saat area disalin setelah apa pun yang Anda salin di CadCraft (dan dalam 6 jam terakhir). Jika tidak, ia menempelkan seperti sebelumnya. {{cmd:PASTEAREA}} menempelkan area yang terakhir disalin kapan saja.

## Tampilkan gambar raster yang dipakai DWG

DWG hanya menyimpan lokasi gambar rasternya, sehingga CadCraft menampilkan setiap gambar sebagai bingkai dengan nama filenya.

1. Ketik {{cmd:IMAGE}} (atau `IM`). Baris perintah mencantumkan setiap file gambar dan apakah ia tampil.
2. Pilih file-filenya (beberapa sekaligus). File yang namanya mengandung nama yang disebut gambar juga dihitung, karena ekspor sering menambahkan awalan proyek.

## Potong gambar raster

1. Ketik {{cmd:IMAGECLIP}} (atau `ICL`) dan pilih gambar.
2. Pilih `R` dan klik dua sudut, atau `P` dan klik titik-titik poligon, lalu tekan {{key:Enter}}. `D` menghapus potongan.

## Plot gambar raster

Gambar raster masuk ke PDF sebagai gambar, pada resolusinya sendiri dan di bawah garis. Dalam dialog {{ui:Plot}}, {{ui:Gambar raster}} dapat membatasinya hingga 600, 300, atau 150 dpi untuk membuat file lebih kecil. JPEG masuk apa adanya.

## Yang disimpan di mana

| Format | Gambar raster |
|---|---|
| DWG (setiap versi) | Sebagai gambar raster (IMAGE), dengan potongannya |
| DXF | Sebagai bingkainya dengan nama file; penyimpanan memberi tahu Anda |

## Objek dari program lain (OLE)

Sebuah gambar dapat berisi objek yang dibuat program lain, seperti gambar dari program cat atau rentang spreadsheet (objek OLE). CadCraft tidak menjalankan atau menyunting objek tersebut, dan tidak dapat menyisipkan yang baru. Yang dilakukannya:

- **Di DXF**, objek OLE terbuka sebagai bingkai. Jika objek menyimpan gambar dirinya dan gambar itu berupa bitmap, gambar itu digambar di dalam bingkai; jika tidak, bingkai memuat label dengan jenis objek, seperti "Microsoft Excel Worksheet (OLE)". Anda dapat memindahkan, menyalin, dan menghapus bingkai seperti blok. {{cmd:SAVEAS}} ke DXF 2000 menulisnya kembali sebagai objek OLE, dengan datanya tidak berubah.
- **Di DWG**, objek dipertahankan dan ditulis kembali saat Anda menyimpan sebagai DWG, byte demi byte, tetapi **tidak ditampilkan**: DWG menyimpan tempat objek di dalam datanya sendiri, dan CadCraft belum membacanya. Riwayat menyebutkan berapa banyak yang dipertahankan. Ketik {{cmd:OLELIST}} untuk melihat apa saja (jenis, ukuran, apakah masing-masing menyimpan gambar) dan untuk menempatkan salinan gambar di tempat yang Anda pilih: **Tempatkan** meminta nomor, sudut kiri bawah, dan lebar, lalu menggambar bingkai dengan gambar di dalamnya. Salinan itu adalah bingkai yang dapat Anda pindahkan atau hapus; objek aslinya tetap ada di gambar dan tetap ditulis kembali saat Anda menyimpan.
- Objek yang berasal dari DXF disimpan di DWG hanya sebagai bingkai dan labelnya; riwayat menyebutkannya. Simpan sebagai DXF 2000 untuk mempertahankan objek itu sendiri.
- Gambar metafil (yang disimpan banyak program) tidak digambar: bingkai dan label tampil sebagai gantinya.

## Kesalahan umum

| Yang Anda lihat | Penyebab | Solusi |
|---|---|---|
| Bingkai dengan nama file | CadCraft tidak memiliki file tersebut | {{cmd:IMAGE}}, lalu pilih filenya |
| "Itu bukan gambar raster" | Objek yang dipilih bukan gambar raster | Pilih bingkai gambar raster |
