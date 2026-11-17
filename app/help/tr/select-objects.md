---
title: Nesneleri seçin
summary: Nesneleri tek tek, bir pencere ya da kesişen pencereyle, bir komuttan önce ya da sırasında seçin ve nesneleri bir seçimden çıkarın.
keywords: seç, seçim, pencere, kesişim, isim-fiil, tek tek seç, tümü, son, önceki, çit, kaldır, ekle, tab, döngü, üst üste, hızlı seçim, qselect, filtre, benzerlerini seç, selectsimilar, shift, seçimi kaldır, ctrl+a, pickfirst
from: 676508c7
---

## Öğrenecekleriniz

Bir komutun hangi nesneler üzerinde çalışacağını nasıl seçersiniz. CadCraft'ta iki yol vardır, ikisi de uygundur:

- **Önce seçin, sonra komut** (isim-fiil). Nesneleri seçin, sonra Taşı için `M` yazın. Komut seçiminizi alır ve doğrudan bir sonraki sorusuna geçer.
- **Önce komut, sonra seçin** (fiil-isim). `M` yazın; komut `Nesne seçin:` diye sorar; seçersiniz, sonra {{key:Enter}}'a basarsınız.

## Tek tek nesne seçin

1. Hiçbir komut çalışmazken bir çizgiye tıklayın. Vurgulanır ve tutamaçları (küçük kareler) görünür. Sağ panel özelliklerini gösterir.
2. Başka bir nesneye tıklayın. Seçime eklenir.
3. {{key:Shift}} tuşunu basılı tutun ve seçili bir nesneye tıklayın. Seçimden çıkarılır.
4. {{key:Esc}}'e basın. Hiçbir şey seçili değildir.

## Pencere ve kesişim

Boş bir yere bir kez tıklayın, hareket ettirin ve yeniden tıklayın: bir dikdörtgen. Basıp sürüklemek bunun yerine serbest bir kement çizer; iki türü de aynıdır (bkz. [Kement seçimi](topic:lasso-selection); Ayarlar sürüklemenin dikdörtgen çizmesini sağlayabilir). Hangi nesnelerin seçileceği yöne bağlıdır:

| Hareket yönü | Kutu | Seçer |
|---|---|---|
| Soldan sağa | Pencere | Yalnızca kutunun **tamamen içindeki** nesneler |
| Sağdan sola | Kesişim | Kutunun içindeki **ve** dokunduğu nesneler |

1. Birkaç üst üste binen çizgi ve daire çizin.
2. Bazı nesnelerin solundaki boş bir yere tıklayın, sağa hareket ettirin ve yeniden tıklayın. Yalnızca tamamen içindeki nesneler seçilir.
3. {{key:Esc}}'e basın.
4. Sağdaki boş bir yere tıklayın, bazı nesnelerin üzerinden sola hareket ettirin ve yeniden tıklayın. Kutunun dokunduğu her şey seçilir.
5. {{key:Shift}} tuşunu basılı tutun ve seçili bazı nesnelerin üzerine bir kutu ya da kement çizin. Seçimden çıkarlar.

## Önce seçin, sonra komutu çalıştırın

1. İki daire seçin.
2. `M` yazın ve {{key:Enter}}'a basın.

Geçmiş `2 bulundu` yazar ve istem doğrudan `Temel nokta belirtin` istemine geçer. Taşımayı bitirin (bkz. [Taşı, kopyala, döndür, ölçekle ve aynala](topic:modify-objects)).

Bir komut bittiğinde seçim temizlenir; böylece bir sonraki komut sıfırdan başlar.

Bu yolla seçim alan komutlar: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} ve {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} ve {{cmd:CHAMFER}} her zaman nesneleri tek tek seçmenizi ister; {{cmd:TRIM}} ve {{cmd:EXTEND}} tek bir seçim ya da parçaların arasından sürüklediğiniz bir yol alır (bkz. [Kırp ve uzat](topic:trim-and-extend)).

## Komut çalıştırın, sonra seçin

