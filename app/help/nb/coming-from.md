---
title: Fra annen tegneprogramvare
summary: Hvordan kjente kommandoer, taster og vaner tilsvarer CadCraft, og forskjellene som lurer erfarne tegnere.
keywords: bytte, forskjeller, migrere, vaner, aliaser, dynamisk inndata, pickfirst, pickadd, qsave, saveas, lagre som, mtext, ctb, polarsporing, xref, hurtigtaster, kjent, copyclip, pasteclip, pasteorig, copybase, utklippstavle
from: b58688e7
---

Hvis du har brukt AutoCAD, eller et program bygget på samme modell, fungerer det meste du kjenner, her: kommandolinjen, aliaser som `L`, `C`, `TR` og `O`, Enter eller mellomrom for å gjenta, valg med vindu og kryssing, objektfang på F3, Ortho på F8, modellrom med Layout og visningsområder. Denne siden lister det som går direkte over, og deretter forskjellene som lurer folk. Les den andre halvdelen selv om du skummer den første.

## Det som går direkte over

| Vane | I CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Samme kommandoer, samme aliaser |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Samme |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Samme målekommandoer |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` skrevet på kommandolinjen | Samme, for nye måltilsettinger |
| `B` for å lage en blokk, `I` for å sette inn, `PU` for å rense | Samme (rensing fjerner bare ubrukte blokker) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` og deretter `E` eller `W` | Samme |
| Skriver `_LINE` eller `-LAYER` fra et skript eller en vane | Det innledende `_`, `-`, `.` eller `'` ignoreres |
| Enter eller mellomrom på en tom ledetekst gjentar siste kommando | Samme |
| Esc avbryter; Esc igjen fjerner utvalget | Samme |
| `@dx,dy`, `@d<a`, vinkler skrevet mot klokken fra øst | Samme |
| Vindu fra venstre til høyre, kryssing fra høyre til venstre, klikk-klikk; trykk og dra for lasso, mellomrom veksler mellom vindu, kryssing og gjerde (LASSOMODE) | Samme |
| Velg først, deretter kommandoen (substantiv-verb) | Samme; en fullført kommando fjerner utvalget |
| `ALL` og `L` ved Velg objekter | Samme |
| Shift+klikk fjerner fra utvalget | Samme. Innstillinger kan gjøre at et klikk erstatter utvalget i stedet, slik PICKADD 0 gjør: se [CadCraft-innstillinger](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Samme kommandoer og taster. Liming plasserer kopien etter nedre venstre hjørne, slik PASTECLIP gjør |
| F3 objektfang, F7 rutenett, F8 Ortho | Samme taster |
| Dobbeltklikk på hjulet for å zoome til utstrekning | Samme |
| Speilvendt tekst forblir lesbar | Samme (som med MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Samme. På Mac fungerer også Command |

[Kommandoreferansen](topic:commands) lister alle kommandoer og aliaser.

:::tip
Hvis du liker båndet i AutoCAD, velg menystilen {{ui:Klassisk tegning}} i {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Menyer, taster og mus}}: faner for Home, Insert, Annotate, Parametric, View, Manage og Output over samme kommandolinje, og midtknappen panorerer mens høyreklikk er Enter. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).
:::

[Kommandokartet](topic:command-map) lister alle kommandoene CadCraft har, med korte navn, og [hurtigguiden](topic:cheat-sheet) de 40 du vil bruke mest (også som en PDF på én side).

## Forskjeller som lurer folk

### Skrevne punkter er absolutte

Med dynamisk inndata på, behandler det andre programmet et skrevet `100,0` for et andre punkt som relativt. **Kommandolinjen i CadCraft gjør ikke det:** der er `x,y` alltid målt fra origo. Med {{ui:Dyn}} ({{key:F12}}) på, bruk feltene i stedet: avstand, {{key:Tab}}, vinkel. Bruk `@100,0` for «100 til høyre for det siste punktet», eller flytt krysset riktig vei og skriv et rent `100`.

### Shift hopper over fang; det gir ikke Ortho

Å holde Shift mens du klikker, ignorerer objektfang for det klikket. Det slår ikke Ortho av eller på midlertidig. Bruk F8 eller knappen {{ui:Ortho}}.

### Høyreklikk er alltid Enter

Det finnes ingen høyreklikkmeny. Et høyreklikk i tegningen er Enter: det avslutter en kommando, fullfører et utvalg, eller gjentar siste kommando. Under en grepeflytting eller en utvalgsboks avbryter det i stedet. Dra med høyre knapp for å panorere.

