---
title: Tekst en labels toevoegen
summary: Plaats ruimtelabels met enkele-regel-tekst, schrijf omlopende notities met alineatekst die u ter plaatse typt, en bewerk tekst achteraf.
keywords: tekst, dtext, mtext, mleader, multileader, leider, revcloud, revisiewolk, wolk, zoeken, vervangen, zoeken en vervangen, alinea, terugloop, regelafstand, label, notitie, annotatie, hoogte, uitlijnen, textmask, achtergrondmasker, masker, wipeout, rotatie, tekst bewerken, ddedit, textedit, lettertype
from: 4b76be99
---

## Wat u gaat maken

Twee ruimtelabels, gecentreerd in hun ruimtes, een notitie die past binnen de breedte, en daarna een correctie op een van de labels.

## Teksthoogte en tekeningschaal

Teksthoogte is in tekeningeenheden. In een tekening in millimeters die op 1:50 geplot wordt, is tekst van 2.5 mm hoog op papier in het model 2.5 × 50 = 125 eenheden hoog. Op een bladtabblad tekent u in papiereenheden, dus 2.5 daar is 2.5 mm op papier.

## Een gecentreerd label plaatsen

1. Typ `DT` en druk op {{key:Enter}} (of klik op {{ui:Tekst}} in de werkbalk). De prompt luidt `Specify start point of text [Justify]:`.
2. Typ `J` en druk op {{key:Enter}}.
3. Typ bij `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` `MC` en druk op {{key:Enter}}.
4. Klik bij `Specify insertion point of text` op het midden van een ruimte.
5. Typ bij `Specify height` `250` en druk op {{key:Enter}}.
6. Druk bij `Specify rotation angle of text <0>` op {{key:Enter}}.
7. Typ bij `Enter text` `KITCHEN` en druk op {{key:Enter}}.

Het label verschijnt, gecentreerd op het punt waarop u klikte.

8. Druk bij de lege prompt `Enter text` op {{key:Enter}} om het commando te beëindigen.

## Een notitie schrijven die terugloopt

Alinea-tekst ({{cmd:MTEXT}}) loopt terug op een breedte en wordt rechtstreeks op de tekening getypt.

