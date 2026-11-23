---
title: Buyruqlar maʼlumotnomasi
summary: CadCraft chizma ilovasidagi har bir buyruq, uning taxalluslari, soʻraydigan savollari, variantlari va standart qiymatlari.
keywords: buyruqlar, taxalluslar, buyruqlar roʻyxati, maydon, perimetr, measuregeom, chiziq, pline, aylana, yoy, kesish, ofset, dimlinear, blok, insert, joylashuv, chop etish, zoom, yordam, copyclip, cutclip, pasteclip, pasteorig, copybase, nusxa, selectall
from: 979ffe3b
---

Buyruq nomini yoki taxallusini yozing va {{key:Enter}} yoki {{key:Space}} ni bosing. Katta-kichik harf farqi yoʻq, va boshidagi `_`, `-`, `.` yoki `'` eʼtiborga olinmaydi. `HELP` (yoki `?`) ni yozsangiz, buyruq satri tarixida har bir buyruqning qisqa roʻyxati chiqadi; bu yordam uchun {{key:F1}} ni bosing.

Soʻrovlarni qanday oʻqish kerak: variantlar kvadrat qavsda, va siz ularni bosh harflarini yozib tanlaysiz (`D` Diametr uchun). Standart qiymat burchakli qavsda; uni qabul qilish uchun {{key:Enter}} ni bosing. Nuqta soʻralgan joyda bosishingiz yoki [Koordinata va masofani kiritish](topic:coordinate-entry) dagi istalgan formatni yozishingiz mumkin. Masofa soʻralganda raqam yozishingiz yoki ikki nuqta bosishingiz mumkin.

Nuqta yoki obyekt talab qilinadigan joyda {{key:Enter}} bosilsa va standart qiymat boʻlmasa, buyruq tugaydi. {{key:Esc}} uni bekor qiladi. Buyruq nima qilgan boʻlsa, bu bitta ortga qaytarish qadami.

## Chizish

### LINE

Taxalluslar: `L`. Toʻgʻri kesmalar, har biri alohida obyekt.

- `Birinchi nuqtani koʻrsating` ({{key:Enter}}: oxirgi bergan nuqtangizdan boshlaydi)
- `Keyingi nuqtani koʻrsating [Ortga qaytarish (U)]`, takrorlanadi. Ikki kesmadan keyin: `[Ortga qaytarish (U)/Yopish (C)]`.
- `U` oxirgi kesmani qaytaradi, `C` birinchi nuqtaga yopadi va tugaydi. {{key:Enter}} tugatadi.

### PLINE

Taxalluslar: `PL`. Chiziq va yoy kesmalaridan bitta polichiziq.

- `Boshlanish nuqtasini koʻrsating`
- `Keyingi nuqtani koʻrsating [Yoy (A)/Yopish (C)/Ortga qaytarish (U)]` (ikki kesma boʻlgach Yopish)
- `A` yoylarga oʻtadi: `Yoyning oxirgi nuqtasini koʻrsating [Chiziq (L)/Yopish (CL)/Ortga qaytarish (U)]`. Har bir yoy oldingi kesmaga tangens holda davom etadi. `L` chiziqqa qaytaradi, `CL` yoy bilan yopadi.
- {{key:Enter}} tugatadi; polichiziq ochiq qoladi.

### CIRCLE

Taxalluslar: `C`.

- `Aylananing markaz nuqtasini koʻrsating [3P/2P/Ttr (tan tan radius)]`
- `Aylananing radiusini koʻrsating [Diametr (D)] <oxirgi radius>`; `D` `Aylananing diametrini koʻrsating` deb soraydi.
- `2P`: diametrning ikki uchi. `3P`: aylanada uchta nuqta.
- `T` (shuningdek `TTR` buyrugʻi va {{ui:Chizish}} › {{ui:Koʻproq}} › {{ui:Aylana: Tan, Tan, Radius}}): `Aylananing birinchi tangensi uchun obyektdagi nuqtani koʻrsating`, ikkinchisi, soʻng radius (Enter: oxirgisi). Aylana ikkala obyektga (chiziq, yoy, aylana, polichiziq kesmalari, shuningdek bloklar ichida) tegadi; tegadiganlar orasida, bosgan joylaringizga eng yaqini. Hech biri mos kelmasa, `Aylana mavjud emas` deyiladi.
- `TTT` (yoki {{ui:Chizish}} › {{ui:Koʻproq}} › {{ui:Aylana: Tan, Tan, Tan}}): uchta obyekt; uchalasiga tegadigan aylana, bosgan joylaringizga eng yaqini (uchta chiziq ichki yoki tashqi aylanani beradi, qayerni bosganingizga qarab).

### ARC

Taxalluslar: `A`.

- `Yoyning boshlanish nuqtasini koʻrsating [Markaz (C)]`, `Yoyning ikkinchi nuqtasini koʻrsating`, `Yoyning oxirgi nuqtasini koʻrsating`: uchta nuqta orqali yoy.
- `C`: `Yoyning markaz nuqtasini koʻrsating`, `Yoyning boshlanish nuqtasini koʻrsating`, `Yoyning oxirgi nuqtasini koʻrsating`. Yoy boshlanishdan oxirigacha soat strelkasiga qarshi yuradi.

### RECTANG

Taxalluslar: `REC`, `RECTANGLE`. Yopiq polichiziq.

- `Birinchi burchak nuqtasini koʻrsating`, `Boshqa burchak nuqtasini koʻrsating`. Ikkinchi burchak uchun `@kenglik,balandlik` yozing.

### POLYGON

Taxalluslar: `POL`. Yopiq polichiziq sifatida muntazam koʻpburchak.

- `Tomonlar sonini kiriting <4>` (3 dan 1024 gacha)
- `Koʻpburchakning markazini koʻrsating`
- `Variantni kiriting [Aylanaga ichki chizilgan/Aylanaga tashqi chizilgan] <I>`
- `Aylananing radiusini koʻrsating`: bosing yoki nuqta yozing; uning masofasi oʻlchamni, yoʻnalishi koʻpburchakni buradi.

### ELLIPSE

Taxalluslar: `EL`.

- `Ellipsning oʻq uchini koʻrsating [Markaz (C)]`, `Oʻqning boshqa uchini koʻrsating`, `Boshqa oʻqqacha masofani koʻrsating`
- `C`: `Ellipsning markazini koʻrsating`, `Oʻqning uchini koʻrsating`, soʻng boshqa oʻqqacha masofa.
- `I` (`Izoaylana`, faqat {{cmd:ISODRAFT}} yoqiq boʻlganda): markaz, soʻng radius yoki `Diametr`: joriy izometrik tekislikda aylana qanday koʻrinsa, shu ellips.

### HATCH

Taxalluslar: `H`, `BH`, `BHATCH`; yoki asboblar panelida {{ui:Shtrixlash}}. Avval joriy naqsh, masshtab va burchakni chop etadi.

- `Ichki nuqtani koʻrsating [Obyektlarni tanlash (S)/Naqsh (P)/Masshtab (SC)/Burchak (A)]`, takrorlanadi (`Ortga qaytarish (U)` maydon boʻlgach): har bir bosish atrofidagi yopiq sohani qoʻshadi, ichidagi yopiq shakllar orol boʻladi. Enter barchasidan bitta shtrixlash yaratadi.
- `S`: `Yopiq obyektlarni tanlang` (yopiq polichiziqlar, aylanalar, yopiq ellipslar).
- `P`: `Naqsh nomini, SOLID ni kiriting yoki roʻyxat uchun ? <joriy>`. `SC`: `Naqsh masshtabini koʻrsating`. `A`: `Naqsh burchagini koʻrsating`.
- `G` (Gradient): toʻldirish naqsh oʻrniga gradient boʻladi. Uning savollari uchun {{cmd:GRADIENT}} ga qarang.

Qarang: [Shtrixlash va toʻldirish sohalari](topic:hatch).

### GRADIENT

Taxalluslar: `GD`. Sohani bir yoki ikki rangli gradient bilan toʻldiradi. Avval gradientni soraydi, soʻng {{cmd:HATCH}} kabi davom etadi (`Ichki nuqtani koʻrsating`, yopiq obyektlar uchun `S`, tugatish uchun {{key:Enter}}).

- `Gradient variantini kiriting [Turi (T)/Bitta rang (O)/Ikki rang (TW)/Burchak (A)/Markazlashgan (C)/eXit (X)] <X>`, takrorlanadi; har safar hozirgi gradientni chop etadi.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` yoki ulardan biri teskari (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Dastlabki harflar yetarli.
- `O`: bitta rang, soʻng uning tusi 0 dan 1 gacha (0 uni qora qiladi, 0.5 rangning oʻzi, 1 uni oq qiladi). `TW`: birinchi va ikkinchi rang. Rang 1 dan 255 gacha son, `255,128,0` kabi uch son, yoki `#rrggbb` boʻlishi mumkin.
- `A`: gradient yoʻnalgan burchak. `C`: markazlashgan Ha yoki Yoʻq (Yoʻq gradient oʻrtasini bir tomonga suradi).
- Nomaʼlum rang yoki turni va 0 dan 1 gacha boʻlmagan tusni rad etadi.

{{cmd:HATCHEDIT}} `G` va Xossalar (Gradient) keyinchalik gradientni oʻzgartiradi yoki istalgan shtrixlashni gradientga aylantiradi. Gradient ekranda chiziladi va chop etiladi. DWG 2004 va undan keyingi versiyalar uni haqiqiy gradient shtrixlash sifatida saqlaydi; DXF 2000 va DWG 2000 uni CadCraft uchun saqlaydi, boshqa dasturlar birinchi rangdagi qattiq toʻldirishni koʻradi.

### HATCHGENERATEBOUNDARY

Taxalluslar: `HGB`. Chegarasini yoʻqotgan shtrixlashdan chegarani qayta yaratadi. `Shtrixlashlarni tanlang` (yoki avval tanlang), soʻng `Har bir shtrixlashni yangi chegarasiga bogʻlang, shtrixlash unga ergashsinmi? [Ha/Yoʻq] <Ha>`.

- Shtrixlashning har bir halqasi shtrixlash qatlamida yopiq polichiziq boʻladi; yangi polichiziqlar tanlangan holda qoladi. Egri qirra shtrixlash saqlaydigan qisqa toʻgʻri boʻlaklar sifatida qaytadi.
- Ha desangiz, shtrixlash yangi chegarasiga ergashadi, {{cmd:HATCH}} bilan yaratilgandek. Bitta ortga qaytarish qadami.
- Shtrixlash tanlanmagan boʻlsa, buni aytadi.

### POINT

Taxalluslar: `PO`; yoki {{ui:Chizish}} › {{ui:Koʻproq}} › {{ui:Nuqta}}. Nuqta obyektlari, har bosishda bittadan, {{key:Enter}} gacha.

- `Nuqtani koʻrsating`

### XLINE

Taxalluslar: `XL`; yoki {{ui:Chizish}} › {{ui:Koʻproq}} › {{ui:Qurilish chizigʻi}}. Qurilish chiziqlari, ikki tomonga cheksiz. Qarang: [Qurilish chiziqlari va nurlar](topic:construction-lines).

- `Nuqtani koʻrsating [Gor/Vert/Burchak (A)/Bissektrisa (B)/Ofset (O)]`, soʻng har bir chiziq uchun `Oʻtadigan nuqtani koʻrsating`, {{key:Enter}} gacha.
- `A`: `Qurilish chizigʻining burchagini kiriting [Havola] <0>`; `R` avval `Chiziq obyektini tanlang` soraydi.
- `B`: `Burchak uchining nuqtasini koʻrsating`, `Burchakning boshlanish nuqtasini koʻrsating`, soʻng har bir chiziq uchun `Burchakning oxirgi nuqtasini koʻrsating`.
- `O`: `Ofset masofasini koʻrsating [Oʻtish] <Oʻtish>`, soʻng har bir chiziq uchun `Chiziq obyektini tanlang` va `Ofset tomonini koʻrsating` (yoki `Oʻtadigan nuqtani koʻrsating`).

### RAY

Taxallusi yoʻq; yoki {{ui:Chizish}} › {{ui:Koʻproq}} › {{ui:Nur}}. `Boshlanish nuqtasini koʻrsating`, soʻng har bir nur uchun `Oʻtadigan nuqtani koʻrsating`, {{key:Enter}} gacha.

### TEXT

Taxalluslar: `DT`, `DTEXT`; yoki asboblar panelida {{ui:Matn}}. Bir qatorli matn; har bir qator alohida obyekt.

- `Matnning boshlanish nuqtasini koʻrsating [Tekislash (J)]`
- `J`: `Variantni kiriting [Chap/Markaz/Oʻng/Oʻrta/TL/MC] <L>`, soʻng `Matnning kiritish nuqtasini koʻrsating`
- `Balandlikni koʻrsating <joriy matn balandligi>`
- `Matnning burilish burchagini koʻrsating <0>`
- `Matnni kiriting`, takrorlanadi: har bir Enter keyingi qatorni pastda boshlaydi. Boʻsh qatorda Enter tugatadi. {{key:Space}} bu yerda boʻshliq yozadi.

### DIVIDE

Taxalluslar: `DIV`. {{cmd:DIVIDE}} chiziq, yoy, aylana, polichiziq, splayn yoki ellipsga uni teng boʻlaklarga boʻluvchi belgilar qoʻyadi. Obyektni tanlang, soʻng boʻlaklar sonini kiriting (2 dan 32767 gacha). Ochiq obyektda belgilar boʻlaklar sonidan bittaga kam boʻladi; yopiqda boshida ham belgi boʻladi. Obyektning oʻzi kesilmaydi. Belgilar nuqtalar; `Block` oʻrniga shu chizmaning blokini soraydi va u obyektga ergashib burilishi kerakmi. Splayn va ellipsdagi uzunliklar qisqa vatarlar boʻylab oʻlchanadi. Matn, shtrixlash va uzunligi boʻlmagan boshqa obyektlarni rad etadi.

### MEASURE

Taxalluslar: `ME`. {{cmd:MEASURE}} chiziq, yoy, aylana, polichiziq, splayn yoki ellips boʻylab berilgan har bir uzunlikda belgi qoʻyadi, tanlagan joyingizga eng yaqin uchidan boshlab (yopiq obyektda: boshlanishidan). Uzunlikni yozib yoki ikki nuqta bilan bering. Ochiq obyektning uzoq uchiga belgi qoʻyilmaydi. `Block` har bir belgida nuqta oʻrniga blok joylashtiradi. Uzunligi 0 boʻlgan, obyektdan uzun boʻlgan va 32767 dan koʻp belgi beradigan uzunlikni rad etadi.

### BOUNDARY

Taxalluslar: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tanlagan nuqtani oʻz ichiga olgan soha atrofida yopiq polichiziq yaratadi, ekranda uni chegaralagan chiziq, yoy, aylana, polichiziq va egri chiziqlardan. Yoy yoki aylanada yotgan boʻlaklar yoy kesmalari boʻlib qaytadi; ellips va splayn boʻlaklari qisqa toʻgʻri kesmalar boʻlib qaytadi. `Orollar` yoqiq boʻlsa (boshlangʻich holat), ichidagi har bir yopiq soha ham oʻz polichiziqini oladi. Nuqtalarni bosishda davom eting; {{key:Enter}} tugatadi. Sohani chegaralagan obyektlar oʻz holatida qoladi. Nuqta ichida yopiq soha yoʻq boʻlsa, buni aytadi.

### BLEND

{{cmd:BLEND}} ikki ochiq egri chiziqning uchlari orasida splayn chizadi. Birlashtirish uchun har bir egri chiziqni uchiga yaqin bosing. `CONtinuity` tanlaydi: `Tangens` (splayn ikkala egri chiziq boʻylab chiqadi va keladi) yoki `Silliq` (u ularning uchlardagi egilishiga ham mos boʻladi); tanlov seans uchun saqlanadi. Ikki egri chiziq oʻzgarmaydi. Yopiq obyektlarni va allaqachon uchrashgan ikki uchni rad etadi.

### REGION

Taxalluslar: `REG`. {{cmd:REGION}} yopiq obyektlarni mintaqalarga aylantiradi: birlashtirish, kesish va oʻlchash mumkin boʻlgan tekis sohalar. Aylanalar, yopiq polichiziqlar, yopiq ellipslar yoki yopiq splaynlarni, yoki uchma-uch halqa hosil qiluvchi chiziq, yoy va ochiq polichiziqlarni tanlang; har bir halqa bitta mintaqa boʻladi va undan kelgan obyektlarni almashtiradi. Yoylar yoy boʻlib qoladi; ellips va splaynlar qisqa toʻgʻri kesmalarga aylanadi. Yopiq boʻlmagan va hech qanday halqa hosil qilmagan narsa oʻz holatida qoladi va buni necha ta ekanini aytadi. Chizmada mintaqa nomsiz guruh sifatida bir yoki bir nechta yopiq polichiziq boʻladi, shuning uchun bosish butun mintaqani tanlaydi va nusxa alohida mintaqa boʻladi; faylni ochadigan boshqa dasturlar yopiq polichiziqlarni koʻradi.

Chizmada mintaqalar boʻlganda, 2D yorligʻidagi {{cmd:UNION}}, {{cmd:SUBTRACT}} va {{cmd:INTERSECT}} mintaqalar bilan ishlaydi: `UNION` tanlangan mintaqalarni bittaga birlashtiradi (bir-biridan uzoq mintaqalar bir mintaqaning bir necha konturiga aylanadi); `SUBTRACT` ayriladigan mintaqalarni, soʻng olib tashlanadigan birlarni soraydi (teshik mintaqa qismi boʻlib qoladi); `INTERSECT` ularning hammasi umumiy boʻlgan sohani saqlaydi. Har biri natijaning maydonini aytadi va bitta ortga qaytarish qadami. Hech narsa qolmasa yoki umumiy boʻlmasa, rad etadi. 3D yorligʻida va mintaqasiz chizmada xuddi shu buyruqlar avvalgidek jismlarda ishlaydi.

## Oʻzgartirish

### MTEXT

Taxalluslar: `MT`, `T`; yoki asboblar panelida {{ui:Abzats}}. Kenglikka oʻraladigan abzats matni, joyida yoziladi.

