---
title: Trama i àrees de farciment
summary: Omple una àrea amb un color sòlid o un patró estàndard fent clic a dins o triant formes tancades, defineix l'escala i l'angle del patró, i canvia una trama després.
keywords: trama, bhatch, farciment, farciment sòlid, patró, ansi31, ansi37, maó, terra, malla, línies de secció, pochè, illa, contorn, escala, angle
from: e7feb344
---

## Què crearàs

Una secció de paret omplerta amb el patró ANSI31, una columna buida dins seu i un farciment sòlid a la columna.

## Trama fent clic dins d'una àrea

1. Dibuixa un rectangle (`REC`, `0,0`, `@2000,1200`) i un cercle a dins (`C`, `1000,600`, `300`). Fes clic a {{ui:Extensió}}.
2. Fes clic a {{ui:Trama}} al grup {{ui:Dibuix}}, o escriu `H` i prem {{key:Enter}}. L'historial indica quin patró és l'actual, per exemple `Trama actual: ANSI31, escala 1, angle 0°`.
3. Escriu `P` i prem {{key:Enter}}, escriu `ANSI31` i prem {{key:Enter}}.
4. Escriu `SC` i prem {{key:Enter}}, escriu `20` i prem {{key:Enter}}. Les mides del patró són sobre el paper, així que un dibuix traçat a 1:20 vol l'escala 20.
5. A `Especifiqueu un punt interior`, fes clic dins del rectangle, fora del cercle. La trama es mostra com a previsualització.
6. Prem {{key:Enter}}. El rectangle queda envoltat amb trama; el cercle interior queda buit, perquè és una illa.

Fes clic dins de diverses àrees abans de prémer {{key:Enter}} per fer-ne una sola trama. `U` desfà l'última àrea.

## Un farciment sòlid

1. Escriu `H` i prem {{key:Enter}}.
2. Escriu `P`, prem {{key:Enter}}, escriu `SOLID` i prem {{key:Enter}}.
3. Fes clic dins del cercle i després prem {{key:Enter}}.

## Trama amb formes tancades que triis

En lloc de fer clic a dins, a `Especifiqueu un punt interior` escriu `S` (Selecciona objectes) i tria polilínies tancades, cercles o el·lipses tancades, i després prem {{key:Enter}}. Les formes que hi ha dins d'altres es deixen buides per torns (la de fora queda amb trama, la següent buida, i així successivament).

## Patrons

Escriu `?` a la pregunta del patró per veure la llista. Els estàndard són ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS i EARTH, i SOLID. En un dibuix en polzades (o amb peus i polzades com a format de longitud), s'usen les mides en polzades dels patrons, com a AutoCAD; si no, les mil·limètriques.

{{ui:Angle}} (`A`) gira tot el patró: ANSI31 a 90° s'inclina en sentit contrari.

**Fitxers de patró.** Escriu `F` (Fitxer de patró) a `Especifiqueu un punt interior` i tria un fitxer `.pat`. Els patrons que conté s'afegeixen a la llista; si n'hi ha més d'un, se't pregunta quin cal usar. Un fitxer sense cap patró que CadCraft pugui llegir ho indica, i es compten els patrons que s'han omès. Les mides d'un fitxer `.pat` no tenen unitat pròpia, així que es llegeixen en les unitats del dibuix. Només s'han provat fitxers escrits en el format `.pat` habitual; cap de creat per un altre programa.

## Canvia una trama

Selecciona-la (fes clic en una de les seves línies). A {{ui:Propietats}}: {{ui:Patró}}, {{ui:Escala del patró}} i {{ui:Angle del patró}}. Les trames de dibuixos oberts mostren el seu patró quan és un dels estàndard; les altres es mostren com un to clar del seu color.

## Errors habituals

- **«No hi ha cap contorn tancat al voltant d'aquest punt.»** Hi ha un forat al contorn, o part d'ell és fora de la pantalla: CadCraft només mira el que es veu. Tanca el forat (fes zoom als cantons) o redueix el zoom.
- **«El patró és massa dens per dibuixar-lo a aquesta escala.»** Les línies quedarien més juntes del que el dibuix pot mostrar. Usa una escala més gran: prova l'escala de traçat (20 per a 1:20).
- **El patró es veu molt gran o molt petit.** L'escala és en unitats de dibuix per unitat de patró; vegeu el pas 4 de dalt.
- **La trama ha deixat de seguir el seu contorn.** Una trama feta amb {{cmd:HATCH}} es queda amb els objectes amb què es va fer: si mous, gires o escales el contorn, la trama el segueix; si el reformes amb una nansa, la trama es torna a calcular. L'enllaç s'acaba quan el contorn ja no es tanca, quan reformes la trama a mà o quan la retalles, i la línia d'ordres ho indica. No es perd res: torna a fer la trama de l'àrea per enllaçar-la de nou.

## Una trama que es queda amb el seu contorn

Una trama feta amb `HATCH` recorda què la delimita. Si mous, gires o escales el contorn, la trama i el seu patró el segueixen. Arrossega una nansa per reformar el contorn i la trama es torna a calcular. Si mous la trama sola, el contorn l'acompanya també, com una forma omplerta en un programa de dibuix.

L'enllaç s'acaba, i la línia d'ordres ho indica, si el contorn ja no es tanca o si reformes la trama a mà. La trama en si es manté. Escriu `AS` mentre fas la trama per fer trames independents. Si copies una trama amb el seu contorn, la còpia té el seu propi enllaç.

`HATCHEDIT` (`HE`) canvia el patró, l'escala, l'angle i l'origen d'una trama, i l'enllaça a un contorn o acaba l'enllaç. L'enllaç es desa en fitxers DWG i DXF 2000. Un fitxer DXF R12 no té objecte de trama, i els enllaços fets en altres programes no es llegeixen: usa `HATCHEDIT` i Enllaça per a aquests casos.

Una trama que ja no té contorn (perquè s'ha esborrat o perquè el fitxer no el portava) pot recuperar-lo: `HATCHGENERATEBOUNDARY` (`HGB`) dibuixa una polilínia tancada al voltant de cada bucle de la trama i, si respons Sí, enllaça la trama amb elles.

## Un farciment de degradat

`GRADIENT` (`GD`) omple una àrea amb un degradat en lloc d'un patró: les mateixes seleccions que `HATCH`, després de preguntar el tipus (lineal, cilíndric, esfèric, hemisfèric, corbat, i cadascun d'aquests invertit), un color amb una tonalitat o dos colors, l'angle, i si és centrat o no. A `HATCH` l'opció `G` fa el mateix. `HATCHEDIT` `G`, o {{ui:Propietats}} sota Degradat, canvia un degradat o converteix qualsevol trama en un.

Un degradat es veu a la pantalla i als traçats. Si el deus com a DWG 2004 o posterior, els altres programes reben una trama de degradat real. DXF 2000 i DWG 2000 no tenen degradat: allà CadCraft el conserva només per a si mateix, i els altres programes veuen un farciment sòlid amb el primer color.

## Retalla una trama

`TRIM` retalla una trama com qualsevol altre objecte. Fes clic a la trama al costat de la vora de tall que vols eliminar: les vores divideixen l'àrea amb trama i es retira aquella part. En mode Ràpid tots els objectes són vores de tall; tria les vores primer (opció `T`) quan n'hi hagi moltes. Una trama retallada ja no està enllaçada al seu contorn, perquè ja no l'omple.
