---
title: Sediakan helaian dengan blok tajuk dan viewport
summary: Buat helaian (layout) dengan sempadan dan blok tajuk, tetapkan skala viewport, tambah viewport kedua untuk butiran, dan isikan blok tajuk.
keywords: layout, helaian, ruang kertas, viewport, mview, vpview, blok tajuk, skala, saiz kertas, sempadan, vports, skala plot, mspace, pspace, ruang model, masuk viewport, klik dua kali viewport
from: 45a45de8
---

## Apa yang anda akan buat

Helaian A3 dengan blok tajuk, keseluruhan pelan dalam satu viewport pada 1:100, dan viewport kedua yang menunjukkan satu sudut pada 1:20.

## Model dan helaian

Anda melukis bangunan pada tab {{ui:Model}}, pada saiz penuh: dinding 6 m ialah 6000 unit panjang dalam milimeter. **Helaian** (layout) ialah sekeping kertas, diukur dalam milimeter atau inci. **Viewport** ialah tingkap yang dipotong pada helaian dan menunjukkan model pada skala.

## Sebelum anda mula

1. Buka atau lukis pelan pada tab {{ui:Model}}.
2. Tekan {{key:Esc}} supaya tiada apa dipilih.
3. Dalam {{ui:Current settings}}, tetapkan {{ui:Units}} kepada unit yang anda lukis, contohnya {{ui:Millimeters}}.

Unit penting: skala viewport seperti 1:100 bermaksud satu milimeter pada kertas menunjukkan 100 milimeter sebenar, jadi CadCraft perlu tahu apa itu satu unit lukisan. Lukisan yang dibiarkan sebagai {{ui:Unitless}} dianggap dalam unit kertas (milimeter pada kertas ISO, inci pada kertas US).

## Buat helaian

1. Klik butang {{ui:+}} di sebelah kanan tab di bawah lukisan, atau taip `LAYOUT` dan tekan {{key:Enter}}, atau klik {{ui:New sheet}}.

Tab baharu, `Layout1`, dibuka. Anda sepatutnya nampak helaian di atas meja yang lebih gelap: sempadan, blok tajuk di sudut kanan bawah dan satu viewport di atasnya yang menunjukkan keseluruhan model pada skala standard terbesar yang muat. Sejarah menamakan kertasnya: ISO A3 bagi lukisan metrik dan tanpa unit, Tabloid (ANSI B) bagi lukisan dalam inci atau kaki.

2. Klik {{ui:Extents}} untuk memuatkan helaian pada skrin.

## Pilih kertas

1. Tekan {{key:Esc}} supaya tiada apa dipilih. Tajuk panel kanan berbunyi "Helaian: Layout1".
2. Dalam {{ui:Name}}, taip `A-101 Plan` dan tekan {{key:Enter}}. Tab dinamakan semula.
3. Dalam {{ui:Paper}}, pilih saiz.
4. Dalam {{ui:Orientation}}, pilih {{ui:Landscape}} atau {{ui:Portrait}}.

:::warning
Menukar kertas tidak mengalih atau mengubah saiz apa yang sudah ada pada helaian. Selepas menukarnya, semak sama ada sempadan, blok tajuk dan viewport masih muat, dan alih atau ubah saiznya dengan grip. Menukar antara kertas milimeter dan inci mengekalkan nombor, jadi semuanya berubah saiz: bar status memberi amaran.
:::

## Tetapkan skala viewport

1. Klik bingkai viewport (tepinya). Tajuk panel berbunyi "Viewport".
2. Dalam {{ui:Scale}}, pilih `1:100`.

