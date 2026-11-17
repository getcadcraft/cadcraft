---
title: Jalankan rutinitas LISP
summary: Apa yang dijalankan LISP CadCraft (fungsi, prompt, perintah, objek, dialog, objek vla), cara mengetik LISP di baris perintah, dan apa yang belum tersedia.
keywords: lisp, rutinitas, lsp, dcl, dialog, perintah, defun, entget, ssget, vla, vlax, vl, getpoint, kesalahan, kompatibilitas, apa yang berfungsi
from: 571bc077
---

## Yang akan Anda pelajari

Apa yang diharapkan saat memuat rutinitas LISP yang ditulis untuk program CAD lain: bagian mana yang berjalan di CadCraft, dan apa yang belum tersedia.

CadCraft memiliki LISP sendiri. LISP itu ditulis dari referensi AutoLISP publik, bukan dari program siapa pun, sehingga sebagian besar rutinitas yang ditulis untuk AutoCAD berjalan tanpa perubahan. Jika ada yang tidak tersedia, baris perintah menyebut nama fungsinya, sehingga Anda dapat membedakan kekurangan di CadCraft dari kesalahan di rutinitas.

## Ketik LISP di baris perintah

Ketik ekspresi yang diawali `(` lalu tekan {{key:Enter}}: `(+ 1 2)` menampilkan `3`. `!name` menampilkan nilai sebuah variabel. Ekspresi yang belum tertutup akan menunggu baris berikutnya.

Pada sebuah prompt, ekspresi menjawabnya: pada "Tentukan radius" ketik `(* 2 12.5)` untuk 25.

## Yang berjalan

- **Bahasanya:** `defun` (dengan variabel lokal setelah `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, dan `*error*` (`*error*` lokal juga berfungsi). Nama tidak peka huruf besar-kecil; bilangan bulat dan bilangan real berbeda, seperti yang Anda harapkan (`(/ 7 2)` menghasilkan 3).
- **Fungsi bawaan:** matematika, daftar (`car`, `cdr` dan keluarganya, `assoc`, `nth`, `member`, `subst`, `append`…), string (`strcat`, `substr`, `strcase`, `wcmatch`…), konversi (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometri (`polar`, `distance`, `angle`, `inters`) dan file (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Perintah:** `(defun c:NAME …)` membuat sebuah perintah. `(command …)` dan `(command-s …)` menjalankan perintah CadCraft sendiri, dengan `pause` untuk jawaban Anda.
- **Prompt:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` dengan kata kunci `initget`, `entsel`, `nentsel` dan `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, dengan daftar filter dan uji `-4`).
- **Objek sebagai daftar:** `entget`, `entmod`, `entmake` (blok juga), `entdel`, `entlast`, `entnext` (atribut sebuah blok referensi muncul setelahnya sebagai ATTRIB, lalu SEQEND, sehingga rutinitas atribut berfungsi), `handent`, set pilihan, `tblsearch` dan `tblnext`, `layoutlist`, `regapp`, `getvar` dan `setvar` untuk pengaturan yang dimiliki CadCraft.
- **Dialog:** file `.dcl` dengan `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Tombol, kotak isian, kotak daftar, daftar pop-up, sakelar, tombol radio, baris, kolom dan kotak semuanya tampil. Rutinitas yang menulis dialognya ke file sementara juga berfungsi.
- **Objek:** `vl-load-com` (tidak melakukan apa pun; tidak ada yang perlu dimuat), fungsi daftar dan string `vl-`, `vl-catch-all-apply`, dan properti `vla-get-…` / `vla-put-…`, metode `vla-…` dan `vlax-for` atas koleksi Blocks, Layers dan Layouts, ruang model dan definisi blok, dengan varian dan safe array.

## Rutinitas yang diuji

Pengujian CadCraft menjalankan sejumlah rutinitas yang ditulis untuk pemeriksaan ini (filter pilihan, prompt, perintah, objek, penangan kesalahan), dan satu rutinitas populer yang diminta orang dengan namanya: DelBlocks dari Lee Mac, baik dengan nama melalui dialognya maupun dengan memilih blok. CadCraft juga memiliki {{cmd:DELBLOCKS}} sendiri, jadi Anda tidak memerlukan rutinitas untuk itu.

## Belum tersedia

- `grread` (melacak mouse sendiri), reaktor (`vlr-…`), fungsi kurva (`vlax-curve-…`), kamus dan data diperluas (`dictsearch`, xdata di `entget` dan `entmake`), dan fungsi `acet-…` dari Express Tools.
- Gambar dan slide dalam dialog tampil sebagai bingkai kosong.
- Menjalankan program lain, registri Windows, dan file di luar yang Anda muat: sebuah rutinitas dapat menulis dan membaca file sementaranya sendiri, yang bertahan sampai Anda menutup halaman.

Ketika sebuah rutinitas mencapai salah satu hal ini, baris perintah menampilkan "tidak ada definisi fungsi" dan namanya, dan menyatakan bahwa CadCraft belum memilikinya.

## Kesalahan yang perlu dihindari

- **Perintah dengan nama yang sama dengan milik CadCraft.** Perintah CadCraft tetap ada. Jalankan perintah rutinitas sebagai `(c:NAME)` di baris perintah.
- **Menjalankan LISP yang tidak Anda percayai.** Sebuah rutinitas dapat mengubah apa pun di dalam gambar, tetapi tidak ada di luarnya: ia tidak dapat menjangkau file Anda, situs lain, atau aplikasi lain.
