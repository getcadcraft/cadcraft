---
title: Mərtəbələri bir çertyojda yığın
summary: Birinci mərtəbəni zemin mərtəbənin üstündə eyni koordinatlarda çəkin və hər mərtəbəni xref olmadan ayrıca söndürün.
keywords: mərtəbə, mərtəbələr, FLOORS, FLR, FLOOR, FLOORLAYERS, səviyyə, yığın, layihə qatı, model sahəsi, altlıq, xref
from: 7440fc87
---

Mərtəbələr planları bir model sahəsində yığmağa imkan verir. Hər mərtəbənin öz obyektləri var, qatlar isə hamısında işləməyə davam edir. `P-Walls` qatındakı divar istənilən mərtəbədə ola bilər.

## Başlayın

`FLOORS` (`FLR`) yazın, və ya {{ui:Görünüş}} qrupunun {{ui:Daha çox}} menyusunda {{ui:Mərtəbələr…}} seçin, sonra {{ui:Mərtəbələrlə başlayın}} seçin. Bu günə qədər çəkdiyiniz hər şey zemin mərtəbəyə düşür.

## Mərtəbədə çəkin

Panelin dəyirmi düyməsi ilə mərtəbəni seçin. Yeni obyektlər onun üzərinə düşür.

Göstərilən digər mərtəbələr altında solğun görünür. Onlara tutma edə bilərsiniz, belə ki, birinci mərtəbə zemin mərtəbə ilə düz xətt olur, amma onları aktiv mərtəbə etməyincə dəyişdirə bilməzsiniz. Göz işarəsi mərtəbəni söndürür. Divarlar yalnız öz mərtəbəsindəki divarlarla birləşir.

Mərtəbəni aşağıdakı mərtəbədən başlatmaq üçün istədiyinizi seçin, paneldə mərtəbəni seçin və {{ui:Orada kopyala}} basın.

## Mərtəbələri vərəqlərdə qoyun

Vərəqdə viewport seçin və Xassələrdə {{ui:Göstərilən mərtəbə}} altında onun mərtəbəsini seçin. Mərtəbə seçilməmiş viewport üzərində açıq olan bütün mərtəbələri göstərir.

## Faylı başqasına göndərin

Digər CAD proqramları mərtəbələri bilmir, ona görə hamısını birlikdə göstərirlər. Faylı göndərməzdən əvvəl paneldə {{ui:Mərtəbələri qatlara çevirin}} seçin və ya `FLOORLAYERS` yazın. Hər obyekt öz mərtəbəsinin adını daşıyan qata keçir, məsələn `Zemin mərtəbə-P-Walls`, belə ki, yenə də hər mərtəbəni söndürə bilərsiniz. Geri alma bunu geri qaytarır. CadCraft saxladığı DWG və ya DXF faylında mərtəbələri saxlayır.
