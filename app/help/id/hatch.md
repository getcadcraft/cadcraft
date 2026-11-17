---
title: Hatch dan isi area
summary: Isi area dengan warna solid atau pola standar dengan mengklik di dalamnya atau dengan memilih bentuk tertutup, atur skala dan sudut pola, dan ubah hatch setelahnya.
keywords: hatch, bhatch, isi, isi solid, pola, ansi31, ansi37, brick, earth, net, garis potongan, poché, pulau, garis batas, skala, sudut
from: 14399174
---

## Yang akan Anda buat

Potongan dinding yang diisi pola ANSI31, sebuah kolom di dalamnya dibiarkan kosong, dan isian solid pada kolom tersebut.

## Hatch dengan mengklik di dalam area

1. Gambar persegi panjang (`REC`, `0,0`, `@2000,1200`) dan lingkaran di dalamnya (`C`, `1000,600`, `300`). Klik {{ui:Extents}}.
2. Klik {{ui:Hatch}} di grup {{ui:Draw}}, atau ketik `H` lalu tekan {{key:Enter}}. Riwayat menunjukkan pola yang sedang aktif, misalnya `Current hatch: ANSI31, scale 1, angle 0°`.
3. Ketik `P` lalu tekan {{key:Enter}}, ketik `ANSI31` lalu tekan {{key:Enter}}.
4. Ketik `SC` lalu tekan {{key:Enter}}, ketik `20` lalu tekan {{key:Enter}}. Ukuran pola diukur di kertas, jadi gambar yang dicetak pada 1:20 membutuhkan skala 20.
5. Pada `Tentukan titik internal`, klik di dalam persegi panjang, di luar lingkaran. Hatch tampil sebagai pratinjau.
6. Tekan {{key:Enter}}. Persegi panjang terisi hatch; lingkaran di dalamnya tetap kosong, karena merupakan pulau.

Klik di dalam beberapa area sebelum menekan {{key:Enter}} untuk menjadikannya satu hatch. `U` mengurungkan area terakhir.

## Isian solid

1. Ketik `H` lalu tekan {{key:Enter}}.
2. Ketik `P`, tekan {{key:Enter}}, ketik `SOLID` lalu tekan {{key:Enter}}.
3. Klik di dalam lingkaran, lalu tekan {{key:Enter}}.

## Hatch bentuk tertutup yang Anda pilih

Alih-alih mengklik di dalam, ketik `S` (Pilih objek) pada `Tentukan titik internal`, lalu pilih polyline, lingkaran, atau elips tertutup, kemudian tekan {{key:Enter}}. Bentuk yang berada di dalam bentuk lain dibiarkan kosong secara bergantian (yang terluar terisi hatch, yang berikutnya dibiarkan kosong, dan seterusnya).

## Pola

Ketik `?` pada pertanyaan pola untuk melihat daftarnya. Pola standarnya adalah ANSI31 sampai ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH, dan SOLID. Pada gambar dengan satuan inci (atau dengan kaki dan inci sebagai format panjangnya), ukuran inci dari pola digunakan, seperti di AutoCAD; selain itu, ukuran milimeter yang digunakan.

{{ui:Angle}} (`A`) memutar seluruh pola: ANSI31 pada 90° miring ke arah sebaliknya.

**File pola.** Ketik `F` (File pola) pada `Tentukan titik internal` dan pilih file `.pat`. Pola di dalamnya bergabung ke daftar; jika ada lebih dari satu, Anda akan ditanya pola mana yang akan digunakan. File tanpa pola yang dapat dibaca CadCraft akan diberi tahu, dan setiap pola yang dilewati dihitung. Ukuran dalam file `.pat` tidak memiliki satuan sendiri, sehingga dibaca dalam satuan gambar. Hanya file yang ditulis dalam format `.pat` yang umum yang sudah dicoba; tidak ada file yang dibuat program lain.

## Mengubah hatch

Pilih hatch (klik salah satu garisnya). Di {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}}, dan {{ui:Pattern angle}}. Hatch dari gambar yang dibuka menampilkan polanya jika merupakan pola standar; hatch lainnya tampil sebagai nada terang dari warnanya.

