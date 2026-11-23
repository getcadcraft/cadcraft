---
title: Birimler, kâğıt boyutları ve ölçekler
summary: CadCraft'ta çizim birimlerinin ne anlama geldiği, sayfalar ve çıktılar için kâğıt boyutları, her standart ölçek ve metin ile ölçülendirme boyutlarının çıktı ölçeğiyle ilişkisi.
keywords: birimler, milimetre, inç, fit, fit ve inç, mimari, mühendislik, kesirli, kesirler, lunits, uzunluk biçimi, hassasiyet, metre, kâğıt boyutu, a3, a1, arch d, ansi, tabloid, letter, ölçek, 1:100, 1/4 inç, mimari ölçek, mühendislik ölçeği, insunits
from: 7dc9b62e
---

## Çizim birimleri

Gerçek boyutta, çizim birimleriyle çizersiniz. Bir birimin neyi temsil ettiği çizimin **Birimler** ayarıdır:

1. Hiçbir şey seçili olmasın diye {{key:Esc}}'e basın, {{ui:Model}} sekmesinde.
2. {{ui:Geçerli ayarlar}} içinde {{ui:Birimler}}'i seçin: {{ui:Birimsiz}}, {{ui:Milimetre}}, {{ui:Santimetre}}, {{ui:Metre}}, {{ui:İnç}} ya da {{ui:Fit}}.

Ölçülendirmeler, çizim birimi ne olursa olsun uzunluklarını milimetre, santimetre, metre ya da kilometre olarak yazabilir: bkz. [Ölçülendirmeler mm, cm, m ya da km cinsinden](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Birimleri değiştirmek hiçbir şeyi yeniden boyutlandırmaz. Sayfalarda ve çıktılarda ölçeklerin nasıl okunacağını ve hangi ölçeklerin sunulacağını değiştirir. DWG ya da DXF'ten açılan bir çizim, dosyada saklanan birimleri korur; sol paneldeki {{ui:Çizim}} bölümü bunları gösterir.

{{ui:Birimsiz}} bir çizim, kâğıdın birimindeymiş gibi işlenir: ISO kâğıtlarda milimetre, ABD kâğıtlarında inç.

## Fit ve inç, ve kesirler

Uzunlukların **nasıl yazıldığı ve girildiği** ayrı bir ayardır, uzunluk biçimi. Hiçbir geometriyi değiştirmez, yalnızca sayıların görünüşünü ve neyi yazabileceğinizi değiştirir.

1. Hiçbir şey seçili olmasın diye {{key:Esc}}'e basın, {{ui:Model}} sekmesinde.
2. {{ui:Geçerli ayarlar}} içinde {{ui:Uzunluk biçimi}}'ni seçin: {{ui:Ondalık}} (`150.5`), {{ui:Mimari}} (`12'-6 1/2"`), {{ui:Mühendislik}} (`12'-6.5"`), {{ui:Kesirli}} (`150 1/2`) ya da {{ui:Bilimsel}} (`1.505E+02`).
3. {{ui:Hassasiyet}}'i seçin: ondalık basamaklar ya da en küçük kesir (mimari için genellikle 1/16).

Ya da {{cmd:UNITS}} (`UN`) yazın ve iki sorusunu yanıtlayın.

{{ui:Mimari}} ya da {{ui:Mühendislik}} ile, bir çizim birimi bir inçtir, AutoCAD'deki gibi: {{ui:Birimler}}'i de {{ui:İnç}} yapın. O zaman uzunluk istenen her yerde ve {{ui:Özellikler}} kutularında fit ve inç yazabilirsiniz:

| Yazdığınız | Anlamı |
|---|---|
| `12'6"` ya da `12'-6"` | 12 fit 6 inç (150) |
| `12'6-1/2"` | 12 fit 6½ inç. Kesirden önce bir kısa çizgi kullanın: {{key:Space}} komut satırında {{key:Enter}}'dır. |
| `12'` | 12 fit |
| `6"` ya da `6` | 6 inç: çıplak bir sayı inçtir |
| `1/2`, `6-1/2` | kesirler her biçimde çalışır |

Noktalar aynı uzunlukları alır: `@12'6",0` ya da `@10'<90`. Açılar derece olarak kalır.

Biçim tarihçede ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: alanlar kare inç ve kare fit olarak), {{ui:Özellikler}}'de, durum çubuğundaki koordinatlarda ve **yeni ölçülendirmelerde** görünür. Sayfalar kâğıt birimlerini (milimetre ya da inç) ondalık olarak korur.

:::note
Uzunluk biçimi DWG ve DXF dosyalarına kaydedilir ve her ölçülendirme kendi biçimini tutar: kaydedilmiş bir çizim bıraktığınız gibi açılır.
:::

## Kâğıt boyutları

Sayfalar ve model çıktıları bu boyutları, her iki yönde kullanır:

| Kâğıt | Boyut | Sayfadaki birim |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetre |
| ISO A3 | 420 × 297 mm | milimetre |
| ISO A2 | 594 × 420 mm | milimetre |
| ISO A1 | 841 × 594 mm | milimetre |
| ISO A0 | 1189 × 841 mm | milimetre |
| Letter | 11 × 8,5 inç | inç |
| Legal | 14 × 8,5 inç | inç |
| Tabloid / ANSI B | 17 × 11 inç | inç |
| ANSI C | 22 × 17 inç | inç |
| ANSI D | 34 × 22 inç | inç |
| ARCH C | 24 × 18 inç | inç |
| ARCH D | 36 × 24 inç | inç |
| ARCH E | 48 × 36 inç | inç |

Yeni sayfalar metrik ve birimsiz çizimlerde ISO A3 ile, inç ya da fit çizimlerde Tabloid ile başlar. Model çıktıları aynı biçimde ISO A4 ya da Letter ile başlar, sonra son seçiminizi hatırlar. Açılmış dosyalardaki sayfalar kendi boyutlarını korur; bunlardan biri değilse "Özel" olarak gösterilir.

## Ölçekler

`1:n` ölçeği, kâğıtta bir birimin modelde aynı birimden n tane demektir; yani 1:100, 1 m'lik bir binayı 10 mm kâğıtta gösterir. CadCraft bunu çizim birimlerinden ve kâğıdın biriminden hesaplar.

