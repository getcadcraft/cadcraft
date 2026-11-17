---
title: 2D duvarlar için duvar şekilleri, kesimler, ofsetler ve kilitler
summary: Duvarları dikdörtgen, çokgen ve yay olarak çizin, bölün ve yeniden birleştirin, bir ölçüye göre taşıyın ya da bir duvarı başka bir duvara ya da bir ızgara çizgisine kilitleyin. BimCraft'taki duvarlarla aynı araçlar.
keywords: duvar, duvar araç çubuğu, duvar düğmeleri, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, birleşim stili, pah, düz, kare kes, birleştir, birleşime izin verme, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, kilit, asma kilit, tutamaç, uç sürükle, döndür, ızgara çizgisi, böl, boşluk, ofset, konum çizgisi
from: f41e7433
---

Bu araçlar `WALL` komutuyla oluşturulan 2D duvarlar üzerinde çalışır (bkz. "2D'de akıllı duvarlar, kapılar ve pencereler çizin"). BimCraft'taki duvar araçlarıyla aynı kuralları kullanırlar; böylece bir duvar her ikisinde de aynı davranır.

## Araçların yeri

- Araç çubuğunda {{ui:Duvarlar}} grubunda {{ui:Duvar}}, {{ui:Dikdörtgen}}, {{ui:Böl}} ve {{ui:Ofset}} bulunur. Bunun {{ui:Daha fazla}} menüsünde, her biri simgesiyle birlikte, diğer tüm duvar araçları vardır.
- Şerit menü stillerinde {{ui:Duvarlar}} sekmesinde {{ui:Duvar çizin}}, {{ui:Kes}}, {{ui:Ayarla ve değiştir}}, {{ui:Tut}} ve {{ui:Birleştir}} panelleri bulunur.
- Bir düzende, araç çubuğu satırları ve araç kutusu aynı {{ui:Duvarlar}} grubunu gösterir.
- Aşağıda adı geçen herhangi bir komutu da yazabilirsiniz.

## Birleşimler kaydedilir

Bir duvarın ucu başka bir duvara oturduğunda, CadCraft bu birleşimi her iki duvarla birlikte kaydeder. Uçların o an bulunduğu yerden birleşimleri yeniden hesaplamaz. Bu nedenle:

- Taşıdığınız bir duvara birleşik duvarlar onu izler ve birleşik kalır. Uçları kendi çizgileri boyunca kayar; bu yüzden hiçbir şey dönmez.
- Bir duvarın bir ucunu tutamacıyla sürüklediğinizde, orada birleşik duvar da yönünü korur. Onun ucu, sürüklenen duvarla buluşmak için kendi çizgisi boyunca kayar; bu nedenle sürüklenen uç her zaman imlecin altına değil, o çizgiye oturur. Önizleme nereye geldiğini gösterir. Sürüklenen duvara dayanan bir duvar kendi çizgisi boyunca izler. Ucu duvar boyunca doğrudan sürüklemek, uzunluğunu değiştirir ve orada birleşik duvar onunla birlikte hareket eder.
- Birleşik bir duvarda `ROTATE` aynı şekilde çalışır: komşularının uçları kendi çizgileri boyunca döndürülmüş duvara kayar.
- Bir köşeyi taşımak için orada buluşan iki duvarı da seçin ve köşedeki tutamacı sürükleyin. İki duvar da köşede kalır ve ikisi de döner. Daha ilerideki duvarlar olduğu gibi kalır.
- Birleşimleri bilerek koparmak için tutamacın yeni konumuna tıklarken {{key:Alt}} tuşunu basılı tutun: duvar koyduğunuz yere gider ve hiçbir şey onu izlemez.
- Bir sürükleme, birleşik bir duvarı kendi uzak ucundan geriye döndürecekse, reddedilir ve hiçbir şey değişmez.
- {{ui:Birleşmelere izin verme}} ile (`WALL` içinde `D`) çizdiğiniz ya da Özelliklerde ({{ui:Başlangıçta birleşmeye izin verme}}, {{ui:Sonda birleşmeye izin verme}}) kapattığınız bir duvar, başka bir duvara değse bile o uçta serbest kalır; yeniden izin verene kadar böyle kalır.
- `WALLDISJOIN` ({{ui:Birleşime izin verme}}, {{ui:Duvarlar}} grubunda) aynısını tek tıklamayla yapar: bir duvara, uca yakın bir yerden tıklayarak o uçta birleşime izin vermeyi kapatın; yeniden tıklayarak izin verin.
- Daha eski bir çizimde henüz kaydedilmiş birleşim yoktur. Yaptığınız ilk değişiklik, duvarların değişiklikten önceki durumuna bakarak onları bir kez bulur ve kaydeder. `WALLJOINS` bunu hemen yapar.
- DWG ve DXF dosyaları birleşimleri her duvarın içinde taşır. CadCraft bunları kaydedildiği gibi geri okur. Genişletilmiş veri tutmayan bir program duvarları düz bloklar olarak gösterir ve birleşimleri düşürür; duvarlarından biri başka bir programda taşınmış bir birleşim, iki duvardan birini bir sonraki değiştirdiğinizde düşer.

