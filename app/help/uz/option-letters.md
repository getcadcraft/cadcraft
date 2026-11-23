---
title: Buyruq variantlariga oʻz harflaringizni bering
summary: Buyruq variantlariga siz tanlagan harflar bilan javob bering, istalgan tilda, tahrirlash, import va eksport qilinadigan bitta matnli fayldan.
keywords: variant harflari, optionkeys, optkeys, variant kalit soʻzi, kalit soʻz, qayta xaritalash, xaritalash, moslashtirish, maxsus harflar, polar, massiv, P, PO, til, variantlarni tarjima qilish, qisqa shakl, import, eksport, noaniq
from: 7c8328c6
---

## Nimalarni oʻrganasiz

Buyruq variantlariga javob berish uchun yozadigan harflarni qanday oʻzgartirishni. Masalan, {{cmd:ARRAY}} `[Rectangular/POlar]` soʻraydi va Polar uchun `PO` ni qabul qiladi; siz `P` yoki boshqa harflarni xuddi shunday qilishingiz mumkin, xohlasangiz oʻz tilingizda.

## Variantlarga qanday javob beriladi

Buyruq kvadrat qavsda variantlar koʻrsatsa, bosh harflar yozilishi kerak boʻlgan harflardir: `POlar` — `PO`, `eXit` — `X`.

Variant soʻzlarining bir qismini ham yozishingiz mumkin. Yozganingiz koʻrsatilgan variantlardan faqat bittasiga mos kelsa, CadCraft uni qabul qiladi: `[Rectangular/POlar]` da yakka `P` — Polar. Ikkitasiga mos kelsa, buyruq satri ularni nomlaydi va qayta soraydi:

```
C could be COUnt, COLumns. Type more letters.
```

Raqamlar hech qachon taxmin qilinmaydi: yozilgan masofa yoki soni doim son sifatida oʻqiladi.

## Oʻz harflaringizni qoʻshing

Har bir buyruq oʻzining ichki harflarini saqlaydi. Siz ularning ustiga oʻzingizniki qoʻshasiz, shuning uchun roʻyxatingizda faqat oʻzgartirganingiz boʻladi.

1. {{ui:Sozlamalar}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Variant harflari}} ni oching va {{ui:Tahrirlash…}} ni bosing. Yoki `OPTIONKEYS` yozib {{key:Enter}} ni bosing.
2. {{ui:Buyruq}} ostida buyruqni tanlang, masalan `ARRAY`. Roʻyxatda variantlar soʻraydigan har bir buyruq bor va u oxirgi ishlatgan buyrugʻingizdan boshlanadi.
3. {{ui:Variant}} ostida variantni tanlang. Har biri oʻz ichki harflarini qavsda koʻrsatadi, masalan `POlar (PO)`.
4. {{ui:Sizning harflaringiz}} ga xohlagan harflaringizni yozing, masalan `P`, va {{ui:Qoʻshish}} ni bosing.
5. Variant endi {{ui:Sizning harflaringiz}} ostida, ichki va oʻz harflari bilan koʻrinadi. {{ui:Saqlash}} ni bosing.

{{cmd:ARRAY}} ni boshlang, obyekt tanlang va {{key:Enter}} ni bosing. Soʻrov variantdan keyin sizning harflaringizni koʻrsatadi, `POlar (P)`, va `P` unga javob beradi.

Uni olib tashlash uchun qatoridagi x belgisini bosing va soʻng {{ui:Saqlash}} ni bosing. Variant faqat ichki harflariga qaytadi.

## Siz ishlata olmaydigan harflar

Tahrirlovchi buyruq satri allaqachon oʻqiydigan narsani yashirib qoʻyadigan harflarni rad etadi va sababini aytadi:

- shu buyruqning boshqa variantining ichki harflari (`ARRAY` da Polar uchun `R`, chunki `R` Rectangular);
- uch harf yoki undan uzun obyekt ilashtirish soʻzi, masalan `END`, `MID` yoki `CEN`, hamda `ALL` va `LAST` soʻzlari;
- bir buyruqning ikki xil varianti uchun bir xil harflar.

Roʻyxatdagi biror narsa qizil rangda boʻlsa, {{ui:Saqlash}} oʻchiq: qatorni tuzating yoki olib tashlang, shunda u qayta yoqiladi. Soʻrovning ichki harflari doim sizniki ustun turadi, shuning uchun roʻyxatingiz hech qachon ichki javobni ishlamay qoʻymaydi. `L` yoki `C` kabi buyruq nomi boʻlgan harflar yaxshi: variant soʻrovida buyruq satri javobni oʻqiydi, buyruqni boshlamaydi.

Buyruq uchun roʻyxatdagi variantlar bir xil soʻrovlarni ulashadigan buyruqlardan olinadi, shuning uchun baʼzan buyruq faqat ayrim hollarda soʻraydigan variantni koʻrsatadi.

