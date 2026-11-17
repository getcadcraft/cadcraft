---
title: Buyruqlar boʻyicha maʼlumot
summary: CadCraft chizma ilovasidagi har bir buyruq, uning taxalluslari, buyruq so'raydigan savollar, variantlari va standart qiymatlari.
keywords: buyruqlar, taxalluslar, buyruqlar roʻyxati, maydon, perimetr, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Buyruq nomini yoki taxallusni kiriting va {{key:Enter}} yoki {{key:Space}} tugmasini bosing. Katta-kichik harf farqi yoʻq, boshidagi `_`, `-`, `.` yoki `'` belgilari eʼtiborga olinmaydi. Buyruqlar tarixida barcha buyruqlarning qisqa roʻyxatini chiqarish uchun `HELP` (yoki `?`) yozing; ushbu yordamni ochish uchun {{key:F1}} tugmasini bosing.

Buyruq satri savollarini oʻqish: variantlar kvadrat qavsda beriladi, ularni bosh harflari bilan tanlaysiz (`D` — Diametr uchun). Standart qiymat burchakli qavsda beriladi, uni qabul qilish uchun {{key:Enter}} bosing. Nuqta soʻralganda bosishingiz yoki [Koordinata va masofani kiritish](topic:coordinate-entry) boʻlimidagi istalgan formatni yozishingiz mumkin. Masofa soʻralganda raqam kiritishingiz yoki ikki nuqtani bosishingiz mumkin.

Nuqta yoki obyekt talab qilinadigan joyda {{key:Enter}} bosilsa va standart qiymat boʻlmasa, buyruq tugaydi. {{key:Esc}} buyruqni bekor qiladi. Buyruq bajargan har qanday ish bitta ortga qaytarish qadamidir.

## Chizish

### LINE

Taxalluslari: `L`. Har biri alohida obyekt boʻlgan toʻgʻri kesmalar.

- `Birinchi nuqtani koʻrsating` (Enter: oxirgi bergan nuqtadan boshlash)
- `Keyingi nuqtani koʻrsating [Ortga qaytarish]`, takrorlanadi. Ikkita kesmadan keyin: `[Ortga qaytarish/Yopish]`.
- `U` oxirgi kesmani qaytaradi, `C` birinchi nuqtaga yopadi va tugatadi. Enter buyruqni tugatadi.

### PLINE

Taxalluslari: `PL`. Chiziq va yoy kesmalaridan iborat bitta polichiziq.

- `Boshlanish nuqtasini koʻrsating`
- `Keyingi nuqtani koʻrsating [Yoy/Yopish/Ortga qaytarish]` (ikkita kesma boʻlganda Yopish)
- `A` yoylarga oʻtadi: `Yoyning oxirgi nuqtasini koʻrsating [Chiziq/Yopish/Ortga qaytarish]`. Har bir yoy oldingi kesmaga urinma boʻlib davom etadi. `L` yana chiziqqa qaytadi, `CL` yoy bilan yopadi.
- Enter buyruqni tugatadi; polichiziq ochiq qoladi.

### CIRCLE

Taxalluslari: `C`.

