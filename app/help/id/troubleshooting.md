---
title: Pemecahan masalah
summary: Pesan yang ditampilkan CadCraft dan masalah yang mungkin Anda temui, masing-masing dengan penyebab dan solusinya.
keywords: masalah, kesalahan, tidak berfungsi, pesan, tidak dapat dibuka, perintah tidak dikenal, tidak terjadi apa-apa, macet, tombol tidak berfungsi, kosong, hilang, perbaiki
from: 8299b222
---

## Membuka file

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| "CadCraft membuka gambar DWG dan DXF. "…" bukan keduanya." | File bukan `.dwg` atau `.dxf`. | Buka file gambarnya sendiri. PDF dapat dimasukkan (Open akan menanyakan: impor atau lampirkan, lihat [Underlay PDF](topic:pdf-underlay)); gambar dimasukkan dengan `IMAGEATTACH`. |
| "DXF biner ini berakhir di tengah objek: file terpotong atau rusak." | DXF biner berhenti sebelum akhirnya. | Ketik RECOVER untuk membuka bagian yang masih bisa dibaca, atau minta file dikirim ulang. |
| "File ini bukan DXF yang dapat dibaca (kode grup salah pada baris …)." | DXF rusak atau sebenarnya bukan DXF. | Minta file dikirim ulang, atau minta DWG. |
| "Gambar ini tidak dapat dibaca. Mungkin rusak, atau disimpan dalam versi yang belum ditangani pembaca (…)." | Pembaca DWG tidak dapat membacanya. | Minta DWG yang disimpan dalam versi lama, atau DXF. |
| "Gambar ini dari AutoCAD R11 / R12 (DWG AC1009), lebih lama dari yang dapat dibaca CadCraft …" | File DWG dari Release 12 dan yang lebih lama memakai format yang tidak dibaca CadCraft. | Di program yang membuatnya, simpan sebagai DXF (versi apa pun) atau sebagai DWG yang lebih baru, lalu buka itu. Simpan sebagai milik CadCraft menawarkan DXF R12 untuk program yang membutuhkan format lama itu. |
| "Tidak dapat membuka …" diikuti pesan jaringan, pada DWG pertama | Pembaca DWG tidak dapat diunduh: Anda offline dan CadCraft tidak disimpan untuk penggunaan offline, atau koneksi terputus. | Sambungkan ke internet lalu coba lagi, atau buka DXF. Klik {{ui:Simpan untuk offline}} dan tunggu hingga "Siap offline" agar file DWG bisa dibuka secara offline lain kali. Lihat [Bekerja offline](common:offline). |
| Tombol offline menampilkan "Tidak dapat menyimpan" | Beberapa file tidak terunduh. | Periksa koneksi dan klik tombol itu untuk mencoba lagi. |
| Tombol offline menampilkan "Offline tidak tersedia" | Jendela privat dan beberapa komputer yang dikelola tidak dapat menyimpan salinan offline. | Gunakan jendela biasa, atau tetap online. |
| CadCraft tidak terbuka tanpa koneksi | Aplikasi tidak disimpan untuk penggunaan offline di peramban ini, atau peramban sudah menghapusnya. | Lain kali saat online, klik {{ui:Simpan untuk offline}} dan tunggu hingga "Siap offline". |
| Gambar terbuka tetapi ada bagian yang hilang | Objek yang belum bisa digambar CadCraft, atau layer yang mati atau dibekukan dalam file. | Baca "Tentang file ini" di panel kiri. Periksa panel {{ui:Layer}}. |
| Teks terbungkus menjadi dua baris | CadCraft menggambar teks dengan font bergaya Helvetica, yang lebih lebar daripada sebagian font CAD. | Persingkat teks di Properti, atau terima baris tambahannya. |
| Lingkaran tampak sebagai elips, atau teks cermin terbaca dengan benar | Objek digambar pada bidang miring, atau dilihat dari bawah, di program yang membuat file. CadCraft menampilkannya seperti dilihat dari atas, sebagaimana tampilan denah di program tersebut; teks tetap dapat dibaca. | Tidak ada yang perlu diperbaiki. Untuk melihatnya seperti di program lain, minta gambar diratakan, atau objek digambar dari atas. |
| Blok, lingkaran, atau dimensi berada di tempat yang berbeda dibandingkan dengan program yang membuat file | Kasus gambar yang dibaca keliru oleh CadCraft. | Beri tahu kami di Discord, dengan file jika Anda bisa membagikannya. |

