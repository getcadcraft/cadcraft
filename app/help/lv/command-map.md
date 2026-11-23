---
title: Komandu karte: ko rakstīt
summary: Katra CadCraft komanda ar tās īsajiem nosaukumiem no A līdz Z, ko veido pati programma, un paradumi no citām zīmēšanas programmām, kas atšķiras.
keywords: komandu karte, komandas, aliasi, īsie nosaukumi, nākt no, komandu saraksts, ko rakstīt, dzēst, apgriezt, ekvivalents, atšķirības
from: 9426856f
---

CadCraft pieņem komandu nosaukumus un īsos nosaukumus, ko cilvēki zina no citām zīmēšanas programmām: rakstiet `L` līnijai, `TR` apgriezšanai, `E` dzēšanai. Tādēļ lielākajai daļai nav jāmācās tulkojumu tabula: nosaukums, ko jūs zināt, šeit ir tas pats. Zemāk ir katra CadCraft komanda, ko veido pati programma. {{key:Enter}} atkārto pēdējo; komandrindā `HELP` izdrukā to pašu sarakstu.

Dažas no tām nav tādas pašas vai nav izveidotas:

- **Saglabāt** lejupielādē kopiju pārlūkprogrammā ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio tas ieraksta failu. Skatiet [Pāreja no citas zīmēšanas programmatūras](topic:coming-from).
- **PLOT** izveido PDF (arī PNG un SVG) ar drukas stila tabulu; lapas iestatījumu pārvaldnieka nav.
- **DIMSTYLE** un **PEDIT** ir izveidotas; **PEDIT** nav virsotnes rediģēšanas opcijas (to dara roktura punkti).
- **TABLE** nav izveidota; {{cmd:XREF}}, {{cmd:SPLINE}} un {{cmd:WBLOCK}} ir.
- Rutīnas savas komandas (AutoLISP `C:NAME`) parādās pēc tās ielādes ar {{cmd:APPLOAD}}; tās šeit nav uzskaitītas.

## Visas komandas (402)

