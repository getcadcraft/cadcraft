---
title: Mengatur gambar dengan layer
summary: Buat layer untuk dinding, pintu dan catatan, beri warna, jadikan layer aktif, dan matikan, bekukan, kunci, atau larang layer dari plot.
keywords: layer, layers, la, layer aktif, bekukan, cairkan, kunci, mati, nyala, plot, tidak diplot, warna, properti layer, layiso, layuniso, isolasi, layoff, layfrz, laymcur, layon, laythw, ganti nama, laymrg, gabungkan, laydel, hapus layer
from: ba9f0617
---

## Yang akan Anda buat

Tiga layer, Walls, Doors dan Notes, masing-masing dengan warnanya sendiri, dengan objek digambar di setiap layer dan dipindahkan antarlayer.

## Panel Layer

Layer berada di panel sebelah kiri, di bawah {{ui:Layer}}. Setiap baris menampilkan, dari kiri ke kanan:

- sebuah titik: terisi untuk layer **aktif**, tempat objek baru masuk;
- kotak warna;
- nama layer;
- empat tombol: nyala/mati (mata), bekukan (kepingan salju), kunci (gembok) dan plot (printer).

Setiap gambar memiliki layer bernama `0`. Mengetik `LA` lalu menekan {{key:Enter}} membawa Anda ke panel.

## Membuat layer

1. Klik {{ui:Layer baru}} di atas daftar. Kotak nama terbuka.
2. Ketik `Walls` lalu tekan {{key:Enter}} (atau klik {{ui:Tambah}}).

Bilah status menulis "Added layer Walls and made it current." Layer baru mendapat warna 7 (hitam pada tema terang, putih pada tema gelap).

3. Klik {{ui:Layer baru}} lagi, ketik `Doors` lalu tekan {{key:Enter}}.
4. Klik {{ui:Layer baru}} lagi, ketik `Notes` lalu tekan {{key:Enter}}.

Notes sekarang aktif.

## Memberi warna setiap layer

1. Klik kotak warna pada baris Walls. Pemilih warna sistem Anda terbuka.
2. Pilih warna dan konfirmasi.

Kotak warna dan semua yang ada di Walls yang berwarna {{ui:Menurut layer}} ikut berubah.

:::note
Warna yang dipilih dan cocok dengan salah satu dari 255 warna CAD standar disimpan sebagai nomor itu. Warna lain disimpan persis di CadCraft, tetapi disimpan sebagai warna standar terdekat dalam file DWG atau DXF.
:::

## Menggambar pada layer

1. Klik nama **Walls** di daftar. Titiknya terisi dan bilah status menulis "Current layer: Walls".
2. Gambar persegi panjang (`REC`). Objek itu masuk ke Walls.
3. Klik **Doors**, lalu gambar busur (`A`). Objek itu masuk ke Doors.

Anda juga dapat memilih layer aktif di {{ui:Pengaturan saat ini}} di sebelah kanan (tidak ada yang dipilih), di bawah {{ui:Layer}}.

## Memindahkan objek ke layer lain

1. Pilih objeknya.
2. Di panel kanan, pilih layer baru di {{ui:Layer}}.

Objek pindah ke layer itu dan mengambil warnanya jika warnanya {{ui:Menurut layer}}.

## Mati, bekukan, kunci dan plot

| Tombol | Fungsinya |
|---|---|
| Nyala/mati (mata) | Menyembunyikan objek di layer. Objek tidak dapat dilihat, dipilih, atau di-snap. |
| Bekukan (kepingan salju) | Efeknya sama dengan mati di CadCraft. Dipisah karena program lain memperlakukannya berbeda, dan pengaturannya disimpan. |
| Kunci (gembok) | Objek tetap terlihat dan Anda dapat men-snap ke dalamnya, tetapi tidak dapat dipilih atau diubah. Baik untuk latar belakang yang Anda jiplak. |
| Plot (printer) | Saat ditekan, layer tetap tampil di layar tetapi **tidak ikut dicetak** ke plot dan PDF. Gunakan untuk garis konstruksi dan catatan untuk diri sendiri. |

Arahkan kursor ke tombol untuk melihat fungsinya ("Matikan", "Bekukan", "Kunci", "Jangan plot layer ini").

Anda tidak dapat mematikan layer aktif: bilah status menulis "That is the current layer. Make another layer current first." Mengklik nama layer untuk menjadikannya aktif juga menyalakannya dan mencairkannya.

Setiap perubahan layer, di panel atau lewat perintah, adalah satu langkah urungkan: {{key:Mod+Z}} mengembalikannya.

## Bekerja pada layer dengan memilih objek

Anda tidak perlu tahu nama layer: pilih objek di layer itu. Ketik perintahnya, atau buka {{ui:Alat}} di bagian atas panel {{ui:Layer}}.

