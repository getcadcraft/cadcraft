---
title: Wandvormen, sneden, offsets en vergrendelingen voor 2D-wanden
summary: Teken wanden als rechthoeken, veelhoeken en bogen, splits en verbind ze weer, verplaats ze over een afstand, en vergrendel een wand aan een andere of aan een rasterlijn. Dezelfde gereedschappen als de wanden van BimCraft.
keywords: wand, werkbalk wanden, wandknoppen, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, verbindingsstijl, verstek, stomp, haaks afsnijden, hangslot, grip, eindpunt slepen, roteren, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, samenvoegen, samenvoegen niet toestaan, vergrendelen, rasterlijn, splitsen, opening, offset, positielijn
from: f41e7433
---

Deze gereedschappen werken op de 2D-wanden van `WALL` (zie "Slimme wanden, deuren en ramen tekenen in 2D"). Ze gebruiken dezelfde regels als de wandgereedschappen in BimCraft, zodat een wand in beide hetzelfde gedraagt.

## Waar de gereedschappen staan

- Op de werkbalk heeft de groep {{ui:Wanden}} {{ui:Wand}}, {{ui:Rechthoek}}, {{ui:Splitsen}} en {{ui:Offset}}. Het menu {{ui:Meer}} bevat elk ander wandgereedschap, elk met zijn pictogram.
- In de lintmenustijlen heeft het tabblad {{ui:Wanden}} de panelen {{ui:Wanden tekenen}}, {{ui:Knippen}}, {{ui:Instellen en wijzigen}}, {{ui:Vasthouden}} en {{ui:Samenvoegen}}.
- In een indeling tonen de werkbalkrijen en de gereedschapskist dezelfde groep {{ui:Wanden}}.
- U kunt ook elke hieronder genoemde opdracht typen.

## Verbindingen worden opgeslagen

Wanneer het uiteinde van een wand op een andere wand uitkomt, slaat CadCraft die verbinding op bij beide wanden. Het berekent de verbindingen niet meer opnieuw uit waar de uiteinden toevallig liggen. Dus:

- Wanden die aan een wand verbonden zijn die u verplaatst, volgen die en blijven verbonden. Hun uiteinden schuiven langs hun eigen lijnen, zodat er niets draait.
- Sleept u één uiteinde van een wand aan zijn grip, dan behoudt de wand die daar verbonden is ook zijn richting. Het uiteinde schuift langs zijn eigen lijn naar de gesleepte wand, dus het gesleepte uiteinde komt op die lijn te liggen, niet altijd onder de cursor. De voorvertoning laat zien waar. Een wand die stomp tegen de gesleepte wand aanligt, volgt langs zijn eigen lijn. Sleept u het uiteinde recht langs de wand, dan verandert de lengte ervan, en de wand die daar aansluit, beweegt mee.
- `ROTATE` op een verbonden wand werkt op dezelfde manier: de uiteinden van de buurwanden schuiven langs hun eigen lijnen naar de gedraaide wand.
- Om een hoek te verplaatsen selecteert u beide wanden die daar samenkomen en sleept u de grip op de hoek. Beide wanden blijven op de hoek en draaien allebei. Verder gelegen wanden blijven zoals ze waren.
- Houd {{key:Alt}} ingedrukt wanneer u op de nieuwe plek van de grip klikt om de verbindingen opzettelijk te verbreken: de wand gaat waar u hem neerzet en niets volgt.
- Als een sleepbeweging een verbonden wand terug door zijn eigen verre eind zou draaien, wordt die geweigerd en verandert er niets.
- Een wand die u tekent met {{ui:Samenvoegen niet toestaan}} (`D` in `WALL`), of die u in Eigenschappen uitzet ({{ui:Samenvoegen aan het begin niet toestaan}}, {{ui:Samenvoegen aan het eind niet toestaan}}), blijft vrij aan dat eind, zelfs als hij een andere wand raakt, tot u het weer toestaat.
- `WALLDISJOIN` ({{ui:Samenvoegen niet toestaan}} in de groep {{ui:Wanden}}) doet hetzelfde met één klik: klik op een wand dicht bij één eind om samenvoegen aan dat eind niet toe te staan, en klik er nog eens op om het weer toe te staan.
- Een oudere tekening heeft nog geen opgeslagen verbindingen. De eerste wijziging die u maakt, zoekt ze één keer op, op basis van hoe de wanden stonden vóór de wijziging, en slaat ze op. `WALLJOINS` doet dat meteen.
- DWG- en DXF-bestanden dragen de verbindingen binnen elke wand. CadCraft leest ze terug zoals ze zijn opgeslagen. Een programma dat geen uitgebreide gegevens bewaart, toont de wanden als gewone blokken en laat de verbindingen vallen, en een verbinding waarvan de wanden in een ander programma zijn verplaatst, wordt de volgende keer dat u een van beide wanden wijzigt, verwijderd.

