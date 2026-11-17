---
title: Hujjatlar va qayta koʻrib chiqishlar (ombor)
summary: Bitta haqiqiy ish boʻylab qadamma-qadam: loyiha jildini nazorat ostiga oling, chizmani olib, oʻzgartiring va izoh bilan qaytaring, koʻrib chiqishga yuboring, tasdiqlab chiqaring, tarixni koʻring, ikkinchi shaxs qulflangan faylni qanday koʻrishini va bulut jildlari bilan ishlashni bilib oling.
keywords: ombor, hujjatlar, qoʻllanma, darslik, olish, qaytarib joylash, qayta koʻrib chiqish, chiqarish, tasdiqlash, qulf, tarix, qayerda ishlatilgan, bulut jildi, loyiha jildi, hujjatlarni boshqarish, pdm, ikki kishi, umumiy jild
from: 3829528d
---

## Nima qilasiz

Siz Ana, Riverside Clinic ustida hamkasbingiz Ben bilan ishlayapsiz. Loyiha chizmalari siz ikkalangiz kirishingiz mumkin boʻlgan bitta jildda: umumiy disk, sinxronlangan jild yoki bulut jildi. Oxirida bitta fayl birinchi nusxasidan **A** qayta koʻrib chiqishiga chiqariladi, u yana **B.1** sifatida oʻzgartiriladi, siz kim nima qilganini koʻrasiz va faylni ushlab turganingizda Ben nimani koʻrishini koʻrasiz.

Hammasi fayllaringiz yonidagi yashirin `.ccvault` jildida saqlanadi: server yoʻq, hech narsa yuklanmaydi (bulut jildi istisno, oxirgi qadamga qarang). Har bir tugma va qoida bir joyda boʻlishi uchun, ilovangizda bor boʻlgan *Hujjatlar: olish, qayta koʻrib chiqishlar va chiqarish* mavzusiga qarang.

## 1. Loyiha jildini sozlang

1. **Koʻrinish** yorligʻining {{ui:Koʻproq}} menyusida {{ui:Hujjatlar…}} ni tanlang yoki `DOCUMENTS` (yoki `DOCS`) kiriting va {{key:Enter}} ni bosing.
2. {{ui:Loyiha jildini tanlang}} ni tanlang va loyihaning chizmalarini saqlaydigan jildni tanlang. (Loyiha jildlari Studio da va jild ochishga qodir brauzerlarda, masalan Chrome va Edge da ishlaydi. Boshqa brauzerlarda panel buni aytadi.)
3. **Siz:** yonidagi {{ui:Oʻzgartirish}} ni tanlang va ismingizni kiriting, `Ana` (agar soʻrasa, bu kompyuterning nomi ham). Panelda *Siz: Ana* va kompyuteringiz koʻrsatiladi. Ismingiz siz qilgan hamma narsaga qoʻyiladi.
4. {{ui:Bu jildda hujjatlar omborini boshlash}} ni tanlang va loyiha nomini kiriting, `Riverside clinic`. Panelda *Riverside clinic uchun ombor boshlandi.* deb yoziladi.

## 2. Faylni nazoratga oling

1. **Ombordan tashqaridagi fayllar** ni oching va `plans/A-101.dxf` yonidagi {{ui:Qoʻshish}} ni tanlang.
2. U **Ombordagi fayllar** ostida **A.1** qayta koʻrib chiqishi bilan, holati **Ishlanmoqda** boʻlib paydo boʻladi. A.1 uning birinchi nusxasi; ombor har bir qayta koʻrib chiqishning nusxasini saqlaydi.

## 3. Olish, oʻzgartirish, qaytarib joylash

