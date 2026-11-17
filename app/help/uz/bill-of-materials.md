---
title: Zonalar boʻyicha materiallar roʻyxati
summary: Chizma maydonlarini zona sifatida belgilang va har biri uchun ichidagi bloklarni sanaydigan jadval joylashtiring. Jadvallar siz ishlaganingizda chizmaga ergashadi, har biri qaysi ustunlarni koʻrsatishini esa siz tanlaysiz.
keywords: materiallar roʻyxati, BOM, detallar roʻyxati, jadval, zona, maydon, sanash, atribut, ustunlar, element raqami, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Zona** — chizmaning nomlangan maydoni. **Materiallar roʻyxati jadvali** esa bitta zona ichida yoki butun chizmada nima borligini sanaydi: har bir blok, uning miqdori va atribut qiymatlari bilan. Chizmada istalgancha zona va jadval boʻlishi mumkin, bitta zonada esa turli ustunli bir nechta jadval boʻlishi mumkin.

Asboblar Bloklar yorligʻida {{ui:Bill of materials}} ostida, Bloklar guruhining {{ui:More}} menyusida joylashgan va ularni yozish bilan ham chaqirish mumkin.

## Zona yaratish

{{cmd:BOMZONE}} ni yozing va quyidagilardan birini qiling:

- toʻgʻri toʻrtburchak uchun ikki qarama-qarshi burchakni bosing,
- {{ui:Polygon}} ni tanlang, har bir burchakni bosing va yopish uchun Enter bosing, yoki
- {{ui:Object}} ni tanlang va yopiq polichiziq, aylana, ellips yoki yopiq spline ni bosing. Uning konturi nusxalanadi; obyekt oʻz holicha qoladi.

Soʻng zona nomini yozing. Zona nuqtir chiziqli kontur sifatida chiziladi, nomi esa yuqori chap burchagi ustida turadi; u `BOM-ZONES` qatlamida boʻladi, bu qatlam chop etilmaydi. Zonalar qogʻozda kerak boʻlsa, shu qatlam uchun chop etishni yoqing.

Zona oddiy yopiq polichiziq: uni koʻchiring, choʻzing yoki tutqichlarini suring, nomi ergashadi. Zonani qayta nomlash uchun nom matnini tahrirlang yoki {{cmd:BOMZONE}} va {{ui:Rename}} dan foydalaning. {{ui:Zones}} har bir zonani va u nechta jadvalga ega ekanini koʻrsatadi.

## Jadval joylashtirish

{{cmd:BOMTABLE}} (yoki {{cmd:BOM}}) yozing, zonaning konturini yoki nomini tanlang, matn balandligini bering va jadvalning yuqori chap burchagi boradigan joyni bosing. Zonani tanlash oʻrniga {{key:Enter}} bosing yoki {{ui:Whole}} ni tanlang — bu butun chizma uchun jadval boʻladi.

Yangi jadvalda element raqami, miqdor, blok nomi va blok olib yuradigan har bir atribut uchun ustun koʻrinadi (dastlabki oltitasi; qolganlari belgilanmagan holda taklif qilinadi). Bir xil nomli va bir xil atribut qiymatli bloklar bitta qatorni ulashadi.

## Ichkarida nima hisoblanadi

- Blok **kiritish nuqtasi** tushgan zonada hisoblanadi.
- Chiziq, yoy, aylana, polichiziq, ellips, spline yoki shtrixlash oʻz oʻlchamlarining markazi tushgan zonada **toʻliq** hisoblanadi (chiziq uchun — uning oʻrtasi). Uning uzunligi zona chegarasida kesilmaydi.
- Chegarada aniq yotgan nuqta ichkarida hisoblanadi.
- Zonalar bir-biriga kirishi mumkin. Har bir zona oʻzi uchun hisoblaydi, shuning uchun kesishmadagi obyekt ikkala jadvalda ham boʻladi.

## Jadvallar chizmaga ergashadi

Blokni qoʻshsangiz, koʻchirsangiz, nusxalasangiz yoki oʻchirsangiz, atributni tahrirlasangiz, yoki zonaning shaklini oʻzgartirsangiz yoki koʻchirsangiz, har bir jadval bir xil qadamda qayta chiziladi. Bekor qilish sizning tahriringizni va jadval oʻzgarishini birga qaytaradi.

Jadval ergashmasligi uchun uning sozlamalarida {{ui:Frozen}} ni belgilang. Muzlatilgan jadval faqat siz uning sozlamalarini tahrirlaganingizda yoki {{cmd:BOMUPDATE}} yozganingizda oʻzgaradi; bu buyruq hamma jadvallarni hozir yangilaydi.

## Ustunlarni tanlash

Jadvalni tanlang va {{cmd:BOMEDIT}} ni yozing. Dialogda:

- **Ustunlar**: koʻrsatish uchun belgilang (element, miqdor, nom, qatlam, uzunlik, maydon, izohlar va har bir atribut), ixtiyoriy sarlavhani yozing va ularni yuqoriga yoki pastga suring.
- {{ui:Group rows by}}: blok nomi va atribut qiymatlari, faqat blok nomi, qatlam yoki bitta atribut. Birlashtirilgan qatorda bloklar orasida farq qiladigan qiymat „turlicha” deb yoziladi.
- {{ui:Sort by}} istalgan ustun boʻyicha, oʻsish yoki kamayish tartibida.
- {{ui:Title}}, {{ui:Show the title}} va {{ui:Totals row}}.
- {{ui:Count linework by layer}} har bir qatlam uchun bitta qator qoʻshadi: obyektlar soni, ularning umumiy uzunligi va yopiq shakllar uchun umumiy maydoni, chizma birliklarida.
- **Izohlar**: Izohlar ustunini belgilang, soʻng dialog pastidagi jadvalda istalgan qator uchun izoh yozing.

Har bir jadval oʻz tanlovlarini saqlaydi.

## Element raqamlari

Qator jadvalda turgan paytida oʻz element raqamini saqlaydi. Yangi qator keyingi boʻsh raqamni oladi va berilgan raqam boshqa ishlatilmaydi, shuning uchun raqamga havola qilgan belgilar va izohlar toʻgʻri qoladi. {{ui:Renumber items}} koʻrsatilgan tartibda 1 dan boshlab raqamlaydi.

Qator oʻzi guruhlaydigan narsa bilan aniqlanadi: guruhlash usulini oʻzgartirsangiz yoki guruhlash ishlatadigan atribut qiymatini oʻzgartirsangiz, qator yangi hisoblanadi.

## Eksport va boshqa dasturlar

{{cmd:BOMEXPORT}} yoki dialogdagi {{ui:Export CSV}} jadvalni elektron jadval uchun .csv fayl sifatida saqlaydi.

DWG yoki DXF faylida jadval chiziq va matnning oddiy bloki; boshqa dasturlar uni chizilgandek koʻrsatadi va chop etadi. U yerda jadval obyekti emas va boshqa dasturlarda yangilanmaydi. Uning zonaga havolasi faylda CadCraft oʻqiydigan kengaytma maʼlumoti sifatida saqlanadi, shuning uchun chizmani CadCraft da qayta ochganingizda jadval yana jonli boʻladi. Varaqsiz chizmaning R12 DXF nusxasi zona qatlamining „chop etilmaydi” sozlamasini saqlamaydi.

Jadvalni portlatish uni erkin chiziq va matnga aylantiradi va havolani uzadi.
