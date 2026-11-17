---
title: Registrasi beberapa pindaian menjadi satu
summary: Tempatkan pindaian yang diambil dari posisi berbeda dalam satu kerangka dengan pasangan titik yang dipilih atau target yang diketik, perhalus dengan ICP, simpan registrasi sebagai proyek, dan ekspor point cloud teregistrasi sebagai LAS atau E57. Perintahnya adalah REGISTERSCANS.
keywords: daftarkan, registrasi, pindaian, point cloud, icp, iterative closest point, target, pasangan titik, transformasi kaku, sejajarkan, gabungkan, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Yang akan Anda lakukan

Beberapa pindaian dari satu tempat (masing-masing dari posisi pemindai sendiri) awalnya berada dalam koordinatnya sendiri. Registrasikan: berikan setiap pindaian satu penempatan agar semuanya berada dalam satu kerangka, lalu simpan itu sebagai proyek dan tulis point cloud teregistrasi sebagai satu file LAS atau E57.

## Tempatkan pindaian

1. Buka dialog (ketik `REGISTERSCANS` (atau `REGSCAN`)). {{ui:Tambah pindaian…}} menerima file LAS, LAZ, E57, PLY, PCD, PTX, PTS atau XYZ, atau seret file ke dialog. Pindaian yang memakai satuan berbeda ditolak dengan catatan: konversi salah satunya terlebih dahulu.
2. Pilih {{ui:Pindaian yang dipindahkan}} dan {{ui:Tempatkan terhadap}}. Gambar menampilkan setiap pindaian di kerangka seperti keadaannya sekarang, masing-masing dengan satu warna: {{ui:Denah}}, {{ui:Depan}} atau {{ui:Samping}}; seret untuk menggeser, gunakan roda untuk memperbesar.
3. **Dengan pasangan titik.** Klik {{ui:Pilih pasangan}}, lalu satu titik pada pindaian yang dipindahkan, lalu tempat yang sama pada pindaian lain (sebuah sudut, target, atau kaki kolom). Lakukan minimal tiga kali, dengan titik yang tidak berada dalam satu garis dan tersebar. Klik {{ui:Tempatkan dengan pasangan}}: pindaian ditempatkan dengan kuadrat terkecil, dan **Sisa** menunjukkan seberapa jauh setiap pasangan masih meleset. Pasangan dengan angka besar adalah pilihan yang buruk: hapus dengan tanda silang lalu tempatkan lagi.
4. **Dengan target.** Jika koordinat sebenarnya sebuah titik diketahui (target hasil survei), klik {{ui:Pilih, lalu ketik target}}, klik titik pada pindaiannya, dan ketik X, Y dan Z target di baris tersebut. Pasangan dan target yang diketik boleh dicampur bebas.

## Perhalus dengan ICP

Pasangan memberi penempatan kasar. {{ui:Perhalus}} menggeser pindaian sampai permukaannya tepat berada di atas permukaan pindaian lain: pertama **titik ke titik**, lalu **titik ke bidang**. Tabel mencantumkan setiap langkah dengan galatnya dan berapa banyak titik yang cocok; garis di atasnya menggambarkan galat yang menurun. {{ui:Berhenti}} mengakhiri proses setelah langkah yang sedang berjalan dan menyimpan hasil yang sudah dicapai. {{ui:Urungkan}} membatalkan seluruh proses (atau penempatan terakhir); {{ui:Atur ulang}} mengembalikan pindaian ke koordinat filenya.

Agar tetap cepat di laptop, ICP bekerja pada sebagian titik ({{ui:Titik yang dipakai}}, 5,000 sampai 60,000) dan mengabaikan kecocokan yang lebih jauh dari {{ui:Jarak pencocokan terbesar}} (secara default 5% dari ukuran pindaian, mengecil seiring konvergensi). ICP memerlukan penempatan kasar terlebih dahulu: pindaian yang hampir tidak tumpang tindih akan dilaporkan tidak dapat dicocokkan. Permukaan yang hanya datar atau hanya lurus tidak dapat memperbaiki posisi di sepanjang dirinya sendiri; dalam kasus itu, tambahkan pasangan.

## Simpan dan ekspor

- {{ui:Simpan proyek}} menulis file `.ccscans.json` kecil: nama setiap pindaian, ukurannya, sidik jari dari 64 KB pertamanya, beserta transformasinya. File itu tidak berisi titik. {{ui:Buka proyek…}} mencari file pindaian melalui referensi tersebut (file harus sudah ditambahkan lebih dulu) dan mengembalikan setiap transformasi.
- {{ui:Ekspor LAS}} dan {{ui:Ekspor E57}} menulis satu file dengan setiap pindaian di tempat teregistrasinya. Titik pada file asli tidak pernah ditulis ulang; transformasi diterapkan saat keluar. Dengan {{ui:Baca setiap titik dari file}} aktif, setiap file dibaca ulang untuk setiap titik (hingga 20 million per pindaian); jika mati, hanya titik yang tampil di penampil yang ditulis.
- {{ui:Tampilkan point cloud teregistrasi}} (CadCraft) menulis LAS dan melampirkannya di bawah gambar pada koordinatnya sendiri, seperti point cloud lainnya.

:::note
Tidak ada yang diunggah. Registrasi bekerja dalam satuan file itu sendiri dan mempertahankan milimeter: LAS ditulis dengan skala yang sesuai (sampai 0.1 mm), E57 dengan double. Sistem koordinat hanya dibawa ke LAS jika setiap pindaian menyebut kode EPSG yang sama. Penulis E57 buatan kami sendiri; ia diperiksa dengan membaca kembali file-filenya menggunakan pembaca ini dan libE57Format.
:::
