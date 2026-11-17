---
title: Bir çizimin hangi birimde olduğunu kontrol edin
summary: Açılmış bir çizimin milimetre, inç ya da başka bir birimde olup olmadığını görün, ölçerek kontrol edin ve aynı DXF için başka bir programın neden farklı birimler gösterebileceğini öğrenin.
keywords: birimler, hangi birimler, hangi birim, birimleri kontrol et, milimetre, mm, inç, metrik, emperyal, DXF birimleri, STEP'ten DXF'e, yanlış birimler, inç mi mm mi, INSUNITS, MEASUREMENT, çizim birimleri, PartCraft DXF
from: c0ee75bb
---

## Ne yapacaksınız

Açık bir çizimde bir birimin neyi ifade ettiğini öğrenin ve okuduğunuz sayıların beklediğiniz boyutta olduğundan emin olun.

## Adımlar

1. Çizimi açın, ardından hiçbir şeyin seçili olmaması için {{key:Esc}} tuşuna basın; bunu {{ui:Model}} sekmesinde yapın.
2. Sağ panelde, {{ui:Geçerli ayarlar}} altındaki {{ui:Birimler}} alanını okuyun. Burada bir çizim biriminin neyi ifade ettiği yazar: {{ui:Milimetre}}, {{ui:İnç}}, {{ui:Fit}} gibi. PartCraft'tan kaydedilen bir DXF, {{ui:Milimetre}} olarak belirtir.
3. Boyutunu bildiğiniz bir şeyi ölçerek kontrol edin. {{cmd:DIST}} yazın ve bir kenarın ya da deliğin iki ucunu seçin. Boyutunu bildiğiniz bir parça 25 mm ise ve `25` okunuyorsa çizim milimetre cinsindendir; yaklaşık `0.98` okunuyorsa inç cinsindendir.

{{ui:Birimsiz}}, dosyanın birimi belirtmediği anlamına gelir. CadCraft bu durumda kâğıdın birimini kullanır (ISO kâğıdında milimetre, ABD kâğıdında inç) ve sayılar yalnızca bunları yazan programın doğru olduğu kadar doğrudur.

## Birimler yanlışsa

{{ui:Birimler}} değiştirildiğinde **hiçbir şey yeniden boyutlandırılmaz**: sayılar aynı kalır, yalnızca bunların ne anlama geldiği değişir. Bu yüzden yalnızca çizimin gerçekte ne olduğunu belirtmek için ayarlayın. Sayılar milimetreyse ve {{ui:Birimler}} {{ui:İnç}} diyorsa, {{ui:Milimetre}} seçin. Geometrinin kendisini başka birimlerde istiyorsanız, {{cmd:SCALE}} ile ölçekleyin (inçten milimetreye 25.4, tersi için 1/25.4) ve ardından {{ui:Birimler}} ayarını yapın.

Uzunlukların nasıl yazıldığı (ondalık, fit ve inç, kesirler) ayrı bir ayardır: {{ui:Uzunluk biçimi}} seçeneğine bakın: [Birimler, kâğıt boyutları ve ölçekler](topic:units-papers-scales).

## Başka bir program neden inç diyebilir

Bir DXF, birimlerini üst bilgisinde belirtir. En eski DXF türü olan R12'de birim değişkeni hiç yoktu; bu yüzden R12'yi katı kurallarla okuyan bir program, orada yazılı olanı yok sayar ve çoğu zaman inç olan kendi varsayılanına döner. Dosyadaki geometri her iki durumda da aynıdır; yalnızca etiket farklıdır. PartCraft DXF dosyalarını R12 olarak yazar ve milimetreyi iki şekilde belirtir (`$INSUNITS` 4 ve `$MEASUREMENT` 1); böylece daha fazla program bunları doğru okur. Bir program hâlâ inç diyorsa, dosyayı açarken birimlerini milimetre olarak ayarlayın.

Bir dosyayı açmak yerine bir çizimin içine getirmek, birimlerini dönüştürür: [İçe aktarırken birimler](topic:units-on-import) bölümüne bakın.
