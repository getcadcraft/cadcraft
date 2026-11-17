---
title: Acotar un plànol
summary: Afegiu cotes lineals, alineades, angulars, de radi i de diàmetre, encadeneu-les amb Continua i Base, i substituïu el text.
keywords: cota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, cadena, sèrie, anota, eina de cota, on, trobar, barra d'eines, mesura, mm, cm, m, km, unitats
from: 9ee65123
---

## Què crearàs

Una habitació acotada: amplada i alçada totals, una sèrie de cotes al llarg d'un mur, un mur inclinat, una cantonada corba i un angle.

Abans de començar, llegiu [Definiu les mides de les cotes](topic:dimension-settings) si el dibuix és gran: el text de cota fa 2.5 unitats de dibuix d'alçada per defecte, cosa que és molt petita en un dibuix mesurat en mil·límetres. Per als passos següents, escriviu `DIMSCALE`, premeu {{key:Enter}}, escriviu `50` i premeu {{key:Enter}} primer.

## On són les eines de cota

Amb l'estil de menú de CadCraft (el que CadCraft fa servir en començar), les eines de cota són a la barra d'eines sobre el dibuix, al grup {{ui:Anota}}: {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Angle}}, {{ui:Radi}} i {{ui:Diàmetre}}. El menú {{ui:Més}} del grup té {{ui:Continua la cota}} i {{ui:Cota de base}}. Passeu el punter sobre un botó per veure què fa.

- Amb l'estil de menú {{ui:Dibuix clàssic}} o {{ui:Cinta}}, obriu la pestanya {{ui:Anota}}: les eines són al seu panell {{ui:Cotes}}. {{ui:Dibuix clàssic}} també té {{ui:Lineal}} a la pestanya {{ui:Inici}}, sota {{ui:Anotació}}. Vegeu [Menús, tecles i ratolí](topic:menus-keys-and-mouse).
- O escriviu l'ordre a la línia d'ordres sota el dibuix i premeu {{key:Enter}}: `DLI` (lineal), `DAL` (alineada), `DAN` (angular), `DRA` (radi), `DDI` (diàmetre), `DCO` (continua), `DBA` (base).
- En una pantalla estreta la barra d'eines és en una sola fila: llischeu-la de costat per arribar a {{ui:Anota}}.

