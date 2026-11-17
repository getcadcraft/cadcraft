---
title: Pindahkan, salin, putar, skala, cerminkan, regangkan dan array
summary: Tata furnitur di dalam ruangan dengan perintah ubah dasar, menggunakan titik dasar, jarak yang diketik, dan urungkan.
keywords: pindahkan, salin, putar, skala, cerminkan, regangkan, array, gabungkan, matchprop, samakan properti, painter, arrayrect, arraypolar, array polar, hapus, explode, urungkan, ulangi, titik dasar, perpindahan, ubah, sejajarkan, distribusikan, rata garis, jarak merata
from: 8eaeee6c
---

## Yang akan Anda buat

Meja dengan satu kursi, disalin mengelilingi meja, diputar, dicerminkan, dan diubah ukurannya. Selama proses ini Anda menggunakan {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} dan {{cmd:UNDO}}.

## Gambar bagian-bagiannya

1. Ketik `REC` lalu tekan {{key:Enter}}, ketik `0,0` dan tekan {{key:Enter}}, lalu ketik `@1800,900` dan tekan {{key:Enter}}. Ini adalah meja.
2. Ketik `REC` lalu tekan {{key:Enter}}, ketik `300,-700` dan tekan {{key:Enter}}, lalu ketik `@450,450` dan tekan {{key:Enter}}. Ini adalah kursi, di bawah meja.
3. Klik {{ui:Batas}}.

## Pindahkan: titik dasar, lalu titik kedua

Setiap pemindahan, penyalinan, pemutaran, dan skala dimulai dari **titik dasar**: titik yang ikut terbawa, atau titik yang menjadi pusat putaran.

1. Klik kursi untuk memilihnya.
2. Ketik `M` lalu tekan {{key:Enter}}. Riwayat menampilkan `1 ditemukan`.
3. Pada `Tentukan titik dasar`, snap ke sudut kiri atas kursi (Titik ujung) lalu klik.
4. Pada `Tentukan titik kedua`, ketik `@0,200` lalu tekan {{key:Enter}}.

Kursi bergerak naik 200, mendekati meja.

:::tip
Ketik `D` pada `Tentukan titik dasar` untuk memberikan perpindahan sebagai gantinya: CadCraft kemudian meminta `Tentukan perpindahan`, dan Anda mengetik seberapa jauh ke samping dan ke atas, seperti `0,200` (tidak perlu `@`).
:::

## Salin, sebanyak yang Anda mau

1. Klik kursi.
2. Ketik `CO` lalu tekan {{key:Enter}}.
3. Snap ke sudut kiri bawah kursi dan klik sebagai titik dasar.
4. Ketik `@600,0` lalu tekan {{key:Enter}}. Salinan muncul 600 ke kanan.
5. Ketik `@600,0` lagi lalu tekan {{key:Enter}}. Salinan kedua muncul 1200 ke kanan dari aslinya.
6. Tekan {{key:Enter}} untuk mengakhiri perintah.

{{cmd:COPY}} terus berjalan sampai Anda menekan {{key:Enter}}. Setiap salinan ditempatkan sejauh jarak dari titik dasar ke titik yang Anda berikan. Titik `@` dihitung dari titik terakhir yang Anda masukkan, yang setelah salinan pertama adalah titik salinan itu, sehingga `@600,0` dua kali menghasilkan salinan di 600 dan 1200. Ketik `U` lalu tekan {{key:Enter}} untuk membatalkan salinan terakhir tanpa keluar dari perintah.

Anda seharusnya melihat tiga kursi berjajar di bawah meja.

:::tip
{{cmd:COPY}} untuk salinan di dalam satu gambar, yang ditempatkan dengan titik dasar. Untuk membawa objek ke gambar atau tab lain, atau untuk menempelkannya nanti, gunakan papan klip: {{key:Mod+C}}, lalu {{key:Mod+V}}. {{key:Mod+D}} membuat satu salinan yang ikut bergerak dengan penunjuk. Lihat [Salin, tempel, dan duplikat](topic:copy-paste).
:::

## Cerminkan baris ke sisi lain

1. Seret jendela silang (dari kanan ke kiri) di atas tiga kursi, tanpa menyentuh meja.
2. Ketik `MI` lalu tekan {{key:Enter}}.
3. Pada `Tentukan titik pertama garis cermin`, snap ke Titik tengah sisi kiri meja dan klik.
4. Pada `Tentukan titik kedua garis cermin`, snap ke Titik tengah sisi kanan meja dan klik.
5. Pada `Hapus objek sumber? [Ya/Tidak (N)] <N>`, tekan {{key:Enter}} untuk menyimpannya.

