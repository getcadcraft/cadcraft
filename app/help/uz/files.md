---
title: Fayllar: nima ochiladi, nima saqlanadi
summary: CadCraft ochadigan, saqlaydigan va eksport qiladigan formatlar, nima saqlanishi yoki aylantirilishi va fayllar qayerga borishi.
keywords: xclip, clip, xclip chegarasi, bind clipped, dwg, dxf, pdf, r12, ochish, saqlash, eksport, import, formatlar, aylantirish, yuklab olish, saveas, dxfout, boshqacha saqlash, dwg saqlash, format, qsave, xref, xattach, bogʻlangan chizma, tashqi havola, bind, reload, detach
from: 6d68b34e
---

## Qisqacha

| Format | Ochish | Saqlash | Izoh |
|---|---|---|---|
| DXF (matn, istalgan versiya) | Ha | Ha, DXF R12 yoki DXF 2000 sifatida | Ikkilik DXF qabul qilinmaydi: avval uni matnli DXF sifatida saqlang. |
| DWG | Ha | Ha, DWG sifatida (AutoCAD 2000, 2004, 2007, 2010, 2013 yoki 2018) | CadCraftning oʻz DWG kutubxonasi oʻqiydi va yozadi (AutoCAD R13 dan 2018 gacha boʻlgan fayllar). Sizning DWG faylingiz hech qachon oʻzgartirilmaydi. Shikastlangan fayllar yoki oʻqish imkoni boʻlmagan versiyalar xabar bilan rad etiladi. |
| PDF | Sahifani olib keladi: fon sifatida yoki obyektlar sifatida ([PDF fonlari](topic:pdf-underlay)) | Ha, chop etish orqali | Varaqning yoki modelning masshtabdagi vektor PDF. |

Ochgan (yoki {{ui:Yangi}} bilan boshlagan) har bir chizma chizma maydoni ustida oʻz yorligʻiga ega boʻladi; hali hech kim tegmagan yangi chizma oʻrniga yangi yorliq qoʻshilmaydi. Yorliqni bosib almashtiring, uning {{ui:×}} tugmasi bilan yoping (saqlanmagan oʻzgarishlar boʻlsa, CadCraft avval soʻraydi) yoki ochiq chizmalarni yonma-yon joylashtiring: [Ekranni boʻlish](topic:split-screen) ga qarang.

## Chizmani ochish

- {{key:Mod+O}} ni bosing, {{ui:Ochish}} tugmasini bosing yoki `OPEN` buyrugʻini yozing, soʻng faylni tanlang.
- Yoki `.dwg` yoki `.dxf` faylni chizma maydoniga sudrab tashlang.

Fayl brauzeringiz ichida oʻqiladi. Hech qayerga yuklanmaydi. Tarixda nechta obyekt va qatlam kirgani va bu qancha vaqt olgani koʻrsatiladi; chap panelning {{ui:Chizma}} boʻlimida format koʻrsatiladi, masalan "DWG 2018 (AC1032)".

DWG oʻquvchisi CadCraft tarkibiga kiradi va sahifa yuklangandan keyin ochadigan birinchi DWG bilan birga yuklanadi (bir necha yuz KB), shuning uchun alohida yuklab olish kerak emas. U faylni fonda oʻqiydi, shuning uchun katta DWG ochilayotganda ham sahifa javob berishda davom etadi.

### Nima kiradi

