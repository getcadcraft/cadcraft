---
title: Dibuixos escanejats i el traçat
summary: Inseriu un full escanejat, escaleu-lo i quadreu-lo, netegeu-lo, esborreu-ne parts, ajusteu-vos a les seves línies i traceu-lo en línies i arcs.
keywords: escaneig, dibuix escanejat, ràster, tiff, jpeg, png, escala, alinea, quadra, elimina taques, llindar, blanc i negre, retalla, esborra, traça, vectoritza, referència, arcs, trama, dibuixos en paper, dibuixos antics, scanattach, scantrace
from: 36227e5b
---

## Del full de paper als objectes del dibuix

Un dibuix escanejat és una imatge. CadCraft conserva la imatge que li heu donat i no la canvia mai: cada pas de neteja en crea una de nova, amb un pas de desfer per a cadascun, i {{cmd:SCANINFO}} llista el fitxer original i els passos fets des de llavors. No s'envia res enlloc i cap model entrenat no endevina res: la neteja i el traçat són processament d'imatges corrent, i s'executen al vostre ordinador.

1. **Inseriu-lo.** {{cmd:SCANATTACH}} llegeix un PNG, un JPEG, un TIFF (una pàgina, o totes les pàgines d'un fitxer de diverses pàgines) o una pàgina PDF que sigui una imatge. Demana la pàgina, la cantonada inferior esquerra i l'amplada. Per a una pàgina PDF també demana quants píxels per polzada s'han de fer servir per dibuixar-la.
2. **Escaleu-lo.** {{cmd:SCANSCALE}}: trieu dos punts a l'escaneig, i després escriviu la distància real entre ells. El full s'escala respecte al primer punt.
3. **Alineu-lo.** {{cmd:SCANALIGN}}: trieu dos punts de l'escaneig i els dos llocs on pertanyen; el full es mou i gira per encaixar, i també s'escala tret que respongueu No.
4. **Quadreu-lo.** {{cmd:SCANDESKEW}} mesura l'angle en què estan les llargues línies del full, el mostra amb el grau de certesa que té. Accepteu-lo, o escriviu el vostre, i el full es gira. Un full amb poques llargues línies rep un avís: comproveu l'angle abans d'acceptar-lo.
5. **Netegeu-lo.** {{cmd:SCANCLEAN}} posa el full en blanc i negre (Auto iguala primer el paper; Adaptive segueix més de prop els canvis del paper; Level és un sol número per a tot el full) i elimina les taques fins a la mida que establiu.
6. **Retalleu i esborreu.** {{cmd:SCANCROP}} conserva una finestra. {{cmd:SCANERASE}} esborra un rectangle, un polígon o un llaç (premeu i arrossegueu): segells, notes, una marca de tassa de cafè.

La imatge netejada és el que conté un DWG desat (una IMAGE i la seva IMAGEDEF, amb el fitxer de la imatge al costat del dibuix, com per a qualsevol imatge).

## Referències a les línies de l'escaneig

Amb {{cmd:RASTERSNAP}} activat (per defecte), les referències a objectes també troben les línies d'un escaneig en blanc i negre: els extrems de les línies, els seus punts mitjans, les cantonades i les interseccions, marcats amb les marques de referència habituals. La part del full que hi ha sota el punter es va traçant mentre us moveu; feu prou zoom perquè un píxel equivalgui a uns pocs píxels de pantalla. Una línia més llarga que la part que s'està traçant se segueix fins als seus extrems.

## El traçat

{{cmd:SCANTRACE}} converteix les línies del full en línies i arcs en una capa nova (SCAN-TRACE), com un sol pas de desfer, amb l'escaneig encara a sota. Establiu:

- **Tolerància:** quant pot allunyar-se una línia o un arc traçat de les línies de l'escaneig, en unitats de dibuix (l'informe també dona píxels). Una tolerància estreta segueix cada ondulació; una de més àmplia fa menys trossos, més rectes.
- **Finestra:** una cantonada del full, o tot el full.
- **Arcs:** desactivat fa només línies.
- **Restes:** el que el traçat ha deixat sense tocar es dibuixa com a caixes en una capa que podeu desactivar, o no es dibuixa.

El traçat troba el centre de cada traç, el segueix, hi ajusta línies rectes i arcs circulars, uneix els trams que es van tallar on hi creuava una altra línia, fa que les línies gairebé horitzontals i gairebé verticals siguin exactament horitzontals i verticals, i tanca les cantonades. **El text i les trames es mantenen com a ràster:** les peces de la mida de les lletres es deixen de banda, i els feixos de línies paral·leles curtes es prenen per trama i també es deixen de banda.

En acabar, diu quantes línies i arcs ha fet, la tolerància i quantes peces ha deixat com a ràster. **Això és el que han donat els píxels, a aquesta tolerància, i no és una garantia que el resultat sigui correcte.** Compareu-lo amb el full: un traçat pot perdre una línia feble, unir dues línies que estan molt juntes, o dibuixar una línia on només hi ha una taca. Netegeu primer l'escaneig (quadrat, en blanc i negre, sense taques) i el resultat és molt millor.

## Què no llegeix

Els fitxers TIFF emmagatzemats en mosaics, BigTIFF, TIFF amb compressió JPEG o deflate, codificació de fax Group 3 i colors guardats en plans separats es rebutgen amb un missatge; torneu-los a desar com a tires amb compressió LZW, PackBits, Group 4 o sense compressió. Els PNG entrellaçats també es rebutgen. Els fitxers de més de 128 MB o de més de 100 milions de píxels es rebutgen, i una finestra de traçat pot tenir com a màxim 64 milions de píxels.
