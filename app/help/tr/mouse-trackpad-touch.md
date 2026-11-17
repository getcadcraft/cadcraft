---
title: Fare, izleme dörtgeni ve dokunma
summary: Bir tekerlekli fare, Mac ya da PC izleme dörtgeni veya dokunmatik ekranla CadCraft'ta nasıl yakınlaştırılır, kaydırılır, sağ tıklanır ve seçim yapılır; tarayıcılar arasındaki farklar nelerdir.
keywords: izleme dörtgeni, dokunmatik yüzey, magic mouse, dokunma, tablet, ipad, kaydır, yakınlaştır, çimdikle, sağ tıklama, iki parmak, orta düğme, tarayıcı, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft bir tekerlekli fare için tasarlanmıştır. Her şey bir izleme dörtgeniyle de çalışır; birkaç alışkanlık öğrenmek gerekir. Dokunmatik ekranlar seçim yapmak için çalışır, ama sınırlıdır.

## Tekerlekli fare

- **Yakınlaştırma:** tekerleği çevirin. Çizim imleç etrafında yakınlaşır, bu yüzden görmek istediğiniz yeri gösterin.
- **Kaydırma:** tekerleğe basılı tutup sürükleyin ya da sağ düğmeyle sürükleyin.
- **Her şeye yakınlaştırma:** tekerleğe çift tıklayın ya da {{ui:Extents}} düğmesine tıklayın.
- **Önceki görünüme dönme:** Görünüm grubunda {{ui:Previous}} düğmesine tıklayın ya da `Z`, {{key:Enter}}, `P`, {{key:Enter}} yazın. Bir dizi tekerlek adımı tek bir görünüm sayılır, bu yüzden tek bir {{ui:Previous}} hepsini geri alır. Dönmek istediğiniz görünümleri {{cmd:NAMEDVIEW}} (`NV`) ile kaydedin.
- **Enter:** sağ tıklayın.

## İzleme dörtgeni

:::mac
- **Kaydırma:** izleme dörtgeninde iki parmağınızı herhangi bir yönde hareket ettirin: çizim parmaklarınızı izler. İki parmakla basılı tutarak tıklayıp sürükleyerek de (sağ düğme sürüklemesi) kaydırabilirsiniz.
- **Yakınlaştırma:** iki parmakla çimdikleyin. Yakınlaştırma imlecin izini sürer.
- **Sağ tıklama (Enter):** iki parmakla tıklayın. Hiçbir şey olmazsa **Sistem Ayarları**'nda, ardından **İzleme Dörtgeni**'nde "İkincil tıklama" seçeneğini açın. Control tıklaması CadCraft'ta sağ tıklama yerine sıradan bir tıklama sayılabilir, bu yüzden iki parmakla tıklamayı kullanın.
- **Bir alana yakınlaştırma:** Görünüm grubunda {{ui:Window}} düğmesine tıklayın ve iki köşeye tıklayın.
:::

:::windows linux
- **Kaydırma:** dokunmatik yüzeyde iki parmağınızı herhangi bir yönde hareket ettirin: çizim parmaklarınızı izler. Sağ düğmeye basılı tutarak da sürükleyebilirsiniz.
- **Yakınlaştırma:** iki parmakla çimdikleyin. Yakınlaştırma imlecin izini sürer.
- **Sağ tıklama (Enter):** dokunmatik yüzey ayarlarınıza bağlı olarak iki parmakla tıklayın ya da dokunmatik yüzeyin sağ alt köşesine tıklayın.
- **Bir alana yakınlaştırma:** Görünüm grubunda {{ui:Window}} düğmesine tıklayın ve iki köşeye tıklayın.
:::

{{key:Space}} tuşunu basılı tutup sürüklemek CadCraft'ta **kaydırmaz**: {{key:Space}} tuşu Enter'dır.

