---
title: Komut başvurusu
summary: CadCraft çizim uygulamasındaki her komut; takma adları, sorduğu sorular, seçenekleri ve varsayılanları ile.
keywords: komutlar, takma adlar, komut listesi, alan, çevre, measuregeom, çizgi, pline, daire, yay, kırp, ofset, dimlinear, blok, ekle, düzen, çıktı, yakınlaştır, yardım, copyclip, cutclip, pasteclip, pasteorig, copybase, çoğalt, selectall
from: 979ffe3b
---

Bir komut adı ya da takma adı yazın ve {{key:Enter}} ya da {{key:Space}} tuşuna basın. Büyük-küçük harf farketmez; baştaki `_`, `-`, `.` ya da `'` yok sayılır. Komut satırı geçmişinde her komutun kısa bir listesini yazdırmak için `HELP` (ya da `?`) yazın; bu yardımı açmak için {{key:F1}} tuşuna basın.

İstemleri nasıl okuyacağınız: seçenekler köşeli parantez içindedir ve büyük harflerini yazarak birini seçersiniz (`D` Çap için). Varsayılan açılı parantez içindedir; kabul etmek için {{key:Enter}} tuşuna basın. Bir nokta istendiğinde, tıklayabilir ya da [Koordinat ve uzaklık girişi](topic:coordinate-entry) bölümündeki biçimlerden herhangi birini yazabilirsiniz. Bir uzaklık istendiğinde bir sayı yazabilir ya da iki nokta tıklayabilirsiniz.

Bir nokta ya da nesne gerektiren yerde varsayılanı olmadan {{key:Enter}} tuşuna basmak komutu bitirir. {{key:Esc}} onu iptal eder. Bir komutun yaptığı her şey tek bir geri al adımıdır.

## Çiz

### LINE

Takma ad: `L`. Düz parçalar, her biri kendi nesnesi.

- `İlk noktayı belirtin` (Enter: verdiğiniz son noktadan başlar)
- `Sonraki noktayı belirtin [Geri al (U)]`, tekrarlanır. İki parçadan sonra: `[Geri al (U)/Kapat (C)]`.
- `U` son parçayı geri alır, `C` ilk noktaya kapatıp biter. Enter bitirir.

### PLINE

Takma ad: `PL`. Doğru ve yay parçalarından oluşan tek bir çoklu çizgi.

- `Başlangıç noktasını belirtin`
- `Sonraki noktayı belirtin [Yay (A)/Kapat (C)/Geri al (U)]` (iki parça olduğunda Kapat)
- `A` yaylara geçer: `Yayın bitiş noktasını belirtin [Doğru (L)/Kapat (C)/Geri al (U)]`. Her yay, önceki parçaya teğet devam eder. `L` doğrulara döner, `CL` yayla kapatır.
- Enter bitirir; çoklu çizgi açık kalır.

### CIRCLE

Takma ad: `C`.

- `Daire için merkez noktasını belirtin [3P/2P/Ttr (tan tan radius)]`
- `Dairenin yarıçapını belirtin [Çap (D)] <son yarıçap>`; `D` `Dairenin çapını belirtin` ister.
- `2P`: bir çapın iki ucu. `3P`: dairenin üzerinde üç nokta.
- `T` (ayrıca `TTR` komutu ve {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Daire: Tan, Tan, Radius}}): `İlk teğet için nesne üzerinde bir nokta belirtin`, sonra ikincisi, sonra yarıçap (Enter: sonuncusu). Daire iki nesneye de (doğrular, yaylar, daireler, çoklu çizgi parçaları, bloğun içindekiler dahil) değer; uyanlar arasından seçtiğiniz noktalara en yakın olanı. Hiçbiri uymazsa "Daire yok" yazar.
- `TTT` (ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Daire: Tan, Tan, Tan}}): üç nesne; üçüne de değen daire, seçtiğiniz noktalara en yakın olanı (üç doğru, nereye tıkladığınıza bağlı olarak iç ya da dış bir daire verir).

### ARC

Takma ad: `A`.

- `Yayın başlangıç noktasını belirtin [Merkez (C)]`, `Yayın ikinci noktasını belirtin`, `Yayın bitiş noktasını belirtin`: üç noktadan geçen bir yay.
- `C`: `Yayın merkez noktasını belirtin`, `Yayın başlangıç noktasını belirtin`, `Yayın bitiş noktasını belirtin`. Yay başlangıçtan bitişe saat yönünün tersine gider.

### RECTANG

Takma ad: `REC`, `RECTANGLE`. Kapalı bir çoklu çizgi.

- `İlk köşe noktasını belirtin`, `Diğer köşe noktasını belirtin`. İkinci köşe için `@genişlik,yükseklik` yazın.

### POLYGON

Takma ad: `POL`. Kapalı bir çoklu çizgi olarak düzenli bir çokgen.

- `Kenar sayısını girin <4>` (3 ile 1024 arası)
- `Çokgenin merkezini belirtin`
- `Bir seçenek girin [Daire içine yazılı (I)/Daire dışına çizilmiş (C)] <I>`
- `Dairenin yarıçapını belirtin`: bir nokta tıklayın ya da yazın; uzaklığı boyutu, yönü çokgenin dönüşünü belirler.

### ELLIPSE

Takma ad: `EL`.

- `Elipsin eksen uç noktasını belirtin [Merkez (C)]`, `Eksenin diğer uç noktasını belirtin`, `Diğer eksene uzaklığı belirtin`
- `C`: `Elipsin merkezini belirtin`, `Eksenin uç noktasını belirtin`, sonra diğer eksene uzaklık.
- `I` (`Isocircle`, yalnızca {{cmd:ISODRAFT}} açıkken): merkez, sonra yarıçap ya da `Çap`: bir dairenin geçerli izometrik düzlemde görünen elipsi.

### HATCH

Takma ad: `H`, `BH`, `BHATCH`; ya da araç çubuğunda {{ui:Taralama}}. Önce geçerli deseni, ölçeği ve açıyı yazdırır.

- `İç noktayı seçin [Nesne seç (S)/Desen (P)/Ölçek (SC)/Açı (A)]`, tekrarlanır (alan oluştuktan sonra `Geri al (U)`): her tıklama, etrafındaki kapalı alanı ekler; içindeki kapalı şekiller ada olur. Enter, hepsinden tek bir taralama yapar.
- `S`: `Kapalı nesneleri seçin` (kapalı çoklu çizgiler, daireler, kapalı elipsler).
- `P`: `Bir desen adı, SOLID ya da liste için ? girin <geçerli>`. `SC`: `Desen ölçeğini belirtin`. `A`: `Desen açısını belirtin`.
- `G` (Geçiş): dolgu bir desen yerine bir geçiş olur. Soruları için {{cmd:GRADIENT}} bölümüne bakın.

Bkz. [Taralama ve alan dolguları](topic:hatch).

### GRADIENT

Takma ad: `GD`. Bir alanı bir ya da iki renkten oluşan bir geçişle doldurur. Önce geçişi sorar, sonra {{cmd:HATCH}} gibi devam eder (`İç noktayı belirtin`, kapalı nesneler için `S`, bitirmek için {{key:Enter}}).

- `Bir geçiş seçeneği girin [Tür/Tek renk/İki renk/Açı/Ortalı/Çıkış] <Ç>`, tekrarlanır; her seferinde geçişin şu anki halini yazdırır.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ya da bunlardan biri ters çevrilmiş (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). İlk harfler yeterlidir.
- `O`: tek renk, sonra 0 ile 1 arasında tonu (0 siyaha karartır, 0,5 rengin kendisidir, 1 beyaza açar). `TW`: ilk ve ikinci renk. Bir renk 1 ile 255 arasında bir sayıdır, `255,128,0` gibi üç sayıdır ya da `#rrggbb`.
- `A`: geçişin çalıştığı açı. `C`: ortalı Evet ya da Hayır (Hayır, geçişin ortasını bir yana taşır).
- Bilmediği bir rengi ya da türü, ve 0 ile 1 dışındaki bir tonu reddeder.

{{cmd:HATCHEDIT}} `G` ve Özellikler (Geçiş) bir geçişi sonradan değiştirir ya da herhangi bir taralamayı bir geçişe çevirir. Geçiş ekranda çizilir ve basılır. DWG 2004 ve sonrası onu gerçek bir geçiş taralaması olarak tutar; DXF 2000 ve DWG 2000 onu CadCraft için tutar, diğer programlar ilk renkte katı bir dolgu görür.

### HATCHGENERATEBOUNDARY

Takma ad: `HGB`. Sınırını kaybetmiş bir taralamadan sınırı yeniden yapar. `Taramaları seçin` (ya da önce seçin), sonra `Her taramayı yeni sınırına bağlayın, taralama onu izlesin mi? [Evet/Hayır] <Evet>`.

- Taramanın her döngüsü, taramanın katmanında kapalı bir çoklu çizgi olur; yeni çoklu çizgiler seçili bırakılır. Eğri bir kenar, taramanın tuttuğu kısa düz parçalar olarak geri gelir.
- Evet ile taralama, yeni sınırını izler; {{cmd:HATCH}} ile yapılmış bir taralama gibi. Tek bir geri al adımı.
- Hiçbir taralama seçilmediğinde bunu söyler.

### POINT

Takma ad: `PO`; ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Nokta}}. Her tıklamada bir nokta nesnesi, Enter'a kadar.

- `Bir nokta belirtin`

### XLINE

Takma ad: `XL`; ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Yapı çizgisi}}. İki yönde de sonsuz yapı çizgileri. Bkz. [Yapı çizgileri ve ışınlar](topic:construction-lines).

- `Bir nokta belirtin [Yatay (H)/Dikey (V)/Açı (A)/İkiye böl (B)/Ofset (O)]`, sonra her çizgi için `Geçen noktayı belirtin`, Enter'a kadar.
- `A`: `Yapı çizgisinin açısını girin [Referans] <0>`; `R` önce `Bir doğru nesnesi seçin` ister.
- `B`: `Açının köşe noktasını belirtin`, `Açının başlangıç noktasını belirtin`, sonra her çizgi için `Açının bitiş noktasını belirtin`.
- `O`: `Ofset uzaklığını belirtin [Geçen (T)] <Geçen>`, sonra her çizgi için `Bir doğru nesnesi seçin` ve `Ofset yönünü belirtin` (ya da `Geçen noktayı belirtin`).

### RAY

Takma ad yok; ya da {{ui:Çiz}} › {{ui:Daha fazla}} › {{ui:Işın}}. `Başlangıç noktasını belirtin`, sonra her ışın için `Geçen noktayı belirtin`, Enter'a kadar.

### TEXT

Takma ad: `DT`, `DTEXT`; ya da araç çubuğunda {{ui:Metin}}. Tek satırlık metin; her satır kendi nesnesidir.

- `Metnin başlangıç noktasını belirtin [Hizala (J)]`
- `J`: `Bir seçenek girin [Sol/Orta/Sağ/Ortada/TL/MC] <L>`, sonra `Metnin yerleştirme noktasını belirtin`
- `Yükseklik belirtin <geçerli metin yüksekliği>`
- `Metnin döndürme açısını belirtin <0>`
- `Metni girin`, tekrarlanır: her Enter altındaki yeni satırı başlatır. Boş bir satırda Enter bitirir. Burada {{key:Space}} bir boşluk yazar.

### DIVIDE

Takma ad: `DIV`. {{cmd:DIVIDE}}, bir doğru, yay, daire, çoklu çizgi, spline ya da elipse onu eşit parçalara bölen işaretler koyar. Nesneyi seçin, sonra parça sayısını verin (2 ile 32767 arası). Açık bir nesne parça sayısından bir eksik işaret alır; kapalı bir nesne başlangıcında da bir işaret alır. Nesnenin kendisi kesilmez. İşaretler noktalardır; `Blok` bunun yerine bu çizimden bir blok ister ve nesneyi izleyip döndürmesini de sorar. Spline ve elipslerdeki uzunluklar kısa kirişler boyunca ölçülür. Metin, taramalar ve uzunluğu olmayan öteki nesneleri reddeder.

### MEASURE

Takma ad: `ME`. {{cmd:MEASURE}}, bir doğru, yay, daire, çoklu çizgi, spline ya da elips boyunca verilen her uzunlukta bir işaret koyar; seçtiğiniz uca en yakın uçtan başlayarak (kapalı bir nesnede: başlangıcından). Uzunluğu yazarak ya da iki noktayla verin. Açık bir nesnenin uzak ucuna işaret konmaz. `Blok`, her işarette nokta yerine bir blok yerleştirir. Uzunluk 0 ise, nesneden uzunsa ya da 32767'den fazla işaret yapacaksa reddeder.

### BOUNDARY

Takma ad: `BO`, `BPOLY`. {{cmd:BOUNDARY}}, seçtiğiniz noktanın bulunduğu alanın etrafında, ekranda onu sınırlayan doğrulardan, yaylardan, dairelerden, çoklu çizgilerden ve eğrilerden kapalı bir çoklu çizgi yapar. Bir yay ya da daire üzerinde olan parçalar yay parçası olarak geri gelir; elips ve spline parçaları kısa düz parçalar olarak geri gelir. `Adalar` açıkken (başlangıç ayarı), içindeki her kapalı alan da kendi çoklu çizgisini alır. Nokta seçmeye devam edin; Enter bitirir. Alanı sınırlayan nesneler olduğu gibi kalır. Noktayı içine alan kapalı bir alan yoksa bunu söyler.

### BLEND

{{cmd:BLEND}}, iki açık eğrinin uçları arasında bir spline çizer. Birleştirilecek uca yakın her eğriyi seçin. `CONtinuity` (Süreklilik) `Tangent` (Teğet; spline her iki eğriyi de teğet izleyerek ayrılır ve varır) ya da `Smooth` (Pürüzsüz; uçlarda eğrilerin büküldüğü biçimde de bükülür) seçer; seçim oturum için tutulur. İki eğri değişmez. Kapalı nesneleri ve zaten birbirine değen iki ucu reddeder.

### REGION

Takma ad: `REG`. {{cmd:REGION}}, kapalı nesneleri bölgelere çevirir: birleştirilebilen, kesilebilen ve ölçülebilen düz alanlar. Daireleri, kapalı çoklu çizgileri, kapalı elipsleri ya da kapalı spline'ları ya da uçtan uca bir döngü kapatan doğruları, yayları ve açık çoklu çizgileri seçin; her döngü bir bölge olur ve kaynaklandığı nesnelerin yerini alır. Yaylar yay olarak kalır; elips ve spline'lar kısa düz parçalar olur. Kapalı olmayan ve hiçbir döngü kapatmayan şey olduğu gibi kalır ve kaç tane olduğunu söyler. Çizimde bir bölge, adsız bir grup olarak tutulan bir ya da daha fazla kapalı çoklu çizgidir; böylece bir tıklama bütün bölgeyi seçer ve bir kopya kendi başına bir bölge olur; dosyayı açan diğer programlar kapalı çoklu çizgiler görür.

Çizimde bölgeler varken, 2B sekmedeki {{cmd:UNION}}, {{cmd:SUBTRACT}} ve {{cmd:INTERSECT}} bölgelerle çalışır: `UNION` seçili bölgeleri tek birine birleştirir (birbirinden ayrı bölgeler birden çok dış hatlı tek bir bölge olur); `SUBTRACT` önce çıkarılacak bölgeleri, sonra çıkarılacak olanları ister (bir delik bölgenin parçası olarak kalır); `INTERSECT` hepsinin ortak alanını tutar. Her biri sonucun alanını söyler ve tek bir geri al adımıdır. Geriye bir şey kalmayacaksa ya da ortak bir şey yoksa reddederler. 3B sekmede ve bölge içermeyen bir çizimde aynı komutlar, daha önce olduğu gibi katılar üzerinde çalışır.

## Düzenle

### MTEXT

Takma ad: `MT`, `T`; ya da araç çubuğunda {{ui:Paragraf}}. Bir genişliğe kadar karan, yerinde yazılan paragraf metni.

- `İlk köşeyi belirtin`
- `Karşı köşeyi belirtin [Yükseklik (H)/Hizala (J)/Satır aralığı (L)/Döndürme (R)/Genişlik (W)]`: iki köşe arasındaki genişlik, metnin kaydığı yerdir. `H` `Yüksekliği belirtin` ister, `J` `Hizalamayı girin [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Satır aralığı çarpanını girin (0,25 ile 4)`, `R` `Döndürme açısını belirtin`, `W` `Genişliği belirtin (kaydırma yok için 0)` ister ve ikinci köşeyi atlar.
- Sonra çizimde bir kutu açılır: yazın, yeni bir paragraf için {{key:Enter}}, bitirmek için {{key:Mod+Enter}} ya da dışarı tıklayın, iptal için {{key:Esc}}. Çubuğu yüksekliği, satır aralığını, genişliği ve hizalamayı ayarlar. Bkz. [Metin ve etiket ekleyin](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Takma ad: `ED`, `DDEDIT`; ya da bir metne çift tıklayın. `Düzenlenecek bir metni seçin`, Enter'a kadar tekrarlanır: her biri aynı kutuda açılır. Seçili ya da çift tıklanmış bir metinle başlatılırsa yalnızca onu düzenler ve biter.

### ERASE

Takma ad: `E`, `DELETE`; ya da nesneler seçiliyken {{key:Delete}} tuşuna basın.

- `Nesneleri seçin` (nesneler zaten seçiliyse atlanır)

### MOVE

Takma ad: `M`.

- `Nesneleri seçin`
- `Temel noktayı belirtin [Yer değiştirme (D)]`, `İkinci noktayı belirtin`
- `D`: `Yer değiştirmeyi belirtin`, `dx,dy` biçiminde yazılır.

### COPY

Takma ad: `CO`, `CP`. Verdiğiniz noktalar kadar kopyalar.

`İkinci nokta` isteminde `Dizi` yazmak bir satırı tek seferde yapar: öğe sayısını verin (orijinal bir sayılır), sonra ilk kopyanın gideceği noktayı; diğerleri aynı aralıkla izler. `Sığdır` bunun yerine o noktayı son kopyanın yeri yapar, aradakiler eşit dağılır.

- `Nesneleri seçin`
- `Temel noktayı belirtin [Yer değiştirme (D)]`
- `İkinci noktayı belirtin [Geri al (U)]`, Enter'a kadar tekrarlanır. `U` son kopyayı geri alır.

### ROTATE

Takma ad: `RO`.

- `Nesneleri seçin`, `Temel noktayı belirtin`
- `Döndürme açısını belirtin <son açı>`: derece cinsinden, saat yönünün tersi pozitiftir; ya da ona doğru döndürmek için bir nokta tıklayın.

### SCALE

Takma ad: `SC`.

- `Nesneleri seçin`, `Temel noktayı belirtin`
- `Ölçek çarpanını belirtin`: `0.5` ya da `2` gibi bir çarpan yazın. Tıklanan bir nokta, temel noktadan uzaklığı çarpan olarak verir.

### MIRROR

Takma ad: `MI`.

- `Nesneleri seçin`
- `Ayna doğrusunun ilk noktasını belirtin`, `Ayna doğrusunun ikinci noktasını belirtin`
- `Kaynak nesneler silinsin mi? [Evet/Hayır] <H>`

### ALIGN

Takma ad: `AL`; ya da {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Hizala}}.

- `Nesneleri seçin`
- `İlk kaynak noktasını belirtin`, `İlk hedef noktasını belirtin`
- `İkinci kaynak noktasını belirtin (devam için Enter)`, `İkinci hedef noktasını belirtin`
- `Üçüncü kaynak noktasını belirtin (devam için Enter)`, `Üçüncü hedef noktasını belirtin`
- İki çiftle: `Nesneler hizalama noktalarına göre ölçeklensin mi? [Evet/Hayır] <H>`

Bkz. [Nesneleri hizalayın](topic:modify-objects#align-objects).

### ALIGNTO

- `Nesneleri seçin` (ya da seçim), `Hizala [Sol/Orta/Sağ/Üst/Ortası/Alt] <Sol>`, `Hedef [Seçim/İlk/Son/Nokta] <Seçim>`; `N` (Nokta) noktayı ister. Seçim kalır.

### DISTRIBUTE

- `Nesneleri seçin` (en az üç), `Dağıt [Yatay/Dikey] <Yatay>`, `Eşit aralıklarla yerleştir [Merkezler/Boşluklar] <Boşluklar>`. Dıştaki iki nesne yerinde kalır; seçim kalır.

### ALIGNPANEL

Takma ad: `ALP`; ya da {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Hizala ve dağıt}}. ALIGNTO ve DISTRIBUTE'ı tıklamalarla çalıştıran paneli açar.

