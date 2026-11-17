---
title: Nesneler üzerindeki noktalara yakalama
summary: Fareyle tam uç noktaları, orta noktaları, merkezleri ve kesişimleri seçmek için nesne yakalamalarını, Ortogonal'i ve ızgarayı kullanın.
keywords: osnap, nesne yakalama, uç nokta, orta nokta, merkez, kesişim, dik, çeyrek, en yakın, düğüm, ekleme, ortogonal, ızgara, f3, f8, f7, kutupsal izleme, kutupsal, polarang, nesne yakalama izleme, otrack, izleme, f10, f11
from: 3cf17f94
---

## Ne oluşturacaksınız

Köşegenleri olan bir dikdörtgen, köşegenlerin kesiştiği yerde merkezlenmiş bir daire ve bir kenarın orta noktasından daireye uzanan bir çizgi. Her nokta fareyle seçilir ve her nokta tamdır.

## Yakalama nasıl çalışır

Bir komut nokta istediğinde CadCraft, imlecin yaklaşık 10 piksel içindeki yakalama noktalarını arar. Birini bulduğunda bir işaret ve bir etiket belirir ("Uç nokta", "Kesişim"); tıklama imlecin olduğu yere değil, tam olarak o noktaya düşer.

Yakalamalar, durum çubuğundaki {{ui:Yakala}} düğmesi basılıyken açıktır. {{key:F3}} onları açıp kapatır.

Kullanabileceğiniz yakalamalar şunlardır:

| Yakalama | Konumu |
|---|---|
| Uç nokta | Çizgilerin, yayların ve çoklu çizgi parçalarının uçları |
| Orta nokta | Çizgilerin, yayların ve çoklu çizgi parçalarının ortası |
| Merkez | Dairelerin ve yayların merkezi, çoklu çizgi yay parçalarının merkezi |
| Çeyrek | Daire ve yayların 0, 90, 180 ve 270 derecelik noktaları |
| Kesişim | İki nesnenin kesiştiği yer |
| Dik | Son noktaya dik olan nesne üzerindeki nokta (bir temel nokta gerekir) |
| Teğet | Son noktadan gelen bir çizginin bir daire ya da yaya tam dokunduğu nokta. Henüz son nokta yoksa (bir çizginin ilk noktası), işaret "ertelendi" yazar: dokunma noktası bir sonraki nokta bilindiğinde hesaplanır; böylece Teğet'ten Teğet'e bir çizgi iki daireye de dokunur |
| En yakın | Herhangi bir nesne üzerindeki en yakın nokta |
| Düğüm | Nokta nesneleri |
| Ekleme | Metinlerin ve blok başvurularının ekleme noktası |

Hepsi varsayılan olarak açıktır; Teğet ve En yakın hariç. En yakın, başka bir şey istediğinizde genellikle öne geçer; ihtiyacınız olduğunda Teğet'i açın.

## Yakalamalarınızı seçin

1. Durum çubuğunda {{ui:Yakala}} yanındaki küçük oka tıklayın. {{ui:Nesne yakalamalar}} listesi açılır.
2. Yakalamaları işaretleyin ya da işaretini kaldırın. Değişiklikler hemen uygulanır.
3. Listeyi kapatmak için oka yeniden tıklayın.

CadCraft seçiminizi ve {{ui:Izgara}}, {{ui:Ortogonal}} ve {{ui:Yakala}} ayarlarını bu tarayıcıda hatırlar.

## Adımlar

1. `REC` yazıp {{key:Enter}} tuşuna basın.
2. `0,0` yazıp {{key:Enter}} tuşuna basın.
3. `@4000,3000` yazıp {{key:Enter}} tuşuna basın. Bir dikdörtgen belirir.
4. {{ui:Sınırlar}} düğmesine tıklayın.
5. `L` yazıp {{key:Enter}} tuşuna basın.
6. İmleci sol alt köşeye getirin. İşaret "Uç nokta" gösterir. Tıklayın.
7. "Uç nokta" görünene kadar sağ üst köşeye gidin. Tıklayın.
8. Çizgiyi bitirmek için {{key:Enter}} tuşuna basın.
9. {{cmd:LINE}} komutunu yeniden çalıştırmak için bir kez daha {{key:Enter}} tuşuna basın ve diğer köşegeni sağ alt köşeden sol üst köşeye aynı şekilde çizin.
10. Bir daire başlatmak için `C` yazıp {{key:Enter}} tuşuna basın.
11. İmleci köşegenlerin kesiştiği yere getirin. İşaret "Kesişim" gösterir. Tıklayın.
12. `800` yazıp {{key:Enter}} tuşuna basın.

Merkezi kesişme noktasına tam oturan bir daire görmelisiniz.

13. `L` yazıp {{key:Enter}} tuşuna basın.
14. İmleci dikdörtgenin sol kenarının ortasına getirin, "Orta nokta" görünene kadar. Tıklayın.
15. İmleci dairenin üzerine, sol tarafına getirin. İşaret "Dik" ya da "Çeyrek" gösterir; burada ikisi de aynı noktadır. Tıklayın.
16. {{key:Enter}} tuşuna basın.

Yeni çizgi sol kenarın orta noktasından başlar ve tam olarak daire üzerinde durur.

## Tek bir tıklama için bir yakalamayı atlayın

{{key:Shift}} tuşunu basılı tutarak tıklayın. Bu tıklama için nesne yakalamaları yok sayılır ve nokta tam olarak imlecin olduğu yere (ya da Ortogonal açıksa Ortogonal yönüne göre) düşer.

