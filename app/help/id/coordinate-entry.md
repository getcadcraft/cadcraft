---
title: Entri koordinat dan jarak
summary: Setiap cara mengetik titik, jarak, sudut, atau angka di baris perintah CadCraft, dengan contoh.
keywords: input dinamis, dyn, f12, tab, koordinat, absolut, relatif, polar, @, jarak langsung, sudut, derajat, titik terakhir, lastpoint, mengetik titik, input, aritmetika, kalkulasi, kalkulator, cal, tambah, pecahan, ekspresi
from: 7de9252d
---

## Titik

Saat perintah meminta titik, ketik salah satu bentuk berikut lalu tekan {{key:Enter}}:

| Anda mengetik | Artinya | Contoh |
|---|---|---|
| `x,y` | Absolut: diukur dari titik asal 0,0 | `2500,1200` |
| `#x,y` | Juga absolut (diterima sebagai kebiasaan) | `#2500,1200` |
| `@dx,dy` | Relatif: ke samping dan ke atas dari titik terakhir | `@600,0` |
| `@d<a` | Polar relatif: jarak dan sudut dari titik terakhir | `@1500<45` |
| `d<a` | Polar absolut: jarak dan sudut dari titik asal | `3000<90` |
| satu angka | Jarak langsung: sejauh itu dari titik dasar, ke arah crosshair | `1200` |
| `*x,y`, `@*dx,dy` | Koordinat dunia saat UCS diatur | `*0,0` |

Saat UCS diatur ({{cmd:UCS}}), `x,y`, `@dx,dy` dan sudut pada `d<a` diukur sepanjang sumbu UCS. Lihat [Putar tampilan dan gunakan koordinat Anda sendiri](topic:ucs-and-turned-view).

Atau klik di gambar; snap objek dan Ortho berlaku untuk klik.

Aturan:

- Koma memisahkan X dari Y. Desimal memakai titik: `1250.75,300`.
- Nilai negatif ke kiri dan ke bawah: `@-600,0`.
- Jangan mengetik spasi: {{key:Space}} mengirim baris, seperti {{key:Enter}}.
- Angka boleh memakai eksponen: `1e3` sama dengan 1000.
- Tidak ada satuan yang diketik, dan tidak ada notasi kaki-dan-inci. Ketik angka biasa dalam satuan gambar.

## Titik terakhir

`@` dihitung dari **titik terakhir yang Anda berikan pada perintah titik mana pun**, di perintah apa pun: klik, snap, atau titik yang diketik. Titik ini diingat di antara perintah, jadi Anda dapat memulai garis baru `@0,500` dari tempat garis sebelumnya berakhir. Sebelum Anda memberikan titik apa pun, `@` dihitung dari 0,0.

Beberapa tempat yang membuat ini penting:

- Di {{cmd:COPY}}, setelah salinan pertama, titik terakhir adalah titik salinan tersebut. `@600,0` dua kali menempatkan salinan pada jarak 600 dan 1200 dari aslinya.
- Setelah Anda menempatkan dimensi, titik terakhir adalah tempat Anda menempatkan garis dimensi, bukan ujung dimensi.

Jika ragu, gunakan titik absolut, snap, atau jarak langsung.

## Entri jarak langsung

Angka tunggal adalah jarak dari **titik dasar** perintah (titik tempat karet elastis dimulai) ke arah crosshair:

1. Gerakkan crosshair ke arah yang Anda inginkan.
2. Ketik jaraknya lalu tekan {{key:Enter}}.

Saat {{ui:Ortho}} aktif, arah diatur lurus ke samping atau lurus ke atas dan ke bawah, sehingga ini cara tercepat untuk menggambar dinding siku. Jika tidak ada titik dasar, atau crosshair tepat di atasnya, angka ditolak dengan pesan "Diperlukan titik atau kata kunci opsi."

## Sudut

- Dalam derajat, sebagai angka biasa: `30`, `-45`, `112.5`.
- Diukur berlawanan arah jarum jam dari arah X positif (menunjuk ke kanan): 0 adalah kanan, 90 atas, 180 kiri, 270 atau -90 bawah.
- Jika sudut diminta (rotasi, sudut teks), Anda juga dapat mengklik: sudut diukur dari titik dasar ke titik klik. Sebelum titik dasar ada, klik pertama menetapkannya dan perintah meminta titik kedua.

## Jarak

Jika jarak diminta (radius, offset, tinggi teks, faktor skala):

