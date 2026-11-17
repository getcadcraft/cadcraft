---
title: Atribut blok
summary: Lihat dan ubah nilai yang dibawa referensi blok, seperti nomor item atau pabrikan, dan pertahankan nilai tersebut saat Anda menyimpan salinan.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, kepala gambar, edit di tempat, editor atribut, attdef, definisikan atribut, bedit, editor blok, bclose, atribut, attrib, tag, nomor item, nilai, tak terlihat, konstan, blok, properti, daftar, tag peralatan
from: 34d307c7
---

## Apa itu atribut

Atribut adalah nilai bernama yang menyertai referensi blok: nomor item tag peralatan, nama tag ruangan, peringkat tahan api pintu. Definisi blok menyatakan atribut apa yang dimilikinya (masing-masing memiliki **tag**, **prompt**, **bawaan**, serta posisi, ukuran dan sudut untuk teksnya). Setiap referensi ke blok membawa nilainya sendiri.

Beberapa atribut **tak terlihat**: mereka menyimpan data, seperti pabrikan atau nomor model, tetapi tidak pernah digambar. Beberapa **konstan**: sama untuk setiap referensi, ditetapkan oleh blok.

## Asal atribut

- Blok dalam file DWG dan DXF yang Anda buka mempertahankan atributnya, beserta nilai setiap referensi.
- Blok yang Anda bawa dengan {{cmd:INSERT}} dan opsi {{ui:File}} mempertahankan miliknya. Lihat [Sisipkan dari file atau pustaka](topic:insert-from-file-and-library).

- Item pustaka masuk sebagai blok dengan atribut: nomor item yang terlihat dan data item, tak terlihat.

- Blok yang Anda buat sendiri: definisikan atribut dengan {{cmd:ATTDEF}} terlebih dahulu (di bawah), lalu pilih bersama objek lainnya saat Anda membuat blok.

## Definisikan atribut untuk blok Anda sendiri

1. Gambar garis-garis blok, misalnya tag ruangan.
2. Pilih {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Definisikan atribut}}, atau ketik `ATT` dan tekan {{key:Enter}}.
3. Riwayat menampilkan mode (`Invisible=No Constant=No Preset=No`). Ketik `I`, `C` atau `P` untuk mengubah salah satunya, dan tekan {{key:Enter}} saat sudah benar. Nilai tak terlihat disimpan tetapi tidak digambar; nilai konstan memiliki nilai yang sama di setiap referensi; nilai prasetel tidak ditanyakan saat Anda menyisipkan blok.
4. Ketik tag (misalnya `ROOM_NO`: huruf kapital, tanpa spasi), prompt (`Nomor ruangan`) dan nilai bawaan (`101`).
5. Klik tempat nilai akan ditempatkan, dan berikan tinggi dan rotasi. Tag tampil di gambar.
6. Buat blok dengan {{cmd:BLOCK}}, pilih garis dan definisi atribut bersama-sama. Referensi yang menggantikannya mendapat nilai bawaan; setiap {{cmd:INSERT}} baru akan menanyakannya.

Definisi atribut yang dipilih menampilkan {{ui:Tag}}, {{ui:Prompt}}, {{ui:Bawaan}} dan mode di {{ui:Properti}}.

## Ubah blok: editor blok

{{ui:Blok}} › {{ui:Lainnya}} › {{ui:Edit blok}} ({{cmd:BEDIT}}, `BE`) membuka blok secara terpisah: ketik namanya (atau pilih referensi terlebih dahulu). Bilah di atas menyatakan blok mana yang sedang Anda edit. Gambar, hapus, dan ubah objeknya dengan perintah biasa, dan tambah atau ubah definisi atribut. Kemudian klik {{ui:Simpan blok}} (atau ketik {{cmd:BCLOSE}} dan `S`): setiap referensi menampilkan perubahan, dan satu {{key:Mod+Z}} mengurungkannya semua. {{ui:Buang perubahan}} ({{cmd:BCLOSE}}, `D`) membiarkan blok seperti semula.

Saat Anda menambah, menghapus atau mengubah definisi atribut, menyimpan juga menyelaraskan setiap referensi: nilai yang Anda ketik tetap dipertahankan, atribut baru mendapat nilai bawaannya, atribut yang dihapus hilang, dan setiap atribut kembali ke posisi yang ditetapkan definisinya. Riwayat menyatakan berapa referensi yang diperbarui.

## Edit kepala gambar di tempatnya (REFEDIT)

Kepala gambar pada lembar sering berada di dalam blok. Untuk mengubah garis atau teksnya tanpa meninggalkan lembar:

1. Pilih kepala gambar, lalu {{ui:Blok}} › {{ui:Lainnya}} › {{ui:Edit di tempat}} (atau ketik {{cmd:REFEDIT}}).
2. Isinya menjadi objek biasa di tempatnya; semua yang lain dipudarkan dan tidak dapat diubah.
3. Ubah, hapus atau gambar: objek baru menjadi bagian dari blok.
4. Klik {{ui:Simpan blok}} di bilah di atas (atau ketik {{cmd:REFCLOSE}} dan `S`). Setiap referensi menampilkan perubahan, dan satu {{key:Mod+Z}} mengurungkan seluruh edit. {{ui:Buang}} membiarkan blok seperti semula.

