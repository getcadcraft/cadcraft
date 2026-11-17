---
title: No citas zīmēšanas programmatūras
summary: Kā pazīstamās komandas, taustiņi un ieradumi atbilst CadCraft un atšķirības, kas mulsina pieredzējušus zīmētājus.
keywords: pārslēgšanās, atšķirības, migrēt, ieradumi, aliasi, dinamiskā ievade, pickfirst, pickadd, qsave, saveas, saglabāt kā, mtext, ctb, polārā izsekošana, xref, tastatūras īsinājumi, pazīstams, copyclip, pasteclip, pasteorig, copybase, starpliktuve
from: b58688e7
---

Ja esat strādājis ar AutoCAD vai programmu, kas balstīta uz to pašu modeli, lielākā daļa no tā, ko zināt, šeit darbojas: komandrinda, aliasi, piemēram, `L`, `C`, `TR` un `O`, Enter vai Space atkārtošanai, logu un krustojuma atlase, objektu piesaiste uz F3, ortogonālais režīms uz F8, modeļa telpa ar izkārtojumiem un skata logiem. Šajā lapā uzskaitīts, kas tieši atbilst, un pēc tam atšķirības, kas cilvēkus pārsteidz. Izlasiet otro daļu, pat ja pirmo tikai pārlapojat.

## Kas atbilst tieši

