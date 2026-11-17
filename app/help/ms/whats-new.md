---
title: Perkara baharu dalam 0.9
summary: Hatch yang mengikut sempadannya, kumpulan lapisan, lantai bertindan, dinding pintar 2D dengan pintu dan tingkap, gaya teks dan editor teks berformat, baris arahan terapung, snap grid, sepuluh cara melukis lengkok, serta panel Dokumen.
keywords: perkara baharu, 0.9, nota keluaran, log perubahan, hatch, hatch bersekutu, hatchedit, fail pat, fail corak, kumpulan lapisan, laygroup, lantai, lantai bertindan, floorlayers, dinding pintar, dinding, pintu, tingkap, alat dinding, gaya teks, gaya, editor mtext, teks perenggan, format, baris arahan terapung, baris arahan, bahagian atas, padat, snap ke grid, snap grid, f9, lengkok, panel dokumen, semak keluar, keluli UK, draw.io, teks thai, dxf r12, perkara baharu, 0.8, 0.8.1, versi, ciri baharu, autocomplete, hantu, tab, sketchfix, photosketch, autosheet, perincian, gridmove, autodim, tag, redline, gabung, git, fossil, akses, lukisan tanpa penglihatan, pembaca skrin, had, bearing, aunits, shx, gambar rajah, ole, sejarah, bandingkan, dalam perkataan, sifat, kaki dan inci, regang, bahasa, peranti input, masalah, live, pembantu
from: 8b6dea0b
---

Inilah yang berubah dalam CadCraft 0.9, berbanding 0.8.1. CadCraft ialah aplikasi lukisan 2D dan 3D bagi CadCraft Studio 0.9 dan lapan aplikasinya. 0.9 menyiapkan lukisan pelan, menambah gaya teks dan editor teks sebenar, serta memberi anda lebih ruang pada skrin.

## Baharu

### Lukisan pelan

- **Hatch yang mengikut sempadannya.** {{cmd:HATCH}} dipautkan kepada apa yang membataskannya. Alih, putar atau skalakan sempadan dan hatch serta coraknya turut mengikut; bentukkan semula dan hatch dikira semula. {{cmd:HATCHEDIT}} (`HE`) menukar hatch selepas itu dan membuat atau menamatkan pautan. Lihat [Hatch dan kawasan isian](topic:hatch).
- **Fail corak hatch.** Pada soalan {{cmd:HATCH}} `Pick internal point`, taip `F` (Pattern file) dan pilih fail `.pat`. Hanya fail yang ditulis dalam format lazim telah dicuba.
- **Kumpulan lapisan.** Dalam {{ui:Tools}} pada panel {{ui:Layers}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} dan {{ui:Find a layer}}; atau taip {{cmd:LAYGROUP}} (`LG`). Lihat [Susun lukisan dengan lapisan](topic:layers#group-layers).
- **Lantai bertindan.** {{cmd:FLOORS}} (`FLR`), atau {{ui:Floors…}} dalam menu {{ui:More}} kumpulan {{ui:View}}. Viewport pada helaian boleh menunjukkan satu lantai di bawah {{ui:Floor shown}} dalam Sifat. {{cmd:FLOORLAYERS}} menukar lantai kepada lapisan untuk fail yang akan dihantar kepada orang lain. Lihat [Susun lantai dalam satu lukisan](topic:floors).
- **Dinding pintar 2D, pintu dan tingkap.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) dan {{cmd:DELOPENING}}. Sudut, cantuman T dan persilangan dikira untuk anda. Dinding menyimpan rekod cara ia bercantum, dan Sifat mendapat Larang sambungan di permulaan / di hujung, Garis lokasi dan Panjang yang boleh disunting. Lihat [Lukis dinding, pintu dan tingkap 2D](topic:walls-2d).
- **Alat dinding pada dinding pelan.** Taip {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} dan yang lain. Ia belum mempunyai butang bar alat. Lihat [Bentuk dinding, potongan, ofset dan kunci untuk dinding 2D](topic:wall-tools-2d).

### Teks

