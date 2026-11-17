---
title: Xossalar paneli
summary: Tanlangan obyektlarning hammasini koʻring va oʻzgartiring — Z bilan koordinatalar, oʻlchamlar, matn, oʻlcham sozlamalari, shaffoflik va boshqalar. Maydonlar ifodalar va birlikli uzunliklarni qabul qiladi.
keywords: jami, umumiy uzunlik, umumiy maydon, yigʻindi, tanlov uzunligi, xossalar, xossalar paneli, ctrl+1, pr, ch, mo, ddmodify, turlicha, tez tanlash, pickadd, koordinatalar, z, balandlik, qalinlik, shaffoflik, material, giperhavola, ifoda, quickcalc, uchi, oʻlcham uslubi, tolerantlik, oʻnlik kasrlar
from: 10d6a829
---

## Bu nimani oʻrgatadi

Xossalar panelini qanday ochish, bitta yoki yuzta obyektni bir qadamda qanday oʻzgartirish, aniq koordinatalarni (Z bilan) qanday kiritish, har bir son maydonida ifoda va birliklardan qanday foydalanish va har bir obyekt turi nimani koʻrsatishi.

## Uni ochish

Panel oʻng tomonda turadi. Uni oldinga chiqarish uchun:

- {{key:Mod+1}} bosing yoki {{cmd:PROPERTIES}} (yoki `PR`, `CH`, `MO`) ni yozing.
- Obyektni ikki marta bosing (matn va koʻp yetakchilar oʻz matn muharririni ochadi).

Panel boshqa panellar kabi koʻchma: uni chap, oʻng yoki pastga biriktirish uchun dastasini torting yoki chizma ustiga tashlab suzuvchi qiling (qarang: [Panellarni joylashtirish va ikkinchi monitordan foydalanish](common:arrange-panels)).

### Yigʻish

Panel tepa oʻngdagi pin tugmasi bilan **avtoyashirish** ni yoqadi: panel oʻng chekkadagi chiziqqa yigʻiladi va chizmaga joy ochiladi. Chiziqqa ishora qiling (yoki {{key:Mod+1}} bosing) — u chizma ustida ochiladi; uzoqlashsangiz, yana yigʻiladi. Pinni yana bosing, u ochiq qoladi. {{cmd:PROPERTIESCLOSE}} ham uni yigʻadi.

## Boʻlimlar

Xossalar boʻlimlarga guruhlangan, ularni yigʻish mumkin: **Umumiy**, **Geometriya**, **Matn**, **Chiziqlar va strelkalar**, **Moslash**, **Asosiy birliklar**, **Qoʻshimcha birliklar**, **Tolerantlar**, **Naqsh**, **Boshqa** va bloklar uchun **Atributlar** hamda **Kutubxona elementi**. Boʻlim nomini bosib yigʻing yoki oching; CadCraft qaysilarini yigʻganingizni eslab qoladi.

Nomlar bilan qiymatlar orasidagi ingichka chiziqni torting — nomlarni kengroq yoki torroq qilish uchun. Asl holiga qaytarish uchun uni ikki marta bosing. Klaviatura bilan, unga fokus berib, oʻq tugmalaridan foydalaning.

## Qiymatni oʻzgartirish

1. Qatorni bosing. Sarlavhada "Chiziq" yoziladi.
2. {{ui:Uzunlik}} ga bosing. Tahrirlash vaqtida maydon yaxlitlangan emas, toʻliq qiymatni koʻrsatadi.
3. `2500` ni yozing va {{key:Enter}} bosing. Chiziq endi 2500 uzunlikda, boshlangʻich nuqtasi va burchagi saqlanadi.

{{key:Enter}} yoki boshqa joyni bosish qiymatni qoʻllaydi; {{key:Esc}} eski qiymatni qaytaradi. Har bir oʻzgarish bitta bekor qilish qadami.

### Ifodalar va birliklar

Har bir son maydoni oddiy sondan koʻprogini qabul qiladi:

