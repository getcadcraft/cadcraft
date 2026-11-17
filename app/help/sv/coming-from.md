---
title: Övergång från annan ritprogramvara
summary: Hur bekanta kommandon, tangenter och vanor motsvaras i CadCraft, och de skillnader som överraskar erfarna ritare.
keywords: övergång, skillnader, migrera, vanor, alias, dynamisk inmatning, pickfirst, pickadd, qsave, saveas, spara som, mtext, ctb, polär spårning, xref, kortkommandon, bekant, copyclip, pasteclip, pasteorig, copybase, urklipp
from: b58688e7
---

Om du har använt AutoCAD, eller ett program byggt på samma modell, fungerar det mesta du kan här: kommandoraden, alias som `L`, `C`, `TR` och `O`, Enter eller mellanslag för att upprepa, fönster- och korsmarkering, objektfångster på F3, Ortogonalt på F8, modellrum med layouter och vyportar. Den här sidan listar vad som motsvaras direkt, och sedan de skillnader som gör att folk snubblar. Läs andra halvan även om du skummar den första.

## Vad som motsvaras direkt

| Vana | I CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Samma kommandon, samma alias |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Samma |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Samma måttkommandon |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` skrivna på kommandoraden | Samma, för nya mått |
| `B` för att skapa ett block, `I` för att infoga, `PU` för att rensa | Samma (rensning tar bara bort oanvända block) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` och sedan `E` eller `W` | Samma |
| Skriver `_LINE` eller `-LAYER` från ett skript eller en vana | Det inledande `_`, `-`, `.` eller `'` ignoreras |
| Enter eller mellanslag på en tom fråga upprepar det senaste kommandot | Samma |
| Esc avbryter; Esc igen rensar markeringen | Samma |
| `@dx,dy`, `@d<a`, skrivna vinklar moturs från öster | Samma |
| Fönster från vänster till höger, korsning från höger till vänster, klicka-klicka; tryck och dra för ett lasso, mellanslag växlar fönster / korsning / staket (LASSOMODE) | Samma |
| Markera först, sedan kommandot (substantiv-verb) | Samma; ett avslutat kommando rensar markeringen |
| `ALL` och `L` vid Välj objekt | Samma |
| Shift+klick tar bort från markeringen | Samma. Inställningar kan göra att ett klick i stället ersätter markeringen, som PICKADD 0 gör: se [CadCraft-inställningar](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Samma kommandon och tangenter; inklistring placerar kopian efter dess nedre vänstra hörn, som PASTECLIP gör |
| F3 objektfångst, F7 rutnät, F8 Ortogonalt | Samma tangenter |
| Dubbelklicka på hjulet för att zooma till utsträckning | Samma |
| Spegelvänd text förblir läsbar | Samma (som med MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Samma; på Mac fungerar Command också |

[Kommandoreferensen](topic:commands) listar varje kommando och alias.

:::tip
Om du gillar AutoCAD:s menyfliksområde, välj menystilen {{ui:Klassisk ritning}} under {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Menyer, tangenter och mus}}: flikarna Start, Infoga, Annotera, Parametrisk, Vy, Hantera och Utdata över samma kommandorad, och mittenknappen panorerar medan ett högerklick är Enter. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).
:::

[Kommandokartan](topic:command-map) listar varje kommando CadCraft har med dess kortnamn, och [snabbguiden](topic:cheat-sheet) de 40 du använder mest (även som en PDF på en sida).

## Skillnader som får folk att snubbla

### Angivna punkter är absoluta

Med dynamisk inmatning på tolkar det andra programmet en inskriven `100,0` för en andra punkt som relativ. **CadCraft:s kommandorad gör inte det:** där mäts `x,y` alltid från origo. Med {{ui:Dyn}} ({{key:F12}}) på, använd dess fält i stället: avstånd, {{key:Tab}}, vinkel. Använd `@100,0` för "100 till höger om den senaste punkten", eller flytta korshåret åt rätt håll och skriv en ren `100`.

### Shift hoppar över fångster; det ger inte Ortogonalt

Att hålla Shift när du klickar ignorerar objektfångster för det klicket. Det växlar inte Ortogonalt tillfälligt. Använd F8 eller knappen {{ui:Ortogonalt}}.

### Högerklick är alltid Enter