## Baris perintah

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| "Perintah tidak dikenal "…". Ketik HELP untuk daftar." | Tidak ada perintah atau alias dengan nama itu. | Ketik `HELP`, atau lihat [Referensi perintah](topic:commands). Beberapa perintah yang sudah dikenal [belum dibuat](topic:not-built-yet). |
| "Tidak ada perintah seperti itu" di samping baris perintah saat mengetik | Yang Anda ketik belum cocok dengan apa pun. | Lanjutkan mengetik, atau periksa ejaannya. |
| "Diperlukan titik atau kata kunci opsi." | Yang Anda ketik bukan titik atau opsi. | Periksa formatnya: `x,y`, `@dx,dy`, `@d<a`, atau satu angka. Lihat [Entri koordinat dan jarak](topic:coordinate-entry). |
| "Diperlukan angka positif atau dua titik." | Jarak negatif atau bukan angka. | Ketik angka positif, atau klik dua titik. |
| "Diperlukan sudut dalam derajat atau dua titik." | Sudut bukan angka. | Ketik derajat sebagai angka biasa. |
| "Diperlukan angka." | Yang diharapkan adalah angka. | Ketik digit saja. |
| "Kata kunci opsi tidak valid." | Huruf tidak cocok dengan opsi mana pun. | Ketik huruf kapital yang ditampilkan di dalam tanda kurung siku. |
| `*Cancel*` | Anda menekan {{key:Esc}}, atau {{key:Enter}} di tempat titik diperlukan. | Mulai perintah lagi. |
| Ketikan tidak sampai ke baris perintah | Sebuah kotak di panel atau dialog sedang memegang kursor. | Tekan {{key:Enter}} atau {{key:Esc}}, atau klik di gambar. |
| Perintah memakai objek yang tidak Anda pilih | Objek itu sudah dipilih sebelum Anda memulai perintah. | Tekan {{key:Esc}} sebelum perintah. |
| Garis pergi ke tempat yang tidak terduga | `x,y` bersifat absolut. | Gunakan `@dx,dy` untuk titik relatif. |
| "Selesaikan atau batalkan perintah yang sedang berjalan terlebih dahulu (Esc)." | Anda menekan {{key:Mod+S}} saat perintah sedang berjalan. | Tekan {{key:Esc}}, lalu simpan. |
| "Tidak dapat menyimpan sebagai DWG (AutoCAD 2000): … Coba Simpan sebagai, lalu DXF." | Ada bagian gambar yang tidak dapat ditulis sebagai DWG. | Tekan {{key:Mod+Shift+S}}, pilih {{ui:DXF R12}}, lalu klik {{ui:Simpan}}. |
| "Belum disimpan." | Anda menutup dialog {{ui:Simpan salinan sebagai}} dengan {{ui:Batal}} atau {{key:Esc}}. | Tekan {{key:Mod+Shift+S}} lagi, lalu klik {{ui:Simpan}}. |

