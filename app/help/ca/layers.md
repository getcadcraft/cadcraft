---
title: Organitza un dibuix amb capes
summary: Crea capes per a murs, portes i notes, defineix colors, fes una capa actual i apaga, congela, bloqueja o exclou capes del traçat.
keywords: capa, capes, la, capa actual, congela, descongela, bloqueja, desbloqueja, activa, desactiva, traça, no traçar, color, propietats de la capa, layiso, layuniso, aïlla, layoff, layfrz, laymcur, layon, laythw, reanomena, laymrg, fusiona, laydel, suprimeix capa
from: ba9f0617
---

## Què crearàs

Tres capes, Murs, Portes i Notes, cadascuna amb el seu color, amb objectes dibuixats a cadascuna i traslladats entre elles.

## El tauler de capes

Les capes són al tauler de l'esquerra, sota {{ui:Capes}}. Cada fila mostra, d'esquerra a dreta:

- un punt: ple per a la capa **actual**, on van els objectes nous;
- una mostra de color;
- el nom de la capa;
- quatre botons: activa/desactiva (ull), congela (floc de neu), bloqueja (cadenat) i traça (impressora).

Cada dibuix té una capa anomenada `0`. Escriure `LA` i prémer {{key:Enter}} et porta al tauler.

## Crear capes

1. Fes clic a {{ui:Capa nova}} sobre la llista. S'obre una casella de nom.
2. Escriu `Murs` i prem {{key:Enter}} (o fes clic a {{ui:Afegeix}}).

La barra d'estat diu «S'ha afegit la capa Murs i s'ha fet actual.» La nova capa rep el color 7 (negre al tema clar, blanc al fosc).

3. Fes clic de nou a {{ui:Capa nova}}, escriu `Portes` i prem {{key:Enter}}.
4. Fes clic de nou a {{ui:Capa nova}}, escriu `Notes` i prem {{key:Enter}}.

Notes és ara l'actual.

## Donar un color a cada capa

1. Fes clic a la mostra de color de la fila Murs. S'obre el selector de colors del sistema.
2. Tria un color i confirma.

Canvien la mostra i tot el que hi ha a Murs i és de color {{ui:PerCapa}}.

:::note
Un color triat que coincideix amb un dels 255 colors CAD estàndard es desa com a aquell número. Qualsevol altre color es conserva exactament a CadCraft, però es desa com el color estàndard més proper en un fitxer DWG o DXF.
:::

## Dibuixar en una capa

1. Fes clic al nom **Murs** de la llista. El seu punt s'omple i la barra d'estat diu «Capa actual: Murs».
2. Dibuixa un rectangle (`REC`). Va a Murs.
3. Fes clic a **Portes** i dibuixa un arc (`A`). Va a Portes.

També pots triar la capa actual a {{ui:Configuració actual}} a la dreta (sense res seleccionat), sota {{ui:Capa}}.

## Moure objectes a una altra capa

1. Selecciona els objectes.
2. Al tauler de la dreta, tria la nova capa a {{ui:Capa}}.

Passen a aquella capa i prenen el seu color si el seu color és {{ui:PerCapa}}.

## Apagar, congelar, bloquejar i traçar

| Botó | Què fa |
|---|---|
| Activa/desactiva (ull) | Amaga els objectes de la capa. No es poden veure, seleccionar ni referenciar. |
| Congela (floc de neu) | Al CadCraft té el mateix efecte que desactivar. Es manté separat perquè altres programes ho tracten de manera diferent, i la configuració es desa. |
| Bloqueja (cadenat) | Els objectes es mantenen visibles i hi pots fer referència, però no es poden seleccionar ni canviar. És útil per a un fons sobre el qual traçar. |
| Traça (impressora) | Quan està premut, la capa es mostra a la pantalla però **s'exclou dels traçats** i dels PDF. Usa-ho per a línies de construcció i notes per a tu. |

Passa el ratolí sobre un botó per veure què farà («Desactiva», «Congela», «Bloqueja», «No tracis aquesta capa»).

No pots desactivar la capa actual: la barra d'estat diu «Aquesta és la capa actual. Primer fes actual una altra capa.» Fer clic al nom d'una capa per fer-la actual també l'activa i la descongela.

Cada canvi de capa, al tauler o amb una ordre, és un sol pas de desfer: {{key:Mod+Z}} el torna a posar.

## Treballar amb capes triant objectes

No cal que coneguis el nom d'una capa: tria-hi un objecte. Escriu l'ordre, o obre {{ui:Eines}} a la part superior del tauler {{ui:Capes}}.

