---
title: Chizmani qatlamlar bilan tartiblash
summary: Devorlar, eshiklar va izohlar uchun qatlamlar yarating, ranglarini belgilang, qatlamni joriy qiling va qatlamlarni oʻchiring, muzlatish, qulflash yoki chop etishdan chiqarib qoʻying.
keywords: qatlam, qatlamlar, la, joriy qatlam, muzlatish, muzsizlantirish, qulflash, oʻchirish, yoqish, chop etish, chop etilmasin, rang, qatlam xossalari, layiso, layuniso, ajratish, layoff, layfrz, laymcur, layon, laythw, qayta nomlash, laymrg, birlashtirish, laydel, qatlamni oʻchirish
from: ba9f0617
---

## Nima yasaysiz

Uchta qatlam: Devorlar, Eshiklar va Izohlar, har birining oʻz rangi bilan, har birida obyektlar chizilgan va ular orasida koʻchirilgan.

## Qatlamlar paneli

Qatlamlar chapdagi panelda, {{ui:Qatlamlar}} ostida yashaydi. Har bir qator chapdan oʻngga qarab koʻrsatadi:

- nuqta: **joriy** qatlam uchun toʻldirilgan, yangi obyektlar shu yerga tushadi;
- rang namunasi;
- qatlam nomi;
- toʻrtta tugma: yoqish/oʻchirish (koʻz), muzlatish (qor parchasi), qulflash (qulf) va chop etish (printer).

Har bir chizmada `0` nomli qatlam bor. `LA` ni yozib {{key:Enter}} ni bosish panelga oʻtkazadi.

## Qatlam yaratish

1. Roʻyxat ustidagi {{ui:Yangi qatlam}} ni bosing. Nom katagi ochiladi.
2. `Walls` yozing va {{key:Enter}} ni bosing (yoki {{ui:Qoʻshish}} ni bosing).

Holat satri “Walls qatlami qoʻshildi va joriy qilindi.” deydi. Yangi qatlam 7-rangni oladi (yengil mavzuda qora, qorongʻi mavzuda oq).

3. {{ui:Yangi qatlam}} ni yana bosing, `Doors` yozing va {{key:Enter}} ni bosing.
4. {{ui:Yangi qatlam}} ni yana bosing, `Notes` yozing va {{key:Enter}} ni bosing.

Endi Notes joriy.

## Har bir qatlamga rang berish

1. Devorlar qatoridagi rang namunasini bosing. Tizimingizning rang tanlagichi ochiladi.
2. Rangni tanlang va tasdiqlang.

Namuna va Devorlardagi {{ui:Qatlam boʻyicha}} rangdagi hamma narsa oʻzgaradi.

:::note
Tanlangan rang 255 ta standart CAD rangidan biriga mos kelsa, u oʻsha raqam sifatida saqlanadi. Boshqa har qanday rang CadCraft da aniq saqlanadi, lekin DWG yoki DXF faylda eng yaqin standart rang sifatida yoziladi.
:::

## Qatlamda chizish

1. Roʻyxatda **Walls** nomini bosing. Uning nuqtasi toʻladi va holat satri “Joriy qatlam: Walls” deydi.
2. Toʻrtburchak chizing (`REC`). U Walls da boʻladi.
3. **Doors** ni bosing va yoy chizing (`A`). U Doors da boʻladi.

Joriy qatlamni oʻngdagi {{ui:Joriy sozlamalar}} da ham tanlashingiz mumkin (hech narsa tanlanmagan boʻlsa), {{ui:Qatlam}} ostida.

## Obyektlarni boshqa qatlamga koʻchirish

1. Obyektlarni tanlang.
2. Oʻng panelda {{ui:Qatlam}} da yangi qatlamni tanlang.

Ular oʻsha qatlamga koʻchadi va agar ularning rangi {{ui:Qatlam boʻyicha}} boʻlsa, qatlam rangini oladi.

## Oʻchirish, muzlatish, qulflash va chop etish

