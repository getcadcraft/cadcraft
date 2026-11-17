---
title: Pangkas dan panjangkan
summary: Potong garisan ke belakang di tempat garisan lain menyilang, dan panjangkannya untuk bertemu garisan lain, satu keping pada satu masa atau banyak sekaligus dengan menyeret laluan melaluinya.
keywords: trimextendmode, seret tetingkap, pangkas, panjangkan, tr, ex, pangkas pantas, seret, bentuk bebas, laluan, pagar, silang, shift, tepi pemotong, tepi sempadan, edgemode, mod, standard, pantas, padam, pratonton, dinding, pembersihan
from: 25fbc5bd
---

## Apa yang akan anda pelajari

Cara {{cmd:TRIM}} dan {{cmd:EXTEND}} berfungsi, dan cara pantas untuk menggunakannya: seret melalui banyak keping sekaligus, tahan {{key:Shift}} untuk bertukar antara memangkas dan memanjangkan, dan lihat apa yang akan hilang sebelum anda klik.

## Pangkas satu keping

1. Lukis garisan mendatar yang panjang dan dua garisan pendek merentasinya.
2. Taip `TR` dan tekan {{key:Enter}}. Sejarah berbunyi `Tetapan semasa: Mod pantas, tepi: Tiada lanjutan`.
3. Letakkan penunjuk pada garisan panjang di antara dua garisan pendek. Keping itu bertukar kelabu dan putus-putus: ialah yang akan hilang.
4. Klik. Keping itu hilang.
5. Tekan {{key:Enter}} untuk menamatkan arahan.

Dalam mod Pantas (lalai) setiap objek yang kelihatan ialah tepi pemotong, jadi anda tidak perlu memilih tepi dahulu. Klik keping yang anda mahu hilang. Objek yang tiada apa menyilanginya dipadam sepenuhnya, dan sejarah memberitahu anda.

## Pangkas banyak keping dalam satu seretan

1. Lukis garisan mendatar yang panjang dan sepuluh garisan menegak pendek merentasinya.
2. Taip `TR` dan tekan {{key:Enter}}.
3. Tekan butang tetikus di atas garisan panjang, di sebelah kiri garisan menegak pertama, dan seret merentasi kesemua sepuluh di atas garisan panjang.

Semasa anda menyeret, laluan ditunjukkan sebagai garisan putus-putus, dan setiap keping yang telah disilang bertukar kelabu. Lepaskan: kesemua sepuluh keping atas dipangkas dalam satu langkah. Taip `U` dan tekan {{key:Enter}} untuk mengembalikan semuanya sekaligus.

:::tip
Anda juga boleh klik dua tempat kosong: garisan di antara keduanya berfungsi seperti laluan yang diseret. Taip `F` (Pagar) untuk mengklik satu siri titik sebaliknya, kemudian tekan {{key:Enter}}.
:::

:::touch
Seret jari dengan cara yang sama. Ketik pada keping akan memangkasnya.
:::

## Panjangkan sebaliknya, dengan Shift

1. Lukis garisan menegak, dan lima garisan mendatar pendek di sebelah kirinya yang berhenti sebelum ia.
2. Taip `TR` dan tekan {{key:Enter}}.
3. Tahan {{key:Shift}}. Letakkan penunjuk pada garisan pendek: bahagian yang ia akan bertambah ditunjukkan kelabu dan putus-putus.
4. Masih menahan {{key:Shift}}, seret ke bawah melalui lima garisan pendek.

Kesemua lima kini berjalan ke garisan menegak. {{key:Shift}} berfungsi sebaliknya dalam {{cmd:EXTEND}} (`EX`): klik memanjangkan, {{key:Shift}}+klik memangkas. Panjangkan memanjangkan hujung yang paling dekat dengan tempat anda klik atau tempat laluan menyilang.

## Pangkas dalam tetingkap

