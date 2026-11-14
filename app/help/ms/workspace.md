---
title: Skrin CadCraft
summary: Lawatan setiap bar, panel dan tab dalam aplikasi lukisan, mengikut nama yang ia ada pada skrin.
keywords: skrin, antara muka, bar alat, reben, panel, baris arahan, bar status, tab, tab helaian, sifat, panel lapisan, panduan
from: b5a33388
---

Skrin mempunyai tujuh bahagian. Dari atas ke bawah: bar aplikasi, bar alat, kawasan lukisan dengan panel di setiap sisi, tab di bawah lukisan, baris arahan dan bar status.

## Bar aplikasi

Bar nipis di bahagian paling atas milik laman, bukan lukisan. Ia menunjukkan tanda CadCraft, nama aplikasi, versi yang anda jalankan, pautan ke halaman aplikasi, butang {{ui:Bantuan}} (atau {{key:F1}}), butang {{ui:Simpan untuk luar talian}}, butang {{ui:Skrin penuh}} dan dua butang tema, {{ui:Kertas}} dan {{ui:Model}}.

Butang {{ui:Tetapan}} (gear) menyimpan tetapan CadCraft sendiri dan tetapan yang dikongsi oleh setiap aplikasi: lihat [Tetapan CadCraft](topic:settings).

{{ui:Simpan untuk luar talian}} menyimpan salinan CadCraft, termasuk pembaca DWG, dalam pelayar ini supaya ia dibuka tanpa sambungan. Labelnya menunjukkan keadaan: "Menyimpan N daripada M", "Sedia untuk luar talian", "Tidak dapat menyimpan" atau "Luar talian tidak tersedia". Lihat [Bekerja luar talian](common:offline).

:::note
Butang {{ui:Kertas}} dan {{ui:Model}} pada bar aplikasi hanya menukar warna skrin: {{ui:Kertas}} ialah tema cerah, {{ui:Model}} ialah tema gelap. Ia tiada kaitan dengan tab {{ui:Model}} di bawah lukisan, yang bertukar antara lukisan dan helaiannya.
:::

Butang {{ui:Skrin penuh}}, atau {{key:Ctrl+Shift+F}} (kekunci Control pada setiap komputer, termasuk Mac), bertukar antara tiga mod skrin: biasa, skrin penuh, dan skrin penuh dengan bar disembunyikan. Dengan bar disembunyikan, gerakkan penunjuk ke tepi atas skrin untuk membawanya kembali.

## Bar alat

Di bawah bar aplikasi ialah bar alat. Setiap butang menjalankan arahan, sama seperti jika anda menaipnya, jadi baris arahan bertanya soalan yang sama dengan kedua-dua cara. Letakkan penunjuk pada butang untuk melihat alias arahannya. Kumpulannya ialah:

