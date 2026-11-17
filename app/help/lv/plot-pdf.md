---
title: Drukāt PDF
summary: Izveidojiet lapas PDF pilnā izmērā vai modeļa PDF noteiktā mērogā vai pielāgotu papīram, drukājiet to no pārlūkprogrammas vai programmā Studio, vai saglabājiet kā PNG vai SVG.
keywords: drukāt, drukas, printeris, kopijas, png, svg, attēls, pdf, publicēt, exportpdf, papīrs, mērogs, monohromā, pelēktoņi, melnbalts, līnijas biezums, pildspalva, lapas iestatījumi, drukas logs, drukas stils, drukas stila tabula, ctb, krāsai atkarīgs, rastrēšana, plotstyles, stylesmanager
from: a4752f83
---

## Ko jūs izveidosiet

Lapas PDF pilnā izmērā, pēc tam ātru modeļa PDF mērogā 1:100 un izdruku.

PDF tiek veidots jūsu pārlūkprogrammā; nekas netiek augšupielādēts. Tas ir vektora PDF: līnijas paliek asas jebkurā tālummaiņas līmenī, un tekstu var meklēt.

## Drukāt lapu

1. Noklikšķiniet uz lapas cilnes zem rasējuma.
2. Nospiediet {{key:Mod+P}}, noklikšķiniet uz {{ui:Drukāt}} vai ierakstiet `PLOT` un nospiediet {{key:Enter}}.

Atveras dialogs {{ui:Drukāt PDF}}. Tajā norādīts, kura lapa tiek drukāta un uz kāda papīra, "pilnā izmērā … kā jūs to redzat". Priekšskatījums labajā pusē rāda lapu.