| Tugma | Nima qiladi |
|---|---|
| Yoqish/oʻchirish (koʻz) | Qatlam obyektlarini yashiradi. Ularni koʻrib, tanlab yoki ilashtirib boʻlmaydi. |
| Muzlatish (qor parchasi) | CadCraft da oʻchirish bilan bir xil taʼsir. Boshqa dasturlar ularni boshqacha koʻrgani uchun alohida saqlanadi va sozlama saqlanadi. |
| Qulflash (qulf) | Obyektlar koʻrinadi va ularga ilashish mumkin, lekin tanlab yoki oʻzgartirib boʻlmaydi. Kuzatiladigan fon uchun yaxshi. |
| Chop etish (printer) | Bosilganda qatlam ekranda koʻrinadi, lekin chop etishlar va PDF lardan **chiqarib tashlanadi**. Qurilish chiziqlari va oʻzingiz uchun eslatmalar uchun ishlating. |

Tugma ustiga olib borsangiz, u nima qilishini koʻrasiz (“Oʻchirish”, “Muzlatish”, “Qulflash”, “Bu qatlamni chop etmaslik”).

Joriy qatlamni oʻchirib boʻlmaydi: holat satri “Bu joriy qatlam. Avval boshqa qatlamni joriy qiling.” deydi. Qatlam nomini bosib joriy qilish uni ham yoqadi va muzsizlantiradi.

Panelda yoki buyruq bilan qilingan har bir qatlam oʻzgarishi bitta ortga qaytarish qadami: {{key:Mod+Z}} uni qaytaradi.

## Qatlamlar bilan obyektlarni tanlab ishlash

Qatlam nomini bilish shart emas: unda turgan obyektni tanlang. Buyruqni yozing yoki {{ui:Qatlamlar}} panelining yuqorisidagi {{ui:Vositalar}} ni oching.

| Buyruq | Nima qiladi |
|---|---|
| {{cmd:LAYISO}} | Obyektlarni tanlang, {{key:Enter}} ni bosing: faqat ularning qatlamlari qoladi, boshqa barcha qatlamlar oʻchiriladi. Joriy qatlam oʻchirilgan boʻlsa, ajratilgan qatlamlardan biri joriy boʻladi. |
| {{cmd:LAYUNISO}} | Oxirgi {{cmd:LAYISO}} oʻchirgan qatlamlarni qayta yoqadi va u oʻzgartirgan joriy qatlamni qaytaradi. |
| {{cmd:LAYOFF}} | Obyektlarni ketma-ket bosing: har birining qatlami oʻchiriladi. Oxirgisini qaytarish uchun `U` yozing, tugatish uchun {{key:Enter}}. |
| {{cmd:LAYFRZ}} | Xuddi shunday, lekin har bir qatlamni muzlatadi. |
| {{cmd:LAYMCUR}} | Obyektni bosing: uning qatlami joriy boʻladi (va yoqiladi hamda muzsizlantiriladi). Bitta obyekt tanlangan boʻlsa, oʻsha ishlatiladi. |
| {{cmd:LAYON}} | Barcha qatlamlarni yoqadi. |
| {{cmd:LAYTHW}} | Barcha qatlamlarni muzsizlantiradi. |

Joriy qatlam bu usullar bilan hech qachon oʻchirilmaydi yoki muzlatilmaydi: tarix buni aytadi va avval {{cmd:LAYMCUR}} bilan boshqa qatlamni joriy qilishingiz mumkin. Blok havolasini tanlasangiz, havolaning oʻz qatlami ishlatiladi.

## Qatlamlarni qayta nomlash, birlashtirish va oʻchirish

- {{cmd:RENAME}}: `LA`, eski nom va yangi nomni yozing. Qatlamdagi har bir obyekt ergashadi. (`B` blokni xuddi shunday, uning barcha havolalari bilan qayta nomlaydi.)
- {{cmd:LAYMRG}}: birlashtiriladigan har bir qatlamda obyektni bosing (yoki `N` va nomni yozing), {{key:Enter}} ni bosing, soʻng maqsadli qatlamni tanlang va `Y` ga javob bering. Obyektlar maqsadga koʻchadi — modelda, varaqlarda va bloklar ichida — va birlashtirilgan qatlamlar yoʻqoladi.
- {{cmd:LAYDEL}}: qatlamdagi obyektni tanlang (yoki `N` va nomini) va `Y` ga javob bering. Qatlam **unda turgan barcha obyektlar bilan birga** hamma joydan oʻchadi. 0-qatlam, DEFPOINTS va joriy qatlamni oʻchirib boʻlmaydi.