| Siz yozasiz | Olasiz |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (dyuym, futli va dyuymli chizmada) |
| `900mm`, `3.5m`, `2ft` | Chizma birliklariga aylantiriladi |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (burchak maydonlari) |
| `0.5r`, `100g` | Radian va grad, gradus sifatida |

Birlikli uzunlik uchun chizmada birliklar boʻlishi kerak: avval {{ui:Yangi obʼyektlar}} ostida {{ui:Birliklar}} ni oʻrnating (hech narsa tanlanmagan holda). Notoʻgʻri kiritish panel ostidagi izoh bilan rad etiladi va hech narsa oʻzgarmaydi; u hech qachon 0 sifatida saqlanmaydi. Funksiyalar: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; burchaklar gradusda.

## Bir nechta obyektni bir vaqtda oʻzgartirish

1. Bir nechta obyektni tanlang, masalan 8 ta chiziq va 4 ta oʻlcham.
2. Sarlavhada "12 ta obyekt" yoziladi va tepadagi roʻyxatda **Hammasi (12)**, **Chiziq (8)** va **Oʻlcham (4)** koʻrsatiladi.
3. **Hammasi** har bir obyekt nimaga ega ekanini koʻrsatadi (qatlam, rang, chiziq turi…). Oʻlcham sozlamalarini koʻrish uchun **Oʻlcham (4)** ni tanlang.
4. Qiymatni oʻzgartiring, masalan {{ui:Oʻnlik kasrlar}} ni `1` ga.

Bu barcha toʻrtta oʻlchamni bitta bekor qilish qadamida oʻzgartiradi. **Turlicha** deb yozilgan maydon obyektlar bir-biridan farqlanishini bildiradi; qiymat kiritsangiz, u hammasiga qoʻyiladi. Qulflangan qatlamdagi obyektlar oʻzgarmaydi, izoh esa nechtasi ekanini aytadi.

## Tanlovning jami

Bir nechta obyekt tanlanganda, sarlavhadagi {{ui:Jami}} boʻlimi aytadi:

- **Obyektlar**: har turdan nechta, masalan "8 ta chiziq, 2 ta polichiziq, 1 ta aylana".
- **Umumiy uzunlik**: chiziqlar, yoylar va polichiziqlarning yigʻindisi (splaynlar ham hisobga olinadi) va necha obyekt ekanligi.
- **Umumiy maydon**: yopiq obyektlarning yigʻindisi: aylanalar, toʻliq ellipslar, yopiq polichiziqlar va shtrixlar (shtrixning teshiklari ayiriladi).

Ular chizmaning uzunlik formatida koʻrsatiladi (futli va dyuymli boʻlsa shunday; maydonlar keyin kvadrat dyuym va kvadrat futda).
Holat satri obyektlar tanlanganda xuddi shu uzunlik va maydonni koʻrsatadi; {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Tanlovning uzunligi va maydoni}} › {{ui:Yashirilgan}} uni oʻchiradi. Bitta obyekt uchun {{ui:Geometriya}} oʻz uzunligi va maydonini avvalgidek koʻrsatadi.

## Koordinatalar

Har bir nuqta **X**, **Y** va **Z** ni koʻrsatadi: chiziqning boshi va oxiri, markazlar, kiritish nuqtalari, matn joylari, joriy polichiziq uchi. Chiziqlar, shuningdek, **Delta X**, **Delta Y** va **Delta Z** (faqat oʻqish uchun) ni koʻrsatadi. Polichiziqlar va shtrixlarda **Balandlik** bor (butun obyekt uchun bitta Z).

Nuqta nomi yonidagi nishon tugmasi uni chizmada tanlash imkonini beradi: uni bosing, soʻng yangi joyni bosing (ilashishlar ishlaydi). Qiymatlar jahon koordinatalari.

## Umumiy

