---
title: Model dalam 3D
summary: Lihat gambar di tab 3D dan buat solid sederhana darinya: ekstrusi (dengan kemiringan atau sepanjang jalur), revolusi, dorong dan tarik muka, kotak, silinder dan baji, gabungkan, kurangi dan irisan solid, lalu pindahkan, salin, putar dan hapus, serta tempatkan tampilan 2D datar dari solid pada lembar.
keywords: 3d, tiga dimensi, solid, solid, 3dsolid, region, body, acis, sat, sab, solid dari program lain, buka gambar 3D, extrude, ext, revolve, rev, sweep, kemiringan, jalur, presspull, tekan tarik, dorong tarik, box, silinder, cyl, baji, 3dorbit, orbit, tampilan, vscurrent, gaya visual, berbayang, garis tersembunyi, rangka kawat, sinar-x, xray, iso, perspektif, paralel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kubus tampilan, union, uni, subtract, su, intersect, in, boolean, gabungkan solid, viewbase, flatshot, tampilan datar, tampilan 2D, tampilan gambar, tampilan depan, tampilan atas, tampilan samping, garis tersembunyi
from: 13060e71
---

## Yang akan Anda buat

Denah ruangan 1000 × 600 diekstrusi menjadi blok setinggi 400, sebuah muka ditarik ke atas, dan sebuah silinder di sebelahnya, lalu model disimpan bersama gambar dan diekspor untuk penampil 3D atau printer.

Tab {{ui:3D}} berada di samping {{ui:Model}} di bawah gambar. Tab ini menampilkan gambar ruang model yang terbaring di atas tanah dengan warna layer-nya (layer yang mati atau dibekukan tetap tersembunyi) serta solid yang Anda buat. Saat pertama kali dibuka, tampilan 3D dimuat; setelah itu, perpindahan terjadi seketika.

## Ekstrusi sebuah bentuk

