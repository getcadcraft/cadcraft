---
title: Trama i emplenament d'àrees
summary: Emplena una àrea amb un color sòlid o amb un patró estàndard fent clic a l'interior o escollint formes tancades, defineix l'escala i l'angle del patró i canvia una trama després.
keywords: trama, bhatch, emplenament, farciment sòlid, patró, ansi31, ansi37, maó, terra, xarxa, línies de secció, poché, illa, contorn, escala, angle
from: 14399174
---

## Què crearàs

Una secció de mur emplenada amb el patró ANSI31, un pilar buit i un farciment sòlid al pilar.

## Trama fent clic dins d'una àrea

1. Dibuixeu un rectangle (`REC`, `0,0`, `@2000,1200`) i un cercle dins seu (`C`, `1000,600`, `300`). Feu clic a {{ui:Extensió}}.
2. Feu clic a {{ui:Trama}} al grup {{ui:Dibuix}}, o escriviu `H` i premeu {{key:Enter}}. L'historial indica quin patró és l'actual, per exemple `Current hatch: ANSI31, scale 1, angle 0°`.
3. Escriviu `P` i premeu {{key:Enter}}, escriviu `ANSI31` i premeu {{key:Enter}}.
4. Escriviu `SC` i premeu {{key:Enter}}, escriviu `20` i premeu {{key:Enter}}. Les mides dels patrons són en paper, així que un dibuix imprès a 1:20 necessita escala 20.
5. A `Pick internal point`, feu clic dins del rectangle, fora del cercle. La trama es mostra com a previsualització.
6. Premeu {{key:Enter}}. El rectangle queda amb trama; el cercle de dins es manté buit, perquè és una illa.

Feu clic dins de diverses àrees abans de premer {{key:Enter}} per convertir-les en una sola trama. `U` desfà l'última àrea.

## Un farciment sòlid

1. Escriviu `H` i premeu {{key:Enter}}.
2. Escriviu `P`, premeu {{key:Enter}}, escriviu `SOLID` i premeu {{key:Enter}}.
3. Feu clic dins del cercle i després premeu {{key:Enter}}.

## Trama amb formes tancades que escolliu

En lloc de fer clic dins, escriviu `S` (Selecciona objectes) a `Pick internal point` i escolliu polilínies tancades, cercles o el·lipses tancades, i després premeu {{key:Enter}}. Les formes que hi ha dins d'altres es deixen buides per torns (l'exterior amb trama, la següent buida, i així successivament).

## Patrons

Escriviu `?` a la pregunta del patró per veure la llista. Els patrons estàndard són ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH i SOLID. En un dibuix en polzades (o amb peus i polzades com a format de longitud) s'usen les mides en polzades dels patrons, com a AutoCAD; altrament, les mil·limètriques.

{{ui:Angle}} (`A`) gira tot el patró: ANSI31 a 90° s'inclina en sentit contrari.

**Fitxers de patró.** Escriviu `F` (Fitxer de patró) a `Pick internal point` i trieu un fitxer `.pat`. Els patrons que conté s'afegeixen a la llista; si n'hi ha més d'un, se us demanarà quin cal usar. Un fitxer sense cap patró que CadCraft pugui llegir ho indica, i es compta qualsevol patró que s'hagi omès. Les mides d'un fitxer `.pat` no tenen unitat pròpia, així que es llegeixen en les unitats del dibuix. Només s'han provat fitxers escrits en el format `.pat` habitual; cap de fet amb un altre programa.

## Canvia una trama

Seleccioneu-la (feu clic en una de les seves línies). A {{ui:Propietats}}: {{ui:Patró}}, {{ui:Escala del patró}} i {{ui:Angle del patró}}. Les trames de dibuixos oberts mostren el seu patró quan és un dels estàndard; les altres es mostren amb un to clar del seu color.

## Errors habituals

- **"No hi ha cap contorn tancat al voltant d'aquest punt."** Hi ha un forat al contorn, o una part és fora de la pantalla: CadCraft només mira el que és a la pantalla. Tanqueu el forat (feu zoom als cantons) o allunyeu la vista.
- **"El patró és massa dens per dibuixar-lo a aquesta escala."** Les línies quedarien més juntes del que el dibuix pot mostrar. Useu una escala més gran: proveu l'escala d'impressió (20 per a 1:20).
- **El patró es veu enorme o minúscul.** L'escala és en unitats de dibuix per unitat de patró; vegeu el pas 4 més amunt.
- **Moure el contorn no mou la trama.** Una trama no està lligada al seu contorn. Moveu-los tots dos, o torneu a fer la trama.

## Una trama que es manté unida al seu contorn

Una trama que feu amb `HATCH` recorda què la delimita. Si moveu, gireu o escaleu el contorn, la trama i el seu patró l'acompanyen. Arrossegueu una nansa per remodelar el contorn i la trama es torna a calcular. Si moveu la trama sola, el seu contorn també la segueix, com una forma emplenada en un programa de dibuix.

L'enllaç s'acaba, i la línia d'ordres ho indica, si el contorn ja no es tanca o si remodeleu la trama a mà. La trama en si es manté. Escriviu `AS` durant l'operació de trama per fer trames independents. Si copieu una trama amb el seu contorn, la còpia té el seu propi enllaç.

`HATCHEDIT` (`HE`) canvia el patró, l'escala, l'angle i l'origen d'una trama, i l'enllaça a un contorn o acaba l'enllaç. L'enllaç es desa en fitxers DWG i DXF 2000. Un fitxer DXF R12 no té objecte de trama, i els enllaços fets en altres programes no es llegeixen: useu `HATCHEDIT` i Enllaça per a aquests casos.

Una trama que ja no té contorn (perquè s'ha esborrat o perquè el fitxer no el portava) pot recuperar-lo: `HATCHGENERATEBOUNDARY` (`HGB`) dibuixa una polilínia tancada al voltant de cada bucle de la trama i, si respongueu Sí, enllaça la trama amb aquestes polilínies.

## Un emplenament degradat

`GRADIENT` (`GD`) emplena una àrea amb un degradat en lloc d'un patró: les mateixes seleccions que `HATCH`, després de preguntar el tipus (lineal, cilíndric, esfèric, hemisfèric, corbat, i cadascun d'aquests invertit), un color amb una tonalitat o dos colors, l'angle, i centrat o no. A `HATCH`, l'opció `G` fa el mateix. `HATCHEDIT` `G`, o {{ui:Propietats}} sota Degradat, canvia un degradat o converteix qualsevol trama en un.

Un degradat es veu a la pantalla i en les impressions. Deseu com a DWG 2004 o posterior i els altres programes obtenen una trama de degradat real. DXF 2000 i DWG 2000 no tenen degradat: allà CadCraft el conserva per a si mateix i els altres programes veuen un farciment sòlid amb el primer color.

## Retalla una trama

`TRIM` retalla una trama com qualsevol altre objecte. Feu clic a la trama al costat de l'aresta de tall que voleu eliminar: les arestes divideixen l'àrea amb trama i aquella part s'elimina. En mode Ràpid, cada objecte és una aresta de tall; trieu primer les arestes (opció `T`) quan n'hi hagi moltes. Una trama retallada ja no està enllaçada al seu contorn, perquè ja no l'omple.