Det finns ingen högerklicksmeny. Ett högerklick i ritningen är Enter: det avslutar ett kommando, slutför en markering eller upprepar det senaste kommandot. Under en greppflyttning eller en markeringsruta avbryter det i stället. Dra med högerknappen för att panorera.

### Ingen panorering med mellanslagstangenten

Mellanslag är Enter, så att hålla ner mellanslag och dra panorerar inte. Panorera med mittenknappen eller högerknappen, eller zooma ut och in igen på en annan plats med hjulet.

### Trimma och förläng

Trimma och förläng startar i snabbläge: varje synligt objekt är en skärkant eller en gräns, delen under pekaren visar vad som tas bort, en dragen väg trimmar varje del den korsar, och ett objekt som ingenting korsar raderas. {{key:Shift}} växlar mellan trimma och förläng. `O` växlar till standardläge (välj kanterna först), `F` och `C` är staket och korsning, `E` är EDGEMODE, `R` raderar. Det finns inget `P` (Projicera)-alternativ: CadCraft trimmar i ritningens plan.

### Avrunda och fasa

{{cmd:FILLET}} och {{cmd:CHAMFER}} tar de alternativ du känner till: Ångra, Polylinje, Radie (eller Avstånd, Vinkel och Metod), Trimma och Flera, och {{key:Shift}}+klick för ett vasst hörn. En avrundning mellan en polylinje och en linje lägger till bågen som ett eget objekt i stället för att foga ihop dem till polylinjen, och polylinjehörn intill ett bågsegment lämnas som de är.

### Styckestext och enradig text

