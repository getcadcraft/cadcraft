---
title: Bentuk dinding, potongan, ofset dan kunci untuk dinding 2D
summary: Lukis dinding sebagai segi empat tepat, poligon dan lengkok, pecah dan cantum semula, alihkannya mengikut dimensi, dan kunci satu dinding kepada dinding lain atau kepada garisan grid. Alatan yang sama seperti dinding BimCraft.
keywords: dinding, bar alat dinding, butang dinding, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, gaya cantuman, mitre, butt, square off, mangga, grip, seret hujung, putar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, cantum, tidak benarkan cantum, kunci, garisan grid, pisah, jurang, ofset, garisan lokasi
from: 49044181
---

Alatan ini berfungsi pada dinding 2D daripada `WALL` (lihat "Draw smart walls, doors and windows in 2D"). Ia menggunakan peraturan yang sama seperti alatan dinding dalam BimCraft, jadi dinding berkelakuan sama dalam kedua-duanya.

## Di mana alatan itu

- Pada bar alat, kumpulan {{ui:Walls}} mempunyai {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} dan {{ui:Offset}}. Menu {{ui:More}}-nya mempunyai setiap alatan dinding yang lain, dengan ikonnya.
- Dalam gaya menu reben, tab {{ui:Walls}} mempunyai panel {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} dan {{ui:Join}}.
- Dalam susun atur, baris alatan dan kotak alatan menunjukkan kumpulan {{ui:Walls}} yang sama.
- Anda juga boleh menaip mana-mana arahan yang dinamakan di bawah.

## Cantuman disimpan

Apabila hujung dinding jatuh pada dinding lain, CadCraft menyimpan cantuman itu bersama kedua-dua dinding. Ia tidak lagi mengira semula cantuman daripada tempat hujung kebetulan berada. Jadi:

- Dinding yang bercantum dengan dinding yang anda alih mengikutnya dan kekal bercantum. Hujungnya meluncur sepanjang garisnya sendiri, jadi tiada apa yang berpusing.
- Seret satu hujung dinding dengan gripnya dan dinding yang bercantum di situ juga mengekalkan arahnya. Hujungnya meluncur sepanjang garisnya sendiri untuk bertemu dinding yang diseret, jadi hujung yang diseret jatuh pada garisan itu, bukan selalu di bawah kursor. Pratonton menunjukkan di mana. Dinding yang bercantum ke dalam dinding yang diseret mengikut sepanjang garisnya sendiri. Menyeret hujung terus sepanjang dinding menukar panjangnya, dan dinding yang bercantum di situ bergerak bersamanya.
- `ROTATE` pada dinding yang bercantum berfungsi dengan cara yang sama: hujung jirannya meluncur sepanjang garisnya sendiri ke dinding yang diputar.
- Untuk mengalihkan satu sudut, pilih kedua-dua dinding yang bertemu di situ dan seret grip pada sudut. Kedua-dua dinding kekal pada sudut dan kedua-duanya berpusing. Dinding yang lebih jauh kekal seperti sedia ada.
- Tahan {{key:Alt}} apabila anda mengklik tempat baharu grip untuk memecahkan cantuman secara sengaja: dinding pergi ke tempat yang anda letakkan dan tiada apa yang mengikut.
- Jika seretan akan memutar dinding yang bercantum melalui hujung jauhnya sendiri, ia ditolak dan tiada apa yang berubah.
- Dinding yang anda lukis dengan {{ui:Disallow joins}} (`D` dalam `WALL`), atau matikan dalam Properties ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), kekal bebas pada hujung itu, walaupun ia menyentuh dinding lain, sehingga anda membenarkannya semula.
- {{cmd:WALLDISJOIN}} ({{ui:Disallow join}} dalam kumpulan {{ui:Walls}}) melakukan perkara yang sama dengan satu klik: klik dinding berhampiran satu hujung untuk tidak membenarkan cantum pada hujung itu, dan klik sekali lagi untuk membenarkannya.
- Lukisan lama tiada cantuman yang disimpan lagi. Perubahan pertama yang anda buat mencari cantuman sekali daripada cara dinding berdiri sebelum perubahan itu, dan menyimpannya. `WALLJOINS` melakukannya serta-merta.
- Fail DWG dan DXF membawa cantuman di dalam setiap dinding. CadCraft membacanya semula seperti yang disimpan. Program yang tidak menyimpan data lanjutan menunjukkan dinding sebagai blok biasa dan menggugurkan cantuman, dan cantuman yang dinding-dindingnya dialihkan dalam program lain digugurkan pada kali seterusnya anda menukar salah satu dinding.

