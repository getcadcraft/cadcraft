---
title: Jejak garisan seperti dibina atas awan titik
summary: Lampirkan imbasan laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS atau XYZ) di bawah lukisan, potong hirisan pelan melaluinya, dan lukis dinding, pintu serta tiang dengan snap objek pada titiknya.
keywords: awan titik, pointcloudattach, pcattach, pointcloud, pc, imbasan laser, imbasan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, seperti dibina, as built, tinjauan, hirisan, potong pelan, nod, snap, jejak, keadaan sedia ada
from: b0e0aae5
---

## Apa yang akan anda hasilkan

Pelan lantai seperti dibina: dinding bangunan yang diimbas dilukis sebagai garisan dan polygaris tepat pada titik imbasan.

## Lampirkan awan titik

1. Tetapkan unit lukisan dahulu jika belum ada (kotak {{ui:Unit}} dalam {{ui:Sifat}}, atau {{cmd:UNITS}}): CadCraft menukar awan titik daripada unitnya sendiri kepada unit lukisan.
2. Taip {{cmd:POINTCLOUDATTACH}} (atau `PCATTACH`) dan tekan {{key:Enter}}. Pilih fail `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` atau `.xyz` (topik tentang format awan titik menerangkan apa yang dibawa setiap satu, dan apa yang perlu dieksport daripada perisian pengimbas). Anda juga boleh membuka fail dengan {{ui:Buka}}, melepaskannya ke halaman, atau menghantarnya dari {{ui:Jejak dalam CadCraft}} pada penonton BIM.
3. `Sudut kiri bawah awan titik`: tekan {{key:Enter}} untuk mengekalkan koordinat fail itu sendiri (imbasan yang didaftarkan kepada projek sejajar dengan lukisan), atau klik di tempat sudut kiri bawahnya hendak diletakkan.
4. Baris arahan memberitahu berapa banyak titik dipaparkan. Paparan akan zum ke awan titik; ia berada di bawah garisan, setiap titik dilihat dari atas.

## Potong hirisan pelan dan jejak

1. Taip {{cmd:POINTCLOUD}} (atau `PC`), kemudian `S` untuk {{ui:Hirisan}}. Hanya jalur nipis 1.2 m di atas titik terendah awan titik dipaparkan: dinding, bukaan pintu dan tiang kelihatan seperti pelan lantai.
2. `H` menetapkan ketinggian potongan, `T` ketebalannya (dalam unit lukisan). {{key:Enter}} menamatkan arahan.
3. Hidupkan snap objek ({{key:F3}}) dengan {{ui:Nod}} antara snap. Lukis dengan {{cmd:LINE}} atau {{cmd:PLINE}}: kursor akan snap ke titik hirisan, dilabelkan "Awan titik". Titik hujung, titik tengah dan pusat lukisan sendiri mengatasi awan titik, jadi menutup polygaris akan berhenti pada titik pertamanya.
4. Tukar ketinggian potongan untuk menjejak aras lain, kemudian matikan hirisan (`S` sekali lagi) untuk melihat keseluruhan awan titik.

## Pilihan lanjut

Dalam {{cmd:POINTCLOUD}}: `C` mewarnakan titik mengikut warna fail, ketinggian, keamatan, kelas LiDAR atau satu warna; `SI` menetapkan saiz titik; `V` menyembunyikan atau menunjukkan awan titik; `Z` zum ke awan titik; `D` menyahlampirkan awan titik.

Tab 3D turut menunjukkan awan titik, dengan titik terendahnya di atas tanah dan hirisan yang sama.

:::note
Awan titik bukan sebahagian daripada lukisan: ia tidak disimpan dalam DWG atau DXF, dan buat asal tidak mengubahnya. Lampirkan semula apabila anda membuka lukisan kemudian. Fail dibaca pada komputer ini; tiada apa-apa dimuat naik. Imbasan yang sangat besar dikurangkan secara sekata kepada 2 juta titik. Fail E57 dibuka sehingga 6 juta titik dan 512 MB buat masa ini: eksport imbasan yang lebih besar sebagai LAS atau LAZ.
:::

## Cetak awan titik

{{cmd:PLOT}} mencetak awan titik bersama lukisan, di bawah garisan: dalam plot model ({{ui:Semua}} termasuk kawasan awan titik) dan dalam setiap viewport layout, dalam PDF, PNG, SVG dan apa yang dihantar ke pencetak. Ia mencetak apa yang dipaparkan pada skrin: hirisan jika hirisan dihidupkan, warna yang anda pilih, dan tersembunyi jika anda menyembunyikannya. Pada kertas, titik menjadi kotak kecil, dengan titik tertinggi dikekalkan bagi setiap kotak, dan plot mengekalkan paling banyak kira-kira 400,000 titik (awan yang sangat padat dicetak dengan kotak yang lebih besar). Awan titik hanya dicetak dalam lukisan ia dilampirkan; ia tidak pernah dicetak di ruang kertas itu sendiri, hanya melalui viewport.

## Beberapa imbasan

Imbasan yang diambil dari kedudukan berbeza boleh didaftarkan ke dalam satu bingkai, diperhalus dengan ICP dan dieksport sebagai satu LAS atau E57: lihat [Daftarkan beberapa imbasan menjadi satu](topic:register-scans).
