---
title: Birimler, kâğıt boyutları ve ölçekler
summary: CadCraft'ta çizim birimlerinin anlamı, sayfalar ve çıktılar için kâğıt boyutları, her standart ölçek ve yazı ile ölçülendirme boyutlarının çıktı ölçeğiyle ilişkisi.
keywords: birimler, milimetre, inç, fit, fit ve inç, mimari, mühendislik, kesirli, kesirler, lunits, uzunluk biçimi, hassasiyet, metre, kâğıt boyutu, a3, a1, arch d, ansi, tabloid, letter, ölçek, 1:100, 1/4 inç, mimari ölçek, mühendislik ölçeği, insunits
from: 8346236a
---

## Çizim birimleri

Her şeyi tam ölçekte, çizim birimleriyle çizersiniz. Bir birimin neyi temsil ettiği çizimin **Birimler** ayarıdır:

1. {{key:Esc}} tuşuna basın, hiçbir şey seçili olmasın, {{ui:Model}} sekmesinde.
2. {{ui:Geçerli ayarlar}} altında {{ui:Birimler}} seçin: {{ui:Birimsiz}}, {{ui:Milimetre}}, {{ui:Santimetre}}, {{ui:Metre}}, {{ui:İnç}} ya da {{ui:Fit}}.

Ölçülendirmeler, çizim birimi ne olursa olsun uzunluklarını milimetre, santimetre, metre ya da kilometre olarak yazabilir: bkz. [mm, cm, m ya da km cinsinden ölçülendirmeler](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Birimleri değiştirmek hiçbir şeyi yeniden boyutlandırmaz. Sayfalarda ve çıktılarda ölçeklerin nasıl okunacağını ve hangi ölçeklerin sunulacağını değiştirir. DWG ya da DXF'ten açılan bir çizim, dosyada saklanan birimleri korur; sol paneldeki {{ui:Çizim}} bölümü bunları gösterir.

Bir {{ui:Birimsiz}} çizim, kâğıdın birimindedir sayılır: ISO kâğıtta milimetre, ABD kâğıdında inç.

## Fit ve inç, ve kesirler

Uzunlukların **nasıl yazıldığı ve yazılabildiği** ayrı bir ayardır: uzunluk biçimi. Geometriyi değiştirmez; yalnızca sayıların nasıl göründüğünü ve neyi yazabileceğinizi değiştirir.

1. {{key:Esc}} tuşuna basın, hiçbir şey seçili olmasın, {{ui:Model}} sekmesinde.
2. {{ui:Geçerli ayarlar}} altında {{ui:Uzunluk biçimi}} seçin: {{ui:Ondalık}} (`150.5`), {{ui:Mimari}} (`12'-6 1/2"`), {{ui:Mühendislik}} (`12'-6.5"`), {{ui:Kesirli}} (`150 1/2`) ya da {{ui:Bilimsel}} (`1.505E+02`).
3. {{ui:Hassasiyet}} seçin: ondalık basamak sayısı ya da en küçük kesir (mimari için genellikle 1/16 seçilir).

Ya da {{cmd:UNITS}} (`UN`) yazıp iki sorusunu yanıtlayın.

{{ui:Mimari}} ya da {{ui:Mühendislik}} ile bir çizim birimi bir inçtir, AutoCAD'deki gibi: {{ui:Birimler}} değerini de {{ui:İnç}} yapın. Bundan sonra bir uzunluk istenen her yerde ve {{ui:Özellikler}} kutularında fit ve inç olarak yazabilirsiniz:

| Yazdığınız | Anlamı |
|---|---|
| `12'6"` ya da `12'-6"` | 12 fit 6 inç (150) |
| `12'6-1/2"` | 12 fit 6½ inç. Kesirden önce bir tire kullanın: {{key:Space}} komut satırında {{key:Enter}} demektir. |
| `12'` | 12 fit |
| `6"` ya da `6` | 6 inç: çıplak bir sayı inçtir |
| `1/2`, `6-1/2` | kesirler her biçimde çalışır |

Noktalar aynı uzunlukları alır: `@12'6",0` ya da `@10'<90`. Açılar derece cinsinden kalır.

Biçim, geçmişte ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: alanlar kare inç ve kare fit olarak), {{ui:Özellikler}} içinde, durum çubuğundaki koordinatlarda ve **yeni ölçülendirmelerde** görünür. Sayfalar kâğıt birimlerini (milimetre ya da inç) ondalık olarak korur.

:::note
Uzunluk biçimi DWG ve DXF dosyalarına kaydedilir ve her ölçülendirme kendi biçimini tutar: kaydedilmiş bir çizim bıraktığınız gibi yeniden açılır.
:::

## Kâğıt boyutları

Sayfalar ve model çıktıları, her iki yönde de bu boyutları kullanır:

