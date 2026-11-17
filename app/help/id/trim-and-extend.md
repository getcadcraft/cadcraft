---
title: Pangkas dan perpanjang
summary: Potong garis mundur di tempat garis lain memotongnya dan panjangkan agar bertemu dengan garis lain, satu per satu atau banyak sekaligus dengan menyeret jalur melewatinya.
keywords: trimextendmode, seret jendela, pangkas, perpanjang, tr, ex, pangkas cepat, seret, bebas, jalur, pagar, silang, shift, tepi potong, tepi batas, edgemode, mode, standar, cepat, hapus, pratinjau, dinding, pembersihan
from: 25fbc5bd
---

## Yang akan Anda pelajari

Cara kerja {{cmd:TRIM}} dan {{cmd:EXTEND}}, dan cara cepat menggunakannya: seret melewati banyak potongan sekaligus, tahan {{key:Shift}} untuk beralih antara memangkas dan memperpanjang, serta lihat apa yang akan hilang sebelum Anda mengklik.

## Pangkas satu potongan

1. Gambar garis panjang horizontal dan dua garis pendek yang melintanginya.
2. Ketik `TR` dan tekan {{key:Enter}}. Riwayat menulis `Pengaturan saat ini: Mode cepat, tepi: Tanpa perpanjang`.
3. Letakkan penunjuk di garis panjang di antara dua garis pendek. Potongan itu menjadi abu-abu dan putus-putus: itulah yang akan hilang.
4. Klik. Potongan itu menghilang.
5. Tekan {{key:Enter}} untuk mengakhiri perintah.

Dalam mode Cepat (bawaan) setiap objek yang terlihat adalah tepi potong, jadi Anda tidak pernah perlu memilih tepi lebih dulu. Klik potongan yang ingin dihilangkan. Objek yang tidak dilintasi apa pun dihapus utuh, dan riwayat menyebutkannya.

## Pangkas banyak potongan dalam satu seretan

1. Gambar garis panjang horizontal dan sepuluh garis vertikal pendek yang melintanginya.
2. Ketik `TR` dan tekan {{key:Enter}}.
3. Tekan tombol mouse di atas garis panjang, di sebelah kiri garis vertikal pertama, lalu seret melewati kesepuluhnya di atas garis panjang.

Saat Anda menyeret, jalur tampil sebagai garis putus-putus, dan setiap potongan yang dilintasinya menjadi abu-abu. Lepaskan: kesepuluh potongan atas dipangkas dalam satu langkah. Ketik `U` dan tekan {{key:Enter}} untuk mengembalikan semuanya sekaligus.

:::tip
Anda juga bisa mengklik dua titik kosong: garis di antara keduanya bekerja seperti jalur yang diseret. Ketik `F` (Pagar) untuk mengklik serangkaian titik sebagai gantinya, lalu tekan {{key:Enter}}.
:::

:::touch
Seret jari dengan cara yang sama. Ketukan pada potongan akan memangkasnya.
:::

## Perpanjang sebagai gantinya, dengan Shift

1. Gambar garis vertikal, dan lima garis horizontal pendek di kirinya yang berhenti sebelum garis itu.
2. Ketik `TR` dan tekan {{key:Enter}}.
3. Tahan {{key:Shift}}. Letakkan penunjuk di garis pendek: bagian yang akan bertambah panjang tampil abu-abu dan putus-putus.
4. Masih menahan {{key:Shift}}, seret ke bawah melewati kelima garis pendek.

Kelimanya kini mencapai garis vertikal. {{key:Shift}} bekerja terbalik di {{cmd:EXTEND}} (`EX`): klik memperpanjang, {{key:Shift}}+klik memangkas. Perpanjang menambah panjang ujung yang paling dekat dengan tempat Anda mengklik atau tempat jalur memotong.

## Pangkas di dalam jendela

1. Ketik `TR` dan tekan {{key:Enter}}.
2. Ketik `C` dan tekan {{key:Enter}}.
3. Klik dua sudut di sekeliling potongan yang akan dihapus.

