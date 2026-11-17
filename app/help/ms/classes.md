---
title: Susun lukisan dengan kelas
summary: Kelas menyusun objek dengan cara kedua, merentasi lapisan (Lighting-Fixtures-Spot): tunjuk dan sembunyikannya, berikan warna, jenis garisan, ketebalan garisan, isian dan gaya teks yang objek boleh ambil "mengikut kelas", dan tetapkan kelas tempat objek baharu masuk.
keywords: kelas, kelas, CLASSES, CLS, CLASS, mengikut kelas, ByClass, kelas aktif, guna semasa mencipta, None, lapisan reka bentuk, skala lapisan, dongakan, Vectorworks
from: 672de9cb
---

Lapisan menyatakan *di mana* objek tergolong dalam lukisan; kelas menyatakan *apa* ia. Dinding pada lapisan `Level 1` boleh berada dalam kelas `Walls-Exterior`, dan lampu tempat pada lapisan `Ceiling` dalam kelas `Lighting-Fixtures-Spot`. Anda boleh menyembunyikan setiap lampu pada setiap lapisan sekaligus, atau mencetak setiap dinding luar lebih tebal, tanpa memindahkan apa-apa antara lapisan.

Setiap objek bermula dalam kelas **None**. Lukisan tanpa kelasnya sendiri berfungsi sama seperti sebelum ini.

## Buka panel Kelas

Taip `CLASSES` (atau `CLS`) dan tekan {{key:Enter}}, atau pilih {{ui:Kelas…}} dalam menu {{ui:Lagi}} bagi kumpulan {{ui:Pandangan}}. Panel dibuka di atas lukisan dan kekal terbuka semasa anda melukis.

- **Tambah kelas:** taip namanya dalam kotak di bahagian atas dan tekan {{key:Enter}}. `-` mencipta aras: `Lighting-Fixtures-Spot` terletak di bawah `Lighting-Fixtures`, yang terletak di bawah `Lighting`; aras yang tiada ditambah untuk anda.
- **Tunjuk atau sembunyi:** ikon mata di sebelah kelas. Menyembunyikan kelas menyembunyikan setiap kelas di bawahnya, pada skrin dan pada kertas.
- **Kelas aktif:** butang bulat. Objek baharu yang anda lukis masuk ke dalam kelas aktif.
- **Pilih kelas:** klik namanya. Butang dan tetapan di bawah senarai kemudian bekerja ke atasnya.

Nombor di hujung setiap baris ialah bilangan objek dalam kelas itu (dalam model, pada helaian dan dalam takrif blok).

## Letakkan objek dalam kelas

Pilih objek, pilih kelas dalam panel dan pilih {{ui:Tetapkan kelas}}. Tandakan {{ui:Mengikut kelas}} dahulu supaya ia mengambil warna, jenis garisan, ketebalan garisan, isian dan gaya teks daripada kelas. Anda juga boleh:

- taip `CLASS` dengan objek dipilih dan masukkan nama kelas (nama baharu mencipta kelas);
- taip `CLASS` tanpa apa-apa dipilih untuk menetapkan kelas aktif; `?` menyenaraikan kelas dengan kiraannya;
- gunakan bahagian {{ui:Kelas}} dalam panel Sifat: kelas, dan suis {{ui:… mengikut kelas}} untuk warna, jenis garisan dan ketebalan garisan (isian bagi hatch, gaya teks bagi teks);
- pilih mengikut kelas dengan `QSELECT`: pilih sifat {{ui:Kelas}}.

{{ui:Pilih objeknya}} memilih setiap objek bagi kelas yang dipilih pada helaian yang terbuka (atau dalam model).

## Cara objek dilukis: objek, kelas, lapisan

Warna, jenis garisan, ketebalan garisan, isian dan gaya teks objek boleh **mengikut kelas**, sama seperti ia boleh mengikut lapisan. CadCraft melihat dalam susunan ini:

1. Nilai objek itu sendiri, melainkan nilai itu mengikut kelas.
2. Nilai kelas, apabila objek mengambilnya mengikut kelas dan kelas itu mempunyai nilai tersebut.
3. Nilai lapisan.

Kelas yang warnanya (atau jenis garisan …) ialah {{ui:Tidak ditetapkan}} memberikan objek itu kepada lapisannya. Pilih kelas dan tetapkan {{ui:Warna}}, {{ui:Jenis garisan}}, {{ui:Ketebalan garisan}}, {{ui:Isian (hatch)}} dan {{ui:Gaya teks}} di bawah butang. Tandakan {{ui:Guna semasa mencipta}} untuk menjadikan objek baharu yang dilukis dalam kelas itu mengambil semuanya mengikut kelas.

Setiap perubahan dalam panel ialah satu langkah {{ui:Buat asal}}.

## Namakan semula dan padam

{{ui:Namakan semula}} menyunting nama di tempatnya: tekan {{key:Enter}} untuk mengekalkannya, {{key:Esc}} untuk keluar. Kelas di bawahnya turut mengikut (`Lighting-Spot` menjadi `Light-Spot` apabila `Lighting` menjadi `Light`), dan begitu juga objek serta sebarang override viewport.

{{ui:Padam}} membuang kelas dan setiap kelas di bawahnya. Objek mereka berpindah ke **None**. Satu {{ui:Buat asal}} mengembalikan semuanya. **None** tidak boleh dinamakan semula atau dipadam.

## Lapisan reka bentuk

Di bawah {{ui:Lapisan reka bentuk}} setiap lapisan boleh membawa skala (`1:50`) dan dongakan. Lapisan reka bentuk ialah lapisan biasa: ruang model dan helaian berfungsi seperti sebelum ini, dan skala serta dongakan disimpan bersama lukisan untuk alatan yang akan menggunakannya.

## Dalam fail DWG dan DXF

Kelas disimpan dalam setiap versi DWG yang CadCraft simpan dan dalam DXF (R12 dan 2000). Kelas setiap objek ialah data lanjutannya sendiri (aplikasi `CADCRAFT_CLASS`), jadi AutoCAD dan program lain menyimpannya bersama objek itu. Senarai kelas, warna dan keterlihatan disimpan dalam satu blok tidak digunakan bernama `CADCRAFT_CLASSES`; jika program lain membuang blok itu, CadCraft tetap menjumpai kelas setiap objek dan kelas akan kembali dengan tetapan lalai.

Program lain tidak mengenali kelas: mereka melukis setiap objek dengan nilainya sendiri atau nilai lapisannya.

Lihat juga [Override kelas viewport](topic:viewport-overrides) dan [Susun lukisan dengan lapisan](topic:layers).
