---
title: Bir chizmaga ikki kishining tahrirlarini birlashtirish
summary: git, Fossil yoki Mercurial ga DWG yoki DXF ning ikki nusxasini obyekt boʻyicha birlashtirishga ruxsat bering, CadCraft har bir obyektda saqlaydigan kalit yordamida.
keywords: birlashtirish, git, fossil, mercurial, versiya nazorati, farq, nizo, uch tomonlama, cadcraft birlashtirish, kalit, gitattributes, DWG, DXF
from: 71482bf9
---

Ikki kishi bir chizmani tahrir qiladi. Agar ular turli obyektlarni oʻzgartirgan boʻlsa, birlashtirish avtomatik boʻlishi mumkin: qoʻlda qayta bajarish kerak emas.

## Bu nimani ishlatadi

CadCraft siz chizgan har bir obyektga qisqa **kalit** beradi, u hech qachon oʻzgarmaydi va hech qachon ikki obyektga berilmaydi. U obyekt bilan birga DWG yoki DXF ichida saqlanadi (boshqa dasturlar saqlaydigan qoʻshimcha maʼlumot sifatida). Birlashtirish obyektlarni faylda joylashuviga emas, shu kalit boʻyicha topadi, chunki har bir dastur saqlaganda joylashuvlarni qayta raqamlaydi. Agar hech qachon birlashtirmasangiz, buni {{ui:Sozlamalar}} › CadCraft › Birlashtirishga qulay fayllar ichida oʻchirib qoʻying; fayllar taxminan 10 foizga kichrayadi.

Kalit yaratilishidan oldin saqlangan chizma ham birlashadi: uning obyektlari faylda oʻz joyidan kalit oladi, bu hamma uchun bir xil.

## Sozlash

Git uchun har bir repozitoriyda bir marta ikki qator kerak:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# bir marta, har bir kompyuterda
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Gitsiz, qoʻlda ishga tushiring: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil va Mercurial xuddi shu uchta faylni oʻz birlashtirish vositasi sozlamasida qabul qiladi.

## Qoidalar

- Faqat bir tomonda oʻzgartirilgan obyekt olinadi. Ikki tomonda bir xil oʻzgarish bir marta olinadi.
- Bir xususiyat ikki xil usulda oʻzgartirilgan boʻlsa, bu **nizo**: sizning tomoningiz qoladi va hisobot ikkala qiymatni koʻrsatadi. Natijani oching, oʻsha obyektga qarang va uni qoʻlda tuzating.
- Ikki tomonning birortasida qoʻshilgan obyekt saqlanadi. Bir tomonda oʻchirilgan va ikkinchisida tegilmagan obyekt oʻchiriladi. Bir tomonda oʻchirilgan va ikkinchisida oʻzgartirilgan obyekt oʻchiriladi va haqida xabar beriladi.
- Qatlamlar, bloklar, matn va oʻlcham uslublari, varaqlar va nomlangan koʻrinishlar xuddi shunday birlashadi. Cheklovlar oʻzi nomlagan obyektlarga ergashadi.
- Natija sizning fayl formatingiz va versiyangizda yoziladi.

Birlashtirilmaydi: obyektlarning chizilish tartibi sizniki boʻladi, keyin esa boshqa tomon qoʻshgan obyektlar. Ikki tomonda bir xil blok taʼrifiga oʻzgarishlar har doim nizo boʻladi, hech qachon aralashtirilmaydi. Hech narsa yuklanmaydi: hammasi sizning kompyuteringizda ishlaydi.
