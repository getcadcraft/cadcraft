---
title: Atribut blok
summary: Lihat dan ubah nilai yang dibawa oleh rujukan blok, seperti nombor item atau pengeluar, dan kekalkannya apabila anda menyimpan salinan.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, blok tajuk, sunting di tempat, penyunting atribut, attdef, takrifkan atribut, bedit, penyunting blok, bclose, atribut, attributes, attdef, attrib, tag, nombor item, nilai, tidak kelihatan, malar, blok, sifat, senarai, tag peralatan
from: 34d307c7
---

## Apakah atribut

Atribut ialah nilai bernama yang dibawa bersama rujukan blok: nombor item bagi tag peralatan, nama bagi tag bilik, penarafan api bagi pintu. Takrif blok menyatakan atribut yang dimilikinya (setiap satu mempunyai **tag**, **gesaan**, **lalai**, serta kedudukan, saiz dan sudut bagi teksnya). Setiap rujukan kepada blok membawa nilainya sendiri.

Sebahagian atribut **tidak kelihatan**: ia menyimpan data, seperti pengeluar atau nombor model, tetapi tidak pernah dilukis. Sebahagian lagi **malar**: sama bagi setiap rujukan, ditetapkan oleh blok.

## Dari mana atribut datang

- Blok dalam fail DWG dan DXF yang anda buka mengekalkan atributnya, dengan nilai setiap rujukan.
- Blok yang anda bawa masuk dengan {{cmd:INSERT}} dan pilihan {{ui:File}} mengekalkan atributnya. Lihat [Selit daripada fail atau pustaka](topic:insert-from-file-and-library).
- Item pustaka masuk sebagai blok dengan atribut: nombor item yang kelihatan dan data item, yang tidak kelihatan.
- Blok yang anda buat sendiri: takrifkan atribut dengan {{cmd:ATTDEF}} dahulu (di bawah), kemudian pilihnya bersama objek lain apabila anda membuat blok.

## Takrifkan atribut untuk blok anda sendiri

1. Lukis garisan blok, contohnya tag bilik.
2. Pilih {{ui:Blocks}} › {{ui:Lagi}} › {{ui:Takrifkan atribut}}, atau taip `ATT` dan tekan {{key:Enter}}.
3. Sejarah menunjukkan mod (`Invisible=No Constant=No Preset=No`). Taip `I`, `C` atau `P` untuk menukar satu, dan tekan {{key:Enter}} apabila semuanya betul. Nilai tidak kelihatan disimpan tetapi tidak dilukis; nilai malar sama dalam setiap rujukan; nilai pratetap tidak ditanya apabila anda menyelit blok.
4. Taip tag (contohnya `ROOM_NO`: huruf besar, tiada ruang), gesaan (`Nombor bilik`) dan nilai lalai (`101`).
5. Klik tempat nilai itu pergi, dan beri ketinggian serta putaran. Tag ditunjukkan pada lukisan.
6. Buat blok dengan {{cmd:BLOCK}}, pilih garisan dan takrif atribut bersama. Rujukan yang menggantikannya mendapat nilai lalai; setiap {{cmd:INSERT}} baharu akan memintanya.

Takrif atribut yang dipilih menunjukkan {{ui:Tag}}, {{ui:Gesaan}}, {{ui:Lalai}} dan mod-mod dalam {{ui:Sifat}}.

## Ubah blok: penyunting blok

{{ui:Blocks}} › {{ui:Lagi}} › {{ui:Sunting blok}} ({{cmd:BEDIT}}, `BE`) membuka satu blok secara berasingan: taip namanya (atau pilih rujukan dahulu). Bar di atas menyatakan blok yang sedang anda sunting. Lukis, padam dan ubah objeknya dengan arahan biasa, dan tambah atau ubah takrif atribut. Kemudian klik {{ui:Simpan blok}} (atau taip {{cmd:BCLOSE}} dan `S`): setiap rujukan menunjukkan perubahan itu, dan satu {{key:Mod+Z}} membuat asal semuanya. {{ui:Buang perubahan}} ({{cmd:BCLOSE}}, `D`) meninggalkan blok seperti asalnya.

Apabila anda menambah, membuang atau mengubah takrif atribut, menyimpan juga menyelaraskan setiap rujukan: nilai yang anda taip dikekalkan, atribut baharu mendapat nilai lalainya, atribut yang dibuang hilang, dan setiap atribut kembali ke tempat yang ditetapkan oleh takrif. Sejarah menyatakan berapa banyak rujukan yang dikemas kini.

## Sunting tajuk blok di tempatnya (REFEDIT)

Blok tajuk pada helaian selalunya berada di dalam satu blok. Untuk mengubah garisan atau teksnya tanpa meninggalkan helaian:

1. Pilih blok tajuk, kemudian {{ui:Blocks}} › {{ui:Lagi}} › {{ui:Sunting di tempat}} (atau taip {{cmd:REFEDIT}}).
2. Kandungannya menjadi objek biasa di tempatnya; yang lain dipudarkan dan tidak boleh diubah.
3. Ubah, padam atau lukis: objek baharu menjadi sebahagian daripada blok.
4. Klik {{ui:Simpan blok}} dalam bar di atas (atau taip {{cmd:REFCLOSE}} dan `S`). Setiap rujukan menunjukkan perubahan itu, dan satu {{key:Mod+Z}} membuat asal keseluruhan suntingan. {{ui:Buang}} meninggalkan blok seperti asalnya.