| Kâğıt | Boyut | Sayfadaki birim |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetre |
| ISO A3 | 420 × 297 mm | milimetre |
| ISO A2 | 594 × 420 mm | milimetre |
| ISO A1 | 841 × 594 mm | milimetre |
| ISO A0 | 1189 × 841 mm | milimetre |
| Letter | 11 × 8.5 in | inç |
| Legal | 14 × 8.5 in | inç |
| Tabloid / ANSI B | 17 × 11 in | inç |
| ANSI C | 22 × 17 in | inç |
| ANSI D | 34 × 22 in | inç |
| ARCH C | 24 × 18 in | inç |
| ARCH D | 36 × 24 in | inç |
| ARCH E | 48 × 36 in | inç |

Yeni sayfalar metrik ve birimsiz çizimlerde ISO A3 ile, inç ya da fit çizimlerde Tabloid ile başlar. Model çıktıları da aynı şekilde ISO A4 ya da Letter ile başlar, sonra son seçiminizi hatırlar. Açılmış dosyalardan gelen sayfalar kendi boyutlarını korur; bunlar bu listelerden biri değilse "Özel" olarak gösterilir.

## Ölçekler

`1:n` ölçeği, kâğıttaki bir birimin modelde aynı birimden n tane gösterdiği anlamına gelir; yani 1:100, bir metre binayı kâğıtta 10 milimetre olarak gösterir. CadCraft bunu çizim birimlerinden ve kâğıdın biriminden hesaplar.

**Metrik ölçekler**, her çizim için sunulur: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Mimari ölçekler**, birimler inç ya da fit olduğunda sunulur: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Mühendislik ölçekleri**, birimler inç ya da fit olduğunda sunulur: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Kendi ölçekleriniz.** `SCALELISTEDIT` (ya da `SCALELIST`) yazarak kendi ölçeğinizi ekleyin; örneğin 1:75 ya da 2 kâğıt : 300 çizim olan bir saha ölçeği. `Ekle (A)` bir ad ister, sonra kâğıt birimlerini ve çizim birimlerini sorar (`1:75` gibi bir ad kendi sayılarını sunar; onları almak için {{key:Enter}} tuşuna basın). `Düzenle (E)`, `Sil (D)`, `Listele (L)` ve `Sıfırla (R)` aynı liste üzerinde çalışır; `Sıfırla (R)` standart listeye döner. Kendi ölçekleriniz, Özellikler'deki görünüm penceresi ölçek listesinde ve {{ui:PDF'e çıktı al}} iletişim kutusunda standart olanlardan sonra görünür; o ölçekteki bir görünüm penceresi adıyla okunur ve ölçek listesi olarak çizimle birlikte saklanır (DWG ve DXF 2000). Başka bir programdan açılan bir çizim kendi listesini getirir; standart birine uyan ölçekler iki kez gösterilmez.

Bir görünüm penceresi {{ui:Tüm modeli göster}} ya da {{ui:Modelde bir pencere seçin…}} ile yönlendirildiğinde CadCraft, sığan en büyük standart ölçeği seçer. {{ui:Tüm modeli sığdır}} bunun yerine tam bir ölçek ayarlar; bu da düz bir oran olarak okunur.

## Kâğıtta ve modelde boyutlar

Yazı ve ölçülendirme boyutları, çizdiğiniz alanın birimlerindedir.

| Kâğıtta istediğiniz | Sayfada çizilen | Modelde 1:50'de çizildiğinde (mm çizim) | Modelde 1/4" = 1'-0" olarak çizildiğinde (inç çizim) |
|---|---|---|---|
| 2.5 mm metin | 2.5 | 125 | — |
| 3/32" metin | 0.09375 | — | 4.5 |

Ölçülendirmeler için boyutları kâğıt boyutu olarak tutun ve genel ölçeği ({{cmd:DIMSCALE}}) çıktı ölçeğine ayarlayın: 1:50 için 50, 1/4" = 1'-0" için 48. Bkz. [Ölçülendirme boyutlarını ayarlama](topic:dimension-settings).

## Ölçeğe göre açıklama

Modeli tam ölçekte çizin ve yukarıdaki hesapları CadCraft'a yaptırın.

