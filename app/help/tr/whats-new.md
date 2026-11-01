---
title: 0.7'de neler yeni
summary: PDF alt katmanları ve PDF içe aktarma, otomatik izlemeli taranmış çizimler, SPLINE, SPLINEDIT ve PEDIT ile gerçek spline'lar, bir ölçülendirme stili yöneticisi, biçimini koruyan metin, WBLOCK ve kendi ölçekleriniz, diğer programlardan 3B katılar, tarama hizalama, bir Lazer paneli, USD dışa aktarma, CadCraft Studio'da Geçmiş ve yazdırma, yönlendirmeli ilk çizim, her kenarda veya daha az satırda araç çubuğu ve yapay zekâ asistanları için daha fazlası.
keywords: yenilikler, sürüm notları, değişiklik günlüğü, değişiklikler, 0.7, sürüm, yeni özellikler, pdf, pdfattach, pdfimport, alt katman, tarama, scanattach, scantrace, izleme, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, biçimlendirme, wblock, scalelistedit, ölçek listesi, acis, 3b katılar, registerscans, taramaları hizala, icp, e57, las, lazer, grbl, g-kodu, usd, usdout, geçmiş, sürümler, karşılaştır, yazdır, yazıcı, png, svg, çıktı stili, çizgi tipi, tur, kopya kâğıdı, komut haritası, araç çubuğu konumu, araç çubuğu satırları, toolbardock, regen, regenall, izleme dörtgeni, kaydırma, kod sayfası, kiril, korece, çince, japonca, elektrik, rcd, p&id, pid, acad.lsp, acaddoc.lsp, destek klasörü, asistanlar, mcp, birimler, portekizce
from: b9258ca6
---

Bu, CadCraft 0.7'de 0.6'ya göre nelerin değiştiğidir. Çoğu Discord'da istenmişti. Liste alana göre gruplanmıştır, en önemlisi başta.

## Yeni

### PDF'ler ve taranmış çizimler

- **Çizimin altına bir PDF sayfası koyun.** {{cmd:PDFATTACH}} (`PDFATT`) bir sayfayı gerçek boyutunda veya yazdığınız bir ölçekte yerleştirir. Çizgilerine yakalayın, soluklaştırın, tek renkli yapın ({{cmd:PDFADJUST}}), kırpın ({{cmd:PDFCLIP}}) ve PDF'in kendi katmanlarını açıp kapatın ({{cmd:PDFLAYERS}}). Çizgiler, dolgular ve metin olarak çıktı alır; DWG veya DXF 2000 onu dosyaya bir bağlantı olarak korur. {{ui:Aç}} ile bir PDF açmak, onu eklemek mi içe aktarmak mı istediğinizi sorar. Bkz. [PDF alt katmanları ve PDF içe aktarma](topic:pdf-underlay).
- **Bir PDF sayfasını çizim nesnelerine dönüştürün.** {{cmd:PDFIMPORT}} (`PDFIM`), PDF'in adını taşıyan katmanlarda çizgiler, çoklu çizgiler, daireler, yaylar, dolu taramalar ve metin üretir; gerçek boyutta, yazılan bir ölçekte ya da iki noktadan ve gerçek bir mesafeden ölçeklenerek, tek bir geri alma adımında. Bkz. [Bir sayfayı içe aktarma](topic:pdf-underlay#import-a-page).
- **Taranmış çizimler.** {{cmd:SCANATTACH}} bir PNG, JPEG veya TIFF (bir sayfa veya hepsi) ya da resim olan bir PDF sayfası getirir. Sonra iki noktadan ölçekleyin ({{cmd:SCANSCALE}}), hizalayın ({{cmd:SCANALIGN}}), kendi uzun çizgilerinden dikleyin ({{cmd:SCANDESKEW}}), siyah beyaz yapıp lekeleri temizleyin ({{cmd:SCANCLEAN}}), kırpın ve bölümlerini silin. Her adım tek bir geri alma adımıdır ve özgün dosya korunur. Bkz. [Taranmış çizimler ve izleme](topic:scanned-drawings).
- **Bir taramayı çizgilere ve yaylara izleyin.** {{cmd:SCANTRACE}}, taramanın çizgilerini belirlediğiniz bir toleransla SCAN-TRACE adlı yeni bir katmanda çizgiler ve yaylar olarak çizer; metni ve taramaları olduğu gibi bırakır. Rapor neyi ürettiğini ve neyi bıraktığını söyler ve sonucun doğru olduğu iddiası değildir: sayfayla karşılaştırıp denetleyin. {{cmd:RASTERSNAP}} nesne yakalamaların taramanın uçlarını, köşelerini ve kesişimlerini bulmasını sağlar. Hiçbir yere hiçbir şey gönderilmez ve eğitilmiş bir model kullanılmaz. Bkz. [İzleme](topic:scanned-drawings#the-trace).

### Çizim ve düzenleme

- **Gerçek spline'lar.** {{cmd:SPLINE}} (`SPL`) noktalardan veya kontrol noktalarından (1 ile 5 arası derece) uç teğetleriyle bir eğri çizer; {{cmd:SPLINEDIT}} (`SPE`) uyum veya kontrol noktalarını taşır, ekler ve siler, ağırlıkları ayarlar, açar, kapatır, ters çevirir veya spline'ı çoklu çizgiye çevirir. DWG ve DXF dosyalarındaki spline'lar spline olarak açılır ve DWG ile DXF 2000 onları spline olarak kaydeder. Bkz. [Spline'lar ve çoklu çizgiler](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) çoklu çizgileri kapatır ve açar, onlara çizgi ve yay birleştirir, tek bir genişlik ayarlar, köşeler boyunca bir eğri veya spline uydurur ve Decurve ile geri alır, ters çevirir ve birkaçını birden düzenler. Bkz. [Bir çoklu çizgiyi düzenleme](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) bir bloğu, bazı nesneleri veya çizimin tamamını, yalnızca kullandıkları katmanları, stilleri ve blokları içeren yeni bir DWG veya DXF'e yazar. Bkz. [Bir bloğu veya nesneleri kendi dosyasına yazma](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ve REGENALL.** {{cmd:REGEN}} (`RE`) bulunduğunuz sekmeyi çizimden yeniden çizer, {{cmd:REGENALL}} (`REA`) her sekmeyi, bölmeyi ve açık çizimi. Bkz. [REGEN ve REGENALL](topic:commands#regen-and-regenall).

