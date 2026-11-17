---
title: Ekranı bölün
summary: Çizimi kendi yakınlaştırmasına sahip iki, üç veya dört bölmede gösterin, bir sayfayı modelin yanına koyun ve birden çok çizimi yan yana açın.
keywords: böl, ekranı böl, bölmeler, vports, görünüm pencereleri, yan yana, üst üste, iki çizim, sekmeler, belge sekmeleri, karşılaştır, ayırıcı, model ve sayfa, birden çok çizim, açık çizimler
from: ee2f034b
---

## Ne öğreneceksiniz

Bir çizime aynı anda birden çok bölmede, her birinin kendi yakınlaştırmasıyla nasıl bakılacağını ve birden çok çizimin nasıl açılıp yan yana görüleceğini.

## Bir çizimi bölmelere ayırın

1. Bir çizim açın veya birkaç çizgi ve daire çizin.
2. {{ui:Görünüm}} › {{ui:Daha fazla}} seçeneğini açın ve {{ui:Yan yana böl}} seçeneğini seçin (veya {{cmd:VPORTS}} yazın, ardından `2` yazın ve {{key:Enter}} tuşuna basın).

Çizim alanı iki bölmeye ayrılır; ikisi de aynı görünümü gösterir. Etkin bölmenin mavi bir çerçevesi olur ve çapraz imleci alır.

3. Diğer bölmeye tıklayın. O etkin olur. (Bu ilk tıklama yalnızca bölmeler arasında geçiş yapar; seçmek veya çizmek için yeniden tıklayın.)
4. Tekerlekle yakınlaştırın. Yalnızca o bölme yakınlaşır.
5. Bölmeler arasındaki çizgiyi sürükleyerek birini genişletin. Odaklanmış bir ayırıcıda {{key:Home}} onu tekrar ortaya koyar.

{{cmd:VPORTS}} ayrıca `3` (bir yanda iki bölme, diğer yanda büyük bir bölme: `L` veya `R`), `4` ve tek bir bölmeye dönmek için `SI` kabul eder. Etkin bölmenin görünümü o zaman alanı doldurur. Bir sayfada ise {{cmd:VPORTS}} bunun yerine sayfaya bir görünüm penceresi ekler (AutoCAD'de olduğu gibi); orada {{cmd:SPLIT}} yazın veya Görünüm menüsünü kullanın.

## Bir bölmeden diğerine çizin

1. Yan yana bölün ve her bölmeyi çizimin farklı bir köşesine yakınlaştırın.
2. `L` yazın ve {{key:Enter}} tuşuna basın, sol bölmede ilk noktaya tıklayın.
3. Sağ bölmede bir kez tıklayarak onu etkin yapın, ardından oradaki ikinci noktaya tıklayın.

Çizgi iki yer arasında uzanır. Bölmeleri değiştirdiğinizde komut devam eder ve lastik bant her bölmede görünür.

## Bir sayfanın yanındaki model

1. Yan yana bölün.
2. Sağ bölmeye tıklayın, ardından çizimin altındaki bir sayfa sekmesine tıklayın.

Sağ bölme sayfayı gösterir; sol bölme hâlâ modeli gösterir. Her bölme kendi alanını korur; böylece modelin üzerine çizebilir ve sayfanın görünüm penceresinin takip etmesini izleyebilirsiniz.

## Tek pencerede birden çok çizim

1. Bir çizim açın. Sonra başka bir tane açın (veya {{ui:Yeni}} düğmesine basın).

Her çizim, çizim alanının üzerinde kendi sekmesinde açılır. Geçiş yapmak için bir sekmeye tıklayın; komut satırı, paneller ve geri alma geçtiğiniz çizimi izler. Bir çizimde {{key:Mod+C}}, diğerinde {{key:Mod+V}} nesneleri aralarında kopyalar.

2. {{ui:Açık çizimleri yan yana diz}} düğmesine tıklayın (sekmelerin sonundaki bölme simgesi) veya yanındaki üst üste simgesine.

Artık her bölme açık çizimlerden birini gösterir; en fazla dört tane. Bu çizimde çalışmak için bir bölmeye tıklayın.

3. Bir sekmedeki {{ui:×}} simgesine tıklayarak o çizimi kapatın. Kaydedilmemiş değişiklikleri varsa CadCraft önce sorar.

:::tip
Pencere yalnızca yeni ve dokunulmamış bir çizim tutuyorken bir çizim açmak, yeni bir sekme eklemek yerine o sekmeyi kullanır.
:::

## Birlikte kaydırın ve yakınlaştırın

İki revizyonu karşılaştırmak için bunları yan yana dizin, ardından {{ui:Bölmelerin görünümlerini bağla}} öğesine tıklayın (sekmelerin sonundaki bağlantı simgesi), veya {{ui:Görünüm}} › {{ui:Daha fazla}} içinden seçin ya da {{cmd:LINKVIEWS}} yazıp `ON` yazın. Artık bir bölmede yapılan kaydırma veya yakınlaştırma, modeli gösteren her bölmeyi (veya bir sayfayı gösteren her bölmeyi) aynı yere taşır; böylece iki çizim hizalı kalır. {{cmd:LINKVIEWS}} `OFF` her bölmenin yeniden bağımsız hareket etmesine izin verir.

## Yaygın hatalar

- **Tıklamam hiçbir şey yapmadı.** O bölmeyi etkin yaptı. Seçmek veya çizmek için yeniden tıklayın.
- **Tekerlek yanlış bölmeyi yakınlaştırdı.** Tekerlek, işaretçinin altındaki bölmeyi yakınlaştırır ve onu etkin yapar.
- **Bölmeler yeniden tek bir tane oldu.** Bir çizim açmak, onu kaydedildiği hâliyle gösterir; bölmesiz kaydedilmiş bir çizim tek bölmede açılır.
- **Sayfadan ayrılırken, göremediğim kaydedilmemiş değişiklikler için uyarı çıkıyor.** Başka bir sekme değişiklik içeren bir çizim tutuyor. Ona geçin ve kaydedin ya da kaydetmeden çıkın.
