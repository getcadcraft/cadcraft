---
title: Göstərici çertyojun üzərində tullanır və ya gecikir
summary: Köhnə və ya yavaş kompüterdə nişangah siçanı hamar izləmədikdə nə etmək lazımdır.
keywords: kursor tullanır, göstərici gecikməsi, nişangah yavaş, titrəyən kursor, köhnə kompüter, köhnə qrafik kart, inteqrasiya olunmuş qrafika, aparat sürətləndirməsi, hamar göstərici, yavaş laptop
from: 39dc9057
---

CadCraft brauzerdə işləyir (CadCraft Studio da brauzer görünüşüdür), buna görə heç nə konkret bir qrafik karta görə qurulmayıb. Nişangah tətbiq tərəfindən çəkilir, yəni tətbiq bir kadrı çəkə bildiyi qədər sürətlə hərəkət edə bilər.

## CadCraft-ın əlavələri azaltmasına icazə verin

1. Sağ yuxarıdakı çarxı ({{ui:Parametrlər}}) açın və {{ui:CadCraft}} sekmesində qalın.
2. {{ui:Yavaş kompüterlərdə daha hamar göstərici}} seçin.
3. {{ui:Açıq}} seçin.

Bu açıq olanda kompüterinizin öz nişangahı çəkilmiş nişangahın və seçim qutusunun (tam ekran nişangahı da daxil olmaqla) yerinə istifadə olunur, və göstəricinin altındakı obyekt göstərici hərəkət edərkən deyil, dayananda işıqlanır. Obyekt tutmaları, izləmə və rezin zolaq əvvəlki kimi işləyir.

{{ui:Avtomatik}} CadCraft-ın başlanğıc vəziyyətidir: göstəricini hərəkət etdirərkən kadrların nə qədər çəkildiyinə baxır və bir neçə saniyə yavaş qaldıqda bunu özü açır. Bu, bunu bir dəfə sizə bildirir. {{ui:Söndür}} sürətdən asılı olmayaraq çəkilmiş nişangahı saxlayır.

## Hələ də yavaşdırsa

- Brauzerinizdə aparat sürətləndirməsinin açıq olduğunu yoxlayın: yeni sekmədə `chrome://gpu` (və ya `edge://gpu`) açın. Birinci sətirlər "Yalnız proqram təminatı" və ya "Söndürülüb" deyirsə, brauzer qrafik kartsız çəkir. Qrafik drayverini yeniləmək çox vaxt bunu düzəldir.
- Digər ağır sekmələri və proqramları bağlayın və daha kiçik brauzer pəncərəsi istifadə edin.
- Bizə {{ui:Kömək}}, {{ui:Problem barədə məlumat verin}} vasitəsilə bildirin: brauzerdən və ya CadCraft Studio-dan istifadə etdiyinizi, onun versiyasını və gpu səhifəsinin nə dediyini qeyd edin.