`T`, `MT` och `MTEXT` är styckestext som skrivs på plats, med bredd, radavstånd och justering; `DT` och `DTEXT` är enradig text, som du känner den. Det finns inga textstilar eller kolumner, och du kan ännu inte skriva in formatering i texten (fetstil, staplade bråk). Formatering som kommer i en fil behålls, ritas och sparas (se [Lägg till text och etiketter](topic:text#formatting-inside-paragraph-text-from-other-programs)). Allt ritas i ett Helvetica-liknande typsnitt.

### Spara betyder "ladda ner en kopia"

{{key:Mod+S}}, `SAVE` och `QSAVE` laddar ner en kopia i ritningens format: en DWG som du öppnade sparas som DWG, en DXF som DXF. I webbläsaren skrivs ingenting över på plats, och öppnade filer ändras aldrig. I CadCraft Studio skriver {{key:Mod+S}} tillbaka till filen du öppnade.

`SAVEAS` ({{key:Mod+Shift+S}}) är en liten dialogruta, inte en filbläsare: välj {{ui:DWG}} (med dess {{ui:Version}}, AutoCAD 2000 till 2018), {{ui:DXF R12}} eller {{ui:DXF 2000}} och klicka på {{ui:Spara}}. Webbläsaren avgör var nedladdningen hamnar. `DXFOUT` laddar alltid ner en DXF R12.

En DWG som du öppnade sparas i den version den kom i; en ny ritning sparas i AutoCAD 2000-formatet om du inte väljer ett annat. Blad, mått och skrafferingsmönster behålls. Se [Filer: vad som öppnas och sparas](topic:files#saving).

### Lager: enklare

- Varje ändring av lager (på, frys, lås, färg, plottning, linjetyp, linjetjocklek, aktuellt lager) är ett steg att ångra.
- Av och frys har samma effekt i CadCraft.
- Lager som en ritning fryser i en vyport förblir frysta där: på skärmen, i utskrifter och när du sparar den som DWG eller DXF.
- En vyport som visar ett lager i dess egen färg, linjetyp, linjetjocklek eller genomskinlighet fortsätter att göra det på skärmen, i utskrifter och i en sparad DWG (DXF behåller lagrets egna inställningar; sparandet säger det). Att ändra detta per vyport är inte byggt ännu.
- Det finns ingen egenskapshanterare för lager och inga lagertillstånd; {{cmd:RENAME}}, {{cmd:LAYMRG}} och {{cmd:LAYDEL}} byter namn på, slår ihop och tar bort lager. Linjetyper och linjetjocklekar ställs in i högerpanelen (se [Linjetjocklek och linjetyper](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} och {{cmd:LAYMCUR}} fungerar genom att peka.
- Att spara till DXF R12 skriver lagernamn med versaler. En DWG behåller dem som du skrev dem.

### Måttstilar

`DIMSTYLE` öppnar en hanterare för namngivna stilar (ny, ändra, ange aktuell, jämför, verkställ). `DIMSCALE` och de övriga inställningarna ändrar fortfarande vad nya mått använder, och varje mått behåller sina egna storlekar, som du också kan ändra i panelen Egenskaper. Den aktuella stilen sparas inte i filen. Mått följer ritningens längdformat (decimal, eller fot och tum med {{cmd:UNITS}}), eller sitt eget {{ui:Format}}. Se [Ange måttstorlekar](topic:dimension-settings).

### Utskrift är enklare

Plottstilstabeller fungerar efter färg, precis som CTB-filer: Monokrom, Färg och Gråskala finns inbyggda, du kan göra egna, och varje blad behåller sin tabell. Att läsa CTB-filer bygger på den publicerade beskrivningen och har bara prövats på filer vi själva skapat; namngivna plottstilstabeller (STB) och sidinställningar är inte byggda ännu. Linjer skrivs ut med sin linjetjocklek, de övriga med en pennbredd. Blad plottas i 1:1 på sitt eget papper; modellen plottas i en vald eller anpassad skala. Se [{{ui:Plotta till PDF}}](topic:plot-pdf).

### Att arbeta i en vyport

Som du känner det: dubbelklicka inuti en vyport (eller skriv {{cmd:MSPACE}}) för att arbeta på modellen genom den, och dubbelklicka utanför den (eller {{cmd:PSPACE}}) för att gå tillbaka till bladet. Inuti ändrar panorering och zoom vad vyporten visar, om inte dess visning är låst; då flyttar de bladet. Att klicka på en flik under ritningen lämnar också vyporten. Se [Arbeta på modellen genom en vyport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Spårning och dynamisk inmatning finns, rutnätsfångst inte ännu

Rutnätet är bara till för att titta på; punkter fångas inte av det (det finns inget F9-fångstläge). Polär spårning ({{key:F10}}, steg som ställs in med {{cmd:POLARANG}}) och objektfångstspårning ({{key:F11}}: vila på en fångstpunkt för att hämta den) fungerar som du känner dem; se [Fånga till objekt](topic:object-snaps#polar-tracking). Dynamisk inmatning ({{key:F12}}) visar avstånd och vinkel (eller X och Y) vid korshåret; se [Inmatning av koordinater och avstånd](topic:coordinate-entry#dynamic-input).

### Fot och tum

Välj {{ui:Längdformat}} {{ui:Arkitekt}} eller {{ui:Teknisk}} (eller skriv {{cmd:UNITS}}), och skriv längder som du känner dem: `12'6"`, `12'6-1/2"`. Använd ett bindestreck, inte ett mellanslag, före ett bråk: {{key:Space}} är {{key:Enter}}. Ställ också {{ui:Enheter}} till {{ui:Tum}}, så att blad och utskrifter erbjuder arkitektskalor. Formatet behålls i sparade DWG- och DXF-filer. Se [Fot och tum](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiera och klistra in stannar i CadCraft

{{key:Mod+C}}, {{key:Mod+X}} och {{key:Mod+V}} kopierar, klipper ut och klistrar in objekt inom en ritning, mellan ritningar och mellan CadCraft-flikar i samma webbläsare. Urklippet är CadCraft:s eget: du kan inte klistra in CadCraft-objekt i ett annat program, eller objekt från ett annat program i CadCraft. Inklistring från en ritning i andra enheter skalar inte om: använd {{cmd:SCALE}} efteråt. {{key:Mod+D}} är en dubblering som följer pekaren, ett tillägg i CadCraft. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

### Webbläsartangenter som du inte kan använda

En webbsida kan inte ta {{key:Mod+N}}, {{key:Mod+W}} eller {{key:Mod+T}} från webbläsaren: de öppnar och stänger fönster och flikar. Använd knappen {{ui:Ny}} eller skriv `NEW`. Se [Tangenter, möss och styrplattor](common:keys).

## Kommandon du kanske söker som inte finns här ännu

{{cmd:TABLE}} är inte byggt. Om du skriver det visas "Okänt kommando". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} och {{cmd:XREF}} är byggda.) [Finns inte ännu](topic:not-built-yet) listar vad du gör i stället idag.