## Verbindingsstijl van een hoek

Een hoek waar twee wanden uiteinde-op-uiteinde samenkomen, wordt als verstek getekend, tenzij u een andere stijl kiest.

- `WALLJOINSTYLE` ({{ui:Verbindingsstijl}} in de groep {{ui:Wanden}}): klik op de hoek. Elke klik gaat naar de volgende stijl: {{ui:Verstek}}, {{ui:Stomp}}, {{ui:Haaks afsnijden}}, dan weer {{ui:Verstek}}. Typ `T` om te wisselen welke van de twee wanden doorloopt bij de hoek die u het laatst aanklikte. Druk op {{key:Enter}} om te eindigen. Eén keer uitvoeren van de opdracht is één stap die u ongedaan kunt maken.
- {{ui:Stomp}}: de ene wand loopt door tot het verre vlak van de andere, en de andere stopt tegen zijn zijkant. {{ui:Haaks afsnijden}}: hetzelfde, maar de wand die doorloopt eindigt haaks op zichzelf. Bij een rechte hoek lijken de twee op elkaar.
- In Eigenschappen van een wand: {{ui:Verbindingsstijl bij begin}}, {{ui:Verbindingsstijl bij eind}}, en {{ui:Loopt door bij begin}}, {{ui:Loopt door bij eind}}.
- De stijl wordt met beide wanden opgeslagen en reist mee in DWG- en DXF-bestanden. Een kopie van een wand begint er zonder.
- Een T-verbinding heeft geen stijl om uit te kiezen: de wand waarvan de zijkant geraakt wordt, loopt door. Een hoek waar drie of meer wanden samenkomen blijft een verstek. Dat geldt ook voor een zeer scherpe hoek (kleiner dan ongeveer 30 graden) en voor twee wanden op één lijn.

## Wandvormen tekenen

Elk gereedschap maakt de wanden in één stap die u ongedaan kunt maken, met de hoeken verbonden. In `WALL` stelt `O` een plaatsingsoffset in (hoe ver links van uw klikken de wand komt te liggen), en `D` zet het samenvoegen uit voor de wanden die u daarna tekent.

- `WALLRECT` (`WR`): twee tegenoverliggende hoeken, zoals `RECTANG`.
- `WALLROT`: de eerste zijde, dan hoe ver de andere zijde uitkomt, voor een rechthoek onder elke hoek.
- `WALLPOLY` (`WP`): het aantal zijden (3 tot 64), het middelpunt, `I` voor ingeschreven of `C` voor omgeschreven, dan de straal, zoals `POLYGON`.
- `WALLARC` (`WARC`): middelpunt, begin, eind. `D` keert de boog de andere kant op.
- `WALLTAN`: klik dicht bij het eind van een wand, dan op het eind van de boog, die langs die wand vertrekt.
- `WALLPICK`: klik op een lijn of polylijn en zeg of de lijnen die eraan verbonden zijn ook mee moeten.
- `WALLTRACE`: klik binnen een gesloten gebied van lijnen en wanden om wanden rond het kleinste gebied te zetten.

