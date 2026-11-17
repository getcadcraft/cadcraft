---
title: Henüz yapılmadı
summary: Bu CadCraft çizim uygulaması sürümünün henüz neyi yapmadığı ve bugün bunun yerine ne yapılacağı.
keywords: eksik, sınırlamalar, ctb, stb, çıktı stili, özellikler, ucs, açıklama ölçekli, dinamik blok, spline, yol haritası, desteklenmiyor, dwg kaydet, taralama, uzat, dizi, birleştir, matchprop, kır, uzunluğu değiştir, çizgi tipi, çizgi kalınlığı, bağlı çizim, bulut, 3b, katılar, boolean, çoklu belirtme çizgisi, beyazlatma
from: 87e56521
---

CadCraft geliştirme aşamasındadır. Bu sayfa mevcut sürümün neyi yapmadığını listeler, böylece onu aramak zorunda kalmazsınız. Her madde bugün bunun yerine ne yapılacağını söyler.

## Dosyalar ve kaydetme

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| AutoCAD'in kendisinde kontrol edilmiş bir CadCraft DWG'si | Kaydedilen her sürüm üç başka programın DWG okuyucusu ve CadCraft tarafından geri okunur. Bkz. [Bir DWG neyi korur ve neyi değiştirir](topic:files#what-a-dwg-keeps-and-changes). |
| 2000'den yeni DXF kaydetme | DXF 2000 olarak ya da AutoCAD 2018'e kadar DWG olarak kaydedin. |
| Tarayıcıda açılmış dosyanın üzerine kaydetme | Her kaydetme yeni bir kopya indirir; isterseniz eski dosyayı kendiniz değiştirin. CadCraft Studio'da {{key:Mod+S}}, açtığınız dosyaya geri yazar. |
| Bilgisayarlar arasında bulut kaydetme ve eşitleme | CadCraft kayıtlarını henüz buluta göndermez: DWG ve DXF dosyalarınızı kendi klasörlerinizde tutun. CadCraft Studio'da [Geçmiş](topic:history), başka yerden kaydedilmiş bir çizimin bulut sürümlerini ve bu bilgisayardaki kendi kayıtlarınızın kopyalarını listeler. |
| Üst üste bindirmeler ve bağlı bir çizimi yerinde düzenleme | Çizimi bir bağlantı olarak ekleyin ve diğer çizimi değiştirdikten sonra yeniden yükleyin. Bağlantı, DWG olarak kaydettiğinizde bağlantı olarak kalır ve {{cmd:XCLIP}} onu kırpar. |
| DXF'te resimler; altında kalanı gizleyen beyazlatmalar | DXF bir resmi dosya adıyla birlikte çerçevesi olarak tutar; DWG onu resim olarak tutar — bkz. [Bir çizimdeki resimler](topic:pictures). Bir beyazlatma çerçevesi olarak görünür. |
| Eğri çoklu belirtme çizgileri olan, içeriğin iki yanında belirtme çizgileri olan ya da düzensiz döndürülmüş ya da ölçeklenmiş bir bloğu olan çoklu belirtme çizgilerini düzenleme | Diğer program çizdiği gibi çizilir ve bir bütün olarak hareket eder. Tek bir hedefe giden düz belirtme çizgili ve içerik olarak metin ya da blok olan çoklu belirtme çizgileri düzenlenebilir olarak gelir ({{cmd:MLEADEREDIT}}). |
| Diğer programlardan gelen tablolarda: içinde blok bulunan bir hücre, bir hücre içindeki metin biçimlendirmesi, bir DXF tablosunun hücre başına kenarlıkları ve renkleri, sütunlara bölünmüş bir tablo | Tablo düzenlenebilir bir tablo olarak ({{cmd:TABLEDIT}}) açılır ve siz düzenleyene kadar diğer programın çizdiği gibi gösterilir; sonra CadCraft onu hücrelerinden yeniden çizer: düz metin, `=G3*H3` ve `=Sum(I3:I9)` gibi formüller, hizalama ve metin yükseklikleri. Bu durumda blok hücresi boş olur. Dokunulmamış bir DWG tablosu, geldiği hücre verisiyle geri kaydedilir. |
| Kaydedilmiş bir DXF'te gerçek bir tablo nesnesi | DWG tabloyu, diğer programların düzenleyebildiği bir tablo olarak tutar. DXF ise onu çizen blok olarak tutar ve CadCraft'ın kendi kaydıyla: CadCraft onu yeniden tablo olarak açar; diğer programlar bir blok görür. Aynalanmış ya da düzensiz ölçeklenmiş bir tablo, DWG'de de bu şekilde kaydedilir. |
| Diğer programlarla kopyala ve yapıştır | CadCraft'ın panosu, aynı tarayıcıdaki CadCraft çizimleri ve sekmeleri arasında çalışır, diğer programlarla çalışmaz. DWG ya da DXF olarak kaydedin ve orada açın. Bkz. [Kopyala, yapıştır ve çoğalt](topic:copy-paste). |

## Çizim ve düzenleme

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| CadCraft'ta olmayan taralama desenleri ve diğer programların boyadığı gibi tam olarak boyanmış gradyan dolguları | CadCraft'ta olmayan desenlere sahip açılmış taralamalar bir ton olarak görünür. Bir gradyan dolgu ({{cmd:GRADIENT}}), her tür için CadCraft'ın kendi yöntemiyle boyanır: türü itibarıyla diğer programlarınkine benzer, nokta nokta aynı değil. DWG 2004 ve sonrası bunu gerçek bir gradyan taralama olarak tutar; bir DXF 2000 ya da DWG 2000 dosyasında bunu yalnızca CadCraft geri okur ve diğer programlar düz bir dolgu görür. Desenler bir `.pat` dosyasından yüklenir ve bir taralama sınırına bağlanabilir, böylece onu izler: bkz. [Taralama ve dolgu alanları](topic:hatch). |
| İçinde şekil ya da metin bulunan çizgi tipleri ve kaydedilmiş bir DXF R12'de çizgi kalınlıkları | Bir dosyanın çizgi tipindeki şekiller ve metin, çizgilerinden çıkarılır; çizgi kalınlıklarını korumak için DWG olarak kaydedin. |
| Kaydedilmiş bir DXF'te desenli taralamalar | R12'de taralama yoktur: bunlar dış hatları olarak kaydedilir. Deseni korumak için DWG olarak kaydedin. |
| Başka bir programın yaptığı ya da düzenleyebileceği diziler; yol ve kutupsal dizilerde satırlar ve seviyeler; yol eğrisini izleyen bir dizi | ASsociative ile yapılan bir dizi ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; {{cmd:ARRAYEDIT}} ile değiştirilir) CadCraft'ın kendi sayılarıyla bir blok başvurusu olarak kaydedilir: diğer programlar onu gösterir, taşır, çıktı alır ve patlatır, ancak sayılarını değiştiremez; başka bir programda yapılmış bir dizi burada düz bir blok başvurusu olarak açılır. Bir yol dizisi yolunun bir kopyasını tutar: sonradan eğriyi düzenlemek öğeleri taşımaz. |
| Diğer programlara ve diğer programlardan kırpılmış sayfa görünüm pencereleri | {{cmd:VPCLIP}} ile kırpılmış ya da {{cmd:MVIEW}} Polygonal veya Object ile yapılmış bir görünüm penceresi, CadCraft'ın kendi dış hattıyla kaydedilir: diğer programlar onu etrafındaki dikdörtgen olarak açar; başka bir programda kırpılmış bir görünüm penceresi burada dikdörtgeni olarak açılır. DXF R12 yalnızca dikdörtgeni tutar. |
| Kesişen çokgen ile {{cmd:STRETCH}} | Bir ya da daha fazla kesişen pencere kullanın. |
| {{cmd:PEDIT}} Edit vertex (komut satırında her seferinde bir köşe) | Tutamaçlar ve Özellikler içindeki köşe tarayıcısı (her köşe, genişlikleri ve bulge değeri). PEDIT'in geri kalanı yapılmıştır: bkz. [Spline'lar ve çoklu çizgiler](topic:splines). |
| Elipsler ve spline'lar üzerinde {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} ve {{cmd:JOIN}} | Bu komutların alabileceği bir çoklu çizgi elde etmek için bir spline'ı {{cmd:EXPLODE}} edin (ya da {{cmd:PEDIT}} edin). |
| Bir çoklu çizginin yay parçası ile yanındaki parça arasında köşe yuvarlatma ve pah kırma; bir çizgiyi çoklu çizgiye birleştiren köşe yuvarlatma | Çoklu çizgiyi {{cmd:EXPLODE}} edin, sonra parçalara köşe yuvarlatın. Köşe yuvarlatma yayı kendi nesnesi olarak eklenir. |
| Kırpma ve uzatma: Proje seçeneği (3B) ve bir çoklu çizginin yay ucunu uzatma | Çizimin düzleminde kırpın; bir yay ucu için çoklu çizgiyi patlatın ya da yayı yeniden çizin. |
| OLE nesneleri: eklemek, çalıştırmak ya da düzenlemek; bir DWG'de dosyanın koyduğu yerde gösterilenleri göstermek; metafile resimler | Bkz. [Resimler](topic:pictures#objects-from-other-programs-ole). Bir DXF'in nesneleri bitmap'leri ya da etiketli bir çerçeve olarak görünür; bir DWG'nin nesneleri tutulur, yerinde çizilmez (OLELIST bunları listeler ve bir resmin bir kopyasını sizin belirttiğiniz yere yerleştirir). |
| Paragraf metninde biçimlendirme kodları (kalın, üst üste yığılmış kesirler, kelime başına renkler) yazmak; Helvetica benzeri tek yazı tipi dışındaki yazı tipleri; sütunlar | Bir dosyadan gelen biçimlendirme korunur, çizilir ve kaydedilir (bkz. Metin); yeni paragraf metninin tek bir yüksekliği ve rengi vardır. |
| Dönüşünde düzenlenen paragraf metni | Düzenleyici seviye açılır; metin dönüşünü korur. |
| DXF'te çoklu belirtme çizgisi nesneleri olarak kaydedilen çoklu belirtme çizgileri | Bir DWG bunları her belirtme çizgisi ve içerik olarak blok ile birlikte çoklu belirtme çizgisi olarak tutar; bir DXF ise çizdiklerini (çizgiler, ok uçları ve metin ya da blok) tutar. |
| Tablolarda ({{cmd:TABLE}}): bir hücre içinde kaydırılan metin, parçalara bölünen tablolar, bir tablo stilinin kendi metin stili ve bir iletişim kutusunda satır türüne göre renkler, bir elektronik tabloya (`.xlsx`) veri bağlantısı ya da dosyayı kendisi okuyan bir bağlantı | Bir hücrenin metni yalnızca sizin kırdığınız yerde kırılır ({{key:Alt+Enter}}); sütunu genişletin. {{cmd:DATALINK}} bir `.csv` dosyasını okur ve {{cmd:DATALINKUPDATE}} dosyayı yeniden seçmenizi ister. {{cmd:DATAEXTRACTION}} ve {{cmd:COUNTTABLE}} çizimi kendiliğinden izlemeyen bir tablo yapar: bunları yeniden çalıştırın (canlı bir sayım: {{cmd:BOMTABLE}}). |
| Kaydedilmiş bir dosyada (bir blokun dışında) ayrı tutulan öznitelik tanımları, çok satırlı öznitelikler | Kaydetmeden önce öznitelik tanımlarını bir bloğa koyun: tek başlarına kaydedilirlerse etiketi gösteren metin olarak kaydedilirler. |
| Katman durumları (hangi katmanların açık olduğunu kaydetme ve geri yükleme) | {{cmd:LAYISO}} / {{cmd:LAYUNISO}} kullanın ya da katmanları elle açıp kapatın. |
| Pencere çokgeni ve kesişen çokgen seçimi ve kaydedilmiş seçim filtreleri | Çit (`F`), Pencere, Kesişen, Çıkar (`R`), bir kural için {{cmd:QSELECT}}. |

