---
title: Papan kekunci dan tetikus
summary: Setiap kekunci, tindakan tetikus dan kekunci baris arahan dalam aplikasi lukisan CadCraft, seperti yang dikendalikan oleh kod.
keywords: papan kekunci, pintasan, kekunci, tetikus, roda, pan, zum, klik kanan, butang tengah, f3, f7, f8, ctrl, kekunci command, kekunci pantas, salin, potong, tampal, pendua, papan keratan, pilih semua
from: a2608a29
---

Pintasan ditunjukkan untuk komputer anda. Pada Mac, setiap pintasan {{key:Mod}} di bawah menggunakan kekunci Command, dan kekunci Control turut berfungsi. Cara kekunci ditulis, dan cara menggunakan kekunci-F pada Mac, terdapat dalam [Kekunci, tetikus dan pad jejak](common:keys).

## Menaip arahan

| Kekunci | Fungsi |
|---|---|
| Sebarang huruf, digit atau simbol | Pergi ke baris arahan, di mana sahaja penuding berada, melainkan kotak dalam panel mempunyai kursor |
| {{key:Enter}} | Menghantar apa yang anda taip. Pada gesaan kosong: mengulang arahan terakhir, menamatkan arahan, menamatkan pilihan, atau menerima lalai dalam `<…>` |
| {{key:Space}} | Sama seperti {{key:Enter}}, kecuali semasa CadCraft meminta teks (teks, nama blok, teks dimensi), di mana ia menaip ruang |
| {{key:Esc}} | Membatalkan arahan. Tanpa arahan berjalan: membatalkan pengalihan grip atau kotak pilihan, kemudian mengosongkan pilihan |
| {{key:Tab}} | Menerima arahan dicadangkan yang ditunjukkan di sebelah kanan baris arahan. Tiada apa ditaip dan penuding di atas objek bertindih: menyerlahkan objek seterusnya di situ (klik untuk memilihnya) |
| {{key:Up}} {{key:Down}} | Melangkah melalui baris yang anda taip sebelum ini (100 terakhir) |

## Lukisan dan penyuntingan

| Kekunci | Fungsi |
|---|---|
| {{key:Mod+Z}} | Buat asal arahan terakhir |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Buat semula |
| {{key:Mod+A}} | Pilih setiap objek yang boleh anda sunting pada tab terbuka ({{cmd:SELECTALL}}). Jika anda telah menaip sesuatu pada baris arahan, ia memilih teks itu sebaliknya |
| {{key:Delete}} | Padam objek yang dipilih ({{cmd:ERASE}}), melainkan anda telah menaip sesuatu pada baris arahan |
| {{key:Backspace}} | Padam objek yang dipilih apabila baris arahan tidak mempunyai kursor; pada baris arahan ia memadam apa yang anda taip |
| {{key:Esc}} | Tanpa arahan berjalan: mengosongkan pilihan ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Simpan salinan dalam format lukisan (DWG atau DXF) |
| {{key:Mod+Shift+S}} | Simpan sebagai: pilih DWG atau DXF, kemudian simpan salinan |
| {{key:Mod+O}} | Buka DWG atau DXF |
| {{key:Mod+P}} | Plot ke PDF |

Buat asal, buat semula, pilih semua dan plot tidak melakukan apa-apa semasa arahan berjalan: tekan {{key:Esc}} dahulu.

## Salin, potong dan tampal

| Kekunci | Fungsi |
|---|---|
| {{key:Mod+C}} | Salin pilihan ke papan keratan ({{cmd:COPYCLIP}}). Tiada apa dipilih: CadCraft meminta objek |
| {{key:Mod+X}} | Potong: salin pilihan, kemudian padamnya ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Tampal: salinan mengikut penuding; klik, atau taip titik, untuk meletakkannya ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Tampal di tempat yang sama: pada koordinat ia disalin daripadanya ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Pendua: salinan pilihan bergerak bersama penuding; klik untuk meletakkannya, {{key:Esc}} tidak meninggalkan apa-apa ({{cmd:DUPLICATE}}) |

