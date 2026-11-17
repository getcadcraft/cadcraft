---
title: Kenarlıklı ve künyeli bir sayfa ile görünüm pencereleri hazırlayın
summary: Kenarlığı ve künyesi olan bir sayfa oluşturun, görünüm penceresi ölçeğini ayarlayın, bir detay için ikinci bir görünüm penceresi ekleyin ve künyeyi doldurun.
keywords: layout, sayfa, kâğıt uzayı, görünüm penceresi, mview, vpview, künye, ölçek, kâğıt boyutu, kenarlık, vports, çıktı ölçeği, mspace, pspace, model uzayı, görünüm penceresine gir, görünüm penceresine çift tıklama
from: 45a45de8
---

## Ne oluşturacaksınız

Künyesi olan bir A3 sayfa; bütün plan 1:100 ölçekte tek bir görünüm penceresinde ve bir köşe 1:20'de ikinci bir görünüm penceresinde.

## Model ve sayfalar

Binayı {{ui:Model}} sekmesinde tam ölçekte çizersiniz: milimetrede 6 m'lik bir duvar 6000 birim uzunluğundadır. Bir **sayfa** (düzen), milimetre ya da inç cinsinden ölçülen bir kâğıt parçasıdır. Bir **görünüm penceresi**, sayfaya açılmış ve modeli bir ölçekte gösteren bir penceredir.

## Başlamadan önce

1. {{ui:Model}} sekmesinde bir plan açın ya da çizin.
2. Hiçbir şey seçili olmasın diye {{key:Esc}} tuşuna basın.
3. {{ui:Geçerli ayarlar}} altında {{ui:Birimler}} değerini çizdiğiniz birime ayarlayın, örneğin {{ui:Milimetre}}.

Birimler önemlidir: 1:100 gibi bir görünüm penceresi ölçeği, kâğıttaki bir milimetrenin gerçek 100 milimetreyi gösterdiği anlamına gelir; bu yüzden CadCraft bir çizim biriminin ne olduğunu bilmelidir. {{ui:Birimsiz}} olarak bırakılan bir çizim, kâğıdın birimindedir sayılır (ISO kâğıtta milimetre, ABD kâğıdında inç).

## Sayfayı oluşturun

1. Çizimin altındaki sekmelerin sağındaki {{ui:+}} düğmesine tıklayın, ya da `LAYOUT` yazıp {{key:Enter}} tuşuna basın, ya da {{ui:Yeni sayfa}} düğmesine tıklayın.

Yeni bir sekme, `Layout1`, açılır. Daha koyu bir masa üzerinde bir sayfa görürsünüz: bir kenarlık, sağ alt köşede bir künye ve üstünde, sığan en büyük standart ölçekte tüm modeli gösteren tek bir görünüm penceresi. Geçmiş kâğıdı adlandırır: metrik ve birimsiz çizimler için ISO A3, inç ya da fit çizimler için Tabloid (ANSI B).

2. Sayfayı ekrana sığdırmak için {{ui:Sınırlar}} düğmesine tıklayın.

## Kâğıdı seçin

1. {{key:Esc}} tuşuna basın, hiçbir şey seçili olmasın. Sağ panel başlığı "Sayfa: Layout1" yazar.
2. {{ui:Ad}} alanına `A-101 Plan` yazıp {{key:Enter}} tuşuna basın. Sekme yeniden adlandırılır.
3. {{ui:Kâğıt}} alanında bir boyut seçin.
4. {{ui:Yönlendirme}} alanında {{ui:Yatay}} ya da {{ui:Dikey}} seçin.

:::warning
Kâğıdı değiştirmek, sayfada zaten olanı taşımaz ya da yeniden boyutlandırmaz. Değiştirdikten sonra kenarlığın, künyenin ve görünüm penceresinin hâlâ sığıp sığmadığını kontrol edin ve tutamaçlarla taşıyın ya da yeniden boyutlandırın. Milimetre ve inç kâğıtlar arasında geçiş sayıları korur, bu yüzden her şey boyut değiştirir: durum çubuğu bunu uyarır.
:::

## Görünüm penceresi ölçeğini ayarlayın

1. Görünüm penceresinin çerçevesine (kenarına) tıklayın. Panel başlığı "Görünüm penceresi" yazar.
2. {{ui:Ölçek}} alanında `1:100` seçin.

