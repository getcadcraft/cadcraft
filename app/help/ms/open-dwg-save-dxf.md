---
title: Buka DWG, sunting dan simpan salinan
summary: Buka lukisan yang dihantar kepada anda, semak apa yang dimasukkan, buat perubahan, dan hantar balik salinan sebagai DWG atau DXF.
keywords: dwg, dxf, buka, import, eksport, simpan, r12, kitaran penuh, perunding, xref, semak lukisan, saveas, simpan sebagai, simpan dwg, format
from: 49de4bf6
---

## Apa yang anda akan lakukan

Buka DWG daripada perunding, semak apa yang CadCraft dapat tunjukkan dan tidak dapat tunjukkan, tambah nota, plot helaian ke PDF dan simpan salinan untuk dihantar balik, sebagai DWG atau DXF.

## Buka fail

1. Tekan {{key:Mod+O}}, atau klik {{ui:Buka}}.
2. Pilih fail `.dwg`.

Baris status menunjukkan "Membaca …" semasa lukisan dibaca. Apabila selesai, lukisan memenuhi skrin, dan sejarah menyatakan, contohnya, "Dibuka plan.dwg: 18,240 objek pada 64 lapisan", dengan masa yang diambil.

:::offline
Anda di luar talian. Jika butang {{ui:Simpan untuk luar talian}} tertulis "Sedia luar talian", fail DWG dibuka seperti biasa. Jika tidak, dan tiada DWG telah dibuka dalam tab ini lagi, membuka DWG boleh gagal kerana pembaca DWG CadCraft dimuat turun bersama DWG pertama: buka DXF sebagai gantinya, atau simpan CadCraft untuk kegunaan luar talian semasa anda dalam talian kali seterusnya. Lihat [Bekerja luar talian](common:offline).
:::

## Semak apa yang dimasukkan

1. Lihat bahagian {{ui:Lukisan}} pada panel kiri: format dan versi, unit, bilangan objek dan lapisan, serta helaian.
2. Baca kotak "Mengenai fail ini" di bawahnya, jika ada.

Kotak itu menyenaraikan:

- **Belum dipaparkan:** objek yang CadCraft belum dapat lukis, mengikut jenis dan kiraan. Ia ditinggalkan, tidak diteka.
- **Layout (helaian) telah dimasukkan:** buka dengan tab di bawah lukisan.
- **Dimensi yang hanya dapat dibaca seperti yang dilukis.**

3. Klik tab di bawah lukisan untuk melihat setiap helaian.
4. Semak {{ui:Unit}} dalam {{ui:Tetapan semasa}} (tiada yang dipilih, tab {{ui:Model}}). Jika tertulis {{ui:Tanpa unit}} tetapi anda tahu lukisan itu dalam milimeter, tetapkannya, supaya skala helaian dan plot dibaca dengan betul.

:::tip
Jika anda menjangka suatu bahagian lukisan dan tidak dapat melihatnya, semak panel {{ui:Lapisan}}: lapisan itu mungkin dimatikan atau dibekukan dalam fail. Klik namanya untuk menjadikannya semasa; tindakan itu menghidupkannya.
:::

## Buat perubahan anda

1. Buat lapisan untuk nota anda: klik {{ui:Lapisan baharu}}, taip `NOTES` dan tekan {{key:Enter}}.
2. Taip `DT` dan tekan {{key:Enter}}.
3. Klik di tempat nota itu patut diletakkan.
4. Taip ketinggian teks yang sesuai dengan lukisan (lihat [Tambah teks dan label](topic:text)) dan tekan {{key:Enter}}.
5. Tekan {{key:Enter}} untuk kekalkan putaran pada 0.
6. Taip nota anda dan tekan {{key:Enter}}.
7. Tekan {{key:Enter}} sekali lagi untuk selesai.

Suntingan kepada dimensi yang dimasukkan tidak mengapa: sebaik sahaja anda menukar satu, CadCraft melukis semulanya mengikut gayanya sendiri.

## Plot helaian untuk semakan

1. Klik tab helaian.
2. Tekan {{key:Mod+P}}.
3. Klik {{ui:Muat turun PDF}}.

Lihat [Plot ke PDF](topic:plot-pdf).

## Simpan salinan

1. Tekan {{key:Mod+S}}, atau klik {{ui:Simpan}}.

Anda telah membuka DWG, jadi pelayar memuat turun `<name>.dwg`, dalam versi yang DWG itu datang. Sejarah menyatakan, contohnya, "Salinan disimpan sebagai Plan.dwg (DWG (AutoCAD 2018))." dan menyenaraikan, pada baris di bawahnya, apa-apa yang berubah dalam proses itu.

