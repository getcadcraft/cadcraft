---
title: Titik untuk program BIM
summary: Ekspor titik, dan titik sisip blok dengan deskripsi, ke file CSV atau TXT yang diimpor program BIM dan survei.
keywords: exportpoints, ekspor titik, titik, csv, txt, pnezd, penzd, xyz, titik survei, koordinat, bim, setting out, file titik, northing, easting, elevasi
from: d80e2d53
---

## Yang akan Anda buat

Sebuah file titik: satu baris per titik, dengan nomornya, northing, easting, elevasi, dan deskripsi, yang dapat diimpor program BIM (antara lain Revit dan Archicad) dan perangkat lunak survei untuk menempatkan titik survei, penanda lokasi, atau peralatan.

## Ekspor titik

1. Pilih titik dan referensi blok yang titik sisipnya ingin Anda ekspor, atau jangan pilih apa pun untuk mengambil setiap titik.
2. Ketik {{cmd:EXPORTPOINTS}} (atau `EXPPTS`, atau {{ui:Blocks}} › {{ui:More}} › {{ui:Export points}}) dan tekan {{key:Enter}} (tekan {{key:Enter}} lagi pada `Pilih titik dan blok` ketika tidak ada yang dipilih).
3. Ketika Anda memilih blok dengan atribut, CadCraft mendaftarkan tag-nya: ketik tag yang nilainya adalah deskripsi (misalnya `ITEM`), atau ketik apa pun selain itu untuk memakai nama setiap blok.
4. Pilih kolom: `PNEZD` (titik, northing, easting, elevasi, deskripsi: yang biasa), `PENZD` (easting sebelum northing), atau `XYZ` (hanya koordinat).
5. Pilih satuan: `D` seperti yang digambar, `M` meter, atau `F` kaki (hanya ketika satuan gambar diatur: Properti › {{ui:Units}} dengan tidak ada yang dipilih).
6. Ketika UCS diatur, pilih `W` dunia atau `U` koordinat UCS (lihat [UCS dan tampilan berputar](topic:ucs-and-turned-view)).
7. Pilih `C` untuk `.csv` yang dipisahkan koma, atau `T` untuk `.txt` yang dipisahkan tab, dan nomor titik pertama.

File diunduh sebagai `<drawing>-points.csv` (atau `.txt`), dan riwayat menyebutkan berapa banyak titik yang dimuatnya.

## Isi file

- Satu titik per baris, diakhiri dengan pindah baris (CR LF), tiga desimal.
- Elevasi titik adalah Z-nya (0 jika tidak ada). Titik blok adalah titik sisipnya.
- Deskripsi yang memuat koma (atau tab dalam TXT) atau tanda kutip diapit tanda kutip ganda, dengan tanda kutipnya digandakan.
- Formatnya adalah format yang dibaca dan ditulis CivilCraft, sehingga file juga terbuka di sana sebagai titik.

## Kesalahan umum

- Hanya `D` yang ditawarkan untuk satuan: gambar belum memiliki satuan. Atur satuannya, atau konversikan di program lain.
- Titik-titiknya jauh dari yang Anda harapkan di program lain: ekspor koordinat dunia (`W`), atau UCS yang digunakan titik survei program lain (`U`).