| Kumpulan | Butang |
|---|---|
| Fail | {{ui:Baharu}}, {{ui:Buka}}, {{ui:Simpan}}, {{ui:Simpan sebagai}}, {{ui:Plot}} |
| Lukis | {{ui:Garisan}}, {{ui:Polygaris}}, {{ui:Bulatan}}, {{ui:Lengkok}}, {{ui:Segi empat tepat}}, {{ui:Poligon}}, {{ui:Elips}}, {{ui:Teks}}, {{ui:Perenggan}}, {{ui:Hatch}}, dan {{ui:Lagi}}: {{ui:Titik}}, {{ui:Garis pembinaan}} dan {{ui:Sinar}} (lihat [Garis pembinaan dan sinar](topic:construction-lines)) |
| Ubah | {{ui:Alih}}, {{ui:Salin}}, {{ui:Putar}}, {{ui:Skala}}, {{ui:Cermin}}, {{ui:Regang}}, {{ui:Ofset}}, {{ui:Pangkas}}, {{ui:Panjangkan}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Pecahkan}}, {{ui:Padam}}, dan {{ui:Lagi}}: {{ui:Tatasusunan}}, {{ui:Cantum}}, {{ui:Padankan sifat}}, {{ui:Pecah}} dan {{ui:Panjangkan}} |
| Anotasi | {{ui:Lelurus}}, {{ui:Sejajar}}, {{ui:Sudut}}, {{ui:Jejari}}, {{ui:Diameter}} (dimensi), {{ui:Petunjuk}} (multipetunjuk), dan {{ui:Lagi}}: {{ui:Sambung dimensi}}, {{ui:Dimensi garis dasar}} dan {{ui:Awan semakan}} |
| Parametrik | {{ui:Auto}}, {{ui:Kekang}}, {{ui:Dimensi}}, {{ui:Parameter}}, dan {{ui:Lagi}} dengan setiap kekangan (lihat [Kekang lukisan](topic:constraints)) |
| Blok | {{ui:Buat}}, {{ui:Selit}}, {{ui:Pustaka}}, dan {{ui:Lagi}}: {{ui:Sunting blok}} dan {{ui:Takrifkan atribut}} |
| Helaian | {{ui:Helaian baharu}}, {{ui:Viewport}} |
| Sunting | {{ui:Buat asal}}, {{ui:Buat semula}}, {{ui:Salin}} (ke papan keratan), {{ui:Tampal}}, dan {{ui:Lagi}}: menu dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tampal}}, {{ui:Tampal di tempat yang sama}}, {{ui:Pendua dan alih}}, {{ui:Padam}}, {{ui:Pilih semua}}, {{ui:Nyahpilih semua}}, {{ui:Pilih pantas}}, {{ui:Pilih serupa}} dan {{ui:Cari dan ganti}}, setiap satu dengan kekuncinya |
| Pandangan | {{ui:Lingkungan}}, {{ui:Tetingkap (W)}}, {{ui:Sebelumnya (P)}}, dan {{ui:Lagi}}: {{ui:Ukur jarak}}, {{ui:Luas}}, {{ui:Ukur (jejari, sudut …)}}, dan skrin pecah: {{ui:Bahagi sebelah menyebelah}}, {{ui:Bahagi bertindan}}, {{ui:Empat anak tetingkap}}, {{ui:Satu anak tetingkap}} (lihat [Bahagi skrin](topic:split-screen)), dan {{ui:Pusing paparan 90° ke kiri}}, {{ui:Pusing paparan 90° ke kanan}}, {{ui:Kembali ke dunia}} (lihat [Pusing paparan](topic:ucs-and-turned-view)) |

{{ui:Salin}} dalam kumpulan {{ui:Ubah}} ialah arahan {{cmd:COPY}} (titik asas, kemudian ke mana setiap salinan pergi); {{ui:Salin}} dalam kumpulan {{ui:Sunting}} meletakkan objek pada papan keratan untuk {{ui:Tampal}}. Lihat [Salin, tampal dan pendua](topic:copy-paste). Butang arahan yang sedang berjalan kekal diserlahkan sehingga arahan itu tamat. Tip alat menamakan pintasan Windows ("Ctrl+O"); pada Mac, {{key:Mod+O}} juga berfungsi.

Pada tetingkap pendek (contohnya komputer riba dengan paparan diskalakan kepada 125 % atau lebih), bar alat tidak sekali-kali mengambil tempat lukisan: apabila lukisan akan mendapat terlalu sedikit ketinggian, butang menggugurkan perkataan di bawah ikonnya dan nama kumpulan (letakkan penunjuk pada butang untuk namanya), dan jika itu masih tidak mencukupi bar alat menjadi satu baris yang boleh ditatal ke sisi. Tetingkap yang lebih tinggi membawa semula perkataan.

## Panel kiri

Panel di sebelah kiri mempunyai tiga bahagian.

