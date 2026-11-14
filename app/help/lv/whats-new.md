---
title: Kas jauns versijās 0.8 un 0.8.1
summary: Spoks, kas pabeidz jūsu rasējumu, pildspalvas skices un skiču fotogrāfijas, kas pārvērstas ģeometrijā, lapas, kas izkārtojas pašas, detaļas, kas tiek piedāvātas, kamēr zīmējat, GRIDMOVE un AUTODIM, birkas, faili, kas viegli apvienojami, atzīmes, kas pārvērstas revīzijās, rasēšana bez redzes, rasējuma robežas, azimuti, SHX fonti, diagrammas no teksta un labojumi versijā 0.8.1.
keywords: kas jauns, what's new, laidiena piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, automātiska pabeigšana, autocomplete, spoks, ghost, tab, sketchfix, photosketch, autosheet, detaļas, gridmove, autodim, birkas, tags, redline, apvienošana, merge, git, fossil, piekļuve, access, rasēšana bez redzes, ekrāna lasītājs, screen reader, robežas, limits, azimuti, bearings, aunits, shx, diagramma, diagram, ole, vēsture, history, salīdzināt, compare, vārdos, in words, īpašības, properties, pēdas un collas, feet and inches, stretch, valodas, languages, ievades ierīces, input devices, problēmas, problems, live, palīgi, assistants
from: 9dd82db5
---

Šis ir tas, kas mainījies CadCraft versijās 0.8 un 0.8.1, salīdzinot ar 0.7. Versija 0.8 (2026. gada 1. novembris) pievieno zīmēšanas palīgus, kas strādā no jūsu paša rasējuma, pēc noteikumiem jūsu datorā un bez modeļa, un 0.8.1 (2026. gada 2. novembris) labo kļūdas, par kurām tika ziņots pēc tās.

## Jaunumi

### Rasējums, kas pabeidz jūsu domu

- **Spoks parāda, kas nāk tālāk.** Kad nekāda komanda nedarbojas, pelēks punktētu līniju spoks parāda, ko saka paši jūsu rasējuma raksti: nākamo stendu ar tādu pašu soli, nākamo kāpņu pakāpienu, trūkstošo sienu telpā. Nospiediet {{key:Tab}}, lai to uzzīmētu kā vienu atsaukšanas soli, vai {{key:Esc}}, lai to noraidītu. Tas skata tikai jaunākos objektus, tāpēc lielā rasējumā paliek vienmērīgs. Izslēdziet to sadaļā {{ui:Iestatījumi}} › {{ui:CadCraft}} vai ar {{cmd:AUTOCOMPLETE}} `Off`.
- **Nākamais punkts, kamēr zīmējat līniju.** Starp {{cmd:LINE}} vai {{cmd:PLINE}} izpildi spoks ir nākamais punkts: nākamais kāpņu solis, taisnstūra ceturtais stūris vai punkts, kas to noslēdz. Pietuviniet kursoru tam un nospiediet {{key:Tab}}, it kā būtu noklikšķināts.
- **Pildspalvas skices kļūst par precīzu ģeometriju.** {{cmd:SKETCHFIX}}: velciet aptuvenas līnijas ar pildspalvu, peli vai pirkstu, un katra kļūst par tīru līniju, riņķi, loku, taisnstūri vai polilīniju, piesaistītu jau uzzīmētajam. Skatiet [Skicējiet ar pildspalvu un iegūstiet precīzu ģeometriju](topic:sketch-with-a-pen).
- **Skices fotogrāfija kļūst par rasējumu.** {{cmd:PHOTOSKETCH}} (`PSK`) atrod papīru fotogrāfijā, iztaisno perspektīvu, pielieto jūsu norādīto papīra izmēru un mērogu un pārzīmē pildspalvas līnijas uz slāņa katrai pildspalvas krāsai. Uzraksti netiek pārzīmēti.
- **Izmēriet pēc noteikumiem.** {{cmd:AUTODIM}} (`ADIM`) veido izmēru ķēdes gar jūsu izvēlētajām malām, kopējo izmēru, atveru platumus, caurumu diametrus un, ar `Grid`, režģa soļus. Tas nekad neatkārto izmēru, kas jau ir.
- **Pārvietojiet režģa līniju, un kopa seko.** {{cmd:GRIDMOVE}} (`GM`): sienas, kas beidzas uz režģa līnijas, stiepjas kopā ar to, sienas gar to, kolonnas, tās aplīte un birka pārvietojas, un izmēri uz tās mēra jauno soli. Viens atsaukšanas solis.

### Lapas, detaļas un birkas

