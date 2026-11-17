---
title: Dokumen dan semakan (peti simpanan)
summary: Panduan langkah demi langkah untuk satu kerja sebenar: letakkan folder projek di bawah kawalan, semak keluar lukisan, ubahnya, semak masuk dengan nota, hantar untuk semakan, luluskan dan keluarkannya, lihat sejarah dan apa yang menggunakannya, apa yang dilihat orang kedua semasa ia dikunci, dan cara ia berfungsi dengan folder awan.
keywords: peti simpanan, dokumen, panduan, tutorial, semak keluar, semak masuk, semakan, keluarkan, luluskan, kunci, sejarah, folder awan, folder projek, pengurusan dokumen, pdm, dua orang, folder dikongsi
from: 3829528d
---

## Apa yang akan anda lakukan

Anda ialah Ana, bekerja pada Riverside Clinic bersama rakan sekerja, Ben. Lukisan projek tinggal dalam satu folder yang anda berdua boleh capai (pemacu dikongsi, folder yang diselaraskan, atau folder awan). Menjelang tamat, satu fail telah bergerak dari salinan pertamanya kepada semakan **A** yang dikeluarkan, telah diubah sekali lagi sebagai **B.1**, anda telah melihat siapa yang melakukan apa, dan anda telah melihat apa yang Ben lihat semasa anda memegang fail itu.

Semua disimpan dalam folder tersembunyi `.ccvault` di sebelah fail anda: tiada pelayan, tiada yang dimuat naik (folder awan ialah pengecualian, lihat langkah terakhir). Untuk setiap butang dan peraturan di satu tempat, lihat topik *Dokumen: semak keluar, semakan dan keluaran* di mana app anda menyediakannya.

## 1. Sediakan folder projek

1. Pilih {{ui:Dokumen…}} dalam menu {{ui:Lagi}} bagi tab **Paparan**, atau taip `DOCUMENTS` (atau `DOCS`) dan tekan {{key:Enter}}.
2. Pilih {{ui:Pilih folder projek}} dan pilih folder yang menyimpan lukisan projek. (Folder projek berfungsi dalam Studio dan dalam pelayar yang boleh membuka folder, seperti Chrome dan Edge. Dalam pelayar lain panel menyatakannya.)
3. Pilih {{ui:Tukar}} di sebelah **Anda:** dan taip nama anda, `Ana` (jika ia bertanya, juga nama komputer ini). Panel kini berbunyi *Anda: Ana di* dan komputer anda. Nama anda dilekatkan pada setiap perkara yang anda lakukan.
4. Pilih {{ui:Mulakan peti dalam folder ini}} dan taip nama projek, `Riverside clinic`. Panel berbunyi *Peti dimulakan untuk Riverside clinic.*

## 2. Letakkan fail di bawah kawalan

1. Buka **Fail yang tiada dalam peti** dan pilih {{ui:Tambah (A)}} di sebelah `plans/A-101.dxf`.
2. Ia muncul di bawah **Fail dalam peti** pada semakan **A.1**, keadaan **Kerja dalam proses**. A.1 ialah salinan pertamanya; peti menyimpan salinan bagi setiap semakan.

## 3. Semak keluar, ubah, semak masuk

1. Pilih {{ui:Buka}} di sebelah `plans/A-101.dxf`. Lukisan dibuka dalam CadCraft dan panel ditutup supaya anda dapat melihatnya. Panel itu masih satu arahan jauhnya: `DOCUMENTS`.
2. Buka panel semula dan pilih {{ui:Semak keluar}}. Baris itu kini berbunyi **Disemak keluar kepada anda**. Fail kunci dibuat dalam `.ccvault/locks`; tiada siapa lain boleh menyemak keluar fail ini sehingga anda menyemak masuknya.
3. Lukis sesuatu: tambah garisan, alihkan dinding. Tiada apa yang anda lakukan boleh disimpan ke atas fail peti melainkan lukisan itu disemak keluar kepada anda; Simpan sebagai sentiasa berfungsi untuk salinan milik anda sendiri.
4. Buka panel, pilih {{ui:Semak masuk}} dan taip apa yang berubah (`Moved the door`). Panel berbunyi *disemak masuk sebagai A.2*. Fail dalam folder projek kini ialah lukisan yang anda buka, dan kunci telah hilang. Semak masuk tanpa perubahan mengekalkan semakan.

Jika anda berubah fikiran, {{ui:Buat asal semakan keluar}} mengembalikan fail tanpa semakan baharu.

## 4. Semak dan keluarkan

1. Pilih {{ui:Hantar untuk semakan}}. Keadaan menjadi **Untuk semakan** dan fail dibaca sahaja.
2. Sebelum meluluskan, pilih {{ui:Tetapan projek}} dan senaraikan siapa yang boleh meluluskan (satu nama setiap baris), contohnya `Ben` dan `Carla`, dan tandakan peraturan bahawa pelulus mestilah orang selain pengarang. Pilih {{ui:Simpan tetapan}}. Kini peti itu sendiri menolak sesiapa yang lain.
3. Ben (atau Carla) pilih {{ui:Luluskan}} dan taip nama pelulus. Keadaan menjadi **Dikeluarkan** dan semakan menjadi **A**, dengan *diluluskan oleh* dan nama. Fail yang dikeluarkan dibaca sahaja. {{ui:Hantar balik}} akan mengembalikannya kepada Kerja dalam proses, dengan sebab.