1. Kâğıtta boyutunun korunmasını istediğiniz metni ya da ölçülendirmeleri seçin. Özellikler'de {{ui:Açıklamalı}} seçeneğini işaretleyin. {{ui:Kâğıt üzerindeki boyut}} örneğin `1:50'de 2.5 mm` gösterir.
2. {{cmd:ANNOSCALE}} yazın ve çizimin basılacağı ölçeği girin, örneğin `1:100`.

Her açıklamalı metin ve ölçülendirme, yeni ölçekte aynı boyutta basılacak şekilde yeniden boyutlandırılır: 1:50'de milimetre çizimde 2.5 mm metin 125 yüksekliğindedir, 1:100'de 250. Bir paragrafın genişliği onunla birlikte değişir; bir ölçülendirmenin metni, okları ve boşlukları birlikte değişir (genel ölçeği). Bu tek bir geri alma adımıdır ve açıklamalı olmayan nesneler hiçbir zaman değiştirilmez.

Bu ayar DWG ve DXF'te kaydedilir: diğer programlar açıklamalı bayrağını okur, CadCraft ayrıca her nesnenin boyutlandırıldığı ölçeği de tutar.

Ofisiniz kâğıt yüksekliklerini Varsayılan İlkeler eklentisinde ayarlıyorsa (Ayarlar › Genel › Varsayılan İlkeler › Kâğıt üzerindeki açıklama boyutları), {{cmd:ANNOSCALE}} yeni metnin başlayacağı yüksekliği de o ölçekteki notlar için ofisin yüksekliğine ayarlar. Bkz. [Varsayılan İlkeler](topic:default-policies).

### Bir nesne birden çok ölçekte

Bir sayfa genellikle aynı planı 1:100'de, bir parçasını ise 1:50'de gösterir. Notlara ve ölçülendirmelere her iki ölçeği verin; her görünüm penceresi onları kendi kâğıt boyutlarında gösterir:

1. Açıklamalı metinleri ve ölçülendirmeleri seçin ve `OBJECTSCALE` yazın.
2. `Ekle (A)` seçin ve ölçeği yazın, örneğin `1:50`. (`Geçerli ölçek (C)` çizimin açıklama ölçeğini ekler; `Listele (L)` her nesnenin neyi tuttuğunu gösterir; `Sil (D)` birini kaldırır.)

Nesnenin listesindeki bir ölçekte olan görünüm penceresi, onu o ölçeğin boyutunda gösterir: 2.5 mm metin, 1:100 görünüm penceresinde 250 yüksekliğinde, 1:50 olanında 125 yüksekliğinde çizilir; ekranda ve çıktıda da. Nesne yerinde kalır; yalnızca boyutu farklıdır. Listede olmayan bir ölçekteki görünüm penceresinde nesne, `ANNOALLVISIBLE` yazıp `KAPALI` seçene kadar sahip olduğu boyutta gösterilir: o zaman orada dışarıda bırakılır. {{cmd:ANNOSCALE}} yeni ölçeği listeleyen nesneleri yeniden boyutlandırır ve diğerlerini olduğu gibi bırakır.

Listeler DWG ve DXF'te CadCraft'ın kendi verisi olarak kaydedilir. Başka bir program her nesneyi açıklamalı olarak, boyutlandırıldığı tek ölçekte görür. ANNOALLVISIBLE anahtarı dosyada tutulmaz.

## Çizgi kalınlıkları ve çizgi tipleri

Bir katmanın ya da bir nesnenin bir **çizgi kalınlığı** (0.05 ila 2.11 mm) ve bir **çizgi tipi** (kesikli, gizli, merkez, hayalet, nokta…) olabilir. Bunları sağ panelde ayarlayın: hiçbir şey seçili değilken {{ui:Geçerli ayarlar}} altındaki {{ui:Çizgi tipi}} ve {{ui:Çizgi kalınlığı}} yeni nesnelerin alacağı değerlerdir ({{ui:Katmana göre}} katmanı izlemek için); {{ui:Katman …}} altındaki iki satır ise geçerli katmanın kendi değerleridir. Nesneler seçiliyken aynı iki satır ve {{ui:Çizgi tipi ölçeği}} o nesneleri değiştirir. Komutlar {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ve {{cmd:LTSCALE}} (`LTS`)'dir.

Çizgi tipleri ekranda ve çıktılarda görünür. Kesikleri çizim birimlerindedir: metrik bir çizim ISO boyutlarını kullanır (DASHED: 12.7 mm kesik), bir inç çizim inç boyutlarını (0.5"). Kesikler çok küçük ya da çok büyük görünüyorsa, çizimin {{ui:Çizgi tipi ölçeği}} (LTSCALE) değerini değiştirin: her kesik ve boşluk bununla çarpılır; bir nesnenin kendi ölçeği bunu bir kez daha çarpar. Hiç görünmeyecek kadar ince bir desen düz bir çizgi olarak çizilir.

Çizgi kalınlıkları çıktılarda basılır: kâğıt üzerinde mm cinsinden, ölçek ne olursa olsun. {{ui:Varsayılan}} çizgi kalınlığındaki çizgiler, {{ui:PDF'e çıktı al}} iletişim kutusunda seçilen kalem genişliğini kullanır (0.13 ila 0.70 mm; başlangıçta 0.25 mm); 0 çizgi kalınlığı en ince çizgi olarak basılır. Ekranda, durum çubuğundaki {{ui:LWT}} düğmesine basana kadar (ya da {{cmd:LWDISPLAY}} yazana kadar) her çizgi bir piksel genişliğindedir: sonra 0.25 mm'den büyük bir çizgi kalınlığı modelde daha geniş çizilir (0.5 mm = 2 piksel), bir sayfada ise kâğıt üzerindeki gerçek genişliğinde. Seçim bu tarayıcıda saklanır.