## Ortogonal

{{ui:Ortogonal}} ({{key:F8}}) bir sonraki noktayı temel noktadan düzgünce sağa-sola ya da yukarı-aşağı tutar. Tıklamalar ve doğrudan mesafe girişi için (istemde yazılan çıplak bir sayı) geçerlidir. Nesne yakalamaları Ortogonal'in önüne geçer: bir yakalama işareti görünüyorsa tıklama yakalamaya gider.

## Kutupsal izleme

{{ui:Kutupsal}} ({{key:F10}}) daha çok açıda çalışan Ortogonal gibidir. Bir komutun temel noktası varken (bir çizginin son noktası, bir taşıma komutunun temel noktası), imleç bu noktadan kutupsal adımın bir katındaki bir ışına yaklaştığında hizalanır: kesik bir çizgi görünür ve imlecin yanındaki bir etiket `Kutupsal: 1200 < 30°` yazar. Bu noktayı kullanmak için tıklayın ya da bir mesafe yazın: `1200` yazarsanız ışın boyunca tam 1200 gidilir.

Adım, siz değiştirene kadar 90°'dir: {{cmd:POLARANG}} yazın, {{key:Enter}} tuşuna basın ve `30` (ya da 45, 22.5, 15 …) yazın. Kutupsal ve Ortogonal birbirini dışlar: birini açmak diğerini kapatır.

## Nesne yakalama izleme

{{ui:İzle}} ({{key:F11}}) imleci üzerinde durduğunuz yakalama noktalarına hizalar; böylece yardımcı çizgiler çizmeden bir köşeyle aynı seviyede, başka bir köşenin üstünde bir nokta seçebilirsiniz.

1. {{ui:Yakala}} ve {{ui:İzle}} seçeneklerini açın, sonra bir nokta isteyen bir komut başlatın (`L`).
2. İmleci bir yakalama noktasının, örneğin bir köşenin, üzerinde tıklamadan yarım saniye bekletin. Küçük bir çarpı işaret eder: edinildi. Bırakmak için yeniden üzerinde bekletin.
3. İmleci ondan düz olarak, yatay ya da dikey uzaklaştırın. Kesik bir çizgi imleci izler ve etiket `İzle: 600 < 90°` yazar. Tıklayın ya da bir mesafe yazın.
4. İkinci bir nokta edinin ve birinin dikeyiyle diğerinin yatayının buluştuğu yere gidin: imleç o kesişme yakalanır (`İzle: iki çizginin buluştuğu yer`).

{{ui:Kutupsal}} da açıksa, edinilen noktalar her kutupsal açıda izlenir. Komut bitene kadar en fazla yedi nokta tutulur. {{key:Shift}}, yakalamalarda olduğu gibi izlemeyi bir tıklama için kapatır.

## Izgara

{{ui:Izgara}} ({{key:F7}}) çizimin arkasında bir çizgi ızgarası gösterir; her beşinci çizgi daha kalındır; aralık yakınlaştırdıkça değişir. {{ui:Izgara yakalama}} ({{key:F9}}) açılana kadar yalnızca bir kılavuzdur: o zaman tıklamalar, bir nesne yakalaması noktayı önce almadıkça en yakın ızgara noktasına düşer.

## Bilgisayarınızdaki işlev tuşları

{{key:F9}} Izgara yakalama, {{key:F10}} Kutupsal ve {{key:F11}} İzle'dir.

:::mac
Mac'te F3, F7, F8 ve F9 genellikle Mission Control ve medyayı kontrol eder. Tuşla birlikte **fn** tuşunu basılı tutun ya da standart işlev tuşlarını açın; bkz. [Tuşlar, fareler ve dokunmatik yüzeyler](common:keys). Durum çubuğu düğmeleri her zaman çalışır.
:::

:::firefox
Firefox'ta F7 aynı zamanda imleç gezinme (caret browsing) tuşudur. Firefox imleç gezinmeyi açmak isterse **Hayır**'ı seçin. Soru sürekli çıkıyorsa {{ui:Izgara}} düğmesini kullanın.
:::

:::touch
Dokunmatik ekranda üzerine gelme olmadığı için yakalama işareti yalnızca parmağınızın dokunduğu yerde görünür. Küçük hedefler için iyice yakınlaştırın ya da koordinat yazın.
:::

## Sık yapılan hatalar

- **Tıklama yanlış noktaya gitti.** Tıklamadan önce işaret etiketine bakın: ikisi de yakınsa Uç nokta, Orta noktanın önüne geçer. Yakınlaştırın ya da ihtiyacınız olmayan yakalamaların işaretini kaldırın.
- **Hiç işaret görünmüyor.** {{ui:Yakala}} kapalı olabilir, istediğiniz yakalama işaretsiz olabilir ya da nesne kapalı ya da dondurulmuş bir katmanda olabilir.
- **Yoğun bir çizimde yakalamalar yanlış şeyi tutuyor.** Yakınlaştırın. Yakalama mesafesi ekran pikselleriyle ölçülür; yakınlaştırmak onu çizimde küçültür.
- **Shift'in düz bir çizgi vereceğini sanmak.** CadCraft'ta Shift bir tıklama için yakalamaları kapatır. Düz çizgiler için {{ui:Ortogonal}} kullanın.
- **Noktaların ızgara noktalarına oturacağını sanmak.** {{ui:Izgara yakalama}} ({{key:F9}}) açın ya da yuvarlak sayılar için koordinat yazın.
