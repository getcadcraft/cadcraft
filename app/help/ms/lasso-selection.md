---
title: Pilihan lasso
summary: Tekan dan seret garis luar bentuk bebas di sekeliling objek untuk memilihnya, sebagai tetingkap, silang atau pagar; tukar dengan Space semasa anda menyeret.
keywords: lasso, lassomode, seret, bentuk bebas, pilih, pilihan, tetingkap, silang, pagar, space, poligon, sentuh, pen, segi empat tepat
from: 9ec6154d
---

## Apa yang akan anda pelajari

Cara memilih objek dengan melukis di sekelilingnya, dan cara mendapatkan semula segi empat tepat apabila anda mahukannya.

## Lukis lasso

1. Lukis beberapa garisan dan bulatan yang rapat.
2. Dengan tiada arahan yang sedang berjalan, tekan butang tetikus pada tempat kosong, dan seret di sekeliling sebahagian daripadanya, dengan bergerak ke **kanan** dahulu.
3. Lepaskan.

Hanya objek yang berada sepenuhnya di dalam garis luar dipilih. Garis luar dilukis pepejal semasa anda menyeret: ini ialah lasso tetingkap.

## Tetingkap, silang dan pagar

Objek yang anda dapat bergantung pada pergerakan pertama seretan anda, dan pada {{key:Space}}:

| Anda seret | Lasso | Memilih |
|---|---|---|
| Ke kanan dahulu | Tetingkap (garis luar pepejal) | Hanya objek yang berada **sepenuhnya di dalam** |
| Ke kiri dahulu | Silang (putus-putus, hijau) | Objek di dalam **dan** objek yang disentuh garis luar |
| Tekan {{key:Space}} semasa menyeret | Tetingkap, kemudian silang, kemudian pagar | Pagar (laluan putus-putus, tidak tertutup): hanya objek yang dilintasi laluan |

1. Tekan pada tempat kosong dan seret di sekeliling beberapa objek, dengan bergerak ke **kiri** dahulu. Semua yang disentuh garis luar turut dipilih.
2. Tekan {{key:Esc}}.
3. Tekan dan seret sekali lagi; semasa masih menahan butang, tekan {{key:Space}} sekali. Garis luar bertukar menjadi silang; tekan {{key:Space}} sekali lagi untuk pagar.

{{key:Shift}} semasa anda melepaskan akan mengeluarkan objek daripada pilihan sebaliknya (dengan "Clicking objects: Adds" dalam {{ui:Tetapan}}).

## Di dalam arahan

Lasso berfungsi di mana sahaja CadCraft meminta `Select objects`: lukis, kemudian tekan {{key:Enter}} untuk selesai. {{cmd:STRETCH}} mengambil lasso silang sebagai tetingkapnya, supaya anda boleh meregangkan bahagian berbentuk L lukisan dalam satu langkah.

{{cmd:TRIM}} dan {{cmd:EXTEND}} menggunakan seretan secara berbeza: di situ ia memangkas (atau memanjangkan) setiap kepingan yang dilintasi laluan. Lihat [Pangkas dan panjangkan](topic:trim-and-extend).

## Segi empat tepat

Klik pada ruang kosong, alih, dan klik kedua sentiasa melukis tetingkap segi empat tepat (kiri ke kanan) atau silang (kanan ke kiri).

Untuk menjadikan seretan melukis semula segi empat tepat, buka {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Seret untuk memilih}} dan pilih {{ui:Segi empat tepat}}, atau taip {{cmd:LASSOMODE}}, kemudian `0`. Taip {{cmd:LASSOMODE}}, kemudian `1` untuk lasso. Pilihan disimpan dalam pelayar ini.

:::touch
Seret dengan jari atau pen dengan cara yang sama. Ketik tetap memilih satu objek.
:::

## Kesilapan biasa

- **Tiada apa yang dipilih.** Lasso ialah tetingkap dan tiada objek yang berada sepenuhnya di dalamnya. Mulakan seretan ke kiri, atau tekan {{key:Space}} semasa menyeret.
- **Seretan menggerakkan grip.** Menekan grip objek yang dipilih akan menggerakkan grip. Mulakan lasso pada tempat kosong.
- **Space menamatkan arahan.** {{key:Space}} hanya menukar lasso semasa butang ditahan; jika tidak, ia ialah Enter.
