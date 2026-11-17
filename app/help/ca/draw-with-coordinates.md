---
title: Dibuixa amb coordenades
summary: Dibuixa un contorn exacte de planta escrivint coordenades absolutes, relatives i polars, i amb entrada de distància directa.
keywords: línia, pline, polilínia, coordenades, relatiu, polar, absolut, distància directa, @, escriure punts, exacte, orto
from: 19e82350
---

## Què crearàs

El contorn d'una habitació en forma de L, de 6000 per 4500 amb una entrant de 2000 per 1500, dibuixat exactament, més un mur a 30 graus. Utilitzareu les quatre maneres d'escriure un punt. Treballeu en mil·límetres: una unitat de dibuix equival a un mil·límetre.

La referència ràpida de tots els formats és a [Entrada de coordenades i distàncies](topic:coordinate-entry).

## Abans de començar

1. Obriu CadCraft. Si hi ha un dibuix obert, feu clic a {{ui:Nova}} primer.
2. Premeu {{key:Esc}} perquè no hi hagi res seleccionat. El panell de la dreta mostra {{ui:Configuració actual}}.
3. Definiu {{ui:Unitats}} a {{ui:Mil·límetres}}. No es canvia cap mida; només indica als fulls i a les impressions què significa una unitat.

## Coordenades absolutes: el primer punt

Una coordenada absoluta és una posició mesurada des de l'origen, escrita com `x,y`.

1. Escriviu `L` i premeu {{key:Enter}}. El missatge diu `Specify first point:`.
2. Escriviu `0,0` i premeu {{key:Enter}}.

La línia ara es mostra com una línia elàstica des de l'origen fins a la creueta. Les coordenades de la barra d'estat mostren la distància i l'angle des del punt inicial mentre us moveu.

## Coordenades relatives: @dx,dy

Una coordenada relativa s'escriu com `@dx,dy`: tant de recorregut horitzontal, tant de vertical, des de l'últim punt. Els nombres negatius van a l'esquerra o cap avall.

3. Escriviu `@6000,0` i premeu {{key:Enter}}. Una línia de 6000 va cap a la dreta.
4. Escriviu `@0,3000` i premeu {{key:Enter}}.
5. Escriviu `@-2000,0` i premeu {{key:Enter}}.
6. Escriviu `@0,1500` i premeu {{key:Enter}}.

Hauríeu de veure quatre línies connectades que pugen pel costat dret de l'habitació.

## Entrada de distància directa: un nombre sol

Quan escriviu un únic nombre, CadCraft avança aquesta distància en la direcció de la creueta. Activeu l'Orto perquè la direcció s'ajusti a horitzontal o vertical.

7. Premeu {{key:F8}}, o feu clic a {{ui:Orto}} a la barra d'estat. La barra d'estat diu "Orto activat".
8. Moveu la creueta a l'esquerra de l'últim punt. La línia elàstica es manté horitzontal.
9. Escriviu `4000` i premeu {{key:Enter}}. La línia va 4000 cap a l'esquerra.
10. Moveu la creueta per sota de l'últim punt.
11. Escriviu `4500` i premeu {{key:Enter}}. Torneu al punt inicial.
12. Premeu {{key:Enter}} a la línia d'ordres buida per acabar l'ordre.

Ara teniu un contorn en L tancat, format per sis línies separades.

:::mac
La tecla F8 pot controlar la reproducció multimèdia en un teclat de Mac. Mantingueu premuda la tecla **fn** i premeu F8, o feu clic a {{ui:Orto}}. Vegeu [Tecles, ratolins i panells tàctils](common:keys).
:::

13. Feu clic a {{ui:Extensió}} per veure-ho tot.

## Coordenades polars: @distance<angle

Una coordenada polar s'escriu com `@distance<angle`. Els angles són en graus, mesurats en sentit antihorari des de la direcció X positiva: 0 és a la dreta, 90 és amunt, 180 és a l'esquerra, 270 (o -90) és avall.

14. Escriviu `L` i premeu {{key:Enter}}.
15. Escriviu `6000,0` i premeu {{key:Enter}} per començar a la cantonada inferior dreta.
16. Escriviu `@2500<-30` i premeu {{key:Enter}}. Una línia de 2500 surt de la cantonada, cap avall i a la dreta amb 30 graus per sota de l'horitzontal.
17. Premeu {{key:Enter}} per acabar l'ordre.

Una coordenada polar sense `@`, com `2500<30`, es mesura des de l'origen i no des de l'últim punt.

## El mateix contorn com una polilínia

Sis línies separades són correctes per a moltes feines, però una polilínia és un sol objecte: es desplaça, es mesura i se selecciona com un tot. Utilitzeu {{cmd:PLINE}} amb la mateixa entrada.

1. Escriviu `PL` i premeu {{key:Enter}}.
2. Escriviu `0,-6000` i premeu {{key:Enter}} per començar per sota del primer contorn.
3. Escriviu `@6000,0`, i després premeu {{key:Enter}}.
4. Escriviu `@0,3000`, i després premeu {{key:Enter}}.
5. Escriviu `@-2000,0`, i després premeu {{key:Enter}}.
6. Escriviu `@0,1500`, i després premeu {{key:Enter}}.
7. Escriviu `@-4000,0`, i després premeu {{key:Enter}}.
8. Escriviu `C` i premeu {{key:Enter}}. La polilínia es tanca i l'ordre acaba.
9. Feu clic al nou contorn. El panell de la dreta mostra "Polilínia", els seus {{ui:Vèrtexs}}, {{ui:Longitud}} i, com que és tancada, la seva {{ui:Àrea}}.

L'àrea hauria de ser 24000000 (mil·límetres quadrats, que són 24 metres quadrats).

## Opcions mentre dibuixeu

- A {{cmd:LINE}} i {{cmd:PLINE}}, escriviu `U` i premeu {{key:Enter}} per desfer l'últim segment sense sortir de l'ordre.
- A {{cmd:LINE}}, `C` tanca fins al primer punt quan hi ha almenys dos segments.
- A {{cmd:PLINE}}, `A` canvia a segments d'arc (cada arc continua suaument des del segment anterior), i `L` torna a les línies. En el mode d'arc, l'opció de tancar és `CL`.
- Si premeu {{key:Enter}} a `Specify first point:` a {{cmd:LINE}}, comença des de l'últim punt que heu donat, de manera que podeu continuar on heu aturat.

## Errors habituals

- **Escriure `6000,0` quan volíeu `@6000,0`.** Sense `@`, el punt es mesura des de l'origen i no des de l'últim punt, de manera que la línia va a un lloc inesperat. A CadCraft, `x,y` és sempre absolut. Premeu `U` i {{key:Enter}} per desfer-ho.
- **Una coma escrita com a punt decimal.** Els decimals s'escriuen amb punt: `1250.5`. La coma sempre separa X de Y.
- **La distància directa va en la direcció equivocada.** Un nombre sol segueix la creueta. Moveu la creueta cap al costat que vulgueu abans de premer {{key:Enter}}, i activeu {{ui:Orto}} per a línies rectes.
- **"Cal un punt o una paraula clau d'opció."** CadCraft no ha entès què heu escrit. Comproveu si hi ha espais dins el nombre o falta una coma, i torneu a escriure-ho.
- **Peus i polzades.** CadCraft només llegeix nombres simples. Escriviu `150` per a 12'-6" en un dibuix en polzades, o `12.5` en un dibuix en peus.
