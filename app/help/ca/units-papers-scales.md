---
title: Unitats, mides de paper i escales
summary: Què signifiquen les unitats de dibuix a CadCraft, les mides de paper per als fulls i els traçats, cada escala estàndard, i com es relacionen les mides del text i de les cotes amb l'escala de traçat.
keywords: unitats, mil·límetres, polzades, peus, peus i polzades, arquitectònic, enginyeria, fraccionari, fraccions, lunits, format de longitud, precisió, metres, mida de paper, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 polzada, escala arquitectònica, escala d'enginyeria, insunits
from: 8346236a
---

## Unitats de dibuix

Dibuixeu a mida completa, en unitats de dibuix. El que representa una unitat és la configuració d'**Unitats** del dibuix:

1. Premeu {{key:Esc}} perquè no hi hagi res seleccionat, a la pestanya {{ui:Model}}.
2. A {{ui:Configuració actual}}, trieu {{ui:Unitats}}: {{ui:Sense unitats}}, {{ui:Mil·límetres}}, {{ui:Centímetres}}, {{ui:Metres}}, {{ui:Polzades}} o {{ui:Peus}}.

Les cotes poden escriure les seves longituds en mil·límetres, centímetres, metres o quilòmetres, sigui quina sigui la unitat del dibuix: vegeu [Cotes en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Canviar les unitats no redimensiona res. Canvia com es llegeixen les escales als fulls i als traçats, i quines escales s'ofereixen. Un dibuix obert des d'un DWG o un DXF conserva les unitats guardades al fitxer; la secció {{ui:Dibuix}} del panell de l'esquerra les mostra.

Un dibuix {{ui:Sense unitats}} es considera que està en la unitat del paper: mil·límetres en paper ISO, polzades en paper US.

## Peus i polzades, i fraccions

Com s'**escriuen i es teclegen** les longituds és una configuració a part, el format de longitud. No canvia cap geometria, només com es veuen els números i què podeu escriure.

1. Premeu {{key:Esc}} perquè no hi hagi res seleccionat, a la pestanya {{ui:Model}}.
2. A {{ui:Configuració actual}}, trieu {{ui:Format de longitud}}: {{ui:Decimal}} (`150.5`), {{ui:Arquitectònic}} (`12'-6 1/2"`), {{ui:Enginyeria}} (`12'-6.5"`), {{ui:Fraccionari}} (`150 1/2`) o {{ui:Científic}} (`1.505E+02`).
3. Trieu {{ui:Precisió}}: posicions decimals, o la fracció més petita (1/16 és l'opció habitual per a l'arquitectònic).

O escriviu {{cmd:UNITS}} (`UN`) i responeu les seves dues preguntes.

Amb {{ui:Arquitectònic}} o {{ui:Enginyeria}}, una unitat de dibuix és una polzada, com a AutoCAD: definiu també {{ui:Unitats}} a {{ui:Polzades}}. Aleshores podeu escriure longituds en peus i polzades a qualsevol lloc on es demani una longitud, i a les caselles de {{ui:Propietats}}:

| Escriviu | Vol dir |
|---|---|
| `12'6"` o `12'-6"` | 12 peus 6 polzades (150) |
| `12'6-1/2"` | 12 peus 6½ polzades. Useu un guionet abans de la fracció: {{key:Space}} és {{key:Enter}} a la línia d'ordres. |
| `12'` | 12 peus |
| `6"` o `6` | 6 polzades: un nombre sol són polzades |
| `1/2`, `6-1/2` | les fraccions funcionen en qualsevol format |

Els punts accepten les mateixes longituds: `@12'6",0` o `@10'<90`. Els angles es queden en graus.

El format apareix a l'historial ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: àrees en polzades quadrades i peus quadrats), a {{ui:Propietats}}, a les coordenades de la barra d'estat, i en les **cotes noves**. Els fulls mantenen les seves unitats de paper (mil·límetres o polzades) com a decimals.

:::note
El format de longitud es desa en fitxers DWG i DXF, i cada cota conserva el seu propi: un dibuix desat s'obre de nou tal com el vau deixar.
:::

## Mides de paper

Els fulls i els traçats del model utilitzen aquestes mides, en qualsevol orientació:

| Paper | Mida | Unitat al full |
|---|---|---|
| ISO A4 | 297 × 210 mm | mil·límetres |
| ISO A3 | 420 × 297 mm | mil·límetres |
| ISO A2 | 594 × 420 mm | mil·límetres |
| ISO A1 | 841 × 594 mm | mil·límetres |
| ISO A0 | 1189 × 841 mm | mil·límetres |
| Letter | 11 × 8.5 in | polzades |
| Legal | 14 × 8.5 in | polzades |
| Tabloid / ANSI B | 17 × 11 in | polzades |
| ANSI C | 22 × 17 in | polzades |
| ANSI D | 34 × 22 in | polzades |
| ARCH C | 24 × 18 in | polzades |
| ARCH D | 36 × 24 in | polzades |
| ARCH E | 48 × 36 in | polzades |

Els fulls nous comencen amb ISO A3 per als dibuixos mètrics i sense unitats, i amb Tabloid per als dibuixos en polzades o peus. Els traçats del model comencen amb ISO A4 o Letter de la mateixa manera, i després recorden la vostra darrera elecció. Els fulls de fitxers oberts conserven la seva pròpia mida, que es mostra com a "Personalitzada" quan no és cap de les d'aquesta llista.

## Escales

Una escala `1:n` vol dir que una unitat al paper mostra n de la mateixa unitat al model, de manera que 1:100 mostra 1 m d'edifici com 10 mm de paper. CadCraft ho calcula a partir de les unitats del dibuix i de la unitat del paper.

**Escales mètriques**, ofertes per a qualsevol dibuix: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escales arquitectòniques**, ofertes quan les unitats són polzades o peus: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escales d'enginyeria**, ofertes quan les unitats són polzades o peus: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Les vostres pròpies escales.** Escriviu `SCALELISTEDIT` (o `SCALELIST`) per afegir una escala pròpia, com 1:75 o una escala de solar de 2 de paper : 300 de dibuix. `Add` demana un nom, després les unitats de paper i les unitats de dibuix (un nom com `1:75` ofereix els seus propis números; premeu {{key:Enter}} per prendre'ls). `Edit`, `Delete`, `List` i `Reset` funcionen sobre la mateixa llista; `Reset` torna a la llista estàndard. Les vostres escales apareixen després de les estàndard a la llista d'escales de finestra de {{ui:Propietats}} i al diàleg {{ui:Traça a PDF}}; una finestra a aquesta escala es llegeix amb el seu nom, i les escales es desen al dibuix (DWG i DXF 2000) com la llista d'escales del dibuix. Un dibuix obert des d'un altre programa en porta la llista; les escales que té i que coincideixen amb una estàndard no es mostren dues vegades.