## Mengedit

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Objek tidak bisa dipilih | Layer-nya dikunci, dimatikan, atau dibekukan; atau Anda berada di lembar dan objek itu adalah model di dalam viewport. | Buka kunci layer-nya, atau pergi ke tab {{ui:Model}}. |
| "Tidak ada yang ditemukan di sana." | Tidak ada objek di bawah klik. | Perbesar dan klik tepat pada garisnya. |
| "Tidak ada yang memotong objek itu di sana." | {{cmd:TRIM}} tidak menemukan objek yang memotong bagian yang Anda pilih. | Pastikan garis pemotong benar-benar memotongnya. |
| "Objek itu tidak dapat dipangkas." | Pangkas hanya bekerja pada garis, busur, lingkaran, dan polyline. | Urai blok terlebih dahulu, atau hapus lalu gambar ulang. |
| "Tidak ada batas di arah itu." | {{cmd:EXTEND}} tidak menemukan apa pun untuk dipertemukan. | Pilih lebih dekat ke ujung yang seharusnya memanjang. |
| "Objek itu tidak dapat di-offset." | Offset hanya bekerja pada garis, busur, lingkaran, dan polyline. | Urai terlebih dahulu, atau gambar garis sejajar. |
| "Tidak dapat meng-offset sejauh itu." | Offset akan membalik bentuk ke dalam. | Gunakan jarak yang lebih kecil. |
| "Radius terlalu besar." atau "Jarak terlalu besar." | Fillet atau chamfer akan melewati ujung garis. | Atur radius yang lebih kecil dengan `R`, atau jarak yang lebih kecil dengan `D`. |
| "Hanya segmen pertama atau terakhir dari polyline terbuka yang dapat dipotong kembali." | Sudut akan memotong ke bagian tengah polyline. | Pilih dua segmen polyline yang berdampingan, atau gunakan `P` untuk setiap sudut. |
| "Pilih garis kedua yang berbeda." | Pilihan kedua adalah garis yang sama, atau bukan garis. | Pilih garis lain. |
| "Hanya polyline, referensi blok, dan dimensi yang dapat diurai." | Pilihan tidak memiliki apa pun untuk diurai. | Pilih polyline, referensi blok, atau dimensi. |
| "Itu layer aktif. Jadikan layer lain aktif terlebih dahulu." | Anda mencoba mematikan layer aktif. | Klik nama layer lain, lalu matikan layer ini. |
| "Sudah ada layer bernama …" | Nama layer harus unik. | Pilih nama lain. |
| "Tidak ada yang dapat diurungkan." | Tidak ada lagi yang dapat diurungkan, atau Anda membuka atau memulai gambar (itu menghapus riwayat). | — |

## Dimensi dan blok

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| Teks dan panah dimensi sangat kecil atau sangat besar | Ukuran dinyatakan dalam satuan gambar; skala keseluruhan tidak sesuai dengan gambar. | Atur {{cmd:DIMSCALE}} ke skala cetak; lihat [Atur ukuran dimensi](topic:dimension-settings). |
| "Pilih titik di dalam sudut yang ingin diukur." | Lokasi dimensi sudut berada pada salah satu kaki. | Klik di dalam sudut. |
| "Garis-garis itu sejajar." | Garis sejajar tidak memiliki sudut di antaranya. | Pilih dua garis yang bertemu. |
| "Pilih dimensi linear atau sejajar." | {{cmd:DIMCONTINUE}} atau {{cmd:DIMBASELINE}} memerlukan titik awal. | Pilih dimensi linear atau sejajar. |
| "Gambar ini belum memiliki blok: F menyisipkan dari file, L dari pustaka …" | Gambar tidak memiliki blok sendiri. | Ketik `F` atau `L`, atau buat blok dengan {{cmd:BLOCK}}. |
| "Tidak ada blok bernama "…"." | Namanya salah. | Pesan akan mencantumkan blok yang ada. |
| "Nama blok tidak boleh diawali * atau memakai …" diikuti daftar karakter | Nama memakai karakter yang tidak boleh dipakai blok. | Gunakan huruf, digit, `-`, dan `_`. |
| "Blok tidak boleh memuat dirinya sendiri." | Pilihan memuat referensi ke blok yang sedang dibuat. | Keluarkan referensi itu dari pilihan. |
| "Tidak ada objek yang dipilih; tidak ada yang dibuat." | Anda menekan {{key:Enter}} sebelum memilih. | Jalankan {{cmd:BLOCK}} lagi dan pilih objeknya. |

## Lembar dan cetakan

