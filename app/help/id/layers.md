---
title: Mengatur gambar dengan layer
summary: Buat layer untuk dinding, pintu, dan catatan, atur warna, jadikan layer aktif, lalu matikan, bekukan, kunci, atau cegah layer dari plot.
keywords: layer, layers, la, layer aktif, bekukan, cairkan, kunci, mati, nyala, plot, tanpa plot, warna, properti layer, layiso, layuniso, isolasi, layoff, layfrz, laymcur, layon, laythw, ganti nama, rename, gabung, laymrg, hapus, laydel, hapus layer
from: cd033591
---

## Yang akan Anda buat

Tiga layer, Walls, Doors, dan Notes, masing-masing dengan warnanya sendiri, dengan objek digambar di setiap layer dan dipindahkan di antara layer.

## Panel Layer

Layer ada di panel sebelah kiri, di bawah {{ui:Layer}}. Setiap baris menampilkan, dari kiri ke kanan:

- titik: terisi untuk layer **aktif**, tempat objek baru dimasukkan;
- kotak warna;
- nama layer;
- empat tombol: nyala/mati (mata), bekukan (kepingan salju), kunci (gembok), dan plot (printer).

Setiap gambar memiliki layer bernama `0`. Mengetik `LA` lalu menekan {{key:Enter}} akan langsung ke panel.

## Membuat layer

1. Klik {{ui:Layer baru}} di atas daftar. Kotak nama akan terbuka.
2. Ketik `Walls` dan tekan {{key:Enter}} (atau klik {{ui:Tambah}}).

Bilah status berbunyi "Layer Walls ditambahkan dan dijadikan layer aktif." Layer baru mendapat warna 7 (hitam pada tema terang, putih pada tema gelap).

3. Klik {{ui:Layer baru}} lagi, ketik `Doors` dan tekan {{key:Enter}}.
4. Klik {{ui:Layer baru}} lagi, ketik `Notes` dan tekan {{key:Enter}}.

Notes sekarang menjadi layer aktif.

## Beri setiap layer warna

1. Klik kotak warna pada baris Walls. Pemilih warna sistem Anda akan terbuka.
2. Pilih warna dan konfirmasi.

Kotak warna dan semua objek di Walls yang berwarna {{ui:Menurut layer}} ikut berubah.

:::note
Warna yang dipilih dan cocok dengan salah satu dari 255 warna CAD standar disimpan sebagai nomor tersebut. Warna lain disimpan dengan tepat di CadCraft, tetapi disimpan sebagai warna standar terdekat dalam file DWG atau DXF.
:::

## Menggambar pada layer

1. Klik nama **Walls** dalam daftar. Titiknya akan terisi dan bilah status berbunyi "Layer aktif: Walls".
2. Gambar persegi panjang (`REC`). Objek itu masuk ke Walls.
3. Klik **Doors**, lalu gambar busur (`A`). Objek itu masuk ke Doors.

Anda juga dapat memilih layer aktif di {{ui:Pengaturan saat ini}} di sebelah kanan (saat tidak ada yang dipilih), di bawah {{ui:Layer}}.

## Pindahkan objek ke layer lain

1. Pilih objek-objeknya.
2. Di panel kanan, pilih layer baru di {{ui:Layer}}.

Objek itu pindah ke layer tersebut dan mengambil warnanya jika warnanya adalah {{ui:Menurut layer}}.

## Mati, bekukan, kunci, dan plot

| Tombol | Fungsinya |
|---|---|
| Nyala/mati (mata) | Menyembunyikan objek layer. Objek tidak dapat dilihat, dipilih, atau di-snap. |
| Bekukan (kepingan salju) | Efeknya sama dengan mati di CadCraft. Dipisahkan karena program lain memperlakukannya berbeda, dan pengaturannya disimpan. |
| Kunci (gembok) | Objek tetap terlihat dan Anda dapat melakukan snap ke objek itu, tetapi tidak dapat dipilih atau diubah. Cocok untuk latar belakang yang Anda telusuri. |
| Plot (printer) | Saat ditekan, layer ditampilkan di layar tetapi **tidak ikut dicetak** ke plot maupun PDF. Gunakan untuk garis konstruksi dan catatan untuk diri sendiri. |

Arahkan kursor ke tombol untuk melihat fungsinya ("Matikan", "Bekukan", "Kunci", "Jangan plot layer ini").

Anda tidak dapat mematikan layer aktif: bilah status berbunyi "Itu layer aktif. Jadikan layer lain aktif terlebih dahulu." Mengklik nama layer untuk menjadikannya aktif juga menyalakan dan mencairkannya.

Setiap perubahan layer, di panel atau lewat perintah, adalah satu langkah urungkan: {{key:Mod+Z}} mengembalikannya.

## Bekerja pada layer dengan memilih objek

Anda tidak perlu tahu nama layer: pilih objek di layer tersebut. Ketik perintahnya, atau buka {{ui:Alat}} di bagian atas panel {{ui:Layer}}.

