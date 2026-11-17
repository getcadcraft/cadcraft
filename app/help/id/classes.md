---
title: Mengatur gambar dengan kelas
summary: Kelas mengurutkan objek dengan cara kedua, lintas layer (Lighting-Fixtures-Spot): tampilkan dan sembunyikan, beri warna, jenis garis, tebal garis, isian, dan gaya teks yang bisa diambil objek menurut kelas, dan atur kelas tempat objek baru masuk.
keywords: kelas, classes, CLASSES, CLS, CLASS, menurut kelas, ByClass, kelas aktif, gunakan saat pembuatan, None, layer desain, skala layer, elevasi, Vectorworks
from: 672de9cb
---

Layer menyatakan *di mana* sebuah objek berada dalam gambar; kelas menyatakan *apa* objek itu. Dinding di layer `Level 1` bisa berada di kelas `Walls-Exterior`, dan lampu sorot di layer `Ceiling` bisa berada di kelas `Lighting-Fixtures-Spot`. Anda dapat menyembunyikan setiap lampu di setiap layer sekaligus, atau mencetak setiap dinding luar lebih tebal, tanpa memindahkan apa pun antar layer.

Setiap objek mulai di kelas **None**. Gambar tanpa kelas sendiri bekerja seperti sebelumnya.

## Buka panel Kelas

Ketik `CLASSES` (atau `CLS`) lalu tekan {{key:Enter}}, atau pilih {{ui:Kelas…}} di menu {{ui:Lainnya}} pada grup {{ui:Tampilan}}. Panel terbuka di atas gambar dan tetap terbuka saat Anda menggambar.

- **Tambah kelas:** ketik namanya di kotak di bagian atas lalu tekan {{key:Enter}}. Tanda `-` membuat tingkat: `Lighting-Fixtures-Spot` berada di bawah `Lighting-Fixtures`, yang berada di bawah `Lighting`; tingkat yang belum ada ditambahkan untuk Anda.
- **Tampilkan atau sembunyikan:** ikon mata di sebelah kelas. Menyembunyikan sebuah kelas menyembunyikan semua kelas di bawahnya, di layar dan di kertas.
- **Kelas aktif:** tombol bulat. Objek baru yang Anda gambar masuk ke kelas aktif.
- **Pilih kelas:** klik namanya. Tombol dan pengaturan di bawah daftar kemudian bekerja pada kelas itu.

Angka di ujung setiap baris adalah jumlah objek di kelas tersebut (di model, di lembar, dan di dalam definisi blok).

## Memasukkan objek ke kelas

Pilih objeknya, pilih kelas di panel, lalu pilih {{ui:Atur kelas}}. Centang {{ui:Menurut kelas}} lebih dulu agar objek mengambil warna, jenis garis, tebal garis, isian, dan gaya teks dari kelas. Anda juga bisa:

- mengetik `CLASS` dengan objek dipilih dan memasukkan nama kelas (nama baru membuat kelas);
- mengetik `CLASS` dengan tidak ada yang dipilih untuk mengatur kelas aktif; `?` menampilkan daftar kelas beserta jumlahnya;
- memakai bagian {{ui:Kelas}} di panel Properti: kelasnya, dan sakelar {{ui:… menurut kelas}} untuk warna, jenis garis, dan tebal garis (isian untuk hatch, gaya teks untuk teks);
- memilih menurut kelas dengan `QSELECT`: pilih properti {{ui:Kelas}}.

{{ui:Pilih objeknya}} memilih setiap objek dari kelas yang dipilih pada lembar yang terbuka (atau di model).

## Cara sebuah objek tergambar: objek, kelas, layer

Warna, jenis garis, tebal garis, isian, dan gaya teks sebuah objek bisa **menurut kelas**, sama seperti bisa menurut layer. CadCraft mencari dalam urutan ini:

1. Nilai milik objek itu sendiri, kecuali nilai itu menurut kelas.
2. Nilai kelas, bila objek mengambilnya menurut kelas dan kelas memilikinya.
3. Nilai layer.

Kelas yang warnanya (atau jenis garis …) berstatus {{ui:Belum diatur}} meneruskan objek ke layernya. Pilih sebuah kelas dan atur {{ui:Warna}}, {{ui:Jenis garis}}, {{ui:Tebal garis}}, {{ui:Isian (hatch)}}, dan {{ui:Gaya teks}} di bawah tombol-tombol. Centang Gunakan saat pembuatan agar objek baru yang digambar di kelas itu mengambil semuanya menurut kelas.

Setiap perubahan di panel adalah satu langkah {{ui:Urungkan}}.

## Ganti nama dan hapus

{{ui:Ganti nama}} mengedit nama di tempat: tekan {{key:Enter}} untuk menyimpannya, {{key:Esc}} untuk membatalkan. Kelas di bawahnya ikut berubah (`Lighting-Spot` menjadi `Light-Spot` ketika `Lighting` menjadi `Light`), begitu juga objeknya dan penggantian per viewport.

{{ui:Hapus}} menghapus kelas dan setiap kelas di bawahnya. Objek mereka pindah ke **None**. Satu {{ui:Urungkan}} mengembalikan semuanya. **None** tidak dapat diganti nama atau dihapus.

## Layer desain

Di bawah {{ui:Layer desain}}, setiap layer dapat membawa skala (`1:50`) dan elevasi. Layer desain adalah layer biasa: ruang model dan lembar bekerja seperti sebelumnya, dan skala serta elevasi disimpan bersama gambar untuk alat yang akan memakainya.

## Dalam file DWG dan DXF

Kelas disimpan di setiap versi DWG yang disimpan CadCraft dan di DXF (R12 dan 2000). Kelas setiap objek adalah data perluasannya sendiri (aplikasi `CADCRAFT_CLASS`), sehingga AutoCAD dan program lain menyimpannya bersama objek. Daftar kelas, warna, dan visibilitasnya disimpan dalam satu blok tak terpakai bernama `CADCRAFT_CLASSES`; jika program lain membersihkan blok itu, CadCraft tetap menemukan kelas setiap objek dan kelas-kelas itu kembali dengan pengaturan bawaan.

Program lain tidak mengenal kelas: mereka menggambar setiap objek dengan nilai miliknya sendiri atau nilai layernya.

Lihat juga [Penggantian kelas per viewport](topic:viewport-overrides) dan [Mengatur gambar dengan layer](topic:layers).
