---
title: Taggar: attribut som matar förteckningar
summary: Definiera en tagg (dess slag, de värden den får ha och de block den gäller för), sätt den på blockreferenser och lista referenserna som en förteckning du kan spara som CSV.
keywords: taggar, tagg, attribut, förteckning, dataextrahering, egenskap, brandklass, valslista, blockreferens, TAGS, csv
from: 9b90bacc
---

En **tagg** är ett blockattribut med en definition: vilken sorts värde det håller, vilka värden som är tillåtna och vilka block det gäller för. Värdena är vanliga blockattribut, så vilket annat program som helst läser dem och {{cmd:ATTEDIT}} visar dem. Bara definitionerna är nya, och de sparas i ritningen.

## Definiera och sätt

Skriv {{cmd:TAGS}} och välj:

- {{ui:Definiera}}: ett namn (bokstäver, siffror, mellanslag, `_ . -`), ett slag (`text`, `number`, `integer`, `yesno`, `length`, `angle`), de tillåtna värdena åtskilda av `;` (lämna tomt för valfria värden), och namnen på de block den gäller för (`DOOR*` matchar varje block vars namn börjar med DOOR; tomt betyder alla block).
- {{ui:Samling}}: med blockreferenser markerade skriver du `FireRating=60 min; Width=850`. Ett värde utanför den tillåtna listan, eller något som inte är ett tal för en taggtyp för tal, avvisas och det sägs. Ett ångra-steg. Ett block som inte har attributet får det som ett dolt attribut.
- {{ui:Förteckning (C)}}: varje referens till ett block som en tagg gäller för, eventuellt grupperad efter en tagg eller ett blocknamn, utskriven och sparad som CSV.
- {{ui:Ta bort (R)}}: glömmer en definition; värdena finns kvar på referenserna.

Att byta namn på en tagg byter namn på dess värden på varje referens. Taggnamn skiljer inte på versaler och gemener, precis som attributnamn inte gör det.
