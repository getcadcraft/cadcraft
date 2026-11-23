---
title: Buyruqlar xaritasi: nima yozish kerak
summary: CadCraft’dagi har bir buyruq va uning qisqa nomlari, A dan Z gacha, dasturning oʻzidan tuzilgan, hamda boshqa chizma dasturlaridagi farqli odatlar.
keywords: buyruqlar xaritasi, buyruqlar, taxalluslar, qisqa nomlar, qayerdan kelgan, buyruqlar roʻyxati, nima yozish, oʻchirish, kesish, ekvivalent, farqlar
from: 9426856f
---

CadCraft boshqa chizma dasturlaridan maʼlum buyruq nomlari va qisqa nomlarini qabul qiladi: chiziq uchun `L`, kesish uchun `TR`, oʻchirish uchun `E` ni yozing. Shuning uchun aksariyat buyruqlar uchun oʻrganish kerak boʻladigan jadval yoʻq: siz biladigan nom bu yerda ham ishlaydi. Quyidagi roʻyxat dasturning oʻzidan tuzilgan, CadCraft’dagi barcha buyruqlar. {{key:Enter}} oxirgi buyruqni takrorlaydi; buyruq satridagi `HELP` xuddi shu roʻyxatni chop etadi.

Bir xil boʻlmagan yoki hali qurilmagan buyruqlar:

- **Saqlash** brauzerda nusxani yuklab oladi ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio da esa fayl yoziladi. Qarang: [Boshqa chizma dasturlaridan kelganlar uchun](topic:coming-from).
- **PLOT** PDF yaratadi (shuningdek PNG va SVG), chop etish uslubi jadvali bilan; sahifa sozlamalari boshqaruvchisi yoʻq.
- **DIMSTYLE** va **PEDIT** qurilgan; **PEDIT** da tugun nuqtasini tahrirlash varianti yoʻq (buni tutqichlar bajaradi).
- **TABLE** qurilmagan; {{cmd:XREF}}, {{cmd:SPLINE}} va {{cmd:WBLOCK}} qurilgan.
- Dastur (AutoLISP `C:NAME`) buyruqlari {{cmd:APPLOAD}} bilan yuklangandan keyin paydo boʻladi; ular bu yerda sanab oʻtilmagan.

## Barcha buyruqlar (402)