### Ingen panorering med mellomromstasten

Mellomrom er Enter, så å holde inne mellomrom og dra panorerer ikke. Panorer med midtknappen eller høyreknappen, eller zoom ut og inn igjen et annet sted med hjulet.

### Trim og Forleng

Trim og Forleng starter i hurtigmodus: hvert synlig objekt er en skjærekant eller en grense, stykket under pekeren viser hva som fjernes, en dratt bane trimmer alle stykker den krysser, og et objekt som ingenting krysser, slettes. {{key:Shift}} veksler mellom trim og forleng. `O` bytter til standardmodus (velg kantene først), `F` og `C` er gjerde og kryssing, `E` er EDGEMODE, `R` sletter. Det finnes ingen `P`-valg (Project): CadCraft trimmer i tegningens plan.

### Avrunding og fasing

{{cmd:FILLET}} og {{cmd:CHAMFER}} tar valgene du kjenner: Angre (U), Polylinje, Radius (eller Distanse, Vinkel (A) og Metode (E)), Trim og Flere (M), og {{key:Shift}}+klikk for et skarpt hjørne. En avrunding mellom en polylinje og en linje legger buen til som et eget objekt i stedet for å slå den sammen til polylinjen, og polylinjehjørner ved siden av et buesegment blir stående som de er.

### Avsnittstekst og enkeltlinjetekst

