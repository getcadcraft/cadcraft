---
title: Introducció de coordenades i distàncies
summary: Totes les maneres d'escriure un punt, una distància, un angle o un número a la línia d'ordres de CadCraft, amb exemples.
keywords: entrada dinàmica, dyn, f12, tab, coordenades, absolut, relatiu, polar, @, distància directa, angle, graus, últim punt, lastpoint, escriure punts, entrada, aritmètica, càlcul, calculadora, cal, suma, fracció, expressió
from: 7de9252d
---

## Punts

Quan la indicació demani un punt, escriviu una d'aquestes opcions i premeu {{key:Enter}}:

| Escriviu | Significat | Exemple |
|---|---|---|
| `x,y` | Absolut: mesurat des de l'origen 0,0 | `2500,1200` |
| `#x,y` | També absolut (acceptat per costum) | `#2500,1200` |
| `@dx,dy` | Relatiu: a la dreta i amunt des de l'últim punt | `@600,0` |
| `@d<a` | Polar relatiu: distància i angle des de l'últim punt | `@1500<45` |
| `d<a` | Polar absolut: distància i angle des de l'origen | `3000<90` |
| un sol número | Distància directa: a aquesta distància del punt base, cap al punt de mira | `1200` |
| `*x,y`, `@*dx,dy` | Coordenades del món mentre hi ha un SCP definit | `*0,0` |

Amb un SCP definit ({{cmd:UCS}}), `x,y`, `@dx,dy` i l'angle de `d<a` es mesuren al llarg dels eixos del SCP. Vegeu [Gira la vista i useu les vostres pròpies coordenades](topic:ucs-and-turned-view).

O feu clic al dibuix: les referències a objectes i l'orto s'apliquen als clics.

Regles:

- Una coma separa X de Y. Els decimals s'escriuen amb punt: `1250.75,300`.
- Els valors negatius van a l'esquerra i avall: `@-600,0`.
- No escriviu espais: {{key:Space}} envia la línia, igual que {{key:Enter}}.
- Els números poden usar exponents: `1e3` és 1000.
- No s'escriuen unitats ni la notació de peus i polzades. Escriviu números senzills en unitats del dibuix.

## L'últim punt

`@` compta des de l'**últim punt que heu donat a qualsevol indicació de punt**, en qualsevol ordre: un clic, una referència o un punt escrit. Es recorda entre ordres, de manera que podeu començar una línia nova `@0,500` lluny d'on va acabar l'anterior. Abans d'haver donat cap punt, `@` compta des de 0,0.

Alguns llocs on això importa:

- En {{cmd:COPY}}, després de la primera còpia l'últim punt és el punt d'aquella còpia. `@600,0` dues vegades situa les còpies a 600 i 1200 de l'original.
- Després de col·locar una cota, l'últim punt és on heu col·locat la línia de cota, no el final de la cota.

Quan tingueu dubtes, useu un punt absolut, una referència o una distància directa.

## Entrada de distància directa

