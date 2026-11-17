---
title: Slimme wanden, deuren en ramen tekenen in 2D
summary: Teken wanden zoals een polylijn, sluit ze netjes aan en zet deuren en ramen erin die met de wand meebewegen. Alles in 2D, zonder 3D-model.
keywords: wand, wanden, WALL, WA, deur, DOOR, DR, raam, WINDOW, WN, DELOPENING, slimme wand, plattegrond, zwaai, scharnier, opening
from: 45845d49
---

Wanden hier zijn 2D-tekenobjecten. Ze maken geen 3D-model, dus een plattegrond blijft zo licht als een lijntekening. Voor een gebouwmodel gebruikt u BimCraft.

## Wanden tekenen

Typ `WALL` (`WA`), of kies {{ui:Wand}} in het menu {{ui:Meer}} van de groep {{ui:Tekenen}}, en klik dan op punten zoals u voor een polylijn zou doen. Druk op {{key:Enter}} om te eindigen, of typ `C` om de ruimte te sluiten.

- `T` stelt de dikte in.
- `J` bepaalt waar uw klikken op volgen: het midden van de wand, of de linker- of rechterzijde.
- `F` stelt de vulling in: geen, massief of arcering.

Hoeken worden vanzelf in verstek gezet. Een wand die eindigt binnen de dikte van een andere wand, sluit daar netjes als een T op aan, en wanden die elkaar kruisen, openen zich naar elkaar toe. De verbindingen worden met de wanden opgeslagen. Voor rechthoeken, veelhoeken, bogen, splitsen, vergrendelingen en de rest, zie "Wandvormen, sneden, offsets en vergrendelingen voor 2D-wanden".

## Deuren en ramen toevoegen

Typ `DOOR` (`DR`) of `WINDOW` (`WN`) en klik op een wand. Een deur zwaait naar de kant van de wand waarop u klikt. `W` stelt de breedte in, `Y` het type en `H` de scharnierzijde. Blijf klikken om er meer te plaatsen, en druk op {{key:Enter}} om te eindigen. Deuren kunnen enkel, dubbel, schuivend of een open doorgang zijn. Ramen kunnen vast, draairaam of schuif zijn.

## Ze aanpassen

Selecteer een wand om zijn grips te zien:

- De eindgrips rekken de wand uit. Wanden die eraan verbonden zijn, volgen.
- De middelste grip verplaatst de wand.
- Een grip op een opening schuift die langs de wand.
- De pijlen keren het scharnier van een deur en de zwaairichting om.

Eigenschappen toont de dikte, de vulling en elke opening: type, breedte, positie, scharnier, zwaairichting, getoond open of dicht, en {{ui:Verwijderen}}. `DELOPENING` haalt de opening weg die het dichtst bij waar u klikt, ligt.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` en `ERASE` werken zoals gewoonlijk. Deuren en ramen gaan mee met hun wand, verbonden wanden behouden hun verbindingen, en één keer {{ui:Ongedaan maken}} haalt alles terug.

## In andere programma's

Elke wand wordt opgeslagen als een gewoon blok, zodat andere CAD-programma's hem correct tonen en kunnen verplaatsen, maar ze kunnen hem niet als wand bewerken. `EXPLODE` maakt van een wand gewone lijnen en bogen, en dan is het geen wand meer.
