---
title: Layar CadCraft
summary: Tur setiap bilah, panel, dan tab dalam aplikasi gambar, menurut nama yang tampil di layar.
keywords: layar, antarmuka, bilah alat, pita, panel, baris perintah, bilah status, tab, tab layout, properti, panel layer, tur
from: b5a33388
---

Layar terdiri dari tujuh bagian. Dari atas ke bawah: bilah aplikasi, bilah alat, area gambar dengan panel di setiap sisinya, tab di bawah gambar, baris perintah, dan bilah status.

## Bilah aplikasi

Bilah tipis di paling atas milik situs, bukan milik gambar. Bilah ini menampilkan logo CadCraft, nama aplikasi, versi yang Anda jalankan, tautan ke halaman aplikasi, tombol {{ui:Bantuan}} (atau {{key:F1}}), tombol {{ui:Simpan untuk offline}}, tombol {{ui:Layar penuh}}, dan dua tombol tema, {{ui:Kertas}} dan {{ui:Model}}.

Tombol {{ui:Pengaturan}} (roda gigi) memuat pengaturan CadCraft sendiri dan yang dipakai bersama semua aplikasi: lihat [Pengaturan CadCraft](topic:settings).

{{ui:Simpan untuk offline}} menyimpan salinan CadCraft, termasuk pembaca DWG-nya, di peramban ini sehingga terbuka tanpa koneksi. Labelnya menunjukkan keadaan: "Menyimpan N dari M", "Siap offline", "Tidak dapat menyimpan", atau "Offline tidak tersedia". Lihat [Bekerja offline](common:offline).

:::note
Tombol {{ui:Kertas}} dan {{ui:Model}} di bilah aplikasi hanya mengubah warna layar: {{ui:Kertas}} adalah tema terang, {{ui:Model}} tema gelap. Keduanya tidak ada hubungannya dengan tab {{ui:Model}} di bawah gambar, yang berpindah antara gambar dan lembarnya.
:::

Tombol {{ui:Layar penuh}}, atau {{key:Ctrl+Shift+F}} (tombol Control di semua komputer, termasuk Mac), berganti di antara tiga mode layar: normal, layar penuh, dan layar penuh dengan bilah tersembunyi. Dengan bilah tersembunyi, gerakkan penunjuk ke tepi atas layar untuk memunculkannya kembali.

## Bilah alat

Di bawah bilah aplikasi ada bilah alat. Setiap tombol menjalankan perintah, persis seperti jika Anda mengetiknya, sehingga baris perintah mengajukan pertanyaan yang sama dengan cara apa pun. Arahkan penunjuk ke tombol untuk melihat alias perintahnya. Grupnya adalah:

| Grup | Tombol |
|---|---|
| File | {{ui:Baru}}, {{ui:Buka}}, {{ui:Simpan}}, {{ui:Simpan sebagai}}, {{ui:Plot}} |
| Gambar | {{ui:Garis}}, {{ui:Polyline}}, {{ui:Lingkaran}}, {{ui:Busur}}, {{ui:Persegi panjang}}, {{ui:Poligon}}, {{ui:Elips}}, {{ui:Teks}}, {{ui:Paragraf}}, {{ui:Hatch}}, dan {{ui:Lainnya}}: {{ui:Titik}}, {{ui:Garis konstruksi}} dan {{ui:Sinar}} (lihat [Garis konstruksi dan sinar](topic:construction-lines)) |
| Ubah | {{ui:Pindahkan}}, {{ui:Salin}}, {{ui:Putar}}, {{ui:Skala}}, {{ui:Cerminkan}}, {{ui:Regangkan}}, {{ui:Offset}}, {{ui:Pangkas}}, {{ui:Perpanjang}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Urai}}, {{ui:Hapus}}, dan {{ui:Lainnya}}: {{ui:Array}}, {{ui:Gabungkan}}, {{ui:Samakan properti}}, {{ui:Putuskan}} dan {{ui:Ubah panjang}} |
| Anotasi | {{ui:Linear}}, {{ui:Sejajar}}, {{ui:Sudut}}, {{ui:Radius}}, {{ui:Diameter}} (dimensi), {{ui:Leader}} (multileader), dan {{ui:Lainnya}}: {{ui:Dimensi lanjutan}}, {{ui:Dimensi garis dasar}} dan {{ui:Awan revisi}} |
| Parametrik | {{ui:Otomatis}}, {{ui:Batasi}}, {{ui:Dimensi}}, {{ui:Parameter}}, dan {{ui:Lainnya}} dengan setiap batasan (lihat [Membatasi gambar](topic:constraints)) |
| Blok | {{ui:Buat}}, {{ui:Sisipkan}}, {{ui:Pustaka}}, dan {{ui:Lainnya}}: {{ui:Edit blok}} dan {{ui:Definisikan atribut}} |
| Lembar | {{ui:Lembar baru}}, {{ui:Viewport}} |
| Edit | {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}} (ke papan klip), {{ui:Tempel}}, dan {{ui:Lainnya}}: menu dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat dan pindahkan}}, {{ui:Hapus}}, {{ui:Pilih semua}}, {{ui:Batalkan pilihan}}, {{ui:Pilih cepat}}, {{ui:Pilih yang serupa}} dan {{ui:Cari dan ganti}}, masing-masing dengan tombolnya |
| Tampilan | {{ui:Batas}}, {{ui:Jendela}}, {{ui:Sebelumnya}}, dan {{ui:Lainnya}}: {{ui:Ukur jarak}}, {{ui:Luas}}, {{ui:Ukur (radius, sudut …)}}, dan layar terbagi: {{ui:Bagi berdampingan}}, {{ui:Bagi bertumpuk}}, {{ui:Empat panel}}, {{ui:Satu panel}} (lihat [Membagi layar](topic:split-screen)), serta {{ui:Putar tampilan 90° ke kiri}}, {{ui:Putar tampilan 90° ke kanan}}, {{ui:Kembali ke World}} (lihat [Memutar tampilan](topic:ucs-and-turned-view)) |

