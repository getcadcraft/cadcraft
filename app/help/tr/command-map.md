---
title: Komut haritası: ne yazılır
summary: CadCraft'ın sahip olduğu her komut, kısa adları ile A'dan Z'ye, programın kendisinden oluşturulmuş; diğer çizim programlarından alışkanlıkların farklı olduğu yerler.
keywords: komut haritası, komutlar, takma adlar, kısa adlar, başka programdan geldim, komut listesi, ne yazılır, sil, kırp, eşdeğer, farklar
from: 9426856f
---

CadCraft, diğer çizim programlarından bilinen komut adlarını ve kısa adları kabul eder: çizgi için `L`, kırpmak için `TR`, silmek için `E` yazın. Bu yüzden çoğu komut için öğrenilecek bir çeviri tablosu yoktur: bildiğiniz ad burada da geçerlidir. Aşağıdaki liste, programın kendisinden oluşturulmuş, CadCraft'ın sahip olduğu her komuttur. {{key:Enter}} son komutu yineler; komut satırında `HELP` aynı listeyi yazdırır.

Aynı olmayan ya da henüz yapılmamış birkaç komut:

- **Kaydet**, tarayıcıda bir kopya indirir ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio'da dosyayı yazar. Bkz. [Diğer çizim yazılımlarından gelenler](topic:coming-from).
- **PLOT** bir PDF üretir (PNG ve SVG de), bir çıktı stili tablosuyla; bir sayfa düzeni yöneticisi yoktur.
- **DIMSTYLE** ve **PEDIT** yapılmıştır; **PEDIT**'te Köşe düzenle seçeneği yoktur (bunu tutamaçlar yapar).
- **TABLE** yapılmamıştır; {{cmd:XREF}}, {{cmd:SPLINE}} ve {{cmd:WBLOCK}} yapılmıştır.
- Bir rutinin kendi komutları (AutoLISP `C:NAME`), {{cmd:APPLOAD}} ile yüklediğinizde görünür; burada listelenmezler.

## Tüm komutlar (402)

