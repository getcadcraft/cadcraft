---
title: Atur font dan ukuran teks dengan gaya teks
summary: Buat gaya teks bernama dengan font, tinggi, lebar, dan kemiringan, atur satu sebagai aktif untuk teks baru, dan ubah sebuah gaya untuk mengubah semua teks yang memakainya.
keywords: gaya teks, gaya, STYLE, ST, TEXTSTYLE, -STYLE, font, tinggi teks, faktor lebar, oblique, kemiringan, ubah font, gaya standar, terapkan gaya, DDSTYLE
from: bd5a4883
---

## Yang akan Anda lakukan

Buat gaya teks bernama `Catatan` dengan font dan tingginya sendiri, gunakan untuk teks baru, lalu nanti ubah gayanya sehingga setiap catatan yang memakainya berubah sekaligus.

## Langkah

1. Ketik {{cmd:STYLE}} (`ST`) dan tekan {{key:Enter}}, atau klik {{ui:Gaya teks}} pada bilah alat {{ui:Gambar}}. Dialog {{ui:Gaya teks}} menampilkan gaya dalam gambar. Setiap gambar memiliki `Standar`.
2. Klik {{ui:Baru…}}, ketik `Catatan` sebagai nama gaya baru, lalu klik {{ui:OK}}. Baris status menampilkan "Gaya teks Catatan dibuat dan dijadikan aktif."
3. Di {{ui:Font}}, pilih atau ketik nama font. Atur {{ui:Tinggi (0 = tanya setiap kali)}} ke angka, seperti `2.5`, sehingga setiap teks baru mendapat tinggi itu. Biarkan `0` agar ditanya setiap kali.
4. Atur {{ui:Faktor lebar}} dan {{ui:Sudut kemiringan (°)}} jika Anda ingin huruf yang lebih sempit, lebih lebar, atau miring. Baris contoh menampilkan hasilnya.
5. Klik {{ui:Tutup}}. Gambar teks dengan {{cmd:TEXT}} atau {{cmd:MTEXT}}: teks baru mengambil gaya aktif.
6. Untuk memakai gaya yang sudah Anda buat, buka dialog lagi, pilih gaya itu di daftar, lalu klik {{ui:Jadikan aktif}}.
7. Untuk memberi gaya pada teks yang sudah tergambar, pilih teksnya, buka dialog, pilih gayanya, lalu klik {{ui:Terapkan ke teks yang dipilih}}.

## Ubah gaya nanti

Ubah font, tinggi, lebar, atau kemiringan sebuah gaya di dialog, dan setiap teks yang memakainya akan mengikuti, dalam satu langkah urungkan ({{key:Mod+Z}}). Baris status menyatakan berapa banyak teks yang mengikuti.

## Catatan

- {{ui:Hapus}} menolak `Standar`, dan gaya yang masih dipakai oleh teks: ubah teks itu ke gaya lain terlebih dahulu.
- Gaya disimpan dalam tabel STYLE gambar, sehingga file DXF dan DWG menyimpannya.
- Pada baris perintah, `-STYLE` melakukan hal yang sama dengan opsi (Current, New, Font, Height, Width, Oblique, Delete, List).
- Font yang tidak ada di komputer yang membaca gambar akan ditampilkan dengan rupa huruf lain.
