---
title: Selit daripada fail atau pustaka
summary: Bawa masuk blok, atau keseluruhan lukisan, dari DWG atau DXF lain, dan letakkan item daripada Pustaka, fail atau pustaka lain, dengan kredit dan kemas kini mereka.
keywords: selit, fail, pustaka, librarycraft, item, peralatan, blok daripada lukisan lain, wblock, pusat reka bentuk, kredit, atribusi, lesen, kemas kini, suapan, item.json
from: f6e4e452
---

## Selit blok daripada lukisan lain

1. Taip `I` dan tekan {{key:Enter}}, atau klik {{ui:Insert}} dalam kumpulan Blocks.
2. Baris arahan di bahagian bawah tetingkap meminta `Enter block name or [File/Library]`. Taip `F` di situ dan tekan {{key:Enter}}.
3. Pilih DWG atau DXF pada komputer ini. Ia dibaca di sini; ia tidak dibuka, dan tiada apa yang dimuat naik.
4. Dalam dialog {{ui:Insert from}}, pilih satu blok daripada senarai (taip dalam {{ui:Filter blocks}} untuk mencarinya), atau kekalkan {{ui:The whole drawing}}. Klik {{ui:Insert}}.
5. Klik di tempat ia pergi, dan isi sebarang atribut yang diminta.

Anda juga boleh bermula dari panel {{ui:Blocks}}: taip `F` dalam kotak {{ui:Filter blocks}} dan tekan {{key:Enter}}, atau taip sesuatu yang tiada blok padan dan klik {{ui:From a file…}}. `L` dan {{ui:Library…}} membuka pustaka dengan cara yang sama. Sebelum versi 0.10.1, huruf yang ditaip dalam {{ui:Filter blocks}} hanya mencari blok lukisan ini dan menjawab "No block matches the filter."

Untuk menyimpan lukisan blok anda sendiri di tangan, klik {{ui:Add a drawing}} di bawah {{ui:Libraries}} dalam panel {{ui:Blocks}} dan pilih DWG atau DXF. Blok-bloknya disenaraikan dengan gambar; klik satu untuk meletakkannya.

Keseluruhan lukisan masuk sebagai satu blok yang dinamakan sempena fail. Blok di dalam blok yang anda pilih juga masuk. Lapisan yang digunakannya ditambah pada lukisan ini.

Jika lukisan lain menggunakan unit berbeza (contohnya inci dan milimeter), CadCraft menskalakan rujukan supaya sepadan dan memberitahu dalam sejarah.

### Apabila nama sudah digunakan

Jika lukisan ini sudah mempunyai blok dengan nama yang sama, CadCraft bertanya:

- {{ui:Keep existing}} menggunakan blok lukisan ini yang bernama begitu.
- {{ui:Rename}} membawa masuk yang baharu sebagai `Name (2)`.

Keseluruhan selitan ialah satu langkah: {{key:Mod+Z}} mengambil rujukan dan takrifan yang disalin semula.

## Buka pustaka

Klik {{ui:Library…}} dalam panel {{ui:Blocks}}, atau {{ui:Library}} dalam kumpulan Blocks, atau taip `LIB`. Pada gesaan `INSERT`, `L` juga membukanya.

Pustaka mempunyai empat sumber, sebagai tab:

- {{ui:Library}}: pustaka CadCraft. Cari mengikut nama, pembuat atau model, dan tapis mengikut kategori.
- {{ui:Files…}}: fail item (`item.json`) daripada mana-mana pustaka, atau lukisan, hamparan atau model 3D untuk dibuat item daripadanya: DWG atau DXF (setiap blok menjadi satu item), CSV dengan lajur nama dan saiz, atau model glTF atau OBJ. Tiada apa yang dimuat naik.
- {{ui:Standard}}: seksyen keluli (sebagai seksyen, dongakan atau ahli 3D) dan bahagian standard seperti bolt, nut dan galas, dibuat di sini daripada jadual yang diterbitkan. Lihat [Letakkan seksyen keluli dan bahagian standard](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: pustaka lain yang menjawab dengan cara yang sama seperti Library. Tambah alamatnya sekali; pelayar ini mengingatinya.

Setiap kad menunjukkan pratonton, nama, pembuat dan model, lesen serta versi. Item yang ditarik balik ditanda {{ui:Withdrawn}} dengan sebabnya; CadCraft bertanya sebelum anda meletakkannya.

## Letakkan satu item

1. Klik {{ui:Place}} pada kad.
2. Klik di tempat item pergi. Taip `R` dahulu untuk memutarnya, atau `S` untuk menskalakannya.
3. Pada `Enter Item number (CC-ITEM)`, tekan {{key:Enter}} untuk nombor kosong seterusnya, atau taip nombor anda sendiri.

Item menjadi blok dinamakan `LIB_<name>_v<version>`, dilukis dalam unit lukisan ini. Jika lukisan tiada unit, item masuk dalam milimeter dan sejarah memberitahu begitu; tetapkan {{ui:Units}} dalam panel kanan dahulu.

Datanya dibawa bersama sebagai atribut tidak kelihatan: id dan versi item, lesen dan atribusi, pembuat, model, kategori dan saiz. Lihat [Atribut blok](topic:attributes).

## Item dalam bahasa anda

Item boleh membawa namanya dan huraiannya dalam bahasa lain. Apabila ia mempunyainya dalam bahasa yang CadCraft ditetapkan (Settings › General › Language), kad dan nama item blok yang diletakkan menggunakannya. Blok itu sendiri mengekalkan nama yang dibuat daripada nama item itu sendiri, jadi lukisan mempunyai satu blok bagi setiap item tanpa mengira bahasa yang meletakkannya.

## Semak kemas kini

1. Buka pustaka.
2. Klik {{ui:Check for updates}}.

Setiap item pustaka dalam lukisan disenaraikan dengan nombor itemnya dan sama ada ia terkini, mempunyai versi yang lebih baharu (dan apa yang berubah), atau telah ditarik balik. Klik {{ui:Update}} pada satu baris, atau {{ui:Update all}}. Setiap rujukan berpindah ke blok versi baharu dan mengekalkan nombor item, kuantiti, tempat, sudut dan lapisannya. {{key:Mod+Z}} membatalkan kemas kini.

## Kreditkan apa yang anda gunakan

Klik {{ui:Library credits}}. Setiap item disenaraikan dengan baris atribusinya dan lesennya.

- {{ui:Copy attribution}} menyalin baris satu item; {{ui:Copy all}} menyalin setiap baris.
- {{ui:Download CSV}} menyimpan senarai dengan nombor item, pembuat, model, lesen dan atribusi. Ia dibuka dalam mana-mana hamparan.

Lesen seperti CC BY meminta anda mengkreditkan pengarang di tempat anda menggunakan karya itu. Letakkan baris itu pada lukisan, dalam spesifikasi atau dalam nota projek.

## Simbol dan aset

Pustaka mempunyai tiga jenis item: Symbols (konvensyen lukisan, 2D), Types (apa yang diperbuat oleh sesuatu elemen) dan Assets (objek fizikal). Dalam tab {{ui:Library}}, senarai {{ui:Kind of item}} menunjukkan Symbols dan assets bersama, hanya Symbols, atau hanya Assets. Types ialah apa yang dibina oleh projek BimCraft, jadi CadCraft tidak menyenaraikannya.

## Log masuk ke pustaka

Klik {{ui:Sign in to the library}}. Tetingkap kecil dibuka di laman; sebaik sahaja anda log masuk di sana, CadCraft boleh menunjukkan item pasukan anda dan mendaftarkan apa yang anda letakkan, supaya anda tahu apabila item yang anda gunakan berubah. Log masuk kekal untuk tab pelayar ini. Batalkannya pada bila-bila masa dari halaman keselamatan akaun anda.

## Simpan objek anda dalam My objects

{{ui:My objects}} ialah senarai peribadi dalam Pustaka yang hanya anda boleh lihat. Ia tiada dalam pustaka awam, tidak dalam carian, dan tidak ditunjukkan kepada pasukan anda, dan ia mengikut akaun anda ke setiap komputer tempat anda log masuk ke pustaka.

1. Dalam panel Pustaka, klik {{ui:Files…}} dan baca satu fail.
2. Pada item yang anda mahu semula, klik {{ui:Keep in my objects}}.
3. Kemudian, klik {{ui:My objects}} dan klik {{ui:Place}}. Ia diletakkan seperti mana-mana item pustaka, dan {{ui:Check for updates}} meliputinya.
4. {{ui:Remove from my objects}} mengeluarkannya daripada senarai. Salinan yang sudah diletakkan dalam lukisan kekal.

Anda perlu log masuk ke pustaka. Membaca fail tidak memuat naik apa-apa; menyimpan item menghantar item itu sahaja ke akaun anda.

:::note
My objects sedang diuji dan mungkin belum dibuka untuk akaun anda. Jika ia berkata "My objects is not open for this account yet", anda masih boleh meletakkan item daripada fail anda sendiri dengan {{ui:Files…}}.
:::

## Kesilapan biasa

- **"Making items from IFC types is in BimCraft."** Fail IFC dan keluarga dibaca dalam aplikasi BimCraft. Buat item di sana atau di Pustaka, kemudian gunakan `item.json`-nya di sini.
- **"The library could not be reached."** Anda luar talian, atau pustaka tidak berfungsi. Item yang sudah ada dalam lukisan tidak terjejas.
- **Item terlalu besar atau terlalu kecil.** Unit lukisan salah atau tidak ditetapkan. Buat asal, tetapkan {{ui:Units}}, dan letakkan semula.
