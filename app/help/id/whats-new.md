---
title: Yang baru di 0.9
summary: Hatch yang mengikuti batasnya, grup layer, lantai bertumpuk, dinding pintar 2D dengan pintu dan jendela, gaya teks dan editor teks berformat, baris perintah mengambang, snap grid, sepuluh cara menggambar busur, dan panel Dokumen.
keywords: yang baru, 0.9, catatan rilis, changelog, hatch, hatch asosiatif, hatchedit, berkas pat, berkas pola, grup layer, laygroup, lantai, lantai bertumpuk, floorlayers, dinding pintar, dinding, pintu, jendela, perkakas dinding, gaya teks, gaya, editor mtext, teks paragraf, format, baris perintah mengambang, baris perintah, area atas, ringkas, snap ke grid, grid snap, f9, busur, panel dokumen, check out, baja inggris, draw.io, teks thai, dxf r12, 0.8, 0.8.1, versi, fitur baru, autocomplete, ghost, tab, sketchfix, photosketch, autosheet, detail, gridmove, autodim, tag, redline, merge, git, fossil, akses, gambar tanpa penglihatan, batas, bearing, aunits, shx, diagram, ole, riwayat, bandingkan, dalam kata, properti, kaki dan inci, stretch, bahasa, perangkat input, masalah, live, asisten
from: 8b6dea0b
---

Inilah yang berubah di CadCraft 0.9, dibandingkan dengan 0.8.1. CadCraft adalah aplikasi gambar 2D dan 3D dari CadCraft Studio 0.9 dan kedelapan aplikasinya. 0.9 menyelesaikan penggambaran denah, menambahkan gaya teks dan editor teks sungguhan, serta memberi lebih banyak ruang di layar.

## Baru

### Penggambaran denah

