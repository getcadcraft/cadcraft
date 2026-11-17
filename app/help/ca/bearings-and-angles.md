---
title: Escriure i mostrar rumbs i angles en graus, minuts i segons
summary: Escriure una direcció com a rumb topogràfic, com N45°23'30"E, o com a graus, minuts i segons en qualsevol lloc on es demani un angle, i triar com mostra el dibuix els angles amb AUNITS.
keywords: rumb, rumbs, topografia, rumb de quadrant, N45E, graus minuts segons, DMS, angle, direcció, parcel·la, parcel·les, replantejar, itinerari, AUNITS, ANGUNITS, format de l'angle, polar, distància directa, DIST
from: af805567
---

Sempre que CadCraft demani un **angle o una direcció**, podeu escriure un **rumb de quadrant** o un angle en **graus, minuts i segons**, a més d'un nombre de graus senzill.

## Rumbs

Un rumb indica nord o sud, un angle de fins a 90°, i després est o oest:

| Escriviu | Direcció |
|---|---|
| `N45°23'30"E` o `N45d23'30"E` | 45°23'30" des del nord cap a l'est |
| `S10-30-00W` o `S 10 30 W` | 10°30' des del sud cap a l'oest (guions o espais entre les parts) |
| `N45.5E` | 45.5° des del nord cap a l'est |
| `N`, `E`, `S`, `W` | directament nord, est, sud, oest |

Les lletres poden ser en majúscules o minúscules. En català, `O` també vol dir oest. `d` i `°` signifiquen el mateix; `'` són minuts i `"` són segons.

Per replantejar una línia de parcel·la de 20 m a N45°23'E, inicieu {{cmd:LINE}} i escriviu el primer punt, després `@20<N45d23'E`. Funciona igual a la indicació d'angle de {{cmd:ROTATE}} i a qualsevol altra indicació que demani un angle, i a la casella d'angle de {{ui:Entrada dinàmica}}.

## Graus, minuts, segons

`45°23'30"`, `45d23'30"`, `45d30'` o `45d` és un angle des de l'eix X, en sentit antihorari. Cal el `°` o la `d`: `45-23-30` es llegeix com a aritmètica (45 − 23 − 30). Els minuts i els segons han de ser inferiors a 60. Un nombre senzill, amb aritmètica (`360/7`), continua funcionant.

## Com es mostren els angles

Escriviu {{cmd:AUNITS}} (o trieu {{ui:Format de l'angle}} a {{ui:Propietats}} › {{ui:Configuració actual}}) i trieu:

- **Graus decimals** (el predeterminat): `44.6083°`.
- **Graus, minuts i segons**: `44°36'30"`.
- **Rumbs topogràfics**: `N45°23'30"E`.

La precisió segueix el que escriviu per a {{cmd:AUNITS}}: 0 mostra graus, 2 minuts, 4 segons, i de 5 a 8 afegeixen decimals de segon. El format es mostra a {{cmd:DIST}}, a la barra d'estat, a l'entrada dinàmica i als consells de seguiment, i a les caselles d'angle de {{ui:Propietats}} (una casella que editeu accepta qualsevol de les formes anteriors). És un sol pas per desfer i es desa als fitxers DWG i DXF (`$AUNITS`, `$AUPREC`); LISP el llegeix i l'escriu com a `AUNITS` i `AUPREC`.
