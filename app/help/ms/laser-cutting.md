---
title: Hantar lukisan ke laser
summary: Buka panel Laser, pilih apa yang dilakukan setiap lapisan (potong, skor, ukir, isi, gambar), pratonton pergerakan kepala, simpan G-code mod laser GRBL, atau hantarnya dari pelayar selepas membingkaikan kerja.
keywords: laser, pemotong laser, pengukir laser, GRBL, G-code, gcode, ukir, isi, dither, ukiran gambar, skor, potong, Web Serial, bingkaikan kerja, kuasa, kelajuan, laluan, LASER, LASERCUT, CNC
from: 72b56db0
---

Panel {{ui:Laser}} menukar lapisan lukisan kepada program untuk laser yang menjalankan GRBL (kebanyakan pengawal dioda dan CO2 untuk hobi dan kedai kecil). Taip `LASER` (atau `LASERCUT`) dan tekan {{key:Enter}}, atau pilih {{ui:Laser…}} dalam menu {{ui:Lagi}} kumpulan {{ui:Pandangan}}. Dalam gaya reben, ia terdapat dalam menu {{ui:Fail}} dan bersebelahan {{ui:Plot}}. Panel dibuka di atas lukisan dan kekal terbuka semasa anda melukis: pratonton mengikuti setiap perubahan.

:::warning
Uji setiap tetapan pada sisa dahulu, pakai pelindung mata yang sesuai dengan laser anda, tutup penutup jika ada, dan jangan sekali-kali tinggalkan laser yang sedang berjalan tanpa pengawasan. Nombor yang dimulakan oleh sesuatu lapisan ialah pemegang tempat, bukan cadangan untuk mana-mana bahan.
:::

## Apa yang dihantar

Panel membaca model (bukan helaian), pada lapisan yang hidup dan dinyahbeku:

- Garisan, lengkok, bulatan, polygaris (segmen lengkok kekal sebagai lengkok), elips dan splin. Bentuk yang berakhir di tempat ia bermula dikira sebagai tertutup.
- Blok diuraikan: objek pada lapisan 0 dalam blok mengikut lapisan rujukan blok.
- Hatch menghantar sempadannya, jadi logo yang dihatch pada lapisan **Isi bentuk** diisi.
- Gambar (`IMAGEATTACH`) diukir pada lapisan yang ditetapkan kepada **Ukir gambar**, apabila ia terletak tegak (tidak diputar atau condong) dan failnya dibuka dalam CadCraft.
- Teks, dimensi, petunjuk, titik dan garis pembinaan tidak dihantar; panel memberitahu berapa banyak yang ditinggalkan. Untuk membakar teks, lukis huruf sebagai bentuk atau lorekkannya.

Saiz dihantar dalam milimeter daripada unit lukisan (`UNITS`): lukisan dalam inci didarab dengan 25.4. Lukisan tanpa unit ditetapkan dihantar satu unit kepada satu milimeter. Tandakan {{ui:Hanya objek yang dipilih}} untuk menghantar sebahagian daripada lukisan.

## Pilih apa yang dilakukan setiap lapisan

Setiap lapisan yang mempunyai sesuatu di atasnya ialah satu baris. {{ui:Melakukan}} menetapkannya kepada **Potong**, **Skor**, **Ukir garisan**, **Isi bentuk**, **Ukir gambar** atau **Tidak dihantar**, dengan {{ui:Kuasa %}}, {{ui:Kelajuan mm/min}} dan bilangan {{ui:Laluan}}. Setiap perubahan ialah satu langkah buat asal dan disimpan dalam lukisan: DWG (setiap versi yang CadCraft simpan) dan DXF mengekalkan tetapan, jadi lukisan dibuka dengannya pada kali seterusnya. Program lain membuka fail seperti biasa; mereka melihat satu blok tidak digunakan bernama CADCRAFT_LASER (membersihkannya di sana mengeluarkan tetapan).

- **Isi bentuk** membakar bahagian dalam bentuk tertutup dalam garisan, dengan {{ui:Jarak baris}} antara satu sama lain, pada {{ui:Sudut}}, kedua-dua arah atau satu, dengan lebihan imbasan supaya kepala berada pada kelajuan apabila laser dihidupkan; silang-hatch menambah laluan kedua pada 90°. Bentuk dengan lubang kekal terbuka pada lubang itu.
- **Ukir gambar** menukar gambar kepada titik (Floyd–Steinberg, Atkinson, tertib, atau hitam dan putih biasa pada ambang) atau, dengan *Tahap kelabu*, kepada kuasa boleh ubah.
- Susunan: gambar dan isi dahulu, kemudian ukiran garisan, kemudian skor, kemudian potongan, supaya bahagian yang dipotong tidak bergerak semasa diukir. Dalam satu lapisan, laluan berjalan **dari dalam dahulu** (lubang sebelum plat yang mengandunginya), yang terdekat seterusnya.

## Pratonton, kemudian simpan

Pratonton melukis apa yang dilakukan kepala: garisan yang membakar dalam warna, pergerakan pantas dalam kelabu, dan kotak hijau di sekeliling segala yang terbakar. Di bawahnya ialah saiz, panjang pembakaran dan anggaran masa (tanpa pecutan; mesin sebenar mengambil masa lebih lama). {{ui:Simpan G-code…}} menulis G-code mod laser GRBL: `$32=1`, `M4` (atau `M3`) dengan nilai S, pergerakan `G0` dan `G1`, `M5` pada akhir. X0 Y0 ialah sudut kiri bawah kerja melainkan anda memilih asal lukisan: tetapkan sifar kerja mesin anda di sana.

## Hantar dari pelayar

Dalam Chrome dan Edge, {{ui:Sambung…}} meminta anda memilih port USB laser. Tiada apa-apa disambung atau dihantar sehingga anda menekan butang. Tekan {{ui:Bingkaikan kerja}} dahulu: kepala mengesan kotak kerja dengan laser **dimatikan** (atau pada kuasa rendah yang anda tetapkan untuk penunjuk) supaya anda dapat melihat di mana ia akan membakar. Hanya selepas itu {{ui:Hantar kerja}} dihidupkan, dan ia dimatikan semula jika anda mengubah apa-apa. {{ui:Jeda}} menahan kepala, {{ui:Henti}} menahannya, menetapkan semula pengawal (laser dimatikan) dan menghantar `M5`. Apabila Web Serial tiada (Firefox, Safari, dan CadCraft Studio, yang belum mempunyai Web Serial) panel hanya menawarkan simpanan: simpan G-code dan hantarnya dengan program laser anda sendiri.

## Belum dibina

Belum dibina: format pengawal lain (Ruida, laser Marlin, fail vendor), tab dan lead-in, ofset kerf, pustaka bahan, paksi putar dan Z, penjajaran kamera, teks sebagai garis luar.
