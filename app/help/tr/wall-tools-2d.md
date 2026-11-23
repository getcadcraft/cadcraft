---
title: 2B duvarlar için duvar biçimleri, kesimler, ofsetler ve kilitler
summary: Duvarları dikdörtgen, çokgen ve yay olarak çizin, bölün ve yeniden birleştirin, bir ölçüye göre taşıyın ve bir duvarı başka bir duvara ya da bir ızgara çizgisine kilitleyin. BimCraft'taki duvarlarla aynı araçlar.
keywords: duvar, duvar araç çubuğu, duvar düğmeleri, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, birleşim stili, pah, düz, kare kes, asma kilit, tutamaç, uç sürükle, döndür, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, birleştir, birleşimi yasakla, kilit, ızgara çizgisi, böl, boşluk, ofset, konum çizgisi
from: 49044181
---

Bu araçlar, `WALL` ile yapılan 2B duvarlar üzerinde çalışır (bkz. "2B akıllı duvarlar, kapılar ve pencereler çizin"). BimCraft'taki duvar araçlarıyla aynı kuralları kullanırlar, böylece bir duvar iki yerde de aynı davranır.

## Araçlar nerede

- Araç çubuğunda, {{ui:Duvarlar}} grubunda {{ui:Duvar}}, {{ui:Dikdörtgen}}, {{ui:Böl}} ve {{ui:Ofset}} vardır. Bunun {{ui:Daha fazla}} menüsünde her öteki duvar aracı, simgeleriyle birlikte vardır.
- Şerit menü stillerinde {{ui:Duvarlar}} sekmesinde {{ui:Duvar çiz}}, {{ui:Kes}}, {{ui:Ayarla ve değiştir}}, {{ui:Tut}} ve {{ui:Birleştir}} panelleri vardır.
- Bir yerleşimde, araç satırları ve araç kutusu aynı {{ui:Duvarlar}} grubunu gösterir.
- Aşağıda adı verilen herhangi bir komutu da yazabilirsiniz.

## Birleşimler saklanır

Bir duvarın ucu başka bir duvara değdiğinde, CadCraft bu birleşimi her iki duvarla birlikte kaydeder. Birleşimleri uçların nerede tesadüfen durduğundan yeniden hesaplamaz. Yani:

- Taşıdığınız bir duvara birleşmiş duvarlar onu izler ve birleşik kalır. Uçları kendi doğruları boyunca kayar, bu yüzden hiçbir şey dönmez.
- Bir duvarın bir ucunu tutamacıyla sürüklediğinizde, orada birleşmiş duvar da yönünü korur. Onun ucu, sürüklenen duvara değmek için kendi doğrusu boyunca kayar; bu yüzden sürüklenen uç her zaman imlecin altına değil, o doğrunun üzerine konur. Önizleme nereye geleceğini gösterir. Sürüklenen duvara çarpan bir duvar kendi doğrusu boyunca izler. Bir duvarı doğrusu boyunca uç uca sürüklemek uzunluğunu değiştirir ve orada birleşen duvar onunla birlikte taşınır.
- {{cmd:ROTATE}} birleşik bir duvarda aynı biçimde çalışır: komşularının uçları, döndürülmüş duvara doğru kendi doğruları boyunca kayar.
- Birleşik bir köşeyi taşımak için, orada buluşan iki duvarı seçin ve köşedeki tutamacı sürükleyin. İki duvar da köşede kalır ve ikisi de döner. Daha ileride olan duvarlar olduğu gibi kalır.
- Birleşimleri bilerek kırmak için, tutamacın yeni yerine tıklarken {{key:Alt}} basılı tutun: duvar bıraktığınız yere gider ve hiçbir şey onu izlemez.
- Bir sürükleme, birleşik bir duvarı kendi uzak ucundan geriye döndürecekse, reddedilir ve hiçbir şey değişmez.
- {{ui:Birleşimi yasakla}} ({{ui:Duvarlar}} grubunda) ile çizdiğiniz (`WALL` içinde `D`) ya da Özellikler'de kapattığınız ({{ui:Başlangıçta birleşmeye izin verme}}, {{ui:Sonda birleşmeye izin verme}}) bir duvar, başka bir duvara dokunsa bile o uçta serbest kalır, yeniden izin verene kadar.
- `WALLDISJOIN` ({{ui:Birleşimi yasakla}} {{ui:Duvarlar}} grubunda), aynı işi bir tıklamayla yapar: bir ucuna yakın bir duvara tıklayın ve o uçta birleşmeleri yasaklayın; yeniden tıklayın, izin verin.
- Eski bir çizimde henüz saklanmış birleşim yoktur. Yaptığınız ilk değişiklik, birleşimleri değişiklikten önceki duvarların durduğu yerden bir kez bulur ve kaydeder. `WALLJOINS` bunu hemen yapar.
- DWG ve DXF dosyaları birleşimleri her duvarın içinde taşır. CadCraft onları kayıtlı olduğu gibi geri okur. Genişletilmiş veri tutmayan bir program duvarları düz bloklar olarak gösterir ve birleşimleri düşürür; öteki programda duvarları taşınmış bir birleşim, her iki duvardan birini değiştirdiğinizde düşürülür.