## Bir köşenin birleşim stili

İki duvarın uç uca buluştuğu bir köşe, başka bir stil seçmezseniz pah olarak çizilir.

- `WALLJOINSTYLE` ({{ui:Birleşim stili}}, {{ui:Duvarlar}} grubunda): köşeye tıklayın. Her tıklama bir sonraki stile geçer: {{ui:Pah}}, {{ui:Düz}}, {{ui:Kare kes}}, sonra yeniden {{ui:Pah}}. Son tıkladığınız köşede iki duvardan hangisinin geçeceğini değiştirmek için `T` yazın. Bitirmek için {{key:Enter}} tuşuna basın. Komutun bir çalıştırılması tek bir geri alma adımıdır.
- {{ui:Düz}}: bir duvar diğerinin uzak yüzüne kadar uzanır, diğeri ise onun yan yüzüne dayanarak durur. {{ui:Kare kes}}: aynısı, ancak geçen duvar kendisine dik olarak biter. Dik açıda ikisi birbirine benzer görünür.
- Bir duvarın Özelliklerinde: {{ui:Başlangıçtaki birleşim stili}}, {{ui:Bitişteki birleşim stili}} ve {{ui:Başlangıçta geçer}}, {{ui:Bitişte geçer}}.
- Stil, her iki duvarla birlikte kaydedilir ve DWG ve DXF dosyalarında taşınır. Bir duvarın kopyası stil olmadan başlar.
- T birleşiminde seçilecek bir stil yoktur: yan yüzüne değilen duvar geçer. Üç veya daha fazla duvarın buluştuğu bir köşe pah olarak kalır. Çok keskin bir köşe (yaklaşık 30 dereceden küçük) ve tek bir çizgi üzerindeki iki duvar da öyledir.

## Duvar şekilleri çizin

Her biri duvarları tek bir geri alma adımında, köşeleri birleştirerek oluşturur. `WALL` içinde `O` bir yerleştirme ofseti belirler (duvarın tıklamalarınızın ne kadar soluna gideceği) ve `D` sonra çizeceğiniz duvarlar için birleştirmeyi kapatır.

- `WALLRECT` (`WR`): karşılıklı iki köşe, `RECTANG` gibi.
- `WALLROT`: ilk kenar, sonra diğer kenarın ne kadar dışarı gideceği; herhangi bir açıda bir dikdörtgen için.
- `WALLPOLY` (`WP`): kenar sayısı (3 ile 64 arası), merkez, içine çizilmiş için `I` ya da dışına çizilmiş için `C`, sonra yarıçap; `POLYGON` gibi.
- `WALLARC` (`WARC`): merkez, başlangıç, bitiş. `D` yayı diğer yöne çevirir.
- `WALLTAN`: bir duvarın ucuna yakın tıklayın, sonra o duvar boyunca ayrılan yayın ucuna tıklayın.
- `WALLPICK`: bir çizgiye ya da çoklu çizgiye tıklayın ve ona birleşik çizgilerin de alınıp alınmayacağını belirtin.
- `WALLTRACE`: kapalı bir çizgi ve duvar alanının içine tıklayarak en küçük alanın etrafına duvarlar yerleştirin.

