---
title: Alih, salin, putar, skala, cermin, regang dan tatasusunan
summary: Susun perabot dalam sebuah bilik dengan arahan ubah asas, menggunakan titik asas, jarak yang ditaip dan buat asal.
keywords: alih, salin, putar, skala, cermin, regang, tatasusunan, cantum, matchprop, padankan sifat, painter, arrayrect, arraypolar, tatasusunan kutub, padam, pecahkan, buat asal, buat semula, titik asas, sesaran, ubah, jajar, agih, susun sama rata
from: 8eaeee6c
---

## Apa yang akan anda hasilkan

Sebuah meja dengan satu kerusi, disalin mengelilingi meja, diputar, dicerminkan dan diubah saiz. Sepanjang proses ini anda menggunakan {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} dan {{cmd:UNDO}}.

## Lukis bahagian

1. Taip `REC` dan tekan {{key:Enter}}, taip `0,0` dan tekan {{key:Enter}}, kemudian taip `@1800,900` dan tekan {{key:Enter}}. Ini ialah meja.
2. Taip `REC` dan tekan {{key:Enter}}, taip `300,-700` dan tekan {{key:Enter}}, kemudian taip `@450,450` dan tekan {{key:Enter}}. Ini ialah kerusi, di bawah meja.
3. Klik {{ui:Lingkungan}}.

## Alih: titik asas, kemudian titik kedua

Setiap alih, salin, putar dan skala bermula daripada **titik asas**: titik yang dibawa bersama, atau titik yang diputar di sekelilingnya.

1. Klik kerusi untuk memilihnya.
2. Taip `M` dan tekan {{key:Enter}}. Sejarah menyatakan `1 found`.
3. Pada `Specify base point`, snap ke bucu kiri atas kerusi (Titik hujung) dan klik.
4. Pada `Specify second point`, taip `@0,200` dan tekan {{key:Enter}}.

Kerusi bergerak naik 200, lebih dekat dengan meja.

:::tip
Taip `D` pada `Specify base point` untuk memberi sesaran sebaliknya: CadCraft kemudian bertanya `Specify displacement`, dan anda taip jarak melintang dan ke atas, seperti `0,200` (tidak perlu `@`).
:::

## Salin, berapa kali pun anda mahu

1. Klik kerusi.
2. Taip `CO` dan tekan {{key:Enter}}.
3. Snap ke bucu kiri bawah kerusi dan klik sebagai titik asas.
4. Taip `@600,0` dan tekan {{key:Enter}}. Satu salinan muncul 600 ke kanan.
5. Taip `@600,0` sekali lagi dan tekan {{key:Enter}}. Salinan kedua muncul 1200 ke kanan daripada yang asal.
6. Tekan {{key:Enter}} untuk menamatkan arahan.

{{cmd:COPY}} berterusan sehingga anda tekan {{key:Enter}}. Setiap salinan diletakkan mengikut jarak dari titik asas ke titik yang anda beri. Titik `@` dikira dari titik terakhir yang anda masukkan, iaitu selepas salinan pertama ialah titik salinan itu, jadi `@600,0` dua kali memberi salinan pada 600 dan 1200. Taip `U` (Buat asal) dan tekan {{key:Enter}} untuk membatalkan salinan terakhir tanpa keluar daripada arahan.

Anda sepatutnya nampak tiga kerusi berjajar di bawah meja.

:::tip
{{cmd:COPY}} ialah untuk salinan dalam satu lukisan, diletakkan mengikut titik asas. Untuk membawa objek ke lukisan atau tab lain, atau untuk menampalnya kemudian, gunakan papan keratan: {{key:Mod+C}}, kemudian {{key:Mod+V}}. {{key:Mod+D}} membuat satu salinan yang bergerak mengikut penunjuk. Lihat [Salin, tampal dan pendua](topic:copy-paste).
:::

## Cermin barisan ke sisi yang lain

1. Seret tetingkap silang (dari kanan ke kiri) merentasi tiga kerusi, tanpa menyentuh meja.
2. Taip `MI` dan tekan {{key:Enter}}.
3. Pada `Specify first point of mirror line`, snap ke Titik tengah sisi kiri meja dan klik.
4. Pada `Specify second point of mirror line`, snap ke Titik tengah sisi kanan meja dan klik.
5. Pada `Erase source objects? [Yes/No] <N>`, tekan {{key:Enter}} untuk mengekalkannya.

Anda sepatutnya nampak tiga kerusi di bawah meja dan tiga kerusi bercermin di atasnya. Teks dalam pilihan yang dicerminkan kekal boleh dibaca: ia diletakkan secara bercermin tetapi tidak ditulis terbalik.

