---
title: 0.9'daki yenilikler
summary: Sınırını izleyen taralamalar, katman grupları, üst üste katlar, kapı ve pencereli 2B akıllı duvarlar, metin stilleri ve biçimlendirilmiş bir metin düzenleyicisi, yüzen bir komut satırı, ızgara yakalama, bir yayı çizmenin on yolu ve Belgeler paneli.
keywords: yenilikler, 0.9, sürüm notları, değişiklik günlüğü, taralama, ilişkisel taralama, hatchedit, pat dosyası, desen dosyası, katman grupları, laygroup, katlar, üst üste katlar, floorlayers, akıllı duvarlar, duvar, kapı, pencere, duvar araçları, metin stili, stil, mtext düzenleyici, paragraf metni, biçimlendirme, yüzen komut satırı, komut satırı, üst alan, kompakt, ızgaraya yakalama, ızgara yakalama, f9, yay, belgeler paneli, çıkış, İngiliz çelik boyutları, draw.io, Tay metni, dxf r12, yenilikler, what's new, sürüm notları, değişiklik günlüğü, değişiklikler, 0.8, 0.8.1, sürüm, yeni özellikler, otomatik tamamlama, hayalet, tab, sketchfix, photosketch, autosheet, detaylar, gridmove, autodim, etiketler, redline, birleştirme, git, fossil, erişim, görmeden çizim, ekran okuyucu, sınırlar, yön açıları, aunits, shx, diyagram, ole, geçmiş, karşılaştır, sözlerle, özellikler, fit ve inç, uzatma, diller, giriş aygıtları, sorunlar, canlı, asistanlar
from: 8b6dea0b
---

Bu, 0.8.1 ile karşılaştırıldığında CadCraft 0.9'da neyin değiştiğidir. CadCraft, CadCraft Studio 0.9'un ve sekiz uygulamasının 2B ve 3B çizim uygulamasıdır. 0.9 plan çizimini tamamlar, metin stilleri ve gerçek bir metin düzenleyici ekler ve ekranda size daha fazla alan verir.

## Yeni

### Plan çizimi

