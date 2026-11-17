---
title: Gambar dalam lukisan
summary: Letakkan gambar PNG atau JPEG, klipkannya kepada segi empat tepat atau poligon, tunjukkan gambar yang digunakan oleh DWG, dan plotkannya dengan tajam.
keywords: pastearea, parea, salin kawasan, kawasan yang disalin, markupcraft, saiz sebenar, saiz benar, overlay, ole, ole2frame, objek terbenam, tampal gambar, tampal tangkapan skrin, ctrl+v, imej papan keratan, tangkapan skrin, gambar, imej, imageattach, iat, image, imageclip, klip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plot, pdf, resolusi
from: 4025ac97
---

## Apa yang anda akan buat

Logo syarikat diletakkan dalam blok tajuk, diklipkan kepada bahagian yang anda mahukan, dan PDF yang mencetaknya pada resolusinya sendiri.

## Letakkan gambar

1. Taip {{cmd:IMAGEATTACH}} (atau `IAT`) dan tekan {{key:Enter}}. Pilih fail PNG atau JPEG.
2. `Tentukan sudut kiri bawah`: klik, atau taip titik.
3. `Tentukan lebarnya`: lebar dalam unit lukisan. {{key:Enter}} mengekalkan lebar yang ditawarkan: satu unit bagi setiap piksel, atau lebar yang anda berikan untuk fail ini kali terakhir (gesaan menyatakan yang mana).
4. `Tentukan sudut putaran`: {{key:Enter}} untuk tiada.

Gambar ialah satu objek: pilihnya melalui bingkainya, dan alih, salin, putar, skala atau padamnya seperti mana-mana blok.

:::note
Fail gambar kekal bersama lukisan semasa ia dibuka. DWG yang disimpan menamakan fail itu, seperti yang dilakukan oleh program lain; ia tidak memegang piksel. Simpan gambar di sebelah lukisan.
:::

## Tampal tangkapan skrin atau gambar yang disalin

1. Salin gambar (tangkapan skrin dengan {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=alat tangkapan skrin anda}}, atau Salin imej dalam program lain atau pelayar).
2. Tunjuk ke tempat ia patut pergi pada lukisan dan tekan {{key:Mod+V}}.

Sudut kiri bawah gambar mendarat di penunjuk (atau di tengah paparan), 40 % selebar apa yang anda lihat; alih, skala dan klipkannya seperti mana-mana gambar. Namanya ialah nama lukisan dengan `-picture-1.png` (kemudian `-2`, …), dan sejarah menyatakannya.
{{ui:Edit}} › {{ui:More}} › {{ui:Paste a picture}} melakukan perkara yang sama dari menu (pelayar mungkin bertanya dahulu).

DWG hanya menyimpan nama fail gambar, jadi menyimpan lukisan juga menyimpan gambar sebagai fail sendiri. Simpan kedua-duanya dalam folder yang sama: lukisan menunjukkan gambar dari situ. Dalam pelayar, itu ialah muat turun kedua, dan sejarah menyatakannya. Jika tiada apa-apa selain objek CadCraft pada papan keratan, {{key:Mod+V}} menampal objek itu, seperti sebelum ini.

## Tampal kawasan yang disalin dalam MarkupCraft

{{ui:Copy area}} dalam MarkupCraft menyalin sebahagian helaian sebagai gambar yang tahu saiznya. CadCraft menampalnya pada saiz itu.

1. Dalam MarkupCraft, salin kawasan (segi empat tepat, bulatan atau bentuk bebas; {{ui:Copy as overlay}} jika anda mahu melihat lukisan anda melaluinya).
2. Dalam CadCraft, tekan {{key:Mod+V}}, atau taip {{cmd:PASTEAREA}} (atau `PAREA`), atau pilih {{ui:Edit}} › {{ui:More}} › {{ui:Paste a copied area}}.
3. `Tentukan sudut kiri bawah kawasan yang disalin`: klik, atau taip titik. Bingkai bersaiz kawasan itu mengikuti penunjuk.

Berapa besar ia mendarat:

- **Helaian itu mempunyai skala lukisan:** pada saiz sebenar, dalam unit lukisan (butiran 1:50 bagi tangga 2 m ialah 2 m panjang dalam lukisan meter, 78.74 dalam lukisan inci). Tiada apa lagi yang ditanya.
- **Helaian itu tiada skala:** CadCraft menyatakan saiznya pada kertas dan meminta skala: taip `100` untuk helaian 1:100, tekan {{key:Enter}} untuk saiz kertas, atau taip `P`, klik dua titik pada gambar yang ditampal dan taip berapa jauh sebenarnya ia (seperti yang dilakukan {{cmd:SCANSCALE}}). Sudut kiri bawah kekal di tempat anda meletakkannya.

