---
title: Snap ke titik pada objek
summary: Gunakan snap objek, Ortho dan grid untuk memilih titik hujung, titik tengah, pusat dan persilangan yang tepat dengan tetikus.
keywords: osnap, snap objek, titik hujung, titik tengah, pusat, persilangan, serenjang, kuadran, terdekat, nod, selitan, ortho, grid, f3, f8, f7, penjejakan kutub, kutub, polarang, penjejakan snap objek, otrack, penjejakan, f10, f11
from: 3cf17f94
---

## Apa yang anda akan buat

Segi empat tepat dengan dua pepenjurunya, bulatan yang berpusat di tempat ia bersilang, dan garisan dari tengah satu sisi ke bulatan itu. Setiap titik dipilih dengan tetikus, dan setiap titik adalah tepat.

## Cara snap berfungsi

Semasa arahan meminta titik, CadCraft mencari titik snap dalam jarak kira-kira 10 piksel dari kursor silang. Apabila ia menjumpai satu, penanda dan label muncul ("Titik hujung", "Persilangan"), dan klik mendarat **tepat** pada titik itu, bukan di tempat kursor silang berada.

Snap dihidupkan apabila {{ui:Snap}} dalam bar status ditekan. {{key:F3}} menghidupkan dan mematikannya.

Snap yang boleh anda gunakan ialah:

| Snap | Mendarat pada |
|---|---|
| Titik hujung | Hujung garisan, lengkok dan segmen polygaris |
| Titik tengah | Tengah garisan, lengkok dan segmen polygaris |
| Pusat | Pusat bulatan dan lengkok, dan pusat segmen lengkok polygaris |
| Kuadran | Titik 0, 90, 180 dan 270 darjah bagi bulatan dan lengkok |
| Persilangan | Tempat dua objek bersilang |
| Serenjang | Titik pada objek yang bersudut tegak dengan titik terakhir (memerlukan titik asas) |
| Tangen | Titik pada bulatan atau lengkok di mana garisan dari titik terakhir hanya menyentuhnya. Tanpa titik terakhir lagi (titik pertama garisan), penanda berbunyi "ditangguhkan": titik sentuhan dikira sebaik sahaja titik seterusnya diketahui, jadi garisan dari Tangen ke Tangen menyentuh kedua-dua bulatan |
| Terdekat | Titik terdekat pada mana-mana objek |
| Nod | Objek titik |
| Titik selitan | Titik selitan teks dan rujukan blok |

Semua daripadanya dihidupkan secara lalai kecuali Tangen dan Terdekat. Terdekat sering menang apabila anda mahukan sesuatu yang lain; hidupkan Tangen apabila anda memerlukannya.

## Pilih snap anda

1. Klik anak panah kecil di sebelah {{ui:Snap}} dalam bar status. Senarai {{ui:Object snaps}} dibuka.
2. Tanda atau nyahtanda snap. Perubahan terpakai serta-merta.
3. Klik anak panah sekali lagi untuk menutup senarai.

CadCraft mengingati pilihan anda, dan tetapan {{ui:Grid}}, {{ui:Ortho}} dan {{ui:Snap}}, dalam pelayar ini.

## Langkah

1. Taip `REC` dan tekan {{key:Enter}}.
2. Taip `0,0` dan tekan {{key:Enter}}.
3. Taip `@4000,3000` dan tekan {{key:Enter}}. Segi empat tepat muncul.
4. Klik {{ui:Extents}}.
5. Taip `L` dan tekan {{key:Enter}}.
6. Gerakkan kursor silang ke sudut kiri bawah. Penanda menunjukkan "Titik hujung". Klik.
7. Gerakkan ke sudut kanan atas sehingga "Titik hujung" muncul. Klik.
8. Tekan {{key:Enter}} untuk menamatkan garisan.
9. Tekan {{key:Enter}} sekali lagi untuk mengulang {{cmd:LINE}}, dan lukis pepenjuru satu lagi dari sudut kanan bawah ke sudut kiri atas dengan cara yang sama.
10. Taip `C` dan tekan {{key:Enter}} untuk memulakan bulatan.
11. Gerakkan kursor silang ke tempat pepenjuru bersilang. Penanda menunjukkan "Persilangan". Klik.
12. Taip `800` dan tekan {{key:Enter}}.

Anda sepatutnya nampak bulatan berpusat tepat pada persilangan itu.

13. Taip `L` dan tekan {{key:Enter}}.
14. Gerakkan ke tengah sisi kiri segi empat tepat sehingga "Titik tengah" muncul. Klik.
15. Gerakkan kursor silang ke atas bulatan, pada sisi kirinya. Penanda menunjukkan "Serenjang" atau "Kuadran"; kedua-duanya ialah titik yang sama di sini. Klik.
16. Tekan {{key:Enter}}.

Garisan baharu bermula dari tengah sisi kiri dan berhenti tepat pada bulatan.

## Langkau snap untuk satu klik

Tahan {{key:Shift}} semasa anda klik. Snap objek diabaikan untuk klik itu, dan titik itu mendarat tepat di tempat kursor silang berada (atau sepanjang arah Ortho, jika Ortho dihidupkan).

