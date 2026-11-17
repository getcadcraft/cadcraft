---
title: 2D da aqlli devorlar, eshiklar va derazalar chizish
summary: Devorlarni polichiziq kabi chizing, ularni toza birlashtiring va devor bilan birga harakatlanadigan eshik va derazalar qoʻying. Hammasi 2D, 3D model yoʻq.
keywords: devor, devorlar, WALL, WA, eshik, DOOR, DR, deraza, WINDOW, WN, DELOPENING, aqlli devor, qavat rejasi, ochilish yoʻnalishi, menteşa, teshik
from: 45845d49
---

Bu yerdagi devorlar 2D chizma obyektlaridir. Ular 3D model yaratmaydi, shuning uchun reja chiziqli chizma kabi yengil qoladi. Bino modeli uchun BimCraft dan foydalaning.

## Devorlarni chizish

`WALL` (`WA`) ni yozing yoki {{ui:Chizish}} guruhining {{ui:Koʻproq}} menyusidan {{ui:Devor}} ni tanlang, soʻng polichiziqdagidek nuqtalarni bosing. Tugatish uchun {{key:Enter}} ni bosing yoki xonani yopish uchun `C` ni yozing.

- `T` qalinlikni belgilaydi.
- `J` bosishlaringiz nimaga ergashishini belgilaydi: devor markazi, yoki uning chap yoki oʻng yuzi.
- `F` toʻldirishni belgilaydi: yoʻq, yaxlit yoki shtrixlash.

Burchaklar oʻzi qiyshiq boʻladi. Boshqa devor qalinligi ichida tugagan devor uni toza T shaklida birlashtiradi, bir-birini kesib oʻtadigan devorlar esa oʻzaro ochiladi. Birlashmalar devorlar bilan birga saqlanadi. Toʻgʻri toʻrtburchaklar, koʻpburchaklar, yoylar, boʻlish, qulflar va qolgan narsalar uchun "2D devorlar uchun shakllar, kesish, siljitish va qulflar" boʻlimiga qarang.

## Eshik va deraza qoʻshish

`DOOR` (`DR`) yoki `WINDOW` (`WN`) ni yozing va devorni bosing. Eshik siz bosgan devor tomoniga ochiladi. `W` kengligini, `Y` turini, `H` esa menteşa tomonini belgilaydi. Yana joylashtirish uchun bosishda davom eting, tugatish uchun {{key:Enter}} ni bosing. Eshiklar bir pallali, ikki pallali, surma yoki ochiq kirish boʻlishi mumkin. Derazalar qoʻzgʻalmas, ochiladigan yoki surma boʻlishi mumkin.

## Ularni oʻzgartirish

Tutqichlarini koʻrish uchun devorni tanlang:

- Uchidagi tutqichlar devorni choʻzadi. Unga biriktirilgan devorlar ergashadi.
- Oʻrtadagi tutqich devorni siljitadi.
- Teshikdagi tutqich uni devor boʻylab suradi.
- Strelkalar eshikning menteşasi va ochilish yoʻnalishini almashtiradi.

Xossalar qalinlikni, toʻldirishni va har bir teshikni koʻrsatadi: turi, kengligi, joylashuvi, menteşasi, ochilish yoʻnalishi, ochiq yoki yopiq koʻrinishi va {{ui:Olib tashlash}}. `DELOPENING` bosgan joyingizga eng yaqin teshikni olib tashlaydi.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` va `ERASE` odatdagidek ishlaydi. Eshik va derazalar oʻz devori bilan birga harakatlanadi, biriktirilgan devorlar oʻz birlashmalarini saqlaydi va bitta {{ui:Ortga qaytarish}} hammasini qaytaradi.

## Boshqa dasturlarda

Har bir devor oddiy blok sifatida saqlanadi, shuning uchun boshqa CAD dasturlari uni toʻgʻri koʻrsatadi va siljita oladi, lekin uni devor sifatida tahrirlay olmaydi. `EXPLODE` devorni oddiy chiziq va yoylarga aylantiradi va u devor boʻlishdan toʻxtaydi.
