---
title: Dokumen dan revisi (vault)
summary: Panduan langkah demi langkah dari satu pekerjaan nyata: meletakkan folder proyek di bawah kendali, check out sebuah gambar, mengubahnya, check in dengan catatan, mengirim untuk ditinjau, menyetujui dan merilisnya, melihat riwayat dan apa yang memakainya, apa yang dilihat orang kedua saat file dikunci, dan cara kerjanya dengan folder cloud.
keywords: vault, documents, dokumen, walkthrough, panduan, tutorial, check out, check in, revision, revisi, release, rilis, approve, setujui, lock, kunci, history, riwayat, where used, dipakai oleh, cloud folder, folder cloud, project folder, folder proyek, document management, manajemen dokumen, pdm, two people, dua orang, shared folder, folder bersama
from: 3829528d
---

## Yang akan Anda lakukan

Anda adalah Ana, bekerja pada Klinik Riverside bersama rekan, Ben. Gambar proyek berada di satu folder yang kalian berdua jangkau (drive bersama, folder yang disinkronkan, atau folder cloud). Pada akhirnya, satu file telah berpindah dari salinan pertamanya menjadi revisi yang dirilis **A**, telah diubah lagi sebagai **B.1**, Anda telah melihat siapa melakukan apa, dan Anda telah melihat apa yang dilihat Ben saat Anda memegang file itu.

Semuanya disimpan dalam folder `.ccvault` tersembunyi di sebelah file Anda: tidak ada server, tidak ada yang diunggah (folder cloud adalah pengecualian, lihat langkah terakhir). Untuk setiap tombol dan aturan di satu tempat, lihat topik *Dokumen: check out, revisi, dan rilis* di tempat aplikasi Anda memilikinya.

## 1. Atur folder proyek

1. Pilih {{ui:Dokumen…}} di menu **Lainnya** pada tab **Tampilan**, atau ketik `DOCUMENTS` (atau `DOCS`) lalu tekan {{key:Enter}}.
2. Pilih {{ui:Pilih folder proyek}} dan pilih folder yang berisi gambar proyek. (Folder proyek bekerja di Studio dan di peramban yang dapat membuka folder, seperti Chrome dan Edge. Di peramban lain, panel menyatakannya.)
3. Pilih {{ui:Ubah}} di samping **Anda:** dan ketik nama Anda, `Ana` (jika diminta, juga nama komputer ini). Panel sekarang berbunyi *Anda: Ana di* dan nama komputer Anda. Nama Anda tercantum pada setiap hal yang Anda lakukan.
4. Pilih {{ui:Mulai vault di folder ini}} dan ketik nama proyeknya, `Klinik Riverside`. Panel berbunyi *Vault dimulai untuk Klinik Riverside.*

## 2. Letakkan file di bawah kendali

1. Buka **File yang tidak ada di vault** dan pilih {{ui:Tambah}} di samping `plans/A-101.dxf`.
2. File itu muncul di bawah **File di vault** pada revisi **A.1**, status **Sedang dikerjakan**. A.1 adalah salinan pertamanya; vault menyimpan salinan setiap revisi.

## 3. Check out, ubah, check in

1. Pilih {{ui:Buka}} di samping `plans/A-101.dxf`. Gambar terbuka di CadCraft dan panel menutup agar Anda dapat melihatnya. Panel tetap satu perintah jauhnya: `DOCUMENTS`.
2. Buka panel lagi dan pilih {{ui:Check out}}. Barisnya sekarang berbunyi **Di-check out untuk Anda**. Sebuah file kunci telah dibuat di `.ccvault/locks`; tidak ada orang lain yang dapat men-check out file ini sampai Anda melakukan check in.
3. Gambar sesuatu: tambahkan garis, pindahkan dinding. Tidak ada yang Anda lakukan yang dapat disimpan menimpa file vault kecuali gambarnya di-check out untuk Anda; Simpan sebagai selalu bekerja untuk salinan milik Anda sendiri.
4. Buka panel, pilih {{ui:Check in}} dan ketik apa yang berubah (`Memindahkan pintu`). Panel berbunyi *di-check in sebagai A.2*. File di folder proyek sekarang adalah gambar yang Anda buka, dan kuncinya hilang. Melakukan check in tanpa perubahan mempertahankan revisinya.

Jika Anda berubah pikiran, {{ui:Batalkan check out}} mengembalikan file tanpa revisi baru.

## 4. Tinjau dan rilis

1. Pilih {{ui:Kirim untuk ditinjau}}. Statusnya menjadi **Untuk ditinjau** dan file hanya bisa dibaca.
2. Sebelum menyetujui, pilih {{ui:Pengaturan proyek}} dan daftar siapa yang boleh menyetujui (satu nama per baris), misalnya `Ben` dan `Carla`, lalu centang aturan bahwa penyetuju harus orang yang bukan penulis. Pilih {{ui:Simpan pengaturan}}. Sekarang vault sendiri menolak siapa pun selain mereka.
3. Ben (atau Carla) memilih {{ui:Setujui}} dan mengetik nama penyetuju. Statusnya menjadi **Dirilis** dan revisinya menjadi **A**, dengan *disetujui oleh* dan namanya. File yang dirilis hanya bisa dibaca. {{ui:Kembalikan}} akan mengembalikannya ke Sedang dikerjakan, disertai alasan.

