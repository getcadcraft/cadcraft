---
title: Mouse, trackpad, dan sentuh
summary: Cara memperbesar, menggeser, klik kanan, dan memilih di CadCraft dengan mouse roda, trackpad Mac atau PC, atau layar sentuh, serta perbedaannya antar peramban.
keywords: trackpad, touchpad, magic mouse, sentuh, tablet, ipad, geser, zoom, cubit, klik kanan, dua jari, tombol tengah, peramban, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft dirancang untuk mouse dengan roda. Semuanya juga berfungsi dengan trackpad, dengan beberapa kebiasaan yang perlu dipelajari. Layar sentuh berfungsi untuk memilih, dengan batasan.

## Mouse roda

- **Zoom:** putar roda. Gambar membesar atau mengecil di sekitar crosshair, jadi arahkan ke bagian yang ingin Anda lihat.
- **Geser:** tahan roda ditekan dan seret, atau seret dengan tombol kanan.
- **Zoom ke semuanya:** klik dua kali roda, atau klik {{ui:Batas}}.
- **Kembali ke tampilan sebelumnya:** klik {{ui:Sebelumnya}} di grup Tampilan, atau ketik `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Satu rangkaian langkah roda dihitung sebagai satu tampilan, sehingga satu {{ui:Sebelumnya}} membatalkannya. Simpan tampilan yang ingin Anda kembali dengan {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** klik kanan.

## Trackpad

:::mac
- **Geser:** gerakkan dua jari di trackpad, ke arah mana pun: gambar mengikuti jari Anda. Anda juga dapat menyeret dengan klik dua jari yang ditahan (seret tombol kanan).
- **Zoom:** cubit dengan dua jari. Zoom mengikuti crosshair.
- **Klik kanan (Enter):** klik dengan dua jari. Aktifkan "Secondary click" di **System Settings**, lalu **Trackpad**, jika tidak ada yang terjadi. Control-klik mungkin dihitung sebagai klik biasa di CadCraft, bukan klik kanan, jadi gunakan klik dua jari.
- **Zoom ke area:** klik {{ui:Jendela}} di grup Tampilan, lalu klik dua sudut.
:::

:::windows linux
- **Geser:** gerakkan dua jari di touchpad, ke arah mana pun: gambar mengikuti jari Anda. Anda juga dapat menyeret dengan tombol kanan yang ditahan.
- **Zoom:** cubit dengan dua jari. Zoom mengikuti crosshair.
- **Klik kanan (Enter):** klik dengan dua jari, atau klik sudut kanan bawah touchpad, tergantung pengaturan touchpad Anda.
- **Zoom ke area:** klik {{ui:Jendela}} di grup Tampilan, lalu klik dua sudut.
:::

Menahan {{key:Space}} lalu menyeret **tidak** menggeser gambar di CadCraft: {{key:Space}} adalah Enter.

Mouse roda tetap memperbesar, satu langkah setiap kali. Trackpad yang mengirim gulungannya dalam langkah utuh, seperti roda, memperbesar dengan gulir dua jari alih-alih menggeser: perkecil, arahkan ke area yang Anda inginkan, lalu perbesar lagi. Tab 3D tetap memakai gerakan trackpad sendiri (lihat [Model dalam 3D](topic:3d-solids#look-around)).

## Layar sentuh dan tablet

CadCraft membaca jari sebagai klik mouse:

- Ketukan memilih titik atau objek, atau memilih.
- Menyeret jari pada ruang kosong menggambar laso (ke kanan dulu jendela, ke kiri dulu silang; lihat [Pemilihan laso](topic:lasso-selection)).
- Di {{cmd:TRIM}} dan {{cmd:EXTEND}}, menyeret jari melewati potongan-potongan akan memangkas atau memperpanjang semuanya.
- Menyeret grip objek yang dipilih akan memindahkan grip (grip dan kotak pilih dibuat lebih besar untuk jari).
- **Cubit** dengan dua jari untuk zoom di sekitar titik di antaranya; gerakkan dua jari bersamaan untuk **menggeser**. Jari kedua membatalkan apa pun yang dimulai jari pertama, sehingga cubitan tidak pernah meninggalkan jejak.
- **Tekan lama** (tahan diam sekitar setengah detik) adalah klik kanan: {{key:Enter}}. Ini mengakhiri perintah, menyelesaikan pilihan, atau mengulang perintah terakhir.

Di bawah baris perintah muncul **baris tombol**: {{ui:Esc}}, {{ui:Urungkan}}, {{ui:Ulangi}}, karakter yang disembunyikan keyboard tablet (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, tombol keyboard, dan {{ui:Enter}} yang besar. Ketuk tombol keyboard (atau baris perintah) untuk mengetik perintah atau angka.

Tidak ada hover, jadi penanda snap hanya muncul di tempat jari Anda berada.

:::touch
Anda menggunakan layar sentuh. Untuk lebih dari sekadar melihat sebentar, keyboard dan mouse atau trackpad yang terhubung membuat CadCraft jauh lebih mudah digunakan.
:::

## Peramban

CadCraft bekerja sama di Chrome, Edge, Firefox dan Safari, di Mac, Windows dan Linux. Perbedaannya kecil:

| Topik | Yang perlu diketahui |
|---|---|
| Membuka DWG | Gambar besar membutuhkan beberapa detik untuk dibaca di setiap peramban; baris status menampilkan "Reading …" selama itu |
| Unduhan | Setiap peramban memutuskan ke mana unduhan pergi dan apakah bertanya dulu; lihat [Peramban dan komputer](common:browsers) |
| Buka untuk dicetak | Membuka PDF di tab baru. Jika peramban memblokir pop-up, CadCraft mengunduh PDF sebagai gantinya |
| F7 | Firefox mungkin menawarkan penjelajahan caret; pilih Tidak |
| Meninggalkan dengan perubahan yang belum disimpan | Setiap peramban menampilkan pertanyaan "Leave site?" sendiri, yang tidak dapat diubah CadCraft |

:::safari
Di Safari, PDF yang dibuka dengan {{ui:Buka untuk dicetak}} mungkin tampil di tab tanpa mencetak: gunakan **File**, lalu **Cetak**.
:::

:::firefox
Firefox mungkin bertanya apa yang harus dilakukan dengan setiap unduhan. Pilih untuk menyimpan file, atau ubah ini sekali di pengaturan Firefox pada bagian Unduhan.
:::
