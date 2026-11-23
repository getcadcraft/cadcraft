---
title: Buyruq taxalluslarini tahrirlash
summary: Oʻz buyruq taxalluslaringizni bitta matnli faylda tanish formatda saqlang, .pgp faylini import va eksport qiling hamda REINIT bilan qayta yuklang.
keywords: taxallus, taxalluslar, aliasedit, pgp, yorliq, qisqa nom, reinit, klaviatura, moslashtirish, taxalluslarni tahrirlash
from: 2282d36f
---

## Nimalarni oʻrganasiz

Buyruqlar uchun oʻz qisqa nomlaringizni qanday qoʻshishni oʻrganasiz, masalan {{cmd:LINE}} uchun `LL`, hammasini bitta matnli faylda saqlab.

## Taxallus qoʻshish

1. {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Taxalluslarni tahrirlash…}} ni oching yoki {{cmd:ALIASEDIT}} ni yozib, {{key:Enter}} ni bosing.
2. Taxallus, vergul va yulduzchadan (*) keyin buyruqni yozib, bir qator qoʻshing:

```
LL,     *LINE
```

3. {{ui:Saqlash}} ni bosing. Buyruq satrida nechta taxallus ishlatilayotgani koʻrsatiladi.
4. `LL` ni yozing va {{key:Enter}} ni bosing: LINE boshlanadi.

Taxalluslaringiz CadCraft’ning oʻz taxalluslari ustida ishlaydi. Oʻz qatoringiz bir xil nomli oʻrnatilgan taxallusdan ustun turadi; qatorni olib tashlasangiz, oʻrnatilgan taxallus qaytadi.

## CadCraft qabul qilmaydigan qatorlar

Tahrirlovchi yozish vaqtida har bir muammoni qator raqami bilan koʻrsatadi:

- buyruq mavjud emas;
- taxallus oʻzi boshqa buyruqning nomi (`LINE, *CIRCLE` LINE ni yashirib qoʻyadi);
- qator `ALIAS, *COMMAND` shaklida emas;
- bir xil taxallus ikki qatorda uchraydi (keyingi qator ustun turadi).

Kompyuteringizda dastur ishga tushiradigan qatorlar, masalan `NOTEPAD, START, 1, *File to edit: ,`, izoh bilan oʻtkazib yuboriladi: brauzerdagi ilova dasturlarni ishga tushira olmaydi.

## Boshqa dasturdagi taxalluslarni olib kelish

1. Taxallus tahrirlovchisida {{ui:Import .pgp…}} ni bosing va faylni tanlang. Shuningdek, `.pgp` faylini chizmaga sudrab tashlashingiz mumkin.
2. Chiqqan muammolarni tekshiring (CadCraft da mavjud boʻlmagan buyruqlar rad etiladi, qolganlari ishlaydi).
3. {{ui:Saqlash}} ni bosing.

{{ui:Export .pgp}} CadCraft taxalluslarini va sizniki bir xil formatdagi bitta faylga saqlaydi.

## Faylni qayta yuklash

Taxallus faylini qayta qoʻllash uchun {{cmd:REINIT}} ni yozing va {{key:Enter}} ni bosing. Fayl shu brauzerda saqlanadi; ish stoli ilovasi uni oʻz jildida saqlaydi, bulutli xizmat esa uni sinxronlaydi.

## Buyruq variantlari uchun harflar

Taxallus buyruqni nomlaydi. Buyruq variantlariga javob beradigan harflarni oʻzgartirish uchun (ARRAY da `P` Polar uchun), qarang: [Buyruq variantlariga oʻz harflaringizni bering](topic:option-letters).

## Istalgan buyruq uchun klaviatura yorliqlari

Taxallus yoziladi; yorliq esa tugma bilan bajariladi. Buyruqqa oʻz tugmangizni berish uchun:

1. {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Klaviatura yorliqlari…}} ni bosing yoki `KEYS` ni yozib, {{key:Enter}} ni bosing.
2. {{ui:Tugma}} katagiga bosing va tugmalarni bosing, masalan {{key:Alt+Shift+C}}.
3. {{ui:Bajaradi}} ga buyruqni yozing, xohlasangiz, undan keyin yoziladigan narsani ham: `CIRCLE` yoki `ZOOM E`.
4. {{ui:Qoʻshish}} ni bosing.

Yorliq uchun {{key:Mod}} yoki {{key:Alt}} bilan harf yoki raqam, yoki boʻsh funksiya tugmasi ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}) kerak. CadCraft, ilova yoki brauzer allaqachon ishlatadigan tugmalar hamda Mening tugmalarim tugmasi band qilgan tugmalar ([Oʻz tugmalaringiz](topic:my-tools) boʻlimiga qarang) rad etiladi va katakda sababi koʻrsatiladi. Yorliqlar shu brauzerda (yoki ish stoli ilovasida) saqlanadi; {{ui:Olib tashlash}} ni bosib, ularni oʻchirish mumkin.
