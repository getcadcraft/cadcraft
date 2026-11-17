---
title: Kemasukan koordinat dan jarak
summary: Setiap cara menaip titik, jarak, sudut atau nombor di baris arahan CadCraft, dengan contoh.
keywords: input dinamik, dyn, f12, tab, koordinat, mutlak, relatif, kutub, @, jarak terus, sudut, darjah, titik terakhir, lastpoint, menaip titik, input, pengiraan, kalkulator, cal, tambah, pecahan, ungkapan
from: 7de9252d
---

## Titik

Apabila gesaan meminta titik, taip salah satu daripada ini dan tekan {{key:Enter}}:

| Anda taip | Maksud | Contoh |
|---|---|---|
| `x,y` | Mutlak: diukur dari asal 0,0 | `2500,1200` |
| `#x,y` | Juga mutlak (diterima untuk kebiasaan) | `#2500,1200` |
| `@dx,dy` | Relatif: melintang dan ke atas dari titik terakhir | `@600,0` |
| `@d<a` | Kutub relatif: jarak dan sudut dari titik terakhir | `@1500<45` |
| `d<a` | Kutub mutlak: jarak dan sudut dari asal | `3000<90` |
| satu nombor | Jarak terus: sejauh itu dari titik asas, ke arah garis silang | `1200` |
| `*x,y`, `@*dx,dy` | Koordinat dunia semasa UCS ditetapkan | `*0,0` |

Dengan UCS ditetapkan ({{cmd:UCS}}), `x,y`, `@dx,dy` dan sudut dalam `d<a` diukur sepanjang paksi UCS. Lihat [Pusingkan paparan dan gunakan koordinat anda sendiri](topic:ucs-and-turned-view).

Atau klik dalam lukisan; snap objek dan Ortho terpakai pada klik.

Peraturan:

- Koma memisahkan X daripada Y. Perpuluhan menggunakan titik: `1250.75,300`.
- Nilai negatif pergi ke kiri dan ke bawah: `@-600,0`.
- Jangan taip ruang: {{key:Space}} menghantar baris, sama seperti {{key:Enter}}.
- Nombor boleh menggunakan eksponen: `1e3` ialah 1000.
- Tiada unit ditaip, dan tiada tatatanda kaki-dan-inci. Taip nombor biasa dalam unit lukisan.

## Titik terakhir

`@` mengira dari **titik terakhir yang anda beri pada mana-mana gesaan titik**, dalam mana-mana arahan: klik, snap atau titik yang ditaip. Ia diingati antara arahan, jadi anda boleh mula garisan baharu `@0,500` dari tempat garisan terakhir tamat. Sebelum anda memberi sebarang titik, `@` mengira dari 0,0.

Beberapa tempat di mana ini penting:

- Dalam {{cmd:COPY}}, selepas salinan pertama, titik terakhir ialah titik salinan itu. `@600,0` dua kali meletakkan salinan pada 600 dan 1200 dari asal.
- Selepas anda meletakkan dimensi, titik terakhir ialah tempat anda meletakkan garis dimensi, bukan hujung dimensi.

Apabila ragu-ragu, gunakan titik mutlak, snap atau jarak terus.

## Kemasukan jarak terus

Nombor kosong ialah jarak dari **titik asas** arahan (titik tempat tali getah bermula) ke arah garis silang:

1. Gerakkan garis silang ke arah yang anda mahu.
2. Taip jarak dan tekan {{key:Enter}}.

Dengan {{ui:Ortho}} dihidupkan, arah melekap ke lurus melintang atau lurus ke atas dan ke bawah, menjadikan ini cara terpantas untuk melukis dinding bersudut tegak. Jika tiada titik asas, atau garis silang berada tepat di atasnya, nombor itu ditolak dengan mesej "Titik atau kata kunci pilihan diperlukan."

## Sudut

- Dalam darjah, sebagai nombor biasa: `30`, `-45`, `112.5`.
- Diukur mengikut arah lawan jam dari arah X positif (menghala ke kanan): 0 ialah kanan, 90 ialah atas, 180 ialah kiri, 270 atau -90 ialah bawah.
- Di tempat sudut diminta (putaran, sudut teks), anda juga boleh klik: sudut diukur dari titik asas ke klik. Sebelum titik asas wujud, klik pertama menetapkannya dan gesaan meminta titik kedua.

## Jarak

Di tempat jarak diminta (jejari, ofset, ketinggian teks, faktor skala):

- taip nombor positif (dalam lukisan kaki-dan-inci juga `12'6"` atau `6-1/2`: lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions)), atau
- klik satu titik: jarak dari titik asas arahan ke titik itu, atau
- klik dua titik apabila tiada titik asas: gesaan bertukar kepada `Tentukan titik kedua`.

"Memerlukan nombor positif atau dua titik." bermaksud nilai itu bukan nombor, atau nilainya negatif.

## Pengiraan dalam nilai yang ditaip

Di mana-mana panjang, koordinat, sudut atau nombor ditaip (baris arahan, input dinamik, kotak Sifat dan kotak dialog), anda boleh menaip pengiraan dengan `+`, `-`, `*`, `/` dan kurungan, dan bukannya mengira dahulu:

| Taip | Memberi |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (dalam lukisan kaki-dan-inci) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, dalam unit lukisan (apabila unitnya ditetapkan) |
| `@4+7/16,0` | titik 4.4375 ke kanan titik terakhir |
| `360/7` | sudut 51.43 darjah |

- Tanda sempang yang ditulis dalam panjang masih sebahagian daripadanya: `4-7/16` ialah 4 7/16 dan `24'-6"` ialah 24 kaki 6 inci. Untuk menolak selepas tanda kaki, selesaikan panjang dahulu, `24'-0"-6"`, atau letakkan pengiraan dalam kurungan dengan ruang di sekeliling sempang, `(24' - 6")` (dalam kurungan, ruang ialah ruang; di tempat lain ia menekan {{key:Enter}}).
- Nombor biasa yang ditambah kepada panjang ialah dalam unit lukisan; mendarab atau membahagi dengannya menskalakan panjang. Dua panjang yang didarab menjadi luas, jadi `2'*3'` ditolak.
- `abs`, `round`, `ceil` dan `floor` juga berfungsi: `round(10/3)`.
- Pengiraan yang tidak boleh dibaca ditolak dengan menunjukkan di mana ia tersilap, contohnya "Pengiraan tamat terlalu awal (aksara 3): nilai hilang." Tiada apa-apa pernah dibaca sebagai 0. {{cmd:CAL}} memaparkan nilai pengiraan.

## Input dinamik

{{ui:Dyn}} ({{key:F12}}, dalam bar status) meletakkan nilai di sebelah garis silang semasa arahan meminta titik.

- Tanpa titik asas lagi (titik pertama garisan), dua medan ialah **X** dan **Y**.
- Selepas itu, ia ialah **jarak** dan **sudut** dari titik terakhir.

Menaip masih pergi ke baris arahan; medan di sebelah garis silang menunjukkannya, dan tali getah mengikutinya.

1. Taip nilai: ia masuk ke dalam medan yang diserlahkan.
2. Tekan {{key:Tab}} (atau koma selepas X). Nilai dikunci (ditunjukkan tebal) dan medan seterusnya diserlahkan. Jarak yang dikunci mengekalkan tali getah sepanjang itu semasa anda menyasar dengan tetikus.
3. Taip nilai kedua, atau sasar sahaja, dan tekan {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} melukis 50 lurus ke atas dari titik terakhir.

Menekan {{key:Enter}} selepas satu nilai tanpa {{key:Tab}} berfungsi sebagai kemasukan jarak terus. Kaki dan inci juga berfungsi dalam medan (`12'6"`). Gesaan jarak dan sudut (jejari bulatan, putaran) turut menunjukkan nilainya di sebelah garis silang.

## Pilihan dan nilai lalai

- Pilihan dipaparkan dalam kurungan segi empat. Taip huruf besar pilihan (`D` untuk `[Diameter]`, `CL` untuk `CLose`) dan tekan {{key:Enter}}. Permulaan perkataan yang lebih panjang juga berfungsi (`DIA`).
- Nilai lalai dipaparkan dalam kurungan sudut, seperti `<500>`. Tekan {{key:Enter}} atau klik kanan untuk menggunakannya.

## Susun atur papan kekunci lain dan pad nombor

Nama arahan, nama pendek dan huruf pilihan ialah huruf Latin. Dengan susun atur Yunani, Cyrillic (Rusia, Ukraine, Belarus, Serbia, Makedonia, Bulgaria), Ibrani, Arab, Parsi, Thai atau Korea aktif, anda tidak perlu menukar susun atur: apabila perkataan yang anda taip bukan arahan, nama pendek atau pilihan seperti yang ditulis, CadCraft membacanya mengikut kekunci yang anda tekan. Kekunci yang ditanda `L` pada papan kekunci Latin masih memulakan `LINE`, dan kekunci `C` masih menjawab `Close`, walau apa pun huruf yang diletakkan oleh susun atur padanya. Senarai arahan yang sepadan di atas baris arahan mengikut peraturan yang sama. Teks yang anda taip di tempat arahan meminta teks (kandungan {{cmd:TEXT}}, nama) tidak pernah diubah.

Pada susun atur yang kekunci perpuluhan pad nombornya memberi koma, kekunci itu menaip titik dalam baris arahan dan dalam kotak nombor, jadi `12.5` boleh ditaip pada pad nombor. Kekunci koma papan kekunci utama masih memisahkan `x,y`.

Kedua-dua ciri ini boleh dimatikan dalam {{ui:Tetapan}}: {{ui:Commands on a non-Latin keyboard layout}} dan {{ui:Keypad decimal key}}.

## Paparan koordinat

Bar status menunjukkan X dan Y garis silang (dalam UCS apabila satu ditetapkan), selepas snap dan Ortho. Semasa arahan mempunyai titik asas, ia menambah `Δ` dengan jarak dan sudut dari titik itu, contohnya `Δ 1500 < 30°`: nombor yang anda akan taip sebagai `@1500<30`.

Gunakan {{cmd:ID}} untuk mencetak koordinat titik dan {{cmd:DIST}} untuk mengukur antara dua titik.
