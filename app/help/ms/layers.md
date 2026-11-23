---
title: Atur lukisan dengan lapisan
summary: Cipta lapisan untuk dinding, pintu dan nota, tetapkan warna, jadikan satu lapisan sebagai semasa, dan matikan, bekukan, kunci atau halang lapisan daripada dicetak.
keywords: lapisan, lapisan, la, lapisan semasa, bekukan, nyahbeku, kunci, mati, hidup, plot, tidak plot, warna, warna, sifat lapisan, layiso, layuniso, asingkan, layoff, layfrz, laymcur, layon, laythw, namakan semula, laymrg, gabung, laydel, padam lapisan
from: ba9f0617
---

## Apa yang akan anda hasilkan

Tiga lapisan, Walls, Doors dan Notes, setiap satu dengan warnanya sendiri, dengan objek dilukis pada setiap satu dan dipindahkan antara mereka.

## Panel Lapisan

Lapisan terdapat dalam panel di sebelah kiri, di bawah {{ui:Layers}}. Setiap baris menunjukkan, dari kiri ke kanan:

- satu titik: diisi untuk lapisan **semasa**, tempat objek baharu pergi;
- satu sampel warna;
- nama lapisan;
- empat butang: hidup/mati (mata), beku (kepingan salji), kunci (mangga) dan plot (pencetak).

Setiap lukisan mempunyai lapisan bernama `0`. Taip `LA` dan tekan {{key:Enter}} untuk melompat ke panel.

## Cipta lapisan

1. Klik {{ui:New layer}} di atas senarai. Kotak nama dibuka.
2. Taip `Walls` dan tekan {{key:Enter}} (atau klik {{ui:Add}}).

Bar status berkata "Added layer Walls and made it current." Lapisan baharu mendapat warna 7 (hitam pada tema cerah, putih pada tema gelap).

3. Klik {{ui:New layer}} sekali lagi, taip `Doors` dan tekan {{key:Enter}}.
4. Klik {{ui:New layer}} sekali lagi, taip `Notes` dan tekan {{key:Enter}}.

Notes kini ialah lapisan semasa.

## Beri setiap lapisan satu warna

1. Klik sampel warna pada baris Walls. Pemilih warna sistem anda dibuka.
2. Pilih warna dan sahkan.

Sampel dan setiap objek pada Walls yang berwarna {{ui:By layer}} akan berubah.

:::note
Warna yang dipilih yang sepadan dengan salah satu daripada 255 warna CAD piawai disimpan sebagai nombor itu. Mana-mana warna lain disimpan tepat dalam CadCraft, tetapi disimpan sebagai warna piawai terdekat dalam fail DWG atau DXF.
:::

## Lukis pada satu lapisan

1. Klik nama **Walls** dalam senarai. Titiknya menjadi penuh dan bar status berkata "Current layer: Walls".
2. Lukis segi empat tepat (`REC`). Ia pergi ke Walls.
3. Klik **Doors**, dan lukis lengkok (`A`). Ia pergi ke Doors.

Anda juga boleh memilih lapisan semasa dalam {{ui:Current settings}} di sebelah kanan (tiada yang dipilih), di bawah {{ui:Layer}}.

## Alih objek ke lapisan lain

1. Pilih objek.
2. Dalam panel kanan, pilih lapisan baharu dalam {{ui:Layer}}.

Ia berpindah ke lapisan itu dan mengambil warnanya jika warnanya ialah {{ui:By layer}}.

## Mati, beku, kunci dan plot

| Butang | Apa yang dilakukannya |
|---|---|
| Hidup/mati (mata) | Menyembunyikan objek lapisan itu. Ia tidak boleh dilihat, dipilih atau di-snap. |
| Beku (kepingan salji) | Kesannya sama seperti mati dalam CadCraft. Dikekalkan berasingan kerana program lain melayannya secara berbeza, dan tetapan itu disimpan. |
| Kunci (mangga) | Objek kekal kelihatan dan anda boleh snap kepadanya, tetapi ia tidak boleh dipilih atau diubah. Sesuai untuk latar belakang yang anda surih. |
| Plot (pencetak) | Apabila ditekan, lapisan ditunjukkan pada skrin tetapi **dikecualikan daripada plot** dan PDF. Gunakannya untuk garisan binaan dan nota untuk diri sendiri. |

Letakkan kursor pada butang untuk melihat apa yang akan dilakukannya ("Turn off", "Freeze", "Lock", "Do not plot this layer").

Anda tidak boleh mematikan lapisan semasa: bar status berkata "That is the current layer. Make another layer current first." Mengklik nama lapisan untuk menjadikannya semasa juga menghidupkannya dan menyahbekukannya.

Setiap perubahan lapisan, dalam panel atau melalui arahan, ialah satu langkah buat asal: {{key:Mod+Z}} mengembalikannya.

## Kerja pada lapisan dengan memilih objek

Anda tidak perlu tahu nama lapisan: pilih objek di atasnya. Taip arahan, atau buka {{ui:Tools}} di bahagian atas panel {{ui:Layers}}.

