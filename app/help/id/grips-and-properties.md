---
title: Mengedit dengan grip dan Properti
summary: Regangkan, pindahkan, dan ubah ukuran objek lewat grip-nya, dan ketik panjang, radius, sudut, serta koordinat yang tepat di panel Properti.
keywords: grip, properti, regangkan, panjang, radius, koordinat, edit, properti cepat, palet properti, ubah, layer, warna, color
from: f22541ba
---

## Yang akan Anda pelajari

Dua cara cepat untuk mengubah objek tanpa perintah: seret **grip**-nya, atau ketik nilai baru di panel **Properti** di sebelah kanan.

## Grip

Saat Anda memilih objek (hingga 200 sekaligus) tanpa perintah yang sedang berjalan, kotak-kotak kecil muncul di objek tersebut. Inilah grip:

| Objek | Grip |
|---|---|
| Garis | Kedua ujung, dan titik tengahnya (memindahkan seluruh garis) |
| Lingkaran | Pusat (memindahkannya) dan empat titik pada lingkaran (mengubah radius) |
| Busur | Pusat, dan kedua ujungnya (mengubah tempat mulai dan berhentinya) |
| Polyline | Setiap verteks |
| Teks, titik, referensi blok | Titik sisip |
| Elips | Pusat |
| Dimensi | Titik definisinya dan posisi garis dimensi |
| Viewport | Pusat (memindahkannya) dan keempat sudut (mengubah ukurannya) |

### Memindahkan grip

1. Gambar garis dan klik garis tersebut. Tiga grip muncul.
2. Klik grip di salah satu ujung. Bilah status menampilkan "Klik tempat grip ini akan dipindahkan (Esc untuk batal). Snap dan Ortho berlaku."
3. Gerakkan crosshair. Pratinjau mengikutinya.
4. Klik posisi baru, atau snap ke titik pada objek lain lalu klik.

Ujung itu bergerak, dan bagian garis lainnya tetap di tempatnya. Anda juga dapat menekan grip lalu menyeretnya, dan melepaskannya di tempat yang diinginkan.

:::note
Anda tidak dapat mengetik koordinat untuk grip. Untuk posisi yang tepat, snap ke titik, atau ketik nilainya di Properti.
:::

Tekan {{key:Esc}} atau klik kanan untuk membatalkan pemindahan grip.

## Properti

Panel kanan menampilkan properti dari apa yang dipilih.

1. Klik sebuah garis. Judul panel bertuliskan "Garis".
2. Klik di {{ui:Length}}, ketik `2500` dan tekan {{key:Enter}}.

Garis kini tepat 2500 panjangnya, dengan titik awal dan sudutnya tetap. {{key:Enter}} atau klik di tempat lain menerapkan nilai; {{key:Esc}} mengembalikan nilai lama. Setiap perubahan adalah satu langkah urungkan, juga ketika banyak objek berubah sekaligus.

Kolom menerima ekspresi (`=2*45`) dan panjang dengan satuan (`3'6"`, `900mm`), setiap titik memiliki X, Y dan Z, dan beberapa objek dapat diubah bersamaan. Semuanya dijelaskan di [Panel Properti](topic:properties-panel).

## Kesalahan umum

- **Grip tidak muncul.** Perintah sedang berjalan (tekan {{key:Esc}}), atau lebih dari 200 objek dipilih, atau objeknya berada di layer yang terkunci.
- **Grip berpindah ke tempat yang salah.** Snap menangkapnya. Tahan {{key:Shift}} saat Anda mengklik untuk mengabaikan snap.
- **Mengetik di Properti tidak berpengaruh.** Tekan {{key:Enter}} atau klik di tempat lain untuk menerapkan. Entri yang ditolak (panjang dan radius nol atau negatif, teks yang bukan nilai) membuat kolom menjadi merah dan menjelaskan alasannya.
- **Huruf yang Anda ketik masuk ke kolom Properti.** Selama kolom memiliki kursor, tombol akan mengetik di sana. Tekan {{key:Enter}} atau {{key:Esc}}, lalu ketik perintahnya.
