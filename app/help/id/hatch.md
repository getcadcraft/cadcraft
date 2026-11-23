---
title: Hatch dan area isi
summary: Isi area dengan warna solid atau pola standar dengan mengklik di dalamnya atau dengan memilih bentuk tertutup, atur skala dan sudut pola, dan ubah hatch setelahnya.
keywords: hatch, bhatch, isi, isian solid, pola, ansi31, ansi37, bata, tanah, jaring, garis potongan, poché, pulau, batas, skala, sudut
from: e7feb344
---

## Yang akan Anda buat

Potongan dinding yang diisi pola ANSI31, sebuah kolom di dalamnya dibiarkan kosong, dan isian solid di kolom.

## Hatch dengan mengklik di dalam area

1. Gambar persegi panjang (`REC`, `0,0`, `@2000,1200`) dan lingkaran di dalamnya (`C`, `1000,600`, `300`). Klik {{ui:Batas}}.
2. Klik {{ui:Hatch}} di grup {{ui:Gambar}}, atau ketik `H` lalu tekan {{key:Enter}}. Riwayat menyebutkan pola yang aktif, misalnya `Current hatch: ANSI31, scale 1, angle 0°`.
3. Ketik `P` lalu tekan {{key:Enter}}, ketik `ANSI31` lalu tekan {{key:Enter}}.
4. Ketik `SC` lalu tekan {{key:Enter}}, ketik `20` lalu tekan {{key:Enter}}. Ukuran pola ada di kertas, jadi gambar yang dicetak pada 1:20 memerlukan skala 20.
5. Pada `Pick internal point`, klik di dalam persegi panjang, di luar lingkaran. Hatch tampil sebagai pratinjau.
6. Tekan {{key:Enter}}. Persegi panjang di-hatch; lingkaran di dalamnya tetap kosong, karena ia adalah pulau.

Klik di dalam beberapa area sebelum menekan {{key:Enter}} untuk membuatnya menjadi satu hatch. `U` membatalkan area terakhir.

## Isian solid

1. Ketik `H` lalu tekan {{key:Enter}}.
2. Ketik `P`, tekan {{key:Enter}}, ketik `SOLID` lalu tekan {{key:Enter}}.
3. Klik di dalam lingkaran, lalu tekan {{key:Enter}}.

## Hatch bentuk tertutup yang Anda pilih

Alih-alih mengklik di dalam, ketik `S` (Pilih objek) pada `Pick internal point` dan pilih polyline tertutup, lingkaran, atau elips tertutup, lalu tekan {{key:Enter}}. Bentuk di dalam bentuk lain dibiarkan kosong secara bergantian (yang terluar di-hatch, yang berikutnya kosong, dan seterusnya).

## Pola

Ketik `?` pada pertanyaan pola untuk melihat daftarnya. Pola standarnya adalah ANSI31 sampai ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS dan EARTH, serta SOLID. Pada gambar dalam inci (atau dengan kaki dan inci sebagai format panjangnya), ukuran inci dari pola dipakai, seperti di AutoCAD; jika tidak, ukuran milimeter.

{{ui:Sudut}} (`A`) memutar seluruh pola: ANSI31 pada 90° miring ke arah sebaliknya.

**File pola.** Ketik `F` (File pola) pada `Pick internal point` dan pilih file `.pat`. Pola di dalamnya bergabung ke daftar; jika ada lebih dari satu, Anda ditanya mana yang dipakai. File tanpa pola yang dapat dibaca CadCraft akan disebutkan, dan setiap pola yang dilewati dihitung. Ukuran di file `.pat` tidak memiliki satuan sendiri, sehingga dibaca dalam satuan gambar. Hanya file yang ditulis dengan format `.pat` yang biasa yang sudah dicoba; belum ada yang dibuat program lain.

## Mengubah hatch

Pilih hatch (klik salah satu garisnya). Di {{ui:Properti}}: {{ui:Pola}}, {{ui:Skala pola}} dan {{ui:Sudut pola}}. Hatch dari gambar yang dibuka menampilkan polanya jika termasuk pola standar; yang lain tampil sebagai nada terang dari warnanya.