| Arahan | Apa yang dilakukannya |
|---|---|
| {{cmd:LAYISO}} | Pilih objek, tekan {{key:Enter}}: hanya lapisan mereka kekal hidup, setiap lapisan lain dimatikan. Jika lapisan semasa dimatikan, salah satu lapisan yang diasingkan menjadi semasa. |
| {{cmd:LAYUNISO}} | Menghidupkan semula lapisan yang dimatikan oleh {{cmd:LAYISO}} yang terakhir, dan mengembalikan lapisan semasa yang telah ditukarnya. |
| {{cmd:LAYOFF}} | Klik objek satu demi satu: lapisan setiap satu dimatikan. Taip `U` untuk membatalkan yang terakhir, {{key:Enter}} untuk selesai. |
| {{cmd:LAYFRZ}} | Sama, tetapi membekukan setiap lapisan. |
| {{cmd:LAYMCUR}} | Klik satu objek: lapisannya menjadi semasa (dan dihidupkan serta dinyahbekukan). Dengan satu objek sudah dipilih, objek itu yang digunakan. |
| {{cmd:LAYON}} | Menghidupkan setiap lapisan. |
| {{cmd:LAYTHW}} | Menyahbekukan setiap lapisan. |

Lapisan semasa tidak pernah dimatikan atau dibekukan dengan cara ini: sejarah memberitahu begitu, dan anda boleh menjadikan lapisan lain sebagai semasa dengan {{cmd:LAYMCUR}} dahulu. Memilih rujukan blok menggunakan lapisan rujukan itu sendiri.

## Namakan semula, gabung dan padam lapisan

- {{cmd:RENAME}}: taip `LA`, nama lama dan nama baharu. Setiap objek pada lapisan itu mengikut. (`B` menamakan semula blok dengan cara yang sama, dengan setiap rujukan kepadanya.)
- {{cmd:LAYMRG}}: klik satu objek pada setiap lapisan untuk digabungkan (atau taip `N` dan nama), tekan {{key:Enter}}, kemudian pilih lapisan sasaran dan jawab `Y`. Objek berpindah ke sasaran — dalam model, pada helaian dan dalam blok — dan lapisan yang digabungkan hilang.
- {{cmd:LAYDEL}}: pilih satu objek pada lapisan (atau `N` dan namanya) dan jawab `Y`. Lapisan itu hilang **bersama setiap objek di atasnya**, di mana-mana. Lapisan 0, DEFPOINTS dan lapisan semasa tidak boleh dipadam.

Setiap satu ialah satu langkah buat asal. Ketiga-tiganya terdapat dalam {{ui:Tools}} di bahagian atas panel {{ui:Layers}}.

1. Klik satu garisan dinding, kemudian taip `LAYISO` dan tekan {{key:Enter}}. Hanya Walls kekal hidup.
2. Lukis atau ubah apa yang anda perlukan pada Walls.
3. Taip `LAYUNISO` dan tekan {{key:Enter}}. Doors dan Notes kembali.

## Kesilapan biasa

- **Garisan baharu pergi ke lapisan yang salah.** Semak titik mana yang diisi sebelum anda melukis. Lapisan baharu menjadi semasa sebaik sahaja anda menambahnya.
- **Objek tidak boleh dipilih.** Lapisannya dikunci, dimatikan atau dibekukan.
- **Lapisan masih dicetak dalam program lain.** DXF R12 tidak boleh menyimpan "do not plot". CadCraft menyimpan tetapan itu untuk dirinya sendiri apabila lukisan mempunyai helaian, tetapi program lain akan mencetak lapisan itu.
- **Nama lapisan dalam huruf besar selepas menyimpan.** DXF R12 menyimpan nama dalam huruf besar, jadi `Walls` kembali sebagai `WALLS`, dan ruang menjadi `_`. DWG yang disimpan mengekalkan nama seperti yang anda taip.
- **Menamakan semula, menggabung atau memadam lapisan.** Gunakan {{cmd:RENAME}}, {{cmd:LAYMRG}} atau {{cmd:LAYDEL}} (juga dalam {{ui:Tools}}): lihat di bawah.

## Kumpulkan lapisan

Pendekkan senarai dengan meletakkan lapisan dalam folder, seperti Existing, Proposed dan Services. Setiap folder boleh dilipat, dan suisnya menghidupkan atau mematikan semua lapisannya, membekukan atau mengunci mereka bersama. Lapisan semasa tidak pernah dimatikan.

Dalam {{ui:Tools}} pada panel Lapisan, pilih {{ui:Add ready-made groups}} untuk satu set yang dibuat untuk kerja kediaman kecil, {{ui:Group by name}} untuk mengumpulkan lapisan yang berkongsi awalan (`E-Walls`, `E-Doors`), atau {{ui:New group}}. Seret lapisan ke atas folder, atau gunakan senarai di atas lapisan untuk lapisan semasa. Taip dalam {{ui:Find a layer}} untuk mempersempit senarai. {{cmd:LAYGROUP}} (`LG`) melakukan perkara yang sama pada baris arahan.

Untuk menamakan semula kumpulan, klik dua kali namanya (atau pilih dan tekan {{key:F2}}), taip nama baharu dan tekan {{key:Enter}}; {{key:Esc}} mengekalkan yang lama, dan {{cmd:UNDO}} mengembalikannya. {{ui:New group}} terdapat dalam {{ui:Tools}} pada panel Lapisan.

Lapisan itu sendiri tidak berubah, jadi program CAD lain melihatnya sebagai senarai rata biasa. CadCraft menyimpan kumpulan dalam fail.
