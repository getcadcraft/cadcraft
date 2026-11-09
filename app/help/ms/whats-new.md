---
title: Perkara baharu dalam 0.8 dan 0.8.1
summary: Hantu yang melengkapkan lukisan anda, lakaran pen dan foto lakaran ditukar kepada geometri, helaian yang tersusun sendiri, butiran yang ditawarkan semasa melukis, GRIDMOVE dan AUTODIM, tag, fail mesra gabungan, markup ditukar kepada semakan, lukisan tanpa penglihatan, had lukisan, bearing, fon SHX, rajah daripada teks, dan pembetulan dalam 0.8.1.
keywords: perkara baharu, apa yang baharu, nota keluaran, log perubahan, perubahan, 0.8, 0.8.1, versi, ciri baharu, autolengkap, hantu, tab, sketchfix, photosketch, autosheet, butiran, gridmove, autodim, tag, redline, gabungan, git, fossil, akses, lukisan tanpa penglihatan, pembaca skrin, had, bearing, aunits, shx, rajah, ole, sejarah, bandingkan, dalam perkataan, sifat, kaki dan inci, regang, bahasa, peranti input, masalah, live, pembantu
from: 9dd82db5
---

Ini yang berubah dalam CadCraft 0.8 dan 0.8.1, berbanding 0.7. 0.8 (1 November 2026) menambah pembantu lukisan yang berfungsi daripada lukisan anda sendiri, mengikut peraturan pada komputer anda dan tanpa model, dan 0.8.1 (2 November 2026) membetulkan pepijat yang dilaporkan selepasnya.

## Baharu

### Lukisan yang melengkapkan fikiran anda

- **Hantu menunjukkan apa yang seterusnya.** Tanpa arahan berjalan, hantu kelabu putus-putus menunjukkan apa yang dikatakan oleh corak lukisan anda sendiri sebagai seterusnya: kayu tegak seterusnya pada jarak yang sama, anak tangga seterusnya bagi sebuah tangga, dinding yang hilang bagi sebuah bilik. Tekan {{key:Tab}} untuk melukisnya sebagai satu langkah buat asal, atau {{key:Esc}} untuk mengetepikannya. Ia hanya melihat objek yang terbaharu, jadi ia kekal lancar pada lukisan yang besar. Matikan dalam {{ui:Tetapan}} › {{ui:CadCraft}} atau dengan {{cmd:AUTOCOMPLETE}} `Off`.
- **Titik seterusnya semasa anda melukis garisan.** Di tengah-tengah {{cmd:LINE}} atau {{cmd:PLINE}}, hantu ialah titik seterusnya: anak tangga seterusnya, bucu keempat segi empat tepat, atau titik yang menutupnya. Dekatkan kursor kepadanya dan tekan {{key:Tab}}, seolah-olah anda telah mengklik di situ.
- **Lakaran pen menjadi geometri tepat.** {{cmd:SKETCHFIX}}: lukis garisan kasar dengan pen, tetikus atau jari dan setiap satunya menjadi garisan, bulatan, lengkok, segi empat tepat atau polygaris yang kemas, disnap kepada apa yang sudah dilukis. Lihat [Lakar dengan pen dan dapatkan geometri tepat](topic:sketch-with-a-pen).
- **Foto lakaran menjadi lukisan.** {{cmd:PHOTOSKETCH}} (`PSK`) mencari kertas dalam foto, meluruskan perspektif, menggunakan saiz kertas dan skala yang anda berikan, dan menjejak garisan pen ke atas satu lapisan bagi setiap warna pen. Tulisan tidak dijejak.
- **Dimensikan mengikut peraturan.** {{cmd:AUTODIM}} (`ADIM`) membuat rantaian dimensi sepanjang sisi yang anda pilih, saiz keseluruhan, lebar bukaan, diameter lubang dan, dengan `Grid`, jarak grid. Ia tidak pernah mengulang dimensi yang sudah ada.
- **Alihkan garisan grid dan set akan mengikutinya.** {{cmd:GRIDMOVE}} (`GM`): dinding yang berakhir pada garisan grid akan teregang bersamanya, dinding di sepanjangnya, tiang, bulatan dan tagnya turut beralih, dan dimensi di atasnya mengukur jarak yang baharu. Satu langkah buat asal.

### Helaian, butiran dan tag

