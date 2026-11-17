---
title: Lukis dengan koordinat
summary: Lukis garis luar lantai yang tepat dengan menaip koordinat mutlak, relatif dan kutub, serta dengan kemasukan jarak langsung.
keywords: line, pline, polyline, koordinat, relatif, kutub, mutlak, jarak langsung, @, menaip titik, tepat, ortho
from: 19e82350
---

## Apa yang anda akan buat

Garis luar bilik berbentuk L, 6000 dengan 4500 dan takuk 2000 dengan 1500, dilukis dengan tepat, serta dinding pada 30 darjah. Anda akan menggunakan keempat-empat cara menaip titik. Bekerja dalam milimeter: satu unit lukisan mewakili satu milimeter.

Rujukan ringkas bagi setiap format terdapat dalam [Kemasukan koordinat dan jarak](topic:coordinate-entry).

## Sebelum anda mula

1. Buka CadCraft. Jika lukisan sedang dibuka, klik {{ui:New}} dahulu.
2. Tekan {{key:Esc}} supaya tiada apa dipilih. Panel kanan membaca {{ui:Current settings}}.
3. Tetapkan {{ui:Units}} kepada {{ui:Millimeters}}. Tiada apa diubah saiznya; ini hanya memberitahu helaian dan plot maksud satu unit.

## Koordinat mutlak: titik pertama

Koordinat mutlak ialah kedudukan yang diukur dari asal, ditaip sebagai `x,y`.

1. Taip `L` dan tekan {{key:Enter}}. Gesaan berbunyi `Tentukan titik pertama:`.
2. Taip `0,0` dan tekan {{key:Enter}}.

Garisan kini ditarik dari asal ke kursor silang. Koordinat dalam bar status menunjukkan jarak dan sudut dari titik mula semasa anda bergerak.

## Koordinat relatif: @dx,dy

Koordinat relatif ditaip sebagai `@dx,dy`: sejauh mana melintang, sejauh mana ke atas, dari titik terakhir. Nombor negatif bergerak ke kiri atau ke bawah.

3. Taip `@6000,0` dan tekan {{key:Enter}}. Garisan 6000 bergerak ke kanan.
4. Taip `@0,3000` dan tekan {{key:Enter}}.
5. Taip `@-2000,0` dan tekan {{key:Enter}}.
6. Taip `@0,1500` dan tekan {{key:Enter}}.

Anda sepatutnya nampak empat garisan bersambung yang mendaki sebelah kanan bilik.

## Kemasukan jarak langsung: nombor tunggal

Apabila anda menaip satu nombor, CadCraft bergerak sejauh jarak itu mengikut arah kursor silang. Hidupkan Ortho supaya arahnya melekat kepada mendatar atau menegak.

7. Tekan {{key:F8}}, atau klik {{ui:Ortho}} dalam bar status. Bar status berbunyi "Ortho hidup".
8. Gerakkan kursor silang ke kiri titik terakhir. Garisan yang ditarik kekal mendatar.
9. Taip `4000` dan tekan {{key:Enter}}. Garisan bergerak 4000 ke kiri.
10. Gerakkan kursor silang ke bawah titik terakhir.
11. Taip `4500` dan tekan {{key:Enter}}. Anda kembali ke titik mula.
12. Tekan {{key:Enter}} pada gesaan kosong untuk menamatkan arahan.

:::mac
F8 mungkin mengawal main semula media pada papan kekunci Mac. Tahan **fn** dan tekan F8, atau klik {{ui:Ortho}}. Lihat [Kekunci, tetikus dan pad jejak](common:keys).
:::

Anda kini mempunyai garis luar berbentuk L yang tertutup, terdiri daripada enam garisan berasingan.

13. Klik {{ui:Extents}} untuk melihat semuanya.

## Koordinat kutub: @jarak<sudut

Koordinat kutub ditaip sebagai `@jarak<sudut`. Sudut dalam darjah, diukur lawan arah jam dari arah X positif: 0 ialah kanan, 90 ialah atas, 180 ialah kiri, 270 (atau -90) ialah bawah.

