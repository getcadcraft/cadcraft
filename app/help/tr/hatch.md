---
title: Taralama ve dolgu alanları
summary: Bir alanı içine tıklayarak ya da kapalı şekilleri seçerek katı bir renk ya da standart bir desenle doldurun, desenin ölçeğini ve açısını ayarlayın ve sonradan bir taralamayı değiştirin.
keywords: taralama, bhatch, dolgu, katı dolgu, desen, ansi31, ansi37, tuğla, toprak, file, kesit çizgileri, poché, ada, sınır, ölçek, açı
from: e7feb344
---

## Ne yapacaksınız

ANSI31 deseniyle doldurulmuş bir duvar kesiti, içinde boş bırakılmış bir kolon ve kolonda katı bir dolgu.

## Bir alanın içine tıklayarak taralama

1. Bir dikdörtgen çizin (`REC`, `0,0`, `@2000,1200`) ve içine bir daire (`C`, `1000,600`, `300`). {{ui:Sınırlar}} düğmesine tıklayın.
2. {{ui:Çiz}} grubunda {{ui:Taralama}} düğmesine tıklayın ya da `H` yazıp {{key:Enter}} tuşuna basın. Tarihçe hangi desenin geçerli olduğunu söyler, örneğin `Geçerli taralama: ANSI31, ölçek 1, açı 0°`.
3. `P` yazıp {{key:Enter}} tuşuna basın, `ANSI31` yazıp {{key:Enter}} tuşuna basın.
4. `SC` yazıp {{key:Enter}} tuşuna basın, `20` yazıp {{key:Enter}} tuşuna basın. Desen boyutları kâğıt üzerindedir, bu yüzden 1:20 ölçekte basılacak bir çizim için ölçek 20 olmalıdır.
5. `İç noktayı belirtin` isteminde, dairenin dışında, dikdörtgenin içine tıklayın. Taralama bir önizleme olarak görünür.
6. {{key:Enter}} tuşuna basın. Dikdörtgen taranır; içindeki daire boş kalır, çünkü bir adadır.

{{key:Enter}} tuşuna basmadan önce birkaç alana tıklayarak bunları tek bir taralama yapabilirsiniz. `U` son alanı geri alır.

## Katı dolgu

1. `H` yazıp {{key:Enter}} tuşuna basın.
2. `P` yazın, {{key:Enter}} tuşuna basın, `SOLID` yazıp {{key:Enter}} tuşuna basın.
3. Dairenin içine tıklayın, sonra {{key:Enter}} tuşuna basın.

## Seçtiğiniz kapalı şekilleri taralama

İçine tıklamak yerine, `İç noktayı belirtin` isteminde `S` (Nesne seç) yazın, kapalı çoklu çizgileri, daireleri ya da kapalı elipsleri seçin, sonra {{key:Enter}} tuşuna basın. Bir şeklin içindeki şekiller sırayla boş bırakılır (dıştaki taranır, bir sonraki içeride boş kalır, ve böyle devam eder).

## Desenler

Listeyi görmek için desen sorusunda `?` yazın. Standart olanlar ANSI31'den ANSI38'e, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS ve EARTH, ve SOLID'dir. İnç cinsinden bir çizimde (ya da uzunluk biçimi fit ve inç olan bir çizimde) desenlerin inç boyutları kullanılır, AutoCAD'deki gibi; aksi halde milimetre boyutları.

{{ui:Açı}} (`A`) tüm deseni döndürür: 90°'deki ANSI31 öteki yöne eğilir.

**Desen dosyaları.** `İç noktayı belirtin` isteminde `F` (Desen dosyası) yazın ve bir `.pat` dosyası seçin. İçindeki desenler listeye katılır; birden fazlaysa hangisinin kullanılacağı sorulur. CadCraft'ın okuyamadığı desen içeren bir dosya bunu söyler ve atladığı her desen sayılır. Bir `.pat` dosyasındaki boyutların kendi birimi yoktur, bu yüzden çizimin birimlerinde okunurlar. Yalnızca olağan `.pat` biçiminde yazılmış dosyalar denenmiştir; başka bir programın yaptığı hiçbiri denenmemiştir.

## Bir taralamayı değiştirin

Seçin (çizgilerinden birine tıklayın). {{ui:Özellikler}} içinde: {{ui:Desen}}, {{ui:Desen ölçeği}} ve {{ui:Desen açısı}}. Açılmış çizimlerdeki taralamalar, standart desenlerden biriyse desenlerini gösterir; diğerleri rengin açık bir tonu olarak görünür.

