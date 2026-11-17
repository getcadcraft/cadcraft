---
title: Menggambar dengan koordinat
summary: Gambar garis besar lantai yang tepat dengan mengetik koordinat absolut, relatif, dan polar, serta dengan entri jarak langsung.
keywords: garis, pline, polyline, koordinat, relatif, polar, absolut, jarak langsung, @, mengetik titik, tepat, ortho
from: 19e82350
---

## Yang akan Anda buat

Garis besar ruangan berbentuk L berukuran 6000 kali 4500 dengan takik 2000 kali 1500, digambar secara tepat, ditambah dinding pada sudut 30 derajat. Anda akan memakai keempat cara mengetik titik. Bekerjalah dalam milimeter: satu satuan gambar mewakili satu milimeter.

Referensi cepat untuk setiap format ada di [Pemasukan koordinat dan jarak](topic:coordinate-entry).

## Sebelum Anda mulai

1. Buka CadCraft. Jika sebuah gambar sedang terbuka, klik {{ui:Baru}} terlebih dahulu.
2. Tekan {{key:Esc}} agar tidak ada yang dipilih. Panel kanan menampilkan {{ui:Pengaturan saat ini}}.
3. Atur {{ui:Satuan}} ke {{ui:Milimeter}}. Tidak ada yang diubah ukurannya; ini hanya memberi tahu lembar dan plot arti satu satuan.

## Koordinat absolut: titik pertama

Koordinat absolut adalah posisi yang diukur dari titik asal, diketik sebagai `x,y`.

1. Ketik `L` lalu tekan {{key:Enter}}. Prompt berbunyi `Specify first point:`.
2. Ketik `0,0` lalu tekan {{key:Enter}}.

Garis kini ditarik dari titik asal ke kursor silang. Koordinat di bilah status menampilkan jarak dan sudut dari titik awal saat Anda bergerak.

## Koordinat relatif: @dx,dy

Koordinat relatif diketik sebagai `@dx,dy`: sejauh mendatar, sejauh vertikal, dari titik terakhir. Angka negatif berarti ke kiri atau ke bawah.

3. Ketik `@6000,0` lalu tekan {{key:Enter}}. Garis 6000 membentang ke kanan.
4. Ketik `@0,3000` lalu tekan {{key:Enter}}.
5. Ketik `@-2000,0` lalu tekan {{key:Enter}}.
6. Ketik `@0,1500` lalu tekan {{key:Enter}}.

Anda akan melihat empat garis tersambung yang naik di sisi kanan ruangan.

## Entri jarak langsung: angka saja

Saat Anda mengetik satu angka, CadCraft bergerak sejauh jarak itu ke arah kursor silang. Aktifkan Ortho agar arahnya menempel ke horizontal atau vertikal.

7. Tekan {{key:F8}}, atau klik {{ui:Ortho}} di bilah status. Bilah status menampilkan "Ortho nyala".
8. Gerakkan kursor ke kiri titik terakhir. Garis karet tetap mendatar.
9. Ketik `4000` lalu tekan {{key:Enter}}. Garis bergerak 4000 ke kiri.
10. Gerakkan kursor ke bawah titik terakhir.
11. Ketik `4500` lalu tekan {{key:Enter}}. Anda kembali ke titik awal.
12. Tekan {{key:Enter}} pada prompt kosong untuk mengakhiri perintah.

:::mac
F8 mungkin mengontrol pemutaran media pada keyboard Mac. Tahan **fn** dan tekan F8, atau klik {{ui:Ortho}}. Lihat [Tombol, mouse, dan trackpad](common:keys).
:::

Kini Anda memiliki garis besar berbentuk L yang tertutup, terdiri dari enam garis terpisah.

13. Klik {{ui:Batas}} untuk melihat semuanya.

## Koordinat polar: @jarak<sudut

Koordinat polar diketik sebagai `@jarak<sudut`. Sudut dalam derajat, diukur berlawanan arah jarum jam dari arah X positif: 0 ke kanan, 90 ke atas, 180 ke kiri, 270 (atau -90) ke bawah.