1. Typ `T` en druk op {{key:Enter}}, of klik op {{ui:Alinea}} in de werkbalk.
2. Klik bij `Specify first corner` waar de linkerbovenhoek van de notitie komt.
3. Om eerst de hoogte te wijzigen, typ `H`, druk op {{key:Enter}}, typ `250` en druk op {{key:Enter}}.
4. Klik bij `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` rechts van de eerste hoek. De afstand over de breedte is de breedte waarop de tekst terugloopt; hoe ver u omlaag klikt, beperkt dat niet.
5. Er opent een vak over de tekening met de cursor erin. Typ `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. De woorden lopen terug op de breedte terwijl u typt.
6. Druk op {{key:Enter}} om een nieuwe alinea te beginnen en typ `CHECK ON SITE`.
7. Druk op {{key:Mod+Enter}}, klik op {{ui:OK}} of klik ergens buiten het vak. De notitie is één object.

De balk boven het vak wijzigt terwijl u typt {{ui:Hoogte}}, {{ui:Regelafstand}} (1 is normaal, 1.5 is half zoveel weer erbij), {{ui:Breedte}} (0 = geen terugloop) en {{ui:Uitlijnen}}. {{key:Esc}} of {{ui:Annuleren}} sluit het vak zonder iets toe te voegen.

De opties bij de tweede hoek: `H` hoogte, `J` uitlijning (`TL` linksboven … `BR` rechtsonder: de hoek of het midden van het vak dat blijft staan), `L` regelafstand, `R` rotatie, `W` een getypte breedte in plaats van de tweede hoek.

:::note
Terwijl het vak open is, typt {{key:Space}} een spatie en start {{key:Enter}} een nieuwe alinea. Een opgeslagen DWG bewaart alinea-tekst als MTEXT; een DXF R12 kent geen alinea-tekst, dus elke regel wordt als eigen tekst opgeslagen.
:::

### Losse regels in plaats daarvan

{{cmd:TEXT}} (`DT`) vraagt één regel per keer: elke {{key:Enter}} start de volgende regel, 1.667 keer de teksthoogte lager, en elke regel is een eigen object. Druk op een lege regel op {{key:Enter}} om te eindigen.

## Opties voor uitlijning

| Optie | Het punt waarop u klikt is |
|---|---|
| Links (standaard) | Het linkeruiteinde van de basislijn |
| Middelpunt | Het midden van de basislijn |
| Rechts | Het rechteruiteinde van de basislijn |
| Midden, MC | Het midden van de tekst, zowel horizontaal als verticaal |
| TL | De linkerbovenhoek |

## Tekst bewerken

1. Dubbelklik op een tekstobject. Het opent in hetzelfde vak als nieuwe alinea-tekst, met de cursor aan het eind.
2. Wijzig de woorden.
3. Druk op {{key:Mod+Enter}} of klik buiten het vak. De tekst op de tekening verandert; {{key:Esc}} laat hem zoals hij was.

{{cmd:TEXTEDIT}} (`ED`) doet hetzelfde: kies de ene tekst na de andere en druk op {{key:Enter}} als u klaar bent.

Selecteer een tekst om die in het rechterpaneel te wijzigen: {{ui:Tekst}}, {{ui:Hoogte}}, {{ui:Terugloopbreedte}} (0 = geen terugloop), {{ui:Regelafstand}}, {{ui:Rotatie}}, de X- en Y-positie en {{ui:Uitlijnen}}. De lijst {{ui:Uitlijnen}} biedt ook Linksonder, dat tekst uit andere programma's soms gebruikt.

## Opmaak in alinea-tekst uit andere programma's

Alinea-tekst in een DWG of DXF kan codes bevatten: kleuren per woord, vet en cursief, onderstreping, bovenstreping en doorhaling, gestapelde breuken zoals 1/2, en een andere hoogte voor een woord. CadCraft bewaart die codes, tekent ze (op het scherm en in een geplotte PDF) en slaat ze ongewijzigd op.

Bewerkt u zo'n tekst (dubbelklik, {{cmd:TEXTEDIT}}, het veld Tekst van het rechterpaneel, of {{cmd:FIND}} met Vervangen), dan bewerkt u de platte woorden. Een woord dat u typt gaat in het tekstsegment ernaast en neemt diens kleur en stijl over; de andere codes blijven staan waar ze staan. Als u de getallen van een gestapelde breuk opnieuw typt, wordt die breuk platte tekst. Tekst in het veld Tekst instellen bewaart de codes alleen waar CadCraft kan zien welke woorden zijn gebleven.

Lettertypenamen (`\F`) blijven behouden en worden opgeslagen, maar alles wordt getekend in het ene Helvetica-achtige lettertype. Er is nog geen werkbalk om codes te typen.

## Naar iets wijzen: multileaders

{{ui:Leider}} in de groep {{ui:Annoteren}} ({{cmd:MLEADER}}, `MLD`) tekent een pijl, een leiderlijn, een korte landing en een notitie, als één object.

1. Klik op {{ui:Leider}}. Klik bij `Specify leader arrowhead location` op waar de notitie over gaat.
2. Klik bij `Specify leader landing location` waar de notitie komt. De landing draait naar de kant waarop u klikte.
3. Typ de notitie in het vak dat opent en druk op {{key:Mod+Enter}}.

`A` en `L` bij de eerste vraag stellen de grootte van de pijlpunt en de lengte van de landing in; de teksthoogte komt van {{ui:Teksthoogte}} voor nieuwe maatvoering, maal {{ui:Algemene schaal}}. Dubbelklik op een multileider om de woorden te wijzigen. Grips verplaatsen de pijlpunt en de landing; de notitie volgt de landing. In {{ui:Eigenschappen}}: {{ui:Tekst}}, {{ui:Hoogte}}, {{ui:Terugloopbreedte}}, {{ui:Grootte pijlpunt}} en {{ui:Landingsafstand}}.

:::note
Multileaders worden in DWG opgeslagen als echte multileaders. DXF kent in R12 of 2000 geen multileider; daar worden ze opgeslagen als de lijnen, pijlpunt en tekst die ze tekenen.
:::

## Wijzigingen markeren met een revisiewolk

{{ui:Annoteren}} › {{ui:Meer}} › {{ui:Revisiewolk}} ({{cmd:REVCLOUD}}, `RC`) tekent een wolk van bogen rond wat er is gewijzigd. De geschiedenis toont de booglengte en het type dat wordt gebruikt.

- **Rechthoekig** (de eerste keer): klik op twee hoeken.
- `P` **Veelhoekig**: klik op de hoeken, {{key:Enter}} sluit de wolk.
- `F` **Vrije hand**: klik waar hij begint en beweeg de aanwijzer rond het gebied zonder te klikken; om de booglengte wordt een boog toegevoegd. Klik of druk op {{key:Enter}} om te sluiten.
- `O` **Object**: kies een gesloten polylijn, cirkel of ellips (of een lijn, boog of open polylijn); die wordt de wolk. `Reverse direction?` `Y` keert de bogen naar binnen.
- `A` **Booglengte**: de lengte van elke boog. Kies er een die bij de plotschaal past.

De wolk is een gesloten polylijn van bogen, dus wordt hij in elk formaat opgeslagen.

## Woorden zoeken en vervangen

{{ui:Bewerken}} › {{ui:Meer}} › {{ui:Zoeken en vervangen}} ({{cmd:FIND}}) zoekt door tekst, de waarden van blokattributen en maatvoeringstekst op het open tabblad (of alleen in de geselecteerde objecten).

1. Typ de woorden in {{ui:Zoeken naar}}. De lijst toont elke plaats waar ze staan, en het aantal.
2. Kies {{ui:Hoofdlettergevoelig}}, {{ui:Alleen hele woorden}} of {{ui:Jokertekens gebruiken (* en ?)}} als u ze nodig hebt, en vink uit waarin u niet wilt zoeken.
3. Klik op {{ui:Gevonden selecteren}} om die objecten te selecteren, of typ de nieuwe woorden in {{ui:Vervangen door}} (de lijst toont wat elk wordt) en klik op {{ui:Alles vervangen}}. Eén {{key:Mod+Z}} maakt alle vervangingen ongedaan.

De gemeten waarde van een maatvoering is geen tekst, dus die wordt nooit vervangen: in `<> TYP.` kan alleen `TYP.` worden vervangen.

## De lijnen achter een label verbergen

1. Selecteer de teksten, typ {{cmd:TEXTMASK}} en druk op {{key:Enter}}.
2. `B` schildert de achtergrond van de tekening achter ze; `C` vraagt om een kleurnummer. `O` haalt het masker weg.
3. `Border offset factor`: {{key:Enter}} houdt 1.5 aan, een halve teksthoogte rond de tekst.

Het masker bedekt lijnen onder de tekst, op het scherm en bij het plotten. DWG 2004 of later en DXF 2000 bewaren het; het DWG-formaat 2000 en DXF R12 kunnen dat niet, en het opslaan meldt dat.

## Lettertype

Alle tekst wordt getekend in een Helvetica-achtig lettertype, op het scherm en in PDF's. Tekst uit geopende tekeningen behoudt zijn woorden, hoogte en positie, maar niet zijn oorspronkelijke lettertype (de naam van een lettertype binnen alinea-tekst wordt in het bestand bewaard, zie hierboven).

In geplotte PDF's wordt tekst in elk Europees schrift, Cyrillisch of Grieks afgedrukt zoals hij is (de PDF bevat de letters die nodig zijn, en u kunt de tekst nog steeds selecteren en zoeken). Chinese, Japanse en Koreaanse tekst wordt ook zoals die is afgedrukt (de plot haalt de eerste keer dat het nodig is een groter lettertype op). Arabische, Perzische, Urdu- en Hebreeuwse tekst wordt ook zoals die is afgedrukt (zie de volgende sectie). Tekens waarvoor geen enkel lettertype een letter heeft, worden als "?" afgedrukt, en de geschiedenis zegt hoeveel het er waren.

## Tekst van rechts naar links: Arabisch, Perzisch, Urdu, Hebreeuws

Typ de tekst zoals overal anders: {{cmd:TEXT}} en {{cmd:MTEXT}} tekenen elke regel in leesvolgorde. Een regel waarvan de eerste letter Arabisch of Hebreeuws is, wordt van rechts naar links gelezen; cijfers en Latijnse woorden erin behouden hun eigen volgorde van links naar rechts, en letters in Arabisch schrift zijn verbonden. Een regel die met een Latijnse letter begint, blijft van links naar rechts, met de woorden van rechts naar links op hun plaats erin. Elke alinea van een tekst met meerdere regels heeft zijn eigen richting, en een teruggelopen alinea behoudt die op elke regel.

De tekst wordt opgeslagen zoals u hem typte, dus DWG- en DXF-bestanden wisselen hem ongewijzigd uit met andere programma's. Het invoegpunt en de uitlijning ({{ui:Links}}, {{ui:Middelpunt}}, {{ui:Rechts}}) betekenen dezelfde zijde als voor elke tekst: een notitie van rechts naar links die aan zijn rechteruiteinde moet hangen, heeft {{ui:Rechts}} nodig.

Op het scherm komen de letters uit de lettertypen van uw systeem. In een geplotte PDF gebruikt Hebreeuws hetzelfde ingebedde lettertype als Latijnse tekst; tekst in Arabisch schrift laat de plot één extra lettertype ophalen (minder dan 1 MB, eenmalig), en de hele PDF wordt daarna in dat lettertype afgedrukt. Dat lettertype heeft geen eigen vorm voor drie Urdu-tekens (heh goal, yeh barree en het Urdu-volledige punt): die worden afgedrukt in de vorm van de dichtstbijzijnde Arabische letter. Een tekening die zowel tekst in Arabisch schrift als Chinese, Japanse of Koreaanse tekst heeft, drukt een van de twee af als "?", omdat een plot één lettertype draagt. Tekst in een geladen SHX-lettertype wordt geordend en verbonden wanneer het lettertype de letters op hun Unicode-plaatsen heeft; voor oude lettertypen waarvan de letters al gevormd zijn, gebruikt u zoals voorheen {{ui:Omkeren}} in {{cmd:SHXFONTS}}.

## Veelgemaakte fouten

- **De tekst is te klein om te zien.** De hoogte is in tekeningeenheden. In een grote tekening gebruikt u een grote hoogte (zie hierboven), of zoomt u in.
- **Het commando eindigde na één regel.** U drukte in {{cmd:TEXT}} op een lege regel op {{key:Enter}}. Start het opnieuw, of gebruik alinea-tekst (`T`), waar {{key:Enter}} een nieuwe alinea start.
- **`T` opende een vak in plaats van om een regel te vragen.** Net als in AutoCAD is `T` alinea-tekst ({{cmd:MTEXT}}); enkele-regel-tekst is `DT`.
- **De tekst loopt in AutoCAD op een andere plaats terug.** CadCraft laat tekst terugkomen met Helvetica-breedtes; een ander lettertype past een woord meer of minder op een regel.
- **Tekst in een gespiegelde kopie.** Die wordt gespiegeld geplaatst, maar blijft van links naar rechts leesbaar.
