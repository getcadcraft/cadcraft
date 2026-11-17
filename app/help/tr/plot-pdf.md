---
title: PDF'e çıktı alma
summary: Bir sayfanın tam boyutta ya da modelin bir ölçekte ya da kâğıda sığdırılmış bir PDF'ini yapın, tarayıcıdan ya da Studio'dan yazdırın ya da PNG ya da SVG olarak kaydedin.
keywords: çıktı, plot, yazdır, print, yazıcı, printer, kopya, copies, png, svg, resim, picture, pdf, yayımla, publish, exportpdf, kâğıt, paper, ölçek, scale, tek renk, monochrome, gri tonlar, grayscale, siyah beyaz, black and white, çizgi kalınlığı, line weight, kalem, pen, sayfa düzeni, page setup, çıktı penceresi, plot window, çıktı stili, plot style, çıktı stili tablosu, plot style table, ctb, renge bağlı, color dependent, tramalama, screening, plotstyles, stylesmanager
from: a4752f83
---

## Ne yapacaksınız

Bir sayfanın tam boyutta bir PDF'i, sonra modelin 1:100'de hızlı bir PDF'i ve bir çıktı.

PDF tarayıcınızın içinde yapılır; hiçbir şey yüklenmez. Bu bir vektör PDF'dir: çizgiler her yakınlaştırmada keskin kalır ve metin aranabilir.

## Bir sayfa çıktısı alın

1. Çizimin altındaki sayfa sekmesine tıklayın.
2. {{key:Mod+P}}'ye basın, {{ui:Çıktı al}}'a tıklayın ya da `PLOT` yazıp {{key:Enter}}'a basın.

