---
title: Garis konstruksi dan sinar
summary: Gambar garis yang memanjang tanpa ujung (XLINE) atau dari sebuah titik ke satu arah (RAY) untuk merapikan objek, lalu pangkas menjadi garis biasa.
keywords: xline, ray, garis konstruksi, construction line, garis tak terbatas, infinite line, garis bantu, guide line, garis referensi, reference line, bagi dua, bisect, garis offset, offset line, garis tata letak, layout lines, xl
from: b6c398bc
---

## Yang akan Anda pelajari

Cara menggambar garis konstruksi untuk merapikan objek saat Anda membuat gambar: melalui dua titik, datar atau tegak, pada sudut tertentu, di tengah dua arah, atau berjarak tertentu dari sebuah garis. Dan cara memangkasnya menjadi garis biasa setelah ia selesai bertugas.

## Dua jenis

- **Garis konstruksi** ({{cmd:XLINE}}) memanjang tanpa ujung ke kedua arah.
- **Sinar** ({{cmd:RAY}}) dimulai dari sebuah titik dan memanjang tanpa ujung ke satu arah.

Keduanya digambar di seluruh area gambar pada zoom berapa pun, dalam layar terbagi dan dalam viewport di lembar. {{ui:Batas}} tidak menyertakannya, sehingga zoom ke gambar tetap memuat apa yang Anda gambar.

## Gambar garis konstruksi

1. Klik {{ui:Gambar}} › {{ui:Lainnya}} › {{ui:Construction line}}, atau ketik `XL` lalu tekan {{key:Enter}}.
2. Klik sebuah titik. Setiap klik sesudahnya menambahkan garis konstruksi yang melalui titik pertama dan titik yang Anda klik.
3. Tekan {{key:Enter}} untuk selesai.

Alih-alih titik pertama, Anda dapat mengetik sebuah opsi:

| Opsi | Fungsinya |
|---|---|
| `H` (Hor) | Garis datar, satu melalui setiap titik yang Anda klik. |
| `V` (Ver) | Garis tegak melalui setiap titik. |
| `A` (Ang) | Garis pada sudut yang Anda ketik (derajat, berlawanan arah jarum jam dari sumbu X), melalui setiap titik. `R` (Referensi) mengukur sudut dari garis yang Anda pilih. |
| `B` (Bisect) | Klik sudutnya, lalu sebuah titik pada satu sisi: setiap titik yang Anda klik di sisi lain menambahkan garis di tengah di antara keduanya. |
| `O` (Offset) | Ketik sebuah jarak, pilih sebuah garis, lalu klik sisinya: sebuah garis konstruksi yang berjarak sejauh itu darinya, sejajar. `T` (Through) menempatkannya melalui titik yang Anda klik sebagai gantinya. Jaraknya diingat untuk lain kali. |

## Gambar sinar

1. Klik {{ui:Gambar}} › {{ui:Lainnya}} › {{ui:Ray}}, atau ketik `RAY` lalu tekan {{key:Enter}}.
2. Klik di tempat sinar-sinar itu dimulai.
3. Klik sebuah titik untuk setiap sinar yang harus dilewatinya. Tekan {{key:Enter}} untuk selesai.

## Tangkap dan pangkas

Garis konstruksi dan sinar mengikuti snap terdekat, tegak lurus, dan perpotongan. Keduanya tidak memiliki ujung dan tengah, sehingga titik ujung dan titik tengah tidak menemukan apa pun pada keduanya.

Keduanya dipotong dan memotong seperti garis lain di {{cmd:TRIM}} dan {{cmd:BREAK}}:

- Pangkas satu ujung dari garis konstruksi, dan ia menjadi sinar yang dimulai di potongan.
- Pangkas bagian jauh dari sinar, dan ia menjadi garis biasa.
- Putus garis konstruksi di satu titik, dan Anda mendapat dua sinar.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} dan {{cmd:STRETCH}} juga bekerja pada mereka. Pilihan jendela tidak pernah memilihnya, karena tidak ada jendela yang dapat memuat seluruh garis tanpa ujung; pilihan silang atau klik dapat.

:::note
DWG (semua versi) dan DXF 2000 menyimpannya sebagai garis konstruksi. DXF R12 tidak mengenalnya, sehingga di sana mereka menjadi garis yang melintasi gambar, dan penyimpanan memberi tahu Anda. Plot atau PDF hanya menggambarnya sejauh yang tercetak.
:::
