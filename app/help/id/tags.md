---
title: Tag: atribut yang mengisi jadwal
summary: Definisikan tag (jenisnya, nilai yang boleh diambil, blok yang diterapkan), atur pada referensi blok, dan daftarkan referensi sebagai jadwal yang dapat disimpan sebagai CSV.
keywords: tag, atribut, jadwal, ekstraksi data, properti, peringkat api, daftar pilihan, referensi blok, TAGS, csv
from: 9b90bacc
---

**Tag** adalah atribut blok dengan definisi: jenis nilai yang disimpannya, nilai mana yang diizinkan, dan blok mana yang diterapkan. Nilainya adalah atribut blok biasa, sehingga program lain dapat membacanya dan {{cmd:ATTEDIT}} menampilkannya. Hanya definisinya yang baru, dan definisi itu disimpan dalam gambar.

## Definisikan dan atur

Ketik {{cmd:TAGS}} dan pilih:

- {{ui:Definisikan}}: sebuah nama (huruf, angka, spasi, `_ . -`), sebuah jenis (`text`, `number`, `integer`, `yesno`, `length`, `angle`), nilai yang diizinkan dipisahkan `;` (kosongkan untuk bebas), dan nama blok yang diterapkan (`DOOR*` cocok dengan setiap blok yang dimulai dengan DOOR; kosong berarti setiap blok).
- {{ui:Set}}: dengan referensi blok dipilih, ketik `FireRating=60 min; Width=850`. Nilai di luar daftar yang diizinkan, atau bukan angka untuk tag angka, ditolak dan dinyatakan. Satu langkah urungkan. Blok yang tidak memiliki atribut itu mendapatkannya sebagai atribut tersembunyi.
- {{ui:Jadwal (C)}}: setiap referensi ke blok yang diterapkan tag, secara opsional dikelompokkan menurut tag atau nama blok, dicetak dan disimpan sebagai CSV.
- {{ui:Buang}}: melupakan sebuah definisi; nilainya tetap ada pada referensi.

Mengubah nama tag akan mengubah nama nilainya pada setiap referensi. Nama tag tidak peka huruf besar-kecil, sebagaimana nama atribut.