Görünüm penceresindeki model, bulunduğu yerde ortalanmış olarak 1:100 ölçekte yeniden çizilir. Liste 10:1'den 1:10000'e kadar metrik ölçekleri sunar; inç ya da fit çizimleri mimari ölçekleri (1/4" = 1'-0" gibi) ve mühendislik ölçeklerini (1" = 20' gibi) da alır. {{ui:Tüm modeli sığdır}} tümünü sığdıran tam, standart olmayan bir ölçek ayarlar.

3. Plan artık ortada değilse, sağ paneldeki {{ui:Görünüm merkezi (model)}} altındaki {{ui:X}} ve {{ui:Y}} değerlerini değiştirin: bunlar görünüm penceresinin ortasında gösterilen model noktasıdır.

## Bir görünüm penceresinde modelin bir parçasını gösterin

1. Görünüm penceresi seçiliyken sağ paneldeki {{ui:Modelde bir pencere seçin…}} düğmesine tıklayın (ya da `VPVIEW` yazıp {{key:Enter}} tuşuna basın).
2. CadCraft {{ui:Model}} sekmesine geçer. Gösterilecek alanın bir köşesine tıklayın.
3. Karşı köşeye tıklayın.

Sayfaya geri dönersiniz ve görünüm penceresi o alanı, sığan en büyük standart ölçekte gösterir; geçmiş hangisi olduğunu söyler. {{ui:Tüm modeli göster}} tüm planı bir standart ölçekte geri getirir.

## Bir detay için ikinci bir görünüm penceresi ekleyin

1. Sayfada yer açın: ilk görünüm penceresini seçin ve bir köşe tutamacını sürükleyerek küçültün.
2. `MV` yazıp {{key:Enter}} tuşuna basın ya da Sayfalar grubundaki {{ui:Görünüm penceresi}} düğmesine tıklayın.
3. Sayfada yeni görünüm penceresinin bir köşesine tıklayın.
4. Karşı köşeye tıklayın.

Yeni görünüm penceresi tüm modeli gösterir. Geçmiş ölçeğini söyler.

5. Yeni görünüm penceresinin çerçevesine tıklayın.
6. {{ui:Modelde bir pencere seçin…}} düğmesine tıklayın ve planın bir köşesi etrafında küçük bir alan seçin.
7. {{ui:Ölçek}} alanında `1:20` seçin.

Görünüm penceresi çerçeveleri `Viewports` katmanındadır; bu katman çıktı alınmayacak şekilde ayarlıdır: çerçeveler ekranda görünür ama PDF'te görünmez.

## Künyeyi doldurun

Künye, `Title block` katmanında sıradan çizgilerden ve metinden oluşur. Çizim adı, ilk görünüm penceresinin ölçeği, bugünün tarihi ve sayfa numarası ile başlar.

1. Büyük künye metnine çift tıklayın. Üzerinde bir düzenleme kutusu açılır.
2. Sayfanın başlığını yazın.
3. {{ui:Tamam}} düğmesine tıklayın ya da {{key:Mod+Enter}} tuşuna basın.

Diğer alanlar için de aynısını yapın. "DRAWN BY" boş hücresini doldurmak için {{cmd:TEXT}} kullanın. SCALE metni, bir görünüm penceresinin ölçeğini değiştirdiğinizde kendiliğinden güncellenmez: onu elle düzenleyin.

## Sayfa üzerinde çizim yapın

Bir sayfa sekmesinde çizdiğiniz her şey kâğıt üzerindedir, kâğıt birimlerinde: 3.5 yüksekliğindeki metin ISO sayfada 3.5 mm yüksekliktedir. Notlar, kuzey okları ve sayfa kenarlıkları buraya aittir.

Planın kendisini değiştirmek için {{ui:Model}} sekmesine gidin ya da bir görünüm penceresi üzerinden çalışın (sonraki bölüm); her görünüm penceresi değişikliği gösterir.

## Görünüm penceresi üzerinden modelde çalışın

1. Görünüm penceresinin çerçevesinden uzakta, içine çift tıklayın. Ya da `MS` yazıp {{key:Enter}} tuşuna basın: sayfada tek bir görünüm penceresi varsa doğrudan içine girer; birkaç tane varsa istediğinizin içine tıklayın.

Çerçeve daha kalın çizilir, geçmiş içinde olduğunuzu söyler ve sayfanın sekmesi seçili kalır. Şimdi çizdiğiniz ya da değiştirdiğiniz her şey, {{ui:Model}} sekmesindeki gibi model birimlerinde modele gider: 1:100 bir görünüm penceresinin içinde çizilen bir çizgi gerçek milimetrelerdedir. Bu görünüm penceresinde dondurulmuş katmanlar burada seçilemez.

2. Görünüm penceresinin gösterdiğini yakınlaştırmak ve kaydırmak için tekerleği çevirin ya da orta tuşla sürükleyin. Sayfa yerinde kalır.
3. Çerçevenin dışında herhangi bir yere çift tıklayın ya da `PS` yazıp {{key:Enter}} tuşuna basın.

Sayfaya dönersiniz. Görünüm penceresi bıraktığınız görünümü korur; {{key:Mod+Z}} eski görünümü tek adımda geri getirir. Çizimin altındaki herhangi bir sekmeye tıklamak da görünüm penceresinden çıkarır.

:::note
{{ui:Özellikler}} içindeki {{ui:Gösterim kilitli}} ile kilitlenmiş bir görünüm penceresi görünümünü korur: içinde kaydırma ve yakınlaştırma bunun yerine tüm sayfayı hareket ettirir. Kapalı bir görünüm penceresine girilemez.
:::

## Bir görünümü adıyla etiketleyin

Bir görünüm penceresinin altındaki bir görünüm başlığı, görünüm penceresinin görünüm adını gösterebilir ve onu izler:

1. Görünüme bir ad verin: görünüm penceresinin çerçevesini seçin ve {{ui:Özellikler}} içindeki {{ui:Görünüm adı}} alanını doldurun. Ya da {{ui:Model}} sekmesinde {{cmd:NAMEDVIEW}} ile görünümü kaydedin ve görünüm penceresi seçiliyken `VPVIEW`, `V` ve görünümün adını yazın: görünüm penceresi o görünümü gösterir ve onun adını alır.
2. `VIEWLABEL` (`VL`) yazıp {{key:Enter}} tuşuna basın, sonra etiketin gideceği yere tıklayın ({{key:Enter}} onu görünüm penceresinin sol alt köşesinin altına koyar).

Görünüm adı değiştiğinde etiket de aynı geri alma adımında onunla birlikte değişir.

## Bir görünüm penceresinde bir katmanı dondurun

Bir katmanı yalnızca bir görünüm penceresinde gizlemek için, ama diğerlerinde değil (bir detaydaki mobilya gibi):

1. Görünüm penceresinin çerçevesini seçin ya da içinde çalışın (çift tıklayarak).

{{ui:Katmanlar}} panelinde her satırda bir düğme daha belirir ve listenin üstündeki bir satır bunu söyler.

2. Katmanın satırındaki bu düğmeye tıklayın.

Katman yalnızca o görünüm penceresinden kaybolur. Geri getirmek için yeniden tıklayın; {{key:Mod+Z}} ikisini de geri alır. Birden çok katman ya da görünüm penceresi için `VPLAYER` yazın: `F` (Dondur) ya da `T` (Çöz), katman adları (`A-*` A- ile başlayan her katmanı alır), sonra `C` (Geçerli), `A` (Tümü) ya da `S` (Seç). `VPLAYER` `V` (Vpvisdflt) yeni görünüm pencerelerinin başlangıçta dondurulmuş olacağı katmanları seçer.

## Daha fazla sayfa

Her {{ui:+}} bir sayfa daha ekler (`Layout2`, `Layout3` …) bir sonraki sayfa numarasıyla. Açık sayfayı silmek için {{key:Esc}} tuşuna basın ve sağ paneldeki {{ui:Bu sayfayı sil}} düğmesine tıklayın. Soru sormadan siler; {{key:Mod+Z}} onu geri getirir.

Bir sayfanın çıktısını almak için {{ui:Bu sayfanın çıktısını al}} ya da {{key:Mod+P}} kullanın; bkz. [PDF'e çıktı alma](topic:plot-pdf).

## Sık yapılan hatalar

- **Görünüm penceresi hiçbir şey göstermiyor.** Model boş ya da görünüm başka bir yere yönelik. Çerçeveyi seçin ve {{ui:Tüm modeli göster}} düğmesine tıklayın.
- **Ölçek listesinde yalnızca oranlar var, fit ve inç ölçekleri yok.** {{ui:Model}} sekmesinde {{ui:Birimler}} değerini {{ui:İnç}} ya da {{ui:Fit}} yapın.
- **1:100 on kat çok büyük ya da küçük görünüyor.** Çizim birimleri yanlış. {{ui:Birimler}} değerini bir birimin gerçekte ne olduğuna ayarlayın.
- **Görünüm penceresi içindeki planı tıklamak hiçbir şey seçmiyor.** Sayfada sayfanın kendi nesnelerini seçersiniz. Planı görünüm penceresi üzerinden seçmek için önce içine çift tıklayın.
- **Görünüm penceresinin dışındaki tıklamalar hiçbir şey yapmıyor.** Görünüm penceresinin içindesiniz: sayfada yeniden çalışmak için dışına çift tıklayın ya da `PS` yazın.
- **"Görünüm pencereleri bir sayfaya konur. Önce bir sayfa sekmesi açın (ya da LAYOUT ile bir tane oluşturun)."** {{cmd:MVIEW}} yalnızca bir sayfa sekmesinde çalışır.
