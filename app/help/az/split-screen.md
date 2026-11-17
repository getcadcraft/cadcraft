---
title: Ekranı bölün
summary: Çertyojı öz miqyası olan iki, üç və ya dörd pəncərədə göstərin, vərəqi modelin yanına qoyun və bir neçə çertyoju yan-yana açın.
keywords: bölmək, ekranı bölmək, pəncərələr, vports, viewports, düzülmüş, yan-yana, üst-üstə, iki çertyoj, sekmələr, sənəd sekmələri, müqayisə, bölücü, model və vərəq, bir neçə çertyoj, açıq çertyojlar
from: ee2f034b
---

## Nə öyrənəcəksiniz

Bir çertyoju eyni anda bir neçə pəncərədə, hər birinin öz miqyası ilə necə görmək, və bir neçə çertyoju açıb yan-yana necə görmək.

## Bir çertyoju pəncərələrə bölün

1. Çertyoj açın və ya bir neçə xətt və çevrə çəkin.
2. {{ui:Görünüş}} › {{ui:Daha çox}} açın və {{ui:Yan-yana bölün}} seçin (və ya {{cmd:VPORTS}} yazın, sonra `2`, sonra {{key:Enter}}).

Çertyoj sahəsi iki pəncərəyə bölünür, hər ikisi eyni görünüşü göstərir. Aktiv pəncərənin mavi çərçivəsi olur və ona nişangah verilir.

3. Digər pəncərəyə klikləyin. O, aktiv olur. (Bu ilk klik yalnız pəncərəni dəyişir; seçmək üçün yenidən klikləyin.)
4. Çarxla miqyaslayın. Yalnız o pəncərə miqyaslanır.
5. Pəncərələr arasındakı xətti sürükləyib birini genişləşdirin. Bölücüyə fokuslanmış {{key:Home}} onu ortaya qaytarır.

{{cmd:VPORTS}} həmçinin `3` (bir tərəfdə iki pəncərə, digərində böyük biri: `L` və ya `R`), `4` və bir pəncərəyə qayıtmaq üçün `SI` qəbul edir. Aktiv pəncərənin görünüşü onda sahəni doldurur. Vərəqdə isə {{cmd:VPORTS}} (AutoCAD kimi) vərəqə görünüş pəncərəsi əlavə edir; orada {{cmd:SPLIT}} yazın və ya Görünüş menyusundan istifadə edin.

## Bir pəncərədən digərinə çəkin

1. Yan-yana bölün və hər pəncərəni çertyojun fərqli küncünə miqyaslayın.
2. `L` yazın və {{key:Enter}} basın, sonra sol pəncərədə ilk nöqtəni klikləyin.
3. Sağ pəncərəni bir dəfə klikləyib aktiv edin, sonra orada ikinci nöqtəni klikləyin.

Xətt iki yer arasında gedir. Əmr pəncərə dəyişdikcə davam edir və rezin zolaq hər pəncərədə göstərilir.

## Modelin vərəqin yanında

1. Yan-yana bölün.
2. Sağ pəncərəni klikləyin, sonra çertyojun altındakı vərəq sekmələrindən birini klikləyin.

Sağ pəncərə vərəqi göstərir; sol hələ modeli göstərir. Hər pəncərə öz məkanını saxlayır, buna görə modeldə çəkib vərəqin görünüş pəncərəsinin izləməsini görə bilərsiniz.

## Bir pəncərədə bir neçə çertyoj

1. Çertyoj açın. Sonra başqasını açın (və ya {{ui:Yeni}} basın).

Hər çertyoj çertyoj sahəsinin üzərində öz sekmesində açılır. Sekmeyə klikləyib dəyişin; əmr sətri, panellər və geri qaytarma dəyişdiyiniz çertyojun ardınca gedir. Bir çertyojda {{key:Mod+C}} və digərində {{key:Mod+V}} obyektləri onlar arasında kopyalayır.

2. {{ui:Açıq çertyojları yan-yana düzün}} klikləyin (sekmələrin sonundakı bölmə işarəsi), və ya yanındakı üst-üstə işarəsi.

İndi hər pəncərə açıq çertyojlardan birini göstərir, dörddək qədər. İşləmək üçün həmin pəncərəyə klikləyin.

3. Sekmədə {{ui:×}} klikləyin və həmin çertyoju bağlayın. Saxlanılmamış dəyişiklikləri varsa, CadCraft əvvəlcə soruşur.

:::tip
Pəncərə yalnız yeni, toxunulmamış çertyoj saxlayarkən çertyoj açmaq yeni sekmə əlavə etmək əvəzinə həmin sekmədən istifadə edir.
:::

## Birlikdə sürüşdürmə və miqyas

İki yenilənməni müqayisə etmək üçün onları yan-yana düzün, sonra {{ui:Pəncərələrin görünüşlərini bağla}} klikləyin (sekmələrin sonundakı bağ işarəsi), və ya {{ui:Görünüş}} › {{ui:Daha çox}}da seçin, və ya {{cmd:LINKVIEWS}} və `ON` yazın. İndi bir pəncərədə sürüşdürmə və ya miqyas modeli göstərən (və ya vərəqi göstərən) hər pəncərəni eyni yerə köçürür, beləliklə iki çertyoj düzgün qalır. {{cmd:LINKVIEWS}} `OFF` hər pəncərənin yenidən öz-özünə hərəkət etməsinə icazə verir.

## Ümumi səhvlər

- **Klikim heç nə etmədi.** O, pəncərəni aktiv etdi. Seçmək və ya çəkmək üçün yenidən klikləyin.
- **Çarx səhv pəncərəni miqyasladı.** Çarx göstəricinin altındakı pəncərəni miqyaslayır və onu aktiv edir.
- **Pəncərələr yenidən birə qayıtdı.** Çertyoj açmaq onu saxlandığı kimi göstərir; pəncərəsiz saxlanmış çertyoj birdə açılır.
- **Görmədiyim saxlanılmamış dəyişikliklər barədə səhifədən çıxarkən xəbərdarlıq edir.** Başqa sekmədə dəyişiklikləri olan çertyoj var. Ora keçin və saxlayın, ya da saxlamadan çıxın.