Nama pelulus ialah nama yang ditaip dalam panel; ia ialah rekod siapa yang meluluskan, bukan bukti identiti.

## 5. Semakan baharu

1. Pada fail yang dikeluarkan, pilih {{ui:Semakan baharu}}. Anda memegangnya untuk huruf seterusnya.
2. Ubahnya, kemudian {{ui:Semak masuk}}. Semakannya ialah **B.1**, kerja dalam proses. Keluarkannya dengan cara yang sama dan ia menjadi **B**. {{ui:Buat asal semakan keluar}} sebelum semak masuk pertama meninggalkannya pada **A**.

Huruf semakan berjalan A, B … Z, AA, AB. Jika standard anda meninggalkan sesetengah huruf, tetapan projek *Gunakan jujukan ASME Y14.35* melangkau I, O, Q, S, X dan Z untuk semakan seterusnya.

## 6. Lihat apa yang berlaku

Pilih nama fail untuk membuka butirannya:

- **{{ui:Sejarah}}**: setiap peristiwa, yang terbaru dahulu, dengan siapa, komputer mana dan bila: *Disemak masuk A.2* oleh Ana, *Dikeluarkan* oleh Ben, dan seterusnya.
- **{{ui:Semakan}}**: jadual semakan. {{ui:Buka salinan}} membuka satu semakan sebagai salinan biasa yang tidak boleh menulis ganti fail peti; {{ui:Bandingkan dengan}} menyenaraikan apa yang ditambah, dibuang dan diubah berbanding semakan sebelumnya, atau mana-mana semakan lain.
- **{{ui:Penggunaan}}**: lukisan yang dipautkan olehnya (xref).
- **{{ui:Digunakan oleh}}**: menyenaraikan setiap lukisan lain dalam peti yang memautkan ke lukisan ini: ubah pelan asas dan anda tahu helaian mana yang perlu disemak.

## Semakan pada helaian

Dengan lukisan dibuka (dan susun atur di dalamnya), pilih {{ui:Blok semakan}}: jadual semakan yang dikeluarkan dilukis di bahagian atas kanan helaian. Pilih {{ui:Isi blok tajuk}} untuk mengisi atribut blok tajuk yang ditanda `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` atau `APPROVED_BY` dengan semakan, keadaan, tarikh dan pelulus fail. Apabila anda meluluskan keluaran seterusnya, blok semakan dikemas kini.

## 7. Apa yang Ben lihat semasa anda memegang fail

Sekarang semak keluar fail itu semula, dan minta Ben membuka folder projek yang sama di komputernya dan membuka panel. Pada baris fail itu dia melihat **Disemak keluar oleh Ana pada** komputer anda **sejak** masa itu, dan tiada butang {{ui:Semak keluar}}. Jika dia cuba juga, peti menolaknya: kunci ialah fail yang sistem tidak akan buat dua kali, jadi dua orang tidak boleh memegang fail itu serentak, walaupun dalam saat yang sama, apabila folder berada di cakera dalam Studio. (Dalam pelayar, folder hanya membenarkan usaha terbaik, dan panel menyatakannya di bawah **Folder**.)

Jika Ana tiada dan Ben perlukan fail itu, {{ui:Pecahkan semakan keluar}} membebaskannya. Dia mesti menaip sebab; ia masuk ke log bersama nama pemilik semakan keluar itu. Apabila projek menyenaraikan admin, hanya mereka boleh. Semakan keluar yang lebih lama daripada had basi (14 hari secara lalai) ditanda *sudah lama*. Selepas pecah, semak masuk lewat Ana ditolak, supaya anda berdua tidak boleh menulis ganti antara satu sama lain.

## 8. Folder awan

Folder awan ialah folder projek yang disimpan dalam storan awan pasukan anda, jadi pasukan tidak memerlukan pemacu dikongsi. Dalam Studio, selepas log masuk ke akaun CadCraft anda, panel menunjukkan {{ui:Buka folder awan}} di sebelah {{ui:Pilih folder projek}}. Pilihnya dan pilih folder, yang disenaraikan sebagai ruang kerja / folder. Pemilik ruang kerja mencipta folder itu dahulu, dan storan awan pasukan mesti sedang berkuat kuasa. Semua yang di atas berfungsi sama; pelayan membuat kunci, yang ketat merentasi orang. Jika anda tidak log masuk, panel meminta anda log masuk. Dalam tab pelayar biasa butang awan tidak ditawarkan; gunakan Studio.

## Cuba

Lakukan lapan langkah di atas dengan salinan fail sebenar. Untuk langkah dua orang, anda perlukan orang lain, atau dua tetingkap dengan dua nama. Jika anda mencubanya dengan folder dikongsi sebenar, halaman ujian komuniti menyenaraikan semakan yang menanyakan perkara tepat ini, dan menerima keputusan.
