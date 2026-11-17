---
title: Sketsa dengan pena dan dapatkan geometri yang presisi
summary: Gambar bebas dengan pena, mouse, atau jari dan setiap goresan menjadi garis, lingkaran, busur, persegi panjang, atau polyline yang bersih saat Anda mengangkat pena, di-snap ke yang sudah tergambar, dengan ukurannya siap ditimpa.
keywords: sketsa, pena, stylus, bebas, jari, bersihkan, presisi, snap, SKETCHLIVE, SKETCHFIX, ukuran, timpa
from: cd87eb75
---

Mulai {{cmd:SKETCHLIVE}} (atau pilih **Gambar › Lainnya › Sketsa dengan pena**) dan gambar goresan dengan menekan lalu menyeret. Saat Anda mengangkat pena, CadCraft membaca apa yang Anda maksud dan memasukkannya ke dalam gambar:

| Goresan Anda | Yang Anda dapatkan |
|---|---|
| Hampir lurus | Sebuah garis. Garis yang hampir datar atau tegak dibuat tepat datar atau tegak. |
| Tertutup dan bulat | Sebuah lingkaran |
| Bagian dari bentuk bulat | Sebuah busur |
| Tertutup dengan empat sudut siku-siku | Sebuah persegi panjang |
| Lainnya | Sebuah polyline dengan sisi persegi |

Ujung goresan ditarik ke ujung terdekat dari yang sudah tergambar, sehingga dinding yang disketsa bertemu dengan dinding di sebelahnya.

## Timpa ukuran

Setelah setiap goresan, baris perintah menampilkan ukurannya (**panjang** garis, **radius** lingkaran atau busur, **lebar** persegi panjang) sebagai nilai awal. Tekan {{key:Enter}} untuk mempertahankannya, atau ketik angka atau panjang seperti `12'6"` untuk menggantinya. Garis mempertahankan ujung pertamanya, lingkaran mempertahankan pusatnya, dan persegi panjang mempertahankan sudut pertamanya.

Tekan {{key:Enter}} pada prompt kosong untuk selesai, atau ketik `U` untuk membatalkan goresan terakhir. Seluruh sesi adalah satu langkah urungkan.

## Membersihkan beberapa goresan sekaligus

{{cmd:SKETCHFIX}} mengumpulkan goresan dan membuat semuanya presisi saat Anda menekan {{key:Enter}}, yang cocok untuk tata letak kasar yang digambar dengan cepat.

:::note
Semuanya dihitung di komputer Anda dengan aturan, tanpa model dan tanpa dikirim ke mana pun.
:::
