---
title: Hulplijnen en stralen
summary: Teken lijnen die zonder einde doorlopen (XLINE) of vanaf een punt één kant op (RAY) om dingen uit te lijnen, en snijd ze bij tot gewone lijnen.
keywords: xline, ray, hulplijn, hulplijnen, oneindige lijn, hulplijn, referentielijn, bissectrice, offsetlijn, indelingslijnen, xl
from: b6c398bc
---

## Wat u leert

Hoe u hulplijnen tekent om dingen uit te lijnen terwijl u tekent: door twee punten, waterpas of rechtop, onder een hoek, precies midden tussen twee richtingen, of op een vaste afstand van een lijn. En hoe u ze bijsnijdt tot gewone lijnen wanneer ze hun werk hebben gedaan.

## Twee soorten

- Een **hulplijn** ({{cmd:XLINE}}) loopt aan beide kanten zonder einde door.
- Een **straal** ({{cmd:RAY}}) begint in een punt en loopt aan één kant zonder einde door.

Beide worden over het hele tekengebied getekend, ongeacht de zoom, in gesplitst scherm en in viewports op een blad. {{ui:Alles tonen}} laat ze weg, zodat zoomen naar de tekening nog steeds past op wat u hebt getekend.

## Hulplijnen tekenen

1. Klik {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Hulplijn}}, of typ `XL` en druk op {{key:Enter}}.
2. Klik een punt. Elke klik daarna voegt een hulplijn toe door het eerste punt en het punt dat u aanklikt.
3. Druk op {{key:Enter}} om te eindigen.

In plaats van het eerste punt kunt u een optie typen:

| Optie | Wat het doet |
|---|---|
| `H` (Hor) | Waterpas lijnen, één door elk punt dat u aanklikt. |
| `V` (Ver) | Rechtopstaande lijnen door elk punt. |
| `A` (Hoek) | Lijnen onder een hoek die u typt (graden, tegen de klok in vanaf de X-as), door elk punt. `R` (Referentie) meet de hoek vanaf een lijn die u kiest. |
| `B` (Bissect) | Klik op de hoek, en daarna op een punt langs één zijde: elk punt dat u langs de andere zijde aanklikt, voegt de lijn precies halverwege de twee toe. |
| `O` (Offset) | Typ een afstand, kies een lijn en klik op de zijde: een hulplijn die die afstand ervan af ligt, evenwijdig. `T` (Door) plaatst hem in plaats daarvan door een punt dat u aanklikt. De afstand wordt onthouden voor de volgende keer. |

## Stralen tekenen

1. Klik {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Straal}}, of typ `RAY` en druk op {{key:Enter}}.
2. Klik waar de stralen beginnen.
3. Klik per straal een punt waar hij doorheen moet lopen. Druk op {{key:Enter}} om te eindigen.

## Erop snappen en bijsnijden

Hulplijnen en stralen gebruiken de snaps Dichtstbijzijnde, Loodrecht en Snijpunt. Ze hebben geen uiteinden en geen midden, dus Eindpunt en middelpunt van lijn vinden daarop niets.

Ze worden gesneden en snijden zoals andere lijnen in {{cmd:TRIM}} en {{cmd:BREAK}}:

- Snijd één uiteinde van een hulplijn af, dan wordt het een straal die bij de snede begint.
- Snijd het verre deel van een straal af, dan wordt het een gewone lijn.
- Breek een hulplijn op één punt, dan krijgt u twee stralen.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} en {{cmd:STRETCH}} werken ook op hen. Een venster kiest ze nooit, omdat geen venster een oneindige lijn geheel kan bevatten; een kruisvenster of een klik wel.

:::note
Een DWG (elke versie) en een DXF 2000 bewaren ze als hulplijnen. DXF R12 kent ze niet, dus daar worden het lijnen over de tekening, en het opslaan meldt dat. Een plot of PDF tekent ze alleen over wat wordt afgedrukt.
:::