| Ordre | Què fa |
|---|---|
| {{cmd:LAYISO}} | Selecciona objectes i prem {{key:Enter}}: només les seves capes queden activades, i es desactiven totes les altres. Si la capa actual es desactiva, una de les capes aïllades es fa actual. |
| {{cmd:LAYUNISO}} | Torna a activar les capes que va desactivar l'últim {{cmd:LAYISO}}, i restitueix la capa actual que va canviar. |
| {{cmd:LAYOFF}} | Fes clic als objectes un després de l'altre: la capa de cadascun es desactiva. Escriu `U` per desfer l'últim, {{key:Enter}} per acabar. |
| {{cmd:LAYFRZ}} | El mateix, congelant cada capa. |
| {{cmd:LAYMCUR}} | Fes clic a un objecte: la seva capa es fa actual (i s'activa i es descongela). Si ja hi ha un objecte seleccionat, s'usa aquest. |
| {{cmd:LAYON}} | Activa totes les capes. |
| {{cmd:LAYTHW}} | Descongela totes les capes. |

La capa actual mai es desactiva ni es congela d'aquesta manera: l'historial ho indica, i pots fer actual una altra capa amb {{cmd:LAYMCUR}} primer. Triar una referència de bloc usa la capa pròpia de la referència.

## Reanomenar, fusionar i suprimir capes

- {{cmd:RENAME}}: escriu `LA`, el nom antic i el nou. Cada objecte de la capa el segueix. (`B` reanomena un bloc de la mateixa manera, amb totes les seves referències.)
- {{cmd:LAYMRG}}: fes clic a un objecte de cada capa per fusionar (o escriu `N` i un nom), prem {{key:Enter}}, després tria la capa de destí i respon `Y`. Els objectes passen a la de destí —al model, als fulls i dins dels blocs— i les capes fusionades desapareixen.
- {{cmd:LAYDEL}}: tria un objecte de la capa (o `N` i el seu nom) i respon `Y`. La capa desapareix **amb tots els objectes que hi ha**, a tot arreu. La capa 0, DEFPOINTS i la capa actual no es poden suprimir.

Cadascuna és un sol pas de desfer. Les tres són a {{ui:Eines}} a la part superior del tauler {{ui:Capes}}.

1. Fes clic a una línia de mur, després escriu `LAYISO` i prem {{key:Enter}}. Només Murs queda activa.
2. Dibuixa o canvia el que necessitis a Murs.
3. Escriu `LAYUNISO` i prem {{key:Enter}}. Portes i Notes tornen.

## Errors habituals

- **Les línies noves han anat a la capa equivocada.** Comprova quin punt és ple abans de dibuixar. Una capa nova es fa actual en el moment que l'afegeixes.
- **Un objecte no es pot seleccionar.** La seva capa està bloquejada, desactivada o congelada.
- **La capa encara s'imprimeix en un altre programa.** El DXF R12 no pot guardar «no traçar». CadCraft conserva la configuració per a si mateix quan el dibuix té un full, però els altres programes traçaran aquella capa.
- **Noms de capa en majúscules després de desar.** El DXF R12 guarda els noms en majúscules, de manera que `Murs` torna com a `MURS`, i els espais es converteixen en `_`. Un DWG desat conserva els noms tal com els has escrit.
- **Reanomenar, fusionar o suprimir una capa.** Usa {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (també a {{ui:Eines}}): vegeu més avall.

## Agrupar capes

Manté la llista curta posant les capes en carpetes, com Existent, Proposat i Serveis. Cada carpeta es plega, i els seus interruptors activen o desactiven totes les seves capes, les congelen o les bloquegen juntes. La capa actual mai es desactiva.

A {{ui:Eines}} del tauler Capes, tria {{ui:Afegeix grups predefinits}} per a un conjunt pensat per a obres residencials petites, {{ui:Agrupa pel nom}} per agrupar capes que comparteixen un prefix (`E-Murs`, `E-Portes`), o {{ui:Grup nou}}. Arrossega una capa sobre una carpeta, o usa la llista de sobre les capes per a la capa actual. Escriu a {{ui:Cerca una capa}} per reduir la llista. `LAYGROUP` (`LG`) fa el mateix a la línia d'ordres.

Per reanomenar un grup, fes doble clic al seu nom (o selecciona'l i prem {{key:F2}}), escriu el nou nom i prem {{key:Enter}}; {{key:Esc}} conserva l'antic, i {{cmd:UNDO}} el torna a posar. {{ui:Grup nou}} és a {{ui:Eines}} del tauler Capes.

Les capes en si no canvien, de manera que els altres programes CAD les veuen com una llista plana normal. CadCraft guarda els grups al fitxer.
