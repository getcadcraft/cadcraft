---
title: Selit daripada fail atau pustaka
summary: Bawa masuk blok, atau keseluruhan lukisan, daripada DWG atau DXF lain, dan letakkan item daripada Pustaka, fail atau pustaka lain, dengan kredit dan kemas kini.
keywords: selit, fail, pustaka, librarycraft, item, peralatan, blok daripada lukisan lain, wblock, pusat reka bentuk, kredit, atribusi, lesen, kemas kini, suapan, item.json
from: 316188d2
---

## Selit blok daripada lukisan lain

1. Taip `I` dan tekan {{key:Enter}}, atau klik {{ui:Selit}} dalam kumpulan Blok.
2. Pada `Masukkan nama blok atau [Fail/Pustaka (L)]`, taip `F` dan tekan {{key:Enter}}.
3. Pilih DWG atau DXF pada komputer ini. Ia dibaca di sini; ia tidak dibuka, dan tiada apa-apa dimuat naik.
4. Dalam kotak dialog {{ui:Selit daripada}}, pilih blok daripada senarai (taip dalam {{ui:Tapis blok}} untuk mencarinya), atau kekalkan {{ui:Keseluruhan lukisan}}. Klik {{ui:Selit}}.
5. Klik di tempat ia hendak pergi, dan isi sebarang atribut yang diminta.

Keseluruhan lukisan dibawa masuk sebagai satu blok bernama sempena fail itu. Blok dalam blok yang anda pilih turut dibawa masuk. Lapisan yang digunakannya ditambah ke lukisan ini.

Jika lukisan lain menggunakan unit yang berbeza (contohnya inci dan milimeter), CadCraft menskalakan rujukan supaya sepadan dan memberitahu demikian dalam sejarah.

### Apabila nama sudah digunakan

Jika lukisan ini sudah mempunyai blok dengan nama yang sama, CadCraft akan bertanya:

- {{ui:Kekalkan yang sedia ada}} menggunakan blok lukisan ini dengan nama itu.
- {{ui:Namakan semula}} membawa masuk yang baharu sebagai `Nama (2)`.

Keseluruhan selitan ialah satu langkah: {{key:Mod+Z}} membuang semula rujukan dan takrif yang disalin.

## Buka pustaka

Klik {{ui:Pustaka…}} dalam panel {{ui:Blocks}}, atau {{ui:Pustaka}} dalam kumpulan Blok, atau taip `LIB`. Pada gesaan `INSERT`, `L` turut membukanya.

Pustaka mempunyai empat sumber, sebagai tab:

- {{ui:Pustaka}}: pustaka CadCraft. Cari mengikut nama, pembuat atau model, dan tapis mengikut kategori.
- {{ui:Fail…}}: fail item (`item.json`) daripada mana-mana pustaka, atau lukisan, hamparan atau model 3D untuk membuat item daripadanya: DWG atau DXF (setiap blok menjadi item), CSV dengan lajur nama dan saiz, atau model glTF atau OBJ. Tiada apa-apa dimuat naik.
- {{ui:Standard}}: keratan keluli (sebagai keratan, dongakan atau anggota 3D) dan bahagian standard seperti bolt, nat dan galas, dibuat di sini daripada jadual yang diterbitkan. Lihat [Letak keratan keluli dan bahagian standard](topic:steel-and-standard-parts).
- {{ui:Suapan lain}}: pustaka lain yang menjawab dengan cara yang sama seperti Pustaka. Tambah alamatnya sekali; pelayar ini mengingatinya.

Setiap kad menunjukkan pratonton, nama, pembuat dan model, lesen dan versi. Item yang ditarik balik ditandakan {{ui:Ditarik balik}} dengan sebabnya; CadCraft bertanya sebelum anda meletakkan satu.

## Letak item

1. Klik {{ui:Letak}} pada kad.
2. Klik di tempat item hendak pergi. Taip `R` dahulu untuk memutarkannya, atau `S` untuk menskalakannya.
3. Pada `Masukkan nombor Item (CC-ITEM)`, tekan {{key:Enter}} untuk nombor kosong seterusnya, atau taip nombor anda sendiri.