Plan duvarları düz olduğundan, bir yay her biri 15 derecelik kısa düz duvarlar olarak çizilir. Herhangi bir köşe gibi birleşirler.

## Duvarları kesin

- `WALLSPLIT` (`WS`): duvara, sonra noktaya tıklayın. `C` başka bir duvarın kestiği yerden keser, `G` parçalar arasında boşluk bırakır, `F` kesim uçlarını birleşik yerine serbest yapar. İlk parça duvarın çizimdeki yerini korur; kapı ve pencereler de bulundukları parçayla birlikte gider. Bir kapı ya da pencereden geçen kesim reddedilir.
- `WALLSPLITGAP` ({{ui:Boşluklu böl}}): aynı bölme, ancak önce boşluğu sorar.
- `WALLDELSEG`: duvara, sonra silinecek parçanın iki ucuna tıklayın.
- `WALLREJOIN`: bir duvarın iki parçasına tıklayarak onları yeniden tek yapın.

## Duvarları mesafeye göre taşıyın

- `WALLDIM`: bir duvardan diğerine uzanan bir doğrusal ya da hizalı ölçülendirmeye tıklayın, sonra yeni değeri yazın. Uzak uçtaki duvar kendisine dik olarak taşınır, ilk uçtaki duvar yerinde kalır ve ona birleşik duvarlar onu izler.
- `WALLOFFSET` (`WO`): bir duvara, sonra taşınacağı tarafa tıklayın (`D` bir mesafe yazar, `C` bunun yerine bir kopya oluşturur).
- `WALLSTRETCH`: duvar uçlarının etrafına bir pencere, sonra bir temel nokta ve ikinci bir nokta.
- Özelliklerde, yazılan bir {{ui:Uzunluk}} başlangıcı korur ve uzak uçta birleşik duvarı da beraberinde götürür; yeni bir {{ui:Kalınlık}} ise seçtiğiniz {{ui:Konum çizgisi}} yönünden dışarı doğru büyür (sol yüz, sağ yüz ya da merkez).

## Duvarları kilitleyin

Kilit, dosyada duvarla birlikte kalır. Kilitli bir duvarı taşırsanız, diğeri onu izler. Tek bir değişiklik her iki duvarı farklı şekilde taşıyacaksa, reddedilir ve hiçbir şey değişmez.

- `WALLHOLD`: bir duvarı başka bir duvara kilitleyin. `A` önce onu diğer duvarın çizgisine taşır, `K` sahip olduğu mesafeyi korur.
- `WALLHOLDDIM`: iki paralel duvar arasındaki mesafeyi kilitleyin.
- `WALLGRID`: bir duvarı bir ızgara çizgisine kilitleyin (ızgara katmanındaki, bir ucunda etiketi metin olarak bulunan bir çizgi); ya çizgi boyunca ya da bir ucu çizgi üzerinde olacak şekilde. Çizgi boyunca kilitlenen bir duvar, ondan olan mesafesini korur. Izgara çizgisini `GRIDMOVE` ile taşıyın; duvar, birleşik duvarlarıyla birlikte bütün olarak izler. Bir ızgara çizgisi boyunca uzanan bir duvar, kilit olmasa bile onunla birlikte bütün olarak hareket eder; yalnızca çizgide biten bir duvar ise o uçtan uzatılır.
- `WALLHOLDS` kilitleri listeler. `WALLUNHOLD` bir duvarın kilitlerini kaldırır.
- Her kilit, planda küçük bir asma kilit simgesiyle gösterilir: kilitli duvarın ortasının yanında ya da bir ızgara çizgisine kilitlenen ucun yanında. Kaldırmak istediğiniz kilidin asma kilidine tıklayın.

## Henüz burada olmayanlar

Kilitler duvarların merkez çizgilerini kullanır. Buradaki duvarların katmanı yoktur; bu yüzden bir birleşim noktasında katman önceliği yoktur ve duvarlar eğrilmez (yukarıdaki yaylara bakın). Bu araçlar henüz büyük bir çizimde kimse tarafından denenmedi ve başka bir CAD programında kontrol edilmedi.
