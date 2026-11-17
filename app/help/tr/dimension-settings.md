---
title: Ölçülendirme boyutlarını, ondalık basamakları ve ölçeği ayarlama
summary: Yeni ölçülendirmeler için metin yüksekliğini, ok boyutunu, ondalık basamakları ve genel ölçeği seçin, mevcut olanları değiştirin ve CadCraft'ta ölçülendirme stillerinin nasıl çalıştığını anlayın.
keywords: ölçülendirme stili, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, genel ölçek, ondalık basamak, ok boyutu, açıklama ölçeği, dimtextunit, metindeki birimler, mm, cm, m, km, milimetre, metre, dimlfac, dimpost
from: 8ec82a07
---

## Neler öğreneceksiniz

Ölçülendirme metninin ve oklarının ne kadar büyük olduğunu, 1:50 ya da 1:100 ölçekle basılacak bir çizim için bunları nasıl ayarlayacağınızı ve zaten yaptığınız ölçülendirmeleri nasıl değiştireceğinizi.

## Ölçülendirme boyutları nasıl çalışır

Her ölçülendirme kendi boyut kümesini taşır: metin yüksekliği, ok boyutu, ondalık basamaklar, metnin çevresindeki boşluk, uzatma çizgilerinin ölçü çizgisinin ötesine ne kadar uzandığı ve nesneden ne kadar uzakta başladığı. Varsayılanlar, yaygın ISO stiline yakındır:

| Ayar | Varsayılan | Komut |
|---|---|---|
| Metin yüksekliği | 2.5 | {{cmd:DIMTXT}} |
| Ok boyutu | 2.5 | {{cmd:DIMASZ}} |
| Ondalık basamak | 2 (sondaki sıfırlar atılır) | {{cmd:DIMDEC}} |
| Metnin çevresindeki boşluk | 0.625 | {{cmd:DIMGAP}} |
| Ölçü çizgisinin ötesindeki uzatma | 1.25 | {{cmd:DIMEXE}} |
| Nesneden ofset | 0.625 | {{cmd:DIMEXO}} |
| Genel ölçek | 1 | {{cmd:DIMSCALE}} |

Her boyut **genel ölçekle** çarpılır. Boyutları kâğıtta istediğiniz gibi ayarlayın (2.5 mm metin), genel ölçeği çizim ölçeğine ayarlayın (1:50 için 50). Metin o zaman 2.5 × 50 = 125 çizim birimi yüksekliğinde olur ve 2.5 mm olarak basılır.

:::note
Adlandırılmış ölçülendirme stilleri {{cmd:DIMSTYLE}} ile yönetilir: aşağıdaki bölüme bakın. Her ölçülendirme, yapıldığı ayarları da tutar; bu yüzden tek bir ölçülendirmeyi {{ui:Özellikler}} içinde yine ayrı değiştirebilirsiniz.
:::

## Yeni ölçülendirmeler için boyutları ayarlayın

Aşağıdaki iki yöntem de yalnızca sonradan yapacağınız ölçülendirmeleri değiştirir.

### Geçerli ayarlar panelinde

1. Hiçbir şey seçili olmasın diye {{key:Esc}} tuşuna basın. {{ui:Model}} sekmesinde sağ panel {{ui:Geçerli ayarlar}} yazar.
2. Paneli {{ui:Yeni ölçülendirmeler}} bölümüne kadar aşağı kaydırın; katman, renk, birimler ve {{ui:Katman 0}} satırlarını geçin (küçük bir ekranda alt kenarın altından başlar). {{ui:Genel ölçek}} alanına tıklayın, `50` yazın ve {{key:Enter}} tuşuna basın.
3. Başka değerler istiyorsanız {{ui:Metin yüksekliği}}, {{ui:Ok boyutu}} ve {{ui:Ondalık basamak}} değerlerini de aynı şekilde ayarlayın.

Durum çubuğu her birini onaylar; örneğin "Yeni ölçülendirmeler için genel ölçek: 50".

### Komut satırında

1. `DIMSCALE` yazıp {{key:Enter}} tuşuna basın.
2. `Enter new value for DIMSCALE <1>` istemine `50` yazıp {{key:Enter}} tuşuna basın.

"DIMSCALE = 50. Yeni ölçülendirmeler bunu kullanır; mevcut olanların değerini değiştirmek için onları seçin." geçmişte görünür. {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} ve {{cmd:DIMEXO}} de aynı şekilde çalışır. Mevcut değeri korumak için istemde {{key:Enter}} tuşuna basın.

### Fit ve inç ölçülendirmeleri