1. Taip `TR` dan tekan {{key:Enter}}.
2. Taip `C` dan tekan {{key:Enter}}.
3. Klik dua penjuru di sekeliling keping yang hendak dibuang.

Setiap keping yang terletak sekurang-kurangnya sebahagian di dalam tetingkap dipangkas.

Untuk mendapat tetingkap hanya dengan menyeret, tanpa menaip `C`: {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to trim and extend}} ›
{{ui:A window}}. Kemudian menekan tempat kosong dan menyeret akan melukis kotak, dan setiap keping yang disentuhnya dipangkas (atau dipanjangkan, dalam {{cmd:EXTEND}}, atau dengan {{key:Shift}}). {{ui:A path}} (permulaan) mengembalikan laluan bentuk bebas. Baris tetapan di permulaan TRIM memberitahu yang mana satu aktif.

## Pilih tepi pemotong (mod Standard)

Kadang-kadang hanya satu garisan sepatutnya memotong, seperti muka dinding dengan banyak garisan lain menyilanginya.

1. Taip `TR` dan tekan {{key:Enter}}.
2. Taip `O` (Mod) dan tekan {{key:Enter}}, kemudian taip `S` (Standard) dan tekan {{key:Enter}}.
3. Pada `Pilih tepi pemotong`, klik garisan tepi (atau seret tetingkap), kemudian tekan {{key:Enter}}. Menekan {{key:Enter}} tanpa apa-apa dipilih menjadikan setiap objek sebagai tepi.
4. Klik atau seret melalui keping yang hendak dibuang.

Hanya tepi yang dipilih memotong, dan objek yang tiada tepi menyilanginya dibiarkan. Mod ini kekal sehingga anda menutup halaman; taip `O`, kemudian `Q` untuk kembali ke Pantas. {{cmd:TRIMEXTENDMODE}} menetapkannya sebelum anda mula, seperti pembolehubah dengan nama itu di tempat lain: `0` Standard, `1` Pantas. Tepi pemotong (`T`) memilih tepi baharu pada bila-bila masa; dalam {{cmd:EXTEND}} ia ialah Tepi sempadan (`B`).

## Tepi yang akan sampai

1. Taip `TR` dan tekan {{key:Enter}}.
2. Taip `E` (Tepi) dan tekan {{key:Enter}}, kemudian `E` (Lanjut) dan tekan {{key:Enter}}.

Sekarang garisan atau lengkok pemotong yang berhenti pendek dikira seolah-olah ia terus: garisan pendek memotong di mana ia akan bersilang jika ia lebih panjang. Taip `E`, kemudian `N` (Tiada lanjutan) untuk bertukar balik. Ini sama dengan EDGEMODE 1 dan 0.

## Padam tanpa keluar

Taip `R` (Padam) dan tekan {{key:Enter}}, pilih objek untuk dipadam, dan tekan {{key:Enter}}. TRIM terus berjalan.

## Kesilapan lazim

- **Keseluruhan garisan hilang.** Dalam mod Pantas objek yang tiada apa menyilanginya dipadam. Taip `U` untuk mengembalikannya, atau tukar ke mod Standard (`O`, `S`).
- **"Tiada apa untuk dipangkas di situ: tiada tepi yang dipilih menyilang objek itu."** Mod Standard hanya memotong pada tepi yang anda pilih. Taip `T` untuk memilihnya semula.
- **"Tiada sempadan ke arah itu."** Lanjut tidak menjumpai apa-apa di hadapan. Klik lebih dekat dengan hujung yang sepatutnya membesar, atau hidupkan `E` (Tepi, Lanjut) untuk sempadan yang berhenti pendek.
- **Seretan melukis lasso sebaliknya.** Seretan hanya memangkas semasa TRIM atau EXTEND meminta objek. Tanpa arahan berjalan, seretan memilih (lihat [Pemilihan lasso](topic:lasso-selection)).
- **Hanya garisan, lengkok, bulatan dan polygaris boleh dipangkas.** Pecahkan blok dahulu untuk memangkas garisannya.
