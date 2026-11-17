---
title: Muammolarni bartaraf etish
summary: CadCraft koʻrsatadigan xabarlar va duch kelishingiz mumkin boʻlgan muammolar, har biri sababi va yechimi bilan.
keywords: muammo, xato, ishlamayapti, xabar, ochib boʻlmadi, nomaʼlum buyruq, hech narsa boʻlmayapti, qotib qolgan, tugmalar ishlamayapti, boʻsh, yoʻq, tuzatish
from: 8299b222
---

## Fayllarni ochish

| Xabar yoki belgi | Sababi | Yechimi |
|---|---|---|
| "CadCraft DWG va DXF chizmalarini ochadi. "…" esa ikkalasi ham emas." | Fayl `.dwg` yoki `.dxf` emas. | Chizma faylning oʻzini oching. PDF ni olib kirish mumkin (Ochish soʻraydi: import yoki biriktirish, qarang: [PDF tagliklari](topic:pdf-underlay)); rasmlar `IMAGEATTACH` bilan kiritiladi. |
| "Bu ikkilik DXF obyekt oʻrtasida tugaydi: fayl qisqargan yoki shikastlangan." | Ikkilik DXF oxiridan oldin toʻxtaydi. | Oʻqish mumkin boʻlganini ochish uchun `RECOVER` ni yozing yoki faylni qayta soʻrang. |
| "Bu fayl oʻqiladigan DXF emas (… qatorda notoʻgʻri guruh kodi)." | DXF shikastlangan yoki haqiqatda DXF emas. | Faylni qayta soʻrang yoki DWG ni soʻrang. |
| "Bu chizmani oʻqib boʻlmadi. U shikastlangan boʻlishi yoki oʻquvchi hali qayta ishlamaydigan versiyada saqlangan boʻlishi mumkin (…)." | DWG oʻquvchisi uni oʻqiy olmadi. | Eski versiyada saqlangan DWG yoki DXF ni soʻrang. |
| "Bu chizma AutoCAD R11 / R12 (DWG AC1009) dan boʻlib, CadCraft oʻqiydiganidan eskiroq …" | 12-versiya va undan oldingi DWG fayllari CadCraft oʻqimaydigan formatdan foydalanadi. | Uni yaratgan dasturda DXF (istalgan versiya) yoki yangiroq DWG sifatida saqlang va oʻshani oching. CadCraft ning oʻz {{ui:Boshqacha saqlash}} buyrugʻi shu eski formatni talab qiladigan dasturlar uchun DXF R12 ni taklif qiladi. |
| Birinchi DWG da "Ochib boʻlmadi …" va undan keyin tarmoq xabari | DWG oʻquvchisini yuklab boʻlmadi: siz oflaynsiz va CadCraft oflayn foydalanish uchun saqlanmagan, yoki ulanish uzildi. | Onlaynga oʻting va qayta urining yoki DXF oching. {{ui:Oflayn uchun saqlash}} ni bosing va keyingi safar DWG fayllar oflaynda ochilishi uchun "Oflayn tayyor" xabarini kuting. Qarang: [Oflaynda ishlash](common:offline). |
| Oflayn tugmasi "Saqlab boʻlmadi" deydi | Ayrim fayllar yuklanmadi. | Ulanishni tekshiring va qayta urinish uchun tugmani bosing. |
| Oflayn tugmasi "Oflayn mavjud emas" deydi | Maxfiy oynalar va ayrim boshqariladigan kompyuterlar oflayn nusxani saqlay olmaydi. | Oddiy oynadan foydalaning yoki onlayn qoling. |
| Ulanish boʻlmaganda CadCraft ochilmaydi | Bu brauzerda oflayn foydalanish uchun saqlanmagan, yoki brauzer uni tozalagan. | Keyingi safar onlayn boʻlganingizda {{ui:Oflayn uchun saqlash}} ni bosing va "Oflayn tayyor" xabarini kuting. |
| Chizma ochiladi, lekin qismlari yoʻq | CadCraft hali chiza olmaydigan obyektlar yoki faylda oʻchirilgan yoki muzlatilgan qatlamlar. | Chap panelda "Bu fayl haqida" ni oʻqing. {{ui:Qatlamlar}} panelini tekshiring. |
| Matn ikki qatorga oʻraladi | CadCraft matnni Helvetica uslubidagi shriftda chizadi, ayrim CAD shriftlaridan kengroq. | {{ui:Xossalar}} da matnni qisqartiring yoki qoʻshimcha qator bilan yashang. |
| Aylana ellips koʻrinadi yoki aks ettirilgan matn toʻgʻri tomonga oʻqiladi | Obyekt fayl yaratgan dasturda qiyshiq tekislikda chizilgan yoki pastdan koʻrilgan. CadCraft uni yuqoridan koʻringanidek koʻrsatadi, oʻsha dasturning reja koʻrinishi kabi; matn oʻqilishi mumkin boʻlib qoladi. | Tuzatadigan narsa yoʻq. Boshqa dastur usulida koʻrish uchun chizmani tekislangan yoki obyektlar yuqoridan chizilgan holda soʻrang. |
| Blok, aylana yoki oʻlcham fayl yaratgan dasturdagidan boshqa joyda turadi | CadCraft notoʻgʻri oʻqigan chizma holati. | Bizga Discord orqali xabar bering, imkon boʻlsa faylni ham yuboring. |