**Metrik ölçekler**, her çizim için sunulur: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Mimari ölçekler**, birimler inç ya da fitken sunulur: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Mühendislik ölçekleri**, birimler inç ya da fitken sunulur: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Kendi ölçekleriniz.** 1:75 gibi ya da 2 kâğıt : 300 çizim olan bir arsa ölçeği gibi kendi ölçeğinizi eklemek için `SCALELISTEDIT` (ya da `SCALELIST`) yazın. `Ekle` bir ad ister, sonra kâğıt birimlerini ve çizim birimlerini (`1:75` gibi bir ad kendi sayılarını sunar; onları almak için {{key:Enter}}'a basın). `Düzenle`, `Sil`, `Listele` ve `Sıfırla` aynı listede çalışır; `Sıfırla` standart listeye döner. Kendi ölçekleriniz, Özellikler'deki görünüm penceresi ölçek listesinde ve {{ui:PDF'e çıktı al}} iletişim kutusunda standartların ardından görünür; o ölçekteki bir görünüm penceresi adıyla okunur, ve çizimde (DWG ve DXF 2000) çizimin ölçek listesi olarak kaydedilirler. Başka bir programdan açılan bir çizim kendi listesini getirir; standartlardan biriyle eşleşen ölçekler iki kez gösterilmez.

{{ui:Tüm modeli göster}} ya da {{ui:Modelde bir pencere seçin…}} ile bir görünüm penceresi hedeflendiğinde, CadCraft sığan en büyük standart ölçeği seçer. {{ui:Tüm modeli sığdır}} bunun yerine tam bir ölçek ayarlar; bu da düz bir oran olarak okunur.

## Kâğıt üzerindeki ve modeldeki boyutlar

Metin ve ölçülendirme boyutları, çizdiğiniz alanın birimlerindedir.

| Kâğıtta istediğiniz | Sayfada çizilen | Modelde 1:50'de çizilen (mm çizim) | Modelde 1/4" = 1'-0" çizilen (inç çizim) |
|---|---|---|---|
| 2,5 mm metin | 2,5 | 125 | — |
| 3/32" metin | 0,09375 | — | 4,5 |

Ölçülendirmeler için boyutları kâğıt boyutları olarak tutun ve genel ölçeği ({{cmd:DIMSCALE}}) çıktı ölçeğine ayarlayın: 1:50 için 50, 1/4" = 1'-0" için 48. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings).

## Ölçeğe göre açıklama

Modeli gerçek boyutta çizin ve yukarıdaki hesapları CadCraft'a yaptırın.

1. Kâğıtta boyutunu korumak isteyen metni ya da ölçülendirmeleri seçin. Özellikler'de {{ui:Açıklamalı}}'yı işaretleyin. {{ui:Kâğıt üzerindeki boyut}} o zaman örneğin `1:50'de 2,5 mm` yazar.
2. Çizimin basılacağı ölçeği, örneğin `1:100`, {{cmd:ANNOSCALE}} yazarak girin.

Her açıklamalı metin ve ölçülendirme, yeni ölçekte aynı boyutta basılacak şekilde yeniden boyutlandırılır: milimetre çizimde 1:50'de 2,5 mm metin 125 yükseklikte, 1:100'de 250 yükseklikte olur. Bir paragrafın genişliği onunla birlikte değişir; bir ölçülendirmenin metni, okları ve boşlukları birlikte değişir (genel ölçeği). Tek bir geri al adımıdır ve açıklamalı olmayan nesnelere asla dokunulmaz.

Ayar DWG ve DXF'te kaydedilir: öteki programlar açıklamalı işaretini okur, CadCraft da her nesnenin boyutlandırıldığı ölçeği tutar.

Ofisiniz Varsayılan Politikalar eklentisinde kâğıt yüksekliklerini ayarlıyorsa (Ayarlar › Genel › Varsayılan Politikalar › Kâğıt üzerindeki açıklama boyutları), {{cmd:ANNOSCALE}} ayrıca yeni metnin başlayacağı yüksekliği o ölçekteki notlar için ofisin yüksekliğine ayarlar. Bkz. [Varsayılan Politikalar](topic:default-policies).

### Bir nesne birkaç ölçekte

Bir sayfa genellikle aynı planı 1:100'de ve bir parçasını 1:50'de gösterir. Notlara ve ölçülendirmelere iki ölçeği de verin; her görünüm penceresi onları kendi kâğıt boyutlarında gösterir:

1. Açıklamalı metni ve ölçülendirmeleri seçin ve `OBJECTSCALE` yazın.
2. `Ekle` seçin ve ölçeği yazın, örneğin `1:50`. (`Geçerli ölçek` çizimin açıklama ölçeğini ekler; `Listele` her nesnenin neyi tuttuğunu gösterir; `Sil` birini çıkarır.)

Bir nesnenin listesinde olan bir ölçeğe sahip bir görünüm penceresi, nesneyi o ölçek için boyutta gösterir: 2,5 mm metin 1:100 görünüm penceresinden 250 yükseklikte, 1:50 görünüm penceresinden 125 yükseklikte çizilir; ekranda ve çıktıda. Nesne yerinde durur; yalnızca boyutu farklıdır. Listesinde olmayan bir ölçekteki görünüm penceresinde nesne sahip olduğu boyutta gösterilir; `ANNOALLVISIBLE` yazıp `KAPALI` seçene kadar. O zaman orada dışarıda bırakılır. {{cmd:ANNOSCALE}}, yeni ölçeği listeleyen nesneleri yeniden boyutlandırır ve öteki nesneleri olduğu gibi bırakır.

Listeler DWG ve DXF'te CadCraft'ın kendi verisi olarak kaydedilir. Öteki bir program her nesneyi, boyutlandırıldığı tek bir ölçekte açıklamalı olarak görür. ANNOALLVISIBLE anahtarı dosyada tutulmaz.

## Çizgi kalınlıkları ve çizgi tipleri

Bir katmanın ya da bir nesnenin bir **çizgi kalınlığı** (0,05 ile 2,11 mm) ve bir **çizgi tipi** (kesikli, gizli, merkez, hayali, nokta…) olabilir. Bunları sağ panelde ayarlayın: hiçbir şey seçili değilken, {{ui:Geçerli ayarlar}} altındaki {{ui:Çizgi tipi}} ve {{ui:Çizgi kalınlığı}} yeni nesnelerin alacaklarıdır ({{ui:Katmana göre}} seçerek katmanlarını izlerler); {{ui:Katman …}} altındaki ikisi de geçerli katmanın kendi değerleridir. Nesneler seçiliyken aynı iki satır ve {{ui:Çizgi tipi ölçeği}} o nesneleri değiştirir. Komutlar {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ve {{cmd:LTSCALE}} (`LTS`)'dir.

Çizgi tipleri ekranda ve çıktılarda görünür. Kesikleri çizim birimlerindedir: metrik bir çizim ISO boyutlarını kullanır (DASHED: 12,7 mm kesik), bir inç çizimi inç boyutlarını kullanır (0,5"). Kesikler çok küçük ya da çok büyük görünürse, çizimin {{ui:Çizgi tipi ölçeği}} (LTSCALE) değerini değiştirin: her kesik ve boşluk bununla çarpılır; bir nesnenin kendi ölçeği bunu yeniden çarpar. Hiç görülemeyecek kadar ince bir örüntü düz bir çizgi olarak çizilir.

Çizgi kalınlıkları çıktılarda basılır: kâğıtta mm cinsinden, ölçekten bağımsız olarak. {{ui:Varsayılan}} çizgi kalınlığındaki çizgiler, {{ui:PDF'e çıktı al}} iletişim kutusunda seçtiğiniz kalem genişliğini kullanır (0,13 ile 0,70 mm; başlangıçta 0,25 mm); 0 çizgi kalınlığı en ince çizgi olarak basılır. Ekranda her çizgi, durum çubuğundaki {{ui:LWT}}'ye basana kadar (ya da {{cmd:LWDISPLAY}} yazana kadar) bir piksel genişliğindedir: o zaman 0,25 mm'nin üstündeki bir çizgi kalınlığı modelde daha geniş çizilir (0,5 mm = 2 piksel), ve bir sayfada kâğıttaki gerçek genişliğinde. Seçim bu tarayıcıda tutulur.

## Ofis standardı

Bir ofis, kâğıt metin yüksekliklerini, katmanlarını, künye alanlarını ve şablonlarını tek bir kayıtta, ofis standardında tutabilir. CadCraft onu şu sırayla okur: çizimin kendi kaydı ({{cmd:OFFICESTANDARD}} › `İçe aktar` ile ayarlanır, dosyada tutulur), ekibinizin ortak standardı, sonra Varsayılan Politikalarınız. Açıklamalı metin ve ölçülendirmeler, açıklama ölçeğinde kâğıt yüksekliklerini oradan alır. Boş bir standart hiçbir şeyi değiştirmez. {{cmd:OFFICESTANDARD}} › `Katmanlar`, bir çizimin eksik olduğu ofis katmanlarını ekler.
