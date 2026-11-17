---
title: Beri dimensi pada denah
summary: Tambahkan dimensi linear, sejajar, sudut, radius, dan diameter, rangkaikan dengan Dimensi lanjutan dan Dimensi garis dasar, dan timpa teksnya.
keywords: dimensi, dimension, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dco, dimbaseline, dba, rangkai, chain, untai, string, anotasi, annotate, alat dimensi, dimension tool, di mana, where, cari, find, bilah alat, toolbar, ukur, measure, mm, cm, m, km, satuan, units
from: 9ee65123
---

## Yang akan Anda buat

Sebuah ruangan yang diberi dimensi: lebar dan tinggi keseluruhan, untaian dimensi di sepanjang satu dinding, dinding yang miring, sudut lengkung, dan sebuah sudut.

Sebelum mulai, baca [Atur ukuran dimensi](topic:dimension-settings) jika gambar Anda besar: teks dimensi setinggi 2.5 satuan gambar secara default, yang terlalu kecil untuk gambar yang diukur dalam milimeter. Untuk langkah di bawah, ketik `DIMSCALE`, tekan {{key:Enter}}, ketik `50`, dan tekan {{key:Enter}} terlebih dulu.

## Di mana alat dimensi berada

Dengan gaya menu CadCraft (yang digunakan CadCraft saat pertama kali dibuka), alat dimensi ada di bilah alat di atas gambar, pada grup {{ui:Anotasi}}: {{ui:Linear}}, {{ui:Sejajar}}, {{ui:Sudut}}, {{ui:Radius}}, dan {{ui:Diameter}}. Menu {{ui:Lainnya}} grup itu memiliki {{ui:Dimensi lanjutan}} dan {{ui:Dimensi garis dasar}}. Arahkan penunjuk ke tombol untuk melihat fungsinya.

- Dengan gaya menu {{ui:Drafting klasik}} atau {{ui:Ribbon}}, buka tab {{ui:Anotasi}}: alatnya ada di panel {{ui:Dimensi}}. {{ui:Drafting klasik}} juga memiliki {{ui:Linear}} pada tab {{ui:Beranda}}, di bawah {{ui:Anotasi}}. Lihat [Menu, tombol, dan mouse](topic:menus-keys-and-mouse).
- Atau ketik perintahnya di baris perintah di bawah gambar lalu tekan {{key:Enter}}: `DLI` (linear), `DAL` (sejajar), `DAN` (sudut), `DRA` (radius), `DDI` (diameter), `DCO` (lanjutan), `DBA` (garis dasar).
- Pada layar sempit, bilah alat berupa satu baris: geser ke samping untuk mencapai {{ui:Anotasi}}.

Untuk menampilkan panjang dalam milimeter, sentimeter, meter, atau kilometer, lihat [Dimensi dalam mm, cm, m, atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Gambar sesuatu untuk diberi dimensi

1. Ketik `PL` lalu tekan {{key:Enter}}.
2. Ketik `0,0` lalu tekan {{key:Enter}}.
3. Ketik `@6000,0` lalu tekan {{key:Enter}}.
4. Ketik `@1500<60` lalu tekan {{key:Enter}}.
5. Ketik `@0,2700` lalu tekan {{key:Enter}}.
6. Ketik `@-6750,0` lalu tekan {{key:Enter}}.
7. Ketik `C` lalu tekan {{key:Enter}}. Garis luarnya menutup.
8. Ketik `C` lalu tekan {{key:Enter}} untuk memulai lingkaran.
9. Klik di dalam ruangan, jauh dari dinding, untuk pusatnya.
10. Ketik `600` lalu tekan {{key:Enter}}. Ini adalah sebuah kolom.
11. Klik {{ui:Batas}}.

## Linear: horizontal atau vertikal

1. Ketik `DLI` lalu tekan {{key:Enter}}.
2. Pada `Tentukan titik asal garis bantu pertama`, snap ke sudut kiri bawah (Titik ujung) dan klik.
3. Pada `Tentukan titik asal garis bantu kedua`, snap ke sudut kanan bawah dan klik.
4. Gerakkan kursor di bawah ruangan. Dimensinya mengikuti, horizontal.
5. Klik untuk menempatkan garis dimensi.

Riwayat berbunyi `Teks dimensi = 6000`.

Di mana Anda menempatkan garis menentukan arahnya: di bawah atau di atas memberi dimensi horizontal, kiri atau kanan memberi yang vertikal. Untuk memaksanya, ketik `H` (horizontal), `V` (vertikal), atau `R` (diputar, lalu sudut) sebelum menempatkannya.

:::tip
Tekan {{key:Enter}} pada prompt pertama alih-alih memilih titik, lalu klik sebuah garis, busur, lingkaran, atau segmen polyline. CadCraft mengambil kedua ujungnya untuk Anda.
:::

## Lanjutan: untaian dimensi

{{cmd:DIMCONTINUE}} ({{ui:Anotasi}} › {{ui:Lainnya}} › {{ui:Dimensi lanjutan}}, atau `DCO`) melanjutkan dari dimensi linear atau sejajar terakhir yang Anda buat; masing-masing baru dimulai di tempat yang terakhir berakhir.

1. Ketik `DLI` lalu tekan {{key:Enter}}.
2. Ketik `0,0` lalu tekan {{key:Enter}} untuk titik asal pertama.
3. Ketik `2000,0` lalu tekan {{key:Enter}} untuk titik asal kedua.
4. Klik di bawah ruangan untuk menempatkannya.
5. Ketik `DCO` lalu tekan {{key:Enter}}.
6. Ketik `4500,0` lalu tekan {{key:Enter}}. Dimensi kedua mengikuti dari yang pertama, pada garis yang sama.
7. Snap ke sudut kanan bawah dan klik. Dimensi ketiga melengkapi untaian.
8. Tekan {{key:Enter}} untuk mengakhiri perintah.

:::note
Di sini titik diketik sebagai koordinat absolut dengan sengaja. Titik `@` dihitung dari titik terakhir yang Anda berikan, dan titik terakhir adalah tempat Anda menempatkan garis dimensi sebelumnya, bukan ujung dimensi. Titik absolut, snap, atau jarak langsung dengan {{ui:Ortho}} aktif lebih aman dalam untaian dimensi.
:::

Ketik `U` lalu tekan {{key:Enter}} untuk mengambil kembali dimensi terakhir dalam untaian tanpa keluar dari perintah.

## Garis dasar: dimensi bertumpuk dari satu garis

{{cmd:DIMBASELINE}} ({{ui:Anotasi}} › {{ui:Lainnya}} › {{ui:Dimensi garis dasar}}, atau `DBA`) mengukur setiap dimensi baru dari titik asal pertama dimensi terakhir, dan menumpuknya selangkah lebih jauh ke luar.

1. Ketik `DLI` lalu tekan {{key:Enter}}.
2. Snap ke sudut kiri bawah dan klik.
3. Snap ke sudut kiri atas dan klik.
4. Gerakkan kursor ke kiri ruangan dan klik. Sebuah dimensi vertikal muncul.
5. Ketik `DBA` lalu tekan {{key:Enter}}.
6. Snap ke ujung atas dinding 60 derajat (Titik ujung) dan klik. Dimensi vertikal kedua muncul, selangkah lebih jauh ke luar dari yang pertama.
7. Tekan {{key:Enter}} untuk mengakhiri.

## Sejajar: panjang sebenarnya dari garis miring

1. Ketik `DAL` lalu tekan {{key:Enter}}.
2. Tekan {{key:Enter}} untuk memilih objek.
3. Klik dinding 60 derajat.
4. Gerakkan ke luar dan klik untuk menempatkan.

Teksnya berbunyi 1500: panjang sebenarnya, diukur sepanjang dinding.

## Radius dan diameter

1. Ketik `DRA` lalu tekan {{key:Enter}}.
2. Klik lingkaran kolom.
3. Gerakkan kursor. Penunjuk mengarah dari pusat ke kursor.
4. Klik untuk menempatkan teks.

Teksnya berbunyi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) melakukan hal yang sama dengan tanda ⌀ dan diameternya.

