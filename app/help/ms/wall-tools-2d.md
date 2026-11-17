---
title: Bentuk dinding, potongan, ofset dan kunci untuk dinding 2D
summary: Lukis dinding sebagai segi empat tepat, poligon dan lengkok, pisah dan cantumkannya semula, alihkannya mengikut dimensi, dan kunci satu dinding pada dinding lain atau pada garis grid. Alat yang sama seperti dinding BimCraft.
keywords: dinding, bar alat dinding, butang dinding, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, gaya cantuman, kerat, butt, rata persegi, mangga, grip, seret hujung, putar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, cantum, larang sambungan, kunci, garis grid, pisah, jurang, ofset, garis lokasi
from: f41e7433
---

Alat ini berfungsi pada dinding 2D daripada `WALL` (lihat "Lukis dinding, pintu dan tingkap pintar dalam 2D"). Ia menggunakan peraturan yang sama seperti alat dinding dalam BimCraft, supaya dinding berkelakuan sama dalam kedua-duanya.

## Di mana alatnya

- Pada bar alat, kumpulan {{ui:Walls}} mempunyai {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} dan {{ui:Offset}}. Menu {{ui:More}}nya mempunyai setiap alat dinding yang lain, setiap satu dengan ikonnya.
- Dalam gaya menu reben, tab {{ui:Walls}} mempunyai panel {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} dan {{ui:Join}}.
- Dalam reka letak, baris alat dan kotak alat menunjukkan kumpulan {{ui:Walls}} yang sama.
- Anda juga boleh menaip mana-mana arahan yang dinamakan di bawah.

## Cantuman disimpan

Apabila hujung dinding jatuh pada dinding lain, CadCraft menyimpan cantuman itu bersama kedua-dua dinding. Ia tidak lagi mengira semula cantuman daripada tempat hujung-hujung itu berada. Maka:

- Dinding yang dicantumkan pada dinding yang anda alihkan akan mengikutinya dan kekal bercantum. Hujungnya meluncur sepanjang garisnya sendiri, supaya tiada apa yang berpusing.
- Seret satu hujung dinding dengan gripnya, dan dinding yang dicantumkan di situ turut mengekalkan arahnya. Hujungnya meluncur sepanjang garisnya sendiri untuk bertemu dinding yang diseret, jadi hujung yang diseret jatuh pada garis itu, bukan sentiasa di bawah kursor. Pratonton menunjukkan di mana. Dinding yang dirapatkan ke dinding yang diseret mengikut sepanjang garisnya sendiri. Menyeret hujung terus sepanjang dinding menukar panjangnya, dan dinding yang dicantumkan di situ bergerak bersamanya.
- `ROTATE` pada dinding yang dicantumkan berfungsi dengan cara yang sama: hujung jirannya meluncur sepanjang garis mereka sendiri ke dinding yang dipusingkan.
- Untuk mengalihkan sudut, pilih kedua-dua dinding yang bertemu di situ dan seret grip pada sudut itu. Kedua-dua dinding kekal di sudut dan kedua-duanya berpusing. Dinding yang lebih jauh kekal seperti sediakala.
- Tahan {{key:Alt}} semasa anda mengklik tempat baharu grip untuk memutuskan cantuman dengan sengaja: dinding pergi ke tempat yang anda letakkan dan tiada apa yang mengikut.
- Jika seretan akan memusingkan dinding yang dicantumkan kembali melalui hujung jauhnya sendiri, ia ditolak dan tiada apa berubah.
- Dinding yang anda lukis dengan {{ui:Disallow joins}} (`D` dalam `WALL`), atau yang dimatikan dalam {{ui:Properties}} ({{ui:Larang sambungan di permulaan}}, {{ui:Larang sambungan di hujung}}), kekal bebas di hujung itu, walaupun ia menyentuh dinding lain, sehingga anda membenarkannya semula.
- `WALLDISJOIN` ({{ui:Disallow join}} dalam kumpulan {{ui:Walls}}) melakukan perkara yang sama dengan satu klik: klik dinding berhampiran satu hujung untuk melarang cantuman di hujung itu, dan klik sekali lagi untuk membenarkannya.
- Lukisan lama belum mempunyai cantuman yang disimpan. Perubahan pertama yang anda buat mencarinya sekali, daripada keadaan dinding sebelum perubahan itu, dan menyimpannya. `WALLJOINS` melakukannya serta-merta.
- Fail DWG dan DXF membawa cantuman di dalam setiap dinding. CadCraft membacanya semula seperti yang disimpan. Program yang tidak menyimpan data lanjutan menunjukkan dinding sebagai blok biasa dan menggugurkan cantuman, dan cantuman yang dinding-dindingnya dialihkan dalam program lain digugurkan apabila anda kali seterusnya menukar mana-mana dinding itu.

## Gaya cantuman sudut

Sudut tempat dua dinding bertemu hujung ke hujung dilukis sebagai kerat melainkan anda memilih gaya lain.