- **Helaian yang tersusun sendiri.** {{cmd:AUTOSHEET}} mengambil pandangan bernama anda (atau bahagian berasingan model), memilih saiz kertas dan skala piawai, dan meletakkan pandangan pada helaian baharu dengan blok tajuk dan kapsyen nama dan skala. Semuanya kekal boleh disunting. Lihat [Susun helaian untuk saya](topic:lay-out-sheets-for-me).
- **Butiran firma anda, ditawarkan semasa anda melukis.** {{cmd:DETAILS}} (`DET`) menyimpan blok butiran anda sendiri. Apabila apa yang anda pilih sepadan dengannya melalui perkataan pada lapisan, nama blok dan nota, bar status akan memaklumkannya; pilih dan letakkannya. {{cmd:DETAILS}} › Kongsi meletakkan senarai anda dalam folder Dokumen anda dan membawa masuk apa yang telah ditambah oleh pasukan anda. {{ui:Tetapan}} mematikan tawaran.
- **Tag pada blok.** {{cmd:TAGS}} mentakrifkan tag (jenisnya, nilai yang boleh diambilnya, blok yang digunakan padanya), menetapkannya pada rujukan blok yang anda pilih, dan menyenaraikannya sebagai jadual yang boleh anda simpan sebagai CSV. Takrifan disimpan dalam DWG. Lihat [Tag](topic:tags).
- **Had lukisan.** {{cmd:LIMITS}} menetapkan segi empat tepat untuk lukisan: grid memenuhinya dan zum Semua memaparkannya. Had dipaparkan sebagai garis luar dan disimpan dalam DWG dan DXF, bersama had kertas. Lihat [Tetapkan had lukisan](topic:drawing-limits).

### Bekerja dengan orang lain dan program lain

- **Tukar markup menjadi semakan.** {{cmd:REDLINE}} membaca pakej yang ditulis oleh MarkupCraft dan menyenaraikan setiap perubahan. Terima atau tolak setiap satu dengan nota; yang diterima mendapat awan semakan dan log semakan dalam satu langkah buat asal, dan anda menyimpan fail jawapan yang menutup markup dalam MarkupCraft. Lihat [Tukar markup menjadi semakan](topic:redline-to-revision).
- **Lukisan yang boleh digabungkan oleh git dan Fossil.** Dengan {{ui:Fail mesra gabungan}} dihidupkan dalam {{ui:Tetapan}} › {{ui:CadCraft}}, setiap objek mendapat kunci yang tidak pernah berubah (fail kira-kira 10 peratus lebih besar). `cadcraft merge base ours theirs` kemudian menggabungkan suntingan dua orang pada satu objek DWG atau DXF demi objek dan hanya melaporkan tempat dua orang mengubah perkara yang sama. Lihat [Gabungkan suntingan dua orang pada satu lukisan](topic:merge-drawings).
- **Apa yang berubah, dalam perkataan.** Dalam {{ui:Sejarah}}, Bandingkan memberikan senarai yang mudah: di mana perkara berubah, sebesar mana kawasan itu, apa yang ditambah, dialih keluar atau diubah, dan teks yang disunting. Lihat [Nyatakan dalam perkataan apa yang berubah](topic:changes-in-words).
- **Bearing dan sudut.** Taip arah sebagai bearing juruukur seperti N45°23'30"E, atau dalam darjah, minit dan saat, di mana-mana sahaja sudut diminta; AUNITS menetapkan cara sudut dipaparkan. Lihat [Taip dan paparkan bearing dan sudut](topic:bearings-and-angles).
- **Fon SHX anda sendiri.** Berikan CadCraft folder fon SHX dan gaya teks yang menamakannya akan dilukis dengannya, pada skrin dan dalam plot. Lihat [Lukis teks dengan fon SHX anda sendiri](topic:shx-fonts).
- **Rajah daripada teks.** {{cmd:DIAGRAM}} membaca carta alir Mermaid, rajah komponen PlantUML, D2 atau senarai dari-ke dan melukis blok serta penyambung yang boleh anda sunting. Lihat [Lukis rajah daripada teks](topic:text-to-diagram).
- **Objek OLE dalam DWG.** {{cmd:OLELIST}} menyenaraikan objek OLE yang dibawa oleh DWG dan yang CadCraft tidak dapat letakkan sendiri, dan meletakkan salinan gambar di tempat yang anda nyatakan. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).
- **Pengiraan anda kekal bersama lukisan.** Helaian kira dan sebab reka bentuk disimpan dalam DWG bersama jadual kelas.

### Lukisan tanpa penglihatan

- Hidupkan {{ui:Lukisan tanpa penglihatan}} dalam {{ui:Tetapan}} (atau taip {{cmd:ACCESS}} dan jawab `On`). CadCraft menyebut setiap arahan dan hasil melalui pembaca skrin anda, menerangkan lukisan dan apa yang berdekatan kursor, membolehkan anda menggerakkan kursor dan memilih titik dengan papan kekunci, dan memainkan bunyi bagi setiap snap dan grip. Jika pelayar anda boleh mengenali pertuturan pada komputer anda, arahan boleh dituturkan. Lihat [Lukis tanpa penglihatan](topic:draft-without-sight).