- `Aylananing markaziy nuqtasini koʻrsating [3P/2P/Ttr (tan tan radius)]`
- `Aylananing radiusini koʻrsating [Diametr] <oxirgi radius>`; `D` `Aylananing diametrini koʻrsating` soʻraydi.
- `2P`: diametrning ikki uchi. `3P`: aylanada uchta nuqta.
- `T` (shuningdek `TTR` buyrugʻi va {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Aylananing birinchi urinmasi uchun obyekt ustidagi nuqtani koʻrsating`, keyin ikkinchisi, keyin radius (Enter: oxirgisi). Aylana ikkala obyektga ham urinadi (chiziqlar, yoylar, aylanalar, polichiziq kesmalari, blok ichida ham); shunday aylanalar orasida sizning tanlovingizga eng yaqini olinadi. Mos aylana boʻlmasa, `Aylana mavjud emas` chiqadi.
- `TTT` (yoki {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): uchta obyekt; uchalasiga ham urinadigan aylana, tanlovingizga eng yaqini (uchta chiziq uchun ichki yoki tashqi aylana, qayerni bosganingizga qarab).

### ARC

Taxalluslari: `A`.

- `Yoyning boshlanish nuqtasini koʻrsating [Markaz]`, `Yoyning ikkinchi nuqtasini koʻrsating`, `Yoyning oxirgi nuqtasini koʻrsating`: uch nuqtadan oʻtuvchi yoy.
- `C`: `Yoyning markaziy nuqtasini koʻrsating`, `Yoyning boshlanish nuqtasini koʻrsating`, `Yoyning oxirgi nuqtasini koʻrsating`. Yoy boshidan oxirigacha soat strelkasiga qarshi yoʻnalishda oʻtadi.

### RECTANG

Taxalluslari: `REC`, `RECTANGLE`. Yopiq polichiziq.

- `Birinchi burchak nuqtasini koʻrsating`, `Boshqa burchak nuqtasini koʻrsating`. Ikkinchi burchak uchun `@kenglik,balandlik` yozing.

### POLYGON

Taxalluslari: `POL`. Muntazam koʻpburchak yopiq polichiziq sifatida.

- `Tomonlar sonini kiriting <4>` (3 dan 1024 gacha)
- `Koʻpburchakning markazini koʻrsating`
- `Variantni kiriting [Aylanaga ichki chizilgan/Aylanaga tashqi chizilgan] <I>`
- `Aylananing radiusini koʻrsating`: nuqtani bosing yoki kiriting; uning masofasi oʻlchamni, yoʻnalishi esa koʻpburchakni aylantiradi.

### ELLIPSE

Taxalluslari: `EL`.

- `Ellipsning oʻq uchini koʻrsating [Markaz]`, `Oʻqning boshqa uchini koʻrsating`, `Boshqa oʻqqacha masofani koʻrsating`
- `C`: `Ellipsning markazini koʻrsating`, `Oʻqning uchini koʻrsating`, keyin boshqa oʻqqacha masofa.
- `I` (`Isocircle`, faqat {{cmd:ISODRAFT}} yoqilgan boʻlganda): markaz, keyin radius yoki `Diameter`: aylana joriy izometrik tekislikda koʻrinadigan ellips.

### HATCH

Taxalluslari: `H`, `BH`, `BHATCH`; yoki asboblar panelidagi {{ui:Hatch}}. Avval joriy shablon, masshtab va burchakni chiqaradi.

- `Ichki nuqtani koʻrsating [Obyektlarni tanlash/Shablon/Masshtab/Burchak]`, takrorlanadi (`Ortga qaytarish` bir marta maydon paydo boʻlgach). Har bir bosish uni oʻrab turgan yopiq maydonni qoʻshadi, ichidagi yopiq shakllar orol sifatida qoladi. Enter ularning hammasidan bitta shtrixlash yaratadi.
- `S`: `Yopiq obyektlarni tanlang` (yopiq polichiziqlar, aylanalar, yopiq ellipslar).
- `P`: `Shablon nomini kiriting, SOLID yoki roʻyxat uchun ? <joriy>`. `SC`: `Shablon masshtabini koʻrsating`. `A`: `Shablon burchagini koʻrsating`.
- `G` (Gradient): toʻldirish shablon oʻrniga gradiyent boʻladi. Savollari uchun {{cmd:GRADIENT}} ga qarang.

Qarang: [Shtrixlash va maydonlarni toʻldirish](topic:hatch).

### GRADIENT

Taxalluslari: `GD`. Maydonni bir yoki ikki rangli gradiyent bilan toʻldiradi. Avval gradiyentni soʻraydi, keyin {{cmd:HATCH}} kabi davom etadi (`Ichki nuqtani koʻrsating`, yopiq obyektlar uchun `S`, tugatish uchun {{key:Enter}}).

- `Gradiyent variantini kiriting [Turi/Bitta rang/Ikki rang/Burchak/Markazlashtirish/eXit] <X>`, takrorlanadi; har safar hozirgi gradiyentni chiqaradi.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` yoki ularning teskarisi (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Dastlabki harflar yetarli.
- `O`: bitta rang, keyin uning 0 dan 1 gacha boʻlgan rang ohangi (0 — qora, 0,5 — rangning oʻzi, 1 — oq). `TW`: birinchi va ikkinchi rang. Rang 1 dan 255 gacha son, `255,128,0` kabi uch son yoki `#rrggbb` boʻlishi mumkin.
- `A`: gradiyent yoʻnalishi burchagi. `C`: markazlashtirilgan Ha yoki Yoʻq (Yoʻq gradiyent oʻrtasini bir tomonga suradi).
- Nomaʼlum rang yoki turni va 0 dan 1 gacha boʻlmagan rang ohangini rad etadi.

{{cmd:HATCHEDIT}} `G` va Xossalar (Gradiyent) keyinroq gradiyentni oʻzgartiradi yoki istalgan shtrixlashni gradiyentga aylantiradi. Gradiyent ekranda chiziladi va chop etiladi. DWG 2004 va undan keyingi versiyalar uni haqiqiy gradiyent shtrixlash sifatida saqlaydi; DXF 2000 va DWG 2000 uni CadCraft uchun saqlaydi, boshqa dasturlar esa uni birinchi rangdagi yaxlit toʻldirish sifatida koʻradi.

### HATCHGENERATEBOUNDARY

Taxalluslari: `HGB`. Chegarasini yoʻqotgan shtrixlashdan chegarani qayta yaratadi. `Shtrixlashlarni tanlang` (yoki avval tanlang), keyin `Har bir shtrixlashni yangi chegarasiga bogʻlaysizmi, shunda u unga ergashadimi? [Ha/Yoʻq] <Ha>`.

- Shtrixlashning har bir konturi shtrixlash qatlamidagi yopiq polichiziqqa aylanadi; yangi polichiziqlar tanlangan holda qoladi. Egri chiziq qisqa toʻgʻri boʻlaklar sifatida qaytadi, shtrixlash ularni saqlaydi.
- Ha tanlansa, shtrixlash {{cmd:HATCH}} bilan yaratilgandek yangi chegarasiga ergashadi. Bitta ortga qaytarish qadami.
- Shtrixlash tanlanmagan boʻlsa, buni xabar qiladi.

### POINT

Taxalluslari: `PO`; yoki {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Har bir bosishda nuqta obyekti, Enter bosilguncha.

- `Nuqtani koʻrsating`

### XLINE

Taxalluslari: `XL`; yoki {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Ikki tomonga cheksiz yordamchi chiziqlar. Qarang: [Yordamchi chiziqlar va nurlar](topic:construction-lines).

- `Nuqtani koʻrsating [Gor/Vert/Burch/Bissek/Siljitish]`, keyin har bir chiziq uchun `Oʻtuvchi nuqtani koʻrsating`, Enter bosilguncha.
- `A`: `Yordamchi chiziqning burchagini kiriting [Tayanch] <0>`; `R` avval `Chiziq obyektini tanlang` soʻraydi.
- `B`: `Burchak uchi nuqtasini koʻrsating`, `Burchakning boshlanish nuqtasini koʻrsating`, keyin har bir chiziq uchun `Burchakning oxirgi nuqtasini koʻrsating`.
- `O`: `Siljish masofasini kiriting [Orqali] <Orqali>`, keyin har bir chiziq uchun `Chiziq obyektini tanlang` va `Siljitish tomonini koʻrsating` (yoki `Oʻtuvchi nuqtani koʻrsating`).

### RAY

Taxalluslari yoʻq; yoki {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Boshlanish nuqtasini koʻrsating`, keyin har bir nur uchun `Oʻtuvchi nuqtani koʻrsating`, Enter bosilguncha.

### TEXT

Taxalluslari: `DT`, `DTEXT`; yoki asboblar panelidagi {{ui:Text}}. Bir qatorli matn; har bir qator alohida obyekt.

- `Matnning boshlanish nuqtasini koʻrsating [Tekislash]`
- `J`: `Variantni kiriting [Chap/Markaz/Oʻng/Oʻrta/TL/MC] <L>`, keyin `Matnning kiritish nuqtasini koʻrsating`
- `Balandlikni koʻrsating <joriy matn balandligi>`
- `Matnning burilish burchagini koʻrsating <0>`
- `Matnni kiriting`, takrorlanadi: har bir Enter keyingi qatorni pastdan boshlaydi. Boʻsh qatorda Enter tugatadi. {{key:Space}} bu yerda boʻshliq kiritadi.

### DIVIDE

Taxalluslari: `DIV`. {{cmd:DIVIDE}} chiziq, yoy, aylana, polichiziq, splayn yoki ellipsda uni teng boʻlaklarga boʻluvchi belgilar qoʻyadi. Obyektni tanlang, keyin boʻlaklar sonini kiriting (2 dan 32767 gacha). Ochiq obyektga boʻlaklar sonidan bitta kam belgi qoʻyiladi; yopiq obyektga boshida ham belgi qoʻyiladi. Obyektning oʻzi kesilmaydi. Belgilar nuqtalardir; `Block` buning oʻrniga shu chizmadagi blok soʻraydi va u obyektga ergashib burilsinmi-yoʻqmi. Splayn va ellipsdagi uzunliklar qisqa vatarlar boʻylab oʻlchanadi. Matn, shtrixlash va uzunligi boʻlmagan boshqa obyektlarni rad etadi.

### MEASURE

Taxalluslari: `ME`. {{cmd:MEASURE}} chiziq, yoy, aylana, polichiziq, splayn yoki ellips boʻylab berilgan har bir uzunlikda belgi qoʻyadi, sizning bosgan joyingizga eng yaqin uchidan hisoblab (yopiq obyektda: boshidan). Uzunlikni raqam yozib yoki ikki nuqta bilan bering. Ochiq obyektning uzoq uchida belgi qoʻyilmaydi. `Block` har bir belgida nuqta oʻrniga blok joylashtiradi. 0 uzunlik, obyektdan uzun uzunlik va 32767 dan ortiq belgi hosil qiladigan uzunlikni rad etadi.

### BOUNDARY

Taxalluslari: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tanlagan nuqta turgan maydonni oʻrab turgan yopiq polichiziq yaratadi; uni ekranda chegaralab turgan chiziqlar, yoylar, aylanalar, polichiziqlar va egri chiziqlardan oladi. Yoy yoki aylanada yotgan boʻlaklar yoy kesmalari sifatida qaytadi; ellips va splayn boʻlaklari qisqa toʻgʻri kesmalar boʻladi. `Orollar` yoqilgan boʻlsa (boshlangʻich sozlama), ichidagi har bir yopiq maydon ham oʻz polichiziqini oladi. Nuqtalarni koʻrsatishda davom eting; Enter tugatadi. Maydonni chegaralagan obyektlar oʻzgarishsiz qoladi. Nuqta turgan yopiq maydon boʻlmasa, buni xabar qiladi.

### BLEND

{{cmd:BLEND}} ikki ochiq egri chiziqning uchlari orasida splayn chizadi. Birlashtiriladigan uchiga yaqin joyda har bir egri chiziqni bosing. `CONtinuity` `Urinma` (splayn ikkala egri chiziq boʻylab chiqadi va kiradi) yoki `Silliq` (ular uchlarida egilgan yoʻnalishda ham egiladi) ni tanlaydi; tanlov seans davomida saqlanadi. Ikkita egri chiziq oʻzgarmaydi. Yopiq obyektlarni va allaqachon tutashgan ikki uchni rad etadi.

### REGION

Taxalluslari: `REG`. {{cmd:REGION}} yopiq obyektlarni mintaqalarga aylantiradi: birlashtirish, kesish va oʻlchash mumkin boʻlgan tekis maydonlar. Aylanalar, yopiq polichiziqlar, yopiq ellipslar yoki yopiq splaynlarni, yoki uchma-uchi tutashib halqa hosil qiladigan chiziqlar, yoylar va ochiq polichiziqlarni tanlang; har bir halqa bitta mintaqa boʻladi va undan kelib chiqqan obyektlarni almashtiradi. Yoylar yoy boʻlib qoladi; ellips va splaynlar qisqa toʻgʻri kesmalarga aylanadi. Yopiq boʻlmagan va halqa hosil qilmagan narsalar oʻz holicha qoladi, bu haqda necha dona ekanligi xabar qilinadi. Chizmada mintaqa nomsiz guruh sifatida birlashtirilgan bir yoki bir nechta yopiq polichiziqdir, shuning uchun bir marta bosish butun mintaqani tanlaydi va nusxa alohida mintaqa boʻladi; faylni ochadigan boshqa dasturlar yopiq polichiziqlarni koʻradi.

Chizmada mintaqalar boʻlganda, 2D yorliqdagi {{cmd:UNION}}, {{cmd:SUBTRACT}} va {{cmd:INTERSECT}} mintaqalar bilan ishlaydi: `UNION` tanlangan mintaqalarni bittaga birlashtiradi (bir-biridan ajralgan mintaqalar bir nechta konturli bitta mintaqaga aylanadi); `SUBTRACT` avval ayiriladigan mintaqalarni, keyin olib tashlanadigan mintaqalarni soʻraydi (teshik mintaqaning bir qismi boʻlib qoladi); `INTERSECT` ularning hammasi umumiy boʻlgan maydonni saqlaydi. Har biri natija maydonini xabar qiladi va bitta ortga qaytarish qadami. Hech narsa qolmasa yoki umumiy maydon boʻlmasa, rad etadi. 3D yorliqda va mintaqasiz chizmada bu buyruqlar avvalgidek jismlar bilan ishlaydi.

## Oʻzgartirish

### MTEXT

Taxalluslari: `MT`, `T`; yoki asboblar panelidagi {{ui:Paragraph}}. Kenglikka qarab oʻraladigan xatboshi matni, joyida yoziladi.

- `Birinchi burchakni koʻrsating`
- `Qarama-qarshi burchakni koʻrsating [Balandlik/Tekislash/Qator oraligʻi/Burilish/Kenglik]`: ikki burchak orasidagi kenglik matn oʻraladigan joy. `H` `Balandlikni koʻrsating` soʻraydi, `J` `Tekislashni kiriting [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Qator oraligʻi koeffitsientini kiriting (0,25 dan 4 gacha)`, `R` `Burilish burchagini koʻrsating`, `W` `Kenglikni kiriting (oʻramasiz uchun 0)` va ikkinchi burchakni oʻtkazib yuboradi.
- Keyin chizmada oyna ochiladi: yozing, yangi xatboshi uchun {{key:Enter}}, tugatish uchun {{key:Mod+Enter}} yoki tashqariga bosish, bekor qilish uchun {{key:Esc}}. Uning paneli balandlik, qatorlar oraligʻi, kenglik va tekislashni belgilaydi. Qarang: [Matn va yorliqlar qoʻshish](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Taxalluslari: `ED`, `DDEDIT`; yoki matnni ikki marta bosing. `Tahrirlanadigan matnni tanlang`, Enter bosilguncha takrorlanadi: har biri xuddi shu oynada ochiladi. Tanlangan yoki ikki marta bosilgan matndan boshlansa, faqat oʻsha matnni tahrirlaydi va tugaydi.

### ERASE

Taxalluslari: `E`, `DELETE`; yoki obyektlar tanlangan holda {{key:Delete}} tugmasini bosing.

- `Obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)

### MOVE

Taxalluslari: `M`.

- `Obyektlarni tanlang`
- `Asosiy nuqtani koʻrsating [Siljish]`, `Ikkinchi nuqtani koʻrsating`
- `D`: `Siljishni koʻrsating`, `dx,dy` shaklida yoziladi.

### COPY

Taxalluslari: `CO`, `CP`. Bergan nuqtalaringiz soniga qarab nusxalaydi.

`Massiv` ikkinchi nuqta soʻrovida bir qatorli massiv yaratadi: elementlar sonini kiriting (asl nusxa ham hisobga kiradi), keyin birinchi nusxa joylashadigan nuqtani; qolganlari bir xil oraliqda ketma-ket joylashadi. `Moslash` bu nuqtani oxirgi nusxa joyi qiladi, qolganlari orasiga teng taqsimlanadi.

- `Obyektlarni tanlang`
- `Asosiy nuqtani koʻrsating [Siljish]`
- `Ikkinchi nuqtani koʻrsating [Ortga qaytarish]`, Enter bosilguncha takrorlanadi. `U` oxirgi nusxani qaytaradi.

### ROTATE

Taxalluslari: `RO`.

- `Obyektlarni tanlang`, `Asosiy nuqtani koʻrsating`
- `Burilish burchagini koʻrsating <oxirgi burchak>`: gradusda, soat strelkasiga qarshi musbat; yoki unga qarab burish uchun nuqtani bosing.

### SCALE

Taxalluslari: `SC`.

- `Obyektlarni tanlang`, `Asosiy nuqtani koʻrsating`
- `Masshtab koeffitsientini koʻrsating`: `0,5` yoki `2` kabi koeffitsient kiriting. Bosilgan nuqta asosiy nuqtadan masofasini koeffitsient sifatida beradi.

### MIRROR

Taxalluslari: `MI`.

- `Obyektlarni tanlang`
- `Oynali chiziqning birinchi nuqtasini koʻrsating`, `Oynali chiziqning ikkinchi nuqtasini koʻrsating`
- `Manba obyektlarini oʻchiraymi? [Ha/Yoʻq] <Yoʻq>`

### ALIGN

Taxalluslari: `AL`; yoki {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Obyektlarni tanlang`
- `Birinchi manba nuqtasini koʻrsating`, `Birinchi manzil nuqtasini koʻrsating`
- `Ikkinchi manba nuqtasini koʻrsating (davom etish uchun Enter)`, `Ikkinchi manzil nuqtasini koʻrsating`
- `Uchinchi manba nuqtasini koʻrsating (davom etish uchun Enter)`, `Uchinchi manzil nuqtasini koʻrsating`
- Ikkita juft boʻlganda: `Obyektlarni tekislash nuqtalariga asosan masshtablaymizmi? [Ha/Yoʻq] <Yoʻq>`

Qarang: [Obyektlarni tekislash](topic:modify-objects#align-objects).

### ALIGNTO

- `Obyektlarni tanlang` (yoki tanlov), `Tekislash [Chap/Markaz/Oʻng/Yuqori/Oʻrta/Pastki] <Chap>`, `Qaysi biriga [Tanlov/Birinchi/Oxirgi/Nuqta] <Tanlov>`; `P` nuqtani soʻraydi. Tanlov qoladi.

### DISTRIBUTE

- `Obyektlarni tanlang` (kamida uchta), `Taqsimlash [Gorizontal/Vertikal] <Gorizontal>`, `Teng oraliqda joylashtirish [Markazlar/Oraliqlar] <Oraliqlar>`. Tashqi ikkitasi joyida qoladi; tanlov qoladi.

### ALIGNPANEL

Taxalluslari: `ALP`; yoki {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. ALIGNTO va DISTRIBUTE ni bosish orqali bajaruvchi panelni ochadi.

### LASER

Taxalluslari: `LASERCUT`; yoki {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Chizma ustida Lazer panelini ochadi: har bir qatlam nima qilishi (kesish, chizish, oʻyish, toʻldirish, rasm), koʻrish, saqlanadigan GRBL G-kodi, va Web Serial orqali ramkalash va yuborish. Qarang: [Chizmani lazerga yuborish](topic:laser-cutting).

### STRETCH

Taxalluslari: `S`; yoki {{ui:Stretch}}. `Choʻziladigan obyektlarni tanlang`: siljitish uchun uchlar ustida kesishuvchi oynalarni torting (yoki `C` yozing). `Asosiy nuqtani koʻrsating [Siljish]`, `Ikkinchi nuqtani koʻrsating`. Oynalar ichidagi nuqtalar siljiydi: chiziq uchlari, polichiziq uchlari (yoy kesmalari balandligini saqlaydi), oʻlcham nuqtalari; aylana, ellips, matn, nuqta va bloklar markazi yoki kiritish nuqtasi ichida boʻlsa, butunlay siljiydi. Buyruqdan oldin qilingan tanlov oʻzini yaratgan kesishuvchi oynalarni (va lassolarni) saqlaydi, shuning uchun ular xuddi shunday choʻziladi. Oynasiz obyektlar butunlay siljiydi.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Taxalluslari: `AR`; yoki {{ui:Array}}. `Obyektlarni tanlang`, keyin `Massiv turini kiriting [Toʻgʻri burchakli/Qutb] <Toʻgʻri burchakli>` (faqat ARRAY uchun).

- Toʻgʻri burchakli 4 ustun × 3 qator bilan boshlanadi, obyektlar oʻlchamining 1,5 baravar oraligʻida, oldindan koʻrinishda. `Variantni kiriting [Soni/Oraliq/Ustunlar/Qatorlar/eXit] <X>`: `COU` ustun va qatorlar sonini, `S` ustunlar va qatorlar orasidagi masofalarni soʻraydi (manfiysi chapga yoki pastga), `COL` va `R` har biri bir yoʻnalish uchun.
- Qutb `Massivning markaziy nuqtasini koʻrsating` soʻraydi, aylana boʻylab 6 elementdan boshlanadi, burilgan holda. `Variantni kiriting [Elementlar/Toʻldirish burchagi/Elementlarni burish/eXit] <X>`: `I` elementlar, `F` toʻldirish burchagi (+ soat strelkasiga qarshi, − soat strelkasi boʻyicha), `ROT` Ha yoki Yoʻq.
- {{key:Enter}} (eXit) nusxalarni oddiy obyekt sifatida yaratadi. Bitta ortga qaytarish qadami.
- `AS` (ASsociative) oddiy nusxalar va keyinroq tahrirlanadigan massiv oʻrtasida almashtiradi: bitta obyekt, uni keyin {{cmd:ARRAYEDIT}} bilan, dastaklari yoki Xossalarda oʻzgartirasiz. Tanlov eslab qolinadi ({{cmd:ARRAYASSOCIATIVITY}}); boshlanishda oddiy nusxalar.

### ARRAYPATH

Egri chiziq boʻylab nusxalaydi. `Obyektlarni tanlang`, keyin `Yoʻl egri chizigʻini tanlang`: chiziq, yoy, aylana, ellips, polichiziq yoki splayn (massivlanayotgan obyektlardan biri emas). Yoʻl obyektlarga yaqinroq uchidan boshlanadi va birinchi element obyektlarning oʻz joyida boʻladi.

- `Variantni kiriting [Usul/Elementlar/Oraliq/Tekislash/Tahrirlanadigan/eXit] <X>`, oldindan koʻrinish bilan. `M`: `Boʻlish` elementlarni butun yoʻl boʻylab teng taqsimlaydi, `Oʻlchash` har belgilangan masofada bittadan qoʻyadi. `I`: elementlar soni (Oʻlchash bilan 0 — sigʻadigancha degani; yoʻl oxiridan oshgan son sigʻadigan darajaga keltiriladi). `SP`: yoʻl boʻylab elementlar orasidagi masofa (Oʻlchashga oʻtkazadi). `AL`: Ha har bir elementni yoʻlga ergashtiradi, Yoʻq ularni tik qoldiradi.
- `AS` {{cmd:ARRAY}} dagidek. U yoqilgan boʻlsa, massiv yoʻl shaklining oʻz nusxasini saqlaydi: keyin yoʻl egri chizigʻini tahrirlash elementlarni siljitmaydi.
- Yoʻl egri chiziq boʻlmasa va bitta element boʻlsa, rad etadi.

### ARRAYEDIT

Tahrirlanadigan massivni oʻzgartiradi. `Massivni tanlang` (yoki avval tanlang). Massivning hozirgi holatini chiqaradi, keyin Enter bosilguncha soʻraydi:

- Toʻgʻri burchakli: `COL` ustunlar va ularning oraligʻi, `R` qatorlar va ularning oraligʻi, `A` ustunlar yoʻnalish burchagi.
- Qutb: `I` elementlar, `F` toʻldirish burchagi, `ROT` elementlarni burish Ha yoki Yoʻq.
- Yoʻl: `M` Boʻlish yoki Oʻlchash, `I` elementlar, `SP` oraliq, `AL` yoʻlga tekislash.
- `S` (Manba) massiv takrorlaydigan obyektlarni blok muharriri kabi alohida ochadi. Shu yerda chizing va tahrirlang; {{cmd:ARRAYCLOSE}} saqlaydi yoki bekor qiladi, va har bir element ergashadi.
- `REP` (REPlace): `Almashtiruvchi obyektlarni tanlang`, `Almashtiruvchi obyektlarning asosiy nuqtasini koʻrsating`, keyin almashtiriladigan elementlarni bosing, {{key:Enter}}. Bu elementlar oʻrniga almashtiruvchi koʻrsatiladi; almashtiruvchi obyektlar chizmadan chiqadi va massiv ichida yashaydi. `RES` (RESet) har bir elementda asl manba obyektlarini qayta koʻrsatadi.
- Har bir oʻzgarish bitta ortga qaytarish qadami. Oddiy nusxalar, oddiy blok havolasi va qulflangan qatlamdagi massivni rad etadi.

Bir xil raqamlar Xossalarda Massiv ostida; massivda dastaklar bor: asosiy nuqta uni siljitadi, ikkinchi elementdagi dastak oraliqni belgilaydi, oxirgi elementdan keyingi dastak sonni belgilaydi (qutbda: ikkinchi element elementlar sonini, oxirgi element toʻldirish burchagini). {{cmd:EXPLODE}} massivni yana oddiy nusxalarga aylantiradi.

### ARRAYCLOSE

Tugatadi {{cmd:ARRAYEDIT}} Manbasini: `Massiv manba obyektlaridagi oʻzgarishlarni saqlaymizmi? [Saqlash/Tashlab yuborish] <Saqlash>`. Hech qanday massiv manba obyektlari ochiq boʻlmasa, buni xabar qiladi. {{cmd:BCLOSE}} ham shunday qiladi.

### ARRAYASSOCIATIVITY

`Yangi qiymatni kiriting ARRAYASSOCIATIVITY uchun (1 = massivlar tahrirlanadigan boʻladi, 0 = oddiy nusxalar)`. {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR va {{cmd:ARRAYPATH}} boshlanadigan sozlamani belgilaydi; ularning `AS` varianti xuddi shu sozlamani oʻzgartiradi. Ushbu brauzerda eslab qolinadi.

### OFFSET

Taxalluslari: `O`. Chiziqlar, yoylar, aylanalar va polichiziqlar.

Polichiziq tashqariga siljiganda va uning toʻgʻri kesmalari burchakda ajralganda, {{cmd:OFFSETGAPTYPE}} boʻshliqning qanday yopilishini hal qiladi.

- `Siljish masofasini koʻrsating [Orqali] <oxirgi masofa yoki Orqali>`
- `Siljitish uchun obyektni tanlang`, keyin `Siljitish tomonidagi nuqtani koʻrsating` (yoki Orqali bilan, `Oʻtuvchi nuqtani koʻrsating`), Enter bosilguncha takrorlanadi.

### OFFSETGAPTYPE

- `Siljish burchak boʻshliqlari: 0 choʻzish, 1 yumaloqlash, 2 fasetka`: {{cmd:OFFSET}} polichiziqning tashqi burchaklaridagi boʻshliqlarni qanday yopishini belgilaydi. `0` kesmalarni uchrashguncha choʻzadi (boshlangʻich sozlama), `1` ularni eski burchak atrofida yoy bilan, `2` toʻgʻri kesish bilan birlashtiradi. Ichki burchaklar va yoy kesmalari taʼsirlanmaydi. Ushbu seans uchun saqlanadi.

### EXTRIM

{{cmd:EXTRIM}} chegara chizigʻining bir tomonidagi hamma narsani kesadi. Kesuvchi chegarani tanlang (chiziq, yoy, aylana, polichiziq, ellips, splayn yoki yordamchi chiziq), keyin tozalanadigan tomondagi nuqtani bosing: chegarani kesib oʻtadigan har bir chiziq, yoy, aylana, polichiziq va yordamchi chiziq oʻsha tomondagi qismini yoʻqotadi, u chegarada boshlanadi. Tomonni tanlayotganda, ketadigan boʻlaklar kursorga ergashadi. Yopiq chegara uchun tomonlar ichki va tashqi boʻladi. Faqat chegaraga tegib turgan obyektlar, va uni kesib oʻtgan matn, shtrixlash, splayn va ellipslar oʻz holicha qoladi. Bitta ortga qaytarish qadami.

### TRIMEXTENDMODE

- `TRIMEXTENDMODE uchun yangi qiymatni kiriting (1 Tez, 0 Standart)`: {{cmd:TRIM}} va {{cmd:EXTEND}} qanday boshlanishi. `1` Tez: har bir obyekt kesuvchi chegara yoki chegara boʻladi. `0` Standart: avval chegaralarni soʻraydi. LISP da `(setvar "TRIMEXTENDMODE" 0)` ham shunday.

### TRIM

Taxalluslari: `TR`. Avval `Joriy sozlamalar: Tez rejim (TRIMEXTENDMODE 1), chegaralar: Choʻzilmaydi, sudrash yoʻl chizadi` deb chiqaradi. Tez rejimda har bir koʻrinib turgan obyekt kesuvchi chegara boʻladi va uni hech narsa kesmaydigan obyekt oʻchiriladi; Standart rejimda avval `Kesuvchi chegaralarni tanlang (Enter = har bir obyekt)` soʻraydi va faqat ularda kesadi.

- `Kesish uchun obyektni tanlang yoki choʻzish uchun Shift bilan tanlang [Kesuvchi chegaralar/Toʻsiq/Kesishuvchi/Rejim/Chegara/Oʻchirish/Ortga qaytarish]`, takrorlanadi: olib tashlanadigan boʻlakni bosing (kursor uning ustida turganda kulrang va punktir boʻladi), bir nechta boʻlak orqali yoʻl torting (hammasi bitta qadamda ketadi), yoki ular orasida toʻsiq uchun ikki boʻsh joyni bosing. {{key:Shift}} oʻrniga choʻzadi. `T` kesuvchi chegaralarni tanlaydi (Standart rejim), `F` toʻsiq nuqtalarini soʻraydi, `C` ikki oyna burchagi (qisman ichida boʻlgan boʻlaklar ketadi), `O` `Kesish rejimi variantini kiriting [Tez/Standart]` soʻraydi, `E` `Choʻzish rejimini kiriting [Choʻzish/Choʻzmaslik]` (EDGEMODE) soʻraydi, `R` tanlangan obyektlarni oʻchiradi, `U` oxirgi tanlov yoki sudrashni bekor qiladi. Enter tugatadi. Qarang: [Kesish va choʻzish](topic:trim-and-extend).

- Shtrixlashni bosish uni kesadi: kesuvchi chegaralar shtrixlangan maydonni boʻladi va bosgan boʻlagingiz olib tashlanadi (oʻsha joyda chizilgan kontur qolmaydi). Shtrixlash oʻz shablonini yoki gradiyentini saqlaydi; chegarasiga bogʻlangan shtrixlash keyin bogʻlanmagan boʻladi, chunki u endi uni toʻldirmaydi. U joyda hech qanday kesuvchi chegara shtrixlashni boʻlmasa, bosish shtrixlashdan tashqarida boʻlsa, yoki hech narsa qolmasa (buning oʻrniga {{cmd:ERASE}} ishlating), buni xabar qiladi. Sudrab oʻtkazilgan yoʻl yoki toʻsiq shtrixlashni kesmaydi.

### EXTEND

Taxalluslari: `EX`. TRIM bilan teskari: `Choʻzish uchun obyektni tanlang yoki kesish uchun Shift bilan tanlang [Chegara chiziqlari/Toʻsiq/Kesishuvchi/Rejim/Chegara/Ortga qaytarish]`. Bosish eng yaqin uchni keyingi chegaragacha uzaytiradi; sudrab oʻtkazilgan yoʻl yoki toʻsiq kesib oʻtgan har bir obyektni uzaytiradi; {{key:Shift}} kesadi. `B` chegara chiziqlarini tanlaydi (Standart rejim). Rejim va Chegara TRIM bilan birgalikda.

### LINKVIEWS

Taxalluslari: `SYNCVIEWS`; yoki {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, yoki chizma varaqlaridagi bogʻlash belgisi. `Oynalar koʻrinishini bogʻlash [ON/OFF]` (Enter boshqa holatni oladi): yoqilgan boʻlsa, faol oynadagi siljish yoki kattalashtirish bir xil turdagi boʻshliqni koʻrsatuvchi har bir oynani ham siljitadi. Qarang: [Ekranni boʻlish](topic:split-screen).

### OPENIN3D

Taxalluslari yoʻq; yoki {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, bu yerda 3D modellashtirish ilovasi topshirilgan chizmani qabul qiladi. Uni u yerda yangi varaqda DWG sifatida ochadi (hech narsa yuklanmaydi). Brauzer varaqni bloklasa, buni xabar qiladi.

### LASSOMODE

`LASSOMODE uchun yangi qiymatni kiriting (1 = lasso, 0 = toʻrtburchak)`: boʻsh joyda bosib sudrash nimani chizishi. Sozlamalar › CadCraft › Tanlash uchun sudrash bilan bir xil. Qarang: [Lasso bilan tanlash](topic:lasso-selection).

### FILLET

Taxalluslari: `F`. Chiziqlar, yoylar, aylanalar va polichiziqlar. Avval `Joriy sozlamalar: Rejim = TRIM, Radius = 0` deb chiqaradi.

- `Birinchi obyektni tanlang [Ortga qaytarish/Polichiziq/Radius/Kesish/Bir nechta]`
  - `R` `Yumaloqlash radiusini koʻrsating <oxirgi>` soʻraydi. `T` `Kesish rejimi variantini kiriting [Kesish/Kesmaslik]` soʻraydi: Kesmaslik bilan obyektlar oʻz holicha qoladi va faqat yoy qoʻshiladi.
  - `M` Enter bosilguncha koʻproq burchaklar uchun buyruqni davom ettiradi; `U` buyruqdan chiqmasdan oxirgi burchakni bekor qiladi.
  - `P` `2D polichiziqni tanlang [Radius]` soʻraydi va ikki toʻgʻri kesma uchrashgan har bir burchakni yumaloqlaydi. Unda allaqachon boʻlgan yumaloqlashlar yangi radius bilan almashadi; radius 0 ularni olib tashlaydi. Tomonlari radius uchun juda qisqa boʻlgan burchaklar qoldiriladi va sanaladi.
- `Ikkinchi obyektni tanlang yoki burchakni qoʻllash uchun Shift bilan tanlang [Radius]`. Oʻtkir burchak uchun bosganingizda {{key:Shift}} ni ushlab turing, radiusdan qat'i nazar.

Saqlamoqchi boʻlgan qismda har bir obyektni bosing. Uchrashmaydigan ikki chiziq choʻziladi. Parallel ikki chiziq orasidagi boʻshliqda yarim aylana oladi, birinchi chiziqning sizning bosishingizga eng yaqin uchida. Aylana hech qachon kesilmaydi. Bitta polichiziqning yonma-yon ikki kesmasi yoyni polichiziq ichida oladi; polichiziq va boshqa obyekt, kesish polichiziqning birinchi yoki oxirgi kesmasiga tushsa ishlaydi.

### CHAMFER

Taxalluslari: `CHA`. Chiziqlar va polichiziqlarning toʻgʻri kesmalari. Avval joriy masofalarni (yoki uzunlik va burchakni) chiqaradi.

- `Birinchi chiziqni tanlang [Ortga qaytarish/Polichiziq/Masofa/Burchak/Kesish/Usul/Bir nechta]`
  - `D` `Birinchi fasetka masofasini koʻrsating <oxirgi>` va `Ikkinchi fasetka masofasini koʻrsating <birinchisi>` soʻraydi: birinchisi siz tanlagan birinchi chiziqdan, ikkinchisi boshqasidan kesiladi.
  - `A` `Birinchi chiziqdagi fasetka uzunligini koʻrsating` va `Birinchi chiziqdan fasetka burchagini koʻrsating` soʻraydi.
  - `E` (Usul) keyingi fasetka ikkitasidan qaysi birini ishlatishini tanlaydi. `T`, `M`, `U` va `P` {{cmd:FILLET}} dagidek ishlaydi.
- `Ikkinchi chiziqni tanlang yoki burchakni qoʻllash uchun Shift bilan tanlang [Masofa/Burchak/Usul]`. {{key:Shift}}+bosish oʻtkir burchak hosil qiladi.

Chiziqdan uzun masofa rad etiladi (`Masofa juda katta.`).

### BREAK va BREAKATPOINT

Taxalluslari: `BR`. `Obyektni tanlang` (bosgan joyingiz birinchi nuqta), `Ikkinchi uzish nuqtasini koʻrsating [Birinchi nuqta]`; `F` `Birinchi uzish nuqtasini koʻrsating` va `Ikkinchi uzish nuqtasini koʻrsating` soʻraydi. Ular orasidagi qism ketadi; aylanada birinchi nuqtadan soat strelkasiga qarshi. BREAKATPOINT `Uzish nuqtasini koʻrsating` soʻraydi va obyektni shu yerda ikkiga boʻladi (aylana emas).

### LENGTHEN

Taxalluslari: `LEN`. `Oʻlchash uchun obyektni tanlang [DElta/Foiz/Umumiy/DYnamic]`: tanlov `Joriy uzunlik` (va yoyning oʻralgan burchagi) chiqaradi va yana soʻraydi. `DE` `Delta uzunligini kiriting (manfiysi qisqartiradi) [Burchak]` soʻraydi, `P` `Foiz uzunligini kiriting`, `T` `Umumiy uzunlikni koʻrsating [Burchak]`, `DY` sudraydi. Keyin `Oʻzgartiriladigan obyektni tanlang [Ortga qaytarish]`, takrorlanadi: bosishga eng yaqin uchi siljiydi. Chiziqlar, yoylar va ochiq polichiziqlar.

### JOIN

Taxalluslari: `J`. `Birlashtiriladigan obyektlarni tanlang`. Uchma-uchi tutashgan chiziqlar, yoylar va ochiq polichiziqlar polichiziqqa aylanadi (zanjir yopilsa yopiq); bir chiziqdagi chiziqlar bitta chiziq boʻladi; bitta aylananing yoylari bitta yoy yoki aylana boʻladi. Tarix nechta obyekt birlashganini va nechtasi birlashmaganini aytadi.

### MATCHPROP

Taxalluslari: `MA`, `PAINTER`. `Manba obyektni tanlang`, keyin `Manzil obyektlarini tanlang [Sozlamalar]` va {{key:Enter}}. Qatlam va rangni nusxalaydi, bir xil turdagi obyektlar orasida matn balandligi va kengligi, oʻlcham qiymatlari yoki shtrixlash shablonini ham. `S` `Xossani yoqish yoki oʻchirish [Rang/Qatlam/Matn/Oʻlcham/Shtrixlash]` soʻraydi, Enter bosilguncha takrorlanadi; tanlov seans davomida eslab qolinadi.

### EXPLODE

Taxalluslari: `X`. Polichiziqlar chiziq va yoylarga, blok havolalari oʻz obyektlariga, oʻlchamlar chiziq, strelka va matnga aylanadi. Tahrirlanadigan massiv ({{cmd:ARRAYEDIT}}) oʻz obyektlarining oddiy nusxalariga aylanadi.

- `Obyektlarni tanlang`

### GROUP

Taxalluslari: `G`. {{cmd:GROUP}} tanlangan obyektlarga ularning umumiy nomini beradi. Obyektlarni tanlang, keyin nom kiriting (boʻshliqsiz; `?` guruhlar roʻyxatini chiqaradi; Enter nomsiz guruh yaratadi) va nomlangan guruh uchun ixtiyoriy tavsif. Shundan keyin ulardan biri ustida bosish yoki uni oladigan oyna ularning hammasini tanlaydi, shuning uchun ular birga siljiydi, nusxalanadi va oʻchiriladi; har bir obyekt hanuz oʻz obyekti. Obyekt bir nechta guruhda boʻlishi mumkin. Butun guruhning nusxasi yangi nomsiz guruh; bitta aʼzoning nusxasi guruhga qoʻshiladi. Guruhlar yaratilgan joyga (model yoki varaq) tegishli. DWG yoki DXF sifatida saqlanganda saqlanadi va CadCraft da qayta ochilganda ham; DXF 2000 fayllari ularni boshqa dasturlar uchun guruh obyektlari sifatida ham olib yuradi, boshqa dasturda yaratilgan guruhlar DXF yoki DWG ochilganda oʻqiladi.

### UNGROUP

{{cmd:UNGROUP}} guruhlarni ajratadi: guruhlarning obyektlarini tanlang (ularning har biri ajratiladi) yoki `Nom` yozib guruh nomini kiriting. Obyektlar chizmada qoladi. Bitta ortga qaytarish qadami guruhlarni qaytaradi.

### GROUPEDIT

{{cmd:GROUPEDIT}} bitta guruhni oʻzgartiradi. Uning bitta obyektini bosing yoki `Nom` va uning nomini kiriting; allaqachon tanlangan guruh oʻz holicha olinadi. Keyin: `Add` obyektlar (bir-bir bosiladi, guruh-guruh emas), `Remove` obyektlar, guruhni `REName` qilish, uning `Description` ni oʻzgartirish yoki `Selectable` ni belgilash (bir obyektni bosish butun guruhni tanlaydimi). `eXit` yoki Enter tugatadi. Obyekti qolmagan guruh yoʻqoladi.

### PICKSTYLE

- `Guruh tanlovi: 0 bosish bitta obyektni tanlaydi, 1 butun guruhini`: `1` (boshlangʻich sozlama) bilan guruhlangan obyektni bosish yoki oyna uning butun guruhini tanlaydi; `0` bilan yakka obyektlar, shuning uchun bitta aʼzoni tahrirlash mumkin. Ushbu seans uchun saqlanadi.

## Clipboard

CadCraft ning oʻz buferi: chizma ichida, chizmalar orasida va ushbu brauzerdagi CadCraft varaqlari orasida ishlaydi. Qarang: [Nusxalash, qoʻyish va takrorlash](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, yoki {{ui:Edit}} guruhidagi {{ui:Copy}}. Obyektlarni ularning foydalanadigan bloklari va qatlamlari bilan buferga nusxalaydi. Obyektlar tanlangan holda qoladi.

- `Nusxalash uchun obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)

### CUTCLIP

{{key:Mod+X}}, yoki {{ui:More}} menyusidagi {{ui:Cut}}. Obyektlarni buferga nusxalaydi, keyin ularni oʻchiradi (bitta ortga qaytarish qadami).

- `Kesish uchun obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)

### COPYBASE

Obyektlarni siz tanlagan asosiy nuqta bilan buferga nusxalaydi; qoʻyganda shu nuqta joylashadi.

- `Asosiy nuqtani koʻrsating`
- `Nusxalash uchun obyektlarni tanlang`

### PASTECLIP

{{key:Mod+V}}, yoki {{ui:Edit}} guruhidagi {{ui:Paste}}. Nusxa kursorga ergashadi, oʻz chegarasining pastki chap burchagidan (yoki markazidan, yoki `COPYBASE` nuqtasidan; qarang: [CadCraft sozlamalari](topic:settings)) osilgan holda.

- `Kiritish nuqtasini koʻrsating`

Qoʻyilgan obyektlar tanlangan boʻladi. Chizmada bir xil nomli blok allaqachon boʻlsa, u shu chizmadagi taʼrifni saqlaydi.

MarkupCraft da nusxalangan maydon CadCraft nusxasidan yangiroq boʻlsa (va 6 soatdan kam oldin boʻlsa), {{key:Mod+V}} va `PASTECLIP` oʻrniga shu maydonni qoʻyadi: qarang `PASTEAREA`.

### PASTEAREA

Taxalluslari: `PAREA`. {{ui:More}} menyusidagi {{ui:Paste a copied area}}. MarkupCraft da {{ui:Copy area}} bilan nusxalangan maydonni haqiqiy oʻlchamda rasm sifatida qoʻyadi. Qarang: [Chizmadagi rasmlar](topic:pictures).

- `Nusxalangan maydonning pastki chap burchagini koʻrsating`
- `Qogʻoz oʻlchamini masshtablang (1:100 varaq uchun 100; Nuqtalar: unda ikki nuqta va ularning haqiqiy masofasi) [Nuqtalar] <1>` (faqat varaqda chizma masshtabi boʻlmagan boʻlsa): son, qogʻoz oʻlchami uchun {{key:Enter}}, yoki `P`, keyin `Qoʻyilgan maydondagi birinchi nuqta`, `Qoʻyilgan maydondagi ikkinchi nuqta` va ularning haqiqiy masofasi.

### PASTEORIG

{{key:Mod+Shift+V}}, yoki {{ui:More}} menyusidagi {{ui:Paste in place}}. Obyektlar nusxalangan koordinatalarga qoʻyiladi. Hech narsa soʻramaydi.

### DUPLICATE

Taxalluslari: `DUP`. {{key:Mod+D}}, yoki {{ui:More}} menyusidagi {{ui:Duplicate and move}}. Obyektlarning nusxasi oʻz turgan joyidan kursor bilan siljiydi; {{key:Esc}} hech narsa qoldirmaydi. Buferdan foydalanmaydi.

- `Takrorlanadigan obyektlarni tanlang` (obyektlar allaqachon tanlangan boʻlsa oʻtkazib yuboriladi)
- `Nusxa qayerga borishini koʻrsating (Esc hech narsa qoldirmaydi)`: bosing, nuqta kiriting, `@dx,dy` (kursor turgan joydan), yoki kursorga qarab masofa.

### SELECT

`Obyektlarni tanlang` deb soʻraydi (quyidagi har bir variant bilan) va tanlaganingizni keyingi buyruq uchun, yoki keyinroq `P` uchun tanlangan holda qoldiradi.

### QSELECT

Taxalluslari: `QS`. Brauzerda {{ui:Quick select}} dialogi (qarang: [Obyektlarni tanlash](topic:select-objects#select-by-a-rule-quick-select)). Usiz buyruq satri `Obyekt turini kiriting`, `Xossani kiriting`, `Operatorni kiriting [=/<>/>/</*/Hammasini tanlash] <=>` va `Qiymatni kiriting` soʻraydi. Mos kelganlar tanlov boʻladi.

### SELECTSIMILAR

Taxalluslari: `SIM`. `Obyektlarni tanlang [SEttings]` (yoki joriy tanlov): bir xil qatlam va rangga ega (va blok nomi, shtrixlash shabloni) bir xil turdagi har bir obyektni tanlaydi. `SE` `Xossani yoqish yoki oʻchirish [LAyer/COlor/NAme/PAttern/HEight]` soʻraydi, Enter bosilguncha takrorlanadi.

### FIND

Taxalluslari yoʻq; yoki {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. Brauzerda {{ui:Find and replace}} dialogi (qarang: [Matn va yorliqlar qoʻshish](topic:text#find-and-replace-words)). Usiz: `Topiladigan matnni kiriting`, keyin `Almashtiruvchi matnni kiriting (Enter: topilganni tanlash)`. Matn, atribut qiymatlari va oʻlcham matnidan qidiradi, ochiq varaqda yoki tanlovda.

### SELECTALL va DESELECT

`SELECTALL` (taxallus `AI_SELALL`, {{key:Mod+A}}) ochiq varaqda tahrirlanadigan har bir obyektni tanlaydi. `DESELECT` (taxalluslari `AI_DESELECT`, `SELECTNONE`; yoki {{key:Esc}}) tanlovni tozalaydi.

## Oʻlchamlar

### DIMLINEAR

Taxalluslari: `DLI`, `DIMLIN`. Gorizontal yoki vertikal masofa.

- `Birinchi choʻzish chizigʻi boshlanishini koʻrsating [Obyektni tanlash]` (Enter yoki `S`: `Oʻlchanadigan obyektni tanlang`, keyin chiziq, yoy, aylana yoki polichiziq kesmasini bosing)
- `Ikkinchi choʻzish chizigʻi boshlanishini koʻrsating`
- `Oʻlchov chizigʻi joyini koʻrsating [Matn/Gorizontal/Vertikal/Burilgan]`. `T` matn soʻraydi (`<>` oʻlchangan qiymat), `H` va `V` yoʻnalishni belgilaydi, `R` `Oʻlchov chizigʻining burchagini koʻrsating <0>` soʻraydi.

### DIMALIGNED

Taxalluslari: `DAL`, `DIMALI`. Ikki nuqta orasidagi haqiqiy masofa.

- Boshlanish nuqtalari {{cmd:DIMLINEAR}} dagidek, keyin `Oʻlchov chizigʻi joyini koʻrsating [Matn]`.

### DIMANGULAR

Taxalluslari: `DAN`, `DIMANG`.

- `Yoy, aylana yoki chiziqni tanlang, yoki uchi uchun Enter`
- Yoy: uning burchagi. Aylana: `Ikkinchi burchak oxirgi nuqtasini koʻrsating`. Chiziq: `Ikkinchi chiziqni tanlang`. Enter: `Burchak uchini koʻrsating`, `Birinchi burchak oxirgi nuqtasini koʻrsating`, `Ikkinchi burchak oxirgi nuqtasini koʻrsating`.
- `Oʻlchov chizigʻi joyini koʻrsating [Matn]`: oʻlchash uchun burchak ichini bosing.

### DIMRADIUS va DIMDIAMETER

Taxalluslari: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Yoy yoki aylanani tanlang`, keyin `Oʻlchov chizigʻi joyini koʻrsating [Matn]`.

### DIMCONTINUE

Taxalluslari: `DCO`, `DIMCONT`. Oxirgi chiziqli yoki tekislangan oʻlchamdan davom etadi (yoki `Chiziqli yoki tekislangan oʻlchamni tanlang` soʻraydi).

- `Ikkinchi choʻzish chizigʻi boshlanishini koʻrsating [Ortga qaytarish]`, Enter bosilguncha takrorlanadi.

### DIMBASELINE

Taxalluslari: `DBA`, `DIMBASE`. {{cmd:DIMCONTINUE}} kabi, lekin har bir oʻlcham birinchi boshlanish nuqtasidan boshlanadi va yanada tashqariga joylashtiriladi.

### DIMORDINATE

Taxalluslari: `DOR`, `DIMORD`. `Xususiyat joyini koʻrsating`, keyin `Yetakchi uchi nuqtasini koʻrsating [Xdatum/Ydatum/Matn]`. Xususiyat UCS boshidan X yoki Y boʻylab qanchalik uzoqligini yetakchida yozadi: asosan yuqoriga yoki pastga yurgan yetakchi X ni, yon tomonga yurgan Y ni oʻqiydi; `Xdatum` va `Ydatum` buni belgilaydi. Avval boshni {{cmd:UCS}} bilan belgilang (usiz u chizmaning 0,0 nuqtasi). Dastaklar xususiyatni, boshni va yetakchi uchini siljitadi, qiymat ergashadi. DWG va DXF da haqiqiy ordinata oʻlchami sifatida saqlanadi. Yetakchi uchi xususiyatning oʻzida boʻlsa rad etadi.

### DIMARC

Taxalluslari: `DAR`. `Yoy yoki polichiziq yoy kesmasini tanlang`, keyin `Yoy uzunligi oʻlchamining joyini koʻrsating [Matn]`. Yoy boʻylab oʻlchaydi (vatar boʻylab emas) va qiymat oldiga yoy belgisini yozadi. To'liq aylana, chiziq yoki toʻgʻri polichiziq kesmasini rad etadi. DWG uni yoy uzunligi oʻlchami sifatida saqlaydi; DXF uni matni uzunlik boʻlgan burchakli oʻlcham sifatida saqlaydi, CadCraft uni yana yoy uzunligi oʻlchami sifatida ochadi.

### DIMJOGGED

Taxalluslari: `DJO`, `JOG`. `Yoy yoki aylanani tanlang`, `Markaz joyini almashtirishni koʻrsating`, `Siljish joyini koʻrsating`. Markazi uzoqda yoki varaqdan tashqarida boʻlgan egri chiziq uchun radius oʻlchami: oʻlchov chizigʻi markazdan emas, siz bergan nuqtadan boshlanadi va unda siljish bor, lekin haqiqiy radiusni yozadi. DWG uni siljigan radius oʻlchami sifatida saqlaydi; DXF uni radius oʻlchami sifatida saqlaydi, CadCraft uni yana siljigan holda ochadi.

### DIMJOGLINE

Taxalluslari: `DJL`. `Siljish qoʻshish uchun oʻlchamni tanlang [Olib tashlash]`, keyin `Siljish joyini koʻrsating (yoki Enter bosing)`. Chiziqli yoki tekislangan oʻlchamning chizigʻiga siljish belgisini qoʻyadi, masofa masshtabda chizilmaganini koʻrsatish uchun; qiymat oʻzgarmaydi. `Olib tashlash` uni yechadi. Boshqa turdagi oʻlchamlarni rad etadi.

### QDIM

Taxalluslari yoʻq. `Oʻlchanadigan geometriyani tanlang`, keyin `Oʻlchov chizigʻi holatini koʻrsating [Uzluksiz/Shaxmat/Asos/Ordinata/Radius/Diametr/datumPoint]`. Bir qadamda bir nechta obyektni oʻlchaydi: chiziq va polichiziq kesmalarining uchlaridan, aylana va yoylarning markazlaridan, nuqtalar va blok havolalaridan. Obyektlardan yuqorida yoki pastda joylashgan holat koʻndalang oʻlchaydi, yonida joylashgan holat tik oʻlchaydi. `Uzluksiz` nuqtalarni zanjirlaydi, `Asos` hammasini birinchisidan oʻlchaydi, `Shaxmat` juftliklarni oʻrtadan tashqariga joylashtiradi, `Ordinata` har bir nuqtaga uning asosdan masofasini beradi (`datumPoint` yangisini tanlaydi), `Radius` va `Diametr` tanlangan har bir aylana va yoyni oʻlchaydi. Rejim eslab qolinadi. Hammasi bitta ortga qaytarish qadami. Ikkitadan kam nuqta boʻlsa yoki Radius va Diametr uchun yoy yoki aylana boʻlmasa, buni xabar qiladi.

### DIMBREAK

Taxalluslari: `DBREAK`. `Uzilish qoʻshish yoki olib tashlash uchun oʻlchamlarni tanlang`, keyin `Boshqa obyektlar kesishgan joyda uzing [Avto/Qoʻlda/Olib tashlash] <Avto>`. `Avto` boshqa obyekt ularni kesgan har joyda oʻlchov va choʻzish chiziqlarida boʻshliq qoldiradi va bu obyektlar yoki oʻlchov siljiganda boʻshliqlarni qayta hisoblaydi. `Qoʻlda` (bitta oʻlchamda) ikki nuqta soʻraydi va ular orasida boʻshliq qoldiradi. `Olib tashlash` barcha boʻshliqlarni oʻchiradi. Boʻshliq oʻlchamning matn balandligidan 1,5 baravar.

### DIMSPACE

Taxalluslari yoʻq. `Asosiy oʻlchamni tanlang`, `Oraliq qilinadigan oʻlchamlarni tanlang`, `Oraliq qiymatini yoki Avtoni kiriting <Avto>`. Parallel chiziqli va tekislangan oʻlchamlarning (yoki bir uchdan chiqqan burchakli oʻlchamlarning) oʻlchov chiziqlarini bir xil masofada joylashtiradi, asosiy oʻlchamdan hisoblab, har biri oʻz tomonida. `0` ularni asosiy bilan tekislaydi; `Avto` asosiy oʻlchamning matn balandligidan ikki baravar. Asosiyga parallel boʻlmagan oʻlchamlarga tegilmaydi.

### DIMINSPECT

Taxalluslari yoʻq. `Oʻlchamlarni tanlang`, `Tekshirish ramkasi shakli [Doira/Burchakli/Yoʻq/olib tashlash] <Doira>`, `Yorliqni kiriting`, `Tekshirish darajasini kiriting <100%>`. Qiymat atrofida ramka chizadi, oldida yorliq va keyin tekshirish darajasi bilan. `olib tashlash` ramkani oʻchiradi. Tolerantlik matni qiymat bilan qoladi.

### DIMOVERRIDE

Taxalluslari: `DOV`, `DIMOVER`. `Bekor qilinadigan oʻlchov oʻzgaruvchisi nomini kiriting yoki Tozalash`, `… uchun yangi qiymatni kiriting`, Enter bosilguncha yana, keyin `Oʻlchamlarni tanlang`. Bu sozlamalarni faqat tanlangan oʻlchamlarda oʻzgartiradi; oʻlcham uslubi oʻzgarmaydi. Son yoki kalit boʻlgan oʻzgaruvchilarni oladi (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Tozalash` tanlangan oʻlchamlarni ularning uslubiga qaytaradi. Bunday oʻzgaruvchi boʻlmagan nomni va qabul qila olmaydigan qiymatni rad etadi.

### DIMREASSOCIATE

Taxalluslari: `DRE`, `DIMREASSOC`. `Oʻlchamlarni tanlang`, keyin har biri uchun uning choʻzish chizigʻi boshlanishlari (`Obyektdagi birinchi choʻzish chizigʻi boshlanishini koʻrsating`: chiziq uchi yoki oʻrtasi, polichiziq burchagi, markazga tutish; Enter shu nuqtani erkin qoldiradi), yoki radius, diametr, siljigan radius yoki yoy uzunligi oʻlchami uchun `Yoy yoki aylanani tanlang`. Oʻlcham keyin shu obyektlarga bogʻlanadi: ular siljiganda yoki oʻlchami oʻzgarganda, u bir xil ortga qaytarish qadamida ergashadi va qayta oʻlchaydi. Bogʻlangan nuqtani qoʻlda siljitish yoki obyektni oʻchirish bogʻlanishni tugatadi. Bogʻlanish DWG va DXF 2000 da CadCraft ning oʻz maʼlumoti sifatida saqlanadi; boshqa dasturlar oddiy oʻlchamni koʻradi.

### DIMDISASSOCIATE

Taxalluslari: `DDA`, `DIMDISASSOC`. `Oʻlchamlarni tanlang`. Ular bogʻlangan obyektlardan ozod qiladi; hech narsa siljimaydi.

### CENTERMARK

Taxalluslari: `CM`, `DIMCENTER`, `DCE`. `Markaz belgisi qoʻshish uchun aylana yoki yoyni tanlang`, Enter bosilguncha yana. Markazda xoch va egri chiziqdan biroz tashqariga qadar toʻrtta markaz chizigʻi chizadi (chiziq turi CENTER), joriy qatlamda oddiy chiziqlar sifatida; joriy oʻlcham sozlamalarining strelka oʻlchami va umumiy masshtabidan oʻlchami olinadi, UCS bilan aylantiriladi. Aylana siljisa, ergashmaydi.

### CENTERLINE

Taxalluslari: `CL`. `Birinchi chiziqni tanlang`, `Ikkinchi chiziqni tanlang`. Ikki chiziq orasida oʻrtada chiziq chizadi (kesishsa bissektrisa boʻylab), ular uzunligidan biroz uzunroq, CENTER chiziq turida. Oddiy chiziq: ikki chiziqni kuzatmaydi.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Taxalluslari yoʻq. Har biri `… uchun yangi qiymatni kiriting <joriy>` soʻraydi va shu oʻlchamni **yangi** oʻlchamlar uchun belgilaydi: umumiy masshtab, matn balandligi, strelka oʻlchami, oʻnli kasr raqamlari (8 gacha), matn atrofidagi boʻshliq, oʻlchov chizigʻidan tashqariga choʻzish, boshlangʻichdan siljish. Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings).

### DIMLUNIT

Oʻlcham sozlamasi: faqat yangi oʻlchamlarning formati (1 ilmiy, 2 oʻnli, 3 muhandislik, 4 arxitektura, 5 kasr).

### DIMSTYLE va -DIMSTYLE

Taxalluslari: `DST`, `DDIM`, `D`. Oʻlcham uslubi boshqaruvchisi: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. Buyruq satridagi `-DIMSTYLE`: `Oʻlcham uslubi [Tiklash/Saqlash/Oʻchirish/Qoʻllash/Solishtirish/reName/List]`. Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings#named-dimension-styles).

### DIMEDIT va DIMTEDIT

`DIMEDIT` (`DED`): `Oʻlcham tahriri [Bosh/Yangi/Burish/Qiya] <Bosh>`, keyin oʻlchamlar (yoki allaqachon tanlanganlar). Yangi matn soʻraydi (`<>` = oʻlchov); Burish burchak soʻraydi (0 matnni qaytaradi); Qiya choʻzish chiziqlari burchagini X oʻqidan soʻraydi (Enter = yoʻq; faqat chiziqli va tekislangan oʻlchamlar). `DIMTEDIT` (`DIMTED`): `Oʻlcham matni [Chap/Oʻng/Markaz/Bosh/Burchak] <Markaz>`. Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Taxalluslari: `DTU`. `Yangi oʻlchamlar matnidagi birliklar [Chizma birliklari/mm/cm/m/km]`, yoki oʻlchamlar tanlangan boʻlsa `Tanlangan oʻlchamlar matnidagi birliklar`. Oʻlchangan uzunlikni shu birlikda yozadi, birlik keyidan yoziladi (DIMLFAC va DIMPOST qoʻshimchasi); `D` chizma birliklariga qaytaradi. Qarang: [Oʻlchamlar mm, cm, m yoki km da](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Taxalluslari: `RC`. `Yoy uzunligi: … Turi: …` chiqaradi, keyin `Birinchi nuqtani koʻrsating [Yoy uzunligi/Obyekt/Toʻrtburchakli/Koʻpburchakli/Erkin]`. Toʻrtburchakli `Qarama-qarshi burchakni koʻrsating` soʻraydi; Koʻpburchakli `Keyingi nuqtani koʻrsating (Enter bulutni yopadi) [Ortga qaytarish]`; Erkin bosish yoki {{key:Enter}} gacha kursorga ergashadi; `O` `Obyektni tanlang` va `Teskari yoʻnalish? [Ha/Yoʻq] <Yoʻq>` soʻraydi va obyektni bulutga aylantiradi. `A` `Har bir yoyning uzunligini kiriting` soʻraydi. `R`, `P` va `F` keyingi bulut turini tanlaydi. Natija yoylardan iborat yopiq polichiziq.

### MLEADER

Taxalluslari: `MLD`; yoki {{ui:Leader}}. `Yetakchi strelkasi joyini koʻrsating [Strelka oʻlchami/Qoʻnish masofasi/Blok]`, `Yetakchi qoʻnish joyini koʻrsating`, keyin matn joyida oynada (yoki undan boʻlmasa, `Matnni kiriting (boʻsh qator tugatadi)`). `Blok` avval blok nomini soʻraydi va koʻp yetakchi matn oʻrniga shu blokni koʻrsatadi. Qoʻshimcha yetakchi chiziqlar: {{cmd:MLEADEREDIT}}. DWG da haqiqiy koʻp yetakchi sifatida saqlanadi; DXF u chizgan chiziqlar, strelka va matnni saqlaydi.

### MLEADEREDIT

Taxalluslari: `MLE`. `Koʻp yetakchini tanlang`, keyin `Yetakchi strelkasi joyini koʻrsating [Yetakchilarni olib tashlash/Blok mazmuni/Matn mazmuni]`: har bir nuqta yangi strelkadan bir xil qoʻnishga yetakchi chiziq qoʻshadi, Enter bosilguncha. `Yetakchilarni olib tashlash` keyin bosgan yetakchi chiziqni olib tashlaydi (koʻp yetakchi kamida bittasini saqlaydi). `Blok mazmuni` blok nomini soʻraydi va matn oʻrniga shu blokni koʻrsatadi (uning atributlari soʻraladi); `Matn mazmuni` matnni qaytaradi. Har bir yetakchi chiziq oʻz dastagiga ega. DWG da har bir yetakchi chiziq va blok bitta koʻp yetakchida saqlanadi.

### MLEADERALIGN

Taxalluslari: `MLA`. `Koʻp yetakchilarni tanlang`, keyin `Tekislash uchun koʻp yetakchini tanlang [Taqsimlash/Oraliq/Joriy oraliqni ishlatish]` va `Yoʻnalishni koʻrsating`. Boshqa koʻp yetakchilarning qoʻnish joylarini (va ularning matni yoki blokini) tanlanganning qoʻnish joyi orqali oʻsha yoʻnalishdagi chiziqqa koʻchiradi; strelkalar qaragan joyida qoladi. `Oraliq` ularni ham teng masofada qoʻyadi; `Taqsimlash` ikki nuqta soʻraydi va ularni orasiga teng taqsimlaydi. Kamida ikkita koʻp yetakchi kerak.

### MLEADERCOLLECT

Taxalluslari: `MLC`. `Koʻp yetakchilarni tanlang`, keyin `Yigʻilgan koʻp yetakchi joyini koʻrsating [Vertikal/Gorizontal]` (Enter birinchisining joyini saqlaydi). Bir nechtasidan bitta koʻp yetakchi yasaydi: blok mazmuni yonma-yon yoki bir-birining ostida turadigan barcha bloklarni oladigan yangi blokka tushadi; matn mazmuni har bir qator uchun chiziqli bitta izohga aylanadi. Birinchi koʻp yetakchi oʻz yetakchi chiziqlarini saqlaydi; boshqalari olib tashlanadi. Matn va blok mazmunining aralashmasini rad etadi.

### TABLE

Taxalluslari: `TB`; yoki {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Jadval yaratadi: boshqa har qanday obyekt kabi siljitiladigan, nusxalanadigan, aylantiriladigan, masshtablanadigan va chop etiladigan bitta obyekt, uning katakchalari maʼlumot sifatida saqlanadi.

- `Maʼlumot qatorlari soni yoki [Qoʻyish/Fayl/Uslub] <3>`, keyin `Ustunlar soni <3>`, `Matn balandligi` va `Jadvalning yuqori chap burchagi`. Jadvalda sarlavha qatori (bitta birlashtirilgan katakcha) va maʼlumot qatorlaridan yuqorida ustun sarlavhasi qatori boʻladi.
- `P`: buferdagi elektron jadval katakchalaridan jadval (katakchalar orasida tab bilan matn). Buferda shunday katakchalar boʻlganda {{key:Ctrl+V}} bosish ham xuddi shunday qiladi, agar CadCraft ning oʻz nusxasi yangiroq boʻlmasa (yoki CadCraft farqlay olmasa: u holda oʻz nusxasini qoʻyadi va buni xabar qiladi). `F`: `.csv` yoki tab bilan ajratilgan fayldan jadval. Birinchi qator sarlavha qatori boʻladi; ustun kengliklari matnga moslashadi.
- `S`: bu jadval uchun jadval uslubini tanlang (qarang: {{cmd:TABLESTYLE}}).
- Qator yoki ustun soni butun son boʻlmasa, va katakchalar soni jadvalga sigʻmasa (2 000 qator, 200 ustun, 40 000 katakcha), rad etadi.
- {{cmd:EXPLODE}} jadvalni chiziq va matnga aylantiradi. DWG sifatida saqlanganda jadval boshqa dasturlar tahrirlay oladigan haqiqiy jadval obyekti boʻladi; DXF sifatida saqlanganda uni chizadigan blok boʻladi va CadCraft uni yana jadval sifatida ochadi.

### TABLEDIT

Taxalluslari: `TABLEEDIT`, `TABEDIT`; yoki katakchani ikki marta bosing. Jadvalni tahrirlaydi.

- `Yozish uchun katakchani tanlang (tugatish uchun Enter) yoki [Qator/Ustun/Oʻlcham/Birlashtirish/Ajratish/Tekislash/Balandlik/Turi/CLear]`. Katakchani bosing, yoki jadval tanlangan holda uning nomini yozing (`B3`: B ustun, 3-qator; sarlavha qatori 1-qator). Brauzerda katakcha ustida oyna ochiladi: {{key:Enter}} matnni saqlaydi, {{key:Tab}} keyingi katakchaga oʻtadi, {{key:Alt+Enter}} yangi qator boshlaydi, {{key:Esc}} katakchani avvalgidek qoldiradi.
- `=` bilan boshlangan matn formula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, `+ - * / ^`, qavslar va `sqrt` va `round` kabi funksiyalar bilan. Katakcha qiymatni koʻrsatadi; oʻz katakchasini nomlagan, jadvaldan tashqari katakchani yoki raqamsiz katakchani nomlagan formula `####` koʻrsatadi va buyruq satri sababini aytadi.
- `R` / `C`: belgilangan katakchada `Qoʻshish` yoki `Oʻchirish` qatorlar yoki ustunlar (qancha, va yuqoriga yoki pastga, chapga yoki oʻngga). Formulalar nomlagan katakchalarga ergashadi.
- `S`: ustun kengligi va qator balandligi. Qator matni talab qilganidan past boʻlmaydi. Tanlangan jadvalda har bir ustun va qator chetida ham dastak bor.
- `M`: bir tanlangan katakchadan ikkinchisigacha birlashtirish; `U`: ajratish. `A`: tekislash (`TL` yuqori chap … `MC` markaz oʻrta … `BR` pastki oʻng). `H`: bu katakchaning oʻz matn balandligi (0 = uslubniki). `K`: qatorni sarlavha, ustun sarlavhasi yoki maʼlumot qatori qilish. `CL`: katakchani boʻshatish.
- Qulflangan qatlamdagi jadvalni, barcha qator yoki ustunlarni oʻchirishni va boshqa birlashtirilgan katakchani ikkiga boʻladigan birlashtirishni rad etadi.

### TABLESTYLE

Taxalluslari: `TS`. Har bir uslubdan nechta jadval foydalanishini koʻrsatib jadval uslublari roʻyxatini chiqaradi, keyin `Jadval uslubi: [Yangi/Belgilash/Tahrirlash/Oʻchirish/Qoʻllash]`.

### TABLEEXPORT

Jadval koʻrsatgan narsani CSV fayl sifatida saqlaydi (formula oʻz qiymati sifatida). `Jadvalni tanlang`, yoki avval bitta tanlang. `=`, `+`, `-` yoki `@` bilan boshlangan matn katakchalari oldiga `'` qoʻyiladi, elektron jadval ularni ishga tushirmasin.

### TABLEPASTE

Taxalluslari: `PASTETABLE`. Buferdagi elektron jadval katakchalaridan jadval yaratadi, keyin uning yuqori chap burchagini soʻraydi. {{cmd:TABLE}} › `Paste` bilan bir xil.

### DATALINK

Taxalluslari: `DL`. `Maʼlumot bogʻlanishi: [Yangi/Roʻyxat/Olib tashlash] <Yangi>`. `N` CSV fayl soʻraydi, undan jadval joylashtiradi va fayl nomini eslab qoladi; `L` bogʻlanishlarni fayl, hajm, oʻqilgan vaqt va nechta jadval ishlatayotganini bilan roʻyxatlaydi; `R` bogʻlanishni olib tashlaydi (uning jadvallari oddiy jadval boʻlib qoladi).

### DATALINKUPDATE

Taxalluslari: `DLU`. Maʼlumot bogʻlanishining faylini qayta oʻqiydi va unga bogʻlangan jadvallarni qayta toʻldiradi (qatorlar va ustunlar qoʻshiladi yoki oʻchiriladi). Brauzer faylni oʻzi ocholmaydi, shuning uchun faylni qayta tanlashni soʻraydi. Bir nechta bogʻlanish boʻlsa, qaysi biri ekanini soʻraydi.

### FIELD

Chizmaga maydon qoʻyadi: oʻzi hisoblanadigan matn. `Maydon: [Sana/Fayl nomi/Varaq/Xossa/Obyekt/Ifoda/Kod] <Sana>`:

- `D`: hozir yoki saqlangan, yaratilgan yoki chop etilgan sana, va format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: fayl nomi, kengaytmasi bilan yoki kengaytmasisiz. `S`: varaq raqami, uning sarlavhasi yoki nechta varaq borligi. `P`: nomi boʻyicha chizma xossasi (qarang: {{cmd:DWGPROPS}}). `O`: obyektni bosing, keyin nimani oʻqishni (maydon, uzunlik, perimetr, radius, diametr, qatlam, nom, x, y, matn, burilish, rang) va kasr raqamlarini. `E`: formula. `C`: kodlari oʻz holicha yozilgan matn, masalan `Varaq %<sheetnumber>% / %<sheetcount>%`.
- Keyin `Qoʻyish uchun matn, jadval katakchasi yoki atributli blokni tanlang (Enter: yangi matn)`: tanlangan matnga maydon oʻz mazmuniga qoʻshiladi; jadval katakchasi ham shunday; blok havolasi qaysi atributligini soʻraydi; {{key:Enter}} yangi matn uchun balandlik va nuqta soʻraydi.
- Ekranda maydonning fon rangi kulrang; chop etish va PDF da hech qachon boʻlmaydi. Maydon matnini qoʻlda yozish maydonni tugatadi. Hisoblanmaydigan maydon `####` koʻrsatadi.
- Obyektning maydoni CadCraft obyektlarda saqlaydigan kalit orqali obyektni topadi (Sozlamalar › CadCraft › Birlashtirishga qulay fayllar); kalitlar oʻchiq boʻlsa rad etadi.

### UPDATEFIELD

Taxalluslari: `UPDATEFIELDS`. `Yangilanadigan maydonli obyektlarni tanlang (Enter: har bir maydon) yoki [Sozlamalar]`. `S` maydonlar qachon oʻzi yangilanishini belgilaydi: `O` ochish, `S` saqlash, `P` chop etish, `R` qayta hisoblash harflarini yozing (boshida hammasi), yoki `NONE`.

### DWGPROPS

Taxalluslari: `DRAWINGPROPS`. Chizma xossalarini roʻyxatlaydi, keyin `Oʻzgartirish: [Sarlavha/Mavzu/Muallif/Kompaniya/Kalit soʻzlar/coMments/cUstom/Olib tashlash/eXit]`. Birinchi oltitasi {{ui:Drawing details}} panelida koʻrinadigan xossalar; `U` oʻz nomi va qiymatini qoʻshadi, `R` bittasini olib tashlaydi. Maydonlar ularni oʻqiydi (`%<prop:title>%`, `%<prop:Client>%`) va darhol ergashadi. Oʻrnatilgan nomlardan biri boʻlgan yoki `%`, `<`, `>`, tirnoq yoki teskari slesh saqlagan maxsus nomni rad etadi.

## Parametrik

Qarang: [Chizmani cheklash](topic:constraints) va [Parametrlar va tenglamalardan foydalanish](topic:parameters). Cheklashlar {{ui:Model}} yorligʻida ishlaydi.

### GEOMCONSTRAINT va GC buyruqlari

Taxallusi `GCON`: `Cheklash turini kiriting [Gorizontal/Vertikal/Perpendikulyar/PArallel/Urinma/Ustma-ust/CONcentric/COLlinear/Simmetrik/Teng/Qotirish] <Gorizontal>`, keyin oʻsha buyruqning soʻrovlari.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Obyektni tanlang [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Birinchi obyektni tanlang`, `Ikkinchi obyektni tanlang` (ikkinchisi siljiydi).
- {{cmd:GCCOINCIDENT}}: `Birinchi nuqtani tanlang [Obyekt/Avtocheklash] <Obyekt>`, `Ikkinchi nuqtani tanlang [Obyekt] <Obyekt>`.
- {{cmd:GCFIX}}: `Nuqtani tanlang [Obyekt] <Obyekt>`.
- {{cmd:GCSYMMETRIC}}: `Birinchi obyektni tanlang [2Points] <2Points>`, `Ikkinchi obyektni tanlang`, `Simmetriya chizigʻini tanlang`.

### DIMCONSTRAINT va DC buyruqlari

Taxallusi `DCON`: `Aylantiriladigan assotsiativ oʻlchamni tanlang [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Birinchi cheklash nuqtasini koʻrsating [Obyekt] <Obyekt>`, `Ikkinchi cheklash nuqtasini koʻrsating`, `Oʻlchov chizigʻi joyini koʻrsating`, `Oʻlchov matni <d1=40>` (son, ifoda yoki `nom=ifoda`).
- {{cmd:DCALIGNED}}: yuqoridagidek, `[Obyekt/Nuqta va chiziq/2Lines]` bilan.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Yoy yoki aylanani tanlang`. {{cmd:DCANGULAR}}: `Birinchi chiziq yoki yoyni tanlang`, `Ikkinchi chiziqni tanlang`.
- {{cmd:DCCONVERT}}: `Aylantiriladigan oʻlchamlarni tanlang`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Obyektlarni tanlang [Sozlamalar]`. `S` masofa va burchak chegaralarini soʻraydi.
- {{cmd:DELCONSTRAINT}} (taxallusi `DELCON`): `Obyektlarni tanlang`; ularning cheklashlari ketadi.
- {{cmd:CONSTRAINTBAR}} (taxallusi `CBAR`): `Obyektlarni tanlang [Hammasini koʻrsatish/Hammasini yashirish]`, keyin `[Koʻrsatish/Yashirish]`.
- {{cmd:DCDISPLAY}}: `Variantni kiriting [Koʻrsatish/Yashirish]`.

### PARAMETERS va -PARAMETERS

{{cmd:PARAMETERS}} (taxalluslari `PAR`, `PARAM`) {{ui:Parameters}} panelini ochadi. `-PARAMETERS`: `Variantni kiriting [Yangi/Tahrirlash/Nomini oʻzgartirish/Oʻchirish/?] <?>`.

### SWBOUT

Taxallusi `SWMACRO`. Modelni SolidWorks da bitta cheklangan eskiz sifatida qayta quradigan makrosni (.swb) yuklab oladi. Qarang: [Eskizlarni boshqa detal modellash dasturlariga koʻchirish](topic:solidworks-sketches).

## Bloklar

### ANNOSCALE

Taxalluslari: `CANNOSCALE`. Chizmaning izoh masshtabini va unda nechta izohli obyekt borligini aytadi, keyin `Yangi izoh masshtabi` soʻraydi: `1:50`, `1:100`, `2:1`, yalang raqam (`50` 1:50 degani) yoki chizmaning oʻz masshtablaridan birining nomini kiriting. Har bir izohli matn va oʻlcham yangi masshtabda bir xil oʻlchamda chop etilishi uchun oʻlchamga keltiriladi, bitta ortga qaytarish qadamida; izohli boʻlmagan obyektlarga tegilmaydi, shuningdek yangi masshtab yoʻq masshtablar roʻyxatini saqlovchi obyektga ham tegilmaydi ({{cmd:OBJECTSCALE}}). Qarang: [Birliklar, varaqlar va masshtablar](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Taxalluslari: `OBJSCALE`. `Izohli obyektlarni tanlang`, keyin `Tanlangan obyektlarning izoh masshtablari [Qoʻshish/Oʻchirish/Joriy masshtab/Roʻyxat/eXit] <Qoʻshish>`. Izohli matn yoki oʻlcham izoh masshtablari roʻyxatini saqlaydi. `Qoʻshish` va `Oʻchirish` masshtab soʻraydi (`1:50`, `2:1`, yalang raqam yoki chizmaning oʻz masshtabi nomi); `Joriy masshtab` chizmaning izoh masshtabini qoʻshadi; `Roʻyxat` har bir obyektning masshtablarini chiqaradi. Masshtabi obyekt roʻyxatida boʻlgan kesim obyektni oʻsha masshtabda qogʻozdagi balandligini chop etadigan oʻlchamda koʻrsatadi, ekranda va chop etishda. Oxirgi masshtabni oʻchirib boʻlmaydi. Izohli boʻlmagan obyektlar chiqarib tashlanadi: avval Xossalarda Izohli ni yoqing. Roʻyxatlar DWG va DXF da CadCraft ning oʻz maʼlumoti sifatida saqlanadi. Qarang: [Birliklar, varaqlar va masshtablar](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Taxalluslari: `ANNOALL`. `Izohli obyektlarni barcha masshtablarda koʻrsatish [ON/OFF]`. Yoqilgan (chizma boshlanganda): izohli obyekt roʻyxatida boʻlmagan masshtabdagi kesimda yoki modelda ham oʻz oʻlchamida koʻrinadi. Oʻchirilgan: u yerda koʻrinmaydi va modelda tanlab boʻlmaydi. Kalit bitta ortga qaytarish qadami; faylda saqlanmaydi.

### SCALELISTEDIT

Taxalluslari: `SCALELIST`. `Masshtablar roʻyxati [Qoʻshish/Tahrirlash/Oʻchirish/Roʻyxat/Tiklash]` Enter bosilguncha. Qoʻshish: `Masshtab nomi`, `Qogʻoz birliklari`, `Chizma birliklari`. Tahrirlash va Oʻchirish masshtab nomini soʻraydi. Chizmaning oʻz masshtablari kesim va chop etish masshtablari roʻyxatlariga qoʻshiladi va chizma bilan saqlanadi. Qarang: [Birliklar, varaqlar va masshtablar](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT va PEDIT

`SPLINE` (`SPL`): `Splaynning birinchi nuqtasi [Usul/Obyekt] (Oʻtkazish nuqtalari)`. Oʻtkazish: egri chiziq oʻtadigan nuqtalar; keyin `Yopish`, `Ortga qaytarish`, keyin `Boshlanish urinmasi` va `Oxirgi urinma` (nuqta yoki {{key:Enter}}). Usul › Boshqaruv uchlari daraja (1 dan 5 gacha) soʻraydi va boshqaruv koʻpburchagidan chizadi. Obyekt polichiziqlarni uchlari orqali oʻtuvchi splaynlarga aylantiradi. `SPLINEDIT` (`SPE`): `[Oʻtkazish maʼlumoti/Uchni tahrirlash/Polichiziqqa aylantirish/Ochish yoki Yopish/Teskari/Ortga qaytarish/eXit]`; Oʻtkazish maʼlumoti `[Qoʻshish/Oʻchirish/Siljitish/Tozalash/Urinmalar/eXit]`; Uchni tahrirlash `[Boshqaruv nuqtasi qoʻshish/Siljitish/Ogʻirlik/eXit]`. `PEDIT` (`PE`): `[Yopish/Ochish/Birlashtirish/Kenglik/Oʻtkazish/Splayn/Egrilikni yoyish/Ltype gen/Teskari/Ortga qaytarish/eXit]`, bir nechta obyekt uchun `M`; chiziq, yoy va splaynlar avval polichiziq sifatida taklif qilinadi. Qarang: [Splaynlar va polichiziqlar](topic:splines).

### BLOCK

Taxalluslari: `B`, `BMAKE`.

- `Blok nomini kiriting`. Agar u mavjud boʻlsa: `"…" bloki allaqachon bor. Qayta aniqlaymizmi? [Ha/Yoʻq] <Yoʻq>`.
- `Kiritish asosiy nuqtasini koʻrsating`
- `Obyektlarni tanlang`. Ular bitta yangi blok havolasiga almashtiriladi.

### WBLOCK

Taxalluslari: `W`, `-WBLOCK`. Blok, bir nechta obyekt yoki butun chizmani yangi DWG yoki DXF fayl sifatida yozadi. `WBLOCK manba [Blok/Butun chizma/Obyektlar] <Obyektlar>`:

- **Obyektlar**: `Kiritish asosiy nuqtasini koʻrsating` (u yangi chizmaning boshi boʻladi), `Obyektlarni tanlang`, keyin `Fayl formati [DWG/DXF/R12 DXF]` va `Yangi chizma uchun fayl nomi`, keyin `Obyektlar bilan nima qilinsin [Saqlash/Blokka aylantirish/Oʻchirish]`. Aylantirish ularni fayl nomidagi blokka bitta havola bilan almashtiradi; Oʻchirish olib tashlaydi.
- **Blok**: `Yozib chiqariladigan blok`. Blokning oʻz obyektlari, asosiy nuqtasi boshida, ichki bloklar bilan birga.
- **Butun chizma**: model fazosidagi har bir obyekt. Varaqlar yozilmaydi; nusxa varaqlari bilan kerak boʻlsa {{cmd:SAVEAS}} dan foydalaning.

Yangi fayl faqat oʻz obyektlari ishlatadigan qatlamlar, chiziq turlari, matn va oʻlcham uslublari va bloklarni, shuningdek chizmaning birliklarini saqlaydi. DWG versiyasi {{cmd:SAVEAS}} oxirgi ishlatgan versiya. Brauzerda fayl yuklab olinadi; Studio da saqlash oynasi ochiladi.

### ATTDEF

Taxalluslari: `ATT`, `DDATTDEF`, `-ATTDEF`; yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Rejimlarni chiqaradi, keyin `Oʻzgartiriladigan variantni kiriting (tugaganda Enter) [Koʻrinmas/Doimiy/Oldindan belgilangan]`, `Atribut teg nomini kiriting`, `Atribut savolini kiriting`, `Atributning standart qiymatini kiriting` (doimiy boʻlsa `Atribut qiymatini kiriting`), `Matnning boshlanish nuqtasini koʻrsating`, `Matn balandligini koʻrsating`, `Matnning burilish burchagini koʻrsating`. {{cmd:BLOCK}} atribut taʼriflarini blokka kiritadi.

### EATTEDIT va ATTEDIT

`EATTEDIT` (`DDATTE`, yoki atributli havolani ikki marta bosing; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Atributli blok havolasini tanlang`, keyin {{ui:Edit attributes}} dialogi. `ATTEDIT` (`ATE`, `-ATTEDIT`): xuddi shu havola, keyin har bir atribut uchun `<savol> (<TAG>) <qiymat>`; {{key:Enter}} qiymatni saqlaydi. Qarang: [Atributlar](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Qaysi blok havolalarining atributlarini yangilash [Nom/Tanlash/Hammasi] <Tanlash>`. Qiymatlar saqlanadi; yangi atributlar standart qiymat oladi, olib tashlanganlar ketadi, joylashuvlar qayta tiklanadi.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Dialog: blok, atributlar (teg, savol, standart, rejimlar, tartib), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT va REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Joyida tahrirlash uchun blok havolasini tanlang` (yoki tanlov). `REFCLOSE`: `"…" dagi oʻzgarishlarni saqlaymizmi [Saqlash/Tashlab yuborish] <Saqlash>`; paneldagi {{ui:Save the block}} va {{ui:Discard}} xuddi shuni qiladi. Butun tahrir bitta ortga qaytarish qadami. Qarang: [Atributlar](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT va BCLOSE

`BE`; yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Tahrirlash uchun blok nomini kiriting <tanlangan havolaning bloki>` blok muharririni ochadi. `BCLOSE` `"…" dagi blok muharririni yoping [Saqlash/Tashlab yuborish] <Saqlash>` soʻraydi; bannerdagi {{ui:Save block}} va {{ui:Discard changes}} xuddi shuni qiladi. Muharrirda bajarilgan hamma narsa bitta ortga qaytarish qadami.

### VIEWBASE

Taxallusi: `FLATSHOT`. 3D yorliqdagi jismlarning tekis 2D koʻrinishi: `Koʻrinish [Old/Yuqori/Oʻng/Chap/Orqa/Pastki/Iso]`, `Yashirin chiziqlar [Koʻrsatish/Yashirish]`, masshtab (`1:20`, `2:1`; {{key:Enter}} varaqqa mos keladiganini oladi), keyin koʻrinishning markazi. Bitta blok havolasi; koʻrinadigan qirralar VIEW-VISIBLE da, yashirinlari VIEW-HIDDEN da punktir. Qarang: [Varaqdagi tekis koʻrinishlar](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Taxalluslari: `-PUBLISH`; yoki {{ui:Plot to PDF}} dialogidagi {{ui:All sheets in one PDF}}. `Chop etiladigan varaqlar [Hammasi/Bir nechtasi]`: {{key:Enter}} har bir varaqni chop etadi, `S` nomlarni vergul bilan ajratib soʻraydi. Bitta PDF, har bir varaq uchun sahifa va xatcho'p. Qarang: [Barcha varaqlar bitta PDF da](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Taxalluslari: `SSM`, `SHEETSETMANAGER`. Sizni chap panelning {{ui:Sheet set}} qismiga olib boradi: koʻp chizmalardan varaqlar, raqamlangan va sarlavhali, sarlavha bloklari toʻplamdan toʻldirilgan, bitta PDF sifatida chop etilgan. Qarang: [Varaqlar toʻplamlari](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): DWG yoki DXF tanlang, keyin uning kiritish nuqtasi. {{cmd:XREF}} (`XR`, `-XREF`): `Bogʻlangan chizmalar [?/Biriktirish/Qayta yuklash/Bogʻlash/Ajratish] (Enter: ?)`; bir nechta bogʻlanish boʻlsa, uning havolalaridan birini tanlang yoki `N` yozib nomini kiriting. Qarang: [Bogʻlangan chizmalar](topic:files#linked-drawings-external-references).

### COUNT

Taxalluslari: `BCOUNT`; yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Sanash uchun blok havolasini tanlang yoki [Hammasi/Eksport] (Enter: Hammasi)`: bosish shu fazodagi shu blokning har bir havolasini tanlaydi va sanaydi; {{key:Enter}} yoki `A` ularning hammasini roʻyxatlaydi; `E`, keyin `C` (sanash) yoki `A` (atributlar) CSV yuklab oladi. Qarang: [Bloklarni sanash va jadvalni eksport qilish](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Taxalluslari: `I`, `DDINSERT`.

- `Blok nomini yoki [Fayl/Kutubxona] ni kiriting <oxirgi blok>` (katta-kichik harf farqi yoʻq). `F` DWG yoki DXF soʻraydi, keyin butun chizma yoki uning bloklaridan biri; band nom {{ui:Keep existing}} yoki {{ui:Rename}} soʻraydi. `L` kutubxona panelini ochadi.
- `Kiritish nuqtasini koʻrsating [Masshtab/Burish]`. `S` `Masshtab koeffitsientini koʻrsating`, `R` `Burilish burchagini koʻrsating` soʻraydi; ikkalasi eslab qolinadi.
- Blok allaqachon boshqa obyektlar yonida turgan va ular bu blok boʻlmagan joyda takrorlansa, qatorda nechta joy taklif qilinganini aytadi va savolga `suGgested` qoʻshiladi: `G` ularni koʻrsatadi; bittasiga yaqin bosing, blok shu yerga qoʻyiladi, `A` hammasi uchun, {{key:Enter}} orqaga qaytish uchun. Ular qoʻshnilarining burilishini va standart atribut qiymatlarini oladi. Ochiq fazodagi 20 000 dan ortiq obyektli chizmalar qidirilmaydi.
- Keyin blok soʻraydigan har bir atribut uchun `Enter <savol> (<TAG>) <standart>`. Qarang: [Blok atributlari](topic:attributes).

### LIBRARY

Taxalluslari: `LIB`. Kutubxona panelini ochadi: elementlarni joylashtirish, yangilanishlarni tekshirish, kutubxona mualliflari. Savollar yoʻq. Qarang: [Fayldan yoki kutubxonadan kiritish](topic:insert-from-file-and-library).

### STEELMEMBER

Taxalluslari: `SMEMBER`; yoki kutubxonaning {{ui:Standard}} yorligʻidagi {{ui:3D member}}. `Kesim oʻlchami <W12x26>` (yorliq qanday roʻyxatlasa), keyin `Boshlanish nuqtasi [Ustun]` va `Oxirgi nuqta`: 3D yorliqda ikki nuqta orasida, yerda turgan jismli element. `C` ustunning tayanch nuqtasi va balandligini soʻraydi. Bitta ortga qaytarish qadami. Qarang: [Poʻlat kesimlar va standart detallarni joylashtirish](topic:steel-and-standard-parts).

### PARTSLIST

Taxalluslari: `PLIST`. `Detallar roʻyxatining yuqori chap burchagi`, keyin `Matn balandligi <2.5>`: kutubxonadan joylashtirilgan har bir standart detal va poʻlat kesimining jadvalini chizadi (element raqamlari, miqdor, detal, standart, oʻlcham, uzunlik, material, massa). Bitta ortga qaytarish qadami. Qarang: [Poʻlat kesimlar va standart detallarni joylashtirish](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Taxalluslari: `PU`. Hech kim ishlatmayotgan blok taʼriflarini olib tashlaydi. Savollar yoʻq.

### DELBLOCKS

Yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Oʻchirish uchun blokni tanlang [Nom/eXit]`: blok havolasini bosing, yoki filtr bilan bloklar roʻyxati uchun `N` (bir nechtasini tanlash mumkin), yoki tugatish uchun `X` / {{key:Enter}}. Har bir havola ketadi — modelda, har bir varaqda va boshqa bloklar ichida — keyin taʼrif, buyruq satri nima oʻchirilganini va nima oʻchirilmaganini aytadi. Nomsiz bloklar va bogʻlangan chizmalar taklif qilinmaydi. Keyingi blok uchun soʻrov qaytadi; butun buyruq bitta ortga qaytarish qadami.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} siz nusxalagan narsani ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) bitta blok sifatida qoʻyadi: kiritish nuqtasini bosing va u yerga yangi blokka bitta havola tanlangan holda tushadi. Blokka oʻz nomi beriladi (`A$C` va raqam); {{cmd:RENAME}} unga oʻzingizniki nomini beradi. Bitta ortga qaytarish qadami havolani va blokni olib tashlaydi.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} almashtiriladigan blok va uning oʻrniga qoʻyiladigan blokni soʻraydi (`?` bloklar roʻyxatini chiqaradi), keyin modeldagi, har bir varaqdagi va boshqa bloklar ichidagi har bir havolani oʻzgartiradi. Har bir havola oʻz oʻrnini, masshtabini, burilishini, qatlamini va ikkala blokda bor atributlar qiymatlarini saqlaydi; faqat yangi blokda bor atributlar standart qiymatidan boshlanadi va qaysi qiymatlar tashlab yuborilganini aytadi. Eski blokni hech narsa ishlatmasa, uni olib tashlashni taklif qiladi. Bogʻlangan chizmalarni va bloklarning oʻz ichiga oʻzini qoʻyadigan almashtirishni rad etadi. Bitta ortga qaytarish qadami.

### MINSERT

{{cmd:MINSERT}} blokni qatorlar va ustunlarga joylashtiradi: blok nomi, kiritish nuqtasi, masshtab, burilish, qatorlar va ustunlar soni, va ular orasidagi masofalar. Butun toʻplam burilish bilan aylanadi. Har biri oʻz havolasi (10 000 tagacha), shuning uchun ularning har birini keyin siljitish yoki oʻchirish mumkin.

### BLOCKSPALETTE

Taxalluslari: `BLOCKSPAL`; yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Kursor filtrida turgan {{ui:Blocks}} panelini koʻrsatadi. Har bir blokning kichik rasmi bor; eng yaqinda joylashtirilganlari birinchi turadi. Filtr yonidagi ikki tugma roʻyxat va rasmlar panjarasi oʻrtasida almashadi. Blokni joylashtirish uchun rasmni bosing (yoki {{ui:Insert}}) — {{cmd:INSERT}} bilan; yoki uni chizmaga sudrang, tashlagan joyingizga joylashadi.

{{ui:Libraries}}, roʻyxat ostida: {{ui:Add a drawing}} sizning DWG yoki DXF faylingizni oladi va uning bloklarini rasmlari bilan, butun chizmani bitta blok sifatida roʻyxatlaydi. Bittasini joylashtirish uning taʼrifini (va u ichiga joylashtirgan bloklarni va ularning qatlamlarini) shu chizmaga nusxalaydi, {{cmd:INSERT}} ning `File` varianti kabi; shu yerda allaqachon bor va bir xil taʼrifga ega blok savolsiz ishlatiladi, bir xil nomli, lekin boshqacha blok {{ui:Keep existing}} yoki {{ui:Rename}} soʻraydi. Brauzerda fayl sahifa yopilguncha qoladi. CadCraft Studio da {{ui:Add a folder}} jilddagi chizmalarni roʻyxatlaydi, har biri bosilganda ochiladi; fayllar va jildlar eslab qolinadi. Kichik x kutubxonani roʻyxatdan olib tashlaydi; fayl tegilmaydi. Umumiy {{ui:Library}} boshqa narsa: qarang: [Fayldan yoki kutubxonadan kiritish](topic:insert-from-file-and-library).

### BCONVERT

Yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Takrorlanadigan geometriyani topadi va har bir nusxani bitta blokka havola qiladi.

- `Takrorlanadigan obyektlarni tanlang yoki [Blok]`: bitta nusxadagi obyektlar. `B` oʻrniga mavjud blokni nomlaydi, uning obyektlarining tarqoq nusxalarini topish uchun.
- `Nusxa boʻlishi mumkin: aks ettirilgan = Yoʻq, masshtablangan = Yoʻq; qatlam, rang, chiziq turi va chiziq qalinligi = Mos … [Aks ettirilgan/Masshtablangan/Xossalar]`: `M`, `S` va `P` nusxa nimani hisoblashini almashtiradi; Enter qidiradi. Sozlamalar eslab qolinadi.
- `Yangi blok uchun nom <Block1>`, keyin `Blokning asosiy nuqtasini koʻrsating` (Enter tanlovning pastki chap burchagini oladi).
- Qancha boshqa obyektlar toʻplami bir xil geometriyaga ega ekanini aytadi, almashtiradigan hamma narsani ajratadi va `Ha/Yoʻq` soʻraydi.

Nusxa — bir xil obyektlar siljigan va istalgan burchakka burilgan (va yoqilgan boʻlsa, bitta koeffitsient bilan aks ettirilgan yoki masshtablangan); har bir obyektning oʻz juftligi boʻlishi kerak, tanlov oʻlchamining milliondan bir qismi doirasida. Har bir havola oʻz burilishi va masshtabiga ega (aks ettirilgani manfiy Y masshtabiga), va obyektlar umumiy boʻlgan qatlamga. Qulflangan qatlamdagi obyektlar oʻz holicha qoladi va hisoblanadi. U ochiq fazoni (model yoki ochiq varaq) qidiradi. Juda katta qidiruv ish chegarasiga yetganda toʻxtaydi va buni aytadi. Bitta ortga qaytarish qadami.

### BSEARCH

Yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Bloklarni qidirish: [Nom/Atribut/Geometriya] <Nom>`:

- `N`: blok nomining bir qismi yoki `*` va `?` bilan shablon. Har bir blokni shu yerdagi va butun chizmadagi havolalari bilan roʻyxatlaydi.
- `A`: atribut qiymati yoki `TAG=qiymat`. Havolalarida shu qiymat bor bloklarni, topilgan qiymatlar bilan roʻyxatlaydi. Doimiy atributlar ham hisobga olinadi.
- `G`: obyektlarni yoki bitta blok havolasini tanlang, shakli kamida 85% oʻxshash bloklar eng yaxshisidan boshlab roʻyxatlanadi. Oʻlcham, burilish va aks ettirish hisobga olinmaydi. Oʻlchov konturlar boʻylab tarqalgan nuqtalar orasidagi masofalarni solishtiradi, shuning uchun oʻxshashlarni topadi; aniq nusxalarni topish uchun {{cmd:BCONVERT}} dan foydalaning.

Ochiq fazoda topilgan havolalar keyingi buyruq uchun tanlangan holda tayyor turadi.

### BREPLACE

Yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Almashtirish [Tanlangan/Hammasi]`: `S` tanlagan blok havolalarini siz nomlagan blok bilan almashtiradi; `A` blok va uning oʻrnini soʻraydi va har bir havolani oʻzgartiradi, {{cmd:BLOCKREPLACE}} kabi (xuddi shu kod). Havola oʻz oʻrnini, masshtabini, burilishini, qatlamini va ikkala blokda bor atributlar qiymatlarini saqlaydi; yangi blok uchun oʻrni yoʻq qiymatlar tashlab yuboriladi va nomi aytiladi. `?` bloklar roʻyxatini chiqaradi. Bitta ortga qaytarish qadami.

### DATAEXTRACTION

Taxalluslari: `EATTEXT`, `DX`; yoki {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Bloklarni, ularning atributlarini va obyekt xossalarini jadval yoki CSV fayl sifatida roʻyxatlaydi.

- Tanlov ustida ishlaydi yoki `Obyektlarni tanlang (Enter: ushbu fazodagi hamma narsa)` soʻraydi.
- Tanlovda ikkalasi ham boʻlsa `Roʻyxat: [Bloklar/Obyektlar/Hammasi]`. Nomsiz bloklar, jadvallar va materiallar roʻyxati hech qachon roʻyxatlanmaydi.
- Tanlash uchun ustunlarni chiqaradi (nom, turi, qatlam, X, Y, burilish, masshtab, uzunlik, maydon, rang, chiziq turi, fazo va har bir atribut tegi uchun bittadan), keyin `Ustunlar, nomi yoki raqami bilan vergul orqali`. {{key:Enter}} yulduzchali olinadiganlarni oladi: bloklar uchun nom va har bir atribut; obyektlar uchun turi, qatlam va uzunlik.
- `Bir xil qatorlarni sanash bilan birga qoʻyasizmi? [Ha/Yoʻq] <Ha>`, keyin `Roʻyxatni qayerga qoʻyasiz: [Jadval/Csv] <Jadval>`. Jadval oddiy jadval ({{cmd:TABLEDIT}} uni tahrirlaydi) va jonli emas: chizma oʻzgargach buyruqni qayta bajaring.
- Roʻyxatda boʻlmagan ustunni rad etadi. Jadvalda 1 999 ta maʼlumot qatori bor; CSV fayl hammasini oladi.

### COUNTTABLE

Tanlovning (yoki ochiq fazoning) blok havolalarini sanaydi va sanashlarni jadvalga (`Blok`, `Soni`) yoki CSV faylga qoʻyadi. Chizmani oʻzi kuzatib boradigan sanash uchun {{cmd:BOMTABLE}} ga qarang.

## Varaqlar va chop etish

### LAYOUT

Taxalluslari: `LO`, `NEWLAYOUT`; yoki chizma ostidagi {{ui:+}} tugmasi. Chegara, sarlavha bloki va bitta kesimli yangi varaq, ISO A3 da (yoki dyuym yoki futdagi chizmalar uchun Tabloid). Savollar yoʻq.

### MVIEW

Taxalluslari: `MV`. Faqat varaqda ({{cmd:VPORTS}} varaqda ham shunday qiladi).

- `Kesim burchagini koʻrsating [Koʻpburchakli/Obyekt]`, `Qarama-qarshi burchakni koʻrsating`. Kesim standart masshtabda butun modelni koʻrsatadi.
- `P` (Koʻpburchakli): kontur burchaklarini bosing (`Ortga qaytarish`, `Yopish`), tugagach {{key:Enter}}. Uchtadan kam burchakni rad etadi.
- `O` (Obyekt): `Kesim konturi uchun yopiq obyektni tanlang`: varaqdagi yopiq polichiziq, aylana yoki ellips. Kesim uning shaklini oladi (egri chiziqlar qisqa toʻgʻri boʻlaklar boʻlib); obyekt oʻz holicha qoladi. Yopiq boʻlmagan obyektni rad etadi.

### VPCLIP

Varaqda allaqachon turgan kesimni kesadi. `Kesiladigan kesimni tanlang` (yoki avval tanlang), keyin `Kesiladigan obyektni tanlang [Koʻpburchakli/Oʻchirish]`:

- Yopiq polichiziq, aylana yoki ellipsni bosing, yoki koʻpburchak burchaklarini bosish uchun {{key:Enter}} (yoki `P`).
- `D` (Oʻchirish, kesim kesilganda taklif qilinadi) uni yana toʻrtburchak qiladi: u oldin ega boʻlgan kontur atrofidagi quti.
- Kesim qogʻozda koʻrsatgan narsasi siljimaydi va uning masshtabi saqlanadi. Model faqat kontur ichida chiziladi va chop etiladi, chegara unga ergashadi. Bitta ortga qaytarish qadami.
- Kesilgan kesimning konturining har bir burchagida, markazi va qutisining toʻrt burchagidan tashqari, dastak bor (quti burchagini sudrash kontur bilan birga choʻzadi). Xossalarda Kontur: Toʻrtburchak yoki Kesilgan va burchaklar soni koʻrinadi.
- DWG va DXF 2000 fayllari konturni CadCraft uchun saqlaydi. Boshqa dasturlar kesimni uning atrofidagi toʻrtburchak sifatida ochadi; DXF R12 faqat toʻrtburchakni saqlaydi.
- Model yorligʻida kesimlar varaqda ekanini aytadi.

### VPORTS

Taxalluslari: `VIEWPORTS`. {{cmd:SPLIT}} varaqdan ham xuddi shunday, va {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} uni ishga tushiradi. Modelda: `Oynalar sonini kiriting [Bitta/2/3/4] <3>`; `2` `[Gorizontal/Vertikal] <Vertikal>` soʻraydi (Vertikal = yonma-yon), `3` `[Chap/Oʻng] <Oʻng>` soʻraydi (katta oyna qayerda). Har bir oyna oʻz koʻrinishi va fazosini saqlaydi; bosish oynani faol qiladi. Varaqda bu {{cmd:MVIEW}}. Qarang: [Ekranni boʻlish](topic:split-screen).

### VPVIEW

Taxallusi yoʻq. Faqat varaqda.

- `Kesimni tanlang` (agar tanlangan boʻlsa oʻtkazib yuboriladi), keyin modelda: `Koʻrsatiladigan oynaning birinchi burchagini koʻrsating`, `Qarama-qarshi burchakni koʻrsating`.

### UCS

Taxallusi yoʻq. Sizning oʻz koordinata tizimingiz; tahrir emas. `UCS boshini koʻrsating [Nomlangan/Obyekt/Oldingi/Dunyo/Z/3point] <Dunyo>`: nuqta yangi bosh; keyin `X oʻqidagi nuqtani koʻrsating (Enter burchakni saqlaydi)`. `Z`: `Z oʻqi atrofidagi burilish burchagini koʻrsating <90>`. `3`: bosh, musbat X oʻqidagi nuqta, musbat Y tomonidagi nuqta. `OB`: `UCS ni tekislash uchun obyektni tanlang`. `NA`: `[Tiklash/Saqlash/Oʻchirish/?]` va nom. Koʻrinish yangi X oʻqi tekis boʻlishi uchun buriladi. Qarang: [Koʻrinishni burish va oʻz koordinatalaridan foydalanish](topic:ucs-and-turned-view).

### PLAN

Taxallusi yoʻq. `Variantni kiriting [Joriy ucs/Ucs/Dunyo] <Joriy ucs>`: faol oynaning koʻrinishini shunday buradiki, UCS ning X oʻqi (yoki dunyonikisi) tekis boʻladi. Chizmadagi hech narsa siljimaydi.

### TURNLEFT, TURNRIGHT, TURNWORLD

Taxalluslari yoʻq; yoki {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. `UCS Z -90`, `UCS Z 90` va `UCS W` bilan bir xil, koʻrinish ergashgan holda.

### VPLAYER

Taxallusi yoʻq. Varaqda yoki kesim ichida. `Variantni kiriting [?/Muzlatish/Erish/Tiklash/Vpvisdflt]`: `F`, `T`, `R` qatlam nomlarini soʻraydi (vergul, `*` va `?` belgilari bilan), keyin `[Hammasi/Tanlangan/Joriy] <Joriy>` kesimlar; Tiklash har bir qatlamni "yangi kesimlarda muzlatilgan" standartiga qaytaradi; `V` shu standartni belgilaydi (`[Muzlatilgan/Erigan]`), uni {{cmd:MVIEW}} ishlatadi. `?` joriy kesimda muzlatilgan qatlamlarni roʻyxatlaydi. Qatlamlar panelining kesim ustuni bitta kesim uchun xuddi shuni qiladi. Qarang: [Bitta kesimda qatlamni muzlatish](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Taxalluslari: `MS`; yoki kesim ichida ikki marta bosing. Faqat varaqda. Modelda kesim orqali ishlash: tanlangan, varaqdagi yagona yoki `Ishlash uchun kesim ichiga bosing`. Ichidagi siljish va kattalashtirish kesimning koʻrinishini oʻzgartiradi (displey qulflangan kesim uni saqlaydi va varaq siljiydi); yangi koʻrinish bitta ortga qaytarish qadami sifatida yoziladi. Qarang: [Modelda kesim orqali ishlash](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Taxalluslari: `PS`; yoki kesim tashqarisida ikki marta bosing yoki chizma ostidagi yorliqni bosing. Varaqqa qaytish.

### PLOT

Taxalluslari: `PRINT`, `PUBLISH`, `EXPORTPDF`; yoki {{key:Mod+P}}. {{ui:Plot to PDF}} dialogini ochadi. Qarang: [PDF ga chop etish](topic:plot-pdf).

### PLOTSTYLES

Taxalluslari: `STYLESMANAGER`, `PSTABLES`; yoki {{ui:Plot to PDF}} dialogidagi {{ui:Edit tables…}}. {{ui:Plot style tables}} ni ochadi: har bir rang qanday chop etilishi (rang, kulrang, siyoh, chiziq qalinligi), chizma bilan saqlanadi. Qarang: [Chop etish uslubi jadvallari](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} obyektlarni varaq va model orasida kesim orqali koʻchiradi, ular boshqa tomondan bir xil koʻrinishi uchun masshtablanadi va buriladi. Varaqda obyektlarni tanlang va ular modelga oʻtadi (varaqda bir nechta boʻlsa kesimni tanlang). Kesim orqali modelda ishlaganda ({{cmd:MSPACE}}), tanlangan obyektlar varaqqa keladi. Necha marta kattaroq yoki kichikroq boʻlganini aytadi. Kesimlar oʻz varaqlarida qoladi. Bitta ortga qaytarish qadami.

### ISODRAFT

{{cmd:ISODRAFT}} izometrik chizishni `ON` yoki `OFF` qiladi, yoki toʻgʻridan-toʻgʻri `Left`, `Top` yoki `Right` tekisligiga oʻtadi. Yoqilgan boʻlsa: Ortogonal ({{key:F8}}) chiziqlarni tekislikning ikki oʻqi boʻylab saqlaydi (chap: 90° va 150°; yuqori: 30° va 150°; oʻng: 30° va 90°), qutb kuzatuvi ({{key:F10}}) xuddi shu oʻqlarga ergashadi, to'rga tutish ({{key:F9}}) izometrik toʻrdan foydalanadi va toʻr ({{key:F7}}) 30°, 90° va 150° chiziqlar bilan chiziladi. {{cmd:ELLIPSE}} `Isocircle` ni oladi: markaz va radius (yoki `Diameter`) bering, u joriy tekislikda aylana koʻrinadigan ellipsni chizadi. Chizma tekis qoladi: bular 3D model emas, balki tasviriy koʻrinish chizish uchun yordamchilar. Sozlama shu seans uchun, faylda saqlanmaydi.

### ISOPLANE

{{cmd:ISOPLANE}} izometrik chizish qaysi tekislikda ishlashini tanlaydi: `Left`, `Top` yoki `Right`. Enter keyingi tekislikka oʻtadi. Izometrik chizish yoqilgan boʻlsa, {{key:F5}} buyruq oʻrtasida ham xuddi shuni qiladi; oʻchiq boʻlsa, {{key:F5}} brauzerga qoldiriladi.

## Soʻrov

### CAL

Hisoblashning qiymatini chiqaradi, uzunlik yozilishi mumkin boʻlgan har qanday joyda oʻqilganidek.

- `Ifoda`: uni kiriting, masalan `12'6"+3/4"` yoki `(24'-0")/3`, va {{key:Enter}} bosing. CadCraft `= 12'-6 3/4"   (150.75 drawing units)` chiqaradi. Qarang: [Yozilgan qiymatda arifmetika](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Taxalluslari: `DI`; yoki {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Birinchi nuqtani koʻrsating`, `Ikkinchi nuqtani koʻrsating`. Masofa, burchak, Delta X va Delta Y ni chiqaradi.

### AREA

Taxalluslari: `AA`; yoki {{ui:View}} › {{ui:More}} › {{ui:Area}}. Maydon va perimetrni chiqaradi.

- `Birinchi burchak nuqtasini koʻrsating [Obyekt/Maydon qoʻshish/Maydon ayirish] <Obyekt>`
  - Burchaklarni bosing yoki yozing; `Keyingi nuqtani koʻrsating (Enter yopadi) [Ortga qaytarish]` da konturni yopish uchun {{key:Enter}} bosing. `U` oxirgi burchakni olib tashlaydi.
  - {{key:Enter}} yoki `O`, keyin `Obyektni tanlang`: aylana (aylana uzunligini chiqaradi), ellips, polichiziq (ochiq boʻlsa maydon uchun toʻgʻri chiziq bilan yopiladi va uning uzunligi chiqariladi) yoki shtrixlash (teshiklar olib tashlanadi).
  - `A` (Maydon qoʻshish) va `S` (Maydon ayirish) joriy yigʻindini saqlaydi: soʻrov `(ADD mode)` yoki `(SUBTRACT mode)` bilan boshlanadi, har bir maydon qoʻshiladi yoki olib tashlanadi va har biridan keyin `Umumiy maydon = …` chiqadi. Bu rejimlarda `O` {{key:Enter}} gacha obyektlarni tanlaydi, va birinchi soʻrovdagi {{key:Enter}} buyruqni tugatadi.

### MEASUREGEOM

Taxalluslari: `MEA`. `Variantni kiriting [Masofa/Radius/Burchak/ARea] <Masofa>`; har bir oʻlchovdan keyin yana soʻraydi, standart `eXit`.

`Quick` kursor atrofida harakatlanganda oʻlchaydi: oʻngdagi, yuqoridagi, chapdagi va pastdagi eng yaqin obyektgacha masofa (joriy UCS oʻqlari boʻylab), siz harakatlanganda chiziladi, va ikkita qoʻshni toʻgʻri va uchrashsa burchak. Bosish toʻrtta masofani, toza kenglik va balandlikni, burchaklarni tarixga yozadi; Enter variantlarga qaytaradi. U ekrandagini oʻqiydi.

- `D`: ikki nuqta, {{cmd:DIST}} kabi.
- `R`: `Yoy yoki aylanani tanlang`; radius va diametrni chiqaradi.
- `A`: yoy (uning oʻralgan burchagi), chiziq va keyin ikkinchi chiziq (ularning orasidagi burchak, uzoq uchlari tomon), yoki {{key:Enter}} va uchta nuqta (uch, keyin ikki uchi).
- `AR`: {{cmd:AREA}} kabi, bitta maydon.

### ID

Taxallusi yoʻq. `Nuqtani koʻrsating`; uning X va Y ni chiqaradi.

### LIST

Taxalluslari: `LI`, `LS`. `Obyektlarni tanlang`; har bir obyektning turi, qatlami va asosiy oʻlchamlarini chiqaradi.

### MASSPROP

{{cmd:MASSPROP}} tanlangan mintaqalar va yopiq obyektlarning kesim xossalarini birgalikda beradi: maydon, perimetr, oʻralgan toʻgʻri toʻrtburchak, sirt markazi, koordinata boshi orqali X va Y oʻqlari atrofidagi inersiya momentlari, inersiya koʻpaytmasi, aylanish radiuslari, sirt markazi atrofidagi xuddi shu momentlar va asosiy momentlar va ularning oʻqlari yoʻnalishlari. Mintaqadagi teshiklar teshik sifatida hisoblanadi. Qiymatlar chizma birliklarida va chiziq va yoylardan tuzilgan konturlar uchun aniq; ellips va splaynlar qisqa toʻgʻri kesmalar sifatida oʻlchanadi va u buni aytadi. Hisobotdan keyin uni matn faylga yozishni soʻraydi. Yopiq boʻlmagan obyektlar chiqarib tashlanadi va necha dona ekanligi aytiladi.

## Koʻrinish, fayl va boshqa

### ZOOM

Taxalluslari: `Z`.

- `Oynaning burchagini koʻrsating, masshtab koeffitsientini kiriting (nX) [Hammasi/Hammasi/Oyna/Oldingi/Masshtab/Markaz]`. Oyna uchun ikki burchakni bosing. `E`, `A` yoki Enter: butun chizma.
- `P` (Oldingi, yoki asboblar panelidagi {{ui:Previous}}) oldingi koʻrinishga qaytaradi, har bir yorliqda 10 tagacha koʻrinish; gʻildirak qadamlari yoki bitta siljish bitta koʻrinish hisoblanadi.
- `2`, `2x` yoki `0.5x` kabi son (yoki `S` va keyin son) ekran oʻrtasi atrofida shu koeffitsientga kattalashtiradi yoki kichraytiradi.
- `C`: `Markaziy nuqtani koʻrsating` va `Balandlik yoki kattalashtirish (nX) ni kiriting` soʻraydi.

### PDFATTACH, PDFIMPORT va PDF buyruqlari

Taxalluslari: `PDFATT` {{cmd:PDFATTACH}} uchun, `PDFIM` {{cmd:PDFIMPORT}} uchun. {{cmd:PDFATTACH}} chizma ostiga PDF sahifasini qoʻyadi (fayl, sahifa, kiritish nuqtasi, masshtab, burilish); {{cmd:PDFIMPORT}} sahifaning chiziqlari, egri chiziqlari, toʻldirishlari va matnini PDF nomi bilan atalgan qatlamlardagi chizma obyektlariga aylantiradi, haqiqiy oʻlchamda, kiritilgan masshtabda yoki ikki nuqta va haqiqiy masofadan masshtablangan holda. {{cmd:PDFCLIP}} tagqatlamni kesadi, {{cmd:PDFADJUST}} oʻchirish, kontrast, monoxrom sozlaydi yoki uni oʻchiradi, {{cmd:PDFLAYERS}} PDF ning oʻz qatlamlarini almashtiradi, va {{cmd:PDF}} chizma tagqatlamlari ishlatadigan fayllarni CadCraft ga yana beradi. Qarang: [PDF tagqatlamlari](topic:pdf-underlay).

### AUTOCOMPLETE

Taxallusi: `AUTOC`. Chizma avtotoʻldirish: hech qanday buyruq bajarilmayotganda, kulrang sharpa chizmaning oʻz namunalari keyin nima kelishini koʻrsatadi. {{cmd:AUTOCOMPLETE}} uni `On` yoki `Off` qiladi (shuningdek Sozlamalar › CadCraft) yoki hozir nimani taklif qilishini `Show` qiladi. **Tab** sharpani bitta ortga qaytarish qadami sifatida chizadi, **Esc** chizma oʻzgargunga qadar uni yashiradi. U eng yangi obyektlarda uch narsani topadi: juft marta chizilgan narsaning keyingi nusxasi teng qadamda (ustunlar, ustunlar, zinaning pastki va yuqori qismi), polichiziq zinasining keyingi qadamlari va xona yoki devor zanjirining yetishmayotgan tomoni. {{cmd:LINE}} yoki {{cmd:PLINE}} oʻrtasida sharpa **keyingi nuqta**: zinaning keyingi qadami (pastki qism, yuqori qism, pastki…), toʻrtburchakning toʻrtinchi burchagi, uni yopadigan nuqta yoki yana bir teng qadam. Kursorni unga yaqin olib keling va **Tab** bosing, xuddi u yerni bosgandek; davom eting yoki Enter bosing. Bu kompyuterda qoidalar bilan, modelsiz hisoblanadi.

### AUTOSHEET

Taxallusi: `ASH`. Oʻzi joylashadigan varaqlar. {{cmd:AUTOSHEET}} chizma boʻlaklarini (sizning nomlangan koʻrinishlaringiz, yoki modelning alohida boʻlaklari, yoki butun model) oladi, qogʻoz oʻlchamini tanlaydi (yoki bergan oʻlchamini), har bir boʻlakka standart masshtab beradi (hammasi uchun bitta yoki har biri sigʻadigan eng katta) va koʻrinishlarni yangi varaqlarda qatorlarga sarlavha bloki va har birining ostida izoh (nom va masshtab) bilan joylashtiradi. Bitta varaqqa sigʻmagan narsaga oʻz varaqi beriladi. Bitta ortga qaytarish qadami. Bu kompyuterda qoidalar bilan, modelsiz hisoblanadi.

### PHOTOSKETCH

Taxallusi: `PSK`. Qoʻlda chizilgan eskizning fotosuratini chizmaga aylantirish. Qogʻoz varagʻidagi qoʻlda chizilgan eskizning fotosuratini (JPEG, PNG yoki TIFF) tanlang. {{cmd:PHOTOSKETCH}} varaqning toʻrtta burchagini topadi, perspektivani tekislaydi, siz nomlagan qogʻoz oʻlchamini (`Paper` yoki eng yaqin standart) va eskizning `Scale` (1 : n) ni oladi, keyin qalam chiziqlarini chiziq, yoy va aylanalarga aylantiradi, har bir qalam rangi uchun qatlam bilan (qora, qizil, koʻk, yashil). Qogʻoz chetini topa olmasa, butun fotosuratni varaq sifatida oladi va buni aytadi. Yozuvlar chiqarib tashlanadi. Bitta ortga qaytarish qadami. Bu kompyuterda klassik tasvir qayta ishlash bilan bajariladi, model yoʻq, hech narsa hech yerga yuborilmaydi. Shuningdek skanerlangan chizma buyruqlariga qarang.

### AUTODIM

Taxallusi: `ADIM`. Qoidalar boʻyicha avtomatik oʻlchash. {{cmd:AUTODIM}} tanlangan obyektlarni (yoki butun chizmani) ularning sathi va tik chetlaridan oʻlchaydi: tanlagan tomonlaringiz boʻylab oʻlchamlar zanjiri (`Sides`), uning tashqarisida bitta umumiy oʻlcham, har bir teshikning kengligi (bir chiziqdagi devor chiziqlari orasidagi boʻshliq), har bir teshik oʻlchami uchun diametr va `Grid` bilan toʻr chiziqlari orasidagi masofa. Allaqachon bor oʻlcham qayta yaratilmaydi. Bitta ortga qaytarish qadami. Bu kompyuterda qoidalar bilan, modelsiz hisoblanadi.

### GRIDMOVE

Taxallusi: `GM`. Toʻr chizigʻini siljitish toʻplamni olib boradi. {{cmd:GRIDMOVE}} toʻr chizigʻini (nomi grid yoki axis soʻzini oladigan qatlamdagi chiziq) va unga osilgan narsalarni siljitadi: chiziqqa uchi bilan tegib turgan devorlar unga ergashib choʻziladi, chiziq boʻylab turgan devorlar butunlay siljiydi, ustunlar (chiziqdagi blok havolalari va aylanalar), uning belgisi va tegi siljiydi, va nuqtalari unda turgan oʻlchamlar yangi oraliqni oʻlchaydi. Ikki nuqta bering (faqat chiziq boʻylab qismi hisoblanadi) yoki `Distance`. Bitta ortga qaytarish qadami hammasini qaytaradi. Kompyuterda qoidalar bilan bajariladi.

### DETAILS

Taxallusi: `DET`. Sizni topadigan detallar. {{cmd:DETAILS}} firmangizning oʻz detallarini saqlaydi: `Add` ushbu chizmaning blokini roʻyxatga qoʻshadi, `List` va `Remove` uni boshqaradi, `Find` tanlangan narsa (yoki oxirgi chizgan narsangiz) uchun ularni qatlam nomlari, blok nomlari, shtrixlash shablonlari va izohlardagi soʻzlar bilan har bir detalning nomi va izohlariga qarab tartiblaydi, shuning uchun deraza boshi sizning toʻsin zarbasini topadi. Joylashtirish uchun raqam va nuqta tanlang. `Hint` yoqilgan boʻlsa (shuningdek Sozlamalar › CadCraft), detalga mos keladigan narsa tanlansa, holat satriga bitta qator chiqadi. Roʻyxat ushbu brauzerda, shu kompyuterda saqlanadi va qidiriladigan aynan shu roʻyxat. `Share` uni Hujjatlar jildiga ham qoʻyadi (`.cadcraft/firm-details.json`, har bir blokning chizmasi bilan): `Pull` jamoangizda bor va sizda yoʻqni qoʻshadi, `Push` sizda bor va ularda yoʻqni qoʻshadi, `Both` ikkalasini bajaradi va hech narsa ikki tomondan ham olib tashlanmaydi. Avval Hujjatlar jildini oching ({{cmd:DOCUMENTS}}); bu jild Team Cloud Plan jildi boʻlsa, butun jamoa bitta roʻyxatdan foydalanadi. Kutubxona panelidagi detal elementida **Firmam detallariga qoʻshish** tugmasi bor, u uni shu roʻyxatga qoʻyadi. Bu kompyuterda soʻzlar bilan, modelsiz hisoblanadi.

### SKETCHFIX

Taxallusi: `SKF`. Qalam eskizlari aniq geometriyaga aylanadi. Bir vaqtda bitta erkin chiziq chizing va sudrang (qalam, sichqoncha yoki barmoq), keyin Enter. Har bir chiziq chiziq, aylana, yoy, toʻrtburchak yoki polichiziq sifatida oʻqiladi: deyarli gorizontal va tik chiziqlar aniq gorizontal va tik qilinadi, yopiq dumaloq chiziq aylanaga aylanadi, toʻrtta toʻgʻri burchakli burchakka ega yopiq chiziq toʻrtburchakka, va chiziqlar uchlari bir-biriga va chizmada allaqachon bor uchlarga tortiladi. Bitta ortga qaytarish qadami. Bu kompyuterda qoidalar bilan, modelsiz hisoblanadi.

### SCANATTACH va skanerlangan chizma buyruqlari

Taxalluslari: `SCA` {{cmd:SCANATTACH}} uchun, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} da yoʻq. Ular rasm bilan ishlaydi, har biri bitta ortga qaytarish qadami. {{cmd:SCANATTACH}} rasm boʻlgan PNG, JPEG, TIFF (bitta sahifa yoki hammasi) yoki PDF sahifasini qoʻyadi. {{cmd:SCANSCALE}} varaqni ikki tanlangan nuqta va haqiqiy masofadan masshtablaydi. {{cmd:SCANALIGN}} uni ikki nuqtaga siljitadi va buradi (`Scale the sheet to fit` Ha/Yoʻq). {{cmd:SCANDESKEW}} varaqning uzun chiziqlari burchagini koʻrsatadi va siz `Accept` yoki `Value` bergach uni bir marta buradi. {{cmd:SCANCLEAN}} uni qora-oq qiladi (`Threshold` Auto/Adaptive/Level, `Specks`) va `Run`. {{cmd:SCANCROP}} oynani saqlaydi. {{cmd:SCANERASE}} `Rectangle`, `Polygon` yoki `Lasso` ni oʻchiradi. {{cmd:SCANTRACE}} chiziq va yoylarni yangi qatlamga chizadi (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) va topganini hamda raster sifatida qoldirganini xabar qiladi. {{cmd:SCANINFO}} asl faylni va qadamlarni roʻyxatlaydi. {{cmd:RASTERSNAP}} skanerlangan varaqlar chiziqlariga tutishni On yoki Off qiladi. Qarang: Skanerlangan chizmalar va iz olish mavzusi.

### REGEN va REGENALL

Taxalluslari: `RE` {{cmd:REGEN}} uchun, `REA` {{cmd:REGENALL}} uchun. Ekranda chizilgan narsani chizmadan qayta tiklaydi: {{cmd:REGEN}} siz qarayotgan yorliqni (varaqda, uning kesimlari koʻrsatadigan model ham), {{cmd:REGENALL}} har bir yorliqni, har bir ekranni boʻlish oynasini va har bir ochiq chizmani. Skript yoki juda katta oʻzgarishdan keyin rasm eskirgan boʻlsa yoki yordamchi chizmani tahrir qilgan boʻlsa, ulardan foydalaning; chizmaning oʻzi tegilmaydi, shuning uchun ortga qaytariladigan narsa yoʻq.

### NAMEDVIEW

Taxalluslari: `NV`, `VIEWS`. `Variantni kiriting [?/Tiklash/Saqlash/Oyna/Oʻchirish] <Tiklash>`, keyin koʻrinishning nomi. `S` ekrandagi koʻrinishni saqlaydi, `W` siz tanlagan oynani, `R` saqlangan koʻrinishni koʻrsatadi, `D` birini oʻchiradi, `?` bu yorliqning koʻrinishlarini roʻyxatlaydi. Mavjud nom ostida saqlash uni almashtiradi; har bir oʻzgarish bitta ortga qaytarish qadami. Koʻrinishlar saqlangan yorliqqa tegishli. DWG va DXF fayllari ularni saqlaydi (VIEW jadvali); varaq koʻrinishlari birinchi varaqqa qaytadi, chunki fayl qaysi biri ekanini aytmaydi.

### UNDO va REDO

Taxalluslari: `U` {{cmd:UNDO}} uchun; {{cmd:REDO}} da yoʻq. Shuningdek {{key:Mod+Z}} va {{key:Mod+Y}}.

### LAYER

Taxalluslari: `LA`. {{ui:Layers}} paneliga oʻtadi.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Yangi obyektlar uchun chiziq turini kiriting` — `ByLayer`, `ByBlock` yoki nom (`?` ularni roʻyxatlaydi: Continuous, chizmaning oʻz turlari va DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE, ularning `2` (yarim) va `X2` (ikki baravar) oʻlchamlari bilan). {{cmd:LWEIGHT}} (`LW`): yangi obyektlar uchun chiziq qalinligi mm da, yoki `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): chizmaning chiziq turi masshtabi (ortga qaytariladigan). {{cmd:LWDISPLAY}} (`LWT`): `Chiziq qalinligini koʻrsatish [ON/OFF]` — holat satridagi {{ui:LWT}} tugmasi bilan bir xil. Qarang: [Chiziq qalinligi va chiziq turlari](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Nomi oʻzgartiriladigan obyekt turini kiriting [LAyer/Block]`, `Eski nomni kiriting`, keyin yangi nom; obyektlar yoki havolalar ergashadi. {{cmd:LAYMRG}}: `Birlashtirish uchun qatlamdagi obyektni tanlang yoki [Nom]` Enter bosilguncha, keyin `Maqsadli qatlamdagi obyektni tanlang yoki [Nom]` va `Y`. {{cmd:LAYDEL}}: `Oʻchiriladigan qatlamdagi obyektni tanlang yoki [Nom]`, keyin `Y`: qatlam va unda bor hamma obyekt ketadi (0 qatlam, DEFPOINTS yoki joriy qatlam emas). Har biri bitta ortga qaytarish qadami. Qarang: [Qatlamlar bilan chizmani tartibga solish](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Qatlamlar obyektlarni tanlash orqali; shuningdek {{ui:Layers}} panelining {{ui:Tools}} menyusida. {{cmd:LAYISO}}: `Ajratiladigan qatlam(lar)dagi obyektlarni tanlang`, keyin {{key:Enter}}: boshqa barcha qatlamlar oʻchadi. {{cmd:LAYUNISO}} ularni qaytadan yoqadi. {{cmd:LAYOFF}} va {{cmd:LAYFRZ}}: `Oʻchiriladigan (yoki muzlatiladigan) qatlamdagi obyektni tanlang`, qayta-qayta; `U` oxirgisini olib tashlaydi, {{key:Enter}} tugatadi. {{cmd:LAYMCUR}}: `Joriy boʻladigan qatlamdagi obyektni tanlang`. {{cmd:LAYON}} hamma qatlamni yoqadi, {{cmd:LAYTHW}} hamma qatlamni eritadi. Har bir buyruq bitta ortga qaytarish qadami. Qarang: [Qatlamlar bilan chizmani tartibga solish](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} boʻsh chizma boshlaydi va {{cmd:OPEN}} DWG yoki DXF ochadi, har biri chizma ustidagi oʻz yorligʻida (hech narsa oʻzgartirilmagan yangi chizma oʻrniga yangi yorliq ochilmaydi). Saqlanmagan oʻzgarishlari bor yorliqni yopish avval soʻraydi. Qarang: [Ekranni boʻlish](topic:split-screen).

{{cmd:SAVE}} (taxallusi `QSAVE`, shuningdek {{key:Mod+S}}) chizmaning formatida nusxa yuklab oladi: DWG agar DWG dan ochilgan boʻlsa, DXF agar DXF dan boʻlsa. Yangi chizma bu brauzerda Boshqacha saqlash da oxirgi tanlangan formatni ishlatadi, aks holda DWG.

{{cmd:SAVEAS}} (shuningdek {{key:Mod+Shift+S}}) {{ui:Save a copy as}} dialogini ochadi: {{ui:DWG}} (va uning {{ui:Version}}) yoki {{ui:DXF R12}} yoki {{ui:DXF 2000}} ni tanlang, keyin {{ui:Save}}. Tanlov shu chizma uchun va brauzerdagi yangi chizmalar uchun qoladi.

{{cmd:DXFOUT}} har doim DXF R12 nusxasini yuklab oladi, {{cmd:SAVE}} ishlatadigan formatni oʻzgartirmasdan.

Qarang: [Fayllar: nima ochiladi, nima saqlanadi](topic:files#saving).

### TOUR

Taxalluslari: `TUTORIAL`. Olti bosqichli birinchi chizma sayohatini qayta boshlaydi. Qarang: [Boshlash](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Taxalluslari: `TBDOCK`. `Asboblar paneli joylashuvi [Yuqori/Pastki/Chap/Oʻng]`. Qarang: [Sozlamalar](topic:settings#toolbar-position).

### COMMANDLINE

Taxalluslari: `CMDLINE`. `Buyruq satri [Pastda joylashgan/Suzuvchi/Bir qator/Koʻrsatiladigan tarix qatorlari/Buyruqlar tarixi (F2)]`: buyruq satrini joylashtiradi yoki suzdiradi, uni bir qatorga aylantiradi, koʻrsatiladigan tarix qatorlari sonini (0 dan 12 gacha) soʻraydi, yoki tarixni ochadi. Qarang: [Sozlamalar](topic:settings#command-line).

### TOPAREA

`Yuqori maydon [Standart/Ixcham]`: chizma ustidagi panellar avvalgidek yoki ixcham. Qarang: [Sozlamalar](topic:settings#top-area).

### POLARANG

`Qutb burchagi qadamini gradusda kiriting <90>`: {{ui:Polar}} kuzatuv chiziqlari tekislanadigan qadam (0 dan katta, 180 gacha). Ushbu brauzerda saqlanadi.

### UNITS

Taxalluslari: `UN`. Uzunliklar qanday yoziladi va kiritiladi.

- `Uzunlik formatini kiriting [Ilmiy/Oʻnli/Muhandislik/Arxitektura/Kasr] <joriy>`
- Arxitektura va Kasr: `Koʻrsatiladigan eng kichik kasrning maxrajini kiriting (1, 2, 4, 8, 16, 32, 64, 128 yoki 256)`. Qolganlari: `Oʻnli kasr raqamlari sonini kiriting (0 dan 8 gacha)`.

Yangi oʻlchamlar unga ergashadi. Bitta ortga qaytarish qadami. {{ui:Current settings}} dagi {{ui:Length format}} va {{ui:Precision}} bilan bir xil; qarang: [Fut va dyuym hamda kasrlar](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Taxalluslari: `GDS`. IC topologiyasini koʻrish (GDSII oqim fayli): laboratoriya tajribasi, faqat koʻrish va oʻlchash uchun.

- Fayl tanlagich `.gds` faylni oladi; bir nechta yuqori hujayra boʻlsa, `Chizish uchun yuqori hujayrani kiriting`.
- Har bir qatlam va maʼlumot turi chizma qatlamiga aylanadi (`GDS 1`, `GDS 2/5`), havolalar va massivlar tekis joylashtiriladi, faylning foydalanuvchi birligida (odatda mikrometr). Bitta ortga qaytarish qadami. Hech narsa simulyatsiya qilinmaydi yoki tekshirilmaydi va fayl qayta yozilmaydi.

### DIAGRAM

Taxalluslari: `TEXTDIAGRAM`, `T2D`. Matndan diagramma.

- Quti matnni oladi (yoki buyruq satrida `;` bilan ajratilgan bitta qator): Mermaid oqim diagrammasi, PlantUML komponent diagrammasi, D2 yoki “qayerdan-qayergacha” roʻyxati.
- `Diagrammaning yuqori chap burchagini koʻrsating`, keyin `Matn balandligini koʻrsating`.

Bloklar va bogʻlovchilar `Diagram` qatlamidagi oddiy obyektlar, tugaganda tanlangan. Bitta ortga qaytarish qadami. Qarang: [Matndan diagramma chizish](topic:text-to-diagram).

### OLELIST

Taxalluslari: `OLES`. DWG olib yuradigan va CadCraft oʻzi joylashtira olmaydigan OLE obyektlari.

- Har birini roʻyxatlaydi: raqami, turi, oʻlchami, rasmini saqlaganmi.
- `Variantni kiriting [Joylashtirish/eXit] <eXit>`: Joylashtirish raqamni, pastki chap burchakni va kenglikni soʻraydi, va rasmi bilan ramka chizadi. Bitta ortga qaytarish qadami; saqlangan obyekt oʻzgarmaydi. Qarang: [Rasmlar](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Taxalluslari: `SHX`. Sizning oʻz SHX shriftlaringiz.

- `SHX shrift variantini kiriting [Jild/Fayllar/Roʻyxat/Olib tashlash/Teskari/Tozalash] <Roʻyxat>`

{{ui:Folder}} jilddagi har bir `.shx` ni oʻqiydi (CadCraft Studio; har boshlanishda qayta), {{ui:Files}} tanlangan fayllarni oladi (brauzer), {{ui:Reverse}} bitta shrift harflarini oxiridan boshlab joylashtiradi. Yuklangan shriftni nomlagan matn uslublari unda chizadi. Qarang: [Matnni oʻz SHX shriftlaringizda chizish](topic:shx-fonts).

### LIMITS

Chizma qanchalik katta boʻlishi kerakligi.

- `Pastki chap burchakni koʻrsating yoki [ON/OFF] <joriy>`: nuqta, `ON` yoki `OFF`.
- `Yuqori oʻng burchakni koʻrsating <joriy>`.

Toʻr chegaralarni toʻldiradi, {{cmd:ZOOM}} Hammasi ularni koʻrsatadi, ular ON boʻlganda tashqaridagi nuqta rad etiladi (`**Outside limits`). Bitta ortga qaytarish qadami; DWG va DXF da saqlanadi. Qarang: [Chizma chegaralarini belgilash](topic:drawing-limits).

### AUNITS

Taxalluslari: `ANGUNITS`. Burchaklar qanday koʻrsatiladi va kiritiladi.

- `Burchak formatini kiriting [Oʻnli gradus/Gradus-daqiqa-soniya/Geodezik azimutlar] <joriy>`
- `Oʻnli kasr raqamlari sonini kiriting (0 dan 8 gacha)`, yoki qolgan ikkitasi uchun `Aniqlikni kiriting` (0 gradus, 2 daqiqa, 4 soniya, soniyaning 5 dan 8 gacha kasri).

Bitta ortga qaytarish qadami; DWG va DXF da saqlanadi. {{ui:Current settings}} dagi {{ui:Angle format}} bilan bir xil. Qarang: [Azimutlar va burchaklarni kiritish va koʻrsatish](topic:bearings-and-angles).

### APPLOAD

Taxalluslari: `AP`; yoki {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. {{ui:Load applications}} dialogi: `.lsp` dasturlarini va `.dcl` dialog fayllarini yuklash, ularni yechish, tarixdan qayta yuklash va Startup Suite. Dasturning `(defun c:NAME …)` buyruqlari boshqa har qanday buyruq kabi ishlaydi. Qarang: [Ilovalarni yuklash](topic:load-applications) va [LISP dasturlarini ishga tushirish](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (yoki {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) taxalluslar faylingizni (`ALIAS, *COMMAND` qatorlari) ochadi; {{ui:Save}} uni qoʻllaydi. {{cmd:REINIT}} uni yana qoʻllaydi. Qarang: [Buyruq taxalluslarini tahrirlash](topic:command-aliases).

### LISPEDIT

Taxalluslari: `VLIDE`; yoki {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. LISP muharririni ochadi, chizma yonida ochiq turadigan oyna.

- Matn: qator raqamlari, kursordagi qavsning juftligi belgilanadi (yoʻq boʻlsa qizil), {{key:Enter}} yangi qatorni ochiq qavs ostiga suradi, {{key:Tab}} ikki boʻshliq yozadi, {{key:Esc}} matndan chiqadi.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): har bir shaklni oʻqiydi, {{cmd:APPLOAD}} faylni oʻqiganidek, va uning `c:` buyruqlarini yaratadi. Fayl {{cmd:APPLOAD}} roʻyxatida koʻrinadi.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): tanlangan shakllarni yoki kursor turgan shaklni hisoblaydi.
- {{ui:Stop}}: ishlayotgan dasturni toʻxtatadi.
- {{ui:Console}}: dastur chiqargan narsa va har bir xato qatori bilan; xatoni bosing, oʻsha joyga oʻtadi. Matn bir vaqtda bitta yuqori darajadagi shakl boʻyicha bajariladi, shuning uchun qator shaklniki, yoki undan ichkarida xato nomlagan funksiyani chaqiradigan qator.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): `.lsp` fayl. Matn shu brauzerda ham saqlanadi, shuning uchun oynani yopish uni yoʻqotmaydi.
- Matn yonida: dastur taʼriflagan funksiyalar, u chaqiradigan, lekin bu LISP da hali yoʻq funksiyalar, u chaqiradigan, lekin unda taʼriflanmagan va ichki boʻlmagan funksiyalar, va nima qurilgani va nima yoʻqligining toʻliq roʻyxatlari.

Qavsi hech qachon yopilmagan yoki qatori hech qachon tugamagan matn bajarilmaydi: qator nomlanadi. Qadamma-qadam debugger, toʻxtash nuqtalari yoki kuzatuv oynasi yoʻq. Qarang: [LISP dasturlarini ishga tushirish](topic:run-lisp).

### HELP

Taxalluslari: `?`. Har bir buyruqni, uning taxalluslarini va bir qatorli tavsifini buyruq satri tarixida chiqaradi. Bu yordamni ochmaydi: uning uchun {{key:F1}} tugmasini bosing yoki {{ui:Help}} ni bosing.

## Obyektlarni tanlash soʻrovi

Har qanday `Obyektlarni tanlang` soʻrovida: obyektlarni bosing, oynalarni (chapdan oʻngga) va kesishuvlarni (oʻngdan chapga) ikki bosish bilan torting yoki lasso chizing va sudrang ({{key:Space}} sudrash davomida: oyna, kesishuv, to'siq), olib tashlash uchun {{key:Shift}}+bosish, tugatish uchun {{key:Enter}}. Shuningdek `ALL` (hammasi), `L` (oxirgi obyekt), `P` (Oldingi: oxirgi buyruq ishlatgan narsa), `F` (Toʻsiq: nuqtalar chizigʻi kesib oʻtgan obyektlar; `U` nuqtani olib tashlaydi), `W` (Oyna), `C` (Kesishuv), `R` (Olib tashlash rejimi: tanlovlar obyektlarni olib tashlaydi; soʻrov `Obyektlarni olib tashlang` deydi) va `A` (Yana qoʻshish) yozishingiz mumkin. `?` ularni roʻyxatlaydi. Ular soʻrovda koʻrsatilmaydi. Bir-biriga tegib turgan obyektlar ustida {{key:Tab}} keyingisini ajratadi; uni tanlash uchun bosing. Qarang: [Obyektlarni tanlash](topic:select-objects).

### ACCESS

Taxallusi: `AX`. Koʻzsiz chizish. {{cmd:ACCESS}} Access ni yoqadi yoki oʻchiradi (`On`, `Off`) va tutish tovushlarini (`Sound`) va ovozli buyruqlarni (`Voice`) almashtiradi; avval holatini aytadi. Access yoqilgan boʻlsa, har bir buyruq va natija ekran oʻqigich orqali aytiladi va chizish maydonida klaviatura kursori bor. "Koʻzsiz chizish" yordam mavzusida tugmalar bor.

### DESCRIBE

Taxallusi: `DESC`. Chizmada nima borligini ayting: nechta obyekt, qanday turdagi, qanchalik katta, nechta qatlam, nima tanlangan. Faqat oʻqiydi; hech narsani oʻzgartirmaydi.

### WHEREAMI

Taxallusi: `WHERE`. Kursor qayerdaligini chizma birliklarida ayting.

### NEARBY

Kursorga eng yaqin turgan narsalarni ayting, eng yaqinidan boshlab, har biri masofasi va tomoni bilan.

### SAYSEL

Tanlangan narsani ayting, har bir obyekt uchun bitta gap bilan (chiziq uzunligi, uchlari va burchagi; aylana radiusi va markazi; matn yozilganidek).

### VOICE

Ovozli buyruqlarni yoqish yoki oʻchirish. Ular shu kompyuterda tanilanadi; brauzer buni qila olmasa, ovoz Sozlamalarda brauzerning onlayn xizmatini tanlamaguningizcha oʻchiq qoladi.

### TOUCHCROSSHAIR

Taxallusi: `TCX`. Barmoq bilan chizish uchun ofset koʻrsatkich, shunda barmoq uchi tanlayotgan nuqtani yopib qolmaydi. Yoqilgan boʻlganda chizmadagi bitta barmoq tanlamaydi: barmoqning ustida va bir tomonida turgan koʻrsatkichni siljitadi. Obyekt tutishi va kuzatuv koʻrsatkichga ergashadi. Barmoqni koʻtarish hech narsa tanlamaydi va koʻrsatkichni oʻz joyida qoldiradi. Tanlash uchun chizmaning burchagidagi {{ui:Click}} tugmasini bosing, yoki ikkinchi barmoq bilan chizmaning istalgan joyiga teging. Boshqa barmoqni siljitayotganda {{ui:Click}} ni ushlab turing (tanlash oynasi, lasso, dastak). Barmoq qimirlamasdan ushlab turilsa yoki {{ui:Enter}} tugmasi bosilsa, bu Enter. Ikki barmoq avvalgidek siljitadi va kattalashtiradi. Pastki chekka va uzoq yon chekka yaqinida koʻrsatkich barmoqqa yaqinlashadi, shuning uchun chizmaning har bir qismiga yetish mumkin. Qalam va sichqoncha har doim toʻgʻridan-toʻgʻri tanlaydi.

{{cmd:TOUCHCROSSHAIR}} holatini aytadi va `ON`, `OFF`, `Auto` (faqat barmoq yagona koʻrsatkich boʻlgan joyda yoqiladi, shuning uchun sichqonchali kompyuterda oʻchiq), `Distance` (koʻrsatkich barmoqdan qanchalik uzoqda, 24 dan 240 pikselgacha) yoki `Side` (`Left`: yuqoriga va chapga, oʻng qoʻl uchun; `Right` chap qoʻl uchun; tugmalar boshqa burchakka oʻtadi) soʻraydi. Xuddi shu tanlovlar Sozlamalar › CadCraft da, va sensorli ekranli qurilmada holat satrida {{ui:Offset crosshair}} kaliti bor. Tanlovlar shu brauzerda saqlanadi.

### WHOHAS

Chizmani kim ochganini aytadi. Kompyuterdagi CadCraft Studio da DWG yoki DXF ochilganda uning yonida kichik qulf fayli yoziladi (`Plan.dwg.cclock`: kim, qachondan, qaysi versiya), chizma ochiq turgan har daqiqada yangilanadi va chizma yopilganda oʻchiriladi. Boshqa odam ochgan chizmani ochish kim va qachondan ekanini aytadi va {{ui:Open read-only}} (keyin saqlashda yangi nom soʻraladi), {{ui:Open anyway}} (boshqa odamga uning keyingi yangilanishida xabar beriladi) yoki {{ui:Cancel}} ni taklif qiladi. Boshqa odam ochgan faylning ustiga saqlash avval soʻraydi. Besh daqiqa yangilanmagan qulf eskirgan deb aytiladi: boshqa nusxa saqlamasdan yopilgan yoki kompyuter uyquda.

{{cmd:WHOHAS}} `Current` (ochiq chizma), `File` (bittasini tanlang), `FOlder` (jildni tanlang: undagi ochiq joyda ochiq bo'lgan har bir chizma roʻyxatlanadi), `Path` (toʻliq yoʻlni yozing) yoki `Name` (boshqalar koʻradigan nom; hisobga kirgan boʻlsangiz hisob nomingiz) soʻraydi. Studio faqat siz tanlagan jildlarga kira oladi: hech qachon tanlanmagan jilddan ochilgan chizma uchun u bir marta chizmani ochiq deb belgilay olmasligini aytadi; `FOlder` jildni tanlaydi va shundan keyin qulflar shu yerda ishlaydi. Qulf odamlar uchun eslatma, toʻsiq emas: boshqa dastur hanuz faylni yozishi mumkin. Brauzerda qidiriladigan jildlar yoʻq va buyruq buni aytadi.

### OVERKILL

Takroriy obyektlarni oʻchiradi va bir-biriga tegib turgan chiziq va yoylarni tartibga soladi, ikki marta chizilgan chiziqlar bilan kelgan chizmalar uchun. `Tozalanadigan obyektlarni tanlang`, {{key:Enter}}, keyin koʻrsatilgan sozlamalar bilan tozalash uchun yana {{key:Enter}}, yoki avval bittasini oʻzgartiring:

- `Tolerance`: ikki koordinata bir xil deb hisoblanishi uchun qanchalik yaqin boʻlishi kerak (boshida 0.000001; 0 aniq bir xil degani).
- `Ignore`: boshqa jihatdan bir xil ikki obyekt orasida farq qilishi mumkin boʻlgan xossalar. Uni yoqish uchun nom yozing: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, yoki `None` / `All`. Tugagach {{key:Enter}}.
- `Overlap`: yoqilgan yoki oʻchirilgan. Yoqilganda bitta toʻgʻri chiziqda bir-biriga tegib turgan chiziqlar bitta chiziq boʻladi (boshqa chiziq ichida yotgan chiziq shunchaki oʻchiriladi), va bitta aylanadagi bir-biriga tegib turgan yoylar bitta yoy boʻladi; toʻliq aylanani yopadigan yoylar aylanaga aylanadi, aylanada yotgan yoy oʻchiriladi.
- `Ends`: yoqilgan yoki oʻchirilgan. Yoqilganda bitta toʻgʻri chiziqdagi va bitta aylanadagi yoylar faqat uchi bilan tegib turgan boʻlsa, bitta boʻlakka aylanadi.

Har bir obyekt turi takroriylikka tekshiriladi: ikki obyekt takroriy hisoblanadi, agar ularning geometriyasi tolerantlik doirasida bir xil boʻlsa va qatlami, rangi, chiziq turi, chiziq turi masshtabi, chiziq qalinligi, qalinligi, shaffofligi va balandligi mos kelsa (siz eʼtiborsiz qoldirganlardan tashqari). Chiziqlar va ochiq polichiziqlar teskari chizilgan boʻlsa ham mos keladi. Birinchi obyekt chizish tartibida qoladi va oʻz xossalarini saqlaydi. Buyruq nechta obyekt tekshirilganini va oʻchirilganini xabar qiladi: takroriylar, birlashtirilgan qoplanuvchi boʻlaklar, uchma-uchi ulangan boʻlaklar. Bitta {{cmd:UNDO}} hammasini qaytaradi. Sozlamalar chizma oynasini yopguncha amal qiladi.

U tegmaydi: qulflangan qatlamdagi obyektlar va yashirin obyektlar. U balandligi (Z) bor chiziqlarni birlashtirmaydi (ularning aniq takrorlari baribir ketadi), va polichiziq ichidagi kesmalarga tegmaydi (ular yupqalashtirilmaydi), polichiziq kesmasi ustida yotgan chiziqqa va teskari chizilgan yopiq polichiziqqa ham.

### DRAWORDER

Qaysi obyektlar oldinda chizilishini oʻzgartiradi. `Tartibini oʻzgartiradigan obyektlarni tanlang`, {{key:Enter}}, keyin `Obyektlar ustida`, `Obyektlar ostida`, `Old` yoki `Orqa` ({{key:Enter}} = `Orqa`). `Obyektlar ustida` va `Obyektlar ostida` mos yozuv obyektlarini soʻraydi: tanlov ulardan eng oldinggisining bevosita oldiga, yoki eng orqasining bevosita orqasiga boradi. Tanlangan obyektlar oʻzaro tartibini saqlaydi. Bitta ortga qaytarish qadami. Tartib DWG va DXF da chizma bilan saqlanadi, bu yerda u obyektlar yozilgan tartib.

Ekranda CadCraft toʻldirilgan maydonlarni (qattiq shtrixlar, keng polichiziqlar, niqoblar) avval chizadi, keyin chiziqlarni, keyin matnni, shuning uchun matn doim toʻldirish ustida oʻqiladi; chizish tartibi toʻldirilgan obyektlar va rasmlar orasida koʻrinadi. Faylni ochadigan boshqa dasturlar har bir obyektni saqlangan tartibda chizadi.

### TEXTTOFRONT

Matn, oʻlchamlar va yetakchilarni ochiq fazodagi hamma narsadan oldinga chiqaradi: `Text`, `Dimensions`, `Leaders` yoki `All` ({{key:Enter}} = `All`). Bitta ortga qaytarish qadami. Ularda hech narsa yoʻq boʻlsa yoki allaqachon oldinda boʻlsa, buni aytadi.

### HATCHTOBACK

Ochiq fazodagi har bir shtrixlashni boshqa hamma narsaning orqasiga yuboradi, shuning uchun toʻldirishlar saqlangan faylda chiziqlar va matnni yopmaydi. Hech qanday soʻrov yoʻq. Bitta ortga qaytarish qadami.

### ISOLATEOBJECTS

Taxallusi: `ISOLATE`. Faqat tanlangan obyektlarni koʻrsatadi: ochiq fazodagi boshqa hamma narsa {{cmd:UNISOLATEOBJECTS}} gacha koʻrinmaydi. {{cmd:LAYISO}} dan farqli oʻlaroq, u siz tanlagan obyektlar ustida ishlaydi, qatlamlari qanday boʻlishidan qat'i nazar, va hech qanday qatlamni oʻzgartirmaydi. Yashirin obyektlar chizilmaydi, tanlanmaydi, tutilmaydi, ularga yaqinlashilmaydi va chop etilmaydi, va `ALL` qabul qiladigan buyruqlar ularni oʻtkazib yuboradi. Obyektlar ajratilgan paytda chizganingiz odatdagidek koʻrinadi.

Bu faqat seans uchun: chizma bilan hech narsa saqlanmaydi, ortga qaytarish qadami emas, va chizmani qayta ochish hamma narsani koʻrsatadi. Obyektlar yashirin ekan, holat satrida ularning soni bilan tugma koʻrinadi; uni bosib ularni qayta koʻrsating.

### HIDEOBJECTS

Tanlangan obyektlarni {{cmd:UNISOLATEOBJECTS}} gacha yashiradi. {{cmd:ISOLATEOBJECTS}} bilan bir xil qoidalar: faqat seans uchun, saqlanmaydi, ortga qaytarish qadami emas.

### UNISOLATEOBJECTS

Taxalluslari: `UNISOLATE`, `UNHIDE`. {{cmd:ISOLATEOBJECTS}} yoki {{cmd:HIDEOBJECTS}} yashirgan barcha obyektlarni yana koʻrsatadi va nechtasi qaytganini aytadi.

### LAYLOCKFADE

Qulflangan qatlamlardagi obyektlar qanday koʻrinishini va bosish ularga yetib-yetmasligini belgilaydi. Hozirgi holatni aytadi, keyin qabul qiladi:

- 0 dan 90 gacha son: foizdagi oʻchish miqdori (boshida 50). 0 oʻchishni oʻchiradi.
- `ON` yoki `OFF`: oʻchishni yoqadi yoki oʻchiradi, miqdorni saqlab qoladi.
- `Pick`, keyin `Yes` yoki `No`: buyruq ishlamayotganda bosish qulflangan qatlamdagi obyektlarni tanlashi mumkinmi? `No` (standart): ularni umuman tanlab boʻlmaydi. `Yes`: bosish yoki oyna ularni tanlaydi, shunda {{ui:Properties}} ularni koʻrsata oladi; ular hali ham oʻzgartirilmaydi, va buyruqning oʻz `Select objects` soʻrovi ularni hech qachon olmaydi.

Tutish obyektlari har holda qulflangan qatlamdagi obyektlarni topadi. Chop etishlar hech qachon oʻchmaydi. Ikkala sozlama ham sizniki, chizmaniki emas, va {{ui:Settings}} da {{ui:Locked layers}} ostida ham bor.

### BURST

Blok havolalarini portlatadi va ularning atributlari aytganini saqlaydi. `Portlatiladigan blok havolalarini tanlang`, {{key:Enter}}: har bir havola blokning obyektlari bilan almashadi, va har bir koʻrinadigan atributning qiymati oʻsha atributning oʻz qatlamidagi oddiy matnga aylanadi (0 qatlamdagi atribut havolaning qatlamiga tushadi, blokning boshqa 0 qatlamdagi obyektlari kabi). Koʻrinmas atributlar tashlab yuboriladi. Blok ichidagi blok blok havolasi boʻlib qoladi. Bitta ortga qaytarish qadami; nechta havola portlatilgani va nechta atribut qiymati matnga aylangani xabar qilinadi.

Bogʻlangan chizmani nomi bilan rad etadi (avval uni bogʻlang yoki {{cmd:NCOPY}} bilan undan nusxa oling), va tanlangan boshqa obyektlarga tegmaydi. Blok havolalari uchun {{cmd:EXPLODE}} xuddi shu obyektlarni beradi; {{cmd:BURST}} faqat blok havolalarini oladi va atribut matnini sanaydi.

### TXT2MTXT

Taxallusi: `T2M`. Bir qatorli matnlarni bitta xatboshi matniga birlashtiradi. `Birlashtiriladigan bir qatorli matnni tanlang`, {{key:Enter}}, keyin `Paragraph` (qatorlar birga oqadi va eng keng qator kengligida oʻraladi) yoki `Lines` (har bir matn oʻz qatori boʻlib qoladi); {{key:Enter}} oxirgi ishlatilganini oladi. Qatorlar yuqoridan pastga, keyin chapdan oʻngga, yuqori matnning yoʻnalishi boʻylab tartiblanadi. Xatboshi yuqori matnning yuqori chap burchagidan osiladi va uning balandligi, burilishi, uslubi, qatlami va rangini oladi. Bitta ortga qaytarish qadami.

Xatboshi matni boʻlgan matn, boʻsh matn va tanlovdagi boshqa obyektlar oʻz holicha qoladi va buyruq ularning sonini aytadi.

### NCOPY

Blok havolasi yoki bogʻlangan chizmadan obyektlarni hech narsani portlatmasdan chizmaga nusxalaydi. `Blok havolasi yoki bogʻlangan chizma ichidagi obyektni tanlang`: bosishga eng yaqin obyekt qayerda koʻrinsa oʻsha yerga nusxalanadi, qancha chuqurlikdagi blokda boʻlishidan qat'i nazar; yana tanlang, keyin {{key:Enter}}. Keyin `Nusxalarni siljitish uchun asosiy nuqta`: {{key:Enter}} ularni joyida qoldiradi, yoki asosiy nuqta va ikkinchi nuqta bering. Butun buyruq bitta ortga qaytarish qadami.

Nusxa koʻrinadigan qatlamni oladi: blok ichidagi 0 qatlamdagi obyekt u joylashgan havolaning qatlamiga tushadi, va ByBlock rang shu havolaning rangiga aylanadi. Bogʻlangan chizmadan `Plan|Walls` qatlami `Plan$0$Walls` (bogʻlanish bergan nom) boʻladi, bogʻlangan qatlamning rangi, chiziq turi va chiziq qalinligi bilan yaratiladi. Atribut qiymati matn sifatida nusxalanadi. Qulflangan qatlamdagi blok havolalarini tanlab boʻlmaydi.

### FLATTEN

Tanlangan obyektlarning balandligini (Z) va qalinligini 0 ga qoʻyadi. `Tekislanadigan obyektlarni tanlang`, {{key:Enter}}. U tanlov ishlatadigan blok taʼriflari ichidagi obyektlarni ham tekislaydi (va shu bloklar ichidagilarni ham), shuning uchun oʻsha bloklarga har bir havola oʻzgaradi; bogʻlangan chizmalar oʻz holicha qoladi. Bitta ortga qaytarish qadami; nechta obyekt oʻzgarganini xabar qiladi va hech birida balandlik yoki qalinlik boʻlmasa buni aytadi.

CadCraft 2D chizmada uchinchi oʻlchamdan nimani saqlashi: aylana, yoy, ellips, nuqta, matn, blok havolalari, shtrixlash, yetakchi va polichiziqlarda balandlik (ularning elevatsiyasi), chiziqning har bir uchida balandlik, va chiziq, aylana, yoy, polichiziq, nuqta va matnda qalinlik, fayl ega boʻlgani kabi. {{cmd:FLATTEN}} aynan shularni tozalaydi. U 3D yorliqdagi 3D modelga, 3D yuzlar yoki jismlarga tegmaydi, va qiya tekislikda chizilgan obyekt fayl ochilganda chizma tekisligiga keltirilgan.

### BREAKLINE

Qisqartirilgan koʻrinish uchun uzish belgisi bilan chiziq chizadi. Joriy oʻlchamni va choʻzishni aytadi, keyin `First point of the break line` (yoki avval ularni oʻzgartirish uchun `Size` / `Extension`), `Second point` va `Uzish belgisi qayerda turadi`: chiziq boʻylab bosing yoki oʻrtasi uchun {{key:Enter}}. Natija joriy qatlamdagi bitta polichiziq: chiziq, har bir nuqtadan choʻzish qadar oʻtadigan, va oʻlchami kabi baland, yarmi kabi uzun Z shaklidagi chiziqli.

`Size` va `Extension` sizning sozlamalaringiz sifatida eslab qolinadi (oʻlcham boshida oʻlchov matni balandligining ikki baravari va oʻlcham masshtabi; choʻzish oʻlchamning yarmi). {{key:Enter}} buyruqni takrorlaydi.

### AUDIT

Ochiq chizmani buzilish uchun tekshiradi va tuzatadi. {{cmd:AUDIT}} modeldagi, varaqlardagi va bloklar ichidagi har bir obyektni hamda qatlamlar jadvalini koʻradi va topilganini turi boʻyicha roʻyxatlaydi:

- chekli boʻlmagan yoki behuda katta raqamlar;
- oʻlchamsiz obyektlar: uzunligi yoʻq chiziq, radiusi yoʻq aylana, bir nuqtali polichiziq, harfsiz yoki balandliksiz matn, nol masshtabli blok havolasi;
- chizmada yoʻq qatlamdagi obyektlar; yoʻq blokka havolalar; chizmada yoʻq matn va oʻlcham uslubi nomlari va chiziq turi nomlari;
- oʻzini oʻz ichiga oladigan bloklar, toʻgʻridan-toʻgʻri yoki boshqa bloklar orqali;
- bir xil id, kalit yoki fayl tutqichiga ega obyektlar;
- oʻlchanadigan nuqtalari yoʻq oʻlchamlar va chegarasi yopiq kontur boʻlmagan shtrixlashlar.

Keyin `Tuzatamizmi? [Ha/Yoʻq]` soʻraydi. `Yoʻq` hech narsani oʻzgartirmaydi. `Ha` hamma narsani bitta ortga qaytarish qadamida tuzatadi: chizib boʻlmaydigan narsalar olib tashlanadi (yomon raqamlar, oʻlchamsiz, yoʻq blok, buzilgan oʻlcham, foydali chegarasi yoʻq shtrixlash, blоklar doirasini yopadigan havola); yoʻq qatlam yaratiladi; noma'lum uslub va chiziq turi nomlari standartga qaytadi; umumiy kalit almashtiriladi. Nechta obyekt olib tashlangani va nechtasi tuzatilgani chiqariladi. Bir xil topilmalar Muammolar panelida ham koʻrinadi, har birida oʻz {{ui:Repair}} tugmasi bilan.

U hech narsani rad etmaydi, lekin faqat CadCraft oʻzi chizadigan narsalarni tekshiradi: boshqa dasturlar uchun saqlangan maʼlumotlar (3D jismlar, OLE obyektlari) ochilmaydi.

### RECOVER

Buzilgan DXF yoki DWG ni ochadi. {{cmd:RECOVER}} faylni soʻraydi, rad etish oʻrniga oʻqilishi mumkin boʻlganni oʻqiydi, oʻtkazib yuborilgan yoki taxmin qilingan narsalarni roʻyxatlaydi, keyin {{cmd:AUDIT}} `Ha` bilan qilganidek chizmani tekshiradi va tuzatadi.

- DXF: kod va qiymat juftligining qismi boʻlmagan qatorlar juftliklar yana tekislanguncha oʻtkazib yuboriladi; oxiri yoʻq boʻlim yopiladi; qisqa kesilgan fayl kesilgan joygacha oʻqiladi; qisqa kesilgan binar DXF oxirgi toʻliq qiymatigacha oʻqiladi. Boʻlim, blok yoki obyekt hali ham oʻqilmasa, u chiqariladi va nomlanadi, oʻqish undan keyin davom etadi.
- DWG: tekshiruvdan oʻtmagan yoki dekodlanmaydigan obyektlar chiqariladi, yoʻqolgan obyektlar roʻyxati obyekt maʼlumotlarini aylanib chiqish orqali qayta tiklanadi.

Diskdagi fayl oʻzgarmaydi. Tiklangan chizma saqlanmagan holda ochiladi: uni yangi nom bilan saqlang. Undan hech narsa oʻqilmasa, fayl sababi bilan rad etiladi.

### LEGACYTEXT

Eski 8-bitli vyetnam shriftlarida yozilgan matnni Unicode ga aylantiradi. Qisqa nomlar `TEXTTOUNICODE` va `VNTEXT`.

Eski vyetnam chizmalari matnni shriftgina vyetnamcha qiladigan gʻarb belgilari sifatida saqlaydi: ABC shriftlarida TCVN3 matn (`.VnTime`, `.VnArial` va nomi `H` bilan tugaydigan katta harfli shriftlar), va VNI shriftlarida VNI matn (`VNI-Times`). CadCraft bunday matnni chizma ochilishi bilanoq oʻqiydi, uning matn uslubi, obyekt yoki xatboshi matnidagi qismining shrifti boʻyicha; fayl hali ham eski belgilarni saqlaydi.

{{cmd:LEGACYTEXT}} har bir kodlashda nechta matn topilganini aytadi va `Convert … to Unicode?` deb soʻraydi. `Ha` har birini qayta yozadi (model, varaqlar, bloklar, atribut qiymatlari va taʼriflar) va matn uslublariga Unicode shrift beradi (Times New Roman, Arial yoki Courier New eski shriftning turiga qarab), bitta ortga qaytarish qadamida. Xatboshi matni ichidagi formatlash saqlanadi.

Hech qanday matn maʼlum shriftdan foydalanmasa (shrift nomini yoʻqotgan uslub), u `Read selected texts as [Tcvn3/Vni/None]` deb soʻraydi: kodlashni tanlang va matnlarni tanlang. Allaqachon Unicode boʻlgan matnga tegilmaydi. Oʻlcham matnini bekor qilish va multiyetakchi matnlari aylantirilmaydi.
