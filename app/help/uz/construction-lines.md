---
title: Qurilish chiziqlari va nurlar
summary: Narsalarni tekislash uchun cheksiz davom etadigan (XLINE) yoki bir nuqtadan bir tomonga boradigan (RAY) chiziqlar chizing va ularni kerak boʻlganda oddiy chiziqlarga kesing.
keywords: xline, ray, qurilish chizigʻi, qurilish chiziqlari, cheksiz chiziq, yoʻriqnoma chizigʻi, tayanch chizigʻi, bissektrisa, siljitilgan chiziq, joylashuv chiziqlari, xl
from: b6c398bc
---

## Nima oʻrganasiz

Chizish vaqtida narsalarni tekislash uchun qurilish chiziqlarini qanday chizishni: ikki nuqta orqali, tekis yoki tik, burchak ostida, ikki yoʻnalish oʻrtasida yoki chiziqdan belgilangan masofada. Va ular oʻz vazifasini bajargach, ularni oddiy chiziqlarga qanday kesishni.

## Ikki tur

- **Qurilish chizigʻi** ({{cmd:XLINE}}) ikki tomonga ham cheksiz davom etadi.
- **Nur** ({{cmd:RAY}}) bir nuqtadan boshlanadi va bir tomonga cheksiz davom etadi.

Ikkalasi ham masshtabdan qat'i nazar, chizma maydonining butun eni boʻylab chiziladi: ekranni ikkiga boʻlishda va varaqdagi koʻrinish oynalarida ham. {{ui:Hammasini koʻrsatish}} ularni hisobga olmaydi, shuning uchun chizmaga yaqinlashtirish baribir chizganlaringizning hammasini sigʻdiradi.

## Qurilish chiziqlarini chizish

1. {{ui:Chizish}} › {{ui:Koʻproq}} › {{ui:Qurilish chizigʻi}} ni bosing yoki `XL` kiriting va {{key:Enter}} ni bosing.
2. Nuqta bosing. Undan keyingi har bir bosish birinchi nuqta va bosgan nuqta orqali qurilish chizigʻini qoʻshadi.
3. Tugatish uchun {{key:Enter}} ni bosing.

Birinchi nuqta oʻrniga parametr kiritishingiz mumkin:

| Parametr | Nima qiladi |
|---|---|
| [Gorizontal (H)] | Bosgan har bir nuqta orqali gorizontal chiziqlar. |
| `V` (Vertikal) | Har bir nuqta orqali tik chiziqlar. |
| [Burchak (A)] | Siz kiritgan burchakda (gradus, X oʻqidan soat miliga teskari yoʻnalishda) har bir nuqta orqali chiziqlar. [Tayanch (R)] burchakni siz tanlagan chiziqdan oʻlchaydi. |
| `B` (Bissektrisa) | Burchakni bosing, soʻngra bir tomondagi nuqtani: boshqa tomonda bosgan har bir nuqta ikki tomon oʻrtasidagi chiziqni qoʻshadi. |
| [Siljitish (O)] | Masofani kiriting, chiziqni tanlang, soʻngra tomonni bosing: undan shuncha masofada parallel qurilish chizigʻi. [Orqali (T)] buning oʻrniga bosgan nuqta orqali oʻtkazadi. Masofa keyingi safar uchun eslab qolinadi. |

## Nurlarni chizish

1. {{ui:Chizish}} › {{ui:Koʻproq}} › {{ui:Nur}} ni bosing yoki `RAY` kiriting va {{key:Enter}} ni bosing.
2. Nurlar boshlanadigan joyni bosing.
3. Har bir nur oʻtadigan nuqtani bosing. Tugatish uchun {{key:Enter}} ni bosing.

## Ularga ilashish va ularni kesish

Qurilish chiziqlari va nurlar Eng yaqin, Perpendikulyar va Kesishish ilashishlarini qabul qiladi. Ularning na uchi, na oʻrtasi bor, shuning uchun Uchi va Oʻrtasi ularda hech narsani topmaydi.

Ular {{cmd:TRIM}} va {{cmd:BREAK}} buyruqlarida boshqa chiziqlar kabi kesadi va kesiladi:

- Qurilish chizigʻining bir uchini kesing: u kesilgan joydan boshlanadigan nurga aylanadi.
- Nurning uzoq qismini kesing: u oddiy chiziqqa aylanadi.
- Qurilish chizigʻini bir nuqtada uzing: ikki nur hosil boʻladi.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} va {{cmd:STRETCH}} ularda ham ishlaydi. Oyna bilan tanlash ularni hech qachon olmaydi, chunki hech qanday oyna cheksiz chiziqning hammasini sigʻdira olmaydi; kesishgan oyna yoki bosish ishlaydi.

:::note
DWG (har qanday versiya) va DXF 2000 ularni qurilish chiziqlari sifatida saqlaydi. DXF R12 da bunday tur yoʻq, shuning uchun u yerda ular chizma boʻylab chiziqlarga aylanadi va saqlashda buni xabar qilinadi. Chop etish yoki PDF faqat chop etiladigan maydon boʻylab chizadi.
:::