## Putar kerusi

1. Klik kerusi paling kanan di bawah meja.
2. Taip `RO` dan tekan {{key:Enter}}.
3. Snap ke bucu kanan bawah kerusi dan klik sebagai titik asas.
4. Taip `90` dan tekan {{key:Enter}}.

Kerusi berpusing 90 darjah lawan arah jam di sekeliling titik asas. Sudut negatif berpusing mengikut arah jam. Daripada menaip, anda boleh klik titik kedua: sudut diukur dari titik asas ke titik itu.

## Skalakan meja

1. Pilih meja.
2. Taip `SC` dan tekan {{key:Enter}}.
3. Snap ke bucu kiri bawah meja dan klik sebagai titik asas.
4. Taip `1.2` dan tekan {{key:Enter}}.

Meja menjadi 20% lebih besar, membesar menjauhi titik asas. Faktor di bawah 1 menjadikannya lebih kecil.

:::note
Jika anda klik satu titik dan bukannya menaip faktor skala, faktor itu ialah jarak dari titik asas ke titik itu. Klik satu unit lukisan jauhnya memberi faktor 1. Menaip nombor biasanya yang anda mahukan.
:::

## Buat asal dan buat semula

- {{key:Mod+Z}}, butang {{ui:Buat asal}}, atau `U` kemudian {{key:Enter}} membatalkan arahan terakhir. Satu arahan penuh ialah satu langkah: membatalkan {{cmd:COPY}} yang membuat lima salinan akan mengalih keluar kesemua lima.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, butang {{ui:Buat semula}}, atau `REDO` mengembalikannya.
- Sejarah menyatakan apa yang dibatalkan ("Dibatalkan: COPY").

CadCraft menyimpan 500 langkah terakhir. Tetapan lapisan (hidup, beku, kunci, warna) ialah tetapan, bukan suntingan, dan tidak dibatalkan.

## Regangkan bilik supaya lebih lebar

{{cmd:STRETCH}} (`S`, atau {{ui:Regang}}) hanya mengalihkan apa yang berada di dalam tetingkap silang: bucu dan hujung garisan di dalamnya bergerak, selebihnya kekal di tempatnya, jadi bilik menjadi lebih lebar dan bukannya bergerak.

1. Taip `S` dan tekan {{key:Enter}}.
2. Seret tetingkap dari kanan ke kiri merentasi dinding kanan, supaya ia meliputi bucu dinding dan hujung apa-apa yang bertemu dengannya.
3. Tekan {{key:Enter}}.
4. Klik satu titik asas, kemudian taip `@600,0` dan tekan {{key:Enter}}.

Segi empat tepat itu 600 lebih lebar; garisan yang berakhir pada dinding masih berakhir padanya. Lengkok dengan satu hujung di dalam mengekalkan ketinggiannya, bulatan dan teks bergerak apabila pusat atau titik selitannya berada di dalam, dan dimensi mengukur panjang barunya. Objek yang dipilih satu demi satu tanpa tetingkap hanya bergerak.

Anda juga boleh memilih dahulu: seret tetingkap silang (atau lasso silang) merentasi dinding tanpa arahan berjalan, kemudian taip `S`. STRETCH mengambil pilihan itu dan meregangkan apa yang berada dalam tetingkapnya, sama seperti jika anda menyeretnya pada gesaannya sendiri.

## Tatasusunan: baris dan lajur, atau mengelilingi satu pusat

{{cmd:ARRAY}} (`AR`, atau {{ui:Tatasusunan}}) menyalin pilihan dalam grid atau dalam bulatan.

1. Pilih satu kerusi dan taip `AR`, kemudian tekan {{key:Enter}}. Tekan {{key:Enter}} sekali lagi untuk Rectangular.
2. Pratonton 4 lajur dan 3 baris muncul. Taip `COU`, tekan {{key:Enter}}, kemudian taip `5` untuk lajur dan `2` untuk baris.
3. Taip `S`, tekan {{key:Enter}}, kemudian taip `600` antara lajur dan `-900` antara baris (negatif turun ke bawah).
4. Tekan {{key:Enter}} untuk membuat salinan.

Untuk gelung kerusi mengelilingi meja, pilih `PO` (Kutub) sebaliknya, klik pusat meja, dan tetapkan `I` (Item), `F` (sudut isian: 360 untuk seluruh bulatan, 180 untuk separuh) dan `ROT` (sama ada salinan berpusing menghadap pusat). {{cmd:ARRAYRECT}} dan {{cmd:ARRAYPOLAR}} melangkau soalan itu.

