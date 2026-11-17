---
title: Chizma chegaralarini belgilash
summary: LIMITS chizma uchun toʻrtburchak belgilaydi: setka uni toʻldiradi, ZOOM All uni koʻrsatadi va chegaralar yoqilgan boʻlsa, undan tashqaridagi nuqtalar rad etiladi. Ular DWG va DXF fayllarida saqlanadi.
keywords: chegaralar, chizma chegaralari, LIMITS, LIMMIN, LIMMAX, LIMCHECK, setka, chegaradan tashqarida, varaq oʻlchami, chizma maydoni, zoom all, chegara
from: 9e97b30d
---

**Chizma chegaralari** chizma qanchalik katta boʻlishi kerakligini bildiruvchi toʻrtburchak: chizishni rejalashtirgan maydon, masalan 420 × 297 varaq. Yangi chizmada ular yoʻq, shuning uchun setka va chizma maydoni avvalgidek chegarasiz.

## Ularni belgilash

{{cmd:LIMITS}} yozing va javob bering:

- `Specify lower left corner or [ON/OFF] <0,0>`: nuqta, yoki joriy nuqtani saqlab qolish uchun {{key:Enter}}.
- `Specify upper right corner <420,297>`: nuqta, yoki joriy nuqtani saqlab qolish uchun {{key:Enter}}. U birinchisidan yuqorida va oʻngda boʻlishi kerak.

Yoki toʻrtburchakni oʻzgartirmasdan tekshiruvni yoqish yoki oʻchirish uchun birinchi savolga `ON` yoki `OFF` yozing. Burchaklarni belgilash bitta ortga qaytarish qadami, ON va OFF ning har biri ham shunday.

## Ular nima qiladi

- **Setka chegaralarni toʻldiradi** va ularning chetida toʻxtaydi. Bu maydonning tasviri, shuning uchun uni koʻrish uchun {{ui:Grid}} ni yoqing.
- **ZOOM All** ({{cmd:ZOOM}}, keyin {{ui:All}}) chegaralar va chizmani birga koʻrsatadi; {{ui:Extents}} esa faqat chizmani koʻrsatadi.
- **Chegaralar ON boʻlganda**, undan tashqarida yozgan yoki bosgan nuqta `**Outside limits` bilan rad etiladi va soʻrov qoladi. Bu obyekt yaratadigan buyruqlarga taalluqli: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, oʻlchamlar buyruqlari va yana bir nechtasi. Faqat siljitadigan, tanlaydigan yoki oʻlchaydigan buyruqlar cheklanmaydi; joylashtirish, ushlagichni sudrash yoki LISP programmasi yaratgan obyekt ham cheklanmaydi: chegaralar chizish uchun yoʻriqnoma, devor emas. Chegaralar OFF boʻlganda hech narsa rad etilmaydi.
- Allaqachon tashqarida boʻlgan obyektlar oʻz joyida qoladi.

## Fayllarda va LISPda

Ular DWG va DXF da `$LIMMIN`, `$LIMMAX` va `$LIMCHECK` sifatida saqlanadi. Boshqa programmaning faylida faqat oʻsha programmaning standart chegaralari (0,0 dan 12,9 yoki 420,297 gacha, tekshiruv oʻchiq) boʻlsa, u chegarasiz ochiladi, shuning uchun uning setkasi kichik toʻrtburchakka siqilmaydi. Oʻz chegaralari bor yoki tekshiruvi yoqilgan fayl ularni saqlaydi. LISPda `(getvar "LIMMIN")`, `LIMMAX` va `LIMCHECK` ularni oʻqiydi, `setvar` esa yozadi, bitta ortga qaytarish qadami sifatida.

Chegaralar modelga tegishli. Varaq (maket) oʻz qogʻoz oʻlchamiga ega.
