---
title: Taralama ve dolgu alanları
summary: Bir alanın içine tıklayarak ya da kapalı şekiller seçerek düz bir renk ya da standart bir desenle doldurun, desenin ölçeğini ve açısını ayarlayın ve taramayı sonradan değiştirin.
keywords: taralama, bhatch, dolgu, düz dolgu, desen, ansi31, ansi37, tuğla, toprak, ağ, kesit çizgileri, poché, ada, sınır, ölçek, açı
from: 14399174
---

## Ne yapacaksınız

ANSI31 deseniyle doldurulmuş bir duvar kesiti, içinde boş bırakılmış bir kolon ve kolonda bir düz dolgu.

## İçine tıklayarak tarama

1. Bir dikdörtgen (`REC`, `0,0`, `@2000,1200`) ve içine bir daire (`C`, `1000,600`, `300`) çizin. {{ui:Sınırlar}} düğmesine tıklayın.
2. {{ui:Çiz}} grubundaki {{ui:Taralama}} düğmesine tıklayın ya da `H` yazıp {{key:Enter}}'a basın. Geçmiş, geçerli deseni gösterir; örneğin `Geçerli taralama: ANSI31, ölçek 1, açı 0°`.
3. `P` yazıp {{key:Enter}}'a basın, `ANSI31` yazıp {{key:Enter}}'a basın.
4. `SC` yazıp {{key:Enter}}'a basın, `20` yazıp {{key:Enter}}'a basın. Desen boyutları kâğıt üzerinde verilir; yani 1:20 ölçekte çıktı alınacak bir çizim için ölçek 20 olmalıdır.
5. `İç nokta seçin` isteminde dikdörtgenin içine, dairenin dışına tıklayın. Taralama bir önizleme olarak görünür.
6. {{key:Enter}}'a basın. Dikdörtgen taranır; içindeki daire boş kalır, çünkü bir ada'dır.

Birden çok alanı tek bir taralama yapmak için {{key:Enter}}'a basmadan önce hepsinin içine tıklayabilirsiniz. `U` son alanı geri alır.

## Düz dolgu

1. `H` yazıp {{key:Enter}}'a basın.
2. `P` yazıp {{key:Enter}}'a basın, `SOLID` yazıp {{key:Enter}}'a basın.
3. Dairenin içine tıklayın, sonra {{key:Enter}}'a basın.

## Seçtiğiniz kapalı şekilleri tarama

İçine tıklamak yerine `İç nokta seçin` isteminde `S` (Nesneleri seç) yazın, kapalı çoklu çizgileri, daireleri ya da kapalı elipsleri seçin ve {{key:Enter}}'a basın. Bir şeklin içindeki şekiller sırayla boş bırakılır (dıştaki taranır, bir sonraki boş kalır ve böyle devam eder).

## Desenler

Desen sorusunda listeyi görmek için `?` yazın. Standart desenler ANSI31'den ANSI38'e, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS ve EARTH, ayrıca SOLID'dir. Birimleri inç olan bir çizimde (ya da uzunluk biçimi fit ve inç ise) AutoCAD'deki gibi desenlerin inç boyutları kullanılır; aksi halde milimetre boyutları kullanılır.

{{ui:Açı}} (`A`) tüm deseni döndürür: 90° açılı ANSI31 ters yöne eğilir.

**Desen dosyaları.** `İç nokta seçin` isteminde `F` (Desen dosyası) yazın ve bir `.pat` dosyası seçin. İçindeki desenler listeye eklenir; birden fazla varsa hangisinin kullanılacağı sorulur. CadCraft'in okuyamadığı desenler içeren bir dosya bunu söyler ve atlanan her desen sayılır. Bir `.pat` dosyasındaki boyutların kendi birimi yoktur, bu yüzden çizimin birimleriyle okunurlar. Yalnızca olağan `.pat` biçiminde yazılmış dosyalar denenmiştir; başka bir program tarafından yapılan hiçbir dosya denenmemiştir.

## Taramayı değiştirin

Taramayı seçin (çizgilerinden birine tıklayın). {{ui:Özellikler}} içinde: {{ui:Desen}}, {{ui:Desen ölçeği}} ve {{ui:Desen açısı}}. Açılmış çizimlerdeki taramalar, standart desenlerden biriyse deseni gösterir; diğerleri, renklerinin açık bir tonu olarak görünür.

