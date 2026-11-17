---
title: Pilih objek
summary: Pilih objek satu demi satu, dengan tetingkap atau silang, sebelum atau semasa arahan, dan keluarkan objek daripada pilihan.
keywords: pilih, pilihan, tetingkap, silang, kata nama-kata kerja, pilih, semua, terakhir, sebelumnya, pagar, alih keluar, tambah, tab, kitaran, bertindih, qselect, pilih pantas, penapis, pilih serupa, selectsimilar, shift, nyahpilih, ctrl+a, pickfirst
from: 676508c7
---

## Apa yang akan anda pelajari

Cara memilih objek yang diproses oleh arahan. CadCraft mempunyai dua cara bekerja, dan kedua-duanya baik:

- **Pilih dahulu, kemudian arahan** (kata nama-kata kerja). Pilih objek, kemudian taip `M` untuk Alih. Arahan itu mengambil pilihan anda dan terus ke soalan seterusnya.
- **Arahan dahulu, kemudian pilih** (kata kerja-nama). Taip `M`; arahan bertanya `Pilih objek:`; anda memilih, kemudian tekan {{key:Enter}}.

## Pilih satu objek pada satu masa

1. Apabila tiada arahan berjalan, klik garisan. Ia diserlahkan dan grip-nya (petak kecil) muncul. Panel kanan memaparkan sifatnya.
2. Klik objek lain. Ia ditambah pada pilihan.
3. Tahan {{key:Shift}} dan klik objek yang dipilih. Ia dikeluarkan daripada pilihan.
4. Tekan {{key:Esc}}. Tiada apa yang dipilih.

## Tetingkap dan silang

Klik sekali pada ruang kosong, gerakkan, dan klik sekali lagi: satu segi empat tepat. Menekan dan menyeret melukis lasso bebas, dengan dua jenis yang sama (lihat [Pilihan lasso](topic:lasso-selection); {{ui:Tetapan}} boleh menjadikan seretan melukis segi empat tepat). Objek yang anda dapat bergantung pada arah:

| Anda bergerak | Kotak | Memilih |
|---|---|---|
| Kiri ke kanan | Tetingkap | Hanya objek yang **berada sepenuhnya di dalam** kotak |
| Kanan ke kiri | Silang | Objek di dalam kotak **dan** objek yang disentuhnya |

1. Lukis beberapa garisan dan bulatan yang bertindih.
2. Klik ruang kosong di sebelah kiri beberapa objek, gerakkan ke kanan, dan klik sekali lagi. Hanya objek yang berada sepenuhnya di dalam dipilih.
3. Tekan {{key:Esc}}.
4. Klik ruang kosong di sebelah kanan, gerakkan ke kiri merentasi beberapa objek, dan klik sekali lagi. Semua yang disentuh kotak dipilih.
5. Tahan {{key:Shift}} dan lukis kotak atau lasso di atas beberapa objek yang dipilih. Objek itu keluar daripada pilihan.

## Pilih, kemudian jalankan arahan

1. Pilih dua bulatan.
2. Taip `M` dan tekan {{key:Enter}}.

Sejarah memaparkan `2 dijumpai`, dan gesaan terus ke `Tentukan titik asas`. Selesaikan pengalihan (lihat [Alih, salin, putar, skala dan cermin](topic:modify-objects)).

Apabila arahan tamat, pilihan dikosongkan, supaya arahan seterusnya bermula dengan bersih.

Arahan yang menerima pilihan dengan cara ini: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} dan {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} dan {{cmd:CHAMFER}} sentiasa meminta anda memilih objek satu demi satu; {{cmd:TRIM}} dan {{cmd:EXTEND}} menerima satu pilihan atau laluan yang anda seret merentasi bahagian (lihat [Pangkas dan panjangkan](topic:trim-and-extend)).

## Jalankan arahan, kemudian pilih