### LASER

Takma ad: `LASERCUT`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Lazer…}}. Çizimin üstünde Lazer panelini açar: her katmanın ne yaptığı (kes, çizgi bırak, gravürle, doldur, resim), önizleme, kaydedilecek GRBL G-kodu ve Web Serial üzerinden çerçeve alma ve gönderme. Bkz. [Çizimi bir lazere gönderin](topic:laser-cutting).

### STRETCH

Takma ad: `S`; ya da {{ui:Gerdir}}. `Gerdirilecek nesneleri seçin`: uçların üzerine kesişen pencereler sürükleyin (ya da `C` yazın) ve taşıyın. `Temel noktayı belirtin [Yer değiştirme (D)]`, `İkinci noktayı belirtin`. Pencerelerin içindeki noktalar hareket eder: doğru uçları, çoklu çizgi köşeleri (yay parçaları yüksekliklerini korur), ölçülendirme noktaları; daireler, elipsler, metin, noktalar ve bloklar merkezleri ya da ekleme noktaları içindeyse bütün olarak hareket eder. Komuttan önce yapılmış bir seçim, onu yaratan kesişen pencereleri (ve kement seçimlerini) korur; böylece aynı biçimde gerdirirler. Pencere olmadan nesneler bütün olarak hareket eder.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Takma ad: `AR`; ya da {{ui:Dizi}}. `Nesneleri seçin`, sonra `Dizi türünü girin [Dikdörtgen/Kutupsal] <Dikdörtgen>` (yalnızca ARRAY).

- Dikdörtgen, nesnelerin boyutunun 1,5 katı aralıklarla, 4 sütun × 3 satır olarak başlar ve bir önizleme gösterilir. `Bir seçenek girin [Sayı (COU)/Aralık (S)/Sütunlar (COL)/Satırlar (R)/Çıkış (X)] <Ç>`: `COU` sütunları ve satırları, `S` sütunlar ve satırlar arasındaki mesafeleri ister (negatif sol ya da aşağı gider), `COL` ve `R` her yönü ayrı ayrı ister.
- Kutupsal, `Dizinin merkez noktasını belirtin` ister; 6 öğeyle başlar, tamamı çevresinde, döndürülmüş. `Bir seçenek girin [Öğeler/Doldurma açısı/Öğeleri döndür/Çıkış] <Ç>`: `I` öğeler, `F` doldurulacak açı (+ saat yönünün tersi, − saat yönü), `ROT` Evet ya da Hayır.
- {{key:Enter}} (Çıkış) kopyaları düz nesneler olarak oluşturur. Tek bir geri al adımı.
- `AS` (İlişkisel) düz kopyalar ile sonradan {{cmd:ARRAYEDIT}} ile değiştirilebilen bir dizi arasında geçiş yapar: tutamaçlarıyla ya da Özelliklerde. Seçim hatırlanır ({{cmd:ARRAYASSOCIATIVITY}}); başlangıçta düz kopyalar ile başlar.

### ARRAYPATH

Bir eğri boyunca kopyalar. `Nesneleri seçin`, sonra `Yol eğrisini seçin`: bir doğru, yay, daire, elips, çoklu çizgi ya da spline (dizilen nesnelerden biri olmayan). Yol, nesnelere daha yakın olan ucundan başlar ve ilk öğe nesnelerin şu anki yeridir.

- `Bir seçenek girin [Yöntem (M)/Öğeler (I)/Aralık (SP)/Hizala (AL)/İlişkisel (AS)/Çıkış (X)] <Ç>`, önizlemeyle. `M`: `Böl` öğeleri yolun tamamına eşit yayar, `Ölç` her belirli uzunlukta bir tane koyar. `I`: öğe sayısı (Ölç ile 0 sığabildiği kadar demektir; yolun ötesindeki bir sayı sığanla sınırlanır). `SP`: yol boyunca öğeler arası mesafe (Ölç'e geçer). `AL`: Evet her öğeyi yolu izleyecek şekilde döndürür, Hayır dik tutar.
- `AS` {{cmd:ARRAY}}'deki gibidir. Açıkken dizi yolun şeklinin kendi kopyasını tutar: sonradan yol eğrisini değiştirmek öğeleri taşımaz.
- Yol bir eğri değilse ve bir öğe varsa reddeder.

### ARRAYEDIT

İlişkisel ile yapılmış bir diziyi değiştirir. `Diziyi seçin` (ya da önce seçin). Şu anki durumunu yazdırır, sonra {{key:Enter}}'a kadar sorar:

- Dikdörtgen: `COL` sütunlar ve aralıkları, `R` satırlar ve aralıkları, `A` sütunların çalıştığı açı.
- Kutupsal: `I` öğeler, `F` doldurma açısı, `ROT` öğeleri döndür Evet ya da Hayır.
- Yol: `M` Böl ya da Ölç, `I` öğeler, `SP` aralık, `AL` yola hizala.
- `S` (Kaynak) dizinin tekrarladığı nesneleri, blok düzenleyicisi gibi kendi başlarına açar. Orada çizin ve düzenleyin; {{cmd:ARRAYCLOSE}} kaydeder ya da atar ve her öğe izler.
- `REP` (Değiştir): `Değiştirme nesnelerini seçin`, `Değiştirme nesnelerinin temel noktasını belirtin`, sonra değiştirilecek öğelere tıklayın ve {{key:Enter}}. Bu öğeler yerine değiştirme nesnesini gösterir; değiştirme nesneleri çizimden çıkar ve dizinin içinde yaşar. `RES` (Sıfırla) kaynak nesneleri her öğede yeniden gösterir.
- Her değişiklik tek bir geri al adımıdır. Düz kopyaları, tek bir blok başvurusunu ve kilitli bir katmandaki diziyi reddeder.

Aynı sayılar Özelliklerde Dizi altındadır; dizinin tutamaçları vardır: temel noktası onu taşır, ikinci öğedeki tutamaç aralığı belirler, son öğenin ötesindeki tutamaç sayıyı belirler (kutupsal: ikinci öğe kaç öğe olduğunu, son öğe doldurma açısını belirler). {{cmd:EXPLODE}} bir diziyi yeniden düz kopyalara çevirir.

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} Kaynağını bitirir: `Dizinin kaynak nesnelerindeki değişiklikler kaydedilsin mi? [Kaydet/At] <Kaydet>`. Açık bir dizi kaynağı yoksa bunu söyler. {{cmd:BCLOSE}} aynısını yapar.

### ARRAYASSOCIATIVITY