## Özellikler paneli

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Fit seçeneklerinin çizilmesi ve doğrusal ile hizalı dışındaki ölçülendirmelerde yatay metin konumu ve çizginin altındaki metin | Bunlar nesnede tutulur, Özelliklerde gösterilir ve kaydedilir; CadCraft metni kendi kuralına göre yerleştirir. |
| Diğer programların gördüğü malzemeler | Kaydedilmiş bir dosya malzeme adını CadCraft için tutar; diğer programlar katmanın malzemesini gösterir. |
| DWG 2000 ve DXF dosyalarında saydamlık | Diğer programlar bu nesneleri katı gösterir; CadCraft saydamlığı tutar. Herkes için DWG 2004 ya da sonrasını kaydedin. |
| Başka bir programda yapılmış bir taralama bağlantısı | CadCraft kendi bağlantısını DWG ve DXF 2000 dosyalarına kaydeder; diğer programlarda yapılmış bağlantılar okunmaz. `HATCHEDIT` ve Bağlantı'yı kullanın: bkz. [Taralama ve dolgu alanları](topic:hatch). |
| UCS içinde Özelliklerdeki koordinatlar | Özellikler dünya koordinatlarını gösterir; durum çubuğu ve {{cmd:ID}} UCS koordinatlarını gösterir. Bkz. [Görünümü çevirin ve kendi koordinatlarınızı kullanın](topic:ucs-and-turned-view). |
| Açıklama ölçekli bir nesnenin her ölçeğinde ayrı bir konumu; diğer programların tuttuğu ölçek başına kayıtları okuma | Açıklama ölçekli bir metin ya da ölçülendirme bir ölçek listesi tutar ({{cmd:OBJECTSCALE}}) ve her görünüm penceresi onu kendi ölçeği için boyutta, aynı yerde gösterir. Liste CadCraft'ın kendi verisi olarak kaydedilir: başka bir program nesneyi boyutlandırıldığı tek ölçekte görür; başka bir programda yapılmış bir liste okunmaz. Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#annotate-by-scale). |
| Dinamik bir bloğun mesafelerini, açılarını ya da çevirmelerini değiştirme; DWG'nin başka bir sürümüne ya da DXF olarak kaydederken dinamik kalan dinamik bloklar | Görünürlük durumunu Özellikler › {{ui:Custom}} içinde değiştirin; diğer değerleri orada yalnızca okunur gösterilir. Çizimin geldiği sürümde DWG olarak kaydederken dinamik kalır. Bkz. [Dinamik bloklar](topic:dynamic-blocks). |
| Spline uyum toleransı, 6 ve üzeri derecede spline'lar, 3B spline'lar | Uyum ve kontrol noktaları, 1 ila 5 derece ve ağırlıklar yapılmıştır: bkz. [Spline'lar ve çoklu çizgiler](topic:splines). Bir spline'ın yüksekliği (Z) tutulmaz. |

## Hassas yardımcılar

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Komutlar arasında noktalardan izleme ve izleme ayarları iletişim kutusu (göreli kutupsal açılar, ek açılar) | {{cmd:POLARANG}} adımı ayarlar; noktaları bir sonraki komutta yeniden alın. |
| Izgaraya yakalama | Koordinat yazın; ızgara yalnızca görsel bir kılavuzdur. |
| Bir alanın köşelerini seçerken Yay ve Uzunluk seçenekleri ve MEASUREGEOM Hacim | Dış hattı {{cmd:PLINE}} ile çizin (yaylar dahil), sonra {{cmd:AREA}} `O`. |
| Tutamaçlar için dinamik giriş ve seçenek listesi (aşağı ok) | Komut satırı seçenekleri gösterir. |
| Derece-dakika-saniye, grad ya da ölçmen yönü açıları | Ondalık derece yazın: 30°30' için `30.5`. |
| Bir görünüm yöneticisi iletişim kutusu; bir sayfanın, o sayfaya geri dönen adlandırılmış görünümleri | {{cmd:NAMEDVIEW}} görünümleri listeler ve geri yükler. Kaydedilmiş bir dosya bunları tutar, ancak bir sayfanın görünümleri ilk sayfada geri döner. |

## Sayfalar, ölçülendirmeler ve çıktı alma

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Bir görünüm penceresinin ölçeği için alanlar, bir katman ya da blok gibi adlandırılmış bir nesne, bir köprü ve sayfa takımı alanları (sayfa numarası ve adının ötesinde); diğer programların güncellediği alan nesneleri olarak yazılan alanlar | {{cmd:FIELD}}; tarih, dosya adı, sayfa numarası, adı ve sayısı, çizimin özelliklerini ({{cmd:DWGPROPS}}), bir nesnenin alanını, uzunluğunu ve diğer özelliklerini ve formülleri metinde, öznitelikte ve tablo hücrelerinde içerir. Başka bir program bir CadCraft alanını son okuduğu metin olarak gösterir; CadCraft başka bir programın tarih, dosya adı, özellik, sayfa ve ifade alanlarını okur ve diğer türleri metin olarak bırakır. Bir görünüm penceresinin ölçeği elle yazılır. |
| Hangi ölçülendirme stilinin geçerli olduğunu kaydetme; ölçülendirme metnini serbest bir yere sürükleme | Bir çizim, Standard geçerli olarak açılır. Metin ölçülendirme çizgisinin üzerinde durur (DIMTEDIT Left / Right / Center). Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings). |
| CadCraft'ın anlayamadığı, açılmış dosyalardan gelen düzenlenebilir iki satırlı açısal ölçülendirmeler | Dosyada çizildiği gibi gösterilirler. Ordinat, yay uzunluğu ve kırık yarıçap ölçülendirmeleri düzenlenebilir ölçülendirmeler olarak açılır. |
| Diğer programlardan bir CTB dosyasına karşı CTB okuyucusunun denetimi (yayımlanmış açıklamaya göre yapılmıştır), adlandırılmış çıktı stilleri (STB), karıştırma (dither), kalem numaraları, bir CTB'den gri tonlama ve bir çıktı stilinde uyarlanabilir çizgi tipi ayarı | {{ui:Plot style tables}} içinde tabloyu yapın (renk, gri, mürekkep, çizgi kalınlığı, çizgi tipi, çizgi ucu ve birleşimi ve renk başına dolgu stili): bkz. [Çıktı stili tabloları](topic:plot-pdf#plot-style-tables). |
| Sayfa ayarları | {{ui:Plot to PDF}} iletişim kutusunda kâğıdı, ölçeği ve çıktı stilini seçin; bir sayfa kendi çıktı stilini tutar. |
| PDF'lerde karmaşık şekil oluşturma gerektiren Hintçe ve diğer yazılar ile nadir ideogramlar (Avrupa yazıları, Kiril, Yunan, İbrani, Arapça, Farsça, Urduca, Tayca, Çince, Japonca ve Korece çıktı) | "?" olarak yazdırılırlar. |
| Aynı çıktı PDF'inde Arapça alfabeli ve Çince, Japonca ya da Korece metin | Bir çıktı tek bir yazı tipi taşır: iki yazıdan biri "?" olarak yazdırılır. |
| Metinde açık yön işaretleri (gömme, geçersiz kılma, izole etme) | Yok sayılırlar: her satır yalnızca kendi harflerine göre sıralanır. |
| Bir çıktıdaki, eklenmiş bir PDF sayfasının içindeki resimler | Sayfanın çizgileri, dolguları ve metni yazdırılır. Yalnızca bir resim olan bir sayfa {{cmd:SCANATTACH}} ile eklenir ve resimler yazdırılır. Bkz. [PDF altlıkları](topic:pdf-underlay#plot-and-save). |
| CadCraft Studio'dan bir lazere iş göndermek (Studio'da Web Serial yoktur) | G-kodunu kaydedin ve lazerin kendi programıyla gönderin ya da Chrome veya Edge'den gönderin. Bkz. [Bir çizimi lazere gönderin](topic:laser-cutting#send-from-the-browser). |

