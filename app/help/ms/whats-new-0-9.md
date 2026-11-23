---
title: Perkara baharu dalam 0.9 (terdahulu)
summary: Hatch yang mengikut sempadannya, kumpulan lapisan, lantai bertindan, dinding pintar 2D dengan pintu dan tingkap, gaya teks dan penyunting teks berformat, baris arahan terapung, snap grid, sepuluh cara melukis lengkok, dan panel Dokumen.
keywords: whats new 0.9, keluaran terdahulu, perkara baharu, 0.9, nota keluaran, log perubahan, hatch, hatch berkaitan, hatchedit, fail pat, fail corak, kumpulan lapisan, laygroup, lantai, lantai bertindan, floorlayers, dinding pintar, dinding, pintu, tingkap, alatan dinding, gaya teks, style, penyunting mtext, teks perenggan, pemformatan, baris arahan terapung, baris arahan, kawasan atas, padat, snap ke grid, snap grid, f9, lengkok, panel dokumen, semak keluar, saiz keluli UK, draw.io, teks thai, dxf r12, perkara baharu, whats new, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, autolengkap, hantu, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tag, redline, gabung, git, fossil, access, lukisan tanpa penglihatan, pembaca skrin, had, bearing, aunits, shx, diagram, ole, sejarah, bandingkan, dalam perkataan, sifat, kaki dan inci, regang, bahasa, peranti input, masalah, langsung, pembantu
from: 3451e64c
---

Ini ialah perubahan dalam CadCraft 0.9, berbanding dengan 0.8.1. CadCraft ialah aplikasi lukisan 2D dan 3D bagi CadCraft Studio 0.9 dan lapan aplikasinya. 0.9 melengkapkan lukisan pelan, menambah gaya teks dan penyunting teks sebenar, dan memberi anda lebih ruang pada skrin.

## Baharu

### Lukisan pelan

- **Hatch yang mengikut sempadannya.** {{cmd:HATCH}} dipautkan kepada apa yang membataskannya. Alih, putar atau skalakan sempadan dan hatch serta coraknya mengikut; bentukkan semula dan hatch dikira semula. {{cmd:HATCHEDIT}} (`HE`) menukar hatch selepas itu dan membuat atau menamatkan pautan. Lihat [Hatch dan kawasan isian](topic:hatch).
- **Fail corak hatch.** Pada soalan {{cmd:HATCH}} `Pick internal point`, taip `F` (Pattern file) dan pilih fail `.pat`. Hanya fail yang ditulis dalam format biasa telah dicuba.
- **Kumpulan lapisan.** Dalam {{ui:Tools}} pada panel {{ui:Layers}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} dan {{ui:Find a layer}}; atau taip {{cmd:LAYGROUP}} (`LG`). Lihat [Atur lukisan dengan lapisan](topic:layers#group-layers).
- **Lantai bertindan.** {{cmd:FLOORS}} (`FLR`), atau {{ui:Floors…}} dalam menu {{ui:More}} bagi kumpulan {{ui:View}}. Viewport pada helaian boleh menunjukkan satu lantai di bawah {{ui:Floor shown}} dalam Properties. {{cmd:FLOORLAYERS}} menukar lantai kepada lapisan untuk fail yang akan dihantar kepada orang lain. Lihat [Susun lantai dalam satu lukisan](topic:floors).
- **Dinding pintar 2D, pintu dan tingkap.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) dan {{cmd:DELOPENING}}. Sudut, cantuman T dan persilangan dikira untuk anda. Dinding menyimpan rekod cara ia bercantum, dan Properties mendapat Disallow join at start / at end, Location line dan Length yang boleh disunting. Lihat [Lukis dinding, pintu dan tingkap 2D](topic:walls-2d).
- **Alatan dinding pada dinding pelan.** Taip {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} dan yang lain. Ia belum mempunyai butang bar alat. Lihat [Bentuk dinding, potongan, ofset dan kunci untuk dinding 2D](topic:wall-tools-2d).

### Teks

- **Gaya teks.** {{cmd:STYLE}} (`ST`), atau {{ui:Text style}} pada bar alat {{ui:Draw}}: gaya bernama dengan fon, ketinggian, faktor lebar dan kecondongan. Lihat [Tetapkan fon dan saiz teks dengan gaya teks](topic:text-styles).
- **Penyunting teks perenggan berformat.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} atau klik dua kali pada teks membuka kotak dengan fon, saiz, tebal, condong, garis bawah, garis tengah, warna, penjajaran dan tanda darjah, tambah dan diameter, serta {{ui:OK}} dan {{ui:Cancel}}. Lihat [Format teks perenggan](topic:format-paragraph-text).
- **Gambar rajah daripada XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) juga membaca XML draw.io yang ditampal. Lihat [Lukis gambar rajah daripada teks](topic:text-to-diagram).
- **Teks Thai dalam plot PDF.** Dahulu ia dicetak sebagai tanda soal.