## Buyruq satri

| Xabar yoki belgi | Sababi | Yechimi |
|---|---|---|
| "Nomaʼlum buyruq "…". Roʻyxat uchun HELP ni yozing." | Bunday nomdagi buyruq yoki taxallus yoʻq. | `HELP` ni yozing yoki [Buyruqlar maʼlumotnomasi](topic:commands) ga qarang. Ayrim tanish buyruqlar hali [tayyorlanmagan](topic:not-built-yet). |
| Yozish paytida buyruq satri yonida "Bunday buyruq yoʻq" | Siz yozgan narsa hali hech narsaga mos kelmaydi. | Yozishda davom eting yoki imloni tekshiring. |
| "Nuqta yoki variant kalit soʻzi kerak." | Yozganingiz nuqta yoki variant emas. | Formatni tekshiring: `x,y`, `@dx,dy`, `@d<a` yoki bitta son. Qarang: [Koordinata va masofani kiritish](topic:coordinate-entry). |
| "Musbat son yoki ikkita nuqta talab qilinadi." | Masofa manfiy yoki son emas edi. | Musbat son yozing yoki ikkita nuqtani bosing. |
| "Gradusdagi burchak yoki ikkita nuqta talab qilinadi." | Burchak son emas edi. | Gradusni oddiy son sifatida yozing. |
| "Son talab qilinadi." | Son kutilgan edi. | Faqat raqamlarni yozing. |
| "Variant kalit soʻzi notoʻgʻri." | Harflar variantga mos kelmaydi. | Kvadrat qavslarda koʻrsatilgan bosh harflarni yozing. |
| `*Bekor qilish*` | Siz {{key:Esc}} ni bosdingiz yoki nuqta kerak boʻlgan joyda {{key:Enter}} ni bosdingiz. | Buyruqni qayta boshlang. |
| Yozganingiz buyruq satriga yetmaydi | Panelda yoki dialogda qutida kursor bor. | {{key:Enter}} yoki {{key:Esc}} ni bosing yoki chizmani bosing. |
| Buyruq siz tanlamagan obyektlardan foydalanadi | Ular buyruqni boshlashdan oldin tanlangan edi. | Buyruqdan oldin {{key:Esc}} ni bosing. |
| Chiziq kutilmagan joyga ketdi | `x,y` mutlaq. | Nisbiy nuqtalar uchun `@dx,dy` dan foydalaning. |
| "Avval joriy buyruqni tugating yoki bekor qiling (Esc)." | Buyruq ishlayotganda {{key:Mod+S}} ni bosdingiz. | {{key:Esc}} ni bosing, keyin saqlang. |
| "DWG (AutoCAD 2000) sifatida saqlab boʻlmadi: … Avval Boshqacha saqlash, keyin DXF ni sinab koʻring." | Chizmadagi nimadir DWG sifatida yozilmadi. | {{key:Mod+Shift+S}} ni bosing, DXF R12 ni tanlang va {{ui:Saqlash}} ni bosing. |
| "Saqlanmadi." | Siz {{ui:Nusxani quyidagi nom bilan saqlash}} dialogini {{ui:Bekor qilish}} yoki {{key:Esc}} bilan yopdingiz. | {{key:Mod+Shift+S}} ni yana bosing va {{ui:Saqlash}} ni bosing. |

