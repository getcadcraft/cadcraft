---
title: Daftar material per zona
summary: Tandai area gambar sebagai zona dan tempatkan tabel untuk setiap zona yang menghitung blok di dalamnya. Tabel mengikuti gambar saat Anda bekerja, dan Anda memilih kolom yang ditampilkan masing-masing.
keywords: daftar material, BOM, daftar bagian, jadwal, zona, area, tabel, hitung, atribut, kolom, nomor item, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zona** adalah area bernama pada gambar. **Tabel daftar material** mencantumkan apa yang berada di dalam satu zona, atau di seluruh gambar: setiap blok beserta jumlah dan nilai atributnya. Sebuah gambar dapat memiliki zona dan tabel sebanyak yang Anda butuhkan, dan satu zona dapat memiliki beberapa tabel dengan kolom yang berbeda.

Alat-alatnya ada di tab Blok di bawah {{ui:Daftar material}}, di menu Lainnya grup Blok, dan dapat diketik.

## Buat zona

Ketik {{cmd:BOMZONE}} lalu salah satu:

- klik dua sudut yang berseberangan untuk persegi panjang,
- pilih {{ui:Poligon}}, klik setiap sudut dan tekan Enter untuk menutupnya, atau
- pilih {{ui:Objek}} dan pilih polyline tertutup, lingkaran, elips atau spline tertutup. Garis tepinya disalin; objeknya tetap seperti semula.

Kemudian ketik nama zona. Zona digambar sebagai garis tepi putus-putus dengan namanya di atas sudut kiri atas, pada layer `BOM-ZONES`, yang tidak diplot. Aktifkan plot untuk layer itu jika Anda ingin zona tercetak di kertas.

Zona adalah polyline tertutup biasa: pindahkan, regangkan, atau seret grip-nya, dan namanya mengikuti. Untuk mengganti nama zona, edit teks namanya, atau gunakan {{cmd:BOMZONE}} dan {{ui:Ganti nama}}. {{ui:Zona}} mencantumkan setiap zona dan berapa banyak tabelnya.

## Tempatkan tabel

Ketik {{cmd:BOMTABLE}} (atau {{cmd:BOM}}), pilih garis tepi zona atau namanya, berikan tinggi teks dan klik tempat sudut kiri atas tabel akan berada. Tekan Enter alih-alih memilih zona, atau pilih {{ui:Seluruh}}, untuk tabel seluruh gambar.

Tabel baru menampilkan nomor item, jumlah, nama blok dan satu kolom untuk setiap atribut yang dimiliki blok (enam pertama; yang lain ditawarkan tanpa dicentang). Blok dengan nama dan nilai atribut yang sama berbagi satu baris.

## Apa yang dihitung sebagai di dalam

- Sebuah blok dihitung di zona yang memuat **titik sisip**-nya.
- Garis, busur, lingkaran, polyline, elips, spline atau hatch dihitung **utuh** di zona yang memuat tengah batasnya (untuk garis, titik tengahnya). Panjangnya tidak dipotong di tepi zona.
- Titik tepat di tepi berada di dalam.
- Zona boleh saling tumpang tindih. Setiap zona dihitung untuk dirinya sendiri, sehingga objek di area tumpang tindih berada di kedua tabel.

## Tabel mengikuti gambar

Saat Anda menambah, memindahkan, menyalin atau menghapus blok, mengedit atribut, atau membentuk ulang atau memindahkan zona, setiap tabel digambar ulang dalam langkah yang sama. Urungkan membatalkan edit Anda dan perubahan tabel sekaligus.

Untuk menghentikan tabel agar tidak mengikuti, centang {{ui:Beku}} di pengaturannya. Tabel yang dibekukan hanya berubah saat Anda mengedit pengaturannya atau mengetik {{cmd:BOMUPDATE}}, yang memperbarui setiap tabel sekarang.

## Pilih kolom

Pilih tabel dan ketik {{cmd:BOMEDIT}}. Di dialog:

- **Kolom**: centang yang akan ditampilkan (item, jumlah, nama, layer, panjang, luas, keterangan dan setiap atribut), ketik judul sendiri untuk salah satunya, dan pindahkan ke atas atau ke bawah.
- {{ui:Kelompokkan baris berdasarkan}}: nama blok dan nilai atribut, hanya nama blok, layer, atau satu atribut. Pada baris gabungan, nilai yang berbeda antar blok tertulis "bervariasi".
- {{ui:Urutkan berdasarkan}} kolom mana pun, naik atau turun.
- {{ui:Judul}}, {{ui:Tampilkan judul}} dan {{ui:Baris total}}.
- {{ui:Hitung garis per layer}} menambahkan satu baris per layer dengan jumlah objek, total panjangnya dan, untuk bentuk tertutup, total luasnya, dalam satuan gambar.
- **Keterangan**: centang kolom Keterangan, lalu ketik keterangan untuk baris mana pun dalam tabel di bagian bawah dialog.

Setiap tabel menyimpan pilihannya sendiri.

## Nomor item

Sebuah baris mempertahankan nomor itemnya selama berada di tabel. Baris baru mengambil nomor kosong berikutnya, dan nomor yang telah diberikan tidak akan digunakan lagi, sehingga balon dan catatan yang mengutip nomor tetap benar. {{ui:Beri ulang nomor item}} memberi nomor mulai dari 1 sesuai urutan yang ditampilkan.

Sebuah baris dikenali dari apa yang dikelompokkannya: ubah cara baris dikelompokkan, atau ubah nilai atribut yang digunakan pengelompokan, dan baris dihitung sebagai baris baru.

## Ekspor dan program lain

{{cmd:BOMEXPORT}}, atau {{ui:Ekspor CSV}} di dialog, menyimpan tabel sebagai file .csv untuk lembar kerja.

Dalam file DWG atau DXF, tabel adalah blok garis dan teks biasa, sehingga program lain menampilkan dan mencetaknya seperti yang digambar. Di sana itu bukan objek tabel, dan tidak diperbarui di program lain. Tautan ke zonanya disimpan dalam file sebagai data ekstensi yang dibaca kembali oleh CadCraft, sehingga tabel kembali aktif saat Anda membuka ulang gambar di CadCraft. DXF R12 dari gambar tanpa lembar tidak menyimpan pengaturan "tidak diplot" pada layer zona.

Menguraikan tabel mengubahnya menjadi garis dan teks lepas dan mengakhiri tautan.