- ketik angka positif (pada gambar kaki-dan-inci juga `12'6"` atau `6-1/2`: lihat [Kaki dan inci](topic:units-papers-scales#feet-and-inches-and-fractions)), atau
- klik sebuah titik: jaraknya dari titik dasar perintah ke titik tersebut, atau
- klik dua titik jika tidak ada titik dasar: perintah berubah menjadi `Tentukan titik kedua`.

"Memerlukan angka positif atau dua titik." berarti nilai bukan angka, atau bernilai negatif.

## Aritmetika dalam nilai yang diketik

Di mana pun panjang, koordinat, sudut, atau angka diketik (baris perintah, input dinamis, kotak Properti dan dialog), Anda dapat mengetik perhitungan dengan `+`, `-`, `*`, `/` dan tanda kurung, alih-alih menghitungnya dulu:

| Ketik | Hasilnya |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (pada gambar kaki-dan-inci) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, dalam satuan gambar (jika satuannya sudah diatur) |
| `@4+7/16,0` | titik 4.4375 ke kanan dari titik terakhir |
| `360/7` | sudut 51.43 derajat |

- Tanda hubung yang ditulis dalam panjang tetap menjadi bagian darinya: `4-7/16` adalah 4 7/16 dan `24'-6"` adalah 24 kaki 6 inci. Untuk mengurangi setelah tanda kaki, selesaikan panjangnya dulu, `24'-0"-6"`, atau tulis perhitungan dalam kurung dengan spasi di sekitar tanda hubung, `(24' - 6")` (di dalam kurung, spasi tetap berupa spasi; di luar itu, spasi menekan {{key:Enter}}).
- Angka biasa yang ditambahkan ke panjang berada dalam satuan gambar; mengalikan atau membaginya dengan angka menskalakan panjang. Dua panjang yang dikalikan membentuk luas, jadi `2'*3'` ditolak.
- `abs`, `round`, `ceil` dan `floor` juga berfungsi: `round(10/3)`.
- Kalkulasi yang tidak dapat dibaca ditolak dengan menunjukkan letak kesalahannya, misalnya "Kalkulasi berakhir terlalu cepat (karakter 3): nilai hilang." Tidak ada yang pernah dibaca sebagai 0. {{cmd:CAL}} mencetak nilai sebuah kalkulasi.

## Input dinamis

{{ui:Dyn}} ({{key:F12}}, di bilah status) menampilkan nilai di dekat crosshair saat perintah meminta titik.

- Jika belum ada titik dasar (titik pertama garis), kedua kolom isian adalah **X** dan **Y**.
- Setelah itu, kolomnya adalah **jarak** dan **sudut** dari titik terakhir.

Pengetikan tetap masuk ke baris perintah; kolom di dekat crosshair menampilkannya, dan karet elastis mengikutinya.

1. Ketik nilai: nilai masuk ke kolom yang disorot.
2. Tekan {{key:Tab}} (atau koma setelah X). Nilai dikunci (ditampilkan tebal) dan kolom berikutnya disorot. Jarak yang dikunci membuat karet elastis tetap sepanjang itu saat Anda membidik dengan mouse.
3. Ketik nilai kedua, atau cukup bidik, lalu tekan {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} menggambar 50 lurus ke atas dari titik terakhir.

Menekan {{key:Enter}} setelah satu nilai tanpa {{key:Tab}} berfungsi sebagai entri jarak langsung. Kaki dan inci juga berfungsi di kolom isian (`12'6"`). Perintah jarak dan sudut (radius lingkaran, rotasi) juga menampilkan nilainya di dekat crosshair.

## Opsi dan nilai default

- Opsi ditampilkan dalam kurung siku. Ketik huruf kapital dari sebuah opsi (`D` untuk `[Diameter]`, `CL` untuk `CLose`) lalu tekan {{key:Enter}}. Awalan kata yang lebih panjang juga berfungsi (`DIA`).
- Nilai default ditampilkan dalam tanda kurung sudut, seperti `<500>`. Tekan {{key:Enter}} atau klik kanan untuk menggunakannya.

## Tata letak keyboard lain dan keypad

Nama perintah, nama pendek, dan huruf opsi adalah huruf Latin. Dengan tata letak Yunani, Sirilik (Rusia, Ukraina, Belarus, Serbia, Makedonia, Bulgaria), Ibrani, Arab, Persia, Thai, atau Korea yang aktif, Anda tidak perlu berganti tata letak: jika kata yang Anda ketik bukan perintah, nama pendek, atau opsi seperti apa adanya, CadCraft membacanya berdasarkan tombol yang Anda tekan. Tombol bertanda `L` pada keyboard Latin tetap memulai `LINE`, dan tombol `C` tetap menjawab opsi Tutup (C), apa pun huruf yang diberikan tata letak padanya. Daftar perintah yang cocok di atas baris perintah mengikuti aturan yang sama. Teks yang Anda ketik saat perintah meminta teks (isi {{cmd:TEXT}}, sebuah nama) tidak pernah diubah.

Pada tata letak yang tombol desimal keypad-nya menghasilkan koma, tombol itu mengetik titik di baris perintah dan di kotak angka, sehingga `12.5` dapat diketik di keypad. Tombol koma pada keyboard utama tetap memisahkan `x,y`.

Keduanya dapat dimatikan di {{ui:Pengaturan}}: {{ui:Commands on a non-Latin keyboard layout}} dan {{ui:Keypad decimal key}}.

## Tampilan koordinat

Bilah status menampilkan X dan Y crosshair (dalam UCS jika diatur), setelah snap dan Ortho. Saat perintah memiliki titik dasar, ditambahkan `Δ` dengan jarak dan sudut dari titik tersebut, misalnya `Δ 1500 < 30°`: angka yang akan Anda ketik sebagai `@1500<30`.

Gunakan {{cmd:ID}} untuk mencetak koordinat sebuah titik dan {{cmd:DIST}} untuk mengukur jarak antara dua titik.