- **{{ui:Lapisan}}.** Setiap lapisan dalam lukisan, dengan titik penuh pada lapisan semasa. Klik nama untuk menjadikan lapisan itu semasa. Setiap baris mempunyai sampel warna (klik untuk memilih warna) dan empat butang: hidup/mati (mata), beku (kepingan salji), kunci (gembok) dan plot (pencetak). {{ui:Lapisan baharu}} membuka kotak untuk menambah satu. Lihat [Susun lukisan dengan lapisan](topic:layers).
- **{{ui:Blok}}.** Blok yang ditakrifkan dalam lukisan, berapa kali setiap satu digunakan, dan butang {{ui:Selit}} bagi setiap satu. Lihat [Buat dan selitkan blok](topic:blocks).
- **{{ui:Lukisan}}.** Fakta tentang fail yang dibuka: nama (dengan "(diubah)" apabila ada suntingan yang belum disimpan), format, saiz, unit, bilangan objek, lapisan, blok dan helaian. Selepas anda membuka fail, kotak "Mengenai fail ini" menyenaraikan apa-apa yang CadCraft tidak dapat tunjukkan atau terpaksa tukar.

## Kawasan lukisan

Bahagian tengah skrin ialah lukisan. Penunjuk ialah silang. Apabila CadCraft mahukan titik, penanda kecil dan label ("Titik hujung", "Titik tengah") menunjukkan di mana snap objek akan jatuh. Apabila ia mahukan objek, silang mempunyai kotak pilih dan objek di bawahnya menyala.

Apabila lukisan kosong, kad "Mula lukisan" menunjukkan beberapa arahan pertama. Ia hilang sebaik sahaja anda menjalankan arahan atau membuka fail. Anda boleh melepaskan fail DWG atau DXF di mana-mana sahaja di kawasan ini untuk membukanya.

## Tab di bawah lukisan

Di bawah lukisan terdapat tab: {{ui:Model}} dahulu, kemudian {{ui:3D}}, kemudian satu tab bagi setiap helaian (layout), kemudian butang {{ui:+}}.

