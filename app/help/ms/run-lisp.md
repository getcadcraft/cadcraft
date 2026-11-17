---
title: Jalankan rutin LISP
summary: Apa yang dijalankan oleh LISP CadCraft (fungsi, gesaan, arahan, objek, dialog, objek vla), cara menaip LISP pada baris arahan, dan apa yang belum ada.
keywords: lisp, rutin, lsp, dcl, dialog, arahan, defun, entget, ssget, vla, vlax, vl, getpoint, ralat, keserasian, apa yang berfungsi
from: 571bc077
---

## Apa yang akan anda pelajari

Apa yang perlu dijangka apabila memuatkan rutin LISP yang ditulis untuk program CAD lain: bahagian mana yang dijalankan dalam CadCraft, dan apa yang belum ada.

CadCraft mempunyai LISP sendiri. Ia ditulis daripada rujukan AutoLISP awam, bukan daripada program mana-mana pihak lain, jadi kebanyakan rutin yang ditulis untuk AutoCAD berjalan tanpa perubahan. Jika ada sesuatu yang tiada, baris arahan menamakan fungsinya, supaya anda dapat membezakan jurang dalam CadCraft daripada kesilapan dalam rutin.

## Taip LISP pada baris arahan

Taip ungkapan yang bermula dengan `(` dan tekan {{key:Enter}}: `(+ 1 2)` mencetak `3`. `!name` mencetak nilai pembolehubah. Ungkapan yang belum ditutup menunggu baris seterusnya.

Pada gesaan, ungkapan menjawabnya: pada "Tentukan jejari" taip `(* 2 12.5)` untuk 25.

## Apa yang dijalankan

- **Bahasa:** `defun` (dengan pembolehubah setempat selepas `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, dan `*error*` (`*error*` setempat berfungsi). Nama tidak sensitif huruf besar-kecil; integer dan nombor nyata berbeza, seperti yang dijangka (`(/ 7 2)` ialah 3).
- **Fungsi terbina dalam:** matematik, senarai (`car`, `cdr` dan keluarganya, `assoc`, `nth`, `member`, `subst`, `append`…), rentetan (`strcat`, `substr`, `strcase`, `wcmatch`…), penukaran (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometri (`polar`, `distance`, `angle`, `inters`) dan fail (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Arahan:** `(defun c:NAME …)` mencipta arahan. `(command …)` dan `(command-s …)` memacu arahan CadCraft sendiri, dengan `pause` untuk jawapan anda.
- **Gesaan:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` dengan kata kunci `initget`, `entsel`, `nentsel` dan `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, dengan senarai penapis dan ujian `-4`).
- **Objek sebagai senarai:** `entget`, `entmod`, `entmake` (blok juga), `entdel`, `entlast`, `entnext` (atribut rujukan blok datang selepasnya sebagai ATTRIB, kemudian SEQEND, supaya rutin atribut berfungsi), `handent`, set pilihan, `tblsearch` dan `tblnext`, `layoutlist`, `regapp`, `getvar` dan `setvar` untuk tetapan yang CadCraft ada.
- **Dialog:** fail `.dcl` dengan `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Butang, kotak sunting, kotak senarai, senarai timbul, togol, butang radio, baris, lajur dan kotak semuanya dipaparkan. Rutin yang menulis dialognya ke fail sementara juga berfungsi.
- **Objek:** `vl-load-com` (ia tidak melakukan apa-apa; tiada apa yang perlu dimuatkan), fungsi senarai dan rentetan `vl-`, `vl-catch-all-apply`, sifat `vla-get-…` / `vla-put-…`, kaedah `vla-…` dan `vlax-for` ke atas koleksi Blocks, Layers dan Layouts, ruang model dan takrif blok, dengan varian dan tatasusunan selamat.

## Rutin yang diuji

Ujian CadCraft menjalankan satu set rutin yang ditulis untuk semakan ini (penapis pilihan, gesaan, arahan, objek, pengendali ralat), dan satu rutin popular yang diminta oleh ramai pengguna mengikut nama: DelBlocks oleh Lee Mac, mengikut nama melalui dialognya dan dengan memilih satu blok. CadCraft juga mempunyai {{cmd:DELBLOCKS}} sendiri, jadi anda tidak memerlukan rutin untuk itu.

## Belum dibina

- `grread` (menjejak tetikus sendiri), reaktor (`vlr-…`), fungsi lengkung (`vlax-curve-…`), kamus dan data lanjutan (`dictsearch`, xdata dalam `entget` dan `entmake`), serta fungsi `acet-…` Express Tools.
- Imej dan slaid dalam dialog dipaparkan sebagai bingkai kosong.
- Menjalankan program lain, pendaftaran Windows, dan fail di luar yang anda muatkan: rutin boleh menulis dan membaca fail sementaranya sendiri, yang kekal sehingga anda menutup halaman.

Apabila rutin sampai kepada salah satu daripada ini, baris arahan memaparkan "tiada definisi fungsi" dan namanya, serta menyatakan bahawa CadCraft belum mempunyainya.

## Kesilapan yang perlu dielakkan

- **Arahan dengan nama yang sama seperti arahan CadCraft.** Arahan CadCraft sendiri kekal. Jalankan arahan rutin sebagai `(c:NAME)` pada baris arahan.
- **Menjalankan LISP yang tidak anda percayai.** Rutin boleh menukar apa sahaja dalam lukisan, tetapi tiada apa di luarnya: ia tidak boleh mencapai fail anda, laman lain atau aplikasi lain.
