---
title: Chizmadagi rasmlar
summary: PNG yoki JPEG rasmni joylashtiring, uni toʻgʻri toʻrtburchak yoki koʻpburchakka kesing, DWG ishlatgan rasmlarni koʻrsating va ularni oʻtkir qilib chop eting.
keywords: pastearea, parea, copy area, copied area, markupcraft, haqiqiy oʻlcham, real size, qoplama, overlay, ole, ole2frame, joylashtirilgan obyekt, embedded object, rasmni joylashtirish, ekran suratini joylashtirish, ctrl+v, buferdagi rasm, ekran surati, rasm, picture, image, imageattach, iat, imageclip, kesish, clip, png, jpeg, jpg, logotip, foto, raster, imagedef, xref, chop etish, plot, pdf, aniqlik, resolution
from: 4025ac97
---

## Nima yasaysiz

Sarlavha blokiga kompaniya logotipi joylashtiriladi, siz xohlagan qismga kesiladi va PDF da u oʻz aniqligida chop etiladi.

## Rasm joylashtirish

1. {{cmd:IMAGEATTACH}} (yoki `IAT`) yozing va {{key:Enter}} tugmasini bosing. PNG yoki JPEG faylni tanlang.
2. `Specify the lower-left corner`: bosing yoki nuqta yozing.
3. `Specify its width`: chizma birliklaridagi kenglik. {{key:Enter}} taklif qilingan kenglikni saqlaydi: piksel boʻyicha bir birlik, yoki shu fayl uchun oxirgi safar bergan kengligingiz (soʻrov qaysisini koʻrsatadi).
4. `Specify its rotation angle`: hech qanday burilish kerak boʻlmasa {{key:Enter}} tugmasini bosing.

Rasm bitta obyekt: uni ramkasi boʻyicha tanlang va boshqa blok kabi koʻchiring, nusxalang, aylantiring, masshtablang yoki oʻchiring.

:::note
Rasm fayli chizma ochiq ekan u bilan birga qoladi. Saqlangan DWG faylda rasm fayli nomi yoziladi, boshqa dasturlar kabi; piksellar saqlanmaydi. Rasmni chizma yonida saqlang.
:::

## Ekran suratini yoki nusxalangan rasmni joylashtirish

1. Rasmni nusxalang (ekran surati {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=ekran suratini olish vositangiz}} orqali yoki boshqa dasturda yoki brauzerda {{ui:Rasmni nusxalash}}).
2. Chizmada joy koʻrsatib {{key:Mod+V}} tugmasini bosing.

Rasmning pastki chap burchagi koʻrsatkichga (yoki koʻrinish oʻrtasiga) tushadi, koʻrinadigan narsaning 40 % kengligida. Uni xuddi boshqa rasm kabi koʻchiring, masshtablang va kesing. Uning nomi chizmaniki bilan `-picture-1.png` (keyin `-2`, …) boʻladi, tarix buni aytadi. {{ui:Tahrirlash}} › {{ui:Koʻproq}} › {{ui:Rasmni joylashtirish}} menyudan xuddi shunday qiladi (brauzer avval soʻrashi mumkin).

DWG faqat rasm faylining nomini saqlaydi, shuning uchun chizmani saqlash rasmni ham alohida fayl sifatida saqlaydi. Ikkalasini bir papkada saqlang: chizma rasmni oʻsha yerdan koʻrsatadi. Brauzerda bu yana bir yuklab olish boʻladi va tarix buni aytadi. Buferda CadCraft obyektlaridan boshqa hech narsa boʻlmasa, {{key:Mod+V}} ularni avvalgidek joylashtiradi.

## MarkupCraft da nusxalangan hududni joylashtirish

{{ui:Hududni nusxalash}} MarkupCraft da varaqning bir qismini oʻlchami maʼlum rasm sifatida nusxalaydi. CadCraft uni oʻsha oʻlchamda joylashtiradi.

1. MarkupCraft da hududni nusxalang (toʻrtburchak, aylana yoki erkin shakl; agar chizmani undan koʻrmoqchi boʻlsangiz, {{ui:Qoplama sifatida nusxalash}}).
2. CadCraft da {{key:Mod+V}} tugmasini bosing yoki {{cmd:PASTEAREA}} (yoki `PAREA`) yozing, yoki {{ui:Tahrirlash}} › {{ui:Koʻproq}} › {{ui:Nusxalangan hududni joylashtirish}} ni tanlang.
3. `Specify the lower-left corner of the copied area`: bosing yoki nuqta yozing. Koʻrsatkich ortidan nusxalangan hudud oʻlchamidagi ramka harakatlanadi.

Qanchalik katta joylashishi:

- **Varaqda chizma masshtabi boʻlgan:** oʻzining haqiqiy oʻlchamida, chizma birliklarida (1:50 tafsilot, 2 m zina metrli chizmada 2 m uzunlikda, dyuymli chizmada 78.74 boʻladi). Boshqa hech narsa soʻralmaydi.
- **Varaqda masshtab boʻlmasa:** CadCraft qogʻozdagi oʻlchamini aytadi va masshtab soʻraydi: 1:100 varaq uchun `100` yozing, qogʻoz oʻlchami uchun {{key:Enter}} tugmasini bosing, yoki `P` yozing, joylashtirilgan rasmda ikki nuqta bosing va ular haqiqatda qancha uzoqlikda ekanini yozing ({{cmd:SCANSCALE}} shunday qiladi). Pastki chap burchak siz qoʻygan joyda qoladi.

