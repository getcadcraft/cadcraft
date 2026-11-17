---
title: Het scherm splitsen
summary: Toon de tekening in twee, drie of vier vensters met elk een eigen zoom, plaats een blad naast het model, en open meerdere tekeningen naast elkaar.
keywords: splitsen, scherm splitsen, vensters, vports, viewports, getegeld, tegelen, naast elkaar, gestapeld, twee tekeningen, tabbladen, documenttabbladen, vergelijken, scheidingslijn, model en blad, meerdere tekeningen, geopende tekeningen
from: ee2f034b
---

## Wat u leert

Hoe u één tekening in meerdere vensters tegelijk bekijkt, elk met een eigen zoom, en hoe u meerdere tekeningen opent en naast elkaar bekijkt.

## Eén tekening splitsen in vensters

1. Open een tekening, of teken een paar lijnen en cirkels.
2. Open {{ui:Weergave}} › {{ui:Meer}} en kies {{ui:Naast elkaar splitsen}} (of typ {{cmd:VPORTS}}, daarna `2`, en {{key:Enter}}).

Het tekengebied splitst in twee vensters, beide met dezelfde weergave. Het actieve venster heeft een blauw kader en krijgt het kruisdraad.

3. Klik in het andere venster. Het wordt actief. (Die eerste klik wisselt alleen van venster; klik nog eens om te kiezen.)
4. Zoom met het wiel. Alleen dat venster zoomt.
5. Sleep de lijn tussen de vensters om er één breder te maken. {{key:Home}} op een gefocuste scheidingslijn zet hem terug in het midden.

{{cmd:VPORTS}} neemt ook `3` (twee vensters aan één kant en een groot venster aan de andere: `L` of `R`), `4`, en `SI` om weer één venster te krijgen. De weergave van het actieve venster vult dan het hele gebied. Op een blad voegt {{cmd:VPORTS}} in plaats daarvan een viewport aan het blad toe (zoals in AutoCAD); typ daar {{cmd:SPLIT}}, of gebruik het menu Weergave.

## Tekenen vanuit het ene venster naar het andere

1. Splits naast elkaar, en zoom elk venster op een andere hoek van de tekening.
2. Typ `L` en druk op {{key:Enter}}, en klik het eerste punt in het linkervenster.
3. Klik één keer in het rechtervenster om het actief te maken, en klik daarna het tweede punt daar.

De lijn loopt tussen de twee plaatsen. Een opdracht gaat door terwijl u van venster wisselt, en de gummiband is in elk venster zichtbaar.

## Het model naast een blad

1. Splits naast elkaar.
2. Klik op het rechtervenster, en klik daarna op het tabblad van een blad onder de tekening.

Het rechtervenster toont het blad; het linkervenster toont nog het model. Elk venster houdt zijn eigen ruimte, zodat u op het model kunt tekenen en kunt zien hoe de viewport van het blad meebeweegt.

## Meerdere tekeningen in één venster

1. Open een tekening. Open daarna een andere (of druk op {{ui:Nieuw}}).

Elke tekening opent in een eigen tabblad boven het tekengebied. Klik op een tabblad om te wisselen; de opdrachtregel, de panelen en ongedaan maken volgen de tekening waarnaar u wisselt. {{key:Mod+C}} in de ene tekening en {{key:Mod+V}} in een andere kopieert objecten ertussen.

2. Klik op {{ui:Geopende tekeningen naast elkaar tegelen}} (het splitspictogram aan het eind van de tabbladen), of op het gestapelde pictogram ernaast.

Elk venster toont nu een van de geopende tekeningen, tot vier. Klik op een venster om in die tekening te werken.

3. Klik op de {{ui:×}} op een tabblad om die tekening te sluiten. Heeft ze niet-opgeslagen wijzigingen, dan vraagt CadCraft eerst.

:::tip
Het openen van een tekening terwijl het venster alleen een nieuwe, onaangeroerde tekening bevat, gebruikt dat tabblad in plaats van er een nieuw toe te voegen.
:::

## Samen verschuiven en zoomen

Om twee revisies te vergelijken, tegelt u ze naast elkaar en klikt u daarna op {{ui:Weergaven van de vensters koppelen}} (het koppelpictogram aan het eind van de tabbladen), of kiest u het in {{ui:Weergave}} › {{ui:Meer}}, of typt u {{cmd:LINKVIEWS}} en `ON`. Nu verplaatst een verschuiving of zoom in één venster elk venster dat het model toont (of elk venster dat een blad toont) naar dezelfde plek, zodat de twee tekeningen op één lijn blijven. {{cmd:LINKVIEWS}} `OFF` laat elk venster weer op zichzelf bewegen.

## Veelvoorkomende fouten

- **Mijn klik deed niets.** Hij maakte dat venster actief. Klik nog eens om te kiezen of te tekenen.
- **Het wiel zoomde het verkeerde venster.** Het wiel zoomt het venster onder de aanwijzer en maakt het actief.
- **De vensters gingen terug naar één.** Een tekening openen toont haar zoals ze is opgeslagen; een tekening die zonder vensters is opgeslagen, opent in één venster.
- **Het verlaten van de pagina waarschuwt voor niet-opgeslagen wijzigingen die ik niet zie.** Een ander tabblad bevat een tekening met wijzigingen. Wissel ernaartoe en sla op, of verlaat de pagina zonder op te slaan.