- `Birinchi burchakni koʻrsating`
- `Qarama-qarshi burchakni koʻrsating [Balandlik (H)/Tekislash (J)/Qator oraligʻi (L)/Burilish (R)/Kenglik (W)]`: ikki burchak orasidagi kenglik matn oʻraladigan joy. `H` `Balandlikni koʻrsating` soraydi, `J` `Tekislashni kiriting [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Qator oraligʻi koeffitsientini kiriting (0.25 dan 4 gacha)`, `R` `Burilish burchagini koʻrsating`, `W` `Kenglikni koʻrsating (oʻrash uchun 0)` va ikkinchi burchakni oʻtkazib yuboradi.
- Soʻng chizmada quti ochiladi: yozing, yangi abzats uchun {{key:Enter}}, tugatish uchun {{key:Mod+Enter}} yoki tashqariga bosish, bekor qilish uchun {{key:Esc}}. Uning paneli balandlik, qator oraligʻi, kenglik va tekislashni belgilaydi. Qarang: [Matn va yorliqlar qoʻshish](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Taxalluslar: `ED`, `DDEDIT`; yoki matnni ikki marta bosing. `Tahrirlash uchun matnni tanlang`, Enter gacha takrorlanadi: har biri bir xil katakda ochiladi. Tanlangan yoki ikki marta bosilgan matndan boshlansa, uni tahrirlab tugaydi.

### ERASE

Taxalluslar: `E`, `DELETE`; yoki obyektlar tanlangan holda {{key:Delete}} ni bosing.

- `Obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)

### MOVE

Taxalluslar: `M`.

- `Obyektlarni tanlang`
- `Asosiy nuqtani koʻrsating [Siljish (D)]`, `Ikkinchi nuqtani koʻrsating`
- `D`: `Siljishni koʻrsating`, `dx,dy` shaklida yoziladi.

### COPY

Taxalluslar: `CO`, `CP`. Bergan nuqtalaringiz kabi koʻp nusxa.

`Massiv` ikkinchi nuqta soʻrovida bir qatorni bir vaqtda yaratadi: elementlar sonini bering (asl nusxa bitta hisoblanadi), soʻng birinchi nusxa boradigan nuqta; qolganlari bir xil oraliq bilan ketadi. `Moslash` oxirgi nusxaning joyi shu nuqta boʻladi, boshqalari orasida teng taqsimlanadi.

- `Obyektlarni tanlang`
- `Asosiy nuqtani koʻrsating [Siljish (D)]`
- `Ikkinchi nuqtani koʻrsating [Ortga qaytarish (U)]`, Enter gacha takrorlanadi. `U` oxirgi nusxani qaytaradi.

### ROTATE

Taxalluslar: `RO`.

- `Obyektlarni tanlang`, `Asosiy nuqtani koʻrsating`
- `Burilish burchagini koʻrsating <oxirgi burchak>`: gradus, soat strelkasiga qarshi musbat; yoki unga burish uchun nuqtani bosing.

### SCALE

Taxalluslar: `SC`.

- `Obyektlarni tanlang`, `Asosiy nuqtani koʻrsating`
- `Masshtab koeffitsientini koʻrsating`: `0.5` yoki `2` kabi koeffitsient yozing. Bosilgan nuqta asosiy nuqtadan masofasini koeffitsient qilib beradi.

### MIRROR

Taxalluslar: `MI`.

- `Obyektlarni tanlang`
- `Aks ettirish chizigʻining birinchi nuqtasini koʻrsating`, `Aks ettirish chizigʻining ikkinchi nuqtasini koʻrsating`
- `Manba obyektlarini oʻchirilsinmi? [Ha/Yoʻq] <Yoʻq>`

### ALIGN

Taxalluslar: `AL`; yoki {{ui:Oʻzgartirish}} › {{ui:Koʻproq}} › {{ui:Tekislash}}.

- `Obyektlarni tanlang`
- `Birinchi manba nuqtasini koʻrsating`, `Birinchi maqsad nuqtasini koʻrsating`
- `Ikkinchi manba nuqtasini koʻrsating (davom etish uchun Enter)`, `Ikkinchi maqsad nuqtasini koʻrsating`
- `Uchinchi manba nuqtasini koʻrsating (davom etish uchun Enter)`, `Uchinchi maqsad nuqtasini koʻrsating`
- Ikki juft bilan: `Obyektlar tekislash nuqtalariga asoslanib masshtablansinmi? [Ha/Yoʻq] <Yoʻq>`

Qarang: [Obyektlarni tekislash](topic:modify-objects#align-objects).

### ALIGNTO

- `Obyektlarni tanlang` (yoki tanlov), `Tekislash [Chap/Markaz (C)/Oʻng (R)/Yuqori (T)/Oʻrta (M)/Pastki (B)] <Chap>`, `Qaysi biriga [Tanlov/Birinchi (F)/Oxirgi (L)/Nuqta (P)] <Tanlov>`; `P` nuqta soraydi. Tanlov qoladi.

### DISTRIBUTE

- `Obyektlarni tanlang` (kamida uchta), `Taqsimlash [Gorizontal/Vertikal] <Gorizontal>`, `Teng joylashtirish [Markazlar/Boʻshliqlar] <Boʻshliqlar>`. Tashqi ikkitasi joyida qoladi; tanlov qoladi.

### ALIGNPANEL

Taxalluslar: `ALP`; yoki {{ui:Oʻzgartirish}} › {{ui:Koʻproq}} › {{ui:Tekislash va taqsimlash}}. ALIGNTO va DISTRIBUTE ni bosish bilan ishga tushiradigan panelni ochadi.

### LASER

Taxalluslar: `LASERCUT`; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Lazer…}}. Chizma ustida Lazer panelini ochadi: har bir qatlam nima qilishi (kesish, chizish, gravirovka, toʻldirish, rasm), koʻrib chiqish, saqlanadigan GRBL G-kodi, va Web Serial orqali ramkalash va yuborish. Qarang: [Chizmani lazerga yuborish](topic:laser-cutting).

### STRETCH

Taxalluslar: `S`; yoki {{ui:Choʻzish}}. `Choʻziladigan obyektlarni tanlang`: uchlar ustida kesishuvchi oynalarni sudrang (yoki `C` yozing) koʻchirish uchun. `Asosiy nuqtani koʻrsating [Siljish (D)]`, `Ikkinchi nuqtani koʻrsating`. Oynalar ichidagi nuqtalar harakatlanadi: chiziq uchlari, polichiziq uchlari (yoy kesmalari balandligini saqlaydi), oʻlcham nuqtalari; aylana, ellips, matn, nuqta va bloklar markazi yoki kiritish nuqtasi ichida boʻlsa, butunlay harakatlanadi. Buyruqdan oldin qilingan tanlov oʻzini yaratgan kesishuvchi oynalarni (va arqonlarni) saqlaydi, shuning uchun ular xuddi shunday choʻziladi. Oyna boʻlmasa, obyektlar butunlay harakatlanadi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Taxalluslar: `AR`; yoki {{ui:Massiv}}. `Obyektlarni tanlang`, soʻng `Massiv turini kiriting [Toʻgʻri burchakli/POlar] <Toʻgʻri burchakli>` (faqat ARRAY).

- Toʻgʻri burchakli 4 ustun × 3 qator bilan boshlanadi, obyektlar oʻlchamining 1.5 barobari oraliq bilan, oldindan koʻrinishda. `Variantni kiriting [Soni (COU)/Oraliq (S)/Ustunlar (COL)/Qatorlar (R)/eXit] <X>`: `COU` ustun va qatorlarni, `S` ustunlar va qatorlar orasidagi masofani soraydi (manfiy chapga yoki pastga), `COL` va `R` har biri bir yoʻnalish.
- Qutb: `Massivning markaz nuqtasini koʻrsating`, boshlangʻichda 6 element hammasi aylana boʻylab, burilgan. `Variantni kiriting [Elementlar (I)/Toʻldirish burchagi (F)/Elementlarni burish (ROT)/eXit] <X>`: `I` elementlar, `F` toʻldiriladigan burchak (+ soat strelkasiga qarshi, − soat strelkasi boʻyicha), `ROT` Ha yoki Yoʻq.
- {{key:Enter}} (eXit) nusxalarni oddiy obyekt sifatida yaratadi. Bitta ortga qaytarish qadami.
- `AS` (Bogʻlangan) oddiy nusxalar va keyin tahrirlash mumkin boʻlgan massiv oʻrtasida almashtiradi: bitta obyekt, uni keyin {{cmd:ARRAYEDIT}} bilan, tutqichlari yoki Xossalarda oʻzgartirasiz. Tanlov eslab qolinadi ({{cmd:ARRAYASSOCIATIVITY}}); boshlanishda oddiy nusxalar.

### ARRAYPATH

Egri chiziq boʻylab nusxalar. `Obyektlarni tanlang`, soʻng `Yoʻl egri chizigʻini tanlang`: chiziq, yoy, aylana, ellips, polichiziq yoki splayn (massivlanayotgan obyektlardan biri emas). Yoʻl obyektlarga yaqinroq uchidan boshlanadi va birinchi element obyektlarning hozirgi joyi boʻladi.

- `Variantni kiriting [Usul (M)/Elementlar (I)/Oraliq (SP)/Tekislash (AL)/Bogʻlangan (AS)/eXit] <X>`, oldindan koʻrinish bilan. `M`: `Boʻlish` elementlarni butun yoʻl boʻylab teng taqsimlaydi, `Oʻlchash` har bir masofada bittasini qoʻyadi. `I`: elementlar soni (Oʻlchash bilan 0 — sigʻadigan barchasi; yoʻl oxiridan katta son yoʻlga sigʻadigan narsaga cheklanadi). `SP`: elementlar orasidagi yoʻl boʻylab masofa (Oʻlchashga oʻtadi). `AL`: Ha — har bir element yoʻlga ergashib buriladi, Yoʻq — tik qoladi.
- `AS` {{cmd:ARRAY}} dagi kabi. U yoqiq boʻlganda massiv yoʻl shaklining oʻz nusxasini saqlaydi: keyin yoʻl egri chizigʻini tahrirlash elementlarni koʻchirmaydi.
- Yoʻl egri chiziq boʻlmasa yoki bitta element boʻlsa, rad etadi.

### ARRAYEDIT

Bogʻlangan variant bilan yaratilgan massivni oʻzgartiradi. `Massivni tanlang` (yoki avval tanlang). U massiv hozir qanday ekanini chop etadi, soʻng {{key:Enter}} gacha soraydi:

- Toʻgʻri burchakli: `COL` ustunlar va ularning oraligʻi, `R` qatorlar va ularning oraligʻi, `A` ustunlar yoʻnalgan burchak.
- Qutb: `I` elementlar, `F` toʻldirish burchagi, `ROT` elementlarni burish Ha yoki Yoʻq.
- Yoʻl: `M` Boʻlish yoki Oʻlchash, `I` elementlar, `SP` oraliq, `AL` yoʻl bilan tekislash.
- `S` (Manba) massiv takrorlaydigan obyektlarni oʻzini ochadi, blok muharriri kabi. Chizing va tahrirlang; {{cmd:ARRAYCLOSE}} saqlaydi yoki bekor qiladi, va har bir element ergashadi.
- `REP` (Almashtirish): `Almashtiriladigan obyektlarni tanlang`, `Almashtiriladigan obyektlarning asosiy nuqtasini koʻrsating`, soʻng almashtiriladigan elementlarni bosing, {{key:Enter}}. Oʻsha elementlar oʻrniga almashtirishni koʻrsatadi; almashtiriluvchi obyektlar chizmadan chiqadi va massivda yashaydi. `RES` (Tiklash) har bir elementda manba obyektlarini qayta koʻrsatadi.
- Har bir oʻzgarish bitta ortga qaytarish qadami. Oddiy nusxalar, oddiy blok havolasi va qulflangan qatlamdagi massivni rad etadi.

Xuddi shu raqamlar Xossalarda Massiv ostida; massivda tutqichlar bor: uning asosiy nuqtasi uni koʻchiradi, ikkinchi elementdagi tutqich oraliqni belgilaydi, oxirgi elementdan keyingi tutqich sonni belgilaydi (qutb: ikkinchi element nechta element, oxirgi element toʻldirish burchagi). {{cmd:EXPLODE}} massivni yana oddiy nusxalarga aylantiradi.

### ARRAYCLOSE

{{cmd:ARRAYEDIT}} manbasini tugatadi: `Massivning manba obyektlaridagi oʻzgarishlarni saqlaysizmi? [Saqlash/Bekor qilish] <Saqlash>`. Hech bir massivning manba obyektlari ochiq boʻlmasa, buni aytadi. {{cmd:BCLOSE}} xuddi shunday qiladi.

### ARRAYASSOCIATIVITY

`ARRAYASSOCIATIVITY uchun yangi qiymatni kiriting (1 = massivlar tahrirlanadigan boʻladi, 0 = oddiy nusxalar)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR va {{cmd:ARRAYPATH}} boshlanadigan narsani belgilaydi; ularning `AS` varianti xuddi shu sozlamani oʻzgartiradi. Shu brauzerda eslab qolinadi.

### OFFSET

Taxalluslar: `O`. Chiziqlar, yoylar, aylanalar va polichiziqlar.

Polichiziq tashqariga harakatlanib, uning toʻgʻri kesmalari burchakda ajralganda, {{cmd:OFFSETGAPTYPE}} boʻshliq qanday yopilishini hal qiladi.

- `Ofset masofasini koʻrsating [Oʻtish (T)] <oxirgi masofa yoki Oʻtish>`
- `Ofset qilinadigan obyektni tanlang`, soʻng `Ofset qilinadigan tomonda nuqtani koʻrsating` (yoki Oʻtish bilan, `Oʻtadigan nuqtani koʻrsating`), Enter gacha takrorlanadi.

### OFFSETGAPTYPE

- `Ofset burchak boʻshliqlari: 0 choʻzish, 1 yumaloqlash, 2 fasqalash`: {{cmd:OFFSET}} polichiziqning tashqi burchaklaridagi boʻshliqlarni qanday yopadi. `0` segmentlarni uchrashguncha choʻzadi (boshlangʻich sozlama), `1` ularni eski burchak atrofidagi yoy bilan, `2` toʻgʻri kesish bilan bogʻlaydi. Ichki burchaklar va yoy kesmalariga taʼsir qilmaydi. Seans uchun saqlanadi.

### EXTRIM

{{cmd:EXTRIM}} bir chetning bir tomonidagi hamma narsani kesadi. Kesuvchi chetni tanlang (chiziq, yoy, aylana, polichiziq, ellips, splayn yoki qurilish chizigʻi), soʻng tozalanadigan tomondagi nuqtani bosing: chetni kesib oʻtgan har bir chiziq, yoy, aylana, polichiziq va qurilish chizigʻi oʻsha tomondagi qismini yoʻqotadi, u chetdan boshlanadi. Tomonni tanlaganingizda, ketadigan boʻlaklar kursorga ergashadi. Yopiq chet uchun tomonlar ichki va tashqi. Faqat chetga tegib turgan obyektlar, va chetni kesib oʻtgan matn, shtrixlash, splayn va ellipslar oʻz holatida qoladi. Bitta ortga qaytarish qadami.

### TRIMEXTENDMODE

- `TRIMEXTENDMODE uchun yangi qiymatni kiriting (1 Tez, 0 Standart)`: {{cmd:TRIM}} va {{cmd:EXTEND}} qanday boshlanishi. `1` Tez: har bir obyekt kesuvchi chegara yoki chegara boʻladi. `0` Standart: avval chetlarni soraydi. LISP da `(setvar "TRIMEXTENDMODE" 0)` ham.

### TRIM

Taxalluslar: `TR`. Avval `Joriy sozlamalar: Tez rejim (TRIMEXTENDMODE 1), chetlar: uzaytirilmaydi, sudrash yoʻl chizadi` deb chop etadi. Tez rejimda har bir koʻrinadigan obyekt kesuvchi chetdir, va hech narsa kesib oʻtmagan obyekt oʻchiriladi; Standart rejimda avval `Kesuvchi chetlarni tanlang (Enter = har bir obyekt)` soraydi va faqat ularda kesadi.

- `Kesish yoki uzaytirish uchun obyektni tanlang yoki Shift bilan tanlang [Kesuvchi chetlar (T)/Toʻsiq (F)/Kesishuv (C)/Rejim (O)/Chet (E)/Oʻchirish (R)/Ortga qaytarish (U)]`, takrorlanadi: olib tashlanadigan boʻlakni bosing (koʻrsatkich ustida turganda kulrang va punktir koʻrinadi), bir nechtasi orqali yoʻl sudrang (hammasi bir qadamda ketadi), yoki ular orasida toʻsiq uchun ikki boʻsh nuqta bosing. {{key:Shift}} uzaytiradi. `T` kesuvchi chetlarni tanlaydi (Standart rejim), `F` toʻsiq nuqtalarini soraydi, `C` ikki oyna burchagi (qisman ichida boʻlgan boʻlaklar ketadi), `O` `Kesish rejimi variantini kiriting [Tez/Standart]` soraydi, `E` `Taxmin qilingan chet uzaytirish rejimini kiriting [Uzaytirish/Uzaytirilmasin]` (EDGEMODE), `R` tanlagan obyektlarni oʻchiradi, `U` oxirgi tanlovni yoki sudrashni bekor qiladi. Enter tugatadi. Qarang: [Kesish va uzaytirish](topic:trim-and-extend).
- Shtrixlashni bosish uni kesadi: kesuvchi chetlar shtrixlangan sohani boʻladi va bosgan boʻlagingiz olib tashlanadi (chizilgan kontur oʻrnida qolmaydi). Shtrixlash naqsh yoki gradientini saqlaydi; chegarasiga bogʻlangan shtrixlash endi bogʻlanmaydi, chunki u uni toʻldirmaydi. Shu yerda hech bir kesuvchi chet shtrixlashni boʻlmasa, shtrixlash chetdan tashqarida boʻlsa, yoki hech narsa qolmasa (oʻrniga {{cmd:ERASE}} ishlating), buni aytadi. Sudrash yoʻli yoki toʻsiq shtrixlashni kesmaydi.

### EXTEND

Taxalluslar: `EX`. TRIM bilan teskari: `Uzaytirish uchun obyektni tanlang yoki Shift bilan kesish uchun tanlang [Chegaraviy chetlar/Toʻsiq (F)/Kesishuv (C)/Rejim (O)/Chet (E)/Ortga qaytarish (U)]`. Bosish yaqin uchni keyingi chegaragacha uzaytiradi; sudralgan yoʻl yoki toʻsiq kesib oʻtgan har bir obyektni uzaytiradi; {{key:Shift}} kesadi. `B` chegaraviy chetlarni tanlaydi (Standart rejim). Rejim va Chet TRIM bilan umumiy.

### LINKVIEWS

Taxalluslar: `SYNCVIEWS`; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Oynalar koʻrinishini bogʻlash}}, yoki chizma yorligʻidagi bogʻlash belgisi. `Oynalar koʻrinishini bogʻlash [ON/OFF]` (Enter boshqa holatni oladi): yoqiq boʻlganda faol oynadagi surish yoki zoom bir xil turdagi fazoni koʻrsatadigan hamma oynalarni birga harakatlantiradi. Qarang: [Ekranni boʻlish](topic:split-screen).

### OPENIN3D

Taxalluslari yoʻq; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:ModelCraft’da ochish}}, 3D modellash ilovasi uzatilgan chizmani qabul qilganda. Uni u yerda yangi yorliqda DWG sifatida ochadi (hech narsa yuklanmaydi). Brauzer yorliqni bloklasa, buni aytadi.

### LASSOMODE

`LASSOMODE uchun yangi qiymatni kiriting (1 = arqon, 0 = toʻrtburchak)`: boʻsh joyda bosib sudrash nima chizishi. Sozlamalar › CadCraft › Tanlash uchun sudrash bilan bir xil. Qarang: [Arqon bilan tanlash](topic:lasso-selection).

### FILLET

Taxalluslar: `F`. Chiziqlar, yoylar, aylanalar va polichiziqlar. Avval `Joriy sozlamalar: Rejim = TRIM, Radius = 0` chop etadi.

- `Birinchi obyektni tanlang [Ortga qaytarish (U)/Polichiziq (P)/Radius (R)/Kesish (T)/Bir nechta (M)]`
  - `R` `Yumaloqlash radiusini koʻrsating <oxirgi>` soraydi. `T` `Kesish rejimi variantini kiriting [Kesish/Kesmaslik]` soraydi: Kesmaslik bilan obyektlar oʻz holatida qoladi va faqat yoy qoʻshiladi.
  - `M` buyruqni {{key:Enter}} gacha boshqa burchaklar uchun davom ettiradi; `U` oxirgi burchakni buyruqdan chiqmasdan bekor qiladi.
  - `P` `2D polichiziqni tanlang [Radius]` soraydi va ikki toʻgʻri kesma uchrashgan har bir burchakni yumaloqlaydi. Allaqachon mavjud yumaloqlashlar yangi radius bilan almashtiriladi; radius 0 ularni olib tashlaydi. Tomonlari radius uchun juda qisqa boʻlgan burchaklar qoldiriladi va hisoblanadi.
- `Ikkinchi obyektni tanlang yoki burchakni qoʻllash uchun Shift bilan tanlang [Radius]`. Radiusdan qat’i nazar oʻtkir burchak uchun bosayotganda {{key:Shift}} ni bosib turing.

Saqlamoqchi boʻlgan qismda har bir obyektni bosing. Uchrashmaydigan ikki chiziq uzaytiriladi. Bir-biriga parallel ikki chiziq orasidagi boʻshliq boʻylab yarim aylana oladi, bosganingizga eng yaqin birinchi chiziq uchida. Aylana hech qachon kesilmaydi. Bir polichiziqning yonma-yon ikki kesmasi polichiziq ichidagi yoyni oladi; polichiziq va boshqa obyekt, kesim polichiziqning birinchi yoki oxirgi kesmasiga tushsa, ishlaydi.

### CHAMFER

Taxalluslar: `CHA`. Chiziqlar va polichiziqlarning toʻgʻri kesmalari. Avval joriy masofalarni (yoki uzunlik va burchakni) chop etadi.

- `Birinchi chiziqni tanlang [Ortga qaytarish (U)/Polichiziq (P)/Masofa (D)/Burchak (A)/Kesish (T)/Usul (E)/Bir nechta (M)]`
  - `D` `Birinchi fasqa masofasini koʻrsating <oxirgi>` va `Ikkinchi fasqa masofasini koʻrsating <birinchisi>` soraydi: birinchisi siz tanlagan birinchi chiziqdan, ikkinchisi boshqasidan kesiladi.
  - `A` `Birinchi chiziqdagi fasqa uzunligini koʻrsating` va `Birinchi chiziqdan fasqa burchagini koʻrsating` soraydi.
  - `E` (Usul) keyingi fasqa ikkalasidan qaysini ishlatishini tanlaydi. `T`, `M`, `U` va `P` {{cmd:FILLET}} dagi kabi ishlaydi.
- `Ikkinchi chiziqni tanlang yoki burchakni qoʻllash uchun Shift bilan tanlang [Masofa/Burchak/Usul]`. Oʻtkir burchak uchun {{key:Shift}}+bosish.

Chiziqdan uzunroq masofa rad etiladi (`Distance is too large.`).

### BREAK va BREAKATPOINT

Taxalluslar: `BR`. `Obyektni tanlang` (bosgan joyingiz birinchi nuqta), `Ikkinchi uzish nuqtasini koʻrsating [Birinchi nuqta]`; `F` `Birinchi uzish nuqtasini koʻrsating` va `Ikkinchi uzish nuqtasini koʻrsating` soraydi. Oradagi qism ketadi; aylanada, birinchi nuqtadan soat strelkasiga qarshi. BREAKATPOINT `Uzish nuqtasini koʻrsating` soraydi va obyektni oʻsha yerda ikkiga boʻladi (aylana emas).

### LENGTHEN

Taxalluslar: `LEN`. `Oʻlchash uchun obyektni tanlang [Oʻzgarish (DE)/Foiz (P)/Jami (T)/Dinamik (DY)]`: tanlash `Joriy uzunlik` (va yoy uchun qamrab olingan burchak) chop etadi va yana soraydi. `DE` `Oʻzgarish uzunligini kiriting (manfiy qisqartiradi) [Burchak]`, `P` `Uzunlik foizini kiriting`, `T` `Jami uzunlikni koʻrsating [Burchak]`, `DY` sudraydi. Soʻng `Oʻzgartiriladigan obyektni tanlang [Ortga qaytarish (U)]`, takrorlanadi: bosishga eng yaqin uch harakatlanadi. Chiziqlar, yoylar va ochiq polichiziqlar.

### JOIN

Taxalluslar: `J`. `Birlashtiriladigan obyektlarni tanlang`. Uchma-uch tutashgan chiziqlar, yoylar va ochiq polichiziqlar polichiziqqa aylanadi (zanjir yopilganda yopiq); bitta chiziqdagi chiziqlar bitta chiziq boʻladi; bitta aylanadagi yoylar bitta yoy yoki aylana boʻladi. Tarixda necha obyekt birlashganini va necha tasi birlashmaganini aytadi.

### MATCHPROP

Taxalluslar: `MA`, `PAINTER`. `Manba obyektini tanlang`, soʻng `Maqsad obyektlarini tanlang [Sozlamalar]` va {{key:Enter}}. Qatlam va rangni nusxalaydi; bir xil turdagi obyektlar orasida matn balandligi va kengligi, oʻlcham oʻlchamlari yoki shtrixlash naqshini. `S` `Xossani yoqing yoki oʻchiring [Rang/Qatlam (LA)/Matn/Oʻlcham/Shtrixlash]` soraydi, {{key:Enter}} gacha takrorlanadi; tanlov seans uchun saqlanadi.

### EXPLODE

Taxalluslar: `X`. Polichiziqlar chiziq va yoylarga, blok havolalari oʻz obyektlariga, oʻlchamlar chiziq, strelka va matnga aylanadi. Tahrirlanadigan massiv ({{cmd:ARRAYEDIT}}) oʻz obyektlarining oddiy nusxalariga aylanadi.

- `Obyektlarni tanlang`

### GROUP

