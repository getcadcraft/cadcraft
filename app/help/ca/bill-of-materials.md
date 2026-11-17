---
title: Quadres d'amidaments per zona
summary: Marcar àrees del dibuix com a zones i col·locar una taula per a cada zona que compti els blocs que hi ha dins. Les taules segueixen el dibuix mentre treballeu, i es tria quines columnes mostra cadascuna.
keywords: quadre d'amidaments, BOM, llista de materials, quadre, zona, àrea, taula, recompte, atribut, columnes, número d'element, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Una **zona** és una àrea amb nom del dibuix. Una **taula de quadre d'amidaments** llista el que hi ha dins d'una zona, o de tot el dibuix: cada bloc amb la seva quantitat i els seus valors d'atribut. Un dibuix pot tenir tantes zones i taules com calgui, i una zona pot tenir diverses taules amb columnes diferents.

Les eines són a la pestanya Blocs, sota {{ui:Quadre d'amidaments}}, al menú Més del grup Blocs, i es poden escriure.

## Crea una zona

Escriviu {{cmd:BOMZONE}} i feu-ne una de les coses següents:

- feu clic a dues cantonades oposades per fer un rectangle,
- trieu {{ui:Polígon}}, feu clic a cada cantonada i premeu Enter per tancar-lo, o
- trieu {{ui:Objecte}} i seleccioneu una polilínia tancada, un cercle, una el·lipse o una spline tancada. El seu contorn es copia; l'objecte es manté tal com està.

Després escriviu el nom de la zona. La zona es dibuixa com un contorn discontinu amb el seu nom sobre la cantonada superior esquerra, a la capa `BOM-ZONES`, que no es traça. Activeu el traçat d'aquesta capa si voleu les zones al paper.

Una zona és una polilínia tancada ordinària: mogueu-la, estireu-la o arrossegueu-ne les nanses, i el seu nom la segueix. Per reanomenar una zona, editeu el text del nom, o utilitzeu {{cmd:BOMZONE}} i {{ui:Reanomena}}. {{ui:Zones}} llista totes les zones i quantes taules té.

## Col·locar una taula

Escriviu {{cmd:BOMTABLE}} (o {{cmd:BOM}}), trieu el contorn de la zona o el seu nom, indiqueu l'alçada del text i feu clic on ha d'anar la cantonada superior esquerra de la taula. Premeu Enter en lloc de triar una zona, o trieu {{ui:Tot}}, per a una taula de tot el dibuix.

Una taula nova mostra el número d'element, la quantitat, el nom del bloc i una columna per a cada atribut que porten els blocs (els primers sis; els altres s'ofereixen sense marcar). Els blocs amb el mateix nom i els mateixos valors d'atribut comparteixen una fila.

## Què compta com a dins

- Un bloc compta a la zona que conté el seu **punt d'inserció**.
- Una línia, arc, cercle, polilínia, el·lipse, spline o trama compta **sencera** a la zona que conté el punt mig de les seves extensions (per a una línia, el seu punt mitjà). La seva longitud no es talla a la vora de la zona.
- Un punt exactament sobre la vora és dins.
- Les zones es poden superposar. Cada zona compta per si mateixa, de manera que un objecte a la zona de solapament és a totes dues taules.

## Les taules segueixen el dibuix

Quan afegiu, moveu, copieu o esborreu un bloc, editeu un atribut, o reformeu o moveu una zona, cada taula es redibuixa en el mateix pas. Desfer desfà alhora la vostra edició i el canvi de la taula.

Per aturar que una taula segueixi el dibuix, marqueu {{ui:Congelada}} a la seva configuració. Una taula congelada només canvia quan editeu la seva configuració o escriviu {{cmd:BOMUPDATE}}, que actualitza totes les taules en aquell moment.

## Tria les columnes

Seleccioneu una taula i escriviu {{cmd:BOMEDIT}}. Al diàleg:

- **Columnes**: marqueu les que cal mostrar (número d'element, quantitat, nom, capa, longitud, àrea, observacions i cada atribut), escriviu la vostra pròpia capçalera per a qualsevol d'elles, i mogueu-les amunt o avall.
- {{ui:Agrupa les files per}}: nom de bloc i valors d'atribut, només nom de bloc, capa, o un atribut. En una fila combinada, un valor que difereix entre blocs es llegeix "varia".
- {{ui:Ordena per}} qualsevol columna, ascendent o descendent.
- {{ui:Títol}}, {{ui:Mostra el títol}} i {{ui:Fila de totals}}.
- {{ui:Compta els traçats per capa}} afegeix una fila per capa amb el nombre d'objectes, la seva longitud total i, per a les formes tancades, la seva àrea total, en unitats del dibuix.
- **Observacions**: marqueu la columna Observacions i després escriviu una observació per a qualsevol fila a la taula de la part inferior del diàleg.

Cada taula conserva les seves pròpies opcions.

## Números d'element

Una fila conserva el seu número d'element mentre sigui a la taula. Una fila nova pren el següent número lliure, i un número ja assignat no es torna a fer servir, de manera que les bombolles i les notes que citen un número continuen sent correctes. {{ui:Torna a numerar els elements}} els numera des de 1 en l'ordre mostrat.

Una fila es reconeix pel que agrupa: si canvieu com s'agrupen les files, o canvieu un valor d'atribut que usa l'agrupació, la fila compta com una de nova.

## Exporta i altres programes

{{cmd:BOMEXPORT}}, o {{ui:Exporta CSV}} al diàleg, desa una taula com a fitxer .csv per a un full de càlcul.

En un fitxer DWG o DXF, una taula és un bloc ordinari de línies i text, de manera que altres programes la mostren i la tracen tal com s'ha dibuixat. Allà no és un objecte de taula, i no s'actualitza en altres programes. L'enllaç a la seva zona es conserva al fitxer com a dades d'extensió que CadCraft llegeix de nou, de manera que la taula torna a estar activa quan torneu a obrir el dibuix a CadCraft. Un DXF R12 d'un dibuix sense full no conserva la configuració de "no traçat" de la capa de la zona.

Descompondre una taula la converteix en línies i text solts i acaba l'enllaç.
