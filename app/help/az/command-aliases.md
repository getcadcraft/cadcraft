---
title: Əmr ləqəbləri redaktə edin
summary: Öz əmr ləqəblərinizi tanış formatda bir mətn faylında saxlayın, .pgp faylını idxal və ixrac edin və REINIT ilə yenidən yükləyin.
keywords: ləqəb, ləqəblər, aliasedit, pgp, qısa yol, qısa ad, reinit, klaviatura, fərdiləşdirmə, ləqəbləri redaktə et
from: 6ab6fa0e
---

## Nə öyrənəcəksiniz

Əmrlər üçün öz qısa adlarınızı necə əlavə etməyi, məsələn {{cmd:LINE}} üçün `LL`, hamısını bir mətn faylında.

## Ləqəb əlavə edin

1. {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Ləqəbləri redaktə et…}} yolunu açın, və ya {{cmd:ALIASEDIT}} yazın və {{key:Enter}} basın.
2. Ləqəbi, vergülü və ulduzdan sonra əmri olan bir sətir əlavə edin:

```
LL,     *LINE
```

3. {{ui:Saxla}} düyməsini basın. Əmr sətri neçə ləqəbinizin istifadə olunduğunu göstərir.
4. `LL` yazın və {{key:Enter}} basın: LINE başlayır.

Sizin ləqəbləriniz CadCraft-ın öz ləqəbləri üzərində durur. Sizin sətriniz eyni adlı daxili ləqəbi üstələyir; öz sətrinizi silsəniz, daxili ləqəb geri qayıdır.

## CadCraft-ın qəbul etmədiyi sətirlər

Redaktor yazdığınız zaman hər problemi sətir nömrəsi ilə sadalayır:

- əmr mövcud deyil;
- ləqəb özü əmrin adıdır (`LINE, *CIRCLE` LINE-ı gizlədərdi);
- sətir `ALIAS, *COMMAND` formatında deyil;
- eyni ləqəb iki sətirdədir (sonrakı sətir qalib gəlir).

Kompüterinizdə proqram başladan sətirlər, məsələn `NOTEPAD, START, 1, *File to edit: ,`, bir qeydlə atlanır: brauzerdəki proqram proqram başlada bilməz.

## Başqa proqramdan ləqəblərinizi gətirin

1. Ləqəb redaktorunda {{ui:İdxal et .pgp…}} düyməsini basın və faylı seçin. Həmçinin `.pgp` faylını çertyojun üzərinə ata bilərsiniz.
2. Sadalanan problemləri yoxlayın (CadCraft-da olmayan əmrlər qəbul edilmir, qalanları işləyir).
3. {{ui:Saxla}} düyməsini basın.

{{ui:İxrac et .pgp}} CadCraft-ın ləqəblərini və sizinkiləri eyni formatda bir fayl kimi saxlayır.

## Faylı yenidən yükləyin

Ləqəb faylınızı yenidən tətbiq etmək üçün {{cmd:REINIT}} yazın və {{key:Enter}} basın. Fayl bu brauzerdə saxlanılır; masaüstü proqram onu öz qovluğunda saxlayacaq, bulud xidməti isə sinxronlaşdıracaq.

## İstənilən əmr üçün klaviatura qısayolları

Ləqəb yazılır; qısayol düymədir. Bir əmrə öz düyməsini vermək üçün:

1. {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Klaviatura qısayolları…}} yolunu basın, və ya `KEYS` yazın və {{key:Enter}} basın.
2. {{ui:Düymə}} qutusunu basın və düymələri basın, məsələn {{key:Alt+Shift+C}}.
3. {{ui:İşlədir}} sahəsinə əmri yazın, istəsəniz ondan sonra yazılacaq şeyi də: `CIRCLE`, və ya `ZOOM E`.
4. {{ui:Əlavə et (A)}} düyməsini basın.

Düymə {{key:Mod}} və ya {{key:Alt}} ilə hərf və ya rəqəm, ya da sərbəst funksiya düyməsi ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}) tələb edir. CadCraft, proqram və ya brauzerin artıq istifadə etdiyi düymələr və Mənim alətlərim düyməsinin tutduğu düymələr (bax [Öz düymələriniz](topic:my-tools)) qəbul edilmir və qutu səbəbini göstərir. Qısayollar bu brauzerdə (və ya masaüstü proqramda) saxlanılır; {{ui:Çıxar (R)}} onu silir.
