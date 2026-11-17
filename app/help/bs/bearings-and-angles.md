---
title: Upisivanje i prikaz smjerova i uglova u stepenima, minutama i sekundama
summary: Upišite smjer kao geodetski smjer, poput N45°23'30"E, ili kao stepene-minute-sekunde bilo gdje gdje se traži ugao, te izaberite kako crtež prikazuje uglove pomoću AUNITS.
keywords: smjer, bearing, bearings, geodeta, surveyor, kvadrantni smjer, quadrant bearing, N45E, stepeni minute sekunde, degrees minutes seconds, DMS, ugao, angle, pravac, direction, parcela, lot, iscrtaj, lay out, poligonski vlak, traverse, AUNITS, ANGUNITS, format ugla, angle format, polarni, polar, direktna udaljenost, direct distance, DIST
from: af805567
---

Bilo gdje gdje CadCraft traži **ugao ili smjer**, možete upisati **kvadrantni smjer** ili ugao u **stepenima, minutama i sekundama**, kao i običan broj stepeni.

## Smjerovi

Smjer navodi sjever ili jug, ugao do 90°, pa istok ili zapad:

| Upisujete | Smjer |
|---|---|
| `N45°23'30"E` ili `N45d23'30"E` | 45°23'30" od sjevera prema istoku |
| `S10-30-00W` ili `S 10 30 W` | 10°30' od juga prema zapadu (crtice ili razmaci između dijelova) |
| `N45.5E` | 45,5° od sjevera prema istoku |
| `N`, `E`, `S`, `W` | tačno sjever, istok, jug, zapad |

Slova mogu biti velika ili mala. `d` i `°` znače isto; `'` su minute, a `"` su sekunde.

Da iscrtate liniju parcele dugu 20 m pod N45°23'E, pokrenite {{cmd:LINE}} i upišite prvu tačku, pa `@20<N45d23'E`. Isto radi na upitu za ugao komande {{cmd:ROTATE}} i na svakom drugom upitu koji traži ugao, te u kutiji za ugao u {{ui:Dynamic input}}.

## Stepeni, minute, sekunde

`45°23'30"`, `45d23'30"`, `45d30'` ili `45d` je ugao od X ose, suprotno kretanju kazaljke na satu. Oznaka `°` ili `d` je obavezna: `45-23-30` se čita kao računska operacija (45 − 23 − 30). Minute i sekunde moraju biti manje od 60. Običan broj, uključujući računske izraze (`360/7`), i dalje radi.

## Kako se uglovi prikazuju

Upišite {{cmd:AUNITS}} (ili izaberite {{ui:Angle format}} u {{ui:Properties}} › {{ui:Current settings}}) i izaberite:

- **Decimalni stepeni** (zadano): `44.6083°`.
- **Stepeni-minute-sekunde**: `44°36'30"`.
- **Geodetski smjerovi**: `N45°23'30"E`.

Preciznost prati ono što upišete za {{cmd:AUNITS}}: 0 prikazuje stepene, 2 minute, 4 sekunde, a od 5 do 8 dodaju decimale sekundi. Format se prikazuje u {{cmd:DIST}}, u statusnoj traci, u dinamičkom unosu i u tekstu praćenja, te u kutijama za uglove u {{ui:Properties}} (kutija koju uređujete prihvata bilo koji od gore navedenih oblika). To je jedan korak poništavanja i čuva se u DWG i DXF datotekama (`$AUNITS`, `$AUPREC`); LISP ga čita i piše kao `AUNITS` i `AUPREC`.