## Tahrirlash

| Xabar yoki belgi | Sababi | Yechimi |
|---|---|---|
| Obyekt tanlanmaydi | Uning qatlami qulflangan, oʻchirilgan yoki muzlatilgan; yoki siz varaqdasiz va u koʻrinish oynasi ichidagi model. | Qatlamni oching yoki {{ui:Model}} varaqiga oʻting. |
| "Bu yerda hech narsa topilmadi." | Bosgan joyda obyekt yoʻq. | Kattalashtiring va chiziqning oʻzini bosing. |
| "Bu yerda bu obyektni hech narsa kesib oʻtmaydi." | {{cmd:TRIM}} tanlagan boʻlakni kesib oʻtadigan obyektni topmadi. | Kesuvchi chiziq haqiqatan uni kesib oʻtishini tekshiring. |
| "Bu obyektni kesib boʻlmaydi." | Kesish chiziqlar, yoylar, aylanalar va polichiziqlarda ishlaydi. | Avval bloklarni parchalang yoki oʻchirib qayta chizing. |
| "Bu yoʻnalishda chegara yoʻq." | {{cmd:EXTEND}} yetadigan hech narsa topmadi. | Oʻsishi kerak boʻlgan uchga yaqinroq tanlang. |
| "Bu obyektni surib boʻlmaydi." | Surish chiziqlar, yoylar, aylanalar va polichiziqlarda ishlaydi. | Avval parchalang yoki parallel chiziq chizing. |
| "Bu masofaga surib boʻlmaydi." | Surish shaklni ichki tomonga aylantirib yuboradi. | Kichikroq masofadan foydalaning. |
| "Radius juda katta." yoki "Masofa juda katta." | Yumaloqlash yoki faska chiziq uchidan oʻtib ketadi. | `R` bilan kichikroq radius yoki `D` bilan kichikroq masofalarni belgilang. |
| "Ochiq polichiziqning faqat birinchi yoki oxirgi segmentini qaytarib kesish mumkin." | Burchak polichiziqning oʻrtasiga kirib ketadi. | Polichiziqning bir-birining yonidagi ikki segmentini tanlang yoki har bir burchak uchun `P` dan foydalaning. |
| "Ikkinchi, boshqa chiziqni tanlang." | Ikkinchi tanlov xuddi shu chiziq yoki chiziq emas edi. | Boshqa chiziqni tanlang. |
| "Faqat polichiziqlar, blok havolalari va oʻlchamlar parchalanadi." | Tanlovda parchalanadigan narsa yoʻq edi. | Polichiziq, blok havolasi yoki oʻlchamni tanlang. |
| "Bu joriy qatlam. Avval boshqa qatlamni joriy qiling." | Siz joriy qatlamni oʻchirmoqchi boʻldingiz. | Boshqa qatlam nomini bosing, keyin bu qatlamni oʻchiring. |
| "… nomli qatlam allaqachon bor." | Qatlam nomlari takrorlanmasligi kerak. | Boshqa nom tanlang. |
| "Bekor qilish uchun hech narsa yoʻq." | Bekor qilish uchun hech narsa qolmagan yoki chizmani ochdingiz yoki boshladingiz (bu tarixni tozalaydi). | — |

