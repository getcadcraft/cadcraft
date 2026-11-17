---
title: Hali qurilmagan
summary: Ushbu CadCraft chizma ilovasi qurilishi hozircha nimani qilmaydi va bugun uning oʻrniga nima qilish kerak.
keywords: yoʻq, cheklovlar, ctb, stb, chop etish uslubi, xossalar, ucs, annotativ, dinamik blok, splayn, yoʻl xaritasi, qoʻllab-quvvatlanmaydi, dwg saqlash, shtrixlash, choʻzish, massiv, birlashtirish, matchprop, uzish, uzaytirish, chiziq turi, chiziq qalinligi, xref, bulut, 3d, qattiq jismlar, booleanlar, multileader, wipeout
from: 87e56521
---

CadCraft ishlab chiqish bosqichida. Bu sahifa joriy qurilish nimani qilmasligini sanab beradi, shuning uchun uni izlab yurmaysiz. Har bir band bugun uning oʻrniga nima qilish kerakligini aytadi.

## Fayllar va saqlash

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| AutoCAD ning oʻzida tekshirilgan CadCraft DWG | Saqlangan har bir versiya uchta boshqa dasturning DWG oʻquvchisi va CadCraft tomonidan qayta oʻqiladi. Qarang: [DWG nimani saqlaydi va nimani oʻzgartiradi](topic:files#what-a-dwg-keeps-and-changes). |
| 2000 dan yangi DXF ni saqlash | DXF 2000 sifatida, yoki AutoCAD 2018 gacha boʻlgan DWG sifatida saqlang. |
| Brauzerda ochilgan faylning ustiga saqlash | Har bir saqlash yangi nusxani yuklab oladi; istasangiz, eski faylni oʻzingiz almashtiring. CadCraft Studio da {{key:Mod+S}} ochilgan faylingizga qayta yozadi. |
| Kompyuterlar orasida bulutli saqlash va sinxronlash | CadCraft hali saqlarni bulutga yubormaydi: DWG va DXF fayllaringizni oʻz papkalaringizda saqlang. CadCraft Studio da [Tarix](topic:history) boshqa joydan saqlangan chizmaning bulutdagi versiyalarini va shu kompyuterdagi oʻz saqlaringizning nusxalarini roʻyxatlaydi. |
| Boshqa chizmaga bogʻlangan chizmani joyida tahrirlash va qoplamalar | Chizmani havola sifatida biriktiring va boshqa chizmani oʻzgartirgandan keyin uni qayta yuklang. Havola DWG sifatida saqlanganda havola boʻlib qoladi va {{cmd:XCLIP}} uni kesadi. |
| DXF dagi rasmlar; ostidagini yashiradigan wipeoutlar | DXF rasmni fayl nomi bilan ramka sifatida saqlaydi; DWG uni rasm sifatida saqlaydi — qarang: [Chizmadagi rasmlar](topic:pictures). Wipeout oʻz ramkasi sifatida koʻrinadi. |
| Egri yetakchi chiziqli multileaderlarni, kontentning ikki tomonida yetakchi chiziqlari bor yoki notekis burilgan yoki masshtablangan blokli multileaderlarni tahrirlash | Ular boshqa dastur chizgandek chiziladi va bir butun boʻlib harakatlanadi. Ichkarisida matn yoki blok boʻlgan, bitta maqsadgacha toʻgʻri yetakchi chiziqli multileaderlar tahrirlanadigan boʻladi ({{cmd:MLEADEREDIT}}). |
| Boshqa dasturlardan kelgan jadvallarda: katakda blok boʻlsa, katak ichida matn formatlash, DXF jadvalining har bir katak chegaralari va ranglari, ustunlarga boʻlingan jadval | Jadval tahrirlanadigan jadval sifatida ochiladi ({{cmd:TABLEDIT}}) va tahrirlamaguningizcha boshqa dastur chizgandek koʻrsatiladi; keyin CadCraft uni katakchalaridan qayta chizadi: oddiy matn, `=G3*H3` va `=Sum(I3:I9)` kabi formulalar, tekislash va matn balandliklari. Blok katagi keyin boʻsh boʻladi. Tegilmagan DWG jadvali oʻz katak maʼlumoti bilan qayta saqlanadi. |
| Saqlangan DXF da haqiqiy jadval obyekti | DWG jadvalni boshqa dasturlar tahrirlashi mumkin boʻlgan jadval sifatida saqlaydi. DXF uni chizadigan blok sifatida saqlaydi, CadCraft ning oʻz yozuvi bilan: CadCraft uni yana jadval sifatida ochadi; boshqa dasturlar blokni koʻradi. Aks ettirilgan yoki notekis masshtablangan jadval DWG da ham shunday saqlanadi. |
| Boshqa dasturlar bilan nusxalash va joylashtirish | CadCraft buferi CadCraft chizmalari va yorliqlari orasida, bir brauzerda ishlaydi, boshqa dasturlar bilan emas. DWG yoki DXF sifatida saqlang va u yerda oching. Qarang: [Nusxalash, joylashtirish va takrorlash](topic:copy-paste). |

## Chizish va tahrirlash

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| CadCraft da yoʻq shtrixlash namunalari va boshqa dasturlar boʻyaganidek aniq gradient toʻldirishlar | CadCraft da yoʻq namunali ochilgan shtrixlashlar tus sifatida koʻrinadi. Gradient toʻldirish ({{cmd:GRADIENT}}) har bir turi uchun CadCraft ning oʻz usulida boʻyaladi: turi boʻyicha boshqa dasturlarga oʻxshash, nuqtama-nuqta emas. DWG 2004 va undan keyingilari uni haqiqiy gradient shtrixlash sifatida saqlaydi; DXF 2000 yoki DWG 2000 faylda uni faqat CadCraft oʻqiydi, boshqa dasturlar esa yaxlit toʻldirishni koʻradi. Namunalar `.pat` fayldan yuklanadi, shtrixlash esa oʻz konturiga bogʻlanishi va unga ergashishi mumkin: qarang: [Shtrixlash va toʻldirilgan sohalar](topic:hatch). |
| Ichida shakllar yoki matn boʻlgan chiziq turlari va saqlangan DXF R12 dagi chiziq qalinliklari | Fayl chiziq turidagi shakl va matn chiziqlardan chiqarib tashlanadi; chiziq qalinliklarini saqlash uchun DWG sifatida saqlang. |
| Saqlangan DXF dagi namunali shtrixlashlar | R12 da shtrixlash yoʻq: ular konturlari sifatida saqlanadi. Namunani saqlash uchun DWG sifatida saqlang. |
| Boshqa dastur yaratgan yoki tahrirlashi mumkin boʻlgan massivlar; yoʻl va qutb massivlaridagi qatorlar va qavatlar; yoʻl egri chizigʻiga ergashadigan massiv | ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; {{cmd:ARRAYEDIT}} bilan oʻzgartiriladi) massiv CadCraft ning oʻz sonlari bilan blok havolasi sifatida saqlanadi: boshqa dasturlar uni koʻrsatadi, koʻchiradi, chop etadi va ajratadi, lekin sonini oʻzgartira olmaydi, boshqa dasturda yaratilgan massiv esa bu yerda oddiy blok havolasi sifatida ochiladi. Yoʻl massivi oʻz yoʻlining nusxasini saqlaydi: keyin egri chiziqni tahrirlash elementlarni koʻchirmaydi. |
| Boshqa dasturlarga va ulardan kesilgan varaq koʻrinish oynalari | {{cmd:VPCLIP}} bilan kesilgan yoki {{cmd:MVIEW}} Polygonal yoki Object bilan yaratilgan koʻrinish oynasi CadCraft ning oʻz konturi bilan saqlanadi: boshqa dasturlar uni atrofidagi toʻgʻri toʻrtburchak sifatida ochadi, boshqa dasturda kesilgan koʻrinish oynasi bu yerda oʻz toʻgʻri toʻrtburchagi sifatida ochiladi. DXF R12 faqat toʻgʻri toʻrtburchakni saqlaydi. |
| {{cmd:STRETCH}} kesishuvchi koʻpburchak bilan | Bir yoki bir nechta kesishma oynasidan foydalaning. |
| {{cmd:PEDIT}} Edit vertex (buyruq qatorida bir vaqtda bitta uchi) | Tutqichlar va Xossalar dagi uchlar koʻrigi (har bir uch, uning kengligi va boʻrtishi). PEDIT ning qolgan qismi qurilgan: qarang: [Splaynlar va polichiziqlar](topic:splines). |
| Ellipslar va splaynlarda {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} va {{cmd:JOIN}} | Bu buyruqlar qabul qiladigan polichiziqni olish uchun splaynni {{cmd:EXPLODE}} qiling (yoki {{cmd:PEDIT}} qiling). |
| Polichiziqning yoy segmenti va unga qoʻshni segment orasidagi yumaloqlash va faska; polichiziqqa chiziqni yumaloqlab qoʻshish | Polichiziqni {{cmd:EXPLODE}} qiling, soʻng boʻlaklarni yumaloqlang. Yumaloqlash yoyi oʻz obyekti sifatida qoʻshiladi. |
| Kesish va uzaytirish: Loyiha varianti (3D) va polichiziqning yoy uchini uzaytirish | Chizma tekisligida kesing; yoy uchi uchun polichiziqni ajrating yoki yoyni qaytadan chizing. |
| OLE obyektlari: ularni qoʻyish, ishga tushirish yoki tahrirlash; DWG da fayl qoʻygan joyidagilarni koʻrsatish; metafayl rasmlari | Qarang: [Rasmlar](topic:pictures#objects-from-other-programs-ole). DXF dagi obyektlar oʻz bitmap rasmi yoki belgili ramka sifatida koʻrinadi; DWG dagilari saqlanadi, joyida chizilmaydi (OLELIST ularni roʻyxatlaydi va sizning koʻrsatgan joyingizga rasm nusxasini qoʻyadi). |
| Paragraf matnida formatlash kodlarini (qalin, stacked kasrlar, soʻzma-soʻz ranglar) yozish; Helvetica uslubidagi shriftdan boshqa shriftlar; ustunlar | Faylda kelgan formatlash saqlanadi, chiziladi va saqlanadi (qarang: Matn); yangi paragraf matni bitta balandlik va rangga ega. |
| Paragraf matni uning aylanishida tahrirlanganda | Muharrir tekis ochiladi; matn oʻz aylanishini saqlaydi. |
| DXF da multileader obyektlari sifatida saqlangan multileaderlar | DWG ularni multileader sifatida saqlaydi, har bir yetakchi chiziq va blok kontent sifatida; DXF esa ular chizgan narsalarni saqlaydi (chiziqlar, strelkalar va matn yoki blok). |
| Jadvallarda ({{cmd:TABLE}}): katak ichida oʻralgan matn, qismlarga boʻlinadigan jadvallar, jadval uslubining oʻz matn uslubi va qator turlari boʻyicha ranglari dialogda, elektron jadval faylga (`.xlsx`) maʼlumot bogʻlanishi yoki faylni oʻzi oʻqiydigan bogʻlanish | Katak matni faqat siz uzgan joyda boʻlinadi ({{key:Alt+Enter}}); ustunni kengaytiring. {{cmd:DATALINK}} `.csv` faylni oʻqiydi, {{cmd:DATALINKUPDATE}} faylni qaytadan tanlashni soʻraydi. {{cmd:DATAEXTRACTION}} va {{cmd:COUNTTABLE}} chizmani oʻzi kuzatmaydigan jadval yaratadi: ularni qaytadan ishga tushiring (jonli hisob: {{cmd:BOMTABLE}}). |
| Saqlangan faylda mustaqil saqlanadigan atribut taʼriflari (blokdan tashqarida), koʻp qatorli atributlar | Saqlashdan oldin atribut taʼriflarini blokka joylashtiring: ularning oʻzi bilan saqlansa, teg koʻrsatadigan matn sifatida saqlanadi. |
| Qatlam holatlari (qaysi qatlamlar yoqilganini saqlash va tiklash) | {{cmd:LAYISO}} / {{cmd:LAYUNISO}} dan foydalaning yoki qatlamlarni qoʻlda yoqing va oʻchiring. |
| Oyna koʻpburchagi va kesishma koʻpburchagi bilan tanlash, saqlangan tanlash filtrlari | Toʻsiq (`F`), Oyna, Kesishma, Olib tashlash (`R`), qoida uchun {{cmd:QSELECT}}. |

## Xossalar paneli

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| Fit tanlovlarini chizish, chiziqli va tekislangan oʻlchamlardan boshqa oʻlchamlarda gorizontal matn joyi va chiziq ostidagi matn | Ular obyektda saqlanadi, Xossalar da koʻrsatiladi va saqlanadi; CadCraft matnni oʻz qoidasi boʻyicha joylashtiradi. |
| Boshqa dasturlar koʻradigan materiallar | Saqlangan fayl CadCraft uchun material nomini saqlaydi; boshqa dasturlar qatlamning materialini koʻrsatadi. |
| DWG 2000 va DXF fayllarda shaffoflik | Boshqa dasturlar bu obyektlarni yaxlit koʻrsatadi; CadCraft shaffoflikni saqlaydi. Hamma uchun DWG 2004 yoki undan keyingi sifatida saqlang. |
| Boshqa dasturda yaratilgan shtrixlash bogʻlanishi | CadCraft DWG va DXF 2000 fayllarda oʻz bogʻlanishini saqlaydi; boshqa dasturlarda yaratilgan bogʻlanishlar oʻqilmaydi. `HATCHEDIT` va Link dan foydalaning: qarang: [Shtrixlash va toʻldirilgan sohalar](topic:hatch). |
| Xossalarda UCS dagi koordinatalar | Xossalar jahon koordinatalarini koʻrsatadi; holat satri va {{cmd:ID}} UCS koordinatalarini koʻrsatadi. Qarang: [Koʻrinishni burish va oʻz koordinatalaringizdan foydalanish](topic:ucs-and-turned-view). |
| Annotativ obyektning har bir masshtabida alohida joy; boshqa dasturlar saqlaydigan har bir masshtab yozuvlarini oʻqish | Annotativ matn yoki oʻlcham masshtablar roʻyxatini ({{cmd:OBJECTSCALE}}) saqlaydi va har bir koʻrinish oynasi uni oʻz masshtabiga mos oʻlchamda, bir joyda koʻrsatadi. Roʻyxat CadCraft ning oʻz maʼlumoti sifatida saqlanadi: boshqa dastur obyektni uchun moslangan bitta masshtabda koʻradi, boshqa dasturda tuzilgan roʻyxat esa oʻqilmaydi. Qarang: [Birliklar, varaqlar va masshtablar](topic:units-papers-scales#annotate-by-scale). |
| Dinamik blokning masofalari, burchaklari yoki aylantirishlarini oʻzgartirish; boshqa DWG versiyasiga yoki DXF sifatida saqlanganda dinamik boʻlib qoladigan dinamik bloklar | Uning koʻrinish holatini Xossalar › {{ui:Maxsus}} da almashtiring; uning boshqa qiymatlari u yerda faqat oʻqish uchun koʻrinadi. Chizma kelgan versiyada DWG sifatida saqlansa, u dinamik boʻlib qoladi. Qarang: [Dinamik bloklar](topic:dynamic-blocks). |
| Splayn tolerantligi, 6 va undan yuqori darajali splaynlar, 3D splaynlar | Tutqich va boshqaruv nuqtalari, 1 dan 5 gacha daraja va vaznlar qurilgan: qarang: [Splaynlar va polichiziqlar](topic:splines). Splaynning balandligi (Z) saqlanmaydi. |
## Aniqlik yordamchilari

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| Buyruqlar boʻylab nuqtalardan kuzatish va kuzatish sozlamalari dialogi (nisbiy polyar burchaklar, qoʻshimcha burchaklar) | {{cmd:POLARANG}} qadamni belgilaydi; keyingi buyruqda nuqtalarni qaytadan oling. |
| Setkaga ilashish | Koordinatalarni kiriting; setka faqat koʻrinadigan yoʻriqnoma. |
| Maydon burchaklarini tanlashda Yoy va Uzunlik variantlari hamda MEASUREGEOM Volume | Konturni {{cmd:PLINE}} bilan chizing (yoylar bilan), soʻng {{cmd:AREA}} `O`. |
| Grip uchun dinamik kiritish va uning variantlar roʻyxati (pastga strelka) | Buyruq qatori variantlarni koʻrsatadi. |
| Daraja-daqiqa-soniya, grad yoki geodezik azimutdagi burchaklar | Oʻnli darajalarni kiriting: 30° 30' uchun `30.5`. |
| Koʻrinish menejeri dialogi; varaqning nomlangan koʻrinishlari oʻsha varaqqa qaytadi | {{cmd:NAMEDVIEW}} koʻrinishlarni roʻyxatlaydi va tiklaydi. Saqlangan fayl ularni saqlaydi, lekin varaqning koʻrinishlari birinchi varaqda qaytadi. |
## Varaqlar, oʻlchamlar va chop etish

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| Koʻrinish oynasining masshtabi uchun maydonlar, nomlangan obyekt (masalan qatlam yoki blok), giperhavola va varaq toʻplami maydonlari varaq raqami va nomidan tashqari; boshqa dasturlar yangilaydigan maydon obyektlari sifatida yozilgan maydonlar | {{cmd:FIELD}} da sana, fayl nomi, varaq raqami, nomi va soni, chizma xossalari ({{cmd:DWGPROPS}}), obyektning maydoni, uzunligi va boshqa xossalari, hamda formulalar bor, matnda, atributlarda va jadval kataklarida. Boshqa dastur CadCraft maydonini oxirgi oʻqigan matni sifatida koʻrsatadi; CadCraft boshqa dasturning sana, fayl nomi, xossa, varaq va ifoda maydonlarini oʻqiydi va boshqa turlarini matn sifatida qoldiradi. Koʻrinish oynasining masshtabi qoʻlda kiritiladi. |
| Qaysi oʻlcham uslubi joriy ekanligini saqlash; oʻlcham matnini erkin joyga sudrash | Chizma Standard joriy holda ochiladi. Matn oʻlcham chizigʻida turadi (DIMTEDIT Left / Right / Center). Qarang: [Oʻlcham oʻlchamlarini belgilash](topic:dimension-settings). |
| Ochilgan fayllardagi tahrirlanadigan ikki qatorli burchak oʻlchamlari, CadCraft aniqlay olmaydigan | Ular faylda chizilgandek koʻrsatiladi. Ordinata, yoy uzunligi va sinuvchan radius oʻlchamlari tahrirlanadigan oʻlchamlar sifatida ochiladi. |
| Boshqa dasturning fayli bilan CTB oʻquvchisini tekshirish (u nashr qilingan tavsifdan qurilgan), nomlangan chop etish uslublari (STB), dither, qalam raqamlari, CTB dagi kulrang va chop etish uslubidagi moslashuvchan chiziq turini sozlash | {{ui:Chop etish uslubi jadvallari}} da jadval tuzing (rang, kulrang, siyoh, chiziq qalinligi, chiziq turi, chiziq uchi va birikmasi, va har bir rang uchun toʻldirish uslubi): qarang: [Chop etish uslubi jadvallari](topic:plot-pdf#plot-style-tables). |
| Varaq sozlamalari | {{ui:PDF ga chop etish}} dialogida qogʻoz, masshtab va chop etish uslubini tanlang; varaq oʻz chop etish uslubini saqlaydi. |
| PDF larda hind va boshqa murakkab shakllanishli yozuvlar, va kam uchraydigan ideogrammalar (Yevropa yozuvlari, kirill, yunon, ibroniy, arab, fors, urdu, tay, xitoy, yapon va koreys chop etish) | Ular "?" bilan chop etiladi. |
| Bitta chop etilgan PDF da arab yozuvi va xitoy, yapon yoki koreys matni | Chop etish bitta shrift bilan boʻladi: ikki yozuvdan biri "?" bilan chiqadi. |
| Matnda aniq yoʻnalish belgilari (kiritmalar, almashtirishlar, izolyatorlar) | Ular eʼtiborga olinmaydi: har bir qator faqat oʻz harflari boʻyicha tartiblanadi. |
| Chop etishda biriktirilgan PDF sahifasi ichidagi rasmlar | Sahifaning chiziqlari, toʻldirishlari va matni chop etiladi. Faqat rasm boʻlgan sahifa {{cmd:SCANATTACH}} bilan kiritiladi va rasmlar chop etiladi. Qarang: [PDF asoslari](topic:pdf-underlay#plot-and-save). |
| CadCraft Studio dan lazerga ish yuborish (Studio da Web Serial yoʻq) | G-kodni saqlang va uni lazeringizning oʻz dasturi bilan yuboring, yoki Chrome yoki Edge dan yuboring. Qarang: [Lazerga chizmani yuborish](topic:laser-cutting#send-from-the-browser). |

## Cheklovlar va parametrlar

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| Varaqlardagi, bloklardagi, ellipslardagi, splaynlardagi yoki matndagi cheklovlar | {{ui:Model}} yorligʻida, chiziqlar, polichiziqlar, aylanalar, yoylar va nuqtalarda cheklang. |
| Silliq (G2) va polichiziq yoyining boʻrtishini toʻgʻridan-toʻgʻri cheklash | Tangent va Equal; yoy segmenti ikki uchiga ergashadi. |
| Boshqariladigan (driven) oʻlchov cheklovlari va {{cmd:DCANGULAR}} dagi `3Point` | Oddiy oʻlcham (DIMLINEAR …) qiymatni boshqarmasdan koʻrsatadi. |
| Qogʻozda belgilangan oʻlchamli oʻlchov cheklovlari va ularni chop etish | Ular faqat ekranda koʻrinadi; chop etish uchun oddiy oʻlchamlar qoʻshing. |
| EXPLODE, BREAK, JOIN va yangi obyektlar yaratadigan boshqa buyruqlar orqali saqlanadigan cheklovlar, va kesilgan polichiziqlarda | Ularni qaytadan cheklang (AUTOCONSTRAIN yordam beradi). {{cmd:MIRROR}} va {{cmd:TRIM}} chiziq, yoy va aylanalarni saqlaydi. |
| CadCraft da loyiha jadvallari (konfiguratsiyalar) | Panelda parametrlarni oʻzgartiring. |
| SolidWorks bilan sinovdan oʻtgan ikki tomonlama aylanish | Makros yasagan eskizni ishonishdan oldin tekshiring. |

## 3D

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| Yumaloqlashlar, faskalar, qobiqlar va lofting; koʻtariladigan yoʻl boʻylab sweep (3D yoʻllar) | Yoylar bilan konturlarni ekstrudlang, yuzlarni itaring va torting, aylantiring va tekis yoʻllar boʻylab sweep qiling. |
| Yuqoridan boshqa yoʻnalishda ekstrudlash | Shaklni yerda chizing va uni yuqoriga yoki pastga ekstrudlang (xohlasangiz, qiyalik bilan yoki yoʻl boʻylab); keyin qattiq jismni aylantiring. |
| 2D obyektlarning balandligi va qalinligi | Chizma 3D yorligʻida yerda yotadi (balandlik 0). |
| Boshqa dasturlardan qattiq jismlar, mintaqalar va jismlarni tahrirlash; ularni bloklar ichida koʻrsatish; ularning yuzlari egri, lofted yoki boshqa erkin shakldagi yuzalarda; polyface va poligon toʻrlar | Model fazosidagi qattiq jismlar 3D yorligʻida oʻzidek koʻrinadi va DWG da oʻzgarishsiz qaytariladi; chizilmagan narsalar 3D yorligʻi ochilganda roʻyxatlanadi. Toʻrlarni model fazosida 3D yuzlar sifatida soʻrang. Qarang: [Boshqa dasturlardan qattiq jismlar](topic:3d-solids#solids-from-other-programs). |
| Qattiq jismlarni nusxalash va joylashtirish | 3D yorligʻida {{cmd:COPY}} dan foydalaning. Bufer faqat 2D obyektlarni saqlaydi. |
| Kesimlar, keyingi oʻzgarishlarga ergashadigan koʻrinishlar va chop etilgan varaqlarda soyalangan qattiq jismlar | {{cmd:VIEWBASE}} tekis koʻrinishlarni joylashtiradi (surat); qattiq jismlar oʻzgartirilgandan keyin uni qaytadan ishga tushiring. |
| Materiallar, teksturalar va yoritish sozlamalari | Vizual uslublar: soyali, qirralar, yashirin chiziq, karkas, X-ray. |
| Xarita qatlamlari chop etilgan, varaqlar koʻrinish oynalarida va 3D yorligʻida; fayllardan rasmlar chizma bilan saqlangan; chizma joylashuvi DWG 2000–2007 va DXF R12 uchun boshqa dasturlar uchun yozilgan | Xarita qatlamlari ekranda model fazosi ostida koʻrinadi; tizim va qatlamlar roʻyxati chizma bilan saqlanadi: qarang: [Chizma ostidagi xarita qatlamlari](topic:map-layers) |
| 6 million nuqtadan yoki 512 MB dan katta E57 skanerlar, skaner ishlab chiqaruvchilarining oʻz fayllari (RCP, RCS, FLS, LGS, TZF, ZFS), chizma bilan saqlangan yoki chop etilgan nuqtalar buluti, 3D yorligʻida bulutga ilashish, Model yorligʻida vertikal (kesim) boʻlaklar | Katta yoki ishlab chiqaruvchi skanerlarni LAS yoki LAZ sifatida eksport qiling ([Nuqtalar buluti formatlari](topic:point-cloud-formats)); chizmani har safar ochganda bulutni biriktiring; Model yorligʻida reja boʻlagidan iz oling: qarang: [Nuqtalar buluti ustidan qurilgan izlarni chizish](topic:point-clouds) |
| Skanlarni roʻyxatga olish: skanlardagi nishonlarni (sharlar, shaxmat taxtalari) oʻzi topish, barcha skanlarni birga yechish (bundle adjustment), masshtab, modelga qarshi roʻyxatga olish | Mos nuqtalarni tanlang yoki nishon koordinatalarini kiriting, soʻng ICP bilan bir vaqtda bitta skanni aniqlang: qarang: [Bir nechta skanni bittaga roʻyxatga olish](topic:register-scans) |

## Dasturlar va sozlash

| Hali qurilmagan | Hozircha buning oʻrniga |
|---|---|
| Kompilyatsiya qilingan yoki himoyalangan LISP (.fas, .vlx), mahalliy dasturlar (.arx, .crx, .dbx) va VBA (.dvb) | Dasturning .lsp manbasini {{cmd:APPLOAD}} bilan yuklang. |
| LISP ning `grread`, reaktorlari (`vlr-…`), egri funksiyalari (`vlax-curve-…`), lugʻatlar va kengaytirilgan maʼlumot, Express Tools dagi `acet-…` | Tilning qolgan qismi ishlaydi: qarang: [LISP dasturlarini ishga tushirish](topic:run-lisp). Dastur yetib borganda buyruq qatori yoʻq funksiyani nomlaydi. |
| Dastur dialogidagi rasmlar va slaydlar | Ular boʻsh ramka sifatida koʻrinadi; dialogning qolgan qismi ishlaydi. |
| CraftScript (.craft), CadCraft da Lua va Python | Ularni PartCraft ning Script ish maydonida ishga tushiring. |
| Lenta menyusi uslublaridagi qatlam, rang va chiziq turi roʻyxatlari | {{ui:Qatlamlar}} panelidan va {{ui:Xossalar}} dan foydalaning. |
| Ishga tushirish toʻplami va kompyuteringizda saqlangan yoki sinxronlangan taxalluslar | Ular shu brauzerda saqlanadi; ish stoli ilovasi va bulutli xizmat ularni siz uchun saqlaydi. Studio da `acad.lsp` va `acaddoc.lsp` siz tanlagan yordamchi papkadan oʻqiladi (Dasturlarni yuklash). |

## Yordam

Yordam bu qurilishni tasvirlaydi. Biror narsa qoʻshilganda, u bu sahifadan chiqib, qoʻllanmalarga oʻtadi.
