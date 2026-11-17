---
title: Kement ile seçim
summary: Nesnelerin etrafına serbest bir çizgi çizmek için basılı tutup sürükleyin; pencere, kesişen pencere ya da çit olarak seçer. Sürüklerken Space ile geçiş yapın.
keywords: kement, lassomode, sürükle, serbest çizim, seç, seçim, pencere, kesişen pencere, çit, space, çokgen, dokunma, kalem, dikdörtgen
from: 9ec6154d
---

## Öğrenecekleriniz

Nesneleri etraflarını çizerek nasıl seçeceğinizi ve istediğinizde dikdörtgeni nasıl geri getireceğinizi.

## Kement çizin

1. Birbirine yakın birkaç çizgi ve daire çizin.
2. Hiçbir komut çalışmıyorken, boş bir yerde fare düğmesine basın ve önce **sağa** doğru hareket ederek bazılarının etrafını sürükleyin.
3. Bırakın.

Yalnızca ana hattın tamamen içinde kalan nesneler seçilir. Sürüklerken ana hat düz çizilir: bu bir pencere kementidir.

## Pencere, kesişen pencere ve çit

Hangi nesnelerin seçileceği, sürüklemenizin ilk hareketine ve {{key:Space}} tuşuna bağlıdır:

| Sürüklediğiniz | Kement | Seçer |
|---|---|---|
| Önce sağa | Pencere (düz ana hat) | Yalnızca **tamamen içinde** kalan nesneler |
| Önce sola | Kesişen pencere (kesikli, yeşil) | İçinde kalan **ve** ana hattın dokunduğu nesneler |
| Sürüklerken {{key:Space}} tuşuna basın | Pencere, sonra kesişen pencere, sonra çit | Çit (kapalı olmayan kesikli yol): yalnızca yolun kestiği nesneler |

1. Boş bir yerde fareye basın ve önce **sola** doğru hareket ederek bazı nesnelerin etrafını sürükleyin. Ana hattın dokunduğu her şey de seçilir.
2. {{key:Esc}} tuşuna basın.
3. Yeniden basın ve sürükleyin; düğmeyi basılı tutarken {{key:Space}} tuşuna bir kez basın. Ana hat kesişen pencereye dönüşür; çit için {{key:Space}} tuşuna yeniden basın.

Bırakırken {{key:Shift}} tuşunu basılı tutarsanız nesneler bunun yerine seçimden çıkarılır (Ayarlar'da "Nesnelere tıklama: Ekle" seçeneğiyle).

## Bir komutun içinde

Kement, CadCraft'ın `Nesne seçin` istediği her yerde çalışır: çizin, sonra bitirmek için {{key:Enter}} tuşuna basın. {{cmd:STRETCH}} kesişen kementi pencere olarak alır; böylece çizimin L biçimindeki bir parçasını tek seferde gerdirebilirsiniz.

{{cmd:TRIM}} ve {{cmd:EXTEND}} sürüklemeyi farklı kullanır: orada yolun kestiği her parçayı kırpar (ya da uzatır). Bkz. [Kırp ve uzat](topic:trim-and-extend).

## Dikdörtgen

Boş bir yere tıklamak, taşımak ve ikinci kez tıklamak her zaman dikdörtgen pencereyi (soldan sağa) ya da kesişen pencereyi (sağdan sola) çizer.

Sürüklemenin yeniden dikdörtgen çizmesini sağlamak için {{ui:Ayarlar}} › {{ui:CadCraft}} › {{ui:Seçmek için sürükleme}} bölümünü açın ve {{ui:Dikdörtgen}} seçeneğini seçin; ya da {{cmd:LASSOMODE}} yazıp `0` girin. Kement için {{cmd:LASSOMODE}} yazıp `1` girin. Seçim bu tarayıcıda saklanır.

:::touch
Parmakla ya da kalemle de aynı şekilde sürükleyin. Dokunmak yine tek bir nesne seçer.
:::

## Sık yapılan hatalar

- **Hiçbir şey seçilmedi.** Kement bir pencereydi ve hiçbir nesne tamamen içinde kalmadı. Sürüklemeye sola doğru başlayın ya da sürüklerken {{key:Space}} tuşuna basın.
- **Sürükleme bir tutamacı taşıdı.** Seçili bir nesnenin tutamacına basmak tutamacı taşır. Kementi boş bir yerden başlatın.
- **Space komutu bitirdi.** {{key:Space}} kement modunu yalnızca düğme basılıyken değiştirir; aksi halde {{key:Enter}} işlevi görür.
