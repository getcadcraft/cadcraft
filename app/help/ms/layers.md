---
title: Susun lukisan dengan lapisan
summary: Cipta lapisan untuk dinding, pintu dan nota, tetapkan warna, jadikan lapisan semasa, dan matikan lapisan, bekukannya, kunci atau halang daripada dicetak.
keywords: lapisan, lapisan, la, lapisan semasa, bekukan, nyahbeku, kunci, mati, hidup, plot, tidak plot, warna, sifat lapisan, layiso, layuniso, asingkan, layoff, layfrz, laymcur, layon, laythw, namakan semula, gabung, laymrg, laydel, padam lapisan
from: cd033591
---

## Apa yang akan anda hasilkan

Tiga lapisan, Walls, Doors dan Notes, setiap satu dengan warnanya sendiri, dengan objek dilukis pada setiap satu dan dipindahkan antara mereka.

## Panel Lapisan

Lapisan berada dalam panel di sebelah kiri, di bawah {{ui:Lapisan}}. Setiap baris menunjukkan, dari kiri ke kanan:

- titik: diisi untuk lapisan **semasa**, tempat objek baharu pergi;
- sampel warna;
- nama lapisan;
- empat butang: hidup/mati (mata), bekukan (kepingan salji), kunci (mangga) dan plot (pencetak).

Setiap lukisan mempunyai lapisan bernama `0`. Taip `LA` dan tekan {{key:Enter}} untuk melompat ke panel.

## Cipta lapisan

1. Klik {{ui:Lapisan baharu}} di atas senarai. Kotak nama dibuka.
2. Taip `Walls` dan tekan {{key:Enter}} (atau klik {{ui:Tambah (A)}}).

Bar status berkata "Lapisan Walls ditambah dan dijadikan semasa." Lapisan baharu mendapat warna 7 (hitam pada tema cerah, putih pada tema gelap).

3. Klik {{ui:Lapisan baharu}} sekali lagi, taip `Doors` dan tekan {{key:Enter}}.
4. Klik {{ui:Lapisan baharu}} sekali lagi, taip `Notes` dan tekan {{key:Enter}}.

Notes kini semasa.

## Beri setiap lapisan warna

1. Klik sampel warna pada baris Walls. Pemilih warna sistem anda dibuka.
2. Pilih warna dan sahkan.

Sampel dan semua yang ada pada Walls yang berwarna {{ui:Mengikut lapisan}} akan berubah.

:::note
Warna yang dipilih yang sepadan dengan salah satu daripada 255 warna CAD piawai disimpan sebagai nombor itu. Mana-mana warna lain disimpan tepat dalam CadCraft, tetapi disimpan sebagai warna piawai terdekat dalam fail DWG atau DXF.
:::

## Lukis pada lapisan

1. Klik nama **Walls** dalam senarai. Titiknya diisi dan bar status berkata "Lapisan semasa: Walls".
2. Lukis segi empat tepat (`REC`). Ia pergi ke Walls.
3. Klik **Doors**, dan lukis lengkok (`A`). Ia pergi ke Doors.

Anda juga boleh memilih lapisan semasa dalam {{ui:Tetapan semasa}} di sebelah kanan (tiada apa yang dipilih), di bawah {{ui:Lapisan}}.

## Pindahkan objek ke lapisan lain

1. Pilih objek.
2. Dalam panel kanan, pilih lapisan baharu dalam {{ui:Lapisan}}.

Ia dipindahkan ke lapisan itu dan mengambil warnanya jika warnanya ialah {{ui:Mengikut lapisan}}.

## Mati, bekukan, kunci dan plot

| Butang | Apa yang dilakukannya |
|---|---|
| Hidup/mati (mata) | Menyembunyikan objek lapisan. Ia tidak boleh dilihat, dipilih atau di-snap. |
| Bekukan (kepingan salji) | Kesan sama seperti mati dalam CadCraft. Disimpan berasingan kerana program lain melayannya secara berbeza, dan tetapan disimpan. |
| Kunci (mangga) | Objek kekal kelihatan dan anda boleh snap kepadanya, tetapi ia tidak boleh dipilih atau diubah. Sesuai untuk latar belakang yang anda jejaki. |
| Plot (pencetak) | Apabila ditekan, lapisan kelihatan pada skrin tetapi **dikecualikan daripada plot** dan PDF. Gunakan untuk garisan pembinaan dan nota kepada diri sendiri. |

Alih tetikus ke atas butang untuk melihat fungsinya ("Matikan", "Bekukan", "Kunci", "Jangan plot lapisan ini").

Anda tidak boleh mematikan lapisan semasa: bar status berkata "Itu lapisan semasa. Jadikan lapisan lain sebagai semasa dahulu." Mengklik nama lapisan untuk menjadikannya semasa juga menghidupkannya dan menyahbekukannya.

Setiap perubahan lapisan, dalam panel atau melalui arahan, ialah satu langkah buat asal: {{key:Mod+Z}} mengembalikannya.

## Bekerja pada lapisan dengan memilih objek

Anda tidak perlu tahu nama lapisan: pilih objek di atasnya. Taip arahan, atau buka {{ui:Alat}} di bahagian atas panel {{ui:Lapisan}}.

