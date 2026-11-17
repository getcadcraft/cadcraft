---
title: Komut haritası: ne yazılır
summary: CadCraft'ın sahip olduğu her komut, kısa adlarıyla birlikte A'dan Z'ye; programın kendisinden oluşturulmuştur. Diğer çizim programlarından alışkanlıklar ve farklı olanlar.
keywords: komut haritası, komutlar, takma adlar, kısa adlar, geçiş, komut listesi, ne yazılır, sil, kırp, eşdeğer, farklılıklar
from: 3bdfd3e6
---

CadCraft, diğer çizim programlarından bilinen komut adlarını ve kısa adları kullanır: bir çizgi için `L`, kırpmak için `TR`, silmek için `E` yazın. Bu yüzden çoğu komut için öğrenilecek bir çeviri tablosu yoktur: bildiğiniz ad burada da geçerlidir. Aşağıdaki liste, CadCraft'ın sahip olduğu tüm komutlardır ve programın kendisinden oluşturulmuştur. {{key:Enter}} son komutu yineler; komut satırındaki `HELP` aynı listeyi gösterir.

Aynı olmayan ya da henüz yapılmamış birkaç komut:

- **Kaydet**, tarayıcıda bir kopya indirir ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio'da dosyayı yazar. Bkz. [Diğer çizim yazılımlarından geçiş](topic:coming-from).
- **PLOT** bir PDF üretir (PNG ve SVG de olabilir); bir çıktı stili tablosuyla çalışır, sayfa yapılandırma yöneticisi yoktur.
- **DIMSTYLE** ve **PEDIT** kullanılabilir; **PEDIT**'te Köşe noktası düzenle seçeneği yoktur (bunu tutamaçlar yapar).
- **TABLE** henüz yapılmadı; {{cmd:XREF}}, {{cmd:SPLINE}} ve {{cmd:WBLOCK}} ise kullanılabilir.
- Bir rutinin kendi komutları (AutoLISP `C:NAME`), onu {{cmd:APPLOAD}} ile yükledikten sonra görünür; bu listede yer almazlar.

## Tüm komutlar (398)