Taxalluslar: `G`. {{cmd:GROUP}} tanlangan obyektlarga ularning umumiy nomini beradi. Obyektlarni tanlang, soʻng nom yozing (boʻshliqsiz; `?` guruhlarni roʻyxatlaydi; Enter nomsiz guruh yaratadi) va nomli guruh uchun ixtiyoriy tavsif. Shundan keyin ularning biriga bosish yoki uni oladigan oyna hammasini tanlaydi, shuning uchun ular birga harakatlanadi, nusxalanadi va oʻchiriladi; har bir obyekt baribir oʻz obyekti. Obyekt bir nechta guruhda boʻlishi mumkin. Butun guruhning nusxasi yangi nomsiz guruh; bitta aʼzoning nusxasi guruhga qoʻshiladi. Guruhlar yaratilgan fazoga tegishli (model yoki varaq). Ular DWG yoki DXF sifatida saqlanganda va CadCraft da qayta ochilganda saqlanadi; DXF 2000 fayllari ularni boshqa dasturlar uchun guruh obyektlari sifatida ham olib yuradi, va boshqa dasturda yaratilgan guruhlar DXF yoki DWG ochilganda oʻqiladi.

### UNGROUP

{{cmd:UNGROUP}} guruhlarni ajratadi: guruhlar obyektlarini tanlang (ular qatnashgan har bir guruh ajratiladi) yoki `Name` va guruh nomini yozing. Obyektlar chizmada qoladi. Bitta ortga qaytarish qadami guruhlarni qaytaradi.

### GROUPEDIT

{{cmd:GROUPEDIT}} bitta guruhni oʻzgartiradi. Uning obyektlaridan birini bosing yoki `Name` va uning nomini bering; allaqachon tanlangan guruh oʻz holicha olinadi. Soʻng: obyektlarni `Add` (bittalab tanlanadi, guruh boʻyicha emas), obyektlarni `Remove`, guruhni `REName` qayta nomlash, `Description` tavsifini oʻzgartirish yoki bosish uni butunlay tanlashini `Selectable` bilan belgilash. `eXit` yoki Enter tugatadi. Obyektlari qolmagan guruh yoʻqoladi.

### PICKSTYLE

- `Guruh tanlovi: 0 bosish bitta obyektni tanlaydi, 1 butun guruhni`: `1` (boshlangʻich sozlama) bilan guruhlangan obyektda bosish yoki oyna butun guruhni tanlaydi; `0` bilan alohida obyektlar, shuning uchun bitta aʼzoni tahrirlash mumkin. Seans uchun saqlanadi.

## Bufer

CadCraft’ning oʻz buferi: u bitta chizma ichida, chizmalar orasida va shu brauzerdagi CadCraft yorliqlari orasida ishlaydi. Qarang: [Nusxalash, qoʻyish va nusxa olish](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, yoki {{ui:Tahrirlash}} guruhidagi {{ui:Nusxalash}}. Obyektlarni ular ishlatadigan bloklar va qatlamlar bilan buferga nusxalaydi. Obyektlar tanlangan holda qoladi.

- `Nusxalash uchun obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)

### CUTCLIP

{{key:Mod+X}}, yoki {{ui:Koʻproq}} menyusidagi {{ui:Kesish}}. Obyektlarni buferga nusxalaydi, soʻng ularni oʻchiradi (bitta ortga qaytarish qadami).

- `Kesish uchun obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)

### COPYBASE

Obyektlarni siz tanlagan asosiy nuqta bilan buferga nusxalaydi; qoʻyganda shu nuqta joylashadi.

- `Asosiy nuqtani koʻrsating`
- `Nusxalash uchun obyektlarni tanlang`

### PASTECLIP

{{key:Mod+V}}, yoki {{ui:Tahrirlash}} guruhidagi {{ui:Qoʻyish}}. Nusxa kursorga ergashadi, obyektlar chegarasining pastki chap burchagidan (yoki markazidan, yoki `COPYBASE` nuqtasidan; qarang: [CadCraft sozlamalari](topic:settings)) osilib.

- `Kiritish nuqtasini koʻrsating`

Qoʻyilgan obyektlar tanlangan boʻladi. Chizmada shu nomli blok allaqachon boʻlsa, u bu chizmaning taʼrifini saqlaydi.

Agar MarkupCraft da nusxalangan hudud CadCraft nusxasidan yangi boʻlsa (va 6 soatdan kam oldin boʻlsa), {{key:Mod+V}} va `PASTECLIP` oʻrniga shu hududni qoʻyadi: qarang `PASTEAREA`.

### PASTEAREA

Taxalluslar: `PAREA`. {{ui:Nusxalangan hududni joylashtirish}} {{ui:Koʻproq}} menyusida. MarkupCraft da {{ui:Hududni nusxalash}} bilan nusxalangan hududni asl oʻlchamida rasm sifatida qoʻyadi. Qarang: [Chizmadagi rasmlar](topic:pictures).

- `Nusxalangan hududning chap pastki burchagini koʻrsating`
- `Uning qogʻoz oʻlchamini masshtab bilan belgilang (1:100 varaq uchun 100; Nuqtalar: unda ikki nuqta va ularning haqiqiy masofasi) [Nuqtalar] <1>` (faqat varaqda chizma masshtabi boʻlmasa): son, qogʻoz oʻlchami uchun {{key:Enter}}, yoki `P`, soʻng `Qoʻyilgan hududdagi birinchi nuqta`, `Qoʻyilgan hududdagi ikkinchi nuqta` va ularning haqiqiy masofasi.

### PASTEORIG

{{key:Mod+Shift+V}}, yoki {{ui:Koʻproq}} menyusidagi {{ui:Joyida qoʻyish}}. Obyektlar nusxalangan koordinatalarda qoʻyiladi. Hech narsa soʻramaydi.

### DUPLICATE

Taxalluslar: `DUP`. {{key:Mod+D}}, yoki {{ui:Koʻproq}} menyusidagi {{ui:Nusxalash va koʻchirish}}. Obyektlarning nusxasi kursor bilan birga oʻz joyidan harakatlanadi; {{key:Esc}} hech narsa qoldirmaydi. Buferdan foydalanmaydi.

