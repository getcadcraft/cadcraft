---
title: Bermula dengan CadCraft
summary: Apa yang dilakukan oleh aplikasi lukisan CadCraft, di mana ia berjalan, dan lukisan pertama anda daripada skrin kosong hingga fail yang disimpan.
keywords: mula, lukisan pertama, baharu, buka, simpan, simpan sebagai, bermula, tutorial, pengenalan, mula pantas
from: 1a56c575
---

CadCraft ialah aplikasi lukisan 2D. Anda melukis dan menyunting garisan, lengkok, polygaris, teks, dimensi dan blok, menyediakan helaian dengan blok tajuk dan viewport, dan memplotnya ke PDF. Ia membuka lukisan DWG dan DXF dan menyimpannya sebagai DWG atau DXF.

Ia berjalan dalam pelayar web anda. Tiada apa yang perlu dipasang: laman itu memberi anda alamatnya, dan keseluruhan aplikasi dimuatkan ke dalam halaman. Lukisan anda dibuka dari komputer anda sendiri dan disimpan kembali ke sana. **Tiada apa yang dimuat naik.**

Jika anda pernah melukis sebelum ini, baca [Datang daripada perisian lukisan lain](topic:coming-from) selepas halaman ini. Kebanyakan tabiat anda terbawa, dan beberapa yang tidak terbawa disenaraikan di sana.

## Lebih suka dipandu?

Taip `TOUR` (atau klik {{ui:Ikuti panduan}} pada kad mula, atau {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Ikuti panduan sekali lagi}}). Enam langkah pendek dalam kotak di atas lukisan: lukis garisan dan bulatan, alihkannya, pangkaskannya, padam sesuatu dan dimensikannya. Setiap langkah selesai apabila anda melakukannya, dan anda boleh melangkau satu langkah atau keseluruhan panduan. Ia bermula sendiri hanya kali pertama. [Helaian rujukan pantas](topic:cheat-sheet) mempunyai 40 arahan yang paling kerap anda gunakan, dan [peta arahan](topic:command-map) setiap arahan yang ada.

## Apa yang anda perlukan

- Chrome, Edge, Firefox atau Safari yang terkini pada komputer Mac, Windows atau Linux. Lihat [Pelayar dan platform](common:browsers).
- Tetikus dengan roda paling selesa. Pad jejak berfungsi; lihat [Tetikus, pad jejak dan sentuh](topic:mouse-trackpad-touch).
- Papan kekunci. CadCraft dikendalikan oleh arahan yang ditaip, seperti kebanyakan program lukisan.

## Idea dalam satu perenggan

Anda menaip arahan (atau klik butangnya), dan baris arahan di bawah bertanya soalan satu demi satu: "Tentukan titik pertama", "Tentukan titik seterusnya". Anda menjawab setiap soalan dengan mengklik dalam lukisan atau dengan menaip nilai, kemudian menekan {{key:Enter}}. Menekan {{key:Esc}} membatalkan. Itulah keseluruhan model interaksi; yang lain hanyalah perincian.

## Lukisan pertama anda

Anda akan melukis segi empat tepat 4000 dengan 3000 daripada garisan, meletakkan bulatan di tengah, dan menyimpan fail itu.

1. Buka CadCraft. Baris arahan di bawah menunjukkan `Arahan:` dan kawasan lukisan menunjukkan kad ringkas "Mula lukisan".
2. Taip `L` dan tekan {{key:Enter}}. Anda tidak perlu mengklik baris arahan dahulu: menaip di mana-mana sahaja akan pergi ke sana.
3. Arahan bertukar kepada `Tentukan titik pertama:`. Taip `0,0` dan tekan {{key:Enter}}.
4. Taip `@4000,0` dan tekan {{key:Enter}}. Satu garisan muncul, menghala ke kanan. `@` bermaksud "dari titik terakhir".
5. Taip `@0,3000` dan tekan {{key:Enter}}.
6. Taip `@-4000,0` dan tekan {{key:Enter}}.
7. Taip `C` dan tekan {{key:Enter}}. `C` ialah pilihan Tutup (C): garisan terakhir kembali ke titik pertama dan arahan tamat.
8. Klik {{ui:Lingkungan}} dalam kumpulan Pandangan pada bar alat. Segi empat tepat memenuhi skrin.

