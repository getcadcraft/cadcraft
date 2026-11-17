---
title: Taşı, kopyala, döndür, ölçekle, aynala, uzat ve dizi oluştur
summary: Temel değiştirme komutlarıyla bir odaya mobilya yerleştirin; temel noktaları, yazılan mesafeleri ve geri almayı kullanın.
keywords: taşı, kopyala, döndür, ölçekle, aynala, uzat, dizi, birleştir, matchprop, özellikleri eşleştir, boyacı, arrayrect, arraypolar, kutupsal dizi, sil, patlat, geri al, yinele, temel nokta, yer değiştirme, değiştir, hizala, aralıkları eşitle, eşit aralıkla yerleştir
from: 8eaeee6c
---

## Ne yapacaksınız

Bir masa ve masanın etrafına kopyalanmış, döndürülmüş, aynalanmış ve yeniden boyutlandırılmış tek bir sandalye. Bu sırada {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} ve {{cmd:UNDO}} komutlarını kullanırsınız.

## Parçaları çizin

1. `REC` yazın ve {{key:Enter}}'a basın, `0,0` yazın ve {{key:Enter}}'a basın, ardından `@1800,900` yazın ve {{key:Enter}}'a basın. Bu masadır.
2. `REC` yazın ve {{key:Enter}}'a basın, `300,-700` yazın ve {{key:Enter}}'a basın, ardından `@450,450` yazın ve {{key:Enter}}'a basın. Bu, masanın altındaki bir sandalyedir.
3. {{ui:Extents}} düğmesine tıklayın.

## Taşı: temel nokta, ardından ikinci nokta

Her taşıma, kopyalama, döndürme ve ölçekleme bir **temel nokta** ile başlar: birlikte taşınan ya da etrafında döndürülen nokta.

1. Sandalyeyi seçmek için üzerine tıklayın.
2. `M` yazın ve {{key:Enter}}'a basın. Geçmişte `1 bulundu` yazar.
3. `Temel noktayı belirtin` isteminde, sandalyenin sol üst köşesini Uç nokta ile yakalayın ve tıklayın.
4. `İkinci noktayı belirtin` isteminde `@0,200` yazın ve {{key:Enter}}'a basın.

Sandalye 200 birim yukarı, masaya yaklaşarak hareket eder.

:::tip
Bunun yerine yer değiştirme vermek için `Temel noktayı belirtin` isteminde `D` yazın: CadCraft bunun üzerine `Yer değiştirmeyi belirtin` ister ve yatay ile dikey olarak ne kadar gideceğinizi yazarsınız, örneğin `0,200` (`@` gerekmez).
:::

## Kopyala, istediğiniz kadar

1. Sandalyeye tıklayın.
2. `CO` yazın ve {{key:Enter}}'a basın.
3. Sandalyenin sol alt köşesini yakalayın ve temel nokta olarak tıklayın.
4. `@600,0` yazın ve {{key:Enter}}'a basın. 600 birim sağda bir kopya belirir.
5. `@600,0` değerini yeniden yazın ve {{key:Enter}}'a basın. Orijinalin 1200 birim sağında ikinci bir kopya belirir.
6. Komutu bitirmek için {{key:Enter}}'a basın.

{{cmd:COPY}} {{key:Enter}}'a basana kadar devam eder. Her kopya, temel noktadan verdiğiniz noktaya olan mesafeyle yerleştirilir. `@` noktası son girilen noktadan sayılır; ilk kopyadan sonra bu, o kopyanın noktasıdır, bu yüzden `@600,0` iki kez girildiğinde kopyalar 600 ve 1200'de oluşur. Komutu bırakmadan son kopyayı geri almak için `U` yazın ve {{key:Enter}}'a basın.

Masanın altında yan yana üç sandalye görmelisiniz.

:::tip
{{cmd:COPY}}, bir temel noktayla yerleştirilen, tek bir çizim içindeki kopyalar içindir. Nesneleri başka bir çizime ya da sekmeye taşımak veya sonra yapıştırmak için panoyu kullanın: {{key:Mod+C}}, ardından {{key:Mod+V}}. {{key:Mod+D}} ise imleçle birlikte hareket eden tek bir kopya oluşturur. Bkz. [Kopyala, yapıştır ve çoğalt](topic:copy-paste).
:::

## Sıranın diğer tarafa aynasını alın

1. Üç sandalyenin üzerinden, masaya dokunmadan sağdan sola doğru bir kesişen pencere sürükleyin.
2. `MI` yazın ve {{key:Enter}}'a basın.
3. `Ayna çizgisinin ilk noktasını belirtin` isteminde, masanın sol kenarının Orta nokta'sını yakalayın ve tıklayın.
4. `Ayna çizgisinin ikinci noktasını belirtin` isteminde, masanın sağ kenarının Orta nokta'sını yakalayın ve tıklayın.
5. `Kaynak nesneler silinsin mi? [Evet (Y)/Hayır (N)] <N>` isteminde, bunları tutmak için {{key:Enter}}'a basın.

