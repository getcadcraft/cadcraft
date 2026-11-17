---
title: Letakkan lapisan peta di bawah lukisan
summary: Tunjukkan peta jalan, gambar udara atau gambar dengan fail dunia di bawah ruang model, diletakkan mengikut sistem koordinat lukisan.
keywords: peta, lapisan peta, maplayers, ml, geomap, basemap, udara, satelit, jubin, xyz, wms, wmts, perkhidmatan peta, fail dunia, sistem koordinat, epsg, state plane, utm, georujukan, pelan tapak, geolokasi, lokasi geografi, geodata, disimpan, dwg, dxf
from: f103045f
---

## Apa yang akan anda hasilkan

Pelan tapak dilukis di atas gambar udara atau peta jalan, setiap satu di tempat yang betul.

## Beritahu CadCraft di mana lukisan itu

1. Tetapkan unit lukisan dalam {{ui:Sifat}} › {{ui:Unit}} (contohnya kaki atau meter).
2. Taip {{cmd:MAPLAYERS}} (atau `ML`) dan tekan {{key:Enter}}.
3. Di bawah {{ui:Di mana lukisan itu}}, taip nama atau kod EPSG dalam {{ui:Cari sistem}} (contohnya `2277` atau `Texas Central`) dan pilih dalam {{ui:Sistem}}.
4. Jika lukisan dilukis dalam koordinat sistem itu sendiri, biarkan penempatan pada 0. Jika tidak, berikan satu titik lukisan ({{ui:X Lukisan}}, {{ui:Y Lukisan}}), di mana titik itu berada pada grid peta ({{ui:Easting}}, {{ui:Northing}}), dan sejauh mana lukisan dipusingkan dari timur ({{ui:Dipusingkan (°)}}).
5. Klik {{ui:Guna sistem ini}}.

## Tambah lapisan

1. Hidupkan {{ui:Lapisan peta daripada internet}} di bahagian atas dialog. Sehingga itu tiada apa yang diminta daripada mana-mana pelayan; apabila ia dihidupkan, pelayan yang anda tambah melihat kawasan pada skrin dan alamat internet anda, bukan lukisan anda.
2. Dalam {{ui:Tambah lapisan}}, pilih dari mana ia berasal:
   - **Jubin (XYZ)**: alamat jubin dengan `{z}`, `{x}` dan `{y}`, nama dan kredit yang diminta oleh pembekalnya.
   - **WMS**, **WMTS** atau **ArcGIS**: alamat perkhidmatan, kemudian {{ui:Dapatkan lapisan}} dan pilih satu.
   - **Gambar**: PNG atau JPEG dengan fail dunianya (dan `.prj`nya apabila ada).
3. Lapisan itu ditunjukkan di bawah lukisan. Kreditnya ditunjukkan di sudut kanan bawah lukisan.

Setiap lapisan dalam senarai boleh disembunyikan, dijadikan lebih atau kurang lut sinar, dialihkan ke atas atau ke bawah, atau dialih keluar.

Setiap perubahan pada sistem atau lapisan ialah satu langkah {{cmd:UNDO}}.

## Disimpan bersama lukisan

Sistem koordinat dan senarai lapisan disimpan dalam lukisan apabila anda menyimpannya sebagai DWG atau DXF, dan kembali apabila anda membukanya semula, pada mana-mana komputer. Gambar daripada fail tidak disimpan: tambahkannya semula selepas membuka. Suis {{ui:Lapisan peta daripada internet}} tidak disimpan dalam lukisan: ia milik pelayar ini, jadi lukisan yang dihantar kepada anda tidak meminta apa-apa daripada pelayan sehingga anda menghidupkannya sendiri.

Apa yang dilihat oleh program lain:

| Disimpan sebagai | Lokasi lukisan | Lapisan peta |
|---|---|---|
| DWG 2010, 2013 atau 2018, DXF 2000 | Ditulis mengikut cara standard program membaca lokasi geografi lukisan: kod EPSG sistem, satu titik lukisan dan di mana ia berada pada grid peta, unit dan utara. | CadCraft sahaja |
| DWG 2000, 2004 atau 2007, DXF R12 | CadCraft sahaja (CadCraft memaklumkannya apabila anda menyimpan) | CadCraft sahaja |

- **Diperiksa:** ODA File Converter membaca lokasi tanpa ralat, dan pustaka DXF (ezdxf) membaca kod EPSG dan penempatan dengan tepat.
- **Belum diperiksa:** sama ada program lukisan lain mengenali sistem daripada kod EPSGnya. Program yang menyimpan senarai sistem sendiri dengan nama lain mungkin menunjukkan lukisan tanpa lokasi.
- Program lain menunjukkan blok bernama `CADCRAFT_GEO` dalam senarai blok. Ia ialah salinan CadCraft bagi sistem dan lapisan; ia tidak pernah diletakkan dalam lukisan. Biarkan di situ.

## Lukisan daripada program lain

Apabila lukisan daripada program lain mempunyai lokasi geografi, CadCraft membacanya:

- Jika ia menamakan kod EPSG, {{ui:Di mana lukisan itu}} menunjukkan sistem itu dan lapisan peta diletakkan olehnya.
- Jika CadCraft tidak mengenali sistem itu (nama program lain untuknya, grid tempatan, atau faktor skala), lokasi itu tidak digunakan, tetapi ia disimpan dan disimpan semula seperti asalnya, supaya program lain masih menjumpainya. Pilih sistem dalam {{ui:Di mana lukisan itu}} untuk menggantikannya.

:::note
Lapisan peta dilukis pada skrin sahaja: ia tidak dicetak. Gunakan hanya perkhidmatan peta yang terma-termanya membenarkannya, dan pastikan kreditnya kekal kelihatan.
:::