| Maydon | Nima |
|---|---|
| {{ui:Qatlam}}, {{ui:Rang}}, {{ui:Chiziq turi}}, {{ui:Chiziq turi masshtabi}}, {{ui:Chiziq qalinligi}} | Qatlamlar panelidagi kabi; {{ui:Qatlam boʻyicha}} qatlamga ergashadi |
| {{ui:Shaffoflik}} | Qatlam boʻyicha, blok boʻyicha yoki 0 dan 90% gacha |
| {{ui:Qalinlik}} | Chiziqlar, aylanalar, yoylar, polichiziqlar, nuqtalar va matn Z boʻylab qanchaga choʻzilishi |
| {{ui:Material}} | Qatlam boʻyicha, blok boʻyicha, Global yoki chizma olib kelgan nom |
| {{ui:Chop etish uslubi}} | Faqat oʻqish uchun: chizmalar varaqning [chop etish uslubi jadvali](topic:plot-pdf#plot-style-tables) orqali rang boʻyicha chop etiladi |
| {{ui:Giperhavola}} | Obyekt bilan saqlanadigan veb manzil |

## Har bir tur nimani koʻrsatadi

| Tanlangan | Oʻzgartirish mumkin |
|---|---|
| Chiziq | Boshlangʻich va oxirgi X, Y, Z; uzunlik; burchak |
| Aylana | Markaz; radius; diametr; aylana uzunligi; maydon (har biri radiusni belgilaydi) |
| Yoy | Markaz; radius; boshlangʻich va oxirgi burchak; toʻliq burchak; vatar (yoy uzunligi va maydonini koʻrsatadi) |
| Ellips | Markaz; katta va kichik radius; radiuslar nisbati; katta oʻq burchagi; boshlangʻich va oxirgi burchak |
| Polichiziq | Uchlar koʻrigi (quyida); umumiy kenglik; balandlik; yopiq; yopiq boʻlganda maydon (markazi atrofida masshtablaydi) |
| Matn | Mazmun; uslub; tekislash; balandlik; burilish; kenglik koeffitsienti; ogʻish burchagi; belgilangan kenglik; qator oraligʻi; annotativ; joy |
| Blok havolasi | Kiritish nuqtasi; burilish; masshtab X, Y, Z va bir xil masshtab; atribut qiymatlari |
| Shtrix | Naqsh; masshtab; burchak; boshlanish nuqtasi; assotsiativ; orol aniqlash; fon rangi; balandlik |
| Oʻlcham | Quyida qarang |
| Koʻp yetakchi | Matn; balandlik; kenglik; matn tomoni; strelka oʻlchami; qoʻnish masofasi; strelka nuqtasi |
| Koʻrinish oynasi | Masshtab; varaqdagi markaz va oʻlcham; modeldagi koʻrinish markazi; yoqilgan; ekran qulflangan |

### Polichiziq uchlari

{{ui:Joriy uchi}} qaysi uchga tegishli maydonlar ekanini koʻrsatadi. Boshqa uchga oʻtish uchun pastdagi strelka tugmalaridan foydalaning yoki raqam kiriting; uchlar soni cheklanmagan. Har bir uchda X, Y, boshlangʻich va oxirgi segment kengligi va shu nuqtadan boshlanadigan segmentning bulge qiymati bor (0 = toʻgʻri).

## Oʻlchamlar

Oʻlcham oʻzining **Oʻlcham uslubi**ni, nimani oʻlchashini, nuqtalarini va barcha sozlamalarini koʻrsatadi:

- **Chiziqlar va strelkalar:** har bir uchning strelkasi, strelka oʻlchami, belgi oʻlchami, oʻlcham va choʻzish chiziqlarining ranglari va chiziq qalinliklari, ikkala yarmini yoki har bir choʻzish chizigʻini yashirish, choʻzish chizigʻi ofseti va choʻzish.
- **Matn:** almashtirish (oʻlchangan qiymat uchun boʻsh qoldiring; oʻz matningizda `<>` uning oʻrnini bildiradi), uslub, rang, balandlik, ofset, vertikal va gorizontal joy, doim gorizontal, burilish, fon toʻldirish.
- **Moslash:** umumiy masshtab, asos oraligʻi, joy kam boʻlganda nima harakatlanadi, matn harakati.
- **Asosiy birliklar:** format, oʻnlik kasrlar, yaxlitlash, prefiks, suffiks, oʻlchov masshtabi, oʻnlik ajratgich, boshi va oxiridagi nollarni yashirish; burchaklar uchun burchak formati va oʻnlik kasrlar.
- **Qoʻshimcha birliklar:** yoqilgan yoki oʻchirilgan, format, oʻnlik kasrlar, koʻpaytuvchi (25.4 dyuymni millimetrga aylantiradi), yaxlitlash, prefiks va suffiks.
- **Tolerantlar:** yoʻq, simmetrik, ogʻish, chegaralar yoki asosiy, yuqori va quyi qiymatlar, oʻnlik kasrlar, balandlik va joy bilan.

Ochilgan oʻlchamda ularning har qandayini oʻzgartirsangiz, boshqa dastur u chizgan tasvirni tashlaydi va CadCraft uni qayta chizadi.

:::note
Gorizontal matn joyi (birinchi yoki ikkinchi choʻzish chizigʻi yonida) va chiziq ostidagi matn chiziqli va tekislangan oʻlchamlarda chiziladi; boshqa oʻlchamlarda ular saqlanadi va yoziladi, lekin hali chizilmaydi. Moslash tanlovlari saqlanadi va yoziladi, lekin hali chizilmaydi: CadCraft matnni oʻz qoidasi bilan joylashtiradi (chiziq ustida, sigʻmasa tashqarida).
:::

## Hech narsa tanlanmagan

Hech narsa tanlanmaganda panel quyidagilarni koʻrsatadi:

- **Yangi obʼyektlar:** yangi obyektlar oladigan qatlam, rang, chiziq turi, chiziq qalinligi va matn balandligi; chizmaning birliklari va uzunlik formati; joriy qatlamning chiziq turi va chiziq qalinligi; yangi oʻlchamlar uchun oʻlchamlar. Varaqda avval varaqning nomi, qogʻozi va yoʻnalishi keladi.
- **Koʻrinish:** ekranda turgan narsaning markazi, balandligi va kengligi. Koʻrinishni oʻsha joyga koʻchirish uchun qiymat kiriting.
- **Boshqa:** UCS belgisi yoqilgan yoki oʻchirilgan, UCS (doim Jahon: CadCraftda hali foydalanuvchi koordinata tizimlari yoʻq) va annotatsiya masshtabi.

## Tepadagi tugmalar

| Tugma | Vazifasi |
|---|---|
| Voronka | {{cmd:QSELECT}}: tur va xossa boʻyicha tanlash |
| Koʻrsatkich | {{cmd:SELECT}}: buyruq qatorida obyektlarni tanlash |
| Plyus yoki 1 | Bosish tanlovga qoʻshadimi (plyus) yoki almashtiradimi (1); bu {{ui:Sozlamalar}} dagi {{ui:CadCraft}} bilan bir xil sozlama |
| Pin | Avtoyashirish, yuqorida |

## Keng uchraydigan xatolar

- **Maydonga yozish hech narsa qilmadi.** {{key:Enter}} yoki boshqa joyni bosing. Qizil maydon va izoh kiritish rad etilganini bildiradi.
- **Birlikli uzunlik rad etildi.** Chizmada birliklar yoʻq. Hech narsa tanlanmagan holda {{ui:Birliklar}} ni oʻrnating.
- **Faqat Qatlam va Rang koʻrinadi.** Bir nechta tur obyekt tanlangan va **Hammasi** tanlangan. Tepadagi roʻyxatda bitta turni tanlang.
- **Ayrim obyektlar oʻzgarmadi.** Ular qulflangan qatlamda. Qatlamlar panelida qatlamni oching.
- **Yozilgan harflar maydonga kirib ketdi.** Maydonda kursor boʻlganda klavishalar shu yerga yozadi. {{key:Enter}} yoki {{key:Esc}} bosing, soʻng buyruqni yozing.