## Bir köşenin birleşim stili

İki duvarın uçtan uca buluştuğu bir köşe, başka bir stil seçmediğiniz sürece pah olarak çizilir.

- `WALLJOINSTYLE` ({{ui:Birleşim stili}} {{ui:Duvarlar}} grubunda): köşeye tıklayın. Her tıklama bir sonraki stile geçer: {{ui:Pah}}, {{ui:Düz}}, {{ui:Kare kes}}, sonra yeniden {{ui:Pah}}. Son tıkladığınız köşede hangi duvarın geçeceğini değiştirmek için `T` yazın. Bitirmek için {{key:Enter}}'a basın. Komutun bir çalıştırılması tek bir geri al adımıdır.
- {{ui:Düz}}: bir duvar, öteki duvarın uzak yüzüne kadar geçer ve öteki, yan yüzüne dayanarak durur. {{ui:Kare kes}}: aynısı, ama kendine dik kesilen duvar kendine göre kare biter. Dik açıda ikisi aynı görünür.
- Bir duvarın Özellikleri'nde: {{ui:Başlangıçtaki birleşim stili}}, {{ui:Bitişteki birleşim stili}} ve {{ui:Başlangıçta geçer}}, {{ui:Bitişte geçer}}.
- Stil her iki duvarla birlikte kaydedilir ve DWG ve DXF dosyalarında taşınır. Bir duvarın kopyası onsuz başlar.
- T birleşiminin seçeceği bir stil yoktur: yan yüzü karşılanan duvar geçer. Üç ya da daha fazla duvarın buluştuğu bir köşe pah olarak kalır. Çok keskin bir köşe (yaklaşık 30 derecenin altında) ve bir doğru üzerindeki iki duvar da öyle.

## Duvar biçimleri çizin

Her biri birleşik köşelerle, tek bir geri al adımında duvar yapar. `WALL` içinde `O` bir yerleştirme ofseti ayarlar (duvarın tıklamalarınızın solundan ne kadar uzakta gideceği) ve `D` bir sonraki çizeceğiniz duvarlar için birleşimi kapatır.

- `WALLRECT` (`WR`): iki karşılıklı köşe, `RECTANG` gibi.
- `WALLROT`: ilk kenar, sonra diğer kenarın ne kadar dışarı gideceği; herhangi bir açıdaki bir dikdörtgen için.
- `WALLPOLY` (`WP`): kenar sayısı (3 ile 64), merkez, daire içine yazılı için `I` ya da daire dışına çizilmiş için `C`, sonra yarıçap; `POLYGON` gibi: tıklayın ya da yazın (yazılan bir yarıçap imleci izler, ya da imleç hâlâ merkezdeyse X ekseni boyunca).
- `WALLARC` (`WARC`): merkez, başlangıç, bitiş. `D` yayı öteki yöne çevirir.
- `WALLTAN`: bir duvarın ucuna yakın tıklayın, sonra yayın bitişi; yay o duvar boyunca ayrılır.
- `WALLPICK`: bir doğruya ya da çoklu çizgiye tıklayın ve ona bağlı doğruları da alıp almayacağını söyleyin.
- `WALLTRACE`: en küçük kapalı alanın etrafına duvar koymak için doğru ve duvarlardan oluşan kapalı bir alanın içine tıklayın.

Düz duvarlar düz olduğundan, bir yay 15 derecelik kısa düz duvarlar olarak çizilir. Her köşede olduğu gibi birleşirler.

## Duvarları kesin

- `WALLSPLIT` (`WS`): duvara tıklayın, sonra noktaya. `C` başka bir duvarın kestiği yerde keser, `G` parçalar arasında bir boşluk bırakır, `F` kesilmiş uçları birleşmek yerine serbest yapar. İlk parça duvarın çizimdeki yerini korur ve kapılar ve pencereler kendi parçalarıyla gider. Bir kapı ya da pencerenin içinden geçen kesim reddedilir.
- `WALLSPLITGAP` ({{ui:Boşluklu böl}}): aynı bölme, ama önce boşluğu ister.
- `WALLDELSEG`: duvara tıklayın, sonra silinecek parçanın iki ucuna.
- `WALLREJOIN`: aynı duvarın iki parçasına tıklayarak yeniden tek bir duvar yapın.

