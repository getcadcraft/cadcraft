---
title: Copia, enganxa i duplica
summary: Copia objectes al porta-retalls de CadCraft, enganxa'ls on feu clic o al mateix lloc, duplica'ls amb el punter, i porta treball d'un altre dibuix o pestanya.
keywords: copia, retalla, enganxa, enganxa al mateix lloc, duplica, porta-retalls, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, entre dibuixos, una altra pestanya, punt base
from: 4b9f29d3
---

## Què aprendreu

Com copiar objectes al porta-retalls, enganxar-los on feu clic o a les seves coordenades pròpies, duplicar-los amb el punter, retallar-los i portar-los a un altre dibuix. Tot això també és al grup {{ui:Edita}} de la barra d'eines: {{ui:Copia}}, {{ui:Enganxa}} i el menú {{ui:Més}}.

## Copia i enganxa on feu clic

1. Seleccioneu els objectes: feu clic a ells, o arrossegueu una finestra.
2. Premeu {{key:Mod+C}}, o feu clic a {{ui:Copia}} al grup {{ui:Edita}}. La línia d'ordres diu quants objectes s'han copiat. Continuen seleccionats.
3. Premeu {{key:Mod+V}}, o feu clic a {{ui:Enganxa}}. La còpia apareix al cursor, penjant de la cantonada inferior esquerra dels objectes copiats.
4. Feu clic on ha d'anar aquesta cantonada, o escriviu un punt com `2000,500` i premeu {{key:Enter}}. Els ajustos a objectes i l'orto funcionen com sempre.

Els objectes enganxats queden seleccionats, de manera que els podeu moure o canviar tot seguit. Un {{key:Mod+Z}} n'elimina tota l'enganxada.

:::tip
Voleu que la còpia pengi d'un punt que trieu, com la cantonada d'un mur? Escriviu `COPYBASE`, feu clic al punt base, seleccioneu els objectes i premeu {{key:Enter}}. Enganxar després situa aquell punt on feu clic. Per fer que totes les còpies pengin del seu centre en lloc de la cantonada inferior esquerra, canvieu {{ui:Punt d'enganxament}} a la [configuració de CadCraft](topic:settings).
:::

## Enganxa al mateix lloc

Premeu {{key:Mod+Shift+V}}, o trieu {{ui:Enganxa al mateix lloc}} al menú {{ui:Més}}. La còpia entra exactament a les coordenades des d'on es va copiar, sense cap clic. Useu-ho per portar objectes a un altre dibuix al mateix lloc, o d'un full a un altre full.

## Duplica i mou

1. Seleccioneu els objectes.
2. Premeu {{key:Mod+D}}, o trieu {{ui:Duplica i mou}} al menú {{ui:Més}}.
3. Una còpia es posa sobre l'original i es mou amb el punter. Feu clic on ha d'anar. També podeu escriure un desplaçament com `@0,-600`, o una distància cap al cursor.

{{key:Esc}} abans del clic no deixa res enrere. El duplicat és un sol pas de desfer i no toca el porta-retalls.

## Retalla

Premeu {{key:Mod+X}}, o trieu {{ui:Retalla}} al menú {{ui:Més}}. Els objectes van al porta-retalls i s'eliminen del dibuix, en un sol pas de desfer. Torneu-los a enganxar amb {{key:Mod+V}} o {{key:Mod+Shift+V}}.

## Entre dibuixos i pestanyes

El porta-retalls conserva la seva còpia quan obriu un altre dibuix, i és compartit per totes les pestanyes de CadCraft d'aquest navegador. Copieu en una pestanya i després premeu {{key:Mod+V}} en una altra.

- Els blocs que fan servir els objectes hi arriben amb ells. Si el dibuix on enganxeu ja té un bloc amb el mateix nom, s'utilitza la seva pròpia definició, com fa AutoCAD.
- Les capes que fan servir els objectes s'afegeixen, amb el color i els ajustos que tenien.
- La còpia no es reescala quan els dos dibuixos fan servir unitats diferents: CadCraft ho indica, i després podeu fer servir {{cmd:SCALE}}.
- Les finestres gràfiques es queden al seu full; no s'inclouen en una còpia.

:::note
El porta-retalls és propi de CadCraft. No podeu enganxar objectes de CadCraft en un altre programa, ni enganxar des d'un altre programa a CadCraft: deseu com a DWG o DXF. Una còpia molt gran pot ser massa gran per compartir-la entre pestanyes; la línia d'ordres aleshores diu només que aquesta pestanya la pot enganxar.
:::

## Errors habituals

- **{{key:Mod+V}} ha enganxat text a la línia d'ordres.** Havíeu escrit alguna cosa allà, de manera que les tecles afectaven el text. Premeu {{key:Esc}} per netejar-lo, i després premeu {{key:Mod+V}} una altra vegada.
- **No ha passat res, i la barra d'estat diu que acabeu l'ordre actual.** Hi ha una altra ordre en marxa. Premeu {{key:Esc}} primer.
- **L'enganxada ha caigut lluny.** Pengia de la cantonada inferior esquerra del que vau copiar, que pot ser un objecte llunyà que heu seleccionat per error. Useu {{ui:Enganxa al mateix lloc}}, o copieu amb `COPYBASE`.
- **"Res enganxat", amb un motiu.** El que una altra pestanya havia deixat al porta-retalls no es pot llegir (estava malmès, o modificat a mà). Torneu a copiar els objectes.

Vegeu la llista completa de tecles a [Teclat i ratolí](topic:keyboard), i cada indicació a la [Referència d'ordres](topic:commands#clipboard).