| Perintah | Fungsinya |
|---|---|
| {{cmd:LAYISO}} | Pilih objek, lalu tekan {{key:Enter}}: hanya layer objek itu yang tetap nyala, dan semua layer lain dimatikan. Jika layer aktif dimatikan, salah satu layer yang diisolasi menjadi aktif. |
| {{cmd:LAYUNISO}} | Menyalakan kembali layer yang dimatikan oleh {{cmd:LAYISO}} terakhir, dan mengembalikan layer aktif yang diubahnya. |
| {{cmd:LAYOFF}} | Klik objek satu per satu: layer setiap objek dimatikan. Ketik `U` untuk membatalkan yang terakhir, {{key:Enter}} untuk selesai. |
| {{cmd:LAYFRZ}} | Sama, tetapi membekukan setiap layer. |
| {{cmd:LAYMCUR}} | Klik objek: layernya menjadi aktif (dan dinyalakan serta dicairkan). Jika satu objek sudah dipilih, objek itu yang dipakai. |
| {{cmd:LAYON}} | Menyalakan semua layer. |
| {{cmd:LAYTHW}} | Mencairkan semua layer. |

Layer aktif tidak pernah dimatikan atau dibekukan dengan cara ini: riwayat mencatatnya, dan Anda dapat menjadikan layer lain aktif dengan {{cmd:LAYMCUR}} terlebih dahulu. Memilih referensi blok menggunakan layer milik referensi itu sendiri.

## Ganti nama, gabungkan, dan hapus layer

- {{cmd:RENAME}}: ketik `LA`, nama lama, dan nama baru. Setiap objek di layer mengikuti. (`B` mengganti nama blok dengan cara yang sama, beserta setiap referensinya.)
- {{cmd:LAYMRG}}: klik objek pada setiap layer yang akan digabungkan (atau ketik `N` dan sebuah nama), tekan {{key:Enter}}, lalu pilih layer tujuan dan jawab `Y`. Objek berpindah ke tujuan — di model, pada lembar, dan di dalam blok — dan layer yang digabungkan dihapus.
- {{cmd:LAYDEL}}: pilih objek pada layer (atau `N` dan namanya), lalu jawab `Y`. Layer dihapus **beserta setiap objek di dalamnya**, di mana pun. Layer 0, DEFPOINTS, dan layer aktif tidak dapat dihapus.

Setiap langkah ini adalah satu langkah urungkan. Ketiganya juga ada di {{ui:Alat}} di bagian atas panel {{ui:Layer}}.

1. Klik satu garis dinding, lalu ketik `LAYISO` dan tekan {{key:Enter}}. Hanya Walls yang tetap nyala.
2. Gambar atau ubah apa yang Anda perlukan pada Walls.
3. Ketik `LAYUNISO` dan tekan {{key:Enter}}. Doors dan Notes kembali.

## Kesalahan umum

- **Garis baru masuk ke layer yang salah.** Periksa titik mana yang terisi sebelum menggambar. Layer baru menjadi aktif segera setelah Anda menambahkannya.
- **Objek tidak bisa dipilih.** Layernya dikunci, dimatikan, atau dibekukan.
- **Layer masih tercetak di program lain.** DXF R12 tidak dapat menyimpan "jangan plot". CadCraft menyimpan pengaturan itu untuk dirinya sendiri jika gambar memiliki lembar, tetapi program lain akan mencetak layer tersebut.
- **Nama layer dalam huruf kapital setelah disimpan.** DXF R12 menyimpan nama dengan huruf kapital, sehingga `Walls` kembali sebagai `WALLS`, dan spasi menjadi `_`. DWG yang disimpan mempertahankan nama seperti yang Anda ketik.
- **Mengganti nama, menggabungkan, atau menghapus layer.** Gunakan {{cmd:RENAME}}, {{cmd:LAYMRG}}, atau {{cmd:LAYDEL}} (juga di {{ui:Alat}}): lihat di bawah.

## Mengelompokkan layer

Jaga daftar tetap pendek dengan menempatkan layer dalam folder, misalnya Existing, Proposed, dan Services. Setiap folder dapat dilipat, dan sakelarnya menyalakan atau mematikan semua layernya, membekukannya, atau menguncinya bersama. Layer aktif tidak pernah dimatikan.

Di {{ui:Alat}} pada panel Layer, pilih {{ui:Tambahkan grup siap pakai}} untuk satu set yang dibuat untuk pekerjaan hunian kecil, {{ui:Kelompokkan menurut nama}} untuk mengelompokkan layer yang memiliki awalan yang sama (`E-Walls`, `E-Doors`), atau {{ui:Grup baru}}. Seret layer ke folder, atau gunakan daftar di atas layer untuk layer aktif. Ketik di {{ui:Cari layer}} untuk mempersempit daftar. `LAYGROUP` (`LG`) melakukan hal yang sama di baris perintah.

Layer itu sendiri tidak berubah, jadi program CAD lain melihatnya sebagai daftar datar biasa. CadCraft menyimpan grup di dalam file.