## Kısıtlamalar ve parametreler

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Sayfalardaki, bloklardaki, elipslerdeki, spline'lardaki ya da metindeki kısıtlamalar | Model sekmesinde, çizgilerde, çoklu çizgilerde, dairelerde, yaylarda ve noktalarda kısıtlayın. |
| Pürüzsüz (G2) ve bir çoklu çizginin yay kabartmasını doğrudan kısıtlama | Teğet ve eşit; bir yay parçası iki ucunu izler. |
| Referans (yönlendirilen) boyutsal kısıtlamalar ve {{cmd:DCANGULAR}} içinde `3Point` | Düz bir ölçülendirme (DIMLINEAR …) bir değeri yönlendirmeden gösterir. |
| Kağıt üzerinde sabit boyutlu boyutsal kısıtlamalar ve bunların çıktısı | Yalnızca ekranda görünürler; çıktı için düz ölçülendirmeler ekleyin. |
| EXPLODE, BREAK, JOIN ve yeni nesneler yaratan diğer komutlardan geçen kısıtlamalar ve kırpılmış çoklu çizgilerdeki kısıtlamalar | Yeniden kısıtlayın (AUTOCONSTRAIN yardımcı olur). {{cmd:MIRROR}} ve çizgilerin, yayların ve dairelerin {{cmd:TRIM}} işlemi kısıtlamaları korur. |
| CadCraft'ta tasarım tabloları (yapılandırmalar) | Parametreleri panelde değiştirin. |
| SolidWorks ile test edilmiş bir gidiş-dönüş | Makronun oluşturduğu eskizi güvenmeden önce kontrol edin. |