- **Lapas, kas izkārtojas pašas.** {{cmd:AUTOSHEET}} ņem jūsu nosauktos skatus (vai atsevišķās modeļa daļas), izvēlas papīra izmēru un standarta mērogu un novieto skatus jaunās lapās ar tituldaļu un nosaukuma un mēroga parakstu. Viss paliek rediģējams. Skatiet [Izkārtot lapas man](topic:lay-out-sheets-for-me).
- **Jūsu uzņēmuma detaļas, kas tiek piedāvātas, kamēr zīmējat.** {{cmd:DETAILS}} (`DET`) glabā jūsu pašu detaļu blokus. Kad atlasītais atbilst kādam pēc vārdiem tā slāņos, bloku nosaukumos un piezīmēs, statusa joslā to norāda; izvēlieties to un novietojiet. {{cmd:DETAILS}} › Kopīgot saglabā jūsu sarakstu mapē Dokumenti un ieved to, ko jūsu komanda ir pievienojusi. {{ui:Iestatījumi}} izslēdz piedāvājumus.
- **Birkas uz blokiem.** {{cmd:TAGS}} definē birku (tās veidu, vērtības, ko tā var pieņemt, blokus, uz kuriem tā attiecas), uzliek to atlasītajām bloku atsaucēm un uzskaita tās kā specifikāciju, ko var saglabāt kā CSV. Definīcijas tiek glabātas DWG failā. Skatiet [Birkas](topic:tags).
- **Rasējuma robežas.** {{cmd:LIMITS}} iestata taisnstūri rasējumam: režģis to aizpilda, un tālummaiņa Visu to parāda. Robežas tiek rādītas kā kontūra un saglabātas DWG un DXF failos kopā ar lapas robežām. Skatiet [Iestatīt rasējuma robežas](topic:drawing-limits).

### Sadarbība ar citiem cilvēkiem un citām programmām

