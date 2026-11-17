---
title: Eskizleri diğer parça modelleyicilere taşıyın ve onlardan alın
summary: Çiziminizi bir parça modelleyicide tek bir kısıtlı eskize dönüştüren bir makro yazın ve birinden dışa aktarılmış bir eskizi açın.
keywords: eskiz, makro, swb, vba, dışa aktarma, parça modelleyici, genel değişkenler, denklemler, ilişkiler, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks, CadCraft'ın derlendiği ortamda kullanılamıyor; bu nedenle iki yön de henüz SolidWorks'te test edilmedi. CadCraft'ın yazdığı şey yalnızca yapı bakımından denetlenir. Sonucu kullanmadan önce kontrol edin.
:::

## Çizimi eskiz olarak gönderin

1. Çizimi kısıtlayın ve boyutlandırın (bkz. [Bir çizimi kısıtlayın](topic:constraints)).
2. {{ui:Parametrik}} grubunda {{ui:Daha fazla}} seçeneğini açın ve {{ui:SolidWorks için makro (.swb)}} seçeneğini seçin veya {{cmd:SWBOUT}} yazın.

   Çizimin adını taşıyan, `.swb` ile biten bir dosya indirilir.
3. SolidWorks'te **Araçlar > Makro > Çalıştır** seçeneğini seçin ve bu dosyayı belirtin.

Makro, varsayılan parça şablonunuzdan yeni bir parça oluşturur, Ön Düzlem üzerinde bir eskiz açar ve modelin çizgilerini, dairelerini, yaylarını, noktalarını ve çoklu çizgilerini bu eskize çizer; şunlarla birlikte:

- kısıtlamalarınız eskiz ilişkileri olarak,
- boyutsal kısıtlamalarınız aynı adlara sahip boyutlar olarak (`d1@Sketch1`),
- kendi parametreleriniz genel değişkenler olarak,
- her ifade bir denklem olarak.

Parça, çizimin uzunluk birimini kullanır. Metin, bloklar, taralamalar, ölçülendirmeler ve sayfalar eskizin parçası değildir; geçmiş, dışarıda bırakılanları listeler. Denklem biçimi olmayan ifadeler (`if`, `min`, `max`, `round`, `%` ve birkaç diğeri) orada geçerli değerleriyle yazılır ve geçmiş hangilerinin böyle olduğunu belirtir. Makronun oluşturamadığı her şey makronun yanındaki bir günlük dosyasına yazılır ve sonunda bir ileti bunları özetler.

## Bir parçadan eskiz açın

1. SolidWorks'te, parça üzerinde CadCraft dışa aktarma makrosunu çalıştırın (PartCraft uygulamasından indirin: Dosya > Dışa aktar > Parçaları geri getirmek için makroyu dışa aktar). Parçanın yanına `cadcraft-sw-export` biçiminde bir `.json` dosyası yazar.
2. CadCraft'ta {{ui:Aç}} seçeneğini seçin ve bu `.json` dosyasını belirtin.
3. Parçada birden çok eskiz varsa birini seçin.

Eskiz, milimetre cinsinden çizime dönüşür: çizgileri, yayları, daireleri ve noktaları; ilişkileri kısıtlama olarak; boyutları, eskizdeki adlarıyla (`D1`, `D2` …) boyutsal kısıtlama olarak; genel değişkenleri parametre olarak; boyutlarındaki denklemleri ise ifade olarak. Geçmiş, aktarılamayanları listeler; örneğin CadCraft'ta karşılığı olmayan ilişkiler gibi. Eskizin parçadaki konumu korunmaz: düzleminde görüldüğü gibi düz olarak çizilir.
