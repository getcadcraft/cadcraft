---
title: Verplaatsen, kopiëren, roteren, schalen, spiegelen, uitrekken en array
summary: Richt een kamer in met meubels met de basiswijzigingscommando's, met basispunten, getypte afstanden en ongedaan maken.
keywords: verplaatsen, kopiëren, roteren, schalen, spiegelen, uitrekken, array, samenvoegen, matchprop, eigenschappen overnemen, schilder, arrayrect, arraypolar, polaire array, wissen, ontbinden, ongedaan maken, opnieuw, basispunt, verplaatsing, wijzigen, uitlijnen, verdelen, op een lijn zetten, gelijkmatig verdelen
from: 8eaeee6c
---

## Wat u gaat maken

Een tafel met één stoel, die rond de tafel wordt gekopieerd, gedraaid, gespiegeld en van grootte veranderd. Onderweg gebruikt u {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} en {{cmd:UNDO}}.

## De onderdelen tekenen

1. Typ `REC` en druk op {{key:Enter}}, typ `0,0` en druk op {{key:Enter}}, typ daarna `@1800,900` en druk op {{key:Enter}}. Dit is de tafel.
2. Typ `REC` en druk op {{key:Enter}}, typ `300,-700` en druk op {{key:Enter}}, typ daarna `@450,450` en druk op {{key:Enter}}. Dit is een stoel, onder de tafel.
3. Klik op {{ui:Alles tonen}}.

## Verplaatsen: basispunt, dan tweede punt

Elke verplaatsing, kopie, rotatie en schaling begint bij een **basispunt**: het punt dat wordt meegenomen, of het punt waar om wordt gedraaid.

1. Klik op de stoel om hem te selecteren.
2. Typ `M` en druk op {{key:Enter}}. De geschiedenis zegt `1 found`.
3. Snap bij `Specify base point` naar de linkerbovenhoek van de stoel (Eindpunt) en klik.
4. Typ bij `Specify second point` `@0,200` en druk op {{key:Enter}}.

De stoel verschuift 200 omhoog, dichter naar de tafel.

:::tip
Typ `D` bij `Specify base point` om in plaats daarvan een verplaatsing op te geven: CadCraft vraagt dan `Specify displacement`, en u typt hoe ver opzij en omhoog, zoals `0,200` (geen `@` nodig).
:::

## Kopiëren, zo vaak u wilt

1. Klik op de stoel.
2. Typ `CO` en druk op {{key:Enter}}.
3. Snap naar de linkerondere hoek van de stoel en klik als basispunt.
4. Typ `@600,0` en druk op {{key:Enter}}. Er verschijnt een kopie 600 naar rechts.
5. Typ `@600,0` nogmaals en druk op {{key:Enter}}. Er verschijnt een tweede kopie, 1200 naar rechts van het origineel.
6. Druk op {{key:Enter}} om het commando te beëindigen.

{{cmd:COPY}} gaat door tot u op {{key:Enter}} drukt. Elke kopie wordt geplaatst op de afstand van het basispunt tot het punt dat u opgeeft. Een `@`-punt telt vanaf het laatst ingevoerde punt, dat na de eerste kopie het punt van die kopie is, dus `@600,0` tweemaal geeft kopieën op 600 en 1200. Typ `U` en druk op {{key:Enter}} om de laatste kopie terug te nemen zonder het commando te verlaten.

U ziet drie stoelen naast elkaar onder de tafel.

:::tip
{{cmd:COPY}} is bedoeld voor kopieën binnen één tekening, geplaatst met een basispunt. Om objecten naar een andere tekening of een ander tabblad te brengen, of ze later te plakken, gebruikt u het klembord: {{key:Mod+C}}, daarna {{key:Mod+V}}. {{key:Mod+D}} maakt één kopie die met de aanwijzer meebeweegt. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).
:::

## De rij spiegelen naar de andere kant

1. Sleep een kruisvenster (van rechts naar links) over de drie stoelen, zonder de tafel aan te raken.
2. Typ `MI` en druk op {{key:Enter}}.
3. Snap bij `Specify first point of mirror line` naar het middelpunt van lijn van de linkerzijde van de tafel en klik.
4. Snap bij `Specify second point of mirror line` naar het middelpunt van lijn van de rechterzijde van de tafel en klik.
5. Druk bij `Erase source objects? [Yes/No] <N>` op {{key:Enter}} om ze te bewaren.