{{ui:Salin}} di grup {{ui:Ubah}} adalah perintah {{cmd:COPY}} (titik dasar, lalu ke mana setiap salinan pergi); {{ui:Salin}} di grup {{ui:Edit}} menaruh objek di papan klip untuk {{ui:Tempel}}. Lihat [Menyalin, menempel, dan menduplikat](topic:copy-paste). Tombol perintah yang sedang berjalan tetap tersorot sampai perintah berakhir. Tooltip menyebutkan pintasan Windows ("Ctrl+O"); di Mac, {{key:Mod+O}} juga berfungsi.

Pada jendela yang pendek (misalnya laptop dengan tampilan diskalakan 125 % atau lebih) bilah alat tidak pernah mengambil tempat gambar: ketika gambar akan mendapat terlalu sedikit tinggi, tombol menghilangkan kata di bawah ikonnya dan nama grupnya (arahkan penunjuk ke tombol untuk melihat namanya), dan jika itu belum cukup, bilah alat menjadi satu baris yang bergulir ke samping. Jendela yang lebih tinggi mengembalikan kata-katanya.

## Panel kiri

Panel di kiri memiliki tiga bagian.

- **{{ui:Layer}}.** Setiap layer dalam gambar, dengan titik terisi pada layer aktif. Klik sebuah nama untuk menjadikan layer itu aktif. Setiap baris memiliki swatch warna (klik untuk memilih warna) dan empat tombol: nyala/mati (mata), bekukan (kepingan salju), kunci (gembok), dan plot (printer). {{ui:Layer baru}} membuka kotak untuk menambahkan satu. Lihat [Menata gambar dengan layer](topic:layers).
- **{{ui:Blok}}.** Blok yang didefinisikan dalam gambar, berapa kali masing-masing dipakai, dan tombol {{ui:Sisipkan}} untuk masing-masing. Lihat [Membuat dan menyisipkan blok](topic:blocks).
- **{{ui:Gambar}}.** Fakta tentang file yang terbuka: nama (dengan "(berubah)" bila ada edit yang belum disimpan), format, ukuran, satuan, jumlah objek, layer, blok, dan lembar. Setelah Anda membuka file, kotak "Tentang file ini" mencantumkan apa pun yang tidak dapat ditampilkan atau harus dikonversi oleh CadCraft.

## Area gambar

Bagian tengah layar adalah gambar. Penunjuknya berupa crosshair. Ketika CadCraft menginginkan titik, penanda kecil dan label ("Titik ujung", "Titik tengah") menunjukkan di mana snap objek akan mendarat. Ketika CadCraft menginginkan objek, crosshair memiliki kotak pilih dan objek di bawahnya menyala.

Ketika gambar kosong, kartu "Mulai menggambar" menampilkan beberapa perintah pertama. Kartu hilang begitu Anda menjalankan perintah atau membuka file. Anda dapat meletakkan file DWG atau DXF di mana saja pada area ini untuk membukanya.

## Tab di bawah gambar

Di bawah gambar ada tab: {{ui:Model}} pertama, lalu {{ui:3D}}, lalu satu tab per lembar (layout), lalu tombol {{ui:+}}.