### Dalam setiap aplikasi

- **Bahasa.** 54 bahasa; sepuluh baharu (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek). Bahasa selain Inggeris ialah draf mesin sehingga penutur asli membacanya.
- **Peranti input.** Pad jejak, pen, tetikus 3D, pengawal permainan dan kawalan MIDI.
- **Baris bar alat dan grid sifat.** {{ui:Tetapan}} › {{ui:Umum}} › {{ui:Baris bar alat}} menawarkan Balut, 2 baris atau 1 baris dalam aplikasi lain. CadCraft menyimpan tetapannya sendiri dalam {{ui:Tetapan}} › {{ui:CadCraft}} (lihat [Baris bar alat](topic:settings#toolbar-rows)). Grid sifat yang dikongsi terdapat dalam tiga aplikasi lain, bukan dalam CadCraft.
- **Masalah, Live dan add-on.** Panel Masalah dikongsi yang memberi amaran dalam setiap aplikasi, paparan Live tentang siapa berada di mana dalam CadCraft Studio (lihat [Bekerja pada satu lukisan bersama](topic:work-live)), dan senarai add-on.
- **Sambungkan AI anda.** Satu sambungan dari CadCraft Studio ke kesemua lapan aplikasi, dengan tahap baca sahaja, cadang atau sunting bagi setiap aplikasi dan log dalam bahasa mudah tentang apa yang dilakukan pembantu. CadCraft tidak mempunyai AI sendiri, dan Tanya dalam setiap aplikasi menggunakan AI yang anda sambungkan.

## Diperbaiki dalam 0.8.1

- **Sifat menunjukkan 150 dan bukannya 12'-6"** dalam lukisan kaki dan inci. Medan yang dibaca sendiri oleh aplikasi mengekalkan teksnya semula.
- **Fail DWG yang bahagian kelasnya dibaca sebagai jenis yang salah** (GitHub cadcraft#5) kini dibuka dengan betul.
- **Silang tidak lagi dipaparkan di belakang tetingkap timbul.**
- **Studio dan edisi berpek boleh menukar bahasa semasa larian.** Sebelum ini, hanya Inggeris. Belum diuji pada setiap platform: beritahu kami jika bahasa tidak berubah.
- **Tablet dalam potret** memberikan ruang tinggi grid tambahan kepada kanvas, dan mod helaian bermula pada 760 px atau kurang.
- **STRETCH dengan tetingkap silang, dan LIMITS,** telah dilaporkan pada Studio 0.8.0 dan sudah betul dalam binaan web 0.8; pemasang pelapor adalah lebih lama. Studio 0.8.1 membawanya.

## Belum ada dalam versi ini

- **0.8 dan 0.8.1 tidak ditandatangani kod.** Windows mungkin memberi amaran (pilih {{ui:Maklumat lanjut}}, kemudian {{ui:Tetap jalankan}}); pada Mac, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. Binaan Store ditangguhkan, dan binaan iPad serta iPhone belum dibina semula untuk 0.8.1.
- **Lakaran pen dan foto lakaran** hanya dicuba pada foto rekaan dan tetikus, belum dengan pen sebenar, skrin sentuh atau lakaran tangan di atas kertas.
- **Lukisan tanpa penglihatan** telah diuji dengan semakan automatik, belum dengan pembaca skrin atau penguji yang tidak dapat melihat.
- **Perkongsian butiran** belum disemak oleh dua orang, dan folder Pelan Awan Pasukan sebagai folder Dokumen belum dibina.
- **Penggabungan** berfungsi untuk fail DWG dan DXF CadCraft; bagi fail aplikasi lain, belum dibina.
- **Buat asal merentas tetingkap:** CadCraft melaporkan setiap langkah yang selesai, tetapi Studio belum mempunyai satu Buat asal untuk semua aplikasi; setiap aplikasi membuat asal langkahnya sendiri.
- **Objek OLE DWG** disimpan tetapi tidak dilukis di tempatnya.
- **Pembacaan jadual gaya plot (fail CTB)** daripada program lain telah dibina tetapi belum disemak dengan fail daripada program lain.
- **Sambungkan AI anda:** sambungan satu klik dalam Studio, penyambung dihoskan untuk AI pelayar, kunci API anda sendiri dalam Studio dan pakej MCP yang diterbitkan tidak dijanjikan dalam keluaran ini.

Untuk versi sebelum ini, lihat [Perkara baharu dalam 0.7](topic:whats-new-0-7).
