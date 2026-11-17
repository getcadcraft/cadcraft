---
title: Çizimde resimler
summary: Bir PNG ya da JPEG resmi yerleştirin, bir dikdörtgene ya da çokgene kırpın, bir DWG'nin kullandığı resimleri gösterin ve resimleri keskin olarak çıktı alın.
keywords: pastearea, parea, alanı kopyala, kopyalanan alan, markupcraft, gerçek boyut, gerçek boy, üst üste bindirme, overlay, ole, ole2frame, gömülü nesne, resim yapıştır, ekran görüntüsü yapıştır, ctrl+v, pano resmi, ekran görüntüsü, resim, görüntü, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, fotoğraf, raster, imagedef, xref, çıktı, pdf, çözünürlük
from: 4025ac97
---

## Ne oluşturacaksınız

Bir şirket logosunu bir künyeye yerleştirmek, istediğiniz kısma kırpmak ve bir PDF'te kendi çözünürlüğünde basılan bir çıktı.

## Bir resim yerleştirin

1. {{cmd:IMAGEATTACH}} (ya da `IAT`) yazıp {{key:Enter}} tuşuna basın. Bir PNG ya da JPEG dosyası seçin.
2. `Sol alt köşeyi belirtin`: tıklayın ya da bir nokta yazın.
3. `Genişliğini belirtin`: çizim birimleri cinsinden genişlik. {{key:Enter}} sunulan genişliği korur: piksel başına bir birim ya da bu dosya için son kez verdiğiniz genişlik (istem hangisi olduğunu söyler).
4. `Döndürme açısını belirtin`: döndürme yoksa {{key:Enter}} tuşuna basın.

Resim tek bir nesnedir: çerçevesinden seçin ve bir blok gibi taşıyın, kopyalayın, döndürün, ölçekleyin ya da silin.

:::note
Resim dosyası, çizim açık olduğu sürece çizimle birlikte kalır. Kaydedilmiş bir DWG, diğer programların yaptığı gibi dosyanın adını tutar; piksel verisini tutmaz. Resmi çizimin yanında tutun.
:::

## Bir ekran görüntüsü ya da kopyalanmış bir resim yapıştırın

1. Resmi kopyalayın (bir ekran görüntüsü {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=ekran görüntüsü aracınız}} ile, ya da başka bir programda veya tarayıcıda Resmi kopyala ile).
2. Çizimde gitmesini istediğiniz yere işaret edin ve {{key:Mod+V}} tuşuna basın.

Resmin sol alt köşesi imlece (ya da görünümün ortasına) düşer ve gördüğünüz boyutun %40'ı genişliğinde olur; resmi bir resim gibi taşıyın, ölçekleyin ve kırpın. Adı çizim adına `-picture-1.png` eklenerek oluşur (sonra `-2`, …); geçmiş bunu söyler.

{{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Resim yapıştır}} aynısını menüden yapar (tarayıcı önce sorabilir).

Bir DWG bir resmin dosyasının yalnızca adını tutar; bu yüzden çizimi kaydetmek resmi de kendi dosyası olarak kaydeder. İkisini aynı klasörde tutun: çizim resmi oradan gösterir. Tarayıcıda bu ikinci bir indirmedir ve geçmiş bunu söyler. Panoda yalnızca CadCraft nesneleri varsa {{key:Mod+V}} onları önceki gibi yapıştırır.

## MarkupCraft'ta kopyalanmış bir alanı yapıştırın

{{ui:Alanı kopyala}} MarkupCraft'ta bir sayfanın bir kısmını, ne kadar büyük olduğunu bilen bir resim olarak kopyalar. CadCraft onu o boyutta yapıştırır.

1. MarkupCraft'ta alanı kopyalayın (bir dikdörtgen, bir daire ya da serbest bir şekil; çizimi üzerinden görmek isterseniz {{ui:Üst üste bindirme olarak kopyala}}).
2. CadCraft'ta {{key:Mod+V}} tuşuna basın, ya da {{cmd:PASTEAREA}} (ya da `PAREA`) yazın, ya da {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Kopyalanan alanı yapıştır}} seçeneğini kullanın.
3. `Kopyalanan alanın sol alt köşesini belirtin`: tıklayın ya da bir nokta yazın. Alanın boyutunda bir çerçeve imleci izler.

Ne kadar büyük yerleşeceği:

