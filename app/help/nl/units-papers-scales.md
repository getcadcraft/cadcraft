---
title: Eenheden, papierformaten en schalen
summary: Wat tekeneenheden betekenen in CadCraft, de papierformaten voor bladen en plots, elke standaardschaal, en hoe tekst- en maatgroottes zich verhouden tot de plotschaal.
keywords: eenheden, millimeters, inches, voet, voet en inch, architectonisch, engineering, breuk, breuken, lunits, lengteformaat, precisie, meters, papierformaat, a3, a1, arch d, ansi, tabloid, letter, schaal, 1:100, 1/4 inch, architectonische schaal, engineeringschaal, insunits
from: 7dc9b62e
---

## Tekeneenheden

U tekent op ware grootte, in tekeneenheden. Wat één eenheid voorstelt, is de instelling **Eenheden** van de tekening:

1. Druk op {{key:Esc}} zodat niets geselecteerd is, op het tabblad {{ui:Model}}.
2. Kies in {{ui:Huidige instellingen}} {{ui:Eenheden}}: {{ui:Zonder eenheid}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Inch}} of {{ui:Voet}}.

Maatvoering kan haar lengtes in millimeters, centimeters, meters of kilometers schrijven, wat de eenheid van de tekening ook is: zie [Maten in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Het wijzigen van de eenheden verandert niets aan de grootte. Het verandert alleen hoe schalen op bladen en in plots worden gelezen, en welke schalen worden aangeboden. Een tekening die uit een DWG of DXF is geopend, behoudt de eenheden die in het bestand zijn opgeslagen; de sectie {{ui:Tekening}} van het linker paneel toont ze.

Een tekening met {{ui:Zonder eenheid}} wordt behandeld als zijnde in de eenheid van het papier: millimeters op ISO-papier, inches op Amerikaans papier.

## Voet en inch, en breuken

Hoe lengtes worden **geschreven en getypt** is een aparte instelling, het lengteformaat. Het verandert geen geometrie, alleen hoe getallen eruitzien en wat u kunt typen.

1. Druk op {{key:Esc}} zodat niets geselecteerd is, op het tabblad {{ui:Model}}.
2. Kies in {{ui:Huidige instellingen}} {{ui:Lengteformaat}}: {{ui:Decimaal}} (`150.5`), {{ui:Architectonisch}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Breuk}} (`150 1/2`) of {{ui:Wetenschappelijk}} (`1.505E+02`).
3. Kies {{ui:Precisie}}: decimalen, of de kleinste breuk (1/16 is de gebruikelijke keuze voor architectonisch).

Of typ {{cmd:UNITS}} (`UN`) en beantwoord de twee vragen.

Bij {{ui:Architectonisch}} of {{ui:Engineering}} is één tekeneenheid één inch, zoals in AutoCAD: stel {{ui:Eenheden}} ook op {{ui:Inch}} in. U kunt dan lengtes in voet en inch typen waar ook maar een lengte wordt gevraagd, en in de vakken van {{ui:Eigenschappen}}:

| U typt | Betekent |
|---|---|
| `12'6"` of `12'-6"` | 12 voet 6 inch (150) |
| `12'6-1/2"` | 12 voet 6½ inch. Gebruik een koppelteken vóór de breuk: {{key:Space}} is {{key:Enter}} op de opdrachtregel. |
| `12'` | 12 voet |
| `6"` of `6` | 6 inch: een kaal getal is inches |
| `1/2`, `6-1/2` | breuken werken in elk formaat |

Punten nemen dezelfde lengtes: `@12'6",0` of `@10'<90`. Hoeken blijven in graden.

Het formaat wordt getoond in de geschiedenis ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: oppervlakten als vierkante inches en vierkante voet), in {{ui:Eigenschappen}}, in de coördinaten op de statusbalk, en in **nieuwe maatvoering**. Bladen houden hun papiereenheden (millimeters of inches) als decimalen.

:::note
Het lengteformaat wordt in DWG- en DXF-bestanden bewaard, en elke maat bewaart het eigen formaat: een opgeslagen tekening opent weer zoals u haar achterliet.
:::

## Papierformaten

Bladen en modelplots gebruiken deze formaten, in beide oriëntaties:

