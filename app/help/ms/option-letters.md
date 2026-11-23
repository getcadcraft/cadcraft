---
title: Berikan pilihan arahan huruf anda sendiri
summary: Jawab pilihan arahan dengan huruf yang anda pilih, dalam mana-mana bahasa, daripada satu fail teks yang boleh anda sunting, import dan eksport.
keywords: huruf pilihan, optionkeys, optkeys, kata kunci pilihan, kata kunci, pemetaan semula, pemetaan, sesuaikan, huruf sendiri, polar, array, P, PO, bahasa, terjemah pilihan, bentuk pendek, import, eksport, samar
from: 7c8328c6
---

## Apa yang akan anda pelajari

Cara menukar huruf yang anda taip untuk menjawab pilihan arahan. Contohnya, {{cmd:ARRAY}} bertanya `[Rectangular/POlar]` dan menerima `PO` untuk Polar; anda boleh menjadikan `P` atau huruf lain sebagai cara yang sama, dalam bahasa anda sendiri jika anda mahu.

## Bagaimana pilihan dijawab

Apabila arahan menunjukkan pilihan dalam kurungan segi, huruf besar ialah yang perlu ditaip: `POlar` ialah `PO`, `eXit` ialah `X`.

Anda juga boleh menaip lebih sedikit huruf. Jika apa yang anda taip hanya sesuai dengan satu pilihan yang ditunjukkan, CadCraft mengambilnya: dengan `[Rectangular/POlar]`, satu `P` ialah Polar. Jika ia sesuai dengan dua, baris arahan menamakannya dan bertanya semula:

```
C could be COUnt, COLumns. Type more letters.
```

Nombor tidak pernah diteka, jadi jarak atau kiraan yang ditaip sentiasa dibaca sebagai nombor.

## Tambah huruf sendiri

Setiap arahan mengekalkan huruf terbinanya. Anda menambah huruf sendiri di atasnya, jadi senarai anda hanya mengandungi apa yang anda ubah.

1. Buka {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Option letters}} dan klik {{ui:Edit…}}. Atau taip {{cmd:OPTIONKEYS}} dan tekan {{key:Enter}}.
2. Di bawah {{ui:Command}}, pilih arahan, contohnya `ARRAY`. Senarai mempunyai setiap arahan yang meminta pilihan, dan ia bermula pada arahan yang anda gunakan terakhir.
3. Di bawah {{ui:Option}}, pilih pilihan. Setiap satu menunjukkan huruf terbinanya dalam kurungan, contohnya `POlar (PO)`.
4. Dalam {{ui:Your letters}}, taip huruf yang anda mahu, contohnya `P`, dan klik {{ui:Add}}.
5. Pilihan itu kini muncul di bawah {{ui:Your letters}} dengan huruf terbinanya dan huruf anda. Klik {{ui:Save}}.

Mulakan {{cmd:ARRAY}}, pilih objek dan tekan {{key:Enter}}. Gesaan menunjukkan huruf anda selepas pilihan, `POlar (P)`, dan `P` menjawabnya.

Untuk mengeluarkan satu, klik x di hujung barisnya dan kemudian {{ui:Save}}. Pilihan itu kembali kepada huruf terbinanya sahaja.

## Huruf yang tidak boleh digunakan

Editor menolak huruf yang akan menyembunyikan sesuatu yang sudah dibaca oleh baris arahan, dan memberitahu sebabnya:

- huruf terbina bagi pilihan lain arahan yang sama (`R` untuk Polar dalam `ARRAY`, di mana `R` ialah Rectangular);
- perkataan snap objek tiga huruf atau lebih, seperti `END`, `MID` atau `CEN`, dan perkataan `ALL` dan `LAST`;
- huruf yang sama untuk dua pilihan berbeza bagi satu arahan.

Selagi apa-apa disenaraikan dalam merah, {{ui:Save}} dimatikan: betulkan baris atau keluarkannya, dan ia kembali hidup. Jawapan terbina bagi sesuatu gesaan sentiasa mengatasi huruf anda, jadi senarai anda tidak akan menghalang jawapan terbina daripada berfungsi. Huruf yang kebetulan sama dengan nama arahan, seperti `L` atau `C`, tidak mengapa: pada gesaan pilihan, baris arahan sedang membaca jawapan, bukan memulakan arahan.

