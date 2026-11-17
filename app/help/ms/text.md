---
title: Tambah teks dan label
summary: Letakkan label bilik dengan teks satu baris, tulis nota berlilit dengan teks perenggan yang ditaip terus, dan sunting teks kemudian.
keywords: teks, dtext, mtext, mleader, multileader, petunjuk, revcloud, awan semakan, awan, cari, ganti, cari dan ganti, perenggan, lilit, jarak baris, label, nota, anotasi, tinggi, jajar, textmask, topeng latar belakang, topeng, wipeout, putaran, sunting teks, ddedit, textedit, fon
from: 4b76be99
---

## Apa yang anda akan hasilkan

Dua label bilik, dipusatkan dalam bilik masing-masing, nota yang dililit mengikut lebarnya, kemudian pembetulan kepada salah satu label.

## Ketinggian teks dan skala lukisan

Ketinggian teks adalah dalam unit lukisan. Dalam lukisan dalam milimeter yang akan dicetak pada 1:50, teks setinggi 2.5 mm di atas kertas mesti 2.5 × 50 = 125 unit tinggi dalam model. Pada tab helaian, anda melukis dalam unit kertas, jadi 2.5 di situ ialah 2.5 mm di atas kertas.

## Letakkan label berpusat

1. Taip `DT` dan tekan {{key:Enter}} (atau klik {{ui:Text}} pada bar alat). Gesaan berbunyi `Specify start point of text [Justify]:`.
2. Taip `J` dan tekan {{key:Enter}}.
3. Pada `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, taip `MC` dan tekan {{key:Enter}}.
4. Pada `Specify insertion point of text`, klik di tengah sebuah bilik.
5. Pada `Specify height`, taip `250` dan tekan {{key:Enter}}.
6. Pada `Specify rotation angle of text <0>`, tekan {{key:Enter}}.
7. Pada `Enter text`, taip `KITCHEN` dan tekan {{key:Enter}}.

Label muncul, dipusatkan pada titik yang anda klik.

8. Tekan {{key:Enter}} pada gesaan `Enter text` yang kosong untuk menamatkan arahan.

## Tulis nota yang dililit

Teks perenggan ({{cmd:MTEXT}}) dililit kepada satu lebar dan ditaip terus ke atas lukisan.

1. Taip `T` dan tekan {{key:Enter}}, atau klik {{ui:Paragraph}} pada bar alat.
2. Pada `Specify first corner`, klik di tempat sudut kiri atas nota itu diletakkan.
3. Untuk menukar ketinggian dahulu, taip `H`, tekan {{key:Enter}}, taip `250` dan tekan {{key:Enter}}.
4. Pada `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, klik di sebelah kanan sudut pertama. Jarak merentasi ialah lebar teks dililit; sejauh mana anda klik ke bawah tidak mengehadnya.
5. Kotak dibuka di atas lukisan dengan kursor di dalamnya. Taip `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Perkataan dililit mengikut lebar semasa anda menaip.
6. Tekan {{key:Enter}} untuk memulakan perenggan baharu dan taip `CHECK ON SITE`.
7. Tekan {{key:Mod+Enter}}, klik {{ui:OK}}, atau klik di mana-mana di luar kotak. Nota itu ialah satu objek.

Bar di atas kotak menukar {{ui:Tinggi}}, {{ui:Jarak baris}} (1 ialah normal, 1.5 ialah separuh lagi), {{ui:Lebar}} (0 = tiada lilitan) dan {{ui:Jajar}} semasa anda menaip. {{key:Esc}} atau {{ui:Batal}} menutupnya tanpa menambah apa-apa.

Pilihan pada sudut kedua: `H` ketinggian, `J` penjajaran (`TL` kiri atas … `BR` kanan bawah: sudut atau tengah kotak yang kekal di tempatnya), `L` jarak baris, `R` putaran, `W` lebar yang ditaip dan bukannya sudut kedua.

:::note
Semasa kotak dibuka, {{key:Space}} menaip ruang dan {{key:Enter}} memulakan perenggan baharu. DWG yang disimpan mengekalkan teks perenggan sebagai MTEXT; DXF R12 tidak mempunyai teks perenggan, jadi setiap baris disimpan sebagai teksnya sendiri.
:::

### Beberapa baris tunggal sebaliknya

{{cmd:TEXT}} (`DT`) meminta satu baris pada satu masa: setiap {{key:Enter}} memulakan baris seterusnya, 1.667 kali ketinggian teks lebih rendah, dan setiap baris ialah objek sendiri. Tekan {{key:Enter}} pada baris kosong untuk selesai.

## Pilihan penjajaran

| Pilihan | Titik yang anda klik ialah |
|---|---|
| Kiri (lalai) | Hujung kiri garis dasar |
| Pusat | Tengah garis dasar |
| Kanan | Hujung kanan garis dasar |
| Tengah, MC | Tengah teks, mendatar dan menegak |
| TL | Sudut kiri atas |

## Sunting teks

1. Klik dua kali objek teks. Ia dibuka dalam kotak yang sama seperti teks perenggan baharu, dengan kursor di hujung.
2. Tukar perkataannya.
3. Tekan {{key:Mod+Enter}} atau klik di luar kotak. Teks pada lukisan berubah; {{key:Esc}} membiarkannya seperti asal.

{{cmd:TEXTEDIT}} (`ED`) melakukan perkara yang sama: pilih satu teks selepas satu, dan tekan {{key:Enter}} apabila selesai.

Untuk menukar teks yang dipilih dalam panel kanan: {{ui:Teks}}, {{ui:Tinggi}}, {{ui:Lebar lilitan}} (0 = tiada lilitan), {{ui:Jarak baris}}, {{ui:Putaran}}, kedudukan X dan Y, dan {{ui:Jajar}}. Senarai {{ui:Jajar}} juga menawarkan Kiri bawah, yang kadangkala digunakan oleh teks daripada program lain.

## Format di dalam teks perenggan daripada program lain

Teks perenggan dalam DWG atau DXF boleh membawa kod di dalamnya: warna setiap perkataan, tebal dan condong, garis bawah, garis atas dan garis coret, pecahan bertindih seperti 1/2, dan ketinggian berbeza bagi satu perkataan. CadCraft mengekalkan kod tersebut, melukisnya (pada skrin dan dalam PDF yang dicetak) dan menyimpannya semula tanpa perubahan.

Apabila anda menyunting teks sebegini (klik dua kali, {{cmd:TEXTEDIT}}, medan Teks dalam panel kanan, atau {{cmd:FIND}} dengan Ganti), anda menyunting perkataan biasanya. Perkataan yang anda taip masuk ke dalam larian di sebelahnya dan mengambil warna serta gayanya; kod lain kekal di tempatnya. Jika anda menaip semula nombor pecahan bertindih, pecahan itu menjadi teks biasa. Menetapkan keseluruhan teks dari medan Teks hanya mengekalkan kod apabila ia dapat mengenal pasti perkataan mana yang kekal.

Nama fon (`\F`) dikekalkan dan disimpan, tetapi semuanya dilukis dengan satu fon gaya Helvetica. Belum ada bar alat untuk menaip kod.

## Tunjuk sesuatu: multipetunjuk

{{ui:Leader}} dalam kumpulan {{ui:Annotate}} ({{cmd:MLEADER}}, `MLD`) melukis anak panah, garis petunjuk, pendaratan pendek dan nota, sebagai satu objek.

1. Klik {{ui:Leader}}. Pada `Specify leader arrowhead location`, klik perkara yang berkaitan dengan nota itu.
2. Pada `Specify leader landing location`, klik di tempat nota itu diletakkan. Pendaratan itu menghala ke sisi yang anda klik.
3. Taip nota dalam kotak yang dibuka, dan tekan {{key:Mod+Enter}}.

`A` dan `L` pada soalan pertama menetapkan saiz kepala anak panah dan panjang pendaratan; ketinggian teks datang daripada {{ui:Ketinggian teks}} untuk dimensi baharu, didarab {{ui:Skala keseluruhan}}. Klik dua kali multipetunjuk untuk menukar perkataannya. Grip menggerakkan kepala anak panah dan pendaratan; nota mengikut pendaratan. Dalam {{ui:Sifat}}: {{ui:Teks}}, {{ui:Tinggi}}, {{ui:Lebar lilitan}}, {{ui:Saiz kepala anak panah}} dan {{ui:Jarak pendaratan}}.

:::note
Multipetunjuk disimpan sebagai multipetunjuk sebenar dalam DWG. DXF tidak mempunyai multipetunjuk dalam R12 atau 2000, jadi di sana ia disimpan sebagai garisan, kepala anak panah dan teks yang dilukisnya.
:::

## Tandakan perubahan dengan awan semakan

{{ui:Annotate}} › {{ui:Lagi}} › {{ui:Awan semakan}} ({{cmd:REVCLOUD}}, `RC`) melukis awan lengkok di sekeliling perkara yang berubah. Sejarah menunjukkan panjang lengkok dan jenis yang akan digunakannya.

- **Segi empat tepat** (kali pertama): klik dua sudut.
- `P` **Poligon**: klik sudut-sudutnya, {{key:Enter}} menutup awan.
- `F` **Bentuk bebas**: klik di tempat ia bermula dan gerakkan penunjuk di sekeliling kawasan tanpa klik; satu lengkok ditambah setiap panjang lengkok. Klik atau tekan {{key:Enter}} untuk menutupnya.
- `O` **Objek**: pilih polygaris, bulatan atau elips tertutup (atau garisan, lengkok atau polygaris terbuka); ia menjadi awan. `Reverse direction?` `Y` menukar lengkok ke dalam.
- `A` **Panjang lengkok**: panjang setiap lengkok. Pilih yang sesuai dengan skala cetakan.

Awan ialah polygaris tertutup bagi lengkok, jadi ia disimpan dalam setiap format.

## Cari dan ganti perkataan

{{ui:Sunting}} › {{ui:Lagi}} › {{ui:Cari dan ganti}} ({{cmd:FIND}}) mencari teks, nilai atribut blok dan teks dimensi pada tab terbuka (atau hanya dalam objek yang dipilih).

1. Taip perkataan dalam {{ui:Cari}}. Senarai menunjukkan setiap tempat ia berada, dan kiraannya.
2. Pilih {{ui:Padan huruf besar/kecil}}, {{ui:Perkataan penuh sahaja}} atau {{ui:Guna kad bebas (* dan ?)}} jika anda perlukannya, dan nyahtanda apa yang tidak mahu dicari.
3. Klik {{ui:Pilih yang ditemui}} untuk memilih objek tersebut, atau taip perkataan baharu dalam {{ui:Ganti dengan}} (senarai menunjukkan apa yang menjadi setiap satu) dan klik {{ui:Ganti semua}}. Satu {{key:Mod+Z}} membuat asal setiap penggantian.

Ukuran nilai dimensi bukan teks, jadi ia tidak pernah digantikan: dalam `<> TYP.`, hanya `TYP.` boleh.

## Sembunyikan garisan di belakang label

1. Pilih teks-teks, taip {{cmd:TEXTMASK}} dan tekan {{key:Enter}}.
2. `B` mewarnakan latar belakang lukisan di belakangnya; `C` meminta nombor warna. `O` mengeluarkan topeng.
3. `Border offset factor`: {{key:Enter}} mengekalkan 1.5, iaitu separuh ketinggian teks di sekeliling teks.

Topeng menutup garisan di bawah teks, pada skrin dan semasa cetakan. DWG 2004 atau lebih baharu dan DXF 2000 mengekalkannya; format DWG 2000 dan DXF R12 tidak boleh, dan simpanan memberitahu anda.

## Fon

Semua teks dilukis dalam fon gaya Helvetica, pada skrin dan dalam PDF. Teks daripada lukisan yang dibuka mengekalkan perkataan, ketinggian dan kedudukannya, tetapi bukan fon asalnya (nama fon di dalam teks perenggan dikekalkan dalam fail, lihat di atas).

Dalam PDF yang dicetak, teks dalam mana-mana skrip Eropah, Sirilik atau Yunani dicetak sebagai dirinya sendiri (PDF membawa huruf yang diperlukan, dan anda masih boleh memilih serta mencari teks). Teks Cina, Jepun dan Korea juga dicetak sebagai dirinya sendiri (cetakan mengambil fon yang lebih besar kali pertama ia diperlukan). Teks Arab, Parsi, Urdu dan Ibrani juga dicetak sebagai dirinya sendiri (lihat bahagian seterusnya). Aksara yang tiada fon untuknya dicetak sebagai "?", dan sejarah memberitahu berapa banyak.

## Teks dari kanan ke kiri: Arab, Parsi, Urdu, Ibrani

Taip teks seperti di tempat lain: {{cmd:TEXT}} dan {{cmd:MTEXT}} melukis setiap baris mengikut tertib bacaan. Baris yang huruf pertamanya Arab atau Ibrani dibaca dari kanan ke kiri; nombor dan perkataan Latin di dalamnya mengekalkan tertib kiri ke kanan sendiri, dan huruf skrip Arab disambungkan. Baris yang bermula dengan huruf Latin kekal dari kiri ke kanan, dengan perkataan kanan ke kiri di kedudukannya di dalamnya. Setiap perenggan teks berbilang baris mempunyai arahnya sendiri, dan perenggan yang dililit mengekalkannya pada setiap baris.

Teks disimpan seperti yang anda taip, jadi fail DWG dan DXF bertukar-tukar dengannya bersama program lain tanpa perubahan. Titik sisipan dan penjajaran ({{ui:Kiri}}, {{ui:Pusat}}, {{ui:Kanan}}) bermakna sisi yang sama seperti mana-mana teks: nota kanan ke kiri yang sepatutnya bergantung dari hujung kanannya memerlukan {{ui:Kanan}}.

Pada skrin, huruf datang daripada fon sistem anda. Dalam PDF yang dicetak, Ibrani menggunakan fon terbenam yang sama dengan teks Latin; teks skrip Arab menjadikan cetakan mengambil satu lagi fon (di bawah 1 MB, sekali sahaja), dan seluruh PDF kemudian dicetak dalam fon itu. Fon itu tiada bentuk sendiri bagi tiga aksara Urdu (heh goal, yeh barree dan noktah penuh Urdu): ia dicetak dalam bentuk huruf Arab yang terdekat. Lukisan yang mempunyai kedua-dua teks skrip Arab dan teks Cina, Jepun atau Korea mencetak salah satu daripadanya sebagai "?", kerana satu cetakan membawa satu fon. Teks dalam fon SHX yang dimuatkan disusun dan disambungkan apabila fon itu mempunyai huruf pada tempat Unicodenya; bagi fon lama yang hurufnya sudah dibentuk, gunakan {{ui:Terbalik (R)}} dalam {{cmd:SHXFONTS}} seperti sebelum ini.

## Kesilapan biasa

- **Teks terlalu kecil untuk dilihat.** Ketinggian adalah dalam unit lukisan. Dalam lukisan yang besar, gunakan ketinggian yang besar (lihat di atas), atau zum masuk.
- **Arahan tamat selepas satu baris.** Anda menekan {{key:Enter}} pada baris kosong dalam {{cmd:TEXT}}. Mulakan semula, atau gunakan teks perenggan (`T`), di mana {{key:Enter}} memulakan perenggan baharu.
- **`T` membuka kotak dan bukannya meminta satu baris.** Seperti dalam AutoCAD, `T` ialah teks perenggan ({{cmd:MTEXT}}); teks satu baris ialah `DT`.
- **Teks dililit di tempat yang berbeza dalam AutoCAD.** CadCraft melilit dengan lebar Helvetica; fon lain mungkin memuatkan satu perkataan lebih atau kurang pada satu baris.
- **Teks dalam salinan cermin.** Ia diletakkan secara cermin tetapi kekal boleh dibaca dari kiri ke kanan.
