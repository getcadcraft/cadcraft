---
title: Titik untuk program BIM
summary: Eksport titik, dan titik sisipan blok dengan huraian, kepada fail CSV atau TXT yang diimport oleh program BIM dan perisian tinjauan.
keywords: eksport titik, exportpoints, exppts, titik, csv, txt, pnezd, penzd, xyz, titik tinjauan, koordinat, bim, penandaan tapak, fail titik, northing, easting, aras
from: d80e2d53
---

## Apa yang akan anda hasilkan

Fail titik: satu baris bagi setiap titik, dengan nombornya, northing, easting, aras dan huraian, yang boleh diimport oleh program BIM (Revit dan Archicad antara lain) dan perisian tinjauan untuk meletakkan titik tinjauan, penanda tapak atau peralatan.

## Eksport titik

1. Pilih titik dan rujukan blok yang titik sisipannya anda mahu, atau tidak pilih apa-apa untuk mengambil setiap titik.
2. Taip {{cmd:EXPORTPOINTS}} (atau `EXPPTS`, atau {{ui:Blok}} › {{ui:Lagi}} › {{ui:Eksport titik}}) dan tekan {{key:Enter}} (tekan {{key:Enter}} sekali lagi pada `Pilih titik dan blok` apabila tiada apa yang dipilih).
3. Apabila anda memilih blok dengan atribut, CadCraft menyenaraikan tag mereka: taip yang nilainya ialah huraian (contohnya `ITEM`), atau apa-apa lain untuk menggunakan nama setiap blok.
4. Pilih lajur: `PNEZD` (titik, northing, easting, aras, huraian: yang biasa digunakan), `PENZD` (easting sebelum northing) atau `XYZ` (koordinat sahaja).
5. Pilih unit: `D` seperti dilukis, atau `M` meter atau `F` kaki (hanya apabila unit lukisan ditetapkan: {{ui:Sifat}} › {{ui:Unit}} dengan tiada apa yang dipilih).
6. Dengan UCS ditetapkan, pilih `W` dunia atau `U` koordinat UCS (lihat [UCS dan paparan berputar](topic:ucs-and-turned-view)).
7. Pilih `C` untuk `.csv` yang dipisahkan koma atau `T` untuk `.txt` yang dipisahkan tab, dan nombor titik pertama.

Fail dimuat turun sebagai `<drawing>-points.csv` (atau `.txt`), dan sejarah menyatakan berapa banyak titik yang dikandunginya.

## Apa yang ada dalam fail

- Satu titik bagi setiap baris, diakhiri dengan pemisah baris (CR LF), tiga tempat perpuluhan.
- Aras titik ialah Z-nya (0 apabila tiada). Titik blok ialah titik sisipannya.
- Huraian yang mengandungi koma (atau tab dalam TXT) atau tanda petikan diletakkan dalam tanda petikan berganda, dengan tanda petikannya digandakan.
- Format ini ialah format yang dibaca dan ditulis CivilCraft, jadi fail itu juga dibuka di sana sebagai titik.

## Kesilapan biasa

- Hanya `D` ditawarkan untuk unit: lukisan tidak mempunyai unit ditetapkan. Tetapkannya, atau tukar dalam program lain.
- Titik berada jauh dari tempat yang anda jangka dalam program lain: eksport koordinat dunia (`W`), atau UCS yang digunakan titik tinjauan program lain (`U`).
