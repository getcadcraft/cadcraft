---
title: Sunting alias arahan
summary: Simpan alias arahan anda sendiri dalam satu fail teks dalam format biasa, import dan eksport fail .pgp, dan muat semula dengan REINIT.
keywords: alias, alias, aliasedit, pgp, pintasan, nama pendek, reinit, papan kekunci, sesuaikan, sunting alias
from: 6ab6fa0e
---

## Apa yang akan anda pelajari

Cara menambah nama pendek anda sendiri untuk arahan, contohnya `LL` untuk {{cmd:LINE}}, semuanya dalam satu fail teks.

## Tambah alias

1. Buka {{ui:Pandangan}} › {{ui:Lagi}} › {{ui:Sunting alias…}}, atau taip {{cmd:ALIASEDIT}} dan tekan {{key:Enter}}.
2. Tambah baris dengan alias, koma dan arahan selepas bintang:

```
LL,     *LINE
```

3. Klik {{ui:Simpan}}. Baris arahan memberitahu berapa banyak alias anda yang sedang digunakan.
4. Taip `LL` dan tekan {{key:Enter}}: LINE bermula.

Alias anda berada di atas alias CadCraft sendiri. Baris anda menang ke atas alias terbina dengan nama yang sama; alih keluar baris anda dan yang terbina kembali.

## Baris yang CadCraft tolak

Editor menyenaraikan setiap masalah dengan nombor barisnya semasa anda menaip:

- arahan itu tidak wujud;
- alias itu ialah nama arahan itu sendiri (`LINE, *CIRCLE` akan menyembunyikan LINE);
- baris itu bukan `ALIAS, *COMMAND`;
- alias yang sama terdapat pada dua baris (baris yang lebih lewat menang).

Baris yang memulakan program pada komputer anda, seperti `NOTEPAD, START, 1, *File to edit: ,`, dilangkau dengan nota: aplikasi dalam pelayar tidak boleh memulakan program.

## Bawa alias anda dari program lain

1. Dalam editor alias, klik {{ui:Import .pgp…}} dan pilih fail. Anda juga boleh menjatuhkan fail `.pgp` pada lukisan.
2. Semak masalah yang disenaraikan (arahan yang CadCraft tidak miliki ditolak, yang lain berfungsi).
3. Klik {{ui:Simpan}}.

{{ui:Export .pgp}} menyimpan alias CadCraft dan alias anda sebagai satu fail dalam format yang sama.

## Muat semula fail

Taip {{cmd:REINIT}} dan tekan {{key:Enter}} untuk memohon semula fail alias anda. Ia disimpan dalam pelayar ini; aplikasi desktop akan menyimpannya dalam folder sendiri, dan perkhidmatan awan akan menyegerakkannya.

## Pintasan papan kekunci untuk mana-mana arahan

Alias ditaip; pintasan ialah kekunci. Untuk memberi arahan kekunci sendiri:

1. Klik {{ui:Pandangan}} › {{ui:Lagi}} › {{ui:Pintasan papan kekunci…}}, atau taip `KEYS` dan tekan {{key:Enter}}.
2. Klik kotak {{ui:Kekunci}} dan tekan kekunci, contohnya {{key:Alt+Shift+C}}.
3. Dalam {{ui:Menjalankan}}, tulis arahan, dan jika mahu, apa yang hendak ditaip selepasnya: `CIRCLE`, atau `ZOOM E`.
4. Klik {{ui:Tambah (A)}}.

Kekunci memerlukan {{key:Mod}} atau {{key:Alt}} dengan huruf atau digit, atau kekunci fungsi yang bebas ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Kekunci yang CadCraft, aplikasi atau pelayar sudah gunakan, dan kekunci yang dimiliki oleh butang Alatan saya (lihat [Butang sendiri](topic:my-tools)), ditolak, dan kotak itu memberitahu sebabnya. Pintasan disimpan dalam pelayar ini (atau aplikasi desktop); {{ui:Alih keluar (R)}} membuangnya.
