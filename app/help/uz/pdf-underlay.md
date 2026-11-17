---
title: PDF fon va PDF import
summary: Chizmangiz ostiga PDF sahifani qoʻying va uni kuzatish hamda chop etish uchun ishlating, yoki sahifadagi chiziq va matnni chizma obyektlariga aylantiring.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, fon, kuzatish, pdf import, skan, qavat rejasi, xiralashtirish, klip, qatlamlar, ilashish, pdf ochish
from: aa301d0f
---

## PDF sahifani kiritishning ikki usuli

- **Biriktirish** ({{cmd:PDFATTACH}}) PDFni chizmangiz ostida rasm sifatida saqlaydi. Uni kuzatasiz, chiziqlariga ilashasiz, xiralashtirasiz, klip qilasiz, va u varaq bilan birga chop etiladi. Chizmada faqat fayl nomi saqlanadi.
- **Import** ({{cmd:PDFIMPORT}}) sahifadagi chiziq, egri chiziq, toʻldirish va matnni PDF nomi bilan atalgan qatlamlardagi oddiy chizma obyektlariga aylantiradi. Ularni oʻzingiz tahrirlaysiz va keyin PDF kerak boʻlmaydi.

{{ui:Ochish}} bilan PDF ochilganda, ikki usuldan qaysi birini xohlashingiz soraladi.

## Sahifani biriktirish

1. `PDFATTACH` (yoki `PDFATT`) ni yozing va PDF faylni tanlang. Agar sahifalar bir nechta boʻlsa, sahifa raqamini kiriting.
2. Kiritish nuqtasini bosing (sahifaning chap pastki burchagi).
3. Sahifaning haqiqiy oʻlchami uchun {{key:Enter}} bosing, yoki masshtabni kiriting: har bir PDF nuqtasiga chizma birliklari (nuqta — 1/72 dyuym, shuning uchun millimetrli chizmada 0.3528).
4. Burilishsiz boʻlsa {{key:Enter}} bosing, yoki burchakni kiriting.

Sahifa blok havolasi kabi obyekt: uni koʻchirish, aylantirish, masshtablash, nusxalash, oʻchirish va qatlamga qoʻyish mumkin. Uning qatlamini oʻchirsangiz, u yoʻqoladi. Yaqinlashtirsangiz, sahifa qayta oʻtkir chiziladi.

## Kuzatish

{{ui:Ilashish}} yoqilgan boʻlsa, kursor PDFning oʻz chiziqlariga ilashadi: uchlari, oʻrtalari va kesishmalari ({{ui:Eng yaqin}} ham, agar u yoqilgan boʻlsa). Sahifada harf koʻrinishida chizilgan matnga ilashilmaydi.

## Sozlash

- `PDFADJUST`: **Xiralashtirish** (0 dan 80 foizgacha), **Kontrast** (0 dan 100 gacha), **Monoxrom** va **Onoff** — uni oʻchirmasdan yashirish uchun.
- `PDFCLIP`: sahifaning faqat toʻrtburchak yoki koʻpburchak qismini koʻrsatadi; **Oʻchirish** klipni olib tashlaydi.
- `PDFLAYERS`: PDF oʻz qatlamlariga ega boʻlishi mumkin. Buyruq ularni roʻyxatlaydi; shu fon uchun qatlamni yoqish yoki oʻchirish uchun raqam kiriting. Fayl oʻchiq emas deb belgilagan qatlamlar oʻchiq holda boshlanadi.

## Chop etish va saqlash

`PLOT` sahifani chiziqlari, toʻldirishlari va matni sifatida chop etadi (shunda u oʻtkir va qidiriladigan boʻlib qoladi). PDF ichidagi rasmlar ekranda koʻrsatiladi, lekin hozircha chop etilmaydi.

DWG yoki DXF 2000 fonni havola sifatida saqlaydi: fayl nomi, sahifa, joylashuvi, masshtabi, burilishi, klipi, xiralashtirish va kontrast. PDFning oʻzi chizmada boʻlmaydi. Chizmani qayta oching, `PDF` ni yozing va faylni yana tanlang; shu paytgacha sahifalar ramka sifatida koʻrinadi va faqat shunda haqiqiy oʻlchamini oladi. Eski DXF (R12) fonlarni saqlamaydi: u faqat ramka va nomni saqlaydi. Saqlangan klip va masshtabni boshqa dasturlar qanday oʻqishi hali tekshirilmagan.

## Sahifani import qilish

1. `PDFIMPORT` (yoki `PDFIM`) ni yozing va PDF faylni hamda sahifani tanlang.
2. Sahifaning chap pastki burchagi qayerga borishini bosing.
3. Haqiqiy oʻlcham uchun {{key:Enter}} bosing, masshtab kiriting yoki **Ikki nuqta** ni tanlang: sahifa avval haqiqiy oʻlchamda chiziladi, soʻng oʻzingiz biladigan masofaning ikki nuqtasini bosasiz va haqiqiy masofani kiritasiz; hammasi shunga mos masshtablanadi.

Chiziqlar chiziq va polichiziqqa aylanadi, aylana va yoylar aniqlanadi, toʻldirilgan shakllar qattiq shtrixlashga aylanadi, matn esa `-TEXT` bilan tugaydigan qatlamdagi matnga aylanadi. Bu bitta bekor qilish qadami. PDFdagi rasmlar import qilinmaydi: uning oʻrniga sahifani biriktiring. Skan (faqat rasmdan iborat sahifa) import qilinadigan chiziqlarga ega emas.

PDF fayllar ishonchsiz fayllar sifatida oʻqiladi: hech qanday skript ishlamaydi, juda katta sahifa esa qisqartiriladi va bu aytiladi.
