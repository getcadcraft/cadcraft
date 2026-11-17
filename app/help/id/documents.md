---
title: Dokumen: check out, revisi, dan rilis
summary: Kendalikan gambar di folder proyek: check out file agar tidak ada yang lain mengubahnya, check in sebagai revisi baru, kirim untuk ditinjau, dan rilis dengan nama penyetuju; riwayat, apa yang memakai apa, daftar material, dan kepala gambar yang menampilkan revisi.
keywords: pengaturan proyek, penyetuju, admin, huruf revisi, ASME, hanya baca, bandingkan revisi, buka salinan, partcraft, bimcraft, documents, DOCUMENTS, DOCS, vault, manajemen dokumen, pdm, check out, check in, checkout, checkin, kunci, revisi, rev, huruf revisi, rilis, dirilis, setujui, persetujuan, tinjau, usang, di mana dipakai, bom, daftar material, kepala gambar, blok revisi, folder proyek
from: ee938722
---

## Yang akan Anda buat

Folder proyek tempat setiap gambar memiliki revisi (A.1, A.2 … lalu A, B …) dan status (Sedang dikerjakan, Untuk ditinjau, Dirilis, Usang), tempat hanya satu orang pada satu waktu yang dapat mengubah sebuah file, dan tempat setiap check out, check in, persetujuan, dan check out yang diputus dicatat beserta siapa yang melakukannya dan kapan.

Semuanya disimpan di dalam folder itu sendiri, dalam folder `.ccvault` yang tersembunyi di samping gambar Anda. Folder di drive bersama atau folder yang disinkronkan dapat dipakai oleh seluruh tim. Tidak ada server dan tidak ada yang diunggah.

## Buka Dokumen

Ketik `DOCUMENTS` (atau `DOCS`) lalu tekan {{key:Enter}}. Panel akan terbuka di samping gambar.

Pilih {{ui:Pilih folder proyek}} lalu pilih folder yang berisi gambar proyek. Folder proyek berfungsi di CadCraft Studio dan di peramban yang dapat membuka folder (Chrome, Edge). Di peramban lain, panel akan memberi tahu hal itu.

Pertama kali, ketik nama Anda (nama ini tercantum pada setiap tindakan Anda) dan nama komputer ini. Jika Anda sudah masuk, nama Anda sudah terisi.

## Mulai vault

Folder yang belum menjadi vault menawarkan {{ui:Mulai vault di folder ini}}. Ketik nama proyek. Lalu buka {{ui:File yang belum ada di vault}} dan pilih {{ui:Tambah}} di samping setiap file yang ingin Anda kendalikan. File yang Anda tambahkan dimulai dari revisi **A.1**, Sedang dikerjakan.

## Mengubah gambar

1. Pilih {{ui:Buka}} di samping gambar. Gambar akan terbuka di CadCraft. Jika tidak di-check out atas nama Anda, Anda hanya dapat melihatnya tanpa mengubahnya: {{ui:Simpan}} menolak menimpanya dan memberi tahu alasannya (gunakan {{ui:Simpan sebagai}} untuk menyimpan salinan milik Anda sendiri).
2. Pilih {{ui:Check out}}. Tidak ada orang lain yang dapat melakukan check out sekarang; panel menunjukkan siapa yang memegangnya, di komputer mana, dan sejak kapan.
3. Gambar.
4. Pilih {{ui:Check in}} dan tuliskan apa yang berubah. Gambar yang sedang Anda buka disimpan ke folder proyek dalam formatnya sendiri dan menjadi revisi berikutnya (A.1, lalu A.2). Check in tanpa perubahan mempertahankan revisi.

{{ui:Batalkan check out}} mengembalikan file tanpa membuat revisi baru.

## Tinjau dan rilis

- {{ui:Kirim untuk ditinjau}}: file hanya dapat dibaca selama ditinjau.
- {{ui:Setujui}}: ketik nama penyetuju. A.3 menjadi **A**, Dirilis. File yang sudah dirilis hanya dapat dibaca.
- {{ui:Kembalikan}}: kembali ke Sedang dikerjakan, dengan alasannya.
- {{ui:Revisi baru}} pada file yang sudah dirilis melakukan check out untuk huruf berikutnya: check in pertamanya menjadi **B.1**. {{ui:Batalkan check out}} sebelum itu membiarkannya tetap di A.
- {{ui:Jadikan usang}} menarik kembali file yang sudah dirilis.

Sebuah proyek dapat menyimpan daftar siapa yang boleh menyetujui, dan dapat mewajibkan bahwa penyetuju bukan orang yang melakukan check in file tersebut (lihat Pengaturan proyek di bawah).