Har biri bitta ortga qaytarish qadami. Uchalasi ham {{ui:Qatlamlar}} panelining yuqorisidagi {{ui:Vositalar}} da.

1. Bitta devor chizigʻini bosing, soʻng `LAYISO` yozing va {{key:Enter}} ni bosing. Faqat Walls qoladi.
2. Walls da kerakli narsani chizing yoki oʻzgartiring.
3. `LAYUNISO` yozing va {{key:Enter}} ni bosing. Doors va Notes qaytadi.

## Keng tarqalgan xatolar

- **Yangi chiziqlar notoʻgʻri qatlamga tushdi.** Chizishdan oldin qaysi nuqta toʻldirilganini tekshiring. Yangi qatlam qoʻshilishi bilanoq joriy boʻladi.
- **Obyekt tanlanmaydi.** Uning qatlami qulflangan, oʻchiq yoki muzlatilgan.
- **Qatlam saqlagandan keyin boshqa dasturda hali ham chop etiladi.** DXF R12 “chop etmaslik” ni saqlay olmaydi. CadCraft chizmada varaq boʻlsa, bu sozlamani oʻzida saqlaydi, lekin boshqa dasturlar oʻsha qatlamni chop etadi.
- **Saqlagandan keyin qatlam nomlari katta harf bilan.** DXF R12 nomlarni katta harf bilan saqlaydi, shuning uchun `Walls` `WALLS` boʻlib qaytadi va boʻshliqlar `_` boʻladi. Saqlangan DWG nomlarni yozganingizdek saqlaydi.
- **Qatlamni qayta nomlash, birlashtirish yoki oʻchirish.** {{cmd:RENAME}}, {{cmd:LAYMRG}} yoki {{cmd:LAYDEL}} dan foydalaning ({{ui:Vositalar}} da ham): quyida qarang.

## Qatlamlarni guruhlash

Roʻyxatni qisqa tutish uchun qatlamlarni jildlarga joylashtiring, masalan Mavjud, Loyihalangan va Xizmatlar. Har bir jild yigʻiladi va uning tugmalari barcha qatlamlarini birga yoqadi yoki oʻchiradi, muzlatadi yoki qulflaydi. Joriy qatlam hech qachon oʻchirilmaydi.

{{ui:Qatlamlar}} panelidagi {{ui:Vositalar}} da kichik turar joy ishlari uchun tayyorlangan toʻplam uchun {{ui:Tayyor guruhlarni qoʻshish}} ni, umumiy prefiksli qatlamlarni (`E-Walls`, `E-Doors`) guruhlash uchun {{ui:Nom boʻyicha guruhlash}} ni yoki {{ui:Yangi guruh}} ni tanlang. Qatlamni jildga sudrang, yoki qatlamlar roʻyxati ustidagi joriy qatlam uchun foydalaning. {{ui:Qatlamni topish}} katagiga yozib roʻyxatni toraytiring. `LAYGROUP` (`LG`) buyruq satrida xuddi shuni qiladi.

Guruhni qayta nomlash uchun uning nomini ikki marta bosing (yoki tanlab {{key:F2}} ni bosing), yangi nomni yozing va {{key:Enter}} ni bosing; {{key:Esc}} eskisini saqlaydi, va {{cmd:UNDO}} uni qaytaradi. {{ui:Yangi guruh}} {{ui:Qatlamlar}} panelidagi {{ui:Vositalar}} da.

Qatlamlarning oʻzi oʻzgarmaydi, shuning uchun boshqa CAD dasturlari ularni oddiy tekis roʻyxat sifatida koʻradi. CadCraft guruhlarni faylda saqlaydi.
