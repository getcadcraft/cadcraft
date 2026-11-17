---
title: "Standart siyosatlar: yangi chizma nimadan boshlanishini belgilang"
summary: Yangi chizma qaysi birliklar, uzunlik formati, aniqlik, matn balandligi va varaq qogʻozi bilan boshlanishini bir marta belgilang, metrik va imperial ishlar uchun, hamda siyosatlarni idora boʻylab kichik fayl sifatida ulashing.
keywords: standart, standartlar, standart siyosatlar, siyosat, idora standarti, idora standartlari, shablon, yangi chizma, birliklar, insunits, uzunlik formati, arxitektura, aniqlik, luprec, matn balandligi, varaq qogʻozi, a1, ulashish, eksport, import, json
from: 7b80fd13
---

## Nima qilasiz

CadCraft yangi chizma nimadan boshlanishini bir marta ayting, shunda idoradagi hech kim har safar UNITS ni ishga tushirib, bir xil narsalarni oʻzgartirmaydi. Bu qoʻshimcha: uni yoqmaguningizcha oʻchiq turadi, siz belgilamagan siyosat esa CadCraft ning oʻz standarti holatida qoladi.

:::note
Bular **yangi** chizmalar va **yangi** varaqlar uchun standartlar. Siz allaqachon boshlagan chizma oʻzgarmaydi, ochgan chizma ham oʻzgarmaydi.
:::

## Qadamlar

1. Sozlamalarni oching, {{ui:Qoʻshimchalar}} ga oʻting va {{ui:Standart siyosatlar}} ni yoqing.
2. Sozlamalarda **CadCraft** yorligʻini oching va chapdagi roʻyxatdan {{ui:Standart siyosatlar}} ni tanlang.
3. Kerakli siyosatlarni belgilang. Har biri **CadCraft ning oʻz** qiymatidan boshlanadi. **Metrik** va **Imperial** katakchalari bor siyosat har bir chizma turi uchun bittadan qiymat oladi; faqat kerakli qismlarni toʻldiring.
4. Saqlash tugmasi yoʻq: har bir oʻzgarish siz qilgan zahoti saqlanadi.
5. Yangi chizma boshlang. U siz belgilagan birliklar, uzunlik formati, aniqlik va matn balandligiga ega boʻladi, uning birinchi yangi varagi esa siz tanlagan qogʻozda boʻladi.

## Siyosatlar

- **Yangi chizmaning birliklari**: yoʻq, millimetr, santimetr, metr, dyuym yoki fut.
- **Uzunlik formati** va **Uzunlik aniqligi**: UNITS buyrugʻi yangi chizma uchun belgilaydigan narsalar.
- **Yangi matn balandligi**: chizma birliklarida.
- **Yangi varaq qogʻozi**: Yangi varaq ishlatadigan qogʻoz.
- **Varaqdagi izoh oʻlchamlari** (Sozlamalar › Global › Standart siyosatlar): idoraning chop etilgan millimetrdagi balandliklari. CadCraft izohlar va yorliqlar uchun bittasini ishlatadi: {{cmd:ANNOSCALE}} yangi matn boshlanadigan balandlikni izoh masshtabida shu balandlikka oʻrnatadi. Qarang: [Birliklar, qogʻozlar va masshtablar](topic:units-papers-scales#annotate-by-scale).

Dyuym yoki futdagi chizma Imperial qiymatlardan foydalanadi; boshqa har qanday chizma Metrik qiymatlardan. Birliklari boʻlmagan chizma Sozlamalar › Global › Standart siyosatlar da belgilangan birlik tizimidan foydalanadi, u belgilanmagan boʻlsa Metrik.

## Idora boʻylab ulashing

1. Sozlamalarda **Global** yorligʻini oching va {{ui:Standart siyosatlar}} ni tanlang.
2. {{ui:Faylga saqlash}} ni bosing. `.ccdefaults.json` bilan tugaydigan kichik fayl olasiz.
3. Boshqa kompyuterda qoʻshimchani yoqing, oʻsha joyni oching va {{ui:Fayldan yuklash}} ni bosing. Fayldagi siyosatlar oʻsha kompyuterdagilarni almashtiradi.

Bitta fayl har bir CadCraft ilovasining siyosatlarini saqlaydi, shuning uchun bir xil fayl BimCraft da ham ishlaydi.

## Yaxshi bilish kerak boʻlgan narsalar

- Varaq masshtabi uchun siyosat yoʻq: yangi varaqning koʻrinishi chizmaga moslashtiriladi va masshtabni varaqda oʻzingiz belgilaysiz.
- Oʻlcham uslubi uchun siyosat yoʻq: yangi chizmada nomlangan oʻlcham uslublari yoʻq. Oʻlchamlarni DIMSTYLE bilan sozlang yoki oʻzingizniki bor chizmadan boshlang.
- Fayl oddiy, ochiq JSON. Fayl nomlagan, lekin bu versiya tanimaydigan siyosat tashlab qoldiriladi va xabarda aytiladi; qolganlari yuklanadi.
- Siyosatlar chizmada emas, shu brauzerda saqlanadi. Qoʻshimchani oʻchirsangiz, hammasi yana CadCraft ning oʻz standarti boʻladi.
