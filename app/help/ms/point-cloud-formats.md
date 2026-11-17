---
title: Format awan titik: apa yang dilampirkan, dan apa yang perlu dieksport
summary: Fail imbasan laser mana yang dilampirkan di bawah lukisan, mana yang merupakan format sendiri pengeluar pengimbas, dan apa yang perlu dieksport daripada perisian pengimbas supaya imbasan itu dilampirkan di sini.
keywords: awan titik, pointcloudattach, pcattach, imbasan laser, imbasan, format, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, tidak boleh dibuka, tidak dibaca
from: 20a5f4ee
---

## Apa yang dilampirkan di sini

Lampirkan ini dengan {{cmd:POINTCLOUDATTACH}}, {{ui:Buka}} atau dengan melepaskannya pada halaman (lihat topik tentang menjejak garisan as-built atas awan titik):

| Format | Sambungan | Apa yang dibaca |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: titik, warna, keamatan, kelas LiDAR, sistem koordinat dan unitnya. LAZ sehingga 1 GB. |
| E57 | `.e57` | Setiap imbasan dalam fail, diletakkan mengikut kedudukannya; warna, atau keamatan apabila fail tiada warna; meter. Gambar dalam fail ditinggalkan (dinyatakan). Sehingga 6 juta titik dan 512 MB buat masa ini: eksport imbasan yang lebih besar sebagai LAS atau LAZ. |
| PLY | `.ply` | Teks dan binari (kedua-dua susunan bait): x y z bucu, warna dan keamatan. Muka ditinggalkan (dinyatakan). |
| PCD | `.pcd` | Teks dan binari: x y z, warna dipadatkan atau berasingan, keamatan. Fail PCD yang dimampatkan belum dibaca: simpan sebagai binari atau teks. |
| PTX | `.ptx` | Satu atau lebih imbasan, setiap satu diletakkan oleh transformasinya sendiri; titik yang tidak diukur pengimbas ditinggalkan. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Teks: x y z, dengan keamatan dan warna apabila lajurnya ada. |

## Fail yang hanya dibaca oleh perisian pengimbas

Sesetengah fail imbasan ialah format sendiri pengeluar pengimbas, tanpa penerangan yang diterbitkan dan tanpa pembaca terbuka. CadCraft tidak boleh membacanya: melampirkan satu mencetak apa ia dan apa yang perlu dilakukan pada baris arahan. Eksport imbasan daripada perisian pengeluar sebagai E57 atau LAS (atau PTX, PTS), kemudian lampirkan fail yang dieksport.

| Fail | Sambungan | Eksport daripada |
|---|---|---|
| Projek ReCap | `.rcp` | ReCap: buka projek dan eksportnya. Projek hanya menunjuk kepada imbasannya, jadi menyalin `.rcp` sahaja tidak memberikan titik. |
| Imbasan ReCap | `.rcs` | ReCap: buka projek yang imbasan itu tergolong dan eksportnya. |
| Imbasan FARO | `.fls` | FARO SCENE. |
| Imbasan Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Imbasan Trimble | `.tzf` | Trimble RealWorks atau Trimble Business Center. |
| Imbasan Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Apabila eksport meminta format, LAS atau LAZ mengekalkan segala yang digunakan CadCraft (warna, keamatan, kelas, sistem koordinat dan unitnya) dalam fail yang paling kecil.
:::

## Sebab fail ini tidak dibaca

Format itu tidak diterbitkan, dan satu-satunya cara membacanya ialah melalui pustaka perisian pengeluar masing-masing, di bawah terma mereka sendiri. CadCraft hanya membaca format yang boleh dibacanya dengan kodnya sendiri pada komputer anda, jadi imbasan tidak pernah perlu dihantar ke mana-mana untuk dilampirkan.
