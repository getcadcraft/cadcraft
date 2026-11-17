---
title: Sunting dengan grip dan Sifat
summary: Regang, alih dan ubah saiz objek mengikut gripnya, dan taip panjang, jejari, sudut dan koordinat yang tepat dalam panel Sifat.
keywords: grip, sifat, regang, panjang, jejari, koordinat, sunting, sifat pantas, panel sifat, tukar, lapisan, warna
from: f22541ba
---

## Apa yang akan anda pelajari

Dua cara pantas untuk menukar objek tanpa arahan: seret **grip**nya, atau taip nilai baharu dalam panel **Sifat** di sebelah kanan.

## Grip

Apabila anda memilih objek (sehingga 200 pada satu masa) tanpa arahan berjalan, petak kecil muncul padanya. Inilah grip:

| Objek | Grip |
|---|---|
| Garisan | Kedua-dua hujung, dan titik tengah (mengalihkan keseluruhan garisan) |
| Bulatan | Pusat (mengalihkannya) dan empat titik pada bulatan (menukar jejari) |
| Lengkok | Pusat, dan kedua-dua hujung (menukar tempat ia bermula dan berhenti) |
| Polygaris | Setiap bucu |
| Teks, titik, rujukan blok | Titik selitan |
| Elips | Pusat |
| Dimensi | Titik takrifannya dan kedudukan garis dimensi |
| Viewport | Pusat (mengalihkannya) dan empat sudut (mengubah saiznya) |

### Alih grip

1. Lukis garisan dan klik padanya. Tiga grip muncul.
2. Klik grip di satu hujung. Bar status berbunyi "Klik di tempat grip ini hendak pergi (Esc untuk batal). Snap dan Ortho terpakai."
3. Gerakkan kursor silang. Pratonton mengikutinya.
4. Klik kedudukan baharu, atau snap ke titik pada objek lain dan klik.

Hujung itu bergerak dan bahagian lain garisan kekal di tempatnya. Anda juga boleh menekan pada grip dan menyeretnya, kemudian lepaskan di tempat yang dikehendaki.

:::note
Anda tidak boleh menaip koordinat untuk grip. Untuk kedudukan yang tepat, snap ke titik, atau taip nilai dalam Sifat.
:::

Tekan {{key:Esc}} atau klik kanan untuk membatalkan pengalihan grip.

## Sifat

Panel kanan memaparkan sifat bagi apa yang dipilih.

1. Klik garisan. Tajuk panel tertulis "Garisan".
2. Klik dalam {{ui:Panjang}}, taip `2500` dan tekan {{key:Enter}}.

Garisan kini tepat 2500 panjang, dengan titik mula dan sudutnya dikekalkan. {{key:Enter}} atau klik di tempat lain menggunakan nilai; {{key:Esc}} mengembalikan nilai lama. Setiap perubahan ialah satu langkah buat asal, juga apabila banyak objek berubah serentak.

Medan menerima ungkapan (`=2*45`) dan panjang dengan unit (`3'6"`, `900mm`), setiap titik mempunyai X, Y dan Z, dan beberapa objek boleh diubah serentak. Semua ini terdapat dalam [Panel Sifat](topic:properties-panel).

## Kesilapan lazim

- **Tiada grip muncul.** Arahan sedang berjalan (tekan {{key:Esc}}), atau lebih 200 objek dipilih, atau objek berada pada lapisan yang dikunci.
- **Grip pergi ke tempat yang salah.** Snap menangkapnya. Tahan {{key:Shift}} semasa anda klik untuk mengabaikan snap.
- **Menaip dalam Sifat tidak melakukan apa-apa.** Tekan {{key:Enter}} atau klik di tempat lain untuk menggunakan. Entri yang ditolak (panjang dan jejari sifar atau negatif, teks yang bukan nilai) menjadikan medan merah dan memberitahu sebabnya.
- **Huruf yang ditaip masuk ke medan Sifat.** Semasa medan mempunyai kursor, kekunci menaip di situ. Tekan {{key:Enter}} atau {{key:Esc}}, kemudian taip arahan.