1. Pada tab {{ui:Model}}, ketik `REC` dan tekan {{key:Enter}}. Ketik `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klik tab {{ui:3D}}. Bilah alat menampilkan grup {{ui:3D}} menggantikan grup gambar.
3. Klik {{ui:Ekstrusi}} (atau ketik {{cmd:EXTRUDE}}, `EXT`). Klik di dalam persegi panjang, lalu tekan {{key:Enter}}.
4. Ketik `400` dan tekan {{key:Enter}}. Riwayat menyatakan "Diekstrusi 1 solid, tinggi 400" beserta volumenya.

Polyline tertutup (termasuk busur), persegi panjang, poligon, lingkaran dan elips dapat diekstrusi; garis dan polyline terbuka tidak bisa, dan riwayat menjelaskan alasannya. Anda juga bisa memilih bentuk di tab {{ui:Model}} terlebih dahulu, lalu mengetik `EXTRUDE` di sana. Alih-alih mengetik tinggi, Anda dapat mengkliknya: garis tepi mengikuti kursor naik dan turun. Tinggi negatif berarti ke bawah. Ketik `D` pada prompt tinggi untuk menghapus bentuk 2D setelah diekstrusi (`D` lagi akan mempertahankannya).

Pada prompt tinggi, `T` (sudut kemiringan) meminta sudut dalam derajat: sisi-sisinya miring ke dalam sebesar sudut itu, sehingga bagian atas lebih kecil (sudut negatif membuatnya lebih besar); sudut yang terlalu curam untuk bentuk tersebut ditolak. `P` (jalur) menyapu bentuk sepanjang jalur sebagai gantinya (lihat di bawah).

## Revolusi dan sweep

- {{cmd:REVOLVE}} (`REV`, atau {{ui:Lainnya}} › {{ui:Revolusi pada sumbu}}): pilih bentuk tertutup, tekan {{key:Enter}}, lalu klik kedua ujung sumbu (atau ketik `X` atau `Y` untuk sumbu gambar melalui 0,0), kemudian ketik sudut atau tekan {{key:Enter}} untuk putaran penuh. Bentuk berputar mengelilingi sumbu dan berdiri tegak dari tanah: gambar setengah garis tepi sebuah vas di samping garis, lalu revolusikan terhadap garis itu. Bentuk boleh menyentuh sumbu tetapi tidak boleh melintasinya. Putaran penuh memiliki 48 langkah.
- {{cmd:SWEEP}} (atau {{ui:Lainnya}} › {{ui:Sweep sepanjang jalur}}, atau `P` pada prompt tinggi EXTRUDE): pilih bentuk tertutup (profil), tekan {{key:Enter}}, lalu klik jalurnya: garis, polyline, busur, lingkaran atau elips. Profil berdiri tegak melintasi jalur, bagian tengahnya berada di atas jalur, dan bergerak sepanjang jalur; sudut dipotong miring, dan jalur tertutup membentuk cincin. Persegi panjang kecil yang disapu di sepanjang garis tepi ruangan menjadi plint; lingkaran di sepanjang polyline menjadi pipa.

## Dorong dan tarik sebuah muka

1. Klik {{ui:Dorong/tarik}} (atau ketik {{cmd:PRESSPULL}}).
2. Klik muka atas blok.
3. Ketik `100` dan tekan {{key:Enter}}, atau gerakkan kursor dan klik. Blok menjadi setinggi 500.

## Kotak, silinder dan baji

- {{cmd:BOX}}: klik atau ketik dua sudut, lalu tinggi.
- {{cmd:CYLINDER}} (`CYL`): pusat, jari-jari, lalu tinggi. Silinder dan lingkaran yang diekstrusi memiliki 48 sisi, diberi bayangan halus.
- {{cmd:WEDGE}} (`WE`): dua sudut dan tinggi. Tingginya penuh di sudut pertama dan miring hingga nol di sudut lainnya.

Pada tab 3D, klik mendarat di muka atau tepi di bawah kursor, jika tidak, di tanah, sehingga kotak dapat berdiri di atas solid lain.

## Pindahkan, salin, putar dan hapus solid

Pada tab 3D, klik memilih solid; seret dari kiri ke kanan untuk jendela, dari kanan ke kiri untuk silang. Lalu:

- {{cmd:MOVE}}: klik titik dasar dan tempat tujuannya, atau ketik `<100,0,0>` (atau `@100,0`) untuk jarak sepanjang X, Y dan Z.
- {{cmd:COPY}}: sama, dengan membiarkan aslinya.
- {{cmd:ROTATE}}: ketik sudut (berputar mengelilingi tengah pilihan, di sekitar Z), atau klik pusat, titik awal, dan sudutnya.
- {{cmd:ERASE}} atau {{key:Delete}}.

## Gabungkan, kurangi dan irisan solid

Buka {{ui:Lainnya}} di bilah alat 3D, atau ketik perintahnya:

- {{cmd:UNION}} (`UNI`): pilih solid, tekan {{key:Enter}}: menjadi satu solid.
- {{cmd:SUBTRACT}} (`SU`): pilih solid yang akan disimpan dan tekan {{key:Enter}}, lalu yang akan dibuang dan tekan {{key:Enter}}. Lubang menembus blok: gambar silinder menembusnya, lalu kurangi dengan silinder.
- {{cmd:INTERSECT}} (`IN`): pilih solid, tekan {{key:Enter}}: hanya bagian yang dimiliki bersama semuanya yang tersisa.

Riwayat menyatakan volume hasilnya. Setiap operasi adalah satu langkah urungkan. Operasi pertama yang Anda jalankan memuat mesin boolean 3D (sekitar 0.5 MB; termasuk dalam {{ui:Simpan untuk offline}}). Hanya solid tertutup yang dapat digabungkan: solid dengan tepi terbuka (dari muka 3D lepas milik program lain) ditolak dengan alasan tersebut. Hasilnya adalah satu solid; muka melengkung tetap terdiri dari faset datar, seperti silinder tadi.

Klik ganda solid untuk mengedit muka dan tepinya secara terpisah; {{key:Esc}} menutupnya kembali. Setiap perubahan 3D adalah satu langkah urungkan dalam riwayat yang sama dengan gambar: {{key:Mod+Z}} mengurungkan hal terakhir yang Anda lakukan di kedua tab.

## Tampilan datar pada lembar

1. Buka tab lembar (atau tetap di {{ui:Model}}), lalu ketik {{cmd:VIEWBASE}} (atau `FLATSHOT`).
2. Pilih tampilan: {{key:Enter}} untuk depan, atau `T` (atas), `R` (kanan), `L` (kiri), `BA` (belakang), `BO` (bawah), `I` (isometrik).
3. {{key:Enter}} menampilkan garis tersembunyi, putus-putus; `H` membiarkannya tidak ditampilkan.
4. {{key:Enter}} menerapkan skala yang disarankan CadCraft: pada lembar, skala standar terbesar (seperti 1:20) yang memuat tampilan di bawah setengah kertas. Atau ketik sendiri: `1:50`, `2:1`.
5. Klik, atau ketik, tempat pusat tampilan.

Tampilan adalah satu referensi blok, `VIEW-FRONT-1` dan seterusnya: tepi yang terlihat pada layer VIEW-VISIBLE (0.5 mm), yang tersembunyi pada VIEW-HIDDEN (putus-putus, 0.25 mm). Pindahkan, beri dimensi dan plot seperti gambar lainnya. Ini adalah gambar solid saat Anda membuatnya: setelah mengubah solid, hapus tampilan dan jalankan {{cmd:VIEWBASE}} lagi. Untuk tampilan lainnya, jalankan sekali untuk setiap tampilan.

## Melihat sekeliling

Seret dengan roda untuk mengorbit, {{key:Shift}} + seret roda atau tombol kanan untuk geser, dan putar roda untuk zoom di kursor. Pada trackpad, dua jari untuk mengorbit dan cubit untuk zoom. Klik kanan tanpa menyeret adalah {{key:Enter}}, seperti pada tab lainnya. `3DORBIT` membuat tombol kiri dapat mengorbit hingga Anda menekan {{key:Enter}} atau {{key:Esc}}.

- {{ui:Tampilan}} (atau {{cmd:VIEW}}): Isometrik, Atas, Bawah, Depan, Belakang, Kiri, Kanan, Perspektif atau Paralel, dan Zoom ke semua.
- {{ui:Gaya}} (atau {{cmd:VSCURRENT}}, `VS`): Berbayang, Berbayang dengan tepi, Garis tersembunyi, Rangka kawat, atau Sinar-X.

Titik yang Anda klik menempel (snap) ke solid (sudut, tepi, muka) dan ke gambar 2D di tanah: ujung dan tengah garis serta busurnya, dan titik di sepanjangnya. Garis 2D tidak pernah dipilih di tab 3D. Saat perintah meminta objek 2D (EXTRUDE, REVOLVE, SWEEP), klik memilih satu, seret dari kiri ke kanan mengambil apa yang sepenuhnya berada di dalam jendela, dan seret dari kanan ke kiri mengambil apa yang dilintasinya, seperti pada tab {{ui:Model}}.

Kubus tampilan berada di pojok kanan atas tab 3D: klik muka, tepi atau sudut untuk melihat dari sana, seret untuk mengorbit, dan tombol rumah kembali ke tampilan isometrik. Itu adalah {{ui:Otomatis}}, awal dari {{ui:Penanda sudut}} di [Pengaturan CadCraft](topic:settings). Jika diatur ke {{ui:Kubus tampilan}}, tab {{ui:Model}} juga menampilkan kubus, melihat dari atas; mengklik sisi lain membuka tab 3D yang melihat dari sana. Jika diatur ke {{ui:Ikon sumbu}}, kedua tab menampilkan penanda sumbu sebagai gantinya.

## Solid dari program lain

Gambar dari program lain dapat memuat solid 3D, region, dan body (3DSOLID, REGION, BODY: program lain menyimpan bentuknya sebagai data ACIS). CadCraft menampilkan yang ada di ruang model pada tab 3D, dengan warna layer-nya dan tepinya sendiri, saat pertama kali Anda membuka tab; baris perintah kemudian menyatakan berapa yang digambar.

- Solid tampil apa adanya: Anda tidak dapat memilih, memindahkan, atau mengubahnya. Layer yang mati atau dibekukan menyembunyikannya.
- Menyimpan sebagai DWG menulis kembali setiap solid tanpa perubahan, dalam versi DWG apa pun, sehingga program lain mendapatkannya kembali. File DXF tidak menyimpannya: CadCraft hanya menuliskannya ke DWG, dan menyatakannya saat Anda menyimpan sebagai DXF.
- Yang digambar: muka datar, dan muka pada silinder, kerucut, bola, torus, serta permukaan spline sederhana, dengan tepi lurus, bulat, dan spline. Muka pada jenis permukaan lain, atau yang tidak dapat ditata CadCraft, tidak ditebak: ia dihilangkan dan didaftarkan, misalnya "Belum digambar (solid 3D): 2 muka pada spline-surface (sweepsur), permukaan yang belum digambar."
- Solid di dalam blok belum ditampilkan; "Tentang file ini" menghitungnya.

Muka melengkung digambar sebagai potongan datar kecil, berjarak sekitar 7.5° satu sama lain, sehingga solid melengkung tampak sedikit bersudut dari dekat.

## Simpan dan ekspor

Menyimpan mempertahankan model 3D, dalam DWG dan DXF. Setiap muka masuk sebagai muka 3D pada layer `CC-3D`, sehingga program lain menampilkan solid, dan CadCraft menyimpan salinan persisnya sendiri di dalam file, yang dibacanya kembali saat Anda membuka gambar lagi, dengan tampilan 3D seperti semula (kamera, proyeksi dan gaya visual). Muka 3D yang dibuat program lain masuk ke tab 3D sebagai muka lepas, dikelompokkan bersama sebagai satu grup. Muka 3D di dalam blok masuk satu kali untuk setiap referensi ke blok itu dalam model, ditempatkan dan diputar sesuai referensinya; di dalam blok itu sendiri, dan pada lembar, muka 3D digambar datar, sebagai garis tepinya.

{{ui:Ekspor}} di grup 3D mengunduh solid saja: GLB untuk penampil dan web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) atau STL untuk pencetakan 3D, dalam milimeter ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} menanyakan yang mana.

:::note
Model 3D berukuran sebenarnya. Gambar tanpa satuan dihitung dalam milimeter, sehingga `1000` adalah satu meter. Jika nanti Anda mengubah satuan gambar (Properti, dengan tidak ada yang dipilih), solid ikut diskalakan agar tetap berada di gambar, dan riwayat menyatakannya. Satu {{key:Mod+Z}} mengurungkan perubahan satuan dan penskalaan sekaligus.
:::