Plattegrondwanden zijn recht, dus een boog wordt getekend als korte rechte wanden van elk 15 graden. Ze verbinden zich zoals elke hoek.

## Wanden snijden

- `WALLSPLIT` (`WS`): klik op de wand, dan op het punt. `C` snijdt waar een andere wand hem kruist, `G` laat een opening tussen de delen, `F` maakt de sneden aan de uiteinden vrij in plaats van verbonden. Het eerste deel houdt de plaats van de wand in de tekening, en deuren en ramen gaan mee met hun deel. Een snede door een deur of raam wordt geweigerd.
- {{ui:Splitsen met opening}} (`WALLSPLITGAP`): dezelfde splitsing, maar die vraagt eerst om de opening.
- `WALLDELSEG`: klik op de wand, dan op de twee uiteinden van het stuk dat u wilt verwijderen.
- `WALLREJOIN`: klik op twee delen van één wand om ze weer één te maken.

## Wanden over een afstand verplaatsen

- `WALLDIM`: klik op een lineaire of uitgelijnde maatvoering die van de ene wand naar de andere loopt, en typ dan de nieuwe waarde. De wand aan het verre eind verplaatst zich haaks op zichzelf, de wand aan het eerste eind blijft staan, en de wanden die daaraan verbonden zijn, volgen.
- `WALLOFFSET` (`WO`): klik op een wand, dan op de zijde waarnaar die moet verplaatsen (`D` typt een afstand, `C` maakt in plaats daarvan een kopie).
- `WALLSTRETCH`: een venster rond de wanduiteinden, dan een basispunt en een tweede punt.
- In Eigenschappen houdt een getypte {{ui:Lengte}} het begin vast en neemt de wand die aan het verre eind verbonden is, mee; een nieuwe {{ui:Dikte}} groeit weg van de {{ui:Positielijn}} die u koos (het linkervlak, het rechtervlak of het midden).

## Wanden vergrendelen

Een vergrendeling blijft bij de wand in het bestand. Verplaatst u één vergrendelde wand, dan volgt de andere. Als één wijziging beide wanden verschillend verplaatst, wordt ze geweigerd en verandert er niets.

- `WALLHOLD`: vergrendel een wand aan een andere wand. `A` verplaatst hem eerst naar de lijn van de andere wand, `K` behoudt de afstand die hij heeft.
- `WALLHOLDDIM`: vergrendel de afstand tussen twee evenwijdige wanden.
- `WALLGRID`: vergrendel een wand aan een rasterlijn (een lijn op een rasterlaag met zijn label als tekst aan één eind), hetzij langs de lijn, hetzij met één eind erop. Een wand die langs de lijn is vergrendeld, behoudt de afstand die hij daarvan heeft. Verplaatst u de rasterlijn met `GRIDMOVE`, dan volgt de wand geheel, met zijn verbonden wanden. Een wand die langs een rasterlijn ligt, verplaatst zich geheel mee, zelfs zonder vergrendeling, en een wand die alleen op de lijn eindigt, wordt door dat eind uitgerekt.
- `WALLHOLDS` toont de vergrendelingen. `WALLUNHOLD` haalt de vergrendelingen van een wand weg.
- Elke vergrendeling toont een klein hangslot op de plattegrond: naast het midden van de vergrendelde wand, of naast het eind dat aan een rasterlijn is vergrendeld. Klik op een hangslot om die vergrendeling op te heffen.

## Wat er nog niet is

Vergrendelingen gebruiken de middenlijnen van de wanden. Wanden hebben hier geen lagen, dus er is geen laagprioriteit bij een kruising, en de wanden buigen niet (zie bogen hierboven). Niemand heeft deze gereedschappen op een grote tekening geprobeerd, en ze zijn niet gecontroleerd in een ander CAD-programma.
