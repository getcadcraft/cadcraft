---
title: 3B'de model oluşturun
summary: Çizimi 3B sekmesinde üç boyutta görün ve ondan basit katılar yapın: ekstrüzyon (eğimli ya da bir yol boyunca), döndürme, yüzleri itip çekme, kutular, silindirler ve kamalar; bunları birleştirin, çıkarın ve kesiştirin, sonra taşıyın, kopyalayın, döndürün ve silin; ayrıca bunların düz 2B görünümlerini bir sayfaya yerleştirin.
keywords: 3d, üç boyut, katı, katılar, 3dsolid, bölge, gövde, acis, sat, sab, başka programlardan katılar, 3B çizim aç, ekstrüzyon, ext, döndürme, rev, süpürme, eğim, yol, presspull, it çek, push pull, kutu, silindir, cyl, kama, 3dorbit, yörünge, görünüm, vscurrent, görsel stil, gölgeli, gizli çizgi, tel kafes, x-ışını, xray, iso, perspektif, paralel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, görünüm küpü, birleştirme, uni, çıkarma, su, kesiştirme, in, boolean, katıları birleştir, viewbase, flatshot, düz görünüm, 2B görünüm, çizim görünümü, ön görünüm, üst görünüm, yan görünüm, gizli çizgiler
from: 13060e71
---

## Neler oluşturacaksınız

1000 × 600 bir oda tabanını 400 yüksekliğinde bir bloğa ekstrüde edin, bir yüzeyi yukarı çekin ve yanına bir silindir koyun; sonra modeli çizimle birlikte kaydedin ve bir 3B görüntüleyici ya da yazıcı için dışa aktarın.

{{ui:3B}} sekmesi, çizimin altında {{ui:Model}} sekmesinin yanında yer alır. Model uzayındaki çizimi katman renkleriyle zemine yatırılmış olarak gösterir (kapalı ya da dondurulmuş katmanlar gizli kalır) ve oluşturduğunuz katıları gösterir. İlk açıldığında 3B görünüm yüklenir; bundan sonra anında geçiş yapar.

## Bir şekli ekstrüde edin

1. {{ui:Model}} sekmesinde `REC` yazın ve {{key:Enter}}'a basın. `0,0` yazın, {{key:Enter}}'a basın, `@1000,600` yazın, {{key:Enter}}'a basın.
2. {{ui:3B}} sekmesine tıklayın. Araç çubuğunda çizim grupları yerine {{ui:3B}} grubu görünür.
3. {{ui:Ekstrüzyon}} düğmesine tıklayın (ya da {{cmd:EXTRUDE}}, `EXT` yazın). Dikdörtgenin içine tıklayın, sonra {{key:Enter}}'a basın.
4. `400` yazın ve {{key:Enter}}'a basın. Geçmiş "1 katı ekstrüde edildi, 400 yüksekliğinde" ifadesini hacmiyle birlikte yazar.

Kapalı çoklu çizgiler (yaylar dahil), dikdörtgenler, çokgenler, daireler ve elipsler ekstrüde edilir; çizgiler ve açık çoklu çizgiler edilmez ve geçmiş nedenini söyler. Önce 2B şekilleri {{ui:Model}} sekmesinde seçip orada `EXTRUDE` da yazabilirsiniz. Yüksekliği yazmak yerine tıklayarak da belirleyebilirsiniz: dış hat imleci izleyerek yukarı ve aşağı hareket eder. Negatif yükseklik aşağı iner. Ekstrüzyondan sonra 2B şekilleri silmek için yükseklik isteminde `D` yazın (`D` tekrar yazılırsa şekiller korunur).

Yükseklik isteminde `T` (Eğim açısı) derece cinsinden bir açı ister: kenarlar bu kadar eğilir ve üst yüzey küçülür (negatif bir açı onu büyütür); şekil için fazla dik olan bir açı reddedilir. `P` (Yol) ise şekilleri bunun yerine bir yol boyunca süpürür (aşağıya bakın).

## Döndürme ve süpürme

