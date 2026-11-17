---
title: Muat aplikasi (APPLOAD)
summary: Muat rutin LISP dan file dialognya, lepas muatannya, muat ulang dari riwayat, dan simpan rutin yang Anda pakai di Startup Suite.
keywords: appload, ap, muat aplikasi, lisp, lsp, dcl, rutin, startup suite, lepas muatan, riwayat, seret, muat, sesuaikan, kelola, unload, history, drop, customize, manage
from: 89e0ee95
---

## Yang akan Anda pelajari

Cara memuat rutin LISP (file `.lsp`) agar perintahnya berfungsi di CadCraft, cara melepasnya, dan cara membuatnya dimuat setiap kali CadCraft dimulai.

## Muat rutin

1. Buka {{ui:Tampilan}} › {{ui:Lainnya}} › {{ui:Muat aplikasi…}}, atau ketik {{cmd:APPLOAD}} (atau `AP`) lalu tekan {{key:Enter}}.
2. Klik {{ui:Muat file…}} dan pilih satu atau beberapa file `.lsp`. Rutin yang membuka dialog biasanya disertai file `.dcl`: pilih juga.
3. Dialog menyatakan apa yang dibuat setiap file, misalnya "Dimuat delblocks.lsp: 1 perintah, DELBLOCKS."
4. Klik {{ui:Tutup}}, ketik perintah rutinnya, lalu tekan {{key:Enter}}.

Anda juga dapat menyeret file `.lsp` dan `.dcl` ke gambar, atau ke dialog Muat aplikasi: file langsung dimuat.

File dibaca di sini, di peramban Anda. Tidak ada yang diunggah.

:::tip
Tekan {{key:Enter}} pada baris perintah kosong untuk menjalankan kembali perintah rutin, sama seperti perintah lainnya. Alias perintah Anda juga dapat menjangkaunya: lihat "Sunting alias perintah".
:::

## Lepas muatan rutin

Di {{ui:Muat aplikasi}}, di bawah {{ui:Aplikasi yang dimuat}}, klik {{ui:Lepas muatan}} di samping file. Perintah yang dibuatnya hilang sampai Anda memuatnya lagi.

## Muat rutin setiap kali CadCraft dimulai

1. Muat rutinnya.
2. Di bawah {{ui:Aplikasi yang dimuat}}, klik {{ui:Tambahkan ke Startup Suite}} di sampingnya.

Sejak saat itu rutin dimuat dengan sendirinya setiap kali CadCraft dimulai di peramban ini. Untuk menghentikannya, klik {{ui:Buang}} di sampingnya di bawah {{ui:Startup Suite}}.

Startup Suite menyimpan salinan setiap file di penyimpanan peramban ini. Jika Anda mengubah rutin, muat file baru dan tambahkan lagi.

## Muat acad.lsp dan acaddoc.lsp dari folder dukungan (Studio)

Di CadCraft Studio, {{ui:Folder dukungan}} di dialog {{ui:Muat aplikasi}} menunjuk ke folder di komputer Anda. Klik {{ui:Pilih folder…}}. Saat CadCraft dimulai, ia membaca `acad.lsp` lalu `acaddoc.lsp` dari folder itu (apa pun huruf besar-kecil namanya), memuatnya, lalu memuat Startup Suite. `acaddoc.lsp` dibaca ulang setiap kali tab gambar baru dibuka. Tidak ada file lain di folder yang dibaca, dan file lebih dari 2 MB dilewati dengan pesan.

Jika sebuah file mendefinisikan fungsi bernama `S::STARTUP`, fungsi itu dijalankan sekali setelah file dimuat (juga setelah Startup Suite). {{ui:Muat sekarang}} melakukan hal yang sama atas permintaan; {{ui:Kosongkan}} melupakan folder.

Di peramban, halaman tidak dapat menyimpan folder, sehingga tidak ada folder dukungan: gunakan Startup Suite di atas. File `.fas` dan `.vlx` yang dikompilasi serta program native tetap ditolak.

## Muat file lagi dari riwayat

{{ui:Riwayat}} mencantumkan file yang Anda muat di peramban ini, yang terbaru di atas. Klik {{ui:Muat}} di samping salah satunya untuk memuatnya lagi, tanpa mencarinya di komputer Anda.

## File yang tidak dapat dimuat CadCraft

| File | Apa itu | Yang harus dilakukan |
|---|---|---|
| `.fas`, `.vlx` | LISP terkompilasi atau dilindungi | muat sumber `.lsp` sebagai gantinya |
| `.arx`, `.crx`, `.dbx` | program Windows native | tidak ada cara untuk menjalankannya di CadCraft |
| `.dvb` | proyek VBA | tidak ada cara untuk menjalankannya di CadCraft |
| `.craft`, `.lua`, `.py` | skrip CraftScript | buka di ruang kerja Skrip di PartCraft |

Dialog Muat aplikasi menyatakan jenis file ini saat Anda memilihnya.

## Hentikan rutin

Tekan {{key:Esc}}. Pada salah satu perintah rutin, Esc membatalkannya dengan cara yang diharapkan rutin (pembersihannya dijalankan). Jika rutin sedang sibuk dan tidak meminta apa pun, Esc langsung menghentikannya dan memberi tahu Anda; rutin yang dimuat tetap dimuat.

:::note
Semua yang diubah rutin di gambar adalah satu langkah: satu {{key:Mod+Z}} mengembalikan semuanya.
:::