## Ortho

{{ui:Ortho}} ({{key:F8}}) memastikan titik seterusnya lurus melintang atau lurus ke atas dan ke bawah dari titik asas. Ia terpakai pada klik dan pada kemasukan jarak langsung (nombor tunggal yang ditaip pada gesaan). Snap objek menang ke atas Ortho: jika penanda snap muncul, klik itu pergi ke snap.

## Penjejakan kutub

{{ui:Polar}} ({{key:F10}}) ialah Ortho pada lebih banyak sudut. Semasa arahan mempunyai titik asas (titik terakhir garisan, titik asas gerakan), penunjuk sejajar apabila ia menghampiri sinar dari titik itu pada gandaan langkah kutub: garisan bertitik ditunjukkan, dan label di sebelah kursor silang berbunyi `Polar: 1200 < 30°`. Klik untuk menggunakan titik itu, atau taip jarak: `1200` bergerak tepat 1200 sepanjang sinar.

Langkah ialah 90° sehingga anda menukarnya: taip {{cmd:POLARANG}}, tekan {{key:Enter}}, dan taip `30` (atau 45, 22.5, 15 …). Kutub dan Ortho saling mengecualikan: menghidupkan salah satu akan mematikan yang lain.

## Penjejakan snap objek

{{ui:Track}} ({{key:F11}}) menjajarkan penunjuk dengan titik snap yang anda pernah letakkan penunjuk di atasnya, supaya anda boleh memilih titik yang sama aras dengan satu sudut dan di atas yang lain tanpa melukis garisan pembantu.

1. Hidupkan {{ui:Snap}} dan {{ui:Track}}, dan mulakan arahan yang meminta titik (`L`).
2. Letakkan penunjuk di atas titik snap, seperti sudut, selama setengah saat, tanpa klik. Tanda silang kecil menandakannya: ia telah diperoleh. Letakkan semula di atasnya untuk melepaskannya.
3. Gerakkan penunjuk lurus dari titik itu, secara mendatar atau menegak. Garisan bertitik mengikuti penunjuk dan label berbunyi `Jejak: 600 < 90°`. Klik, atau taip jarak.
4. Perolehi titik kedua, dan gerakkan ke tempat menegak dari satu titik bertemu dengan mendatar dari yang lain: penunjuk snap ke persilangan itu (`Jejak: tempat dua garisan bertemu`).

Dengan {{ui:Polar}} dihidupkan juga, titik yang diperoleh menjejak pada setiap sudut kutub. Sehingga tujuh titik disimpan, sehingga arahan tamat. {{key:Shift}} mematikan penjejakan untuk satu klik, seperti snap.

## Grid

{{ui:Grid}} ({{key:F7}}) menunjukkan grid garisan di belakang lukisan, dengan garisan yang lebih tebal setiap lima garisan; jaraknya berubah apabila anda zum. Ia hanya panduan sehingga anda menghidupkan {{ui:Grid snap}} ({{key:F9}}): kemudian klik mendarat pada titik grid yang terdekat, melainkan snap objek mengambil titik itu dahulu.

## Kekunci fungsi pada komputer anda

{{key:F9}} ialah {{ui:Grid snap}}, {{key:F10}} ialah {{ui:Polar}} dan {{key:F11}} ialah {{ui:Track}}.

:::mac
Pada Mac, F3, F7, F8 dan F9 biasanya mengawal Mission Control dan media. Tahan **fn** bersama kekunci itu, atau hidupkan kekunci fungsi standard, seperti yang diterangkan dalam [Kekunci, tetikus dan pad jejak](common:keys). Butang bar status sentiasa berfungsi.
:::

:::firefox
Dalam Firefox, F7 juga kekunci untuk penyemakan kursor. Jika Firefox bertanya sama ada mahu menghidupkan penyemakan kursor, pilih **Tidak**. Gunakan butang {{ui:Grid}} jika soalan itu terus muncul.
:::

:::touch
Pada skrin sentuh tiada hover, jadi penanda snap hanya muncul di tempat jari anda menyentuh. Zum dekat-dekat untuk sasaran kecil, atau taip koordinat.
:::

## Ralat lazim

- **Klik pergi ke titik yang salah.** Lihat label penanda sebelum anda klik: Titik hujung menang ke atas Titik tengah apabila kedua-duanya dekat. Zum dekat, atau nyahtanda snap yang tidak anda perlukan.
- **Tiada penanda muncul.** {{ui:Snap}} dimatikan, atau snap yang anda mahukan dinyahtanda, atau objek berada pada lapisan yang dimatikan atau dibekukan.
- **Snap mengambil benda yang salah dalam lukisan yang sibuk.** Zum dekat. Jarak snap diukur dalam piksel skrin, jadi zum dekat menjadikannya lebih kecil pada lukisan.
- **Menjangka Shift memberikan garisan lurus.** Dalam CadCraft, Shift mematikan snap untuk satu klik. Gunakan {{ui:Ortho}} untuk garisan lurus.
- **Menjangka titik mendarat pada titik grid.** Hidupkan {{ui:Grid snap}} ({{key:F9}}), atau taip koordinat untuk nombor bulat.