## Sudut

Dinding di sini adalah satu polyline, jadi ukur sudutnya melalui titik sudutnya. (Di antara dua garis terpisah, Anda dapat mengklik garis-garisnya.)

1. Ketik `DAN` lalu tekan {{key:Enter}}.
2. Pada `Pilih busur, lingkaran, atau garis, atau Enter untuk titik sudut`, tekan {{key:Enter}}.
3. Pada `Tentukan titik sudut`, snap ke sudut kanan bawah dan klik.
4. Pada `Tentukan titik ujung sudut pertama`, snap ke sudut kiri bawah dan klik.
5. Pada `Tentukan titik ujung sudut kedua`, snap ke ujung atas dinding 60 derajat dan klik.
6. Gerakkan kursor ke dalam ruangan, dekat sudut, dan klik.

Teksnya berbunyi `120°`, sudut dalam dari sudut itu. Jika ditempatkan di sisi lain sudut, dimensi mengukur sudut di sisi itu. Klik sebuah busur pada prompt pertama untuk memberi dimensi sudut yang dibentangkannya, atau klik dua garis untuk memberi dimensi sudut di antaranya.

## Ubah teks

Untuk menulis teks sendiri, ketik `T` lalu tekan {{key:Enter}} sebelum menempatkan dimensi, kemudian ketik teksnya. Dalam teks Anda, `<>` mewakili nilai yang diukur: `<> TYP.` menghasilkan `6000 TYP.`. Tekan {{key:Enter}} pada baris kosong untuk mempertahankan nilai yang diukur.

Untuk mengubah dimensi yang sudah ada:

1. Klik dimensinya.
2. Di panel kanan, ketik di {{ui:Teks}}. Biarkan kosong untuk nilai yang diukur.
3. Tekan {{key:Enter}}.

## Dimensi mengikuti geometri

Dimensi mengingat titik-titiknya. Seret salah satu grip-nya, atau pindahkan, putar, atau skala bersama objek yang diukurnya, dan dimensi itu diukur ulang. Jika Anda meregangkan geometri tanpa memindahkan dimensi, dimensi tidak mengikuti: ia tetap pada titiknya sendiri.

## Kesalahan umum

- **Teks dan panah terlalu kecil atau terlalu besar.** Atur skala keseluruhan: lihat [Atur ukuran dimensi](topic:dimension-settings).
- **"Tentukan titik di dalam sudut yang ingin Anda ukur."** Titik yang Anda klik untuk dimensi sudut berada pada salah satu kakinya. Pindahkan ke dalam sudut.
- **Lanjutan dimulai dari dimensi yang salah.** Ia selalu melanjutkan dari dimensi linear atau sejajar terakhir yang dibuat dalam sesi ini. Buat (atau buat ulang) dimensi yang akan dilanjutkan lebih dulu.
- **Dimensinya muncul vertikal.** Anda menempatkannya di samping. Ketik `H` sebelum menempatkannya.
- **Kaki dan inci.** Atur format panjang gambar ke {{ui:Arsitektural}} lebih dulu, atau {{ui:Format}} dimensi di {{ui:Properti}}: lihat [Kaki dan inci dalam dimensi](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Angkanya tidak dalam satuan yang Anda inginkan.** Pilih {{ui:Satuan pada teks}}: lihat [Dimensi dalam mm, cm, m, atau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
