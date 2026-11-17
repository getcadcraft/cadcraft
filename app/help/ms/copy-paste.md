---
title: Salin, tampal dan pendua
summary: Salin objek ke papan keratan CadCraft, tampal di tempat yang anda klik atau di tempat yang sama, pendua dengan penunjuk, dan bawa kerja dari lukisan atau tab lain.
keywords: salin, potong, tampal, tampal di tempat yang sama, pendua, papan keratan, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, antara lukisan, tab lain, titik asas
from: 4b9f29d3
---

## Apa yang akan anda pelajari

Cara menyalin objek ke papan keratan, menampalnya di tempat yang anda klik, menampalnya pada koordinat sendiri, menduplikasikannya dengan penunjuk, memotongnya, dan membawanya ke dalam lukisan lain. Semua ini juga terdapat dalam kumpulan {{ui:Sunting}} bar alat: {{ui:Salin}}, {{ui:Tampal}} dan menu {{ui:Lagi}}.

## Salin dan tampal di tempat yang anda klik

1. Pilih objek: klik padanya, atau seret tetingkap.
2. Tekan {{key:Mod+C}}, atau klik {{ui:Salin}} dalam kumpulan {{ui:Sunting}}. Baris arahan menyatakan berapa banyak objek disalin. Ia kekal dipilih.
3. Tekan {{key:Mod+V}}, atau klik {{ui:Tampal}}. Salinan muncul pada kursor, bergantung dari bucu kiri bawah objek yang disalin.
4. Klik di tempat bucu itu pergi, atau taip satu titik seperti `2000,500` dan tekan {{key:Enter}}. Snap objek dan Ortho berfungsi seperti biasa.

Objek yang ditampal dipilih, supaya anda boleh mengalihkan atau mengubahnya dengan segera. Satu {{key:Mod+Z}} mengambil keseluruhan tampalan.

:::tip
Mahu salinan bergantung dari satu titik yang anda pilih, seperti bucu dinding? Taip `COPYBASE`, klik titik asas, pilih objek, dan tekan {{key:Enter}}. Tampalan kemudian meletakkan titik itu di tempat anda klik. Untuk menggantung setiap salinan dari pusatnya dan bukan dari bucu kiri bawah, tukar {{ui:Titik tampal}} dalam [Tetapan CadCraft](topic:settings).
:::

## Tampal di tempat yang sama

Tekan {{key:Mod+Shift+V}}, atau pilih {{ui:Tampal di tempat yang sama}} dalam menu {{ui:Lagi}}. Salinan masuk tepat pada koordinat tempat ia disalin, tanpa klik. Gunakannya untuk membawa objek ke dalam lukisan lain di tempat yang sama, atau dari satu helaian ke helaian lain.

## Pendua dan alih

1. Pilih objek.
2. Tekan {{key:Mod+D}}, atau pilih {{ui:Pendua dan alih}} dalam menu {{ui:Lagi}}.
3. Satu salinan berada di atas yang asal dan bergerak mengikut penunjuk. Klik di tempat ia pergi. Anda juga boleh taip anjakan seperti `@0,-600`, atau jarak ke arah kursor.

{{key:Esc}} sebelum klik tidak meninggalkan apa-apa. Pendua ialah satu langkah buat asal dan tidak menyentuh papan keratan.

## Potong

Tekan {{key:Mod+X}}, atau pilih {{ui:Potong}} dalam menu {{ui:Lagi}}. Objek pergi ke papan keratan dan dipadam dari lukisan, dalam satu langkah buat asal. Tampalkannya semula dengan {{key:Mod+V}} atau {{key:Mod+Shift+V}}.

## Antara lukisan dan tab

Papan keratan menyimpan salinannya apabila anda membuka lukisan lain, dan ia dikongsi oleh setiap tab CadCraft dalam pelayar ini. Salin dalam satu tab, kemudian tekan {{key:Mod+V}} dalam tab lain.

- Blok yang digunakan objek datang bersamanya. Jika lukisan tempat anda menampal sudah mempunyai blok dengan nama yang sama, takrifan miliknya digunakan, seperti dalam AutoCAD.
- Lapisan yang digunakan objek ditambah, dengan warna dan tetapan yang ada padanya.
- Salinan tidak diskala semula apabila dua lukisan menggunakan unit yang berbeza: CadCraft memberitahu anda, dan anda boleh guna {{cmd:SCALE}} selepas itu.
- Viewport kekal pada helaiannya; ia dikecualikan daripada salinan.

:::note
Papan keratan ialah milik CadCraft sendiri. Anda tidak boleh menampal objek CadCraft ke dalam program lain, atau menampal dari program lain ke dalam CadCraft: simpan sebagai DWG atau DXF sebaliknya. Salinan yang sangat besar mungkin terlalu besar untuk dikongsi antara tab; baris arahan kemudian hanya menyatakan bahawa tab ini sahaja boleh menampalnya.
:::

## Kesilapan biasa

- **{{key:Mod+V}} menampal teks ke dalam baris arahan.** Anda telah menaip sesuatu di situ, jadi kekunci bertindak ke atas teks. Tekan {{key:Esc}} untuk membersihkannya, kemudian tekan {{key:Mod+V}} sekali lagi.
- **Tiada apa berlaku, dan bar status menyuruh anda menamatkan arahan semasa.** Arahan lain sedang berjalan. Tekan {{key:Esc}} dahulu.
- **Tampalan jatuh jauh.** Ia bergantung dari bucu kiri bawah apa yang anda salin, yang mungkin objek jauh yang anda pilih secara tidak sengaja. Guna {{ui:Tampal di tempat yang sama}}, atau salin dengan `COPYBASE`.
- **"Tiada yang ditampal" dengan sebab.** Apa yang ditinggalkan oleh tab lain pada papan keratan tidak dapat dibaca (ia rosak, atau diubah dengan tangan). Salin semula objek-objek itu.

Lihat senarai penuh kekunci dalam [Papan kekunci dan tetikus](topic:keyboard), dan setiap gesaan dalam [Rujukan arahan](topic:commands#clipboard).
</content>
