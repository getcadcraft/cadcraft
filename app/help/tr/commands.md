---
title: Komut başvurusu
summary: CadCraft çizim uygulamasındaki her komut; takma adları, sorduğu sorular, seçenekleri ve varsayılanlarıyla.
keywords: komutlar, takma adlar, komut listesi, alan, çevre, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Bir komut adı ya da takma adı yazın ve {{key:Enter}} ya da {{key:Space}} tuşuna basın. Büyük ve küçük harf fark etmez; baştaki `_`, `-`, `.` ya da `'` yok sayılır. Çizim geçmişinde her komutun kısa bir listesini yazdırmak için `HELP` (ya da `?`) yazın; bu yardım için {{key:F1}} tuşuna basın.

İstemleri okuma: seçenekler köşeli parantez içindedir ve birini, büyük harflerini yazarak seçersiniz (çap için `D`). Varsayılan açılı parantez içindedir; kabul etmek için {{key:Enter}} tuşuna basın. Bir nokta istendiğinde, [Koordinat ve mesafe girişi](topic:coordinate-entry) bölümündeki biçimlerden herhangi birini tıklayabilir ya da yazabilirsiniz. Bir mesafe istendiğinde bir sayı yazabilir ya da iki nokta tıklayabilirsiniz.

Bir nokta ya da nesne istenen yerde ve varsayılan yokken {{key:Enter}} tuşuna basmak komutu bitirir. {{key:Esc}} onu iptal eder. Bir komutun yaptığı her şey tek bir geri al adımıdır.

## Çiz

### LINE

Takma ad: `L`. Düz parçalar; her biri kendi nesnesi.

- `İlk noktayı belirtin` (Enter: verdiğiniz son noktadan başlar)
- `Sonraki noktayı belirtin [Geri al (U)]`, tekrarlanır. İki parçadan sonra: `[Geri al (U)/Kapat (C)]`.
- `U` son parçayı geri alır, `C` ilk noktaya kapatır ve biter. Enter bitirir.

### PLINE

Takma ad: `PL`. Çizgi ve yay parçalarından oluşan tek bir çoklu çizgi.

- `Başlangıç noktasını belirtin`
- `Sonraki noktayı belirtin [Yay (A)/Kapat (C)/Geri al (U)]` (İki parça olduğunda Kapat)
- `A` yaylara geçer: `Yayın bitiş noktasını belirtin [Çizgi (L)/Kapat (CL)/Geri al (U)]`. Her yay, önceki parçaya teğet devam eder. `L` çizgilere geri döner, `CL` bir yayla kapatır.
- Enter bitirir; çoklu çizgi açık kalır.

### CIRCLE

Takma ad: `C`.

- `Daire için merkez noktasını belirtin [3P/2P/Ttr (teğet teğet yarıçap)]`
- `Dairenin yarıçapını belirtin [Çap (D)] <son yarıçap>`; `D` `Dairenin çapını belirtin` ister.
- `2P`: bir çapın iki ucu. `3P`: dairenin üzerindeki üç nokta.
- `T` (ayrıca `TTR` komutu ve {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Daire: Teğet, Teğet, Yarıçap}}): `Dairenin ilk teğeti için nesne üzerinde bir nokta belirtin`, ikincisi, sonra yarıçap (Enter: sonuncusu). Daire, her iki nesneye de teğet olur (çizgiler, yaylar, daireler, çoklu çizgi parçaları; bloklar içinde de); teğet olanlar arasında seçtiğiniz noktalara en yakın olan. Hiçbiri uymazsa "Daire mevcut değil" çıkar.
- `TTT` (ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Daire: Teğet, Teğet, Teğet}}): üç nesne; üçüne de teğet olan daire, seçimlerinize en yakın olan (üç çizgi, nereyi seçtiğinize bağlı olarak iç ya da dış bir daire verir).

### ARC

Takma ad: `A`.

- `Yayın başlangıç noktasını belirtin [Merkez]`, `Yayın ikinci noktasını belirtin`, `Yayın bitiş noktasını belirtin`: üç noktadan geçen bir yay.
- `C`: `Yayın merkez noktasını belirtin`, `Yayın başlangıç noktasını belirtin`, `Yayın bitiş noktasını belirtin`. Yay, başlangıçtan bitişe saat yönünün tersine ilerler.

### RECTANG

Takma ad: `REC`, `RECTANGLE`. Kapalı bir çoklu çizgi.

- `İlk köşe noktasını belirtin`, `Diğer köşe noktasını belirtin`. İkinci köşe için `@genişlik,yükseklik` yazın.

### POLYGON

Takma ad: `POL`. Kapalı bir çoklu çizgi olarak düzgün bir çokgen.

- `Kenar sayısını girin <4>` (3 ile 1024 arası)
- `Çokgenin merkezini belirtin`
- `Bir seçenek girin [Daire içine yazılı/Daire dışına çizilmiş] <I>`
- `Dairenin yarıçapını belirtin`: bir noktayı tıklayın ya da yazın; uzaklığı boyutu, yönü çokgeni döndürür.

### ELLIPSE

Takma ad: `EL`.

- `Elips için eksen uç noktasını belirtin [Merkez]`, `Eksenin diğer uç noktasını belirtin`, `Diğer eksene olan mesafeyi belirtin`
- `C`: `Elipsin merkezini belirtin`, `Eksenin uç noktasını belirtin`, sonra diğer eksene olan mesafe.
- `I` (`Isocircle`, yalnızca {{cmd:ISODRAFT}} açıkken): merkez, sonra yarıçap ya da `Diameter`: bir dairenin geçerli izometrik düzlemde gösterildiği elips.

### HATCH

Takma ad: `H`, `BH`, `BHATCH`; ya da araç çubuğunda {{ui:Taralama}}. Önce geçerli deseni, ölçeği ve açıyı yazdırır.

- `Bir iç nokta seçin [Nesne seç/Desen/Ölçek/Açı]`, tekrarlanır (bir alan oluştuğunda `Geri al`): her tıklama, etrafındaki kapalı alanı ekler; içindeki kapalı şekiller adacık olur. Enter, hepsinden tek bir tarama yapar.
- `S`: `Kapalı nesneleri seçin` (kapalı çoklu çizgiler, daireler, kapalı elipsler).
- `P`: `Bir desen adı, SOLID ya da liste için ? girin <geçerli>`. `SC`: `Desen ölçeğini belirtin`. `A`: `Desen açısını belirtin`.
- `G` (Geçiş): dolgu, desen yerine bir geçiştir. Sorular için bkz. {{cmd:GRADIENT}}.

Bkz. [Taralama ve dolgu alanları](topic:hatch).

### GRADIENT

Takma ad: `GD`. Bir alanı bir ya da iki renkli bir geçişle doldurur. Önce geçişi sorar, sonra {{cmd:HATCH}} gibi devam eder (`İç nokta belirtin`, kapalı nesneler için `S`, bitirmek için {{key:Enter}}).

- `Bir geçiş seçeneği girin [Tür/Tek renk/İki renk/Açı/Ortalanmış/Çıkış] <X>`, tekrarlanır; her seferinde geçişin o anki halini yazdırır.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` ya da bunlardan birinin ters hali (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). İlk harfler yeterlidir.
- `O`: tek renk, sonra 0 ile 1 arasında tonu (0 onu siyaha boyar, 0,5 rengin kendisidir, 1 beyaza boyar). `TW`: birinci ve ikinci renk. Bir renk 1 ile 255 arasında bir sayı, `255,128,0` gibi üç sayı ya da `#rrggbb` olabilir.
- `A`: geçişin çalıştığı açı. `C`: ortalanmış Evet ya da Hayır (Hayır, geçişin ortasını bir yana taşır).
- Bilmediği bir renk ya da türü, 0 ile 1 dışında bir tonu reddeder.

Daha sonra {{cmd:HATCHEDIT}} `G` ve Özellikler (Geçiş) bir geçişi değiştirir ya da herhangi bir taramayı bir geçişe çevirir. Geçiş ekranda çizilir ve çıktıda basılır. DWG 2004 ve sonrası onu gerçek bir geçiş taraması olarak tutar; DXF 2000 ve DWG 2000 onu CadCraft için tutar, diğer programlar ilk renkte katı bir dolgu görür.

### HATCHGENERATEBOUNDARY

Takma ad: `HGB`. Sınırını kaybetmiş bir taramadan sınırı yeniden oluşturur. `Taramaları seçin` (ya da önce seçin), sonra `Her taramayı yeni sınırına bağlayın, tarama onu izlesin mi? [Evet/Hayır] <Evet>`.

- Taramanın her döngüsü, taramanın katmanında kapalı bir çoklu çizgi olur; yeni çoklu çizgiler seçili bırakılır. Kavisli bir kenar, taramanın tuttuğu kısa düz parçalar olarak geri gelir.
- Evet ile tarama yeni sınırını izler; {{cmd:HATCH}} ile yapılan bir tarama gibi. Tek bir geri al adımı.
- Hiçbir tarama seçilmediğinde bunu söyler.

### POINT

Takma ad: `PO`; ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Nokta}}. Enter'a kadar her tıklamada bir nokta nesnesi.

- `Bir nokta belirtin`

### XLINE

Takma ad: `XL`; ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Yapı çizgisi}}. İki yönde sonsuz yapı çizgileri. Bkz. [Yapı çizgileri ve ışınlar](topic:construction-lines).

- `Bir nokta belirtin [Yat/Dik/Açı/İkiye böl/Ofset]`, sonra her çizgi için `Geçecek noktayı belirtin`, Enter'a kadar.
- `A`: `Yapı çizgisinin açısını girin [Referans] <0>`; `R` önce `Bir çizgi nesnesi seçin` ister.
- `B`: `Açının köşe noktasını belirtin`, `Açının başlangıç noktasını belirtin`, sonra her çizgi için `Açının bitiş noktasını belirtin`.
- `O`: `Ofset mesafesini belirtin [Geçen] <Geçen>`, sonra her çizgi için `Ofset yapılacak bir çizgi nesnesi seçin` ve `Ofset yapılacak tarafı belirtin` (ya da `Geçecek noktayı belirtin`).

### RAY

Takma ad yok; ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Işın}}. `Başlangıç noktasını belirtin`, sonra her ışın için `Geçecek noktayı belirtin`, Enter'a kadar.

### TEXT

Takma ad: `DT`, `DTEXT`; ya da araç çubuğunda {{ui:Metin}}. Tek satırlık metin; her satır kendi nesnesi.

- `Metnin başlangıç noktasını belirtin [Hizala]`
- `J`: `Bir seçenek girin [Sol/Orta/Sağ/Ortası/TL/MC] <L>`, sonra `Metnin ekleme noktasını belirtin`
- `Yüksekliği belirtin <geçerli metin yüksekliği>`
- `Metnin dönme açısını belirtin <0>`
- `Metni girin`, tekrarlanır: her Enter, bir sonraki satırı altta başlatır. Boş bir satırda Enter bitirir. {{key:Space}} burada bir boşluk yazar.

### DIVIDE

Takma ad: `DIV`. {{cmd:DIVIDE}}, bir çizgi, yay, daire, çoklu çizgi, spline ya da elipsi eşit parçalara bölen işaretler koyar. Nesneyi seçin, sonra parça sayısını girin (2 ile 32767). Açık bir nesnede parça sayısından bir eksik işaret olur; kapalı bir nesnede başlangıçta da bir işaret olur. Nesnenin kendisi kesilmez. İşaretler noktadır; `Blok` bunun yerine bu çizimden bir blok ister ve bloğun nesneyi izleyip dönüp dönmeyeceğini sorar. Spline ve elipslerdeki uzunluklar kısa kirişler boyunca ölçülür. Metni, taramaları ve uzunluğu olmayan diğer nesneleri reddeder.

### MEASURE

Takma ad: `ME`. {{cmd:MEASURE}}, bir çizgi, yay, daire, çoklu çizgi, spline ya da elips boyunca verilen her uzunlukta bir işaret koyar; işaretler, seçtiğiniz uca en yakın uçtan başlayarak sayılır (kapalı bir nesnede: başlangıçtan). Uzunluğu yazarak ya da iki noktayla verin. Açık bir nesnenin uzak ucuna işaret konmaz. `Blok`, her işarette nokta yerine bir blok yerleştirir. Uzunluğu 0 olan, nesneden uzun olan ya da 32767'den fazla işaret yapacak bir uzunluğu reddeder.

### BOUNDARY

Takma ad: `BO`, `BPOLY`. {{cmd:BOUNDARY}}, seçtiğiniz noktanın bulunduğu alanın etrafında, ekranda onu sınırlayan çizgi, yay, daire, çoklu çizgi ve eğrilerden kapalı bir çoklu çizgi yapar. Bir yay ya da daire üzerindeki parçalar yay parçası olarak geri gelir; elips ve spline parçaları kısa düz parçalar olarak geri gelir. `Adalar` açıkken (başlangıç ayarı), içindeki her kapalı alan da kendi çoklu çizgisini alır. Nokta seçmeye devam edin; Enter bitirir. Alanı sınırlayan nesneler olduğu gibi kalır. Noktayı içine alan kapalı bir alan yoksa bunu söyler.

### BLEND

{{cmd:BLEND}}, iki açık eğrinin uçları arasında bir spline çizer. Birleştirmek istediğiniz uca yakın her eğriyi seçin. `CONtinuity` `Tangent` (spline her iki eğriden de teğet ayrılır ve teğet gelir) ya da `Smooth` (uçlarda büküldükleri yönde de bükülür) seçer; seçim oturum boyunca korunur. İki eğri değişmez. Kapalı nesneleri ve zaten birleşen iki ucu reddeder.

### REGION

Takma ad: `REG`. {{cmd:REGION}}, kapalı nesneleri bölgelere çevirir: birleştirebileceğiniz, kesebileceğiniz ve ölçebileceğiniz düz alanlar. Kapalı daireleri, kapalı çoklu çizgileri, kapalı elipsleri ya da kapalı spline'ları, ya da uçtan uca bir döngü kapatan çizgi, yay ve açık çoklu çizgileri seçin; her döngü bir bölge olur ve kaynaklandığı nesnelerin yerini alır. Yaylar yay olarak kalır; elipsler ve spline'lar kısa düz parçalara dönüşür. Kapalı olmayan ve hiçbir döngü kapatmayan şeyler olduğu gibi kalır ve bunların sayısını söyler. Çizimde bir bölge, adlandırılmamış bir grup olarak tutulan bir ya da daha fazla kapalı çoklu çizgidir; böylece bir tıklama bütün bölgeyi seçer ve bir kopya kendi başına bir bölgedir; dosyayı açan diğer programlar kapalı çoklu çizgiler görür.

Çizimde bölgeler varken, 2B sekmesindeki {{cmd:UNION}}, {{cmd:SUBTRACT}} ve {{cmd:INTERSECT}} bölgelerle çalışır: `UNION` seçili bölgeleri tek birinde birleştirir (birbirinden ayrı bölgeler, birden çok ana hatlı tek bir bölge olur), `SUBTRACT` önce çıkarılacak bölgeleri, sonra da alınacakları ister (bir delik bölgenin parçası olarak kalır), `INTERSECT` hepsinin paylaştığı alanı tutar. Her biri sonucun alanını söyler ve tek bir geri al adımıdır. Geriye hiçbir şey kalmayacaksa ya da ortak bir alan yoksa reddederler. 3B sekmesinde ve bölge olmayan bir çizimde, aynı komutlar daha önceki gibi katılarla çalışır.

## Değiştir

### MTEXT

Takma ad: `MT`, `T`; ya da araç çubuğunda {{ui:Paragraf}}. Bir genişliğe sarılan ve yerinde yazılan paragraf metni.

- `İlk köşeyi belirtin`
- `Karşı köşeyi belirtin [Yükseklik/Hizala/Satır aralığı/Döndürme/Genişlik]`: iki köşe arasındaki genişlik, metnin sarılacağı yerdir. `H` `Yüksekliği belirtin` ister, `J` `Hizalamayı girin [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Satır aralığı çarpanını girin (0,25 ile 4)`, `R` `Döndürme açısını belirtin`, `W` `Genişliği belirtin (sarma yok için 0)` ister ve ikinci köşeyi atlar.
- Sonra çizimde bir kutu açılır: yazın, yeni bir paragraf için {{key:Enter}}, bitirmek için {{key:Mod+Enter}} ya da dışarı tıklama, vazgeçmek için {{key:Esc}}. Çubuğu yüksekliği, satır aralığını, genişliği ve hizalamayı ayarlar. Bkz. [Metin ve etiket ekleme](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Takma ad: `ED`, `DDEDIT`; ya da bir metne çift tıklayın. `Düzenlenecek bir metin seçin`, Enter'a kadar tekrarlanır: her biri aynı kutuda açılır. Seçili ya da çift tıklanmış bir metinde başlatılırsa, o metni düzenler ve biter.

### ERASE

Takma ad: `E`, `DELETE`; ya da nesneler seçiliyken {{key:Delete}} tuşuna basın.

- `Nesneleri seçin` (nesneler zaten seçiliyse atlanır)

### MOVE

Takma ad: `M`.

- `Nesneleri seçin`
- `Temel nokta belirtin [Yer değiştirme]`, `İkinci noktayı belirtin`
- `D`: `Yer değiştirmeyi belirtin`, `dx,dy` biçiminde yazılır.

### COPY

Takma ad: `CO`, `CP`. Verdiğiniz nokta kadar kopyalar.

`İkinci nokta` isteminde `Dizi`, bir satırı tek seferde oluşturur: öğe sayısını (özgün nesne bir sayılır) ve ardından ilk kopyanın gideceği noktayı verin; diğerleri aynı aralıkla gelir. `Sığdır`, bu noktayı son kopyanın yeri yapar; aradakiler eşit aralıkla dağılır.

- `Nesneleri seçin`
- `Temel nokta belirtin [Yer değiştirme]`
- `İkinci noktayı belirtin [Geri al (U)]`, Enter'a kadar tekrarlanır. `U` son kopyayı geri alır.

### ROTATE

Takma ad: `RO`.

- `Nesneleri seçin`, `Temel nokta belirtin`
- `Dönme açısını belirtin <son açı>`: derece cinsinden, saat yönünün tersi pozitiftir; ya da ona doğru döndürmek için bir nokta tıklayın.

### SCALE

Takma ad: `SC`.

- `Nesneleri seçin`, `Temel nokta belirtin`
- `Ölçek faktörünü belirtin`: `0.5` ya da `2` gibi bir faktör yazın. Tıklanan bir nokta, temel noktadan uzaklığını faktör olarak verir.

### MIRROR

Takma ad: `MI`.

- `Nesneleri seçin`
- `Ayna çizgisinin ilk noktasını belirtin`, `Ayna çizgisinin ikinci noktasını belirtin`
- `Kaynak nesneleri silinsin mi? [Evet/Hayır] <H>`

### ALIGN

Takma ad: `AL`; ya da {{ui:Değiştir}} › {{ui:Daha fazla}} › {{ui:Hizala}}.

- `Nesneleri seçin`
- `İlk kaynak noktayı belirtin`, `İlk hedef noktayı belirtin`
- `İkinci kaynak noktayı belirtin (devam etmek için Enter)`, `İkinci hedef noktayı belirtin`
- `Üçüncü kaynak noktayı belirtin (devam etmek için Enter)`, `Üçüncü hedef noktayı belirtin`
- İki çiftle: `Nesneler hizalama noktalarına göre ölçeklensin mi? [Evet/Hayır] <H>`

Bkz. [Nesneleri hizalayın](topic:modify-objects#align-objects).

### ALIGNTO

- `Nesneleri seçin` (ya da seçim), `Hizala [Sol/Orta/Sağ/Üst/Ortası/Alt] <Sol>`, `Hedef [Seçim/İlk/Son/Nokta] <Seçim>`; `P` noktayı ister. Seçim kalır.

### DISTRIBUTE

- `Nesneleri seçin` (en az üç), `Dağıt [Yatay/Dikey] <Yatay>`, `Eşit aralıkla yerleştir [Merkezler/Boşluklar] <Boşluklar>`. Dıştaki iki nesne yerinde kalır; seçim kalır.

### ALIGNPANEL

Takma ad: `ALP`; ya da {{ui:Değiştir}} › {{ui:Daha fazla}} › {{ui:Hizala ve dağıt}}. Tıklamalarla ALIGNTO ve DISTRIBUTE çalıştıran paneli açar.

### LASER

Takma ad: `LASERCUT`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Lazer…}}. Çizimin üzerinde Lazer panelini açar: her katmanın ne yaptığı (kesme, çizgi, gravür, dolgu, resim), önizleme, kaydedilecek GRBL G-code ve Web Serial üzerinden çerçeveleme ve gönderme. Bkz. [Çizimi bir lazere gönderin](topic:laser-cutting).

