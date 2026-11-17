---
title: Satuan saat impor: file menyatakan satuannya, atau Anda ditanya dulu
summary: Saat file yang Anda masukkan ke gambar menyatakan satuannya, CadCraft mengonversinya dan memberitahukannya. Saat tidak, CadCraft bertanya sebelum menempatkan apa pun dan mengingat jawaban Anda untuk file itu.
keywords: satuan, impor, sisipkan, xref, lampirkan, XATTACH, INSERT, OBJ, DWG, DXF, awan titik, item pustaka, milimeter, meter, inci, kaki, skala, ukuran salah, terlalu besar, terlalu kecil, 1000 kali, tanya, diingat, INSUNITS
from: 558f1293
---

## Yang akan Anda lakukan

Masukkan file ke gambar dan pastikan file masuk dengan ukuran yang benar.

## Langkah

1. Masukkan file seperti biasa: `INSERT` › File, `XATTACH`, `POINTCLOUDATTACH`, atau {{ui:Files}} di panel Pustaka.
2. Jika file menyatakan satuannya, tidak ada yang ditanyakan. Baris perintah menyebutkan satuan yang dinyatakan file, dan skala yang dipakai bila berbeda dengan gambar.
3. Jika tidak, sebuah dialog menanyakan **Satuan dari** file. Pilih apa yang diwakili satu satuan di file dan klik {{ui:Use these units}}. Tidak ada yang ditempatkan sebelum Anda menjawab.
4. {{ui:Cancel}} (atau {{key:Esc}}) tidak membawa apa pun masuk.

## File mana yang menyatakan satuannya

- **DWG dan DXF**: satuan sisipan gambar (`$INSUNITS`). File tanpa itu akan ditanya.
- **Awan titik**: LAS dan LAZ dengan sistem koordinat, E57, PTX, dan PLY menyatakan satuannya. Lainnya akan ditanya.
- **OBJ**: tidak pernah menyatakan satuan. Anda akan ditanya.
- **glTF dan GLB**: meter, menurut aturan format itu sendiri.
- **Gambar**: tidak memiliki ukuran sendiri. `IMAGEATTACH` menanyakan lebar, dan menawarkan lebar yang Anda berikan untuk file itu sebelumnya.
- **Pindaian**: pindaian yang menyatakan kerapatannya (titik per inci) masuk dengan ukuran sebenarnya dalam satuan gambar; `SCANATTACH` tetap menanyakan lebar.
- **Add-on Awan titik**: menanyakan saat Anda membuat awan yang file-nya tidak menyatakan satuan, dan memberi label angka awan dengan satuan yang dibawanya.

## Yang perlu diketahui

- Membuka DWG atau DXF sebagai gambarnya sendiri tidak menanyakan apa pun: baris perintah menyebutkan satuan yang dinyatakan file, atau bahwa file tidak menyatakan apa pun. Properti mengatur satuan gambar.
- Saat gambar ini juga tidak punya satuan, file tidak bisa dikonversi: file ditempatkan angka demi angka dan baris perintah menyebutkannya.
- Jawaban diingat untuk file itu di komputer ini, di setiap aplikasi CadCraft. Saat file itu masuk lagi, Anda tidak akan ditanya, dan baris perintah menyebutkan bahwa satuan yang diingat dipakai.
- Untuk ditanya lagi: palet perintah ({{key:Mod+K}}) › **Tanyakan lagi satuan untuk file yang diimpor**.
