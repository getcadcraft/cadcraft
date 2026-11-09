---
title: Qısa məlumat vərəqi: gündəlik 40 əmr
summary: Ən çox istifadə edəcəyiniz 40 əmr, onların qısa adları və vaxta qənaət edən düymələr bir səhifədə. Çap etmək üçün PDF kimi yükləyin.
keywords: qısa məlumat vərəqi, sürətli istinad, əmrlər, ləqəblər, qısa adlar, başlanğıc, silmə, kəsmə, çap, pdf, qısayollar
from: 2d40edc4
---

Qısa adı (ləqəbi) yazın və Enter basın, ya da alətə klikləyin. Esc ləğv edir. Boş sətirdə Enter son əmri təkrarlayır.

**Çap edin:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (bir A4 səhifə; Letter kağızında "səhifəyə sığdır" seçimi ilə çap edin).

## Çəkmə

| Yazılış | Əmr | Nə edir |
|---|---|---|
| `L` | {{cmd:LINE}} | Düz xətlər çəkir |
| `PL` | {{cmd:PLINE}} | Birləşmiş xətt və qövs zənciri çəkir |
| `C` | {{cmd:CIRCLE}} | Çevrə çəkir (mərkəz və radius) |
| `A` | {{cmd:ARC}} | Qövs çəkir |
| `REC` | {{cmd:RECTANG}} | İki küncdən düzbucaqlı çəkir |
| `POL` | {{cmd:POLYGON}} | Düzgün çoxbucaqlı çəkir |
| `EL` | {{cmd:ELLIPSE}} | Ellips çəkir |
| `DT` | {{cmd:TEXT}} | Bir sətir mətn yazır |
| `T` | {{cmd:MTEXT}} | Sətirlərə bölünən mətn yazır (abzas) |
| `H` | {{cmd:HATCH}} | Sahəni naxışla doldurur |

## Dəyişdirmə

| Yazılış | Əmr | Nə edir |
|---|---|---|
| `M` | {{cmd:MOVE}} | Obyektləri köçürür |
| `CO` | {{cmd:COPY}} | Obyektləri kopyalayır |
| `RO` | {{cmd:ROTATE}} | Obyektləri nöqtə ətrafında fırladır |
| `SC` | {{cmd:SCALE}} | Obyektləri böyüdür və ya kiçildir |
| `MI` | {{cmd:MIRROR}} | Obyektləri xətt boyunca əks etdirir |
| `O` | {{cmd:OFFSET}} | Məsafədə paralel surət çəkir |
| `TR` | {{cmd:TRIM}} | Obyektləri digərləri ilə kəsişən yerə qədər kəsir |
| `EX` | {{cmd:EXTEND}} | Obyektləri digərlərinə qədər uzadır |
| `F` | {{cmd:FILLET}} | Küncü qövslə yuvarlaqlaşdırır |
| `CHA` | {{cmd:CHAMFER}} | Küncü düz xətlə kəsir |
| `E` | {{cmd:ERASE}} | Obyektləri silir |
| `X` | {{cmd:EXPLODE}} | Bloku və ya polixətti hissələrinə ayırır |
| `S` | {{cmd:STRETCH}} | Uc nöqtələrini kəsişən pəncərənin içində köçürür |
| `AR` | {{cmd:ARRAY}} | Şəbəkə və ya çevrə üzrə kopyalayır |
| `J` | {{cmd:JOIN}} | Xətləri və qövsləri bir obyektə birləşdirir |
| `BR` | {{cmd:BREAK}} | Obyekti ikiyə bölür və ya bir parçasını çıxarır |

## Ölçü

| Yazılış | Əmr | Nə edir |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Üfüqi və ya şaquli ölçü verir |
| `DAL` | {{cmd:DIMALIGNED}} | Maili xətt boyunca ölçü verir |
| `DRA` | {{cmd:DIMRADIUS}} | Radiusu ölçür |
| `DAN` | {{cmd:DIMANGULAR}} | Bucağı ölçür |

## Bloklar və qatlar

| Yazılış | Əmr | Nə edir |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Obyektlərdən blok yaradır |
| `I` | {{cmd:INSERT}} | Bloku yerləşdirir |
| `LA` | {{cmd:LAYER}} | Qatları açır |

## Görünüş və sorğu

| Yazılış | Əmr | Nə edir |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Yaxınlaşdırır, uzaqlaşdırır və ya hamısını göstərir (E) |
| `DI` | {{cmd:DIST}} | Məsafəni və bucağı ölçür |
| `LI` | {{cmd:LIST}} | Obyektin təfərrüatlarını göstərir |
| `MA` | {{cmd:MATCHPROP}} | Bir obyektin görünüşünü digərlərinə köçürür |

## Fayl

| Yazılış | Əmr | Nə edir |
|---|---|---|
| `U` | {{cmd:UNDO}} | Son əmri geri qaytarır |
| `SAVE` | {{cmd:SAVE}} | Çertyoju saxlayır |
| `PLOT` | {{cmd:PLOT}} | PDF-ə çap edir |

## Düymələr

Ctrl (Mac-da Cmd): Z geri qaytar · Y təkrarla · S saxla · P çap et.  F3 obyekt tutmaları · F8 ortoqonal · F10 polyar.  Space və ya Enter son əmri təkrarlayır · çarx miqyası dəyişir · çarxı sürükləmək görünüşü sürüşdürür

Çertyoça yenisiniz? Rəhbərlikli ilk çertyoj üçün `TOUR` yazın, [CadCraft ilə başlanğıc](topic:getting-started) oxuyun və ya [Əmr istinadı](topic:commands) bölməsində hər əmrə baxın. Başqa çertyoj proqramından gəlirsiniz? [Başqa çertyoj proqramından gələnlər](topic:coming-from) və [əmr xəritəsi](topic:command-map).
