---
title: Senarai bahan mengikut zon
summary: Tandakan kawasan lukisan sebagai zon dan letakkan jadual untuk setiap satu yang mengira blok di dalamnya. Jadual mengikut lukisan semasa anda bekerja, dan anda memilih lajur yang dipaparkan oleh setiap satu.
keywords: senarai bahan, BOM, senarai bahagian, jadual, zon, kawasan, jadual, kira, atribut, lajur, nombor item, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zon** ialah kawasan bernama dalam lukisan. **Jadual senarai bahan** menyenaraikan apa yang berada dalam satu zon, atau dalam seluruh lukisan: setiap blok dengan kuantitinya dan nilai atributnya. Lukisan boleh mempunyai seberapa banyak zon dan jadual yang diperlukan, dan satu zon boleh mempunyai beberapa jadual dengan lajur yang berbeza.

Alatnya terdapat pada tab Blok di bawah {{ui:Bill of materials}}, dalam menu Lagi bagi kumpulan Blok, dan boleh ditaip.

## Buat zon

Taip {{cmd:BOMZONE}} dan sama ada

- klik dua sudut bertentangan untuk segi empat tepat,
- pilih {{ui:Polygon}}, klik setiap bucu dan tekan Enter untuk menutupnya, atau
- pilih {{ui:Object}} dan pilih poliline tertutup, bulatan, elips atau splin tertutup. Garis luarnya disalin; objek itu kekal seperti asalnya.

Kemudian taip nama zon. Zon dilukis sebagai garis luar putus-putus dengan namanya di atas bucu kiri atas, pada lapisan `BOM-ZONES`, yang tidak dicetak. Hidupkan cetakan untuk lapisan itu jika anda mahu zon pada kertas.

Zon ialah poliline tertutup biasa: alihkannya, regangkannya atau seret gripnya, dan namanya mengikut. Untuk menamakan semula zon, sunting teks namanya, atau guna {{cmd:BOMZONE}} dan {{ui:Namakan semula}}. {{ui:Zon}} menyenaraikan setiap zon dan berapa banyak jadual yang dimilikinya.

## Letakkan jadual

Taip {{cmd:BOMTABLE}} (atau {{cmd:BOM}}), pilih garis luar zon atau namanya, beri ketinggian teks dan klik tempat bucu kiri atas jadual itu pergi. Tekan Enter dan bukannya memilih zon, atau pilih {{ui:Keseluruhan}}, untuk jadual seluruh lukisan.

Jadual baharu menunjukkan nombor item, kuantiti, nama blok dan satu lajur untuk setiap atribut yang dibawa blok (enam yang pertama; yang lain ditawarkan tanpa tanda). Blok dengan nama yang sama dan nilai atribut yang sama berkongsi satu baris.

## Apa yang dikira sebagai berada di dalam

- Blok dikira dalam zon yang mengandungi **titik selitannya**.
- Garisan, lengkok, bulatan, poliline, elips, splin atau hatch dikira **sepenuhnya** dalam zon yang mengandungi titik tengah lingkungannya (bagi garisan, titik tengahnya). Panjangnya tidak dipotong pada tepi zon.
- Titik yang tepat berada di tepi dianggap di dalam.
- Zon boleh bertindih. Setiap zon dikira untuk dirinya sendiri, jadi objek dalam bahagian bertindih berada dalam kedua-dua jadual.

## Jadual mengikut lukisan

Apabila anda menambah, mengalih, menyalin atau memadam blok, mengedit atribut, atau membentuk semula atau mengalih zon, setiap jadual dilukis semula dalam langkah yang sama. Buat asal membatalkan suntingan anda dan perubahan jadual bersama.

Untuk menghentikan jadual daripada mengikut, tandakan {{ui:Dibekukan}} dalam tetapannya. Jadual yang dibekukan hanya berubah apabila anda mengedit tetapannya atau menaip {{cmd:BOMUPDATE}}, yang mengemas kini setiap jadual sekarang.

## Pilih lajur

Pilih satu jadual dan taip {{cmd:BOMEDIT}}. Dalam kotak dialog:

- **Lajur**: tandakan yang hendak dipaparkan (item, kuantiti, nama, lapisan, panjang, luas, catatan dan setiap atribut), taip pengepala anda sendiri untuk mana-mana satu daripadanya, dan alihkannya ke atas atau bawah.
- {{ui:Kumpulkan baris mengikut}}: nama blok dan nilai atribut, nama blok sahaja, lapisan, atau satu atribut. Dalam baris yang digabungkan, nilai yang berbeza antara blok dibaca "berbeza-beza".
- {{ui:Isih mengikut}} mana-mana lajur, menaik atau menurun.
- {{ui:Tajuk}}, {{ui:Tunjukkan tajuk}} dan {{ui:Baris jumlah}}.
- {{ui:Kira garisan mengikut lapisan}} menambah satu baris bagi setiap lapisan dengan bilangan objeknya, jumlah panjangnya dan, bagi bentuk tertutup, jumlah luasnya, dalam unit lukisan.
- **Catatan**: tandakan lajur Catatan, kemudian taip catatan untuk mana-mana baris dalam jadual di bahagian bawah kotak dialog.

Setiap jadual mengekalkan pilihannya sendiri.

## Nombor item

Satu baris mengekalkan nombor itemnya selagi ia berada dalam jadual. Baris baharu mengambil nombor kosong yang seterusnya, dan nombor yang pernah diberikan tidak akan digunakan semula, supaya belon dan nota yang memetik nombor kekal betul. {{ui:Nombor semula item}} menomborkannya semula dari 1 mengikut susunan yang dipaparkan.

Satu baris dikenali mengikut apa yang dikumpulkannya: ubah cara baris dikumpulkan, atau ubah nilai atribut yang digunakan oleh pengumpulan itu, dan baris itu dikira sebagai baris baharu.

## Eksport dan program lain

{{cmd:BOMEXPORT}}, atau {{ui:Eksport CSV}} dalam kotak dialog, menyimpan jadual sebagai fail .csv untuk hamparan.

Dalam fail DWG atau DXF, jadual ialah blok garisan dan teks yang biasa, jadi program lain menunjukkannya dan mencetaknya seperti yang dilukis. Ia bukan objek jadual di sana, dan ia tidak dikemas kini dalam program lain. Pautan ke zonnya disimpan dalam fail sebagai data sambungan yang dibaca semula oleh CadCraft, jadi jadual itu hidup semula apabila anda membuka lukisan semula dalam CadCraft. Lukisan DXF R12 tanpa helaian tidak mengekalkan tetapan "tidak dicetak" bagi lapisan zon.

Meletupkan jadual menukarnya kepada garisan dan teks berasingan, dan menamatkan pautan.