Item menjadi blok bernama `LIB_<nama>_v<versi>`, dilukis dalam unit lukisan ini. Jika lukisan tidak mempunyai unit, item dimasukkan dalam milimeter dan sejarah memberitahu demikian; tetapkan {{ui:Unit}} dalam panel kanan dahulu.

Datanya dibawa bersama sebagai atribut tidak kelihatan: id dan versi item, lesen dan atribusi, pembuat, model, kategori dan saiz. Lihat [Atribut blok](topic:attributes).

## Item dalam bahasa anda

Item boleh membawa nama dan penerangannya dalam bahasa lain. Apabila ia mempunyai bahasa yang CadCraft ditetapkan kepadanya (Tetapan › Umum › Bahasa), kad dan nama item bagi blok yang diletakkan menggunakannya. Blok itu sendiri mengekalkan nama yang dibuat daripada nama item itu sendiri, jadi lukisan mempunyai satu blok bagi setiap item tanpa mengira bahasa yang meletakkannya.

## Semak kemas kini

1. Buka pustaka.
2. Klik {{ui:Semak kemas kini}}.

Setiap item pustaka dalam lukisan disenaraikan dengan nombor itemnya dan sama ada ia terkini, mempunyai versi yang lebih baharu (dan apa yang berubah), atau telah ditarik balik. Klik {{ui:Kemas kini}} pada baris, atau {{ui:Kemas kini semua}}. Setiap rujukan beralih ke blok versi baharu dan mengekalkan nombor item, kuantiti, tempat, sudut dan lapisannya. {{key:Mod+Z}} membuat asal kemas kini.

## Kredit apa yang anda gunakan

Klik {{ui:Kredit pustaka}}. Setiap item disenaraikan dengan baris atribusi dan lesennya.

- {{ui:Salin atribusi}} menyalin baris satu item; {{ui:Salin semua}} menyalin setiap baris.
- {{ui:Muat turun CSV}} menyimpan senarai dengan nombor item, pembuat, model, lesen dan atribusi. Ia dibuka dalam mana-mana hamparan.

Lesen seperti CC BY meminta anda memberi kredit kepada pengarang di tempat anda menggunakan karya itu. Letakkan baris-baris itu pada lukisan, dalam spesifikasi atau dalam nota projek.

## Simbol dan aset

Pustaka mempunyai tiga jenis item: Simbol (konvensyen lukisan, 2D), Jenis (perkara yang elemen itu dibuat daripadanya) dan Aset (objek fizikal). Dalam tab {{ui:Pustaka}}, senarai {{ui:Jenis item}} menunjukkan Simbol dan Aset bersama, hanya Simbol, atau hanya Aset. Jenis ialah apa yang projek BimCraft dibina daripadanya, jadi CadCraft tidak menyenaraikannya.

## Log masuk ke pustaka

Klik {{ui:Log masuk ke pustaka}}. Tetingkap kecil dibuka di laman; apabila anda sudah log masuk di sana, CadCraft boleh memaparkan item pasukan anda dan mendaftarkan apa yang anda letakkan, supaya anda dimaklumkan apabila item yang anda gunakan berubah. Log masuk ini kekal untuk tab pelayar ini. Batalkannya pada bila-bila masa dari halaman keselamatan akaun anda.

## Kesilapan lazim

- **"Membuat item daripada jenis IFC adalah dalam BimCraft."** Fail IFC dan keluarga dibaca dalam aplikasi BimCraft. Buat item di sana atau di Pustaka, kemudian gunakan `item.json`-nya di sini.
- **"Pustaka tidak dapat dihubungi."** Anda luar talian, atau pustaka tidak berfungsi. Item yang sudah ada dalam lukisan tidak terjejas.
- **Item terlalu besar atau terlalu kecil.** Unit lukisan salah atau tidak ditetapkan. Buat asal, tetapkan {{ui:Unit}}, dan letakkan semula.
