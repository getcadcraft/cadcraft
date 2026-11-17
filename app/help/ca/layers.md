---
title: Organitza un dibuix amb capes
summary: Creeu capes per a murs, portes i notes, definiu-ne els colors, feu una capa actual i desactiveu-les, congeleu-les, bloquegeu-les o impediu que es tracin.
keywords: capa, capes, la, capa actual, congela, descongela, bloqueja, desactiva, activa, traça, no traçar, color, propietats de la capa, layiso, layuniso, aïlla, layoff, layfrz, laymcur, layon, laythw, reanomena, laymrg, fusiona, laydel, suprimeix capa
from: cd033591
---

## Què creareu

Tres capes, Walls, Doors i Notes, cadascuna amb el seu propi color, amb objectes dibuixats a cadascuna i moguts d'una a l'altra.

## El panell de Capes

Les capes viuen al panell de l'esquerra, sota {{ui:Capes}}. Cada fila mostra, d'esquerra a dreta:

- un punt: ple per a la capa **actual**, on van els objectes nous;
- una mostra de color;
- el nom de la capa;
- quatre botons: activa/desactiva (ull), congela (floc de neu), bloqueja (cadenat) i traça (impressora).

Cada dibuix té una capa anomenada `0`. Escriviu `LA` i premeu {{key:Enter}} per anar al panell.

## Crea capes

1. Feu clic a {{ui:Capa nova}} sobre la llista. S'obre una caixa de nom.
2. Escriviu `Walls` i premeu {{key:Enter}} (o feu clic a {{ui:Afegeix}}).

La barra d'estat diu "S'ha afegit la capa Walls i s'ha fet actual."

La capa nova té el color 7 (negre en el tema clar, blanc en el fosc).

3. Torneu a fer clic a {{ui:Capa nova}}, escriviu `Doors` i premeu {{key:Enter}}.
4. Torneu a fer clic a {{ui:Capa nova}}, escriviu `Notes` i premeu {{key:Enter}}.

Notes ara és la capa actual.

## Doneu un color a cada capa

1. Feu clic a la mostra de color de la fila de Walls. S'obrirà el selector de colors del vostre sistema.
2. Trieu un color i confirmeu-lo.

La mostra i tot el que hi ha a Walls i que és de color {{ui:PerCapa}} canvien.

:::note
Un color triat que coincideix amb un dels 255 colors CAD estàndard es desa com a aquell número. Qualsevol altre color es conserva exactament a CadCraft, però es desa com el color estàndard més proper en un fitxer DWG o DXF.
:::

## Dibuixeu en una capa

1. Feu clic al nom **Walls** de la llista. El seu punt s'omple i la barra d'estat diu "Capa actual: Walls".
2. Dibuixeu un rectangle (`REC`). Va a Walls.
3. Feu clic a **Doors** i dibuixeu un arc (`A`). Va a Doors.

També podeu triar la capa actual a {{ui:Configuració actual}} a la dreta (sense res seleccionat), sota {{ui:Capa}}.

## Mogueu objectes a una altra capa

1. Seleccioneu els objectes.
2. Al panell de la dreta, trieu la capa nova a {{ui:Capa}}.

Passen a aquesta capa i prenen el seu color si el seu color és {{ui:PerCapa}}.

## Desactiva, congela, bloqueja i traça

| Botó | Què fa |
|---|---|
| Activa/desactiva (ull) | Amaga els objectes de la capa. No es poden veure, seleccionar ni hi podeu fer referència a objectes. |
| Congela (floc de neu) | Té el mateix efecte que desactivar a CadCraft. Es manté separat perquè altres programes en tracten les diferències, i el paràmetre es desa. |
| Bloqueja (cadenat) | Els objectes continuen visibles i hi podeu fer referència, però no es poden seleccionar ni canviar. Bo per a un fons sobre el qual traceu. |
| Traça (impressora) | Quan està premut, la capa es mostra a la pantalla però **queda fora dels traçats** i dels PDF. Useu-la per a línies de construcció i notes per a vosaltres. |

Passeu el ratolí per sobre d'un botó per veure què farà ("Desactiva", "Congela", "Bloqueja", "No traçar aquesta capa").

No podeu desactivar la capa actual: la barra d'estat diu "Aquesta és la capa actual. Feu actual una altra capa abans." Fer clic al nom d'una capa per fer-la actual també l'activa i la descongela.

Cada canvi de capa, al panell o amb una ordre, és un sol pas de desfer: {{key:Mod+Z}} el torna enrere.

## Treballeu amb capes triant objectes

No cal que sapigueu el nom d'una capa: trieu-hi un objecte. Escriviu l'ordre, o obriu {{ui:Eines}} a la part superior del panell {{ui:Capes}}.