## Pengaturan proyek

Buka {{ui:Pengaturan proyek}} di panel:

- **Penyetuju**: satu nama per baris. Jika ada, hanya mereka yang dapat menyetujui rilis.
- **Penyetuju harus orang lain selain penulis**: aturan "empat mata".
- **Admin**: satu nama per baris. Jika ada, hanya mereka yang dapat memutus check out milik orang lain atau mengubah pengaturan ini.
- **Huruf revisi yang dilewati**: {{ui:Gunakan urutan ASME Y14.35}} melewati I, O, Q, S, X dan Z, atau ketik huruf Anda sendiri. Huruf yang sudah diberikan tetap; pilihan ini berlaku untuk revisi berikutnya.
- **Check out dianggap usang setelah**: jumlah hari (secara bawaan 14).

Pilih {{ui:Simpan pengaturan}}. Perubahan dicatat di log beserta siapa yang membuatnya.

## Seseorang meninggalkan file dalam keadaan check out

{{ui:Putus check out}} membebaskan file yang di-check out oleh orang lain (mereka sedang tidak ada, atau komputernya rusak). Anda harus mengetik alasan: alasan itu dicatat di log beserta check out milik siapa yang diputus. Jika proyek memiliki admin, hanya mereka yang dapat melakukannya. Check out yang lebih dari 14 hari ditandai sebagai sudah lama.

## Riwayat, revisi, pemakaian, dipakai oleh

Pilih nama file untuk melihat:

- {{ui:Riwayat}}: setiap kejadian, yang terbaru di atas, beserta siapa, komputer mana, dan kapan.
- {{ui:Revisi}}: setiap revisi yang disimpan. Salinan setiap revisi ada di vault (isi yang sama hanya disimpan sekali). {{ui:Buka salinan}} membuka revisi itu sebagai salinan biasa yang tidak dapat menimpa file di vault. {{ui:Bandingkan dengan}} mencantumkan apa yang ditambahkan, dihapus, dan diubah antara revisi itu dan revisi sebelumnya (atau revisi lain yang Anda pilih), lalu mewarnainya pada gambar.
- {{ui:Memakai}}: gambar yang ditautkan (xref), dokumen yang ditunjuk oleh model IFC, bagian-bagian dari rakitan PartCraft.
- {{ui:Dipakai oleh}}: setiap file di vault yang memakai file ini.

{{ui:Daftar material (CSV)}} menyimpan daftar semua yang dipakai sebuah file, level demi level, dengan kuantitas, revisi, dan statusnya, untuk spreadsheet.

## Blok revisi pada lembar

Dengan gambar yang memiliki layout terbuka, pilih {{ui:Blok revisi}}. Tabel revisi yang sudah dirilis (revisi, tanggal, oleh, disetujui, deskripsi) digambar di pojok kanan atas lembar yang sedang Anda lihat. Saat Anda menyetujui sebuah rilis, tabel itu diperbarui.

## Revisi di kepala gambar

Beri atribut kepala gambar Anda salah satu tag berikut, lalu pilih {{ui:Isi kepala gambar}} pada gambar yang terbuka:

| Tag | Diisi dengan |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revisi (B, atau B.2 selama sedang dikerjakan) |
| `VAULT.STATE` | status (Dirilis …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | tanggal revisi terbaru |
| `VAULT.APPROVER`, `APPROVED_BY` | siapa yang menyetujui rilis terbaru |

## PartCraft dan BimCraft

PartCraft dan BimCraft memiliki panel Dokumen yang sama untuk file mereka sendiri: bagian dan rakitan di PartCraft, model IFC di BimCraft. Check in menyimpan model yang sedang terbuka ke folder proyek, dan rakitan menampilkan bagian mana yang dipakainya serta daftar materialnya.

## Perlu diketahui

- Dua orang pada folder bersama yang sama tidak dapat keduanya melakukan check out pada file yang sama: check out adalah file yang tidak dapat dibuat dua kali oleh sistem. Di peramban, dan di Studio yang shell-nya lebih lama dari fitur ini, pengamanannya hanya sekuat yang diizinkan folder: dua check out dalam selang waktu yang sangat singkat bisa keduanya berhasil. Panel menyebutkan mana yang berlaku.
- Jangan mengedit atau menghapus folder `.ccvault` secara manual. Log di dalamnya adalah catatannya; vault membangun ulang daftarnya dari log itu jika diperlukan.
- Perubahan pada file di folder tanpa check out ditampilkan sebagai {{ui:Berubah di folder tanpa check out}}.