- **Sınırını izleyen taralamalar.** {{cmd:HATCH}}, taralamayı sınırladığı şeye bağlar. Sınırı taşıyın, döndürün veya ölçekleyin; taralama ve deseni de onu izler. Sınırı yeniden biçimlendirirseniz taralama yeniden hesaplanır. {{cmd:HATCHEDIT}} (`HE`) sonradan bir taralamayı değiştirir ve bağlantıyı kurar ya da sonlandırır. Bkz. [Taralama ve dolgu alanları](topic:hatch).
- **Taralama desen dosyaları.** {{cmd:HATCH}} sorusunda `İç noktayı belirtin` istemine `F` yazın (Desen dosyası) ve bir `.pat` dosyası seçin. Yalnızca olağan biçimde yazılmış dosyalar denenmiştir.
- **Katman grupları.** {{ui:Katmanlar}} panelinde, {{ui:Araçlar}} altında: {{ui:Yeni grup}}, {{ui:Hazır grupları ekle}}, {{ui:Ada göre grupla}} ve {{ui:Katman bul}}; ya da {{cmd:LAYGROUP}} (`LG`) yazın. Bkz. [Katmanlarla bir çizimi düzenleyin](topic:layers#group-layers).
- **Üst üste katlar.** {{cmd:FLOORS}} (`FLR`) ya da {{ui:Görünüm}} grubundaki {{ui:Daha fazla}} menüsünde {{ui:Katlar…}}. Bir sayfadaki görünüm penceresi, Özellikler içindeki {{ui:Gösterilen kat}} ile tek bir katı gösterebilir. {{cmd:FLOORLAYERS}}, başkasına gidecek bir dosya için katları katmanlara dönüştürür. Bkz. [Bir çizimde katları üst üste yerleştirin](topic:floors).
- **2B akıllı duvarlar, kapılar ve pencereler.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ve {{cmd:DELOPENING}}. Köşeler, T birleşimleri ve kesişimler sizin için hesaplanır. Duvarlar nasıl birleştiklerinin kaydını tutar; Özellikler'e başlangıçta birleşime izin verme, sonda birleşime izin verme, bir Konum satırı ve düzenlenebilir bir Uzunluk eklenir. Bkz. [2B duvarları, kapıları ve pencereleri çizin](topic:walls-2d).
- **Plan duvarlarında duvar aracı.** {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ve diğerlerini yazın. Henüz araç çubuğu düğmeleri yoktur. Bkz. [2B duvarlar için duvar şekilleri, kesimleri, ofsetleri ve kilitleri](topic:wall-tools-2d).

### Metin

- **Metin stilleri.** {{cmd:STYLE}} (`ST`) ya da {{ui:Çiz}} araç çubuğundaki {{ui:Metin stili}}: yazı tipi, yükseklik, genişlik oranı ve eğimle adlandırılmış stiller. Bkz. [Metin stilleriyle metnin yazı tipini ve boyutunu ayarlayın](topic:text-styles).
- **Biçimlendirilmiş paragraf metni düzenleyicisi.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ya da metne çift tıklama; yazı tipi, boyut, kalın, italik, altı çizili, üstü çizili, renk, hizalama ve derece, artı-eksi ve çap işaretleriyle bir kutu açar; ayrıca {{ui:Tamam}} ve {{ui:İptal}} vardır. Bkz. [Paragraf metnini biçimlendirin](topic:format-paragraph-text).
- **draw.io XML'inden diyagram.** {{cmd:DIAGRAM}} (`T2D`) yapıştırılan draw.io XML'ini de okur. Bkz. [Metinden bir diyagram çizin](topic:text-to-diagram).
- **PDF çıktısında Tay metni.** Daha önce soru işareti olarak yazdırılıyordu.

### Daha fazla alan ve çizim yardımcıları

- **Yüzen, daha ince komut satırı ve kompakt üst alan.** Yüzdürmek için komut satırının tutamacını sürükleyin, daha az satır için üst kenarını sürükleyin; {{key:F2}} geçmişi açar. {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Komut satırı}} ve üst alan seçenekleri aynı ayarlara sahiptir. Bkz. [Ayarlar](topic:settings#command-line).
- **Nesne yakalama menüsü.** Durum çubuğundaki {{ui:Yakala}} öğesine sağ tıklayın ya da {{cmd:OSNAP}} yazın.
- **Izgaraya yakalama.** Durum çubuğundaki {{ui:Izgara yakalama}} düğmesi ya da {{key:F9}}: bir nesne yakalaması noktayı almadığında, seçilen noktalar en yakın ızgara noktasına gider.
- **Yayı on yolla çizme ve Devam.** {{ui:Çiz}} araç çubuğundaki {{ui:Yay}} ya da {{cmd:ARC}}: 3 noktalı, Başlangıç/Merkez/Bitiş ailesi ve Merkez/Başlangıç/Bitiş ailesi; ayrıca son çizgiden, yaydan ya da çoklu çizgiden Devam (başlangıç noktasında {{key:Enter}}'a basın).
- **Belgeler paneli.** {{cmd:DOCUMENTS}} (`DOCS`) ya da {{ui:Görünüm}} grubunun {{ui:Daha fazla}} menüsündeki {{ui:Belgeler…}}: bir proje klasöründeki her çizim için revizyon, durum ve çıkış. Ortalanmış bir iletişim kutusu olarak açılır. Bkz. [Belgeler](topic:documents).

### Dosyalar

- **İngiliz çelik ölçüleri.** Standart panelinde 976 kesit, çizimlerde yazıldığı gibi yazılır (örneğin `305x165x40 UB`).
- **Güney Afrika paketleri** (çizim uygulaması ve yapı yönetmelikleri) Yapı yönetmelikleri eklentisinin paketleri olarak. Sayılar doğrulanmamıştır.
- **CadCraft için eklentiler,** istek üzerine eklenir ve varsayılan olarak kapalıdır: iç aydınlatma tasarımı, yonga tasarımı (HDL'den yerleşime), router ile oyma, devre simülasyonu, makaralı zincir dişlileri ve Yapı yönetmelikleri ülke paketleri.

## Düzeltilenler

- Bir taralamayı taşımak, döndürmek veya ölçeklemek deseni geride bırakıyordu.
- {{cmd:GRIDMOVE}}, yalnızca ızgara çizgisinde başlayan bir plan duvarının tamamını taşıyordu. Artık bir duvar uçlarına göre değerlendirilir.
- Sınırlar kapalıyken bile ızgara yalnızca çizim sınırlarının içinde gösteriliyordu.
- Yan paneldeki blok listesi kaydırılabiliyor; blok olmayan bir ad için bununla başlayan bloklar listelenir ("Bunu mu demek istediniz?").
- AutoCAD'in reddettiği DXF R12 dosyaları ("Unknown group 1001 for table") artık burada açılıyor.
- Çok büyük dosyalar (yaklaşık 70.000 öğe ve üzeri) "Maximum call stack size exceeded" hatasıyla açılamıyordu.
- Yüksek bakım sürümüne sahip AutoCAD 2018 ve sonrası DWG dosyaları "bad BITLONG code 11" hatasıyla açılamıyordu.
- Paragraf metni kutusunda, seçili bir kısım için yazılan yeni boyut seçimi korur.

## Her uygulamada

Her denetim için ipucu içeren Bootstrap araç ipuçları, kapatılabilir bir başlangıç ipucu, sığmadığında kaydırılan sekme şeritleri ve açık çizimi izleyen bir tarayıcı sekmesi başlığı (`<drawing> - CadCraft | CadCraft`). {{ui:Ayarlar}} › {{ui:Düzen}} artık iki satırlı seçeneklerden oluşan bir açılır listedir. {{ui:Ayarlar}} içindeki dil listesi 0.8'e göre daha uzundur. Canlı ortak düzenleme, Kütüphane koleksiyonları ve ağırlık ile sıcaklık birimleri Studio notlarında anlatılmıştır.

## Dürüst sınırlar

- Paragraf metninde madde işaretli veya numaralı liste, sekme cetveli ya da iki yana yaslama yoktur. Çıktı alınan PDF'lerde metin Helvetica ile yazılır.
- Plan duvarları düzdür; bu yüzden bir yay kısa duvarlar olarak çizilir. Duvar aracının topluluk tarafından elle denetimi beklemededir.
- Katman grupları AutoCAD'in kendi biçiminde yazılmaz; bu yüzden AutoCAD düz bir liste gösterir. {{cmd:FLOORLAYERS}} çalıştırmadığınız sürece diğer programlar tüm katları birlikte gösterir.
- Belgeler paneli gerçek bir paylaşımda iki kişi tarafından denenmedi. Router ile oyma hiçbir gerçek makinede çalıştırılmadı. Aydınlatma tahmini başka bir programla değil, bir foton izleme ile denetlendi. Mühendislik eklentileri bir mühendisin incelemesinin yerini tutmaz; denetim yardımcılarıdır.
- İngilizce dışındaki diller makine taslağıdır ve yeni sözcüklerin bazıları yalnızca İngilizcedir.

## Daha önce: 0.8 ve 0.8.1

Bu, 0.7'ye göre CadCraft 0.8 ve 0.8.1'de neyin değiştiğidir. 0.8 (1 Kasım 2026) çizimlerinizden çalışan, bilgisayarınızdaki kurallarla ve herhangi bir model olmadan çalışan çizim yardımcıları ekler; 0.8.1 (2 Kasım 2026) ondan sonra bildirilen hataları düzeltir.

### Yeni

**Düşündüğünüzü tamamlayan çizim**

- **Hayalet, sıradakini gösterir.** Hiçbir komut çalışmazken, gri kesikli bir hayalet, çiziminizin kendi desenlerinin sıradakini ne olduğunu gösterir: aynı aralıkta bir sonraki dikme, merdivenin bir sonraki basamağı, bir odanın eksik duvarı. Bunu tek bir geri alma adımı olarak çizmek için {{key:Tab}}'a, kapatmak için {{key:Esc}}'e basın. Yalnızca en yeni nesnelere bakar; bu yüzden büyük bir çizimde de akıcı kalır. {{ui:Ayarlar}} › {{ui:CadCraft}} üzerinden ya da {{cmd:AUTOCOMPLETE}} `Off` ile kapatın.
- **Çizgi çizerken sonraki nokta.** {{cmd:LINE}} ya da {{cmd:PLINE}} sırasında hayalet sonraki noktadır: bir merdivenin sonraki basamağı, bir dikdörtgenin dördüncü köşesi ya da onu kapatan nokta. İmleci yakınına getirin ve oraya tıklamış gibi {{key:Tab}}'a basın.
- **Kalem eskizleri kesin geometriye dönüşür.** {{cmd:SKETCHFIX}}: kalem, fare ya da parmakla kaba çizgiler çizin; her biri temiz bir çizgi, daire, yay, dikdörtgen ya da çoklu çizgiye dönüşür ve zaten çizili olanlara yakalanır. Bkz. [Kalemle eskiz çizin ve kesin geometri elde edin](topic:sketch-with-a-pen).
- **Bir eskizin fotoğrafı çizime dönüşür.** {{cmd:PHOTOSKETCH}} (`PSK`) bir fotoğraftaki kâğıdı bulur, perspektifi düzeltir, verdiğiniz kâğıt boyutunu ve ölçeği uygular ve kalem çizgilerini her kalem rengi için bir katmana izler. Yazılar izlenmez.
- **Kurallara göre ölçülendirin.** {{cmd:AUTODIM}} (`ADIM`) seçtiğiniz kenarlar boyunca ölçülendirme zincirleri, genel boyut, açıklık genişlikleri, delik çapları ve `Grid` ile ızgara aralığı oluşturur. Zaten var olan bir ölçülendirmeyi asla tekrarlamaz.
- **Bir ızgara çizgisini taşıyın, ilgili öğeler izler.** {{cmd:GRIDMOVE}} (`GM`): ızgara çizgisinde biten duvarlar onunla birlikte uzar, ona paralel duvarlar, kolonlar, balonu ve etiketi taşınır; üzerindeki ölçülendirmeler yeni aralığı ölçer. Tek bir geri alma adımı.

**Sayfalar, detaylar ve etiketler**

- **Kendini düzenleyen sayfalar.** {{cmd:AUTOSHEET}}, adlandırılmış görünümlerinizi (ya da modelin ayrı parçalarını) alır, bir kâğıt boyutu ile standart bir ölçek seçer ve görünümleri bir künye ve ad-ölçek başlığı ile yeni sayfalara yerleştirir. Her şey düzenlenebilir kalır. Bkz. [Sayfaları benim yerime düzenleyin](topic:lay-out-sheets-for-me).
- **Firmanızın detayları, çizerken önerilir.** {{cmd:DETAILS}} (`DET`) kendi detay bloklarınızı tutar. Seçtiğiniz şey, katmanlarındaki, blok adlarındaki ve notlarındaki sözcüklerle birini eşleştirdiğinde durum çubuğu bunu bildirir; onu seçin ve yerleştirin. {{cmd:DETAILS}} › Paylaş, listenizi Belgeler klasörünüze koyar ve ekibinizin eklediklerini getirir. Ayarlar önerileri kapatır.
- **Bloklarda etiketler.** {{cmd:TAGS}} bir etiket tanımlar (türü, alabileceği değerler, uygulanacağı bloklar), bunu seçtiğiniz blok başvurularına atar ve CSV olarak kaydedebileceğiniz bir liste olarak sıralar. Tanımlar DWG içinde tutulur. Bkz. [Etiketler](topic:tags).
- **Çizim sınırları.** {{cmd:LIMITS}} çizim için bir dikdörtgen belirler: ızgara onu doldurur ve Tümünü yakınlaştır onu gösterir. Sınırlar bir çerçeve olarak görünür ve kâğıt sınırlarıyla birlikte DWG ve DXF içinde kaydedilir. Bkz. [Çizim sınırlarını ayarlayın](topic:drawing-limits).

**Başka kişilerle ve başka programlarla çalışmak**

- **İşaretlemeyi revizyona çevirin.** {{cmd:REDLINE}}, MarkupCraft'ın yazdığı paketi okur ve her değişikliği listeler. Her birini bir notla kabul edin ya da reddedin; kabul edilenler tek bir geri alma adımında bir revizyon bulutu ve bir revizyon günlüğü alır ve MarkupCraft'taki işaretlemeleri kapatan yanıt dosyasını kaydedersiniz. Bkz. [Bir işaretlemeyi revizyona çevirin](topic:redline-to-revision).
- **git ve Fossil'in birleştirebildiği çizimler.** {{ui:Ayarlar}} › {{ui:CadCraft}} içinde {{ui:Birleştirmeye uygun dosyalar}} açıkken, her nesne asla değişmeyen bir anahtar alır (dosyalar yaklaşık yüzde 10 büyür). `cadcraft merge base ours theirs`, iki kişinin bir DWG ya da DXF üzerindeki düzenlemelerini nesne nesne birleştirir ve yalnızca iki kişinin aynı şeyi değiştirdiği yerleri bildirir. Bkz. [Bir çizimde iki kişinin düzenlemelerini birleştirin](topic:merge-drawings).
- **Neyin değiştiği, sözcüklerle.** Geçmiş içinde Karşılaştır, neyin değiştiğini, yerlerin ne kadar büyük olduğunu, neyin eklendiğini, kaldırıldığını ya da değiştirildiğini ve düzenlenen metni düz bir liste olarak verir. Bkz. [Neyin değiştiğini sözcüklerle anlatın](topic:changes-in-words).
- **Yön açıları ve açılar.** Bir yönü, bir ölçmencinin yön açısı gibi N45°23'30"E olarak ya da derece, dakika ve saniye ile, bir açının istendiği her yerde yazın; AUNITS açıların nasıl gösterileceğini belirler. Bkz. [Yön açılarını ve açıları yazın ve gösterin](topic:bearings-and-angles).
- **Kendi SHX yazı tipleriniz.** CadCraft'a bir SHX yazı tipi klasörü verin; onları adlandıran metin stilleri ekranda ve çıktılarda bunlarla çizilir. Bkz. [Metinlerinizi kendi SHX yazı tiplerinizle çizin](topic:shx-fonts).
- **Metinden diyagram.** {{cmd:DIAGRAM}}, bir Mermaid akış şemasını, bir PlantUML bileşen diyagramını, D2'yi ya da bir kaynaktan-hedefe listesini okur ve düzenleyebileceğiniz bloklar ve bağlayıcılar çizer. Bkz. [Metinden bir diyagram çizin](topic:text-to-diagram).
- **Bir DWG içindeki OLE nesneleri.** {{cmd:OLELIST}}, bir DWG'nin CadCraft'ın kendi başına yerleştiremediği OLE nesnelerini listeler ve bir resmin bir kopyasını istediğiniz yere yerleştirir. Bkz. [Resimler](topic:pictures#objects-from-other-programs-ole).
- **Hesaplamalarınız çizimle birlikte kalır.** Hesap sayfaları ve tasarım gerekçeleri, sınıf tablosuyla birlikte DWG içinde tutulur.

**Görmeden çizim**

- {{ui:Ayarlar}} içinde {{ui:Görmeden çizim}} özelliğini açın (ya da {{cmd:ACCESS}} yazıp `On` yanıtını verin). CadCraft her komutu ve sonucu ekran okuyucunuz aracılığıyla seslendirir; çizimi ve imlecin yakınındakileri anlatır; imleci taşımanıza ve noktaları klavyeyle seçmenize izin verir; her yakalama ve tutamaç için bir ses çalar. Tarayıcınız bilgisayarınızda konuşmayı tanıyabiliyorsa komutlar sesle verilebilir. Bkz. [Görmeden çizim yapın](topic:draft-without-sight).

**Her uygulamada**

- **Diller.** 54 dil; on tanesi yenidir (Litvanca, Letonca, Boşnakça, Marathi, Telugu, Arnavutça, Afrikaanca, Filipince, Svahili, Özbekçe). İngilizce dışındaki diller, yerel bir konuşmacı okuyana kadar makine taslağıdır.
- **Giriş aygıtları.** Dokunmatik yüzey, kalem, 3B fare, oyun denetleyicisi ve MIDI denetimleri.
- **Araç çubuğu satırları ve özellik tablosu.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Araç çubuğu satırları}} diğer uygulamalarda Sarmala, 2 satır ya da 1 satır sunar. CadCraft kendi ayarını {{ui:Ayarlar}} › {{ui:CadCraft}} içinde tutar (bkz. [Araç çubuğu satırları](topic:settings#toolbar-rows)). Ortak özellik tablosu, CadCraft'ta değil, diğer üç uygulamadadır.
- **Sorunlar, Canlı ve eklentiler.** Her uygulamada uyarı veren ortak bir Sorunlar paneli, CadCraft Studio içinde kimin nerede olduğunu gösteren bir Canlı görünüm (bkz. [Bir çizimde birlikte çalışın](topic:work-live)) ve bir eklenti listesi.
- **Yapay zekânızı bağlayın.** CadCraft Studio'dan sekiz uygulamanın hepsine tek bağlantı; uygulama başına salt okunur, öneri veya düzenleme düzeyi ve asistanın ne yaptığının sade bir günlüğü. CadCraft'ın kendi yapay zekâsı yoktur; her uygulamadaki Sor, bağladığınız yapay zekâyı kullanır.

### 0.8.1'de düzeltilenler

- **Feet ve inç çizimlerinde Özellikler 12'-6" yerine 150 gösteriyordu.** Uygulamanın kendi okuduğu alanlar metinlerini yeniden korur.
- **Sınıflar bölümü yanlış türde okunan DWG dosyaları** (GitHub cadcraft#5) artık doğru açılır.
- **İmleç artık açılır pencerelerin arkasında görünmez.**
- **Studio ve paketlenmiş sürümler çalışma anında dil değiştirebilir.** Daha önce yalnızca İngilizceydi. Her platformda henüz test edilmedi: dil değişmezse bize bildirin.
- **Tabletler dikey konumdayken** boş ızgara yüksekliğini tuvale verir ve sayfa modu 760 px ve altında başlar.
- **Kesişen pencereyle STRETCH ve LIMITS**, Studio 0.8.0'da bildirilmişti; 0.8 web sürümünde zaten doğruydu. Bildiren kişinin yükleyicisi daha eskiydi. Studio 0.8.1 bunları içerir.

### Bu sürümde henüz yok

- **0.8 ve 0.8.1 kod imzalı değildir.** Windows uyarabilir (önce {{ui:Ek bilgi}}, sonra {{ui:Yine de çalıştır}} seçin); Mac'te CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. Mağaza sürümleri beklemededir ve iPad ile iPhone sürümü 0.8.1 için yeniden derlenmedi.
- **Kalem eskizleri ve eskiz fotoğrafları** yalnızca uydurma fotoğraflarla ve fareyle denendi; gerçek bir kalem, dokunmatik ekran ya da kâğıt üzerinde el çizimiyle henüz denenmedi.
- **Görmeden çizim** otomatik kontrollerle test edildi; henüz bir ekran okuyucuyla ya da görme engelli bir test kullanıcısıyla değil.
- **Detayları paylaşma** iki kişilik bir kontrolden geçmedi; Belgeler klasörü olarak bir Team Cloud Plan klasörü henüz yapılmadı.
- **Birleştirme**, CadCraft'ın DWG ve DXF dosyaları için çalışır; diğer uygulamaların dosyaları için aynısı henüz yapılmadı.
- **Pencereler arası geri alma:** CadCraft her tamamlanan adımı bildirir, ancak Studio'nun henüz tüm uygulamalar için tek bir Geri Al'ı yoktur; her uygulama kendi adımlarını geri alır.
- **Bir DWG'nin OLE nesneleri** korunur ama yerinde çizilmez.
- **Başka programlardan plot stili tabloları (CTB dosyaları)** okuma özelliği yapılmıştır, ancak başka bir programdan gelen bir dosyayla denetlenmemiştir.
- **Yapay zekânızı bağlayın:** Studio içinde tek tıkla bağlantı, tarayıcı yapay zekâsı için barındırılan bağlayıcı, Studio içinde kendi API anahtarınız ve yayınlanan MCP paketi bu sürümde vaat edilmez.

Bundan önceki sürüm için bkz. [0.7'deki yenilikler](topic:whats-new-0-7).
