---
title: Letakkan keratan keluli dan bahagian piawai
summary: Lukis keratan keluli, dongakan dan ahli 3D daripada jadual keratan yang diterbitkan, letakkan bolt, nat, washer, pin, galas, kunci dan gear daripada piawaian mereka, dan senaraikannya dalam senarai bahagian.
keywords: keluli, keratan, profil, bentuk, bentuk w, sayap lebar, i-beam, saluran, sudut, hss, tiub, paip, ipe, hea, heb, upn, rasuk, tiang, anggota, dongakan, aisc, en 10365, bolt, skru, nat, washer, pin, dowel, galas, kunci, alur kunci, gear, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, bahagian piawai, senarai bahagian, bil bahan, bom, steelmember, partslist
from: 547c1048
---

Tab {{ui:Standard}} dalam pustaka ada dua jenis benda, dibuat di sini daripada jadual yang diterbitkan (tiada apa yang dimuat turun):

- **Keratan keluli**: 1,335 saiz. W, S, C, L, HSS dan Paip daripada AISC Shapes Database v16.0; IPE, HEA, HEB dan UPN daripada EN 10365:2017. DetailCraft menggunakan jadual yang sama.
- **Bahagian piawai**: skru kepala heksagon (ISO 4017), bolt heksagon (ISO 4014), nat heksagon (ISO 4032), washer biasa (ISO 7089), bolt dan nat heksagon inci (ASME B18.2.1 dan B18.2.2), pin selari (ISO 2338), galas bebola alur dalam (ISO 15), kunci selari (DIN 6885-1) dan gear taji (modul daripada ISO 54).

Semua di sini dikongsi di bawah CC0: gunakan untuk apa jua tujuan, tanpa perlu kredit.

## Letakkan keratan keluli

1. Buka pustaka ({{ui:Pustaka}} dalam kumpulan Blok, atau taip `LIB`) dan klik tab {{ui:Standard}}.
2. Pilih keluarga dalam senarai pertama, contohnya {{ui:Bentuk W}}. Taip dalam kotak carian untuk menyempitkan saiz: `W12` menunjukkan setiap W12.
3. Dalam {{ui:Letak sebagai}}, pilih:
   - {{ui:Keratan}}: keratan rentas, dengan pusatnya pada titik selitan.
   - {{ui:Ketinggian}}: ahli dilihat dari sisi, sepanjang {{ui:Panjang (mm)}} yang dinyatakan, dari tengah hujung kirinya.
   - {{ui:Anggota 3D}}: pepejal pada tab 3D (di bawah).
4. Klik {{ui:Letak}} pada kad saiz itu, kemudian klik di mana ia pergi, seperti mana-mana item pustaka.

Keratan atau dongakan menjadi blok. Atributnya membawa saiz, jadual asalnya, panjang (untuk dongakan) dan bahan yang boleh anda isi.

:::note
Bentuk S, saluran dan UPN dilukis dengan sayap selari berketebalan purata, dan sudut dengan bucu bersegi: sayap sebenar adalah condong dan bucu dibundarkan. W, IPE, HEA dan HEB mempunyai fillet akarnya, dan HSS jejari bucunya.
:::

## Buat ahli 3D

Pilih {{ui:Anggota 3D}} dan klik {{ui:Letak}}, atau taip {{cmd:STEELMEMBER}} (`SMEMBER`) pada baris arahan:

1. Pada `Saiz keratan`, tekan {{key:Enter}} untuk saiz yang dipaparkan, atau taip satu, contohnya `HSS6x6x1/4` atau `IPE300`.
2. Klik titik mula, kemudian titik akhir. Ahli berjalan antara keduanya, duduk di atas tanah.
3. Untuk tiang, taip `C`, klik titik asasnya dan taip ketinggiannya.

Ahli ialah pepejal tertutup pada tab 3D. Alih atau salin ia di situ seperti mana-mana pepejal lain. {{key:Mod+Z}} membatalkannya.

## Letakkan bahagian piawai

1. Pada tab {{ui:Standard}}, pilih keluarga, contohnya {{ui:Skru kepala heksagon}}.
2. Untuk skru, bolt, pin atau kunci, taip {{ui:Panjang (mm)}} (inci untuk keluarga inci). Untuk gear, taip {{ui:Gigi}}, {{ui:Lebar muka (mm)}} dan {{ui:Diameter lubang (mm)}}. Biarkan kotak kosong untuk nilai biasa yang dipaparkan di dalamnya.
3. Klik {{ui:Letak}} pada saiz itu dan klik di mana ia pergi.

Skru, bolt dan pin dilukis dari sisi dengan muka galas kepala pada titik selitan; nat, washer, galas dan gear menghadap ke depan; kunci dari atas. Ulir dilukis mengikut cara biasa: akar sebagai garisan nipis, hujung ulir sebagai garisan tebal. Gear dilukis sebagai bulatan hujung, bulatan lingkaran dan bulatan akar, bukan gigi demi gigi.

Blok setiap bahagian membawa jenis, piawai, saiz, panjang dan bahannya sebagai atribut, dan beratnya daripada bentuk nominal dalam keluli. Tukar bahan dalam panel {{ui:Sifat}}.

Bahagian yang sama juga ada dalam Pustaka sebagai item, dan PartCraft membukanya sebagai bahagian berparameter ({{ui:Bahagian piawai}} dalam kumpulan Fail).

## Buat senarai bahagian

- Dalam pustaka, klik {{ui:Senarai bahagian}}: setiap bahagian piawai dan keratan keluli dalam lukisan, dikumpulkan mengikut jenis, piawai, saiz, panjang dan bahan, dengan kuantiti dan nombor item. {{ui:Muat turun CSV}} menyimpannya untuk hamparan.
- Untuk melukisnya, taip {{cmd:PARTSLIST}} (`PLIST`), klik sudut kiri atas jadual, dan tekan {{key:Enter}} untuk ketinggian teks biasa atau taip satu.

Senarai dibaca daripada atribut blok, jadi ia masih betul selepas lukisan disimpan sebagai DWG atau DXF dan dibuka semula.

## Kesilapan biasa

- **"No steel section is called …"**: Tiada keratan keluli dipanggil … Taip saiz seperti yang disenaraikan oleh tab {{ui:Standard}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Ahli berada pada tab 3D, bukan dalam pelan.** {{cmd:STEELMEMBER}} membuat pepejal; buka tab 3D untuk melihatnya. Untuk menunjukkan keluli dalam pelan, letakkan {{ui:Keratan}} atau {{ui:Ketinggian}} juga.
- **Panjang di luar julat.** Bolt mesti lebih panjang daripada kepalanya, dan kunci lebih panjang daripada lebarnya. Garisan di bawah kad menyatakan nilai mana yang ditolak.
