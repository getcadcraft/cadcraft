---
title: Öz düymələriniz (Mənim alətlərim)
summary: Öz makrolarınızı işlədən alət panelinə düymələr əlavə edin, onlara qısayol düymələri verin, onları fayl kimi paylaşın və CUIx fayl xüsusiləşdirməsindən düymələri gətirin.
keywords: mənim alətlərim, fərdi düymələr, alət paneli düymələri, makro, makrolar, cui, cuix, fərdiləşdir, menyu, qısayol düymələri, klaviatura qısayolları, diesel, ^c^c, düymələri idxal et, düymələri ixrac et
from: 36618802
---

## Nə öyrənəcəksiniz

Öz düymələrinizi alət panelinə necə qoymağı, hər birinin AutoCAD-in yazdığı kimi yazılmış makronu işlətməsini, düyməyə açar necə verməyi və CUIx faylındakı düymələri necə gətirməyi.

## Düymə əlavə edin

1. {{ui:Settings}} ({{key:Mod+,}}) açın və {{ui:CadCraft}} vərəqində qalın. {{ui:My tools}} bölməsinə sürüşdürün.
2. {{ui:Add a button…}} düyməsinə klikləyin.
3. Qutunu doldurun:
   - {{ui:Group}}: düymənin düşəcəyi alət paneli qrupu, məsələn `My tools`. Yeni ad yeni qrup yaradır.
   - {{ui:Label}}: düymə üzərindəki sözlər.
   - {{ui:Macro}}: nə yazacağı, məsələn `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: qutuya klikləyin və düymələri basın, məsələn {{key:Ctrl+Alt+B}}.
   - {{ui:Icon}}: ən çoxu 64 KB PNG və ya SVG şəkli, ya da heç nə (ulduz görünür).
4. {{ui:Save}} düyməsinə klikləyin.

Düymə alət panelinin sonunda, öz qrupunda görünür. Onu işlətmək üçün klikləyin və ya onun açarını basın. Siyahıdakı {{ui:Edit}} və {{ui:Delete}} onu dəyişdirir və ya silir.

## Makro yazın

Makro əmr sətirində yazacağınız şeydir, bir neçə işarə ilə:

| İşarə | Mənası |
|---|---|
| `^C` | İşləyən hər şeyi ləğv edir (`^C^C` adi başlanğıcdır) |
| `;` və ya boşluq | {{key:Enter}} |
| `\` | Sizi gözləyir: klik və ya yazılmış cavab, sonra makro davam edir |
| Əmrdən əvvəl `_` və ya `.` | Qəbul edilir və nəzərə alınmır (beynəlxalq və daxili adlar) |
| Ən əvvəldə `*` | Hər dəfə bitəndə yenidən işləyir, {{key:Esc}} basana qədər |
| `^O`, `^G` | Ortoqonalı, şəbəkəni açır və ya söndürür |
| `$M=` | Qalan hissə DIESEL-dir. Yalnız `$(if,…)`, `$(getvar,…)`, `$(=,…)` və `$(eq,…)` oxunur; başqa bir şeydən istifadə edən düymə bunu bildirir və heç nə etmir |

Nümunələr:

- `^C^C_line;0,0;@100,0;;` başlanğıc nöqtədən 100 uzunluğunda xətt çəkir.
- `^C^C_circle;\25;` mərkəzi soruşur, sonra həmin yerdə radiusu 25 olan çevrə çəkir.
- `^C^C_turnright` görünüşü 90° sağa döndərir.

## Qısayol düymələri

Açar {{key:Mod}} (Ctrl, Mac-da Cmd) və ya {{key:Alt}} ilə hərf və ya rəqəm tələb edir, ya da sərbəst funksiya düymələrindən biri: {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Tək hərflər əmr sətirinə gedir. CadCraft, tətbiq və ya brauzerin artıq istifadə etdiyi açarlar (məsələn {{key:Ctrl+S}} və ya {{key:Ctrl+Z}}) və başqa düymənin artıq istifadə etdiyi açarlar rədd edilir və qutu səbəbini deyir.

## Düymələrinizi paylaşın

- {{ui:Export…}} hər qrupu və düyməni (ikonlar və açarlarla birlikdə) `my-tools.json` kimi saxlayır.
- {{ui:Import…}} belə faylın qruplarını sizinkilərin arxasına əlavə edir. Artıq istifadə etdiyiniz qrup adı "(2)" alır; toqquşacaq açar buraxılır və panel bunu deyir.

## CUIx faylından düymələri gətirin

1. {{ui:Import CUIx…}} üzərinə klikləyin və `.cuix` faylını seçin.

Onun alət panelləri və lent panelləri qrupa çevrilir, hər düymə öz makrosu və şəkli ilə (PNG, ya da PNG-yə çevrilmiş BMP). Onun qısayol açarları öz ayrıca qrupunda gəlir, hər düymə öz açarı ilə; daşıya biləcəyi əmr ləqəbləri isə {{ui:Aliases}} qrupunda gəlir. Panel gətirilənləri siyahılayır.

:::note
Fayl yalnız oxunur. CadCraft-da olmayan əmrlər adları ilə siyahıya salınır, təxmin edilmir: onların düymələri klikləndikdə bunu deyir. Yuxarıdakı bir neçə funksiyadan kənar DIESEL, menyular, siçan düymələri və iş sahələri oxunmur.
:::

## Faydalı məlumat

- Düymələr çertyojlarda deyil, bu brauzerdə (və ya bu masa üstü tətbiqində) saxlanılır.
- Düymə əmr sətiri ilə işləyir, ona görə də yazdığınız hər şey kimi geri qaytarılır: işlətdiyi hər əmr üçün bir {{key:Mod+Z}}.