Bir fare tekerleği hâlâ tek adımda yakınlaştırır. Kaydırmasını bir tekerlek gibi tam adımlarla gönderen bir izleme dörtgeni, kaydırmak yerine iki parmakla kaydırma ile yakınlaştırır: uzaklaşın, istediğiniz alana bakın ve yeniden yakınlaşın. 3B sekmesi kendi izleme dörtgeni hareketlerini korur (bkz. [Modeli 3B'de görün](topic:3d-solids#look-around)).

## Dokunmatik ekranlar ve tabletler

CadCraft bir parmağı fare tıklaması olarak okur:

- Bir dokunma bir nokta ya da bir nesne seçer ya da seçim yapar.
- Boş bir alanda parmağı sürüklemek bir kement çizer (önce sağa hareket ederseniz pencere, önce sola hareket ederseniz kesişen pencere; bkz. [Kement seçimi](topic:lasso-selection)).
- {{cmd:TRIM}} ve {{cmd:EXTEND}} komutlarında, parçaların üzerinden parmağı sürüklemek hepsini kırpar ya da uzatır.
- Seçili bir nesnenin tutamacını sürüklemek tutamacı taşır (tutamaçlar ve seçim kutusu parmak için daha büyüktür).
- Yakınlaştırmak için iki parmakla **çimdikleyin**; kaydırmak için iki parmağı birlikte hareket ettirin. İkinci bir parmak, ilk parmağın başlattığı her şeyi iptal eder, bu yüzden çimdikleme hiçbir iz bırakmaz.
- **Uzun basma** (yaklaşık yarım saniye hareketsiz tutmak) bir sağ tıklamadır: {{key:Enter}}. Bir komutu bitirir, bir seçimi tamamlar ya da son komutu tekrarlar.

Komut satırının altında bir **tuş satırı** belirir: {{ui:Esc}}, Undo, Redo, bir tablet klavyesinin sakladığı karakterler (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, bir klavye düğmesi ve büyük bir {{ui:Enter}}. Bir komut ya da sayı yazmak için klavye düğmesine (ya da komut satırına) dokunun.

Üzerine gelme yoktur; yakalama işaretleri yalnızca parmağınızın olduğu yerde görünür.

:::touch
Bir dokunmatik ekran kullanıyorsunuz. Hızlı bir bakıştan fazlası için, takılı bir klavye ve bir fare ya da izleme dörtgeni CadCraft'ı çok daha kolay kullanmanızı sağlar.
:::

## Tarayıcılar

CadCraft Chrome, Edge, Firefox ve Safari'de, Mac, Windows ve Linux üzerinde aynı çalışır. Farklar küçüktür:

| Konu | Bilmeniz gerekenler |
|---|---|
| Bir DWG açma | Büyük çizimler her tarayıcıda okunmak için birkaç saniye alır; bu sırada durum satırı "Okunuyor …" yazar |
| İndirmeler | Her tarayıcı indirmelerin nereye gideceğine ve önce sorup sormayacağına kendisi karar verir; bkz. [Tarayıcılar ve bilgisayarlar](common:browsers) |
| Yazdırmak için aç | PDF'i yeni bir sekmede açar. Tarayıcı açılır pencereleri engellerse CadCraft bunun yerine PDF'i indirir |
| F7 | Firefox imleç gezinmesini (caret browsing) önerebilir; Hayır seçin |
| Kaydedilmemiş değişikliklerle ayrılmak | Her tarayıcı kendi "Siteden ayrılmak istiyor musunuz?" sorusunu gösterir; CadCraft bunu değiştiremez |

:::safari
Safari'de {{ui:Open to print}} ile açılan bir PDF sekmede görünebilir ama yazdırılmayabilir: **Dosya** ve ardından **Yazdır** kullanın.
:::

:::firefox
Firefox her indirme için ne yapılacağını sorabilir. Dosyayı kaydetmeyi seçin ya da Firefox ayarlarında İndirilenler altından bunu bir kez değiştirin.
:::