U ziet drie stoelen onder de tafel en drie gespiegelde stoelen erboven. Tekst in een gespiegelde selectie blijft leesbaar: ze wordt gespiegeld geplaatst, maar niet achterstevoren geschreven.

## Een stoel draaien

1. Klik op de meest rechtse stoel onder de tafel.
2. Typ `RO` en druk op {{key:Enter}}.
3. Snap naar de rechterondere hoek van de stoel en klik als basispunt.
4. Typ `90` en druk op {{key:Enter}}.

De stoel draait 90 graden tegen de klok in om het basispunt. Een negatieve hoek draait met de klok mee. In plaats van te typen kunt u ook een tweede punt aanklikken: de hoek wordt gemeten vanaf het basispunt naar dat punt.

## De tafel schalen

1. Selecteer de tafel.
2. Typ `SC` en druk op {{key:Enter}}.
3. Snap naar de linkerondere hoek van de tafel en klik als basispunt.
4. Typ `1.2` en druk op {{key:Enter}}.

De tafel is 20% groter en groeit vanaf het basispunt. Een factor onder 1 maakt hem kleiner.

:::note
Als u een punt aanklikt in plaats van de schaalfactor te typen, is de factor de afstand van het basispunt tot dat punt. Eén tekeneenheid weg aanklikken geeft factor 1. Meestal wilt u het getal typen.
:::

## Ongedaan maken en opnieuw

- {{key:Mod+Z}}, de knop {{ui:Ongedaan maken}}, of `U` gevolgd door {{key:Enter}} maakt het laatste commando ongedaan. Een heel commando is één stap: ongedaan maken van een {{cmd:COPY}} die vijf kopieën maakte, verwijdert alle vijf.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, de knop {{ui:Opnieuw}}, of `REDO` brengt het terug.
- De geschiedenis zegt wat ongedaan is gemaakt (`Undid COPY`).

CadCraft bewaart de laatste 500 stappen. Laaginstellingen (aan, bevriezen, vergrendelen, kleur) zijn instellingen, geen bewerkingen, en worden niet ongedaan gemaakt.

## Een kamer breder maken

{{cmd:STRETCH}} (`S`, of {{ui:Uitrekken}}) verplaatst alleen wat binnen een kruisvenster ligt: hoeken en lijneinden die erin liggen bewegen mee, al het andere blijft staan, zodat de kamer breder wordt in plaats van te verschuiven.

1. Typ `S` en druk op {{key:Enter}}.
2. Sleep een venster van rechts naar links over de rechtermuur, zodat het de hoeken van de muur en de uiteinden van alles wat erop aansluit omvat.
3. Druk op {{key:Enter}}.
4. Klik een basispunt aan, typ daarna `@600,0` en druk op {{key:Enter}}.

De rechthoek is 600 breder; lijnen die op de muur eindigden, eindigen er nog steeds op. Een boog met één uiteinde binnen behoudt zijn hoogte, cirkels en tekst verplaatsen wanneer hun middelpunt of invoegpunt binnen ligt, en een maatvoering meet zijn nieuwe lengte. Objecten die één voor één zonder venster zijn gekozen, verplaatsen gewoon.

U kunt ook eerst selecteren: sleep het kruisvenster (of een kruislasso) over de muur zonder dat een commando loopt, en typ daarna `S`. STRETCH neemt die selectie over en rekt uit wat de vensters erin omvatten, net alsof u ze op de eigen prompt had gesleept.

## Array: rijen en kolommen, of rond een middelpunt

{{cmd:ARRAY}} (`AR`, of {{ui:Array}}) kopieert de selectie in een raster of in een cirkel.

1. Selecteer een stoel, typ `AR` en druk op {{key:Enter}}. Druk op {{key:Enter}} voor Rechthoekig.
2. Er verschijnt een voorbeeld van 4 kolommen en 3 rijen. Typ `COU`, druk op {{key:Enter}}, typ daarna `5` voor kolommen en `2` voor rijen.
3. Typ `S`, druk op {{key:Enter}}, typ daarna `600` tussen kolommen en `-900` tussen rijen (negatief gaat omlaag).
4. Druk op {{key:Enter}} om de kopieën te maken.

