---
title: CadCraft ayarları
summary: Çizim uygulamasına ait ayarlar: imleç boyutu, kopyalanan bir parçanın imleçten nerede asılı kalacağı, bir tıklamanın seçime ne yaptığı, araç çubuğunun kaç satır kullandığı, komut satırının nerede ve ne kadar yüksek olduğu, kompakt bir üst alan ve köşe göstergesi.
keywords: komut satırı, yüzen komut satırı, yüzdür, yerleştir, tek satır, f2, komut geçmişi, commandline, cmdline, toparea, üst alan, kompakt, cursorsize, tam ekran imleç, kenardan kenara, araç çubuğu satırları, araç çubuğu görünümü, ctrl f1, ayarlar, tercihler, seçenekler, köşe göstergesi, görünüm küpü, eksen simgesi, ucs simgesi, imleç, artı imleci, seçim kutusu, yapıştırma noktası, temel nokta, nesnelere tıklama, seçim, pickadd, shift, sıfırla
from: 0896eb42
---

{{ui:Ayarlar}}'ı uygulama çubuğundaki dişli ya da {{key:Mod+,}} ile açın. İlk sekme, {{ui:CadCraft}}, bu uygulamaya ait ayarları tutar; {{ui:Genel}} ise aile içindeki tüm uygulamaların ortak kullandığı ayarları tutar (tema, panel yazı boyutu ve genişlikleri, araç çubuğunun görünümü ve sırası). CadCraft'ın ayarları yalnızca bu uygulamada geçerlidir: onları burada değiştirirsiniz ve bu tarayıcı bunları hatırlar. {{ui:CadCraft ayarlarını sıfırla}} hepsini başlangıç değerlerine döndürür.

## İmleç

**Küçük**, **Orta** (başlangıç), **Büyük** ya da **Tam ekran**: çizimdeki artının ve seçim kutusunun boyutu. Daha büyük bir seçim kutusu nesneleri biraz daha uzaktan da seçer; bu, dokunmatik ekranda ya da çok ince bir çizimde işe yarar.

**Tam ekran**, artının iki çizgisini komut çalışmıyorken de çizimin bir kenarından öbür kenarına çalıştırır; böylece tüm görünümde iki şeyin hizalandığını gözle denetleyebilirsiniz. Görünüm bölündüğünde çizgiler, üzerinde çalıştığınız bölmede kalır. AutoCAD'deki {{cmd:CURSORSIZE}} 100 ile aynıdır: tam ekran için {{cmd:CURSORSIZE}} ve 100 yazın; daha küçük bir sayı en yakın boyutu seçer (5'in altı Küçük, 5 ile 9 arası Orta, 10 ile 99 arası Büyük).

## Yapıştırma noktası

{{key:Mod+V}} ({{cmd:PASTECLIP}}) sonrasında kopyalanan bir parçanın imleçten nerede asılı kaldığı; tıklayana kadar:

- **Sol alt köşe** (başlangıç): kopyalanan nesnelerin kapsadığı alanın sol alt köşesi, AutoCAD'deki gibi.
- **Merkez**: kapsadıkları alanın ortası. Bir simgeyi gözle yerleştirmek için kullanışlıdır.

`COPYBASE` ile yapılan bir kopya her zaman seçtiğiniz temel noktadan asılır. {{ui:Yerinde yapıştır}} ({{key:Mod+Shift+V}}) bu ayarı yok sayar: özgün koordinatları korur. Bkz. [Kopyala, yapıştır ve çoğalt](topic:copy-paste).

## Nesnelere tıklama

Hiçbir komut çalışmazken çizimdeki bir tıklamanın seçime ne yaptığı:

- **Seçime ekler** (başlangıç): her tıklama ya da pencere nesne ekler; {{key:Shift}}+tıklama ya da {{key:Shift}}+pencere onları çıkarır.
- **Seçimin yerini alır**: bir tıklama ya da pencere yalnızca onun seçtiğini seçer. {{key:Shift}}+tıklama bir nesne ekler ya da zaten seçili olanı çıkarır; {{key:Shift}}+pencere ekler.

`Nesne seçin:` isteminde, bir komutun içindeyken, tıklamalar bu ayar ne derse desin her zaman ekler ({{key:Shift}} ise kaldırır). Bkz. [Nesneleri seçin](topic:select-objects).

## Boş bir yere tıklama

Hiçbir komut çalışmazken, bir nesnenin olmadığı yere tıklamanın ne yaptığı. Her iki durumda da bir seçim penceresi başlatır (ikinci tıklama bitirir).