Birliksiz chizma millimetrga oʻtadi, PDF tagliq kabi. Qoplama qogʻozi shaffof boʻladi va nusxalanganda qanchalik xiralashgan boʻlsa, shunday boshlanadi; doiradan yoki erkin shakldan tashqarisi ham shaffof. Joylashtirilgan hudud boshqa rasm kabi: koʻchiring, aylantiring, masshtablang, kesing yoki oʻchiring, va butun joylashtirish bitta bekor qilish qadami. DWG sifatida saqlansa, u xiralik va shaffoflik bilan IMAGE boʻladi.

{{key:Mod+V}} hududni joylashtiradi, agar buferdagi rasm hududniki boʻlsa yoki hudud CadCraft da nusxalangan narsadan keyin (va oxirgi 6 soat ichida) nusxalangan boʻlsa. Aks holda avvalgidek joylashtiradi. {{cmd:PASTEAREA}} oxirgi nusxalangan hududni istalgan vaqtda joylashtiradi.

## DWG ishlatgan rasmlarni koʻrsatish

DWG faqat rasmlarning qayerda ekanini saqlaydi, shuning uchun CadCraft har birini fayl nomi bilan ramka sifatida koʻrsatadi.

1. {{cmd:IMAGE}} (yoki `IM`) yozing. Buyruq qatorida har bir rasm fayli va u koʻrinadimi-yoʻqmi roʻyxatlanadi.
2. Fayllarni tanlang (bir vaqtda bir nechta). Nomida chizma nomlagan nom boʻlgan fayl ham hisoblanadi, chunki eksportlar koʻpincha loyiha prefiksini qoʻshadi.

## Rasmni kesish

1. {{cmd:IMAGECLIP}} (yoki `ICL`) yozing va rasmni tanlang.
2. `R` ni tanlang va ikki burchakni bosing, yoki `P` ni tanlang va koʻpburchak nuqtalarini bosing, soʻng {{key:Enter}}. `D` kesishni olib tashlaydi.

## Rasmlarni chop etish

Rasmlar PDF ga rasm sifatida, oʻz aniqligida va chiziqlar ostida tushadi. {{ui:Chop etish}} dialogida {{ui:Rasmlar}} ularni 600, 300 yoki 150 dpi gacha cheklashi mumkin, fayl kichrayishi uchun. JPEG oʻz holicha kiradi.

## Rasmlar qayerda saqlanadi

| Format | Rasmlar |
|---|---|
| DWG (har qanday versiya) | Rasm sifatida (IMAGE), kesishi bilan |
| DXF | Fayl nomi bilan ramka sifatida; saqlashda buni aytadi |

## Boshqa dasturlardan obyektlar (OLE)

Chizmada boshqa dastur yaratgan obyektlar boʻlishi mumkin, masalan rasm muharriridan rasm yoki elektron jadval diapazoni (OLE obyektlar). CadCraft ularni ishga tushirmaydi va tahrirlamaydi, yangilarini qoʻshishi ham mumkin emas. U quyidagilarni qiladi:

- **DXF da**, OLE obyekti ramka sifatida ochiladi. Agar obyekt oʻzining rasmini saqlagan boʻlsa va u bitmap boʻlsa, rasm ramka ichida chiziladi; aks holda ramkada obyekt turi yorligʻi boʻladi, masalan "Microsoft Excel Worksheet (OLE)". Ramkani blok kabi koʻchirish, nusxalash va oʻchirish mumkin. {{cmd:SAVEAS}} orqali DXF 2000 ga saqlasangiz, u yana OLE obyekt sifatida yoziladi, maʼlumotlari oʻzgarmagan holda.
- **DWG da** obyektlar saqlanadi va DWG sifatida saqlaganingizda bayt-bayt qayta yoziladi, lekin ular **koʻrinmaydi**: DWG obyektning joyini oʻz maʼlumotida saqlaydi, CadCraft esa hali uni oʻqimaydi. Tarix nechtasi saqlanganini koʻrsatadi. Ular nima ekanini (turi, hajmi, har biri rasm saqlaganmi-yoʻqmi) koʻrish va rasm nusxasini tanlagan joyingizga qoʻyish uchun {{cmd:OLELIST}} yozing: **Joylash** raqamni, pastki chap burchakni va kenglikni soʻraydi va ichida rasmi bor ramkani chizadi. Bu nusxa koʻchirish yoki oʻchirish mumkin boʻlgan ramka; obyektning oʻzi chizmada qoladi va saqlaganingizda baribir qayta yoziladi.
- DXF dan kelgan obyekt DWG da faqat ramka va yorliq sifatida saqlanadi; tarix buni aytadi. Obyektning oʻzini saqlash uchun DXF 2000 sifatida saqlang.
- Metafayl boʻlgan rasmlar (koʻp dasturlar saqlaydigan) chizilmaydi: ramka va yorliq oʻrniga koʻrinadi.

## Keng tarqalgan xatolar

| Siz koʻrasiz | Sababi | Tuzatish |
|---|---|---|
| Fayl nomi bilan ramka | CadCraft da bu fayl yoʻq | {{cmd:IMAGE}}, soʻng faylni tanlang |
| "Bu rasm emas" | Tanlangan obyekt rasm emas | Rasmning ramkasini tanlang |