## Sık yapılan hatalar

- **"Bu nokta etrafında kapalı bir sınır yok."** Dış hatta bir boşluk var ya da bir kısmı ekran dışında: CadCraft yalnızca ekranda olanlara bakar. Boşluğu kapatın (köşelere yakınlaşarak) ya da uzaklaşın.
- **"Desen bu ölçekte çizilemeyecek kadar yoğun."** Çizgiler çizimin gösterebileceğinden daha yakın olurdu. Daha büyük bir ölçek kullanın: çıktı ölçeğini deneyin (1:20 için 20).
- **Desen çok büyük ya da çok küçük görünüyor.** Ölçek, desen biriminin başına düşen çizim birimi olarak verilir; yukarıdaki 4. adıma bakın.
- **Dış hattı taşımak taramayı taşımıyor.** Bir tarama sınırına bağlı değildir. İkisini birlikte taşıyın ya da yeniden taratın.

## Sınırıyla birlikte kalan tarama

`HATCH` ile yaptığınız bir tarama, onu sınırlayanı hatırlar. Sınırı taşıyın, döndürün ya da ölçeklendirin: tarama ve deseni onunla birlikte gider. Sınırı yeniden şekillendirmek için bir tutamacı sürükleyin; tarama yeniden hesaplanır. Taramayı tek başına taşırsanız sınırı da onunla gelir, tıpkı bir çizim programındaki dolu bir şekil gibi.

Sınır artık kapanmıyorsa ya da taramayı elle yeniden şekillendirirseniz bağlantı kopar ve komut satırı bunu söyler. Tarama yerinde kalır. Tarama yaparken `AS` yazarak tek başına duran taramalar oluşturun. Sınırıyla birlikte kopyalanan bir taramanın kopyası kendi bağlantısına sahiptir.

`HATCHEDIT` (`HE`) bir taramanın desenini, ölçeğini, açısını ve başlangıç noktasını değiştirir ve onu bir sınıra bağlar ya da bağlantıyı sonlandırır. Bağlantı DWG ve DXF 2000 dosyalarında kaydedilir. DXF R12 dosyasında taralama nesnesi yoktur ve başka programlarda yapılan bağlantılar okunmaz: bunlar için `HATCHEDIT` ve Bağla seçeneğini kullanın.

Sınırı kalmamış bir tarama (sınır silinmişse ya da dosya sınırsız gelmişse) sınırını geri alabilir: `HATCHGENERATEBOUNDARY` (`HGB`) taramanın her döngüsünün etrafına kapalı bir çoklu çizgi çizer ve Evet yanıtı verirseniz taramayı bunlara bağlar.

## Degrade dolgu

`GRADIENT` (`GD`) bir alanı desen yerine degradeyle doldurur: `HATCH` ile aynı seçimler yapılır; önce türü sorulur (doğrusal, silindirik, küresel, yarım küresel, eğri ve bunların her birinin ters hali), sonra bir renk ile ton ya da iki renk, açı ve ortalı olup olmadığı sorulur. `HATCH` içinde `G` seçeneği aynı işi yapar. `HATCHEDIT` `G` ya da {{ui:Özellikler}} altındaki Degrade, bir degradeyi değiştirir ya da herhangi bir taramayı degradeye çevirir.

Degrade ekranda ve çıktılarda görünür. DWG 2004 ya da sonrası olarak kaydedin, diğer programlar gerçek bir degrade taraması alır. DXF 2000 ve DWG 2000'de degrade yoktur: orada CadCraft onu kendisi için tutar ve diğer programlar ilk renkle düz bir dolgu görür.

## Taramayı kırpın

`TRIM` bir taramayı diğer nesneler gibi keser. Kesme kenarının istediğiniz tarafındaki taramaya tıklayın: kenarlar taranmış alanı böler ve o parça kaldırılır. Hızlı modda her nesne bir kesme kenarıdır; çok nesne varsa önce kenarları (`T` seçeneği) seçin. Kırpılmış bir tarama artık sınırına bağlı değildir, çünkü artık onu doldurmaz.
