---
title: Kas jauns 0.7 versijā
summary: PDF pamatnes un PDF importēšana, skenēti rasējumi ar automātisku izsekošanu, īsti splaini ar SPLINE, SPLINEDIT un PEDIT, izmēru stilu pārvaldnieks, teksts, kas saglabā formatējumu, WBLOCK un jūsu pašu mērogi, 3D cietie ķermeņi no citām programmām, skenu reģistrēšana, Laser panelis, USD eksports, vēsture un drukāšana CadCraft Studio, vadīts pirmais rasējums, rīkjosla jebkurā malā vai mazākās rindās un vairāk AI asistentiem.
keywords: kas jauns, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, pdf, pdfattach, pdfimport, pamatne, skenēt, scanattach, scantrace, izsekošana, rastrs, rastersnap, splains, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatējums, wblock, mērogu saraksts, scalelistedit, akadas, 3d cietie ķermeņi, registerscans, skenu reģistrēšana, icp, e57, las, lāzers, grbl, g-kods, usd, usdout, vēsture, versijas, salīdzināt, drukāt, printeris, png, svg, drukas stils, līniju tips, ekskursija, īsā atsauce, komandu karte, rīkjoslas novietojums, rīkjoslas rindas, toolbardock, regen, regenall, skārienpaliktnis, vilkšana, kodu lapa, kirilica, korejiešu, ķīniešu, japāņu, elektroinstalācija, rcd, p&id, pid, acad.lsp, acaddoc.lsp, atbalsta mape, asistenti, mcp, vienības, portugāļu
from: b9258ca6
---

Šeit ir izmaiņas CadCraft 0.7 versijā salīdzinājumā ar 0.6. Daudz no tā tika pieprasīts Discord. Saraksts ir sagrupēts pēc jomas, vispirms svarīgākais.

## Jaunums

### PDF un skenēti rasējumi