| Papier | Formaat | Eenheid op het blad |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeters |
| ISO A3 | 420 × 297 mm | millimeters |
| ISO A2 | 594 × 420 mm | millimeters |
| ISO A1 | 841 × 594 mm | millimeters |
| ISO A0 | 1189 × 841 mm | millimeters |
| Letter | 11 × 8,5 in | inches |
| Legal | 14 × 8,5 in | inches |
| Tabloid / ANSI B | 17 × 11 in | inches |
| ANSI C | 22 × 17 in | inches |
| ANSI D | 34 × 22 in | inches |
| ARCH C | 24 × 18 in | inches |
| ARCH D | 36 × 24 in | inches |
| ARCH E | 48 × 36 in | inches |

Nieuwe bladen beginnen op ISO A3 voor metrische tekeningen en tekeningen zonder eenheid, en op Tabloid voor tekeningen in inches of voet. Modelplots beginnen op ISO A4 of Letter op dezelfde manier, en onthouden daarna uw laatste keuze. Bladen uit geopende bestanden behouden hun eigen formaat, dat als "Aangepast" wordt getoond wanneer het niet een van deze is.

## Schalen

Een schaal `1:n` betekent dat één eenheid op papier n van dezelfde eenheid in het model voorstelt, dus 1:100 toont 1 m bouwwerk als 10 mm papier. CadCraft rekent dit uit uit de eenheden van de tekening en de papiereenheid.

**Metrische schalen**, voor elke tekening aangeboden: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architectonische schalen**, aangeboden wanneer de eenheden inches of voet zijn: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Engineeringschalen**, aangeboden wanneer de eenheden inches of voet zijn: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Uw eigen schalen.** Typ `SCALELISTEDIT` (of `SCALELIST`) om een eigen schaal toe te voegen, zoals 1:75 of een terreinschaal van 2 papier : 300 tekening. `Add` vraagt een naam, dan de papiereenheden en de tekeneenheden (een naam als `1:75` biedt zijn eigen getallen aan; druk op {{key:Enter}} om ze te nemen). `Edit`, `Delete`, `List` en `Reset` werken op dezelfde lijst; `Reset` gaat terug naar de standaardlijst. Uw schalen verschijnen na de standaardschalen in de lijst met viewportschalen van Eigenschappen en in het dialoogvenster {{ui:Plotten naar PDF}}; een viewport op die schaal wordt met zijn naam getoond, en ze worden in de tekening bewaard (DWG en DXF 2000) als de schalenlijst van de tekening. Een tekening die uit een ander programma is geopend, brengt zijn lijst mee; schalen die overeenkomen met een standaardschaal worden niet dubbel getoond.

Wanneer een viewport wordt gericht met {{ui:Het hele model tonen}} of {{ui:Kies een venster op het model…}}, kiest CadCraft de grootste standaardschaal die past. {{ui:Het hele model passend maken}} stelt in plaats daarvan een exacte schaal in, die als gewone verhouding wordt getoond.

## Maten op papier en in het model

Tekst- en maatgroottes staan in de eenheden van de ruimte waarin u tekent.

| U wilt op papier | Getekend op een blad | Getekend in het model op 1:50 (mm-tekening) | Getekend in het model op 1/4" = 1'-0" (inch-tekening) |
|---|---|---|---|
| 2,5 mm tekst | 2,5 | 125 | — |
| 3/32" tekst | 0,09375 | — | 4,5 |

Voor maatvoering houdt u de groottes als papiermaten en zet u de totaalschaal ({{cmd:DIMSCALE}}) op de plotschaal: 50 voor 1:50, 48 voor 1/4" = 1'-0". Zie [Maatgroottes instellen](topic:dimension-settings).

## Annoteren op schaal

Teken het model op ware grootte en laat CadCraft de sommen hierboven voor u maken.

1. Selecteer de tekst of de maatvoering die op papier hun grootte moeten behouden. Vink in Eigenschappen {{ui:Annotatief}} aan. {{ui:Grootte op papier}} toont dan bijvoorbeeld `2.5 mm at 1:50`.
2. Typ {{cmd:ANNOSCALE}} en de schaal waarop de tekening wordt afgedrukt, zoals `1:100`.

Elke annoterende tekst en maatvoering wordt zo verkleind dat ze op dezelfde grootte print in de nieuwe schaal: 2,5 mm tekst is 125 hoog in een millimetertekening op 1:50 en 250 hoog op 1:100. De breedte van een alinea verandert ermee; de tekst, pijlen en ruimten van een maat veranderen samen (de totaalschaal ervan). Het is één ongedaan-maken-stap, en objecten die niet annoterend zijn, worden nooit gewijzigd.

De instelling wordt in DWG en DXF bewaard: andere programma's lezen de annotatievlag, en CadCraft bewaart ook de schaal waarvoor elk object is bedoeld.

