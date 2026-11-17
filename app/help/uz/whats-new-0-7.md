---
title: 0.7 da nimalar yangi (oldingi)
summary: PDF tagliklari va PDF import, avtomatik izlashli skanerlangan chizmalar, SPLINE, SPLINEDIT va PEDIT bilan haqiqiy splaynlar, oʻlcham uslublari boshqaruvchisi, formatlashni saqlaydigan matn, WBLOCK va sizning masshtablaringiz, boshqa dasturlardan 3D qattiq jismlar, skanerlarni roʻyxatdan oʻtkazish, Lazer paneli, USD eksport, CadCraft Studio da Tarix va chop etish, yoʻriqnomali birinchi chizma, asboblar panelini istalgan tomonda yoki kamroq qatorda joylashtirish va AI yordamchilar uchun yana koʻp narsalar.
keywords: 0.7 yangiliklari, oldingi reliz, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi imkoniyatlar, pdf, pdfattach, pdfimport, tagliklar, skaner, scanattach, scantrace, izlash, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatlash, wblock, scalelistedit, masshtablar roʻyxati, acis, 3d qattiq jismlar, registerscans, skanerlarni roʻyxatdan oʻtkazish, icp, e57, las, lazer, grbl, g-code, usd, usdout, tarix, versiyalar, solishtirish, chop etish, printer, png, svg, chop etish uslubi, chiziq turi, yoʻriqnoma, buyruqlar xaritasi, asboblar paneli joylashuvi, toolbardock, regen, regenall, sensorli panel, surish, kod sahifasi, kirill, koreys, xitoy, yapon, elektr, rcd, p&id, pid, acad.lsp, acaddoc.lsp, qoʻllab-quvvatlash jildi, yordamchilar, mcp, birliklar, portugal tili
from: d07ca034
---

Bu CadCraft 0.7 da 0.6 ga nisbatan nimalar oʻzgarganini koʻrsatadi. Koʻp narsa Discord da soʻralgan edi. Roʻyxat sohalar boʻyicha guruhlangan, eng muhimlari birinchi.

## Yangi

### PDF lar va skanerlangan chizmalar

