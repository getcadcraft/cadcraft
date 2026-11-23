---
title: Kas jauns versijā 0.7 (iepriekšējā)
summary: PDF pamatnes un PDF imports, skenēti rasējumi ar automātisku izsekošanu, īsti splaini ar SPLINE, SPLINEDIT un PEDIT, izmēru stilu pārvaldnieks, teksts, kas saglabā savu formatējumu, WBLOCK un jūsu pašu mērogi, 3D cietie objekti no citām programmām, skenējumu reģistrēšana, Lāzera panelis, USD eksports, Vēsture un drukāšana CadCraft Studio, vadīts pirmais rasējums, rīkjosla jebkurā malā vai mazākās rindās un vēl vairāk MI asistentiem.
keywords: kas jauns 0.7, iepriekšējais izlaidums, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, pdf, pdfattach, pdfimport, pamatne, skenēšana, scan, scanattach, scantrace, izsekošana, rastrs, rastersnap, splaini, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatējums, wblock, scalelistedit, mērogu saraksts, acis, 3D cietvielas, registerscans, skenējumu reģistrēšana, icp, e57, las, lāzers, grbl, g-code, usd, usdout, vēsture, versijas, salīdzināt, drukāt, printeris, png, svg, drukāšanas stils, līnijtips, ekskursija, īsā rokasgrāmata, komandu karte, rīkjoslas novietojums, rīkjoslas rindas, toolbardock, regen, regenall, skārienpaliktnis, vilkt, koda lapa, kirilica, korejiešu, ķīniešu, japāņu, elektroinstalācija, rcd, p&id, pid, acad.lsp, acaddoc.lsp, atbalsta mape, asistenti, mcp, vienības, portugāļu
from: d9a8ea79
---

Tas ir, kas mainījās CadCraft 0.7 salīdzinājumā ar 0.6. Liela daļa no tā tika pieprasīta Discord. Saraksts sagrupēts pēc jomām, ar svarīgākajām pirmajām.

## Jauns

### PDF un skenēti rasējumi

