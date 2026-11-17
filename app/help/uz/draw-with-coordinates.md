---
title: Koordinatalar bilan chizish
summary: Mutlaq, nisbiy va qutb koordinatalarini yozish hamda toʻgʻridan-toʻgʻri masofa kiritish orqali aniq pol konturini chizing.
keywords: line, pline, polyline, koordinatalar, nisbiy, qutb, mutlaq, toʻgʻridan-toʻgʻri masofa, @, nuqtalarni yozish, aniq, ortho
from: 19e82350
---

## Nima yasaysiz

6000 × 4500 oʻlchamli, 2000 × 1500 oʻyiqli L shaklidagi xonaning konturi aniq chiziladi, shuningdek 30 gradusli devor. Nuqta kiritishning barcha toʻrt usulidan foydalanasiz. Millimetrda ishlang: bitta chizma birligi bir millimetrga teng.

Har bir format boʻyicha qisqa maʼlumot [Koordinata va masofa kiritish](topic:coordinate-entry) boʻlimida.

## Boshlashdan oldin

1. CadCraft ni oching. Agar chizma ochiq boʻlsa, avval {{ui:Yangi}} tugmasini bosing.
2. Hech narsa tanlanmasligi uchun {{key:Esc}} tugmasini bosing. Oʻng panelda {{ui:Joriy sozlamalar}} yozilgan.
3. {{ui:Birliklar}} ni {{ui:Millimetr}} ga oʻrnating. Hech narsa oʻlchamini oʻzgartirmaydi; bu faqat varaqlar va chop etishlarga birlik nimani anglatishini bildiradi.

## Mutlaq koordinatalar: birinchi nuqta

Mutlaq koordinata — koordinata boshidan oʻlchangan joy boʻlib, `x,y` koʻrinishida yoziladi.

1. `L` yozing va {{key:Enter}} tugmasini bosing. Soʻrov `Specify first point:` deb koʻrsatadi.
2. `0,0` yozing va {{key:Enter}} tugmasini bosing.

Chiziq endi koordinata boshidan koʻrsatkichgacha choʻziladi. Holat satridagi koordinatalar siz harakatlanganda boshlanish nuqtasidan masofa va burchakni koʻrsatadi.

## Nisbiy koordinatalar: @dx,dy

Nisbiy koordinata `@dx,dy` koʻrinishida yoziladi: oxirgi nuqtadan shuncha oʻngga, shuncha yuqoriga. Manfiy sonlar chapga yoki pastga.

3. `@6000,0` yozing va {{key:Enter}} tugmasini bosing. 6000 uzunlikdagi chiziq oʻngga choʻziladi.
4. `@0,3000` yozing va {{key:Enter}} tugmasini bosing.
5. `@-2000,0` yozing va {{key:Enter}} tugmasini bosing.
6. `@0,1500` yozing va {{key:Enter}} tugmasini bosing.

Xonaning oʻng tomonida yuqoriga koʻtariladigan toʻrtta bogʻlangan chiziqni koʻrasiz.

## Toʻgʻridan-toʻgʻri masofa kiritish: yalang raqam

Bitta raqam yozsangiz, CadCraft uni koʻrsatkich yoʻnalishida shuncha masofaga oʻtkazadi. Yoʻnalish gorizontal yoki vertikal boʻlishi uchun Orthoni yoqing.

7. {{key:F8}} tugmasini bosing yoki holat satridagi {{ui:Ortho}} tugmasini bosing. Holat satrida "Ortho yoqilgan" yozuvi chiqadi.
8. Koʻrsatkichni oxirgi nuqtaning chap tomoniga olib boring. Rezina chiziq gorizontal boʻlib qoladi.
9. `4000` yozing va {{key:Enter}} tugmasini bosing. Chiziq chapga 4000 ga choʻziladi.
10. Koʻrsatkichni oxirgi nuqtaning pastiga olib boring.
11. `4500` yozing va {{key:Enter}} tugmasini bosing. Siz boshlanish nuqtasiga qaytasiz.
12. Boʻsh soʻrovda {{key:Enter}} tugmasini bosib buyruqni tugating.

:::mac
Mac klaviaturasida F8 media ijrosini boshqarishi mumkin. **fn** tugmasini bosib turing va F8 ni bosing, yoki {{ui:Ortho}} tugmasini bosing. Qarang: [Klavishlar, sichqonchalar va trackpadlar](common:keys).
:::

Endi siz olti alohida chiziqdan iborat yopiq L shaklidagi kontur hosil qildingiz.

13. Hammasini koʻrish uchun {{ui:Hammasini koʻrsatish}} tugmasini bosing.

## Qutb koordinatalar: @masofa<burchak

