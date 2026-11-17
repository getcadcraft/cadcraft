---
title: Retalla i allarga
summary: Talleu les línies fins on les creuen altres i allargueu-les fins que arribin a altres, una peça cada vegada o moltes alhora arrossegant un camí a través d'elles.
keywords: trimextendmode, arrossegament de finestra, retalla, allarga, tr, ex, retall ràpid, arrossega, a mà alçada, camí, tanca, intersecció, shift, arestes de tall, arestes de límit, edgemode, mode, estàndard, ràpid, esborra, previsualització, murs, neteja
from: 25fbc5bd
---

## Què aprendràs

Com funcionen {{cmd:TRIM}} i {{cmd:EXTEND}}, i les maneres ràpides d'usar-los: arrossegar a través de moltes peces alhora, mantenir premut {{key:Shift}} per canviar entre retallar i allargar, i veure què s'eliminarà abans de fer clic.

## Retalla una peça

1. Dibuixeu una línia horitzontal llarga i dues línies curtes que la creuin.
2. Escriviu `TR` i premeu {{key:Enter}}. L'historial diu `Current settings: Quick mode, edges: No extend`.
3. Deixeu el punter sobre la línia llarga entre les dues curtes. Aquesta peça es torna grisa i discontínua: és el que s'eliminarà.
4. Feu clic. La peça desapareix.
5. Premeu {{key:Enter}} per acabar l'ordre.

Al mode Ràpid (el per defecte) cada objecte visible és una aresta de tall, de manera que mai no heu de triar les arestes primer. Feu clic a la peça que voleu eliminar. Un objecte que res no creua s'esborra sencer, i l'historial ho diu.

## Retalla moltes peces en un sol arrossegament

1. Dibuixeu una línia horitzontal llarga i deu línies verticals curtes que la creuin.
2. Escriviu `TR` i premeu {{key:Enter}}.
3. Premeu el botó del ratolí per sobre de la línia llarga, a l'esquerra de la primera línia vertical, i arrossegueu per sobre de les deu.

Mentre arrossegueu, el camí es mostra com una línia discontínua, i cada peça que ha creuat es torna grisa. Deixeu anar: les deu peces superiors es retallen en un sol pas. Escriviu `U` i premeu {{key:Enter}} per tornar-les totes alhora.

:::tip
També podeu fer clic en dos punts buits: la línia entre ells funciona com un camí arrossegat. Escriviu `F` (Tanca) per fer clic en una sèrie de punts, i després premeu {{key:Enter}}.
:::

:::touch
Arrossegueu un dit de la mateixa manera. Un toc sobre una peça la retalla.
:::

## Allarga en lloc de retallar, amb Shift

1. Dibuixeu una línia vertical, i cinc línies horitzontals curtes a la seva esquerra que s'aturin abans d'ella.
2. Escriviu `TR` i premeu {{key:Enter}}.
3. Mantingueu premut {{key:Shift}}. Deixeu el punter sobre una línia curta: la part en què creixeria es mostra grisa i discontínua.
4. Mantenint {{key:Shift}} premut, arrossegueu cap avall per les cinc línies curtes.

Totes cinc arriben ara a la línia vertical. {{key:Shift}} funciona a l'inrevés a {{cmd:EXTEND}} (`EX`): un clic allarga, i un clic amb {{key:Shift}} retalla. Allargar fa més llarg l'extrem més proper on feu clic o on el camí creua.

## Retalla dins d'una finestra

1. Escriviu `TR` i premeu {{key:Enter}}.
2. Escriviu `C` i premeu {{key:Enter}}.
3. Feu clic a dues cantonades al voltant de les peces a eliminar.

Es retalla cada peça que es troba almenys en part dins de la finestra.

Per tenir una finestra només arrossegant, sense escriure `C`: {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Arrossegar per retallar i allargar}} ›
{{ui:Una finestra}}. Llavors prémer en un punt buit i arrossegar dibuixa una caixa, i cada peça que toca es retalla (o s'allarga, a {{cmd:EXTEND}}, o amb {{key:Shift}}). {{ui:Un camí}} (l'inici) torna a activar el camí a mà alçada. La línia de configuració a l'inici de TRIM diu quina està activa.

## Trieu les arestes de tall (mode Estàndard)

De vegades només una línia ha de tallar, com una cara de mur amb moltes altres línies que la creuen.

1. Escriviu `TR` i premeu {{key:Enter}}.
2. Escriviu `O` (Mode) i premeu {{key:Enter}}, després `S` (Estàndard) i premeu {{key:Enter}}.
3. A `Select cutting edges`, feu clic a les línies de vora (o arrossegueu una finestra), i després premeu {{key:Enter}}. Si premeu {{key:Enter}} sense res seleccionat, cada objecte esdevé una aresta.
4. Feu clic o arrossegueu a través de les peces a eliminar.

Només tallen les arestes triades, i un objecte que cap aresta no creua es deixa tal com està. El mode es manté fins que tanqueu la pàgina; escriviu `O`, després `Q` (Ràpid) per tornar-hi. {{cmd:TRIMEXTENDMODE}} el defineix abans de començar, com la variable del mateix nom en altres llocs: `0` Estàndard, `1` Ràpid. `T` (Arestes de tall) tria arestes noves en qualsevol moment; a {{cmd:EXTEND}} és `B` (Arestes de límit).

## Arestes que arribarien

1. Escriviu `TR` i premeu {{key:Enter}}.
2. Escriviu `E` (Arestes) i premeu {{key:Enter}}, després `E` (Allarga) i premeu {{key:Enter}}.

Ara una línia o un arc de tall que s'atura abans compta com si continués: una línia curta talla on creuaria si fos més llarga. Escriviu `E`, després `N` (No allarga) per tornar enrere. És el mateix que EDGEMODE 1 i 0.

## Esborra sense sortir

Escriviu `R` (Esborra) i premeu {{key:Enter}}, trieu els objectes a esborrar, i premeu {{key:Enter}}. TRIM continua.

## Errors habituals

- **Ha desaparegut una línia sencera.** Al mode Ràpid, un objecte que res no creua s'esborra. Escriviu `U` per tornar-lo, o canvieu al mode Estàndard (`O`, `S`).
- **"Res per retallar aquí: cap aresta triada no creua aquest objecte."** El mode Estàndard només talla a les arestes que heu triat. Escriviu `T` per triar-les de nou.
- **"No hi ha límit en aquesta direcció."** EXTEND no ha trobat res davant. Feu clic més a prop de l'extrem que hauria de créixer, o activeu `E` (Arestes, Allarga) per als límits que s'aturen abans.
- **L'arrossegament ha dibuixat un llaç en lloc de retallar.** Un arrossegament només retalla mentre TRIM o EXTEND estan demanant un objecte. Sense cap ordre en curs, un arrossegament selecciona (vegeu [Selecció amb llaç](topic:lasso-selection)).
- **Només es poden retallar línies, arcs, cercles i polilínies.** Descomponeu primer un bloc per retallar-ne les línies.
