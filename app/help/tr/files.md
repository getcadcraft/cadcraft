---
title: Dosyalar: neler açılır, neler kaydedilir
summary: CadCraft'ın açtığı, kaydettiği ve dışa aktardığı biçimler, neyin korunduğu veya dönüştürüldüğü ve dosyaların nereye gittiği.
keywords: xclip, kırpma, xclip sınırı, kırpılmışı bağla, dwg, dxf, pdf, r12, aç, kaydet, dışa aktar, içe aktar, biçimler, dönüştürme, indir, saveas, dxfout, farklı kaydet, dwg kaydet, biçim, qsave, xref, xattach, bağlı çizim, harici başvuru, bağla, yeniden yükle, ayır
from: 6d68b34e
---

## Bir bakışta

| Biçim | Aç | Kaydet | Notlar |
|---|---|---|---|
| DXF (metin, herhangi bir sürüm) | Evet | Evet, DXF R12 veya DXF 2000 olarak | İkili DXF reddedilir: önce metin DXF olarak kaydedin. |
| DWG | Evet | Evet, DWG olarak (AutoCAD 2000, 2004, 2007, 2010, 2013 veya 2018) | CadCraft'ın kendi DWG kütüphanesiyle okunur ve yazılır (AutoCAD R13'ten 2018'e kadar dosyalar). DWG dosyanız hiçbir zaman değiştirilmez. Hasarlı dosyalar veya okuyucunun işleyemediği sürümler bir iletiyle reddedilir. |
| PDF | Bir sayfayı getirir: alt katman olarak veya nesneler olarak ([PDF alt katmanları](topic:pdf-underlay)) | Evet, çıktı alarak | Bir sayfanın veya modelin bir ölçekte vektör PDF'i. |

Açtığınız (veya {{ui:Yeni}} ile başlattığınız) her çizim çizim alanının üstünde kendi sekmesini alır; kimsenin dokunmadığı yeni bir çizim sekme eklemek yerine kullanılır. Geçmek için bir sekmeye, kapatmak için {{ui:×}} işaretine tıklayın (kaydedilmemiş değişiklik varsa CadCraft önce sorar) ya da açık çizimleri yan yana döşeyin: bkz. [Ekranı bölme](topic:split-screen).

## Bir çizimi açma

- {{key:Mod+O}} tuşlarına basın, {{ui:Aç}} düğmesine tıklayın veya `OPEN` yazın, sonra dosyayı seçin.
- Ya da bir `.dwg` veya `.dxf` dosyasını çizim alanına sürükleyin.

Dosya tarayıcınızın içinde okunur. Hiçbir yere yüklenmez. Geçmiş kaç nesne ve katmanın geldiğini ve ne kadar sürdüğünü bildirir; sol panelin {{ui:Çizim}} bölümü biçimi gösterir, örneğin "DWG 2018 (AC1032)".

DWG okuyucusu CadCraft'ın parçasıdır ve sayfa yüklendikten sonra açtığınız ilk DWG ile birlikte getirilir (birkaç yüz KB); bu yüzden beklenecek ayrı bir indirme yoktur. Dosyayı arka planda okur, bu yüzden büyük bir DWG açılırken sayfa yanıt vermeye devam eder.

### Neler gelir

