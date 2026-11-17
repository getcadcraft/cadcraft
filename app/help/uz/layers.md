---
title: Chizmani qatlamlar bilan tashkil qilish
summary: Devorlar, eshiklar va izohlar uchun qatlamlar yarating, ranglarni belgilang, qatlamni joriy qiling va qatlamlarni oʻchiring, muzlatib qoʻying, qulflang yoki chop etishdan chiqarib qoʻying.
keywords: qatlam, qatlamlar, la, joriy qatlam, muzlatish, muzdan chiqarish, qulflash, oʻchirish, yoqish, chop etish, chop etilmasin, rang, qatlam xossalari, layiso, layuniso, ajratish, layoff, layfrz, laymcur, layon, laythw, nomini oʻzgartirish, laymrg, birlashtirish, laydel, qatlamni oʻchirish
from: cd033591
---

## Nimani yaratasiz

Uchta qatlam: Devorlar, Eshiklar va Izohlar, har birida oʻz rangi bilan, har birida obyektlar chizilgan va ular orasida koʻchirilgan.

## Qatlamlar paneli

Qatlamlar chap tomondagi panelda, {{ui:Qatlamlar}} ostida joylashgan. Har bir qator chapdan oʻngga qarab quyidagilarni koʻrsatadi:

- nuqta: **joriy** qatlam uchun toʻldirilgan, yangi obyektlar shu yerga tushadi;
- rang namunasi;
- qatlam nomi;
- toʻrtta tugma: yoqish/oʻchirish (koʻz), muzlatish (qor parchasi), qulflash (qulf) va chop etish (printer).

Har bir chizmada `0` nomli qatlam bor. `LA` yozib {{key:Enter}} bosilsa, panelga oʻtiladi.

## Qatlam yaratish

1. Roʻyxat ustidagi {{ui:Yangi qatlam}} tugmasini bosing. Nom maydoni ochiladi.
2. `Devorlar` yozing va {{key:Enter}} bosing (yoki {{ui:Qoʻshish}} ni bosing).

Holat satrida "Devorlar qatlami qoʻshildi va joriy qilindi." deyiladi. Yangi qatlam 7-rangni oladi (yorugʻ mavzuda qora, qorongʻida oq).

3. {{ui:Yangi qatlam}} ni yana bosing, `Eshiklar` yozing va {{key:Enter}} bosing.
4. {{ui:Yangi qatlam}} ni yana bosing, `Izohlar` yozing va {{key:Enter}} bosing.

Izohlar endi joriy.

## Har bir qatlamga rang bering

1. Devorlar qatoridagi rang namunasini bosing. Tizimingizning rang tanlagichi ochiladi.
2. Rangni tanlang va tasdiqlang.

Namuna va Devorlar qatlamidagi rangi {{ui:Qatlam boʻyicha}} boʻlgan hamma narsa oʻzgaradi.

:::note
Tanlangan rang 255 ta standart CAD rangidan biriga mos kelsa, u oʻsha raqam sifatida saqlanadi. Boshqa har qanday rang CadCraft ichida aniq saqlanadi, ammo DWG yoki DXF faylda eng yaqin standart rang sifatida yoziladi.
:::

## Qatlamda chizish

1. Roʻyxatda **Devorlar** nomini bosing. Uning nuqtasi toʻladi va holat satrida "Joriy qatlam: Devorlar" deyiladi.
2. Toʻrtburchak chizing (`REC`). U Devorlarga tushadi.
3. **Eshiklar** ni bosing va yoy chizing (`A`). U Eshiklarga tushadi.

Oʻngdagi {{ui:Joriy sozlamalar}} da (hech narsa tanlanmagan boʻlsa), {{ui:Qatlam}} ostida joriy qatlamni ham tanlashingiz mumkin.

## Obyektlarni boshqa qatlamga koʻchirish

1. Obyektlarni tanlang.
2. Oʻng panelda {{ui:Qatlam}} ichidan yangi qatlamni tanlang.

Ular oʻsha qatlamga koʻchadi va agar rangi {{ui:Qatlam boʻyicha}} boʻlsa, uning rangini oladi.