## Kesalahan umum

- **"No closed boundary round that point."** Ada celah pada garis luarnya, atau sebagian garisnya berada di luar layar: CadCraft hanya memeriksa yang ada di layar. Tutup celahnya (perbesar di sudut-sudutnya), atau perkecil tampilan.
- **"The pattern is too dense to draw at this scale."** Garis-garisnya akan lebih rapat daripada yang dapat ditampilkan gambar. Gunakan skala yang lebih besar: coba skala cetak (20 untuk 1:20).
- Pola terlihat sangat besar atau sangat kecil. Skala dinyatakan dalam satuan gambar per satuan pola; lihat langkah 4 di atas.
- **Memindahkan garis luar tidak memindahkan hatch.** Hatch tidak terikat pada garis batasnya. Pindahkan keduanya, atau buat hatch lagi.

## Hatch yang tetap mengikuti garis batasnya

Hatch yang Anda buat dengan `HATCH` mengingat apa yang membatasinya. Pindahkan, putar, atau skalakan garis batas, dan hatch beserta polanya ikut berubah. Seret grip untuk membentuk ulang garis batas, dan hatch akan dihitung ulang. Memindahkan hatch sendiri juga memindahkan garis batasnya, seperti bentuk terisi pada program gambar lainnya.

Tautan berakhir, dan baris perintah akan menyatakannya, jika garis batas tidak lagi tertutup atau Anda membentuk ulang hatch secara manual. Hatch itu sendiri tetap ada. Ketik `AS` saat hatching untuk membuat hatch yang berdiri sendiri. Menyalin hatch beserta garis batasnya akan menghasilkan salinan dengan tautan sendiri.

`HATCHEDIT` (`HE`) mengubah pola, skala, sudut, dan titik asal hatch, serta menautkannya ke garis batas atau mengakhiri tautan. Tautan disimpan dalam file DWG dan DXF 2000. File DXF R12 tidak memiliki objek hatch, dan tautan yang dibuat di program lain tidak dibaca: gunakan `HATCHEDIT` dan Link untuk keperluan itu.

Hatch yang tidak lagi memiliki garis batas (garis batasnya terhapus, atau file datang tanpa garis batas) dapat mengembalikannya: `HATCHGENERATEBOUNDARY` (`HGB`) menggambar polyline tertutup di sekeliling setiap loop hatch dan, jika Anda menjawab Ya, menautkan hatch ke polyline tersebut.

## Isian gradasi

`GRADIENT` (`GD`) mengisi area dengan gradasi alih-alih pola: pilihan yang sama dengan `HATCH`, setelah ditanya jenisnya (linear, silinder, bola, setengah bola, melengkung, dan masing-masing dalam versi terbalik), satu warna dengan tint atau dua warna, sudutnya, serta terpusat atau tidak. Pada `HATCH`, opsi `G` melakukan hal yang sama. `HATCHEDIT` `G`, atau {{ui:Properties}} di bawah Gradasi, mengubah gradasi atau mengubah hatch apa pun menjadi gradasi.

Gradasi tampil di layar dan dalam cetakan. Simpan sebagai DWG 2004 atau yang lebih baru, dan program lain akan mendapatkan hatch gradasi yang sesungguhnya. DXF 2000 dan DWG 2000 tidak memiliki gradasi: di sana CadCraft menyimpannya untuk dirinya sendiri, dan program lain melihat isian solid dalam warna pertama.

## Memangkas hatch

`TRIM` memangkas hatch seperti objek lainnya. Klik hatch di sisi tepi pemotong yang ingin dihapus: tepi-tepi membagi area hatch, dan bagian itu dihapus. Dalam mode Cepat, setiap objek adalah tepi pemotong; pilih tepinya terlebih dahulu (opsi `T`) jika jumlahnya banyak. Hatch yang telah dipangkas tidak lagi tertaut ke garis batasnya, karena tidak lagi mengisi area tersebut.
