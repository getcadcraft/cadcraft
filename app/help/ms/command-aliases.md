---
title: Sunting alias arahan
summary: Simpan alias arahan anda sendiri dalam satu fail teks dalam format yang biasa, import dan eksport fail .pgp, dan muat semula dengan REINIT.
keywords: alias, alias perintah, ALIASEDIT, pgp, pintasan, nama pendek, REINIT, papan kekunci, sesuaikan, sunting alias
from: 2282d36f
---

## Apa yang akan anda pelajari

Cara menambah nama pendek anda sendiri untuk arahan, contohnya `LL` untuk {{cmd:LINE}}, semuanya dalam satu fail teks.

## Tambah alias

1. Buka {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}, atau taip {{cmd:ALIASEDIT}} dan tekan {{key:Enter}}.
2. Tambah satu baris dengan alias, koma dan arahan selepas asterisk:

```
LL,     *LINE
```

3. Klik {{ui:Save}}. Baris arahan memberitahu berapa banyak alias anda yang sedang digunakan.
4. Taip `LL` dan tekan {{key:Enter}}: LINE dimulakan.

Alias anda terletak di atas alias CadCraft sendiri. Baris anda mengatasi alias terbina dengan nama yang sama; alih keluar baris anda dan alias terbina akan kembali.

## Baris yang CadCraft tolak

Editor menyenaraikan setiap masalah dengan nombor barisnya semasa anda menaip:

- arahan itu tidak wujud;
- alias itu sendiri ialah nama arahan (`LINE, *CIRCLE` akan menyembunyikan LINE);
- baris itu bukan `ALIAS, *COMMAND`;
- alias yang sama ada pada dua baris (baris yang kemudian menang).

Baris yang memulakan program pada komputer anda, seperti `NOTEPAD, START, 1, *File to edit: ,`, dilangkau dengan satu nota: aplikasi dalam pelayar tidak boleh memulakan program.

## Bawa alias anda dari program lain

1. Dalam editor alias, klik {{ui:Import .pgp…}} dan pilih fail. Anda juga boleh seret fail `.pgp` ke atas lukisan.
2. Semak masalah yang disenaraikan (arahan yang CadCraft tidak ada ditolak, yang lain berfungsi).
3. Klik {{ui:Save}}.

{{ui:Export .pgp}} menyimpan alias CadCraft dan alias anda sebagai satu fail dalam format yang sama.

## Muat semula fail

Taip {{cmd:REINIT}} dan tekan {{key:Enter}} untuk memohon semula fail alias anda. Ia disimpan dalam pelayar ini; aplikasi desktop akan menyimpannya dalam folder sendiri, dan perkhidmatan awan akan menyegerakkannya.

## Huruf untuk pilihan arahan

Alias menamakan arahan. Untuk menukar huruf yang menjawab pilihan arahan (`P` untuk Polar dalam {{cmd:ARRAY}}), lihat [Berikan pilihan arahan huruf anda sendiri](topic:option-letters).

## Pintasan papan kekunci untuk mana-mana arahan

Alias ditaip; pintasan ialah satu kekunci. Untuk memberi arahan kekunci sendiri:

1. Klik {{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}}, atau taip `KEYS` dan tekan {{key:Enter}}.
2. Klik kotak {{ui:Key}} dan tekan kekunci, contohnya {{key:Alt+Shift+C}}.
3. Dalam {{ui:Runs}}, tulis arahan, dan jika anda mahu, apa yang hendak ditaip selepasnya: `CIRCLE`, atau `ZOOM E`.
4. Klik {{ui:Add}}.

Kekunci memerlukan {{key:Mod}} atau {{key:Alt}} dengan huruf atau digit, atau kekunci fungsi yang bebas ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Kekunci yang telah digunakan oleh CadCraft, aplikasi atau pelayar, dan kekunci yang ada pada butang Alat saya (lihat [Butang sendiri](topic:my-tools)), ditolak, dan kotak itu memberitahu sebabnya. Pintasan disimpan dalam pelayar ini (atau aplikasi desktop); {{ui:Remove}} mengeluarkan satu daripadanya.