### STRETCH

Takma ad: `S`; ya da {{ui:Gerdir}}. `Gerdirilecek nesneleri seçin`: uçların üzerine kesişen pencereler sürükleyin (ya da `C` yazın) ve taşıyın. `Temel nokta belirtin [Yer değiştirme]`, `İkinci noktayı belirtin`. Pencerelerin içindeki noktalar taşınır: çizgi uçları, çoklu çizgi köşeleri (yay parçaları yüksekliğini korur), ölçülendirme noktaları; daireler, elipsler, metin, noktalar ve bloklar, merkezleri ya da ekleme noktaları içindeyse bütün olarak taşınır. Komuttan önce yapılan bir seçim, onu oluşturan kesişen pencereleri (ve kementleri) korur; böylece aynı şekilde gerdirirler. Pencere olmadan nesneler bütün olarak taşınır.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Takma ad: `AR`; ya da {{ui:Dizi}}. `Nesneleri seçin`, sonra `Dizi türünü girin [Dikdörtgen/Kutupsal] <Dikdörtgen>` (yalnızca ARRAY).

- Dikdörtgen, nesnelerin boyutunun 1,5 katı aralıkla 4 sütun × 3 satırla başlar ve önizleme olarak gösterilir. `Bir seçenek girin [SAYı/Aralık/SÜtun/Satır/Çıkış] <Ç>`: `SAY` sütun ve satır sayılarını, `A` sütunlar arası ve satırlar arası mesafeleri (negatif sola ya da aşağı gider), `SÜ` ve `S` her yönü tek tek ister.
- Kutupsal, `Dizi için merkez noktasını belirtin` ister; 6 öğeyle başlar, etrafını çevirir ve döndürür. `Bir seçenek girin [Öğeler/Doldurma açısı/Öğeleri döndür/Çıkış] <Ç>`: `Ö` öğe sayısı, `D` doldurulacak açı (+ saat yönünün tersi, − saat yönü), `ÖD` Evet ya da Hayır.
- {{key:Enter}} (Çıkış), kopyaları düz nesneler olarak oluşturur. Tek bir geri al adımı.
- `İ` (İlişkisel), düz kopyalar ile sonradan {{cmd:ARRAYEDIT}} ile değiştirebileceğiniz, düzenlenebilir kalan tek bir nesne arasında geçiş yapar. Seçim hatırlanır ({{cmd:ARRAYASSOCIATIVITY}}); başlangıçta düz kopyalardır.

### ARRAYPATH

Bir eğri boyunca kopyalar. `Nesneleri seçin`, sonra `Yol eğrisini seçin`: bir çizgi, yay, daire, elips, çoklu çizgi ya da spline (dizilen nesnelerden biri olmamalı). Yol, nesnelere daha yakın olan ucundan başlar; ilk öğe nesnelerin bulunduğu yerdir.