- **Seçimi temizler** (başlangıç): seçili olan bırakılır. Korumak için tıklarken {{key:Shift}} tuşunu basılı tutun.
- **Seçimi korur**: seçim kalır, diğer çizim programlarında olduğu gibi; pencere ona ekler. Seçimi temizlemek için {{key:Esc}}'e basın.

## Sürükleyerek seçme

Boş bir yere basıp sürüklemenin çizdiği:

- **Kement** (başlangıç): serbest bir hat. Önce sağa hareket etmek tamamen içinde kalanları, önce sola hareket etmek dokunduğu her şeyi seçer; sürüklerken {{key:Space}} pencere, kesişim ve çit arasında geçiş yapar.
- **Dikdörtgen**: kutu; tıklama ve ikinci tıklama bunu çizer gibi.

{{cmd:LASSOMODE}} `1` ya da `0` aynısını ayarlar. Bkz. [Kement seçimi](topic:lasso-selection).

## Sürükleyerek kırpma ve uzatma

Boş bir yere basıp sürüklemenin {{cmd:TRIM}} ve {{cmd:EXTEND}} içinde ne yaptığı:

- **Bir yol** (başlangıç): serbest bir yol; geçtiği her parça kırpılır (ya da uzatılır).
- **Bir pencere**: bir kutu; dokunduğu her parça kırpılır, `C` seçeneğinin yaptığı gibi.

Bkz. [Kırp ve uzat](topic:trim-and-extend).

## Araç çubuğu konumu

{{ui:CadCraft}} › {{ui:Araç çubuğu konumu}}: **Üst** (başlangıç, her zaman olduğu gibi), **Alt**, **Sol** ya da **Sağ**. Sol ya da sağda araç grupları bir sütunda yığılır ve pencereden uzunsa kayar; düğmeler satır başına ikiye ya da üçe sarılır. Seçim ayarlarınızla birlikte kaydedilir ve {{cmd:TOOLBARDOCK}} (`TBDOCK`) bunu komut satırından ayarlar. {{ui:Genel}} › {{ui:Düzeni sıfırla}} araç çubuğunu yeniden üste koyar.

Menü stillerinin çubukları araç çubuğunun içinde durur ve onunla birlikte taşınır; ancak {{ui:Şerit}} stili üst ya da alt boyunca uzanacak şekilde yapılmıştır: bir kenarda dar ve kayan bir sütun alır. Bir telefonda araç çubuğu telefon düzeninin koyduğu yerde kalır.

## Araç çubuğu satırları

Araç çubuğunda ve {{ui:Klasik çizim}} ile {{ui:Şerit}} stillerinde araçların çizimin üstünde kaç satır kullandığı:

- **Pencereye sığdır** (başlangıç): araçlar pencerenin genişliğine sarılır.
- **2 satır**: en fazla iki satır. Bu genişlikte araçlar iki satıra ya da daha az sarılırsa sadece sarılırlar; aksi halde yan yana kayan iki satırda dururlar.
- **1 satır**: yan yana kayan tek satır; çizime en çok yer bırakır.

{{key:Shift+Ctrl+F1}} üçü arasında gezinir ve {{cmd:TOOLBARROWS}} birini ayarlar. Düğmelerin ne gösterdiği (simgeler ve metin, yalnızca simgeler ya da yalnızca metin) {{ui:Genel}} › {{ui:Araç çubuğu}} ayarıdır; {{key:Ctrl+F1}} bunda gezinir ve {{cmd:TOOLBAR}} ayarlar.

## Komut satırı

Komut satırı, eskiden olduğu gibi çizimin altında sabit kalabilir ya da üstünde yüzebilir ve tek satır kadar ince olabilir.

- **Yüzdürün.** Sol ucundaki tutamacı sürükleyerek çizimin içine çekin ya da sağ ucundaki üç nokta olan {{ui:Komut satırı seçenekleri}} menüsünden {{ui:Çizimin üstünde yüzsün}} seçin. Konumu değiştirmek için tutamacı yeniden sürükleyin; pencere boyutu değiştiğinde yeri korunur. Genişliğini ya da daralığını değiştirmek için sağ kenarını sürükleyin. Yeniden yerleştirmek için durum çubuğuna bırakın ya da {{ui:Alta yerleştir}} seçin.
- **İnceltin ya da yükseltin.** Üst kenarını sürükleyin: her adım bir geçmiş satırıdır. Sıfıra kadar indirildiğinde **tek satırlık komut satırı** olur: yalnızca istem ve yazdıklarınız, yeni bir ileti kısa bir süre üstünde görünür. Üst kenara çift tıklamak tek satır ile önceki yüksekliğiniz arasında geçiş yapar.
- **Geçmiş.** {{key:F2}} ya da komut satırındaki saat düğmesi ({{ui:Komut geçmişi (F2)}}) tüm geçmişi satırın üstünde açar (komut satırı pencerenin üst kısmına yakın yüzüyorsa altında). Yazmaya devam ettiğinizde girdi komut satırına gider; {{key:PageUp}} ve {{key:PageDown}} geçmişi kaydırır; {{key:Esc}}, {{key:F2}} ya da başka bir yere tıklama kapatır. F2'ye kendi atadığınız bir tuş varsa, o bunun yerine geçer.
- **Klavyeden.** Tutamaç bir düğmedir: odaklıyken ok tuşları yüzen komut satırını hareket ettirir ({{key:Shift}} ile daha büyük adımlarla); {{key:Up}} sabit olanı yüzdürür ve alt kenardayken {{key:Down}} onu sabitler. Üst kenar bir ayırıcıdır: {{key:Up}} ve {{key:Down}} bir satır ekler ya da çıkarır, {{key:Home}} tek satır yapar, {{key:End}} en yükseğini yapar. Ekran okuyucular, tek satırlık komut satırında da her iletiyi duyar.

