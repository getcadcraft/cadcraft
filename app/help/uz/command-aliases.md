---
title: Buyruq taxalluslarini tahrirlash
summary: Oʻz buyruq taxalluslaringizni tanish formatdagi bitta matn faylida saqlang, .pgp faylni import va eksport qiling va REINIT bilan qayta yuklang.
keywords: taxallus, taxalluslar, aliasedit, pgp, yorliq, qisqa nom, reinit, klaviatura, moslashtirish, taxalluslarni tahrirlash
from: 6ab6fa0e
---

## Nimalarni oʻrganasiz

Buyruqlar uchun oʻz qisqa nomlaringizni qanday qoʻshish mumkinligi, masalan {{cmd:LINE}} uchun `LL`, bitta matn faylida.

## Taxallus qoʻshish

1. {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Taxalluslarni tahrirlash…}} ni oching yoki {{cmd:ALIASEDIT}} yozing va {{key:Enter}} ni bosing.
2. Taxallus, vergul va yulduzcha ortidan buyruqni kiritib, yangi qator qoʻshing:

```
LL,     *LINE
```

3. {{ui:Saqlash}} ni bosing. Buyruq satri nechta taxallusingiz ishlatilayotganini aytadi.
4. `LL` yozing va {{key:Enter}} ni bosing: LINE boshlanadi.

Sizning taxalluslaringiz CadCraft ning oʻz taxalluslari ustida turadi. Sizning qatoringiz bir xil nomli oʻrnatilgan taxallusdan ustun turadi; qatorni olib tashlasangiz, oʻrnatilgan taxallus qaytadi.

## CadCraft rad etadigan qatorlar

Tahrirlovchi yozish davomida har bir muammoni qator raqami bilan koʻrsatadi:

- buyruq mavjud emas;
- taxallus oʻzi buyruq nomi (`LINE, *CIRCLE` LINE ni yashiradi);
- qator `TAXALLUS, *BUYRUQ` shaklida emas;
- bir xil taxallus ikki qatorda (keyingisi gʻolib boʻladi).

Kompyuteringizda dasturni ishga tushiradigan qatorlar, masalan `NOTEPAD, START, 1, *File to edit: ,`, izoh bilan oʻtkazib yuboriladi: brauzerdagi ilova dasturlarni ishga tusha olmaydi.

## Taxalluslaringizni boshqa dasturdan olib kelish

1. Taxallus tahrirlovchisida {{ui:Import .pgp…}} ni bosing va faylni tanlang. Shuningdek `.pgp` faylni chizmaga tashlashingiz mumkin.
2. Roʻyxatdagi muammolarni tekshiring (CadCraft da boʻlmagan buyruqlar rad etiladi, qolganlari ishlaydi).
3. {{ui:Saqlash}} ni bosing.

{{ui:Export .pgp}} CadCraft taxalluslarini va sizniki bir xil formatdagi bitta faylga saqlaydi.

## Faylni qayta yuklash

{{cmd:REINIT}} yozing va {{key:Enter}} ni bosing, taxalluslar faylini yana qoʻllash uchun. U shu brauzerda saqlanadi; ish stoli ilovasi uni oʻz jildida saqlaydi, bulutli xizmat esa sinxronlaydi.

## Har qanday buyruq uchun klaviatura yorliqlari

Taxallus yoziladi; yorliq tugma bosiladi. Buyruqqa oʻz tugmangizni berish uchun:

1. {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Klaviatura yorliqlari…}} ni bosing yoki `KEYS` yozing va {{key:Enter}} ni bosing.
2. {{ui:Tugma}} maydonini bosing va tugmalarni bosing, masalan {{key:Alt+Shift+C}}.
3. {{ui:Bajaradi}} maydoniga buyruqni yozing va xohlasangiz, undan keyin kiritiladigan narsani: `CIRCLE` yoki `ZOOM E`.
4. {{ui:Qoʻshish}} ni bosing.

Tugmaga {{key:Mod}} yoki {{key:Alt}} bilan harf yoki raqam, yoki boʻsh funksiya tugmasi ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}) kerak. CadCraft, ilova yoki brauzer allaqachon ishlatadigan tugmalar hamda Mening asboblarim tugmasi egallagan tugmalar ([Oʻz tugmalaringiz](topic:my-tools) ga qarang) rad etiladi va maydon sababini koʻrsatadi. Yorliqlar shu brauzerda (yoki ish stoli ilovasida) saqlanadi; {{ui:Olib tashlash}} birini oʻchiradi.
