---
title: Boshqa chizmachilik dasturlaridan kelganlar uchun
summary: Tanish buyruqlar, tugmalar va odatlar CadCraft ga qanday mos kelishi hamda tajribali chizmachilarni adashtiradigan farqlar.
keywords: oʻtish, farqlar, koʻchirish, odatlar, taxalluslar, dinamik kiritish, pickfirst, pickadd, qsave, saveas, boshqacha saqlash, mtext, ctb, qutb kuzatuvi, xref, klaviatura yorliqlari, tanish, copyclip, pasteclip, pasteorig, copybase, buferi
from: b58688e7
---

Agar siz AutoCAD yoki unga oʻxshash modelga asoslangan dasturdan foydalangan boʻlsangiz, bilganlaringizning koʻpi bu yerda ham ishlaydi: buyruq satri, `L`, `C`, `TR` va `O` kabi taxalluslar, takrorlash uchun Enter yoki Space, oyna va kesishma bilan tanlash, F3 da obyekt ilgaklari, F8 da Orto, qatlamlar va viewportlar bilan model fazosi. Bu sahifa toʻgʻridan-toʻgʻri mos keladiganlarni, soʻng odamlarni qoqadigan farqlarni sanab beradi. Hatto tez oʻtib ketsangiz ham, ikkinchi yarmini oʻqing.

## Toʻgʻridan-toʻgʻri mos keladiganlar

| Odat | CadCraft da |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Bir xil buyruqlar, bir xil taxalluslar |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Bir xil |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Bir xil oʻlcham buyruqlari |
| Buyruq satrida yozilgan `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` | Bir xil, yangi oʻlchamlar uchun |
| Blok yaratish uchun `B`, qoʻyish uchun `I`, tozalash uchun `PU` | Bir xil (tozalash faqat ishlatilmagan bloklarni oʻchiradi) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` soʻng `E` yoki `W` | Bir xil |
| Skriptdan yoki odatdan `_LINE` yoki `-LAYER` yozish | Boshidagi `_`, `-`, `.` yoki `'` eʼtiborga olinmaydi |
| Boʻsh soʻrovda Enter yoki Space oxirgi buyruqni takrorlaydi | Bir xil |
| Esc bekor qiladi; yana bir Esc tanlovni tozalaydi | Bir xil |
| `@dx,dy`, `@d<a`, sharqdan soat strelkasi teskarisi yoʻnalishida yoziladigan burchaklar | Bir xil |
| Chapdan oʻngga oyna, oʻngdan chapga kesishma, bosish-bosish; lasso uchun bosib sudrash, Space oyna / kesishma / toʻsiq ni almashtiradi (LASSOMODE) | Bir xil |
| Avval tanlang, keyin buyruq (ism-fe'l) | Bir xil; tugagan buyruq tanlovni tozalaydi |
| `ALL` va `L` Obyektlarni tanlang soʻrovida | Bir xil |
| Shift+bosish tanlovdan olib tashlaydi | Bir xil. Sozlamalar bosishni tanlovni almashtirishga oʻzgartirishi mumkin, PICKADD 0 kabi: [CadCraft sozlamalari](topic:settings) ga qarang |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Bir xil buyruqlar va tugmalar; nusxa joylashtirilganda u pastki chap burchagi bilan joylashadi, PASTECLIP kabi |
| F3 obyekt ilgagi, F7 panjara, F8 Orto | Bir xil tugmalar |
| Gʻildirakni ikki marta bosish chizmaning chegaralarini koʻrsatadi | Bir xil |
| Teskari aks etgan matn oʻqiladigan boʻlib qoladi | Bir xil (MIRRTEXT 0 kabi) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Bir xil; Mac da Command ham ishlaydi |

Barcha buyruqlar va taxalluslar roʻyxati uchun [Buyruqlar maʼlumotnomasi](topic:commands) ga qarang.

:::tip
Agar AutoCAD lentasini yoqtirsangiz, {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Menyular, tugmalar va sichqoncha}} da {{ui:Klassik chizmachilik}} menyu uslubini tanlang: bir xil buyruq satri ustida Bosh, Qoʻyish, Izohlash, Parametrik, Koʻrinish, Boshqarish va Chiqarish yorliqlari, oʻrta tugma esa surish uchun, oʻng bosish esa Enter. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).
:::

