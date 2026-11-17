---
title: Keyboard dan mouse
summary: Setiap tombol, aksi mouse, dan tombol baris perintah dalam aplikasi gambar CadCraft, sebagaimana kode menanganinya.
keywords: keyboard, pintasan, tombol, mouse, roda, geser, zoom, klik kanan, tombol tengah, f3, f7, f8, ctrl, tombol command, hotkey, salin, potong, tempel, duplikat, papan klip, pilih semua
from: a2608a29
---

Pintasan ditampilkan untuk komputer Anda. Di Mac, setiap pintasan {{key:Mod}} di bawah menggunakan tombol Command, dan tombol Control juga berfungsi. Cara penulisan tombol, serta cara menggunakan tombol F di Mac, ada di [Tombol, mouse, dan trackpad](common:keys).

## Mengetik perintah

| Tombol | Fungsinya |
|---|---|
| Huruf, angka, atau simbol apa pun | Masuk ke baris perintah, di mana pun penunjuk berada, kecuali sebuah kotak di panel sedang memiliki kursor |
| {{key:Enter}} | Mengirim apa yang Anda ketik. Pada prompt kosong: mengulang perintah terakhir, mengakhiri perintah, menyelesaikan pilihan, atau menerima nilai bawaan di `<…>` |
| {{key:Space}} | Sama seperti {{key:Enter}}, kecuali saat CadCraft meminta teks (teks, nama blok, teks dimensi), di mana ia mengetik spasi |
| {{key:Esc}} | Membatalkan perintah. Tanpa perintah yang berjalan: membatalkan pemindahan grip atau kotak pilihan, lalu menghapus pilihan |
| {{key:Tab}} | Menerima saran perintah yang ditampilkan di sebelah kanan baris perintah. Tanpa apa pun yang diketik dan penunjuk berada di atas objek yang tumpang tindih: menyorot objek berikutnya di sana (klik untuk memilihnya) |
| {{key:Up}} {{key:Down}} | Menelusuri baris yang pernah Anda ketik sebelumnya (100 terakhir) |

## Menggambar dan mengedit

| Tombol | Fungsinya |
|---|---|
| {{key:Mod+Z}} | Mengurungkan perintah terakhir |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Mengulangi |
| {{key:Mod+A}} | Memilih setiap objek yang dapat Anda edit pada tab yang terbuka ({{cmd:SELECTALL}}). Jika Anda sudah mengetik sesuatu di baris perintah, yang dipilih adalah teks itu |
| {{key:Delete}} | Menghapus objek yang dipilih ({{cmd:ERASE}}), kecuali Anda sudah mengetik sesuatu di baris perintah |
| {{key:Backspace}} | Menghapus objek yang dipilih saat baris perintah tidak memiliki kursor; di baris perintah, menghapus apa yang Anda ketik |
| {{key:Esc}} | Tanpa perintah yang berjalan: menghapus pilihan ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Menyimpan salinan dalam format gambar (DWG atau DXF) |
| {{key:Mod+Shift+S}} | Simpan sebagai: pilih DWG atau DXF, lalu simpan salinan |
| {{key:Mod+O}} | Membuka DWG atau DXF |
| {{key:Mod+P}} | Plot ke PDF |

Urungkan, ulangi, pilih semua, dan plot tidak berfungsi saat sebuah perintah berjalan: tekan {{key:Esc}} terlebih dahulu.

## Salin, potong, dan tempel

| Tombol | Fungsinya |
|---|---|
| {{key:Mod+C}} | Menyalin pilihan ke papan klip ({{cmd:COPYCLIP}}). Tidak ada yang dipilih: CadCraft meminta objek |
| {{key:Mod+X}} | Potong: salin pilihan, lalu hapus ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Tempel: salinan mengikuti penunjuk; klik, atau ketik titik, untuk meletakkannya ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Tempel di tempat yang sama: pada koordinat tempat ia disalin ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplikat: salinan pilihan bergerak mengikuti penunjuk; klik untuk meletakkannya, {{key:Esc}} tidak meninggalkan apa pun ({{cmd:DUPLICATE}}) |

Aksi yang sama ada di grup {{ui:Edit}} pada bilah alat ({{ui:Salin}}, {{ui:Tempel}}) dan menu {{ui:Lainnya}}-nya. Saat perintah lain sedang berjalan, selesaikan atau tekan {{key:Esc}} terlebih dahulu; menekan {{key:Mod+V}} atau {{key:Mod+D}} lagi saat sebuah salinan mengikuti penunjuk akan memulai ulang. Ketika Anda sudah mengetik sesuatu di baris perintah, atau sebuah perintah meminta teks, tombol-tombol ini menyalin, memotong, dan menempel teks tersebut. Lihat [Salin, tempel, dan duplikat](topic:copy-paste).

## Sakelar

| Tombol | Sakelar | Tombol bilah status |
|---|---|---|
| {{key:F3}} | Snap objek aktif atau nonaktif | {{ui:Snap}} |
| {{key:F7}} | Grid aktif atau nonaktif | {{ui:Grid}} |
| {{key:F8}} | Ortho aktif atau nonaktif | {{ui:Ortho}} |
| {{key:F10}} | Pelacakan polar aktif atau nonaktif | {{ui:Polar}} |
| {{key:F11}} | Pelacakan snap objek aktif atau nonaktif | {{ui:Lacak}} |
| {{key:F12}} | Input dinamis aktif atau nonaktif | {{ui:Dyn}} |

:::mac
Di Mac, F3, F7, dan F8 biasanya adalah Mission Control dan tombol media. Tahan **fn** bersama tombol-tombol tersebut, atau aktifkan tombol fungsi standar di Pengaturan Sistem, seperti dijelaskan di [Tombol, mouse, dan trackpad](common:keys). Tombol bilah status selalu berfungsi.
:::

