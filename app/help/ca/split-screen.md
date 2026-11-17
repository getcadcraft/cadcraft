---
title: Dividir la pantalla
summary: Mostrar el dibuix en dos, tres o quatre panells amb el seu propi zoom, posar un full al costat del model i obrir diversos dibuixos un al costat de l'altre.
keywords: dividir, dividir la pantalla, panells, vports, finestres gràfiques, en mosaic, mosaic, un al costat de l'altre, apilat, dos dibuixos, pestanyes, pestanyes de document, comparar, divisor, model i full, diversos dibuixos, dibuixos oberts
from: ee2f034b
---

## Què aprendreu

Com veure un dibuix en diversos panells alhora, cadascun amb el seu propi zoom, i com obrir diversos dibuixos i veure'ls un al costat de l'altre.

## Dividir un dibuix en panells

1. Obriu un dibuix, o dibuixeu unes quantes línies i cercles.
2. Obriu {{ui:Vista}} › {{ui:Més}} i trieu {{ui:Divideix un al costat de l'altre}} (o escriviu {{cmd:VPORTS}}, després `2` i després {{key:Enter}}).

L'àrea de dibuix es divideix en dos panells, tots dos mostrant la mateixa vista. El panell actiu té un marc blau i rep la creueta.

3. Feu clic a l'altre panell. Esdevé l'actiu. (Aquest primer clic només canvia de panell; torneu a fer clic per triar o dibuixar.)
4. Feu zoom amb la roda. Només aquest panell fa zoom.
5. Arrossegueu la línia entre els panells per fer-ne un més ample. {{key:Home}} sobre un divisor enfocat el torna al mig.

{{cmd:VPORTS}} també accepta `3` (dos panells a un costat i un de gran a l'altre: `L` o `R`), `4`, i `SI` per tornar a tenir un sol panell. La vista del panell actiu omple llavors l'àrea. En un full, {{cmd:VPORTS}} afegeix una finestra gràfica al full (com a AutoCAD); hi escriviu {{cmd:SPLIT}}, o useu el menú Vista.

## Dibuixar d'un panell a un altre

1. Dividiu un al costat de l'altre, i feu zoom a cada panell sobre una cantonada diferent del dibuix.
2. Escriviu `L` i premeu {{key:Enter}}, i feu clic al primer punt al panell de l'esquerra.
3. Feu clic una vegada al panell de la dreta per activar-lo, i després feu clic al segon punt allà.

La línia va entre els dos llocs. Una ordre continua mentre canvieu de panell, i la goma es mostra a tots els panells.

## El model al costat d'un full

1. Dividiu un al costat de l'altre.
2. Feu clic al panell de la dreta i després a la pestanya d'un full sota el dibuix.

El panell de la dreta mostra el full; l'esquerre continua mostrant el model. Cada panell manté el seu propi espai, de manera que podeu dibuixar sobre el model i veure com la finestra gràfica del full la segueix.

## Diversos dibuixos en una finestra

1. Obriu un dibuix. Després obriu-ne un altre (o premeu {{ui:Nou…}}).

Cada dibuix s'obre a la seva pròpia pestanya sobre l'àrea de dibuix. Feu clic a una pestanya per canviar; la línia d'ordres, els taulers i les accions de desfer segueixen el dibuix a què canvieu. {{key:Mod+C}} en un dibuix i {{key:Mod+V}} en un altre copia objectes entre tots dos.

2. Feu clic a {{ui:Mosaic dels dibuixos oberts un al costat de l'altre}} (la icona de divisió al final de les pestanyes), o a la icona apilada al costat.

Cada panell mostra ara un dels dibuixos oberts, fins a quatre. Feu clic a un panell per treballar en aquell dibuix.

3. Feu clic a {{ui:×}} d'una pestanya per tancar aquell dibuix. Si té canvis sense desar, CadCraft us ho pregunta abans.

:::tip
Si obriu un dibuix mentre la finestra només conté un dibuix nou i sense tocar, s'utilitza aquella pestanya en lloc d'afegir-ne una.
:::

## Desplaçar i fer zoom junts

Per comparar dues revisions, poseu-les en mosaic un al costat de l'altre i després feu clic a {{ui:Enllaça les vistes dels panells}} (la icona d'enllaç al final de les pestanyes), o trieu-ho a {{ui:Vista}} › {{ui:Més}}, o escriviu {{cmd:LINKVIEWS}} i `ON`. Ara un desplaçament o un zoom en un panell mou tots els panells que mostren el model (o tots els que mostren un full) al mateix lloc, de manera que els dos dibuixos continuen alineats. {{cmd:LINKVIEWS}} `OFF` permet que cada panell es torni a moure pel seu compte.

## Errors habituals

- **El meu clic no ha fet res.** Ha activat aquell panell. Torneu a fer clic per triar o dibuixar.
- **La roda ha fet zoom al panell equivocat.** La roda fa zoom al panell que hi ha sota el punter i l'activa.
- **Els panells han tornat a ser un.** En obrir un dibuix es mostra tal com es va desar; un dibuix desat sense panells s'obre en un de sol.
- **Sortir de la pàgina avisa de canvis sense desar que no puc veure.** Una altra pestanya conté un dibuix amb canvis. Canvieu-hi i deseu-lo, o sortiu sense desar.
