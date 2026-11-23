---
title: Sketsa dengan pena dan dapatkan geometri yang presisi
summary: Gambar bebas dengan pena, mouse, atau jari, dan setiap goresan menjadi garis, lingkaran, busur, persegi panjang, atau polyline yang rapi saat Anda mengangkat pena, di-snap ke yang sudah tergambar, dengan ukurannya siap diketik ulang.
keywords: sketsa, pena, stylus, bebas, jari, bersihkan, presisi, snap, SKETCHLIVE, SKETCHFIX, ukuran, ketik ulang, tekanan, tebal garis, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Mulai {{cmd:SKETCHLIVE}} (atau pilih **Gambar › Lainnya › Sketsa dengan pena**) lalu gambar satu goresan dengan menekan dan menyeret. Saat Anda mengangkat pena, CadCraft membaca apa yang Anda maksud dan memasukkannya ke gambar:

| Goresan Anda | Yang Anda dapatkan |
|---|---|
| Hampir lurus | Garis. Garis yang hampir datar atau tegak dibuat tepat datar atau tegak. |
| Tertutup dan bulat | Lingkaran |
| Bagian dari bentuk bulat | Busur |
| Tertutup dengan empat sudut siku-siku | Persegi panjang |
| Lainnya | Polyline dengan sisi bersudut |

Ujung goresan ditarik ke ujung terdekat dari yang sudah tergambar, sehingga dinding hasil sketsa bertemu dengan dinding di sebelahnya.

## Ketik ulang ukurannya

Setelah setiap goresan, baris perintah menampilkan ukurannya (**panjang** garis, **jari-jari** lingkaran atau busur, **lebar** persegi panjang) sebagai nilai awal. Tekan {{key:Enter}} untuk menyimpannya, atau ketik angka atau panjang seperti `12'6"` untuk menggantinya. Garis mempertahankan ujung pertamanya, lingkaran mempertahankan pusatnya, dan persegi panjang mempertahankan sudut pertamanya.

Tekan {{key:Enter}} pada prompt kosong untuk selesai, atau ketik `U` untuk membatalkan goresan terakhir. Seluruh sesi adalah satu langkah urungkan.

## Membersihkan beberapa goresan sekaligus

{{cmd:SKETCHFIX}} mengumpulkan goresan dan membuat semuanya presisi saat Anda menekan {{key:Enter}}, yang cocok untuk tata letak kasar yang digambar cepat.

:::note
Semuanya dihitung di komputer Anda dengan aturan, tanpa model dan tanpa dikirim ke mana pun.
:::

## Tekanan menentukan tebal garis

Di tempat pena diaktifkan untuk aplikasi (Pengaturan › Global › Perangkat input › Pena), goresan yang digambar dengan pena membawa setiap titik yang diberikan pena beserta tekanannya. Goresan ringan membuat objek tipis dan goresan tegas membuat objek tebal: tekanan rata-rata goresan memilih 0,18, 0,25, 0,35 atau 0,50 mm, dan baris perintah menyebutkan yang mana. Goresan yang digambar dengan mouse atau jari mengambil tebal garis saat ini seperti sebelumnya. {{cmd:PENPRESSURE}} mematikan ini (atau menyalakannya lagi); pilihan itu disimpan di peramban ini.