## Kesalahan umum

- **"No closed boundary round that point."** Ada celah di garis luar, atau sebagiannya berada di luar layar: CadCraft hanya melihat apa yang ada di layar. Tutup celahnya (perbesar di sudut-sudutnya), atau perkecil tampilan.
- **"The pattern is too dense to draw at this scale."** Garisnya akan lebih rapat daripada yang dapat ditampilkan gambar. Gunakan skala yang lebih besar: coba skala cetak (20 untuk 1:20).
- **Pola tampak sangat besar atau sangat kecil.** Skala adalah satuan gambar per satuan pola; lihat langkah 4 di atas.
- **Hatch berhenti mengikuti garis luarnya.** Hatch yang dibuat dengan {{cmd:HATCH}} tetap bersama objek tempat ia dibuat: pindahkan, putar, atau skalakan garis luarnya dan hatch ikut; bentuk ulang dengan grip dan hatch dihitung ulang. Tautannya berakhir saat garis luar tidak lagi tertutup, saat Anda membentuk ulang hatch itu sendiri dengan tangan, atau saat Anda memangkasnya, dan baris perintah menyebutkannya. Tidak ada yang hilang: hatch area itu lagi untuk menautkannya kembali.

## Hatch yang tetap bersama batasnya

Hatch yang Anda buat dengan `HATCH` mengingat apa yang membatasinya. Pindahkan, putar, atau skalakan batasnya dan hatch serta polanya ikut. Seret grip untuk membentuk ulang batas dan hatch dihitung ulang. Pindahkan hatch sendiri dan batasnya ikut, seperti bentuk berisi di program gambar.

Tautan berakhir, dan baris perintah menyebutkannya, jika batas tidak lagi tertutup atau Anda membentuk ulang hatch dengan tangan. Hatch itu sendiri tetap ada. Ketik `AS` saat hatching untuk membuat hatch yang berdiri sendiri. Menyalin hatch beserta batasnya menghasilkan salinan dengan tautannya sendiri.

`HATCHEDIT` (`HE`) mengubah pola, skala, sudut dan titik asal hatch, dan menautkannya ke batas atau mengakhiri tautan. Tautan disimpan di file DWG dan DXF 2000. File DXF R12 tidak memiliki objek hatch, dan tautan yang dibuat di program lain tidak dibaca: gunakan `HATCHEDIT` dan Tautkan untuk itu.

Hatch yang tidak punya batas lagi (batasnya dihapus, atau file datang tanpa batas) dapat diberi batas kembali: `HATCHGENERATEBOUNDARY` (`HGB`) menggambar polyline tertutup di sekeliling setiap loop hatch dan, jika Anda menjawab Ya, menautkan hatch ke sana.

## Isian gradasi

`GRADIENT` (`GD`) mengisi area dengan gradasi alih-alih pola: pilihan yang sama dengan `HATCH`, setelah ia menanyakan jenis (linear, silinder, bola, setengah bola, melengkung, dan masing-masing dibalik), satu warna dengan tint atau dua warna, sudut, dan terpusat atau tidak. Di `HATCH`, opsi `G` melakukan hal yang sama. `HATCHEDIT` `G`, atau {{ui:Properti}} di bawah Gradasi, mengubah gradasi atau mengubah hatch mana pun menjadi gradasi.

Gradasi tampil di layar dan di plot. Simpan sebagai DWG 2004 atau lebih baru dan program lain mendapat hatch gradasi yang sebenarnya. DXF 2000 dan DWG 2000 tidak memiliki gradasi: di sana CadCraft menyimpannya untuk dirinya sendiri, dan program lain melihat isian solid dengan warna pertama.

## Memangkas hatch

`TRIM` memotong hatch seperti objek lain. Klik hatch di sisi tepi potong yang ingin dihilangkan: tepi-tepi itu membagi area yang di-hatch dan potongan itu dibuang. Dalam mode Cepat setiap objek adalah tepi potong; pilih tepinya dahulu (opsi `T`) jika banyak. Hatch yang sudah dipangkas tidak lagi tertautkan ke batasnya, karena ia tidak lagi mengisi batas itu.
