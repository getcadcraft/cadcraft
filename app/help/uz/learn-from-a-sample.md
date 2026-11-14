---
title: Namuna chizmadan oʻrganish
summary: CadCraftning namunaviy uyini yoki namunaviy as-built chizmasini oching va uning varaqlari, sarlavha bloki, oʻlchamlari va qatlamlari boʻylab yuring.
keywords: namuna, namunalar, misol chizma, oʻrganish, qoʻllanma, yoʻriqnoma, sarlavha bloki, varaqlar, as-built, arxitektura toʻplami, namunani ochish
from: aa1f960a
---

## Nimalarni oʻrganasiz

Tayyor toʻplam qanday tuzilishini: model fazosi, masshtabli koʻrinish oynalari bilan varaqlar, atributli sarlavha bloki, futlar va dyuymlarda hamda millimetrlarda oʻlchamlar, qatlamlar. Namunalar CadCraftning oʻzini va istalgan maqsadda bepul foydalanish uchun (CC0).

## Namunani ochish

1. Chap panelda {{ui:Chizma}} ostida {{ui:Namunani ochish}} ni bosing (yoki {{cmd:SAMPLES}} buyrugʻini yozing; ribbon uslublarida u {{ui:Fayl}} menyusida).
2. {{ui:Namuna uy}} yonidagi {{ui:Ochish}} ni bosing. U oʻz yorligʻida ochiladi, shuning uchun ishingiz ochiq qoladi.

## Model boʻylab yurish

1. {{ui:Hammasini koʻrsatish}} ni bosing (yoki `ZOOM` yozing, soʻng `E`): qavat rejasi, old fasad, kesim va devor detali.
2. {{ui:Qatlamlar}} da `A-ANNO-DIMS` yonidagi koʻz belgisini bosing — oʻlchamlarni yashiradi, yana bosing — koʻrsatadi.
3. Eshikni bosing: {{ui:Xossalar}} `DOOR-32` blok havolasini koʻrsatadi. Eshiklar va derazalar bloklar boʻlib, burilgan va aks ettirilgan holda joylashtirilgan.

## Varaqlar

1. Chizma ostidagi {{ui:A-101 FLOOR PLAN}} ni bosing: 1/4" = 1'-0" masshtabli bitta koʻrinish oynali ARCH D varaq.
2. Koʻrinish oynasi ichida ikki marta bosing — uning orqali model bilan ishlash; tashqarisiga ikki marta bosing — qaytish.
3. {{ui:A-501 DETAILS}} devor detalini 1 1/2" = 1'-0" masshtabda koʻrsatadi: bir xil model, boshqa masshtab.

## Sarlavha bloki

1. Istalgan varaqda sarlavha blokini ikki marta bosing: {{ui:Atributlarni tahrirlash}} PROJECT, TITLE, SCALE, DATE, DRAWN va SHEET ni sanab beradi.
2. DRAWN ni oʻz bosh harflaringizga oʻzgartiring va {{ui:OK}} ni bosing.
3. Sarlavha blokini oʻzini barcha varaqlarda oʻzgartirish uchun uni tanlang va {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Joyida tahrirlash}} ni tanlang. Qarang: [Atributlar](topic:attributes).

## As-built

{{ui:Namuna as-built}} ni xuddi shunday oching. `SCAN-SLICE` dagi kulrang nuqtalar skanerlash kesimi; `AB-WALL` dagi devorlar ularning ustida chizilgan. Sharq devori 35 mm perpendikulyar emas: oʻlchamlar buni ikki marta aytadi — millimetrlarda (`AB-DIMS-MM`) va futlar va dyuymlarda (`AB-DIMS-FTIN`, oʻlchov masshtabi orqali xuddi shu uzunliklar). `REV-1` dagi qizil bulutlar tekshiruv aniqlagan narsalarni belgilaydi.

## Keyingi

- [Oʻlcham matni oʻlchamini oʻzgartirish](topic:change-dimension-text-size)
- [PDF ga chop etish](topic:plot-pdf): {{ui:A-101 FLOOR PLAN}} ni chop eting.
