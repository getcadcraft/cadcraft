---
title: Tetikus, pad sentuh dan skrin sentuh
summary: Cara zum, pan, klik kanan dan pilih dalam CadCraft dengan tetikus roda, pad sentuh Mac atau PC, atau skrin sentuh, dan apa yang berbeza antara pelayar.
keywords: pad sentuh, trackpad, touchpad, magic mouse, sentuh, tablet, ipad, pan, zum, cubit, klik kanan, dua jari, butang tengah, pelayar, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft direka untuk tetikus dengan roda. Semuanya turut berfungsi dengan pad sentuh, dengan beberapa tabiat yang perlu dipelajari. Skrin sentuh berfungsi untuk memilih, dengan had.

## Tetikus roda

- **Zum:** gulung roda. Lukisan di-zum mengikut silang, jadi tunjuk pada apa yang anda mahu lihat.
- **Pan:** tahan roda ke bawah dan seret, atau seret dengan butang kanan.
- **Zum kepada semua:** klik dua kali roda, atau klik {{ui:Lingkungan}}.
- **Kembali ke pandangan sebelumnya:** klik {{ui:Sebelumnya (P)}} dalam kumpulan Paparan, atau taip `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Satu siri langkah roda dikira sebagai satu pandangan, jadi satu {{ui:Sebelumnya (P)}} membatalkannya. Simpan pandangan yang anda kerap kembali kepada dengan {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** klik kanan.

## Pad sentuh

:::mac
- **Pan:** gerakkan dua jari pada pad sentuh, ke mana-mana arah: lukisan mengikut jari anda. Anda juga boleh seret dengan klik dua jari yang ditahan (seretan butang kanan).
- **Zum:** cubit dengan dua jari. Zum mengikut silang.
- **Klik kanan (Enter):** klik dengan dua jari. Hidupkan "Secondary click" dalam **System Settings**, kemudian **Trackpad**, jika ia tidak berbuat apa-apa. Control-klik mungkin dikira sebagai klik biasa dalam CadCraft dan bukannya klik kanan, jadi gunakan klik dua jari.
- **Zum ke kawasan:** klik {{ui:Tetingkap (W)}} dalam kumpulan Paparan dan klik dua bucu.
:::

:::windows linux
- **Pan:** gerakkan dua jari pada pad sentuh, ke mana-mana arah: lukisan mengikut jari anda. Anda juga boleh seret dengan butang kanan yang ditahan.
- **Zum:** cubit dengan dua jari. Zum mengikut silang.
- **Klik kanan (Enter):** klik dengan dua jari, atau klik bucu kanan bawah pad sentuh, bergantung pada tetapan pad sentuh anda.
- **Zum ke kawasan:** klik {{ui:Tetingkap (W)}} dalam kumpulan Paparan dan klik dua bucu.
:::

Menahan {{key:Space}} dan menyeret **tidak** melakukan pan dalam CadCraft: {{key:Space}} ialah Enter.

Tetikus roda masih zum, satu langkah pada satu masa. Pad sentuh yang menghantar tatal dalam langkah penuh, seperti roda, zum dengan tatal dua jari dan bukannya pan: zum keluar, tunjuk kawasan yang anda mahu dan zum masuk semula. Tab 3D mengekalkan gerakan pad sentuhnya sendiri (lihat [Model dalam 3D](topic:3d-solids#look-around)).

## Skrin sentuh dan tablet

CadCraft membaca jari sebagai klik tetikus:

- Ketik memilih satu titik atau objek, atau memilih.
- Menyeret jari pada ruang kosong melukis lasso (bergerak ke kanan dahulu ialah tetingkap, ke kiri dahulu ialah silang; lihat [Pemilihan lasso](topic:lasso-selection)).
- Dalam {{cmd:TRIM}} dan {{cmd:EXTEND}}, menyeret jari melalui kepingan memangkas atau memanjangkan semuanya.
- Menyeret grip objek yang dipilih menggerakkan grip (grip dan kotak pilih lebih besar untuk jari).
- **Cubit** dengan dua jari untuk zum mengikut titik di antaranya; gerakkan dua jari bersama untuk **pan**. Jari kedua membatalkan apa yang dimulakan oleh jari pertama, jadi cubitan tidak meninggalkan kesan.
- **Tekan lama** (tahan tidak bergerak kira-kira setengah saat) ialah klik kanan: {{key:Enter}}. Ia menamatkan arahan, menyelesaikan pilihan, atau mengulang arahan terakhir.

Di bawah baris arahan, **baris kekunci** muncul: {{ui:Esc}}, {{ui:Buat asal}}, {{ui:Buat semula}}, aksara yang disembunyikan oleh papan kekunci tablet (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, butang papan kekunci, dan {{ui:Enter}} yang besar. Ketik butang papan kekunci (atau baris arahan) untuk menaip arahan atau nombor.

Tiada hover, jadi penanda snap hanya menunjukkan di tempat jari anda berada.

:::touch
Anda menggunakan skrin sentuh. Untuk lebih daripada sekadar tinjauan pantas, papan kekunci dan tetikus atau pad sentuh yang disambungkan menjadikan CadCraft jauh lebih mudah digunakan.
:::

## Pelayar

CadCraft berfungsi sama dalam Chrome, Edge, Firefox dan Safari, pada Mac, Windows dan Linux. Perbezaannya kecil:

| Topik | Perkara yang perlu diketahui |
|---|---|
| Membuka DWG | Lukisan besar mengambil beberapa saat untuk dibaca dalam setiap pelayar; baris status menunjukkan "Reading …" sementara itu |
| Muat turun | Setiap pelayar menentukan ke mana muat turun pergi dan sama ada ia bertanya dahulu; lihat [Pelayar dan komputer](common:browsers) |
| {{ui:Buka untuk cetak}} | Membuka PDF dalam tab baharu. Jika pelayar menyekat pop-up, CadCraft memuat turun PDF sebaliknya |
| F7 | Firefox mungkin menawarkan semakan kursor; pilih Tidak |
| Keluar dengan perubahan yang belum disimpan | Setiap pelayar menunjukkan soalannya sendiri untuk meninggalkan laman, yang CadCraft tidak dapat ubah |

:::safari
Dalam Safari, PDF yang dibuka dengan {{ui:Buka untuk cetak}} mungkin dipaparkan dalam tab tanpa dicetak: gunakan **File**, kemudian **Print**.
:::

:::firefox
Firefox mungkin bertanya apa yang perlu dilakukan dengan setiap muat turun. Pilih untuk menyimpan fail, atau tukar ini sekali dalam tetapan Firefox di bawah Muat turun.
:::
