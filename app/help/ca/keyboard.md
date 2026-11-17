---
title: Teclat i ratolí
summary: Totes les tecles, accions del ratolí i tecles de la línia d'ordres de l'aplicació de dibuix de CadCraft, tal com les gestiona el codi.
keywords: teclat, dreceres, tecles, ratolí, roda, desplaça, zoom, clic dret, botó del mig, f3, f7, f8, ctrl, tecla de comandament, copia, retalla, enganxa, duplica, porta-retalls, selecciona-ho tot
from: a2608a29
---

Les dreceres es mostren per al vostre ordinador. En un Mac, totes les dreceres {{key:Mod}} de sota usen la tecla Command, i la tecla Control també funciona. Com s'escriuen les tecles, i com usar les tecles F en un Mac, és a [Tecles, ratolins i trackpads](common:keys).

## Escriure ordres

| Tecla | Què fa |
|---|---|
| Qualsevol lletra, xifra o símbol | Va a la línia d'ordres, estigui on estigui el punter, tret que una caixa d'un tauler tingui el cursor |
| {{key:Enter}} | Envia el que heu escrit. En una indicació buida: repeteix l'última ordre, acaba una ordre, acaba una selecció, o accepta el valor per defecte de `<…>` |
| {{key:Space}} | El mateix que {{key:Enter}}, excepte quan CadCraft demana text (text, noms de blocs, text de cota), on escriu un espai |
| {{key:Esc}} | Cancel·la l'ordre. Sense cap ordre en curs: cancel·la un desplaçament de nansa o un quadre de selecció, i després neteja la selecció |
| {{key:Tab}} | Accepta l'ordre suggerida que es mostra a la dreta de la línia d'ordres. Sense res escrit i amb el punter sobre objectes superposats: ressalta el següent (feu clic per triar-lo) |
| {{key:Up}} {{key:Down}} | Recorre les línies que heu escrit abans (les últimes 100) |

## Dibuix i edició

| Tecla | Què fa |
|---|---|
| {{key:Mod+Z}} | Desfà l'última ordre |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Refà |
| {{key:Mod+A}} | Selecciona tots els objectes que podeu editar a la pestanya oberta ({{cmd:SELECTALL}}). Si heu escrit alguna cosa a la línia d'ordres, selecciona aquell text |
| {{key:Delete}} | Esborra els objectes seleccionats ({{cmd:ERASE}}), tret que hàgiu escrit alguna cosa a la línia d'ordres |
| {{key:Backspace}} | Esborra els objectes seleccionats quan la línia d'ordres no té el cursor; a la línia d'ordres, esborra el que heu escrit |
| {{key:Esc}} | Sense cap ordre en curs: neteja la selecció ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Desa una còpia en el format del dibuix (DWG o DXF) |
| {{key:Mod+Shift+S}} | Anomena i desa: trieu DWG o DXF, i després deseu una còpia |
| {{key:Mod+O}} | Obre un DWG o DXF |
| {{key:Mod+P}} | Traça a PDF |

Desfer, refer, seleccionar-ho tot i traçar no fan res mentre hi ha una ordre en curs: premeu {{key:Esc}} primer.

## Copia, retalla i enganxa

| Tecla | Què fa |
|---|---|
| {{key:Mod+C}} | Copia la selecció al porta-retalls ({{cmd:COPYCLIP}}). Sense res seleccionat: CadCraft demana objectes |
| {{key:Mod+X}} | Retalla: copia la selecció i després l'esborra ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Enganxa: la còpia segueix el punter; feu clic, o escriviu un punt, per deixar-la ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Enganxa al mateix lloc: a les coordenades des d'on es va copiar ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplica: una còpia de la selecció es mou amb el punter; feu clic per deixar-la, {{key:Esc}} no en deixa cap ({{cmd:DUPLICATE}}) |

Les mateixes accions són al grup {{ui:Edita}} de la barra d'eines ({{ui:Copia}}, {{ui:Enganxa}}) i al seu menú {{ui:Més}}. Mentre s'executa una altra ordre, acabeu-la o premeu {{key:Esc}} primer; prémer {{key:Mod+V}} o {{key:Mod+D}} de nou mentre una còpia segueix el punter torna a començar. Quan heu escrit alguna cosa a la línia d'ordres, o una ordre demana text, aquestes tecles copien, retallen i enganxen aquell text. Vegeu [Copia, enganxa i duplica](topic:copy-paste).

## Alternances

| Tecla | Alternança | Botó de la barra d'estat |
|---|---|---|
| {{key:F3}} | Referències a objectes activades o desactivades | {{ui:Pas}} |
| {{key:F7}} | Quadrícula activada o desactivada | {{ui:Quadrícula}} |
| {{key:F8}} | Orto activat o desactivat | {{ui:Orto}} |
| {{key:F10}} | Seguiment polar activat o desactivat | {{ui:Polar}} |
| {{key:F11}} | Seguiment de referències a objectes activat o desactivat | {{ui:Segueix}} |
| {{key:F12}} | Entrada dinàmica activada o desactivada | {{ui:Dyn}} |

:::mac
En un Mac, F3, F7 i F8 són normalment el Control de missió i les tecles multimèdia. Manteniu **fn** amb elles, o activeu les tecles de funció estàndard a Configuració del sistema, tal com es descriu a [Tecles, ratolins i trackpads](common:keys). Els botons de la barra d'estat sempre funcionen.
:::