`T`, `MT` og `MTEXT` er avsnittstekst skrevet på stedet, med bredde, linjeavstand og justering. `DT` og `DTEXT` er enkeltlinjetekst, slik du kjenner dem. Det finnes ingen tekststiler eller kolonner, og du kan ikke skrive formatering i teksten (fet skrift, stablede brøker) ennå. Formatering som kommer i en fil, beholdes, tegnes og lagres (se [Legg til tekst og merkelapper](topic:text#formatting-inside-paragraph-text-from-other-programs)). Alt tegnes med en Helvetica-lignende skrift.

### Lagre betyr å laste ned en kopi

{{key:Mod+S}}, `SAVE` og `QSAVE` laster ned en kopi i tegningens format: en DWG du åpnet, lagres som DWG, en DXF som DXF. I nettleseren overskrives ingenting på stedet, og åpnede filer endres aldri. I CadCraft Studio skriver {{key:Mod+S}} tilbake til filen du åpnet.

`SAVEAS` ({{key:Mod+Shift+S}}) er en liten dialogboks, ikke en filutforsker: velg {{ui:DWG}} (med {{ui:Version}}, AutoCAD 2000 til 2018), {{ui:DXF R12}} eller {{ui:DXF 2000}} og klikk {{ui:Lagre}}. Nettleseren bestemmer hvor nedlastingen havner. `DXFOUT` laster alltid ned DXF R12.

En DWG du åpnet, lagres i versjonen den kom i. En ny tegning lagres i AutoCAD 2000-formatet med mindre du velger et annet. Ark, mål og skravurmønstre beholdes. Se [Filer: hva som åpnes, hva som lagres](topic:files#saving).

### Layere: enklere

- Hver endring av layer (på, frys, lås, farge, plott, linjetype, linjevekt, aktiv layer) er ett steg å angre.
- Av og frys har samme virkning i CadCraft.
- Layere som en tegning fryser i ett visningsområde, forblir frosne der: på skjermen, i plott og når du lagrer som DWG eller DXF.
- Et visningsområde som viser en layer i sin egen farge, linjetype, linjevekt eller gjennomsiktighet, fortsetter å gjøre det på skjermen, i plott og i en lagret DWG. DXF beholder layerens egne innstillinger, og lagringen sier fra om det. Å endre dette per visningsområde er ikke bygget ennå.
- Det finnes ingen egenskapsbehandler for layere og ingen layertilstander. {{cmd:RENAME}}, {{cmd:LAYMRG}} og {{cmd:LAYDEL}} gir nytt navn, slår sammen og sletter layere. Linjetyper og linjevekter settes i høyre panel (se [Linjevekter og linjetyper](topic:units-papers-scales#line-weights-and-linetypes)). {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} og {{cmd:LAYMCUR}} virker ved å peke.
- Lagring til DXF R12 skriver layernavn med store bokstaver. En DWG beholder dem slik du skrev dem.

### Måltilsettingsstiler

`DIMSTYLE` åpner en behandler for navngitte stiler (ny, endre, sett aktiv, sammenlign, bruk). `DIMSCALE` og de andre innstillingene endrer fortsatt hva nye måltilsettinger bruker, og hver måltilsetting beholder sine egne størrelser, som du også kan endre i egenskapspanelet. Den aktive stilen lagres ikke i filen. Måltilsettinger følger tegningens lengdeformat (desimal, eller fot og tommer med {{cmd:UNITS}}), eller sitt eget {{ui:Format}}. Se [Sett størrelser for måltilsettinger](topic:dimension-settings).

### Plott er enklere

Plottestiltabeller virker etter farge, slik CTB-filer gjør: Monochrome, Colour og Grayscale er innebygd, du kan lage egne, og hvert ark beholder sin tabell. Lesing av CTB-filer er bygget etter den publiserte beskrivelsen og er bare prøvd på filer vi har laget. Navngitte plottestiltabeller (STB) og sideoppsett er ikke bygget ennå. Linjer skrives ut med sin linjevekt, de andre med én pennbredde. Ark plottes i 1:1 på sitt eget papir, og modellen plottes i en valgt målestokk eller tilpasset. Se [Plott til PDF](topic:plot-pdf).

### Arbeid i et visningsområde

Som du kjenner det: dobbeltklikk inne i et visningsområde (eller skriv {{cmd:MSPACE}}) for å arbeide med modellen gjennom det, og dobbeltklikk utenfor (eller {{cmd:PSPACE}}) for å gå tilbake til arket. Inne i området endrer panorering og zoom det visningsområdet viser, med mindre visningen er låst. Da flytter de arket. Å klikke en fane under tegningen forlater også visningsområdet. Se [Arbeid med modellen gjennom et visningsområde](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Sporing og dynamisk inndata ja, rutenettfangst ikke ennå

Rutenettet er bare til å se på. Punkter fanges ikke til det (det finnes ingen F9-fangstmodus). Polarsporing ({{key:F10}}, steg satt med {{cmd:POLARANG}}) og objektsporing ({{key:F11}}: hvil på et fangepunkt for å hente det) fungerer som du kjenner dem. Se [Fest til objekter](topic:object-snaps#polar-tracking). Dynamisk inndata ({{key:F12}}) viser avstand og vinkel (eller X og Y) ved krysset. Se [Inntasting av koordinater og avstander](topic:coordinate-entry#dynamic-input).

### Fot og tommer

Velg {{ui:Lengdeformat}} {{ui:Arkitekt}} eller {{ui:Ingeniør}} (eller skriv {{cmd:UNITS}}), og skriv lengder slik du kjenner dem: `12'6"`, `12'6-1/2"`. Bruk en bindestrek, ikke et mellomrom, foran en brøk: {{key:Space}} er {{key:Enter}}. Sett også {{ui:Enheter}} til {{ui:Tommer}}, slik at ark og plott tilbyr arkitektoniske målestokker. Formatet beholdes i lagrede DWG- og DXF-filer. Se [Fot og tommer](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopier og lim inn blir i CadCraft

{{key:Mod+C}}, {{key:Mod+X}} og {{key:Mod+V}} kopierer, klipper ut og limer inn objekter innenfor en tegning, mellom tegninger og mellom CadCraft-faner i samme nettleser. Utklippstavlen er CadCraft sin egen: du kan ikke lime CadCraft-objekter inn i et annet program, og heller ikke objekter fra et annet program inn i CadCraft. Liming fra en tegning i andre enheter skalerer ikke om: bruk {{cmd:SCALE}} etterpå. {{key:Mod+D}} er et duplikat som følger pekeren, et tillegg fra CadCraft. Se [Kopier, lim inn og dupliser](topic:copy-paste).

### Nettleser-taster du ikke kan bruke

En nettside kan ikke ta {{key:Mod+N}}, {{key:Mod+W}} eller {{key:Mod+T}} fra nettleseren: de åpner og lukker vinduer og faner. Bruk knappen {{ui:Ny}} eller skriv `NEW`. Se [Taster, mus og styreplater](common:keys).

## Kommandoer du kanskje søker etter, som ikke finnes her ennå

{{cmd:TABLE}} er ikke bygget. Skriver du den, sier det «Ukjent kommando». ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} og {{cmd:XREF}} er bygget.) [Ikke bygget ennå](topic:not-built-yet) lister hva du kan gjøre i stedet i dag.