Pilihan yang disenaraikan untuk arahan datang daripada arahan yang berkongsi gesaannya, jadi kadang-kadang arahan menyenaraikan pilihan yang hanya ditanyakannya dalam sesetengah keadaan.

## Satu pilihan untuk setiap arahan

Di bawah {{ui:Command}}, pilih {{ui:Every command}}. Pilihan kemudian ialah setiap pilihan yang dimiliki mana-mana arahan, seperti eXit atau Undo. Huruf yang anda tambah di situ menjawab pilihan itu di mana-mana arahan menawarkannya. Huruf yang ditambah untuk satu arahan mengatasi ini.

## Huruf dalam bahasa anda sendiri

Huruf boleh daripada mana-mana abjad, jadi anda boleh menjawab pilihan tanpa menukar papan kekunci anda: tambah `З` untuk Close di bawah {{ui:Every command}}, atau `П` untuk POlar dalam `ARRAY`.

CadCraft hanya dihantar dengan huruf Inggeris. Senarai anda sendiri ialah cara anda, pejabat anda atau orang yang berkongsi bahasa anda menetapkan selebihnya, dan {{ui:Export}} membuat fail yang boleh anda serahkan.

## Sunting sebagai teks

{{ui:Edit as text}} dalam editor menunjukkan senarai yang sama sebagai baris teks, satu setiap pilihan, dan inilah yang disimpan oleh {{ui:Export}}:

```
ARRAY.PO,  P
*.X,       Q
```

Setiap baris ialah arahan, titik, huruf terbina pilihan, koma dan huruf anda. Asterisk menggantikan arahan bermaksud setiap arahan. Baris yang bermula dengan `;` ialah nota.

## Apa yang kekal sama

- Huruf terbina terus berfungsi di sebelah huruf anda.
- Rutin dan butang bar alat terus menggunakan huruf terbina, jadi tiada apa yang anda muatkan akan rosak. Untuk menaip huruf terbina sendiri di tempat huruf anda akan menghalang, letakkan garis bawah di hadapan: `_PO`.
- Nama pendek arahan ialah perkara yang berbeza: lihat [Sunting alias arahan](topic:command-aliases).

## Baris yang CadCraft tolak

Apabila anda menyunting sebagai teks atau mengimport fail, editor menyenaraikan setiap masalah dengan nombor barisnya:

- arahan itu tidak wujud (alias arahan tidak mengapa: `AR.PO` dibaca sebagai `ARRAY.PO`);
- baris itu bukan `COMMAND.OPTION, LETTERS`;
- huruf mempunyai ruang atau tanda di dalamnya (huruf dan digit sahaja, paling banyak 16);
- huruf yang sama menjawab dua pilihan berbeza bagi satu arahan.

## Import dan eksport

{{ui:Export}} menyimpan huruf anda sebagai fail teks, untuk disimpan atau diberikan kepada orang lain. {{ui:Import…}} membaca fail sebegitu. Kedua-duanya terdapat dalam editor dan dalam {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}}.

Dalam Settings, {{ui:Import…}} menggantikan fail anda dengan fail yang anda pilih. Fail dengan baris yang bertembung atau tidak boleh digunakan tidak diambil; buka editor dan import di sana untuk melihat barisnya. Dalam editor ia hanya mengisi kotak: tiada apa yang berubah sehingga anda klik {{ui:Save}}.

## Muat semula atau alih keluar

Taip {{cmd:REINIT}} dan tekan {{key:Enter}} untuk memohon fail anda semula. Untuk mengeluarkan satu huruf, padam barisnya dan klik {{ui:Save}}.

## Huruf anda mengikut akaun anda

Apabila anda log masuk ke getcadcraft.com, huruf anda disimpan bersama akaun anda. Buka CadCraft dalam pelayar lain atau pada komputer lain dengan akaun yang sama dan ia tiba dengan sendirinya; baris arahan berkata `Option letters from your account`. Jika anda menukarnya di dua tempat, salinan terbaru menang dan yang digantikannya disimpan sekali.

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} memberitahu kedudukannya. Apabila log keluar atau luar talian, ia kekal dalam pelayar ini dan pergi ke akaun anda pada kali seterusnya anda menyimpannya semasa log masuk.

Berkaitan: [Sunting alias arahan](topic:command-aliases) · [Tetapan CadCraft](topic:settings) · [Arahan](topic:commands)
