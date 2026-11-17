---
title: Garisan dan sinar pembinaan
summary: Lukis garisan yang berjalan tanpa hujung (XLINE) atau dari satu titik ke satu arah (RAY) untuk menjajarkan objek, dan pangkaskannya menjadi garisan biasa.
keywords: xline, sinar, garisan pembinaan, garisan tak terhingga, garisan panduan, garisan rujukan, bahagi dua, garisan ofset, garisan susun atur, xl
from: b6c398bc
---

## Apa yang akan anda pelajari

Cara melukis garisan pembinaan untuk menjajarkan objek semasa melukis: melalui dua titik, mengufuk atau menegak, pada sudut, separuh jalan antara dua arah, atau pada jarak tertentu dari satu garisan. Dan cara memangkaskannya menjadi garisan biasa apabila tugasnya selesai.

## Dua jenis

- **Garisan pembinaan** ({{cmd:XLINE}}) berjalan tanpa hujung ke kedua-dua arah.
- **Sinar** ({{cmd:RAY}}) bermula pada satu titik dan berjalan tanpa hujung ke satu arah.

Kedua-duanya dilukis merentasi seluruh kawasan lukisan tanpa mengira zum, dalam skrin berpecah dan dalam viewport pada helaian. {{ui:Lingkungan}} tidak memasukkannya, jadi zum ke lukisan masih memuatkan apa yang anda lukis.

## Lukis garisan pembinaan

1. Klik {{ui:Lukis}} › {{ui:Lagi}} › {{ui:Garis pembinaan}}, atau taip `XL` dan tekan {{key:Enter}}.
2. Klik satu titik. Setiap klik selepas itu menambah satu garisan pembinaan melalui titik pertama dan titik yang anda klik.
3. Tekan {{key:Enter}} untuk selesai.

Daripada titik pertama, anda boleh taip satu pilihan:

| Pilihan | Fungsinya |
|---|---|
| `H` (Hor) | Garisan mengufuk, satu melalui setiap titik yang anda klik. |
| `V` (Ver) | Garisan menegak melalui setiap titik. |
| `A` (Ang) | Garisan pada sudut yang anda taip (dalam darjah, berlawan arah jam dari paksi X), melalui setiap titik. `R` (Reference) mengukur sudut dari satu garisan yang anda pilih. |
| `B` (Bisect) | Klik bucu, kemudian satu titik sepanjang satu sisi: setiap titik yang anda klik sepanjang sisi yang lain menambah garisan separuh jalan antara keduanya. |
| `O` (Offset) | Taip satu jarak, pilih satu garisan, kemudian klik sisinya: satu garisan pembinaan sejauh itu darinya, selari. `T` (Through) meletakkannya melalui satu titik yang anda klik. Jarak itu diingati untuk kali seterusnya. |

## Lukis sinar

1. Klik {{ui:Lukis}} › {{ui:Lagi}} › {{ui:Sinar}}, atau taip `RAY` dan tekan {{key:Enter}}.
2. Klik di tempat sinar-sinar bermula.
3. Klik satu titik untuk setiap sinar melaluinya. Tekan {{key:Enter}} untuk selesai.

## Snap kepadanya dan pangkaskannya

Garisan pembinaan dan sinar mengambil snap Terdekat, Serenjang dan Persilangan. Ia tiada hujung dan tiada tengah, jadi Titik hujung dan Titik tengah tidak menjumpai apa-apa padanya.

Ia dipotong dan memotong seperti garisan lain dalam {{cmd:TRIM}} dan {{cmd:BREAK}}:

- Pangkas satu hujung dari garisan pembinaan dan ia menjadi sinar yang bermula di tempat potongan.
- Pangkas bahagian jauh dari sinar dan ia menjadi garisan biasa.
- Putus garisan pembinaan pada satu titik dan anda mendapat dua sinar.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} dan {{cmd:STRETCH}} turut berfungsi padanya. Pilihan tetingkap tidak pernah memilihnya, kerana tiada tetingkap dapat memuatkan keseluruhan garisan tanpa hujung; tetingkap silang atau satu klik boleh.

:::note
DWG (setiap versi) dan DXF 2000 menyimpannya sebagai garisan pembinaan. DXF R12 tiada jenis itu, jadi di sana ia menjadi garisan merentasi lukisan, dan simpanan itu memberitahu anda. Plot atau PDF hanya melukisnya merentasi apa yang dicetak.
:::
</content>
