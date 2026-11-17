---
title: Penyelesaian masalah
summary: Mesej yang CadCraft tunjukkan dan masalah yang mungkin anda hadapi, setiap satu dengan punca dan penyelesaiannya.
keywords: masalah, ralat, tidak berfungsi, mesej, tidak dapat dibuka, arahan tidak diketahui, tiada apa berlaku, tersekat, kekunci tidak berfungsi, kosong, hilang, betulkan
from: 8299b222
---

## Membuka fail

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| "CadCraft membuka lukisan DWG dan DXF. "…" bukan kedua-duanya." | Fail itu bukan `.dwg` atau `.dxf`. | Buka fail lukisan itu sendiri. PDF boleh dibawa masuk (Buka bertanya: import atau lampirkan, lihat [Underlay PDF](topic:pdf-underlay)); gambar dimasukkan dengan `IMAGEATTACH`. |
| "DXF binari ini berakhir di tengah objek: fail dipotong atau rosak." | DXF binari berhenti sebelum penghujungnya. | Taip RECOVER untuk membuka apa yang boleh dibaca, atau minta fail itu sekali lagi. |
| "Fail ini bukan DXF yang boleh dibaca (kod kumpulan tidak sah pada baris …)." | DXF itu rosak atau bukan DXF sebenar. | Minta fail itu sekali lagi, atau minta DWG. |
| "Lukisan ini tidak dapat dibaca. Ia mungkin rosak, atau disimpan dalam versi yang pembaca belum kendalikan (…)." | Pembaca DWG tidak dapat membacanya. | Minta DWG yang disimpan dalam versi lama, atau DXF. |
| "Lukisan ini daripada AutoCAD R11 / R12 (DWG AC1009), lebih lama daripada yang CadCraft baca …" | Fail DWG daripada Release 12 dan lebih awal menggunakan format yang CadCraft tidak baca. | Dalam program yang menghasilkannya, simpan sebagai DXF (mana-mana versi) atau sebagai DWG yang lebih baharu, dan buka itu. Simpan sebagai CadCraft sendiri menawarkan DXF R12 untuk program yang memerlukan format lama itu. |
| "Tidak dapat membuka …" diikuti mesej rangkaian, pada DWG pertama | Pembaca DWG tidak dapat dimuat turun: anda luar talian dan CadCraft tidak disimpan untuk kegunaan luar talian, atau sambungan terputus. | Pergi dalam talian dan cuba lagi, atau buka DXF. Klik {{ui:Simpan untuk luar talian}} dan tunggu "Sedia untuk luar talian" supaya fail DWG dibuka luar talian pada kali seterusnya. Lihat [Bekerja luar talian](common:offline). |
| Butang luar talian berkata "Tidak dapat disimpan" | Sesetengah fail tidak dimuat turun. | Semak sambungan dan klik butang untuk cuba lagi. |
| Butang luar talian berkata "Luar talian tidak tersedia" | Tetingkap persendirian dan sesetengah komputer terurus tidak dapat menyimpan salinan luar talian. | Guna tetingkap biasa, atau kekal dalam talian. |
| CadCraft tidak dibuka tanpa sambungan | Ia tidak disimpan untuk kegunaan luar talian dalam pelayar ini, atau pelayar mengosongkannya. | Kali seterusnya anda dalam talian, klik {{ui:Simpan untuk luar talian}} dan tunggu "Sedia untuk luar talian". |
| Lukisan dibuka tetapi bahagian hilang | Objek yang CadCraft belum boleh lukis, atau lapisan yang dimatikan atau dibekukan dalam fail. | Baca "Perihal fail ini" dalam panel kiri. Semak panel {{ui:Lapisan}}. |
| Teks dililit kepada dua baris | CadCraft melukis teks dalam fon gaya Helvetica, yang lebih lebar daripada sesetengah fon CAD. | Pendekkan teks dalam Sifat, atau terima baris tambahan itu. |
| Bulatan kelihatan sebagai elips, atau teks cermin dibaca betul | Objek dilukis pada satah condong, atau dilihat dari bawah, dalam program yang menghasilkan fail itu. CadCraft menunjukkannya seperti dilihat dari atas, sebagaimana paparan pelan program itu; teks dikekalkan boleh dibaca. | Tiada yang perlu diperbetulkan. Untuk melihatnya mengikut cara program lain, minta lukisan diratakan, atau objek dilukis dari atas. |
| Blok, bulatan atau dimensi berada di tempat lain daripada dalam program yang menghasilkan fail | Kes lukisan yang CadCraft baca dengan salah. | Beritahu kami di Discord, dengan fail jika anda boleh berkongsinya. |

