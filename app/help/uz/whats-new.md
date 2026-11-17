---
title: 0.9 versiyadagi yangiliklar
summary: Chegarasiga ergashadigan shtrixlashlar, qatlam guruhlari, qavatlarni ustma-ust joylashtirish, eshik va derazali 2D aqlli devorlar, matn uslublari va formatlangan matn muharriri, suzuvchi buyruq satri, setkaga tutish, yoy chizishning oʻnta usuli va Hujjatlar paneli.
keywords: yangiliklar, 0.9, relizlar haqida eslatmalar, oʻzgarishlar jurnali, shtrixlash, bogʻlangan shtrixlash, hatchedit, .pat fayl, shablon fayli, qatlam guruhlari, laygroup, qavatlar, qavatlarni joylashtirish, floorlayers, aqlli devorlar, devor, eshik, deraza, devor asboblari, matn uslubi, uslub, MTEXT tahriri, abzats matni, formatlash, suzuvchi buyruq satri, buyruq satri, yuqori soha, ixcham, setkaga tutish, f9, yoy, hujjatlar paneli, tekshirib olish, Buyuk Britaniya poʻlat oʻlchamlari, draw.io, tay matni, DXF R12, yangiliklar, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, avtotoʻldirish, shabha, Tab, sketchfix, photosketch, autosheet, tafsilotlar, gridmove, autodim, teglar, qizil belgilash, birlashtirish, git, fossil, kirish, koʻrmasdan chizish, ekran oʻqigich, chegaralar, azimutlar, aunits, shx, diagramma, ole, tarix, solishtirish, soʻzlar bilan, xususiyatlar, futlar va dyuymlar, choʻzish, tillar, kiritish qurilmalari, muammolar, jonli, yordamchilar
from: 8b6dea0b
---

Bu CadCraft 0.9 ni 0.8.1 bilan solishtirganda nimalar oʻzgarganini koʻrsatadi. CadCraft CadCraft Studio 0.9 ning 2D va 3D chizma ilovasi boʻlib, uning sakkizta ilovasi bor. 0.9 rejalarni chizishni yakunlaydi, matn uslublari va haqiqiy matn muharririni qoʻshadi hamda ekranda koʻproq joy beradi.

## Yangi

### Rejalarni chizish

- **Chegarasiga ergashadigan shtrixlashlar.** {{cmd:HATCH}} shtrixlashni uni chegaralovchi narsaga bogʻlaydi. Chegarani koʻchiring, buring yoki masshtabini oʻzgartiring, shtrixlash va uning shabloni ham ergashadi; shaklini oʻzgartirsangiz, shtrixlash qaytadan hisoblanadi. {{cmd:HATCHEDIT}} (`HE`) keyinchalik shtrixlashni oʻzgartiradi hamda bogʻlanishni yaratadi yoki tugatadi. Qarang: [Shtrixlash va toʻldirilgan sohalar](topic:hatch).
- **Shtrixlash shablon fayllari.** {{cmd:HATCH}} soʻroviga `Pick internal point` javobida `F` (Pattern file) ni yozing va `.pat` faylni tanlang. Faqat odatiy formatda yozilgan fayllar sinab koʻrilgan.
- **Qatlam guruhlari.** {{ui:Vositalar}} ichida, {{ui:Qatlamlar}} panelida: {{ui:Yangi guruh}}, {{ui:Tayyor guruhlarni qoʻshish}}, {{ui:Nom boʻyicha guruhlash}} va {{ui:Qatlamni topish}}; yoki {{cmd:LAYGROUP}} (`LG`) ni yozing. Qarang: [Chizmani qatlamlar bilan tartibga soling](topic:layers#group-layers).
- **Ustma-ust joylashgan qavatlar.** {{cmd:FLOORS}} (`FLR`), yoki {{ui:Koʻproq}} menyusidagi {{ui:Qavatlar…}} ({{ui:Koʻrinish}} guruhida). Varaqdagi koʻrinish oynasi xususiyatlarda {{ui:Koʻrsatilgan qavat}} boʻyicha bitta qavatni koʻrsatishi mumkin. {{cmd:FLOORLAYERS}} boshqaga yuboriladigan fayl uchun qavatlarni qatlamlarga aylantiradi. Qarang: [Bitta chizmada qavatlarni joylashtiring](topic:floors).
- **2D aqlli devorlar, eshiklar va derazalar.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) va {{cmd:DELOPENING}}. Burchaklar, T shaklidagi ulanishlar va kesishmalar siz uchun hisoblanadi. Devorlar ulanish tarixini saqlaydi, xususiyatlarda esa boshida/oxirida ulanishni taqiqlash, joylashuv qatori va tahrirlash mumkin boʻlgan uzunlik paydo boʻladi. Qarang: [2D devor, eshik va derazalarni chizish](topic:walls-2d).
- **Reja devorlari uchun devor asbobi.** {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} va boshqalarini yozing. Ularning hali asboblar paneli tugmalari yoʻq. Qarang: [2D devorlar uchun shakllar, kesishlar, siljishlar va qulflar](topic:wall-tools-2d).