14. Ketik `L` lalu tekan {{key:Enter}}.
15. Ketik `6000,0` lalu tekan {{key:Enter}} untuk mulai di sudut kanan bawah.
16. Ketik `@2500<-30` lalu tekan {{key:Enter}}. Garis 2500 meninggalkan sudut, menuju ke bawah dan ke kanan pada 30 derajat di bawah horizontal.
17. Tekan {{key:Enter}} untuk mengakhiri perintah.

Koordinat polar tanpa `@`, seperti `2500<30`, diukur dari titik asal, bukan dari titik terakhir.

## Garis besar yang sama sebagai satu polyline

Enam garis terpisah cukup untuk banyak pekerjaan, tetapi polyline adalah satu objek: ia dapat di-offset, diukur, dan dipilih sebagai satu kesatuan. Gunakan {{cmd:PLINE}} dengan masukan yang sama.

1. Ketik `PL` lalu tekan {{key:Enter}}.
2. Ketik `0,-6000` lalu tekan {{key:Enter}} untuk mulai di bawah garis besar pertama.
3. Ketik `@6000,0`, lalu tekan {{key:Enter}}.
4. Ketik `@0,3000`, lalu tekan {{key:Enter}}.
5. Ketik `@-2000,0`, lalu tekan {{key:Enter}}.
6. Ketik `@0,1500`, lalu tekan {{key:Enter}}.
7. Ketik `@-4000,0`, lalu tekan {{key:Enter}}.
8. Ketik `C` lalu tekan {{key:Enter}}. Polyline menutup dan perintah berakhir.
9. Klik garis besar baru. Panel kanan menampilkan "Polyline", {{ui:Verteks}}, {{ui:Panjang}} dan, karena tertutup, {{ui:Luas}}.

Luasnya harus 24000000 (milimeter persegi, yaitu 24 meter persegi).

## Opsi saat menggambar

- Pada {{cmd:LINE}} dan {{cmd:PLINE}}, ketik `U` lalu tekan {{key:Enter}} untuk membatalkan segmen terakhir tanpa keluar dari perintah.
- Pada {{cmd:LINE}}, `C` menutup kembali ke titik pertama setelah ada minimal dua segmen.
- Pada {{cmd:PLINE}}, `A` beralih ke segmen busur (setiap busur melanjutkan secara halus dari segmen sebelumnya), dan `L` kembali ke garis. Dalam mode busur, opsi tutup adalah `CL`.
- Menekan {{key:Enter}} pada `Specify first point:` di {{cmd:LINE}} memulai dari titik terakhir yang Anda berikan, sehingga Anda dapat melanjutkan dari tempat Anda berhenti.

## Kesalahan umum

- **Mengetik `6000,0` saat yang dimaksud `@6000,0`.** Tanpa `@`, titik diukur dari titik asal, bukan dari titik terakhir, sehingga garis melesat ke tempat yang tidak diduga. Di CadCraft, `x,y` selalu absolut. Ketik `U` dan tekan {{key:Enter}} untuk membatalkannya.
- **Koma diketik sebagai titik desimal.** Desimal menggunakan titik: `1250.5`. Koma selalu memisahkan X dari Y.
- **Jarak langsung ke arah yang salah.** Angka saja mengikuti kursor silang. Pindahkan kursor ke sisi yang Anda inginkan sebelum menekan {{key:Enter}}, dan aktifkan {{ui:Ortho}} untuk garis lurus.
- **"Diperlukan titik atau kata kunci opsi."** CadCraft tidak memahami apa yang Anda ketik. Periksa spasi di dalam angka atau koma yang hilang, lalu ketik ulang.
- **Kaki dan inci.** CadCraft hanya membaca angka biasa. Ketik `150` untuk 12'-6" pada gambar bersatuan inci, atau `12.5` pada gambar bersatuan kaki.
