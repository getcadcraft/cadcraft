---
title: "Varsayılan politikalar: yeni bir çizimin neyle başlayacağını belirleyin"
summary: Yeni bir çizimin hangi birimler, uzunluk biçimi, hassasiyet, metin yüksekliği ve sayfa kâğıdıyla başlayacağını bir kez belirleyin; metrik ve emperyal işler için ayrı ayrı belirleyin ve politikaları küçük bir dosya olarak ofis genelinde paylaşın.
keywords: varsayılan, varsayılanlar, varsayılan politikalar, politika, ofis standardı, ofis varsayılanları, şablon, yeni çizim, birimler, insunits, uzunluk biçimi, mimari, hassasiyet, luprec, metin yüksekliği, sayfa kâğıdı, a1, paylaş, dışa aktar, içe aktar, json
from: 7b80fd13
---

## Ne yapacaksınız

CadCraft'a yeni bir çizimin neyle başlaması gerektiğini söyleyin; böylece ofisteki herkes UNITS komutunu çalıştırıp aynı şeyleri her seferinde değiştirmek zorunda kalmaz. Bu bir eklentidir: siz açana kadar kapalıdır ve ayarlamadığınız bir politika, CadCraft'ın kendi varsayılanını olduğu gibi bırakır.

:::note
Bunlar **yeni** çizimler ve **yeni** sayfalar için varsayılanlardır. Zaten başladığınız bir çizim değişmez; açtığınız bir çizim de değişmez.
:::

## Adımlar

1. {{ui:Ayarlar}} bölümünü açın, {{ui:Eklentiler}} öğesine gidin ve {{ui:Varsayılan politikalar}} seçeneğini açın.
2. Ayarlarda **CadCraft** sekmesini açın ve soldaki listeden {{ui:Varsayılan politikalar}} seçin.
3. İstediğiniz politikaları ayarlayın. Her biri **CadCraft'ın kendi** değeriyle başlar. **Metrik** ve **Emperyal** kutusu olan bir politika, her çizim türü için bir değer alır; yalnızca ihtiyacınız olanları doldurun.
4. Kaydet düğmesi yoktur: her değişiklik yaptığınızda kaydedilir.
5. Yeni bir çizim başlatın. Ayarladığınız birimler, uzunluk biçimi, hassasiyet ve metin yüksekliğine sahip olur ve ilk yeni sayfası seçtiğiniz kâğıtta olur.

## Politikalar

- **Yeni bir çizimin birimleri**: yok, milimetre, santimetre, metre, inç ya da fit.
- **Uzunluk biçimi** ve **Uzunluk hassasiyeti**: UNITS komutunun, yeni bir çizim için ayarladığı değerler.
- **Yeni metnin yüksekliği**, çizim birimlerinde.
- **Yeni bir sayfanın kâğıdı**: Yeni sayfa'nın kullandığı kâğıt.
- **Kâğıttaki açıklama boyutları** (Ayarlar › Genel › Varsayılan politikalar): ofisin basılı olarak milimetre cinsinden yükseklikleri. CadCraft notlar ve etiketler için olanı kullanır: {{cmd:ANNOSCALE}}, yeni metnin başlayacağı yüksekliği açıklama ölçeğinde o yüksekliğe ayarlar. Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#annotate-by-scale).

İnç ya da fit cinsinden bir çizim Emperyal değerleri kullanır; diğer her çizim Metrik olanları kullanır. Birimi olmayan bir çizim, Ayarlar › Genel › Varsayılan politikalar'da belirlenen birim sistemini kullanır; hiçbiri belirlenmemişse Metrik.

## Ofis genelinde paylaşın

1. Ayarlarda **Genel** sekmesini açın ve {{ui:Varsayılan politikalar}} seçin.
2. {{ui:Dosyaya kaydet}} öğesine tıklayın. `.ccdefaults.json` ile biten küçük bir dosya alırsınız.
3. Başka bir bilgisayarda eklentiyi açın, aynı yere gidin ve {{ui:Dosyadan yükle}} öğesine tıklayın. Dosyanın politikaları, o bilgisayardakilerin yerine geçer.

Tek bir dosya bütün CadCraft uygulamalarının politikalarını tutar; bu yüzden aynı dosya BimCraft'ta da çalışır.

## İyi bilinmesi gerekenler

- Bir sayfanın ölçeği için bir politika yoktur: yeni bir sayfanın görünümü çizime sığdırılır ve ölçeğini sayfada siz ayarlarsınız.
- Bir ölçülendirme stili için politika yoktur: yeni bir çizimde adlandırılmış ölçülendirme stilleri olmaz. DIMSTYLE ile ölçülendirmeleri ayarlayın ya da sizinkilerin bulunduğu bir çizimden başlayın.
- Dosya düz, açık bir JSON'dur. Dosyanın adını verdiği ama bu sürümün bilmediği bir politika dışarıda bırakılır ve iletide adı söylenir; gerisi yüklenir.
- Politikalar çizimde değil, bu tarayıcıda tutulur. Eklentiyi kapatın, her şey yine CadCraft'ın kendi değeri olur.