| Komanda | Īsie nosaukumi | Ko tā dara |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbītā pagriezt 3D skatu ar kreiso pogu |
| `ACCESS` | `AX` | Ieslēgt vai izslēgt zīmēšanu bez redzes: rezultāti tiek nolasīti ar ekrāna lasītāju, tastatūras kursors uz rasējuma, piesaistes skaņas un nolasītas komandas. |
| `ALIASEDIT` |  | Rediģēt komandu aliasus vienā teksta failā (pazīstamais L, *LINE formāts) |
| `ALIGN` | `AL` | Pārvietot un pagriezt objektus tā, lai avota punkti nonāktu mērķa punktos (viens, divi vai trīs pāri), un, ja vēlaties, mērogot tos |
| `ALIGNPANEL` | `ALP` | Atvērt panelis Izlīdzināt un sadalīt |
| `ALIGNTO` |  | Izlīdzināt atlasīto objektu kreiso, centra, labo, augšējo, vidējo vai apakšējo malu atlasē, pirmajā vai pēdējā izvēlētajā objektā vai punktā |
| `ANNOALLVISIBLE` | `ANNOALL` | Rādīt anotatīvos objektus katrā mērogā vai tikai tur, kur skata loga (vai rasējuma) mērogs ir to sarakstā |
| `ANNOSCALE` | `CANNOSCALE` | Iestatīt rasējuma anotācijas mērogu: anotatīvais teksts un izmēri tiek pārveidoti, lai izdrukātos tajā pašā izmērā |
| `APPLOAD` | `AP` | Ielādēt lietojumprogrammas: LISP rutīnas (.lsp) un to dialoga failus (.dcl); palaišanas komplekts (AP) |
| `ARC` | `A` | Loks: 3 punkti, Sākums/Centrs/Beigas, Sākums/Centrs/Leņķis, Sākums/Centrs/Garums, Sākums/Beigas/Leņķis, Sākums/Beigas/Virziens, Sākums/Beigas/Rādiuss, Centrs/Sākums/Beigas, Centrs/Sākums/Leņķis, Centrs/Sākums/Garums, Turpināt |
| `AREA` | `AA` | Laukums un perimetrs pēc punktiem vai objekta; Pievienot un Atņemt glabā kopējo summu (AA) |
| `ARRAY` | `AR` | Kopijas rindās un kolonnās vai ap centru (AR) |
| `ARRAYASSOCIATIVITY` |  | Nosaka, vai ARRAY komandas veido masīvus, kurus var rediģēt (1), vai vienkāršas kopijas (0) |
| `ARRAYCLOSE` |  | Beidz masīva avota objektu rediģēšanu |
| `ARRAYEDIT` |  | Maina masīvu, kas izveidots ar Asociatīvo opciju: skaits, attālums, avota objekti, viens vienums |
| `ARRAYPATH` |  | Kopijas objektu gar līniju, loku, polilīniju vai citu līkni |
| `ARRAYPOLAR` |  | Kopijas ap centra punktu |
| `ARRAYRECT` |  | Kopijas rindās un kolonnās |
| `ASBUILT` | `ASB` | ASBUILT nolasa uzmērīšanas brigādes izmērītos faktiskos punktus (CSV / TXT, kā raksta EXPORTPOINTS) un salīdzina tos ar rasējuma punktiem: iekšā vai ārpus pielaides, neizmērīti, papildu. Atzīmē tos slānī AS-BUILT un lejupielādē CSV atskaiti. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definēt atribūtu (birku, kuru bloks pieprasa vērtību), ko ievietot blokā (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Rediģēt bloka atsauces atribūtu vērtības komandrindā, pa vienai pēc otras (Enter saglabā vērtību) |
| `ATTSYNC` |  | Saskaņot bloka atsauces ar tā atribūtu definīcijām: jaunās pievieno ar noklusējumiem, noņemtās izņem, pozīcijas un teksts tiek atiestatīti; vērtības saglabātas |
| `AUDIT` |  | Pārbauda atvērto rasējumu, vai nav bojājumu: skaitļi, kas nav galīgi, objekti bez izmēra, trūkstoši slāņi, bloki, stili un līniju tipi, bloki, kas satur paši sevi, kopīgi identifikatori, bojāti izmēri un svītrojumi. Uzskaita atrasto pēc veida un pirms labošanas jautā; labojums ir viens atsaukšanas solis. |
| `AUNITS` | `ANGUNITS` | Kā tiek rādīti un ierakstīti leņķi: decimālie grādi, grādi-minūtes-sekundes vai azimuti, piemēram, N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Rasējuma automātiskā aizpildīšana ieslēgta vai izslēgta, vai uzskaita, ko rasējuma raksti ieteic tagad. |
| `AUTOCONSTRAIN` |  | Pievienot sakrišanas, horizontālos un vertikālos ierobežojumus, kur ģeometrija jau ir tuvu |
| `AUTODIM` | `ADIM` | Izmēru noteikšana pēc noteikumiem: kopējais izmērs, ķēdes gar malām, atveres, caurumu diametri un režģa attālumi, neatkārtojot jau izmērīto. |
| `AUTOSHEET` | `ASH` | Izkārto lapas pašas: izvēlas papīru un standarta mērogus un novieto katru skatu ar parakstu un titula bloku. |
| `BATTMAN` |  | Bloka atribūtu pārvaldnieks: bloka atribūtu secība, birkas, uzvednes, noklusējumi un režīmi, pēc tam atjauninātas tā atsauces |
| `BCLOSE` |  | Aizvērt bloka redaktoru: saglabāt bloku vai atmest izmaiņas |
| `BCONVERT` |  | BCONVERT atrod atkārtotu ģeometriju un pārvērš to bloku atsaucēs. Atlasiet objektus, kas atkārtojas: atrasti visi pārējie objektu komplekti atvērtajā telpā, kas ir tā pati ģeometrija, pārvietota un pagriezta jebkurā leņķī; ar ieslēgtu Spoguļots vai Mērogots atrod arī spoguļattēlus un kopijas citā izmērā. Dodiet jaunajam blokam nosaukumu un bāzes punktu; atlase un katra kopija kļūst par atsaucēm uz to, katra ar savu pagriezienu un mērogu. Vai izvēlieties Bloks un nosaukums esošam blokam, lai atrastu brīvas tā objektu kopijas. Kopijai jābūt tādam pašam slānim, krāsai, līniju tipam un līnijas platumam, ja vien Rekvizīti nav iestatīts uz Ignorēt. Objekti bloķētos slāņos paliek neskarti. Viens atsaukšanas solis. |
| `BEDIT` | `BE` | Bloka redaktors: rediģēt bloka objektus un atribūtus; BCLOSE saglabā (BE) |
| `BLEND` |  | BLEND: splains starp divu atvērtu līkņu galiem, izvēlēti pie galiem, lai savienotu. CONtinuity: Tangent seko abiem virzieniem, Smooth seko arī tam, kā tie liecas. |
| `BLOCK` | `B`, `BMAKE` | Izveidot bloku no objektiem (tie kļūst par vienu atsauci) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: katra viena bloka atsauce kļūst par atsauci uz citu, tajā pašā vietā ar tādu pašu mērogu un pagriezienu. Abu bloku atribūtu vērtības tiek saglabātas. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE parāda panelis Bloki ar kursoru tā filtrā. Panelis rāda katra bloka attēlu (vispirms tie, kas ievietoti nesen), kā sarakstu vai režģi; noklikšķiniet uz attēla vai velciet to uz rasējumu, lai ievietotu bloku ar INSERT. Zem Bibliotēkas pievienojiet savu DWG vai DXF failu: tā bloki tiek uzskaitīti ar attēliem un kopēti šajā rasējumā, kad ievietojat vienu. CadCraft Studio var pievienot arī rasējumu mapi, un faili un mapes tiek atcerēti. |
| `BOMEDIT` | `BOMCOLUMNS` | Materiālu saraksta tabulas kolonnas, grupēšana, kārtošana, nosaukums, kopsummas un piezīmes |
| `BOMEXPORT` |  | Saglabāt materiālu saraksta tabulu kā .csv failu |
| `BOMTABLE` | `BOM` | Dzīvā materiālu saraksta tabula vienai zonai vai visam rasējumam |
| `BOMUPDATE` |  | Atjaunināt visas materiālu saraksta tabulas tagad, arī iesaldētās |
| `BOMZONE` | `BZONE` | Nosaukta rasējuma daļa materiālu sarakstam: divi stūri, daudzstūris vai slēgta objekta kontūra |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): norādiet punktu slēgta laukuma iekšienē un saņemiet slēgtu polilīniju ap to. Loki paliek loki. Salas iezīmē arī laukumus iekšā. |
| `BOX` |  | Kaste: divi stūri un augstums (3D) |
| `BPARAMETER` | `BPARAM` | Vēl nav izveidots: parametra (piemēram, Redzamība) pievienošana blokam. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Bloku parametri: nosaukti parametri ar formulām un vairāki redzamības parametri vienā blokā. Darbojas bloku redaktorā (piešķirt atlasītos objektus stāvoklim) un uz atlasītas atsauces (tās pašas vērtības un stāvokļi). |
| `BREAK` | `BR` | Pārraut līniju, loku, riņķi vai polilīniju starp diviem punktiem (BR) |
| `BREAKATPOINT` |  | Sadalīt līniju, loku vai polilīniju divās daļās punktā |
| `BREAKLINE` |  | Zīmēt līniju ar pārtraukuma simbolu; tās izmērs un pagarinājums pāri galiem tiek atcerēts. |
| `BREPLACE` |  | BREPLACE aizvieto vienu bloku ar citu. Atlasītie: izvēlieties bloku atsauces un nosauciet bloku, ko lietot. Visi: nosauciet bloku un tā aizstājēju, un visas atsauces visās telpās un citos blokos mainās. Atsauce saglabā savu vietu, mērogu, pagriezienu un slāni, un abu bloku atribūtu vērtības; vērtības, kurām jaunajā blokā nav vietas, tiek izmestas un nosauktas. |
| `BSEARCH` |  | BSEARCH meklē blokus. Nosaukums: daļa no bloka nosaukuma vai raksts ar * un ?. Atribūts: vērtība (vai TAG=vērtība), ko satur atsauces atribūti. Ģeometrija: atlasiet objektus vai vienu bloka atsauci, un tiek uzskaitīti bloki, kuru forma ir vismaz 85% līdzīga, labākie pirmie; izmērs, pagrieziens un spoguļošana neskaitās. Atvērtajā telpā atrastās atsauces tiek atlasītas nākamajai komandai. |
| `BURST` |  | Sadalīt bloku atsauces un saglabāt to, ko saka atribūti: katra vērtība kļūst par tekstu uz atribūta slāņa. |
| `BVHIDE` | `BVH` | Bloka redaktorā: paslēpt objektus pašreizējā redzamības stāvoklī. |
| `BVSHOW` | `BVSH` | Bloka redaktorā: parādīt objektus, ko pašreizējais redzamības stāvoklis paslēpj (tie rādās izbalējuši, lai tos varētu izvēlēties). |
| `BVSTATE` | `BVS` | Bloka redaktorā, blokam ar redzamības stāvokļiem: pārslēgties uz stāvokli vai pievienot, pārdēvēt vai dzēst vienu. |
| `CAL` |  | Aprēķināt garumu vai skaitli: + − * / un iekavas, kā tos rakstāt jebkurā vietā |
| `CENTERLINE` | `CL` | Centra līnija starp divām līnijām: pa vidu starp tām vai pa bisektrisi, ja tās saskaras (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Centra zīme: krusts riņķa vai loka centrā ar centra līnijām, kas iet nedaudz aiz tā (CM) |
| `CHAMFER` | `CHA` | Nošķelt stūri starp divām līnijām (D — divi attālumi, A — garums un leņķis, P — katrs polilīnijas stūris) |
| `CHSPACE` |  | CHSPACE: pārvietot objektus starp lapu un modeli caur skata logu. Tie tiek mērogoti un pagriezti, lai izskatītos vienādi no otras puses. Lapā tie iet uz modeli; strādājot caur skata logu (MSPACE), tie nonāk lapā. |
| `CIRCLE` | `C` | Centrs un rādiuss, diametrs, 2 vai 3 punkti |
| `CLASS` |  | Ielikt atlasītos objektus klasē vai, ja nekas nav atlasīts, iestatīt aktīvo klasi (? uzskaita tās) |
| `CLASSES` | `CLS` | Klašu panelis: klases sakārto objektus pa slāņiem; rādīt, paslēpt un stilizēt tās un pārrakstīt tās pa skata logiem (CLS) |
| `COMMANDLINE` | `CMDLINE` | Piestiprināt vai atbrīvot komandrindu, padarīt to vienrindas, iestatīt tās vēstures rindas vai atvērt vēsturi (F2) |
| `COMPARESETTINGS` | `CMPSET` | Salīdzināt izmēru stilus, teksta stilus, slāņus, lapas vai vienības: divus šajā rasējumā vai šo rasējumu ar citu atvērtu, un nokopēt vērtību. |
| `CONSTRAINTBAR` | `CBAR` | Rādīt vai paslēpt ierobežojumu joslas (Rādīt visas / Paslēpt visas vai pa objektam) |
| `COPY` | `CO`, `CP` | Kopēt objektus, cik reižu noklikšķināt |
| `COPYBASE` |  | Kopēt objektus starpliktuvē ar bāzes punktu, ko izvēlaties |
| `COPYCLIP` |  | Kopēt objektus starpliktuvē (Ctrl+C); PASTECLIP tos ievieto |
| `COUNT` | `BCOUNT` | Saskaitīt bloku atsauces: izvēlieties vienu, lai atlasītu un saskaitītu katru tā bloka atsauci |
| `COUNTTABLE` |  | Ievietot bloku skaitu tabulu |
| `CREDITS` |  | Ievieto bibliotēkas autorus rasējumā kā tabulu. Palaidiet vēlreiz, lai atjauninātu tabulu no pašreizējiem rasējuma vienumiem. |
| `CURSORSIZE` |  | Krusta izmērs: 100 to rāda no malas līdz malai pa visu rasējumu (Iestatījumi › Kursors › Pilnekrāns) |
| `CUTCLIP` |  | Izgriezt objektus starpliktuvē (Ctrl+X): kopēt un pēc tam dzēst |
| `CYLINDER` | `CYL` | Cilindrs: centrs, rādiuss un augstums (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Uzskaitīt blokus, to atribūtus un objektu rekvizītus kā tabulu rasējumā vai CSV failā |
| `DATALINK` | `DL` | Tabula no CSV faila, kas atceras failu, lai to varētu nolasīt atkal |
| `DATALINKUPDATE` | `DLU` | Nolasīt datu saites failu no jauna un atkārtoti aizpildīt tās tabulas |
| `DCALIGNED` | `DCALI` | Izmēra ierobežojums: patiess attālums starp punktiem, punktu un līniju vai divām līnijām |
| `DCANGULAR` | `DCANG` | Izmēra ierobežojums: leņķis starp divām līnijām vai loka leņķis |
| `DCCONVERT` |  | Pārvērst uz ierobežojamas ģeometrijas zīmētus izmērus izmēru ierobežojumos |
| `DCDIAMETER` | `DCDIA` | Izmēra ierobežojums: riņķa vai loka diametrs |
| `DCDISPLAY` |  | Rādīt vai paslēpt izmēru ierobežojumus rasējumā |
| `DCHORIZONTAL` | `DCHOR` | Izmēra ierobežojums: horizontāls attālums |
| `DCLINEAR` | `DCLIN` | Izmēra ierobežojums: horizontāls vai vertikāls attālums, no vietas, kur to novietojat |
| `DCRADIUS` | `DCRAD` | Izmēra ierobežojums: riņķa vai loka rādiuss |
| `DCVERTICAL` | `DCVER` | Izmēra ierobežojums: vertikāls attālums |
| `DELBLOCKS` |  | Dzēst blokus: katru atsauci (arī iekšējās, katrā lapā) un definīcijas |
| `DELCONSTRAINT` | `DELCON` | Noņemt katru ierobežojumu (ģeometrisko un izmēru) no atlasītajiem objektiem |
| `DELOPENING` |  | Izņemt durvis vai logu no sienas. |
| `DESCRIBE` | `DESC` | Pastāstīt, kas rasējumā ir: cik objektu, kāda veida, cik lieli, kas ir atlasīts. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Notīrīt atlasi (Esc) |
| `DETAILS` | `DET` | Jūsu firmas pašas detaļas, atrastas pēc tā, ko zīmējat: meklēt, pievienot bloku, uzskaitīt, noņemt, ieslēgt vai izslēgt piedāvājumus. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Zīmēt diagrammu no teksta: Mermaid plūsmas shēmu, PlantUML komponentu diagrammu, D2, no-līdz sarakstu vai draw.io XML kā blokus un savienotājus, ko var rediģēt |
| `DIMALIGNED` | `DAL`, `DIMALI` | Patiess attālums starp diviem punktiem |
| `DIMANGULAR` | `DAN`, `DIMANG` | Leņķis starp divām līnijām, loka leņķis vai pēc trim punktiem |
| `DIMARC` | `DAR` | Loka garuma izmērs: attālums pa loku, ar loka simbolu (DAR) |
| `DIMASZ` |  | Izmēra iestatījums: bultiņas izmērs |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Izmēri, sakrauti no vienas bāzes līnijas |
| `DIMBREAK` | `DBREAK` | Pārraut izmēra un pagarinājuma līnijas, kur tās krusto citus objektus (Auto), starp diviem punktiem (Manual) vai noņemt pārtraukumus |
| `DIMCONSTRAINT` | `DCON` | Izmēru ierobežojumi: lineāri, saskaņoti, leņķiski, rādiuss, diametrs, pārvēršana |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Izmēru ķēde, katrs no pēdējā gala |
| `DIMDEC` |  | Izmēra iestatījums: decimālzīmes |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Loka vai riņķa diametrs |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Atbrīvot izmērus no objektiem, ar kuriem tie ir saistīti (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Mainīt izmēra tekstu (Sākums, Jauns teksts, Pagriezt) vai slīpināt pagarinājuma līnijas (Slīpi) |
| `DIMEXE` |  | Izmēra iestatījums: pagarinājums aiz izmēra līnijas |
| `DIMEXO` |  | Izmēra iestatījums: nobīde no sākuma punkta |
| `DIMGAP` |  | Izmēra iestatījums: atstarpe ap tekstu |
| `DIMINSPECT` |  | Pārbaudes izmērs: rāmis ap vērtību ar uzrakstu un to, cik bieži detaļa tiek pārbaudīta |
| `DIMJOGGED` | `DJO`, `JOG` | Lūzuma rādiusa izmērs: rādiuss, kas zīmēts no tuvāka punkta, kad centrs ir tālu (DJO) |
| `DIMJOGLINE` | `DJL` | Pievienot lūzuma simbolu lineāra vai saskaņota izmēra līnijai, lai parādītu, ka attālums nav zīmēts mērogā (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontāls vai vertikāls attālums (R jebkuram leņķim) |
| `DIMLUNIT` |  | Izmēra iestatījums: garuma formāts (1 zinātniskais, 2 decimālais, 3 inženiertehniskais, 4 arhitektūras, 5 daļskaitļu) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinātu izmērs: punkta X vai Y attālums no UCS sākuma punkta, uz izvada līnijas (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Pārrakstīt izmēra mainīgos atlasītajos izmēros, nemainot to stilu; Notīrīt atgriež stilu (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Loka vai riņķa rādiuss |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Piesaistīt izmēra punktus objektiem, lai tas seko un mēra no jauna, kad tie pārvietojas (DRE) |
| `DIMSCALE` |  | Izmēra iestatījums: kopējais mērogs (izmēri × šis) |
| `DIMSPACE` |  | Vienmērīgs attālums starp paralēliem izmēriem, mērot no bāzes izmēra (0 izlīdzina, Auto ir divreiz teksta augstums) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Izveidot, mainīt, iestatīt pašreizējo, dzēst, lietot un salīdzināt nosauktus izmēru stilus (dialogs; -DIMSTYLE komandrindā) |
| `DIMTEDIT` | `DIMTED` | Pārvietot izmēra tekstu pa kreisi, pa labi vai uz vidu izmēra līnijā, vai to pagriezt |
| `DIMTEXTUNIT` | `DTU` | Izmēra teksts mm, cm, m vai km vai rasējuma vienībās: atlasītie izmēri, citādi jaunie (DTU) |
| `DIMTXT` |  | Izmēra iestatījums: teksta augstums |
| `DIST` | `DI` | Attālums un leņķis starp diviem punktiem |
| `DISTRIBUTE` |  | Vienmērīgi izvietot atlasītos objektus, sānis pret sānu vai augšā un apakšā: vienādi soļi starp centriem vai vienādas atstarpes; ārējie divi paliek |
| `DIVIDE` | `DIV` | DIVIDE (DIV): atzīmes, kas sadala līniju, loku, riņķi, polilīniju, splainu vai elipsi vienādās daļās. Punkti vai, ar Bloku, bloks katrā atzīmē. |
| `DOCUMENTS` | `DOCS` | Atvērt Dokumentu paneli: izņemt un ievietot rasējumus, pārskatījumus, izlaiduma statusus un apstiprinājumu projekta mapei |
| `DOOR` | `DR` | Ievietot durvis sienā. Puse, uz kuru noklikšķināt, ir puse, uz kuru tās atvērsies. |
| `DRAWORDER` |  | Mainīt zīmēšanas secību: nest objektus uz priekšu, sūtīt uz aizmuguri vai novietot virs vai zem citiem objektiem. |
| `DUPLICATE` | `DUP` | Kopija, kas kustas kopā ar rādītāju: noklikšķiniet, lai nolikt (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Rasējuma rekvizīti: nosaukums, autors un pārējie, kā arī jūsu pašu nosaukumu un vērtību pāri |
| `DXFOUT` |  | Lejupielādēt rasējumu kā DXF R12 (Saglabāt saglabā savu formātu) |
| `EATTEDIT` | `DDATTE` | Rediģēt bloka atsauces atribūtus: vērtības, tekstu un rekvizītus, pa vienam atribūtam |
| `ELLIPSE` | `EL` | Ass galapunkti un otrā pusass |
| `ERASE` | `E`, `DELETE` | Noņemt objektus |
| `EXPLODE` | `X` | Sadalīt polilīnijas, blokus un izmērus daļās |
| `EXPORT` | `EXP` | Saglabāt rasējuma kopiju failā, kādu raksta papildinājums |
| `EXPORT3D` | `3DEXPORT` | Eksportēt 3D modeli: GLB, OBJ vai STL |
| `EXPORTPOINTS` | `EXPPTS` | Ierakstīt punktus un bloku ievietošanas punktus ar vienu atribūtu kā aprakstu CSV vai TXT failā (PNEZD, PENZD vai XYZ) BIM un mērniecības programmām |
| `EXTEND` | `EX` | Pagarināt objektus, lai tie saskartos ar citiem: noklikšķiniet tuvu galam, velciet cauri vairākiem vai Shift+klikšķis, lai apgrieztu |
| `EXTRIM` |  | EXTRIM: izvēlieties vienu griezšanas malu, tad pusi. Viss, kas krusto malu, tiek apgriezts šajā pusē. Gabali, kas tiks nogriezti, parādās, kad pārvietojat rādītāju. |
| `EXTRUDE` | `EXT` | Ekstrudēt slēgtus 2D objektus cietos ķermeņos (3D) |
| `FIELD` |  | Ievietot lauku tekstā, tabulas šūnā vai atribūtā: datums, faila nosaukums, lapas numurs, rasējuma rekvizīts, objekta laukums vai garums, vai formula |
| `FILLET` | `F` | Noapaļot vai nogriezt stūri starp diviem objektiem (R rādiuss, P — katrs polilīnijas stūris, M — vairāki) |
| `FIND` |  | Atrast un aizstāt vārdus tekstā, atribūtu vērtībās un izmēru tekstā |
| `FLATTEN` |  | Iestatīt atlasīto objektu augstumu (Z) un biezumu uz 0, arī blokos, ko tie izmanto. |
| `FLOOR` |  | Izvēlēties stāvu, uz kura zīmēt, pievienot vienu vai pārvietot vai kopēt atlasi uz to. |
| `FLOORLAYERS` |  | Pārvērst stāvus slāņos ar nosaukumu Floor-Layer failam, ko nosūtīsiet kādam bez stāviem. |
| `FLOORS` | `FLR` | Atvērt Stāvu paneli: sakraut stāvus vienā modeļa telpā. |
| `GCCOINCIDENT` |  | Ierobežojums: divi punkti sakrīt vai punkts paliek uz objekta |
| `GCCOLLINEAR` |  | Ierobežojums: divas līnijas paliek uz vienas līnijas |
| `GCCONCENTRIC` |  | Ierobežojums: divi riņķi vai loki dala centru |
| `GCEQUAL` |  | Ierobežojums: divas līnijas paliek vienādā garumā, vai divi riņķi/loki vienādā rādiusā |
| `GCFIX` |  | Ierobežojums: punkts vai viss objekts paliek savā vietā |
| `GCHORIZONTAL` |  | Ierobežojums: līnija (vai divi punkti) paliek horizontāla |
| `GCPARALLEL` |  | Ierobežojums: divas līnijas paliek paralēlas |
| `GCPERPENDICULAR` |  | Ierobežojums: divas līnijas paliek taisnā leņķī |
| `GCSYMMETRIC` |  | Ierobežojums: divi punkti, līnijas vai riņķi spoguļojas viens otrā pāri līnijai |
| `GCTANGENT` |  | Ierobežojums: līnija un riņķis vai loks (vai divi no tiem) paliek tangenciāli |
| `GCVERTICAL` |  | Ierobežojums: līnija (vai divi punkti) paliek vertikāla |
| `GDSIN` | `GDS` | Skatīt IC izkārtojumu (GDSII straumes failu): katru slāni un datu tipu kā rasējuma slāni, plakani, lietotāja vienībās; tikai skatīšanai un mērīšanai (laboratorijas pārbaude) |
| `GEOMCONSTRAINT` | `GCON` | Ģeometriskie ierobežojumi: horizontāli, vertikāli, paralēli, tangenciāli, sakrītoši… |
| `GLBOUT` |  | Eksportēt 3D modeli kā GLB (glTF) |
| `GRADIENT` | `GD` | Aizpilda laukumu ar gradientu no vienas vai divām krāsām |
| `GRID` |  | Iestatīt režģi: attālumu starp līnijām, katra N-tā līnija kā galvenā līnija, ON vai OFF, vai Auto, lai atkal sekotu tālummaiņai |
| `GRIDMOVE` | `GM` | Pārvietot režģa līniju un to, kas pie tās karājas: sienas stiepjas, kolonnas, aplīši un birkas pārvietojas, izmēri seko. |
| `GROUP` | `G` | GROUP (G): piešķirt atlasītajiem objektiem kopīgu nosaukumu. Klikšķis uz vienu no tiem tad atlasa visus. Enter pie nosaukuma izveido nenosauktu grupu. |
| `GROUPEDIT` |  | GROUPEDIT: mainīt grupu. Izvēlieties vienu no tās objektiem vai dodiet Nosaukumu, tad Pievienot vai Noņemt objektus, REName to pārdēvē, mainiet Aprakstu vai norādiet, vai klikšķis atlasa to veselu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Aizpildīt laukumu ar cietu aizpildījumu vai rakstu: noklikšķiniet iekšā vai atlasiet slēgtus objektus (H) |
| `HATCHEDIT` | `HE` | Mainīt svītrojumu: rakstu, mērogu, leņķi, sākumpunktu un saiti ar kontūru. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Atkal izveido kontūras polilīnijas no svītrojuma, saistītas ar to vai ne |
| `HATCHTOBACK` |  | Nosūtīt katru svītrojumu aiz visa pārējā. |
| `HELP` | `?` | Šis saraksts |
| `HIDEOBJECTS` |  | Paslēpt atlasītos objektus līdz UNISOLATEOBJECTS. Netiek saglabāts kopā ar rasējumu. |
| `HISTORY` | `HIST` | HISTORY (HIST): šī rasējuma versijas — kopijas, kas glabājas šajā datorā, kad Studio to saglabā, un mākoņa versijas — atvērt, atjaunot un salīdzināt ar to, kas mainījies, krāsā. |
| `ID` |  | Punkta koordinātas |
| `IMAGE` | `IM` | Dot CadCraft attēlu failus, ko rasējums izmanto (DWG saglabā tikai to, kur tie atradās). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Ievietot attēlu (PNG vai JPEG) no faila. |
| `IMAGECLIP` | `ICL` | Apgriezt attēlu taisnstūrī vai daudzstūrī vai noņemt tā apgriezumu. |
| `IMPORT` | `IMP` | Importēt papildinājuma nolasītu faila veidu šajā rasējumā |
| `INSERT` | `I`, `DDINSERT` | Ievietot bloku (S mērogs, R pagriezt); F no DWG/DXF faila, L no bibliotēkas |
| `INTERSECT` | `IN` | Paturēt tikai to, kas cietajiem ķermeņiem ir kopīgs (3D), vai laukumu, ko 2D reģioni dala |
| `ISODRAFT` |  | ISODRAFT: izometriskā zīmēšana ieslēgta vai izslēgta, vai tieši uz Kreisās, Augšējās vai Labās plaknes. Kamēr tā ir ieslēgta, Ortho un polārā izsekošana seko plaknes divām asīm, režģis tiek zīmēts izometriski, un ELLIPSE ir Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Rādīt tikai atlasītos objektus; viss pārējais šajā telpā ir paslēpts līdz UNISOLATEOBJECTS. Netiek saglabāts kopā ar rasējumu. |
| `ISOPLANE` |  | ISOPLANE: izvēlēties izometrisko plakni, uz kuras zīmēt: Left, Top vai Right. Enter pāriet uz nākamo, kā F5 dara, kamēr ir ieslēgta izometriskā zīmēšana. |
| `JOIN` | `J` | Savienot līnijas, lokus un polilīnijas, kas saskaras gals pie gala, vienā polilīnijā; līnijas uz vienas līnijas — vienā līnijā (J) |
| `LASER` | `LASERCUT` | Atvērt Lāzera paneli: sūtīt slāņus lāzergriezējam vai graveram (GRBL G-kods) |
| `LASSOMODE` |  | Nospiest un vilkt zīmē lasso (1) vai taisnstūri (0) |
| `LAYDEL` |  | Dzēst slāni un katru tā objektu (modelī, lapās un blokos) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Atvērt slāņu pārvaldnieku: visi slāņi vienā tabulā |
| `LAYERPANEL` |  | Rādīt slāņu paneli. |
| `LAYFRZ` |  | Iesaldēt katra izvēlētā objekta slāni |
| `LAYGROUP` | `LG` | Grupēt slāņus mapēs slāņu panelī. |
| `LAYISO` |  | Izolēt izvēlēto objektu slāņus (visi citi slāņi izslēgti) |
| `LAYLOCKFADE` |  | Iestatīt, cik stipri izbalē objekti bloķētajos slāņos, un vai klikšķis var tos atlasīt. |
| `LAYMCUR` |  | Padarīt to objekta slāni pašreizējo, ko izvēlaties |
| `LAYMRG` |  | Apvienot slāņus: to objekti pāriet uz mērķa slāni, un apvienotie slāņi pazūd |
| `LAYOFF` |  | Izslēgt katra izvēlētā objekta slāni |
| `LAYON` |  | Ieslēgt visus slāņus |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Jauna lapa ar titula bloku un skata logu |
| `LAYTHW` |  | Atsaldēt visus slāņus |
| `LAYUNISO` |  | Ieslēgt atpakaļ slāņus, ko LAYISO izslēdza |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pārvērš tekstu, kas rakstīts vecajos vjetnamiešu fontos (TCVN3 / ABC fonti, piemēram, .VnTime, un VNI fonti, piemēram, VNI-Times), uz Unicode. Šāds teksts jau tiek rādīts tā, kā to lasa; šī komanda to pārraksta uz visiem laikiem, ar skaitu un vienu atsaukšanas soli. |
| `LENGTHEN` | `LEN` | Pagarināt vai saīsināt līnijas, lokus un polilīnijas: par summu, procentiem, līdz kopējam garumam vai velkot (LEN) |
| `LIBRARY` | `LIB` | Bibliotēkas panelis: ievietot vienumus, pārbaudīt atjauninājumus, autorus |
| `LIMITS` |  | Iestatīt rasējuma robežas: ON, OFF vai apakšējo kreiso un augšējo labo stūri. Ar ieslēgtām robežām punkti ārpus tām tiek noraidīti |
| `LINE` | `L` | Taisni segmenti, katrs ir savs objekts |
| `LINETYPE` | `LT`, `CELTYPE` | Līniju tips, ko iegūst jauni objekti (pēc slāņa, pēc bloka vai nosaukts) |
| `LINKVIEWS` | `SYNCVIEWS` | Panoramēt un tālummainīt visus logus kopā (sadalīts ekrāns), lai salīdzinātu divus rasējumus vai pārskatījumus |
| `LISPEDIT` | `VLIDE` | LISPEDIT (vai VLIDE) atver LISP redaktoru: logu, lai rakstītu, ielādētu un izmēģinātu rutīnu. Ielādēt rasējumā nolasa katru formu, kā to dara APPLOAD ar failu, un izveido tās komandas. Palaist atlasi izvērtē atlasītās formas vai to, kurā atrodas kursors. Konsolē redzams, ko rutīna izdrukāja, un katra kļūda ar rindu. Iekavas, kas atbilst, tiek atzīmētas, kamēr rakstāt, un Enter ieievieto jauno rindu. New, Open un Save darbojas ar .lsp failu. Saraksti blakus tekstam rāda funkcijas, ko rutīna definē, tās, ko tā izsauc un ko šis LISP vēl nezina, un visas tās funkcijas. Logs nebloķē rasējumu, tāpēc rutīna var prasīt punktus; Stop vai Esc beidz darbībā esošu rutīnu. |
| `LIST` | `LI`, `LS` | Aprakstīt objektus vēsturē |
| `LTSCALE` | `LTS` | Rasējuma līniju tipa mērogs (katrs svītriņas un atstarpes garums tiek reizināts ar to) |
| `LWDISPLAY` | `LWT` | Rādīt vai paslēpt līnijas platumus ekrānā (LWT poga statusa joslā) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Līnijas platums, ko iegūst jauni objekti (pēc slāņa, pēc bloka, noklusējums vai mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kartes slāņi zem modeļa telpas: rasējuma koordinātu sistēma, plāksnes, WMS, WMTS, ArcGIS, attēli |
| `MASSPROP` |  | MASSPROP: reģionu un slēgtu objektu šķērsgriezuma rekvizīti: laukums, perimetrs, smaguma centrs, inerces momenti un reizinājums, giracijas rādiusi un galvenās asis. Precīzs līnijām un lokiem. Var ierakstīt atskaiti teksta failā. |
| `MATCHPROP` | `MA`, `PAINTER` | Saskaņot rekvizītus: kopēt viena objekta slāni, krāsu un citu uz citiem (MA) |
| `MEASURE` | `ME` | MEASURE (ME): atzīme ik pēc dotā garuma gar līniju, loku, riņķi, polilīniju, splainu vai elipsi, sākot no gala, kas ir tuvāk jūsu izvēlei. Punkti vai, ar Bloku, bloks katrā atzīmē. |
| `MEASUREGEOM` | `MEA` | Izmērīt attālumu, rādiusu, leņķi vai laukumu (MEA) |
| `MINSERT` |  | MINSERT: ievietot bloku rindās un kolonnās vienā reizē. Katrs ir sava atsauce, tāpēc jebkuru var pārvietot vai izdzēst. |
| `MIRROR` | `MI` | Spoguļot objektus pāri līnijai |
| `MLEADER` | `MLD`, `MLEAD` | Daudzvadu norāde: bultiņa, norāde un piezīme kā viens objekts (MLD) |
| `MLEADERALIGN` | `MLA` | Izlīdzināt daudzvadu norādes ar vienu no tām vienā virzienā, vienādā attālumā vai sadalītas starp diviem punktiem (MLA) |
| `MLEADERCOLLECT` | `MLC` | Apkopot vairākas daudzvadu norādes vienā: to bloki rindā vai kolonnā, vai to piezīmes viena zem otras (MLC) |
| `MLEADEREDIT` | `MLE` | Pievienot vai noņemt norādes līnijas daudzvadu norādei; pārslēgt tās saturu starp tekstu un bloku (MLE) |
| `MLINE` |  | Zīmēt paralēlas līnijas kopā, savienotas stūros. |
| `MOVE` | `M` | Pārvietot objektus ar bāzes punktu un otru punktu |
| `MSPACE` | `MS` | Strādāt ar modeli caur lapas atvērtu skata logu (vai veikt dubultklikšķi skata logā). |
| `MTEXT` | `MT`, `T` | Rindkopas teksts: velciet tā platumu un tad rakstiet vietā; Enter sāk jaunu rindkopu (T) |
| `MVIEW` | `MV` | Skata logs uz modeli izkārtojumā |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nosauktie skati: saglabāt ekrānā redzamo skatu (vai logu) ar nosaukumu un atgriezties pie tā (NV) |
| `NCOPY` |  | Kopēt objektus no bloka atsauces vai saistīta rasējuma rasējumā, to nesadalot. |
| `NEARBY` |  | Pastāstīt, kas atrodas tuvu kursoram, vispirms tuvākais, ar attālumu un pusi. |
| `NEW` |  | Sākt jaunu rasējumu |
| `OBJECTSCALE` | `OBJSCALE` | Anotācijas mērogi anotatīvajam tekstam un izmēriem: pievienot mērogu, dzēst vienu, pievienot pašreizējo mērogu vai uzskaitīt tos (katrs skata logs tos rāda izmērā savam mērogam) |
| `OBJOUT` |  | Eksportēt 3D modeli kā OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Biroja standarts: teksta augstumi uz papīra, slāņi, titula bloka lauki un veidnes vienā ierakstā. Parāda spēkā esošo un tā avotu; Importēt .json ierakstu šajā rasējumā, pievienot rasējumam trūkstošos biroja slāņus, uzskaitīt titula bloka laukus. |
| `OFFSET` | `O` | Paralēlas kopijas noteiktā attālumā |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kā OFFSET aizver spraugas polilīnijas ārējos stūros. 0 pagarina segmentus, 1 pievieno loku, 2 pievieno taisnu nogriezumu. Saglabāts šai sesijai. |
| `OLELIST` | `OLES` | Uzskaitīt OLE objektus, ko rasējums satur, un novietot to attēla kopiju, kur izvēlaties |
| `OPEN` |  | Atvērt DWG vai DXF no šī datora |
| `OPENIN3D` |  | Atvērt šo rasējumu 3D modelēšanas lietotnē jaunā cilnē (nekas netiek augšupielādēts) |
| `OPTIONKEYS` | `OPTKEYS` | Dot komandu opcijām savus burtus (ARRAY.PO, P) vienā teksta failā |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Atvērt objektu piesaistes izvēlni: izvēlieties, kuras piesaistes ir ieslēgtas. Arī labais klikšķis uz Piesaiste statusa joslā. |
| `OVERKILL` |  | Dzēst dublētus objektus un apvienot pārklājošās vai galu pie gala esošās līnijas un lokus pielaidē. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametru panelis: lietotāja parametri un izmēru ierobežojumi vienā tabulā |
| `PARTSLIST` | `PLIST` | Detaļu saraksta tabula ar katru standarta detaļu un tērauda profilu, kas novietots no bibliotēkas |
| `PASTEAREA` | `PAREA` | Ielīmēt apgabalu, kas kopēts MarkupCraft (Kopēt apgabalu) tā patiesajā izmērā, kā attēlu. |
| `PASTEBLOCK` |  | PASTEBLOCK: ielīmēt to, ko kopējāt, kā vienu bloku. Blokam ir savs nosaukums; RENAME dod jūsu. |
| `PASTECLIP` |  | Ielīmēt starpliktuvi: tā seko kursoram, noklikšķiniet, kur tā ies (Ctrl+V) |
| `PASTEORIG` |  | Ielīmēt starpliktuvi koordinātēs, no kurām tā tika kopēta (Ctrl+Shift+V) |
| `PDF` |  | Dot CadCraft PDF failus, ko rasējuma pamatnes izmanto |
| `PDFADJUST` |  | Izbalēt, kontrastēt, monohromi vai izslēgt PDF pamatni |
| `PDFATTACH` | `PDFATT` | Pievienot PDF lapu kā pamatni (PDFATTACH) |
| `PDFCLIP` |  | Apgriezt PDF pamatni taisnstūrī vai daudzstūrī |
| `PDFIMPORT` | `PDFIM` | Pārvērst PDF lapas līnijas, aizpildījumus un tekstu rasējuma objektos (PDFIMPORT) |
| `PDFLAYERS` |  | Ieslēgt vai izslēgt PDF pamatnes slāņus |
| `PEDIT` | `PE` | Rediģēt polilīniju: slēgt, atvērt, savienot, platums, piemērot līknei, splaina līkne, atlīkšķināt, līniju tipa ģenerēšana, apgriezt; līnijas, lokus un splainus var pārvērst polilīnijās |
| `PENPRESSURE` |  | Vai pildspalvas vilciena spiediens iestata to, ko SKETCHFIX un SKETCHLIVE izveido, līnijas platumu (pēc noklusējuma ieslēgts). Glabājas šajā pārlūkprogrammā. |
| `PHOTOSKETCH` | `PSK` | Pārvērš skices fotoattēlu uz papīra līnijās un lokos noteiktā mērogā, iztaisnojot perspektīvu un piešķirot katrai pildspalvas krāsai savu slāni. |
| `PICKSTYLE` |  | PICKSTYLE: vai, atlasot vienu grupas objektu, tiek atlasīta visa grupa (1, sākuma iestatījums) vai tikai šis objekts (0). Saglabāts šai sesijai. |
| `PLAN` |  | Pagriezt skatu tā, lai UCS X ass (pašreizējā ucs, saglabāta Ucs vai pasaules) būtu horizontāla ekrānā. Nekas rasējumā nepārvietojas. |
| `PLINE` | `PL` | Polilīnija no līniju un loku segmentiem |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Drukāt PDF: lapa vai modelis noteiktā mērogā |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Drukas stila tabulas: iestatīt, kā katra krāsa drukājas (krāsa, melna, pelēka, tinte, līnijas platums); glabājas kopā ar rasējumu (STYLESMANAGER) |
| `POINT` | `PO` | Punktu objekti |
| `POINTCLOUD` | `PC` | pievienotais punktu mākonis: griezums, augstums, biezums, krāsa, izmērs, redzams, tālummaiņa, atvienot |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | pievienot punktu mākoni (LAS, LAZ, XYZ, PTS) zem rasējuma |
| `POLARANG` |  | Polārās izsekošanas solis grādos (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Regulārs daudzstūris |
| `PRESSPULL` |  | Spiest vai vilkt cieta ķermeņa virsmu (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Atvērt Rekvizītu paneli (arī Ctrl+1 vai dubultklikšķis uz objekta) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Salocīt Rekvizītu paneli līdz loga malai |
| `PSPACE` | `PS` | Atstāt skata logu, kurā strādājat, un atgriezties lapā (vai veikt dubultklikšķi ārpus tā). |
| `PUBLISH` | `-PUBLISH` | Drukāt vairākas vai visas lapas vienā PDF (lapa un grāmatzīme katrai lapai) |
| `PURGE` | `PU` | Noņemt bloku definīcijas, ko nekas neizmanto |
| `QDIM` |  | Ātrs izmērs: izmērīt vairākus objektus vienlaikus (nepārtraukts, bāzes, pakāpenisks, koordinātu, rādiuss vai diametrs) |
| `QPMODE` | `QP` | Ātrās rekvizīti ar kursoru ieslēgti vai izslēgti |
| `QSELECT` | `QS` | Ātrā atlase: visi veida objekti, kuru slānis, krāsa, izmērs vai nosaukums atbilst (QS) |
| `RASTERSNAP` |  | Ieslēgt vai izslēgt piesaisti skenētu lapu līnijām. |
| `RAY` |  | Stars: palīglīnija no punkta, bezgalīga vienā virzienā. |
| `RECOVER` |  | Atver bojātu DXF vai DWG: izlaiž to, ko nevar nolasīt, nevis noraida failu, pasaka, kas izlaists, un pēc tam pārbauda un labo rasējumu kā AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Slēgta polilīnija no diviem stūriem |
| `REDLINE` | `RDL` | Atzīmes uz pārskatījumu: nolasīt MarkupCraft atzīmju paketi, pieņemt vai noraidīt katru izmaiņu, apvilkt pieņemtās ar pārskatījuma žurnālu un saglabāt atbilžu failu (RDL) |
| `REDO` |  | Atkārtot to, kas tika atsaukts |
| `REFCLOSE` |  | Pabeigt bloka rediģēšanu vietā: saglabāt to vai atmest izmaiņas |
| `REFEDIT` |  | Rediģēt bloku vietā, kur atrodas tā atsauce, ar pārējo rasējumu izbalējušu; REFCLOSE saglabā |
| `REGEN` | `RE` | Atjaunot to, kas zīmēts šajā cilnē, no rasējuma |
| `REGENALL` | `REA` | Atjaunot to, kas zīmēts katrā cilnē, logā un atvērtajā rasējumā |
| `REGION` | `REG` | REGION (REG): izveidot plakanus laukumus (reģionus) no slēgtiem objektiem vai no līnijām, lokiem un polilīnijām, kas aizveras cilpā gala pie gala. UNION, SUBTRACT un INTERSECT tad apvieno reģionus, un MASSPROP dod to šķērsgriezuma rekvizītus. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Reģistrēt vairākus skenējumus: novietot tos vienā rāmī pēc izvēlētiem punktu pāriem vai mērķiem, precizēt ar ICP, eksportēt vienu LAS vai E57 |
| `REINIT` |  | Atkārtoti ielādēt jūsu aliasu failu |
| `RENAME` | `-RENAME`, `REN` | Pārdēvēt slāni vai bloku (visi objekti vai atsauces seko) |
| `REVCLOUD` | `RC` | Pārskatījuma mākonis: apvilkt taisnstūri, daudzstūri, brīvroku ceļu vai objektu (RC) |
| `REVOLVE` | `REV` | Pagriezt slēgtus 2D objektus ap asi cietos ķermeņos (3D) |
| `ROTATE` | `RO` | Pagriezt objektus ap bāzes punktu |
| `SAMPLES` | `SAMPLE` | Atvērt vienu no CadCraft paraugrasējumiem (arhitektūras komplektu, izpilddokumentāciju), lai mācītos |
| `SAVE` | `QSAVE` | Lejupielādēt rasējumu tā formātā (DWG vai DXF) |
| `SAVEAS` |  | Lejupielādēt rasējumu kā DWG vai DXF: izvēlieties, kuru |
| `SAYSEL` |  | Pateikt, kas ir atlasīts, pa vienam teikumam katram. |
| `SCALE` | `SC` | Mērogot objektus ap bāzes punktu |
| `SCALELISTEDIT` | `SCALELIST` | Pievienot, rediģēt un dzēst rasējuma pašus mērogus; tie parādās skata logu un drukas mērogu sarakstos un tiek saglabāti failā (SCALELIST) |
| `SCANALIGN` | `SCL` | Izlīdzināt skenētu lapu ar diviem punktiem: pārvietot, pagriezt un, ja izvēlaties, mērogot. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Ievietot skenētu rasējumu: PNG, JPEG vai TIFF (viena lapa vai visas daudzlapu faila lapas) vai PDF lapu, kas ir attēls. |
| `SCANCLEAN` | `SCC` | Padarīt skenēto lapu melnbaltu un noņemt traipus. |
| `SCANCROP` | `SCR` | Apgriezt skenētu lapu līdz logam. |
| `SCANDESKEW` | `SCD` | Atrast leņķi, kādā skenētās lapas garās līnijas atrodas, un pagriezt lapu taisni, kad pieņemat leņķi. |
| `SCANERASE` | `SCE` | Izdzēst skenētas lapas laukumu: taisnstūri, daudzstūri vai lasso. |
| `SCANINFO` | `SCI` | Parādīt skenētās lapas sākotnējo failu un kopš tā laika veiktos soļus. |
| `SCANSCALE` | `SCS` | Mērogot skenētu lapu: izvēlieties divus punktus uz tās un ierakstiet patieso attālumu starp tiem. |
| `SCANTRACE` | `SCT` | Apvilkt skenētu lapu līnijās un lokos jaunā slānī ar jūsu noteikto pielaidi. Teksts un svītrojums paliek kā rastrs. |
| `SELECT` |  | Atlasīt objektus tagad (P, Iepriekšējais, nākamajā komandā) |
| `SELECTALL` | `AI_SELALL` | Atlasīt katru objektu, ko var rediģēt šajā cilnē (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Atlasīt katru objektu, kāds ir jūsu izvēlētie: tas pats tips, slānis un krāsa (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Rāda Lapu kopas paneli: lapas no daudziem rasējumiem, numurētas, publicētas kā viens PDF. |
| `SHORTCUTS` | `KEYS` | Piešķirt jebkurai komandai savu taustiņu (Ctrl vai Alt ar burtu vai brīvu funkcijas taustiņu), glabājas šajā pārlūkprogrammā vai darbvirsmas lietotnē. |
| `SHXFONTS` | `SHX` | Dot CadCraft SHX fontus no mapes vai failiem, lai teksta stili, kas tos nosauc, zīmētos tajos (uzskaitīt, noņemt, apgriezt) |
| `SKETCHFIX` | `SKF` | Zīmēt brīvroku vilcienus; katrs kļūst par tīru līniju, riņķi, loku, taisnstūri vai polilīniju, nostādīts taisni un savienots ar citiem. |
| `SKETCHLIVE` | `SKL` | Skicēt ar pildspalvu: katrs vilciens kļūst par precīzu līniju, riņķi, loku vai taisnstūri, kad paceļat pildspalvu, piesaistīts rasējumam, ar izmēru, ko var pārrakstīt. |
| `SPLINE` | `SPL` | Zīmēt splainu caur punktiem (vai ar kontroles daudzstūri) vai pārvērst polilīniju par to |
| `SPLINEDIT` | `SPE` | Rediģēt splainu: piemērot punktus, kontroles punktus un svarus, atvērt vai aizvērt, apgriezt vai pārvērst polilīnijā |
| `SPLIT` |  | Sadalīt zīmēšanas laukumu logos (kā VPORTS modelī; arī no lapas) |
| `STEELMEMBER` | `SMEMBER` | Tērauda elements 3D no standarta profila: divi punkti (sija) vai bāzes punkts un augstums (Kolonna) |
| `STLOUT` |  | Eksportēt 3D modeli kā STL (milimetros) |
| `STRETCH` | `S` | Izstiept: vilkt krustojošu logu pāri galiem, lai pārvietotu; iekšā esošais pārvietojas, pārējais paliek (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Teksta stili: fonts, augstums, platums un slīpums, ko jaunais teksts ņem (dialogs; -STYLE komandrindā) |
| `SUBTRACT` | `SU` | Atņemt cietos ķermeņus no citiem (3D) vai 2D reģionus no reģioniem |
| `SWBOUT` | `SWMACRO` | Lejupielādēt SolidWorks makro (.swb), kas atjauno modeli kā vienu ierobežotu skici |
| `SWEEP` |  | Pārvilkt slēgtus 2D objektus gar ceļu (līniju, polilīniju, loku, riņķi) cietos ķermeņos (3D) |
| `TABLE` | `TB` | Izveidot tabulu: rindas un kolonnas vai no izklājlapas šūnām starpliktuvē vai CSV failā |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Rediģēt tabulu: rakstīt šūnā, ievietot un dzēst rindas un kolonnas, izmērus, apvienotas šūnas, izlīdzinājumu |
| `TABLEEXPORT` |  | Saglabāt to, ko tabula rāda, kā CSV failu |
| `TABLEPASTE` | `PASTETABLE` | Izveidot tabulu no izklājlapas šūnām starpliktuvē |
| `TABLESTYLE` | `TS` | Tabulu stili: teksta augstumi, izlīdzinājums, rāmji un apmales virsrakstam, galvenei un datu rindām |
| `TAGS` |  | Birkas bloku atsaucēs: definēt birku (veids, atļautās vērtības, bloki, kuriem tā attiecas), iestatīt to atlasītajām atsaucēm un uzskaitīt tās kā grafiku, ko var saglabāt kā CSV |
| `TEXT` | `DT`, `DTEXT` | Vienrindas teksts; Enter sāk nākamo rindu |
| `TEXTEDIT` | `ED`, `DDEDIT` | Rediģēt tekstu vietā: izvēlieties tekstu (vai veiciet dubultklikšķi) (ED) |
| `TEXTMASK` | `TMASK` | Likt fona masku aiz teksta (rasējuma fons vai krāsa) vai to noņemt. |
| `TEXTTOFRONT` |  | Novietot visu tekstu, izmērus un norādes priekšā visam pārējam. |
| `TOOLBAR` |  | Izvēlieties, ko rāda rīkjoslas pogas: ikonas un tekstu, tikai ikonas vai tikai tekstu (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Novietot rīkjoslu loga augšā, apakšā, kreisajā vai labajā malā |
| `TOOLBARROWS` |  | Izvēlēties, cik rindas izmanto rīkjosla: ietīt, lai ietilptu, 2 vai 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Padarīt joslas virs rasējuma standarta vai kompaktas |
| `TOUCHCROSSHAIR` | `TCX` | Nobīdīts krusts zīmēšanai ar pirkstu: viens pirksts pārvieto krustu, kas atrodas virs un blakus tam, tāpēc pirksts neaizsedz izvēlēto punktu. Pacelot pirkstu neko neizvēlas; poga Click vai pieskāriens ar otru pirkstu izvēlas krusta vietā, un turot Click, kamēr pārvietojat, velk. Ilgs turēšanas nospiedums vai poga Enter ir Enter. Divi pirksti panoramē un tālummaina. Opcijas: ON, OFF, Auto (ieslēgts tikai tad, kad pirksts ir vienīgais rādītājs), Distance, Side. |
| `TOUR` | `TUTORIAL` | Sākt sešu soļu pirmā rasējuma apmācību vēlreiz |
| `TRIM` | `TR` | Apgriezt objektus līdz vietai, kur tos krusto citi: noklikšķiniet uz gabala, velciet cauri vairākiem vai Shift+klikšķis, lai pagarinātu |
| `TRIMEXTENDMODE` |  | Kā TRIM un EXTEND sākas: 1 Ātri (katrs objekts ir griezšanas mala vai robeža), 0 Standarta (vispirms izvēlieties malas) |
| `TTR` |  | Riņķis, kas pieskaras diviem objektiem, ar rādiusu, ko dodat (tas pats, kas CIRCLE T). |
| `TURNLEFT` |  | Pagriezt skatu par 90° pa kreisi (pretēji pulksteņrādītāja virzienam): UCS Z -90, un skats seko. Nekas rasējumā nepārvietojas. |
| `TURNRIGHT` |  | Pagriezt skatu par 90° pa labi (pulksteņrādītāja virzienā): UCS Z 90, un skats seko. Nekas rasējumā nepārvietojas. |
| `TURNWORLD` |  | Atpakaļ pasaulē: UCS World, un skats atkal ir horizontāls. |
| `TXT2MTXT` | `T2M` | Apvienot vienrindas tekstus vienā rindkopas tekstā, no augšas uz leju. |
| `UCS` |  | Jūsu pašu koordinātu sistēma: sākumpunkts un X ass (origin, Z leņķis, 3point, OBject, Previous, World, NAmed). Ierakstītie punkti, ortho, polārā izsekošana, režģis un jaunais teksts seko tai; skats pagriežas tā, ka tās X ass ir horizontāla. Nekas rasējumā nepārvietojas. |
| `UNDO` | `U` | Atsaukt pēdējo komandu |
| `UNGROUP` |  | UNGROUP: izjaukt grupas. Atlasiet grupu objektus vai dodiet Nosaukumu. Objekti paliek rasējumā. |
| `UNION` | `UNI` | Apvienot cietos ķermeņus vienā (3D) vai 2D reģionus vienā reģionā |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Atkal parādīt katru objektu, ko paslēpa ISOLATEOBJECTS vai HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kā tiek rādīti un ierakstīti garumi: decimālie, pēdas un collas, daļskaitļi (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Atkal aprēķināt laukus un izvēlēties, kad tie atjaunojas paši |
| `USDOUT` |  | Eksportēt 3D modeli kā USD (.usda teksts, .usdc binārs vai .usdz pakete) |
| `VIEW` | `-VIEW`, `V` | Standarta 3D skati, perspektīvā vai paralēli (3D) |
| `VIEWBASE` | `FLATSHOT` | Novietot plakanu 2D cieto ķermeņu skatu 3D cilnē (priekšā, augšā, sānā vai izometriski, paslēptas līnijas punktētas) lapā vai modelī |
| `VIEWLABEL` | `VL` | Skata nosaukums lapā, kas rāda tā skata loga skata nosaukumu un mainās kopā ar to. |
| `VOICE` |  | Ieslēgt vai izslēgt balss komandas. Tās tiek atpazītas šajā datorā. |
| `VPCLIP` |  | Apgriezt lapas skata logu slēgtam objektam vai zīmētam daudzstūrim; Delete padara to atkal par taisnstūri |
| `VPLAYER` |  | Iesaldēt vai atsaldēt slāņus tikai dažos skata logos (Freeze, Thaw, Reset) un izvēlēties, kuri slāņi jaunos skata logos sākas iesaldēti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Sadalīt zīmēšanas laukumu logos, katrs ar savu skatu (lapā: skata logs, kā MVIEW) |
| `VPVIEW` |  | Iestatīt, ko rāda skata logs: izvēlieties logu uz modeli |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D skata vizuālais stils: nokrāsots, malas, paslēpta līnija, rāmis, rentgens |
| `WALL` | `WA` | Zīmēt 2D sienas kā polilīniju. Tās savienojas un nes durvis un logus. |
| `WALLARC` | `WARC` | Zīmēt sienu loku. Plāna sienas ir taisnas, tāpēc loku zīmē kā īsas taisnas sienas (katra 15 grādi), kas savienojas. |
| `WALLDELSEG` |  | Izdzēst sienas gabalu starp diviem punktiem. Atlikušais paliek kā viena vai divas sienas. |
| `WALLDIM` |  | Ierakstīt jaunu izmēra vērtību: siena tā tālākajā galā pārvietojas kvadrātā pret sevi, siena pirmajā galā paliek, un ar to savienotās sienas seko. |
| `WALLDISJOIN` |  | Izvēlēties sienu tuvu vienam galam, lai neļautu savienojumus tajā galā: gals tiek zīmēts taisns, un nekas tam neseko. Izvēlieties to vēlreiz, lai atļautu. |
| `WALLGRID` |  | Bloķēt sienu pie režģa līnijas: gar to vai ar vienu galu uz tā. Pārvietojiet līniju ar GRIDMOVE, un siena seko. |
| `WALLHOLD` |  | Izlīdzināt un bloķēt: siena saglabā savu vietu attiecībā pret citu sienu (uz tās līnijas vai attālumā, kādā tā ir). Ja viena pārvietojas, otra seko. |
| `WALLHOLDDIM` |  | Bloķēt attālumu starp divām paralēlām sienām. Ja viena pārvietojas, otra seko, lai to saglabātu. |
| `WALLHOLDS` |  | Uzskaitīt bloķējumus pie sienām. |
| `WALLJOINS` |  | Piešķirt katrai vecāka rasējuma sienai tās ID un saglabāt savienojumus starp tām. Tas notiek arī pie pirmās izmaiņas, ko veicat. |
| `WALLJOINSTYLE` |  | Noklikšķiniet uz stūra, kur divas sienas satiekas gals pie gala, lai mainītu, kā tas zīmējas: slīpgriezums, taisns, nogriezt taisni. T pārslēdz, kura siena iet cauri. |
| `WALLOFFSET` | `WO` | Pārvietot sienu kvadrātā pret sevi par attālumu (ar to savienotās sienas seko) vai izveidot kopiju tajā attālumā. |
| `WALLPICK` |  | Izveidot sienas uz līnijas vai polilīnijas rasējumā, ar tai pievienotām līnijām, ja sakāt Yes. |
| `WALLPOLY` | `WP` | Zīmēt sienas ap regulāru daudzstūri no 3 līdz 64 malām, kā POLYGON. |
| `WALLRECT` | `WR` | Zīmēt četras savienotas sienas no diviem pretējiem stūriem, kā RECTANG. |
| `WALLREJOIN` |  | Padarīt divas sienas daļas atkal par vienu sienu. Pirmā saglabā savu vietu rasējumā. |
| `WALLROT` |  | Zīmēt četras savienotas sienas kā taisnstūri, pagrieztu jebkurā leņķī: pirmā mala, tad cik tālu iet otra. |
| `WALLSPLIT` | `WS` | Sadalīt sienu divās daļās punktā vai tur, kur krusto cita siena. Daļas paliek savienotas, ja nelūdzat spraugu vai brīvus galus. Durvis un logi iet kopā ar savu daļu. |
| `WALLSPLITGAP` |  | Sadalīt sienu, atstājot spraugu: ierakstiet spraugu, izvēlieties sienu, tad punktu. Daļām ir brīvi gali, un tās var atkal savienot. |
| `WALLSTRETCH` |  | Izstiept ar logu: sienu galu, kas tajā atrodas, pārvietojas, sienas, kas ir pilnībā iekšā, pārvietojas veselas, un sienas, kas atsitas pret to sāniem, slīd kopā ar tām. |
| `WALLTAN` |  | Turpināt sienu ar loku, kas no tās aiziet gar sienu (zīmēts kā īsas taisnas sienas). |
| `WALLTRACE` |  | Izveidot sienas ap mazāko slēgto laukumu no līnijām un sienām ap punktu, uz kuru noklikšķināt. |
| `WALLUNHOLD` |  | Noņemt bloķējumus no sienas (un citu sienu bloķējumus pret to). |
| `WBLOCK` | `W`, `-WBLOCK` | Ierakstīt bloku, dažus objektus vai visu rasējumu jaunā DWG vai DXF failā (W) |
| `WEDGE` | `WE` | Ķīlis: divi stūri un augstums; tas slīpst prom no pirmā stūra (3D) |
| `WHEREAMI` | `WHERE` | Pateikt, kur atrodas kursors. |
| `WHOHAS` |  | Pateikt, kurš ir atvēris rasējumu. CadCraft Studio glabā mazu bloķēšanas failu blakus katram atvērtam rasējumam (Plan.dwg.cclock: kurš, kopš kura laika, kura versija) un noņem to aizverot. Opcijas: Current (atvērtais rasējums), File (izvēlēties vienu), FOlder (katrs rasējums mapē, kas ir kaut kur atvērts; tas arī ļauj Studio glabāt bloķēšanas failus mapē), Path (ierakstīt vienu), Name (vārds, ko redz citi). Bloķējums, kas nav atsvaidzināts piecas minūtes, tiek uzskatīts par novecojušu. Pārlūkprogrammā nav pieejams. |
| `WINDOW` | `WN` | Ievietot logu sienā. |
| `XATTACH` | `XA` | Saistīt citu DWG vai DXF šim rasējumam; tas tiek rādīts tikai lasīšanai (XREF tos uzskaita un atkārtoti ielādē) |
| `XCLIP` | `XC` | Apgriezt bloku atsauces un saistītos rasējumus taisnstūrī vai daudzstūrī vai noņemt apgriezumu. |
| `XLINE` | `XL` | Konstrukcijas līnija, bezgalīga abos virzienos: caur diviem punktiem, horizontāla, vertikāla, noteiktā leņķī, leņķa bisektrise vai nobīdīta no līnijas. |
| `XREF` | `XR`, `-XREF` | Saistītie rasējumi (ārējās atsauces): uzskaitīt, pievienot, atkārtoti ielādēt, saistīt, atvienot |
| `ZOOM` | `Z` | Robežas vai logs |