| Komut | Kısa adlar | Ne yapar |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Sol düğmeyle 3B görünümü yörüngesel olarak döndürür |
| `ACCESS` | `AX` | Görmeden çizimi açar veya kapatır: sonuçlar ekran okuyucunuz üzerinden seslendirilir, çizimde bir klavye imleci olur, nesne yakalama sesleri ve sesli komutlar çalışır. |
| `ALIASEDIT` |  | Komut takma adlarını tek bir metin dosyasında düzenler (tanıdık L, *LINE biçimi) |
| `ALIGN` | `AL` | Kaynak noktaları hedef noktalara oturacak şekilde nesneleri taşır ve döndürür (bir, iki ya da üç çift); isterseniz ölçekler |
| `ALIGNPANEL` | `ALP` | Hizala ve dağıt panelini açar |
| `ALIGNTO` |  | Seçili nesnelerin sol, merkez, sağ, üst, orta veya alt kenarlarını hizalar: seçime, ilk ya da son seçilen nesneye veya bir noktaya göre |
| `ANNOALLVISIBLE` | `ANNOALL` | Açıklama nesnelerini her ölçekte gösterir; ya da yalnızca görünüm penceresinin (veya çizimin) ölçeği listelerindeyse gösterir |
| `ANNOSCALE` | `CANNOSCALE` | Çizimin açıklama ölçeğini ayarlar: açıklamalı metin ve ölçülendirmeler, aynı boyutta basılacak şekilde yeniden boyutlandırılır |
| `APPLOAD` | `AP` | Uygulamaları yükler: LISP rutinleri (.lsp) ve iletişim kutusu dosyaları (.dcl); Başlangıç Paketi (AP) |
| `ARC` | `A` | Yay: 3 Nokta, Başlangıç/Merkez/Bitiş, Başlangıç/Merkez/Açı, Başlangıç/Merkez/Uzunluk, Başlangıç/Bitiş/Açı, Başlangıç/Bitiş/Yön, Başlangıç/Bitiş/Yarıçap, Merkez/Başlangıç/Bitiş, Merkez/Başlangıç/Açı, Merkez/Başlangıç/Uzunluk, Devam |
| `AREA` | `AA` | Noktalarla ya da bir nesnenin alanı ve çevresi; Ekle ve Çıkar toplamı sürekli tutar (AA) |
| `ARRAY` | `AR` | Satır ve sütunlar halinde kopyalar veya bir merkez etrafında (AR) |
| `ARRAYASSOCIATIVITY` |  | ARRAY komutlarının düzenlenebilir diziler (1) mi yoksa düz kopyalar (0) mı üreteceğini ayarlar |
| `ARRAYCLOSE` |  | Bir dizinin kaynak nesnelerini düzenlemeyi bitirir |
| `ARRAYEDIT` |  | İlişkili seçeneğiyle yapılmış bir diziyi değiştirir: sayılar, aralık, kaynak nesneler, tek bir öğe |
| `ARRAYPATH` |  | Nesnelerin bir çizgi, yay, çoklu çizgi ya da başka bir eğri boyunca kopyaları |
| `ARRAYPOLAR` |  | Bir merkez noktası etrafında kopyalar |
| `ARRAYRECT` |  | Satır ve sütunlar halinde kopyalar |
| `ASBUILT` | `ASB` | ASBUILT, bir ekibin ölçtüğü yapıldığı hâliyle (as-built) noktaları okur (EXPORTPOINTS'in yazdığı CSV / TXT) ve bunları çizimin noktalarıyla karşılaştırır: tolerans içinde ya da dışında, ölçülmemiş, fazla. Bunları AS-BUILT katmanında işaretler ve bir CSV raporu indirir. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Bir bloğun değer istediği bir öznitelik (etiket) tanımlar: bloğa eklemek için (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Bir blok başvurusunun öznitelik değerlerini komut satırında birer birer düzenler (Enter bir değeri olduğu gibi bırakır) |
| `ATTSYNC` |  | Bir bloğun başvurularını öznitelik tanımlarıyla eşitler: yenileri varsayılanlarıyla eklenir, kaldırılanlar düşürülür, konumlar ve metin sıfırlanır; değerler korunur |
| `AUDIT` |  | Açık çizimde hasar arar: sonlu olmayan sayılar, boyutu olmayan nesneler, eksik katmanlar, bloklar, stiller ve çizgi tipleri, kendini içeren bloklar, paylaşılan kimlikler, bozuk ölçülendirmeler ve taramalar. Bulduklarını türüne göre listeler ve düzeltmeden önce sorar; düzeltme tek bir geri alma adımıdır. |
| `AUNITS` | `ANGUNITS` | Açıların nasıl gösterildiği ve yazıldığı: ondalık derece, derece-dakika-saniye ya da N45°23'30"E gibi yön açıları (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Çizim otomatik tamamlamayı açar veya kapatır ya da çizimin kalıplarının şu an önerdiklerini listeler. |
| `AUTOCONSTRAIN` |  | Geometri zaten yakınsa çakışık, yatay ve düşey kısıtlamalar ekler |
| `AUTODIM` | `ADIM` | Kurallara göre ölçülendirir: genel boyut, kenarlar boyunca zincirler, açıklıklar, delik çapları ve ızgara aralığı; zaten ölçülendirilmiş olanları tekrarlamadan. |
| `AUTOSHEET` | `ASH` | Sayfaları kendiliğinden düzenler: kâğıt ve standart ölçekleri seçer ve her görünümü altyazısı ve künyesiyle yerleştirir. |
| `BATTMAN` |  | Blok öznitelik yöneticisi: bir bloğun özniteliklerinin sırası, etiketleri, istemleri, varsayılanları ve modları; ardından başvuruları güncellenir |
| `BCLOSE` |  | Blok düzenleyiciyi kapatır: bloğu kaydeder ya da değişiklikleri atar |
| `BCONVERT` |  | BCONVERT tekrar eden geometriyi bulur ve blok başvurularına dönüştürür. Tekrar eden nesneleri seçin: açık alandaki, aynı geometriye sahip, herhangi bir açıyla taşınmış ve döndürülmüş diğer tüm nesne kümeleri bulunur; Aynalı ya da Ölçekli açıksa ayna görüntüler ve farklı boyutlu kopyalar da bulunur. Yeni bloğa bir ad ve temel nokta verin; seçim ve her kopya, kendi dönüşü ve ölçeğiyle bu bloğun başvurusu olur. Ya da Blok'u seçip var olan bir bloğun adını vererek nesnelerinin serbest kopyalarını bulabilirsiniz. Özellikler Yoksay olarak ayarlanmadıkça bir kopyanın aynı katman, renk, çizgi tipi ve çizgi kalınlığına sahip olması gerekir. Kilitli katmanlardaki nesnelere dokunulmaz. Tek bir geri alma adımı. |
| `BEDIT` | `BE` | Blok düzenleyici: bir bloğun nesnelerini ve özniteliklerini düzenler; BCLOSE kaydeder (BE) |
| `BLEND` |  | BLEND: birleştirmek için uçlarına yakın seçilen iki açık eğrinin uçları arasında bir spline. Süreklilik (CON): Teğet (T) her iki yönü izler, Düzgün (S) ise eğrilerin nasıl büküldüğünü de izler. |
| `BLOCK` | `B`, `BMAKE` | Nesnelerden blok oluşturur (tek bir başvuru olurlar) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: bir bloğa yapılan her başvuru, aynı yerde, aynı ölçek ve dönüşle başka bir bloğa başvuru olur. Her iki bloğun da sahip olduğu öznitelik değerleri korunur. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE, Bloklar panelini imleç filtresinde olacak şekilde gösterir. Panel her bloğun resmini (en son yerleştirilenler önce) liste ya da ızgara olarak gösterir; bir resme tıklayın ya da çizime sürükleyerek bloğu INSERT ile yerleştirin. Kütüphaneler altında kendi DWG ya da DXF dosyanızı ekleyin: blokları resimleriyle listelenir ve birini yerleştirdiğinizde bu çizime kopyalanır. CadCraft Studio'da bir çizim klasörü de eklenebilir; dosyalar ve klasörler hatırlanır. |
| `BOMEDIT` | `BOMCOLUMNS` | Malzeme listesi tablosunun sütunları, gruplama, sıralama, başlık, toplamlar ve notlar |
| `BOMEXPORT` |  | Bir malzeme listesi tablosunu .csv dosyası olarak kaydeder |
| `BOMTABLE` | `BOM` | Tek bir bölgenin ya da tüm çizimin canlı malzeme listesi tablosu |
| `BOMUPDATE` |  | Her malzeme listesi tablosunu şimdi günceller; dondurulmuş olanlar dahil |
| `BOMZONE` | `BZONE` | Malzeme listesi için çizimde adlandırılmış bir alan: iki köşe, bir çokgen ya da kapalı bir nesnenin dış hattı |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): kapalı bir alanın içinde bir nokta seçin, çevresinde kapalı bir çoklu çizgi alırsınız. Yaylar yay olarak kalır. Adalar seçeneği, içindeki alanların hatlarını da çizer. |
| `BOX` |  | Bir kutu: iki köşe ve bir yükseklik (3B) |
| `BPARAMETER` | `BPARAM` | Henüz yapılmadı: bir bloğa (Görünürlük gibi) bir parametre ekleme. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blok parametreleri: formüllü adlandırılmış parametreler ve bir blokta birden çok görünürlük parametresi. Blok düzenleyicide çalışır (seçili nesneleri bir duruma atayın) ve seçili bir başvuruda çalışır (kendi değerleri ve durumları). |
| `BREAK` | `BR` | Bir çizgiyi, yayı, daireyi ya da çoklu çizgiyi iki nokta arasında kırar (BR) |
| `BREAKATPOINT` |  | Bir çizgiyi, yayı ya da çoklu çizgiyi bir noktada ikiye böler |
| `BREAKLINE` |  | Kırılma simgeli bir çizgi çizer; boyutu ve uçların ötesindeki uzantı hatırlanır. |
| `BREPLACE` |  | BREPLACE bir bloğu başka bir blokla değiştirir. Seçili: blok başvurularını seçin ve yerine kullanılacak bloğun adını verin. Tümü: bir bloğu ve yerine geçecek olanı adlandırın; her mekândaki ve diğer blokların içindeki her başvuru değişir. Bir başvuru yerini, ölçeğini, dönüşünü ve katmanını korur; iki bloğun da sahip olduğu öznitelik değerleri korunur; yeni blokta yeri olmayan değerler düşürülür ve adlarıyla belirtilir. |
| `BSEARCH` |  | BSEARCH blokları bulur. Ad: bir blok adının parçası ya da * ve ? içeren bir desen. Öznitelik: bir başvurunun öznitelikleri tarafından tutulan bir değer (ya da TAG=değer). Geometri: nesneleri ya da bir blok başvurusunu seçin; şekli en az %85 benzeyen bloklar en iyisi önce olacak şekilde listelenir; boyut, dönüş ve ayna sayılmaz. Açık alanda bulunan başvurular, bir sonraki komut için seçilir. |
| `BURST` |  | Blok başvurularını patlatır ve öznitelikleri neyi söylüyorsa onu korur: her değer, özniteliğin katmanında metin olur. |
| `BVHIDE` | `BVH` | Blok düzenleyicide: geçerli görünürlük durumundaki nesneleri gizler. |
| `BVSHOW` | `BVSH` | Blok düzenleyicide: geçerli görünürlük durumunun gizlediği nesneleri gösterir (seçilebilmeleri için soluk görünürler). |
| `BVSTATE` | `BVS` | Blok düzenleyicide, görünürlük durumları olan bir blokta: bir duruma geçer ya da bir durum ekler, yeniden adlandırır veya siler. |
| `CAL` |  | Bir uzunluğu ya da sayıyı hesaplar: + − * / ve parantezler, istediğiniz yerde yazdığınız gibi |
| `CENTERLINE` | `CL` | İki çizgi arasında merkez çizgisi: aralarında tam orta ya da birleştikleri yerde açıortay boyunca (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Merkez işareti: bir dairenin ya da yayın merkezinde bir artı, merkez çizgileriyle birlikte biraz ötesine kadar (CM) |
| `CHAMFER` | `CHA` | İki çizgi arasındaki köşeyi pah kırar (D iki mesafe, A uzunluk ve açı, P çoklu çizgideki her köşe) |
| `CHSPACE` |  | CHSPACE: nesneleri bir sayfa ile model arasında bir görünüm penceresi üzerinden taşır. Diğer taraftan da aynı görünsün diye ölçeklenir ve döndürülürler. Sayfada modele gider; bir görünüm penceresi üzerinden çalışırken (MSPACE) sayfaya gelir. |
| `CIRCLE` | `C` | Merkez ve yarıçap, çap, 2 ya da 3 nokta |
| `CLASS` |  | Seçili nesneleri bir sınıfa koyar; hiçbir şey seçili değilken etkin sınıfı ayarlar (? listeler) |
| `CLASSES` | `CLS` | Sınıflar paneli: sınıflar nesneleri katmanlar arasında sıralar; onları gösterin, gizleyin ve biçimlendirin, görünüm penceresi bazında geçersiz kılın (CLS) |
| `COMMANDLINE` | `CMDLINE` | Komut satırını yerleştirin ya da yüzen yapın, tek satır yapın, geçmiş satır sayısını ayarlayın ya da geçmişi açın (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ölçülendirme stillerini, metin stillerini, katmanları, sayfaları veya birimleri karşılaştırır: bu çizimde iki tane ya da bu çizimi açık başka bir çizimle, ve bir değeri karşıya kopyalar. |
| `CONSTRAINTBAR` | `CBAR` | Kısıtlama çubuklarını gösterir ya da gizler (Tümünü göster / Tümünü gizle, ya da nesne başına) |
| `COPY` | `CO`, `CP` | Nesneleri kopyalar; tıkladığınız kadar çoğaltır |
| `COPYBASE` |  | Nesneleri, seçtiğiniz bir temel noktayla panoya kopyalar |
| `COPYCLIP` |  | Nesneleri panoya kopyalar (Ctrl+C); PASTECLIP yerleştirir |
| `COUNT` | `BCOUNT` | Blok başvurularını sayar: birini seçin, bloğunun her başvurusunu seçer ve sayar |
| `COUNTTABLE` |  | Blok sayılarının bir tablosunu yerleştirir |
| `CREDITS` |  | Kütüphane katkılarını çizime bir tablo olarak koyar. Tabloyu şimdiki çizimdeki öğelerden güncellemek için yeniden çalıştırın. |
| `CURSORSIZE` |  | İmlecin (artı işaretinin) boyutu: 100 onu çizimin bir kenarından öbür kenarına kadar uzatır (Ayarlar › İmleç › Tam ekran) |
| `CUTCLIP` |  | Nesneleri panoya keser (Ctrl+X): kopyalar, sonra siler |
| `CYLINDER` | `CYL` | Bir silindir: merkez, yarıçap ve yükseklik (3B) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blokları, öznitelikleri ve nesne özelliklerini çizimde ya da bir CSV dosyasında tablo olarak listeler |
| `DATALINK` | `DL` | Bir CSV dosyasından tablo; dosyayı hatırlar, böylece yeniden okunabilir |
| `DATALINKUPDATE` | `DLU` | Bir veri bağlantısının dosyasını yeniden okur ve tablolarını yeniden doldurur |
| `DCALIGNED` | `DCALI` | Boyutsal kısıtlama: noktalar, bir nokta ile bir çizgi ya da iki çizgi arasında gerçek mesafe |
| `DCANGULAR` | `DCANG` | Boyutsal kısıtlama: iki çizgi arasındaki açı ya da bir yayın açısı |
| `DCCONVERT` |  | Kısıtlanabilir geometri üzerinde çizilmiş ölçülendirmeleri boyutsal kısıtlamalara dönüştürür |
| `DCDIAMETER` | `DCDIA` | Boyutsal kısıtlama: bir dairenin ya da yayın çapı |
| `DCDISPLAY` |  | Çizimdeki boyutsal kısıtlamaları gösterir ya da gizler |
| `DCHORIZONTAL` | `DCHOR` | Boyutsal kısıtlama: yatay mesafe |
| `DCLINEAR` | `DCLIN` | Boyutsal kısıtlama: yatay ya da düşey mesafe; yerleştirdiğiniz yerden |
| `DCRADIUS` | `DCRAD` | Boyutsal kısıtlama: bir dairenin ya da yayın yarıçapı |
| `DCVERTICAL` | `DCVER` | Boyutsal kısıtlama: düşey mesafe |
| `DELBLOCKS` |  | Blokları siler: her başvuruyu (iç içe olanlar dahil, her sayfada) ve tanımları |
| `DELCONSTRAINT` | `DELCON` | Seçtiğiniz nesnelerden her kısıtlamayı (geometrik ve boyutsal) kaldırır |
| `DELOPENING` |  | Bir kapıyı ya da pencereyi duvardan çıkarır. |
| `DESCRIBE` | `DESC` | Çizimin neler içerdiğini söyler: kaç nesne, ne tür, ne kadar büyük, neyin seçili olduğu. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Seçimi temizler (Esc) |
| `DETAILS` | `DET` | Firmanızın kendi detayları, çizdiğiniz şey için bulunur: bul, blok ekle, listele, kaldır, önerileri açın ya da kapatın. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Metinden diyagram çizer: Mermaid akış şeması, PlantUML bileşen diyagramı, D2, nereden-nereye listesi ya da draw.io XML; düzenleyebileceğiniz bloklar ve bağlayıcılar olarak |
| `DIMALIGNED` | `DAL`, `DIMALI` | Hizalı ölçülendirme: iki nokta arasındaki gerçek mesafe |
| `DIMANGULAR` | `DAN`, `DIMANG` | Açısal ölçülendirme: iki çizgi arasındaki, bir yayın ya da üç noktayla belirlenen açı |
| `DIMARC` | `DAR` | Yay uzunluğu ölçülendirmesi: yay boyunca mesafe, yay simgesiyle (DAR) |
| `DIMASZ` |  | Ölçülendirme ayarı: Ok ucu boyutu |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Tek bir taban çizgisinden yığılmış ölçülendirmeler |
| `DIMBREAK` | `DBREAK` | Ölçülendirme ve uzatma çizgilerini diğer nesnelerle kesiştikleri yerde kırar (Otomatik), iki nokta arasında (El ile) ya da kırılmaları kaldırır |
| `DIMCONSTRAINT` | `DCON` | Boyutsal kısıtlamalar: doğrusal, hizalı, açısal, yarıçap, çap, dönüştür |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Bir ölçülendirme zinciri; her biri bir öncekinin ucundan başlar |
| `DIMDEC` |  | Ölçülendirme ayarı: Ondalık basamak |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Bir yayın ya da dairenin çapı |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Ölçülendirmeleri bağlı oldukları nesnelerden serbest bırakır (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ölçülendirme metnini değiştirir (Giriş, Yeni metin, Döndür) ya da uzatma çizgilerini eğik yapar (Eğik) |
| `DIMEXE` |  | Ölçülendirme ayarı: Ölçülendirme çizgisinin ötesine uzatma |
| `DIMEXO` |  | Ölçülendirme ayarı: Başlangıç noktasından ofset |
| `DIMGAP` |  | Ölçülendirme ayarı: Metnin çevresindeki boşluk |
| `DIMINSPECT` |  | Muayene ölçülendirmesi: değerin çevresinde bir çerçeve, bir etiket ve parçanın ne sıklıkla kontrol edildiği |
| `DIMJOGGED` | `DJO`, `JOG` | Kırık yarıçap ölçülendirmesi: merkez uzaktayken daha yakın bir noktadan çizilen yarıçap (DJO) |
| `DIMJOGLINE` | `DJL` | Doğrusal ya da hizalı bir ölçülendirme çizgisine kırılma simgesi ekler; mesafenin ölçeğe uygun çizilmediğini gösterir (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Yatay ya da düşey mesafe (herhangi bir açı için R) |
| `DIMLUNIT` |  | Ölçülendirme ayarı: uzunluk biçimi (1 bilimsel, 2 ondalık, 3 mühendislik, 4 mimari, 5 kesirli) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinat ölçülendirmesi: bir noktanın UCS başlangıcına göre X ya da Y mesafesi, bir belirtme çizgisinde (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Seçili ölçülendirmelerde ölçülendirme değişkenlerini stilini değiştirmeden geçersiz kılar; Temizle stili geri koyar (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Bir yayın ya da dairenin yarıçapı |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Bir ölçülendirmenin noktalarını nesnelere bağlar; onlar taşındığında ölçülendirme izler ve yeniden ölçer (DRE) |
| `DIMSCALE` |  | Ölçülendirme ayarı: Genel ölçek (boyutlar × bu değer) |
| `DIMSPACE` |  | Paralel ölçülendirmeler arasında eşit aralık, bir taban ölçülendirmesinden ölçülerek (0 hizalar, Otomatik metin yüksekliğinin iki katıdır) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Adlandırılmış ölçülendirme stilleri oluşturur, değiştirir, geçerli yapar, siler, uygular ve karşılaştırır (iletişim kutusu; komut satırında -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Ölçülendirme metnini ölçülendirme çizgisinin soluna, sağına ya da ortasına taşır veya döndürür |
| `DIMTEXTUNIT` | `DTU` | Ölçülendirme metni mm, cm, m ya da km cinsinden, ya da çizimin kendi birimlerinde: seçili ölçülendirmeler, yoksa yeni olanlar (DTU) |
| `DIMTXT` |  | Ölçülendirme ayarı: Metin yüksekliği |
| `DIST` | `DI` | İki nokta arasındaki mesafe ve açı |
| `DISTRIBUTE` |  | Seçili nesneleri yan yana ya da yukarı aşağı eşit aralıklarla dağıtır: merkezler arasında eşit adımlar ya da eşit boşluklar; en dıştaki iki nesne yerinde kalır |
| `DIVIDE` | `DIV` | DIVIDE (DIV): bir çizgiyi, yayı, daireyi, çoklu çizgiyi, spline'ı veya elipsi eşit parçalara bölen işaretler. Noktalar; ya da Blok seçiliyse her işarette bir blok. |
| `DOCUMENTS` | `DOCS` | Belgeler panelini açar: bir proje klasörü için çizimleri alın ve geri verin, revizyonları, yayın durumlarını ve onayı denetleyin |
| `DOOR` | `DR` | Bir duvara kapı yerleştirir. Tıkladığınız taraf, kapının açılacağı taraftır. |
| `DRAWORDER` |  | Çizim sırasını değiştirir: nesneleri öne getirin, arkaya gönderin ya da diğer nesnelerin üstüne veya altına koyun. |
| `DUPLICATE` | `DUP` | Çoğalt: imleçle birlikte hareket eden bir kopya; bırakmak için tıklayın (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Çizimin özellikleri: başlık, yazar ve diğerleri; kendi ad ve değer çiftleriniz |
| `DXFOUT` |  | Çizimi DXF R12 olarak indirir (Kaydet kendi biçimini korur) |
| `EATTEDIT` | `DDATTE` | Bir blok başvurusunun özniteliklerini düzenler: değerler, metin ve özellikler, her seferinde bir öznitelik |
| `ELLIPSE` | `EL` | Eksen uç noktaları ve diğer yarı eksen |
| `ERASE` | `E`, `DELETE` | Nesneleri siler |
| `EXPLODE` | `X` | Çoklu çizgileri, blokları ve ölçülendirmeleri parçalarına ayırır |
| `EXPORT` | `EXP` | Çizimin bir kopyasını, bir eklentinin yazdığı dosya türünde dışa aktarır |
| `EXPORT3D` | `3DEXPORT` | 3B modeli dışa aktarır: GLB, OBJ ya da STL |
| `EXPORTPOINTS` | `EXPPTS` | Noktaları ve tek bir öznitelikli blokların ekleme noktalarını, açıklama olarak, bir CSV ya da TXT dosyasına yazar (PNEZD, PENZD ya da XYZ); BIM ve ölçme programları için |
| `EXTEND` | `EX` | Nesneleri diğerlerine ulaşacak şekilde uzatır: bir ucun yakınına tıklayın, birkaçının üzerinden sürükleyin ya da kırpmak için Shift+tıklayın |
| `EXTRIM` |  | EXTRIM: bir kesme kenarı, sonra bir taraf seçin. Kenarı kesen her şey o tarafta kırpılır. Gidecek parçalar imleci hareket ettirirken görünür. |
| `EXTRUDE` | `EXT` | Kapalı 2B nesneleri katılara ekstrüde eder (3B) |
| `FIELD` |  | Bir metne, tablo hücresine ya da bir özniteliğe alan koyar: tarih, dosya adı, sayfa numarası, bir çizim özelliği, bir nesnenin alanı ya da uzunluğu, ya da bir formül |
| `FILLET` | `F` | İki nesne arasındaki köşeyi yuvarlar ya da keser (R yarıçap, P çoklu çizgideki her köşe, M birkaç nesne) |
| `FIND` |  | Metindeki, öznitelik değerlerindeki ve ölçülendirme metnindeki kelimeleri bulur ve değiştirir |
| `FLATTEN` |  | Seçili nesnelerin yüksekliğini (Z) ve kalınlığını 0 yapar; kullandıkları bloklarda da |
| `FLOOR` |  | Çizim yapılacak katı seçin, bir tane ekleyin ya da seçimi bir kata taşıyın veya kopyalayın. |
| `FLOORLAYERS` |  | Katları Kat-Katman adıyla katmanlara dönüştürür; katları olmayan birine gidecek bir dosya için. |
| `FLOORS` | `FLR` | Katlar panelini açar: tek bir model uzayında katları üst üste koyun. |
| `GCCOINCIDENT` |  | Kısıtlama: iki nokta buluşur ya da bir nokta bir nesne üzerinde kalır |
| `GCCOLLINEAR` |  | Kısıtlama: iki çizgi tek bir çizgi üzerinde kalır |
| `GCCONCENTRIC` |  | Kısıtlama: iki daire ya da yay eşmerkezli kalır |
| `GCEQUAL` |  | Kısıtlama: iki çizgi aynı uzunlukta, ya da iki daire ya da yay aynı yarıçapta kalır |
| `GCFIX` |  | Kısıtlama: bir nokta ya da bütün bir nesne olduğu yerde sabit kalır |
| `GCHORIZONTAL` |  | Kısıtlama: bir çizgi (ya da iki nokta) yatay kalır |
| `GCPARALLEL` |  | Kısıtlama: iki çizgi paralel kalır |
| `GCPERPENDICULAR` |  | Kısıtlama: iki çizgi dik açıda kalır |
| `GCSYMMETRIC` |  | Kısıtlama: iki nokta, çizgi ya da daire bir çizgiye göre birbirinin aynası kalır |
| `GCTANGENT` |  | Kısıtlama: bir çizgi ile bir daire ya da yay (ya da ikisi) teğet kalır |
| `GCVERTICAL` |  | Kısıtlama: bir çizgi (ya da iki nokta) düşey kalır |
| `GDSIN` | `GDS` | Bir IC yerleşimini görüntüler (GDSII akış dosyası): her katman ve veri türü bir çizim katmanı olarak, düz, kullanıcı birimlerinde; yalnızca görüntüleme ve ölçme için (laboratuvar denemesi) |
| `GEOMCONSTRAINT` | `GCON` | Geometrik kısıtlamalar: yatay, düşey, paralel, teğet, çakışık… |
| `GLBOUT` |  | 3B modeli GLB (glTF) olarak dışa aktarır |
| `GRADIENT` | `GD` | Bir alanı bir ya da iki renkten oluşan bir geçişle doldurur |
| `GRIDMOVE` | `GM` | Bir ızgara çizgisini ve ona bağlı olanları taşır: duvarlar uzar, kolonlar, balonlar ve etiketler taşınır, ölçülendirmeler izler. |
| `GROUP` | `G` | GROUP (G): seçili nesnelere ortak bir ad verir. Bunlardan birine tıklamak hepsini seçer. Ad alanında Enter, adsız bir grup oluşturur. |
| `GROUPEDIT` |  | GROUPEDIT: bir grubu değiştirir. Nesnelerinden birini seçin ya da adını verin, sonra Ekle ya da Kaldır, Yeniden adlandır (R), açıklamasını değiştirin ya da bir tıklamanın grubu bütünüyle seçip seçmeyeceğini belirtin. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Bir alanı katı dolgu ya da bir desenle taralar: içine tıklayın ya da kapalı nesneleri seçin (H) |
| `HATCHEDIT` | `HE` | Taramayı değiştirir: desen, ölçek, açı, başlangıç noktası ve bir sınıra bağlantısı. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Bir taramadan sınır çoklu çizgilerini yeniden oluşturur; ona bağlı ya da bağlı olmayan |
| `HATCHTOBACK` |  | Her taramayı diğer her şeyin arkasına gönderir. |
| `HELP` | `?` | Bu liste |
| `HIDEOBJECTS` |  | UNISOLATEOBJECTS'e kadar seçili nesneleri gizler. Çizimle birlikte kaydedilmez. |
| `HISTORY` | `HIST` | HISTORY (HIST): bu çizimin sürümleri (Studio kaydettiğinde bu bilgisayarda tutulan kopyalar ve bulutun sürümleri); açmak, geri yüklemek ve değişen şeyleri renkle gösteren karşılaştırmak için. |
| `ID` |  | Bir noktanın koordinatları |
| `IMAGE` | `IM` | CadCraft'a çizimin kullandığı resim dosyalarını verir (bir DWG yalnızca nerede olduklarını saklar). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Bir dosyadan resim (PNG ya da JPEG) yerleştirir. |
| `IMAGECLIP` | `ICL` | Bir resmi bir dikdörtgene ya da çokgene kırpar ya da kırpmasını kaldırır. |
| `IMPORT` | `IMP` | Bir eklentinin okuduğu türde bir dosyayı bu çizime içe aktarır |
| `INSERT` | `I`, `DDINSERT` | Bir blok ekler (S ölçek, R döndür); F bir DWG/DXF dosyasından, L kütüphaneden |
| `INTERSECT` | `IN` | Katıların ortak olanını tutar (3B) ya da 2B bölgelerin paylaştığı alanı |
| `ISODRAFT` |  | ISODRAFT: izometrik çizimi açar ya da kapatır, ya da doğrudan Sol, Üst veya Sağ düzleme. Açıkken Ortogonal ve kutupsal izleme düzlemin iki eksenini izler, ızgara izometrik çizilir ve ELLIPSE'te İzoçember seçeneği bulunur. |
| `ISOLATEOBJECTS` | `ISOLATE` | Yalnızca seçili nesneleri gösterir; bu alandaki diğer her şey UNISOLATEOBJECTS'e kadar gizlenir. Çizimle birlikte kaydedilmez. |
| `ISOPLANE` |  | ISOPLANE: çizim yapılacak izometrik düzlemi seçer: Sol, Üst veya Sağ. Enter sonrakine geçer; izometrik çizim açıkken F5'in yaptığı gibi. |
| `JOIN` | `J` | Uç uca gelen çizgileri, yayları ve çoklu çizgileri tek bir çoklu çizgide; tek doğru üzerindeki çizgileri tek bir çizgide birleştirir (J) |
| `LASER` | `LASERCUT` | Lazer panelini açar: katmanları bir lazer kesiciye ya da gravüre gönderir (GRBL G-code) |
| `LASSOMODE` |  | Basılı tutup sürüklemek bir kement (1) ya da bir dikdörtgen (0) çizer |
| `LAYDEL` |  | Bir katmanı ve üzerindeki her nesneyi siler (modelde, sayfalarda ve bloklarda) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Katman yöneticisini açar: her katman tek bir tabloda |
| `LAYERPANEL` |  | Katmanlar panelini gösterir |
| `LAYFRZ` |  | Seçtiğiniz her nesnenin katmanını dondurur |
| `LAYGROUP` | `LG` | Katmanları Katmanlar panelinde klasörler halinde gruplar. |
| `LAYISO` |  | Seçili nesnelerin katmanlarını izole eder (diğer her katman kapalı) |
| `LAYLOCKFADE` |  | Kilitli katmanlardaki nesnelerin ne kadar soluklaşacağını ve bir tıklamanın onları seçip seçemeyeceğini ayarlar. |
| `LAYMCUR` |  | Seçtiğiniz nesnenin katmanını geçerli yapar |
| `LAYMRG` |  | Katmanları birleştirir: nesneleri bir hedef katmana taşınır, birleştirilen katmanlar kalkar |
| `LAYOFF` |  | Seçtiğiniz her nesnenin katmanını kapatır |
| `LAYON` |  | Her katmanı açar |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Künye ve bir görünüm penceresi bulunan yeni bir sayfa (düzen) |
| `LAYTHW` |  | Her katmanın donmasını çözer |
| `LAYUNISO` |  | LAYISO'nun kapattığı katmanları yeniden açar |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Eski Vietnamca yazı tipleriyle (TCVN3 / ABC yazı tipleri, örneğin .VnTime, ve VNI yazı tipleri, örneğin VNI-Times) yazılmış metni Unicode'a dönüştürür. Bu metin zaten okunabilir gösterilir; bu komut onu kalıcı olarak yeniden yazar: bir sayım ve tek bir geri alma adımıyla. |
| `LENGTHEN` | `LEN` | Çizgileri, yayları ve çoklu çizgileri uzatır ya da kısaltır: bir miktar, bir yüzde, toplam olarak ya da sürükleyerek (LEN) |
| `LIBRARY` | `LIB` | Kütüphane paneli: öğeleri yerleştirin, güncellemeleri ve katkıları denetleyin |
| `LIMITS` |  | Çizim sınırlarını ayarlar: AÇIK, KAPALI ya da sol alt ve sağ üst köşeler. Sınırlar açıkken, dışındaki noktalar reddedilir |
| `LINE` | `L` | Düz parçalar, her biri kendi nesnesi |
| `LINETYPE` | `LT`, `CELTYPE` | Yeni nesnelerin alacağı çizgi tipi (katmana göre, bloğa göre ya da adlandırılmış bir tip) |
| `LINKVIEWS` | `SYNCVIEWS` | Her bölmeyi birlikte kaydırır ve yakınlaştırır (bölünmüş ekran); iki çizimi ya da revizyonu karşılaştırmak için |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ya da VLIDE) LISP düzenleyicisini açar: bir rutin yazmak, yüklemek ve denemek için bir pencere. Çizime yükle, dosyayı APPLOAD ile yüklemek gibi her formu okur ve komutlarını oluşturur. Seçimi çalıştır, seçili formları ya da imlecin içinde olduğu formu değerlendirir. Konsol, rutinin yazdırdıklarını ve her hatayı satır numarasıyla gösterir. Eşleşen parantez yazarken işaretlenir, Enter yeni satırı girintiler. Yeni, Aç ve Kaydet bir .lsp dosyasıyla çalışır. Metnin yanındaki listeler, rutinin tanımladığı fonksiyonları, bu LISP'in henüz sahip olmadığı ama çağırdığı fonksiyonları ve sahip olduğu tüm fonksiyonları gösterir. Pencere çizimi engellemez; böylece bir rutin nokta isteyebilir. Durdur ya da Esc, çalışan bir rutini sonlandırır. |
| `LIST` | `LI`, `LS` | Geçmişteki nesneleri tanımlar |
| `LTSCALE` | `LTS` | Çizimin çizgi tipi ölçeği (her çizgi ve boşluk bununla çarpılır) |
| `LWDISPLAY` | `LWT` | Çizgi kalınlıklarını ekranda gösterir ya da gizler (durum çubuğundaki LWT düğmesi) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Yeni nesnelerin alacağı çizgi kalınlığı (katmana göre, bloğa göre, varsayılan ya da mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Model uzayının altındaki harita katmanları: çizimin koordinat sistemi, döşemeler, WMS, WMTS, ArcGIS, resimler |
| `MASSPROP` |  | MASSPROP: bölgelerin ve kapalı nesnelerin kesit özellikleri: alan, çevre, ağırlık merkezi, momentler ve atalet çarpımı, dönme yarıçapları ve asal eksenler. Çizgiler ve yaylar için tam. Raporu bir metin dosyasına yazabilir. |
| `MATCHPROP` | `MA`, `PAINTER` | Özellikleri eşleştirir: bir nesnenin katmanını, rengini ve daha fazlasını diğerlerine kopyalar (MA) |
| `MEASURE` | `ME` | MEASURE (ME): bir çizgi, yay, daire, çoklu çizgi, spline ya da elips üzerinde, seçtiğiniz yere en yakın uçtan başlayarak her verilen uzunlukta bir işaret. Noktalar; ya da Blok seçiliyse her işarette bir blok. |
| `MEASUREGEOM` | `MEA` | Bir mesafeyi, yarıçapı, açıyı veya alanı ölçer (MEA) |
| `MINSERT` |  | MINSERT: bir bloğu tek seferde satır ve sütunlar halinde yerleştirir. Her biri kendi başvurusudur; böylece her birini taşıyabilir ya da silebilirsiniz. |
| `MIRROR` | `MI` | Nesneleri bir çizgiye göre aynalar |
| `MLEADER` | `MLD`, `MLEAD` | Çoklu belirtme çizgisi: bir ok, bir belirtme çizgisi ve bir not; tek bir nesne olarak (MLD) |
| `MLEADERALIGN` | `MLA` | Çoklu belirtme çizgilerini, bunlardan biriyle bir yön boyunca, eşit aralıkla hizalar ya da iki nokta arasında dağıtır (MLA) |
| `MLEADERCOLLECT` | `MLC` | Birkaç çoklu belirtme çizgisini tek birine toplar: blokları bir satır ya da sütunda, ya da notları birinin altına bir biri (MLC) |
| `MLEADEREDIT` | `MLE` | Çoklu belirtme çizgisine belirtme çizgisi ekler ya da kaldırır; içeriğini metin ile blok arasında değiştirir (MLE) |
| `MLINE` |  | Birbirine paralel çizgileri birlikte çizer; köşelerde birleşik. |
| `MOVE` | `M` | Nesneleri bir temel nokta ve ikinci bir nokta ile taşır |
| `MSPACE` | `MS` | Açık sayfadaki bir görünüm penceresi üzerinden modelde çalışır (ya da görünüm penceresinin içine çift tıklayın). |
| `MTEXT` | `MT`, `T` | Paragraf metni: genişliğini sürükleyin, sonra yerinde yazın; Enter yeni paragraf başlatır (T) |
| `MVIEW` | `MV` | Bir sayfada modele açılan bir görünüm penceresi |
| `NAMEDVIEW` | `NV`, `VIEWS` | Adlandırılmış görünümler: ekrandaki görünümü (ya da bir pencereyi) bir adla kaydedin ve ona geri dönün (NV) |
| `NCOPY` |  | Bir blok başvurusundan ya da bağlı bir çizimden nesneleri, parçalamadan çizime kopyalar. |
| `NEARBY` |  | İmlecin yakınındaki şeyleri, en yakından başlayarak, mesafe ve taraf ile söyler. |
| `NEW` |  | Yeni bir çizim başlatır |
| `OBJECTSCALE` | `OBJSCALE` | Açıklamalı metin ve ölçülendirmelerin açıklama ölçekleri: bir ölçek ekleyin, birini silin, geçerli ölçeği ekleyin ya da listeleyin (her görünüm penceresi kendi ölçeği için boyutta gösterir) |
| `OBJOUT` |  | 3B modeli OBJ olarak dışa aktarır |
| `OFFSET` | `O` | Ofset: bir mesafede paralel kopyalar |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: OFFSET'in bir çoklu çizginin dış köşelerindeki boşlukları nasıl kapattığı. 0 parçaları uzatır, 1 bir yay ekler, 2 düz bir kesim ekler. Bu oturum için geçerli. |
| `OLELIST` | `OLES` | Bir çizimin taşıdığı OLE nesnelerini listeler ve birinin resminin bir kopyasını istediğiniz yere koyar |
| `OPEN` |  | Bu bilgisayardan bir DWG ya da DXF açar |
| `OPENIN3D` |  | Bu çizimi 3B modelleme uygulamasında yeni bir sekmede açar (hiçbir şey yüklenmez) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Nesne yakalama menüsünü açar: hangi yakalamaların açık olacağını seçin. Ayrıca durum çubuğundaki Yakalama üzerinde sağ tıklama. |
| `OVERKILL` |  | Yinelenen nesneleri siler ve bir tolerans içinde çakışan ya da uç uca gelen çizgileri ve yayları birleştirir. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametreler paneli: kullanıcı parametreleri ve boyutsal kısıtlamalar tek bir tabloda |
| `PARTSLIST` | `PLIST` | Kütüphaneden yerleştirilmiş her standart parça ve çelik kesit için bir parça listesi tablosu |
| `PASTEAREA` | `PAREA` | MarkupCraft'ta kopyalanan bir alanı (Alanı kopyala), gerçek boyutunda, bir resim olarak yapıştırır. |
| `PASTEBLOCK` |  | PASTEBLOCK: kopyaladığınızı tek bir blok olarak yapıştırır. Bloğun kendi adı olur; RENAME komutuyla kendi adınızı verin. |
| `PASTECLIP` |  | Panoyu yapıştırır: imleci takip eder, gideceği yere tıklayın (Ctrl+V) |
| `PASTEORIG` |  | Panoyu, kopyalandığı koordinatlara yapıştırır (Ctrl+Shift+V) |
| `PDF` |  | CadCraft'a, çizimin altlık olarak kullandığı PDF dosyalarını verir |
| `PDFADJUST` |  | Bir PDF altlığını soldurur, kontrastını ayarlar, tek renge çevirir ya da kapatır |
| `PDFATTACH` | `PDFATT` | Bir PDF sayfasını altlık olarak ekler (PDFATTACH) |
| `PDFCLIP` |  | Bir PDF altlığını bir dikdörtgene ya da çokgene kırpar |
| `PDFIMPORT` | `PDFIM` | Bir PDF sayfasının çizgilerini, dolgularını ve metnini çizim nesnelerine dönüştürür (PDFIMPORT) |
| `PDFLAYERS` |  | Bir PDF altlığının katmanlarını açar ya da kapatır |
| `PEDIT` | `PE` | Bir çoklu çizgiyi düzenler: kapat, aç, birleştir, genişlik, eğriye uydur, spline eğrisi, eğriyi düzleştir, çizgi tipi üretimi, ters çevir; çizgiler, yaylar ve spline'lar çoklu çizgiye dönüştürülebilir |
| `PHOTOSKETCH` | `PSK` | Kâğıt üzerindeki el çizimi bir fotoğrafı, perspektifini düzelterek ve her kalem rengine kendi katmanını vererek, bir ölçekte çizgi ve yaylara dönüştürür. |
| `PICKSTYLE` |  | PICKSTYLE: bir grubun tek bir nesnesini seçmek tüm grubu mu (1, başlangıç ayarı) yoksa yalnızca o nesneyi mi (0) seçer. Bu oturum için geçerli. |
| `PLAN` |  | Görünümü, UCS X ekseni (Geçerli ucs, kayıtlı bir Ucs ya da Dünya) ekranda yatay olacak şekilde döndürür. Çizimdeki hiçbir şey taşınmaz. |
| `PLINE` | `PL` | Çizgi ve yay parçalarından oluşan bir çoklu çizgi |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF'e çıktı alır: bir sayfa ya da modelin bir ölçekte çıktısı |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Çıktı stili tabloları: her rengin nasıl basılacağını ayarlayın (renk, siyah, gri, mürekkep, çizgi kalınlığı); çizimle birlikte saklanır (STYLESMANAGER) |
| `POINT` | `PO` | Nokta nesneleri |
| `POINTCLOUD` | `PC` | Eklenmiş nokta bulutu: dilimle, yükseklik, kalınlık, renk, boyut, görünür, yakınlaştır, ayır |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Çizimin altına bir nokta bulutu ekler (LAS, LAZ, XYZ, PTS) |
| `POLARANG` |  | Kutupsal izleme adımı, derece cinsinden (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Düzgün bir çokgen |
| `PRESSPULL` |  | Bir katının bir yüzünü iter ya da çeker (3B) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Özellikler panelini açar (ayrıca Ctrl+1, ya da bir nesneye çift tıklayın) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Özellikler panelini pencerenin kenarına katlar |
| `PSPACE` | `PS` | Üzerinde çalıştığınız görünüm penceresinden çıkıp sayfaya dönersiniz (ya da dışına çift tıklayın). |
| `PUBLISH` | `-PUBLISH` | Birden çok ya da tüm sayfaları tek bir PDF'e çıkarır (her sayfa için bir sayfa ve bir yer imi) |
| `PURGE` | `PU` | Hiçbir şeyin kullanmadığı blok tanımlarını kaldırır |
| `QDIM` |  | Hızlı ölçülendirme: birkaç nesneyi bir kerede ölçülendirir (sürekli, taban, kademeli, ordinat, yarıçap ya da çap) |
| `QPMODE` | `QP` | İmleçle Hızlı Özellikler açık ya da kapalı |
| `QSELECT` | `QS` | Hızlı seçim: katmanı, rengi, boyutu veya adı eşleşen bir türdeki her nesne (QS) |
| `RASTERSNAP` |  | Taranmış sayfaların çizgilerine yakalamayı açar ya da kapatır. |
| `RAY` |  | Işın: bir noktadan tek yöne sonsuz bir yapı çizgisi. |
| `RECOVER` |  | Hasarlı bir DXF ya da DWG'yi açar: okunamayanları, dosyayı reddetmek yerine atlar, neyin atlandığını söyler, sonra AUDIT gibi çizimi denetler ve onarır. |
| `RECTANG` | `REC`, `RECTANGLE` | İki köşeden kapalı bir çoklu çizgi |
| `REDLINE` | `RDL` | Kırmızı çizgiden revizyona: bir MarkupCraft kırmızı çizgi paketini okur, her değişikliği kabul edin ya da reddedin, kabul edilenleri bir revizyon kaydıyla revizyon bulutu haline getirir ve cevap dosyasını kaydeder (RDL) |
| `REDO` |  | Geri alınanı yineler |
| `REFCLOSE` |  | Bir bloğu yerinde düzenlemeyi bitirir: kaydedin ya da değişiklikleri atın |
| `REFEDIT` |  | Bir bloğu yerinde düzenler; başvurusunun bulunduğu yerde, çizimin geri kalanı soluk. REFCLOSE kaydeder. |
| `REGEN` | `RE` | Bu sekmede çizilenleri çizimden yeniden oluşturur |
| `REGENALL` | `REA` | Her sekmede, bölmede ve açık çizimde çizilenleri yeniden oluşturur |
| `REGION` | `REG` | REGION (REG): kapalı nesnelerden ya da uç uca bir döngü oluşturan çizgi, yay ve çoklu çizgilerden düz bölgeler oluşturur. UNION, SUBTRACT ve INTERSECT bölgeleri birleştirir; MASSPROP onların kesit özelliklerini verir. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Birkaç taramayı kaydedin: seçilen nokta çiftleri ya da hedeflerle tek bir çerçeveye yerleştirin, ICP ile ince ayar yapın, tek bir LAS ya da E57 olarak dışa aktarın |
| `REINIT` |  | Takma adlar dosyanızı yeniden yükler |
| `RENAME` | `-RENAME`, `REN` | Bir katmanı ya da bloğu yeniden adlandırır (her nesne ya da başvuru izler) |
| `REVCLOUD` | `RC` | Revizyon bulutu: bir dikdörtgeni, çokgeni, serbest bir yolu ya da bir nesneyi yuvarlak bulut haline getirir (RC) |
| `REVOLVE` | `REV` | Kapalı 2B nesneleri bir eksen etrafında döndürerek katılara dönüştürür (3B) |
| `ROTATE` | `RO` | Nesneleri bir temel nokta etrafında döndürür |
| `SAMPLES` | `SAMPLE` | CadCraft'ın örnek çizimlerinden birini açar (bir mimari set, uygulanmış hâli) ve öğrenmek için |
| `SAVE` | `QSAVE` | Çizimi kendi biçiminde (DWG ya da DXF) indirir |
| `SAVEAS` |  | Çizimi DWG ya da DXF olarak indirir: hangisi olduğunu seçin |
| `SAYSEL` |  | Seçili olanı söyler, her biri bir cümle. |
| `SCALE` | `SC` | Nesneleri bir temel nokta etrafında ölçekler |
| `SCALELISTEDIT` | `SCALELIST` | Çizimin kendi ölçeklerini ekler, düzenler ve siler; görünüm penceresi ve çıktı ölçek listelerinde görünür ve dosyada saklanır (SCALELIST) |
| `SCANALIGN` | `SCL` | Taranmış bir sayfayı iki noktaya hizalar: taşır, döndürür ve isterseniz ölçekler. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Taranmış bir çizim ekler: PNG, JPEG ya da TIFF (çok sayfalı bir dosyanın bir sayfası ya da tüm sayfaları) ya da bir resim olan PDF sayfası. |
| `SCANCLEAN` | `SCC` | Taranmış bir sayfayı siyah beyaz yapar ve lekeleri temizler. |
| `SCANCROP` | `SCR` | Taranmış bir sayfayı bir pencereye kırpar. |
| `SCANDESKEW` | `SCD` | Taranmış sayfanın uzun çizgilerinin açısını bulur ve açıyı kabul ettiğinizde sayfayı dikleştirir. |
| `SCANERASE` | `SCE` | Taranmış bir sayfanın bir alanını siler: dikdörtgen, çokgen ya da kement. |
| `SCANINFO` | `SCI` | Taranmış bir sayfanın özgün dosyasını ve o zamandan beri atılan adımları gösterir. |
| `SCANSCALE` | `SCS` | Taranmış bir sayfayı ölçekler: üzerinde iki nokta seçin ve aralarındaki gerçek mesafeyi yazın. |
| `SCANTRACE` | `SCT` | Taranmış bir sayfayı yeni bir katmanda, sizin belirlediğiniz toleransla çizgi ve yaylara izler. Metin ve taramalar raster olarak kalır. |
| `SELECT` |  | Nesneleri şimdi seçer (sonraki komutta Önceki için P) |
| `SELECTALL` | `AI_SELALL` | Bu sekmede düzenleyebileceğiniz her nesneyi seçer (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seçtiğiniz gibi her nesneyi seçer: aynı tür, katman ve renk (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Sayfa Takımı panelini gösterir: birçok çizimden sayfalar, numaralı, tek bir PDF olarak yayımlanır. |
| `SHORTCUTS` | `KEYS` | Herhangi bir komuta kendi tuşunu verir (Ctrl ya da Alt ile bir harf, ya da boş bir işlev tuşu); bu tarayıcıda ya da masaüstü uygulamasında saklanır. |
| `SHXFONTS` | `SHX` | CadCraft'a bir klasörden ya da dosyalardan SHX yazı tipleri verir; bunları adlandıran metin stilleri onlarla çizer (listele, kaldır, ters çevir) |
| `SKETCHFIX` | `SKF` | Serbest çizgiler çizin; her biri temiz bir çizgi, daire, yay, dikdörtgen ya da çoklu çizgi olur; köşeleri kare hale getirilir ve diğerlerine birleştirilir. |
| `SKETCHLIVE` | `SKL` | Kalemle çizin: her vuruş, kalemi kaldırdığınızda, çizime yakalanmış hassas bir çizgi, daire, yay ya da dikdörtgen olur; üzerine yazmak için boyutuyla. |
| `SPLINE` | `SPL` | Noktalardan geçen bir spline çizer (ya da bir kontrol çokgeniyle), ya da bir çoklu çizgiyi buna dönüştürür |
| `SPLINEDIT` | `SPE` | Spline'ı düzenler: nokta ve kontrol noktalarını ve ağırlıkları ayarlar, açar ya da kapatır, ters çevirir veya bir çoklu çizgiye dönüştürür |
| `SPLIT` |  | Çizim alanını bölmelere ayırır (modelde VPORTS gibi; sayfadan da) |
| `STEELMEMBER` | `SMEMBER` | Standart bir kesitten 3B çelik eleman: iki nokta (bir kiriş) ya da bir taban noktası ve bir yükseklik (Kolon) |
| `STLOUT` |  | 3B modeli STL olarak dışa aktarır (milimetre) |
| `STRETCH` | `S` | Gerdir: uçlar üzerinde bir kesişen pencereyi sürükleyerek taşıyın; içinde kalanlar taşınır, geri kalanı yerinde durur (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Metin stilleri: yeni metnin alacağı yazı tipi, yükseklik, genişlik ve eğim (iletişim kutusu; komut satırında -STYLE) |
| `SUBTRACT` | `SU` | Katıları diğerlerinden çıkarır (3B) ya da 2B bölgeleri bölgelerden |
| `SWBOUT` | `SWMACRO` | SolidWorks için bir makro indirir (.swb); model tek bir kısıtlı eskiz olarak yeniden kurulur |
| `SWEEP` |  | Kapalı 2B nesneleri bir yol (çizgi, çoklu çizgi, yay, daire) boyunca süpürerek katılara dönüştürür (3B) |
| `TABLE` | `TB` | Tablo oluşturur: satır ve sütunlar, ya da panodaki elektronik tablo hücrelerinden ya da bir CSV dosyasından |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Tabloyu düzenler: bir hücreye yazın, satır ve sütun ekleyin ve silin, boyutlar, birleştirilmiş hücreler, hizalama |
| `TABLEEXPORT` |  | Tablonun gösterdiğini bir CSV dosyası olarak kaydeder |
| `TABLEPASTE` | `PASTETABLE` | Panodaki elektronik tablo hücrelerinden bir tablo oluşturur |
| `TABLESTYLE` | `TS` | Tablo stilleri: başlık, üst bilgi ve veri satırları için metin yükseklikleri, hizalama, kenar boşluğu ve kenarlıklar |
| `TAGS` |  | Blok başvurularında etiketler: bir etiket tanımlayın (tür, izin verilen değerler, uygulanacağı bloklar), seçili başvurulara uygulayın ve bunları CSV olarak kaydedebileceğiniz bir liste halinde sıralayın |
| `TEXT` | `DT`, `DTEXT` | Tek satırlık metin; Enter bir sonraki satırı başlatır |
| `TEXTEDIT` | `ED`, `DDEDIT` | Metni yerinde düzenler: bir metin seçin (ya da çift tıklayın) (ED) |
| `TEXTMASK` | `TMASK` | Metinlerin arkasına bir arka plan maskesi koyar (çizimin arka planı ya da bir renk), ya da kaldırır. |
| `TEXTTOFRONT` |  | Tüm metni, ölçülendirmeleri ve belirtme çizgilerini diğer her şeyin önüne getirir. |
| `TOOLBAR` |  | Araç çubuğu düğmelerinin neyi göstereceğini seçer: simgeler ve metin, yalnızca simgeler ya da yalnızca metin (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Araç çubuğunu pencerenin üstüne, altına, soluna ya da sağına yerleştirir |
| `TOOLBARROWS` |  | Araç çubuğunun kaç satır kullanacağını seçer: sığacak şekilde sarma, 2 ya da 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Çizimin üstündeki çubukları standart ya da kompakt yapar |
| `TOUCHCROSSHAIR` | `TCX` | Parmakla çizim için ofsetli artı imleci: bir parmak, üstünde ve yanında duran bir artı imlecini hareket ettirir; böylece parmak seçilen noktayı kapatmaz. Parmağı kaldırmak hiçbir şey seçmez; Tıkla düğmesi ya da ikinci bir parmakla dokunuş, artı imlecindeki noktayı seçer ve Tıkla'yı basılı tutup hareket ettirmek sürükler. Uzun basış ya da Enter düğmesi Enter'dır. İki parmak kaydırır ve yakınlaştırır. Seçenekler: AÇIK, KAPALI, Otomatik (yalnızca bir parmağın tek işaretçi olduğu yerde açık), Mesafe, Taraf. |
| `TOUR` | `TUTORIAL` | Altı adımlık ilk çizim turunu yeniden alır |
| `TRIM` | `TR` | Nesneleri diğerlerinin kesiştiği yere kadar kırpar: bir parçaya tıklayın, birkaçının üzerinden sürükleyin ya da uzatmak için Shift+tıklayın |
| `TRIMEXTENDMODE` |  | KIRP ve UZAT nasıl başlar: 1 Hızlı (her nesne bir kesme kenarı ya da sınırdır), 0 Standart (önce kenarları seçersiniz) |
| `TTR` |  | Verdiğiniz yarıçapla iki nesneye teğet bir daire (CIRCLE T ile aynı) |
| `TURNLEFT` |  | Görünümü 90° sola (saat yönünün tersine) döndürür: UCS Z -90, ve görünüm izler. Çizimdeki hiçbir şey taşınmaz. |
| `TURNRIGHT` |  | Görünümü 90° sağa (saat yönünde) döndürür: UCS Z 90, ve görünüm izler. Çizimdeki hiçbir şey taşınmaz. |
| `TURNWORLD` |  | Dünyaya döner: UCS Dünya, ve görünüm yeniden yataydır. |
| `TXT2MTXT` | `T2M` | Tek satırlık metinleri üstten alta tek bir paragraf metninde birleştirir. |
| `UCS` |  | Kendi koordinat sisteminiz: bir başlangıç noktası ve bir X ekseni (Başlangıç, Z açısı, 3nokta, Nesne, Önceki, Dünya, Adlandırılmış). Yazdığınız noktalar, ortogonal, kutupsal izleme, ızgara ve yeni metin bunu izler; görünüm X ekseni yatay olacak şekilde döner. Çizimdeki hiçbir şey taşınmaz. |
| `UNDO` | `U` | Son komutu geri alır |
| `UNGROUP` |  | UNGROUP: grupları ayırır. Grupların nesnelerini seçin ya da bir Ad verin. Nesneler çizimde kalır. |
| `UNION` | `UNI` | Katıları tek bir katıda birleştirir (3B) ya da 2B bölgeleri tek bir bölgede |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS ya da HIDEOBJECTS ile gizlenen her nesneyi yeniden gösterir. |
| `UNITS` | `UN`, `DDUNITS` | Uzunlukların nasıl gösterildiği ve girildiği: ondalık, fit ve inç, kesirli (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Alanları yeniden hesaplar ve kendiliğinden ne zaman güncelleneceğini seçersiniz |
| `USDOUT` |  | 3B modeli USD olarak dışa aktarır (.usda metin, .usdc ikili ya da bir .usdz paketi) |
| `VIEW` | `-VIEW`, `V` | Standart 3B görünümler, perspektif ya da paralel (3B) |
| `VIEWBASE` | `FLATSHOT` | 3B katılarının düz bir 2B görünümünü (ön, üst, yan ya da izometrik; gizli çizgiler kesik) bir sayfaya ya da modele yerleştirir |
| `VIEWLABEL` | `VL` | Bir sayfada görünüm başlığı; görünüm penceresinin görünüm adını gösterir ve onunla değişir. |
| `VOICE` |  | Sesli komutları açar ya da kapatır. Bu bilgisayarda tanınırlar. |
| `VPCLIP` |  | Bir sayfa görünüm penceresini kapalı bir nesneye ya da çizilen bir çokgene kırpar; Sil onu yeniden dikdörtgen yapar |
| `VPLAYER` |  | Katmanları yalnızca bazı görünüm pencerelerinde dondurur ya da çözer (Dondur, Çöz, Sıfırla) ve yeni görünüm pencerelerinin hangi katmanlarla donmuş başlayacağını seçer (Vpvisdflt) |
| `VPORTS` | `VIEWPORTS` | Çizim alanını her biri kendi görünümüyle bölmelere ayırır (bir sayfada: MVIEW gibi bir görünüm penceresi) |
| `VPVIEW` |  | Görünüm penceresinin neyi göstereceğini ayarlar: modelde bir pencere seçin |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3B görünümün görsel stili: gölgeli, kenarlar, gizli çizgi, tel kafes, X-ışını |
| `WALL` | `WA` | 2B duvarları çoklu çizgi gibi çizer. Birbirine birleşirler ve kapı ile pencere taşırlar. |
| `WALLARC` | `WARC` | Bir duvar yayı çizer. Plan duvarları düz olduğundan yay, birleşen kısa düz duvarlar (her biri 15 derece) olarak çizilir. |
| `WALLDELSEG` |  | İki nokta arasındaki bir duvar parçasını siler. Kalan kısım bir ya da iki duvar olarak kalır. |
| `WALLDIM` |  | Bir ölçülendirme için yeni bir değer yazın: uzak uçtaki duvar kendine dik hareket eder, ilk uçtaki duvar yerinde kalır ve ona birleşen duvarlar izler. |
| `WALLDISJOIN` |  | Bir ucuna yakın bir duvarı seçerek o uçta birleşmeyi kapatın: uç kare çizilir ve hiçbir şey onu izlemez. Tekrar seçerek birleşmelere izin verin. |
| `WALLGRID` |  | Bir duvarı bir ızgara çizgisine kilitler: boyunca ya da bir ucu üzerinde. Çizgiyi GRIDMOVE ile taşıyın, duvar izler. |
| `WALLHOLD` |  | Hizala ve kilitle: bir duvar, başka bir duvara karşı yerini korur (çizgisinde ya da sahip olduğu mesafede). Biri hareket ederse öteki izler. |
| `WALLHOLDDIM` |  | İki paralel duvar arasındaki mesafeyi kilitler. Biri hareket ederse, öteki bunu korumak için izler. |
| `WALLHOLDS` |  | Duvarlardaki kilitleri listeler. |
| `WALLJOINS` |  | Eski bir çizimin her duvarına kimliğini verir ve aralarındaki birleşimleri saklar. Bu, yaptığınız ilk değişiklikte de olur. |
| `WALLJOINSTYLE` |  | Uç uca birleşen iki duvarın köşesine tıklayarak nasıl çizileceğini değiştirin: gönye, düz kesim ya da köşeyi kare yap. T hangi duvarın geçeceğini değiştirir. |
| `WALLOFFSET` | `WO` | Bir duvarı bir mesafe kadar kendine dik taşır (birleşen duvarlar izler) ya da o mesafede bir kopya yapar. |
| `WALLPICK` |  | Çizimdeki bir çizgi ya da çoklu çizgi üzerinde duvarlar yapar; Evet derseniz ona birleşen çizgilerle birlikte. |
| `WALLPOLY` | `WP` | 3 ila 64 kenarlı düzgün bir çokgenin etrafına duvarlar çizer, POLYGON gibi. |
| `WALLRECT` | `WR` | İki karşılıklı köşeden dört birleşik duvar çizer, RECTANG gibi. |
| `WALLREJOIN` |  | Bir duvarın iki parçasını yeniden tek duvar yapar. İlki çizimdeki yerini korur. |
| `WALLROT` |  | Dört birleşik duvarı, herhangi bir açıyla döndürülmüş bir dikdörtgen olarak çizer: ilk kenar, sonra ne kadar dışarı. |
| `WALLSPLIT` | `WS` | Bir duvarı bir noktada ya da başka bir duvarın kesiştiği yerde ikiye böler. Parçalar, bir boşluk ya da serbest uç istemediğiniz sürece birleşik kalır. Kapılar ve pencereler kendi parçasıyla gider. |
| `WALLSPLITGAP` |  | Bir duvarı boşlukla böler: boşluğu yazın, duvarı, sonra noktayı seçin. Parçalar serbest uçları korur ve yeniden birleştirilebilir. |
| `WALLSTRETCH` |  | Bir pencereyle gerdirin: içindeki duvar uçları taşınır, tamamen içindeki duvarlar bütünüyle taşınır ve yanlarına dayanan duvarlar onlarla kayar. |
| `WALLTAN` |  | Bir duvarı, onu boyunca terk eden bir yayla sürdürür (kısa düz duvarlar olarak çizilir). |
| `WALLTRACE` |  | Tıkladığınız noktanın çevresindeki çizgi ve duvarların oluşturduğu en küçük kapalı alanın etrafında duvarlar yapar. |
| `WALLUNHOLD` |  | Bir duvarın kilitlerini kaldırır (ve diğer duvarların ona olan kilitlerini). |
| `WBLOCK` | `W`, `-WBLOCK` | Bir bloğu, bazı nesneleri ya da tüm çizimi yeni bir DWG ya da DXF dosyasına yazar (W) |
| `WEDGE` | `WE` | Bir kama: iki köşe ve bir yükseklik; ilk köşeden uzaklaşarak eğilir (3B) |
| `WHEREAMI` | `WHERE` | İmlecin nerede olduğunu söyler. |
| `WHOHAS` |  | Bir çizimi kimin açık tuttuğunu söyler. CadCraft Studio, açık her çizimin yanında küçük bir kilit dosyası tutar (Plan.dwg.cclock: kim, ne zamandan beri, hangi sürüm) ve kapatıldığında kaldırır. Seçenekler: Geçerli (açık çizim), Dosya (birini seçin), Klasör (bir klasördeki her açık çizim; Studio bu klasörde kilit dosyaları tutabilir), Yol (birini yazın), Ad (başkalarının gördüğü ad). Beş dakikadır yenilenmeyen bir kilit eskimiş sayılır. Tarayıcıda kullanılamaz. |
| `WINDOW` | `WN` | Bir duvara pencere koyar. |
| `XATTACH` | `XA` | Başka bir DWG ya da DXF'i bu çizime bağlar; salt okunur gösterilir (XREF onları listeler ve yeniden yükler) |
| `XCLIP` | `XC` | Blok başvurularını ve bağlı çizimleri bir dikdörtgene ya da çokgene kırpar ya da kırpmayı kaldırır. |
| `XLINE` | `XL` | Yapı çizgisi, iki yönde de sonsuz: iki nokta üzerinden, yatay, düşey, bir açıda, bir açıyı ikiye bölen ya da bir çizgiden ofsetli. |
| `XREF` | `XR`, `-XREF` | Bağlı çizimler (dış referanslar): listele, ekle, yeniden yükle, bağla, ayır |
| `ZOOM` | `Z` | Sınırlar ya da bir pencere |