Pautan lukisan, blok dinamik, atau rujukan yang diskalakan berbeza merentas dan ke atas tidak boleh disunting di tempatnya: guna {{cmd:BEDIT}} (atau buka lukisan yang dipautkan).

:::note
Simpan atau buang dalam penyunting blok sebelum anda menyimpan lukisan: fail yang disimpan semasa penyunting dibuka mengandungi blok seperti sebelum suntingan.
:::

## Isi nilainya apabila anda meletakkan blok

1. Taip `I` dan tekan {{key:Enter}}, taip nama blok dan tekan {{key:Enter}}.
2. Klik tempat ia pergi.
3. CadCraft meminta setiap nilai, contohnya `Masukkan Nombor item (ITEM) <>`. Taip nilai dan tekan {{key:Enter}}, atau tekan {{key:Enter}} untuk mengekalkan lalai yang ditunjukkan dalam kurungan sudut.

Nilai yang ditandakan blok sebagai pratetap, dan yang malar, tidak diminta. Ia mengambil nilai lalainya.

## Lihat dan ubah nilai

1. Klik satu rujukan blok.
2. Dalam panel kanan, di bawah {{ui:Atribut}}, setiap tag mempunyai nilainya. Yang tidak kelihatan ditulis `hidden`.
3. Klik satu nilai, taip yang baharu dan tekan {{key:Enter}}.

Lukisan menunjukkan nilai baharu serta-merta. Setiap perubahan ialah satu langkah: {{key:Mod+Z}} membuat asalnya.

**Penyunting atribut.** Klik dua kali rujukan yang mempunyai atribut (atau {{cmd:EATTEDIT}}): kotak dialog {{ui:Sunting atribut}} menyenaraikan setiap tag dengan gesaan dan nilainya. Taip nilai baharu; klik satu baris untuk menukar {{ui:Tinggi}}, {{ui:Putaran}}, {{ui:Faktor lebar}}, {{ui:Jajar}}, {{ui:Lapisan}}, {{ui:Warna}} dan {{ui:Tidak kelihatan}} bagi atribut itu untuk rujukan ini sahaja. {{ui:Guna}} mengekalkan kotak dialog terbuka; {{ui:OK}} menggunakan dan menutupnya. Setiap {{ui:Guna}} atau {{ui:OK}} ialah satu langkah buat asal.

**Pada baris arahan**, {{cmd:ATTEDIT}} meminta setiap nilai secara bergilir: taip yang baharu, atau tekan {{key:Enter}} untuk mengekalkannya.

## Ubah takrif atribut (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:Lagi}} › {{ui:Pengurus atribut}} ({{cmd:BATTMAN}}) menyenaraikan atribut blok: tukar tag, gesaan atau lalai, tandakan {{ui:Tidak kelihatan}}, {{ui:Malar}} atau {{ui:Pratetap}}, dan alihkannya ke atas atau bawah (susunan nilai ditanya). Dengan {{ui:Kemas kini rujukan (nilai dikekalkan)}} ditandakan, {{ui:Guna}} turut menyelaraskan setiap rujukan; tag yang dinamakan semula mengekalkan nilainya. Setiap {{ui:Guna}} ialah satu langkah buat asal.

{{cmd:ATTSYNC}} menyelaraskan rujukan dengan takrif blok mereka secara manual: `S` memilih satu rujukan, `N` menamakan blok, `A` melakukan setiap blok. Nilai dikekalkan.

Nilai medan item pustaka (id, versi, lesen dan atribusinya) dipaparkan tetapi tidak boleh disunting, supaya semakan kemas kini terus berfungsi. Nombor item dan kuantitinya adalah milik anda untuk diubah.

## Senaraikannya

Pilih rujukan dan taip `LI` (untuk {{cmd:LIST}}). Sejarah menunjukkan setiap atribut sebagai `TAG = nilai`, dengan `(invisible)` atau `(constant)` di mana berkenaan.

## Mengalih, memutar dan meletupkan

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} dan {{cmd:MIRROR}} mengekalkan nilai; teks bergerak bersama blok dan kekal boleh dibaca.
- {{cmd:EXPLODE}} menukar atribut yang kelihatan kepada teks biasa dengan nilainya. Yang tidak kelihatan dibuang.

## Menyimpan

DWG dan DXF yang disimpan kedua-duanya mengekalkan setiap atribut: takrif setiap blok (termasuk yang tidak kelihatan, malar dan pratetap) dan nilai setiap rujukan. Program CAD lain membacanya sebagai atribut blok biasa.

Dalam DXF R12, nilai yang lebih panjang daripada 255 aksara dipotong kepada 255, dan sejarah menyatakannya.

## Kesilapan biasa

- **Nilai tidak ditunjukkan pada lukisan.** Ia tidak kelihatan, atau kosong. Nilai yang tidak kelihatan tetap ditunjukkan dalam panel kanan.
- **Nilai yang saya taip pergi ke baris arahan.** Klik ke dalam kotak nilai dalam panel kanan dahulu.
