---
title: Dosyalar: neyi açar, neyi kaydeder
summary: CadCraft'ın açtığı, kaydettiği ve dışa aktardığı biçimler, neyin korunduğu ya da dönüştürüldüğü ve dosyaların nereye gittiği.
keywords: xclip, clip, xclip sınırı, kırpılanı bağla, dwg, dxf, pdf, r12, aç, kaydet, dışa aktar, içe aktar, biçimler, dönüştürme, indir, saveas, dxfout, farklı kaydet, dwg kaydet, biçim, qsave, xref, xattach, bağlı çizim, dış referans, bağla, yeniden yükle, ayır
from: b8c5778d
---

## Genel bakış

| Biçim | Aç | Kaydet | Notlar |
|---|---|---|---|
| DXF (metin ya da ikili, her sürüm) | Evet | Evet, DXF R12, DXF 2000 ya da DXF 2000 (ikili) olarak | İkili bir DXF, metin olanı gibi açılır ve ikili olarak geri kaydedilir. |
| DWG | Evet | Evet, DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ya da 2018) olarak | CadCraft'ın kendi DWG kitaplığıyla okunur ve yazılır (AutoCAD R13'ten 2018'e kadar dosyalar). DWG dosyanız hiçbir zaman değiştirilmez. Bozuk dosyalar ya da okuyucunun işleyemediği sürümler bir iletiyle reddedilir. |
| PDF | Bir sayfayı getirir: alt çizim olarak ya da nesneler olarak ([PDF alt çizimleri](topic:pdf-underlay)) | Evet, çıktı alarak | Bir sayfanın ya da modelin, bir ölçekte, vektör PDF'i. |

Açtığınız (ya da {{ui:Yeni}} ile başlattığınız) her çizim, çizim alanının üstünde kendi sekmesini alır; henüz dokunulmamış yeni bir çizim varsa yeni bir sekme eklemek yerine onu kullanılır. Bir sekmeye tıklayarak geçin, {{ui:×}} ile kapatın (kaydedilmemiş değişiklikler varsa CadCraft önce sorar) ya da açık çizimleri yan yana dizin: bkz. [Ekranı bölme](topic:split-screen).

## Çizim açma

- {{key:Mod+O}} tuşuna basın, {{ui:Aç}} düğmesine tıklayın ya da `OPEN` yazıp dosyayı seçin.
- Ya da bir `.dwg` ya da `.dxf` dosyasını çizim alanına sürükleyin.

Dosya tarayıcınızın içinde okunur. Hiçbir yere yüklenmez. Geçmiş kaç nesne ve katmanın geldiğini ve ne kadar sürdüğünü bildirir; sol paneldeki {{ui:Çizim}} bölümü biçimi gösterir, örneğin "DWG 2018 (AC1032)".

DWG okuyucusu CadCraft'ın bir parçasıdır ve sayfa yüklendikten sonra açtığınız ilk DWG ile birlikte alınır (birkaç yüz KB); bu yüzden ayrıca indirmeniz gereken bir şey yoktur. Büyük bir DWG'yi arka planda okur, bu yüzden sayfa açılırken de yanıt vermeye devam eder.

