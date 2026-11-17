---
title: Fra andre tegneprogrammer
summary: Hvordan kendte kommandoer, taster og vaner svarer til CadCraft, og de forskelle, der giver erfarne tegnere problemer.
keywords: skift, forskelle, migrér, vaner, aliasser, dynamisk input, pickfirst, pickadd, qsave, saveas, gem som, mtext, ctb, polar sporing, xref, tastaturgenveje, kendt, copyclip, pasteclip, pasteorig, copybase, udklipsholder
from: b58688e7
---

Hvis du har brugt AutoCAD, eller et program bygget på samme model, virker det meste af det, du kender, her: kommandolinjen, aliasser som `L`, `C`, `TR` og `O`, Enter eller Space for at gentage, vindues- og krydsvalg, objektfang på F3, Ortogonal på F8, modelrum med layouts og viewports. Denne side lister, hvad der svarer direkte, og derefter forskellene, der fanger folk. Læs den anden halvdel, selv hvis du blot skimmer den første.

## Hvad der svarer direkte

| Vane | I CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Samme kommandoer, samme aliasser |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Samme |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Samme målsætningskommandoer |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` skrevet i kommandolinjen | Samme, for nye målsætninger |
| `B` for at lave en blok, `I` for at indsætte, `PU` for at rense | Samme (rensning fjerner kun ubrugte blokke) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` derefter `E` eller `W` | Samme |
| Skriver `_LINE` eller `-LAYER` fra et script eller en vane | Det førende `_`, `-`, `.` eller `'` ignoreres |
| Enter eller Space på en tom ledetekst gentager den sidste kommando | Samme |
| Esc annullerer; Esc igen rydder valget | Samme |
| `@dx,dy`, `@d<a`, skrevne vinkler mod uret fra øst | Samme |
| Vindue fra venstre mod højre, kryds fra højre mod venstre, klik-klik; tryk og træk for et lasso, Space skifter mellem vindue, kryds og hegn (LASSOMODE) | Samme |
| Vælg først, derefter kommandoen (substantiv-verbum) | Samme; en afsluttet kommando rydder valget |
| `ALL` og `L` ved Vælg objekter | Samme |
| Shift+klik fjerner fra valget | Samme. Indstillinger kan få et klik til i stedet at erstatte valget, som PICKADD 0 gør: se [CadCraft-indstillinger](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Samme kommandoer og taster; indsætning placerer kopien ud fra dens nederste venstre hjørne, som PASTECLIP gør |
| F3 objektfang, F7 gitter, F8 Ortogonal | Samme taster |
| Dobbeltklik på hjulet for at zoome til udstrækning | Samme |
| Spejlvendt tekst forbliver læsbar | Samme (som med MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Samme; på en Mac virker Command også |

[Kommandoreferencen](topic:commands) lister alle kommandoer og aliasser.

:::tip
Hvis du kan lide AutoCAD-båndet, så vælg menustilen {{ui:Klassisk tegning}} i {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Menuer, taster og mus}}: faner for Hjem, Indsæt, Notering, Parametrisk, Visning, Administrér og Output over den samme kommandolinje, og midterknappen panorerer, mens højreklik er Enter. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).
:::

[Kommandooversigten](topic:command-map) lister alle CadCraft-kommandoer med deres korte navne, og [huskesedlen](topic:cheat-sheet) lister de 40, du vil bruge mest (også som en PDF på én side).

## Forskelle, der fanger folk

### Skrevne punkter er absolutte

Med dynamisk input tændt behandler det andet program et skrevet `100,0` som et andet punkt som relativt. **Kommandolinjen i CadCraft gør ikke det:** der måles `x,y` altid fra origo. Med {{ui:Dyn}} ({{key:F12}}) tændt, brug i stedet dets felter: afstand, {{key:Tab}}, vinkel. Brug `@100,0` for "100 til højre for det sidste punkt", eller flyt krydset den rigtige vej og skriv et nøgent `100`.

### Shift springer over fangning; den giver ikke Ortogonal

Hold Shift nede, mens du klikker, og objektfang ignoreres for det klik. Det skifter ikke midlertidigt til Ortogonal. Brug F8 eller knappen {{ui:Ortogonal}}.

### Højreklik er altid Enter