| Ordre | Què fa |
|---|---|
| {{cmd:LAYISO}} | Seleccioneu objectes i premeu {{key:Enter}}: només les seves capes continuen actives, i totes les altres es desactiven. Si la capa actual està desactivada, una de les capes aïllades passa a ser l'actual. |
| {{cmd:LAYUNISO}} | Torna a activar les capes que va desactivar l'últim {{cmd:LAYISO}}, i retorna la capa actual que va canviar. |
| {{cmd:LAYOFF}} | Feu clic als objectes un darrere l'altre: la capa de cadascun es desactiva. Escriviu `U` per desfer l'últim, i {{key:Enter}} per acabar. |
| {{cmd:LAYFRZ}} | Igual, però congelant cada capa. |
| {{cmd:LAYMCUR}} | Feu clic a un objecte: la seva capa passa a ser l'actual (i s'activa i es descongela). Si ja hi ha un objecte seleccionat, s'usa aquest. |
| {{cmd:LAYON}} | Activa totes les capes. |
| {{cmd:LAYTHW}} | Descongela totes les capes. |

La capa actual mai no es desactiva ni es congela d'aquesta manera: l'historial ho diu, i podeu fer actual una altra capa amb {{cmd:LAYMCUR}} abans. Triar una referència de bloc usa la capa pròpia de la referència.

1. Feu clic a una línia de mur, després escriviu `LAYISO` i premeu {{key:Enter}}. Només queda activa Walls.
2. Dibuixeu o canvieu el que necessiteu a Walls.
3. Escriviu `LAYUNISO` i premeu {{key:Enter}}. Tornen Doors i Notes.

## Reanomena, fusiona i suprimeix capes

- {{cmd:RENAME}}: escriviu `LA`, el nom antic i el nou. Tots els objectes de la capa el segueixen. (`B` reanomena un bloc de la mateixa manera, amb totes les referències.)
- {{cmd:LAYMRG}}: feu clic a un objecte de cada capa per fusionar (o escriviu `N` i un nom), premeu {{key:Enter}}, després trieu la capa de destinació i responeu `Y`. Els objectes passen a la destinació —al model, als fulls i dins dels blocs— i les capes fusionades desapareixen.
- {{cmd:LAYDEL}}: trieu un objecte de la capa (o `N` i el seu nom) i responeu `Y`. La capa desapareix **amb tots els objectes que hi ha**, a tot arreu. La capa 0, DEFPOINTS i la capa actual no es poden suprimir.

Cada una és un sol pas de desfer. Les tres són a {{ui:Eines}} a la part superior del panell {{ui:Capes}}.

1. Feu clic a una línia de mur, després escriviu `LAYISO` i premeu {{key:Enter}}. Només queda activa Walls.
2. Dibuixeu o canvieu el que necessiteu a Walls.
3. Escriviu `LAYUNISO` i premeu {{key:Enter}}. Tornen Doors i Notes.

## Errors habituals

- **Les línies noves han anat a una capa equivocada.** Comproveu quin punt és ple abans de dibuixar. Una capa nova es fa actual en el moment que l'afegiu.
- **Un objecte no se selecciona.** La seva capa és bloquejada, desactivada o congelada.
- **La capa encara es traça en un altre programa.** El DXF R12 no pot desar "No traçar". CadCraft manté el paràmetre per a si mateix quan el dibuix té un full, però altres programes traçaran aquesta capa.
- **Els noms de capa en majúscules després de desar.** El DXF R12 desa els noms en majúscules, de manera que `Walls` torna com a `WALLS`, i els espais es converteixen en `_`. Un DWG desat manté els noms tal com els heu escrit.
- **Reanomenar, fusionar o suprimir una capa.** Useu {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (també a {{ui:Eines}}): vegeu més avall.

## Agrupa capes

Manteniu la llista curta posant les capes en carpetes, com ara Existing, Proposed i Services. Cada carpeta es pot plegar i desplegar, i els seus interruptors activen o desactiven totes les seves capes, les congelen o les bloquegen juntes. La capa actual mai no es desactiva.

A {{ui:Eines}} del panell {{ui:Capes}}, trieu {{ui:Afegeix grups predefinits}} per a un conjunt pensat per a petits projectes residencials, {{ui:Agrupa pel nom}} per agrupar les capes que comparteixen un prefix (`E-Walls`, `E-Doors`), o bé {{ui:Grup nou}}. Arrossegueu una capa sobre una carpeta, o useu la llista de sobre de les capes per a la capa actual. Escriviu a {{ui:Cerca una capa}} per reduir la llista. `LAYGROUP` (`LG`) fa el mateix a la línia d'ordres.

Les capes en si no canvien, de manera que altres programes CAD les veuen com una llista plana i normal. CadCraft desa els grups al fitxer.
