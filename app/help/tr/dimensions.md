---
title: Bir planı ölçülendirme
summary: Doğrusal, hizalı, açısal, yarıçap ve çap ölçülendirmeleri ekleyin, Sürdür ve Taban ile zincirleyin ve metni geçersiz kılın.
keywords: ölçülendirme, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, zincir, dizi, açıklama, ölçülendirme aracı, nerede, bul, araç çubuğu, ölç, mm, cm, m, km, birimler
from: 9ee65123
---

## Ne yapacaksınız

Ölçülendirilmiş bir oda: genel genişlik ve yükseklik, bir duvar boyunca bir ölçülendirme dizisi, eğik bir duvar, kavisli bir köşe ve bir açı.

Başlamadan önce, çiziminiz büyükse [Ölçülendirme boyutlarını ayarlama](topic:dimension-settings) bölümünü okuyun: ölçülendirme metni varsayılan olarak 2.5 çizim birimi yüksekliktedir; milimetre ile ölçülen bir çizimde bu çok küçüktür. Aşağıdaki adımlar için önce `DIMSCALE` yazıp {{key:Enter}} tuşuna basın, `50` yazın ve {{key:Enter}} tuşuna basın.

## Ölçülendirme araçları nerede

CadCraft menü stiliyle (CadCraft'ın başladığı stil), ölçülendirme araçları çizimin üstündeki araç çubuğunda, {{ui:Açıklama}} grubundadır: {{ui:Doğrusal}}, {{ui:Hizalı}}, {{ui:Açı}}, {{ui:Yarıçap}} ve {{ui:Çap}}. Grubun {{ui:Daha fazla}} menüsünde {{ui:Ölçülendirmeyi sürdür}} ve {{ui:Taban ölçülendirmesi}} vardır. Ne yaptığını görmek için işaretçiyi bir düğmenin üzerinde tutun.

- {{ui:Klasik çizim}} ya da {{ui:Şerit}} menü stilinde {{ui:Açıklama}} sekmesini açın: araçlar onun {{ui:Ölçülendirmeler}} panelindedir. {{ui:Klasik çizim}} ayrıca {{ui:Giriş}} sekmesinde, {{ui:Açıklama}} altında {{ui:Doğrusal}} öğesine sahiptir. Bkz. [Menüler, tuşlar ve fare](topic:menus-keys-and-mouse).
- Ya da çizimin altındaki komut satırına komutu yazıp {{key:Enter}} tuşuna basın: `DLI` (doğrusal), `DAL` (hizalı), `DAN` (açısal), `DRA` (yarıçap), `DDI` (çap), `DCO` (sürdür), `DBA` (taban).
- Dar bir ekranda araç çubuğu tek satırdır: {{ui:Açıklama}} öğesine ulaşmak için onu yana kaydırın.

Uzunlukları milimetre, santimetre, metre ya da kilometre olarak göstermek için bkz. [mm, cm, m ya da km cinsinden ölçülendirmeler](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Ölçülendirilecek bir şey çizin

1. `PL` yazıp {{key:Enter}} tuşuna basın.
2. `0,0` yazıp {{key:Enter}} tuşuna basın.
3. `@6000,0` yazıp {{key:Enter}} tuşuna basın.
4. `@1500<60` yazıp {{key:Enter}} tuşuna basın.
5. `@0,2700` yazıp {{key:Enter}} tuşuna basın.
6. `@-6750,0` yazıp {{key:Enter}} tuşuna basın.
7. `C` yazıp {{key:Enter}} tuşuna basın. Dış hat kapanır.
8. Bir daire başlatmak için `C` yazıp {{key:Enter}} tuşuna basın.
9. Merkez için, duvarlardan uzakta, odanın içine tıklayın.
10. `600` yazıp {{key:Enter}} tuşuna basın. Bu bir kolon.
11. {{ui:Sınırlar}} seçeneğine tıklayın.

## Doğrusal: yatay ya da dikey

1. `DLI` yazıp {{key:Enter}} tuşuna basın.
2. `Specify first extension line origin` istemine, sol alt köşeyi yakalayarak (Uç nokta) tıklayın.
3. `Specify second extension line origin` istemine, sağ alt köşeyi yakalayarak tıklayın.
4. Artı imlecini odanın altına taşıyın. Ölçülendirme, yatay olarak onu takip eder.
5. Ölçü çizgisini yerleştirmek için tıklayın.

Geçmiş `Dimension text = 6000` yazar.

Ölçü çizgisini nereye yerleştirdiğiniz yönü belirler: altta ya da üstte yatay, solda ya da sağda dikey bir ölçülendirme olur. Bunu zorlamak için yerleştirmeden önce `H` (yatay), `V` (dikey) ya da `R` (döndürülmüş, sonra bir açı) yazın.

:::tip
İlk istemde bir nokta seçmek yerine {{key:Enter}} tuşuna basın, sonra bir çizgiye, yaya, daireye ya da çoklu çizgi parçasına tıklayın. CadCraft iki ucu sizin için alır.
:::

## Sürdür: bir ölçülendirme dizisi

{{cmd:DIMCONTINUE}} ({{ui:Açıklama}} › {{ui:Daha fazla}} › {{ui:Ölçülendirmeyi sürdür}} ya da `DCO`), yaptığınız son doğrusal ya da hizalı ölçülendirmeden devam eder; her yeni ölçülendirme, bir öncekinin bittiği yerden başlar.

1. `DLI` yazıp {{key:Enter}} tuşuna basın.
2. İlk başlangıç için `0,0` yazıp {{key:Enter}} tuşuna basın.
3. İkinci başlangıç için `2000,0` yazıp {{key:Enter}} tuşuna basın.
4. Odanın altına tıklayarak yerleştirin.
5. `DCO` yazıp {{key:Enter}} tuşuna basın.
6. `4500,0` yazıp {{key:Enter}} tuşuna basın. İlkinin devamında, aynı çizgi üzerinde ikinci bir ölçülendirme gelir.
7. Sağ alt köşeyi yakalayın ve tıklayın. Üçüncü bir ölçülendirme diziyi tamamlar.
8. Komutu bitirmek için {{key:Enter}} tuşuna basın.

:::note
Buradaki noktalar bilerek mutlak koordinat olarak yazılır. Bir `@` noktası, verdiğiniz son noktadan sayar; son nokta ise bir önceki ölçülendirme çizgisini yerleştirdiğiniz yerdir, ölçülendirmenin ucu değil. Bir ölçülendirme dizisinde mutlak noktalar, yakalamalar ya da {{ui:Ortogonal}} açıkken çıplak bir mesafe daha güvenlidir.
:::

`U` yazıp {{key:Enter}} tuşuna basın: komuttan çıkmadan dizideki son ölçülendirmeyi geri alır.

## Taban: tek bir çizgiden yığılmış ölçülendirmeler

{{cmd:DIMBASELINE}} ({{ui:Açıklama}} › {{ui:Daha fazla}} › {{ui:Taban ölçülendirmesi}} ya da `DBA`), yeni her ölçülendirmeyi bir öncekinin ilk başlangıç noktasından ölçer ve her birini bir adım daha dışarı yığar.

1. `DLI` yazıp {{key:Enter}} tuşuna basın.
2. Sol alt köşeyi yakalayın ve tıklayın.
3. Sol üst köşeyi yakalayın ve tıklayın.
4. Artı imlecini odanın soluna taşıyın ve tıklayın. Dikey bir ölçülendirme belirir.
5. `DBA` yazıp {{key:Enter}} tuşuna basın.
6. 60 derecelik duvarın üst ucunu yakalayın (Uç nokta) ve tıklayın. İlkinden bir adım daha dışarıda ikinci bir dikey ölçülendirme belirir.
7. Bitirmek için {{key:Enter}} tuşuna basın.

## Hizalı: eğik bir çizginin gerçek uzunluğu

1. `DAL` yazıp {{key:Enter}} tuşuna basın.
2. Bir nesne seçmek için {{key:Enter}} tuşuna basın.
3. 60 derecelik duvara tıklayın.
4. Dışarı doğru hareket ettirin ve yerleştirmek için tıklayın.

Metin 1500 yazar: duvar boyunca ölçülen gerçek uzunluk.

## Yarıçap ve çap

1. `DRA` yazıp {{key:Enter}} tuşuna basın.
2. Kolon dairesine tıklayın.
3. Artı imlecini hareket ettirin. Belirtme çizgisi merkezden artı imlecine doğru işaret eder.
4. Metni yerleştirmek için tıklayın.

Metin `R600` yazar. {{cmd:DIMDIAMETER}} (`DDI`) aynısını ⌀ işaretiyle ve çapla yapar.

## Açısal

Buradaki duvarlar tek bir çoklu çizgidir; bu yüzden köşeyi tepe noktasından ölçün. (Ayrı iki çizgi arasında bunun yerine çizgilere tıklayabilirsiniz.)

1. `DAN` yazıp {{key:Enter}} tuşuna basın.
2. `Select arc, circle or line, or Enter for a vertex` istemine {{key:Enter}} tuşuna basın.
3. `Specify angle vertex` istemine sağ alt köşeyi yakalayın ve tıklayın.
4. `Specify first angle endpoint` istemine sol alt köşeyi yakalayın ve tıklayın.
5. `Specify second angle endpoint` istemine 60 derecelik duvarın üst ucunu yakalayın ve tıklayın.
6. Artı imlecini odanın içinde, köşenin yakınına taşıyın ve tıklayın.

Metin `120°` yazar: köşenin iç açısı. Köşenin öbür tarafına yerleştirilirse ölçülendirme o taraftaki açıyı ölçer. İlk istemde bir yaya tıklarsanız, o yayın kapladığı açıyı; iki çizgiye tıklarsanız aralarındaki açıyı ölçersiniz.

## Metni değiştirin

Kendi metninizi yazmak için, ölçülendirmeyi yerleştirmeden önce `T` yazıp {{key:Enter}} tuşuna basın, sonra metni yazın. Metninizde `<>` ölçülen değeri temsil eder: `<> TYP.` `6000 TYP.` verir. Ölçülen değeri korumak için boş bir satırda {{key:Enter}} tuşuna basın.

Mevcut bir ölçülendirmeyi değiştirmek için:

1. Ölçülendirmeye tıklayın.
2. Sağ panelde {{ui:Metin}} alanına yazın. Ölçülen değer için boş bırakın.
3. {{key:Enter}} tuşuna basın.

## Ölçülendirmeler geometriyi izler

Bir ölçülendirme noktalarını hatırlar. Bir tutamacını sürükleyin ya da ölçtüğü nesnelerle birlikte taşıyın, döndürün ya da ölçekleyin; yeniden ölçer. Ölçülendirmeyi taşımadan geometriyi gerdirirseniz, ölçülendirme izlemez: kendi noktalarını korur.

## Sık yapılan hatalar

- **Metin ve oklar çok küçük ya da çok büyük.** Genel ölçeği ayarlayın: bkz. [Ölçülendirme boyutlarını ayarlama](topic:dimension-settings).
- **"Ölçmek istediğiniz açının içinde bir nokta seçin."** Açısal bir ölçülendirme için tıkladığınız nokta kollardan birinin üzerindedir. Onu açının içine taşıyın.
- **Sürdür yanlış ölçülendirmeden başladı.** Her zaman bu oturumda yaptığınız son doğrusal ya da hizalı ölçülendirmeden devam eder. Önce devam edilecek olanı yapın ya da yeniden yapın.
- **Ölçülendirme dikey çıktı.** Onu yanına yerleştirdiniz. Yerleştirmeden önce `H` yazın.
- **Fit ve inç.** Önce çizimin uzunluk biçimini {{ui:Mimari}} olarak ayarlayın ya da {{ui:Özellikler}} içinde ölçülendirmenin {{ui:Biçim}} değerini: bkz. [Ölçülendirmelerde fit ve inç](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Sayılar istediğiniz birimde değil.** {{ui:Metindeki birimler}} seçin: bkz. [mm, cm, m ya da km cinsinden ölçülendirmeler](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