| Perintah | Fungsinya |
|---|---|
| {{cmd:LAYISO}} | Pilih objek, tekan {{key:Enter}}: hanya layer mereka yang tetap menyala, setiap layer lain dimatikan. Jika layer aktif dimatikan, salah satu layer yang diisolasi menjadi aktif. |
| {{cmd:LAYUNISO}} | Menyalakan kembali layer yang dimatikan {{cmd:LAYISO}} terakhir, dan mengembalikan layer aktif yang diubahnya. |
| {{cmd:LAYOFF}} | Klik objek satu per satu: layer setiap objek dimatikan. Ketik `U` untuk membatalkan yang terakhir, {{key:Enter}} untuk selesai. |
| {{cmd:LAYFRZ}} | Sama, tetapi membekukan setiap layer. |
| {{cmd:LAYMCUR}} | Klik sebuah objek: layernya menjadi aktif (dan dinyalakan serta dicairkan). Jika satu objek sudah dipilih, objek itu yang dipakai. |
| {{cmd:LAYON}} | Menyalakan setiap layer. |
| {{cmd:LAYTHW}} | Mencairkan setiap layer. |

Layer aktif tidak pernah dimatikan atau dibekukan dengan cara ini: riwayat menyebutkannya, dan Anda dapat menjadikan layer lain aktif dengan {{cmd:LAYMCUR}} terlebih dahulu. Jika memilih referensi blok, yang dipakai adalah layer referensi itu sendiri.

## Mengganti nama, menggabungkan dan menghapus layer

- {{cmd:RENAME}}: ketik `LA`, nama lama, dan nama baru. Setiap objek di layer mengikuti. (`B` mengganti nama blok dengan cara yang sama, beserta setiap referensinya.)
- {{cmd:LAYMRG}}: klik sebuah objek di setiap layer yang akan digabungkan (atau ketik `N` dan nama), tekan {{key:Enter}}, lalu pilih layer tujuan dan jawab `Y`. Objek berpindah ke tujuan, di model, di lembar, dan di dalam blok, dan layer yang digabung dihapus.
- {{cmd:LAYDEL}}: pilih objek di layer (atau `N` dan namanya) lalu jawab `Y`. Layer dihapus **beserta setiap objek di dalamnya**, di mana pun. Layer 0, DEFPOINTS, dan layer aktif tidak dapat dihapus.

Setiap perintah adalah satu langkah urungkan. Ketiganya ada di {{ui:Alat}} di bagian atas panel {{ui:Layer}}.

1. Klik satu garis dinding, lalu ketik `LAYISO` dan tekan {{key:Enter}}. Hanya Walls yang tetap menyala.
2. Gambar atau ubah yang Anda perlukan di Walls.
3. Ketik `LAYUNISO` dan tekan {{key:Enter}}. Doors dan Notes kembali.

## Kesalahan umum

- **Garis baru masuk ke layer yang salah.** Periksa titik mana yang terisi sebelum Anda menggambar. Layer baru menjadi aktif segera setelah Anda menambahkannya.
- **Objek tidak bisa dipilih.** Layernya dikunci, dimatikan, atau dibekukan.
- **Layer masih tercetak di program lain.** DXF R12 tidak dapat menyimpan "jangan plot". CadCraft menyimpan pengaturan itu untuk dirinya sendiri jika gambar memiliki lembar, tetapi program lain akan mencetak layer tersebut.
- **Nama layer dalam huruf kapital setelah disimpan.** DXF R12 menyimpan nama dengan huruf kapital, sehingga `Walls` kembali sebagai `WALLS`, dan spasi menjadi `_`. DWG yang disimpan mempertahankan nama seperti yang Anda ketik.
- **Mengganti nama, menggabung, atau menghapus layer.** Gunakan {{cmd:RENAME}}, {{cmd:LAYMRG}}, atau {{cmd:LAYDEL}} (juga di {{ui:Alat}}): lihat di bawah.

## Mengelompokkan layer

Agar daftar tetap pendek, letakkan layer dalam folder, misalnya Existing, Proposed dan Services. Setiap folder dapat dilipat, dan sakelarnya menyalakan atau mematikan semua layernya, membekukannya, atau mengunci bersama. Layer aktif tidak pernah dimatikan.

Di {{ui:Alat}} pada panel Layer, pilih {{ui:Tambahkan grup siap pakai}} untuk satu set yang dibuat untuk pekerjaan hunian kecil, {{ui:Kelompokkan menurut nama}} untuk mengelompokkan layer yang berbagi awalan (`E-Walls`, `E-Doors`), atau {{ui:Grup baru}}. Seret layer ke folder, atau gunakan daftar di atas layer untuk layer aktif. Ketik di {{ui:Cari layer}} untuk mempersempit daftar. `LAYGROUP` (`LG`) melakukan hal yang sama di baris perintah.

Untuk mengganti nama grup, klik dua kali namanya (atau pilih lalu tekan {{key:F2}}), ketik nama baru, dan tekan {{key:Enter}}; {{key:Esc}} mempertahankan nama lama, dan {{cmd:UNDO}} mengembalikannya. {{ui:Grup baru}} ada di {{ui:Alat}} pada panel Layer.

Layernya sendiri tidak berubah, jadi program CAD lain melihatnya sebagai daftar datar biasa. CadCraft menyimpan grupnya di file.
