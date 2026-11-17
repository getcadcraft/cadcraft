---
title: Kas jauns versijā 0.9
summary: Šrafējumi, kas seko savai robežai, slāņu grupas, stāvi kopā, 2D viedās sienas ar durvīm un logiem, teksta stili un formatētais teksta redaktors, peldoša komandrinda, režģa piesaiste, desmit veidi loka zīmēšanai un Dokumentu panelis.
keywords: kas jauns, 0.9, izlaiduma piezīmes, izmaiņu žurnāls, šrafējums, asociatīvs šrafējums, hatchedit, pat fails, rakstu fails, slāņu grupas, laygroup, stāvi, kārtoti stāvi, floorlayers, viedās sienas, siena, durvis, logs, sienu rīki, teksta stils, stils, MTEXT redaktors, rindkopu teksts, formatējums, peldoša komandrinda, komandrinda, augšējā josla, kompakts, režģa piesaiste, grid snap, f9, loks, dokumentu panelis, izrakstīšana, Lielbritānijas tērauda izmēri, draw.io, taju teksts, dxf r12, jaunumi, 0.8, 0.8.1, versija, jaunas funkcijas, automātiska aizpilde, spoks, cilne, sketchfix, photosketch, autosheet, detaļas, gridmove, autodim, birkas, redline, sapludināt, git, fossil, piekļuve, rasēšana bez redzes, ekrāna lasītājs, robežas, virzieni, aunits, shx, diagramma, ole, vēsture, salīdzināt, vārdos, rekvizīti, pēdas un collas, izstiept, valodas, ievades ierīces, problēmas, dzīvā, asistenti
from: 8b6dea0b
---

Tas ir, kas mainījās CadCraft 0.9 salīdzinājumā ar 0.8.1. CadCraft ir 2D un 3D zīmēšanas lietotne CadCraft Studio 0.9 un tās astoņām lietotnēm. 0.9 pabeidz plāna zīmēšanu, pievieno teksta stilus un īstu teksta redaktoru un dod vairāk vietas ekrānā.

## Jauns

### Plāna zīmēšana

- **Šrafējumi, kas seko savai robežai.** {{cmd:HATCH}} ir saistīts ar to, ko tas ierobežo. Pārvietojiet, pagrieziet vai mērogojiet robežu, un šrafējums un tā raksts seko; pārveidojiet to, un šrafējums tiek aprēķināts no jauna. {{cmd:HATCHEDIT}} (`HE`) maina šrafējumu pēc tam un veido vai beidz saiti. Skatiet [Šrafējums un aizpildāmie laukumi](topic:hatch).
- **Šrafējuma rakstu faili.** Jautājumā {{cmd:HATCH}} „Norādiet iekšējo punktu” ierakstiet `F` (rakstu fails) un izvēlieties `.pat` failu. Izmēģināti ir tikai faili, kas ierakstīti parastajā formātā.
- **Slāņu grupas.** Panelī {{ui:Tools}} (Rīki) uz {{ui:Layers}} paneļa: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} un {{ui:Find a layer}}; vai ierakstiet {{cmd:LAYGROUP}} (`LG`). Skatiet [Organizējiet rasējumu ar slāņiem](topic:layers#group-layers).
- **Stāvi kopā.** {{cmd:FLOORS}} (`FLR`) vai {{ui:Floors…}} grupas {{ui:View}} izvēlnē {{ui:More}}. Lapas skata logs var rādīt vienu stāvu {{ui:Floor shown}} rekvizītos. {{cmd:FLOORLAYERS}} pārvērš stāvus slāņos failam, ko sūtāt kādam citam. Skatiet [Stāvu sakraušana vienā rasējumā](topic:floors).
- **2D viedās sienas, durvis un logi.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) un {{cmd:DELOPENING}}. Stūrus, T savienojumus un krustojumus aprēķina jūsu vietā. Sienas glabā ierakstu par to, kā tās savienojas, un rekvizītos ir Neatļaut savienojumu sākumā / beigās, Atrašanās līnija un rediģējams garums. Skatiet [Zīmējiet viedās sienas, durvis un logus 2D](topic:walls-2d).
- **Sienu rīks plāna sienām.** Ierakstiet {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} un pārējās. Tām vēl nav rīkjoslas pogu. Skatiet [Sienu formas, griezumi, nobīdes un bloķējumi 2D sienām](topic:wall-tools-2d).