- Chiziqlar, yoylar, aylanalar, polichiziqlar (yoy segmentlari bilan), ellipslar, nuqtalar, matn va koʻp qatorli matn, solidlar, shtrixlashlar (standart naqshlar ularning chiziqlari sifatida, boshqalari tekis rang sifatida), atributlari bilan blok havolalari (tahrirlash mumkin boʻlgan qiymatlar; qarang: [Blok atributlari](topic:attributes)), oʻlchamlar va koʻrinish oynalari bilan maketlar.
- Splinelar spline sifatida kiradi (daraja, nazorat nuqtalari, tugunlar, ogʻirliklar, moslash nuqtalari); qarang: [Splinelar va polichiziqlar](topic:splines).
- Bitta yetakchi chiziq va matnli multileaderlar tahrirlash mumkin boʻlgan CadCraft multileaderlari sifatida kiradi (qarang: {{cmd:MLEADER}}). Boshqalari (blokli, bir nechta yetakchi chiziqli yoki egri chiziqli) boshqa dastur chizgandek chiziladi va bitta boʻlib harakatlanadi; tarixda ularning soni koʻrsatiladi.
- Rasmlar (images) fayl nomi bilan ramka sifatida koʻrinadi, to {{cmd:IMAGE}} bilan faylni CadCraftga bermaguncha: qarang [Chizmadagi rasmlar](topic:pictures#show-the-pictures-a-dwg-uses). Wipeoutlar oʻz ramkasi sifatida koʻrinadi, ularning ostidagilar esa koʻrinib turadi.
- DWG dagi jadvallar boshqa dastur chizgandek kiradi.
- Model fazosidagi 3D yuzlar {{ui:3D}} yorligʻida kiradi, 2D obyektlar sifatida emas; bloklar ichidagilar ham shunday, har bir blok havolasi uchun modelda bir marta. Blok ichida va varaqda ular ham yassi, kontur sifatida chiziladi. Qarang: [Model 3D da](topic:3d-solids).
- Qatlamlar rangini, yoqilgan, muzlatilgan, qulflangan va chop etish sozlamalarini saqlaydi. DEFPOINTS hech qachon chop etilmaydi.
- Nuqtalarini oʻqish mumkin boʻlgan oʻlchamlar haqiqiy, tahrirlanadigan CadCraft oʻlchamlariga aylanadi. Avval ular boshqa dastur chizgandek aynan shunday koʻrsatiladi; birortasini oʻzgartirsangiz, CadCraft uni oʻz uslubida qayta chizadi.
- Har bir layout varaq yorligʻiga aylanadi. Boshqa dasturda har bir layoutda varaqning oʻzi boʻlgan yashirin birinchi koʻrinish oynasi bor; CadCraft uni chiqarib tashlaydi.

### Hali nima kirmaydi

CadCraft chizolmaydigan narsalar sanaladi, taxmin qilinmaydi. Chap paneldagi "Bu fayl haqida" oynasi ularni "Hali koʻrsatilmagan:" deb roʻyxatlaydi, har bir tur va sonini koʻrsatgan holda. Odatiy holatlar: DXF dagi jadvallar, meshlar va blok ichidagi 3D solidlar. Model fazosidagi 3D solidlar, regionlar va jismlar 3D yorligʻida koʻrinadi (qarang: [Model 3D da](topic:3d-solids#solids-from-other-programs)). Faylda burilgan koʻrinish oynalari ham xuddi oʻsha yerdagidek burilib koʻrinadi va saqlaganda burilishini saqlaydi; joriy UCS, nomlangan UCSlar va burilgan koʻrinish ham shunday.

Matn bitta Helvetica uslubidagi shriftda chiziladi. Asl dasturning torroq shriftida bir qatorga sigʻadigan yorliq CadCraftda ikki qatorga oʻralishi mumkin.

## Saqlash

Saqlashning uchta usuli bor. Har biri nusxani yuklab oladi.

- **{{ui:Saqlash}}**: {{key:Mod+S}} ni bosing, {{ui:Saqlash}} tugmasini bosing yoki `SAVE` (shuningdek `QSAVE`) buyrugʻini yozing. U chizma formatida saqlaydi: ochilgan DWG boʻlsa DWG, DXF boʻlsa DXF. DWG oʻz versiyasini saqlaydi (2018 fayl 2018 boʻlib saqlanadi). Yangi chizma bu brauzerda {{ui:Boshqacha saqlash}} da oxirgi tanlagan formatini va DWG versiyasini oladi; hech narsa tanlanmagan boʻlsa, AutoCAD 2000 formatidagi DWG.
- **{{ui:Boshqacha saqlash}}**: {{key:Mod+Shift+S}} ni bosing, {{ui:Boshqacha saqlash}} tugmasini bosing yoki `SAVEAS` buyrugʻini yozing. {{ui:Nusxani quyidagi nom bilan saqlash}} muloqot oynasi {{ui:DWG}} ni, {{ui:Versiya}} roʻyxatini (AutoCAD 2018, 2013, 2010, 2007, 2004 yoki 2000), {{ui:DXF R12}} va {{ui:DXF 2000}} ni taklif qiladi, har biri oʻzi beradigan fayl nomi bilan, va chizmaning joriy formati va versiyasi allaqachon tanlangan boʻladi. {{ui:Saqlash}} ni bosib yuklab oling yoki {{ui:Bekor qilish}} (yoki {{key:Esc}}) ni bosing — hech narsa saqlanmaydi; tarixda "Saqlanmadi." yoziladi. Tanlovingiz saqlanib qoladi: {{key:Mod+S}} shu chizma uchun undan keyin uni ishlatadi, va bu brauzerdagi yangi chizmalar uni boshidan oladi.
- **DXFOUT**: `DXFOUT` buyrugʻini yozing. U har doim DXF R12 nusxasini yuklab oladi, keyingi {{key:Mod+S}} esa baribir chizmaning oʻz formatida saqlaydi.

Brauzer `<chizma nomi>.dwg` yoki `<chizma nomi>.dxf` faylini yuklab oladi. Har bir saqlash **yangi yuklab olish** boʻladi; ochgan faylingiz hech qachon ustiga yozilmaydi va oʻzgartirilmaydi. Tarix buni tasdiqlaydi, masalan: "Nusxa Plan.dwg sifatida saqlandi (DWG (AutoCAD 2018)). Asl Plan.dxf oʻzgarishsiz qoldi." DXF uchun u "(DXF R12, istalgan CAD dasturida ochiladi)" deydi. Uning ostidagi qatorlar yoʻlda oʻzgargan narsalarni sanab beradi.

CadCraft ish stoli ilovasida ishlaganda, saqlash boshqa ish stoli dasturlaridagidek ishlaydi: {{key:Mod+S}} chizmani ochgan faylingizga oʻz formati va versiyasida qaytadan yozadi, va tarix qayerga saqlanganini aytadi. {{ui:Boshqacha saqlash}} va eksportlar tizimning saqlash oynasini koʻrsatadi, va ikki marta bosgan `.dwg`, `.dxf` yoki `.ccsheets` fayl CadCraftda ochiladi.

PDF uchun esa chop eting (quyida qarang).

## DWG nimani saqlaydi va nimani oʻzgartiradi

CadCraft DWG ni oʻzi, brauzeringiz ichida, oʻqiydigan kutubxonasining oʻzi bilan yozadi. Versiyani {{ui:Boshqacha saqlash}} da tanlang: AutoCAD 2000 formati (fayl versiyasi AC1015) eng koʻp dasturlarda, eskilarida ham ochiladi; yangi formatlar (2004, AC1018, 2018 gacha, AC1032) haqiqiy ranglarni ham saqlaydi. Hech narsa yuklanmaydi, va DWG ni saqlash oflayn ishlaydi.

Har bir versiya saqlangan fayllarni uchta boshqa dasturning DWG oʻquvchisi va CadCraftning oʻzi bilan qayta oʻqib tekshiriladi. CadCraft DWG hali AutoCADʼda ochilmagan.

### DWG nimani saqlaydi

- Chiziqlar, yoylar, aylanalar, ellipslar, nuqtalar va yoy segmentli polichiziqlar.
- Bir qatorli matn, uning tekislash va kenglik koeffitsienti bilan.
- Koʻp qatorli va oʻralgan matn koʻp qatorli matn sifatida. Boshqa dastur uni xuddi shu kenglikdan qayta oʻraydi.
- Obyekt ranglari: qatlam boʻyicha, blok boʻyicha, 255 ta standart rang va 2004 formati va undan keyingilarda haqiqiy ranglar.
- Qatlamlar rangi, chiziq turi, chiziq qalinligi va yoqilgan, muzlatilgan, qulflangan va chop etish sozlamalari; obyektlarning oʻz chiziq turlari, chiziq qalinliklari va chiziq turi masshtablari, chiziq turi naqshlari va chizmaning chiziq turi masshtabi.
- Birlik va uzunlik formati (oʻnlik, futlar va dyuymlar, kasrlar…).
- Blok asosiy nuqtasi va atribut taʼriflari bilan bloklar, shu jumladan koʻrinmas, doimiy va oldindan belgilangan.
- Masshtabi, burilishi va atribut qiymatlari bilan blok havolalari.
- Qattiq toʻldirishlar va naqshli shtrixlashlar — naqsh, masshtab va burchak bilan (naqshning oʻz chiziqlari, shuning uchun boshqa dasturlar CadCraft chizadigan chiziqlarning oʻzini chizadi).
- Oʻlchamlar haqiqiy oʻlchamlar sifatida: boshqa dasturlar ularni cho‘zilganda qayta oʻlchaydi. Har biri oʻz sozlamalarini (matn balandligi, oʻq oʻlchami, kasr raqamlari, uzunlik formati) va matnini saqlaydi hamda har bir DWG oʻlchamida boʻladigan chizilgan nusxani olib yuradi.
- Varaqlar (layoutlar): har biri qogʻoz oʻlchami va birliklari, uning ustiga chizilgan narsalar va koʻrinish oynalari bilan, ularning koʻrinishi va masshtabi bilan.
- Nomlangan koʻrinishlar.
- Multileaderlar multileader sifatida.
- Qatlam va blok nomlari yozilganidek, katta va kichik harflarda. (DXF R12 ularni bosh harflarda yozadi.)

### DWG nimani oʻzgartiradi

Bularning har biri, chizmangizga tegishli boʻlsa, saqlagandan keyin tarixda koʻrsatiladi.

| CadCraftda | Saqlangan DWG da |
|---|---|
| Haqiqiy ranglar (rang tanlagich bilan tanlangan), 2000 formatida | Eng yaqin standart rang: 2000 formatida faqat 255 ta rang bor. Haqiqiy ranglarni saqlash uchun 2004 yoki undan keyingi formatda saqlang |
| Varaqning nomlangan koʻrinishlari | Qogʻoz fazosidagi koʻrinishlar: DWG qaysi varaq ekanini aytmaydi, shuning uchun CadCraft faylni qayta ochganda ular birinchi varaqqa tegishli boʻladi |
| Kenglik koeffitsienti bilan koʻp qatorli matn | Oddiy harf kengligi: DWG da kenglik koeffitsienti faqat bir qatorli matnga qoʻllanadi |
| DWG ruxsat bermaydigan belgilar bilan qatlam yoki blok nomlari | Oʻzgartirildi: bogʻlangan chizmadan kelgan nom, masalan `Base\|Walls`, `Base$0$Walls` ga aylanadi (bogʻlangan chizmani bogʻlash nomlagandek), boshqa belgilar esa `_` ga aylanadi |

### Nega R12, va nima aylanadi

DXF sifatida saqlaganingizda CadCraft DXF R12 yozadi — har bir CAD dasturi ocha oladigan versiya. U ba’zi funksiyalardan eskiroq, shuning uchun bir nechta narsalar soddaroq shaklda yoziladi:

| CadCraftda | Saqlangan R12 faylida |
|---|---|
| Koʻp qatorli matn | Har bir qator uchun alohida matn obyekti |
| Ellipslar | Ellipsni kuzatuvchi polichiziqlar |
| Shtrixlashlar (ochilgan fayllardan) | Faqat ularning konturlari |
| Haqiqiy ranglar (rang tanlagich bilan tanlangan) | Eng yaqin standart rang |
| Chiziq qalinliklari va obyektlarning oʻz chiziq turi masshtablari | Tashlab yuboriladi: R12 da ularning ikkisi ham yoʻq (chiziq turlari saqlanadi) |
| Qatlam va blok nomlari | Bosh harflarda yoziladi; boʻshliqlar va boshqa belgilar `_` boʻladi, nomlar 31 belgigacha qisqartiriladi ("Title block" `TITLE_BLOCK` boʻladi) |
| Chop etilmaydigan qilib qoʻyilgan qatlamlar | Boshqa dasturlar ularni chop etadi (CadCraft chizmada varaq boʻlsa, sozlamani eslab qoladi) |
| Oʻlchamlar | Oʻz chizilgan bloki bilan haqiqiy oʻlchamlar, shuning uchun boshqa dasturlar ularni siz koʻrgandek koʻrsatadi |
| Multileaderlar | Ular chizadigan chiziqlar, oʻq uchi va matn |
| Nomlangan koʻrinishlar | Saqlanadi, nomlari bosh harflarda; varaqning koʻrinishlari birinchi varaqqa qaytadi |
| Bir nechta varaq | Birinchi varaq har bir dastur koʻrsatadigan qogʻoz fazosi boʻladi; qolganlari `CCLAYOUT_1`, `CCLAYOUT_2` … nomli bloklar sifatida saqlanadi, CadCraft faylni ochganda ularni qaytadan varaqqa aylantiradi |

Tarix chizmangizga tegishli boʻlgan har birini sanab beradi.

:::tip
Chizma ustida bir necha kun davomida ishlash uchun DXF sifatida saqlang va keyingi safar oʻsha DXF ni oching. CadCraft chizishi mumkin boʻlgan hamma narsa, shu jumladan oʻlchamlar, bloklar va barcha varaqlar, aylanish jarayonidan oʻtadi.
:::

## Bogʻlangan chizmalar (tashqi havolalar)

{{cmd:XATTACH}} (`XA`, yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Chizmani bogʻlash (xref)}}) boshqa DWG yoki DXF ni bogʻlaydi: faylni tanlang, soʻng u qayerga borishini bosing ({{key:Enter}} uni 0,0 ga qoʻyadi). U fayl nomi bilan atalgan bitta blok sifatida kiradi, ikki chizmaning birliklari har xil boʻlsa, toʻgʻri masshtabda. Uning qatlamlari va bloklari oldiga havola nomi qoʻyilgan holda oʻz nomlarini saqlaydi — `Plan|Walls`, `Plan|Door` — shuning uchun ular hech qachon sizniki bilan aralashmaydi: bogʻlangan qatlamlarni yoqing va oʻchiring, muzlating yoki qulflang xuddi oʻzingizniki kabi. Havola faqat oʻqish uchun: boshqa chizmani oʻzgartiring va uni qayta yuklang. Havola qatlamlarida belgilagan narsalar (rang, chiziq turi, chiziq qalinligi, yoqish/oʻchirish, muzlatish, qulflash, chop etish) havolani qayta yuklaganingizda, havola hali havola boʻlganda chizmani DWG sifatida saqlaganingizda va boshqa chizma bu chizmani bogʻlaganda saqlanib qoladi.

{{cmd:XREF}} (`XR`): `?` bogʻlanishlarni sanaydi (yuklangan yoki yuklanmagan, qaysi fayl, nechta havola); `A` biriktiradi; `R` uni faylidan qayta yuklaydi (faylni qayta tanlang: brauzer papkalaringizga oʻzi kira olmaydi); `B` bogʻlaydi (oddiy bloklar va qatlamlarga aylanadi, nomi `Plan$0$Walls`); `D` ajratadi (uning havolalari va qatlamlari yoʻqoladi). Har biri bitta bekor qilish qadamiga teng.

{{cmd:XCLIP}} (`XC`) blok havolalarini va bogʻlanishlarni kesadi: ularni tanlang, yangi chegara uchun `N`, soʻng `R` va ikki burchak yoki `P` va koʻpburchak nuqtalari ({{key:Enter}} uni yopadi); `D` kesishni olib tashlaydi. Faqat ichkarida qolgan narsa koʻrinadi va chop etiladi, kesish esa havola bilan birga harakatlanadi. DWG va DXF 2000 kesishlarni saqlaydi; DXF R12 havolani butunligicha saqlaydi va buni aytadi. Kesilgan havolalari bor bogʻlanishni bogʻlaganingizda {{cmd:XREF}} `B` soʻraydi: `A` hammasini bogʻlaydi, `C` faqat har bir havoladagi kesilgan qismni saqlaydi (chiziqlar va yoylar chegarada kesiladi; matnlar va ichki bloklar kiritish nuqtasi ichkarida boʻlsa qoladi).

Ochgan chizmangiz CadCraft koʻra olmaydigan fayllarga bogʻlangan boʻlishi mumkin: nechtasi yuklanmaganini aytadi. Ularni koʻrish uchun {{cmd:XREF}}, `R` ni yozing va har bir faylni tanlang.

Saqlaganda yuklangan havola faylga **bogʻlanadi** (boshqa dasturlar uni `Plan$0$…` nomli oddiy bloklar va qatlamlar sifatida koʻradi) va tarix buni aytadi. Yuklanmagan havola DWG va DXF da oʻz fayliga havola boʻlib qoladi.

## 3D da ochish

{{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:ModelCraft’da ochish}} ({{cmd:OPENIN3D}}) chizmani 3D modellash ilovasida yangi yorliqda DWG sifatida ochadi, uni yuklamasdan. Ilovada qilingan oʻzgarishlar oʻsha yerda qoladi; ularni oʻsha yerda saqlang. Menyu bandi faqat oʻsha ilova topshirilgan chizmani qabul qila oladigan joyda koʻrinadi.

## PDF ga chop etish

{{key:Mod+P}} ni bosing, {{ui:Chop etish}} tugmasini bosing yoki `PLOT` buyrugʻini yozing. PDF brauzer ichida tayyorlanadi va yuklab olinadi yoki chop etish uchun yangi yorliqda ochiladi. Qarang: [PDF ga chop etish](topic:plot-pdf).

## Fayllar qayerga boradi

Har bir saqlash va har bir chop etish yuklab olish boʻladi, shuning uchun fayllar brauzeringiz yuklab olishlarni qayerga qoʻyishiga qarab tushadi: odatda Yuklab olishlar papkasiga. Har safar papka tanlash uchun brauzeringizdagi yuklab olish sozlamasini oʻzgartiring; qayerdaligini [Brauzerlar va kompyuterlar](common:browsers) koʻrsatadi.

Siz ochgan yoki saqlagan hech narsa bizga yuborilmaydi. Qarang: [Fayllaringiz qayerga boradi](common:your-files).

## PLN va PLA loyiha fayllari

CadCraft DWG va DXF chizmalarini ochadi, Archicadning oʻz fayllarini (`.pln`, `.pla`, `.tpl`, `.bpn`) emas. Bunday faylni ochganingizda u nima ekanligini aytadi. Archicadda kerakli koʻrinishlar yoki maketlarni DWG sifatida saqlang va ularni shu yerda oching, yoki modelni IFC sifatida eksport qilib BimCraftda oching. BimCraft faylni qabul qila oladigan joyda CadCraft {{ui:BimCraftda ochish}} ni taklif qiladi.

## Saqlashdan oldin sahifa yopilsa

CadCraft siz oʻzgartirgan har bir chizmaning nusxasini faqat shu brauzerda, tahrirlashni toʻxtatganingizdan keyin bir zumda saqlaydi. Agar saqlashdan oldin yorliq yopilsa, brauzer toʻxtasa yoki kompyuter qayta ishga tushsa, CadCraft keyingi safar ishga tushganda **Ishingizni tiklaysizmi?** deb soʻraydi: {{ui:Tiklash}} chizmani saqlanmagan holda oʻz yorligʻida qayta ochadi. Chizmani saqlasangiz, uning nusxasi oʻchadi. Qarang: [Ishingizni tiklash](common:recover).

## Onlayn va oflayn

Ochish, chizish, saqlash (DWG va DXF) va chop etish barchasi kompyuteringizda bajariladi, shuning uchun CadCraft yuklangach ular ulanishsiz ishlaydi.

CadCraftdan ulanishsiz foydalanish uchun, ulanganingizda, yuqoridagi panelda {{ui:Oflayn uchun saqlash}} tugmasini bosing. Yozuv hisoblab boradi ("Saqlanmoqda 40 / 212") va "Oflayn tayyor" bilan tugaydi. Saqlangan nusxaga DWG oʻquvchisi ham kiradi, jami taxminan 5 MB, shuning uchun u saqlangach **DWG fayllar ham oflaynda ochiladi**. Tugmani yana bosing: {{ui:Qayta saqlash (eng yangi versiyani olish)}} yoki {{ui:Oflayn nusxani oʻchirish}}. "Saqlab boʻlmadi" degani baʼzi fayllar yuklanmagani: ulanishni tekshiring va qayta urinish uchun bosing. "Oflayn mavjud emas" degani bu brauzer oynasi nusxa saqlay olmaydi (shaxsiy oynalar va baʼzi boshqariladigan kompyuterlar).

Saqlangan nusxasiz, DWG oʻquvchisi sahifa yuklangandan keyin birinchi DWG ni ochganingizda olib kelinadi, shuning uchun DWG ni oflaynda ochish muvaffaqiyatsiz boʻlishi mumkin; DXF fayllarga u hech qachon kerak emas. CadCraft saqlanmagan boʻlsa, oflaynda sahifani qayta yuklamang.

Batafsil maʼlumot uchun qarang: [Oflaynda ishlash](common:offline).

:::offline
Siz hozir oflaynsiz. Chizmalar DWG yoki DXF sifatida saqlanadi va odatdagidek chop etiladi, DXF fayllar ochiladi. DWG fayllar CadCraft "Oflayn tayyor" koʻrsatsa yoki DWG oʻquvchisi shu yorliqda allaqachon yuklangan boʻlsa ochiladi.
:::

## Fayllardagi cheklovlar

Cheklovlar va parametrlar (qarang: [Chizmani cheklash](topic:constraints)) DWG va DXF da saqlanadi. Har bir cheklangan obyektda CadCraftning kichik izohi (kengaytirilgan maʼlumot) boʻladi, va ishlatilmagan `CADCRAFT_PARAMETRIC` nomli blok cheklovlar va parametrlar jadvalini saqlaydi. Boshqa dasturlar chizmani odatdagidek ochadi va ikkalasini ham eʼtiborsiz qoldiradi; ular tozalashda ishlatilmagan blokni oʻchirishi mumkin. Izohlar obyektlarga ularning oʻz kaliti orqali murojaat qiladi, fayl tutqichlari orqali emas, shuning uchun tutqichlarni qayta raqamlaydigan dastur ularni buzmaydi. Boshqa dastur cheklangan obyektni oʻchirgan yoki oʻzgartirgan boʻlsa, CadCraft uni ochganda undagi cheklovlarni tashlab yuboradi va nechtasini aytadi. Ularsiz fayl cheklovlarsiz ochiladi.

Detal modellash dasturidan eksport qilingan eskiz (`.json`) ham ochiladi: qarang: [Eskizlarni boshqa detal modellash dasturlariga koʻchirish va ulardan olish](topic:solidworks-sketches).

## Hali mavjud emas

- Saqlangan DXF da multileader obyektlari sifatida multileaderlar (R12 da ularning yoʻq: ular nima chizsa shu sifatida saqlanadi).
- Saqlangan DXF dagi rasmlar (ular kadr sifatida saqlanadi; DWG rasmlarni rasm sifatida saqlaydi), va ostidagini yashiradigan wipeoutlar.
- DXF ning 2000 dan yangi versiyasini saqlash.
- Bulutga saqlash va kompyuterlar oʻrtasida sinxronlash.

Toʻliq roʻyxat uchun qarang: [Hali tayyorlanmagan](topic:not-built-yet).