:::firefox
F7 di Firefox juga dapat meminta untuk mengaktifkan caret browsing. Pilih **Tidak**, dan gunakan tombol {{ui:Grid}} jika terus bertanya.
:::

## Bantuan

| Tombol | Fungsinya |
|---|---|
| {{key:F1}} | Membuka atau menutup bantuan ini di samping gambar. Tetap berfungsi saat perintah sedang berjalan, dan tidak pernah masuk ke baris perintah. |
| {{key:Esc}} | Saat kursor berada di panel bantuan: menghapus pencarian, atau menutup panel |

Tombol {{ui:Bantuan}} di bilah atas melakukan hal yang sama dengan {{key:F1}}. Saat Anda mengetik di kotak pencarian bantuan, tidak ada yang masuk ke baris perintah. Klik gambar untuk mengembalikan tombol ke CadCraft; panel tetap terbuka di sampingnya.

:::mac
Pada keyboard Mac, tahan **fn** dan tekan F1, atau klik {{ui:Bantuan}}.
:::

## Layar

| Tombol | Fungsinya |
|---|---|
| {{key:Ctrl+Shift+F}} | Berganti antara normal, layar penuh, dan layar penuh dengan bilah tersembunyi. Ini menggunakan tombol Control di setiap komputer, termasuk Mac. |
| {{key:Left}} {{key:Right}} | Dengan tab di bawah gambar yang sedang fokus: tab sebelumnya atau berikutnya |

Dalam layar penuh, peramban mungkin menggunakan {{key:Esc}} pertama untuk keluar dari layar penuh. Tekan {{key:Esc}} lagi untuk membatalkan perintah.

## Dialog

| Tombol | Fungsinya |
|---|---|
| {{key:Esc}} | Menutup dialog ({{ui:Plot to PDF}}, atau pertanyaan seperti "Perubahan yang belum disimpan", di mana artinya {{ui:Batal}}) |
| {{key:Tab}} | Berpindah di antara pengaturan dan tombol dialog |

Saat dialog terbuka, tombol-tombol gambar dinonaktifkan.

## Kolom panel

Di kotak pada panel kanan atau kiri:

| Tombol | Fungsinya |
|---|---|
| {{key:Enter}} | Menerapkan nilai dan keluar dari kotak |
| {{key:Esc}} | Mengembalikan nilai lama dan keluar dari kotak |
| {{key:Tab}} | Menerapkan dan pindah ke kotak berikutnya |

Saat sebuah kotak memiliki kursor, huruf diketik di dalamnya, bukan di baris perintah.

## Mouse

| Aksi | Fungsinya |
|---|---|
| Klik | Menentukan titik saat perintah memintanya; memilih objek saat perintah meminta objek; selain itu memilih objek, atau grip |
| Shift+klik | Menghapus objek yang dipilih dari pilihan (dengan {{ui:Mengklik objek}} diatur ke {{ui:Mengganti pilihan}} di [Pengaturan](topic:settings): menambahkannya). Saat menentukan titik: mengabaikan snap objek untuk klik itu |
| Klik di ruang kosong, lalu klik lagi | Kotak pilihan: dari kiri ke kanan adalah jendela, dari kanan ke kiri adalah silang |
| Seret di ruang kosong | Laso: bergerak ke kanan lebih dulu adalah jendela, ke kiri lebih dulu adalah silang; {{key:Space}} saat menyeret berganti antara jendela, silang, dan pagar; {{key:Esc}} melepasnya (LASSOMODE 0, atau Pengaturan, membuatnya kembali menjadi persegi panjang) |
| Seret melalui potongan di TRIM atau EXTEND | Memangkas (atau memperpanjang) setiap potongan yang dilintasi jalur; tahan {{key:Shift}} untuk yang lain |
| Seret grip | Memindahkan grip (atau klik grip, lalu klik tempat ia akan dipindahkan) |
| Klik dua kali teks | Memilihnya dan meletakkan kursor di kotak {{ui:Teks}} pada panel kanan |
| Klik kanan | {{key:Enter}}. Saat pemindahan grip atau kotak pilihan: membatalkannya |
| Seret dengan tombol kanan | Menggeser |
| Roda | Memperbesar dan memperkecil di sekitar crosshair |
| Seret dengan roda (tombol tengah) | Menggeser |
| Klik dua kali roda | Memperbesar ke seluruh gambar (batas) |
| Jatuhkan DWG atau DXF ke gambar | Membukanya |

Pada trackpad atau layar sentuh, lihat [Mouse, trackpad, dan sentuh](topic:mouse-trackpad-touch).

## Tombol yang dipegang peramban

{{key:Mod+N}}, {{key:Mod+W}}, dan {{key:Mod+T}} selalu milik peramban. CadCraft tidak menggunakannya: gunakan {{ui:Baru}} atau ketik `NEW` untuk gambar baru. Papan klip CadCraft adalah miliknya sendiri: {{key:Mod+C}} dan {{key:Mod+V}} menyalin objek di antara gambar dan tab CadCraft, bukan ke atau dari program lain.

:::mac
Jika {{key:Mod+Y}} membuka riwayat peramban Anda alih-alih mengulang, gunakan {{key:Mod+Shift+Z}} atau tombol {{ui:Ulangi}}.
:::

## Letak Move

Move adalah perintah `MOVE` (tombol {{key:M}}): pilih objek, lalu titik dasar dan titik kedua atau jarak yang diketik. `ALIGN` dan `DISTRIBUTE` juga tersedia. BimCraft menggunakan nama yang sama untuk pekerjaan yang sama pada elemen bangunan, tetapi {{key:M}}-nya adalah Measure: Move-nya adalah {{key:Shift+M}}.
