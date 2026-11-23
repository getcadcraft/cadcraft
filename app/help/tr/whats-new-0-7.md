---
title: 0.7'deki yenilikler (önceki)
summary: PDF altlıkları ve PDF içe aktarma, otomatik izlemeli taranmış çizimler, SPLINE, SPLINEDIT ve PEDIT ile gerçek spline'lar, bir boyut stili yöneticisi, biçimini koruyan metin, WBLOCK ve kendi ölçekleriniz, diğer programlardan 3B katılar, taramaları hizalama, bir Lazer paneli, USD dışa aktarma, CadCraft Studio'da Geçmiş ve yazdırma, yönlendirmeli ilk çizim, araç çubuğu istediğiniz kenarda ya da daha az satırda ve yapay zekâ asistanları için daha fazlası.
keywords: 0.7'deki yenilikler, önceki sürüm, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, pdf, pdfattach, pdfimport, altlık, tarama, scanattach, scantrace, izleme, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, biçimlendirme, wblock, scalelistedit, ölçek listesi, acis, 3B katılar, registerscans, taramaları hizala, icp, e57, las, lazer, grbl, g-code, usd, usdout, geçmiş, sürümler, karşılaştır, yazdır, yazıcı, png, svg, çıktı stili, çizgi tipi, tur, hızlı başvuru, komut haritası, araç çubuğu konumu, araç çubuğu satırları, toolbardock, regen, regenall, izleme yüzeyi, kaydırma, kod sayfası, kiril, korece, çince, japonca, elektrik, rcd, p&id, pid, acad.lsp, acaddoc.lsp, destek klasörü, asistanlar, mcp, birimler, portekizce
from: d9a8ea79
---

CadCraft 0.7'deki değişiklikler, 0.6 ile karşılaştırıldığında. Bunların çoğu Discord'da istendi. Liste alana göre gruplanmıştır; en önemliler başta.

## Yeni

### PDF'ler ve taranmış çizimler