## 3B

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Pahlar, kırmalar, kabuklar ve loftlar; yükselen bir yolda süpürme (3B yollar) | Yaylarla dış hatları ekstrüde edin, yüzeyleri itip çekin, düz yollar boyunca döndürün ve süpürün. |
| Yukarıdan farklı bir yönde ekstrüzyon | Şekli zemin üzerine çizin ve yukarı ya da aşağı ekstrüde edin (isterseniz eğimle ya da bir yol boyunca); sonra katıyı döndürün. |
| 2B nesnelerin yüksekliği ve kalınlığı | Çizim 3B sekmede zeminde (yükseklik 0) durur. |
| Diğer programlardan katıları, bölgeleri ve gövdeleri düzenleme; bunların bloklar içinde gösterilmesi; yüzeylerinin süpürülmüş, loftlanmış ya da diğer serbest biçimli yüzeylerdeki hâli; çokyüzlü ve çokgen örgüler | Model uzayındaki katılar 3B sekmede oldukları gibi gösterilir ve DWG'ye değiştirilmeden geri kaydedilir; çizilmeyenler 3B sekme açıldığında listelenir. Örgüleri model uzayında 3B yüzler olarak isteyin. Bkz. [Diğer programlardan katılar](topic:3d-solids#solids-from-other-programs). |
| Katıların kopyalanması ve yapıştırılması | 3B sekmede {{cmd:COPY}} kullanın. Pano yalnızca 2B nesneleri tutar. |
| Kesitler, katılardaki sonraki değişikliklere uyan görünümler ve çizilmiş sayfalarda gölgeli katılar | {{cmd:VIEWBASE}} düz görünümler yerleştirir (bir anlık görüntü); katıları değiştirdikten sonra yeniden çalıştırın. |
| Malzemeler, dokular ve ışıklandırma ayarları | Görsel stiller: gölgeli, kenarlar, gizli çizgi, tel kafes, X-ışını. |
| Sayfalarda, sayfa görünüm pencerelerinde ve 3B sekmede çizilen harita katmanları; çizimle birlikte kaydedilmiş dosyalardaki resimler; bir çizimin DWG 2000–2007 ve DXF R12 için yazılan konumu | Harita katmanları ekranda model uzayının altında görünür; sistem ve katman listesi çizimle birlikte kaydedilir. Bkz. [Çizimin altındaki harita katmanları](topic:map-layers). |
| 6 milyon noktadan ya da 512 MB'tan büyük E57 taramaları, tarayıcı üreticilerinin kendi dosyaları (RCP, RCS, FLS, LGS, TZF, ZFS), çizimle birlikte kaydedilen ya da çizilen bir nokta bulutu, 3B sekmede bir bulutta yakalama, Model sekmesinde dik (kesit) dilimler | Büyük ya da üreticiye ait taramaları LAS ya da LAZ olarak dışa aktarın ([Nokta bulutu biçimleri](topic:point-cloud-formats)); bulutu çizimi her açtığınızda ekleyin; Model sekmesinde bir plan diliminden izleyin: bkz. [Nokta bulutu üzerinde yapılmış çizgileri izleyin](topic:point-clouds). |
| Taramaları kaydetme: taramada hedefleri (küreler, dama tahtaları) kendiliğinden bulma, tüm taramaları birlikte çözme (demet ayarlaması), ölçek, bir modele karşı kaydetme | Eşleşen noktaları seçin ya da hedef koordinatlarını yazın, sonra her taramayı tek tek ICP ile iyileştirin: bkz. [Birçok taramayı tek birine kaydedin](topic:register-scans) |

