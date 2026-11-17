---
title: Gabungkan suntingan dua orang bagi satu lukisan
summary: Benarkan git, Fossil atau Mercurial menggabungkan dua salinan DWG atau DXF objek demi objek, menggunakan kunci yang CadCraft simpan pada setiap objek.
keywords: gabung, git, fossil, mercurial, kawalan versi, diff, konflik, tiga hala, cadcraft merge, kunci, gitattributes, DWG, DXF
from: 71482bf9
---

Dua orang menyunting lukisan yang sama. Jika mereka menukar objek yang berbeza, penggabungan boleh dilakukan secara automatik: tiada apa yang perlu diulang secara manual.

## Apa yang menjadikannya berfungsi

CadCraft memberikan setiap objek yang anda lukis satu **kunci** pendek yang tidak pernah berubah dan tidak pernah diberikan kepada dua objek. Ia disimpan bersama objek dalam DWG atau DXF (sebagai data tambahan yang disimpan oleh program lain). Penggabungan mencari objek melalui kunci itu, bukan melalui kedudukannya dalam fail, kerana setiap program menomborkan semula kedudukan apabila ia menyimpan. Matikan ini dalam {{ui:Tetapan}} › CadCraft › Fail mesra gabungan jika anda tidak pernah menggabung; fail menjadi kira-kira 10 peratus lebih kecil.

Lukisan yang disimpan sebelum kunci wujud masih boleh digabungkan: objeknya mendapat kunci daripada kedudukannya dalam fail, sama untuk semua orang yang membukanya.

## Sediakan

Git memerlukan dua baris sekali bagi setiap repositori:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# satu kali, pada setiap komputer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Tanpa git, jalankan secara manual: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil dan Mercurial mengambil tiga fail yang sama dalam tetapan alat penggabungan mereka sendiri.

## Peraturan

- Objek yang ditukar pada satu sisi sahaja diambil. Perubahan yang sama pada kedua-dua sisi diambil sekali.
- Sifat yang sama ditukar dengan dua cara ialah **konflik**: sisi anda kekal dan laporan menyenaraikan kedua-dua nilai. Buka hasil, lihat objek itu, dan betulkannya secara manual.
- Objek yang ditambah pada mana-mana sisi dikekalkan. Objek yang dialih keluar pada satu sisi dan tidak disentuh pada sisi lain dialih keluar. Dialih keluar pada satu sisi dan ditukar pada sisi lain: dialih keluar, dan dilaporkan.
- Lapisan, blok, gaya teks dan dimensi, helaian dan pandangan bernama digabungkan dengan cara yang sama. Kekangan mengikut objek yang dinamakannya.
- Hasil ditulis dalam format fail dan versi yang sama seperti milik anda.

Tidak digabungkan: susunan objek dilukis ialah milik anda, kemudian objek yang ditambah oleh sisi lain. Perubahan pada takrif blok yang sama pada kedua-dua sisi ialah konflik, tidak sekali-sekala dicampurkan. Tiada apa yang dimuat naik; semuanya berjalan pada komputer anda.
