---
title: Model dalam 3D
summary: Lihat lukisan dalam 3D pada tab 3D dan buat pepejal ringkas daripadanya: ekstrud (dengan cerun tarik atau sepanjang laluan), putar, tolak dan tarik muka, kotak, silinder dan baji, cantum, tolak dan persilangan, kemudian alih, salin, putar dan padam, serta letakkan pandangan rata 2D daripadanya pada helaian.
keywords: 3d, tiga d, solid, solids, 3dsolid, region, body, acis, sat, sab, pepejal daripada program lain, buka lukisan 3D, extrude, ext, revolve, rev, sweep, cerun tarik, laluan, presspull, tekan tarik, push pull, kotak, silinder, cyl, baji, 3dorbit, orbit, pandangan, vscurrent, gaya visual, berlorek, garisan tersembunyi, rangka dawai, sinar-x, xray, iso, perspektif, selari, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kiub pandangan, union, uni, tolak, su, persilangan, in, boolean, gabung, cantum pepejal, viewbase, flatshot, pandangan rata, pandangan 2D, pandangan lukisan, pandangan depan, pandangan atas, pandangan sisi, garisan tersembunyi
from: 13060e71
---

## Apa yang anda akan buat

Tapak bilik 1000 × 600 diekstrud menjadi blok setinggi 400, satu muka ditarik ke atas, dan sebatang silinder di sebelahnya, kemudian model disimpan bersama lukisan dan dieksport untuk pemapar 3D atau pencetak.

Tab {{ui:3D}} terletak di sebelah {{ui:Model}} di bawah lukisan. Ia menunjukkan lukisan ruang model yang terbentang di atas tanah dalam warna lapisannya (lapisan yang mati atau dibekukan kekal tersembunyi) dan pepejal yang anda buat. Kali pertama ia dibuka, paparan 3D dimuatkan; selepas itu ia bertukar serta-merta.

## Ekstrud satu bentuk