Der er ingen højreklikmenu. Et højreklik i tegningen er Enter: det afslutter en kommando, afslutter et valg eller gentager den sidste kommando. Under en greb-flytning eller en valgboks annullerer det i stedet. Træk med højre knap for at panorere.

### Ingen mellemrumspanorering

Space er Enter, så at holde Space nede og trække panorerer ikke. Panorér med midterknappen eller højreknappen, eller zoom ud og ind igen et andet sted med hjulet.

### Beskær og forlæng

Beskær og forlæng starter i hurtig tilstand: hvert synligt objekt er en skærekant eller en afgrænsning, stykket under markøren viser, hvad der fjernes, en trukket sti beskærer alle de stykker, den krydser, og et objekt, som intet krydser, slettes. {{key:Shift}} skifter mellem beskær og forlæng. `O` skifter til standardtilstand (vælg kanterne først), `F` og `C` er hegn og kryds, `E` er EDGEMODE, `R` sletter. Der er ingen `P`-mulighed (Projekt): CadCraft beskærer i tegningens plan.

### Afrunding og affasning

{{cmd:FILLET}} og {{cmd:CHAMFER}} tager de muligheder, du kender: Fortryd (U), Polylinje (P), Radius (R) eller Afstand (D), Vinkel (A) og Metode (E), Beskær (T) og Flere (M), og {{key:Shift}}+klik for et skarpt hjørne. En afrunding mellem en polylinje og en linje tilføjer buen som et eget objekt i stedet for at samle dem i polylinjen, og polylinjehjørner ved siden af et buesegment lades være, som de er.

### Afsnitstekst og enkeltlinjetekst