## Duvarları ölçüye göre taşıyın

- `WALLDIM` ({{ui:Boyuta göre düzenle}}): bir duvardan diğerine uzanan doğrusal ya da hizalı bir ölçülendirmeye tıklayın, sonra yeni değeri yazın. Uzak uçtaki duvar kendine dik taşınır, ilk uçtaki duvar yerinde kalır ve ona birleşen duvarlar izler. Ölçülendirmenin uzak noktası duvarıyla birlikte taşınır; böylece ölçülendirme yazdığınız değeri gösterir.
- `WALLOFFSET` (`WO`): bir duvara tıklayın, sonra onu taşıyacağınız tarafa (`D` bir mesafe yazar, `C` bunun yerine bir kopya yapar).
- `WALLSTRETCH`: duvar uçlarının etrafında bir pencere, sonra bir temel nokta ve ikinci bir nokta.
- Özellikler'de, yazılan bir {{ui:Uzunluk}} başlangıcı korur ve uzak uçta birleşen duvarı onunla birlikte alır; yeni bir {{ui:Kalınlık}} seçtiğiniz {{ui:Konum çizgisi}}'nden (sol yüz, sağ yüz ya da merkez) dışa doğru büyür.

## Duvar merkez çizgileri arasında ölçülendirme

Bir duvarın merkez çizgisi çizilmez, ama nesne yakalama onu bulur. Nesne yakalama açıkken ({{key:F3}}), imleci bir duvarın kalınlığının ortasına getirin: işaret `Duvar merkezi: uç nokta` ya da `Duvar merkezi: orta nokta` yazar ve işaret üstündeyken merkez çizgisi kesikli bir çizgi olarak görünür. Nesne yakalama listesinde {{ui:Dik}} ya da {{ui:En yakın}} açıksa, bunlar da merkez çizgisi üzerinde çalışır.

1. `DIMLINEAR` (ya da `DIMALIGNED`) başlatın.
2. İlk duvara, işaret `Duvar merkezi: orta nokta` ya da `Duvar merkezi: uç nokta` yazdığında tıklayın.
3. İkinci duvara aynı biçimde tıklayın, sonra ölçülendirme çizgisinin gideceği yere tıklayın.
4. Uzaklığı değiştirmek için `WALLDIM` başlatın, ölçülendirmeye tıklayın ve yeni değeri yazın. İkinci duvar taşınır.

Merkez çizgisi yakalaması bir nokta isteyen her komutta çalışır.

## Duvarları kilitleyin

Bir kilit dosyada duvarla birlikte kalır. Kilitli bir duvarı taşırsanız, öteki onu izler. Bir değişiklik iki duvarı farklı taşırsa, reddedilir ve hiçbir şey değişmez.

- `WALLHOLD`: bir duvarı başka bir duvara kilitleyin. `A` onu önce öteki duvarın doğrusuna taşır, `K` sahip olduğu mesafeyi korur.
- `WALLHOLDDIM`: iki paralel duvar arasındaki mesafeyi kilitleyin.
- `WALLGRID`: bir duvarı bir ızgara çizgisine kilitleyin (bir ızgara katmanındaki, etiketi bir ucunda metin olan bir çizgi), ya da boyunca ya da bir ucu üzerinde. Çizgi boyunca kilitlenmiş bir duvar, ondan sahip olduğu mesafeyi korur. Izgara çizgisini `GRIDMOVE` ile taşıyın ve duvar, birleşik duvarlarıyla birlikte bütün olarak izler. Izgara çizgisi boyunca uzanan bir duvar, kilit olmasa bile onunla birlikte bütün olarak taşınır; yalnızca çizgide bir ucu biten bir duvar o uç tarafından gerdirilir.
- `WALLHOLDS` kilitleri listeler. `WALLUNHOLD` bir duvardaki kilitleri kaldırır.
- Her kilit planda küçük bir kilit simgesi gösterir: kilitli duvarın ortasının yanında ya da bir ızgara çizgisine kilitli ucun yanında. Bir kilit simgesine tıklayarak o kilidi kaldırın.

## Henüz olmayanlar

Kilitler duvarların merkez çizgilerini kullanır. Burada duvarların katmanı yoktur, bu yüzden bir birleşimde katman önceliği yoktur ve duvarlar eğrilmez (yukarıdaki yaylara bakın). Bu araçlar büyük bir çizimde denenmemiştir ve başka bir CAD programında denetlenmemiştir.
