---
title: Lacak garis as-built di atas point cloud
summary: Pasang pemindaian laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS atau XYZ) di bawah gambar, potong irisan denah melaluinya, lalu gambar dinding, pintu, dan kolom dengan object snap pada titik-titiknya.
keywords: point cloud, pointcloudattach, pcattach, pointcloud, pc, pemindaian laser, pemindaian, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, survei, irisan, potongan denah, node, snap, lacak, kondisi eksisting
from: b0e0aae5
---

## Yang akan Anda buat

Denah lantai as-built: dinding dari bangunan yang dipindai, digambar sebagai garis dan polyline tepat di atas titik-titik pemindaian.

## Pasang point cloud

1. Atur satuan gambar terlebih dahulu jika belum ada (kotak {{ui:Units}} di {{ui:Properties}}, atau {{cmd:UNITS}}): CadCraft mengonversi point cloud dari satuannya sendiri ke satuan gambar.
2. Ketik {{cmd:POINTCLOUDATTACH}} (atau `PCATTACH`) lalu tekan {{key:Enter}}. Pilih file `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` atau `.xyz` (topik tentang format point cloud menjelaskan apa yang dibawa tiap format, dan apa yang diekspor dari perangkat lunak pemindai). Anda juga bisa membuka file dengan {{ui:Open}}, menyeretnya ke halaman, atau mengirimnya dari {{ui:Trace in CadCraft}} di penampil BIM.
3. `Sudut kiri bawah point cloud`: tekan {{key:Enter}} untuk mempertahankan koordinat asli file (pemindaian yang diregistrasi ke proyek akan sejajar dengan gambar), atau klik tempat sudut kiri bawahnya akan diletakkan.
4. Baris perintah menampilkan berapa banyak titik yang tampil. Tampilan melakukan zoom ke point cloud; point cloud berada di bawah garis gambar, dengan setiap titik terlihat dari atas.

## Potong irisan denah dan lacak

1. Ketik {{cmd:POINTCLOUD}} (atau `PC`), lalu `S` untuk {{ui:Slice}}. Hanya pita tipis 1.2 m di atas titik terendah point cloud yang tampil: dinding, bukaan pintu, dan kolom terbaca seperti denah lantai.
2. `H` mengatur tinggi potongan, `T` mengatur tebalnya (dalam satuan gambar). {{key:Enter}} mengakhiri perintah.
3. Aktifkan object snap ({{key:F3}}) dengan {{ui:Node}} di antara snap. Gambar dengan {{cmd:LINE}} atau {{cmd:PLINE}}: kursor akan snap ke titik-titik irisan, diberi label "Point cloud". Titik ujung, titik tengah, dan pusat dari gambar sendiri lebih diutamakan daripada point cloud, sehingga menutup polyline akan mendarat di titik pertamanya.
4. Ubah tinggi potongan untuk melacak level lain, lalu matikan irisan (`S` lagi) untuk melihat seluruh point cloud.

## Opsi lainnya

Di {{cmd:POINTCLOUD}}: `C` mewarnai titik menurut warna file, tinggi, intensitas, kelas LiDAR, atau satu warna; `SI` mengatur ukuran titik; `V` menyembunyikan atau menampilkan point cloud; `Z` melakukan zoom ke point cloud; `D` melepas (detach) point cloud.

Tab 3D juga menampilkan point cloud, dengan titik terendahnya di tanah, dan irisan yang sama.

:::note
Point cloud bukan bagian dari gambar: ia tidak disimpan di DWG atau DXF, dan urungkan tidak mengubahnya. Pasang lagi saat Anda membuka gambar nanti. File dibaca di komputer ini; tidak ada yang diunggah. Pemindaian yang sangat besar dijarangkan merata menjadi 2 juta titik. File E57 dibuka hingga 6 juta titik dan 512 MB untuk saat ini: ekspor pemindaian yang lebih besar sebagai LAS atau LAZ.
:::

## Plot

{{cmd:PLOT}} mencetak point cloud bersama gambar, di bawah garis gambar: dalam plot model ({{ui:Everything}} menyertakan area point cloud) dan di setiap viewport layout, di PDF, PNG, SVG, dan apa pun yang dikirim ke printer. Yang dicetak adalah yang tampak di layar: irisan jika irisan aktif, warna yang Anda pilih, dan tidak tampil jika Anda menyembunyikannya. Di atas kertas, titik menjadi kotak kecil dengan titik tertinggi yang menang di tiap kotak, dan satu plot menyimpan paling banyak sekitar 400.000 titik (point cloud yang sangat padat dicetak dengan kotak yang lebih besar). Point cloud hanya diplot di gambar tempat ia dipasang; ia tidak pernah dicetak langsung di ruang Kertas, hanya melalui viewport.

## Beberapa pemindaian

Pemindaian yang diambil dari posisi berbeda dapat diregistrasi ke satu kerangka, diperhalus dengan ICP, dan diekspor sebagai satu LAS atau E57: lihat [Daftarkan beberapa pemindaian menjadi satu](topic:register-scans).
