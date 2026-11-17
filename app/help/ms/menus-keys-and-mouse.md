---
title: Menu, kekunci dan tetikus
summary: Pilih gaya menu yang sepadan dengan cara anda sudah bekerja, berikan mana-mana arahan kekunci sendiri atau kekunci yang menaip arahan, pindahkan arahan antara tab reben, dan tetapkan apa yang dilakukan roda dan butang tetikus.
keywords: gaya menu, menu, reben, bar alat, baris arahan, pintasan papan kekunci, pintasan, kekunci, sesuaikan, tetapkan semula, kekunci teks, tetikus, roda, songsang, arah zum, butang tengah, butang kanan, pan, eksport, import, bertukar, biasa, lukisan klasik
from: 8bbf4f88
---

Arahan CadCraft sama sahaja walau bagaimana anda mencapainya, dan baris arahan sentiasa ada dengan alias-aliasnya (`L`, `C`, `TR` …). **Gaya menu** hanya menentukan di mana butang diletakkan pada skrin, apa namanya di sana dan kekunci mana yang menjalankannya. Pilih satu dalam {{ui:Tetapan}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menu, kekunci dan tetikus}}; perubahan itu serta-merta, dan pelayar ini mengingatinya.

## Tiga gaya

| Gaya | Apa yang anda dapat |
|---|---|
| {{ui:CadCraft}} | Bar alat CadCraft sendiri: Fail, Lukis, Ubah, Anotasi, Parametrik, Blok, Helaian, Sunting dan Pandangan, setiap satu dengan menu {{ui:Lagi}}. Titik permulaan. |
| {{ui:Lukisan klasik}} | Reben yang disusun seperti cara program lukisan 2D klasik menyusunnya: menu {{ui:Fail}} dan butang pantas, kemudian tab {{ui:Laman utama}} (Lukis, Ubah, Anotasi, Lapisan, Blok, Sifat, Utiliti, Papan keratan), {{ui:Selit}}, {{ui:Anotasi}}, {{ui:Parametrik}}, {{ui:Pandangan}}, {{ui:Urus}}, {{ui:Output}} dan {{ui:3D}}. Taip arahan seperti biasa. Butang tengah melakukan pan; klik kanan ialah {{key:Enter}}, dan menyeret dengan butang kanan tidak melakukan apa-apa. |
| {{ui:Reben}} | Reben tab tugas yang biasa: {{ui:Lukis}}, {{ui:Ubah}}, {{ui:Anotasi}}, {{ui:Parametrik}}, {{ui:Blok}}, {{ui:Helaian}}, {{ui:Pandangan}}, {{ui:3D}} dan {{ui:Alat}}, dengan menu {{ui:Fail}} dan butang pantas di sebelah kanan. Butang tengah dan kanan melakukan pan, seperti dalam gaya CadCraft sendiri. |

Setiap gaya mengekalkan kekunci CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, dan {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} untuk bantuan lukisan. Huruf tidak pernah menjadi kekunci: CadCraft menaipnya ke dalam baris arahan.

Reben juga memegang alat panel Lapisan dan bantuan lukisan bar status. Tab {{ui:3D}} diisi selepas tab 3D di bawah lukisan dibuka; alat 3D yang dipilih pada tab Model membuka tab 3D dahulu, dan alat 2D yang dipilih pada tab 3D kembali ke tab Model dahulu.

:::tip
Kekunci yang tergolong dalam susun atur CadCraft sendiri tetapi yang diberikan oleh gaya anda kepada arahan lain tidak melakukan apa-apa, dan bar status memberitahu ke mana arahannya pergi ("Dalam Kekunci saya, Ortho ialah Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} dan anak panah sentiasa mengekalkan maknanya. Semasa arahan berjalan, atau semasa huruf ditaip pada baris arahan, kekunci tergolong pada baris arahan.
:::

## Sesuaikan mengikut cara anda

1. Pilih gaya yang paling hampir dengan apa yang anda mahu, kemudian klik {{ui:Sesuaikan…}}.
2. Pada {{ui:Kekunci dan menu}}, cari arahan (kotak carian membantu). {{ui:Tambah kekunci}} dan tekan kekunci itu. Klik kekunci untuk mengalihkannya.
3. Dengan reben, {{ui:Tempat ia berada}} memindahkan arahan ke tab dan panel lain, ke menu {{ui:Fail}}, atau ke {{ui:Kekunci sahaja}}.
4. Pada {{ui:Tetikus}}, tetapkan roda dan butang yang melakukan pan pada lukisan.
5. Beri namanya dan klik {{ui:Simpan}}.

Menyimpan gaya terbina dalam membuat salinan anda sendiri ("Lukisan klasik saya"); yang terbina dalam tidak pernah berubah. Kekunci yang diberikan kepada dua arahan dipaparkan dalam merah dan mesti dibetulkan sebelum anda boleh menyimpan.

## Kekunci yang menaip arahan

{{cmd:SHORTCUTS}} (Pandangan › Lagi › {{ui:Pintasan papan kekunci…}}) memberikan kekunci keseluruhan baris arahan, seperti {{key:Ctrl+Alt+L}} untuk `LINE` atau {{key:F9}} untuk `ZOOM E`. Kekunci ini tergolong pada gaya yang digunakan: kali pertama versi ini dibuka, kekunci yang anda buat dalam versi lama dibawa ke dalam gaya anda sendiri "Kekunci CadCraft saya", sekali sahaja, dan berfungsi seperti dahulu. Mengeksport gaya itu turut membawanya bersama.

## Tetikus

- **Roda tetikus**: {{ui:Skrol ke atas mengezum masuk}} (permulaan) atau {{ui:Skrol ke atas mengezum keluar}}, dan betapa pantas. Cubitan pad jejak sentiasa melakukan zum mengikut arah jari anda bergerak.
- **Pan lukisan dengan**: butang tengah, butang kanan, atau kedua-duanya. Klik kanan tanpa menyeret sentiasa ialah {{key:Enter}}. Butang kiri sentiasa memilih dan melukis dalam CadCraft, jadi menandainya tidak mengubah apa-apa di sini.
- **Seret dalam pandangan 3D**: tab 3D mengekalkan butangnya sendiri dalam setiap gaya (kiri mengorbit, tengah dan kanan melakukan pan).

## Bawa bersama anda

{{ui:Eksport}} menyimpan gaya yang digunakan sebagai fail `.ccinput.json` kecil; {{ui:Import…}} menambah satu, dari komputer lain atau rakan sekerja. Fail yang diimport hanya boleh menunjuk kepada arahan CadCraft sendiri: apa-apa lain di dalamnya ditinggalkan dan dikira dalam bar status. {{ui:Padam gaya ini}} mengalih keluar salah satu gaya anda sendiri.

:::note
Tetapan ini kekal dalam pelayar ini. {{ui:Gunakan gaya ini dalam setiap aplikasi}} di bawah kad gaya menjadikan setiap aplikasi dibuka dalam gaya yang sepadan (bar alat sendiri, reben atau Lukisan klasik), dengan perubahan yang anda buat dalam setiap aplikasi. CadCraft tidak mempunyai gaya bar menu: apabila bar menu aplikasi lain dipilih untuk setiap aplikasi, CadCraft mengekalkan bar alatnya sendiri.
:::

Berkaitan: [Papan kekunci dan tetikus](topic:keyboard) · [Tetapan CadCraft](topic:settings) · [Datang daripada perisian lukisan lain](topic:coming-from) · [Alias arahan](topic:command-aliases)