- {{ui:Model}} ialah lukisan itu sendiri, pada saiz penuh, dalam unit lukisan.
- {{ui:3D}} menunjukkan lukisan terletak di atas tanah dan pepejal yang dibuat daripadanya. Semasa ia dipaparkan, bar alat mempunyai kumpulan {{ui:3D}} menggantikan kumpulan lukisan. Lihat [Model dalam 3D](topic:3d-solids).
- Setiap tab helaian ialah sehelai kertas dengan blok tajuk dan viewport ke atas model. Apa yang anda lukis di sana adalah dalam unit kertas (milimeter atau inci). Klik dua kali di dalam viewport untuk bekerja pada model melaluinya (lihat [Bekerja pada model melalui viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Nama helaian yang panjang dipotong pendek pada tabnya; letakkan penunjuk pada tab untuk nama penuh. Dengan banyak helaian, {{ui:Tetapan}} › {{ui:CadCraft}} › {{ui:Tab helaian}} › {{ui:Nombor helaian sahaja}} hanya menunjukkan nombor setiap helaian (A-101) pada tabnya.
- {{ui:+}} membuat helaian baharu dengan sempadan, blok tajuk dan satu viewport. Ia sama dengan arahan {{cmd:LAYOUT}}.
- Klik dua kali tab helaian untuk menamakannya semula. Dengan tab difokuskan, {{key:Left}} dan {{key:Right}} bergerak antara tab.

Setiap tab mengekalkan zum dan pan sendiri. Lihat [Sediakan helaian](topic:sheets-and-viewports).

## Panel kanan: Sifat

Panel di sebelah kanan berubah mengikut apa yang dipilih.

- **Tiada yang dipilih, pada tab {{ui:Model}}:** tajuk berbunyi {{ui:Tetapan semasa}}. Di sini anda menetapkan {{ui:Lapisan}}, {{ui:Warna}} dan {{ui:Ketinggian teks}} untuk objek baharu, {{ui:Unit}} lukisan, dan saiz untuk dimensi baharu ({{ui:Ketinggian teks}}, {{ui:Saiz anak panah}}, {{ui:Perpuluhan}}, {{ui:Skala keseluruhan}}).
- **Tiada yang dipilih, pada helaian:** tajuk berbunyi "Helaian:" dan nama helaian. Anda boleh menamakan semula helaian, menukar {{ui:Kertas}} dan {{ui:Orientasi}}, {{ui:Plot helaian ini}} atau {{ui:Padam helaian ini}}. Tetapan untuk objek baharu mengikut di bawah.
- **Satu objek dipilih:** jenisnya sebagai tajuk (Garisan, Bulatan, Teks, Dimensi, Viewport …), kemudian lapisan, warna dan geometrinya. Taip nilai baharu dan tekan {{key:Enter}} untuk menukarnya.
- **Beberapa objek dipilih:** berapa banyak, dan {{ui:Lapisan}} serta {{ui:Warna}} yang sama. Menukar mana-mana satu akan menukar kesemuanya. "Pelbagai" bermaksud ia berbeza.

Lihat [Sunting dengan grip dan Sifat](topic:grips-and-properties).

Di bawahnya, panel {{ui:Parameter}} dibuka apabila anda memilih {{ui:Parameter}} atau menaip {{cmd:PARAMETERS}}: setiap parameter dan kekangan dimensi dalam satu jadual. Lihat [Gunakan parameter dan persamaan](topic:parameters).

## Baris arahan

Di bahagian bawah ialah baris arahan: sejarah apa yang anda lakukan, dan di bawahnya gesaan.

- Label gesaan berbunyi `Arahan:` apabila tiada apa yang berjalan. Semasa arahan berjalan, ia menunjukkan soalan, pilihannya dalam kurungan segi empat dan nilai lalai dalam kurungan sudut, contohnya `Tentukan jejari bulatan [Diameter] <500>:`.
- Semasa anda menaip nama arahan, petunjuk di sebelah kanan mencadangkan arahan yang sepadan. Tekan {{key:Tab}} untuk menerima yang pertama. "No such command" bermaksud tiada yang sepadan.
- {{key:Up}} dan {{key:Down}} memanggil semula baris yang anda taip sebelum ini.
- Sejarah menyimpan 400 baris terakhir. Mesej daripada arahan, ukuran daripada {{cmd:DIST}} dan {{cmd:LIST}}, serta laporan simpan dan plot dipaparkan di sini.

## Bar status

Baris paling bawah ialah bar status.

- **Koordinat** di sebelah kiri: X dan Y silang. Semasa arahan mempunyai titik asas, ia turut menunjukkan jarak dan sudut daripadanya, contohnya `Δ 1200 < 90°`.
- **Mesej** di tengah, seperti "Ortho hidup" atau "Lapisan semasa: Walls". Ia pudar selepas beberapa saat.
- **{{ui:Grid}}**, **{{ui:Ortho}}**, **{{ui:Kutub}}**, **{{ui:Snap}}**, **{{ui:Jejak}}**, **{{ui:Dyn}}** dan **{{ui:LWT}}** di sebelah kanan. Setiap satu ialah suis; butang yang ditekan ialah hidup. {{ui:LWT}} menunjukkan ketebalan garisan pada skrin (lihat [Ketebalan garisan dan jenis garisan](topic:units-papers-scales#line-weights-and-linetypes)). Anak panah kecil di sebelah {{ui:Snap}} membuka {{ui:Snap objek}}, tempat anda menanda snap mana yang aktif. Lihat [Snap ke titik pada objek](topic:object-snaps).

## Kotak dialog Plot ke PDF

{{ui:Plot}} (atau {{key:Mod+P}}) membuka kotak dialog {{ui:Plot ke PDF}}, dengan tetapan di sebelah kiri dan pratonton langsung di sebelah kanan. Lihat [Plot ke PDF](topic:plot-pdf).

## Bantuan

{{key:F1}} atau butang {{ui:Bantuan}} membuka bantuan ini sebagai panel sisi; lukisan kekal boleh digunakan di sebelahnya. Ia berfungsi tanpa sambungan. {{key:F1}} sekali lagi, atau {{key:Esc}} di dalam panel, menutupnya. Lihat [Menggunakan bantuan ini](common:help).
