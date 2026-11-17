---
title: Komandu karte: ko ierakstīt
summary: Katra CadCraft komanda ar īsajiem nosaukumiem, sakārtota no A līdz Z, izveidota no pašas programmas, un paradumi no citām rasēšanas programmām, kas atšķiras.
keywords: komandu karte, komandas, aizstājvārdi, īsie nosaukumi, no citām programmām, komandu saraksts, ko ierakstīt, dzēst, apgriezt, ekvivalents, atšķirības
from: 3bdfd3e6
---

CadCraft pieņem komandu nosaukumus un īsos nosaukumus, ko cilvēki zina no citām rasēšanas programmām: ierakstiet `L` līnijai, `TR` apgriešanai, `E` dzēšanai. Tātad lielākajai daļai komandu nav jāmācās nekāda tulkojuma tabula: nosaukums, ko jūs zināt, ir tas pats arī šeit. Tālāk ir visas CadCraft komandas, izveidotas no pašas programmas. {{key:Enter}} atkārto pēdējo komandu; `HELP` komandrindā izdrukā to pašu sarakstu.

Dažas no tām nav tādas pašas vai vēl nav izveidotas:

- **Save** lejupielādē kopiju pārlūkprogrammā ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studio tas ieraksta failu. Skatiet [No citas rasēšanas programmas](topic:coming-from).
- **PLOT** izveido PDF (arī PNG un SVG) ar drukas stilu tabulu; lapas iestatījumu pārvaldnieka nav.
- **DIMSTYLE** un **PEDIT** ir izveidotas; **PEDIT** nav virsotņu rediģēšanas opcijas (to dara rokturi).
- **TABLE** nav izveidota; {{cmd:XREF}}, {{cmd:SPLINE}} un {{cmd:WBLOCK}} ir.
- Rutīnas paša komandas (AutoLISP `C:NAME`) parādās pēc tās ielādes ar {{cmd:APPLOAD}}; tās šeit nav uzskaitītas.

## Visas komandas (398)