### Matn

- **Matn uslublari.** {{cmd:STYLE}} (`ST`), yoki {{ui:Chizish}} asboblar panelidagi {{ui:Matn uslubi}}: shrift, balandlik, kenglik koeffitsiyenti va ogʻishi bilan nomlangan uslublar. Qarang: [Matn uslublari bilan matnning shrifti va oʻlchamini belgilang](topic:text-styles).
- **Formatlangan abzats matni muharriri.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} yoki matnni ikki marta bosish shrift, oʻlcham, qalin, kursiv, tagiga chizilgan, ustidan chizilgan, rang va tekislash, shuningdek daraja, plus-minus va diametr belgilari bilan oynani ochadi, unda {{ui:OK}} va {{ui:Bekor qilish}} tugmalari ham bor. Qarang: [Abzats matnini formatlash](topic:format-paragraph-text).
- **draw.io XML dan diagramma.** {{cmd:DIAGRAM}} (`T2D`) joylashtirilgan draw.io XML ni ham oʻqiydi. Qarang: [Matndan diagramma chizish](topic:text-to-diagram).
- **PDF chop etishdagi tay matni.** Ilgari u soʻroq belgilari sifatida chop etilardi.

### Koʻproq joy va chizish yordamchilari

- **Suzuvchi, ingichkaroq buyruq satri va ixcham yuqori soha.** Buyruq satrining tutqichini sudrab uni suzuvchi qiling, yuqori chetini sudrab kamroq qatorlarni koʻrsating, {{key:F2}} tarixni ochadi. {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Buyruq satri}} va yuqori soha tanlovlari bir xil sozlamalarga ega. Qarang: [Sozlamalar](topic:settings#command-line).
- **Obyektni ilashish menyusi.** Holat satridagi {{ui:Ilashish}} ustiga oʻng tugmani bosing yoki {{cmd:OSNAP}} ni yozing.
- **Setkaga tutish.** Holat satridagi {{ui:Setkaga tutish}} tugmasi yoki {{key:F9}}: obyekt ilashishi nuqtani olmagan boʻlsa, tanlangan nuqtalar eng yaqin setka nuqtasiga oʻtadi.
- **Yoy oʻnta usulda va Davom ettirish.** {{ui:Chizish}} asboblar panelidagi {{ui:Yoy}} yoki {{cmd:ARC}}: 3 nuqta, Boshlanish/Markaz/Oxir oilasi va Markaz/Boshlanish/Oxir oilasi, shuningdek Davom ettirish (boshlang''ich nuqtada {{key:Enter}} ni bosing) oxirgi chiziq, yoy yoki polichiziqdan.
- **Hujjatlar paneli.** {{cmd:DOCUMENTS}} (`DOCS`) yoki {{ui:Koʻproq}} menyusidagi {{ui:Hujjatlar…}} ({{ui:Koʻrinish}} guruhida): loyiha papkasidagi har bir chizma uchun qayta koʻrib chiqish, holat va tekshirib olish. U markazlashtirilgan dialog oynasi sifatida ochiladi. Qarang: [Hujjatlar](topic:documents).

### Fayllar

- **Buyuk Britaniya poʻlat oʻlchamlari.** Standart panelda 976 ta kesim, chizmalardagidek yoziladi (masalan `305x165x40 UB`).
- **Janubiy Afrika toʻplamlari** (chizish amaliyoti va qurilish normativlari) {{ui:Qurilish normativlari}} qoʻshimchasining toʻplamlari sifatida. Raqamlar tekshirilmagan.
- **CadCraft uchun qoʻshimchalar,** talab boʻyicha qoʻshiladi va standart holatda oʻchiq: ichki yoritish loyihalash, chip loyihalash (HDL dan joylashuvgacha), router bilan oyma ishlash, sxemani simulyatsiya qilish, rolikli zanjir yulduzchalari va Qurilish normativlari mamlakat toʻplamlari.

## Tuzatilgan

- Shtrixlashni koʻchirish, burish yoki masshtablash uning shablonini orqada qoldirardi.
- {{cmd:GRIDMOVE}} faqat setka chizigʻidan boshlanadigan butun reja devorini olib ketardi. Endi devor uchlari boʻyicha baholanadi.
- Chegaralar oʻchiq boʻlsa ham, setka faqat chizma chegaralari ichida koʻrinardi.
- Yon panelidagi blok roʻyxati aylanadi, va blok nomi boʻlmagan nom bilan boshlanadigan bloklarni roʻyxatga oladi ("Balki shuni nazarda tutgandingizmi").
- AutoCAD qabul qilmagan DXF R12 fayllari ("Unknown group 1001 for table") endi shu yerda ochiladi.
- Juda katta fayllar (taxminan 70 000 obyekt va undan koʻp) "Maximum call stack size exceeded" xatosi bilan ochilmasdi.
- AutoCAD 2018 va undan keyingi, yuqori texnik xizmat versiyasiga ega DWG fayllari "bad BITLONG code 11" xatosi bilan ochilmasdi.
- Abzats matni oynasida tanlangan qism uchun yozilgan yangi oʻlcham tanlovni saqlab qoladi.

## Har bir ilovada

Har bir boshqaruv elementida maslahati boʻlgan Bootstrap tooltip, yopiladigan boshlash maslahati, sigʻmaydigan boʻlsa aylanadigan yorliq qatorlari va ochiq chizma bilan oʻzgaradigan brauzer yorligʻi sarlavhasi (`<drawing> - CadCraft | CadCraft`). {{ui:Sozlamalar}} › {{ui:Joylashuv}} endi ikki qatorli tanlovlardan iborat ochiladigan roʻyxat. {{ui:Sozlamalar}} dagi tillar roʻyxati 0.8 dagidan uzunroq. Jonli birgalikda tahrirlash, Kutubxona toʻplamlari va vazn hamda harorat birliklari Studio eslatmalarida tasvirlangan.

## Honest limits

- Abzats matnida marker yoki raqamli roʻyxatlar, tabulyatsiya chizgʻichi yoki tekislash yoʻq. Chop etilgan PDF lar matnni Helvetica shriftida beradi.
- Reja devorlari toʻgʻri, shuning uchun yoy qisqa devorlar sifatida chiziladi. Devor asbobining jamoaviy qoʻlda tekshiruvi hali kutilmoqda.
- Qatlam guruhlari AutoCAD ning oʻz formatida yozilmaydi, shuning uchun AutoCAD ularni yassi roʻyxat sifatida koʻrsatadi. Boshqa dasturlar {{cmd:FLOORLAYERS}} ni ishga tushirmasangiz, barcha qavatlarni birga koʻrsatadi.
- Hujjatlar paneli haqiqiy umumiy papkada ikki kishi tomonidan sinab koʻrilmagan. Router bilan oyma ishlash hech qanday haqiqiy kompyuterda ishlamagan. Yoritish hisobi boshqa dastur bilan emas, foton izi bilan tekshirilgan. Muhandislik qoʻshimchalari tekshiruv vositalari boʻlib, muhandisning koʻrib chiqishi oʻrnini bosmaydi.
- Ingliz tilidan boshqa tillar mashina qoralamalari, va yangi soʻzlarning bir qismi faqat inglizcha.

## Oldingi: 0.8 va 0.8.1

Bu CadCraft 0.8 va 0.8.1 da nimalar oʻzgarganini koʻrsatadi, 0.7 bilan solishtirganda. 0.8 (2026-yil 1-noyabr) chizmangizning oʻzidan ishlaydigan chizish yordamchilarini qoʻshadi: kompyuteringizdagi qoidalar boʻyicha, hech qanday model boʻlmasdan; 0.8.1 (2026-yil 2-noyabr) esa undan keyin xabar qilingan xatolarni tuzatadi.

### Yangi

**Chizma fikringizni yakunlaydi**

- **Shabha keyingi nimani koʻrsatadi.** Hech qanday buyruq ishlamayotganda, kulrang punktirli shabha chizmangizning oʻz naqshlari keyingi nimani nazarda tutishini koʻrsatadi: bir xil oraliqdagi keyingi taynchi, zinaning keyingi pogʻonasi, xonaning yetishmayotgan devori. Uni bitta bekor qilish qadamida chizish uchun {{key:Tab}} ni bosing yoki rad etish uchun {{key:Esc}} ni bosing. U faqat eng yangi obyektlarni koʻradi, shuning uchun katta chizmada ham silliq ishlaydi. Uni {{ui:Sozlamalar}} › {{ui:CadCraft}} da yoki {{cmd:AUTOCOMPLETE}} `Off` bilan oʻchiring.
- **Chiziq chizayotgandagi keyingi nuqta.** {{cmd:LINE}} yoki {{cmd:PLINE}} davomida shabha keyingi nuqtadir: zinaning keyingi pogʻonasi, toʻrtburchakning toʻrtinchi burchagi yoki uni yopadigan nuqta. Kursorni uning yoniga keltiring va {{key:Tab}} ni bosing, xuddi u yerni bosgandek.
- **Qalam eskizlari aniq geometriyaga aylanadi.** {{cmd:SKETCHFIX}}: qalam, sichqoncha yoki barmoq bilan qoralama chiziqlar chizing, va har biri toza chiziq, aylana, yoy, toʻrtburchak yoki polichiziqqa aylanadi, allaqachon chizilganlarga ilashtiriladi. Qarang: [Qalam bilan eskiz chizing va aniq geometriya oling](topic:sketch-with-a-pen).
- **Eskiz fotosurati chizmaga aylanadi.** {{cmd:PHOTOSKETCH}} (`PSK`) fotosuratdagi qogʻozni topadi, perspektivani tekislaydi, siz bergan qogʻoz oʻlchami va masshtabni qoʻllaydi hamda har bir qalam rangi uchun alohida qatlamga qalam chiziqlarini koʻchiradi. Yozuvlar koʻchirilmaydi.
- **Qoidalar boʻyicha oʻlchamlash.** {{cmd:AUTODIM}} (`ADIM`) tanlangan tomonlar boʻylab oʻlchamlar zanjirini, umumiy oʻlchamni, teshik oʻtish kengliklarini, teshik diametrlarini va `Grid` bilan setka oraligʻini yaratadi. U allaqachon mavjud oʻlchamni hech qachon takrorlamaydi.
- **Setka chizigʻini koʻchiring, toʻplam ergashadi.** {{cmd:GRIDMOVE}} (`GM`): setka chizigʻida tugaydigan devorlar u bilan choʻziladi, chiziq boʻylab joylashganlar, ustunlar, uning belgisi va tegi koʻchadi, unda joylashgan oʻlchamlar yangi oraliqni oʻlchaydi. Bitta bekor qilish qadami.

**Varaqlar, tafsilotlar va teglar**

- **Oʻzini joylashtiradigan varaqlar.** {{cmd:AUTOSHEET}} nomlangan koʻrinishlaringizni (yoki modelning alohida qismlarini) oladi, qogʻoz oʻlchami va standart masshtabni tanlaydi hamda koʻrinishlarni sarlavha bloki va nom-masshtab yozuvi bilan yangi varaqlarga joylashtiradi. Hammasi tahrirlanadigan boʻlib qoladi. Qarang: [Varaqlarni men uchun joylashtiring](topic:lay-out-sheets-for-me).
- **Firmangizning tafsilotlari, chizish paytida taklif qilinadi.** {{cmd:DETAILS}} (`DET`) sizning shaxsiy tafsilot bloklaringizni saqlaydi. Tanlaganingiz qatlamlaringizdagi, blok nomlaridagi va izohlardagi soʻzlar bilan mos kelganda, holat satri buni bildiradi; uni tanlang va joylashtiring. {{cmd:DETAILS}} › {{ui:Ulashish}} roʻyxatingizni Hujjatlar papkangizga qoʻyadi va jamoangiz qoʻshganlarini olib keladi. Sozlamalar bu takliflarni oʻchiradi.
- **Bloklardagi teglar.** {{cmd:TAGS}} tegni aniqlaydi (uning turi, qabul qilishi mumkin boʻlgan qiymatlar, qoʻllanadigan bloklar), uni tanlagan blok havolalariga qoʻyadi va ularni CSV sifatida saqlash mumkin boʻlgan jadval qilib sanab chiqadi. Ta'riflar DWG da saqlanadi. Qarang: [Teglar](topic:tags).
- **Chizma chegaralari.** {{cmd:LIMITS}} chizma uchun toʻrtburchak belgilaydi: setka uni toʻldiradi va Hammasi koʻrinishi uni koʻrsatadi. Chegaralar kontur sifatida koʻrinadi va qogʻoz chegaralari bilan birga DWG va DXF da saqlanadi. Qarang: [Chizma chegaralarini belgilang](topic:drawing-limits).

**Boshqa odamlar va boshqa dasturlar bilan ishlash**

- **Belgilashni qayta koʻrib chiqishga aylantiring.** {{cmd:REDLINE}} MarkupCraft yozgan paketni oʻqiydi va har bir oʻzgarishni sanab chiqadi. Har birini izoh bilan qabul qiling yoki rad eting; qabul qilinganlar bitta bekor qilish qadamida qayta koʻrib chiqish buluti va qayta koʻrib chiqish jurnalini oladi, hamda MarkupCraft dagi belgilashlarni yopadigan javoblar faylini saqlaysiz. Qarang: [Belgilashni qayta koʻrib chiqishga aylantiring](topic:redline-to-revision).
- **Git va Fossil birlashtira oladigan chizmalar.** {{ui:Sozlamalar}} › {{ui:CadCraft}} da {{ui:Birlashtirishga qulay fayllar}} yoqilganda, har bir obyekt hech qachon oʻzgarmaydigan kalit oladi (fayllar taxminan 10 foiz kattaroq boʻladi). `cadcraft merge base ours theirs` buyrugʻi ikki kishining bitta DWG yoki DXF dagi tahrirlarini obyekt boʻyicha birlashtiradi va faqat ikki kishi bir xil narsani oʻzgartirgan joylarni xabar qiladi. Qarang: [Bitta chizmadagi ikki kishining tahrirlarini birlashtiring](topic:merge-drawings).
- **Nima oʻzgarganini soʻzlar bilan.** Tarixda Solishtirish oddiy roʻyxat beradi: qayerda narsalar oʻzgardi, joylar qanchalik katta, nima qoʻshildi, olib tashlandi yoki oʻzgartirildi va tahrirlangan matn. Qarang: [Nima oʻzgarganini soʻzlar bilan ayting](topic:changes-in-words).
- **Burchaklar va azimutlar.** Yoʻnalishni geodezik azimut sifatida yozing, masalan N45°23'30"E, yoki gradus, daqiqa va soniyalarda, burchak soʻralgan har qanday joyda; AUNITS burchaklar qanday koʻrsatilishini belgilaydi. Qarang: [Azimut va burchaklarni yozing va koʻrsating](topic:bearings-and-angles).
- **Oʻz SHX shriftlaringiz.** CadCraft ga SHX shriftlar papkasini bering, ularni nomlaydigan matn uslublari ekranda ham, chop etishda ham ulardan chiziladi. Qarang: [Matnni oʻz SHX shriftlaringizda chizing](topic:shx-fonts).
- **Matndan diagramma.** {{cmd:DIAGRAM}} Mermaid oqim diagrammasini, PlantUML komponent diagrammasini, D2 yoki "qayerdan-qayerga" roʻyxatini oʻqiydi va tahrirlanadigan bloklar va bogʻlovchilar chizadi. Qarang: [Matndan diagramma chizish](topic:text-to-diagram).
- **DWG dagi OLE obyektlari.** {{cmd:OLELIST}} DWG tashiydigan, CadCraft oʻzi joylashtira olmaydigan OLE obyektlarini sanab chiqadi va rasm nusxasini siz aytgan joyga joylashtiradi. Qarang: [Rasmlar](topic:pictures#objects-from-other-programs-ole).
- **Hisob-kitoblaringiz chizma bilan birga qoladi.** Hisob varaqlari va loyiha sabablari sinf jadvali bilan birga DWG da saqlanadi.

**Koʻrmasdan chizish**

- {{ui:Sozlamalar}} da {{ui:Koʻrmasdan chizish}} ni yoqing (yoki {{cmd:ACCESS}} ni yozing va `On` deb javob bering). CadCraft har bir buyruq va natijani ekran oʻqigichingiz orqali aytib beradi, chizmani va kursor yonidagilarni tasvirlaydi, kursorni klaviatura bilan siljitish va nuqtalarni tanlash imkonini beradi hamda har bir ilashish va tutqich uchun tovush chiqaradi. Brauzeringiz kompyuteringizda nutqni tanisa, buyruqlarni aytib berish mumkin. Qarang: [Koʻrmasdan chizish](topic:draft-without-sight).

**Har bir ilovada**

- **Tillar.** 54 ta til; oʻntasi yangi (litva, latviya, bosniya, marathi, telugu, alban, afrikaans, filippin, suaxili, oʻzbek). Ingliz tilidan boshqa tillar tilni tugʻma tilda soʻzlashuvchi oʻqimaguncha mashina qoralamalari boʻlib qoladi.
- **Kiritish qurilmalari.** Trackpad, qalam, 3D sichqoncha, oʻyin kontrolleri va MIDI boshqaruvlari.
- **Asboblar paneli qatorlari va xususiyatlar jadvali.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} boshqa ilovalarda Oʻrash, 2 qator yoki 1 qatorni taklif qiladi. CadCraft oʻz sozlamasini {{ui:Sozlamalar}} › {{ui:CadCraft}} da saqlaydi (qarang: [Asboblar paneli qatorlari](topic:settings#toolbar-rows)). Umumiy xususiyatlar jadvali uchta boshqa ilovada, CadCraft da emas.
- **Muammolar, Jonli va qoʻshimchalar.** Har bir ilovada ogohlantiradigan umumiy Muammolar paneli, CadCraft Studio ichida kim qayerda ekanini koʻrsatadigan Jonli koʻrinish (qarang: [Bitta chizma ustida birgalikda ishlang](topic:work-live)) va qoʻshimchalar roʻyxati.
- **Oʻz AIingizni ulang.** CadCraft Studio dan sakkizta ilovaning hammasiga bitta ulanish, har bir ilova uchun faqat oʻqish, taklif qilish yoki tahrirlash darajasi va yordamchi nima qilganining soʻzlar bilan yozilgan jurnali. CadCraft oʻz AIga ega emas, va har bir ilovadagi Soʻrash siz ulagan AIdan foydalanadi.

### 0.8.1 da tuzatilgan

- **Xususiyatlar 12'-6" oʻrniga 150 koʻrsatardi** futlar va dyuymlardagi chizmalarda. Ilova oʻzi oʻqiydigan maydonlar yana oʻz matnini saqlaydi.
- **Sinflar boʻlimi notoʻgʻri turdagi deb oʻqilgan DWG fayllari** (GitHub cadcraft#5) endi toʻgʻri ochiladi.
- **Kursor endi qalqib chiquvchi oynalar orqasida koʻrinmaydi.**
- **Studio va qadoqlangan nashrlar ish vaqtida tilni almashtirishi mumkin.** Ilgari faqat ingliz tilida edi. Hali har bir platformada sinab koʻrilmagan: til oʻzgarmasa, bizga xabar bering.
- **Portret rejimidagi planshetlar** boʻsh setka balandligini kanvaga beradi, va varaqlar rejimi 760 px yoki kamroqdan boshlanadi.
- **Oyna kesishgan holdagi STRETCH va LIMITS** Studio 0.8.0 da xabar qilingan edi, lekin 0.8 veb-versiyasida ularning ishlashi toʻgʻri edi; xabar qiluvchining oʻrnatuvchisi eskiroq edi. Studio 0.8.1 ularni oʻz ichiga oladi.

### Bu versiyada hali yoʻq

- **0.8 va 0.8.1 kod bilan imzolanmagan.** Windows ogohlantirishi mumkin (u yerda {{ui:Batafsil ma'lumot}} ni, soʻngra {{ui:Baribir ishga tushirish}} ni tanlang); Mac da CadCraft Studio ustida oʻng tugmani bosing va {{ui:Ochish}} ni tanlang. Store versiyalari toʻxtatilgan, iPad va iPhone versiyasi 0.8.1 uchun qayta yigʻilmagan.
- **Qalam eskizlari va eskiz fotosuratlari** faqat soxta fotosuratlarda va sichqoncha bilan sinab koʻrilgan, hali haqiqiy qalam, sensorli ekran yoki qogʻozdagi qoʻl eskizi bilan emas.
- **Koʻrmasdan chizish** avtomatik tekshiruvlar bilan sinovdan oʻtgan, hali ekran oʻqigich yoki koʻzi ojiz sinovchi bilan emas.
- **Tafsilotlarni ulashish** ikki kishilik tekshiruvdan oʻtmagan, va Hujjatlar papkasi sifatida Team Cloud Plan papkasi qurilmagan.
- **Birlashtirish** CadCraft ning DWG va DXF fayllari uchun ishlaydi; boshqa ilovalar fayllari uchun u qurilmagan.
- **Oynalar boʻylab bekor qilish:** CadCraft har bir tugallangan qadamni xabar qiladi, lekin Studio da hali barcha ilovalar uchun yagona Bekor qilish yoʻq; har bir ilova oʻz qadamlarini bekor qiladi.
- **DWG ning OLE obyektlari** saqlanadi, lekin oʻz joyida chizilmaydi.
- **Chop etish uslublari jadvallarini (CTB fayllari)** oʻqish boshqa dasturlardan keladigan fayl bilan tekshirilmagan.
- **Oʻz AIingizni ulang:** Studio da bir tugma bilan ulanish, brauzer AI uchun xostlangan ulagich, Studio ichidagi oʻz API kalitingiz va chop etilgan MCP paketi bu relizda va'da qilinmagan.

Oldingi versiya uchun qarang: [0.7 versiyadagi yangiliklar](topic:whats-new-0-7).
