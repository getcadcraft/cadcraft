---
title: Format point cloud: apa yang dilampirkan, dan apa yang diekspor
summary: File pemindaian laser mana yang dilampirkan di bawah gambar, mana yang merupakan format milik pembuat pemindai, dan apa yang diekspor dari perangkat lunak pemindai agar pemindaian dapat dilampirkan di sini.
keywords: point cloud, pointcloudattach, pcattach, pemindaian laser, pindai, format, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, ekspor, tidak dapat dibuka, tidak dibaca
from: 20a5f4ee
---

## Yang dilampirkan di sini

Lampirkan ini dengan {{cmd:POINTCLOUDATTACH}}, {{ui:Open}}, atau dengan menjatuhkannya di halaman (lihat topik tentang menelusuri garis as-built di atas point cloud):

| Format | Ekstensi | Yang dibaca |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: titik, warna, intensitas, kelas LiDAR, sistem koordinat dan satuannya. LAZ hingga 1 GB. |
| E57 | `.e57` | Setiap pemindaian dalam file, masing-masing ditempatkan sesuai posenya; warna, atau intensitas ketika file tidak memiliki warna; meter. Gambar dalam file ditinggalkan (dinyatakan). Hingga 6 juta titik dan 512 MB untuk saat ini: ekspor pemindaian yang lebih besar sebagai LAS atau LAZ. |
| PLY | `.ply` | Teks dan biner (kedua urutan byte): koordinat x y z vertex, warna, dan intensitas. Muka ditinggalkan (dinyatakan). |
| PCD | `.pcd` | Teks dan biner: x y z, warna terkemas atau terpisah, intensitas. File PCD terkompresi belum dibaca: simpan sebagai biner atau teks. |
| PTX | `.ptx` | Satu atau lebih pemindaian, masing-masing ditempatkan dengan transformasinya sendiri; titik yang tidak diukur pemindai ditinggalkan. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Teks: x y z, dengan intensitas dan warna ketika kolomnya ada. |

## File yang hanya dibaca perangkat lunak pemindai

Beberapa file pemindaian adalah format milik pembuat pemindai, tanpa deskripsi yang dipublikasikan dan tanpa pembaca terbuka. CadCraft tidak dapat membacanya: melampirkan salah satunya mencetak apa itu dan apa yang harus dilakukan di baris perintah. Ekspor pemindaian dari perangkat lunak pembuatnya sebagai E57 atau LAS (atau PTX, PTS), lalu lampirkan file hasil ekspor.

| File | Ekstensi | Ekspor dari |
|---|---|---|
| Proyek ReCap | `.rcp` | ReCap: buka proyek dan ekspor. Proyek hanya menunjuk ke pemindaiannya, sehingga menyalin `.rcp` saja tidak memberikan titik apa pun. |
| Pemindaian ReCap | `.rcs` | ReCap: buka proyek tempat pemindaian itu berada dan ekspor. |
| Pemindaian FARO | `.fls` | FARO SCENE. |
| Pemindaian Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Pemindaian Trimble | `.tzf` | Trimble RealWorks atau Trimble Business Center. |
| Pemindaian Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Ketika ekspor meminta format, LAS atau LAZ mempertahankan semua yang digunakan CadCraft (warna, intensitas, kelas, sistem koordinat dan satuannya) dalam file yang paling kecil.
:::

## Mengapa file ini tidak dibaca

Format-format itu tidak dipublikasikan, dan satu-satunya cara membacanya adalah dengan pustaka perangkat lunak masing-masing pembuat, di bawah ketentuannya sendiri. CadCraft hanya membaca format yang dapat dibacanya dengan kodenya sendiri di komputer Anda, sehingga sebuah pemindaian tidak pernah perlu dikirim ke mana pun untuk dilampirkan.