{{ui:PDF'e çıktı al}} iletişim kutusu açılır. Hangi sayfayı ve hangi kâğıda çıktı alacağını "tam boyutta … gördüğünüz gibi" diye söyler. Sağdaki önizleme sayfayı gösterir.

3. {{ui:Çıktı stili}} içinde, siyah çizgiler için {{ui:Tek renk (siyah)}}, renkleri korumak için {{ui:Renk (çizildiği gibi)}}, {{ui:Gri tonlar}} ya da kendi tablonuzu seçin ([Çıktı stili tabloları](topic:plot-pdf#plot-style-tables) bölümüne bakın). Sayfa bu seçimi tutar: çizimle birlikte kaydedilir.
4. {{ui:Çizgi kalınlığı}} içinde, 0.13 mm ile 0.70 mm arasında bir kalem genişliği seçin. Varsayılan çizgi kalınlığına sahip çizgiler bu genişlikte yazdırılır; kendi çizgi kalınlığı olan çizgiler (katman ya da nesne, ya da tablodaki renginin kalemi) o genişlikte yazdırılır.
5. {{ui:PDF indir}}'e tıklayın.

Tarayıcı, çizimin ve sayfanın adını taşıyan bir PDF indirir, örneğin `Drawing1-A-101 Plan.pdf`. Geçmiş boyutunu bayt olarak ve kâğıt boyutunu milimetre olarak bildirir.

Bir sayfa her zaman kendi kâğıdında 1:1 çıktı alınır. Kâğıdı değiştirmek için sayfanın kendisinde değiştirin ([Bir sayfayı ayarlayın](topic:sheets-and-viewports) bölümüne bakın). Çıktı alınmayacak olarak ayarlanan katmanlar dışarıda bırakılır; görünüm çerçeveleri de öyle.

## Tüm sayfaları tek bir PDF'te

İki veya daha fazla sayfa varsa, {{ui:PDF'e çıktı al}} iletişim kutusunda {{ui:Tüm sayfalar tek bir PDF'te}} bulunur; ya da {{cmd:PUBLISH}} yazın. {{key:Enter}} her sayfayı alır; Bazıları (S) seçeneği, sayfaların adlarını virgülle ayırarak ister. Tek bir PDF iner: sekme sırasında, her sayfa için bir sayfa, her biri kendi kâğıt boyutunda ve her sayfa için adıyla bir yer imi. Her sayfa kendi çıktı stili tablosuyla çıktı alır; hiçbiri seçilmediyse, iletişim kutusunda en son seçtiğiniz tablo ve en son seçtiğiniz kalem genişliği kullanılır.

## Modeli çıktı alın

1. {{ui:Model}} sekmesine tıklayın.
2. {{key:Mod+P}}'ye basın.

İletişim kutusu modelin bir kâğıda çıktı alınacağını söyler ve daha fazla ayar gösterir:

3. {{ui:Alan}} içinde ne çıktı alınacağını seçin:
   - {{ui:Her şey (sınırlar)}}: çizimin tamamı.
   - {{ui:Ekranda görünen}}: şu an çizimde gördüğünüz alan.
   - {{ui:Bir pencere…}}: sonra {{ui:Seç}}'e tıklayın, çizimde iki köşe tıklayın ve iletişim kutusu geri döner.
4. {{ui:Kâğıt}} içinde bir boyut seçin: ISO A4'ten A0'a, Letter, Legal, Tabloid ve ANSI C ile D, ya da ARCH C, D ve E.
5. {{ui:Yönlendirme}} içinde {{ui:Yatay}} ya da {{ui:Dikey}} seçin.
6. {{ui:Ölçek}} içinde {{ui:Kâğıda sığdır}} ya da `1:100` gibi bir ölçek seçin.

Ayarların altındaki bir satır ölçeği ve alanın kâğıtta ne kadar büyük çıkacağını bildirir. Kâğıttan büyükse bunu söyler: kenarlar kesilir. Daha küçük bir ölçek, daha büyük bir kâğıt ya da {{ui:Kâğıda sığdır}} seçin.

7. {{ui:PDF indir}}'e tıklayın.

Model çıktısı kenarın çevresinde 5 mm'lik bir boşluk bırakır, çünkü çoğu yazıcı kenara kadar yazdıramaz. {{ui:Kâğıda sığdır}} tuhaf bir ölçek verir (geçmiş ve bilgi satırı "(sığdırılmış)" yazar); çizimin gerçek ölçüde olması gerektiğinde standart bir ölçek seçin.

:::note
Ölçekler gerçek birimlerle okunur. 1:100'ün doğru olması için {{ui:Geçerli ayarlar}} içinde {{ui:Birimler}}'i bir çizim biriminin ne olduğuna ayarlayın. Birimsiz bir çizim milimetre kabul edilir.
:::

## Çıktı stili tabloları

Bir çıktı stili tablosu, 255 standart çizim renginin her birinin nasıl yazdırılacağını söyler; renge bağlı bir çıktı stili tablosunun (CTB) diğer CAD programlarında yaptığı gibi. Üç tanesi yerleşiktir:

| Tablo | Yazdırır |
|---|---|
| {{ui:Renk (çizildiği gibi)}} | Her nesne kendi renginde. |
| {{ui:Tek renk (siyah)}} | Her renk siyah: çizimler için olağan seçim. |
| {{ui:Gri tonlar}} | Her renk kendi gri tonunda; böylece siyah beyaz bir yazıcıda renkler ayrı kalır. |

Kendi tablonuzu yapmak için, örneğin kırmızı çizgileri kalın ve siyah, diğer her şeyi ince:

1. {{ui:PDF'e çıktı al}} iletişim kutusunda {{ui:Tabloları düzenle…}}'ye tıklayın (ya da {{cmd:PLOTSTYLES}} yazın).
2. {{ui:Yeni}}'ye tıklayın ve {{ui:Ad}} alanına `office` gibi bir ad yazın. Yerleşik bir tabloyla başlamak için, {{ui:Tablo}} içinde onu seçin ve {{ui:Kopyala}}'ya tıklayın.
3. Izgarada bir renge tıklayın. {{key:Shift}}+tıklama bir renk aralığı seçer, {{key:Mod}}+tıklama bir tane daha ekler ve {{ui:Tüm renkleri seç}} hepsini alır.
4. Seçili renklerin nasıl yazdırılacağını ayarlayın:
   - {{ui:Yazdırılan renk}}: {{ui:Kendi rengi}}, {{ui:Siyah}} ya da {{ui:Başka bir renk…}}.
   - {{ui:Gri tonu olarak}}: rengi kendi gri tonunda.
   - {{ui:Mürekkep (%)}}: 100 tam mürekkep, 50 beyaza yarı yolda (tramalama); arka plan çizgileri için.
   - {{ui:Çizgi kalınlığı}}: {{ui:Kendi çizgi kalınlığı}} nesnenin ya da katmanın çizgi kalınlığını korur; bir değer o renkteki her çizgiyi o genişlikte yazdırır.
   - {{ui:Çizgi tipi}}: o renkteki her çizgiyi başka bir çizgi tipiyle yazdırır (örneğin her kırmızıyı kesik çizgili); {{ui:Nesnenin çizgi tipini kullan}} onları olduğu gibi bırakır.
   - {{ui:Çizgi ucu}} ve {{ui:Çizgi birleşimi}}: düz, kare ya da yuvarlak uçlar ve köşeler için köşeli, eğimli ya da yuvarlak (siz bir şey ayarlamazsanız, eskisi gibi yuvarlak).
   - {{ui:Dolgu stili}}: o rengin katı bir dolgusu, düz mürekkep yerine taralama çizgileri olarak yazdırılır (yatay ya da dikey çubuklar, eğimler, çapraz tarama, elmaslar, kare noktalar); düz mürekkebin çok ağır olduğu yazıcılar ve planlar için.

   Tablonun kendisinde iki ayar daha vardır: {{ui:Çizgi kalınlıkları}}, bildiği genişlikler (yazdırılan bir çizgi en yakınına gider) ve {{ui:Çizgi tipi ölçeği}}, ISO olmayan her çizgi tipinin çizgilerine uygulanan bir çarpan.

5. {{ui:Bitti}}'ye tıklayın. Tablo çizimde tutulur ve sayfa (ya da model) artık onunla çıktı alır. {{ui:İptal}} değişiklikleri atar.

Kendi kalemi olan bir renk köşesinde bir nokta gösterir ve bir çizgi kalınlığı ayarlandığında altında bir nokta. Gerçek bir rengi olan (255 renkten biri olmayan) bir nesne en yakın standart rengin kalemini kullanır.

Çizim, DWG (2000'den 2018'e) ya da DXF (R12 ya da 2000) olarak kaydedildiğinde tablolarını ve her sayfanın seçimini tutar ve onlarla yeniden açılır. Diğer programlar her sayfanın sayfa düzeninde adı (`office.ctb`) görür, tablonun kendisini değil. Başka bir programdan gelen ve sayfa düzeninde `monochrome.ctb` gibi bir tablo adı geçen bir çizim, o adın yerleşik tablosuyla çıktı alır; başka herhangi bir ad için iletişim kutusu çizimde o tablonun olmadığını söyler ve tablo seçene ya da o adla bir tane yapana kadar çizimin renklerine göre çıktı alır.

Bir tabloyu başka bir çizimde kullanmak için, {{ui:Çıktı stili tabloları}} içinde {{ui:Dışa aktar}}'a tıklayın (`office.plotstyle.json` kaydeder), sonra diğer çizimde {{ui:İçe aktar…}}. {{ui:İçe aktar…}} başka bir programdan bir `.ctb` dosyasını da alır: biçimin yayımlanmış tanımından okunur ve **henüz gerçek bir dosyayla denetlenmedi**. Her rengin rengi, tramalaması ve çizgi kalınlığı okunur; gri tonlar, kalem numaraları, çizgi tipleri, çizgi uçları ve birleşimleri ile dolgu stilleri okunmaz; adlandırılmış bir tablo (`.stb`) reddedilir. İlk çıktıyı beklediğinizle karşılaştırın ve yanlışsa dosyayı bize gönderin.

## Yazdırma

**Tarayıcıda**, {{ui:Yazdır…}}'a tıklayın. CadCraft PDF'i yapar ve onun için tarayıcının kendi yazdırma iletişim kutusunu açar. Ölçeği korumak için orada "Gerçek boyut" ya da %100 seçin ("Sığdır" değil). Tarayıcı sayfadan yazdırmayı reddederse, PDF yeni bir sekmede açılır: oradan {{key:Mod+P}} ile yazdırın.

{{ui:Yazdırmak için aç}}'a da tıklayabilirsiniz: PDF yeni bir tarayıcı sekmesinde açılır ve oradan yazdırırsınız.

:::safari
Safari PDF'i gösterebilir ve **Dosya**, ardından **Yazdır** seçmenizi bekleyebilir.
:::

Tarayıcınız yeni sekmeyi engellerse, CadCraft bunun yerine PDF'i indirir ve bunu geçmişte söyler. Bir dahaki sefere bir sekmede açması için site için açılır pencerelere izin verin.

**CadCraft Studio'da**, {{ui:PDF'e çıktı al}} iletişim kutusu bilgisayarın yazıcılarını listeler. {{ui:Yazıcı}}, {{ui:Yazıcıdaki kâğıt}} ve {{ui:Kopya sayısı}}'nı seçin, sonra {{ui:Yazdır…}}'a tıklayın. {{ui:Çıktıyla aynı}} sayfanın boyutundaki yazıcı kâğıdını seçer (A3 sayfa için A3); yazıcının kâğıdı yoksa kendi kâğıdını kullanır ve sayfayı ona sığdırır. Windows'ta sayfa 300 dpi'lık bir resim olarak gönderilir, çünkü Windows bir PDF programı olmadan PDF yazdıramaz; Linux ve macOS'ta PDF'in kendisi sistemin yazdırma servisine gider. Hiçbir şey bilgisayardan çıkmaz.

## Resim ve SVG dosyaları

{{ui:PNG indir}} çıktı alınmış sayfayı 300 dpi'de bir resim olarak kaydeder (yalnızca çok büyük bir sayfa tarayıcının üretebileceğinden büyük olacaksa düşürülür; geçmiş bunu söyler). {{ui:SVG indir}} onu milimetre cinsinden ölçeklenebilir bir çizim olarak kaydeder; çıktının çizgileri ve metniyle. İkisi de PDF ile aynı çıktıdan gelir: aynı çıktı stili, çizgi kalınlığı ve alanla. Çizime yerleştirilmiş resimler yalnızca PDF'e girer; geçmiş kaç tanesinin dışarıda bırakıldığını söyler.

## Resimler

Resimler kendi çözünürlüklerinde, çizgilerin altında yazdırılır. İletişim kutusundaki {{ui:Resimler}} onları daha küçük bir dosya için 600, 300 ya da 150 dpi ile sınırlar. Çizgiler, metin ve taramalar her zaman keskin kalır (vektör) ve saydamlık saydamlık olarak kalır. Bkz. [Çizimde resimler](topic:pictures).

## Hatırlanan ayarlar

İletişim kutusu son kâğıdınızı, yönlendirmenizi, ölçeğinizi ve çizgi kalınlığınızı bu tarayıcıda hatırlar. Çıktı stili tablosu her sayfayla birlikte çizimde tutulur; hiçbiri seçilmediyse bir sayfa en son seçtiğiniz tabloyla başlar. Seçilmiş bir pencere, sayfayı yeniden yükleyene kadar tutulur; ondan sonra iletişim kutusu {{ui:Her şey (sınırlar)}} ile başlar.

## Sık yapılan hatalar

- **PDF boş ya da düğmeler gri.** Çıktı alınacak bir şey yok (boş bir model) ya da {{ui:Bir pencere…}} seçili ve henüz bir pencere seçilmedi ("Çıktı alınacak pencereyi seçin.").
- **Çizgilerin hepsi aynı kalınlıkta.** Çizgi kalınlıkları varsayılan. Katmanlara ya da nesnelere sağ paneldeki {{ui:Çizgi kalınlığı}} verin (bkz. [Çizgi kalınlıkları ve çizgi tipleri](topic:units-papers-scales#line-weights-and-linetypes)) ya da bir [çıktı stili tablosunda](topic:plot-pdf#plot-style-tables) renk başına çizgi kalınlığı ayarlayın.
- **Çıktı stilinin yanında "(bu çizimde yok)".** Çizim başka bir programdan geldi ve içermediği bir tabloyu adlandırıyor. Tablolardan birini seçin ya da o adla bir tane yapın.
- **Yapı çizgileri çıktıya girdi.** Katmanlarını çıktı alınmayacak olarak ayarlayın: {{ui:Katmanlar}} panelinde yazıcı düğmesine tıklayın.
- **Çıktı yanlış boyutta.** Yazıcı ölçekledi. Gerçek boyutta yazdırın.
- **PDF'te metin "?" gösteriyor.** Lehçe, Çekçe, Kiril, Yunanca ve Avrupa'nın diğer alfabelerindeki metin kendisi olarak yazdırılır: PDF, ihtiyaç duyduğu harfleri taşır (Helvetica'nın genişliklerine sahip Liberation Sans yazı tipinden) ve metin yine seçilebilir ve aranabilir. Çince, Japonca ve Korece metin de kendisi olarak yazdırılır: bir çizimde varsa, çıktı daha büyük bir yazı tipi getirir (yaklaşık 10 MB, bir kez) ve PDF yalnızca kullanılan karakterleri taşır; bu yüzden ilk seferinde bir bağlantıya ihtiyaç duyar (önceden kaydedilmiş çevrimdışı bir kopyada değil). İbranice, Latin metniyle aynı gömülü yazı tipinden yazdırılır; Arapça, Farsça ve Urduca metin bir yazı tipi daha getirir (1 MB'tan küçük, bir kez) ve sağdan sola satırlar sıralanır ve harfleri birleştirilir (bkz. [Metin](topic:text)). Bu yazı tiplerinin dışındaki nadir ideogramlar ve Hintçe gibi karmaşık biçimlendirme gerektiren yazılar "?" olarak yazdırılır; geçmiş bunları sayar.
- **{{key:Mod+P}} tarayıcının yazdırma iletişim kutusunu açtı.** İmleç sağ paneldeki bir kutudaydı ya da başka bir iletişim kutusu açıktı. Kutudan çıkmak için {{key:Enter}} ya da {{key:Esc}}'e basın, sonra yeniden deneyin ya da {{ui:Çıktı al}}'a tıklayın.
- **{{key:Mod+P}} hiçbir şey yapmadı.** Bir komut çalışıyor. Önce {{key:Esc}}'e basın.
