---
title: Eenheden, papierformaten en schalen
summary: Wat tekeneenheden betekenen in CadCraft, de papierformaten voor bladen en plots, elke standaardschaal, en hoe tekst- en maatvoeringsgroottes zich verhouden tot de plotschaal.
keywords: eenheden, millimeter, inch, voet, voet en inch, architectonisch, engineering, breuk, breuken, lunits, lengteformaat, precisie, meter, papierformaat, a3, a1, arch d, ansi, tabloid, letter, schaal, 1:100, 1/4 inch, architectonische schaal, engineeringschaal, insunits
from: 8346236a
---

## Tekeneenheden

U tekent op ware grootte, in tekeneenheden. Wat één eenheid voorstelt, is de instelling **Eenheden** van de tekening:

1. Druk op {{key:Esc}} zodat niets geselecteerd is, op het tabblad {{ui:Model}}.
2. Kies in {{ui:Huidige instellingen}} {{ui:Eenheden}}: {{ui:Zonder eenheid}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Inch}} of {{ui:Voet}}.

Maatvoeringen kunnen hun lengtes schrijven in millimeters, centimeters, meters of kilometers, ongeacht de tekeneenheid: zie [Maatvoeringen in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Het veranderen van de eenheden wijzigt niets aan de grootte. Het verandert hoe schalen op bladen en in plots worden gelezen, en welke schalen worden aangeboden. Een tekening die is geopend uit een DWG of DXF houdt de eenheden die in het bestand zijn opgeslagen; het gedeelte {{ui:Tekening}} van het linkerpaneel toont ze.

Een tekening {{ui:Zonder eenheid}} wordt behandeld als in de papiereenheid: millimeters op ISO-papier, inches op Amerikaans papier.

## Voeten en inches, en breuken

Hoe lengtes **worden geschreven en getypt**, is een aparte instelling: het lengteformaat. Het verandert geen geometrie, alleen hoe getallen eruitzien en wat u kunt typen.

1. Druk op {{key:Esc}} zodat niets geselecteerd is, op het tabblad {{ui:Model}}.
2. Kies in {{ui:Huidige instellingen}} {{ui:Lengteformaat}}: {{ui:Decimaal}} (`150.5`), {{ui:Architectonisch}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Breuk}} (`150 1/2`) of {{ui:Wetenschappelijk}} (`1.505E+02`).
3. Kies {{ui:Precisie}}: decimalen, of de kleinste breuk (1/16 is de gebruikelijke keuze voor architectonisch).

Of typ {{cmd:UNITS}} (`UN`) en beantwoord de twee vragen.

Bij {{ui:Architectonisch}} of {{ui:Engineering}} is één tekeneenheid één inch, zoals in AutoCAD: stel {{ui:Eenheden}} ook in op {{ui:Inch}}. U kunt dan lengtes in voeten en inches typen waar ook een lengte gevraagd wordt, en in de vakken van {{ui:Eigenschappen}}:

| U typt | Betekent |
|---|---|
| `12'6"` of `12'-6"` | 12 voet 6 inch (150) |
| `12'6-1/2"` | 12 voet 6½ inch. Gebruik een koppelteken vóór de breuk: {{key:Space}} is {{key:Enter}} op de opdrachtregel. |
| `12'` | 12 voet |
| `6"` of `6` | 6 inch: een los getal is inches |
| `1/2`, `6-1/2` | breuken werken in elk formaat |

Punten nemen dezelfde lengtes: `@12'6",0` of `@10'<90`. Hoeken blijven in graden.

Het formaat is zichtbaar in de geschiedenis ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: oppervlakten als vierkante inches en vierkante voet), in {{ui:Eigenschappen}}, in de coördinaten op de statusbalk, en in **nieuwe maatvoeringen**. Bladen houden hun papiereenheden (millimeters of inches) als decimalen.

:::note
Het lengteformaat wordt opgeslagen in DWG- en DXF-bestanden, en elke maatvoering behoudt zijn eigen formaat: een opgeslagen tekening opent weer zoals u hem achterliet.
:::

## Papierformaten

Bladen en modelplots gebruiken deze formaten, in beide oriëntaties:

