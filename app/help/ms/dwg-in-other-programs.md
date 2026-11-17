---
title: Buka DWG CadCraft dalam program lain
summary: Program mana yang telah membuka DWG yang disimpan oleh CadCraft, apa yang disemak, dan apa yang perlu dilakukan apabila salah satu daripadanya mengadu.
keywords: dwg, buka dalam program lain, keserasian, adakah ia dibuka, audit, trueview, program cad lain, dxf, semak, simpan sebagai dwg
from: 0f8c15c4
---

## Apa yang CadCraft tulis

{{ui:Simpan}} menulis DWG sebenar, dalam versi yang lukisan itu datang atau versi yang anda pilih dalam {{ui:Simpan sebagai}}: AutoCAD 2000, 2004, 2007, 2010, 2013 atau 2018. Tiada apa yang ditukar di belakang anda: sejarah menyenaraikan apa sahaja yang berubah dalam proses itu (contohnya warna benar yang ditulis sebagai warna standard terdekat dalam DWG 2000).

## Di mana ia telah dibuka

Setiap DWG yang ditulis CadCraft dibuka, dalam setiap versi, oleh tiga program yang bukan CadCraft: ODA File Converter (yang menyemak fail dan tidak membaiki apa-apa di dalamnya), LibreDWG dan libdxfrw. Bacaan mereka dibandingkan dengan bacaan CadCraft: objek, lapisan, blok dan atribut, dimensi, hatch, helaian dan viewportnya.

Membuka fail DWG CadCraft dalam AutoCAD dan dalam DWG TrueView percuma sedang disemak pada Windows, mengikut jenis objek (AUDIT, lapisan, helaian, dimensi, hatch, atribut, blok dinamik, rujukan berklip, gambar). Keputusan akan disenaraikan di sini apabila sudah ada.

## Apabila program lain mengadu

1. Simpan semula sebagai DXF ({{ui:Simpan sebagai}} › {{ui:DXF 2000}}) dan buka itu: kebanyakan program membaca DXF.
2. Simpan DWG dalam versi yang lebih lama (2013 atau 2010).
3. Beritahu kami di Discord program dan versi mana, dan apa yang dikatakannya; fail itu paling membantu.
