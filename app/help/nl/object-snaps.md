---
title: Snappen naar punten op objecten
summary: Gebruik objectsnaps, Ortho en het raster om met de muis exacte eindpunten, middelpunten, middelpunten van cirkels en snijpunten te kiezen.
keywords: osnap, objectsnap, eindpunt, middelpunt, middelpunt van cirkel, snijpunt, loodrecht, kwadrant, dichtstbijzijnde, knooppunt, invoegpunt, ortho, raster, f3, f8, f7, polaire tracering, polair, polarang, objectsnap-tracering, otrack, tracering, f10, f11
from: 3cf17f94
---

## Wat u gaat maken

Een rechthoek met zijn twee diagonalen, een cirkel gecentreerd waar ze elkaar kruisen, en een lijn van het midden van één zijde naar de cirkel. Elk punt kiest u met de muis, en elk punt is exact.

## Hoe snappen werkt

Terwijl een opdracht om een punt vraagt, zoekt CadCraft naar snappunten binnen ongeveer 10 pixels van het kruishaar. Wanneer het er één vindt, verschijnen een markering en een label ("Eindpunt", "Snijpunt"), en een klik komt **exact** op dat punt terecht, niet waar het kruishaar staat.

Snappen staat aan wanneer {{ui:Snap}} in de statusbalk is ingedrukt. {{key:F3}} zet het aan en uit.

De snaps die u kunt gebruiken, zijn:

| Snap | Komt uit op |
|---|---|
| Eindpunt | De uiteinden van lijnen, bogen en polylijnsegmenten |
| Middelpunt van lijn | Het midden van lijnen, bogen en polylijnsegmenten |
| Middelpunt | Het middelpunt van cirkels en bogen, en van boogsegmenten van polylijnen |
| Kwadrant | De punten op 0, 90, 180 en 270 graden van cirkels en bogen |
| Snijpunt | Waar twee objecten elkaar kruisen |
| Loodrecht | Het punt op een object loodrecht op het laatste punt (heeft een basispunt nodig) |
| Raaklijn | Het punt op een cirkel of boog waar een lijn vanaf het laatste punt hem net raakt. Zonder laatste punt (het eerste punt van een lijn) toont de markering "uitgesteld": het raakpunt wordt berekend zodra het volgende punt bekend is, zodat een lijn van Raaklijn naar Raaklijn beide cirkels raakt |
| Dichtstbijzijnde | Het dichtstbijzijnde punt op elk object |
| Knooppunt | Puntobjecten |
| Invoegpunt | Het invoegpunt van tekst en blokverwijzingen |

Alle snaps staan standaard aan, behalve Raaklijn en Dichtstbijzijnde. Dichtstbijzijnde wint vaak wanneer u iets anders wilt; zet Raaklijn aan wanneer u die nodig heeft.

## Uw snaps kiezen

1. Klik op het kleine pijltje naast {{ui:Snap}} in de statusbalk. De lijst {{ui:Objectsnaps}} opent.
2. Vink snaps aan of uit. Wijzigingen werken meteen.
3. Klik nogmaals op het pijltje om de lijst te sluiten.

CadCraft onthoudt uw keuze, en de instellingen {{ui:Raster}}, {{ui:Ortho}} en {{ui:Snap}}, in deze browser.

## Stappen

1. Typ `REC` en druk op {{key:Enter}}.
2. Typ `0,0` en druk op {{key:Enter}}.
3. Typ `@4000,3000` en druk op {{key:Enter}}. Er verschijnt een rechthoek.
4. Klik op {{ui:Alles tonen}}.
5. Typ `L` en druk op {{key:Enter}}.
6. Beweeg het kruishaar naar de linker onderhoek. De markering toont "Eindpunt". Klik.
7. Beweeg naar de rechter bovenhoek tot "Eindpunt" verschijnt. Klik.
8. Druk op {{key:Enter}} om de lijn te beëindigen.
9. Druk op {{key:Enter}} om {{cmd:LINE}} opnieuw te starten, en teken de andere diagonaal van de rechter onderhoek naar de linker bovenhoek op dezelfde manier.
10. Typ `C` en druk op {{key:Enter}} om een cirkel te starten.
11. Beweeg het kruishaar naar waar de diagonalen elkaar kruisen. De markering toont "Snijpunt". Klik.
12. Typ `800` en druk op {{key:Enter}}.

U ziet een cirkel die precies op het kruispunt is gecentreerd.

13. Typ `L` en druk op {{key:Enter}}.
14. Beweeg naar het midden van de linkerzijde van de rechthoek tot "Middelpunt van lijn" verschijnt. Klik.
15. Beweeg het kruishaar op de cirkel, aan de linkerkant. De markering toont "Loodrecht" of "Kwadrant"; hier is het hetzelfde punt. Klik.
16. Druk op {{key:Enter}}.

De nieuwe lijn loopt van het midden van de linkerzijde en stopt precies op de cirkel.

## Eén klik zonder snap