2. Baca baris-baris itu sebelum anda hantar fail. [Apa yang DWG simpan dan ubah](topic:files#what-a-dwg-keeps-and-changes) menerangkan setiap satu.

DWG asal anda tidak pernah diubah. Setiap simpanan ialah muat turun baharu.

## Simpan sebagai DWG atau DXF

Untuk memilih format sendiri:

1. Tekan {{key:Mod+Shift+S}}, atau klik {{ui:Simpan sebagai}}.

Kotak dialog {{ui:Simpan salinan sebagai}} dibuka dengan empat pilihan, setiap satu dengan nama fail yang akan diberikannya: {{ui:DWG}}, dengan senarai {{ui:Versi}}-nya, {{ui:DXF R12}}, {{ui:DXF 2000}} dan {{ui:DXF 2000 (binary)}}. Format dan versi semasa lukisan sudah dipilih.

2. Klik format yang anda mahu. Bagi DWG, pilih versi yang digunakan oleh pejabat lain, atau yang lebih lama: AutoCAD 2018, 2013, 2010, 2007, 2004 atau 2000.
3. Klik {{ui:Simpan}}.

Salinan dimuat turun. Mulai sekarang, {{key:Mod+S}} menyimpan lukisan ini dalam format itu, dan lukisan baharu bermula dengannya juga, dalam pelayar ini. {{ui:Batal}} atau {{key:Esc}} tidak menyimpan apa-apa, dan sejarah menyatakan "Tidak disimpan."

Format yang patut anda pilih:

- **DWG** menyimpan paling banyak: helaian dengan viewportnya, dimensi sebenar, corak hatch, nama lapisan dan blok seperti yang anda taip, dan teks berbilang baris sebagai teks berbilang baris. Versi AutoCAD 2000 dibuka dalam kebanyakan program; 2004 dan yang lebih baharu juga mengekalkan warna sebenar.
- **DXF 2000** ialah fail teks yang menyimpan hampir apa yang DWG simpan: setiap helaian sebagai layout dengan viewportnya, dimensi sebenar, corak hatch, warna sebenar, ketebalan garisan, jenis garisan, dan nama seperti yang anda taip. Ia dibuka dalam AutoCAD 2000 dan yang lebih baharu serta kebanyakan program CAD. Multipetunjuk menjadi garisan, kepala anak panah dan teks yang dilukisnya. DXF yang dibuka dalam versi 2000 atau yang lebih baharu disimpan sebagai DXF 2000.
- **DXF 2000 (binary)** mengandungi kandungan yang sama dengan DXF 2000 dalam bentuk binari format itu: fail yang lebih kecil yang menyimpan setiap nombor dengan tepat. Fail DXF binari daripada program lain dibuka seperti fail teks, dan lukisan yang dibuka daripada DXF binari disimpan semula sebagai binari.
- **DXF R12** dibuka dalam hampir mana-mana program CAD. Ia menyimpan helaian pertama dengan viewportnya, serta helaian CadCraft yang lain. Ia memudahkan perkara yang lebih baharu, seperti teks berbilang baris dan hatch.

## Apa yang pejabat lain akan lihat

Dalam DWG:

- Garisan, lengkok, bulatan, elips, polygaris, teks, teks berbilang baris, blok dengan atributnya, isian pepejal, corak hatch dan lapisan seperti yang anda lihat.
- Dimensi sebenar: program lain mengukurnya semula apabila ia diregangkan.
- Setiap helaian, dengan kertas dan viewportnya.
- Multipetunjuk sebagai multipetunjuk. Dalam versi AutoCAD 2000, warna sebenar menjadi warna standard yang terdekat.

Dalam DXF R12:

- Garisan, lengkok, bulatan, polygaris, teks, rujukan blok dan dimensi seperti yang anda lihat. Dimensi kekal sebagai dimensi sebenar.
- Nama lapisan dalam huruf besar, dengan ruang ditukar kepada `_`.
- Helaian pertama sebagai ruang kertas lukisan, dengan viewportnya. Helaian lain tiba sebagai blok bernama `CCLAYOUT_1` dan seterusnya; jika mereka perlukan setiap helaian sebagai layout, plot PDF bagi setiap helaian untuk mereka juga.
- Teks berbilang baris sebagai baris berasingan, elips sebagai polygaris, hatch sebagai garis luar.

Sama ada cara, apa-apa yang disenaraikan sebagai "Belum dipaparkan" semasa anda membuka DWG **tidak** ada dalam salinan itu, melainkan sejarah menyatakan ia dikekalkan: objek OLE DWG dan pepejal 3D dalam ruang model ditulis semula apabila anda simpan sebagai DWG. Beritahu mereka, dan hantar PDF juga.

## Kesilapan biasa

- **"CadCraft membuka lukisan DWG dan DXF."** Fail itu mempunyai sambungan lain. Semak ia ialah `.dwg` atau `.dxf`.
- **"Lukisan ini tidak dapat dibaca."** DWG itu rosak atau dalam versi yang pembacanya tidak kendalikan. Minta DXF, atau DWG yang disimpan dalam versi lebih lama.
- **"DXF binari ini berakhir di tengah-tengah objek."** Fail itu terpotong atau rosak. Taip RECOVER untuk membuka apa yang boleh dibaca, atau minta fail itu semula.
- **Fail yang disimpan dinamakan `name (1).dwg` atau `name (1).dxf`.** Pelayar berbuat begitu apabila fail dengan nama yang sama sudah ada dalam folder.
- **Mereka mempunyai program lama yang tidak dapat membuka DWG.** Simpan sebagai DWG dengan {{ui:Versi}} {{ui:AutoCAD 2000}}, atau sebagai {{ui:DXF R12}}: hampir mana-mana program CAD membukanya.
- **Sebahagian lukisan hilang.** Lukisan yang dipautkan (xref) tidak dimuatkan sehingga anda memilih failnya ({{cmd:XREF}}, `R`), dan gambar ditunjukkan sebagai bingkai dengan nama failnya.
