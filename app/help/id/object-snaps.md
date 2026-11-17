---
title: Snap ke titik pada objek
summary: Gunakan snap objek, Ortho, dan grid untuk memilih titik ujung, titik tengah, pusat, dan perpotongan yang tepat dengan mouse.
keywords: osnap, snap objek, titik ujung, titik tengah, pusat, perpotongan, tegak lurus, kuadran, terdekat, node, sisipan, ortho, grid, f3, f8, f7, pelacakan polar, polar, polarang, pelacakan snap objek, otrack, pelacakan, f10, f11
from: 3cf17f94
---

## Yang akan Anda buat

Persegi panjang dengan dua diagonalnya, lingkaran yang berpusat di tempat kedua diagonal berpotongan, dan garis dari tengah satu sisi menuju lingkaran. Setiap titik dipilih dengan mouse, dan setiap titik tepat.

## Cara kerja snap

Saat sebuah perintah meminta titik, CadCraft mencari titik snap dalam jarak sekitar 10 piksel dari kursor silang. Saat menemukannya, penanda dan label muncul ("Titik ujung", "Perpotongan"), dan klik mendarat **tepat** pada titik itu, bukan di tempat kursor silang berada.

Snap aktif saat {{ui:Snap}} di bilah status ditekan. {{key:F3}} menyalakan dan mematikannya.

Snap yang dapat Anda gunakan adalah:

| Snap | Mendarat pada |
|---|---|
| Titik ujung | Ujung garis, busur, dan segmen polyline |
| Titik tengah | Tengah garis, busur, dan segmen polyline |
| Pusat | Pusat lingkaran dan busur, dan segmen busur polyline |
| Kuadran | Titik 0, 90, 180, dan 270 derajat pada lingkaran dan busur |
| Perpotongan | Tempat dua objek berpotongan |
| Tegak lurus | Titik pada objek yang tegak lurus terhadap titik terakhir (memerlukan titik dasar) |
| Singgung | Titik pada lingkaran atau busur tempat garis dari titik terakhir hanya menyentuhnya. Tanpa titik terakhir (titik pertama sebuah garis), penanda berbunyi "ditunda": titik sentuh dihitung setelah titik berikutnya diketahui, sehingga garis dari Singgung ke Singgung menyentuh kedua lingkaran |
| Terdekat | Titik terdekat pada objek mana pun |
| Node | Objek titik |
| Sisipan | Titik sisip teks dan referensi blok |

Semuanya aktif secara default kecuali Singgung dan Terdekat. Terdekat cenderung menang saat Anda menginginkan yang lain; aktifkan Singgung saat Anda membutuhkannya.

## Pilih snap Anda

1. Klik panah kecil di samping {{ui:Snap}} di bilah status. Daftar {{ui:Snap objek}} terbuka.
2. Centang atau hapus centang snap. Perubahan langsung berlaku.
3. Klik panah lagi untuk menutup daftar.

CadCraft mengingat pilihan Anda, serta pengaturan {{ui:Grid}}, {{ui:Ortho}} dan {{ui:Snap}}, di peramban ini.

## Langkah-langkah

1. Ketik `REC` lalu tekan {{key:Enter}}.
2. Ketik `0,0` lalu tekan {{key:Enter}}.
3. Ketik `@4000,3000` lalu tekan {{key:Enter}}. Persegi panjang muncul.
4. Klik {{ui:Batas}}.
5. Ketik `L` lalu tekan {{key:Enter}}.
6. Gerakkan kursor ke sudut kiri bawah. Penanda menampilkan "Titik ujung". Klik.
7. Pindahkan ke sudut kanan atas sampai "Titik ujung" muncul. Klik.
8. Tekan {{key:Enter}} untuk mengakhiri garis.
9. Tekan {{key:Enter}} lagi untuk mengulangi {{cmd:LINE}}, lalu gambar diagonal lainnya dari sudut kanan bawah ke sudut kiri atas dengan cara yang sama.
10. Ketik `C` lalu tekan {{key:Enter}} untuk memulai lingkaran.
11. Gerakkan kursor ke tempat kedua diagonal berpotongan. Penanda menampilkan "Perpotongan". Klik.
12. Ketik `800` lalu tekan {{key:Enter}}.

Anda akan melihat lingkaran yang berpusat tepat di titik perpotongan.

13. Ketik `L` lalu tekan {{key:Enter}}.
14. Pindahkan ke tengah sisi kiri persegi panjang sampai "Titik tengah" muncul. Klik.
15. Gerakkan kursor ke lingkaran, di sisi kirinya. Penanda menampilkan "Tegak lurus" atau "Kuadran"; keduanya adalah titik yang sama di sini. Klik.
16. Tekan {{key:Enter}}.

Garis baru membentang dari tengah sisi kiri dan berhenti tepat di lingkaran.

## Lewati snap untuk satu klik

Tahan {{key:Shift}} saat Anda mengklik. Snap objek diabaikan untuk klik itu, dan titiknya berada tepat di tempat kursor silang (atau sepanjang arah Ortho, jika Ortho aktif).

## Ortho

