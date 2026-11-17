---
title: Çertyojun hüdudlarını təyin edin
summary: LIMITS çertyoj üçün düzbucaqlı təyin edir: şəbəkə onu doldurur, ZOOM All onu göstərir və hüdudlar açıq olduqda, onların xaricindəki nöqtələr rədd olunur. DWG və DXF fayllarında saxlanılır.
keywords: hüdudlar, çertyoj hüdudları, LIMITS, LIMMIN, LIMMAX, LIMCHECK, şəbəkə, hüdudlardan kənar, vərəq ölçüsü, çertyoj sahəsi, hamısını göstər, sərhəd
from: 9e97b30d
---

**Çertyoj hüdudları** çertyojun nə qədər böyük nəzərdə tutulduğunu bildirən düzbucaqlıdır: çəkəcəyiniz sahə, məsələn 420 × 297 vərəq. Yeni çertyojda heç biri yoxdur, ona görə şəbəkə və çertyoj sahəsi əvvəlki kimi sərhədsizdir.

## Təyin edin

{{cmd:LIMITS}} yazın və cavab verin:

- `Aşağı sol künc nöqtəsini göstərin və ya [ON/OFF] <0,0>`: nöqtə, ya da cari nöqtəni saxlamaq üçün {{key:Enter}}.
- `Yuxarı sağ künc nöqtəsini göstərin <420,297>`: nöqtə, ya da cari nöqtəni saxlamaq üçün {{key:Enter}}. Birincidən yuxarıda və sağda olmalıdır.

Və ya düzbucaqlını dəyişmədən yoxlamanı açmaq və ya söndürmək üçün birinci sualda `ON` və ya `OFF` yazın. Künclərin təyin edilməsi bir geri alma addımıdır, hər ON və OFF də belədir.

## Nə edirlər

- **Şəbəkə hüdudları doldurur** və onların kənarında dayanır. Bu sahənin şəklidir, ona görə görmək üçün {{ui:Şəbəkə}}-ni yandırın.
- **ZOOM All** ({{cmd:ZOOM}}, sonra {{ui:Hamısı}}) hüdudları və çertyojı birlikdə göstərir; {{ui:Hüdudlar}} yalnız çertyojı göstərməyə davam edir.
- **Hüdudlar AÇIQ olduqda**, daxil etdiyiniz və ya klikləyib seçdiyiniz xaricdəki nöqtə `**Hüdudlardan kənar` mesajı ilə rədd olunur və sorğu qalır. Bu, obyekt yaradan əmrləri əhatə edir: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, ölçü əmrləri və bir neçə digəri. Yalnız köçürən, seçən və ya ölçən əmrlər məhdudlaşdırılmır; yapışdırma, tutacaq sürüşdürməsi və LISP rutininin yaratdığı obyekt də belə deyil: hüdudlar çəkiliş üçün bələdçidir, divar deyil. Hüdudlar OFF olduqda heç nə rədd olunmur.
- Artıq xaricdə olan obyektlər yerində qalır.

## Fayllarda və LISP-də

Onlar DWG və DXF-də `$LIMMIN`, `$LIMMAX` və `$LIMCHECK` kimi saxlanılır. Başqa proqramdan yalnız o proqramın defolt hüdudları olan (0,0-dan 12,9-a və ya 420,297, yoxlama söndürülü) fayl heç bir hüdud olmadan açılır, belə ki, onun şəbəkəsi kiçik düzbucaqlıya sıxılmır; öz hüdudları olan və ya yoxlaması açıq olan fayl onları saxlayır. LISP-də `(getvar "LIMMIN")`, `LIMMAX` və `LIMCHECK` onları oxuyur, `setvar` isə yazır, bir geri alma addımı kimi.

Hüdudlar modelə aiddir. Vərəqin (layout) öz kağız ölçüsü var.