1. Hiçbir şeyin seçili olmadığından emin olun ({{key:Esc}}).
2. `E` yazın ve {{key:Enter}}'a basın. İstem `Nesne seçin:` yazar.
3. Nesneleri tıklayın ya da pencere ve kesişimleri sürükleyin. Geçmiş her seçimi sayar (`1 bulundu`, `3 bulundu`).
4. Seçimi bitirmek için {{key:Enter}}'a, {{key:Space}}'e basın ya da sağ tıklayın.

Nesneler silinir ve geçmiş kaç tane olduğunu yazar.

`Nesne seçin:` isteminde şunları da yazabilirsiniz:

- `ALL`, sonra {{key:Enter}}: açık sekmede düzenleyebileceğiniz her nesne.
- `L` (ya da `LAST`), sonra {{key:Enter}}: en son çizilen nesne.
- `P` (Önceki): son komutun üzerinde çalıştığı nesneler, hâlâ oradaysa.
- `F` (Çit): tıklayın ya da bir çizgi boyunca noktalar yazın; çizginin kestiği her nesne eklenir. Çiti bitirmek için {{key:Enter}}'a basın; `U` son noktayı geri alır.
- `W` (Pencere) ya da `C` (Kesişim): iki köşe, hangi yöne sürüklerseniz sürükleyin.
- `R` (Kaldır): bundan sonra tıklamalar, pencereler ve çitler nesneleri **çıkarır**. İstem `Kaldırılacak nesneleri seçin:` yazar. `A` (Ekle) geri döndürür.
- `?`: geçmişte bu seçeneklerin listesi.

Bu seçenekler, AutoCAD'deki gibi, istemde gösterilmez.

## Üst üste duran nesnelerden birini seçin

Nesneler üst üste bindiğinde ya da birbirine dokunduğunda, tıklama en yakın olanı alır. Başka birini almak için:

1. İmleci noktanın üzerinde sabit tutun.
2. {{key:Tab}}'a basın. Oradaki bir sonraki nesne vurgulanır ve durum çubuğu hangisi olduğunu söyler ("3 nesnenin 2'si: Walls katmanındaki çizgi").
3. İstediğiniz vurgulanana kadar {{key:Tab}}'a tekrar basın, sonra kıpırdatmadan tıklayın.

İmleci hareket ettirmek baştan başlatır. Bu, hiçbir komut çalışmazken, `Nesne seçin:` isteminde ve bir komutun tek bir nesne seçmenizi istediği her yerde çalışır.

## Kurala göre seçin: Hızlı seçim

{{cmd:QSELECT}} (`QS`, ya da {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Hızlı seçim}}) bir kurala uyan her nesneyi seçer; örneğin yarıçapı 50'nin altında olan her daire ya da DOOR-900 adlı her blok başvurusu.

1. {{ui:Hızlı seçim}}'i açın.
2. {{ui:Nesne türü}} seçin (liste her türü sayar), sonra {{ui:Özellik}}: {{ui:Katman}}, {{ui:Renk}} ve bazı türler için {{ui:Uzunluk}}, {{ui:Yarıçap}}, {{ui:Alan}}, {{ui:Metin yüksekliği}}, {{ui:Metin içeriği}}, {{ui:Blok adı}} ya da {{ui:Taralama deseni}}.
3. {{ui:İşleç}} ve {{ui:Değer}} seçin. `*` joker karakterlerle eşleşir (`DOOR-*`); {{ui:Tümünü seç}} o türdeki her nesneyi alır. En alttaki sayı, siz seçerken kaçının eşleştiğini gösterir.
4. {{ui:Nasıl uygulansın}}: eşleşenleri ya da geri kalan her şeyi ekleyin. {{ui:Uygulansın}} {{ui:Geçerli seçim}} olarak ayarlandığında seçtiklerinizi daraltır; {{ui:Geçerli seçime ekle}} ise onlara ekler.
5. {{ui:Seç}}'e tıklayın. Sonra istediğiniz komutu çalıştırın: seçimi kullanır.

## Benzerlerini seçin