## Cantumkan bahagian menjadi satu polygaris

{{cmd:JOIN}} (`J`, atau {{ui:Ubah}} › {{ui:Lagi}} › {{ui:Cantum}}): pilih garisan, lengkok dan polygaris terbuka yang hujungnya bertemu, dan tekan {{key:Enter}}. Ia menjadi satu polygaris, ditutup apabila ia melingkari sepenuhnya, yang kemudian boleh anda ofset sekali gus. Garisan yang terletak pada satu garis lurus menjadi satu garisan walaupun ada jurang antaranya; lengkok bagi satu bulatan menjadi satu lengkok, atau bulatan.

## Padankan sifat

{{cmd:MATCHPROP}} (`MA`, atau {{ui:Ubah}} › {{ui:Lagi}} › {{ui:Padankan sifat}}): klik objek yang rupanya anda mahu, kemudian pilih objek yang hendak diubah dan tekan {{key:Enter}}. Ia mengambil lapisan dan warnanya; teks mengambil ketinggiannya, dimensi mengambil saiznya, hatch mengambil coraknya. Taip `S` (Tetapan) pada soalan kedua untuk mematikan mana-mana daripada ini.

## Jajarkan objek

**Mengikut titik.** {{cmd:ALIGN}} (`AL`, atau {{ui:Ubah}} › {{ui:Lagi}} › {{ui:Jajar}}): pilih objek dan tekan {{key:Enter}}, kemudian klik satu titik pada objek (sumber) dan tempat ia patut pergi (destinasi).

- Satu pasangan mengalihkannya. Tekan {{key:Enter}} pada `Specify second source point` untuk berhenti di situ.
- Dua pasangan juga memusingkannya, supaya garisan antara dua titik sumber terletak sepanjang garisan antara dua titik destinasi. CadCraft kemudian bertanya `Scale objects based on alignment points?`: `Y` membesarkan atau mengecilkannya mengikut kadar itu juga.
- Pasangan ketiga mencerminkannya apabila dua titiknya berada di sisi bertentangan garisan itu.

**Tepi dan jarak.** {{ui:Ubah}} › {{ui:Lagi}} › {{ui:Jajar dan agih}} (atau `ALIGNPANEL`) membuka panel kecil di atas lukisan. Pilih objek, kemudian:

- pilih apa yang hendak dijajarkan dalam {{ui:Jajar kepada}} (keseluruhan pilihan, objek pertama atau terakhir yang anda pilih, atau satu titik yang anda klik) dan klik {{ui:Kiri}}, {{ui:Pusat}}, {{ui:Kanan}}, {{ui:Atas}}, {{ui:Tengah}} atau {{ui:Bawah}};
- atau pilih {{ui:Jurang sama}} atau {{ui:Pusat sama}} dan klik {{ui:Merentas}} atau {{ui:Atas ke bawah}}: dua objek terluar kekal, yang lain diagihkan sama rata di antaranya (sekurang-kurangnya tiga objek).

Setiap klik ialah satu langkah buat asal, dan pilihan kekal, jadi anda boleh mencuba yang lain. Setiap objek dikira mengikut kotak sempadannya, dalam UCS apabila satu ditetapkan. Pada baris arahan, perkara yang sama ialah {{cmd:ALIGNTO}} dan {{cmd:DISTRIBUTE}}.

## Padam dan pecahkan

- {{cmd:ERASE}} (`E`, atau {{key:Delete}}) mengalih keluar objek yang dipilih.
- {{cmd:EXPLODE}} (`X`) memecahkan polygaris kepada garisan dan lengkok, rujukan blok kepada objek-objeknya, dan dimensi kepada garisan, kepala anak panah dan teks. Dimensi yang dipecahkan tidak lagi mengukur dirinya sendiri.

## Kesilapan biasa

- **Menaip jarak tanpa `@` pada titik kedua.** `600,0` ialah titik mutlak 600,0, bukan "600 ke kanan". Gunakan `@600,0`, atau `600` sahaja dengan silang menunjuk ke arah yang betul.
- **Putaran berlaku ke arah yang salah.** Sudut positif berpusing lawan arah jam.
- **Buat asal mengalih keluar lebih daripada yang dijangka.** Satu buat asal membatalkan keseluruhan arahan terakhir, termasuk setiap salinan yang dibuatnya.
- **Arahan tidak meminta anda memilih objek.** Objek sudah dipilih, jadi ia menggunakannya. Tekan {{key:Esc}} dahulu untuk bermula tanpa sebarang pilihan.