- {{cmd:REVOLVE}} (`REV`, ya da {{ui:Daha fazla}} › {{ui:Bir eksen etrafında döndür}}): kapalı şekilleri seçin, {{key:Enter}}'a basın, sonra eksenin iki ucuna tıklayın (ya da 0,0 noktasından geçen çizim ekseni için `X` ya da `Y` yazın), ardından bir açı yazın ya da tam dönüş için {{key:Enter}}'a basın. Şekil eksen etrafında döner ve zeminden yükselir: bir çizginin yanına bir vazonun yarım dış hattını çizin, sonra onu çizgi etrafında döndürün. Şekil eksene dokunabilir ama onu geçemez. Tam dönüş 48 adımdır.
- {{cmd:SWEEP}} (ya da {{ui:Daha fazla}} › {{ui:Bir yol boyunca süpür}}, ya da EXTRUDE'un yükseklik isteminde `P`): kapalı şekilleri (profil) seçin, {{key:Enter}}'a basın, sonra yolu tıklayın: bir çizgi, çoklu çizgi, yay, daire ya da elips. Profil yolun üzerinde dikilir, orta noktası yolda olacak şekilde yol boyunca ilerler; köşeler gönye kesimle birleşir ve kapalı bir yol bir halka yapar. Bir odanın dış hattı boyunca küçük bir dikdörtgen süpürmek bir süpürgelik yapar; bir çoklu çizgi boyunca bir daire süpürmek bir boru yapar.

## Bir yüzeyi itip çekin

1. {{ui:İt/çek}} düğmesine tıklayın (ya da {{cmd:PRESSPULL}} yazın).
2. Bloğun üst yüzeyine tıklayın.
3. `100` yazın ve {{key:Enter}}'a basın, ya da imleci hareket ettirip tıklayın. Blok 500 yüksekliğinde olur.

## Kutular, silindirler ve kamalar

- {{cmd:BOX}}: iki köşeyi tıklayın ya da yazın, sonra bir yükseklik verin.
- {{cmd:CYLINDER}} (`CYL`): merkez, yarıçap, sonra yükseklik. Silindirler ve ekstrüde edilen daireler 48 kenarlıdır ve pürüzsüz gölgelendirilir.
- {{cmd:WEDGE}} (`WE`): iki köşe ve bir yükseklik. İlk köşede tam yükseklikte olur ve diğer köşeye doğru sıfıra iner.

3B sekmesinde bir tıklama imlecin altındaki yüzeye ya da kenara, yoksa zemine düşer; böylece bir kutu başka bir katının üzerinde durabilir.

## Katıları taşıyın, kopyalayın, döndürün ve silin

3B sekmesinde bir tıklama bir katıyı seçer; pencere için soldan sağa, kesişen pencere için sağdan sola sürükleyin. Sonra:

- {{cmd:MOVE}}: bir temel noktaya ve gideceği yere tıklayın, ya da X, Y ve Z boyunca bir mesafe için `<100,0,0>` (ya da `@100,0`) yazın.
- {{cmd:COPY}}: aynısı, özgün katıyı bırakarak.
- {{cmd:ROTATE}}: bir açı yazın (seçimin ortası etrafında, Z ekseni çevresinde döner), ya da merkezi, başlangıç noktasını ve açıyı tıklayın.
- {{cmd:ERASE}} ya da {{key:Delete}}.

## Katıları birleştirin, çıkarın ve kesiştirin

3B araç çubuğunda {{ui:Daha fazla}} seçeneğini açın ya da komutu yazın:

- {{cmd:UNION}} (`UNI`): katıları seçin, {{key:Enter}}'a basın: tek bir katı olurlar.
- {{cmd:SUBTRACT}} (`SU`): tutulacak katıları seçip {{key:Enter}}'a basın, sonra çıkarılacakları seçip {{key:Enter}}'a basın. Bir bloktan geçen bir delik için: içinden bir silindir çizin, sonra silindiri çıkarın.
- {{cmd:INTERSECT}} (`IN`): katıları seçin, {{key:Enter}}'a basın: yalnızca hepsinin ortak olan kısmı kalır.

Geçmiş sonucun hacmini yazar. Her biri tek bir geri alma adımıdır. Çalıştırdığınız ilk işlem 3B boolean motorunu yükler (yaklaşık 0,5 MB; {{ui:Çevrimdışı için kaydet}} içinde yer alır). Yalnızca kapalı katılar birleştirilebilir: açık kenarları olan bir katı (başka bir programın serbest 3B yüzeylerinden) bu nedenle nedeniyle reddedilir. Sonuç tek bir katıdır; eğri yüzeyler, silindirde olduğu gibi düz parçalardan oluşmayı sürdürür.

Bir katıya çift tıklayın, yüzlerini ve kenarlarını ayrı ayrı düzenleyin; {{key:Esc}} onu yeniden kapatır. Her 3B değişikliği, çizimle aynı geçmişte tek bir geri alma adımıdır: {{key:Mod+Z}} her iki sekmede yaptığınız son işlemi geri alır.

## Bir sayfada düz görünümler

1. Bir sayfa sekmesi açın (ya da {{ui:Model}} üzerinde kalın), sonra {{cmd:VIEWBASE}} (ya da `FLATSHOT`) yazın.
2. Görünümü seçin: ön için {{key:Enter}}, ya da `T` (üst), `R` (sağ), `L` (sol), `BA` (arka), `BO` (alt), `I` (izometrik).
3. {{key:Enter}} gizli çizgileri kesikli olarak gösterir; `H` onları dışarıda bırakır.
4. {{key:Enter}} CadCraft'ın önerdiği ölçeği alır: bir sayfada, görünümün kağıdın yarısından az sığdığı en büyük standart ölçek (örneğin 1:20). Ya da bir ölçek yazın: `1:50`, `2:1`.
5. Görünümün merkezinin gideceği yere tıklayın ya da yazın.

Görünüm tek bir blok başvurusudur, `VIEW-FRONT-1` gibi: görünen kenarlar VIEW-VISIBLE katmanında (0,5 mm), gizli olanlar VIEW-HIDDEN katmanında (kesikli, 0,25 mm). Diğer çizimler gibi taşıyın, ölçülendirin ve çıktı alın. Oluşturulduğu andaki katıların bir resmidir: bunları değiştirdikten sonra görünümü silin ve {{cmd:VIEWBASE}} komutunu yeniden çalıştırın. Daha fazla görünüm için her görünüm için bir kez çalıştırın.

## Etrafa bakın

Tekerlekle sürükleyerek yörüngede dönün, {{key:Shift}} + tekerlek sürüklemesi ya da sağ düğmeyle kaydırın, tekerleği çevirerek imleç noktasında yakınlaştırın. Dokunmatik yüzeyde iki parmak yörüngede döndürür, çimdik hareketi yakınlaştırır. Sürüklemeden yapılan sağ tıklama, diğer sekmelerde olduğu gibi {{key:Enter}}'dır. 3DORBIT, {{key:Enter}} ya da {{key:Esc}}'e basana kadar sol düğmenin yörüngede dönmesini sağlar.

- {{ui:Görünümler}} (ya da {{cmd:VIEW}}): İzo, Üst, Alt, Ön, Arka, Sol, Sağ, Perspektif ya da Paralel ve Her şeye yakınlaştır.
- {{ui:Stil}} (ya da {{cmd:VSCURRENT}}, `VS`): Gölgeli, Kenarlı gölgeli, Gizli çizgi, Tel kafes ya da X-ışını.

Tıkladığınız noktalar katılara (köşeler, kenarlar, yüzeyler) ve zemindeki 2B çizime yakalanır: çizgi ve yayların uçları ve orta noktaları ile bunların üzerindeki noktalar. 2B çizgiler 3B sekmesinde asla seçilmez. Bir komut 2B nesneler istediğinde (EXTRUDE, REVOLVE, SWEEP), bir tıklama birini seçer; soldan sağa bir sürükleme pencerenin içinde tamamen kalanı, sağdan sola bir sürükleme ise kestiklerini alır; tıpkı {{ui:Model}} sekmesinde olduğu gibi.

3B sekmesinin sağ üstünde bir görünüm küpü bulunur: bir yüze, kenara ya da köşeye tıklayarak oradan bakın, yörüngede dönmek için sürükleyin; ev düğmesi izometrik görünüme döner. Bu, [CadCraft ayarları](topic:settings) içindeki {{ui:Köşe göstergesi}} ayarının başlangıç değeri olan {{ui:Otomatik}} seçeneğidir. {{ui:Görünüm küpü}} olarak ayarlanırsa {{ui:Model}} sekmesinde de yukarıdan bakan bir küp gösterilir; başka bir yüze tıklamak 3B sekmesini oradan bakacak şekilde açar. {{ui:Eksen simgesi}} olarak ayarlanırsa iki sekmede de eksen işaretçisi gösterilir.

## Başka programlardan katılar

Başka bir programdan gelen bir çizim 3B katılar, bölgeler ve gövdeler içerebilir (3DSOLID, REGION, BODY: diğer program bunların şeklini ACIS verisi olarak tutar). CadCraft model uzayındakileri 3B sekmesinde, sekmeyi ilk açtığınızda, katman renginde ve kendi kenarlarıyla gösterir; komut satırı kaç tanesinin çizildiğini söyler.

- Olduğu gibi gösterilirler: seçemez, taşıyamaz ya da değiştiremezsiniz. Kapalı ya da dondurulmuş katmanlar bunları gizler.
- DWG olarak kaydetmek her birini değiştirmeden, herhangi bir DWG sürümünde geri yazar; böylece diğer program onları yeniden alır. DXF dosyaları bunları tutmaz: CadCraft bunları yalnızca DWG'ye yazar ve DXF olarak kaydederken bunu söyler.
- Çizilenler: düz yüzeyler ile silindir, koni, küre, simit ve basit spline yüzeylerdeki yüzeyler; düz, yuvarlak ve spline kenarlar. Başka türde bir yüzey ya da CadCraft'ın yerleştiremediği bir yüzey tahmin edilmez: dışarıda bırakılır ve listelenir, örneğin "Henüz çizilmedi (3B katılar): spline-surface (sweepsur) üzerinde 2 yüzey, henüz çizilmeyen bir yüzey."
- Bloklar içindeki katılar henüz gösterilmez; "Bu dosya hakkında" bunları sayar.

Eğri yüzeyler yaklaşık 7,5° aralıklarla küçük düz parçalar olarak çizilir; bu yüzden eğri bir katı yakından bakıldığında biraz köşeli görünür.

## Kaydetme ve dışa aktarma

Kaydetmek 3B modeli DWG ve DXF'te saklar. Her yüzey, `CC-3D` katmanında bir 3B yüz olarak yazılır; böylece diğer programlar katıları gösterir. CadCraft kendi tam kopyasını dosyada tutar; çizimi tekrar açtığınızda bunu okur ve 3B görünümü (kamera, projeksiyon ve görsel stil) olduğu gibi geri getirir. Diğer programların yaptığı 3B yüzler, 3B sekmesinde serbest yüzler olarak tek bir grup halinde gelir. Bir bloğun içindeki 3B yüz, modeldeki o bloğun her başvurusu için bir kez gelir; başvuru nasıl yerleştirilip döndürüldüyse öyle. Bloğun kendisinde ve bir sayfada 3B yüz, dış hattı olarak düz çizilir.

3B grubundaki {{ui:Dışa aktar}} yalnızca katıları indirir: görüntüleyiciler ve web için GLB ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ya da 3B yazdırma için milimetre cinsinden STL ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} hangisinin istendiğini sorar.

:::note
3B model gerçek boyutludur. Birimsiz bir çizim milimetre sayılır, yani `1000` bir metredir. Çizimin birimlerini sonradan değiştirirseniz ({{ui:Özellikler}}, hiçbir şey seçili değilken), katılar da onlarla birlikte ölçeklenir ki çizimde kalsınlar; geçmiş bunu söyler. Tek bir {{key:Mod+Z}} birim değişikliğini ve ölçeklemeyi birlikte geri alır.
:::