1. `plans/A-101.dxf` yonidagi {{ui:Ochish}} ni tanlang. Chizma CadCraft da ochiladi va panel yopiladi, shunda uni koʻrasiz. Panel yana bir buyruq uzoqlikda: `DOCUMENTS`.
2. Panelni yana oching va {{ui:Olish}} ni tanlang. Qator endi **Sizda olingan** deb yozadi. `.ccvault/locks` da qulf fayli yaratilgan; siz uni qaytarib joylamaguningizcha hech kim bu faylni ola olmaydi.
3. Chizing: chiziq qoʻshing, devorni siljiting. Chizma sizga olingan boʻlmasa, qilgan hech narsangiz ombor faylining ustiga saqlanmaydi; {{ui:Boshqacha saqlash}} esa doim oʻz nusxangiz uchun ishlaydi.
4. Panelni oching, {{ui:Qaytarib joylash}} ni tanlang va nima oʻzgarganini yozing, `Eshikni siljitdim`. Panel *A.2 sifatida qaytarib joylandi.* deb yozadi. Loyiha jildidagi fayl endi ochgan chizmangiz boʻladi va qulf yoʻqoladi. Hech narsa oʻzgarmagan holda qaytarib joylash qayta koʻrib chiqishni saqlab qoladi.

Fikringizni oʻzgartirsangiz, {{ui:Olishni bekor qilish}} faylni yangi qayta koʻrib chiqishsiz qaytaradi.

## 4. Koʻrib chiqish va chiqarish

1. {{ui:Koʻrib chiqishga yuborish}} ni tanlang. Holat **Koʻrib chiqilmoqda** boʻladi va fayl faqat oʻqish uchun boʻladi.
2. Tasdiqlashdan oldin {{ui:Loyiha sozlamalari}} ni tanlang va kim tasdiqlashi mumkinligini yozing (har qatorda bittadan ism), masalan `Ben` va `Carla`, hamda muallif bilan tasdiqlovchi bir xil boʻlmasligi qoidasini belgilang. {{ui:Sozlamalarni saqlash}} ni tanlang. Endi ombor oʻzi boshqa birovni rad etadi.
3. Ben (yoki Carla) {{ui:Tasdiqlash}} ni tanlaydi va tasdiqlovchining ismini kiritadi. Holat **Chiqarilgan** boʻladi, qayta koʻrib chiqish esa **A** boʻladi, *tasdiqlagan* va ism bilan. Chiqarilgan fayl faqat oʻqish uchun. {{ui:Qaytarib yuborish}} uni sabab bilan **Ishlanmoqda** holatiga qaytargan boʻlardi.

Tasdiqlovchining ismi panelda kiritilgan ism; bu kim imzo qoʻyganining qaydi, shaxsni isbotlash emas.

## 5. Yangi qayta koʻrib chiqish

1. Chiqarilgan faylda {{ui:Yangi qayta koʻrib chiqish}} ni tanlang. Siz uni keyingi harf uchun band qilasiz.
2. Uni oʻzgartiring, soʻngra {{ui:Qaytarib joylash}}. Qayta koʻrib chiqish **B.1**, ishlanmoqda boʻladi. Xuddi shunday chiqarsangiz, u **B** boʻladi. Birinchi qaytarib joylashdan oldin {{ui:Olishni bekor qilish}} uni **A** da qoldiradi.

Harflar A, B … Z, AA, AB ketma-ketligida. Agar standartingiz baʼzi harflarni tashlab ketsa, *ASME Y14.35 ketma-ketligidan foydalanish* loyiha sozlamasi keyingi qayta koʻrib chiqishlar uchun I, O, Q, S, X va Z ni oʻtkazib yuboradi.

## 6. Nima boʻlganini koʻring

Tafsilotlarini ochish uchun fayl nomini tanlang:

- **{{ui:Tarix}}**: har bir voqea, eng yangisi birinchi, kim, qaysi kompyuter va qachon: Ana tomonidan *A.2 qaytarib joylandi*, Ben tomonidan *Chiqarildi* va hokazo.
- **{{ui:Qayta koʻrib chiqishlar}}**: qayta koʻrib chiqishlar jadvali. {{ui:Nusxani ochish}} qayta koʻrib chiqishni ombor faylining ustiga yoza olmaydigan oddiy nusxa sifatida ochadi; {{ui:Solishtirish uchun}} esa undan oldingi yoki boshqa qayta koʻrib chiqishga nisbatan qoʻshilgan, olib tashlangan va oʻzgargan narsalarni koʻrsatadi.
- **{{ui:Ishlatiladi}}**: u bogʻlagan chizmalar (xrefs).
- **{{ui:Kim ishlatadi}}**: ombordagi unga bogʻlangan boshqa har bir chizmani koʻrsatadi: asosiy rejani oʻzgartirsangiz, qaysi varaqlarni tekshirish kerakligini bilasiz.

## Varaqdagi qayta koʻrib chiqish

Chizma ochiq boʻlganda (va unda maket bor boʻlganda), {{ui:Revizya bloki}} ni tanlang: chiqarilgan qayta koʻrib chiqishlar jadvali varaqning yuqori oʻng qismida chiziladi. {{ui:Shtamplarni toʻldirish}} ni tanlang, shunda `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` yoki `APPROVED_BY` belgili shtamp atributlari faylning qayta koʻrib chiqishi, holati, sanasi va tasdiqlovchisi bilan toʻldiriladi. Keyingi chiqarishni tasdiqlaganingizda revizya bloki yangilanadi.

## 7. Faylni ushlab turganingizda Ben nimani koʻradi

Endi faylni yana oling va Bendan oʻz kompyuterida oʻsha loyiha jildini ochib panelni ochishni soʻrang. Fayl qatorida u **Ana tomonidan olingan** deb, kompyuterni va vaqtni koʻradi, {{ui:Olish}} tugmasi esa yoʻq. Agar baribir urinsa, ombor rad etadi: qulf tizim ikki marta yaratmaydigan fayl, shuning uchun ikki kishi bir soniyada ham faylni ushlab tura olmaydi, Studio da jild diskda boʻlganda. (Brauzerda jild faqat taxminiy himoya beradi va panel buni **Jild** ostida aytadi.)

Ana uzoqda boʻlib, Benga fayl kerak boʻlsa, {{ui:Olishni buzish}} uni boʻshatadi. U sabab kiritishi shart; u jurnalga kimning olishi ekanligi bilan yoziladi. Loyihada adminlar koʻrsatilgan boʻlsa, faqat ular buzishi mumkin. Eskirgan chegaradan (standart boʻyicha 14 kun) oldingi olish *uzoq vaqt* deb belgilanadi. Buzilgandan keyin Ananing kechikkan qaytarib joylashi rad etiladi, shuning uchun ikkingiz bir-biringizning ustiga yozib yubormaysiz.

## 8. Bulut jildlari

Bulut jildi — bu jamoangizning bulut saqlashida turgan loyiha jildi, shuning uchun jamoaga umumiy disk kerak emas. Studio da, CadCraft hisobingizga kirganingizda, panelda {{ui:Loyiha jildini tanlang}} yonida {{ui:Bulut jildini oching}} koʻrsatiladi. Uni tanlang va jildni tanlang, u ish joyi / jild koʻrinishida chiqadi. Avval ish joyi egasi jildni yaratadi va jamoaning bulut saqlashi kuchda boʻlishi kerak. Hamma yuqoridagilar bir xil ishlaydi; serverda qulf yaratiladi, u odamlar orasida qat'iy. Agar hisobingizga kirmagan boʻlsangiz, panel kirishni aytadi. Oddiy brauzer yorligʻida bulut tugmasi taklif qilinmaydi: Studio dan foydalaning.

## Sinab koʻring

Yuqoridagi sakkiz qadamni haqiqiy faylning nusxasi bilan bajaring. Ikki kishilik qadamlar uchun yana bir kishi yoki ikki oyna va ikki ism kerak. Agar haqiqiy umumiy jild bilan sinasangiz, Hamjamiyat sinovi sahifasida aynan shuni tekshiradigan tekshiruv bor va u natijalarni qabul qiladi.
