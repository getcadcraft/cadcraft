---
title: Riwayat: versi dan apa yang berubah
summary: Lihat versi gambar (salinan yang disimpan Studio saat Anda menyimpan, dan versi dari cloud), buka atau pulihkan satu versi, dan bandingkan dua versi dengan perubahan ditampilkan dalam warna.
keywords: riwayat, versi, riwayat versi, pulihkan, versi sebelumnya, batalkan simpan, bandingkan, bandingkan gambar, dwgcompare, perubahan, ditambahkan, dihapus, diubah, cuplikan, cadangan, versi cloud
from: 141d37b3
---

## Yang akan Anda buat

Sebuah tampilan versi gambar yang lebih lama, dan daftar apa yang berbeda dari sekarang: apa yang ditambahkan, apa yang dihapus, dan apa yang diubah, ditandai dengan warna pada gambar.

## Buka Riwayat

Ketik `HISTORY` (atau `HIST`) dan tekan {{key:Enter}}, atau pilih {{ui:Riwayat…}} di menu {{ui:Lainnya}} pada grup {{ui:Tampilan}}. Panel terbuka di samping gambar dan tetap terbuka saat Anda bekerja, sehingga Anda dapat menggeser dan memperbesar gambar dengan warna-warnanya.

Riwayat bekerja di CadCraft Studio. Di peramban, panel hanya menyatakan hal itu.

## Dari mana versi berasal

- **Di komputer ini.** Setiap kali Anda membuka gambar dari file di Studio, dan setiap kali Anda menyimpannya, Studio menyimpan salinan file di penyimpanannya sendiri di komputer ini. Salinan pertama adalah {{ui:Saat dibuka}}: file sebagaimana adanya sebelum Anda menimpanya untuk pertama kali. Studio menyimpan 25 salinan terbaru dari setiap gambar, dan yang paling lama dihapus lebih dulu ketika semua salinan bersama melebihi 400 MB. Penyimpanan yang tidak mengubah apa pun tidak menyimpan salinan. Tidak ada yang diunggah.
- **Di cloud.** Ketika Anda membuka gambar dari file cloud Anda di Studio, panel juga mendaftar {{ui:Di cloud}}: setiap versi yang disimpan cloud, dengan nomornya, siapa yang menyimpannya, dan catatannya. Panel hanya membaca versi-versi tersebut. CadCraft belum mengirim simpanan dari dirinya sendiri ke cloud, jadi ini adalah versi yang disimpan dari perangkat lain dan web. Masuk kembali di Studio jika ia menyatakan bahwa sesi masuk sudah habis.

Gambar yang belum Anda simpan belum memiliki salinan: simpan dulu.

## Buka atau pulihkan versi

- {{ui:Buka}} menempatkan versi itu di tab tersendiri. Gambar Anda tidak tersentuh.
- {{ui:Pulihkan}} mengganti gambar ini dengan versi itu. Studio akan bertanya terlebih dahulu. Sebelum melakukannya, Studio menyimpan salinan gambar sebagaimana adanya sekarang di Riwayat (ditandai {{ui:Sebelum pemulihan}}), dan tidak ada yang ditulis ke file sampai Anda menyimpan. Pemulihan tidak dapat dibatalkan dengan {{key:Mod+Z}}; gunakan salinan itu.

## Bandingkan

1. Klik {{ui:Bandingkan}} pada sebuah versi. Versi itu dibandingkan dengan {{ui:Gambar seperti sekarang}}; untuk membandingkannya dengan versi lain, pilih versi tersebut di {{ui:Bandingkan dengan}} terlebih dahulu.
2. Baca hasilnya di bawah daftar: berapa objek yang ditambahkan, dihapus, dan diubah, serta daftarnya. Klik sebuah item dalam daftar untuk memindahkan tampilan ke sana.
3. Pada gambar:
   - objek **hijau** ditambahkan,
   - objek **merah** dihapus (hanya ada di versi yang lebih lama),
   - objek **oranye** berubah: bentuk baru berupa garis penuh dan bentuk lama berupa garis putus-putus.
4. {{ui:Tampilkan pada gambar}} menyalakan dan mematikan warna; {{ui:Hapus warna}} menghilangkan hasilnya. Menutup panel juga menghapus warna.

Daftar menyatakan apa yang berubah pada objek yang berubah: teksnya, bahwa ia dipindahkan, bentuknya, layer, warna, jenis garis, atau tebal garisnya. Setiap lembar dibandingkan secara terpisah; warna ditampilkan pada lembar yang sedang terbuka.

:::note
Sebuah gambar tidak memiliki nomor tetap untuk setiap objek, jadi CadCraft mencocokkan objek berdasarkan jenis dan isinya: objek yang sama di kedua sisi tidak berubah; objek dengan jenis dan layer yang sama yang berada dalam jarak ukurannya sendiri dari objek lama adalah objek yang sama, hanya saja berubah; sisanya ditambahkan atau dihapus. Objek yang dipindahkan jauh dari tempat semula akan tampil sebagai dihapus di satu tempat dan ditambahkan di tempat lain. Referensi blok dihitung berdasarkan isi bloknya.
:::

## Kesalahan umum

- **"Belum ada salinan."** Studio menyimpan salinan pada setiap pembukaan dan penyimpanan gambar yang memiliki file di komputer ini. Gambar yang dibuka dari tab peramban, atau yang belum pernah disimpan, tidak memilikinya.
- **Daftar cloud tidak ada.** Daftar ini muncul untuk gambar yang dibuka dari cloud di Studio; file yang dibuka dari disk bukan gambar cloud.
- **Semuanya tampak berubah.** Dua versi yang disimpan oleh program berbeda menulis gambar yang sama dengan cara yang berbeda (nama blok anonim, pembulatan). Bandingkan versi yang disimpan oleh CadCraft.