Un número sol és una distància des del **punt base** (el punt des d'on comença la banda elàstica) cap al punt de mira:

1. Moveu el punt de mira en la direcció que voleu.
2. Escriviu la distància i premeu {{key:Enter}}.

Amb {{ui:Ortho}} activat, la direcció s'ajusta a horitzontal o vertical, cosa que fa d'aquesta la manera més ràpida de dibuixar murs quadrats. Si no hi ha punt base, o si el punt de mira és exactament sobre ell, el número es rebutja amb «Cal un punt o una paraula clau d'opció.»

## Angles

- En graus, com a número senzill: `30`, `-45`, `112.5`.
- Mesurat en sentit antihorari des de la direcció X positiva (apuntant a la dreta): 0 és a la dreta, 90 amunt, 180 a l'esquerra, 270 o -90 avall.
- Quan es demana un angle (rotació, angle del text), també podeu fer clic: l'angle es mesura des del punt base fins al clic. Abans que hi hagi punt base, el primer clic el defineix i la indicació demana un segon punt.

## Distàncies

Quan es demana una distància (radi, desfasament, alçada del text, factor d'escala):

- escriviu un número positiu (en un dibuix amb peus i polzades també `12'6"` o `6-1/2`: vegeu [Peus i polzades](topic:units-papers-scales#feet-and-inches-and-fractions)), o
- feu clic en un punt: la distància des del punt base de l'ordre fins a aquest punt, o
- feu clic en dos punts quan no hi ha punt base: la indicació canvia a `Especifiqueu el segon punt`.

«Cal un número positiu o dos punts.» vol dir que el valor no era un número, o que era negatiu.

## Aritmètica en un valor escrit

Allà on s'escriu una longitud, una coordenada, un angle o un número (la línia d'ordres, l'entrada dinàmica, els quadres de Propietats i els diàlegs), podeu escriure un càlcul amb `+`, `-`, `*`, `/` i parèntesis en lloc de fer-lo abans:

| Escriviu | Dona |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (en un dibuix amb peus i polzades) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, en les unitats del dibuix (quan estan definides) |
| `@4+7/16,0` | un punt 4.4375 a la dreta de l'últim |
| `360/7` | un angle de 51.43 graus |

- Un guió escrit dins d'una longitud forma part d'ella: `4-7/16` és 4 7/16 i `24'-6"` és 24 peus 6 polzades. Per restar després d'una marca de peus, acabeu primer la longitud, `24'-0"-6"`, o poseu el càlcul entre parèntesis amb espais al voltant del guió, `(24' - 6")` (dins dels parèntesis un espai és un espai; en altres llocs envia {{key:Enter}}).
- Un número sense unitat sumat a una longitud és en unitats del dibuix; multiplicar-la o dividir-la per un número n'escala la longitud. Dues longitudes multiplicades fan una àrea, per això `2'*3'` es rebutja.
- `abs`, `round`, `ceil` i `floor` també funcionen: `round(10/3)`.
- Un càlcul que no es pot llegir es rebutja indicant on ha fallat, per exemple «El càlcul acaba massa aviat (caràcter 3): falta un valor.» Mai no es llegeix com a 0. {{cmd:CAL}} escriu el valor d'un càlcul.

## Entrada dinàmica

{{ui:Dyn}} ({{key:F12}}, a la barra d'estat) posa els valors al costat del punt de mira mentre una ordre demana un punt.

- Sense punt base encara (el primer punt d'una línia), els dos camps són **X** i **Y**.
- Després, són la **distància** i l'**angle** des de l'últim punt.

Escriure continua anant a la línia d'ordres; el camp al costat del punt de mira en mostra el valor, i la banda elàstica el segueix.

1. Escriviu un valor: va al camp ressaltat.
2. Premeu {{key:Tab}} (o una coma després de X). El valor queda bloquejat (en negreta) i es ressalta el camp següent. Una distància bloquejada manté la banda elàstica d'aquesta llargada mentre apunteu amb el ratolí.
3. Escriviu el segon valor, o només apunteu, i premeu {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} dibuixa 50 cap amunt des de l'últim punt.

Premer {{key:Enter}} després d'un sol valor, sense {{key:Tab}}, funciona com a entrada de distància directa. Els peus i les polzades també funcionen als camps (`12'6"`). Les indicacions de distància i angle (el radi d'un cercle, una rotació) mostren el seu valor també al costat del punt de mira.

## Opcions i valors per defecte

- Les opcions apareixen entre claudàtors. Escriviu les lletres majúscules d'una opció (`D` per a `[Diàmetre]`, `CL` per a `CLose`) i premeu {{key:Enter}}. També funcionen els inicis més llargs de la paraula (`DIA`).
- Un valor per defecte apareix entre angles, com `<500>`. Premeu {{key:Enter}} o feu clic dret per fer-lo servir.

## Altres disposicions de teclat i el teclat numèric

Els noms de les ordres, els noms curts i les lletres d'opció són lletres llatines. Amb una disposició grega, ciríl·lica (rus, ucraïnès, bielorús, serbi, macedoni, búlgar), hebrea, àrab, persa, tailandesa o coreana activa, no cal canviar de disposició: quan la paraula que heu escrit, tal com és, no és una ordre, un nom curt ni una opció, CadCraft la llegeix segons les tecles que heu premut. La tecla marcada amb `L` en un teclat llatí encara inicia `LINE`, i la tecla `C` encara respon `Close`, sigui quina lletra hi posi la disposició. La llista d'ordres coincidents sobre la línia d'ordres segueix la mateixa regla. El text que escriviu quan una ordre demana text (el contingut de {{cmd:TEXT}}, un nom) no es canvia mai.

En les disposicions on la tecla de decimal del teclat numèric dona una coma, aquesta tecla escriu un punt a la línia d'ordres i als quadres de números, de manera que `12.5` es pot escriure des del teclat numèric. La tecla de coma del teclat principal continua separant `x,y`.

Totes dues opcions es poden desactivar a {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} i {{ui:Keypad decimal key}}.

## La visualització de coordenades

La barra d'estat mostra la X i la Y del punt de mira (en el SCP quan n'hi ha un definit), després de les referències i de l'orto. Mentre una ordre té un punt base, hi afegeix `Δ` amb la distància i l'angle des d'aquell punt, per exemple `Δ 1500 < 30°`: els números que escriuríeu com a `@1500<30`.

Useu {{cmd:ID}} per mostrar les coordenades d'un punt i {{cmd:DIST}} per mesurar entre dos punts.
