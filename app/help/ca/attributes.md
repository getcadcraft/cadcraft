---
title: Atributs de bloc
summary: Veure i canviar els valors que porta una referència de bloc, com un número d'element o un fabricant, i conservar-los en desar una còpia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, caixetí, edita al lloc, editor d'atributs, attdef, defineix atribut, bedit, editor de blocs, bclose, atribut, atributs, attdef, attrib, etiqueta, número d'element, valor, invisible, constant, bloc, propietats, llista, etiqueta d'equip
from: 34d307c7
---

## Què són els atributs

Un atribut és un valor amb nom que viatja amb una referència de bloc: el número d'element d'una etiqueta d'equip, el nom d'una etiqueta d'habitació, la classificació al foc d'una porta. La definició del bloc indica quins atributs té (cadascun té una **Etiqueta**, una **Indicació**, un **Predeterminat** i una posició, mida i angle per al seu text). Cada referència al bloc porta els seus propis valors.

Alguns atributs són **invisibles**: contenen dades, com un fabricant o un número de model, però mai es dibuixen. Alguns són **constants**: iguals per a cada referència, fixats pel bloc.

## D'on venen els atributs

- Els blocs dels fitxers DWG i DXF que obriu conserven els seus atributs, amb els valors de cada referència.
- Els blocs que porteu amb {{cmd:INSERT}} i l'opció {{ui:Fitxer}} conserven els seus. Vegeu [Insereix des d'un fitxer o de la biblioteca](topic:insert-from-file-and-library).
- Els elements de la biblioteca entren com a blocs amb atributs: un número d'element visible i les dades de l'element, invisibles.

- Els blocs que feu vosaltres mateixos: definiu els atributs amb {{cmd:ATTDEF}} primer (a continuació), i després seleccioneu-los amb la resta d'objectes en fer el bloc.

## Definir atributs per als vostres propis blocs

1. Dibuixeu les línies del bloc, per exemple una etiqueta d'habitació.
2. Trieu {{ui:Blocs}} › {{ui:Més}} › {{ui:Defineix atribut}}, o escriviu `ATT` i premeu {{key:Enter}}.
3. L'historial mostra els modes (`Invisible=No Constant=No Preset=No`). Escriviu `I`, `C` o `P` per canviar-ne un, i premeu {{key:Enter}} quan siguin els correctes. Els valors invisibles es conserven però no es dibuixen; un de constant té el mateix valor a cada referència; un de predefinit no es demana en inserir el bloc.
4. Escriviu l'etiqueta (per exemple `ROOM_NO`: en majúscules, sense espais), la indicació (`Número d'habitació`) i un valor predeterminat (`101`).
5. Feu clic on ha d'anar el valor, i indiqueu l'alçada i la rotació. L'etiqueta apareix al dibuix.
6. Feu el bloc amb {{cmd:BLOCK}}, seleccionant alhora les línies i les definicions d'atribut. La referència que els substitueix rep els valors predeterminats; cada nova {{cmd:INSERT}} els demana.

Una definició d'atribut seleccionada mostra {{ui:Etiqueta}}, {{ui:Indicació}}, {{ui:Predeterminat}} i els modes a {{ui:Propietats}}.

## Canvia un bloc: l'editor de blocs

{{ui:Blocs}} › {{ui:Més}} › {{ui:Edita el bloc}} ({{cmd:BEDIT}}, `BE`) obre un bloc per separat: escriviu-ne el nom (o seleccioneu abans una referència). Una barra a dalt indica quin bloc editeu. Dibuixeu, esborreu i canvieu els seus objectes amb les ordres habituals, i afegiu o canvieu les definicions d'atribut. Després feu clic a {{ui:Desa el bloc}} (o escriviu {{cmd:BCLOSE}} i `S`): cada referència mostra el canvi, i un {{key:Mod+Z}} ho desfà tot. {{ui:Descarta els canvis}} ({{cmd:BCLOSE}}, `D`) deixa el bloc tal com estava.

Quan afegiu, suprimiu o canvieu definicions d'atribut, en desar també s'actualitza cada referència: els valors que heu escrit es conserven, un atribut nou rep el seu valor predeterminat, un de suprimit desapareix, i cada atribut torna a la posició que li assigna la definició. L'historial indica quantes referències s'han actualitzat.

## Edita una caixetí al seu lloc (REFEDIT)

Una caixetí en un full sovint està dins d'un bloc. Per canviar-ne les línies o els textos sense sortir del full:

1. Seleccioneu la caixetí i després {{ui:Blocs}} › {{ui:Més}} › {{ui:Edita al lloc}} (o escriviu {{cmd:REFEDIT}}).
2. El seu contingut esdevé objectes ordinaris al mateix lloc; la resta s'esvaeix i no es pot canviar.
3. Canvieu, esborreu o dibuixeu: els objectes nous passen a formar part del bloc.
4. Feu clic a {{ui:Desa el bloc}} a la barra de dalt (o escriviu {{cmd:REFCLOSE}} i `S`). Cada referència mostra el canvi, i un {{key:Mod+Z}} desfà tota l'edició. {{ui:Descarta}} deixa el bloc tal com estava.

Un dibuix enllaçat, un bloc dinàmic, o una referència escalada de manera diferent en X i en Y no es pot editar al seu lloc: utilitzeu {{cmd:BEDIT}} (o obriu el dibuix enllaçat).

:::note
Desa o descarta al editor de blocs abans de desar el dibuix: un fitxer desat mentre l'editor és obert conté el bloc tal com era abans.
:::

## Ompliu-los en col·locar un bloc

1. Escriviu `I` i premeu {{key:Enter}}, escriviu el nom del bloc i premeu {{key:Enter}}.
2. Feu clic on ha d'anar.
3. CadCraft demana cada valor, per exemple `Introduïu el número d'element (ITEM) <>`. Escriviu el valor i premeu {{key:Enter}}, o premeu {{key:Enter}} per mantenir el valor predeterminat indicat entre angles.