{{ui:CadCraft}} › {{ui:Komut satırı}} aynı seçimleri sunar: {{ui:Altta yerleştirilmiş}} ya da {{ui:Yüzen}}, {{ui:Gösterilen geçmiş satırları}} (0 ile 12) ve {{ui:Standart yükseklik}}. {{cmd:COMMANDLINE}} (`CMDLINE`) bunları komut satırından ayarlar. Yer ve yükseklik, CadCraft için bu tarayıcıda geri kalan düzenle birlikte saklanır; böylece kaydedilen bir çalışma ortamı bunları da taşır. {{ui:Genel}} › {{ui:Düzeni sıfırla}} komut satırını standart yüksekliğinde yeniden alta yerleştirir. Bir telefonda komut satırı tek satır geçmişle alta sabitlenmiş kalır; geçmiş düğmesi orada da çalışır.

Pencere kısa olduğunda ve düzen denetimi daha sıkı bir düzen önerdiğinde, onun {{ui:Evet}} seçeneği, araç çubuklarından sonra çizim hâlâ kısaysa komut satırını da tek satıra çevirir.

## Üst alan

{{ui:CadCraft}} › {{ui:Üst alan}}: **Standart** (başlangıç) ya da **Kompakt**. Kompakt, her menü stilinde çizimin üstündeki çubukları küçük tutar: grup adları ve simgelerin altındaki sözcükler gider (ipuçları ve ekran okuyucular yine de bunlara sahiptir) ve düğmeler daha sıkıdır. [Araç çubuğu satırları](topic:settings#toolbar-rows) ile birlikte çalışır: Kompakt ve **1 satır** çizime en çok yeri bırakır. {{cmd:TOPAREA}} bunu ayarlar.

## Köşe göstergesi

Çizimin köşesinde ne durduğu:

- **Otomatik** (başlangıç): {{ui:Model}} sekmesinde eksen simgesi ve {{ui:3B}} sekmesinde görünüm küpü.
- **Eksen simgesi**: {{ui:Model}} sekmesinin sol altındaki X ve Y işaretçisi ile {{ui:3B}} sekmesinde küçük bir X, Y ve Z işaretçisi.
- **Görünüm küpü**: her iki sekmenin sağ üstünde bir küp. {{ui:Model}} sekmesinde çizimi üstten gösterir ve başka bir yüzüne, kenarına ya da köşesine tıklamak, oradan bakan {{ui:3B}} sekmesini açar. {{ui:3B}} sekmesinde görünümle birlikte döner: bir yandan bakmak için tıklayın, döndürmek için sürükleyin ve ev simgesi izometrik görünüme geri döndürür. Bkz. [Modeli 3B'de görün](topic:3d-solids).
- **Yok**: köşede hiçbir şey yok.

Sayfalarda ikisi de görünmez.

## Seçimin uzunluğu ve alanı

- **Durum çubuğunda** (başlangıç): nesneler seçiliyken durum çubuğu toplam uzunluklarını ve kapalı olanların toplam alanını gösterir. Bkz. [Seçimin toplamları](topic:properties-panel#totals-of-a-selection).
- **Gizli**: durum çubuğu bunları dışarıda bırakır. Özellikler yine de birden çok nesne için gösterir.

## Izgara, Ortogonal ve yakalamalar

Bunlar iletişim kutusunda yoktur: durum çubuğundaki {{ui:Izgara}}, {{ui:Ortogonal}} ve {{ui:Yakala}} düğmeleri (ya da {{key:F7}}, {{key:F8}}, {{key:F3}}) ve yanlarındaki nesne yakalamaları listesi, bıraktığınızda hatırlanır. Bkz. [Nesnelerdeki noktalara yakalama](topic:object-snaps).
