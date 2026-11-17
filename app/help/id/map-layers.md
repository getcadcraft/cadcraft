---
title: Layer peta di bawah gambar
summary: Tampilkan peta jalan, foto udara, atau gambar dengan world file di bawah ruang model, diposisikan oleh sistem koordinat gambar.
keywords: peta, layer peta, maplayers, ml, geomap, peta dasar, basemap, udara, satelit, tiles, xyz, wms, wmts, layanan peta, map service, world file, sistem koordinat, epsg, state plane, utm, georeferensi, denah tapak, geolokasi, lokasi geografis, geodata, tersimpan, dwg, dxf
from: f103045f
---

## Yang akan Anda buat

Denah tapak yang digambar di atas foto udara atau peta jalan, masing-masing di tempat yang tepat.

## Beri tahu CadCraft di mana gambar berada

1. Atur satuan gambar di {{ui:Properti}} › {{ui:Satuan}} (misalnya kaki atau meter).
2. Ketik {{cmd:MAPLAYERS}} (atau `ML`) dan tekan {{key:Enter}}.
3. Di bawah {{ui:Lokasi gambar}}, ketik nama atau kode EPSG di {{ui:Cari sistem}} (misalnya `2277` atau `Texas Central`), lalu pilih di {{ui:Sistem}}.
4. Jika gambar digambar dalam koordinat sistem itu sendiri, biarkan penempatan di 0. Jika tidak, berikan satu titik gambar ({{ui:X gambar}}, {{ui:Y gambar}}), tempat titik itu berada pada grid peta ({{ui:Easting}}, {{ui:Northing}}), dan seberapa jauh gambar diputar dari timur ({{ui:Diputar (°)}}).
5. Klik {{ui:Gunakan sistem ini}}.

## Tambah layer

1. Aktifkan {{ui:Layer peta dari internet}} di bagian atas dialog. Sampai saat itu tidak ada server yang diminta apa pun; ketika aktif, server yang Anda tambahkan melihat area di layar dan alamat internet Anda, tidak pernah gambar Anda.
2. Di {{ui:Tambahkan layer}}, pilih asalnya:
   - **Tiles (XYZ)**: alamat tile dengan `{z}`, `{x}`, dan `{y}`, sebuah nama, dan kredit yang diminta penyedianya.
   - **WMS**, **WMTS**, atau **ArcGIS**: alamat layanan, lalu {{ui:Ambil layer}} dan pilih satu.
   - **Gambar raster**: PNG atau JPEG dengan world file-nya (dan file `.prj`-nya jika ada).
3. Layer tampil di bawah gambar. Kreditnya tampil di pojok kanan bawah gambar.

Setiap layer dalam daftar dapat disembunyikan, dibuat lebih atau kurang tembus pandang, dipindah ke atas atau bawah, atau dihapus.

Setiap perubahan pada sistem atau layer adalah satu langkah {{cmd:UNDO}}.

## Tersimpan bersama gambar

Sistem koordinat dan daftar layer disimpan di dalam gambar saat Anda menyimpannya sebagai DWG atau DXF, dan kembali saat Anda membukanya lagi, di komputer mana pun. Gambar dari file tidak disimpan: tambahkan lagi setelah membuka. Sakelar {{ui:Layer peta dari internet}} tidak disimpan di dalam gambar: sakelar itu milik peramban ini, sehingga gambar yang dikirim seseorang kepada Anda tidak meminta apa pun dari server sampai Anda mengaktifkannya sendiri.

Yang dilihat program lain:

| Disimpan sebagai | Lokasi gambar | Layer peta |
|---|---|---|
| DWG 2010, 2013, atau 2018, DXF 2000 | Ditulis dengan cara standar program membaca lokasi geografis gambar: kode EPSG sistem, satu titik gambar dan posisinya pada grid peta, satuan, dan utara. | Hanya CadCraft |
| DWG 2000, 2004, atau 2007, DXF R12 | Hanya CadCraft (CadCraft menyatakannya saat Anda menyimpan) | Hanya CadCraft |

- **Sudah diuji:** ODA File Converter membaca lokasi tanpa galat, dan pustaka DXF ezdxf membaca kode EPSG serta penempatannya dengan tepat.
- **Belum diuji:** apakah program gambar lain mengenali sistem dari kode EPSG-nya. Program yang memiliki daftar sistem sendiri dengan nama lain mungkin menampilkan gambar tanpa lokasi.
- Program lain menampilkan blok bernama `CADCRAFT_GEO` dalam daftar blok. Itu salinan CadCraft sendiri atas sistem dan layer; blok itu tidak pernah ditempatkan dalam gambar. Biarkan saja di sana.

## Gambar dari program lain

Saat gambar dari program lain memiliki lokasi geografis, CadCraft membacanya:

- Jika gambar menyebut kode EPSG, {{ui:Lokasi gambar}} menampilkan sistem itu dan layer peta diposisikan olehnya.
- Jika CadCraft tidak mengenal sistemnya (nama program lain untuk sistem itu, grid lokal, atau faktor skala), lokasi tidak dipakai, tetapi disimpan dan dikembalikan apa adanya, sehingga program lain tetap menemukannya. Pilih sistem di {{ui:Lokasi gambar}} untuk menggantinya.

:::note
Layer peta hanya digambar di layar: tidak dicetak. Gunakan hanya layanan peta yang ketentuannya mengizinkannya, dan jaga agar kreditnya tetap terlihat.
:::
