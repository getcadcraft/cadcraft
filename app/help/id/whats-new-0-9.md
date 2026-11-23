---
title: Yang baru di 0.9 (sebelumnya)
summary: Hatch yang mengikuti batasnya, grup layer, lantai bertumpuk, dinding pintar 2D dengan pintu dan jendela, gaya teks dan editor teks berformat, baris perintah mengambang, snap grid, sepuluh cara menggambar busur, dan panel Dokumen.
keywords: yang baru 0.9, rilis sebelumnya, yang baru, 0.9, catatan rilis, changelog, hatch, hatch asosiatif, hatchedit, file pat, file pola, grup layer, laygroup, lantai, lantai bertumpuk, floorlayers, dinding pintar, dinding, pintu, jendela, alat dinding, gaya teks, style, editor mtext, teks paragraf, format, baris perintah mengambang, baris perintah, area atas, ringkas, snap ke grid, grid snap, f9, busur, panel dokumen, check out, baja inggris, draw.io, teks thai, dxf r12, yang baru, perubahan, 0.8, 0.8.1, versi, fitur baru, autocomplete, hantu, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tag, redline, gabung, git, fossil, access, gambar tanpa penglihatan, pembaca layar, batas, bearing, aunits, shx, diagram, ole, riwayat, bandingkan, dalam kata-kata, properti, kaki dan inci, regangkan, bahasa, perangkat input, masalah, live, asisten
from: 3451e64c
---

Ini yang berubah di CadCraft 0.9, dibandingkan dengan 0.8.1. CadCraft adalah aplikasi gambar 2D dan 3D dari CadCraft Studio 0.9 dan kedelapan aplikasinya. 0.9 menyelesaikan gambar denah, menambahkan gaya teks dan editor teks sungguhan, serta memberi lebih banyak ruang di layar.

## Baru

### Gambar denah

