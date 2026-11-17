---
title: Salin, tempel, dan duplikat
summary: Salin objek ke papan klip CadCraft, tempel di tempat yang Anda klik atau di koordinatnya sendiri, duplikat dengan penunjuk, dan bawa pekerjaan dari gambar atau tab lain.
keywords: salin, copy, potong, cut, tempel, paste, tempel di tempat yang sama, paste in place, duplikat, duplicate, papan klip, clipboard, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, antar gambar, between drawings, tab lain, another tab, titik dasar, base point
from: 4b9f29d3
---

## Yang akan Anda pelajari

Cara menyalin objek ke papan klip, menempelkannya di tempat yang Anda klik atau pada koordinatnya sendiri, menduplikatnya dengan penunjuk, memotongnya, dan membawanya ke gambar lain. Semua ini juga ada di grup {{ui:Edit}} pada bilah alat: {{ui:Salin}}, {{ui:Tempel}}, dan menu {{ui:Lainnya}}.

## Salin dan tempel di tempat yang Anda klik

1. Pilih objeknya: klik, atau seret jendela.
2. Tekan {{key:Mod+C}}, atau klik {{ui:Salin}} di grup {{ui:Edit}}. Baris perintah menyebutkan berapa objek yang disalin. Objek tetap terpilih.
3. Tekan {{key:Mod+V}}, atau klik {{ui:Tempel}}. Salinan muncul di kursor, menggantung dari sudut kiri bawah objek yang disalin.
4. Klik di tempat sudut itu akan berada, atau ketik sebuah titik seperti `2000,500` lalu tekan {{key:Enter}}. Object snap dan Ortho bekerja seperti biasa.

Objek yang ditempel terpilih, sehingga Anda dapat langsung memindahkan atau mengubahnya. Satu {{key:Mod+Z}} menghapus seluruh tempelan.

:::tip
Ingin salinan menggantung dari titik yang Anda pilih, seperti sudut dinding? Ketik `COPYBASE`, klik titik dasar, pilih objeknya, lalu tekan {{key:Enter}}. Menempel kemudian menempatkan titik itu di tempat Anda klik. Untuk menggantung setiap salinan dari pusatnya, bukan dari sudut kiri bawahnya, ubah {{ui:Titik tempel}} di [Pengaturan CadCraft](topic:settings).
:::

## Tempel di tempat yang sama

Tekan {{key:Mod+Shift+V}}, atau pilih {{ui:Tempel di tempat yang sama}} di menu {{ui:Lainnya}}. Salinan masuk tepat di koordinat tempat ia disalin, tanpa klik. Gunakan ini untuk membawa objek ke gambar lain di tempat yang sama, atau dari satu lembar ke lembar lain.

## Duplikat dan pindahkan

1. Pilih objeknya.
2. Tekan {{key:Mod+D}}, atau pilih {{ui:Duplikat dan pindahkan}} di menu {{ui:Lainnya}}.
3. Sebuah salinan berada di atas aslinya dan bergerak mengikuti penunjuk. Klik di tempat ia harus berada. Anda juga dapat mengetik perpindahan seperti `@0,-600`, atau jarak menuju kursor.

{{key:Esc}} sebelum klik tidak meninggalkan apa pun. Duplikat adalah satu langkah urungkan dan tidak menyentuh papan klip.

## Potong

Tekan {{key:Mod+X}}, atau pilih {{ui:Potong}} di menu {{ui:Lainnya}}. Objek masuk ke papan klip dan dihapus dari gambar, dalam satu langkah urungkan. Tempelkan kembali dengan {{key:Mod+V}} atau {{key:Mod+Shift+V}}.

## Antar gambar dan tab

Papan klip menyimpan salinannya saat Anda membuka gambar lain, dan dipakai bersama oleh setiap tab CadCraft di peramban ini. Salin di satu tab, lalu tekan {{key:Mod+V}} di tab lain.

- Blok yang dipakai objek ikut terbawa. Jika gambar tempat Anda menempel sudah memiliki blok dengan nama yang sama, definisinya sendiri yang dipakai, seperti di AutoCAD.
- Layer yang dipakai objek ditambahkan, dengan warna dan pengaturan yang sama.
- Salinan tidak diskalakan ulang saat kedua gambar memakai satuan yang berbeda: CadCraft memberi tahu Anda, dan Anda dapat memakai {{cmd:SCALE}} sesudahnya.
- Viewport tetap pada lembarnya; ia tidak ikut disalin.

:::note
Papan klip adalah milik CadCraft sendiri. Anda tidak dapat menempelkan objek CadCraft ke program lain, atau menempel dari program lain ke CadCraft: simpan sebagai DWG atau DXF. Salinan yang sangat besar mungkin terlalu besar untuk dibagikan antar tab; baris perintah kemudian hanya mengatakan bahwa tab ini saja yang dapat menempelkannya.
:::

## Kesalahan umum

- **{{key:Mod+V}} menempelkan teks ke baris perintah.** Anda sudah mengetik sesuatu di sana, sehingga tombol bekerja pada teks itu. Tekan {{key:Esc}} untuk menghapusnya, lalu tekan {{key:Mod+V}} lagi.
- **Tidak terjadi apa-apa, dan bilah status meminta Anda menyelesaikan perintah yang sedang berjalan.** Perintah lain sedang berjalan. Tekan {{key:Esc}} dulu.
- **Tempelan jatuh jauh.** Ia menggantung dari sudut kiri bawah apa yang Anda salin, yang mungkin objek jauh yang terpilih secara tidak sengaja. Gunakan {{ui:Tempel di tempat yang sama}}, atau salin dengan `COPYBASE`.
- **"Tidak ada yang ditempel" dengan alasannya.** Apa yang ditinggalkan tab lain di papan klip tidak dapat dibaca (rusak, atau diubah secara manual). Salin objeknya lagi.

Lihat daftar lengkap tombol di [Keyboard dan mouse](topic:keyboard), dan setiap prompt di [Referensi perintah](topic:commands#clipboard).
