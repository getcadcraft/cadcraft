---
title: Yang baru di 0.8 dan 0.8.1
summary: Bayangan yang menyelesaikan gambar Anda, sketsa pena dan foto sketsa yang diubah menjadi geometri, lembar yang menata dirinya sendiri, detail yang ditawarkan saat Anda menggambar, GRIDMOVE dan AUTODIM, tag, file ramah penggabungan, markup yang diubah menjadi revisi, menggambar tanpa penglihatan, batas gambar, bearing, font SHX, diagram dari teks, dan perbaikan di 0.8.1.
keywords: yang baru, what's new, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, autocomplete, bayangan, tab, sketchfix, photosketch, autosheet, detail, gridmove, autodim, tag, redline, merge, git, fossil, akses, draf tanpa penglihatan, pembaca layar, batas, bearing, aunits, shx, diagram, ole, riwayat, bandingkan, dalam kata-kata, properti, kaki dan inci, stretch, bahasa, perangkat input, masalah, live, asisten
from: 9dd82db5
---

Ini yang berubah di CadCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. 0.8 (1 November 2026) menambahkan alat bantu gambar yang bekerja dari gambar Anda sendiri, dengan aturan di komputer Anda dan tanpa model, dan 0.8.1 (2 November 2026) memperbaiki bug yang dilaporkan setelah itu.

## Baru

### Gambar yang melengkapi pikiran Anda

- **Bayangan menunjukkan apa yang datang berikutnya.** Tanpa perintah yang berjalan, bayangan abu-abu putus-putus menunjukkan apa yang dikatakan pola gambar Anda sendiri sebagai berikutnya: tiang berikutnya dengan jarak yang sama, langkah berikutnya dari tangga, dinding yang hilang dari sebuah ruangan. Tekan {{key:Tab}} untuk menggambarnya sebagai satu langkah urungkan, atau {{key:Esc}} untuk menutupnya. Bayangan hanya melihat objek terbaru, sehingga tetap lancar pada gambar besar. Matikan di {{ui:Pengaturan}} › {{ui:CadCraft}} atau dengan {{cmd:AUTOCOMPLETE}} `Off`.
- **Titik berikutnya saat Anda menggambar garis.** Di tengah {{cmd:LINE}} atau {{cmd:PLINE}}, bayangan adalah titik berikutnya: langkah berikutnya dari tangga, sudut keempat dari persegi panjang, atau titik yang menutupnya. Dekatkan kursor ke sana dan tekan {{key:Tab}}, seolah-olah Anda mengklik di situ.
- **Sketsa pena menjadi geometri presisi.** {{cmd:SKETCHFIX}}: gambar goresan kasar dengan pena, mouse, atau jari dan setiap goresan menjadi garis, lingkaran, busur, persegi panjang, atau polyline yang bersih, di-snap ke apa yang sudah digambar. Lihat [Sketsa dengan pena dan dapatkan geometri presisi](topic:sketch-with-a-pen).
- **Foto sketsa menjadi gambar.** {{cmd:PHOTOSKETCH}} (`PSK`) menemukan kertas dalam foto, meluruskan perspektif, menerapkan ukuran kertas dan skala yang Anda berikan, dan menelusuri garis pena ke sebuah layer untuk setiap warna pena. Huruf tidak ditelusuri.
- **Beri dimensi menurut aturan.** {{cmd:AUTODIM}} (`ADIM`) membuat rantai dimensi di sepanjang sisi yang Anda pilih, ukuran keseluruhan, lebar bukaan, diameter lubang, dan dengan `Grid`, jarak grid. Tidak pernah mengulangi dimensi yang sudah ada.
- **Pindahkan garis grid dan rangkaiannya ikut bergerak.** {{cmd:GRIDMOVE}} (`GM`): dinding yang berakhir di garis grid meregang mengikutinya, dinding di sepanjangnya, kolom, gelembung dan tag-nya ikut berpindah, dan dimensi di atasnya mengukur jarak yang baru. Satu langkah urungkan.

### Lembar, detail, dan tag

