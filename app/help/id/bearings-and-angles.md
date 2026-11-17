---
title: Ketik dan tampilkan bearing dan sudut dalam derajat, menit, detik
summary: Ketik arah sebagai bearing surveyor seperti N45°23'30"E, atau sebagai derajat-menit-detik di mana pun sudut diminta, dan pilih cara gambar menampilkan sudut dengan AUNITS.
keywords: bearing, surveyor, bearing kuadran, N45E, derajat menit detik, DMS, sudut, arah, kavling, tata letak, poligon (traverse), AUNITS, ANGUNITS, format sudut, polar, jarak langsung, DIST
from: af805567
---

Di mana pun CadCraft meminta **sudut atau arah**, Anda dapat mengetik **bearing kuadran** atau sudut dalam **derajat, menit dan detik**, serta angka derajat biasa.

## Bearing

Bearing menyebut utara atau selatan, sudut hingga 90°, lalu timur atau barat:

| Anda ketik | Arah |
|---|---|
| `N45°23'30"E` atau `N45d23'30"E` | 45°23'30" dari utara ke arah timur |
| `S10-30-00W` atau `S 10 30 W` | 10°30' dari selatan ke arah barat (tanda hubung atau spasi di antara bagian) |
| `N45.5E` | 45.5° dari utara ke arah timur |
| `N`, `E`, `S`, `W` | tepat utara, timur, selatan, barat |

Huruf boleh kapital atau kecil. Dalam bahasa Spanyol, `O` juga berarti barat (oeste). `d` dan `°` berarti sama; `'` adalah menit dan `"` adalah detik.

Untuk membuat garis kavling sepanjang 20 m pada N45°23'E, mulai {{cmd:LINE}} dan ketik titik pertama, lalu `@20<N45d23'E`. Hal yang sama berlaku pada prompt sudut {{cmd:ROTATE}} dan setiap prompt lain yang meminta sudut, serta pada kotak sudut {{ui:Input dinamis}}.

## Derajat, menit, detik

`45°23'30"`, `45d23'30"`, `45d30'` atau `45d` adalah sudut dari sumbu X, berlawanan arah jarum jam. Simbol `°` atau `d` diperlukan: `45-23-30` dibaca sebagai aritmetika (45 − 23 − 30). Menit dan detik harus di bawah 60. Angka biasa, dengan aritmetika (`360/7`), tetap berfungsi.

## Cara sudut ditampilkan

Ketik {{cmd:AUNITS}} (atau pilih {{ui:Format sudut}} di {{ui:Properti}} › {{ui:Pengaturan saat ini}}) dan pilih:

- **Derajat desimal** (bawaan): `44.6083°`.
- **Derajat-menit-detik**: `44°36'30"`.
- **Bearing surveyor**: `N45°23'30"E`.

Ketelitian mengikuti apa yang Anda ketik untuk {{cmd:AUNITS}}: 0 menampilkan derajat, 2 menit, 4 detik, dan 5 hingga 8 menambahkan desimal detik. Format ditampilkan di {{cmd:DIST}}, pada bilah status, di input dinamis dan tips pelacakan, serta di kotak sudut {{ui:Properti}} (kotak yang Anda edit menerima salah satu bentuk di atas). Ini adalah satu langkah urungkan dan disimpan dalam file DWG dan DXF (`$AUNITS`, `$AUPREC`); LISP membacanya dan menulisnya sebagai `AUNITS` dan `AUPREC`.