1. Pada tab {{ui:Model}}, taip `REC` dan tekan {{key:Enter}}. Taip `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klik tab {{ui:3D}}. Bar alat menunjukkan kumpulan {{ui:3D}} menggantikan kumpulan lukisan.
3. Klik {{ui:Extrude}} (atau taip {{cmd:EXTRUDE}}, `EXT`). Klik di dalam segi empat tepat, kemudian tekan {{key:Enter}}.
4. Taip `400` dan tekan {{key:Enter}}. Sejarah menyatakan "1 pepejal diekstrud, tinggi 400" dengan isipadunya.

Poliline tertutup (termasuk lengkok), segi empat tepat, poligon, bulatan dan elips boleh diekstrud; garisan dan poliline terbuka tidak boleh, dan sejarah menyatakan sebabnya. Anda juga boleh memilih bentuk pada tab {{ui:Model}} dahulu dan taip `EXTRUDE` di situ. Daripada menaip ketinggian, anda boleh mengkliknya: garis luar mengikut kursor naik dan turun. Ketinggian negatif menurun. Taip `D` pada gesaan ketinggian untuk memadamkan bentuk 2D selepas ekstrud (`D` sekali lagi mengekalkannya).

Pada gesaan ketinggian, `T` (Sudut tirus) meminta sudut dalam darjah: sisi condong masuk sebanyak itu, supaya bahagian atas menjadi lebih kecil (sudut negatif menjadikannya lebih besar); sudut yang terlalu curam untuk bentuk itu ditolak. `P` (Laluan) men-sweep bentuk sepanjang laluan sebaliknya (lihat di bawah).

## Putar dan sweep

- {{cmd:REVOLVE}} (`REV`, atau {{ui:More}} › {{ui:Revolve about an axis}}): pilih bentuk tertutup, tekan {{key:Enter}}, kemudian klik dua hujung paksi (atau taip `X` atau `Y` untuk paksi lukisan melalui 0,0), dan taip sudut atau tekan {{key:Enter}} untuk pusingan penuh. Bentuk berputar mengelilingi paksi dan berdiri keluar dari tanah: lukis separuh garis luar sebuah pasu di sebelah garisan, kemudian putar mengelilingi garisan itu. Bentuk boleh menyentuh paksi tetapi tidak boleh merentasinya. Satu pusingan penuh mempunyai 48 langkah.
- {{cmd:SWEEP}} (atau {{ui:More}} › {{ui:Sweep along a path}}, atau `P` pada gesaan ketinggian EXTRUDE): pilih bentuk tertutup (profil), tekan {{key:Enter}}, kemudian klik laluan: garisan, poliline, lengkok, bulatan atau elips. Profil berdiri merentasi laluan dengan bahagian tengahnya berada di atasnya, dan bergerak sepanjangnya; sudut dipotong serong, dan laluan tertutup menjadikan gelang. Segi empat tepat kecil yang di-sweep sepanjang garis luar bilik menjadi papan dasar; bulatan di sepanjang poliline menjadi paip.

## Tolak dan tarik muka

1. Klik {{ui:Press/pull}} (atau taip {{cmd:PRESSPULL}}).
2. Klik muka atas blok.
3. Taip `100` dan tekan {{key:Enter}}, atau gerakkan kursor dan klik. Blok kini setinggi 500.

## Kotak, silinder dan baji

- {{cmd:BOX}}: klik atau taip dua bucu, kemudian ketinggian.
- {{cmd:CYLINDER}} (`CYL`): pusat, jejari, kemudian ketinggian. Silinder dan bulatan yang diekstrud mempunyai 48 sisi, berlorek licin.
- {{cmd:WEDGE}} (`WE`): dua bucu dan ketinggian. Ia mencapai ketinggian penuh di bucu pertama dan menurun hingga tiada di bucu yang lain.

Pada tab 3D, klik mendarat pada muka atau tepi di bawah kursor, jika tidak pada tanah, supaya kotak boleh berdiri di atas pepejal lain.

## Alih, salin, putar dan padam pepejal

Pada tab 3D, klik memilih pepejal; seret dari kiri ke kanan untuk tetingkap, dari kanan ke kiri untuk silang. Kemudian:

- {{cmd:MOVE}}: klik titik asas dan tempat ia pergi, atau taip `<100,0,0>` (atau `@100,0`) untuk jarak sepanjang X, Y dan Z.
- {{cmd:COPY}}: sama, tetapi meninggalkan yang asal.
- {{cmd:ROTATE}}: taip sudut (ia berputar mengelilingi tengah pilihan, sekitar Z), atau klik pusat, titik mula dan sudut.
- {{cmd:ERASE}} atau {{key:Delete}}.

## Cantum, tolak dan persilangan pepejal

Buka {{ui:More}} dalam bar alat 3D, atau taip arahan:

- {{cmd:UNION}} (`UNI`): pilih pepejal, tekan {{key:Enter}}: ia menjadi satu pepejal.
- {{cmd:SUBTRACT}} (`SU`): pilih pepejal yang hendak dikekalkan dan tekan {{key:Enter}}, kemudian yang hendak diambil dan tekan {{key:Enter}}. Lubang menembusi blok: lukis silinder melaluinya, kemudian tolak silinder itu.
- {{cmd:INTERSECT}} (`IN`): pilih pepejal, tekan {{key:Enter}}: hanya bahagian yang dikongsi oleh semuanya ditinggalkan.

Sejarah menyatakan isipadu hasilnya. Setiap satu ialah satu langkah buat asal. Yang pertama anda jalankan memuatkan enjin boolean 3D (kira-kira 0.5 MB; termasuk dalam {{ui:Simpan untuk luar talian}}). Hanya pepejal tertutup boleh digabungkan: pepejal dengan tepi terbuka (daripada muka 3D longgar program lain) ditolak dengan sebab itu. Hasilnya ialah satu pepejal; muka melengkung kekal terdiri daripada faset rata, seperti silinder tadi.

Klik dua kali pepejal untuk menyunting mukanya dan tepinya secara berasingan; {{key:Esc}} menutupnya semula. Setiap perubahan 3D ialah satu langkah buat asal dalam sejarah yang sama dengan lukisan: {{key:Mod+Z}} membuat asal perkara terakhir yang anda lakukan pada mana-mana tab.

## Pandangan rata pada helaian

1. Buka tab helaian (atau kekal pada {{ui:Model}}), kemudian taip {{cmd:VIEWBASE}} (atau `FLATSHOT`).
2. Pilih pandangan: {{key:Enter}} untuk depan, atau `T` (atas), `R` (kanan), `L` (kiri), `BA` (belakang), `BO` (bawah), `I` (isometrik).
3. {{key:Enter}} menunjukkan garisan tersembunyi, putus-putus; `H` membuangnya.
4. {{key:Enter}} mengambil skala yang dicadangkan CadCraft: pada helaian, skala piawai terbesar (seperti 1:20) yang menjadikan pandangan muat di bawah separuh kertas. Atau taip satu: `1:50`, `2:1`.
5. Klik, atau taip, tempat pusat pandangan itu pergi.

Pandangan ialah satu rujukan blok, `VIEW-FRONT-1` dan seterusnya: tepi yang kelihatan pada lapisan VIEW-VISIBLE (0.5 mm), dan yang tersembunyi pada VIEW-HIDDEN (putus-putus, 0.25 mm). Alihkan, dimensikan dan cetaknya seperti lukisan lain. Ia ialah gambar pepejal ketika anda membuatnya: selepas mengubahnya, padam pandangan itu dan jalankan {{cmd:VIEWBASE}} semula. Untuk lebih banyak pandangan, jalankannya sekali bagi setiap pandangan.

## Lihat sekeliling

Seret dengan roda tetikus untuk mengorbit, {{key:Shift}} + seret roda atau butang kanan untuk pan, dan pusingkan roda untuk zum di kursor. Pada pad sentuh, dua jari mengorbit dan cubitan untuk zum. Klik kanan tanpa seret ialah {{key:Enter}}, seperti pada tab lain. 3DORBIT membenarkan butang kiri mengorbit sehingga anda menekan {{key:Enter}} atau {{key:Esc}}.

- {{ui:Views}} (atau {{cmd:VIEW}}): Iso, Atas, Bawah, Depan, Belakang, Kiri, Kanan, Perspektif atau Selari, dan Zum ke semua.
- {{ui:Style}} (atau {{cmd:VSCURRENT}}, `VS`): Berlorek, Berlorek dengan tepi, Garisan tersembunyi, Rangka dawai atau Sinar-X.

Titik yang anda klik melekat pada pepejal (bucu, tepi, muka) dan pada lukisan 2D di atas tanah: hujung dan titik tengah garisan dan lengkoknya, serta titik di sepanjangnya. Garisan 2D tidak pernah dipilih pada tab 3D. Apabila arahan meminta objek 2D (EXTRUDE, REVOLVE, SWEEP), klik memilih satu, seret dari kiri ke kanan mengambil apa yang berada sepenuhnya dalam tetingkap, dan seret dari kanan ke kiri mengambil apa yang dirintasnya, seperti pada tab {{ui:Model}}.

Kiub pandangan terletak di penjuru kanan atas tab 3D: klik muka, tepi atau bucu untuk melihat dari situ, seret untuk mengorbit, dan butang rumah kembali ke pandangan iso. Itu ialah {{ui:Automatic}}, permulaan {{ui:Corner indicator}} dalam [tetapan CadCraft](topic:settings). Apabila ditetapkan kepada {{ui:View cube}}, tab {{ui:Model}} turut menunjukkan kiub, melihat dari atas; mengklik mana-mana sisi lain membuka tab 3D yang melihat dari situ. Apabila ditetapkan kepada {{ui:Axis icon}}, kedua-dua tab menunjukkan penanda paksi sebaliknya.

## Pepejal daripada program lain

Lukisan daripada program lain boleh mengandungi pepejal 3D, rantau dan jasad (3DSOLID, REGION, BODY: program lain itu mengekalkan bentuknya sebagai data ACIS). CadCraft menunjukkan yang berada dalam ruang model pada tab 3D, dalam warna lapisannya dan dengan tepinya sendiri, kali pertama anda membuka tab; baris arahan kemudian menyatakan berapa banyak yang dilukis.

- Ia ditunjukkan seperti asalnya: anda tidak boleh memilih, mengalih atau mengubahnya. Lapisan yang mati atau dibekukan menyembunyikannya.
- Menyimpan sebagai DWG menulis setiap satu semula tanpa perubahan, dalam mana-mana versi DWG, supaya program lain mendapatnya semula. Fail DXF tidak mengekalkannya: CadCraft menulisnya ke dalam DWG sahaja, dan memberitahu anda apabila anda menyimpan sebagai DXF.
- Dilukis: muka rata, dan muka pada silinder, kon, sfera, torus dan permukaan splin ringkas, dengan tepi lurus, bulat dan splin. Muka pada mana-mana jenis permukaan lain, atau yang CadCraft tidak dapat susun atur, tidak diagak: ia ditinggalkan dan disenaraikan, contohnya "Belum dilukis (pepejal 3D): 2 muka pada spline-surface (sweepsur), permukaan yang belum dilukis lagi."
- Pepejal di dalam blok belum ditunjukkan; "Tentang fail ini" mengiranya.

Muka melengkung dilukis sebagai kepingan rata kecil, kira-kira 7.5° antara satu sama lain, jadi pepejal melengkung kelihatan sedikit bersudut apabila dilihat dari dekat.

## Simpan dan eksport

Menyimpan mengekalkan model 3D, dalam DWG dan DXF. Setiap muka dimasukkan sebagai muka 3D pada lapisan `CC-3D`, supaya program lain menunjukkan pepejal, dan CadCraft menyimpan salinan tepatnya sendiri dalam fail, yang dibacanya semula apabila anda membuka lukisan sekali lagi, dengan paparan 3D seperti asalnya (kamera, unjuran dan gaya visual). Muka 3D yang dibuat oleh program lain masuk pada tab 3D sebagai muka longgar, disimpan bersama sebagai satu kumpulan. Muka 3D dalam blok masuk sekali bagi setiap rujukan kepada blok itu dalam model, diletakkan dan dipusingkan seperti rujukan; dalam blok itu sendiri, dan pada helaian, muka 3D dilukis rata sebagai garis luarnya.

{{ui:Export}} dalam kumpulan 3D memuat turun pepejal sahaja: GLB untuk pemapar dan web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) atau STL untuk cetakan 3D, dalam milimeter ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} bertanya yang mana satu.

:::note
Model 3D bersaiz sebenar. Lukisan tanpa unit dikira sebagai milimeter, jadi `1000` ialah satu meter. Jika anda menukar unit lukisan kemudian (Sifat, dengan tiada apa dipilih), pepejal diskalakan bersamanya supaya kekal pada lukisan, dan sejarah menyatakannya. Satu {{key:Mod+Z}} membuat asal perubahan unit dan penskalaan bersama.
:::
