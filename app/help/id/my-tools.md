---
title: Tombol sendiri (Alat saya)
summary: Tambahkan tombol bilah alat yang menjalankan makro Anda sendiri, beri tombol pintasan, bagikan sebagai file, dan bawa tombol dari file kustomisasi CUIx.
keywords: alat saya, tombol kustom, tombol bilah alat, makro, cui, cuix, kustomisasi, menu, tombol pintasan, pintasan keyboard, diesel, ^c^c, impor tombol, ekspor tombol
from: 36618802
---

## Yang akan Anda pelajari

Cara menempatkan tombol Anda sendiri di bilah alat, masing-masing menjalankan makro yang ditulis seperti yang ditulis AutoCAD, cara memberi tombol sebuah tombol pintasan, dan cara membawa tombol dari file CUIx.

## Tambahkan tombol

1. Buka {{ui:Pengaturan}} ({{key:Mod+,}}) dan tetap di tab {{ui:CadCraft}}. Gulir ke {{ui:Alat saya}}.
2. Klik {{ui:Tambah tombol…}}.
3. Isi kotaknya:
   - {{ui:Grup}}: grup bilah alat tempat tombol masuk, misalnya `Alat saya`. Nama baru membuat grup baru.
   - {{ui:Label}}: kata-kata di tombol.
   - {{ui:Makro}}: apa yang diketik, misalnya `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tombol pintasan}}: klik kotak lalu tekan tombolnya, misalnya {{key:Ctrl+Alt+B}}.
   - {{ui:Ikon}}: gambar PNG atau SVG berukuran paling besar 64 KB, atau tidak ada (bintang akan ditampilkan).
4. Klik {{ui:Simpan}}.

Tombol muncul di ujung bilah alat, di grupnya. Klik, atau tekan tombol pintasannya, untuk menjalankannya. {{ui:Edit}} dan {{ui:Hapus}} di daftar mengubah atau menghapusnya.

## Tulis makro

Makro adalah apa yang akan Anda ketik di baris perintah, dengan beberapa tanda:

| Tanda | Artinya |
|---|---|
| `^C` | Membatalkan apa pun yang berjalan (`^C^C` adalah awal yang umum) |
| `;` atau spasi | {{key:Enter}} |
| `\` | Menunggu Anda: klik atau jawaban yang diketik, lalu makro berlanjut |
| `_` atau `.` sebelum perintah | Diterima dan diabaikan (nama internasional dan bawaan) |
| `*` di paling awal | Dijalankan lagi setiap kali selesai, sampai Anda menekan {{key:Esc}} |
| `^O`, `^G` | Menyalakan atau mematikan Ortho dan grid |
| `$M=` | Sisanya adalah DIESEL. Hanya `$(if,…)`, `$(getvar,…)`, `$(=,…)` dan `$(eq,…)` yang dibaca; tombol yang memakai hal lain akan memberitahukannya dan tidak melakukan apa pun |

Contoh:

- `^C^C_line;0,0;@100,0;;` menggambar garis sepanjang 100 dari titik asal.
- `^C^C_circle;\25;` meminta Anda untuk pusatnya, lalu menggambar lingkaran berjari-jari 25 di sana.
- `^C^C_turnright` memutar tampilan 90° ke kanan.

## Tombol pintasan

Sebuah tombol memerlukan {{key:Mod}} (Ctrl, atau Cmd di Mac) atau {{key:Alt}} dengan huruf atau angka, atau salah satu tombol fungsi bebas {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Huruf saja diteruskan ke baris perintah. Tombol yang sudah dipakai CadCraft, aplikasi, atau peramban (seperti {{key:Ctrl+S}} atau {{key:Ctrl+Z}}) dan tombol yang dipakai tombol lain ditolak, dan kotak akan memberitahukan alasannya.

## Bagikan tombol Anda

- {{ui:Ekspor…}} menyimpan setiap grup dan tombol (dengan ikon dan tombol pintasan) sebagai `my-tools.json`.
- {{ui:Impor…}} menambahkan grup dari file seperti itu setelah grup Anda. Nama grup yang sudah Anda pakai mendapat "(2)"; tombol pintasan yang akan bentrok dilewati, dan panel memberitahukannya.

## Bawa tombol dari file CUIx

1. Klik {{ui:Impor CUIx…}} dan pilih file `.cuix`.

Bilah alat dan panel pita dari file itu menjadi grup, masing-masing tombol dengan makro dan gambarnya (PNG, atau BMP yang diubah menjadi PNG). Tombol pintasannya masuk dalam grup tersendiri, masing-masing tombol dengan tombolnya; alias perintah yang mungkin dibawanya masuk dalam grup {{ui:Alias}}. Panel mencantumkan apa yang masuk.

:::note
File hanya dibaca. Perintah yang tidak dimiliki CadCraft didaftarkan dengan namanya, tidak ditebak: tombolnya akan memberitahukan hal itu saat diklik. DIESEL di luar beberapa fungsi di atas, menu, tombol mouse, dan ruang kerja tidak dibaca.
:::

## Hal yang perlu diketahui

- Tombol disimpan di peramban ini (atau aplikasi desktop ini), bukan di dalam gambar.
- Tombol berjalan melalui baris perintah, sehingga dapat diurungkan seperti apa pun yang Anda ketik: satu {{key:Mod+Z}} per perintah yang dijalankannya.