3. Sadaļā {{ui:Drukas stils}} izvēlieties {{ui:Monohromā (melna)}} melnām līnijām, {{ui:Krāsa (kā zīmēts)}}, lai saglabātu krāsas, {{ui:Pelēktoņi}} vai savu tabulu (skatiet [Drukas stila tabulas](topic:plot-pdf#plot-style-tables)). Lapa saglabā šo izvēli: tā tiek saglabāta kopā ar rasējumu.
4. Sadaļā {{ui:Līnijas biezums}} izvēlieties pildspalvas platumu no 0.13 mm līdz 0.70 mm. Līnijas ar noklusējuma līnijas platumu tiek drukātas šajā platumā; līnijas ar savu līnijas platumu (slānis vai objekts, vai pildspalva to krāsai tabulā) tiek drukātas ar to.
5. Noklikšķiniet uz {{ui:Lejupielādēt PDF}}.

Pārlūkprogramma lejupielādē PDF, kura nosaukums ir atkarīgs no rasējuma un lapas, piemēram, `Drawing1-A-101 Plan.pdf`. Vēsturē tiek norādīts tā izmērs baitos un papīra izmērs milimetros.

Lapa vienmēr tiek drukāta mērogā 1:1 uz sava papīra. Lai mainītu papīru, mainiet to pašā lapā (skatiet [Lapas iestatīšana](topic:sheets-and-viewports)). Slāņi, kas iestatīti neizdrukāties, tiek izlaisti, tāpat kā skatu logu rāmji.

## Visas lapas vienā PDF

Ja ir divas vai vairāk lapas, dialogā {{ui:Drukāt PDF}} ir {{ui:Visas lapas vienā PDF failā}}; vai ierakstiet {{cmd:PUBLISH}}. {{key:Enter}} izvēlas visas lapas; `S` (Dažas) pieprasa to nosaukumus, atdalītus ar komatiem. Lejupielādējas viens PDF ar lappusi katrai lapai cilņu secībā, katra savā papīra izmērā, un grāmatzīme katrai lapai ar tās nosaukumu. Katra lapa tiek drukāta ar savu drukas stila tabulu; lapai, kurai nav izvēlēta neviena, tiek izmantota pēdējā dialogā izvēlētā tabula un pēdējais izvēlētais pildspalvas platums.

## Drukāt modeli

1. Noklikšķiniet uz cilnes {{ui:Modelis}}.
2. Nospiediet {{key:Mod+P}}.

Dialogā norādīts, ka modelis tiks drukāts uz papīra lapas, un tiek rādīti papildu iestatījumi:

3. Sadaļā {{ui:Laukums}} izvēlieties, ko drukāt:
   - {{ui:Viss (robežas)}}: viss rasējums.
   - {{ui:Ekrānā redzamais}}: rasējuma apgabals, ko jūs redzat tagad.
   - {{ui:Logs…}}: pēc tam noklikšķiniet uz {{ui:Izvēlēties}}, noklikšķiniet uz diviem stūriem rasējumā, un dialogs atgriezīsies.
4. Sadaļā {{ui:Papīrs}} izvēlieties izmēru: ISO A4 līdz A0, Letter, Legal, Tabloid un ANSI C un D, vai ARCH C, D un E.
5. Sadaļā {{ui:Orientācija}} izvēlieties {{ui:Ainava}} vai {{ui:Portrets}}.
6. Sadaļā {{ui:Mērogs}} izvēlieties {{ui:Pielāgot papīram}} vai mērogu, piemēram, `1:100`.

Zem iestatījumiem rindā norādīts mērogs un tas, cik liels apgabals iznāk uz papīra. Ja tas ir lielāks par papīru, tas tiek norādīts: malas tiek nogrieztas. Izvēlieties mazāku mērogu, lielāku papīru vai {{ui:Pielāgot papīram}}.

7. Noklikšķiniet uz {{ui:Lejupielādēt PDF}}.

Modeļa drukājumam ap malu paliek 5 mm atstarpe, jo lielākā daļa printeru nevar drukāt līdz malai. {{ui:Pielāgot papīram}} dod nevienmērīgu mērogu (vēsturē un informācijas rindā ir rakstīts "(pielāgots)"); izvēlieties standarta mērogu, ja rasējumam jāsakrīt ar reāliem izmēriem.

:::note
Mērogi tiek nolasīti reālās vienībās. Lai 1:100 būtu pareizs, sadaļā {{ui:Pašreizējie iestatījumi}} iestatiet {{ui:Vienības}} atbilstoši tam, kas ir viena rasējuma vienība. Rasējums bez vienībām tiek uzskatīts par milimetriem.
:::

## Drukas stila tabulas

Drukas stila tabula nosaka, kā katra no 255 standarta rasējuma krāsām tiek drukāta, tāpat kā krāsai atkarīga drukas stila tabula (CTB) citās CAD programmās. Ir trīs iebūvētas:

| Tabula | Drukā |
|---|---|
| {{ui:Krāsa (kā zīmēts)}} | Katrs objekts savā krāsā. |
| {{ui:Monohromā (melna)}} | Visas krāsas melnas: parasta izvēle rasējumiem. |
| {{ui:Pelēktoņi}} | Katra krāsa kā tās pelēktonis, lai krāsas paliek atšķirīgas melnbaltā printerī. |

Lai izveidotu savu, piemēram, sarkanas līnijas biezas un melnas, bet pārējo plānas:

1. Dialogā {{ui:Drukāt PDF}} noklikšķiniet uz {{ui:Rediģēt tabulas…}} (vai ierakstiet {{cmd:PLOTSTYLES}}).
2. Noklikšķiniet uz {{ui:Jauna}} un laukā {{ui:Nosaukums}} ierakstiet nosaukumu, piemēram, `office`. Lai sāktu no iebūvētas tabulas, izvēlieties to laukā {{ui:Tabula}} un noklikšķiniet uz {{ui:Kopēt}}.
3. Noklikšķiniet uz krāsas režģī. {{key:Shift}}+klikšķis atlasa krāsu diapazonu, {{key:Mod}}+klikšķis pievieno vēl vienu, un {{ui:Atlasīt visas krāsas}} atlasa visas.
4. Iestatiet, kā drukāt atlasītās krāsas:
   - {{ui:Drukā ar}}: {{ui:Savu krāsu}}, {{ui:Melna}} vai {{ui:Cita krāsa…}}.
   - {{ui:Kā pelēktonis}}: krāsa kā tās pelēktonis.
   - {{ui:Tinte (%)}}: 100 ir pilna tinte, 50 ir puse ceļa līdz baltam (rastrēšana), fona līnijām.
   - {{ui:Līnijas platums}}: {{ui:Sava līnijas platuma}} saglabā objekta vai slāņa līnijas platumu; vērtība drukā katru šīs krāsas līniju ar šo platumu.
   - {{ui:Līniju tips}}: drukā katru šīs krāsas līniju ar citu līniju tipu (piemēram, visas sarkanās punktētas); {{ui:Izmantot objekta līnijtipu}} atstāj tos.
   - {{ui:Līnijas gals}} un {{ui:Līniju savienojums}}: taisni, kvadrātveida vai apaļi gali, un šķautnes, slīpi vai apaļi stūri (apaļi, kā agrāk, ja nekas nav iestatīts).
   - {{ui:Aizpildījuma stils}}: ciets šīs krāsas aizpildījums tiek drukāts kā šrafējuma līnijas (horizontālas vai vertikālas joslas, slīpas līnijas, krustojumi, rombi, kvadrātveida punkti), nevis kā tinte; tas paredzēts printeriem un plāniem, kur plakana tinte ir pārāk smaga.

   Pati tabula ietver vēl divus iestatījumus: {{ui:Līniju biezumi}}, platumi, ko tā zina (drukāta līnija tiek piesaistīta tuvākajam no tiem), un {{ui:Līniju tipa mērogs}}, koeficients punktiņu garumam katram līniju tipam, kas nav ISO.

5. Noklikšķiniet uz {{ui:Gatavs}}. Tabula tiek saglabāta rasējumā, un lapa (vai modelis) tagad drukājas ar to. {{ui:Atcelt}} atmet izmaiņas.

Krāsa ar savu pildspalvu rādās ar punktu stūrī, un punkts apakšā, ja tai iestatīts līnijas platums. Objekts ar patiesu krāsu (nevis vienu no 255) izmanto tuvākās standarta krāsas pildspalvu.

Rasējums saglabā savas tabulas un katras lapas izvēli, kad saglabājat kā DWG (2000 līdz 2018) vai DXF (R12 vai 2000), un tās atkal atveras. Citas programmas redz nosaukumu katras lapas lapas iestatījumos (`office.ctb`), nevis pašu tabulu. Rasējums no citas programmas, kura lapas iestatījumos ir nosaukta tabula, piemēram, `monochrome.ctb`, tiek drukāts ar iebūvēto tabulu ar šādu nosaukumu; jebkuram citam nosaukumam dialogs norāda, ka rasējumā tādas nav, un drukā rasējuma krāsas, līdz izvēlaties tabulu vai izveidojat tādu ar šo nosaukumu.

Lai izmantotu tabulu citā rasējumā, sadaļā {{ui:Drukas stila tabulas}} noklikšķiniet uz {{ui:Eksportēt}} (tas saglabā `office.plotstyle.json`), pēc tam citā rasējumā uz {{ui:Importēt…}}. {{ui:Importēt…}} pieņem arī `.ctb` failu no citas programmas: tas tiek nolasīts no publicētā formāta apraksta un **vēl nav pārbaudīts pret reālu failu**. Tiek nolasīta katras krāsas krāsa, rastrēšana un līnijas platums; pelēktoņi, pildspalvu numuri, līniju tipi, līniju gali un savienojumi, kā arī aizpildījuma stili netiek nolasīti, un nosaukta tabula (`.stb`) tiek noraidīta. Salīdziniet pirmo izdruku ar to, ko sagaidāt, un, ja tā ir nepareiza, nosūtiet mums failu.

## Drukāt

**Pārlūkprogrammā** noklikšķiniet uz {{ui:Drukāt…}}. CadCraft izveido PDF un atver pārlūkprogrammas pašu drukas dialogu. Tajā izvēlieties "Faktiskais izmērs" vai 100% (nevis "Pielāgot"), lai saglabātu mērogu. Ja pārlūkprogramma nevar drukāt no lapas, PDF tiek atvērts jaunā cilnē: drukājiet no tās ar {{key:Mod+P}}.

Jūs varat arī noklikšķināt uz {{ui:Atvērt drukāšanai}}: PDF atveras jaunā pārlūkprogrammas cilnē, un no turienes to drukājiet.

:::safari
Safari var parādīt PDF un gaidīt, kamēr izmantojat **Fails** un pēc tam **Drukāt**.
:::

Ja pārlūkprogramma bloķē jauno cilni, CadCraft tā vietā lejupielādē PDF un par to paziņo vēsturē. Ļaujiet vietnei atvērt uznirstošos logus, lai nākamreiz tas atvērtos cilnē.

**CadCraft Studio** programmā dialogs {{ui:Drukāt PDF}} uzskaita datora printerus. Izvēlieties {{ui:Printeris}}, {{ui:Papīrs printerī}} un kopiju skaitu {{ui:Kopijas}}, pēc tam noklikšķiniet uz {{ui:Drukāt…}}. {{ui:Tāpat kā drukā}} izvēlas printera papīru, kas atbilst lapas izmēram (A3 lapai — A3); ja printerim tāda nav, tiek izmantots tā paša papīrs un lapa tiek pielāgota tam. Windows sistēmā lapa tiek nosūtīta kā 300 dpi attēls, jo Windows nevar drukāt PDF bez PDF programmas; Linux un macOS sistēmās pats PDF tiek nosūtīts sistēmas drukas pakalpojumam. Nekas neatstāj datoru.

## Attēlu un SVG faili

{{ui:Lejupielādēt PNG}} saglabā drukāto lapu kā attēlu 300 dpi (samazināts tikai tad, ja ļoti liela lapa būtu lielāka, nekā pārlūkprogramma spēj izveidot; vēsturē tas tiek norādīts). {{ui:Lejupielādēt SVG}} saglabā to kā mērogojamu rasējumu milimetros, ar drukas līnijām un tekstu. Abi tiek veidoti no tās pašas drukas, kas PDF, ar to pašu drukas stilu, līnijas platumu un apgabalu. Rasējumā ievietotie attēli ir tikai PDF; vēsturē norādīts, cik no tiem izlaisti.

## Attēli

Attēli tiek drukāti ar savu izšķirtspēju, zem līnijām. {{ui:Attēli}} dialogā tos var ierobežot līdz 600, 300 vai 150 dpi mazākam failam. Līnijas, teksts un šrafējumi vienmēr paliek asi (vektori), un caurspīdīgums paliek caurspīdīgs. Skatiet [Attēli rasējumā](topic:pictures).

## Iestatījumi, kas tiek atcerēti

Dialogs šajā pārlūkprogrammā atceras jūsu pēdējo papīru, orientāciju, mērogu un līnijas platumu. Drukas stila tabula tiek glabāta katrai lapai rasējumā; lapai, kurai nav izvēlēta neviena, sākas ar pēdējo izvēlēto. Izvēlētais logs tiek saglabāts līdz lapas pārlādēšanai; pēc tam dialogs sākas ar {{ui:Viss (robežas)}}.

## Biežākās kļūdas

- **PDF ir tukšs vai pogas ir pelēkas.** Nav nekā, ko drukāt (tukšs modelis), vai ir izvēlēts {{ui:Logs…}}, bet logs vēl nav izvēlēts ("Izvēlieties logu, ko drukāt.").
- **Teksts PDF rāda "?".** Teksts poļu, čehu, kirilicas, grieķu un citās Eiropas rakstu valodās tiek drukāts kā tas ir: PDF tad satur burtus, kas tam vajadzīgi (no fonta Liberation Sans, kuram ir Helvetica platumi), un tekstu var atlasīt un meklēt. Ķīniešu, japāņu un korejiešu teksts arī tiek drukāts kā tas ir: ja rasējumā tāds ir, drukāšana iegūst lielāku fontu (apmēram 10 MB, vienreiz), un PDF satur tikai izmantotās rakstzīmes, tāpēc pirmajai reizei nepieciešams savienojums (nevis bezsaistes kopijai, kas saglabāta agrāk). Ivrits tiek drukāts no tā paša iegultā fonta kā latīņu teksts, un arābu, persiešu un urdu teksts liek drukāšanai iegūt vēl vienu fontu (mazāku par 1 MB, vienreiz); no labās uz kreiso pusi rakstītas līnijas tiek sakārtotas un burti savienoti (skatiet [Teksts](topic:text)). Retas ideogrammas ārpus šiem fontiem un rakstu valodas, kurām nepieciešama sarežģīta formēšana, piemēram, hindi, tiek drukātas kā "?", un vēsture tās saskaita.
- **Visas līnijas ir vienāda biezuma.** To līnijas platums ir noklusējuma: piešķiriet slāņiem vai objektiem {{ui:Līnijas platums}} labajā panelī (skatiet [Līniju platumi un līniju tipi](topic:units-papers-scales#line-weights-and-linetypes)) vai iestatiet līniju platumus katrai krāsai [drukas stila tabulā](topic:plot-pdf#plot-style-tables).
- **"(nav šajā rasējumā)" blakus drukas stilam.** Rasējums ir no citas programmas un nosauc tabulu, kuras tajā nav. Izvēlieties vienu no tabulām vai izveidojiet tādu ar šādu nosaukumu.
- **Konstrukcijas līnijas tika izdrukātas.** Iestatiet to slāni neizdrukāties: noklikšķiniet uz tā printera pogas sadaļā {{ui:Slāņi}}.
- **Izdruka ir nepareizā izmērā.** Printeris to mērogoja. Drukājiet faktiskajā izmērā.
- **{{key:Mod+P}} atvēra pārlūkprogrammas drukas dialogu.** Kursors bija kastītē labajā panelī, vai bija atvērts cits dialogs. Nospiediet {{key:Enter}} vai {{key:Esc}}, lai izietu no kastītes, un mēģiniet vēlreiz, vai noklikšķiniet uz {{ui:Drukāt}}.
- **{{key:Mod+P}} nedarīja neko.** Darbojas komanda. Vispirms nospiediet {{key:Esc}}.