| Komanda | Īsie nosaukumi | Ko tā dara |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Griezt 3D skatu ar kreiso pogu |
| `ACCESS` | `AX` | Ieslēgt vai izslēgt zīmēšanu bez redzes: rezultāti tiek runāti caur ekrāna lasītāju, tastatūras kursors rasējumā, piesaistes skaņas un runātas komandas. |
| `ALIASEDIT` |  | Rediģēt komandu aizstājvārdus vienā teksta failā (pazīstamais L, *LINE formāts) |
| `ALIGN` | `AL` | Pārvietot un pagriezt objektus tā, lai avota punkti nonāktu galamērķa punktos (viens, divi vai trīs pāri), un, ja vēlaties, mērogot tos |
| `ALIGNPANEL` | `ALP` | Atvērt Izlīdzināšanas un sadalīšanas paneli |
| `ALIGNTO` |  | Izlīdzināt atlasīto objektu kreisās, centra, labās, augšējās, vidējās vai apakšējās malas: pēc atlases, pirmā vai pēdējā izvēlētā objekta vai pēc punkta |
| `ANNOALLVISIBLE` | `ANNOALL` | Rādīt anotatīvos objektus katrā mērogā vai tikai tur, kur skatu loga (vai rasējuma) mērogs ir to sarakstā |
| `ANNOSCALE` | `CANNOSCALE` | Iestatīt rasējuma anotācijas mērogu: anotatīvais teksts un izmēri tiek mainīti tā, lai drukājot būtu vienāds izmērs |
| `APPLOAD` | `AP` | Ielādēt lietojumprogrammas: LISP rutīnas (.lsp) un to dialoglodziņu failus (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Loks: 3 punkti, Sākums/Centrs/Beigas, Sākums/Centrs/Leņķis, Sākums/Centrs/Garums, Sākums/Beigas/Leņķis, Sākums/Beigas/Virziens, Sākums/Beigas/Rādiuss, Centrs/Sākums/Beigas, Centrs/Sākums/Leņķis, Centrs/Sākums/Garums, Turpināt |
| `AREA` | `AA` | Laukums un perimetrs pēc punktiem vai objekta; Pievienot un Atņemt uztur kopējo summu (AA) |
| `ARRAY` | `AR` | Kopijas rindās un kolonnās vai apļveidā ap centru (AR) |
| `ARRAYASSOCIATIVITY` |  | Nosaka, vai ARRAY komandas veido masīvus, ko var rediģēt (1), vai vienkāršas kopijas (0) |
| `ARRAYCLOSE` |  | Beigt masīva avota objektu rediģēšanu |
| `ARRAYEDIT` |  | Mainīt masīvu, kas izveidots ar Asociatīvo opciju: skaits, attālums, avota objekti, viens vienums |
| `ARRAYPATH` |  | Objektu kopijas gar līniju, loku, polilīniju vai citu līkni |
| `ARRAYPOLAR` |  | Kopijas apkārt centra punktam |
| `ARRAYRECT` |  | Kopijas rindās un kolonnās |
| `ASBUILT` | `ASB` | ASBUILT nolasa uzmērīšanas brigādes izmērītos faktiskos (as-built) punktus (CSV / TXT, kā tos raksta EXPORTPOINTS) un salīdzina ar rasējuma punktiem: iekšā vai ārpus pielaides, nav izmērīti, papildu. Atzīmē tos slānī AS-BUILT un lejupielādē CSV atskaiti. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definēt atribūtu (birku, par kuru bloks prasa vērtību), ko ievietot blokā (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Rediģēt bloka atsauces atribūtu vērtības komandrindā, vienu pēc otras (Enter saglabā vērtību) |
| `ATTSYNC` |  | Saskaņot bloka atsauces ar tā atribūtu definīcijām: jaunās pievieno ar noklusējuma vērtībām, noņemtās izmet, pozīcijas un teksts tiek atiestatīti; vērtības saglabājas |
| `AUDIT` |  | Pārbauda atvērto rasējumu bojājumiem: skaitļi, kas nav ierobežoti, objekti bez izmēra, trūkstoši slāņi, bloki, stili un līniju tipi, bloki, kas satur paši sevi, kopīgi ID, bojāti izmēri un svītrojumi. Uzskaita atrasto pēc veida un pirms labošanas jautā; labojums ir viens atsaukšanas solis. |
| `AUNITS` | `ANGUNITS` | Kā tiek rādīti un ievadīti leņķi: decimālie grādi, grādi-minūtes-sekundes vai virzieni, piemēram, N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Rasējuma automātiskā aizpildīšana ieslēgta vai izslēgta, vai uzskaitīt, ko rasējuma šabloni šobrīd piedāvā. |
| `AUTOCONSTRAIN` |  | Pievienot sakrītības, horizontālos un vertikālos ierobežojumus tur, kur ģeometrija jau ir tuvu |
| `AUTODIM` | `ADIM` | Dimensionēt pēc noteikumiem: kopējais izmērs, ķēdes pa malām, atveres, caurumu diametri un režģa solis, neatkārtojot jau dimensionēto. |
| `AUTOSHEET` | `ASH` | Izkārto lapas pašas: izvēlas papīru un standarta mērogus un novieto katru skatu ar parakstu un titulblokā. |
| `BATTMAN` |  | Bloka atribūtu pārvaldnieks: bloka atribūtu kārtība, birkas, uzvednes, noklusējumi un režīmi, pēc tam atjauninātas tā atsauces |
| `BCLOSE` |  | Aizvērt bloku redaktoru: saglabāt bloku vai atmest izmaiņas |
| `BCONVERT` |  | BCONVERT atrod atkārtotu ģeometriju un pārvērš to bloku atsaucēs. Atlasiet atkārtotos objektus: tiek atrasta katra cita objektu kopa atvērtajā telpā, kas ir tā pati ģeometrija, pārvietota un pagriezta jebkurā leņķī; ar ieslēgtu Spoguļoto vai Mērogoto tiek atrasti arī spoguļattēli un kopijas citā izmērā. Dodiet jaunajam blokam nosaukumu un bāzes punktu; atlase un katra kopija kļūst par atsaucēm uz to, katra ar savu pagriezienu un mērogu. Vai izvēlieties Bloks un nosauciet esošu bloku, lai atrastu brīvas tā objektu kopijas. Kopijai jābūt tādam pašam slānim, krāsai, līniju tipam un līniju biezumam, ja vien Rekvizīti nav iestatīts uz Ignorēt. Objekti bloķētos slāņos paliek neskarti. Viens atsaukšanas solis. |
| `BEDIT` | `BE` | Bloku redaktors: rediģēt bloka objektus un atribūtus; BCLOSE saglabā (BE) |
| `BLEND` |  | BLEND: splains starp divu atvērtu līkņu galiem, izvēloties punktus tuvu galiem, lai savienotu. Nepārtrauktība (CON): Tangenss (T) seko abiem virzieniem, Gluds (S) seko arī to izliekumam. |
| `BLOCK` | `B`, `BMAKE` | Izveidot bloku no objektiem (tie kļūst par vienu atsauci) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: katra viena bloka atsauce kļūst par atsauci uz citu, tajā pašā vietā ar tādu pašu mērogu un pagriezienu. Abu bloku kopīgo atribūtu vērtības tiek saglabātas. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE parāda Bloku paneli ar kursoru tā filtrā. Panelis rāda katra bloka attēlu (vispirms pēdējos ievietotos), kā sarakstu vai režģi; noklikšķiniet uz attēla vai velciet to uz rasējuma, lai ievietotu bloku ar INSERT. Sadaļā Bibliotēkas pievienojiet savu DWG vai DXF failu: tā bloki tiek uzskaitīti ar attēliem un kopēti šajā rasējumā, kad tos ievietojat. CadCraft Studio var pievienot arī rasējumu mapi, un faili un mapes tiek atcerēti. |
| `BOMEDIT` | `BOMCOLUMNS` | Materiālu saraksta tabulas kolonnas, grupēšana, kārtošana, nosaukums, kopsummas un piezīmes |
| `BOMEXPORT` |  | Saglabāt materiālu saraksta tabulu kā .csv failu |
| `BOMTABLE` | `BOM` | Materiālu saraksta tabula dzīvā režīmā vienai zonai vai visam rasējumam |
| `BOMUPDATE` |  | Atjaunot visas materiālu saraksta tabulas tagad, arī iesaldētās |
| `BOMZONE` | `BZONE` | Nosaukta rasējuma daļa materiālu sarakstam: divi stūri, daudzstūris vai slēgta objekta kontūra |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): izvēlieties punktu slēgta laukuma iekšienē un iegūstiet slēgtu polilīniju ap to. Loki paliek loki. Islands iezīmē arī laukumus tajā iekšienē. |
| `BOX` |  | Kaste: divi stūri un augstums (3D) |
| `BPARAMETER` | `BPARAM` | Vēl nav izveidots: parametra (piemēram, Redzamība) pievienošana blokam. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Bloku parametri: nosaukti parametri ar formulām un vairāki redzamības parametri vienā blokā. Darbojas bloku redaktorā (piešķirt atlasītos objektus stāvoklim) un uz atlasītas atsauces (tās pašas vērtības un stāvokļi). |
| `BREAK` | `BR` | Pārtraukt līniju, loku, riņķi vai polilīniju starp diviem punktiem (BR) |
| `BREAKATPOINT` |  | Sadalīt līniju, loku vai polilīniju divās daļās punktā |
| `BREAKLINE` |  | Zīmēt līniju ar pārtraukuma simbolu; tās izmērs un pagarinājums aiz galiem tiek atcerēts. |
| `BREPLACE` |  | BREPLACE aizvieto vienu bloku ar citu. Atlasītie: izvēlieties bloku atsauces un nosauciet lietojamo bloku. Visi: nosauciet bloku un tā aizstājēju, un katra atsauce katrā telpā un citos blokos mainās. Atsauce saglabā savu vietu, mērogu, pagriezienu un slāni, kā arī to atribūtu vērtības, kas ir abiem blokiem; vērtības, kurām jaunajam blokam nav vietas, tiek izmestas un nosauktas. |
| `BSEARCH` |  | BSEARCH atrod blokus. Nosaukums: daļa no bloka nosaukuma vai šablons ar * un ?. Atribūts: vērtība (vai TAG=vērtība), ko satur atsauces atribūti. Ģeometrija: atlasiet objektus vai vienu bloka atsauci, un tiek uzskaitīti bloki, kuru forma ir vismaz 85% līdzīga, labākais pirmais; izmērs, pagrieziens un spoguļošana netiek skaitīti. Atrastās atsauces atvērtajā telpā tiek atlasītas nākamajai komandai. |
| `BURST` |  | Sadalīt bloku atsauces un saglabāt to, ko saka to atribūti: katra vērtība kļūst par tekstu atribūta slānī. |
| `BVHIDE` | `BVH` | Bloku redaktorā: paslēpt objektus pašreizējā redzamības stāvoklī. |
| `BVSHOW` | `BVSH` | Bloku redaktorā: rādīt objektus, ko pašreizējais redzamības stāvoklis paslēpj (tie rādās izbalējuši, lai tos varētu izvēlēties). |
| `BVSTATE` | `BVS` | Bloku redaktorā, blokam ar redzamības stāvokļiem: pārslēgt uz stāvokli vai pievienot, pārdēvēt vai dzēst vienu. |
| `CAL` |  | Aprēķināt garumu vai skaitli: + − * / un iekavas, kā tos rakstāt jebkurā vietā |
| `CENTERLINE` | `CL` | Centra līnija starp divām līnijām: pa vidu starp tām vai pa bisektrisi, ja tās saskaras (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Centra zīme: krusts riņķa vai loka centrā ar centra līnijām, kas iet nedaudz tālāk (CM) |
| `CHAMFER` | `CHA` | Nošķelt stūri starp divām līnijām (D divi attālumi, A garums un leņķis, P katrs polilīnijas stūris) |
| `CHSPACE` |  | CHSPACE: pārvietot objektus starp lapu un modeli caur skatu logu. Tie tiek mērogoti un pagriezti, lai izskatītos vienādi no otras puses. Lapā tie iet uz modeli; strādājot caur skatu logu (MSPACE), tie nonāk lapā. |
| `CIRCLE` | `C` | Centrs un rādiuss, diametrs, 2 vai 3 punkti |
| `CLASS` |  | Ievietot atlasītos objektus klasē, vai bez atlases iestatīt aktīvo klasi (? uzskaita tās) |
| `CLASSES` | `CLS` | Klašu panelis: klases sakārto objektus pa slāņiem; rādīt, paslēpt un noformēt tās, un pārrakstīt tās katrā skatu logā (CLS) |
| `COMMANDLINE` | `CMDLINE` | Piestiprināt vai atdalīt komandrindu, padarīt to vienrindas, iestatīt tās vēstures rindas vai atvērt vēsturi (F2) |
| `COMPARESETTINGS` | `CMPSET` | Salīdzināt izmēru stilus, teksta stilus, slāņus, lapas vai vienības: divus šajā rasējumā vai šo rasējumu ar citu atvērtu, un nokopēt vērtību. |
| `CONSTRAINTBAR` | `CBAR` | Rādīt vai paslēpt ierobežojumu joslas (Rādīt visu / Paslēpt visu vai pa objektiem) |
| `COPY` | `CO`, `CP` | Kopēt objektus, cik reižu noklikšķiniet |
| `COPYBASE` |  | Kopēt objektus starpliktuvē ar bāzes punktu, ko izvēlaties |
| `COPYCLIP` |  | Kopēt objektus starpliktuvē (Ctrl+C); PASTECLIP tos ievieto |
| `COUNT` | `BCOUNT` | Saskaitīt bloku atsauces: izvēlēties vienu, lai atlasītu un saskaitītu katru tā bloka atsauci |
| `COUNTTABLE` |  | Ievietot bloku skaitu tabulu |
| `CREDITS` |  | Ievieto bibliotēkas autorus rasējumā kā tabulu. Palaidiet vēlreiz, lai atjauninātu tabulu no rasējuma objektiem. |
| `CURSORSIZE` |  | Krustiņa izmērs: 100 nosedz visu rasējumu no malas līdz malai (Iestatījumi › Kursors › Pilnekrāna) |
| `CUTCLIP` |  | Izgriezt objektus starpliktuvē (Ctrl+X): kopēt, tad dzēst |
| `CYLINDER` | `CYL` | Cilindrs: centrs, rādiuss un augstums (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Uzskaitīt blokus, to atribūtus un objektu rekvizītus kā tabulu rasējumā vai CSV failā |
| `DATALINK` | `DL` | Tabula no CSV faila, kas atceras failu, lai to varētu nolasīt vēlreiz |
| `DATALINKUPDATE` | `DLU` | Nolasīt datu saites failu vēlreiz un atkal aizpildīt tās tabulas |
| `DCALIGNED` | `DCALI` | Dimensiju ierobežojums: patiesais attālums starp punktiem, punktu un līniju vai divām līnijām |
| `DCANGULAR` | `DCANG` | Dimensiju ierobežojums: leņķis starp divām līnijām vai loka |
| `DCCONVERT` |  | Pārvērst izmērus, kas zīmēti uz ierobežojamas ģeometrijas, par dimensiju ierobežojumiem |
| `DCDIAMETER` | `DCDIA` | Dimensiju ierobežojums: riņķa vai loka diametrs |
| `DCDISPLAY` |  | Rādīt vai paslēpt dimensiju ierobežojumus rasējumā |
| `DCHORIZONTAL` | `DCHOR` | Dimensiju ierobežojums: horizontālais attālums |
| `DCLINEAR` | `DCLIN` | Dimensiju ierobežojums: horizontālais vai vertikālais attālums, no vietas, kur to novietojat |
| `DCRADIUS` | `DCRAD` | Dimensiju ierobežojums: riņķa vai loka rādiuss |
| `DCVERTICAL` | `DCVER` | Dimensiju ierobežojums: vertikālais attālums |
| `DELBLOCKS` |  | Dzēst blokus: katru atsauci (arī iekšējās, katrā lapā) un definīcijas |
| `DELCONSTRAINT` | `DELCON` | Noņemt katru ierobežojumu (ģeometrisko un dimensiju) no atlasītajiem objektiem |
| `DELOPENING` |  | Izņemt durvis vai logu no sienas. |
| `DESCRIBE` | `DESC` | Pateikt, ko rasējums satur: cik objektu, kāda veida, cik lieli, kas ir atlasīts. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Notīrīt atlasi (Esc) |
| `DETAILS` | `DET` | Jūsu firmas pašas detaļas, atrastas tam, ko zīmējat: meklēt, pievienot bloku, uzskaitīt, noņemt, ieslēgt vai izslēgt piedāvājumus. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Zīmēt diagrammu no teksta: Mermaid plūsmas diagrammu, PlantUML komponentu diagrammu, D2, no-uz sarakstu vai draw.io XML, kā rediģējamus blokus un savienotājus |
| `DIMALIGNED` | `DAL`, `DIMALI` | Patiesais attālums starp diviem punktiem |
| `DIMANGULAR` | `DAN`, `DIMANG` | Leņķis starp divām līnijām, loka vai pēc trim punktiem |
| `DIMARC` | `DAR` | Loka garuma izmērs: attālums pa loku ar loka simbolu (DAR) |
| `DIMASZ` |  | Izmēra iestatījums: bultiņas izmērs |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Izmēri, sakrauti no vienas bāzes līnijas |
| `DIMBREAK` | `DBREAK` | Pārtraukt izmēru un pagarinājuma līnijas, kur tās krusto citus objektus (Auto), starp diviem punktiem (Manuāli) vai noņemt pārtraukumus |
| `DIMCONSTRAINT` | `DCON` | Dimensiju ierobežojumi: lineārie, izlīdzinātie, leņķa, rādiusa, diametra, pārvēršana |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Izmēru ķēde, katrs no pēdējā gala |
| `DIMDEC` |  | Izmēra iestatījums: decimālzīmes |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Loka vai riņķa diametrs |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Atbrīvot izmērus no objektiem, ar kuriem tie ir saistīti (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Mainīt izmēra tekstu (Sākums, Jauns teksts, Pagriezt) vai sašķiebt pagarinājuma līnijas (Oblique) |
| `DIMEXE` |  | Izmēra iestatījums: pagarinājums aiz izmēra līnijas |
| `DIMEXO` |  | Izmēra iestatījums: nobīde no sākuma |
| `DIMGAP` |  | Izmēra iestatījums: atstarpe ap tekstu |
| `DIMINSPECT` |  | Pārbaudes izmērs: rāmis ap vērtību ar uzrakstu un to, cik bieži detaļa tiek pārbaudīta |
| `DIMJOGGED` | `DJO`, `JOG` | Lūzuma rādiusa izmērs: rādiuss, zīmēts no tuvāka punkta, kad centrs ir tālu (DJO) |
| `DIMJOGLINE` | `DJL` | Pievienot lūzuma simbolu lineāras vai izlīdzinātas izmēra līnijai, lai parādītu, ka attālums nav zīmēts mērogā (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontālais vai vertikālais attālums (R jebkuram leņķim) |
| `DIMLUNIT` |  | Izmēra iestatījums: garuma formāts (1 zinātniskais, 2 decimālais, 3 inženierijas, 4 arhitektūras, 5 daļskaitļi) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinātas izmērs: X vai Y attālums no punkta līdz UCS sākumam, pa vadu (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Pārrakstīt izmēru mainīgos atlasītajos izmēros, nemainot to stilu; Notīrīt atjauno stilu (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Loka vai riņķa rādiuss |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Piesaistīt izmēra punktus objektiem, lai tas seko un mēra atkal, kad tie kustas (DRE) |
| `DIMSCALE` |  | Izmēra iestatījums: kopējais mērogs (izmēri × šis) |
| `DIMSPACE` |  | Vienmērīgs attālums starp paralēliem izmēriem, mērot no bāzes izmēra (0 tos saliek vienā līnijā, Auto ir divkāršs teksta augstums) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Izveidot, mainīt, iestatīt pašreizējo, dzēst, pielietot un salīdzināt nosauktus izmēru stilus (dialogs; -DIMSTYLE komandrindā) |
| `DIMTEDIT` | `DIMTED` | Pārvietot izmēra tekstu pa kreisi, pa labi vai uz izmēra līnijas centru, vai to pagriezt |
| `DIMTEXTUNIT` | `DTU` | Izmēra teksts mm, cm, m vai km, vai rasējuma pašās vienībās: atlasītie izmēri, citādi jaunie (DTU) |
| `DIMTXT` |  | Izmēra iestatījums: teksta augstums |
| `DIST` | `DI` | Attālums un leņķis starp diviem punktiem |
| `DISTRIBUTE` |  | Vienmērīgi izvietot atlasītos objektus sāniski vai augšup un lejup: vienādi soļi starp centriem vai vienādas atstarpes; ārējie divi paliek |
| `DIVIDE` | `DIV` | DIVIDE (DIV): atzīmes, kas sadala līniju, loku, riņķi, polilīniju, splainu vai elipsi vienādās daļās. Punkti, vai ar Bloku bloks katrā atzīmē. |
| `DOCUMENTS` | `DOCS` | Atvērt Dokumentu paneli: izņemt un ievietot rasējumus, pārskatījumus, izlaiduma stāvokļus un apstiprinājumu projekta mapei |
| `DOOR` | `DR` | Ievietot durvis sienā. Puse, uz kuru noklikšķināt, ir puse, uz kuru tās atveras. |
| `DRAWORDER` |  | Mainīt zīmēšanas kārtību: nest objektus uz priekšu, sūtīt uz aizmuguri, vai novietot virs vai zem citiem objektiem. |
| `DUPLICATE` | `DUP` | Kopija, kas seko rādītājam: noklikšķiniet, lai nolaistu (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Rasējuma īpašības: nosaukums, autors un pārējais, un jūsu pašu nosaukumu un vērtību pāri |
| `DXFOUT` |  | Lejupielādēt rasējumu kā DXF R12 (Saglabāt paliek savs formāts) |
| `EATTEDIT` | `DDATTE` | Rediģēt bloka atsauces atribūtus: vērtības, tekstu un rekvizītus, pa vienam atribūtam |
| `ELLIPSE` | `EL` | Ass galapunkti un otra pusass |
| `ERASE` | `E`, `DELETE` | Noņemt objektus |
| `EXPLODE` | `X` | Sadalīt polilīnijas, blokus un izmērus daļās |
| `EXPORT` | `EXP` | Saglabāt rasējuma kopiju failā tipā, ko raksta papildinājums |
| `EXPORT3D` | `3DEXPORT` | Eksportēt 3D modeli: GLB, OBJ vai STL |
| `EXPORTPOINTS` | `EXPPTS` | Ierakstīt punktus un bloku ievietošanas punktus ar vienu atribūtu kā aprakstu CSV vai TXT failā (PNEZD, PENZD vai XYZ) BIM un uzmērīšanas programmām |
| `EXTEND` | `EX` | Pagarināt objektus, lai tie sastaptos ar citiem: noklikšķiniet tuvu galam, velciet cauri vairākiem vai Shift+klikšķis, lai apgrieztu |
| `EXTRIM` |  | EXTRIM: izvēlieties vienu griežamo malu, tad pusi. Viss, kas krusto malu, tiek apgriezts šajā pusē. Gabali, kas tiktu nogriezti, rādās, kad kustināt rādītāju. |
| `EXTRUDE` | `EXT` | Izspiest slēgtus 2D objektus cietos ķermeņos (3D) |
| `FIELD` |  | Ievietot lauku tekstā, tabulas šūnā vai atribūtā: datums, faila nosaukums, lapas numurs, rasējuma īpašība, objekta laukums vai garums, vai formula |
| `FILLET` | `F` | Noapaļot vai nostūrot stūri starp diviem objektiem (R rādiuss, P katrs polilīnijas stūris, M vairāki) |
| `FIND` |  | Atrast un aizvietot vārdus tekstā, atribūtu vērtībās un izmēru tekstā |
| `FLATTEN` |  | Iestatīt atlasīto objektu augstumu (Z) un biezumu uz 0, arī to izmantotajos blokos. |
| `FLOOR` |  | Izvēlēties stāvu, kur zīmēt, pievienot vienu, vai pārvietot vai kopēt atlasi uz to. |
| `FLOORLAYERS` |  | Pārvērst stāvus slāņos ar nosaukumu Floor-Layer failam, kas jānodod kādam bez stāviem. |
| `FLOORS` | `FLR` | Atvērt Stāvu paneli: sakraut stāvus vienā modeļa telpā. |
| `GCCOINCIDENT` |  | Ierobežojums: divi punkti sakrīt vai punkts paliek uz objekta |
| `GCCOLLINEAR` |  | Ierobežojums: divas līnijas paliek uz vienas līnijas |
| `GCCONCENTRIC` |  | Ierobežojums: divi riņķi vai loki dala centru |
| `GCEQUAL` |  | Ierobežojums: divas līnijas paliek vienādā garumā, vai divi riņķi vai loki vienādā rādiusā |
| `GCFIX` |  | Ierobežojums: punkts vai viss objekts paliek savā vietā |
| `GCHORIZONTAL` |  | Ierobežojums: līnija (vai divi punkti) paliek horizontāla |
| `GCPARALLEL` |  | Ierobežojums: divas līnijas paliek paralēlas |
| `GCPERPENDICULAR` |  | Ierobežojums: divas līnijas paliek taisnā leņķī |
| `GCSYMMETRIC` |  | Ierobežojums: divi punkti, līnijas vai riņķi spoguļojas pāri līnijai |
| `GCTANGENT` |  | Ierobežojums: līnija un riņķis vai loks (vai divi no tiem) paliek tangenciāli |
| `GCVERTICAL` |  | Ierobežojums: līnija (vai divi punkti) paliek vertikāla |
| `GDSIN` | `GDS` | Skatīt IC izkārtojumu (GDSII straumes failu): katrs slānis un datu tips kā rasējuma slānis, plakani, vienībās; tikai skatīšanai un mērīšanai (laboratorijas tests) |
| `GEOMCONSTRAINT` | `GCON` | Ģeometriskie ierobežojumi: horizontāls, vertikāls, paralēls, tangenciāls, sakrītošs… |
| `GLBOUT` |  | Eksportēt 3D modeli kā GLB (glTF) |
| `GRADIENT` | `GD` | Aizpilda laukumu ar vienas vai divu krāsu pāreju |
| `GRIDMOVE` | `GM` | Pārvietot režģa līniju un līdzi to, kas pie tās karājas: sienas stiepjas, kolonnas, burbuļi un birkas pārvietojas, izmēri seko. |
| `GROUP` | `G` | GROUP (G): dot atlasītajiem objektiem kopīgu nosaukumu. Klikšķis uz viena no tiem tad atlasa visus. Enter nosaukumā izveido nenosauktu grupu. |
| `GROUPEDIT` |  | GROUPEDIT: mainīt grupu. Izvēlieties vienu no tās objektiem vai dodiet nosaukumu, tad Pievienot vai Noņemt objektus, PĀRDĒVĒT, mainīt aprakstu vai norādīt, vai klikšķis to atlasa veselu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Aizpildīt laukumu ar cietu aizpildījumu vai rakstu: noklikšķiniet iekšā vai atlasiet slēgtus objektus (H) |
| `HATCHEDIT` | `HE` | Mainīt svītrojumu: rakstu, mērogu, leņķi, sākumpunktu un tā saiti ar robežu. |
| `HATCHGENERATEBOUNDARY` | `HGB` | No jauna izveido robežas polilīnijas no svītrojuma, saistītas vai nesaistītas |
| `HATCHTOBACK` |  | Nosūtīt katru svītrojumu aiz visa pārējā. |
| `HELP` | `?` | Šis saraksts |
| `HIDEOBJECTS` |  | Paslēpt atlasītos objektus līdz UNISOLATEOBJECTS. Netiek saglabāts kopā ar rasējumu. |
| `HISTORY` | `HIST` | HISTORY (HIST): šā rasējuma versijas — kopijas, ko glabā šajā datorā, kad Studio to saglabā, un mākoņa versijas — atvērt, atjaunot un salīdzināt, ar krāsā rādītām izmaiņām |
| `ID` |  | Punkta koordinātes |
| `IMAGE` | `IM` | Dot CadCraft attēlu failus, ko rasējums izmanto (DWG saglabā tikai to, kur tie atradās). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Ievietot attēlu (PNG vai JPEG) no faila. |
| `IMAGECLIP` | `ICL` | Apgriezt attēlu taisnstūrī vai daudzstūrī vai noņemt apgriezumu. |
| `IMPORT` | `IMP` | Importēt faila tipu, ko papildinājums lasa, šajā rasējumā |
| `INSERT` | `I`, `DDINSERT` | Ievietot bloku (S mērogs, R pagriezt); F no DWG/DXF faila, L no bibliotēkas |
| `INTERSECT` | `IN` | Paturēt tikai to, kas ir kopīgs cietiem ķermeņiem (3D), vai laukumu, ko 2D reģioni dala |
| `ISODRAFT` |  | ISODRAFT: izometriskā zīmēšana ieslēgta vai izslēgta, vai taisni uz Kreisās, Augšējās vai Labās plaknes. Kamēr tā ir ieslēgta, Ortho un polārā izsekošana seko plaknes divām asīm, režģis tiek zīmēts izometriski, un ELLIPSE ir Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Rādīt tikai atlasītos objektus; viss pārējais šajā telpā ir paslēpts līdz UNISOLATEOBJECTS. Netiek saglabāts kopā ar rasējumu. |
| `ISOPLANE` |  | ISOPLANE: izvēlēties izometrisko plakni zīmēšanai: Kreisā, Augšējā vai Labā. Enter pāriet uz nākamo, kā F5 dara, kad izometriskā zīmēšana ir ieslēgta. |
| `JOIN` | `J` | Savienot līnijas, lokus un polilīnijas, kas saskaras galu pie gala, vienā polilīnijā; līnijas uz vienas līnijas vienā līnijā (J) |
| `LASER` | `LASERCUT` | Atvērt Lāzera paneli: sūtīt slāņus lāzergriezējam vai gravierējam (GRBL G-kods) |
| `LASSOMODE` |  | Nospiest un vilkt zīmē laso (1) vai taisnstūri (0) |
| `LAYDEL` |  | Dzēst slāni un katru objektu uz tā (modelī, lapās un blokos) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Atvērt slāņu pārvaldnieku: katrs slānis vienā tabulā |
| `LAYERPANEL` |  | Rādīt slāņu paneli |
| `LAYFRZ` |  | Iesaldēt katra izvēlētā objekta slāni |
| `LAYGROUP` | `LG` | Grupēt slāņus mapēs Slāņu panelī. |
| `LAYISO` |  | Izolēt atlasīto objektu slāņus (katrs cits slānis izslēgts) |
| `LAYLOCKFADE` |  | Iestatīt, cik ļoti izbalē objekti bloķētos slāņos un vai klikšķis tos var atlasīt. |
| `LAYMCUR` |  | Padarīt izvēlētā objekta slāni pašreizējo |
| `LAYMRG` |  | Apvienot slāņus: to objekti pāriet uz mērķa slāni, un apvienotie slāņi tiek noņemti |
| `LAYOFF` |  | Izslēgt katra izvēlētā objekta slāni |
| `LAYON` |  | Ieslēgt katru slāni |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Jauna lapa ar titulbloku un skatu logu |
| `LAYTHW` |  | Atkausēt katru slāni |
| `LAYUNISO` |  | Atkal ieslēgt slāņus, ko LAYISO izslēdza |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pārvērst tekstu, kas rakstīts ar vecajiem vjetnamiešu fontiem (TCVN3 / ABC fonti, piemēram, .VnTime, un VNI fonti, piemēram, VNI-Times), uz Unicode. Šāds teksts jau tiek rādīts, kā tas lasās; šī komanda to pārraksta pastāvīgi, ar skaitu un vienu atsaukšanas soli. |
| `LENGTHEN` | `LEN` | Pagarināt vai saīsināt līnijas, lokus un polilīnijas: par summu, procentiem, līdz kopējam garumam vai velkot (LEN) |
| `LIBRARY` | `LIB` | Bibliotēkas panelis: ievietot vienumus, pārbaudīt atjauninājumus, autori |
| `LIMITS` |  | Iestatīt rasējuma robežas: ON, OFF vai apakšējā kreisā un augšējā labā stūra. Ar ieslēgtām robežām punkti ārpus tām tiek noraidīti |
| `LINE` | `L` | Taisni posmi, katrs kā savs objekts |
| `LINETYPE` | `LT`, `CELTYPE` | Līniju tips, ko jaunie objekti saņem (pēc slāņa, pēc bloka vai nosaukts) |
| `LINKVIEWS` | `SYNCVIEWS` | Panoramēt un tālummainīt visas rūtis kopā (sadalīts ekrāns), lai salīdzinātu divus rasējumus vai pārskatījumus |
| `LISPEDIT` | `VLIDE` | LISPEDIT (vai VLIDE) atver LISP redaktoru: logu rutīnas rakstīšanai, ielādei un izmēģināšanai. Ielāde rasējumā nolasa katru formu, kā ielādējot failu ar APPLOAD, un izveido tās komandas. Palaist atlasi izvērtē atlasītās formas vai formu, kurā atrodas kursors. Konsole rāda, ko rutīna izdrukāja, un katru kļūdu ar tās rindu. Atbilstošā iekava tiek atzīmēta, rakstot, un Enter ievelk jauno rindu. Jauns, Atvērt un Saglabāt darbojas ar .lsp failu. Saraksti blakus tekstam rāda funkcijas, ko rutīna definē, tās, ko tā izsauc, bet šim LISP vēl nav, un visas tās funkcijas. Logs nebloķē rasējumu, tāpēc rutīna var prasīt punktus; Apturēt vai Esc beidz darbojošos rutīnu. |
| `LIST` | `LI`, `LS` | Aprakstīt objektus vēsturē |
| `LTSCALE` | `LTS` | Rasējuma līniju tipa mērogs (katra svītra un atstarpe tiek reizināta ar to) |
| `LWDISPLAY` | `LWT` | Rādīt vai paslēpt līniju biezumus ekrānā (LWT poga statusa joslā) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Līniju biezums, ko jaunie objekti saņem (pēc slāņa, pēc bloka, noklusējuma vai mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kartes slāņi zem modeļa telpas: rasējuma koordinātu sistēma, plāksnes, WMS, WMTS, ArcGIS, attēli |
| `MASSPROP` |  | MASSPROP: reģionu un slēgtu objektu šķērsgriezuma īpašības: laukums, perimetrs, smaguma centrs, momenti un inerces reizinājums, inerces rādiusi un galvenās asis. Precīzi līnijām un lokiem. Var ierakstīt atskaiti teksta failā. |
| `MATCHPROP` | `MA`, `PAINTER` | Saskaņot rekvizītus: nokopēt viena objekta slāni, krāsu un vairāk uz citiem (MA) |
| `MEASURE` | `ME` | MEASURE (ME): atzīme ik pēc dota garuma pa līniju, loku, riņķi, polilīniju, splainu vai elipsi, no gala, kas ir tuvāk jūsu izvēlei. Punkti, vai ar Bloku bloks katrā atzīmē. |
| `MEASUREGEOM` | `MEA` | Izmērīt attālumu, rādiusu, leņķi vai laukumu (MEA) |
| `MINSERT` |  | MINSERT: ievietot bloku rindās un kolonnās vienā reizē. Katrs ir sava atsauce, tāpēc jebkuru var pārvietot vai dzēst. |
| `MIRROR` | `MI` | Spoguļot objektus pāri līnijai |
| `MLEADER` | `MLD`, `MLEAD` | Daudzvadu: bultiņa, vads un piezīme kā viens objekts (MLD) |
| `MLEADERALIGN` | `MLA` | Izlīdzināt daudzvadus ar vienu no tiem noteiktā virzienā, vienādā attālumā vai sadalītus starp diviem punktiem (MLA) |
| `MLEADERCOLLECT` | `MLC` | Savākt vairākus daudzvadus vienā: to bloki rindā vai kolonnā, vai to piezīmes viena zem otras (MLC) |
| `MLEADEREDIT` | `MLE` | Pievienot vadu līnijas daudzvadam vai noņemt tās; pārslēgt tā saturu starp tekstu un bloku (MLE) |
| `MLINE` |  | Zīmēt paralēlas līnijas kopā, savienotas stūros. |
| `MOVE` | `M` | Pārvietot objektus pēc bāzes punkta un otrā punkta |
| `MSPACE` | `MS` | Strādāt ar modeli caur atvērtās lapas skatu logu (vai divreiz noklikšķināt skatu logā). |
| `MTEXT` | `MT`, `T` | Rindkopas teksts: velciet tā platumu, tad rakstiet vietā; Enter sāk jaunu rindkopu (T) |
| `MVIEW` | `MV` | Skatu logs uz modeli izkārtojumā |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nosauktie skati: saglabāt ekrānā redzamo skatu (vai logu) ar nosaukumu un atgriezties pie tā (NV) |
| `NCOPY` |  | Kopēt objektus no bloka atsauces vai saistīta rasējuma rasējumā, to nesadalot. |
| `NEARBY` |  | Pateikt, kas atrodas tuvu kursoram, vispirms tuvākais, ar attālumu un pusi. |
| `NEW` |  | Sākt jaunu rasējumu |
| `OBJECTSCALE` | `OBJSCALE` | Anotatīvā teksta un izmēru anotācijas mērogi: pievienot mērogu, dzēst vienu, pievienot pašreizējo mērogu vai uzskaitīt tos (katrs skatu logs tos rāda izmērā savam mērogam) |
| `OBJOUT` |  | Eksportēt 3D modeli kā OBJ |
| `OFFSET` | `O` | Paralēlas kopijas noteiktā attālumā |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kā OFFSET aizver spraugas polilīnijas ārējos stūros. 0 pagarina segmentus, 1 pievieno loku, 2 pievieno taisnu nogriezumu. Saglabāts šai sesijai. |
| `OLELIST` | `OLES` | Uzskaitīt rasējumā esošos OLE objektus un ievietot kopiju no viena attēla, kur izvēlaties |
| `OPEN` |  | Atvērt DWG vai DXF no šā datora |
| `OPENIN3D` |  | Atvērt šo rasējumu 3D modelēšanas lietotnē jaunā cilnē (nekas netiek augšupielādēts) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Atvērt objektu piesaistes izvēlni: izvēlieties, kuras piesaistes ir ieslēgtas. Arī labais klikšķis uz Piesaiste statusa joslā. |
| `OVERKILL` |  | Dzēst dublētus objektus un apvienot pārklājošās vai galu pie gala esošās līnijas un lokus noteiktā pielaidē. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametru panelis: lietotāja parametri un dimensiju ierobežojumi vienā tabulā |
| `PARTSLIST` | `PLIST` | Detaļu saraksta tabula ar katru standarta detaļu un tērauda profilu, kas ievietots no bibliotēkas |
| `PASTEAREA` | `PAREA` | Ielīmēt laukumu, kas kopēts MarkupCraft (Kopēt laukumu) patiesajā izmērā kā attēlu. |
| `PASTEBLOCK` |  | PASTEBLOCK: ielīmēt to, ko nokopējāt, kā vienu bloku. Blokam ir pats savs nosaukums; RENAME dod jūsu. |
| `PASTECLIP` |  | Ielīmēt starpliktuvi: tā seko kursoram, noklikšķiniet, kur tā jānovieto (Ctrl+V) |
| `PASTEORIG` |  | Ielīmēt starpliktuvi tajās koordinātēs, no kurām tā tika nokopēta (Ctrl+Shift+V) |
| `PDF` |  | Dot CadCraft PDF failus, ko rasējuma pamatnes izmanto |
| `PDFADJUST` |  | Izbalināt, mainīt kontrastu, izveidot melnbaltu vai izslēgt PDF pamatni |
| `PDFATTACH` | `PDFATT` | Piesaistīt PDF lapu kā pamatni (PDFATTACH) |
| `PDFCLIP` |  | Apgriezt PDF pamatni taisnstūrī vai daudzstūrī |
| `PDFIMPORT` | `PDFIM` | Pārvērst PDF lapas līnijas, aizpildījumus un tekstu rasējuma objektos (PDFIMPORT) |
| `PDFLAYERS` |  | Ieslēgt vai izslēgt PDF pamatnes slāņus |
| `PEDIT` | `PE` | Rediģēt polilīniju: aizvērt, atvērt, savienot, platums, piemērot līkni, splaina līkne, noņemt līkni, līniju tipa ģenerēšana, apgriezt; līnijas, loki un splaini var tikt pārvērsti polilīnijās |
| `PHOTOSKETCH` | `PSK` | Pārvērš fotogrāfiju no rokas skices uz papīra par līnijām un lokiem noteiktā mērogā, iztaisnojot perspektīvu un katrai pildspalvas krāsai piešķirot savu slāni. |
| `PICKSTYLE` |  | PICKSTYLE: vai, izvēloties vienu grupas objektu, atlasa visu grupu (1, sākuma iestatījums) vai tikai šo objektu (0). Saglabāts šai sesijai. |
| `PLAN` |  | Pagriezt skatu tā, lai UCS X ass (Pašreizējā ucs, saglabāta Ucs vai Pasaule) būtu horizontāla ekrānā. Nekas rasējumā nepārvietojas. |
| `PLINE` | `PL` | Polilīnija no līniju un loku posmiem |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Drukāt PDF: izkārtojumu vai modeli noteiktā mērogā |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Drukas stilu tabulas: iestatīt, ko katra krāsa drukā kā (krāsa, melna, pelēka, tinte, līniju biezums); saglabā kopā ar rasējumu (STYLESMANAGER) |
| `POINT` | `PO` | Punkta objekti |
| `POINTCLOUD` | `PC` | Pievienotais punktu mākonis: griezums, augstums, biezums, krāsa, izmērs, redzams, tālummaiņa, atvienot |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Piesaistīt punktu mākoni (LAS, LAZ, XYZ, PTS) rasējuma apakšā |
| `POLARANG` |  | Polārās izsekošanas solis grādos (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Regulārs daudzstūris |
| `PRESSPULL` |  | Spiest vai vilkt cieta ķermeņa virsmu (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Atvērt Rekvizītu paneli (arī Ctrl+1, vai divreiz noklikšķināt uz objekta) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Saliekt Rekvizītu paneli līdz loga malai |
| `PSPACE` | `PS` | Atstāt skatu logu, kurā strādājat, un atgriezties lapā (vai divreiz noklikšķināt ārpus tā). |
| `PUBLISH` | `-PUBLISH` | Drukāt vairākas vai visas lapas vienā PDF (lapa un grāmatzīme katrai lapai) |
| `PURGE` | `PU` | Noņemt bloku definīcijas, ko nekas neizmanto |
| `QDIM` |  | Ātrais izmērs: dimensionēt vairākus objektus vienlaikus (nepārtraukti, bāzes, pakāpeniski, ordinātas, rādiuss vai diametrs) |
| `QPMODE` | `QP` | Ātrās rekvizītu parādīšana pie kursora ieslēgta vai izslēgta |
| `QSELECT` | `QS` | Ātrā atlase: katrs veida objekts, kura slānis, krāsa, izmērs vai nosaukums atbilst (QS) |
| `RASTERSNAP` |  | Ieslēgt vai izslēgt piesaisti skenētu lapu līnijām. |
| `RAY` |  | Stars: palīglīnija no punkta, bezgalīga vienā virzienā. |
| `RECOVER` |  | Atver bojātu DXF vai DWG: izlaiž to, ko nevar nolasīt, nevis atsakās no faila, pasaka, kas izlaists, tad pārbauda un labo rasējumu kā AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Slēgta polilīnija no diviem stūriem |
| `REDLINE` | `RDL` | Redline uz pārskatījumu: nolasīt MarkupCraft redline paketi, pieņemt vai noraidīt katru izmaiņu, apvilkt pieņemtās ar pārskatījumu žurnālu un saglabāt atbilžu failu (RDL) |
| `REDO` |  | Atkārtot to, kas tika atsaukts |
| `REFCLOSE` |  | Pabeigt bloka rediģēšanu vietā: saglabāt vai atmest izmaiņas |
| `REFEDIT` |  | Rediģēt bloku vietā, kur atrodas tā atsauce, ar pārējo rasējumu izbalējušu; REFCLOSE saglabā |
| `REGEN` | `RE` | Pārbūvēt to, kas šajā cilnē tiek zīmēts, no rasējuma |
| `REGENALL` | `REA` | Pārbūvēt to, kas tiek zīmēts katrā cilnē, rūtī un atvērtajā rasējumā |
| `REGION` | `REG` | REGION (REG): izveidot plakanus laukumus (reģionus) no slēgtiem objektiem vai no līnijām, lokiem un polilīnijām, kas aizveras galu pie gala cilpā. UNION, SUBTRACT un INTERSECT tad apvieno reģionus, un MASSPROP dod to šķērsgriezuma īpašības. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Reģistrēt vairākus skenējumus: novietot tos vienā rāmī pēc izvēlētiem punktu pāriem vai mērķiem, precizēt ar ICP, eksportēt vienu LAS vai E57 |
| `REINIT` |  | Pārlādēt aizstājvārdu failu |
| `RENAME` | `-RENAME`, `REN` | Pārdēvēt slāni vai bloku (katrs objekts vai atsauce seko) |
| `REVCLOUD` | `RC` | Pārskatījuma mākonis: apvilkt taisnstūri, daudzstūri, brīvroku ceļu vai objektu (RC) |
| `REVOLVE` | `REV` | Pagriezt slēgtus 2D objektus ap asi cietos ķermeņos (3D) |
| `ROTATE` | `RO` | Pagriezt objektus ap bāzes punktu |
| `SAMPLES` | `SAMPLE` | Atvērt vienu no CadCraft paraugrasējumiem (arhitektūras komplekts, as-built), lai mācītos |
| `SAVE` | `QSAVE` | Lejupielādēt rasējumu tā formātā (DWG vai DXF) |
| `SAVEAS` |  | Lejupielādēt rasējumu kā DWG vai DXF: izvēlieties, kuru |
| `SAYSEL` |  | Pateikt, kas ir atlasīts, pa vienam teikumam katram. |
| `SCALE` | `SC` | Mērogot objektus ap bāzes punktu |
| `SCALELISTEDIT` | `SCALELIST` | Pievienot, rediģēt un dzēst rasējuma pašus mērogus; tie parādās skatu logu un drukas mērogu sarakstos un tiek saglabāti failā (SCALELIST) |
| `SCANALIGN` | `SCL` | Izlīdzināt skenētu lapu pēc diviem punktiem: pārvietot, pagriezt un, ja izvēlaties, mērogot. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Ievietot skenētu rasējumu: PNG, JPEG vai TIFF (viena lapa vai visas daudzlapu faila lapas) vai PDF lapu, kas ir attēls. |
| `SCANCLEAN` | `SCC` | Padarīt skenētu lapu melnbaltu un noņemt traipus. |
| `SCANCROP` | `SCR` | Apgriezt skenētu lapu logā. |
| `SCANDESKEW` | `SCD` | Atrast leņķi, kādā skenētās lapas garās līnijas atrodas, un pagriezt lapu taisni, kad pieņemat leņķi. |
| `SCANERASE` | `SCE` | Dzēst skenētas lapas laukumu: taisnstūri, daudzstūri vai lasso. |
| `SCANINFO` | `SCI` | Parādīt skenētās lapas sākotnējo failu un kopš tā veiktos soļus. |
| `SCANSCALE` | `SCS` | Mērogot skenētu lapu: izvēlēties uz tās divus punktus un ierakstīt to patieso attālumu. |
| `SCANTRACE` | `SCT` | Izsekot skenētu lapu līnijās un lokos jaunā slānī ar jūsu iestatītu pielaidi. Teksts un svītrojums paliek kā rastrs. |
| `SELECT` |  | Atlasīt objektus tagad (P, Iepriekšējais, nākamajā komandā) |
| `SELECTALL` | `AI_SELALL` | Atlasīt katru objektu, ko šajā cilnē var rediģēt (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Atlasīt katru objektu, kas līdzīgs izvēlētajiem: tas pats tips, slānis un krāsa (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Rāda Lapu kopas paneli: lapas no daudziem rasējumiem, numurētas, publicētas kā viens PDF. |
| `SHORTCUTS` | `KEYS` | Piešķirt jebkurai komandai savu taustiņu (Ctrl vai Alt ar burtu vai brīvu funkciju taustiņu), saglabātu šajā pārlūkprogrammā vai darbvirsmas lietotnē. |
| `SHXFONTS` | `SHX` | Dot CadCraft SHX fontus no mapes vai failiem, lai teksta stili, kas tos nosauc, zīmētu tajos (saraksts, noņemt, apgriezt) |
| `SKETCHFIX` | `SKF` | Zīmēt brīvroku svītras; katra kļūst par tīru līniju, riņķi, loku, taisnstūri vai polilīniju, izlīdzināta un savienota ar pārējām. |
| `SKETCHLIVE` | `SKL` | Skicēt ar pildspalvu: katra svītra kļūst par precīzu līniju, riņķi, loku vai taisnstūri, kad paceļat pildspalvu, piesaistīts rasējumam, ar izmēru, ko ierakstīt pāri. |
| `SPLINE` | `SPL` | Zīmēt splainu caur punktiem (vai ar vadības daudzstūri) vai pārvērst polilīniju splainā |
| `SPLINEDIT` | `SPE` | Rediģēt splainu: pielāgot punktus, vadības punktus un svarus, atvērt vai aizvērt, apgriezt vai pārvērst polilīnijā |
| `SPLIT` |  | Sadalīt zīmēšanas laukumu rūtīs (kā VPORTS uz modeļa; arī no lapas) |
| `STEELMEMBER` | `SMEMBER` | Tērauda elements 3D no standarta profila: divi punkti (sija) vai pamatpunkts un augstums (kolonna) |
| `STLOUT` |  | Eksportēt 3D modeli kā STL (milimetros) |
| `STRETCH` | `S` | Izstiept: vilkt krustojošu logu pār galiem, lai pārvietotu; tas, kas ir iekšā, kustas, pārējais paliek (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Teksta stili: fonts, augstums, platums un slīpums, ko jaunais teksts saņem (dialogs; -STYLE komandrindā) |
| `SUBTRACT` | `SU` | Atņemt cietos ķermeņus no citiem (3D) vai 2D reģionus no reģioniem |
| `SWBOUT` | `SWMACRO` | Lejupielādēt makro SolidWorks (.swb), kas atjauno modeli kā vienu ierobežotu skici |
| `SWEEP` |  | Izvilkt slēgtus 2D objektus pa ceļu (līnija, polilīnija, loks, riņķis) cietos ķermeņos (3D) |
| `TABLE` | `TB` | Izveidot tabulu: rindas un kolonnas, vai no izklājlapas šūnām starpliktuvē vai CSV failā |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Rediģēt tabulu: rakstīt šūnā, ievietot un dzēst rindas un kolonnas, izmērus, apvienotās šūnas, izlīdzinājumu |
| `TABLEEXPORT` |  | Saglabāt to, ko tabula rāda, kā CSV failu |
| `TABLEPASTE` | `PASTETABLE` | Izveidot tabulu no izklājlapas šūnām starpliktuvē |
| `TABLESTYLE` | `TS` | Tabulu stili: teksta augstumi, izlīdzinājums, atkāpes un malas virsrakstam, galvenei un datu rindām |
| `TAGS` |  | Birkas bloku atsaucēs: definēt birku (veids, atļautās vērtības, bloki, uz kuriem attiecas), iestatīt to izvēlētajām atsaucēm un uzskaitīt tās kā grafiku, ko var saglabāt kā CSV |
| `TEXT` | `DT`, `DTEXT` | Vienrindas teksts; Enter sāk nākamo rindu |
| `TEXTEDIT` | `ED`, `DDEDIT` | Rediģēt tekstu vietā: izvēlēties tekstu (vai divreiz noklikšķināt uz tā) (ED) |
| `TEXTMASK` | `TMASK` | Likt fona masku aiz teksta (rasējuma fons vai krāsa) vai to noņemt. |
| `TEXTTOFRONT` |  | Nest visu tekstu, izmērus un vadus virs visa pārējā. |
| `TOOLBAR` |  | Izvēlēties, ko rāda rīkjoslas pogas: ikonas un tekstu, tikai ikonas vai tikai tekstu (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Novietot rīkjoslu logā augšā, apakšā, kreisajā vai labajā pusē |
| `TOOLBARROWS` |  | Izvēlēties, cik rindās ir rīkjosla: aplauzt, lai ietilptu, 2 vai 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Padarīt rasējuma joslas virs tā standarta vai kompaktas |
| `TOUCHCROSSHAIR` | `TCX` | Nobīdīts krustiņš zīmēšanai ar pirkstu: viens pirksts pārvieto krustiņu, kas atrodas virs un blakus tam, tā ka pirksts nenosedz izvēles punktu. Pirksta pacelšana neizvēlas neko; poga Klikšķis vai pieskiens ar otru pirkstu izvēlas krustiņa vietā, un, turot Klikšķi, kustinot, velk. Ilgs nospiediens vai poga Enter ir Enter. Divi pirksti panoramē un tālummaina. Iespējas: ON, OFF, Auto (ieslēgts tikai tur, kur pirksts ir vienīgais rādītājs), Distance, Side. |
| `TOUR` | `TUTORIAL` | Atkārtoti veikt sešu soļu pirmā rasējuma ekskursiju |
| `TRIM` | `TR` | Apgriezt objektus līdz vietai, kur tos krusto citi: noklikšķiniet uz gabala, velciet cauri vairākiem vai Shift+klikšķis, lai pagarinātu |
| `TRIMEXTENDMODE` |  | Kā TRIM un EXTEND sākas: 1 Ātrais (katrs objekts ir griežama mala vai robeža), 0 Standarta (vispirms izvēlieties malas) |
| `TTR` |  | Riņķis, tangenciāls pie diviem objektiem, ar jūsu doto rādiusu (tas pats, kas CIRCLE T). |
| `TURNLEFT` |  | Pagriezt skatu 90° pa kreisi (pretēji pulksteņrādītāja virzienam): UCS Z -90, un skats seko. Nekas rasējumā nepārvietojas. |
| `TURNRIGHT` |  | Pagriezt skatu 90° pa labi (pulksteņrādītāja virzienā): UCS Z 90, un skats seko. Nekas rasējumā nepārvietojas. |
| `TURNWORLD` |  | Atpakaļ uz pasauli: UCS Pasaule, un skats atkal ir horizontāls. |
| `TXT2MTXT` | `T2M` | Savienot vienrindas tekstus vienā rindkopas tekstā, no augšas uz leju. |
| `UCS` |  | Jūsu pašu koordinātu sistēma: sākumpunkts un X ass (sākums, Z leņķis, 3punkti, OBject (Objekts), Previous (Iepriekšējais), World (Pasaule), NAmed (Nosauktais)). Punkti, ko ierakstāt, ortho, polārā izsekošana, režģis un jaunais teksts seko tai; skats pagriežas, lai tā X ass būtu horizontāla. Nekas rasējumā nepārvietojas. |
| `UNDO` | `U` | Atsaukt pēdējo komandu |
| `UNGROUP` |  | UNGROUP: sadalīt grupas. Atlasiet grupu objektus vai dodiet Nosaukumu. Objekti paliek rasējumā. |
| `UNION` | `UNI` | Savienot cietos ķermeņus vienā (3D) vai 2D reģionus vienā reģionā |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vēlreiz rādīt katru objektu, ko paslēpa ISOLATEOBJECTS vai HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kā tiek rādīti un ievadīti garumi: decimālie, pēdas un collas, daļskaitļi (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Atkal aprēķināt laukus un izvēlēties, kad tie atjauninās paši |
| `USDOUT` |  | Eksportēt 3D modeli kā USD (.usda teksts, .usdc binārs vai .usdz pakotne) |
| `VIEW` | `-VIEW`, `V` | Standarta 3D skati, perspektīvā vai paralēli (3D) |
| `VIEWBASE` | `FLATSHOT` | Novietot plakanu 2D skatu uz 3D cietajiem ķermeņiem (priekšpuse, augša, sāns vai izometrija, paslēptās līnijas punktētas) lapā vai modelī |
| `VIEWLABEL` | `VL` | Skata virsraksts lapā, kas rāda sava skatu loga skata nosaukumu un mainās līdzi. |
| `VOICE` |  | Ieslēgt vai izslēgt runātās komandas. Tās tiek atpazītas šajā datorā. |
| `VPCLIP` |  | Apgriezt lapas skatu logu slēgtam objektam vai uzzīmētam daudzstūrim; Delete padara to atkal par taisnstūri |
| `VPLAYER` |  | Iesaldēt vai atkausēt slāņus tikai dažos skatu logos (Freeze, Thaw, Reset) un izvēlēties, kuros slāņos jaunie skatu logi sākas iesaldēti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Sadalīt zīmēšanas laukumu rūtīs, katrai ar savu skatu (lapā: skatu logs, kā MVIEW) |
| `VPVIEW` |  | Iestatīt, ko rāda skatu logs: izvēlēties logu uz modeli |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D skata vizuālais stils: nokrāsots, malas, paslēpta līnija, rāmis, rentgens |
| `WALL` | `WA` | Zīmēt 2D sienas kā polilīniju. Tās savienojas un satur durvis un logus. |
| `WALLARC` | `WARC` | Zīmēt sienu loku. Plāna sienas ir taisnas, tāpēc loks tiek zīmēts kā īsas taisnas sienas (katra 15 grādi), kas savienojas. |
| `WALLDELSEG` |  | Dzēst sienas gabalu starp diviem punktiem. Atlikušais paliek kā viena vai divas sienas. |
| `WALLDIM` |  | Ierakstīt jaunu izmēra vērtību: siena tās tālākajā galā pārvietojas taisni pret sevi, siena pirmajā galā paliek, un tai savienotās sienas seko. |
| `WALLDISJOIN` |  | Izvēlēties sienu tuvu vienam galam, lai neatļautu savienojumus tajā galā: gals tiek zīmēts taisns un nekas tam neseko. Izvēlēties vēlreiz, lai atļautu. |
| `WALLGRID` |  | Bloķēt sienu pie režģa līnijas: gar to vai ar vienu galu uz tās. Pārvietot līniju ar GRIDMOVE, un siena seko. |
| `WALLHOLD` |  | Izlīdzināt un bloķēt: siena saglabā savu vietu pret citu sienu (tās līnijā vai attālumā, kādā tā ir). Ja viena pārvietojas, otra seko. |
| `WALLHOLDDIM` |  | Bloķēt attālumu starp divām paralēlām sienām. Ja viena pārvietojas, otra seko, lai to saglabātu. |
| `WALLHOLDS` |  | Uzskaitīt sienu bloķējumus. |
| `WALLJOINS` |  | Dot katrai vecāka rasējuma sienai tās ID un saglabāt savienojumus starp tām. Tas notiek arī pie pirmās izmaiņas, ko veicat. |
| `WALLJOINSTYLE` |  | Noklikšķiniet uz stūra, kur divas sienas saskaras galu pie gala, lai mainītu, kā tas tiek zīmēts: sašķiebts, pieslēgts, nogriezts taisni. T pārslēdz, kura siena iet cauri. |
| `WALLOFFSET` | `WO` | Pārvietot sienu taisni pret sevi par attālumu (tai savienotās sienas seko) vai izveidot kopiju tajā attālumā. |
| `WALLPICK` |  | Izveidot sienas uz līnijas vai polilīnijas rasējumā, ar tai savienotajām līnijām, ja sakāt Jā. |
| `WALLPOLY` | `WP` | Zīmēt sienas ap regulāru daudzstūri ar 3 līdz 64 malām, kā POLYGON. |
| `WALLRECT` | `WR` | Zīmēt četras savienotas sienas no diviem pretējiem stūriem, kā RECTANG. |
| `WALLREJOIN` |  | Padarīt divas sienas daļas atkal par vienu sienu. Pirmā paliek savā vietā rasējumā. |
| `WALLROT` |  | Zīmēt četras savienotas sienas kā taisnstūri, pagriezts jebkurā leņķī: pirmā mala, tad cik tālu uz āru. |
| `WALLSPLIT` | `WS` | Sadalīt sienu divās daļās punktā vai tur, kur krusto cita siena. Daļas paliek savienotas, ja vien nelūdzat spraugu vai brīvus galus. Durvis un logi iet kopā ar savu daļu. |
| `WALLSPLITGAP` |  | Sadalīt sienu, atstājot spraugu: ierakstiet spraugu, izvēlieties sienu, tad punktu. Daļām ir brīvi gali, un tās var atkal savienot. |
| `WALLSTRETCH` |  | Izstiept ar logu: sienu galus, kas tajā atrodas, pārvieto; sienas, kas pilnībā iekšā, pārvietojas veselas; un sienas, kas atduras pret tās sāniem, slīd kopā ar tām. |
| `WALLTAN` |  | Turpināt sienu ar loku, kas no tās aiziet gar sienu (zīmēts kā īsas taisnas sienas). |
| `WALLTRACE` |  | Izveidot sienas ap mazāko slēgto laukumu no līnijām un sienām ap punktu, uz kura noklikšķināt. |
| `WALLUNHOLD` |  | Noņemt bloķējumus no sienas (un citu sienu bloķējumus tai). |
| `WBLOCK` | `W`, `-WBLOCK` | Ierakstīt bloku, dažus objektus vai visu rasējumu jaunā DWG vai DXF failā (W) |
| `WEDGE` | `WE` | Ķīlis: divi stūri un augstums; tas slīpst prom no pirmā stūra (3D) |
| `WHEREAMI` | `WHERE` | Pateikt, kur atrodas kursors. |
| `WHOHAS` |  | Pasaka, kam ir rasējums atvērts. CadCraft Studio glabā mazu bloķēšanas failu blakus katram atvērtajam rasējumam (Plan.dwg.cclock: kas, kopš kura laika, kura versija) un noņem to aizverot. Iespējas: Current (atvērtais rasējums), File (izvēlēties vienu), FOlder (katrs rasējums mapē, kas kaut kur ir atvērts; tas arī ļauj Studio glabāt bloķēšanas failus šajā mapē), Path (ierakstīt vienu), Name (vārds, ko redz citi). Bloķējums, kas nav atjaunots piecas minūtes, tiek saukts par novecojušu. Pārlūkprogrammā nav pieejams. |
| `WINDOW` | `WN` | Ievietot logu sienā. |
| `XATTACH` | `XA` | Saistīt citu DWG vai DXF šim rasējumam, rādītu tikai lasāmā veidā (XREF uzskaita un pārlādē tos) |
| `XCLIP` | `XC` | Apgriezt bloku atsauces un saistītus rasējumus taisnstūrī vai daudzstūrī vai noņemt apgriezumu. |
| `XLINE` | `XL` | Palīglīnija, bezgalīga abos virzienos: caur diviem punktiem, horizontāla, vertikāla, leņķī, dalot leņķi vai nobīdīta no līnijas. |
| `XREF` | `XR`, `-XREF` | Saistītie rasējumi (ārējās atsauces): uzskaitīt, pievienot, pārlādēt, piesaistīt, atvienot |
| `ZOOM` | `Z` | Visu objektu apjoms vai logs |
