---
title: Registra diversos escaneigs en un de sol
summary: Col·loqueu escaneigs presos des de posicions diferents en un mateix marc amb parells de punts marcats o destins escrits, refineu-los amb ICP, deseu el registre com a projecte i exporteu el núvol registrat com a LAS o E57. L'ordre és REGISTERSCANS.
keywords: registra, registre, escaneigs, núvol de punts, icp, punt més proper iteratiu, destins, parells de punts, transformació rígida, alinea, fusiona, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Què fareu

Diversos escaneigs d'un mateix lloc (cadascun des de la seva pròpia posició de l'escàner) comencen amb les seves pròpies coordenades. Registreu-los: doneu a cada escaneig una única col·locació perquè tots quedin dins d'un mateix marc, i després deseu això com a projecte i escriviu el núvol registrat com un sol fitxer LAS o E57.

## Col·loqueu els escaneigs

1. Obriu el diàleg (escriviu `REGISTERSCANS` (o `REGSCAN`)). {{ui:Afegeix escaneigs…}} accepta fitxers LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ, o només cal deixar-los caure sobre el diàleg. Els escaneigs que usen unitats diferents es rebutgen amb una nota: convertiu-ne un primer.
2. Trieu {{ui:Escaneig a moure}} i {{ui:Col·loca contra}}. La imatge mostra tots els escaneigs del marc tal com són ara, cadascun d'un color: {{ui:Planta}}, {{ui:Davant}} o {{ui:Perfil}}; arrossegueu per desplaçar-vos i useu la roda per fer zoom.
3. **Per parells de punts.** Feu clic a {{ui:Trieu un parell}}, després en un punt de l'escaneig que cal moure, i després en el mateix lloc d'un altre escaneig (una cantonada, una marca, el peu d'una columna). Feu-ho almenys tres vegades, amb punts que no estiguin en línia i que estiguin separats. Feu clic a {{ui:Col·loca per parells}}: l'escaneig es col·loca amb un ajust de mínims quadrats, i **Restant** mostra quant falla encara cada parell. Un parell amb un número gran és una mala selecció: suprimiu-lo amb la creu i torneu a col·locar.
4. **Per destins.** Si coneixeu les coordenades reals d'un punt (destins topogràfics), feu clic a {{ui:Trieu i després escriviu el destí}}, feu clic al punt del seu escaneig i escriviu la X, la Y i la Z del destí a la fila. Els parells i els destins escrits es poden barrejar lliurement.

## Refineu amb ICP

Els parells donen una col·locació aproximada. {{ui:Refina}} mou l'escaneig fins que les seves superfícies coincideixen amb les de l'altre escaneig: primer **punt a punt**, i després **punt a pla**. La taula enumera cada pas amb el seu error i quants punts han coincidit; la línia de sobre dibuixa la baixada de l'error. {{ui:Atura}} acaba l'execució després del pas en curs i conserva el que s'ha aconseguit. {{ui:Desfés}} desfà tota l'execució (o l'última col·locació); {{ui:Restableix}} torna l'escaneig a les coordenades del seu fitxer.

Perquè vagi ràpid en un portàtil, l'ICP treballa amb una part reduïda dels punts ({{ui:Punts utilitzats}}, de 5,000 a 60,000) i ignora les coincidències més lluny de {{ui:Distància de coincidència màxima}} (per defecte, el 5% de la mida de l'escaneig, i es redueix a mesura que s'estabilitza). Primer necessita una col·locació aproximada: els escaneigs que apenes se solapen indiquen que no es poden fer coincidir. Les superfícies només planes o només rectes no poden corregir una posició al llarg d'elles mateixes; en aquest cas, afegiu parells.

## Deseu i exporteu

- {{ui:Desa el projecte}} escriu un fitxer petit `.ccscans.json`: el nom de cada escaneig, la seva mida i una empremta dels seus primers 64 KB, amb la seva transformació. No conté punts. {{ui:Obre el projecte…}} troba els fitxers dels escaneigs a partir d'aquestes referències (els fitxers han d'haver estat afegits abans) i restaura cada transformació.
- {{ui:Exporta LAS}} i {{ui:Exporta E57}} escriuen un sol fitxer amb tots els escaneigs a la seva posició registrada. Els punts dels originals no es reescriuen mai: la transformació s'aplica en sortir. Amb {{ui:Llegeix tots els punts dels fitxers}} activat, cada fitxer es torna a llegir per a cada punt (fins a 20 milions per escaneig); desactivat, només s'escriuen els punts que es mostren al visor.
- {{ui:Mostra el núvol registrat}} (CadCraft) escriu el LAS i l'adjunta sota el dibuix a les seves pròpies coordenades, com qualsevol núvol.

:::note
No es puja res. El registre treballa en les unitats dels mateixos fitxers i manté els mil·límetres: un LAS s'escriu amb una escala que s'ajusta (fins a 0.1 mm), i un E57 amb doubles. Un sistema de coordenades només es porta al LAS quan tots els escaneigs indiquen el mateix codi EPSG. L'escriptor E57 és propi; es verifica llegint els seus fitxers amb aquest lector i amb libE57Format.
:::