- `Bir seçenek girin [Yöntem/Öğeler/Aralık/Hizala/İlişkisel/Çıkış] <Ç>`, önizlemeyle. `Y`: `Bölme` öğeleri yolun tamamına eşit dağıtır, `Ölçme` her belirli uzunlukta bir tane koyar. `Ö`: öğe sayısı (Ölçme ile 0, sığan kadar anlamına gelir; yolun sonunu aşan bir sayı, sığana kadar tutulur). `A`: öğeler arası yol mesafesi (Ölçme'ye geçer). `H`: Evet her öğeyi yolu izleyecek şekilde döndürür, Hayır dik tutar.
- `İ`, {{cmd:ARRAY}} ile aynıdır. Açıkken dizi, yolun kendi şeklinin kopyasını tutar: bundan sonra eğriyi düzenlemek öğeleri taşımaz.
- Bir eğri olmayan bir yolu ve tek bir öğeyi reddeder.

### ARRAYEDIT

İlişkisel ile oluşturulmuş bir diziyi değiştirir. `Diziyi seçin` (ya da önce seçin). Dizinin şu anki halini yazdırır, sonra {{key:Enter}}'a kadar sorar:

- Dikdörtgen: `SÜ` sütunlar ve aralıkları, `S` satırlar ve aralıkları, `A` sütunların çalıştığı açı.
- Kutupsal: `Ö` öğe sayısı, `D` doldurma açısı, `ÖD` öğeleri döndür Evet ya da Hayır.
- Yol: `Y` Bölme ya da Ölçme, `Ö` öğe sayısı, `A` aralık, `H` yolu izleme.
- `K` (Kaynak), dizinin tekrarladığı nesneleri, blok düzenleyicisi gibi kendi başlarına açar. Orada çizin ve düzenleyin; {{cmd:ARRAYCLOSE}} kaydeder ya da atar ve her öğe izler.
- `YE` (YEniden), `Değiştirme nesnelerini seçin`, `Değiştirme nesnelerinin temel noktasını belirtin`, sonra değiştirilecek öğelere tıklayın, {{key:Enter}}. Bu öğeler yerine değiştirmeyi gösterir; değiştirme nesneleri çizimden çıkar ve dizinin içinde yaşar. `SI` (SIfırla) her öğede kaynak nesneleri yeniden gösterir.
- Her değişiklik tek bir geri al adımıdır. Düz kopyaları, düz bir blok başvurusunu ve kilitli bir katmandaki bir diziyi reddeder.

Aynı sayılar Özellikler'de Dizi altındadır; dizinin tutamaçları vardır: temel noktası onu taşır, ikinci öğedeki tutamaç aralığı belirler, son öğenin ötesindeki tutamaç sayıyı belirler (kutupsal: ikinci öğe kaç öğe olacağını, son öğe doldurma açısını belirler). {{cmd:EXPLODE}}, bir diziyi yeniden düz kopyalara çevirir.

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Kaynağını bitirir: `Dizinin kaynak nesnelerindeki değişiklikler kaydedilsin mi? [Kaydet/Vazgeç] <Kaydet>`. Açık bir dizi kaynağı yoksa bunu söyler. {{cmd:BCLOSE}} aynısını yapar.

### ARRAYASSOCIATIVITY

`ARRAYASSOCIATIVITY için yeni değeri girin (1 = diziler düzenlenebilir kalır, 0 = düz kopyalar)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ve {{cmd:ARRAYPATH}}'in başlangıç kipini belirler; `İ` seçeneği aynı ayarı değiştirir. Bu tarayıcıda hatırlanır.

### OFFSET

Takma ad: `O`. Çizgiler, yaylar, daireler ve çoklu çizgiler.

Bir çoklu çizgi dışa doğru hareket ettiğinde ve düz parçaları bir köşede ayrıldığında, boşluğun nasıl kapatılacağına {{cmd:OFFSETGAPTYPE}} karar verir.

- `Ofset mesafesini belirtin [Geçen] <son mesafe ya da Geçen>`
- `Ofset yapılacak nesneyi seçin`, sonra `Ofset yapılacak tarafta bir nokta belirtin` (ya da Geçen ile `Geçecek noktayı belirtin`), Enter'a kadar tekrarlanır.

### OFFSETGAPTYPE

- `Ofset köşe boşlukları: 0 uzat, 1 yuvarla, 2 pah`: {{cmd:OFFSET}}'in bir çoklu çizginin dış köşelerindeki boşlukları nasıl kapatacağı. `0` parçaları birleşene kadar uzatır (başlangıç ayarı), `1` eski köşenin etrafında bir yayla birleştirir, `2` düz bir kesimle. İç köşeler ve yay parçaları etkilenmez. Bu oturum için korunur.

### EXTRIM

{{cmd:EXTRIM}}, bir kenarın bir tarafındaki her şeyi kırpar. Kesme kenarını seçin (bir çizgi, yay, daire, çoklu çizgi, elips, spline ya da yapı çizgisi), sonra temizlenecek tarafta bir nokta seçin: kenarı geçen her çizgi, yay, daire, çoklu çizgi ve yapı çizgisi, o taraftaki parçasını, kenardan başlayarak kaybeder. Tarafı seçerken, gidecek parçalar imleci izler. Kapalı bir kenar için taraflar içi ve dışıdır. Yalnızca kenara dokunan nesneler ile kenarı geçen metin, taramalar, spline'lar ve elipsler olduğu gibi kalır. Tek bir geri al adımı.

### TRIMEXTENDMODE

- `TRIMEXTENDMODE için yeni değeri girin (1 Hızlı, 0 Standart)`: {{cmd:TRIM}} ve {{cmd:EXTEND}}'in nasıl başlayacağı. `1` Hızlı: her nesne bir kesme kenarı ya da sınırdır. `0` Standart: önce kenarları sorarlar. LISP'te `(setvar "TRIMEXTENDMODE" 0)` de olur.

### TRIM

Takma ad: `TR`. Önce `Geçerli ayarlar: Hızlı kip (TRIMEXTENDMODE 1), kenarlar: Uzatma yok, sürükleme bir yol çizer` yazdırır. Hızlı kipte görünen her nesne bir kesme kenarıdır ve hiçbir şey onu geçmiyorsa silinir; Standart kipte önce `Kesme kenarlarını seçin (Enter = her nesne)` ister ve yalnızca onlarda keser.

- `Kırpılacak nesneyi seçin ya da uzatmak için Shift ile seçin [Kesme kenarları (T)/Çit (F)/Kesişen (C)/Kip (O)/Kenar (E)/Sil (R)/Geri al (U)]`, tekrarlanır: kaldırılacak parçaya tıklayın (imleç üzerinde dururken gri ve kesikli görünür), birkaç parçanın üzerinden bir yol sürükleyin (hepsi tek adımda gider) ya da aralarında bir çit için iki boş nokta tıklayın. {{key:Shift}} bunun yerine uzatır. `T` kesme kenarlarını seçer (Standart kip), `F` çit noktalarını ister, `C` iki pencere köşesi (kısmen içinde kalan parçalar gider), `O` `Bir kırpma kipi seçeneği girin [Hızlı/Standart]` ister, `E` `Örtük bir kenar uzatma kipi girin [Uzat/Uzatma yok]` (EDGEMODE) ister, `R` seçtiğiniz nesneleri siler, `U` son seçimi ya da sürüklemeyi geri alır. Enter bitirir. Bkz. [Kırp ve uzat](topic:trim-and-extend).
- Taramaya tıklamak onu keser: kesme kenarları taralı alanı böler ve tıkladığınız parça alınır (çizilmiş bir dış hat, eskiden olduğu yerde kalmaz). Tarama, deseni ya da geçişini korur; sınırına bağlıysa, artık onu doldurmadığı için sonradan bağlı olmaz. Orada hiçbir kesme kenarı taramayı bölmediğinde, tıklama taramanın dışındaysa ya da hiçbir şey kalmayacaksa bunu söyler ({{cmd:ERASE}} kullanın). Sürüklenen bir yol ya da çit taramaları kesmez.

### EXTEND

Takma ad: `EX`. TRIM'in tersi: `Uzatılacak nesneyi seçin ya da kırpmak için Shift ile seçin [Sınır kenarları/Çit/Kesişen/Kip/Kenar/Geri al]`. Bir tıklama, ona en yakın ucu bir sonraki sınıra kadar uzatır; sürüklenen bir yol ya da çit, geçtiği her nesneyi uzatır; {{key:Shift}} kırpar. `S` sınır kenarlarını seçer (Standart kip). Kip ve Kenar, TRIM ile ortaktır.

### LINKVIEWS

Takma ad: `SYNCVIEWS`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Bölmelerin görünümlerini bağla}}, ya da çizim sekmelerindeki bağlantı simgesi. `Bölmelerin görünümlerini bağla [AÇIK/KAPALI]` (Enter diğer duruma geçer): açıkken, etkin bölmede bir kaydırma ya da yakınlaştırma, aynı türde alanı gösteren her bölmeyi taşır. Bkz. [Ekranı bölün](topic:split-screen).

### OPENIN3D

Takma ad yok; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:ModelCraft'ta aç}}; 3B modelleme uygulamasının devredilen bir çizimi aldığı yer. Çizimi orada, yeni bir sekmede bir DWG olarak açar (hiçbir şey yüklenmez). Tarayıcı sekmeyi engellerse bunu söyler.

### LASSOMODE

`LASSOMODE için yeni değeri girin (1 = kement, 0 = dikdörtgen)`: boş bir yerde basılı tutup sürüklemenin ne çizdiği. Ayarlar › CadCraft › Seçmek için sürükleme ile aynı. Bkz. [Kement seçimi](topic:lasso-selection).

### FILLET

Takma ad: `F`. Çizgiler, yaylar, daireler ve çoklu çizgiler. Önce `Geçerli ayarlar: Kip = TRIM, Yarıçap = 0` yazdırır.

- `İlk nesneyi seçin [Geri al (U)/Çoklu çizgi (P)/Yarıçap (R)/Kırp (T)/Birden çok (M)]`
  - `R` `Yuvarlatma yarıçapını belirtin <son>` ister. `T` `Kırpma kipi seçeneği girin [Kırp/Kırpma yok]` ister: Kırpma yok ile nesneler olduğu gibi kalır ve yalnızca yay eklenir.
  - `M` Enter'a kadar daha fazla köşe için komutu sürdürür; `U` komutu bırakmadan son köşeyi geri alır.
  - `P` `2B çoklu çizgi seçin [Yarıçap]` ister ve iki düz parçanın buluştuğu her köşeyi yuvarlatır. Zaten olan yuvarlatmalar yeni yarıçapla değiştirilir; yarıçap 0 bunları kaldırır. Kenarları yarıçap için çok kısa olan köşeler olduğu gibi bırakılır ve sayılır.
- `İkinci nesneyi seçin ya da köşeyi uygulamak için Shift ile seçin [Yarıçap]`. Keskin bir köşe için, yarıçap ne olursa olsun, tıklarken {{key:Shift}} tuşunu basılı tutun.

Tutmak istediğiniz parçanın üzerine her nesneye tıklayın. Birbirine değmeyen iki çizgi uzatılır. Birbirine paralel iki çizgiye, ilk çizginin tıkladığınız en yakın ucunda boşluğun üzerinden yarım daire çizilir. Bir daire asla kesilmez. Aynı çoklu çizginin yan yana iki parçası, yayı çoklu çizginin içine ekler; bir çoklu çizgi ve başka bir nesne, kesim çoklu çizginin ilk ya da son parçasına denk geldiğinde çalışır.

### CHAMFER

Takma ad: `CHA`. Çizgiler ve çoklu çizgilerin düz parçaları. Önce geçerli mesafeleri (ya da uzunluk ve açıyı) yazdırır.

- `İlk çizgiyi seçin [Geri al (U)/Çoklu çizgi (P)/Mesafe (D)/Açı (A)/Kırp (T)/Yöntem (E)/Birden çok (M)]`
  - `D` `İlk pah mesafesini belirtin <son>` ve `İkinci pah mesafesini belirtin <birincisi>` ister: birincisi seçtiğiniz ilk çizgiden, ikincisi diğerinden kesilir.
  - `A` `İlk çizgide pah uzunluğunu belirtin` ve `İlk çizgiden pah açısını belirtin` ister.
  - `E` (Yöntem), bir sonraki pahın ikisinden hangisini kullanacağını seçer. `T`, `M`, `U` ve `P`, {{cmd:FILLET}} ile aynı çalışır.
- `Köşeyi uygulamak için ikinci çizgiyi ya da Shift ile seçin [Mesafe/Açı/Yöntem]`. {{key:Shift}}+tıklama keskin bir köşe yapar.

Çizgiden uzun bir mesafe reddedilir (`Mesafe çok büyük.`).

### BREAK ve BREAKATPOINT

Takma ad: `BR`. `Nesneyi seçin` (tıkladığınız yer ilk noktadır), `İkinci kırma noktasını belirtin [İlk nokta]`; `F` `İlk kırma noktasını belirtin` ve `İkinci kırma noktasını belirtin` ister. Aradaki kısım gider; bir dairede, ilk noktadan saat yönünün tersine. BREAKATPOINT `Kırma noktasını belirtin` ister ve nesneyi orada ikiye böler (daire değil).

### LENGTHEN

Takma ad: `LEN`. `Ölçülecek bir nesneyi seçin [Fark (DE)/Yüzde (P)/Toplam (T)/Dinamik (DY)]`: bir seçim `Geçerli uzunluk` (ve bir yayın kapsadığı açıyı) yazdırır ve yeniden sorar. `DE` `Fark uzunluğunu girin (negatif kısaltır) [Açı]` ister, `P` `Yüzde uzunluğunu girin`, `T` `Toplam uzunluğu belirtin [Açı]`, `DY` sürükler. Sonra, Geri al ile tekrarlanan `Değiştirilecek nesneyi seçin [Geri al (U)]`: tıklamaya en yakın uç taşınır. Çizgiler, yaylar ve açık çoklu çizgiler.

### JOIN

Takma ad: `J`. `Birleştirilecek nesneleri seçin`. Uçtan uca buluşan çizgiler, yaylar ve açık çoklu çizgiler çoklu çizgi olur (zincir kapandığında kapalı); tek doğru üzerindeki çizgiler tek çizgi olur; tek bir daireye ait yaylar tek bir yay ya da daire olur. Geçmiş, kaç nesnenin birleştiğini ve kaçının birleşmediğini söyler.

### MATCHPROP

Takma ad: `MA`, `PAINTER`. `Kaynak nesneyi seçin`, sonra `Hedef nesneleri seçin [Ayarlar]` ve {{key:Enter}}. Katmanı ve rengi kopyalar; aynı türdeki nesneler arasında metin yüksekliğini ve genişliğini, ölçülendirme boyutlarını ya da tarama desenini kopyalar. `S` `Bir özelliği açın ya da kapatın [Renk/Katman/Metin/Ölçülendirme/Tarama]` ister, Enter'a kadar tekrarlanır; seçim oturum boyunca hatırlanır.

### EXPLODE

Takma ad: `X`. Çoklu çizgiler çizgi ve yaylara, blok başvuruları kendi nesnelerine, ölçülendirmeler çizgilere, ok uçlarına ve metne dönüşür. Düzenlenebilir kalan bir dizi ({{cmd:ARRAYEDIT}}) düz kopyalarına dönüşür.

- `Nesneleri seçin`

### GROUP

Takma ad: `G`. {{cmd:GROUP}}, seçili nesnelere ortak bir ad verir. Nesneleri seçin, sonra bir ad yazın (boşluksuz; `?` grupları listeler; Enter adsız bir grup yapar) ve adlandırılmış bir grup için isteğe bağlı bir açıklama. Bundan sonra bunlardan birine tıklamak ya da grubu kapsayan bir pencere, hepsini seçer; böylece birlikte taşınır, kopyalanır ve silinir; her nesne yine kendi nesnesidir. Bir nesne birkaç grupta olabilir. Bir grubun tümünün kopyası yeni bir adsız grup olur; tek bir üyenin kopyası gruba katılır. Gruplar, oluşturuldukları alana (model ya da bir sayfa) aittir. DWG ya da DXF olarak kaydettiğinizde ve dosyayı CadCraft'ta yeniden açtığınızda korunurlar; DXF 2000 dosyaları ayrıca diğer programlar için grup nesneleri de taşır ve açılan bir DXF ya da DWG'deki başka bir programda yapılmış gruplar okunur.

### UNGROUP

{{cmd:UNGROUP}}, grupları ayırır: grupların nesnelerini seçin (içinde oldukları her grup ayrılır) ya da `Ad` yazıp grubun adını girin. Nesneler çizimde kalır. Tek bir geri al adımı grupları geri getirir.

### GROUPEDIT

{{cmd:GROUPEDIT}}, bir grubu değiştirir. Nesnelerinden birini seçin ya da `Ad` ve adını yazın; zaten seçili bir grup olduğu gibi alınır. Sonra: `Ekle` nesneleri (tek tek seçilir, grup grup değil), `Kaldır` nesneleri, grubu `Yeniden adlandır`, `Açıklamasını` değiştir ya da `Seçilebilir` ayarlayın (bir nesneye tıklamanın grubun tamamını seçip seçmeyeceği). `Çıkış` ya da Enter bitirir. Nesnesi kalmayan bir grup kalkar.

### PICKSTYLE

- `Grup seçimi: 0 bir tıklama bir nesneyi seçer, 1 tüm grubunu`: `1` ile (başlangıç ayarı) gruplanmış bir nesne üzerinde tıklama ya da pencere tüm grubunu seçer; `0` ile tek tek nesneler seçilir, böylece bir üyeyi tek başına düzenleyebilirsiniz. Bu oturum için korunur.

## Pano

CadCraft'ın kendi panosu: bir çizim içinde, çizimler arasında ve bu tarayıcıdaki CadCraft sekmeleri arasında çalışır. Bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ya da {{ui:Düzenle}} grubundaki {{ui:Kopyala}}. Nesneleri, kullandıkları bloklar ve katmanlarla birlikte panoya kopyalar. Nesneler seçili kalır.

- `Kopyalanacak nesneleri seçin` (nesneler zaten seçiliyse atlanır)

### CUTCLIP

{{key:Mod+X}}, ya da {{ui:Daha fazla}} menüsündeki {{ui:Kes}}. Nesneleri panoya kopyalar, sonra siler (tek bir geri al adımı).

- `Kesilecek nesneleri seçin` (nesneler zaten seçiliyse atlanır)

### COPYBASE

Nesneleri, seçtiğiniz bir temel noktayla panoya kopyalar; yapıştırma o noktayı yerleştirir.

- `Temel nokta belirtin`
- `Kopyalanacak nesneleri seçin`

### PASTECLIP

{{key:Mod+V}}, ya da {{ui:Düzenle}} grubundaki {{ui:Yapıştır}}. Kopya imleci izler; kapsamının sol alt köşesinden (ya da merkezinden ya da `COPYBASE` noktasından; bkz. [CadCraft ayarları](topic:settings)) asılır.

- `Ekleme noktasını belirtin`

Yapıştırılan nesneler seçili olur. Çizimde aynı adla zaten olan bir blok, bu çizimdeki tanımını korur.

Bir MarkupCraft'ta kopyalanan bir alan, CadCraft'ın kopyaladığından daha yeniyse (ve 6 saatten yeniyse), {{key:Mod+V}} ve `PASTECLIP` bunun yerine o alanı yapıştırır: bkz. `PASTEAREA`.

### PASTEAREA

Takma ad: `PAREA`. {{ui:Alanı yapıştır}}, {{ui:Daha fazla}} menüsünde. MarkupCraft'ta {{ui:Alanı kopyala}} ile kopyalanmış bir alanı gerçek boyutunda bir resim olarak yapıştırır. Bkz. [Çizimdeki resimler](topic:pictures).

- `Kopyalanan alanın sol alt köşesini belirtin`
- `Kâğıt boyutunu şununla ölçekleyin (1:100 bir sayfa için 100; Noktalar: üzerinde iki nokta ve gerçek mesafeleri) [Noktalar] <1>` (yalnızca sayfanın bir çizim ölçeği yoksa): bir sayı, kâğıt boyutu için {{key:Enter}}, ya da `N`, sonra `Yapıştırılan alan üzerinde ilk nokta`, `Yapıştırılan alan üzerinde ikinci nokta` ve gerçek mesafeleri.

### PASTEORIG

{{key:Mod+Shift+V}}, ya da {{ui:Daha fazla}} menüsündeki {{ui:Olduğu yere yapıştır}}. Nesnelerin kopyalandığı koordinatlara yapıştırır. Hiçbir şey sormaz.

### DUPLICATE

Takma ad: `DUP`. {{key:Mod+D}}, ya da {{ui:Daha fazla}} menüsündeki {{ui:Çoğalt ve taşı}}. Nesnelerin bir kopyası, bulunduğu yerden imleçle birlikte hareket eder; {{key:Esc}} hiçbir şey bırakmaz. Panoyu kullanmaz.

- `Çoğaltılacak nesneleri seçin` (nesneler zaten seçiliyse atlanır)
- `Kopyanın gideceği yeri belirtin (Esc hiçbir şey bırakmaz)`: tıklayın, bir nokta yazın, `@dx,dy` (imlecin olduğu yerden), ya da imleç yönünde bir mesafe.

### SELECT

`Nesneleri seçin` ister (aşağıdaki her seçenekle) ve seçtiğiniz nesneleri, bir sonraki komut için ya da daha sonra `P` için seçili bırakır.

### QSELECT

Takma ad: `QS`. Tarayıcıda, {{ui:Hızlı seçim}} iletişim kutusu (bkz. [Nesneleri seçin](topic:select-objects#select-by-a-rule-quick-select)). Onsuz komut satırı `Nesne türünü girin`, `Özelliği girin`, `Operatörü girin [=/<>/>/</*/Tümünü seç] <=>` ve `Değeri girin` ister. Eşleşenler seçim olur.

### SELECTSIMILAR

Takma ad: `SIM`. `Nesneleri seçin [Ayarlar]` (ya da mevcut seçim): aynı türde, aynı katman ve renkteki her nesneyi seçer (ve blok adı, tarama deseni). `SE` `Bir özelliği açın ya da kapatın [Katman/Renk/Ad/Desen/Yükseklik]` ister, Enter'a kadar tekrarlanır.

### FIND

Takma ad yok; ya da {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Bul ve değiştir}}. Tarayıcıda {{ui:Bul ve değiştir}} iletişim kutusu (bkz. [Metin ve etiket ekleme](topic:text#find-and-replace-words)). Onsuz: `Bulunacak metni girin`, sonra `Değiştirme metnini girin (Enter: bulunanı seçer)`. Metinde, öznitelik değerlerinde ve ölçülendirme metninde, açık sekmede ya da seçimde arar.

### SELECTALL ve DESELECT

`SELECTALL` (takma ad `AI_SELALL`, {{key:Mod+A}}), açık sekmede düzenleyebileceğiniz her nesneyi seçer. `DESELECT` (takma adlar `AI_DESELECT`, `SELECTNONE`; ya da {{key:Esc}}), seçimi temizler.

## Ölçülendirmeler

### DIMLINEAR

Takma ad: `DLI`, `DIMLIN`. Yatay ya da düşey mesafe.

- `İlk uzatma çizgisi başlangıcını belirtin [Nesne seç]` (Enter ya da `S`: `Ölçülendirilecek nesneyi seçin`, sonra bir çizgi, yay, daire ya da çoklu çizgi parçasına tıklayın)
- `İkinci uzatma çizgisi başlangıcını belirtin`
- `Ölçülendirme çizgisinin konumunu belirtin [Metin/Yatay/Dikey/Döndürülmüş]`. `T` metin ister (`<>` ölçülen değerdir), `H` ve `V` yönü sabitler, `R` `Ölçülendirme çizgisinin açısını belirtin <0>` ister.

### DIMALIGNED

Takma ad: `DAL`, `DIMALI`. İki nokta arasındaki gerçek mesafe.

- Başlangıçlar {{cmd:DIMLINEAR}} ile aynıdır, sonra `Ölçülendirme çizgisinin konumunu belirtin [Metin]`.

### DIMANGULAR

Takma ad: `DAN`, `DIMANG`.

- `Bir yay, daire ya da çizgi seçin, ya da köşe için Enter`
- Yay: açısı. Daire: `İkinci açı uç noktasını belirtin`. Çizgi: `İkinci çizgiyi seçin`. Enter: `Açının köşesini belirtin`, `İlk açı uç noktasını belirtin`, `İkinci açı uç noktasını belirtin`.
- `Ölçülendirme çizgisinin konumunu belirtin [Metin]`: ölçmek için açının içine tıklayın.

### DIMRADIUS ve DIMDIAMETER

Takma ad: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Bir yay ya da daire seçin`, sonra `Ölçülendirme çizgisinin konumunu belirtin [Metin]`.

### DIMCONTINUE

Takma ad: `DCO`, `DIMCONT`. Yapılan son doğrusal ya da hizalı ölçülendirmeden devam eder (ya da `Doğrusal ya da hizalı bir ölçülendirme seçin` ister).

- `İkinci uzatma çizgisi başlangıcını belirtin [Geri al (U)]`, Enter'a kadar tekrarlanır.

### DIMBASELINE

Takma ad: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} gibi, ama her ölçülendirme ilk başlangıçtan başlar ve daha dışarıya üst üste yerleşir.

### DIMORDINATE

Takma ad: `DOR`, `DIMORD`. `Özellik konumunu belirtin`, sonra `Belirtme çizgisi uç noktasını belirtin [Xdatum/Ydatum/Metin]`. Özelliğin UCS başlangıcından X ya da Y boyunca ne kadar uzakta olduğunu bir belirtme çizgisi üzerinde yazar: ağırlıklı olarak yukarı ya da aşağı giden bir çizgi X okur, yanlamasına giden bir çizgi Y okur; `Xdatum` ve `Ydatum` hangisinin olduğunu sabitler. Başlangıcı önce {{cmd:UCS}} ile ayarlayın (olmadan çizimin 0,0 noktasıdır). Tutamaçlar özelliği, başlangıcı ve belirtme çizgisinin ucunu taşır; değer izler. DWG ve DXF'te gerçek bir koordinat ölçülendirmesi olarak kaydedilir. Özelliğin üzerindeki bir belirtme çizgisi ucunu reddeder.

### DIMARC

Takma ad: `DAR`. `Bir yay ya da çoklu çizgi yay parçası seçin`, sonra `Yay uzunluğu ölçülendirme konumunu belirtin [Metin]`. Yay boyunca ölçer (kiriş boyunca değil) ve değerden önce yay simgesini yazar. Tam bir daireyi, bir çizgiyi ya da düz bir çoklu çizgi parçasını reddeder. Bir DWG onu yay uzunluğu ölçülendirmesi olarak tutar; bir DXF onu, uzunluğu metni olan açısal bir ölçülendirme olarak tutar ve CadCraft onu yeniden yay uzunluğu ölçülendirmesi olarak açar.

### DIMJOGGED

Takma ad: `DJO`, `JOG`. `Bir yay ya da daire seçin`, `Merkez konumu geçersiz kılmasını belirtin`, `Kırık konumunu belirtin`. Merkezi uzakta ya da sayfanın dışında olan bir eğri için yarıçap ölçülendirmesi: ölçülendirme çizgisi merkez yerine verdiğiniz noktadan başlar, içinde bir kırık vardır ve yine de gerçek yarıçapı yazar. Bir DWG onu kırıklı yarıçap ölçülendirmesi olarak tutar; bir DXF onu yarıçap ölçülendirmesi olarak tutar ve CadCraft onu yeniden kırık olarak açar.

### DIMJOGLINE

Takma ad: `DJL`. `Kırık eklemek için ölçülendirme seçin [Kaldır]`, sonra `Kırık konumunu belirtin (ya da Enter'a basın)`. Doğrusal ya da hizalı bir ölçülendirmenin çizgisine, mesafenin ölçeğe uygun çizilmediğini göstermek için bir kırık simgesi koyar; değer değişmez. `Kaldır` onu çıkarır. Diğer ölçülendirme türlerini reddeder.

### QDIM

Takma ad yok. `Ölçülendirilecek geometriyi seçin`, sonra `Ölçülendirme çizgisi konumunu belirtin [Sürekli/Kademeli/Taban/Koordinat/Yarıçap/Çap/veriNoktası]`. Çizgilerin ve çoklu çizgi parçalarının uçlarından, dairelerin ve yayların merkezlerinden, noktalardan ve blok başvurularından, birden çok nesneyi tek adımda ölçülendirir. Nesnelerin üstünde ya da altında bir konum karşıdan ölçer, yanındaki bir konum yukarı doğru ölçer. `Sürekli` noktaları zincirler, `Taban` hepsini ilkinden ölçer, `Kademeli` çiftleri ortadan dışa doğru iç içe yerleştirir, `Koordinat` her noktaya veri noktasından uzaklığını verir (`veriNoktası` yenisini seçer), `Yarıçap` ve `Çap` seçilen her daire ve yayı ölçülendirir. Kip hatırlanır. Ürettiği her şey tek bir geri al adımıdır. İki noktadan az olduğunda ya da Yarıçap ve Çap için yay ya da daire olmadığında bunu söyler.

### DIMBREAK

Takma ad: `DBREAK`. `Boşluk eklemek ya da kaldırmak için ölçülendirmeleri seçin`, sonra `Diğer nesnelerin kesiştiği yerde kır [Otomatik/Elle/Kaldır] <Otomatik>`. `Otomatik`, diğer nesnelerin ölçülendirme ve uzatma çizgilerini kestiği her yerde bir boşluk bırakır ve o nesneler ya da ölçülendirme taşındığında boşlukları yeniden hesaplar. `Elle` (bir ölçülendirme) iki nokta ister ve aralarında bir boşluk bırakır. `Kaldır` tüm boşlukları siler. Boşluk, ölçülendirme metin yüksekliğinin 1,5 katıdır.

### DIMSPACE

Takma ad yok. `Taban ölçülendirmesini seçin`, `Aralanacak ölçülendirmeleri seçin`, `Aralık değerini ya da Otomatik girin <Otomatik>`. Paralel doğrusal ve hizalı ölçülendirmelerin (ya da aynı köşe etrafındaki açısal olanların) ölçülendirme çizgilerini, taban ölçülendirmesinden sayılarak birbirinden eşit uzaklıkta olacak şekilde taşır; her biri bulunduğu tarafta kalır. `0` onları tabanla hizalar; `Otomatik`, taban ölçülendirmesinin metin yüksekliğinin iki katıdır. Tabana paralel olmayan ölçülendirmeler olduğu gibi bırakılır.

### DIMINSPECT

Takma ad yok. `Ölçülendirmeleri seçin`, `Denetim çerçevesi şekli [Yuvarlak/Açısal/Yok/kaldır] <Yuvarlak>`, `Etiketi girin`, `Denetim oranını girin <%100>`. Değerin etrafına, önünde bir etiketle ve sonrasında denetim oranıyla bir çerçeve çizer. `kaldır` çerçeveyi çıkarır. Tolerans metni değerle birlikte kalır.

### DIMOVERRIDE

Takma ad: `DOV`, `DIMOVER`. `Geçersiz kılınacak ölçülendirme değişkeni adını ya da Temizle girin`, `… için yeni değeri girin`, Enter'a kadar tekrarlanır, sonra `Ölçülendirmeleri seçin`. Yalnızca seçili ölçülendirmelerde bu ayarları değiştirir; ölçülendirme stili değişmez. Sayı ya da anahtar olan değişkenleri alır (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Temizle`, seçili ölçülendirmeleri stillerine geri koyar. Bu tür bir değişken olmayan bir adı ve alamayacağı bir değeri reddeder.

### DIMREASSOCIATE

Takma ad: `DRE`, `DIMREASSOC`. `Ölçülendirmeleri seçin`, sonra her biri için uzatma çizgisi başlangıçları (`Bir nesne üzerinde ilk uzatma çizgisi başlangıcını belirtin`: bir çizginin ucuna ya da ortasına, bir çoklu çizgi köşesine, bir merkeze yakalayın; Enter o noktayı serbest bırakır), ya da bir yarıçap, çap, kırıklı yarıçap ya da yay uzunluğu ölçülendirmesi için `Bir yay ya da daire seçin`. Ölçülendirme sonra bu nesnelere bağlanır: onlar taşındığında ya da boyut değiştirdiğinde, aynı geri al adımında izler ve yeniden ölçer. Bağlı bir noktayı elle taşımak ya da nesneyi silmek bağı koparır. Bağ, DWG ve DXF 2000'de CadCraft'ın kendi verisi olarak kaydedilir; diğer programlar sıradan bir ölçülendirme görür.

### DIMDISASSOCIATE

Takma ad: `DDA`, `DIMDISASSOC`. `Ölçülendirmeleri seçin`. Bağlı oldukları nesnelerden serbest bırakır; hiçbir şey taşınmaz.

### CENTERMARK

Takma ad: `CM`, `DIMCENTER`, `DCE`. `Merkez işareti eklemek için bir daire ya da yay seçin`, Enter'a kadar tekrarlanır. Merkezde bir çarpı ve eğrinin hemen ötesine uzanan dört merkez çizgisi çizer (çizgi tipi CENTER), geçerli katmanda düz çizgiler olarak; boyutu geçerli ölçülendirme ayarlarının ok boyutundan ve genel ölçeğinden alınır, UCS ile döndürülür. Daire taşınırsa onu izlemezler.

### CENTERLINE

Takma ad: `CL`. `İlk çizgiyi seçin`, `İkinci çizgiyi seçin`. İki çizgi arasında, tam ortada (buluşuyorlarsa açıortay boyunca), iki çizgiden biraz daha uzun bir çizgi çizer (çizgi tipi CENTER). Düz bir çizgidir: iki çizgiyi izlemez.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Takma ad yok. Her biri `… için yeni değeri girin <geçerli>` ister ve bu boyutu **yeni** ölçülendirmeler için ayarlar: genel ölçek, metin yüksekliği, ok boyutu, ondalık basamak (8'e kadar), metnin etrafındaki boşluk, ölçülendirme çizgisinin ötesine uzatma, başlangıçtan ofset. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings).

### DIMLUNIT

Ölçülendirme ayarı: yalnızca yeni ölçülendirmelerin biçimi (1 bilimsel, 2 ondalık, 3 mühendislik, 4 mimari, 5 kesirli).

### DIMSTYLE ve -DIMSTYLE

Takma ad: `DST`, `DDIM`, `D`. Ölçülendirme stili yöneticisi: {{ui:Geçerli yap}}, {{ui:Yeni…}}, {{ui:Değiştir…}}, {{ui:Yeniden adlandır…}}, {{ui:Sil}}, {{ui:Karşılaştır…}}, {{ui:Seçililere uygula}}. Komut satırında `-DIMSTYLE`: `Ölçülendirme stili [Geri yükle/Kaydet/Sil/Uygula/Karşılaştır/yenideAdlandır/Liste]`. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ve DIMTEDIT

`DIMEDIT` (`DED`): `Ölçülendirme düzenleme [Giriş/Yeni/Döndür/Eğik] <Giriş>`, sonra ölçülendirmeler (ya da zaten seçili olanlar). Yeni, metin ister (`<>` = ölçüm); Döndür bir açı ister (0 metni geri koyar); Eğik, uzatma çizgilerinin X ekseninden açısını ister (Enter = yok; yalnızca doğrusal ve hizalı ölçülendirmeler). `DIMTEDIT` (`DIMTED`): `Ölçülendirme metni [Sol/Sağ/Orta/Giriş/Açı] <Orta>`. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Takma ad: `DTU`. `Yeni ölçülendirmelerin metnindeki birimler [Çizim birimleri/mm/cm/m/km]`, ya da ölçülendirmeler seçiliyken `Seçili ölçülendirmelerin metnindeki birimler`. Ölçülen uzunluğu o birimde, birim de arkasında yazılmış olarak yazar (DIMLFAC ve bir DIMPOST eki); `D` çizim birimlerine geri döner. Bkz. [Ölçülendirmeler mm, cm, m ya da km cinsinden](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Takma ad: `RC`. `Yay uzunluğu: … Tür: …` yazdırır, sonra `İlk noktayı belirtin [Yay uzunluğu/Nesne/Dikdörtgen/Çokgen/Serbest]`. Dikdörtgen `Karşı köşeyi belirtin` ister; Çokgen `Sonraki noktayı belirtin (Enter bulutu kapatır) [Geri al]`; Serbest, bir tıklama ya da {{key:Enter}}'a kadar imleci izler; `O` `Nesneyi seçin` ve `Yön ters çevrilsin mi? [Evet/Hayır] <H>` ister ve nesneyi bulutu yapar. `Y` `Her yayın uzunluğunu belirtin` ister. `D`, `Ç` ve `S`, sonraki bulut için türü seçer. Sonuç, yaylardan oluşan kapalı bir çoklu çizgidir.

### MLEADER

Takma ad: `MLD`; ya da {{ui:Belirtme çizgisi}}. `Belirtme çizgisi ok ucu konumunu belirtin [Ok ucu boyutu/Iniş mesafesi/Blok]`, `Belirtme çizgisi iniş konumunu belirtin`, sonra yerinde kutudaki metin (ya da onsuz, `Metni girin (boş bir satır bitirir)`). `Blok` önce bir blok adı ister ve çoklu belirtme çizgisi metin yerine o bloğu gösterir. Daha fazla belirtme çizgisi: {{cmd:MLEADEREDIT}}. DWG'de gerçek bir çoklu belirtme çizgisi olarak kaydedilir; DXF, çizdiği çizgileri, ok ucunu ve metni tutar.

### MLEADEREDIT

Takma ad: `MLE`. `Bir çoklu belirtme çizgisi seçin`, sonra `Belirtme çizgisi ok ucu konumunu belirtin [Belirtme çizgilerini kaldır/Blok içeriği/Metin içeriği]`: her nokta, aynı inişe yeni bir ok ucundan bir belirtme çizgisi ekler, Enter'a kadar. `Belirtme çizgilerini kaldır` sonra tıkladığınız belirtme çizgisini alır (bir çoklu belirtme çizgisi en az birini tutar). `Blok içeriği` bir blok adı ister ve metin yerine o bloğu gösterir (öznitelikleri sorulur); `Metin içeriği` metni geri koyar. Her belirtme çizgisinin kendi tutamacı vardır. Bir DWG her belirtme çizgisini ve bloğu tek bir çoklu belirtme çizgisinde tutar.

### MLEADERALIGN

Takma ad: `MLA`. `Çoklu belirtme çizgilerini seçin`, sonra `Hizalanacak çoklu belirtme çizgisini seçin [Dağıt/Aralık/Geçerli aralığı kullan]` ve `Yönü belirtin`. Diğer çoklu belirtme çizgilerinin iniş noktalarını (ve metinlerini ya da bloklarını), seçilenin iniş noktasından o yöndeki çizgiye taşır; ok uçları gösterdikleri yerde kalır. `Aralık` onlara eşit bir uzaklık da verir; `Dağıt` iki nokta ister ve bunları aralarında eşit dağıtır. En az iki çoklu belirtme çizgisi gerekir.

### MLEADERCOLLECT

Takma ad: `MLC`. `Çoklu belirtme çizgilerini seçin`, sonra `Toplanan çoklu belirtme çizgisi konumunu belirtin [Dikey/Yatay]` (Enter ilkinin yerini korur). Birkaçından tek bir çoklu belirtme çizgisi yapar: blok içerikleri, yan yana ya da alt alta hepsini tutan yeni bir bloğa girer; metin içerikleri, her biri için bir çizgisi olan tek bir nota dönüşür. İlk çoklu belirtme çizgisi kendi belirtme çizgilerini korur; diğerleri kaldırılır. Metin ve blok içeriklerinin karışımını reddeder.

### TABLE

Takma ad: `TB`; ya da {{ui:Açıklama}} › {{ui:Daha fazla}} › {{ui:Tablo}}. Bir tablo oluşturur: taşıyabileceğiniz, kopyalayabileceğiniz, döndürebileceğiniz, ölçekleyebileceğiniz ve diğer her nesne gibi çıktısını alabileceğiniz tek bir nesne; hücreleri veri olarak tutulur.

- `Veri satırı sayısı ya da [Yapıştır/Dosya/Stil] <3>`, sonra `Sütun sayısı <3>`, `Metin yüksekliği` ve `Tablonun sol üst köşesi`. Tablo, bir başlık satırı (birleştirilmiş tek bir hücre) ve veri satırlarının üstünde bir üst bilgi satırı alır.
- `Y`: panodaki elektronik tablo hücrelerinden bir tablo (hücreler arasında bir sekme ile metin). {{key:Ctrl+V}} ile böyle hücreler panodayken aynısını yapar; CadCraft'ın kendi kopyası daha yeniyse bunun yerine onu yapıştırır (ya da CadCraft anlayamazsa kendi kopyasını yapıştırır ve bunu söyler). `D`: bir `.csv` ya da sekmeyle ayrılmış dosyadan bir tablo. İlk satır üst bilgi satırı olur; sütun genişlikleri metne uyar.
- `S`: bu tablo için tablo stilini seçin (bkz. {{cmd:TABLESTYLE}}).
- Tam sayı olmayan bir satır ya da sütun sayısını ve bir tablonun tutabileceğinden fazla hücreyi reddeder (2.000 satır, 200 sütun, 40.000 hücre).
- {{cmd:EXPLODE}}, bir tabloyu çizgi ve metne çevirir. DWG olarak kaydedildiğinde bir tablo, diğer programların düzenleyebileceği gerçek bir tablo nesnesidir; DXF olarak kaydedildiğinde onu çizen bir bloktur ve CadCraft onu yeniden tablo olarak açar.

### TABLEDIT

Takma ad: `TABLEEDIT`, `TABEDIT`; ya da bir hücreye çift tıklayın. Bir tabloyu düzenler.

- `Yazmak için bir hücre seçin (bitirmek için Enter) ya da [Satır/Sütun/Boyut/Birleştir/Birleştirmeyi kaldır/Hizala/Yükseklik/Tür/Temizle]`. Bir hücreye tıklayın ya da bir tablo seçiliyken adını yazın (`B3`: B sütunu, 3. satır; başlık satırı 1. satırdır). Tarayıcıda hücrenin üzerinde bir kutu açılır: {{key:Enter}} metni tutar, {{key:Tab}} sonraki hücreye geçer, {{key:Alt+Enter}} yeni bir satır başlatır, {{key:Esc}} hücreyi olduğu gibi bırakır.
- `=` ile başlayan bir metin bir formüldür: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, parantezler ve `sqrt` ile `round` gibi işlevlerle. Hücre değeri gösterir; kendi hücresini adlandıran, tablo dışındaki bir hücreyi ya da sayı olmayan bir hücreyi adlandıran bir formül `####` gösterir ve komut satırı nedenini söyler.
- `R` / `S`: seçilen bir hücrede satır ya da sütun `Ekle` ya da `Sil` (kaç tane, ve yukarı ya da aşağı, sola ya da sağa). Formüller adlandırdıkları hücreleri izler.
- `B`: sütunun genişliği ve satırın yüksekliği. Bir satır asla metninin gerektirdiğinden daha alçak olmaz. Seçili bir tablonun her sütununun ve her satırının kenarında bir tutamacı da vardır.
- `B`: seçilen bir hücreden başka bir hücreye birleştirme; `Ç`: birleştirmeyi kaldır. `H`: hizalama (`SÜ` sol üst … `OO` orta orta … `SA` sağ alt). `Y`: bu hücrenin kendi metin yüksekliği (0 = stilinkini). `T`: satırı başlık, üst bilgi ya da veri satırı yapar. `TE`: hücreyi boşaltır.
- Kilitli bir katmandaki bir tabloyu, tüm satırları ya da sütunları silmeyi ve başka bir birleştirilmiş hücreyi ikiye bölecek bir birleştirmeyi reddeder.

### TABLESTYLE

Takma ad: `TS`. Tablo stillerini, her birini kaç tablonun kullandığıyla birlikte listeler, sonra `Tablo stili: [Yeni/Ayarla/Düzenle/Sil/Uygula]`.

- Bir stil, başlık, üst bilgi ve veri satırlarının metin yüksekliğini ve hizalamasını, hücre kenar boşluğunu ve hangi kenarlıkların çizildiğini (dış, satırlar arası, sütunlar arası) tutar.
- `Y` geçerli stilden bir stil oluşturur ve onu geçerli yapar; `A` yeni tabloların aldığı geçerli stili belirler; `D` seçili tabloları stilin dış görünümüyle düzenler, varsayılan bir stil; `U`, `S` bir stili siler (Standart ve geçerli olanı hariç; onu kullanan tablolar görünümlerini korur).
- Stiller, çizimle birlikte kaydedilir (DWG ve DXF).

### TABLEEXPORT

Bir tablonun gösterdiğini bir CSV dosyası olarak kaydeder (formül değeri olarak). `Bir tablo seçin` ya da önce bir tane seçin. `=`, `+`, `-` ya da `@` ile başlayan metin hücrelerinin başına, bir elektronik tablonun onları çalıştırmaması için bir `'` eklenir.

### TABLEPASTE

Takma ad: `PASTETABLE`. Panodaki elektronik tablo hücrelerinden bir tablo yapar, sonra sol üst köşesini ister. {{cmd:TABLE}} › `Yapıştır` ile aynıdır.

### DATALINK

Takma ad: `DL`. `Veri bağlantısı: [Yeni/Liste/Kaldır] <Yeni>`. `Y`, bir CSV dosyası ister, onun bir tablosunu yerleştirir ve dosyanın adını hatırlar; `L` bağlantıları dosyalarıyla, boyutlarıyla, ne zaman okunduklarıyla ve kaç tablonun kullandığıyla listeler; `K` bir bağlantıyı kaldırır (tabloları sıradan tablolar olarak kalır).

### DATALINKUPDATE

Takma ad: `DLU`. Bir veri bağlantısının dosyasını yeniden okur ve ona bağlı tabloları yeniden doldurur (satır ve sütunlar eşleşmek için eklenir ya da silinir). Bir tarayıcı dosyayı kendi başına açamaz; bu yüzden dosyayı yeniden seçmenizi ister. Birkaç bağlantı varsa hangisi olduğunu sorar.

### FIELD

Çizime bir alan yerleştirir: kendi kendine hesaplanan metin. `Alan: [Tarih/Dosya adı/Sayfa/Özellik/Nesne/İfade/Kod] <Tarih>`:

- `T`: şimdi, ya da kaydedilmiş, oluşturulmuş ya da çıktısı alınmış tarih ve bir biçim (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `D`: uzantısıyla ya da uzantısı olmadan dosya adı. `S`: sayfanın numarası, başlığı ya da kaç sayfa olduğu. `Ö`: adına göre bir çizim özelliği (bkz. {{cmd:DWGPROPS}}). `N`: bir nesne seçin, sonra ne okunacağı (alan, uzunluk, çevre, yarıçap, çap, katman, ad, x, y, metin, dönme, renk) ve ondalık basamaklar. `İ`: bir formül. `K`: kodları olduğu gibi yazılmış bir metin, örneğin `Sayfa %<sheetnumber>% / %<sheetcount>%`.
- Sonra, içine konacak alan için `Bir metin, bir tablo hücresi ya da öznitelikli bir blok seçin (Enter: yeni bir metin)`: seçilen bir metne alan, içerdiğine eklenir; bir tablo hücresi de aynı şekilde; bir blok başvurusu hangi özniteliği istediğini sorar; {{key:Enter}} yeni bir metin için bir yükseklik ve bir nokta ister.
- Ekranda bir alanın açık gri bir arka planı vardır; çıktı ve PDF'te hiçbir zaman olmaz. Alanın metnine elle yazmak alanı sonlandırır. Hesaplanamayan bir alan `####` gösterir.
- Bir nesnenin alanı nesnesini, CadCraft'ın nesnelerde tuttuğu anahtarla bulur (Ayarlar › CadCraft › Birleştirmeye uygun dosyalar); anahtarlar kapalıyken reddeder.

### UPDATEFIELD

Takma ad: `UPDATEFIELDS`. `Güncellenecek alanların nesnelerini seçin (Enter: her alan) ya da [Ayarlar]`. `A` alanların kendiliğinden ne zaman güncelleneceğini ayarlar: `A` açık, `K` kaydet, `Ç` çıktı, `Y` yeniden oluşturma harflerini yazın (başlangıç için dördü de), ya da `YOK`.

### DWGPROPS

Takma ad: `DRAWINGPROPS`. Çizimin özelliklerini listeler, sonra `Değiştir: [Başlık/Konu/Yazar/Şirket/Anahtar kelimeler/Açıklamalar/Özel/Kaldır/Çıkış]`. İlk altısı {{ui:Çizim ayrıntıları}} panelinin gösterdikleridir; `Ö` kendi adınızı ve değerinizi ekler, `K` birini kaldırır. Alanlar onları okur (`%<prop:title>%`, `%<prop:Client>%`) ve hemen izler. Yerleşik adlardan biri olan ya da `%`, `<`, `>`, bir tırnak ya da ters eğik çizgi içeren bir özel adı reddeder.

## Parametrik

Bkz. [Çizimi kısıtlayın](topic:constraints) ve [Parametre ve denklemleri kullanın](topic:parameters). Kısıtlamalar {{ui:Model}} sekmesinde çalışır.

### GEOMCONSTRAINT ve GC komutları

Takma ad `GCON`: `Kısıtlama türünü girin [Yatay/Dikey/Dik/Paralel/Teğet/Çakışık/EŞmerkezli/DOğrusal/Simetrik/Eşit/Sabitle] <Yatay>`, sonra o komutun istemleri.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Bir nesne seçin [2 Nokta] <2 Nokta>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `İlk nesneyi seçin`, `İkinci nesneyi seçin` (ikincisi taşınır).
- {{cmd:GCCOINCIDENT}}: `İlk noktayı seçin [Nesne/Otomatik kısıtla] <Nesne>`, `İkinci noktayı seçin [Nesne] <Nesne>`.
- {{cmd:GCFIX}}: `Nokta seçin [Nesne] <Nesne>`.
- {{cmd:GCSYMMETRIC}}: `İlk nesneyi seçin [2 Nokta] <2 Nokta>`, `İkinci nesneyi seçin`, `Simetri çizgisini seçin`.

### DIMCONSTRAINT ve DC komutları

Takma ad `DCON`: `Dönüştürülecek ilişkisel ölçülendirmeyi seçin [Doğrusal/Yatay/Dikey/Hizalı/Açısal/Yarıçap/Çap/Dönüştür] <Hizalı>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `İlk kısıtlama noktasını belirtin [Nesne] <Nesne>`, `İkinci kısıtlama noktasını belirtin`, `Ölçülendirme çizgisinin konumunu belirtin`, `Ölçülendirme metni <d1=40>` (bir sayı, bir ifade ya da `ad=ifade`).
- {{cmd:DCALIGNED}}: yukarıdakiyle aynı, `[Nesne/Nokta ve çizgi/2 Çizgi]` ile.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Bir yay ya da daire seçin`. {{cmd:DCANGULAR}}: `İlk çizgi ya da yayı seçin`, `İkinci çizgiyi seçin`.
- {{cmd:DCCONVERT}}: `Dönüştürülecek ölçülendirmeleri seçin`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Nesneleri seçin [Ayarlar]`. `A` uzaklık ve açı toleranslarını ister.
- {{cmd:DELCONSTRAINT}} (takma ad `DELCON`): `Nesneleri seçin`; kısıtlamaları gider.
- {{cmd:CONSTRAINTBAR}} (takma ad `CBAR`): `Nesneleri seçin [Tümünü göster/Tümünü gizle]`, sonra `[Göster/Gizle]`.
- {{cmd:DCDISPLAY}}: `Bir seçenek girin [Göster/Gizle]`.

### PARAMETERS ve -PARAMETERS

{{cmd:PARAMETERS}} (takma adlar `PAR`, `PARAM`), {{ui:Parametreler}} panelini açar. `-PARAMETERS`: `Bir seçenek girin [Yeni/Düzenle/Yeniden adlandır/Sil/?] <?>`.

### SWBOUT

Takma ad `SWMACRO`. SolidWorks'te modeli tek bir kısıtlı eskiz olarak yeniden oluşturan bir makro (.swb) indirir. Bkz. [Eskizleri diğer parça modelleyicilere taşıyın](topic:solidworks-sketches).

## Bloklar

### ANNOSCALE

Takma ad: `CANNOSCALE`. Çizimin açıklama ölçeğini ve kaç açıklamalı nesne içerdiğini söyler, sonra `Yeni açıklama ölçeği`'ni ister: `1:50`, `1:100`, `2:1`, çıplak bir sayı (`50`, 1:50 demektir) ya da çizimin kendi ölçeklerinden birinin adını yazın. Her açıklamalı metin ve ölçülendirme, yeni ölçekte aynı boyutta basılacak şekilde yeniden boyutlandırılır; tek bir geri al adımında; açıklamalı olmayan nesneler olduğu gibi kalır, yeni ölçeği içermeyen bir ölçek listesi tutan nesne de öyle ({{cmd:OBJECTSCALE}}). Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Takma ad: `OBJSCALE`. `Açıklamalı nesneleri seçin`, sonra `Seçili nesnelerin açıklama ölçekleri [Ekle/Sil/Geçerli ölçek/Liste/Çıkış] <Ekle>`. Açıklamalı bir metin ya da ölçülendirme, açıklama ölçekleri listesini tutar. `Ekle` ve `Sil` bir ölçek ister (`1:50`, `2:1`, çıplak bir sayı ya da çizimin kendi ölçeklerinden birinin adı); `Geçerli ölçek` çizimin açıklama ölçeğini ekler; `Liste` her nesnenin ölçeklerini yazdırır. Listesinde nesnenin ölçeği olan bir görünüm penceresi, nesneyi o ölçekte kâğıt yüksekliğini basan boyutta gösterir; ekranda ve çıktılarda. Son ölçek silinemez. Açıklamalı olmayan nesneler dışarıda kalır: önce Özellikler'de Açıklamalı'yı açın. Listeler, DWG ve DXF'te CadCraft'ın kendi verisi olarak kaydedilir. Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Takma ad: `ANNOALL`. `Açıklamalı nesneleri her ölçekte gösterin [AÇIK/KAPALI]`. Açıkken (bir çizim başladığında), listesinde olmayan bir ölçekteki bir görünüm penceresinde ya da modelde de açıklamalı bir nesne kendi boyutunda görünür. Kapalıyken orada gösterilmez ve modelde seçilemez. Anahtar bir geri al adımıdır; dosyada tutulmaz.

### SCALELISTEDIT

Takma ad: `SCALELIST`. `Ölçek listesi [Ekle/Düzenle/Sil/Liste/Sıfırla]` Enter'a kadar. Ekle: `Ölçek adı`, `Kâğıt birimleri`, `Çizim birimleri`. Düzenle ve Sil ölçeğin adını ister. Çizimin kendi ölçekleri görünüm penceresi ve çıktı ölçek listelerine katılır ve çizimle birlikte kaydedilir. Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ve PEDIT

`SPLINE` (`SPL`): `Spline'ın ilk noktası [Yöntem/Nesne] (Uyum noktaları)`. Uyum: eğrinin geçtiği noktalar; `Kapat`, `Geri al`, sonra `Başlangıç teğeti` ve `Bitiş teğeti` (bir nokta, ya da {{key:Enter}}). Yöntem › Kontrol köşeleri bir derece (1 ile 5) ister ve bir kontrol çokgeninden çizer. Nesne, çoklu çizgileri köşelerinden geçen splinelere çevirir. `SPLINEDIT` (`SPE`): `[Uyum verisi/Köşe düzenle/Çoklu çizgiye dönüştür/Aç ya da Kapat/Ters çevir/Geri al/Çıkış]`; Uyum verisi `[Ekle/Sil/Taşı/Temizle/Teğetler/Çıkış]`; Köşe düzenle `[Kontrol noktası ekle/Taşı/Ağırlık/Çıkış]`. `PEDIT` (`PE`): `[Kapat/Aç/Birleştir/Genişlik/Uyum/Spline/Düzleştir/Çizgi tipi üret/Ters çevir/Geri al/Çıkış]`, birden çok nesne için `Ç`; çizgiler, yaylar ve splineler önce çoklu çizgi olarak sunulur. Bkz. [Splineler ve çoklu çizgiler](topic:splines).

### BLOCK

Takma ad: `B`, `BMAKE`.

- `Blok adını girin`. Varsa: `"…" bloğu zaten var. Yeniden tanımlansın mı? [Evet/Hayır] <H>`.
- `Ekleme temel noktasını belirtin`
- `Nesneleri seçin`. Yerlerine yeni bloğa tek bir başvuru gelir.

### WBLOCK

Takma ad: `W`, `-WBLOCK`. Bir bloğu, bazı nesneleri ya da tüm çizimi yeni bir DWG ya da DXF dosyası olarak yazar. `WBLOCK kaynağı [Blok/Tüm çizim/Nesneler] <Nesneler>`:

- **Nesneler**: `Ekleme temel noktasını belirtin` (yeni çizimin başlangıcı olur), `Nesneleri seçin`, sonra `Dosya biçimi [DWG/DXF/R12 DXF]` ve `Yeni çizim için dosya adı`, sonra `Nesnelerle ne yapılsın [Koru/Bloğa dönüştür/Sil]`. Dönüştür, onları dosyanın adında bir bloğa tek bir başvuruyla değiştirir; Sil onları kaldırır.
- **Blok**: `Yazılacak blok`. Bloğun kendi nesneleri, temel noktası başlangıç olarak, iç içe bloklar dahil.
- **Tüm çizim**: model uzayındaki her nesne. Sayfalar yazılmaz; sayfaları olan bir kopya için {{cmd:SAVEAS}} kullanın.

Yeni dosya yalnızca nesnelerinin kullandığı katmanları, çizgi tiplerini, metin ve ölçülendirme stillerini ve blokları ile çizimin birimlerini tutar. Bir DWG'nin sürümü, {{cmd:SAVEAS}}'in en son kullandığıdır. Tarayıcıda dosya indirilir; Studio'da kaydetme iletişim kutusu açılır.

### ATTDEF

Takma ad: `ATT`, `DDATTDEF`, `-ATTDEF`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelik tanımla}}. Kipleri yazdırır, sonra `Değiştirilecek bir seçenek girin (bittiğinde Enter) [Görünmez/Sabit/Ön ayar]`, `Öznitelik etiketi adını girin`, `Öznitelik istemini girin`, `Varsayılan öznitelik değerini girin` (sabitken `Öznitelik değerini girin`), `Metnin başlangıç noktasını belirtin`, `Metin yüksekliğini belirtin`, `Metnin dönme açısını belirtin`. {{cmd:BLOCK}} öznitelik tanımlarını bloğa alır.

### EATTEDIT ve ATTEDIT

`EATTEDIT` (`DDATTE`, ya da öznitelikli bir başvuruya çift tıklayın; {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelikleri düzenle}}): `Öznitelikli bir blok başvurusu seçin`, sonra {{ui:Öznitelikleri düzenle}} iletişim kutusu. `ATTEDIT` (`ATE`, `-ATTEDIT`): aynı başvuru, sonra her öznitelik için `<istem> (<ETİKET>) <değer>`; {{key:Enter}} bir değeri korur. Bkz. [Öznitelikler](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Hangi bloğun başvurularının öznitelikleri güncellensin [Ad/Seç/Tümü] <Seç>`. Değerler korunur; yeni öznitelikler varsayılanlarını alır, silinenler gider, yerleşimler sıfırlanır.

### BATTMAN

{{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelik yöneticisi}}. İletişim kutusu: blok, öznitelikler (etiket, istem, varsayılan, kipler, sıra), {{ui:Başvuruları güncelle (değerler korunur)}}, {{ui:Uygula}}.

### REFEDIT ve REFCLOSE

{{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Yerinde düzenle}}. `REFEDIT`: `Yerinde düzenlenecek blok başvurusunu seçin` (ya da seçim). `REFCLOSE`: `"…" üzerindeki değişiklikler kaydedilsin mi? [Kaydet/Vazgeç] <Kaydet>`; çubuktaki {{ui:Bloğu kaydet}} ve {{ui:Vazgeç}} aynısını yapar. Tüm düzenleme tek bir geri al adımıdır. Bkz. [Öznitelikler](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT ve BCLOSE

`BE`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bloğu düzenle}}. `Düzenlenecek blok adını girin <seçili başvurunun bloğu>` blok düzenleyicisini açar. `BCLOSE`, `"…" üzerinde blok düzenleyiciyi kapat [Kaydet/Vazgeç] <Kaydet>` diye sorar; afişteki {{ui:Bloğu kaydet}} ve {{ui:Değişiklikleri at}} aynısını yapar. Düzenleyicide yapılan her şey tek bir geri al adımıdır.

### VIEWBASE

Takma ad: `FLATSHOT`. 3B sekmedeki katıların düz bir 2B görünümü: `Görünüm [Ön/Üst/Sağ/Sol/Arka/Alt/İzo]`, `Gizli çizgiler [Göster/Gizle]`, bir ölçek (`1:20`, `2:1`; {{key:Enter}} sayfaya uyan ölçeği alır), sonra görünümün merkezi. Tek bir blok başvurusu; görünür kenarlar VIEW-VISIBLE'da, gizli olanlar VIEW-HIDDEN'da kesikli. Bkz. [Sayfada düz görünümler](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Takma ad: `-PUBLISH`; ya da {{ui:Tüm sayfalar tek bir PDF'te}}, {{ui:PDF'e çıktı al}} iletişim kutusunda. `Çıktı alınacak sayfalar [Tümü/Bazıları]`: {{key:Enter}} her sayfayı çıktı alır, `B` adları virgülle ayrılmış olarak ister. Tek bir PDF, her sayfa için bir sayfa ve bir yer imi. Bkz. [Tüm sayfalar tek bir PDF'te](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Takma ad: `SSM`, `SHEETSETMANAGER`. Sol panelin {{ui:Sayfa takımı}} bölümünü açar: birden çok çizimden sayfalar, numaralandırılmış ve adlandırılmış, künye bilgileri takımdan doldurulmuş, tek bir PDF olarak yayımlanmış. Bkz. [Sayfa takımları](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): bir DWG ya da DXF seçin, sonra ekleme noktası. {{cmd:XREF}} (`XR`, `-XREF`): `Bağlı çizimler [?/Ekle/Yeniden yükle/Bağla/Ayır] (Enter: ?)`; birden çok bağlantı varsa, başvurularından birini seçin ya da `N` yazıp adını girin. Bkz. [Bağlı çizimler](topic:files#linked-drawings-external-references).

### COUNT

Takma ad: `BCOUNT`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları say}}. `Sayılacak bir blok başvurusu seçin, ya da [Tümü/Dışa aktar] (Enter: Tümü)`: bir tıklama, bu alandaki o bloğun her başvurusunu seçer ve sayar; {{key:Enter}} ya da `T` hepsini listeler; `D` sonra `S` (sayılar) ya da `Ö` (öznitelikler) bir CSV indirir. Bkz. [Blokları sayın ve bir liste dışa aktarın](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Takma ad: `I`, `DDINSERT`.

- `Blok adını ya da [Dosya/Kitaplık] girin <son blok>` (büyük ve küçük harf fark etmez). `D`, bir DWG ya da DXF ister, sonra çizimin tamamını ya da bloklarından birini; zaten kullanılan bir ad {{ui:Mevcudu koru}} ya da {{ui:Yeniden adlandır}} sorar. `K` kitaplık panelini açar.
- `Ekleme noktasını belirtin [Ölçek/Döndür]`. `Ö` `Ölçek faktörünü belirtin`, `D` `Dönme açısını belirtin` ister; ikisi de hatırlanır.
- Blok, başka yerlerde tekrarlanan nesnelerin yanında zaten duruyorsa, bir satır kaç yerin önerildiğini söyler ve istem `ö` (öneriler) ekler: `Ö` onları gösterir; birine yakın tıklayarak bloğu oraya koyun, `T` hepsi için, {{key:Enter}} geri dönmek için. Komşularının dönmesini ve varsayılan öznitelik değerlerini alırlar. Açık alanda 20.000'den fazla nesnesi olan çizimler aranmaz.
- Sonra blokun istediği her öznitelik için `Enter <istem> (<ETİKET>) <varsayılan>`. Bkz. [Blok öznitelikleri](topic:attributes).

### LIBRARY

Takma ad: `LIB`. Kitaplık panelini açar: öğeleri yerleştirin, güncellemeleri denetleyin, kitaplık katkıları. Soru yoktur. Bkz. [Bir dosyadan ya da kitaplıktan ekleyin](topic:insert-from-file-and-library).

### STEELMEMBER

Takma ad: `SMEMBER`; ya da kitaplığın {{ui:Standart}} sekmesindeki {{ui:3B eleman}}. `Kesit boyutu <W12x26>` (sekmenin listelediği gibi), sonra `Başlangıç noktası [Kolon]` ve `Bitiş noktası`: iki nokta arasında, zemine oturan, 3B sekmede katı bir eleman. `K` kolonun taban noktasını ve yüksekliğini ister. Tek bir geri al adımı. Bkz. [Çelik kesitleri ve standart parçaları yerleştirin](topic:steel-and-standard-parts).

### PARTSLIST

Takma ad: `PLIST`. `Parça listesinin sol üst köşesi`, sonra `Metin yüksekliği <2.5>`: kitaplıktan yerleştirilmiş her standart parça ve çelik kesitin bir tablosunu çizer (parça numaraları, miktar, parça, standart, boyut, uzunluk, malzeme, kütle). Tek bir geri al adımı. Bkz. [Çelik kesitleri ve standart parçaları yerleştirin](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Takma ad: `PU`. Hiçbir şeyin kullanmadığı blok tanımlarını kaldırır. Soru yoktur.

### DELBLOCKS

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları sil}}. `Silinecek bloğu seçin [Ad/Çıkış]`: bir blok başvurusu seçin, ya da filtreli bloklar listesi için `A` (birkaç seçebilirsiniz), ya da bitirmek için `Ç` / {{key:Enter}}. Her başvuru gider — modelde, her sayfada ve diğer blokların içinde — sonra tanım gider ve komut satırı neyin silindiğini ve neyin silinemediğini söyler. Adsız bloklar ve bağlı çizimler önerilmez. İstem bir sonraki blok için geri gelir; tüm komut tek bir geri al adımıdır.

### PASTEBLOCK

{{cmd:PASTEBLOCK}}, kopyaladığınızı ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) tek bir blok olarak yapıştırır: ekleme noktasını seçin ve oraya yeni bir bloğa tek bir başvuru gelir, seçili. Bloğun kendi adı verilir (`A$C` ve bir sayı); {{cmd:RENAME}} ile kendi adınızı verirsiniz. Tek bir geri al adımı başvuruyu ve bloğu kaldırır.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}}, değiştirilecek bloğu ve yerine konacak bloğu ister (`?` blokları listeler), sonra modelde, her sayfada ve diğer blokların içinde her başvuruyu değiştirir. Her başvuru yerini, ölçeğini, dönmesini, katmanını ve iki bloğda da bulunan öznitelik değerlerini korur; yalnızca yeni blokta olan öznitelikler varsayılanlarında başlar ve hangi değerlerin düşürüldüğünü size söyler. Eski bloğu artık hiçbir şey kullanmıyorsa, onu kaldırmayı önerir. Bağlı çizimleri ve bir bloğun kendi içine konacak bir değiştirmeyi reddeder. Tek bir geri al adımı.

### MINSERT

{{cmd:MINSERT}}, bir bloğu satır ve sütunlar halinde yerleştirir: blok adı, ekleme noktası, ölçek, dönme, satır ve sütun sayısı ve aralarındaki mesafeler. Bütün küme dönmeyle birlikte döner. Her biri kendi başvurusudur (en çok 10.000), böylece her birini sonradan taşıyabilir ya da silebilirsiniz.

### BLOCKSPALETTE

Takma ad: `BLOCKSPAL`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bloklar paneli}}. İmleci filtresinde olan {{ui:Bloklar}} panelini gösterir. Her bloğun küçük bir resmi vardır; en son yerleştirilenler önce gelir. Filtrenin yanındaki iki düğme, bir liste ile bir resim ızgarası arasında geçiş yapar. Bir resme tıklayın (ya da {{ui:Ekle}}) bloğu {{cmd:INSERT}} ile yerleştirmek için, ya da çizime sürükleyerek bıraktığınız yere yerleştirin.

{{ui:Kitaplıklar}}, listenin altında: {{ui:Çizim ekle}} kendi DWG ya da DXF dosyanızı alır ve blokları resimleriyle listeler, bütün çizimi de tek bir blok olarak. Birini yerleştirmek, tanımını (ve iç içe olan blokları ve katmanlarını) bu çizime kopyalar; {{cmd:INSERT}}'in `Dosya` seçeneğinin yaptığı gibi; aynı tanımla zaten burada olan bir blok, soru sorulmadan kullanılır; aynı adlı ama farklı bir blok {{ui:Mevcudu koru}} ya da {{ui:Yeniden adlandır}} sorar. Bir tarayıcıda dosya sayfa kapanana kadar kalır. CadCraft Studio'da {{ui:Klasör ekle}}, bir klasördeki çizimleri listeler; her biri tıkladığınızda açılır ve dosyalar ile klasörler hatırlanır. Küçük x kitaplığı listeden kaldırır; dosyaya dokunulmaz. Paylaşılan {{ui:Kitaplık}} farklı bir şeydir: bkz. [Bir dosyadan ya da kitaplıktan ekleyin](topic:insert-from-file-and-library).

### BCONVERT

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Tekrarları bloklara dönüştür}}. Tekrarlanan geometriyi bulur ve her kopyayı tek bir bloğa başvuruya çevirir.

- `Tekrarlanan nesneleri seçin ya da [Blok]`: bir kopyanın nesneleri. `B` bunun yerine mevcut bir bloğun adını ister, gevşek kopyalarını bulmak için.
- `Bir kopya şunlar olabilir: aynalanmış = Hayır, ölçeklenmiş = Hayır; katman, renk, çizgi tipi ve çizgi kalınlığı = Eşleşen … [Aynalanmış/Ölçeklenmiş/Özellikler]`: `A`, `Ö` ve `Ö` neyin kopya sayılacağını değiştirir; {{key:Enter}} arar. Ayarlar hatırlanır.
- `Yeni blok için ad <Blok1>`, sonra `Bloğun temel noktasını belirtin` ({{key:Enter}} seçimin sol alt köşesini alır).
- Aynı geometriye sahip kaç nesne kümesi olduğunu söyler, değiştireceği her şeyi vurgular ve `Evet/Hayır` sorar.

Bir kopya, aynı nesnelerin herhangi bir açıyla taşınmış ve döndürülmüş hali demektir (ve açık olduklarında tek bir çarpanla aynalanmış ya da ölçeklenmiş); her nesnenin bir karşılığı olmalıdır, seçimin boyutunun bir milyonda biri içinde. Her başvurunun kendi dönmesi ve ölçeği olur (aynalanmış olan negatif bir Y ölçeğiyle), ve nesnelerinin paylaştığı katman. Kilitli katmanlardaki nesneler dokunulmaz ve sayılır. Açık alanı (modeli ya da açık sayfayı) arar. Çok büyük bir arama bir çalışma sınırında durur ve bunu söyler. Tek bir geri al adımı.

### BSEARCH

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları bul}}. `Blokları şuna göre bul [Ad/Öznitelik/Geometri] <Ad>`:

- `A`: bir blok adının parçası ya da `*` ve `?` içeren bir desen. Her bloğu, burada ve tüm çizimdeki başvurularıyla listeler.
- `Ö`: bir öznitelik değeri ya da `ETİKET=değer`. Başvurularında bunu tutan blokları, bulunan değerlerle listeler. Sabit öznitelikler de sayılır.
- `G`: nesneleri ya da bir blok başvurusunu seçin; şekli en az %85 benzeyen bloklar en iyisi önce olmak üzere listelenir. Boyut, dönme ve aynalama sayılmaz. Ölçü, dış hatlar boyunca yayılmış noktalar arasındaki mesafeleri karşılaştırır; böylece benzerleri bulunur; tam kopyaları bulmak için {{cmd:BCONVERT}} kullanın.

Açık alanda bulunan başvurular seçilir ve bir sonraki komut için hazır olur.

### BREPLACE

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları değiştir}}. `Değiştir [Seçili/Tümü]`: `S` seçtiğiniz blok başvurularını, adlandırdığınız blokla değiştirir; `T` bir blok ve yerine geçeni ister ve her başvuruyu değiştirir, tıpkı {{cmd:BLOCKREPLACE}} gibi (aynı kod). Bir başvuru yerini, ölçeğini, dönmesini, katmanını ve iki bloğda da bulunan öznitelik değerlerini korur; yeni blokta yeri olmayan değerler düşürülür ve adlandırılır. `?` blokları listeler. Tek bir geri al adımı.

### DATAEXTRACTION

Takma ad: `EATTEXT`, `DX`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Veri çıkarma}}. Blokları, özniteliklerini ve nesne özelliklerini bir tablo ya da CSV dosyası olarak listeler.

- Seçim üzerinde çalışır, ya da `Nesneleri seçin (Enter: bu alandaki her şey)` sorar.
- Seçim ikisini de içerdiğinde `Liste: [Bloklar/Nesneler/Tümü]`. Adsız bloklar, tablolar ve malzeme listeleri hiçbir zaman listelenmez.
- Seçilebilecek sütunları yazdırır (ad, tür, katman, X, Y, dönme, ölçek, uzunluk, alan, renk, çizgi tipi, alan ve her öznitelik etiketi için bir tane), sonra `Sütunlar, ad ya da numarayla, virgüllerle ayrılmış`. {{key:Enter}}, yıldızlı olanları alır: bloklar için ad ve her öznitelik; nesneler için tür, katman ve uzunluk.
- `Aynı satırları sayıyla birlikte bir araya getir? [Evet/Hayır] <Evet>`, sonra `Listeyi bir [Tablo/Csv] içine koy <Tablo>`. Bir tablo sıradan bir tablodur ({{cmd:TABLEDIT}} düzenler) ve canlı değildir: çizim değiştiğinde komutu yeniden çalıştırın.
- Listede olmayan bir sütunu reddeder. Bir tablo 1.999 veri satırı tutar; bir CSV dosyası hepsini alır.

### COUNTTABLE

Seçimin (ya da açık alanın) blok başvurularını sayar ve sayıları bir tabloya (`Blok`, `Sayı`) ya da bir CSV dosyasına koyar. Çizimi kendi kendine izleyen bir sayım için bkz. {{cmd:BOMTABLE}}.

## Sayfalar ve çıktı alma

### LAYOUT

Takma ad: `LO`, `NEWLAYOUT`; ya da çizimin altındaki {{ui:+}} düğmesi. Bir kenarlık, bir künye ve tek bir görünüm penceresi olan yeni bir sayfa; ISO A3 üzerinde (ya da inç ya da fit cinsindeki çizimler için Tabloid). Soru yoktur.

### MVIEW

Takma ad: `MV`. Yalnızca bir sayfada ({{cmd:VPORTS}} bir sayfada da aynısını yapar).

- `Görünüm penceresinin köşesini belirtin [Çokgen/Nesne]`, `Karşı köşeyi belirtin`. Görünüm penceresi tüm modeli standart bir ölçekte gösterir.
- `Ç` (Çokgen): dış hattın köşelerine tıklayın (`Geri al`, `Kapat`), bitince {{key:Enter}}. Üçten az köşeyi reddeder.
- `N` (Nesne): `Görünüm penceresinin dış hattı için kapalı bir nesne seçin`: sayfada kapalı bir çoklu çizgi, bir daire ya da bir elips. Görünüm penceresi onun şeklini alır (eğriler kısa düz parçalar olarak); nesne olduğu gibi kalır. Kapalı olmayan bir nesneyi reddeder.

### VPCLIP

Sayfada zaten bulunan bir görünüm penceresini kırpar. `Kırpılacak görünüm penceresini seçin` (ya da önce seçin), sonra `Kırpılacak nesneyi seçin [Çokgen/Sil]`:

- Kapalı bir çoklu çizgiye, daireye ya da elipse tıklayın ya da bir çokgenin köşelerine tıklamak için {{key:Enter}} (ya da `Ç`).
- `S` (Sil, görünüm penceresi kırpılmışken sunulur) onu yeniden dikdörtgen yapar: dış hattın etrafındaki kutu.
- Görünüm penceresinin gösterdiği kâğıtta hareket etmez ve ölçeği kalır. Model yalnızca dış hattın içinde çizilir ve basılır; kenarlık onu izler. Tek bir geri al adımı.
- Kırpılmış bir görünüm penceresi, dış hattının her köşesinde bir tutamaca, merkezinin ve kutusunun dört köşesinin yanı sıra sahiptir (kutunun bir köşesini sürüklemek dış hattı onunla gerdirir). Özellikler, Dış hat: Dikdörtgen ya da Kırpılmış ve köşe sayısını gösterir.
- DWG ve DXF 2000 dosyaları dış hattı CadCraft için tutar. Diğer programlar görünüm penceresini etrafındaki dikdörtgen olarak açar; DXF R12 yalnızca dikdörtgeni tutar.
- Model sekmesinde görünüm pencerelerinin sayfalarda olduğunu söyler.

### VPORTS

Takma ad: `VIEWPORTS`. {{cmd:SPLIT}} bir sayfadan da aynıdır; {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Yan yana böl}}, {{ui:Üst üste böl}}, {{ui:Dört bölme}}, {{ui:Tek bölme}} bunu çalıştırır. Modelde: `Bölme sayısını girin [Tek/2/3/4] <3>`; `2` `[Yatay/Dikey] <Dikey>` (Dikey = yan yana) sorar, `3` `[Sol/Sağ] <Sağ>` (büyük bölmenin nerede olacağı) sorar. Her bölme kendi görünümünü ve alanını tutar; tıklama bir bölmeyi etkin yapar. Bir sayfada bu {{cmd:MVIEW}}'dir. Bkz. [Ekranı bölün](topic:split-screen).

### VPVIEW

Takma ad yok. Yalnızca bir sayfada.

- `Görünüm penceresini seçin` (seçiliyse atlanır), sonra modelde: `Gösterilecek pencerenin ilk köşesini belirtin`, `Karşı köşeyi belirtin`.

### UCS

Takma ad yok. Kendi koordinat sisteminiz; bir düzenleme değildir. `UCS başlangıcını belirtin [Adlandırılmış/Nesne/Önceki/Dünya/Z/3nokta] <Dünya>`: bir nokta yeni başlangıçtır, sonra `X ekseni üzerinde bir nokta belirtin (Enter açıyı korur)`. `Z`: `Z ekseni etrafında dönme açısını belirtin <90>`. `3`: başlangıç, pozitif X ekseni üzerinde bir nokta, pozitif Y tarafında bir nokta. `NE` (Nesne): `UCS'i hizalamak için nesneyi seçin`. `A` (Adlandırılmış): `[Geri yükle/Kaydet/Sil/?]` ve bir ad. Yeni X ekseni düz olacak şekilde görünüm döner. Bkz. [Görünümü döndürün ve kendi koordinatlarınızı kullanın](topic:ucs-and-turned-view).

### PLAN

Takma ad yok. `Bir seçenek girin [Geçerli UCS/Ucs/Dünya] <Geçerli UCS>`: etkin bölmenin görünümünü, UCS'in (ya da dünyanın) X ekseni düz olacak şekilde döndürür. Çizimdeki hiçbir şey taşınmaz.

### TURNLEFT, TURNRIGHT, TURNWORLD

Takma ad yok; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Görünümü 90° sola döndür}}, {{ui:Görünümü 90° sağa döndür}}, {{ui:Dünyaya dön}}. `UCS Z -90`, `UCS Z 90` ve `UCS W` ile aynıdır; görünüm izler.

### VPLAYER

Takma ad yok. Bir sayfada ya da bir görünüm penceresinin içinde. `Bir seçenek girin [?/Dondur/Çöz/Sıfırla/Vpvisdflt]`: `D`, `Ç` ve `S`, katman adlarını (virgüller, `*` ve `?` joker karakterleri) ve ardından `[Tümü/Seç/Geçerli] <Geçerli>` görünüm pencerelerini ister; Sıfırla her katmanı "yeni görünüm pencerelerinde donmuş" varsayılanına geri koyar; `V` bu varsayılanı ayarlar (`[Donmuş/Çözülmüş]`), bunu {{cmd:MVIEW}} kullanır. `?` geçerli görünüm penceresinde donmuş katmanları listeler. Katmanlar panelinin görünüm penceresi sütunu, tek bir pencere için aynısını yapar. Bkz. [Bir katmanı tek bir görünüm penceresinde dondurun](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Takma ad: `MS`; ya da bir görünüm penceresinin içine çift tıklayın. Yalnızca bir sayfada. Bir görünüm penceresi üzerinden modelde çalışın: seçili olan, sayfadaki tek olan ya da `Çalışmak için görünüm penceresinin içine tıklayın`. İçeride kaydırma ve yakınlaştırma, görünüm penceresinin görünümünü değiştirir (görüntüsü kilitli olan bunu korur ve sayfa hareket eder); yeni görünüm tek bir geri al adımı olarak yazılır. Bkz. [Bir görünüm penceresi üzerinden modelde çalışın](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Takma ad: `PS`; ya da görünüm penceresinin dışına çift tıklayın, ya da çizimin altındaki bir sekmeye tıklayın. Sayfaya geri döner.

### PLOT

Takma ad: `PRINT`, `PUBLISH`, `EXPORTPDF`; ya da {{key:Mod+P}}. {{ui:PDF'e çıktı al}} iletişim kutusunu açar. Bkz. [PDF'e çıktı al](topic:plot-pdf).

### PLOTSTYLES

Takma ad: `STYLESMANAGER`, `PSTABLES`; ya da {{ui:PDF'e çıktı al}} iletişim kutusunda {{ui:Tabloları düzenle…}}. {{ui:Çıktı stili tabloları}}nı açar: her rengin nasıl basılacağını (renk, gri, mürekkep, çizgi kalınlığı), çizimle birlikte saklanır. Bkz. [Çıktı stili tabloları](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}}, nesneleri bir görünüm penceresi üzerinden sayfa ile model arasında taşır; diğer taraftan aynı görünecek şekilde ölçeklenir ve döndürülür. Bir sayfada, nesneleri seçin ve modele giderler (sayfada birden çok görünüm penceresi varsa birini seçin). Bir görünüm penceresi üzerinden modelde çalışırken ({{cmd:MSPACE}}), seçili nesneler sayfaya gelir. Kaç kat büyüdüklerini ya da küçüldüklerini söyler. Görünüm pencereleri sayfalarında kalır. Tek bir geri al adımı.

### ISODRAFT

{{cmd:ISODRAFT}}, izometrik çizimi `AÇIK` ya da `KAPALI` yapar ya da doğrudan `Sol`, `Üst` ya da `Sağ` düzleme geçer. Açıkken: Ortogonal ({{key:F8}}) çizgileri düzlemin iki ekseninde tutar (sol: 90° ve 150°; üst: 30° ve 150°; sağ: 30° ve 90°), kutupsal izleme ({{key:F10}}) aynı eksenleri izler, ızgara yakalama ({{key:F9}}) izometrik ızgarayı kullanır ve ızgara ({{key:F7}}) 30°, 90° ve 150° çizgilerle çizilir. {{cmd:ELLIPSE}}, `İzometrik çember` kazanır: bir merkez ve bir yarıçap (ya da `Diameter`) verin, ve bir dairenin geçerli düzlemde gösterildiği elipsi çizer. Çizim düzdür kalır: bunlar bir perspektif görünümü çizmek için yardımcılardır, bir 3B model değildir. Ayar bu oturum içindir ve dosyada kaydedilmez.

### ISOPLANE

{{cmd:ISOPLANE}}, izometrik çizimin üzerinde çalışacağı düzlemi seçer: `Sol`, `Üst` ya da `Sağ`. Enter bir sonraki düzleme geçer. İzometrik çizim açıkken {{key:F5}} bir komutun ortasında aynısını yapar; kapalıyken {{key:F5}} tarayıcıya bırakılır.

## Sorgulama

### CAL

Bir hesaplamanın değerini, bir uzunluk yazılabilen her yerde okunduğu gibi yazdırır.

- `İfade`: yazın, örneğin `12'6"+3/4"` ya da `(24'-0")/3`, ve {{key:Enter}} tuşuna basın. CadCraft `= 12'-6 3/4"   (150.75 çizim birimi)` yazdırır. Bkz. [Yazılan bir değerde aritmetik](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Takma ad: `DI`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Mesafe ölç}}.

- `İlk noktayı belirtin`, `İkinci noktayı belirtin`. Mesafeyi, açıyı, Delta X ve Delta Y'yi yazdırır.

### AREA

Takma ad: `AA`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Alan}}. Alanı ve çevreyi yazdırır.

- `İlk köşe noktasını belirtin [Nesne/Alan ekle/Alan çıkar] <Nesne>`
  - Köşeleri tıklayın ya da yazın; `Sonraki noktayı belirtin (Enter kapatır) [Geri al]` isteminde, dış hattı kapatmak için {{key:Enter}} tuşuna basın. `G` son köşeyi geri alır.
  - {{key:Enter}} ya da `N`, sonra `Nesne seçin`: bir daire (çevresini yazdırır), bir elips, bir çoklu çizgi (açık olan, alan için düz bir çizgiyle kapatılır ve uzunluğu yazdırılır) ya da bir tarama (delikler çıkarılır).
  - `A` (Alan ekle) ve `S` (Alan çıkar) çalışan bir toplamı tutar: istem `(EKLE kipi)` ya da `(ÇIKAR kipi)` ile başlar, her alan eklenir ya da çıkarılır ve her birinden sonra `Toplam alan = …` yazdırılır. Bu kiplerde `N` Enter'a kadar nesne seçer ve ilk istemdeki {{key:Enter}} komutu bitirir.

### MEASUREGEOM

Takma ad: `MEA`. `Bir seçenek girin [Mesafe/Yarıçap/Açı/Alan] <Mesafe>`; her ölçümden sonra yeniden sorar, varsayılan `Çıkış` olur.

`Hızlı`, imleci hareket ettirdikçe onun çevresinde ölçer: imlecin sağındaki, üstündeki, solundaki ve altındaki en yakın nesneye olan mesafe (geçerli UCS'nin eksenleri boyunca), gidilirken çizilir; ve iki komşu düz olup buluşuyorsa açı. Bir tıklama dört mesafeyi, açık genişliği ve yüksekliği ve açıları geçmişe yazar; Enter seçeneklere döner. Ekranda olanı okur.

- `M`: iki nokta, {{cmd:DIST}} gibi.
- `Y`: `Bir yay ya da daire seçin`; yarıçapı ve çapı yazdırır.
- `A`: bir yay (kapsadığı açı), bir çizgi ve sonra ikinci bir çizgi (aralarındaki açı, uzak uçlarına doğru), ya da {{key:Enter}} ve üç nokta (köşe, sonra iki uç).
- `AR`: {{cmd:AREA}} gibi, tek bir alan.

### ID

Takma ad yok. `Bir nokta belirtin`; X ve Y'sini yazdırır.

### LIST

Takma ad: `LI`, `LS`. `Nesneleri seçin`; her nesnenin türünü, katmanını ve ana ölçülerini yazdırır.

### MASSPROP

{{cmd:MASSPROP}}, seçtiğiniz bölgelerin ve kapalı nesnelerin birlikte alınmış kesit özelliklerini verir: alan, çevre, sınırlayıcı kutu, ağırlık merkezi, orijinden X ve Y eksenlerine göre atalet momentleri, atalet çarpımı, atalet yarıçapları, aynı momentler ağırlık merkezine göre ve asal momentler ile eksenlerinin yönleri. Bölgelerdeki delikler delik sayılır. Rakamlar çizim birimindedir ve çizgi ve yaylardan oluşan dış hatlar için kesindir; elipsler ve splineler kısa düz parçalar olarak ölçülür ve bunu söyler. Rapordan sonra bunu bir metin dosyasına yazıp yazmayacağını sorar. Kapalı olmayan nesneler dışarıda bırakılır ve kaç tane olduğunu söyler.

## Görünüm, dosya ve diğer

### ZOOM

Takma ad: `Z`.

- `Pencere köşesini belirtin, ölçek faktörünü girin (nX) [Sınırlar/Tümü/Pencere/Önceki/Ölçek/Merkez]`. Bir pencere için iki köşe tıklayın. `S`, `T` ya da Enter: bütün çizim.
- `Ö` (Önceki, ya da araç çubuğundaki {{ui:Önceki}}) bir önceki görünüme döner, sekme başına 10 görünüme kadar; bir dizi tekerlek adımı ya da bir kaydırma bir görünüm sayılır.
- `2`, `2x` ya da `0.5x` gibi bir sayı (ya da `Ö` ve sonra sayı) ekranın ortası etrafında o faktörle yakınlaştırır ya da uzaklaştırır.
- `M` (Merkez): `Merkez noktasını belirtin` ve `Yükseklik ya da büyütme girin (nX)`.

### PDFATTACH, PDFIMPORT ve PDF komutları

Takma adlar: `PDFATT`, {{cmd:PDFATTACH}} için; `PDFIM`, {{cmd:PDFIMPORT}} için. {{cmd:PDFATTACH}}, bir PDF sayfasını çizimin altına koyar (dosya, sayfa, ekleme noktası, ölçek, dönme); {{cmd:PDFIMPORT}}, bir sayfanın çizgilerini, eğrilerini, dolgularını ve metnini PDF'ten adlandırılmış katmanlarda çizim nesnelerine çevirir; gerçek boyutunda, yazılmış bir ölçekte ya da iki nokta ve gerçek bir mesafeden ölçeklenmiş. {{cmd:PDFCLIP}} bir altlığı kırpar, {{cmd:PDFADJUST}} soldurmayı, kontrastı, tek rengi ayarlar ya da kapatır, {{cmd:PDFLAYERS}} PDF'in kendi katmanlarını açar ya da kapatır ve {{cmd:PDF}}, bir çizimin altlıklarının kullandığı dosyaları CadCraft'a yeniden verir. Bkz. [PDF altlıkları](topic:pdf-underlay).

### AUTOCOMPLETE

Takma ad: `AUTOC`. Çizim otomatik tamamlama: hiçbir komut çalışmazken, gri bir hayalet, çizimin kendi desenlerinin neyin geleceğini söylediğini gösterir. {{cmd:AUTOCOMPLETE}}, onu `Açık` ya da `Kapalı` yapar (ya da Ayarlar › CadCraft) ya da şu an ne önereceğini `Göster` ile gösterir. **Tab** hayaleti tek bir geri al adımı olarak çizer; **Esc** çizim değişene kadar onu kapatır. En yeni nesnelerde üç şey bulur: iki ya da daha fazla kez eşit adımla çizilmiş bir şeyin bir sonraki kopyası (saplamalar, kolonlar, bir merdivenin basamak yüksekliği ve basamağı), bir çoklu çizgi merdivenin sonraki adımları ve bir odanın ya da duvar zincirinin eksik tarafı. {{cmd:LINE}} ya da {{cmd:PLINE}} komutunun ortasında hayalet **sonraki noktadır**: merdivenin sonraki adımı (basamak yüksekliği, basamak, basamak yüksekliği…), bir dikdörtgenin dördüncü köşesi, onu kapatan nokta ya da bir adım daha eşit bir adım. İmleci yakına getirin ve sanki oraya tıklamışsınız gibi **Tab** tuşuna basın; devam edin ya da Enter basın. Bu bilgisayarda kurallarla hesaplanır; bir model yoktur.

### AUTOSHEET

Takma ad: `ASH`. Kendi kendine yerleşen sayfalar. {{cmd:AUTOSHEET}}, çizimin parçalarını (adlandırılmış görünümleriniz, modelin ayrı parçaları ya da tüm model) alır, bir kâğıt boyutu seçer (ya da verdiğiniz), her parçaya standart bir ölçek verir (hepsi için tek ölçek ya da her birinin alabileceği en büyük ölçek) ve görünümleri yeni sayfalarda satırlar halinde, her birinin altında bir başlık ve bir yazıyla (ad ve ölçek) yerleştirir. Tek bir sayfaya sığmayan, kendi sayfasını alır. Tek bir geri al adımı. Bu bilgisayarda kurallarla hesaplanır; bir model yoktur.

### PHOTOSKETCH

Takma ad: `PSK`. Fotoğraftan çizime. Kâğıt üzerindeki bir el eskizinin bir fotoğrafını (JPEG, PNG ya da TIFF) seçin. {{cmd:PHOTOSKETCH}} eskiz kâğıdının dört köşesini bulur, perspektifi düzeltir, adını verdiğiniz kâğıt boyutunu (`Kâğıt` ya da en yakın standart olanı) ve eskizin `Ölçeğini` (1 : n) alır, sonra kalem çizgilerini çizgi, yay ve dairelere izler; her kalem rengi (siyah, kırmızı, mavi, yeşil) için bir katman. Kâğıdın kenarını bulamazsa tüm fotoğrafı sayfa olarak alır ve bunu söyler. Yazılar dışarıda bırakılır. Tek bir geri al adımı. Klasik görüntü işleme ile bu bilgisayarda yapılır; bir model yoktur, hiçbir şey hiçbir yere gönderilmez. Ayrıca bkz. taranmış çizim komutları.

### AUTODIM

Takma ad: `ADIM`. Kurallarla otomatik ölçülendirme. {{cmd:AUTODIM}}, seçili nesneleri (ya da tüm çizimi) seviyelerinden ve dik kenarlarından ölçülendirir: seçtiğiniz kenarlar boyunca (`Kenarlar`) bir ölçülendirme zinciri, dışında bir genel ölçülendirme, her açıklığın genişliği (aynı doğrultudaki duvar çizgileri arasındaki boşluk), her delik boyutu için bir çap ve `Izgara` ile ızgara çizgileri arasındaki aralık. Zaten orada olan bir ölçülendirme yeniden yapılmaz. Tek bir geri al adımı. Bu bilgisayarda kurallarla hesaplanır; bir model yoktur.

### GRIDMOVE

Takma ad: `GM`. Bir ızgara çizgisini taşımak, takımı taşır. {{cmd:GRIDMOVE}}, bir ızgara çizgisini (adı ızgara ya da eksen olan bir katmanda bir çizgi) ve onun üzerinde asılı olanları taşır: çizgide bir ucu olan duvarlar onu izleyecek şekilde uzar, boyunca olan duvarlar bütün olarak taşınır, kolonlar (çizgideki blok başvuruları ve daireler), balonu ve etiketi taşınır ve noktaları çizgide olan ölçülendirmeler yeni aralığı ölçer. İki nokta (yalnızca çizgiyi geçen kısım sayılır) ya da `Mesafe` verin. Tek bir geri al adımı hepsini geri alır. Bu bilgisayarda kurallarla yapılır.

### DETAILS

Takma ad: `DET`. Sizi bulan detaylar. {{cmd:DETAILS}}, firmanızın kendi detaylarını tutar: `Ekle`, bu çizimin bir bloğunu listeye koyar; `Listele` ve `Kaldır` onu yönetir; `Bul`, seçili olanlar (ya da en son çizdiğiniz şey) için, katmanlarındaki kelimelere, blok adlarına, tarama desenlerine ve notlara göre, her detayın adı ve notlarıyla karşılaştırarak sıralar; böylece bir pencere başlığı sizin pervaz kaplamanızı bulur. Yerleştirmek için bir numara ve bir nokta seçin. Ayarlar'da da olan `İpucu` açıkken, bir detayla eşleşen bir şey seçmek durum çubuğuna tek bir satır koyar. Liste bu tarayıcıda, bu bilgisayarda tutulur ve aranan liste budur. `Paylaş` bunu Belgeler klasörünüze de koyar (`.cadcraft/firm-details.json`, her bloğun çizimiyle birlikte): `Çek` ekibinizde olup sizde olmayanı ekler, `Gönder` sizde olup onlarda olmayanı ekler, `İkisi` ikisini de yapar ve her iki taraftan hiçbir şey silinmez. Önce Belgeler klasörünü açın ({{cmd:DOCUMENTS}}); o klasör bir Takım Bulut Planı klasörü ise, tüm ekip tek bir listeyi paylaşır. Kitaplık panelindeki bir detay öğesinin **Firmamın detaylarına ekle** düğmesi, onu aynı listeye koyar. Bu bilgisayarda kelimelerle, bir model olmadan hesaplanır.

### SKETCHFIX

Takma ad: `SKF`. Kalem eskizleri kesin geometriye dönüşür. Seferde bir serbest el vuruşu basın ve sürükleyin (kalem, fare ya da parmak), sonra Enter. Her vuruş bir çizgi, daire, yay, dikdörtgen ya da çoklu çizgi olarak okunur: neredeyse yatay ve dik çizgiler tam olarak yatay ve dik yapılır, kapalı yuvarlak bir vuruş bir daire olur, dört dik açılı köşesi olan kapalı bir vuruş bir dikdörtgen olur ve vuruşların uçları birbirine ve çizimdeki uçlara çekilir. Tek bir geri al adımı. Kurallarla bu bilgisayarda hesaplanır; bir model yoktur.

### SCANATTACH ve taranmış çizim komutları

Takma adlar: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}'in takma adı yoktur. Hepsi bir resim üzerinde çalışır, her biri tek bir geri al adımı. {{cmd:SCANATTACH}}, bir PNG, JPEG, TIFF (bir sayfa ya da hepsi) ya da resim olan bir PDF sayfası ekler. {{cmd:SCANSCALE}}, sayfayı iki seçilen noktadan ve gerçek mesafeden ölçekler. {{cmd:SCANALIGN}}, onu iki noktaya taşır ve döndürür (`Sayfayı sığdır` Evet/Hayır). {{cmd:SCANDESKEW}}, sayfanın uzun çizgilerinin açısını gösterir ve `Kabul et` ya da bir `Değer` verdiğinizde sayfayı döndürür. {{cmd:SCANCLEAN}}, onu siyah beyaz yapar (`Eşik` Otomatik/Uyarlanabilir/Seviye, `Lekeler`) ve `Çalıştır`. {{cmd:SCANCROP}}, bir pencereyi tutar. {{cmd:SCANERASE}}, bir `Dikdörtgen`, `Çokgen` ya da `Kement` siler. {{cmd:SCANTRACE}}, çizgi ve yayları yeni bir katmana izler (`Tolerans`, `Pencere`, `Yaylar`, `Artıklar`, `Çalıştır`) ve ne bulduğunu ve raster olarak ne bıraktığını bildirir. {{cmd:SCANINFO}}, özgün dosyayı ve adımları listeler. {{cmd:RASTERSNAP}}, taranmış sayfaların çizgilerine yakalamayı Açık ya da Kapalı yapar. Bkz. taranmış çizimler ve izleme konusu.

### REGEN ve REGENALL

Takma adlar: `RE`, {{cmd:REGEN}} için; `REA`, {{cmd:REGENALL}} için. Ekranda çizilenleri çizimden yeniden oluşturur: {{cmd:REGEN}} baktığınız sekmeyi (bir sayfada, görünüm pencerelerinin gösterdiği modeli de), {{cmd:REGENALL}} her sekmeyi, her bölünmüş ekran bölmesini ve her açık çizimi. Betik ya da çok büyük bir değişiklikten sonra resim eskidiğinde ya da bir yardımcı çizimi düzenlediğinde kullanın; çizimin kendisine dokunulmaz, bu yüzden geri alınacak bir şey yoktur.

### NAMEDVIEW

Takma adlar: `NV`, `VIEWS`. `Bir seçenek girin [?/Geri yükle/Kaydet/Pencere/Sil] <Geri yükle>`, sonra görünümün adı. `K` ekrandaki görünümü, `P` sizin seçtiğiniz bir pencereyi kaydeder, `G` kayıtlı bir görünümü gösterir, `S` birini siler, `?` bu sekmenin görünümlerini listeler. Var olan bir adla kaydetmek onu değiştirir; her değişiklik tek bir geri al adımıdır. Görünümler, kaydedildikleri sekmeye aittir. DWG ve DXF dosyaları bunları tutar (GÖRÜNÜM tablosu); bir sayfanın görünümleri ilk sayfada geri gelir, çünkü dosya hangisi olduğunu söylemez.

### UNDO ve REDO

Takma ad: `U`, {{cmd:UNDO}} için; {{cmd:REDO}}'nun takma adı yoktur. Ayrıca {{key:Mod+Z}} ve {{key:Mod+Y}}.

### LAYER

Takma ad: `LA`. {{ui:Katmanlar}} paneline gider.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Yeni nesneler için çizgi tipi girin` — `ByLayer`, `ByBlock` ya da bir ad (`?` bunları listeler: Continuous, çizimin kendi tipleri ve DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, `2` (yarım) ve `X2` (çift) boyutlarıyla). {{cmd:LWEIGHT}} (`LW`): yeni nesneler için mm cinsinden çizgi kalınlığı ya da `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): çizimin çizgi tipi ölçeği (geri alınabilir). {{cmd:LWDISPLAY}} (`LWT`): `Çizgi kalınlıklarını göster [AÇIK/KAPALI]` — durum çubuğundaki {{ui:LWT}} düğmesiyle aynı. Bkz. [Çizgi kalınlıkları ve çizgi tipleri](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Yeniden adlandırılacak nesne türünü girin [Katman/Blok]`, `Eski adı girin`, sonra yeni ad; nesneler ya da başvurular izler. {{cmd:LAYMRG}}: `Birleştirilecek katmandaki bir nesneyi seçin ya da [Ad]` Enter'a kadar, sonra `Hedef katmandaki bir nesneyi seçin ya da [Ad]` ve `E`. {{cmd:LAYDEL}}: `Silinecek katmandaki bir nesneyi seçin ya da [Ad]`, sonra `E`: katman ve üzerindeki her nesne gider (0 katmanı, DEFPOINTS ya da geçerli katman değil). Her biri tek bir geri al adımı. Bkz. [Çizimi katmanlarla düzenleyin](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Nesneleri seçerek katmanlar; ayrıca {{ui:Katmanlar}} panelinin {{ui:Araçlar}} menüsünde. {{cmd:LAYISO}}: `İzole edilecek katman(lar)daki nesneleri seçin`, sonra {{key:Enter}}: diğer her katman kapanır. {{cmd:LAYUNISO}} onları yeniden açar. {{cmd:LAYOFF}} ve {{cmd:LAYFRZ}}: `Kapatılacak (ya da dondurulacak) katmandaki bir nesneyi seçin`, tekrar tekrar; `G` son birini geri alır, {{key:Enter}} bitirir. {{cmd:LAYMCUR}}: `Geçerli olacak katmanın nesnesini seçin`. {{cmd:LAYON}} her katmanı açar, {{cmd:LAYTHW}} her katmanı çözer. Her komut tek bir geri al adımıdır. Bkz. [Çizimi katmanlarla düzenleyin](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} boş bir çizim başlatır ve {{cmd:OPEN}} bir DWG ya da DXF açar; her biri çizimin üstünde kendi sekmesinde (dokunulmamış yeni bir çizim yerine yeni bir sekme açmak yerine kullanılır). Kaydedilmemiş değişiklikleri olan bir sekmeyi kapatmadan önce sorar. Bkz. [Ekranı bölün](topic:split-screen).

{{cmd:SAVE}} (takma ad `QSAVE`, ayrıca {{key:Mod+S}}), çizimin biçiminde bir kopya indirir: bir DWG'den açıldıysa DWG, bir DXF'den açıldıysa DXF. Yeni bir çizim, bu tarayıcıda Farklı kaydet'te en son seçilen biçimi kullanır, yoksa DWG.

{{cmd:SAVEAS}} (ayrıca {{key:Mod+Shift+S}}), {{ui:Kopyasını farklı kaydet}} iletişim kutusunu açar: {{ui:DWG}} (ve {{ui:Sürüm}}), {{ui:DXF R12}} ya da {{ui:DXF 2000}} seçin, sonra {{ui:Kaydet}}. Seçim bu çizim için ve bu tarayıcıdaki yeni çizimler için geçerli kalır.

{{cmd:DXFOUT}} her zaman bir DXF R12 kopyası indirir; {{cmd:SAVE}}'in kullandığı biçimi değiştirmez.

Bkz. [Dosyalar: neyi açar, neyi kaydeder](topic:files#saving).

### TOUR

Takma ad: `TUTORIAL`. İlk çizim turunu altı adımda yeniden başlatır. Bkz. [Başlarken](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Takma ad: `TBDOCK`. `Araç çubuğu konumu [Üst/Alt/Sol/Sağ]`. Bkz. [Ayarlar](topic:settings#toolbar-position).

### COMMANDLINE

Takma ad: `CMDLINE`. `Komut satırı [Altta yerleşik/Yüzen/Tek satır/Gösterilen geçmiş satırları/Komut geçmişi (F2)]`: komut satırını yerleştirir ya da yüzdürür, tek satır yapar, gösterilecek geçmiş satırı sayısını (0 ile 12) sorar ya da geçmişi açar. Bkz. [Ayarlar](topic:settings#command-line).

### TOPAREA

`Üst alan [Standart/Kompakt]`: çizimin üstündeki çubuklar eskisi gibi ya da kompakt. Bkz. [Ayarlar](topic:settings#top-area).

### POLARANG

`Kutupsal açı adımını derece cinsinden girin <90>`: {{ui:Kutupsal}} izlemenin hizalandığı adım (0'dan büyük, 180'e kadar). Bu tarayıcıda hatırlanır.

### UNITS

Takma ad: `UN`. Uzunluklar nasıl yazılır ve yazılır.

- `Uzunluk biçimini girin [Bilimsel/Ondalık/Mühendislik/Mimari/Kesirli] <geçerli>`
- Mimari ve Kesirli: `Gösterilecek en küçük kesrin paydasını girin (1, 2, 4, 8, 16, 32, 64, 128 ya da 256)`. Diğerleri: `Ondalık basamak sayısını girin (0 ile 8)`.

Yeni ölçülendirmeler buna uyar. Tek bir geri al adımı. {{ui:Geçerli ayarlar}} içindeki {{ui:Uzunluk biçimi}} ve {{ui:Hassasiyet}} ile aynıdır; bkz. [Fit ve inç](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Takma ad: `GDS`. Bir IC yerleşimini (bir GDSII akış dosyası) görüntüler: laboratuvar denemesi, yalnızca görüntüleme ve ölçme için.

- Bir dosya seçici bir `.gds` dosyası alır; birden çok üst hücre varsa `Çizilecek üst hücreyi girin`.
- Her katman ve veri türü bir çizim katmanı olur (`GDS 1`, `GDS 2/5`), başvurular ve diziler düz olarak, dosyanın kullanıcı biriminde (genellikle mikrometre) yerleştirilir. Tek bir geri al adımı. Hiçbir şey simüle edilmez ya da denetlenmez ve dosya geri yazılmaz.

### DIAGRAM

Takma ad: `TEXTDIAGRAM`, `T2D`. Metinden bir diyagram.

- Bir kutu metni alır (ya da komut satırında noktalı virgülle ayrılmış bir satır): bir Mermaid akış şeması, bir PlantUML bileşen diyagramı, D2 ya da bir başlangıç-bitiş listesi.
- `Diyagramın sol üst köşesini belirtin`, sonra `Metin yüksekliğini belirtin`.

Bloklar ve bağlayıcılar `Diyagram` katmanında sıradan nesnelerdir ve bitince seçili olur. Tek bir geri al adımı. Bkz. [Metinden bir diyagram çizin](topic:text-to-diagram).

### OLELIST

Takma ad: `OLES`. Bir DWG'nin taşıdığı, CadCraft'ın kendiliğinden yerleştiremediği OLE nesneleri.

- Her birini listeler: numara, tür, boyut, bir resim kaydedip kaydetmediği.
- `Bir seçenek girin [Yerleştir/Çıkış] <Çıkış>`: Yerleştir, numarayı, sol alt köşeyi ve genişliği ister ve resimle bir çerçeve çizer. Tek bir geri al adımı; saklanan nesne değişmez. Bkz. [Resimler](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Takma ad: `SHX`. Kendi SHX yazı tipleriniz.

- `Bir SHX yazı tipi seçeneği girin [Klasör/Dosyalar/Liste/Kaldır/Ters/Temizle] <Liste>`

{{ui:Klasör}} bir klasördeki her `.shx` dosyasını okur (CadCraft Studio; her başlangıçta yeniden), {{ui:Dosyalar}} seçilen dosyaları alır (tarayıcı), {{ui:Ters}} bir yazı tipinin harflerini sondan başa doğru yerleştirir. Yüklü bir yazı tipini adlandıran metin stilleri onunla çizilir. Bkz. [Kendi SHX yazı tiplerinizle metin çizin](topic:shx-fonts).

### LIMITS

Çizimin ne kadar büyük olması amaçlandığı.

- `Sol alt köşeyi belirtin ya da [AÇIK/KAPALI] <geçerli>`: bir nokta, `AÇIK` ya da `KAPALI`.
- `Sağ üst köşeyi belirtin <geçerli>`.

Izgara sınırları doldurur, {{cmd:ZOOM}} Tümü onları gösterir ve sınırlar AÇIKken dışındaki bir nokta reddedilir (`**Sınırların dışında`). Tek bir geri al adımı; DWG ve DXF'te kaydedilir. Bkz. [Çizim sınırlarını ayarlayın](topic:drawing-limits).

### AUNITS

Takma ad: `ANGUNITS`. Açılar nasıl gösterilir ve yazılır.

- `Açı biçimini girin [Ondalık derece/Derece-dakika-saniye/Ölçücü yönleri] <geçerli>`
- `Ondalık basamak sayısını girin (0 ile 8)`, ya da diğer ikisi için `Hassasiyeti girin` (0 derece, 2 dakika, 4 saniye, saniyenin 5 ile 8 ondalığı).

Tek bir geri al adımı; DWG ve DXF'te kaydedilir. {{ui:Geçerli ayarlar}} içindeki {{ui:Açı biçimi}} ile aynıdır. Bkz. [Yönleri ve açıları yazın ve gösterin](topic:bearings-and-angles).

### APPLOAD

Takma ad: `AP`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Uygulama yükle…}}. {{ui:Uygulamaları yükle}} iletişim kutusu: `.lsp` rutinlerini ve `.dcl` iletişim kutusu dosyalarını yükler, kaldırır, geçmişten yeniden yükler ve Başlangıç Paketi. Bir rutinin `(defun c:NAME …)` komutları sonra diğer komutlar gibi çalışır. Bkz. [Uygulamaları yükleyin](topic:load-applications) ve [LISP rutinlerini çalıştırın](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Takma adları düzenle…}}) takma ad dosyanızı (`TAKMA AD, *KOMUT` satırları) açar; {{ui:Kaydet}} onu uygular. {{cmd:REINIT}} onu yeniden uygular. Bkz. [Komut takma adlarını düzenleyin](topic:command-aliases).

### LISPEDIT

Takma ad: `VLIDE`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:LISP düzenleyici}}. LISP düzenleyicisini açar, çizimin yanında açık kalan bir pencere.

- Metin: satır numaraları, imlecin altındaki parantezin eşi işaretlenir (eşi yoksa kırmızı), {{key:Enter}} yeni satırı açık parantezin altında girintiler, {{key:Tab}} iki boşluk yazar, {{key:Esc}} metinden çıkar.
- {{ui:Çizime yükle}} ({{key:Ctrl+Shift+Enter}}): her formu okur, {{cmd:APPLOAD}}'un dosyayla yaptığı gibi, ve `c:` komutlarını oluşturur. Dosya {{cmd:APPLOAD}}'un listesinde görünür.
- {{ui:Seçimi çalıştır}} ({{key:Ctrl+Enter}}): seçili formları ya da imlecin içinde olduğu formu değerlendirir.
- {{ui:Durdur}}: çalışan bir rutini sonlandırır.
- {{ui:Konsol}}: rutinin yazdırdıkları ve her hata satırıyla; bir hataya tıklayarak oraya gidin. Metin, bir üst düzey formda bir seferde çalıştırılır; bu yüzden satır formun satırıdır, ya da içindeyse hatanın adını verdiği işlevi çağıran satır.
- {{ui:Yeni}}, {{ui:Aç}}, {{ui:Kaydet}} ({{key:Ctrl+S}}): bir `.lsp` dosyası. Metin bu tarayıcıda da tutulur, böylece pencereyi kapatmak onu kaybettirmez.
- Metnin yanında: rutinin tanımladığı işlevler, bu LISP'te henüz olmayan çağırdığı işlevler, içinde ya da yerleşik olarak tanımlı olmayan çağırdığı işlevler ve yerleşik olanların ve olmayanların tam listeleri.

Eşleşmeyen bir parantezi ya da hiç bitmeyen bir metni olan bir metin çalıştırılmaz: satır adlandırılır. Adım adım bir hata ayıklayıcı, kesme noktası ya da izleme penceresi yoktur. Bkz. [LISP rutinlerini çalıştırın](topic:run-lisp).

### HELP

Takma ad: `?`. Her komutu, takma adlarını ve tek satırlık bir açıklamasını komut satırı geçmişine yazdırır. Bu yardımı açmaz: bunun için {{key:F1}} tuşuna basın ya da {{ui:Yardım}} tıklayın.

## Nesne seç istemi

Her `Nesneleri seçin` isteminde: nesnelere tıklayın, pencereleri (soldan sağa) ve kesişen pencereleri (sağdan sola) iki tıklamayla çizin ya da bir kement basıp sürükleyin ({{key:Space}} sürüklerken: pencere, kesişen pencere, çit), seçimi kaldırmak için {{key:Shift}}+tıklayın ve bitirmek için {{key:Enter}} tuşuna basın. Ayrıca şunları yazabilirsiniz: `ALL` (her şey), `L` (son nesne), `P` (Önceki: son komutun kullandıkları), `F` (Çit: bir noktalar çizgisinin kestiği nesneler; `G` bir noktayı geri alır), `W` (Pencere), `C` (Kesişen), `R` (Kaldırma kipi: tıklamalar nesneleri çıkarır; istem `Nesneleri kaldır` yazar) ve `A` (Yeniden ekle). `?` bunları listeler. İstemde gösterilmezler. Üst üste binen nesnelerde {{key:Tab}}, bir sonrakini vurgular; onu seçmek için tıklayın. Bkz. [Nesneleri seçin](topic:select-objects).

### ACCESS

Takma ad: `AX`. Görmeden çizim. {{cmd:ACCESS}}, Erişimi açar ya da kapatır (`Açık`, `Kapalı`) ve yakalama seslerini (`Ses`) ve sesli komutları (`Ses`) değiştirir; önce durumu söyler. Erişim açıkken her komut ve sonuç ekran okuyucunuz aracılığıyla seslendirilir ve çizim alanında bir klavye imleci olur. "Görmeden çizim" yardım konusu tuşları anlatır.

### DESCRIBE

Takma ad: `DESC`. Çizimin ne içerdiğini söyler: kaç nesne, ne tür, ne kadar büyük, kaç katman, neyin seçili olduğu. Yalnızca okur; hiçbir şeyi değiştirmez.

### WHEREAMI

Takma ad: `WHERE`. İmlecin nerede olduğunu, çizimin birimlerinde söyler.

### NEARBY

İmlecin yakınında ne olduğunu, en yakından başlayarak, her biri mesafesi ve bulunduğu tarafla söyler.

### SAYSEL

Seçili olanı söyler: nesne başına bir cümle (çizgi uzunluğu, uçları ve açısı; daire yarıçapı ve merkezi; metin yazıldığı gibi).

### VOICE

Sesli komutları açar ya da kapatır. Bu bilgisayarda tanınırlar; tarayıcının bunu yapamadığı yerlerde, Ayarlar'da tarayıcının çevrimiçi hizmetini seçmediğiniz sürece ses kapalı kalır.

### TOUCHCROSSHAIR

Takma ad: `TCX`. Parmakla çizim için ofsetli imleç; parmak seçmek istediğiniz noktayı kapatmasın diye. Açıkken, çizimde tek bir parmak seçim yapmaz: parmağın üstünde ve yanında duran bir imleci hareket ettirir. Yakalamalar ve izleme imleci izler. Parmağı kaldırmak hiçbir şey seçmez ve imleci olduğu yerde bırakır. Seçmek için çizimin köşesindeki {{ui:Tıkla}} düğmesine basın ya da çizimin herhangi bir yerine ikinci bir parmakla dokunun. Diğer parmakla sürüklemek için {{ui:Tıkla}}'yı basılı tutun (seçim penceresi, kement, bir tutamaç). Parmak sabit basılı tutulursa ya da {{ui:Enter}} düğmesi Enter'dır. İki parmak, daha önceki gibi kaydırır ve yakınlaştırır. Alt kenara ve uzak yan kenara yakın, imleç parmağa yaklaşır; böylece çizimin her parçasına ulaşılabilir. Kalem ve fare her zaman doğrudan seçer.

{{cmd:TOUCHCROSSHAIR}} durumu söyler ve `AÇIK`, `KAPALI`, `Otomatik` (yalnızca parmak tek işaretçi olduğunda açık, bu yüzden fareli bir bilgisayarda kapalı), `Mesafe` (imlecin parmaktan ne kadar uzakta duracağı, 24 ile 240 piksel) ya da `Taraf` (`Sol`: yukarı ve sola, sağ el için; `Sağ` sol el için; düğmeler diğer köşeye geçer) ister. Aynı seçenekler Ayarlar › CadCraft'ta vardır ve dokunmatik ekranlı bir cihazda durum çubuğunda bir {{ui:Ofset imleci}} anahtarı vardır. Seçimler bu tarayıcıda tutulur.

### WHOHAS

Bir çizimi kimin açık tuttuğunu söyler. CadCraft Studio'da bir bilgisayarda, bir DWG ya da DXF açmak, yanına küçük bir kilit dosyası (`Plan.dwg.cclock`: kim, ne zamandan beri, hangi sürüm) yazar, çizim açık olduğu sürece her dakika yeniler ve çizim kapandığında siler. Başkasının açık tuttuğu bir çizimi açmak kimin ve ne zamandan beri olduğunu söyler ve {{ui:Salt okunur aç}} (sonra Kaydet yeni bir ad ister), {{ui:Yine de aç}} (diğer kişi bir sonraki yenilemesinde bilgilendirilir) ya da {{ui:İptal}} sunar. Başkasının açık tuttuğu bir dosyanın üzerine kaydetmek önce sorar. Beş dakikadır yenilenmemiş bir kilit eski sayılır: diğer kopya kaydetmeden kapanmıştır ya da bilgisayar uykudadır.

{{cmd:WHOHAS}}, `Geçerli` (açık çizim), `Dosya` (birini seçin), `Klasör` (bir klasör seçin: içinde açık olan her çizim listelenir), `Yol` (tam yolu yazın) ya da `Ad` (diğerlerinin gördüğü ad; giriş yaptığınızda hesabınızın adı) ister. Studio yalnızca sizin seçtiğiniz klasörlere erişebilir: hiç seçilmemiş bir klasörden açılmış bir çizim için, onu açık olarak not edemeyeceğini bir kez söyler; `Klasör` klasörü seçer ve kilitler oradan itibaren çalışır. Kilit insanlar için bir nottur, bir engel değildir: başka bir program yine de dosyayı yazabilir. Bir tarayıcıda bakılacak klasör yoktur ve komut bunu söyler.

### OVERKILL

Yinelenen nesneleri siler ve üst üste binen çizgileri ve yayları düzenler; çoklu çizgi dolu gelen çizimler için. `Temizlenecek nesneleri seçin`, {{key:Enter}}, sonra gösterilen ayarlarla temizlemek için yeniden {{key:Enter}}, ya da önce birini değiştirin:

- `Tolerans`: iki koordinatın aynı sayılması için ne kadar yakın olmaları gerektiği (başlangıçta 0,000001; 0 tam olarak aynı demektir).
- `Yoksay`: birbirinden başka türlü aynı olan iki nesne arasında farklı olabilecek özellikler. Değiştirmek için bir ad yazın: `Renk`, `KAtman`, `ÇTipi`, `çÖlçek`, `ÇKalınlığı`, `KaLınlık`, `Saydamlık`, ya da `Hiçbiri` / `Tümü`. Bitince {{key:Enter}}.
- `Üst üste`: açık ya da kapalı. Açıkken, tek bir düz çizgi üzerindeki üst üste binen çizgiler tek bir çizgi olur (bir başka çizginin içindeki bir çizgi basitçe silinir), ve tek bir daire üzerindeki üst üste binen yaylar tek bir yay olur; tam bir tur yapan yaylar bir daire olur ve bir dairenin üzerindeki bir yay silinir.
- `Uçlar`: açık ya da kapalı. Açıkken, tek bir düz çizgi üzerindeki çizgiler ve tek bir daire üzerindeki yaylar yalnızca uçtan uca değen, tek bir parça olur.

Her nesne türü yinelenenler için denetlenir: iki nesne, geometrileri tolerans içinde aynıysa ve katmanları, renkleri, çizgi tipleri, çizgi tipi ölçekleri, çizgi kalınlıkları, kalınlıkları, saydamlıkları ve yükseklikleri eşleşiyorsa (yoksaydığınız özellikler hariç) yinelenendir. Çizgiler ve açık çoklu çizgiler ayrıca ters yönde çizildiklerinde de eşleşir. Çizim sırasındaki ilk nesne kalır ve kendi özelliklerini korur. Komut, kaç nesne denetlediğini ve neyi sildiğini bildirir: yinelenenler, birleştirilen üst üste binen parçalar, uçtan uca birleştirilen parçalar. Tek bir {{cmd:UNDO}} hepsini geri alır. Ayarlar, çizim penceresini kapattığınıza kadar geçerli kalır.

Dokunmaz: kilitli katmanlardaki nesneler ve gizli nesneler. Yüksekliği (Z) olan çizgileri birleştirmez (bunların tam yinelenenleri yine gider) ve bir çoklu çizginin içindeki parçalara (incelmezler), bir çoklu çizginin parçasının üzerindeki bir çizgiye ve ters yönde çizilmiş kapalı bir çoklu çizgiye dokunmaz.

### DRAWORDER

Hangi nesnelerin önde çizildiğini değiştirir. `Çizim sırasını değiştirilecek nesneleri seçin`, {{key:Enter}}, sonra `Nesnelerin üstünde`, `Nesnelerin altında`, `Ön` ya da `Arka` ({{key:Enter}} = `Arka`). `Nesnelerin üstünde` ve `Nesnelerin altında`, referans nesneleri ister: seçim, onların en önde olanının hemen önüne ya da en arkada olanının hemen arkasına gider. Seçili nesneler kendi aralarındaki sırayı korur. Tek bir geri al adımı. Sıra, DWG ve DXF'te çizimle birlikte kaydedilir; nesnelerin yazıldığı sıradır.

Ekranda CadCraft, dolu alanları (katı taramalar, geniş çoklu çizgiler, maskeler) önce, çizgileri sonra ve metni en son çizer; böylece metin her zaman bir dolgunun üzerinden okunur; çizim sırası dolu nesneler ve resimler arasında görünür. Dosyayı açan diğer programlar, her nesneyi kaydedilmiş sırayla çizer.

### TEXTTOFRONT

Açık alandaki diğer her şeyin önüne metin, ölçülendirme ve belirtme çizgilerini getirir: `Metin`, `Ölçülendirmeler`, `Belirtme çizgileri` ya da `Tümü` ({{key:Enter}} = `Tümü`). Tek bir geri al adımı. Hiçbiri yoksa ya da zaten en öndeyse bunu söyler.

### HATCHTOBACK

Açık alandaki her taramayı diğer her şeyin arkasına gönderir; böylece dolgular kaydedilmiş dosyada çizgileri ve metni kapatmaz. Soru yoktur. Tek bir geri al adımı.

### ISOLATEOBJECTS

Takma ad: `ISOLATE`. Yalnızca seçili nesneleri gösterir: açık alandaki diğer her şey {{cmd:UNISOLATEOBJECTS}}'e kadar görüş dışı kalır. {{cmd:LAYISO}}'dan farklı olarak seçtiğiniz nesneler üzerinde çalışır, katmanları ne olursa olsun, ve hiçbir katmanı değiştirmez. Gizli nesneler çizilmez, seçilmez, yakalanmaz, yakınlaştırılmaz ve çıktısı alınmaz; `TÜMÜ` alan komutlar onları atlar. Nesneler izole edilmişken çizdikleriniz her zamanki gibi gösterilir.

Bu yalnızca oturum içindir: çizimle birlikte hiçbir şey kaydedilmez, bu bir geri al adımı değildir ve çizimi yeniden açmak her şeyi gösterir. Nesneler gizliyken durum çubuğu sayılarıyla birlikte bir düğme gösterir; onları yeniden göstermek için buna tıklayın.

### HIDEOBJECTS

Seçili nesneleri {{cmd:UNISOLATEOBJECTS}}'e kadar gizler. {{cmd:ISOLATEOBJECTS}} ile aynı kurallar: yalnızca oturum için, kaydedilmez, bir geri al adımı değildir.

### UNISOLATEOBJECTS

Takma adlar: `UNISOLATE`, `UNHIDE`. {{cmd:ISOLATEOBJECTS}} ya da {{cmd:HIDEOBJECTS}} ile gizlenen her nesneyi yeniden gösterir ve kaçının geri geldiğini söyler.

### LAYLOCKFADE

Kilitli katmanlardaki nesnelerin nasıl görüneceğini ve bir tıklamanın onlara ulaşıp ulaşmayacağını ayarlar. Geçerli durumu söyler, sonra şunları alır:

- 0 ile 90 arasında bir sayı: yüzde olarak soluklaşma miktarı (başlangıçta 50). 0 soluklaşmayı kapatır.
- `AÇIK` ya da `KAPALI`: soluklaşmayı aç ya da kapat, miktarı koruyarak.
- `Seç`, sonra `Evet` ya da `Hayır`: hiçbir komut çalışmazken bir tıklama kilitli katmanlardaki nesneleri seçebilir mi? `Hayır` (varsayılan): hiç seçilemezler. `Evet`: bir tıklama ya da pencere onları seçer, böylece {{ui:Özellikler}} gösterebilir; yine de değiştirilemezler ve bir komutun kendi `Nesneleri seçin` isteminde hiçbir zaman alınmazlar.

Nesne yakalamaları kilitli katmanlardaki nesneleri her iki durumda da bulur. Çıktılar asla soluklaştırılmaz. İki ayar da çizime değil, sizindir; ayrıca {{ui:Ayarlar}} içinde {{ui:Kilitli katmanlar}} altında da bulunur.

### BURST

Blok başvurularını patlatır ve özniteliklerinin söylediklerini korur. `Patlatılacak blok başvurularını seçin`, {{key:Enter}}: her başvuru bloğun nesneleriyle değiştirilir ve her görünür özniteliğin değeri, o özniteliğin kendi katmanında düz bir metin olur (0 katmanındaki bir öznitelik başvurunun katmanına düşer, bloğun 0 katmanındaki diğer nesneleri gibi). Görünmez öznitelikler atılır. Bloğun içindeki bir blok, bir blok başvurusu olarak kalır. Tek bir geri al adımı; patlatılan başvuruları ve metne dönüşen öznitelik değerlerini bildirir.

Bağlı bir çizimi adıyla reddeder (önce bağlayın ya da {{cmd:NCOPY}} ile kopyalayın) ve seçili diğer nesnelere dokunmaz. Blok başvuruları için {{cmd:EXPLODE}} aynı nesneleri verir; {{cmd:BURST}} yalnızca blok başvurularını alır ve öznitelik metnini sayar.

### TXT2MTXT

Takma ad: `T2M`. Tek satırlık metinleri tek bir paragraf metninde birleştirir. `Birleştirilecek tek satırlık metni seçin`, {{key:Enter}}, sonra `Paragraf` (satırlar birbirine eklenir ve en geniş satırın genişliğinde sarılır) ya da `Satırlar` (her metin kendi satırı olarak kalır); {{key:Enter}} en son kullanılanı alır. Satırlar yukarıdan aşağıya, sonra soldan sağa sıralanır, en üstteki metnin yönü boyunca. Paragraf, en üstteki metnin sol üst köşesinden asılır ve onun yüksekliğini, dönmesini, stilini, katmanını ve rengini alır. Tek bir geri al adımı.

Zaten paragraf metni olan metinler, boş metinler ve seçimdeki diğer nesneler olduğu gibi kalır ve komut bunların sayısını söyler.

### NCOPY

Bir blok başvurusundan ya da bağlı bir çizimden nesneleri, hiçbir şeyi patlatmadan çizime kopyalar. `Bir blok başvurusunun ya da bağlı bir çizimin içinde bir nesne seçin`: seçtiğiniz yere en yakın nesne, göründüğü yerde kopyalanır, kaç blok derinlikte olursa olsun; daha fazla seçin, sonra {{key:Enter}}. Sonra `Kopyaları taşımak için temel nokta`: {{key:Enter}} onları yerinde bırakır ya da bir temel nokta ve ikinci bir nokta verin. Tüm komut tek bir geri al adımıdır.

Bir kopya, göründüğü katmanı alır: bir blok içindeki 0 katmanındaki bir nesne, içinde olduğu başvurunun katmanına düşer ve ByBlock rengi o başvurunun rengi olur. Bağlı bir çizimden, `Plan|Walls` katmanı `Plan$0$Walls` olur (bağlantının verdiği ad), kopyalanan katmanın rengi, çizgi tipi ve çizgi kalınlığıyla. Bir özniteliğin değeri metin olarak kopyalanır. Kilitli katmanlardaki blok başvuruları seçilemez.

### FLATTEN

Seçili nesnelerin yüksekliğini (Z) ve kalınlığını 0 yapar. `Düzleştirilecek nesneleri seçin`, {{key:Enter}}. Seçimin kullandığı blok tanımlarının içindeki nesneleri de düzleştirir (ve onların içindeki blokları), böylece o bloklara yapılan her başvuru değişir; bağlı çizimler olduğu gibi bırakılır. Tek bir geri al adımı; kaç nesnenin değiştiğini bildirir ve hiçbirinde yükseklik ya da kalınlık yoksa bunu söyler.

CadCraft, iki boyutlu bir çizimde üçüncü boyutun neyini tutar: daireler, yaylar, elipsler, noktalar, metin, blok başvuruları, taramalar, belirtme çizgileri ve çoklu çizgilerde bir yükseklik (kotları), bir çizgide her ucunda bir yükseklik ve çizgiler, daireler, yaylar, çoklu çizgiler, noktalar ve metinlerde bir kalınlık; dosyada nasıl varsa. {{cmd:FLATTEN}} tam olarak bunları temizler. Bir 3B sekmesindeki 3B modele, 3B yüzeylere ya da katılara dokunmaz ve dosya açıldığında eğik bir düzlemde çizilmiş bir nesne zaten çizim düzlemine getirilmişti.

### BREAKLINE

Kısaltılmış bir görünüm için kırılma simgesiyle bir çizgi çizer. Geçerli boyutu ve uzantıyı söyler, sonra `Kırılma çizgisinin ilk noktası` (ya da önce değiştirmek için `Boyut` / `Uzantı`), `İkinci nokta` ve `Kırılma simgesinin yeri`: çizgi boyunca tıklayın ya da orta için {{key:Enter}}. Sonuç, geçerli katmanda tek bir çoklu çizgidir: çizgi, her noktanın ötesine uzantı kadar uzanır ve boyutu kadar yüksek ve yarısı kadar uzun Z biçimli bir çizgiyle.

`Boyut` ve `Uzantı` ayarlarınız olarak hatırlanır (boyut başlangıçta ölçülendirme metin yüksekliğinin ve ölçülendirme ölçeğinin iki katıdır; uzantı boyutun yarısıdır). {{key:Enter}} komutu yineler.

### AUDIT

Açık çizimi hasar açısından denetler ve onarır. {{cmd:AUDIT}}, modeldeki, sayfalardaki ve bloklardaki her nesneye ve katman tablosuna bakar ve bulduklarını türlerine göre listeler:

- sonlu olmayan ya da akılsız derecede büyük sayılar;
- boyutu olmayan nesneler: uzunluğu olmayan bir çizgi, yarıçapı olmayan bir daire, tek bir noktası olan bir çoklu çizgi, harfi ya da yüksekliği olmayan metin, sıfır ölçekli bir blok başvurusu;
- çizimde olmayan bir katmandaki nesneler; orada olmayan bir bloğa başvurular; metin ve ölçülendirme stil adları ile çizgi tipi adları çizimde yoksa;
- doğrudan ya da diğer bloklar üzerinden kendi kendini içeren bloklar;
- bir kimliği, bir anahtarı ya da bir dosya tanıtıcısını paylaşan nesneler;
- ölçüldükleri noktaları olmayan ölçülendirmeler ve dış hattı kapalı olmayan sınırları olan taramalar.

Sonra `Düzeltilsin mi? [Evet/Hayır]` sorar. `Hayır` hiçbir şeyi değiştirmez. `Evet` her şeyi tek bir geri al adımında onarır: çizilemeyenler kaldırılır (kötü sayılar, boyutsuz nesneler, eksik blok, bozuk ölçülendirme, kullanılabilir sınırı olmayan bir tarama, bir blok çemberini kapatan başvuru); eksik bir katman oluşturulur; bilinmeyen stil ve çizgi tipi adları varsayılanlara döner; paylaşılan bir anahtar değiştirilir. Kaldırılan nesnelerin ve onarılanların sayısını yazdırır. Aynı bulgular, her birinin kendi {{ui:Onar}} düğmesiyle Sorunlar panelinde de görünür.

Hiçbir şeyi reddetmez, ama yalnızca CadCraft'ın kendisinin çizdiklerini denetler: diğer programlar için tutulan veriler (3B katılar, OLE nesneleri) açılmaz.

### RECOVER

Hasarlı bir DXF ya da DWG açar. {{cmd:RECOVER}} dosyayı ister, okunabileni reddetmek yerine okur, atladığı ya da varsaydığı şeyleri listeler, sonra çizimi {{cmd:AUDIT}}'in `Evet` ile yaptığı gibi denetler ve onarır.

- DXF: bir kod ve değer çiftinin parçası olmayan satırlar, çiftler yeniden hizalanana kadar atlanır; sonu olmayan bir bölüm kapatılır; yarım kalmış bir dosya kesildiği yere kadar okunur; yarım kalmış bir ikili DXF son tam değerine kadar okunur. Bir bölüm, bir blok ya da bir nesne hâlâ okunamazsa, dışarıda bırakılır ve adı verilir ve okuma onun ötesinde devam eder.
- DWG: kontrollerini geçemeyen ya da çözülemeyen nesneler dışarıda bırakılır ve kaybolan bir nesne listesi, nesne verisi taranarak yeniden oluşturulur.

Diskteki dosya değişmez. Kurtarılan çizim kaydedilmemiş olarak açılır: yeni bir adla kaydedin. Hiçbir şeyinin okunamadığı bir dosya, nedeniyle birlikte reddedilir.

### LEGACYTEXT

Eski 8 bitlik Vietnamca yazı tipleriyle yazılmış metni Unicode'a dönüştürür. Kısa adları `TEXTTOUNICODE` ve `VNTEXT`.

Eski Vietnamca çizimler metnini, yalnızca yazı tipinin Vietnamcaya çevirdiği Batı karakterleri olarak tutar: ABC yazı tiplerindeki TCVN3 metni (`.VnTime`, `.VnArial` ve adları `H` ile biten büyük harfli yazı tipleri) ve VNI yazı tiplerindeki VNI metni (`VNI-Times`). CadCraft böyle metni, çizim açılır açılmaz, metin stilinin, nesnenin ya da paragraf metni içindeki bir parçanın yazı tipine göre, okunduğu gibi gösterir; dosya hâlâ eski karakterleri tutar.

{{cmd:LEGACYTEXT}}, her kodlamada kaç metin bulduğunu söyler ve `… Unicode'a dönüştürülsün mü?` diye sorar. `Evet` hepsini yeniden yazar (model, sayfalar, bloklar, öznitelik değerleri ve tanımlar) ve metin stillerine bir Unicode yazı tipi verir (eski yazı tipinin türüne göre Times New Roman, Arial ya da Courier New), tek bir geri al adımında. Paragraf metni içindeki biçimlendirme korunur.

Hiçbir metin bilinen bir yazı tipi kullanmıyorsa (yazı tipi adını kaybetmiş bir stil), `Seçili metinleri şöyle oku [Tcvn3/Vni/Yok]` ister: kodlamayı seçin ve metinleri seçin. Zaten Unicode olan metinler olduğu gibi kalır. Ölçülendirme metni geçersiz kılmaları ve çoklu belirtme çizgisi metni dönüştürülmez.