{{ui:Ortho}} ({{key:F8}}) menjaga titik berikutnya tetap lurus ke samping, atau lurus ke atas dan bawah, dari titik dasar. Ini berlaku untuk klik dan untuk entri jarak langsung (angka saja yang diketik di prompt). Snap objek menang atas Ortho: jika penanda snap muncul, klik diberikan ke snap.

## Pelacakan polar

{{ui:Polar}} ({{key:F10}}) adalah Ortho pada lebih banyak sudut. Saat sebuah perintah memiliki titik dasar (titik terakhir sebuah garis, titik dasar pemindahan), penunjuk akan sejajar setiap kali mendekati sinar dari titik itu pada kelipatan langkah polar: garis putus-putus muncul, dan label di dekat kursor berbunyi `Polar: 1200 < 30°`. Klik untuk memakai titik itu, atau ketik jarak: `1200` bergerak tepat 1200 sepanjang sinar.

Langkahnya 90° sampai Anda mengubahnya: ketik {{cmd:POLARANG}}, tekan {{key:Enter}}, dan ketik `30` (atau 45, 22.5, 15 …). Polar dan Ortho saling meniadakan: menyalakan salah satunya akan mematikan yang lain.

## Pelacakan snap objek

{{ui:Lacak}} ({{key:F11}}) menyejajarkan penunjuk dengan titik snap yang sudah Anda diamkan di atasnya, sehingga Anda dapat memilih titik yang sejajar dengan satu sudut dan di atas sudut lain tanpa menggambar garis bantu.

1. Nyalakan {{ui:Snap}} dan {{ui:Lacak}}, lalu mulai perintah yang meminta titik (`L`).
2. Letakkan penunjuk di atas titik snap, seperti sudut, selama setengah detik, tanpa mengklik. Tanda silang kecil menandainya: titik itu sudah diperoleh. Letakkan lagi di atasnya untuk melepaskannya.
3. Gerakkan penunjuk lurus menjauh darinya, secara mendatar atau vertikal. Garis putus-putus mengikuti penunjuk dan labelnya berbunyi `Lacak: 600 < 90°`. Klik, atau ketik jarak.
4. Peroleh titik kedua, lalu gerakkan ke tempat garis vertikal melalui satu titik bertemu dengan garis horizontal melalui titik lainnya: penunjuk akan menempel pada perpotongan itu (`Lacak: tempat dua garis bertemu`).

Dengan {{ui:Polar}} juga aktif, titik yang diperoleh dilacak pada setiap sudut polar. Hingga tujuh titik disimpan, sampai perintah berakhir. {{key:Shift}} mematikan pelacakan untuk satu klik, seperti snap.

## Grid

{{ui:Grid}} ({{key:F7}}) menampilkan kisi garis di belakang gambar, dengan garis yang lebih tebal setiap garis kelima; jaraknya berubah saat Anda memperbesar. Ini hanya panduan sampai Anda menyalakan {{ui:Snap grid}} ({{key:F9}}): setelah itu klik mendarat pada titik grid terdekat, kecuali snap objek mengambil titik lebih dulu.

## Tombol fungsi di komputer Anda

{{key:F9}} adalah Snap grid, {{key:F10}} adalah Polar, dan {{key:F11}} adalah Lacak.

:::mac
Di Mac, F3, F7, F8 dan F9 biasanya mengontrol Mission Control dan media. Tahan **fn** bersama tombol itu, atau nyalakan tombol fungsi standar, seperti dijelaskan di [Tombol, mouse, dan trackpad](common:keys). Tombol di bilah status selalu berfungsi.
:::

:::firefox
Di Firefox, F7 juga merupakan tombol untuk caret browsing. Jika Firefox menanyakan apakah akan menyalakan caret browsing, pilih **Tidak**. Gunakan tombol {{ui:Grid}} jika pertanyaan itu terus muncul.
:::

:::touch
Di layar sentuh tidak ada hover, sehingga penanda snap hanya muncul di tempat jari Anda menyentuh. Perbesar dari dekat untuk target kecil, atau ketik koordinat sebagai gantinya.
:::

## Kesalahan umum

- **Klik mengenai titik yang salah.** Lihat label penanda sebelum Anda mengklik: Titik ujung menang atas Titik tengah saat keduanya berdekatan. Perbesar, atau hapus centang snap yang tidak Anda perlukan.
- **Tidak ada penanda yang muncul.** {{ui:Snap}} mati, atau snap yang Anda inginkan tidak dicentang, atau objeknya berada di layer yang mati atau dibekukan.
- **Snap mengambil hal yang salah di gambar yang padat.** Perbesar. Jarak snap diukur dalam piksel layar, sehingga memperbesar membuatnya lebih kecil pada gambar.
- **Mengharapkan Shift memberi garis lurus.** Di CadCraft, Shift mematikan snap untuk satu klik. Gunakan {{ui:Ortho}} untuk garis lurus.
- **Mengharapkan titik jatuh pada titik grid.** Nyalakan {{ui:Snap grid}} ({{key:F9}}), atau ketik koordinat untuk angka bulat.