Model dalam viewport dilukis semula pada 1:100, dipusatkan di tempat ia berada. Senarai itu menawarkan skala metrik dari 10:1 hingga 1:10000; lukisan dalam inci atau kaki juga mendapat skala seni bina (1/4" = 1'-0" dan seumpamanya) dan skala kejuruteraan (1" = 20' dan seumpamanya). {{ui:Fit the whole model}} menetapkan skala tepat yang bukan standard, yang memuatkan semuanya.

3. Jika pelan tidak lagi dipusatkan, tukar {{ui:X}} dan {{ui:Y}} di bawah {{ui:View center (model)}} dalam panel kanan: ia ialah titik model yang ditunjukkan di tengah viewport.

## Tunjukkan sebahagian model dalam viewport

1. Dengan viewport dipilih, klik {{ui:Pick a window on the model…}} dalam panel kanan (atau taip `VPVIEW` dan tekan {{key:Enter}}).
2. CadCraft bertukar ke tab {{ui:Model}}. Klik satu sudut kawasan untuk ditunjukkan.
3. Klik sudut bertentangan.

Anda kembali ke helaian, dan viewport menunjukkan kawasan itu pada skala standard terbesar yang muat; sejarah menyatakan yang mana. {{ui:Show the whole model}} kembali kepada keseluruhan pelan pada skala standard.

## Tambah viewport kedua untuk butiran

1. Sediakan ruang pada helaian: pilih viewport pertama dan seret grip sudut untuk menjadikannya lebih kecil.
2. Taip `MV` dan tekan {{key:Enter}}, atau klik {{ui:Viewport}} dalam kumpulan Helaian.
3. Klik satu sudut viewport baharu pada helaian.
4. Klik sudut bertentangan.

Viewport baharu menunjukkan keseluruhan model. Sejarah menyatakan skalanya.

5. Klik bingkai viewport baharu.
6. Klik {{ui:Pick a window on the model…}} dan pilih kawasan kecil di sekeliling satu sudut pelan.
7. Dalam {{ui:Scale}}, pilih `1:20`.

Bingkai viewport berada pada lapisan `Viewports`, yang ditetapkan supaya tidak diplot, jadi bingkai kelihatan pada skrin tetapi tidak dalam PDF.

## Isikan blok tajuk

Blok tajuk dibuat daripada garisan dan teks biasa pada lapisan `Title block`. Ia bermula dengan nama lukisan, skala viewport pertama, tarikh hari ini dan nombor helaian.

1. Klik dua kali pada teks tajuk yang besar. Kotak penyuntingan dibuka di atasnya.
2. Taip tajuk helaian.
3. Klik {{ui:OK}}, atau tekan {{key:Mod+Enter}}.

Buat perkara yang sama untuk medan lain. Gunakan {{cmd:TEXT}} untuk menulis dalam sel kosong "DRAWN BY". Teks SCALE tidak mengemas kini sendiri apabila anda menukar skala viewport: sunting dengannya secara manual.

## Lukis pada helaian

Apa-apa yang anda lukis pada tab helaian berada di atas kertas, dalam unit kertas: teks 3.5 tinggi ialah 3.5 mm tinggi pada helaian ISO. Nota, anak panah utara dan sempadan helaian tergolong di sini.

Untuk menukar pelan itu sendiri, pergi ke tab {{ui:Model}}, atau bekerja melalui viewport (bahagian seterusnya); setiap viewport menunjukkan perubahan itu.

## Bekerja pada model melalui viewport

1. Klik dua kali di dalam viewport, jauh dari bingkainya. Atau taip `MS` dan tekan {{key:Enter}}: dengan satu viewport pada helaian ia terus masuk; dengan beberapa, klik di dalam yang anda mahukan.

Bingkai dilukis lebih tebal, sejarah menyatakan anda berada di dalam, dan tab helaian kekal dipilih. Apa-apa yang anda lukis atau ubah kini berada pada model, dalam unit model, seperti pada tab {{ui:Model}}: garisan yang dilukis dalam viewport pada 1:100 ialah dalam milimeter sebenar. Lapisan yang dibekukan dalam viewport ini tidak boleh dipilih di sini.

2. Putar roda atau seret dengan butang tengah untuk zum dan pan apa yang viewport tunjukkan. Helaian kekal di tempatnya.
3. Klik dua kali di mana-mana di luar bingkai, atau taip `PS` dan tekan {{key:Enter}}.

Anda kembali ke helaian. Viewport mengekalkan pandangan yang anda tinggalkan; {{key:Mod+Z}} mengembalikan pandangan lama dalam satu langkah. Klik mana-mana tab di bawah lukisan juga meninggalkan viewport.

:::note
Viewport yang paparannya dikunci ({{ui:Display locked}} dalam {{ui:Properties}}) mengekalkan pandangannya: di dalamnya, pan dan zum menggerakkan keseluruhan helaian. Viewport yang dimatikan tidak boleh dimasuki.
:::

## Label pandangan dengan namanya

Tajuk pandangan di bawah viewport boleh menunjukkan nama pandangan viewport dan sentiasa mengikutinya:

1. Beri pandangan itu nama: pilih bingkai viewport dan isi {{ui:View name}} dalam {{ui:Properties}} — atau simpan pandangan pada tab {{ui:Model}} dengan {{cmd:NAMEDVIEW}} dan, dengan viewport dipilih, taip `VPVIEW`, `V` dan nama pandangan: viewport menunjukkan pandangan itu dan mengambil namanya.
2. Taip `VIEWLABEL` (`VL`) dan tekan {{key:Enter}}, kemudian klik tempat label itu pergi ({{key:Enter}} meletakkannya di bawah sudut kiri bawah viewport).

Apabila nama pandangan berubah, label berubah bersamanya, dalam langkah buat asal yang sama.

## Bekukan lapisan dalam satu viewport

Untuk menyembunyikan lapisan dalam satu viewport tetapi tidak yang lain (perabot dalam butiran, contohnya):

1. Pilih bingkai viewport, atau bekerja di dalamnya (klik dua kali).

Panel {{ui:Layers}} mendapat satu lagi butang pada setiap baris, dan baris di atas senarai menyatakannya.

2. Klik butang itu pada baris lapisan.

Lapisan hilang dari viewport itu sahaja. Klik sekali lagi untuk mencairkannya; {{key:Mod+Z}} membatalkan mana-mana satu. Untuk beberapa lapisan atau viewport sekali gus, taip `VPLAYER`: `F` untuk membekukan atau `T` untuk mencairkan, nama lapisan (`A-*` mengambil setiap lapisan yang bermula dengan A-), kemudian `C` untuk semasa, `A` untuk semua atau `S` untuk memilih. `VPLAYER` `V` (Vpvisdflt) memilih lapisan yang viewport baharu bermula dalam keadaan beku.

## Lebih banyak helaian

Setiap {{ui:+}} menambah satu helaian lagi (`Layout2`, `Layout3` …) dengan nombor helaian seterusnya. Untuk memadam helaian yang dibuka, tekan {{key:Esc}} dan klik {{ui:Delete this sheet}} dalam panel kanan. Ia dipadam tanpa bertanya; {{key:Mod+Z}} membawanya kembali.

Plot helaian dengan {{ui:Plot this sheet}} atau {{key:Mod+P}}; lihat [Plot ke PDF](topic:plot-pdf).

## Ralat lazim

- **Viewport tidak menunjukkan apa-apa.** Model kosong, atau pandangan diarahkan ke tempat lain. Pilih bingkai dan klik {{ui:Show the whole model}}.
- **Senarai skala hanya menunjukkan nisbah dan tiada skala kaki-dan-inci.** Tetapkan {{ui:Units}} kepada {{ui:Inches}} atau {{ui:Feet}} pada tab {{ui:Model}}.
- **1:100 kelihatan sepuluh kali terlalu besar atau kecil.** Unit lukisan salah. Tetapkan {{ui:Units}} kepada apa sebenarnya satu unit itu.
- **Mengklik pelan dalam viewport tidak memilih apa-apa.** Pada helaian anda memilih objek helaian itu sendiri. Klik dua kali di dalam viewport dahulu untuk bekerja pada pelan melaluinya.
- **Klik di luar viewport tidak melakukan apa-apa.** Anda berada di dalam viewport: klik dua kali di luarnya, atau taip `PS`, untuk bekerja pada helaian semula.
- **"Viewport diletakkan pada helaian. Buka tab helaian (atau buat satu dengan LAYOUT) dahulu."** {{cmd:MVIEW}} hanya berfungsi pada tab helaian.
