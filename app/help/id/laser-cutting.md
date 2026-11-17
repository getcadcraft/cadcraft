---
title: Kirim gambar ke laser
summary: Buka panel Laser, pilih apa yang dilakukan setiap layer (potong, goresan, ukir, isi, gambar), pratinjau gerakan kepala, simpan G-code laser mode GRBL, atau kirim dari peramban setelah membingkai pekerjaan.
keywords: laser, pemotong laser, pengukir laser, GRBL, G-code, gcode, ukir, isi, dither, ukir gambar, goresan, potong, Web Serial, bingkai pekerjaan, daya, kecepatan, lintasan, LASER, LASERCUT, CNC
from: 72b56db0
---

Panel {{ui:Laser}} mengubah layer gambar menjadi program untuk laser yang menjalankan GRBL (kebanyakan pengendali dioda dan CO2 untuk hobi dan bengkel kecil). Ketik `LASER` (atau `LASERCUT`) dan tekan {{key:Enter}}, atau pilih {{ui:Laser…}} di menu {{ui:Lainnya}} pada grup {{ui:Tampilan}}. Dalam gaya pita, panel ini berada di menu {{ui:File}} dan di samping {{ui:Plot}}. Panel terbuka di atas gambar dan tetap terbuka saat Anda menggambar: pratinjau mengikuti setiap perubahan.

:::warning
Uji setiap pengaturan pada sisa bahan terlebih dahulu, kenakan pelindung mata yang sesuai dengan laser Anda, tutup penutupnya jika ada, dan jangan pernah meninggalkan laser yang sedang menyala tanpa pengawasan. Angka awal setiap layer adalah nilai pengganti, bukan rekomendasi untuk bahan apa pun.
:::

## Yang dikirim

Panel membaca model (bukan lembar), pada layer yang aktif dan tidak dibekukan:

- Garis, busur, lingkaran, polyline (segmen busur tetap busur), elips, dan spline. Bentuk yang berakhir di titik awalnya dihitung sebagai tertutup.
- Blok diurai: objek di layer 0 di dalam blok ikut dengan layer dari referensi blok.
- Hatch mengirim batasnya, sehingga logo yang di-hatch pada layer **Isi** akan terisi.
- Gambar (`IMAGEATTACH`) diukir pada layer yang diatur ke **Ukir gambar**, saat ia tegak (tidak diputar atau miring) dan filenya dibuka di CadCraft.
- Teks, dimensi, leader, titik, dan garis konstruksi tidak dikirim; panel memberi tahu berapa banyak yang dilewatkan. Untuk membakar teks, gambar hurufnya sebagai bentuk atau beri hatch.

Ukuran dikirim dalam milimeter dari satuan gambar (`UNITS`): gambar dalam inci dikalikan 25.4. Gambar tanpa satuan diatur dikirim satu satuan ke satu milimeter. Centang {{ui:Hanya objek yang dipilih}} untuk mengirim sebagian gambar.

## Pilih apa yang dilakukan setiap layer

Setiap layer yang memiliki sesuatu di dalamnya adalah sebuah baris. {{ui:Fungsi}} mengatur layer ke **Potong**, **Goreskan**, **Ukir garis**, **Isi bentuk**, **Ukir gambar**, atau **Tidak dikirim**, dengan {{ui:Daya %}}, {{ui:Kecepatan mm/min}}, dan jumlah {{ui:Lintasan}}. Setiap perubahan adalah satu langkah urungkan dan disimpan dalam gambar: DWG (setiap versi yang disimpan CadCraft) dan DXF menyimpan pengaturannya, sehingga gambar terbuka dengan pengaturan yang sama lain kali. Program lain membuka file seperti biasa; mereka melihat satu blok yang tidak dipakai bernama CADCRAFT_LASER (membersihkannya di sana akan menghapus pengaturan).

- **Isi** membakar bagian dalam bentuk tertutup dengan garis, berjarak {{ui:Spasi baris}}, pada {{ui:Sudut}}, ke dua arah atau satu arah, dengan overscan agar kepala sudah berkecepatan penuh saat laser menyala; cross-hatch menambahkan lintasan kedua pada 90°. Bentuk yang berlubang tetap terbuka di lubang tersebut.
- **Ukir gambar** mengubah gambar menjadi titik-titik (Floyd–Steinberg, Atkinson, terurut, atau hitam putih biasa pada ambang batas) atau, dengan *Tingkat abu-abu*, menjadi daya yang bervariasi.
- Urutannya: gambar dan isian dahulu, lalu ukiran garis, lalu goresan, lalu potongan, sehingga bagian yang dipotong tidak bergerak saat diukir. Dalam satu layer, jalur berjalan **dari dalam ke luar** (lubang sebelum pelat tempatnya berada), yang terdekat berikutnya.

## Pratinjau, lalu simpan

Pratinjau menggambarkan apa yang dilakukan kepala: garis yang dibakar dalam warna, gerakan cepat dalam abu-abu, dan kotak hijau di sekeliling semua yang dibakar. Di bawahnya ada ukuran, panjang pembakaran, dan perkiraan waktu (tanpa akselerasi; mesin sungguhan membutuhkan waktu lebih lama). {{ui:Simpan G-code…}} menulis G-code laser mode GRBL: `$32=1`, `M4` (atau `M3`) dengan nilai S, gerakan `G0` dan `G1`, dan `M5` di akhir. X0 Y0 adalah sudut kiri bawah pekerjaan kecuali Anda memilih titik asal gambar: atur nol kerja mesin Anda di sana.

## Kirim dari peramban

Di Chrome dan Edge, {{ui:Hubungkan…}} meminta Anda memilih port USB laser. Tidak ada yang tersambung atau terkirim sampai Anda menekan sebuah tombol. Tekan {{ui:Telusuri bingkai pekerjaan}} terlebih dahulu: kepala menelusuri kotak pekerjaan dengan laser **mati** (atau pada daya rendah yang Anda atur untuk penunjuk) sehingga Anda dapat melihat di mana ia akan membakar. Barulah {{ui:Kirim pekerjaan}} aktif, dan ia mati lagi jika Anda mengubah sesuatu. {{ui:Jeda}} menahan kepala, {{ui:Berhenti}} juga menahannya, mengatur ulang pengendali (laser mati), dan mengirim `M5`. Jika Web Serial tidak tersedia (Firefox, Safari, dan CadCraft Studio, yang belum memiliki Web Serial), panel hanya menawarkan penyimpanan: simpan G-code dan kirim dengan program bawaan laser Anda.

## Belum dibuat

Belum dibuat: format pengendali lain (Ruida, laser Marlin, file vendor), tab dan lead-in, offset kerf, pustaka bahan, sumbu rotary dan Z, penyelarasan kamera, teks sebagai kontur.
