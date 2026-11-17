---
title: Parametrlərdən və tənliklərdən istifadə
summary: Ölçüləri adlandırın, width / 2 kimi ifadələrlə idarə edin və idarə olunan ölçüdə rəqəm yazaraq onu idarə edəni dəyişin.
keywords: parametrlər, par, parametrlər meneceri, tənliklər, ifadələr, dəyişənlər, ikitərəfli, dizayn niyyəti, istifadəçi parametri, fx
from: 650b9844
---

## Hər ölçü üçün bir cədvəl

{{ui:Parameters}} paneli ({{ui:Parametric}} qrupunda olan {{ui:Parameters}} düyməsi, ya da {{cmd:PARAMETERS}} yazın) hər ölçü məhdudiyyətini (`d1`, `rad1`, `dia1`, `ang1`, ya da verdiyiniz ad) və öz parametrlərinizi birlikdə siyahılayır. İstənilən ad istənilən ifadədə işlədilə bilər.

Hər sətirdə bunlar var:

- **Ad**: yeni ad yazın ki, onu dəyişəsiniz; onu işlədən hər ifadə ardınca gedir.
- **İfadə**: rəqəm (`40`) və ya ifadə (`width / 2 + gap`). İfadəyə yazın və {{key:Enter}} basın: çertyoj ardınca gedir.
- **Dəyər**: ifadənin hesabladığı nəticə. İfadənin idarə etdiyi sətirdə bura da rəqəm yaza bilərsiniz: CadCraft onun arxasındakı parametri hesablayır. `d1 = width / 2` ilə d1-in dəyərində `30` yazsanız, `width` 60-a təyin olunur.

İki parametr bir dəyəri idarə etdikdə (`width / 2 + gap`), dialoq hansının dəyişdiriləcəyini soruşur. Hər dəyişiklik bir geri qaytarma addımıdır ({{key:Mod+Z}}).

## Öz parametrinizi əlavə edin

1. {{ui:Parameters}} panelini açın.
2. Ad (`gap`) və dəyər (`10`) yazın, sonra {{ui:Add}} seçin.
3. İstifadə edin: d1-in ifadəsində `width / 2 + gap` yazın və {{key:Enter}} basın.

Adlar hərflə və ya `_` ilə başlayır və hərflər, rəqəmlər və `_` saxlayır. Funksiya adları, `pi` və vahid adları ad ola bilməz.

## İfadələr

| Yazın | Mənası |
|---|---|
| `+ - * / ^ %` | toplama, çıxma, vurma, bölmə, qüvvət, qalıq |
| `( )` | qruplaşdırma |
| `sin cos tan asin acos atan atan2` | dərəcə ilə triqonometriya |
| `sqrt pow exp ln log abs sign` | köklər, qüvvətlər, loqarifmlər |
| `ceil floor int round min max` | yuvarlaqlaşdırma və hüdudlar |
| `if(a > b, x, y)` | seçim |
| `pi` | 3.14159… |

Rəqəmlər vahid ola bilər: `25mm`, `1in`, `2'`, `90deg`. Vahidli uzunluqlar millimetrə çevrilir, ona görə vahidləri yalnız millimetrlə ölçülən çertyojlarda işlədin; başqa yerlərdə sadə rəqəmlər yazın.

## Əmr sətirində

`-PARAMETERS` panelsiz eyni işi görür: `N` yeni, `E` redaktə (ölçü məhdudiyyəti də daxil olmaqla), `R` adı dəyişmək, `D` silmək, `?` siyahı.

## Rədd olunanlar

- Özünə istifadə edən ifadə, birbaşa və ya digərləri vasitəsilə: "width, d1 bir-birini istifadə edir."
- Ölçünün qəbul edə bilmədiyi dəyər: mənfi uzunluq, 180°-dən böyük bucaq.
- Çertyojun digər məhdudiyyətləri ilə qəbul edə bilmədiyi dəyər: heç nə dəyişmir və mesaj məhdudiyyətləri adlandırır.
- Bir şeyin istifadə etdiyi parametrin silinməsi: panel əvvəlcə onun dəyərini həmin yerlərə yazmağı təklif edir. Ölçü məhdudiyyətinin adı məhdudiyyəti silməklə silinir.