- `Nusxalash uchun obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)
- `Nusxa qayerga borishini koʻrsating (Esc hech narsa qoldirmaydi)`: bosing, nuqta yozing, `@dx,dy` (kursor turgan joydan), yoki kursor tomon masofa.

### SELECT

`Obyektlarni tanlang` soraydi (quyidagi har bir variant bilan) va tanlaganingizni keyingi buyruq uchun yoki keyinroq `P` uchun tanlangan holda qoldiradi.

### QSELECT

Taxalluslar: `QS`. Brauzerda {{ui:Tezkor tanlash}} dialogi (qarang: [Obyektlarni tanlash](topic:select-objects#select-by-a-rule-quick-select)). Dialog boʻlmasa, buyruq satri `Obyekt turini kiriting`, `Xossani kiriting`, `Amalni kiriting [=/<>/>/</*/Hammasini tanlash] <=>` va `Qiymatni kiriting` soraydi. Mos kelganlar tanlov boʻladi.

### SELECTSIMILAR

Taxalluslar: `SIM`. `Obyektlarni tanlang [SEttings]` (yoki joriy tanlov): bir xil turdagi, bir xil qatlam va rangdagi har bir obyektni tanlaydi (blok nomi va shtrixlash naqshi bilan birga). `SE` `Xossani yoqing yoki oʻchiring [LAyer/COlor/NAme/PAttern/HEight]` soraydi, {{key:Enter}} gacha takrorlanadi.

### FIND

Taxallusi yoʻq; yoki {{ui:Tahrirlash}} › {{ui:Koʻproq}} › {{ui:Topish va almashtirish}}. Brauzerda {{ui:Topish va almashtirish}} dialogi (qarang: [Matn va yorliqlar qoʻshish](topic:text#find-and-replace-words)). Dialogsiz: `Topish uchun matnni kiriting`, soʻng `Almashtiruvchi matnni kiriting (Enter: topilganlarni tanlash)`. Matnda, atribut qiymatlarida va oʻlcham matnida qidiradi, ochiq yorliqda yoki tanlovda.

### SELECTALL va DESELECT

`SELECTALL` (taxallus `AI_SELALL`, {{key:Mod+A}}) ochiq yorliqdagi barcha tahrirlanadigan obyektlarni tanlaydi. `DESELECT` (taxalluslar `AI_DESELECT`, `SELECTNONE`; yoki {{key:Esc}}) tanlovni tozalaydi.

## Oʻlchamlar

### DIMLINEAR

Taxalluslar: `DLI`, `DIMLIN`. Gorizontal yoki vertikal masofa.

- `Birinchi choʻzilma chiziq boshini koʻrsating [Obyektni tanlash]` (Enter yoki `S`: `Oʻlchanadigan obyektni tanlang`, soʻng chiziq, yoy, aylana yoki polichiziq kesmasini bosing)
- `Ikkinchi choʻzilma chiziq boshini koʻrsating`
- `Oʻlcham chizigʻi joyini koʻrsating [Matn/Gorizontal/Vertikal/Burilgan]`. `T` matn soraydi (`<>` oʻlchangan qiymat), `H` va `V` yoʻnalishni belgilaydi, `R` `Oʻlcham chizigʻining burchagini koʻrsating <0>` soraydi.

### DIMALIGNED

Taxalluslar: `DAL`, `DIMALI`. Ikki nuqta orasidagi haqiqiy masofa.

- Boshlanishlar {{cmd:DIMLINEAR}} dagidek, soʻng `Oʻlcham chizigʻi joyini koʻrsating [Matn]`.

### DIMANGULAR

Taxalluslar: `DAN`, `DIMANG`.

- `Yoy, aylana yoki chiziqni tanlang, yoki uch uchun Enter`
- Yoy: uning burchagi. Aylana: `Ikkinchi burchak uchini koʻrsating`. Chiziq: `Ikkinchi chiziqni tanlang`. Enter: `Burchak uchini koʻrsating`, `Birinchi burchak uchini koʻrsating`, `Ikkinchi burchak uchini koʻrsating`.
- `Oʻlcham chizigʻi joyini koʻrsating [Matn]`: oʻlchash uchun burchak ichiga bosing.

### DIMRADIUS va DIMDIAMETER

Taxalluslar: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Yoy yoki aylanani tanlang`, soʻng `Oʻlcham chizigʻi joyini koʻrsating [Matn]`.

### DIMCONTINUE

Taxalluslar: `DCO`, `DIMCONT`. Oxirgi chiziqli yoki tekislangan oʻlchamdan davom etadi (yoki `Chiziqli yoki tekislangan oʻlchamni tanlang` soraydi).

- `Ikkinchi choʻzilma chiziq boshini koʻrsating [Ortga qaytarish (U)]`, Enter gacha takrorlanadi.

### DIMBASELINE

Taxalluslar: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} kabi, lekin har bir oʻlcham birinchi boshlanishdan boshlanadi va yanada tashqariga joylashadi.

### DIMORDINATE

Taxalluslar: `DOR`, `DIMORD`. `Xususiyat joyini koʻrsating`, soʻng `Yetakchi uchini koʻrsating [Xdatum/Ydatum/Matn]`. Xususiyatning UCS boshidan X yoki Y boʻyicha masofasini yetakchida yozadi: asosan yuqoriga yoki pastga yurgan yetakchi X ni, yonga yurgan Y ni oʻqiydi; `Xdatum` va `Ydatum` buni belgilaydi. Avval boshni {{cmd:UCS}} bilan belgilang (uni boʻlmasa, chizmaning 0,0 nuqtasi). Tutqichlar xususiyatni, boshni va yetakchi uchini koʻchiradi, va qiymat ergashadi. DWG va DXF da haqiqiy koordinata oʻlchami sifatida saqlanadi. Yetakchi uchini xususiyatning oʻzida rad etadi.

### DIMARC

Taxalluslar: `DAR`. `Yoy yoki polichiziq yoy kesmasini tanlang`, soʻng `Yoy uzunligi oʻlchamining joyini koʻrsating [Matn]`. Yoy boʻylab oʻlchaydi (vatar boʻylab emas) va qiymat oldiga yoy belgisini yozadi. Toʻliq aylana, chiziq yoki toʻgʻri polichiziq kesmasini rad etadi. DWG uni yoy uzunligi oʻlchami sifatida saqlaydi; DXF uni matni uzunlik boʻlgan burchakli oʻlcham sifatida saqlaydi, va CadCraft uni yana yoy uzunligi oʻlchami sifatida ochadi.

### DIMJOGGED

Taxalluslar: `DJO`, `JOG`. `Yoy yoki aylanani tanlang`, `Markaz joyini bekor qilish nuqtasini koʻrsating`, `Sindirish joyini koʻrsating`. Markazi uzoq yoki varaqdan tashqarida boʻlgan egri chiziq uchun radius oʻlchami: oʻlcham chizigʻi markaz oʻrniga siz bergan nuqtadan boshlanadi, ichida sindirish bilan, va baribir haqiqiy radiusni yozadi. DWG uni sindirilgan radius oʻlchami sifatida saqlaydi; DXF uni radius oʻlchami sifatida saqlaydi, va CadCraft uni yana sindirilgan holda ochadi.

### DIMJOGLINE

Taxalluslar: `DJL`. `Sindirish qoʻshish uchun oʻlchamni tanlang [Olib tashlash]`, soʻng `Sindirish joyini koʻrsating (yoki Enter bosing)`. Chiziqli yoki tekislangan oʻlcham chizigʻiga sindirish belgisini qoʻyadi, masofa masshtab boʻyicha chizilmaganini koʻrsatish uchun; qiymat oʻzgarmaydi. `Olib tashlash` uni yechadi. Boshqa turdagi oʻlchamlarni rad etadi.

### QDIM

Taxallusi yoʻq. `Oʻlchanadigan geometriyani tanlang`, soʻng `Oʻlcham chizigʻi joyini koʻrsating [Uzluksiz/Pogʻonali/Asosiy chiziq/Koordinata/Radius/Diametr/datumPoint]`. Chiziq va polichiziq kesmalarining uchlaridan, aylana va yoylarning markazlaridan, nuqtalar va blok havolalaridan bir qadamda bir nechta obyektni oʻlchaydi. Obyektlar ustida yoki ostida joylashgan joy kesib oʻlchaydi, yonida joylashgan joy yuqoriga oʻlchaydi. `Uzluksiz` nuqtalarni zanjirlaydi, `Asosiy chiziq` hammasini birinchisidan oʻlchaydi, `Pogʻonali` oʻrtadan juftliklarni joylashtiradi, `Koordinata` har bir nuqtaga datumdan masofasini beradi (`datumPoint` yangisini tanlaydi), `Radius` va `Diametr` tanlangan har bir aylana va yoyni oʻlchaydi. Rejim eslab qolinadi. Yaratgan hamma narsa bitta ortga qaytarish qadami. Ikkitadan kam nuqta boʻlsa yoki Radius va Diametr uchun yoy yoki aylana boʻlmasa, buni aytadi.

### DIMBREAK

Taxalluslar: `DBREAK`. `Uzilishlarni qoʻshish yoki olib tashlash uchun oʻlchamlarni tanlang`, soʻng `Boshqa obyektlar kesib oʻtgan joyda uzing [Avtomatik/Qoʻlda/Olib tashlash] <Avtomatik>`. `Avtomatik` oʻlcham va choʻzilma chiziqlarda boshqa obyekt ularni kesib oʻtgan har qanday joyda boʻshliq qoldiradi va oʻsha obyektlar yoki oʻlcham harakatlanganda uni qayta hisoblaydi. `Qoʻlda` (bitta oʻlcham) ikki nuqtani soraydi va ular orasida boʻshliq qoldiradi. `Olib tashlash` barcha boʻshliqlarni yechadi. Boʻshliq oʻlcham matnining balandligidan 1.5 barobar.

### DIMSPACE

Taxallusi yoʻq. `Asosiy oʻlchamni tanlang`, `Oraliq beriladigan oʻlchamlarni tanlang`, `Oraliq qiymatini yoki Avtomatik ni kiriting <Avtomatik>`. Parallel chiziqli va tekislangan oʻlchamlarning (yoki bir uchdan burchakli) oʻlcham chiziqlarini bir xil masofada joylashtiradi, asosiy oʻlchamdan hisoblab, har biri oʻz tomonida. `0` ularni asosiy bilan bir chiziqqa tekislaydi; `Avtomatik` oʻlcham matni balandligining ikki barobari. Asosiyga parallel boʻlmagan oʻlchamlar oʻz holatida qoladi.

### DIMINSPECT

Taxallusi yoʻq. `Oʻlchamlarni tanlang`, `Tekshiruv ramkasi shakli [Yumaloq/Burchakli/Yoʻq/olib tashlash] <Yumaloq>`, `Belgini kiriting`, `Tekshirish tezligini kiriting <100%>`. Qiymat atrofida ramka chizadi, oldida belgi va keyin tekshirish tezligi bilan. `olib tashlash` ramkani yechadi. Tolerantlik matni qiymat bilan qoladi.

### DIMOVERRIDE

Taxalluslar: `DOV`, `DIMOVER`. `Bekor qilinadigan oʻlcham oʻzgaruvchisi nomini kiriting yoki Tozalash`, `Yangi qiymatni kiriting ...`, Enter gacha yana, soʻng `Oʻlchamlarni tanlang`. Faqat tanlangan oʻlchamlarning sozlamalarini oʻzgartiradi; oʻlcham uslubi oʻzgarmaydi. Son yoki kalit boʻlgan oʻzgaruvchilarni oladi (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Tozalash` tanlangan oʻlchamlarni uslubiga qaytaradi. Oʻzgaruvchi boʻlmagan nomni va qabul qila olmaydigan qiymatni rad etadi.

### DIMREASSOCIATE

Taxalluslar: `DRE`, `DIMREASSOC`. `Oʻlchamlarni tanlang`, soʻng har biri uchun uning choʻzilma chiziq boshlari (`Obyektdagi birinchi choʻzilma chiziq boshini koʻrsating`: chiziqning uchi yoki oʻrtasi, polichiziq burchagi, markaz ilashadi; Enter bu nuqtani erkin qoldiradi), yoki radius, diametr, sindirilgan radius yoki yoy uzunligi oʻlchami uchun `Yoy yoki aylanani tanlang`. Oʻlcham oʻsha obyektlarga bogʻlanadi: ular harakatlansa yoki oʻlchami oʻzgarsa, u bitta ortga qaytarish qadamida ergashadi va qayta oʻlchaydi. Bogʻlangan nuqtani qoʻlda koʻchirish yoki obyektni oʻchirish bu bogʻlanishni tugatadi. Bogʻlanish DWG va DXF 2000 da CadCraft ning oʻz maʼlumoti sifatida saqlanadi; boshqa dasturlar oddiy oʻlchamni koʻradi.

### DIMDISASSOCIATE

Taxalluslar: `DDA`, `DIMDISASSOC`. `Oʻlchamlarni tanlang`. Ular bogʻlangan obyektlardan ajratiladi; hech narsa harakatlanmaydi.

### CENTERMARK

Taxalluslar: `CM`, `DIMCENTER`, `DCE`. `Markaz belgisini qoʻshish uchun aylana yoki yoyni tanlang`, Enter gacha yana. Markazda xoch va egri chiziqdan biroz tashqariga toʻrtta markaz chizigʻi chizadi (chiziq turi CENTER), joriy qatlamda oddiy chiziqlar sifatida; joriy oʻlcham sozlamalarining strelka oʻlchami va umumiy masshtabidan oʻlchangan, UCS bilan burilgan. Aylana koʻchsa ular ergashmaydi.

### CENTERLINE

Taxalluslar: `CL`. `Birinchi chiziqni tanlang`, `Ikkinchi chiziqni tanlang`. Ikki chiziq orasida (ular kesishsa bissektrisa boʻylab) oʻrtada chiziq chizadi, ular uzunligidan biroz uzunroq, CENTER chiziq turida. Oddiy chiziq: ikki chiziqqa ergashmaydi.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Taxallusi yoʻq. Har biri `Yangi qiymatni kiriting ... <joriy>` soraydi va **yangi** oʻlchamlar uchun oʻsha oʻlchamni belgilaydi: umumiy masshtab, matn balandligi, strelka oʻlchami, oʻnlik kasr xonalari (8 gacha), matn atrofidagi boʻshliq, oʻlcham chizigʻidan tashqariga choʻzilma, boshlangʻichdan siljish. Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings).

### DIMLUNIT

Oʻlcham sozlamasi: faqat yangi oʻlchamlarning formati (1 ilmiy, 2 onlik, 3 muhandislik, 4 arxitektura, 5 kasr).

### DIMSTYLE va -DIMSTYLE

Taxalluslar: `DST`, `DDIM`, `D`. Oʻlcham uslublari boshqaruvchisi: {{ui:Joriyni oʻrnatish}}, {{ui:Yangi…}}, {{ui:Oʻzgartirish…}}, {{ui:Nomini oʻzgartirish…}}, {{ui:Oʻchirish}}, {{ui:Solishtirish…}}, {{ui:Tanlanganlarga qoʻllash}}. Buyruq satrida `-DIMSTYLE`: `Oʻlcham uslubi [Tiklash/Saqlash/Oʻchirish/Qoʻllash/Solishtirish/Nomini oʻzgartirish/Roʻyxat]`. Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings#named-dimension-styles).

### DIMEDIT va DIMTEDIT

`DIMEDIT` (`DED`): `Oʻlchamni tahrirlash [Bosh/Yangi/Burish/Ogʻma] <Bosh>`, soʻng oʻlchamlar (yoki allaqachon tanlanganlar). Yangi matn soraydi (`<>` = oʻlchov); Burish burchak uchun (0 matnni qaytaradi); Ogʻma choʻzilma chiziqlarning X oʻqidan burchagi uchun (Enter = yoʻq; faqat chiziqli va tekislangan oʻlchamlar). `DIMTEDIT` (`DIMTED`): `Oʻlcham matni [Chap/Oʻng/Markaz/Bosh/Burchak] <Markaz>`. Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Taxalluslar: `DTU`. `Yangi oʻlchamlar matnidagi birliklar [Chizma birliklari/mm/cm/m/km]`, yoki tanlangan oʻlchamlar bilan `Tanlangan oʻlchamlar matnidagi birliklar`. Oʻlchangan uzunlikni shu birlikda, birlik orqasidan yozadi (DIMLFAC va DIMPOST qoʻshimchasi); `D` chizma birliklariga qaytaradi. Qarang: [Oʻlchamlar mm, sm, m yoki km da](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Taxalluslar: `RC`. `Uzunlik: … Turi: …` chop etadi, soʻng `Birinchi nuqtani koʻrsating [Yoy uzunligi/Obyekt/Toʻrtburchak/Koʻpburchak/Erkin]`. Toʻrtburchak `Qarama-qarshi burchakni koʻrsating` soraydi; Koʻpburchak `Keyingi nuqtani koʻrsating (Enter bulutni yopadi) [Ortga qaytarish (U)]`; Erkin bosish yoki {{key:Enter}} gacha koʻrsatkichni kuzatadi; `O` `Obyektni tanlang` va `Teskari yoʻnalishmi? [Ha/Yoʻq] <Yoʻq>` soraydi va obyektni bulutga aylantiradi. `A` `Har bir yoyning uzunligini kiriting` soraydi. `R`, `P` va `F` keyingi bulut turini tanlaydi. Natija yoylardan iborat yopiq polichiziq.

### MLEADER

Taxalluslar: `MLD`; yoki {{ui:Yetakchi}}. `Yetakchi strelkasi joyini koʻrsating [Strelka oʻlchami/Qoʻnish masofasi/Blok]`, `Yetakchi qoʻnish joyini koʻrsating`, soʻng matn joyida katakda (yoki unda boʻlmasa, `Matnni kiriting (boʻsh qator tugatadi)`). `Blok` avval blok nomini soraydi va koʻp yetakchi matn oʻrniga shu blokni koʻrsatadi. Yana yetakchi chiziqlar: {{cmd:MLEADEREDIT}}. DWG da haqiqiy koʻp yetakchi sifatida saqlanadi; DXF chizgan chiziqlar, strelka va matnni saqlaydi.

### MLEADEREDIT

Taxalluslar: `MLE`. `Koʻp yetakchini tanlang`, soʻng `Yetakchi strelkasi joyini koʻrsating [Yetakchilarni olib tashlash/Blok mazmuni/Matn mazmuni]`: har bir nuqta yangi strelkadan bir xil qoʻnishga yetakchi chiziq qoʻshadi, Enter gacha. `Yetakchilarni olib tashlash` bosgan yetakchi chiziqni oʻchiradi (koʻp yetakchida kamida bitta qoladi). `Blok mazmuni` blok nomini soraydi va matn oʻrniga shu blokni koʻrsatadi (uning atributlari soʻraladi); `Matn mazmuni` matnni qaytaradi. Har bir yetakchi chiziqning oʻz tutqichi bor. DWG bitta koʻp yetakchida har bir yetakchi chiziq va blokni saqlaydi.

### MLEADERALIGN

Taxalluslar: `MLA`. `Koʻp yetakchilarni tanlang`, soʻng `Tekislash uchun koʻp yetakchini tanlang [Taqsimlash/Oraliq/Joriy oraliqdan foydalanish]` va `Yoʻnalishni koʻrsating`. Boshqa koʻp yetakchilarning qoʻnishlarini (va ularning matni yoki blokini) tanlangan birining qoʻnishidan oʻsha yoʻnalishdagi chiziqqa koʻchiradi; strelkalar qayerga qaragan boʻlsa, shu yerda qoladi. `Oraliq` ularni teng masofada ham qoʻyadi; `Taqsimlash` ikki nuqta soraydi va ularni orasida teng yoyadi. Kamida ikkita koʻp yetakchi kerak.

### MLEADERCOLLECT

Taxalluslar: `MLC`. `Koʻp yetakchilarni tanlang`, soʻng `Yigʻilgan koʻp yetakchi joyini koʻrsating [Vertikal/Gorizontal]` (Enter birinchisining joyini saqlaydi). Bir nechtasidan bitta koʻp yetakchi yaratadi: blok mazmuni yangi blokka tushadi, u hammasini yonma-yon yoki bir-birining ostida saqlaydi; matn mazmuni bitta izohga aylanadi, har bir qator bilan. Birinchi koʻp yetakchi oʻz yetakchi chiziqlarini saqlaydi; qolganlari olib tashlanadi. Matn va blok mazmunining aralashmasini rad etadi.

### TABLE

Taxalluslar: `TB`; yoki {{ui:Izohlash}} › {{ui:Koʻproq}} › {{ui:Jadval}}. Jadval yaratadi: bitta obyekt, uni boshqa obyekt kabi koʻchirasiz, nusxalaysiz, buraysiz, masshtablaysiz va chop etasiz; katakchalari maʼlumot sifatida saqlanadi.

- `Maʼlumot qatorlari soni yoki [Qoʻyish/Fayl/Uslub] <3>`, soʻng `Ustunlar soni <3>`, `Matn balandligi` va `Jadvalning yuqori chap burchagi`. Jadvalda sarlavha qatori (bitta birlashgan katak) va maʼlumot qatorlari ustidagi sarlavha qatori boʻladi.
- `P`: buferdagi elektron jadval katakchalaridan jadval (katakchalar orasida tabulyatsiya bilan matn). Buferda shunday katakchalar boʻlganda {{key:Ctrl+V}} xuddi shunday qiladi, CadCraft ning oʻz nusxasi yangiroq boʻlmasa (yoki CadCraft buni ajrata olmasa: u oʻz nusxasini qoʻyadi va buni aytadi). `F`: `.csv` yoki tabulyatsiya bilan ajratilgan fayldan jadval. Birinchi qator sarlavha qatori boʻladi; ustun kengliklari matnga moslashadi.
- `S`: bu jadval uchun jadval uslubini tanlash (qarang: {{cmd:TABLESTYLE}}).
- Qator yoki ustunlar soni butun son boʻlmasa, yoki jadval sigʻmaydigan katakchalar soni (2 000 qator, 200 ustun, 40 000 katak) boʻlsa, rad etadi.
- {{cmd:EXPLODE}} jadvalni chiziq va matnga aylantiradi. DWG sifatida saqlanganda jadval boshqa dasturlar tahrirlay oladigan haqiqiy jadval obyekti; DXF sifatida saqlanganda uni chizadigan blok, va CadCraft uni yana jadval sifatida ochadi.

### TABLEDIT

Taxalluslar: `TABLEEDIT`, `TABEDIT`; yoki katakni ikki marta bosing. Jadvalni tahrirlaydi.

- `Yozish uchun katakni tanlang (tugatish uchun Enter) yoki [Qator/Ustun/Oʻlcham/Birlashtirish/Birlashtirmaslik/Tekislash/Balandlik/Turi/Tozalash]`. Katakni bosing, yoki jadval tanlangan holda uning nomini yozing (`B3`: B ustun, 3 qator; sarlavha qatori 1-qator). Brauzerda katakning ustida quti ochiladi: {{key:Enter}} matnni saqlaydi, {{key:Tab}} keyingi katakka oʻtadi, {{key:Alt+Enter}} yangi qator boshlaydi, {{key:Esc}} katakni avvalgidek qoldiradi.
- `=` bilan boshlangan matn formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, qavslar va `sqrt` va `round` kabi funksiyalar bilan. Katakda qiymat koʻrinadi; oʻz katagini nomlaydigan, jadvaldan tashqari katakni yoki raqami boʻlmagan katakni nomlaydigan formula `####` koʻrsatadi va buyruq satri sababini aytadi.
- `R` / `C`: tanlangan katakda qator yoki ustunlarni `Qoʻshish` yoki `Oʻchirish` (nechta, va yuqorida yoki pastda, chapda yoki oʻngda). Formulalar ular nomlagan katakchalarga ergashadi.
- `S`: ustunning kengligi va qatorning balandligi. Qator hech qachon matni talab qilganidan past boʻlmaydi. Tanlangan jadvalda har bir ustun va qatorning chetida ham tutqich bor.
- `M`: bir tanlangan katakdan ikkinchisigacha birlashtirish; `U`: birlashtirmaslik. `A`: tekislash (`TL` yuqori chap … `MC` oʻrta markaz … `BR` pastki oʻng). `H`: bu katakning oʻz matn balandligi (0 = uslubniki). `K`: qatorni sarlavha, sarlavha yoki maʼlumot qatori qilish. `CL`: katakni boʻshatish.
- Qulflangan qatlamdagi jadvalni, barcha qatorlar yoki ustunlarni oʻchirishni va boshqa birlashtirilgan katakchani ikkiga boʻlib yuboradigan birlashtirishni rad etadi.

### TABLESTYLE

Taxalluslar: `TS`. Jadval uslublarini ularni ishlatayotgan jadvallar soni bilan roʻyxatlaydi, soʻng `Jadval uslubi: [Yangi/Belgilash/Tahrirlash/Oʻchirish/Qoʻllash]`.

- Uslub sarlavha, ustun va maʼlumot qatorlarining matn balandligi va tekislashini, katak chetini va qaysi chiziqlar chizilishini (tashqi, qatorlar orasida, ustunlar orasida) saqlaydi.
- `N` joriy uslubdan uslub yaratadi va uni joriy qiladi; `S` joriy uslubni belgilaydi (yangi jadvallar uni oladi); `E` uni tahrirlaydi: unda ishlatilgan jadvallar qayta chiziladi; `A` tanlangan jadvallarga joriy uslubni beradi; `D` uslubni oʻchiradi (Standart va joriy uslub emas; undan foydalangan jadvallar oʻz koʻrinishini saqlaydi).
- Uslublar chizma bilan saqlanadi (DWG va DXF).

### TABLEEXPORT

Jadval koʻrsatayotgan narsani CSV fayl sifatida saqlaydi (formula oʻz qiymati sifatida). `Jadvalni tanlang`, yoki avval bitta tanlang. `=`, `+`, `-` yoki `@` bilan boshlangan matnli katakchalar oldiga `'` qoʻyiladi, elektron jadval ularni ishga tushirmasligi uchun.

### TABLEPASTE

Taxalluslar: `PASTETABLE`. Buferdagi elektron jadval katakchalaridan jadval yaratadi, soʻng uning yuqori chap burchagini soraydi. {{cmd:TABLE}} › `Paste` bilan bir xil.

### DATALINK

Taxalluslar: `DL`. `Maʼlumot bogʻlanishi: [Yangi/Roʻyxat/Olib tashlash] <Yangi>`. `N` CSV fayl soraydi, unga jadval joylashtiradi va fayl nomini eslab qoladi; `L` bogʻlanishlarni fayli, hajmi, oʻqilgan vaqti va nechta jadval ishlatayotgani bilan roʻyxatlaydi; `R` bogʻlanishni olib tashlaydi (uning jadvallari oddiy jadval boʻlib qoladi).

### DATALINKUPDATE

Taxalluslar: `DLU`. Maʼlumot bogʻlanishining faylini qayta oʻqiydi va unga bogʻlangan jadvallarni qayta toʻldiradi (qatorlar va ustunlar mosligi uchun qoʻshiladi yoki olib tashlanadi). Brauzer faylni oʻzi ocholmaydi, shuning uchun uni qayta tanlashingizni soraydi. Bir nechta bogʻlanish boʻlsa, qaysi birini soraydi.

### FIELD

Chizmaga maydon qoʻyadi: oʻzi hisoblanadigan matn. `Maydon: [Sana/Fayl nomi/Varaq/Xossa/Obyekt/Ifoda/Kod] <Sana>`:

- `D`: hozir yoki saqlangan, yaratilgan yoki chop etilgan sana va format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: fayl nomi, kengaytmasi bilan yoki kengaytmasiz. `S`: varaqning raqami, sarlavhasi yoki nechta varaq borligi. `P`: chizma xossasi nomi boʻyicha (qarang: {{cmd:DWGPROPS}}). `O`: obyektni tanlang, soʻng nimani oʻqishni (maydon, uzunlik, perimetr, radius, diametr, qatlam, nom, x, y, matn, burilish, rang) va kasr xonalarini. `E`: formula. `C`: kodlari yozilgan holicha matn, masalan `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Soʻng `Maydon qoʻyish uchun matnni, jadval katakchasini yoki atributli blokni tanlang (Enter: yangi matn)`: tanlangan matnga maydon oʻzi bor narsadan keyin qoʻshiladi; jadval katakchasi ham shunday; blok havolasi qaysi atributligini soraydi; {{key:Enter}} yangi matn uchun balandlik va nuqta soraydi.
- Ekranda maydon kulrang fonda koʻrinadi; chop etish va PDF da hech qachon koʻrinmaydi. Maydon matnini qoʻlda yozish maydonni tugatadi. Hisoblab boʻlmaydigan maydon `####` koʻrsatadi.
- Obyekt maydoni obyektni CadCraft obyektlarida saqlaydigan kalit orqali topadi (Sozlamalar › CadCraft › Birlashtirishga qulay fayllar); kalitlar oʻchiq boʻlsa, rad etadi.

### UPDATEFIELD

Taxalluslar: `UPDATEFIELDS`. `Yangilanadigan maydonlarni tanlang (Enter: barcha maydonlar) yoki [Sozlamalar]`. `S` maydonlar oʻzi qachon yangilanishini belgilaydi: `O` ochish, `S` saqlash, `P` chop etish, `R` regen harflarini yozing (boshida hammasi), yoki `NONE`.

### DWGPROPS

Taxalluslar: `DRAWINGPROPS`. Chizma xossalarini roʻyxatlaydi, soʻng `Oʻzgartirish: [Sarlavha/Mavzu/Muallif/Kompaniya/Kalit soʻzlar/coMments/cUstom/Olib tashlash/eXit]`. Birinchi oltitasi {{ui:Chizma tafsilotlari}} panelida koʻrinadigan xossalar; `U` oʻzingizning nom va qiymatingizni qoʻshadi, `R` birini olib tashlaydi. Maydonlar ularni oʻqiydi (`%<prop:title>%`, `%<prop:Client>%`) va darhol ergashadi. Oʻrnatilgan nomlardan biri boʻlgan yoki `%`, `<`, `>`, tirnoq yoki teskari chiziqni oʻz ichiga olgan maxsus nomni rad etadi.

## Parametrik

Qarang: [Chizmani cheklash](topic:constraints) va [Parametr va tenglamalardan foydalanish](topic:parameters). Cheklovlar {{ui:Model}} yorligʻida ishlaydi.

### GEOMCONSTRAINT va GC buyruqlari

Taxalluslar `GCON`: `Cheklov turini kiriting [Gorizontal/Vertikal/Perpendikulyar/Parallel/Tangens/Ustma-ust/Konsentrik/Kollinear/Simmetrik/Teng/Qotirish] <Gorizontal>`, soʻng oʻsha buyruqning soʻrovlari.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Obyektni tanlang [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Birinchi obyektni tanlang`, `Ikkinchi obyektni tanlang` (ikkinchisi harakatlanadi).
- {{cmd:GCCOINCIDENT}}: `Birinchi nuqtani tanlang [Obyekt/Avtocheklash] <Obyekt>`, `Ikkinchi nuqtani tanlang [Obyekt] <Obyekt>`.
- {{cmd:GCFIX}}: `Nuqtani tanlang [Obyekt] <Obyekt>`.
- {{cmd:GCSYMMETRIC}}: `Birinchi obyektni tanlang [2Points] <2Points>`, `Ikkinchi obyektni tanlang`, `Simmetriya chizigʻini tanlang`.

### DIMCONSTRAINT va DC buyruqlari

Taxallus `DCON`: `Aylantiriladigan bogʻlangan oʻlchamni tanlang [Chiziqli/Gorizontal/Vertikal/Tekislangan/Burchakli/Radial/Diametr/Aylantirish] <Tekislangan>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Birinchi cheklov nuqtasini koʻrsating [Obyekt] <Obyekt>`, `Ikkinchi cheklov nuqtasini koʻrsating`, `Oʻlcham chizigʻi joyini koʻrsating`, `Oʻlcham matni <d1=40>` (son, ifoda yoki `nom=ifoda`).
- {{cmd:DCALIGNED}}: yuqoridagi kabi, `[Obyekt/Nuqta va chiziq/2Lines]` bilan.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Yoy yoki aylanani tanlang`. {{cmd:DCANGULAR}}: `Birinchi chiziq yoki yoyni tanlang`, `Ikkinchi chiziqni tanlang`.
- {{cmd:DCCONVERT}}: `Aylantiriladigan oʻlchamlarni tanlang`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Obyektlarni tanlang [Sozlamalar]`. `S` masofa va burchak chegaralarini soraydi.
- {{cmd:DELCONSTRAINT}} (taxallus `DELCON`): `Obyektlarni tanlang`; ularning cheklovlari ketadi.
- {{cmd:CONSTRAINTBAR}} (taxallus `CBAR`): `Obyektlarni tanlang [Hammasini koʻrsatish/Hammasini yashirish]`, soʻng `[Koʻrsatish/Yashirish]`.
- {{cmd:DCDISPLAY}}: `Variantni kiriting [Koʻrsatish/Yashirish]`.

### PARAMETERS va -PARAMETERS

{{cmd:PARAMETERS}} (taxalluslar `PAR`, `PARAM`) {{ui:Parametrlar}} panelini ochadi. `-PARAMETERS`: `Variantni kiriting [Yangi/Tahrirlash/Nomini oʻzgartirish/Oʻchirish/?] <?>`.

### SWBOUT

Taxallus `SWMACRO`. SolidWorks da modelni bitta cheklangan eskizga qayta quradigan makroni (.swb) yuklab oladi. Qarang: [Eskizlarni boshqa detal modellash dasturlariga va ulardan koʻchirish](topic:solidworks-sketches).

## Bloklar

### ANNOSCALE

Taxalluslar: `CANNOSCALE`. Chizmaning annotatsiya masshtabi va unda necha annotativ obyekt borligini aytadi, soʻng `Yangi annotatsiya masshtabi`: `1:50`, `1:100`, `2:1`, son (`50` 1:50) yoki chizmaning oʻz masshtabi nomini yozing. Har bir annotativ matn va oʻlcham yangi masshtabda bir xil oʻlchamda chop etilishi uchun qayta oʻlchanadi, bitta ortga qaytarish qadamida; annotativ boʻlmagan obyektlar qoldiriladi, va yangi masshtabni oʻz roʻyxatida saqlamaydigan obyekt ham ({{cmd:OBJECTSCALE}}). Qarang: [Birliklar, qogʻozlar va masshtablar](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Taxalluslar: `OBJSCALE`. `Annotativ obyektlarni tanlang`, soʻng `Tanlangan obyektlarning annotatsiya masshtablari [Qoʻshish/Oʻchirish/Joriy masshtab/Roʻyxat/eXit] <Qoʻshish>`. Annotativ matn yoki oʻlcham annotatsiya masshtablari roʻyxatini saqlaydi. `Qoʻshish` va `Oʻchirish` masshtabni soraydi (`1:50`, `2:1`, son yoki chizmaning oʻz masshtabi nomi); `Joriy masshtab` chizmaning annotatsiya masshtabini qoʻshadi; `Roʻyxat` har bir obyektning masshtablarini chop etadi. Obyekt roʻyxatidagi masshtab bilan mos keladigan koʻrinish oynasi obyektni shu masshtab uchun qogʻoz balandligini chop etadigan oʻlchamda koʻrsatadi, ekranda va chop etishda. Oxirgi masshtabni oʻchirib boʻlmaydi. Annotativ boʻlmagan obyektlar chiqarib tashlanadi: avval Xossalarda Annotativ ni yoqing. Roʻyxatlar DWG va DXF da CadCraft ning oʻz maʼlumoti sifatida saqlanadi. Qarang: [Birliklar, qogʻozlar va masshtablar](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Taxalluslar: `ANNOALL`. `Annotativ obyektlarni barcha masshtablarda koʻrsatish [ON/OFF]`. Yoqiq (chizma boshlanganda): annotativ obyekt roʻyxatida boʻlmagan masshtabdagi koʻrinish oynasida yoki modelda ham oʻz hozirgi oʻlchamida koʻrinadi. Oʻchiq: u yerda koʻrinmaydi va modelda tanlab boʻlmaydi. Almashtirish bitta ortga qaytarish qadami; faylda saqlanmaydi.

### SCALELISTEDIT

Taxalluslar: `SCALELIST`. `Masshtablar roʻyxati [Qoʻshish/Tahrirlash/Oʻchirish/Roʻyxat/Tiklash]` {{key:Enter}} gacha. Qoʻshish: `Masshtab nomi`, `Qogʻoz birliklari`, `Chizma birliklari`. Tahrirlash va oʻchirish masshtab nomini soraydi. Chizmaning oʻz masshtablari koʻrinish oynasi va chop etish roʻyxatlariga qoʻshiladi va chizma bilan saqlanadi. Qarang: [Birliklar, qogʻozlar va masshtablar](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT va PEDIT

`SPLINE` (`SPL`): `Splaynning birinchi nuqtasi [Usul/Obyekt] (Oʻtish nuqtalari)`. Oʻtish: egri chiziq oʻtadigan nuqtalar; `Yopish`, `Ortga qaytarish`, soʻng `Boshlanish tangensi` va `Oxirgi tangens` (nuqta yoki {{key:Enter}}). Usul › Boshqaruv uchlari boshlanish darajasini (1 dan 5 gacha) soraydi va boshqaruv koʻpburchagidan chizadi. Obyekt polichiziqlarni ularning uchlari orqali splaynlarga aylantiradi. `SPLINEDIT` (`SPE`): `[Oʻtish maʼlumoti/Uchni tahrirlash/Polichiziqqa aylantirish/Ochish yoki Yopish/Teskari/Ortga qaytarish/eXit]`; Oʻtish maʼlumoti `[Qoʻshish/Oʻchirish/Koʻchirish/Tozalash/Tangenslar/eXit]`; Uchni tahrirlash `[Boshqaruv nuqtasini qoʻshish/Koʻchirish/Ogʻirlik/eXit]`. `PEDIT` (`PE`): `[Yopish/Ochish/Birlashtirish/Kenglik/Oʻtish/Splayn/Egrilikni yechish/Chiziq turi yaratish/Teskari/Ortga qaytarish/eXit]`, bir nechta obyekt uchun `M`; chiziq, yoy va splaynlar avval polichiziq sifatida taklif qilinadi. Qarang: [Splaynlar va polichiziqlar](topic:splines).

### BLOCK

Taxalluslar: `B`, `BMAKE`.

- `Blok nomini kiriting`. Agar mavjud boʻlsa: `Blok "…" allaqachon mavjud. Qayta taʼriflansinmi? [Ha/Yoʻq] <Yoʻq>`.
- `Kiritishning asosiy nuqtasini koʻrsating`
- `Obyektlarni tanlang`. Ular bitta yangi blokka havola bilan almashtiriladi.

### WBLOCK

Taxalluslar: `W`, `-WBLOCK`. Blok, bir nechta obyekt yoki butun chizmani yangi DWG yoki DXF fayliga yozadi. `WBLOCK manba [Blok/Butun chizma/Obyektlar] <Obyektlar>`:

- **Obyektlar**: `Kiritishning asosiy nuqtasini koʻrsating` (u yangi chizmaning boshi boʻladi), `Obyektlarni tanlang`, soʻng `Fayl formati [DWG/DXF/R12 DXF]` va `Yangi chizma uchun fayl nomi`, soʻng `Obyektlar bilan nima qilinsin [Saqlash/Blokka aylantirish/Oʻchirish]`. Aylantirish ularni fayl nomidagi blokka bitta havola bilan almashtiradi; Oʻchirish olib tashlaydi.
- **Blok**: `Yozib chiqariladigan blok`. Blokning oʻz obyektlari, asosiy nuqtasi boshi sifatida, ichki bloklar bilan.
- **Butun chizma**: model fazosidagi har bir obyekt. Varaqlar yozilmaydi; ular bilan nusxa uchun {{cmd:SAVEAS}} dan foydalaning.

Yangi faylda faqat uning obyektlari ishlatadigan qatlamlar, chiziq turlari, matn va oʻlcham uslublari, bloklar va chizmaning birliklari boʻladi. DWG versiyasi {{cmd:SAVEAS}} oxirgi ishlatgan versiya. Brauzerda fayl yuklab olinadi; Studio da saqlash oynasi ochiladi.

### ATTDEF

Taxalluslar: `ATT`, `DDATTDEF`, `-ATTDEF`; yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Atributni aniqlash}}. Rejimlarni chop etadi, soʻng `Oʻzgartirish uchun variantni kiriting (tugatish uchun Enter) [Koʻrinmas/Doimiy/Oldindan belgilangan]`, `Atribut tegi nomini kiriting`, `Atribut savolini kiriting`, `Standart atribut qiymatini kiriting` (doimiy boʻlsa `Atribut qiymatini kiriting`), `Matnning boshlanish nuqtasini koʻrsating`, `Matn balandligini koʻrsating`, `Matnning burilish burchagini koʻrsating`. {{cmd:BLOCK}} atribut taʼriflarini blokka oladi.

### EATTEDIT va ATTEDIT

`EATTEDIT` (`DDATTE`, yoki atributli havolani ikki marta bosing; {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Atributlarni tahrirlash}}): `Atributli blok havolasini tanlang`, soʻng {{ui:Atributlarni tahrirlash}} dialogi. `ATTEDIT` (`ATE`, `-ATTEDIT`): oʻsha havola, soʻng har bir atribut uchun `<savol> (<TEG>) <qiymat>`; {{key:Enter}} qiymatni saqlaydi. Qarang: [Atributlar](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Qaysi blokning havolalari atributlarini yangilansin [Nom/Tanlash/Hammasi] <Tanlash>`. Qiymatlar saqlanadi; yangi atributlar standart qiymatini oladi, olib tashlanganlar yoʻqoladi, joylashuv tiklanadi.

### BATTMAN

{{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Atribut boshqaruvchisi}}. Dialog: blok, atributlar (teg, savol, standart, rejimlar, tartib), {{ui:Havolalarni yangilash (qiymatlar saqlanadi)}}, {{ui:Qoʻllash}}.

### REFEDIT va REFCLOSE

{{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Joyida tahrirlash}}. `REFEDIT`: `Joyida tahrirlash uchun blok havolasini tanlang` (yoki tanlov). `REFCLOSE`: `"…" ga oʻzgarishlarni saqlaysizmi? [Saqlash/Bekor qilish] <Saqlash>`; panelning {{ui:Blokni saqlash}} va {{ui:Tashlab yuborish}} tugmalari xuddi shunday. Butun tahrirlash bitta ortga qaytarish qadami. Qarang: [Atributlar](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: qalam chizigʻining bosimi {{cmd:SKETCHFIX}} va {{cmd:SKETCHLIVE}} yaratadigan chiziq qalinligini belgilaydimi (boshida yoqiq). Qarang: [Qalam bilan eskiz](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Taxallus: `OFFSTD`. Bu chizmada qaysi ofis standarti amalda ekanini va u qayerdan kelganini aytadi: chizmaning oʻz yozuvi, jamoangizning umumiy standarti, yoki Standart Siyosatlaringiz (matn balandliklari `all.anno.*`); hech biri boʻlmasa, dasturning oʻz oʻlchamlari. `[Import/Layers/Title block/Clear/eXit]`: `Import` `cc-office-standard` .json ni (SuperCad va BimCraft yozadigan yozuv) bu chizmaga oʻqiydi, uni DWG va DXF da birga saqlaydi; `Layers` chizmada yetishmayotgan ofis qatlamlarini bitta ortga qaytarish qadamida qoʻshadi va hech birini olib tashlamaydi; `Title block` ofisning maydonlarini shu chizmaning oʻz qiymatlari bilan roʻyxatlaydi; `Clear` chizmaning oʻz yozuvini olib tashlaydi. Annotativ matn va oʻlcham balandliklari amaldagi standartga ergashadi. Qarang: [Birliklar, qogʻozlar va masshtablar](topic:units-papers-scales).

### BPARAMS

Taxalluslar: `BPM`, `BLOCKPARAMS`. Blok muharriridagi blok, tanlangan havolaning bloki yoki siz nomlagan blok (`Blok nomi`) uchun Parametrlar boshqaruvchisini ochadi: formulali parametrlar, holatlari bilan bir nechta koʻrinish parametrlari, va tanlangan havolaning oʻz qiymatlari va holatlari. Qarang: [Oʻz parametrlaringiz va koʻrinish holatlari](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` buyruq satrida xuddi shuni qiladi: `[Parametr/Koʻrinish/Holat/Tayinlash/Havola/Tugatish]`.

### BEDIT va BCLOSE

`BE`; yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Blokni tahrirlash}}. `Tahrirlash uchun blok nomini kiriting <tanlangan havolaning bloki>` blok muharririni ochadi. `BCLOSE` `"…" ustida blok muharririni yopasizmi [Saqlash/Bekor qilish] <Saqlash>` soraydi; panelning {{ui:Blokni saqlash}} va {{ui:Oʻzgarishlarni tashlab yuborish}} tugmalari xuddi shunday. Muharrirda qilingan hamma narsa bitta ortga qaytarish qadami.

### VIEWBASE

Taxallus: `FLATSHOT`. 3D yorligʻidagi jismlarning tekis 2D koʻrinishi: `Koʻrinish [Old/Yuqori/Oʻng/Chap/Orqa/Pastki/Izo]`, `Yashirin chiziqlar [Koʻrsatish/Yashirish]`, masshtab (`1:20`, `2:1`; {{key:Enter}} varaqqa mos keladiganini oladi), soʻng koʻrinishning markazi. Bitta blok havolasi; koʻrinadigan qirralar VIEW-VISIBLE da, yashiringanlari VIEW-HIDDEN da punktir. Qarang: [Varaqda tekis koʻrinishlar](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Taxalluslar: `-PUBLISH`; yoki {{ui:Hammasi varaqlar bitta PDF da}} {{ui:PDF ga chop etish}} dialogida. `Chop etiladigan varaqlar [Hammasi/Bir nechtasi]`: {{key:Enter}} har bir varaqni chop etadi, `S` vergul bilan ajratilgan nomlarni soraydi. Bitta PDF, har bir varaq uchun sahifa va xatcho‘p. Qarang: [Har bir varaq bitta PDF da](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Taxalluslar: `SSM`, `SHEETSETMANAGER`. Sizni {{ui:Varaqlar toʻplami}} boʻlimiga, chap paneldagi: bir nechta chizmadan varaqlar, raqamlangan va sarlavhalangan, shtamplari toʻplamdan toʻldirilgan, bitta PDF sifatida chop etilgan. Qarang: [Varaqlar toʻplamlari](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG yoki DXF ni tanlang, soʻng uning kiritish nuqtasi. {{cmd:XREF}} (`XR`, `-XREF`): `Bogʻlangan chizmalar [?/Biriktirish/Qayta yuklash/Bogʻlash/Ajratish] (Enter: ?)`; bir nechta havola boʻlsa, ularning birini tanlang yoki `N` yozing va uning nomi. Qarang: [Bogʻlangan chizmalar](topic:files#linked-drawings-external-references).

### COUNT

Taxalluslar: `BCOUNT`; yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Bloklarni sanash}}. `Sanash uchun blok havolasini tanlang yoki [Hammasi/Eksport] (Enter: Hammasi)`: tanlash shu fazodagi shu blokning har bir havolasini tanlaydi va sanaydi; {{key:Enter}} yoki `A` ularning hammasini roʻyxatlaydi; `E` soʻng `C` (sanoqlar) yoki `A` (atributlar) CSV ni yuklab oladi. Qarang: [Bloklarni sanash va jadvalni eksport qilish](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Taxalluslar: `I`, `DDINSERT`.

- `Blok nomini yoki [Fayl/Kutubxona] <oxirgi blok>` kiriting (katta-kichik harf farqi yoʻq). `F` DWG yoki DXF ni soraydi, soʻng butun chizma yoki uning bloklaridan biri; ishlatilgan nom {{ui:Mavjudini saqlash}} yoki {{ui:Qayta nomlash}} ni soraydi. `L` kutubxona panelini ochadi.
- `Kiritish nuqtasini koʻrsating [Masshtab/Burish]`. `S` `Masshtab koeffitsientini koʻrsating`, `R` `Burilish burchagini koʻrsating` soraydi; ikkalasi eslab qolinadi.
- Blok allaqachon boʻlmagan joyda takrorlanadigan obyektlar yonida turganda, bir qator nechta joy taklif qilinganini aytadi va soʻrovga `suGgested` qoʻshiladi: `G` ularni koʻrsatadi; blok qoʻyish uchun bittasining yonini bosing, `A` hammasi uchun, {{key:Enter}} orqaga. Ular qoʻshnilarining aylanishini va atributlarning standart qiymatlarini oladi. Ochiq fazodagi 20 000 dan ortiq obyektli chizmalar qidirilmaydi.
- Soʻng blok soraydigan har bir atribut uchun `Enter <savol> (<TEG>) <standart>`. Qarang: [Blok atributlari](topic:attributes).

### LIBRARY

Taxalluslar: `LIB`. Kutubxona panelini ochadi: elementlarni joylashtirish, yangilanishlarni tekshirish, kutubxona mualliflari. Savollar yoʻq. Qarang: [Fayldan yoki kutubxonadan qoʻshish](topic:insert-from-file-and-library).

### STEELMEMBER

Taxalluslar: `SMEMBER`; yoki kutubxonaning {{ui:Standart}} yorligʻidagi {{ui:3D element}}. `Profil oʻlchami <W12x26>` (yorliqda qanday roʻyxatlangan boʻlsa), soʻng `Boshlanish nuqtasi [Ustun]` va `Oxirgi nuqta`: ikki nuqta orasida 3D yorligʻida yerda turgan jismiy element. `C` ustunning tagidagi nuqtani va uning balandligini soraydi. Bitta ortga qaytarish qadami. Qarang: [Poʻlat profillar va standart detallarni joylashtirish](topic:steel-and-standard-parts).

### PARTSLIST

Taxalluslar: `PLIST`. `Detallar roʻyxatining yuqori chap burchagi`, soʻng `Matn balandligi <2.5>`: kutubxonadan joylashtirilgan har bir standart detal va poʻlat profil jadvalini chizadi (element raqamlari, miqdori, detal, standart, oʻlcham, uzunlik, material, massa). Bitta ortga qaytarish qadami. Qarang: [Poʻlat profillar va standart detallarni joylashtirish](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Taxalluslar: `PU`. Hech kim ishlatmayotgan blok taʼriflarini olib tashlaydi. Savollar yoʻq.

### DELBLOCKS

Yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Bloklarni oʻchirish}}. `Oʻchiriladigan blokni tanlang [Nom/eXit]`: blok havolasini bosing, yoki roʻyxat uchun `N` (filtr bilan, bir nechtasini tanlash mumkin), yoki tugatish uchun `X` / {{key:Enter}}. Har bir havola ketadi — modelda, har bir varaqda va boshqa bloklar ichida — soʻng taʼrif, va buyruq satri nima oʻchirilganini va nima oʻchmaganini aytadi. Nomsiz bloklar va bogʻlangan chizmalar taklif qilinmaydi. Soʻrov keyingi blok uchun qaytadi; butun buyruq bitta ortga qaytarish qadami.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} nusxalagan narsangizni ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) bitta blok sifatida qoʻyadi: kiritish nuqtasini tanlang va yangi blokka bitta havola oʻsha yerga, tanlangan holda qoʻyiladi. Blok oʻz nomini oladi (`A$C` va raqam); {{cmd:RENAME}} unga oʻzingiznikini beradi. Bitta ortga qaytarish qadami havolani va blokni olib tashlaydi.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} almashtiriladigan blok va uning oʻrniga qoʻyiladigan blokni soraydi (`?` bloklarni roʻyxatlaydi), soʻng modeldagi, har bir varaqdagi va boshqa bloklar ichidagi har bir havolani oʻzgartiradi. Har bir havola oʻz joyini, masshtabini, aylanishini, qatlamini va ikkala blokda ham boʻlgan atributlar qiymatlarini saqlaydi; faqat yangi blokdagi atributlar standart qiymatidan boshlanadi va qaysi qiymatlar tashlanganini aytadi. Eski blokni hech narsa ishlatmasa, uni olib tashlashni taklif qiladi. Bogʻlangan chizmalarni va bloki oʻz ichiga oladigan almashtirishni rad etadi. Bitta ortga qaytarish qadami.

### MINSERT

{{cmd:MINSERT}} blokni qator va ustunlarda joylashtiradi: blok nomi, kiritish nuqtasi, masshtab, burilish, qator va ustunlar soni va ular orasidagi masofalar. Butun toʻplam aylanish bilan birga buriladi. Har biri oʻz havolasi (10 000 tagacha), shuning uchun ularning istalgan birini keyin koʻchirish yoki oʻchirish mumkin.

### BLOCKSPALETTE

Taxalluslar: `BLOCKSPAL`; yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Bloklar paneli}}. Kursor filtrida turgan holda {{ui:Bloklar}} panelini koʻrsatadi. Har bir blokda kichik rasm bor; eng yaqinda joylashtirilganlar birinchi. Filtr yonidagi ikki tugma roʻyxat va rasm setkasi oʻrtasida almashtiradi. Rasmni bosing (yoki {{ui:Qoʻshish}}) blokni {{cmd:INSERT}} bilan joylashtirish uchun, yoki uni chizmaga sudrang va qoʻyilgan joyda joylashtiring.

{{ui:Kutubxonalar}} roʻyxati ostida: {{ui:Chizma qoʻshish}} sizning DWG yoki DXF faylingizni oladi va uning bloklarini rasmlari bilan roʻyxatlaydi, va butun chizmani bitta blok sifatida. Biror blokni joylashtirish uning taʼrifini (va u ichiga olgan bloklar va ularning qatlamlarini) {{cmd:INSERT}} ning `File` varianti kabi bu chizmaga nusxalaydi; shu yerda shu taʼrif bilan allaqachon mavjud blok savolsiz ishlatiladi, bir xil nomli, farq qiladigani esa {{ui:Mavjudini saqlash}} yoki {{ui:Qayta nomlash}} ni soraydi. Brauzerda fayl sahifa yopilguncha qoladi. CadCraft Studio da {{ui:Jild qoʻshish}} jilddagi chizmalarni roʻyxatlaydi, har biri bosganingizda ochiladi, va fayllar va jildlar eslab qolinadi. Roʻyxatdan kutubxonani olib tashlash uchun kichik x ni bosing; fayl tegilmaydi. Umumiy {{ui:Kutubxona}} boshqa narsa: qarang [Fayldan yoki kutubxonadan qoʻshish](topic:insert-from-file-and-library).

### BCONVERT

Yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Takrorlarni bloklarga aylantirish}}. Takrorlanadigan geometriyani topadi va har bir nusxani bitta blokka havolaga aylantiradi.

- `Takrorlanadigan obyektlarni tanlang yoki [Blok]`: bitta nusxaning obyektlari. `B` mavjud blok nomini beradi, uning obyektlarining tarqoq nusxalarini topish uchun.
- `Nusxa boʻlishi mumkin: aks ettirilgan = Yoʻq, masshtablangan = Yoʻq; qatlam, rang, chiziq turi va chiziq qalinligi = Mos … [Aks ettirilgan/Masshtablangan/Xossalar]`: `M`, `S` va `P` nusxa nimani bildirishini almashtiradi; {{key:Enter}} qidiradi. Sozlamalar eslab qolinadi.
- `Yangi blok uchun nom <Block1>`, soʻng `Blokning asosiy nuqtasini koʻrsating` ({{key:Enter}} tanlovning chap pastki burchagini oladi).
- U boshqa necha obyekt toʻplami bir xil geometriya ekanini aytadi, almashtiradigan hamma narsani ajratib koʻrsatadi va `Ha/Yoʻq` soraydi.

Nusxa — bir xil obyektlar koʻchirilgan va istalgan burchakka burilgan (va bitta koeffitsient bilan aks ettirilgan yoki masshtablangan, bular yoqiq boʻlsa): har bir obyektning juftligi tanlovning oʻlchamidan millionda bir aniqlikda boʻlishi kerak. Har bir havola oʻz aylanishi va masshtabini oladi (aks ettirilgan — manfiy Y masshtab), va obyektlar birga egallagan qatlam. Qulflangan qatlamdagi obyektlarga tegilmaydi va ular sanaladi. Ochiq fazoni (model yoki ochiq varaqni) qidiradi. Juda katta qidiruv ish chegarasida toʻxtaydi va buni aytadi. Bitta ortga qaytarish qadami.

### BSEARCH

Yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Bloklarni topish}}. `Bloklarni nom boʻyicha [Nom/Atribut/Geometriya] <Nom>` topadi:

- `N`: blok nomining bir qismi yoki `*` va `?` bilan naqsh. Har bir blokni shu yerdagi va butun chizmadagi havolalari bilan roʻyxatlaydi.
- `A`: atribut qiymati yoki `TEG=qiymat`. Havolalar tomonidan ushlab turilgan qiymatli bloklarni, topilgan qiymatlar bilan roʻyxatlaydi. Doimiy atributlar ham hisobga olinadi.
- `G`: obyektlarni yoki bitta blok havolasini tanlang, va shakli kamida 85% oʻxshash bloklar eng yaxshisidan boshlab roʻyxatga olinadi. Oʻlcham, burilish va aks ettirish hisobga olinmaydi. Oʻlchov konturlar boʻylab tarqalgan nuqtalar orasidagi masofalarni taqqoslaydi, shuning uchun oʻxshashlarni topadi; aniq nusxalar uchun {{cmd:BCONVERT}} dan foydalaning.

Ochiq fazoda topilgan havolalar keyingi buyruq uchun tanlangan holda qoladi.

### BREPLACE

Yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Bloklarni almashtirish}}. `Almashtirish [Tanlangan/Hammasi]`: `S` tanlangan blok havolalarini siz nomlagan blok bilan almashtiradi; `A` blok va uning almashtirgichini soraydi va har bir havolani {{cmd:BLOCKREPLACE}} kabi oʻzgartiradi (xuddi shu kod). Havola oʻz joyi, masshtabi, aylanishi, qatlami va ikkala blokda ham boʻlgan atributlar qiymatlarini saqlaydi; yangi blokda joyi boʻlmagan qiymatlar tashlanadi va nomlanadi. `?` bloklarni roʻyxatlaydi. Bitta ortga qaytarish qadami.

### DATAEXTRACTION

Taxalluslar: `EATTEXT`, `DX`; yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Maʼlumotlarni ajratib olish}}. Bloklar, ularning atributlari va obyekt xossalarini jadval yoki CSV fayl sifatida roʻyxatlaydi.

- Tanlovda ishlaydi yoki `Obyektlarni tanlang (Enter: bu fazodagi hamma narsa)` soraydi.
- Tanlovda ikkalasi boʻlsa `Roʻyxat: [Bloklar/Obyektlar/Hammasi]`. Nomsiz bloklar, jadvallar va materiallar roʻyxatlari hech qachon roʻyxatga olinmaydi.
- Tanlash uchun ustunlarni chop etadi (nom, tur, qatlam, X, Y, burilish, masshtab, uzunlik, maydon, rang, chiziq turi, fazo va har bir atribut tegi uchun bittadan), soʻng `Ustunlar, nomi yoki raqami bilan, vergul bilan ajratib`. {{key:Enter}} yulduzchali tanlovlarni oladi: bloklar uchun nom va har bir atribut; obyektlar uchun tur, qatlam va uzunlik.
- `Bir xil qatorlarni sonlari bilan birga joylashtirasizmi? [Ha/Yoʻq] <Ha>`, soʻng `Roʻyxatni [Jadval/Csv] <Jadval>` da. Jadval oddiy jadval ({{cmd:TABLEDIT}} uni tahrirlaydi) va jonli emas: chizma oʻzgarganda buyruqni qayta ishga tushiring.
- Roʻyxatda boʻlmagan ustunni rad etadi. Jadval 1 999 qator maʼlumotni oʻz ichiga oladi; CSV fayl ularning hammasini oladi.

### COUNTTABLE

Tanlovning (yoki ochiq fazoning) blok havolalarini sanaydi va sonlarni jadvalga (`Blok`, `Soni`) yoki CSV fayliga qoʻyadi. Chizma oʻzi bilan ergashadigan sanoq uchun {{cmd:BOMTABLE}} ga qarang.

## Varaqlar va chop etish

### LAYOUT

Taxalluslar: `LO`, `NEWLAYOUT`; yoki chizma ostidagi {{ui:+}} tugmasi. Chegara, sarlavha shtampi va bitta koʻrinish oynasi bilan yangi varaq, ISO A3 da (yoki dyuym yoki futdagi chizmalar uchun Tabloid). Savollar yoʻq.

### MVIEW

Taxalluslar: `MV`. Faqat varaqda ({{cmd:VPORTS}} varaqda xuddi shunday qiladi).

- `Koʻrinish oynasining burchagini koʻrsating [Koʻpburchak/Obyekt]`, `Qarama-qarshi burchakni koʻrsating`. Koʻrinish oynasi butun modelni standart masshtabda koʻrsatadi.
- `P` (Koʻpburchak): kontur burchaklarini bosing (`Ortga qaytarish`, `Yopish`), tugatish uchun {{key:Enter}}. Uchtadan kam burchakni rad etadi.
- `O` (Obyekt): `Koʻrinish oynasining konturi uchun yopiq obyektni tanlang`: varaqdagi yopiq polichiziq, aylana yoki ellips. Koʻrinish oynasi uning shaklini oladi (egri chiziqlar qisqa toʻgʻri boʻlaklar sifatida); obyekt oʻz holatida qoladi. Yopiq boʻlmagan obyektni rad etadi.

### VPCLIP

Varaqda allaqachon turgan koʻrinish oynasini kesadi. `Kesiladigan koʻrinish oynasini tanlang` (yoki avval tanlang), soʻng `Kesish uchun obyektni tanlang [Koʻpburchak/Oʻchirish]`:

- Yopiq polichiziq, aylana yoki ellipsni bosing, yoki koʻpburchakning burchaklarini bosish uchun {{key:Enter}} (yoki `P`).
- `D` (Oʻchirish, koʻrinish oynasi kesilganda taklif qilinadi) uni yana toʻrtburchak qiladi: u oldingi konturni oʻrab turgan quti.
- Koʻrinish oynasi qogʻozda koʻchmaydi va masshtabi oʻzgarmaydi. Model faqat kontur ichida chiziladi va chop etiladi, chegara unga ergashadi. Bitta ortga qaytarish qadami.
- Kesilgan koʻrinish oynasida konturning har bir burchagida tutqich bor, markazi va qutisining toʻrt burchagidan tashqari (qutining burchagini sudrash konturni u bilan choʻzadi). Xossalarda Kontur: Toʻrtburchak yoki Kesilgan va burchaklar soni koʻrinadi.
- DWG va DXF 2000 fayllari konturni CadCraft uchun saqlaydi. Boshqa dasturlar koʻrinish oynasini uning atrofidagi toʻrtburchak sifatida ochadi; DXF R12 faqat toʻrtburchakni saqlaydi.
- Model yorligʻida u koʻrinish oynalari varaqlarda ekanini aytadi.

### VPORTS

Taxalluslar: `VIEWPORTS`. {{cmd:SPLIT}} varaqdan ham xuddi shunday, va {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Yonma-yon boʻlish}}, {{ui:Ustma-ust boʻlish}}, {{ui:Toʻrt oyna}}, {{ui:Bitta oyna}} ni ishga tushiradi. Modelda: `Oynalar sonini kiriting [Yakka/2/3/4] <3>`; `2` `[Gorizontal/Vertikal] <Vertikal>` soraydi (Vertikal = yonma-yon), `3` `[Chap/Oʻng] <Oʻng>` soraydi (katta oyna qayerga borishi). Har bir oyna oʻz koʻrinishi va fazosini saqlaydi; bosish oynani faol qiladi. Varaqda bu {{cmd:MVIEW}}. Qarang: [Ekranni boʻlish](topic:split-screen).

### VPVIEW

Taxallusi yoʻq. Faqat varaqda.

- `Koʻrinish oynasini tanlang` (agar tanlangan boʻlsa oʻtkazib yuboriladi), soʻng modelda: `Koʻrsatiladigan oynaning birinchi burchagini koʻrsating`, `Qarama-qarshi burchakni koʻrsating`.

### UCS

Taxallusi yoʻq. Oʻz koordinata tizimingiz; tahrir emas. `UCS ning boshini koʻrsating [Nomlangan/Obyekt/Oldingi/Dunyo/Z/3point] <Dunyo>`: nuqta yangi bosh boʻladi, soʻng `X oʻqidagi nuqtani koʻrsating (Enter burchakni saqlaydi)`. `Z`: `Z oʻqi atrofida burilish burchagini koʻrsating <90>`. `3`: bosh, musbat X oʻqidagi nuqta, musbat-Y tomonidagi nuqta. `OB`: `UCS ni tekislash uchun obyektni tanlang`. `NA`: `[Tiklash/Saqlash/Oʻchirish/?]` va nom. Koʻrinish yangi X oʻqi gorizontal boʻlishi uchun buriladi. Qarang: [Koʻrinishni burish va oʻz koordinatalaringizdan foydalanish](topic:ucs-and-turned-view).

### PLAN

Taxallusi yoʻq. `Variantni kiriting [Joriy ucs/Ucs/Dunyo] <Joriy ucs>`: faol oynaning koʻrinishini UCS ning X oʻqi (yoki dunyoniki) gorizontal boʻladigan qilib buradi. Chizmadagi hech narsa harakatlanmaydi.

### TURNLEFT, TURNRIGHT, TURNWORLD

Taxallusi yoʻq; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Koʻrinishni 90° chapga buring}}, {{ui:Koʻrinishni 90° oʻngga buring}}, {{ui:Dunyoga qaytish}}. `UCS Z -90`, `UCS Z 90` va `UCS W` bilan bir xil, koʻrinish ergashadi.

### VPLAYER

Taxallusi yoʻq. Varaqda yoki koʻrinish oynasi ichida. `Variantni kiriting [?/Muzlatish/Muzsizlantirish/Tiklash/Vpvisdflt]`: `F`, `T`, `R` qatlam nomlarini soraydi (vergullar, `*` va `?` belgilari bilan), soʻng `[Hammasi/Tanlangan/Joriy] <Joriy>` koʻrinish oynalari; Tiklash har bir qatlamni "yangi koʻrinish oynalarida muzlatilgan" standartiga qaytaradi; `V` bu standartni belgilaydi (`[Muzlatilgan/Muzsizlantirilgan]`), {{cmd:MVIEW}} uni ishlatadi. `?` joriy koʻrinish oynasida muzlatilgan qatlamlarni roʻyxatlaydi. Qatlamlar paneli koʻrinish oynasi ustuni xuddi shunday bitta oyna uchun qiladi. Qarang: [Qatlamni bitta koʻrinish oynasida muzlatish](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Taxalluslar: `MS`; yoki koʻrinish oynasi ichida ikki marta bosing. Faqat varaqda. Koʻrinish oynasi orqali modelda ishlash: tanlangan yoki varaqdagi yagona yoki `Ishlash uchun koʻrinish oynasi ichiga bosing`. Ichidagi surish va zoom koʻrinish oynasining koʻrinishini oʻzgartiradi (displeyi qulflangan biri uni saqlaydi va varaq harakatlanadi); yangi koʻrinish bitta ortga qaytarish qadami sifatida yoziladi. Qarang: [Modelda koʻrinish oynasi orqali ishlash](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Taxalluslar: `PS`; yoki koʻrinish oynasidan tashqarida ikki marta bosing, yoki chizma ostidagi yorliqni bosing. Varaqqa qaytish.

### PLOT

Taxalluslar: `PRINT`, `PUBLISH`, `EXPORTPDF`; yoki {{key:Mod+P}}. {{ui:PDF ga chop etish}} dialogini ochadi. Qarang: [PDF ga chop etish](topic:plot-pdf).

### PLOTSTYLES

Taxalluslar: `STYLESMANAGER`, `PSTABLES`; yoki {{ui:PDF ga chop etish}} dialogidagi {{ui:Jadvallarni tahrirlash…}}. {{ui:Chop etish uslubi jadvallari}} ni ochadi: har bir rang qanday chop etilishi (rang, kulrang, siyoh, chiziq qalinligi), chizma bilan saqlanadi. Qarang: [Chop etish uslubi jadvallari](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} obyektlarni varaq va model orasida koʻrinish oynasi orqali koʻchiradi; ular boshqa tomondan xuddi shunday koʻrinishi uchun masshtablanadi va buriladi. Varaqda obyektlarni tanlang va ular modelga boradi (varaq bir nechta boʻlsa koʻrinish oynasini tanlang). Koʻrinish oynasi orqali modelda ishlayotganda ({{cmd:MSPACE}}), tanlangan obyektlar varaqqa keladi. Necha marta kattaroq yoki kichikroq boʻlganini aytadi. Koʻrinish oynalari oʻz varaqlarida qoladi. Bitta ortga qaytarish qadami.

### ISODRAFT

{{cmd:ISODRAFT}} izometrik chizishni `ON` yoki `OFF` qiladi, yoki toʻgʻridan-toʻgʻri `Chap`, `Yuqori` yoki `Oʻng` tekislikka oʻtadi. Yoqiq boʻlganda: Ortho ({{key:F8}}) chiziqlarni tekislikning ikki oʻqi boʻylab saqlaydi (chap: 90° va 150°; yuqori: 30° va 150°; oʻng: 30° va 90°), qutb kuzatuvi ({{key:F10}}) xuddi shu oʻqlarga ergashadi, setkaga ilashish ({{key:F9}}) izometrik setkadan foydalanadi va setka ({{key:F7}}) 30°, 90° va 150° chiziqlar bilan chiziladi. {{cmd:ELLIPSE}} `Izoaylana` qoʻshadi: markaz va radius (yoki `Diametr`) bering va u joriy tekislikda aylana koʻrinadigan ellipsni chizadi. Chizma tekis qoladi: bular tasvirli koʻrinish chizish uchun yordamchilar, 3D model emas. Sozlama shu seans uchun, chizma faylida saqlanmaydi.

### ISOPLANE

{{cmd:ISOPLANE}} izometrik chizish boʻladigan tekislikni tanlaydi: `Chap`, `Yuqori` yoki `Oʻng`. {{key:Enter}} keyingisiga oʻtadi. Izometrik chizish yoqiq boʻlganda, {{key:F5}} buyruq oʻrtasida xuddi shunday qiladi; oʻchiq boʻlganda, {{key:F5}} brauzerga qoldiriladi.

## Soʻrov

### CAL

Hisob-kitobning qiymatini chop etadi, uzunlik yoziladigan joyda qanday oʻqilsa shunday.

- `Ifoda`: yozing, masalan `12'6"+3/4"` yoki `(24'-0")/3`, va {{key:Enter}} ni bosing. CadCraft `= 12'-6 3/4"   (150.75 chizma birligi)` chop etadi. Qarang: [Yozilgan qiymatdagi arifmetika](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Taxalluslar: `DI`; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Masofani oʻlchash}}.

- `Birinchi nuqtani koʻrsating`, `Ikkinchi nuqtani koʻrsating`. Masofa, burchak, Delta X va Delta Y ni chop etadi.

### AREA

Taxalluslar: `AA`; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Maydon}}. Maydon va perimetrni chop etadi.

- `Birinchi burchak nuqtasini koʻrsating [Obyekt/Maydon qoʻshish/Maydonni ayirish] <Obyekt>`
  - Burchaklarni bosing yoki yozing; `Keyingi nuqtani koʻrsating (Enter yopadi) [Ortga qaytarish (U)]` da konturni yopish uchun {{key:Enter}} ni bosing. `U` oxirgi burchakni qaytaradi.
  - {{key:Enter}} yoki `O`, soʻng `Obyektni tanlang`: aylana (uning aylanasini chop etadi), ellips, polichiziq (ochiq boʻlsa maydon uchun toʻgʻri chiziq bilan yopiladi va uzunligi chop etiladi) yoki shtrixlash (teshiklar ayriladi).
  - `A` (Maydon qoʻshish) va `S` (Maydonni ayirish) yigʻindini saqlaydi: soʻrov `(ADD mode)` yoki `(SUBTRACT mode)` bilan boshlanadi, har bir maydon qoʻshiladi yoki ayiriladi, va har biridan keyin `Umumiy maydon = …` chop etiladi. Bu rejimlarda `O` {{key:Enter}} gacha obyektlarni tanlaydi, va birinchi soʻrovda {{key:Enter}} buyruqni tugatadi.

### MEASUREGEOM

Taxalluslar: `MEA`. `Variantni kiriting [Masofa/Radius/Burchak/Maydon] <Masofa>`; har bir oʻlchovdan keyin yana soraydi, standart `eXit`.

`Tez` koʻrsatkich atrofida harakatlantirganingizda oʻlchaydi: eng yaqin obyektgacha masofa oʻngga, yuqoriga, chapga va pastga (joriy UCS oʻqlari boʻylab), ular boʻyicha chiziladi, va ikkita qoʻshni toʻgʻri va uchrashsa, burchak. Bosish toʻrtta masofani, toza kenglik va balandlikni va burchaklarni tarixga yozadi; Enter variantlarga qaytaradi. Ekranda nima borligini oʻqiydi.

- `D`: ikki nuqta, {{cmd:DIST}} kabi.
- `R`: `Yoy yoki aylanani tanlang`; radius va diametrni chop etadi.
- `A`: yoy (uning qamrab olingan burchagi), chiziq va soʻng ikkinchi chiziq (ularning orasidagi burchak, uzoq uchlari tomonida), yoki {{key:Enter}} va uchta nuqta (uch, soʻng ikki uch).
- `AR`: {{cmd:AREA}} kabi, bitta maydon.

### ID

Taxallusi yoʻq. `Nuqtani koʻrsating`; uning X va Y ni chop etadi.

### LIST

Taxalluslar: `LI`, `LS`. `Obyektlarni tanlang`; har bir obyektning turi, qatlami va asosiy oʻlchamlarini chop etadi.

### MASSPROP

{{cmd:MASSPROP}} tanlagan mintaqalar va yopiq obyektlarning kesim xossalarini birga beradi: maydon, perimetr, chegaralovchi quti, sentroid, X va Y oʻqlari atrofidagi inersiya momentlari (koordinata boshidan), inersiya koʻpaytmasi, inersiya radiuslari, sentroid atrofidagi xuddi shu momentlar va asosiy momentlar va ularning oʻqlarining yoʻnalishlari. Mintaqadagi teshiklar teshik sifatida hisoblanadi. Qiymatlar chizma birliklarida; chiziq va yoylardan tuzilgan konturlar uchun aniq; ellips va splaynlar qisqa toʻgʻri boʻlaklar sifatida oʻlchanadi va buni aytadi. Hisobotdan keyin uni matnli faylga yozishni soraydi. Yopiq boʻlmagan obyektlar chiqarib tashlanadi va buni necha ta ekanini aytadi.

## Koʻrinish, fayl va boshqa

### ZOOM

Taxalluslar: `Z`.

- `Oynaning burchagini koʻrsating, masshtab koeffitsientini kiriting (nX) [Hammasi/Hammasi (A)/Oyna/Oldingi/Masshtab/Markaz]`. Oyna uchun ikki burchakni bosing. `E`, `A` yoki Enter: butun chizma.
- `P` (Oldingi, yoki asboblar panelidagi {{ui:Oldingi}}) oldingi koʻrinishga qaytaradi, har bir yorliq uchun 10 tagacha koʻrinish; bir qator gʻildirak qadamlari yoki bitta surish bitta koʻrinish hisoblanadi.
- `2`, `2x` yoki `0.5x` kabi son (yoki `S` va soʻng son) ekran markazi atrofida shuncha koeffitsient bilan kattalashtiradi yoki kichraytiradi.
- `C` `Markaz nuqtasini koʻrsating` va `Balandlik yoki kattalashtirish (nX) kiriting` soraydi.

### PDFATTACH, PDFIMPORT va PDF buyruqlari

Taxalluslar: `PDFATT` {{cmd:PDFATTACH}} uchun, `PDFIM` {{cmd:PDFIMPORT}} uchun. {{cmd:PDFATTACH}} PDF sahifasini chizma ostiga qoʻyadi (fayl, sahifa, kiritish nuqtasi, masshtab, burilish); {{cmd:PDFIMPORT}} sahifaning chiziqlari, egri chiziqlari, toʻldirishlari va matnini PDF nomi bilan atalgan qatlamlardagi chizma obyektlariga aylantiradi, haqiqiy oʻlchamda, yozilgan masshtabda yoki ikki nuqta va haqiqiy masofadan masshtablangan. {{cmd:PDFCLIP}} ostki qatlamni kesadi, {{cmd:PDFADJUST}} xiralik, kontrast, monoxrom sozlaydi yoki uni oʻchiradi, {{cmd:PDFLAYERS}} PDF ning oʻz qatlamlarini almashtiradi va {{cmd:PDF}} chizma ostki qatlamlari ishlatadigan fayllarni CadCraft ga qayta beradi. Qarang: [PDF ostki qatlamlari](topic:pdf-underlay).

### AUTOCOMPLETE

Taxalluslar: `AUTOC`. Chizmani avtotoʻldirish: hech qanday buyruq ishlamayotganda, kulrang shabha chizmaning oʻz naqshlari nima keyin kelishini koʻrsatadi. {{cmd:AUTOCOMPLETE}} uni `On` yoki `Off` qiladi (shuningdek CadCraft sozlamalari) yoki hozir nima taklif qilishini `Show` qiladi. **Tab** shabhani bitta ortga qaytarish qadami sifatida chizadi, **Esc** chizma oʻzgarguncha uni yopadi. U eng yangi obyektlarda uchta narsani topadi: teng qadam bilan ikki yoki undan koʻp chizilgan narsaning keyingi nusxasi (ustunlar, zinapoyaning peshtaxtasi va tekisligi), polichiziq zinapoyasining keyingi qadamlari va xona yoki devor zanjirining yoʻqolgan tomoni. {{cmd:LINE}} yoki {{cmd:PLINE}} oʻrtasida shabha **keyingi nuqta**: zinapoyaning keyingi qadami (peshtaxta, tekislik, peshtaxta…), toʻrtburchakning toʻrtinchi burchagi yoki uni yopadigan nuqta, yoki yana bir teng qadam. Kursorni unga yaqin olib boring va **Tab** ni bosing, xuddi shu joyda bosgandek; davom eting yoki Enter bosing. Qoidalar boʻyicha, model yoʻq, shu kompyuterda hisoblanadi.

### AUTOSHEET

Taxalluslar: `ASH`. Oʻzi joylashadigan varaqlar. {{cmd:AUTOSHEET}} chizmaning qismlarini (nomlangan koʻrinishlaringiz, yoki modelning alohida qismlari yoki butun model) oladi, qogʻoz oʻlchamini (yoki sizning berganingizni) tanlaydi, har bir qismga standart masshtab beradi (hammasiga bitta, yoki har biri sigʻadigan eng kattasi) va koʻrinishlarni yangi varaqlarda qatorlarga, har birining tagida sarlavha shtampi va izoh (nom va masshtab) bilan joylashtiradi. Bitta varaqqa sigʻmaydigan narsa oʻz varagʻini oladi. Bitta ortga qaytarish qadami. Qoidalar boʻyicha, model yoʻq, shu kompyuterda hisoblanadi.

### PHOTOSKETCH

Taxalluslar: `PSK`. Qoʻl eskizining fotosuratidan chizma. Qogʻoz varagʻidagi qoʻl eskizining fotosuratini (JPEG, PNG yoki TIFF) tanlang. {{cmd:PHOTOSKETCH}} qogʻozning toʻrt burchagini topadi, perspektivani tekislaydi, siz nomlagan qogʻoz oʻlchamini (`Paper`, yoki eng yaqin standart) va eskizning `Scale` ni (1 : n) oladi, soʻng qalam chiziqlarini chiziqlar, yoylar va aylanalarga koʻchiradi, har bir qalam rangi (qora, qizil, koʻk, yashil) uchun qatlam bilan. Qogʻozning chetini topa olmasa, butun fotoni varaq sifatida oladi va buni aytadi. Yozuvlar qoldiriladi. Bitta ortga qaytarish qadami. Bu kompyuterda klassik tasvirni qayta ishlash bilan, model yoʻq, hech narsa yuborilmasdan bajariladi. Shuningdek skanerlangan chizma buyruqlariga qarang.

### AUTODIM

Taxalluslar: `ADIM`. Qoidalar boʻyicha avtomatik oʻlchash. {{cmd:AUTODIM}} tanlangan obyektlarni (yoki butun chizmani) ularning tekis va tik chetlaridan oʻlchaydi: siz tanlagan tomonlar boʻylab oʻlchamlar zanjiri (`Sides`), tashqarida bitta umumiy oʻlcham, har bir teshik oʻlchamining oʻlcham ortidagi kenglik (kollinear devor chiziqlari orasidagi boʻshliq), har bir oʻlcham teshigi uchun diametr va `Grid` bilan setka chiziqlari orasidagi masofa. Allaqachon mavjud oʻlcham qayta yaratilmaydi. Bitta ortga qaytarish qadami. Qoidalar boʻyicha, model yoʻq, shu kompyuterda hisoblanadi.

### GRIDMOVE

Taxalluslar: `GM`. Setka chizigʻini koʻchirish toʻplamni olib boradi. {{cmd:GRIDMOVE}} setka chizigʻini (nomi setka yoki oʻq soʻzini oʻz ichiga olgan qatlamdagi chiziq) va unga osilganlarni koʻchiradi: chiziqqa uchi bilan kirgan devorlar unga ergashib choʻziladi, uning boʻylab yotgan devorlar butunlay koʻchadi, ustunlar (chiziqdagi blok havolalari va aylanalar), uning pufakchasi va tegi koʻchadi, va nuqtalari unda turgan oʻlchamlar yangi oraliqni oʻlchaydi. Ikki nuqta bering (faqat chiziqni kesib oʻtgan qism sanaladi) yoki `Distance`. Bitta ortga qaytarish qadami hammasini qaytaradi. Shu kompyuterda qoidalar boʻyicha bajariladi.

### DETAILS

Taxalluslar: `DET`. Sizni topadigan detallar. {{cmd:DETAILS}} firmangizning oʻz detallarini saqlaydi: `Add` chizmaning blokini roʻyxatga qoʻshadi, `List` va `Remove` ularni boshqaradi, `Find` tanlangan narsa (yoki oxirgi chizgan narsangiz) uchun ularni qatlamlar, blok nomlari, shtrixlash naqshlari va izohlardagi soʻzlar boʻyicha, har bir detalning nomi va izohlariga qarab reytinglaydi, shunda deraza boshi derazaning lovhasini topadi. Raqam va nuqtani tanlang va uni joylashtiring. `Hint` yoqiq boʻlsa (shuningdek Sozlamalar › CadCraft da), detalga mos keladigan narsani tanlaganingizda holat satrida bir qator chiqadi. Roʻyxat shu brauzerda, shu kompyuterda saqlanadi va qidiriladigan aynan shu roʻyxat. `Share` uni Hujjatlar jildingizga ham qoʻyadi (`.cadcraft/firm-details.json`, har bir blok chizmasi bilan): `Pull` sizda yoʻq narsani jamoangiz qoʻshganini qoʻshadi, `Push` sizda bor narsani jamoangizda yoʻqligini qoʻshadi, `Both` ikkalasini qiladi, va ikki tomondan hech narsa olib tashlanmaydi. Avval Hujjatlar jildini oching ({{cmd:DOCUMENTS}}); bu jild Team Cloud Plan jildi boʻlsa, butun jamoa bitta roʻyxatdan foydalanadi. Kutubxona panelidagi detal elementida **Firmamning detallariga qoʻshish** tugmasi bor, u uni shu roʻyxatga qoʻyadi. Shu kompyuterda soʻzlar boʻyicha hisoblanadi, model yoʻq.

### SKETCHFIX

Taxalluslar: `SKF`. Qalam eskizlari aniq geometriyaga aylanadi. Bir vaqtda bitta erkin chiziqni bosib sudrang (qalam, sichqoncha yoki barmoq), soʻng Enter. Har bir chiziq chiziq, aylana, yoy, toʻrtburchak yoki polichiziq sifatida oʻqiladi: deyarli gorizontal va vertikal chiziqlar aniq gorizontal va vertikal qilinadi, yopiq yumaloq chiziq aylanaga, toʻrtta toʻgʻri burchakli burchagi bilan yopiq chiziq toʻrtburchakka aylanadi, va chiziqlarning uchlari bir-biriga va chizmadagi mavjud uchlarga tortiladi. Bitta ortga qaytarish qadami. Shu kompyuterda qoidalar boʻyicha, model yoʻq.

### SCANATTACH va skanerlangan chizma buyruqlari

Taxalluslar: `SCA` {{cmd:SCANATTACH}} uchun, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} da taxallus yoʻq. Ular rasm bilan ishlaydi, har biri bitta ortga qaytarish qadami. {{cmd:SCANATTACH}} PNG, JPEG, TIFF (bitta yoki hamma sahifa) yoki rasm boʻlgan PDF sahifasini qoʻyadi. {{cmd:SCANSCALE}} varaqni ikki tanlangan nuqta va haqiqiy masofa bilan masshtablaydi. {{cmd:SCANALIGN}} uni ikki nuqtaga koʻchiradi va buradi (`Scale the sheet to fit` Ha/Yoʻq). {{cmd:SCANDESKEW}} varaqning uzun chiziqlari burchagini koʻrsatadi va siz `Accept` yoki `Value` bergach varaqni buradi. {{cmd:SCANCLEAN}} uni qora-oq qiladi (`Threshold` Avtomatik/Moslashuvchan/Daraja, `Specks`) va `Run`. {{cmd:SCANCROP}} oynani saqlaydi. {{cmd:SCANERASE}} `Rectangle`, `Polygon` yoki `Lasso` ni oʻchiradi. {{cmd:SCANTRACE}} chiziq va yoylarni yangi qatlamga koʻchiradi (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) va nima topganini va rastr boʻlib qolgan narsani aytadi. {{cmd:SCANINFO}} asl faylni va bajarilgan qadamlarni roʻyxatlaydi. {{cmd:RASTERSNAP}} skanerlangan varaqlar chiziqlariga ilashishni On yoki Off qiladi. Qarang: skanerlangan chizma va iz haqidagi mavzu.

### REGEN va REGENALL

Taxalluslar: `RE` {{cmd:REGEN}} uchun, `REA` {{cmd:REGENALL}} uchun. Ekranda chizilgan narsani chizmadan qayta tiklash: {{cmd:REGEN}} siz qarayotgan yorliqni (varaqda, koʻrinish oynalari koʻrsatadigan model ham), {{cmd:REGENALL}} har bir yorliq, har bir boʻlingan ekran oynasi va har bir ochiq chizmani. Skript yoki juda katta oʻzgarishdan keyin tasvir eskirgan boʻlsa, yoki yordamchi chizmani tahrirlagan boʻlsa, ulardan foydalaning; chizmaning oʻzi tegilmaydi, shuning uchun bekor qilinadigan narsa yoʻq.

### NAMEDVIEW

Taxalluslar: `NV`, `VIEWS`. `Variantni kiriting [?/Tiklash/Saqlash/Oyna/Oʻchirish] <Tiklash>`, soʻng koʻrinishning nomi. `S` ekrandagi koʻrinishni, `W` siz tanlagan oynani saqlaydi, `R` saqlangan koʻrinishni koʻrsatadi, `D` birini oʻchiradi, `?` shu yorliqning koʻrinishlarini roʻyxatlaydi. Mavjud nom ostida saqlash uni almashtiradi; har bir oʻzgarish bitta ortga qaytarish qadami. Koʻrinishlar ular saqlangan yorliqqa tegishli. DWG va DXF fayllar ularni saqlaydi (VIEW jadvali); varaqning koʻrinishlari birinchi varaqqa qaytadi, chunki fayl qaysi biri ekanini aytmaydi.

### UNDO va REDO

Taxalluslar: `U` {{cmd:UNDO}} uchun; {{cmd:REDO}} da taxallusi yoʻq. Shuningdek {{key:Mod+Z}} va {{key:Mod+Y}}.

### LAYER

Taxalluslar: `LA`. {{ui:Qatlamlar}} paneliga oʻtadi.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Yangi obyektlar uchun chiziq turini kiriting` — `ByLayer`, `ByBlock` yoki nom (`?` ularni roʻyxatlaydi: Continuous, chizmaniki, va DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE ularning `2` (yarim) va `X2` (ikki barobar) oʻlchamlari bilan). {{cmd:LWEIGHT}} (`LW`): yangi obyektlar uchun chiziq qalinligi mm da, yoki `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): chizmaning chiziq turi masshtabi (bekor qilinadigan). {{cmd:LWDISPLAY}} (`LWT`): `Chiziq qalinligini koʻrsatish [ON/OFF]` — holat satridagi {{ui:LWT}} tugmasi bilan bir xil. Qarang: [Chiziq qalinliklari va chiziq turlari](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Qayta nomlash uchun obyekt turini kiriting [LAyer/Block]`, `Eski nomni kiriting`, soʻng yangi nom; obyektlar yoki havolalar ergashadi. {{cmd:LAYMRG}}: `Birlashtirish uchun qatlamdagi obyektni tanlang yoki [Nom]` {{key:Enter}} gacha, soʻng `Maqsadli qatlamdagi obyektni tanlang yoki [Nom]` va `Y`. {{cmd:LAYDEL}}: `Oʻchirish uchun qatlamdagi obyektni tanlang yoki [Nom]`, soʻng `Y`: qatlam va unda turgan har bir obyekt ketadi (0-qatlam, DEFPOINTS yoki joriy qatlam emas). Har biri uchun bitta ortga qaytarish qadami. Qarang: [Chizmani qatlamlar bilan tartiblash](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Obyektlarni tanlab qatlamlar bilan ishlash; shuningdek {{ui:Qatlamlar}} panelining {{ui:Vositalar}} menyusida. {{cmd:LAYISO}}: `Ajratiladigan qatlam(lar)dagi obyektlarni tanlang`, soʻng {{key:Enter}}: boshqa barcha qatlamlar oʻchiriladi. {{cmd:LAYUNISO}} ularni qayta yoqadi. {{cmd:LAYOFF}} va {{cmd:LAYFRZ}}: `Oʻchiriladigan (yoki muzlatiladigan) qatlamdagi obyektni tanlang`, qayta-qayta; `U` oxirgisini qaytaradi, {{key:Enter}} tugatadi. {{cmd:LAYMCUR}}: `Joriy boʻladigan qatlamdagi obyektni tanlang`. {{cmd:LAYON}} har bir qatlamni yoqadi, {{cmd:LAYTHW}} har bir qatlamni muzsizlantiradi. Har bir buyruq bitta ortga qaytarish qadami. Qarang: [Chizmani qatlamlar bilan tartiblash](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} boʻsh chizma boshlaydi va {{cmd:OPEN}} DWG yoki DXF ni ochadi, har biri chizma ustida oʻz yorligʻida (oʻzgartirilmagan yangi chizma oʻrniga yangi yorliq ochilmaydi). Saqlanmagan oʻzgarishlari bor yorliqni yopganda, avval soraydi. Qarang: [Ekranni boʻlish](topic:split-screen).

{{cmd:SAVE}} (taxallus `QSAVE`, shuningdek {{key:Mod+S}}) chizmaning formatida nusxani yuklab oladi: DWG agar DWG dan ochilgan boʻlsa, DXF agar DXF dan boʻlsa. Yangi chizma bu brauzerda Saqlash sifatida oxirgi tanlangan formatni ishlatadi, aks holda DWG.

{{cmd:SAVEAS}} (shuningdek {{key:Mod+Shift+S}}) {{ui:Nusxani quyidagi nom bilan saqlash}} dialogini ochadi: {{ui:DWG}} (va uning {{ui:Versiya}}si), {{ui:DXF R12}} yoki {{ui:DXF 2000}} ni tanlang, soʻng {{ui:Saqlash}}. Tanlov shu chizma uchun va shu brauzerdagi yangi chizmalar uchun qoladi.

{{cmd:DXFOUT}} har doim DXF R12 nusxasini yuklab oladi, {{cmd:SAVE}} ishlatadigan formatni oʻzgartirmasdan.

Qarang: [Fayllar: nima ochiladi, nima saqlanadi](topic:files#saving).

### TOUR

Taxalluslar: `TUTORIAL`. Birinchi chizma boʻyicha olti qadamli sayohatni qayta boshlaydi. Qarang: [Boshlash](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Taxalluslar: `TBDOCK`. `Asboblar paneli joylashuvi [Yuqorida/Pastda/Chapda/Oʻngda]`. Qarang: [Sozlamalar](topic:settings#toolbar-position).

### COMMANDLINE

Taxalluslar: `CMDLINE`. `Buyruq satri [Pastda mahkamlangan/Suzuvchi/Bir qator/Koʻrsatiladigan tarix satrlari/Buyruqlar tarixi (F2)]`: buyruq satrini biriktiradi yoki suzdiradi, bir qator qiladi, koʻrsatiladigan tarix satrlari sonini soraydi (0 dan 12 gacha), yoki tarixni ochadi. Qarang: [Sozlamalar](topic:settings#command-line).

### TOPAREA

`Yuqori soha [Standart/Ixcham]`: chizma ustidagi panellar oʻzgarishsiz yoki ixcham. Qarang: [Sozlamalar](topic:settings#top-area).

### POLARANG

`Qutb burchagi qadamini gradusda kiriting <90>`: {{ui:Qutb}} kuzatuvi chiziqlarini tekislaydigan qadam (0 dan katta, 180 gacha). Shu brauzerda saqlanadi.

### UNITS

Taxalluslar: `UN`. Uzunliklar qanday yozilishi va kiritilishi.

- `Uzunlik formatini kiriting [Ilmiy/Onlik/Muhandislik/Arxitektura/Kasr] <joriy>`
- Arxitektura va Kasr: `Koʻrsatiladigan eng kichik kasr maxrajini kiriting (1, 2, 4, 8, 16, 32, 64, 128 yoki 256)`. Boshqalar: `Oʻnlik kasr xonalari sonini kiriting (0 dan 8 gacha)`.

Yangi oʻlchamlar unga ergashadi. Bitta ortga qaytarish qadami. {{ui:Joriy sozlamalar}} dagi {{ui:Uzunlik formati}} va {{ui:Aniqlik}} bilan bir xil; qarang: [Fut va dyuym](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Taxalluslar: `GDS`. IC tartibini koʻrish (GDSII oqim fayli): laboratoriya sinovi, faqat koʻrish va oʻlchash uchun.

- Fayl tanlagich `.gds` faylni oladi; bir nechta yuqori hujayra boʻlsa, `Chizish uchun yuqori hujayrani kiriting`.
- Har bir qatlam va maʼlumot turi chizma qatlamiga aylanadi (`GDS 1`, `GDS 2/5`), havolalar va massivlar tekis joylashtiriladi, faylning foydalanuvchi birligida (odatda mikrometr). Bitta ortga qaytarish qadami. Hech narsa simulyatsiya qilinmaydi yoki tekshirilmaydi va fayl qayta yozilmaydi.

### DIAGRAM

Taxalluslar: `TEXTDIAGRAM`, `T2D`. Matndan diagramma.

- Quti matnni oladi (yoki buyruq satrida `;` bilan ajratilgan bitta qator): Mermaid oqim sxemasi, PlantUML komponent diagrammasi, D2 yoki dan-gacha roʻyxati.
- `Diagrammaning yuqori chap burchagini koʻrsating`, soʻng `Matn balandligini koʻrsating`.

Bloklar va bogʻlovchilar `Diagram` qatlamidagi oddiy obyektlar, tugaganda tanlangan holda. Bitta ortga qaytarish qadami. Qarang: [Matndan diagramma chizish](topic:text-to-diagram).

### OLELIST

Taxalluslar: `OLES`. DWG olib yuradigan va CadCraft oʻzi joylashtira olmaydigan OLE obyektlari.

- Har birini roʻyxatlaydi: raqam, tur, oʻlcham, rasm saqlaganmi.
- `Variantni kiriting [Joylashtirish/eXit] <eXit>`: Joylashtirish raqamni, chap pastki burchakni va kenglikni soraydi va rasmi bilan ramka chizadi. Bitta ortga qaytarish qadami; saqlangan obyekt oʻzgarmaydi. Qarang: [Rasmlar](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Taxalluslar: `SHX`. Sizning SHX shriftlaringiz.

- `SHX shrift variantini kiriting [Jild/Fayllar/Roʻyxat/Olib tashlash/Teskari/Tozalash] <Roʻyxat>`

{{ui:[Jild (F)]}} jilddagi har bir `.shx` ni oʻqiydi (CadCraft Studio; har bir ishga tushirishda qayta), {{ui:Fayllar}} tanlangan fayllarni oladi (brauzer), {{ui:Teskari}} bitta shrift harflarini oxiridan boshlab teradi. Yuklangan shriftni nomlaydigan matn uslublari shu shriftda chiziladi. Qarang: [Oʻz SHX shriftlaringizda matn chizish](topic:shx-fonts).

### LIMITS

Chizma qanchalik katta boʻlishi kerakligi.

- `Pastki chap burchakni koʻrsating yoki [ON/OFF] <joriy>`: nuqta, `ON` yoki `OFF`.
- `Yuqori oʻng burchakni koʻrsating <joriy>`.

Setka chegaralarni toʻldiradi, {{cmd:ZOOM}} Hammasi ularni koʻrsatadi, va ular ON boʻlganda tashqaridagi nuqta rad etiladi (`**Outside limits`). Bitta ortga qaytarish qadami; DWG va DXF da saqlanadi. Qarang: [Chizma chegaralarini belgilash](topic:drawing-limits).

### AUNITS

Taxalluslar: `ANGUNITS`. Burchaklar qanday koʻrsatilishi va yozilishi.

- `Burchak formatini kiriting [Onlik gradus/Gradus-daqiqa-soniya/Geodezik yoʻnalishlar] <joriy>`
- `Onlik kasr xonalari sonini kiriting (0 dan 8 gacha)`, yoki qolgan ikkitasi uchun `Aniqlikni kiriting` (0 gradus, 2 daqiqa, 4 soniya, soniyaning 5 dan 8 gacha onlik xonasi).

Bitta ortga qaytarish qadami; DWG va DXF da saqlanadi. {{ui:Joriy sozlamalar}} dagi {{ui:Burchak formati}} bilan bir xil. Qarang: [Geodezik yoʻnalish va burchaklarni kiritish va koʻrsatish](topic:bearings-and-angles).

### APPLOAD

Taxalluslar: `AP`; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Ilovani yuklash…}}. {{ui:Ilovalarni yuklash}} dialogi: `.lsp` dasturlari va `.dcl` dialog fayllarini yuklash, ularni chiqarish, tarixdan qayta yuklash va Ishga tushirish toʻplami. Dasturning `(defun c:NAME …)` buyruqlari boshqa buyruqlar kabi ishlaydi. Qarang: [Ilovalarni yuklash](topic:load-applications) va [LISP dasturlarini ishga tushirish](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Taxalluslarni tahrirlash…}}) taxalluslar faylingizni ochadi (`ALIAS, *COMMAND` qatorlari); {{ui:Saqlash}} uni qoʻllaydi. {{cmd:REINIT}} uni yana qoʻllaydi. Qarang: [Buyruq taxalluslarini tahrirlash](topic:command-aliases).

### OPTIONKEYS

Taxalluslar: `OPTKEYS`; yoki {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Variant harflari}} › {{ui:Tahrirlash…}}. Variant harflari faylingizni ochadi (`COMMAND.OPTION, LETTERS` qatorlari, masalan `ARRAY.PO, P`); {{ui:Saqlash}} uni qoʻllaydi va {{cmd:REINIT}} uni yana qoʻllaydi. Qarang: [Buyruq variantlariga oʻz harflaringizni bering](topic:option-letters).

### LISPEDIT

Taxalluslar: `VLIDE`; yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:LISP muharriri}}. LISP muharririni ochadi, chizma yonida ochiq turadigan oyna.

- Matn: qator raqamlari, kursordagi qavsning juftligi belgilanadi (boʻlmasa qizil), {{key:Enter}} yangi qatorni ochiq qavs ostida suradi, {{key:Tab}} ikki boʻshliq yozadi, {{key:Esc}} matndan chiqadi.
- {{ui:Chizmaga yuklash}} ({{key:Ctrl+Shift+Enter}}): har bir shaklni oʻqiydi, {{cmd:APPLOAD}} fayl bilan qilgani kabi, va uning `c:` buyruqlarini yaratadi. Fayl {{cmd:APPLOAD}} roʻyxatida chiqadi.
- {{ui:Tanlovni ishga tushirish}} ({{key:Ctrl+Enter}}): tanlangan shakllarni yoki kursor turgan shaklni hisoblaydi.
- {{ui:Toʻxtatish}}: ishlayotgan dasturni tugatadi.
- {{ui:Konsol}}: dastur nima chop etganini va har bir xatoni qator bilan; xatoni bossangiz oʻsha joyga oʻtadi. Matn har safar bitta yuqori darajadagi shakl boʻlib ishlaydi, shuning uchun qator shaklniki yoki undagi funksiyani chaqiradigan qator.
- {{ui:Yangi}}, {{ui:Ochish}}, {{ui:Saqlash}} ({{key:Ctrl+S}}): `.lsp` fayl. Matn shu brauzerda ham saqlanadi, shuning uchun oynani yopish uni yoʻqotmaydi.
- Matn yonida: dastur aniqlagan funksiyalar, u chaqiradigan, lekin bu LISP hali yoʻq boʻlgan funksiyalar, u chaqiradigan, na aniqlangan, na oʻrnatilgan funksiyalar, va oʻrnatilgan va yoʻq boʻlganlarning toʻliq roʻyxatlari.

Yopilmagan qavsli yoki tugamaydigan satrli matn ishlatilmaydi: qator nomlanadi. Qadamma-qadam tuzatuvchi, toʻxtash nuqtalari yoki kuzatuv oynasi yoʻq. Qarang: [LISP dasturlarini ishga tushirish](topic:run-lisp).

### HELP

Taxalluslar: `?`. Har bir buyruqni, uning taxalluslarini va bir qatorli tavsifini buyruq satri tarixida chop etadi. Bu yordamni ochmaydi: u uchun {{key:F1}} ni bosing yoki {{ui:Yordam}} ni bosing.

## Obyektlarni tanlash soʻrovi

Har qanday `Obyektlarni tanlang` soʻrovida: obyektlarni bosing, oynalarni (chapdan oʻngga) va kesishuvlarni (oʻngdan chapga) ikki bosish bilan chizing yoki arqonni bosib sudrang ({{key:Space}} sudrash paytida: oyna, kesishuv, toʻsiq), olib tashlash uchun {{key:Shift}}+bosish, va tugatish uchun {{key:Enter}} ni bosing. Shuningdek yozishingiz mumkin: `ALL` (hammasi), `L` (oxirgi obyekt), `P` (Oldingi: oxirgi buyruq ishlatganlar), `F` (Toʻsiq: obyektlar chiziq nuqtalari kesib oʻtgani), `W` (Oyna), `C` (Kesishuv), `R` (Olib tashlash rejimi: tanlovlar obyektlarni olib tashlaydi; soʻrov `Obyektlarni olib tashlang` deydi) va `A` (Yana qoʻshish). `?` ularni roʻyxatlaydi. Ular soʻrovda koʻrinmaydi. Ustma-ust tushgan obyektlar ustida {{key:Tab}} keyingisini ajratib koʻrsatadi; uni tanlash uchun bosing. Qarang: [Obyektlarni tanlash](topic:select-objects).

### ACCESS

Taxallus: `AX`. Koʻrmasdan chizish. {{cmd:ACCESS}} Access ni yoqadi yoki oʻchiradi (`On`, `Off`) va tutish ovozlari (`Sound`) va ovozli buyruqlarni (`Voice`) almashtiradi; avval holatini aytadi. Access yoqiq boʻlganda, har bir buyruq va natija ekran oʻquvchingiz orqali aytiladi va chizish maydonida klaviatura kursori boʻladi. Yordam mavzusi "Koʻrmasdan chizish" tugmalarni tushuntiradi.

### DESCRIBE

Taxallus: `DESC`. Chizmada nima borligini aytadi: nechta obyekt, qanday tur, qanchalik katta, nechta qatlam, nima tanlangan. Faqat oʻqiydi; hech narsani oʻzgartirmaydi.

### WHEREAMI

Taxallus: `WHERE`. Kursor qayerda ekanini aytadi, chizma birliklarida.

### NEARBY

Kursor yaqinidagi narsalarni eng yaqinidan boshlab aytadi, har biri masofasi va tomoni bilan.

### SAYSEL

Tanlanganlarni aytadi, har bir obyekt uchun bitta gap (chiziq uzunligi, uchlari va burchagi; aylana radiusi va markazi; matn yozilganidek).

### VOICE

Ovozli buyruqlarni yoqadi yoki oʻchiradi. Ular shu kompyuterda tanib olinadi; brauzer buni qila olmasa, Sozlamalarda brauzerning onlayn xizmatini tanlamaguningizcha ovoz oʻchiq qoladi.

### TOUCHCROSSHAIR

Taxallus: `TCX`. Barmoq bilan chizish uchun siljigan kursor, shunda barmoq uchi tanlangan nuqtani yopmaydi. Yoqiq boʻlganda, chizmadagi bitta barmoq tanlamaydi: u barmoqning ustida va bir tomonda turgan kursorni harakatlantiradi. Barmoqni koʻtarish hech narsani tanlamaydi va kursorni oʻz joyida qoldiradi. Tanlash uchun chizmaning burchagidagi {{ui:Bosish}} tugmasini bosing yoki chizmaga ikkinchi barmoq bilan tegin. {{ui:Bosish}} ni ushlab turib boshqa barmoqni harakatlantirish sudraydi (tanlash oynasi, arqon, tutqich). Bir barmoqni harakatsiz ushlab turish yoki {{ui:Enter}} tugmasi — Enter. Ikki barmoq suradi va masshtablaydi, avvalgidek. Pastki chekka va uzoq yon chekkada kursor barmoqqa yaqinlashadi, shunda chizmaning har bir qismiga yetish mumkin. Qalam va sichqoncha har doim toʻgʻridan-toʻgʻri tanlaydi.

{{cmd:TOUCHCROSSHAIR}} holatini aytadi va `ON`, `OFF`, `Auto` (faqat barmoq yagona koʻrsatkich boʻlgan joyda yoqiq, shuning uchun sichqonchali kompyuterda oʻchiq), `Distance` (kursor barmoqdan qanchalik uzoqda, 24 dan 240 pikselgacha) yoki `Side` (`Left`: yuqoriga va chapga, oʻng qoʻl uchun; `Right` chap qoʻl uchun; tugmalar boshqa burchakka oʻtadi) soraydi. Bir xil tanlovlar Sozlamalar › CadCraft da, va sensorli ekranli qurilmada holat satrida {{ui:Siljigan kursor}} tugmasi bor. Tanlovlar shu brauzerda saqlanadi.

### WHOHAS

Chizmani kim ochganini aytadi. CadCraft Studio kompyuterda DWG yoki DXF ochilganda uning yonida kichik qulf faylini yozadi (`Plan.dwg.cclock`: kim, qachondan, qaysi versiya), chizma ochiq boʻlganda har daqiqada yangilaydi va chizma yopilganda uni oʻchiradi. Boshqa odam ochgan chizmani ochsangiz, kim va qachondan ekanini aytadi va {{ui:Faqat oʻqish uchun ochish}} (Saqlash keyin yangi nom soraydi), {{ui:Baribir ochish}} (boshqa odamga uning keyingi yangilanishida xabar beriladi) yoki {{ui:Bekor qilish}} ni taklif qiladi. Boshqa odam ochgan faylni ustiga saqlash avval soraydi. Besh daqiqa yangilanmagan qulf eskirgan hisoblanadi: boshqa nusxa saqlamasdan yopilgan yoki kompyuter uyquda.

{{cmd:WHOHAS}} soraydi: `Current` (ochiq chizma), `File` (birini tanlang), `FOlder` (jildni tanlang: unda ochiq boʻlgan har bir chizma roʻyxatlanadi), `Path` (toʻliq yoʻlni yozing) yoki `Name` (boshqalar koʻradigan nom; hisobingizga kirgan boʻlsangiz, hisobingiz nomi). Studio faqat siz tanlagan jildlarga kira oladi: hech tanlanmagan jilddan ochilgan chizma uchun u bir marta ochiq chizmani belgilay olmasligini aytadi; `FOlder` jildni tanlaydi va shundan keyin qulflar u yerda ishlaydi. Qulf odamlar uchun eslatma, toʻsiq emas: boshqa dastur hali ham faylni yozishi mumkin. Brauzerda jildlar yoʻq, buyruq buni aytadi.

### OVERKILL

Ikki nusxa obyektlarni oʻchiradi va bir-birini qoplagan chiziq va yoylarni tartibga soladi, ikki marta chizilgan chiziqlar bilan kelgan chizmalar uchun. `Tozalash uchun obyektlarni tanlang`, {{key:Enter}}, soʻng yana {{key:Enter}} bilan koʻrsatilgan sozlamalar bilan tozalash, yoki avval bittasini oʻzgartirish:

- `Tolerance`: ikki koordinata bir xil deb hisoblanish uchun qanchalik yaqin boʻlishi kerak (boshida 0.000001; 0 aynan bir xil degani).
- `Ignore`: ikki obyekt boshqacha boʻlishi mumkin boʻlgan, lekin aks holda bir xil boʻlgan xossalar. Oʻchirish uchun nom yozing: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, yoki `None` / `All`. Tugatgach {{key:Enter}}.
- `Overlap`: yoqiq yoki oʻchiq. Yoqiq boʻlganda, bitta toʻgʻri chiziqda yotgan va bir-birini qoplagan chiziqlar bitta chiziq boʻladi (boshqasi ichida yotgan chiziq shunchaki oʻchiriladi), va bitta aylanada yotgan va bir-birini qoplagan yoylar bitta yoy boʻladi; toʻliq burilishni tugatadigan yoylar aylana boʻladi, va aylanada yotgan yoy oʻchiriladi.
- `Ends`: yoqiq yoki oʻchiq. Yoqiq boʻlganda, bitta toʻgʻri chiziqdagi chiziqlar va bitta aylanadagi yoylar faqat uchma-uch tegsa, bitta boʻlak boʻladi.

Har bir obyekt turi nusxalar uchun tekshiriladi: ikki obyekt nusxa boʻladi, agar ularning geometriyasi tolerantlik ichida bir xil boʻlsa va qatlami, rangi, chiziq turi, chiziq turi masshtabi, chiziq qalinligi, qalinligi, shaffofligi va balandligi mos kelsa (siz eʼtiborga olmaydiganlardan tashqari). Chiziqlar va ochiq polichiziqlar teskari chizilgan boʻlsa ham mos keladi. Buyruq nechta obyektni tekshirgani va oʻchirgani haqida xabar beradi: nusxalar, birlashtirilgan qoplangan qismlar, uchma-uch birlashtirilgan boʻlaklar. Bitta {{cmd:UNDO}} hammasini qaytaradi. Sozlamalar chizma oynasini yopguncha amal qiladi.

Quyidagilarga tegilmaydi: qulflangan qatlamdagi obyektlar va yashirin obyektlar. Balandligi (Z) bor chiziqlar birlashtirilmaydi (ularning aniq nusxalari baribir ketadi), va polichiziq ichidagi kesmalarga (ular yupqalanmaydi), polichiziq kesmasida yotgan chiziqqa va teskari chizilgan yopiq polichiziqqa tegilmaydi.

### DRAWORDER

Qaysi obyektlar oldinda chizilishini oʻzgartiradi. `Qayta tartiblash uchun obyektlarni tanlang`, {{key:Enter}}, soʻng `Obyektlar ustida`, `Obyektlar ostida`, `Oldinga` yoki `Orqaga` ({{key:Enter}} = `Orqaga`). `Obyektlar ustida` va `Obyektlar ostida` mos yoʻnalish obyektlarini soraydi: tanlov ulardan eng oldindagining oldiga yoki eng orqadagining orqasiga tushadi. Tanlangan obyektlar oʻzaro oʻz tartibini saqlaydi. Bitta ortga qaytarish qadami. Tartib DWG va DXF da chizma bilan saqlanadi, bu yerda u obyektlar yoziladigan tartib.

Ekranda har bir obyekt chizmaning tartibida chiziladi, boshqa dasturlar fayl ochganda chizganidek: qattiq shtrixlash, keng polichiziq yoki matn niqobi ortidagi chiziq va matnni yopadi, va uning oldidagi narsa uni yopadi. Chiziq matnni kesib oʻtgan joyda ikkalasi ham koʻrinadi. Rasmlar va biriktirilgan PDF sahifalar chiziqlar ostida qoladi. Juda katta chizmada, toʻldirishlar va chiziqlar bir-biriga kesishib 256 martadan koʻp almashsa, birinchi 256 tasi oʻz tartibini saqlaydi, qolganlari toʻldirishlarini chiziqlar ostida chizadi, shunda qayta chizish tez boʻladi.

### TEXTTOFRONT

Matn, oʻlchamlar va yetakchilarni ochiq fazoda boshqa hamma narsadan oldinga olib chiqadi: `Matn`, `Oʻlchamlar`, `Yetakchilar` yoki `Hammasi` ({{key:Enter}} = `Hammasi`). Bitta ortga qaytarish qadami. Bunday narsa boʻlmasa yoki ular allaqachon oldinda boʻlsa, buni aytadi.

### HATCHTOBACK

Ochiq fazodagi har bir shtrixlashni boshqa hamma narsaning orqasiga yuboradi, shunda toʻldirishlar saqlangan faylda chiziqlar va matnni yopmaydi. Savollar yoʻq. Bitta ortga qaytarish qadami.

### ISOLATEOBJECTS

Taxalluslar: `ISOLATE`. Faqat tanlangan obyektlarni koʻrsatadi: ochiq fazodagi qolgan hamma narsa UNISOLATEOBJECTS gacha koʻrinmaydi. {{cmd:LAYISO}} dan farqli oʻlaroq, u siz tanlagan obyektlar bilan ishlaydi, ularning qatlamlaridan qat’i nazar, va hech bir qatlamni oʻzgartirmaydi. Yashirin obyektlar chizilmaydi, tanlanmaydi, ilashmaydi, zoom qilinmaydi va chop etilmaydi, va `ALL` ni qabul qiladigan buyruqlar ularni oʻtkazib yuboradi. Obyektlar ajratilgan paytda chizganingiz odatdagidek koʻrinadi.

Bu faqat seans uchun: chizma bilan hech narsa saqlanmaydi, bu bitta ortga qaytarish qadami emas va chizmani qayta ochsangiz hammasi koʻrinadi. Obyektlar yashirin boʻlganda holat satrida ular soni bilan tugma koʻrinadi; ularni qayta koʻrsatish uchun bosing.

### HIDEOBJECTS

Tanlangan obyektlarni UNISOLATEOBJECTS gacha yashiradi. {{cmd:ISOLATEOBJECTS}} bilan bir xil qoidalar: faqat seans uchun, saqlanmaydi, bitta ortga qaytarish qadami emas.

### UNISOLATEOBJECTS

Taxalluslar: `UNISOLATE`, `UNHIDE`. {{cmd:ISOLATEOBJECTS}} yoki {{cmd:HIDEOBJECTS}} yashirgan har bir obyektni yana koʻrsatadi va necha tasi qaytganini aytadi.

### LAYLOCKFADE

Qulflangan qatlamlardagi obyektlarning koʻrinishini va bosish ularga yetishini belgilaydi. Hozirgi holatni aytadi, soʻng qabul qiladi:

- 0 dan 90 gacha son: xiralik miqdori foizda (boshida 50). 0 xiralikni oʻchiradi.
- `ON` yoki `OFF`: xiralik yoqiq yoki oʻchiq, miqdori saqlanadi.
- `Pick`, soʻng `Yes` yoki `No`: buyruq ishlamayotganda qulflangan qatlamdagi obyektlarni bosish tanlashi mumkinmi? `No` (standart): ularni umuman tanlab boʻlmaydi. `Yes`: bosish yoki oyna ularni tanlaydi, shunda {{ui:Xossalar}} ularni koʻrsata oladi; ular baribir oʻzgartirilmaydi va buyruqning oʻz `Obyektlarni tanlang` soʻrovi ularni hech qachon olmaydi.

Obyekt ilashtirishlari ikkala holatda ham qulflangan qatlamdagi obyektlarni topadi. Chop etishlar hech qachon xiralashmaydi. Ikkala sozlama sizniki, chizmaniki emas, va ular {{ui:Sozlamalar}} da {{ui:Qulflangan qatlamlar}} ostida ham bor.

### BURST

Blok havolalarini portlatadi va ularning atributlari aytganini saqlaydi. `Portlatiladigan blok havolalarini tanlang`, {{key:Enter}}: har bir havola blokning obyektlari bilan almashtiriladi, va har bir koʻrinadigan atributning qiymati shu atributning oʻz qatlamidagi oddiy matnga aylanadi (0-qatlamdagi atribut havolaning qatlamiga tushadi, bloklarning boshqa 0-qatlamdagi obyektlari kabi). Koʻrinmas atributlar tashlanadi. Blok ichidagi blok blok havolasi boʻlib qoladi. Bitta ortga qaytarish qadami; qancha havola portlatilganini va qancha atribut qiymati matnga aylanganini aytadi.

Bogʻlangan chizmani nomi bilan rad etadi (avval uni bogʻlang, yoki {{cmd:NCOPY}} bilan undan nusxa oling), va tanlangan boshqa obyektlarni tegmaydi. Blok havolalari uchun {{cmd:EXPLODE}} xuddi shu obyektlarni beradi; {{cmd:BURST}} faqat blok havolalarini oladi va atribut matnini sanaydi.

### TXT2MTXT

Taxalluslar: `T2M`. Bir qatorli matnlarni bitta abzats matniga birlashtiradi. `Birlashtiriladigan bir qatorli matnni tanlang`, {{key:Enter}}, soʻng `Abzats` (qatorlar birga oqadi va eng keng qatorning kengligida oʻraladi) yoki `Qatorlar` (har bir matn oʻz qatori boʻlib qoladi); {{key:Enter}} oxirgi ishlatilganini oladi. Qatorlar yuqoridan pastga, soʻng chapdan oʻngga, yuqori matnning yoʻnalishi boʻylab tartiblanadi. Abzats yuqori matnning chap yuqori burchagidan osiladi va uning balandligi, burilishi, uslubi, qatlami va rangini oladi. Bitta ortga qaytarish qadami.

Allaqachon abzats matni, boʻsh matn va tanlovdagi boshqa obyektlar tegilmaydi, va buyruq nechtasi ekanini aytadi.

### NCOPY

Blok havolasi yoki bogʻlangan chizmadan obyektlarni chizmaga, hech narsani portlatmasdan nusxalaydi. `Blok havolasi yoki bogʻlangan chizma ichidagi obyektni bosing`: bosishga eng yaqin obyekt u koʻrinadigan joyda nusxalanadi, qancha chuqur blokda boʻlishidan qat’i nazar; yana bosing, soʻng {{key:Enter}}. Keyin `Nusxalarni koʻchirish uchun asosiy nuqta`: {{key:Enter}} ularni joyida qoldiradi, yoki asosiy nuqta va ikkinchi nuqtani bering. Butun buyruq bitta ortga qaytarish qadami.

Nusxa koʻrinadigan qatlamni oladi: blok ichidagi 0-qatlamdagi obyekt u turgan havolaning qatlamiga tushadi, va ByBlock rangi shu havolaning rangiga aylanadi. Bogʻlangan chizmadan `Plan|Walls` qatlami `Plan$0$Walls` boʻladi (bogʻlanish bergan nom), bogʻlangan qatlamning rangi, chiziq turi va chiziq qalinligi bilan. Atributning qiymati matn sifatida nusxalanadi. Qulflangan qatlamlardagi blok havolalarini tanlab boʻlmaydi.

### FLATTEN

Tanlangan obyektlarning balandligi (Z) va qalinligini 0 ga oʻrnatadi. `Tekislash uchun obyektlarni tanlang`, {{key:Enter}}. Tanlov ishlatadigan blok taʼriflari ichidagi obyektlarni ham tekislaydi (va ularning ichidagi bloklarni), shuning uchun bu bloklarga har bir havola oʻzgaradi; bogʻlangan chizmalar oʻz holida qoladi. Bitta ortga qaytarish qadami; necha obyekt oʻzgarganini aytadi va hech birida balandlik yoki qalinlik boʻlmasa, buni ham aytadi.

CadCraft 2D chizmada uchinchi oʻlchamdan nimani saqlashi: aylana, yoy, ellips, nuqta, matn, blok havolasi, shtrixlash, yetakchi va polichiziqlarda balandlik (ularning elevatsiyasi), chiziqning har bir uchida balandlik, va chiziq, aylana, yoy, polichiziq, nuqta va matnda qalinlik — fayl ularni qanday saqlagan boʻlsa, shunday. {{cmd:FLATTEN}} aynan shularni tozalaydi. U 3D yorligʻidagi 3D modelga, 3D yuzalar yoki jismlarga tegmaydi, va egilgan tekislikda chizilgan obyekt fayl ochilganda chizma tekisligiga keltirilgan.

### BREAKLINE

Uzilish belgisi bilan chiziq chizadi, qisqa qilib kesilgan koʻrinish uchun. Joriy oʻlchamni va chiqishni aytadi, soʻng `Uzilish chizigʻining birinchi nuqtasi` (yoki avval oʻzgartirish uchun `Size` / `Extension`), `Ikkinchi nuqta` va `Uzilish belgisi qayerda turadi`: chiziq boʻylab bosing yoki oʻrtasi uchun {{key:Enter}}. Natija joriy qatlamdagi bitta polichiziq: chiziq, har bir nuqtadan chiqish masofasiga oʻtib, balandligi oʻlchamga teng va yarmi uzunlikdagi Z shaklidagi chiziq bilan.

`Size` va `Extension` sozlamalaringiz sifatida eslab qolinadi (oʻlcham boshida matn balandligining ikki barobari va masshtabga koʻpaytirilgan; chiqish oʻlchamning yarmi). {{key:Enter}} buyruqni takrorlaydi.

### AUDIT

Ochiq chizmani buzilishlar uchun tekshiradi va tuzatadi. {{cmd:AUDIT}} model, varaqlar va bloklar ichidagi har bir obyektni va qatlamlar jadvalini tekshiradi va topilganlarni turi boʻyicha roʻyxatlaydi:

- cheksiz yoki juda katta sonlar;
- oʻlchamsiz obyektlar: uzunligi yoʻq chiziq, radiusi yoʻq aylana, bir nuqtali polichiziq, harfsiz yoki balandliksiz matn, nolga teng masshtabli blok havolasi;
- chizmada yoʻq qatlamdagi obyektlar; yoʻq blokka havolalar; chizmada yoʻq matn va oʻlcham uslublari nomlari va chiziq turlari nomlari;
- oʻzi yoki boshqa bloklar orqali oʻzini oʻz ichiga oladigan bloklar;
- bir xil identifikator, kalit yoki fayl tutqichiga ega obyektlar;
- oʻlchangan nuqtalari yoʻq oʻlchamlar va yopiq kontur boʻlmagan shtrixlashlar.

Soʻng `Ularni tuzatilsinmi? [Ha/Yoʻq]` soraydi. `Yoʻq` hech narsani oʻzgartirmaydi. `Ha` hammasini bitta ortga qaytarish qadamida tuzatadi: chizib boʻlmaydigan narsa olib tashlanadi (notoʻgʻri sonlar, oʻlchamsiz, yoʻq blok, buzilgan oʻlcham, ishlatib boʻlmaydigan chegarali shtrixlash, oʻzini oʻzi yopadigan blok halqasi); yoʻq qatlam yaratiladi; noma’lum uslub va chiziq turi nomlari standartga qaytadi; umumiy kalit almashtiriladi. Necha obyekt olib tashlanganini va necha tasi tuzatilganini chop etadi. Xuddi shu topilmalar Muammolar panelida har birida oʻz {{ui:Tuzatish}} bilan koʻrinadi.

Hech narsani rad etmaydi, lekin faqat CadCraft oʻzi chizadigan narsalarni tekshiradi: boshqa dasturlar uchun saqlangan maʼlumotlar (3D jismlar, OLE obyektlari) ochilmaydi.

### RECOVER

Shikastlangan DXF yoki DWG ni ochadi. {{cmd:RECOVER}} faylni soraydi, uni rad etmasdan oʻqiy oladigan narsani oʻqiydi, tashlab ketgan yoki taxmin qilgan narsalarni roʻyxatlaydi, soʻng {{cmd:AUDIT}} kabi `Ha` bilan chizmani tekshiradi va tuzatadi.

- DXF: kod va qiymat juftligiga kirmagan qatorlar juftliklar yana tekis tushguncha tashlab ketiladi; oxiri boʻlmagan boʻlim yopiladi; qisqa kesilgan fayl kesilgan joygacha oʻqiladi; qisqa kesilgan ikkilik DXF esa oxirgi toʻliq qiymatigacha oʻqiladi. Boʻlim, blok yoki obyekt hali ham oʻqilmasa, u tashlab ketiladi va nomlanadi, va oʻqish undan keyin davom etadi.
- DWG: tekshiruvlardan oʻta olmagan yoki ochilmaydigan obyektlar tashlab ketiladi, va yoʻqolgan obyektlar roʻyxati obyekt maʼlumotlarini aylanib chiqib tiklanadi.

Fayl diskda oʻzgarmaydi. Tiklangan chizma saqlanmagan holda ochiladi: uni yangi nom bilan saqlang. Hech narsa oʻqib boʻlmaydigan fayl sababi bilan rad etiladi.

### LEGACYTEXT

Eski 8 bitli vyetnam shriftlari bilan yozilgan matnni Unicode ga aylantiradi. Qisqa nomlar `TEXTTOUNICODE` va `VNTEXT`.

Eski vyetnam chizmalarida matn faqat shrift vyetnamcha qiladigan gʻarb belgilari sifatida saqlanadi: TCVN3 matni ABC shriftlarida (`.VnTime`, `.VnArial` va nomi `H` bilan tugaydigan bosh harfli shriftlar), va VNI matni VNI shriftlarida (`VNI-Times`). CadCraft bunday matnni chizma ochilishi bilanoq, matn uslubining, obyektning yoki abzats matnidagi qismning shrifti boʻyicha oʻqiganidek koʻrsatadi; fayl hali ham eski belgilarni saqlaydi.

{{cmd:LEGACYTEXT}} har bir kodlashda necha matn topilganini aytadi va `Convert … to Unicode?` deb soraydi. `Ha` har birini qayta yozadi (model, varaqlar, bloklar, atribut qiymatlari va taʼriflari) va matn uslublariga Unicode shrift beradi (eski shrift turiga qarab Times New Roman, Arial yoki Courier New), bitta ortga qaytarish qadamida. Abzats matni ichidagi formatlash saqlanadi.

Matn maʼlum shriftdan foydalanmaganda (shrift nomini yoʻqotgan uslub), u `Read selected texts as [Tcvn3/Vni/None]` soraydi: kodlashni tanlang va matnlarni tanlang. Allaqachon Unicode boʻlgan matn tegilmaydi. Oʻlchamdagi matn bekor qilishlari va multiyetakchi matni aylantirilmaydi.