| Ieradums | CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Tās pašas komandas, tie paši aliasi |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Tas pats |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Tās pašas izmēru komandas |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO`, ierakstīti komandrindā | Tas pats, jauniem izmēriem |
| `B`, lai izveidotu bloku, `I`, lai ievietotu, `PU`, lai iztīrītu | Tas pats (purge noņem tikai neizmantotos blokus) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` un pēc tam `E` vai `W` | Tas pats |
| Ierakstīts `_LINE` vai `-LAYER` no skripta vai ieraduma | Vadošais `_`, `-`, `.` vai `'` tiek ignorēts |
| Enter vai Space tukšā uzvednē atkārto pēdējo komandu | Tas pats |
| Esc atceļ; vēlreiz Esc notīra atlasi | Tas pats |
| `@dx,dy`, `@d<a`, ierakstīti leņķi pretēji pulksteņrādītāja virzienam no austrumiem | Tas pats |
| Logs no kreisās uz labo, krustojums no labās uz kreiso, klikšķis-klikšķis; nospiediet un velciet lasso, Space cikliski pārslēdz logu / krustojumu / žogu (LASSOMODE) | Tas pats |
| Vispirms atlasiet, pēc tam komanda (lietvārds-darbības vārds) | Tas pats; pabeigta komanda notīra atlasi |
| `ALL` un `L` pie Select objects | Tas pats |
| Shift+klikšķis noņem no atlases | Tas pats. Iestatījumi var likt klikšķim aizstāt atlasi, kā to dara PICKADD 0: skatiet [CadCraft iestatījumi](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Tās pašas komandas un taustiņi; ielīmējot, kopija tiek novietota pēc tās apakšējā kreisā stūra, kā to dara PASTECLIP |
| F3 objektu piesaiste, F7 režģis, F8 ortogonālais režīms | Tie paši taustiņi |
| Dubultklikšķis uz ritenīša veic tālummaiņu līdz robežām | Tas pats |
| Spoguļots teksts paliek lasāms | Tas pats (kā MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Tas pats; Mac datorā darbojas arī Command |

[Komandu uzziņa](topic:commands) uzskaita katru komandu un aliasu.

:::tip
Ja jums patīk AutoCAD lente, izvēlieties izvēlnes stilu {{ui:Klasiskais zīmēšanas stils}} sadaļā {{ui:Iestatījumi}} › {{ui:CadCraft}} › {{ui:Izvēlnes, taustiņi un pele}}: cilnes Home, Insert, Annotate, Parametric, View, Manage un Output virs tās pašas komandrindas, vidējā poga panorē, un labais klikšķis ir Enter. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).
:::

[Komandu karte](topic:command-map) uzskaita katru CadCraft komandu ar tās īsajiem nosaukumiem, bet [kopsavilkums](topic:cheat-sheet) — 40, ko izmantosiet visbiežāk (arī kā vienas lapas PDF).

## Atšķirības, kas mulsina cilvēkus

### Ievadītie punkti ir absolūti

Ar ieslēgtu dinamisko ievadi cita programma ievadīto `100,0` otrajam punktam uzskata par relatīvu. **CadCraft komandrinda tā nedara**: tur `x,y` vienmēr tiek mērīts no sākumpunkta. Ar ieslēgtu {{ui:Dinam.}} ({{key:F12}}) lietojiet tā laukus: attālums, {{key:Tab}}, leņķis. Izmantojiet `@100,0`, lai norādītu "100 pa labi no pēdējā punkta", vai pārvietojiet krustiņu pareizajā virzienā un ierakstiet vienkāršu `100`.

### Shift izlaiž piesaisti; tas nedod ortogonālo režīmu

Turot Shift klikšķinot, šim klikšķim tiek ignorēta objektu piesaiste. Tas īslaicīgi nepārslēdz ortogonālo režīmu. Izmantojiet F8 vai pogu {{ui:Ortogonāli}}.

### Labais klikšķis vienmēr ir Enter

Labā klikšķa izvēlnes nav. Labais klikšķis zīmējumā ir Enter: tas beidz komandu, pabeidz atlasi vai atkārto pēdējo komandu. Grip pārvietošanas vai atlases rāmja laikā tas atceļ. Velciet ar labo pogu, lai panorētu.

### Nav panorēšanas ar atstarpes taustiņu

Space ir Enter, tāpēc, turot Space un velkot, panorēšana nenotiek. Panorējiet ar vidējo vai labo pogu vai tāliniet uz āru un atpakaļ citā vietā ar ritenīti.

### Apgriešana un pagarināšana

Trim un Extend sākas Ātrajā režīmā: katrs redzamais objekts ir griezējmala vai robeža, gabals zem rādītāja rāda, kas tiks noņemts, velkamais ceļš apgriež katru gabalu, ko tas šķērso, un objekts, ko nekas nešķērso, tiek izdzēsts. {{key:Shift}} pārslēdz starp apgriešanu un pagarināšanu. `O` pārslēdz uz Standarta režīmu (vispirms izvēlieties malas), `F` un `C` ir žogs un krustojums, `E` ir EDGEMODE, `R` dzēš. Nav `P` (Project) opcijas: CadCraft apgriež zīmējuma plaknē.

### Noapaļošana un nošķelšana

{{cmd:FILLET}} un {{cmd:CHAMFER}} pieņem opcijas, ko zināt: Atsaukt (U), Polilīnija (P), Rādiuss (R) jeb Attālums (D), Leņķis (A) un Metode (E), Apgriezt (T) un Vairāki (M), kā arī {{key:Shift}}+klikšķis asam stūrim. Noapaļojums starp polilīniju un līniju pievieno loku kā savu objektu, nevis savieno to ar polilīniju, un polilīniju stūri blakus loka segmentam paliek kā ir.

### Rindkopas teksts un vienas rindas teksts

`T`, `MT` un `MTEXT` ir rindkopas teksts, ko raksta vietā, ar platumu, rindstarpu un līdzinājumu; `DT` un `DTEXT` ir vienas rindas teksts, kā jūs to pazīstat. Teksta stilu vai kolonnu nav, un teksta iekšējo formatējumu (treknrakstu, sakrautas daļas) vēl nevar ierakstīt; formatējums, kas nāk no faila, tiek saglabāts, uzzīmēts un saglabāts (skatiet [Pievienot tekstu un iezīmes](topic:text#formatting-inside-paragraph-text-from-other-programs)). Viss tiek zīmēts fontā Helvetica stilā.

### Saglabāt nozīmē „lejupielādēt kopiju”

{{key:Mod+S}}, `SAVE` un `QSAVE` lejupielādē kopiju rasējuma formātā: atvērtais DWG saglabājas kā DWG, DXF kā DXF. Pārlūkā nekas netiek pārrakstīts vietā, un atvērtie faili nekad netiek mainīti. CadCraft Studio {{key:Mod+S}} ieraksta atpakaļ failā, ko atvērāt.

`SAVEAS` ({{key:Mod+Shift+S}}) ir neliels dialogs, nevis failu pārlūks: izvēlieties {{ui:DWG}} (ar tā {{ui:Versija}}, AutoCAD 2000 līdz 2018), {{ui:DXF R12}} vai {{ui:DXF 2000}} un noklikšķiniet {{ui:Saglabāt}}. Pārlūks izlemj, kur nonāk lejupielāde. `DXFOUT` vienmēr lejupielādē DXF R12.

DWG, ko atvērāt, saglabājas tajā versijā, kādā tas ienāca; jauns rasējums saglabājas AutoCAD 2000 formātā, ja nepaņemat citu. Lapas, izmēri un svītrojumu raksti tiek saglabāti. Skatiet [Faili: kas atveras, kas saglabājas](topic:files#saving).

### Slāņi: vienkāršāk

- Katra slāņa izmaiņa (ieslēgt, sasaldēt, bloķēt, krāsa, drukāt, līniju tips, līnijas platums, pašreizējais slānis) ir viens atsaukšanas solis.
- Izslēgt un sasaldēt CadCraft dod to pašu efektu.
- Slāņi, ko rasējums sasaldē vienā skata logā, tur paliek sasaldēti: ekrānā, izdrukās un saglabājot kā DWG vai DXF.
- Skata logs, kas rāda slāni savā krāsā, līniju tipā, līnijas platumā vai caurspīdīgumā, turpina to darīt ekrānā, izdrukās un saglabātā DWG (DXF saglabā paša slāņa iestatījumus; saglabāšana to pasaka). Šo mainīšanu pa skata logiem vēl nav izveidota.
- Slāņu rekvizītu pārvaldnieka un slāņu stāvokļu nav; {{cmd:RENAME}}, {{cmd:LAYMRG}} un {{cmd:LAYDEL}} pārdēvē, apvieno un dzēš slāņus. Līniju tipus un līnijas platumus iestata labajā panelī (skatiet [Līniju platumi un līniju tipi](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} un {{cmd:LAYMCUR}} darbojas, izvēloties objektus.
- Saglabājot DXF R12, slāņu nosaukumi tiek rakstīti lielajiem burtiem. DWG tos saglabā tā, kā ierakstījāt.

### Izmēru stili

`DIMSTYLE` atver pārvaldnieku nosauktiem stiliem (jauns, mainīt, iestatīt pašreizējo, salīdzināt, piemērot). `DIMSCALE` un citi iestatījumi joprojām maina to, ko izmanto jauni izmēri, un katrs izmērs saglabā savus lielumus, ko var mainīt arī rekvizītu panelī. Pašreizējais stils failā netiek saglabāts. Izmēri seko rasējuma garuma formātam (decimāli vai pēdas un collas ar {{cmd:UNITS}}) vai savam {{ui:Formāts}}. Skatiet [Iestatīt izmēru lielumus](topic:dimension-settings).

### Drukāšana ir vienkāršāka

Drukas stila tabulas darbojas pēc krāsas, kā to dara CTB faili: Monohromā, Krāsā un Pelēktoņos ir iebūvētas, varat izveidot savas, un katra lapa saglabā savu tabulu. CTB failu nolasīšana ir veidota pēc publicētā apraksta un ir izmēģināta tikai uz failiem, ko esam izveidojuši; nosauktās drukas stila tabulas (STB) un lapu iestatījumi vēl nav izveidoti. Līnijas drukājas savā līnijas platumā, pārējās — ar vienu pildspalvas platumu. Lapas drukājas 1:1 uz sava papīra; modelis drukājas izvēlētā mērogā vai pielāgots. Skatiet [Drukāt PDF](topic:plot-pdf).

### Darbs skata logā

Kā jūs to pazīstat: veiciet dubultklikšķi skata logā (vai ierakstiet {{cmd:MSPACE}}), lai strādātu ar modeli caur to, un dubultklikšķi ārpus tā (vai {{cmd:PSPACE}}), lai atgrieztos pie lapas. Iekšā panorēšana un tālummaiņa maina to, ko skata logs rāda, ja vien tā attēlojums nav bloķēts; tad tās pārvieto lapu. Klikšķis uz cilnes zem zīmējuma arī iziet no skata loga. Skatiet [Strādāt ar modeli caur skata logu](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Izsekošana un dinamiskā ievade ir, režģa piesaiste vēl nav

Režģis ir tikai skatīšanai; punkti pie tā nepiesaistās (F9 piesaistes režīma nav). Polārā izsekošana ({{key:F10}}, solis, ko iestata ar {{cmd:POLARANG}}) un objektu piesaistes izsekošana ({{key:F11}}: apstājieties uz piesaistes punkta, lai to iegūtu) darbojas, kā jūs tos pazīstat; skatiet [Piesaiste objektiem](topic:object-snaps#polar-tracking). Dinamiskā ievade ({{key:F12}}) rāda attālumu un leņķi (vai X un Y) pie krustiņa; skatiet [Koordinātu un attāluma ievade](topic:coordinate-entry#dynamic-input).

### Pēdas un collas

Izvēlieties {{ui:Garuma formāts}} {{ui:Arhitektūras}} vai {{ui:Inženiertehniskais}} (vai ierakstiet {{cmd:UNITS}}) un ievadiet garumus, kā jūs tos pazīstat: `12'6"`, `12'6-1/2"`. Pirms daļskaitļa izmantojiet defisi, nevis atstarpi: {{key:Space}} ir {{key:Enter}}. Iestatiet arī {{ui:Vienības}} uz {{ui:Collas}}, lai lapas un izdrukas piedāvātu arhitektūras mērogus. Formāts tiek saglabāts DWG un DXF failos. Skatiet [Pēdas un collas](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopēšana un ielīmēšana paliek CadCraft iekšienē

{{key:Mod+C}}, {{key:Mod+X}} un {{key:Mod+V}} kopē, izgriež un ielīmē objektus rasējumā, starp rasējumiem un starp CadCraft cilnēm tajā pašā pārlūkā. Starpliktuve ir CadCraft pašas: CadCraft objektus nevar ielīmēt citā programmā, kā arī citas programmas objektus CadCraft. Ielīmējot no rasējuma citās vienībās, nenotiek pārmērošana: pēc tam izmantojiet {{cmd:SCALE}}. {{key:Mod+D}} ir dublikāts, kas pārvietojas kopā ar rādītāju — tā ir CadCraft papildinājums. Skatiet [Kopēt, ielīmēt un dublēt](topic:copy-paste).

### Pārlūka taustiņi, ko nevarat izmantot

Tīmekļa lapa nevar paņemt {{key:Mod+N}}, {{key:Mod+W}} vai {{key:Mod+T}} no pārlūka: tie atver un aizver logus un cilnes. Izmantojiet pogu {{ui:Jauna}} vai ierakstiet `NEW`. Skatiet [Taustiņi, peles un skārienpaliktņi](common:keys).

## Komandas, ko varat meklēt, bet kuru vēl nav

{{cmd:TABLE}} nav izveidota. Ierakstot to, parādās „Nezināma komanda”. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} un {{cmd:XREF}} ir izveidotas.) [Vēl nav izveidots](topic:not-built-yet) uzskaita, ko darīt šodien.
