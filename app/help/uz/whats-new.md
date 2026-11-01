---
title: 0.7 versiyasidagi yangiliklar
summary: PDF fonlari va PDF import, avtomatik trace bilan skanerlangan chizmalar, SPLINE, SPLINEDIT va PEDIT bilan haqiqiy splinelar, oʻlcham uslublari boshqaruvchisi, formatini saqlaydigan matn, WBLOCK va oʻz masshtablaringiz, boshqa dasturlardan 3D solidlar, skanerlarni roʻyxatga olish, Laser paneli, USD eksporti, CadCraft Studioʼda tarix va chop etish, yoʻriqnomali birinchi chizma, istalgan tomonda yoki kamroq qatorda asboblar paneli va AI yordamchilari uchun yana koʻp narsa.
keywords: yangiliklar, nima yangi, relizlar, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi imkoniyatlar, pdf, pdfattach, pdfimport, fon, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatlash, wblock, scalelistedit, masshtablar roʻyxati, acis, 3d solidlar, registerscans, skanerlarni roʻyxatga olish, icp, e57, las, laser, grbl, g-code, usd, usdout, tarix, versiyalar, solishtirish, chop etish, printer, png, svg, chop etish uslubi, chiziq turi, yoʻriqnoma, buyruqlar xaritasi, asboblar paneli joylashuvi, asboblar paneli qatorlari, toolbardock, regen, regenall, trackpad, surish, kodlash sahifasi, kirill, koreys, xitoy, yapon, elektr, rcd, p&id, pid, acad.lsp, acaddoc.lsp, qoʻllab-quvvatlash papkasi, yordamchilar, mcp, birliklar, portugal tili
from: b9258ca6
---

Bu CadCraft 0.6 ga nisbatan 0.7 da nima oʻzgargani. Koʻp narsa Discordʼda soʻralgan edi. Roʻyxat sohalar boʻyicha guruhlangan, eng muhimi birinchi.

## Yangi

### PDF va skanerlangan chizmalar