Yeni ölçülendirmeler çizimin uzunluk biçimini kullanır: bunu {{ui:Geçerli ayarlar}} içinde {{ui:Uzunluk biçimi}} ile ya da {{cmd:UNITS}} ile ayarlayın (bkz. [Fit ve inç](topic:units-papers-scales#feet-and-inches-and-fractions)); sonraki ölçülendirme `12'-6 1/2"` okur. {{cmd:DIMLUNIT}} yalnızca ölçülendirmelerin biçimini ayarlar (2 ondalık, 3 mühendislik, 4 mimari, 5 kesirli). Zaten yaptığınız bir ölçülendirme için onu seçin ve {{ui:Özellikler}} içinde {{ui:Biçim}} seçin; kesirli bir biçimde {{ui:Kesir}} kutusu iki'nin kuvvetini alır (4 = 1/16).

## Ölçülendirmeler mm, cm, m ya da km cinsinden

Bir ölçülendirme çizim birimleri cinsinden ölçer. Bu uzunluğu bunun yerine milimetre, santimetre, metre ya da kilometre cinsinden yazabilir; birimi sayının sonuna ekler: 1250 mm'lik bir duvar `1250 mm`, `125 cm`, `1.25 m` ya da `0.00125 km` yazar.

1. Önce {{ui:Geçerli ayarlar}} içinde çizimin {{ui:Birimler}} değerini ayarlayın (bkz. [Birimler, kâğıt boyutları ve ölçekler](topic:units-papers-scales#drawing-units)); böylece CadCraft bir çizim biriminin ne olduğunu bilir. Birimsiz bir çizim milimetre olarak okunur ve {{cmd:DIMTEXTUNIT}} bunu söyler.
2. Yeni ölçülendirmeler için: hiçbir şey seçili değilken {{key:Esc}} tuşuna basın ve {{ui:Yeni ölçülendirmeler}} altında {{ui:Metindeki birimler}} seçin: {{ui:Çizim birimleri}}, `mm`, `cm`, `m` ya da `km`.
3. Zaten yaptığınız ölçülendirmeler için: onları seçin ve {{ui:Özellikler}} › {{ui:Birincil birimler}} içinde {{ui:Metindeki birimler}} seçin.

Ya da {{cmd:DIMTEXTUNIT}} (`DTU`) yazıp `D`, `MM`, `CM`, `M` ya da `KM` ile yanıtlayın: ölçülendirmeler seçiliyken onları değiştirir (tek bir geri alma adımı); hiçbir şey seçili değilken yeni ölçülendirmeleri ayarlar.

{{ui:Ondalık basamak}} ({{cmd:DIMDEC}}) hâlâ kaç ondalık basamağın görüneceğini ayarlar: metre ve 3 ondalıkla 1234 mm `1.234 m` yazar. Metin ondalık bir sayı olarak yazılır. Bir sayfada ölçülendirmeler sayfanın kâğıt birimi (milimetre ya da inç) cinsinden ölçülür.

Kaydedilmiş bir DWG ya da DXF, seçimi ölçülendirmenin ölçüm ölçeği (DIMLFAC) ve bir son ek (DIMPOST, ` m`) olarak saklar; böylece diğer programlar aynı metni gösterir. Çizimin {{ui:Birimler}} değerini sonra değiştirirseniz, mm, cm, m ya da km cinsinden yazılmış ölçülendirmeler yeniden ayarlanır; böylece doğru uzunluğu söylemeye devam ederler. {{ui:Elle ayarlanmış (ölçek ya da son ek)}}, ölçülendirmenin {{ui:Ölçüm ölçeği}} ya da sonekinin başka bir yolla ayarlandığı anlamına gelir; bunları değiştirmek için bir birim seçin.

## Zaten yaptığınız ölçülendirmeleri değiştirin

1. Bir ölçülendirmeye tıklayın. Sağ panelin başlığı {{ui:Ölçülendirme}} yazar.
2. Ayarlar bölümlerdedir; sonraki bölümlere ulaşmak için paneli aşağı kaydırın:
   - {{ui:Genel}}: {{ui:Ölçülendirme stili}}
   - {{ui:Geometri}}: {{ui:Tür}} ve {{ui:Ölçüm}} (yalnızca okunur)
   - {{ui:Metin}}: {{ui:Metin üzerine yazma}} ve {{ui:Metin yüksekliği}}
   - {{ui:Çizgiler ve oklar}}: {{ui:Ok boyutu}}
   - {{ui:Sığdırma}}: {{ui:Genel ölçek}}
   - {{ui:Birincil birimler}}: {{ui:Ondalık basamak}}
3. Yeni bir değer yazın ve {{key:Enter}} tuşuna basın.

Ölçülendirme hemen yeniden çizilir. Açısal ölçülendirmeler için {{ui:Ondalık basamak (°)}} açının ondalık basamaklarını ayarlar.

:::note
Birden çok ölçülendirme seçiliyken panel, paylaştıkları satırları gösterir ve aralarında farklı olan bir değer {{ui:Değişken}} yazar. Yazdığınız bir değer seçili her ölçülendirmeyi tek adımda değiştirir; bu yüzden bir {{key:Mod+Z}} hepsini geri alır.
:::

## Açılmış çizimlerdeki ölçülendirmeler

Açılmış bir DWG ya da DXF'deki bir ölçülendirme, diğer programın çizdiği gibi gösterilir. Panelinde "Onu çizen program nasıl çizdiyse öyle gösteriliyor. Değiştirirseniz CadCraft onu kendi stilinde yeniden çizer." yazar. Herhangi bir değeri değiştirdiğinizde, bir tutamacı taşıdığınızda ya da ölçülendirmeyi taşıdığınızda, CadCraft onu kendi ok uçları ve yazı tipiyle, dosyadan okuduğu boyutları kullanarak yeniden çizer.

Bazı ölçülendirmeler yalnızca çizildikleri gibi okunabilir, düzenlenebilir ölçülendirmeler olarak değil; panel o zaman "Şuradan çizildi:" ve bir blok adı yazar, ve "Bu dosya hakkında" kutusu bunları sayar.

## Sık yapılan hatalar

- **DIMSCALE değiştirdi ama ekranda bir şey değişmedi.** Bu ayar yeni ölçülendirmeler içindir. Mevcut olanları seçin ve paneldeki {{ui:Genel ölçek}} değerini değiştirin.
- **Ondalık basamaklar ayarlandığından az rakam gösteriyor.** Sondaki sıfırlar atılır: 2 ondalıkla `1250` ve `1250.5` görünür, `1250.00` değil.
- **Metin bir görünüm penceresinde kâğıtta doğru yükseklikte, ama model çıktısında yanlış.** Genel ölçek, çıktı aldığınız ölçekle eşleşmelidir. Kâğıda sığdır ile basmak garip bir ölçek verir; çıktı iletişim kutusunda standart bir ölçek seçin.
- **Metinde mm ya da m gibi birimler.** {{ui:Metindeki birimler}} seçin (bkz. [mm, cm, m ya da km cinsinden ölçülendirmeler](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Sayıdan sonra başka bir sözcük için, geçersiz kılma olarak yazın: `<> TYP.`.

## Adlandırılmış ölçülendirme stilleri

{{cmd:DIMSTYLE}} (`D`) yazın; {{ui:Ölçülendirme stili yöneticisi}} açılır. Çizimin stillerini, her birini kaç ölçülendirmenin kullandığını ve hangisinin geçerli olduğunu listeler. **Standard** her zaman oradadır.

- {{ui:Geçerli yap}}: yeni ölçülendirmeler o stilin ayarlarını kullanır ve onun adını taşır.
- {{ui:Yeni…}}: seçtiğiniz birinin kopyası olarak başlayan yeni bir stil.
- {{ui:Değiştir…}}: {{ui:Özellikler}} panelinin ölçülendirme bölümündekiyle aynı alanlar (çizgiler ve oklar, metin, sığdırma, birimler, alternatif birimler, toleranslar). {{ui:Tamam}} tuşuna basarsanız stil değişir **ve onu kullanan her ölçülendirme de onunla birlikte değişir**, ayar ayar. Yalnızca bir ölçülendirmede değiştirdiğiniz bir ayar, stil o ayarı değiştirmediği sürece olduğu gibi kalır.
- {{ui:Yeniden adlandır…}} ve {{ui:Sil}}: Standard yeniden adlandırılamaz ya da silinemez; geçerli stil ya da ölçülendirmelerin kullandığı bir stil de öyle.
- {{ui:Karşılaştır…}}: iki stil arasında neyin farklı olduğu.
- {{ui:Seçililere uygula}}: önce ölçülendirmeleri seçin; bunlar stilin ayarlarını ve adını alır.

`-DIMSTYLE` komut satırında aynısını yapar: `Restore`, `Save` (geçerli ayarlar, {{cmd:DIMTXT}} ve diğerleriyle yazdığınız değerler dahil, bir adla), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stiller bir DWG ya da DXF içine (ölçülendirme stili tablosu) kaydedilir ve açtığınız dosyalardan okunur. *Geçerli* stil kaydedilmez: bir çizim her zaman Standard geçerli olarak açılır. Standard, başka bir stil geçerliyken kendi ayarlarını korur.

## Ölçülendirme metnini ve uzatma çizgilerini değiştirin

{{cmd:DIMEDIT}} (`DED`), seçtiğiniz ölçülendirmeler üzerinde çalışır: **Giriş** metni stilin yerleştirdiği yere geri koyar, **Yeni** başka bir metin yazar (`<>` ölçümü temsil eder), **Döndür** metni döndürür, **Eğik** doğrusal ve hizalı ölçülendirmelerin uzatma çizgilerini yazdığınız bir açıya eğdirir ({{key:Enter}} tuşuna basarsanız hiçbiri olmaz). {{cmd:DIMTEDIT}} metni ölçü çizgisinin **Sol**, **Sağ** ya da **Orta** tarafına taşır, ya da döndürür (**Açı**), ya da **Giriş** konumuna gönderir. Metin her zaman ölçü çizgisinin üzerinde durur: serbest bir yere sürüklenemez.