- {{ui:Model}} adalah gambar itu sendiri, pada ukuran penuh, dalam satuan gambar.
- {{ui:3D}} menampilkan gambar yang terbaring di tanah dan solid yang dibuat darinya. Selama tampil, bilah alat memiliki grup {{ui:3D}} sebagai pengganti grup gambar. Lihat [Pemodelan 3D](topic:3d-solids).
- Setiap tab lembar adalah selembar kertas dengan kepala gambar dan viewport ke model. Yang Anda gambar di sana dalam satuan kertas (milimeter atau inci). Klik ganda di dalam viewport untuk mengerjakan model melaluinya (lihat [Mengerjakan model melalui viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Nama lembar yang panjang dipotong pada tabnya; arahkan penunjuk ke tab untuk melihat nama lengkap. Dengan banyak lembar, {{ui:Pengaturan}} › {{ui:CadCraft}} › {{ui:Tab lembar}} › {{ui:Hanya nomor lembar}} menampilkan hanya nomor setiap lembar (A-101) pada tabnya.
- {{ui:+}} membuat lembar baru dengan bingkai, kepala gambar, dan satu viewport. Sama dengan perintah {{cmd:LAYOUT}}.
- Klik ganda tab lembar untuk mengganti namanya. Dengan tab terfokus, {{key:Left}} dan {{key:Right}} berpindah antartab.

Setiap tab menyimpan zoom dan gesernya sendiri. Lihat [Menyiapkan lembar](topic:sheets-and-viewports).

## Panel kanan: Properti

Panel di kanan berubah sesuai apa yang dipilih.

- **Tidak ada yang dipilih, di tab {{ui:Model}}:** judulnya berbunyi {{ui:Pengaturan saat ini}}. Di sini Anda mengatur {{ui:Layer}}, {{ui:Warna}}, dan {{ui:Tinggi teks}} untuk objek baru, {{ui:Satuan}} gambar, dan ukuran untuk dimensi baru ({{ui:Tinggi teks}}, {{ui:Ukuran panah}}, {{ui:Desimal}}, {{ui:Skala keseluruhan}}).
- **Tidak ada yang dipilih, di lembar:** judulnya berbunyi "Lembar:" dan nama lembar. Anda dapat mengganti nama lembar, mengubah {{ui:Kertas}} dan {{ui:Orientasi}}-nya, {{ui:Plot lembar ini}} atau {{ui:Hapus lembar ini}}. Pengaturan untuk objek baru mengikuti di bawahnya.
- **Satu objek dipilih:** jenisnya sebagai judul (Garis, Lingkaran, Teks, Dimensi, Viewport …), lalu layer, warna, dan geometrinya. Ketik nilai baru lalu tekan {{key:Enter}} untuk mengubahnya.
- **Beberapa objek dipilih:** jumlahnya, serta {{ui:Layer}} dan {{ui:Warna}} yang sama pada semuanya. Mengubah salah satunya mengubah semuanya. "Bervariasi" berarti berbeda-beda.

Lihat [Mengedit dengan grip dan Properti](topic:grips-and-properties).

Di bawahnya, panel {{ui:Parameter}} terbuka ketika Anda memilih {{ui:Parameter}} atau mengetik {{cmd:PARAMETERS}}: semua parameter dan batasan dimensi dalam satu tabel. Lihat [Memakai parameter dan persamaan](topic:parameters).

## Baris perintah

Di bagian bawah ada baris perintah: riwayat apa yang Anda lakukan, dan di bawahnya prompt.

- Label prompt berbunyi `Command:` ketika tidak ada yang berjalan. Saat perintah berjalan, label menampilkan pertanyaan, opsinya dalam tanda kurung siku, dan nilai bawaan dalam tanda kurung sudut, misalnya `Specify radius of circle [Diameter] <500>:`.
- Saat Anda mengetik nama perintah, petunjuk di sebelah kanan menyarankan perintah yang cocok. Tekan {{key:Tab}} untuk menerima yang pertama. "Tidak ada perintah seperti itu" berarti tidak ada yang cocok.
- {{key:Up}} dan {{key:Down}} memunculkan kembali baris yang pernah Anda ketik.
- Riwayat menyimpan 400 baris terakhir. Pesan dari perintah, pengukuran dari {{cmd:DIST}} dan {{cmd:LIST}}, serta laporan simpan dan plot muncul di sini.

## Bilah status

Baris paling bawah adalah bilah status.

- **Koordinat** di kiri: X dan Y crosshair. Saat perintah memiliki titik dasar, bilah juga menampilkan jarak dan sudut darinya, misalnya `Δ 1200 < 90°`.
- **Pesan** di tengah, seperti "Ortho nyala" atau "Layer aktif: Walls". Pesan memudar setelah beberapa detik.
- **{{ui:Grid}}**, **{{ui:Ortho}}**, **{{ui:Polar}}**, **{{ui:Snap}}**, **{{ui:Lacak}}**, **{{ui:Dyn}}** dan **{{ui:LWT}}** di kanan. Masing-masing adalah sakelar; tombol yang ditekan berarti nyala. {{ui:LWT}} menampilkan tebal garis di layar (lihat [Tebal garis dan jenis garis](topic:units-papers-scales#line-weights-and-linetypes)). Panah kecil di samping {{ui:Snap}} membuka {{ui:Snap objek}}, tempat Anda mencentang snap mana yang aktif. Lihat [Snap ke titik pada objek](topic:object-snaps).

## Dialog Plot ke PDF

{{ui:Plot}} (atau {{key:Mod+P}}) membuka dialog {{ui:Plot ke PDF}}, dengan pengaturan di kiri dan pratinjau langsung di kanan. Lihat [Plot ke PDF](topic:plot-pdf).

## Bantuan

{{key:F1}} atau tombol {{ui:Bantuan}} membuka bantuan ini sebagai panel samping; gambar tetap dapat dipakai di sampingnya. Bantuan berfungsi tanpa koneksi. {{key:F1}} lagi, atau {{key:Esc}} di dalam panel, menutupnya. Lihat [Memakai bantuan ini](common:help).
