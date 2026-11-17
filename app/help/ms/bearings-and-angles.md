---
title: Taip dan tunjukkan bearing dan sudut dalam darjah, minit, saat
summary: Taip arah sebagai bearing juruukur seperti N45°23'30"E, atau sebagai darjah-minit-saat di mana sahaja sudut diminta, dan pilih cara lukisan menunjukkan sudut dengan AUNITS.
keywords: bearing, bearings, juruukur, bearing kuadran, N45E, darjah minit saat, DMS, sudut, arah, lot, lots, susun atur, terabas, AUNITS, ANGUNITS, format sudut, kutub, jarak langsung, DIST
from: af805567
---

Di mana sahaja CadCraft meminta **sudut atau arah**, anda boleh menaip **bearing kuadran** atau sudut dalam **darjah, minit dan saat**, selain nombor darjah biasa.

## Bearing

Bearing menamakan utara atau selatan, sudut sehingga 90°, kemudian timur atau barat:

| Anda taip | Arah |
|---|---|
| `N45°23'30"E` atau `N45d23'30"E` | 45°23'30" dari utara ke arah timur |
| `S10-30-00W` atau `S 10 30 W` | 10°30' dari selatan ke arah barat (sempang atau ruang antara bahagian) |
| `N45.5E` | 45.5° dari utara ke arah timur |
| `N`, `E`, `S`, `W` | tepat utara, timur, selatan, barat |

Huruf boleh dalam mana-mana bentuk huruf. Dalam bahasa Sepanyol, `O` juga bermaksud barat (oeste). `d` dan `°` maksudnya sama; `'` ialah minit dan `"` ialah saat.

Untuk melukis garis lot sepanjang 20 m pada N45°23'E, mulakan {{cmd:LINE}} dan taip titik pertama, kemudian `@20<N45d23'E`. Ini juga berfungsi pada gesaan sudut {{cmd:ROTATE}} dan setiap gesaan lain yang meminta sudut, dan dalam kotak sudut {{ui:Input dinamik}}.

## Darjah, minit, saat

`45°23'30"`, `45d23'30"`, `45d30'` atau `45d` ialah sudut dari paksi X, berlawanan arah jam. Simbol `°` atau `d` diperlukan: `45-23-30` dibaca sebagai aritmetik (45 − 23 − 30). Minit dan saat mesti kurang daripada 60. Nombor biasa, dengan aritmetik (`360/7`), masih berfungsi.

## Cara sudut dipaparkan

Taip {{cmd:AUNITS}} (atau pilih {{ui:Format sudut}} dalam {{ui:Sifat}} › {{ui:Tetapan semasa}}) dan pilih:

- **Darjah perpuluhan** (lalai): `44.6083°`.
- **Darjah-minit-saat**: `44°36'30"`.
- **Bearing juruukur**: `N45°23'30"E`.

Ketepatan mengikut apa yang anda taip untuk {{cmd:AUNITS}}: 0 menunjukkan darjah, 2 minit, 4 saat, dan 5 hingga 8 menambah perpuluhan saat. Format ini dipaparkan dalam {{cmd:DIST}}, pada bar status, dalam input dinamik dan tip penjejakan, dan dalam kotak sudut {{ui:Sifat}} (kotak yang anda sunting menerima mana-mana bentuk di atas). Ia ialah satu langkah buat asal dan disimpan dalam fail DWG dan DXF (`$AUNITS`, `$AUPREC`); LISP membacanya dan menulisnya sebagai `AUNITS` dan `AUPREC`.
