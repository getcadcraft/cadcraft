---
title: Unitats, mides de paper i escales
summary: Què signifiquen les unitats de dibuix a CadCraft, les mides de paper per als fulls i els traçats, totes les escales estàndard, i com es relacionen les mides de text i de cota amb l'escala de traçat.
keywords: unitats, mil·límetres, polzades, peus, peus i polzades, arquitectònic, enginyeria, fraccionari, fraccions, lunits, format de longitud, precisió, metres, mida de paper, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 polzada, escala arquitectònica, escala d'enginyeria, insunits
from: 7dc9b62e
---

## Unitats de dibuix

Dibuixes a mida real, en unitats de dibuix. Què representa una unitat ho defineix la configuració **Unitats** del dibuix:

1. Prem {{key:Esc}} perquè no hi hagi res seleccionat, a la pestanya {{ui:Model}}.
2. A {{ui:Configuració actual}}, tria {{ui:Unitats}}: {{ui:Sense unitats}}, {{ui:Mil·límetres}}, {{ui:Centímetres}}, {{ui:Metres}}, {{ui:Polzades}} o {{ui:Peus}}.

Les cotes poden escriure les seves longituds en mil·límetres, centímetres, metres o quilòmetres, sigui quina sigui la unitat del dibuix: vegeu [Cotes en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Canviar les unitats no redimensiona res. Canvia com es llegeixen les escales als fulls i als traçats, i quines escales s'ofereixen. Un dibuix obert des d'un DWG o DXF conserva les unitats guardades al fitxer; la secció {{ui:Dibuix}} del tauler esquerre les mostra.

Un dibuix {{ui:Sense unitats}} es tracta com si estigués en la unitat del paper: mil·límetres en paper ISO, polzades en paper americà.

## Peus i polzades, i fraccions

Com s'**escriuen i s'introdueixen** les longituds és una configuració a part: el format de longitud. No canvia cap geometria, només com es veuen els números i què pots escriure.

1. Prem {{key:Esc}} perquè no hi hagi res seleccionat, a la pestanya {{ui:Model}}.
2. A {{ui:Configuració actual}}, tria {{ui:Format de longitud}}: {{ui:Decimal}} (`150.5`), {{ui:Arquitectònic}} (`12'-6 1/2"`), {{ui:Enginyeria}} (`12'-6.5"`), {{ui:Fraccionari}} (`150 1/2`) o {{ui:Científic}} (`1.505E+02`).
3. Tria {{ui:Precisió}}: nombre de decimals, o la fracció més petita (1/16 és l'habitual per a l'arquitectura).

O escriu {{cmd:UNITS}} (`UN`) i respon les seves dues preguntes.

Amb {{ui:Arquitectònic}} o {{ui:Enginyeria}}, una unitat de dibuix és una polzada, com a AutoCAD: defineix també {{ui:Unitats}} com a {{ui:Polzades}}. Aleshores pots escriure longituds en peus i polzades en qualsevol lloc on es demani una longitud, i a les caselles de {{ui:Propietats}}:

| Escrius | Vol dir |
|---|---|
| `12'6"` o `12'-6"` | 12 peus 6 polzades (150) |
| `12'6-1/2"` | 12 peus 6½ polzades. Usa un guionet abans de la fracció: {{key:Space}} equival a {{key:Enter}} a la línia d'ordres. |
| `12'` | 12 peus |
| `6"` o `6` | 6 polzades: un número sense més és polzades |
| `1/2`, `6-1/2` | les fraccions funcionen en qualsevol format |

Els punts accepten les mateixes longituds: `@12'6",0` o `@10'<90`. Els angles es mantenen en graus.

El format es mostra a l'historial ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: àrees en polzades quadrades i peus quadrats), a {{ui:Propietats}}, a les coordenades de la barra d'estat, i a les **cotes noves**. Els fulls mantenen les seves unitats de paper (mil·límetres o polzades) com a decimals.

:::note
El format de longitud es desa als fitxers DWG i DXF, i cada cota conserva el seu propi: un dibuix desat s'obre de nou tal com el vas deixar.
:::

## Mides de paper

Els fulls i els traçats del model usen aquestes mides, en qualsevol orientació:

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

Els fulls nous comencen en ISO A3 per als dibuixos mètrics i sense unitats, i en Tabloid per als dibuixos en polzades o peus. Els traçats del model comencen en ISO A4 o Letter de la mateixa manera, i després recorden la teva última elecció. Els fulls de fitxers oberts conserven la seva pròpia mida, que es mostra com a «Personalitzat» quan no és cap d'aquestes.

## Escales

Una escala `1:n` vol dir que una unitat al paper representa n de la mateixa unitat al model, de manera que 1:100 mostra 1 m d'edifici com a 10 mm de paper. CadCraft ho calcula a partir de les unitats del dibuix i de la unitat del paper.

**Escales mètriques**, ofertes per a tots els dibuixos: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escales arquitectòniques**, ofertes quan les unitats són polzades o peus: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escales d'enginyeria**, ofertes quan les unitats són polzades o peus: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Les teves pròpies escales.** Escriu `SCALELISTEDIT` (o `SCALELIST`) per afegir una escala pròpia, com 1:75 o una escala de solar de 2 de paper : 300 de dibuix. `Afegeix` demana un nom, després les unitats de paper i les unitats del dibuix (un nom com `1:75` ofereix els seus propis números; prem {{key:Enter}} per prendre'ls). `Edita`, `Suprimeix`, `Llista` i `Restableix` treballen sobre la mateixa llista; `Restableix` torna a la llista estàndard. Les teves escales apareixen després de les estàndard a la llista d'escales de les finestres gràfiques de Propietats i al diàleg {{ui:Traça a PDF}}; una finestra gràfica a aquella escala es llegeix amb el seu nom, i es desen al dibuix (DWG i DXF 2000) com la llista d'escales del dibuix. Un dibuix obert des d'un altre programa porta la seva llista; les escales que coincideixen amb una d'estàndard no es mostren dues vegades.