### Metin ve ölçülendirmeler

- **Metin biçimini korur.** Diğer programlardan gelen paragraf metni sözcük başına renklerini, kalın ve italiğini, altını çizmeyi, yığılmış kesirleri ve yükseklikleri korur: ekranda ve PDF'lerde çizilirler, sözcükleri düzenlediğinizde korunurlar ve geri kaydedilirler. Bkz. [Diğer programlardan gelen paragraf metni içindeki biçimlendirme](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Bir ölçülendirme stili yöneticisi.** {{cmd:DIMSTYLE}} (`D`) adlandırılmış ölçülendirme stilleri yapar, değiştirir, karşılaştırır ve uygular; bir stili değiştirmek onu kullanan her ölçülendirmeyi değiştirir. {{cmd:DIMEDIT}} (`DED`) metni geri koyar, yeni metin yazar, döndürür veya uzatma çizgilerini eğer; {{cmd:DIMTEDIT}} metni sola, sağa veya ortaya taşır. Bkz. [Adlandırılmış ölçülendirme stilleri](topic:dimension-settings#named-dimension-styles).
- **Kendi ölçekleriniz.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) görünüm penceresi ve çıktı ölçek listelerine 1:75 gibi ölçekler ekler; bunlar çizimde kaydedilir (DWG ve DXF 2000) ve başka bir programdan gelen çizim kendi listesini getirir. Bkz. [Ölçekler](topic:units-papers-scales#scales).
- **Diğer alfabelerde metin.** Kiril, Korece, Çince, Japonca veya Vietnamca kod sayfalarında kaydedilmiş DXF dosyaları artık metinleriyle açılır ve Çince, Japonca ve Korece metin PDF'lerde yazdırılır (çıktı, ihtiyaç duyduğu ilk seferde daha büyük bir yazı tipi getirir). Bkz. [Yazı tipi](topic:text#font).

### Çıktı alma ve yazdırma

- **Çıktı stili tablolarında daha fazlası.** Bir tablo artık her renk için ayrıca bir çizgi tipi, çizgi ucu ve çizgi birleşimi ile dolu dolguları tarama çizgileri olarak yazdıran bir dolgu stili ayarlayabilir; tablonun kendi çizgi kalınlığı listesi ve bir çizgi tipi ölçeği vardır. Bkz. [Çıktı stili tabloları](topic:plot-pdf#plot-style-tables).
- **Yazdırma ve PNG ile SVG dosyaları.** Çıktı al iletişim kutusunda {{ui:Yazdır…}}, {{ui:PNG indir}} (300 dpi) ve {{ui:SVG indir}} vardır. CadCraft Studio'da bilgisayarın yazıcılarını, kâğıtlarını ve kopya sayısını listeler. Bkz. [Yazdırma](topic:plot-pdf#print) ve [Resim ve SVG dosyaları](topic:plot-pdf#picture-and-svg-files).

### 3B ve nokta bulutları

- **Diğer programlardan 3B katılar.** Bir çizimin model uzayındaki katılar, bölgeler ve gövdeler 3B sekmesinde salt okunur olarak görünür ve DWG olarak kaydetmek onları değiştirmeden geri yazar. CadCraft'ın henüz çizmediği yüzeylerdeki yüzler tahmin edilmez, listelenir. Bkz. [Diğer programlardan katılar](topic:3d-solids#solids-from-other-programs).
- **Birkaç taramayı hizalayın.** {{cmd:REGISTERSCANS}} (`REGSCAN`) farklı konumlardan alınan taramaları nokta çiftleriyle veya yazılan hedef koordinatlarıyla tek bir çerçeveye yerleştirir, ICP ile iyileştirir, hizalamayı küçük bir proje dosyası olarak kaydeder ve hizalanmış bulutu tek bir LAS veya E57 dosyası olarak yazar. Bkz. [Birkaç taramayı tek taramada hizalama](topic:register-scans).
- **USD dışa aktarma.** {{cmd:USDOUT}} veya {{cmd:EXPORT3D}} › {{ui:USD}}, 3B sekmesinin katılarını `.usda`, `.usdc` veya `.usdz` olarak yazar. Bkz. [3B modeli USD olarak dışa aktarma](topic:usd).
- **3B sekmesinde hesaplamalar.** 3B sekmesinin araçları bir mesafe istediğinde, komut satırındaki gibi bir hesaplama yazabilirsiniz. Bkz. [Yazılan değerde aritmetik](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Bir şeyler yapmak

- **Bir çizimi lazere gönderin.** {{cmd:LASER}} veya {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Lazer…}} çizimin üstünde bir panel açar: her katman keser, çizer (score), çizgi kazır, şekilleri doldurur, bir resim kazır veya gönderilmez; gücü, hızı ve geçiş sayısıyla. Önizleme düzenlemelerinizi izler, {{ui:G-kodunu kaydet…}} GRBL lazer modu G-kodu yazar ve Chrome veya Edge'de panel işi çerçeveleyip USB üzerinden gönderebilir. Ayarlar çizimde kaydedilir (DWG ve DXF). Bkz. [Bir çizimi lazere gönderme](topic:laser-cutting).
- **Elektrik eklentisinde bina tesisat sembolleri.** Veri, telefon ve TV prizleri, anahtarlar ve zaman anahtarları, bir termostat, çıkış levhası, dedektörler, ihbar düğmesi ve siren, bir fan, su ısıtıcı, ocak, EV şarj noktası, enerji sayacı ve alt pano ile RCD ve RCBO sembolleri. Bir devre RCD taşıyabilir, pano listesinde bir RCD sütunu vardır ve denetimler 30 mA veya daha düşük RCD'si olmayan priz devrelerini adlandırır. Bir planlama hatırlatmasıdır, yönetmelik denetimi değildir.
- **Bir P&ID eklentisi.** P&ID proses diyagramları çizer: bağlantı noktalı semboller, proses ve sinyal hatları, etiketler, hat numaraları, hat, ekipman, enstrüman ve vana listeleri (CSV veya bir çalışma kitabı) ve denetimler. CadCraft ile gelir ve {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Eklentiler}} içinde açana kadar kapalıdır. Bir çizim yardımcısıdır, mühendislik onayı değildir ve şimdilik metinleri yalnızca İngilizcedir.

### Başlarken ve ekran

- **Yönlendirmeli ilk çizim.** {{cmd:TOUR}} (veya başlangıç kartında {{ui:Turu yap}}) sizi gerçek çizimde altı adımdan geçirir: bir çizgi, bir daire, bir taşıma, bir kırpma, bir silme ve bir ölçülendirme. CadCraft'ın içinde hiçbir şey yokken ilk açıldığında kendiliğinden başlar. Bkz. [Yönlendirilmeyi mi tercih edersiniz?](topic:getting-started#prefer-to-be-guided)
- **Bir kopya kâğıdı ve bir komut haritası.** [Kopya kâğıdı](topic:cheat-sheet) 40 günlük komutu tek sayfada, ayrıca yazdırmak için PDF olarak verir; [komut haritası](topic:command-map) komutları kısa adlarıyla A'dan Z'ye listeler.
- **Her kenarda araç çubuğu.** {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Araç çubuğu konumu}}: üst (eskisi gibi), alt, sol veya sağ ya da {{cmd:TOOLBARDOCK}} yazın. Bkz. [Araç çubuğu konumu](topic:settings#toolbar-position).
- **Araç çubuğu satırları.** {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Araç çubuğu satırları}}: sığacak şekilde sar, 2 satır veya 1 satır; CadCraft araç çubuğu ile Klasik çizim ve Şerit stilleri için. {{key:Shift+Ctrl+F1}} bunlar arasında, {{key:Ctrl+F1}} düğmelerin gösterdiği şey arasında dolaşır; {{cmd:TOOLBARROWS}} ve {{cmd:TOOLBAR}} bunları ayarlar. Başlangıç ipucunun bir kapat düğmesi vardır. Bunu bir çekme isteği olarak gönderen GJoe2'ye teşekkürler. Bkz. [Araç çubuğu satırları](topic:settings#toolbar-rows).

