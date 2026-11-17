---
title: Buyruqlar xaritasi: nimani yozish kerak
summary: CadCraft dasturining barcha buyruqlari, ularning qisqa nomlari bilan, A dan Z gacha, dasturning oʻzidan tuzilgan, hamda boshqa chizmachilik dasturlaridan kelgan va farq qiladigan odatlar.
keywords: buyruqlar xaritasi, buyruqlar, taxalluslar, qisqa nomlar, boshqa dasturdan, buyruqlar roʻyxati, nimani yozish, oʻchirish, kesish, ekvivalent, farqlar
from: 3bdfd3e6
---

CadCraft boshqa chizmachilik dasturlaridan maʼlum buyruq nomlari va qisqa nomlarini qabul qiladi: chiziq uchun `L`, kesish uchun `TR`, oʻchirish uchun `E` yozing. Shuning uchun koʻpchilik buyruqlar uchun jadval oʻrganish shart emas: tanish nom bu yerda ham shunday. Quyidagi roʻyxat CadCraft dasturining barcha buyruqlari boʻlib, dasturning oʻzidan tuzilgan. {{key:Enter}} oxirgi buyruqni takrorlaydi; buyruq satridagi `HELP` xuddi shu roʻyxatni chiqaradi.

Bir xil boʻlmagan yoki qurilmagan kam sonli buyruqlar:

- **Saqlash** brauzerda nusxani yuklab oladi ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio’da esa fayl yoziladi. Qarang: [Boshqa chizmachilik dasturlaridan](topic:coming-from).
- **PLOT** PDF yaratadi (shuningdek PNG va SVG), chop uslublari jadvali bilan; sahifa sozlash menejeri yoʻq.
- **DIMSTYLE** va **PEDIT** qurilgan; **PEDIT** da Edit-vertex varianti yoʻq (buni tutqichlar bajaradi).
- **TABLE** qurilmagan; {{cmd:XREF}}, {{cmd:SPLINE}} va {{cmd:WBLOCK}} qurilgan.
- Dastur buyruqlari (AutoLISP `C:NAME`) {{cmd:APPLOAD}} bilan yuklangandan keyin paydo boʻladi; ular bu roʻyxatda yoʻq.

## Barcha buyruqlar (398)

