---
title: PDF ga chop etish
summary: Varaqni toʻliq oʻlchamda yoki modelni masshtabda yoki qogʻozga moslab PDF qilib oling, uni brauzerdan yoki Studio dan chop eting yoki PNG yoki SVG sifatida saqlang.
keywords: chop etish, chop etish, printer, nusxalar, png, svg, rasm, pdf, nashr qilish, exportpdf, qogʻoz, masshtab, monoxrom, kulrang, qora va oq, chiziq qalinligi, qalam, sahifa sozlamalari, chop etish oynasi, chop etish uslubi, chop etish uslubi jadvali, ctb, rangga bogʻliq, rastrlash, plotstyles, stylesmanager
from: a4752f83
---

## Nima yaratasiz

Varaqning toʻliq oʻlchamdagi PDFi, keyin modelning 1:100 dagi tez PDFi va chop etilgan nusxa.

PDF brauzeringiz ichida yaratiladi; hech narsa yuklanmaydi. Bu vektor PDF: chiziqlar istalgan kattalashtirishda oʻtkir qoladi va matnni qidirish mumkin.

## Varaqni chop etish

1. Chizma ostidagi varaq yorligʻini bosing.
2. {{key:Mod+P}} bosing, {{ui:Chop etish}} ni bosing yoki `PLOT` ni yozing va {{key:Enter}} bosing.

{{ui:PDF ga chop etish}} oynasi ochiladi. U qaysi varaqni va qaysi qogʻozda chop etishini aytadi: "toʻliq oʻlchamda … koʻringaningizdek". Oʻngdagi koʻrinishda varaq koʻrsatiladi.

