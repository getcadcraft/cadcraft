---
title: Memulai CadCraft
summary: Apa yang dilakukan aplikasi gambar CadCraft, di mana aplikasi ini berjalan, dan gambar pertama Anda dari layar kosong sampai file tersimpan.
keywords: mulai, gambar pertama, baru, buka, simpan, simpan sebagai, awal, tutorial, pengantar, panduan cepat
from: 1a56c575
---

CadCraft adalah aplikasi gambar 2D. Anda menggambar dan mengedit garis, busur, polyline, teks, dimensi, dan blok, menyiapkan lembar dengan kepala gambar dan viewport, lalu mem-plot-nya ke PDF. CadCraft membuka gambar DWG dan DXF serta menyimpannya sebagai DWG atau DXF.

CadCraft berjalan di peramban web Anda. Tidak ada yang perlu dipasang: situs memberi Anda alamatnya, dan seluruh aplikasi dimuat ke dalam halaman. Gambar Anda dibuka dari komputer Anda sendiri dan disimpan kembali ke sana. **Tidak ada yang diunggah.**

Jika Anda pernah menggambar sebelumnya, baca [Jika Anda berasal dari perangkat lunak gambar lain](topic:coming-from) setelah halaman ini. Sebagian besar kebiasaan tetap berlaku, dan sedikit yang tidak tercantum di sana.

## Lebih suka dipandu?

Ketik `TOUR` (atau klik {{ui:Ikuti tur}} pada kartu awal, atau {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Ikuti tur lagi}}). Enam langkah singkat dalam kotak di atas gambar: menggambar garis dan lingkaran, memindahkannya, memangkasnya, menghapus sesuatu, dan memberinya dimensi. Setiap langkah selesai saat Anda melakukannya, dan Anda dapat melewati satu langkah atau seluruh tur. Tur dimulai sendiri hanya pada kali pertama. [Lembar contekan](topic:cheat-sheet) memuat 40 perintah yang paling sering Anda pakai, dan [peta perintah](topic:command-map) memuat setiap perintah yang ada.

## Yang Anda perlukan

- Chrome, Edge, Firefox, atau Safari versi terbaru pada komputer Mac, Windows, atau Linux. Lihat [Peramban dan platform](common:browsers).
- Mouse dengan roda adalah yang paling nyaman. Trackpad juga bisa; lihat [Mouse, trackpad, dan sentuh](topic:mouse-trackpad-touch).
- Keyboard. CadCraft digerakkan oleh perintah yang diketik, seperti kebanyakan program gambar.

## Gagasannya dalam satu paragraf

Anda mengetik perintah (atau mengklik tombolnya), dan baris perintah di bagian bawah mengajukan pertanyaan satu per satu: "Tentukan titik pertama", "Tentukan titik berikutnya". Anda menjawab setiap pertanyaan dengan mengklik di gambar atau mengetik nilai, lalu menekan {{key:Enter}}. Menekan {{key:Esc}} membatalkan. Itulah seluruh model interaksinya; selebihnya hanya rincian.

## Gambar pertama Anda

Anda akan menggambar persegi panjang 4000 kali 3000 dari garis, menaruh lingkaran di tengahnya, dan menyimpan file.

1. Buka CadCraft. Baris perintah di bagian bawah menampilkan `Command:` dan area gambar menampilkan kartu singkat "Mulai menggambar".
2. Ketik `L` lalu tekan {{key:Enter}}. Anda tidak perlu mengklik baris perintah dahulu: mengetik di mana saja masuk ke sana.
3. Prompt berubah menjadi `Specify first point:`. Ketik `0,0` lalu tekan {{key:Enter}}.
4. Ketik `@4000,0` lalu tekan {{key:Enter}}. Sebuah garis muncul, berjalan ke kanan. Tanda `@` berarti "dari titik terakhir".
5. Ketik `@0,3000` lalu tekan {{key:Enter}}.
6. Ketik `@-4000,0` lalu tekan {{key:Enter}}.
7. Ketik `C` lalu tekan {{key:Enter}}. `C` adalah opsi Close: garis terakhir kembali ke titik pertama dan perintah berakhir.
8. Klik {{ui:Batas}} di grup Tampilan pada bilah alat. Persegi panjang memenuhi layar.