| Komut | Kısa adlar | Ne yapar |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | 3B görünümünü sol düğmeyle döndürür |
| `ACCESS` | `AX` | Görmeden çizimi açar ya da kapatır: sonuçlar ekran okuyucunuz aracılığıyla seslendirilir, çizimde bir klavye imleci olur, yakalama sesleri ve sesli komutlar çalışır. |
| `ALIASEDIT` |  | Komut takma adlarını tek bir metin dosyasında düzenler (tanıdık L, *LINE biçimi) |
| `ALIGN` | `AL` | Nesneleri, kaynak noktaları hedef noktalara gelecek şekilde taşır ve döndürür (bir, iki ya da üç çift); isterseniz ölçekler |
| `ALIGNPANEL` | `ALP` | Hizala ve dağıt panelini açar |
| `ALIGNTO` |  | Seçili nesnelerin sol, orta, sağ, üst, orta ya da alt kenarlarını; seçime, ilk ya da son seçilen nesneye ya da bir noktaya göre hizalar |
| `ANNOALLVISIBLE` | `ANNOALL` | Açıklamalı nesneleri her ölçekte gösterir ya da yalnızca görünüm penceresinin (ya da çizimin) ölçeği listelerinde olduğunda gösterir |
| `ANNOSCALE` | `CANNOSCALE` | Çizimin açıklama ölçeğini belirler: açıklamalı yazı ve ölçülendirmeler aynı boyutta basılacak şekilde yeniden boyutlandırılır |
| `APPLOAD` | `AP` | Uygulamaları yükler: LISP rutinleri (.lsp) ve iletişim kutusu dosyaları (.dcl); Başlangıç Paketi (AP) |
| `ARC` | `A` | Yay: 3 Nokta, Başlangıç/Merkez/Son, Başlangıç/Merkez/Açı, Başlangıç/Merkez/Uzunluk, Başlangıç/Son/Açı, Başlangıç/Son/Yön, Başlangıç/Son/Yarıçap, Merkez/Başlangıç/Son, Merkez/Başlangıç/Açı, Merkez/Başlangıç/Uzunluk, Devam |
| `AREA` | `AA` | Noktalara ya da bir nesneye göre alan ve çevre; Ekle ve Çıkar çalışan bir toplam tutar (AA) |
| `ARRAY` | `AR` | Satır ve sütunlarda kopyalar ya da bir merkez etrafında (AR) |
| `ARRAYASSOCIATIVITY` |  | ARRAY komutlarının düzenlenebilir diziler (1) mi yoksa düz kopyalar (0) mı üreteceğini belirler |
| `ARRAYCLOSE` |  | Bir dizinin kaynak nesnelerini düzenlemeyi bitirir |
| `ARRAYEDIT` |  | İlişkisel seçenekle yapılmış bir diziyi değiştirir: sayılar, aralık, kaynak nesneler, tek bir öğe |
| `ARRAYPATH` |  | Bir doğru, yay, çoklu çizgi ya da başka bir eğri boyunca nesne kopyaları |
| `ARRAYPOLAR` |  | Bir merkez noktası etrafında kopyalar |
| `ARRAYRECT` |  | Satır ve sütunlarda kopyalar |
| `ASBUILT` | `ASB` | ASBUILT, ekibin ölçtüğü uygulanmış (as-built) noktaları okur (CSV / TXT, EXPORTPOINTS'in yazdığı biçimde) ve bunları çizimin noktalarıyla karşılaştırır: tolerans içinde ya da dışında, ölçülmemiş, fazla. Bunları AS-BUILT katmanına işaretler ve bir CSV raporu indirir. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Bir blokta yer alacak, bir blokun değer istediği bir öznitelik (etiket) tanımlar (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Bir blok başvurusunun öznitelik değerlerini komut satırında birer birer düzenler (Enter bir değeri korur) |
| `ATTSYNC` |  | Bir bloğun başvurularını öznitelik tanımlarına uydurur: yenileri varsayılan değerleriyle eklenir, kaldırılanlar çıkarılır, konumlar ve metin sıfırlanır; değerler korunur |
| `AUDIT` |  | Açık çizimde hasar arar: sonlu olmayan sayılar, boyutu olmayan nesneler, eksik katmanlar, bloklar, stiller ve çizgi tipleri, kendini içeren bloklar, ortak kimlikler, bozuk ölçülendirmeler ve taralamalar. Bulduklarını türe göre listeler ve düzeltmeden önce sorar; düzeltme tek bir geri al adımıdır. |
| `AUNITS` | `ANGUNITS` | Açıların nasıl gösterileceği ve yazılacağı: ondalık derece, derece-dakika-saniye ya da N45°23'30"E gibi pusula yönleri (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Çizim otomatik tamamlamasını açar ya da kapatır, ya da çizimin desenlerinin şimdi ne önerdiğini listeler. |
| `AUTOCONSTRAIN` |  | Geometri zaten yakınsa eş nokta, yatay ve dikey kısıtlamalar ekler |
| `AUTODIM` | `ADIM` | Kurallara göre ölçülendirme: genel boyut, seçtiğiniz kenarlar boyunca zincirler, açıklıklar, delik çapları ve ızgara aralığı; zaten ölçülmüş olanı tekrarlamadan. |
| `AUTOSHEET` | `ASH` | Sayfaları kendi kendine yerleştirir: kâğıt ve standart ölçekleri seçer, her görünümü bir yazı ve künye ile sayfalara yerleştirir. |
| `BATTMAN` |  | Blok öznitelik yöneticisi: bir bloğun özniteliklerinin sırası, etiketleri, istemleri, varsayılanları ve kipleri, ardından başvuruların güncellenmesi |
| `BCLOSE` |  | Blok düzenleyicisini kapatır: bloğu kaydeder ya da değişiklikleri atar |
| `BCONVERT` |  | BCONVERT, tekrarlanan geometriyi bulur ve blok başvurularına dönüştürür. Tekrarlanan nesneleri seçin: açık alandaki, taşınmış ve döndürülmüş ya da aynalanmış ve ölçeklenmiş aynı geometriyi oluşturan her diğer nesne kümesi bulunur. Yeni bloğa bir ad ve temel nokta verin; seçim ve her kopya bloğa başvuru olur, her biri kendi dönüşü ve ölçeğiyle. Ya da Blok seçeneğini seçip var olan bir blok adı verin ve bu bloğun nesnelerinin dağınık kopyalarını bulun. Bir kopyanın aynı katmana, renge, çizgi tipine ve çizgi kalınlığına sahip olması gerekir; Özellikler Yoksay olarak ayarlanmadıkça. Kilitli katmanlardaki nesnelere dokunulmaz. Tek bir geri al adımı. |
| `BEDIT` | `BE` | Blok düzenleyicisi: bir bloğun nesnelerini ve özniteliklerini düzenler; BCLOSE kaydeder (BE) |
| `BLEND` |  | BLEND: birbirine katılmak üzere uçlarından seçilen iki açık eğrinin uçları arasında bir eğri (spline). CONtinuity: Tangent (Teğet) her iki yönü izler, Smooth (Pürüzsüz) ayrıca eğilme biçimini de izler. |
| `BLOCK` | `B`, `BMAKE` | Nesnelerden bir blok oluşturur (tek bir başvuru olurlar) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: bir bloğa yapılan her başvuru, aynı yerde, aynı ölçek ve dönüşle başka bir bloğa başvuru olur. İki bloğun da sahip olduğu öznitelik değerleri korunur. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE, Bloklar panelini imleç filtrede olacak şekilde gösterir. Panel her bloğun bir resmini gösterir (en son yerleştirilenler önce), liste ya da ızgara olarak; resme tıklayın ya da çizime sürükleyin, blok INSERT ile yerleşsin. Kitaplıklar altında, kendi DWG ya da DXF dosyanızı ekleyin: blokları resimleriyle listelenir ve birini yerleştirdiğinizde bu çizime kopyalanır. CadCraft Studio'da bir çizim klasörü de eklenebilir ve dosya ile klasörler hatırlanır. |
| `BOMEDIT` | `BOMCOLUMNS` | Bir malzeme listesi tablosunun sütunları, gruplama, sıralama, başlık, toplamlar ve notlar |
| `BOMEXPORT` |  | Bir malzeme listesi tablosunu .csv dosyası olarak kaydeder |
| `BOMTABLE` | `BOM` | Bir bölgenin ya da tüm çizimin canlı malzeme listesi tablosu |
| `BOMUPDATE` |  | Dondurulmuş olanlar dahil tüm malzeme listesi tablolarını şimdi günceller |
| `BOMZONE` | `BZONE` | Malzeme listesi için çizimde adlandırılmış bir alan: iki köşe, bir çokgen ya da kapalı bir nesnenin dış hattı |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): kapalı bir alanın içinde bir nokta seçin ve etrafında kapalı bir çoklu çizgi alın. Yaylar yay kalır. Adalar seçeneği içindeki alanların da ayrı çizgilerini çıkarır. |
| `BOX` |  | Bir kutu: iki köşe ve bir yükseklik (3B) |
| `BPARAMETER` | `BPARAM` | Henüz yapılmadı: bir bloğa bir parametre (örneğin Görünürlük) eklemek. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blok parametreleri: formüllü adlandırılmış parametreler ve tek bir blokta birkaç görünürlük parametresi. Blok düzenleyicisinde çalışır (seçili nesneleri bir duruma atar) ve seçili bir başvuruda çalışır (kendi değerleri ve durumları). |
| `BREAK` | `BR` | Bir doğruyu, yayı, daireyi ya da çoklu çizgiyi iki nokta arasında kırar (BR) |
| `BREAKATPOINT` |  | Bir doğruyu, yayı ya da çoklu çizgiyi bir noktada ikiye böler |
| `BREAKLINE` |  | Kırılma simgeli bir doğru çizer; boyutu ve uçların dışına uzantısı hatırlanır. |
| `BREPLACE` |  | BREPLACE bir bloğu başka bir blokla değiştirir. Seçili: blok başvurularını seçin ve yerine kullanılacak bloğun adını verin. Tümü: bir blok ve yerine geçecek bloğu adlandırın; her alanda ve diğer blokların içindeki her başvuru değişir. Bir başvuru yerini, ölçeğini, dönüşünü ve katmanını korur; iki bloğun da sahip olduğu öznitelik değerleri korunur, yeni bloğun yeri olmayan değerler atılır ve adları bildirilir. |
| `BSEARCH` |  | BSEARCH blokları bulur. Ad: blok adının bir parçası ya da * ve ? içeren bir desen. Öznitelik: bir başvurunun öznitelikleri tutan bir değer (ya da TAG=değer). Geometri: nesneleri ya da bir blok başvurusunu seçin; şekli en az %85 benzeyen bloklar en iyisi başta olacak şekilde listelenir; boyut, dönüş ve aynalama sayılmaz. Açık alanda bulunan başvurular seçilir, bir sonraki komuta hazır olur. |
| `BURST` |  | Blok başvurularını patlatır ve öznitelikleri ne diyorsa onu korur: her değer, özniteliğin katmanında metin olur. |
| `BVHIDE` | `BVH` | Blok düzenleyicisinde: geçerli görünürlük durumundaki nesneleri gizler. |
| `BVSHOW` | `BVSH` | Blok düzenleyicisinde: geçerli görünürlük durumunun gizlediği nesneleri gösterir (seçilebilmeleri için soluk görünürler). |
| `BVSTATE` | `BVS` | Blok düzenleyicisinde, görünürlük durumları olan bir blokta: bir duruma geçer ya da bir durum ekler, adını değiştirir ya da siler. |
| `CAL` |  | Bir uzunluğu ya da sayıyı hesaplar: + − * / ve parantezler, her yerde yazdığınız gibi |
| `CENTERLINE` | `CL` | İki doğru arasında merkez çizgisi: aralarında tam orta noktadan ya da birleştikleri yerde açıortaydan geçer (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Merkez işareti: bir dairenin ya da yayın merkezinde bir artı işareti ve bu işaretin hemen ötesine uzanan merkez çizgileri (CM) |
| `CHAMFER` | `CHA` | İki doğru arasındaki köşeyi pah kırar (D iki mesafe, A uzunluk ve açı, P çoklu çizgideki her köşe) |
| `CHSPACE` |  | CHSPACE: nesneleri bir sayfa ile model arasında bir görünüm penceresi üzerinden taşır. Diğer taraftan bakıldığında aynı görünsünler diye ölçeklenir ve döndürülürler. Bir sayfada nesneler modele gider; görünüm penceresi üzerinden çalışırken (MSPACE) sayfaya gelirler. |
| `CIRCLE` | `C` | Merkez ve yarıçap, çap, 2 ya da 3 nokta |
| `CLASS` |  | Seçili nesneleri bir sınıfa koyar; hiçbir şey seçili değilken etkin sınıfı ayarlar (? onları listeler) |
| `CLASSES` | `CLS` | Sınıflar paneli: sınıflar nesneleri katmanlar arasında sıralar; onları gösterin, gizleyin, biçimlendirin ve görünüm penceresi başına geçersiz kılın (CLS) |
| `COMMANDLINE` | `CMDLINE` | Komut satırını alta yerleştirir ya da yüzdürür, tek satır yapar, geçmiş satırlarını ayarlar ya da geçmişi açar (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ölçülendirme stillerini, metin stillerini, katmanları, sayfaları ya da birimleri karşılaştırır: bu çizimde iki tane ya da bu çizimi açık başka bir çizimle; bir değeri öteki tarafa kopyalayın. |
| `CONSTRAINTBAR` | `CBAR` | Kısıtlama çubuklarını gösterir ya da gizler (Hepsini göster / Hepsini gizle, ya da nesne başına) |
| `COPY` | `CO`, `CP` | Nesneleri, tıkladığınız kadar kopyalar |
| `COPYBASE` |  | Nesneleri, seçtiğiniz bir temel noktayla panoya kopyalar |
| `COPYCLIP` |  | Nesneleri panoya kopyalar (Ctrl+C); PASTECLIP bunları yerleştirir |
| `COUNT` | `BCOUNT` | Blok başvurularını sayar: birini seçin, aynı bloğun her başvurusunu seçip sayar |
| `COUNTTABLE` |  | Blok sayılarından bir tablo yerleştirir |
| `CREDITS` |  | Kitaplık katkı paylarını çizime bir tablo olarak koyar. Tabloyu çizimdeki öğelerden güncellemek için yeniden çalıştırın. |
| `CURSORSIZE` |  | İmlecin boyutu: 100 onu çizimde uçtan uca çalıştırır (Ayarlar › İmleç › Tam ekran) |
| `CUTCLIP` |  | Nesneleri panoya keser (Ctrl+X): kopyalar, sonra siler |
| `CYLINDER` | `CYL` | Bir silindir: merkez, yarıçap ve yükseklik (3B) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blokları, özniteliklerini ve nesne özelliklerini çizimde ya da bir CSV dosyasında tablo olarak listeler |
| `DATALINK` | `DL` | Dosyasını hatırlayan, böylece yeniden okunabilen bir CSV dosyasından tablo |
| `DATALINKUPDATE` | `DLU` | Bir veri bağlantısının dosyasını yeniden okur ve tablolarını yeniden doldurur |
| `DCALIGNED` | `DCALI` | Boyutsal kısıtlama: iki nokta, bir nokta ve bir doğru ya da iki doğru arasında gerçek uzaklık |
| `DCANGULAR` | `DCANG` | Boyutsal kısıtlama: iki doğru arasındaki ya da bir yayın açısı |
| `DCCONVERT` |  | Kısıtlanabilir geometri üzerinde çizilmiş ölçülendirmeleri boyutsal kısıtlamalara dönüştürür |
| `DCDIAMETER` | `DCDIA` | Boyutsal kısıtlama: bir dairenin ya da yayın çapı |
| `DCDISPLAY` |  | Boyutsal kısıtlamaları çizimde gösterir ya da gizler |
| `DCHORIZONTAL` | `DCHOR` | Boyutsal kısıtlama: yatay uzaklık |
| `DCLINEAR` | `DCLIN` | Boyutsal kısıtlama: yatay ya da dikey uzaklık, yerleştirdiğiniz yerden |
| `DCRADIUS` | `DCRAD` | Boyutsal kısıtlama: bir dairenin ya da yayın yarıçapı |
| `DCVERTICAL` | `DCVER` | Boyutsal kısıtlama: dikey uzaklık |
| `DELBLOCKS` |  | Blokları siler: her başvuru (iç içe olanlar da, her sayfada) ve tanımları |
| `DELCONSTRAINT` | `DELCON` | Seçtiğiniz nesnelerden her kısıtlamayı (geometrik ve boyutsal) kaldırır |
| `DELOPENING` |  | Bir kapıyı ya da pencereyi duvardan çıkarır. |
| `DESCRIBE` | `DESC` | Çizimin neler içerdiğini söyler: kaç nesne, hangi türde, ne kadar büyük, neyin seçili olduğu. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Seçimi temizler (Esc) |
| `DETAILS` | `DET` | Firmanızın kendi detayları, çizdiğiniz şeye göre bulunur: bul, bir blok ekle, listele, kaldır, önerileri aç ya da kapat. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Metinden bir diyagram çizer: bir Mermaid akış şeması, bir PlantUML bileşen diyagramı, D2, bir kaynaktan-hedefe listesi ya da draw.io XML, düzenleyebileceğiniz bloklar ve bağlantılar olarak |
| `DIMALIGNED` | `DAL`, `DIMALI` | İki nokta arasında gerçek uzaklık |
| `DIMANGULAR` | `DAN`, `DIMANG` | İki doğru arasındaki, bir yayın ya da üç nokta ile belirlenen açı |
| `DIMARC` | `DAR` | Yay uzunluğu ölçülendirmesi: bir yay boyunca mesafe, yay simgesiyle (DAR) |
| `DIMASZ` |  | Ölçülendirme ayarı: Ok boyutu |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Tek bir taban çizgisinden üst üste ölçülendirmeler |
| `DIMBREAK` | `DBREAK` | Ölçülendirme ve uzatma çizgilerini diğer nesnelerle kesiştikleri yerde keser (Otomatik), iki nokta arasında (El ile) ya da kırılmaları kaldırır |
| `DIMCONSTRAINT` | `DCON` | Boyutsal kısıtlamalar: doğrusal, hizalı, açısal, yarıçap, çap, dönüştür |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Bir ölçülendirme zinciri, her biri bir öncekinin ucundan |
| `DIMDEC` |  | Ölçülendirme ayarı: Ondalık basamak |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Bir yayın ya da dairenin çapı |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Ölçülendirmeleri bağlı oldukları nesnelerden serbest bırakır (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ölçülendirme metnini değiştirir (Giriş, Yeni metin, Döndür) ya da uzatma çizgilerini eğik yapar (Eğik) |
| `DIMEXE` |  | Ölçülendirme ayarı: Ölçülendirme çizgisinin ötesine uzatma |
| `DIMEXO` |  | Ölçülendirme ayarı: Başlangıçtan ofset |
| `DIMGAP` |  | Ölçülendirme ayarı: Metnin çevresindeki boşluk |
| `DIMINSPECT` |  | Muayene ölçülendirmesi: değerin çevresinde bir çerçeve, bir etiket ve parçanın ne sıklıkla kontrol edildiği |
| `DIMJOGGED` | `DJO`, `JOG` | Kırık yarıçap ölçülendirmesi: merkez uzakta olduğunda daha yakın bir noktadan çizilen yarıçap (DJO) |
| `DIMJOGLINE` | `DJL` | Doğrusal ya da hizalı bir ölçülendirme çizgisine kırılma simgesi ekler; mesafenin ölçeğe uygun çizilmediğini gösterir (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Yatay ya da dikey uzaklık (herhangi bir açı için R) |
| `DIMLUNIT` |  | Ölçülendirme ayarı: uzunluk biçimi (1 bilimsel, 2 ondalık, 3 mühendislik, 4 mimari, 5 kesirli) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinat ölçülendirmesi: bir noktanın UCS başlangıcına göre X ya da Y uzaklığı, bir belirtme çizgisi üzerinde (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Seçili ölçülendirmelerde ölçülendirme değişkenlerini stillerini değiştirmeden geçersiz kılar; Temizle stili geri koyar (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Bir yayın ya da dairenin yarıçapı |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Bir ölçülendirmenin noktalarını nesnelere bağlar; onlar hareket ettiğinde ölçülendirme izler ve yeniden ölçer (DRE) |
| `DIMSCALE` |  | Ölçülendirme ayarı: Genel ölçek (boyutlar × bu) |
| `DIMSPACE` |  | Paralel ölçülendirmeler arasında eşit aralık, bir taban ölçülendirmesinden ölçülür (0 hepsini hizalar, Otomatik metin yüksekliğinin iki katıdır) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Adlandırılmış ölçülendirme stilleri yapın, değiştirin, geçerli yapın, silin, uygulayın ve karşılaştırın (iletişim kutusu; komut satırında -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Ölçülendirme metnini ölçülendirme çizgisinin sol, sağ ya da ortasına taşır ya da döndürür |
| `DIMTEXTUNIT` | `DTU` | Ölçülendirme metnini mm, cm, m ya da km cinsinden, ya da çizimin kendi birimlerinde gösterir: seçili ölçülendirmeler, yoksa yeniler (DTU) |
| `DIMTXT` |  | Ölçülendirme ayarı: Metin yüksekliği |
| `DIST` | `DI` | İki nokta arasında uzaklık ve açı |
| `DISTRIBUTE` |  | Seçili nesneleri yan yana ya da yukarı aşağı eşit aralıklarla dağıtır: merkezler arasında eşit adımlar ya da eşit boşluklar; dıştaki iki nesne yerinde kalır |
| `DIVIDE` | `DIV` | DIVIDE (DIV): bir doğruyu, yayı, daireyi, çoklu çizgiyi, spline'ı ya da elipsi eşit parçalara bölen işaretler. Noktalar ya da Blok ile her işarette bir blok. |
| `DOCUMENTS` | `DOCS` | Belgeler panelini açar: bir proje klasörü için çizimleri alır ve geri verir, revizyonlar, yayın durumları ve onay |
| `DOOR` | `DR` | Duvara bir kapı yerleştirir. Tıkladığınız taraf, kapının açılacağı taraftır. |
| `DRAWORDER` |  | Çizim sırasını değiştirir: nesneleri öne getirir, arkaya gönderir ya da diğer nesnelerin üstüne ya da altına koyar. |
| `DUPLICATE` | `DUP` | İmleçle birlikte hareket eden bir kopya: bırakmak için tıklayın (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Çizimin özellikleri: başlık, yazar ve diğerleri ile kendi ad ve değer çiftleriniz |
| `DXFOUT` |  | Çizimi DXF R12 olarak indirir (Kaydet kendi biçimini korur) |
| `EATTEDIT` | `DDATTE` | Bir blok başvurusunun niteliklerini düzenler: değerler, metin ve özellikler, bir seferde bir öznitelik |
| `ELLIPSE` | `EL` | Eksen uç noktaları ve diğer yarı eksen |
| `ERASE` | `E`, `DELETE` | Nesneleri kaldırır |
| `EXPLODE` | `X` | Çoklu çizgileri, blokları ve ölçülendirmeleri parçalarına ayırır |
| `EXPORT` | `EXP` | Bir eklentinin yazdığı bir dosya türünde çizimin bir kopyasını kaydeder |
| `EXPORT3D` | `3DEXPORT` | 3B modeli dışa aktarır: GLB, OBJ ya da STL |
| `EXPORTPOINTS` | `EXPPTS` | Noktaları ve bir özniteliği açıklama olarak taşıyan blok ekleme noktalarını bir CSV ya da TXT dosyasına yazar (PNEZD, PENZD ya da XYZ) BIM ve ölçü programları için |
| `EXTEND` | `EX` | Nesneleri diğerlerine ulaşana kadar uzatır: bir uca yakın tıklayın, birkaçının üzerinden sürükleyin ya da kırpmak için Shift+tıklayın |
| `EXTRIM` |  | EXTRIM: bir kesici kenar, sonra bir taraf seçin. Kenarı kesen her şey o tarafta kırpılır. İmleci hareket ettirirken gidecek parçalar gösterilir. |
| `EXTRUDE` | `EXT` | Kapalı 2B nesneleri katılara ekstrüde eder (3B) |
| `FIELD` |  | Bir metne, bir tablo hücresine ya da bir özniteliğe bir alan koyar: tarih, dosya adı, sayfa numarası, bir çizim özelliği, bir nesnenin alanı ya da uzunluğu, ya da bir formül |
| `FILLET` | `F` | İki nesne arasındaki köşeyi yuvarlatır ya da keser (R yarıçap, P çoklu çizgideki her köşe, M birkaç) |
| `FIND` |  | Metindeki, öznitelik değerlerindeki ve ölçülendirme metnindeki sözcükleri bulur ve değiştirir |
| `FLATTEN` |  | Seçili nesnelerin yüksekliğini (Z) ve kalınlığını 0 yapar; kullandıkları bloklarda da. |
| `FLOOR` |  | Çizilecek katı seçer, bir tane ekler ya da seçimi birine taşır ya da kopyalar. |
| `FLOORLAYERS` |  | Katları Kat-Katman adlı katmanlara çevirir; katsız birine gidecek bir dosya için. |
| `FLOORS` | `FLR` | Katlar panelini açar: katları tek bir model uzayında üst üste koyar. |
| `GCCOINCIDENT` |  | Kısıtlama: iki nokta birleşir ya da bir nokta bir nesnenin üzerinde kalır |
| `GCCOLLINEAR` |  | Kısıtlama: iki doğru aynı doğru üzerinde kalır |
| `GCCONCENTRIC` |  | Kısıtlama: iki daire ya da yay aynı merkezi paylaşır |
| `GCEQUAL` |  | Kısıtlama: iki doğru aynı uzunlukta kalır ya da iki daire/yay aynı yarıçapta |
| `GCFIX` |  | Kısıtlama: bir nokta ya da tüm bir nesne olduğu yerde kalır |
| `GCHORIZONTAL` |  | Kısıtlama: bir doğru (ya da iki nokta) yatay kalır |
| `GCPARALLEL` |  | Kısıtlama: iki doğru paralel kalır |
| `GCPERPENDICULAR` |  | Kısıtlama: iki doğru dik açıda kalır |
| `GCSYMMETRIC` |  | Kısıtlama: iki nokta, doğru ya da daire bir doğrunun iki yanında birbirinin aynası olur |
| `GCTANGENT` |  | Kısıtlama: bir doğru ile bir daire ya da yay (ya da ikisi) teğet kalır |
| `GCVERTICAL` |  | Kısıtlama: bir doğru (ya da iki nokta) dikey kalır |
| `GDSIN` | `GDS` | Bir IC yerleşimini (GDSII akış dosyası) görüntüler: her katman ve veri türü bir çizim katmanı olarak, düz, kullanıcı biriminde; yalnızca görüntüleme ve ölçüm için (laboratuvar denemesi) |
| `GEOMCONSTRAINT` | `GCON` | Geometrik kısıtlamalar: yatay, dikey, paralel, teğet, çakışık… |
| `GLBOUT` |  | 3B modeli GLB (glTF) olarak dışa aktarır |
| `GRADIENT` | `GD` | Bir alanı bir ya da iki renkten oluşan bir geçişle doldurur |
| `GRID` |  | Izgarayı ayarlar: çizgiler arası mesafe, her N'inci çizginin ana çizgi olması, AÇIK ya da KAPALI, ya da yakınlaştırmayı yeniden izlemek için Otomatik |
| `GRIDMOVE` | `GM` | Bir ızgara çizgisini taşır ve ona bağlı olanları da taşır: duvarlar gerilir, kolonlar, balonlar ve etiketler taşınır, ölçülendirmeler izler. |
| `GROUP` | `G` | GROUP (G): seçili nesnelere ortak bir ad verir. Bunlardan birine tıklamak hepsini seçer. Ad yerinde Enter adsız bir grup yapar. |
| `GROUPEDIT` |  | GROUPEDIT: bir grubu değiştirir. Nesnelerinden birini seçin ya da adını verin, sonra Nesne ekle ya da Nesne kaldır, YENİDEN ADLANDIR, açıklamasını değiştir ya da bir tıklamanın grubu bütün olarak seçip seçmeyeceğini belirleyin. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Bir alanı katı bir dolguyla ya da bir desenle doldurur: içine tıklayın ya da kapalı nesneleri seçin (H) |
| `HATCHEDIT` | `HE` | Bir taramayı değiştirir: desen, ölçek, açı, başlangıç ve bir sınıra bağlantısı. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Bir taramadan sınır çoklu çizgilerini yeniden üretir; ona bağlı olsun ya da olmasın |
| `HATCHTOBACK` |  | Her taramayı diğer her şeyin arkasına gönderir. |
| `HELP` | `?` | Bu liste |
| `HIDEOBJECTS` |  | UNISOLATEOBJECTS'e kadar seçili nesneleri gizler. Çizimle birlikte kaydedilmez. |
| `HISTORY` | `HIST` | HISTORY (HIST): bu çizimin sürümleri — Studio kaydettiğinde bu bilgisayarda tutulan kopyalar ve bulutun sürümleri — açmak, geri yüklemek ve değişenleri renkle göstererek karşılaştırmak için. |
| `ID` |  | Bir noktanın koordinatları |
| `IMAGE` | `IM` | CadCraft'a çizimin kullandığı resim dosyalarını verir (bir DWG yalnızca nerede olduklarını saklar). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Bir dosyadan bir resim (PNG ya da JPEG) yerleştirir. |
| `IMAGECLIP` | `ICL` | Bir resmi bir dikdörtgene ya da çokgene kırpar ya da kırpmasını kaldırır. |
| `IMPORT` | `IMP` | Bir eklentinin okuduğu türde bir dosyayı bu çizime içe aktarır |
| `INSERT` | `I`, `DDINSERT` | Bir blok yerleştirir (S ölçek, R döndür); DWG/DXF dosyasından F, kitaplıktan L |
| `INTERSECT` | `IN` | Katıların ortak olanını ya da 2B bölgelerin paylaştığı alanı korur (3B) |
| `ISODRAFT` |  | ISODRAFT: izometrik çizim açık ya da kapalı, ya da doğrudan Sol, Üst ya da Sağ düzleme. Açıkken Ortogonal ve kutupsal izleme düzlemin iki eksenini izler, ızgara izometrik çizilir ve ELLIPSE'de Isocircle bulunur. |
| `ISOLATEOBJECTS` | `ISOLATE` | Yalnızca seçili nesneleri gösterir; bu alandaki diğer her şey UNISOLATEOBJECTS'e kadar gizli kalır. Çizimle birlikte kaydedilmez. |
| `ISOPLANE` |  | ISOPLANE: izometrik çizimin yapılacağı düzlemi seçer: Sol, Üst ya da Sağ. Enter bir sonrakine geçer; izometrik çizim açıkken F5 ile aynıdır. |
| `JOIN` | `J` | Uçtan uca buluşan doğruları, yayları ve çoklu çizgileri tek bir çoklu çizgide birleştirir; tek doğru üzerindeki doğruları tek bir doğruda (J) |
| `LASER` | `LASERCUT` | Lazer panelini açar: katmanları bir lazer kesiciye ya da gravüre gönderir (GRBL G-kodu) |
| `LASSOMODE` |  | Basıp sürüklemek bir kement (1) ya da bir dikdörtgen (0) çizer |
| `LAYDEL` |  | Bir katmanı ve üzerindeki her nesneyi siler (modelde, sayfalarda ve bloklarda) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Katman yöneticisini açar: her katman tek bir tabloda |
| `LAYERPANEL` |  | Katmanlar panelini gösterir |
| `LAYFRZ` |  | Seçtiğiniz her nesnenin katmanını dondurur |
| `LAYGROUP` | `LG` | Katmanları Katmanlar panelinde klasörlere gruplar. |
| `LAYISO` |  | Seçili nesnelerin katmanlarını yalıtır (diğer her katman kapalı) |
| `LAYLOCKFADE` |  | Kilitli katmanlardaki nesnelerin ne kadar soluklaşacağını ve bir tıklamanın onları seçip seçemeyeceğini belirler. |
| `LAYMCUR` |  | Seçtiğiniz nesnenin katmanını geçerli yapar |
| `LAYMRG` |  | Katmanları birleştirir: nesneleri hedef bir katmana taşınır ve birleşen katmanlar kalkar |
| `LAYOFF` |  | Seçtiğiniz her nesnenin katmanını kapatır |
| `LAYON` |  | Her katmanı açar |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Bir künye ve bir görünüm penceresi içeren yeni bir sayfa |
| `LAYTHW` |  | Her katmanı çözer |
| `LAYUNISO` |  | LAYISO'nun kapattığı katmanları yeniden açar |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Eski Vietnamca yazı tipleriyle yazılmış metni (TCVN3 / .VnTime gibi ABC yazı tipleri ve VNI-Times gibi VNI yazı tipleri) Unicode'a çevirir. Bu metin zaten okunduğu gibi gösterilir; bu komut onu kalıcı olarak yeniden yazar, bir sayım ve tek bir geri al adımıyla. |
| `LENGTHEN` | `LEN` | Doğruları, yayları ve çoklu çizgileri uzatır ya da kısaltır: bir miktar, bir yüzde, bir toplam ya da sürükleyerek (LEN) |
| `LIBRARY` | `LIB` | Kitaplık paneli: öğeleri yerleştirin, güncellemeleri kontrol edin, katkı payları |
| `LIMITS` |  | Çizim sınırlarını belirler: AÇIK, KAPALI ya da sol alt ve sağ üst köşeler. Sınırlar AÇIKken dışındaki noktalar reddedilir |
| `LINE` | `L` | Düz parçalar, her biri kendi nesnesi |
| `LINETYPE` | `LT`, `CELTYPE` | Yeni nesnelerin alacağı çizgi tipi (katmana göre, bloğa göre ya da adlandırılmış) |
| `LINKVIEWS` | `SYNCVIEWS` | Her bölmeyi birlikte kaydırır ve yakınlaştırır (bölünmüş ekran), iki çizimi ya da revizyonu karşılaştırmak için |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ya da VLIDE) LISP düzenleyicisini açar: bir rutin yazmak, yüklemek ve denemek için bir pencere. Çizime yükle her formu okur, APPLOAD ile dosyayı yüklerken olduğu gibi, ve komutlarını oluşturur. Seçimi çalıştır seçili formları ya da imlecin içinde olduğu formu değerlendirir. Konsol, rutinin yazdırdığını ve her hatayı satır numarasıyla gösterir. Yazarken karşılık gelen parantez işaretlenir, Enter yeni satırı girintiler. Yeni, Aç ve Kaydet bir .lsp dosyasıyla çalışır. Metnin yanındaki listeler rutinin tanımladığı işlevleri, henüz bu LISP'de olmayan çağırdığı işlevleri ve bu LISP'in sahip olduğu her işlevi gösterir. Pencere çizimi engellemez, bu yüzden bir rutin nokta isteyebilir; Durdur ya da Esc çalışan bir rutini sonlandırır. |
| `LIST` | `LI`, `LS` | Nesneleri geçmişte tanımlar |
| `LTSCALE` | `LTS` | Çizimin çizgi tipi ölçeği (her çizgi ve boşluk bununla çarpılır) |
| `LWDISPLAY` | `LWT` | Çizgi kalınlıklarını ekranda gösterir ya da gizler (durum çubuğundaki LWT düğmesi) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Yeni nesnelerin alacağı çizgi kalınlığı (katmana göre, bloğa göre, varsayılan ya da mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Model uzayının altındaki harita katmanları: çizimin koordinat sistemi, döşemeler, WMS, WMTS, ArcGIS, resimler |
| `MASSPROP` |  | MASSPROP: seçtiğiniz bölgelerin ve kapalı nesnelerin kesit özellikleri: alan, çevre, merkez, eylemsizlik momentleri ve çarpımı, dönme yarıçapları ve asal eksenler. Doğrular ve yaylar için kesindir. Raporu bir metin dosyasına yazabilir. |
| `MATCHPROP` | `MA`, `PAINTER` | Özellikleri eşleştirir: bir nesnenin katmanını, rengini ve daha fazlasını diğerlerine kopyalar (MA) |
| `MEASURE` | `ME` | MEASURE (ME): bir doğru, yay, daire, çoklu çizgi, spline ya da elips boyunca, seçtiğiniz noktaya en yakın uçtan başlayarak, verilen her uzunlukta bir işaret. Noktalar ya da Blok ile her işarette bir blok. |
| `MEASUREGEOM` | `MEA` | Bir uzaklığı, bir yarıçapı, bir açıyı ya da bir alanı ölçer (MEA) |
| `MINSERT` |  | MINSERT: bir bloğu tek seferde satır ve sütunlarda yerleştirir. Her biri kendi başvurusudur; birini taşıyabilir ya da silebilirsiniz. |
| `MIRROR` | `MI` | Nesneleri bir doğrunun iki yanında aynalar |
| `MLEADER` | `MLD`, `MLEAD` | Çoklu belirtme çizgisi: bir ok, bir belirtme çizgisi ve bir not, tek bir nesne olarak (MLD) |
| `MLEADERALIGN` | `MLA` | Çoklu belirtme çizgilerini, birini referans alarak, bir yön boyunca eşit aralıkla hizalar ya da iki nokta arasında dağıtır (MLA) |
| `MLEADERCOLLECT` | `MLC` | Birkaç çoklu belirtme çizgisini tek birine toplar: blokları bir satır ya da sütunda, notları birinin altına bir başkasının (MLC) |
| `MLEADEREDIT` | `MLE` | Bir çoklu belirtme çizgisine belirtme çizgileri ekler ya da onları kaldırır; içeriğini metin ile blok arasında değiştirir (MLE) |
| `MLINE` |  | Paralel doğruları köşelerde birleştirerek birlikte çizer. |
| `MOVE` | `M` | Nesneleri bir temel nokta ve ikinci bir nokta ile taşır |
| `MSPACE` | `MS` | Açık sayfanın bir görünüm penceresi üzerinden modelde çalışır (ya da görünüm penceresinin içine çift tıklayın). |
| `MTEXT` | `MT`, `T` | Paragraf metni: genişliğini sürükleyin, sonra yerinde yazın; Enter yeni bir paragraf başlatır (T) |
| `MVIEW` | `MV` | Bir düzen üzerinde modele bir görünüm penceresi |
| `NAMEDVIEW` | `NV`, `VIEWS` | Adlandırılmış görünümler: ekrandaki görünümü (ya da bir pencereyi) bir adla kaydedin ve ona geri dönün (NV) |
| `NCOPY` |  | Bir blok başvurusundan ya da bağlı bir çizimden nesneleri, patlatmadan çizime kopyalar. |
| `NEARBY` |  | İmlecin yakınında neyin olduğunu, en yakından başlayarak, uzaklığı ve tarafıyla söyler. |
| `NEW` |  | Yeni bir çizim başlatır |
| `OBJECTSCALE` | `OBJSCALE` | Açıklamalı yazı ve ölçülendirmelerin açıklama ölçekleri: bir ölçek ekler, birini siler, geçerli ölçeği ekler ya da listeler (her görünüm penceresi kendi ölçeği için boyutta gösterir) |
| `OBJOUT` |  | 3B modeli OBJ olarak dışa aktarır |
| `OFFICESTANDARD` | `OFFSTD` | Ofis standardı: kâğıt üzerindeki metin yükseklikleri, katmanlar, künye alanları ve şablonlar tek bir kayıtta. Yürürlükteki standardı ve nereden geldiğini gösterir; bir .json kaydını bu çizime İçe aktar, çizimin eksik ofis katmanlarını ekle, künye alanlarını listele. |
| `OFFSET` | `O` | Bir mesafede paralel kopyalar |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: OFFSET, bir çoklu çizginin dış köşelerindeki boşlukları nasıl kapatır. 0 parçaları uzatır, 1 bir yay ekler, 2 düz bir kesim ekler. Bu oturum için tutulur. |
| `OLELIST` | `OLES` | Bir çizimin taşıdığı OLE nesnelerini listeler ve birinin resminin bir kopyasını istediğiniz yere koyar |
| `OPEN` |  | Bu bilgisayardan bir DWG ya da DXF açar |
| `OPENIN3D` |  | Bu çizimi 3B modelleme uygulamasında yeni bir sekmede açar (hiçbir şey yüklenmez) |
| `OPTIONKEYS` | `OPTKEYS` | Komut seçeneklerine kendi harflerinizi verir (ARRAY.PO, P), tek bir metin dosyasında |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Nesne yakalama menüsünü açar: hangi yakalamaların açık olacağını seçin. Ayrıca durum çubuğundaki Yakala üzerinde sağ tıklama. |
| `OVERKILL` |  | Yinelenen nesneleri siler; bir tolerans içinde üst üste binen ya da uçtan uca doğruları ve yayları birleştirir. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametreler paneli: kullanıcı parametreleri ve boyutsal kısıtlamalar tek bir tabloda |
| `PARTSLIST` | `PLIST` | Kitaplıktan yerleştirilmiş her standart parça ve çelik profilin parça listesi tablosu |
| `PASTEAREA` | `PAREA` | MarkupCraft'ta kopyalanmış bir alanı (Alanı kopyala) gerçek boyutunda, bir resim olarak yapıştırır. |
| `PASTEBLOCK` |  | PASTEBLOCK: kopyaladığınızı tek bir blok olarak yapıştırır. Bloğun kendi adı olur; RENAME ona sizinkini verir. |
| `PASTECLIP` |  | Panoyu yapıştırır: imleci takip eder, gideceği yere tıklayın (Ctrl+V) |
| `PASTEORIG` |  | Panoyu, kopyalandığı koordinatlarda yapıştırır (Ctrl+Shift+V) |
| `PDF` |  | Çizimin altlık olarak kullandığı PDF dosyalarını CadCraft'a verir |
| `PDFADJUST` |  | Bir PDF altlığını soluklaştırır, kontrastını ayarlar, tek renk yapar ya da kapatır |
| `PDFATTACH` | `PDFATT` | Bir PDF sayfasını altlık olarak ekler (PDFATTACH) |
| `PDFCLIP` |  | Bir PDF altlığını bir dikdörtgene ya da çokgene kırpar |
| `PDFIMPORT` | `PDFIM` | Bir PDF sayfasının çizgilerini, dolgularını ve metnini çizim nesnelerine çevirir (PDFIMPORT) |
| `PDFLAYERS` |  | Bir PDF altlığının katmanlarını açar ya da kapatır |
| `PEDIT` | `PE` | Bir çoklu çizgiyi düzenler: kapat, aç, birleştir, genişlik, eğri uydur, spline eğrisi, eğriyi düzleştir, çizgi tipi üretimi, ters çevir; doğrular, yaylar ve spline'lar çoklu çizgiye çevrilebilir |
| `PENPRESSURE` |  | Bir kalem vuruşunun basıncının SKETCHFIX ve SKETCHLIVE'ın yaptıklarının çizgi kalınlığını belirleyip belirlemeyeceği (varsayılan açık). Bu tarayıcıda tutulur. |
| `PHOTOSKETCH` | `PSK` | Bir kağıt üzerindeki el çiziminin fotoğrafını, ölçekte çizgi ve yaylara çevirir; perspektifi düzeltir ve her kalem rengine kendi katmanını verir. |
| `PICKSTYLE` |  | PICKSTYLE: bir grubun tek bir nesnesini seçmek tüm grubu mu (1, başlangıç ayarı) yoksa yalnızca o nesneyi mi (0) seçer. Bu oturum için tutulur. |
| `PLAN` |  | Görünümü, UCS X ekseni (Geçerli ucs, kayıtlı bir Ucs ya da Dünya) ekranda yatay olacak şekilde döndürür. Çizimdeki hiçbir şey taşınmaz. |
| `PLINE` | `PL` | Doğru ve yay parçalarından oluşan bir çoklu çizgi |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF'e çıktı alır: bir sayfa ya da modeli bir ölçekte |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Çıktı stili tabloları: her rengin nasıl basılacağını belirler (renk, siyah, gri, mürekkep, çizgi kalınlığı); çizimle birlikte tutulur (STYLESMANAGER) |
| `POINT` | `PO` | Nokta nesneleri |
| `POINTCLOUD` | `PC` | Eklenmiş nokta bulutu: dilim, yükseklik, kalınlık, renk, boyut, görünür, yakınlaştırma, ayır |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Çizimin altına bir nokta bulutu ekler (LAS, LAZ, XYZ, PTS) |
| `POLARANG` |  | Kutupsal izleme adımı derece cinsinden (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Düzenli bir çokgen |
| `PRESSPULL` |  | Katı bir yüzeyi iter ya da çeker (3B) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Özellikler panelini açar (ayrıca Ctrl+1 ya da bir nesneye çift tıklama) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Özellikler panelini pencerenin kenarına katlar |
| `PSPACE` | `PS` | Çalıştığınız görünüm penceresinden çıkar ve sayfaya döner (ya da dışına çift tıklayın). |
| `PUBLISH` | `-PUBLISH` | Birkaç ya da tüm sayfaları tek bir PDF'e çıktı alır (sayfa başına bir sayfa ve bir yer imi) |
| `PURGE` | `PU` | Hiçbir yerde kullanılmayan blok tanımlarını kaldırır |
| `QDIM` |  | Hızlı ölçülendirme: birçok nesneyi bir kerede ölçülendirir (sürekli, taban, kademeli, koordinat, yarıçap ya da çap) |
| `QPMODE` | `QP` | İmleçle Hızlı Özellikler açık ya da kapalı |
| `QSELECT` | `QS` | Hızlı seçim: katmanı, rengi, boyutu ya da adı eşleşen bir türdeki her nesne (QS) |
| `RASTERSNAP` |  | Taranmış sayfaların çizgilerine yakalamayı açar ya da kapatır. |
| `RAY` |  | Işın: bir noktadan tek yöne sonsuz uzanan bir yapı çizgisi. |
| `RECOVER` |  | Hasarlı bir DXF ya da DWG'yi açar: okunamayanı atlar, dosyayı reddetmek yerine atlanan şeyleri bildirir, sonra AUDIT gibi kontrol eder ve onarır. |
| `RECTANG` | `REC`, `RECTANGLE` | İki köşeden kapalı bir çoklu çizgi |
| `REDLINE` | `RDL` | Revizyona kırmızı kalem: bir MarkupCraft kırmızı kalem paketini okur, her değişikliği kabul eder ya da reddeder, kabul edilenleri bir revizyon günlüğüyle revizyon bulutu yapar ve yanıt dosyasını kaydeder (RDL) |
| `REDO` |  | Geri alınanı yineler |
| `REFCLOSE` |  | Bir bloğu yerinde düzenlemeyi bitirir: kaydeder ya da değişiklikleri atar |
| `REFEDIT` |  | Bir bloğu, başvurusunun bulunduğu yerde düzenler; çizimin geri kalanı soluk olur; REFCLOSE kaydeder |
| `REGEN` | `RE` | Bu sekmede çizilenleri çizimden yeniden oluşturur |
| `REGENALL` | `REA` | Her sekmede, bölmede ve açık çizimde çizilenleri yeniden oluşturur |
| `REGION` | `REG` | REGION (REG): kapalı nesnelerden ya da uçtan uca bir döngü kapatan doğrulardan, yaylardan ve çoklu çizgilerden düz alanlar (bölgeler) yapar. UNION, SUBTRACT ve INTERSECT bölgeleri birleştirir; MASSPROP onların kesit özelliklerini verir. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Birkaç taramayı kaydeder: seçilen nokta çiftleri ya da hedeflerle tek bir çerçeveye yerleştirir, ICP ile iyileştirir, tek bir LAS ya da E57 dışa aktarır |
| `REINIT` |  | Takma ad dosyanızı yeniden yükler |
| `RENAME` | `-RENAME`, `REN` | Bir katmanın ya da bir bloğun adını değiştirir (her nesne ya da başvuru izler) |
| `REVCLOUD` | `RC` | Revizyon bulutu: bir dikdörtgeni, bir çokgeni, serbest bir yolu ya da bir nesneyi yuvarlar (RC) |
| `REVOLVE` | `REV` | Kapalı 2B nesneleri bir eksen etrafında döndürerek katılar yapar (3B) |
| `ROTATE` | `RO` | Nesneleri bir temel nokta etrafında döndürür |
| `SAMPLES` | `SAMPLE` | CadCraft'ın örnek çizimlerinden birini (bir mimari takım, bir uygulanmış çizim) açıp öğrenmek için |
| `SAVE` | `QSAVE` | Çizimi kendi biçiminde (DWG ya da DXF) indirir |
| `SAVEAS` |  | Çizimi DWG ya da DXF olarak indirir: hangisini seçin |
| `SAYSEL` |  | Seçili olanları, nesne başına bir cümleyle söyler. |
| `SCALE` | `SC` | Nesneleri bir temel nokta etrafında ölçekler |
| `SCALELISTEDIT` | `SCALELIST` | Çizimin kendi ölçeklerini ekler, düzenler ve siler; görünüm penceresi ve çıktı ölçek listelerinde görünürler ve dosyada kaydedilirler (SCALELIST) |
| `SCANALIGN` | `SCL` | Taranmış bir sayfayı iki noktaya hizalar: taşır, döndürür ve isterseniz ölçekler. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Taranmış bir çizim ekler: bir PNG, JPEG ya da TIFF (çok sayfalı bir dosyanın bir ya da tüm sayfaları) ya da bir resim olan bir PDF sayfası. |
| `SCANCLEAN` | `SCC` | Taranmış bir sayfayı siyah beyaz yapar ve lekeleri kaldırır. |
| `SCANCROP` | `SCR` | Taranmış bir sayfayı bir pencereye kırpar. |
| `SCANDESKEW` | `SCD` | Taranmış bir sayfanın uzun çizgilerinin açısını bulur ve açıyı kabul ettiğinizde sayfayı dik çevirir. |
| `SCANERASE` | `SCE` | Taranmış bir sayfanın bir alanını siler: bir dikdörtgen, bir çokgen ya da bir kement. |
| `SCANINFO` | `SCI` | Taranmış bir sayfanın özgün dosyasını ve o zamandan beri atılan adımları gösterir. |
| `SCANSCALE` | `SCS` | Taranmış bir sayfayı ölçekler: üzerinde iki nokta seçin ve aralarındaki gerçek uzaklığı yazın. |
| `SCANTRACE` | `SCT` | Taranmış bir sayfayı yeni bir katmanda doğru ve yaylara çevirir; sizin belirlediğiniz bir toleransla. Metin ve taralama raster olarak kalır. |
| `SELECT` |  | Şimdi nesneleri seçer (sonraki komutta P, Önceki için) |
| `SELECTALL` | `AI_SELALL` | Bu sekmede düzenleyebileceğiniz her nesneyi seçer (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seçtiklerinize benzeyen her nesneyi seçer: aynı tür, katman ve renk (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Sayfa Takımı panelini gösterir: birçok çizimden sayfalar, numaralı, tek bir PDF olarak yayınlanır. |
| `SHORTCUTS` | `KEYS` | Herhangi bir komuta kendi tuşunuzu verir (harf ile Ctrl ya da Alt, ya da boş bir işlev tuşu), bu tarayıcıda ya da masaüstü uygulamada tutulur. |
| `SHXFONTS` | `SHX` | Bir klasörden ya da dosyalardan kendi SHX yazı tiplerinizi verin; bunları adlandıran metin stilleri onlarla çizilir (listele, kaldır, ters çevir) |
| `SKETCHFIX` | `SKF` | Serbest el vuruşlarını çizer; her biri temiz bir doğru, daire, yay, dikdörtgen ya da çoklu çizgi olur; köşeleri kare yapılır ve diğerlerine birleştirilir. |
| `SKETCHLIVE` | `SKL` | Kalemle çizim: her vuruş kalemi kaldırdığınızda hassas bir doğru, daire, yay ya da dikdörtgen olur; çizime yakalanır ve üzerine yazabileceğiniz bir boyutla gelir. |
| `SPLINE` | `SPL` | Noktalardan geçen bir spline çizer (ya da bir kontrol çokgeniyle), ya da bir çoklu çizgiyi spline'a çevirir |
| `SPLINEDIT` | `SPE` | Bir spline'ı düzenler: noktalarını, kontrol noktalarını ve ağırlıklarını uydurur, açar ya da kapatır, ters çevirir ya da bir çoklu çizgiye dönüştürür |
| `SPLIT` |  | Çizim alanını bölmelere ayırır (modelde VPORTS gibi; bir sayfadan da) |
| `STEELMEMBER` | `SMEMBER` | Standart bir profilden 3B bir çelik eleman: iki nokta (bir kiriş) ya da bir taban noktası ve bir yükseklik (Kolon) |
| `STLOUT` |  | 3B modeli STL olarak dışa aktarır (milimetre) |
| `STRETCH` | `S` | Gerdir: uçların üzerinde kesişen bir pencereyi sürükleyerek taşır; içindekiler taşınır, geri kalanı yerinde kalır (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Metin stilleri: yeni metnin alacağı yazı tipi, yükseklik, genişlik ve eğim (iletişim kutusu; komut satırında -STYLE) |
| `SUBTRACT` | `SU` | Katıları diğerlerinden çıkarır (3B), ya da 2B bölgeleri bölgelerden çıkarır |
| `SWBOUT` | `SWMACRO` | SolidWorks için bir makro (.swb) indirir; modeli tek bir kısıtlı eskiz olarak yeniden kurar |
| `SWEEP` |  | Kapalı 2B nesneleri bir yol boyunca (doğru, çoklu çizgi, yay, daire) süpürerek katılar yapar (3B) |
| `TABLE` | `TB` | Bir tablo yapar: satır ve sütunlar, ya da panodaki ya da bir CSV dosyasındaki e-tablo hücrelerinden |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Bir tabloyu düzenler: bir hücreye yazın, satır ve sütun ekleyin ve silin, boyutlar, birleştirilmiş hücreler, hizalama |
| `TABLEEXPORT` |  | Bir tablonun gösterdiklerini CSV dosyası olarak kaydeder |
| `TABLEPASTE` | `PASTETABLE` | Panodaki e-tablo hücrelerinden bir tablo yapar |
| `TABLESTYLE` | `TS` | Tablo stilleri: başlık, üstbilgi ve veri satırları için metin yükseklikleri, hizalama, kenar boşluğu ve kenarlıklar |
| `TAGS` |  | Blok başvurularındaki etiketler: bir etiket tanımlayın (tür, izin verilen değerler, uyduğu bloklar), seçili başvurulara koyun ve CSV olarak kaydedebileceğiniz bir liste yapın |
| `TEXT` | `DT`, `DTEXT` | Tek satırlık metin; Enter bir sonraki satırı başlatır |
| `TEXTEDIT` | `ED`, `DDEDIT` | Metni yerinde düzenleyin: bir metin seçin (ya da çift tıklayın) (ED) |
| `TEXTMASK` | `TMASK` | Metinlerin arkasına bir arka plan maskesi koyar (çizimin arka planı ya da bir renk) ya da onu kaldırır. |
| `TEXTTOFRONT` |  | Tüm metinleri, ölçülendirmeleri ve belirtme çizgilerini diğer her şeyin önüne getirir. |
| `TOOLBAR` |  | Araç çubuğu düğmelerinin neyi göstereceğini seçin: simgeler ve metin, yalnızca simgeler ya da yalnızca metin (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Araç çubuğunu pencerenin üstüne, altına, soluna ya da sağına yerleştirir |
| `TOOLBARROWS` |  | Araç çubuğunun kaç satır kullanacağını seçin: sığacak şekilde sar, 2 ya da 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Çizimin üstündeki çubukları standart ya da kompakt yapar |
| `TOUCHCROSSHAIR` | `TCX` | Parmakla çizim için ofset artı imleci: bir parmak, yanında ve üstünde duran bir artı işaretini hareket ettirir, böylece parmak seçilen noktayı kapatmaz. Parmağı kaldırmak hiçbir şey seçmez; Tıkla düğmesi ya da ikinci bir parmakla dokunmak artı işaretinde seçer, Tıkla'yı basılı tutarak hareket ettirmek sürükler. Uzun basış ya da Enter düğmesi Enter'dır. İki parmak kaydırır ve yakınlaştırır. Seçenekler: AÇIK, KAPALI, Otomatik (yalnızca parmak tek işaretçi olduğunda açık), Mesafe, Taraf. |
| `TOUR` | `TUTORIAL` | İlk çizim turunu (altı adım) yeniden başlatır |
| `TRIM` | `TR` | Nesneleri diğerlerinin kesiştiği yere kadar kırpar: bir parçaya tıklayın, birkaçının üzerinden sürükleyin ya da uzatmak için Shift+tıklayın |
| `TRIMEXTENDMODE` |  | TRIM ve EXTEND nasıl başlar: 1 Hızlı (her nesne bir kesici kenar ya da sınırdır), 0 Standart (önce kenarları seçersiniz) |
| `TTR` |  | Verdiğiniz yarıçapla iki nesneye teğet bir daire (CIRCLE T ile aynı). |
| `TURNLEFT` |  | Görünümü 90° sola döndürür (saat yönünün tersine): UCS Z -90, ve görünüm izler. Çizimdeki hiçbir şey taşınmaz. |
| `TURNRIGHT` |  | Görünümü 90° sağa döndürür (saat yönünde): UCS Z 90, ve görünüm izler. Çizimdeki hiçbir şey taşınmaz. |
| `TURNWORLD` |  | Dünyaya dönüş: UCS Dünya, ve görünüm yeniden yatay olur. |
| `TXT2MTXT` | `T2M` | Tek satırlık metinleri tek bir paragraf metninde yukarıdan aşağıya birleştirir. |
| `UCS` |  | Kendi koordinat sisteminiz: bir başlangıç ve bir X ekseni (başlangıç, Z açısı, 3nokta, NEsne, Önceki, Dünya, ADlandırılmış). Yazdığınız noktalar, ortogonal, kutupsal izleme, ızgara ve yeni metin buna uyar; görünüm X ekseni yatay olacak şekilde döner. Çizimdeki hiçbir şey taşınmaz. |
| `UNDO` | `U` | Son komutu geri alır |
| `UNGROUP` |  | UNGROUP: grupları söker. Grupların nesnelerini seçin ya da bir Ad verin. Nesneler çizimde kalır. |
| `UNION` | `UNI` | Katıları tek bir katıda birleştirir (3B) ya da 2B bölgeleri tek bir bölgede |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS ya da HIDEOBJECTS ile gizlenmiş her nesneyi yeniden gösterir. |
| `UNITS` | `UN`, `DDUNITS` | Uzunluklar nasıl gösterilir ve yazılır: ondalık, fit ve inç, kesirler (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Alanları yeniden hesaplar ve kendiliğinden ne zaman güncelleneceklerini seçer |
| `USDOUT` |  | 3B modeli USD olarak dışa aktarır (.usda metin, .usdc ikili ya da bir .usdz paketi) |
| `VIEW` | `-VIEW`, `V` | Standart 3B görünümler, perspektif ya da paralel (3B) |
| `VIEWBASE` | `FLATSHOT` | Bir sayfaya ya da modele 3B katıların düz bir 2B görünümünü yerleştirir (ön, üst, yan ya da izometrik; gizli çizgiler kesikli) |
| `VIEWLABEL` | `VL` | Bir sayfada, görünüm penceresinin görünüm adını gösteren ve onunla değişen bir görünüm başlığı. |
| `VOICE` |  | Sesli komutları açar ya da kapatır. Bu bilgisayarda tanınırlar. |
| `VPCLIP` |  | Bir sayfa görünüm penceresini kapalı bir nesneye ya da çizilmiş bir çokgene kırpar; Delete onu yeniden bir dikdörtgen yapar |
| `VPLAYER` |  | Katmanları yalnızca bazı görünüm pencerelerinde dondurur ya da çözer (Dondur, Çöz, Sıfırla) ve hangi katmanların yeni görünüm pencerelerinde donmuş başlayacağını seçer (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Çizim alanını her biri kendi görünümüyle bölmelere ayırır (bir sayfada: MVIEW gibi bir görünüm penceresi) |
| `VPVIEW` |  | Bir görünüm penceresinin neyi göstereceğini belirler: modelde bir pencere seçin |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3B görünümün görsel stili: gölgeli, kenarlar, gizli çizgi, tel kafes, X-ışını |
| `WALL` | `WA` | 2B duvarları çoklu çizgi gibi çizer. Birleşirler ve kapı ve pencere taşırlar. |
| `WALLARC` | `WARC` | Bir duvar yayı çizer. Plan duvarları düzdür, bu yüzden yay kısa düz duvarlar olarak (her biri 15 derece) birleşecek şekilde çizilir. |
| `WALLDELSEG` |  | İki nokta arasındaki bir duvar parçasını siler. Kalan kısım bir ya da iki duvar olarak kalır. |
| `WALLDIM` |  | Bir ölçülendirme için yeni bir değer yazın: uzak uçtaki duvar kendine dik taşınır, ilk uçtaki duvar yerinde kalır ve ona birleşen duvarlar izler. |
| `WALLDISJOIN` |  | Bir ucuna yakın bir duvarı seçerek o uçta birleşmeleri yasaklayın: uç dik çizilir ve hiçbir şey onu izlemez. Yeniden seçerek birleşmelere izin verin. |
| `WALLGRID` |  | Bir duvarı bir ızgara çizgisine kilitleyin: boyunca ya da bir ucu üzerinde. Çizgiyi GRIDMOVE ile taşıyın, duvar izler. |
| `WALLHOLD` |  | Hizalar ve kilitler: bir duvar, başka bir duvara karşı yerini korur (onun doğrusunda ya da sahip olduğu mesafede). Biri hareket ederse diğeri izler. |
| `WALLHOLDDIM` |  | İki paralel duvar arasındaki mesafeyi kilitleyin. Biri hareket ederse diğeri, mesafeyi korumak için izler. |
| `WALLHOLDS` |  | Duvarlardaki kilitleri listeler. |
| `WALLJOINS` |  | Eski bir çizimin her duvarına kimliğini verir ve aralarındaki birleşimleri kaydeder. Bu, yaptığınız ilk değişiklikte de olur. |
| `WALLJOINSTYLE` |  | İki duvarın uçtan uca birleştiği bir köşeye tıklayarak nasıl çizileceğini değiştirin: pah, düz, kare kes. T, köşeden hangi duvarın geçeceğini değiştirir. |
| `WALLOFFSET` | `WO` | Bir duvarı bir mesafe kadar kendine dik taşır (ona birleşen duvarlar izler) ya da o mesafede bir kopya yapar. |
| `WALLPICK` |  | Çizimdeki bir doğru ya da çoklu çizgi üzerinde duvarlar yapar; Evet derseniz ona birleşen doğrularla birlikte. |
| `WALLPOLY` | `WP` | Düzenli bir çokgenin 3 ile 64 kenarı boyunca duvarlar çizer, POLYGON gibi. |
| `WALLRECT` | `WR` | İki karşılıklı köşeden dört birleşik duvar çizer, RECTANG gibi. |
| `WALLREJOIN` |  | Bir duvarın iki parçasını yeniden tek bir duvar yapar. İlki çizimdeki yerini korur. |
| `WALLROT` |  | Dört birleşik duvarı, istediğiniz açıda döndürülmüş bir dikdörtgen olarak çizer: ilk kenar, sonra diğer kenarın ne kadar dışarı gideceği. |
| `WALLSPLIT` | `WS` | Bir duvarı bir noktada ya da başka bir duvarın kestiği yerde ikiye böler. Parçalar, bir boşluk ya da serbest uçlar istemediğiniz sürece birleşik kalır. Kapılar ve pencereler kendi parçalarıyla gider. |
| `WALLSPLITGAP` |  | Bir duvarı bir boşluk bırakarak böler: boşluğu yazın, duvarı, sonra noktayı seçin. Parçalar serbest uçlarını tutar ve yeniden birleştirilebilir. |
| `WALLSTRETCH` |  | Bir pencereyle gerdirir: içindeki duvar uçları hareket eder, tamamen içindeki duvarlar bütün olarak hareket eder ve yanlarına dayanan duvarlar onlarla kayar. |
| `WALLTAN` |  | Bir duvarı, onu takip ederek ayrılan bir yayla sürdürür (kısa düz duvarlar olarak çizilir). |
| `WALLTRACE` |  | Tıkladığınız noktanın çevresindeki çizgi ve duvarların oluşturduğu en küçük kapalı alanın etrafına duvarlar yapar. |
| `WALLUNHOLD` |  | Bir duvardaki kilitleri kaldırır (ve o duvara bağlı diğer duvarların kilitlerini). |
| `WBLOCK` | `W`, `-WBLOCK` | Bir bloğu, birkaç nesneyi ya da tüm çizimi yeni bir DWG ya da DXF dosyasına yazar (W) |
| `WEDGE` | `WE` | Bir kama: iki köşe ve bir yükseklik; ilk köşeden uzağa doğru eğilir (3B) |
| `WHEREAMI` | `WHERE` | İmlecin nerede olduğunu söyler. |
| `WHOHAS` |  | Bir çizimi kimin açtığını söyler. CadCraft Studio, açık her çizimin yanına küçük bir kilit dosyası yazar (Plan.dwg.cclock: kim, ne zamandan beri, hangi sürüm) ve çizim kapanınca siler. Seçenekler: Geçerli (açık çizim), Dosya (birini seçin), Klasör (açık olan her çizim), Yol (birini yazın), Ad (başkalarının gördüğü ad). Beş dakikadır yenilenmemiş bir kilit eski sayılır. Tarayıcıda kullanılamaz. |
| `WINDOW` | `WN` | Bir duvara pencere koyar. |
| `XATTACH` | `XA` | Başka bir DWG ya da DXF'i bu çizime bağlar; salt okunur gösterilir (XREF listeler ve yeniden yükler) |
| `XCLIP` | `XC` | Blok başvurularını ve bağlı çizimleri bir dikdörtgene ya da çokgene kırpar ya da kırpmayı kaldırır. |
| `XLINE` | `XL` | Yapı çizgisi, iki yönde de sonsuz: iki noktadan, yatay, dikey, bir açıyla, bir açıyı ikiye bölerek ya da bir doğrudan ofset |
| `XREF` | `XR`, `-XREF` | Bağlı çizimler (dış referanslar): listele, ekle, yeniden yükle, bağla, ayır |
| `ZOOM` | `Z` | Sınırlar ya da bir pencere |