| Papier | Formaat | Eenheid op het blad |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeter |
| ISO A3 | 420 × 297 mm | millimeter |
| ISO A2 | 594 × 420 mm | millimeter |
| ISO A1 | 841 × 594 mm | millimeter |
| ISO A0 | 1189 × 841 mm | millimeter |
| Letter | 11 × 8.5 in | inch |
| Legal | 14 × 8.5 in | inch |
| Tabloid / ANSI B | 17 × 11 in | inch |
| ANSI C | 22 × 17 in | inch |
| ANSI D | 34 × 22 in | inch |
| ARCH C | 24 × 18 in | inch |
| ARCH D | 36 × 24 in | inch |
| ARCH E | 48 × 36 in | inch |

Nieuwe bladen beginnen op ISO A3 voor metrische en eenheidloze tekeningen, en op Tabloid voor tekeningen in inches of voeten. Modelplots beginnen op ISO A4 of Letter op dezelfde manier, en onthouden daarna uw laatste keuze. Bladen uit geopende bestanden houden hun eigen formaat, getoond als "Aangepast" wanneer het er niet een van deze is.

## Schalen

Een schaal `1:n` betekent dat één eenheid op het papier n van dezelfde eenheid in het model toont, dus 1:100 toont 1 m gebouw als 10 mm papier. CadCraft rekent dit uit uit de tekeneenheden en de papiereenheid.

**Metrische schalen**, voor elke tekening aangeboden: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architectonische schalen**, aangeboden wanneer de eenheden inches of voeten zijn: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Engineeringschalen**, aangeboden wanneer de eenheden inches of voeten zijn: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Uw eigen schalen.** Typ `SCALELISTEDIT` (of `SCALELIST`) om een eigen schaal toe te voegen, zoals 1:75 of een terreinschaal van 2 papier : 300 tekening. `Add` (Toevoegen) vraagt om een naam, daarna de papiereenheden en de tekeneenheden (een naam als `1:75` biedt zijn eigen getallen aan; druk op {{key:Enter}} om ze over te nemen). `Edit` (Bewerken), `Delete` (Verwijderen), `List` (Lijst) en `Reset` (Opnieuw instellen) werken op dezelfde lijst; `Reset` keert terug naar de standaardlijst. Uw schalen verschijnen na de standaardschalen in de viewportschaallijst van {{ui:Eigenschappen}} en in het dialoogvenster {{ui:Plot to PDF}}. Een viewport op die schaal wordt met zijn naam getoond, en de schalen worden in de tekening opgeslagen (DWG en DXF 2000) als de schalenlijst van de tekening. Een tekening die uit een ander programma is geopend, brengt zijn lijst mee; schalen die overeenkomen met een standaardschaal worden niet dubbel getoond.

Wanneer een viewport wordt gericht met {{ui:Het hele model tonen}} of {{ui:Kies een venster op het model…}}, kiest CadCraft de grootste standaardschaal die past. {{ui:Het hele model passend maken}} stelt daarentegen een exacte schaal in, die als gewone verhouding wordt getoond.

## Maten op papier en in het model

Tekst- en maatvoeringsgroottes zijn in de eenheden van de ruimte waarin u tekent.

| U wilt op papier | Getekend op een blad | Getekend in het model op 1:50 (mm-tekening) | Getekend in het model op 1/4" = 1'-0" (inch-tekening) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

Voor maatvoeringen houdt u de groottes als papiergroottes en zet u de algemene schaal ({{cmd:DIMSCALE}}) op de plotschaal: 50 voor 1:50, 48 voor 1/4" = 1'-0". Zie [Maatvoeringsgroottes instellen](topic:dimension-settings).

## Annoteren op schaal

Teken het model op ware grootte en laat CadCraft de berekeningen hierboven voor u doen.

1. Selecteer de tekst of de maatvoeringen die hun grootte op papier moeten behouden. Vink in {{ui:Eigenschappen}} {{ui:Annotatief}} aan. {{ui:Grootte op papier}} leest daarna bijvoorbeeld `2.5 mm at 1:50`.
2. Typ {{cmd:ANNOSCALE}} en de schaal waarop de tekening wordt geprint, zoals `1:100`.

Elke annotatieve tekst en maatvoering wordt zo vergroot of verkleind dat hij op de nieuwe schaal even groot wordt afgedrukt: tekst van 2.5 mm is 125 hoog in een millimeter-tekening op 1:50 en 250 hoog op 1:100. De breedte van een alinea verandert mee; de tekst, pijlen en tussenruimten van een maatvoering veranderen samen (de algemene schaal). Het is één stap ongedaan te maken, en objecten die niet annotatief zijn, worden nooit gewijzigd.

