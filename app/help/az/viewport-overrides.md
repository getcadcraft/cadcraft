---
title: Görünüş pəncərəsi sinif dəyişiklikləri
summary: Vərəqdə sinfi gizlədin və ya yalnız bir görünüş pəncərəsində ona başqa rəng, xətt qalınlığı və ya doldurma verin; model və digər görünüş pəncərələri olduğu kimi qalır.
keywords: görünüş pəncərəsi, sinif dəyişikliyi, görünüş pəncərəsi dəyişikliyi, sinfi görünüş pəncərəsində gizlət, vərəq, tərtibat, VPLAYER, çap, Vectorworks
from: c1a2b51f
---

Vərəq tez-tez eyni modeli bir neçə dəfə göstərir: mebeli olan plan və onsuz plan, ya da yalnız işıqların rəngli olduğu işıqlandırma planı. Görünüş pəncərəsi sinif dəyişikliyi [sinifin](topic:classes) necə göründüyünü **yalnız həmin görünüş pəncərəsində** dəyişir.

1. Vərəqi açın və bir görünüş pəncərəsi seçin.
2. Siniflər panelini (`CLASSES`) açın və sinfi seçin.
3. {{ui:Bu görünüş pəncərəsi}} altında {{ui:Bu görünüş pəncərəsində gizlət}} işarələyin, ya da {{ui:Burada rəng}}, {{ui:Burada xəttin qalınlığı}} və ya {{ui:Burada doldurma}} təyin edin.

Aşağıdakı siyahıda bu görünüş pəncərəsinin dəyişdirdiyi hər sinif göstərilir. {{ui:Bu görünüş pəncərəsinin dəyişikliklərini sil}} onların hamısını götürür. Hər dəyişiklik bir geri qaytarma addımıdır.

## Dəyişiklik nəyi dəyişir

- **Gizlətmək** bu görünüş pəncərəsində sinfi və onun altındakı hər sinfi gizlədir.
- **Rəng, xəttin qalınlığı və doldurma** dəyəri obyektin özündə təyin olunmayan sinfin obyektlərini dəyişir, yəni onu sinfə və ya qata görə alan obyektləri. Öz rəngi olan obyekt onu saxlayır, görünüş pəncərəsi qatı dəyişikliyində olduğu kimi.

Dəyişikliklər ekranda və çaplarda, PDF-lərdə göstərilir, o cümlədən PDF-ə dərc edilmiş vərəq dəsti. Onlar görünüş pəncərəsinin donmuş qatları və qat dəyişiklikləri ilə birlikdə işləyir.

Dəyişikliklər DWG və DXF-də çertyojla birlikdə saxlanılır (sinif siyahısı ilə birlikdə, `CADCRAFT_CLASSES` blokunda) və fayl CadCraft-da açılanda eyni görünüş pəncərəsinə qayıdır.