Masanın altında üç sandalye ve üstünde üç aynalanmış sandalye görmelisiniz. Aynalanan seçimdeki metin okunabilir kalır: ayna görüntüsü olarak yerleştirilir ama tersine yazılmaz.

## Bir sandalyeyi döndürün

1. Masanın altındaki en sağdaki sandalyeye tıklayın.
2. `RO` yazın ve {{key:Enter}}'a basın.
3. Sandalyenin sağ alt köşesini yakalayın ve temel nokta olarak tıklayın.
4. `90` yazın ve {{key:Enter}}'a basın.

Sandalye temel nokta etrafında saat yönünün tersine 90 derece döner. Negatif bir açı saat yönünde döndürür. Yazmak yerine, ikinci bir nokta da tıklayabilirsiniz: açı, temel noktadan o noktaya ölçülür.

## Masayı ölçekleyin

1. Masayı seçin.
2. `SC` yazın ve {{key:Enter}}'a basın.
3. Masanın sol alt köşesini yakalayın ve temel nokta olarak tıklayın.
4. `1.2` yazın ve {{key:Enter}}'a basın.

Masa %20 büyür ve temel noktadan uzaklaşarak genişler. 1'den küçük bir çarpan onu küçültür.

:::note
Ölçek çarpanını yazmak yerine bir nokta tıklarsanız, çarpan temel noktadan o noktaya olan mesafedir. Çizim biriminde bir uzaklığa tıklamak 1 çarpanını verir. Genellikle sayıyı yazmak istediğiniz şeydir.
:::

## Geri al ve yinele

- {{key:Mod+Z}}, {{ui:Undo}} düğmesi veya `U` ardından {{key:Enter}} son komutu geri alır. Bütün bir komut tek adımdır: beş kopya oluşturan bir {{cmd:COPY}} komutunu geri almak beşini de kaldırır.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, {{ui:Redo}} düğmesi veya `REDO` onu geri getirir.
- Geçmiş, neyin geri alındığını söyler ("COPY geri alındı").

CadCraft son 500 adımı tutar. Katman ayarları (açık, dondurulmuş, kilitli, renk) düzenleme değil ayardır ve geri alınmaz.

## Bir odayı genişletin

{{cmd:STRETCH}} (`S` ya da {{ui:Stretch}}) yalnızca kesişen bir pencerenin içinde kalan şeyleri taşır: içinde kalan köşeler ve çizgi uçları hareket eder, geri kalan her şey yerinde kalır; böylece oda taşınmak yerine genişler.

1. `S` yazın ve {{key:Enter}}'a basın.
2. Sağdaki duvarın köşelerini ve ona değen şeylerin uçlarını kapsayacak şekilde, sağdan sola doğru bir pencere sürükleyin.
3. {{key:Enter}}'a basın.
4. Bir temel nokta tıklayın, ardından `@600,0` yazın ve {{key:Enter}}'a basın.

Dikdörtgen 600 birim genişler; duvarda biten çizgiler hâlâ duvarda biter. Bir ucu içinde olan bir yay yüksekliğini korur; merkezi ya da yerleştirme noktası içinde olan daireler ve metinler hareket eder; bir ölçülendirme yeni uzunluğunu ölçer. Pencere olmadan tek tek seçilen nesneler yalnızca taşınır.

Önce de seçebilirsiniz: hiçbir komut çalışmazken kesişen pencereyi (ya da kesişen kement) duvarın üzerinden sürükleyin, ardından `S` yazın. STRETCH bu seçimi alır ve pencerelerinin içinde kalanları, komutun kendi isteminde sürüklemişsiniz gibi uzatır.

## Dizi: satırlar ve sütunlar ya da bir merkez etrafında

{{cmd:ARRAY}} (`AR` ya da {{ui:Array}}) seçimi bir ızgarada ya da bir daire içinde kopyalar.

1. Bir sandalye seçin ve `AR` yazın, {{key:Enter}}'a basın. Dikdörtgensel için {{key:Enter}}'a basın.
2. 4 sütun ve 3 satırlık bir önizleme belirir. `COU` yazın, {{key:Enter}}'a basın, ardından sütunlar için `5` ve satırlar için `2` yazın.
3. `S` yazın, {{key:Enter}}'a basın, ardından sütunlar arasında `600` ve satırlar arasında `-900` yazın (negatif olan aşağı gider).
4. Kopyaları oluşturmak için {{key:Enter}}'a basın.