Tindakan yang sama terdapat dalam kumpulan {{ui:Sunting}} bar alat ({{ui:Salin}}, {{ui:Tampal}}) dan menu {{ui:Lagi}}. Semasa arahan lain berjalan, tamatkannya atau tekan {{key:Esc}} dahulu; menekan {{key:Mod+V}} atau {{key:Mod+D}} sekali lagi semasa salinan mengikut kursor akan bermula semula. Apabila anda telah menaip sesuatu pada baris arahan, atau arahan sedang meminta teks, kekunci ini menyalin, memotong dan menampal teks itu sebaliknya. Lihat [Salin, tampal dan pendua](topic:copy-paste).

## Togol

| Kekunci | Togol | Butang bar status |
|---|---|---|
| {{key:F3}} | Snap objek hidup atau mati | {{ui:Snap}} |
| {{key:F7}} | Grid hidup atau mati | {{ui:Grid}} |
| {{key:F8}} | Ortho hidup atau mati | {{ui:Ortho}} |
| {{key:F10}} | Penjejakan kutub hidup atau mati | {{ui:Kutub}} |
| {{key:F11}} | Penjejakan snap objek hidup atau mati | {{ui:Jejak}} |
| {{key:F12}} | Input dinamik hidup atau mati | {{ui:Dyn}} |

:::mac
Pada Mac, F3, F7 dan F8 biasanya ialah kekunci Mission Control dan media. Tahan **fn** bersamanya, atau hidupkan kekunci fungsi standard dalam Tetapan Sistem, seperti yang diterangkan dalam [Kekunci, tetikus dan pad jejak](common:keys). Butang bar status sentiasa berfungsi.
:::

:::firefox
F7 dalam Firefox juga boleh meminta untuk menghidupkan semakan kursor. Pilih **Tidak**, dan gunakan butang {{ui:Grid}} jika ia terus bertanya.
:::

## Bantuan

| Kekunci | Fungsi |
|---|---|
| {{key:F1}} | Membuka atau menutup bantuan ini, bersebelahan lukisan. Ia berfungsi walaupun arahan sedang berjalan, dan tidak sampai ke baris arahan. |
| {{key:Esc}} | Dengan kursor dalam panel bantuan: membersihkan carian, atau menutup panel |

Butang {{ui:Bantuan}} pada bar di atas melakukan perkara yang sama seperti {{key:F1}}. Semasa anda menaip dalam kotak carian bantuan, tiada apa yang sampai ke baris arahan. Klik pada lukisan untuk memberikan kekunci kembali kepada CadCraft; panel kekal terbuka di sebelahnya.

:::mac
Pada papan kekunci Mac, tahan **fn** dan tekan F1, atau klik {{ui:Bantuan}}.
:::

## Skrin

| Kekunci | Fungsi |
|---|---|
| {{key:Ctrl+Shift+F}} | Bergilir antara normal, skrin penuh, dan skrin penuh dengan bar disembunyikan. Ini menggunakan kekunci Control pada setiap komputer, termasuk Mac. |
| {{key:Left}} {{key:Right}} | Dengan tab di bawah lukisan difokuskan: tab sebelumnya atau seterusnya |

Dalam skrin penuh, pelayar mungkin menggunakan {{key:Esc}} pertama untuk keluar daripada skrin penuh. Tekan {{key:Esc}} sekali lagi untuk membatalkan arahan.

## Kotak dialog

| Kekunci | Fungsi |
|---|---|
| {{key:Esc}} | Menutup kotak dialog ({{ui:Plot ke PDF}}, atau soalan seperti "Perubahan yang belum disimpan", di mana ia bermaksud {{ui:Batal}}) |
| {{key:Tab}} | Bergerak antara tetapan dan butang kotak dialog |

