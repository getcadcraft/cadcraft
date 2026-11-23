---
title: Wandvormen, sneden, offsets en vergrendelingen voor 2D-wanden
summary: Teken wanden als rechthoeken, veelhoeken en bogen, splits en verbind ze opnieuw, verplaats ze op een maat, en vergrendel één wand aan een andere of aan een rasterlijn. Dezelfde gereedschappen als de wanden van BimCraft.
keywords: wand, wanden, werkbalk wanden, wandknoppen, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, verbindingsstijl, verstek, stomp, haaks afsnijden, hangslot, grip, uiteinde slepen, roteren, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, verbinden, samenvoegen niet toestaan, vergrendelen, rasterlijn, splitsen, opening, offset, plaatslijn
from: 49044181
---

Deze gereedschappen werken op de 2D-wanden van `WALL` (zie "2D-slimme wanden, deuren en ramen tekenen"). Ze gebruiken dezelfde regels als de wandgereedschappen in BimCraft, zodat een wand in beide hetzelfde gedraagt.

## Waar de gereedschappen staan

- Op de werkbalk heeft de groep {{ui:Wanden}} {{ui:Wand}}, {{ui:Rechthoek}}, {{ui:Splitsen}} en {{ui:Offset}}. Het menu {{ui:Meer}} bevat elk ander wandgereedschap, elk met zijn pictogram.
- In de menustijlen met lint heeft het tabblad {{ui:Wanden}} de panelen {{ui:Wanden tekenen}}, {{ui:Snijden}}, {{ui:Instellen en wijzigen}}, {{ui:Vasthouden}} en {{ui:Verbinden}}.
- In een indeling tonen de gereedschapsrijen en de gereedschapskist dezelfde groep {{ui:Wanden}}.
- U kunt ook elk hieronder genoemd commando typen.

## Verbindingen worden bewaard

Wanneer een wanduiteinde op een andere wand valt, bewaart CadCraft die verbinding bij beide wanden. Het berekent de verbindingen niet langer opnieuw uit waar de uiteinden toevallig liggen. Dus:

- Wanden die aan een wand verbonden zijn die u verplaatst, volgen hem en blijven verbonden. Hun uiteinden schuiven langs hun eigen lijnen, zodat niets draait.
- Sleep één uiteinde van een wand aan zijn grip, dan behoudt de wand die daar verbonden is ook zijn richting. Zijn uiteinde schuift langs zijn eigen lijn om de gesleepte wand te raken, zodat het gesleepte uiteinde op die lijn terechtkomt, niet altijd onder de cursor. De voorvertoning laat zien waar. Een wand die tegen de gesleepte wand stoot, volgt langs zijn eigen lijn. Sleep het uiteinde recht langs de wand, dan verandert de lengte ervan, en de wand die daar verbonden is, beweegt mee.
- `ROTATE` op een verbonden wand werkt op dezelfde manier: de uiteinden van de buren schuiven langs hun eigen lijnen naar de gedraaide wand.
- Om een hoek te verplaatsen, selecteert u beide wanden die daar samenkomen en sleept u de grip op de hoek. Beide wanden blijven op de hoek en beide draaien. Verdere wanden blijven zoals ze waren.
- Houd {{key:Alt}} ingedrukt wanneer u de nieuwe plaats van de grip aanklikt, om de verbindingen opzettelijk te verbreken: de wand gaat waar u hem neerzet, en niets volgt.
- Als een sleepbeweging een verbonden wand terug door zijn eigen verre uiteinde zou draaien, wordt het geweigerd en verandert er niets.
- Een wand die u tekent met {{ui:Samenvoegen niet toestaan}} (`D` in `WALL`), of die u in Eigenschappen uitzet ({{ui:Samenvoegen aan het begin niet toestaan}}, {{ui:Samenvoegen aan het eind niet toestaan}}), blijft vrij aan dat uiteinde, zelfs als hij een andere wand raakt, totdat u het weer toestaat.
- `WALLDISJOIN` ({{ui:Samenvoegen niet toestaan}} in de groep {{ui:Wanden}}) doet hetzelfde met een klik: klik op een wand nabij één uiteinde om verbindingen aan dat uiteinde niet toe te staan, en klik er opnieuw op om ze weer toe te staan.
- Een oudere tekening heeft nog geen bewaarde verbindingen. De eerste wijziging die u maakt, zoekt ze eenmaal uit hoe de wanden stonden vóór de wijziging, en bewaart ze. `WALLJOINS` doet dat meteen.
- DWG- en DXF-bestanden dragen de verbindingen binnen elke wand. CadCraft leest ze terug zoals ze bewaard zijn. Een programma dat geen uitgebreide gegevens bewaart, toont de wanden als gewone blokken en laat de verbindingen weg, en een verbinding waarvan de wanden in een ander programma zijn verplaatst, valt weg de volgende keer dat u een van beide wanden wijzigt.

