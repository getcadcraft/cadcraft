---
title: Sejarah: versi dan perkara yang berubah
summary: Lihat versi lukisan (salinan yang Studio simpan apabila anda menyimpan, dan yang ada di awan), buka atau pulihkan satu, dan bandingkan dua dengan perubahan ditunjukkan dalam warna.
keywords: sejarah, versi, sejarah versi, pulihkan, versi sebelumnya, buat asal simpanan, bandingkan, bandingkan lukisan, dwgcompare, perubahan, ditambah, dibuang, diubah, syot kilat, sandaran, versi awan
from: 141d37b3
---

## Apa yang akan anda hasilkan

Lihat versi lebih awal bagi sebuah lukisan, dan senarai apa yang berbeza daripada sekarang: apa yang ditambah, apa yang dibuang dan apa yang berubah, ditandakan dalam warna pada lukisan.

## Buka Sejarah

Taip `HISTORY` (atau `HIST`) dan tekan {{key:Enter}}, atau pilih {{ui:Sejarah…}} dalam menu {{ui:Lagi}} kumpulan {{ui:Pandangan}}. Panel dibuka di sebelah lukisan dan kekal terbuka semasa anda bekerja, supaya anda boleh memanning dan zum lukisan dengan warna padanya.

Sejarah berfungsi dalam CadCraft Studio. Dalam pelayar, panel hanya memberitahu demikian.

## Dari mana versi datang

- **Pada komputer ini.** Setiap kali anda membuka lukisan daripada fail dalam Studio, dan setiap kali anda menyimpannya, Studio menyimpan salinan fail dalam storannya sendiri pada komputer ini. Salinan pertama ialah {{ui:Seperti yang dibuka}}: fail seperti sebelum simpanan pertama anda menimpanya. Studio menyimpan 25 salinan terbaharu bagi setiap lukisan, dan yang paling lama dibuang dahulu apabila semua salinan melebihi 400 MB. Simpanan yang tidak mengubah apa-apa tidak menyimpan apa-apa. Tiada apa-apa dimuat naik.
- **Di awan.** Apabila anda membuka lukisan daripada fail awan anda dalam Studio, panel turut menyenaraikan {{ui:Dalam awan}}: setiap versi yang dipegang awan, dengan nombornya, siapa yang menyimpannya dan notanya. Panel hanya membaca versi-versi ini. CadCraft belum menghantar simpanannya sendiri ke awan, jadi ini ialah versi yang disimpan daripada peranti lain dan web. Log masuk semula dalam Studio jika ia memberitahu bahawa log masuk telah tamat.

Lukisan yang belum anda simpan tidak mempunyai salinan: simpan dahulu.

## Buka atau pulihkan versi

- {{ui:Buka}} meletakkan versi itu dalam tab tersendiri. Lukisan anda tidak terjejas.
- {{ui:Pulihkan}} menggantikan lukisan ini dengan versi itu. Ia bertanya dahulu. Studio menyimpan salinan lukisan seperti sekarang dalam Sejarah (ditandakan {{ui:Sebelum pemulihan}}) sebelum berbuat demikian, dan tiada apa-apa ditulis ke fail sehingga anda menyimpan. Pemulihan tidak boleh dibuat asal dengan {{key:Mod+Z}}; gunakan salinan itu.

## Bandingkan

1. Klik {{ui:Bandingkan}} pada satu versi. Ia dibandingkan dengan {{ui:Lukisan seperti sekarang}}; untuk membandingkannya dengan versi lain, pilih versi itu dalam {{ui:Bandingkan dengan}} dahulu.
2. Baca hasil di bawah senarai: berapa objek ditambah, dibuang dan diubah, serta senarai mereka. Klik item dalam senarai untuk mengalihkan paparan ke item itu.
3. Pada lukisan:
   - objek **hijau** ditambah,
   - objek **merah** dibuang (ia hanya terdapat dalam versi yang lebih lama),
   - objek **oren** berubah: bentuk baharu ialah garisan pepejal dan bentuk lama ialah garisan putus-putus.
4. {{ui:Tunjukkan pada lukisan}} menghidupkan dan mematikan warna; {{ui:Kosongkan warna}} mengeluarkan hasilnya. Menutup panel turut mengosongkan warna.

Senarai menyatakan apa yang berubah dalam objek yang diubah: teksnya, bahawa ia dialihkan, bentuknya, lapisannya, warna, jenis garisan atau ketebalan garisannya. Setiap helaian dibandingkan secara berasingan; warna ditunjukkan pada helaian yang dibuka.

:::note
Lukisan tidak mempunyai nombor kekal bagi setiap objek, jadi CadCraft memadankan objek mengikut apa ia itu: objek yang sama di kedua-dua belah tidak berubah; objek jenis dan lapisan yang sama yang berada dalam saiznya sendiri daripada objek lama ialah objek yang sama, yang telah diubah; apa-apa yang tinggal ditambah atau dibuang. Objek yang dialihkan jauh dari kedudukan asalnya ditunjukkan sebagai dibuang di satu tempat dan ditambah di tempat lain. Rujukan blok mengira kandungan bloknya.
:::

## Kesilapan lazim

- **"Belum ada salinan."** Studio menyimpan salinan pada setiap buka dan simpan lukisan yang mempunyai fail pada komputer ini. Lukisan yang dibuka daripada tab pelayar, atau yang tidak pernah disimpan, tiada salinan.
- **Senarai awan tiada.** Ia muncul bagi lukisan yang dibuka daripada awan dalam Studio; fail yang dibuka daripada cakera bukan lukisan awan.
- **Semuanya kelihatan berubah.** Dua versi yang disimpan oleh program berbeza menulis lukisan yang sama dengan cara berbeza (nama blok tanpa nama, pembundaran). Bandingkan versi yang disimpan oleh CadCraft.