- **Çizimin altına bir PDF sayfası koyun.** {{cmd:PDFATTACH}} (`PDFATT`) bir sayfayı gerçek boyutunda ya da yazacağınız bir ölçekte yerleştirir. Çizgilerine yakalayın, soluklaştırın, tek renge çevirin ({{cmd:PDFADJUST}}), kırpın ({{cmd:PDFCLIP}}) ve PDF'in kendi katmanlarını değiştirin ({{cmd:PDFLAYERS}}). Çizgi, dolgu ve metin olarak çıktı alınır; bir DWG ya da DXF 2000 ise onu dosyaya bağlantı olarak tutar. {{ui:Aç}} ile bir PDF açıldığında, onu eklemek mi içe aktarmak mı istediğiniz sorulur. Bkz. [PDF altlıkları ve PDF içe aktarma](topic:pdf-underlay).
- **Bir PDF sayfasını çizim nesnelerine çevirin.** {{cmd:PDFIMPORT}} (`PDFIM`), PDF'in adından adlandırılmış katmanlarda çizgiler, çoklu çizgiler, daireler, yaylar, düz taralamalar ve metin oluşturur; gerçek boyutta, yazdığınız bir ölçekte ya da iki noktayla gerçek bir mesafeden ölçeklenmiş olarak, tek bir geri alma adımında. Bkz. [Bir sayfayı içe aktarın](topic:pdf-underlay#import-a-page).
- **Taranmış çizimler.** {{cmd:SCANATTACH}}, bir PNG, JPEG ya da TIFF (tek sayfa ya da hepsi) ya da bir resim olan bir PDF sayfasını ekler. Sonra iki noktadan ölçeklendirin ({{cmd:SCANSCALE}}), hizalayın ({{cmd:SCANALIGN}}), kendi uzun çizgilerinden dikleştirin ({{cmd:SCANDESKEW}}), siyah beyaz yapın ve lekeleri temizleyin ({{cmd:SCANCLEAN}}), kırpın ve bir kısmını silin. Her adım tek bir geri alma adımıdır ve özgün dosya saklanır. Bkz. [Taranmış çizimler ve izleme](topic:scanned-drawings).
- **Bir taramayı çizgi ve yaylara izleyin.** {{cmd:SCANTRACE}}, taramanın çizgilerini, sizin belirlediğiniz bir toleransla, yeni bir SCAN-TRACE katmanında çizgi ve yay olarak çizer; metin ve taralamaları olduğu gibi bırakır. Rapor neyi oluşturduğunu ve neyi bıraktığını söyler; sonucun doğru olduğu iddiası değildir: sayfayla karşılaştırarak denetleyin. {{cmd:RASTERSNAP}}, nesne yakalamanın taramanın uçlarını, köşelerini ve kesişimlerini bulmasını sağlar. Hiçbir yere bir şey gönderilmez ve eğitilmiş bir model kullanılmaz. Bkz. [İzleme](topic:scanned-drawings#the-trace).

### Çizim ve düzenleme

- **Gerçek spline'lar.** {{cmd:SPLINE}} (`SPL`), noktalardan geçen ya da kontrol noktalarından (derece 1 ile 5 arası), uç teğetleriyle bir eğri çizer; {{cmd:SPLINEDIT}} (`SPE`) uyum ya da kontrol noktalarını taşır, ekler ve siler, ağırlıklarını ayarlar, açar, kapatır, ters çevirir ya da bir spline'ı çoklu çizgiye dönüştürür. DWG ve DXF dosyalarındaki spline'lar spline olarak açılır; DWG ve DXF 2000 ise onları spline olarak kaydeder. Bkz. [Spline'lar ve çoklu çizgiler](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) çoklu çizgileri kapatır ve açar, onlara çizgi ve yay ekler, tek bir genişlik belirler, köşe noktalarından geçen bir eğri ya da onlar boyunca bir spline uydurur ve Decurve ile geri alır, ters çevirir ve birden çok çoklu çizgiyi aynı anda düzenler. Bkz. [Bir çoklu çizgiyi düzenleyin](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`), bir bloğu, bazı nesneleri ya da tüm çizimi yalnızca kullandıkları katmanları, stilleri ve blokları içeren yeni bir DWG ya da DXF dosyasına yazar. Bkz. [Bir bloğu ya da nesneleri kendi dosyasına yazın](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ve REGENALL.** {{cmd:REGEN}} (`RE`) bulunduğunuz sekmeyi çizimden yeniden çizer; {{cmd:REGENALL}} (`REA`) her sekmeyi, bölmeyi ve açık çizimi. Bkz. [REGEN ve REGENALL](topic:commands#regen-and-regenall).

### Metin ve ölçülendirme

- **Metin biçimini korur.** Diğer programlardan gelen paragraf metni, sözcük başına renklerini, kalın ve italik, altı çizili, üst üste yığılmış kesirleri ve yüksekliklerini korur: ekranda ve PDF'lerde çizilirler, sözcükleri düzenlediğinizde korunurlar ve geri kaydedilirler. Bkz. [Diğer programlardan gelen paragraf metnindeki biçimlendirme](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Bir ölçülendirme stili yöneticisi.** {{cmd:DIMSTYLE}} (`D`) adlandırılmış ölçülendirme stilleri oluşturur, değiştirir, karşılaştırır ve uygular; bir stili değiştirmek, onu kullanan her ölçülendirmeyi değiştirir. {{cmd:DIMEDIT}} (`DED`) metni eski hâline getirir, yeni metin yazar, metni çevirir ya da uzatma çizgilerini eğer; {{cmd:DIMTEDIT}} metni sola, sağa ya da ortaya taşır. Bkz. [Adlandırılmış ölçülendirme stilleri](topic:dimension-settings#named-dimension-styles).
- **Kendi ölçekleriniz.** {{cmd:SCALELISTEDIT}} (`SCALELIST`), görünüm penceresi ve çıktı ölçek listelerine 1:75 gibi ölçekler ekler; çizimde kaydedilirler (DWG ve DXF 2000) ve başka bir programdan gelen çizim kendi listesini getirir. Bkz. [Ölçekler](topic:units-papers-scales#scales).
- **Başka alfabelerdeki metin.** Kiril, Korece, Çince, Japonca ya da Vietnamca kod sayfalarıyla kaydedilmiş DXF dosyaları artık metinleriyle birlikte açılır; Çince, Japonca ve Korece metinler PDF'lerde yazdırılır (çıktı, gerektiğinde ilk kez daha büyük bir yazı tipi indirir). Bkz. [Yazı tipi](topic:text#font).

### Çıktı alma ve yazdırma

- **Çıktı stili tablolarında daha fazlası.** Her renk için bir tablo artık çizgi tipi, çizgi ucu ve çizgi birleşimi ile düz dolguları taralama çizgisi olarak yazdıran bir dolgu stili de ayarlayabilir; tablonun kendi çizgi kalınlığı listesi ve çizgi tipi ölçeği vardır. Bkz. [Çıktı stili tabloları](topic:plot-pdf#plot-style-tables).
- **Yazdırma ve PNG ile SVG dosyaları.** Çıktı al iletişim kutusunda {{ui:Yazdır…}}, {{ui:PNG indir}} (300 dpi) ve {{ui:SVG indir}} bulunur. CadCraft Studio'da bilgisayarın yazıcılarını, kâğıtlarını ve kopya sayısını listeler. Bkz. [Yazdır](topic:plot-pdf#print) ve [Resim ve SVG dosyaları](topic:plot-pdf#picture-and-svg-files).

### 3B ve nokta bulutları

- **Diğer programlardan 3B katılar.** Bir çizimin model uzayındaki katılar, bölgeler ve gövdeler 3B sekmesinde yalnızca okunur olarak gösterilir ve DWG olarak kaydedildiğinde değişmeden geri yazılır. CadCraft'ın henüz çizmediği yüzeylerdeki yüzler tahmin edilmez, listelenir. Bkz. [Diğer programlardan katılar](topic:3d-solids#solids-from-other-programs).
- **Birden çok taramayı hizalayın.** {{cmd:REGISTERSCANS}} (`REGSCAN`), farklı konumlardan alınmış taramaları nokta çiftleriyle ya da yazılan hedef koordinatlarla tek bir çerçevede yerleştirir, ICP ile iyileştirir, hizalamayı küçük bir proje dosyası olarak kaydeder ve hizalanmış bulutu tek bir LAS ya da E57 dosyası olarak yazar. Bkz. [Birden çok taramayı tek bir yerde hizalayın](topic:register-scans).
- **USD dışa aktarma.** {{cmd:USDOUT}} ya da {{cmd:EXPORT3D}} › {{ui:USD}}, 3B sekmesindeki katıları `.usda`, `.usdc` ya da `.usdz` olarak yazar. Bkz. [3B modeli USD olarak dışa aktarın](topic:usd).
- **3B sekmesinde hesaplamalar.** 3B sekmesindeki araçların bir mesafe istediği yerde, komut satırındaki gibi bir hesaplama yazabilirsiniz. Bkz. [Yazılan bir değerde aritmetik](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Üretim

- **Bir çizimi lazere gönderin.** {{cmd:LASER}} ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Lazer…}}, çizimin üstünde bir panel açar: her katman kesilir, çizilir, çizgileri oyulur, şekilleri doldurulur, bir resmi oyulur ya da hiç gönderilmez; gücü, hızı ve geçişleriyle birlikte. Önizleme düzenlemelerinizi izler, {{ui:G-kodunu kaydet…}} GRBL lazer modu G-kodu yazar ve Chrome ya da Edge'de panel işi çerçeveleyebilir ve USB üzerinden gönderebilir. Ayarlar çizimde kaydedilir (DWG ve DXF). Bkz. [Bir çizimi lazere gönderin](topic:laser-cutting).
- **Elektrik eklentisinde bina tesisat sembolleri.** Veri, telefon ve TV prizleri, anahtarlı ve zamanlı şalterler, bir termostat, çıkış işareti, dedektörler, çağrı noktası ve sesli uyarıcı, bir fan, su ısıtıcı, ocak, EV şarj noktası, enerji sayacı ve alt pano ile RCD ve RCBO sembolleri. Bir devre bir RCD taşıyabilir, pano listesinde bir RCD sütunu vardır ve kontroller, 30 mA veya daha düşük bir RCD'si olmayan priz devrelerini belirtir. Bu bir planlama hatırlatıcısıdır, bir yönetmelik kontrolü değildir.
- **Bir P&ID eklentisi.** P&ID, süreç diyagramları çizer: bağlantı noktalı semboller, süreç ve sinyal çizgileri, etiketler, hat numaraları, hat, ekipman, enstrüman ve vana listeleri (CSV ya da bir çalışma kitabı) ve kontroller. CadCraft ile gelir; {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Eklentiler}} içinde açana kadar kapalıdır. Bu bir çizim yardımcısıdır, bir mühendislik onayı değildir ve sözcükleri şimdilik yalnızca İngilizce'dir.

### Başlarken ve ekran

- **Yönlendirmeli ilk çizim.** {{cmd:TOUR}} (ya da başlangıç kartındaki {{ui:Turu yap}}), gerçek çizimde altı adımda size yol gösterir: bir çizgi, bir daire, bir taşıma, bir kırpma, bir silme ve bir ölçülendirme. CadCraft içi boş açıldığında ilk kez kendiliğinden başlar. Bkz. [Yönlendirilmek ister misiniz?](topic:getting-started#prefer-to-be-guided)
- **Hızlı başvuru ve komut haritası.** [Hızlı başvuru](topic:cheat-sheet) günlük kullanılan 40 komutu tek bir sayfada, yazdırmak için bir PDF olarak da sunar; [komut haritası](topic:command-map) komutları kısa adlarıyla A'dan Z'ye listeler.
- **Araç çubuğu istediğiniz kenarda.** {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Araç çubuğu konumu}}: üst (önceki gibi), alt, sol ya da sağ; ya da {{cmd:TOOLBARDOCK}} yazın. Bkz. [Araç çubuğu konumu](topic:settings#toolbar-position).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Araç çubuğu satırları}}: sığacak şekilde kaydırma, 2 satır ya da 1 satır; CadCraft araç çubuğu ile Drafting classic ve Şerit stilleri için. {{key:Shift+Ctrl+F1}} bunlar arasında, {{key:Ctrl+F1}} düğmelerin gösterdikleri arasında geçiş yapar; {{cmd:TOOLBARROWS}} ve {{cmd:TOOLBAR}} bunları ayarlar. Başlangıç ipucunun bir kapatma düğmesi vardır. Bunu bir çekme isteği olarak gönderen GJoe2'ye teşekkürler. Bkz. [Araç çubuğu satırları](topic:settings#toolbar-rows).

### CadCraft Studio'da

- **Geçmiş.** {{cmd:HISTORY}} (`HIST`) ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Geçmiş…}}: bir çizimi açıp kaydettiğinizde Studio'nun tuttuğu kopyalar ve çizimi buluttan açtığınızda çizimin bulut sürümleri. Birini açın ya da geri yükleyin, ya da ikisini karşılaştırın; eklenen, silinen ve değişenler renkle gösterilir. Bkz. [Geçmiş](topic:history).
- **acad.lsp ve acaddoc.lsp.** {{cmd:APPLOAD}} içinde bir destek klasörü seçin: bu iki dosya CadCraft başladığında yüklenir (acaddoc.lsp her yeni çizim sekmesi için yeniden), ve `S::STARTUP` bunların ardından çalışır. Bkz. [Uygulamaları yükleyin](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Çıktı al iletişim kutusu kendi penceresinde.** Başlık çubuğundaki bir düğme, onu başka bir monitöre koyabileceğiniz bir pencereye taşır. Bkz. [Bir iletişim kutusunu taşıyın](common:arrange-panels#move-a-dialog).

### Yapay zekâ asistanları için

- **Seçtiğiniz klasörlerdeki dosyalar, adlarıyla.** CadCraft Studio'da bir asistan, dosyaları adlarıyla açabilir, kaydedebilir ve çıktısını alabilir; bir komuta istediği dosyayı verebilir (bir dosyadan INSERT, COUNT'un dışa aktarması, SAVEAS, PLOT); ancak bu yalnızca {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Asistanlar}} › {{ui:Asistanların kullanabileceği klasörler}} altına eklediğiniz klasörlerin içinde geçerlidir. Bkz. [Seçtiğiniz klasörlerdeki dosyaları kullanmasına izin verin](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Daha az çağrı.** Bir asistan tüm bir komut satırını tek seferde yazabilir, çağrıları arasında bir komutu açık tutabilir, nesneleri listelemeden türe ve katmana göre sayabilir ve bir bloğu öznitelik değerleriyle tek adımda yerleştirebilir.
- **Pencere olmadan.** `cadcraft` komut satırı SVG çıktıları yazar; birçok dosyayı tek seferde dönüştürür, çıktısını alır, denetler ya da tanımlar. MCP paketi henüz yayımlanmadı. Bkz. [CadCraft'ı açmadan dosyalarla çalışın](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Değişenler

- **İzleme yüzeyi kaydırır.** İzleme yüzeyinde iki parmağınızı hareket ettirin, 2D görünüm onları izler; sıkıştırma hareketi ve fare tekerleği yakınlaştırır. Bkz. [Fare, izleme yüzeyi ve dokunma](topic:mouse-trackpad-touch).
- **OLE nesneleri korunur.** Bir DXF'in gömülü nesneleri resimleri olarak ya da etiketli bir çerçeve olarak gösterilir ve DXF 2000 ile geri kaydedilir. Bir DWG'nin nesneleri, DWG olarak kaydettiğinizde korunur ve geri yazılır, ancak henüz gösterilmez. Önceden kaydetme sırasında kaybolurlardı. Bkz. [Diğer programlardan nesneler (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Yeni bir çizimin birimleri**, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde yıldızladığınız birimi izler.

## Düzeltilenler

- Boş açılan ya da bir görünüm penceresini kaybedip yerine tüm modeli gösteren düzenler artık gerçek görünüm pencereleriyle açılır. İçeriğine bağlantısı olmayan bir düzen korunur ve açılış raporu bunu söyler.
- Eski kod sayfalarındaki DXF dosyaları bozuk Kiril ve Korece metin gösteriyordu. Artık doğru okunuyorlar.
- Diğer programlardan gelen paragraf metni açıldığında biçimini kaybediyor ve düz olarak geri kaydediliyordu.

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}}, uzunluk, alan, hacim, açı ve eğim için birer liste içerir; birimlerin tanımlarının verdiği kesin boyutlarla (ABD anket fiti kendi başına bir birimdir). Hiç kullanmadığınız birimleri kapatırsanız birim listelerinden çıkarlar; birini yıldızlarsanız yeni işler o birimle başlar. Bir dosya her zaman kendi birimini korur. CadCraft'ta yıldız, bir çizimin taşıyabileceği bir birim olduğunda yeni çizimin birimini belirler; CadCraft'ın kendi {{ui:Birimler}} kutusu henüz anahtarları izlemez. Bir çizimin birimi olduğunda, yazdığınız bir uzunluk herhangi bir birimin işaretini taşıyabilir. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha yoğun düzen ve kendini toplayan paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Kompakt}} ekrana daha fazlasını sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: paneli yerleştirmek ya da yüzdürmek için sürükleyin, tek bir çerçevede sekme olarak paylaşmak için başka bir panelin çubuğuna bırakın, kenara kayması için sabitleyin ya da gizleyip kenardan geri getirin. Bkz. [Panelleri düzenleyin](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan sürükleyerek çizimin önünden çekin; bıraktığınız yere geri döner. Ortalamak için başlık çubuğuna çift tıklayın. Bkz. [Bir iletişim kutusunu taşıyın](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on çalışılmış istek (bir çizimi düzenleme, bir seti çıktı alma, çizimleri denetleme, bir modele soru sorma, bir metrajı toplama, bir parça varyantını deneme…), her biri çağırdığı araçlar ve ihtiyaç duyduğu izinlerle birlikte; her biri testlerimizle yeniden oynatılır. Uygulamalar yapay zekâ içermez. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)**, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde yenidir. Bu dil, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahip; ana dili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio**, bir güncelleme denetiminin neden başarısız olduğunu söyler (sisteminiz için henüz dosya yok, ağ yok, hatalı imza) yalnızca "Bitti" demek yerine; ve daha yeni bir sürüm çıkana kadar kapattığınız bir Yenilikler kartını geri getirmeyi bırakır.

## Bu sürümde henüz olmayanlar

- **0.7 kod imzalı değildir.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz tamamlanmadığı için 0.8'e ertelendi. getcadcraft.com/download sayfasında her dosyanın yanındaki SHA-256 değerini denetleyin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Ek bilgi}} seçin, ardından {{ui:Yine de çalıştır}}. Mac'te, ilk kez CadCraft Studio'ya sağ tıklayın ve {{ui:Aç}} seçin. CadCraft Studio henüz bir uygulama mağazasında değil ve henüz bir iPad ya da iPhone sürümü yok.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu onları okumaz.
- Bir DWG'nin OLE nesneleri korunur ama gösterilmez; OLE nesneleri içindeki metafile resimleri çizilmez.
- Diğer programlardan çıktı stili tablolarının (CTB dosyaları) okunması bir örnek dosya bekliyor.
- `\M+` kodlarıyla yazılmış eski Asya metinleri okunur, ama henüz başka bir programın dosyasıyla denetlenmedi.
- PDF altlıkları: sayfanın içindeki resimler ekranda gösterilir ama çıktıda çıkmaz, bir asistanın çıktısı altlıkları dışarıda bırakır ve kaydedilmiş kırpma ve ölçeğin diğer programlarda nasıl okunduğu bu programlarda denetlenmedi.
- Geçmiş: CadCraft kayıtlarını henüz buluta göndermez; bu yüzden bulut sürümleri yalnızca diğer cihazlardan ve web'den kaydedilenlerdir. Geçmiş yalnızca CadCraft Studio'dadır.
- Studio'nun yeniden başlatmadan sonra acad.lsp destek klasörünü koruyup korumadığı henüz denetlenmedi; sorarsa APPLOAD içinde klasörü yeniden seçin.
- Lazer paneli henüz gerçek bir lazerde denenmedi: her ayarı hurda bir malzemede sınayın. CadCraft Studio'da Web Serial yoktur, bu yüzden Studio'da panel yalnızca G-kodunu kaydeder.
- Taramaların hizalanması uydurma taramalarla denendi; henüz gerçek bir tarayıcının setiyle denenmedi.
- İki parmakla kaydırma, simüle edilmiş izleme yüzeyi olaylarıyla denendi; henüz gerçek bir izleme yüzeyinde denenmedi.
- {{cmd:PEDIT}} içinde Köşe noktasını düzenle seçeneği yoktur (tutamaçları ya da Özellikleri kullanın). Ofset, kırp, uzat, köşe yuvarlat, kır ve birleştir henüz spline'ları kabul etmez; bir spline'ın yüksekliği (Z) korunmaz.
- Yeni paragraf metnine henüz biçimlendirme kodları verilemez ve SVG çıktıları biçimlendirilmiş metni tek renkle gösterir.
- WBLOCK'un Tüm çizim seçeneği yalnızca modeli yazar, sayfaları değil. Geçerli ölçülendirme stili dosyada kaydedilmez: bir çizim, geçerli Standard ile açılır.
- Şerit menü stillerinde henüz katman, renk ya da çizgi tipi listeleri yoktur: {{ui:Katmanlar}} panelini ve {{ui:Özellikler}}i kullanın.
- Nokta bulutları hâlâ çizimde kaydedilmez ya da çıktısı alınmaz; E57 dosyaları en fazla 6 milyon nokta ve 512 MB'a kadar açılır.
- CadCraft'ın kaydettiği DWG dosyaları henüz AutoCAD'in kendisinde denetlenmedi.

Diğer her şey [Henüz yapılmadı](topic:not-built-yet) bölümünde.