## Oʻlchamlar va bloklar

| Xabar yoki belgi | Sababi | Yechimi |
|---|---|---|
| Oʻlcham matni va oʻqlari juda kichik yoki juda katta | Oʻlchamlar chizma birliklarida; umumiy masshtab chizmaga mos kelmaydi. | {{cmd:DIMSCALE}} ni chop etish masshtabiga oʻrnating; qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings). |
| "Oʻlchamoqchi boʻlgan burchak ichidagi nuqtani tanlang." | Burchakli oʻlchamning joyi burchak tomonida turibdi. | Burchak ichini bosing. |
| "Bu chiziqlar parallel." | Parallel chiziqlar orasida burchak yoʻq. | Kesishadigan ikki chiziqni tanlang. |
| "Chiziqli yoki tekislangan oʻlchamni tanlang." | {{cmd:DIMCONTINUE}} yoki {{cmd:DIMBASELINE}} boshlanish uchun bittasini talab qiladi. | Chiziqli yoki tekislangan oʻlchamni tanlang. |
| "Bu chizmada hali bloklar yoʻq: F faylidan, L kutubxonadan qoʻshadi …" | Chizmada oʻz bloklari yoʻq. | `F` yoki `L` ni yozing yoki {{cmd:BLOCK}} bilan blok yarating. |
| "… nomli blok yoʻq." | Nom notoʻgʻri. | Xabarda mavjud bloklar roʻyxati koʻrsatiladi. |
| "Blok nomi * bilan boshlanishi yoki … dan foydalanishi mumkin emas" va belgilar roʻyxati | Nomda bloklar ishlata olmaydigan belgi bor. | Harflar, raqamlar, `-` va `_` dan foydalaning. |
| "Blok oʻzini oʻz ichiga ololmaydi." | Tanlovda yaratilayotgan blokka havola bor. | Bu havolani chiqarib tashlang. |
| "Obyektlar tanlanmadi; hech narsa yaratilmadi." | Tanlashdan oldin {{key:Enter}} ni bosdingiz. | {{cmd:BLOCK}} ni qayta ishga tushiring va obyektlarni tanlang. |

## Varaqlar va chop etish

| Xabar yoki belgi | Sababi | Yechimi |
|---|---|---|
| "Koʻrinish oynalari maketga qoʻyiladi. Avval maket varagini oching (yoki LAYOUT bilan yarating)." | {{ui:Model}} varagida {{cmd:MVIEW}}. | Avval varaq yorligʻini bosing. |
| "Avval koʻrinish oynasi bilan maketni oching." | {{ui:Model}} varagida {{cmd:VPVIEW}}. | Avval varaq yorligʻini bosing. |
| Koʻrinish oynasi masshtabi oʻn marta notoʻgʻri koʻrinadi | Chizma birliklari notoʻgʻri. | {{ui:Joriy sozlamalar}} da {{ui:Birliklar}} ni oʻrnating. |
| "Hali chop etish uchun hech narsa yoʻq." | Model boʻsh. | Biror narsa chizing yoki chizma oching. |
| "Chop etish uchun oynani tanlang." | {{ui:Oyna…}} tanlangan, lekin oyna tanlanmagan. | {{ui:Tanlash}} ni bosing va ikki burchakni tanlang. |
| "… qogʻozdan kattaroq: chetlari kesiladi." | Maydon bu masshtabga sigʻmaydi. | Kichikroq masshtab, kattaroq qogʻoz yoki {{ui:Qogʻozga moslash}} ni tanlang. |
| "Brauzer yangi varaqni bloklagan, shuning uchun PDF oʻrniga yuklab olindi." | Sayt uchun qalqib chiquvchi oynalar bloklangan. | Yuklab olingan PDF ni oching yoki sayt uchun qalqib chiquvchi oynalarga ruxsat bering. |
| Belgilar "?" koʻrinishida chop etiladi | PDF shriftlarida ularning harfi yoʻq (kam uchraydigan ideogrammalar, hind va murakkab shakllantirishni talab qiladigan boshqa yozuvlar, …), yoki kattaroq shriftni yuklab boʻlmadi (oflaynda). Yevropa yozuvlari, kirill, yunon, ibroniy, arab, fors, urdu, tay, xitoy, yapon va koreys belgilari oʻzidek chop etiladi. | Arab yozuvi, tay, xitoy, yapon yoki koreys uchun ulanish bilan qayta chop eting. Boshqa yozuvlar hali tayyorlanmagan. |
| PDF da yordamchi chiziqlar koʻrinadi | Ularning qatlami chop etiladi. | Qatlamning printer tugmasini bosing. |
| Barcha chiziqlar bir xil qalinlikda | Ularning chiziq qalinligi {{ui:Standart}}, shuning uchun dialogdagi qalam kengligida chop etiladi. | Oʻng panelda qatlamlar yoki obyektlarga {{ui:Chiziq qalinligi}} bering yoki dialogda {{ui:Chiziq qalinligi}} ni tanlang. Ekranda chiziq qalinligini koʻrish uchun holat satridagi {{ui:LWT}} ni bosing. |