## Baris arahan

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| "Arahan tidak diketahui "…". Taip HELP untuk senarai." | Tiada arahan atau alias dengan nama itu. | Taip `HELP`, atau lihat [Rujukan arahan](topic:commands). Sesetengah arahan biasa ialah [belum dibina](topic:not-built-yet). |
| "Tiada arahan sedemikian" di sebelah baris arahan semasa menaip | Apa yang anda taip tidak sepadan dengan apa-apa lagi. | Teruskan menaip, atau semak ejaan. |
| "Titik atau kata kunci pilihan diperlukan." | Apa yang anda taip bukan titik atau pilihan. | Semak formatnya: `x,y`, `@dx,dy`, `@d<a`, atau satu nombor. Lihat [Kemasukan koordinat dan jarak](topic:coordinate-entry). |
| "Memerlukan nombor positif atau dua titik." | Jarak negatif atau bukan nombor. | Taip nombor positif, atau klik dua titik. |
| "Memerlukan sudut dalam darjah atau dua titik." | Sudut bukan nombor. | Taip darjah sebagai nombor biasa. |
| "Memerlukan nombor." | Nombor dijangka. | Taip digit sahaja. |
| "Kata kunci pilihan tidak sah." | Huruf tidak sepadan dengan pilihan. | Taip huruf besar yang ditunjukkan dalam kurungan segi empat. |
| `*Cancel*` | Anda menekan {{key:Esc}}, atau {{key:Enter}} di tempat titik diperlukan. | Mulakan arahan semula. |
| Menaip tidak sampai ke baris arahan | Kotak dalam panel atau kotak dialog mempunyai kursor. | Tekan {{key:Enter}} atau {{key:Esc}}, atau klik pada lukisan. |
| Arahan menggunakan objek yang tidak anda pilih | Ia dipilih sebelum anda memulakan arahan. | Tekan {{key:Esc}} sebelum arahan. |
| Garisan pergi ke tempat yang tidak dijangka | `x,y` ialah mutlak. | Guna `@dx,dy` untuk titik relatif. |
| "Selesaikan atau batalkan arahan semasa dahulu (Esc)." | Anda menekan {{key:Mod+S}} semasa arahan sedang berjalan. | Tekan {{key:Esc}}, kemudian simpan. |
| "Tidak dapat simpan sebagai DWG (AutoCAD 2000): … Cuba Simpan sebagai, kemudian DXF." | Sesuatu dalam lukisan tidak dapat ditulis sebagai DWG. | Tekan {{key:Mod+Shift+S}}, pilih {{ui:DXF R12}} dan klik {{ui:Simpan}}. |
| "Tidak disimpan." | Anda menutup kotak dialog {{ui:Simpan salinan sebagai}} dengan {{ui:Batal}} atau {{key:Esc}}. | Tekan {{key:Mod+Shift+S}} sekali lagi dan klik {{ui:Simpan}}. |