## Barcha buyruqlar uchun bitta tanlov

{{ui:Buyruq}} ostida {{ui:Har bir buyruq}} ni tanlang. Variantlar istalgan buyruq ega boʻlgan barcha variantlar boʻladi, masalan eXit yoki Undo. U yerda qoʻshgan harflaringiz uni taklif qilgan har qayerda shu variantga javob beradi. Bitta buyruq uchun qoʻshilgan harflar bularni ustun qoʻyadi.

## Oʻz tilingizdagi harflar

Harflar istalgan alifbodan boʻlishi mumkin, shuning uchun klaviaturani almashtirmasdan variantlarga javob berishingiz mumkin: {{ui:Har bir buyruq}} ostida Close uchun `З` yoki `ARRAY` da POlar uchun `П` qoʻshing.

CadCraft faqat ingliz harflari bilan keladi. Oʻz roʻyxatingiz — bu sizning, ofisingizning yoki tilingizni ishlatadigan odamlarning qolganini sozlash usuli, va {{ui:Eksport}} uzatishingiz mumkin boʻlgan fayl yaratadi.

## Matn sifatida tahrirlash

Tahrirlovchidagi {{ui:Matn sifatida tahrirlash}} xuddi shu roʻyxatni har bir variant uchun bitta qator qilib koʻrsatadi, {{ui:Eksport}} saqlaydigan narsa ham shu:

```
ARRAY.PO,  P
*.X,       Q
```

Har bir qator buyruq, nuqta, variantning ichki harflari, vergul va sizning harflaringizdan iborat. Buyruq oʻrnida yulduzcha — har bir buyruq. `;` bilan boshlangan qator izoh.

## Nima oʻzgarmaydi

- Ichki harflar siznikining yonida ishlashda davom etadi.
- Dasturlar va asboblar paneli tugmalari ichki harflardan foydalanishda davom etadi, shuning uchun yuklagan hech narsa buzilmaydi. Oʻz harflaringiz xalaqit berganda ichki harflarni oʻzingiz yozish uchun, oldiga pastki chiziq qoʻying: `_PO`.
- Buyruqning qisqa nomi boshqa narsa: qarang [Buyruq taxalluslarini tahrirlash](topic:command-aliases).

## Rad etilgan qatorlar

Matn sifatida tahrirlaganda yoki fayl import qilganda, tahrirlovchi har bir muammoni qator raqami bilan koʻrsatadi:

- buyruq mavjud emas (buyruq taxallusi yaxshi: `AR.PO` `ARRAY.PO` deb oʻqiladi);
- qator `COMMAND.OPTION, LETTERS` shaklida emas;
- harflarda boʻshliq yoki belgi bor (faqat harf va raqamlar, eng koʻpi 16 ta);
- bir buyruqning ikki xil variantiga bir xil harflar javob beradi.

## Import va eksport

{{ui:Eksport}} harflaringizni saqlash yoki boshqasiga berish uchun matnli faylga yozadi. {{ui:Import…}} bunday faylni oʻqiydi. Ikkalasi ham tahrirlovchida va {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Variant harflari}} da.

Sozlamalarda {{ui:Import…}} sizning faylingizni tanlagan faylga almashtiradi. Toʻqnashuvchi yoki ishlatib boʻlmaydigan qatorli fayl qabul qilinmaydi; qatorlarni koʻrish uchun tahrirlovchini oching va u yerda import qiling. Tahrirlovchida u faqat katakni toʻldiradi: {{ui:Saqlash}} ni bosmaguncha hech narsa oʻzgarmaydi.

## Qayta yuklash yoki olib tashlash

Faylingizni yana qoʻllash uchun {{cmd:REINIT}} ni yozing va {{key:Enter}} ni bosing. Harfni olib tashlash uchun uning qatorini oʻchiring va {{ui:Saqlash}} ni bosing.

## Harflaringiz hisobingiz bilan ergashadi

getcadcraft.com saytiga hisobingiz bilan kirganingizda, harflaringiz hisobingizda saqlanadi. Shu hisob bilan boshqa brauzerda yoki boshqa kompyuterda CadCraft ni ochsangiz, ular oʻzi keladi; buyruq satri `Option letters from your account` deydi. Ikki joyda oʻzgartirgan boʻlsangiz, eng yangi nusxa gʻalaba qiladi va u almashtirgan nusxa bir marta saqlanadi.

{{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Variant harflari}} ularning holatini koʻrsatadi. Hisobdan chiqqan yoki oflayn boʻlsangiz, ular shu brauzerda qoladi va siz kirgan holda ularni keyingi saqlaganingizda hisobingizga yuboriladi.

Qarang: [Buyruq taxalluslarini tahrirlash](topic:command-aliases) · [CadCraft sozlamalari](topic:settings) · [Buyruqlar](topic:commands)
