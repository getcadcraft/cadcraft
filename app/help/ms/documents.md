---
title: Dokumen: semak keluar, semakan dan keluaran
summary: Kawal lukisan dalam folder projek: semak keluar fail supaya tiada orang lain mengubahnya, semak masuk sebagai semakan baharu, hantar untuk semakan dan keluarkan dengan nama pelulus; sejarah, apa yang menggunakan apa, senarai bahan dan blok tajuk yang menunjukkan semakan.
keywords: tetapan projek, pelulus, pentadbir, huruf semakan, ASME, baca sahaja, bandingkan semakan, buka salinan, partcraft, bimcraft, dokumen, DOCUMENTS, DOCS, peti simpanan, pengurusan dokumen, pdm, semak keluar, semak masuk, kunci, semakan, rev, huruf semakan, keluaran, dikeluarkan, luluskan, kelulusan, kajian semula, usang, di mana digunakan, bom, senarai bahan, blok tajuk, blok semakan, folder projek
from: ee938722
---

## Apa yang anda akan hasilkan

Folder projek yang mana setiap lukisan mempunyai semakan (A.1, A.2 … kemudian A, B …) dan keadaan (Kerja dalam proses, Untuk semakan, Dikeluarkan, Usang), di mana hanya seorang pada satu masa boleh mengubah fail, dan di mana setiap semak keluar, semak masuk, kelulusan dan pecahan semak keluar dicatatkan dengan siapa yang melakukannya dan bila.

Semua disimpan dalam folder itu sendiri, dalam folder `.ccvault` tersembunyi di sebelah lukisan anda. Folder pada pemacu kongsi atau folder yang diselaraskan berfungsi untuk seluruh pasukan. Tiada pelayan dan tiada apa-apa dimuat naik.

## Buka Dokumen

Taip `DOCUMENTS` (atau `DOCS`) dan tekan {{key:Enter}}. Panel dibuka di sebelah lukisan.

Pilih {{ui:Pilih folder projek}} dan pilih folder yang memegang lukisan projek. Folder projek berfungsi dalam CadCraft Studio dan dalam pelayar yang boleh membuka folder (Chrome, Edge). Dalam pelayar lain, panel akan memberitahu anda.

Kali pertama, taip nama anda (ia dimasukkan pada setiap tindakan anda) dan nama komputer ini. Jika anda sudah log masuk, nama anda sudah ada.

## Mulakan peti simpanan

Folder yang belum menjadi peti simpanan menawarkan {{ui:Mulakan peti simpanan dalam folder ini}}. Taip nama projek. Kemudian buka {{ui:Fail tidak dalam peti simpanan}} dan pilih {{ui:Tambah (A)}} di sebelah setiap fail yang hendak dikawal. Fail yang anda tambah bermula pada semakan **A.1**, Kerja dalam proses.

## Tukar lukisan

1. Pilih {{ui:Buka}} di sebelah lukisan. Ia dibuka dalam CadCraft. Jika ia tidak disemak keluar kepada anda, lihat sahaja dan jangan ubahnya: {{ui:Simpan}} enggan menulis ganti fail itu dan memberitahu sebabnya (guna {{ui:Simpan sebagai}} untuk menyimpan salinan anda sendiri).
2. Pilih {{ui:Semak keluar}}. Tiada orang lain boleh menyemak keluarnya sekarang; panel menunjukkan siapa yang memegangnya, pada komputer mana, dan sejak bila.
3. Lukis.
4. Pilih {{ui:Semak masuk}} dan nyatakan apa yang berubah. Lukisan yang anda buka disimpan ke dalam folder projek dalam format asalnya dan menjadi semakan seterusnya (A.1, kemudian A.2). Semak masuk tanpa perubahan mengekalkan semakan.

{{ui:Buat asal semakan keluar}} memulangkan fail tanpa semakan baharu.

## Semakan dan keluaran

- {{ui:Hantar untuk semakan}}: fail menjadi baca sahaja semasa ia disemak.
- {{ui:Luluskan}}: taip nama pelulus. A.3 menjadi **A**, Dikeluarkan. Fail yang dikeluarkan ialah baca sahaja.
- {{ui:Hantar balik}}: kembali kepada Kerja dalam proses, dengan sebab.
- {{ui:Semakan baharu}} pada fail yang dikeluarkan menyemak keluarnya untuk huruf seterusnya: semak masuk pertamanya ialah **B.1**. {{ui:Buat asal semakan keluar}} sebelum itu membiarkannya pada A.
- {{ui:Jadikan usang}} menamatkan fail yang dikeluarkan.

Projek boleh menyimpan senarai siapa yang boleh meluluskan, dan boleh mewajibkan pelulus bukan orang yang menyemak masuk fail itu (lihat Tetapan projek di bawah).