- **PDF sahifasini chizma ostiga qoʻying.** {{cmd:PDFATTACH}} (`PDFATT`) sahifani haqiqiy oʻlchamida yoki siz yozgan masshtabda joylashtiradi. Uning chiziqlariga ilashing, xiralashtiring, monoxrom qiling ({{cmd:PDFADJUST}}), kesing ({{cmd:PDFCLIP}}) va PDF ning oʻz qatlamlarini almashtiring ({{cmd:PDFLAYERS}}). U chiziqlar, toʻldirishlar va matn sifatida chop etiladi; DWG yoki DXF 2000 esa uni faylga havola sifatida saqlaydi. {{ui:Ochish}} bilan PDF ochilganda, uni biriktirish yoki import qilishni soʻraydi. Qarang: [PDF fonlari va PDF import](topic:pdf-underlay).
- **PDF sahifasini chizma obyektlariga aylantiring.** {{cmd:PDFIMPORT}} (`PDFIM`) PDF nomi bilan atalgan qatlamlarda chiziqlar, polichiziqlar, aylanalar, yoylar, qattiq shtrixlashlar va matn yaratadi — haqiqiy oʻlchamda, yozilgan masshtabda yoki ikki nuqta va haqiqiy masofadan masshtablangan, bitta bekor qilish qadamida. Qarang: [Sahifani import qilish](topic:pdf-underlay#import-a-page).
- **Skanerlangan chizmalar.** {{cmd:SCANATTACH}} PNG, JPEG yoki TIFF ni (bitta sahifa yoki hammasi) yoki rasm boʻlgan PDF sahifasini olib keladi. Soʻng uni ikki nuqtadan masshtablang ({{cmd:SCANSCALE}}), tekislang ({{cmd:SCANALIGN}}), oʻzining uzun chiziqlaridan toʻgʻrilang ({{cmd:SCANDESKEW}}), oq-qora qiling va dogʻlarni olib tashlang ({{cmd:SCANCLEAN}}), kesing va qismlarini oʻchiring. Har bir qadam bitta bekor qilish qadami, asl fayl esa saqlanadi. Qarang: [Skanerlangan chizmalar va trace](topic:scanned-drawings).
- **Skanerni chiziqlar va yoylarga trace qiling.** {{cmd:SCANTRACE}} skanerdagi chiziqlarni siz belgilagan aniqlikda yangi SCAN-TRACE qatlamida chiziqlar va yoylar sifatida chizadi, matn va shtrixlashni oʻz holicha qoldiradi. Hisobot nima yaratgani va nima qoldirgani haqida xabar beradi va natijaning toʻgʻriligiga kafolat bermaydi: uni varaq bilan tekshiring. {{cmd:RASTERSNAP}} obyekt ilashishlari skanerning uchlarini, burchaklarini va kesishmalarini topishiga imkon beradi. Hech narsa hech qayerga yuborilmaydi va oʻqitilgan model ishlatilmaydi. Qarang: [Trace](topic:scanned-drawings#the-trace).

### Chizish va tahrirlash

- **Haqiqiy splinelar.** {{cmd:SPLINE}} (`SPL`) nuqtalar orqali yoki nazorat nuqtalaridan egri chiziq chizadi (daraja 1 dan 5 gacha), uchlaridagi urinmalar bilan; {{cmd:SPLINEDIT}} (`SPE`) moslash yoki nazorat nuqtalarini koʻchiradi, qoʻshadi va oʻchiradi, ogʻirliklarni belgilaydi, ochadi, yopadi, teskari qiladi yoki splaynni polichiziqqa aylantiradi. DWG va DXF dan kelgan splinelar splinelar sifatida ochiladi, DWG va DXF 2000 esa ularni splinelar sifatida saqlaydi. Qarang: [Splinelar va polichiziqlar](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) polichiziqlarni yopadi va ochadi, ularga chiziq va yoylarni birlashtiradi, bitta kenglik belgilaydi, uchlar orqali egri chiziq yoki ular boʻylab spline oʻtkazadi va Decurve bilan qaytaradi, teskari qiladi va bir nechtasini bir vaqtda tahrirlaydi. Qarang: [Polichiziqni tahrirlash](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) blokni, bir nechta obyektni yoki butun chizmani yangi DWG yoki DXF fayliga yozadi, faqat ular ishlatadigan qatlamlar, uslublar va bloklarni saqlab. Qarang: [Blokni yoki obyektlarni oʻz faylga yozish](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN va REGENALL.** {{cmd:REGEN}} (`RE`) siz turgan yorliqni chizmadan qayta chizadi, {{cmd:REGENALL}} (`REA`) esa har bir yorliq, panel va ochiq chizmani. Qarang: [REGEN va REGENALL](topic:commands#regen-and-regenall).

### Matn va oʻlchamlar

- **Matn oʻz formatini saqlaydi.** Boshqa dasturlardan kelgan abzats matni har bir soʻz rangini, qalin va kursivni, tagiga chizilganini, toʻplangan kasrlarni va balandliklarni saqlaydi: ekranda va PDF larda chiziladi, soʻzlarni tahrirlaganingizda saqlanadi va qaytadan saqlanadi. Qarang: [Boshqa dasturlardan kelgan abzats matni ichidagi formatlash](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Oʻlcham uslublari boshqaruvchisi.** {{cmd:DIMSTYLE}} (`D`) nomlangan oʻlcham uslublarini yaratadi, oʻzgartiradi, solishtiradi va qoʻllaydi; uslubni oʻzgartirish undan foydalanadigan har bir oʻlchamni oʻzgartiradi. {{cmd:DIMEDIT}} (`DED`) matnni qaytaradi, yangi matn kiritadi, uni buradi yoki chiqish chiziqlarini qiyshaytiradi; {{cmd:DIMTEDIT}} matnni chapga, oʻngga yoki markazga suradi. Qarang: [Nomlangan oʻlcham uslublari](topic:dimension-settings#named-dimension-styles).
- **Oʻz masshtablaringiz.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) koʻrinish oynasi va chop etish masshtablari roʻyxatlariga 1:75 kabi masshtablar qoʻshadi; ular chizmada saqlanadi (DWG va DXF 2000), boshqa dasturdan kelgan chizma oʻz roʻyxatini olib keladi. Qarang: [Masshtablar](topic:units-papers-scales#scales).
- **Boshqa alifbolardagi matn.** Kirill, koreys, xitoy, yapon yoki vyetnam kodlash sahifalarida saqlangan DXF fayllari endi matni bilan ochiladi; xitoy, yapon va koreys matni PDF da chop etiladi (chop etish birinchi marta kerak boʻlganda kattaroq shriftni yuklab oladi). Qarang: [Shrift](topic:text#font).

### Chop etish va bosib chiqarish

- **Chop etish uslubi jadvallarida koʻproq.** Har bir rang uchun jadval endi chiziq turini, chiziq uchi va birikmasini hamda qattiq toʻldirishlarni chiziq shtrixlari sifatida chop etadigan toʻldirish uslubini ham belgilashi mumkin; jadvalning oʻz chiziq qalinliklari roʻyxati va chiziq turi masshtabi bor. Qarang: [Chop etish uslubi jadvallari](topic:plot-pdf#plot-style-tables).
- **Bosib chiqarish, PNG va SVG fayllar.** PDF ga chop etish oynasida {{ui:Chop etish…}}, {{ui:PNG yuklab olish}} (300 dpi) va {{ui:SVG yuklab olish}} bor. CadCraft Studioʼda u kompyuterdagi printerlarni, ularning qogʻozini va nusxalar sonini roʻyxatlaydi. Qarang: [Chop etish](topic:plot-pdf#print) va [Rasm va SVG fayllar](topic:plot-pdf#picture-and-svg-files).

### 3D va nuqtalar bulutlari

- **Boshqa dasturlardan 3D solidlar.** Chizmaning model fazosidagi solidlar, regionlar va jismlar 3D yorligʻida faqat oʻqish uchun koʻrinadi va DWG sifatida saqlaganda ularni oʻzgarishsiz qaytaradi. Hali CadCraft chizmaydigan sirtlardagi yuzlar sanab beriladi, taxmin qilinmaydi. Qarang: [Boshqa dasturlardan solidlar](topic:3d-solids#solids-from-other-programs).
- **Bir nechta skanerni roʻyxatga oling.** {{cmd:REGISTERSCANS}} (`REGSCAN`) turli joylardan olingan skanerlarni bitta koordinatalar tizimida joylashtiradi — nuqta juftliklari yoki yozilgan maqsad koordinatalari boʻyicha, ICP bilan aniqlaydi, roʻyxatga olishni kichik loyiha fayli sifatida saqlaydi va roʻyxatga olingan bulutni bitta LAS yoki E57 fayl sifatida yozadi. Qarang: [Bir necha skanerni bittaga roʻyxatga olish](topic:register-scans).
- **USD eksporti.** {{cmd:USDOUT}}, yoki {{cmd:EXPORT3D}} › {{ui:USD}}, 3D yorligʻidagi solidlarni `.usda`, `.usdc` yoki `.usdz` sifatida yozadi. Qarang: [3D modelni USD sifatida eksport qilish](topic:usd).
- **3D yorligʻida hisoblashlar.** 3D yorligʻidagi asboblar masofa soʻraganda, buyruqlar qatoridagi kabi hisoblash yozishingiz mumkin. Qarang: [Kiritilgan qiymatda arifmetika](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Narsalar yasash

- **Chizmani lazerga yuboring.** {{cmd:LASER}}, yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Lazer…}}, chizma ustida panel ochadi: har bir qatlam kesadi, chizadi, chiziqlarni oʻyadi, shakllarni toʻldiradi, rasmni oʻyadi yoki yuborilmaydi, quvvati, tezligi va oʻtishlari bilan. Oldindan koʻrish tahrirlaringizga ergashadi, {{ui:G-code ni saqlash…}} GRBL lazer rejimi G-code ni yozadi, Chrome yoki Edge da panel ishni ramkalab USB orqali yuborishi mumkin. Sozlamalar chizmada saqlanadi (DWG va DXF). Qarang: [Chizmani lazerda kesish](topic:laser-cutting).
- **Elektr qoʻshimchasida oʻrnatish belgilari.** Maʼlumot, telefon va TV rozetkalari, kalit va vaqt kalitlari, termostat, chiqish belgisi, datchiklar, chaqiruv nuqtasi va signal, ventilyator, suv isitgich, plita, elektromobil zaryadlash nuqtasi, energiya hisoblagichi va qism shit, shuningdek RCD va RCBO belgilari. Zanjirda RCD boʻlishi mumkin, shit jadvalida RCD ustuni bor, va tekshiruvlar 30 mA yoki undan kam RCD siz rozetka zanjirlarini belgilaydi. Bu rejalashtirish eslatmasi, kod tekshiruvi emas.
- **P&ID qoʻshimchasi.** P&ID jarayon diagrammalarini chizadi: ulanish nuqtalari bilan belgilar, jarayon va signal chiziqlari, teglar, chiziq raqamlari, chiziq, uskuna, asbob va klapanlar roʻyxatlari (CSV yoki ish kitobi) va tekshiruvlar. U CadCraft bilan birga keladi va {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Qoʻshimchalar}} da yoqmaguningizcha oʻchiq. U chizma yordamchisi, muhandislik tasdiqi emas, va uning matnlari hozircha faqat inglizcha.

### Boshlash va ekran

- **Yoʻriqnomali birinchi chizma.** {{cmd:TOUR}} (yoki boshlash kartasidagi {{ui:Turni boshlash}}) oltita qadam davomida sizni haqiqiy chizmada yoʻriqlaydi: chiziq, aylana, koʻchirish, qirqish, oʻchirish va oʻlcham. CadCraft birinchi marta boʻsh holda ochilganda, u oʻzi boshlanadi. Qarang: [Yoʻriqnoma bilan ishlashni xohlaysizmi?](topic:getting-started#prefer-to-be-guided)
- **Shpargalka va buyruqlar xaritasi.** [Shpargalka](topic:cheat-sheet) kundalik 40 ta buyruqni bitta sahifada beradi, chop etish uchun PDF sifatida ham; [buyruqlar xaritasi](topic:command-map) buyruqlarni qisqa nomlari bilan A dan Z gacha sanaydi.
- **Asboblar paneli istalgan tomonda.** {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Asboblar paneli joylashuvi}}: yuqorida (oldingidek), pastda, chapda yoki oʻngda, yoki {{cmd:TOOLBARDOCK}} buyrugʻini yozing. Qarang: [Asboblar paneli joylashuvi](topic:settings#toolbar-position).
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Asboblar paneli qatorlari}}: sigʻdirish uchun oʻrash, 2 qator yoki 1 qator, CadCraft asboblar paneli hamda Drafting classic va Ribbon uslublari uchun. {{key:Shift+Ctrl+F1}} ularni navbatma-navbat almashtiradi, {{key:Ctrl+F1}} tugmalar koʻrsatadigan narsalarni almashtiradi, va {{cmd:TOOLBARROWS}} hamda {{cmd:TOOLBAR}} ularni belgilaydi. Boshlash maslahatining yopish tugmasi bor. Buni pull request sifatida yuborgan GJoe2 ga rahmat. Qarang: [Asboblar paneli qatorlari](topic:settings#toolbar-rows).

### CadCraft Studioʼda

- **Tarix.** {{cmd:HISTORY}} (`HIST`), yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Tarix…}}: Studio chizmani ochganda va saqlaganda saqlaydigan nusxalar, va bulutdan ochilgan boʻlsa chizmaning bulut versiyalari. Biror tasini ochish yoki tiklash, yoki ikkitasini solishtirish — qoʻshilgan, oʻchirilgan va oʻzgargan narsalar rang bilan koʻrsatilgan holda. Qarang: [Tarix](topic:history).
- **acad.lsp va acaddoc.lsp.** {{cmd:APPLOAD}} da qoʻllab-quvvatlash papkasini tanlang: CadCraft ishga tushganda ana shu ikki fayl yuklanadi (acaddoc.lsp har bir yangi chizma yorligʻi uchun yana), va `S::STARTUP` ulardan keyin ishlaydi. Qarang: [Ilovalarni yuklash](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Chop etish oynasi alohida oynada.** Uning sarlavha panelidagi tugma chop etish oynasini boshqa monitorga qoʻyiladigan alohida oynaga koʻchiradi. Qarang: [Muloqot oynasini koʻchirish](common:arrange-panels#move-a-dialog).

### AI yordamchilari uchun

- **Nomi boʻyicha fayllar, siz tanlagan papkalarda.** CadCraft Studioʼda yordamchi fayllarni nomi boʻyicha ochishi, saqlashi va chop etishi, va buyruqqa kerakli faylni berishi mumkin (fayldan INSERT, COUNT eksporti, SAVEAS, PLOT), lekin faqat {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Yordamchilar}} › {{ui:Foydalanishi mumkin boʻlgan jildlar}} ostida qoʻshgan papkalar ichida. Qarang: [Tanlagan papkalaringizdagi fayllardan foydalanish](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Kamroq chaqiruv.** Yordamchi buyruq qatorini bir yoʻla yozishi, buyruqni chaqiruvlar orasida ochiq saqlashi, obyektlarni turi va qatlami boʻyicha roʻyxatlamasdan sanashi, va blokni atribut qiymatlari bilan bir qadamda joylashtirishi mumkin.
- **Oynasiz.** `cadcraft` buyruq qatori SVG chop etishlarini yozadi va koʻp fayllarni bir vaqtda konvertatsiya qiladi, chop etadi, tekshiradi yoki tasvirlaydi. MCP paketi hali nashr qilinmagan. Qarang: [CadCraftni ochmasdan fayllar bilan ishlash](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Oʻzgargan

- **Sensorli panel suradi.** Sensorli panelda ikki barmogʻingizni harakatlantirsangiz, 2D koʻrinish ular bilan birga suriladi; qisish va sichqoncha gʻildiragi kattalashtiradi. Qarang: [Sichqoncha, sensorli panel va teginish](topic:mouse-trackpad-touch).
- **OLE obyektlari saqlanadi.** DXF dagi joylashtirilgan obyektlar oʻz rasmi yoki yorliqli ramka sifatida koʻrinadi va DXF 2000 bilan qaytadan saqlanadi. DWG dagilari saqlanadi va DWG sifatida saqlaganda qaytadan yoziladi, lekin hali koʻrsatilmaydi. Ilgari saqlashda ular yoʻqolardi. Qarang: [Boshqa dasturlardan obyektlar (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Yangi chizmaning birliklari** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} da yulduzcha qoʻygan birligingizga ergashadi.

## Tuzatilgan

- Boʻsh ochilgan yoki koʻrinish oynasini yoʻqotib, oʻrnida butun modelni koʻrsatadigan maketlar endi haqiqiy koʻrinish oynalari bilan ochiladi. Mazmuniga bogʻlanishi boʻlmagan maket saqlanadi va ochish hisobotida bu aytiladi.
- Eski kodlash sahifalaridagi DXF fayllar kirill va koreys matnini buzib koʻrsatardi. Endi toʻgʻri oʻqiladi.
- Boshqa dasturlardagi abzats matni ochilganda formatini yoʻqotardi va oddiy matn sifatida saqlanardi.

## Har bir ilovada

- **Birliklar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} uzunlik, maydon, hajm, burchak va qiyalik uchun har biri alohida roʻyxatga ega, birliklarning taʼriflari bergan aniq oʻlchamlar bilan (AQSH survey futi oʻz birligi). Ishlatmaydiganlaringizni oʻchiring — ular birlik roʻyxatlaridan chiqadi; birini yulduzcha bilan belgilasangiz, yangi ish shu birlikda boshlanadi. Fayl doim oʻz birligini saqlaydi. CadCraftda yulduzcha chizma birligini sozlaydi, agar u chizma olib yura oladigan birlik boʻlsa; CadCraftning oʻz {{ui:Birliklar}} oynasi hali yulduzchalarga ergashmaydi. Chizmada birlik boʻlgandan keyin, kiritgan uzunligingiz istalgan birlik belgisini olishi mumkin. Qarang: [Birliklar, kiritilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Ixcham maket va yigʻiladigan panellar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Tartib zichligi}} › {{ui:Ixcham}} ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelda ingichka sarlavha paneli bor: uni sudrab panelni ulang yoki suzdiring, boshqa panel sarlavhasiga tashlab bitta ramkani yorliqlar sifatida ulashing, qirgʻoqqa surilib ketishi uchun mahkamlang yoki yashiring va qirgʻoqdan qaytaring. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Muloqot oynalari koʻchadi.** Muloqot oynasini sarlavha panelidan sudrab chizmadan chetga suring; u oʻsha joyiga qaytadi. Sarlavha panelini ikki marta bosing — u markazga qaytadi. Qarang: [Muloqot oynasini koʻchirish](common:arrange-panels#move-a-dialog).
- **AI yordamchilari uchun retseptlar.** Sizning yordamchingiz uchun oʻnta ishlangan soʻrov (chizmani tartibga keltirish, toʻplamni chop etish, chizmalarni tekshirish, model haqida savol berish, hajmlarni hisoblash, detal variantini sinash…), har biri chaqiradigan asboblar va kerakli ruxsatlar bilan, va har biri bizning testlarimiz tomonidan qayta ijro etiladi. Ilovalarda AI yoʻq. Qarang: [AI yordamchilari uchun retseptlar](common:assistants-recipes).
- **Tillar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Til}} da **Português (Portugal)** yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovalarning har bir soʻziga ega, ona tilida koʻrib chiqilmagan qoralama sifatida. Yordam mavzulari inglizcha.
- **CadCraft Studio** yangilanish tekshiruvi nega muvaffaqiyatsiz boʻlganini aytadi (tizimingiz uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo), "Tayyor" deb emas, va siz yopgan "Yangiliklar" kartasini yangi reliz chiqmaguncha qaytarmaydi.

## Bu versiyada hali yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga koʻchdi, chunki sertifikat tekshiruvi hali oʻtmadi. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download da tekshiring. Windowsda, agar SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:Batafsil}} ni, soʻng {{ui:Baribir ishga tushirish}} ni tanlang. Macʼda birinchi marta CadCraft Studioʼga oʻng tugmani bosing va {{ui:Ochish}} ni tanlang. CadCraft Studio hali ilova doʻkonida emas va hali iPad yoki iPhone versiyasi yoʻq.
- {{ui:Birliklar}} dagi burchak va qiyalik roʻyxatlari saqlanadi, lekin hali hech bir oyna ularni oʻqimaydi.
- DWG ning OLE obyektlari saqlanadi, lekin koʻrsatilmaydi, va OLE obyektlari ichidagi metafayl rasmlari chizilmaydi.
- Boshqa dasturlardan chop etish uslubi jadvallarini (CTB fayllar) oʻqish namuna fayl kutadi.
- Eski Osiyo matnlari `\M+` kodlari sifatida oʻqiladi, lekin boshqa dasturdan fayl bilan hali tekshirilmagan.
- PDF fonlari: sahifa ichidagi rasmlar ekranda koʻrinadi, lekin chop etilmaydi; yordamchining chop etishi fonlarni chiqarib tashlaydi, va saqlangan kesish va masshtab boshqa dasturlarda qanday oʻqilishi tekshirilmagan.
- Tarix: CadCraft hali saqlashlarini bulutga yubormaydi, shuning uchun bulut versiyalari boshqa qurilmalardan va veb dan saqlanganlari. Tarix faqat CadCraft Studioʼda.
- Studio qayta ishga tushgandan keyin acad.lsp qoʻllab-quvvatlash papkasini saqlaydimi — hali tekshirilmagan; soʻrasa, APPLOAD da papkani qayta tanlang.
- Lazer paneli hali haqiqiy lazerda sinalmagan: har bir sozlamani chiqindida sinang. CadCraft Studioʼda Web Serial yoʻq, shuning uchun Studioʼda panel faqat G-code ni saqlaydi.
- Skanerlarni roʻyxatga olish soxta skanerlarda sinalgan, haqiqiy skaner toʻplamida hali emas.
- Ikki barmoqli surish simulyatsiya qilingan sensorli panel hodisalari bilan sinalgan, haqiqiy sensorli panelda hali emas.
- {{cmd:PEDIT}} da Edit vertex varianti yoʻq (dastaklar yoki Xossalar dan foydalaning). Offset, trim, extend, fillet, break va join hali splinelarni qabul qilmaydi; splinening balandligi (Z) saqlanmaydi.
- Yangi abzats matniga formatlash kodlarini hali berib boʻlmaydi, va SVG chop etishlari formatlangan matnni bitta rangda koʻrsatadi.
- WBLOCK ning Butun chizma varianti faqat modelni yozadi, varaqlarni emas. Joriy oʻlcham uslubi faylda saqlanmaydi: chizma Standard joriy holatda ochiladi.
- Ribbon menyu uslublarida hali qatlam, rang yoki chiziq turi roʻyxatlari yoʻq: {{ui:Qatlamlar}} paneli va {{ui:Xossalar}} dan foydalaning.
- Nuqtalar bulutlari hali chizmada saqlanmaydi yoki chop etilmaydi, va E57 fayllar 6 million nuqtagacha va 512 MB gacha ochiladi.
- CadCraftning saqlangan DWG fayllari hali AutoCADʼning oʻzida tekshirilmagan.

Qolgan hamma narsa [Hali tayyorlanmagan](topic:not-built-yet) da.