## Verbindingsstijl van een hoek

Een hoek waar twee wanden uiteinde aan uiteinde samenkomen, wordt als verstek getekend, tenzij u een andere stijl kiest.

- `WALLJOINSTYLE` ({{ui:Verbindingsstijl}} in de groep {{ui:Wanden}}): klik op de hoek. Elke klik gaat naar de volgende stijl: {{ui:Verstek}}, {{ui:Stomp}}, {{ui:Haaks afsnijden}}, dan weer {{ui:Verstek}}. Typ `T` om te wisselen welke van de twee wanden door de hoek loopt waarop u laatst klikte. Druk op {{key:Enter}} om af te ronden. Eén uitvoering van de opdracht is één ongedaan-maken-stap.
- {{ui:Stomp}}: de ene wand loopt door tot aan de verre zijde van de andere, en de andere stopt tegen zijn zijde. {{ui:Haaks afsnijden}}: hetzelfde, maar de wand die doorloopt, eindigt haaks op zichzelf. Bij een rechte hoek lijken de twee op elkaar.
- In Eigenschappen van een wand: {{ui:Verbindingsstijl bij begin}}, {{ui:Verbindingsstijl bij eind}}, en {{ui:Loopt door bij begin}}, {{ui:Loopt door bij eind}}.
- De stijl wordt met beide wanden bewaard en reist mee in DWG- en DXF-bestanden. Een kopie van een wand begint er zonder.
- Een T-verbinding heeft geen stijl om te kiezen: de wand waarvan de zijde wordt geraakt, loopt door. Een hoek waar drie of meer wanden samenkomen, blijft een verstek. Dat geldt ook voor een zeer scherpe hoek (kleiner dan ongeveer 30 graden) en voor twee wanden op één lijn.

## Wandvormen tekenen

Elk maakt de wanden in één ongedaan-maken-stap, met de hoeken verbonden. In `WALL` stelt `O` een plaatsingsoffset in (hoe ver links van uw klikken de wand komt te liggen), en `D` schakelt verbinden uit voor de wanden die u daarna tekent.

- `WALLRECT` (`WR`): twee tegenoverliggende hoeken, zoals `RECTANG`.
- `WALLROT`: de eerste zijde, dan hoe ver de andere zijde uitloopt, voor een rechthoek onder elke hoek.
- `WALLPOLY` (`WP`): het aantal zijden (3 tot 64), het middelpunt, `I` voor ingeschreven of `C` voor omgeschreven, dan de straal, zoals `POLYGON`: klik hem aan, of typ hem (een getypte straal loopt richting de aanwijzer, of langs X wanneer de aanwijzer nog op het middelpunt staat).
- `WALLARC` (`WARC`): middelpunt, begin, eind. `D` keert de boog de andere kant op.
- `WALLTAN`: klik nabij het uiteinde van een wand, dan het eind van de boog, die langs die wand vertrekt.
- `WALLPICK`: klik op een lijn of polylijn en zeg of u de lijnen die erop aansluiten ook wilt meenemen.
- `WALLTRACE`: klik binnen een gesloten gebied van lijnen en wanden om de kleinste ervan wanden te plaatsen.

Plattegrondwanden zijn recht, dus een boog wordt getekend als korte rechte wanden van elk 15 graden. Ze verbinden zich als elke andere hoek.

## Wanden snijden

- `WALLSPLIT` (`WS`): klik op de wand, dan op het punt. `C` snijdt waar een andere wand hem kruist, `G` laat een opening tussen de delen, `F` maakt de sneden vrije uiteinden in plaats van verbonden. Het eerste deel behoudt de plaats van de wand in de tekening, en deuren en ramen gaan met hun deel mee. Een snede door een deur of raam wordt geweigerd.
- `WALLSPLITGAP` ({{ui:Splitsen met opening}}): dezelfde splitsing, maar die vraagt eerst om de opening.
- `WALLDELSEG`: klik op de wand, dan op de twee uiteinden van het stuk dat u wilt verwijderen.
- `WALLREJOIN`: klik op twee delen van één wand om ze weer één wand te maken.

