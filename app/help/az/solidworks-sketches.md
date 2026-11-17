---
title: Eskizləri digər detal modelləşdiricilərinə və onlardan köçürün
summary: Çertyojunuzu detal modelləşdiricidə bir məhdudlaşdırılmış eskiz kimi yenidən quran makro yazın və ondan ixrac olunmuş eskizi açın.
keywords: eskiz, makro, swb, vba, ixrac, detal modelləşdirici, qlobal dəyişənlər, tənliklər, əlaqələr, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks CadCraft qurulan yerdə mövcud deyil, buna görə hər iki istiqamət SolidWorks-də hələ sınaqdan keçirilməyib. CadCraft-ın yazdığı yalnız quruluşa görə yoxlanılır. Nəticəyə etibar etməzdən əvvəl yoxlayın.
:::

## Çertyolu eskiz kimi göndərin

1. Çertyoju məhdudlaşdırın və ölçüləndirin (bax: [Çertyojun məhdudlaşdırılması](topic:constraints)).
2. {{ui:Parametric}} qrupunda {{ui:Daha çox}} açın və {{ui:SolidWorks üçün makro (.swb)}} seçin, ya da {{cmd:SWBOUT}} yazın.

   Çertyojun adını daşıyan və `.swb` ilə bitən fayl yüklənir.
3. SolidWorks-də **Tools > Macro > Run** seçin və həmin faylı seçin.

Makro öz standart detal şablonundan yeni detal yaradır, Front Plane-də eskiz açır və modelin xətlərini, çevrələrini, qövslərini, nöqtələrini və polixəttlərini ora çəkir, bunlarla:

- məhdudiyyətləriniz eskiz əlaqələri kimi,
- ölçü məhdudiyyətləriniz eyni adlı ölçülər kimi (`d1@Sketch1`),
- öz parametrləriniz qlobal dəyişənlər kimi,
- hər ifadə tənlik kimi.

Detal çertyojun uzunluq vahidini istifadə edir. Mətn, bloklar, ştrixləmələr, ölçülər və vərəqlər eskizin tərkibinə daxil deyil; tarixçə nələrin buraxıldığını göstərir. Tənlik formasında olmayan ifadələr (`if`, `min`, `max`, `round`, `%` və bir neçə digər) cari dəyəri ilə yazılır və tarixçə bunu bildirir. Makronun yarada bilmədiyi hər şey makronun yanındakı log faylına yazılır və sonda bir mesaj hamısını yekunlaşdırır.

## Detaldan eskiz açın

1. SolidWorks-də detal üzərində CadCraft ixrac makrosunu işlədin (onu PartCraft tətbiqində yükləyin: File > Export > Export macro to bring parts back). Detalın yanında `cadcraft-sw-export` formatında `.json` faylı yazılır.
2. CadCraft-da {{ui:Aç}} seçin və həmin `.json` faylını seçin.
3. Detalın bir neçə eskizi olduqda birini seçin.

Eskiz millimetrlərlə çertyoja çevrilir: xətləri, qövsləri, çevrələri və nöqtələri; əlaqələri məhdudiyyət kimi; ölçüləri adları olduğu kimi (`D1`, `D2` …) ölçü məhdudiyyəti kimi; qlobal dəyişənləri parametr kimi; ölçülərindəki tənlikləri isə ifadə kimi. Tarixçə köçürülməyənləri, məsələn CadCraft-da olmayan əlaqələri göstərir. Eskizin detalda yerləşməsi saxlanılmır: o, öz müstəvisində göründüyü kimi düz çəkilir.