Quan es dirigeix una finestra gràfica amb {{ui:Mostra tot el model}} o {{ui:Trieu una finestra sobre el model…}}, CadCraft tria l'escala estàndard més gran que hi cap. {{ui:Ajusta tot el model}} defineix en canvi una escala exacta, que es llegeix com una proporció simple.

## Mides al paper i al model

Les mides de text i de cota són en les unitats de l'espai on dibuixes.

| Voleu al paper | Dibuixat en un full | Dibuixat al model a 1:50 (dibuix en mm) | Dibuixat al model a 1/4" = 1'-0" (dibuix en polzades) |
|---|---|---|---|
| Text de 2.5 mm | 2.5 | 125 | — |
| Text de 3/32" | 0.09375 | — | 4.5 |

Per a les cotes, mantén les mides com a mides de paper i defineix l'escala general ({{cmd:DIMSCALE}}) a l'escala de traçat: 50 per a 1:50, 48 per a 1/4" = 1'-0". Vegeu [Definiu les mides de cota](topic:dimension-settings).

## Anotar per escala

Dibuixa el model a mida real i deixa que CadCraft faci per tu els càlculs de dalt.

1. Selecciona el text o les cotes que han de mantenir la seva mida al paper. A Propietats marca {{ui:Anotatiu}}. {{ui:Mida al paper}} llavors mostra, per exemple, `2.5 mm at 1:50`.
2. Escriu {{cmd:ANNOSCALE}} i l'escala amb què s'imprimirà el dibuix, com `1:100`.

Cada text i cota anotatius es redimensiona perquè s'imprimeixi a la mateixa mida a la nova escala: un text de 2,5 mm mesura 125 d'alçada en un dibuix en mil·límetres a 1:50 i 250 a 1:100. L'amplada d'un paràgraf canvia amb això; el text, les fletxes i els espais d'una cota canvien junts (la seva escala general). És un sol pas de desfer, i els objectes que no són anotatius no es canvien mai.

La configuració es desa en DWG i DXF: els altres programes llegeixen la marca d'anotatiu, i CadCraft conserva també l'escala per a la qual està dimensionat cada objecte.