| Arahan | Apa yang dilakukannya |
|---|---|
| {{cmd:LAYISO}} | Pilih objek, tekan {{key:Enter}}: hanya lapisan mereka kekal hidup, setiap lapisan lain dimatikan. Jika lapisan semasa dimatikan, salah satu lapisan yang diasingkan menjadi semasa. |
| {{cmd:LAYUNISO}} | Menghidupkan semula lapisan yang dimatikan oleh {{cmd:LAYISO}} terakhir, dan memulangkan lapisan semasa yang telah ditukarnya. |
| {{cmd:LAYOFF}} | Klik objek satu demi satu: lapisan setiap objek dimatikan. Taip `U` untuk membatalkan yang terakhir, {{key:Enter}} untuk selesai. |
| {{cmd:LAYFRZ}} | Sama, tetapi membekukan setiap lapisan. |
| {{cmd:LAYMCUR}} | Klik objek: lapisannya menjadi semasa (dan dihidupkan serta dinyahbekukan). Jika satu objek sudah dipilih, objek itu yang digunakan. |
| {{cmd:LAYON}} | Menghidupkan setiap lapisan. |
| {{cmd:LAYTHW}} | Menyahbekukan setiap lapisan. |

Lapisan semasa tidak pernah dimatikan atau dibekukan dengan cara ini: sejarah memaklumkannya, dan anda boleh menjadikan lapisan lain sebagai semasa dengan {{cmd:LAYMCUR}} dahulu. Memilih rujukan blok menggunakan lapisan rujukan itu sendiri.

## Namakan semula, gabung dan padam lapisan

- {{cmd:RENAME}}: taip `LA`, nama lama dan nama baharu. Setiap objek pada lapisan itu mengikut. (`B` menamakan semula blok dengan cara yang sama, bersama setiap rujukan kepadanya.)
- {{cmd:LAYMRG}}: klik objek pada setiap lapisan untuk digabungkan (atau taip `N` dan nama), tekan {{key:Enter}}, kemudian pilih lapisan sasaran dan jawab `Y`. Objek dipindahkan ke sasaran — dalam model, pada helaian dan di dalam blok — dan lapisan yang digabungkan dipadam.
- {{cmd:LAYDEL}}: pilih objek pada lapisan (atau `N` dan namanya) dan jawab `Y`. Lapisan itu dipadam **bersama setiap objek di atasnya**, di mana-mana. Lapisan 0, DEFPOINTS dan lapisan semasa tidak boleh dipadam.

Setiap satu ialah satu langkah buat asal. Ketiga-tiganya terdapat dalam {{ui:Alat}} di bahagian atas panel {{ui:Lapisan}}.

1. Klik satu garisan dinding, kemudian taip `LAYISO` dan tekan {{key:Enter}}. Hanya Walls kekal hidup.
2. Lukis atau ubah apa yang anda perlukan pada Walls.
3. Taip `LAYUNISO` dan tekan {{key:Enter}}. Doors dan Notes kembali.

## Kesilapan biasa

- **Garisan baharu masuk pada lapisan yang salah.** Semak titik mana yang diisi sebelum anda melukis. Lapisan baharu menjadi semasa sebaik sahaja anda menambahnya.
- **Objek tidak boleh dipilih.** Lapisannya dikunci, dimatikan atau dibekukan.
- **Lapisan masih dicetak dalam program lain.** DXF R12 tidak boleh menyimpan "jangan plot". CadCraft menyimpan tetapan itu untuk dirinya sendiri apabila lukisan mempunyai helaian, tetapi program lain akan mencetak lapisan itu.
- **Nama lapisan dalam huruf besar selepas disimpan.** DXF R12 menyimpan nama dalam huruf besar, jadi `Walls` kembali sebagai `WALLS`, dan ruang menjadi `_`. DWG yang disimpan mengekalkan nama seperti yang anda taip.
- **Menamakan semula, menggabung atau memadam lapisan.** Gunakan {{cmd:RENAME}}, {{cmd:LAYMRG}} atau {{cmd:LAYDEL}} (juga dalam {{ui:Alat}}): lihat di atas.

## Kumpulkan lapisan

Pendekkan senarai dengan meletakkan lapisan dalam folder, seperti Sedia ada, Dicadangkan dan Utiliti. Setiap folder boleh dilipat, dan suisnya menghidupkan atau mematikan semua lapisannya, membekukan atau mengunci bersama. Lapisan semasa tidak pernah dimatikan.

Dalam {{ui:Alat}} pada panel Lapisan, pilih {{ui:Tambah kumpulan siap sedia}} untuk set yang dibuat untuk kerja kediaman kecil, {{ui:Kumpulkan mengikut nama}} untuk mengumpulkan lapisan yang berkongsi awalan (`E-Walls`, `E-Doors`), atau {{ui:Kumpulan baharu}}. Seret lapisan ke folder, atau gunakan senarai di atas lapisan untuk lapisan semasa. Taip dalam {{ui:Cari lapisan}} untuk menyempitkan senarai. `LAYGROUP` (`LG`) melakukan perkara yang sama pada baris arahan.

Lapisan itu sendiri tidak berubah, jadi program CAD lain melihatnya sebagai senarai rata biasa. CadCraft menyimpan kumpulan dalam fail.