## Sık yapılan hatalar

- **"Bu noktanın çevresinde kapalı bir sınır yok."** Dış hatta bir boşluk var ya da bir kısmı ekranın dışında: CadCraft yalnızca ekranda olanlara bakar. Boşluğu kapatın (köşelerde yakınlaştırarak) ya da uzaklaşın.
- **"Desen bu ölçekte çizilemeyecek kadar sık."** Çizgiler çizimin gösterebileceğinden daha yakın olurdu. Daha büyük bir ölçek kullanın: basım ölçeğini deneyin (1:20 için 20).
- **Desen çok büyük ya da çok küçük görünüyor.** Ölçek, desen biriminde çizim birimi cinsindendir; yukarıdaki 4. adıma bakın.
- **Taralama dış hattını izlemeyi bıraktı.** {{cmd:HATCH}} ile yapılmış bir taralama, yapıldığı nesnelerle birlikte kalır: dış hattı taşıyın, döndürün ya da ölçekleyin, taralama onunla gider; taralamayı bir tutamaçla yeniden şekillendirirseniz taralama yeniden hesaplanır. Bağ, dış hat artık kapanmadığında, taralamayı elle yeniden şekillendirdiğinizde ya da kırpdığınızda biter ve komut satırı bunu söyler. Hiçbir şey kaybolmaz: bağlamak için alanı yeniden taralayın.

## Sınırıyla kalan bir taralama

`HATCH` ile yaptığınız bir taralama, onu sınırlayanları hatırlar. Sınırı taşıyın, döndürün ya da ölçekleyin: taralama ve deseni onunla gider. Sınırı yeniden şekillendirmek için bir tutamacı sürükleyin: taralama yeniden hesaplanır. Taralamayı tek başına taşırsanız sınırı da onunla gelir, bir çizim programındaki dolu bir şekil gibi.

Bağ biter ve komut satırı bunu söyler: sınır artık kapanmıyorsa ya da taralamayı elle yeniden şekillendirdiyseniz. Taralamanın kendisi kalır. Taramayı yaparken `AS` yazarak tek başına duran taralamalar yapın. Sınırıyla birlikte bir taralamayı kopyalarsanız, kopyanın kendi bağı olur.

`HATCHEDIT` (`HE`) bir taralamanın desenini, ölçeğini, açısını ve başlangıcını değiştirir ve onu bir sınıra bağlar ya da bağı biter. Bağ DWG ve DXF 2000 dosyalarında kaydedilir. Bir DXF R12 dosyasında taralama nesnesi yoktur ve başka programlarda yapılmış bağlar okunmaz: onlar için `HATCHEDIT` ve Bağla kullanın.

Artık sınırı olmayan bir taralama (sınır silinmişse ya da dosya onsuz geldiyse) sınırını geri alabilir: `HATCHGENERATEBOUNDARY` (`HGB`) taralamanın her döngüsünün etrafında kapalı bir çoklu çizgi çizer ve Evet yanıtlarsanız taralamayı onlara bağlar.

## Geçiş dolgusu

`GRADIENT` (`GD`) bir alanı bir desen yerine bir geçişle doldurur: `HATCH` ile aynı seçimler, önce türü sorduktan sonra (doğrusal, silindirik, küresel, yarım küresel, eğri ve bunların her birinin ters hali), bir tonlu bir renk ya da iki renk, açı, ve ortalı olup olmadığı. `HATCH` içinde `G` seçeneği aynısını yapar. `HATCHEDIT` `G`, ya da {{ui:Özellikler}} içindeki Geçiş, bir geçişi değiştirir ya da herhangi bir taralamayı bir geçişe çevirir.

Bir geçiş ekranda ve basımlarda görünür. DWG 2004 ve sonrası olarak kaydedin, öteki programlar gerçek bir geçiş taralaması alır. DXF 2000 ve DWG 2000'de geçiş yoktur: orada CadCraft onu kendisi için tutar ve öteki programlar ilk renkte katı bir dolgu görür.

## Taralamayı kırpın

`TRIM` bir taralamayı herhangi bir nesne gibi keser. Kesici kenarın istediğiniz tarafındaki taralamaya tıklayın: kenarlar taranmış alanı böler ve o parça alınır. Hızlı kipte her nesne bir kesici kenardır; çok nesne varsa önce kenarları seçin (`T` seçeneği). Kırpılmış bir taralama artık sınırına bağlı değildir, çünkü artık onu doldurmaz.
