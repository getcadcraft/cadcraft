---
title: Çizimi kısıtlama
summary: Çizgileri yatay tutun, uçları birleşik tutun ve ölçüleri geometrik ve boyutsal kısıtlamalarla sabit tutun; bir ölçüyü değiştirdiğinizde çizimin buna uymasını sağlayın.
keywords: kısıtlama, kısıtlamalar, parametrik, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, serbestlik dereceleri, tam kısıtlı
from: f8f21fa4
---

## Ne yapacaksınız

Genişliğini tek bir yerden değiştirebileceğiniz bir levha: kenarları dik kalır, bir köşesi yerinden oynamaz, yüksekliği her zaman genişliğinin yarısı kadar kalır.

Kısıtlamalar {{ui:Model}} sekmesinde çizgiler, çoklu çizgiler, daireler, yaylar ve noktalar üzerinde çalışır. Eklediğiniz her kısıtlama bir geri alma adımıdır.

## Ana hattı çizin ve kısıtlayın

1. `REC` yazıp {{key:Enter}} tuşuna basın. `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}} yazın.
2. `AUTOCONSTRAIN` yazıp {{key:Enter}} tuşuna basın. `ALL` yazın, {{key:Enter}}, sonra yine {{key:Enter}} tuşuna basın.

   Geçmişte "4 kısıtlama uygulandı" yazar. Kenarların yanında **H** ve **V** harfli küçük kutular belirir: bunlar kısıtlama çubuklarıdır.
3. `GCFIX` yazıp {{key:Enter}} tuşuna basın. Sol alt köşenin yakınına tıklayın. ⊕ işaretli bir kutu belirir: bu köşe olduğu yerde kalır.

`AUTOCONSTRAIN`, uçların neredeyse birleştiği yerlere çakışık kısıtlamalar; çizgilerin neredeyse yatay ya da dik olduğu yerlere yatay ya da dikey kısıtlamalar ekler. Yakınlık derecesini değiştirmek için istem sırasında `S` yazın (başlangıçta 0,05 çizim birimi ve 1°).

## Ölçüleri ekleyin

1. `DCHORIZONTAL` yazıp {{key:Enter}} tuşuna basın.
2. Sol alt köşenin yakınına, sonra sağ alt köşenin yakınına tıklayın.
3. Ölçü çizgisi için dikdörtgenin altına tıklayın.
4. İstemde `Dimension text <d1=100>` görünür. `width=120` yazıp {{key:Enter}} tuşuna basın.

   Dikdörtgen artık 120 genişliğinde ve etiket `width=120` yazıyor.
5. `DCVERTICAL` yazıp {{key:Enter}} tuşuna basın, `O` yazıp {{key:Enter}} tuşuna basın, sonra sağ kenara tıklayın.
6. Kenarın sağına tıklayın, `width/2` yazıp {{key:Enter}} tuşuna basın.

   Yüksekliği 60 olur. Etiket `fx: d1=width/2` yazar: bir ifade bunu yönetiyor.

Geçmiş artık ana hattın tam kısıtlı olduğunu söyler. Boyutunu değiştirmek için `width` değerini değiştirin (bkz. [Parametre ve denklemleri kullanma](topic:parameters)) ya da `width=120` etiketine çift tıklayıp yeni bir değer yazın ve {{ui:Uygula}} seçeneğini belirleyin.

## Kısıtlanmış nesneleri taşıma

Taşı, döndür, ölçekle, tutamaçlar ve Özellikler paneli de kısıtlamaları korur: taşıdığınız nesne tutulur, geri kalanı ona uyar. Kısıtlamalar uyamadığında düzenleme yapılmaz ve geçmiş nedenini yazar; örneğin "Yapılmadı: kısıtlamalar bu nesneyi olduğu yerde tutuyor". Bir nesneyi silmek, kısıtlamalarını da siler.

## Kısıtlanmış nesneleri aynalama ve kırpma

- {{cmd:MIRROR}} aynalanan nesneler arasındaki kısıtlamaları kopyalara aktarır. Taraflar (bir teğetin hangi yana değdiği, bir mesafenin hangi yana ölçüldüğü) aynalanmış kopya için yeniden hesaplanır; kopyalanan ölçülendirmeler de bir yapıştırmada olduğu gibi kendi adlarını alır. `Erase source objects` seçeneğini `Y` yaparsanız kısıtlamalar aynalanmış nesnelerde kalır. Geçmiş kaç tanesinin geldiğini söyler.
- {{cmd:TRIM}} bir çizginin ya da yayın kısıtlamalarını kalan parçada tutar: bir uçtaki kısıtlama, o ucu hâlâ taşıyan parçaya geçer; yön kuralı ({{ui:Yatay}}, {{ui:Dikey}}, {{ui:Paralel}}, {{ui:Dik}}) her parçada geçerli kalır; iki dış uç arasındaki bir ölçülendirme onları ölçmeye devam eder. Kesilip atılan parçayı tutan kısıtlamalar ya da kesmenin değiştirdiği bir uzunluk ({{ui:Eşit}}, bir yayın açıklığı) kaybolur. Kırpılan bir daire merkez ve yarıçap kısıtlamalarını korur. Kırpılan çoklu çizgiler kendi kısıtlamalarını kaybeder.

## Kısıtlamalar

| Komut | Korunan |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | bir çizgi ya da kesim yatay ya da dik (`2P`: iki nokta yatay ya da dik) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | iki çizgi paralel, dik ya da aynı doğru üzerinde |
| {{cmd:GCCOINCIDENT}} | iki nokta birleşik; `O`: bir nokta bir çizgi, daire ya da yay üzerinde |
| {{cmd:GCTANGENT}} | bir çizgi ile bir daire ya da yay, ya da bunlardan ikisi, birbirine değer |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | iki daire ya da yay aynı merkezde; iki uzunluk ya da iki yarıçap eşit |
| {{cmd:GCSYMMETRIC}} | iki nokta, çizgi ya da daire bir çizgiye göre aynalı |
| {{cmd:GCFIX}} | bir nokta (yakınına tıklayın) ya da bütün bir nesne (`O`) olduğu yerde |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | bir mesafe |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | bir yarıçap, bir çap, iki çizgi arasındaki bir açı ya da bir yayın açısı |

{{cmd:GEOMCONSTRAINT}} ve {{cmd:DIMCONSTRAINT}} hangisini istediğinizi sorar; {{ui:Kısıtla}} ve {{ui:Ölçülendirme}}, {{ui:Parametrik}} grubunda bunları çalıştırır, {{ui:Daha fazla}} altında her birini listeler. Tıkladığınız yer parçayı belirler: bir ucun, ortanın ya da merkezin yakınına tıklamak o noktayı seçer; bir çoklu çizgiye tıklamak, altındaki parçayı seçer. İlk nesne yerinde kalır, ikincisi ona doğru taşınır.

Diğer kısıtlamalarla çakışan ya da diğerlerinin zaten ima ettiği için bir şey eklemeyen bir kısıtlama bir iletiyle reddedilir ve hiçbir şey hareket etmez.

## Görme, seçme ve kaldırma

- Bir kısıtlama çubuğundaki kutuya (ya da bir çakışık kareye ya da bir ölçülendirme etiketine) tıklayın: o kısıtlama seçilir ve geçmiş adını söyler. Kaldırmak için {{key:Delete}} tuşuna basın.
- {{cmd:DELCONSTRAINT}}, seçtiğiniz nesnelerdeki bütün kısıtlamaları kaldırır.
- {{cmd:CONSTRAINTBAR}}: `S` bütün çubukları gösterir, `H` gizler; çubuklarını göstermek ya da gizlemek için önce nesneleri seçin. {{ui:Daha fazla}} altında {{ui:Kısıtlama çubuklarını göster}} ve {{ui:Kısıtlama çubuklarını gizle}} vardır.
- {{cmd:DCDISPLAY}} boyutsal kısıtlamaları gösterir ya da gizler. Bunlar hiçbir zaman çıktıya girmez.
- {{cmd:DCCONVERT}}, çizgiler, daireler ve yaylar üzerine çizilmiş ölçülendirmeleri boyutsal kısıtlamalara dönüştürür.

:::note
AutoCAD'in parametrik çizimini kullandıysanız komut adları ve istemler aynıdır. Kısıtlamalar ve parametreler DWG ve DXF dosyalarına, diğer programların yok saydığı bir biçimde kaydedilir; bkz. [Dosyalar](topic:files#constraints-in-files).
:::