Nama penyetuju adalah nama yang diketik di panel; ia adalah catatan siapa yang menandatangani, bukan bukti identitas.

## 5. Revisi baru

1. Pada file yang sudah dirilis, pilih {{ui:Revisi baru}}. Anda menahannya untuk huruf berikutnya.
2. Ubah, lalu pilih {{ui:Check in}}. Revisinya **B.1**, sedang dikerjakan. Rilis dengan cara yang sama dan ia menjadi **B**. {{ui:Batalkan check out}} sebelum check in pertama membiarkannya di **A**.

Huruf revisi berjalan A, B … Z, AA, AB. Jika standar Anda melewatkan beberapa huruf, pengaturan proyek *Gunakan urutan ASME Y14.35* melewati I, O, Q, S, X, dan Z untuk revisi berikutnya.

## 6. Lihat apa yang terjadi

Pilih nama file untuk membuka rinciannya:

- **{{ui:Riwayat}}**: setiap kejadian, yang terbaru lebih dulu, dengan siapa, komputer mana, dan kapan: *Di-check in A.2* oleh Ana, *Dirilis* oleh Ben, dan seterusnya.
- **{{ui:Revisi}}**: tabel revisi. {{ui:Buka salinan}} membuka sebuah revisi sebagai salinan biasa yang tidak dapat menimpa file vault; {{ui:Bandingkan dengan}} mencantumkan apa yang ditambahkan, dihapus, dan diubah dibandingkan dengan revisi sebelumnya, atau revisi lain mana pun.
- **{{ui:Memakai}}**: gambar tertaut (xref) yang ditautkan olehnya.
- **{{ui:Dipakai oleh}}**: Dipakai oleh mencantumkan setiap gambar lain di vault yang menautkan ke file ini: ubah denah dasar dan Anda tahu lembar mana yang harus diperiksa.

## Revisi pada lembar

Dengan gambar terbuka (dan sebuah layout di dalamnya), pilih {{ui:Blok revisi}}: sebuah tabel revisi yang dirilis digambar di pojok kanan atas lembar. Pilih {{ui:Isi kepala gambar}} untuk mengisi atribut kepala gambar yang diberi tag `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE`, atau `APPROVED_BY` dengan revisi, status, tanggal, dan penyetuju file. Saat Anda menyetujui rilis berikutnya, blok revisi diperbarui.

## 7. Apa yang dilihat Ben saat Anda memegang file

Sekarang check out file itu lagi, dan minta Ben membuka folder proyek yang sama di komputernya dan membuka panel. Pada barisnya ia melihat **Di-check out oleh Ana di** komputer Anda **sejak** waktunya, dan tidak ada tombol {{ui:Check out}}. Jika ia tetap mencoba, vault menolak: kuncinya adalah file yang tidak akan dibuat dua kali oleh sistem, sehingga dua orang tidak dapat sama-sama memegang file, bahkan dalam sepersekian detik yang sama, saat folder berada di disk di Studio. (Di peramban, folder hanya memungkinkan upaya terbaik, dan panel menyatakannya di bawah **Folder**.)

Jika Ana sedang pergi dan Ben membutuhkan file, {{ui:Putus check out}} membebaskannya. Ia harus mengetik alasan; alasan itu masuk ke log bersama siapa pemilik check out tersebut. Jika proyek mencantumkan admin, hanya mereka yang bisa. Check out yang lebih lama dari batas usang (14 hari secara default) ditandai *lama sekali*. Setelah pemutusan, check in terlambat Ana ditolak, sehingga kalian berdua tidak dapat saling menimpa.

## 8. Folder cloud

Folder cloud adalah folder proyek yang disimpan di penyimpanan cloud tim Anda, sehingga tim tidak memerlukan drive bersama. Di Studio, saat masuk ke akun CadCraft Anda, panel menampilkan {{ui:Buka folder cloud}} di samping {{ui:Pilih folder proyek}}. Pilih itu dan pilih folder, yang tercantum sebagai workspace / folder. Pemilik workspace membuat folder lebih dulu, dan penyimpanan cloud tim harus berlaku. Semua di atas bekerja dengan cara yang sama; server yang membuat kuncinya, dan kunci itu ketat di antara orang. Jika Anda belum masuk, panel meminta Anda masuk. Di tab peramban biasa, tombol cloud tidak ditawarkan; gunakan Studio.

## Coba

Lakukan delapan langkah di atas dengan salinan file nyata. Untuk langkah dua orang, Anda memerlukan orang lain, atau dua jendela dengan dua nama. Jika Anda mencobanya dengan folder bersama yang nyata, halaman Pengujian komunitas mencantumkan pemeriksaan yang menanyakan persis hal ini, dan menerima hasilnya.