Per mostrar les longituds en mil·límetres, centímetres, metres o quilòmetres, vegeu [Cotes en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Dibuixa alguna cosa per acotar

1. Escriviu `PL` i premeu {{key:Enter}}.
2. Escriviu `0,0` i premeu {{key:Enter}}.
3. Escriviu `@6000,0` i premeu {{key:Enter}}.
4. Escriviu `@1500<60` i premeu {{key:Enter}}.
5. Escriviu `@0,2700` i premeu {{key:Enter}}.
6. Escriviu `@-6750,0` i premeu {{key:Enter}}.
7. Escriviu `C` i premeu {{key:Enter}}. El contorn es tanca.
8. Escriviu `C` i premeu {{key:Enter}} per començar un cercle.
9. Feu clic dins de l'habitació, lluny dels murs, per al centre.
10. Escriviu `600` i premeu {{key:Enter}}. Això és una columna.
11. Feu clic a {{ui:Extensió}}.

## Lineal: horitzontal o vertical

1. Escriviu `DLI` i premeu {{key:Enter}}.
2. A `Especifiqueu l'origen de la primera línia d'extensió`, enganxeu al cantó inferior esquerre (punt final) i feu clic.
3. A `Especifiqueu l'origen de la segona línia d'extensió`, enganxeu al cantó inferior dret i feu clic.
4. Moveu la creueta per sota de l'habitació. La cota la segueix, horitzontal.
5. Feu clic per col·locar la línia de cota.

L'historial diu `Text de cota = 6000`.

On col·loqueu la línia decideix la direcció: sota o sobre dona una cota horitzontal; a l'esquerra o a la dreta, una de vertical. Per forçar-la, escriviu `H` (Horitzontal), `V` (Vertical) o `R` (Girada, i després un angle) abans de col·locar-la.

:::tip
Premeu {{key:Enter}} a la primera indicació en lloc de triar un punt, i després feu clic a una línia, un arc, un cercle o un segment de polilínia. CadCraft en pren els dos extrems per vosaltres.
:::

## Continua: una sèrie de cotes

{{cmd:DIMCONTINUE}} ({{ui:Anota}} › {{ui:Més}} › {{ui:Continua la cota}}, o `DCO`) continua des de l'última cota lineal o alineada que heu fet, i cada nova comença on acabava l'anterior.

1. Escriviu `DLI` i premeu {{key:Enter}}.
2. Escriviu `0,0` i premeu {{key:Enter}} per a l'origen inicial.
3. Escriviu `2000,0` i premeu {{key:Enter}} per al segon origen.
4. Feu clic sota l'habitació per col·locar-la.
5. Escriviu `DCO` i premeu {{key:Enter}}.
6. Escriviu `4500,0` i premeu {{key:Enter}}. Una segona cota segueix la primera, a la mateixa línia.
7. Enganxeu al cantó inferior dret i feu clic. Una tercera completa la sèrie.
8. Premeu {{key:Enter}} per acabar l'ordre.

:::note
Aquí els punts s'escriuen com a coordenades absolutes a propòsit. Un punt amb `@` compta des de l'últim punt que heu donat, i l'últim punt és on heu col·locat la línia de cota anterior, no l'extrem de la cota. Els punts absoluts, els ajustos o una distància directa amb {{ui:Orto}} activat són més segurs en una sèrie de cotes.
:::

Escriviu `U` i premeu {{key:Enter}} per desfer l'última cota de la sèrie sense sortir de l'ordre.

## Base: cotes apilades des d'una línia

{{cmd:DIMBASELINE}} ({{ui:Anota}} › {{ui:Més}} › {{ui:Cota de base}}, o `DBA`) mesura cada nova cota des del primer origen de l'última, i apila cadascuna un pas més enllà.

1. Escriviu `DLI` i premeu {{key:Enter}}.
2. Enganxeu al cantó inferior esquerre i feu clic.
3. Enganxeu al cantó superior esquerre i feu clic.
4. Moveu la creueta a l'esquerra de l'habitació i feu clic. Apareix una cota vertical.
5. Escriviu `DBA` i premeu {{key:Enter}}.
6. Enganxeu a l'extrem superior del mur de 60 graus (punt final) i feu clic. Apareix una segona cota vertical, un pas més enllà de la primera.
7. Premeu {{key:Enter}} per acabar.

## Alineada: longitud real d'una línia inclinada

1. Escriviu `DAL` i premeu {{key:Enter}}.
2. Premeu {{key:Enter}} per seleccionar un objecte.
3. Feu clic al mur de 60 graus.
4. Mogueu-vos cap enfora i feu clic per col·locar-la.

El text diu 1500: la longitud real, mesurada al llarg del mur.

## Radi i diàmetre

1. Escriviu `DRA` i premeu {{key:Enter}}.
2. Feu clic al cercle de la columna.
3. Mogueu la creueta. La fletxa va des del centre cap a la creueta.
4. Feu clic per col·locar el text.

El text diu `R600`. {{cmd:DIMDIAMETER}} (`DDI`) fa el mateix amb un signe ⌀ i el diàmetre.

## Angular

Els murs aquí són una sola polilínia, de manera que mesureu la cantonada pel seu vèrtex. (Entre dues línies separades, podeu fer clic a les línies en lloc d'això.)

1. Escriviu `DAN` i premeu {{key:Enter}}.
2. A `Seleccioneu un arc, un cercle o una línia, o premeu {{key:Enter}} per a un vèrtex`, premeu {{key:Enter}}.
3. A `Especifiqueu el vèrtex de l'angle`, enganxeu al cantó inferior dret i feu clic.
4. A `Especifiqueu el primer extrem de l'angle`, enganxeu al cantó inferior esquerre i feu clic.
5. A `Especifiqueu el segon extrem de l'angle`, enganxeu a l'extrem superior del mur de 60 graus i feu clic.
6. Mogueu la creueta dins de l'habitació, a prop de la cantonada, i feu clic.

El text diu `120°`, l'angle interior de la cantonada. Si el col·loqueu a l'altre costat de la cantonada, la cota mesura l'angle d'aquell costat. Feu clic a un arc a la primera indicació per acotar l'angle que abraça, o feu clic a dues línies per acotar l'angle entre totes dues.

## Canvia el text

Per escriure el vostre propi text, escriviu `T` i premeu {{key:Enter}} abans de col·locar la cota, i després escriviu el text. Al vostre text, `<>` representa el valor mesurat: `<> TYP.` dona `6000 TYP.`. Premeu {{key:Enter}} en una línia buida per mantenir el valor mesurat.

Per canviar una cota existent:

1. Feu-hi clic.
2. Al panell dret, escriviu a {{ui:Text}}. Deixeu-ho buit per al valor mesurat.
3. Premeu {{key:Enter}}.

## Les cotes segueixen la geometria

Una cota recorda els seus punts. Arrossegueu una de les seves nanses, o mogueu, gireu o escaleu-la amb els objectes que mesura, i la torna a mesurar. Si estireu la geometria sense moure la cota, la cota no la segueix: manté els seus propis punts.

## Errors habituals

- **El text i les fletxes són microscòpics o enormes.** Definiu l'escala global: vegeu [Definiu les mides de les cotes](topic:dimension-settings).
- **"Trieu un punt dins de l'angle que voleu mesurar."** El punt on heu fet clic per a una cota angular és sobre una de les cames. Mogueu-lo dins de l'angle.
- **Continua ha començat des de la cota equivocada.** Sempre continua des de l'última cota lineal o alineada feta en aquesta sessió. Feu (o torneu a fer) primer la cota de la qual cal continuar.
- **La cota ha sortit vertical.** La heu col·locat al costat. Escriviu `H` abans de col·locar-la.
- **Peus i polzades.** Definiu primer el format de longitud del dibuix a {{ui:Arquitectònic}}, o el {{ui:Format}} d'una cota a {{ui:Propietats}}: vegeu [Peus i polzades a les cotes](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Els números no són a la unitat que voleu.** Trieu {{ui:Unitats al text}}: vegeu [Cotes en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
