---
title: Splin dan polygaris: SPLINE, SPLINEDIT, PEDIT
summary: Lukis lengkung licin melalui titik atau daripada poligon kawalan, edit penyesuaian dan titik kawalannya, dan edit polygaris (sambung, tutup, lebar, suai, splin, nyahlengkung) atau tukar splin kepada polygaris.
keywords: splin, splinedit, spl, spe, pedit, pe, titik suai, titik kawalan, pemberat, nurbs, edit polygaris, sambung, lengkung suai, nyahlengkung, tukar kepada polygaris, kejituan, tangen, lengkung, toleransi suai
from: d31f72d8
---

## Apa yang akan anda hasilkan

Satu lengkung melalui lima titik, kemudian lengkung yang sama diedit dalam tiga cara, dan satu polygaris dibina daripada tiga garisan.

## Lukis splin melalui titik

1. Taip `SPL` dan tekan {{key:Enter}}.
2. Klik atau taip titik yang perlu dilalui lengkung: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Tekan {{key:Enter}} selepas titik terakhir.
3. {{ui:Tangen mula}}: klik titik yang lengkung sepatutnya bergerak ke arahnya, atau tekan {{key:Enter}} untuk membiarkan CadCraft memutuskannya. Lakukan perkara yang sama untuk tangen akhir.

Lengkung melalui setiap titik. Taip `C` dan bukannya {{key:Enter}} untuk menutupnya (lengkung kembali ke titik pertama). {{key:U}} (`Buat asal`) membatalkan titik terakhir semasa anda melukis.

### Lukis daripada poligon kawalan

Taip `M` pada gesaan pertama, kemudian `C` (Bucu kawalan) dan darjah dari 1 hingga 5 (3 ialah yang biasa). Kini titik yang anda pilih ialah bucu poligon yang menarik lengkung ke arahnya; lengkung bermula pada yang pertama dan berakhir pada yang terakhir. Yang tertutup membalut, tanpa bucu pada sambungan.

### Tukar polygaris kepada splin

Pada gesaan pertama taip `O` (Object) dan pilih polygaris atau garisan. Ia menjadi splin melalui bucunya; yang asal hilang.

## Edit splin

Pilih splin dan taip `SPE` (atau taip `SPE` dan klik padanya). Pemegang menunjukkan titik suai (atau titik kawalan bagi splin yang tiada titik suai): seret satu untuk membentuk semula lengkung. Pada gesaan:

- **Data suai** (splin yang dilukis melalui titik): `A` menambah titik suai (klik di mana), `D` memadam satu (klik berhampiran), `M` mengalih satu (klik berhampiran, kemudian klik tempat barunya), `T` menetapkan tangen akhir, `P` membuang titik suai, supaya splin diedit mengikut titik kawalannya selepas itu.
- **Edit bucu**: `A` menambah titik kawalan tanpa menukar lengkung, `M` mengalih satu, `W` memberi satu **pemberat** (lebih daripada 1 menarik lengkung lebih dekat kepadanya, kurang daripada 1 membiarkannya pergi).
- **Buka** atau **Tutup**, dan **Terbalik** (lengkung berjalan ke arah sebaliknya).
- **Tukar kepada Polygaris** (`P`): splin menjadi polygaris; kejituan ialah bilangan segmen bagi setiap rentang (10 ialah yang biasa).
- **Buat asal (`U`)** membatalkan perubahan terakhir; **Keluar (`X`)** menamatkan.

{{ui:Sifat}} menunjukkan darjah splin, berapa titik suai dan titik kawalan yang dimilikinya, panjangnya, dan membolehkan anda membukanya atau menutupnya.

## Edit polygaris

Pilih polygaris dan taip `PE`. Garisan, lengkok atau splin yang anda pilih mula-mula ditawarkan sebagai polygaris untuk ditukar (splin memerlukan kejituan).

- **Tutup** / **Buka** menyambung atau memisahkan hujungnya.
- **Cantum** menambah garisan, lengkok dan polygaris yang hujungnya bertemu dengan hujung polygaris. `Jarak toleransi` ialah jarak hujung boleh berjauhan dan masih bersambung (0 bermaksud mesti bertemu).
- **Lebar** memberi keseluruhan polygaris satu lebar (0 membuangnya).
- **Suai** menggantikan polygaris dengan lengkung licin yang melalui bucunya; **Splin** dengan B-spline kubik yang mengikutinya (ia bermula dan berakhir pada bucu pertama dan terakhir, dan kekal dekat dengan yang lain). Kedua-duanya menjadi polygaris segmen pendek, dan bucu asal dikekalkan, jadi **Nyahlengkung** membawanya kembali.
- **Ltype gen** menyatakan sama ada garisan jenis putus-putus berjalan sepanjang keseluruhan polygaris atau bermula semula pada setiap bucu.
- **Terbalik** menukar susunan bucunya. **Berbilang** (`M` pada gesaan pertama) mengedit beberapa polygaris dengan pilihan yang sama.

Mengedit bucu polygaris dalam {{ui:Sifat}} atau dengan pemegang kekal seperti asalnya: PEDIT tiada penyunting bucu.

## Dalam fail

DWG dan DXF 2000 mengekalkan splin sebagai splin: darjah, titik kawalan, knot, pemberat, titik suai dan tangen. Splin yang anda buka dan tidak ubah ditulis semula tepat seperti asalnya. DXF R12 tiada splin: ia disimpan sebagai polygaris sepanjang lengkung, dan sejarah menyatakan berapa banyak.

Ofset, pangkas, panjangkan, fillet, putus dan cantum tidak berfungsi pada splin. {{cmd:EXPLODE}} splin, atau {{cmd:PEDIT}} ia, untuk mendapat polygaris yang diterima oleh arahan-arahan itu.

## Kesilapan biasa

- **Lengkung melampaui antara titik yang rapat.** Lengkung melalui titik melengkung di tempat titik itu berada. Gunakan lebih sedikit titik, atau poligon kawalan.
- **"That is not a spline."** Itu bukan splin. SPLINEDIT hanya menerima splin; {{cmd:PEDIT}} mengedit polygaris.
- **Splin suai tertutup mempunyai bentuk yang sedikit berbeza dalam program lain.** CadCraft menutupnya dengan satu sambungan licin pada titik pertama; program lain mungkin menutupnya dengan lengkung berkala. Splin titik kawalan tertutup adalah sama dalam kedua-duanya.
