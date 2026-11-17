---
title: Overstappen van andere tekensoftware
summary: Hoe vertrouwde commando's, toetsen en gewoonten op CadCraft aansluiten, en de verschillen waarop ervaren tekenaars struikelen.
keywords: overstappen, verschillen, migreren, gewoonten, aliassen, dynamische invoer, pickfirst, pickadd, qsave, saveas, opslaan als, mtext, ctb, polaire tracering, xref, sneltoetsen, vertrouwd, copyclip, pasteclip, pasteorig, copybase, klembord
from: b58688e7
---

Als u met AutoCAD hebt gewerkt, of met een programma dat op hetzelfde model is gebouwd, dan werkt het meeste van wat u kent hier ook: de opdrachtregel, aliassen zoals `L`, `C`, `TR` en `O`, Enter of Space om te herhalen, venster- en kruisvenster-selectie, objectsnaps op F3, Ortho op F8, modelruimte met indelingen en viewports. Deze pagina somt op wat rechtstreeks overeenkomt, en daarna de verschillen waarop mensen struikelen. Lees de tweede helft ook als u de eerste alleen doorbladert.

## Wat rechtstreeks overeenkomt

| Gewoonte | In CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Dezelfde commando's, dezelfde aliassen |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Hetzelfde |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Dezelfde maatvoeringscommando's |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` getypt op de opdrachtregel | Hetzelfde, voor nieuwe maatvoering |
| `B` om een blok te maken, `I` om in te voegen, `PU` om op te schonen | Hetzelfde (opschonen verwijdert alleen ongebruikte blokken) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` gevolgd door `E` of `W` | Hetzelfde |
| `_LINE` of `-LAYER` typen uit een script of een gewoonte | Het voorafgaande `_`, `-`, `.` of `'` wordt genegeerd |
| Enter of Space op een lege prompt herhaalt het laatste commando | Hetzelfde |
| Esc annuleert; nog een keer Esc heft de selectie op | Hetzelfde |
| `@dx,dy`, `@d<a`, getypte hoeken tegen de klok in vanaf het oosten | Hetzelfde |
| Venster van links naar rechts, kruisvenster van rechts naar links, klik-klik; ingedrukt houden en slepen voor een lasso, Space wisselt venster / kruisvenster / hekje (LASSOMODE) | Hetzelfde |
| Eerst selecteren, dan het commando (naamwoord-werkwoord) | Hetzelfde; een afgerond commando wist de selectie |
| `ALL` en `L` bij Objecten selecteren | Hetzelfde |
| Shift+klik verwijdert uit de selectie | Hetzelfde. Instellingen kunnen een klik de selectie laten vervangen, zoals PICKADD 0 doet: zie [CadCraft-instellingen](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Dezelfde commando's en toetsen; plakken plaatst de kopie op de linkerbenedenhoek, zoals PASTECLIP doet |
| F3 objectsnap, F7 raster, F8 Ortho | Dezelfde toetsen |
| Dubbelklikken op het wiel om alles te tonen | Hetzelfde |
| Gespiegelde tekst blijft leesbaar | Hetzelfde (zoals bij MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Hetzelfde; op een Mac werkt ook Command |

De [Opdrachtenreferentie](topic:commands) somt elk commando en elke alias op.

:::tip
Als u het lint van AutoCAD prettig vindt, kies dan de menustijl {{ui:Klassiek tekenen}} in {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Menu's, toetsen en muis}}: tabbladen Start, Invoegen, Annoteren, Parametrisch, Weergave, Beheren en Uitvoer boven dezelfde opdrachtregel, en de middelste knop verschuift terwijl een rechtermuisklik Enter is. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).
:::

De [opdrachtenkaart](topic:command-map) somt elk commando van CadCraft op met zijn korte namen, en de [spiekbrief](topic:cheat-sheet) de 40 die u het meest gebruikt (ook als PDF van één pagina).

## Verschillen waarop mensen struikelen

### Getypte punten zijn absoluut

Met dynamische invoer aan, behandelt het andere programma een getypte `100,0` voor een tweede punt als relatief. **De opdrachtregel van CadCraft doet dat niet:** daar wordt `x,y` altijd gemeten vanaf de oorsprong. Met {{ui:Dyn}} ({{key:F12}}) aan, gebruikt u in plaats daarvan de velden: afstand, {{key:Tab}}, hoek. Gebruik `@100,0` voor "100 naar rechts van het laatste punt", of verplaats het kruishaar de juiste kant op en typ een kale `100`.

### Shift slaat snaps over; het zet Ortho niet aan

Als u tijdens het klikken Shift ingedrukt houdt, worden objectsnaps voor die klik genegeerd. Het zet Ortho niet tijdelijk aan. Gebruik F8 of de knop {{ui:Ortho}}.

### Rechterklik is altijd Enter

Er is geen rechtermuismenu. Een rechterklik in de tekening is Enter: die beëindigt een commando, rondt een selectie af, of herhaalt het laatste commando. Tijdens een grip-verplaatsing of een selectiekader annuleert het in plaats daarvan. Sleep met de rechterknop om te verschuiven.

### Geen verschuiven met de spatiebalk

Space is Enter, dus Space ingedrukt houden en slepen verschuift niet. Verschuif met de middelste of de rechterknop, of zoom uit en weer in op een andere plek met het wiel.

### Bijsnijden en verlengen

Bijsnijden en verlengen beginnen in de snelle modus: elk zichtbaar object is een snijrand of een grens, het stuk onder de aanwijzer laat zien wat weggaat, een gesleept pad snijdt elk stuk dat het kruist, en een object dat niets kruist, wordt gewist. {{key:Shift}} wisselt tussen bijsnijden en verlengen. `O` schakelt over naar de standaardmodus (kies eerst de randen), `F` en `C` zijn hekje en kruisvenster, `E` is EDGEMODE, `R` wist. Er is geen optie `P` (Projectie): CadCraft snijdt in het vlak van de tekening.

### Afronden en afschuinen

{{cmd:FILLET}} en {{cmd:CHAMFER}} nemen de opties die u kent: Ongedaan maken (U), Polylijn (P), Straal (R) (of Afstand (D), Hoek (A) en Methode (E)), Bijsnijden (T) en Meerdere (M), en {{key:Shift}}+klik voor een scherpe hoek. Een afronding tussen een polylijn en een lijn voegt de boog als eigen object toe in plaats van ze in de polylijn samen te voegen, en polylijnhoeken naast een boogsegment blijven zoals ze zijn.

### Alineatekst en enkelregelige tekst

`T`, `MT` en `MTEXT` zijn alineatekst die ter plekke wordt getypt, met een breedte, regelafstand en uitlijning; `DT` en `DTEXT` zijn enkelregelige tekst, zoals u ze kent. Er zijn nog geen tekststijlen of kolommen, en u kunt nog geen opmaak in de tekst typen (vet, gestapelde breuken). Opmaak die uit een bestand komt, wordt bewaard, getekend en opgeslagen (zie [Tekst en labels toevoegen](topic:text#formatting-inside-paragraph-text-from-other-programs)). Alles wordt getekend in een lettertype in Helvetica-stijl.

### Opslaan betekent "een kopie downloaden"

{{key:Mod+S}}, `SAVE` en `QSAVE` downloaden een kopie in het formaat van de tekening: een DWG die u hebt geopend, wordt als DWG opgeslagen, een DXF als DXF. In de browser wordt niets op zijn plaats overschreven, en geopende bestanden worden nooit gewijzigd. In CadCraft Studio schrijft {{key:Mod+S}} terug naar het bestand dat u hebt geopend.

`SAVEAS` ({{key:Mod+Shift+S}}) is een klein dialoogvenster, geen bestandsbrowser: kies {{ui:DWG}} (met zijn {{ui:Versie}}, AutoCAD 2000 tot 2018), {{ui:DXF R12}} of {{ui:DXF 2000}} en klik op {{ui:Opslaan}}. De browser bepaalt waar de download heengaat. `DXFOUT` downloadt altijd DXF R12.

Een DWG die u hebt geopend, wordt bewaard in de versie waarin hij binnenkwam; een nieuwe tekening wordt bewaard in het AutoCAD 2000-formaat, tenzij u een ander kiest. Bladen, maatvoering en arceringspatronen blijven behouden. Zie [Bestanden: wat opent, wat slaat op](topic:files#saving).

### Lagen: eenvoudiger

- Elke laagwijziging (aan, bevriezen, vergrendelen, kleur, plotten, lijntype, lijndikte, actieve laag) is één stap ongedaan te maken.
- Uit en bevriezen hebben in CadCraft hetzelfde effect.
- Lagen die een tekening in één viewport bevriest, blijven daar bevroren: op het scherm, in plots en wanneer u de tekening als DWG of DXF opslaat.
- Een viewport die een laag toont in zijn eigen kleur, lijntype, lijndikte of transparantie, blijft dat doen op het scherm, in plots en in een opgeslagen DWG (DXF behoudt de eigen instellingen van de laag; het opslaan meldt dat). Die per viewport wijzigen is nog niet beschikbaar.
- Er is geen beheer van laageigenschappen en geen laagstatussen; {{cmd:RENAME}}, {{cmd:LAYMRG}} en {{cmd:LAYDEL}} hernoemen, samenvoegen en verwijderen lagen. Lijntypen en lijndiktes worden ingesteld in het rechterpaneel (zie [Lijndiktes en lijntypen](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} en {{cmd:LAYMCUR}} werken door te kiezen.
- Opslaan als DXF R12 schrijft laagnamen in hoofdletters. Een DWG bewaart ze zoals u ze typte.

### Maatvoeringsstijlen

`DIMSTYLE` opent een beheer voor benoemde stijlen (nieuw, wijzigen, huidige instellen, vergelijken, toepassen). `DIMSCALE` en de andere instellingen veranderen nog steeds wat nieuwe maatvoering gebruikt, en elke maatvoering behoudt zijn eigen maten, die u ook in het paneel Eigenschappen kunt wijzigen. De huidige stijl wordt niet in het bestand bewaard. Maatvoering volgt het lengteformaat van de tekening (decimaal, of voet en inch met {{cmd:UNITS}}), of hun eigen {{ui:Formaat}}. Zie [Maten van maatvoering instellen](topic:dimension-settings).

### Plotten is eenvoudiger

Plotstijltabellen werken op kleur, zoals CTB-bestanden dat doen: Monochroom, Kleur en Grijstinten zijn ingebouwd, u kunt er zelf één maken, en elk blad bewaart zijn tabel. Het lezen van CTB-bestanden is gebouwd op de gepubliceerde beschrijving en is alleen geprobeerd op bestanden die wij hebben gemaakt; benoemde plotstijltabellen (STB) en paginainstellingen zijn nog niet beschikbaar. Lijnen worden afgedrukt met hun lijndikte, de rest met één pendikte. Bladen worden op 1:1 op hun eigen papier geplot; het model wordt geplot op een gekozen schaal of passend gemaakt. Zie [Plotten naar PDF](topic:plot-pdf).

### Binnen een viewport werken

Zoals u het kent: dubbelklik in een viewport (of typ {{cmd:MSPACE}}) om via de viewport aan het model te werken, en dubbelklik erbuiten (of {{cmd:PSPACE}}) om terug naar het blad te gaan. Binnenin veranderen verschuiven en zoomen wat de viewport toont, tenzij de weergave is vergrendeld; dan verschuiven ze het blad. Klikken op een tabblad onder de tekening verlaat ook de viewport. Zie [Via een viewport aan het model werken](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Tracering en dynamische invoer wel, rastersnap nog niet

Het raster is alleen om naar te kijken; punten snappen er niet aan (er is geen F9-snapmodus). Polaire tracering ({{key:F10}}, stap ingesteld met {{cmd:POLARANG}}) en objectsnaptracering ({{key:F11}}: blijf even op een snappunt staan om het op te pikken) werken zoals u ze kent; zie [Snappen aan objecten](topic:object-snaps#polar-tracking). Dynamische invoer ({{key:F12}}) toont afstand en hoek (of X en Y) bij het kruishaar; zie [Coördinaten en afstanden invoeren](topic:coordinate-entry#dynamic-input).

### Voet en inch

Kies {{ui:Lengteformaat}} {{ui:Architectonisch}} of {{ui:Engineering}} (of typ {{cmd:UNITS}}), en typ lengtes zoals u ze kent: `12'6"`, `12'6-1/2"`. Gebruik een koppelteken, geen spatie, vóór een breuk: {{key:Space}} is {{key:Enter}}. Stel ook {{ui:Eenheden}} in op {{ui:Inch}}, zodat bladen en plots architectonische schalen aanbieden. Het formaat wordt bewaard in opgeslagen DWG- en DXF-bestanden. Zie [Voet en inch](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiëren en plakken blijft binnen CadCraft

{{key:Mod+C}}, {{key:Mod+X}} en {{key:Mod+V}} kopiëren, knippen en plakken objecten binnen een tekening, tussen tekeningen en tussen CadCraft-tabbladen in dezelfde browser. Het klembord is van CadCraft zelf: u kunt CadCraft-objecten niet in een ander programma plakken, of objecten uit een ander programma in CadCraft. Plakken uit een tekening in andere eenheden schaalt niet opnieuw: gebruik daarna {{cmd:SCALE}}. {{key:Mod+D}} is een dupliceren die met de aanwijzer meebeweegt, een toevoeging van CadCraft. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

### Browsertoetsen die u niet kunt gebruiken

Een webpagina kan {{key:Mod+N}}, {{key:Mod+W}} of {{key:Mod+T}} niet van de browser overnemen: ze openen en sluiten vensters en tabbladen. Gebruik de knop {{ui:Nieuw}} of typ `NEW`. Zie [Toetsen, muizen en trackpads](common:keys).

## Commando's die u misschien zoekt en die hier nog niet zijn

{{cmd:TABLE}} is nog niet beschikbaar. Als u het typt, staat er "Onbekend commando". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} en {{cmd:XREF}} zijn wel beschikbaar.) [Nog niet beschikbaar](topic:not-built-yet) somt op wat u nu in plaats daarvan kunt doen.
