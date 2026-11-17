---
title: Gabungkan suntingan dua orang pada satu gambar
summary: Biarkan git, Fossil, atau Mercurial menggabungkan dua salinan DWG atau DXF objek demi objek, memakai kunci yang disimpan CadCraft pada setiap objek.
keywords: gabung, merge, git, fossil, mercurial, kontrol versi, version control, diff, konflik, conflict, tiga arah, three-way, cadcraft merge, kunci, key, gitattributes, DWG, DXF
from: 71482bf9
---

Dua orang menyunting gambar yang sama. Jika mereka mengubah objek yang berbeda, penggabungan dapat berjalan otomatis: tidak ada yang perlu dikerjakan ulang secara manual.

## Apa yang membuatnya bekerja

CadCraft memberi setiap objek yang Anda gambar sebuah **kunci** pendek yang tidak pernah berubah dan tidak pernah diberikan kepada dua objek. Kunci itu disimpan bersama objek di dalam DWG atau DXF (sebagai data tambahan yang disimpan program lain). Penggabungan mencari objek berdasarkan kunci itu, bukan berdasarkan posisinya dalam file, karena setiap program menomori ulang posisi saat menyimpan. Matikan ini di {{ui:Pengaturan}} › CadCraft › File ramah penggabungan jika Anda tidak pernah menggabungkan; file menjadi sekitar 10 persen lebih kecil.

Gambar yang disimpan sebelum kunci ada tetap dapat digabungkan: objeknya mendapat kunci dari posisinya dalam file, sama bagi setiap orang yang membukanya.

## Atur

Git membutuhkan dua baris sekali per repositori:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# sekali, di setiap komputer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Tanpa git, jalankan dengan tangan: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil dan Mercurial menerima ketiga file yang sama dalam pengaturan alat penggabungan mereka sendiri.

## Aturannya

- Objek yang hanya berubah di satu sisi akan diambil. Perubahan yang sama di kedua sisi diambil sekali.
- Properti yang sama diubah dengan dua cara adalah **konflik**: sisi Anda tetap dan laporan mencantumkan kedua nilai. Buka hasilnya, lihat objek itu, dan perbaiki secara manual.
- Objek yang ditambahkan di sisi mana pun akan dipertahankan. Objek yang dihapus di satu sisi dan tidak diubah di sisi lain akan dihapus. Dihapus di satu sisi dan diubah di sisi lain: dihapus, dan dilaporkan.
- Layer, blok, gaya teks dan dimensi, lembar, dan tampilan bernama digabungkan dengan cara yang sama. Batasan mengikuti objek yang disebutnya.
- Hasilnya ditulis dalam format file dan versi yang sama dengan milik Anda.

Tidak digabungkan: urutan objek digambar tetap milik Anda, lalu objek yang ditambahkan sisi lain. Perubahan pada definisi blok yang sama di kedua sisi adalah konflik, tidak pernah dicampur. Tidak ada yang diunggah; semuanya berjalan di komputer Anda.
