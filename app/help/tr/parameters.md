---
title: Parametre ve denklemleri kullanın
summary: Boyutlara ad verin, width / 2 gibi ifadelerle yönlendirin ve yönlendirilen bir boyuta bir sayı yazarak onu yönlendireni değiştirin.
keywords: parametreler, par, parametre yöneticisi, denklemler, ifadeler, değişkenler, iki yönlü, tasarım amacı, kullanıcı parametresi, fx
from: 650b9844
---

## Her boyut için tek bir tablo

{{ui:Parameters}} paneli ({{ui:Parametric}} grubundaki {{ui:Parameters}} düğmesi ya da {{cmd:PARAMETERS}} yazın), her boyutsal kısıtlamayı (`d1`, `rad1`, `dia1`, `ang1` ya da verdiğiniz ad) ve kendi parametrelerinizi birlikte listeler. Her ad, her ifadede kullanılabilir.

Her satırda şunlar bulunur:

- **Ad**: yeniden adlandırmak için yeni bir ad yazın; onu kullanan her ifade bunu izler.
- **İfade**: bir sayı (`40`) ya da bir ifade (`width / 2 + gap`). İçine yazın ve {{key:Enter}}'a basın: çizim izler.
- **Değer**: neye hesaplandığı. Bir ifadenin yönlendirdiği bir satırda, buraya da bir sayı yazabilirsiniz: CadCraft onun arkasındaki parametreyi hesaplar. `d1 = width / 2` ile, d1'in değerine `30` yazmak `width` değerini 60'a ayarlar.

Bir değeri iki parametre yönlendirdiğinde (`width / 2 + gap`), hangisinin değiştirileceğini bir iletişim kutusu sorar. Her değişiklik tek bir geri alma adımıdır ({{key:Mod+Z}}).

## Kendi parametrenizi ekleyin

1. {{ui:Parameters}} panelini açın.
2. Bir ad (`gap`) ve bir değer (`10`) yazın, ardından {{ui:Add}} seçeneğini seçin.
3. Onu kullanın: d1'in ifadesine `width / 2 + gap` yazın ve {{key:Enter}}'a basın.

Adlar bir harf ya da `_` ile başlar ve harf, rakam ve `_` içerir. İşlev adları, `pi` ve birim adları ad olamaz.

## İfadeler

| Yazın | Anlamı |
|---|---|
| `+ - * / ^ %` | toplama, çıkarma, çarpma, bölme, üs, kalan |
| `( )` | gruplama |
| `sin cos tan asin acos atan atan2` | derece cinsinden trigonometri |
| `sqrt pow exp ln log abs sign` | kökler, üsler, logaritmalar |
| `ceil floor int round min max` | yuvarlama ve sınırlar |
| `if(a > b, x, y)` | bir seçim |
| `pi` | 3.14159… |

Sayılar bir birim taşıyabilir: `25mm`, `1in`, `2'`, `90deg`. Birimli uzunluklar milimetreye çevrilir, bu yüzden birimleri yalnızca milimetre ile ölçülen çizimlerde kullanın; başka yerde düz sayılar yazın.

## Komut satırında

`-PARAMETERS` paneli açmadan aynısını yapar: `N` yeni, `E` düzenle (boyutsal bir kısıtlamayı da), `R` yeniden adlandır, `D` sil, `?` listele.

## Reddedilenler

- Kendini doğrudan ya da başkaları üzerinden kullanan bir ifade: "width, d1 birbirini kullanıyor."
- Bir boyutun alamayacağı bir değer: negatif bir uzunluk, 180°'yi aşan bir açı.
- Çizimin diğer kısıtlamalarıyla alamayacağı bir değer: hiçbir şey değişmez ve mesaj engelleyen kısıtlamaları adlandırır.
- Kullanılan bir parametrenin silinmesi: panel, önce değerini onlara yazmayı önerir. Bir boyutsal kısıtlamanın adı, kısıtlamayı silerek silinir.