- **Lembar yang menata dirinya sendiri.** {{cmd:AUTOSHEET}} mengambil tampilan bernama Anda (atau bagian-bagian model yang terpisah), memilih ukuran kertas dan skala standar, dan menaruh tampilan pada lembar baru dengan kepala gambar dan keterangan nama-dan-skala. Semuanya tetap dapat disunting. Lihat [Tata lembar untuk saya](topic:lay-out-sheets-for-me).
- **Detail firma Anda, ditawarkan saat Anda menggambar.** {{cmd:DETAILS}} (`DET`) menyimpan blok detail Anda sendiri. Saat yang Anda pilih cocok dengan salah satu berdasarkan kata pada layer, nama blok, dan catatannya, bilah status memberi tahu; pilih dan tempatkan. {{cmd:DETAILS}} › Share menaruh daftar Anda di folder Dokumen dan membawa apa yang telah ditambahkan tim Anda. Pengaturan mematikan tawaran.
- **Tag pada blok.** {{cmd:TAGS}} mendefinisikan tag (jenisnya, nilai yang boleh diambil, blok yang diterapkan), menetapkannya ke referensi blok yang Anda pilih, dan mendaftarkannya sebagai jadwal yang dapat disimpan sebagai CSV. Definisinya disimpan di DWG. Lihat [Tag](topic:tags).
- **Batas gambar.** {{cmd:LIMITS}} menetapkan persegi panjang untuk gambar: grid mengisinya dan zoom All menampilkannya. Batas tampil sebagai garis tepi dan disimpan di DWG dan DXF, bersama batas kertas. Lihat [Atur batas gambar](topic:drawing-limits).

### Bekerja dengan orang lain dan program lain

- **Ubah markup menjadi revisi.** {{cmd:REDLINE}} membaca paket yang ditulis MarkupCraft dan mendaftar setiap perubahan. Terima atau tolak masing-masing dengan catatan; yang diterima mendapat awan revisi dan log revisi dalam satu langkah urungkan, dan Anda menyimpan file jawaban yang menutup markup di MarkupCraft. Lihat [Ubah markup menjadi revisi](topic:redline-to-revision).
- **Gambar yang dapat digabungkan oleh git dan Fossil.** Dengan {{ui:File ramah penggabungan}} aktif di {{ui:Pengaturan}} › {{ui:CadCraft}}, setiap objek mendapat kunci yang tidak pernah berubah (file sekitar 10 persen lebih besar). `cadcraft merge base ours theirs` kemudian menggabungkan dua suntingan orang pada satu objek DWG atau DXF per objek dan hanya melaporkan di mana dua orang mengubah hal yang sama. Lihat [Gabungkan dua suntingan orang pada satu gambar](topic:merge-drawings).
- **Apa yang berubah, dalam kata-kata.** Di Riwayat, Bandingkan memberi daftar sederhana: di mana hal berubah, seberapa besar tempatnya, apa yang ditambahkan, dihapus, atau diubah, dan teks yang disunting. Lihat [Jelaskan dalam kata-kata apa yang berubah](topic:changes-in-words).
- **Bearing dan sudut.** Ketik arah sebagai bearing surveyor seperti N45°23'30"E, atau dalam derajat, menit, dan detik, di mana pun sudut diminta; AUNITS mengatur cara sudut ditampilkan. Lihat [Ketik dan tampilkan bearing dan sudut](topic:bearings-and-angles).
- **Font SHX Anda sendiri.** Berikan CadCraft sebuah folder font SHX, dan gaya teks yang menamainya akan digambar dengan font tersebut, di layar maupun dalam hasil cetak. Lihat [Gambar teks dengan font SHX Anda sendiri](topic:shx-fonts).
- **Diagram dari teks.** {{cmd:DIAGRAM}} membaca diagram alur Mermaid, diagram komponen PlantUML, D2, atau daftar dari-ke, lalu menggambar blok dan konektor yang dapat Anda sunting. Lihat [Gambar diagram dari teks](topic:text-to-diagram).
- **Objek OLE di DWG.** {{cmd:OLELIST}} mendaftar objek OLE yang dibawa DWG dan tidak dapat ditempatkan CadCraft sendiri, lalu menempatkan salinan gambar di tempat yang Anda tentukan. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).
- **Perhitungan Anda tetap bersama gambar.** Lembar kalkulasi dan alasan desain disimpan di DWG bersama tabel kelas.

### Menggambar tanpa penglihatan