Si la teva oficina defineix alçades de paper al complement Polítiques per defecte (Configuració › Global › Polítiques per defecte › Mides d'anotació al paper), {{cmd:ANNOSCALE}} també defineix l'alçada amb què comença el text nou a l'alçada de l'oficina per a les notes a aquella escala. Vegeu [Polítiques per defecte](topic:default-policies).

### Un objecte a diverses escales

Un full sovint mostra el mateix plànol a 1:100 i una part d'ell a 1:50. Dóna a les notes i a les cotes les dues escales i cada finestra gràfica els mostra a la seva mida de paper:

1. Selecciona el text i les cotes anotatius i escriu `OBJECTSCALE`.
2. Tria `Afegeix` i escriu l'escala, per exemple `1:50`. (`Escala actual` afegeix l'escala d'anotació del dibuix; `Llista` mostra les escales de cada objecte; `Suprimeix` en treu una.)

Una finestra gràfica l'escala de la qual és a la llista d'un objecte el mostra a la mida d'aquella escala: un text de 2,5 mm es dibuixa amb 250 d'alçada a una finestra 1:100 i amb 125 a una de 1:50, a la pantalla i al traçat. L'objecte es queda on és; només en canvia la mida. En una finestra amb una escala que no és a la llista de l'objecte, aquest es mostra a la mida que té, fins que escriguis `ANNOALLVISIBLE` i triïs `OFF`: aleshores s'omet allà. {{cmd:ANNOSCALE}} redimensiona els objectes que enumeren la nova escala i deixa la resta com estan.

Les llistes es desen en DWG i DXF com a dades pròpies de CadCraft. Un altre programa veu cada objecte com a anotatiu, a l'única escala per a la qual està dimensionat. El commutador ANNOALLVISIBLE no es desa al fitxer.

## Gruixos de línia i tipus de línia

Una capa, o un objecte, pot tenir un **gruix de línia** (de 0,05 a 2,11 mm) i un **tipus de línia** (discontínua, oculta, de centre, fantasma, de punts…). Defineix-los al tauler de la dreta: sense res seleccionat, {{ui:Tipus de línia}} i {{ui:Gruix de línia}} sota {{ui:Configuració actual}} són els que reben els objectes nous ({{ui:PerCapa}} per seguir la seva capa), i els dos sota {{ui:Capa …}} són els de la capa actual. Amb objectes seleccionats, les mateixes dues files i {{ui:Escala del tipus de línia}} canvien aquests objectes. Les ordres són {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Els tipus de línia es veuen a la pantalla i als traçats. Els seus guionets són en unitats de dibuix: un dibuix mètric usa les mides ISO (DASHED: guionets de 12,7 mm), un dibuix en polzades les seves (0,5"). Si els guionets es veuen massa petits o massa grans, canvia la {{ui:Escala del tipus de línia}} del dibuix (LTSCALE): cada guionet i cada espai es multiplica per ella; l'escala pròpia de l'objecte la multiplica de nou. Un patró massa fi per veure's del tot es dibuixa com una línia contínua.

Els gruixos de línia s'imprimeixen en els traçats, en mm sobre el paper, sigui quina sigui l'escala. Les línies amb el gruix {{ui:Predeterminat}} usen l'amplada de ploma triada al diàleg {{ui:Traça a PDF}} (de 0,13 a 0,70 mm; 0,25 mm per començar); un gruix de 0 s'imprimeix com la línia més fina. A la pantalla, cada línia té un píxel d'amplada fins que prems {{ui:LWT}} a la barra d'estat (o escrius {{cmd:LWDISPLAY}}): aleshores un gruix superior a 0,25 mm es dibuixa més ample (0,5 mm = 2 píxels) al model, i a l'amplada real al paper en un full. L'elecció es manté en aquest navegador.

## L'estàndard de l'oficina

Una oficina pot guardar les alçades del text en paper, les capes, els camps del caixetí i les plantilles en un sol registre: l'estàndard de l'oficina. CadCraft el llegeix en aquest ordre: el registre propi del dibuix (definit amb {{cmd:OFFICESTANDARD}} › `Importa`, guardat al fitxer), l'estàndard compartit de l'equip i després les teves Polítiques per defecte. El text i les cotes anotatius prenen d'ell la seva alçada de paper a l'escala d'anotació. Un estàndard buit no canvia res. {{cmd:OFFICESTANDARD}} › `Capes` afegeix les capes de l'oficina que el dibuix no té.