- **Gaya teks.** {{cmd:STYLE}} (`ST`), atau {{ui:Text style}} pada bar alat {{ui:Draw}}: gaya bernama dengan fon, ketinggian, faktor lebar dan kecondongan. Lihat [Tetapkan fon dan saiz teks dengan gaya teks](topic:text-styles).
- **Editor teks perenggan berformat.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} atau klik dua kali pada teks membuka kotak dengan fon, saiz, tebal, condong, garis bawah, garis coret, warna, penjajaran dan tanda darjah, tanda tambah-tolak serta diameter, serta {{ui:OK}} dan {{ui:Cancel}}. Lihat [Format teks perenggan](topic:format-paragraph-text).
- **Gambar rajah daripada XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) turut membaca XML draw.io yang ditampal. Lihat [Lukis gambar rajah daripada teks](topic:text-to-diagram).
- **Teks Thai dalam plot PDF.** Sebelum ini ia dicetak sebagai tanda soal.

### Lebih ruang dan alat bantu lukisan

- **Baris arahan terapung yang lebih nipis dan kawasan atas yang padat.** Seret grip baris arahan untuk mengapungkannya, seret tepi atasnya untuk kurang baris, {{key:F2}} membuka sejarah. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} dan pilihan kawasan atas mempunyai tetapan yang sama. Lihat [Tetapan](topic:settings#command-line).
- **Menu snap objek.** Klik kanan {{ui:Snap}} pada bar status, atau taip {{cmd:OSNAP}}.
- **Snap ke grid.** Butang {{ui:Grid snap}} pada bar status, atau {{key:F9}}: titik yang dipilih pergi ke titik grid terdekat apabila tiada snap objek mengambil titik itu.
- **Lengkok dalam sepuluh cara, dan Teruskan.** {{ui:Arc}} pada bar alat {{ui:Draw}} atau {{cmd:ARC}}: 3 titik, keluarga Mula/Pusat/Akhir dan keluarga Pusat/Mula/Akhir, serta Teruskan (tekan {{key:Enter}} pada titik mula) daripada garisan, lengkok atau polygaris terakhir.
- **Panel Dokumen.** {{cmd:DOCUMENTS}} (`DOCS`) atau {{ui:Documents…}} dalam menu {{ui:More}} kumpulan {{ui:View}}: semakan, keadaan dan daftar keluar untuk setiap lukisan dalam folder projek. Ia dibuka sebagai dialog berpusat. Lihat [Dokumen](topic:documents).

### Fail

- **Saiz keluli UK.** 976 keratan dalam panel Standard, ditaip seperti dalam lukisan (contohnya `305x165x40 UB`).
- **Pek Afrika Selatan** (amalan lukisan dan peraturan bangunan) sebagai pek add-on Peraturan bangunan. Nombor-nombornya belum disahkan.
- **Add-on untuk CadCraft,** ditambah atas permintaan dan dimatikan secara lalai: reka bentuk pencahayaan dalaman, reka bentuk cip (HDL kepada susun atur), ukiran penghala, simulasi litar, sprocket rantai penggelek dan pek negara Peraturan bangunan.

## Diperbaiki

- Memindahkan, memutar atau menskala hatch meninggalkan coraknya.
- {{cmd:GRIDMOVE}} membawa seluruh dinding pelan yang hanya bermula pada garis grid. Dinding kini dinilai mengikut hujungnya.
- Grid hanya ditunjukkan dalam had lukisan walaupun had dimatikan.
- Senarai blok dalam panel sisi boleh diskrol, dan nama yang bukan blok menyenaraikan blok yang bermula dengannya ("Did you mean").
- Fail DXF R12 yang AutoCAD tolak ("Unknown group 1001 for table") kini dibuka di sana.
- Fail yang sangat besar (kira-kira 70,000 entiti ke atas) gagal dibuka dengan "Maximum call stack size exceeded".
- Fail DWG daripada AutoCAD 2018 ke atas dengan versi penyelenggaraan tinggi gagal dibuka dengan "bad BITLONG code 11".
- Dalam kotak teks perenggan, saiz baharu yang ditaip untuk bahagian terpilih mengekalkan pilihan.

## Dalam setiap aplikasi

Tip alat Bootstrap pada setiap kawalan yang mempunyai petunjuk, tip permulaan yang boleh anda tutup, tab yang boleh diskrol apabila tidak muat, dan tajuk tab pelayar yang mengikut lukisan terbuka (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} kini ialah senarai juntai bawah dengan pilihan dua baris. Senarai bahasa dalam {{ui:Settings}} lebih panjang daripada dalam 0.8. Penyuntingan bersama Live, koleksi Pustaka serta unit berat dan suhu diterangkan dalam nota Studio.

## Had yang jujur

- Teks perenggan tiada senarai bullet atau bernombor, pembaris tab atau justify. PDF yang diplot menetapkan teks dalam Helvetica.
- Dinding pelan adalah lurus, jadi lengkok dilukis sebagai dinding pendek. Semakan tangan komuniti bagi alat dinding masih menunggu.
- Kumpulan lapisan tidak ditulis dalam format AutoCAD sendiri, jadi AutoCAD menunjukkan senarai rata. Program lain menunjukkan semua lantai bersama melainkan anda menjalankan {{cmd:FLOORLAYERS}}.
- Panel Dokumen belum dicuba oleh dua orang pada perkongsian sebenar. Ukiran penghala belum dijalankan pada mana-mana mesin sebenar. Anggaran pencahayaan telah diperiksa terhadap surihan foton, bukan program lain. Add-on kejuruteraan ialah alat semakan, bukan pengganti semakan jurutera.
- Bahasa selain bahasa Inggeris ialah draf mesin, dan sesetengah perkataan baharu hanya dalam bahasa Inggeris.

## Terdahulu: 0.8 dan 0.8.1

Inilah yang berubah dalam CadCraft 0.8 dan 0.8.1, berbanding 0.7. 0.8 (1 November 2026) menambah alat bantu lukisan yang bekerja daripada lukisan anda sendiri, mengikut peraturan pada komputer anda dan tanpa model, dan 0.8.1 (2 November 2026) membetulkan pepijat yang dilaporkan selepasnya.

### Baharu

**Lukisan yang melengkapkan fikiran anda**

- **Hantu menunjukkan apa yang seterusnya.** Tanpa arahan berjalan, hantu kelabu putus-putus menunjukkan apa yang dikatakan oleh corak lukisan anda seterusnya: tiang seterusnya pada jarak yang sama, langkah seterusnya bagi tangga, dinding yang hilang bagi sebuah bilik. Tekan {{key:Tab}} untuk melukisnya sebagai satu langkah buat asal, atau {{key:Esc}} untuk menutupnya. Ia hanya melihat objek yang terbaharu, jadi ia kekal lancar pada lukisan besar. Matikannya dalam {{ui:Settings}} › {{ui:CadCraft}} atau dengan {{cmd:AUTOCOMPLETE}} `Off`.
- **Titik seterusnya semasa anda melukis garisan.** Di tengah-tengah {{cmd:LINE}} atau {{cmd:PLINE}}, hantu ialah titik seterusnya: langkah seterusnya bagi tangga, sudut keempat segi empat tepat, atau titik yang menutupnya. Bawa kursor berhampirinya dan tekan {{key:Tab}}, seolah-olah anda mengkliknya di situ.
- **Lakaran pen menjadi geometri tepat.** {{cmd:SKETCHFIX}}: lukis coretan kasar dengan pen, tetikus atau jari dan setiap satu menjadi garisan, bulatan, lengkok, segi empat tepat atau polygaris yang kemas, di-snap kepada apa yang sudah dilukis. Lihat [Lakar dengan pen dan dapatkan geometri tepat](topic:sketch-with-a-pen).
- **Foto lakaran menjadi lukisan.** {{cmd:PHOTOSKETCH}} (`PSK`) mencari kertas dalam foto, meluruskan perspektif, mengenakan saiz kertas dan skala yang anda beri, dan menyurih garisan pen ke lapisan untuk setiap warna pen. Tulisan tangan tidak disurih.
- **Dimensikan mengikut peraturan.** {{cmd:AUTODIM}} (`ADIM`) membuat rantai dimensi sepanjang sisi yang anda pilih, saiz keseluruhan, lebar bukaan, diameter lubang dan, dengan `Grid`, jarak grid. Ia tidak sekali-kali mengulang dimensi yang sudah ada.
- **Alih garis grid dan set mengikut.** {{cmd:GRIDMOVE}} (`GM`): dinding yang berakhir pada garis grid meregang bersamanya, dinding di sepanjangnya, tiang, gelembung dan tagnya bergerak, dan dimensi di atasnya mengukur jarak baharu. Satu langkah buat asal.

**Helaian, perincian dan tag**

- **Helaian yang menyusun sendiri.** {{cmd:AUTOSHEET}} mengambil pandangan bernama anda (atau bahagian model yang berasingan), memilih saiz kertas dan skala piawai, dan meletakkan pandangan itu pada helaian baharu dengan blok tajuk dan kapsyen nama-dan-skala. Semuanya kekal boleh disunting. Lihat [Susun helaian untuk saya](topic:lay-out-sheets-for-me).
- **Perincian firma anda, ditawarkan semasa anda melukis.** {{cmd:DETAILS}} (`DET`) menyimpan blok perincian anda sendiri. Apabila apa yang anda pilih sepadan dengan satu melalui perkataan pada lapisannya, nama blok dan nota, bar status memberitahunya; pilihnya dan letakkannya. {{cmd:DETAILS}} › Kongsi meletakkan senarai anda dalam folder Dokumen anda dan membawa masuk apa yang telah ditambah oleh pasukan anda. {{ui:Settings}} mematikan tawaran itu.
- **Tag pada blok.** {{cmd:TAGS}} mentakrifkan tag (jenisnya, nilai yang boleh diambilnya, blok yang digunakannya), menetapkannya pada rujukan blok yang anda pilih, dan menyenaraikannya sebagai jadual yang boleh anda simpan sebagai CSV. Takrifnya disimpan dalam DWG. Lihat [Tag](topic:tags).
- **Had lukisan.** {{cmd:LIMITS}} menetapkan segi empat tepat untuk lukisan: grid memenuhinya dan zum Semua menunjukkannya. Had itu ditunjukkan sebagai garis luar dan disimpan dalam DWG dan DXF, bersama had kertas. Lihat [Tetapkan had lukisan](topic:drawing-limits).

**Bekerja dengan orang lain dan program lain**

- **Tukar penanda kepada semakan.** {{cmd:REDLINE}} membaca pakej yang ditulis MarkupCraft dan menyenaraikan setiap perubahan. Terima atau tolak setiap satu dengan nota; yang diterima mendapat awan semakan dan log semakan dalam satu langkah buat asal, dan anda menyimpan fail jawapan yang menutup penanda dalam MarkupCraft. Lihat [Tukar penanda kepada semakan](topic:redline-to-revision).
- **Lukisan yang boleh digabungkan oleh git dan Fossil.** Dengan {{ui:Merge-friendly files}} dihidupkan dalam {{ui:Settings}} › {{ui:CadCraft}}, setiap objek mendapat kunci yang tidak pernah berubah (fail kira-kira 10 peratus lebih besar). `cadcraft merge base ours theirs` kemudian menggabungkan suntingan dua orang bagi satu objek DWG atau DXF mengikut objek, dan hanya melaporkan tempat dua orang mengubah perkara yang sama. Lihat [Gabungkan suntingan dua orang bagi satu lukisan](topic:merge-drawings).
- **Apa yang berubah, dalam perkataan.** Dalam Sejarah, Bandingkan memberikan senarai biasa: di mana perkara berubah, sebesar mana tempatnya, apa yang ditambah, dibuang atau diubah, dan teks yang disunting. Lihat [Terangkan dalam perkataan apa yang berubah](topic:changes-in-words).
- **Bearing dan sudut.** Taip arah sebagai bearing juruukur seperti N45°23'30"E, atau dalam darjah, minit dan saat, di mana sahaja sudut diminta; AUNITS menetapkan cara sudut ditunjukkan. Lihat [Taip dan tunjukkan bearing dan sudut](topic:bearings-and-angles).
- **Fon SHX anda sendiri.** Berikan CadCraft folder fon SHX, dan gaya teks yang menamakannya akan dilukis dengannya, di skrin dan dalam plot. Lihat [Lukis teks dalam fon SHX anda sendiri](topic:shx-fonts).
- **Gambar rajah daripada teks.** {{cmd:DIAGRAM}} membaca carta alir Mermaid, gambar rajah komponen PlantUML, D2 atau senarai dari-ke, dan melukis blok serta penyambung yang boleh anda sunting. Lihat [Lukis gambar rajah daripada teks](topic:text-to-diagram).
- **Objek OLE dalam DWG.** {{cmd:OLELIST}} menyenaraikan objek OLE yang dibawa oleh DWG dan yang CadCraft tidak boleh letakkan sendiri, dan meletakkan salinan gambar di tempat yang anda nyatakan. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).
- **Pengiraan anda kekal bersama lukisan.** Helaian kiraan dan sebab reka bentuk disimpan dalam DWG bersama jadual kelas.