- **Hatch yang mengikuti batasnya.** {{cmd:HATCH}} terhubung dengan batas yang membatasinya. Pindahkan, putar, atau skalakan batasnya, dan hatch serta polanya ikut; bentuk ulang batasnya, dan hatch dihitung ulang. {{cmd:HATCHEDIT}} (`HE`) mengubah hatch setelahnya dan membuat atau mengakhiri tautan. Lihat [Hatch dan area isian](topic:hatch).
- **Berkas pola hatch.** Pada pertanyaan {{cmd:HATCH}} "Tentukan titik internal", ketik `F` (Berkas pola), lalu pilih berkas `.pat`. Hanya berkas yang ditulis dengan format biasa yang sudah dicoba.
- **Grup layer.** Di {{ui:Alat}} pada panel {{ui:Layer}}: {{ui:Grup baru}}, {{ui:Tambahkan grup siap pakai}}, {{ui:Kelompokkan menurut nama}}, dan {{ui:Cari layer}}; atau ketik {{cmd:LAYGROUP}} (`LG`). Lihat [Atur gambar dengan layer](topic:layers#group-layers).
- **Lantai bertumpuk.** {{cmd:FLOORS}} (`FLR`), atau {{ui:Lantai…}} di menu {{ui:Lainnya}} pada grup {{ui:Tampilan}}. Viewport pada lembar dapat menampilkan satu lantai di bawah {{ui:Lantai yang ditampilkan}} di Properti. {{cmd:FLOORLAYERS}} mengubah lantai menjadi layer untuk berkas yang akan dikirim ke orang lain. Lihat [Susun lantai dalam satu gambar](topic:floors).
- **Dinding pintar 2D, pintu, dan jendela.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`), dan {{cmd:DELOPENING}}. Sudut, sambungan T, dan persilangan dihitung untuk Anda. Dinding menyimpan catatan tentang bagaimana mereka tersambung, dan Properti mendapat Jangan sambungkan di awal / di akhir, Garis lokasi, serta Panjang yang dapat disunting. Lihat [Gambar dinding pintar, pintu, dan jendela dalam 2D](topic:walls-2d).
- **Perkakas dinding pada dinding denah.** Ketik {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}}, dan lainnya. Perkakas ini belum memiliki tombol bilah alat. Lihat [Bentuk, potongan, offset, dan kunci untuk dinding 2D](topic:wall-tools-2d).

### Teks

- **Gaya teks.** {{cmd:STYLE}} (`ST`), atau {{ui:Gaya teks}} di bilah {{ui:Gambar}}: gaya bernama dengan font, tinggi, faktor lebar, dan kemiringan. Lihat [Atur font dan ukuran teks dengan gaya teks](topic:text-styles).
- **Editor teks paragraf berformat.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}}, atau klik ganda pada teks membuka kotak dengan font, ukuran, tebal, miring, garis bawah, coret, warna, perataan, serta tanda derajat, plus-minus, dan diameter, ditambah {{ui:OK}} dan {{ui:Batal}}. Lihat [Format teks paragraf](topic:format-paragraph-text).
- **Diagram dari XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) juga membaca XML draw.io yang ditempel. Lihat [Gambar diagram dari teks](topic:text-to-diagram).
- **Teks Thai pada cetakan PDF.** Sebelumnya tercetak sebagai tanda tanya.

### Ruang lebih luas dan alat bantu gambar

- **Baris perintah mengambang yang lebih tipis dan area atas yang ringkas.** Seret gagang baris perintah untuk mengambangkannya, seret tepi atasnya untuk lebih sedikit baris, dan {{key:F2}} membuka riwayat. {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Baris perintah}} dan pilihan area atas memiliki pengaturan yang sama. Lihat [Pengaturan](topic:settings#command-line).
- **Menu snap objek.** Klik kanan {{ui:Snap}} di bilah status, atau ketik {{cmd:OSNAP}}.
- **Snap ke grid.** Tombol {{ui:Snap grid}} di bilah status, atau {{key:F9}}: titik yang dipilih berpindah ke titik grid terdekat bila tidak ada snap objek yang mengambil titik itu.
- **Busur dalam sepuluh cara, dan Lanjutkan.** {{ui:Busur}} di bilah {{ui:Gambar}} atau {{cmd:ARC}}: 3 titik, keluarga Titik awal/Pusat/Akhir, dan keluarga Pusat/Titik awal/Akhir, serta Lanjutkan (tekan {{key:Enter}} di titik awal) dari garis, busur, atau polyline terakhir.
- **Panel Dokumen.** {{cmd:DOCUMENTS}} (`DOCS`), atau {{ui:Dokumen…}} di menu {{ui:Lainnya}} pada grup {{ui:Tampilan}}: revisi, status, dan check-out untuk setiap gambar dalam folder proyek. Panel dibuka sebagai dialog di tengah. Lihat [Dokumen](topic:documents).

### Berkas

- **Ukuran baja Inggris.** 976 penampang di panel Standar, diketik seperti pada gambar (misalnya `305x165x40 UB`).
- **Paket Afrika Selatan** (praktik gambar dan peraturan bangunan) sebagai paket add-on Peraturan bangunan. Angkanya belum diverifikasi.
- **Add-on untuk CadCraft,** ditambahkan saat diminta dan nonaktif secara default: desain pencahayaan interior, desain chip (HDL ke layout), ukiran router, simulasi sirkuit, sproket rantai roller, dan paket negara Peraturan bangunan.

## Diperbaiki

- Memindahkan, memutar, atau menskalakan hatch meninggalkan polanya.
- {{cmd:GRIDMOVE}} membawa seluruh dinding denah yang hanya dimulai di garis grid. Dinding kini dinilai menurut ujungnya.
- Grid hanya tampak di dalam batas gambar meskipun batas dimatikan.
- Daftar blok di panel samping dapat digulir, dan nama yang bukan blok menampilkan daftar blok yang diawali dengannya ("Maksud Anda?").
- Berkas DXF R12 yang ditolak AutoCAD ("Unknown group 1001 for table") kini dapat dibuka di sana.
- Berkas yang sangat besar (sekitar 70.000 entitas ke atas) gagal dibuka dengan "Maximum call stack size exceeded".
- Berkas DWG dari AutoCAD 2018 ke atas dengan versi pemeliharaan tinggi gagal dibuka dengan "bad BITLONG code 11".
- Di kotak teks paragraf, ukuran baru yang diketik untuk bagian yang dipilih mempertahankan pilihannya.

## Di setiap aplikasi

Tooltip Bootstrap pada setiap kontrol yang memiliki petunjuk, tips awal yang dapat Anda tutup, deretan tab yang dapat digulir ketika tidak muat, dan judul tab peramban yang mengikuti gambar yang terbuka (`<drawing> - CadCraft | CadCraft`). {{ui:Pengaturan}} › {{ui:Tata letak}} kini berupa menu tarik-turun berisi pilihan dua baris. Daftar bahasa di {{ui:Pengaturan}} lebih panjang daripada di 0.8. Sunting bersama Live, pustaka koleksi, serta satuan berat dan suhu dijelaskan dalam catatan Studio.

## Batasan

- Teks paragraf tidak memiliki daftar berpoin atau bernomor, penggaris tab, atau perataan rata kiri-kanan. PDF yang dicetak menyusun teks dalam Helvetica.
- Dinding denah berbentuk lurus, sehingga busur digambar sebagai dinding pendek. Pemeriksaan oleh komunitas terhadap perkakas dinding masih menunggu.
- Layer grup tidak ditulis dalam format AutoCAD sendiri, sehingga AutoCAD menampilkan daftar datar. Program lain menampilkan semua lantai bersama, kecuali Anda menjalankan {{cmd:FLOORLAYERS}}.
- Panel Dokumen belum dicoba oleh dua orang pada folder bersama sungguhan. Ukiran router belum dijalankan pada mesin sungguhan sama sekali. Perkiraan pencahayaan diperiksa terhadap jejak foton, bukan program lain. Add-on teknik adalah alat bantu pemeriksaan, bukan pengganti tinjauan seorang insinyur.
- Bahasa selain Inggris adalah draf mesin, dan sebagian kata baru hanya tersedia dalam bahasa Inggris.

## Sebelumnya: 0.8 dan 0.8.1

Inilah yang berubah di CadCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. 0.8 (1 November 2026) menambahkan alat bantu gambar yang bekerja dari gambar Anda sendiri, dengan aturan di komputer Anda dan tanpa model. 0.8.1 (2 November 2026) memperbaiki bug yang dilaporkan setelahnya.

### Baru

**Gambar yang melanjutkan pemikiran Anda**

- **Hantu menunjukkan langkah berikutnya.** Tanpa perintah yang berjalan, hantu abu-abu bergaris putus-putus menunjukkan apa yang dikatakan pola gambar Anda tentang langkah berikutnya: tiang berikutnya dengan jarak yang sama, langkah berikutnya dari tangga, atau dinding ruangan yang hilang. Tekan {{key:Tab}} untuk menggambarnya sebagai satu langkah urungkan, atau {{key:Esc}} untuk menutupnya. Ia hanya melihat objek terbaru, sehingga tetap lancar pada gambar besar. Matikan di {{ui:Pengaturan}} › {{ui:CadCraft}}, atau dengan {{cmd:AUTOCOMPLETE}} `Off`.
- **Titik berikutnya saat Anda menggambar garis.** Di tengah {{cmd:LINE}} atau {{cmd:PLINE}}, hantu adalah titik berikutnya: langkah berikutnya dari tangga, sudut keempat persegi panjang, atau titik yang menutupnya. Dekatkan kursor dan tekan {{key:Tab}}, seolah-olah Anda mengklik di sana.
- **Sketsa pena menjadi geometri presisi.** {{cmd:SKETCHFIX}}: gambar goresan kasar dengan pena, mouse, atau jari, dan setiap goresan menjadi garis, lingkaran, busur, persegi panjang, atau polyline yang bersih, di-snap ke apa yang sudah digambar. Lihat [Sketsa dengan pena dan dapatkan geometri presisi](topic:sketch-with-a-pen).
- **Foto sketsa menjadi gambar.** {{cmd:PHOTOSKETCH}} (`PSK`) menemukan kertas dalam foto, meluruskan perspektif, menerapkan ukuran kertas dan skala yang Anda berikan, dan menelusuri garis pena ke layer untuk setiap warna pena. Tulisan tangan tidak ditelusuri.
- **Beri dimensi menurut aturan.** {{cmd:AUTODIM}} (`ADIM`) membuat rangkaian dimensi di sepanjang sisi yang Anda pilih, ukuran keseluruhan, lebar bukaan, diameter lubang, dan, dengan `Grid`, jarak grid. Ia tidak pernah mengulang dimensi yang sudah ada.
- **Pindahkan garis grid dan rangkaiannya ikut.** {{cmd:GRIDMOVE}} (`GM`): dinding yang berakhir pada garis grid ikut meregang, dinding di sepanjangnya, kolom, gelembung dan tag-nya ikut bergerak, dan dimensi di atasnya mengukur jarak yang baru. Satu langkah urungkan.

**Lembar, detail, dan tag**

- **Lembar yang menata dirinya sendiri.** {{cmd:AUTOSHEET}} mengambil tampilan bernama Anda (atau bagian-bagian model yang terpisah), memilih ukuran kertas dan skala standar, dan menempatkan tampilan pada lembar baru dengan kepala gambar dan keterangan nama-dan-skala. Semuanya tetap dapat disunting. Lihat [Atur lembar untuk saya](topic:lay-out-sheets-for-me).
- **Detail perusahaan Anda, ditawarkan saat Anda menggambar.** {{cmd:DETAILS}} (`DET`) menyimpan blok detail Anda sendiri. Bila yang Anda pilih cocok dengan salah satunya menurut kata-kata pada nama layer, nama blok, dan catatan, bilah status memberi tahu Anda; pilih dan tempatkan. {{cmd:DETAILS}} › Share menaruh daftar Anda di folder Dokumen dan membawa apa yang ditambahkan tim Anda. Pengaturan mematikan tawaran ini.
- **Tag pada blok.** {{cmd:TAGS}} mendefinisikan tag (jenisnya, nilai yang boleh diambilnya, blok yang diterapkannya), mengatur tag pada referensi blok yang Anda pilih, dan mendaftarnya sebagai jadwal yang dapat disimpan sebagai CSV. Definisinya disimpan dalam DWG. Lihat [Tag](topic:tags).
- **Batas gambar.** {{cmd:LIMITS}} mengatur persegi panjang untuk gambar: grid mengisinya dan zoom Batas menampilkannya. Batas tampil sebagai garis tepi dan disimpan dalam DWG dan DXF, bersama batas kertas. Lihat [Atur batas gambar](topic:drawing-limits).

**Bekerja dengan orang lain dan program lain**

- **Ubah markup menjadi revisi.** {{cmd:REDLINE}} membaca paket yang ditulis MarkupCraft dan mendaftar setiap perubahan. Terima atau tolak masing-masing dengan catatan; yang diterima mendapat awan revisi dan log revisi dalam satu langkah urungkan, dan Anda menyimpan berkas jawaban yang menutup markup di MarkupCraft. Lihat [Ubah markup menjadi revisi](topic:redline-to-revision).
- **Gambar yang dapat digabung git dan Fossil.** Dengan {{ui:File ramah penggabungan}} aktif di {{ui:Pengaturan}} › {{ui:CadCraft}}, setiap objek mendapat kunci yang tidak pernah berubah (berkas sekitar 10 persen lebih besar). `cadcraft merge base ours theirs` kemudian menggabungkan dua suntingan orang atas satu objek DWG atau DXF secara objek demi objek, dan hanya melaporkan tempat dua orang mengubah hal yang sama. Lihat [Gabungkan dua suntingan orang atas satu gambar](topic:merge-drawings).
- **Apa yang berubah, dalam kata-kata.** Dalam {{ui:Riwayat}}, Bandingkan memberi daftar polos: di mana hal-hal berubah, seberapa besar tempatnya, apa yang ditambahkan, dihapus, atau diubah, dan teks yang disunting. Lihat [Katakan dengan kata-kata apa yang berubah](topic:changes-in-words).
- **Bearing dan sudut.** Ketik arah sebagai bearing juru ukur seperti N45°23'30"E, atau dalam derajat, menit, dan detik, di mana pun sudut diminta; AUNITS mengatur cara sudut ditampilkan. Lihat [Ketik dan tampilkan bearing dan sudut](topic:bearings-and-angles).
- **Font SHX Anda sendiri.** Berikan CadCraft folder berisi font SHX, dan gaya teks yang menyebut font itu akan digambar dengannya, di layar maupun dalam cetakan. Lihat [Gambar teks dalam font SHX Anda sendiri](topic:shx-fonts).
- **Diagram dari teks.** {{cmd:DIAGRAM}} membaca diagram alur Mermaid, diagram komponen PlantUML, D2, atau daftar dari-ke, lalu menggambar blok dan konektor yang dapat Anda sunting. Lihat [Gambar diagram dari teks](topic:text-to-diagram).
- **Objek OLE dalam DWG.** {{cmd:OLELIST}} mendaftar objek OLE yang dibawa DWG dan tidak dapat ditempatkan sendiri oleh CadCraft, lalu menempatkan salinan gambarnya di tempat yang Anda tentukan. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).
- **Kalkulasi Anda tetap bersama gambar.** Lembar kalkulasi dan alasan desain disimpan dalam DWG bersama tabel kelas.

**Menggambar tanpa penglihatan**

- Nyalakan {{ui:Menggambar tanpa penglihatan}} di {{ui:Pengaturan}} (atau ketik {{cmd:ACCESS}} dan jawab `On`). CadCraft membacakan setiap perintah dan hasil melalui pembaca layar Anda, mendeskripsikan gambar dan apa yang ada dekat kursor, membiarkan Anda memindahkan kursor dan memilih titik dengan keyboard, serta memainkan suara untuk setiap snap dan grip. Di mana peramban Anda dapat mengenali ucapan di komputer Anda, perintah dapat diucapkan. Lihat [Gambar tanpa penglihatan](topic:draft-without-sight).

**Di setiap aplikasi**

- **Bahasa.** 54 bahasa; sepuluh baru (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek). Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya.
- **Perangkat input.** Kontrol trackpad, pena, mouse 3D, pengontrol game, dan MIDI.
- **Baris bilah alat dan grid properti.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan Bungkus, 2 baris, atau 1 baris di aplikasi lain. CadCraft menyimpan pengaturannya sendiri di {{ui:Pengaturan}} › {{ui:CadCraft}} (lihat [Baris bilah alat](topic:settings#toolbar-rows)). Grid properti bersama ada di tiga aplikasi lain, bukan di CadCraft.
- **Masalah, Live, dan add-on.** Panel Masalah bersama yang memberi peringatan di setiap aplikasi, tampilan Live tentang siapa berada di mana di CadCraft Studio (lihat [Bekerja pada satu gambar bersama](topic:work-live)), dan daftar add-on.
- **Hubungkan AI Anda.** Satu koneksi dari CadCraft Studio ke kedelapan aplikasi, dengan tingkat baca saja, sarankan, atau sunting per aplikasi, dan log dalam kata-kata biasa tentang apa yang dilakukan asisten. CadCraft tidak memiliki AI sendiri, dan Tanya di setiap aplikasi menggunakan AI yang Anda hubungkan.

### Diperbaiki di 0.8.1

- **Properti menampilkan 150 alih-alih 12'-6"** pada gambar kaki-dan-inci. Kolom yang dibaca aplikasi sendiri kembali mempertahankan teksnya.
- **Berkas DWG yang bagian kelasnya dibaca sebagai tipe yang salah** (GitHub cadcraft#5) kini terbuka dengan benar.
- **Kursor silang tidak lagi tampak di belakang pop-up.**
- **Studio dan edisi kemasan dapat berganti bahasa saat berjalan.** Sebelumnya hanya bahasa Inggris. Belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.
- **Tablet dalam orientasi potret** memberikan tinggi grid yang tersisa ke kanvas, dan mode lembar mulai pada 760 px atau kurang.
- **STRETCH dengan jendela silang, dan LIMITS,** dilaporkan pada Studio 0.8.0 dan sudah benar di build web 0.8; pemasang milik pelapor lebih lama. Studio 0.8.1 membawanya.

### Belum ada di versi ini

- **0.8 dan 0.8.1 belum ditandatangani kode.** Windows mungkin memberi peringatan (pilih {{ui:Info selengkapnya}}, lalu {{ui:Tetap jalankan}}); di Mac, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. Build toko ditunda, dan build iPad serta iPhone tidak dibangun ulang untuk 0.8.1.
- **Sketsa pena dan foto sketsa** baru dicoba pada foto buatan dan mouse, belum dengan pena sungguhan, layar sentuh, atau sketsa tangan di kertas.
- **Menggambar tanpa penglihatan** telah diuji dengan pemeriksaan otomatis, belum dengan pembaca layar atau penguji tunanetra.
- **Berbagi detail** belum diperiksa oleh dua orang, dan folder Team Cloud Plan sebagai folder Dokumen belum dibangun.
- **Penggabungan** bekerja untuk berkas DWG dan DXF CadCraft; untuk berkas aplikasi lain belum dibangun.
- **Urungkan lintas jendela:** CadCraft melaporkan setiap langkah yang selesai, tetapi Studio belum memiliki satu Urungkan untuk semua aplikasi; setiap aplikasi mengurungkan langkahnya sendiri.
- **Objek OLE DWG** dipertahankan tetapi tidak digambar di tempatnya.
- **Membaca tabel gaya plot (berkas CTB)** dari program lain sudah dibangun, tetapi belum diperiksa terhadap berkas dari program lain.
- **Hubungkan AI Anda:** hubungkan satu klik di Studio, konektor terhosting untuk AI peramban, kunci API Anda sendiri di dalam Studio, dan paket MCP yang dipublikasikan tidak dijanjikan dalam rilis ini.

Untuk versi sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