Anda seharusnya melihat tiga kursi di bawah meja dan tiga kursi cerminan di atasnya. Teks dalam pilihan yang dicerminkan tetap terbaca: teks ditempatkan secara cermin tetapi tidak ditulis terbalik.

## Putar kursi

1. Klik kursi paling kanan di bawah meja.
2. Ketik `RO` lalu tekan {{key:Enter}}.
3. Snap ke sudut kanan bawah kursi dan klik sebagai titik dasar.
4. Ketik `90` lalu tekan {{key:Enter}}.

Kursi berputar 90 derajat berlawanan arah jarum jam mengelilingi titik dasar. Sudut negatif memutar searah jarum jam. Alih-alih mengetik, Anda dapat mengklik titik kedua: sudutnya diukur dari titik dasar ke titik tersebut.

## Skala meja

1. Pilih meja.
2. Ketik `SC` lalu tekan {{key:Enter}}.
3. Snap ke sudut kiri bawah meja dan klik sebagai titik dasar.
4. Ketik `1.2` lalu tekan {{key:Enter}}.

Meja menjadi 20% lebih besar, membesar menjauhi titik dasar. Faktor di bawah 1 membuatnya lebih kecil.

:::note
Jika Anda mengklik sebuah titik alih-alih mengetik faktor skala, faktornya adalah jarak dari titik dasar ke titik tersebut. Mengklik satu satuan gambar dari titik dasar memberikan faktor 1. Biasanya Anda ingin mengetik angkanya.
:::

## Urungkan dan ulangi

- {{key:Mod+Z}}, tombol {{ui:Urungkan}}, atau `U` lalu {{key:Enter}} mengurungkan perintah terakhir. Satu perintah utuh adalah satu langkah: mengurungkan {{cmd:COPY}} yang membuat lima salinan akan menghapus kelima salinan itu.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, tombol {{ui:Ulangi}}, atau `REDO` mengembalikannya.
- Riwayat menyebutkan apa yang diurungkan ("Diurungkan COPY").

CadCraft menyimpan 500 langkah terakhir. Pengaturan lapisan (nyala, bekukan, kunci, warna) adalah pengaturan, bukan suntingan, dan tidak diurungkan.

## Regangkan ruangan agar lebih lebar

{{cmd:STRETCH}} (`S`, atau {{ui:Regangkan}}) hanya memindahkan apa yang berada di dalam jendela silang: sudut dan ujung garis di dalamnya ikut bergerak, sedangkan yang lain tetap di tempatnya, sehingga ruangan menjadi lebih lebar, bukan ikut berpindah.

1. Ketik `S` lalu tekan {{key:Enter}}.
2. Seret jendela dari kanan ke kiri di atas dinding sebelah kanan, sehingga mencakup sudut dinding dan ujung apa pun yang bertemu dengannya.
3. Tekan {{key:Enter}}.
4. Klik titik dasar, lalu ketik `@600,0` dan tekan {{key:Enter}}.

Persegi panjang menjadi 600 lebih lebar; garis yang berakhir di dinding tetap berakhir di dinding. Busur dengan satu ujung di dalam tetap mempertahankan tingginya, lingkaran dan teks ikut bergerak saat pusat atau titik sisipnya berada di dalam, dan dimensi mengukur panjang barunya. Objek yang dipilih satu per satu, tanpa jendela, hanya dipindahkan.

Anda juga dapat memilih lebih dulu: seret jendela silang (atau laso silang) di atas dinding tanpa perintah yang sedang berjalan, lalu ketik `S`. STRETCH mengambil pilihan itu dan meregangkan apa yang ada di dalam jendelanya, sama seperti jika Anda menyeretnya pada prompt perintahnya sendiri.

## Array: baris dan kolom, atau mengelilingi sebuah pusat

{{cmd:ARRAY}} (`AR`, atau {{ui:Array}}) menyalin pilihan dalam kisi atau dalam lingkaran.

1. Pilih satu kursi lalu ketik `AR`, tekan {{key:Enter}}. Tekan {{key:Enter}} untuk Persegi panjang.
2. Pratinjau 4 kolom dan 3 baris muncul. Ketik `COU`, tekan {{key:Enter}}, lalu `5` untuk kolom dan `2` untuk baris.
3. Ketik `S`, tekan {{key:Enter}}, lalu `600` antar kolom dan `-900` antar baris (negatif berarti ke bawah).
4. Tekan {{key:Enter}} untuk membuat salinan.

Untuk lingkaran kursi mengelilingi meja, pilih `PO` (Polar) sebagai gantinya, klik pusat meja, dan atur `I` (item), `F` (sudut isi: 360 untuk seluruh putaran, 180 untuk setengah) dan `ROT` (apakah salinan berputar menghadap pusat). {{cmd:ARRAYRECT}} dan {{cmd:ARRAYPOLAR}} melewati pertanyaan ini.