**Lukisan tanpa penglihatan**

- Hidupkan {{ui:Drafting without sight}} dalam {{ui:Settings}} (atau taip {{cmd:ACCESS}} dan jawab `On`). CadCraft menuturkan setiap arahan dan hasil melalui pembaca skrin anda, menerangkan lukisan dan apa yang berada berhampiran kursor, membenarkan anda menggerakkan kursor dan memilih titik dengan papan kekunci, serta memainkan bunyi untuk setiap snap dan grip. Di mana pelayar anda boleh mengenali pertuturan pada komputer anda, arahan boleh dituturkan. Lihat [Lukis tanpa penglihatan](topic:draft-without-sight).

**Dalam setiap aplikasi**

- **Bahasa.** 54 bahasa; sepuluh baharu (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek). Bahasa selain bahasa Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Peranti input.** Pad sentuh, pen, tetikus 3D, pengawal permainan dan kawalan MIDI.
- **Bar alat dan grid sifat.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} menawarkan Balut, 2 baris atau 1 baris dalam aplikasi lain. CadCraft mengekalkan tetapannya sendiri dalam {{ui:Settings}} › {{ui:CadCraft}} (lihat [Baris bar alat](topic:settings#toolbar-rows)). Grid sifat dikongsi terdapat dalam tiga aplikasi lain, bukan dalam CadCraft.
- **Masalah, Live dan add-on.** Panel Masalah dikongsi yang memberi amaran dalam setiap aplikasi, paparan Live tentang siapa berada di mana dalam CadCraft Studio (lihat [Bekerja pada satu lukisan bersama](topic:work-live)), dan senarai add-on.
- **Sambungkan AI anda.** Satu sambungan dari CadCraft Studio ke semua lapan aplikasi, dengan tahap baca sahaja, cadangan atau sunting bagi setiap aplikasi, dan log ringkas dalam bahasa mudah tentang apa yang pembantu lakukan. CadCraft tiada AI sendiri, dan Tanya dalam setiap aplikasi menggunakan AI yang anda sambungkan.

### Diperbaiki dalam 0.8.1

- **Sifat menunjukkan 150 dan bukannya 12'-6"** dalam lukisan kaki-dan-inci. Medan yang dibaca sendiri oleh aplikasi mengekalkan teksnya semula.
- **Fail DWG yang bahagian kelasnya dibaca sebagai jenis yang salah** (GitHub cadcraft#5) kini dibuka dengan betul.
- **Silang kursor tidak lagi ditunjukkan di belakang pop timbul.**
- **Studio dan edisi pakej boleh menukar bahasa semasa berjalan.** Sebelum ini, ia hanya dalam bahasa Inggeris. Belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.
- **Tablet dalam potret** memberi ruang grid lebihan kepada kanvas, dan mod helaian bermula pada 760 px atau kurang.
- **STRETCH dengan tetingkap silang, dan LIMITS,** dilaporkan pada Studio 0.8.0 dan sudah betul dalam binaan web 0.8; pemasang pelapor itu lebih lama. Studio 0.8.1 membawanya.

### Belum ada dalam versi ini

- **0.8 dan 0.8.1 tidak ditandatangani kod.** Windows mungkin memberi amaran (pilih {{ui:More info}}, kemudian {{ui:Run anyway}}); pada Mac, klik kanan CadCraft Studio dan pilih {{ui:Open}}. Binaan kedai ditangguhkan, dan binaan iPad serta iPhone tidak dibina semula untuk 0.8.1.
- **Lakaran pen dan foto lakaran** baru dicuba pada foto rekaan dan tetikus, belum dengan pen sebenar, skrin sentuh atau lakaran tangan di atas kertas.
- **Lukisan tanpa penglihatan** telah diuji dengan semakan automatik, belum dengan pembaca skrin atau penguji buta.
- **Berkongsi perincian** belum disemak oleh dua orang, dan folder Team Cloud Plan sebagai folder Dokumen belum dibina.
- **Penggabungan** berfungsi untuk fail DWG dan DXF CadCraft; yang sama untuk fail aplikasi lain belum dibina.
- **Buat asal merentasi tetingkap:** CadCraft melaporkan setiap langkah yang selesai, tetapi Studio belum mempunyai satu {{ui:Undo}} untuk semua aplikasi; setiap aplikasi membatalkan langkahnya sendiri.
- **Objek OLE DWG** dikekalkan tetapi tidak dilukis di tempatnya.
- **Membaca jadual gaya plot (fail CTB)** daripada program lain telah dibina tetapi belum diperiksa dengan fail daripada program lain.
- **Sambungkan AI anda:** sambungan satu klik dalam Studio, penyambung hos untuk AI pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan tidak dijanjikan dalam keluaran ini.

Untuk versi sebelum ini, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