- Aktifkan {{ui:Menggambar tanpa penglihatan}} di {{ui:Pengaturan}} (atau ketik {{cmd:ACCESS}} dan jawab `On`). CadCraft membacakan setiap perintah dan hasil lewat pembaca layar Anda, mendeskripsikan gambar dan apa yang ada di dekat kursor, membiarkan Anda memindahkan kursor dan memilih titik dengan keyboard, serta memainkan suara untuk setiap snap dan grip. Jika peramban Anda dapat mengenali ucapan di komputer Anda, perintah dapat diucapkan. Lihat [Menggambar tanpa penglihatan](topic:draft-without-sight).

### Di setiap aplikasi

- **Bahasa.** 54 bahasa; sepuluh baru (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek). Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya.
- **Perangkat input.** Kontrol trackpad, pena, mouse 3D, pengontrol game, dan MIDI.
- **Baris bilah alat dan kisi properti.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan Wrap, 2 baris, atau 1 baris di aplikasi lain. CadCraft menyimpan pengaturannya sendiri di {{ui:Pengaturan}} › {{ui:CadCraft}} (lihat [Baris bilah alat](topic:settings#toolbar-rows)). Kisi properti bersama ada di tiga aplikasi lain, bukan di CadCraft.
- **Masalah, Live, dan add-on.** Panel Masalah bersama yang memperingatkan di setiap aplikasi, tampilan Live tentang siapa berada di mana di CadCraft Studio (lihat [Bekerja pada satu gambar bersama](topic:work-live)), dan daftar add-on.
- **Hubungkan AI Anda.** Satu koneksi dari CadCraft Studio ke kedelapan aplikasi, dengan tingkat hanya baca, saran, atau sunting per aplikasi, dan log dalam kata-kata sederhana tentang apa yang dilakukan asisten. CadCraft tidak memiliki AI sendiri, dan Ask di setiap aplikasi menggunakan AI yang Anda hubungkan.

## Diperbaiki di 0.8.1

- **Properti menampilkan 150 alih-alih 12'-6"** pada gambar feet dan inci. Kolom yang dibaca sendiri oleh aplikasi kembali menampilkan teksnya.
- **File DWG yang bagian kelasnya dibaca sebagai tipe yang salah** (GitHub cadcraft#5) kini terbuka dengan benar.
- **Crosshair tidak lagi tampil di belakang pop-up.**
- **Studio dan edisi paket dapat mengganti bahasa saat dijalankan.** Sebelumnya hanya bahasa Inggris. Belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.
- **Tablet dalam potret** memberikan tinggi grid yang tersisa ke kanvas, dan mode lembar dimulai pada 760 px atau kurang.
- **STRETCH dengan jendela silang, dan LIMITS,** dilaporkan pada Studio 0.8.0, dan sudah benar di build web 0.8; pemasang milik pelapor lebih lama. Studio 0.8.1 membawanya.

## Belum ada di versi ini

- **0.8 dan 0.8.1 belum ditandatangani kode.** Windows mungkin memperingatkan (pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}); di Mac, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. Build toko ditunda, dan build iPad dan iPhone belum dibangun ulang untuk 0.8.1.
- **Sketsa pena dan foto sketsa** baru dicoba pada foto rekaan dan mouse, belum dengan pena asli, layar sentuh, atau sketsa tangan di atas kertas.
- **Menggambar tanpa penglihatan** telah diuji dengan pemeriksaan otomatis, belum dengan pembaca layar atau penguji tunanetra.
- **Berbagi detail** belum melalui pemeriksaan dua orang, dan folder Team Cloud Plan sebagai folder Dokumen belum dibuat.
- **Penggabungan** bekerja untuk file DWG dan DXF CadCraft; untuk file aplikasi lain belum dibuat.
- **Urungkan lintas jendela:** CadCraft melaporkan setiap langkah yang selesai, tetapi Studio belum punya satu Urungkan untuk semua aplikasi; setiap aplikasi mengurungkan langkahnya sendiri.
- **Objek OLE DWG** disimpan tetapi tidak digambar di tempatnya.
- **Membaca tabel gaya plot (file CTB)** dari program lain sudah dibuat tetapi belum diperiksa dengan file dari program lain.
- **Hubungkan AI Anda:** hubungkan sekali klik di Studio, konektor yang dihosting untuk AI peramban, kunci API Anda sendiri di dalam Studio, dan paket MCP yang diterbitkan tidak dijanjikan di rilis ini.

Untuk versi sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