| Buyruq | Qisqa nomlar | Nima qiladi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | 3D koʻrinishni chap tugma bilan aylantirish |
| `ACCESS` | `AX` | Koʻzsiz chizishni yoqish yoki oʻchirish: natijalar ekran oʻqish dasturi orqali eshittiriladi, chizmada klaviatura kursori, ilashish tovushlari va ovozli buyruqlar. |
| `ALIASEDIT` |  | Buyruq taxalluslarini bitta matn faylida tahrirlash (tanish L, *LINE formati) |
| `ALIGN` | `AL` | Obyektlarni shunday siljitish va burishki, manba nuqtalari manzil nuqtalariga tushsin (bir, ikki yoki uch juft), xohlasangiz ularni masshtablash |
| `ALIGNPANEL` | `ALP` | Tekislash va taqsimlash panelini ochish |
| `ALIGNTO` |  | Tanlangan obyektlarning chap, markaz, oʻng, yuqori, oʻrta yoki pastki qirralarini tanlovga, birinchi yoki oxirgi tanlangan obyektga yoki nuqtaga nisbatan tekislash |
| `ANNOALLVISIBLE` | `ANNOALL` | Annotatsion obyektlarni har bir masshtabda koʻrsatish, yoki faqat koʻrinish oynasi (yoki chizma) masshtabi ularning roʻyxatida boʻlgan joyda koʻrsatish |
| `ANNOSCALE` | `CANNOSCALE` | Chizmaning annotatsiya masshtabini belgilash: annotatsion matn va oʻlchamlar bir xil oʻlchamda chop etilishi uchun qayta oʻlchanadi |
| `APPLOAD` | `AP` | Ilovalarni yuklash: LISP dasturlari (.lsp) va ularning dialog fayllari (.dcl); Ishga tushirish toʻplami (AP) |
| `ARC` | `A` | Yoy: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue — Boshlanish/Markaz/Oxiri, Boshlanish/Markaz/Burchak, Boshlanish/Markaz/Uzunlik, Boshlanish/Oxiri/Burchak, Boshlanish/Oxiri/Yoʻnalish, Boshlanish/Oxiri/Radius, Markaz/Boshlanish/Oxiri, Markaz/Boshlanish/Burchak, Markaz/Boshlanish/Uzunlik, Davom ettirish |
| `AREA` | `AA` | Nuqtalar yoki obyekt boʻyicha maydon va perimetr; Qoʻshish va Ayirish umumiy yigʻindini saqlaydi (AA) |
| `ARRAY` | `AR` | Qatorlar va ustunlardagi nusxalar, yoki markaz atrofida aylana boʻylab (AR) |
| `ARRAYASSOCIATIVITY` |  | ARRAY buyruqlari tahrirlanadigan massivlar (1) yoki oddiy nusxalar (0) yaratishini belgilaydi |
| `ARRAYCLOSE` |  | Massivning manba obyektlarini tahrirlashni tugatadi |
| `ARRAYEDIT` |  | Associative variant bilan yaratilgan massivni oʻzgartirish: sonlari, oraliqlari, manba obyektlari, bitta element |
| `ARRAYPATH` |  | Obyektlarning chiziq, yoy, polichiziq yoki boshqa egri chiziq boʻylab nusxalari |
| `ARRAYPOLAR` |  | Markaziy nuqta atrofida nusxalar |
| `ARRAYRECT` |  | Qatorlar va ustunlardagi nusxalar |
| `ASBUILT` | `ASB` | ASBUILT ekipaj oʻlchagan as-built nuqtalarini oʻqiydi (CSV / TXT, EXPORTPOINTS yozgani kabi) va ularni chizmaning nuqtalari bilan solishtiradi: chegara ichida yoki tashqarida, oʻlchanmagan, ortiqcha. Ularni AS-BUILT qatlamida belgilaydi va CSV hisobotini yuklab oladi. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Blok qiymat soʻraydigan atributni (tegni) aniqlash, blokka qoʻyish uchun (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Blok havolasining atribut qiymatlarini buyruq satrida ketma-ket tahrirlash (Enter qiymatni saqlaydi) |
| `ATTSYNC` |  | Blok havolalarini uning atribut taʼriflari bilan moslashtirish: yangilari standart qiymatlari bilan qoʻshiladi, olib tashlanganlari tashlanadi, joylashuvi va matni tiklanadi; qiymatlar saqlanadi |
| `AUDIT` |  | Ochiq chizmani zararlar uchun tekshiradi: chekli boʻlmagan sonlar, oʻlchamsiz obyektlar, yoʻqolgan qatlamlar, bloklar, uslublar va chiziq turlari, oʻzini oʻzi ichiga olgan bloklar, umumiy identifikatorlar, buzilgan oʻlchamlar va shtrixlar. Topganlarini tur boʻyicha roʻyxatlaydi va tuzatishdan oldin soʻraydi; tuzatish bitta bekor qilish qadami. |
| `AUNITS` | `ANGUNITS` | Burchaklar qanday koʻrsatilishi va kiritilishi: ondalik gradus, gradus-daqiqa-soniya yoki N45°23'30"E kabi yoʻnalishlar (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Chizmani avtomatik toʻldirishni yoqish yoki oʻchirish, yoki chizma namunalari hozir taklif qiladiganlarni roʻyxatlash. |
| `AUTOCONSTRAIN` |  | Geometriya allaqachon yaqin boʻlgan joylarda ustma-ust tushish, gorizontal va vertikal cheklovlar qoʻshish |
| `AUTODIM` | `ADIM` | Qoidalar boʻyicha oʻlchash: umumiy oʻlcham, tomonlar boʻylab zanjirlar, teshiklar, teshik diametrlari va setka oraligʻi, allaqachon oʻlchanganini takrorlamasdan. |
| `AUTOSHEET` | `ASH` | Varaqlarni oʻzi joylashtiradi: qogʻoz va standart masshtablarni tanlaydi hamda har bir koʻrinishni sarlavha va chizma ramkasi bilan joylashtiradi. |
| `BATTMAN` |  | Blok atributlari menejeri: blok atributlarining tartibi, teglari, soʻrovlari, standart qiymatlari va rejimlari, soʻng uning havolalari yangilanadi |
| `BCLOSE` |  | Blok muharririni yopish: blokni saqlash yoki oʻzgarishlarni bekor qilish |
| `BCONVERT` |  | BCONVERT takrorlanadigan geometriyani topib, uni blok havolalariga aylantiradi. Takrorlanadigan obyektlarni tanlang: ochiq fazodagi bir xil geometriyali, istalgan burchakda surilgan va burilgan boshqa barcha obyektlar toʻplamlari topiladi; Mirrored yoki Scaled yoqilgan boʻlsa, aks tasvirlar va boshqa oʻlchamdagi nusxalar ham topiladi. Yangi blokka nom va baza nuqtasi bering; tanlov va har bir nusxa unga havola boʻladi, har biri oʻz burilishi va masshtabiga ega. Yoki Block ni tanlab, mavjud blok nomini kiriting, uning obyektlarining erkin nusxalarini topish uchun. Nusxa bir xil qatlam, rang, chiziq turi va chiziq qalinligiga ega boʻlishi kerak, agar Properties Ignore qilinmagan boʻlsa. Qulflangan qatlamlardagi obyektlarga tegilmaydi. Bitta bekor qilish qadami. |
| `BEDIT` | `BE` | Blok muharriri: blok obyektlari va atributlarini tahrirlash; BCLOSE saqlaydi (BE) |
| `BLEND` |  | BLEND: ikki ochiq egri chiziq uchlari orasidagi splayn, ulash uchun uchlari yaqinidan tanlanadi. CONtinuity: Tangent ikkala yoʻnalishga ergashadi, Smooth esa egilishiga ham ergashadi. |
| `BLOCK` | `B`, `BMAKE` | Obyektlardan blok yaratish (ular bitta havolaga aylanadi) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: bitta blokning barcha havolalari boshqa blok havolasiga aylanadi, xuddi shu joyda, bir xil masshtab va burilish bilan. Ikkala blokda ham bor atributlarning qiymatlari saqlanadi. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE Bloklar panelini kursor filtrida ochadi. Panelda har bir blokning rasmi (eng yaqinda joylashtirilganlari birinchi) roʻyxat yoki setka shaklida koʻrsatiladi; blokni INSERT bilan joylashtirish uchun rasmini bosing yoki chizmaga torting. Kutubxonalar ostida oʻzingizning DWG yoki DXF faylingizni qoʻshing: uning bloklari rasmlari bilan roʻyxatlanadi va birini joylashtirganda shu chizmaga nusxalanadi. CadCraft Studio’da chizmalar papkasini ham qoʻshish mumkin, fayllar va papkalar eslab qolinadi. |
| `BOMEDIT` | `BOMCOLUMNS` | Materiallar roʻyxati jadvalining ustunlari, guruhlash, saralash, sarlavha, jamlamalar va izohlari |
| `BOMEXPORT` |  | Materiallar roʻyxati jadvalini .csv fayl sifatida saqlash |
| `BOMTABLE` | `BOM` | Bitta zona yoki butun chizma boʻyicha jonli materiallar roʻyxati jadvali |
| `BOMUPDATE` |  | Barcha materiallar roʻyxati jadvallarini hozir yangilash, muzlatilganlari ham |
| `BOMZONE` | `BZONE` | Materiallar roʻyxati uchun chizmaning nomlangan hududi: ikki burchak, koʻpburchak yoki yopiq obyekt konturi |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): yopiq hudud ichidagi nuqtani tanlang va uning atrofida yopiq polichiziq oling. Yoylar yoy boʻlib qoladi. Islands ichidagi hududlarning konturlarini ham chizadi. |
| `BOX` |  | Quti: ikki burchak va balandlik (3D) |
| `BPARAMETER` | `BPARAM` | Hali qurilmagan: blokka parametr (masalan, Visibility) qoʻshish. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blok parametrlari: formulali nomlangan parametrlar va bitta blokdagi bir nechta koʻrinish parametrlari. Blok muharririda ishlaydi (tanlangan obyektlarni holatga biriktiradi) va tanlangan havolada (uning oʻz qiymatlari va holatlari). |
| `BREAK` | `BR` | Chiziq, yoy, aylana yoki polichiziqni ikki nuqta orasida uzish (BR) |
| `BREAKATPOINT` |  | Chiziq, yoy yoki polichiziqni nuqtada ikkiga boʻlish |
| `BREAKLINE` |  | Uzilish belgisi bilan chiziq chizish; uning oʻlchami va uchlaridan tashqariga chiqishi eslab qolinadi. |
| `BREPLACE` |  | BREPLACE bir blokni boshqasiga almashtiradi. Tanlanganlar: blok havolalarini tanlang va oʻrniga ishlatiladigan blok nomini kiriting. Hammasi: blok va uning almashtiruvchisini nomlang, shunda barcha fazolardagi va boshqa bloklar ichidagi har bir havola oʻzgaradi. Havola oʻz joyi, masshtabi, burilishi va qatlamini, shuningdek ikkala blokda bor atributlarning qiymatlarini saqlaydi; yangi blokda joyi yoʻq qiymatlar tashlab yuboriladi va nomlanadi. |
| `BSEARCH` |  | BSEARCH bloklarni topadi. Nom: blok nomining bir qismi yoki * va ? bilan shablon. Atribut: havola atributlarida saqlangan qiymat (yoki TAG=value). Geometriya: obyektlar yoki bitta blok havolasini tanlang, shakli kamida 85% oʻxshash bloklar eng yaxshisidan boshlab roʻyxatlanadi; oʻlcham, burilish va aks ettirish hisobga olinmaydi. Ochiq fazodagi topilgan havolalar keyingi buyruq uchun tanlanadi. |
| `BURST` |  | Blok havolalarini parchalash va ularning atributlari aytganini saqlash: har bir qiymat atributning qatlamidagi matnga aylanadi. |
| `BVHIDE` | `BVH` | Blok muharririda: joriy koʻrinish holatidagi obyektlarni yashirish. |
| `BVSHOW` | `BVSH` | Blok muharririda: joriy koʻrinish holati yashirgan obyektlarni koʻrsatish (tanlash uchun xira koʻrinadi). |
| `BVSTATE` | `BVS` | Blok muharririda, koʻrinish holatlari bor blokda: holatga oʻtish, yoki bitta holatni qoʻshish, nomini oʻzgartirish yoki oʻchirish. |
| `CAL` |  | Uzunlik yoki sonni hisoblash: + − * / va qavslar, xohlagan joyda yozganingizdek |
| `CENTERLINE` | `CL` | Ikki chiziq orasidagi markaziy chiziq: ular orasida oʻrtada, yoki kesishganda bissektrisa boʻylab (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Markaz belgisi: aylana yoki yoy markazidagi xoch, markazdan tashqariga markaziy chiziqlar bilan (CM) |
| `CHAMFER` | `CHA` | Ikki chiziq orasidagi burchakni qiyalatish (D — ikki masofa, A — uzunlik va burchak, P — polichiziqning har bir burchagi) |
| `CHSPACE` |  | CHSPACE: obyektlarni varaq va model orasida koʻrinish oynasi orqali koʻchirish. Ular masshtablanadi va buriladi, shunda boshqa tomondan xuddi shunday koʻrinadi. Varaqda ular modelga boradi; koʻrinish oynasi orqali (MSPACE) ishlayotganda ular varaqqa keladi. |
| `CIRCLE` | `C` | Markaz va radius, diametr, 2 yoki 3 nuqta |
| `CLASS` |  | Tanlangan obyektlarni sinfga joylashtirish, yoki hech narsa tanlanmagan boʻlsa faol sinfni belgilash (? ularni roʻyxatlaydi) |
| `CLASSES` | `CLS` | Sinflar paneli: sinflar obyektlarni qatlamlar boʻylab saralaydi; ularni koʻrsatish, yashirish va uslublash, hamda har bir koʻrinish oynasida ularni almashtirish (CLS) |
| `COMMANDLINE` | `CMDLINE` | Buyruq satrini ulab qoʻyish yoki suzdirish, uni bitta qatorga aylantirish, tarix qatorlarini sozlash yoki tarixni ochish (F2) |
| `COMPARESETTINGS` | `CMPSET` | Oʻlcham uslublari, matn uslublari, qatlamlar, varaqlar yoki birliklarni solishtirish: shu chizmada ikkitasi, yoki bu chizmani boshqa ochiq chizma bilan solishtirish va qiymatni nusxalash. |
| `CONSTRAINTBAR` | `CBAR` | Cheklov panellarini koʻrsatish yoki yashirish (Showall / Hideall, yoki har bir obyekt uchun) |
| `COPY` | `CO`, `CP` | Obyektlarni nusxalash, bosganingizcha koʻp marta |
| `COPYBASE` |  | Tanlagan baza nuqtasi bilan obyektlarni buferga nusxalash |
| `COPYCLIP` |  | Obyektlarni buferga nusxalash (Ctrl+C); PASTECLIP ularni joylashtiradi |
| `COUNT` | `BCOUNT` | Blok havolalarini sanash: bittasini tanlang, shunda uning blokining barcha havolalari tanlanib sanaladi |
| `COUNTTABLE` |  | Blok sanalari jadvalini joylashtirish |
| `CREDITS` |  | Kutubxona mualliflik huquqlarini chizmaga jadval sifatida qoʻyadi. Jadvalni hozirgi chizma obyektlaridan yangilash uchun uni qayta ishga tushiring. |
| `CURSORSIZE` |  | Krestchaning oʻlchami: 100 uni chizma boʻylab chetdan chetgacha yuritadi (Sozlamalar › Kursor › Toʻliq ekran) |
| `CUTCLIP` |  | Obyektlarni buferga kesish (Ctrl+X): nusxalash, soʻng oʻchirish |
| `CYLINDER` | `CYL` | Silindr: markaz, radius va balandlik (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Bloklar, ularning atributlari va obyekt xususiyatlarini chizmada jadval yoki CSV fayl sifatida roʻyxatlash |
| `DATALINK` | `DL` | CSV fayldan jadval; faylni eslab qoladi, shuning uchun uni qayta oʻqish mumkin |
| `DATALINKUPDATE` | `DLU` | Maʼlumotlar bogʻlanishi faylini qayta oʻqish va uning jadvallarini qayta toʻldirish |
| `DCALIGNED` | `DCALI` | Oʻlchov cheklovi: nuqtalar, nuqta va chiziq, yoki ikki chiziq orasidagi haqiqiy masofa |
| `DCANGULAR` | `DCANG` | Oʻlchov cheklovi: ikki chiziq orasidagi burchak, yoki yoy burchagi |
| `DCCONVERT` |  | Cheklanadigan geometriyada chizilgan oʻlchamlarni oʻlchov cheklovlariga aylantirish |
| `DCDIAMETER` | `DCDIA` | Oʻlchov cheklovi: aylana yoki yoy diametri |
| `DCDISPLAY` |  | Chizmada oʻlchov cheklovlarini koʻrsatish yoki yashirish |
| `DCHORIZONTAL` | `DCHOR` | Oʻlchov cheklovi: gorizontal masofa |
| `DCLINEAR` | `DCLIN` | Oʻlchov cheklovi: gorizontal yoki vertikal masofa, joylashtirgan joyingizdan |
| `DCRADIUS` | `DCRAD` | Oʻlchov cheklovi: aylana yoki yoy radiusi |
| `DCVERTICAL` | `DCVER` | Oʻlchov cheklovi: vertikal masofa |
| `DELBLOCKS` |  | Bloklarni oʻchirish: har bir havola (ichkilari ham, har bir varaqda) va taʼriflar |
| `DELCONSTRAINT` | `DELCON` | Tanlagan obyektlardan barcha cheklovlarni (geometrik va oʻlchov) olib tashlash |
| `DELOPENING` |  | Eshik yoki derazani devordan olib tashlash. |
| `DESCRIBE` | `DESC` | Chizmada nimalar borligini aytish: nechta obyekt, qanday turdagi, qanchalik katta, nima tanlangan. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Tanlovni tozalash (Esc) |
| `DETAILS` | `DET` | Firmangizning oʻz detallari, siz chizayotgan narsa uchun topilgan: topish, blok qoʻshish, roʻyxat, olib tashlash, takliflarni yoqish yoki oʻchirish. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Matndan diagramma chizish: Mermaid oqim diagrammasi, PlantUML komponent diagrammasi, D2, “dan–gacha” roʻyxati yoki draw.io XML, tahrirlanadigan bloklar va bogʻlovchilar sifatida |
| `DIMALIGNED` | `DAL`, `DIMALI` | Ikki nuqta orasidagi haqiqiy masofa |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ikki chiziq orasidagi burchak, yoy burchagi yoki uchta nuqta boʻyicha |
| `DIMARC` | `DAR` | Yoy uzunligi oʻlchami: yoy boʻylab masofa, yoy belgisi bilan (DAR) |
| `DIMASZ` |  | Oʻlcham sozlamasi: Strelka oʻlchami |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Bitta asosiy chiziqdan joylashtirilgan oʻlchamlar |
| `DIMBREAK` | `DBREAK` | Oʻlcham va choʻzish chiziqlarini boshqa obyektlar kesishgan joyda uzish (Auto), ikki nuqta orasida (Manual), yoki uzilishlarni olib tashlash |
| `DIMCONSTRAINT` | `DCON` | Oʻlchov cheklovlari: chiziqli, tekislangan, burchakli, radius, diametr, konvertatsiya |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Oʻlchamlar zanjiri, har biri oxirgi oʻlchamning oxiridan |
| `DIMDEC` |  | Oʻlcham sozlamasi: Ondalik xonalar |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Yoy yoki aylana diametri |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Oʻlchamlarni ular bogʻlangan obyektlardan ajratish (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Oʻlcham matnini oʻzgartirish (Home, Yangi matn, Burish) yoki choʻzilgan chiziqlarni egish (Oblique) |
| `DIMEXE` |  | Oʻlcham sozlamasi: Oʻlcham chizigʻidan tashqariga uzaytirish |
| `DIMEXO` |  | Oʻlcham sozlamasi: Boshlangʻich nuqtadan siljish |
| `DIMGAP` |  | Oʻlcham sozlamasi: Matn atrofidagi boʻshliq |
| `DIMINSPECT` |  | Tekshiruv oʻlchami: qiymat atrofidagi ramka, yorliq va detal qanchalik tez-tez tekshirilishi bilan |
| `DIMJOGGED` | `DJO`, `JOG` | Siljigan radius oʻlchami: markaz uzoq boʻlganda yaqinroq nuqtadan chizilgan radius (DJO) |
| `DIMJOGLINE` | `DJL` | Chiziqli yoki tekislangan oʻlcham chizigʻiga siljish belgisini qoʻshish, masofa masshtabda chizilmaganini koʻrsatish uchun (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Gorizontal yoki vertikal masofa (R har qanday burchak uchun) |
| `DIMLUNIT` |  | Oʻlcham sozlamasi: uzunlik formati (1 ilmiy, 2 ondalik, 3 muhandislik, 4 arxitektura, 5 kasrli) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinata oʻlchami: nuqtaning UCS boshlangʻichidan X yoki Y masofasi, yetakchi chiziq bilan (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Tanlangan oʻlchamlarning oʻlcham oʻzgaruvchilarini uslubini oʻzgartirmasdan almashtirish; Clear uslubni tiklaydi (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Yoy yoki aylana radiusi |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Oʻlcham nuqtalarini obyektlarga bogʻlash, shunda ular harakatlanganda ergashadi va qayta oʻlchanadi (DRE) |
| `DIMSCALE` |  | Oʻlcham sozlamasi: Umumiy masshtab (oʻlchamlar × shu qiymat) |
| `DIMSPACE` |  | Parallel oʻlchamlar orasida teng oraliq, asosiy oʻlchamdan oʻlchanadi (0 ularni tekislaydi, Auto matn balandligining ikki baravari) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Nomlangan oʻlcham uslublarini yaratish, oʻzgartirish, joriy qilish, oʻchirish, qoʻllash va solishtirish (dialog; buyruq satrida -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Oʻlcham matnini oʻlcham chizigʻining chap, oʻng yoki markaziga koʻchirish, yoki uni burish |
| `DIMTEXTUNIT` | `DTU` | Oʻlcham matni mm, cm, m yoki km da, yoki chizmaning oʻz birliklarida: tanlangan oʻlchamlar, aks holda yangilari (DTU) |
| `DIMTXT` |  | Oʻlcham sozlamasi: Matn balandligi |
| `DIST` | `DI` | Ikki nuqta orasidagi masofa va burchak |
| `DISTRIBUTE` |  | Tanlangan obyektlarni teng taqsimlash, yonma-yon yoki yuqoridan pastga: markazlar orasida teng qadamlar yoki teng boʻshliqlar; tashqi ikkitasi joyida qoladi |
| `DIVIDE` | `DIV` | DIVIDE (DIV): chiziq, yoy, aylana, polichiziq, splayn yoki ellipsni teng qismlarga boʻluvchi belgilar. Nuqtalar, yoki Block bilan har bir belgida blok. |
| `DOCUMENTS` | `DOCS` | Hujjatlar panelini ochish: loyiha papkasi uchun chizmalarni olish va qaytarish, reviziyalar, chiqarish holatlari va tasdiqlash |
| `DOOR` | `DR` | Devorga eshik qoʻyish. Bosgan tomoningiz eshik ochiladigan tomon boʻladi. |
| `DRAWORDER` |  | Chizish tartibini oʻzgartirish: obyektlarni oldinga olib chiqish, orqaga yuborish, yoki boshqa obyektlar ustiga yoki ostiga qoʻyish. |
| `DUPLICATE` | `DUP` | Kursor bilan birga harakatlanadigan nusxa: qoʻyish uchun bosing (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Chizmaning xususiyatlari: sarlavha, muallif va boshqalar, hamda oʻzingizning nom va qiymat juftliklari |
| `DXFOUT` |  | Chizmani DXF R12 sifatida yuklab olish (Saqlash oʻz formatini saqlaydi) |
| `EATTEDIT` | `DDATTE` | Blok havolasining atributlarini tahrirlash: qiymatlar, matn va xususiyatlar, bir vaqtda bitta atribut |
| `ELLIPSE` | `EL` | Oʻq uchlari va boshqa yarim oʻq |
| `ERASE` | `E`, `DELETE` | Obyektlarni olib tashlash |
| `EXPLODE` | `X` | Polichiziqlar, bloklar va oʻlchamlarni qismlariga boʻlish |
| `EXPORT` | `EXP` | Chizmaning nusxasini qoʻshimcha yozadigan fayl turida saqlash |
| `EXPORT3D` | `3DEXPORT` | 3D modelni eksport qilish: GLB, OBJ yoki STL |
| `EXPORTPOINTS` | `EXPPTS` | Nuqtalar va bitta atributli bloklarning kiritish nuqtalarini tavsif sifatida CSV yoki TXT faylga yozish (PNEZD, PENZD yoki XYZ), BIM va geodezik dasturlar uchun |
| `EXTEND` | `EX` | Obyektlarni boshqalarga yetguncha uzaytirish: uchi yaqiniga bosing, bir nechtasi orqali torting, yoki kesish uchun Shift+bosish |
| `EXTRIM` |  | EXTRIM: bitta kesuvchi qirrani, soʻng bir tomonni tanlang. Qirra bilan kesishgan hamma narsa oʻsha tomonda kesiladi. Kursorni harakatlantirganda yoʻqoladigan qismlar koʻrinadi. |
| `EXTRUDE` | `EXT` | Yopiq 2D obyektlarni qattiq jismlarga choʻzish (3D) |
| `FIELD` |  | Matn, jadval katakchasi yoki atributga maydon qoʻyish: sana, fayl nomi, varaq raqami, chizma xususiyati, obyektning maydoni yoki uzunligi, yoki formula |
| `FILLET` | `F` | Ikki obyekt orasidagi burchakni yumaloqlash yoki kvadratlash (R radius, P polichiziqning har bir burchagi, M bir nechta) |
| `FIND` |  | Matn, atribut qiymatlari va oʻlcham matnidagi soʻzlarni topish va almashtirish |
| `FLATTEN` |  | Tanlangan obyektlarning balandligini (Z) va qalinligini 0 ga oʻrnatish, ular ishlatadigan bloklarda ham. |
| `FLOOR` |  | Chizish uchun pol tanlash, yangisini qoʻshish, yoki tanlovni unga koʻchirish yoki nusxalash. |
| `FLOORLAYERS` |  | Polslarni Floor-Layer nomli qatlamlarga aylantirish, polssiz faylni boshqa odamga yuborish uchun. |
| `FLOORS` | `FLR` | Qavatlar panelini ochish: bitta model fazosida pollarni qatlamlash. |
| `GCCOINCIDENT` |  | Cheklov: ikki nuqta uchrashadi, yoki nuqta obyekt ustida qoladi |
| `GCCOLLINEAR` |  | Cheklov: ikki chiziq bitta chiziqda qoladi |
| `GCCONCENTRIC` |  | Cheklov: ikki aylana yoki yoy umumiy markazga ega |
| `GCEQUAL` |  | Cheklov: ikki chiziq bir xil uzunlikda, yoki ikki aylana/yoy bir xil radiusda qoladi |
| `GCFIX` |  | Cheklov: nuqta yoki butun obyekt oʻz joyida qoladi |
| `GCHORIZONTAL` |  | Cheklov: chiziq (yoki ikki nuqta) gorizontal qoladi |
| `GCPARALLEL` |  | Cheklov: ikki chiziq parallel qoladi |
| `GCPERPENDICULAR` |  | Cheklov: ikki chiziq toʻgʻri burchak ostida qoladi |
| `GCSYMMETRIC` |  | Cheklov: ikki nuqta, chiziq yoki aylana chiziq boʻylab bir-birining aksi |
| `GCTANGENT` |  | Cheklov: chiziq va aylana yoki yoy (yoki ularning ikkitasi) urinma boʻlib qoladi |
| `GCVERTICAL` |  | Cheklov: chiziq (yoki ikki nuqta) vertikal qoladi |
| `GDSIN` | `GDS` | IC tartibini koʻrish (GDSII oqim fayli): har bir qatlam va datatype chizma qatlami sifatida, tekis, foydalanuvchi birliklarida; faqat koʻrish va oʻlchash uchun (laboratoriya sinovi) |
| `GEOMCONSTRAINT` | `GCON` | Geometrik cheklovlar: gorizontal, vertikal, parallel, urinma, ustma-ust tushish… |
| `GLBOUT` |  | 3D modelni GLB (glTF) sifatida eksport qilish |
| `GRADIENT` | `GD` | Maydonni bir yoki ikki rangli gradient bilan toʻldirish |
| `GRIDMOVE` | `GM` | Setka chizigʻini siljitish va unga osilgan narsalarni olib borish: devorlar choʻziladi, ustunlar, doiralar va belgilar koʻchadi, oʻlchamlar ergashadi. |
| `GROUP` | `G` | GROUP (G): tanlangan obyektlarga umumiy nom berish. Ulardan biriga bosish ularning hammasini tanlaydi. Nomda Enter nomsiz guruh yaratadi. |
| `GROUPEDIT` |  | GROUPEDIT: guruhni oʻzgartirish. Obyektlardan birini tanlang yoki uning Nomini bering, soʻng obyektlarni Qoʻshish yoki Olib tashlash, REName bilan qayta nomlash, tavsifini oʻzgartirish yoki bosish uni butunlay tanlashini belgilash. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Maydonni qattiq toʻldirish yoki naqsh bilan toʻldirish: ichiga bosing yoki yopiq obyektlarni tanlang (H) |
| `HATCHEDIT` | `HE` | Shtrixlashni oʻzgartirish: naqsh, masshtab, burchak, koordinata nuqtasi va uning chegara bilan bogʻlanishi. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Shtrixlashdan chegara polichiziqlarini qayta yaratish, unga bogʻlangan yoki bogʻlanmagan holda |
| `HATCHTOBACK` |  | Har bir shtrixlashni boshqa hamma narsaning orqasiga yuborish. |
| `HELP` | `?` | Bu roʻyxat |
| `HIDEOBJECTS` |  | Tanlangan obyektlarni UNISOLATEOBJECTS gacha yashirish. Chizma bilan saqlanmaydi. |
| `HISTORY` | `HIST` | HISTORY (HIST): bu chizmaning versiyalari — Studio saqlaganda bu kompyuterda saqlangan nusxalar va bulutdagi versiyalar — ochish, tiklash va oʻzgarganlarini rang bilan koʻrsatib solishtirish. |
| `ID` |  | Nuqtaning koordinatalari |
| `IMAGE` | `IM` | CadCraft ga chizma ishlatadigan rasm fayllarini berish (DWG faqat ularning joyini saqlaydi). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Faylidan rasm (PNG yoki JPEG) joylashtirish. |
| `IMAGECLIP` | `ICL` | Rasmni toʻgʻri toʻrtburchak yoki koʻpburchakka kesish, yoki kesishni olib tashlash. |
| `IMPORT` | `IMP` | Qoʻshimcha oʻqiydigan turdagi faylni shu chizmaga import qilish |
| `INSERT` | `I`, `DDINSERT` | Blok joylashtirish (S masshtab, R burish); F DWG/DXF fayldan, L kutubxonadan |
| `INTERSECT` | `IN` | Qattiq jismlarda umumiy boʻlganini (3D), yoki 2D mintaqalar umumiy maydonini qoldirish |
| `ISODRAFT` |  | ISODRAFT: izometrik chizish yoqilgan yoki oʻchirilgan, yoki toʻgʻridan Chap, Yuqori yoki Oʻng tekisligida. Yoqilgan boʻlsa, Ortho va qutb kuzatuvi tekislikning ikki oʻqini kuzatadi, setka izometrik chiziladi va ELLIPSE da Isocircle boʻladi. |
| `ISOLATEOBJECTS` | `ISOLATE` | Faqat tanlangan obyektlarni koʻrsatish; boshqa hamma narsa shu fazoda UNISOLATEOBJECTS gacha yashirin. Chizma bilan saqlanmaydi. |
| `ISOPLANE` |  | ISOPLANE: chizish uchun izometrik tekislikni tanlash: Chap, Yuqori yoki Oʻng. Enter keyingisiga oʻtadi, izometrik chizish yoqilganda F5 kabi. |
| `JOIN` | `J` | Uchi bilan tutashgan chiziqlar, yoylar va polichiziqlarni bitta polichiziqqa; bitta chiziqda yotgan chiziqlarni bitta chiziqqa birlashtirish (J) |
| `LASER` | `LASERCUT` | Lazer panelini ochish: qatlamlarni lazerli kesuvchi yoki gravirovkaga yuborish (GRBL G-kod) |
| `LASSOMODE` |  | Bosib torting arqon (1) yoki toʻgʻri toʻrtburchak (0) chizadi |
| `LAYDEL` |  | Qatlam va unda joylashgan har bir obyektni oʻchirish (modelda, varaqlarda va bloklarda) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Qatlam menejerini ochish: barcha qatlamlar bitta jadvalda |
| `LAYERPANEL` |  | Qatlamlar panelini koʻrsatish |
| `LAYFRZ` |  | Tanlagan har bir obyektning qatlamini muzlatish |
| `LAYGROUP` | `LG` | Qatlamlarni Qatlamlar panelida papkalarga guruhlash. |
| `LAYISO` |  | Tanlangan obyektlarning qatlamlarini izolyatsiya qilish (boshqa barcha qatlamlar oʻchiriladi) |
| `LAYLOCKFADE` |  | Qulflangan qatlamlardagi obyektlar qanchalik xiralashishini va bosish ularni tanlay oladimi-yoʻqligini belgilash. |
| `LAYMCUR` |  | Tanlagan obyektning qatlamini joriy qilish |
| `LAYMRG` |  | Qatlamlarni birlashtirish: ularning obyektlari nishon qatlamga koʻchadi, birlashtirilgan qatlamlar yoʻqoladi |
| `LAYOFF` |  | Tanlagan har bir obyektning qatlamini oʻchirish |
| `LAYON` |  | Har bir qatlamni yoqish |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Sarlavha bloki va koʻrinish oynasi bilan yangi varaq |
| `LAYTHW` |  | Har bir qatlamni eritish |
| `LAYUNISO` |  | LAYISO oʻchirgan qatlamlarni qayta yoqish |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Eski vyetnamcha shriftlar (TCVN3 / ABC shriftlari, masalan .VnTime, va VNI shriftlari, masalan VNI-Times) bilan yozilgan matnni Unicode ga aylantiradi. Bunday matn allaqachon oʻqilganidek koʻrsatiladi; bu uni doimiy ravishda qayta yozadi, soni va bitta bekor qilish qadami bilan. |
| `LENGTHEN` | `LEN` | Chiziqlar, yoylar va polichiziqlarni uzaytirish yoki qisqartirish: miqdor, foiz, umumiy qiymatgacha yoki torthib (LEN) |
| `LIBRARY` | `LIB` | Kutubxona paneli: elementlarni joylashtirish, yangilanishlarni tekshirish, mualliflik huquqlari |
| `LIMITS` |  | Chizma chegaralarini belgilash: ON, OFF, yoki pastki-chap va yuqori-oʻng burchaklar. Chegaralar ON boʻlsa, ulardan tashqaridagi nuqtalar rad etiladi |
| `LINE` | `L` | Toʻgʻri kesmalar, har biri alohida obyekt |
| `LINETYPE` | `LT`, `CELTYPE` | Yangi obyektlarga beriladigan chiziq turi (qatlam boʻyicha, blok boʻyicha yoki nomlangan) |
| `LINKVIEWS` | `SYNCVIEWS` | Barcha oynalarni birga surish va masshtablash (boʻlingan ekran), ikki chizma yoki revizyalarni solishtirish uchun |
| `LISPEDIT` | `VLIDE` | LISPEDIT (yoki VLIDE) LISP muharririni ochadi: dasturni yozish, yuklash va sinash oynasi. Chizmaga yuklash har bir shaklni oʻqiydi, APPLOAD bilan faylni yuklagandek, va uning buyruqlarini yaratadi. Tanlovni ishga tushirish tanlangan shakllarni yoki kursor turgan shaklni bajaradi. Konsol dastur chop etgan narsani va har bir xatoni qatori bilan koʻrsatadi. Mos qavs yozayotganda belgilanadi, Enter yangi qatorni suradi. Yangi, Ochish va Saqlash .lsp fayl bilan ishlaydi. Matn yonidagi roʻyxatlar dastur aniqlagan funksiyalarni, hali bu LISPda yoʻq chaqirilgan funksiyalarni va uning barcha funksiyalarini koʻrsatadi. Oyna chizmani bloklamaydi, shuning uchun dastur nuqtalar soʻrashi mumkin; Toʻxtatish yoki Esc ishlayotgan dasturni tugatadi. |
| `LIST` | `LI`, `LS` | Tarixdagi obyektlarni tavsiflash |
| `LTSCALE` | `LTS` | Chizmaning chiziq turi masshtabi (har bir chiziq va boʻshliq shu bilan koʻpaytiriladi) |
| `LWDISPLAY` | `LWT` | Chiziq qalinliklarini ekranda koʻrsatish yoki yashirish (holat panelidagi LWT tugmasi) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Yangi obyektlarga beriladigan chiziq qalinligi (qatlam, blok, standart yoki mm boʻyicha) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Model fazosi ostidagi xarita qatlamlari: chizmaning koordinata tizimi, plitkalar, WMS, WMTS, ArcGIS, rasmlar |
| `MASSPROP` |  | MASSPROP: mintaqalar va yopiq obyektlarning kesim xususiyatlari: maydon, perimetr, markaz, momentlar va inersiya koʻpaytmasi, inersiya radiuslari va bosh oʻqlar. Chiziqlar va yoylar uchun aniq. Hisobotni matn fayliga yozishi mumkin. |
| `MATCHPROP` | `MA`, `PAINTER` | Xususiyatlarni moslashtirish: bir obyektning qatlami, rangi va boshqa xususiyatlarini boshqalarga nusxalash (MA) |
| `MEASURE` | `ME` | MEASURE (ME): chiziq, yoy, aylana, polichiziq, splayn yoki ellips boʻylab, bosgan joyingizga eng yaqin uchidan berilgan har uzunlikda belgi. Nuqtalar, yoki Block bilan har bir belgida blok. |
| `MEASUREGEOM` | `MEA` | Masofa, radius, burchak yoki maydonni oʻlchash (MEA) |
| `MINSERT` |  | MINSERT: blokni bir zumda qatorlar va ustunlarda joylashtirish. Har biri oʻz havolasi, shuning uchun ulardan istalganini koʻchirish yoki oʻchirish mumkin. |
| `MIRROR` | `MI` | Obyektlarni chiziq boʻylab aks ettirish |
| `MLEADER` | `MLD`, `MLEAD` | Koʻp yetakchi: strelka, yetakchi va izoh bitta obyekt sifatida (MLD) |
| `MLEADERALIGN` | `MLA` | Koʻp yetakchilarni ulardan biri bilan bir yoʻnalishda tekislash, teng oraliqda yoki ikki nuqta orasida taqsimlash (MLA) |
| `MLEADERCOLLECT` | `MLC` | Bir nechta koʻp yetakchini bittaga yigʻish: ularning bloklari qator yoki ustunda, yoki izohlari bir-biri ostida (MLC) |
| `MLEADEREDIT` | `MLE` | Koʻp yetakchiga yetakchi chiziqlar qoʻshish yoki olib tashlash; uning mazmunini matn va blok oʻrtasida almashtirish (MLE) |
| `MLINE` |  | Parallel chiziqlarni birga chizish, burchaklarda ulangan holda. |
| `MOVE` | `M` | Obyektlarni baza nuqtasi va ikkinchi nuqta boʻyicha koʻchirish |
| `MSPACE` | `MS` | Ochiq varaqning koʻrinish oynasi orqali modelda ishlash (yoki koʻrinish oynasi ichida ikki marta bosing). |
| `MTEXT` | `MT`, `T` | Abzats matni: kengligini torting, soʻng joyida yozing; Enter yangi abzatsni boshlaydi (T) |
| `MVIEW` | `MV` | Varaqda modelga koʻrinish oynasi |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nomlangan koʻrinishlar: ekrandagi koʻrinishni (yoki oynani) nom bilan saqlash va unga qaytish (NV) |
| `NCOPY` |  | Obyektlarni blok havolasidan yoki bogʻlangan chizmadan chizmaga nusxalash, uni parchalamasdan. |
| `NEARBY` |  | Kursorga yaqin nimalar borligini, eng yaqinidan boshlab, masofa va tomoni bilan aytish. |
| `NEW` |  | Yangi chizma boshlash |
| `OBJECTSCALE` | `OBJSCALE` | Annotatsion matn va oʻlchamlarning annotatsiya masshtablari: masshtab qoʻshish, birini oʻchirish, joriy masshtabni qoʻshish yoki ularni roʻyxatlash (har bir koʻrinish oynasi ularni oʻz masshtabi uchun oʻlchamda koʻrsatadi) |
| `OBJOUT` |  | 3D modelni OBJ sifatida eksport qilish |
| `OFFSET` | `O` | Masofada parallel nusxalar |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: OFFSET polichiziqning tashqi burchaklaridagi boʻshliqlarni qanday yopishi. 0 segmentlarni choʻzadi, 1 yoy qoʻshadi, 2 toʻgʻri kesish qoʻshadi. Ushbu seans uchun saqlanadi. |
| `OLELIST` | `OLES` | Chizma tashuvchi OLE obyektlarini roʻyxatlash va ulardan birining rasmi nusxasini tanlagan joyingizga qoʻyish |
| `OPEN` |  | Bu kompyuterdan DWG yoki DXF ochish |
| `OPENIN3D` |  | Bu chizmani 3D modellash ilovasida yangi yorliqda ochish (hech narsa yuklanmaydi) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Obyekt ilashish menyusini ochish: qaysi ilashishlar yoqilishini tanlash. Shuningdek holat panelidagi Snap ustida oʻng tugmani bosish. |
| `OVERKILL` |  | Takroriy obyektlarni oʻchirish va bir-birini qoplagan yoki uchma-uch tutashgan chiziq va yoylarni belgilangan chegara ichida birlashtirish. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrlar paneli: foydalanuvchi parametrlari va oʻlchov cheklovlari bitta jadvalda |
| `PARTSLIST` | `PLIST` | Kutubxonadan joylashtirilgan har bir standart detal va poʻlat kesimi jadvali |
| `PASTEAREA` | `PAREA` | MarkupCraft da nusxalangan (Copy area) hududni haqiqiy oʻlchamda, rasm sifatida qoʻyish. |
| `PASTEBLOCK` |  | PASTEBLOCK: nusxalaganingizni bitta blok sifatida qoʻyish. Blokka oʻz nomi beriladi; RENAME unga oʻzingizniki beradi. |
| `PASTECLIP` |  | Buferni qoʻyish: kursor bilan birga harakatlanadi, qayerga borishini bosing (Ctrl+V) |
| `PASTEORIG` |  | Buferni nusxalangan koordinatalarda qoʻyish (Ctrl+Shift+V) |
| `PDF` |  | CadCraft ga chizma osti qatlamlari ishlatadigan PDF fayllarni berish |
| `PDFADJUST` |  | PDF osti qatlamini xiralashtirish, kontrastni, monoxromni oʻzgartirish yoki oʻchirish |
| `PDFATTACH` | `PDFATT` | PDF sahifani osti qatlami sifatida biriktirish (PDFATTACH) |
| `PDFCLIP` |  | PDF osti qatlamini toʻgʻri toʻrtburchak yoki koʻpburchakka kesish |
| `PDFIMPORT` | `PDFIM` | PDF sahifasining chiziqlari, toʻldirishlari va matnini chizma obyektlariga aylantirish (PDFIMPORT) |
| `PDFLAYERS` |  | PDF osti qatlamining qatlamlarini yoqish yoki oʻchirish |
| `PEDIT` | `PE` | Polichiziqni tahrirlash: yopish, ochish, birlashtirish, kenglik, egri chiziqqa moslash, splayn egri chiziq, egri chiziqni tekislash, chiziq turi yaratish, teskari; chiziqlar, yoylar va splaynlarni polichiziqqa aylantirish mumkin |
| `PHOTOSKETCH` | `PSK` | Qogʻozdagi qoʻl eskizining fotosuratini masshtab bilan chiziqlar va yoylarga aylantiradi, perspektivani tekislab, har bir qalam rangiga oʻz qatlamini beradi. |
| `PICKSTYLE` |  | PICKSTYLE: guruhning bitta obyektini tanlash butun guruhni tanlaydimi (1, boshlangʻich sozlama) yoki faqat shu obyektni (0). Ushbu seans uchun saqlanadi. |
| `PLAN` |  | Koʻrinishni shunday burishki, UCS X oʻqi (joriy ucs, saqlangan Ucs yoki World) ekranda tekis boʻlsin. Chizmadagi hech narsa siljimaydi. |
| `PLINE` | `PL` | Chiziq va yoy segmentlaridan polichiziq |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF ga chop etish: varaq yoki model masshtabda |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Chop uslublari jadvallari: har bir rang qanday chop etilishini belgilash (rang, qora, kulrang, siyoh, chiziq qalinligi); chizma bilan saqlanadi (STYLESMANAGER) |
| `POINT` | `PO` | Nuqta obyektlari |
| `POINTCLOUD` | `PC` | Biriktirilgan nuqta buluti: kesim, balandlik, qalinlik, rang, oʻlcham, koʻrinish, zoom, ajratish |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Nuqta buluti (LAS, LAZ, XYZ, PTS) ni chizma ostiga biriktirish |
| `POLARANG` |  | Qutb kuzatuvi qadami gradusda (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Muntazam koʻpburchak |
| `PRESSPULL` |  | Qattiq jismning yuzini itarish yoki tortish (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Xususiyatlar panelini ochish (shuningdek Ctrl+1, yoki obyektni ikki marta bosing) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Xususiyatlar panelini oynaning chetiga yigʻish |
| `PSPACE` | `PS` | Ishlayotgan koʻrinish oynasidan chiqib varaqqa qaytish (yoki tashqarisida ikki marta bosing). |
| `PUBLISH` | `-PUBLISH` | Bir nechta yoki barcha varaqlarni bitta PDF ga chop etish (har varaq uchun sahifa va xatcho‘p) |
| `PURGE` | `PU` | Hech kim ishlatmaydigan blok taʼriflarini olib tashlash |
| `QDIM` |  | Tez oʻlchov: bir nechta obyektni bir vaqtda oʻlchash (uzluksiz, asosiy, zinapoyali, ordinata, radius yoki diametr) |
| `QPMODE` | `QP` | Kursor bilan Tez xususiyatlarni yoqish yoki oʻchirish |
| `QSELECT` | `QS` | Tez tanlash: qatlami, rangi, oʻlchami yoki nomi mos keladigan turdagi har bir obyekt (QS) |
| `RASTERSNAP` |  | Skanerlangan varaqlar chiziqlariga ilashishni yoqish yoki oʻchirish. |
| `RAY` |  | Nur: nuqtadan boshlangan, bir tomonga cheksiz qurilish chizigʻi. |
| `RECOVER` |  | Shikastlangan DXF yoki DWG ni ochadi: faylni rad etish oʻrniga oʻqib boʻlmaydiganlarni oʻtkazib yuboradi, nima oʻtkazilganini aytadi, soʻng chizmani AUDIT kabi tekshiradi va tuzatadi. |
| `RECTANG` | `REC`, `RECTANGLE` | Ikki burchakdan yopiq polichiziq |
| `REDLINE` | `RDL` | Revizyaga qizil belgi: MarkupCraft qizil belgi paketini oʻqish, har bir oʻzgarishni qabul qilish yoki rad etish, qabul qilinganlarni revizyon jurnali bilan bulut shaklida belgilash va javoblar faylini saqlash (RDL) |
| `REDO` |  | Bekor qilinganni qayta bajarish |
| `REFCLOSE` |  | Blokni joyida tahrirlashni tugatish: saqlash yoki oʻzgarishlarni tashlab yuborish |
| `REFEDIT` |  | Blokni joyida tahrirlash, uning havolasi turgan joyda, chizmaning qolgan qismi xiralashgan holda; REFCLOSE saqlaydi |
| `REGEN` | `RE` | Chizmadan shu yorliqda chizilganlarni qayta tiklash |
| `REGENALL` | `REA` | Har bir yorliq, oyna va ochiq chizmada chizilganlarni qayta tiklash |
| `REGION` | `REG` | REGION (REG): yopiq obyektlardan yoki uchlari bilan halqa hosil qiluvchi chiziq, yoy va polichiziqlardan tekis hududlar (mintaqalar) yasash. UNION, SUBTRACT va INTERSECT mintaqalarni birlashtiradi, MASSPROP esa ularning kesim xususiyatlarini beradi. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Bir nechta skanerni roʻyxatga olish: ularni tanlangan nuqta juftliklari yoki nishonlar bilan bitta ramkaga joylashtirish, ICP bilan aniqlashtirish, bitta LAS yoki E57 ga eksport qilish |
| `REINIT` |  | Taxalluslar faylini qayta yuklash |
| `RENAME` | `-RENAME`, `REN` | Qatlam yoki blokni qayta nomlash (har bir obyekt yoki havola ergashadi) |
| `REVCLOUD` | `RC` | Revizyon buluti: toʻgʻri toʻrtburchak, koʻpburchak, erkin yoʻl yoki obyektni aylantirish (RC) |
| `REVOLVE` | `REV` | Yopiq 2D obyektlarni oʻq atrofida qattiq jismlarga aylantirish (3D) |
| `ROTATE` | `RO` | Obyektlarni baza nuqtasi atrofida burish (RO) |
| `SAMPLES` | `SAMPLE` | CadCraft namuna chizmalaridan birini ochish (me’moriy toʻplam, as-built) oʻrganish uchun |
| `SAVE` | `QSAVE` | Chizmani formatida yuklab olish (DWG yoki DXF) |
| `SAVEAS` |  | Chizmani DWG yoki DXF sifatida yuklab olish: qaysini tanlang |
| `SAYSEL` |  | Tanlangan narsani aytish, har biri bir gap bilan. |
| `SCALE` | `SC` | Obyektlarni baza nuqtasi atrofida masshtablash (SC) |
| `SCALELISTEDIT` | `SCALELIST` | Chizmaning oʻz masshtablarini qoʻshish, tahrirlash va oʻchirish; ular koʻrinish oynasi va chop etish masshtab roʻyxatlarida koʻrinadi va faylda saqlanadi (SCALELIST) |
| `SCANALIGN` | `SCL` | Skanerlangan varaqni ikki nuqtaga tekislash: koʻchirish, burish va xohlasangiz masshtablash. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Skanerlangan chizmani joylashtirish: PNG, JPEG yoki TIFF (koʻp sahifali faylning bitta sahifasi yoki barchasi) yoki rasm boʻlgan PDF sahifa. |
| `SCANCLEAN` | `SCC` | Skanerlangan varaqni qora-oq qilish va dogʻlarni olib tashlash. |
| `SCANCROP` | `SCR` | Skanerlangan varaqni oynaga kesish. |
| `SCANDESKEW` | `SCD` | Skanerlangan varaqning uzun chiziqlari qanday burchakda ekanini topish va burchakni qabul qilganingizdan keyin varaqni tekis burish. |
| `SCANERASE` | `SCE` | Skanerlangan varaqning hududini oʻchirish: toʻgʻri toʻrtburchak, koʻpburchak yoki arqon. |
| `SCANINFO` | `SCI` | Skanerlangan varaqning asl fayli va undan keyingi bosqichlarni koʻrsatish. |
| `SCANSCALE` | `SCS` | Skanerlangan varaqni masshtablash: uning ustida ikki nuqta tanlang va ular orasidagi haqiqiy masofani kiriting. |
| `SCANTRACE` | `SCT` | Skanerlangan varaqni yangi qatlamda chiziq va yoylarga koʻchirish, siz belgilagan chegara bilan. Matn va shtrixlash rastr boʻlib qoladi. |
| `SELECT` |  | Obyektlarni hozir tanlash (keyingi buyruqda P, Oldingi uchun) |
| `SELECTALL` | `AI_SELALL` | Bu yorliqda tahrirlashingiz mumkin boʻlgan har bir obyektni tanlash (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Siz tanlagan obyektlarga oʻxshash har bir obyektni tanlash: bir xil tur, qatlam va rang (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Varaqlar toʻplami panelini koʻrsatish: koʻplab chizmalardan varaqlar, raqamlangan, bitta PDF sifatida chop etilgan. |
| `SHORTCUTS` | `KEYS` | Har qanday buyruqqa oʻz tugmasini berish (harf bilan Ctrl yoki Alt, yoki boʻsh funksiya tugmasi), bu brauzerda yoki ish stolida saqlanadi. |
| `SHXFONTS` | `SHX` | CadCraft ga papkadan yoki fayllardan SHX shriftlarini berish, shunda ularni nomlagan matn uslublari ularda chizadi (roʻyxat, olib tashlash, teskari) |
| `SKETCHFIX` | `SKF` | Erkin chiziqlar chizish; har biri toza chiziq, aylana, yoy, toʻgʻri toʻrtburchak yoki polichiziqqa aylanadi, toʻgʻrilanib boshqalarga ulanadi. |
| `SKETCHLIVE` | `SKL` | Qalam bilan eskiz: har bir chiziq qalamni koʻtarganingizda aniq chiziq, aylana, yoy yoki toʻgʻri toʻrtburchakka aylanadi, chizmaga ilashadi, oʻlchamini ustidan yozish mumkin. |
| `SPLINE` | `SPL` | Nuqtalar orqali splayn chizish (yoki boshqaruv koʻpburchagi bilan), yoki polichiziqni splaynga aylantirish |
| `SPLINEDIT` | `SPE` | Splaynni tahrirlash: nuqtalarni, boshqaruv nuqtalari va ogʻirliklarini moslash, ochish yoki yopish, teskari qilish yoki polichiziqqa aylantirish |
| `SPLIT` |  | Chizma maydonini oynalarga boʻlish (model ustida VPORTS kabi; varaqdan ham) |
| `STEELMEMBER` | `SMEMBER` | Standart kesimdan 3D poʻlat elementi: ikki nuqta (tirgak) yoki baza nuqtasi va balandlik (Column) |
| `STLOUT` |  | 3D modelni STL sifatida eksport qilish (millimetrlarda) |
| `STRETCH` | `S` | Choʻzish: uchlar ustida kesishgan oynani torting; ichidagi narsalar koʻchadi, qolgani joyida qoladi (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Matn uslublari: yangi matn oladigan shrift, balandlik, kenglik va qiyalik (dialog; buyruq satrida -STYLE) |
| `SUBTRACT` | `SU` | Boshqalardan qattiq jismlarni olib tashlash (3D), yoki 2D mintaqalarni mintaqalardan (SU) |
| `SWBOUT` | `SWMACRO` | SolidWorks uchun makros yuklab olish (.swb) — modelni bitta cheklangan eskizga qayta quradi |
| `SWEEP` |  | Yopiq 2D obyektlarni yoʻl (chiziq, polichiziq, yoy, aylana) boʻylab qattiq jismlarga surish (3D) |
| `TABLE` | `TB` | Jadval yaratish: qatorlar va ustunlar, yoki buferdagi elektron jadval katakchalari yoki CSV fayldan |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Jadvalni tahrirlash: katakchaga yozish, qator va ustunlarni qoʻshish va oʻchirish, oʻlchamlar, birlashtirilgan katakchalar, tekislash |
| `TABLEEXPORT` |  | Jadval koʻrsatgan narsani CSV fayl sifatida saqlash |
| `TABLEPASTE` | `PASTETABLE` | Buferdagi elektron jadval katakchalaridan jadval yaratish |
| `TABLESTYLE` | `TS` | Jadval uslublari: sarlavha, ustun nomi va maʼlumot qatorlari uchun matn balandligi, tekislash, chekka va chegaralar |
| `TAGS` |  | Blok havolalaridagi teglar: tegni aniqlash (turi, ruxsat etilgan qiymatlari, qoʻllanadigan bloklar), uni tanlangan havolalarga qoʻyish va ularni CSV sifatida saqlash mumkin boʻlgan jadval sifatida roʻyxatlash |
| `TEXT` | `DT`, `DTEXT` | Bir qatorli matn; Enter keyingi qatorni boshlaydi |
| `TEXTEDIT` | `ED`, `DDEDIT` | Matnni joyida tahrirlash: matnni tanlang (yoki ikki marta bosing) (ED) |
| `TEXTMASK` | `TMASK` | Matnlar orqasiga fon niqobi qoʻyish (chizmaning foni yoki rang), yoki uni olib tashlash. |
| `TEXTTOFRONT` |  | Barcha matn, oʻlcham va yetakchilarni boshqa hamma narsadan oldinga olib chiqish. |
| `TOOLBAR` |  | Asboblar paneli tugmalarida nima koʻrsatilishini tanlash: belgilar va matn, faqat belgilar yoki faqat matn (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Asboblar panelini oynaning yuqori, pastki, chap yoki oʻng tomoniga joylashtirish |
| `TOOLBARROWS` |  | Asboblar paneli nechta qatordan iborat boʻlishini tanlash: sigʻdirish, 2 yoki 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Chizma ustidagi panellarni standart yoki ixcham qilish |
| `TOUCHCROSSHAIR` | `TCX` | Barmoq bilan chizish uchun siljigan krestcha: bitta barmoq uning ustida va yonida turgan krestchani harakatlantiradi, shunda barmoq tanlash nuqtasini yopmaydi. Barmoqni koʻtarsangiz hech narsa tanlanmaydi; Bosish tugmasi yoki ikkinchi barmoq bilan bosish krestchada tanlaydi, Bosish ni ushlab turib harakatlanish torttiradi. Uzoq bosish yoki Enter tugmasi Enter bo‘ladi. Ikki barmoq suradi va masshtablaydi. Variantlar: ON, OFF, Auto (faqat barmoq yagona koʻrsatkich boʻlgan joyda yoqiladi), Distance, Side. |
| `TOUR` | `TUTORIAL` | Birinchi chizma boʻyicha olti qadamli sayohatni qayta boshlash |
| `TRIM` | `TR` | Obyektlarni boshqalar kesishgan joygacha kesish: bir qismni bosing, bir nechtasi orqali torting, yoki choʻzish uchun Shift+bosish (TR) |
| `TRIMEXTENDMODE` |  | TRIM va EXTEND qanday boshlanishi: 1 Tez (har bir obyekt kesuvchi qirra yoki chegara), 0 Standart (avval qirralarni tanlaysiz) |
| `TTR` |  | Siz bergan radiusli, ikki obyektga urinma aylana (CIRCLE T bilan bir xil). |
| `TURNLEFT` |  | Koʻrinishni 90° chapga burish (soat strelkasiga qarshi): UCS Z -90, koʻrinish ergashadi. Chizmadagi hech narsa siljimaydi. |
| `TURNRIGHT` |  | Koʻrinishni 90° oʻngga burish (soat strelkasi boʻyicha): UCS Z 90, koʻrinish ergashadi. Chizmadagi hech narsa siljimaydi. |
| `TURNWORLD` |  | Dunyoga qaytish: UCS World, koʻrinish yana tekis boʻladi. |
| `TXT2MTXT` | `T2M` | Bir qatorli matnlarni yuqoridan pastga bitta abzats matniga ulash. |
| `UCS` |  | Sizning koordinata tizimingiz: boshlangʻich nuqta va X oʻqi (origin, Z burchak, 3point, OBject, Previous, World, NAmed). Siz yozgan nuqtalar, ortho, qutb kuzatuvi, setka va yangi matn unga ergashadi; koʻrinish X oʻqini tekis qilib buriladi. Chizmadagi hech narsa siljimaydi. |
| `UNDO` | `U` | Oxirgi buyruqni bekor qilish |
| `UNGROUP` |  | UNGROUP: guruhlarni ajratish. Guruh obyektlarini tanlang yoki Nom bering. Obyektlar chizmada qoladi. |
| `UNION` | `UNI` | Qattiq jismlarni bitta qilib birlashtirish (3D), yoki 2D mintaqalarni bitta mintaqaga (UNI) |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS yoki HIDEOBJECTS yashirgan har bir obyektni qayta koʻrsatish. |
| `UNITS` | `UN`, `DDUNITS` | Uzunliklar qanday koʻrsatilishi va kiritilishi: ondalik, fut va dyuym, kasrlar (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Maydonlarni qayta hisoblash va ular oʻzi qachon yangilanishini tanlash |
| `USDOUT` |  | 3D modelni USD sifatida eksport qilish (.usda matn, .usdc ikkilik yoki .usdz paket) |
| `VIEW` | `-VIEW`, `V` | Standart 3D koʻrinishlar, perspektiva yoki parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | 3D qattiq jismlarning tekis 2D koʻrinishini (old, yuqori, yon yoki izometrik, yashirin chiziqlar punktir) varaqda yoki modelda joylashtirish |
| `VIEWLABEL` | `VL` | Varaqdagi koʻrinish sarlavhasi; koʻrinish oynasining koʻrinish nomini koʻrsatadi va u bilan oʻzgaradi. |
| `VOICE` |  | Ovozli buyruqlarni yoqish yoki oʻchirish. Ular shu kompyuterda taniladi. |
| `VPCLIP` |  | Varaq koʻrinish oynasini yopiq obyekt yoki chizilgan koʻpburchakka kesish; Delete uni yana toʻgʻri toʻrtburchakka aylantiradi |
| `VPLAYER` |  | Qatlamlarni faqat ayrim koʻrinish oynalarida muzlatish yoki eritish (Freeze, Thaw, Reset) va yangi koʻrinish oynalari muzlatilgan holda boshlanadigan qatlamlarni tanlash (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Chizma maydonini oynalarga boʻlish, har birida oʻz koʻrinishi bilan (varaqda: koʻrinish oynasi, MVIEW kabi) |
| `VPVIEW` |  | Koʻrinish oynasi nimani koʻrsatishini belgilash: model ustida oyna tanlash |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D koʻrinishning vizual uslubi: soyalangan, qirralar, yashirin chiziq, karkas, X-ray |
| `WALL` | `WA` | Devorlarni polichiziq kabi 2D chizish. Ular tutashadi va eshik va derazalarni tutadi. |
| `WALLARC` | `WARC` | Devorlar yoyini chizish. Reja devorlari toʻgʻri boʻladi, shuning uchun yoy qisqa toʻgʻri devorlar (har biri 15 gradus) sifatida chiziladi va ular tutashadi. |
| `WALLDELSEG` |  | Ikki nuqta orasidagi devor boʻlagini oʻchirish. Qolgani bitta yoki ikkita devor boʻlib qoladi. |
| `WALLDIM` |  | Oʻlcham uchun yangi qiymat kiriting: uzoq uchidagi devor oʻzi bilan perpendikulyar siljiydi, birinchi uchidagi devor turadi, unga ulangan devorlar ergashadi. |
| `WALLDISJOIN` |  | Uchlardan biriga yaqin devorni tanlang: oʻsha uchda ulanish taqiqlanadi, uchi toʻgʻri chiziladi va hech narsa unga ergashmaydi. Yana tanlasangiz ulanishga ruxsat beriladi. |
| `WALLGRID` |  | Devorni setka chizigʻiga qulflash: uning boʻylab yoki bir uchi unda. GRIDMOVE bilan chiziqni siljiting va devor ergashadi. |
| `WALLHOLD` |  | Tekislash va qulflash: devor boshqa devorga nisbatan oʻz joyida turadi (uning chizigʻida yoki mavjud masofada). Biri siljisa, boshqasi ergashadi. |
| `WALLHOLDDIM` |  | Ikki parallel devor orasidagi masofani qulflash. Biri siljisa, boshqasi uni saqlash uchun ergashadi. |
| `WALLHOLDS` |  | Devorlardagi qulflarni roʻyxatlash. |
| `WALLJOINS` |  | Eski chizmaning har bir devoriga identifikator berish va ular orasidagi ulanishlarni saqlash. Bu sizning birinchi oʻzgarishingizda ham boʻladi. |
| `WALLJOINSTYLE` |  | Ikki devor uchma-uch tutashgan burchakni bosib, uning chizilishini oʻzgartirish: mitre, butt, square off. T qaysi devor oʻtishini almashtiradi. |
| `WALLOFFSET` | `WO` | Devorni oʻz-oʻziga perpendikulyar masofaga siljitish (unga ulangan devorlar ergashadi), yoki oʻsha masofada nusxa yaratish |
| `WALLPICK` |  | Chizmadagi chiziq yoki polichiziq boʻylab devorlar yaratish, agar Yes desangiz unga ulangan chiziqlar bilan. |
| `WALLPOLY` | `WP` | POLYGON kabi, 3 dan 64 gacha tomonli muntazam koʻpburchak atrofida devorlar chizish. |
| `WALLRECT` | `WR` | RECTANG kabi, ikki qarama-qarshi burchakdan toʻrtta ulangan devor chizish. |
| `WALLREJOIN` |  | Devorning ikki qismini yana bitta devorga aylantirish. Birinchisi chizmadagi oʻrnini saqlaydi. |
| `WALLROT` |  | Toʻrtta ulangan devorni istalgan burchakda burilgan toʻgʻri toʻrtburchak sifatida chizish: birinchi tomon, soʻng qancha tashqariga. |
| `WALLSPLIT` | `WS` | Devorni nuqtada yoki boshqa devor kesishgan joyda ikkiga boʻlish. Qismlar boʻshliq yoki erkin uchlar soʻramasangiz ulangan holda qoladi. Eshik va derazalar oʻz qismi bilan birga boradi. |
| `WALLSPLITGAP` |  | Devorni boʻshliq bilan boʻlish: boʻshliqni kiriting, devorni tanlang, soʻng nuqtani. Qismlar erkin uchlarni saqlaydi va qayta ulanishi mumkin. |
| `WALLSTRETCH` |  | Oyna bilan choʻzish: ichidagi devor uchlari harakatlanadi, butunlay ichidagi devorlar butunicha harakatlanadi va yon tomoniga uriladigan devorlar ular bilan birga suriladi. |
| `WALLTAN` |  | Devorni undan devor boʻylab chiqadigan yoy bilan davom ettirish (qisqa toʻgʻri devorlar sifatida chiziladi). |
| `WALLTRACE` |  | Bosgan nuqta atrofidagi chiziq va devorlarning eng kichik yopiq maydoni boʻylab devorlar yaratish. |
| `WALLUNHOLD` |  | Devordan qulflarni olib tashlash (va unga boshqa devorlarning qulflarini). |
| `WBLOCK` | `W`, `-WBLOCK` | Blok, bir nechta obyekt yoki butun chizmani yangi DWG yoki DXF fayliga yozish (W) |
| `WEDGE` | `WE` | Ponali jism: ikki burchak va balandlik; u birinchi burchakdan uzoqlashib qiyalanadi (3D) |
| `WHEREAMI` | `WHERE` | Kursor qayerdaligini aytish. |
| `WHOHAS` |  | Chizmani kim ochganini aytadi. CadCraft Studio har bir ochiq chizma yonida kichik qulf faylini saqlaydi (Plan.dwg.cclock: kim, qachondan, qaysi versiya) va yopilganda uni olib tashlaydi. Variantlar: Current (ochiq chizma), File (bittasini tanlash), FOlder (biror joyda ochiq boʻlgan papkadagi har bir chizma; shu papkada Studio qulf fayllarini saqlashiga ruxsat beradi), Path (bittasini yozish), Name (boshqalar koʻradigan nom). Besh daqiqa yangilanmagan qulf eskirgan deyiladi. Brauzerda mavjud emas. |
| `WINDOW` | `WN` | Devorga deraza qoʻyish. |
| `XATTACH` | `XA` | Boshqa DWG yoki DXF ni bu chizmaga bogʻlash, faqat oʻqish uchun koʻrsatiladi (XREF ularni roʻyxatlaydi va qayta yuklaydi) |
| `XCLIP` | `XC` | Blok havolalari va bogʻlangan chizmalarni toʻgʻri toʻrtburchak yoki koʻpburchakka kesish, yoki kesishni olib tashlash. |
| `XLINE` | `XL` | Qurilish chizigʻi, ikki tomonga cheksiz: ikki nuqta orqali, gorizontal, vertikal, burchak ostida, burchakni teng ikkiga boʻlib, yoki chiziqdan siljigan. |
| `XREF` | `XR`, `-XREF` | Bogʻlangan chizmalar (tashqi havolalar): roʻyxat, biriktirish, qayta yuklash, bogʻlash, ajratish |
| `ZOOM` | `Z` | Hudud, yoki oyna boʻyicha masshtab |
