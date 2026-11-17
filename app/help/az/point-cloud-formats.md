---
title: Nöqtə buludu formatları: nə əlavə olunur və nə ixrac edilir
summary: Hansı lazer skan faylları çertyojun altına əlavə olunur, hansı skan verənin öz formatıdır, və skanerin proqramından nə ixrac etmək lazımdır ki, skan burada əlavə olunsun.
keywords: nöqtə buludu, pointcloudattach, pcattach, lazer skan, skan, formatlar, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, ixrac, aça bilmir, oxunmur
from: 20a5f4ee
---

## Burada nə əlavə olunur

Bunları {{cmd:POINTCLOUDATTACH}} ilə, {{ui:Aç}} ilə və ya səhifəyə atmaqla əlavə edin (bax nöqtə buludu üzərində as-built xətlərini izləmə mövzusu):

| Format | Uzantı | Nə oxunur |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: nöqtələr, rənglər, intensivlik, LiDAR sinifləri, koordinat sistemi və onun vahidləri. LAZ 1 GB-a qədər. |
| E57 | `.e57` | Fayldakı hər skan, hər biri öz mövqeyi ilə yerləşdirilmiş; rənglər, və ya fayl rəngsizdirsə intensivlik; metrlə. Fayldakı şəkillər buraxılır (bu bildirilir). Hələlik 6 milyon nöqtəyə və 512 MB-a qədər: daha böyük skanları LAS və ya LAZ kimi ixrac edin. |
| PLY | `.ply` | Mətn və ikili (hər iki bayt sırası): təpələrin x y z, rənglər və intensivlik. Üzlər buraxılır (bu bildirilir). |
| PCD | `.pcd` | Mətn və ikili: x y z, qablaşdırılmış və ya ayrı rənglər, intensivlik. Sıxılmış PCD faylları hələ oxunmur: onları ikili və ya mətn kimi saxlayın. |
| PTX | `.ptx` | Bir və ya bir neçə skan, hər biri öz çevrilməsi ilə yerləşdirilmiş; skanerin ölçmədiyi nöqtələr buraxılır. Metrlə. |
| PTS, XYZ | `.pts`, `.xyz` | Mətn: x y z, sütunlar olduqda intensivlik və rənglərlə. |

## Yalnız skanerin proqramının oxuduğu fayllar

Bəzi skan faylları skan verənin öz formatıdır, dərc olunmuş təsviri və açıq oxuyucusu yoxdur. CadCraft onları oxuya bilmir: onları əlavə etmək nəyin olduğunu və komanda sətrində nə etmək lazım olduğunu çap edir. Skanı verənin proqramından E57, LAS (və ya PTX, PTS) kimi ixrac edin, sonra ixrac olunmuş faylı əlavə edin.

| Fayl | Uzantı | Harada ixrac edin |
|---|---|---|
| ReCap layihəsi | `.rcp` | ReCap: layihəni açın və ixrac edin. Layihə yalnız öz skanlarına işarə edir, buna görə yalnız `.rcp` faylını kopyalamaq nöqtə vermir. |
| ReCap skanı | `.rcs` | ReCap: skanın aid olduğu layihəni açın və ixrac edin. |
| FARO skanı | `.fls` | FARO SCENE. |
| Leica skanı | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skanı | `.tzf` | Trimble RealWorks və ya Trimble Business Center. |
| Z+F skanı | `.zfs` | Z+F LaserControl. |

:::tip
İxrac format soruşduqda LAS və ya LAZ CadCraft-ın istifadə etdiyi hər şeyi (rənglər, intensivlik, siniflər, koordinat sistemi və onun vahidləri) ən kiçik faylda saxlayır.
:::

## Bu fayllar niyə oxunmur

Bu formatlar dərc olunmayıb, və onları oxumağın yeganə yolu hər verənin öz proqram kitabxanasıdır, öz şərtləri ilə. CadCraft yalnız öz kodu ilə kompüterinizdə oxuya bildiyi formatları oxuyur, buna görə skan əlavə etmək üçün heç vaxt harasa göndərilmir.