## Oʻchirish, muzlatish, qulflash va chop etish

| Tugma | Nima qiladi |
|---|---|
| Yoqish/oʻchirish (koʻz) | Qatlam obyektlarini yashiradi. Ularni koʻrib, tanlab yoki ularga ilashib boʻlmaydi. |
| Muzlatish (qor parchasi) | CadCraft ichida oʻchirish bilan bir xil ta'sir qiladi. Boshqa dasturlar ularni boshqacha koʻradi, shuning uchun alohida saqlanadi va sozlama saqlanadi. |
| Qulflash (qulf) | Obyektlar koʻrinib turadi va ularga ilashish mumkin, ammo tanlab yoki oʻzgartirib boʻlmaydi. Kuzatiladigan fon uchun yaxshi. |
| Chop etish (printer) | Bosilganda qatlam ekranda koʻrsatiladi, lekin chop etishlar va PDF lardan **chiqariladi**. Qurilish chiziqlari va oʻzingiz uchun izohlar uchun ishlating. |

Tugma ustiga sichqoncha olib boring, u nima qilishini koʻrish uchun ("Oʻchirish", "Muzlatish", "Qulflash", "Bu qatlamni chop etilmasin").

Joriy qatlamni oʻchirib boʻlmaydi: holat satrida "Bu joriy qatlam. Avval boshqa qatlamni joriy qiling." deyiladi. Qatlam nomini bosib uni joriy qilish uni ham yoqadi, ham muzdan chiqaradi.

Panelda yoki buyruq bilan qilingan har bir qatlam oʻzgarishi bitta qaytarish qadami: {{key:Mod+Z}} uni qaytaradi.

## Obyektlarni tanlab qatlamlar bilan ishlash

Qatlam nomini bilish shart emas: unda joylashgan obyektni tanlang. Buyruqni yozing yoki {{ui:Qatlamlar}} paneli yuqorisidagi {{ui:Vositalar}} ni oching.

| Buyruq | Nima qiladi |
|---|---|
| {{cmd:LAYISO}} | Obyektlarni tanlang va {{key:Enter}} bosing: faqat ularning qatlamlari yoqilgan qoladi, boshqa barcha qatlamlar oʻchiriladi. Agar joriy qatlam oʻchirilgan boʻlsa, ajratilgan qatlamlardan biri joriy boʻladi. |
| {{cmd:LAYUNISO}} | Oxirgi {{cmd:LAYISO}} oʻchirgan qatlamlarni qayta yoqadi va u oʻzgartirgan joriy qatlamni qaytaradi. |
| {{cmd:LAYOFF}} | Obyektlarni birin-ketin bosing: har birining qatlami oʻchiriladi. Oxirgisini qaytarish uchun `U` yozing, tugatish uchun {{key:Enter}}. |
| {{cmd:LAYFRZ}} | Xuddi shunday, lekin har bir qatlam muzlatiladi. |
| {{cmd:LAYMCUR}} | Obyektni bosing: uning qatlami joriy boʻladi (va yoqiladi hamda muzdan chiqariladi). Bitta obyekt allaqachon tanlangan boʻlsa, oʻsha ishlatiladi. |
| {{cmd:LAYON}} | Hamma qatlamlarni yoqadi. |
| {{cmd:LAYTHW}} | Hamma qatlamlarni muzdan chiqaradi. |

Joriy qatlam bu usulda hech qachon oʻchirilmaydi yoki muzlatilmaydi: tarix buni aytadi, va avval {{cmd:LAYMCUR}} bilan boshqa qatlamni joriy qilishingiz mumkin. Blok havolasini tanlash havolaning oʻz qatlamini ishlatadi.

## Qatlamlarni nomini oʻzgartirish, birlashtirish va oʻchirish