## Menyunting

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Objek tidak akan dipilih | Lapisannya dikunci, dimatikan atau dibekukan; atau anda berada pada helaian dan ia ialah model di dalam viewport. | Buka kunci lapisan, atau pergi ke tab {{ui:Model}}. |
| "Tiada apa ditemui di situ." | Tiada objek di bawah klik. | Zum masuk dan klik pada garisan itu sendiri. |
| "Tiada apa merentasi objek itu di situ." | {{cmd:TRIM}} tidak menemui objek yang merentasi bahagian yang anda pilih. | Semak bahawa garisan pemotong benar-benar merentasinya. |
| "Tidak dapat memangkas objek itu." | Pangkas berfungsi pada garisan, lengkok, bulatan dan polygaris. | Pecahkan blok dahulu, atau padam dan lukis semula. |
| "Tiada sempadan dalam arah itu." | {{cmd:EXTEND}} tidak menemui apa-apa untuk dipertemukan. | Pilih lebih dekat dengan hujung yang sepatutnya memanjang. |
| "Tidak dapat mengofset objek itu." | Ofset berfungsi pada garisan, lengkok, bulatan dan polygaris. | Pecahkannya dahulu, atau lukis garisan selari. |
| "Tidak dapat mengofset sejauh itu." | Ofset akan membalikkan bentuk ke dalam luar. | Guna jarak yang lebih kecil. |
| "Jejari terlalu besar." atau "Jarak terlalu besar." | Fillet atau chamfer akan melangkaui hujung garisan. | Tetapkan jejari yang lebih kecil dengan `R`, atau jarak yang lebih kecil dengan `D`. |
| "Hanya segmen pertama atau terakhir polygaris terbuka boleh dipotong balik." | Sudut akan memotong ke tengah polygaris. | Pilih dua segmen polygaris yang bersebelahan, atau guna `P` untuk setiap sudut. |
| "Pilih garisan kedua yang lain." | Pilihan kedua ialah garisan yang sama, atau bukan garisan. | Pilih garisan lain. |
| "Hanya polygaris, rujukan blok dan dimensi boleh dipecahkan." | Pilihan tidak mempunyai apa-apa untuk dipecahkan. | Pilih polygaris, rujukan blok atau dimensi. |
| "Itu ialah lapisan semasa. Jadikan lapisan lain semasa dahulu." | Anda cuba mematikan lapisan semasa. | Klik nama lapisan lain, kemudian matikan yang ini. |
| "Sudah ada lapisan bernama …" | Nama lapisan mesti unik. | Pilih nama lain. |
| "Tiada apa untuk dibuat asal." | Tiada apa lagi untuk dibuat asal, atau anda membuka atau memulakan lukisan (itu mengosongkan sejarah). | — |

## Dimensi dan blok

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| Teks dan anak panah dimensi sangat kecil atau besar | Saiz dalam unit lukisan; skala keseluruhan tidak sesuai dengan lukisan. | Tetapkan {{cmd:DIMSCALE}} kepada skala cetakan; lihat [Tetapkan saiz dimensi](topic:dimension-settings). |
| "Pilih titik di dalam sudut yang anda mahu ukur." | Lokasi dimensi sudut berada pada satu kaki. | Klik di dalam sudut. |
| "Garisan-garisan itu selari." | Garisan selari tidak mempunyai sudut di antaranya. | Pilih dua garisan yang bertemu. |
| "Pilih dimensi lelurus atau sejajar." | {{cmd:DIMCONTINUE}} atau {{cmd:DIMBASELINE}} memerlukan satu untuk bermula. | Pilih dimensi lelurus atau sejajar. |
| "Lukisan ini belum ada blok: F memasukkan satu daripada fail, L daripada pustaka …" | Lukisan itu tiada blok sendiri. | Taip `F` atau `L`, atau buat blok dengan {{cmd:BLOCK}}. |
| "Tiada blok bernama "…"." | Nama itu salah. | Mesej itu menyenaraikan blok yang ada. |
| "Nama blok tidak boleh bermula dengan * atau menggunakan …" diikuti senarai aksara | Nama itu mempunyai aksara yang tidak boleh digunakan oleh blok. | Guna huruf, digit, `-` dan `_`. |
| "Blok tidak boleh mengandungi dirinya sendiri." | Pilihan mengandungi rujukan kepada blok yang sedang dibuat. | Keluarkan rujukan itu. |
| "Tiada objek dipilih; tiada apa dibuat." | Anda menekan {{key:Enter}} sebelum memilih. | Jalankan {{cmd:BLOCK}} semula dan pilih objek. |

## Helaian dan cetakan