Anda kini sepatutnya melihat empat garisan yang membentuk segi empat tepat, dan sejarah di atas baris arahan menyenaraikan apa yang anda taip.

9. Taip `C` dan tekan {{key:Enter}} untuk memulakan arahan bulatan.
10. Taip `2000,1500` dan tekan {{key:Enter}} untuk pusat.
11. Taip `500` dan tekan {{key:Enter}} untuk jejari.

Sebuah bulatan muncul di tengah segi empat tepat.

12. Tekan {{key:Mod+S}}, atau klik {{ui:Simpan}} dalam kumpulan Fail.

Pelayar memuat turun `Drawing1.dwg` ke folder muat turun biasa anda, dan sejarah menyatakan ia menyimpan salinan sebagai DWG. Fail itu dibuka semula dalam CadCraft, dan dalam kebanyakan program CAD lain. (Jika anda telah memilih DXF dalam {{ui:Simpan sebagai}} sebelum ini, dalam pelayar ini, lukisan baharu disimpan sebagai `Drawing1.dxf` sebaliknya.)

:::tip
Tekan {{key:Enter}} pada baris arahan kosong untuk mengulang arahan terakhir. Tekan {{key:Space}} dan bukannya {{key:Enter}} jika anda lebih suka: di luar teks, ia melakukan perkara yang sama.
:::

## Buka lukisan sedia ada

1. Tekan {{key:Mod+O}}, atau klik {{ui:Buka}}.
2. Pilih fail `.dwg` atau `.dxf` dalam pemilih fail.

Anda juga boleh menyeret fail DWG atau DXF dari {{pick:mac=Finder|windows=File Explorer|linux=pengurus fail anda}} dan melepaskannya pada kawasan lukisan. Fail dibaca dalam halaman; ia tidak pernah meninggalkan komputer anda.

Lihat [Fail: apa yang dibuka, apa yang disimpan](topic:files) untuk apa yang dikekalkan dan apa yang ditukar.

## Menyimpan: apa yang diharapkan

Menyimpan dalam pelayar berfungsi berbeza daripada program desktop:

- {{ui:Simpan}} sentiasa **memuat turun salinan baharu**. Ia tidak menulis ganti fail yang anda buka. Jika fail dengan nama yang sama sudah ada dalam folder muat turun anda, pelayar biasanya menambah nombor, seperti `Drawing1 (1).dwg`.
- {{ui:Simpan}} menggunakan format lukisan: DWG jika anda membuka DWG, DXF jika anda membuka DXF. Untuk memilih, tekan {{key:Mod+Shift+S}} atau klik {{ui:Simpan sebagai}}, kemudian pilih {{ui:DWG}} (dan versinya), {{ui:DXF R12}} atau {{ui:DXF 2000}}. Lihat [Menyimpan](topic:files#saving).
- Fail yang anda buka tidak pernah diubah.
- Membuka fail lain, atau {{ui:Baharu}}, meletakkannya dalam tab sendiri di atas lukisan, jadi tiada apa yang anda buka ditutup. Jika anda menutup tab lukisan atau meninggalkan halaman dengan perubahan yang belum disimpan, CadCraft bertanya dahulu: {{ui:Simpan salinan dahulu}}, buang atau {{ui:Batal}}. Menutup tab pelayar sebaliknya menunjukkan soalan "Tinggalkan laman?" milik pelayar.

Simpanan awan belum tersedia lagi. Ke mana fail anda pergi dan mengapa ia kekal persendirian diterangkan dalam [Fail anda dan privasi](common:your-files).

## Ke mana selepas ini

Tekan {{key:F1}} atau klik {{ui:Bantuan}} pada bar di atas untuk membuka bantuan ini di sebelah lukisan pada bila-bila masa. Ia berfungsi tanpa sambungan.

- [Skrin CadCraft](topic:workspace) menamakan setiap bar dan panel.
- [Lukis dengan koordinat](topic:draw-with-coordinates) ialah panduan pertama yang terbaik.
- [Papan kekunci dan tetikus](topic:keyboard) menyenaraikan setiap kekunci.
- Taip `HELP` pada baris arahan untuk senarai setiap arahan, atau baca [Rujukan arahan](topic:commands).