### CadCraft Studio'da

- **Geçmiş.** {{cmd:HISTORY}} (`HIST`) veya {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Geçmiş…}}: Studio'nun bir çizimi açıp kaydettiğinizde tuttuğu kopyalar ve çizimi buluttan açtıysanız çizimin bulut sürümleri. Birini açın veya geri yükleyin ya da ikisini karşılaştırın; nelerin eklendiği, kaldırıldığı ve değiştiği renkle gösterilir. Bkz. [Geçmiş](topic:history).
- **acad.lsp ve acaddoc.lsp.** {{cmd:APPLOAD}} içinde bir destek klasörü seçin: bu iki dosya CadCraft başladığında yüklenir (acaddoc.lsp her yeni çizim sekmesi için yeniden) ve `S::STARTUP` onlardan sonra çalışır. Bkz. [Uygulamaları yükleme](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Çıktı al iletişim kutusu kendi penceresinde.** Başlık çubuğundaki bir düğme onu başka bir monitöre koyabileceğiniz bir pencereye taşır. Bkz. [Bir iletişim kutusunu taşıma](common:arrange-panels#move-a-dialog).

### Yapay zekâ asistanları için

- **Seçtiğiniz klasörlerde ada göre dosyalar.** CadCraft Studio'da bir asistan dosyaları ada göre açabilir, kaydedebilir ve çıktısını alabilir ve bir komuta istediği dosyayı verebilir (bir dosyadan INSERT, COUNT'un dışa aktarması, SAVEAS, PLOT); ama yalnızca {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Asistanlar}} › {{ui:Asistanların kullanabileceği klasörler}} altında eklediğiniz klasörlerin içinde. Bkz. [Seçtiğiniz klasörlerdeki dosyaları kullanmasına izin verme](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Daha az çağrı.** Bir asistan komut satırının tamamını tek seferde yazabilir, çağrıları arasında bir komutu açık tutabilir, nesneleri listelemeden türe ve katmana göre sayabilir ve öznitelik değerleriyle bir bloğu tek adımda yerleştirebilir.
- **Pencere olmadan.** `cadcraft` komut satırı SVG çıktıları yazar ve birçok dosyayı bir seferde dönüştürür, çıktısını alır, denetler veya betimler. MCP paketi henüz yayımlanmadı. Bkz. [CadCraft'ı açmadan dosyalar üzerinde çalışma](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Değişenler

- **Bir izleme dörtgeni kaydırır.** İzleme dörtgeninde iki parmağı hareket ettirin ve 2B görünüm onları izler; sıkıştırma ve fare tekerleği yakınlaştırır. Bkz. [Fare, izleme dörtgeni ve dokunma](topic:mouse-trackpad-touch).
- **OLE nesneleri korunur.** Bir DXF'in gömülü nesneleri resimleri veya etiketli bir çerçeve olarak görünür ve DXF 2000 tarafından geri kaydedilir. Bir DWG'ninkiler korunur ve DWG olarak kaydettiğinizde geri yazılır, ama henüz gösterilmez. Önceden kaydederken kayboluyorlardı. Bkz. [Diğer programlardan nesneler (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Yeni bir çizimin birimleri** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde yıldızladığınız birimi izler.

## Düzeltilenler

- Boş açılan veya bir görünüm penceresini kaybedip yerine modelin tamamını gösteren düzenler artık gerçek görünüm pencereleriyle açılıyor. İçeriğine bağlantısı olmayan bir düzen korunur ve açma raporu bunu söyler.
- Eski kod sayfalarındaki DXF dosyaları bozuk Kiril ve Korece metin gösteriyordu. Artık doğru okunuyor.
- Diğer programlardan gelen paragraf metni açıldığında biçimini kaybediyor ve düz olarak geri kaydediliyordu.

## Her uygulamada

- **Birimler.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Birimler}} içinde uzunluk, alan, hacim, açı ve eğim için birer liste vardır; boyutlar birimlerin tanımlarının verdiği tam değerlerdir (ABD ölçme fiti kendi birimidir). Hiç kullanmadığınız birimleri kapatın, birim listelerinden çıkarlar; birini yıldızlayın, yeni çalışma onunla başlar. Bir dosya her zaman kendi birimini korur. CadCraft'ta yıldız, bir çizimin taşıyabileceği bir birimse yeni bir çizimin birimlerini ayarlar; CadCraft'ın kendi {{ui:Birimler}} kutusu henüz anahtarları izlemez. Bir çizimin birimleri olduğunda, yazdığınız bir uzunluk herhangi bir birimin işaretini taşıyabilir. Bkz. [Birimler, yazılan değerler ve birim listeleri](common:unit-lists).
- **Daha sıkı bir yerleşim ve toparlanan paneller.** {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Düzen yoğunluğu}} › {{ui:Sıkı}} ekrana daha fazlasını sığdırır (dokunmatik ekranlar ve telefonlar büyük düğmelerini korur). Her yan panelin ince bir başlık çubuğu vardır: panelin yerleşmesi veya yüzmesi için sürükleyin, başka bir panelin çubuğuna bırakarak sekmeler olarak tek bir çerçeveyi paylaşın, kenara kayıp gitmesi için iğneleyin veya gizleyin ve kenardan geri getirin. Bkz. [Panelleri düzenleme](common:arrange-panels#make-the-layout-denser).
- **İletişim kutuları taşınır.** Bir iletişim kutusunu başlık çubuğundan çizimin önünden çekin; bıraktığınız yere geri gelir. Yeniden ortalamak için başlık çubuğuna çift tıklayın. Bkz. [Bir iletişim kutusunu taşıma](common:arrange-panels#move-a-dialog).
- **Yapay zekâ asistanları için tarifler.** Kendi asistanınız için on uygulamalı istek (bir çizimi düzenleme, bir takımı çıktı alma, çizimleri denetleme, bir modele soru sorma, bir metrajı toplama, bir parça varyantını deneme…), her birinde çağırdığı araçlar ve gereken izinlerle ve her biri testlerimizce yeniden oynatılarak. Uygulamalarda yapay zekâ yoktur. Bkz. [Yapay zekâ asistanları için tarifler](common:assistants-recipes).
- **Diller.** **Português (Portugal)**, {{ui:Ayarlar}} › {{ui:Genel}} › {{ui:Dil}} içinde yenidir. O, **Português (Brasil)**, **Español (México)** ve **Bahasa Indonesia** artık uygulamaların her sözcüğüne sahiptir; anadili konuşan biri tarafından henüz gözden geçirilmemiş taslaklar olarak. Yardım konuları İngilizcedir.
- **CadCraft Studio**, bir güncelleme denetiminin neden başarısız olduğunu (sisteminiz için henüz dosya yok, ağ yok, hatalı imza) yalnızca "Bitti" demek yerine söyler ve kapattığınız bir Yenilikler kartını daha yeni bir sürüm çıkana kadar geri getirmeyi bırakır.

## Bu sürümde henüz olmayanlar

- **0.7 kod imzalı değildir.** İmzalama ve Microsoft Store paketi, sertifika doğrulaması henüz sonuçlanmadığı için 0.8'e kaydı. getcadcraft.com/download adresinde her dosyanın yanındaki SHA-256 değerini denetleyin. Windows'ta SmartScreen yükleyiciyi durdurursa {{ui:Daha fazla bilgi}}, ardından {{ui:Yine de çalıştır}} seçin. Mac'te ilk seferde CadCraft Studio'ya sağ tıklayıp {{ui:Aç}} seçin. CadCraft Studio henüz bir uygulama mağazasında değildir ve henüz iPad veya iPhone sürümü yoktur.
- {{ui:Birimler}} içindeki açı ve eğim listeleri kaydedilir, ama henüz hiçbir kutu onları okumaz.
- Bir DWG'nin OLE nesneleri korunur ama gösterilmez ve OLE nesneleri içindeki metadosya resimleri çizilmez.
- Diğer programlardan çıktı stili tablolarını (CTB dosyaları) okuma bir örnek dosyayı bekliyor.
- `\M+` kodlarıyla yazılmış eski Asya metni okunur, ama henüz başka bir programdan gelen bir dosyayla denetlenmedi.
- PDF alt katmanları: sayfanın içindeki resimler ekranda gösterilir ama çıktıda yer almaz, bir asistanın çıktısı alt katmanları dışarıda bırakır ve diğer programların kaydedilen kırpmayı ve ölçeği nasıl okuduğu onlarda denetlenmedi.
- Geçmiş: CadCraft kayıtlarını henüz buluta göndermez, bu yüzden bulut sürümleri diğer cihazlardan ve web'den kaydedilenlerdir. Geçmiş yalnızca CadCraft Studio'dadır.
- Studio'nun acad.lsp destek klasörünü yeniden başlatmadan sonra koruyup korumadığı henüz denetlenmedi; sorarsa APPLOAD içinde klasörü yeniden seçin.
- Lazer paneli henüz gerçek bir lazerde denenmedi: her ayarı hurda üzerinde deneyin. CadCraft Studio'da Web Serial yoktur, bu yüzden Studio'da panel yalnızca G-kodunu kaydeder.
- Tarama hizalama uydurma taramalarda denendi, henüz gerçek bir tarayıcının kümesinde değil.
- İki parmakla kaydırma, simüle edilmiş izleme dörtgeni olaylarıyla denendi, henüz gerçek bir izleme dörtgeninde değil.
- {{cmd:PEDIT}} Köşe düzenle seçeneğine sahip değildir (tutamaçları veya Özellikler'i kullanın). Ofset, kırp, uzat, köşe yuvarlat, kır ve birleştir henüz spline'ları almaz; bir spline'ın yüksekliği (Z) korunmaz.
- Yeni paragraf metnine henüz biçimlendirme kodları verilemez ve SVG çıktıları biçimlendirilmiş metni tek renkle gösterir.
- WBLOCK'un Tüm çizim seçeneği yalnızca modeli yazar, sayfaları değil. Geçerli ölçülendirme stili dosyada kaydedilmez: bir çizim Standard geçerli olarak açılır.
- Şerit menü stillerinde henüz katman, renk veya çizgi tipi listeleri yoktur: {{ui:Katmanlar}} panelini ve {{ui:Özellikler}} panelini kullanın.
- Nokta bulutları hâlâ çizimde kaydedilmez veya çıktısı alınmaz ve E57 dosyaları 6 milyon noktaya ve 512 MB'a kadar açılır.
- CadCraft'ın kaydettiği DWG dosyaları henüz AutoCAD'in kendisinde denetlenmedi.

Geri kalan her şey [Henüz yapılmayanlar](topic:not-built-yet) içindedir.
