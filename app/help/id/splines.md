---
title: Spline dan polyline: SPLINE, SPLINEDIT, PEDIT
summary: Gambar kurva halus melalui titik atau dari poligon kontrol, sunting titik pas dan titik kontrolnya, dan sunting polyline (gabung, tutup, lebar, paskan, spline, decurve) atau ubah spline menjadi polyline.
keywords: spline, splinedit, spl, spe, pedit, pe, titik pas, titik kontrol, bobot, nurbs, sunting polyline, gabung, kurva pas, decurve, ubah ke polyline, presisi, singgung, kurva, toleransi pas
from: d31f72d8
---

## Yang akan Anda buat

Sebuah kurva melalui lima titik, lalu kurva yang sama disunting dengan tiga cara, dan sebuah polyline dari tiga garis.

## Gambar spline melalui titik

1. Ketik `SPL` dan tekan {{key:Enter}}.
2. Klik atau ketik titik yang harus dilalui kurva: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Tekan {{key:Enter}} setelah titik terakhir.
3. {{ui:Singgung awal}}: klik titik tempat kurva harus berangkat, atau tekan {{key:Enter}} agar CadCraft memutuskannya. Lakukan hal yang sama untuk singgung akhir.

Kurva melalui setiap titik. Ketik `C` alih-alih {{key:Enter}} untuk menutupnya (kurva kembali ke titik pertama). {{key:U}} (`Urungkan`) mengambil kembali titik terakhir saat Anda menggambar.

### Gambar satu dari poligon kontrol

Ketik `M` pada prompt pertama, lalu `C` (Titik kontrol) dan derajat dari 1 sampai 5 (3 adalah yang biasa). Sekarang titik yang Anda pilih adalah sudut-sudut poligon yang menarik kurva ke arahnya; kurva dimulai di titik pertama dan berakhir di titik terakhir. Kurva tertutup melingkar, tanpa sudut di sambungannya.

### Ubah polyline menjadi spline

Pada prompt pertama ketik `O` (Objek) dan pilih polyline atau garis. Mereka menjadi spline melalui titik sudutnya; aslinya dihapus.

## Sunting spline

Pilih spline dan ketik `SPE` (atau ketik `SPE` lalu klik spline itu). Grip menampilkan titik pas (atau titik kontrol dari spline yang tidak memilikinya): seret salah satu untuk membentuk ulang kurva. Pada prompt:

- **Data pas** (spline yang digambar melalui titik): `A` menambah titik pas (klik di tempat), `D` menghapus satu (klik dekatnya), `M` memindahkan satu (klik dekatnya, lalu klik tempat barunya), `T` mengatur singgung ujung, `P` menghapus semua titik pas, sehingga spline disunting melalui titik kontrolnya sejak saat itu.
- **Sunting simpul**: `A` menambah titik kontrol tanpa mengubah kurva, `M` memindahkan satu, `W` memberi satu **bobot** (di atas 1 menarik kurva lebih dekat padanya, di bawah 1 membiarkannya lepas).
- **Buka** atau **Tutup**, dan **Balik** (kurva berjalan ke arah sebaliknya).
- **ubah ke Polyline** (`P`): spline menjadi polyline; presisi adalah berapa segmen yang didapat setiap rentang (10 adalah yang biasa).
- **Urungkan** mengambil kembali perubahan terakhir; **Keluar (X)** mengakhiri.

{{ui:Properti}} menampilkan derajat spline, berapa banyak titik pas dan titik kontrolnya, panjangnya, dan memungkinkan Anda membuka atau menutupnya.

## Sunting polyline

Pilih polyline dan ketik `PE`. Garis, busur, atau spline yang Anda pilih pertama kali ditawarkan sebagai polyline untuk diubah (spline meminta presisi).

- **Tutup** / **Buka** menggabungkan atau memisahkan ujungnya.
- **Gabung** menambahkan garis, busur, dan polyline yang ujungnya bertemu dengan ujung polyline. `Jarak fuzz` adalah seberapa jauh ujung boleh berjauhan dan tetap tergabung (0 berarti harus bertemu).
- **Lebar** memberi seluruh polyline satu lebar (0 menghapusnya).
- **Paskan** mengganti polyline dengan kurva halus yang melalui titik-titik sudutnya; **Spline** dengan B-spline kubik yang mengikutinya (dimulai dan diakhiri di titik pertama dan terakhir, dan tetap dekat dengan yang lain). Keduanya menjadi polyline dari segmen pendek, dan sudut asli dipertahankan, sehingga **Decurve** mengembalikannya.
- **Ltype gen** menyatakan apakah jenis garis putus-putus berlanjut di sepanjang seluruh polyline atau mulai lagi di setiap titik sudut.
- **Balik** mengubah urutan titik sudutnya. **Banyak** (`M` pada prompt pertama) menyunting beberapa polyline dengan opsi yang sama.

Menyunting titik sudut polyline di {{ui:Properti}} atau dengan grip tetap seperti semula: PEDIT tidak memiliki penyunting titik.

## Dalam file

DWG dan DXF 2000 menyimpan spline sebagai spline: derajat, titik kontrol, knot, bobot, titik pas, dan singgung. Spline yang Anda buka dan tidak ubah ditulis kembali persis seperti semula. DXF R12 tidak memiliki spline: ia disimpan sebagai polyline di sepanjang kurva, dan riwayat menyatakan berapa banyak.

Offset, pangkas, perpanjang, fillet, putuskan, dan gabungkan tidak berfungsi pada spline. {{cmd:EXPLODE}} sebuah spline, atau {{cmd:PEDIT}} sebuah spline, untuk mendapatkan polyline yang diterima perintah-perintah tersebut.

## Kesalahan umum

- **Kurva melewati batas di antara titik yang berdekatan.** Kurva melalui titik akan melengkung di tempat titik-titik itu berada. Gunakan lebih sedikit titik, atau poligon kontrol.
- **"That is not a spline."** Itu bukan spline. SPLINEDIT hanya menerima spline; {{cmd:PEDIT}} menyunting polyline.
- **Spline tertutup dengan titik pas memiliki bentuk sedikit berbeda di program lain.** CadCraft menutupnya dengan satu sambungan halus di titik pertama; program lain mungkin menutupnya dengan kurva periodik. Spline tertutup dengan titik kontrol sama di keduanya.
