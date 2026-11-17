---
title: Doğrultu ve açıları derece, dakika, saniye olarak yazın ve gösterin
summary: Bir doğrultuyu ölçücü yön açısı gibi, örneğin N45°23'30"E, ya da açının istendiği her yerde derece-dakika-saniye olarak yazın; çizimin açıları AUNITS ile nasıl göstereceğini seçin.
keywords: yön açısı, yön açıları, ölçücü, çeyrek yön açısı, N45E, derece dakika saniye, DMS, açı, yön, parsel, parseller, yerleşim, poligon, AUNITS, ANGUNITS, açı biçimi, kutupsal, doğrudan uzaklık, DIST
from: af805567
---

Bir **açı ya da yön** istediği her yerde CadCraft'a, düz bir derece sayısının yanı sıra bir **çeyrek yön açısı** ya da **derece, dakika ve saniye** cinsinden bir açı da yazabilirsiniz.

## Yön açıları

Bir yön açısı kuzeyi ya da güneyi, 90°'ye kadar bir açıyı, sonra doğuyu ya da batıyı adlandırır:

| Yazdığınız | Yön |
|---|---|
| `N45°23'30"E` ya da `N45d23'30"E` | Kuzeyden doğuya doğru 45°23'30" |
| `S10-30-00W` ya da `S 10 30 W` | Güneyden batıya doğru 10°30' (parçalar arasında tire ya da boşluk) |
| `N45.5E` | Kuzeyden doğuya doğru 45.5° |
| `N`, `E`, `S`, `W` | tam kuzey, doğu, güney, batı |

Harfler herhangi bir biçimde olabilir. İspanyolcada `O` de batı (oeste) anlamına gelir. `d` ve `°` aynı anlama gelir; `'` dakika, `"` saniyedir.

20 m uzunluğunda bir parsel çizgisini N45°23'E yönünde aplike etmek için {{cmd:LINE}} komutunu başlatın, ilk noktayı yazın, sonra `@20<N45d23'E` yazın. Aynısı {{cmd:ROTATE}} komutunun açı isteminde ve açı isteyen her istemde çalışır; ayrıca {{ui:Dinamik giriş}} açı kutusunda da.

## Derece, dakika, saniye

`45°23'30"`, `45d23'30"`, `45d30'` ya da `45d`, X ekseninden saat yönünün tersine bir açıdır. `°` ya da `d` gereklidir: `45-23-30` bir aritmetik işlem olarak okunur (45 − 23 − 30). Dakika ve saniye 60'ın altında olmalıdır. Aritmetik içeren düz bir sayı (`360/7`) hâlâ çalışır.

## Açıların nasıl gösterildiği

{{cmd:AUNITS}} yazın (ya da {{ui:Özellikler}} › {{ui:Geçerli ayarlar}} içinden {{ui:Açı biçimi}} seçin) ve birini seçin:

- **Ondalık derece** (varsayılan): `44.6083°`.
- **Derece-dakika-saniye**: `44°36'30"`.
- **Ölçücü yön açıları**: `N45°23'30"E`.

Hassasiyet {{cmd:AUNITS}} için yazdığınıza uyar: 0 derece gösterir, 2 dakika, 4 saniye ve 5 ila 8 saniyenin ondalıklarını ekler. Biçim {{cmd:DIST}} içinde, durum çubuğunda, dinamik girişte ve izleme ipuçlarında ve {{ui:Özellikler}} açı kutularında gösterilir (düzenlediğiniz bir kutu yukarıdaki biçimlerden herhangi birini kabul eder). Bu tek bir geri alma adımıdır ve DWG ile DXF dosyalarına kaydedilir ($AUNITS, $AUPREC); LISP bunu AUNITS ve AUPREC olarak okur ve yazar.