| Buyruq | Qisqa nomlar | Nima qiladi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | 3D koʻrinishni chap tugma bilan aylantirish |
| `ACCESS` | `AX` | Koʻrmasdan chizishni yoqish yoki oʻchirish: natijalar ekran oʻquvchisi orqali aytiladi, chizmada klaviatura kursori, tutish ovozlari va ovozli buyruqlar |
| `ALIASEDIT` |  | Buyruq taxalluslarini bitta matnli faylda tahrirlash (tanish L, *LINE formati) |
| `ALIGN` | `AL` | Obyektlarni shunday siljitish va burish, manba nuqtalari maqsad nuqtalariga tushsin (bir, ikki yoki uch juft), xohlasangiz masshtabini ham oʻzgartirish |
| `ALIGNPANEL` | `ALP` | Tekislash va taqsimlash panelini ochish |
| `ALIGNTO` |  | Tanlangan obyektlarning chap, markaz, oʻng, yuqori, oʻrta yoki pastki qirralarini tanlovga, birinchi yoki oxirgi tanlangan obyektga yoki nuqtaga tekislash |
| `ANNOALLVISIBLE` | `ANNOALL` | Annotativ obyektlarni har qanday masshtabda koʻrsatish, yoki faqat koʻrinish oynasi (yoki chizma) masshtabi ularning roʻyxatida boʻlsa |
| `ANNOSCALE` | `CANNOSCALE` | Chizmaning annotatsiya masshtabini belgilash: annotativ matn va oʻlchamlar bir xil oʻlchamda chop etilishi uchun qayta oʻlchanadi |
| `APPLOAD` | `AP` | Ilovalarni yuklash: LISP dasturlari (.lsp) va ularning dialog fayllari (.dcl); Ishga tushirish toʻplami (AP) |
| `ARC` | `A` | Yoy: 3 nuqta boʻyicha, Boshlanish/Markaz/Oxir, Boshlanish/Markaz/Burchak, Boshlanish/Markaz/Uzunlik, Boshlanish/Oxir/Burchak, Boshlanish/Oxir/Yoʻnalish, Boshlanish/Oxir/Radius, Markaz/Boshlanish/Oxir, Markaz/Boshlanish/Burchak, Markaz/Boshlanish/Uzunlik, Davom ettirish |
| `AREA` | `AA` | Nuqtalar yoki obyekt boʻyicha maydon va perimetr; Qoʻshish va Ayirish yigʻindini saqlaydi (AA) |
| `ARRAY` | `AR` | Qator va ustunlar boʻyicha nusxalar yoki markaz atrofida aylana boʻyicha (AR) |
| `ARRAYASSOCIATIVITY` |  | ARRAY buyruqlari tahrirlanadigan massivlar (1) yoki oddiy nusxalar (0) yaratishini belgilaydi |
| `ARRAYCLOSE` |  | Massiv manba obyektlarini tahrirlashni tugatish |
| `ARRAYEDIT` |  | Bogʻlangan variant bilan yaratilgan massivni oʻzgartirish: soni, oraliq, manba obyektlari, bitta element |
| `ARRAYPATH` |  | Obyektlarning chiziq, yoy, polichiziq yoki boshqa egri chiziq boʻylab nusxalari |
| `ARRAYPOLAR` |  | Markaz nuqta atrofida nusxalar |
| `ARRAYRECT` |  | Qator va ustunlar boʻyicha nusxalar |
| `ASBUILT` | `ASB` | ASBUILT qurilish jamoasi oʻlchagan haqiqiy nuqtalarni oʻqiydi (CSV / TXT, EXPORTPOINTS yozgani kabi) va ularni chizmaning nuqtalari bilan solishtiradi: chegara ichida yoki tashqarida, oʻlchanmagan, ortiqcha. Ularni AS-BUILT qatlamida belgilaydi va CSV hisobotini yuklab oladi. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Blok ichiga qoʻyiladigan atributni (blok qiymat soraydigan belgi) aniqlash (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Blok havolasining atribut qiymatlarini buyruq satrida ketma-ket tahrirlash ({{key:Enter}} qiymatni saqlaydi) |
| `ATTSYNC` |  | Blok havolalarini atribut taʼriflariga moslashtirish: yangilari standart qiymatlari bilan qoʻshiladi, olib tashlanganlari chiqariladi, joylashuvi va matni tiklanadi; qiymatlar saqlanadi |
| `AUDIT` |  | Ochiq chizmani buzilishlar uchun tekshirish: cheksiz sonlar, oʻlchamsiz obyektlar, yoʻq qatlamlar, bloklar, uslublar va chiziq turlari, oʻzini oʻzi ichiga oladigan bloklar, umumiy identifikatorlar, buzilgan oʻlchamlar va shtrixlar. Topilganlarni turi boʻyicha koʻrsatadi va tuzatishdan oldin soraydi; tuzatish bitta ortga qaytarish qadami. |
| `AUNITS` | `ANGUNITS` | Burchaklar qanday koʻrsatilishi va yozilishi: oʻnlik gradus, gradus-daqiqa-soniya yoki N45°23'30"E kabi geodezik yoʻnalishlar (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Chizmani avtotoʻldirishni yoqish yoki oʻchirish, yoki chizma naqshlari hozir nimani taklif qilishini koʻrsatish. |
| `AUTOCONSTRAIN` |  | Geometriya allaqachon yaqin boʻlgan joylarda ustma-ust tushish, gorizontal va vertikal cheklovlarni qoʻshish |
| `AUTODIM` | `ADIM` | Qoidalar boʻyicha oʻlchash: umumiy oʻlcham, tomonlar boʻylab zanjirlar, teshiklar, teshik diametrlari va setka oraligʻi, allaqachon oʻlchangan narsalarni takrorlamasdan. |
| `AUTOSHEET` | `ASH` | Varaqlarni oʻzi joylashtiradi: qogʻoz va standart masshtablarni tanlaydi va har bir koʻrinishni sarlavha va shtamp bilan joylashtiradi. |
| `BATTMAN` |  | Blok atributlari boshqaruvchisi: blokning atributlari tartibi, teglari, soʻrovlari, standart qiymatlari va rejimlari, soʻng uning havolalari yangilanadi |
| `BCLOSE` |  | Blok muharririni yopish: blokni saqlash yoki oʻzgarishlarni tashlab yuborish |
| `BCONVERT` |  | BCONVERT takrorlanadigan geometriyani topib, uni blok havolalariga aylantiradi. Takrorlanadigan obyektlarni tanlang: ochiq fazodagi bir xil geometriyaga ega, koʻchirilgan va istalgan burchakka burilgan boshqa barcha obyektlar topiladi; Aks ettirilgan yoki Masshtablangan yoqilsa, aks nusxalar va boshqa oʻlchamdagi nusxalar ham topiladi. Yangi blokka nom va asosiy nuqta bering; tanlov va har bir nusxa unga havola boʻladi, har biri oʻz aylanishi va masshtabiga ega. Yoki Blok ni tanlab, mavjud blok nomini bering va uning obyektlarining tarqoq nusxalarini toping. Nusxa bir xil qatlam, rang, chiziq turi va chiziq qalinligiga ega boʻlishi kerak, agar Xossalar eʼtiborsiz qoldirish ga oʻrnatilmagan boʻlsa. Qulflangan qatlamlardagi obyektlarga tegilmaydi. Bitta ortga qaytarish qadami. |
| `BEDIT` | `BE` | Blok muharriri: blokning obyektlari va atributlarini tahrirlash; BCLOSE saqlaydi (BE) |
| `BLEND` |  | BLEND: ikki ochiq egri chiziq uchlari orasidagi splayn, birlashtirish uchun uchlariga yaqin tanlanadi. CONtinuity: Tangens ikkala yoʻnalishga ergashadi, Silliq esa ularning egilishiga ham ergashadi. |
| `BLOCK` | `B`, `BMAKE` | Obyektlardan blok yaratish (ular bitta havolaga aylanadi) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: bitta blokka boʻlgan barcha havolalar boshqa blokka havola boʻladi, xuddi oʻsha joyda, bir xil masshtab va aylanish bilan. Ikkala blokda ham boʻlgan atributlarning qiymatlari saqlanadi. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE Bloklar panelini kursor filtrda turgan holda koʻrsatadi. Panel har bir blokning rasmini koʻrsatadi (eng oxirgi joylashtirilganlari birinchi), roʻyxat yoki setka koʻrinishida; rasmni bosing yoki chizmaga sudrang, blok INSERT bilan joylashtiriladi. Kutubxonalar ostida oʻzingizning DWG yoki DXF faylingizni qoʻshing: uning bloklari rasmlari bilan roʻyxatga olinadi va biror blokni joylashtirganingizda shu chizmaga nusxalanadi. CadCraft Studio da jild ham qoʻshish mumkin; fayllar va jildlar eslab qolinadi. |
| `BOMEDIT` | `BOMCOLUMNS` | Materiallar roʻyxati jadvalining ustunlari, guruhlash, saralash, sarlavha, jamlanmalar va izohlari |
| `BOMEXPORT` |  | Materiallar roʻyxati jadvalini .csv fayl sifatida saqlash |
| `BOMTABLE` | `BOM` | Bitta zona yoki butun chizmaning jonli materiallar roʻyxati jadvali |
| `BOMUPDATE` |  | Barcha materiallar roʻyxati jadvallarini hozir yangilash, muzlatilganlari ham |
| `BOMZONE` | `BZONE` | Materiallar roʻyxati uchun chizmaning nomlangan sohasi: ikki burchak, koʻpburchak yoki yopiq obyekt konturi |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): yopiq soha ichidagi nuqtani tanlang va uning atrofida yopiq polichiziq oling. Yoylar yoy boʻlib qoladi. Orollar ichidagi sohalarning konturlarini ham ajratadi. |
| `BOX` |  | Quti: ikki burchak va balandlik (3D) |
| `BPARAMETER` | `BPARAM` | Hali qurilmagan: blokka parametr (masalan Koʻrinish) qoʻshish. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blok parametrlari: formulali nomlangan parametrlar va bitta blokdagi bir nechta koʻrinish parametrlari. Blok muharririda ishlaydi (tanlangan obyektlarni holatga biriktirish) va tanlangan havolada ishlaydi (oʻz qiymatlari va holatlari). |
| `BREAK` | `BR` | Chiziq, yoy, aylana yoki polichiziqni ikki nuqta orasida uzish (BR) |
| `BREAKATPOINT` |  | Chiziq, yoy yoki polichiziqni bir nuqtada ikkiga boʻlish |
| `BREAKLINE` |  | Uzilish belgisi bilan chiziq chizish; uning oʻlchami va uchlaridan tashqariga chiqish masofasi eslab qolinadi. |
| `BREPLACE` |  | BREPLACE bir blokni boshqasiga almashtiradi. Tanlangan: blok havolalarini tanlang va oʻrniga ishlatiladigan blok nomini bering. Hammasi: blok va uning almashtirgichini nomlang; boʻshliqlar va boshqa bloklar ichidagi har bir havola oʻzgaradi. Havola oʻz joyi, masshtabi, aylanishi va qatlamini, shuningdek ikkala blokda ham boʻlgan atributlar qiymatlarini saqlaydi; yangi blokda joyi boʻlmagan qiymatlar tashlanadi va nomlanadi. |
| `BSEARCH` |  | BSEARCH bloklarni topadi. Nom: blok nomining bir qismi yoki * va ? bilan naqsh. Atribut: havola atributlarida boʻlgan qiymat (yoki TEG=qiymat). Geometriya: obyektlar yoki bitta blok havolasini tanlang; shakli kamida 85% oʻxshash bloklar eng yaxshisidan boshlab roʻyxatga olinadi; oʻlcham, aylanish va aks ettirish hisobga olinmaydi. Ochiq fazodagi topilgan havolalar keyingi buyruq uchun tanlanadi. |
| `BURST` |  | Blok havolalarini portlatish va ularning atributlari aytganini saqlash: har bir qiymat atributning qatlamidagi matnga aylanadi. |
| `BVHIDE` | `BVH` | Blok muharririda: joriy koʻrinish holatidagi obyektlarni yashirish. |
| `BVSHOW` | `BVSH` | Blok muharririda: joriy koʻrinish holati yashirgan obyektlarni koʻrsatish (tanlash uchun xira koʻrinadi). |
| `BVSTATE` | `BVS` | Blok muharririda, koʻrinish holatlari bor blokda: holatga oʻtish, yoki holat qoʻshish, nomini oʻzgartirish yoki oʻchirish. |
| `CAL` |  | Uzunlik yoki sonni hisoblash: + − * / va qavslar, xohlagan joyda yozilgandek |
| `CENTERLINE` | `CL` | Ikki chiziq orasidagi markaziy chiziq: ular orasida oʻrtada, yoki kesishganda bissektrisa boʻylab (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Markaz belgisi: aylana yoki yoyning markazidagi xoch, markaz chiziqlari esa undan biroz tashqariga chiqadi (CM) |
| `CHAMFER` | `CHA` | Ikki chiziq orasidagi burchakni fasqalash (D ikki masofa, A uzunlik va burchak, P polichiziqning har bir burchagi) |
| `CHSPACE` |  | CHSPACE: obyektlarni varaq va model orasida koʻrinish oynasi orqali koʻchirish. Ular boshqa tomondan qaraganda bir xil koʻrinishi uchun masshtablanadi va buriladi. Varaqda ular modelga boradi; koʻrinish oynasi orqali (MSPACE) ishlayotganda ular varaqqa keladi. |
| `CIRCLE` | `C` | Markaz va radius, diametr, 2 yoki 3 nuqta |
| `CLASS` |  | Tanlangan obyektlarni sinfga joylashtirish, yoki hech narsa tanlanmagan boʻlsa, faol sinfni belgilash (? ularni roʻyxatlaydi) |
| `CLASSES` | `CLS` | Sinflar paneli: sinflar obyektlarni qatlamlar boʻylab saralaydi; ularni koʻrsatish, yashirish va uslublash, hamda har bir koʻrinish oynasida qayta belgilash (CLS) |
| `COMMANDLINE` | `CMDLINE` | Buyruq satrini biriktirish yoki suzdirish, bir qatorga aylantirish, tarix satrlari sonini belgilash yoki tarixni ochish (F2) |
| `COMPARESETTINGS` | `CMPSET` | Oʻlcham uslublari, matn uslublari, qatlamlar, varaqlar yoki birliklarni solishtirish: bu chizmada ikkita yoki bu chizma bilan boshqa ochiq chizma, qiymatni nusxalash. |
| `CONSTRAINTBAR` | `CBAR` | Cheklov panellarini koʻrsatish yoki yashirish (Hammasini koʻrsatish/Hammasini yashirish yoki obyektlar boʻyicha) |
| `COPY` | `CO`, `CP` | Obyektlarni nusxalash, bosgan sari |
| `COPYBASE` |  | Obyektlarni tanlangan asosiy nuqta bilan buferga nusxalash |
| `COPYCLIP` |  | Obyektlarni buferga nusxalash (Ctrl+C); PASTECLIP ularni joylashtiradi |
| `COUNT` | `BCOUNT` | Blok havolalarini sanash: bittasini tanlang, va uning blokining barcha havolalari tanlanib sanaladi |
| `COUNTTABLE` |  | Blok sanoqlari jadvalini joylashtirish |
| `CREDITS` |  | Kutubxona mualliflarini chizmaga jadval sifatida joylashtiradi. Jadvalni chizmadagi obyektlardan yangilash uchun uni qayta ishga tushiring. |
| `CURSORSIZE` |  | Kursor oʻlchami: 100 uni chizma boʻylab chetdan chetgacha qiladi (Sozlamalar › Kursor › Toʻliq ekran) |
| `CUTCLIP` |  | Obyektlarni buferga kesish (Ctrl+X): nusxalash, soʻng oʻchirish |
| `CYLINDER` | `CYL` | Silindr: markaz, radius va balandlik (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Bloklar, ularning atributlari va obyekt xossalarini chizmada jadval yoki CSV fayl sifatida roʻyxatlash |
| `DATALINK` | `DL` | CSV fayldan jadval; fayl eslab qolinadi, shuning uchun uni qayta oʻqish mumkin |
| `DATALINKUPDATE` | `DLU` | Maʼlumot bogʻlanishining faylini qayta oʻqish va uning jadvallarini qayta toʻldirish |
| `DCALIGNED` | `DCALI` | Oʻlchamli cheklov: nuqtalar, nuqta va chiziq yoki ikki chiziq orasidagi haqiqiy masofa |
| `DCANGULAR` | `DCANG` | Oʻlchamli cheklov: ikki chiziq yoki yoy burchagi |
| `DCCONVERT` |  | Cheklanadigan geometriyada chizilgan oʻlchamlarni oʻlchamli cheklovlarga aylantirish |
| `DCDIAMETER` | `DCDIA` | Oʻlchamli cheklov: aylana yoki yoy diametri |
| `DCDISPLAY` |  | Chizmadagi oʻlchamli cheklovlarni koʻrsatish yoki yashirish |
| `DCHORIZONTAL` | `DCHOR` | Oʻlchamli cheklov: gorizontal masofa |
| `DCLINEAR` | `DCLIN` | Oʻlchamli cheklov: gorizontal yoki vertikal masofa, uni joylashtirgan joydan |
| `DCRADIUS` | `DCRAD` | Oʻlchamli cheklov: aylana yoki yoy radiusi |
| `DCVERTICAL` | `DCVER` | Oʻlchamli cheklov: vertikal masofa |
| `DELBLOCKS` |  | Bloklarni oʻchirish: har bir havola (ichki havolalar ham, har bir varaqda) va taʼriflar |
| `DELCONSTRAINT` | `DELCON` | Tanlangan obyektlardan barcha cheklovlarni (geometrik va oʻlchamli) olib tashlash |
| `DELOPENING` |  | Devordan eshik yoki derazani olib tashlash. |
| `DESCRIBE` | `DESC` | Chizmada nima borligini aytish: nechta obyekt, qanday tur, qanchalik katta, nima tanlangan. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Tanlovni bekor qilish (Esc) |
| `DETAILS` | `DET` | Firmangizning oʻz detallari, chizayotgan narsangiz uchun topiladi: qidirish, blok qoʻshish, roʻyxat, olib tashlash, takliflarni yoqish yoki oʻchirish. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Matndan diagramma chizish: Mermaid oqim sxemasi, PlantUML komponent diagrammasi, D2, dan-gacha roʻyxati yoki draw.io XML, tahrirlanadigan blok va bogʻlovchilar sifatida |
| `DIMALIGNED` | `DAL`, `DIMALI` | Ikki nuqta orasidagi haqiqiy masofa |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ikki chiziq, yoy yoki uch nuqta boʻyicha burchak |
| `DIMARC` | `DAR` | Yoy uzunligi oʻlchami: yoy boʻylab masofa, yoy belgisi bilan (DAR) |
| `DIMASZ` |  | Oʻlcham sozlamasi: Strelka oʻlchami |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Bitta asosiy chiziqdan joylashgan oʻlchamlar |
| `DIMBREAK` | `DBREAK` | Oʻlcham va choʻzilma chiziqlarini boshqa obyektlar kesib oʻtgan joyda uzish (Avtomatik), ikki nuqta orasida (Qoʻlda), yoki uzilishlarni olib tashlash |
| `DIMCONSTRAINT` | `DCON` | Oʻlchamli cheklovlar: chiziqli, tekislangan, burchakli, radius, diametr, aylantirish |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Oʻlchamlar zanjiri, har biri oxirgisining uchidan |
| `DIMDEC` |  | Oʻlcham sozlamasi: Oʻnlik kasr xonalari |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Yoy yoki aylananing diametri |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Oʻlchamlarni bogʻlangan obyektlardan ajratish (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Oʻlcham matnini oʻzgartirish (Bosh, Yangi matn, Burish) yoki choʻzilma chiziqlarni ogʻdirish (Ogʻma) (DED) |
| `DIMEXE` |  | Oʻlcham sozlamasi: oʻlcham chizigʻidan tashqariga choʻzilma |
| `DIMEXO` |  | Oʻlcham sozlamasi: boshlangʻich nuqtadan siljish |
| `DIMGAP` |  | Oʻlcham sozlamasi: matn atrofidagi boʻshliq |
| `DIMINSPECT` |  | Tekshiruv oʻlchami: qiymat atrofidagi ramka, belgi va detal qanchalik tez tekshirilishi |
| `DIMJOGGED` | `DJO`, `JOG` | Sindirilgan radius oʻlchami: markaz uzoqda boʻlganda yaqinroq nuqtadan chizilgan radius (DJO) |
| `DIMJOGLINE` | `DJL` | Chiziqli yoki tekislangan oʻlcham chizigʻiga sindirish belgisi qoʻshish, masofa masshtabda chizilmaganini koʻrsatish uchun (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Gorizontal yoki vertikal masofa (istalgan burchak uchun R) |
| `DIMLUNIT` |  | Oʻlcham sozlamasi: uzunlik formati (1 ilmiy, 2 onlik, 3 muhandislik, 4 arxitektura, 5 kasr) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinata oʻlchami: nuqtaning UCS boshidan X yoki Y boʻyicha masofasi, yetakchi boʻyicha (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Tanlangan oʻlchamlarda oʻlcham oʻzgaruvchilarini uslubini oʻzgartirmasdan qayta belgilash; Tozalash uslubni tiklaydi (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Yoy yoki aylananing radiusi |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Oʻlcham nuqtalarini obyektlarga bogʻlash, shunda obyektlar harakatlanganda oʻlcham qayta hisoblanadi (DRE) |
| `DIMSCALE` |  | Oʻlcham sozlamasi: umumiy masshtab (oʻlchamlar × bu) |
| `DIMSPACE` |  | Parallel oʻlchamlar orasida teng masofa, asosiy oʻlchamdan hisoblangan (0 ularni bir chiziqqa tekislaydi, Avtomatik matn balandligining ikki barobari) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Nomlangan oʻlcham uslublarini yaratish, oʻzgartirish, joriyini belgilash, oʻchirish, qoʻllash va solishtirish (dialog; buyruq satrida -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Oʻlcham matnini oʻlcham chizigʻining chap, oʻng yoki markaziga surish yoki uni burish |
| `DIMTEXTUNIT` | `DTU` | Oʻlcham matnini mm, cm, m yoki km da yoki chizmaning oʻz birliklarida: tanlangan oʻlchamlar, aks holda yangilari (DTU) |
| `DIMTXT` |  | Oʻlcham sozlamasi: Matn balandligi |
| `DIST` | `DI` | Ikki nuqta orasidagi masofa va burchak |
| `DISTRIBUTE` |  | Tanlangan obyektlarni teng ravishda yon-yonga yoki tepa-pastga joylashtirish: markazlar orasida teng qadam yoki teng boʻshliqlar; tashqi ikkitasi joyida qoladi |
| `DIVIDE` | `DIV` | DIVIDE (DIV): chiziq, yoy, aylana, polichiziq, splayn yoki ellipsni teng boʻlaklarga boʻluvchi belgilar. Nuqtalar, yoki Blok bilan har bir belgida blok. |
| `DOCUMENTS` | `DOCS` | Hujjatlar panelini ochish: loyiha jildi uchun chizmalarni olish va qaytarish, revizya, holatlar va tasdiqlash |
| `DOOR` | `DR` | Devorga eshik qoʻyish. Bosgan tomoningiz — eshik ochiladigan tomon. |
| `DRAWORDER` |  | Chizish tartibini oʻzgartirish: obyektlarni oldinga olib chiqish, orqaga surish, yoki boshqa obyektlardan yuqoriga yoki pastga qoʻyish. |
| `DUPLICATE` | `DUP` | Kursor bilan birga harakatlanadigan nusxa: qoʻyish uchun bosing (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Chizma xossalari: sarlavha, muallif va boshqalar, hamda oʻzingizning nom va qiymat juftliklaringiz |
| `DXFOUT` |  | Chizmani DXF R12 sifatida yuklab olish (Saqlash oʻz formatini saqlaydi) |
| `EATTEDIT` | `DDATTE` | Blok havolasi atributlarini tahrirlash: qiymatlar, matn va xossalar, bir vaqtda bitta atribut |
| `ELLIPSE` | `EL` | Oʻq uchlari va ikkinchi yarim oʻq |
| `ERASE` | `E`, `DELETE` | Obyektlarni olib tashlash |
| `EXPLODE` | `X` | Polichiziq, blok va oʻlchamlarni qismlariga ajratish |
| `EXPORT` | `EXP` | Chizmaning nusxasini qoʻshimcha yozadigan fayl turida saqlash |
| `EXPORT3D` | `3DEXPORT` | 3D modelni eksport qilish: GLB, OBJ yoki STL |
| `EXPORTPOINTS` | `EXPPTS` | Nuqtalarni, va bitta atribut tavsifi bilan bloklarning joylashuv nuqtalarini CSV yoki TXT faylga yozish (PNEZD, PENZD yoki XYZ) BIM va geodezik dasturlar uchun |
| `EXTEND` | `EX` | Obyektlarni boshqalarga yetguncha choʻzish: uchiga yaqin bosing, bir nechtasi orqali sudrang yoki kesish uchun Shift+bosish |
| `EXTRIM` |  | EXTRIM: bitta kesuvchi chetni, soʻng tomonini tanlang. Chetni kesib oʻtgan hamma narsa oʻsha tomonda kesiladi. Ketadigan boʻlaklar kursor harakatlanganda koʻrinadi. |
| `EXTRUDE` | `EXT` | Yopiq 2D obyektlarni jismlarga (3D) choʻzish |
| `FIELD` |  | Matnga, jadval katagiga yoki atributga maydon qoʻyish: sana, fayl nomi, varaq raqami, chizma xossasi, obyektning maydoni yoki uzunligi, yoki formula |
| `FILLET` | `F` | Ikki obyekt orasidagi burchakni yumaloqlash yoki kvadratlash (R radius, P polichiziqning har bir burchagi, M bir nechta) |
| `FIND` |  | Matn, atribut qiymatlari va oʻlcham matnidagi soʻzlarni topish va almashtirish |
| `FLATTEN` |  | Tanlangan obyektlarning balandligi (Z) va qalinligini 0 ga oʻrnatish, ular ishlatadigan bloklarda ham. |
| `FLOOR` |  | Chizish uchun qavatni tanlash, yangisini qoʻshish, yoki tanlovni bittasiga koʻchirish yoki nusxalash. |
| `FLOORLAYERS` |  | Qavatlarni Qavat-Qatlam nomli qatlamlarga aylantirish, qavatsiz faylni boshqaga yuborish uchun. |
| `FLOORS` | `FLR` | Qavatlar panelini ochish: bitta model fazosida qavatlarni joylashtirish. |
| `GCCOINCIDENT` |  | Cheklov: ikki nuqta ustma-ust tushadi, yoki nuqta obyekt ustida qoladi |
| `GCCOLLINEAR` |  | Cheklov: ikki chiziq bitta chiziqda qoladi |
| `GCCONCENTRIC` |  | Cheklov: ikki aylana yoki yoy bir markazga ega |
| `GCEQUAL` |  | Cheklov: ikki chiziq bir xil uzunlikda, yoki ikki aylana/yoy bir xil radiusda qoladi |
| `GCFIX` |  | Cheklov: nuqta yoki butun obyekt oʻz joyida qoladi |
| `GCHORIZONTAL` |  | Cheklov: chiziq (yoki ikki nuqta) gorizontal qoladi |
| `GCPARALLEL` |  | Cheklov: ikki chiziq parallel qoladi |
| `GCPERPENDICULAR` |  | Cheklov: ikki chiziq toʻgʻri burchak ostida qoladi |
| `GCSYMMETRIC` |  | Cheklov: ikki nuqta, chiziq yoki aylana chiziq boʻylab bir-birining aksi |
| `GCTANGENT` |  | Cheklov: chiziq va aylana yoki yoy (yoki ikkitasi) tangens boʻlib qoladi |
| `GCVERTICAL` |  | Cheklov: chiziq (yoki ikki nuqta) vertikal qoladi |
| `GDSIN` | `GDS` | IC tartibini koʻrish (GDSII oqim fayli): har bir qatlam va maʼlumot turi chizma qatlami sifatida, tekis, foydalanuvchi birliklarida; faqat koʻrish va oʻlchash uchun (laboratoriya sinovi) |
| `GEOMCONSTRAINT` | `GCON` | Geometrik cheklovlar: gorizontal, vertikal, parallel, tangens, ustma-ust… |
| `GLBOUT` |  | 3D modelni GLB (glTF) sifatida eksport qilish |
| `GRADIENT` | `GD` | Sohani bir yoki ikki rangli gradient bilan toʻldirish |
| `GRID` |  | Setkani sozlash: chiziqlar orasidagi masofa, har Nchi chiziq asosiy chiziq sifatida, YOQIQ yoki O‘CHIQ, yoki Avtomatik — zoomga qayta ergashish |
| `GRIDMOVE` | `GM` | Setka chizigʻini koʻchirish va unga osilgan narsalarni olib yurish: devorlar choʻziladi, ustunlar, pufakchalar va teglar koʻchadi, oʻlchamlar ergashadi. |
| `GROUP` | `G` | GROUP (G): tanlangan obyektlarga umumiy nom berish. Ulardan biriga bosish hammasini tanlaydi. Nomda Enter nomsiz guruh yaratadi. |
| `GROUPEDIT` |  | GROUPEDIT: guruhni oʻzgartirish. Obyektlaridan birini tanlang yoki Nomini bering, soʻng Qoʻshish yoki Olib tashlash, NOMINI oʻzgartirish, Tavsifini oʻzgartirish yoki bosish butun guruhni tanlashini belgilash. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Sohani yaxlit toʻldirish yoki naqsh bilan toʻldirish: ichiga bosing yoki yopiq obyektlarni tanlang (H) |
| `HATCHEDIT` | `HE` | Shtrixlashni oʻzgartirish: naqsh, masshtab, burchak, koordinata boshi va uning chegara bilan bogʻlanishi. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Shtrixlashdan chegara polichiziqlarini qayta yaratish, unga bogʻlangan yoki bogʻlanmagan holda |
| `HATCHTOBACK` |  | Har bir shtrixlashni hamma narsa ortiga yuborish. |
| `HELP` | `?` | Bu roʻyxat |
| `HIDEOBJECTS` |  | Tanlangan obyektlarni UNISOLATEOBJECTS gacha yashirish. Chizma bilan saqlanmaydi. |
| `HISTORY` | `HIST` | HISTORY (HIST): bu chizmaning versiyalari — Studio saqlaganda shu kompyuterda saqlangan nusxalar va bulutdagi versiyalar — ochish, tiklash va oʻzgarganlarni rang bilan koʻrsatib solishtirish. |
| `ID` |  | Nuqtaning koordinatalari |
| `IMAGE` | `IM` | CadCraft ga chizma ishlatadigan rasm fayllarini koʻrsatish (DWG faqat ular qayerda boʻlganini saqlaydi). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Fayldan rasm (PNG yoki JPEG) joylashtirish. |
| `IMAGECLIP` | `ICL` | Rasmni toʻrtburchak yoki koʻpburchakka kesish, yoki kesishni olib tashlash. |
| `IMPORT` | `IMP` | Qoʻshimcha oʻqiydigan tur faylini bu chizmaga import qilish |
| `INSERT` | `I`, `DDINSERT` | Blokni joylashtirish (S masshtab, R burish); F DWG/DXF fayldan, L kutubxonadan |
| `INTERSECT` | `IN` | Jismlarda umumiy boʻlganini saqlash (3D), yoki 2D mintaqalar umumiy maydonini (3D) |
| `ISODRAFT` |  | ISODRAFT: izometrik chizishni yoqish yoki oʻchirish, yoki toʻgʻridan-toʻgʻri Chap, Yuqori yoki Oʻng tekislikka oʻtish. Yoqilgan boʻlsa, Ortho va qutb kuzatuvi tekislikning ikki oʻqiga ergashadi, setka izometrik chiziladi va ELLIPSE da Izoaylana boʻladi. |
| `ISOLATEOBJECTS` | `ISOLATE` | Faqat tanlangan obyektlarni koʻrsatish; bu fazodagi boshqa hamma narsa UNISOLATEOBJECTS gacha yashirinadi. Chizma bilan saqlanmaydi. |
| `ISOPLANE` |  | ISOPLANE: chizish uchun izometrik tekislikni tanlash: Chap, Yuqori yoki Oʻng. Enter keyingisiga oʻtadi, izometrik chizish yoqilganda F5 bajargani kabi. |
| `JOIN` | `J` | Uchma-uch tutashgan chiziq, yoy va polichiziqlarni bitta polichiziqqa; bitta chiziqda yotganlarni bitta chiziqqa birlashtirish (J) |
| `LASER` | `LASERCUT` | Lazer panelini ochish: qatlamlarni lazer kesgich yoki gravirovkaga yuborish (GRBL G-kodi) |
| `LASSOMODE` |  | Bosib sudrash arqon (1) yoki toʻrtburchak (0) chizadi |
| `LAYDEL` |  | Qatlamni va unda turgan hamma obyektlarni oʻchirish (modelda, varaqlarda va bloklarda) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Qatlam boshqaruvchisini ochish: barcha qatlamlar bitta jadvalda |
| `LAYERPANEL` |  | Qatlamlar panelini koʻrsatish |
| `LAYFRZ` |  | Tanlagan har bir obyektning qatlamini muzlatish |
| `LAYGROUP` | `LG` | Qatlamlarni Qatlamlar panelidagi jildlarga guruhlash. |
| `LAYISO` |  | Tanlangan obyektlar qatlamlarini ajratish (boshqa barcha qatlamlar oʻchiriladi) |
| `LAYLOCKFADE` |  | Qulflangan qatlamlardagi obyektlarning xiralashish darajasi va bosish ularni tanlay olishi mumkinligini belgilash. |
| `LAYMCUR` |  | Tanlagan obyektning qatlamini joriy qilish |
| `LAYMRG` |  | Qatlamlarni birlashtirish: ularning obyektlari maqsadli qatlamga koʻchadi va birlashtirilgan qatlamlar oʻchadi |
| `LAYOFF` |  | Tanlagan har bir obyektning qatlamini oʻchirish |
| `LAYON` |  | Barcha qatlamlarni yoqish |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Sarlavha shtampi va koʻrinish oynasi bilan yangi varaq |
| `LAYTHW` |  | Barcha qatlamlarni muzsizlantirish |
| `LAYUNISO` |  | LAYISO oʻchirgan qatlamlarni qayta yoqish |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Eski vyetnam shriftlari bilan yozilgan matnni Unicode ga oʻtkazish (TCVN3 / ABC shriftlari, masalan .VnTime, va VNI shriftlari, masalan VNI-Times). Bunday matn allaqachon oʻqilgandek koʻrinadi; bu uni butunlay qayta yozadi, soni va bitta ortga qaytarish qadami bilan. |
| `LENGTHEN` | `LEN` | Chiziq, yoy va polichiziqlarni uzaytirish yoki qisqartirish: miqdor, foiz, jami yoki sudrash boʻyicha (LEN) |
| `LIBRARY` | `LIB` | Kutubxona paneli: elementlarni joylashtirish, yangilanishlarni tekshirish, mualliflar |
| `LIMITS` |  | Chizma chegaralarini belgilash: ON, OFF yoki pastki-chap va yuqori-oʻng burchaklar. Chegaralar ON boʻlsa, ulardan tashqaridagi nuqtalar rad etiladi |
| `LINE` | `L` | Toʻgʻri kesmalar, har biri alohida obyekt |
| `LINETYPE` | `LT`, `CELTYPE` | Yangi obyektlar oladigan chiziq turi (qatlam boʻyicha, blok boʻyicha yoki nomlangan) |
| `LINKVIEWS` | `SYNCVIEWS` | Barcha oynalarni birga surish va masshtablash (boʻlingan ekran), ikki chizma yoki revizyani solishtirish uchun |
| `LISPEDIT` | `VLIDE` | LISPEDIT (yoki VLIDE) LISP muharririni ochadi: dasturni yozish, yuklash va sinash uchun oyna. Chizmaga yuklash har bir shaklni oʻqiydi, APPLOAD faylni yuklagandek, va uning buyruqlarini yaratadi. Tanlovni ishga tushirish tanlangan shakllarni yoki kursor turgan shaklni hisoblaydi. Konsol dastur chop etgan narsani va har bir xatoni qator bilan koʻrsatadi. Mos qavs yozish vaqtida belgilanadi va Enter yangi qatorni surib oʻtadi. Yangi, Ochish va Saqlash .lsp faylda ishlaydi. Matn yonidagi roʻyxatlar dastur aniqlagan, u chaqirgan lekin bu LISP hali yoʻq va barcha mavjud funksiyalarni koʻrsatadi. Oyna chizmani bloklamaydi, shuning uchun dastur nuqta soʻrashi mumkin; Toʻxtatish yoki Esc ishlayotgan dasturni tugatadi. |
| `LIST` | `LI`, `LS` | Tarixda obyektlarni tavsiflash |
| `LTSCALE` | `LTS` | Chizmaning chiziq turi masshtabi (har bir chiziq va boʻshliq unga koʻpaytiriladi) |
| `LWDISPLAY` | `LWT` | Ekranda chiziq qalinliklarini koʻrsatish yoki yashirish (holat satridagi LWT tugmasi) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Yangi obyektlar oladigan chiziq qalinligi (qatlam boʻyicha, blok boʻyicha, standart yoki mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Model fazosi ostidagi xarita qatlamlari: chizmaning koordinata tizimi, plitkalar, WMS, WMTS, ArcGIS, rasmlar |
| `MASSPROP` |  | MASSPROP: mintaqalar va yopiq obyektlarning kesim xossalari: maydon, perimetr, sentroid, momentlar va inersiya koʻpaytmasi, inersiya radiuslari va asosiy oʻqlar. Chiziq va yoylar uchun aniq. Hisobotni matn fayliga yozishi mumkin. |
| `MATCHPROP` | `MA`, `PAINTER` | Xossalarni moslashtirish: bir obyektning qatlami, rangi va boshqa xususiyatlarini boshqalarga nusxalash (MA) |
| `MEASURE` | `ME` | MEASURE (ME): chiziq, yoy, aylana, polichiziq, splayn yoki ellips boʻylab berilgan uzunlikda belgi, tanlagan nuqtangizga eng yaqin uchidan. Nuqtalar, yoki Blok bilan har bir belgida blok. |
| `MEASUREGEOM` | `MEA` | Masofa, radius, burchak yoki maydonni oʻlchash (MEA) |
| `MINSERT` |  | MINSERT: blokni bir vaqtda qator va ustunlarda joylashtirish. Har biri oʻz havolasi, shuning uchun ularning istalgan birini koʻchirish yoki oʻchirish mumkin. |
| `MIRROR` | `MI` | Obyektlarni chiziq boʻylab aks ettirish |
| `MLEADER` | `MLD`, `MLEAD` | Koʻp yetakchi: strelka, yetakchi va izoh bitta obyekt sifatida (MLD) |
| `MLEADERALIGN` | `MLA` | Koʻp yetakchilarni ulardan biri bilan bir yoʻnalishda, teng oraliq bilan yoki ikki nuqta orasida taqsimlab tekislash (MLA) |
| `MLEADERCOLLECT` | `MLC` | Bir nechta koʻp yetakchini bittaga yigʻish: ularning bloklari qator yoki ustunda, yoki izohlari bir-birining ostida (MLC) |
| `MLEADEREDIT` | `MLE` | Koʻp yetakchiga yetakchi chiziqlar qoʻshish yoki olib tashlash; uning mazmunini matn va blok oʻrtasida almashtirish (MLE) |
| `MLINE` |  | Parallel chiziqlarni birga chizish, burchaklarda bogʻlangan holda. |
| `MOVE` | `M` | Obyektlarni asosiy nuqta va ikkinchi nuqta boʻyicha koʻchirish |
| `MSPACE` | `MS` | Ochiq varaqning koʻrinish oynasi orqali modelda ishlash (yoki koʻrinish ichida ikki marta bosing). |
| `MTEXT` | `MT`, `T` | Abzats matni: kengligini sudrang, soʻng joyida yozing; Enter yangi abzats boshlaydi (T) |
| `MVIEW` | `MV` | Model uchun koʻrinish oynasi, joylashuvda |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nomlangan koʻrinishlar: ekrandagi koʻrinishni (yoki oynani) nom bilan saqlash va unga qaytish (NV) |
| `NCOPY` |  | Obyektlarni blok havolasi yoki bogʻlangan chizmadan chizmaga, portlatmasdan nusxalash. |
| `NEARBY` |  | Kursor yaqinidagi narsalarni eng yaqinidan boshlab, masofa va tomoni bilan aytish. |
| `NEW` |  | Yangi chizma boshlash |
| `OBJECTSCALE` | `OBJSCALE` | Annotativ matn va oʻlchamlarning annotatsiya masshtablari: masshtab qoʻshish, oʻchirish, joriy masshtabni qoʻshish yoki roʻyxatlash (har bir koʻrinish oynasi ularni oʻz masshtabi uchun oʻlchamda koʻrsatadi) |
| `OBJOUT` |  | 3D modelni OBJ sifatida eksport qilish |
| `OFFICESTANDARD` | `OFFSTD` | Ofis standarti: qogʻozdagi matn balandliklari, qatlamlar, shtamp maydonlari va shablonlar bitta yozuvda. Amaldagisini va u qayerdan kelganini koʻrsatadi; .json yozuvini bu chizmaga Import qiling, chizmada yetishmayotgan ofis qatlamlarini qoʻshing, shtamp maydonlarini roʻyxatlang. |
| `OFFSET` | `O` | Masofada parallel nusxalar |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: OFFSET polichiziqning tashqi burchaklaridagi boʻshliqlarni qanday yopishi. 0 segmentlarni choʻzadi, 1 yoy qoʻshadi, 2 toʻgʻri kesish qoʻshadi. Ushbu seans uchun saqlanadi. |
| `OLELIST` | `OLES` | Chizma olib yuradigan OLE obyektlarini roʻyxatlash va ulardan birining rasmi nusxasini istalgan joyga qoʻyish |
| `OPEN` |  | Ushbu kompyuterdan DWG yoki DXF ochish |
| `OPENIN3D` |  | Bu chizmani 3D modellash ilovasida yangi yorliqda ochish (hech narsa yuklanmaydi) |
| `OPTIONKEYS` | `OPTKEYS` | Buyruq variantlariga oʻz harflaringizni berish (ARRAY.PO, P), bitta matnli faylda |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Obyektni ilashtirish menyusini ochish: qaysi ilashtirishlar yoqilishini tanlang. Holat satridagi Ilashish ustida oʻng tugma bilan ham. |
| `OVERKILL` |  | Nusxa obyektlarni oʻchirish va bir-birini qoplagan yoki uch-uchga tegib turgan chiziq va yoylarni belgilangan oraliqda birlashtirish. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrlar paneli: foydalanuvchi parametrlari va oʻlchamli cheklovlar bitta jadvalda |
| `PARTSLIST` | `PLIST` | Kutubxonadan joylashtirilgan har bir standart detal va poʻlat profilning detallar roʻyxati jadvali |
| `PASTEAREA` | `PAREA` | MarkupCraft da nusxalangan hududni (Hududni nusxalash) asl oʻlchamida rasm sifatida joylashtirish. |
| `PASTEBLOCK` |  | PASTEBLOCK: nusxalangan narsani bitta blok sifatida joylashtirish. Blok oʻz nomini oladi; RENAME uni sizniki qiladi. |
| `PASTECLIP` |  | Buferni joylashtirish: u kursor orqasidan boradi, joylashuvini bosib belgilang (Ctrl+V) |
| `PASTEORIG` |  | Buferni nusxalangan koordinatalarda joylashtirish (Ctrl+Shift+V) |
| `PDF` |  | CadCraft ga chizma ostki qatlamlari ishlatadigan PDF fayllarni berish |
| `PDFADJUST` |  | PDF ostki qatlamini xiralashtirish, kontrast, monoxrom qilish yoki oʻchirish |
| `PDFATTACH` | `PDFATT` | PDF sahifasini chizma ostki qatlami sifatida biriktirish (PDFATTACH) |
| `PDFCLIP` |  | PDF ostki qatlamini toʻrtburchak yoki koʻpburchakka kesish |
| `PDFIMPORT` | `PDFIM` | PDF sahifasidagi chiziqlar, toʻldirish va matnni chizma obyektlariga aylantirish (PDFIMPORT) |
| `PDFLAYERS` |  | PDF ostki qatlamining qatlamlarini yoqish yoki oʻchirish |
| `PEDIT` | `PE` | Polichiziqni tahrirlash: yopish, ochish, birlashtirish, kenglik, egri chiziqqa moslash, splayn egri chizigʻi, egrilikni yechish, chiziq turi yaratish, teskari; chiziq, yoy va splaynlarni avval polichiziqqa aylantirish mumkin |
| `PENPRESSURE` |  | Qalam chizigʻining bosimi SKETCHFIX va SKETCHLIVE yaratadigan chiziq qalinligini belgilaydimi (standart yoqilgan). Bu brauzerda saqlanadi. |
| `PHOTOSKETCH` | `PSK` | Qogʻozdagi qoʻl eskizining fotosuratini masshtabli chiziq va yoylarga aylantiradi, perspektivani tekislaydi va har bir qalam rangiga alohida qatlam beradi. |
| `PICKSTYLE` |  | PICKSTYLE: guruh obyektidan birini tanlash butun guruhni tanlaydimi (1, boshlangʻich sozlama) yoki faqat oʻsha obyektni (0). Ushbu seans uchun saqlanadi. |
| `PLAN` |  | Koʻrinishni shunday aylantirish, UCS X oʻqi (Joriy ucs, saqlangan Ucs yoki Dunyo) ekranda gorizontal boʻlsin. Chizmadagi hech narsa siljimaydi. |
| `PLINE` | `PL` | Chiziq va yoy segmentlaridan polichiziq |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | PDF ga chop etish: varaq yoki model masshtabda, chop etish uslubi jadvali bilan |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Chop etish uslubi jadvallari: har bir rang qanday chop etilishini belgilash (rang, qora, kulrang, siyoh, chiziq qalinligi); chizma bilan saqlanadi (STYLESMANAGER) |
| `POINT` | `PO` | Nuqta obyektlari |
| `POINTCLOUD` | `PC` | biriktirilgan nuqtalar buluti: kesim, balandlik, qalinlik, rang, oʻlcham, koʻrinish, zoom, ajratish |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | nuqtalar bulutini (LAS, LAZ, XYZ, PTS) chizma ostiga biriktirish |
| `POLARANG` |  | Qutb kuzatuvi qadami gradusda (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Muntazam koʻpburchak |
| `PRESSPULL` |  | Jismning yuzini itarish yoki tortish (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Xossalar panelini ochish (Ctrl+1 ham, yoki obyektni ikki marta bosing) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Xossalar panelini oyna chetiga yigʻish |
| `PSPACE` | `PS` | Ishlayotgan koʻrinish oynasidan chiqib, varaqqa qaytish (yoki undan tashqarida ikki marta bosing). |
| `PUBLISH` | `-PUBLISH` | Bir nechta yoki barcha varaqlarni bitta PDF ga chop etish (har bir varaq uchun sahifa va xatcho‘p) |
| `PURGE` | `PU` | Hech kim ishlatmayotgan blok taʼriflarini olib tashlash |
| `QDIM` |  | Tezkor oʻlcham: bir vaqtda bir nechta obyektni oʻlchash (uzluksiz, asosiy chiziq, pogʻonali, koordinata, radius yoki diametr) |
| `QPMODE` | `QP` | Kursor yonidagi tezkor xossalar yoqilgan yoki oʻchirilgan |
| `QSELECT` | `QS` | Tezkor tanlash: qatlami, rangi, oʻlchami yoki nomi mos keladigan turdagi hamma obyektlar (QS) |
| `RASTERSNAP` |  | Skanerlangan varaqlar chiziqlariga ilashtirishni yoqish yoki oʻchirish. |
| `RAY` |  | Nur: nuqtadan bir tomonga cheksiz qurilish chizigʻi. |
| `RECOVER` |  | Shikastlangan DXF yoki DWG ni ochish: oʻqib boʻlmaydiganlarni tashlab oʻtadi, nima tashlab oʻtilgani aytiladi, soʻng AUDIT kabi tekshirib tuzatadi. |
| `RECTANG` | `REC`, `RECTANGLE` | Ikki burchakdan yopiq polichiziq |
| `REDLINE` | `RDL` | Revizyaga qizil chiziq: MarkupCraft qizil chiziq paketini oʻqish, har bir oʻzgarishni qabul qilish yoki rad etish, qabul qilinganlarga izohli revizya buluti qoʻyish va javoblar faylini saqlash (RDL) |
| `REDO` |  | Bekor qilinganni qayta bajarish |
| `REFCLOSE` |  | Blokni joyida tahrirlashni tugatish: saqlash yoki oʻzgarishlarni tashlab yuborish |
| `REFEDIT` |  | Blokni joyida tahrirlash, uning havolasi turgan joyda, chizmaning qolgan qismi xira boʻlgan holda; REFCLOSE saqlaydi |
| `REGEN` | `RE` | Ushbu yorliqda chizilgan narsani chizmadan qayta tiklash |
| `REGENALL` | `REA` | Har bir yorliq, oyna va ochiq chizmada chizilgan narsani qayta tiklash |
| `REGION` | `REG` | REGION (REG): yopiq obyektlardan yoki uchma-uch yopiq halqa hosil qiluvchi chiziq, yoy va polichiziqlardan tekis sohalar (mintaqalar) yaratish. UNION, SUBTRACT va INTERSECT mintaqalarni birlashtiradi, MASSPROP esa ularning kesim xossalarini beradi. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Bir nechta skanerlashni roʻyxatga olish: tanlangan nuqta juftliklari yoki nishonlar boʻyicha bitta ramkaga joylashtirish, ICP bilan aniqlashtirish, bitta LAS yoki E57 ga eksport |
| `REINIT` |  | Taxalluslar faylini qayta yuklash |
| `RENAME` | `-RENAME`, `REN` | Qatlam yoki blokni qayta nomlash (har bir obyekt yoki havola ergashadi) |
| `REVCLOUD` | `RC` | Revizya buluti: toʻrtburchak, koʻpburchak, erkin chiziq yoki obyekt atrofida (RC) |
| `REVOLVE` | `REV` | Yopiq 2D obyektlarni oʻq atrofida aylantirib jismlarga aylantirish (3D) |
| `ROTATE` | `RO` | Obyektlarni asosiy nuqta atrofida burish |
| `SAMPLES` | `SAMPLE` | CadCraft ning namunaviy chizmalaridan birini (arxitektura toʻplami, as-built) ochib oʻrganish |
| `SAVE` | `QSAVE` | Chizmani oʻz formatida (DWG yoki DXF) yuklab olish |
| `SAVEAS` |  | Chizmani DWG yoki DXF sifatida yuklab olish: qaysi birini tanlang |
| `SAYSEL` |  | Tanlanganlarni aytish, har biri bir gapda. |
| `SCALE` | `SC` | Obyektlarni asosiy nuqta atrofida masshtablash |
| `SCALELISTEDIT` | `SCALELIST` | Chizmaning oʻz masshtablarini qoʻshish, tahrirlash va oʻchirish; ular koʻrinish oynasi va chop etish roʻyxatlarida chiqadi va faylda saqlanadi (SCALELIST) |
| `SCANALIGN` | `SCL` | Skanerlangan varaqni ikki nuqtaga tekislash: koʻchirish, burish va xohlasangiz masshtablash. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Skanerlangan chizmani joylashtirish: PNG, JPEG yoki TIFF (koʻp sahifali faylning bitta yoki barcha sahifalari) yoki rasm boʻlgan PDF sahifasi. |
| `SCANCLEAN` | `SCC` | Skanerlangan varaqni qora-oq qilish va dogʻlarni olib tashlash. |
| `SCANCROP` | `SCR` | Skanerlangan varaqni oyna boʻyicha kesish. |
| `SCANDESKEW` | `SCD` | Skanerlangan varaqning uzun chiziqlari qanday burchakda ekanini topish va burchakni qabul qilganingizdan keyin varaqni toʻgʻrilash. |
| `SCANERASE` | `SCE` | Skanerlangan varaqning sohasini oʻchirish: toʻrtburchak, koʻpburchak yoki arqon. |
| `SCANINFO` | `SCI` | Skanerlangan varaqning asl fayli va undan keyingi qadamlarni koʻrsatish. |
| `SCANSCALE` | `SCS` | Skanerlangan varaqni masshtablash: unda ikki nuqta tanlang va ular orasidagi haqiqiy masofani yozing. |
| `SCANTRACE` | `SCT` | Skanerlangan varaqni yangi qatlamdagi chiziq va yoylarga koʻchirish, siz belgilagan chegarada. Matn va shtrixlash rastr boʻlib qoladi. |
| `SELECT` |  | Hozir obyektlarni tanlash (keyingi buyruqda P, Oldingi uchun) |
| `SELECTALL` | `AI_SELALL` | Ushbu yorliqdagi tahrirlanadigan barcha obyektlarni tanlash (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Tanlaganingizga oʻxshash barcha obyektlarni tanlash: bir xil tur, qatlam va rang (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Varaqlar toʻplami panelini koʻrsatadi: bir nechta chizmadan varaqlar, raqamlangan, bitta PDF sifatida chop etilgan. |
| `SHORTCUTS` | `KEYS` | Istalgan buyruqqa oʻz tugmangizni berish (Ctrl yoki Alt bilan harf, yoki boʻsh funksiya tugmasi), shu brauzer yoki ish stoli ilovasida saqlanadi. |
| `SHXFONTS` | `SHX` | CadCraft ga jild yoki fayllardan SHX shriftlarini berish, shunda ularni nomlagan matn uslublari shu shriftlarda chiziladi (roʻyxat, olib tashlash, teskari) |
| `SKETCHFIX` | `SKF` | Erkin chiziqlarni chizish; har biri toza chiziq, aylana, yoy, toʻrtburchak yoki polichiziqqa aylanadi, qirralari toʻgʻrilanib boshqalarga ulanadi. |
| `SKETCHLIVE` | `SKL` | Qalam bilan eskiz: har bir chiziq qalamni koʻtarganda aniq chiziq, aylana, yoy yoki toʻrtburchakka aylanadi, chizmaga ilashtiriladi, oʻlchami ustiga yozish mumkin. |
| `SPLINE` | `SPL` | Nuqtalar orqali splayn chizish (yoki boshqaruv koʻpburchagi bilan), yoki polichiziqni splaynga aylantirish |
| `SPLINEDIT` | `SPE` | Splaynni tahrirlash: nuqtalarni moslash, boshqaruv nuqtalari va ogʻirliklari, ochish yoki yopish, teskari qilish yoki polichiziqqa aylantirish |
| `SPLIT` |  | Chizish maydonini oynalarga boʻlish (modelda VPORTS kabi; varaqdan ham) |
| `STEELMEMBER` | `SMEMBER` | Standart profildan 3D poʻlat element: ikki nuqta (balka) yoki asosiy nuqta va balandlik (Ustun) |
| `STLOUT` |  | 3D modelni STL sifatida eksport qilish (millimetrda) |
| `STRETCH` | `S` | Choʻzish: uchlar ustida kesishuvchi oynani sudrang, koʻchirish uchun; ichidagisi koʻchadi, qolgani joyida qoladi (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Matn uslublari: yangi matn oladigan shrift, balandlik, kenglik va qiyalik (dialog; buyruq satrida -STYLE) |
| `SUBTRACT` | `SU` | Boshqa jismlardan jismlarni ayirish (3D), yoki 2D mintaqalarni mintaqalardan ayirish |
| `SWBOUT` | `SWMACRO` | SolidWorks uchun modelni bitta cheklangan eskizga qayta quradigan makroni (.swb) yuklab olish |
| `SWEEP` |  | Yopiq 2D obyektni yoʻl (chiziq, polichiziq, yoy, aylana) boʻylab jismga aylantirish (3D) |
| `TABLE` | `TB` | Jadval yaratish: qator va ustunlar, yoki buferdagi elektron jadval katakchalaridan yoki CSV fayldan |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Jadvalni tahrirlash: katakchaga yozish, qator va ustunlarni qoʻshish va oʻchirish, oʻlchamlar, birlashtirilgan katakchalar, tekislash |
| `TABLEEXPORT` |  | Jadval koʻrsatayotgan narsani CSV fayl sifatida saqlash |
| `TABLEPASTE` | `PASTETABLE` | Buferdagi elektron jadval katakchalaridan jadval yaratish |
| `TABLESTYLE` | `TS` | Jadval uslublari: sarlavha, ustun va maʼlumot qatorlari uchun matn balandligi, tekislash, chekka va chiziqlar |
| `TAGS` |  | Blok havolalaridagi teglar: tegni aniqlash (turi, ruxsat etilgan qiymatlar, qoʻllanadigan bloklar), uni tanlangan havolalarga qoʻyish va CSV sifatida saqlanadigan jadval sifatida roʻyxatlash |
| `TEXT` | `DT`, `DTEXT` | Bir qatorli matn; Enter keyingi qatorni boshlaydi |
| `TEXTEDIT` | `ED`, `DDEDIT` | Matnni joyida tahrirlash: matnni tanlash (yoki uni ikki marta bosish) (ED) |
| `TEXTMASK` | `TMASK` | Matn orqasiga niqob qoʻyish (chizmaning foni yoki rang), yoki uni olib tashlash. |
| `TEXTTOFRONT` |  | Barcha matn, oʻlcham va yetakchilarni boshqa hamma narsa oldiga olib chiqish. |
| `TOOLBAR` |  | Asboblar paneli tugmalari nimani koʻrsatishini tanlash: belgilar va matn, faqat belgilar yoki faqat matn (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Asboblar panelini oynaning yuqori, pastki, chap yoki oʻng tomoniga joylashtirish |
| `TOOLBARROWS` |  | Asboblar paneli necha qator ishlatishini tanlash: oʻrashga moslash, 2 yoki 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Chizma ustidagi panellarni standart yoki ixcham qilish |
| `TOUCHCROSSHAIR` | `TCX` | Barmoq bilan chizish uchun siljigan kursor: bir barmoq tanlangan nuqtani yopmasligi uchun undan yuqoriroqda va yonroqda turgan kursorni harakatlantiradi. Barmoqni koʻtarish hech narsani tanlamaydi; Bosish tugmasi yoki ikkinchi barmoq kursorda tanlaydi, Bosishni ushlab turib harakatlantirish sudraydi. Uzoq bosish yoki Enter tugmasi Enter. Ikki barmoq suradi va masshtablaydi. Variantlar: ON, OFF, Avtomatik (faqat barmoq yagona koʻrsatkich boʻlgan joyda yoqiladi), Masofa, Tomon. |
| `TOUR` | `TUTORIAL` | Birinchi chizma boʻyicha olti qadamli sayohatni qayta boshlash |
| `TRIM` | `TR` | Obyektlarni boshqalar kesib oʻtgan joyigacha kesish: boʻlakni bosing, bir nechtasi orqali yoʻl sudrang yoki choʻzish uchun Shift+bosish |
| `TRIMEXTENDMODE` |  | TRIM va EXTEND qanday boshlanishi: 1 Tez (har bir obyekt kesuvchi chegara yoki chegara boʻladi), 0 Standart (avval chetlarni tanlang) |
| `TTR` |  | Ikki obyektga tangens, siz bergan radius bilan aylana (CIRCLE T bilan bir xil) |
| `TURNLEFT` |  | Koʻrinishni 90° chapga burish (soat strelkasiga qarshi): UCS Z -90, koʻrinish ergashadi. Chizmadagi hech narsa siljimaydi. |
| `TURNRIGHT` |  | Koʻrinishni 90° oʻngga burish (soat strelkasi boʻyicha): UCS Z 90, koʻrinish ergashadi. Chizmadagi hech narsa siljimaydi. |
| `TURNWORLD` |  | Dunyoga qaytish: UCS Dunyo, koʻrinish yana gorizontal. |
| `TXT2MTXT` | `T2M` | Bir qatorli matnlarni bitta abzats matniga birlashtirish, yuqoridan pastga. |
| `UCS` |  | Oʻz koordinata tizimingiz: koordinata boshi va X oʻqi (boshlanish, Z burchagi, 3point, OBject, Oldingi, Dunyo, NAmed). Yozgan nuqtalaringiz, ortho, qutb kuzatuvi, setka va yangi matn unga ergashadi; koʻrinish X oʻqi gorizontal boʻlishi uchun buriladi. Chizmadagi hech narsa siljimaydi. |
| `UNDO` | `U` | Oxirgi buyruqni bekor qilish |
| `UNGROUP` |  | UNGROUP: guruhlarni ajratish. Guruh obyektlarini tanlang yoki Nom bering. Obyektlar chizmada qoladi. |
| `UNION` | `UNI` | Jismlarni bittaga birlashtirish (3D), yoki 2D mintaqalarni bitta mintaqaga |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | ISOLATEOBJECTS yoki HIDEOBJECTS yashirgan barcha obyektlarni qayta koʻrsatish. |
| `UNITS` | `UN`, `DDUNITS` | Uzunliklar qanday koʻrsatilishi va yozilishi: onlik, fut va duym, kasrlar (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Maydonlarni qayta hisoblash va ular oʻzi qachon yangilanishini tanlash |
| `USDOUT` |  | 3D modelni USD sifatida eksport qilish (.usda matn, .usdc ikkilik yoki .usdz paket) |
| `VIEW` | `-VIEW`, `V` | Standart 3D koʻrinishlar, perspektiv yoki parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | 3D jismlarning tekis 2D koʻrinishini varaqqa yoki modelga joylashtirish (old, yuqori, yon yoki izometrik, yashirin chiziqlar punktir) |
| `VIEWLABEL` | `VL` | Varaqdagi koʻrinish sarlavhasi: koʻrinish oynasi nomini koʻrsatadi va u bilan oʻzgaradi. |
| `VOICE` |  | Ovozli buyruqlarni yoqish yoki oʻchirish. Ular shu kompyuterda tanib olinadi. |
| `VPCLIP` |  | Varaq koʻrinish oynasini yopiq obyekt yoki chizilgan koʻpburchakka kesish; Oʻchirish uni yana toʻrtburchak qiladi |
| `VPLAYER` |  | Qatlamlarni faqat ayrim koʻrinish oynalarida muzlatish yoki muzsizlantirish (Muzlatish, Muzsizlantirish, Tiklash), va yangi koʻrinish oynalari qaysi qatlamlarni muzlatilgan holda boshlashini tanlash (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Chizish maydonini har biri oʻz koʻrinishiga ega oynalarga boʻlish (varaqda: MVIEW kabi koʻrinish oynasi) |
| `VPVIEW` |  | Koʻrinish oynasi nimani koʻrsatishini belgilash: modeldagi oynani tanlang |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D koʻrinishning vizual uslubi: soyalangan, qirralar, yashirin chiziq, simli, rentgen |
| `WALL` | `WA` | 2D devorlarni polichiziq kabi chizish. Ular birlashadi va eshik va derazalarni koʻtaradi. |
| `WALLARC` | `WARC` | Devorlar yoyini chizish. Reja devorlari toʻgʻri boʻlgani uchun yoy qisqa toʻgʻri devorlar (har biri 15 gradus) bilan chiziladi va ular birlashadi. |
| `WALLDELSEG` |  | Ikki nuqta orasidagi devor boʻlagini oʻchirish. Qolgani bir yoki ikki devor boʻlib qoladi. |
| `WALLDIM` |  | Oʻlcham uchun yangi qiymat yozish: uzoq uchidagi devor oʻzi bilan tik koʻchadi, birinchi uchidagi devor turadi va unga ulangan devorlar ergashadi. |
| `WALLDISJOIN` |  | Uchiga yaqin devorni bosing, shu uchda birlashtirishni taqiqlash uchun: uch tik chiziladi va hech narsa ergashmaydi. Yana bosing — ruxsat beriladi. |
| `WALLGRID` |  | Devorni setka chizigʻiga qulflash: uning boʻylab yoki uchi chiziqda. Chiziqni GRIDMOVE bilan koʻchiring va devor ergashadi. |
| `WALLHOLD` |  | Tekislash va qulflash: devor boshqa devorga nisbatan oʻz joyini saqlaydi (uning chizigʻida yoki mavjud masofada). Biri harakatlansa, ikkinchisi ergashadi. |
| `WALLHOLDDIM` |  | Ikki parallel devor orasidagi masofani qulflash. Biri harakatlansa, ikkinchisi uni saqlash uchun ergashadi. |
| `WALLHOLDS` |  | Devorlardagi qulflar roʻyxati. |
| `WALLJOINS` |  | Eski chizmaning har bir devoriga identifikator berish va ular orasidagi birikmalarni saqlash. Bu sizning birinchi oʻzgartirishingizda ham sodir boʻladi. |
| `WALLJOINSTYLE` |  | Ikki devor uchma-uch uchrashgan burchakni bosing va uning chizilish uslubini oʻzgartiring: qiyshiq, tekis, toʻgʻri kesish. T oxirgi bosgan burchakda qaysi devor oʻtishini almashtiradi. |
| `WALLOFFSET` | `WO` | Devorni masofada oʻz-oʻziga tik koʻchirish (unga ulangan devorlar ergashadi), yoki shu masofada nusxa yaratish. |
| `WALLPICK` |  | Chizmadagi chiziq yoki polichiziq boʻylab devor yaratish; agar Ha desangiz, unga ulangan chiziqlar ham olinadi. |
| `WALLPOLY` | `WP` | Muntazam koʻpburchak boʻylab 3 dan 64 tomongacha devorlar yaratish, POLYGON kabi. |
| `WALLRECT` | `WR` | Ikki qarama-qarshi burchakdan toʻrtta ulangan devor chizish, RECTANG kabi. |
| `WALLREJOIN` |  | Devorning ikki qismini yana bitta devorga qaytarish. Birinchisi chizmadagi oʻrnini saqlaydi. |
| `WALLROT` |  | Toʻrt ulangan devorni istalgan burchakda burilgan toʻrtburchak sifatida chizish: birinchi tomon, soʻng ikkinchi tomon qancha uzoqda. |
| `WALLSPLIT` | `WS` | Devorni nuqtada yoki boshqa devor kesib oʻtgan joyda ikkiga boʻlish. Qismlar boʻshliq yoki erkin uchlarni soʻramasangiz, ulangan qoladi. Eshik va derazalar oʻz qismi bilan birga boradi. |
| `WALLSPLITGAP` |  | Devorni boʻshliq bilan boʻlish: avval boʻshliqni yozing, soʻng devorni, soʻng nuqtani tanlang. Qismlar erkin uchlarga ega boʻladi va qayta birlashtirilishi mumkin. |
| `WALLSTRETCH` |  | Oyna bilan choʻzish: ichidagi devor uchlari harakatlanadi, butunlay ichidagi devorlar butunicha koʻchadi, va yon tomoniga kiradigan devorlar ular bilan birga suriladi. |
| `WALLTAN` |  | Devorni uning boʻylab chiqadigan yoy bilan davom ettirish (qisqa toʻgʻri devorlar sifatida chiziladi). |
| `WALLTRACE` |  | Bosgan nuqta atrofidagi chiziq va devorlarning eng kichik yopiq sohasi atrofida devorlar yaratish. |
| `WALLUNHOLD` |  | Devordan qulflarni olib tashlash (va unga boshqa devorlarning qulflarini ham). |
| `WBLOCK` | `W`, `-WBLOCK` | Blok, bir nechta obyekt yoki butun chizmani yangi DWG yoki DXF fayliga yozish (W) |
| `WEDGE` | `WE` | Ponali jism: ikki burchak va balandlik; birinchi burchakdan uzoqlashib qiyalanadi (3D) |
| `WHEREAMI` | `WHERE` | Kursor qayerdaligini aytish. |
| `WHOHAS` |  | Chizma kim tomonidan ochilganini aytadi. CadCraft Studio har bir ochiq chizma yoniga kichik qulf faylini yozadi (Plan.dwg.cclock: kim, qachondan, qaysi versiya) va yopilganda oʻchiradi. Variantlar: Joriy (ochiq chizma), Fayl (birini tanlash), Jild (ochiq boʻlgan barcha chizmalar), Yoʻl (kiritish), Nom (boshqalar koʻradigan nom). Besh daqiqa yangilanmagan qulf eskirgan hisoblanadi. Brauzerda mavjud emas. |
| `WINDOW` | `WN` | Devorga deraza qoʻyish. |
| `XATTACH` | `XA` | Boshqa DWG yoki DXF ni bu chizmaga bogʻlash, faqat oʻqish uchun (XREF ularni roʻyxatlaydi va qayta yuklaydi) |
| `XCLIP` | `XC` | Blok havolalari va bogʻlangan chizmalarni toʻrtburchak yoki koʻpburchakka kesish, yoki kesishni olib tashlash. |
| `XLINE` | `XL` | Qurilish chizigʻi, ikki tomonga cheksiz: ikki nuqta orqali, gorizontal, vertikal, burchak ostida, burchakni teng ikkiga boʻluvchi yoki chiziqdan siljigan. |
| `XREF` | `XR`, `-XREF` | Bogʻlangan chizmalar (tashqi havolalar): roʻyxat, biriktirish, qayta yuklash, bogʻlash, ajratish |
| `ZOOM` | `Z` | Hammasi yoki oyna |