Setiap potongan yang berada sebagian di dalam jendela akan dipangkas.

Untuk mendapatkan jendela hanya dengan menyeret, tanpa mengetik `C`: {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Menyeret untuk memangkas dan memperpanjang}} › {{ui:Jendela}}. Lalu menekan di tempat kosong dan menyeret akan menggambar kotak, dan setiap potongan yang tersentuhnya akan dipangkas (atau diperpanjang, di {{cmd:EXTEND}}, atau dengan {{key:Shift}}). {{ui:Lintasan}} (bawaan) mengembalikan jalur bebas. Baris pengaturan di awal TRIM menyebutkan mana yang aktif.

## Pilih tepi potong (mode Standar)

Kadang hanya satu garis yang boleh memotong, misalnya muka dinding dengan banyak garis lain yang melintanginya.

1. Ketik `TR` dan tekan {{key:Enter}}.
2. Ketik `O` (mOde) dan tekan {{key:Enter}}, lalu ketik `S` (Standar) dan tekan {{key:Enter}}.
3. Pada `Pilih tepi potong`, klik garis tepi (atau seret jendela), lalu tekan {{key:Enter}}. Menekan {{key:Enter}} tanpa ada yang dipilih menjadikan setiap objek sebagai tepi.
4. Klik atau seret melewati potongan yang akan dihapus.

Hanya tepi yang dipilih yang memotong, dan objek yang tidak dilintasi tepi dibiarkan. Mode tetap aktif sampai Anda menutup halaman; ketik `O`, lalu `Q` untuk kembali ke Cepat. {{cmd:TRIMEXTENDMODE}} mengaturnya sebelum Anda mulai, seperti variabel dengan nama itu di tempat lain: `0` Standar, `1` Cepat. `T` (Tepi potong) memilih tepi baru kapan saja; di {{cmd:EXTEND}} itu `B` (Tepi batas).

## Tepi yang akan mencapai

1. Ketik `TR` dan tekan {{key:Enter}}.
2. Ketik `E` (Tepi) dan tekan {{key:Enter}}, lalu `E` (Perpanjang) dan tekan {{key:Enter}}.

Sekarang garis atau busur pemotong yang berhenti sebelum ujungnya dihitung seolah-olah berlanjut: garis pendek memotong di tempat ia akan bersilangan jika lebih panjang. Ketik `E`, lalu `N` (Tanpa perpanjang) untuk kembali. Ini sama dengan EDGEMODE 1 dan 0.

## Hapus tanpa keluar

Ketik `R` (Hapus) dan tekan {{key:Enter}}, pilih objek yang akan dihapus, dan tekan {{key:Enter}}. TRIM berlanjut.

## Kesalahan umum

- **Seluruh garis hilang.** Di mode Cepat, objek yang tidak dilintasi apa pun akan dihapus. Ketik `U` untuk mengembalikannya, atau beralih ke mode Standar (`O`, `S`).
- **"Tidak ada yang bisa dipangkas di sana: tidak ada tepi yang dipilih melintasi objek itu."** Mode Standar hanya memotong di tepi yang Anda pilih. Ketik `T` untuk memilihnya lagi.
- **"Tidak ada batas di arah itu."** Perpanjang tidak menemukan apa pun di depan. Klik lebih dekat ke ujung yang seharusnya bertambah, atau aktifkan `E` (Tepi, Perpanjang) untuk batas yang berhenti sebelum ujungnya.
- **Seretan menggambar lasso sebagai gantinya.** Seretan hanya memangkas saat TRIM atau EXTEND meminta sebuah objek. Tanpa perintah yang berjalan, seretan memilih (lihat [Pilihan laso](topic:lasso-selection)).
- **Hanya garis, busur, lingkaran, dan polyline yang bisa dipangkas.** Urai blok terlebih dahulu untuk memangkas garisnya.