14. Taip `L` dan tekan {{key:Enter}}.
15. Taip `6000,0` dan tekan {{key:Enter}} untuk bermula di sudut kanan bawah.
16. Taip `@2500<-30` dan tekan {{key:Enter}}. Garisan 2500 meninggalkan sudut, menuju ke bawah dan ke kanan pada 30 darjah di bawah mendatar.
17. Tekan {{key:Enter}} untuk menamatkan arahan.

Koordinat kutub tanpa `@`, seperti `2500<30`, diukur dari asal dan bukannya dari titik terakhir.

## Garis luar yang sama sebagai satu polygaris

Enam garisan berasingan sesuai untuk banyak kerja, tetapi polygaris ialah satu objek: ia diofset, diukur dan dipilih sebagai satu keseluruhan. Gunakan {{cmd:PLINE}} dengan input yang sama.

1. Taip `PL` dan tekan {{key:Enter}}.
2. Taip `0,-6000` dan tekan {{key:Enter}} untuk bermula di bawah garis luar pertama.
3. Taip `@6000,0`, kemudian tekan {{key:Enter}}.
4. Taip `@0,3000`, kemudian tekan {{key:Enter}}.
5. Taip `@-2000,0`, kemudian tekan {{key:Enter}}.
6. Taip `@0,1500`, kemudian tekan {{key:Enter}}.
7. Taip `@-4000,0`, kemudian tekan {{key:Enter}}.
8. Taip `C` dan tekan {{key:Enter}}. Polygaris ditutup dan arahan tamat.
9. Klik garis luar baharu itu. Panel kanan menunjukkan "Polygaris", {{ui:Vertices}}nya, {{ui:Length}} dan, kerana ia tertutup, {{ui:Area}}nya.

Luasnya sepatutnya 24000000 (milimeter persegi, iaitu 24 meter persegi).

## Pilihan semasa melukis

- Dalam {{cmd:LINE}} dan {{cmd:PLINE}}, taip `U` dan tekan {{key:Enter}} untuk mengambil semula segmen terakhir tanpa meninggalkan arahan.
- Dalam {{cmd:LINE}}, `C` menutup kembali ke titik pertama apabila terdapat sekurang-kurangnya dua segmen.
- Dalam {{cmd:PLINE}}, `A` menukar kepada segmen lengkok (setiap lengkok bersambung dengan lancar dari segmen sebelumnya), dan `L` menukar kembali kepada garisan. Dalam mod lengkok, pilihan tutup ialah `CL`.
- Menekan {{key:Enter}} pada `Tentukan titik pertama:` dalam {{cmd:LINE}} bermula dari titik terakhir yang anda berikan, supaya anda boleh meneruskan dari tempat anda berhenti.

## Ralat lazim

- **Menaip `6000,0` apabila anda maksudkan `@6000,0`.** Tanpa `@`, titik diukur dari asal, bukan dari titik terakhir, jadi garisan terpesong ke tempat yang tidak dijangka. Dalam CadCraft, `x,y` sentiasa mutlak. Tekan `U` dan {{key:Enter}} untuk mengambil semulanya.
- **Koma ditaip sebagai titik perpuluhan.** Perpuluhan menggunakan titik: `1250.5`. Koma sentiasa memisahkan X daripada Y.
- **Jarak langsung pergi ke arah yang salah.** Nombor tunggal mengikut kursor silang. Gerakkan kursor silang ke sisi yang anda mahu sebelum menekan {{key:Enter}}, dan hidupkan {{ui:Ortho}} untuk garisan lurus.
- **"Titik atau kata kunci pilihan diperlukan."** CadCraft tidak memahami apa yang anda taip. Semak ruang di dalam nombor atau koma yang hilang, dan taip semula.
- **Kaki dan inci.** CadCraft hanya membaca nombor biasa. Taip `150` untuk 12'-6" dalam lukisan inci, atau `12.5` dalam lukisan kaki.
