---
title: Etikette: kenmerke wat skedules voed
summary: Definieer 'n etiket (sy soort, die waardes wat dit mag aanneem, die blokke waarop dit van toepassing is), stel dit op blokverwysings, en lys die verwysings as 'n skedule wat jy as CSV kan stoor.
keywords: etikette, etiket, kenmerk, skedule, datauittrekking, eienskap, brandgradering, keuselys, blokverwysing, TAGS, csv
from: 9b90bacc
---

'n **Etiket** is 'n blokkenmerk met 'n definisie: watter soort waarde dit hou, watter waardes toegelaat word, en op watter blokke dit van toepassing is. Die waardes is gewone blokkenmerke, so enige ander program lees hulle en {{cmd:ATTEDIT}} wys hulle. Net die definisies is nuut, en hulle word in die tekening bewaar.

## Definieer en stel

Tik {{cmd:TAGS}} en kies:

- {{ui:Definieer}}: 'n naam (letters, syfers, spasie, `_ . -`), 'n soort (`text`, `number`, `integer`, `yesno`, `length`, `angle`), die toegelate waardes geskei deur `;` (laat leeg vir enige), en die blokname waarop dit van toepassing is (`DOOR*` pas by elke blok wat met DOOR begin; leeg beteken elke blok).
- {{ui:Stel}}: met blokverwysings gekies, tik `FireRating=60 min; Width=850`. 'n Waarde buite die toegelate lys, of nie 'n getal vir 'n getalsetiket nie, word geweier en gesê. Een ontdoenstap. 'n Blok wat nie die kenmerk het nie, kry dit as 'n verborge kenmerk.
- {{ui:Skedule}}: elke verwysing na 'n blok waarop 'n etiket van toepassing is, opsioneel gegroepeer volgens 'n etiket of bloknaam, gedruk en as CSV gestoor.
- {{ui:Verwyder}}: vergeet 'n definisie; die waardes bly op die verwysings.

As jy 'n etiket hernoem, hernoem dit sy waardes op elke verwysing. Etiketnamme is nie hooflettergevoelig nie, soos kenmerknaampies ook nie is nie.
