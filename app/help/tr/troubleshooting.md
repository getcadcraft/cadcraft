---
title: Sorun giderme
summary: CadCraft'ın gösterdiği iletiler ve karşılaşabileceğiniz sorunlar; her biri için neden ve çözümüyle.
keywords: sorun, hata, çalışmıyor, ileti, açılmıyor, bilinmeyen komut, hiçbir şey olmuyor, takıldı, tuşlar çalışmıyor, boş, eksik, düzelt
from: 8299b222
---

## Dosya açma

| İleti veya belirti | Neden | Çözüm |
|---|---|---|
| "CadCraft DWG ve DXF çizimlerini açar. "…" bunlardan biri değil." | Dosya bir `.dwg` veya `.dxf` değil. | Çizim dosyasının kendisini açın. Bir PDF içe aktarılabilir (Aç sorar: içe aktar veya ekle, bkz. [PDF altlıkları](topic:pdf-underlay)); resimler `IMAGEATTACH` ile eklenir. |
| "Bu ikili DXF bir nesnenin ortasında bitiyor: dosya kısa kesilmiş veya bozulmuş." | İkili DXF sonundan önce duruyor. | Okunabilenleri açmak için RECOVER yazın veya dosyayı yeniden isteyin. |
| "Bu dosya okunabilir bir DXF değil (… satırında hatalı grup kodu)." | DXF bozuk veya gerçekten bir DXF değil. | Dosyayı yeniden isteyin veya bir DWG isteyin. |
| "Bu çizim okunamadı. Bozulmuş olabilir ya da okuyucunun henüz desteklemediği bir sürümde kaydedilmiş olabilir (…)." | DWG okuyucusu onu okuyamadı. | Daha eski bir sürümde kaydedilmiş DWG'yi veya bir DXF'i isteyin. |
| "Bu çizim AutoCAD R11 / R12 (DWG AC1009) sürümüne ait; CadCraft'ın okuduğundan daha eski …" | Release 12 ve öncesine ait DWG dosyaları CadCraft'ın okumadığı bir biçim kullanır. | Dosyayı oluşturan programda DXF (herhangi bir sürüm) veya daha yeni bir DWG olarak kaydedin ve onu açın. CadCraft'ın kendi Farklı kaydet seçeneği, o eski biçimi isteyen programlar için DXF R12 sunar. |
| "Açılamadı …" ardından bir ağ iletisi, ilk DWG'de | DWG okuyucusu indirilemedi: çevrimdışısınız ve CadCraft çevrimdışı kullanım için kaydedilmemiş ya da bağlantı kesildi. | Çevrimiçi olup yeniden deneyin veya bir DXF açın. {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın ve bir sonraki sefer DWG dosyalarının çevrimdışı açılması için "Çevrimdışı hazır" yazısını bekleyin. Bkz. [Çevrimdışı çalışma](common:offline). |
| Çevrimdışı düğmesi "Kaydedilemedi" der | Bazı dosyalar indirilemedi. | Bağlantıyı kontrol edin ve yeniden denemek için düğmeye tıklayın. |
| Çevrimdışı düğmesi "Çevrimdışı kullanılamıyor" der | Gizli pencereler ve bazı yönetilen bilgisayarlar çevrimdışı kopya tutamaz. | Normal bir pencere kullanın veya çevrimiçi kalın. |
| Bağlantı yokken CadCraft açılmıyor | Bu tarayıcıda çevrimdışı kullanım için kaydedilmemiş ya da tarayıcı bunu temizlemiş. | Bir dahaki sefere çevrimiçi olduğunuzda {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın ve "Çevrimdışı hazır" yazısını bekleyin. |
| Çizim açılıyor ama bazı parçalar eksik | CadCraft'ın henüz çizemediği nesneler ya da dosyada kapalı veya dondurulmuş katmanlar. | Sol paneldeki "Bu dosya hakkında" bölümünü okuyun. {{ui:Katmanlar}} panelini kontrol edin. |
| Metin iki satıra kırılıyor | CadCraft metni, bazı CAD yazı tiplerinden daha geniş olan Helvetica tarzı bir yazı tipiyle çizer. | Özellikler içinde metni kısaltın veya fazladan satırı kabul edin. |
| Daire elips olarak görünüyor ya da aynalanmış metin doğru yönde okunuyor | Nesne, dosyayı oluşturan programda eğik bir düzlemde veya alttan görünecek şekilde çizilmiş. CadCraft onu o programın plan görünümünün yaptığı gibi, üstten görülmüş olarak gösterir; metin okunabilir tutulur. | Düzeltilecek bir şey yok. Diğer programın bakış açısıyla görmek için çizimin düzleştirilmiş veya nesnelerin üstten çizilmiş olarak istenmesini isteyin. |
| Bir blok, daire veya ölçülendirme, dosyayı oluşturan programdakinden farklı bir yerde duruyor | CadCraft'ın yanlış okuduğu bir çizim durumu. | Discord'da bize bildirin; dosyayı paylaşabiliyorsanız dosyayı da ekleyin. |

## Komut satırı

| İleti veya belirti | Neden | Çözüm |
|---|---|---|
| "Bilinmeyen komut "…". Liste için HELP yazın." | Bu adda komut veya kısayol yok. | `HELP` yazın veya [Komut başvurusu](topic:commands) bölümüne bakın. Bazı tanıdık komutlar [henüz yapılmadı](topic:not-built-yet). |
| Yazarken komut satırının yanında "Böyle bir komut yok" | Yazdığınız hiçbir şeyle eşleşmiyor. | Yazmaya devam edin veya yazımı kontrol edin. |
| "Nokta veya seçenek anahtar sözcüğü gerekli." | Yazdığınız şey bir nokta veya seçenek değil. | Biçimi kontrol edin: `x,y`, `@dx,dy`, `@d<a` veya tek bir sayı. Bkz. [Koordinat ve uzaklık girişi](topic:coordinate-entry). |
| "Pozitif bir sayı veya iki nokta gerekir." | Bir uzaklık negatifti veya sayı değildi. | Pozitif bir sayı yazın veya iki noktaya tıklayın. |
| "Derece cinsinden bir açı veya iki nokta gerekir." | Açı bir sayı değildi. | Dereceyi düz bir sayı olarak yazın. |
| "Bir sayı gerekir." | Bir sayı bekleniyordu. | Yalnızca rakam yazın. |
| "Geçersiz seçenek anahtar sözcüğü." | Harfler bir seçenekle eşleşmiyor. | Köşeli parantez içinde gösterilen büyük harfleri yazın. |
| `*İptal*` | {{key:Esc}} tuşuna bastınız veya bir nokta gerekirken {{key:Enter}} tuşuna bastınız. | Komutu yeniden başlatın. |
| Yazdıklarınız komut satırına ulaşmıyor | Bir panelde veya iletişim kutusunda bir kutu imleci tutuyor. | {{key:Enter}} veya {{key:Esc}} tuşuna basın ya da çizime tıklayın. |
| Komut, seçmediğiniz nesneleri kullanıyor | Komutu başlatmadan önce seçili kalmışlardı. | Komuttan önce {{key:Esc}} tuşuna basın. |
| Bir çizgi beklenmedik bir yere gitti | `x,y` mutlaktır. | Göreli noktalar için `@dx,dy` kullanın. |
| "Önce geçerli komutu bitirin veya iptal edin (Esc)." | Bir komut çalışırken {{key:Mod+S}} tuşuna bastınız. | {{key:Esc}} tuşuna basın, sonra kaydedin. |
| "DWG (AutoCAD 2000) olarak kaydedilemedi: … Farklı kaydet'i, sonra DXF'i deneyin." | Çizimde bir şey DWG olarak yazılamadı. | {{key:Mod+Shift+S}} tuşuna basın, {{ui:DXF R12}} seçeneğini seçin ve {{ui:Kaydet}} düğmesine tıklayın. |
| "Kaydedilmedi." | {{ui:Bir kopyayı şöyle kaydet}} iletişim kutusunu {{ui:İptal}} veya {{key:Esc}} ile kapattınız. | {{key:Mod+Shift+S}} tuşuna yeniden basın ve {{ui:Kaydet}} düğmesine tıklayın. |

## Düzenleme

| İleti veya belirti | Neden | Çözüm |
|---|---|---|
| Bir nesne seçilmiyor | Katmanı kilitli, kapalı veya dondurulmuş; ya da bir sayfadasınız ve nesne bir görünüm penceresindeki model. | Katmanın kilidini açın veya {{ui:Model}} sekmesine geçin. |
| "Orada hiçbir şey bulunamadı." | Tıklamanın altında nesne yok. | Yakınlaştırın ve doğrudan çizgiye tıklayın. |
| "Orada o nesneyi kesen bir şey yok." | {{cmd:TRIM}}, seçtiğiniz parçayı kesen bir nesne bulamadı. | Kesici çizginin gerçekten onu kestiğini kontrol edin. |
| "Bu nesne kırpılamaz." | Kırpma, çizgiler, yaylar, daireler ve çoklu çizgilerde çalışır. | Önce blokları patlatın veya silip yeniden çizin. |
| "Bu yönde sınır yok." | {{cmd:EXTEND}} ulaşacak bir şey bulamadı. | Büyümesi gereken uca daha yakın seçin. |
| "Bu nesnenin ofseti alınamaz." | Ofset, çizgiler, yaylar, daireler ve çoklu çizgilerde çalışır. | Önce patlatın veya paralel bir çizgi çizin. |
| "Ofset bu kadar uzağa alınamaz." | Ofset şekli içten dışa çevirirdi. | Daha küçük bir uzaklık kullanın. |
| "Yarıçap çok büyük." veya "Uzaklık çok büyük." | Köşe yuvarlatma veya pah, bir çizginin ucunu aşardı. | Yarıçap (`R`) ile daha küçük bir yarıçap ya da Uzaklık (`D`) ile daha küçük uzaklıklar ayarlayın. |
| "Açık bir çoklu çizginin yalnızca ilk veya son parçası geri kesilebilir." | Köşe, çoklu çizginin ortasına girerdi. | Çoklu çizginin yan yana iki parçasını seçin veya her köşe için `P` seçeneğini kullanın. |
| "İkinci, farklı bir çizgi seçin." | İkinci seçim aynı çizgiydi veya bir çizgi değildi. | Başka bir çizgi seçin. |
| "Yalnızca çoklu çizgiler, blok başvuruları ve ölçülendirmeler patlatılır." | Seçimde patlatılacak bir şey yoktu. | Bir çoklu çizgi, blok başvurusu veya ölçülendirme seçin. |
| "Bu geçerli katman. Önce başka bir katmanı geçerli yapın." | Geçerli katmanı kapatmaya çalıştınız. | Başka bir katmanın adına tıklayın, sonra bunu kapatın. |
| "… adlı bir katman zaten var." | Katman adları benzersiz olmalıdır. | Başka bir ad seçin. |
| "Geri alınacak bir şey yok." | Geri alınacak bir şey kalmadı ya da bir çizim açtınız veya başlattınız (bu geçmişi temizler). | — |

## Ölçülendirmeler ve bloklar

| İleti veya belirti | Neden | Çözüm |
|---|---|---|
| Ölçülendirme metni ve oklar çok küçük ya da çok büyük | Boyutlar çizim birimleriyle verilir; genel ölçek çizime uymuyor. | {{cmd:DIMSCALE}} değerini çıktı ölçeğine ayarlayın; bkz. [Ölçülendirme boyutlarını ayarlama](topic:dimension-settings). |
| "Ölçmek istediğiniz açının içinde bir nokta seçin." | Açısal ölçülendirmenin konumu bir kenarın üstünde. | Açının içine tıklayın. |
| "Bu çizgiler paralel." | Paralel çizgilerin arasında bir açı yoktur. | Birbirini kesen iki çizgi seçin. |
| "Doğrusal veya hizalı bir ölçülendirme seçin." | {{cmd:DIMCONTINUE}} veya {{cmd:DIMBASELINE}} başlangıç olarak birini ister. | Doğrusal veya hizalı bir ölçülendirme seçin. |
| "Bu çizimde henüz blok yok: F bir dosyadan, L kütüphaneden bir blok ekler …" | Çizimin kendi bloğu yok. | `F` veya `L` yazın ya da {{cmd:BLOCK}} ile bir blok oluşturun. |
| "\"…\" adında bir blok yok." | Ad yanlış. | İleti var olan blokları listeler. |
| "Bir blok adı * ile başlayamaz veya … kullanamaz" ardından karakter listesi | Adda blokların kullanamayacağı bir karakter var. | Harfler, rakamlar, `-` ve `_` kullanın. |
| "Bir blok kendini içeremez." | Seçimde yapılmakta olan bloğa bir başvuru var. | O başvuruyu dışarıda bırakın. |
| "Hiçbir nesne seçilmedi; hiçbir şey oluşturulmadı." | Seçmeden önce {{key:Enter}} tuşuna bastınız. | {{cmd:BLOCK}} komutunu yeniden çalıştırın ve nesneleri seçin. |

## Sayfalar ve çıktı alma

| İleti veya belirti | Neden | Çözüm |
|---|---|---|
| "Görünüm pencereleri bir düzene konur. Önce bir düzen sekmesi açın (veya LAYOUT ile bir tane oluşturun)." | {{ui:Model}} sekmesinde {{cmd:MVIEW}}. | Önce bir sayfa sekmesine tıklayın. |
| "Önce görünüm penceresiyle düzeni açın." | {{ui:Model}} sekmesinde {{cmd:VPVIEW}}. | Önce sayfa sekmesine tıklayın. |
| Bir görünüm penceresi ölçeği on kat yanlış görünüyor | Çizim birimleri yanlış. | {{ui:Geçerli ayarlar}} içinde {{ui:Birimler}} değerini ayarlayın. |
| "Henüz çıktı alınacak bir şey yok." | Model boş. | Bir şey çizin veya bir çizim açın. |
| "Çıktı alınacak pencereyi seçin." | {{ui:Bir pencere…}} seçili ama hiçbir pencere seçilmedi. | {{ui:Seç}} düğmesine tıklayın ve iki köşe seçin. |
| "… kâğıttan büyük: kenarlar kesiliyor." | Alan bu ölçekte sığmıyor. | Daha küçük bir ölçek, daha büyük bir kâğıt veya {{ui:Kâğıda sığdır}} seçin. |
| "Tarayıcı yeni sekmeyi engelledi, bu yüzden PDF bunun yerine indirildi." | Site için açılır pencereler engelli. | İndirilen PDF'i açın veya site için açılır pencerelere izin verin. |
| Karakterler "?" olarak basılıyor | PDF'in yazı tiplerinde onlar için harf yok (nadir ideogramlar, Hintçe ve karmaşık biçimleme gerektiren diğer alfabeler, …) ya da daha büyük yazı tipi indirilemedi (çevrimdışı). Avrupa alfabeleri, Kiril, Yunan, İbranice, Arapça, Farsça, Urduca, Tayca, Çince, Japonca ve Korece olduğu gibi basılır. | Arap alfabesi, Tayca, Çince, Japonca veya Korece için bağlantıyla yeniden çıktı alın. Diğer alfabeler henüz yapılmadı. |
| PDF'te yapı çizgileri görünüyor | Katmanları çıktı alınıyor. | Katmanın yazıcı düğmesine tıklayın. |
| Tüm çizgiler eşit kalınlıkta | Kalınlıkları {{ui:Varsayılan}}, yani iletişim kutusundaki kalem genişliğinde basılırlar. | Sağ panelde katmanlara veya nesnelere bir {{ui:Çizgi kalınlığı}} verin ya da iletişim kutusunda bir {{ui:Çizgi kalınlığı}} seçin. Çizgi kalınlıklarını ekranda görmek için durum çubuğunda {{ui:LWT}} düğmesine basın. |

## Tuşlar ve ekran

| Belirti | Neden | Çözüm |
|---|---|---|
| F3, F7 veya F8 ses düzeyini değiştiriyor ya da Mission Control'ü açıyor | Mac işlev tuşları. | **fn** tuşunu basılı tutun veya durum çubuğu düğmelerini kullanın. Bkz. [Tuşlar, fareler ve dokunmatik paneller](common:keys). |
| F7 imleç gezinmesini soruyor | Firefox'un F7 tuşunu kendi kullanımı. | Hayır seçin; {{ui:Izgara}} düğmesini kullanın. |
| {{key:Mod+N}} bir tarayıcı penceresi açtı | Tarayıcı bu tuşu kendisi kullanır. | {{ui:Yeni}} düğmesine tıklayın veya `NEW` yazın. |
| {{key:Mod+A}} komut satırının metnini seçti | Komut satırı imleci tutuyordu. | Önce bir nesneye tıklayın veya `Nesne seçin` isteminde `ALL` yazın. |
| {{key:Delete}} silmiyor | Komut satırı imleci tutuyordu. | `E` yazıp {{key:Enter}} tuşuna basın. |
| Mac dokunmatik panelinde sağ tıklama hiçbir şey yapmıyor | Control-tıklama sıradan bir tıklama sayılabilir. | İki parmakla tıklayın. |
| Dokunmatik panelde hiçbir şey kaydırılmıyor | Orta düğme yok ve {{key:Space}} kaydırmaz. | İki parmakla kaydırın: 2B görünüm kayar (sıkıştırma ve fare tekerleği yakınlaştırır). Ya da sağ tıklamayı basılı tutarak sürükleyin. |
| İlk {{key:Esc}} tam ekrandan çıktı | Tarayıcı tam ekrandan çıkmak için Esc kullanır. | Komutu iptal etmek için {{key:Esc}} tuşuna yeniden basın. |
| {{key:F1}} Mac'te hiçbir şey yapmıyor | F1 bir parlaklık tuşu. | **fn** tuşunu basılı tutun veya {{ui:Yardım}} düğmesine tıklayın. |
| Yazdıklarınız yardımın arama kutusuna gidiyor | Yardım paneli imleci tutuyor. | Çizime tıklayın. |
| Çizim boşaldı | Çok uzaklaşarak yakınlaştırdınız. | {{ui:Sınırlar}} düğmesine tıklayın veya tekerleğe çift tıklayın. |
| Sekmeyi kapatırken "Siteden ayrılmak istiyor musunuz?" | Kaydedilmemiş değişiklikler var. | Kalın, {{key:Mod+S}} ile kaydedin, sonra kapatın. |
