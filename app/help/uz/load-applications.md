---
title: Ilovalarni yuklash (APPLOAD)
summary: LISP proseduralari va ularning dialog fayllarini yuklang, chiqarib tashlang, tarixdan qayta yuklang va koʻp ishlatadiganlarini Ishga tushirish toʻplamida saqlang.
keywords: appload, ap, ilovani yuklash, lisp, lsp, dcl, prosedura, ishga tushirish toʻplami, chiqarish, tarix, tashlash, yuklash, moslash, boshqarish
from: 89e0ee95
---

## Nima oʻrganasiz

CadCraft da buyruqlari ishlashi uchun LISP prosedurasini (`.lsp` fayl) qanday yuklash, uni qanday chiqarib tashlash va CadCraft har safar ishga tushganda yuklanishi uchun qanday qilish.

## Prosedurani yuklash

1. {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Ilovani yuklash…}} ni oching yoki {{cmd:APPLOAD}} (yoki `AP`) buyrugʻini yozing va {{key:Enter}} bosing.
2. {{ui:Faylni yuklash…}} ni bosing va bir yoki bir nechta `.lsp` faylni tanlang. Dialog ochadigan prosedura odatda `.dcl` fayl bilan keladi: uni ham tanlang.
3. Dialog har bir fayl nima yaratganini aytadi, masalan "delblocks.lsp yuklandi: 1 ta buyruq, DELBLOCKS."
4. {{ui:Yopish}} ni bosing, prosedura buyrugʻini yozing va {{key:Enter}} bosing.

Shuningdek, `.lsp` va `.dcl` fayllarni chizmaga yoki Ilovalarni yuklash dialogiga tashlashingiz mumkin: ular darhol yuklanadi.

Fayl shu yerda, brauzeringizda oʻqiladi. Hech narsa serverga yuklanmaydi.

:::tip
Prosedura buyrugʻini qayta bajarish uchun boshqa buyruq kabi, boʻsh buyruq satrida {{key:Enter}} bosing. Buyruq taxalluslaringiz ham unga yetishi mumkin: "Buyruq taxalluslarini tahrirlash" ga qarang.
:::

## Prosedurani chiqarib tashlash

{{ui:Ilovalarni yuklash}} da, {{ui:Yuklangan ilovalar}} ostida, fayl yonidagi {{ui:Chiqarish}} tugmasini bosing. U yaratgan buyruqlar uni qayta yuklamaguncha yoʻqoladi.

## Har safar CadCraft ishga tushganda prosedurani yuklash

1. Prosedurani yuklang.
2. {{ui:Yuklangan ilovalar}} ostida, uning yonidagi {{ui:Ishga tushirish toʻplamiga qoʻshish}} ni bosing.

Shundan keyin, bu brauzerda CadCraft ishga tushganda u oʻzi yuklanadi. Buni toʻxtatish uchun {{ui:Ishga tushirish toʻplami}} ostida uning yonidagi {{ui:Olib tashlash}} ni bosing.

Ishga tushirish toʻplami har bir faylning nusxasini bu brauzerning xotirasida saqlaydi. Prosedurani oʻzgartirsangiz, yangi faylni yuklang va uni yana qoʻshing.

## acad.lsp va acaddoc.lsp ni yordamchi jilddan yuklash (Studio)

CadCraft Studio da {{ui:Ilovalarni yuklash}} dialogidagi {{ui:Yordamchi jild}} kompyuteringizdagi jildni oladi. {{ui:Jild tanlash…}} ni bosing. CadCraft ishga tushganda oʻsha jilddan avval `acad.lsp`, soʻng `acaddoc.lsp` ni oʻqiydi (nomlarining katta-kichikligidan qat'i nazar), ularni yuklaydi va soʻng Ishga tushirish toʻplamini yuklaydi. `acaddoc.lsp` har safar yangi chizma yorligʻi ochilganda qayta oʻqiladi. Jilddagi boshqa hech narsa oʻqilmaydi, 2 MB dan katta fayl esa xabar bilan oʻtkazib yuboriladi.

Agar fayl `S::STARTUP` nomli funksiyani aniqlasa, u fayllar yuklangandan keyin (Ishga tushirish toʻplamidan keyin ham) bir marta ishlaydi. {{ui:Hozir yuklash}} buni soʻrov boʻyicha xuddi shunday bajaradi; {{ui:Tozalash}} jildni unutadi.

Brauzerda sahifa jildni saqlay olmaydi, shuning uchun brauzerda yordamchi jild yoʻq: yuqoridagi Ishga tushirish toʻplamidan foydalaning. Kompilyatsiya qilingan `.fas` va `.vlx` fayllar hamda mahalliy dasturlar rad etilgan holda qoladi.

## Tarixdan faylni qayta yuklash

{{ui:Tarix}} bu brauzerda yuklagan fayllaringizni, eng yangisi birinchi boʻlib, roʻyxatlaydi. Bittasining yonidagi {{ui:Yuklash}} ni bosing, uni kompyuteringizdan izlamasdan qayta yuklash uchun.

## CadCraft yuklay olmaydigan fayllar

| Fayl | Bu nima | Nima qilish kerak |
|---|---|---|
| `.fas`, `.vlx` | kompilyatsiya qilingan yoki himoyalangan LISP | oʻrniga `.lsp` manbasini yuklang |
| `.arx`, `.crx`, `.dbx` | mahalliy Windows dasturlari | CadCraft da bularni ishga tushirishning iloji yoʻq |
| `.dvb` | VBA loyihasi | CadCraft da bularni ishga tushirishning iloji yoʻq |
| `.craft`, `.lua`, `.py` | CraftScript skriptlari | ularni PartCraft ning Skript ish maydonida oching |

Ilovalarni yuklash dialogi fayl tanlanganda, uning bulardan qaysi biri ekanini aytadi.

## Prosedurani toʻxtatish

{{key:Esc}} bosing. Prosedura soʻrovlaridan birida Esc uni prosedura kutgan tarzda bekor qiladi (uning oʻz tozalashi ishlaydi). Agar u band boʻlsa va hech narsa soʻramasa, Esc uni butunlay toʻxtatadi va buni aytadi; yuklangan prosedurangiz yuklangan holda qoladi.

:::note
Prosedura chizmada oʻzgartirgan hamma narsa bitta qadam: bitta {{key:Mod+Z}} hammasini qaytaradi.
:::