## Gabungkan potongan menjadi satu polyline

{{cmd:JOIN}} (`J`, atau {{ui:Ubah}} › {{ui:Lainnya}} › {{ui:Gabungkan}}): pilih garis, busur, dan polyline terbuka yang ujungnya bertemu, lalu tekan {{key:Enter}}. Semuanya menjadi satu polyline, tertutup jika mengelilingi seluruhnya, yang kemudian dapat Anda offset sekaligus. Garis yang berada pada satu garis lurus menjadi satu garis meski ada celah di antaranya; busur dari satu lingkaran menjadi satu busur, atau lingkaran.

## Samakan properti

{{cmd:MATCHPROP}} (`MA`, atau {{ui:Ubah}} › {{ui:Lainnya}} › {{ui:Samakan properti}}): klik objek yang tampilannya ingin Anda tiru, lalu pilih objek yang akan diubah dan tekan {{key:Enter}}. Objek tersebut mengambil layer dan warnanya; teks mengambil tingginya, dimensi mengambil ukurannya, hatch mengambil polanya. Ketik `S` (Pengaturan) pada pertanyaan kedua untuk mematikan salah satu dari ini.

## Sejajarkan objek

**Berdasarkan titik.** {{cmd:ALIGN}} (`AL`, atau {{ui:Ubah}} › {{ui:Lainnya}} › {{ui:Sejajarkan}}): pilih objek lalu tekan {{key:Enter}}, kemudian klik sebuah titik pada objek tersebut (sumber) dan tempat titik itu seharusnya berada (tujuan).

- Satu pasang memindahkannya. Tekan {{key:Enter}} pada `Tentukan titik sumber kedua` untuk berhenti di sana.
- Dua pasang juga memutarnya, sehingga garis di antara dua titik sumber berada di sepanjang garis di antara dua titik tujuan. CadCraft kemudian menanyakan `Skala objek berdasarkan titik penyejajaran?`: `Y` membuatnya juga lebih besar atau lebih kecil sebesar itu.
- Pasangan ketiga mencerminkannya jika kedua titiknya berada di sisi berlawanan dari garis tersebut.

**Tepi dan jarak.** {{ui:Ubah}} › {{ui:Lainnya}} › {{ui:Sejajarkan dan distribusikan}} (atau `ALIGNPANEL`) membuka panel kecil di atas gambar. Pilih objek, lalu:

- pilih apa yang akan dijajarkan di {{ui:Sejajarkan terhadap}} (seluruh pilihan, objek pertama atau terakhir yang Anda pilih, atau titik yang Anda klik) dan klik {{ui:Kiri}}, {{ui:Pusat}}, {{ui:Kanan}}, {{ui:Atas}}, {{ui:Tengah}} atau {{ui:Bawah}};
- atau pilih {{ui:Celah sama}} atau {{ui:Pusat berjarak sama}} dan klik {{ui:Ke samping}} atau {{ui:Ke atas dan bawah}}: dua objek terluar tetap, dan sisanya diberi jarak merata di antaranya (minimal tiga objek).

Setiap klik adalah satu langkah urungkan, dan pilihan tetap, sehingga Anda dapat mencoba yang lain. Setiap objek dihitung berdasarkan kotak batasnya, dalam UCS jika sudah diatur. Di baris perintah, hal yang sama adalah {{cmd:ALIGNTO}} dan {{cmd:DISTRIBUTE}}.

## Hapus dan urai

- {{cmd:ERASE}} (`E`, atau {{key:Delete}}) menghapus objek yang dipilih.
- {{cmd:EXPLODE}} (`X`) memecah polyline menjadi garis dan busur, referensi blok menjadi objek-objeknya, dan dimensi menjadi garis, mata panah, dan teks. Dimensi yang diurai tidak lagi mengukur dirinya sendiri.

## Kesalahan umum

- **Mengetik jarak tanpa `@` pada titik kedua.** `600,0` adalah titik absolut 600,0, bukan "600 ke kanan". Gunakan `@600,0`, atau `600` saja dengan crosshair mengarah ke kanan.
- **Putarannya ke arah yang salah.** Sudut positif berputar berlawanan arah jarum jam.
- **Urungkan menghapus lebih banyak dari yang diharapkan.** Satu urungkan mengambil kembali seluruh perintah terakhir, termasuk setiap salinan yang dibuatnya.
- **Perintah tidak meminta memilih objek.** Objek sudah dipilih, sehingga perintah memakainya. Tekan {{key:Esc}} terlebih dulu untuk memulai tanpa ada yang dipilih.
