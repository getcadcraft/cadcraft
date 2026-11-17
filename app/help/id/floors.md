---
title: Tumpuk lantai dalam satu gambar
summary: Gambar lantai pertama di atas lantai dasar pada koordinat yang sama, lalu matikan setiap lantai, tanpa xref.
keywords: lantai, floor, floors, FLOORS, FLR, FLOOR, FLOORLAYERS, tingkat, level, tumpuk, layer desain, ruang model, underlay, xref
from: 7440fc87
---

Lantai memungkinkan Anda menumpuk denah dalam satu ruang model. Setiap lantai memiliki objeknya sendiri, dan layer tetap bekerja di semua lantai. Dinding pada `P-Walls` dapat berada di lantai mana pun.

## Mulai

Ketik `FLOORS` (`FLR`), atau pilih {{ui:Lantai…}} di menu {{ui:Lainnya}} pada grup {{ui:Tampilan}}, lalu pilih {{ui:Mulai dengan lantai}}. Apa yang sudah Anda gambar sejauh ini menjadi milik lantai dasar.

## Menggambar di lantai

Pilih lantai dengan tombol bulat di panel. Objek baru masuk ke lantai itu.

Lantai lain yang aktif ditampilkan memudar di bawahnya. Anda dapat melakukan snap ke sana, sehingga lantai pertama sejajar dengan lantai dasar, tetapi Anda tidak dapat mengubahnya sampai Anda menjadikannya lantai aktif. Ikon mata mematikan sebuah lantai. Dinding hanya tersambung dengan dinding di lantai yang sama.

Untuk memulai sebuah lantai dari lantai di bawahnya, pilih apa yang Anda inginkan, pilih lantai di panel, lalu tekan {{ui:Salin ke sana}}.

## Menaruh lantai pada lembar

Pilih viewport pada lembar, lalu pilih lantainya di bawah {{ui:Lantai yang ditampilkan}} di Properti. Viewport tanpa lantai yang dipilih menampilkan semua lantai yang aktif.

## Mengirim file ke orang lain

Program CAD lain tidak mengenal lantai, sehingga mereka menampilkan semua lantai bersama-sama. Sebelum mengirim file, pilih {{ui:Ubah lantai menjadi layer}} di panel, atau ketik `FLOORLAYERS`. Setiap objek pindah ke layer yang dinamai sesuai lantainya, seperti `Ground floor-P-Walls`, sehingga mereka tetap dapat mematikan setiap lantai. Urungkan membatalkannya. CadCraft tetap menyimpan lantai di file DWG atau DXF yang disimpannya.
