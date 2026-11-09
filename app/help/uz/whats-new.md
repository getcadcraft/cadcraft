---
title: 0.8 va 0.8.1 dagi yangiliklar
summary: Chizmangizni yakunlaydigan shabah, qalam eskizlari va eskiz fotosuratlari geometriyaga aylanadi, oʻzi joylashadigan varaqlar, chizish vaqtida taklif qilinadigan detallar, GRIDMOVE va AUTODIM, teglar, birlashtirishga qulay fayllar, belgilashlar revizionlarga aylantirilishi, koʻrmasdan chizish, chizma chegaralari, yoʻnalishlar, SHX shriftlari, matndan diagrammalar va 0.8.1 dagi tuzatishlar.
keywords: yangiliklar, nima yangi, relizlar, eslatmalar, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, avtotoʻldirish, shabah, tab, sketchfix, photosketch, autosheet, detallar, gridmove, autodim, teglar, revizion, birlashtirish, git, fossil, kirish, koʻrmasdan chizish, ekran oʻquvchi, chegaralar, yoʻnalishlar, aunits, shx, diagramma, ole, tarix, taqqoslash, soʻzlar bilan, xususiyatlar, futlar va dyuymlar, choʻzish, tillar, kiritish qurilmalari, muammolar, jonli, yordamchilar
from: 9dd82db5
---

Bu CadCraft 0.8 va 0.8.1 da, 0.7 bilan solishtirganda, nimalar oʻzgarganini koʻrsatadi. 0.8 (2026-yil 1-noyabr) oʻz chizmangizdan ishlaydigan chizish yordamchilarini qoʻshadi — qoidalar boʻyicha, kompyuteringizda va hech qanday modelsiz; 0.8.1 (2026-yil 2-noyabr) undan keyin xabar qilingan xatolarni tuzatadi.

## Yangi

### Chizma fikringizni yakunlaydi

- **Shabah keyingi qadamni koʻrsatadi.** Hech qanday buyruq ishlamayotganda, kulrang punktir shabah chizmangizning oʻz naqshlari keyingi nima boʻlishi kerakligini koʻrsatadi: bir xil oraliqdagi keyingi ustun, zinaning keyingi pogonasi, xonaning yetishmayotgan devori. Uni bitta ortga qaytarish qadami sifatida chizish uchun {{key:Tab}} tugmasini, rad etish uchun {{key:Esc}} tugmasini bosing. U faqat eng yangi obyektlarni tekshiradi, shuning uchun katta chizmada ham silliq ishlaydi. Uni {{ui:Sozlamalar}} › {{ui:CadCraft}} boʻlimida yoki {{cmd:AUTOCOMPLETE}} `Off` buyrugʻi bilan oʻchiring.
- **Chiziq chizayotganda keyingi nuqta.** {{cmd:LINE}} yoki {{cmd:PLINE}} davomida shabah keyingi nuqtani koʻrsatadi: zinaning keyingi pogonasi, toʻrtburchakning toʻrtinchi burchagi yoki uni yopadigan nuqta. Kursorni unga yaqin olib boring va {{key:Tab}} tugmasini bosing, xuddi oʻsha yerni bosgandek.
- **Qalam eskizlari aniq geometriyaga aylanadi.** {{cmd:SKETCHFIX}}: qalam, sichqoncha yoki barmoq bilan qoʻpol chiziqlar chizing — har biri toza chiziq, aylana, yoy, toʻrtburchak yoki polichiziqqa aylanadi va allaqachon chizilganlarga tutashtiriladi. Qarang: [Qalam bilan eskiz chizing va aniq geometriya oling](topic:sketch-with-a-pen).
- **Eskiz fotosurati chizmaga aylanadi.** {{cmd:PHOTOSKETCH}} (`PSK`) fotosuratdagi qogʻozni topadi, perspektivani tekislaydi, siz bergan qogʻoz oʻlchami va masshtabni qoʻllaydi hamda har bir qalam rangi uchun qatlamga qalam chiziqlarini koʻchiradi. Yozuvlar koʻchirilmaydi.
- **Qoidalar boʻyicha oʻlchamlang.** {{cmd:AUTODIM}} (`ADIM`) tanlagan tomonlar boʻylab oʻlchamlar zanjirini, umumiy oʻlchamni, teshiklar ochilishi kengliklarini, teshik diametrlarini va `Grid` bilan toʻr oraliqlarini yaratadi. U allaqachon mavjud oʻlchamni hech qachon takrorlamaydi.
- **Toʻr chizigʻini suring — toʻplam ergashadi.** {{cmd:GRIDMOVE}} (`GM`): toʻr chizigʻida tugaydigan devorlar u bilan birga choʻziladi, uning boʻylab joylashgan devorlar, ustunlar, uning belgi doirasi va tegi koʻchadi, uning ustidagi oʻlchamlar yangi oraliqni oʻlchaydi. Bitta ortga qaytarish qadami.

