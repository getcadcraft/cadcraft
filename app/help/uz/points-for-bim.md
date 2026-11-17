---
title: BIM dasturlari uchun nuqtalar
summary: Nuqtalarni va tavsifli bloklarning kiritish nuqtalarini CSV yoki TXT faylga eksport qiling, uni BIM va geodezik dasturlar import qiladi.
keywords: exportpoints, nuqtalarni eksport qilish, nuqtalar, csv, txt, pnezd, penzd, xyz, geodezik nuqtalar, koordinatalar, bim, joylashtirish, nuqta fayli, shimoliy koordinata, sharqiy koordinata, balandlik
from: d80e2d53
---

## Nima yaratasiz

Nuqta fayli: har bir nuqta uchun bitta qator, raqami, shimoliy koordinatasi, sharqiy koordinatasi, balandligi va tavsifi bilan. BIM dasturlari (jumladan Revit va Archicad) va geodezik dasturlar uni import qilib, geodezik nuqtalar, joy belgilari yoki jihozlarni joylashtirishi mumkin.

## Nuqtalarni eksport qilish

1. Nuqtalarni va kiritish nuqtalari kerak boʻlgan blok havolalarini tanlang, yoki hech narsani tanlamang — u holda hamma nuqtalar olinadi.
2. {{cmd:EXPORTPOINTS}} (yoki `EXPPTS`, yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Nuqtalarni eksport qilish}}) ni yozing va {{key:Enter}} bosing (`Nuqtalar va bloklarni tanlang` da hech narsa tanlanmagan boʻlsa, yana {{key:Enter}} bosing).
3. Atributli bloklarni tanlasangiz, CadCraft ularning teglarini roʻyxatlaydi: qiymati tavsif boʻladigan tegni yozing (masalan `ITEM`), yoki har bir blok nomini ishlatish uchun boshqa narsa yozing.
4. Ustunlarni tanlang: `PNEZD` (nuqta, shimoliy, sharqiy, balandlik, tavsif — odatiy), `PENZD` (sharqiy shimoliydan oldin) yoki `XYZ` (faqat koordinatalar).
5. Birliklarni tanlang: `D` chizilganidek, `M` metr yoki `F` fut (faqat chizma birliklari belgilangan boʻlsa: Xossalar › {{ui:Birliklar}}, hech narsa tanlanmagan holda).
6. UCS oʻrnatilgan boʻlsa, `W` jahon yoki `U` UCS koordinatalarini tanlang (qarang: [UCS va burilgan koʻrinish](topic:ucs-and-turned-view)).
7. `C` vergul bilan ajratilgan `.csv` uchun yoki `T` tab bilan ajratilgan `.txt` uchun tanlang, va birinchi nuqta raqamini kiriting.

Fayl `<drawing>-points.csv` (yoki `.txt`) nomi bilan yuklab olinadi va tarix nechta nuqta borligini aytadi.

## Fayl ichida nima bor

- Har bir qatorda bitta nuqta, qator uzilishi bilan tugaydi (CR LF), uchta oʻnlik xona bilan.
- Nuqtaning balandligi uning Z qiymati (boʻlmasa 0). Blokning nuqtasi uning kiritish nuqtasi.
- Vergul (yoki TXTda tab) yoki qoʻshtirnoq boʻlgan tavsif qoʻshtirnoq ichiga olinadi, qoʻshtirnoqlari ikkilantiriladi.
- Format CivilCraft oʻqiydigan va yozadigan formatdir, shuning uchun fayl u yerda ham nuqta sifatida ochiladi.

## Keng uchraydigan xatolar

- Birliklar uchun faqat `D` taklif qilinadi: chizmada birliklar belgilanmagan. Ularni belgilang yoki boshqa dasturda aylantiring.
- Nuqtalar boshqa dasturda kutgan joydan uzoqda: jahon koordinatalarini (`W`) yoki boshqa dasturning geodezik nuqtasi ishlatadigan UCSni (`U`) eksport qiling.