## Gaya cantuman sudut

Sudut tempat dua dinding bertemu hujung ke hujung dilukis sebagai mitre melainkan anda memilih gaya lain.

- {{cmd:WALLJOINSTYLE}} ({{ui:Join style}} dalam kumpulan {{ui:Walls}}): klik sudut. Setiap klik pergi ke gaya seterusnya: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, kemudian {{ui:Mitre}} sekali lagi. Taip `T` untuk menukar dinding mana yang melalui pada sudut yang anda klik terakhir. Tekan {{key:Enter}} untuk selesai. Satu larian arahan ialah satu langkah buat asal.
- {{ui:Butt}}: satu dinding berjalan terus ke muka jauh yang lain, dan yang lain berhenti pada sisinya. {{ui:Square off}}: sama, tetapi dinding yang berjalan terus berakhir tegak lurus kepada dirinya. Pada sudut tegak keduanya kelihatan sama.
- Dalam Properties dinding: {{ui:Join style at start}}, {{ui:Join style at end}}, dan {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Gaya disimpan bersama kedua-dua dinding dan dibawa dalam fail DWG dan DXF. Salinan dinding bermula tanpanya.
- Cantuman T tidak mempunyai gaya untuk dipilih: dinding yang sisinya ditemui berjalan terus. Sudut tempat tiga atau lebih dinding bertemu kekal sebagai mitre. Begitu juga sudut yang sangat tajam (di bawah kira-kira 30 darjah) dan dua dinding dalam satu garisan.

## Lukis bentuk dinding

Setiap satu membuat dinding dalam satu langkah buat asal, dengan sudut dicantum. Dalam `WALL`, `O` menetapkan ofset penempatan (sejauh mana ke kiri klik anda dinding pergi) dan `D` mematikan cantuman untuk dinding yang anda lukis seterusnya.

- `WALLRECT` (`WR`): dua penjuru bertentangan, seperti `RECTANG`.
- `WALLROT`: sisi pertama, kemudian sejauh mana sisi lain keluar, untuk segi empat tepat pada mana-mana sudut.
- `WALLPOLY` (`WP`): bilangan sisi (3 hingga 64), pusat, `I` untuk tertulis atau `C` untuk tercatat, kemudian jejari, seperti `POLYGON`: klik, atau taipnya (jejari yang ditaip menuju ke arah penuding, atau sepanjang X apabila penuding masih pada pusat).
- `WALLARC` (`WARC`): pusat, mula, tamat. `D` memusingkan lengkok ke arah lain.
- `WALLTAN`: klik berhampiran hujung dinding, kemudian hujung lengkok, yang keluar sepanjang dinding itu.
- `WALLPICK`: klik garisan atau polygaris dan nyatakan sama ada untuk mengambil garisan yang bercantum dengannya juga.
- `WALLTRACE`: klik di dalam kawasan tertutup garisan dan dinding untuk meletakkan dinding mengelilingi yang terkecil.

Dinding pelan adalah lurus, jadi lengkok dilukis sebagai dinding lurus pendek 15 darjah setiap satu. Ia bercantum seperti sudut biasa.

## Potong dinding

- `WALLSPLIT` (`WS`): klik dinding, kemudian titiknya. `C` memotong di tempat dinding lain bersilang dengannya, `G` meninggalkan jurang antara bahagian, `F` menjadikan hujung potongan bebas dan bukannya bercantum. Bahagian pertama mengekalkan tempat dinding dalam lukisan, dan pintu serta tingkap mengikut bahagiannya. Potongan melalui pintu atau tingkap ditolak.
- {{ui:Split with gap}} (`WALLSPLITGAP`): pemisahan yang sama, tetapi ia meminta jurang dahulu.
- `WALLDELSEG`: klik dinding, kemudian dua hujung kepingan untuk dipadam.
- `WALLREJOIN`: klik dua bahagian satu dinding untuk menjadikannya satu semula.

## Alihkan dinding mengikut jarak

- {{ui:Edit by dimension}} (`WALLDIM`): klik dimensi linear atau sejajar yang berjalan dari satu dinding ke dinding lain, kemudian taip nilai baharu. Dinding di hujung jauh bergerak tegak lurus kepada dirinya, dinding di hujung pertama kekal, dan dinding yang bercantum dengannya mengikut. Titik jauh dimensi bergerak bersama dindingnya, jadi dimensi menunjukkan nilai yang anda taip.
- `WALLOFFSET` (`WO`): klik dinding, kemudian sisi untuk memindahkannya ke situ (`D` menaip jarak, `C` membuat salinan sebaliknya).
- `WALLSTRETCH`: tetingkap di sekeliling hujung dinding, kemudian titik asas dan titik kedua.
- Dalam Properties, {{ui:Length}} yang ditaip mengekalkan titik mula dan membawa dinding yang bercantum di hujung jauh bersamanya, dan {{ui:Thickness}} baharu tumbuh menjauhi {{ui:Location line}} yang anda pilih (muka kiri, muka kanan atau tengah).

## Dimensi antara garisan pusat dinding

Garisan pusat dinding tidak dilukis, tetapi snap objek menjumpainya. Dengan snap objek hidup ({{key:F3}}), gerakkan penuding ke tengah ketebalan dinding: penanda berbunyi `Wall center: endpoint` atau `Wall center: midpoint`, dan garisan pusat ditunjukkan sebagai garisan putus-putus semasa penanda berada di atasnya. Dengan {{ui:Perpendicular}} atau {{ui:Nearest}} dihidupkan dalam senarai snap objek, ini berfungsi pada garisan pusat juga.

1. Mulakan `DIMLINEAR` (atau `DIMALIGNED`).
2. Klik dinding pertama tempat penanda berbunyi `Wall center: midpoint` atau `Wall center: endpoint`.
3. Klik dinding kedua dengan cara yang sama, kemudian klik tempat garisan dimensi pergi.
4. Untuk menukar jarak, mulakan `WALLDIM`, klik dimensi dan taip nilai baharu. Dinding kedua bergerak.

Snap garisan pusat berfungsi dalam setiap arahan yang meminta titik.

## Kunci dinding

Kunci kekal bersama dinding dalam fail. Jika anda mengalihkan satu dinding berkunci, yang lain mengikut. Jika satu perubahan menggerakkan kedua-dua dinding secara berbeza, ia ditolak dan tiada apa yang berubah.

- `WALLHOLD`: kunci satu dinding kepada dinding lain. `A` mengalihkannya ke garisan dinding lain dahulu, `K` mengekalkan jarak yang dimilikinya.
- `WALLHOLDDIM`: kunci jarak antara dua dinding selari.
- `WALLGRID`: kunci satu dinding kepada garisan grid (garisan pada lapisan grid dengan tagnya dalam teks di satu hujung), sama ada sepanjangnya atau dengan satu hujung padanya. Dinding yang dikunci sepanjang garisan mengekalkan jarak yang dimilikinya darinya. Alihkan garisan grid dengan `GRIDMOVE` dan dinding mengikut keseluruhannya, dengan dinding-dinding yang bercantum dengannya. Dinding yang terletak sepanjang garisan grid bergerak sepenuhnya bersamanya walaupun tanpa kunci, dan dinding yang hanya berakhir pada garisan diregangkan oleh hujung itu.
- `WALLHOLDS` menyenaraikan kunci. `WALLUNHOLD` menanggalkan kunci daripada dinding.
- Setiap kunci menunjukkan mangga kecil pada pelan: di sebelah tengah dinding berkunci, atau di sebelah hujung yang dikunci kepada garisan grid. Klik mangga untuk menanggalkan kunci itu.

## Apa yang belum ada

Kunci menggunakan garisan pusat dinding. Dinding di sini tidak mempunyai lapisan, jadi tiada keutamaan lapisan pada simpang, dan dinding tidak melengkung (lihat lengkok di atas). Tiada siapa yang mencuba alatan ini pada lukisan besar, dan ia belum diperiksa dalam program CAD lain.