Quan una finestra es dirigeix amb {{ui:Mostra tot el model}} o {{ui:Trieu una finestra sobre el model…}}, CadCraft escull l'escala estàndard més gran que hi cap. {{ui:Ajusta tot el model}} defineix en canvi una escala exacta, que es llegeix com un simple quocient.

## Mides al paper i al model

El text i les mides de les cotes estan en les unitats de l'espai on dibuixeu.

| Voleu al paper | Dibuixat en un full | Dibuixat al model a 1:50 (dibuix en mm) | Dibuixat al model a 1/4" = 1'-0" (dibuix en polzades) |
|---|---|---|---|
| Text de 2.5 mm | 2.5 | 125 | — |
| Text de 3/32" | 0.09375 | — | 4.5 |

Per a les cotes, mantingueu les mides com a mides de paper i definiu l'escala general ({{cmd:DIMSCALE}}) a l'escala de traçat: 50 per a 1:50, 48 per a 1/4" = 1'-0". Vegeu [Defineix les mides de les cotes](topic:dimension-settings).

## Anota per escala

Dibuixeu el model a mida completa i deixeu que CadCraft faci les sumes anteriors per vosaltres.

1. Seleccioneu el text o les cotes que han de mantenir la seva mida al paper. A Propietats marqueu {{ui:Anotatiu}}. {{ui:Mida al paper}} llavors diu, per exemple, 2.5 mm at 1:50.
2. Escriviu {{cmd:ANNOSCALE}} i l'escala amb què s'imprimirà el dibuix, com `1:100`.

