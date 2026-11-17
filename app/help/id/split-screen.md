---
title: Bagi layar
summary: Tampilkan gambar dalam dua, tiga, atau empat panel dengan zoom masing-masing, letakkan lembar di samping model, dan buka beberapa gambar berdampingan.
keywords: bagi, bagi layar, panel, vports, viewports, tersusun, berdampingan, bertumpuk, dua gambar, tab, tab dokumen, bandingkan, pembatas, model dan lembar, beberapa gambar, gambar terbuka
from: ee2f034b
---

## Yang akan Anda pelajari

Cara melihat satu gambar dalam beberapa panel sekaligus, masing-masing dengan zoom sendiri, dan cara membuka beberapa gambar lalu melihatnya berdampingan.

## Bagi satu gambar menjadi panel

1. Buka sebuah gambar, atau gambar beberapa garis dan lingkaran.
2. Buka {{ui:Tampilan}} › {{ui:Lainnya}} dan pilih {{ui:Bagi berdampingan}} (atau ketik {{cmd:VPORTS}}, lalu `2`, lalu {{key:Enter}}).

Area gambar terbagi menjadi dua panel, keduanya menampilkan tampilan yang sama. Panel aktif memiliki bingkai biru dan mendapat garis bidik.

3. Klik di panel lain. Panel itu menjadi aktif. (Klik pertama itu hanya berpindah panel; klik lagi untuk memilih.)
4. Zoom dengan roda. Hanya panel itu yang di-zoom.
5. Seret garis di antara panel untuk membuat salah satunya lebih lebar. {{key:Home}} pada pembatas yang sedang difokus mengembalikannya ke tengah.

{{cmd:VPORTS}} juga menerima `3` (dua panel di satu sisi dan satu panel besar di sisi lain: `L` atau `R`), `4`, dan `SI` untuk kembali ke satu panel. Tampilan panel aktif kemudian mengisi seluruh area. Pada lembar, {{cmd:VPORTS}} menambahkan viewport ke lembar sebagai gantinya (seperti di AutoCAD); ketik {{cmd:SPLIT}} di sana, atau gunakan menu Tampilan.

## Gambar dari satu panel ke panel lain

1. Bagi berdampingan, lalu zoom setiap panel ke sudut gambar yang berbeda.
2. Ketik `L` dan tekan {{key:Enter}}, lalu klik titik pertama di panel kiri.
3. Klik sekali di panel kanan untuk menjadikannya aktif, lalu klik titik kedua di sana.

Garis membentang di antara kedua tempat itu. Perintah tetap berjalan saat Anda berpindah panel, dan garis karet ditampilkan di setiap panel.

## Model di samping lembar

1. Bagi berdampingan.
2. Klik panel kanan, lalu klik tab lembar di bawah gambar.

Panel kanan menampilkan lembar; panel kiri tetap menampilkan model. Setiap panel mempertahankan ruangnya sendiri, sehingga Anda dapat menggambar pada model dan melihat viewport lembar mengikutinya.

## Beberapa gambar dalam satu jendela

1. Buka sebuah gambar. Lalu buka yang lain (atau tekan {{ui:Baru}}).

Setiap gambar terbuka di tabnya sendiri di atas area gambar. Klik tab untuk berpindah; baris perintah, panel, dan urungkan mengikuti gambar yang Anda pilih. {{key:Mod+C}} di satu gambar dan {{key:Mod+V}} di gambar lain menyalin objek di antara keduanya.

2. Klik {{ui:Susun gambar yang terbuka berdampingan}} (ikon bagi di ujung tab), atau ikon bertumpuk di sebelahnya.

Setiap panel kini menampilkan salah satu gambar yang terbuka, hingga empat. Klik panel untuk bekerja di gambar itu.

3. Klik {{ui:×}} pada tab untuk menutup gambar tersebut. Jika ada perubahan yang belum disimpan, CadCraft akan bertanya terlebih dahulu.

:::tip
Membuka gambar saat jendela hanya berisi gambar baru yang belum disentuh akan menggunakan tab itu, bukan menambah tab baru.
:::

## Geser dan zoom bersamaan

Untuk membandingkan dua revisi, susun berdampingan, lalu klik {{ui:Tautkan tampilan panel}} (ikon tautan di ujung tab), atau pilih dari {{ui:Tampilan}} › {{ui:Lainnya}}, atau ketik {{cmd:LINKVIEWS}} dan `ON`. Sekarang geser atau zoom di satu panel akan memindahkan setiap panel yang menampilkan model (atau setiap panel yang menampilkan lembar) ke tempat yang sama, sehingga kedua gambar tetap sejajar. {{cmd:LINKVIEWS}} `OFF` membiarkan setiap panel bergerak sendiri lagi.

## Kesalahan umum

- **Klik saya tidak melakukan apa-apa.** Klik itu hanya menjadikan panel tersebut aktif. Klik lagi untuk memilih atau menggambar.
- **Roda men-zoom panel yang salah.** Roda men-zoom panel di bawah penunjuk dan menjadikannya aktif.
- **Panel kembali menjadi satu.** Membuka gambar menampilkannya seperti saat disimpan; gambar yang disimpan tanpa panel akan terbuka dalam satu panel.
- **Meninggalkan halaman memperingatkan perubahan yang belum disimpan yang tidak dapat Anda lihat.** Tab lain berisi gambar dengan perubahan. Pindah ke sana dan simpan, atau tinggalkan tanpa menyimpan.