Masanın etrafında halka şeklinde sandalyeler için bunun yerine `PO` (Kutupsal) seçin, masanın merkezine tıklayın ve `I` (öğeler), `F` (doldurma açısı: tamamı için 360, yarısı için 180) ile `ROT` (kopyaların merkeze dönüp dönmeyeceği) değerlerini ayarlayın. {{cmd:ARRAYRECT}} ve {{cmd:ARRAYPOLAR}} bu soruları atlar.

## Parçaları tek bir çoklu çizgiye birleştirin

{{cmd:JOIN}} (`J` ya da {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): uçları birleşen çizgileri, yayları ve açık çoklu çizgileri seçin ve {{key:Enter}}'a basın. Hepsi tek bir çoklu çizgi olur; tamamen dönerlerse kapalı olur ve bunu tek seferde ofset alabilirsiniz. Aralarında boşluk olsa bile tek bir doğu üzerinde yatan çizgiler tek çizgi olur; tek bir daireye ait yaylar tek yay ya da daire olur.

## Özellikleri eşleştirin

{{cmd:MATCHPROP}} (`MA` ya da {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): görünümünü istediğiniz nesneye tıklayın, ardından değiştirilecek nesneleri seçin ve {{key:Enter}}'a basın. Onlar onun katmanını ve rengini alır; bir metin yüksekliğini, bir ölçülendirme ölçülerini, bir taralama desenini alır. Bunlardan herhangi birini kapatmak için ikinci soruda `S` (Ayarlar) yazın.

## Nesneleri hizalayın

**Noktalara göre.** {{cmd:ALIGN}} (`AL` ya da {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): nesneleri seçin ve {{key:Enter}}'a basın, ardından onların üzerinde bir nokta (kaynak) ve bu noktanın gitmesi gereken yeri (hedef) tıklayın.

- Tek bir çift onları taşır. `İkinci kaynak noktayı belirtin` isteminde durmak için {{key:Enter}}'a basın.
- İki çift onları ayrıca döndürür; böylece iki kaynak noktası arasındaki çizgi, iki hedef noktası arasındaki çizgi boyunca uzanır. CadCraft bunun üzerine `Nesneler hizalama noktalarına göre ölçeklensin mi?` diye sorar: `Y` onları o kadar büyütür veya küçültür.
- Üçüncü bir çift, iki noktası bu çizginin zıt taraflarında olduğunda onları aynalar.

**Kenarlar ve aralıklar.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (ya da `ALIGNPANEL`) çizimin üzerinde küçük bir panel açar. Nesneleri seçin, sonra:

- {{ui:Align to}} içinde neyle hizalanacağını seçin (tüm seçim, seçtiğiniz ilk ya da son nesne veya tıkladığınız bir nokta) ve {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} ya da {{ui:Bottom}} düğmesine tıklayın;
- ya da {{ui:Equal gaps}} ya da {{ui:Equal centres}} seçeneğini seçin ve {{ui:Across}} ya da {{ui:Up and down}} düğmesine tıklayın: en dıştaki iki nesne yerinde kalır, aradakiler aralarında eşit aralıklarla yerleştirilir (en az üç nesne).

Her tıklama tek bir geri alma adımıdır ve seçim yerinde kalır, böylece başka bir şey deneyebilirsiniz. Her nesne sınır kutusuna göre sayılır; bir UCS ayarlıysa o UCS içinde. Komut satırında aynı işi {{cmd:ALIGNTO}} ve {{cmd:DISTRIBUTE}} yapar.

## Silin ve patlatın

- {{cmd:ERASE}} (`E` ya da {{key:Delete}}) seçilen nesneleri kaldırır.
- {{cmd:EXPLODE}} (`X`) bir çoklu çizgiyi çizgilere ve yaylara, bir blok başvurusunu nesnelerine, bir ölçülendirmeyi ise çizgilere, ok uçlarına ve metne ayırır. Patlatılan ölçülendirmeler artık kendilerini ölçmez.

## Sık yapılan hatalar

- **İkinci noktada `@` olmadan bir mesafe yazmak.** `600,0` mutlak 600,0 noktasıdır, "sağda 600" değil. `@600,0` kullanın ya da imleç doğru yöne bakarken sadece `600` yazın.
- **Döndürme ters yönde gitti.** Pozitif açılar saat yönünün tersine döner.
- **Geri al, beklenenden fazlasını kaldırdı.** Tek bir geri alma, son komutun yaptığı her kopya dahil tamamını geri alır.
- **Komut nesne seçmenizi istemedi.** Nesneler zaten seçiliydi, bu yüzden onları kullandı. Önce hiçbir şey seçili olmadan başlamak için {{key:Esc}}'a basın.