Cada text i cota anotatius es redimensiona perquè s'imprimeixi a la mateixa mida a la nova escala: text de 2.5 mm és de 125 d'alçada en un dibuix en mil·límetres a 1:50 i de 250 a 1:100. L'amplada d'un paràgraf canvia amb ell; el text, les fletxes i els espais d'una cota canvien junts (la seva escala general). És un sol pas de desfer, i els objectes que no són anotatius mai no es canvien.

La configuració es desa en DWG i DXF: altres programes llegeixen la marca d'anotatiu, i CadCraft també conserva l'escala per a la qual està dimensionat cada objecte.

Si el vostre despatx defineix alçades de paper al complement Default Policies (Configuració › Global › Default Policies › Mides d'anotació al paper), {{cmd:ANNOSCALE}} també defineix l'alçada amb què comença el text nou com l'alçada del despatx per a notes a aquella escala. Vegeu [Default Policies](topic:default-policies).

### Un objecte a diverses escales

Un full sovint mostra la mateixa planta a 1:100 i una part d'ella a 1:50. Doneu a les notes i a les cotes les dues escales i cada finestra gràfica les mostrarà a la seva mida de paper:

1. Seleccioneu el text i les cotes anotatius i escriviu `OBJECTSCALE`.
2. Trieu `Add` i escriviu l'escala, per exemple `1:50`. (`Current scale` afegeix l'escala d'anotació del dibuix; `List` mostra què conserva cada objecte; `Delete` en treu una.)

Una finestra gràfica l'escala de la qual és a la llista d'un objecte el mostra a la mida d'aquella escala: text de 2.5 mm es dibuixa de 250 d'alçada en una finestra a 1:100 i de 125 en una a 1:50, a la pantalla i al traçat. L'objecte es queda on és; només en canvia la mida. En una finestra a una escala que no és a la llista d'un objecte, l'objecte es mostra amb la mida que té, fins que escriviu `ANNOALLVISIBLE` i trieu `OFF`: aleshores s'omet allà. {{cmd:ANNOSCALE}} redimensiona els objectes que tenen la nova escala a la llista i deixa els altres com estan.

Les llistes es desen en DWG i DXF com a dades pròpies de CadCraft. Un altre programa veu cada objecte com a anotatiu, a l'única escala per a la qual està dimensionat. El commutador ANNOALLVISIBLE no es conserva al fitxer.

## Gruixos i tipus de línia

Una capa, o un objecte, pot tenir un **gruix de línia** (de 0.05 a 2.11 mm) i un **tipus de línia** (discontinu, ocult, centre, fantasma, punts…). Definiu-los al panell de la dreta: sense res seleccionat, {{ui:Tipus de línia}} i {{ui:Gruix de línia}} sota {{ui:Configuració actual}} són el que reben els objectes nous ({{ui:PerCapa}} per seguir la seva capa), i els dos sota {{ui:Capa …}} són els de la pròpia capa actual. Amb objectes seleccionats, les mateixes dues files i {{ui:Escala del tipus de línia}} canvien aquells objectes. Les ordres són {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Els tipus de línia es mostren a la pantalla i als traçats. Els seus traços estan en unitats de dibuix: un dibuix mètric utilitza les mides ISO (DASHED: traços de 12.7 mm), un dibuix en polzades les de polzada (0.5"). Si els traços es veuen massa petits o massa grans, canvieu l'{{ui:Escala del tipus de línia}} del dibuix (LTSCALE): cada traç i cada espai es multipliquen per ella; l'escala pròpia d'un objecte la multiplica de nou. Un patró massa fi per veure's es dibuixa com una línia contínua.

Els gruixos de línia s'imprimeixen als traçats, en mm sobre el paper, sigui quina sigui l'escala. Les línies amb el gruix {{ui:Predeterminat}} utilitzen l'amplada de plomilla triada al diàleg {{ui:Traça a PDF}} (de 0.13 a 0.70 mm; 0.25 mm per defecte); un gruix de 0 s'imprimeix com la línia més fina. A la pantalla cada línia té un píxel d'amplada fins que premeu {{ui:LWT}} a la barra d'estat (o escriviu {{cmd:LWDISPLAY}}): aleshores un gruix superior a 0.25 mm es dibuixa més ample (0.5 mm = 2 píxels) al model, i a la seva amplada real al paper en un full. L'elecció es manté en aquest navegador.
