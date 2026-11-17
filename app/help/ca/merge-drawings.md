---
title: Fusiona les edicions de dues persones d'un mateix dibuix
summary: Deixeu que git, Fossil o Mercurial fusionin dues còpies d'un DWG o DXF objecte per objecte, amb la clau que CadCraft manté a cada objecte.
keywords: fusió, git, fossil, mercurial, control de versions, diff, conflicte, tres vies, cadcraft merge, clau, gitattributes, DWG, DXF
from: 71482bf9
---

Dues persones editen el mateix dibuix. Si han canviat objectes diferents, la fusió pot ser automàtica: no cal refer res a mà.

## Què ho fa possible

CadCraft dóna a cada objecte que dibuixeu una **clau** curta que no canvia mai i que no es dona mai a dos objectes. Es desa amb l'objecte al DWG o DXF (com a dades extra que altres programes conserven). La fusió busca els objectes per aquesta clau, no per la seva posició al fitxer, perquè cada programa renumera les posicions en desar. Desactiveu-ho a {{ui:Configuració}} › {{ui:CadCraft}} › Fitxers aptes per a la fusió si mai no fusioneu; els fitxers són un 10 per cent més petits.

Un dibuix desat abans que existissin les claus encara es pot fusionar: els seus objectes reben una clau segons el seu lloc al fitxer, la mateixa per a tothom que l'obre.

## Configureu-ho

Git necessita dues línies una vegada per repositori:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# una sola vegada, a cada ordinador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sense git, executeu-la a mà: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil i Mercurial prenen els mateixos tres fitxers a la seva pròpia configuració d'eina de fusió.

## Les regles

- Un objecte canviat només per una banda es pren. El mateix canvi en les dues bandes es pren una vegada.
- La mateixa propietat canviada de dues maneres és un **conflicte**: la vostra banda es queda i l'informe enumera els dos valors. Obriu el resultat, mireu aquest objecte i corregiu-lo a mà.
- Un objecte afegit en qualsevol banda es conserva. Un objecte suprimit en una banda i sense tocar a l'altra se suprimeix. Suprimit en una banda i canviat a l'altra: se suprimeix i se n'informa.
- Les capes, els blocs, els estils de text i de cota, els fulls i les vistes amb nom es fusionen de la mateixa manera. Les restriccions segueixen els objectes que esmenten.
- El resultat s'escriu en el mateix format de fitxer i versió que el vostre.

No es fusiona: l'ordre en què es dibuixen els objectes és el vostre, i després els objectes que ha afegit l'altra banda. Els canvis a la mateixa definició de bloc en les dues bandes són un conflicte, mai no es barregen. No es puja res; tot s'executa al vostre ordinador.
