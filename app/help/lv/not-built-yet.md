---
title: Vēl nav izveidots
summary: Ko šī CadCraft zīmēšanas lietotnes versija vēl nedara un ko šodien darīt tās vietā.
keywords: trūkst, ierobežojumi, ctb, stb, drukas stils, rekvizīti, ucs, anotatīvs, dinamisks bloks, splains, ceļvedis, neatbalstīts, dwg saglabāšana, svītrojums, stiepšana, masīvs, savienot, matchprop, pārtraukt, pagarināt, līnijtips, līniju biezums, ārējā atsauce, mākonis, 3d, cieti ķermeņi, būla operācijas, multileader, wipeout
from: 87e56521
---

CadCraft ir izstrādes stadijā. Šajā lapā uzskaitīts, ko pašreizējā versija nedara, lai jūs to nemeklētu. Katrā punktā ir norādīts, ko darīt tā vietā šodien.

## Faili un saglabāšana

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| CadCraft DWG, kas pārbaudīts pašā AutoCAD | Katra saglabātā versija tiek nolasīta atpakaļ ar trim citu programmu DWG lasītājiem un ar CadCraft. Skatiet [Ko DWG saglabā un maina](topic:files#what-a-dwg-keeps-and-changes). |
| DXF saglabāšana, kas jaunāka par 2000 | Saglabājiet kā DXF 2000 vai kā DWG līdz AutoCAD 2018. |
| Saglabāšana pāri atvērtajam failam pārlūkprogrammā | Katra saglabāšana lejupielādē jaunu kopiju; ja vēlaties, vecā faila vietā paši ievietojiet jauno. CadCraft Studio {{key:Mod+S}} ieraksta atpakaļ atvērtajā failā. |
| Mākoņsaglabāšana un sinhronizācija starp datoriem | CadCraft vēl nesūta saglabājumus mākonī: glabājiet savus DWG un DXF failus savās mapēs. CadCraft Studio [Vēsture](topic:history) uzskaita rasējuma mākoņversijas, kas saglabātas citur, un jūsu pašu saglabājumu kopijas šajā datorā. |
| Pārklājumi un saistīta rasējuma rediģēšana vietā | Pievienojiet rasējumu kā saiti un pārlādējiet to pēc otra rasējuma maiņas. Saite paliek saite, kad saglabājat kā DWG, un {{cmd:XCLIP}} to apgriež. |
| Attēli DXF; wipeout, kas paslēpj to, kas atrodas zem tā | DXF saglabā attēlu kā tā rāmi ar faila nosaukumu; DWG to saglabā kā attēlu — skatiet [Attēli rasējumā](topic:pictures). Wipeout tiek rādīts kā tā rāmis. |
| Multileaderu rediģēšana ar izliektām vadlīnijām, ar vadlīnijām abās satura pusēs vai ar bloku, kas pagriezts vai mērogots nevienmērīgi | Tie tiek zīmēti tā, kā tos zīmēja otra programma, un pārvietojas kā viens veselums. Multileaderi ar taisnām vadlīnijām vienā nolaišanās punktā un ar tekstu vai bloku kā saturu ir rediģējami ({{cmd:MLEADEREDIT}}). |
| Tabulās no citām programmām: šūna ar bloku, teksta formatējums šūnā, katras šūnas malas un DXF tabulas krāsas, tabula, kas sadalīta kolonnās | Tabula atveras kā rediģējama tabula ({{cmd:TABLEDIT}}) un tiek rādīta tā, kā to zīmēja otra programma, līdz to rediģējat; tad CadCraft to pārzīmē no tās šūnām: vienkāršs teksts, formulas, piemēram, `=G3*H3` un `=Sum(I3:I9)`, izlīdzinājums un teksta augstumi. Bloku šūna pēc tam ir tukša. Neskarta DWG tabula tiek saglabāta atpakaļ ar tajā iekļautajiem šūnu datiem. |
| Tabulas objekts saglabātā DXF | DWG saglabā tabulu kā tabulu, ko citas programmas var rediģēt. DXF to saglabā kā bloku, kas to zīmē, ar CadCraft savu ierakstu: CadCraft to atver atkal kā tabulu; citas programmas redz bloku. Spoguļota vai nevienmērīgi mērogota tabula tiek tā saglabāta arī DWG. |
| Kopēšana un ielīmēšana ar citām programmām | CadCraft starpliktuve darbojas starp CadCraft rasējumiem un cilnēm vienā pārlūkprogrammā, nevis ar citām programmām. Saglabājiet kā DWG vai DXF un atveriet tur. Skatiet [Kopēt, ielīmēt un dublēt](topic:copy-paste). |

## Zīmēšana un rediģēšana

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| Svītrojuma raksti, kādu CadCraft nav, un gradienta aizpildījumi tieši tā, kā tos krāso citas programmas | Atvērti svītrojumi ar rakstiem, kādu CadCraft nav, tiek rādīti kā tonis. Gradienta aizpildījums ({{cmd:GRADIENT}}) tiek krāsots CadCraft savā veidā katram tipam: pēc veida līdzīgi citu programmu, bet ne punktam pa punktam. DWG 2004 un jaunākas versijas to saglabā kā īstu gradienta svītrojumu; DXF 2000 vai DWG 2000 failā to nolasa tikai CadCraft, un citas programmas redz cietu aizpildījumu. Rakstus ielādē no `.pat` faila, un svītrojumu var saistīt ar tā kontūru, tad tas seko tai: skatiet [Svītrojums un aizpildāmi laukumi](topic:hatch). |
| Līnijtipi ar formām vai tekstu, un līniju biezumi saglabātā DXF R12 | Formas un teksts faila līnijtipā netiek iekļauti tā svītrās; lai saglabātu līniju biezumus, saglabājiet kā DWG. |
| Svītrojumi ar rakstu saglabātā DXF | R12 nav svītrojuma: tie tiek saglabāti kā to kontūras. Lai saglabātu rakstu, saglabājiet kā DWG. |
| Masīvi, ko izveidojusi cita programma vai ko var rediģēt citā; rindas un līmeņi ceļa un polārajos masīvos; masīvs, kas seko sava ceļa līknei | Masīvs, kas izveidots ar ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; mainīts ar {{cmd:ARRAYEDIT}}), tiek saglabāts kā bloka atsauce ar CadCraft savām vērtībām: citas programmas to rāda, pārvieto, drukā un sadala, bet nevar mainīt tā skaitu; citā programmā izveidots masīvs šeit tiek atvērts kā vienkārša bloka atsauce. Ceļa masīvs saglabā sava ceļa kopiju: ja vēlāk mainīsiet līkni, vienumi nepārvietosies. |
| Apgrieztie lapas skata logi uz un no citām programmām | Skata logs, ko apgriezis {{cmd:VPCLIP}} vai kas izveidots ar {{cmd:MVIEW}} Polygonal vai Object, tiek saglabāts ar CadCraft savu kontūru: citas programmas to atver kā apkārtējo taisnstūri, un citā programmā apgriezts skata logs šeit tiek atvērts kā tā taisnstūris. DXF R12 saglabā tikai taisnstūri. |
| {{cmd:STRETCH}} ar krustojošu daudzstūri | Izmantojiet vienu vai vairākus krustojošos logus. |
| {{cmd:PEDIT}} Edit vertex (viena virsotne vienlaikus komandrindā) | Rokturi un virsotņu pārlūks rekvizītos (katra virsotne, tās platumi un izliekums). Pārējais no PEDIT ir izveidots: skatiet [Splaini un polilīnijas](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} un {{cmd:JOIN}} uz elipsēm un splainiem | {{cmd:EXPLODE}} splainu (vai {{cmd:PEDIT}} to), lai iegūtu polilīniju, ar ko šīs komandas strādā. |
| Noapaļojums un fasējums starp polilīnijas loka segmentu un blakus esošo segmentu; noapaļojums, kas pievieno līniju polilīnijai | {{cmd:EXPLODE}} polilīniju, tad noapaļojiet daļas. Noapaļojuma loks tiek pievienots kā atsevišķs objekts. |
| Apgriešana un paplašināšana: Project opcija (3D) un polilīnijas loka gala paplašināšana | Apgrieziet rasējuma plaknē; loka galam sadaliet polilīniju vai zīmējiet loku no jauna. |
| OLE objekti: to ievietošana, palaišana vai rediģēšana; to rādīšana DWG, kur fails tos novieto; metafailu attēli | Skatiet [Attēli](topic:pictures#objects-from-other-programs-ole). DXF objekti tiek rādīti kā to bitkarte vai iezīmēts rāmis; DWG objekti tiek saglabāti, bet netiek zīmēti savā vietā ({{cmd:OLELIST}} tos uzskaita un vietā, ko norādāt, ieliek attēla kopiju). |
| Formatēšanas kodu rakstīšana (treknraksts, sakrautas daļskaitļi, krāsas pa vārdiem) rindkopas tekstā; fonti, kas nav viens Helvetica tipa fonts; kolonnas | Faila formatējums tiek saglabāts, zīmēts un saglabāts (skatiet Tekstu); jauns rindkopas teksts ir viena augstuma un krāsas. |
| Rindkopas teksts, rediģēts pēc tā pagriezuma | Redaktors atveras līmenī; teksts saglabā savu pagriezumu. |
| Multileaderi, saglabāti DXF kā multileader objekti | DWG tos saglabā kā multileaderus ar katru vadlīniju un bloku kā saturu; DXF saglabā to, ko tie zīmē (līnijas, bultiņas un tekstu vai bloku). |
| Tabulās ({{cmd:TABLE}}): teksts, kas aplaužas šūnā, tabulas, kas sadalās daļās, tabulas stila paša teksta stils un krāsas pa rindu tipiem dialogā, datu saite uz izklājlapas failu (`.xlsx`) vai saite, kas pati lasa failu | Šūnas teksts laužas tikai tur, kur to lauzāt ({{key:Alt+Enter}}); paplašiniet kolonnu. {{cmd:DATALINK}} lasa `.csv` failu, un {{cmd:DATALINKUPDATE}} prasa izvēlēties failu no jauna. {{cmd:DATAEXTRACTION}} un {{cmd:COUNTTABLE}} izveido tabulu, kas pati neseko rasējumam: palaidiet tās vēlreiz (dzīvs skaitījums: {{cmd:BOMTABLE}}). |
| Atribūtu definīcijas, kas saglabātā failā glabātas atsevišķi (ārpus bloka), daudzrindu atribūti | Pirms saglabāšanas ievietojiet atribūtu definīcijas blokā: atsevišķi tās tiek saglabātas kā teksts, kas rāda tagu. |
| Slāņu stāvokļi (kuri slāņi ir ieslēgti, saglabājot un atjaunojot) | Izmantojiet {{cmd:LAYISO}} / {{cmd:LAYUNISO}} vai ieslēdziet un izslēdziet slāņus pašrocīgi. |
| Logu daudzstūra un krustojošā daudzstūra atlase un saglabātie atlases filtri | Žogs (`F`), Logs, Krustojums, Noņemt (`R`), {{cmd:QSELECT}} noteikumam. |


## Rekvizītu panelis

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| Fit izvēļu zīmēšana un teksta horizontālā pozīcija un teksts zem līnijas izmēros, kas nav lineāri vai izlīdzināti | Tie tiek saglabāti objektā, rādīti rekvizītos un saglabāti; CadCraft novieto tekstu pēc sava noteikuma. |
| Materiāli, ko redz citas programmas | Saglabātais fails glabā materiāla nosaukumu CadCraft vajadzībām; citas programmas rāda slāņa materiālu. |
| Caurspīdīgums DWG 2000 un DXF failos | Citas programmas rāda šos objektus cietus; CadCraft saglabā caurspīdīgumu. Visiem saglabājiet kā DWG 2004 vai jaunāku. |
| Svītrojuma saite, kas izveidota citā programmā | CadCraft saglabā savu saiti DWG un DXF 2000 failos; citās programmās izveidotās saites netiek nolasītas. Izmantojiet `HATCHEDIT` un Saite: skatiet [Svītrojums un aizpildāmi laukumi](topic:hatch). |
| Koordinātas rekvizītos UCS | Rekvizīti rāda pasaules koordinātas; statusa josla un {{cmd:ID}} rāda UCS koordinātas. Skatiet [Pagrieziet skatu un izmantojiet savas koordinātas](topic:ucs-and-turned-view). |
| Atsevišķa pozīcija anotatīvam objektam katrā no tā mērogiem; citu programmu saglabāto mērogu ierakstu lasīšana | Anotatīvs teksts vai izmērs glabā mērogu sarakstu ({{cmd:OBJECTSCALE}}), un katrs skata logs to rāda tam mērogam atbilstošā izmērā, tajā pašā vietā. Saraksts tiek saglabāts kā CadCraft savi dati: cita programma redz objektu tikai vienā mērogā, kādam tas izmērots, un citā programmā izveidots saraksts netiek nolasīts. Skatiet [Vienības, lapas un mērogi](topic:units-papers-scales#annotate-by-scale). |
| Dinamiska bloka attālumu, leņķu vai apgriezienu maiņa; dinamiskie bloki, kas paliek dinamiski, saglabājot citā DWG versijā vai kā DXF | Mainiet tā redzamības stāvokli sadaļā Rekvizīti › {{ui:Pielāgots}}; tā citas vērtības tur redzamas tikai lasīšanai. Tas paliek dinamisks, saglabājot kā DWG tajā versijā, kādā rasējums atvērts. Skatiet [Dinamiskie bloki](topic:dynamic-blocks). |
| Splainu pieguļošanas pielaide, splaina pakāpe 6 un augstāka, 3D splaini | Pieguļošanas un vadības punkti, pakāpes no 1 līdz 5 un svari ir izveidoti: skatiet [Splaini un polilīnijas](topic:splines). Splaina augstums (Z) netiek saglabāts. |

## Precizitātes palīgi

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| Izsekošana no punktiem pāri komandām un izsekošanas iestatījumu dialogs (relatīvie polārie leņķi, papildleņķi) | {{cmd:POLARANG}} iestata soli; iegūstiet punktus no jauna nākamajā komandā. |
| Pieķeršana režģim | Ievadiet koordinātas; režģis ir tikai vizuāls palīgs. |
| Loka un garuma opcijas, atlasot laukuma stūrus, un MEASUREGEOM Volume | Zīmējiet kontūru ar {{cmd:PLINE}} (ieskaitot lokus), tad {{cmd:AREA}} `O`. |
| Dinamiskā ievade režģu rokturiem un tās opciju saraksts (lejupvērstā bultiņa) | Komandrindā tiek rādītas opcijas. |
| Leņķi grādos-minūtēs-sekundēs, grados vai mērnieku azimutos | Ievadiet decimālos grādus: `30.5` nozīmē 30°30'. |
| Skatu pārvaldnieka dialogs; lapas nosauktie skati, kas atgriežas tajā pašā lapā | {{cmd:NAMEDVIEW}} uzskaita un atjauno skatus. Saglabātais fails tos glabā, bet lapas skati atgriežas pirmajā lapā. |

## Lapas, izmēri un drukāšana

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| Skata loga mēroga lauki, nosaukts objekts, piemēram, slānis vai bloks, hipersaite un lapu kopas lauki, kas iet tālāk par lapas numuru un nosaukumu; lauki, kas rakstīti kā lauku objekti, ko citas programmas atjauno | {{cmd:FIELD}} ietver datumu, faila nosaukumu, lapas numuru, nosaukumu un skaitu, rasējuma rekvizītus ({{cmd:DWGPROPS}}), objekta laukumu, garumu un citus rekvizītus, kā arī formulas tekstā, atribūtos un tabulu šūnās. Cita programma rāda CadCraft lauku kā tekstu, ko tā pēdējo reizi nolasīja; CadCraft nolasa citas programmas datuma, faila nosaukuma, rekvizīta, lapas un izteiksmes laukus, bet pārējos tipus atstāj kā tekstu. Skata loga mērogs tiek ierakstīts ar roku. |
| Pašreizējā izmēru stila saglabāšana; izmēra teksts, kas vilkts uz brīvu vietu | Rasējums atveras ar pašreizējo Standard. Teksts atrodas uz izmēru līnijas ({{cmd:DIMTEDIT}} Left / Right / Center). Skatiet [Iestatīt izmēru lielumus](topic:dimension-settings). |
| Rediģējami divrindu leņķa izmēri no atvērtiem failiem, kurus CadCraft nevar aprēķināt | Tie tiek rādīti tā, kā zīmēti failā. Ordinātu, loka garuma un lauzto rādiusu izmēri atveras kā rediģējami izmēri. |
| CTB lasītāja pārbaude pret citas programmas failu (tas ir izveidots pēc publicētā apraksta), nosauktie drukas stili (STB), dither, pildspalvu numuri, pelēktoņi no CTB un adaptīvā līnijtipa pielāgošana drukas stilā | Izveidojiet tabulu {{ui:Drukas stila tabulas}} (krāsa, pelēkā, tinte, līniju biezums, līnijtips, līnijas gals un savienojums, un aizpildījuma stils pa krāsām): skatiet [Drukas stila tabulas](topic:plot-pdf#plot-style-tables). |
| Lapu iestatījumi | Izvēlieties papīru, mērogu un drukas stilu dialogā {{ui:Drukāt PDF}}; lapa saglabā savu drukas stilu. |
| Hindi un citi raksti, kam PDF vajadzīga sarežģīta veidošana, un retās ideogrāfijas (Eiropas rakstu valodas, kirilica, grieķu, ebreju, arābu, persiešu, urdu, taju, ķīniešu, japāņu un korejiešu druka) | Tie tiek izdrukāti kā "?". |
| Arābu raksts un ķīniešu, japāņu vai korejiešu teksts vienā izdrukātā PDF | Vienā drukā ir viens fonts: viens no diviem rakstiem tiek izdrukāts kā "?". |
| Skaidras virziena zīmes tekstā (iegulšana, pārrakstīšana, izolācijas) | Tās tiek ignorētas: katra rinda tiek kārtota tikai pēc tās burtiem. |
| Attēli pievienotā PDF lapā, drukā | Lapas līnijas, aizpildījumi un teksts tiek izdrukāti. Lapa, kas ir tikai attēls, tiek ievietota ar {{cmd:SCANATTACH}}, un attēli tiek izdrukāti. Skatiet [PDF pamatnes](topic:pdf-underlay#plot-and-save). |
| Darba nosūtīšana uz lāzeru no CadCraft Studio (Studio nav Web Serial) | Saglabājiet G-kodu un nosūtiet to ar sava lāzera programmu vai nosūtiet no Chrome vai Edge. Skatiet [Nosūtīt rasējumu uz lāzeru](topic:laser-cutting#send-from-the-browser). |

## Ierobežojumi un parametri

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| Ierobežojumi uz lapām, blokos, uz elipsēm, splainiem vai tekstā | Ierobežojiet cilnē {{ui:Modelis}}, uz līnijām, polilīnijām, riņķiem, lokiem un punktiem. |
| Gludi (G2) un polilīnijas loka izliekuma tieša ierobežošana | Pieskarīgs un vienāds; loka segments seko tā abiem galiem. |
| Atsauces (vadāmie) izmēru ierobežojumi un `3Point` {{cmd:DCANGULAR}} | Parasts izmērs (DIMLINEAR …) rāda vērtību, bet to nevada. |
| Fiksēta izmēra izmēru ierobežojumi uz papīra un to drukāšana | Tie tiek rādīti tikai ekrānā; drukai pievienojiet parastos izmērus. |
| Ierobežojumi, kas saglabājas caur EXPLODE, BREAK, JOIN un citām komandām, kas veido jaunus objektus, un apgrieztās polilīnijās | Ierobežojiet tos vēlreiz (AUTOCONSTRAIN palīdz). {{cmd:MIRROR}} un {{cmd:TRIM}} līnijām, lokiem un riņķiem tos saglabā. |
| Projektēšanas tabulas (konfigurācijas) CadCraft | Mainiet parametrus panelī. |
| Pārbaudīta apmaiņa ar SolidWorks | Pirms paļaušanās pārbaudiet skici, ko veido makro. |

## 3D

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| Noapaļojumi, fasējumi, čaulas un pārejas virsmas (loft); izvilkumi pa ceļu, kas paceļas (3D ceļi) | Izvelciet kontūras ar lokiem, stumiet un velciet virsmas, rotējiet un izvelciet pa plakaniem ceļiem. |
| Izvilkšana citā virzienā nekā uz augšu | Zīmējiet formu uz zemes un izvelciet to uz augšu vai uz leju (ja vēlaties, ar konusu vai pa ceļu); pēc tam pagrieziet cieto ķermeni. |
| Augstums un biezums 2D objektiem | Rasējums atrodas uz zemes (augstums 0) cilnē 3D. |
| Cietu ķermeņu, reģionu un ķermeņu rediģēšana no citām programmām; to rādīšana blokos; to virsmas uz pārvietotām, pārejas virsmām vai citām brīvām virsmām; polyface un daudzstūru tīkli | Modeļa telpas cietie ķermeņi tiek rādīti cilnē 3D tādi, kādi tie ir, un DWG tiek saglabāti atpakaļ nemainīti; tas, kas nav zīmēts, tiek uzskaitīts, atverot cilni 3D. Lūdziet tīklus kā 3D sejas modeļa telpā. Skatiet [Cietie ķermeņi no citām programmām](topic:3d-solids#solids-from-other-programs). |
| Cietu ķermeņu kopēšana un ielīmēšana | Cilnē 3D izmantojiet {{cmd:COPY}}. Starpliktuvē ir tikai 2D objekti. |
| Griezumi, skati, kas seko vēlākām cietu ķermeņu izmaiņām, un ēnoti cietie ķermeņi uz drukātām lapām | {{cmd:VIEWBASE}} ievieto plakanus skatus (momentuzņēmumu); palaidiet to vēlreiz pēc cietu ķermeņu maiņas. |
| Materiāli, tekstūras un apgaismojuma iestatījumi | Vizuālie stili: ēnoti, malas, paslēpta līnija, rāmis, rentgens. |
| Kartes slāņi, kas drukāti, lapu skata logos un cilnē 3D; attēli no failiem, kas saglabāti kopā ar rasējumu; rasējuma atrašanās vieta, kas rakstīta citām programmām DWG 2000–2007 un DXF R12 | Kartes slāņi ekrānā tiek rādīti zem modeļa telpas; sistēma un slāņu saraksts tiek saglabāti kopā ar rasējumu: skatiet [Kartes slāņi zem rasējuma](topic:map-layers) |
| E57 skenējumi virs 6 miljoniem punktu vai 512 MB, skeneru ražotāju savi faili (RCP, RCS, FLS, LGS, TZF, ZFS), punktu mākonis, kas saglabāts kopā ar rasējumu vai drukāts, piesaiste mākonim cilnē 3D, vertikālie (griezuma) slāņi cilnē Modelis | Eksportējiet lielus vai ražotāju skenējumus kā LAS vai LAZ ([Punktu mākoņa formāti](topic:point-cloud-formats)); pievienojiet mākoni katru reizi, kad atverat rasējumu; zīmējiet no plāna slāņa cilnē Modelis: skatiet [Izsekot izpildbūves līnijas pāri punktu mākonim](topic:point-clouds) |
| Skenējumu reģistrācija: mērķu (sfēru, šaha galdiņu) atrašana skenējumā pašam, visu skenējumu risināšana kopā (kopējā izlīdzināšana), mērogs, reģistrācija pret modeli | Izvēlieties atbilstošus punktus vai ievadiet mērķu koordinātas, tad precizējiet pa vienam skenējumam ar ICP: skatiet [Reģistrēt vairākus skenējumus vienā](topic:register-scans) |

## Rutīnas un pielāgošana

| Vēl nav izveidots | Tā vietā, šodien |
|---|---|
| Kompilēts vai aizsargāts LISP (.fas, .vlx), vietējās programmas (.arx, .crx, .dbx) un VBA (.dvb) | Ielādējiet rutīnas .lsp pirmkodu ar {{cmd:APPLOAD}}. |
| LISP `grread`, reaktori (`vlr-…`), līknes funkcijas (`vlax-curve-…`), vārdnīcas un paplašinātie dati, Express Tools `acet-…` | Pārējā valoda darbojas: skatiet [Palaist LISP rutīnas](topic:run-lisp). Komandrinda nosauc trūkstošo funkciju, kad rutīna to sasniedz. |
| Attēli un slaidi rutīnas dialogā | Tie tiek rādīti kā tukši rāmji; pārējais dialogs darbojas. |
| CraftScript (.craft), Lua un Python CadCraft | Palaidiet tos PartCraft skriptu darbvietā. |
| Slāņu, krāsu un līnijtipu saraksti lentes izvēlņu stilos | Izmantojiet {{ui:Slāņi}} paneli un {{ui:Rekvizīti}}. |
| Startup Suite un aizstājvārdi, kas glabāti jūsu datorā vai sinhronizēti | Tie tiek glabāti šajā pārlūkprogrammā; darbvirsmas lietotne un mākoņpakalpojums tos glabās jūsu vietā. Studio `acad.lsp` un `acaddoc.lsp` tiek nolasīti no atbalsta mapes, ko izvēlaties (Ielādēt lietojumprogrammas). |

## Palīdzība

Palīdzība apraksta šo versiju. Kad kaut kas tiek pievienots, tas pāriet no šīs lapas uz pamācībām.
