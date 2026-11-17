---
title: Muat aplikasi (APPLOAD)
summary: Muat rutin LISP dan fail dialognya, nyahmuatkannya, muat semula dari sejarah, dan simpan yang anda gunakan dalam Suite Permulaan.
keywords: appload, ap, muat aplikasi, lisp, lsp, dcl, rutin, suite permulaan, nyahmuat, sejarah, lepas, muat, sesuaikan, urus
from: 89e0ee95
---

## Apa yang akan anda pelajari

Cara memuat rutin LISP (fail `.lsp`) supaya arahannya berfungsi dalam CadCraft, cara menyahmuatnya, dan cara supaya ia dimuat setiap kali CadCraft dimulakan.

## Muat rutin

1. Buka {{ui:Pandangan}} › {{ui:Lagi}} › {{ui:Muat aplikasi…}}, atau taip {{cmd:APPLOAD}} (atau `AP`) dan tekan {{key:Enter}}.
2. Klik {{ui:Muat fail…}} dan pilih satu atau lebih fail `.lsp`. Rutin yang membuka dialog biasanya datang bersama fail `.dcl`: pilih juga.
3. Dialog memberitahu apa yang dibuat oleh setiap fail, contohnya "Dimuat delblocks.lsp: 1 arahan, DELBLOCKS."
4. Klik {{ui:Tutup}}, taip arahan rutin dan tekan {{key:Enter}}.

Anda juga boleh melepaskan fail `.lsp` dan `.dcl` pada lukisan, atau pada dialog Muat aplikasi: ia dimuat serta-merta.

Fail dibaca di sini, dalam pelayar anda. Tiada apa yang dimuat naik.

:::tip
Tekan {{key:Enter}} pada baris arahan kosong untuk menjalankan semula arahan rutin, sama seperti mana-mana arahan lain. Alias arahan anda juga boleh sampai ke sana: lihat "Sunting alias arahan".
:::

## Nyahmuat rutin

Dalam {{ui:Muat aplikasi}}, di bawah {{ui:Aplikasi yang dimuatkan}}, klik {{ui:Nyahmuat}} di sebelah fail. Arahan yang dibuatnya hilang sehingga anda memuatnya semula.

## Muat rutin setiap kali CadCraft dimulakan

1. Muat rutin.
2. Di bawah {{ui:Aplikasi yang dimuatkan}}, klik {{ui:Tambah ke Suite Permulaan}} di sebelahnya.

Mulai sekarang ia dimuat sendiri setiap kali CadCraft dimulakan dalam pelayar ini. Untuk berhenti, klik {{ui:Alih keluar (R)}} di sebelahnya di bawah {{ui:Suite Permulaan}}.

Suite Permulaan menyimpan salinan setiap fail dalam storan pelayar ini. Jika anda menukar rutin, muat fail baharu dan tambahkannya semula.

## Muat acad.lsp dan acaddoc.lsp dari folder sokongan (Studio)

Dalam CadCraft Studio, {{ui:Folder sokongan}} dalam dialog {{ui:Muat aplikasi}} mengambil folder pada komputer anda. Klik {{ui:Pilih folder…}}. Apabila CadCraft dimulakan ia membaca `acad.lsp` kemudian `acaddoc.lsp` dari folder itu (tanpa mengira huruf besar atau kecil nama), memuatkannya, kemudian memuatkan Suite Permulaan. `acaddoc.lsp` dibaca semula setiap kali tab lukisan baharu dibuka. Tiada apa lain dalam folder dibaca, dan fail melebihi 2 MB dilangkau dengan mesej.

Jika fail mentakrifkan fungsi bernama `S::STARTUP`, ia dijalankan sekali selepas fail dimuatkan (juga selepas Suite Permulaan). {{ui:Muat sekarang}} melakukan perkara yang sama atas permintaan; {{ui:Kosongkan}} melupakan folder.

Dalam pelayar, halaman tidak boleh menyimpan folder, jadi tiada folder sokongan: gunakan Suite Permulaan di atas. Fail `.fas` dan `.vlx` yang disusun serta program natif kekal ditolak.

## Muat semula fail dari sejarah

{{ui:Sejarah}} menyenaraikan fail yang anda muat dalam pelayar ini, yang terbaru dahulu. Klik {{ui:Muat}} di sebelah fail untuk memuatnya semula, tanpa mencarinya pada komputer anda.

## Fail yang CadCraft tidak boleh muat

| Fail | Apa itu | Apa yang perlu dilakukan |
|---|---|---|
| `.fas`, `.vlx` | LISP yang disusun atau dilindungi | muat sumber `.lsp` sebagai ganti |
| `.arx`, `.crx`, `.dbx` | program Windows natif | tiada cara untuk menjalankan ini dalam CadCraft |
| `.dvb` | projek VBA | tiada cara untuk menjalankan ini dalam CadCraft |
| `.craft`, `.lua`, `.py` | skrip CraftScript | buka dalam ruang kerja Skrip PartCraft |

Dialog Muat aplikasi memberitahu fail yang mana satu daripada ini apabila anda memilihnya.

## Hentikan rutin

Tekan {{key:Esc}}. Pada salah satu gesaan rutin, Esc membatalkannya mengikut cara yang dijangkakan rutin (pembersihannya sendiri dijalankan). Jika ia sibuk dan tidak bertanya apa-apa, Esc menghentikannya terus dan memberitahu; rutin yang dimuatkan anda kekal dimuat.

:::note
Setiap perkara yang diubah rutin dalam lukisan ialah satu langkah: satu {{key:Mod+Z}} mengembalikan semuanya.
:::