- `WALLJOINSTYLE` ({{ui:Join style}} dalam kumpulan {{ui:Walls}}): klik sudut. Setiap klik pergi ke gaya seterusnya: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, kemudian {{ui:Mitre}} semula. Taip `T` untuk menukar dinding mana antara dua yang melalui sudut yang anda klik terakhir. Tekan {{key:Enter}} untuk selesai. Satu larian arahan ialah satu langkah buat asal.
- {{ui:Butt}}: satu dinding melalui sehingga muka jauh dinding yang lain, dan yang lain berhenti pada sisinya. {{ui:Square off}}: sama, tetapi dinding yang melalui itu berakhir tegak lurus kepada dirinya sendiri. Pada sudut tepat, kedua-duanya kelihatan serupa.
- Dalam Sifat dinding: {{ui:Join style at start}}, {{ui:Join style at end}}, dan {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- Gaya disimpan bersama kedua-dua dinding dan dibawa dalam fail DWG dan DXF. Salinan dinding bermula tanpanya.
- Cantuman T tidak mempunyai gaya untuk dipilih: dinding yang sisinya ditemui akan melalui. Sudut tempat tiga atau lebih dinding bertemu kekal sebagai kerat. Begitu juga sudut yang sangat tajam (di bawah kira-kira 30 darjah) dan dua dinding dalam satu garis.

## Lukis bentuk dinding

Setiap satu membuat dinding dalam satu langkah buat asal, dengan sudut bercantum. Dalam `WALL`, `O` menetapkan ofset peletakan (sejauh mana ke kiri klik anda dinding itu pergi), dan `D` mematikan cantuman untuk dinding yang anda lukis seterusnya.

- `WALLRECT` (`WR`): dua sudut bertentangan, seperti `RECTANG`.
- `WALLROT`: sisi pertama, kemudian sejauh mana sisi yang satu lagi keluar, untuk segi empat tepat pada sebarang sudut.
- `WALLPOLY` (`WP`): bilangan sisi (3 hingga 64), pusat, `I` untuk tertulis atau `C` untuk bertulis-luar, kemudian jejari, seperti `POLYGON`.
- `WALLARC` (`WARC`): pusat, mula, akhir. `D` memusingkan lengkok ke arah yang lain.
- `WALLTAN`: klik berhampiran hujung dinding, kemudian hujung lengkok, yang keluar sepanjang dinding itu.
- `WALLPICK`: klik garisan atau polygaris dan nyatakan sama ada untuk mengambil garisan yang dicantumkan padanya juga.
- `WALLTRACE`: klik di dalam kawasan tertutup garisan dan dinding untuk meletakkan dinding mengelilingi yang paling kecil.

Dinding pelan adalah lurus, jadi lengkok dilukis sebagai dinding lurus pendek setiap satu 15 darjah. Ia bercantum seperti mana-mana sudut.

## Potong dinding

- `WALLSPLIT` (`WS`): klik dinding, kemudian titiknya. `C` memotong di tempat dinding lain merentasinya, `G` meninggalkan jurang antara bahagian, `F` menjadikan hujung potongan bebas dan bukannya bercantum. Bahagian pertama mengekalkan kedudukan dinding dalam lukisan, dan pintu serta tingkap mengikut bahagiannya. Potongan melalui pintu atau tingkap ditolak.
- `WALLSPLITGAP` ({{ui:Split with gap}}): pemisahan yang sama, tetapi ia meminta jurang dahulu.
- `WALLDELSEG`: klik dinding, kemudian dua hujung bahagian yang hendak dipadam.
- `WALLREJOIN`: klik dua bahagian satu dinding untuk menjadikannya satu semula.

## Alih dinding mengikut jarak

- `WALLDIM`: klik dimensi lelurus atau sejajar yang berjalan dari satu dinding ke dinding lain, kemudian taip nilai baharu. Dinding di hujung jauh bergerak tegak lurus kepada dirinya sendiri, dinding di hujung pertama kekal, dan dinding yang dicantumkan padanya mengikut.
- `WALLOFFSET` (`WO`): klik dinding, kemudian sisi untuk mengalihkannya ke (`D` menaip jarak, `C` membuat salinan sebaliknya).
- `WALLSTRETCH`: tetingkap di sekeliling hujung dinding, kemudian titik asas dan titik kedua.
- Dalam Sifat, {{ui:Length}} yang ditaip mengekalkan titik mula dan membawa dinding yang dicantumkan di hujung jauh bersamanya, dan {{ui:Thickness}} baharu tumbuh menjauhi {{ui:Location line}} yang anda pilih (muka kiri, muka kanan atau tengah).

## Kunci dinding

Kunci kekal bersama dinding dalam fail. Jika anda mengalihkan satu dinding yang dikunci, yang satu lagi mengikut. Jika satu perubahan mengalihkan kedua-dua dinding secara berbeza, ia ditolak dan tiada apa berubah.

- `WALLHOLD`: kunci dinding pada dinding lain. `A` mengalihkannya ke garis dinding lain dahulu, `K` mengekalkan jarak yang sedia ada.
- `WALLHOLDDIM`: kunci jarak antara dua dinding selari.
- `WALLGRID`: kunci dinding pada garis grid (garisan pada lapisan grid dengan tagnya dalam teks di satu hujung), sama ada sepanjangnya atau dengan satu hujung di atasnya. Dinding yang dikunci sepanjang garisan mengekalkan jarak yang dimilikinya daripadanya. Alih garis grid dengan `GRIDMOVE` dan dinding mengikut sepenuhnya, bersama dinding yang dicantumkan. Dinding yang terletak sepanjang garis grid bergerak sepenuhnya bersamanya walaupun tanpa kunci, dan dinding yang hanya berakhir pada garisan diregangkan oleh hujung itu.
- `WALLHOLDS` menyenaraikan kunci. `WALLUNHOLD` membuang kunci daripada dinding.
- Setiap kunci menunjukkan mangga kecil pada pelan: di sebelah tengah dinding yang dikunci, atau di sebelah hujung yang dikunci pada garis grid. Klik mangga untuk membuang kunci itu.

## Belum ada di sini

Kunci menggunakan garis tengah dinding. Dinding di sini tidak mempunyai lapisan, jadi tiada keutamaan lapisan pada simpang, dan dinding tidak melengkung (lihat lengkok di atas). Tiada siapa yang mencuba alat ini pada lukisan besar, dan ia belum disemak dalam program CAD lain.
