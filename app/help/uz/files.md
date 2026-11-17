---
title: Fayllar, nima ochiladi va nima saqlanadi
summary: CadCraft ochadigan, saqlaydigan va eksport qiladigan formatlar, nima saqlanishi yoki aylantirilishi va fayllar qayerga joylanishi.
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, open, save, export, import, formatlar, aylantirish, yuklab olish, saveas, dxfout, boshqacha saqlash, dwg saqlash, format, qsave, xref, xattach, bogʻlangan chizma, tashqi havola, bogʻlash, qayta yuklash, ajratish
from: b8c5778d
---

## Qisqacha

| Format | Ochish | Saqlash | Izoh |
|---|---|---|---|
| DXF (matnli yoki ikkilik, istalgan versiya) | Ha | Ha, DXF R12, DXF 2000 yoki DXF 2000 (ikkilik) sifatida | Ikkilik DXF matnli kabi ochiladi va ikkilik holda qaytib saqlanadi. |
| DWG | Ha | Ha, DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 yoki 2018) sifatida | CadCraft ning oʻz DWG kutubxonasi oʻqiydi va yozadi (AutoCAD R13 dan 2018 gacha boʻlgan fayllar). Sizning DWG faylingiz hech qachon oʻzgartirilmaydi. Buzilgan fayllar yoki oʻquvchi qayta ishlay olmaydigan versiyalar xabar bilan rad etiladi. |
| PDF | Uni tagliq sifatida yoki obyektlar sifatida olib kiradi ([PDF tagliqlar](topic:pdf-underlay)) | Ha, chop etish orqali | Varaqning yoki modelning masshtabdagi vektor PDF i. |

Ochadigan (yoki {{ui:Yangi}} bilan boshlaydigan) har bir chizma chizma maydoni ustida oʻz yorligʻiga ega boʻladi; hech qachon tegilmagan yangi chizma oʻrniga yangi yorliq qoʻshilmaydi. Yorliqni bosib almashtiring, uning {{ui:×}} tugmasi bilan yoping (saqlanmagan oʻzgarishlar boʻlsa, CadCraft avval soʻraydi), yoki ochiq chizmalarni yonma-yon joylashtiring: qarang [Ekranni boʻlish](topic:split-screen).

## Chizmani ochish

- {{key:Mod+O}} tugmasini bosing, {{ui:Ochish}} tugmasini bosing yoki `OPEN` yozing, soʻng faylni tanlang.
- Yoki `.dwg` yoki `.dxf` faylni chizma maydoniga torting.

Fayl brauzeringiz ichida oʻqiladi. U hech qayerga yuklanmaydi. Tarixda qancha obyekt va qatlam kelgani hamda qancha vaqt ketgani xabar qilinadi; chap paneldagi {{ui:Chizma}} boʻlimi formatni koʻrsatadi, masalan "DWG 2018 (AC1032)".

DWG oʻquvchisi CadCraft ning bir qismi; sahifa yuklangandan keyin ochgan birinchi DWG bilan birga olinadi (bir necha yuz KB), shuning uchun alohida yuklab olishni kutish shart emas. Katta DWG ochilayotganda sahifa fonda oʻqilgani uchun javob berishda davom etadi.

DXF matn sifatida emas, balki taxminan 4 MB boʻlakchalarda oʻqiladi, shuning uchun 512 MB dan katta DXF ham ochiladi. Cheklovchi narsa kompyuteringiz xotirasi: DXF ochilayotganda u fayl hajmining taxminan 16 dan 20 barobarigacha xotira ishlatadi (sinovda taxminan 690 000 obyektli 100 MB li DXF taxminan 1.5 GB ishlatgan).

### Nima kiradi