## Rutinler ve özelleştirme

| Henüz yapılmadı | Bunun yerine, bugün |
|---|---|
| Derlenmiş ya da korumalı LISP (.fas, .vlx), yerel programlar (.arx, .crx, .dbx) ve VBA (.dvb) | Bir rutinin .lsp kaynağını {{cmd:APPLOAD}} ile yükleyin. |
| LISP'in `grread`, reaktörler (`vlr-…`), eğri işlevleri (`vlax-curve-…`), sözlükler ve genişletilmiş veri, Express Tools'un `acet-…` işlevleri | Dilin geri kalanı çalışır: bkz. [LISP rutinlerini çalıştırın](topic:run-lisp). Bir rutin eksik bir işleve ulaştığında komut satırı bu işlevin adını söyler. |
| Bir rutinin iletişim kutusundaki resimler ve slaytlar | Boş çerçeveler olarak görünürler; iletişim kutusunun geri kalanı çalışır. |
| CraftScript (.craft), Lua ve Python CadCraft'ta | PartCraft'ın Betik çalışma alanında çalıştırın. |
| Şerit menü stillerinin içindeki katman, renk ve çizgi tipi listeleri | {{ui:Layers}} panelini ve {{ui:Properties}} kullanın. |
| Başlangıç Paketi ve bilgisayarınızda tutulan ya da eşitlenen takma adlar | Bu tarayıcıda tutulur; masaüstü uygulaması ve bulut hizmeti bunları sizin için tutacaktır. Studio'da `acad.lsp` ve `acaddoc.lsp`, seçtiğiniz bir destek klasöründen okunur (Uygulamaları yükle). |

## Yardım

Yardım bu sürümü anlatır. Bir şey eklendiğinde bu sayfadan çıkar ve adım adım rehberlere taşınır.