1. Pastikan tiada apa yang dipilih ({{key:Esc}}).
2. Taip `E` dan tekan {{key:Enter}}. Gesaan berbunyi `Pilih objek:`.
3. Klik objek, atau seret tetingkap dan silang. Sejarah mengira setiap pilihan (`1 dijumpai`, `3 dijumpai`).
4. Tekan {{key:Enter}}, tekan {{key:Space}} atau klik kanan untuk menamatkan pemilihan.

Objek dipadam dan sejarah memaklumkan bilangannya.

Pada gesaan `Pilih objek:`, anda juga boleh taip:

- `ALL`, kemudian {{key:Enter}}: setiap objek yang boleh anda sunting dalam tab yang dibuka.
- `L` (atau `LAST`), kemudian {{key:Enter}}: objek yang paling baharu dilukis.
- `P` (Sebelumnya): objek yang diproses oleh arahan terakhir, jika masih wujud.
- `F` (Pagar): klik atau taip titik sepanjang satu garisan; setiap objek yang disilang garisan itu ditambah. Tekan {{key:Enter}} untuk menamatkan pagar; `U` membatalkan titik terakhirnya.
- `W` (Tetingkap) atau `C` (Silang): dua sudut, mengikut arah seretan anda.
- `R` (Alih keluar): mulai sekarang, klik, tetingkap dan pagar **mengeluarkan** objek. Gesaan berbunyi `Alih keluar objek:`. `A` (Tambah) menukar kembali.
- `?`: senarai pilihan ini dalam sejarah.

Pilihan ini tidak dipaparkan dalam gesaan, seperti dalam AutoCAD.

## Pilih satu daripada beberapa objek yang bertindih

Apabila objek bertindih atau bersentuhan, klik mengambil yang paling dekat. Untuk mendapatkan yang lain:

1. Tahan penunjuk tidak bergerak di atas tempat itu.
2. Tekan {{key:Tab}}. Objek seterusnya di situ diserlahkan, dan bar status memaklumkan yang mana ("2 daripada 3: Garisan pada lapisan Walls").
3. Tekan {{key:Tab}} sekali lagi sehingga yang anda mahu diserlahkan, kemudian klik tanpa bergerak.

Menggerakkan penunjuk bermula semula. Ini berfungsi tanpa arahan berjalan, pada `Pilih objek:` dan di mana-mana arahan meminta anda memilih satu objek.

## Pilih mengikut peraturan: Pilih pantas

{{cmd:QSELECT}} (`QS`, atau {{ui:Sunting}} › {{ui:Lagi}} › {{ui:Pilih pantas}}) memilih setiap objek yang sepadan dengan satu peraturan, seperti setiap bulatan dengan jejari di bawah 50, atau setiap rujukan blok bernama DOOR-900.

1. Buka {{ui:Pilih pantas}}.
2. Pilih {{ui:Jenis objek}} (senarai mengira setiap jenis), kemudian {{ui:Sifat}}: {{ui:Lapisan}}, {{ui:Warna}}, dan bagi sesetengah jenis {{ui:Panjang}}, {{ui:Jejari}}, {{ui:Luas}}, {{ui:Ketinggian teks}}, {{ui:Kandungan teks}}, {{ui:Nama blok}} atau {{ui:Corak hatch}}.
3. Pilih {{ui:Operator}} dan {{ui:Nilai}}. `*` sepadan dengan kad bebas (`DOOR-*`); {{ui:Pilih semua}} mengambil setiap objek jenis itu. Kiraan di bahagian bawah menunjukkan berapa banyak yang sepadan semasa anda memilih.
4. {{ui:Cara guna}}: sertakan yang sepadan, atau selainnya. {{ui:Guna pada}} {{ui:Pilihan semasa}} mempersempitkan apa yang anda pilih; {{ui:Tambah pada pilihan semasa}} menambahnya.
5. Klik {{ui:Pilih}}. Kemudian jalankan arahan yang anda mahu: ia menggunakan pilihan itu.

## Pilih serupa

