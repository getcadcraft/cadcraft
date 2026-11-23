---
title: 0.9 versiyasidagi yangiliklar (oldingi)
summary: Chegarasiga ergashadigan shtrixlashlar, qatlamlar guruhlari, ustma-ust qavatlar, eshik va derazali 2D aqlli devorlar, matn uslublari va formatlangan matn muharriri, suzuvchi buyruq satri, setkaga ilashish, oʻn xil yoy usuli va Hujjatlar paneli.
keywords: 0.9 versiyasi yangiliklari, oldingi versiya, yangiliklar, 0.9, reliz eslatmalari, oʻzgarishlar jurnali, shtrixlash, chegaraga bogʻlangan shtrixlash, hatchedit, pat fayl, naqsh fayli, qatlam guruhlari, laygroup, qavatlar, ustma-ust qavatlar, floorlayers, aqlli devorlar, devor, eshik, deraza, devor asboblari, matn uslubi, uslub, mtext muharriri, abzats matni, formatlash, suzuvchi buyruq satri, buyruq satri, yuqori soha, ixcham, setkaga ilashish, grid snap, f9, yoy, hujjatlar paneli, check out, Buyuk Britaniya poʻlat oʻlchamlari, draw.io, tay matni, dxf r12, yangiliklar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, avtotoʻldirish, shabha, tab, sketchfix, photosketch, autosheet, detallar, gridmove, autodim, teglar, qizil chiziq, birlashtirish, git, fossil, access, koʻrmasdan chizish, ekran oʻquvchisi, chegaralar, burchaklar, aunits, shx, diagramma, ole, tarix, solishtirish, soʻzlarda, xossalar, fut va dyuym, choʻzish, tillar, kiritish qurilmalari, muammolar, jonli, yordamchilar
from: 3451e64c
---

Bu CadCraft 0.9 da, 0.8.1 bilan solishtirganda, nima oʻzgarganini koʻrsatadi. CadCraft 0.9 CadCraft Studio 0.9 va uning sakkizta ilovasining 2D va 3D chizish ilovasi. 0.9 reja chizmachiligini yakunlaydi, matn uslublari va haqiqiy matn muharririni qoʻshadi va ekranda koʻproq joy beradi.

## Yangi

### Reja chizmachiligi

- **Chegarasiga ergashadigan shtrixlashlar.** {{cmd:HATCH}} oʻzini chegaralagan narsaga bogʻlaydi. Chegarani koʻchirsangiz, buring yoki masshtablang — shtrixlash va uning naqshi ergashadi; uni qayta shakllantirsangiz, shtrixlash qayta hisoblanadi. {{cmd:HATCHEDIT}} (`HE`) shtrixlashni keyin oʻzgartiradi va bogʻlanishni yaratadi yoki tugatadi. Qarang: [Shtrixlash va toʻldirish sohalari](topic:hatch).
- **Shtrixlash naqsh fayllari.** {{cmd:HATCH}} soʻrovida `Ichki nuqtani koʻrsating` da `F` (Naqsh fayli) ni yozing va `.pat` faylni tanlang. Faqat odatdagi formatda yozilgan fayllar sinab koʻrilgan.
- **Qatlam guruhlari.** {{ui:Qatlamlar}} panelidagi {{ui:Vositalar}} da: {{ui:Yangi guruh}}, {{ui:Tayyor guruhlarni qoʻshish}}, {{ui:Nom boʻyicha guruhlash}} va {{ui:Qatlamni topish}}; yoki {{cmd:LAYGROUP}} (`LG`) ni yozing. Qarang: [Chizmani qatlamlar bilan tartiblash](topic:layers#group-layers).
- **Ustma-ust qavatlar.** {{cmd:FLOORS}} (`FLR`), yoki {{ui:Koʻrinish}} guruhining {{ui:Koʻproq}} menyusidagi {{ui:Qavatlar…}}. Varaqdagi koʻrinish oynasi {{ui:Xossalar}} dagi {{ui:Koʻrsatilgan qavat}} ostida bitta qavatni koʻrsatishi mumkin. {{cmd:FLOORLAYERS}} qavatlarni boshqa odamga yuboriladigan fayl uchun qatlamlarga aylantiradi. Qarang: [Bitta chizmada qavatlarni joylashtirish](topic:floors).
- **2D aqlli devorlar, eshiklar va derazalar.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) va {{cmd:DELOPENING}}. Burchaklar, T birikmalar va kesishmalar siz uchun hisoblanadi. Devorlar birikishlari yozuvini saqlaydi, va Xossalarda Boshida birlashtirishga ruxsat bermaslik / Oxirida birlashtirishga ruxsat bermaslik, Joylashuv chizigʻi va tahrirlanadigan Uzunlik paydo boʻladi. Qarang: [2D devorlar, eshiklar va derazalarni chizish](topic:walls-2d).
- **Reja devorlari uchun devor asbobi.** {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} va qolganini yozing. Ularning hali asboblar paneli tugmalari yoʻq. Qarang: [2D devorlar uchun devor shakllari, kesishlar, siljishlar va qulflar](topic:wall-tools-2d).

