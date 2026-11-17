---
title: "Standaardbeleide: stel waarmee 'n nuwe tekening begin"
summary: Sê eenmalig watter eenhede, lengteformaat, presisie, tekshoogte en bladpapier 'n nuwe tekening mee begin, vir metriese en imperiale werk, en deel die beleide oor die kantoor as 'n klein lêer.
keywords: verstek, verstekke, standaardbeleide, beleid, kantoorstandaard, kantoorverstekke, sjabloon, nuwe tekening, eenhede, insunits, lengteformaat, argitektonies, presisie, luprec, teksthoogte, bladpapier, a1, deel, uitvoer, invoer, json
from: 7b80fd13
---

## Wat jy gaan doen

Sê vir CadCraft waarmee 'n nuwe tekening moet begin, sodat niemand in die kantoor UNITS hoef te loop en dieselfde dinge elke keer hoef te verander nie. Dit is 'n byvoegsel: dit is af totdat jy dit aanskakel, en 'n beleid wat jy nie stel nie, laat CadCraft se eie verstek presies soos dit is.

:::note
Dit is verstekke vir **nuwe** tekeninge en **nuwe** blaaie. 'n Tekening wat jy reeds begin het, word nie verander nie, en ook nie 'n tekening wat jy oopmaak nie.
:::

## Stappe

1. Maak Instellings oop, gaan na {{ui:Byvoegings}} en skakel {{ui:Standaardbeleide}} aan.
2. In Instellings, maak die **CadCraft**-oortjie oop en kies {{ui:Standaardbeleide}} in die lys aan die linkerkant.
3. Stel die beleide wat jy wil hê. Elkeen begin op **CadCraft s'n**. 'n Beleid met 'n **Metries**- en 'n **Imperiaal**-blokkie neem een waarde vir elke soort tekening; vul net die wat jy nodig het in.
4. Daar is geen Stoor-knoppie nie: elke verandering word gestoor soos jy dit maak.
5. Begin 'n nuwe tekening. Dit het die eenhede, lengteformaat, presisie en teksthoogte wat jy gestel het, en sy eerste nuwe blad is op die papier wat jy gekies het.

## Die beleide

- **Eenhede van 'n nuwe tekening**: geen, millimeter, sentimeter, meter, duim of voet.
- **Lengteformaat** en **Lengte-presisie**: wat die UNITS-opdrag stel, vir 'n nuwe tekening.
- **Hoogte van nuwe teks**, in tekeningeenhede.
- **Papier van 'n nuwe blad**: die papier wat Nuwe blad gebruik.
- **Annotasiegroottes op papier** (Instellings › Globaal › Standaardbeleide): die kantoor se hoogtes in millimeter soos gedruk. CadCraft gebruik die een vir notas en etikette: {{cmd:ANNOSCALE}} stel die hoogte waarmee nuwe teks begin op daardie hoogte by die annotasieskaal. Sien [Eenhede, papiere en skale](topic:units-papers-scales#annotate-by-scale).

'n Tekening in duim of voet gebruik die Imperiale waardes; enige ander tekening gebruik die Metriese een. 'n Tekening sonder eenhede gebruik die eenheidstelsel wat in Instellings › Globaal › Standaardbeleide gestel is, of Metries as niks gestel is nie.

## Deel dit oor die kantoor

1. In Instellings, maak die **Globaal**-oortjie oop en kies {{ui:Standaardbeleide}}.
2. Klik {{ui:Stoor na 'n lêer}}. Jy kry 'n klein lêer wat eindig op `.ccdefaults.json`.
3. Op 'n ander rekenaar, skakel die byvoegsel aan, maak dieselfde plek oop en klik {{ui:Laai uit 'n lêer}}. Die lêer se beleide vervang die op daardie rekenaar.

Een lêer hou die beleide van elke CadCraft-app, so dieselfde lêer werk in BimCraft.

## Goed om te weet

- Daar is geen beleid vir 'n blad se skaal nie: 'n nuwe blad se aansig word by die tekening gepas, en jy stel sy skaal op die blad.
- Daar is geen beleid vir 'n maatstyl nie: 'n nuwe tekening het geen benoemde maatstyle nie. Stel mate op met DIMSTYLE, of begin met 'n tekening wat joune het.
- Die lêer is gewone, oop JSON. 'n Beleid wat die lêer noem wat hierdie weergawe nie ken nie, word uitgelaat en in die boodskap genoem; die res laai steeds.
- Beleide word in hierdie blaaier gehou, nie in die tekening nie. Skakel die byvoegsel af en alles is weer CadCraft s'n.