- **Sayfanın bir çizim ölçeği vardıysa:** çizimin birimlerinde gerçek boyutunda (2 m'lik bir merdivenin 1:50 detayı, metre çizimde 2 m uzunluğunda, inç çizimde 78.74 in). Başka bir şey sorulmaz.
- **Sayfanın ölçeği yoksa:** CadCraft kâğıt üzerindeki boyutunu söyler ve bir ölçek ister: 1:100'lük bir sayfa için `100` yazın, kâğıt boyutu için {{key:Enter}} tuşuna basın ya da `P` yazıp yapıştırılan resimde iki nokta tıklayın ve gerçekte ne kadar uzakta olduklarını yazın ({{cmd:SCANSCALE}} komutunun yaptığı gibi). Sol alt köşe yerinde kalır.

Birimi olmayan bir çizim milimetre alır; alt çizim PDF'i gibi. Üst üste bindirme, kâğıdını saydam tutar ve kopyalandığı kadar soluk başlar; bir daire ya da serbest bir şeklin dışı da saydamdır. Yapıştırılan alan, diğer her resim gibi bir resimdir: taşıyın, döndürün, ölçekleyin, kırpın ya da silin; tüm yapıştırma tek bir geri alma adımıdır. DWG olarak kaydedildiğinde, solukluğu ve saydamlığıyla birlikte bir IMAGE olur.

{{key:Mod+V}} alanı yapıştırır; panodaki resim alanınınkiyse ya da alan, CadCraft'ta kopyaladığınız her şeyden sonra (ve son 6 saat içinde) kopyalandıysa. Aksi halde önceki gibi yapıştırır. {{cmd:PASTEAREA}} son kopyalanan alanı istediği zaman yapıştırır.

## Bir DWG'nin kullandığı resimleri gösterin

Bir DWG yalnızca resimlerinin nerede olduğunu saklar; bu yüzden CadCraft her birini dosya adıyla bir çerçeve olarak gösterir.

1. {{cmd:IMAGE}} (ya da `IM`) yazın. Komut satırı her resim dosyasını ve gösterilip gösterilmediğini listeler.
2. Dosyaları seçin (birkaç tanesini birden). Çizimin belirttiği adı içeren bir dosya adı da sayılır, çünkü dışa aktarımlar genellikle bir proje önekini ekler.

## Bir resmi kırpın

1. {{cmd:IMAGECLIP}} (ya da `ICL`) yazın ve resmi seçin.
2. `R` seçip iki köşeye tıklayın ya da `P` seçip bir çokgenin noktalarına tıklayın, sonra {{key:Enter}} tuşuna basın. `D` kırpmayı kaldırır.

## Resimleri çıktı alın

Resimler PDF'e kendi çözünürlüklerinde ve çizgilerin altında resim olarak girer. {{ui:Çıktı al}} iletişim kutusunda {{ui:Resimler}} onları 600, 300 ya da 150 dpi ile sınırlayarak dosyayı küçültebilir. JPEG olduğu gibi girer.

## Resimler nerede kaydedilir

| Biçim | Resimler |
|---|---|
| DWG (her sürüm) | Resim olarak (IMAGE), kırpmasıyla birlikte |
| DXF | Dosya adlarıyla çerçeveler olarak; kaydetme bunu söyler |

## Diğer programlardan nesneler (OLE)

Bir çizim, başka bir programın yaptığı nesneleri tutabilir; bir boya programından bir resim ya da bir elektronik tablo aralığı gibi (OLE nesneleri). CadCraft onları çalıştırmaz ya da düzenlemez ve yenilerini ekleyemez. Yaptığı şeyler:

- **Bir DXF'te**, bir OLE nesnesi bir çerçeve olarak açılır. Nesne kendisinin bir resmini kaydettiyse ve o resim bir bitmap ise, resim çerçevenin içinde çizilir; aksi halde çerçeve, nesnenin türünü gösteren bir etiket taşır, örneğin "Microsoft Excel Worksheet (OLE)". Çerçeveyi bir blok gibi taşıyabilir, kopyalayabilir ve silebilirsiniz. {{cmd:SAVEAS}} ile DXF 2000 olarak kaydetmek, nesneyi verisi değişmeden yeniden bir OLE nesnesi olarak yazar.
- **Bir DWG'de**, nesneler tutulur ve DWG olarak kaydettiğinizde bayt bayt geri yazılır, ama **gösterilmezler**: bir DWG nesnenin yerini kendi verisi içinde tutar ve CadCraft bunu henüz okumaz. Geçmiş kaç tanesinin tutulduğunu söyler. {{cmd:OLELIST}} yazarak ne olduklarını (tür, boyut, her birinin bir resim kaydedip kaydetmediği) görün ve bir resmin bir kopyasını istediğiniz yere koyun: **Yerleştir** sayıyı, sol alt köşeyi ve genişliği sorar ve içinde resim olan bir çerçeve çizer. Bu kopya taşıyabileceğiniz ya da silebileceğiniz bir çerçevedir; nesnenin kendisi çizimde kalır ve kaydettiğinizde yine geri yazılır.
- Bir DXF'ten gelen bir nesne, bir DWG'ye yalnızca çerçevesi ve etiketiyle kaydedilir; geçmiş bunu söyler. Nesnenin kendisini tutmak için DXF 2000 olarak kaydedin.
- Metafile olan resimler (birçok programın kaydettiği) çizilmez: bunun yerine çerçeve ve etiket görünür.

## Sık yapılan hatalar

| Gördüğünüz | Neden | Çözüm |
|---|---|---|
| Dosya adı olan bir çerçeve | CadCraft dosyaya sahip değil | {{cmd:IMAGE}}, sonra dosyayı seçin |
| "Bu bir resim değil" | Seçilen nesne bir resim değil | Resmin çerçevesini seçin |