Semasa kotak dialog dibuka, kekunci lukisan dimatikan.

## Medan panel

Dalam kotak dalam panel kanan atau kiri:

| Kekunci | Fungsi |
|---|---|
| {{key:Enter}} | Menggunakan nilai dan meninggalkan kotak |
| {{key:Esc}} | Mengembalikan nilai lama dan meninggalkan kotak |
| {{key:Tab}} | Menggunakan dan bergerak ke kotak seterusnya |

Semasa kotak mempunyai kursor, huruf menaip ke dalamnya, bukan ke baris arahan.

## Tetikus

| Tindakan | Fungsi |
|---|---|
| Klik | Memilih titik apabila arahan memintanya; memilih objek apabila ia meminta objek; jika tidak, memilih objek, atau grip |
| Shift+klik | Mengeluarkan objek yang dipilih daripada pilihan (dengan {{ui:Klik objek}} ditetapkan kepada {{ui:Menggantikan pilihan}} dalam [Tetapan](topic:settings): menambahnya). Semasa memilih titik: mengabaikan snap objek untuk klik itu |
| Klik di ruang kosong, kemudian klik lagi | Kotak pilihan: dari kiri ke kanan ialah tetingkap, dari kanan ke kiri ialah silang |
| Seret pada ruang kosong | Lasso: bergerak ke kanan dahulu ialah tetingkap, ke kiri dahulu ialah silang; {{key:Space}} semasa menyeret bergilir antara tetingkap, silang dan pagar; {{key:Esc}} melepaskannya (LASSOMODE 0, atau Tetapan, menjadikannya segi empat tepat semula) |
| Seret melalui bahagian dalam TRIM atau EXTEND | Memangkas (atau memanjangkan) setiap bahagian yang dilalui laluan; tahan {{key:Shift}} untuk yang satu lagi |
| Seret grip | Mengalihkan grip (atau klik grip, kemudian klik di tempat ia hendak pergi) |
| Klik dua kali teks | Memilihnya dan meletakkan kursor dalam kotak {{ui:Teks}} dalam panel kanan |
| Klik kanan | Enter. Semasa pengalihan grip atau kotak pilihan: membatalkannya |
| Seret dengan butang kanan | Memanning |
| Roda | Zum masuk dan keluar sekitar kursor silang |
| Seret dengan roda (butang tengah) | Memanning |
| Klik dua kali roda | Zum ke keseluruhan lukisan (lingkungan) |
| Lepaskan DWG atau DXF pada lukisan | Membukanya |

Pada pad jejak atau skrin sentuh, lihat [Tetikus, pad jejak dan sentuh](topic:mouse-trackpad-touch).

## Kekunci yang dikekalkan pelayar

{{key:Mod+N}}, {{key:Mod+W}} dan {{key:Mod+T}} sentiasa milik pelayar. CadCraft tidak menggunakannya: gunakan {{ui:Baharu}} atau taip `NEW` untuk lukisan baharu. Papan keratan CadCraft adalah miliknya sendiri: {{key:Mod+C}} dan {{key:Mod+V}} menyalin objek antara lukisan dan tab CadCraft, bukan ke atau daripada program lain.

:::mac
Jika {{key:Mod+Y}} membuka sejarah pelayar anda dan bukannya membuat semula, gunakan {{key:Mod+Shift+Z}} atau butang {{ui:Buat semula}}.
:::

## Di mana Alih berada

Alih ialah arahan `MOVE` (kekunci {{key:M}}): pilih objek, kemudian titik asas dan titik kedua atau jarak yang ditaip. `ALIGN` dan `DISTRIBUTE` juga ada. BimCraft menggunakan nama yang sama untuk kerja yang sama pada elemen bangunan, tetapi {{key:M}}-nya ialah Ukur: Alihnya ialah {{key:Shift+M}}.