Gambar tertaut, blok dinamis, atau referensi yang diskalakan berbeda pada sumbu X dan Y tidak dapat diedit di tempat: gunakan {{cmd:BEDIT}} (atau buka gambar tertaut).

:::note
Simpan atau buang di editor blok sebelum Anda menyimpan gambar: file yang disimpan saat editor terbuka memiliki blok seperti sebelumnya.
:::

## Isi nilainya saat Anda menempatkan blok

1. Ketik `I` dan tekan {{key:Enter}}, ketik nama blok dan tekan {{key:Enter}}.
2. Klik tempat blok akan ditempatkan.
3. CadCraft menanyakan setiap nilai, misalnya `Masukkan nomor item (ITEM) <>`. Ketik nilainya dan tekan {{key:Enter}}, atau tekan {{key:Enter}} untuk mempertahankan nilai bawaan yang ditampilkan dalam tanda kurung sudut.

Nilai yang oleh blok ditandai sebagai prasetel, dan yang konstan, tidak ditanyakan. Nilai tersebut mengambil bawaannya.

## Lihat dan ubah nilai

1. Klik referensi blok.
2. Di panel kanan, di bawah {{ui:Atribut}}, setiap tag memiliki nilainya. Yang tak terlihat menampilkan `tersembunyi`.
3. Klik nilai, ketik yang baru dan tekan {{key:Enter}}.

Gambar langsung menampilkan nilai baru. Setiap perubahan adalah satu langkah: {{key:Mod+Z}} mengurungkannya.

**Editor atribut.** Klik ganda referensi dengan atribut (atau {{cmd:EATTEDIT}}): dialog {{ui:Edit atribut}} mencantumkan setiap tag beserta prompt dan nilainya. Ketik nilai baru; klik sebuah baris untuk mengubah {{ui:Tinggi}}, {{ui:Rotasi}}, {{ui:Faktor lebar}}, {{ui:Rata}}, {{ui:Layer}}, {{ui:Warna}} dan {{ui:Tak terlihat}} atribut tersebut khusus untuk referensi ini saja. {{ui:Terapkan}} membiarkan dialog tetap terbuka; {{ui:OK}} menerapkan dan menutup. Setiap {{ui:Terapkan}} atau {{ui:OK}} adalah satu langkah urungkan.

**Pada baris perintah**, {{cmd:ATTEDIT}} menanyakan setiap nilai secara bergantian: ketik yang baru, atau tekan {{key:Enter}} untuk mempertahankannya.

## Ubah definisi atribut (BATTMAN, ATTSYNC)

{{ui:Blok}} › {{ui:Lainnya}} › {{ui:Pengelola atribut}} ({{cmd:BATTMAN}}) mencantumkan atribut blok: ubah tag, prompt atau bawaan, centang {{ui:Tak terlihat}}, {{ui:Konstan}} atau {{ui:Prasetel}}, dan pindahkan ke atas atau ke bawah (urutan nilai yang ditanyakan). Dengan {{ui:Perbarui referensi (nilai dipertahankan)}} dicentang, {{ui:Terapkan}} juga menyelaraskan setiap referensi; tag yang diganti namanya tetap mempertahankan nilainya. Setiap {{ui:Terapkan}} adalah satu langkah urungkan.

{{cmd:ATTSYNC}} menyelaraskan referensi dengan definisi bloknya secara manual: `S` memilih referensi, `N` menamai blok, `A` mengerjakan setiap blok. Nilai tetap dipertahankan.

Nilai bidang milik item pustaka (id, versi, lisensi dan atribusinya) ditampilkan tetapi tidak dapat diedit, agar pemeriksaan pembaruan tetap berfungsi. Nomor item dan jumlahnya boleh Anda ubah.

## Buat daftarnya

Pilih referensi dan ketik `LI` (untuk {{cmd:LIST}}). Riwayat menampilkan setiap atribut sebagai `TAG = nilai`, dengan `(tak terlihat)` atau `(konstan)` jika berlaku.

## Memindahkan, memutar dan menguraikan

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} dan {{cmd:MIRROR}} mempertahankan nilai; teks ikut bergerak bersama blok dan tetap terbaca.
- {{cmd:EXPLODE}} mengubah atribut yang terlihat menjadi teks biasa beserta nilainya. Yang tak terlihat dibuang.

## Menyimpan

DWG dan DXF yang disimpan sama-sama mempertahankan setiap atribut: definisi setiap blok (termasuk yang tak terlihat, konstan dan prasetel) dan nilai setiap referensi. Program CAD lain membacanya sebagai atribut blok biasa.

Dalam DXF R12, nilai yang lebih panjang dari 255 karakter dipotong menjadi 255, dan riwayat menyatakannya.

## Kesalahan umum

- **Nilai tidak tampil di gambar.** Nilainya tak terlihat, atau kosong. Nilai tak terlihat tetap tampil di panel kanan.
- **Nilai yang Anda ketik masuk ke baris perintah.** Klik kotak nilai di panel kanan terlebih dahulu.