| Mesej atau gejala | Punca | Penyelesaian |
|---|---|---|
| "Viewport diletakkan pada layout. Buka tab layout (atau buat satu dengan LAYOUT) dahulu." | {{cmd:MVIEW}} pada tab {{ui:Model}}. | Klik tab helaian dahulu. |
| "Buka layout dengan viewport dahulu." | {{cmd:VPVIEW}} pada tab {{ui:Model}}. | Klik tab helaian dahulu. |
| Skala viewport kelihatan sepuluh kali ganda salah | Unit lukisan salah. | Tetapkan {{ui:Unit}} dalam {{ui:Tetapan semasa}}. |
| "Tiada apa untuk dicetak lagi." | Model kosong. | Lukis sesuatu, atau buka lukisan. |
| "Pilih tetingkap untuk dicetak." | {{ui:Satu tetingkap…}} dipilih dan tiada tetingkap dipilih. | Klik {{ui:Pilih}} dan pilih dua sudut. |
| "… lebih besar daripada kertas: tepinya terpotong." | Kawasan tidak muat pada skala itu. | Pilih skala yang lebih kecil, kertas yang lebih besar, atau {{ui:Muat ke kertas}}. |
| "Pelayar menyekat tab baharu, jadi PDF dimuat turun sebagai gantinya." | Pop timbul disekat untuk laman ini. | Buka PDF yang dimuat turun, atau benarkan pop timbul untuk laman ini. |
| Aksara dicetak sebagai "?" | Fon PDF tiada huruf untuk aksara itu (aksara jarang, skrip Hindi dan lain yang memerlukan pembentukan kompleks, …), atau fon yang lebih besar tidak dapat dimuat turun (luar talian). Skrip Eropah, Sirilik, Yunani, Ibrani, Arab, Parsi, Urdu, Thai, Cina, Jepun dan Korea dicetak sebagai dirinya sendiri. | Bagi Arab, Thai, Cina, Jepun atau Korea, cetak semula dengan sambungan. Skrip lain belum dibina. |
| Garisan konstruksi muncul dalam PDF | Lapisannya dicetak. | Klik butang pencetak lapisan itu. |
| Semua garisan sama tebal | Ketebalan garisannya ialah {{ui:Lalai}}, jadi ia dicetak pada lebar pen kotak dialog. | Berikan lapisan atau objek {{ui:Ketebalan garisan}} dalam panel kanan, atau pilih {{ui:Ketebalan garisan}} dalam kotak dialog. Untuk melihat ketebalan garisan pada skrin, tekan {{ui:LWT}} pada bar status. |

## Kekunci dan skrin

| Gejala | Punca | Penyelesaian |
|---|---|---|
| F3, F7 atau F8 menukar kelantangan atau membuka Mission Control | Kekunci fungsi Mac. | Tahan **fn**, atau guna butang bar status. Lihat [Kekunci, tetikus dan pad sentuh](common:keys). |
| F7 bertanya tentang caret browsing | Penggunaan F7 oleh Firefox sendiri. | Pilih Tidak; guna butang {{ui:Grid}}. |
| {{key:Mod+N}} membuka tetingkap pelayar | Pelayar mengekalkan kekunci itu. | Klik {{ui:Baharu}} atau taip `NEW`. |
| {{key:Mod+A}} memilih teks baris arahan | Baris arahan mempunyai kursor. | Klik objek dahulu, atau taip `ALL` pada gesaan `Select objects`. |
| {{key:Delete}} tidak memadam | Baris arahan mempunyai kursor. | Taip `E` dan tekan {{key:Enter}}. |
| Klik kanan tidak berbuat apa-apa pada pad sentuh Mac | Klik-Control mungkin dikira sebagai klik biasa. | Klik dengan dua jari. |
| Tiada pan pada pad sentuh | Tiada butang tengah, dan Space tidak memanning. | Leret dengan dua jari: paparan 2D di-pan (cubit dan roda tetikus untuk zum). Atau seret dengan klik kanan ditahan. |
| {{key:Esc}} pertama keluar dari skrin penuh | Pelayar menggunakan Esc untuk keluar dari skrin penuh. | Tekan {{key:Esc}} sekali lagi untuk membatalkan arahan. |
| {{key:F1}} tidak berbuat apa-apa pada Mac | F1 ialah kekunci kecerahan. | Tahan **fn**, atau klik {{ui:Bantuan}}. |
| Menaip masuk ke kotak carian bantuan | Panel bantuan mempunyai kursor. | Klik pada lukisan. |
| Lukisan menjadi kosong | Anda zum jauh. | Klik {{ui:Lingkungan}}, atau klik dua kali roda. |
| "Leave site?" apabila menutup tab | Terdapat perubahan yang belum disimpan. | Kekal, simpan dengan {{key:Mod+S}}, kemudian tutup. |