Qutb koordinata `@masofa<burchak` koʻrinishida yoziladi. Burchaklar gradusda, X yoʻnalishidan soat strelkasi teskarisiga oʻlchanadi: 0 — oʻngga, 90 — yuqoriga, 180 — chapga, 270 (yoki -90) — pastga.

14. `L` yozing va {{key:Enter}} tugmasini bosing.
15. Pastki oʻng burchakdan boshlash uchun `6000,0` yozing va {{key:Enter}} tugmasini bosing.
16. `@2500<-30` yozing va {{key:Enter}} tugmasini bosing. 2500 uzunlikdagi chiziq burchakdan chiqadi: gorizontaldan 30 gradus pastga, oʻngga yoʻnalgan.
17. Buyruqni tugatish uchun {{key:Enter}} tugmasini bosing.

`@` belgisiz `2500<30` kabi qutb koordinata oxirgi nuqtadan emas, koordinata boshidan oʻlchanadi.

## Xuddi shu kontur bitta polichiziq sifatida

Oltita alohida chiziq koʻp ishlar uchun yaroqli, lekin polichiziq bitta obyekt: u butunligicha ofset, oʻlchash va tanlanadi. Xuddi shu kiritish bilan {{cmd:PLINE}} dan foydalaning.

1. `PL` yozing va {{key:Enter}} tugmasini bosing.
2. Birinchi kontur pastidan boshlash uchun `0,-6000` yozing va {{key:Enter}} tugmasini bosing.
3. `@6000,0` yozing, soʻng {{key:Enter}} tugmasini bosing.
4. `@0,3000` yozing, soʻng {{key:Enter}} tugmasini bosing.
5. `@-2000,0` yozing, soʻng {{key:Enter}} tugmasini bosing.
6. `@0,1500` yozing, soʻng {{key:Enter}} tugmasini bosing.
7. `@-4000,0` yozing, soʻng {{key:Enter}} tugmasini bosing.
8. Konturni yopish va buyruqni tugatish uchun `C` yozing va {{key:Enter}} tugmasini bosing. Polichiziq yopiladi va buyruq tugaydi.
9. Yangi konturni bosing. Oʻng panelda "Polichiziq" yozuvi, uning {{ui:Uchlar}}, {{ui:Uzunlik}} va, yopiq boʻlgani uchun, {{ui:Maydon}} koʻrsatiladi.

Maydon 24000000 chiqishi kerak (kvadrat millimetr, bu 24 kvadrat metrga teng).

## Chizish vaqtidagi variantlar

- {{cmd:LINE}} va {{cmd:PLINE}} da `U` yozing va {{key:Enter}} tugmasini bosing — buyruqdan chiqmasdan oxirgi segmentni qaytarib olish uchun.
- {{cmd:LINE}} da `C` kamida ikki segment boʻlgandan keyin birinchi nuqtaga qaytib, konturni yopadi.
- {{cmd:PLINE}} da `A` yoy segmentlariga, `L` esa yana chiziqlarga oʻtkazadi (har bir yoy oldingi segmentdan silliq davom etadi). Yoy rejimida yopish varianti `CL`.
- {{cmd:LINE}} da `Specify first point:` soʻrovida {{key:Enter}} tugmasini bosish oxirgi bergan nuqtadan boshlaydi, shunda toʻxtagan joyingizdan davom etishingiz mumkin.

## Keng tarqalgan xatolar

- **`@6000,0` nazarda tutilganda `6000,0` yozish.** `@` boʻlmasa, nuqta oxirgi nuqtadan emas, koordinata boshidan oʻlchanadi va chiziq kutilmagan joyga ketadi. CadCraft da `x,y` doim mutlaq. Qaytarish uchun `U` va {{key:Enter}} tugmasini bosing.
- **Vergul oʻnlik nuqta sifatida yozilgan.** Oʻnlik kasrlar nuqta bilan yoziladi: `1250.5`. Vergul doim X ni Y dan ajratadi.
- **Toʻgʻridan-toʻgʻri masofa notoʻgʻri tomonga ketdi.** Yalang raqam koordinata koʻrsatkichini kuzatadi. {{key:Enter}} bosishdan oldin koʻrsatkichni kerakli tomonga olib boring va toʻgʻri chiziqlar uchun {{ui:Ortho}} ni yoqing.
- **"Nuqta yoki variant kaliti kerak."** CadCraft yozganingizni tushunmadi. Raqam ichida boʻshliq yoki yetishmayotgan vergul borligini tekshiring va qayta yozing.
- **Fut va dyuym.** CadCraft faqat oddiy raqamlarni oʻqiydi. Dyuymli chizmada 12'-6" uchun `150` yozing, futli chizmada `12.5` yozing.
