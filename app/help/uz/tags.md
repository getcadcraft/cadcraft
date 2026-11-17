---
title: Teglar: jadvallarga oziqlantiruvchi atributlar
summary: Tegni aniqlang (turi, qabul qilishi mumkin boʻlgan qiymatlar, qoʻllaniladigan bloklar), uni blok havolalarida belgilang va havolalarni CSV sifatida saqlanadigan jadval qilib sanab chiqing.
keywords: teglar, teg, atribut, jadval, maʼlumotlarni chiqarish, xossa, yongʻinga chidamlilik, tanlash roʻyxati, blok havolasi, TAGS, csv
from: 9b90bacc
---

**Teg** — bu aniqlovchi ta'rifga ega blok atributi: u qanday turdagi qiymat saqlashi, qaysi qiymatlarga ruxsat berilganligi va qaysi bloklarga tegishli ekanligi. Qiymatlar oddiy blok atributlari, shuning uchun boshqa dastur ularni oʻqiydi va {{cmd:ATTEDIT}} ularni koʻrsatadi. Yangi narsa faqat ta'riflar boʻlib, ular chizmada saqlanadi.

## Aniqlash va belgilash

{{cmd:TAGS}} ni yozing va tanlang:

- {{ui:Aniqlash}}: nom (harflar, raqamlar, boʻshliq, `_ . -`), tur (`text`, `number`, `integer`, `yesno`, `length`, `angle`), ruxsat etilgan qiymatlar `;` bilan ajratilgan (istalgan qiymat uchun boʻsh qoldiring) va unga tegishli blok nomlari (`DOOR*` — DOOR bilan boshlanadigan barcha bloklar; boʻsh boʻlsa — barcha bloklar).
- {{ui:Toʻplam}}: blok havolalari tanlangan holda `FireRating=60 min; Width=850` deb yozing. Ruxsat etilgan roʻyxatdan tashqari qiymat yoki raqam tegi uchun raqam boʻlmagan qiymat rad etiladi va bu aytiladi. Bitta ortga qaytarish qadami. Atributi boʻlmagan blok uni yashirin atribut sifatida oladi.
- {{ui:Jadval}}: teg qoʻllanadigan blokka ishora qiluvchi barcha havolalar, ixtiyoriy ravishda teg yoki blok nomi boʻyicha guruhlangan, chop etiladi va CSV sifatida saqlanadi.
- {{ui:Olib tashlash}}: ta'rifni unutadi; qiymatlar havolalarda qoladi.

Tegni qayta nomlash uning qiymatlarini har bir havolada ham qayta nomlaydi. Teg nomlari katta-kichik harfga sezgir emas, xuddi atribut nomlari kabi.
