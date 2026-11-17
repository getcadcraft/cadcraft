---
title: "Kebijakan default: atur isi awal gambar baru"
summary: Tentukan sekali satuan, format panjang, presisi, tinggi teks, dan kertas lembar yang dimulai oleh gambar baru, untuk pekerjaan metrik dan imperial, dan bagikan kebijakan ke seluruh kantor sebagai file kecil.
keywords: default, defaults, kebijakan default, default policies, kebijakan, policy, standar kantor, office standard, default kantor, office defaults, template, gambar baru, new drawing, satuan, units, insunits, format panjang, length format, arsitektural, architectural, presisi, precision, luprec, tinggi teks, text height, kertas lembar, sheet paper, a1, bagikan, share, ekspor, export, impor, import, json
from: 7b80fd13
---

## Yang akan Anda lakukan

Beri tahu CadCraft apa yang harus dimulai oleh gambar baru, agar tidak ada orang di kantor yang harus menjalankan UNITS dan mengubah hal yang sama setiap kali. Ini adalah add-on: ia mati sampai Anda menyalakannya, dan kebijakan yang tidak Anda atur membiarkan default CadCraft sendiri tetap seperti semula.

:::note
Ini adalah default untuk gambar **baru** dan lembar **baru**. Gambar yang sudah Anda mulai tidak diubah, begitu pula gambar yang Anda buka.
:::

## Langkah

1. Buka Pengaturan, buka {{ui:Add-ons}} dan nyalakan {{ui:Kebijakan default}}.
2. Di Pengaturan, buka tab **CadCraft** dan pilih {{ui:Kebijakan default}} pada daftar di sebelah kiri.
3. Atur kebijakan yang Anda inginkan. Setiap kebijakan dimulai dari **milik CadCraft**. Kebijakan dengan kotak **Metrik** dan **Imperial** mengambil satu nilai untuk setiap jenis gambar; isi hanya yang Anda perlukan.
4. Tidak ada tombol Simpan: setiap perubahan disimpan saat Anda membuatnya.
5. Mulai gambar baru. Ia memiliki satuan, format panjang, presisi, dan tinggi teks yang Anda atur, dan lembar baru pertamanya berada di kertas yang Anda pilih.

## Kebijakannya

- **Satuan gambar baru**: tidak ada, milimeter, sentimeter, meter, inci, atau kaki.
- **Format panjang** dan **Presisi panjang**: yang diatur perintah UNITS, untuk gambar baru.
- **Tinggi teks baru**, dalam satuan gambar.
- **Kertas lembar baru**: kertas yang dipakai Lembar baru.
- **Ukuran anotasi di kertas** (Pengaturan › Global › Kebijakan default): tinggi yang diinginkan kantor, dalam milimeter seperti tercetak. CadCraft memakai yang untuk catatan dan label: {{cmd:ANNOSCALE}} mengatur tinggi teks baru dimulai dari tinggi itu pada skala anotasi. Lihat [Satuan, kertas, dan skala](topic:units-papers-scales#annotate-by-scale).

Gambar dalam inci atau kaki memakai nilai Imperial; gambar lain memakai nilai Metrik. Gambar tanpa satuan memakai sistem satuan yang diatur di Pengaturan › Global › Kebijakan default, atau Metrik jika tidak ada yang diatur.

## Bagikan ke seluruh kantor

1. Di Pengaturan, buka tab **Global** dan pilih {{ui:Kebijakan default}}.
2. Klik {{ui:Simpan ke file}}. Anda mendapat file kecil yang berakhiran `.ccdefaults.json`.
3. Di komputer lain, nyalakan add-on, buka tempat yang sama, dan klik {{ui:Muat dari file}}. Kebijakan dari file menggantikan kebijakan di komputer itu.

Satu file menyimpan kebijakan setiap aplikasi CadCraft, sehingga file yang sama juga bekerja di BimCraft.

## Perlu diketahui

- Tidak ada kebijakan untuk skala tampilan lembar: tampilan lembar baru dipas ke gambar, dan Anda mengatur skalanya di lembar.
- Tidak ada kebijakan untuk gaya dimensi: gambar baru tidak memiliki gaya dimensi bernama. Atur dimensi dengan DIMSTYLE, atau mulai dari gambar yang sudah memilikinya.
- File adalah JSON biasa yang terbuka. Kebijakan yang disebut file tetapi tidak dikenal versi ini dilewati dan disebutkan dalam pesan; sisanya tetap dimuat.
- Kebijakan disimpan di peramban ini, bukan di gambar. Matikan add-on dan semuanya kembali menjadi milik CadCraft.