### Varaqlar, detallar va teglar

- **Varaqlar oʻzi joylashadi.** {{cmd:AUTOSHEET}} nomlangan koʻrinishlaringizni (yoki modelning alohida qismlarini) oladi, qogʻoz oʻlchamini va standart masshtabni tanlaydi hamda koʻrinishlarni sarlavha bloki va nom-masshtab yozuvi bilan yangi varaqlarga joylashtiradi. Hammasi tahrirlanadigan boʻlib qoladi. Qarang: [Varaqlarni men uchun joylashtiring](topic:lay-out-sheets-for-me).
- **Firmangizning detallari — chizish vaqtida taklif qilinadi.** {{cmd:DETAILS}} (`DET`) sizning oʻz detal bloklaringizni saqlaydi. Tanlagan narsangiz qatlamlaridagi soʻzlar, blok nomlari va izohlar boʻyicha biriga mos kelsa, holat satrida shu haqda aytiladi; uni tanlang va joylashtiring. {{cmd:DETAILS}} › Ulashish ro‘yxatingizni Hujjatlar jildiga qoʻyadi va jamoangiz qoʻshgan narsalarni olib keladi. {{ui:Sozlamalar}} takliflarni oʻchiradi.
- **Bloklardagi teglar.** {{cmd:TAGS}} tegni belgilaydi (uning turi, qabul qilishi mumkin boʻlgan qiymatlar, tegishli bloklar), uni tanlangan blok havolalariga oʻrnatadi va ularni CSV sifatida saqlash mumkin boʻlgan jadval koʻrinishida sanab beradi. Taʼriflar DWG faylida saqlanadi. Qarang: [Teglar](topic:tags).
- **Chizma chegaralari.** {{cmd:LIMITS}} chizma uchun toʻrtburchak belgilaydi: toʻr uni toʻldiradi, Kattalashtirish: Hammasi uni koʻrsatadi. Chegaralar kontur sifatida koʻrinadi va qogʻoz chegaralari bilan birga DWG va DXF formatlarida saqlanadi. Qarang: [Chizma chegaralarini belgilang](topic:drawing-limits).

### Boshqa odamlar va boshqa dasturlar bilan ishlash

