---
title: Lukis teks dengan fon SHX anda sendiri
summary: Berikan CadCraft satu folder fon SHX (atau pilih fail) dan gaya teks yang menamakannya akan dilukis dengannya, pada skrin dan dalam plot atau PDF, dengan tinggi, faktor lebar dan kecondongan gaya.
keywords: shx, fon, font, fon bentuk, big font, bigfont, unifont, warisan, persia, farsi, arab, gaya teks, fon hilang, fon digantikan, SHXFONTS, folder, terbalik, susunan visual, simplex, isocp
from: 14b0a4ab
---

Lukisan daripada program lain sering menamakan **fon SHX** dalam gaya teks mereka, dan DWG tidak membawanya. Tanpa fon itu, CadCraft melukis teks tersebut dengan rupa sendirinya, yang memadai untuk teks Latin biasa tetapi tidak untuk fon lama yang memetakan kod aksara biasa kepada bentuk huruf lain, seperti anotasi Persia warisan.

Berikan CadCraft fon-fonnya, dan ia melukis teks dengannya.

## Muatkan fon anda

Taip {{cmd:SHXFONTS}} (`SHX`) dan pilih:

- {{ui:Folder}} (CadCraft Studio): pilih satu folder. Setiap fail `.shx` di dalamnya dibaca sekarang, dan sekali lagi setiap kali CadCraft dimulakan.
- {{ui:Fail}} (pelayar): pilih satu atau beberapa fail `.shx`. Ia disimpan dalam pelayar ini dan tidak pernah dimuat naik.
- {{ui:Senarai}}: fon yang dimuatkan, dan yang dinamakan oleh lukisan terbuka tetapi belum anda muatkan.
- {{ui:Alih keluar (R)}} dan {{ui:Kosongkan}}: lupakan satu fon, atau semuanya.

CadCraft tidak boleh menyertakan fon pihak ketiga, jadi ia tidak pernah membekalkannya: ia datang daripada anda. Lukisan hanya menamakan fonnya, dan ia tidak menyimpan salinan.

## Apa yang berlaku

Nama fon gaya teks dipadankan dengan fon yang dimuatkan mengikut namanya, tanpa mengira huruf besar-kecil, folder dan `.shx` (`SIMPLEX.SHX` menemui `simplex`). Teks dalam gaya sedemikian dilukis sebagai garisan, pada skrin, dalam plot dan dalam PDF, pada tempat, tinggi, putaran, faktor lebar dan sudut condong teks itu sendiri. Lebarnya ialah milik fon itu sendiri, jadi penjajaran {{ui:Pusat}} dan {{ui:Kanan}}, pembalutan dan pemilihan sepadan dengan apa yang anda lihat. Gaya yang fonnya tidak dimuatkan mengekalkan rupa terbina dalam, dan apabila anda membuka lukisan yang menamakan fon yang belum anda muatkan, baris arahan memaklumkannya.

Gaya Standard turut dikira: lukisan yang gaya Standardnya menamakan fon sendiri akan mengekalkannya.

## Fon yang sudah dalam susunan visual

Banyak fon SHX Persia dan Arab lama memegang huruf yang sudah dibentuk untuk skrin dan dilukis dari kiri ke kanan, jadi teks yang ditaip dalam susunan logik keluar terbalik. Taip {{cmd:SHXFONTS}}, pilih {{ui:Terbalik (R)}}, dan namakan fon itu: teksnya kemudian disusun huruf terakhir dahulu. Jalankan semula untuk membatalkan. Suis itu tergolong dalam fon, disimpan dalam pelayar ini, dan tidak disimpan dalam lukisan.

## Apa yang belum diliputi

- Teks dengan kod format sebaris (warna, susunan dalam MTEXT) kekal dengan rupa terbina dalam.
- Fon besar (jenis dwibait) mengisi kod yang tiada dalam fon utama, tetapi teks dalam kod halaman Asia Timur yang sudah ditukar CadCraft kepada Unicode tidak dipetakan semula kepada kod dwibait fon itu.
- Pembaca fon mengikuti penerangan format yang diterbitkan dan diuji pada fon yang dibuat untuk CadCraft. Jika salah satu fon anda dilukis dengan salah, hantarkan fon dan lukisan itu kepada kami.