3. {{ui:Chop etish uslubi}} da qora chiziqlar uchun {{ui:Monoxrom (qora)}} ni, ranglarni saqlash uchun {{ui:Rang (chizilganidek)}} ni, {{ui:Kulrang}} ni yoki oʻzingizning jadvalingizni tanlang (qarang: [Chop etish uslubi jadvallari](topic:plot-pdf#plot-style-tables)). Varaq bu tanlovni saqlaydi: u chizma bilan birga saqlanadi.
4. {{ui:Chiziq qalinligi}} da 0.13 mm dan 0.70 mm gacha qalam kengligini tanlang. Standart chiziq qalinligiga ega chiziqlar shu kenglikda chop etiladi; oʻz chiziq qalinligiga ega chiziqlar (qatlam yoki obyekt yoki jadvaldagi rangining qalami) oʻsha kenglikda chop etiladi.
5. {{ui:PDF ni yuklab olish}} ni bosing.

Brauzer chizma va varaq nomi bilan PDF yuklab oladi, masalan `Drawing1-A-101 Plan.pdf`. Tarix uning hajmini baytlarda va qogʻoz oʻlchamini millimetrda koʻrsatadi.

Varaq har doim oʻz qogʻozida 1:1 masshtabda chop etiladi. Qogʻozni oʻzgartirish uchun uni varaqning oʻzida oʻzgartiring (qarang: [Varaqni sozlash](topic:sheets-and-viewports)). Chop etilmaydigan qilib belgilangan qatlamlar chiqarib tashlanadi, koʻrinish ramkalari ham shunday.

## Barcha varaqlar bitta PDFda

Ikki yoki undan ortiq varaq boʻlsa, {{ui:PDF ga chop etish}} oynasida {{ui:Barcha varaqlar bitta PDF da}} bor; yoki `PUBLISH` ni yozing. {{key:Enter}} barcha varaqlarni oladi; `S` (Ayrim) ularning nomlarini vergul bilan ajratib soʻraydi. Bitta PDF yuklab olinadi: har bir varaq uchun bitta sahifa, yorliqlar tartibida, har biri oʻz qogʻoz oʻlchamida, va har bir varaq uchun uning nomi bilan xatcho'p. Har bir varaq oʻz chop etish uslubi jadvali bilan chop etiladi; tanlanmagan varaq esa oxirgi tanlagan jadvalni va oxirgi tanlagan qalam kengligini ishlatadi.

## Modelni chop etish

1. {{ui:Model}} yorligʻini bosing.
2. {{key:Mod+P}} bosing.

Oyna modelni qogʻoz varagiga chop etishini aytadi va qoʻshimcha sozlamalarni koʻrsatadi:

3. {{ui:Maydon}} da nimani chop etishni tanlang:
   - {{ui:Hammasi (chegaralari boʻyicha)}}: butun chizma.
   - {{ui:Ekrandagi koʻrinish}}: hozir chizmada koʻrayotgan hudud.
   - {{ui:Oyna…}}: soʻng {{ui:Tanlash}} ni bosing, chizmada ikki burchakni bosing va oyna qaytib keladi.
4. {{ui:Qogʻoz}} da oʻlcham tanlang: ISO A4 dan A0 gacha, Letter, Legal, Tabloid va ANSI C va D, yoki ARCH C, D va E.
5. {{ui:Yoʻnalish}} da {{ui:Gorizontal}} yoki {{ui:Vertikal}} ni tanlang.
6. {{ui:Masshtab}} da {{ui:Qogʻozga moslash}} yoki `1:100` kabi masshtabni tanlang.

Sozlamalar ostidagi qatorda masshtab va hudud qogʻozda qancha boʻlishi koʻrsatiladi. Agar u qogʻozdan katta boʻlsa, buni aytadi: chekkalari kesiladi. Kichikroq masshtab, kattaroq qogʻoz yoki {{ui:Qogʻozga moslash}} ni tanlang.

7. {{ui:PDF ni yuklab olish}} ni bosing.

Model chop etilganda chekka atrofida 5 mm kenglik qoldiriladi, chunki aksariyat printerlar chekkaga chop eta olmaydi. {{ui:Qogʻozga moslash}} gʻayritabiiy masshtab beradi (tarix va axborot qatorida "(moslangan)" deb yoziladi); chizma haqiqiy oʻlchanishi kerak boʻlsa, standart masshtabni tanlang.

:::note
Masshtablar haqiqiy birliklarda oʻqiladi. 1:100 toʻgʻri boʻlishi uchun {{ui:Joriy sozlamalar}} dagi {{ui:Birliklar}} ni chizma birligi nimaga teng boʻlsa shunga oʻrnating. Birliksiz chizma millimetrda deb qabul qilinadi.
:::

## Chop etish uslubi jadvallari

Chop etish uslubi jadvali 255 ta standart chizma rangining har biri qanday chop etilishini aytadi, boshqa CAD dasturlaridagi rangga bogʻliq chop etish uslubi jadvali (CTB) kabi. Uchtasi oʻrnatilgan:

| Jadval | Chop etadi |
|---|---|
| {{ui:Rang (chizilganidek)}} | Har bir obyekt oʻz rangida. |
| {{ui:Monoxrom (qora)}} | Har bir rang qora: chizmalar uchun odatiy tanlov. |
| {{ui:Kulrang}} | Har bir rang oʻz kulrang tusida, shuning uchun oq-qora printerda ranglar ajralib turadi. |

Oʻzingiznikini yaratish uchun, masalan qizil chiziqlar qalin va qora, qolgani nozik:

1. {{ui:PDF ga chop etish}} oynasida {{ui:Jadvallarni tahrirlash…}} ni bosing (yoki `PLOTSTYLES` ni yozing).
2. {{ui:Yangi}} ni bosing va {{ui:Nom}} ga `office` kabi nom kiriting. Oʻrnatilgan jadvaldan boshlash uchun uni {{ui:Jadval}} da tanlang va {{ui:Nusxalash}} ni bosing.
3. Panelda rangni bosing. {{key:Shift}}+bosish rang diapazonini tanlaydi, {{key:Mod}}+bosish yana bittasini qoʻshadi va {{ui:Barcha ranglarni tanlang}} hammasini oladi.
4. Tanlangan ranglar qanday chop etilishini belgilang:
   - {{ui:Chop etilganda rangi}}: {{ui:Oʻz rangi}}, {{ui:Qora}} yoki {{ui:Boshqa rang…}}.
   - {{ui:Kulrang sifatida}}: rangni oʻz kulrang tusida.
   - {{ui:Siyoh (%)}}: 100 — toʻliq siyoh, 50 — oqqa yarim yoʻl (rastrlash), fon chiziqlari uchun.
   - {{ui:Chiziq qalinligi}}: {{ui:Oʻz chiziq qalinligi}} obyekt yoki qatlam chiziq qalinligini saqlaydi; qiymat shu rangning har bir chizigʻini shu kenglikda chop etadi.
   - {{ui:Chiziq turi}}: shu rangdagi har bir chiziqni boshqa chiziq turida chop etish (masalan, hamma qizil chiziqlar shtrixli); {{ui:Obyektning chiziq turidan foydalanish}} ularni oʻz holicha qoldiradi.
   - {{ui:Chiziq uchi}} va {{ui:Chiziq birikishi}}: uchlari uchun butt, kvadrat yoki dumaloq, burchaklar uchun miter, bevel yoki dumaloq (hech narsa belgilanmasa, avvalgidek dumaloq).
   - {{ui:Toʻldirish uslubi}}: shu rangning qattiq toʻldirilishi siyoh oʻrniga shtrix chiziqlari sifatida chop etiladi (gorizontal yoki vertikal chiziqlar, qiyalik, toʻr, romb, kvadrat nuqtalar) — tekis siyoh juda ogʻir boʻladigan printerlar va rejalar uchun.

   Jadvalning oʻzida yana ikkita sozlama bor: {{ui:Chiziq qalinliklari}} — u biladigan kengliklar (chop etilgan chiziq ularning eng yaqiniga tushadi) va {{ui:Chiziq turi masshtabi}} — ISO boʻlmagan har bir chiziq turi chiziqchalariga koeffitsient.
5. {{ui:Tayyor}} ni bosing. Jadval chizmada saqlanadi va varaq (yoki model) endi unda chop etiladi. {{ui:Bekor qilish}} oʻzgarishlarni tashlaydi.

Oʻz qalamiga ega rang burchagida nuqta koʻrsatadi, chiziq qalinligini belgilasa pastida nuqta. Haqiqiy rangli obyekt (255 tadan biri emas) eng yaqin standart rang qalamini ishlatadi.

Chizma oʻz jadvallarini va har bir varaqning tanlovini DWG (2000 dan 2018 gacha) yoki DXF (R12 yoki 2000) sifatida saqlaganda saqlaydi va ular bilan qayta ochiladi. Boshqa dasturlar har bir varaqning sahifa sozlamalarida nomni (`office.ctb`) koʻradi, jadvalning oʻzini emas. Boshqa dasturdagi chizma sahifa sozlamalarida `monochrome.ctb` kabi jadval nomini koʻrsatsa, u oʻsha nomli oʻrnatilgan jadval bilan chop etiladi; boshqa nomlar uchun dialog chizmada bunday jadval yoʻqligini aytadi va jadval tanlamaguningizcha yoki shu nomda yaratmaguningizcha chizma ranglarini chop etadi.

Jadvalni boshqa chizmada ishlatish uchun {{ui:Chop etish uslubi jadvallari}} ichida {{ui:Eksport}} ni bosing (u `office.plotstyle.json` ni saqlaydi), soʻng boshqa chizmada {{ui:Import qilish…}} ni bosing. {{ui:Import qilish…}} boshqa dasturdan `.ctb` faylni ham qabul qiladi: u formatning eʼlon qilingan tavsifidan oʻqiladi va haqiqiy fayl bilan hali tekshirilmagan. Har bir rangning rangi, rastrlanishi va chiziq qalinligi oʻqiladi; kulrang, qalam raqamlari, chiziq turlari, chiziq uchlari va birikishlari hamda toʻldirish uslublari oʻqilmaydi, nomlangan jadval (`.stb`) esa qabul qilinmaydi. Birinchi chop etishni kutganingiz bilan solishtiring va notoʻgʻri boʻlsa, bizga faylni yuboring.

## Chop etish

**Brauzerda** {{ui:Chop etish…}} ni bosing. CadCraft PDF yaratadi va unga brauzerning oʻz chop etish oynasini ochadi. Masshtabni saqlash uchun u yerda "Haqiqiy oʻlcham" yoki 100% ni tanlang ("Moslash" emas). Agar brauzer sahifadan chop etishni rad etsa, PDF yangi yorliqda ochiladi: undan {{key:Mod+P}} bilan chop eting.

Shuningdek, {{ui:Ochib chop etish}} ni bosishingiz mumkin: PDF brauzerning yangi yorligʻida ochiladi va undan chop etasiz.

:::safari
Safari PDFni koʻrsatishi va siz **Fayl**, keyin **Chop etish** ni tanlaguningizcha kutishi mumkin.
:::

Agar brauzer yangi yorliqni bloklasa, CadCraft oʻrniga PDFni yuklab oladi va buni tarixda aytadi. Keyingi safar uni yorliqda ochish uchun saytga qalqib chiquvchi oynalarga ruxsat bering.

**CadCraft Studio da** {{ui:PDF ga chop etish}} oynasi kompyuterdagi printerlarni roʻyxatlaydi. {{ui:Printer}} ni, {{ui:Printerdagi qogʻoz}} ni va {{ui:Nusxalar soni}} ni tanlang, soʻng {{ui:Chop etish…}} ni bosing. {{ui:Chop etish bilan bir xil}} varaq oʻlchamidagi printer qogʻozini tanlaydi (A3 varaq uchun A3); printerda bunday qogʻoz boʻlmasa, u oʻz qogʻozini ishlatadi va varaqni unga moslaydi. Windowsda varaq 300 dpi rasm sifatida yuboriladi, chunki Windows PDF dasturisiz PDFni chop eta olmaydi; Linux va macOSda PDFning oʻzi tizimning chop etish xizmatiga yuboriladi. Hech narsa kompyuterdan chiqmaydi.

## Rasm va SVG fayllar

{{ui:PNG yuklab olish}} chop etilgan varaqni 300 dpi rasm sifatida saqlaydi (faqat juda katta varaq brauzer yarata oladiganidan katta boʻlib qolsa pasaytiriladi; tarix buni aytadi). {{ui:SVG yuklab olish}} uni millimetrda masshtablanuvchi chizma sifatida saqlaydi, chop etishning chiziqlari va matni bilan. Ikkalasi ham PDF bilan bir xil chop etishdan chiqadi, bir xil chop etish uslubi, chiziq qalinligi va maydon bilan. Chizmaga joylashtirilgan rasmlar faqat PDFda boʻladi; tarix nechtasi chiqarib tashlanganini koʻrsatadi.

## Rasmlar

Rasmlar oʻz aniqligida, chiziqlar ostida chop etiladi. {{ui:Rasmlar}} oynada ularni kichikroq fayl uchun 600, 300 yoki 150 dpi bilan cheklaydi. Chiziqlar, matn va shtrixlash doim oʻtkir (vektor) qoladi, shaffoflik esa shaffoflik boʻlib qoladi. Qarang: [Chizmadagi rasmlar](topic:pictures).

## Saqlangan sozlamalar

Oyna bu brauzerda oxirgi qogʻoz, yoʻnalish, masshtab va chiziq qalinligini eslab qoladi. Chop etish uslubi jadvali har bir varaq bilan chizmada saqlanadi; tanlanmagan varaq oxirgi tanlagan jadvaldan boshlanadi. Tanlangan oyna sahifani qayta yuklamagunicha saqlanadi; shundan keyin oyna {{ui:Hammasi (chegaralari boʻyicha)}} dan boshlanadi.

## Keng uchraydigan xatolar

- **PDF boʻsh yoki tugmalar kulrang.** Chop etiladigan hech narsa yoʻq (boʻsh model), yoki {{ui:Oyna…}} tanlangan, lekin hali oyna tanlanmagan ("Chop etish uchun oynani tanlang.").
- **PDFda matnda "?" koʻrinadi.** Polyak, chex, kirill, yunon va Yevropaning boshqa yozuvlaridagi matn oʻzicha chop etiladi: PDF unga kerakli harflarni oladi (Liberation Sans shriftidan, u Helveticaning kengliklariga ega), va matnni tanlash va qidirish mumkin. Xitoy, yapon va koreys matni ham oʻzicha chop etiladi: chizmada u boʻlsa, chop etish katta shriftni (taxminan 10 MB, bir marta) yuklab oladi va PDF faqat ishlatilgan belgilarni oladi, shuning uchun birinchi marta ulanish kerak (saqlangan oflayn nusxada emas). Ivrit matni Lotin matni bilan bir xil oʻrnatilgan shrift bilan chop etiladi; arabcha, forscha va urducha matn esa yana bitta shriftni yuklaydi (1 MB dan kam, bir marta); oʻngdan chapga yoziladigan qatorlar tartiblanadi va harflari biriktiriladi (qarang: [Matn](topic:text)). Bu shriftlardan tashqari kam uchraydigan ideogrammalar va hind kabi murakkab shakllanishni talab qiluvchi yozuvlar "?" sifatida chop etiladi va tarix ularni sanaydi.
- **Barcha chiziqlar bir xil qalinlikda.** Ularning chiziq qalinligi standart: qatlamlarga yoki obyektlarga oʻng panelda {{ui:Chiziq qalinligi}} bering (qarang: [Chiziq qalinliklari va chiziq turlari](topic:units-papers-scales#line-weights-and-linetypes)) yoki [chop etish uslubi jadvalida](topic:plot-pdf#plot-style-tables) har bir rang uchun chiziq qalinligini belgilang.
- **Chop etish uslubi yonida "(bu chizmada yoʻq)".** Chizma boshqa dasturdan kelgan va u oʻziga kiritmagan jadval nomini koʻrsatadi. Jadvallardan birini tanlang yoki shu nomda yarating.
- **Qurilish chiziqlari chop etilgan.** Ularning qatlamini chop etilmaydigan qilib belgilang: {{ui:Qatlamlar}} panelidagi printer tugmasini bosing.
- **Chop etilgan nusxa notoʻgʻri oʻlchamda.** Printer uni masshtablagan. Haqiqiy oʻlchamda chop eting.
- **{{key:Mod+P}} brauzerning chop etish oynasini ochdi.** Kursor oʻng paneldagi katakchada edi yoki boshqa oyna ochiq edi. Katakchadan chiqish uchun {{key:Enter}} yoki {{key:Esc}} bosing, soʻng qayta urining yoki {{ui:Chop etish}} ni bosing.
- **{{key:Mod+P}} hech narsa qilmadi.** Buyruq bajarilmoqda. Avval {{key:Esc}} bosing.