- **Ievietot PDF lapu zem rasējuma.** {{cmd:PDFATTACH}} (`PDFATT`) ievieto lapu tās patiesajā izmērā vai mērogā, ko ierakstāt. Piesaistiet tās līnijām, padariet to izbalējušu, pārveidojiet to melnbaltu ({{cmd:PDFADJUST}}), apgrieziet ({{cmd:PDFCLIP}}) un pārslēdziet paša PDF slāņus ({{cmd:PDFLAYERS}}). Tā drukājas kā līnijas, aizpildījumi un teksts, un DWG vai DXF 2000 to saglabā kā saiti uz failu. Atverot PDF ar {{ui:Atvērt}}, tiek jautāts, vai to pievienot vai importēt. Skatiet [PDF pamatnes un PDF importēšana](topic:pdf-underlay).
- **Pārvērst PDF lapu rasējuma objektos.** {{cmd:PDFIMPORT}} (`PDFIM`) izveido līnijas, polilīnijas, riņķus, lokus, cietus svītrojumus un tekstu uz slāņiem ar nosaukumiem pēc PDF, patiesajā izmērā, ierakstītā mērogā vai mērogotu pēc diviem punktiem un reāla attāluma, vienā atsaukšanas solī. Skatiet [Importēt lapu](topic:pdf-underlay#import-a-page).
- **Skenēti rasējumi.** {{cmd:SCANATTACH}} ievieto PNG, JPEG vai TIFF (vienu lapu vai visas) vai PDF lapu, kas ir attēls. Pēc tam to var mērogot pēc diviem punktiem ({{cmd:SCANSCALE}}), izlīdzināt ({{cmd:SCANALIGN}}), iztaisnot pēc tā paša garajām līnijām ({{cmd:SCANDESKEW}}), padarīt melnbaltu un noņemt traipus ({{cmd:SCANCLEAN}}), apgriezt un izdzēst tā daļas. Katrs solis ir viens atsaukšanas solis, un oriģinālais fails tiek saglabāts. Skatiet [Skenētie rasējumi un izsekošana](topic:scanned-drawings).
- **Izsekot skenējumu līnijās un lokos.** {{cmd:SCANTRACE}} zīmē skenējuma līnijas kā līnijas un lokus jaunā slānī SCAN-TRACE, ar jūsu iestatītu pielaidi, un tekstu un svītrojumus atstāj, kā tie ir. Pārskatā teikts, ko tas izveidoja un ko atstāja, un tas nav apgalvojums, ka rezultāts ir pareizs: pārbaudiet to pret lapu. {{cmd:RASTERSNAP}} ļauj objektu piesaistēm atrast skenējuma galus, stūrus un krustpunktus. Nekas nekur netiek sūtīts, un netiek izmantots apmācīts modelis. Skatiet [Izsekošana](topic:scanned-drawings#the-trace).

### Zīmēšana un rediģēšana

- **Īsti splaini.** {{cmd:SPLINE}} (`SPL`) zīmē līkni caur punktiem vai no vadības punktiem (pakāpe no 1 līdz 5), ar gala tangentēm; {{cmd:SPLINEDIT}} (`SPE`) pārvieto, pievieno un dzēš pieguļošos vai vadības punktus, iestata svarus, atver, aizver, maina virzienu vai pārvērš splainu polilīnijā. Splaini no DWG un DXF failiem atveras kā splaini, un DWG un DXF 2000 tos saglabā kā splainus. Skatiet [Splaini un polilīnijas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) aizver un atver polilīnijas, pieslēdz tām līnijas un lokus, iestata vienu platumu, pielāgo līkni caur virsotnēm vai splainu gar tām un atgriež to ar Decurve, maina virzienu un rediģē vairākas reizi. Skatiet [Rediģēt polilīniju](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) ieraksta bloku, dažus objektus vai visu rasējumu jaunā DWG vai DXF failā, kurā ir tikai to izmantotie slāņi, stili un bloki. Skatiet [Ierakstīt bloku vai objektus savā failā](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN un REGENALL.** {{cmd:REGEN}} (`RE`) pārzīmē cilni, kurā atrodaties, no rasējuma, {{cmd:REGENALL}} (`REA`) visas cilnes, logus un atvērtos rasējumus. Skatiet [REGEN un REGENALL](topic:commands#regen-and-regenall).

### Teksts un izmēri

- **Teksts saglabā savu formatējumu.** Rindkopu teksts no citām programmām saglabā krāsas pa vārdiem, treknrakstu un slīprakstu, pasvītrojumu, sakrautas daļas un augstumus: tie tiek zīmēti ekrānā un PDF, tiek saglabāti, kad rediģējat vārdus, un tiek saglabāti atpakaļ. Skatiet [Formatējums rindkopu tekstā no citām programmām](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Izmēru stilu pārvaldnieks.** {{cmd:DIMSTYLE}} (`D`) veido, maina, salīdzina un piemēro nosauktus izmēru stilus; mainot stilu, mainās katrs izmērs, kas to izmanto. {{cmd:DIMEDIT}} (`DED`) atjauno tekstu, ieraksta jaunu tekstu, pagriež to vai sašķiebj izvilkuma līnijas; {{cmd:DIMTEDIT}} pārvieto tekstu pa kreisi, pa labi vai uz centru. Skatiet [Nosauktie izmēru stili](topic:dimension-settings#named-dimension-styles).
- **Jūsu pašu mērogi.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) pievieno tādus mērogus kā 1:75 skatlogu un drukas mērogu sarakstiem; tie tiek saglabāti rasējumā (DWG un DXF 2000), un rasējums no citas programmas atnes savu sarakstu. Skatiet [Mērogi](topic:units-papers-scales#scales).
- **Teksts citos alfabētos.** DXF faili, kas saglabāti kirilicas, korejiešu, ķīniešu, japāņu vai vjetnamiešu kodu lapās, tagad atveras ar savu tekstu, un ķīniešu, japāņu un korejiešu teksts drukājas PDF (drukāšana pirmajā reizē, kad tas nepieciešams, ielādē lielāku fontu). Skatiet [Fonts](topic:text#font).

### Drukāšana un izdrukāšana

- **Vairāk drukas stilu tabulās.** Katrai krāsai tabula tagad var iestatīt arī līniju tipu, līnijas galu un līniju savienojumu, kā arī aizpildījuma stilu, kas drukā cietās aizpildes kā svītrojuma līnijas; tabulai ir savs līniju biezumu saraksts un līniju tipa mērogs. Skatiet [Drukas stilu tabulas](topic:plot-pdf#plot-style-tables).
- **Izdrukāšana un PNG un SVG faili.** Drukas dialogā ir {{ui:Drukāt…}}, {{ui:Lejupielādēt PNG}} (300 dpi) un {{ui:Lejupielādēt SVG}}. CadCraft Studio tas uzskaita datora printerus, to papīru un kopiju skaitu. Skatiet [Drukāšana](topic:plot-pdf#print) un [Attēla un SVG faili](topic:plot-pdf#picture-and-svg-files).

### 3D un punktu mākoņi

- **3D cietie ķermeņi no citām programmām.** Cietie ķermeņi, reģioni un ķermeņi rasējuma modeļa telpā tiek rādīti cilnē 3D tikai lasīšanai, un saglabājot kā DWG, tie tiek rakstīti atpakaļ nemainīti. Skaldnes uz virsmām, ko CadCraft vēl nezīmē, tiek uzskaitītas, nevis minētas. Skatiet [Cietie ķermeņi no citām programmām](topic:3d-solids#solids-from-other-programs).
- **Reģistrēt vairākus skenējumus.** {{cmd:REGISTERSCANS}} (`REGSCAN`) novieto no dažādām pozīcijām uzņemtus skenējumus vienā rāmī, pēc punktu pāriem vai ierakstītām mērķa koordinātām, precizē tos ar ICP, saglabā reģistrāciju kā mazu projekta failu un ieraksta reģistrēto mākoni vienā LAS vai E57 failā. Skatiet [Reģistrēt vairākus skenējumus vienā](topic:register-scans).
- **USD eksports.** {{cmd:USDOUT}} vai {{cmd:EXPORT3D}} › {{ui:USD}} ieraksta cilnes 3D cietos ķermeņus kā `.usda`, `.usdc` vai `.usdz`. Skatiet [3D modeļa eksportēšana kā USD](topic:usd).
- **Aprēķini cilnē 3D.** Tur, kur cilnes 3D rīki prasa attālumu, varat ierakstīt aprēķinu, tāpat kā komandrindā. Skatiet [Aritmētika ierakstītā vērtībā](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Izgatavošana

- **Nosūtīt rasējumu lāzeram.** {{cmd:LASER}} vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Lāzers…}} atver paneli virs rasējuma: katrs slānis griež, iezīmē, gravē līnijas, aizpilda formas, gravē attēlu vai netiek nosūtīts, ar savu jaudu, ātrumu un gājieniem. Priekšskatījums seko jūsu izmaiņām, {{ui:Saglabāt G-kodu…}} ieraksta GRBL lāzera režīma G-kodu, un Chrome vai Edge pārlūkprogrammā panelis var ierāmēt darbu un nosūtīt to pa USB. Iestatījumi tiek saglabāti rasējumā (DWG un DXF). Skatiet [Nosūtīt rasējumu lāzeram](topic:laser-cutting).
- **Būvinstalāciju simboli papildinājumā Elektroinstalācija.** Datu, telefona un TV rozetes, slēdži pēc atslēgas un laika, termostats, izejas zīme, detektori, izsaukuma punkts un signāls, ventilators, ūdens sildītājs, plīts, EV uzlādes punkts, enerģijas skaitītājs un apakšsadalne, kā arī RCD un RCBO simboli. Ķēde var nest RCD, paneļa saraksta kolonnā ir RCD, un pārbaudēs tiek nosaukti kontaktligzdu loki bez RCD 30 mA vai mazāk. Tā ir plānošanas atgādinājums, nevis kodu pārbaude.
- **P&ID papildinājums.** P&ID zīmē procesu shēmas: simbolus ar savienojuma punktiem, procesa un signālu līnijas, marķējumus, līniju numurus, līniju, aprīkojuma, instrumentu un vārstu sarakstus (CSV vai darblapa) un pārbaudes. Tas ir iekļauts CadCraft un ir izslēgts, līdz to ieslēdzat sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Papildinājumi}}. Tas ir zīmēšanas palīglīdzeklis, nevis inženiertehniska apstiprinājums, un tā teksti pagaidām ir tikai angļu valodā.

### Darba sākšana un ekrāns

- **Vadīts pirmais rasējums.** {{cmd:TOUR}} (vai {{ui:Doties ekskursijā}} sākuma kartītē) vada jūs cauri sešām darbībām īstā rasējumā: līnija, riņķis, pārvietošana, apgriešana, dzēšana un izmērs. Tā sākas pati pirmo reizi, kad CadCraft atveras tukšs. Skatiet [Vai vēlaties vadītu apmācību?](topic:getting-started#prefer-to-be-guided)
- **Īsā atsauce un komandu karte.** [Īsajā atsaucē](topic:cheat-sheet) ir 40 ikdienas komandas vienā lapā, arī kā PDF drukāšanai, un [komandu kartē](topic:command-map) komandas ir uzskaitītas ar to īsajiem nosaukumiem, no A līdz Z.
- **Rīkjosla jebkurā malā.** {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Rīkjoslas novietojums}}: augšā (kā iepriekš), apakšā, kreisajā vai labajā pusē, vai ierakstiet {{cmd:TOOLBARDOCK}}. Skatiet [Rīkjoslas novietojums](topic:settings#toolbar-position).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Rīkjoslas rindas}}: pielāgot platumam, 2 rindas vai 1 rinda, CadCraft rīkjoslai un stiliem Drafting classic un Ribbon. {{key:Shift+Ctrl+F1}} pārslēdz tās, {{key:Ctrl+F1}} — to, ko rāda pogas, un {{cmd:TOOLBARROWS}} un {{cmd:TOOLBAR}} tās iestata. Sākuma padomam ir aizvēršanas poga. Paldies GJoe2, kurš to iesniedza kā izmaiņu pieprasījumu (pull request). Skatiet [Rīkjoslas rindas](topic:settings#toolbar-rows).

### CadCraft Studio

- **Vēsture.** {{cmd:HISTORY}} (`HIST`) vai {{ui:Skats}} › {{ui:Vairāk}} › {{ui:Vēsture…}}: kopijas, ko Studio glabā, kad atverat un saglabājat rasējumu, un rasējuma versijas mākonī, ja to atvērāt no mākoņa. Atveriet vai atjaunojiet vienu, vai salīdziniet divas, ar pievienoto, noņemto un mainīto, kas parādīts krāsā. Skatiet [Vēsture](topic:history).
- **acad.lsp un acaddoc.lsp.** Izvēlieties atbalsta mapi komandā {{cmd:APPLOAD}}: šie divi faili ielādējas, kad CadCraft startē (acaddoc.lsp atkal katrai jaunai rasējuma cilnei), un `S::STARTUP` izpildās pēc tiem. Skatiet [Lietotņu ielāde](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Drukas dialogs savā logā.** Poga tā virsrakstjoslā pārvieto to logā, ko var novietot uz cita monitora. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).

### AI asistentiem

- **Faili pēc nosaukuma, mapēs, ko izvēlaties.** CadCraft Studio asistents var atvērt, saglabāt un drukāt failus pēc nosaukuma un nodot komandai failu, ko tā pieprasa (INSERT no faila, COUNT eksports, SAVEAS, PLOT), bet tikai mapēs, ko pievienojat sadaļā {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Mapes, ko tas drīkst izmantot}}. Skatiet [Ļaut tam izmantot failus mapēs, ko izvēlaties](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mazāk izsaukumu.** Asistents var ierakstīt visu komandrindu uzreiz, paturēt komandu atvērtu starp izsaukumiem, saskaitīt objektus pēc veida un slāņa, tos neuzskaitot, un novietot bloku ar tā atribūtu vērtībām vienā solī.
- **Bez loga.** Komandrinda `cadcraft` ieraksta SVG drukas un konvertē, drukā, pārbauda vai apraksta vienlaicīgi daudzus failus. MCP pakete vēl nav publicēta. Skatiet [Darbs ar failiem, neatverot CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Mainīts

- **Skārienpaliktnis panoramē.** Pārvietojiet divus pirkstus pa skārienpaliktni, un 2D skats seko tiem; saspiešana un peles ritenītis tālina. Skatiet [Pele, skārienpaliktnis un skāriens](topic:mouse-trackpad-touch).
- **OLE objekti tiek saglabāti.** DXF iegultie objekti tiek rādīti kā to attēls vai kā iezīmēts rāmis un tiek saglabāti atpakaļ ar DXF 2000. DWG objekti tiek saglabāti un ierakstīti atpakaļ, saglabājot kā DWG, bet vēl netiek rādīti. Agrāk tie zuda, saglabājot. Skatiet [Objekti no citām programmām (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jauna rasējuma vienības** seko vienībai, kuru atzīmējat sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}}.

## Labots

- Izkārtojumi, kas atvērās tukši vai zaudēja skatlogu un tā vietā rādīja visu modeli, tagad atveras ar saviem īstajiem skatlogiem. Izkārtojums bez saites uz tā saturu tiek saglabāts, un atvēršanas pārskatā par to ir teikts.
- DXF faili vecākās kodu lapās rādīja sabojātu kirilicas un korejiešu tekstu. Tagad tie tiek nolasīti pareizi.
- Rindkopu teksts no citām programmām atverot zaudēja formatējumu un tika saglabāts atpakaļ kā vienkāršs teksts.

## Visās lietotnēs

- **Vienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}} katram garumam, laukumam, tilpumam, leņķim un slīpumam ir savs saraksts ar precīziem izmēriem, ko dod vienību definīcijas (ASV pārmēru pēda ir sava vienība). Izslēdziet vienības, ko nekad nelietojat, un tās pazūd no vienību sarakstiem; atzīmējiet vienu ar zvaigznīti, un jaunais darbs sākas tajā. Fails vienmēr saglabā savu vienību. CadCraft zvaigznīte iestata jauna rasējuma vienības, ja tā ir vienība, ko rasējums var saturēt; CadCraft pašas lodziņš {{ui:Vienības}} vēl neseko slēdžiem. Kad rasējumam ir vienības, ierakstītam garumam var būt jebkuras vienības apzīmējums. Skatiet [Vienības, ierakstītās vērtības un vienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas paslēpjas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina vairāk ekrānā (skārienekrāni un tālruņi saglabā savas lielās pogas). Katram sānu panelim ir šaura virsrakstjosla: velciet to, lai piestiprinātu vai atbrīvotu paneli, nometiet uz cita paneļa joslas, lai dalītos ar vienu rāmi kā cilnēs, piespraudiet, lai tas nobīdītos līdz malai, vai paslēpiet to un atgrieziet no malas. Skatiet [Paneļu izkārtošana](common:arrange-panels#make-the-layout-denser).
- **Dialogi pārvietojas.** Velciet dialogu aiz virsrakstjoslas, lai to novietotu nost no rasējuma; tas atgriežas tur, kur to atstājāt. Veiciet dubultklikšķi uz virsrakstjoslas, lai to atkal centrētu. Skatiet [Pārvietot dialogu](common:arrange-panels#move-a-dialog).
- **Receptes AI asistentiem.** Desmit gatavi pieprasījumi jūsu pašu asistentam (sakārtot rasējumu, izdrukāt komplektu, pārbaudīt rasējumus, uzdot modelim jautājumus, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam vajadzīgas, un katrs ir pārbaudīts ar mūsu testiem. Lietotnēs nav AI. Skatiet [Receptes AI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}}. Tai, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir visi lietotņu vārdi kā melnraksti, ko vēl nav pārskatījis dzimtās valodas runātājs. Palīdzības tēmas ir angļu valodā.
- **CadCraft Studio** pasaka, kāpēc atjauninājumu pārbaude neizdevās (vēl nav faila jūsu sistēmai, nav tīkla, slikts paraksts), nevis tikai "Gatavs", un pārstāj atgriezt kartīti "Kas jauns", kuru aizvērāt, līdz ir jaunāka versija.

## Šajā versijā vēl nav

- **0.7 nav koda parakstīta.** Parakstīšana un Microsoft Store pakete pārcelta uz 0.8, jo sertifikāta validācija vēl nav saņemta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildu informācija}}, tad {{ui:Palaist tomēr}}. Mac datorā pirmajā reizē ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un iPad vai iPhone versijas vēl nav.
- Leņķu un slīpumu saraksti sadaļā {{ui:Vienības}} tiek saglabāti, bet vēl neviens lodziņš tos nenolasa.
- DWG OLE objekti tiek saglabāti, bet netiek rādīti, un metafailu attēli OLE objektos netiek zīmēti.
- Drukas stilu tabulu (CTB failu) nolasīšana no citām programmām gaida paraugfailu.
- Vecākais Āzijas valodu teksts, kas rakstīts kā `\M+` kodi, tiek nolasīts, bet vēl nav pārbaudīts pret citas programmas failu.
- PDF pamatnes: attēli lapas iekšienē tiek rādīti ekrānā, bet netiek drukāti, asistenta drukā pamatnes netiek iekļautas, un nav pārbaudīts, kā citas programmas nolasa saglabāto apgriešanu un mērogu.
- Vēsture: CadCraft vēl nesūta savas saglabāšanas mākonī, tāpēc mākoņa versijas ir tās, kas saglabātas no citām ierīcēm un tīmekļa. Vēsture ir tikai CadCraft Studio.
- Vēl nav pārbaudīts, vai Studio pēc restartēšanas saglabā acad.lsp atbalsta mapi; ja tā prasa, izvēlieties mapi vēlreiz komandā APPLOAD.
- Lāzera panelis vēl nav izmēģināts uz īsta lāzera: pārbaudiet katru iestatījumu uz atkritumiem. CadCraft Studio nav Web Serial, tāpēc Studio panelis saglabā tikai G-kodu.
- Skenējumu reģistrācija ir pārbaudīta uz izdomātiem skenējumiem, bet vēl ne uz īsta skenera komplekta.
- Divu pirkstu panoramēšana ir pārbaudīta ar simulētiem skārienpaliktņa notikumiem, bet vēl ne uz īsta skārienpaliktņa.
- {{cmd:PEDIT}} nav opcijas Rediģēt virsotni (izmantojiet satveršanas punktus vai Rekvizīti). Nobīde, apgriešana, pagarināšana, noapaļošana, pārtraukšana un savienošana vēl nepieņem splainus; splaina augstums (Z) netiek saglabāts.
- Jaunam rindkopu tekstam vēl nevar piešķirt formatēšanas kodus, un SVG drukās formatētais teksts rādās vienā krāsā.
- WBLOCK opcija Viss rasējums ieraksta tikai modeli, ne lapas. Pašreizējais izmēru stils failā netiek saglabāts: rasējums atveras ar pašreizējo Standard.
- Lentes izvēlnes stiliem vēl nav slāņu, krāsu vai līniju tipu sarakstu: izmantojiet {{ui:Slāņi}} paneli un {{ui:Rekvizīti}}.
- Punktu mākoņi vēl netiek saglabāti rasējumā vai izdrukāti, un E57 faili atveras līdz 6 miljoniem punktu un 512 MB.
- CadCraft saglabātie DWG faili vēl nav pārbaudīti pašā AutoCAD.

Viss pārējais ir sadaļā [Vēl nav izveidots](topic:not-built-yet).