`ARRAYASSOCIATIVITY için yeni değer girin (1 = diziler düzenlenebilir kalır, 0 = düz kopyalar)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ve {{cmd:ARRAYPATH}}'in hangisiyle başlayacağını belirler; onların `AS` seçeneği aynı ayarı değiştirir. Bu tarayıcıda hatırlanır.

### OFFSET

Takma ad: `O`. Doğrular, yaylar, daireler ve çoklu çizgiler.

Bir çoklu çizgi dışa doğru hareket ettiğinde ve düz parçaları bir köşede ayrıldığında, aradaki boşluğun nasıl kapatılacağına {{cmd:OFFSETGAPTYPE}} karar verir.

- `Ofset uzaklığını belirtin [Geçen (T)] <son uzaklık ya da Geçen>`
- `Ofset yapılacak nesneyi seçin`, sonra `Ofset yapılacak tarafta bir nokta belirtin` (ya da Geçen ile `Geçen noktayı belirtin`), Enter'a kadar tekrarlanır.

### OFFSETGAPTYPE

- `Ofset köşe boşlukları: 0 uzat, 1 yuvarla, 2 pah`: {{cmd:OFFSET}}'in bir çoklu çizginin dış köşelerindeki boşlukları nasıl kapattığı. `0` parçaları birleşene kadar uzatır (başlangıç ayarı), `1` eski köşenin etrafında bir yayla birleştirir, `2` düz bir kesimle. İç köşeler ve yay parçaları etkilenmez. Bu oturum için tutulur.

### EXTRIM

{{cmd:EXTRIM}}, bir kenarın bir tarafındaki her şeyi kırpar. Kesici kenarı seçin (bir doğru, yay, daire, çoklu çizgi, elips, spline ya da yapı çizgisi), sonra temizlenecek tarafta bir nokta seçin: o kenarı kesen her doğru, yay, daire, çoklu çizgi ve yapı çizgisi, o taraftaki parçasını kaybeder ve parça kenarda başlar. Tarafı seçerken, gidecek parçalar imleci izler. Kapalı bir kenarda taraflar içi ve dışıdır. Yalnızca kenara değen nesneler ve onu kesen metin, taramalar, spline'lar ve elipsler olduğu gibi bırakılır. Tek bir geri al adımı.

### TRIMEXTENDMODE

- `TRIMEXTENDMODE için yeni değer girin (1 Hızlı, 0 Standart)`: {{cmd:TRIM}} ve {{cmd:EXTEND}}'in nasıl başlayacağı. `1` Hızlı: her nesne bir kesici kenar ya da sınırdır. `0` Standart: önce kenarları sorarlar. LISP'te `(setvar "TRIMEXTENDMODE" 0)` de bunu yapar.

### TRIM

Takma ad: `TR`. Önce `Geçerli ayarlar: Hızlı kip (TRIMEXTENDMODE 1), kenarlar: Uzatma yok, sürüklemek bir yol çizer` yazdırır. Hızlı kipte görünen her nesne bir kesici kenardır ve hiçbir şeyin kesmediği bir nesne silinir; Standart kipte önce `Kesici kenarları seçin (Enter = her nesne)` sorar ve yalnızca onlarda keser.

- `Kırpılacak nesneyi seçin ya da uzatmak için Shift ile seçin [Kesici kenarlar (T)/Çit (F)/Kesişen (C)/Kip (O)/Kenar (E)/Sil (R)/Geri al (U)]`, tekrarlanır: kaldırılacak parçaya tıklayın (imleç üzerinde durduğunda gri ve kesikli görünür), birkaç parçanın üzerinden bir yol sürükleyin (hepsi tek adımda gider) ya da aralarında bir çit için iki boş yere tıklayın. {{key:Shift}} uzatır. `T` kesici kenarları seçer (Standart kip), `F` çit noktalarını ister, `C` iki pencere köşesi (kısmen içindeki parçalar gider), `O` `Bir kırpma kipi seçeneği girin [Hızlı/Standart]` ister, `E` `Örtük bir kenar uzatma kipi girin [Uzat/Uzatma yok]` ister (EDGEMODE), `R` seçtiğiniz nesneleri siler, `U` son seçimi ya da sürüklemeyi geri alır. Enter bitirir. Bkz. [Kırp ve uzat](topic:trim-and-extend).

- Bir taramaya tıklamak onu keser: kesici kenarlar taranmış alanı böler ve tıkladığınız parça alınır (eskiden çizili bir çizgi de kalmaz). Taralama, desenini ya da geçişini korur; sınırına bağlı bir taralama artık bağlı değildir, çünkü artık onu doldurmaz. Kesici kenar taramayı orada bölmüyorsa, tıklama taramanın dışındaysa ya da hiçbir şey kalmayacaksa bunu söyler ({{cmd:ERASE}} kullanın). Sürüklenen bir yol ya da çit taramaları kesmez.

### EXTEND

Takma ad: `EX`. TRIM'in tersi: `Uzatılacak nesneyi seçin ya da kırpmak için Shift ile seçin [Sınır kenarları (B)/Çit (F)/Kesişen (C)/Kip (O)/Kenar (E)/Geri al (U)]`. Bir tıklama, ona en yakın ucu bir sonraki sınıra kadar uzatır; sürüklenen bir yol ya da çit kestiği her nesneyi uzatır; {{key:Shift}} kırpar. `B` sınır kenarlarını seçer (Standart kip). Kip ve Kenar, TRIM ile ortaktır.

### LINKVIEWS

Takma ad: `SYNCVIEWS`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Bölmelerin görünümlerini bağla}}, ya da çizim sekmelerindeki bağlantı simgesi. `Bölmelerin görünümlerini bağla [AÇIK/KAPALI]` (Enter diğer durumu alır): açıkken, etkin bölmedeki bir kaydırma ya da yakınlaştırma aynı türde alanı gösteren her bölmeyi taşır. Bkz. [Ekranı bölün](topic:split-screen).

### OPENIN3D

Takma ad yok; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Modelleme uygulamasında aç}}; 3B modelleme uygulaması devredilen bir çizimi alır. Orada yeni bir sekmede bir DWG olarak açar (hiçbir şey yüklenmez). Tarayıcı sekmeyi engellerse bunu söyler.

### LASSOMODE

`LASSOMODE için yeni değer girin (1 = kement, 0 = dikdörtgen)`: boş bir yerde basılı tutup sürüklemenin ne çizeceği. Ayarlar › CadCraft › Seçmek için sürükleme ile aynıdır. Bkz. [Kement seçimi](topic:lasso-selection).

### FILLET

Takma ad: `F`. Doğrular, yaylar, daireler ve çoklu çizgiler. Önce `Geçerli ayarlar: Kip = TRIM, Yarıçap = 0` yazdırır.

- `İlk nesneyi seçin [Geri al (U)/Çoklu çizgi (P)/Yarıçap (R)/Kırp (T)/Birden çok (M)]`
  - `R` `Köşe yuvarlama yarıçapını belirtin <son>` ister. `T` `Kırpma kipi seçeneğini girin [Kırp/Kırpma]` ister: Kırpma yoksa nesneler olduğu gibi kalır ve yalnızca yay eklenir.
  - `M` komutu {{key:Enter}}'a kadar daha fazla köşe için sürdürür; `U` komutu bırakmadan son köşeyi geri alır.
  - `P` `2B çoklu çizgiyi seçin [Yarıçap (R)]` ister ve iki düz parçanın buluştuğu her köşeyi yuvarlar. Zaten bir yuvarlaması olan köşeler yeni yarıçapla değiştirilir; yarıçap 0 bunları kaldırır. Kenarları yarıçap için çok kısa olan köşeler olduğu gibi bırakılır ve sayılır.
- `İkinci nesneyi seçin ya da köşeye uygulamak için Shift ile seçin [Yarıçap (R)]`. Yarıçap ne olursa olsun keskin bir köşe için tıklarken {{key:Shift}} tutun.

Tuttuğunuz parçanın üzerine her nesneye tıklayın. Birbirine değmeyen iki doğru uzatılır. İki paralel doğru arasına, tıklamanıza en yakın ilk doğrunun ucunda yarım daire konur. Bir daire asla kesilmez. Aynı çoklu çizginin yan yana iki parçası çoklu çizginin içinde yayı alır; bir çoklu çizgi ile başka bir nesne, kesim çoklu çizginin ilk ya da son parçasına denk geldiğinde çalışır.

### CHAMFER

Takma ad: `CHA`. Doğrular ve çoklu çizgilerin düz parçaları. Önce geçerli mesafeleri (ya da uzunluk ve açıyı) yazdırır.

- `İlk doğruyu seçin [Geri al (U)/Çoklu çizgi (P)/Mesafe (D)/Açı (A)/Kırp (T)/yöntEm (E)/Birden çok (M)]`
  - `D` `İlk pah mesafesini belirtin <son>` ve `İkinci pah mesafesini belirtin <birinci>` ister: birinci, seçtiğiniz ilk doğrudan, ikinci öteki doğrudan kesilir.
  - `A` `İlk doğru üzerinde pah uzunluğunu belirtin` ve `İlk doğrudan pah açısını belirtin` ister.
  - `E` (yöntem), sonraki pahın ikisinden hangisini kullanacağını seçer. `T`, `M`, `U` ve `P` {{cmd:FILLET}}'teki gibi çalışır.
- `İkinci doğruyu seçin ya da köşeye uygulamak için Shift ile seçin [Mesafe/Açı/yöntEm]`. Shift+tıklama keskin bir köşe yapar.

Doğrudan uzun bir mesafe reddedilir (`Mesafe çok büyük.`).

### BREAK ve BREAKATPOINT

Takma ad: `BR`. `Nesneyi seçin` (tıkladığınız yer ilk noktadır), `İkinci kırma noktasını belirtin [İlk nokta (F)]`; `F` `İlk kırma noktasını belirtin` ve `İkinci kırma noktasını belirtin` ister. Aradaki parça gider; bir dairede, ilk noktadan saat yönünün tersine. BREAKATPOINT `Kırma noktasını belirtin` ister ve nesneyi orada ikiye böler (daire değil).

### LENGTHEN

Takma ad: `LEN`. `Ölçülecek bir nesne seçin [Fark (DE)/Yüzde (P)/Toplam (T)/Dinamik (DY)]`: bir seçim `Geçerli uzunluk` (ve bir yayın kapsadığı açıyı) yazdırır ve yeniden sorar. `DE` `Delta uzunluğunu girin (negatif kısaltır) [Açı]` ister, `P` `Yüzde uzunluğunu girin` ister, `T` `Toplam uzunluğu belirtin [Açı]` ister, `DY` sürükler. Sonra `Değiştirilecek nesneyi seçin [Geri al (U)]`, tekrarlanır: tıklamaya en yakın uç taşınır. Doğrular, yaylar ve açık çoklu çizgiler.

### JOIN

Takma ad: `J`. `Birleştirilecek nesneleri seçin`. Uçtan uca buluşan doğrular, yaylar ve açık çoklu çizgiler çoklu çizgi olur (zincir kapandığında kapalı); tek bir doğru üzerindeki doğrular tek bir doğru olur; aynı daireden olan yaylar tek bir yay ya da daire olur. Tarihçe kaç nesnenin birleştiğini ve kaçının birleşmediğini söyler.

### MATCHPROP

Takma ad: `MA`, `PAINTER`. `Kaynak nesneyi seçin`, sonra `Hedef nesneleri seçin [Ayarlar]` ve {{key:Enter}}. Katmanı ve rengi kopyalar; aynı türdeki nesneler arasında metin yüksekliğini ve genişliğini, ölçülendirme boyutlarını ya da taralama desenini kopyalar. `S` `Bir özelliği açın ya da kapatın [Renk/Katman/Metin/Ölçülendirme/Taralama]` ister; Enter'a kadar tekrarlanır; seçim oturum için hatırlanır.

### EXPLODE

Takma ad: `X`. Çoklu çizgiler doğrulara ve yaylara, blok başvuruları kendi nesnelerine, ölçülendirmeler doğrulara, ok uçlarına ve metne dönüşür. İlişkisel bir dizi ({{cmd:ARRAYEDIT}}) düz kopyalarına, yani nesnelerinin kopyalarına dönüşür.

- `Nesneleri seçin`

### GROUP

Takma ad: `G`. {{cmd:GROUP}}, seçili nesnelere paylaştıkları bir ad verir. Nesneleri seçin, sonra bir ad yazın (boşluk olmadan; `?` grupları listeler; Enter adsız bir grup yapar) ve adlandırılmış bir grup için isteğe bağlı bir açıklama. Bundan sonra onlardan birine tıklamak ya da grubu içine alan bir pencere, hepsini seçer; böylece birlikte taşınır, kopyalanır ve silinir; her nesne yine kendi nesnesidir. Bir nesne birkaç grupta olabilir. Bütün bir grubun kopyası yeni bir adsız grup olur; bir üyenin tek başına kopyası gruba katılır. Gruplar, yapıldıkları alana (modele ya da bir sayfaya) aittir. DWG ya da DXF olarak kaydettiğinizde ve dosyayı CadCraft'ta yeniden açtığınızda korunurlar; DXF 2000 dosyaları ayrıca diğer programlar için grup nesneleri olarak taşır, ve başka bir programda yapılmış gruplar bir DXF ya da DWG açıldığında okunur.

### UNGROUP

Takma ad yok. {{cmd:UNGROUP}}, grupları söker: grupların nesnelerini seçin (içinde bulundukları her grup sökülür) ya da `Ad` yazıp grubun adını verin. Nesneler çizimde kalır. Tek bir geri al adımı grupları geri getirir.

### GROUPEDIT

{{cmd:GROUPEDIT}} bir grubu değiştirir. Nesnelerinden birini seçin ya da `Ad` ile adını yazın; zaten seçili bir grup olduğu gibi alınır. Sonra: `Ekle` nesneleri (tek tek seçilerek, grup grup değil), `Kaldır` nesneleri, grubu `Yeniden adlandır`, `Açıklamasını` değiştir ya da `Seçilebilir` ayarlayın (bir nesneye tıklamanın grubun tamamını seçip seçmeyeceği). `Çıkış` ya da Enter bitirir. Hiçbir nesnesi kalmayan bir grup yok olur.

### PICKSTYLE

- `Grup seçimi: 0 bir tıklama bir nesneyi seçer, 1 tüm grubu`: `1` (başlangıç ayarı) ile gruplanmış bir nesneye tıklamak ya da pencere açmak, tüm grubu seçer; `0` ile tek tek nesneler, böylece bir üyeyi tek başına düzenleyebilirsiniz. Bu oturum için tutulur.

## Pano

CadCraft'ın kendi panosu: bir çizim içinde, çizimler arasında ve bu tarayıcıdaki CadCraft sekmeleri arasında çalışır. Bkz. [Kopyalayın, yapıştırın ve çoğaltın](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ya da {{ui:Düzenle}} grubunda {{ui:Kopyala}}. Nesneleri, kullandıkları bloklar ve katmanlarla birlikte panoya kopyalar. Nesneler seçili kalır.

- `Kopyalanacak nesneleri seçin` (nesneler zaten seçiliyse atlanır)

### CUTCLIP

{{key:Mod+X}}, ya da {{ui:Daha fazla}} menüsünde {{ui:Kes}}. Nesneleri panoya kopyalar, sonra siler (tek bir geri al adımı).

- `Kesilecek nesneleri seçin` (nesneler zaten seçiliyse atlanır)

### COPYBASE

Nesneleri, seçtiğiniz bir temel noktayla panoya kopyalar; yapıştırma o noktayı yerleştirir.

- `Temel noktayı belirtin`
- `Kopyalanacak nesneleri seçin`

### PASTECLIP

{{key:Mod+V}}, ya da {{ui:Düzenle}} grubunda {{ui:Yapıştır}}. Kopya imleci izler; kapsamının sol alt köşesinden (ya da merkezinden, ya da `COPYBASE` noktasından; bkz. [CadCraft ayarları](topic:settings)) asılı kalır.

- `Ekleme noktasını belirtin`

Yapıştırılan nesneler seçilir. Çizimin aynı adla zaten sahip olduğu bir blok, bu çizimin tanımını korur.

Bir MarkupCraft'ta kopyalanan bir alan, CadCraft'ın kopyaladığından daha yeniyse (ve 6 saatten yeniyse), {{key:Mod+V}} ve `PASTECLIP` bunun yerine o alanı yapıştırır: bkz. `PASTEAREA`.

### PASTEAREA

Takma ad: `PAREA`. {{ui:Daha fazla}} menüsünde {{ui:Kopyalanan alanı yapıştır}}. MarkupCraft'ta {{ui:Alanı kopyala}} ile kopyalanmış bir alanı gerçek boyutunda bir resim olarak yapıştırır. Bkz. [Çizimdeki resimler](topic:pictures).

- `Kopyalanan alanın sol alt köşesini belirtin`
- `Kâğıt boyutunu şu değerle ölçekleyin (1:100 bir sayfa için 100; Noktalar: üzerinde iki nokta ve gerçek uzaklıkları) [Noktalar] <1>` (yalnızca sayfanın bir çizim ölçeği yoksa): bir sayı, kâğıt boyutu için {{key:Enter}}, ya da `N`, sonra `Yapıştırılan alan üzerinde ilk noktayı`, `Yapıştırılan alan üzerinde ikinci noktayı` ve gerçek uzaklıklarını.

### PASTEORIG

{{key:Mod+Shift+V}}, ya da {{ui:Daha fazla}} menüsünde {{ui:Olduğu yere yapıştır}}. Nesnelerin kopyalandığı koordinatlarda yapıştırır. Hiçbir şey sormaz.

### DUPLICATE

Takma ad: `DUP`. {{key:Mod+D}}, ya da {{ui:Daha fazla}} menüsünde {{ui:Çoğalt ve taşı}}. Nesnelerin bir kopyası, bulundukları yerden işaretçiyle birlikte hareket eder; {{key:Esc}} hiçbir şey bırakmaz. Panoyu kullanmaz.

- `Çoğaltılacak nesneleri seçin` (nesneler zaten seçiliyse atlanır)
- `Kopyanın gideceği yeri belirtin (Esc hiçbir şey bırakmaz)`: tıklayın, bir nokta yazın, `@dx,dy` (işaretçinin olduğu yerden), ya da imlece doğru bir uzaklık.

### SELECT

`Nesneleri seçin` sorar (aşağıdaki her seçenekle birlikte) ve seçtiklerinizi, sonraki komut için ya da sonradan `P` için seçili bırakır.

### QSELECT

Takma ad: `QS`. Tarayıcıda {{ui:Hızlı seçim}} iletişim kutusu (bkz. [Nesneleri seçin](topic:select-objects#select-by-a-rule-quick-select)). Onsuz komut satırı `Nesne türünü girin`, `Özelliği girin`, `İşleci girin [=/<>/>/</*/Tümünü seç] <=>` ve `Değeri girin` sorar. Eşleşenler seçim olur.

### SELECTSIMILAR

Takma ad: `SIM`. `Nesneleri seçin [Ayarlar]` (ya da geçerli seçim): aynı türde, aynı katmanda ve renkte her nesneyi seçer (ve blok adı, taralama deseni). `SE` `Bir özelliği açın ya da kapatın [Katman/Renk/Ad/Desen/Yükseklik]` ister ve Enter'a kadar tekrarlanır.

### FIND

Takma ad yok; ya da {{ui:Düzenle}} › {{ui:Daha fazla}} › {{ui:Bul ve değiştir}}. Tarayıcıda {{ui:Bul ve değiştir}} iletişim kutusu (bkz. [Metin ve etiket ekleyin](topic:text#find-and-replace-words)). Onsuz: `Bulunacak metni girin`, sonra `Değiştirme metnini girin (Enter: bulunanı seçer)`. Metinde, öznitelik değerlerinde ve ölçülendirme metninde, açık sekmede ya da seçimde arar.

### SELECTALL ve DESELECT

`SELECTALL` (takma ad `AI_SELALL`, {{key:Mod+A}}), açık sekmede düzenleyebileceğiniz her nesneyi seçer. `DESELECT` (takma adlar `AI_DESELECT`, `SELECTNONE`; ya da {{key:Esc}}) seçimi temizler.

## Ölçülendirmeler

### DIMLINEAR

Takma ad: `DLI`, `DIMLIN`. Yatay ya da dikey uzaklık.

- `İlk uzatma çizgisinin başlangıcını belirtin [Nesne seç (S)]` (Enter ya da `S`: `Ölçülendirilecek nesneyi seçin`, sonra bir doğruya, yaya, daireye ya da çoklu çizgi parçasına tıklayın)
- `İkinci uzatma çizgisinin başlangıcını belirtin`
- `Ölçülendirme çizgisinin yerini belirtin [Metin/Yatay/Dikey/Döndürülmüş]`. `T` metin ister (`<>` ölçülen değerdir), `H` ve `V` yönü sabitler, `R` `Ölçülendirme çizgisinin açısını belirtin <0>` ister.

### DIMALIGNED

Takma ad: `DAL`, `DIMALI`. İki nokta arasındaki gerçek uzaklık.

- Başlangıçlar {{cmd:DIMLINEAR}}'deki gibidir, sonra `Ölçülendirme çizgisinin yerini belirtin [Metin]`.

### DIMANGULAR

Takma ad: `DAN`, `DIMANG`.

- `Yay, daire ya da doğru seçin, ya da köşe için Enter`
- Yay: yayın açısı. Daire: `İkinci açı uç noktasını belirtin`. Doğru: `İkinci doğruyu seçin`. Enter: `Açı köşesini belirtin`, `İlk açı uç noktasını belirtin`, `İkinci açı uç noktasını belirtin`.
- `Ölçülendirme çizgisinin yerini belirtin [Metin]`: ölçmek için açının içine tıklayın.

### DIMRADIUS ve DIMDIAMETER

Takma ad: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Yay ya da daire seçin`, sonra `Ölçülendirme çizgisinin yerini belirtin [Metin]`.

### DIMCONTINUE

Takma ad: `DCO`, `DIMCONT`. Yapılan son doğrusal ya da hizalı ölçülendirmeden devam eder (ya da `Doğrusal ya da hizalı bir ölçülendirme seçin` ister).

- `İkinci uzatma çizgisinin başlangıcını belirtin [Geri al (U)]`, Enter'a kadar tekrarlanır.

### DIMBASELINE

Takma ad: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} gibi, ama her ölçülendirme ilk başlangıçtan başlar ve daha dışarıda üst üste yığılır.

### DIMORDINATE

Takma ad: `DOR`, `DIMORD`. `Özellik konumunu belirtin`, sonra `Belirtme çizgisinin uç noktasını belirtin [Xdatum/Ydatum/Metin]`. Özelliğin UCS başlangıcından X ya da Y boyunca uzaklığını bir belirtme çizgisi üzerinde yazar: çoğunlukla yukarı ya da aşağı giden bir çizgi X okur, yanlara giden bir çizgi Y okur; `Xdatum` ve `Ydatum` hangisinin olacağını sabitler. Başlangıcı önce {{cmd:UCS}} ile belirleyin (olmadan çizimin 0,0 noktasıdır). Tutamaçlar özelliği, başlangıcı ve çizginin ucunu taşır; değer izler. DWG ve DXF'te gerçek bir koordinat ölçülendirmesi olarak kaydedilir. Özelliğin kendisindeki bir belirtme çizgisi ucunu reddeder.

### DIMARC

Takma ad: `DAR`. `Yay ya da çoklu çizgi yay parçası seçin`, sonra `Yay uzunluğu ölçülendirme konumunu belirtin [Metin]`. Yayın boyunca ölçer (kiriş boyunca değil) ve değerden önce yay simgesini yazar. Tam bir daireyi, bir doğruyu ya da düz bir çoklu çizgi parçasını reddeder. Bir DWG onu yay uzunluğu ölçülendirmesi olarak tutar; bir DXF onu metni yay uzunluğu olan bir açısal ölçülendirme olarak tutar ve CadCraft onu yeniden yay uzunluğu ölçülendirmesi olarak açar.

### DIMJOGGED

Takma ad: `DJO`, `JOG`. `Yay ya da daire seçin`, `Merkez konumu geçersiz kılmasını belirtin`, `Kırılma konumunu belirtin`. Merkezi uzakta ya da sayfanın dışında olan bir eğri için yarıçap ölçülendirmesi: ölçülendirme çizgisi merkez yerine verdiğiniz noktadan başlar, içinde bir kırılma vardır, ve yine de gerçek yarıçapı yazar. DWG onu kırık bir yarıçap ölçülendirmesi olarak tutar; bir DXF onu yarıçap ölçülendirmesi olarak tutar ve CadCraft onu yeniden kırık olarak açar.

### DIMJOGLINE

Takma ad: `DJL`. `Kırılma eklenecek ölçülendirmeyi seçin [Kaldır]`, sonra `Kırılma konumunu belirtin (ya da Enter'a basın)`. Doğrusal ya da hizalı bir ölçülendirmenin çizgisine bir kırılma simgesi koyar; mesafenin ölçeğe uygun çizilmediğini gösterir; değer değişmez. `Kaldır` onu alır. Öteki ölçülendirme türlerini reddeder.

### QDIM

Takma ad yok. `Ölçülendirilecek geometriyi seçin`, sonra `Ölçülendirme çizgisinin konumunu belirtin [Sürekli/Kademeli/Taban/Koordinat/Yarıçap/Çap/veriNoktası]`. Çizgi ve çoklu çizgi parçalarının uçlarından, dairelerin ve yayların merkezlerinden, noktalardan ve blok başvurularından birkaç nesneyi tek adımda ölçülendirir. Nesnelerin üstünde ya da altında bir konum karşıdan ölçer; yanlarında bir konum yukarı doğru ölçer. `Sürekli` noktaları zincirler, `Taban` hepsini ilkinden ölçer, `Kademeli` ortadan dışarıya doğru çiftler iç içe koyar, `Koordinat` her noktaya veriden uzaklığını verir (`veriNoktası` yenisini seçer), `Yarıçap` ve `Çap` seçilen her daire ve yayı ölçülendirir. Kip hatırlanır. Ürettiği her şey tek bir geri al adımıdır. İki noktadan az olduğunda ya da Yarıçap ve Çap için yay ya da daire yokken bunu söyler.

### DIMBREAK

Takma ad: `DBREAK`. `Kırılma eklemek ya da kaldırmak için ölçülendirmeleri seçin`, sonra `Diğer nesnelerin kesiştiği yerde kır [Otomatik/El ile/Kaldır] <Otomatik>`. `Otomatik`, diğer nesnelerin ölçülendirme ve uzatma çizgilerini kestiği her yerde bir boşluk bırakır ve o nesneler ya da ölçülendirme taşındığında boşlukları yeniden hesaplar. `El ile` (tek bir ölçülendirme) iki nokta ister ve aralarında bir boşluk bırakır. `Kaldır` her boşluğu alır. Boşluk, ölçülendirme metninin yüksekliğinin 1,5 katıdır.

### DIMSPACE

Takma ad yok. `Taban ölçülendirmesini seçin`, `Aralanacak ölçülendirmeleri seçin`, `Aralık değerini ya da Otomatik girin <Otomatik>`. Paralel doğrusal ve hizalı ölçülendirmelerin (ya da aynı köşe etrafındaki açısal olanların) ölçülendirme çizgilerini, taban ölçülendirmesinden sayarak birbirinden eşit uzaklıkta olacak şekilde taşır; her biri bulunduğu tarafta kalır. `0` onları tabanla hizalar; `Otomatik` taban ölçülendirmesinin metin yüksekliğinin iki katıdır. Tabana paralel olmayan ölçülendirmelere dokunulmaz.

### DIMINSPECT

Takma ad yok. `Ölçülendirmeleri seçin`, `Muayene çerçevesi şekli [Yuvarlak/Açısal/Yok/kaldır] <Yuvarlak>`, `Bir etiket girin`, `Muayene oranını girin <%100>`. Değerin etrafına bir çerçeve çizer; önünde bir etiket ve sonrasında muayene oranı olur. `kaldır` çerçeveyi alır. Tolerans metni değerle birlikte kalır.

### DIMOVERRIDE

Takma ad: `DOV`, `DIMOVER`. `Geçersiz kılınacak ölçülendirme değişkeni adını ya da Temizle'yi girin`, `… için yeni değer girin`, Enter'a kadar tekrarlanır, sonra `Ölçülendirmeleri seçin`. Bu ayarları yalnızca seçili ölçülendirmelerde değiştirir; ölçülendirme stili değişmez. Sayı ya da anahtar olan değişkenleri alır (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Temizle` seçili ölçülendirmeleri stillerine geri koyar. Böyle bir değişken olmayan bir adı ve alamayacağı bir değeri reddeder.

### DIMREASSOCIATE

Takma ad: `DRE`, `DIMREASSOC`. `Ölçülendirmeleri seçin`, sonra her biri için uzatma çizgisi başlangıçları (`İlk uzatma çizgisi başlangıcını bir nesne üzerinde belirtin`: bir ucuna ya da bir doğrunun ortasına, bir çoklu çizgi köşesine, bir merkeze yakalayın; Enter o noktayı serbest bırakır), ya da bir yarıçap, çap, kırık yarıçap ya da yay uzunluğu ölçülendirmesi için `Yay ya da daire seçin`. Ölçülendirme sonra o nesnelere bağlanır: onlar hareket ettiğinde ya da boyut değiştirdiğinde aynı geri al adımında izler ve yeniden ölçer. Bağlı bir noktayı elle taşımak ya da nesneyi silmek bu bağı koparır. Bağ DWG ve DXF 2000'de CadCraft'ın kendi verisi olarak kaydedilir; diğer programlar sıradan bir ölçülendirme görür.

### DIMDISASSOCIATE

Takma ad: `DDA`, `DIMDISASSOC`. `Ölçülendirmeleri seçin`. Onları bağlı oldukları nesnelerden serbest bırakır; hiçbir şey taşınmaz.

### CENTERMARK

Takma ad: `CM`, `DIMCENTER`, `DCE`. `Merkez işareti eklemek için bir daire ya da yay seçin`, Enter'a kadar tekrarlanır. Merkezde bir artı işareti ve eğrinin hemen ötesine kadar dört merkez çizgisi çizer (çizgi tipi CENTER); geçerli katmanda düz çizgiler olarak; geçerli ölçülendirme ayarlarının ok boyutu ve genel ölçeğinden boyutlanır, UCS ile döndürülür. Daire taşınsa da izlemezler.

### CENTERLINE

Takma ad: `CL`. `İlk doğruyu seçin`, `İkinci doğruyu seçin`. İki doğrunun tam ortasından (birleştikleri yerde açıortaydan) bir doğru çizer; onlardan biraz uzundur, çizgi tipi CENTER'dır. Düz bir çizgidir: iki doğruyu izlemez.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Takma ad yok. Her biri `… için yeni değer girin <geçerli>` sorar ve **yeni** ölçülendirmeler için o boyutu ayarlar: genel ölçek, metin yüksekliği, ok boyutu, ondalık basamak (8'e kadar), metnin çevresindeki boşluk, ölçülendirme çizgisinin ötesine uzatma, başlangıçtan ofset. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings).

### DIMLUNIT

Ölçülendirme ayarı: yalnızca yeni ölçülendirmelerin uzunluk biçimi (1 bilimsel, 2 ondalık, 3 mühendislik, 4 mimari, 5 kesirli).

### DIMSTYLE ve -DIMSTYLE

Takma ad: `DST`, `DDIM`, `D`. Ölçülendirme stili yöneticisi: {{ui:Geçerli yap}}, {{ui:Yeni…}}, {{ui:Değiştir…}}, {{ui:Yeniden adlandır…}}, {{ui:Sil}}, {{ui:Karşılaştır…}}, {{ui:Seçililere uygula}}. Komut satırında `-DIMSTYLE`: `Ölçülendirme stili [Geri yükle/Kaydet/Sil/Uygula/Karşılaştır/yeniden Adlandır/Listele]`. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ve DIMTEDIT

`DIMEDIT` (`DED`): `Ölçülendirme düzenleme [Giriş/Yeni/Döndür/Eğik] <Giriş>`, sonra ölçülendirmeler (ya da zaten seçili olanlar). Yeni, metin ister (`<>` = ölçüm); Döndür bir açı ister (0 metni geri koyar); Eğik, uzatma çizgilerinin X ekseninden açısını ister (Enter = yok; yalnızca doğrusal ve hizalı ölçülendirmeler). `DIMTEDIT` (`DIMTED`): `Ölçülendirme metni [Sol/Sağ/Orta/Giriş/Açı] <Orta>`. Bkz. [Ölçülendirme boyutlarını ayarlayın](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Takma ad: `DTU`. `Yeni ölçülendirmelerin metnindeki birimler [Çizim birimleri/mm/cm/m/km]`, ya da ölçülendirmeler seçiliyken `Seçili ölçülendirmelerin metnindeki birimler`. Ölçülen uzunluğu o birimde, birimi sonunda yazarak yazar (DIMLFAC ve bir DIMPOST eki); `D` çizim birimlerine geri döner. Bkz. [Ölçülendirmeler mm, cm, m ya da km cinsinden](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Takma ad: `RC`. `Yay uzunluğu: … Tür: …` yazdırır, sonra `İlk noktayı belirtin [Yay uzunluğu/Nesne/Dikdörtgen/Çokgen/Serbest]`. Dikdörtgen `Karşı köşeyi belirtin` ister; Çokgen `Sonraki noktayı belirtin (bulutu kapatmak için Enter) [Geri al (U)]`; Serbest, bir tıklama ya da {{key:Enter}}'a kadar imleci izler; `O` `Nesne seçin` ister ve `Yönü ters çevir? [Evet/Hayır] <H>` sorar ve nesneyi bulut yapar. `A` `Her yayın uzunluğunu belirtin` ister. `R`, `P` ve `F` sonraki bulut için türü seçer. Sonuç yaylardan oluşan kapalı bir çoklu çizgidir.

### MLEADER

Takma ad: `MLD`; ya da {{ui:Belirtme çizgisi}}. `Belirtme çizgisi ok konumunu belirtin [Ok boyutu/İniş mesafesi/Blok]`, `Belirtme çizgisi iniş konumunu belirtin`, sonra yerinde kutudaki metin (ya da kutu yoksa `Metni girin (boş bir satır bitirir)`). `Blok` önce bir blok adı ister ve çoklu belirtme çizgisi metin yerine o bloğu gösterir. Daha fazla belirtme çizgisi: {{cmd:MLEADEREDIT}}. DWG'de gerçek bir çoklu belirtme çizgisi olarak kaydedilir; DXF çizdiği çizgileri, oku ve metni tutar.

### MLEADEREDIT

Takma ad: `MLE`. `Bir çoklu belirtme çizgisi seçin`, sonra `Belirtme çizgisi ok konumunu belirtin [Belirtme çizgilerini kaldır/Blok içeriği/Metin içeriği]`: her nokta, aynı iniş noktasına yeni bir ok ucundan bir belirtme çizgisi ekler, Enter'a kadar. `Belirtme çizgilerini kaldır` sonra tıkladığınız belirtme çizgisini alır (bir çoklu belirtme çizgisi en az bir tane tutar). `Blok içeriği` bir blok adı ister ve metin yerine o bloğu gösterir (öznitelikleri sorulur); `Metin içeriği` metni geri koyar. Her belirtme çizgisinin kendi tutamacı vardır. DWG'de her belirtme çizgisi ve blok tek bir çoklu belirtme çizgisinde tutulur.

### MLEADERALIGN

Takma ad: `MLA`. `Çoklu belirtme çizgilerini seçin`, sonra `Hizalanacak çoklu belirtme çizgisini seçin [Dağıt/Aralık/Mevcut aralığı kullan]` ve `Yönü belirtin`. Diğer çoklu belirtme çizgilerinin iniş noktalarını (ve metinlerini ya da bloklarını) seçilenin iniş noktasından o yöndeki doğrunun üzerine taşır; okların gösterdiği yerde kalırlar. `Aralık` onları ayrıca eşit uzaklığa da koyar; `Dağıt` iki nokta ister ve aralarında eşit yayar. En az iki çoklu belirtme çizgisi gerekir.

### MLEADERCOLLECT

Takma ad: `MLC`. `Çoklu belirtme çizgilerini seçin`, sonra `Toplanan çoklu belirtme çizgisinin konumunu belirtin [Dikey/Yatay]` (Enter ilkinin yerini korur). Birkaç çoklu belirtme çizgisinden tek birini yapar: blok içerikleri, yan yana ya da alt alta duran her bloğu tutan yeni bir bloğa girer; metin içerikleri her biri için bir satırla tek bir nota olur. İlk çoklu belirtme çizgisi kendi belirtme çizgilerini korur; diğerleri kaldırılır. Metin ve blok içeriklerinin karışımını reddeder.

### TABLE

Takma ad: `TB`; ya da {{ui:Açıklama}} › {{ui:Daha fazla}} › {{ui:Tablo}}. Bir tablo yapar: taşıyabileceğiniz, kopyalayabileceğiniz, döndürebileceğiniz, ölçekleyebileceğiniz ve basabileceğiniz tek bir nesne; hücreleri veri olarak tutulur.

- `Veri satırı sayısı ya da [Yapıştır/Dosya/Stil] <3>`, sonra `Sütun sayısı <3>`, `Metin yüksekliği` ve `Tablonun sol üst köşesi`. Tablo bir başlık satırı (birleştirilmiş tek bir hücre) ve veri satırlarının üstünde bir üstbilgi satırı alır.
- `P`: panodaki e-tablo hücrelerinden bir tablo (hücreler arasında sekme olan metin). Panoda böyle hücrelerle {{key:Ctrl+V}} aynısını yapar; CadCraft'ın kendi kopyası daha yeniyse ya da CadCraft ayıramıyorsa (o zaman kendi kopyasını yapıştırır ve bunu söyler) bunun dışında. `F`: bir `.csv` ya da sekmeyle ayrılmış bir dosyadan tablo. İlk satır üstbilgi satırı olur; sütun genişlikleri metne uyar.
- `S`: bu tablo için tablo stilini seçin (bkz. {{cmd:TABLESTYLE}}).
- Tam sayı olmayan bir satır ya da sütun sayısını ve bir tablonun tutabileceğinden fazla hücreyi reddeder (2.000 satır, 200 sütun, 40.000 hücre).
- {{cmd:EXPLODE}} bir tabloyu çizgilere ve metne çevirir. DWG olarak kaydedilen bir tablo, diğer programların düzenleyebildiği gerçek bir tablo nesnesidir; DXF olarak kaydedilen bir tablo onu çizen bir bloktur ve CadCraft onu yeniden tablo olarak açar.

### TABLEDIT

Takma ad: `TABLEEDIT`, `TABEDIT`; ya da bir hücreye çift tıklayın. Bir tabloyu düzenler.

- `Yazmak için bir hücre seçin (bitirmek için Enter) ya da [Satır/Sütun/Boyut/Birleştir/Birleştirmeyi kaldır/Hizala/Yükseklik/Tür/Temizle]`. Bir hücreye tıklayın, ya da bir tablo seçiliyken adını yazın (`B3`: B sütunu, 3. satır; başlık satırı 1. satırdır). Tarayıcıda hücrenin üstünde bir kutu açılır: {{key:Enter}} metni tutar, {{key:Tab}} sonraki hücreye gider, {{key:Alt+Enter}} yeni bir satır başlatır, {{key:Esc}} hücreyi olduğu gibi bırakır.
- `=` ile başlayan bir metin bir formüldür: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^` ile, parantezler ve `sqrt` ve `round` gibi işlevler. Hücre değeri gösterir; kendi hücresini adlandıran, tablonun dışındaki bir hücreyi ya da sayı olmayan bir hücreyi adlandıran bir formül `####` gösterir ve komut satırı nedenini söyler.
- `R` / `C`: seçilen bir hücrede `Ekle` ya da `Sil` satırları ya da sütunları (kaç tane, ve üstte ya da altta, solda ya da sağda). Formüller adlandırdıkları hücreleri izler.
- `S`: sütunun genişliği ve satırın yüksekliği. Bir satır asla metninin gerektirdiğinden daha alçak olmaz. Seçili bir tablonun her sütun ve satır kenarında da bir tutamacı vardır.
- `M`: bir seçilen hücreden diğerine birleştir; `U`: birleştirmeyi kaldır. `A`: hizalama (`TL` sol üst … `MC` orta merkez … `BR` sağ alt). `H`: bu hücrenin kendi metin yüksekliği (0 = stilinki). `K`: satırı başlık, üstbilgi ya da veri satırı yapar. `CL`: hücreyi boşaltır.
- Kilitli bir katmandaki tabloyu, her satır ya da sütunu silmeyi ve başka bir birleştirilmiş hücreyi ikiye bölecek birleştirmeyi reddeder.

### TABLESTYLE

Takma ad: `TS`. Tablo stillerini, her birini kaç tablonun kullandığıyla listeler, sonra `Tablo stili: [Yeni/Ayarla/Düzenle/Sil/Uygula]`.

- Bir stil; başlık, üstbilgi ve veri satırlarının metin yüksekliğini ve hizalamasını, hücre kenar boşluğunu ve hangi kenarlıkların çizildiğini (dış, satırlar arası, sütunlar arası) tutar.
- `N` geçerli stilden bir stil yapar ve onu geçerli yapar; `S` geçerli stili ayarlar (yeni tablolar onu alır); `E` birini düzenler: onu kullanan tablolar yeniden çizilir; `A` seçili tablolara geçerli stili verir; `D` birini siler (Standart ya da geçerli olan değil; eskiden kullanan tablolar görünümlerini korur).
- Stiller çizimle birlikte kaydedilir (DWG ve DXF).

### TABLEEXPORT

Bir tablonun gösterdiklerini bir CSV dosyası olarak kaydeder (bir formül değeriyle birlikte). `Bir tablo seçin`, ya da önce bir tane seçin. `=`, `+`, `-` ya da `@` ile başlayan metin hücrelerinin önüne bir `'` konur, böylece e-tablo onları çalıştırmaz.

### TABLEPASTE

Takma ad: `PASTETABLE`. Panodaki e-tablo hücrelerinden bir tablo yapar, sonra sol üst köşesini sorar. {{cmd:TABLE}} › `Yapıştır` ile aynıdır.

### DATALINK

Takma ad: `DL`. `Veri bağlantısı: [Yeni/Listele/Kaldır] <Yeni>`. `N` bir CSV dosyası ister, bunun bir tablosunu yerleştirir ve dosyanın adını hatırlar; `L` bağlantıları dosyalarıyla, boyutlarıyla, ne zaman okunduklarıyla ve kaç tablonun kullandığıyla listeler; `R` bir bağlantıyı kaldırır (tabloları düz tablo olarak kalır).

### DATALINKUPDATE

Takma ad: `DLU`. Bir veri bağlantısının dosyasını yeniden okur ve ona bağlı tabloları yeniden doldurur (satır ve sütunlar, eşleşmek için eklenir ya da silinir). Bir tarayıcı bir dosyayı kendiliğinden açamaz, bu yüzden dosyayı yeniden seçmenizi ister. Birkaç bağlantı varsa hangisi olduğunu sorar.

### FIELD

Çizime bir alan koyar: kendini hesaplayan metin. `Alan: [Tarih/Dosya adı/Sayfa/Özellik/Nesne/İfade/Kod] <Tarih>`:

- `D`: şimdi ya da kaydedilen, oluşturulan ya da basılan tarih ve bir biçim (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: dosya adı, uzantısıyla ya da uzantısız. `S`: sayfanın numarası, başlığı ya da kaç sayfa olduğu. `P`: adıyla bir çizim özelliği (bkz. {{cmd:DWGPROPS}}). `O`: bir nesne seçin, sonra ne okunacağı (alan, uzunluk, çevre, yarıçap, çap, katman, ad, x, y, metin, dönme, renk) ve ondalık basamaklar. `E`: bir formül. `C`: yazıldığı gibi kodları olan bir metin, örneğin `Sayfa %<sheetnumber>% / %<sheetcount>%`.
- Sonra `Bir metin, bir tablo hücresi ya da öznitelikleri olan bir blok seçin (bunun içine koymak için) (Enter: yeni bir metin)`: seçilen bir metne alan, içeriğinin ardına eklenir; bir tablo hücresi de öyle; bir blok başvurusu hangi özniteliği sorar; {{key:Enter}} yeni bir metin için bir yükseklik ve bir nokta ister.
- Ekranda bir alanın açık gri bir arka planı vardır; bir baskı ya da PDF hiçbir zaman bunu içermez. Alanın metninin üstüne elle yazmak alanı bitirir. Hesaplanamayan bir alan `####` gösterir.
- Bir nesnenin alanı, CadCraft'ın nesnelerde tuttuğu anahtar ile nesnesini bulur (Ayarlar › CadCraft › Birleştirmeye uygun dosyalar); anahtarlar kapalıyken reddeder.

### UPDATEFIELD

Takma ad: `UPDATEFIELDS`. `Alanları güncellenecek nesneleri seçin (Enter: her alan) ya da [Ayarlar]`. `S` alanların kendiliğinden ne zaman güncelleneceğini ayarlar: `A` açılınca, `K` kaydedilince, `B` basılınca, `Y` yeniden oluşturulunca harflerini yazın (başlangıçta dördü de) ya da `YOK`.

### DWGPROPS

Takma ad: `DRAWINGPROPS`. Çizimin özelliklerini listeler, sonra `Değiştir: [Başlık/Konu/Yazar/Şirket/Anahtar kelimeler/yorumlar/Özel/Kaldır/Çıkış]`. İlk altısı {{ui:Çizim ayrıntıları}} panelinin gösterdikleridir; `Ö` (özel) kendi adınızı ve değerinizi ekler, `K` birini kaldırır. Alanlar bunları okur (`%<prop:title>%`, `%<prop:Client>%`) ve hemen izler. Yerleşik adlardan birini ya da `%`, `<`, `>`, bir tırnak ya da ters eğik çizgi içeren bir özel adı reddeder.

## Parametrik

Bkz. [Bir çizimi kısıtlayın](topic:constraints) ve [Parametre ve denklemleri kullanın](topic:parameters). Kısıtlamalar {{ui:Model}} sekmesinde çalışır.

### GEOMCONSTRAINT ve GC komutları

Takma ad `GCON`: `Kısıtlama türünü girin [Yatay/Dikey/Dik/Paralel/Teğet/Çakışık/Eşmerkezli/Doğrusal/Simetrik/Eşit/Sabitle] <Yatay>`, sonra o komutun istemleri.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Bir nesne seçin [2 Nokta] <2 Nokta>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `İlk nesneyi seçin`, `İkinci nesneyi seçin` (ikinci olan hareket eder).
- {{cmd:GCCOINCIDENT}}: `İlk noktayı seçin [Nesne/Otomatik kısıtla] <Nesne>`, `İkinci noktayı seçin [Nesne] <Nesne>`.
- {{cmd:GCFIX}}: `Nokta seçin [Nesne] <Nesne>`.
- {{cmd:GCSYMMETRIC}}: `İlk nesneyi seçin [2 Nokta] <2 Nokta>`, `İkinci nesneyi seçin`, `Simetri doğrusunu seçin`.

### DIMCONSTRAINT ve DC komutları

Takma ad `DCON`: `Dönüştürülecek ilişkisel ölçülendirmeyi seçin [Doğrusal/Yatay/Dikey/Hizalı/Açısal/Yarıçap/Çap/Dönüştür] <Hizalı>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `İlk kısıtlama noktasını belirtin [Nesne] <Nesne>`, `İkinci kısıtlama noktasını belirtin`, `Ölçülendirme çizgisinin konumunu belirtin`, `Ölçülendirme metni <d1=40>` (bir sayı, bir ifade ya da `ad=ifade`).
- {{cmd:DCALIGNED}}: yukarıdaki gibi, `[Nesne/Nokta ve doğru/2 Doğru]` ile.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Yay ya da daire seçin`. {{cmd:DCANGULAR}}: `İlk doğruyu ya da yayı seçin`, `İkinci doğruyu seçin`.
- {{cmd:DCCONVERT}}: `Dönüştürülecek ölçülendirmeleri seçin`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Nesneleri seçin [Ayarlar]`. `S` uzaklık ve açı toleranslarını sorar.
- {{cmd:DELCONSTRAINT}} (takma ad `DELCON`): `Nesneleri seçin`; onların kısıtlamaları gider.
- {{cmd:CONSTRAINTBAR}} (takma ad `CBAR`): `Nesneleri seçin [Hepsini göster/Hepsini gizle]`, sonra `[Göster/Gizle]`.
- {{cmd:DCDISPLAY}}: `Bir seçenek girin [Göster/Gizle]`.

### PARAMETERS ve -PARAMETERS

{{cmd:PARAMETERS}} (takma adlar `PAR`, `PARAM`) {{ui:Parametreler}} panelini açar. `-PARAMETERS`: `Bir seçenek girin [Yeni/Düzenle/Yeniden adlandır/Sil/?] <?>`.

### SWBOUT

Takma ad `SWMACRO`. SolidWorks'te modeli tek bir kısıtlı eskiz olarak yeniden kuran bir makro (.swb) indirir. Bkz. [Eskizleri diğer parça modelleyicilere ve onlardan taşıyın](topic:solidworks-sketches).

## Bloklar

### ANNOSCALE

Takma ad: `CANNOSCALE`. Çizimin açıklama ölçeğini ve kaç açıklamalı nesne tuttuğunu söyler, sonra `Yeni açıklama ölçeği`: `1:50`, `1:100`, `2:1`, çıplak bir sayı (`50`, 1:50'dir) ya da çizimin kendi ölçeklerinden birinin adını yazın. Her açıklamalı yazı ve ölçülendirme, yeni ölçekte aynı boyutta basılacak şekilde yeniden boyutlandırılır; tek bir geri al adımında. Açıklamalı olmayan nesnelere dokunulmaz; yeni ölçeği içermeyen bir ölçek listesi tutan nesneye de dokunulmaz ({{cmd:OBJECTSCALE}}). Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Takma ad: `OBJSCALE`. `Açıklamalı nesneleri seçin`, sonra `Seçili nesnelerin açıklama ölçekleri [Ekle/Sil/Geçerli ölçek/Listele/Çıkış] <Ekle>`. Açıklamalı bir yazı ya da ölçülendirme bir açıklama ölçekleri listesi tutar. `Ekle` ve `Sil` bir ölçek ister (`1:50`, `2:1`, çıplak bir sayı ya da çizimin kendi ölçeklerinden birinin adı); `Geçerli ölçek` çizimin açıklama ölçeğini ekler; `Listele` her nesnenin ölçeklerini yazdırır. Bir ölçeği listesinde olan bir görünüm penceresi, nesneyi o ölçekte kâğıt yüksekliğini basacak boyutta gösterir; ekranda ve çıktılarda. Son ölçek silinemez. Açıklamalı olmayan nesneler dışarıda kalır: önce Özellikler'de Açıklamalı'yı açın. Listeler DWG ve DXF'te CadCraft'ın kendi verisi olarak kaydedilir. Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Takma ad: `ANNOALL`. `Açıklamalı nesneleri tüm ölçeklerde göster [AÇIK/KAPALI]`. Açık (bir çizim başladığında): listesinde olmayan bir ölçekteki bir görünüm penceresinde ya da modelde, bir açıklamalı nesne de olduğu boyutta gösterilir. Kapalı: orada gösterilmez ve modelde seçilemez. Anahtar tek bir geri al adımıdır; dosyada tutulmaz.

### SCALELISTEDIT

Takma ad: `SCALELIST`. `Ölçek listesi [Ekle/Düzenle/Sil/Listele/Sıfırla]`, Enter'a kadar. Ekle: `Ölçek adı`, `Kâğıt birimleri`, `Çizim birimleri`. Düzenle ve Sil ölçeğin adını ister. Çizimin kendi ölçekleri görünüm penceresi ve çıktı ölçek listelerine katılır ve çizimle birlikte kaydedilir. Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ve PEDIT

`SPLINE` (`SPL`): `Spline'ın ilk noktası [Yöntem/Nesne] (Uydurma noktaları)`. Uydurma: eğrinin geçtiği noktalar; `Kapat`, `Geri al`, sonra `Başlangıç teğeti` ve `Bitiş teğeti` (bir nokta, ya da {{key:Enter}}). Yöntem › Kontrol köşeleri bir derece (1 ile 5 arası) ister ve bir kontrol çokgeninden çizer. Nesne, çoklu çizgileri köşelerinden geçen spline'lara çevirir. `SPLINEDIT` (`SPE`): `[Uydurma verisi/Köşe düzenle/çoklu çizgiye dönüştür/Aç ya da Kapat/Ters çevir/Geri al/Çıkış]`; Uydurma verisi `[Ekle/Sil/Taşı/Temizle/Teğetler/Çıkış]`; Köşe düzenle `[Kontrol noktası ekle/Taşı/Ağırlık/Çıkış]`. `PEDIT` (`PE`): `[Kapat/Aç/Birleştir/Genişlik/Uydur/Spline/Düzleştir/Çizgi tipi üret/Ters çevir/Geri al/Çıkış]`, birkaç nesne için `M`; doğrular, yaylar ve spline'lar önce çoklu çizgiye çevrilmek üzere sunulur. Bkz. [Spline'lar ve çoklu çizgiler](topic:splines).

### BLOCK

Takma ad: `B`, `BMAKE`.

- `Blok adını girin`. Varsa: `"…" bloğu zaten var. Yeniden tanımlansın mı? [Evet/Hayır] <H>`.
- `Ekleme temel noktasını belirtin`
- `Nesneleri seçin`. Onların yerine yeni bloğa tek bir başvuru gelir.

### WBLOCK

Takma ad: `W`, `-WBLOCK`. Bir bloğu, birkaç nesneyi ya da tüm çizimi yeni bir DWG ya da DXF dosyası olarak yazar. `WBLOCK kaynağı [Blok/Tüm çizim/Nesneler] <Nesneler>`:

- **Nesneler**: `Ekleme temel noktasını belirtin` (yeni çizimin başlangıcı olur), `Nesneleri seçin`, sonra `Dosya biçimi [DWG/DXF/R12 DXF]` ve `Yeni çizim için dosya adı`, sonra `Nesnelere ne yapılsın [Koru/Bloğa dönüştür/Sil]`. Bloğa dönüştür, onları dosyanın adında bir bloğa tek bir başvuruyla değiştirir; Sil onları kaldırır.
- **Blok**: `Yazılacak blok`. Bloğun kendi nesneleri, temel noktası başlangıç olarak, iç içe bloklar dahil.
- **Tüm çizim**: model uzayındaki her nesne. Sayfalar yazılmaz; sayfalarla birlikte bir kopya için {{cmd:SAVEAS}} kullanın.

Yeni dosya yalnızca nesnelerinin kullandığı katmanları, çizgi tiplerini, metin ve ölçülendirme stillerini ve blokları ve çizimin birimlerini tutar. Bir DWG'nin sürümü, {{cmd:SAVEAS}}'in en son kullandığıdır. Tarayıcıda dosya indirilir; Studio'da kaydetme iletişim kutusu açılır.

### ATTDEF

Takma ad: `ATT`, `DDATTDEF`, `-ATTDEF`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelik tanımla}}. Kipleri yazdırır, sonra `Değiştirilecek bir seçenek girin (bittiğinde Enter) [Görünmez/Sabit/Ön ayar]`, `Öznitelik etiket adını girin`, `Öznitelik istemini girin`, `Varsayılan öznitelik değerini girin` (sabitken `Öznitelik değerini girin`), `Metnin başlangıç noktasını belirtin`, `Metin yüksekliğini belirtin`, `Metnin döndürme açısını belirtin`. {{cmd:BLOCK}} öznitelik tanımlarını bloğa alır.

### EATTEDIT ve ATTEDIT

`EATTEDIT` (`DDATTE`, ya da öznitelikleri olan bir başvuruya çift tıklayın; {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelikleri düzenle}}): `Öznitelikleri olan bir blok başvurusu seçin`, sonra {{ui:Öznitelikleri düzenle}} iletişim kutusu. `ATTEDIT` (`ATE`, `-ATTEDIT`): aynı başvuru, sonra her öznitelik için `<istem> (<ETİKET>) <değer>`; {{key:Enter}} bir değeri korur. Bkz. [Öznitelikler](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Hangi bloğun başvurularının öznitelikleri güncellensin [Ad/Seç/Tümü] <Seç>`. Değerler korunur; yeni öznitelikler varsayılanını alır, kaldırılanlar gider, yerleşimler sıfırlanır.

### BATTMAN

{{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Öznitelik yöneticisi}}. İletişim kutusu: blok, öznitelikler (etiket, istem, varsayılan, kipler, sıra), {{ui:Referansları güncelle (değerler korunur)}}, {{ui:Uygula}}.

### REFEDIT ve REFCLOSE

{{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Yerinde düzenle}}. `REFEDIT`: `Yerinde düzenlenecek blok başvurusunu seçin` (ya da seçim). `REFCLOSE`: `"…" üzerindeki değişiklikler kaydedilsin mi [Kaydet/At] <Kaydet>`; şeritteki {{ui:Bloğu kaydet}} ve {{ui:Vazgeç}} aynısını yapar. Tüm düzenleme tek bir geri al adımıdır. Bkz. [Öznitelikler](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[AÇIK/KAPALI]`: bir kalem vuruşunun basıncının {{cmd:SKETCHFIX}} ve {{cmd:SKETCHLIVE}}'in yaptıklarının çizgi kalınlığını belirleyip belirlemeyeceği (başlangıçta açık). Bkz. [Kalemle eskiz](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Takma ad: `OFFSTD`. Bu çizim için hangi ofis standardının geçerli olduğunu ve nereden geldiğini söyler: çizimin kendi kaydı, ekibinizin ortak standardı ya da Varsayılan Politikalarınız (metin yükseklikleri `all.anno.*`); hiçbiri yoksa programın kendi boyutları. `[İçe aktar/Katmanlar/Künye/Temizle/Çıkış]`: `İçe aktar` bir `cc-office-standard` .json dosyasını (SuperCad ve BimCraft'ın yazdığı kaydı) bu çizime okur; DWG ve DXF'te onunla birlikte kaydedilir; `Katmanlar` çizimin eksik olan ofis katmanlarını ekler, tek bir geri al adımında, ve hiçbirini kaldırmaz; `Künye` ofisin alanlarını bu çizimin kendi değerleriyle listeler; `Temizle` çizimin kendi kaydını kaldırır. Açıklamalı yazı ve ölçülendirme yükseklikleri yürürlükteki standarda uyar. Bkz. [Birimler, kâğıtlar ve ölçekler](topic:units-papers-scales).

### BPARAMS

Takma ad: `BPM`, `BLOCKPARAMS`. Blok düzenleyicisindeki bloğun, seçili başvurunun bloğunun ya da adını verdiğiniz bloğun (`Blok adı`) Parametre yöneticisini açar: formüllü parametreler, durumları olan birkaç görünürlük parametresi ve seçili başvurunun kendi değerleri ve durumları. Bkz. [Kendi parametreleriniz ve görünürlük durumlarınız](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` aynısını komut satırında yapar: `[Parametre/Görünürlük/Durum/Ata/Başvuru/Bitti]`.

### BEDIT ve BCLOSE

`BE`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bloğu düzenle}}. `Düzenlenecek blok adını girin <seçili başvurunun bloğu>` blok düzenleyicisini açar. `BCLOSE` `"…" üzerindeki blok düzenleyicisi kapatılsın mı [Kaydet/At] <Kaydet>` sorar; şeritteki {{ui:Bloğu kaydet}} ve {{ui:Değişiklikleri at}} aynısını yapar. Düzenleyicide yapılan her şey tek bir geri al adımıdır.

### VIEWBASE

Takma ad: `FLATSHOT`. 3B sekmedeki katıların düz 2B bir görünümü: `Görünüm [Ön/Üst/Sağ/Sol/Arka/Alt/İzo]`, `Gizli çizgiler [Göster/Gizle]`, bir ölçek (`1:20`, `2:1`; {{key:Enter}} sayfaya uyanı alır), sonra görünümün merkezi. Tek bir blok başvurusu; görünen kenarlar VIEW-VISIBLE üzerinde, gizli olanlar VIEW-HIDDEN üzerinde kesikli. Bkz. [Sayfalarda düz görünümler](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Takma ad: `-PUBLISH`; ya da {{ui:Çıktı al}} iletişim kutusunda {{ui:Tüm sayfalar tek bir PDF'te}}. `Çıktı alınacak sayfalar [Tümü/Bazıları]`: {{key:Enter}} her sayfayı basar, `B` adları virgülle ayrılmış ister. Tek bir PDF, sayfa başına bir sayfa ve bir yer imi. Bkz. [Her sayfa tek bir PDF'te](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Takma ad: `SSM`, `SHEETSETMANAGER`. Sol panelin {{ui:Sayfa takımı}} bölümüne getirir: birçok çizimden sayfalar, numaralı ve adlandırılmış, künyeleri takımdan doldurulmuş, tek bir PDF olarak yayınlanmış. Bkz. [Sayfa takımları](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): bir DWG ya da DXF seçin, sonra ekleme noktasını. {{cmd:XREF}} (`XR`, `-XREF`): `Bağlı çizimler [?/Ekle/Yeniden yükle/Bağla/Ayır] (Enter: ?)`; birden fazla bağlantı varsa, birinin başvurusunu seçin ya da `A` yazıp adını girin. Bkz. [Bağlı çizimler](topic:files#linked-drawings-external-references).

### COUNT

Takma ad: `BCOUNT`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları say}}. `Sayılacak bir blok başvurusu seçin ya da [Tümü/Dışa aktar] (Enter: Tümü)`: bir seçim, bu alandaki o bloğun her başvurusunu seçer ve sayar; {{key:Enter}} ya da `T` hepsini listeler; `E` sonra `S` (sayılar) ya da `Ö` (öznitelikler) bir CSV indirir. Bkz. [Blokları sayın ve bir liste dışa aktarın](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Takma ad: `I`, `DDINSERT`.

- `Blok adını ya da [Dosya/Kitaplık] girin <son blok>` (büyük-küçük harf farketmez). `D` bir DWG ya da DXF ister, sonra tüm çizimi ya da içindeki bloklardan birini; kullanılmış bir ad {{ui:Var olanı tut}} ya da {{ui:Yeniden adlandır}} sorar. `K` kitaplık panelini açar.
- `Ekleme noktasını belirtin [Ölçek (S)/Döndür (R)]`. `S` `Ölçek çarpanını belirtin` ister, `R` `Döndürme açısını belirtin` ister; ikisi de hatırlanır.
- Blok, başka yerlerde tekrarlanan nesnelerin yanında zaten duruyorsa, bir satır kaç yerin önerildiğini söyler ve istem `önerilenleri Göster (G)` seçeneği alır: `G` onları gösterir; birine yakın tıklayın ve bloğu oraya koyun, `T` hepsi için, Enter ise geri döner. Komşularının dönüşünü ve varsayılan öznitelik değerlerini alırlar. Açık alanda 20.000 nesneden fazla olan çizimler taranmaz.
- Sonra blokun istediği her öznitelik için `Enter <istem> (<ETİKET>) <varsayılan>`. Bkz. [Blok öznitelikleri](topic:attributes).

### LIBRARY

Takma ad: `LIB`. Kitaplık panelini açar: öğeleri yerleştirin, güncellemeleri kontrol edin, kitaplık katkı payları. Hiçbir soru sormaz. Bkz. [Bir dosyadan ya da kitaplıktan ekleyin](topic:insert-from-file-and-library).

### STEELMEMBER

Takma ad: `SMEMBER`; ya da kitaplığın {{ui:Standart}} sekmesinde {{ui:3B eleman}}. `Kesit boyutu <W12x26>` (sekmenin listelediği gibi), sonra `Başlangıç noktası [Kolon]` ve `Bitiş noktası`: iki nokta arasında, zemine oturan bir 3B katı eleman. `K` kolonun taban noktasını ve yüksekliğini ister. Tek bir geri al adımı. Bkz. [Çelik profilleri ve standart parçaları yerleştirin](topic:steel-and-standard-parts).

### PARTSLIST

Takma ad: `PLIST`. `Parça listesinin sol üst köşesi`, sonra `Metin yüksekliği <2.5>`: kitaplıktan yerleştirilmiş her standart parçanın ve çelik profilin tablosunu çizer (öğe numaraları, miktar, parça, standart, boyut, uzunluk, malzeme, kütle). Tek bir geri al adımı. Bkz. [Çelik profilleri ve standart parçaları yerleştirin](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Takma ad: `PU`. Hiçbir yerde kullanılmayan blok tanımlarını kaldırır. Soru sormaz.

### DELBLOCKS

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları sil}}. `Silinecek bloğu seçin [Ad/Çıkış]`: bir blok başvurusu seçin, ya da filtreli bir blok listesi için `A` (birkaçını seçebilirsiniz), ya da bitirmek için `Ç` / {{key:Enter}}. Her başvuru gider — modelde, her sayfada ve diğer blokların içinde — sonra tanım; komut satırı neyin silindiğini ve neyin silinemediğini söyler. Adsız bloklar ve bağlı çizimler önerilmez. İstem bir sonraki blok için geri gelir; bütün komut tek bir geri al adımıdır.

### PASTEBLOCK

{{cmd:PASTEBLOCK}}, kopyaladığınızı ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) tek bir blok olarak yapıştırır: ekleme noktasını seçin ve oraya yeni bir bloğa tek bir başvuru gelir, seçili olarak. Bloğun kendi adı olur (`A$C` ve bir sayı); {{cmd:RENAME}} ona sizinkini verir. Tek bir geri al adımı başvuruyu ve bloğu kaldırır.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}}, değiştirilecek bloğu ve yerine konacak bloğu ister (`?` blokları listeler), sonra modeldeki, her sayfadaki ve diğer blokların içindeki her başvuruyu değiştirir. Her başvuru yerini, ölçeğini, dönüşünü, katmanını ve iki bloğun da sahip olduğu öznitelik değerlerini korur; yalnızca yeni blokta olan öznitelikler varsayılanlarında başlar ve atılan değerleri size söyler. Eski blok artık hiçbir yerde kullanılmıyorsa, onu kaldırmayı önerir. Bağlı çizimleri ve bir bloğun kendi içine girecek bir değiştirmeyi reddeder. Tek bir geri al adımı.

### MINSERT

{{cmd:MINSERT}}, bir bloğu satır ve sütunlarda yerleştirir: blok adı, ekleme noktası, ölçek, döndürme, satır ve sütun sayısı ve aralarındaki mesafeler. Tüm küme döndürmeyle birlikte döner. Her biri kendi başvurusudur (en çok 10.000), böylece sonradan herhangi biri taşınabilir ya da silinebilir.

### BLOCKSPALETTE

Takma ad: `BLOCKSPAL`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Bloklar paneli}}. İmleç filtresindeyken {{ui:Bloklar}} panelini gösterir. Her blokun küçük bir resmi vardır; en son yerleştirilenler önce gelir. Filtrenin yanındaki iki düğme liste ve resim ızgarası arasında geçiş yapar. Bir resme tıklayın (ya da {{ui:Ekle}}) bloğu {{cmd:INSERT}} ile yerleştirmek için, ya da çizime sürükleyip bıraktığınız yere yerleştirmek için.

{{ui:Kitaplıklar}}, listenin altında: {{ui:Çizim ekle}} kendi DWG ya da DXF dosyanızı alır ve blokları resimleriyle listeler, ve tüm çizim tek bir blok olarak. Birini yerleştirmek, tanımını (ve iç içe olduğu blokları ve katmanlarını) {{cmd:INSERT}}'in `Dosya` seçeneğinin yaptığı gibi bu çizime kopyalar; burada zaten aynı tanımla bulunan bir blok bir soru olmadan kullanılır, aynı adı taşıyan ama farklı olan bir blok {{ui:Var olanı tut}} ya da {{ui:Yeniden adlandır}} sorar. Bir tarayıcıda dosya sayfa kapanana kadar kalır. CadCraft Studio'da {{ui:Klasör ekle}} bir klasördeki çizimleri listeler; her biri tıkladığınızda açılır, ve dosyalar ve klasörler hatırlanır. Küçük x bir kitaplığı listeden kaldırır; dosyaya dokunulmaz. Paylaşılan {{ui:Kitaplık}} başka bir şeydir: bkz. [Bir dosyadan ya da kitaplıktan ekleyin](topic:insert-from-file-and-library).

### BCONVERT

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Tekrarları bloklara dönüştür}}. Tekrarlanan geometriyi bulur ve her kopyayı tek bir bloğa bir başvuruya çevirir.

- `Tekrarlanan nesneleri seçin ya da [Blok]`: bir kopyanın nesneleri. `B` bunun yerine var olan bir bloğu adlandırır, bu bloğun nesnelerinin dağınık kopyalarını bulmak için.
- `Bir kopya şunlar olabilir: aynalanmış = Hayır, ölçeklenmiş = Hayır; katman, renk, çizgi tipi ve çizgi kalınlığı = Eşleşsin … [Aynalanmış/Ölçeklenmiş/Özellikler]`: `A`, `Ö` ve `Ö` neyin kopya sayılacağını değiştirir; {{key:Enter}} arar. Ayarlar hatırlanır.
- `Yeni blok için ad <Blok1>`, sonra `Bloğun temel noktasını belirtin` ({{key:Enter}} seçimin sol alt köşesini alır).
- Aynı geometriye sahip kaç nesne kümesi olduğunu söyler, değiştireceği her şeyi vurgular ve `Evet/Hayır` sorar.

Bir kopya, aynı nesnelerin herhangi bir açıyla taşınmış ve döndürülmüş hali demektir (ve açıkken tek bir çarpanla aynalanmış ya da ölçeklenmiş hali); her nesnenin bir karşılığı olmalıdır, seçimin boyutunun milyonda biri toleransla. Her başvuru kendi dönüşünü ve ölçeğini alır (aynalanmış olan negatif bir Y ölçeği), ve nesnelerinin paylaştığı katmanı. Kilitli katmanlardaki nesnelere dokunulmaz ve sayılırlar. Açık alanı (modeli ya da açık sayfayı) arar. Çok büyük bir arama bir çalışma sınırında durur ve bunu söyler. Tek bir geri al adımı.

### BSEARCH

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blok bul}}. `Blokları şuna göre bul [Ad/Öznitelik/Geometri] <Ad>`:

- `A`: bir blok adının parçası ya da `*` ve `?` içeren bir desen. Her bloğu, burada ve tüm çizimdeki başvurularıyla listeler.
- `Ö`: bir öznitelik değeri ya da `ETİKET=değer`. Bunu tutan başvuruları olan blokları, bulunan değerlerle listeler. Sabit öznitelikler de sayılır.
- `G`: nesneleri ya da bir blok başvurusunu seçin; şekli en az %85 benzeyen bloklar en iyisi başta olacak şekilde listelenir. Boyut, döndürme ve aynalama sayılmaz. Ölçü, konturlar boyunca yayılmış noktalar arasındaki mesafeleri karşılaştırır, bu yüzden benzerleri bulur; tam kopyaları bulmak için {{cmd:BCONVERT}} kullanın.

Açık alanda bulunan başvurular seçilir, bir sonraki komuta hazır olur.

### BREPLACE

Ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Blokları değiştir}}. `Değiştir [Seçili/Tümü]`: `S` seçtiğiniz blok başvurularını, adlandırdığınız bloğla değiştirir; `T` bir blok ve yerine geçeni ister ve her başvuruyu {{cmd:BLOCKREPLACE}}'in yaptığı gibi değiştirir (aynı kod). Bir başvuru yerini, ölçeğini, dönüşünü, katmanını ve iki bloğun da sahip olduğu öznitelik değerlerini korur; yeni bloğun yeri olmayan değerler atılır ve adlandırılır. `?` blokları listeler. Tek bir geri al adımı.

### DATAEXTRACTION

Takma ad: `EATTEXT`, `DX`; ya da {{ui:Bloklar}} › {{ui:Daha fazla}} › {{ui:Veri çıkarma}}. Blokları, öznitelikleri ve nesne özelliklerini bir tablo ya da CSV dosyası olarak listeler.

- Seçime göre çalışır, ya da `Nesneleri seçin (Enter: bu alandaki her şey)` sorar.
- Seçim ikisini de tuttuğunda `Liste: [Bloklar/Nesneler/Tümü]`. Adsız bloklar, tablolar ve malzeme listeleri hiçbir zaman listelenmez.
- Seçilecek sütunları yazdırır (ad, tür, katman, X, Y, dönme, ölçek, uzunluk, alan, renk, çizgi tipi, alan ve her öznitelik etiketi başına bir tane), sonra `Sütunlar, ad ya da numarayla, virgülle ayrılmış`. {{key:Enter}} yıldızlı olanları alır: bloklar için ad ve her öznitelik; nesneler için tür, katman ve uzunluk.
- `Aynı satırları bir sayıyla bir arada koy? [Evet/Hayır] <Evet>`, sonra `Listeyi şuraya koy: [Tablo/Csv] <Tablo>`. Bir tablo sıradan bir tablodur ({{cmd:TABLEDIT}} ile düzenlenir) ve canlı değildir: çizim değiştikten sonra komutu yeniden çalıştırın.
- Listede olmayan bir sütunu reddeder. Bir tablo 1.999 veri satırı tutar; bir CSV dosyası hepsini alır.

### COUNTTABLE

Seçimin (ya da açık alanın) blok başvurularını sayar ve sayıları bir tabloya (`Blok`, `Sayı`) ya da bir CSV dosyasına koyar. Çizimi kendi kendine izleyen bir sayım için bkz. {{cmd:BOMTABLE}}.

## Sayfalar ve çıktı alma

### LAYOUT

Takma ad: `LO`, `NEWLAYOUT`; ya da çizimin altındaki {{ui:+}} düğmesi. Bir kenarlık, bir künye ve tek bir görünüm penceresi içeren yeni bir sayfa; ISO A3 üzerinde (ya da inç ya da fit birimli çizimler için Tabloid). Soru sormaz.

### MVIEW

Takma ad: `MV`. Yalnızca bir sayfada ({{cmd:VPORTS}} bir sayfada aynısını yapar).

- `Görünüm penceresinin köşesini belirtin [Çokgen (P)/Nesne (O)]`, `Karşı köşeyi belirtin`. Görünüm penceresi tüm modeli standart bir ölçekte gösterir.
- `P` (Çokgen): dış hattın köşelerine tıklayın (`Geri al (U)`, `Kapat (C)`), bittiğinde {{key:Enter}}. Üçten az köşeyi reddeder.
- `N` (Nesne): `Görünüm penceresinin dış hattı için kapalı bir nesne seçin`: sayfadaki kapalı bir çoklu çizgi, bir daire ya da bir elips. Görünüm penceresi onun şeklini alır (eğriler kısa düz parçalar olarak); nesne olduğu gibi kalır. Kapalı olmayan bir nesneyi reddeder.

### VPCLIP

Sayfada zaten olan bir görünüm penceresini kırpar. `Kırpılacak görünüm penceresini seçin` (ya da önce seçin), sonra `Kırpılacak nesneyi seçin [Çokgen/Sil]`:

- Kapalı bir çoklu çizgiye, daireye ya da elipse tıklayın, ya da bir çokgenin köşelerine tıklamak için {{key:Enter}} (ya da `P`).
- `S` (Sil, görünüm penceresi kırpılmışken sunulur) onu yeniden bir dikdörtgen yapar: sahip olduğu dış hattın etrafındaki kutu.
- Görünüm penceresinin gösterdikleri kâğıtta yerinden oynamaz ve ölçeği kalır. Model yalnızca dış hattın içinde çizilir ve basılır; kenarlık onu izler. Tek bir geri al adımı.
- Kırpılmış bir görünüm penceresinin dış hattının her köşesinde bir tutamaç vardır; merkezinin ve kutusunun dört köşesinin yanında (bir kutu köşesini sürüklemek dış hattı onunla gerdirir). Özellikler, Dış hat: Dikdörtgen ya da Kırpılmış ve köşe sayısını gösterir.
- DWG ve DXF 2000 dosyaları dış hattı CadCraft için tutar. Diğer programlar görünüm penceresini etrafındaki dikdörtgen olarak açar; DXF R12 yalnızca dikdörtgeni tutar.
- Model sekmesinde görünüm pencerelerinin sayfalarda olduğunu söyler.

### VPORTS

Takma ad: `VIEWPORTS`. {{cmd:SPLIT}} bir sayfadan da aynıdır; ve {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Yan yana böl}}, {{ui:Üst üste böl}}, {{ui:Dört bölme}}, {{ui:Tek bölme}} bunu çalıştırır. Modelde: `Bölme sayısını girin [Tek (I)/2/3/4] <3>`; `2` `[Yatay/Dikey] <Dikey>` sorar (Dikey = yan yana), `3` `[Sol/Sağ] <Sağ>` sorar (büyük bölmenin nerede olacağı). Her bölme kendi görünümünü ve alanını tutar; bir tıklama bir bölmeyi etkin yapar. Bir sayfada bu {{cmd:MVIEW}}'dür. Bkz. [Ekranı bölün](topic:split-screen).

### VPVIEW

Takma ad yok. Yalnızca bir sayfada.

- `Görünüm penceresini seçin` (seçiliyse atlanır), sonra modelde: `Gösterilecek pencerenin ilk köşesini belirtin`, `Karşı köşeyi belirtin`.

### UCS

Takma ad yok. Kendi koordinat sisteminiz; bir düzenleme değil. `UCS başlangıcını belirtin [Adlandırılmış (NA)/Nesne (OB)/Önceki (P)/Dünya (W)/Z/3nokta] <Dünya>`: bir nokta yeni bir başlangıçtır, sonra `X ekseni üzerinde bir nokta belirtin (açıyı korumak için Enter)`. `Z`: `Z ekseni etrafında döndürme açısını belirtin <90>`. `3`: başlangıç, pozitif X ekseni üzerinde bir nokta, pozitif Y tarafında bir nokta. `OB`: `UCS'yi hizalamak için bir nesne seçin`. `NA`: `[Geri yükle/Kaydet/Sil/?]` ve bir ad. Görünüm, yeni X ekseni yatay olacak şekilde döner. Bkz. [Görünümü döndürün ve kendi koordinatlarınızı kullanın](topic:ucs-and-turned-view).

### PLAN

Takma ad yok. `Bir seçenek girin [Geçerli ucs/Ucs/Dünya] <Geçerli ucs>`: etkin bölmenin görünümünü, UCS'nin (ya da dünyanın) X ekseni yatay olacak şekilde döndürür. Çizimdeki hiçbir şey taşınmaz.

### TURNLEFT, TURNRIGHT, TURNWORLD

Takma ad yok; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Görünümü 90° sola döndür}}, {{ui:Görünümü 90° sağa döndür}}, {{ui:Dünyaya dön}}. `UCS Z -90`, `UCS Z 90` ve `UCS W` ile aynıdır; görünüm izler.

### VPLAYER

Takma ad yok. Bir sayfada ya da bir görünüm penceresinin içinde. `Bir seçenek girin [?/Dondur/Çöz/Sıfırla/Vpvisdflt]`: `D`, `Ç` ve `S` katman adlarını ister (virgüller, `*` ve `?` joker karakterleri), sonra `[Tümü/Seçili/Geçerli] <Geçerli>` görünüm pencereleri; Sıfırla her katmanı "yeni görünüm pencerelerinde donmuş" varsayılanına döndürür; `V` o varsayılanı ayarlar (`[Donmuş/Çözülmüş]`), bunu {{cmd:MVIEW}} kullanır. `?`, geçerli görünüm penceresinde donmuş katmanları listeler. Katmanlar panelinin görünüm penceresi sütunu aynısını tek bir görünüm penceresi için yapar. Bkz. [Bir katmanı bir görünüm penceresinde dondurun](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Takma ad: `MS`; ya da bir görünüm penceresinin içine çift tıklayın. Yalnızca bir sayfada. Bir görünüm penceresi üzerinden modelde çalışın: seçili olan, sayfadaki tek olan ya da `Çalışmak için görünüm penceresinin içine tıklayın`. İçeride kaydırma ve yakınlaştırma görünüm penceresinin görünümünü değiştirir (ekran kilitli bir görünüm penceresi onu tutar ve bunun yerine sayfa hareket eder); yeni görünüm tek bir geri al adımı olarak yazılır. Bkz. [Modeli bir görünüm penceresi üzerinden çalışın](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Takma ad: `PS`; ya da görünüm penceresinin dışına çift tıklayın, ya da çizimin altındaki bir sekmeye tıklayın. Sayfaya geri döner.

### PLOT

Takma ad: `PRINT`, `PUBLISH`, `EXPORTPDF`; ya da {{key:Mod+P}}. {{ui:PDF'e çıktı al}} iletişim kutusunu açar. Bkz. [PDF'e çıktı alma](topic:plot-pdf).

### PLOTSTYLES

Takma ad: `STYLESMANAGER`, `PSTABLES`; ya da {{ui:PDF'e çıktı al}} iletişim kutusunda {{ui:Tabloları düzenle…}}. {{ui:Çıktı stili tabloları}}'nı açar: her rengin nasıl basılacağı (renk, gri, mürekkep, çizgi kalınlığı), çizimle birlikte tutulur. Bkz. [Çıktı stili tabloları](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}}, nesneleri bir görünüm penceresi üzerinden bir sayfa ile model arasında taşır; diğer taraftan aynı görünsünler diye ölçeklenir ve döndürülürler. Bir sayfada nesneleri seçin ve modele giderler (sayfada birden fazla varsa görünüm penceresini seçin). Görünüm penceresi üzerinden modelde çalışırken ({{cmd:MSPACE}}), seçili nesneler sayfaya gelir. Kaç kez büyük ya da küçük olduklarını söyler. Görünüm pencereleri kendi sayfalarında kalır. Tek bir geri al adımı.

### ISODRAFT

{{cmd:ISODRAFT}} izometrik çizimi `AÇIK` ya da `KAPALI` yapar, ya da doğrudan `Sol`, `Üst` ya da `Sağ` düzlemine geçer. Açıkken: Ortogonal ({{key:F8}}) çizgileri düzlemin iki ekseni boyunca tutar (sol: 90° ve 150°; üst: 30° ve 150°; sağ: 30° ve 90°), kutupsal izleme ({{key:F10}}) aynı eksenleri izler, ızgaraya yakalama ({{key:F9}}) izometrik ızgarayı kullanır ve ızgara ({{key:F7}}) 30°, 90° ve 150° çizgilerle çizilir. {{cmd:ELLIPSE}} `Isocircle` kazanır: bir merkez ve bir yarıçap (ya da `Çap`) verin ve geçerli düzlemde bir dairenin göründüğü elipsi çizer. Çizim düz kalır: bunlar bir perspektif görünümü çizme yardımcılarıdır, bir 3B model değildir. Ayar bu oturum içindir ve dosyada kaydedilmez.

### ISOPLANE

{{cmd:ISOPLANE}}, izometrik çizimin üzerinde çalışacağı düzlemi seçer: `Sol`, `Üst` ya da `Sağ`. Enter bir sonraki düzleme geçer. İzometrik çizim açıkken {{key:F5}} bir komutun ortasında aynısını yapar; kapalıyken {{key:F5}} tarayıcıya bırakılır.

## Bilgi

### CAL

Bir hesabın değerini yazdırır; herhangi bir uzunluk yazılabildiği her yerde okunduğu gibi.

- `İfade`: yazın, örneğin `12'6"+3/4"` ya da `(24'-0")/3`, ve {{key:Enter}}'a basın. CadCraft `= 12'-6 3/4"   (150.75 çizim birimi)` yazdırır. Bkz. [Yazılan bir değerde aritmetik](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Takma ad: `DI`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Mesafe ölç}}.

- `İlk noktayı belirtin`, `İkinci noktayı belirtin`. Mesafeyi, açıyı, Delta X ve Delta Y'yi yazdırır.

### AREA

Takma ad: `AA`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Alan}}. Alanı ve çevreyi yazdırır.

- `İlk köşe noktasını belirtin [Nesne/Alan ekle/Alan çıkar] <Nesne>`
  - Köşeleri tıklayın ya da yazın; `Sonraki noktayı belirtin (kapatmak için Enter) [Geri al (U)]` isteminde dış hattı kapatmak için {{key:Enter}}'a basın. `U` son köşeyi geri alır.
  - {{key:Enter}} ya da `N` (Nesne), sonra `Nesne seçin`: bir daire (çevresini yazdırır), bir elips, bir çoklu çizgi (açık olan, alan için düz bir doğruyla kapatılır ve uzunluğu yazdırılır) ya da bir taralama (delikler çıkarılır).
  - `A` (Alan ekle) ve `S` (Alan çıkar) çalışan bir toplamı tutar: istem `(EKLE kipi)` ya da `(ÇIKAR kipi)` ile başlar, her alan eklenir ya da çıkarılır ve her birinden sonra `Toplam alan = …` yazdırılır. Bu kiplerde `N` Enter'a kadar nesne seçer ve ilk istemde {{key:Enter}} komutu bitirir.

### MEASUREGEOM

Takma ad: `MEA`. `Bir seçenek girin [Mesafe/Yarıçap/Açı/Alan] <Mesafe>`; her ölçümden sonra yeniden sorar; varsayılan `Çıkış`tır.

`Hızlı` fareyi hareket ettirdikçe imlecin çevresinde ölçer: sağında, üstünde, solunda ve altında en yakın nesneye uzaklık (geçerli UCS'nin eksenleri boyunca), gidilirken çizilir; ve iki komşunun düz olup buluştuğu yerde açı. Bir tıklama dört uzaklığı, net genişliği ve yüksekliği ve açıları geçmişe yazar; Enter seçeneklere döner. Ekranda olanı okur.

- `M`: iki nokta, {{cmd:DIST}} gibi.
- `Y`: `Bir yay ya da daire seçin`; yarıçapı ve çapı yazdırır.
- `A`: bir yay (kapsadığı açı), bir doğru ve sonra ikinci bir doğru (aralarındaki açı, uzak uçlarına doğru), ya da {{key:Enter}} ve üç nokta (köşe, sonra iki uç).
- `AR`: {{cmd:AREA}} gibi, tek bir alan.

### ID

Takma ad yok. `Nokta belirtin`; X ve Y'sini yazdırır.

### LIST

Takma ad: `LI`, `LS`. `Nesneleri seçin`; her nesnenin türünü, katmanını ve ana ölçülerini yazdırır.

### MASSPROP

{{cmd:MASSPROP}}, seçtiğiniz bölgelerin ve kapalı nesnelerin kesit özelliklerini birlikte verir: alan, çevre, sınırlayıcı kutu, ağırlık merkezi, orijinden geçen X ve Y eksenleri etrafındaki eylemsizlik momentleri, eylemsizlik çarpımı, dönme yarıçapları, ağırlık merkezi etrafında aynı momentler ve asal momentler ile eksenlerinin yönleri. Bir bölgenin içindeki delikler delik sayılır. Değerler çizim birimlerindedir ve doğrulardan ve yaylardan oluşan dış hatlar için kesindir; elips ve spline'lar kısa düz parçalar olarak ölçülür ve bunu söyler. Raporden sonra bir metin dosyasına yazılıp yazılmayacağını sorar. Kapalı olmayan nesneleri dışarıda bırakır ve kaç tane olduğunu söyler.

## Görünüm, dosya ve diğerleri

### ZOOM

Takma ad: `Z`.

- `Pencere köşesini belirtin, bir ölçek çarpanı girin (nX) [Sınırlar (E)/Tümü (A)/Pencere (W)/Önceki (P)/Ölçek (S)/Merkez (C)]`. Bir pencere için iki köşeye tıklayın. `E`, `A` ya da Enter: tüm çizim.
- `P` (Önceki, ya da araç çubuğunda {{ui:Önceki}}) bir sekme başına 10 görünüme kadar, bir önceki görünüme döner; bir dizi fare tekeri hareketi ya da bir kaydırma bir görünüm sayılır.
- `2`, `2x` ya da `0,5x` gibi bir sayı (ya da `S` ve sonra sayı) ekranın ortasında o çarpanla yakınlaştırır ya da uzaklaştırır.
- `C` `Merkez noktasını belirtin` ve `Yükseklik ya da büyütme girin (nX)` ister.

### PDFATTACH, PDFIMPORT ve PDF komutları

Takma adlar: `PDFATT` {{cmd:PDFATTACH}} için, `PDFIM` {{cmd:PDFIMPORT}} için. {{cmd:PDFATTACH}} bir PDF sayfasını çizimin altına koyar (dosya, sayfa, ekleme noktası, ölçek, döndürme); {{cmd:PDFIMPORT}} bir sayfanın çizgilerini, eğrilerini, dolgularını ve metnini PDF'in adını taşıyan katmanlarda çizim nesnelerine çevirir; gerçek boyutta, yazılmış bir ölçekte ya da iki noktadan ve gerçek bir uzaklıktan ölçeklenmiş. {{cmd:PDFCLIP}} bir altlığı kırpar, {{cmd:PDFADJUST}} soluklaştırmayı, kontrastı, tek renk olmayı ayarlar ya da kapatır, {{cmd:PDFLAYERS}} PDF'in kendi katmanlarını açar ya da kapatır ve {{cmd:PDF}} bir çizimin altlıklarının kullandığı dosyaları CadCraft'a yeniden verir. Bkz. [PDF altlıkları](topic:pdf-underlay).

### AUTOCOMPLETE

Takma ad: `AUTOC`. Çizim otomatik tamamlama: hiçbir komut çalışmazken, gri bir hayalet çizimin desenlerinin ne önerdiğini gösterir. {{cmd:AUTOCOMPLETE}} onu `Açık` ya da `Kapalı` yapar (ya da Ayarlar › CadCraft) ya da şimdi ne önereceğini `Göster`ir. **Tab** hayaleti tek bir geri al adımı olarak çizer; **Esc** çizim değişene kadar onu kapatır. En yeni nesnelerde üç şey bulur: iki kez ya da daha fazla çizilmiş bir şeyin eşit bir adımdaki bir sonraki kopyası (saplamalar, kolonlar, bir merdivenin basamağı ve yüzeyi), bir çoklu çizgi merdivenin sonraki adımları ve bir odanın ya da duvar zincirinin eksik kenarı. {{cmd:LINE}} ya da {{cmd:PLINE}}'ın ortasında hayalet **sonraki noktadır**: merdivenin bir sonraki adımı (basamak, yüzey, basamak…), bir dikdörtgenin dördüncü köşesi, onu kapatan nokta ya da bir adım daha. İmleci yakına getirin ve sanki oraya tıklamış gibi **Tab**'a basın; devam edin ya da Enter'a basın. Bu bilgisayarda kurallarla, model olmadan hesaplanır.

### AUTOSHEET

Takma ad: `ASH`. Kendi kendine düzen oluşturan sayfalar. {{cmd:AUTOSHEET}}, çizimin parçalarını alır (adlandırılmış görünümleriniz, ya da modelin ayrı parçaları, ya da tüm model), bir kâğıt boyutu seçer (ya da verdiğiniz), her parçaya standart bir ölçek verir (hepsi için tek bir ölçek ya da her birinin alabildiği en büyük) ve görünümleri yeni sayfalarda satırlar halinde, her birinin altında bir künye ve bir yazı (ad ve ölçek) ile yerleştirir. Tek bir sayfaya sığmayan bir şey kendi sayfasını alır. Tek bir geri al adımı. Bu bilgisayarda kurallarla, model olmadan hesaplanır.

### PHOTOSKETCH

Takma ad: `PSK`. Eskiz fotoğrafını çizime çevirir. Bir kâğıda elle çizilmiş bir eskizin bir fotoğrafını (JPEG, PNG ya da TIFF) seçin. {{cmd:PHOTOSKETCH}} kâğıdın dört köşesini bulur, perspektifi düzeltir, adını verdiğiniz kâğıt boyutunu (`Kâğıt`, ya da en yakın standart olanı) ve eskizin `Ölçeğini` (1 : n) alır, sonra kalem çizgilerini doğru ve yaylara ve daireye çevirir, her kalem rengi (siyah, kırmızı, mavi, yeşil) için bir katman ile. Kâğıdın kenarını bulamazsa tüm fotoğrafı sayfa olarak alır ve bunu söyler. Yazılar dışarıda bırakılır. Tek bir geri al adımı. Klasik görüntü işleme ile bu bilgisayarda yapılır, model yok, hiçbir şey gönderilmez. Ayrıca taranmış çizim komutlarına bakın.

### AUTODIM

Takma ad: `ADIM`. Kurallara göre otomatik ölçülendirme. {{cmd:AUTODIM}}, seçili nesneleri (ya da tüm çizimi) düzey ve düşey kenarlarından ölçülendirir: seçtiğiniz kenarlar boyunca bir ölçülendirme zinciri (`Kenarlar`), dışında tek bir genel ölçülendirme, her açıklığın genişliği (aynı doğrultudaki duvar çizgileri arasındaki boşluk), her delik boyutu için bir çap ve `Izgara` ile ızgara çizgileri arasındaki aralık. Zaten var olan bir ölçülendirme yeniden yapılmaz. Tek bir geri al adımı. Bu bilgisayarda kurallarla, model olmadan hesaplanır.

### GRIDMOVE

Takma ad: `GM`. Bir ızgara çizgisini taşımak seti taşır. {{cmd:GRIDMOVE}}, bir ızgara çizgisini (adı ızgara ya da eksen diyen bir katmanda bir çizgi) ve ona bağlı olanları taşır: çizgiye bir ucu değen duvarlar onu izlemek için gerilir, boyunca olan duvarlar bütün olarak taşınır, kolonlar (çizgi üzerindeki blok başvuruları ve daireler), balonu ve etiketi taşınır ve üzerindeki noktaları olan ölçülendirmeler yeni aralığı ölçer. İki nokta (yalnızca çizgiyi kesen kısım sayılır) ya da `Uzaklık` verin. Tek bir geri al adımı her şeyi geri alır. Bu bilgisayarda kurallarla yapılır.

### DETAILS

Takma ad: `DET`. Sizi bulan detaylar. {{cmd:DETAILS}}, firmanızın kendi detaylarını tutar: `Ekle`, bu çizimin bir bloğunu listeye koyar; `Listele` ve `Kaldır` onu yönetir; `Bul`, seçili (ya da son çizdiğiniz) şey için onları, katmanlarındaki kelimelere, blok adlarına, taralama desenlerine ve notlara göre, her detayın adı ve notlarıyla karşılaştırarak sıralar; böylece bir pencere başlığı sizin pervaz kaplamanızı bulur. Yerleştirmek için bir numara ve bir nokta seçin. `Öneri` açıkken (ayrıca Ayarlar › CadCraft), bir detayla eşleşen bir şeyi seçmek durum çubuğunda bir satır yazar. Liste bu tarayıcıda, bu bilgisayarda tutulur ve arama bu listede yapılır. `Paylaş` onu Belgeler klasörünüze de koyar (`.cadcraft/firm-details.json`, her blokun çizimiyle): `Çek` ekibinizde olup sizde olmayanları ekler, `Gönder` sizde olup onlarda olmayanları ekler, `İkisi` ikisini de yapar ve hiçbir taraftan hiçbir şey silinmez. Önce Belgeler klasörünü açın ({{cmd:DOCUMENTS}}); o klasör bir Takım Bulut Planı klasörü ise tüm ekip tek bir liste paylaşır. Kitaplık panelindeki bir detay öğesinin **Firmamın detaylarına ekle** düğmesi onu aynı listeye koyar. Bu bilgisayarda kelimelerle hesaplanır, model yok.

### SKETCHFIX

Takma ad: `SKF`. Kalem eskizleri kesin geometri olur. Seferde bir serbest el vuruşu basıp sürükleyin (kalem, fare ya da parmak), sonra Enter. Her vuruş bir doğru, daire, yay, dikdörtgen ya da çoklu çizgi olarak okunur: neredeyse yatay ve düşey doğrular tam yatay ve düşey yapılır, kapalı yuvarlak bir vuruş bir daire olur, dört dik açılı köşesi olan kapalı bir vuruş bir dikdörtgen olur ve vuruşların uçları bir araya ve çizimdeki uçlara çekilir. Tek bir geri al adımı. Bu bilgisayarda kurallarla, model olmadan hesaplanır.

### SCANATTACH ve taranmış çizim komutları

Takma adlar: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}'in takma adı yoktur. Bir resim üzerinde çalışırlar, her biri tek bir geri al adımı. {{cmd:SCANATTACH}} bir PNG, JPEG, TIFF (bir sayfa ya da hepsi) ya da bir resim olan bir PDF sayfası ekler. {{cmd:SCANSCALE}} sayfayı seçilen iki nokta ve gerçek uzaklıkla ölçekler. {{cmd:SCANALIGN}} onu iki noktaya taşır ve döndürür (`Sayfayı sığdırmak için ölçekle` Evet/Hayır). {{cmd:SCANDESKEW}} sayfanın uzun çizgilerinin açısını gösterir ve siz `Kabul et` ya da bir `Değer` verdiğinizde sayfayı döndürür. {{cmd:SCANCLEAN}} onu siyah beyaz yapar (`Eşik` Otomatik/Uyarlanabilir/Seviye, `Lekeler`) ve `Çalıştır`. {{cmd:SCANCROP}} bir pencereyi tutar. {{cmd:SCANERASE}} bir `Dikdörtgen`, `Çokgen` ya da `Kement` siler. {{cmd:SCANTRACE}} doğru ve yayları yeni bir katmana izler (`Tolerans`, `Pencere`, `Yaylar`, `Kalanlar`, `Çalıştır`) ve neyi bulduğunu ve neyi raster olarak bıraktığını bildirir. {{cmd:SCANINFO}} özgün dosyayı ve adımları listeler. {{cmd:RASTERSNAP}} taranmış sayfaların çizgilerine yakalamayı Açık ya da Kapalı yapar. Bkz. taranmış çizimler ve izleme konusu.

### REGEN ve REGENALL

Takma adlar: `RE` {{cmd:REGEN}} için, `REA` {{cmd:REGENALL}} için. Ekrandaki çizimi çizimden yeniden oluşturur: {{cmd:REGEN}} baktığınız sekmeyi (bir sayfada, görünüm pencerelerinin gösterdiği modeli de), {{cmd:REGENALL}} her sekmeyi, her bölünmüş ekran bölmesini ve her açık çizimi. Ölçekli ya da çok büyük bir değişiklikten, ya da bir asistan çizimi düzenledikten sonra görüntü eski görünürse kullanın; çizim kendisi değişmez, bu yüzden geri alınacak bir şey yoktur.

### NAMEDVIEW

Takma adlar: `NV`, `VIEWS`. `Bir seçenek girin [?/Geri yükle/Kaydet/Pencere/Sil] <Geri yükle>`, sonra görünümün adı. `K` ekrandaki görünümü, `P` seçtiğiniz bir pencereyi kaydeder, `G` kaydedilmiş bir görünümü gösterir, `S` birini siler, `?` bu sekmenin görünümlerini listeler. Var olan bir adın altına kaydetmek onu değiştirir; her değişiklik tek bir geri al adımıdır. Görünümler kaydedildikleri sekmeye aittir. DWG ve DXF dosyaları onları tutar (VIEW tablosu); bir sayfanın görünümleri ilk sayfaya döner, çünkü dosya hangisi olduğunu söylemez.

### UNDO ve REDO

Takma ad: `U` {{cmd:UNDO}} için; {{cmd:REDO}}'nun takma adı yoktur. Ayrıca {{key:Mod+Z}} ve {{key:Mod+Y}}.

### LAYER

Takma ad: `LA`. {{ui:Katmanlar}} paneline gider.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Yeni nesneler için çizgi tipi girin` — `ByLayer` (Katmana göre), `ByBlock` (Bloğa göre) ya da bir ad (`?` listeler: Continuous, çizimin kendi çizgi tipleri ve DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, `2` (yarı) ve `X2` (iki katı) boyutlarıyla). {{cmd:LWEIGHT}} (`LW`): yeni nesneler için mm cinsinden çizgi kalınlığı, ya da `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): çizimin çizgi tipi ölçeği (geri alınabilir). {{cmd:LWDISPLAY}} (`LWT`): `Çizgi kalınlıklarını göster [AÇIK/KAPALI]` — durum çubuğundaki {{ui:LWT}} düğmesiyle aynı. Bkz. [Çizgi kalınlıkları ve çizgi tipleri](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Yeniden adlandırılacak nesne türünü girin [Katman (LA)/Blok]`, `Eski adı girin`, sonra yeni ad; nesneler ya da başvurular izler. {{cmd:LAYMRG}}: birleştirilecek katmandaki nesneyi seçin ya da `[Ad]`, Enter'a kadar; sonra `Hedef katmandaki nesneyi seçin ya da [Ad]` ve `E`. {{cmd:LAYDEL}}: `Silinecek katmandaki nesneyi seçin ya da [Ad]`, sonra `E`: katman ve üzerindeki her nesne gider (0 katmanı, DEFPOINTS ya da geçerli katman değil). Her biri için tek bir geri al adımı. Bkz. [Katmanlarla çizimi düzenleyin](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Nesneleri seçerek katmanlar; ayrıca {{ui:Katmanlar}} panelinin {{ui:Araçlar}} menüsünde. {{cmd:LAYISO}}: `Yalıtılacak katman(lar)daki nesneleri seçin`, sonra {{key:Enter}}: diğer her katman kapanır. {{cmd:LAYUNISO}} onları yeniden açar. {{cmd:LAYOFF}} ve {{cmd:LAYFRZ}}: `Kapatılacak (ya da dondurulacak) katmandaki bir nesneyi seçin`, tekrar tekrar; `U` son birini geri alır, {{key:Enter}} bitirir. {{cmd:LAYMCUR}}: `Katmanı geçerli olacak nesneyi seçin`. {{cmd:LAYON}} her katmanı açar, {{cmd:LAYTHW}} her katmanı çözer. Her komut tek bir geri al adımıdır. Bkz. [Katmanlarla çizimi düzenleyin](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} boş bir çizim başlatır ve {{cmd:OPEN}} bir DWG ya da DXF açar; her biri çizimin üstünde kendi sekmesinde (dokunulmamış bir yeni çizim yerine kullanılır). Kaydedilmemiş değişiklikleri olan bir sekmeyi kapatmak önce sorar. Bkz. [Ekranı bölün](topic:split-screen).

{{cmd:SAVE}} (takma ad `QSAVE`, ayrıca {{key:Mod+S}}) çizimi kendi biçiminde indirir: bir DWG'den açıldıysa DWG, bir DXF'ten açıldıysa DXF. Yeni bir çizim, bu tarayıcıda Farklı kaydet'te en son seçilen biçimi kullanır, yoksa DWG.

{{cmd:SAVEAS}} (ayrıca {{key:Mod+Shift+S}}) {{ui:Bir kopyayı şöyle kaydet}} iletişim kutusunu açar: {{ui:DWG}} (ve {{ui:Sürüm}}ü), {{ui:DXF R12}} ya da {{ui:DXF 2000}} seçin, sonra {{ui:Kaydet}}. Seçim bu çizim için ve bu tarayıcıdaki yeni çizimler için geçerli kalır.

{{cmd:DXFOUT}} her zaman bir DXF R12 kopyasını indirir; {{cmd:SAVE}}'in kullandığı biçimi değiştirmeden.

Bkz. [Dosyalar: neyi açar, neyi kaydeder](topic:files#saving).

### TOUR

Takma ad: `TUTORIAL`. Altı adımlık ilk çizim turunu yeniden başlatır. Bkz. [Başlarken](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Takma ad: `TBDOCK`. `Araç çubuğu konumu [Üst/Alt/Sol/Sağ]`. Bkz. [Ayarlar](topic:settings#toolbar-position).

### COMMANDLINE

Takma ad: `CMDLINE`. `Komut satırı [Altta yerleştirilmiş/Yüzen/Tek satır/Gösterilen geçmiş satırları/Komut geçmişi (F2)]`: komut satırını yerleştirir ya da yüzdürür, tek satır yapar, gösterilecek geçmiş satırı sayısını sorar (0 ile 12 arası) ya da geçmişi açar. Bkz. [Ayarlar](topic:settings#command-line).

### TOPAREA

`Üst alan [Standart/Kompakt]`: çizimin üstündeki çubuklar eskisi gibi ya da kompakt. Bkz. [Ayarlar](topic:settings#top-area).

### POLARANG

`Kutupsal açı adımını derece cinsinden girin <90>`: {{ui:Kutupsal}} izlemenin hizalandığı adım (0'dan büyük, 180'e kadar). Bu tarayıcıda tutulur.

### UNITS

Takma ad: `UN`. Uzunlukların nasıl yazıldığı ve girildiği.

- `Uzunluk biçimini girin [Bilimsel/Ondalık/Mühendislik/Mimari/Kesirli] <geçerli>`
- Mimari ve Kesirli: `Gösterilecek en küçük kesrin paydasını girin (1, 2, 4, 8, 16, 32, 64, 128 ya da 256)`. Diğerleri: `Ondalık basamak sayısını girin (0 ile 8 arası)`.

Yeni ölçülendirmeler ona uyar. Tek bir geri al adımı. {{ui:Geçerli ayarlar}} içindeki {{ui:Uzunluk biçimi}} ve {{ui:Hassasiyet}} ile aynıdır; bkz. [Fit ve inç](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Takma ad: `GDS`. Bir IC yerleşimini (bir GDSII akış dosyası) görüntüleyin: laboratuvar denemesi; yalnızca görüntüleme ve ölçüm için.

- Bir dosya seçici bir `.gds` dosyası alır; birden fazla üst hücre varsa `Çizilecek üst hücreyi girin`.
- Her katman ve veri türü bir çizim katmanı olur (`GDS 1`, `GDS 2/5`); başvurular ve diziler düz, dosyanın kullanıcı biriminde (genellikle mikrometre) yerleştirilir. Tek bir geri al adımı. Hiçbir şey simüle edilmez ya da denetlenmez ve dosya geri yazılmaz.

### DIAGRAM

Takma ad: `TEXTDIAGRAM`, `T2D`. Metinden bir diyagram.

- Bir kutu metni alır (ya da komut satırında `;` ile ayrılmış tek bir satır): bir Mermaid akış şeması, bir PlantUML bileşen diyagramı, D2 ya da bir kaynaktan-hedefe listesi.
- `Diyagramın sol üst köşesini belirtin`, sonra `Metin yüksekliğini belirtin`.

Bloklar ve bağlantılar `Diagram` katmanında sıradan nesnelerdir ve bittiğinde seçilir. Tek bir geri al adımı. Bkz. [Metinden bir diyagram çizin](topic:text-to-diagram).

### OLELIST

Takma ad: `OLES`. Bir DWG'nin taşıdığı, CadCraft'ın kendisi yerleştiremediği OLE nesneleri.

- Her birini listeler: numara, tür, boyut, bir resim kaydedip kaydetmediği.
- `Bir seçenek girin [Yerleştir/Çıkış] <Çıkış>`: Yerleştir numarayı, sol alt köşeyi ve genişliği ister ve resimli bir çerçeve çizer. Tek bir geri al adımı; tutulan nesne değişmez. Bkz. [Resimler](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Takma ad: `SHX`. Kendi SHX yazı tipleriniz.

- `Bir SHX yazı tipi seçeneği girin [Klasör/Dosyalar/Liste/Kaldır/Ters/Temizle] <Liste>`

{{ui:Klasör}} bir klasördeki her `.shx` dosyasını okur (CadCraft Studio; her başlangıçta yeniden), {{ui:Dosyalar}} seçtiğiniz dosyaları alır (tarayıcı), {{ui:Ters}} bir yazı tipinin harflerini sondan başa yerleştirir. Yüklü bir yazı tipini adlandıran metin stilleri onunla çizilir. Bkz. [Kendi SHX yazı tiplerinizle metin çizin](topic:shx-fonts).

### LIMITS

Çizimin ne kadar büyük olması amaçlandığı.

- `Sol alt köşeyi belirtin ya da [AÇIK/KAPALI] <geçerli>`: bir nokta, `AÇIK` ya da `KAPALI`.
- `Sağ üst köşeyi belirtin <geçerli>`.

Izgara sınırları doldurur, {{cmd:ZOOM}} Tümü onları gösterir ve sınırlar AÇIKken dışarıdaki bir nokta reddedilir (`**Sınırların dışında**`). Tek bir geri al adımı; DWG ve DXF'te kaydedilir. Bkz. [Çizim sınırlarını belirleyin](topic:drawing-limits).

### AUNITS

Takma ad: `ANGUNITS`. Açıların nasıl gösterildiği ve yazıldığı.

- `Açı biçimini girin [Ondalık derece/Derece-dakika-saniye/Pusula yönleri] <geçerli>`
- `Ondalık basamak sayısını girin (0 ile 8 arası)`, ya da diğer ikisi için `Hassasiyet girin` (0 derece, 2 dakika, 4 saniye, saniyenin 5 ila 8 ondalığı).

Tek bir geri al adımı; DWG ve DXF'te kaydedilir. {{ui:Geçerli ayarlar}} içindeki {{ui:Açı biçimi}} ile aynıdır. Bkz. [Pusula yönlerini ve açıları yazın ve gösterin](topic:bearings-and-angles).

### APPLOAD

Takma ad: `AP`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Uygulama yükle…}}. {{ui:Uygulamaları yükle}} iletişim kutusu: `.lsp` rutinlerini ve `.dcl` iletişim kutusu dosyalarını yükler, boşaltır, geçmişten yeniden yükler ve Başlangıç Paketi. Bir rutinin `(defun c:NAME …)` komutları diğer komutlar gibi çalışır. Bkz. [Uygulamaları yükleyin](topic:load-applications) ve [LISP rutinlerini çalıştırın](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:Takma adları düzenle…}}) takma ad dosyanızı (`ALIAS, *COMMAND` satırları) açar; {{ui:Kaydet}} onu uygular. {{cmd:REINIT}} onu yeniden uygular. Bkz. [Komut takma adlarını düzenleyin](topic:command-aliases).

### OPTIONKEYS

Takma ad: `OPTKEYS`; ya da {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Seçenek harfleri}} › {{ui:Düzenle…}}. Seçenek harfleri dosyanızı (`KOMUT.SEÇENEK, HARFLER` satırları, örneğin `ARRAY.PO, P`) açar; {{ui:Kaydet}} onu uygular ve {{cmd:REINIT}} onu yeniden uygular. Bkz. [Komut seçeneklerine kendi harflerinizi verin](topic:option-letters).

### LISPEDIT

Takma ad: `VLIDE`; ya da {{ui:Görünüm}} › {{ui:Daha fazla}} › {{ui:LISP düzenleyicisi}}. Çizimin yanında açık kalan bir pencere olan LISP düzenleyicisini açar.

- Metin: satır numaraları, imlecin altındaki parantezin eşi işaretli (eşi yoksa kırmızı), {{key:Enter}} yeni satırı açık parantezin altında girintiler, {{key:Tab}} iki boşluk yazar, {{key:Esc}} metinden çıkar.
- {{ui:Çizime yükle}} ({{key:Ctrl+Shift+Enter}}): her formu okur, {{cmd:APPLOAD}}'un dosyayla yaptığı gibi, ve onun `c:` komutlarını oluşturur. Dosya {{cmd:APPLOAD}}'un listesinde görünür.
- {{ui:Seçimi çalıştır}} ({{key:Ctrl+Enter}}): seçili formları ya da imlecin içinde olduğu formu değerlendirir.
- {{ui:Durdur}}: çalışan bir rutini sonlandırır.
- {{ui:Konsol}}: rutinin yazdırdığını ve her hatayı satır numarasıyla gösterir; bir hataya tıklayarak oraya gidin. Metin bir seferde bir üst düzey form olarak çalıştırılır, bu yüzden satır formun satırıdır, ya da içinde hatanın adını verdiği işlevi çağıran satır.
- {{ui:Yeni}}, {{ui:Aç}}, {{ui:Kaydet}} ({{key:Ctrl+S}}): bir `.lsp` dosyası. Metin bu tarayıcıda da tutulur, bu yüzden pencereyi kapatmak onu kaybettirmez.
- Metnin yanında: rutinin tanımladığı işlevler, bu LISP'in henüz sahip olmadığı ve çağırdığı işlevler, içinde tanımlı olmayan ve yerleşik olmayan çağırdığı işlevler ve yerleşik olanların ve olmayanların tam listeleri.

Kapanmamış bir parantezi ya da bitmeyen bir dizgiyi içeren bir metin çalıştırılmaz: satır adlandırılır. Adım adım hata ayıklayıcı, kesme noktası ya da izleme penceresi yoktur. Bkz. [LISP rutinlerini çalıştırın](topic:run-lisp).

### HELP

Takma ad: `?`. Her komutu, takma adlarını ve tek satırlık bir açıklamasını komut satırı geçmişinde yazdırır. Bu yardımı açmaz: bunun için {{key:F1}} tuşuna basın ya da {{ui:Yardım}} düğmesine tıklayın.

## Seçim istemi: nesneleri seçin

Herhangi bir `Nesneleri seçin` isteminde: nesnelere tıklayın, soldan sağa pencereler ve sağdan sola kesişenler iki tıklamayla çizin ya da basılı tutup bir kement sürükleyin ({{key:Space}} sürüklerken: pencere, kesişen, çit), kaldırmak için {{key:Shift}}+tıklayın ve bitirmek için {{key:Enter}}'a basın. Ayrıca `ALL` (her şey), `L` (son nesne), `P` (Önceki: son komutun kullandıkları), `F` (Çit: bir noktalar çizgisinin kestiği nesneler; `U` bir noktayı geri alır), `W` (Pencere), `C` (Kesişen), `R` (Kaldırma kipi: tıklamalar nesneleri çıkarır; istem `Nesneleri kaldır` der) ve `A` (Yeniden ekle) yazabilirsiniz. `?` bunları listeler. İstemde gösterilmezler. Üst üste binen nesnelerde {{key:Tab}} sonrakini vurgular; onu seçmek için tıklayın. Bkz. [Nesneleri seçin](topic:select-objects).

### ACCESS

Takma ad: `AX`. Görmeden çizim. {{cmd:ACCESS}}, Erişimi açar ya da kapatır (`Açık`, `Kapalı`) ve yakalama seslerini (`Ses`) ve sesli komutları (`Ses`) değiştirir; önce durumunu söyler. Erişim açıkken her komut ve sonuç ekran okuyucunuz aracılığıyla seslendirilir ve çizim alanında bir klavye imleci olur. Yardım konusu "Görmeden çizim" tuşları anlatır.

### DESCRIBE

Takma ad: `DESC`. Çizimin neler içerdiğini söyler: kaç nesne, hangi türde, ne kadar büyük, kaç katman, neyin seçili olduğu. Yalnızca okur; hiçbir şeyi değiştirmez.

### WHEREAMI

Takma ad: `WHERE`. İmlecin nerede olduğunu çizimin birimleriyle söyler.

### NEARBY

İmlecin yakınında neyin olduğunu, en yakından başlayarak söyler; her birinin uzaklığı ve bulunduğu taraf ile.

### SAYSEL

Seçili olanı söyler, nesne başına bir cümle (doğrunun uzunluğu, uçları ve açısı; dairenin yarıçapı ve merkezi; metin yazıldığı gibi).

### VOICE

Sesli komutları açar ya da kapatır. Bu bilgisayarda tanınırlar; tarayıcının bunu yapamadığı yerde, Ayarlar'da tarayıcının çevrimiçi hizmetini seçmediğiniz sürece ses kapalı kalır.

### TOUCHCROSSHAIR

Takma ad: `TCX`. Parmakla çizim için ofset artı imleci, böylece parmak ucu seçtiğiniz noktayı kapatmaz. Açıkken, çizimdeki tek bir parmak seçmez: parmağın üstünde ve bir yanında duran bir artı işaretini hareket ettirir. Object snap'ler ve izleme artı işaretini izler. Parmağı kaldırmak hiçbir şey seçmez ve artı işaretini olduğu yerde bırakır. Seçmek için çizimin köşesindeki {{ui:Tıkla}} düğmesine basın ya da ikinci bir parmakla çizimde herhangi bir yere dokunun. Diğer parmağı hareket ettirirken {{ui:Tıkla}}'yı basılı tutun (bir seçim penceresi, bir kement, bir tutamaç için sürüklemek). Parmak sabit basılı tutulursa ya da {{ui:Enter}} düğmesine basılırsa Enter olur. İki parmak yine kaydırır ve yakınlaştırır. Alt kenara ve uzak yan kenara yakın artı işareti parmağa yaklaşır, böylece çizimin her parçasına ulaşılabilir. Kalem ve fare her zaman doğrudan seçer.

{{cmd:TOUCHCROSSHAIR}} durumunu söyler ve `AÇIK`, `KAPALI`, `Otomatik` (yalnızca parmak tek işaretçi olduğunda açık, yani fareli bir bilgisayarda kapalı), `Mesafe` (artı işaretinin parmaktan ne kadar uzakta duracağı, 24 ile 240 piksel) ya da `Taraf` (`Sol`: yukarı ve sola, sağ el için; `Sağ` sol el için; düğmeler diğer köşeye geçer) sorar. Aynı seçenekler Ayarlar › CadCraft'ta da vardır ve dokunmatik ekranlı bir cihazda durum çubuğunda bir {{ui:Ofset artı imleci}} anahtarı bulunur. Seçimler bu tarayıcıda tutulur.

### WHOHAS

Bir çizimi kimin açtığını söyler. Bir bilgisayarda CadCraft Studio'da, bir DWG ya da DXF açmak yanına küçük bir kilit dosyası yazar (`Plan.dwg.cclock`: kim, ne zamandan beri, hangi sürüm), çizim açık olduğu sürece her dakika yeniler ve çizim kapatıldığında siler. Başka birinin açtığı bir çizimi açmak kimin ve ne zamandan beri açtığını söyler ve {{ui:Salt okunur aç}} (Kaydet o zaman yeni bir ad ister), {{ui:Yine de aç}} (öteki kişi bir sonraki yenilemesinde haberdar edilir) ya da {{ui:İptal}}'i sunar. Başkasının açık olduğu bir dosyanın üzerine kaydetmek önce sorar. Beş dakikadır yenilenmemiş bir kilit eski sayılır: öteki kopya kaydetmeden kapanmıştır ya da bilgisayar uykudadır.

{{cmd:WHOHAS}} `Geçerli` (açık çizim), `Dosya` (birini seçin), `Klasör` (bir klasör seçin: içinde bir yerde açık olan her çizim listelenir), `Yol` (tam bir yol yazın) ya da `Ad` (başkalarının gördüğü ad; oturum açtığınızda hesap adınız) sorar. Studio yalnızca sizin seçtiğiniz klasörlere erişebilir: hiç seçilmemiş bir klasörden açılmış bir çizim için bunun açık olduğunu not edemeyeceğini bir kez söyler; `Klasör` klasörü seçer ve oradan itibaren kilitler çalışır. Kilit insanlar için bir nottur, bir engel değildir: başka bir program yine de dosyayı yazabilir. Bir tarayıcıda bakılacak klasör yoktur ve komut bunu söyler.

### OVERKILL

Yinelenen nesneleri siler ve üst üste binen doğru ve yayları düzenler; çift çizgilerle gelen çizimler için. `Temizlenecek nesneleri seçin`, {{key:Enter}}, sonra gösterilen ayarlarla temizlemek için yeniden {{key:Enter}}, ya da önce birini değiştirin:

- `Tolerans`: iki koordinatın aynı sayılması için ne kadar yakın olmaları gerektiği (başlangıçta 0,000001; 0 tam olarak aynı demektir).
- `Yoksay`: aynı olan iki nesne arasında farklı olabilecek özellikler. Bir adı yazarak değiştirin: `Renk`, `KAtman`, `ÇTipi`, `ölçekÇ`, `ÇKalınlık`, `KALınlık`, `ŞEffaflık`, ya da `Hiçbiri` / `Tümü`. Bittiğinde {{key:Enter}}.
- `Örtüşme`: açık ya da kapalı. Açıkken, tek bir düz çizgi üzerindeki üst üste binen doğrular tek bir doğru olur (bir başka doğrunun içindeki bir doğru basitçe silinir) ve aynı daire üzerindeki üst üste binen yaylar tek bir yay olur; tam bir tur tamamlayan yaylar daire olur ve üzerinde yatan bir yay silinir.
- `Uçlar`: açık ya da kapalı. Açıkken, tek bir düz çizgi üzerindeki doğrular ve aynı daire üzerindeki yaylar yalnızca uç uca değen parçalar tek bir parça olur.

Her nesne türü yinelemeler için denetlenir: iki nesne, geometrileri tolerans içinde aynıysa ve katmanları, renkleri, çizgi tipleri, çizgi tipi ölçekleri, çizgi kalınlıkları, kalınlıkları, saydamlıkları ve yükseklikleri eşleşiyorsa (yoksaydıklarınız çıkarılarak) yinelemedir. Doğrular ve açık çoklu çizgiler ters yönde çizilmiş olsalar da eşleşir. Çizim sırasında ilk nesne kalır ve kendi özelliklerini korur. Komut kaç nesnenin denetlendiğini ve silindiğini bildirir: yinelemeler, birleştirilen üst üste binen parçalar, uç uca birleştirilen parçalar. Bir {{cmd:UNDO}} hepsini geri alır. Ayarlar, çizim penceresini kapatana kadar geçerli kalır.

Dokunmaz: kilitli katmanlardaki nesneleri ve gizli nesneleri. Yüksekliği (Z) olan doğruları birleştirmez (tam yinelemeleri yine de gider) ve bir çoklu çizginin içindeki parçalara dokunmaz (incelmezler), bir çoklu çizginin bir parçası üzerindeki bir doğruya ve ters yönde çizilmiş kapalı bir çoklu çizgiye de dokunmaz.

### DRAWORDER

Hangi nesnelerin önde çizileceğini değiştirir. `Yeniden sıralanacak nesneleri seçin`, {{key:Enter}}, sonra `Nesnelerin üstünde`, `Nesnelerin altında`, `Önde` ya da `Arkada` ({{key:Enter}} = `Arkada`). `Nesnelerin üstünde` ve `Nesnelerin altında` referans nesneleri ister: seçim, onlardan en öndekinin hemen önüne ya da en arkadakinin hemen arkasına gider. Seçili nesneler kendi aralarındaki sıralarını korur. Tek bir geri al adımı. Sıra DWG ve DXF'te çizimle birlikte kaydedilir; nesnelerin yazıldığı sıra olarak.

Ekranda her nesne, çizimin sırasında çizilir; dosyayı açan diğer programların çizdiği gibi: katı bir taralama, geniş bir çoklu çizgi ya da bir metin maskesi arkasındaki çizgileri ve metni örter, ve önündeki her şey onu örter. Bir çizgi bir metinle kesiştiğinde ikisi de görünür. Resimler ve eklenmiş PDF sayfaları çizgilerin altında kalır. Dolguların ve çizgilerin üst üste bindiği ve 256'dan fazla kez değiştiği çok büyük bir çizimde, ilk 256'sı sıralarını korur ve kalanlar dolgularını çizgilerin altına çizer; böylece yeniden çizim hızlı kalır.

### TEXTTOFRONT

Metni, ölçülendirmeleri ve belirtme çizgilerini açık alanda diğer her şeyin önüne getirir: `Metin`, `Ölçülendirmeler`, `Belirtme çizgileri` ya da `Tümü` ({{key:Enter}} = `Tümü`). Tek bir geri al adımı. Hiçbiri yoksa ya da zaten en öndeyse bunu söyler.

### HATCHTOBACK

Açık alandaki her taramayı diğer her şeyin arkasına gönderir, böylece kaydedilmiş dosyada dolgular çizgileri ve metni örtmez. İstem yoktur. Tek bir geri al adımı.

### ISOLATEOBJECTS

Takma ad: `ISOLATE`. Yalnızca seçili nesneleri gösterir: bu alandaki diğer her şey UNISOLATEOBJECTS'e kadar görüş dışına çıkar. {{cmd:LAYISO}}'dan farklı olarak, katmanları ne olursa olsun seçtiğiniz nesneler üzerinde çalışır ve hiçbir katmanı değiştirmez. Gizli nesneler çizilmez, seçilmez, yakalanmaz, yakınlaştırılmaz ya da basılmaz ve `Tümü` alan komutlar onları atlar. Nesneler yalıtılmışken çizdikleriniz her zamanki gibi görünür.

Bu yalnızca oturum içindir: çizimle birlikte hiçbir şey kaydedilmez, bir geri al adımı değildir ve çizimi yeniden açmak her şeyi gösterir. Nesneler gizliyken durum çubuğu sayılarıyla bir düğme gösterir; onları yeniden göstermek için tıklayın.

### HIDEOBJECTS

Seçili nesneleri UNISOLATEOBJECTS'e kadar gizler. ISOLATEOBJECTS ile aynı kurallar: yalnızca oturum için, kaydedilmez, bir geri al adımı değildir.

### UNISOLATEOBJECTS

Takma ad: `UNISOLATE`, `UNHIDE`. ISOLATEOBJECTS ya da HIDEOBJECTS ile gizlenmiş her nesneyi yeniden gösterir ve kaçının geri geldiğini söyler.

### LAYLOCKFADE

Kilitli katmanlardaki nesnelerin nasıl göründüğünü ve bir tıklamanın onlara ulaşıp ulaşmayacağını ayarlar. Mevcut durumu söyler, sonra şunları alır:

- 0 ile 90 arası bir sayı: yüzde olarak soluklaşma miktarı (başlangıçta 50). 0 soluklaşmayı kapatır.
- `AÇIK` ya da `KAPALI`: soluklaşma açık ya da kapalı, miktarı koruyarak.
- `Seç`, sonra `Evet` ya da `Hayır`: komut çalışmazken, bir tıklama kilitli katmanlardaki nesneleri seçebilir mi? `Hayır` (varsayılan): hiç seçilemezler. `Evet`: bir tıklama ya da bir pencere onları seçer ki Özellikler gösterebilsin; yine de değiştirilemezler ve bir komutun kendi `Nesneleri seçin` isteği onları asla almaz.

Nesne yakalamaları kilitli katmanlardaki nesneleri her iki durumda da bulur. Basımlar asla soluklaşmaz. İki ayar da çizimin değil, sizin ayarlarınızdır ve Ayarlar altında {{ui:Kilitli katmanlar}} bölümünde de bulunur.

### BURST

Blok başvurularını patlatır ve özniteliklerinin dediğini korur. `Patlatılacak blok başvurularını seçin`, {{key:Enter}}: her başvuru bloğun nesneleriyle değiştirilir ve görünür her önceliğin değeri, o özniteliğin kendi katmanında düz metin olur (0 katmanındaki bir öznitelik başvurunun katmanına gider; bloğun 0 katmanındaki diğer nesneleri gibi). Görünmez öznitelikler atılır. Bloğun içindeki bir blok bir blok başvurusu olarak kalır. Tek bir geri al adımı; patlatılan başvuruları ve metne dönüştürülen öznitelik değerlerini bildirir.

Bağlı bir çizimi adıyla reddeder (önce bağlayın ya da {{cmd:NCOPY}} ile kopyalayın) ve seçilen diğer nesnelere dokunmaz. Blok başvuruları için {{cmd:EXPLODE}} aynı nesneleri verir; {{cmd:BURST}} yalnızca blok başvurularını alır ve öznitelik metnini sayar.

### TXT2MTXT

Takma ad: `T2M`. Tek satırlık metinleri tek bir paragraf metninde birleştirir. `Birleştirilecek tek satırlık metni seçin`, {{key:Enter}}, sonra `Paragraf` (satırlar birbirine eklenir ve en geniş satırın genişliğinde kırılır) ya da `Satırlar` (her metin kendi satırı olarak kalır); {{key:Enter}} en son kullanılanı alır. Satırlar yukarıdan aşağıya, sonra soldan sağa, en üstteki metnin yönü boyunca sıralanır. Paragraf en üstteki metnin sol üst köşesinden asılır ve onun yüksekliğini, dönüşünü, stilini, katmanını ve rengini alır. Tek bir geri al adımı.

Zaten paragraf metni olan metin, boş metin ve seçimdeki diğer nesneler olduğu gibi bırakılır ve komut kaç tane olduğunu söyler.

### NCOPY

Bir blok başvurusundan ya da bağlı bir çizimden nesneleri, hiçbir şeyi patlatmadan çizime kopyalar. `Bir blok başvurusunun ya da bağlı bir çizimin içinde bir nesne seçin`: nesneleri seçtiğiniz yere en yakın nesne, nerede gösterildiyse oraya kopyalanır, kaç blok derinlikte olursa olsun; daha fazla seçin, sonra {{key:Enter}}. Sonra `Kopyaları taşımak için temel nokta`: {{key:Enter}} onları yerinde bırakır, ya da bir temel nokta ve ikinci bir nokta verin. Tüm komut tek bir geri al adımıdır.

Bir kopya gösterildiği katmanı alır: bir blokta 0 katmanındaki bir nesne, içinde durduğu başvurunun katmanına düşer ve ByBlock rengi o başvurunun rengi olur. Bağlı bir çizimden, `Plan|Walls` katmanı `Plan$0$Walls` olur (bağlantının verdiği ad), bağlı katmanın rengi, çizgi tipi ve çizgi kalınlığıyla yapılır. Bir özniteliğin değeri metin olarak kopyalanır. Kilitli katmanlardaki blok başvuruları seçilemez.

### FLATTEN

Seçili nesnelerin yüksekliğini (Z) ve kalınlığını 0 yapar. `Düzleştirilecek nesneleri seçin`, {{key:Enter}}. Seçimin kullandığı blok tanımlarının içindeki nesneleri de düzleştirir (ve bunların içindeki blokları); böylece o bloklara yapılan her başvuru değişir; bağlı çizimlere dokunulmaz. Tek bir geri al adımı; kaç nesnenin değiştiğini bildirir ve hiçbirinde yükseklik ya da kalınlık yoksa bunu söyler.

Bir 2B çizimde üçüncü boyutun CadCraft'ta ne tuttuğu şudur: daireler, yaylar, elipsler, noktalar, metin, blok başvuruları, taramalar, belirtme çizgileri ve çoklu çizgilerde bir yükseklik (kotları); bir doğrunun her ucunda bir yükseklik; ve doğrularda, dairelerde, yaylarda, çoklu çizgilerde, noktalarda ve metinde bir kalınlık; dosyada nasılsa öyle. {{cmd:FLATTEN}} tam olarak bunları temizler. 3B sekmedeki 3B modele, 3B yüzlere ya da katılara dokunmaz; eğik bir düzlemde çizilmiş bir nesne ise dosya açıldığında zaten çizim düzlemine getirilmişti.

### BREAKLINE

Kısaltılmış bir görünüm için kırılma simgeli bir doğru çizer. Geçerli boyutu ve uzantıyı söyler, sonra `Kırılma doğrusunun ilk noktası` (ya da önce değiştirmek için `Boyut` / `Uzantı`), `İkinci nokta` ve `Kırılma simgesinin yeri`: doğru boyunca tıklayın ya da orta için {{key:Enter}}. Sonuç, geçerli katmanda tek bir çoklu çizgidir: her noktanın uzantı kadar ötesine geçen doğru, boyutu kadar yüksek ve yarısı kadar uzun Z biçiminde bir çizgiyle.

`Boyut` ve `Uzantı` sizin ayarlarınız olarak hatırlanır (boyut, başlangıçta ölçülendirme metninin yüksekliğinin ve ölçülendirme ölçeğinin iki katıdır; uzantı boyutun yarısıdır). {{key:Enter}} komutu yineler.

### AUDIT

Açık çizimde hasarı arar ve onarır. {{cmd:AUDIT}}, modeldeki, sayfalardaki ve bloklar içindeki her nesneye ve katman tablosuna bakar ve bulduklarını türe göre listeler:

- sonlu olmayan ya da aşırı büyük sayılar;
- boyutu olmayan nesneler: uzunluğu olmayan bir doğru, yarıçapı olmayan bir daire, bir yeri olmayan bir çoklu çizgi, harfi ya da yüksekliği olmayan metin, sıfır ölçekli bir blok başvurusu;
- çizimde olmayan bir katmandaki nesneler; orada olmayan bir bloğa başvurular; çizimde olmayan metin ve ölçülendirme stil adları ve çizgi tipi adları;
- kendini içeren bloklar, doğrudan ya da diğer bloklar aracılığıyla;
- aynı kimliği, anahtarı ya da dosya tutamacını paylaşan nesneler;
- ölçüldükleri noktaları olmayan ölçülendirmeler ve kapalı bir dış hat olmayan taramalar.

Sonra `Onarılsın mı? [Evet/Hayır]` sorar. `Hayır` hiçbir şeyi değiştirmez. `Evet` her şeyi tek bir geri al adımında onarır: çizilemeyen şeyler kaldırılır (kötü sayılar, boyutsuzluk, eksik blok, bozuk ölçülendirme, kullanılabilir sınırı olmayan bir taralama, bir daire zincirini kapatan başvuru); eksik bir katman oluşturulur; bilinmeyen stil ve çizgi tipi adları varsayılanlara döner; paylaşılan bir anahtar değiştirilir. Kaç nesnenin silindiğini ve kaçının onarıldığını yazdırır. Aynı bulgular Sorunlar panelinde de görünür, her birinde kendi {{ui:Onar}} düğmesi ile.

Hiçbir şeyi reddetmez, ama yalnızca CadCraft'ın kendisinin çizdiklerini denetler: diğer programlar için tutulan veriler (3B katılar, OLE nesneleri) açılmaz.

### RECOVER

Hasarlı bir DXF ya da DWG açar. {{cmd:RECOVER}} dosyayı ister, dosyayı reddetmek yerine okunabilenleri okur, atladığı ya da varsaydığı şeyleri listeler, sonra {{cmd:AUDIT}}'in `Evet` ile yaptığı gibi çizimi denetler ve onarır.

- DXF: bir kod ve değer çiftinin parçası olmayan satırlar, çiftler yeniden hizalanana kadar atlanır; sonu olmayan bir bölüm kapatılır; kesilmiş bir dosya kesildiği yere kadar okunur; kesilmiş bir ikili DXF son tam değerine kadar okunur. Bir bölüm, bir blok ya da bir nesne hâlâ okunamazsa, dışarıda bırakılır ve adlandırılır; okuma onun ötesinde devam eder.
- DWG: kontrollerini geçemeyen ya da çözülemeyen nesneler dışarıda bırakılır ve kaybolan nesne listesi, nesne verisi gezilerek yeniden oluşturulur.

Diskteki dosya değişmez. Kurtarılan çizim kaydedilmemiş olarak açılır: yeni bir adla kaydedin. Hiçbir şeyin okunamadığı bir dosya nedeniyle birlikte reddedilir.

### LEGACYTEXT

Eski 8 bitlik Vietnamca yazı tipleriyle yazılmış metni Unicode'a çevirir. Kısa adlar `TEXTTOUNICODE` ve `VNTEXT`.

Eski Vietnamca çizimler metinlerini, yalnızca yazı tipinin Vietnamcaya çevirdiği Batı karakterleri olarak tutar: ABC yazı tiplerinde TCVN3 metni (`.VnTime`, `.VnArial` ve adları `H` ile biten büyük harfli yazı tipleri) ve VNI yazı tiplerinde VNI metni (`VNI-Times`). CadCraft böyle bir metni, çizim açılır açılmaz, metin stilinin, nesnenin ya da paragraf metni içindeki bir parçanın yazı tipine göre okuduğu gibi gösterir; dosya yine eski karakterleri tutar.

{{cmd:LEGACYTEXT}} her kodlamada kaç metin bulduğunu söyler ve `… Unicode'a çevrilsin mi?` diye sorar. `Evet` her birini yeniden yazar (model, sayfalar, bloklar, öznitelik değerleri ve tanımlar) ve metin stillerine bir Unicode yazı tipi verir (Times New Roman, Arial ya da Courier New, eski yazı tipinin türüne göre), tek bir geri al adımında. Paragraf metni içindeki biçimlendirme korunur.

Hiçbir metin bilinen bir yazı tipi kullanmadığında (yazı tipi adını kaybetmiş bir stil), `Seçili metinleri şöyle oku [Tcvn3/Vni/Hiçbiri]` sorar: kodlamayı seçin ve metinleri seçin. Zaten Unicode olan metne dokunulmaz. Ölçülendirme metni geçersiz kılmaları ve çoklu belirtme çizgisi metni dönüştürülmez.