| Pesan atau gejala | Penyebab | Solusi |
|---|---|---|
| "Viewport diletakkan pada layout. Buka tab layout (atau buat satu dengan LAYOUT) terlebih dahulu." | {{cmd:MVIEW}} di tab {{ui:Model}}. | Klik tab lembar terlebih dahulu. |
| "Buka layout dengan viewport terlebih dahulu." | {{cmd:VPVIEW}} di tab {{ui:Model}}. | Klik tab lembar terlebih dahulu. |
| Skala viewport tampak sepuluh kali salah | Satuan gambar salah. | Atur {{ui:Satuan}} di {{ui:Pengaturan saat ini}}. |
| "Belum ada yang bisa dicetak." | Modelnya kosong. | Gambar sesuatu, atau buka gambar. |
| "Pilih jendela yang akan dicetak." | {{ui:Sebuah jendela…}} dipilih, tetapi belum ada jendela yang dipilih. | Klik {{ui:Pilih}} dan pilih dua sudut. |
| "… lebih besar dari kertas: tepinya terpotong." | Area tidak muat pada skala itu. | Pilih skala yang lebih kecil, kertas yang lebih besar, atau {{ui:Paskan ke kertas}}. |
| "Peramban memblokir tab baru, sehingga PDF diunduh sebagai gantinya." | Pop-up diblokir untuk situs ini. | Buka PDF yang diunduh, atau izinkan pop-up untuk situs ini. |
| Karakter tercetak sebagai "?" | Font PDF tidak memiliki huruf untuk karakter itu (ideograf langka, Hindi dan skrip lain yang memerlukan pembentukan kompleks, …), atau font yang lebih besar tidak dapat diunduh (offline). Skrip Eropa, Sirilik, Yunani, Ibrani, Arab, Persia, Urdu, Thai, Tionghoa, Jepang, dan Korea dicetak apa adanya. | Untuk Arab, Persia, Urdu, Thai, Tionghoa, Jepang, atau Korea, cetak ulang dengan koneksi. Skrip lain belum dibuat. |
| Garis konstruksi tampak di PDF | Layer-nya ikut dicetak. | Klik tombol printer pada layer tersebut. |
| Semua garis memiliki ketebalan yang sama | Tebal garisnya adalah {{ui:Bawaan}}, sehingga dicetak dengan lebar pena pada dialog. | Beri layer atau objek {{ui:Tebal garis}} di panel kanan, atau pilih {{ui:Tebal garis}} di dialog. Untuk melihat tebal garis di layar, tekan {{ui:LWT}} di bilah status. |

## Tombol dan layar

| Gejala | Penyebab | Solusi |
|---|---|---|
| F3, F7, atau F8 mengubah volume atau membuka Mission Control | Tombol fungsi Mac. | Tahan **fn**, atau gunakan tombol di bilah status. Lihat [Tombol, mouse, dan trackpad](common:keys). |
| F7 menanyakan caret browsing | Firefox menggunakan F7 untuk fungsinya sendiri. | Pilih No; gunakan tombol {{ui:Grid}}. |
| {{key:Mod+N}} membuka jendela peramban | Peramban menyimpan tombol itu. | Klik {{ui:Baru}} atau ketik `NEW`. |
| {{key:Mod+A}} memilih teks di baris perintah | Baris perintah memegang kursor. | Klik objek terlebih dahulu, atau ketik `ALL` pada prompt `Select objects`. |
| {{key:Delete}} tidak menghapus | Baris perintah memegang kursor. | Ketik `E` lalu tekan {{key:Enter}}. |
| Klik kanan tidak melakukan apa-apa pada trackpad Mac | Control-klik mungkin dihitung sebagai klik biasa. | Klik dengan dua jari. |
| Gambar tidak bergeser pada trackpad | Tidak ada tombol tengah, dan Space tidak menggeser. | Geser dengan dua jari: tampilan 2D akan bergeser (cubit dan roda mouse melakukan zoom). Atau seret sambil menahan klik kanan. |
| {{key:Esc}} pertama keluar dari layar penuh | Peramban menggunakan Esc untuk keluar dari layar penuh. | Tekan {{key:Esc}} lagi untuk membatalkan perintah. |
| {{key:F1}} tidak melakukan apa-apa di Mac | F1 adalah tombol kecerahan. | Tahan **fn**, atau klik {{ui:Bantuan}}. |
| Ketikan masuk ke kotak pencarian bantuan | Panel bantuan memegang kursor. | Klik di gambar. |
| Gambar menjadi kosong | Anda memperbesar terlalu jauh. | Klik {{ui:Batas}}, atau klik dua kali roda mouse. |
| "Tinggalkan situs ini?" saat menutup tab | Ada perubahan yang belum disimpan. | Tetap di sini, simpan dengan {{key:Mod+S}}, lalu tutup. |