- **PDF sahifasini chizma ostiga qoʻying.** {{cmd:PDFATTACH}} (`PDFATT`) sahifani haqiqiy oʻlchamida yoki siz yozgan masshtabda joylashtiradi. Uning chiziqlariga ilashing, xiralashtiring, monoxromga aylantiring ({{cmd:PDFADJUST}}), kesing ({{cmd:PDFCLIP}}) va PDF ning oʻz qatlamlarini almashtiring ({{cmd:PDFLAYERS}}). U chiziq, toʻldirish va matn sifatida chop etiladi, DWG yoki DXF 2000 esa uni fayl havolasi sifatida saqlaydi. {{ui:Ochish}} bilan PDF ochilganda, uni biriktirish yoki import qilish soʻraladi. Qarang: [PDF tagliklari va PDF import](topic:pdf-underlay).
- **PDF sahifasini chizma obyektlariga aylantiring.** {{cmd:PDFIMPORT}} (`PDFIM`) PDF nomi bilan atalgan qatlamlarda chiziqlar, polichiziqlar, aylanalar, yoylar, yaxlit shtrixlar va matn yaratadi: haqiqiy oʻlchamda, yozilgan masshtabda yoki ikki nuqta va haqiqiy masofa boʻyicha, bitta ortga qaytarish qadamida. Qarang: [Sahifani import qilish](topic:pdf-underlay#import-a-page).
- **Skanerlangan chizmalar.** {{cmd:SCANATTACH}} PNG, JPEG yoki TIFF ni (bitta sahifa yoki hammasi) yoki rasm boʻlgan PDF sahifasini olib keladi. Soʻng uni ikki nuqtadan masshtablang ({{cmd:SCANSCALE}}), tekislang ({{cmd:SCANALIGN}}), oʻzining uzun chiziqlaridan toʻgʻrilang ({{cmd:SCANDESKEW}}), qora-oq qiling va dogʻlarni olib tashlang ({{cmd:SCANCLEAN}}), kesing va bir qismini oʻchiring. Har bir qadam bitta ortga qaytarish qadami va asl fayl saqlanadi. Qarang: [Skanerlangan chizmalar va izlash](topic:scanned-drawings).
- **Skanerni chiziq va yoylarga izlang.** {{cmd:SCANTRACE}} skanerdagi chiziqlarni yangi SCAN-TRACE qatlamida chiziq va yoy sifatida chizadi, siz belgilagan aniqlikda, matn va shtrixlarni oʻz holicha qoldiradi. Hisobot nima yaratilgani va nima qoldirilganini aytadi, lekin natija toʻgʻri ekaniga kafolat bermaydi: uni varaq bilan solishtirib tekshiring. {{cmd:RASTERSNAP}} obyekt ilgaklariga skanerning uchlari, burchaklari va kesishmalarini topish imkonini beradi. Hech narsa hech qayerga yuborilmaydi va oʻqitilgan model ishlatilmaydi. Qarang: [Izlash](topic:scanned-drawings#the-trace).

### Chizish va tahrirlash

- **Haqiqiy splaynlar.** {{cmd:SPLINE}} (`SPL`) nuqtalar orqali yoki boshqaruv nuqtalaridan egri chiziq chizadi (darajasi 1 dan 5 gacha), uchlarida tangenslar bilan; {{cmd:SPLINEDIT}} (`SPE`) aniqlovchi yoki boshqaruv nuqtalarini siljitadi, qoʻshadi va oʻchiradi, ogʻirliklarni belgilaydi, ochadi, yopadi, teskari qiladi yoki splaynni polichiziqqa aylantiradi. DWG va DXF fayllaridagi splaynlar splayn sifatida ochiladi, DWG va DXF 2000 esa ularni splayn sifatida saqlaydi. Qarang: [Splaynlar va polichiziqlar](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) polichiziqlarni yopadi va ochadi, ularga chiziq va yoylarni biriktiradi, bitta kenglik belgilaydi, uchlari orqali egri chiziq yoki ular boʻylab splayn oʻtkazadi va Decurve bilan uni qaytaradi, teskari qiladi va bir nechtasini bir vaqtda tahrirlaydi. Qarang: [Polichiziqni tahrirlash](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) blokni, bir nechta obyektni yoki butun chizmani yangi DWG yoki DXF fayliga yozadi, faqat ular ishlatadigan qatlamlar, uslublar va bloklarni saqlab. Qarang: [Blokni yoki obyektlarni oʻz faylga yozish](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN va REGENALL.** {{cmd:REGEN}} (`RE`) siz turgan yorliqni chizmadan qayta chizadi, {{cmd:REGENALL}} (`REA`) esa har bir yorliq, oyna va ochiq chizmani. Qarang: [REGEN va REGENALL](topic:commands#regen-and-regenall).

### Matn va oʻlchamlar

- **Matn oʻz formatlashini saqlaydi.** Boshqa dasturlardan kelgan abzats matnida soʻzma-soʻz ranglar, qalin va kursiv, tagiga chizilgan, ustma-ust kasrlar va balandliklar saqlanadi: ular ekranda va PDF larda chiziladi, soʻzlarni tahrirlaganingizda saqlanadi va qaytib saqlanadi. Qarang: [Boshqa dasturlardan abzats matnidagi formatlash](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Oʻlchamlar uslublari boshqaruvchisi.** {{cmd:DIMSTYLE}} (`D`) nomlangan oʻlcham uslublarini yaratadi, oʻzgartiradi, solishtiradi va qoʻllaydi; uslubni oʻzgartirsangiz, undan foydalanadigan har bir oʻlcham oʻzgaradi. {{cmd:DIMEDIT}} (`DED`) matnni asliga qaytaradi, yangi matn yozadi, uni burish yoki kengaytma chiziqlarini qiyshaytirish imkonini beradi; {{cmd:DIMTEDIT}} matnni chapga, oʻngga yoki markazga siljitadi. Qarang: [Nomlangan oʻlcham uslublari](topic:dimension-settings#named-dimension-styles).
- **Sizning masshtablaringiz.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) koʻrinish oynasi va chop etish masshtablari roʻyxatiga 1:75 kabi masshtablar qoʻshadi; ular chizmada saqlanadi (DWG va DXF 2000), boshqa dasturdagi chizma esa oʻz roʻyxatini olib keladi. Qarang: [Masshtablar](topic:units-papers-scales#scales).
- **Boshqa alifbolardagi matn.** Kirill, koreys, xitoy, yapon yoki vyetnam kod sahifalarida saqlangan DXF fayllari endi matni bilan ochiladi, xitoy, yapon va koreys matni PDF larda chop etiladi (chop etish birinchi marta kerak boʻlganda kattaroq shriftni yuklaydi). Qarang: [Shrift](topic:text#font).

### Chop etish va printerlar

- **Chop etish uslubi jadvallarida koʻproq.** Har bir rang uchun jadval endi chiziq turini, chiziq uchini va birlashtirishni, shuningdek toʻldirish uslubini ham belgilashi mumkin: u toʻliq toʻldirishni shtrixli chiziqlar bilan chop etadi. Jadvalning oʻz chiziq qalinliklari roʻyxati va chiziq turi masshtabi bor. Qarang: [Chop etish uslubi jadvallari](topic:plot-pdf#plot-style-tables).
- **Chop etish, PNG va SVG fayllari.** Chop etish oynasida {{ui:Chop etish…}}, {{ui:PNG yuklab olish}} (300 dpi) va {{ui:SVG yuklab olish}} bor. CadCraft Studio da u kompyuterdagi printerlarni, ularning qogʻozini va nusxalar sonini koʻrsatadi. Qarang: [Chop etish](topic:plot-pdf#print) va [Rasm va SVG fayllari](topic:plot-pdf#picture-and-svg-files).

### 3D va nuqtalar bulutlari

- **Boshqa dasturlardan 3D qattiq jismlar.** Chizmaning model fazosidagi qattiq jismlar, mintaqalar va jismlar 3D yorligʻida faqat oʻqish uchun koʻrinadi, DWG sifatida saqlanganda esa oʻzgarishsiz qaytib yoziladi. CadCraft hali chizmaydigan sirtdagi yoqlar roʻyxatlanadi, taxmin qilinmaydi. Qarang: [Boshqa dasturlardan qattiq jismlar](topic:3d-solids#solids-from-other-programs).
- **Bir nechta skanerni roʻyxatdan oʻtkazish.** {{cmd:REGISTERSCANS}} (`REGSCAN`) turli joylardan olingan skanerlarni bitta koordinatalar tizimiga joylashtiradi: nuqtalar juftligi yoki yozilgan maqsad koordinatalari boʻyicha, ularni ICP bilan aniqlashtiradi, roʻyxatdan oʻtkazishni kichik loyiha fayliga saqlaydi va roʻyxatdan oʻtgan bulutni bitta LAS yoki E57 fayliga yozadi. Qarang: [Bir nechta skanerni bittaga roʻyxatdan oʻtkazish](topic:register-scans).
- **USD eksport.** {{cmd:USDOUT}} yoki {{cmd:EXPORT3D}} › {{ui:USD}} 3D yorligʻidagi qattiq jismlarni `.usda`, `.usdc` yoki `.usdz` sifatida yozadi. Qarang: [3D modelni USD sifatida eksport qilish](topic:usd).
- **3D yorligʻidagi hisob-kitoblar.** 3D yorligʻidagi asboblar masofa soʻraganda, buyruq satridagidek hisob-kitobni yozishingiz mumkin. Qarang: [Yozilgan qiymatda arifmetika](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Ishlab chiqarish

- **Chizmani lazerga yuborish.** {{cmd:LASER}} yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Lazer…}} chizma ustida panel ochadi: har bir qatlam kesadi, chizadi, chiziqlarni gravirovka qiladi, shakllarni toʻldiradi, rasmni gravirovka qiladi yoki yuborilmaydi, quvvat, tezlik va oʻtishlar bilan. Oldindan koʻrinish tahrirlaringizga ergashadi, {{ui:G-code ni saqlash…}} GRBL lazer rejimi G-code ini yozadi va Chrome yoki Edge da panel ishni ramkalashi va USB orqali yuborishi mumkin. Sozlamalar chizmada (DWG va DXF) saqlanadi. Qarang: [Chizmani lazerga yuborish](topic:laser-cutting).
- **Elektr qoʻshimchasida qurilish oʻrnatish belgilari.** Maʼlumot, telefon va TV rozetkalari, kalit va vaqt kalitlari, termostat, chiqish belgisi, detektorlar, chaqiruv nuqtasi va signal, ventilyator, suv isitgich, plita, elektr mashinasi zaryadlash nuqtasi, energiya hisoblagichi va yordamchi shchit, shuningdek RCD va RCBO belgilari. Zanjirda RCD boʻlishi mumkin, shchit jadvalida RCD ustuni bor va tekshiruvlar 30 mA yoki undan kam RCD siz rozetka zanjirlarini belgilaydi. Bu rejalashtirish eslatmasi, qoida tekshiruvi emas.
- **P&ID qoʻshimchasi.** P&ID jarayon sxemalarini chizadi: ulanish nuqtalari bilan belgilar, jarayon va signal chiziqlari, yorliqlar, chiziq raqamlari, chiziq, jihoz, asbob va klapan roʻyxatlari (CSV yoki ish kitobi) va tekshiruvlar. U CadCraft bilan birga keladi va {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Qoʻshimchalar}} da yoqmaguningizcha oʻchiq turadi. Bu chizmachilik yordamchisi, muhandislik tasdiqlanishi emas, uning soʻzlari hozircha faqat inglizcha.

### Boshlash va ekran

- **Yoʻriqnomali birinchi chizma.** {{cmd:TOUR}} (yoki boshlash kartasidagi {{ui:Turni boshlash}}) sizni haqiqiy chizmada oltita qadam orqali yetaklaydi: chiziq, aylana, siljitish, qirqish, oʻchirish va oʻlcham. U CadCraft hech narsasiz ochilganda birinchi marta oʻzi boshlanadi. Qarang: [Yoʻriqnoma bilan xohlaysizmi?](topic:getting-started#prefer-to-be-guided)
- **Shpargalka va buyruqlar xaritasi.** [Shpargalka](topic:cheat-sheet) 40 ta kundalik buyruqni bir sahifada beradi, chop etish uchun PDF sifatida ham, va [buyruqlar xaritasi](topic:command-map) buyruqlarni qisqa nomlari bilan A dan Z gacha roʻyxatlaydi.
- **Asboblar paneli istalgan tomonda.** {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Asboblar paneli joylashuvi}}: yuqorida (avvalgidek), pastda, chapda yoki oʻngda, yoki {{cmd:TOOLBARDOCK}} ni yozing. Qarang: [Asboblar paneli joylashuvi](topic:settings#toolbar-position).
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Asboblar paneli qatorlari}}: sigʻdirish, 2 qator yoki 1 qator, CadCraft asboblar paneli va Drafting classic hamda Lentali uslublar uchun. {{key:Shift+Ctrl+F1}} ularni almashtiradi, {{key:Ctrl+F1}} tugmalar nimani koʻrsatishini almashtiradi, {{cmd:TOOLBARROWS}} va {{cmd:TOOLBAR}} ularni belgilaydi. Boshlash maslahatida yopish tugmasi bor. Buni pull request sifatida yuborgani uchun GJoe2 ga rahmat. Qarang: [Asboblar paneli qatorlari](topic:settings#toolbar-rows).

### CadCraft Studio da

- **Tarix.** {{cmd:HISTORY}} (`HIST`) yoki {{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:Tarix…}}: chizmani ochganingizda va saqlaganingizda Studio saqlaydigan nusxalar, va bulutdan ochgan boʻlsangiz, chizmaning bulut versiyalari. Bittasini ochish yoki tiklash yoki ikkitasini solishtirish mumkin, qoʻshilgan, oʻchirilgan va oʻzgargan narsalar rang bilan koʻrsatiladi. Qarang: [Tarix](topic:history).
- **acad.lsp va acaddoc.lsp.** {{cmd:APPLOAD}} da qoʻllab-quvvatlash jildini tanlang: CadCraft ishga tushganda shu ikki fayl yuklanadi (acaddoc.lsp har bir yangi chizma yorligʻi uchun yana), soʻng `S::STARTUP` ishlaydi. Qarang: [Ilovalarni yuklash](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Chop etish oynasi alohida oynada.** Uning sarlavha panelidagi tugma uni boshqa monitorga qoʻyiladigan oynaga koʻchiradi. Qarang: [Dialogni koʻchirish](common:arrange-panels#move-a-dialog).

### AI yordamchilar uchun

- **Fayllar nomi boʻyicha, siz tanlagan jildlarda.** CadCraft Studio da yordamchi fayllarni nomi boʻyicha ochishi, saqlashi va chop etishi, va buyruqqa soʻralgan faylni berishi mumkin (fayldan INSERT, COUNT eksporti, SAVEAS, PLOT), lekin faqat {{ui:Sozlamalar}} › {{ui:CadCraft}} › {{ui:Yordamchilar}} › {{ui:Foydalanishi mumkin boʻlgan jildlar}} ostida qoʻshgan jildlaringiz ichida. Qarang: [Siz tanlagan jildlardagi fayllarga ruxsat berish](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Kamroq chaqiruv.** Yordamchi buyruq satrini bir marta yozishi, chaqiruvlari orasida buyruqni ochiq saqlashi, obyektlarni turi va qatlami boʻyicha roʻyxatlamasdan sanashi va blokni atribut qiymatlari bilan bir qadamda joylashtirishi mumkin.
- **Oynasiz.** `cadcraft` buyruq satri SVG chop etishni yozadi va koʻp fayllarni bir vaqtda konvertatsiya qiladi, chop etadi, tekshiradi yoki tavsiflaydi. MCP paketi hali nashr qilinmagan. Qarang: [Fayllar bilan ilovani ochmasdan ishlash](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Oʻzgargan

- **Sensorli panel suradi.** Sensorli panelda ikki barmoqni siljitsangiz, 2D koʻrinish ular bilan birga suriladi; qisish va sichqoncha gʻildiragi masshtabni oʻzgartiradi. Qarang: [Sichqoncha, sensorli panel va teginish](topic:mouse-trackpad-touch).
- **OLE obyektlari saqlanadi.** DXF ning oʻrnatilgan obyektlari oʻz rasmi yoki yorliqli ramka sifatida koʻrsatiladi va DXF 2000 bilan qaytib saqlanadi. DWG ning obyektlari saqlanadi va DWG sifatida saqlashda qaytib yoziladi, lekin hali koʻrsatilmaydi. Ilgari saqlashda ular yoʻqolardi. Qarang: [Boshqa dasturlardagi obyektlar (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Yangi chizmaning birliklari** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} da belgilagan (yulduzcha bilan) birligingizga ergashadi.

## Tuzatilgan

- Boʻsh ochilgan yoki koʻrinish oynasini yoʻqotib, oʻrnida butun modelni koʻrsatgan joylashuvlar endi haqiqiy koʻrinish oynalari bilan ochiladi. Mazmuniga bogʻlanmagan joylashuv saqlanadi va ochilish hisobotida bu aytiladi.
- Eski kod sahifalaridagi DXF fayllari kirill va koreys matnini buzib koʻrsatardi. Endi toʻgʻri oʻqiladi.
- Boshqa dasturlardan kelgan abzats matni ochilganda formatlashini yoʻqotar va saqlanganda oddiy matn boʻlib qolardi.

## Hamma ilovalarda

- **Birliklar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Birliklar}} uzunlik, maydon, hajm, burchak va qiyalik uchun har biriga roʻyxat beradi, birliklar taʼriflari bergan aniq oʻlchamlar bilan (AQSh surveyor futi oʻz birligi). Ishlatmaydigan birliklaringizni oʻchiring, ular birlik roʻyxatidan chiqadi; birini belgilasangiz, yangi ish shu birlikda boshlanadi. Fayl doim oʻz birligini saqlaydi. CadCraft da belgi yangi chizmaning birliklarini chizma olib yura oladigan birlik boʻlganda belgilaydi; CadCraft ning oʻz {{ui:Birliklar}} oynasi hali kalitlarga ergashmaydi. Chizma birliklarga ega boʻlgach, yozgan uzunligingiz istalgan birlik belgisini olib yurishi mumkin. Qarang: [Birliklar, yozilgan qiymatlar va birliklar roʻyxatlari](common:unit-lists).
- **Zichroq joylashuv va yigʻiladigan panellar.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Joylashuv zichligi}} › {{ui:Ixcham}} ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelda ingichka sarlavha paneli bor: uni sudrab panelni biriktiring yoki suzdiring, boshqa panel sarlavhasiga tashlab bitta ramkani yorliqlar sifatida ulashing, chetga surilishi uchun mahkamlang yoki yashirib, chetdan qaytaring. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Dialoglar koʻchadi.** Dialogni sarlavha panelidan sudrab chizmadan chetga suring; u qoldirgan joyiga qaytadi. Sarlavha paneliga ikki marta bosing, uni yana markazga qaytarish uchun. Qarang: [Dialogni koʻchirish](common:arrange-panels#move-a-dialog).
- **Yordamchilar uchun retseptlar.** Oʻz yordamchingiz uchun oʻnta ishlangan soʻrov (chizmani tartibga keltirish, toʻplamni chop etish, chizmalarni tekshirish, modelga savol berish, hajmlarni hisoblash, detal variantini sinash...), har biri chaqiradigan asboblar va kerakli ruxsatlar bilan, va har biri bizning testlarimizda qayta ishlatiladi. Ilovalarda AI yoʻq. Qarang: [Yordamchilar uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Til}} da yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovalarning har bir soʻziga ega, ammo ular ona tilida soʻzlovchi tomonidan hali koʻrib chiqilmagan qoralamalar. Yordam mavzulari inglizcha.
- **CadCraft Studio** yangilanish tekshiruvi nima uchun muvaffaqiyatsiz boʻlganini aytadi (tizimingiz uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo) va "Tayyor" demaydi, yopgan Yangi nima bor kartasini esa yangi reliz chiqmaguncha qaytarmaydi.

## Bu versiyada hali yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga koʻchdi, chunki sertifikat tekshiruvi hali tugamagan. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download da tekshiring. Windowsda SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:Batafsil maʼlumot}} ni, soʻng {{ui:Baribir ishga tushirish}} ni tanlang. Macda birinchi marta CadCraft Studio ustiga oʻng tugmani bosing va {{ui:Ochish}} ni tanlang. CadCraft Studio hali ilova doʻkonida emas va hozircha iPad yoki iPhone versiyasi yoʻq.
- {{ui:Birliklar}} dagi burchak va qiyalik roʻyxatlari saqlanadi, lekin hozircha ularni oʻqiydigan oyna yoʻq.
- DWG ning OLE obyektlari saqlanadi, lekin koʻrsatilmaydi, va OLE obyektlari ichidagi metafayl rasmlari chizilmaydi.
- Boshqa dasturlardan chop etish uslubi jadvallarini (CTB fayllari) oʻqish namuna fayl kelishini kutadi.
- `\M+` kodlari sifatida yozilgan eski Osiyo matni oʻqiladi, lekin boshqa dasturdan fayl bilan hali tekshirilmagan.
- PDF tagliklari: sahifa ichidagi rasmlar ekranda koʻrinadi, lekin chop etilmaydi, yordamchining chop etishi tagliklarni chiqarib tashlaydi, va saqlangan kesim va masshtab boshqa dasturlarda qanday oʻqilishi tekshirilmagan.
- Tarix: CadCraft saqlashlarini hali bulutga yubormaydi, shuning uchun bulut versiyalari boshqa qurilmalardan va veb dan saqlanganlardir. Tarix faqat CadCraft Studio da.
- Studio acad.lsp qoʻllab-quvvatlash jildini qayta ishga tushirgandan keyin saqlaydimi, hali tekshirilmagan; soʻrasa, APPLOAD da jildni qayta tanlang.
- Lazer paneli hali haqiqiy lazerda sinalmagan: har bir sozlamani chiqindi materialda sinab koʻring. CadCraft Studio da Web Serial yoʻq, shuning uchun Studio da panel faqat G-code ni saqlaydi.
- Skanerlarni roʻyxatdan oʻtkazish soxta skanerlarda sinalgan, haqiqiy skaner toʻplamida hali emas.
- Ikki barmoq bilan surish simulyatsiya qilingan sensorli panel hodisalarida sinalgan, haqiqiy sensorli panelda hali emas.
- {{cmd:PEDIT}} da Tahrirlash uchi varianti yoʻq (tutqichlar yoki Xossalardan foydalaning). Parallel koʻchirish, qirqish, choʻzish, fillet, uzish va birlashtirish hali splaynlarni qabul qilmaydi; splaynning balandligi (Z) saqlanmaydi.
- Yangi abzats matniga formatlash kodlari hali berilmaydi, SVG chop etishlarida formatlangan matn bitta rangda chiqadi.
- WBLOCK ning Butun chizma varianti faqat modelni yozadi, varaqlarni emas. Joriy oʻlcham uslubi faylda saqlanmaydi: chizma Standard joriy holda ochiladi.
- Lentali menyu uslublarida hali qatlam, rang yoki chiziq turi roʻyxatlari yoʻq: {{ui:Qatlamlar}} panelidan va {{ui:Xossalar}} dan foydalaning.
- Nuqtalar bulutlari hali chizmada saqlanmaydi va chop etilmaydi, E57 fayllari esa 6 million nuqtagacha va 512 MB gacha ochiladi.
- CadCraft saqlagan DWG fayllari hali AutoCAD da oʻzida tekshirilmagan.

Qolgan hamma narsa [Hali qurilmagan](topic:not-built-yet) da.