## Wanden verplaatsen op maat

- `WALLDIM` ({{ui:Bewerken via maatvoering}}): klik op een lineaire of uitgelijnde maat die van de ene wand naar de andere loopt, en typ dan de nieuwe waarde. De wand aan het verre einde verschuift haaks op zichzelf, de wand aan het eerste einde blijft staan, en de wanden die erop zijn verbonden volgen. Het verre punt van de maat verschuift met zijn wand, zodat de maat de waarde toont die u typte.
- `WALLOFFSET` (`WO`): klik op een wand, dan op de zijde waarheen u hem wilt verplaatsen (`D` typt een afstand, `C` maakt in plaats daarvan een kopie).
- `WALLSTRETCH`: een venster rond de wanduiteinden, dan een basispunt en een tweede punt.
- In Eigenschappen van een wand verandert een getypte {{ui:Lengte}} het begin en neemt de wand die aan het verre uiteinde is verbonden mee, en een nieuwe {{ui:Dikte}} groeit weg van de {{ui:Plaatslijn}} die u kiest (de linkerzijde, de rechterzijde of het midden).

## Maatvoering tussen wandmiddenlijnen

Een middenlijn van een wand wordt niet getekend, maar objectsnap vindt hem. Met objectsnap aan ({{key:F3}}) beweegt u de aanwijzer over het midden van de dikte van een wand: de markering leest `Wall center: endpoint` of `Wall center: midpoint`, en de middenlijn verschijnt als gestippelde lijn zolang de markering erop staat. Met {{ui:Loodrecht}} of {{ui:Dichtstbijzijnde}} aan in de lijst van objectsnaps werken die ook op de middenlijn.

1. Start `DIMLINEAR` (of `DIMALIGNED`).
2. Klik op de eerste wand waar de markering `Wall center: midpoint` of `Wall center: endpoint` leest.
3. Klik op de tweede wand op dezelfde manier, en klik dan waar de maatlijn komt.
4. Om de afstand te wijzigen, start u `WALLDIM`, klikt u op de maat en typt u de nieuwe waarde. De tweede wand verschuift.

De middenlijnsnap werkt in elk commando dat om een punt vraagt.

## Wanden vergrendelen

Een vergrendeling blijft bij de wand in het bestand. Als u één vergrendelde wand verplaatst, volgt de andere. Als één wijziging beide wanden verschillend verplaatst, wordt ze geweigerd en verandert er niets.

- `WALLHOLD`: vergrendel een wand aan een andere wand. `A` verplaatst hem eerst op de lijn van de andere wand, `K` behoudt de afstand die hij heeft.
- `WALLHOLDDIM`: vergrendel de afstand tussen twee evenwijdige wanden.
- `WALLGRID`: vergrendel een wand aan een rasterlijn (een lijn op een rasterlaag met zijn label als tekst aan één uiteinde), hetzij langs de lijn, hetzij met één uiteinde erop. Een wand die langs de rasterlijn is vergrendeld, behoudt de afstand die hij ervan heeft. Verplaats de rasterlijn met `GRIDMOVE` en de wand volgt als geheel, met zijn verbonden wanden. Een wand die langs een rasterlijn ligt, verschuift als geheel met de rasterlijn, zelfs zonder vergrendeling, en een wand die alleen op de lijn eindigt, wordt door dat uiteinde uitgerekt.
- `WALLHOLDS` toont de vergrendelingen. `WALLUNHOLD` haalt de vergrendelingen van een wand weg.
- Elke vergrendeling toont een klein hangslot in het plan: naast het midden van de vergrendelde wand, of naast het uiteinde dat aan een rasterlijn is vergrendeld. Klik op een hangslot om die vergrendeling weg te halen.

## Wat hier nog niet is

Vergrendelingen gebruiken de middenlijnen van de wanden. Wanden hebben hier geen lagen, dus er is geen laagprioriteit bij een knooppunt, en de wanden buigen niet (zie de bogen hierboven). Niemand heeft deze gereedschappen op een grote tekening geprobeerd, en ze zijn niet in een ander CAD-programma gecontroleerd.