- Chiziqlar, yoylar, aylanalar, polichiziqlar (yoy segmentlari bilan), ellipslar, nuqtalar, matn va koʻp qatorli matn, qattiq jismlar, shtrixlashlar (standart namunalar chiziqlari sifatida chizilgan, boshqalari tekis rang sifatida), atributlari bilan blok havolalari (tahrirlanadigan qiymatlar; qarang [Blok atributlari](topic:attributes)), oʻlchamlar va koʻrinish oynalari bilan varaqlar.
- Splaynlar splayn sifatida kiradi (daraja, boshqaruv nuqtalari, tugunlar, ogʻirliklar, moslashtirish nuqtalari); qarang [Splaynlar va polichiziqlar](topic:splines).
- Bitta yetakchi chiziq va matnli koʻp yetakchilar CadCraft koʻp yetakchilari sifatida kiradi, ularni tahrirlash mumkin (qarang {{cmd:MLEADER}}). Boshqalari (blok bilan, bir nechta yetakchi chiziqli yoki egri chiziqli) boshqa dastur chizgandek chiziladi va bitta boʻlib harakatlanadi; tarixda nechtasi ekani koʻrsatiladi.
- Rasmlar (images) fayl nomi bilan ramka sifatida koʻrinadi, to {{cmd:IMAGE}} bilan faylni CadCraft ga bermaguningizcha: qarang [Chizmadagi rasmlar](topic:pictures#show-the-pictures-a-dwg-uses). Wipeoutlar oʻz ramkasi sifatida koʻrinadi, ular ostidagi narsa koʻrinib turadi.
- DWG dagi jadvallar boshqa dastur chizgandek kiradi.
- Model fazosidagi 3D yuzlar {{ui:3D}} yorligʻida kiradi, 2D obyekt sifatida emas; bloklar ichidagilar ham shunday, har bir blok havolasi uchun modelda bir marta. Blok ichida va varaqda ular ham kontur sifatida tekis chiziladi. Qarang [3D da model](topic:3d-solids).
- Qatlamlar oʻz rangi, yoqilgan yoki oʻchirilgan, muzlatilgan, qulflangan va chop etish sozlamalarini saqlaydi. DEFPOINTS hech qachon chop etilmaydi.
- Oʻlchamlar, nuqtalari oʻqilishi mumkin boʻlgan joylarda, haqiqiy, tahrirlanadigan CadCraft oʻlchamlariga aylanadi. Ular avval boshqa dastur chizgandek koʻrsatiladi; bittasini oʻzgartirishingiz bilanoq CadCraft uni oʻz uslubida qayta chizadi.
- Har bir layout varaq yorligʻiga aylanadi. Boshqa dasturda har bir layoutda yashirin birinchi koʻrinish oynasi bor, u varaqning oʻzi; CadCraft uni chiqarib tashlaydi.

### Hali kelmaydiganlar

CadCraft chiza olmaydigan narsalar sanaladi, taxmin qilinmaydi. Chap paneldagi "About this file" qutisi ularni "Not shown yet:" deb roʻyxatlaydi, har bir turi va sonini koʻrsatadi. Tipik holatlar: DXF dagi jadvallar, to'rlar (meshes) va bloklar ichidagi 3D qattiq jismlar. Model fazosidagi 3D qattiq jismlar, mintaqalar va jismlar 3D yorligʻida koʻrinadi (qarang [3D da model](topic:3d-solids#solids-from-other-programs)). Faylda burilgan koʻrinish oynalari oʻsha yerdagidek burilgan koʻrinadi va saqlaganda burilishini saqlaydi; xuddi shunday joriy UCS, nomlangan UCSlar va burilgan koʻrinish ham.

Matn bitta Helvetica uslubidagi shriftda chiziladi. Asl dasturning torroq shriftida bir qatorga sigʻadigan yorliq CadCraft da ikki qatorga oʻtishi mumkin.

## Saqlash

Saqlashning uch usuli bor. Har biri nusxani yuklab oladi.

- **Saqlash**: {{key:Mod+S}} tugmasini bosing, {{ui:Saqlash}} tugmasini bosing yoki `SAVE` yozing (`QSAVE` ham). U chizma formatida saqlaydi: DWG ochgan boʻlsangiz DWG, DXF ochgan boʻlsangiz DXF. DWG oʻzi kelgan versiyani saqlaydi (2018 fayl 2018 sifatida saqlanadi). Yangi chizma brauzerda oxirgi tanlagan formatni va DWG versiyasini oladi; hech qachon tanlamagan boʻlsangiz, AutoCAD 2000 formatidagi DWG.
- **Boshqacha saqlash**: {{key:Mod+Shift+S}} tugmasini bosing, {{ui:Boshqacha saqlash}} tugmasini bosing yoki `SAVEAS` yozing. {{ui:Nusxani quyidagi nom bilan saqlash}} dialogi {{ui:DWG}} ni, {{ui:Versiya}} roʻyxatini (AutoCAD 2018, 2013, 2010, 2007, 2004 yoki 2000), DXF R12 va {{ui:DXF 2000}} ni taklif qiladi, har biri beradigan fayl nomi bilan, chizmaning joriy formati va versiyasi allaqachon tanlangan holda. Yuklab olish uchun {{ui:Saqlash}} ni, hech narsa saqlamaslik uchun {{ui:Bekor qilish}} (yoki {{key:Esc}}) ni bosing; tarixda "Not saved." yoziladi. Tanlaganingiz qoladi: {{key:Mod+S}} shu chizma uchun keyingi safar uni ishlatadi va brauzerdagi yangi chizmalar u bilan boshlanadi.
- **DXFOUT**: `DXFOUT` yozing. U har doim DXF R12 nusxasini yuklab oladi, keyingi {{key:Mod+S}} esa baribir chizmaning oʻz formatida saqlaydi.

Brauzer `<drawing name>.dwg` yoki `<drawing name>.dxf` ni yuklab oladi. Har bir saqlash **yangi yuklab olish**; ochgan faylingiz hech qachon qayta yozilmaydi yoki oʻzgartirilmaydi. Tarix buni tasdiqlaydi, masalan: `Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged.` DXF uchun u `(DXF R12, opens in any CAD program)` deydi. Uning ostidagi satrlar yoʻlda oʻzgargan narsalarni roʻyxatlaydi.

Desktop ilovada CadCraft ishlaganda saqlash boshqa desktop dasturlardagi kabi ishlaydi: {{key:Mod+S}} chizmani ochgan faylingizga, oʻz formati va versiyasida qayta yozadi; tarix qayerga saqlanganini koʻrsatadi. {{ui:Boshqacha saqlash}} va eksportlar tizimning saqlash dialogini koʻrsatadi, ikki marta bosilgan `.dwg`, `.dxf` yoki `.ccsheets` fayl CadCraft da ochiladi.

PDF uchun chop eting (quyida qarang).

## DWG nimani saqlaydi va nimani oʻzgartiradi

CadCraft DWG ni oʻzi brauzeringiz ichida yozadi, oʻqiydigan oʻsha DWG kutubxonasi bilan. "Boshqacha saqlash" da versiyani tanlang: AutoCAD 2000 formati (fayl versiyasi AC1015) eng koʻp dasturlarda, eski boʻlganlarida ham ochiladi; yangi formatlar (2004, AC1018, 2018 gacha, AC1032) haqiqiy ranglarni ham saqlaydi. Hech narsa yuklanmaydi va DWG ni saqlash oflaynda ishlaydi.

Har bir versiya saqlangan fayllarni uchta boshqa dasturning DWG oʻquvchilari va CadCraft oʻzi bilan qayta oʻqib tekshiriladi. CadCraft DWG hali AutoCAD da oʻzida ochilmagan.

### DWG saqlaydi

- Chiziqlar, yoylar, aylanalar, ellipslar, nuqtalar va yoy segmentli polichiziqlar.
- Tekislash va kenglik koeffitsienti bilan bir qatorli matn.
- Koʻp qatorli va oʻralgan matn, koʻp qatorli matn sifatida. Boshqa dastur uni xuddi shu kenglikdan qayta oʻraydi.
- Obyekt ranglari: qatlam boʻyicha, blok boʻyicha, 255 standart rang, 2004 va undan keyingi formatlarda haqiqiy ranglar.
- Qatlamlar oʻz rangi, chiziq turi, chiziq qalinligi va yoqilgan, muzlatilgan, qulflangan hamda chop etish sozlamalari bilan; obyektlarning oʻz chiziq turlari, chiziq qalinliklari va chiziq turi masshtablari; chiziq turi namunalari va chizmaning chiziq turi masshtabi.
- Chizma birliklari va uzunlik formati (onlik, fut va dyuym, kasrlar…).
- Bloklar asosiy nuqtasi va atribut taʼriflari bilan, shu jumladan koʻrinmas, doimiy va oldindan belgilangan.
- Blok havolalari masshtabi, aylanishi va atribut qiymatlari bilan.
- Qattiq toʻldirishlar va namunali shtrixlashlar namuna, masshtab va burchak bilan (namunaning oʻz chiziqlari, shuning uchun boshqa dasturlar CadCraft chizadigan chiziqlarni chizadi).
- Oʻlchamlar haqiqiy oʻlchamlar sifatida: cho'zilganda boshqa dasturlar ularni qayta oʻlchaydi. Har biri oʻz sozlamalarini (matn balandligi, strelka oʻlchami, onlik, uzunlik formati) va matnini saqlaydi, hamda har bir DWG oʻlchami tegishli chizilgan nusxani olib yuradi.
- Varaqlar (layoutlar): har biri qogʻoz oʻlchami va birliklari bilan, uning ustida chizilganlar va koʻrinish oynalari koʻrinishi hamda masshtabi bilan.
- Nomlangan koʻrinishlar.
- Koʻp yetakchilar, koʻp yetakchi sifatida.
- Qatlam va blok nomlari yozganingizdek, katta va kichik harflar bilan. (DXF R12 ularni bosh harflar bilan yozadi.)

### DWG oʻzgartiradi

Har biri, sizning chizmangizga tegishli boʻlganda, saqlagandan keyin tarixda koʻrsatiladi.

| CadCraft da | Saqlangan DWG da |
|---|---|
| Haqiqiy ranglar (rang tanlagich bilan tanlangan), 2000 formatida | Eng yaqin standart rang: 2000 formatida faqat 255 ta boʻladi. Ularni saqlash uchun 2004 yoki undan keyingi formatda saqlang |
| Varaqning nomlangan koʻrinishlari | Qogʻoz fazosidagi koʻrinishlar: DWG qaysi varaq ekanini aytmaydi, shuning uchun fayl qayta ochilganda ular birinchi varaqqa tegishli boʻladi |
| Kenglik koeffitsienti bilan koʻp qatorli matn | Oddiy harf kengligi: DWG da kenglik koeffitsienti faqat bir qatorli matnga qoʻllanadi |
| DWG ruxsat bermaydigan belgilar bilan qatlam yoki blok nomlari | Oʻzgartiriladi: bogʻlangan chizmadagi `Base\|Walls` kabi nom `Base$0$Walls` boʻladi (bogʻlanganda nomlanadigan usul), boshqa belgilar `_` boʻladi |

### Nega R12, va nima aylanadi

DXF sifatida saqlaganingizda CadCraft DXF R12 yozadi, uni har qanday CAD dasturi ochadi. U ba'zi xususiyatlardan eskiroq, shuning uchun bir nechta narsa soddaroq shaklda yoziladi:

| CadCraft da | Saqlangan R12 faylida |
|---|---|
| Koʻp qatorli matn | Har bir qator uchun bitta matn obyekti |
| Ellipslar | Ellipsga mos keladigan polichiziqlar |
| Shtrixlashlar (ochilgan fayllardan) | Faqat ularning konturlari |
| Haqiqiy ranglar (rang tanlagich bilan tanlangan) | Eng yaqin standart rang |
| Chiziq qalinliklari va obyektlarning oʻz chiziq turi masshtablari | Chiqarib tashlanadi: R12 da ularning ikkalasi ham yoʻq (chiziq turlari saqlanadi) |
| Qatlam va blok nomlari | Bosh harflar bilan yoziladi; boʻshliq va boshqa belgilar `_` boʻladi, nomlar 31 belgigacha kesiladi ("Title block" `TITLE_BLOCK` boʻladi) |
| Chop etilmasligi belgilangan qatlamlar | Boshqa dasturlar ularni chop etadi (chizmada varaq boʻlsa, CadCraft sozlamani eslab qoladi) |
| Oʻlchamlar | Oʻz chizilgan bloki bilan haqiqiy oʻlchamlar, shuning uchun boshqa dasturlar ularni siz koʻrgandek koʻrsatadi |
| Koʻp yetakchilar | Ular chizgan chiziqlar, strelka va matn |
| Nomlangan koʻrinishlar | Saqlanadi, nomlari bosh harflar bilan; varaq koʻrinishlari birinchi varaqqa qaytadi |
| Bir nechta varaq | Birinchi varaq har bir dastur koʻrsatadigan qogʻoz fazosi; qolganlari `CCLAYOUT_1`, `CCLAYOUT_2` … nomli bloklar sifatida saqlanadi, fayl ochilganda CadCraft ularni qayta varaqqa aylantiradi |

Tarix chizmangizga tegishli boʻlgan har bir narsani roʻyxatlaydi.

:::tip
Bir necha kun davomida chizmada ishlash uchun uni DXF sifatida saqlang va keyingi safar oʻsha DXF ni oching. CadCraft chiza oladigan hamma narsa, jumladan oʻlchamlar, bloklar va barcha varaqlar, aylanib kelishda saqlanadi.
:::

## Bogʻlangan chizmalar (tashqi havolalar)

{{cmd:XATTACH}} (`XA`, yoki {{ui:Bloklar}} › {{ui:Koʻproq}} › {{ui:Chizmani bogʻlash (xref)}}) boshqa DWG yoki DXF ni bogʻlaydi: faylni tanlang, soʻng u qayerga borishini bosing ({{key:Enter}} uni 0,0 ga qoʻyadi). U fayl nomi bilan atalgan bitta blok sifatida kiradi, ikki chizmaning birliklari boshqacha boʻlsa, toʻgʻri masshtabda. Uning qatlamlari va bloklari oʻz nomlarini saqlaydi, oldiga havola nomi qoʻyiladi — `Plan|Walls`, `Plan|Door` — shunda ular sizniki bilan aralashmaydi: bogʻlangan qatlamlarni oʻz qatlamlaringiz kabi yoqing va oʻchiring, muzlating yoki qulflang. Havola faqat oʻqish uchun: boshqa chizmani oʻzgartiring va qayta yuklang. Havola qatlamlarida sozlaganingiz (rang, chiziq turi, chiziq qalinligi, yoqish va oʻchirish, muzlatish, qulflash, chop etish) havolani qayta yuklaganda, havola hali havola boʻlganda chizmani DWG sifatida saqlaganda va boshqa chizma buni bogʻlaganda saqlanadi.

{{cmd:XREF}} (`XR`): `?` havolalarni roʻyxatlaydi (yuklangan yoki yoʻq, qaysi fayl, nechta ishora); `A` biriktiradi; `R` bittasini faylidan qayta yuklaydi (faylni yana tanlang: brauzer papkalaringizga oʻzi kira olmaydi); `B` bittasini bogʻlaydi (u `Plan$0$Walls` kabi nomlangan oddiy bloklar va qatlamlarga aylanadi); `D` bittasini ajratadi (uning ishoralari va qatlamlari yoʻqoladi). Har biri bitta bekor qilish qadami.

{{cmd:XCLIP}} (`XC`) blok havolalari va bogʻlanishlarni kesadi: ularni tanlang, yangi chegara uchun `N`, soʻng `R` va ikki burchak yoki `P` va koʻpburchak nuqtalari ({{key:Enter}} uni yopadi); `D` kesishni olib tashlaydi. Faqat ichkarisi koʻrinadi va chop etiladi, kesish havola bilan birga harakatlanadi. DWG va DXF 2000 kesishlarni saqlaydi; DXF R12 havolani butunligicha saqlaydi va buni aytadi. Kesilgan havolalari boʻlgan bogʻlanishni bogʻlaganingizda, {{cmd:XREF}} `B` soʻraydi: `A` hammasini bogʻlaydi, `C` faqat har bir havolaning kesilgan qismini saqlaydi (chiziqlar va yoylar chegarada kesiladi; matnlar va ichki bloklar, agar qoʻyish nuqtasi ichida boʻlsa, qoladi).

Ochgan chizmangiz CadCraft koʻra olmaydigan fayllarga bogʻlangan boʻlishi mumkin: u nechtasi yuklanmaganini aytadi. Ularni koʻrish uchun {{cmd:XREF}}, `R` va har bir faylni tanlang.

Saqlaganda yuklangan bogʻlanish faylga **bogʻlanadi** (boshqa dasturlar `Plan$0$…` kabi oddiy bloklar va qatlamlarni koʻradi), tarix buni aytadi. Yuklanmagan havola faylga havola boʻlib qoladi, DWG va DXF da.

## 3D da ochish

{{ui:Koʻrinish}} › {{ui:Koʻproq}} › {{ui:ModelCraft’da ochish}} ({{cmd:OPENIN3D}}) chizmani 3D modellashtirish ilovasida yangi yorliqda DWG sifatida ochadi, uni yuklamasdan. U yerda kiritilgan oʻzgarishlar oʻsha yerda qoladi; ularni u yerda saqlang. Menyu bandi faqat oʻsha ilova uzatilgan chizmani qabul qila oladigan joylarda koʻrinadi.

## PDF chop etish

{{key:Mod+P}} tugmasini bosing, {{ui:Chop etish}} tugmasini bosing yoki `PLOT` yozing. PDF brauzer ichida tayyorlanadi va yuklab olinadi yoki chop etish uchun yangi yorliqda ochiladi. Qarang [PDF ga chop etish](topic:plot-pdf).

## Fayllar qayerga boradi

Har bir saqlash va chop etish yuklab olishdir, shuning uchun fayllar brauzeringiz yuklab olishlarni qayerga qoʻyadigan joyga tushadi: odatda Yuklanganlar papkasiga. Har safar papka tanlash uchun brauzeringizdagi yuklab olish sozlamasini oʻzgartiring; [Brauzerlar va kompyuterlar](common:browsers) qayerdaligini koʻrsatadi.

Ochgan yoki saqlagan hech narsa bizga yuborilmaydi. Qarang [Fayllaringiz qayerga boradi](common:your-files).

## PLN va PLA loyiha fayllari

CadCraft DWG va DXF chizmalarni ochadi, Archicad ning oʻz fayllarini (`.pln`, `.pla`, `.tpl`, `.bpn`) emas. Bunday faylni ochsangiz, u nima ekanini aytadi. Archicad da kerakli koʻrinish yoki varaqlarni DWG sifatida saqlang va ularni bu yerda oching, yoki modelni IFC sifatida eksport qilib BimCraft da oching. BimCraft faylni qabul qila oladigan joyda CadCraft {{ui:BimCraftda ochish}} ni taklif qiladi.

## Saqlashdan oldin sahifa yopilsa

CadCraft siz oʻzgartirgan har bir chizmaning nusxasini, tahrirlashni toʻxtatganingizdan keyin bir lahzada, faqat shu brauzerda saqlaydi. Agar yorliq yopilsa, brauzer toʻxtasa yoki kompyuter saqlashdan oldin qayta ishga tushsa, CadCraft keyingi ishga tushirishda **Ishingizni tiklaysizmi?** deb soʻraydi: {{ui:Tiklash}} chizmani saqlanmagan holda oʻz yorligʻida qayta ochadi. Chizmani saqlash uning nusxasini oʻchiradi. Qarang [Ishingizni tiklash](common:recover).

## Onlayn va oflayn

Ochish, chizish, saqlash (DWG va DXF) va chop etish hammasi kompyuteringizda bajariladi, shuning uchun CadCraft yuklangandan keyin ular ulanishsiz ishlaydi.

Hech qanday ulanishsiz CadCraft dan foydalanish uchun, onlaynda turganingizda, yuqoridagi panelda {{ui:Oflayn uchun saqlash}} tugmasini bosing. Hisoblagich sanaydi ("Saqlanmoqda: 40 / 212") va "Oflayn tayyor" bilan tugaydi. Saqlangan nusxa DWG oʻquvchisini ham oʻz ichiga oladi, jami taxminan 5 MB, shuning uchun u saqlangandan keyin **DWG fayllar oflaynda ham ochiladi**. Tugmani yana bosing: {{ui:Qayta saqlash (eng yangi versiyani olish)}} yoki {{ui:Oflayn nusxani oʻchirish}}. "Saqlab boʻlmadi" — ba'zi fayllar yuklanmaganini bildiradi: ulanishni tekshiring va qayta urinish uchun bosing. "Oflayn mavjud emas" — bu brauzer oynasi nusxa saqlay olmasligini bildiradi (maxfiy oynalar va ayrim boshqariladigan kompyuterlar).

Saqlangan nusxa boʻlmasa, DWG oʻquvchisi sahifa yuklangandan keyin birinchi DWG ni ochganingizda olinadi, shuning uchun oflaynda DWG ochish muvaffaqiyatsiz boʻlishi mumkin; DXF fayllarga u hech qachon kerak emas. CadCraft saqlanmagan boʻlsa, oflaynda sahifani qayta yuklamang.

Batafsil: [Oflaynda ishlash](common:offline).

:::offline
Hozir oflayndasiz. Chizmalar DWG yoki DXF sifatida saqlanadi va odatdagidek chop etiladi; DXF fayllar ochiladi. DWG fayllar, agar CadCraft "Oflayn tayyor" koʻrsatsa yoki DWG oʻquvchisi bu yorliqda allaqachon yuklangan boʻlsa, ochiladi.
:::

## Chizmadagi cheklovlar

Cheklovlar va parametrlar ([Chizmani cheklash](topic:constraints) ga qarang) DWG va DXF da saqlanadi. Har bir cheklangan obyekt kichik CadCraft izohini (kengaytirilgan maʼlumot) olib yuradi, va `CADCRAFT_PARAMETRIC` nomli ishlatilmagan blok cheklovlar va parametrlar jadvalini saqlaydi. Boshqa dasturlar chizmani odatdagidek ochadi va ikkalasini ham eʼtiborsiz qoldiradi; ular purge qilganda ishlatilmagan blokni oʻchirishlari mumkin. Izohlar obyektlarga faylning dastaklari (handles) emas, oʻz kaliti orqali murojaat qiladi, shuning uchun dastaklarni qayta raqamlaydigan dastur ularni buzmaydi. Boshqa dastur cheklangan obyektni oʻchirgan yoki oʻzgartirgan boʻlsa, CadCraft faylni ochganda unga tegishli cheklovlarni tashlab yuboradi va nechtasi ekanini aytadi. Ularsiz fayl cheklovsiz ochiladi.

Detal modellashtiruvchisidan eksport qilingan eskiz (`.json`) ham ochiladi: qarang [Eskizlarni boshqa detal modelerlari bilan almashish](topic:solidworks-sketches).

## Hali mavjud emas

- Saqlangan DXF da koʻp yetakchilar koʻp yetakchi obyekt sifatida (R12 ularga ega emas: ular chizgan narsalari sifatida saqlanadi).
- Saqlangan DXF dagi rasmlar (ular oʻz ramkalari sifatida saqlanadi; DWG ularni rasm sifatida saqlaydi) va ostidagini yashiradigan wipeoutlar.
- DXF ning 2000 dan yangi versiyasini saqlash.
- Bulutli saqlash va kompyuterlar orasida sinxronlash.

Toʻliq roʻyxat uchun qarang: [Hali tayyor emas](topic:not-built-yet).