Houd {{key:Shift}} ingedrukt terwijl u klikt. Objectsnaps worden dan voor die klik genegeerd, en het punt komt precies waar het kruishaar staat (of langs de Ortho-richting, als Ortho aan staat).

## Ortho

{{ui:Ortho}} ({{key:F8}}) houdt het volgende punt recht over of recht omhoog en omlaag vanaf het basispunt. Het geldt voor klikken en voor directe afstandsinvoer (een los getal dat u bij de prompt typt). Objectsnaps winnen van Ortho: als er een snapmarkering verschijnt, gaat de klik naar de snap.

## Polaire tracering

{{ui:Polair}} ({{key:F10}}) is Ortho bij meer hoeken. Terwijl een opdracht een basispunt heeft (het laatste punt van een lijn, het basispunt van een verplaatsing), springt de aanwijzer vast wanneer hij in de buurt komt van een straal vanaf dat punt onder een veelvoud van de polaire stap. Er verschijnt een stippellijn, en een label bij het kruishaar leest `Polar: 1200 < 30°`. Klik om dat punt te gebruiken, of typ een afstand: `1200` gaat precies 1200 langs de straal.

De stap is 90° totdat u hem wijzigt: typ {{cmd:POLARANG}}, druk op {{key:Enter}}, en typ `30` (of 45, 22.5, 15 …). Polair en Ortho sluiten elkaar uit: de ene aanzetten zet de andere uit.

## Objectsnaptracering

{{ui:Track}} ({{key:F11}}) lijnt de aanwijzer uit op snappunten waar u op bent blijven rusten, zodat u een punt op gelijke hoogte met de ene hoek en boven de andere kunt kiezen zonder hulplijnen te tekenen.

1. Zet {{ui:Snap}} en {{ui:Track}} aan, en start een opdracht die om een punt vraagt (`L`).
2. Laat de aanwijzer een halve seconde op een snappunt rusten, zoals een hoek, zonder te klikken. Een klein kruis markeert het: het is vastgelegd. Rust er opnieuw op om het los te laten.
3. Beweeg de aanwijzer recht weg ervan, horizontaal of verticaal. Een stippellijn volgt de aanwijzer en het label leest `Track: 600 < 90°`. Klik, of typ een afstand.
4. Leg een tweede punt vast, en beweeg naar waar de verticale door het ene punt de horizontale door het andere kruist: de aanwijzer snapt naar dat kruispunt (`Track: where two lines meet`).

Met {{ui:Polair}} ook aan, volgen vastgelegde punten elke poolhoek. Tot zeven punten worden bewaard, tot de opdracht eindigt. {{key:Shift}} zet tracering voor één klik uit, net als snaps.

## Raster

{{ui:Raster}} ({{key:F7}}) toont een rooster van lijnen achter de tekening, met zwaardere lijnen elke vijfde lijn; de afstand verandert wanneer u zoomt. Het is alleen een hulp totdat u {{ui:Rastersnap}} ({{key:F9}}) aanzet: dan landen klikken op het dichtstbijzijnde rasterpunt, tenzij een objectsnap het punt eerder neemt.

## Functietoetsen op uw computer

{{key:F9}} is Rastersnap, {{key:F10}} is Polair en {{key:F11}} is Tracering.

:::mac
Op een Mac regelen F3, F7, F8 en F9 meestal Mission Control en media. Houd **fn** ingedrukt met de toets, of zet standaard functietoetsen aan, zoals beschreven in [Toetsen, muizen en trackpads](common:keys). De knoppen in de statusbalk werken altijd.
:::

:::firefox
In Firefox is F7 ook de toets voor bladeren met cursor. Als Firefox vraagt of bladeren met cursor aan moet, kies **Nee**. Gebruik de knop {{ui:Raster}} als de vraag steeds terugkomt.
:::

:::touch
Op een touchscreen is er geen zweven, dus de snapmarkering verschijnt alleen waar uw vinger raakt. Zoom dicht in voor kleine doelen, of typ coördinaten.
:::

## Veelvoorkomende fouten

- **De klik ging naar het verkeerde punt.** Kijk naar het markeringslabel voordat u klikt: Eindpunt wint van Middelpunt van lijn wanneer beide dichtbij zijn. Zoom in, of vink snaps uit die u niet nodig heeft.
- **Er verschijnt geen markering.** {{ui:Snap}} staat uit, of de snap die u wilt is uitgevinkt, of het object zit op een laag die uit staat of bevroren is.
- **Snaps pakken het verkeerde in een drukke tekening.** Zoom in. De snapafstand wordt in schermpixels gemeten, dus inzoomen maakt hem kleiner op de tekening.
- **Verwachten dat Shift een rechte lijn geeft.** In CadCraft zet Shift snaps voor één klik uit. Gebruik {{ui:Ortho}} voor rechte lijnen.
- **Verwachten dat punten op rasterpunten landen.** Zet {{ui:Rastersnap}} ({{key:F9}}) aan, of typ coördinaten voor ronde getallen.