Els valors que el bloc marca com a predefinits, i els constants, no es demanen. Prenen el seu valor predeterminat.

## Veure i canviar els valors

1. Feu clic a una referència de bloc.
2. Al panell de la dreta, sota {{ui:Atributs}}, cada etiqueta té el seu valor. Els invisibles indiquen `hidden`.
3. Feu clic a un valor, escriviu-ne el nou i premeu {{key:Enter}}.

El dibuix mostra el valor nou a l'instant. Cada canvi és un pas: {{key:Mod+Z}} el desfà.

**L'editor d'atributs.** Feu doble clic a una referència amb atributs (o {{cmd:EATTEDIT}}): el diàleg {{ui:Edita atributs}} mostra totes les etiquetes amb la seva indicació i valor. Escriviu valors nous; feu clic a una fila per canviar {{ui:Alçada}}, {{ui:Rotació}}, {{ui:Factor d'amplada}}, {{ui:Justifica}}, {{ui:Capa}}, {{ui:Color}} i {{ui:Invisible}} de l'atribut només per a aquesta referència. {{ui:Aplica}} manté el diàleg obert; {{ui:D'acord}} aplica i tanca. Cada {{ui:Aplica}} o {{ui:D'acord}} és un pas per desfer.

**A la línia d'ordres**, {{cmd:ATTEDIT}} demana cada valor per torn: escriviu-ne un de nou, o premeu {{key:Enter}} per conservar-lo.

## Canvia les definicions d'atribut (BATTMAN, ATTSYNC)

{{ui:Blocs}} › {{ui:Més}} › {{ui:Gestor d'atributs}} ({{cmd:BATTMAN}}) llista els atributs d'un bloc: canvieu una etiqueta, indicació o predeterminat, marqueu {{ui:Invisible}}, {{ui:Constant}} o {{ui:Predefinit}}, i moveu-los amunt o avall (l'ordre en què es demanen els valors). Amb {{ui:Actualitza les referències (es conserven els valors)}} marcat, {{ui:Aplica}} també actualitza cada referència; una etiqueta reanomenada conserva els seus valors. Cada {{ui:Aplica}} és un pas per desfer.

{{cmd:ATTSYNC}} actualitza manualment les referències segons les definicions del seu bloc: `S` tria una referència, `N` indica un bloc, `A` ho fa per a tots els blocs. Els valors es conserven.

Els valors dels camps propis d'un element de la biblioteca (el seu identificador, versió, llicència i atribució) es mostren però no es poden editar, perquè la comprovació d'actualitzacions continuï funcionant. El seu número d'element i la quantitat els podeu canviar vosaltres.

## Llistar-los

Seleccioneu referències i escriviu `LI` (per a {{cmd:LIST}}). L'historial mostra cada atribut com a `TAG = value`, amb `(invisible)` o `(constant)` on escaigui.

## Moure, girar i descompondre

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} i {{cmd:MIRROR}} conserven els valors; el text es mou amb el bloc i es manté llegible.
- {{cmd:EXPLODE}} converteix els atributs visibles en text pla amb els seus valors. Els invisibles es descarten.

## Desar

Un DWG i un DXF desats conserven cada atribut: les definicions de cada bloc (també les invisibles, constants i predefinides) i els valors de cada referència. Altres programes CAD els llegeixen com a atributs de bloc ordinaris.

En un DXF R12, un valor de més de 255 caràcters es talla a 255, i l'historial ho indica.

## Errors habituals

- **Un valor no es veu al dibuix.** És invisible, o és buit. Els valors invisibles sí que es mostren al panell de la dreta.
- **El valor que heu escrit ha anat a la línia d'ordres.** Feu primer clic a la casella del valor al panell de la dreta.