## Tugmalar va ekran

| Belgi | Sababi | Yechimi |
|---|---|---|
| F3, F7 yoki F8 ovozni oʻzgartiradi yoki Mission Control ni ochadi | Mac funksiya tugmalari. | **fn** ni ushlab turing yoki holat satridagi tugmalardan foydalaning. Qarang: [Tugmalar, sichqonchalar va trackpadlar](common:keys). |
| F7 karetka rejimi haqida soʻraydi | Firefox ning oʻz F7 dan foydalanishi. | Yoʻq ni tanlang; {{ui:Setka}} tugmasidan foydalaning. |
| {{key:Mod+N}} brauzer oynasini ochdi | Brauzer bu tugmani oʻzida saqlaydi. | {{ui:Yangi}} ni bosing yoki `NEW` ni yozing. |
| {{key:Mod+A}} buyruq satridagi matnni tanladi | Buyruq satrida kursor bor edi. | Avval obyektni bosing yoki `Obyektlarni tanlang` soʻrovida `ALL` ni yozing. |
| {{key:Delete}} oʻchirmaydi | Buyruq satrida kursor bor edi. | `E` ni yozing va {{key:Enter}} ni bosing. |
| Mac trackpadda oʻng tugma hech narsa qilmaydi | Control-bosish oddiy bosish sifatida hisoblanishi mumkin. | Ikki barmoq bilan bosing. |
| Trackpadda hech narsa surilmaydi | Oʻrta tugma yoʻq va {{key:Space}} surmaydi. | Ikki barmoq bilan suring: 2D koʻrinish suriladi (chimdash va sichqoncha gʻildiragi kattalashtiradi). Yoki oʻng tugmani bosib ushlab sudrang. |
| Birinchi {{key:Esc}} toʻliq ekrandan chiqardi | Brauzer toʻliq ekrandan chiqish uchun Esc dan foydalanadi. | Buyruqni bekor qilish uchun {{key:Esc}} ni yana bosing. |
| F1 Mac da hech narsa qilmaydi | F1 yorqinlik tugmasi. | **fn** ni ushlab turing yoki {{ui:Yordam}} ni bosing. |
| Yozganingiz yordamning qidiruv maydoniga tushadi | Yordam panelida kursor bor. | Chizmani bosing. |
| Chizma boʻsh boʻlib qoldi | Siz juda uzoqqa kattalashtirdingiz. | {{ui:Hammasini koʻrsatish}} ni bosing yoki gʻildirakni ikki marta bosing. |
| Varaqni yopganda "Saytdan chiqilsinmi?" | Saqlanmagan oʻzgarishlar bor. | Qoling, {{key:Mod+S}} bilan saqlang, keyin yoping. |