- **Hatch yang mengikuti batasnya.** {{cmd:HATCH}} tertaut ke apa yang membatasinya. Pindahkan, putar, atau skalakan batasnya dan hatch serta polanya ikut; bentuk ulang batasnya dan hatch dihitung ulang. {{cmd:HATCHEDIT}} (`HE`) mengubah hatch setelahnya dan membuat atau mengakhiri tautan. Lihat [Hatch dan area isi](topic:hatch).
- **File pola hatch.** Pada pertanyaan {{cmd:HATCH}} `Pick internal point`, ketik `F` (File pola) dan pilih file `.pat`. Hanya file yang ditulis dengan format yang biasa yang sudah dicoba.
- **Grup layer.** Di {{ui:Alat}} pada panel {{ui:Layer}}: {{ui:Grup baru}}, {{ui:Tambahkan grup siap pakai}}, {{ui:Kelompokkan menurut nama}}, dan {{ui:Cari layer}}; atau ketik {{cmd:LAYGROUP}} (`LG`). Lihat [Mengatur gambar dengan layer](topic:layers#group-layers).
- **Lantai bertumpuk.** {{cmd:FLOORS}} (`FLR`), atau {{ui:Lantai…}} di menu {{ui:Lainnya}} grup {{ui:Tampilan}}. Viewport di lembar dapat menampilkan satu lantai di bawah {{ui:Lantai yang ditampilkan}} di Properti. {{cmd:FLOORLAYERS}} mengubah lantai menjadi layer untuk file yang akan dikirim ke orang lain. Lihat [Menumpuk lantai dalam satu gambar](topic:floors).
- **Dinding pintar 2D, pintu, dan jendela.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`), dan {{cmd:DELOPENING}}. Sudut, sambungan T, dan persilangan dihitung untuk Anda. Dinding menyimpan catatan bagaimana mereka tersambung, dan Properti mendapat Larang sambungan di awal / di akhir, Garis lokasi, dan Panjang yang dapat diedit. Lihat [Gambar dinding, pintu, dan jendela 2D](topic:walls-2d).
- **Alat dinding pada dinding denah.** Ketik {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} dan sisanya. Mereka belum memiliki tombol bilah alat. Lihat [Bentuk dinding, potongan, offset, dan kunci untuk dinding 2D](topic:wall-tools-2d).

### Teks

- **Gaya teks.** {{cmd:STYLE}} (`ST`), atau {{ui:Gaya teks}} di bilah {{ui:Gambar}}: gaya bernama dengan font, tinggi, faktor lebar, dan kemiringan. Lihat [Atur font dan ukuran teks dengan gaya teks](topic:text-styles).
- **Editor teks paragraf berformat.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}}, atau klik dua kali pada teks membuka kotak dengan font, ukuran, tebal, miring, garis bawah, coret, warna, perataan, serta tanda derajat, plus-minus, dan diameter, plus {{ui:OK}} dan {{ui:Batal}}. Lihat [Format teks paragraf](topic:format-paragraph-text).
- **Diagram dari XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) juga membaca XML draw.io yang ditempel. Lihat [Gambar diagram dari teks](topic:text-to-diagram).
- **Teks Thai dalam plot PDF.** Sebelumnya dicetak sebagai tanda tanya.

### Ruang lebih dan alat bantu gambar

- **Baris perintah yang mengambang dan lebih tipis, serta area atas yang ringkas.** Seret gagang baris perintah untuk membuatnya mengambang, seret tepi atasnya untuk lebih sedikit baris, {{key:F2}} membuka riwayat. {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Baris perintah}} dan pilihan area atas memiliki pengaturan yang sama. Lihat [Pengaturan](topic:settings#command-line).
- **Menu snap objek.** Klik kanan {{ui:Snap}} di bilah status, atau ketik {{cmd:OSNAP}}.
- **Snap ke grid.** Tombol {{ui:Grid snap}} di bilah status, atau {{key:F9}}: titik yang dipilih pergi ke titik grid terdekat saat tidak ada snap objek yang mengambil titik itu.
- **Busur dalam sepuluh cara, dan Lanjutkan.** {{ui:Busur}} di bilah {{ui:Gambar}} atau {{cmd:ARC}}: 3 titik, keluarga Awal/Pusat/Akhir, dan keluarga Pusat/Awal/Akhir, serta Lanjutkan (tekan {{key:Enter}} pada titik awal) dari garis, busur, atau polyline terakhir.
- **Panel Dokumen.** {{cmd:DOCUMENTS}} (`DOCS`) atau {{ui:Dokumen…}} di menu {{ui:Lainnya}} grup {{ui:Tampilan}}: revisi, keadaan, dan check-out untuk setiap gambar di folder proyek. Ia terbuka sebagai dialog di tengah. Lihat [Dokumen](topic:documents).

### Berkas

- **Ukuran baja Inggris.** 976 potongan di panel Standar, diketik seperti di gambar (misalnya `305x165x40 UB`).
- **Paket Afrika Selatan** (praktik gambar dan peraturan bangunan) sebagai paket dari add-on Peraturan bangunan. Angkanya belum diverifikasi.
- **Add-on untuk CadCraft,** ditambahkan saat diminta dan mati secara default: desain pencahayaan interior, desain chip (HDL ke tata letak), ukiran router, simulasi sirkuit, sprocket rantai roller, dan paket negara Peraturan bangunan.

## Diperbaiki

- Memindahkan, memutar, atau menskalakan hatch meninggalkan polanya.
- {{cmd:GRIDMOVE}} membawa dinding denah utuh yang hanya mulai di garis grid. Dinding kini dinilai dari ujungnya.
- Grid hanya tampil di dalam batas gambar meskipun batas dimatikan.
- Daftar blok di panel samping dapat digulir, dan nama yang bukan blok mendaftarkan blok yang dimulai dengan nama itu ("Did you mean").
- File DXF R12 yang ditolak AutoCAD ("Unknown group 1001 for table") kini dapat dibuka di sana.
- File yang sangat besar (sekitar 70.000 entitas ke atas) gagal dibuka dengan "Maximum call stack size exceeded".
- File DWG dari AutoCAD 2018 ke atas dengan versi pemeliharaan tinggi gagal dibuka dengan "bad BITLONG code 11".
- Di kotak teks paragraf, ukuran baru yang diketik untuk bagian yang dipilih mempertahankan pilihan.

## Di setiap aplikasi

Tooltip Bootstrap pada setiap kontrol yang memiliki petunjuk, tip awal yang dapat Anda tutup, deret tab yang dapat digulir saat tidak muat, dan judul tab peramban yang mengikuti gambar yang dibuka (`<drawing> - CadCraft | CadCraft`). {{ui:Pengaturan}} › {{ui:Tata letak}} kini berupa daftar tarik-turun dengan pilihan dua baris. Daftar bahasa di {{ui:Pengaturan}} lebih panjang daripada di 0.8. Pengeditan langsung bersama, koleksi Pustaka, dan satuan berat serta suhu dijelaskan di catatan Studio.

## Batasan yang jujur

- Teks paragraf tidak memiliki daftar berpoin atau bernomor, penggaris tab, atau rata kanan-kiri. PDF yang dicetak mengatur teks dalam Helvetica.
- Dinding denah lurus, sehingga busur digambar sebagai dinding pendek. Pemeriksaan alat dinding oleh komunitas masih menunggu.
- Grup layer tidak ditulis dalam format AutoCAD sendiri, sehingga AutoCAD menampilkannya sebagai daftar datar. Program lain menampilkan semua lantai bersama kecuali Anda menjalankan {{cmd:FLOORLAYERS}}.
- Panel Dokumen belum dicoba oleh dua orang pada berbagi nyata. Ukiran router belum dijalankan di mesin nyata mana pun. Estimasi pencahayaan diperiksa terhadap penelusuran foton, bukan program lain. Add-on teknik adalah alat bantu pemeriksaan, bukan pengganti tinjauan insinyur.
- Bahasa selain Inggris adalah draf mesin, dan sebagian kata baru hanya dalam bahasa Inggris.

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di CadCraft 0.8 dan 0.8.1, dibandingkan dengan 0.7. 0.8 (1 November 2026) menambahkan alat bantu gambar yang bekerja dari gambar Anda sendiri, dengan aturan di komputer Anda dan tanpa model, dan 0.8.1 (2 November 2026) memperbaiki bug yang dilaporkan setelahnya.

### Baru

**Gambar yang melengkapi pikiran Anda**

- **Hantu menunjukkan apa yang datang berikutnya.** Saat tidak ada perintah yang berjalan, hantu abu-abu bergaris putus-putus menunjukkan apa yang dikatakan pola gambar Anda sebagai langkah berikutnya: tiang berikutnya dengan jarak yang sama, langkah berikutnya dari tangga, dinding yang hilang dari sebuah ruangan. Tekan {{key:Tab}} untuk menggambarnya sebagai satu langkah urungkan, atau {{key:Esc}} untuk menutupnya. Hanya objek terbaru yang diperiksa, sehingga tetap lancar pada gambar besar. Matikan di {{ui:Pengaturan}} › {{ui:CadCraft}} atau dengan {{cmd:AUTOCOMPLETE}} `Off`.
- **Titik berikutnya saat Anda menggambar garis.** Di tengah {{cmd:LINE}} atau {{cmd:PLINE}} hantunya adalah titik berikutnya: langkah berikutnya dari tangga, sudut keempat dari persegi panjang, atau titik yang menutupnya. Dekatkan kursor dan tekan {{key:Tab}}, seolah Anda mengkliknya di sana.
- **Sketsa pena menjadi geometri presisi.** {{cmd:SKETCHFIX}}: gambar goresan kasar dengan pena, mouse, atau jari dan setiap goresan menjadi garis, lingkaran, busur, persegi panjang, atau polyline yang rapi, dengan siku-siku dan tersambung ke yang lain, di-snap ke yang sudah tergambar. Lihat [Sketsa dengan pena dan dapatkan geometri yang presisi](topic:sketch-with-a-pen).
- **Foto sketsa menjadi gambar.** {{cmd:PHOTOSKETCH}} (`PSK`) menemukan kertas dalam foto, meluruskan perspektif, menerapkan ukuran kertas dan skala yang Anda berikan, dan menelusuri goresan pena ke layer untuk setiap warna pena. Tulisan tidak ditelusuri.
- **Beri dimensi dengan aturan.** {{cmd:AUTODIM}} (`ADIM`) membuat rantai dimensi di sepanjang sisi yang Anda pilih, ukuran keseluruhan, lebar bukaan, diameter lubang, dan, dengan `Grid`, jarak grid. Ia tidak pernah mengulang dimensi yang sudah ada.
- **Pindahkan garis grid dan kumpulannya mengikuti.** {{cmd:GRIDMOVE}} (`GM`): dinding yang berakhir di garis grid meregang bersamanya, dinding di sepanjangnya, kolom, gelembungnya, dan tagnya bergerak, serta dimensi di atasnya mengukur jarak baru. Satu langkah urungkan.

**Lembar, detail, dan tag**

- **Lembar yang menata dirinya sendiri.** {{cmd:AUTOSHEET}} mengambil tampilan bernama Anda (atau bagian model yang terpisah), memilih ukuran kertas dan skala standar, dan menempatkan tampilan di lembar baru dengan blok judul dan keterangan nama-dan-skala. Semuanya tetap dapat diedit. Lihat [Atur lembar untuk saya](topic:lay-out-sheets-for-me).
- **Detail perusahaan Anda, ditawarkan saat Anda menggambar.** {{cmd:DETAILS}} (`DET`) menyimpan blok detail Anda sendiri. Saat yang Anda pilih cocok dengan salah satunya berdasarkan kata pada layer, nama blok, dan catatannya, bilah status menyebutkannya; pilih dan tempatkan. {{cmd:DETAILS}} › Share menaruh daftar Anda di folder Dokumen dan membawa apa yang sudah ditambahkan tim Anda. Pengaturan mematikan tawaran ini.
- **Tag pada blok.** {{cmd:TAGS}} mendefinisikan tag (jenisnya, nilai yang diizinkan, blok yang berlaku baginya), mengaturnya pada referensi blok yang Anda pilih, dan mendaftarkannya sebagai jadwal yang dapat disimpan sebagai CSV. Definisinya disimpan di DWG. Lihat [Tag](topic:tags).
- **Batas gambar.** {{cmd:LIMITS}} mengatur persegi panjang untuk gambar: grid mengisinya dan zoom Semua menampilkannya. Batas tampil sebagai garis luar dan disimpan di DWG dan DXF, bersama batas kertas. Lihat [Atur batas gambar](topic:drawing-limits).

**Bekerja dengan orang lain dan program lain**

- **Ubah markup menjadi revisi.** {{cmd:REDLINE}} membaca paket yang ditulis MarkupCraft dan mendaftarkan setiap perubahan. Terima atau tolak masing-masing dengan catatan; yang diterima mendapat awan revisi dan log revisi dalam satu langkah urungkan, dan Anda menyimpan file jawaban yang menutup markup di MarkupCraft. Lihat [Ubah markup menjadi revisi](topic:redline-to-revision).
- **Gambar yang dapat digabung git dan Fossil.** Dengan {{ui:File ramah penggabungan}} aktif di {{ui:Pengaturan}} › {{ui:CadCraft}}, setiap objek mendapat kunci yang tidak pernah berubah (file sekitar 10 persen lebih besar). `cadcraft merge base ours theirs` lalu menggabungkan dua suntingan orang atas satu objek DWG atau DXF secara objek demi objek dan hanya melaporkan tempat dua orang mengubah hal yang sama. Lihat [Gabungkan dua suntingan orang pada satu gambar](topic:merge-drawings).
- **Apa yang berubah, dalam kata-kata.** Di Riwayat, Bandingkan memberikan daftar biasa: di mana hal berubah, seberapa besar tempat-tempat itu, apa yang ditambahkan, dihapus, atau diubah, dan teks yang disunting. Lihat [Katakan dalam kata-kata apa yang berubah](topic:changes-in-words).
- **Bearing dan sudut.** Ketik arah sebagai bearing surveyor seperti N45°23'30"E, atau dalam derajat, menit, dan detik, di mana pun sudut diminta; AUNITS mengatur cara sudut ditampilkan. Lihat [Ketik dan tampilkan bearing dan sudut](topic:bearings-and-angles).
- **Font SHX Anda sendiri.** Berikan CadCraft folder font SHX, dan gaya teks yang menyebutkannya digambar dengan font itu, di layar dan di plot. Lihat [Gambar teks dengan font SHX Anda sendiri](topic:shx-fonts).
- **Diagram dari teks.** {{cmd:DIAGRAM}} membaca diagram alur Mermaid, diagram komponen PlantUML, D2, atau daftar dari-ke dan menggambar blok serta konektor yang dapat Anda sunting. Lihat [Gambar diagram dari teks](topic:text-to-diagram).
- **Objek OLE dalam DWG.** {{cmd:OLELIST}} mendaftarkan objek OLE yang dibawa DWG dan tidak dapat ditempatkan CadCraft sendiri, dan menempatkan salinan gambarnya di tempat yang Anda sebutkan. Lihat [Gambar](topic:pictures#objects-from-other-programs-ole).
- **Perhitungan Anda tetap bersama gambar.** Lembar hitungan dan alasan desain disimpan di DWG bersama tabel kelas.

**Gambar tanpa penglihatan**

- Aktifkan {{ui:Gambar tanpa penglihatan}} di {{ui:Pengaturan}} (atau ketik {{cmd:ACCESS}} dan jawab `On`). CadCraft mengucapkan setiap perintah dan hasil lewat pembaca layar Anda, mendeskripsikan gambar dan apa yang ada di dekat kursor, membiarkan Anda memindahkan kursor dan memilih titik dengan keyboard, dan memutar bunyi untuk setiap snap dan grip. Jika peramban Anda dapat mengenali ucapan di komputer Anda, perintah dapat diucapkan. Lihat [Gambar tanpa penglihatan](topic:draft-without-sight).

**Di setiap aplikasi**

- **Bahasa.** 54 bahasa; sepuluh baru (Lithuania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek). Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya.
- **Perangkat input.** Trackpad, pena, mouse 3D, pengontrol game, dan kontrol MIDI.
- **Baris bilah alat dan kisi properti.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} menawarkan Bungkus, 2 baris, atau 1 baris di aplikasi lain. CadCraft memiliki pengaturannya sendiri di {{ui:Pengaturan}} › {{ui:CadCraft}} (lihat [Baris bilah alat](topic:settings#toolbar-rows)). Kisi properti bersama ada di tiga aplikasi lain, bukan di CadCraft.
- **Masalah, Live, dan add-on.** Panel Masalah bersama yang memberi peringatan di setiap aplikasi, tampilan Live tentang siapa berada di mana di CadCraft Studio (lihat [Bekerja pada satu gambar bersama](topic:work-live)), dan daftar add-on.
- **Hubungkan AI Anda.** Satu sambungan dari CadCraft Studio ke kedelapan aplikasi, dengan tingkat baca-saja, sarankan, atau sunting untuk setiap aplikasi, dan catatan dalam kata-kata sederhana tentang apa yang dilakukan asisten. CadCraft tidak memiliki AI sendiri, dan Tanya di setiap aplikasi memakai AI yang Anda hubungkan.

### Diperbaiki di 0.8.1

- **Properti menampilkan 150 alih-alih 12'-6"** pada gambar kaki-dan-inci. Bidang yang dibaca aplikasi sendiri kembali mempertahankan teksnya.
- **File DWG yang bagian kelasnya dibaca sebagai jenis yang salah** (GitHub cadcraft#5) kini terbuka dengan benar.
- **Bidik silang tidak lagi tampak di belakang jendela sembul.**
- **Studio dan edisi kemasan dapat berganti bahasa saat dijalankan.** Sebelumnya hanya bahasa Inggris. Belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.
- **Tablet dalam potret** memberi ruang tinggi grid yang tersisa ke kanvas, dan mode lembar mulai pada 760 px atau kurang.
- **STRETCH dengan jendela silang, dan LIMITS,** dilaporkan pada Studio 0.8.0 dan sudah benar di build web 0.8; pemasang pelapor lebih lama. Studio 0.8.1 membawanya.

### Belum ada di versi ini

- **0.8 dan 0.8.1 belum ditandatangani kode.** Windows mungkin memberi peringatan (pilih {{ui:Info lebih lanjut}}, lalu {{ui:Tetap jalankan}}); di Mac, klik kanan CadCraft Studio dan pilih {{ui:Buka}}. Build toko ditunda, dan build iPad dan iPhone tidak dibangun ulang untuk 0.8.1.
- **Sketsa pena dan foto sketsa** baru dicoba pada foto buatan dan mouse, belum dengan pena nyata, layar sentuh, atau sketsa tangan di kertas.
- **Gambar tanpa penglihatan** telah diuji dengan pemeriksaan otomatis, belum dengan pembaca layar atau penguji tunanetra.
- **Berbagi detail** belum diperiksa oleh dua orang, dan folder Team Cloud Plan sebagai folder Dokumen belum dibangun.
- **Penggabungan** bekerja untuk file DWG dan DXF CadCraft; untuk file aplikasi lain belum dibangun.
- **Undo lintas jendela:** CadCraft melaporkan setiap langkah yang selesai, tetapi Studio belum memiliki satu Undo untuk semua aplikasi; setiap aplikasi membatalkan langkahnya sendiri.
- **Objek OLE DWG** disimpan tetapi tidak digambar di tempatnya.
- **Membaca tabel gaya plot (file CTB)** dari program lain sudah dibangun tetapi belum diperiksa terhadap file dari program lain.
- **Hubungkan AI Anda:** hubungkan satu klik di Studio, konektor yang dihosting untuk AI peramban, kunci API Anda sendiri di dalam Studio, dan paket MCP yang diterbitkan tidak dijanjikan di rilis ini.

Untuk versi sebelumnya, lihat [Yang baru di 0.7](topic:whats-new-0-7).