- Çizgiler, yaylar, daireler, çoklu çizgiler (yay parçalarıyla), elipsler, noktalar, metin ve çok satırlı metin, katılar, taramalar (standart desenler kendi çizgileriyle, diğerleri düz bir ton olarak), öznitelikleriyle blok başvuruları (düzenleyebileceğiniz değerler; bkz. [Blok öznitelikleri](topic:attributes)), ölçülendirmeler ve görünüm pencereleriyle düzenler.
- Spline'lar spline olarak gelir (derece, kontrol noktaları, düğümler, ağırlıklar, uyum noktaları); bkz. [Spline'lar ve çoklu çizgiler](topic:splines).
- Tek belirtme çizgisi ve metni olan çoklu belirtme çizgileri, düzenleyebileceğiniz CadCraft çoklu belirtme çizgileri olarak gelir (bkz. {{cmd:MLEADER}}). Diğerleri (blokla, birkaç belirtme çizgisiyle veya eğri çizgilerle) diğer programın çizdiği gibi çizilir ve tek parça olarak taşınır; geçmiş kaç tane olduğunu söyler.
- Resimler, siz {{cmd:IMAGE}} ile dosyayı CadCraft'a verene kadar resmin dosya adıyla bir çerçeve olarak görünür: bkz. [Çizimdeki resimler](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout nesneleri çerçeveleri olarak görünür ve altındakiler görünür kalır.
- Bir DWG'deki tablolar diğer programın çizdiği gibi gelir.
- Model uzayındaki 3B yüzler 2B nesneler olarak değil, {{ui:3B}} sekmesinde gelir; bloklar içindekiler de öyle, modeldeki her blok başvurusu için bir kez. Bir blokta ve bir sayfada ayrıca düz, ana hatlar olarak da çizilirler. Bkz. [3B'de model](topic:3d-solids).
- Katmanlar rengini, açık, dondurulmuş, kilitli ve çıktı ayarlarını korur. DEFPOINTS asla çıktı almaz.
- Ölçülendirmeler, noktaları okunabildiği yerde gerçek, düzenlenebilir CadCraft ölçülendirmeleri olur. Önce diğer programın çizdiği gibi gösterilirler; birini değiştirdiğiniz anda CadCraft onu kendi stilinde yeniden çizer.
- Her düzen bir sayfa sekmesi olur. Diğer programda her düzenin sayfanın kendisi olan gizli bir ilk görünüm penceresi vardır; CadCraft onu dışarıda bırakır.

### Henüz gelmeyenler

CadCraft'ın çizemediği her şey tahmin edilmez, sayılır. Sol paneldeki "Bu dosya hakkında" kutusu onları "Henüz gösterilmeyen:" ardından her nesne türü ve kaç tane olduğu şeklinde listeler. Tipik durumlar bir DXF'deki tablolar, örgüler (mesh) ve bloklar içindeki 3B katılardır. Model uzayındaki 3B katılar, bölgeler ve gövdeler 3B sekmesinde görünür (bkz. [3B'de model](topic:3d-solids#solids-from-other-programs)). Dosyada döndürülmüş görünüm pencereleri orada olduğu gibi dönmüş görünür ve kaydettiğinizde dönüşlerini korur; geçerli UCS, adlandırılmış UCS'ler ve döndürülmüş bir görünüm de öyle.

Metin tek bir Helvetica tarzı yazı tipiyle çizilir. Özgün programın daha dar yazı tipinde tek satıra sığan bir etiket CadCraft'ta iki satıra kayabilir.

## Kaydetme

Kaydetmenin üç yolu vardır. Her biri bir kopya indirir.

- **Kaydet**: {{key:Mod+S}} tuşlarına basın, {{ui:Kaydet}} düğmesine tıklayın veya `SAVE` yazın (`QSAVE` de olur). Çizimin biçiminde kaydeder: bir DWG açtıysanız DWG, bir DXF açtıysanız DXF. Bir DWG geldiği sürümü korur (2018 dosyası 2018 olarak kaydedilir). Yeni bir çizim bu tarayıcıda Farklı kaydet'te en son seçtiğiniz biçimi ve DWG sürümünü kullanır; hiç seçmediyseniz AutoCAD 2000 biçiminde DWG.
- **Farklı kaydet**: {{key:Mod+Shift+S}} tuşlarına basın, {{ui:Farklı kaydet}} düğmesine tıklayın veya `SAVEAS` yazın. {{ui:Bir kopyayı şöyle kaydet}} iletişim kutusu, bir {{ui:Sürüm}} listesiyle {{ui:DWG}} (AutoCAD 2018, 2013, 2010, 2007, 2004 veya 2000), {{ui:DXF R12}} ve {{ui:DXF 2000}} seçeneklerini sunar; her birinin vereceği dosya adı ile birlikte ve çizimin geçerli biçimi ve sürümü önceden seçili olarak. İndirmek için {{ui:Kaydet}} düğmesine tıklayın ya da hiçbir şey kaydetmemek için {{ui:İptal}} düğmesine (veya {{key:Esc}} tuşuna) tıklayın; geçmiş o zaman "Kaydedilmedi." der. Seçtiğiniz kalıcı olur: {{key:Mod+S}} bu çizim için bundan sonra onu kullanır ve bu tarayıcıdaki yeni çizimler onunla başlar.
- **DXFOUT**: `DXFOUT` yazın. Her zaman bir DXF R12 kopyası indirir ve sonraki {{key:Mod+S}} yine çizimin kendi biçiminde kaydeder.

Tarayıcı `<çizim adı>.dwg` veya `<çizim adı>.dxf` dosyasını indirir. Her kayıt **yeni bir indirmedir**; açtığınız dosyanın üzerine hiçbir zaman yazılmaz veya değiştirilmez. Geçmiş bunu onaylar, örneğin "Bir kopya Plan.dwg (DWG (AutoCAD 2018)) olarak kaydedildi. Özgün Plan.dxf değişmedi." DXF için "(DXF R12, her CAD programında açılır)" der. Altındaki satırlar yolda değişen her şeyi listeler.

CadCraft masaüstü uygulamasında çalışırken kaydetme diğer masaüstü programlarındaki gibi çalışır: {{key:Mod+S}} çizimi açtığınız dosyaya, kendi biçiminde ve sürümünde geri yazar ve geçmiş nereye kaydedildiğini söyler. {{ui:Farklı kaydet}} ve dışa aktarmalar sistemin kaydetme iletişim kutusunu gösterir ve çift tıkladığınız bir `.dwg`, `.dxf` veya `.ccsheets` dosyası CadCraft'ta açılır.

PDF için bunun yerine çıktı alın (aşağıya bakın).

## Bir DWG'nin koruduğu ve değiştirdiği şeyler

CadCraft DWG'yi tarayıcınızın içinde, okuduğu aynı DWG kütüphanesiyle kendisi yazar. Sürümü Farklı kaydet'te seçin: AutoCAD 2000 biçimi (dosya sürümü AC1015) en çok programda, eskiler dahil, açılır; daha yeni biçimler (2004, AC1018'den 2018, AC1032'ye kadar) gerçek renkleri de korur. Hiçbir şey yüklenmez ve bir DWG kaydetmek çevrimdışı çalışır.

Her sürüm, kaydedilen dosyaların üç başka programın DWG okuyucusuyla ve CadCraft'ın kendisiyle geri okunmasıyla denetlenir. Bir CadCraft DWG'si henüz AutoCAD'in kendisinde açılmamıştır.

### Bir DWG'nin koruduğu şeyler

- Çizgiler, yaylar, daireler, elipsler, noktalar ve yay parçalı çoklu çizgiler.
- Hizalaması ve genişlik çarpanıyla tek satırlı metin.
- Çok satırlı ve kaydırılmış metin, çok satırlı metin olarak. Diğer program onu aynı genişlikten yeniden kaydırır.
- Nesne renkleri: ByLayer, ByBlock, 255 standart renk ve 2004 biçiminden itibaren gerçek renkler.
- Renkleri, çizgi tipleri, çizgi kalınlıkları ve açık, dondurulmuş, kilitli ve çıktı ayarlarıyla katmanlar; nesnelerin kendi çizgi tipleri, çizgi kalınlıkları ve çizgi tipi ölçekleri, çizgi tipi desenleri ve çizimin çizgi tipi ölçeği.
- Çizim birimleri ve uzunluk biçimi (ondalık, fit ve inç, kesirler…).
- Temel noktaları ve öznitelik tanımlarıyla bloklar; görünmez, sabit ve önceden ayarlı olanlar dahil.
- Ölçekleri, dönüşleri ve öznitelik değerleriyle blok başvuruları.
- Dolu dolgular ve deseni, ölçeği ve açısıyla desenli taramalar (desenin kendi çizgileri; böylece diğer programlar CadCraft'ın çizdiği çizgileri çizer).
- Ölçülendirmeler, gerçek ölçülendirmeler olarak: diğer programlar gerdirildiklerinde yeniden ölçer. Her biri kendi ayarlarını (metin yüksekliği, ok boyutu, ondalıklar, uzunluk biçimi) ve metnini korur ve her DWG ölçülendirmesinin taşıdığı çizilmiş kopyayı taşır.
- Sayfalar (düzenler): her sayfa kâğıt boyutu ve birimleriyle, üzerinde çizilenlerle ve görünümü ile ölçeğiyle görünüm pencereleriyle.
- Adlandırılmış görünümler.
- Çoklu belirtme çizgileri, çoklu belirtme çizgileri olarak.
- Katman ve blok adları yazdığınız gibi, büyük ve küçük harfle. (DXF R12 bunları büyük harfle yazar.)

### Bir DWG'nin değiştirdiği şeyler

Bunların her biri, çiziminiz için geçerliyse kaydettikten sonra geçmişte listelenir.

| CadCraft'ta | Kaydedilen DWG'de |
|---|---|
| Gerçek renkler (renk seçiciyle seçilen), 2000 biçiminde | En yakın standart renk: 2000 biçiminde yalnızca 255 vardır. Korumak için 2004 veya sonrası olarak kaydedin |
| Bir sayfanın adlandırılmış görünümleri | Kâğıt uzayı görünümleri: bir DWG hangi sayfa olduğunu söylemez, bu yüzden CadCraft dosyayı yeniden açtığında ilk sayfaya ait olurlar |
| Genişlik çarpanlı çok satırlı metin | Normal harf genişliği: bir DWG'de genişlik çarpanı yalnızca tek satırlı metne uygulanır |
| DWG'nin izin vermediği karakterler içeren katman veya blok adları | Değiştirilir: `Base\|Walls` gibi bağlı bir çizimden gelen ad `Base$0$Walls` olur (bağlı bir çizimi bağlamanın adlandırma biçimi) ve diğer karakterler `_` olur |

### Neden R12 ve ne dönüşür

DXF olarak kaydettiğinizde CadCraft, her CAD programının açabileceği sürüm olan DXF R12 yazar. Bazı özelliklerden eskidir, bu yüzden birkaç şey daha basit biçimde yazılır:

| CadCraft'ta | Kaydedilen R12 dosyasında |
|---|---|
| Çok satırlı metin | Satır başına bir metin nesnesi |
| Elipsler | Elipsi izleyen çoklu çizgiler |
| Taramalar (açılan dosyalardan) | Yalnızca ana hatları |
| Gerçek renkler (renk seçiciyle seçilen) | En yakın standart renk |
| Çizgi kalınlıkları ve nesnelerin kendi çizgi tipi ölçekleri | Bırakılır: R12'de ikisi de yoktur (çizgi tipleri korunur) |
| Katman ve blok adları | Büyük harfle yazılır; boşluklar ve diğer karakterler `_` olur ve adlar 31 karaktere kesilir ("Title block" `TITLE_BLOCK` olur) |
| Çıktı almayacak şekilde ayarlanan katmanlar | Diğer programlar bunların çıktısını alır (çizimde bir sayfa varsa CadCraft ayarı hatırlar) |
| Ölçülendirmeler | Kendi çizilmiş bloklarıyla gerçek ölçülendirmeler; böylece diğer programlar onları sizin gördüğünüz gibi gösterir |
| Çoklu belirtme çizgileri | Çizdikleri çizgiler, ok ucu ve metin |
| Adlandırılmış görünümler | Korunur, adlar büyük harfle; bir sayfanın görünümleri ilk sayfada geri gelir |
| Birkaç sayfa | İlk sayfa her programın gösterdiği kâğıt uzayıdır; diğerleri `CCLAYOUT_1`, `CCLAYOUT_2` … adlı bloklar olarak korunur ve CadCraft dosyayı açtığında onları yeniden sayfalara çevirir |

Geçmiş, çiziminiz için geçerli olan bunların her birini listeler.

:::tip
Bir çizim üzerinde birkaç gün çalışmayı sürdürmek için DXF olarak kaydedin ve bir dahaki sefere o DXF'i açın. CadCraft'ın çizebildiği her şey, ölçülendirmeler, bloklar ve tüm sayfalar dahil, gidiş dönüşten sağ çıkar.
:::

## Bağlı çizimler (harici başvurular)

{{cmd:XATTACH}} (`XA` veya {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bir çizim bağla (xref)}}) başka bir DWG veya DXF bağlar: dosyayı seçin, sonra nereye gideceğine tıklayın ({{key:Enter}} onu 0,0'a koyar). Dosyanın adını taşıyan tek bir blok olarak gelir; iki çizimin birimleri farklıysa doğru ölçekte. Katmanları ve blokları, adlarının önünde bağlantının adıyla kendi adlarını korur — `Plan|Walls`, `Plan|Door` — böylece sizinkilerle hiç karışmazlar: bağlı katmanları kendi katmanlarınız gibi açıp kapatın, dondurun veya kilitleyin. Bağlantı salt okunurdur: diğer çizimi değiştirin ve yeniden yükleyin. Bir bağlantının katmanlarında ayarladığınız şey (renk, çizgi tipi, çizgi kalınlığı, açık/kapalı, dondurma, kilit, çıktı) yeniden yüklediğinizde, bağlantı hâlâ bağlantıyken çizimi DWG olarak kaydettiğinizde ve başka bir çizim bunu bağladığında korunur.

{{cmd:XREF}} (`XR`): `?` bağlantıları listeler (yüklü olup olmadığı, hangi dosya, kaç başvuru); `A` bağlar; `R` birini dosyasından yeniden yükler (dosyayı yeniden seçin: tarayıcı klasörlerinize kendi başına erişemez); `B` birini bağlar (sıradan bloklar ve `Plan$0$Walls` adlı katmanlar olur); `D` birini ayırır (başvuruları ve katmanları gider). Her biri tek bir geri alma adımıdır.

{{cmd:XCLIP}} (`XC`) blok başvurularını ve bağlantıları kırpar: onları seçin, yeni bir sınır için `N`, sonra `R` ve iki köşe ya da `P` ve bir çokgenin noktaları ({{key:Enter}} kapatır); `D` kırpmayı kaldırır. Yalnızca içerideki görünür ve çıktı alınır ve kırpma başvuruyla birlikte taşınır. DWG ve DXF 2000 kırpmaları korur; DXF R12 başvuruyu bütün olarak kaydeder ve bunu söyler. Kırpılmış başvuruları olan bir bağlantıyı bağladığınızda {{cmd:XREF}} `B` sorar: `A` her şeyi bağlar, `C` yalnızca her başvurunun kırpılmış parçasını tutar (çizgiler ve yaylar sınırda kesilir; metinler ve iç içe bloklar ekleme noktaları içerideyse kalır).

Açtığınız bir çizim CadCraft'ın göremediği dosyalara bağlı olabilir: kaçının yüklenmediğini söyler. Onları görmek için {{cmd:XREF}}, `R` kullanın ve her dosyayı seçin.

Kaydettiğinizde yüklü bir bağlantı dosyaya **bağlanır** (diğer programlar `Plan$0$…` adlı sıradan blokları ve katmanları görür) ve geçmiş bunu söyler. Yüklü olmayan bir bağlantı, DWG ve DXF'te dosyasına bağlantı olarak kalır.

## 3B'de aç

{{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:ModelCraft'ta aç}} ({{cmd:OPENIN3D}}) çizimi 3B modelleme uygulamasında, yeni bir sekmede, DWG olarak ve yüklemeden açar. Orada yapılan değişiklikler orada kalır; onları orada kaydedin. Menü öğesi yalnızca o uygulamanın devredilen bir çizimi alabildiği yerlerde görünür.

## PDF'e çıktı alma

{{key:Mod+P}} tuşlarına basın, {{ui:Çıktı al}} düğmesine tıklayın veya `PLOT` yazın. PDF tarayıcının içinde yapılır ve indirilir ya da yazdırmak için yeni bir sekmede açılır. Bkz. [PDF'e çıktı alma](topic:plot-pdf).

## Dosyalar nereye gider

Her kayıt ve her çıktı bir indirmedir, bu yüzden dosyalar tarayıcınızın indirmeleri koyduğu yere, genellikle İndirilenler klasörüne düşer. Her seferinde bir klasör seçmek için tarayıcınızın indirme ayarını değiştirin; [Tarayıcılar ve bilgisayarlar](common:browsers) nerede olduğunu gösterir.

Açtığınız veya kaydettiğiniz hiçbir şey bize gönderilmez. Bkz. [Dosyalarınız nereye gider](common:your-files).

## PLN ve PLA proje dosyaları

CadCraft DWG ve DXF çizimlerini açar, Archicad'in kendi dosyalarını (`.pln`, `.pla`, `.tpl`, `.bpn`) açmaz. Birini açmak size ne olduğunu söyler. Archicad'de ihtiyacınız olan görünümleri veya düzenleri DWG olarak kaydedin ve onları burada açın ya da modeli IFC olarak dışa aktarıp BimCraft'ta açın. BimCraft'ın dosyayı devralabildiği yerde CadCraft {{ui:BimCraft'ta aç}} seçeneğini sunar.

## Sayfa kaydetmeden kapanırsa

CadCraft değiştirdiğiniz her çizimin bir kopyasını, yalnızca bu tarayıcıda, düzenlemeyi bıraktıktan kısa süre sonra tutar. Kaydetmeden önce sekme kapanırsa, tarayıcı durursa veya bilgisayar yeniden başlarsa CadCraft bir sonraki başlayışında **Çalışmanız kurtarılsın mı?** diye sorar: {{ui:Kurtar}} çizimi kaydedilmemiş olarak, kendi sekmesinde yeniden açar. Çizimi kaydetmek kopyasını kaldırır. Bkz. [Çalışmanızı kurtarma](common:recover).

## Çevrimiçi ve çevrimdışı

Açma, çizim, kaydetme (DWG ve DXF) ve çıktı alma bilgisayarınızda gerçekleşir, bu yüzden CadCraft yüklendikten sonra bağlantı olmadan çalışırlar.

CadCraft'ı hiç bağlantı olmadan kullanmak için çevrimiçiyken üstteki çubukta {{ui:Çevrimdışı için kaydet}} düğmesine tıklayın. Etiket sayarak ilerler ("Kaydediliyor 40 / 212") ve "Çevrimdışı hazır" ile biter. Kaydedilen kopya DWG okuyucusunu içerir, toplam yaklaşık 5 MB'dır; bu yüzden kaydedildikten sonra **DWG dosyaları da çevrimdışı açılır**. {{ui:Yeniden kaydet (en yeni sürümü al)}} veya {{ui:Çevrimdışı kopyayı kaldır}} için düğmeye yeniden tıklayın. "Kaydedilemedi" bazı dosyaların inmediği anlamına gelir: bağlantıyı denetleyin ve yeniden denemek için tıklayın. "Çevrimdışı kullanılamıyor" bu tarayıcı penceresinin bir kopya tutamadığı anlamına gelir (gizli pencereler ve bazı yönetilen bilgisayarlar).

Kaydedilmiş bir kopya olmadan, DWG okuyucusu sayfa yüklendikten sonra bir DWG'yi ilk açışınızda getirilir; bu yüzden bir DWG'yi çevrimdışı açmak başarısız olabilir; DXF dosyaları ona hiç ihtiyaç duymaz. CadCraft kaydedilmedikçe çevrimdışıyken sayfayı yeniden yüklemeyin.

Ayrıntılar için bkz. [Çevrimdışı çalışma](common:offline).

:::offline
Şu anda çevrimdışısınız. Çizimler DWG veya DXF olarak kaydedilir ve normal şekilde çıktı alınır, DXF dosyaları açılır. DWG dosyaları, CadCraft "Çevrimdışı hazır" gösteriyorsa ya da DWG okuyucusu bu sekmede zaten yüklenmişse açılır.
:::

## Dosyalardaki kısıtlamalar

Kısıtlamalar ve parametreler (bkz. [Bir çizimi kısıtlama](topic:constraints)) hem DWG hem DXF'te kaydedilir. Her kısıtlı nesne küçük bir CadCraft notu (genişletilmiş veri) taşır ve `CADCRAFT_PARAMETRIC` adlı kullanılmayan bir blok kısıtlamaları ve parametre tablosunu tutar. Diğer programlar çizimi normal şekilde açar ve ikisini de yok sayar; temizlerken kullanılmayan bloğu silebilirler. Notlar nesnelere dosyanın tutamaçlarıyla değil, kendi anahtarlarıyla başvurur; bu yüzden tutamaçları yeniden numaralandıran bir program onları bozmaz. Başka bir program kısıtlı bir nesneyi sildiğinde veya değiştirdiğinde CadCraft dosyayı açarken o nesne üzerindeki kısıtlamaları bırakır ve kaç tane olduğunu söyler. Bunlar olmadan bir dosya kısıtlamasız açılır.

Bir parça modelleyicisinden dışa aktarılan bir eskiz (`.json`) de açılır: bkz. [Eskizleri diğer parça modelleyicilerine ve onlardan taşıma](topic:solidworks-sketches).

## Henüz yok

- Kaydedilen bir DXF'te çoklu belirtme çizgisi nesneleri olarak çoklu belirtme çizgileri (R12'de yoktur: çizdikleri şey olarak kaydedilirler).
- Kaydedilen bir DXF'te resimler (çerçeveleri olarak kaydedilir; DWG onları resim olarak korur) ve altındakini gizleyen wipeout'lar.
- 2000'den daha yeni bir DXF sürümü kaydetme.
- Bulutta kaydetme ve bilgisayarlar arasında eşitleme.

Tam liste için bkz. [Henüz yapılmayanlar](topic:not-built-yet).
