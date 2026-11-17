---
title: Underlay PDF dan impor PDF
summary: Letakkan halaman PDF di bawah gambar Anda untuk ditelusuri dan diplot, atau ubah garis dan teks halaman menjadi objek gambar.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, underlay, telusuri, impor pdf, pindai, denah lantai, pudar, clip, layer, snap, buka pdf
from: aa301d0f
---

## Dua cara membawa halaman PDF

- **Lampirkan** ({{cmd:PDFATTACH}}) menyimpan PDF sebagai gambar di bawah gambar Anda. Anda menelusurinya, men-snap ke garisnya, memudarkannya, memotongnya, dan ia ikut tercetak bersama lembar. Gambar hanya menyimpan nama file.
- **Impor** ({{cmd:PDFIMPORT}}) mengubah garis, kurva, isian, dan teks halaman menjadi objek gambar biasa, pada layer yang dinamai sesuai PDF. Objek itu milik Anda untuk diedit, dan PDF tidak diperlukan lagi setelahnya.

Membuka PDF dengan {{ui:Open}} akan menanyakan mana dari kedua cara itu yang Anda inginkan.

## Lampirkan halaman

1. Ketik `PDFATTACH` (atau `PDFATT`) dan pilih PDF. Jika halamannya lebih dari satu, ketik nomor halamannya.
2. Klik titik sisip (sudut kiri bawah halaman).
3. Tekan {{key:Enter}} untuk ukuran asli halaman, atau ketik skalanya: satuan gambar per poin PDF (satu poin adalah 1/72 inci, jadi 0.3528 in pada gambar dalam milimeter).
4. Tekan {{key:Enter}} untuk tanpa putaran, atau ketik sudut.

Halaman adalah objek seperti referensi blok: pindahkan, putar, skalakan, salin, hapus, dan letakkan pada layer. Matikan layernya dan halaman itu hilang. Perbesar, dan halaman digambar ulang dengan tajam.

## Telusuri

Dengan {{ui:Snap}} aktif, kursor men-snap ke garis PDF itu sendiri: titik ujung, titik tengah, dan perpotongan (dan {{ui:Nearest}} ketika snap itu aktif). Teks yang digambar sebagai huruf pada halaman tidak di-snap.

## Sesuaikan

- `PDFADJUST`: **Pudar (F)** (0 sampai 80 persen), **Kontras (C)** (0 sampai 100), **Monokrom (M)**, dan **Nyala-mati (O)** untuk menyembunyikannya tanpa menghapus.
- `PDFCLIP`: tampilkan hanya persegi panjang atau poligon dari halaman; **Hapus (D)** menghapus klip.
- `PDFLAYERS`: sebuah PDF dapat memiliki layer sendiri. Perintah ini mendaftarkannya; ketik nomor untuk menyalakan atau mematikan layer itu untuk underlay ini. Layer yang dimatikan di file akan mulai dalam keadaan mati.

## Plot dan simpan

PLOT mencetak halaman sebagai garisnya, isiannya, dan teksnya (sehingga tetap tajam dan dapat dicari). {{ui:Pictures}} di dalam PDF ditampilkan di layar, tetapi belum dicetak.

DWG atau DXF 2000 menyimpan underlay sebagai tautan: nama file, halaman, letaknya, skala, putaran, klip, pudar, dan kontras. PDF itu sendiri tidak ada di dalam gambar. Buka kembali gambar, ketik `PDF`, dan pilih file itu lagi; halaman-halaman ditampilkan sebagai bingkai sampai Anda melakukannya, dan mengambil ukuran aslinya ketika Anda melakukannya. DXF lama (R12) tidak memiliki underlay: ia hanya menyimpan bingkai dan nama. Cara program lain membaca klip dan skala yang disimpan belum diperiksa di program mereka.

## Impor halaman

1. Ketik `PDFIMPORT` (atau `PDFIM`) dan pilih PDF serta halamannya.
2. Klik tempat sudut kiri bawah halaman akan diletakkan.
3. Tekan {{key:Enter}} untuk ukuran asli, ketik skala, atau pilih **Dua titik**: halaman digambar pada ukuran asli, lalu Anda klik dua titik dengan jarak yang Anda ketahui dan mengetik jarak sebenarnya; semuanya diskalakan agar sesuai.

Garis menjadi garis dan polyline, lingkaran dan busur dikenali, bentuk berisi menjadi hatch solid, dan teks menjadi teks pada layer yang berakhiran `-TEXT`. Ini satu langkah urungkan. Gambar di dalam PDF tidak diimpor: lampirkan halaman sebagai gantinya. Hasil pindaian (halaman yang hanya berupa gambar) tidak memiliki garis untuk diimpor.

PDF dibaca sebagai file yang tidak tepercaya: tidak ada skrip yang dijalankan, dan halaman yang sangat besar dipotong serta hal itu diberitahukan.