De instelling wordt opgeslagen in DWG en DXF: andere programma's lezen de annotatievlag, en CadCraft onthoudt ook de schaal waarop elk object is afgestemd.

Als uw kantoor papierhoogten instelt in de add-on Standaardbeleid (Instellingen › Algemeen › Standaardbeleid › Annotatiegroottes op papier), dan stelt {{cmd:ANNOSCALE}} ook de hoogte in waarmee nieuwe tekst begint, op de hoogte die het kantoor voor notities op die schaal gebruikt. Zie [Standaardbeleid](topic:default-policies).

### Eén object op meerdere schalen

Een blad toont vaak hetzelfde plan op 1:100 en een deel ervan op 1:50. Geef de notities en maatvoeringen beide schalen, en elke viewport toont ze op hun papiergrootte:

1. Selecteer de annotatieve tekst en maatvoeringen en typ `OBJECTSCALE`.
2. Kies `Add` en typ de schaal, bijvoorbeeld `1:50`. (`Current scale` voegt de annotatieschaal van de tekening toe; `List` toont wat elk object behoudt; `Delete` haalt er één weg.)

Een viewport waarvan de schaal in de lijst van een object staat, toont het op de grootte voor die schaal: tekst van 2.5 mm wordt 250 hoog getekend door een viewport van 1:100 en 125 hoog door een van 1:50, op het scherm en in de plot. Het object blijft waar het is; alleen zijn grootte verschilt. In een viewport op een schaal die niet in de lijst van een object staat, toont het object de grootte die het heeft, totdat u `ANNOALLVISIBLE` typt en `OFF` kiest: dan wordt het daar weggelaten. {{cmd:ANNOSCALE}} verandert de objecten die de nieuwe schaal in hun lijst hebben en laat de andere ongewijzigd.

De lijsten worden in DWG en DXF opgeslagen als de eigen gegevens van CadCraft. Een ander programma ziet elk object als annotatief, op de ene schaal waarop het is afgestemd. De schakelaar ANNOALLVISIBLE wordt niet in het bestand bewaard.

## Lijndiktes en lijntypen

Een laag, of een object, kan een **lijndikte** (0.05 tot 2.11 mm) en een **lijntype** (gestreept, verborgen, middellijn, fantoom, stip…) hebben. Stel ze in het rechterpaneel in: als niets geselecteerd is, zijn {{ui:Lijntype}} en {{ui:Lijndikte}} onder {{ui:Huidige instellingen}} wat nieuwe objecten krijgen ({{ui:Op laag}} om hun laag te volgen), en de twee onder {{ui:Laag …}} zijn die van de actieve laag. Met objecten geselecteerd veranderen dezelfde twee rijen en {{ui:Lijntypeschaal}} die objecten. De opdrachten zijn {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) en {{cmd:LTSCALE}} (`LTS`).

Lijntypen worden op het scherm en in plots getoond. Hun strepen staan in tekeneenheden: een metrische tekening gebruikt de ISO-groottes (DASHED: strepen van 12.7 mm), een inch-tekening de inch-groottes (0.5"). Als de strepen te klein of te groot lijken, wijzig dan de {{ui:Lijntypeschaal}} van de tekening (LTSCALE): elke streep en tussenruimte wordt ermee vermenigvuldigd, en de eigen schaal van een object vermenigvuldigt het nog eens. Een patroon dat te fijn is om te zien, wordt als een doorgetrokken lijn getekend.

Lijndiktes worden in plots afgedrukt, in mm op het papier, wat de schaal ook is. Lijnen met de lijndikte {{ui:Standaard}} gebruiken de pendikte die is gekozen in het dialoogvenster {{ui:Plot to PDF}} (0.13 tot 0.70 mm; 0.25 mm om mee te beginnen); een lijndikte van 0 wordt als de dunste lijn afgedrukt. Op het scherm is elke lijn één pixel breed totdat u op {{ui:LWT}} in de statusbalk drukt (of {{cmd:LWDISPLAY}} typt): dan wordt een lijndikte boven 0.25 mm breder getekend (0.5 mm = 2 pixels) in het model, en op een blad op zijn echte breedte op het papier. De keuze wordt in deze browser bewaard.