- **Novietojiet PDF lapu zem rasējuma.** {{cmd:PDFATTACH}} (`PDFATT`) novieto lapu īstā izmērā vai ierakstītā mērogā. Piesaistieties tās līnijām, padariet to bālāku, pārvērtiet melnbaltu ({{cmd:PDFADJUST}}), apgrieziet ({{cmd:PDFCLIP}}) un pārslēdziet paša PDF slāņus ({{cmd:PDFLAYERS}}). Tas drukājas kā līnijas, aizpildījumi un teksts, un DWG vai DXF 2000 to saglabā kā saiti uz failu. Atverot PDF ar {{ui:Open}}, tiek jautāts, vai to pievienot vai importēt. Skatiet [PDF pamatnes un PDF imports](topic:pdf-underlay).
- **Pārvērtiet PDF lapu rasējuma objektos.** {{cmd:PDFIMPORT}} (`PDFIM`) izveido līnijas, polilīnijas, riņķus, lokus, cietus šrafējumus un tekstu slāņos ar nosaukumiem pēc PDF, īstā izmērā, ierakstītā mērogā vai mērogotu pēc diviem punktiem un īsta attāluma, vienā atsaukšanas solī. Skatiet [Importēt lapu](topic:pdf-underlay#import-a-page).
- **Skenēti rasējumi.** {{cmd:SCANATTACH}} ievieto PNG, JPEG vai TIFF (vienu lapu vai visas) vai PDF lapu, kas ir attēls. Pēc tam to var mērogot pēc diviem punktiem ({{cmd:SCANSCALE}}), izlīdzināt ({{cmd:SCANALIGN}}), iztaisnot pēc tās pašas garajām līnijām ({{cmd:SCANDESKEW}}), padarīt melnbaltu un noņemt traipus ({{cmd:SCANCLEAN}}), apgriezt un izdzēst daļas. Katrs solis ir viens atsaukšanas solis, un sākotnējais fails tiek saglabāts. Skatiet [Skenēti rasējumi un izsekošana](topic:scanned-drawings).
- **Izsekojiet skenējumu līnijās un lokos.** {{cmd:SCANTRACE}} zīmē skenējuma līnijas kā līnijas un lokus jaunā slānī SCAN-TRACE ar jūsu iestatītu pielaidi un atstāj tekstu un šrafējumus, kā tie ir. Pārskats saka, ko tas izveidoja un ko atstāja, un tas nav apgalvojums, ka rezultāts ir pareizs: pārbaudiet to pret lapu. {{cmd:RASTERSNAP}} ļauj objektu piesaistēm atrast skenējuma galus, stūrus un krustpunktus. Nekas nekur netiek sūtīts, un nav izmantots apmācīts modelis. Skatiet [Izsekošana](topic:scanned-drawings#the-trace).

### Zīmēšana un rediģēšana

- **Īsti splaini.** {{cmd:SPLINE}} (`SPL`) zīmē līkni caur punktiem vai no kontrolpunktiem (pakāpe no 1 līdz 5), ar gala pieskarēm; {{cmd:SPLINEDIT}} (`SPE`) pārvieto, pievieno un dzēš pieguļošos vai kontrolpunktus, iestata svarus, atver, aizver, apgriež vai pārvērš splaini polilīnijā. Splaini no DWG un DXF failiem atveras kā splaini, un DWG un DXF 2000 tos saglabā kā splainus. Skatiet [Splaini un polilīnijas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) aizver un atver polilīnijas, pievieno tām līnijas un lokus, iestata vienu platumu, caur virsotnēm pielāgo līkni vai splainu gar tām un atgriež to ar Decurve, apgriež un rediģē vairākas reizē. Skatiet [Rediģēt polilīniju](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) ieraksta bloku, dažus objektus vai visu rasējumu jaunā DWG vai DXF failā, kurā ir tikai tie slāņi, stili un bloki, ko tie izmanto. Skatiet [Ierakstīt bloku vai objektus savā failā](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN un REGENALL.** {{cmd:REGEN}} (`RE`) pārzīmē cilni, kurā atrodaties, no rasējuma, {{cmd:REGENALL}} (`REA`) — visas cilnes, paneļus un atvērtos rasējumus. Skatiet [REGEN un REGENALL](topic:commands#regen-and-regenall).

### Teksts un izmēri

- **Teksts saglabā savu formatējumu.** Rindkopu teksts no citām programmām saglabā krāsas pa vārdiem, treknrakstu un slīpo, pasvītrojumu, sakrautus daļskaitļus un augstumus: tie tiek zīmēti ekrānā un PDF, saglabājas, kad rediģējat vārdus, un tiek saglabāti atpakaļ. Skatiet [Formatējums rindkopu tekstā no citām programmām](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Izmēru stilu pārvaldnieks.** {{cmd:DIMSTYLE}} (`D`) veido, maina, salīdzina un piemēro nosauktus izmēru stilus; mainot stilu, mainās katrs izmērs, kas to izmanto. {{cmd:DIMEDIT}} (`DED`) atjauno tekstu, ieraksta jaunu tekstu, pagriež to vai sašķiebj pagarinājuma līnijas; {{cmd:DIMTEDIT}} pārvieto tekstu pa kreisi, pa labi vai uz centru. Skatiet [Nosauktie izmēru stili](topic:dimension-settings#named-dimension-styles).
- **Jūsu pašu mērogi.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) pievieno mērogus, piemēram, 1:75, skatu logu un drukāšanas mērogu sarakstiem; tie tiek saglabāti rasējumā (DWG un DXF 2000), un rasējums no citas programmas atnes savu sarakstu. Skatiet [Mērogi](topic:units-papers-scales#scales).
- **Teksts citos alfabētos.** DXF faili, kas saglabāti kirilicas, korejiešu, ķīniešu, japāņu vai vjetnamiešu koda lapās, tagad atveras ar savu tekstu, un ķīniešu, japāņu un korejiešu teksts drukājas PDF (drukāšana pirmoreiz vajadzīgo fontu ielādē lielāku). Skatiet [Fonti](topic:text#font).

### Plotēšana un drukāšana

- **Vairāk plotēšanas stilu tabulās.** Katrai krāsai tabula tagad var iestatīt arī līnijtipu, līnijas galu un līniju savienojumu, kā arī aizpildījuma stilu, kas drukā cietus aizpildījumus kā šrafējuma līnijas; tabulai ir savs līnijas biezumu saraksts un līnijtipa mērogs. Skatiet [Plotēšanas stilu tabulas](topic:plot-pdf#plot-style-tables).
- **Drukāšana, un PNG un SVG faili.** Plotēšanas dialogā ir {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) un {{ui:Download SVG}}. CadCraft Studio tas uzskaita datora printerus, to papīru un kopiju skaitu. Skatiet [Drukāšana](topic:plot-pdf#print) un [Attēla un SVG faili](topic:plot-pdf#picture-and-svg-files).

### 3D un punktu mākoņi

- **3D cietie objekti no citām programmām.** Cietie objekti, reģioni un ķermeņi rasējuma modeļa telpā tiek rādīti 3D cilnē tikai lasīšanai, un saglabāšana DWG formātā tos ieraksta atpakaļ nemainītus. Virsmas, ko CadCraft vēl nezīmē, tiek uzskaitītas, nevis izdomātas. Skatiet [Cietie objekti no citām programmām](topic:3d-solids#solids-from-other-programs).
- **Reģistrējiet vairākus skenējumus.** {{cmd:REGISTERSCANS}} (`REGSCAN`) novieto skenējumus, kas uzņemti no dažādām vietām, vienā rāmī pēc punktu pāriem vai ierakstītām mērķa koordinātām, precizē tos ar ICP, saglabā reģistrāciju kā nelielu projekta failu un ieraksta reģistrēto mākoni kā vienu LAS vai E57 failu. Skatiet [Reģistrēt vairākus skenējumus vienā](topic:register-scans).
- **USD eksports.** {{cmd:USDOUT}} vai {{cmd:EXPORT3D}} › {{ui:USD}} ieraksta 3D cilnes cietos objektus kā `.usda`, `.usdc` vai `.usdz`. Skatiet [Eksportēt 3D modeli kā USD](topic:usd).
- **Aprēķini 3D cilnē.** Kur 3D cilnes rīki prasa attālumu, varat ierakstīt aprēķinu, kā komandrindā. Skatiet [Aritmētika ierakstītā vērtībā](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Lietu veidošana

- **Nosūtiet rasējumu uz lāzeru.** {{cmd:LASER}} vai {{ui:View}} › {{ui:More}} › {{ui:Laser…}} atver paneli virs rasējuma: katrs slānis griež, ieraksta, gravē līnijas, aizpilda formas, gravē attēlu vai netiek nosūtīts, ar savu jaudu, ātrumu un gājieniem. Priekšskatījums seko jūsu rediģēšanai, {{ui:Save G-code…}} ieraksta GRBL lāzera režīma G-kodu, un Chrome vai Edge pārlūkā panelis var iezīmēt darbu un nosūtīt to pa USB. Iestatījumi tiek saglabāti rasējumā (DWG un DXF). Skatiet [Nosūtīt rasējumu uz lāzeru](topic:laser-cutting).
- **Ēku instalāciju simboli elektroinstalācijas papildinājumā.** Datu, telefona un TV rozetes, atslēgu un laika slēdži, termostats, izejas zīme, detektori, izsaukuma punkts un signāls, ventilators, ūdens sildītājs, plīts, EV uzlādes punkts, enerģijas skaitītājs un apakšsadale, kā arī RCD un RCBO simboli. Ķēdei var būt RCD, paneļa specifikācijai ir RCD kolonna, un pārbaudes nosauc kontaktligzdu ķēdes bez RCD ar 30 mA vai mazāku. Tas ir plānošanas atgādinājums, nevis koda pārbaude.
- **P&ID papildinājums.** P&ID zīmē procesu diagrammas: simbolus ar savienojumu punktiem, procesa un signāla līnijas, marķējumus, līniju numurus, līniju, aprīkojuma, instrumentu un vārstu sarakstus (CSV vai darbgrāmata) un pārbaudes. Tas nāk kopā ar CadCraft un ir izslēgts, līdz to ieslēdzat sadaļā {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}. Tas ir zīmēšanas palīglīdzeklis, nevis inženieru apstiprinājums, un tā teksti pagaidām ir tikai angliski.

### Darba sākšana un ekrāns

- **Vadīts pirmais rasējums.** {{cmd:TOUR}} (vai {{ui:Take the tour}} sākuma kartītē) vada jūs cauri sešiem soļiem reālajā rasējumā: līnija, riņķis, pārvietošana, apgriešana, dzēšana un izmērs. Tas sākas pats pirmoreiz, kad CadCraft atveras tukšu. Skatiet [Vai vēlaties vadību?](topic:getting-started#prefer-to-be-guided)
- **Īsā rokasgrāmata un komandu karte.** [Īsā rokasgrāmata](topic:cheat-sheet) ietver 40 ikdienas komandas vienā lapā, arī kā PDF drukāšanai, un [komandu karte](topic:command-map) uzskaita komandas ar to īsajiem nosaukumiem no A līdz Z.
- **Rīkjosla jebkurā malā.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: augšā (kā agrāk), apakšā, kreisajā vai labajā pusē, vai ierakstiet {{cmd:TOOLBARDOCK}}. Skatiet [Rīkjoslas novietojums](topic:settings#toolbar-position).
- **Rīkjoslas rindas.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: ietīt, lai ietilptu, 2 rindas vai 1 rinda, CadCraft rīkjoslai un stiliem Drafting classic un Ribbon. {{key:Shift+Ctrl+F1}} pārslēdz tās, {{key:Ctrl+F1}} — to, ko rāda pogas, un {{cmd:TOOLBARROWS}} un {{cmd:TOOLBAR}} tās iestata. Sākuma norādei ir aizvēršanas poga. Paldies GJoe2, kurš to iesniedza kā izmaiņu pieprasījumu (pull request). Skatiet [Rīkjoslas rindas](topic:settings#toolbar-rows).

### CadCraft Studio

- **Vēsture.** {{cmd:HISTORY}} (`HIST`) vai {{ui:View}} › {{ui:More}} › {{ui:History…}}: kopijas, ko Studio glabā, kad atverat un saglabājat rasējumu, un rasējuma mākoņversijas, ja to atvērāt no mākoņa. Atveriet vai atjaunojiet vienu, vai salīdziniet divas, ar to, kas pievienots, noņemts un mainīts, krāsā parādītu. Skatiet [Vēsture](topic:history).
- **acad.lsp un acaddoc.lsp.** Izvēlieties atbalsta mapi komandā {{cmd:APPLOAD}}: abi faili ielādējas, kad CadCraft sākas (acaddoc.lsp atkal katrai jaunai rasējuma cilnei), un `S::STARTUP` izpildās pēc tiem. Skatiet [Lietotņu ielāde](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plotēšanas dialogs savā logā.** Poga tā virsrakstjoslā pārvieto to logā, ko var novietot uz cita monitora. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).

### MI asistentiem

- **Faili pēc nosaukuma, mapēs, ko izvēlaties.** CadCraft Studio asistents var atvērt, saglabāt un plotēt failus pēc nosaukuma un nodot komandai failu, ko tā pieprasa (INSERT no faila, COUNT eksports, SAVEAS, PLOT), bet tikai mapēs, ko pievienojat sadaļā {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}. Skatiet [Ļaut tam izmantot failus jūsu izvēlētās mapēs](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mazāk izsaukumu.** Asistents var ierakstīt visu komandrindu vienā reizē, paturēt komandu atvērtu starp izsaukumiem, saskaitīt objektus pēc tipa un slāņa, neuzskaitot tos, un ievietot bloku ar tā atribūtu vērtībām vienā solī.
- **Bez loga.** Komandrinda `cadcraft` ieraksta SVG plotus un pārvērš, plotē, pārbauda vai apraksta daudzus failus vienlaikus. MCP pakotne vēl nav publicēta. Skatiet [Darbs ar failiem, neatverot CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Mainīts

- **Skārienpaliktnis panoramē.** Pārvietojiet divus pirkstus pa skārienpaliktni, un 2D skats seko tiem; savilkšana un peles ritenis tālina. Skatiet [Pele, skārienpaliktnis un skāriens](topic:mouse-trackpad-touch).
- **OLE objekti tiek saglabāti.** DXF iegultie objekti tiek rādīti kā attēls vai kā iezīmēts rāmis un tiek saglabāti atpakaļ DXF 2000 formātā. DWG objekti tiek saglabāti un ierakstīti atpakaļ, kad saglabājat kā DWG, bet vēl netiek rādīti. Iepriekš tie saglabāšanas laikā pazuda. Skatiet [Objekti no citām programmām (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jauna rasējuma vienības** seko vienībai, kuru atzīmējat ar zvaigznīti sadaļā {{ui:Settings}} › {{ui:General}} › {{ui:Units}}.

## Labots

- Izkārtojumi, kas atvērās tukši vai zaudēja skata logu un rādīja visu modeli tā vietā, tagad atveras ar saviem īstajiem skata logiem. Izkārtojums bez saites uz saturu tiek saglabāts, un atvēršanas pārskats to saka.
- DXF faili vecākās koda lapās rādīja sakropļotu kirilicas un korejiešu tekstu. Tagad tie tiek nolasīti pareizi.
- Rindkopu teksts no citām programmām zaudēja savu formatējumu, kad to atvēra, un saglabājās kā vienkāršs teksts.

## Visās lietotnēs

- **Vienības.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} katram garumam, laukumam, tilpumam, leņķim un slīpumam ir savs saraksts ar precīziem izmēriem, kādus dod vienību definīcijas (ASV pārbaudes pēda ir sava vienība). Izslēdziet vienības, ko nekad nelietojat, un tās izies no vienību sarakstiem; atzīmējiet vienu ar zvaigznīti, un jaunais darbs sāksies tajā. Fails vienmēr saglabā savu vienību. Zvaigznītes iestatījums CadCraft iestata jauna rasējuma vienības, kad tā ir vienība, ko rasējums var nest; CadCraft pašas {{ui:Units}} lodziņš vēl neseko slēdžiem. Kad rasējumam ir vienības, ierakstīts garums var nest jebkuras vienības atzīmi. Skatiet [Vienības, ierakstītās vērtības un vienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas paslēpjas.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ekrānā ietilpina vairāk (skārienekrāni un tālruņi saglabā savas lielās pogas). Katram sānu panelim ir tievāka virsraksta josla: velciet to, lai piestiprinātu vai padarītu peldošu paneli, nometiet uz cita paneļa joslas, lai dalītu vienu rāmi kā cilnes, piespraudiet, lai tas paslīd uz malu, vai paslēpiet un atgrieziet no malas. Skatiet [Izkārtot paneļus](common:arrange-panels#make-the-layout-denser).
- **Dialogi pārvietojas.** Velciet dialogu aiz virsraksta joslas nost no rasējuma; tas atgriežas, kur to atstājāt. Veiciet dubultklikšķi uz virsraksta joslas, lai to atkal centrētu. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Ieteikumi MI asistentiem.** Desmit darba pieprasījumi jūsu pašu asistentam (sakārtot rasējumu, plotēt komplektu, pārbaudīt rasējumus, uzdot modelim jautājumus, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un vajadzīgajām atļaujām, un katrs atkārtots mūsu testos. Lietotnēs nav MI. Skatiet [Ieteikumi MI asistentiem](common:assistants-recipes).
- **Valodas.** {{ui:Settings}} › {{ui:General}} › {{ui:Language}} ir jaunā **Português (Portugal)**. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir visi lietotņu vārdi, kā melnraksti, ko dzimtā valoda vēl nav pārskatījusi. Palīdzības temati ir angļu valodā.
- **CadCraft Studio** pasaka, kāpēc atjauninājumu pārbaude neizdevās (nav faila jūsu sistēmai, nav tīkla, slikts paraksts), nevis tikai „Gatavs”, un vairs neatgriež kartīti Kas jauns, ko aizvērāt, līdz nav jaunākas versijas.

## Šajā versijā vēl nav

- **0.7 nav parakstīta ar kodu.** Parakstīšana un Microsoft Store pakotne pārcelta uz 0.8, jo sertifikāta pārbaude vēl nav pabeigta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:More info}} (Papildu informācija), tad {{ui:Run anyway}} (Palaist tomēr). Mac datorā pirmoreiz ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Open}}. CadCraft Studio vēl nav lietotņu veikalā, un vēl nav iPad vai iPhone versijas.
- Leņķu un slīpumu saraksti sadaļā {{ui:Units}} tiek saglabāti, bet neviens lodziņš tos vēl nenolasa.
- DWG OLE objekti tiek saglabāti, bet netiek rādīti, un metafailu attēli OLE objektos netiek zīmēti.
- Plotēšanas stilu tabulu (CTB failu) nolasīšana no citām programmām gaida paraugfailu.
- Vecāks āzijas teksts, kas rakstīts kā `\M+` kodi, tiek nolasīts, bet vēl nav pārbaudīts pret failu no citas programmas.
- PDF pamatnes: attēli lapas iekšienē tiek rādīti ekrānā, bet netiek plotēti; asistenta plotējums pamatnes atstāj ārpusē, un nav pārbaudīts, kā citas programmas nolasa saglabāto apgriezumu un mērogu.
- Vēsture: CadCraft vēl nesūta saglabājumus mākonī, tāpēc mākoņversijas ir tās, kas saglabātas no citām ierīcēm un tīmekļa. Vēsture ir tikai CadCraft Studio.
- Vēl nav pārbaudīts, vai Studio pēc restartēšanas saglabā acad.lsp atbalsta mapi; ja tā jautā, izvēlieties mapi atkal komandā APPLOAD.
- Lāzera panelis vēl nav izmēģināts uz īsta lāzera: pārbaudiet katru iestatījumu uz atgriezumiem. CadCraft Studio nav Web Serial, tāpēc Studio panelis saglabā tikai G-kodu.
- Skenējumu reģistrēšana ir pārbaudīta uz izdomātiem skenējumiem, vēl ne uz reāla skenera komplekta.
- Divu pirkstu panoramēšana ir izmēģināta ar simulētiem skārienpaliktņa notikumiem, vēl ne uz īsta skārienpaliktņa.
- {{cmd:PEDIT}} nav opcijas Edit vertex (izmantojiet rokturus vai Rekvizītus). Nobīde, apgriešana, pagarināšana, noapaļošana, pārtraukšana un savienošana vēl neņem splainus; splaina augstums (Z) netiek saglabāts.
- Jaunam rindkopu tekstam vēl nevar piešķirt formatēšanas kodus, un SVG plotos formatēts teksts rādās vienā krāsā.
- WBLOCK opcija „Visu rasējumu” ieraksta tikai modeli, ne lapas. Pašreizējais izmēru stils failā netiek saglabāts: rasējums atveras ar Standard kā pašreizējo.
- Lentes izvēlnes stiliem vēl nav slāņu, krāsu vai līnijtipu sarakstu: izmantojiet paneli {{ui:Layers}} un {{ui:Properties}}.
- Punktu mākoņi vēl netiek saglabāti rasējumā vai plotēti, un E57 faili atveras līdz 6 miljoniem punktu un 512 MB.
- CadCraft saglabātie DWG faili vēl nav pārbaudīti pašā AutoCAD.

Viss pārējais ir [Vēl nav izveidots](topic:not-built-yet).