Lukisan tanpa unit mengambil milimeter, seperti underlay PDF. Overlay mengekalkan kertasnya lutsinar dan bermula sepudar mana ia disalin; di luar bulatan atau bentuk bebas juga lutsinar. Kawasan yang ditampal ialah gambar seperti mana-mana gambar lain: alih, putar, skala, klip atau padam, dan keseluruhan tampalan ialah satu langkah buat asal. Disimpan sebagai DWG, ia ialah IMAGE dengan pudar dan ketelusannya.

{{key:Mod+V}} menampal kawasan apabila gambar pada papan keratan ialah kawasan itu, atau apabila kawasan itu disalin selepas apa-apa yang anda salin dalam CadCraft (dan dalam 6 jam terakhir). Jika tidak, ia menampal seperti sebelum ini. {{cmd:PASTEAREA}} menampal kawasan terakhir yang disalin pada bila-bila masa.

## Tunjukkan gambar yang digunakan DWG

DWG hanya menyimpan di mana gambarnya berada, jadi CadCraft menunjukkan setiap satu sebagai bingkai dengan nama failnya.

1. Taip {{cmd:IMAGE}} (atau `IM`). Baris arahan menyenaraikan setiap fail gambar dan sama ada ia ditunjukkan.
2. Pilih fail (beberapa sekali gus). Fail yang namanya mengandungi nama yang dinyatakan oleh lukisan juga dikira, kerana eksport selalunya menambah awalan projek.

## Klipkan gambar

1. Taip {{cmd:IMAGECLIP}} (atau `ICL`) dan pilih gambar.
2. Pilih `R` dan klik dua sudut, atau `P` dan klik titik-titik poligon, kemudian {{key:Enter}}. `D` mengalih keluar klip.

## Plot gambar

Gambar masuk ke dalam PDF sebagai gambar, pada resolusinya sendiri dan di bawah garisan. Dalam kotak dialog {{ui:Plot}}, {{ui:Pictures}} boleh mengehadkannya kepada 600, 300 atau 150 dpi untuk menjadikan fail lebih kecil. JPEG dimasukkan seperti sedia ada.

## Apa yang disimpan di mana

| Format | Gambar |
|---|---|
| DWG (setiap versi) | Sebagai gambar (IMAGE), dengan klipnya |
| DXF | Sebagai bingkainya dengan nama fail; simpanan memaklumkannya |

## Objek daripada program lain (OLE)

Lukisan boleh memegang objek yang dibuat oleh program lain, seperti gambar daripada program lukisan atau julat hamparan (objek OLE). CadCraft tidak menjalankan atau menyuntingnya, dan tidak boleh memasukkan yang baharu. Inilah yang dilakukannya:

- **Dalam DXF**, objek OLE dibuka sebagai bingkai. Jika objek itu menyimpan gambar dirinya dan gambar itu ialah bitmap, gambar itu dilukis di dalam bingkai; jika tidak, bingkai membawa label dengan jenis objek, seperti "Microsoft Excel Worksheet (OLE)". Anda boleh mengalih, menyalin dan memadam bingkai seperti blok. {{cmd:SAVEAS}} ke DXF 2000 menulisnya semula sebagai objek OLE, dengan datanya tidak berubah.
- **Dalam DWG**, objek dikekalkan dan ditulis semula apabila anda menyimpan sebagai DWG, bait demi bait, tetapi ia **tidak ditunjukkan**: DWG mengekalkan tempat objek dalam datanya sendiri, dan CadCraft belum membacanya. Sejarah menyatakan berapa banyak yang dikekalkan. Taip {{cmd:OLELIST}} untuk melihat apa ia (jenis, saiz, sama ada setiap satu menyimpan gambar) dan untuk meletakkan salinan gambar di tempat yang anda pilih: **Letak** meminta nombor, sudut kiri bawah dan lebar, dan melukis bingkai dengan gambar di dalamnya. Salinan itu ialah bingkai yang boleh anda alih atau padam; objek itu sendiri kekal dalam lukisan dan masih ditulis semula apabila anda menyimpan.
- Objek yang datang daripada DXF disimpan dalam DWG sebagai bingkai dan labelnya sahaja; sejarah menyatakannya. Simpan sebagai DXF 2000 untuk mengekalkan objek itu sendiri.
- Gambar metafail (yang kebanyakan program simpan) tidak dilukis: bingkai dan label muncul sebaliknya.

## Ralat lazim

| Anda nampak | Sebabnya | Pembetulan |
|---|---|---|
| Bingkai dengan nama fail | CadCraft tidak mempunyai fail itu | {{cmd:IMAGE}}, kemudian pilih fail |
| "Itu bukan gambar" | Objek yang dipilih bukan gambar | Pilih bingkai gambar |
