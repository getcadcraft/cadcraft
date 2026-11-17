---
title: Definiu mides de cota, decimals i escala
summary: Trieu l'alçada del text, la mida de la fletxa, els decimals i l'escala global per a les cotes noves, canvieu les existents, i entengueu com funcionen els estils de cota a CadCraft.
keywords: estil de cota, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, escala global, decimals, mida de la fletxa, escala d'anotació, dimtextunit, unitats al text, mm, cm, m, km, mil·límetres, metres, dimlfac, dimpost
from: 8ec82a07
---

## Què aprendreu

Quina mida tenen el text i les fletxes de les cotes, com definir-los per a un dibuix que es traça a 1:50 o 1:100, i com canviar les cotes que ja heu fet.

## Com funcionen les mides de les cotes

Cada cota porta el seu propi conjunt de mides: alçada del text, mida de la fletxa, decimals, l'espai al voltant del text, quant es prolonguen les línies d'extensió més enllà de la línia de cota i a quina distància comencen de l'objecte. Els valors per defecte s'assemblen a l'estil ISO habitual:

| Ajust | Per defecte | Ordre |
|---|---|---|
| Alçada del text | 2.5 | {{cmd:DIMTXT}} |
| Mida de la fletxa | 2.5 | {{cmd:DIMASZ}} |
| Decimals | 2 (els zeros finals s'eliminen) | {{cmd:DIMDEC}} |
| Espai al voltant del text | 0.625 | {{cmd:DIMGAP}} |
| Extensió més enllà de la línia de cota | 1.25 | {{cmd:DIMEXE}} |
| Desplaçament des de l'objecte | 0.625 | {{cmd:DIMEXO}} |
| Escala global | 1 | {{cmd:DIMSCALE}} |

Cada mida es multiplica per l'**escala global**. Definiu les mides tal com les voleu sobre el paper (text de 2.5 mm), i definiu l'escala global com a escala de traçat (50 per a 1:50). Llavors el text fa 2.5 × 50 = 125 unitats de dibuix d'alçada, i es traça a 2.5 mm.

:::note
Els estils de cota amb nom es gestionen amb {{cmd:DIMSTYLE}}: vegeu la secció següent. Cada cota també conserva els ajustos amb què es va fer, de manera que encara podeu canviar una sola cota a {{ui:Propietats}}.
:::

## Definiu les mides per a les cotes noves

Qualsevol de les dues maneres següents només canvia les cotes que feu després.

### Al panell Configuració actual

1. Premeu {{key:Esc}} perquè no hi hagi res seleccionat. A la pestanya {{ui:Model}}, el panell dret diu {{ui:Configuració actual}}.
2. Desplaceu el panell cap avall fins a {{ui:Cotes noves}}, més enllà de les files de capa, color, unitats i {{ui:Capa 0}} (en una pantalla petita comença sota la vora inferior). Feu clic a {{ui:Escala global}}, escriviu `50` i premeu {{key:Enter}}.
3. Definiu {{ui:Alçada del text}}, {{ui:Mida de la fletxa}} i {{ui:Decimals}} de la mateixa manera si voleu altres valors.

La barra d'estat confirma cadascun, per exemple "Escala global per a les cotes noves: 50".

### A la línia d'ordres

1. Escriviu `DIMSCALE` i premeu {{key:Enter}}.
2. A `Introduïu el valor nou per a DIMSCALE <1>`, escriviu `50` i premeu {{key:Enter}}.

L'historial confirma "DIMSCALE = 50. Les cotes noves l'utilitzen; seleccioneu les existents per canviar les seves." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} i {{cmd:DIMEXO}} funcionen de la mateixa manera. Premeu {{key:Enter}} a la indicació per mantenir el valor actual.

### Peus i polzades a les cotes

Les cotes noves fan servir el format de longitud del dibuix: definiu-lo amb {{ui:Format de longitud}} a {{ui:Configuració actual}} o amb {{cmd:UNITS}} (vegeu [Peus i polzades](topic:units-papers-scales#feet-and-inches-and-fractions)), i la següent cota llegeix `12'-6 1/2"`. {{cmd:DIMLUNIT}} només defineix el format de les cotes (2 decimals, 3 enginyeria, 4 arquitectònic, 5 fraccionari). Per a una cota que ja heu fet, seleccioneu-la i trieu {{ui:Format}} a {{ui:Propietats}}; amb un format fraccionari, la seva casella {{ui:Fracció}} pren la potència de dos (4 = 1/16).

## Cotes en mm, cm, m o km

Una cota mesura en unitats de dibuix. Pot escriure aquesta longitud en mil·límetres, centímetres, metres o quilòmetres, amb la unitat després del número: una paret de 1250 mm llegeix `1250 mm`, `125 cm`, `1.25 m` o `0.00125 km`.

1. Definiu primer les {{ui:Unitats}} del dibuix a {{ui:Configuració actual}} (vegeu [Unitats, mides de paper i escales](topic:units-papers-scales#drawing-units)), perquè CadCraft sàpiga què val una unitat de dibuix. Un dibuix sense unitats es llegeix com a mil·límetres, i {{cmd:DIMTEXTUNIT}} ho indica.
2. Per a les cotes noves: premeu {{key:Esc}} perquè no hi hagi res seleccionat, i a {{ui:Cotes noves}} trieu {{ui:Unitats al text}}: {{ui:Unitats del dibuix}}, `mm`, `cm`, `m` o `km`.
3. Per a les cotes que ja heu fet: seleccioneu-les, i a {{ui:Propietats}} › {{ui:Unitats principals}} trieu {{ui:Unitats al text}}.

O escriviu {{cmd:DIMTEXTUNIT}} (`DTU`) i respongueu `D`, `MM`, `CM`, `M` o `KM`: amb cotes seleccionades les canvia (un pas de desfer), i sense res seleccionat defineix les cotes noves.

{{ui:Decimals}} ({{cmd:DIMDEC}}) encara defineix quants decimals es mostren: amb metres i 3 decimals, 1234 mm llegeix `1.234 m`. El text s'escriu com a número decimal. En un full, les cotes es mesuren en la unitat de paper del full (mil·límetres o polzades).

Un DWG o DXF desat conserva l'elecció com a escala de mesura de la cota (DIMLFAC) i com a sufix (DIMPOST, ` m`), perquè altres programes mostrin el mateix text. Si canvieu després les {{ui:Unitats}} del dibuix, les cotes escrites en mm, cm, m o km es reajusten, de manera que continuen dient la longitud correcta. {{ui:Definides manualment (escala o sufix)}} vol dir que l'{{ui:Escala de mesura}} o el sufix de la cota es van definir d'una altra manera; trieu una unitat per substituir-los.

## Canvieu cotes que ja heu fet

1. Feu clic a una cota. El títol del panell dret diu {{ui:Cota}}.
2. Els ajustos són en seccions; desplaceu el panell cap avall per arribar a les següents:
   - {{ui:General}}: {{ui:Estil de cota}}
   - {{ui:Geometria}}: {{ui:Tipus}} i {{ui:Mesura}} (només de lectura)
   - {{ui:Text}}: {{ui:Text substitutiu}} i {{ui:Alçada del text}}
   - {{ui:Línies i fletxes}}: {{ui:Mida de la fletxa}}
   - {{ui:Ajust}}: {{ui:Escala global}}
   - {{ui:Unitats principals}}: {{ui:Decimals}}
3. Escriviu un valor nou i premeu {{key:Enter}}.

La cota es redibuixa de seguida. Per a les cotes angulars, {{ui:Decimals (°)}} defineix els decimals de l'angle.

:::note
Amb diverses cotes seleccionades, el panell mostra les files que comparteixen, i un valor que difereix entre elles diu {{ui:Varia}}. Un valor que escriviu canvia totes les cotes seleccionades en un sol pas, de manera que un {{key:Mod+Z}} les torna a deixar com estaven.
:::

## Cotes de dibuixos oberts

Una cota d'un DWG o DXF obert es mostra exactament com la va dibuixar l'altre programa. El seu panell diu "Es mostra com el va dibuixar el programa que l'ha fet. Si la canvieu, CadCraft la torna a dibuixar amb el seu propi estil." En el moment que canvieu qualsevol valor, moveu una nansa o moveu la cota, CadCraft la redibuixa amb les seves pròpies fletxes i tipus de lletra, fent servir les mides que va llegir del fitxer.

Algunes cotes només es poden llegir tal com estan dibuixades, no com a cotes editables; el panell aleshores mostra "Dibuixada des de" i un nom de bloc, i el quadre "Sobre aquest fitxer" les compta.

## Errors habituals

- **Canviar DIMSCALE no ha canviat res a la pantalla.** El valor és per a les cotes noves. Seleccioneu les existents i canvieu {{ui:Escala global}} al panell.
- **Els decimals mostren menys dígits dels definits.** Els zeros finals s'eliminen: amb 2 decimals es mostra `1250` i `1250.5`, no `1250.00`.
- **El text té l'alçada correcta al paper en una finestra gràfica però és incorrecte en un traçat del model.** L'escala global ha de coincidir amb l'escala a la qual traceu. Si traceu amb Ajusta al paper, l'escala és estranya; trieu una escala estàndard al diàleg de traçat.
- **Unitats com mm o m al text.** Trieu {{ui:Unitats al text}} (vegeu [Cotes en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Per a qualsevol altra paraula després del número, escriviu-la en un substitutiu: `<> TYP.`.

## Estils de cota amb nom

Escriviu `DIMSTYLE` (`D`) per obrir el {{ui:Gestor d'estils de cota}}. Llista els estils del dibuix, quantes cotes fa servir cadascun, i quin és l'actual. **Estàndard** sempre hi és.

- {{ui:Estableix com a actual}}: les cotes noves fan servir els ajustos d'aquell estil i en porten el nom.
- {{ui:Nou…}}: un estil nou que comença com a còpia d'un que trieu.
- {{ui:Modifica…}}: els mateixos camps que la secció de cota de {{ui:Propietats}} (línies i fletxes, text, ajust, unitats, unitats alternatives, toleràncies). Premeu {{ui:D'acord}} i l'estil canvia **i totes les cotes que l'utilitzen canvien amb ell**, ajust per ajust. Un ajust que heu canviat en una sola cota es manté tal com és, tret que l'estil canviï aquell ajust.
- {{ui:Canvia el nom…}} i {{ui:Suprimeix}}: l'Estàndard no es pot reanomenar ni suprimir, ni tampoc l'estil actual o un que fan servir les cotes.
- {{ui:Compara…}}: què difereix entre dos estils.
- {{ui:Aplica a la selecció}}: seleccioneu primer les cotes; prenen els ajustos de l'estil i el seu nom.

`-DIMSTYLE` fa el mateix a la línia d'ordres, amb les opcions `Restaura`, `Desa (S)`, `Suprimeix (D)`, `Aplica`, `Compara`, `Canvia el nom (N)` i `Llista`.

Els estils es desen en un DWG o DXF (a la seva taula d'estils de cota) i es llegeixen dels fitxers que obriu. L'estil *actual* no es desa: un dibuix s'obre amb Estàndard com a actual. Estàndard manté els seus propis ajustos mentre un altre estil és l'actual.

## Canvia el text i les línies d'extensió de la cota

{{cmd:DIMEDIT}} (`DED`) treballa sobre les cotes que seleccioneu: **Inici** torna a posar el text on el situa l'estil, **Nou** escriu un altre text (`<>` representa la mesura), **Gira** gira el text, **Obliqua** inclina les línies d'extensió de les cotes lineals i alineades a un angle que escriviu (premeu {{key:Enter}} per no posar-ne cap). {{cmd:DIMTEDIT}} mou el text a l'**Esquerra**, a la **Dreta** o al **Centre** de la línia de cota, o el gira (**Angle**), o l'envia a **Inici**. El text sempre es queda sobre la línia de cota: no es pot arrossegar a un lloc lliure.