## Tetapan projek

Buka {{ui:Tetapan projek}} dalam panel:

- **Pelulus**: satu nama setiap baris. Apabila ada, hanya mereka boleh meluluskan keluaran.
- **Pelulus mesti orang lain selain pengarang**: peraturan "empat mata".
- **Pentadbir**: satu nama setiap baris. Apabila ada, hanya mereka boleh memecahkan semak keluar orang lain atau menukar tetapan ini.
- **Huruf semakan untuk dikecualikan**: {{ui:Gunakan urutan ASME Y14.35}} melangkau I, O, Q, S, X dan Z, atau taip huruf anda sendiri. Huruf yang sudah diberi kekal; pilihan itu terpakai pada semakan seterusnya.
- **Semak keluar dianggap lapuk selepas**: bilangan hari (14 secara lalai).

Pilih {{ui:Simpan tetapan}}. Perubahan itu ditulis dalam log dengan nama orang yang membuatnya.

## Seseorang meninggalkan fail dalam semak keluar

{{ui:Pecahkan semakan keluar}} membebaskan fail yang disemak keluar oleh orang lain (mereka tiada, atau komputer mereka rosak). Anda mesti menaip sebab: ia ditulis dalam log beserta nama semak keluar yang dipecahkan. Apabila projek mempunyai pentadbir, hanya mereka boleh melakukannya. Semak keluar yang lebih tua daripada 14 hari ditandakan sebagai sudah lama.

## Sejarah, semakan, penggunaan, digunakan oleh

Pilih nama fail untuk melihat:

- {{ui:Sejarah}}: setiap peristiwa, yang terbaharu dahulu, dengan siapa, komputer mana dan bila.
- {{ui:Semakan}}: setiap semakan yang disimpan. Salinan setiap semakan ada dalam peti simpanan (kandungan yang sama disimpan sekali sahaja). {{ui:Buka salinan}} membuka semakan itu sebagai salinan biasa yang tidak boleh menulis ganti fail dalam peti simpanan. {{ui:Bandingkan dengan}} menyenaraikan apa yang ditambah, dibuang dan diubah antara semakan itu dengan yang sebelumnya (atau mana-mana yang anda pilih), dan mewarnakannya pada lukisan.
- {{ui:Penggunaan}}: lukisan yang dipautkan (xref), dokumen yang ditunjuk oleh model IFC, bahagian himpunan PartCraft.
- {{ui:Digunakan oleh}}: setiap fail dalam peti simpanan yang menggunakan fail ini.

{{ui:Senarai bahan (CSV)}} menyimpan senarai semua yang digunakan oleh fail, mengikut aras, dengan kuantiti, semakan dan keadaan, untuk hamparan.

## Blok semakan pada helaian

Dengan lukisan yang dibuka dan mempunyai layout, pilih {{ui:Blok semakan}}. Jadual semakan yang dikeluarkan (semakan, tarikh, oleh, diluluskan, huraian) dilukis di bahagian kanan atas helaian yang anda lihat. Apabila anda meluluskan keluaran, jadual itu dikemas kini.

## Semakan dalam blok tajuk

Berikan atribut blok tajuk anda salah satu tag ini dan pilih {{ui:Isi blok tajuk}} pada lukisan yang dibuka:

| Tag | Diisi dengan |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | semakan (B, atau B.2 semasa ia sedang dikerjakan) |
| `VAULT.STATE` | keadaan (Dikeluarkan …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | tarikh semakan terkini |
| `VAULT.APPROVER`, `APPROVED_BY` | siapa yang meluluskan keluaran terkini |

## PartCraft dan BimCraft

PartCraft dan BimCraft mempunyai panel Dokumen yang sama untuk fail mereka sendiri: bahagian dan himpunan dalam PartCraft, model IFC dalam BimCraft. Semak masuk menyimpan model yang dibuka ke dalam folder projek, dan himpunan menunjukkan bahagian mana yang digunakannya serta senarai bahan.

## Perkara yang perlu diketahui

- Dua orang pada folder kongsi yang sama tidak boleh kedua-duanya menyemak keluar fail yang sama: semak keluar ialah fail yang sistem enggan cipta dua kali. Dalam pelayar, dan dalam Studio yang shellnya lebih lama daripada ciri ini, ini sama ketat seperti yang dibenarkan oleh folder: dua semak keluar dalam sela masa yang sangat singkat mungkin berjaya kedua-duanya. Panel memberitahu yang mana berlaku.
- Jangan edit atau padam folder `.ccvault` secara manual. Log di dalamnya ialah rekod; peti simpanan membina semula senaraianya daripadanya jika perlu.
- Perubahan pada fail dalam folder tanpa semak keluar ditunjukkan sebagai {{ui:Diubah dalam folder tanpa semakan keluar}}.