Bir ya da daha fazla nesne seçin ve {{cmd:SELECTSIMILAR}} (`SIM`) yazın ya da {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Benzerlerini seç}} seçin. Aynı türden, aynı katmanda ve aynı renkteki her nesne seçilir; blok başvurularında aynı blok, taralamalarda aynı desen de gerekir. Neyin eşleşmesi gerektiğini seçmek için, `Nesne seçin` isteminde `SE` yazın.

## Şimdi seçin, sonra kullanın

`SELECT` yazın ve {{key:Enter}}'a basın, yukarıdaki yollardan herhangi biriyle nesneleri seçin ve {{key:Enter}}'a basın. Bir sonraki komut için seçili kalırlar ve bir sonraki `Nesne seçin:` isteminde `P` onları yeniden seçer.

## Her şeyi seçin

Hiçbir komut çalışmazken {{key:Mod+A}}'ya basın ya da araç çubuğunun {{ui:Düzenle}} › {{ui:Daha fazla}} menüsünde {{ui:Tümünü seç}} seçin; böylece açık sekmede düzenleyebileceğiniz her nesne seçilir. Komut satırına bir şey yazdıysanız, {{key:Mod+A}} bunun yerine o metni seçer: önce temizlemek için {{key:Esc}}'e basın. `Nesne seçin:` isteminde `ALL` yazın. Aynı menüdeki {{ui:Seçimi kaldır}}, ya da {{key:Esc}}, seçimi temizler.

:::tip
Her tıklamanın seçimi değiştirmesini istiyorsanız ({{key:Shift}} ile eklemek için), [CadCraft ayarları](topic:settings) bölümünde {{ui:Nesnelere tıklama}} ayarını {{ui:Seçimi değiştirir}} olarak değiştirin.
:::

## Seçilemeyenler

- **Kapalı**, **dondurulmuş** ya da **kilitli** bir katmandaki nesneler. Kilitli nesneler görünür kalır ve onlara yine de yakalanabilir, ancak seçilemez ya da değiştirilemez.
- Bir sayfa sekmesinde, bir görünüm penceresi içinde gösterilen model. Sayfanın kendi nesnelerini seçersiniz (künye, notlar, görünüm penceresi çerçeveleri). Modeli düzenlemek için {{ui:Model}} sekmesine geçin.

## Hızlıca silin

Nesneleri seçin, sonra {{key:Delete}} (ya da komut satırında imleç yokken {{key:Backspace}}) tuşuna basın. Mac klavyesinde, çizime tıkladıktan sonra "delete" etiketli tuş çalışır; komut satırında imleç varken fn ve delete'i birlikte basın. Bu, seçim üzerinde {{cmd:ERASE}} komutunu çalıştırır. Hiçbir şey olmazsa komut satırına bir şey yazmışsınızdır: {{key:Esc}}'e basın ya da bunun yerine `E` yazıp {{key:Enter}}'a basın.

## Sık yapılan hatalar

- **Pencere çok az aldı.** Soldan sağa sürüklediniz; bu yalnızca tamamen içinde olanı alır. Kesişim için sağdan sola sürükleyin.
- **Boş bir yere tıklama bir kutu başlattı.** Boş bir yere tek tıklama bir pencere başlatır; ikinci tıklama bitirir. Bırakmak için {{key:Esc}}'e basın ya da sağ tıklayın.
- **Boş bir yere tıklama seçimi bıraktı.** {{key:Shift}} tuşunu basılı tutmadığınız sürece bu olur. Böyle bir tıklamada seçimi korumak ve yalnızca {{key:Esc}} ile temizlemek için [CadCraft ayarları](topic:settings#clicking-an-empty-spot) bölümünde {{ui:Boş bir yere tıklama}} ayarını {{ui:Seçimi korur}} olarak değiştirin.
- **Komut, istemediğiniz nesneleri kullandı.** Komutu başlattığınızda bir şey hâlâ seçiliydi. Bir komuttan önce, hiçbir şey seçili olmadan başlamak için {{key:Esc}}'e basın.
- **Bir komuttan sonra hiçbir şey seçili değil.** Bu bilerek böyle: bitmiş bir komut seçimi temizler.