### Teksts

- **Teksta stili.** {{cmd:STYLE}} (`ST`) vai {{ui:Text style}} rīkjoslā {{ui:Draw}}: nosaukti stili ar fontu, augstumu, platuma koeficientu un slīpumu. Skatiet [Iestatiet teksta fontu un izmēru ar teksta stiliem](topic:text-styles).
- **Formatēta rindkopu teksta redaktors.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} vai dubultklikšķis uz teksta atver lodziņu ar fontu, izmēru, treknrakstu, slīpo, pasvītrojumu, pārsvītrojumu, krāsu, izlīdzinājumu un grādu, plus-mīnus un diametra zīmēm, kā arī {{ui:OK}} un {{ui:Cancel}}. Skatiet [Formatēt rindkopu tekstu](topic:format-paragraph-text).
- **Diagramma no draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) lasa arī ielīmētu draw.io XML. Skatiet [Zīmēt diagrammu no teksta](topic:text-to-diagram).
- **Taju teksts PDF plotā.** Agrāk tas drukājās kā jautājuma zīmes.

### Vairāk vietas un zīmēšanas palīglīdzekļi

- **Peldoša, plānāka komandrinda un kompakta augšējā josla.** Velciet komandrindas rokturi, lai to padarītu peldošu, velciet tās augšējo malu, lai būtu mazāk rindu, {{key:F2}} atver vēsturi. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} un augšējās joslas izvēle piedāvā tos pašus iestatījumus. Skatiet [Iestatījumi](topic:settings#command-line).
- **Objektu piesaistes izvēlne.** Ar peles labo pogu noklikšķiniet uz {{ui:Snap}} statusa joslā vai ierakstiet {{cmd:OSNAP}}.
- **Piesaiste režģim.** Poga {{ui:Grid snap}} statusa joslā vai {{key:F9}}: izvēlētie punkti iet uz tuvāko režģa punktu, kad neviena objekta piesaiste punktu nav paņēmusi.
- **Loks desmit veidos un Continue.** {{ui:Arc}} rīkjoslā {{ui:Draw}} vai {{cmd:ARC}}: 3 punktu, Start/Center/End saime un Center/Start/End saime, un Continue (nospiediet {{key:Enter}} sākuma punktā) no pēdējās līnijas, loka vai polilīnijas.
- **Dokumentu panelis.** {{cmd:DOCUMENTS}} (`DOCS`) vai {{ui:Documents…}} grupas {{ui:View}} izvēlnē {{ui:More}}: pārskatījums, stāvoklis un izrakstīšana katram rasējumam projekta mapē. Tas atveras centrētā dialogā. Skatiet [Dokumenti](topic:documents).

### Faili

- **Lielbritānijas tērauda izmēri.** 976 profili panelī Standard, ierakstīti tā, kā rasējumos (piemēram, `305x165x40 UB`).
- **Dienvidāfrikas paketes** (zīmēšanas prakse un būvnoteikumi) kā Būvnoteikumu papildinājuma paketes. Skaitļi nav pārbaudīti.
- **Papildinājumi CadCraft,** pievienoti pēc pieprasījuma un pēc noklusējuma izslēgti: iekštelpu apgaismojuma dizains, mikroshēmu dizains (HDL līdz izkārtojumam), frēzēšana ar rūteri, ķēžu simulācija, rullīšu ķēdes zobrati un valstu paketes Būvnoteikumu papildinājumam.

## Labots

- Šrafējuma pārvietošana, pagriešana vai mērogošana atstāja aiz sevis tā rakstu.
- {{cmd:GRIDMOVE}} pārvietoja visu plāna sienu, kas tikai sākas uz režģa līnijas. Tagad sienu vērtē pēc tās galiem.
- Režģis rādījās tikai rasējuma robežās pat ar izslēgtām robežām.
- Bloku saraksts sānu panelī ritina, un nosaukums, kas nav bloks, uzskaita blokus, kas sākas ar to („Vai domājāt?”).
- DXF R12 faili, ko AutoCAD noraidīja („Unknown group 1001 for table”), tagad tur atveras.
- Ļoti lieli faili (aptuveni 70,000 objektu un vairāk) neatvērās ar „Maximum call stack size exceeded”.
- DWG faili no AutoCAD 2018 un jaunākiem ar augstu uzturēšanas versiju neatvērās ar „bad BITLONG code 11”.
- Rindkopu teksta lodziņā jauns izmērs, ierakstīts izvēlētai daļai, saglabā atlasi.

## Visās lietotnēs

Bootstrap rīka padomi katrai vadībai ar norādi, sākuma padoms, ko var aizvērt, cilņu joslas, kas ritina, ja tās nesaiet, un pārlūka cilnes nosaukums, kas seko atvērtajam rasējumam (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} tagad ir nolaižamais saraksts ar divrindu izvēlēm. Valodu saraksts sadaļā {{ui:Settings}} ir garāks nekā 0.8. Dzīvā kopīgā rediģēšana, Bibliotēkas kolekcijas un svara un temperatūras vienības ir aprakstītas Studio piezīmēs.

## Godīgi ierobežojumi

- Rindkopu tekstam nav aizzīmju vai numurētu sarakstu, tabulatora lineāla vai izlīdzināšanas pēc platuma. Drukātos PDF teksts tiek iestatīts Helvetica fontā.
- Plāna sienas ir taisnas, tāpēc loks tiek zīmēts kā īsas sienas. Kopienas manuālā pārbaude sienu rīkam vēl gaida.
- Slāņu grupas nav rakstītas AutoCAD savā formātā, tāpēc AutoCAD rāda plakanu sarakstu. Citas programmas rāda visus stāvus kopā, ja vien nepalaižat {{cmd:FLOORLAYERS}}.
- Dokumentu panelis vēl nav izmēģināts ar diviem cilvēkiem uz īstas kopīgas vietas. Frēzēšana ar rūteri nav izmēģināta uz neviena īsta datora. Apgaismojuma aprēķins ir pārbaudīts pret fotonu trasējumu, nevis citu programmu. Inženieru papildinājumi ir pārbaudes palīglīdzekļi, nevis inženiera pārskata aizstājējs.
- Valodas, kas nav angļu, ir mašīntulkojuma melnraksti, un daži jaunie vārdi ir tikai angliski.

## Iepriekš: 0.8 un 0.8.1

Tas ir, kas mainījās CadCraft 0.8 un 0.8.1 salīdzinājumā ar 0.7. 0.8 (2026. gada 1. novembris) pievieno zīmēšanas palīgus, kas strādā no jūsu paša rasējuma, pēc noteikumiem jūsu datorā un bez modeļa, un 0.8.1 (2026. gada 2. novembris) labo kļūdas, kas ziņotas pēc tā.

### Jauns

**Zīmējums, kas pabeidz jūsu domu**

- **Spoks rāda, kas seko.** Bez darbības komandas pelēks, punktēts spoks rāda, ko rasējuma paši rakstu saka, ka seko: nākamo stenderi tādā pašā attālumā, nākamo kāpņu pakāpienu, trūkstošo sienu telpai. Nospiediet {{key:Tab}}, lai to uzzīmētu kā vienu atsaukšanas soli, vai {{key:Esc}}, lai to noraidītu. Tas skatās tikai uz jaunākajiem objektiem, tāpēc paliek vienmērīgs liela rasējuma gadījumā. Izslēdziet to sadaļā {{ui:Settings}} › {{ui:CadCraft}} vai ar {{cmd:AUTOCOMPLETE}} `Off`.
- **Nākamais punkts, zīmējot līniju.** Zīmējot {{cmd:LINE}} vai {{cmd:PLINE}}, spoks ir nākamais punkts: nākamais kāpņu pakāpiens, taisnstūra ceturtais stūris vai punkts, kas to aizver. Pietuviniet kursoru tuvu tam un nospiediet {{key:Tab}}, it kā būtu noklikšķinājis tur.
- **Pildspalvas skices kļūst par precīzu ģeometriju.** {{cmd:SKETCHFIX}}: zīmējiet pildspalvas, peles vai pirksta rupjas līnijas, un katra kļūst par tīru līniju, riņķi, loku, taisnstūri vai polilīniju, piesaistītu jau zīmētajam. Skatiet [Skicējiet ar pildspalvu un iegūstiet precīzu ģeometriju](topic:sketch-with-a-pen).
- **Skices fotogrāfija kļūst par rasējumu.** {{cmd:PHOTOSKETCH}} (`PSK`) atrod papīru fotogrāfijā, iztaisno perspektīvu, pielieto papīra izmēru un mērogu, ko dodat, un pārzīmē pildspalvas līnijas uz slāni katrai pildspalvas krāsai. Uzraksti netiek pārzīmēti.
- **Izmēro pēc noteikumiem.** {{cmd:AUTODIM}} (`ADIM`) veido izmēru ķēdes pa izvēlētajām malām, kopējo izmēru, atvērumu platumus, caurumu diametrus un, ar `Grid`, režģa soli. Tas nekad neatkārto izmēru, kas jau ir.
- **Pārvietojiet režģa līniju, un komplekts seko.** {{cmd:GRIDMOVE}} (`GM`): sienas, kas beidzas uz režģa līnijas, izstiepjas kopā ar to; sienas gar to, kolonnas, tās burbulis un birka pārvietojas; izmēri uz tās mēra jauno soli. Viens atsaukšanas solis.

**Lapas, detaļas un birkas**

- **Lapas, kas izkārtojas paši.** {{cmd:AUTOSHEET}} ņem jūsu nosauktos skatus (vai atsevišķās modeļa daļas), izvēlas papīra izmēru un standarta mērogu un novieto skatus jaunās lapās ar titula bloku un nosaukuma un mēroga uzrakstu. Viss paliek rediģējams. Skatiet [Izkārtojiet lapas man](topic:lay-out-sheets-for-me).
- **Jūsu firmas detaļas, piedāvātas, kamēr zīmējat.** {{cmd:DETAILS}} (`DET`) glabā jūsu pašu detaļu blokus. Kad atlasītais atbilst kādam pēc vārdiem tā slāņos, bloku nosaukumos un piezīmēs, statusa joslā tas tiek pateikts; izvēlieties to un novietojiet. {{cmd:DETAILS}} › Kopīgot ieliek jūsu sarakstu jūsu Dokumentu mapē un atnes to, ko jūsu komanda pievienojusi. Iestatījumos piedāvājumus var izslēgt.
- **Birkas uz blokiem.** {{cmd:TAGS}} definē birku (tās veidu, vērtības, ko tā var pieņemt, blokus, uz kuriem tā attiecas), uzliek to atlasītajām bloku atsaucēm un uzskaita tās kā specifikāciju, ko var saglabāt kā CSV. Definīcijas tiek glabātas DWG. Skatiet [Birkas](topic:tags).
- **Rasējuma robežas.** {{cmd:LIMITS}} iestata taisnstūri rasējumam: režģis to aizpilda, un tālummaiņa Visu to parāda. Robežas rādās kā kontūra un tiek saglabātas DWG un DXF, kopā ar lapu robežām. Skatiet [Iestatiet rasējuma robežas](topic:drawing-limits).

**Darbs ar citiem cilvēkiem un citām programmām**

- **Pārvērst atzīmi revīzijā.** {{cmd:REDLINE}} nolasa paketi, ko raksta MarkupCraft, un uzskaita katru izmaiņu. Pieņemiet vai noraidiet katru ar piezīmi; pieņemtās saņem revīzijas mākoni un revīzijas žurnālu vienā atsaukšanas solī, un jūs saglabājat atbilžu failu, kas aizver atzīmes MarkupCraft. Skatiet [Pārvērst atzīmi revīzijā](topic:redline-to-revision).
- **Rasējumi, ko git un Fossil var sapludināt.** Ar {{ui:Merge-friendly files}} ieslēgtu sadaļā {{ui:Settings}} › {{ui:CadCraft}} katram objektam ir atslēga, kas nekad nemainās (faili ir par aptuveni 10 procentiem lielāki). `cadcraft merge base ours theirs` tad sapludina divu cilvēku rediģējumus vienu DWG vai DXF objektu pa objektam un ziņo tikai tur, kur divi cilvēki mainīja to pašu. Skatiet [Sapludināt divu cilvēku rediģējumus vienā rasējumā](topic:merge-drawings).
- **Kas mainījās, vārdos.** Vēsturē {{ui:Compare}} dod vienkāršu sarakstu: kur lietas mainījās, cik lielas ir vietas, kas pievienots, noņemts vai mainīts, un rediģētais teksts. Skatiet [Pateikt vārdos, kas mainījās](topic:changes-in-words).
- **Virzieni un leņķi.** Ierakstiet virzienu kā ģeodēzista virzienu, piemēram, N45°23'30"E, vai grādos, minūtēs un sekundēs, jebkur, kur prasa leņķi; AUNITS nosaka, kā leņķi tiek rādīti. Skatiet [Ierakstiet un rādiet virzienus un leņķus](topic:bearings-and-angles).
- **Jūsu pašu SHX fonti.** Dodiet CadCraft mapi ar SHX fontiem, un teksta stili, kas tos nosauc, tiek zīmēti tajos — ekrānā un plotos. Skatiet [Zīmējiet tekstu savos SHX fontos](topic:shx-fonts).
- **Diagramma no teksta.** {{cmd:DIAGRAM}} nolasa Mermaid plūsmas shēmu, PlantUML komponentu diagrammu, D2 vai no-līdz sarakstu un zīmē rediģējamus blokus un savienotājus. Skatiet [Zīmēt diagrammu no teksta](topic:text-to-diagram).
- **OLE objekti DWG failā.** {{cmd:OLELIST}} uzskaita OLE objektus, ko DWG nes un ko CadCraft pats nevar novietot, un novieto attēla kopiju, kur pateicat. Skatiet [Attēli](topic:pictures#objects-from-other-programs-ole).
- **Jūsu aprēķini paliek kopā ar rasējumu.** Aprēķinu lapas un projektēšanas pamatojumi tiek glabāti DWG kopā ar klašu tabulu.

**Rasēšana bez redzes**

- Ieslēdziet {{ui:Drafting without sight}} sadaļā {{ui:Settings}} (vai ierakstiet {{cmd:ACCESS}} un atbildiet `On`). CadCraft runā katru komandu un rezultātu caur jūsu ekrāna lasītāju, apraksta rasējumu un to, kas ir kursora tuvumā, ļauj pārvietot kursoru un izvēlēties punktus ar tastatūru, un atskaņo skaņu katram piesaistījumam un rokturim. Kur jūsu pārlūkprogramma var atpazīt runu jūsu datorā, komandas var izrunāt. Skatiet [Rasēt bez redzes](topic:draft-without-sight).

**Visās lietotnēs**

- **Valodas.** 54 valodas; desmit ir jaunas (lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikāņu, filipīniešu, svahili, uzbeku). Valodas, kas ir ārpus angļu, ir mašīntulkojuma melnraksti, līdz tās pārskata dzimtā valoda.
- **Ievades ierīces.** Skārienpaliktnis, pildspalva, 3D pele, spēļu kontrolieris un MIDI vadība.
- **Rīkjoslas rindas un rekvizītu režģis.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} piedāvā „Ietīt”, „2 rindas” vai „1 rinda” citās lietotnēs. CadCraft glabā savu iestatījumu sadaļā {{ui:Settings}} › {{ui:CadCraft}} (skatiet [Rīkjoslas rindas](topic:settings#toolbar-rows)). Kopīgais rekvizītu režģis ir trīs citās lietotnēs, nevis CadCraft.
- **Problēmas, Dzīvais skats un papildinājumi.** Kopīgs Problēmu panelis, kas brīdina visās lietotnēs, Dzīvais skats, kas rāda, kurš kur atrodas CadCraft Studio (skatiet [Strādāt pie viena rasējuma kopā](topic:work-live)), un papildinājumu saraksts.
- **Pieslēdziet savu MI.** Viens savienojums no CadCraft Studio ar visām astoņām lietotnēm, ar lasīšanas, ieteikumu vai rediģēšanas līmeni katrai lietotnei un vienkāršu žurnālu par to, ko asistents darīja. CadCraft pats nav MI, un „Jautāt” katrā lietotnē izmanto MI, ko jūs pieslēdzat.

### Labots versijā 0.8.1

- **Rekvizītos rādīja 150, nevis 12'-6"** pēdu un collu rasējumos. Lauki, ko lietotne nolasa pati, atkal saglabā savu tekstu.
- **DWG faili, kuru klašu sadaļa tika nolasīta kā nepareizs tips** (GitHub cadcraft#5), tagad atveras pareizi.
- **Krustiņš vairs neparādās aiz uznirstošajiem logiem.**
- **Studio un iepakotie izdevumi var mainīt valodu darbības laikā.** Iepriekš tie bija tikai angliski. Vēl nav pārbaudīts visās platformās: pastāstiet mums, ja valoda nemainās.
- **Planšetdatori portreta režīmā** atdod brīvo režģa augstumu zīmēšanas laukam, un lapu režīms sākas pie 760 px vai mazāk.
- **STRETCH ar krustojošu logu un LIMITS** tika ziņots Studio 0.8.0 un jau bija pareizi 0.8 tīmekļa versijā; ziņotāja instalētājs bija vecāks. Studio 0.8.1 tos satur.

### Šajā versijā vēl nav

- **0.8 un 0.8.1 nav parakstīti ar kodu.** Windows var brīdināt (izvēlieties {{ui:More info}} (Papildu informācija), tad {{ui:Run anyway}} (Palaist tomēr)); Mac datorā ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Open}}. Veikalu izlaidumi ir apturēti, un iPad un iPhone versija netika pārbūvēta 0.8.1.
- **Pildspalvas skices un skices fotogrāfijas** ir izmēģinātas tikai uz izdomātām fotogrāfijām un ar peli, vēl ne ar īstu pildspalvu, skārienekrānu vai rokas skici uz papīra.
- **Rasēšana bez redzes** ir pārbaudīta ar automātiskām pārbaudēm, vēl ne ar ekrāna lasītāju vai neredzīgu testētāju.
- **Detaļu kopīgošana** nav pārbaudīta ar diviem cilvēkiem, un Team Cloud Plan mape kā Dokumentu mape nav izveidota.
- **Sapludināšana** darbojas CadCraft DWG un DXF failiem; tas pats citu lietotņu failiem nav izveidots.
- **Atsaukšana starp logiem:** CadCraft ziņo par katru pabeigto soli, bet Studio vēl nav viena {{ui:Undo}} visām lietotnēm; katra lietotne atsauc savus soļus.
- **DWG OLE objekti** tiek saglabāti, bet netiek zīmēti vietā.
- **Plotēšanas stilu tabulu (CTB failu) nolasīšana** no citām programmām ir izveidota, bet nav pārbaudīta pret failu no citas programmas.
- **Pieslēdziet savu MI:** vienas pogas pieslēgšana Studio, mājās hostētais savienotājs pārlūkprogrammas MI, jūsu pašu API atslēga Studio iekšienē un publicētā MCP pakotne šajā izlaidumā nav solīta.

Iepriekšējai versijai skatiet [Kas jauns versijā 0.7 (iepriekšējā)](topic:whats-new-0-7).
