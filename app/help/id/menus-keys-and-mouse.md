---
title: Menu, tombol, dan mouse
summary: Pilih gaya menu yang sesuai dengan cara kerja Anda, beri perintah tombol sendiri atau tombol yang mengetik perintah, pindahkan perintah antar tab ribbon, dan atur apa yang dilakukan roda serta tombol mouse.
keywords: gaya menu, menu, ribbon, bilah alat, baris perintah, pintasan keyboard, tombol cepat, pintasan, tombol, sesuaikan, pasang ulang, tombol teks, mouse, roda, balik, arah zoom, tombol tengah, tombol kanan, geser, ekspor, impor, beralih, terbiasa, drafting klasik, menu style, toolbar, command line, keyboard shortcuts, hotkeys, keys, customize, remap, rebind, shortcuts, text keys, wheel, invert, zoom direction, middle button, right button, pan, export, import, switching, familiar, drafting classic
from: 8bbf4f88
---

Perintah CadCraft sama apa pun cara Anda mengaksesnya, dan baris perintah selalu tersedia dengan aliasnya (`L`, `C`, `TR` …). **Gaya menu** hanya menentukan di mana tombol berada di layar, apa namanya di sana, dan tombol keyboard mana yang menjalankannya. Pilih di {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menu, tombol, dan mouse}}; perubahannya langsung terjadi, dan peramban ini mengingatnya.

## Tiga gaya

| Gaya | Yang Anda dapatkan |
|---|---|
| {{ui:CadCraft}} | Bilah alat CadCraft sendiri: File, Gambar, Ubah, Anotasi, Parametrik, Blok, Lembar, Sunting, dan Tampilan, masing-masing dengan menu {{ui:Lainnya}}. Titik awal. |
| {{ui:Drafting klasik}} | Ribbon yang disusun seperti program drafting 2D klasik: menu {{ui:File}} dan tombol cepat, lalu tab {{ui:Beranda}} (Gambar, Ubah, Anotasi, Layer, Blok, Properti, Utilitas, Papan klip), {{ui:Sisipkan}}, {{ui:Anotasi}}, {{ui:Parametrik}}, {{ui:Tampilan}}, {{ui:Kelola}}, {{ui:Keluaran}}, dan {{ui:3D}}. Ketik perintah seperti biasa. Tombol tengah menggeser; klik kanan adalah {{key:Enter}}, dan menyeret dengan tombol kanan tidak melakukan apa pun. |
| {{ui:Ribbon}} | Ribbon berisi tab tugas sederhana: {{ui:Gambar}}, {{ui:Ubah}}, {{ui:Anotasi}}, {{ui:Parametrik}}, {{ui:Blok}}, {{ui:Lembar}}, {{ui:Tampilan}}, {{ui:3D}}, dan {{ui:Alat}}, dengan menu {{ui:File}} dan tombol cepat di sebelah kanan. Tombol tengah dan kanan menggeser, seperti pada gaya CadCraft sendiri. |

Setiap gaya tetap memakai tombol CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, serta {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} untuk alat bantu drafting. Huruf tidak pernah menjadi tombol: CadCraft mengetiknya ke baris perintah.

Ribbon juga memuat alat panel Layer dan alat bantu drafting di bilah status. Tab {{ui:3D}} terisi setelah tab 3D di bawah gambar dibuka; alat 3D yang dipilih di tab Model akan membuka tab 3D terlebih dahulu, dan alat 2D yang dipilih di tab 3D akan kembali ke tab Model terlebih dahulu.

:::tip
Tombol yang termasuk tata letak bawaan CadCraft, tetapi oleh gaya Anda diberikan ke perintah lain, tidak melakukan apa pun, dan bilah status menyatakan ke mana perintahnya pindah ("Di Tombol saya, Ortho adalah Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}}, dan tombol panah selalu mempertahankan artinya. Saat perintah berjalan, atau saat huruf diketik di baris perintah, tombol menjadi milik baris perintah.
:::

## Buat sendiri

1. Pilih gaya yang paling dekat dengan keinginan Anda, lalu klik {{ui:Sesuaikan…}}.
2. Di {{ui:Tombol dan menu}}, temukan perintah (kotak pencarian membantu). Klik {{ui:Tambah tombol}} lalu tekan tombolnya. Klik sebuah tombol untuk melepasnya.
3. Dengan ribbon, {{ui:Letaknya}} memindahkan perintah ke tab dan panel lain, ke menu {{ui:File}}, atau ke {{ui:Hanya tombol}}.
4. Di {{ui:Mouse}}, atur roda dan tombol yang menggeser gambar.
5. Beri nama dan klik {{ui:Simpan}}.

Menyimpan gaya bawaan membuat salinan Anda sendiri ("Drafting klasik saya"); gaya bawaan tidak pernah berubah. Tombol yang diberikan ke dua perintah ditampilkan dengan warna merah dan harus diperbaiki sebelum Anda dapat menyimpannya.

## Tombol yang mengetik perintah

{{cmd:SHORTCUTS}} (Tampilan › Lainnya › {{ui:Pintasan keyboard…}}) memberi tombol satu baris perintah lengkap, misalnya {{key:Ctrl+Alt+L}} untuk `LINE` atau {{key:F9}} untuk `ZOOM E`. Tombol-tombol ini milik gaya yang sedang dipakai: saat versi ini pertama kali dibuka, tombol yang Anda buat di versi lama dibawa ke gaya Anda sendiri "Tombol CadCraft saya", sekali saja, dan tetap bekerja seperti sebelumnya. Mengekspor gaya ikut membawa tombol-tombol itu.

## Mouse

- **Roda mouse**: {{ui:Gulir ke atas memperbesar}} (awal) atau {{ui:Gulir ke atas memperkecil}}, dan seberapa cepat. Cubitan pada trackpad selalu memperbesar atau memperkecil sesuai arah gerakan jari Anda.
- **Geser gambar dengan**: tombol tengah, tombol kanan, atau keduanya. Klik kanan tanpa menyeret selalu {{key:Enter}}. Tombol kiri selalu memilih dan menggambar di CadCraft, jadi mencentangnya tidak mengubah apa pun di sini.
- **Seret di tampilan 3D**: tab 3D menyimpan tombolnya sendiri di setiap gaya (kiri untuk mengorbit, tengah dan kanan untuk menggeser).

## Bawa bersama Anda

{{ui:Ekspor}} menyimpan gaya yang sedang dipakai sebagai file `.ccinput.json` kecil; {{ui:Impor…}} menambahkannya, dari komputer lain atau dari rekan kerja. File impor hanya dapat menunjuk ke perintah CadCraft sendiri: apa pun selain itu dibiarkan dan dihitung di bilah status. {{ui:Hapus gaya ini}} menghapus gaya milik Anda sendiri.

:::note
Pengaturan ini tetap di peramban ini. {{ui:Gunakan gaya ini di setiap aplikasi}} di bawah kartu gaya membuat setiap aplikasi terbuka dengan gaya yang sesuai (bilah alatnya sendiri, ribbon, atau Drafting klasik), dengan perubahan yang Anda buat di setiap aplikasi. CadCraft tidak memiliki gaya bilah menu: ketika bilah menu aplikasi lain dipilih untuk setiap aplikasi, CadCraft tetap memakai bilah alatnya sendiri.
:::

Terkait: [Keyboard dan mouse](topic:keyboard) · [Pengaturan CadCraft](topic:settings) · [Dari perangkat lunak drafting lain](topic:coming-from) · [Alias perintah](topic:command-aliases)