- **Atzīmi pārvērst revīzijā.** {{cmd:REDLINE}} nolasa paketi, ko raksta MarkupCraft, un uzskaita katru izmaiņu. Katru pieņemiet vai noraidiet ar piezīmi; pieņemtās saņem revīzijas mākoni un revīziju žurnālu vienā atsaukšanas solī, un jūs saglabājat atbilžu failu, kas aizver atzīmes programmā MarkupCraft. Skatiet [Pārvērst atzīmi revīzijā](topic:redline-to-revision).
- **Rasējumi, ko git un Fossil var apvienot.** Ja {{ui:Faili, kas viegli apvienojami}} ir ieslēgts sadaļā {{ui:Iestatījumi}} › {{ui:CadCraft}}, katram objektam tiek piešķirta atslēga, kas nemainās (faili ir par aptuveni 10 procentiem lielāki). `cadcraft merge base ours theirs` pēc tam apvieno divu cilvēku izmaiņas vienā DWG vai DXF failā pa objektiem un ziņo tikai par vietām, kur divi cilvēki ir mainījuši to pašu. Skatiet [Apvienot divu cilvēku izmaiņas vienā rasējumā](topic:merge-drawings).
- **Kas mainījies, vārdos.** Vēsturē Salīdzināt sniedz vienkāršu sarakstu: kur lietas mainījās, cik lieli ir šie laukumi, kas tika pievienots, noņemts vai mainīts, un teksts, kas tika rediģēts. Skatiet [Pateikt vārdos, kas mainījies](topic:changes-in-words).
- **Azimuti un leņķi.** Ierakstiet virzienu kā mērnieka azimutu, piemēram, N45°23'30"E, vai grādos, minūtēs un sekundēs jebkurā vietā, kur tiek prasīts leņķis; AUNITS nosaka, kā leņķi tiek rādīti. Skatiet [Ierakstīt un rādīt azimutus un leņķus](topic:bearings-and-angles).
- **Jūsu pašu SHX fonti.** Norādiet CadCraft mapi ar SHX fontiem, un teksta stili, kas tos nosauc, tiek zīmēti ar tiem ekrānā un izdrukās. Skatiet [Zīmēt tekstu ar saviem SHX fontiem](topic:shx-fonts).
- **Diagramma no teksta.** {{cmd:DIAGRAM}} nolasa Mermaid plūsmas shēmu, PlantUML komponentu diagrammu, D2 vai saraksta no-uz formātā un zīmē blokus un savienotājus, ko var rediģēt. Skatiet [Zīmēt diagrammu no teksta](topic:text-to-diagram).
- **OLE objekti DWG failā.** {{cmd:OLELIST}} uzskaita OLE objektus, ko DWG fails satur un ko CadCraft pats nevar novietot, un novieto attēla kopiju tur, kur jūs norādāt. Skatiet [Attēli](topic:pictures#objects-from-other-programs-ole).
- **Jūsu aprēķini paliek kopā ar rasējumu.** Aprēķinu lapas un projektēšanas pamatojumi tiek glabāti DWG failā kopā ar klašu tabulu.

### Zīmēšana bez redzes

- Ieslēdziet {{ui:Rasēšana bez redzes}} sadaļā {{ui:Iestatījumi}} (vai ierakstiet {{cmd:ACCESS}} un atbildiet `On`). CadCraft ar jūsu ekrāna lasītāju nolasa katru komandu un rezultātu, apraksta rasējumu un to, kas atrodas kursoram tuvu, ļauj pārvietot kursoru un izvēlēties punktus ar tastatūru, un katram piesaistes punktam un spiedpunktam atskaņo skaņu. Ja jūsu pārlūkprogramma var atpazīt runu jūsu datorā, komandas var ievadīt ar balsi. Skatiet [Zīmēt bez redzes](topic:draft-without-sight).

### Visās lietotnēs

- **Valodas.** 54 valodas; desmit ir jaunas (lietuviešu, latviešu, bosniešu, maratu, telugu, albāņu, afrikāņu, filipīniešu, svahili, uzbeku). Valodas, izņemot angļu, ir mašīntulkojuma melnraksti, līdz tās izlasa dzimtās valodas runātājs.
- **Ievades ierīces.** Skārienpaliktnis, pildspalva, 3D pele, spēļu kontrolieris un MIDI vadība.
- **Rīkjoslas rindas un īpašību režģis.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} citās lietotnēs piedāvā Ietīt, 2 rindas vai 1 rindu. CadCraft glabā savu iestatījumu sadaļā {{ui:Iestatījumi}} › {{ui:CadCraft}} (skatiet [Rīkjoslas rindas](topic:settings#toolbar-rows)). Kopīgais īpašību režģis atrodas trijās citās lietotnēs, nevis CadCraft.
- **Problēmas, Live un papildinājumi.** Kopīgs panelis Problemas, kas brīdina visās lietotnēs, Live skats par to, kurš kur atrodas CadCraft Studio (skatiet [Strādāt kopā pie viena rasējuma](topic:work-live)), un papildinājumu saraksts.
- **Savienojiet savu MI.** Viens savienojums no CadCraft Studio ar visām astoņām lietotnēm ar lasīšanas, ieteikumu vai rediģēšanas līmeni katrai lietotnei un vienkāršu žurnālu par to, ko palīgs ir darījis. CadCraft pats nav MI, un Jautāt visās lietotnēs izmanto MI, ko jūs savienojat.

## Labots versijā 0.8.1

- **Īpašības rādīja 150, nevis 12'-6"** rasējumos ar pēdām un collām. Lauki, ko lietotne nolasa pati, atkal saglabā savu tekstu.
- **DWG faili, kuru klašu sadaļa tika nolasīta kā nepareizs tips** (GitHub cadcraft#5), tagad atveras pareizi.
- **Krustiņš vairs neparādās aiz uznirstošajiem logiem.**
- **Studio un iepakotās versijas var mainīt valodu darbības laikā.** Iepriekš tās bija tikai angļu valodā. Vēl nav pārbaudīts katrā platformā: pastāstiet mums, ja valoda nemainās.
- **Planšetes portretā** atbrīvoto režģa augstumu atdod zīmēšanas laukumam, un lapu režīms sākas ar 760 px vai mazāk.
- **STRETCH ar krustojošu logu un LIMITS** tika ziņots par Studio 0.8.0, bet tie jau bija pareizi 0.8 tīmekļa versijā; ziņotāja instalētājs bija vecāks. Studio 0.8.1 tos satur.

## Vēl nav šajā versijā

- **0.8 un 0.8.1 nav koda parakstīti.** Windows var brīdināt (izvēlieties {{ui:Papildu informācija}}, tad {{ui:Palaist tik un tā}}); Mac datorā ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. Veikalu versijas ir apturētas, un iPad un iPhone versija 0.8.1 netika pārbūvēta.
- **Pildspalvas skices un skiču fotogrāfijas** ir izmēģinātas tikai ar izdomātām fotogrāfijām un peli, vēl ne ar īstu pildspalvu, skārienekrānu vai roku skici uz papīra.
- **Zīmēšana bez redzes** ir pārbaudīta ar automātiskām pārbaudēm, vēl ne ar ekrāna lasītāju vai neredzīgu testētāju.
- **Detaļu kopīgošana** nav pārbaudīta ar divu cilvēku palīdzību, un mape Dokumenti kā Team Cloud Plan mape nav izveidota.
- **Apvienošana** darbojas CadCraft DWG un DXF failiem; tas pats citu lietotņu failiem nav izveidots.
- **Atsaukšana starp logiem:** CadCraft ziņo par katru pabeigto soli, bet Studio vēl nav vienotas atsaukšanas visām lietotnēm; katra lietotne atsauc savus soļus.
- **DWG OLE objekti** tiek saglabāti, bet netiek zīmēti savā vietā.
- **Drukas stila tabulu (CTB failu) nolasīšana** no citām programmām ir izveidota, bet nav pārbaudīta ar failu no citas programmas.
- **Savienojiet savu MI:** savienojums ar vienu klikšķi Studio, hostētais savienotājs pārlūka MI, jūsu pašu API atslēga Studio iekšienē un publicētā MCP pakotne šajā laidienā nav solīta.

Par iepriekšējo versiju skatiet [Kas jauns versijā 0.7](topic:whats-new-0-7).