Als uw kantoor papierhoogten instelt in de add-on Standaardbeleid (Instellingen › Algemeen › Standaardbeleid › Annotatiegroottes op papier), dan stelt {{cmd:ANNOSCALE}} ook de hoogte in waarmee nieuwe tekst begint op de hoogte van het kantoor voor notities bij die schaal. Zie [Standaardbeleid](topic:default-policies).

### Eén object op meerdere schalen

Een blad toont vaak hetzelfde plan op 1:100 en een deel ervan op 1:50. Geef de notities en maten beide schalen, en elke viewport toont ze op hun papiergrootte:

1. Selecteer de annoterende tekst en maatvoering en typ `OBJECTSCALE`.
2. Kies `Add` en typ de schaal, bijvoorbeeld `1:50`. (`Current scale` voegt de annotatieschaal van de tekening toe; `List` toont wat elk object bewaart; `Delete` haalt er één weg.)

Een viewport waarvan de schaal in de lijst van een object staat, toont het op de grootte voor die schaal: 2,5 mm tekst wordt 250 hoog getekend door een 1:100-viewport en 125 hoog door een 1:50-viewport, op het scherm en in de plot. Het object blijft waar het is; alleen zijn grootte verschilt. In een viewport met een schaal die niet in de lijst van een object staat, toont het object de grootte die het heeft, totdat u `ANNOALLVISIBLE` typt en `OFF` kiest: dan wordt het daar weggelaten. {{cmd:ANNOSCALE}} wijzigt de objecten die de nieuwe schaal in hun lijst hebben, en laat de andere zoals ze zijn.

De lijsten worden in DWG en DXF bewaard als eigen gegevens van CadCraft. Een ander programma ziet elk object als annoterend, op de ene schaal waarvoor het is bedoeld. De schakelaar ANNOALLVISIBLE wordt niet in het bestand bewaard.

## Lijndiktes en lijntypen

Een laag of een object kan een **lijndikte** (0,05 tot 2,11 mm) en een **lijntype** hebben (gestreept, verborgen, middellijn, fantoom, stip…). Stel ze in het rechterpaneel in: zonder selectie zijn {{ui:Lijntype}} en {{ui:Lijndikte}} onder {{ui:Huidige instellingen}} wat nieuwe objecten krijgen ({{ui:Op laag}} om hun laag te volgen), en de twee onder {{ui:Laag …}} zijn die van de actieve laag. Met objecten geselecteerd wijzigen dezelfde twee rijen en {{ui:Lijntypeschaal}} die objecten. De opdrachten zijn {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) en {{cmd:LTSCALE}} (`LTS`).

Lijntypen worden op het scherm en in plots getoond. Hun streepjes staan in tekeneenheden: een metrische tekening gebruikt de ISO-maten (DASHED: streepjes van 12,7 mm), een inch-tekening de inchmaten (0,5"). Als de streepjes te klein of te groot lijken, wijzig dan de {{ui:Lijntypeschaal}} van de tekening (LTSCALE): elk streepje en elke spatie wordt ermee vermenigvuldigd; de eigen schaal van een object vermenigvuldigt het nogmaals. Een patroon dat te fijn is om te zien, wordt als volle lijn getekend.

Lijndiktes worden in plots afgedrukt, in mm op het papier, wat de schaal ook is. Lijnen met de lijndikte {{ui:Standaard}} gebruiken de pendikte die in het dialoogvenster {{ui:Plotten naar PDF}} is gekozen (0,13 tot 0,70 mm; om mee te beginnen 0,25 mm); een lijndikte van 0 wordt afgedrukt als de dunste lijn. Op het scherm is elke lijn één pixel breed, totdat u op {{ui:LWT}} in de statusbalk drukt (of {{cmd:LWDISPLAY}} typt): dan wordt een lijndikte boven 0,25 mm breder getekend (0,5 mm = 2 pixels) in het model, en op zijn ware breedte op het papier op een blad. De keuze wordt in deze browser bewaard.

## De kantoornorm

Een kantoor kan zijn papierteksthoogten, lagen, velden van het titelblok en sjablonen in één record bewaren: de kantoornorm. CadCraft leest hem in deze volgorde: het eigen record van de tekening (ingesteld met {{cmd:OFFICESTANDARD}} › `Import`, bewaard in het bestand), de gedeelde norm van uw team, en dan uw Standaardbeleid. Annoterende tekst en maatvoering nemen hun papierhoogte ervan op de annotatieschaal. Een lege norm verandert niets. {{cmd:OFFICESTANDARD}} › `Layers` voegt de kantoorlagen toe die een tekening mist.