Pilih satu atau lebih objek dan taip {{cmd:SELECTSIMILAR}} (`SIM`), atau pilih {{ui:Sunting}} › {{ui:Lagi}} › {{ui:Pilih serupa}}. Setiap objek jenis yang sama pada lapisan yang sama dan dengan warna yang sama dipilih; rujukan blok juga memerlukan blok yang sama, hatch memerlukan corak yang sama. Taip `SE` pada gesaan `Pilih objek` untuk memilih apa yang mesti sepadan.

## Pilih sekarang, guna kemudian

Taip `SELECT` dan tekan {{key:Enter}}, pilih objek dengan mana-mana cara di atas, dan tekan {{key:Enter}}. Ia kekal dipilih untuk arahan seterusnya, dan `P` memilihnya semula pada gesaan `Pilih objek:` kemudian.

## Pilih semuanya

Apabila tiada arahan berjalan, tekan {{key:Mod+A}}, atau pilih {{ui:Pilih semua}} dalam menu {{ui:Sunting}} › {{ui:Lagi}} pada bar alat, untuk memilih setiap objek yang boleh anda sunting pada tab yang dibuka. Jika anda telah menaip sesuatu pada baris arahan, {{key:Mod+A}} memilih teks itu: tekan {{key:Esc}} untuk mengosongkannya dahulu. Pada gesaan `Pilih objek:`, taip `ALL`. {{ui:Nyahpilih semua}} dalam menu yang sama, atau {{key:Esc}}, mengosongkan pilihan.

:::tip
Jika anda lebih suka setiap klik menggantikan pilihan (dan {{key:Shift}} menambahnya), tetapkan {{ui:Klik objek}} kepada {{ui:Menggantikan pilihan}} dalam [Tetapan CadCraft](topic:settings).
:::

## Apa yang tidak boleh dipilih

- Objek pada lapisan yang **dimatikan**, **dibekukan** atau **dikunci**. Objek yang dikunci kekal kelihatan, dan anda masih boleh snap kepadanya, tetapi anda tidak boleh memilih atau mengubahnya.
- Pada tab helaian, model yang dipaparkan dalam viewport. Anda memilih objek helaian itu sendiri (blok tajuk, nota, bingkai viewport). Untuk menyunting model, pergi ke tab {{ui:Model}}.

## Padam dengan cepat

Pilih objek, kemudian tekan {{key:Delete}} (atau {{key:Backspace}} apabila baris arahan tidak mempunyai kursor). Pada papan kekunci Mac, kekunci yang berlabel delete berfungsi selepas anda klik dalam lukisan; semasa baris arahan mempunyai kursor, tekan fn dan delete bersama. Ini menjalankan {{cmd:ERASE}} pada pilihan. Jika tiada apa yang berlaku, anda telah menaip sesuatu pada baris arahan: tekan {{key:Esc}}, atau taip `E` dan tekan {{key:Enter}} sebagai gantinya.

## Kesilapan biasa

- **Tetingkap mengambil terlalu sedikit.** Anda menyeret dari kiri ke kanan, yang hanya mengambil apa yang berada sepenuhnya di dalam. Seret dari kanan ke kiri untuk silang.
- **Klik pada ruang kosong memulakan kotak.** Satu klik pada ruang kosong memulakan tetingkap; klik kedua menamatkannya. Tekan {{key:Esc}} atau klik kanan untuk membatalkannya.
- **Klik pada ruang kosong melepaskan pilihan.** Ya, melainkan anda menahan {{key:Shift}}. Untuk mengekalkan pilihan pada klik sebegitu dan hanya mengosongkannya dengan {{key:Esc}}, tetapkan {{ui:Klik pada ruang kosong}} kepada {{ui:Mengekalkan pilihan}} dalam [Tetapan CadCraft](topic:settings#clicking-an-empty-spot).
- **Arahan menggunakan objek yang tidak anda maksudkan.** Sesuatu masih dipilih semasa anda memulakannya. Tekan {{key:Esc}} sebelum arahan untuk bermula tanpa apa-apa yang dipilih.
- **Tiada apa yang dipilih selepas arahan.** Itu disengajakan: arahan yang selesai mengosongkan pilihan.