CadCraft dagi barcha buyruqlarni qisqa nomlari bilan koʻrish uchun [buyruqlar xaritasi](topic:command-map) ga, eng koʻp ishlatiladigan 40 tasi uchun [qisqa jadval](topic:cheat-sheet) ga qarang (bir sahifali PDF sifatida ham).

## Odamlarni qoqadigan farqlar

### Kiritilgan nuqtalar mutlaq

Dinamik kiritish yoqilgan boshqa dasturda ikkinchi nuqta uchun kiritilgan `100,0` nisbiy deb qabul qilinadi. **CadCraft buyruq satri bunday emas:** u yerda `x,y` har doim koordinata boshidan oʻlchanadi. {{ui:Dyn}} ({{key:F12}}) yoqilganda uning maydonlaridan foydalaning: masofa, {{key:Tab}}, burchak. "Oxirgi nuqtadan oʻngga 100" uchun `@100,0` yozing yoki kursorni kerakli tomonga siljitib, faqat `100` yozing.

### Shift ilgaklarni chetlab oʻtadi; Ortoni bermaydi

Bosish paytida Shift ushlab turilsa, shu bosish uchun obyekt ilgaklari eʼtiborga olinmaydi. U Ortoni vaqtincha yoqmaydi. F8 yoki {{ui:Orto}} tugmasidan foydalaning.

### Oʻng bosish har doim Enter

Oʻng bosish menyusi yoʻq. Chizmada oʻng bosish Enter: buyruqni tugatadi, tanlovni yakunlaydi yoki oxirgi buyruqni takrorlaydi. Tutqichni koʻchirish yoki tanlash oynasi paytida esa bekor qiladi. Surish uchun oʻng tugma bilan torting.

### Boʻshliq tugmasi bilan surish yoʻq

Space Enter, shuning uchun Space ni ushlab sudrash surmaydi. Oʻrta yoki oʻng tugma bilan suring yoki gʻildirak bilan kichraytirib, boshqa joyda qayta kattalashtiring.

### Kesish va uzaytirish

Kesish va uzaytirish Tez rejimda boshlanadi: har bir koʻrinadigan obyekt kesuvchi chegara yoki chegara boʻladi, koʻrsatkich ostidagi boʻlak nima oʻchishini koʻrsatadi, sudralgan yoʻl kesib oʻtgan har bir boʻlakni kesadi va hech narsa kesib oʻtmagan obyekt oʻchiriladi. {{key:Shift}} kesish va uzaytirish oʻrtasida almashtiradi. `O` Standart rejimga oʻtadi (avval chegaralarni tanlang), `F` va `C` toʻsiq va kesishma, `E` EDGEMODE, `R` oʻchiradi. `P` (Proyeksiya) varianti yoʻq: CadCraft chizma tekisligida kesadi.

### Fillet va faska

{{cmd:FILLET}} va {{cmd:CHAMFER}} siz bilgan variantlarni qabul qiladi: Ortga qaytarish, Polichiziq, Radius (yoki Masofa, Burchak va Usul), Kesish va Koʻp; hamda oʻtkir burchak uchun {{key:Shift}}+bosish. Polichiziq va chiziq orasidagi fillet yoyni polichiziqqa qoʻshish oʻrniga alohida obyekt sifatida qoʻshadi, yoy segmenti yonidagi polichiziq burchaklari esa oʻz holicha qoladi.

### Abzats matni va bir qatorli matn