- {{cmd:RENAME}}: `LA`, eski nom va yangi nomni yozing. Qatlamdagi har bir obyekt ularga ergashadi. (`B` blokni xuddi shunday, unga barcha havolalari bilan birga nomlaydi.)
- {{cmd:LAYMRG}}: birlashtiriladigan har bir qatlamda bitta obyektni bosing (yoki `N` va nomini yozing), {{key:Enter}} bosing, soʻng maqsadli qatlamni tanlang va `Y` deb javob bering. Obyektlar maqsadli qatlamga koʻchadi — modelda, varaqlarda va bloklar ichida — birlashtirilgan qatlamlar esa yoʻqoladi.
- {{cmd:LAYDEL}}: qatlamdagi obyektni tanlang (yoki `N` va uning nomi) va `Y` deb javob bering. Qatlam **unda joylashgan hamma obyekt bilan birga** hamma joydan yoʻqoladi. `0` qatlami, DEFPOINTS va joriy qatlamni oʻchirib boʻlmaydi.

Har biri bitta qaytarish qadami. Uchalasi ham {{ui:Qatlamlar}} panelining yuqorisidagi {{ui:Vositalar}} ichida.

1. Devor chizigʻini bosing, soʻng `LAYISO` yozing va {{key:Enter}} bosing. Faqat Devorlar yoqilgan qoladi.
2. Devorlarda kerakli narsani chizing yoki oʻzgartiring.
3. `LAYUNISO` yozing va {{key:Enter}} bosing. Eshiklar va Izohlar qaytadi.

## Keng tarqalgan xatolar

- **Yangi chiziqlar notoʻgʻri qatlamga tushdi.** Chizishdan oldin qaysi nuqta toʻldirilganini tekshiring. Yangi qatlam qoʻshilishi bilanoq joriy boʻladi.
- **Obyekt tanlanmaydi.** Uning qatlami qulflangan, oʻchirilgan yoki muzlatilgan.
- **Qatlam boshqa dasturda hali ham chop etiladi.** DXF R12 "chop etilmasin" ni saqlay olmaydi. CadCraft chizmada varaq boʻlganda sozlamani oʻzida saqlaydi, ammo boshqa dasturlar oʻsha qatlamni chop etadi.
- **Saqlangandan keyin qatlam nomlari katta harflarda.** DXF R12 nomlarni katta harflarda saqlaydi, shuning uchun `Devorlar` `DEVORLAR` boʻlib qaytadi va boʻshliqlar `_` belgisiga aylanadi. Saqlangan DWG nomlarni yozganingizdek saqlaydi.
- **Qatlamni nomini oʻzgartirish, birlashtirish yoki oʻchirish.** {{cmd:RENAME}}, {{cmd:LAYMRG}} yoki {{cmd:LAYDEL}} dan foydalaning (ular {{ui:Vositalar}} ichida ham bor): quyida qarang.

## Qatlamlarni guruhlash

Roʻyxatni qisqa tutish uchun qatlamlarni papkalarga joylashtiring, masalan Mavjud, Loyiha va Xizmatlar. Har bir papka yigʻiladi va uning tugmalari barcha qatlamlarini bir vaqtda yoqadi yoki oʻchiradi, muzlatadi yoki qulflaydi. Joriy qatlam hech qachon oʻchirilmaydi.

Qatlamlar paneli {{ui:Vositalar}} ichida {{ui:Tayyor guruhlarni qoʻshish}} ni tanlang — bu kichik turar joy ishlari uchun tayyorlangan toʻplam; {{ui:Nom boʻyicha guruhlash}} — umumiy prefiksga ega qatlamlarni (`E-Walls`, `E-Doors`) guruhlash uchun; yoki {{ui:Yangi guruh}}. Qatlamni papkaga sudrang yoki joriy qatlam uchun qatlamlar ustidagi roʻyxatdan foydalaning. Roʻyxatni toraytirish uchun {{ui:Qatlamni topish}} maydoniga yozing. `LAYGROUP` (`LG`) buyrugʻi buni buyruq satrida xuddi shunday bajaradi.

Qatlamlarning oʻzi oʻzgarmaydi, shuning uchun boshqa CAD dasturlar ularni oddiy tekis roʻyxat sifatida koʻradi. CadCraft guruhlarni faylda saqlaydi.