### Matn

- **Matn uslublari.** {{cmd:STYLE}} (`ST`), yoki {{ui:Chizish}} asboblar panelidagi {{ui:Matn uslubi}}: nomlangan uslublar shrift, balandlik, kenglik koeffitsienti va qiyalik bilan. Qarang: [Matn uslublari bilan matnning shrifti va oʻlchamini belgilash](topic:text-styles).
- **Formatlangan abzats matn muharriri.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} yoki matnni ikki marta bosish shrift, oʻlcham, qalin, kursiv, tagiga chizilgan, ustidan chizilgan, rang, tekislash, shuningdek daraja, plyus-minus va diametr belgilari bilan katakchani ochadi, hamda {{ui:OK}} va {{ui:Bekor qilish}} bilan. Qarang: [Abzats matnini formatlash](topic:format-paragraph-text).
- **draw.io XML dan diagramma.** {{cmd:DIAGRAM}} (`T2D`) joylashtirilgan draw.io XML ni ham oʻqiydi. Qarang: [Matndan diagramma chizish](topic:text-to-diagram).
- **PDF chop etishda tay matni.** Oldin u soʻroq belgilari boʻlib chop etilardi.

### Koʻproq joy va chizish yordamchilari

- **Suzuvchi, ingichkaroq buyruq satri va ixcham yuqori soha.** Buyruq satrining tutqichini sudrab uni suzdiring, yuqori chetini sudrab qatorlarni kamaytiring, {{key:F2}} tarixni ochadi. {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Buyruq satri}} va yuqori soha tanlovlari bir xil sozlamalarga ega. Qarang: [Sozlamalar](topic:settings#command-line).
- **Obyektga ilashish menyusi.** Holat satridagi {{ui:Ilashish}} ustida oʻng tugmani bosing, yoki {{cmd:OSNAP}} ni yozing.
- **Setkaga ilashish.** Holat satridagi {{ui:Setkaga tutish}} tugmasi yoki {{key:F9}}: tanlangan nuqtalar hech bir obyektga ilashish nuqtani olmagan boʻlsa, eng yaqin setka nuqtasiga boradi.
- **Yoy oʻn xil usulda va Davom ettirish.** {{ui:Yoy}} {{ui:Chizish}} asboblar panelida yoki {{cmd:ARC}}: 3 nuqta boʻyicha, Boshlanish/Markaz/Oxir oilasi va Markaz/Boshlanish/Oxir oilasi, va Davom ettirish (boshlangʻich nuqtada {{key:Enter}}) oxirgi chiziq, yoy yoki polichiziqdan.
- **Hujjatlar paneli.** {{cmd:DOCUMENTS}} (`DOCS`), yoki {{ui:Koʻrinish}} guruhining {{ui:Koʻproq}} menyusidagi {{ui:Hujjatlar…}}: loyiha jildidagi har bir chizma uchun revizya, holat va olish. U markazlashgan dialog sifatida ochiladi. Qarang: [Hujjatlar](topic:documents).

### Fayllar

- **Buyuk Britaniya poʻlat oʻlchamlari.** Standart panelda 976 ta profil, chizmalarda yozilgandek yoziladi (masalan `305x165x40 UB`).
- **Janubiy Afrika toʻplamlari** (chizmachilik amaliyoti va qurilish qoidalari) Qurilish qoidalari qoʻshimchasining toʻplamlari sifatida. Raqamlar tasdiqlanmagan.
- **CadCraft uchun qoʻshimchalar,** talab boʻyicha qoʻshiladi va standart holatda oʻchiq: ichki yoritish dizayni, chip dizayni (HDL dan joylashuvgacha), router bilan oʻymakorlik, zanjir simulyatsiyasi, roliklar zanjiri yulduzchalari va Qurilish qoidalari mamlakat toʻplamlari.

## Tuzatilgan

- Shtrixlashni koʻchirish, burish yoki masshtablash naqshini orqada qoldirardi.
- {{cmd:GRIDMOVE}} faqat setka chizigʻida boshlanadigan butun reja devorini olib ketardi. Endi devor uchlari boʻyicha baholanadi.
- Chegaralar oʻchiq boʻlsa ham, setka faqat chizma chegaralari ichida koʻrinardi.
- Yon panelidagi bloklar roʻyxati aylanadi va bu nom bloklardan birortasi emas boʻlsa, u shu nom bilan boshlanadigan bloklarni koʻrsatadi (“Shuni nazarda tutdingizmi”).
- “Unknown group 1001 for table” xatosi bilan AutoCAD ochmagan DXF R12 fayllar endi shu yerda ochiladi.
- Juda katta fayllar (taxminan 70 000 obyekt va undan koʻp) “Maximum call stack size exceeded” bilan ochilmasdi.
- 2018 va undan keyingi AutoCAD DWG fayllari yuqori texnik xizmat versiyasi bilan “bad BITLONG code 11” bilan ochilmasdi.
- Abzats matni katagida tanlangan qism uchun yozilgan yangi oʻlcham tanlovni saqlaydi.

## Har bir ilovada

Yordam bilan har bir boshqaruv uchun Bootstrap maslahatlari, yopish mumkin boʻlgan boshlangʻich maslahat, sigʻmaydigan yorliq qatorlari aylanadigan yorliqlar va brauzer yorligʻining sarlavhasi ochiq chizmani kuzatadi (`<drawing> - CadCraft | CadCraft`). {{ui:Sozlamalar}} › {{ui:Maket}} endi ikki qatorli tanlovlarning ochiladigan roʻyxati. {{ui:Sozlamalar}} dagi til roʻyxati 0.8 versiyasidagidan uzunroq. Jonli birgalikda tahrirlash, Kutubxona toʻplamlari, va vazn va harorat birliklari Studio izohlarida tasvirlangan.

## Haqiqiy cheklovlar

- Abzats matnida belgilangan yoki raqamlangan roʻyxatlar, tabulyatsiya chizgʻichi yoki tekislash yoʻq. Chop etilgan PDF lar matnni Helvetica da teradi.
- Reja devorlari toʻgʻri, shuning uchun yoy qisqa devorlar sifatida chiziladi. Devor asbobining jamoaviy qoʻl tekshiruvi kutilmoqda.
- Qatlam guruhlari AutoCAD ning oʻz formatida yozilmaydi, shuning uchun AutoCAD ularni tekis roʻyxat sifatida koʻrsatadi. Boshqa dasturlar {{cmd:FLOORLAYERS}} ni ishga tushirmasangiz, barcha qavatlarni birga koʻrsatadi.
- Hujjatlar paneli haqiqiy umumiy papkada ikki kishi tomonidan sinab koʻrilmagan. Router bilan oʻymakorlik haqiqiy kompyuterda ishlamagan. Yoritish hisobi boshqa dastur emas, fotonli iz bilan tekshirilgan. Muhandislik qoʻshimchalari muhandis koʻrib chiqishining oʻrnini bosmaydi, balki tekshirish vositalari.
- Ingliz tilidan boshqa tillar mashina tarjimasi (qoralama); yangi soʻzlarning baʼzilari faqat inglizcha.

## Oldingi: 0.8 va 0.8.1

Bu CadCraft 0.8 va 0.8.1 da, 0.7 bilan solishtirganda, nima oʻzgarganini koʻrsatadi. 0.8 (2026-yil 1-noyabr) chizmangizdan ishlaydigan chizma yordamchilarini qoʻshadi — qoidalar boʻyicha, kompyuteringizda va modelsiz; 0.8.1 (2026-yil 2-noyabr) undan keyin xabar qilingan xatolarni tuzatadi.

### Yangi

**Chizma sizning fikringizni tugatadi**

- **Shabha keyingi narsani koʻrsatadi.** Hech qanday buyruq ishlamayotganda, kulrang punktir shabha chizmangizning oʻz naqshlari nima keyin kelishini koʻrsatadi: bir xil qadamdagi keyingi ustun, zinapoyaning keyingi bosqichi, xonaning yoʻqolgan devori. Uni bir ortga qaytarish qadamida chizish uchun {{key:Tab}} ni bosing yoki uni yopish uchun {{key:Esc}} ni bosing. U faqat eng yangi obyektlarga qaraydi, shuning uchun katta chizmada ham silliq qoladi. Uni {{ui:Sozlamalar}} › {{ui:CadCraft}} da yoki {{cmd:AUTOCOMPLETE}} `Off` bilan oʻchiring.
- **Chiziq chizayotganda keyingi nuqta.** {{cmd:LINE}} yoki {{cmd:PLINE}} oʻrtasida shabha keyingi nuqta boʻladi: zinapoyaning keyingi bosqichi, toʻrtburchakning toʻrtinchi burchagi yoki uni yopadigan nuqta. Kursorni unga yaqin olib boring va {{key:Tab}} ni bosing, xuddi shu joyda bosgandek.
- **Qalam eskizlari aniq geometriyaga aylanadi.** {{cmd:SKETCHFIX}}: qoʻpol chiziqlarni qalam, sichqoncha yoki barmoq bilan chizing va har biri toza chiziq, aylana, yoy, toʻrtburchak yoki polichiziqqa aylanadi, chizmadagilarga ilashtiriladi. Qarang: [Qalam bilan eskiz chizing va aniq geometriya oling](topic:sketch-with-a-pen).
- **Fotosuratdan chizma.** {{cmd:PHOTOSKETCH}} (`PSK`) qogʻozdagi qoʻl eskizining fotosuratidan qogʻozni topadi, perspektivani tekislaydi, siz bergan qogʻoz oʻlchami va masshtabni qoʻllaydi va qalam chiziqlarini har bir qalam rangi uchun qatlamga koʻchiradi. Yozuvlar koʻchirilmaydi.
- **Qoidalar boʻyicha oʻlchash.** {{cmd:AUTODIM}} (`ADIM`) tanlagan tomonlar boʻylab oʻlchamlar zanjirlarini, umumiy oʻlchamni, teshiklar kengligini, teshik diametrlarini va `Grid` bilan setka oraligʻini yaratadi. Allaqachon mavjud oʻlchamni hech qachon takrorlamaydi.
- **Setka chizigʻini koʻchiring va toʻplam ergashadi.** {{cmd:GRIDMOVE}} (`GM`): setkaga uchi bilan tegib turgan devorlar unga birga choʻziladi, uning boʻylab turganlar, ustunlar, pufakchasi va tegi koʻchadi, oʻlchamlar yangi oraliqni oʻlchaydi. Bitta ortga qaytarish qadami.

**Varaqlar, detallar va teglar**

- **Varaqlar oʻzini joylashtiradi.** {{cmd:AUTOSHEET}} sizning nomlangan koʻrinishlaringizni (yoki modelning alohida qismlarini) oladi, qogʻoz oʻlchami va standart masshtabni tanlaydi va koʻrinishlarni sarlavha shtampi va nom-masshtab izohi bilan yangi varaqlarga joylashtiradi. Hammasi tahrirlanadigan qoladi. Qarang: [Varaqlarni men uchun joylashtirish](topic:lay-out-sheets-for-me).
- **Firmangizning detallari siz chizayotganda taklif qilinadi.** {{cmd:DETAILS}} (`DET`) sizning shaxsiy detal bloklaringizni saqlaydi. Tanlaganingiz qatlamlardagi, blok nomlaridagi va izohlardagi soʻzlar bilan mos kelsa, holat satri buni aytadi; uni tanlang va joylashtiring. {{cmd:DETAILS}} › Share roʻyxatni Hujjatlar jildingizga qoʻyadi va jamoangiz qoʻshganlarini olib keladi. Takliflarni Sozlamalar oʻchiradi.
- **Bloklarda teglar.** {{cmd:TAGS}} tegni aniqlaydi (uning turi, qabul qiladigan qiymatlari, qoʻllanadigan bloklari), uni tanlagan blok havolalariga qoʻyadi va ularni CSV ga saqlash mumkin boʻlgan jadval sifatida roʻyxatlaydi. Taʼriflar DWG da saqlanadi. Qarang: [Teglar](topic:tags).
- **Chizma chegaralari.** {{cmd:LIMITS}} chizma uchun toʻrtburchak belgilaydi: setka uni toʻldiradi va zoom Hammasi uni koʻrsatadi. Chegaralar kontur sifatida koʻrinadi va DWG va DXF da qogʻoz chegaralari bilan birga saqlanadi. Qarang: [Chizma chegaralarini belgilash](topic:drawing-limits).

**Boshqalar bilan va boshqa dasturlar bilan ishlash**

- **Taʼrifni revizyaga aylantiring.** {{cmd:REDLINE}} MarkupCraft yozadigan paketni oʻqiydi va har bir oʻzgarishni sanab chiqadi. Har birini izoh bilan qabul qiling yoki rad eting: qabul qilinganlar revizya buluti va revizya jurnali bilan bitta ortga qaytarish qadamida qoʻyiladi, va MarkupCraft da taʼriflarni yopadigan javoblar faylini saqlaysiz. Qarang: [Taʼrifni revizyaga aylantirish](topic:redline-to-revision).
- **git va Fossil birlashtira oladigan chizmalar.** {{ui:Birlashtirishga qulay fayllar}} yoqiq boʻlganda {{ui:Sozlamalar}} › {{ui:CadCraft}} da, har bir obyekt hech qachon oʻzgarmaydigan kalit oladi (fayllar taxminan 10 foiz kattaroq). `cadcraft merge base ours theirs` ikki kishining bitta DWG yoki DXF obyektidagi tahrirlarini obyektma-obyekt birlashtiradi va faqat ikki kishi bir narsani oʻzgartirgan joylarni xabar qiladi. Qarang: [Bitta chizmadagi ikki kishining tahrirlarini birlashtirish](topic:merge-drawings).
- **Oʻzgarganlar soʻzlarda.** Tarixda Solishtirish oddiy roʻyxat beradi: qayerda nima oʻzgargan, joylar qanchalik katta, nima qoʻshilgan, olib tashlangan yoki oʻzgargan va tahrirlangan matn. Qarang: [Oʻzgarishni soʻzlarda aytish](topic:changes-in-words).
- **Burchaklar va yoʻnalishlar.** Yoʻnalishni geodezik burchak sifatida yozing, masalan N45°23'30"E, yoki gradus, daqiqa va soniyada, burchak soʻraladigan har qayerda; AUNITS burchaklar qanday koʻrsatilishini belgilaydi. Qarang: [Burchaklar va yoʻnalishlarni kiritish va koʻrsatish](topic:bearings-and-angles).
- **Oʻz SHX shriftlaringiz.** CadCraft ga SHX shriftlari jildini bering, va ularni nomlagan matn uslublari shu shriftlarda chiziladi, ekranda va chop etishda. Qarang: [Oʻz SHX shriftlaringizda matn chizish](topic:shx-fonts).
- **Matndan diagramma.** {{cmd:DIAGRAM}} Mermaid oqim sxemasi, PlantUML komponent diagrammasi, D2 yoki dan-gacha roʻyxatini oʻqiydi va tahrirlanadigan bloklar va bogʻlovchilar chizadi. Qarang: [Matndan diagramma chizish](topic:text-to-diagram).
- **DWG dagi OLE obyektlari.** {{cmd:OLELIST}} DWG olib yuradigan va CadCraft oʻzi joylashtira olmaydigan OLE obyektlarini roʻyxatlaydi va rasm nusxasini siz aytgan joyga qoʻyadi. Qarang: [Rasmlar](topic:pictures#objects-from-other-programs-ole).
- **Hisob-kitoblaringiz chizma bilan qoladi.** Hisoblash varaqlari va loyiha sabablari DWG da sinflar jadvali bilan saqlanadi.

**Koʻrmasdan chizish**

- {{ui:Sozlamalar}} da {{ui:Koʻrmasdan chizish}} ni yoqing (yoki {{cmd:ACCESS}} ni yozing va `On` deb javob bering). CadCraft har bir buyruq va natijani ekran oʻquvchingiz orqali aytadi, chizmani va kursor yonidagi narsalarni tasvirlaydi, nuqtalarni klaviatura bilan tanlashga yoʻl qoʻyadi va har bir ilashish va tutqich uchun tovush chiqaradi. Brauzer kompyuteringizda nutqni taniy oladigan joyda buyruqlarni aytish mumkin. Qarang: [Koʻrmasdan chizish](topic:draft-without-sight).

**Har bir ilovada**

- **Tillar.** 54 ta til; oʻnta yangisi (litva, latviya, bosniya, marathi, telugu, alban, afrikaans, filipin, suaxili, oʻzbek). Ingliz tilidan boshqa tillar ona tilida soʻzlovchi oʻqigunicha mashina tarjimalari.
- **Kiritish qurilmalari.** Trackpad, qalam, 3D sichqoncha, oʻyin boshqaruvchisi va MIDI boshqaruvlari.
- **Asboblar paneli qatorlari va xossalar jadvali.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} boshqa ilovalarda Oʻrash, 2 qator yoki 1 qatorni taklif qiladi. CadCraft oʻz sozlamasini {{ui:Sozlamalar}} › {{ui:CadCraft}} da saqlaydi (qarang: [Asboblar paneli qatorlari](topic:settings#toolbar-rows)). Umumiy xossalar jadvali uchta boshqa ilovada, CadCraft da emas.
- **Muammolar, Jonli va qoʻshimchalar.** Har bir ilovada ogohlantiradigan umumiy Muammolar paneli, CadCraft Studio da kim qayerda ekanini koʻrsatadigan Jonli koʻrinish (qarang: [Bitta chizma ustida birga ishlash](topic:work-live)) va qoʻshimchalar roʻyxati.
- **AI ni ulang.** CadCraft Studio dan sakkizta ilovaning hammasiga bitta ulanish, har bir ilova uchun faqat oʻqish, taklif qilish yoki tahrirlash darajasi va yordamchi qilgan ishlarning oddiy tilda yozilgan jurnali bilan. CadCraft ning oʻz AI si yoʻq; Ilovalarda soʻrash siz ulagan AI dan foydalanadi.

### 0.8.1 da tuzatilgan

- **Xossalar 150 ni 12'-6" oʻrniga koʻrsatardi** fut va dyuymli chizmalarda. Dastur oʻzi oʻqiydigan maydonlar yana oʻz matnini saqlaydi.
- **Sinflar boʻlimi notoʻgʻri turda oʻqilgan DWG fayllar** (GitHub cadcraft#5) endi toʻgʻri ochiladi.
- **Kursor endi pop-up oynalar orqasida koʻrinmaydi.**
- **Studio va qadoqlangan nashrlar ish vaqtida tilni almashtirishi mumkin.** Oldin ular faqat inglizcha edi. Hamma platformalarda hali sinalmagan: til oʻzgarmasa, xabar bering.
- **Portret rejimdagi planshetlar** boʻsh setka balandligini kanvasga beradi, va varaqlar rejimi 760 px yoki undan kam boshlanadi.
- **Oynali STRETCH va LIMITS** Studio 0.8.0 da xabar qilingan edi, lekin 0.8 veb-versiyasida allaqachon toʻgʻri edi; xabar bergan odamning oʻrnatgichi eskiroq edi. Studio 0.8.1 ularni olib yuradi.

### Bu versiyada hali yoʻq

- **0.8 va 0.8.1 kod bilan imzolanmagan.** Windows ogohlantirishi mumkin (**Batafsil** va keyin **Baribir ishga tushirish** ni tanlang); Mac da CadCraft Studio ustida oʻng tugmani bosib **Ochish** ni tanlang. Store versiyalari toʻxtatilgan, va iPad va iPhone versiyasi 0.8.1 uchun qayta yigʻilmagan.
- **Qalam eskizlari va eskiz fotosuratlari** faqat oʻylab topilgan fotosuratlarda va sichqonchada sinalgan, hali haqiqiy qalam, sensorli ekran yoki qogʻozdagi qoʻl eskizi bilan emas.
- **Koʻrmasdan chizish** avtomatik tekshiruvlar bilan sinalgan, hali ekran oʻquvchisi yoki koʻr sinovchi bilan emas.
- **Detallarni ulashish** ikki kishilik tekshiruvdan oʻtmagan, va Team Cloud Plan jildini Hujjatlar jildi sifatida qurish hali tayyor emas.
- **Birlashtirish** CadCraft ning DWG va DXF fayllari uchun ishlaydi; boshqa ilovalarning fayllari uchun hali qurilmagan.
- **Fayllarni bekor qilish:** CadCraft har bir tugatilgan qadamni xabar qiladi, lekin Studio hali barcha ilovalar uchun yagona Bekor qilish yoʻq; har bir ilova oʻz qadamlarini bekor qiladi.
- **DWG ning OLE obyektlari** saqlanadi, lekin joyida chizilmaydi.
- **Boshqa dasturlardan plot style jadvallarini (CTB fayllari) oʻqish** qurilgan, lekin boshqa dasturning fayli bilan tekshirilmagan.
- **AI ni ulash:** Studio da bir tugma bilan ulanish, brauzer AI si uchun xostlangan ulagich, Studio ichidagi oʻz API kalitingiz va chop etilgan MCP paketi bu relizda va’da qilinmagan.

0.7 versiyasi haqida [0.7 dagi yangiliklar](topic:whats-new-0-7) ga qarang.
