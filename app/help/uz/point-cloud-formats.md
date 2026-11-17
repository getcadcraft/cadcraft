---
title: Nuqtalar buluti formatlari: nima biriktiriladi va nimani eksport qilish kerak
summary: Qaysi lazer skan fayllari chizma ostiga biriktiriladi, qaysilari skanerlovchi kompaniyaning oʻz formati, va skaner dasturidan nimani eksport qilish kerakki, skan bu yerga biriktirilsin.
keywords: nuqtalar buluti, pointcloudattach, pcattach, lazer skan, skan, formatlar, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, ochilmaydi, oʻqilmaydi
from: 20a5f4ee
---

## Bu yerga nima biriktiriladi

Bularni {{cmd:POINTCLOUDATTACH}} bilan, {{ui:Ochish}} bilan yoki sahifaga tashlab biriktiring (qarang: nuqtalar buluti ustida haqiqiy holat chiziqlarini kuzatish haqidagi mavzu):

| Format | Kengaytma | Nima oʻqiladi |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: nuqtalar, ranglar, intensivlik, LiDAR sinflari, koordinata tizimi va uning birliklari. LAZ 1 GB gacha. |
| E57 | `.e57` | Fayldagi har bir skan, har biri oʻz pozasi bilan joylashtirilgan; ranglar, yoki fayl rangsiz boʻlsa intensivlik; metrlar. Fayldagi rasmlar chiqarib tashlanadi (aytiladi). Hozircha 6 million nuqtagacha va 512 MB gacha: kattaroq skanlarni LAS yoki LAZ sifatida eksport qiling. |
| PLY | `.ply` | Matn va ikkilik (ikkala bayt tartibi ham): uchlarning x y z, ranglari va intensivligi. Yuzlar chiqarib tashlanadi (aytiladi). |
| PCD | `.pcd` | Matn va ikkilik: x y z, birlashtirilgan yoki alohida ranglar, intensivlik. Siqilgan PCD fayllar hali oʻqilmaydi: ularni ikkilik yoki matn sifatida saqlang. |
| PTX | `.ptx` | Bitta yoki bir nechta skan, har biri oʻz transformatsiyasi bilan joylashtirilgan; skaner oʻlchamagan nuqtalar chiqarib tashlanadi. Metrlar. |
| PTS, XYZ | `.pts`, `.xyz` | Matn: x y z, ustunlar boʻlsa intensivlik va ranglar bilan. |

## Faqat skaner dasturi oʻqiydigan fayllar

Ba'zi skan fayllari skanerlovchi kompaniyaning oʻz formati boʻlib, unda eʼlon qilingan tavsif yoki ochiq oʻqigich yoʻq. CadCraft ularni oʻqiy olmaydi: biriktirishda u nima ekanini va buyruq qatorida nima qilish kerakligini chiqaradi. Skanni kompaniyaning dasturidan E57 yoki LAS (yoki PTX, PTS) sifatida eksport qiling, soʻng eksport qilingan faylni biriktiring.

| Fayl | Kengaytma | Qayerdan eksport qilish |
|---|---|---|
| ReCap loyihasi | `.rcp` | ReCap: loyihani oching va uni eksport qiling. Loyiha faqat oʻz skanlariga ishora qiladi, shuning uchun faqat `.rcp` ni nusxalash nuqta bermaydi. |
| ReCap skani | `.rcs` | ReCap: skan tegishli boʻlgan loyihani oching va uni eksport qiling. |
| FARO skani | `.fls` | FARO SCENE. |
| Leica skani | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skani | `.tzf` | Trimble RealWorks yoki Trimble Business Center. |
| Z+F skani | `.zfs` | Z+F LaserControl. |

:::tip
Eksport formatni soʻraganda LAS yoki LAZ CadCraft ishlatadigan hamma narsani (ranglar, intensivlik, sinflar, koordinata tizimi va uning birliklari) eng kichik faylda saqlaydi.
:::

## Nega bu fayllar oʻqilmaydi

Bu formatlar eʼlon qilinmagan, ularni oʻqishning yagona yoʻli har bir kompaniyaning oʻz dasturiy kutubxonasi, oʻz shartlari bilan. CadCraft faqat kompyuteringizda oʻz kodi bilan oʻqiy oladigan formatlarni oʻqiydi, shuning uchun biriktirish uchun skan hech qayerga yuborilmaydi.
