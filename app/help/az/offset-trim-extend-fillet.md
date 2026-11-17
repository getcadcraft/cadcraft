---
title: Divarlar üçün ofset, kəsmə, uzatma, filet və faska
summary: Tək xətləri Ofset ilə ikiqat divarlara çevirin, künclər Filet ilə təmizləyin, xətləri Kəsmə və Uzatma ilə kəsin və uzadın.
keywords: ofset, kəsmə, uzatma, filet, faska, kəsik, breakatpoint, uzunlaşdır, divarlar, künc, kəs, paralel, radius, təmizləmə
from: c6c5cbd0
---

## Nə hazırlayacaqsınız

200 qalınlığında divarları olan kiçik otaq: daxili üz çəkilir, xarici üz ofset edilir, künclər təmizlənir və bir divarda qapı açılışı kəsilir.

## Daxili üzü çəkin

1. `L` yazın və {{key:Enter}} basın.
2. `0,0` yazın və {{key:Enter}} basın.
3. `@5000,0` yazın və {{key:Enter}} basın.
4. `@0,4000` yazın və {{key:Enter}} basın.
5. `@-5000,0` yazın və {{key:Enter}} basın.
6. `C` yazın və {{key:Enter}} basın.
7. {{ui:Extents}} düyməsinə basın.

Dörd ayrı xəttiniz var. (Bağlı polixətt bir dəfəyə ofset olunardı; ayrı xətlər Filetin künclərini necə təmizlədiyini göstərir.)

## Xarici üzü ofset edin

1. `O` yazın və {{key:Enter}} basın. Sorğu `Specify offset distance [Through] <Through>:` oxuyur.
2. `200` yazın və {{key:Enter}} basın.
3. `Select object to offset` prompt-unda aşağı xəttə klikləyin.
4. `Specify point on side to offset` prompt-unda onun aşağısında istənilən yerə klikləyin. Paralel xətt 200 aşağıda görünür.
5. Sağ xəttə klikləyin, sonra onun sağına klikləyin.
6. Üst xəttə klikləyin, sonra onun üstünə klikləyin.
7. Sol xəttə klikləyin, sonra onun soluna klikləyin.
8. Əmri bitirmək üçün {{key:Enter}} basın.

Dörd xarici xətt görməlisiniz, hər biri öz daxili xətti qədər uzunluqda, belə ki xarici künclər birləşmir.

:::tip
Məsafə sorğusunda son məsafəni yenidən istifadə etmək üçün {{key:Enter}} basın. Through üçün `T` yazın: onda hər nüsxə klik etdiyiniz nöqtədən keçir, məsafə nə olursa olsun.
:::

{{cmd:OFFSET}} xətlər, qövslər, çevrələr və polixəttlər üzərində işləyir. Bağlı polixəttin ofseti künclərlə birlikdə bütün konturu ofset edir.

## Xarici künclər üçün Filet ilə təmizləyin

{{cmd:FILLET}} bir künc üzərində iki xətti birləşdirir: onları birləşmək üçün həm kəsir, həm uzadır. Radius 0 ilə künc düz olur.

1. `F` yazın və {{key:Enter}} basın. Sorğu `Select first line [Radius]:` oxuyur.
2. Sonuncu filet radius istifadə edibsə, `R` yazın, {{key:Enter}} basın, `0` yazın və {{key:Enter}} basın.
3. Xarici aşağı xəttə, sağ ucuna yaxın klikləyin.
4. `Select second line` prompt-unda xarici sağ xəttə, aşağı ucuna yaxın klikləyin.

İki xətt indi kəskin künclə birləşir və əmr bitir.

5. Növbəti künc üçün {{cmd:FILLET}} təkrarlamaq üçün {{key:Enter}} basın.
6. Bütün dörd xarici künc birləşənə qədər təkrarlayın.

Saxlamaq istədiyiniz hissədə hər xəttə klikləyin. Radius 0-dan böyük olduqda, Filet xətlər arasında qövs əlavə edir.

:::tip
Birinci sorğuda bütün dörd künci bir dəfəyə emal etmək üçün `M` yazın, ya da xarici üzü bir bağlı polixətt kimi çəkin və `P` yazın: hər künc bir dəfəyə edilir. Radiusu dəyişmədən kəskin künc üçün ikinci xətti klikləyərkən {{key:Shift}} basılı saxlayın.
:::

## Künci Faska ilə kəsin

{{cmd:CHAMFER}} künci düz xətt ilə kəsir.

1. `CHA` yazın və {{key:Enter}} basın.
2. `D` yazın və {{key:Enter}} basın. Birinci məsafə üçün `300` yazın və {{key:Enter}} basın, sonra ikinci üçün də 300 istifadə etmək üçün yenidən {{key:Enter}} basın.
3. Daxili yuxarı xəttə sol ucuna yaxın, sonra daxili sol xəttə yuxarı ucuna yaxın klikləyin.

Künc hər xətt boyunca 300 geri kəsilir və faska xətti onları birləşdirir. Birinci xətt üçün uzunluq və bucaq vermək üçün `D` əvəzinə `A` yazın.

## Kəsmə ilə qapı açılışı kəsin

Əvvəlcə aşağı divarın üzərində iki qapı çərçivəsi çəkin, sonra onların arasında divar xətlərini kəsin.

