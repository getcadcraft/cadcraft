---
title: Matn uslublari bilan matnning shrifti va oʻlchamini belgilash
summary: Shrift, balandlik, kenglik va qiyalik bilan nomlangan matn uslublarini yarating, yangi matn uchun bittasini joriy qiling va uslubni oʻzgartirib, undan foydalanadigan barcha matnni oʻzgartiring.
keywords: matn uslubi, uslub, STYLE, ST, TEXTSTYLE, -STYLE, shrift, matn balandligi, kenglik koeffitsienti, qiyalik, shriftni oʻzgartirish, standart uslub, uslubni qoʻllash, DDSTYLE
from: bd5a4883
---

## Nima qilasiz

`Notes` nomli matn uslubini oʻz shrifti va balandligi bilan yarating, undan yangi matn uchun foydalaning, keyinroq uslubni oʻzgartirib, undan foydalanadigan har bir izoh bir vaqtda oʻzgarsin.

## Qadamlar

1. {{cmd:STYLE}} (`ST`) ni yozing va {{key:Enter}} ni bosing, yoki {{ui:Chizish}} asboblar panelida {{ui:Matn uslubi}} ni bosing. {{ui:Matn uslubi}} dialogi chizmadagi uslublar roʻyxatini koʻrsatadi. Har bir chizmada `Standard` bor.
2. {{ui:Yangi…}} ni bosing, yangi uslub nomi sifatida `Notes` ni yozing va {{ui:OK}} ni bosing. Holat satrida "Matn uslubi Notes yaratildi va joriy qilindi" deyiladi.
3. {{ui:Shrift}} da shrift nomini tanlang yoki yozing. {{ui:Balandlik (0 = har safar soʻrash)}} ni `2.5` kabi raqamga oʻrnating, shunda har bir yangi matn oʻsha balandlikda boʻladi. Har safar soʻralish uchun `0` da qoldiring.
4. Torroq, kengroq yoki qiyshiq harflar kerak boʻlsa, {{ui:Kenglik koeffitsienti}} va {{ui:Qiyalik burchagi (°)}} ni oʻrnating. Namuna qator natijani koʻrsatadi.
5. {{ui:Yopish}} ni bosing. {{cmd:TEXT}} yoki {{cmd:MTEXT}} bilan matn chizing: yangi matn joriy uslubni oladi.
6. Avval yaratgan uslubdan foydalanish uchun dialogni qayta oching, roʻyxatda uni tanlang va {{ui:Joriyni oʻrnatish}} ni bosing.
7. Allaqachon chizilgan matnga uslub berish uchun matnni tanlang, dialogni oching, uslubni tanlang va {{ui:Tanlangan matnga qoʻllash}} ni bosing.

## Uslubni keyinroq oʻzgartirish

Dialogda uslubning shrifti, balandligi, kengligi yoki qiyaligini oʻzgartiring: unga bogʻliq har bir matn ham oʻzgaradi, bitta ortga qaytarish qadamida ({{key:Mod+Z}}). Holat satrida nechta matn oʻzgarganligi aytiladi.

## Izohlar

- {{ui:Oʻchirish}} `Standard` ni va matn hali ishlatayotgan uslubni rad etadi: avval oʻsha matnni boshqa uslubga oʻzgartiring.
- Uslublar chizmaning STYLE jadvalida saqlanadi, shuning uchun DXF va DWG fayllar ularni saqlaydi.
- Buyruq satrida `-STYLE` xuddi shu ishni parametrlar bilan bajaradi (Current, New, Font, Height, Width, Oblique, Delete, List).
- Chizmani oʻqiyotgan kompyuterda boʻlmagan shrift boshqa koʻrinishda chiqariladi.