- **Belgilashni revizionga aylantiring.** {{cmd:REDLINE}} MarkupCraft dasturi yozadigan paketni oʻqiydi va har bir oʻzgarishni sanab beradi. Har birini izoh bilan qabul qiling yoki rad eting; qabul qilinganlar bitta ortga qaytarish qadamida revizion buluti va revizion jurnaliga ega boʻladi, shuningdek MarkupCraft dasturidagi belgilashlarni yopadigan javoblar faylini saqlaysiz. Qarang: [Belgilashni revizionga aylantiring](topic:redline-to-revision).
- **git va Fossil birlashtira oladigan chizmalar.** {{ui:Birlashtirishga qulay fayllar}} {{ui:Sozlamalar}} › {{ui:CadCraft}} boʻlimida yoqilganda, har bir obyektga hech qachon oʻzgarmaydigan kalit beriladi (fayllar taxminan 10 foizga kattaroq boʻladi). `cadcraft merge base ours theirs` buyrugʻi ikki kishining bitta DWG yoki DXF obyektidagi tahrirlarini obyekt boʻyicha birlashtiradi va faqat ikki kishi bir narsani oʻzgartirgan joylarni xabar qiladi. Qarang: [Bitta chizmadagi ikki kishining tahrirlarini birlashtiring](topic:merge-drawings).
- **Nima oʻzgargani, soʻzlar bilan.** Tarix boʻlimida Taqqoslash oddiy roʻyxat beradi: qayerda narsalar oʻzgargani, joylarning qanchalik katta ekani, nima qoʻshilgani, oʻchirilgani yoki oʻzgartirilgani va tahrirlangan matn. Qarang: [Nima oʻzgarganini soʻzlar bilan ayting](topic:changes-in-words).
- **Yoʻnalishlar va burchaklar.** Yoʻnalishni geodezistning yoʻnalishi koʻrinishida, masalan N45°23'30"E, yoki gradus, daqiqa va soniyalarda kiriting — burchak soʻralgan har qanday joyda; AUNITS burchaklar qanday koʻrsatilishini belgilaydi. Qarang: [Yoʻnalish va burchaklarni kiriting va koʻrsating](topic:bearings-and-angles).
- **Oʻz SHX shriftlaringiz.** CadCraft dasturiga SHX shriftlari papkasini bering — ularni nomlaydigan matn uslublari ekranda va chop etishda shu shriftlarda chiziladi. Qarang: [SHX shriftlarida matn chizing](topic:shx-fonts).
- **Matndan diagramma.** {{cmd:DIAGRAM}} Mermaid oqim diagrammasi, PlantUML komponent diagrammasi, D2 yoki dan-gacha roʻyxatini oʻqiydi va tahrirlanadigan bloklar hamda bogʻlovchilarni chizadi. Qarang: [Matndan diagramma chizing](topic:text-to-diagram).
- **DWG dagi OLE obyektlari.** {{cmd:OLELIST}} DWG tarkibidagi, CadCraft oʻzi joylashtira olmaydigan OLE obyektlarini sanab beradi va rasm nusxasini siz aytgan joyga joylashtiradi. Qarang: [Rasmlar](topic:pictures#objects-from-other-programs-ole).
- **Hisob-kitoblaringiz chizma bilan birga qoladi.** Hisob varaqlari va loyiha asoslari sinf jadvali bilan birga DWG faylida saqlanadi.

### Koʻrmasdan chizish

- {{ui:Sozlamalar}} boʻlimida {{ui:Koʻrmasdan chizish}} ni yoqing (yoki {{cmd:ACCESS}} buyrugʻini yozing va `On` deb javob bering). CadCraft har bir buyruq va natijani ekran oʻquvchingiz orqali aytib beradi, chizmani va kursor yaqinidagi narsalarni tasvirlaydi, kursorni klaviatura bilan siljitish va nuqtalarni tanlash imkonini beradi hamda har bir tutish va ushlagich uchun ovoz chiqaradi. Brauzeringiz kompyuteringizdagi nutqni taniy oladigan joylarda buyruqlarni ovoz bilan aytish mumkin. Qarang: [Koʻrmasdan chizish](topic:draft-without-sight).

### Har bir ilovada

- **Tillar.** 54 ta til; oʻnta yangi (litva, latviya, bosniya, marathi, telugu, alban, afrikaans, filippin, suaxili, oʻzbek). Ingliz tilidan tashqari tillar ona tilida soʻzlovchi tomonidan oʻqilmaguncha mashina qoralamalari hisoblanadi.
- **Kiritish qurilmalari.** Sensorli panel, qalam, 3D sichqoncha, oʻyin kontrolleri va MIDI boshqaruvlari.
- **Asboblar paneli qatorlari va xususiyatlar jadvali.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} boshqa ilovalarda Oʻrash, 2 qator yoki 1 qator variantlarini taklif qiladi. CadCraft oʻz sozlamasini {{ui:Sozlamalar}} › {{ui:CadCraft}} boʻlimida saqlaydi (qarang: [Asboblar paneli qatorlari](topic:settings#toolbar-rows)). Umumiy xususiyatlar jadvali uchta boshqa ilovada bor, CadCraft dasturida emas.
- **Muammolar, Jonli va qoʻshimchalar.** Har bir ilovada ogohlantiruvchi umumiy Muammolar paneli, CadCraft Studio dasturidagi Jonli koʻrinish (qarang: [Bitta chizma ustida birgalikda ishlang](topic:work-live)) va qoʻshimchalar roʻyxati.
- **Sunʼiy intellektingizni ulang.** CadCraft Studio dasturidan barcha sakkiz ilovaga bitta ulanish, har bir ilova uchun faqat oʻqish, taklif qilish yoki tahrirlash darajasi va yordamchi nima qilgani haqida oddiy soʻzlardagi jurnal. CadCraft dasturining oʻz sunʼiy intellekti yoʻq; har bir ilovadagi Soʻrash esa siz ulagan sunʼiy intellektdan foydalanadi.

## 0.8.1 da tuzatilgan

- **Xususiyatlarda 12'-6" oʻrniga 150 koʻrsatilgan edi** futlar va dyuymlardagi chizmalarda. Ilova oʻzi oʻqiydigan maydonlar yana oʻz matnini saqlaydi.
- **Sinflar boʻlimi notoʻgʻri tur sifatida oʻqilgan DWG fayllar** (GitHub cadcraft#5) endi toʻgʻri ochiladi.
- **Kursor endi qalqib chiquvchi oynalar orqasida koʻrinmaydi.**
- **Studio va oʻralgan nashrlar ish vaqtida tilni almashtira oladi.** Oldin faqat ingliz tilida edi. Hamma platformada hali sinovdan oʻtmagan: til oʻzgarmasa, bizga xabar bering.
- **Portret rejimdagi planshetlar** toʻr balandligining ortiqchasini chiziq maydoniga beradi, varaqlar rejimi esa 760 px yoki undan kichik boshlanadi.
- **Kesishuvchi oyna bilan STRETCH va LIMITS** Studio 0.8.0 da xabar qilingan edi, lekin 0.8 veb-versiyasida ular allaqachon toʻgʻri edi; xabar bergan kishining oʻrnatuvchisi eskiroq edi. Studio 0.8.1 ularni oʻz ichiga oladi.

## Bu versiyada hali yoʻq

- **0.8 va 0.8.1 kod imzosiga ega emas.** Windows ogohlantirishi mumkin (tanlang {{ui:Batafsil maʼlumot}}, keyin {{ui:Baribir ishga tushirish}}); Mac kompyuterida CadCraft Studio ustiga oʻng tugma bilan bosing va {{ui:Ochish}} ni tanlang. Store nashrlari toʻxtatilgan, iPad va iPhone nashri esa 0.8.1 uchun qayta yigʻilmagan.
- **Qalam eskizlari va eskiz fotosuratlari** faqat yasama fotosuratlarda va sichqoncha bilan sinab koʻrilgan, hali haqiqiy qalam, sensorli ekran yoki qogʻozdagi qoʻl eskizi bilan emas.
- **Koʻrmasdan chizish** avtomatik tekshiruvlar bilan sinovdan oʻtgan, ekran oʻquvchisi yoki koʻrmaydigan sinovchi bilan hali emas.
- **Tafsilotlarni ulashish** ikki kishilik tekshiruvdan oʻtmagan, Hujjatlar jildi sifatida Team Cloud Plan jildi esa hali qurilmagan.
- **Birlashtirish** CadCraft dasturining DWG va DXF fayllari bilan ishlaydi; boshqa ilovalar fayllari uchun u hali qurilmagan.
- **Oynalar boʻylab bekor qilish:** CadCraft har bir tugallangan qadamni xabar qiladi, lekin Studio hali barcha ilovalar uchun yagona Ortga qaytarish ga ega emas; har bir ilova oʻz qadamlarini bekor qiladi.
- **DWG dagi OLE obyektlari** saqlanadi, lekin joyida chizilmaydi.
- **Boshqa dasturlardan chop etish uslublari jadvallari (CTB fayllari)** oʻqish uchun qurilgan, lekin boshqa dasturning fayli bilan tekshirilmagan.
- **Sunʼiy intellektingizni ulang:** Studio ichida bir tugmali ulanish, brauzer sunʼiy intellekti uchun xostlangan konnektor, Studio ichidagi oʻz API kalitingiz va nashr etilgan MCP paketi bu relizda kafolatlanmagan.

Bundan oldingi versiya haqida qarang: [0.7 da nima yangi](topic:whats-new-0-7).