Bir DXF, her biri yaklaşık 4 MB'lık parçalar hâlinde okunur; asla tek bir metin bloğu olarak okunmaz, bu yüzden 512 MB'tan büyük bir DXF de açılır. Sınırı belirleyen şey bilgisayarınızın belleğidir: bir DXF açılırken dosya boyutunun yaklaşık 16 ila 20 katı kadar bellek kullanması beklenir (bizim testimizde yaklaşık 690.000 nesneli 100 MB'lık bir DXF yaklaşık 1.5 GB kullandı).

### Ne içeri gelir

- Çizgiler, yaylar, daireler, çoklu çizgiler (yay parçalı), elipsler, noktalar, metin ve çok satırlı metin, katılar (solid), taramalar (standart desenler kendi çizgileriyle, diğerleri düz bir ton olarak), öznitelikleriyle blok başvuruları (düzenlenebilir değerler; bkz. [Blok öznitelikleri](topic:attributes)), ölçülendirmeler ve görünüm pencereleriyle yerleşimler.
- Eğriler (spline) spline olarak gelir (derece, kontrol noktaları, düğümler, ağırlıklar, uydurma noktaları); bkz. [Spline'lar ve çoklu çizgiler](topic:splines).
- Tek bir belirtme çizgisi ve metni olan çoklu belirtme çizgileri (multileader), düzenlenebilir CadCraft çoklu belirtme çizgileri olarak gelir (bkz. {{cmd:MLEADER}}). Diğerleri (bir blok, birden çok belirtme çizgisi ya da eğri çizgiler içeren) diğer programın çizdiği gibi çizilir ve tek parça olarak hareket eder; geçmiş kaç tane olduğunu söyler.
- Resimler (görüntüler), {{cmd:IMAGE}} ile dosyayı verene kadar resmin dosya adıyla bir çerçeve olarak görünür: bkz. [Çizimdeki resimler](topic:pictures#show-the-pictures-a-dwg-uses). Beyaz örtüler (wipeout) çerçeveleri olarak görünür ve altındakiler görünür kalır.
- Bir DWG içindeki tablolar, diğer programın çizdiği gibi gelir.
- Model uzayındaki 3B yüzeyler {{ui:3B}} sekmesinde gelir, 2B nesneler olarak değil; blokların içindekiler de her blok başvurusu için model içinde bir kez gelir. Bir blok içinde ve bir sayfada bunlar düz, dış hatlar olarak da çizilir. Bkz. [Modelde 3B](topic:3d-solids).
- Katmanlar rengini, açık, dondurulmuş, kilitli ve çıktı ayarlarını korur. DEFPOINTS hiçbir zaman çıktıya gönderilmez.
- Ölçülendirmeler, noktaları okunabildiği yerlerde gerçek, düzenlenebilir CadCraft ölçülendirmeleri olur. İlk başta diğer programın çizdiği gibi gösterilirler; birini değiştirdiğiniz anda CadCraft onu kendi stiliyle yeniden çizer.
- Her yerleşim bir sayfa sekmesi olur. Diğer programda her yerleşimin, sayfanın kendisi olan gizli bir ilk görünüm penceresi vardır; CadCraft onu dışarıda bırakır.

### Henüz gelmeyenler

CadCraft'ın çizemediği her şey sayılır, tahmin edilmez. Sol paneldeki "Bu dosya hakkında" kutusu bunları "Henüz gösterilmiyor:" başlığı altında, her nesne türü ve sayısıyla listeler. Tipik durumlar DXF'teki tablolar, ağlar (mesh) ve blokların içindeki 3B katılardır. Model uzayındaki 3B katılar, bölgeler ve gövdeler 3B sekmesinde gösterilir (bkz. [Modelde 3B](topic:3d-solids#solids-from-other-programs)). Dosyada bükülmüş görünüm pencereleri orada olduğu gibi bükülmüş gösterilir ve kaydettiğinizde bükümlerini korur; aynısı geçerli UCS, adlandırılmış UCS'ler ve döndürülmüş bir görünüm için de geçerlidir.

Metin tek bir Helvetica benzeri yazı tipiyle çizilir. Orijinal programın daha dar yazı tipinde tek satıra sığan bir etiket, CadCraft'ta iki satıra kayabilir.

## Kaydetme

Üç yol vardır. Her biri bir kopya indirir.

- **Kaydet**: {{key:Mod+S}} tuşuna basın, {{ui:Kaydet}} düğmesine tıklayın ya da `SAVE` yazın (ayrıca `QSAVE`). Çizimin biçiminde kaydeder: DWG açtıysanız DWG, DXF açtıysanız DXF. Bir DWG geldiği sürümü korur (2018 dosyası 2018 olarak kaydedilir). Yeni bir çizim, bu tarayıcıda en son {{ui:Farklı kaydet}} ile seçtiğiniz biçimi ve DWG sürümünü kullanır; hiç seçmediyseniz AutoCAD 2000 biçiminde DWG.
- **Farklı kaydet**: {{key:Mod+Shift+S}} tuşuna basın, {{ui:Farklı kaydet}} düğmesine tıklayın ya da `SAVEAS` yazın. {{ui:Bir kopyayı şöyle kaydet}} iletişim kutusu {{ui:DWG}} seçeneğini, bir {{ui:Sürüm}} listesini (AutoCAD 2018, 2013, 2010, 2007, 2004 ya da 2000), DXF R12 ve {{ui:DXF 2000}} seçeneklerini sunar; her biri vereceği dosya adıyla ve çizimin mevcut biçimi ve sürümü seçili olarak. İndirmek için {{ui:Kaydet}} düğmesine, hiçbir şey kaydetmemek için {{ui:İptal}} (ya da {{key:Esc}}) düğmesine tıklayın; bu durumda geçmiş "Kaydedilmedi." yazar. Seçtikleriniz kalıcıdır: {{key:Mod+S}} bu çizim için o seçimi kullanır ve bu tarayıcıdaki yeni çizimler onunla başlar.
- **DXFOUT**: `DXFOUT` yazın. Her zaman bir DXF R12 kopyası indirir; bir sonraki {{key:Mod+S}} yine çizimin kendi biçiminde kaydeder.

Tarayıcı `<çizim adı>.dwg` ya da `<çizim adı>.dxf` indirir. Her kaydetme **yeni bir indirme** olur; açtığınız dosyanın üzerine hiçbir zaman yazılmaz ve değiştirilmez. Geçmiş bunu doğrular, örneğin "Plan.dwg olarak bir kopya kaydedildi (DWG (AutoCAD 2018)). Orijinal Plan.dxf değişmedi." DXF için "(DXF R12, her CAD programında açılır)" yazar. Altındaki satırlar yolda değişen her şeyi listeler.

CadCraft masaüstü uygulamasında çalıştığında kaydetme, diğer masaüstü programlarındaki gibi çalışır: {{key:Mod+S}} çizimi açtığınız dosyaya, kendi biçim ve sürümünde geri yazar ve geçmiş nereye kaydedildiğini söyler. {{ui:Farklı kaydet}} ve dışa aktarmalar sistemin kaydetme iletişim kutusunu gösterir; çift tıkladığınız bir `.dwg`, `.dxf` ya da `.ccsheets` dosyası CadCraft'ta açılır.

PDF için ise çıktı alın (aşağıya bakın).

## Bir DWG neyi korur ve neyi değiştirir

CadCraft DWG'yi kendisi, tarayıcınızın içinde, okuduğu DWG kitaplığıyla yazar. Farklı kaydet'te sürümü seçin: AutoCAD 2000 biçimi (dosya sürümü AC1015) eski olanlar dahil en çok programda açılır; daha yeni biçimler (2004, AC1018'den 2018'e, AC1032'ye kadar) gerçek renkleri de korur. Hiçbir şey yüklenmez ve DWG kaydetme çevrimdışı çalışır.

Her sürüm, kaydedilen dosyaların üç başka programın DWG okuyucularıyla ve CadCraft'ın kendisiyle geri okunarak kontrol edilir. Bir CadCraft DWG'si henüz AutoCAD'in kendisinde açılmadı.

### DWG neyi korur

- Çizgiler, yaylar, daireler, elipsler, noktalar ve yay parçalı çoklu çizgiler.
- Hizalaması ve genişlik çarpanıyla tek satırlı metin.
- Çok satırlı ve kaydırılmış metin, çok satırlı metin olarak. Diğer program onu aynı genişlikten yeniden kaydırır.
- Nesne renkleri: katmana göre, bloğa göre, 255 standart renk ve 2004 biçiminden itibaren gerçek renkler.
- Rengi, çizgi tipi, çizgi kalınlığı ve açık, dondurulmuş, kilitli ve çıktı ayarlarıyla katmanlar; nesnelerin kendi çizgi tipleri, çizgi kalınlıkları ve çizgi tipi ölçekleri; çizgi tipi desenleri ve çizimin çizgi tipi ölçeği.
- Çizim birimleri ve uzunluk biçimi (ondalık, fit ve inç, kesirler…).
- Temel noktalarıyla bloklar ve görünmez, sabit ve önceden ayarlı olanlar dahil öznitelik tanımları.
- Ölçeği, döndürmesi ve öznitelik değerleriyle blok başvuruları.
- Katı dolgular ve deseni, ölçeği ve açısıyla desenli taramalar (desenin kendi çizgileri, böylece diğer programlar CadCraft'ın çizdiği çizgileri çizer).
- Gerçek ölçülendirmeler olarak ölçülendirmeler: diğer programlar onları gerildiklerinde yeniden ölçer. Her biri kendi ayarlarını (yazı yüksekliği, ok boyutu, ondalık, uzunluk biçimi) ve metnini tutar; her DWG ölçülendirmesinin taşıdığı çizilmiş kopyayı da taşır.
- Sayfalar (yerleşimler): her sayfa kendi kâğıt boyutu ve birimleriyle, üzerinde çizilenler ve görünüm pencereleriyle, kendi görünümü ve ölçeğiyle.
- Adlandırılmış görünümler.
- Çoklu belirtme çizgileri, çoklu belirtme çizgisi olarak.
- Katman ve blok adları, yazdığınız gibi, büyük ve küçük harfle. (DXF R12 bunları büyük harfle yazar.)

### DWG neyi değiştirir

Bu maddelerin her biri, çiziminize uyduğunda kaydettikten sonra geçmişte listelenir.

| CadCraft'ta | Kaydedilen DWG'de |
|---|---|
| Gerçek renkler (renk seçiciyle seçilen), 2000 biçiminde | En yakın standart renk: 2000 biçiminde yalnızca 255 renk vardır. Korumak için 2004 ya da sonrasına kaydedin |
| Bir sayfanın adlandırılmış görünümleri | Kâğıt uzayı görünümleri: DWG hangi sayfa olduğunu söylemez; bu yüzden CadCraft dosyayı yeniden açtığında ilk sayfaya ait olurlar |
| Genişlik çarpanlı çok satırlı metin | Normal harf genişliği: DWG'de genişlik çarpanı yalnızca tek satırlı metne uygulanır |
| DWG'nin izin vermediği karakterler içeren katman ya da blok adları | Değişir: `Base\|Walls` gibi bağlı bir çizimden gelen bir ad `Base$0$Walls` olur (bağlı bir çizimi bağladığınızda adlandırma biçimi), diğer karakterler `_` olur |

### Neden R12, ve neler dönüşür

DXF olarak kaydettiğinizde CadCraft DXF R12 yazar; bu, her CAD programının açabildiği sürümdür. Bazı özelliklerden daha eskidir, bu yüzden birkaç şey daha basit bir biçimde yazılır:

| CadCraft'ta | Kaydedilen R12 dosyasında |
|---|---|
| Çok satırlı metin | Satır başına bir metin nesnesi |
| Elipsler | Elipsi izleyen çoklu çizgiler |
| Taramalar (açılmış dosyalardan) | Yalnızca dış hatları |
| Gerçek renkler (renk seçiciyle seçilen) | En yakın standart renk |
| Çizgi kalınlıkları ve nesnelerin kendi çizgi tipi ölçekleri | Dışarıda bırakılır: R12'de ikisi de yoktur (çizgi tipleri korunur) |
| Katman ve blok adları | Büyük harfle yazılır; boşluk ve diğer karakterler `_` olur, adlar 31 karaktere kesilir ("Title block" `TITLE_BLOCK` olur) |
| Çıktı alınmayacak ayarlanmış katmanlar | Diğer programlar bunları çıktıya gönderir (çizimde bir sayfa varsa CadCraft ayarı hatırlar) |
| Ölçülendirmeler | Kendi çizilmiş bloklarıyla gerçek ölçülendirmeler, böylece diğer programlar onları gördüğünüz gibi gösterir |
| Çoklu belirtme çizgileri | Çizdikleri çizgiler, ok ucu ve metin |
| Adlandırılmış görünümler | Büyük harflerle adları korunur; bir sayfanın görünümleri ilk sayfaya geri gelir |
| Birden çok sayfa | İlk sayfa her programın gösterdiği kâğıt uzayıdır; diğerleri `CCLAYOUT_1`, `CCLAYOUT_2` … adlı bloklar olarak korunur ve CadCraft dosyayı açtığında bunları yeniden sayfalara çevirir |

Geçmiş, çiziminize uygulanan her birini listeler.

:::tip
Bir çizim üzerinde birkaç gün boyunca çalışmak için DXF olarak kaydedin ve bir dahaki sefere o DXF'i açın. CadCraft'ın çizebildiği her şey, ölçülendirmeler, bloklar ve tüm sayfalar dahil, bu gidiş dönüşte korunur.
:::

## Bağlı çizimler (dış referanslar)

{{cmd:XATTACH}} (`XA`, ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bir çizim bağla (xref)}}) başka bir DWG ya da DXF'i bağlar: dosyayı seçin, sonra nereye gideceğine tıklayın ({{key:Enter}} onu 0,0'a koyar). Adını dosyadan alan tek bir blok olarak gelir; iki çizimin birimleri farklıysa doğru ölçekte. Katmanları ve blokları, bağlantının adı önüne eklenmiş olarak adlarını korur: `Plan|Walls`, `Plan|Door`; böylece asla sizinkilerle karışmazlar. Bağlı katmanları kendi katmanlarınız gibi açıp kapatır, dondurur ya da kilitlersiniz. Bir bağlantı salt okunurdur: diğer çizimi değiştirin ve yeniden yükleyin. Bir bağlantının katmanlarında ayarladıklarınız (renk, çizgi tipi, çizgi kalınlığı, açık/kapalı, dondurma, kilit, çıktı), bağlantıyı yeniden yüklediğinizde, bağlantı hâlâ bağlantıyken çizimi DWG olarak kaydettiğinizde ve bu çizimi başka bir çizim bağladığında korunur.

{{cmd:XREF}} (`XR`): `?` bağlantıları listeler (yüklü ya da değil, hangi dosya, kaç başvuru); `A` ekler; `R` birini dosyasından yeniden yükler (dosyayı yeniden seçin: tarayıcı klasörlerinize kendi başına erişemez); `B` birini bağlar (sıradan bloklara ve katmanlara döner, `Plan$0$Walls` gibi adlarla); `D` birini ayırır (başvuruları ve katmanları gider). Her biri tek bir geri alma adımıdır.

{{cmd:XCLIP}} (`XC`) blok başvurularını ve bağlantıları kırpar: onları seçin, yeni bir sınır için `N`, sonra `R` ve iki köşe ya da `P` ve bir çokgenin noktaları ({{key:Enter}} onu kapatır); `D` kırpmayı kaldırır. Yalnızca içinde kalan görünür ve çıktıya gider; kırpma başvuruyla birlikte hareket eder. DWG ve DXF 2000 kırpmaları tutar; DXF R12 başvuruyu bütün olarak kaydeder ve bunu söyler. Kırpılmış başvurulu bir bağlantıyı bağladığınızda {{cmd:XREF}} `B` sorar: `A` her şeyi bağlar, `C` yalnızca her başvurunun kırpılmış kısmını tutar (çizgiler ve yaylar sınırda kesilir; metinler ve iç içe bloklar ekleme noktaları içindeyse kalır).

Açtığınız bir çizim, CadCraft'ın göremediği dosyalara bağlı olabilir: kaç tanesinin yüklenmediğini söyler. Onları görmek için {{cmd:XREF}}, `R` yazın ve her dosyayı seçin.

Kaydettiğinizde yüklü bir bağlantı çizimin içine **bağlanır** (diğer programlar `Plan$0$…` adlı sıradan bloklar ve katmanlar görür) ve geçmiş bunu söyler. Yüklenmemiş bir bağlantı, hem DWG hem DXF'te dosyasına bağlı kalır.

## 3B'de aç

{{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:ModelCraft'ta aç}} ({{cmd:OPENIN3D}}) çizimi, yüklemeden, DWG olarak, 3B modelleme uygulamasında yeni bir sekmede açar. Orada yapılan değişiklikler orada kalır; orada kaydedin. Menü öğesi yalnızca o uygulamanın devralınan bir çizimi alabildiği yerlerde görünür.

## PDF çıktısı

{{key:Mod+P}} tuşuna basın, {{ui:Çıktı al}} düğmesine tıklayın ya da `PLOT` yazın. PDF tarayıcıda oluşturulur ve indirilir ya da yazdırmak için yeni bir sekmede açılır. Bkz. [PDF'e çıktı alma](topic:plot-pdf).

## Dosyaların nereye gittiği

Her kaydetme ve her çıktı bir indirmedir; bu yüzden dosyalar tarayıcınızın indirmeleri koyduğu yere gider: genellikle İndirilenler klasörü. Her seferinde bir klasör seçmek için tarayıcınızdaki indirme ayarını değiştirin; [Tarayıcılar ve bilgisayarlar](common:browsers) nerede olduğunu gösterir.

Açtığınız ya da kaydettiğiniz hiçbir şey bize gönderilmez. Bkz. [Dosyalarınızın nereye gittiği](common:your-files).

## PLN ve PLA proje dosyaları

CadCraft DWG ve DXF çizimlerini açar, Archicad'in kendi dosyalarını (`.pln`, `.pla`, `.tpl`, `.bpn`) değil. Birini açtığınızda bunun ne olduğunu söyler. Archicad'de ihtiyacınız olan görünümleri ya da yerleşimleri DWG olarak kaydedip burada açın; ya da modeli IFC olarak dışa aktarıp BimCraft'ta açın. BimCraft dosyayı devralabildiğinde CadCraft {{ui:BimCraft'ta aç}} seçeneğini sunar.

## Kaydetmeden sayfa kapanırsa

CadCraft, düzenlemeyi bıraktıktan kısa bir süre sonra, değiştirdiğiniz her çizimin bir kopyasını yalnızca bu tarayıcıda tutar. Sekme kapanır, tarayıcı durur ya da bilgisayar kaydetmeden yeniden başlarsa, CadCraft bir sonraki açılışta **Çalışmanızı kurtarın?** diye sorar: {{ui:Kurtar}} çizimi kaydedilmemiş olarak kendi sekmesinde yeniden açar. Çizimi kaydetmek kopyasını kaldırır. Bkz. [Çalışmanızı kurtarın](common:recover).

## Çevrimiçi ve çevrimdışı

Açma, çizme, kaydetme (DWG ve DXF) ve çıktı alma, CadCraft yüklendikten sonra bağlantı olmadan da bilgisayarınızda gerçekleşir.

CadCraft'ı hiç bağlantı olmadan kullanmak için, çevrimiçiyken üstteki çubukta {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın. Etiket sayarak ilerler ("212 içinden 40 kaydediliyor") ve "Çevrimdışı hazır" yazarak biter. Kaydedilen kopya DWG okuyucusunu da içerir; toplamda yaklaşık 5 MB, bu yüzden kaydedildikten sonra **DWG dosyaları çevrimdışıyken de açılır**. Düğmeye yeniden tıklayarak {{ui:Yeniden kaydet (en yeni sürümü al)}} ya da {{ui:Çevrimdışı kopyayı kaldır}} seçeneklerine ulaşırsınız. "Kaydedilemedi", bazı dosyaların indirilemediği anlamına gelir: bağlantıyı kontrol edip yeniden tıklayın. "Çevrimdışı kullanılamıyor", bu tarayıcı penceresinin bir kopya tutamadığı anlamına gelir (gizli pencereler ve bazı yönetilen bilgisayarlar).

Kayıtlı bir kopya olmadan DWG okuyucusu, sayfa yüklendikten sonra açtığınız ilk DWG'de alınır; bu yüzden bir DWG'yi çevrimdışıyken açmak başarısız olabilir. DXF dosyalarının buna hiç ihtiyacı yoktur. CadCraft kaydedilmemişse, çevrimdışıyken sayfayı yeniden yüklemeyin.

Ayrıntılar için bkz. [Çevrimdışı çalışma](common:offline).

:::offline
Şu an çevrimdışısınız. Çizimler DWG ya da DXF olarak kaydedilir ve normal şekilde çıktı alınır; DXF dosyaları açılır. DWG dosyaları, CadCraft "Çevrimdışı hazır" gösteriyorsa ya da DWG okuyucusu bu sekmede zaten yüklüyse açılır.
:::

## Dosyalardaki kısıtlamalar

Kısıtlamalar ve parametreler (bkz. [Bir çizimi kısıtlama](topic:constraints)) hem DWG hem de DXF dosyasına kaydedilir. Her kısıtlanmış nesne küçük bir CadCraft notu (genişletilmiş veri) taşır; kullanılmayan `CADCRAFT_PARAMETRIC` adlı bir blok kısıtlamaları ve parametre tablosunu tutar. Diğer programlar çizimi normal açar ve ikisini de yok sayar; temizleme yaparken kullanılmayan bloğu silebilirler. Notlar nesneleri dosyanın kendi tutamaç numaralarıyla (handle) değil kendi anahtarlarıyla gösterir; bu yüzden tutamaçları yeniden numaralandıran bir program onları bozmaz. Başka bir program kısıtlı bir nesneyi sildiğinde ya da değiştirdiğinde CadCraft dosyayı açarken o nesnedeki kısıtlamaları düşürür ve kaç tane olduğunu söyler. Bunlar olmadan açılan bir dosya kısıtlamasız açılır.

Bir parça modelleyiciden dışa aktarılan bir eskiz (`.json`) da açılır: bkz. [Eskizleri diğer parça modelleyicilerden alma ve onlara gönderme](topic:solidworks-sketches).

## Henüz kullanılamayanlar

- Kaydedilmiş bir DXF'te çoklu belirtme çizgileri, çoklu belirtme çizgisi nesneleri olarak (R12'de bunlar yok: çizdikleri şey olarak kaydedilirler).
- Kaydedilmiş bir DXF'te resimler (çerçeveleri olarak kaydedilir; DWG resimleri resim olarak tutar) ve altındakini gizleyen beyaz örtüler.
- DXF 2000'den daha yeni bir DXF sürümünü kaydetme.
- Bulut kaydetme ve bilgisayarlar arası eşitleme.

Tam liste için bkz. [Henüz yapılmadı](topic:not-built-yet).