Sekarang Anda akan melihat empat garis yang membentuk persegi panjang, dan riwayat di atas baris perintah mencantumkan apa yang Anda ketik.

9. Ketik `C` lalu tekan {{key:Enter}} untuk memulai perintah lingkaran.
10. Ketik `2000,1500` lalu tekan {{key:Enter}} untuk pusatnya.
11. Ketik `500` lalu tekan {{key:Enter}} untuk radius.

Sebuah lingkaran muncul di tengah persegi panjang.

12. Tekan {{key:Mod+S}}, atau klik {{ui:Simpan}} di grup File.

Peramban mengunduh `Drawing1.dwg` ke folder unduhan Anda yang biasa, dan riwayat menyatakan salinan disimpan sebagai DWG. File itu terbuka lagi di CadCraft, dan di sebagian besar program CAD lain. (Jika sebelumnya, di peramban ini, Anda memilih DXF di {{ui:Simpan sebagai}}, gambar baru disimpan sebagai `Drawing1.dxf`.)

:::tip
Tekan {{key:Enter}} pada baris perintah kosong untuk mengulang perintah terakhir. Tekan {{key:Space}} sebagai ganti {{key:Enter}} jika Anda lebih suka: di luar teks, hasilnya sama.
:::

## Membuka gambar yang sudah ada

1. Tekan {{key:Mod+O}}, atau klik {{ui:Buka}}.
2. Pilih file `.dwg` atau `.dxf` di pemilih file.

Anda juga dapat menyeret file DWG atau DXF dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} dan meletakkannya di area gambar. File dibaca di dalam halaman; file tidak pernah meninggalkan komputer Anda.

Lihat [File: apa yang dibuka, apa yang disimpan](topic:files) untuk apa yang dipertahankan dan apa yang dikonversi.

## Menyimpan: apa yang diharapkan

Menyimpan di peramban berbeda dari program desktop:

- {{ui:Simpan}} selalu **mengunduh salinan baru**. Simpan tidak menimpa file yang Anda buka. Jika file dengan nama yang sama sudah ada di folder unduhan, peramban biasanya menambahkan angka, seperti `Drawing1 (1).dwg`.
- {{ui:Simpan}} memakai format gambar: DWG jika Anda membuka DWG, DXF jika Anda membuka DXF. Untuk memilih, tekan {{key:Mod+Shift+S}} atau klik {{ui:Simpan sebagai}}, lalu pilih {{ui:DWG}} (dan versinya), {{ui:DXF R12}}, atau {{ui:DXF 2000}}. Lihat [Menyimpan](topic:files#saving).
- File yang Anda buka tidak pernah diubah.
- Membuka file lain, atau {{ui:Baru}}, menempatkannya di tab tersendiri di atas gambar, sehingga tidak ada yang terbuka yang ditutup. Jika Anda menutup tab gambar atau meninggalkan halaman dengan perubahan yang belum disimpan, CadCraft bertanya dahulu: {{ui:Simpan salinan dahulu}}, buang, atau {{ui:Batal}}. Menutup tab peramban menampilkan pertanyaan "Tinggalkan situs?" milik peramban sendiri.

Penyimpanan cloud belum tersedia. Ke mana file Anda pergi dan mengapa tetap pribadi dijelaskan di [File dan privasi Anda](common:your-files).

## Langkah selanjutnya

Tekan {{key:F1}} atau klik {{ui:Bantuan}} di bilah atas untuk membuka bantuan ini di samping gambar kapan saja. Bantuan berfungsi tanpa koneksi.

- [Layar CadCraft](topic:workspace) menyebutkan setiap bilah dan panel.
- [Menggambar dengan koordinat](topic:draw-with-coordinates) adalah panduan pertama terbaik.
- [Keyboard dan mouse](topic:keyboard) mencantumkan setiap tombol.
- Ketik `HELP` pada baris perintah untuk daftar setiap perintah, atau baca [Referensi perintah](topic:commands).