Voor een ring van stoelen rond een tafel kiest u in plaats daarvan `PO` (Polair), klikt u het middelpunt van de tafel aan, en stelt u `I` (items), `F` (vulhoek: 360 voor helemaal rond, 180 voor de helft) en `ROT` (of de kopieën zich naar het middelpunt draaien) in. {{cmd:ARRAYRECT}} en {{cmd:ARRAYPOLAR}} slaan die vraag over.

## Stukken samenvoegen tot één polylijn

{{cmd:JOIN}} (`J`, of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Samenvoegen}}): selecteer lijnen, bogen en open polylijnen waarvan de uiteinden samenkomen, en druk op {{key:Enter}}. Ze worden één polylijn, gesloten wanneer ze helemaal rondgaan, die u daarna in één keer kunt offsetten. Lijnen die op één lijn liggen worden één lijn, ook als er gaten tussen zitten; bogen van één cirkel worden één boog, of de cirkel.

## Eigenschappen overnemen

{{cmd:MATCHPROP}} (`MA`, of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Eigenschappen overnemen}}): klik het object aan waarvan u het uiterlijk wilt, selecteer daarna de objecten die u wilt wijzigen en druk op {{key:Enter}}. Ze nemen zijn laag en kleur over; een tekst neemt zijn hoogte, een maatvoering zijn maten, een arcering zijn patroon. Typ bij de tweede vraag `S` ({{ui:Instellingen}}) om een van deze uit te schakelen.

## Objecten uitlijnen

**Op punten.** {{cmd:ALIGN}} (`AL`, of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Uitlijnen}}): selecteer de objecten en druk op {{key:Enter}}, klik daarna een punt op ze (de bron) en de plaats waar het naartoe moet (de bestemming).

- Eén paar verplaatst ze. Druk bij `Specify second source point` op {{key:Enter}} om daar te stoppen.
- Twee paren draaien ze ook, zodat de lijn tussen de twee bronpunten langs de lijn tussen de twee bestemmingspunten ligt. CadCraft vraagt dan `Scale objects based on alignment points?`: `Y` maakt ze ook zoveel groter of kleiner.
- Een derde paar spiegelt ze wanneer de twee punten aan weerszijden van die lijn liggen.

**Randen en tussenruimte.** {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Uitlijnen en verdelen}} (of `ALIGNPANEL`) opent een klein paneel over de tekening. Selecteer objecten, en daarna:

- kies waarop u wilt uitlijnen in {{ui:Uitlijnen op}} (de hele selectie, het eerste of laatste object dat u koos, of een punt dat u aanklikt) en klik op {{ui:Links}}, {{ui:Middelpunt}}, {{ui:Rechts}}, {{ui:Boven}}, {{ui:Midden}} of {{ui:Onder}};
- of kies {{ui:Gelijke tussenruimten}} of {{ui:Gelijke middelpunten}} en klik op {{ui:Naast elkaar}} of {{ui:Boven en onder}}: de twee buitenste objecten blijven staan, de rest wordt er gelijkmatig tussen verdeeld (minstens drie objecten).

Elke klik is één stap ongedaan maken, en de selectie blijft staan, zodat u iets anders kunt proberen. Elk object telt met zijn omhullende kader, in het UCS als er een is ingesteld. Op de opdrachtregel zijn hetzelfde {{cmd:ALIGNTO}} en {{cmd:DISTRIBUTE}}.

## Wissen en ontbinden

- {{cmd:ERASE}} (`E`, of {{key:Delete}}) verwijdert de geselecteerde objecten.
- {{cmd:EXPLODE}} (`X`) splitst een polylijn in lijnen en bogen, een blokverwijzing in zijn objecten, en een maatvoering in lijnen, pijlpunten en tekst. Ontbonden maatvoeringen meten zichzelf niet meer.

## Veelgemaakte fouten

- **Een afstand typen zonder `@` bij het tweede punt.** `600,0` is het absolute punt 600,0, niet "600 naar rechts". Gebruik `@600,0`, of een kale `600` met het kruishaar in de goede richting.
- **De rotatie ging de verkeerde kant op.** Positieve hoeken draaien tegen de klok in.
- **Ongedaan maken verwijderde meer dan verwacht.** Eén keer ongedaan maken neemt het hele laatste commando terug, inclusief elke kopie die het maakte.
- **Het commando vroeg niet om objecten te selecteren.** Er waren al objecten geselecteerd, dus het gebruikte die. Druk eerst op {{key:Esc}} om met niets geselecteerd te beginnen.
