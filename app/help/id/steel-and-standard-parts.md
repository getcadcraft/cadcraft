---
title: Pasang profil baja dan suku cadang standar
summary: Gambar profil baja, elevasi, dan batang 3D dari tabel profil yang dipublikasikan, pasang baut, mur, ring, pin, bantalan, pasak, dan roda gigi dari standarnya, lalu daftarkan dalam daftar part.
keywords: baja, profil, bentuk, W, flensa lebar, balok-I, kanal, siku, hss, tabung, pipa, ipe, hea, heb, upn, balok, kolom, batang, elevasi, aisc, en 10365, baut, sekrup, mur, ring, pin, pasak, bantalan, kunci, alur pasak, roda gigi, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, suku cadang standar, daftar part, daftar material, BOM, steelmember, partslist
from: 547c1048
---

Tab {{ui:Standar}} di pustaka memiliki dua jenis barang, dibuat langsung di sini dari tabel yang dipublikasikan (tidak ada yang diunduh):

- **Profil baja**: 1,335 ukuran. W, S, C, L, HSS dan Pipe dari AISC Shapes Database v16.0; IPE, HEA, HEB dan UPN dari EN 10365:2017. DetailCraft menggunakan tabel yang sama.
- **Suku cadang standar**: sekrup kepala segi enam (ISO 4017), baut kepala segi enam (ISO 4014), mur segi enam (ISO 4032), ring polos (ISO 7089), baut dan mur segi enam inci (ASME B18.2.1 dan B18.2.2), pin paralel (ISO 2338), bantalan bola alur dalam (ISO 15), pasak paralel (DIN 6885-1), dan roda gigi lurus (modul dari ISO 54).

Semuanya di sini dibagikan di bawah CC0: gunakan untuk apa saja, tanpa perlu kredit.

## Tempatkan profil baja

1. Buka pustaka ({{ui:Pustaka}} di grup Blok, atau ketik `LIB`) dan klik tab {{ui:Standar}}.
2. Pilih famili di daftar pertama, misalnya {{ui:Profil W}}. Ketik di kotak pencarian untuk mempersempit ukuran: `W12` menampilkan setiap W12.
3. Di {{ui:Tempatkan sebagai}}, pilih:
   - {{ui:Potongan}}: penampang melintang, dengan pusatnya di titik sisipan.
   - {{ui:Elevasi}}: batang dilihat dari samping, sepanjang {{ui:Panjang (mm)}}, dari titik tengah ujung kirinya.
   - {{ui:Batang 3D}}: sebuah solid pada tab 3D (di bawah).
4. Klik {{ui:Tempatkan}} pada kartu ukuran, lalu klik tempat ia akan diletakkan, seperti untuk barang pustaka lainnya.

Potongan atau elevasi menjadi blok. Atributnya memuat ukuran, tabel asalnya, panjang (untuk elevasi), dan material yang dapat Anda isi.

:::note
Profil S, kanal, dan UPN digambar dengan flensa sejajar dari ketebalan rata-rata, dan siku dengan sudut persegi: flensa aslinya miring dan sudutnya dibulatkan. W, IPE, HEA dan HEB memiliki fillet akar, dan HSS memiliki jari-jari sudut.
:::

## Buat batang 3D

Pilih {{ui:Batang 3D}} dan klik {{ui:Tempatkan}}, atau ketik {{cmd:STEELMEMBER}} (`SMEMBER`) di baris perintah:

1. Pada `Ukuran penampang`, tekan {{key:Enter}} untuk ukuran yang ditampilkan, atau ketik satu, misalnya `HSS6x6x1/4` atau `IPE300`.
2. Klik titik awal, lalu titik akhir. Batang membentang di antara keduanya, berdiri di atas tanah.
3. Untuk kolom, ketik `C`, klik titik dasarnya, dan ketik tingginya.

Batang adalah solid tertutup pada tab 3D. Pindahkan atau salin seperti solid lainnya di sana. {{key:Mod+Z}} menghapusnya kembali.

## Pasang suku cadang standar

1. Pada tab {{ui:Standar}}, pilih famili, misalnya {{ui:Sekrup kepala segi enam}}.
2. Untuk sekrup, baut, pin, atau pasak, ketik {{ui:Panjang (mm)}} (inci untuk famili inci). Untuk roda gigi, ketik {{ui:Gigi}}, {{ui:Lebar muka (mm)}}, dan {{ui:Lubang poros (mm)}}. Biarkan kotak kosong untuk nilai umum yang ditampilkan di dalamnya.
3. Klik {{ui:Tempatkan}} pada ukuran, lalu klik tempat ia akan diletakkan.

Sekrup, baut, dan pin digambar dari samping dengan permukaan dudukan kepalanya di titik sisipan; mur, ring, bantalan, dan roda gigi digambar menghadap depan; pasak digambar dari atas. Ulir digambar seperti biasa: akar sebagai garis tipis, ujung ulir sebagai garis tebal. Roda gigi digambar sebagai lingkaran puncak, lingkaran jarak bagi, dan lingkaran akar, bukan gigi demi gigi.

Blok setiap part membawa tipe, standar, ukuran, panjang, dan material sebagai atribut, serta beratnya dari bentuk nominal dalam baja. Ubah material di panel {{ui:Properti}}.

Bagian yang sama juga ada di Pustaka sebagai barang, dan PartCraft membukanya sebagai part parametrik ({{ui:Suku cadang standar}} di grup File-nya).

## Buat daftar part

- Di pustaka, klik {{ui:Daftar part}}: setiap suku cadang standar dan profil baja di gambar, dikelompokkan menurut tipe, standar, ukuran, panjang, dan material, dengan jumlah dan nomor itemnya. {{ui:Unduh CSV}} menyimpannya untuk spreadsheet.
- Untuk menggambarnya, ketik {{cmd:PARTSLIST}} (`PLIST`), klik sudut kiri atas tabel, lalu tekan {{key:Enter}} untuk tinggi teks yang biasa atau ketik satu.

Daftar dibaca dari atribut blok, sehingga tetap benar setelah gambar disimpan sebagai DWG atau DXF dan dibuka kembali.

## Kesalahan umum

- **"Tidak ada profil baja bernama …"**: ketik ukuran seperti yang tercantum di tab {{ui:Standar}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Batang ada di tab 3D, bukan di denah.** {{cmd:STEELMEMBER}} membuat solid; buka tab 3D untuk melihatnya. Untuk menampilkan baja di denah, tempatkan juga {{ui:Potongan}} atau {{ui:Elevasi}}.
- **Panjang di luar rentang.** Baut harus lebih panjang dari kepalanya, dan pasak harus lebih panjang dari lebarnya. Garis di bawah kartu menyatakan nilai mana yang ditolak.