1. `L` yazın və {{key:Enter}} basın.
2. `1000,200` yazın və {{key:Enter}} basın.
3. `@0,-600` yazın və {{key:Enter}} basın, sonra yenidən {{key:Enter}} basın.
4. {{cmd:LINE}} təkrarlamaq üçün {{key:Enter}} basın.
5. `1900,200` yazın və {{key:Enter}} basın.
6. `@0,-600` yazın və {{key:Enter}} basın, sonra yenidən {{key:Enter}} basın.

İndi aşağı divarı 900 aralıqla kəsən iki qısa xətt var.

7. `TR` yazın və {{key:Enter}} basın. Tarixçə `Current settings: Quick mode, edges: No extend` deyir.
8. İki çərçivə arasında daxili aşağı xəttə klikləyin. Həmin hissə yox olur. (Əvvəl üzərinə gətirin: gedəcək hissə boz və kəsikli olur.)
9. İki çərçivə arasında xarici aşağı xəttə klikləyin. Həmin hissə də yox olur.
10. Hər çərçivənin divardan yuxarı çıxan hissəsinə, və altındakı hissəsinə klikləyin.
11. Əmri bitirmək üçün {{key:Enter}} basın.

Aşağı divarda 900-lük açılış görməlisiniz, çərçivələr divar uclarını bağlayır.

Quick rejimdə (defolt) Kəsmə əvvəlcə kəsici kənarları seçməyi soruşmur: hər görünən obyekt kəsici kənardır. Yox olmasını istədiyiniz hissəni seçin, ya da bir neçə hissə üzərindən yol çəkib hamısını bir dəfəyə kəsin. Son seçimi və ya sürüşdürməni əmrdən çıxmadan geri qaytarmaq üçün `U` yazın və {{key:Enter}} basın. Pəncərə, çarpaz, seçilmiş kənarlar və uzatmaq üçün {{key:Shift}} [Kəsmə və uzatma](topic:trim-and-extend)-da var.

## Xətti digərinə çatana qədər uzadın

{{cmd:EXTEND}} xətti, qövsü və ya polixətt ucunu həmin istiqamətdə növbəti obyektə çatana qədər uzadır.

1. `L` yazın və {{key:Enter}} basın.
2. `1000,2000` yazın və {{key:Enter}} basın.
3. `@2000,0` yazın və {{key:Enter}} basın, sonra yenidən {{key:Enter}} basın. Xətt sağ divardan 2000 qısa dayanır.
4. `EX` yazın və {{key:Enter}} basın.
5. Yeni xəttə, sağ ucuna yaxın klikləyin.
6. Əmri bitirmək üçün {{key:Enter}} basın.

Xətt indi sağ divarın daxili üzünə qədər gedir. Hər görünən obyekt sərhəddir; böyüməli olan uca yaxın seçin. {{cmd:TRIM}} daxilində {{key:Shift}}+klik eyni işi görür.

## Kəsin və uzunlaşdırın

{{cmd:BREAK}} (`BR`, və ya {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) kəsici kənar olmadan boşluq kəsir: boşluğun başladığı yerdə obyektə klikləyin (bu klik birinci nöqtədir), sonra bitdiyi yerə klikləyin. Çevrədə birinci nöqtədən ikinciyə saat əqrəbinin əksinə olan hissə gedir. İkinci sorğuda `F` birinci nöqtəni yenidən verməyə imkan verir, və {{cmd:BREAKATPOINT}} boşluq olmadan obyekti bir nöqtədə iki hissəyə ayırır.

{{cmd:LENGTHEN}} (`LEN`) bir ucda uzunluğu dəyişir:

1. `LEN` yazın və {{key:Enter}} basın. Xəttin cari uzunluğunu görmək üçün ona klikləyin; sorğu yenidən soruşur.
2. Necə olduğunu seçin: `DE` (Delta: əlavə ediləcək miqdar, çıxarmaq üçün mənfi; qövsün bucağı üçün `A`), `P` (Percent: 50 onu yarıya endirir), `T` (Total: olmalı olduğu uzunluq) və ya `DY` (Dynamic: ucu sürüklə).
3. Hərəkət etməli olan ucun yaxınındakı hər obyektə klikləyin. `U` son birini geri qaytarır; {{key:Enter}} bitirir.

Xətlər, qövslər və açıq polixəttlər (son seqmenti) uzunlaşdırıla bilər.

## Tez-tez edilən səhvlər

- **Bütün xətt yox oldu.** Ona heç nə kəsişmədi, buna görə Quick rejimi onu sildi. Geri qaytarmaq üçün `U` yazın; kəsici xəttin həqiqətən onu kəsdiyini yoxlayın (yaxınlaşdırın) və söndürülmüş qatda olmadığını yoxlayın.
- **"Həmin istiqamətdə sərhəd yoxdur."** Uzatma çatacaq heç nə tapmadı. Böyüməli olan uca yaxın seçin.
- **"Radius çox böyükdür."** Qövs xətlərdən birinin ucunu keçərdi. Daha kiçik radius istifadə edin.
- **"Açıq polixəttin yalnız birinci və ya son seqmenti geri kəsilə bilər."** Polixəttin bir-birinin yanında iki seqmentini seçin, ya da hər künci yuvarlatmaq üçün `P` yazın.
- **Ofset səhv tərəfə getdi.** Tərəf obyekti seçdikdən sonra klik etdiyiniz yerdir. {{key:Mod+Z}} ilə geri qaytarın və digər tərəfə klikləyin.
- **"Bu qədər uzağa ofset etmək olmaz."** Ofset qövsü, çevrəni və ya polixətti tərsinə çevirərdi. Daha kiçik məsafə istifadə edin.