### Lebih banyak ruang dan bantuan lukisan

- **Baris arahan terapung dan lebih nipis, serta bahagian atas yang padat.** Seret pemegang baris arahan untuk mengapungkannya, seret tepi atasnya untuk lebih sedikit baris, {{key:F2}} membuka sejarah. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} dan pilihan bahagian atas mempunyai tetapan yang sama. Lihat [Tetapan](topic:settings#command-line).
- **Menu snap objek.** Klik kanan {{ui:Snap}} dalam bar status, atau taip {{cmd:OSNAP}}.
- **Snap ke grid.** Butang {{ui:Grid snap}} dalam bar status, atau {{key:F9}}: titik yang dipilih pergi ke titik grid terdekat apabila tiada snap objek mengambil titik itu.
- **Lengkok dalam sepuluh cara, dan Continue.** {{ui:Arc}} pada bar alat {{ui:Draw}} atau {{cmd:ARC}}: 3 titik, keluarga Start/Center/End dan keluarga Center/Start/End, dan Continue (tekan {{key:Enter}} pada titik mula) daripada garisan, lengkok atau polygaris terakhir.
- **Panel Dokumen.** {{cmd:DOCUMENTS}} (`DOCS`) atau {{ui:Documents…}} dalam menu {{ui:More}} bagi kumpulan {{ui:View}}: semakan, keadaan dan semak keluar untuk setiap lukisan dalam folder projek. Ia dibuka sebagai dialog di tengah. Lihat [Dokumen](topic:documents).

### Fail

- **Saiz keluli UK.** 976 seksyen dalam panel Standard, ditaip seperti dalam lukisan (contohnya `305x165x40 UB`).
- **Pek Afrika Selatan** (amalan lukisan dan peraturan bangunan) sebagai pek add-on Building regulations. Nombornya belum disahkan.
- **Add-on untuk CadCraft,** ditambah apabila diperlukan dan dimatikan secara lalai: reka bentuk pencahayaan dalaman, reka bentuk cip (HDL kepada susun atur), ukiran penghala, simulasi litar, sprocket rantai roller dan pek negara Building regulations.

## Diperbetulkan

- Mengalih, memutar atau menskala hatch meninggalkan coraknya.
- {{cmd:GRIDMOVE}} membawa dinding pelan yang hanya bermula pada garisan grid. Dinding kini dinilai mengikut hujungnya.
- Grid hanya ditunjukkan dalam had lukisan walaupun had dimatikan.
- Senarai blok dalam panel sisi boleh digulung, dan nama yang bukan blok menyenaraikan blok yang bermula dengannya ("Did you mean").
- Fail DXF R12 yang AutoCAD tolak ("Unknown group 1001 for table") kini dibuka di sana.
- Fail yang sangat besar (kira-kira 70,000 entiti ke atas) gagal dibuka dengan "Maximum call stack size exceeded".
- Fail DWG daripada AutoCAD 2018 ke atas dengan versi penyelenggaraan yang tinggi gagal dibuka dengan "bad BITLONG code 11".
- Dalam kotak teks perenggan, saiz baharu yang ditaip untuk bahagian yang dipilih mengekalkan pilihan.

## Dalam setiap aplikasi

Tip alat Bootstrap pada setiap kawalan dengan petunjuk, tip mula yang boleh anda tutup, jalur tab yang boleh digulung apabila tidak muat, dan tajuk tab pelayar yang mengikut lukisan yang dibuka (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} kini ialah senarai juntai bawah pilihan dua baris. Senarai bahasa dalam {{ui:Settings}} lebih panjang daripada 0.8. Penyuntingan bersama secara langsung, koleksi Pustaka dan unit berat dan suhu diterangkan dalam nota Studio.

## Had jujur

- Teks perenggan tidak mempunyai senarai berbutir atau bernombor, pembaris tab atau penjajaran rata. Plot PDF menetapkan teks dalam Helvetica.
- Dinding pelan adalah lurus, jadi lengkok dilukis sebagai dinding pendek. Semakan tangan komuniti bagi alatan dinding masih menunggu.
- Kumpulan lapisan tidak ditulis dalam format AutoCAD sendiri, jadi AutoCAD menunjukkannya sebagai senarai rata. Program lain menunjukkan semua lantai bersama melainkan anda menjalankan {{cmd:FLOORLAYERS}}.
- Panel Dokumen belum dicuba oleh dua orang pada perkongsian sebenar. Ukiran penghala belum dijalankan pada mesin sebenar. Anggaran pencahayaan disemak terhadap jejak foton, bukan program lain. Add-on kejuruteraan ialah alat semakan, bukan pengganti semakan jurutera.
- Bahasa selain Inggeris ialah draf mesin sehingga penutur asli membacanya, dan sebahagian perkataan baharu hanya dalam Inggeris.