`T`, `MT` va `MTEXT` kengligi, qatorlar oraligʻi va tekislash bilan joyida yoziladigan abzats matnidir; `DT` va `DTEXT` siz bilgan bir qatorli matn. Matn uslublari va ustunlar yoʻq, va hozircha matn ichida formatlashni (qalin, ustma-ust kasrlar) kiritib boʻlmaydi; faylda kelgan formatlash esa saqlanadi, chiziladi va saqlanadi (qarang: [Matn va yorliqlar qoʻshish](topic:text#formatting-inside-paragraph-text-from-other-programs)). Hamma narsa Helvetica uslubidagi shriftda chiziladi.

### Saqlash "nusxani yuklab olish" degani

{{key:Mod+S}}, `SAVE` va `QSAVE` chizmaning formatida nusxa yuklab oladi: ochilgan DWG DWG sifatida, DXF esa DXF sifatida saqlanadi. Brauzerda hech narsa joyida ustiga yozilmaydi va ochilgan fayllar hech qachon oʻzgarmaydi. CadCraft Studio da {{key:Mod+S}} ochilgan faylga qaytaradi.

`SAVEAS` ({{key:Mod+Shift+S}}) fayl brauzeri emas, kichik oynadir: {{ui:DWG}} ni (uning {{ui:Versiya}} si bilan, AutoCAD 2000 dan 2018 gacha), {{ui:DXF R12}} yoki {{ui:DXF 2000}} ni tanlang va {{ui:Saqlash}} ni bosing. Yuklab olish qayerga tushishini brauzer hal qiladi. `DXFOUT` har doim DXF R12 ni yuklab oladi.

Siz ochgan DWG oʻzi kelgan versiyada saqlanadi; yangi chizma esa, boshqasini tanlamasangiz, AutoCAD 2000 formatida saqlanadi. Varaqlar, oʻlchamlar va shtrixlash naqshlari saqlanadi. Qarang: [Fayllar: nima ochiladi, nima saqlanadi](topic:files#saving).

### Qatlamlar: soddaroq

- Har bir qatlam oʻzgarishi (yoqish, muzlatish, qulflash, rang, chop etish, chiziq turi, qalinligi, joriy qatlam) bitta ortga qaytarish qadami.
- CadCraft da oʻchirish va muzlatish bir xil taʼsir qiladi.
- Chizma bir viewportda muzlatgan qatlamlar oʻsha yerda muzlatilgan qoladi: ekranda, chop etishda va DWG yoki DXF sifatida saqlaganda.
- Viewport qatlamni oʻz rangi, chiziq turi, qalinligi yoki shaffofligi bilan koʻrsatsa, bu ekranda, chop etishda va saqlangan DWG da saqlanadi (DXF qatlamning oʻz sozlamalarini saqlaydi; saqlash buni aytadi). Har bir viewport uchun oʻzgartirish hali yoʻq.
- Qatlam xossalari menejeri va qatlam holatlari yoʻq; {{cmd:RENAME}}, {{cmd:LAYMRG}} va {{cmd:LAYDEL}} qatlamlarni nomini oʻzgartiradi, birlashtiradi va oʻchiradi. Chiziq turlari va qalinliklari oʻng panelda belgilanadi (qarang: [Chiziq qalinligi va chiziq turlari](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} va {{cmd:LAYMCUR}} tanlash orqali ishlaydi.
- DXF R12 ga saqlashda qatlam nomlari bosh harflar bilan yoziladi. DWG esa ularni siz yozganicha saqlaydi.

### Oʻlchamlar uslublari

`DIMSTYLE` nomlangan uslublar uchun menejer ochadi (yangi, oʻzgartirish, joriyni oʻrnatish, solishtirish, qoʻllash). `DIMSCALE` va boshqa sozlamalar yangi oʻlchamlar uchun nimani ishlatishini hali ham oʻzgartiradi, har bir oʻlcham esa oʻz hajmlarini saqlaydi, ularni Xossalar panelida ham oʻzgartirish mumkin. Joriy uslub faylda saqlanmaydi. Oʻlchamlar chizmaning uzunlik formatiga (oʻnlik yoki {{cmd:UNITS}} bilan fut va dyuym) yoki oʻz {{ui:Format}} iga amal qiladi. Qarang: [Oʻlcham hajmlarini oʻrnatish](topic:dimension-settings).

### Chop etish soddaroq

Chop etish uslubi jadvallari CTB fayllari kabi rang boʻyicha ishlaydi: Monoxrom, Rangli va Kulrang oʻrnatilgan, siz oʻzingiznikini yaratishingiz mumkin va har bir varaq oʻz jadvalini saqlaydi. CTB fayllarini oʻqish nashr etilgan taʼrif asosida qurilgan va faqat biz yaratgan fayllarda sinalgan; nomli chop etish uslubi jadvallari (STB) va sahifa sozlamalari hali qurilmagan. Chiziqlar oʻz qalinligida, qolganlari bir qalam kengligida chop etiladi. Varaqlar oʻz qogʻozida 1:1 da chop etiladi; model tanlangan masshtabda yoki moslashtirilgan holda chop etiladi. Qarang: [PDF ga chop etish](topic:plot-pdf).

### Viewport ichida ishlash

Siz bilganingizdek: modelda viewport orqali ishlash uchun viewport ichida ikki marta bosing (yoki {{cmd:MSPACE}} yozing), varaqqa qaytish uchun tashqarida ikki marta bosing ({{cmd:PSPACE}} yoki). Ichkarida surish va kattalashtirish viewport koʻrsatadiganini oʻzgartiradi, agar uning koʻrinishi qulflanmagan boʻlsa; qulflangan boʻlsa, ular varaqni suradi. Chizma ostidagi yorliqni bosish ham viewportdan chiqaradi. Qarang: [Viewport orqali modelda ishlash](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Kuzatuv va dinamik kiritish bor, panjaraga tortish hali yoʻq

Panjara faqat koʻrish uchun: nuqtalar unga tortilmaydi (F9 tortish rejimi yoʻq). Qutb kuzatuvi ({{key:F10}}, qadam {{cmd:POLARANG}} bilan belgilanadi) va obyekt ilgagi kuzatuvi ({{key:F11}}: ilgak nuqtasida toʻxtab turing) siz bilganingizdek ishlaydi; qarang: [Obyektlarga tortish](topic:object-snaps#polar-tracking). Dinamik kiritish ({{key:F12}}) kursor yonida masofa va burchakni (yoki X va Y ni) koʻrsatadi; qarang: [Koordinata va masofa kiritish](topic:coordinate-entry#dynamic-input).

### Fut va dyuym

{{ui:Uzunlik formati}} ni {{ui:Arxitektura}} yoki {{ui:Muhandislik}} ga oʻrnating (yoki {{cmd:UNITS}} yozing) va uzunliklarni siz bilganingizdek kiriting: `12'6"`, `12'6-1/2"`. Kasrdan oldin boʻshliq emas, tire ishlating: {{key:Space}} bu {{key:Enter}}. {{ui:Birliklar}} ni ham {{ui:Dyuym}} ga oʻrnating, shunda varaqlar va chop etishlar arxitektura masshtablarini taklif qiladi. Format saqlangan DWG va DXF fayllarda saqlanadi. Qarang: [Fut va dyuym](topic:units-papers-scales#feet-and-inches-and-fractions).

### Nusxa koʻchirish va joylashtirish faqat CadCraft ichida qoladi

{{key:Mod+C}}, {{key:Mod+X}} va {{key:Mod+V}} obyektlarni bir chizma ichida, chizmalar orasida va bir brauzerdagi CadCraft yorliqlari orasida nusxalaydi, kesadi va joylashtiradi. Bufer CadCraft niki: CadCraft obyektlarini boshqa dasturga yoki boshqa dasturdan CadCraft ga joylashtirib boʻlmaydi. Boshqa birliklardagi chizmadan joylashtirish qayta masshtablanmaydi: keyin {{cmd:SCALE}} dan foydalaning. {{key:Mod+D}} koʻrsatkich bilan birga siljiydigan nusxa, bu CadCraft qoʻshimchasi. Qarang: [Nusxalash, joylashtirish va dublikat](topic:copy-paste).

### Siz ishlata olmaydigan brauzer tugmalari

Veb-sahifa {{key:Mod+N}}, {{key:Mod+W}} yoki {{key:Mod+T}} ni brauzerdan ololmaydi: ular oynalar va yorliqlarni ochadi va yopadi. {{ui:Yangi}} tugmasidan foydalaning yoki `NEW` yozing. Qarang: [Tugmalar, sichqonchalar va trekpadlar](common:keys).

## Siz izlashingiz mumkin, lekin hali yoʻq buyruqlar

{{cmd:TABLE}} qurilmagan. Uni yozish "Unknown command" deydi. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} va {{cmd:XREF}} qurilgan.) [Hali qurilmagan](topic:not-built-yet) bugun oʻrniga nima qilish kerakligini sanab beradi.