:::firefox
La tecla F7 a Firefox també pot demanar activar la navegació amb cursor. Trieu **No**, i useu el botó {{ui:Quadrícula}} si continua demanant-ho.
:::

## Ajuda

| Tecla | Què fa |
|---|---|
| {{key:F1}} | Obre o tanca aquesta ajuda, al costat del dibuix. Funciona fins i tot mentre s'executa una ordre, i mai no arriba a la línia d'ordres. |
| {{key:Esc}} | Amb el cursor al tauler d'ajuda: esborra la cerca, o tanca el tauler |

El botó {{ui:Ajuda}} de la barra superior fa el mateix que {{key:F1}}. Mentre escriviu a la caixa de cerca de l'ajuda, res no arriba a la línia d'ordres. Feu clic al dibuix per tornar les tecles a CadCraft; el tauler es queda obert al costat.

:::mac
En un teclat de Mac, manteniu **fn** i premeu F1, o feu clic a {{ui:Ajuda}}.
:::

## Pantalla

| Tecla | Què fa |
|---|---|
| {{key:Ctrl+Shift+F}} | Canvia entre normal, pantalla completa i pantalla completa amb les barres amagades. Aquesta drecera usa la tecla Control en tots els ordinadors, també al Mac. |
| {{key:Left}} {{key:Right}} | Amb una pestanya sota el dibuix enfocada: la pestanya anterior o la següent |

A pantalla completa, el navegador pot usar el primer {{key:Esc}} per sortir-ne. Premeu {{key:Esc}} de nou per cancel·lar una ordre.

## Diàlegs

| Tecla | Què fa |
|---|---|
| {{key:Esc}} | Tanca el diàleg ({{ui:Traça a PDF}}, o una pregunta com "Canvis sense desar", on vol dir {{ui:Cancel·la}}) |
| {{key:Tab}} | Es mou entre els ajustaments i els botons del diàleg |

Mentre hi ha un diàleg obert, les tecles del dibuix estan desactivades.

## Caselles dels taulers

En una caixa del tauler de la dreta o de l'esquerra:

| Tecla | Què fa |
|---|---|
| {{key:Enter}} | Aplica el valor i surt de la caixa |
| {{key:Esc}} | Hi torna a posar el valor antic i surt de la caixa |
| {{key:Tab}} | Aplica i passa a la caixa següent |

Mentre una caixa té el cursor, les lletres s'hi escriuen, i no a la línia d'ordres.

## Ratolí

| Acció | Què fa |
|---|---|
| Clic | Tria un punt quan una ordre el demana; tria un objecte quan demana objectes; altrament selecciona un objecte, o una nansa |
| Shift+clic | Treu un objecte seleccionat de la selecció (amb {{ui:Clic sobre objectes}} definit com a {{ui:Substitueix la selecció}} a [Configuració](topic:settings): l'afegeix). Mentre tria un punt: ignora les referències a objectes en aquell clic |
| Clic en espai buit, i després un altre clic | Un quadre de selecció: d'esquerra a dreta és una finestra, i de dreta a esquerra una intersecció |
| Arrossega en espai buit | Un llaç: si primer moveu el punter a la dreta és una finestra, si primer el moveu a l'esquerra és una intersecció; {{key:Space}} mentre arrossegueu canvia entre finestra, intersecció i tanca; {{key:Esc}} el deixa anar (LASSOMODE 0, o Configuració, el torna a deixar com a rectangle) |
| Arrossega a través de trossos a TRIM o EXTEND | Retalla (o allarga) cada tros que creua el camí; manteniu {{key:Shift}} per a l'altra |
| Arrossega una nansa | Mou la nansa (o feu clic a la nansa, i després feu clic on ha d'anar) |
| Doble clic a un text | El selecciona i posa el cursor a la seva caixa {{ui:Text}} del tauler de la dreta |
| Clic dret | Equival a {{key:Enter}}. Durant un desplaçament de nansa o un quadre de selecció: el cancel·la |
| Arrossega amb el botó dret | Desplaça |
| Roda | Fa zoom enrere i endavant al voltant del punt de mira |
| Arrossega amb la roda (botó del mig) | Desplaça |
| Doble clic a la roda | Fa zoom a tot el dibuix (extensions) |
| Deixeu anar un DWG o DXF sobre el dibuix | L'obre |

En un trackpad o una pantalla tàctil, vegeu [Ratolí, trackpad i tàctil](topic:mouse-trackpad-touch).

## Tecles que manté el navegador

{{key:Mod+N}}, {{key:Mod+W}} i {{key:Mod+T}} sempre són del navegador. CadCraft no les usa: useu {{ui:Nova}} o escriviu `NEW` per a un dibuix nou. El porta-retalls de CadCraft és propi: {{key:Mod+C}} i {{key:Mod+V}} copien objectes entre dibuixos i pestanyes de CadCraft, no a o des d'altres programes.

:::mac
Si {{key:Mod+Y}} obre l'historial del navegador en lloc de refer, useu {{key:Mod+Shift+Z}} o el botó {{ui:Refés}}.
:::

## On és Mou

Mou és l'ordre `MOVE` (tecla {{key:M}}): trieu els objectes, després un punt base i un segon punt o una distància escrita. També hi són ALIGN i DISTRIBUTE. BimCraft usa els mateixos noms per a les mateixes tasques sobre elements de construcció, però la seva {{key:M}} és Mesura: el seu Mou és {{key:Shift+M}}.
