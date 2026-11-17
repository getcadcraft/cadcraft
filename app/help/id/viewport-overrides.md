---
title: Penimpaan kelas viewport
summary: Di lembar, sembunyikan kelas atau beri warna, tebal garis, atau isian lain di satu viewport saja; model dan viewport lainnya tetap seperti semula.
keywords: viewport, penimpaan kelas, penimpaan viewport, sembunyikan kelas di viewport, lembar, layout, VPLAYER, plot, Vectorworks
from: c1a2b51f
---

Sebuah lembar sering menampilkan model yang sama lebih dari sekali: denah dengan furnitur dan denah tanpa furnitur, atau denah pencahayaan yang hanya lampunya diberi warna. Penimpaan kelas viewport mengubah cara satu [kelas](topic:classes) tampil **hanya di viewport itu**.

1. Buka lembar dan pilih satu viewport.
2. Buka panel Kelas (`CLASSES`) dan pilih kelasnya.
3. Di bawah {{ui:Viewport ini}}, centang {{ui:Sembunyikan di viewport ini}}, atau atur {{ui:Warna di sini}}, {{ui:Tebal garis di sini}} atau {{ui:Isian di sini}}.

Daftar di bawah menampilkan setiap kelas yang diubah viewport ini. {{ui:Hapus penimpaan viewport ini}} menghapus semuanya. Setiap perubahan adalah satu langkah urungkan.

## Apa yang diubah penimpaan

- **Sembunyikan** menyembunyikan kelas dan setiap kelas di bawahnya di viewport ini.
- **Warna, tebal garis, dan isian** mengubah objek kelas yang nilainya tidak diatur pada objek itu sendiri, yakni objek yang mengambilnya dari kelas atau layer. Objek dengan warnanya sendiri tetap mempertahankannya, seperti pada penimpaan layer viewport.

Penimpaan tampil di layar dan di cetakan serta PDF, termasuk kumpulan lembar yang diterbitkan ke PDF. Penimpaan bekerja bersama layer beku dan penimpaan layer milik viewport.

Penimpaan disimpan bersama gambar dalam DWG dan DXF (dengan daftar kelas, dalam blok `CADCRAFT_CLASSES`) dan kembali ke viewport yang sama saat berkas dibuka di CadCraft.
