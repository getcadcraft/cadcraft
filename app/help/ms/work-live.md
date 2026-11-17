---
title: Bekerja pada satu lukisan bersama dengan Live TeamWork
summary: Apa yang berubah dalam CadCraft semasa anda berada dalam sesi Live TeamWork dari CadCraft Studio: kursor dan pilihan orang lain, objek yang sedang disunting, kunci hos, buat asal anda sendiri, dan menyertai dari pelayar pada rangkaian yang sama.
keywords: live, live teamwork, studio live, bersama, kerjasama, sunting bersama, sesi, kongsi live, sertai, kursor, ditahan, sedang disunting, kunci, livelock, liveunlock, livehold, tahan lapisan, tahan kawasan, mangga, buat asal, hos, pembantu, fail yang sama, ramai orang, perlahan, had, siapa yang mengubah, suntingan terkini, log suntingan
from: 0497d2a3
---

## Apa yang akan anda pelajari

Apa yang anda lihat dan apa yang berlaku kepada suntingan anda semasa beberapa orang bekerja pada satu lukisan serentak. CadCraft Studio memulakan dan menyertai sesi Live TeamWork (Kongsi live, Sertai); halaman ini tentang lukisan itu sendiri.

## Semua orang melukis serentak

Lukis dan sunting seperti biasa. Suntingan anda sendiri ditunjukkan serta-merta, walaupun sebelum orang lain menerimanya, dan suntingan mereka muncul pada skrin anda sejurus selepas mereka membuatnya. Setiap arahan berfungsi: lukisan, pengubahsuaian, lapisan, blok, helaian, dimensi, kekangan.

Dua orang boleh menukar objek yang sama. Apabila anda menukar perkara yang berbeza, seperti warna dan titik akhir satu garisan, kedua-dua perubahan dikekalkan. Apabila anda menukar perkara yang sama, perubahan yang lebih lewat menang.

Apa yang kekal milik anda sahaja: lapisan semasa, warna dan ketinggian teks untuk objek baharu, tetapan dimensi anda, pandangan anda, pemisahan skrin dan UCS. Lukisan dikongsi; cara anda melihatnya tidak.

## Orang lain pada lukisan anda

- **Kursor:** penunjuk setiap orang ditunjukkan dengan namanya dalam warna mereka sendiri, serta arahan yang mereka jalankan. Anda melihat kursor orang yang bekerja berhampiran apa yang ada di skrin anda.
- **Pilihan:** apa yang seseorang pilih digaris dalam warna mereka.
- **Sedang disunting:** objek yang dipilih seseorang membawa label seperti "Ana is editing". Anda masih boleh menukar warnanya atau mengalihkannya, tetapi anda tidak boleh memadam, meletupkan atau menaip semulanya sehingga mereka melepaskannya. Memilihnya memberitahu anda siapa yang memilikinya.
- **Siapa yang mengubahnya terakhir:** pilih satu objek yang orang lain ubah dalam sesi ini dan baris arahan memberitahu siapa, serta apa perubahannya ("Ben changed that last: CIRCLE."). Panel Live Studio menyenaraikan setiap suntingan terkini di bawah {{ui:Recent edits}}. Tiada apa daripada ini disimpan dalam lukisan: ia kekal selagi sesi berlangsung.

## Tahan lapisan atau kawasan semasa anda bekerja di sana

Pada lukisan besar dengan beberapa orang, nyatakan bahagian mana yang milik anda buat masa ini:

1. Taip `LIVEHOLD` dan tekan {{key:Enter}}.
2. Pilih `L` dan taip nama lapisan (Enter mengekalkan lapisan semasa), atau pilih `A` dan pilih dua sudut kawasan.
3. Suntingan orang lain pada lapisan itu, atau kepada objek dalam kawasan itu, dibatalkan dan mereka diberitahu bahawa anda bekerja di sana. Anda melihat kawasan anda sebagai bingkai putus-putus; orang lain melihatnya dalam warna anda dengan nama anda, dan lapisan yang anda tahan disenaraikan di bahagian atas kiri lukisan mereka.
4. `LIVEHOLD`, kemudian `R`, melepaskan semua yang anda tahan. Meninggalkan sesi juga melepaskannya.

Sesiapa dalam sesi boleh menahan, termasuk hos; kunci hos masih terpakai di atasnya. Tahanan tidak pernah disimpan dalam fail.

## Apabila suntingan dibatalkan

Salinan lukisan hos menyemak setiap suntingan. Beberapa tidak boleh masuk, dan CadCraft membatalkannya pada skrin anda dan memberitahu sebabnya pada baris arahan, contohnya:

- seseorang memadam objek, atau lapisan atau blok yang diperlukannya, sejurus sebelum anda;
- seseorang sedang menyunting objek itu, atau menahan lapisannya atau kawasan yang ada di dalamnya;
- hos telah mengunci objek itu;
- blok yang anda letakkan telah dibuang (purge), atau lapisan yang anda padam masih ada objek di atasnya.

## Buat asal membatalkan kerja anda sendiri

{{key:Mod+Z}} dan {{ui:Undo}} membatalkan arahan terakhir anda sendiri, semuanya, dan membiarkan kerja orang lain tidak terusik. Apabila seseorang telah menukar perkara yang sama sejak itu, tiada apa dibatalkan dan baris arahan memberitahu siapa yang menukarnya. {{key:Mod+Y}} membuat semula.

## Kunci (hos)

Hos boleh melindungi objek atau keseluruhan lapisan supaya tiada siapa menukarnya, termasuk hos, sehingga kuncinya dibuka:

1. Pilih objek, kemudian taip `LIVELOCK` dan tekan {{key:Enter}}. Atau taip `LIVELOCK` tanpa apa-apa dipilih dan pilih `L` untuk mengunci lapisan mengikut nama: objek yang ditambah ke lapisan itu kemudian turut dikunci.
2. Objek yang dikunci dilukis putus-putus dengan label "Locked by the host" pada skrin setiap orang.
3. `LIVEUNLOCK` membuka kuncinya dengan cara yang sama.

Kunci tergolong dalam sesi: ia tamat apabila sesi tamat dan tidak pernah disimpan dalam fail.

## Sertai dengan fail yang sama

Jika anda membuka fail yang sama seperti yang hos buka (dari folder kongsi atau salinan yang sama), sertai dari tetingkap CadCraft anda sendiri dalam Studio: buka panel {{ui:Live}} dan gunakan {{ui:Join here}} dengan kod hos. Hanya perubahan yang dibuat sejak hos membukanya dihantar, jadi lukisan besar bersedia serta-merta. Jika fail anda berbeza, lukisan hos menggantikannya pada skrin anda (fail anda kekal seperti sediakala). Ini hanya berfungsi selagi lukisan anda tidak berubah sejak anda membukanya.

## Pembantu dalam sesi langsung

Pembantu yang bersambung ke tetingkap CadCraft anda (lihat bantuan tentang bekerja dengan pembantu AI) menyertai sesi sebagai peserta sendiri, ditunjukkan kepada semua orang sebagai "Assistant (via <your name>)". Hos membenarkannya masuk, seperti untuk orang; pembantu hos sendiri menyertai serta-merta. Perubahannya mempunyai buat asal sendiri: {{key:Mod+Z}} anda membatalkan kerja anda, dan buat asal pembantu hanya membatalkan langkahnya sendiri. Ia meninggalkan sesi apabila anda memutuskan sambungannya atau keluar, dan ia hanya boleh bekerja dalam sesi selagi anda boleh menyunting.

## Sertai dari pelayar

Rakan sepasukan tanpa Studio boleh mengimbas gambar di bawah kod hos dengan telefon, tablet atau komputer pada rangkaian yang sama. CadCraft dibuka dalam pelayar, meminta nama anda pada baris arahan, dan dipenuhi dengan lukisan hos sebaik hos membenarkan anda masuk. Pautan jemputan membolehkan seseorang menyertai dari rangkaian lain: hos memerlukan tempat Team Cloud Plan untuk aplikasi, semua orang lain menyertai percuma, dan pautan itu hanya berfungsi selagi sesi hos dibuka.

## Ramai orang pada satu lukisan

Setiap suntingan pergi kepada semua orang dalam sesi, jadi makin ramai orang, makin lama setiap perubahan sampai kepada setiap seorang, dan komputer riba serta sambungan yang lebih perlahan akan ketinggalan dahulu. Saiz biasa sesi ialah 20 orang; hos boleh membenarkan lebih ramai untuk satu sesi (lihat bantuan tentang bekerja bersama secara langsung). Jika lukisan terasa perlahan dengan ramai orang, kurangkan bilangan orang, kurangkan bilangan yang menyunting pada masa yang sama, atau gunakan sambungan yang lebih baik.

## Apabila sesi tamat

Hanya hos menyimpan lukisan. Apabila hos menamatkan sesi, semua orang lain menyimpan salinan yang belum disimpan: simpannya jika anda mahu mengekalkannya.

:::note
Sesuatu yang dibatalkan dilukis di atas objek di sekelilingnya pada skrin anda sendiri sehingga anda membuka semula lukisan. Hatch dan objek berisi yang bertindih mungkin kelihatan berbeza daripada salinan hos; lukisan itu sendiri adalah sama.
:::
