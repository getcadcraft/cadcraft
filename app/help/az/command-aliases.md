---
title: Komanda ləqəblərini redaktə et
summary: Öz komanda ləqəblərinizi tanış formatda bir mətn faylında saxlayın, .pgp faylını idxal və ixrac edin və REINIT ilə yenidən yükləyin.
keywords: ləqəb, ləqəblər, aliasedit, pgp, qısayol, qısa ad, reinit, klaviatura, fərdiləşdirmə, ləqəbləri redaktə et
from: 2282d36f
---

## Nə öyrənəcəksiniz

Komandalar üçün öz qısa adlarınızı necə əlavə etmək, məsələn {{cmd:LINE}} üçün `LL`, hamısını bir mətn faylında saxlamaq.

## Ləqəb əlavə etmək

1. {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Ləqəbləri redaktə et…}} seçin və ya {{cmd:ALIASEDIT}} yazıb {{key:Enter}} basın.
2. Ləqəbi, vergülü və ulduzdan sonra komandanı yazaraq bir sətir əlavə edin:

```
LL,     *LINE
```

3. {{ui:Saxla}} klikləyin. Komanda sətri neçə ləqəbinizin istifadə olunduğunu göstərir.
4. `LL` yazın və {{key:Enter}} basın: LINE başlayır.

Sizin ləqəbləriniz CadCraft-ın öz ləqəbləri üzərində durur. Sizin sətriniz eyni adlı daxili ləqəbi üstələyir; sətri silin və daxili ləqəb yenidən qayıdır.

## CadCraft-ın qəbul etmədiyi sətirlər

Redaktor yazdıqca hər problemi sətir nömrəsi ilə sadalayır:

- komanda mövcud deyil;
- ləqəb özü komandanın adıdır (`LINE, *CIRCLE` LINE-ı gizlədərdi);
- sətir `ALIAS, *COMMAND` formasında deyil;
- eyni ləqəb iki sətirdədir (sonrakı qalib gəlir).

Kompüterinizdə proqram başladan sətirlər, məsələn `NOTEPAD, START, 1, *File to edit: ,`, bir qeydlə ötürülür: brauzerdəki tətbiq proqram başlada bilmir.

## Ləqəbləri başqa proqramdan gətirin

1. Ləqəb redaktorunda {{ui:İdxal et .pgp…}} klikləyin və faylı seçin. `.pgp` faylını çertyojun üzərinə də sürükləyə bilərsiniz.
2. Sadalanan problemləri yoxlayın (CadCraft-da olmayan komandalar rədd edilir, qalanları işləyir).
3. {{ui:Saxla}} klikləyin.

{{ui:İxrac et .pgp}} CadCraft-ın və sizin ləqəblərinizi eyni formatda bir fayla saxlayır.

## Faylı yenidən yükləyin

Ləqəb faylınızı yenidən tətbiq etmək üçün {{cmd:REINIT}} yazın və {{key:Enter}} basın. O, bu brauzerdə saxlanılır; masaüstü tətbiq onu öz qovluğunda saxlayacaq, bulud xidməti isə onu sinxronlaşdıracaq.

## Komanda seçimləri üçün hərflər

Ləqəb komandanı adlandırır. Komandanın seçimlərinə cavab verən hərfləri dəyişmək üçün (ARRAY-da Polyar üçün `P`) bax: [Komanda seçimlərinə öz hərflərinizi verin](topic:option-letters).

## İstənilən komanda üçün klaviatura qısayolları

Ləqəb yazılır; qısayol isə düymədir. Komandaya öz düymənizi vermək üçün:

1. {{ui:Görünüş}} › {{ui:Daha çox}} › {{ui:Klaviatura qısayolları…}} seçin və ya `KEYS` yazıb {{key:Enter}} basın.
2. {{ui:Düymə}} qutusunu klikləyin və düymələri basın, məsələn {{key:Alt+Shift+C}}.
3. {{ui:İşlədir}} sahəsində komandanı yazın və istəsəniz ondan sonra yazılacaq şeyi: `CIRCLE`, ya da `ZOOM E`.
4. {{ui:Əlavə et (A)}} klikləyin.

Düymə {{key:Mod}} və ya {{key:Alt}} ilə hərf və ya rəqəm, ya da sərbəst funksiya düyməsi ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}) tələb edir. CadCraft, tətbiq və ya brauzerin artıq istifadə etdiyi düymələr və Mənim alətlərim düyməsinin tutduğu düymələr (bax: [Öz düymələriniz](topic:my-tools)) rədd edilir və qutu səbəbini göstərir. Qısayollar bu brauzerdə (və ya masaüstü tətbiqdə) saxlanılır; {{ui:Çıxar (R)}} onu silir.