`T`, `MT` og `MTEXT` er afsnitstekst skrevet på stedet, med en bredde, linjeafstand og justering; `DT` og `DTEXT` er enkeltlinjetekst, som du kender den. Der er ingen tekststile eller kolonner, og du kan ikke skrive formatering i teksten (fed, stablede brøker) endnu; formatering, der kommer med en fil, bevares, tegnes og gemmes (se [Tilføj tekst og etiketter](topic:text#formatting-inside-paragraph-text-from-other-programs)). Alt tegnes i en Helvetica-lignende skrifttype.

### Gem betyder "download en kopi"

{{key:Mod+S}}, `SAVE` og `QSAVE` downloader en kopi i tegningens format: en DWG, du har åbnet, gemmes som DWG, en DXF som DXF. I browseren overskrives intet på stedet, og åbnede filer ændres aldrig. I CadCraft Studio skriver {{key:Mod+S}} tilbage til den fil, du åbnede.

`SAVEAS` ({{key:Mod+Shift+S}}) er en lille dialogboks, ikke en filbrowser: vælg {{ui:DWG}} (med dens {{ui:Version}}, AutoCAD 2000 til 2018), {{ui:DXF R12}} eller {{ui:DXF 2000}}, og klik på {{ui:Gem}}. Browseren afgør, hvor downloaden havner. `DXFOUT` downloader altid DXF R12.

En DWG, du har åbnet, gemmes i den version, den kom i; en ny tegning gemmes i AutoCAD 2000-formatet, medmindre du vælger et andet. Ark, målsætninger og skraveringsmønstre bevares. Se [Filer: hvad der åbnes, hvad der gemmes](topic:files#saving).

### Lag: enklere

- Hver lagændring (tændt, frys, lås, farve, plot, linjetype, linjetykkelse, aktuelt lag) er ét fortrydelsestrin.
- Slukket og frosset har samme virkning i CadCraft.
- Lag, som en tegning fryser i én viewport, forbliver frosset der: på skærmen, i plots og når du gemmer den som DWG eller DXF.
- En viewport, der viser et lag i sin egen farve, linjetype, linjetykkelse eller gennemsigtighed, bliver ved med at gøre det på skærmen, i plots og i en gemt DWG (DXF bevarer lagets egne indstillinger; gemningen siger det). Ændring af det pr. viewport er ikke bygget endnu.
- Der er ingen lagegenskabsadministrator og ingen lagtilstande; {{cmd:RENAME}}, {{cmd:LAYMRG}} og {{cmd:LAYDEL}} omdøber, sammenlægger og sletter lag. Linjetyper og linjetykkelser sættes i højre panel (se [Linjetykkelser og linjetyper](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} og {{cmd:LAYMCUR}} virker ved at vælge.
- Ved gem til DXF R12 skrives lagnavne med store bogstaver. En DWG bevarer dem, som du skrev dem.

### Målsætningsstile

`DIMSTYLE` åbner en administrator for navngivne stile (ny, rediger, gør aktuel, sammenlign, anvend). `DIMSCALE` og de andre indstillinger ændrer stadig, hvad nye målsætninger bruger, og hver målsætning beholder sine egne størrelser, som du også kan ændre i panelet Egenskaber. Den aktuelle stil gemmes ikke i filen. Målsætninger følger tegningens længdeformat (decimal, eller fod og tommer med {{cmd:UNITS}}), eller deres egen {{ui:Format}}. Se [Angiv målsætningsstørrelser](topic:dimension-settings).

### Plot er enklere

Plotstiltabeller virker efter farve, som CTB-filer gør: Monochrome, Colour og Grayscale er indbygget, du kan lave dine egne, og hvert ark beholder sin tabel. Læsning af CTB-filer er bygget ud fra den offentliggjorte beskrivelse og er kun prøvet på filer, vi selv har lavet; navngivne plotstiltabeller (STB) og sideopsætninger er ikke bygget endnu. Linjer udskrives i deres linjetykkelse, de andre med én pennebredde. Ark plottes i 1:1 på deres eget papir; modellen plottes i en valgt målestok eller tilpasset. Se [Plot til PDF](topic:plot-pdf).

### Arbejde inde i en viewport

Som du kender det: dobbeltklik inde i en viewport (eller skriv {{cmd:MSPACE}}) for at arbejde på modellen gennem den, og dobbeltklik udenfor (eller {{cmd:PSPACE}}) for at gå tilbage til arket. Inde i den panorerer og zoomer du det, viewporten viser, medmindre dens visning er låst; så flytter de arket. Et klik på en fane under tegningen forlader også viewporten. Se [Arbejd på modellen gennem en viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Sporing og dynamisk input: ja, gitterfangst: endnu ikke

Gitteret er kun til at se på; punkter fanges ikke til det (der er ingen F9-fangstmode). Polar sporing ({{key:F10}}, trin sat med {{cmd:POLARANG}}) og objektfangssporing ({{key:F11}}: hvil på et fangstpunkt for at fange det) virker, som du kender dem; se [Fang til objekter](topic:object-snaps#polar-tracking). Dynamisk input ({{key:F12}}) viser afstand og vinkel (eller X og Y) ved krydset; se [Indtastning af koordinater og afstande](topic:coordinate-entry#dynamic-input).

### Fod og tommer

Vælg {{ui:Længdeformat}} {{ui:Arkitekt}} eller {{ui:Ingeniør}} (eller skriv {{cmd:UNITS}}), og skriv længder, som du kender dem: `12'6"`, `12'6-1/2"`. Brug en bindestreg, ikke et mellemrum, før en brøk: {{key:Space}} er {{key:Enter}}. Sæt også {{ui:Enheder}} til {{ui:Tommer}}, så ark og plots tilbyder arkitektoniske målestokke. Formatet bevares i gemte DWG- og DXF-filer. Se [Fod og tommer](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiér og sæt ind forbliver i CadCraft

{{key:Mod+C}}, {{key:Mod+X}} og {{key:Mod+V}} kopierer, klipper og indsætter objekter i en tegning, mellem tegninger og mellem CadCraft-faner i samme browser. Udklipsholderen hører til CadCraft: du kan ikke indsætte CadCraft-objekter i et andet program, eller objekter fra et andet program i CadCraft. Indsætning fra en tegning i andre enheder skalerer ikke om: brug derefter {{cmd:SCALE}}. {{key:Mod+D}} er en duplikering, der flytter sig med markøren, en tilføjelse i CadCraft. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

### Browsertaster du ikke kan bruge

En webside kan ikke overtage {{key:Mod+N}}, {{key:Mod+W}} eller {{key:Mod+T}} fra browseren: de åbner og lukker vinduer og faner. Brug knappen {{ui:Ny}} eller skriv `NEW`. Se [Taster, mus og trackpads](common:keys).

## Kommandoer du måske rækker efter, som ikke findes endnu

{{cmd:TABLE}} er ikke bygget. Skrives den, svarer den "Ukendt kommando". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} og {{cmd:XREF}} er bygget.) [Ikke lavet endnu](topic:not-built-yet) lister, hvad du gør i stedet i dag.
