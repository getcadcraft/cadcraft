---
title: Unosite i prikazujte pravce i uglove u stepenima, minutima i sekundama
summary: Unesite pravac kao geodetski azimut, na primer N45°23'30"E, ili kao stepene, minute i sekunde gde god se traži ugao, i izaberite kako crtež prikazuje uglove pomoću AUNITS.
keywords: azimut, geodetski azimut, kvadrantni azimut, N45E, stepeni minuti sekunde, DMS, ugao, pravac, parcela, parcele, iskolči, traverz, AUNITS, ANGUNITS, format ugla, polarno, direktno rastojanje, DIST
from: af805567
---

Gde god CadCraft traži **ugao ili pravac**, možete ukucati **kvadrantni azimut** ili ugao u **stepenima, minutima i sekundama**, kao i običan broj stepeni.

## Azimuti

Azimut imenuje sever ili jug, zatim ugao do 90°, pa istok ili zapad:

| Ukucate | Pravac |
|---|---|
| `N45°23'30"E` ili `N45d23'30"E` | 45°23'30" od severa ka istoku |
| `S10-30-00W` ili `S 10 30 W` | 10°30' od juga ka zapadu (crtice ili razmaci između delova) |
| `N45.5E` | 45.5° od severa ka istoku |
| `N`, `E`, `S`, `W` | tačno sever, istok, jug, zapad |

Slova mogu biti velika ili mala. `d` i `°` znače isto; `'` su minuti, a `"` su sekunde.

Da iskolčite liniju parcele dugu 20 m pod N45°23'E, pokrenite {{cmd:LINE}} i ukucajte prvu tačku, pa `@20<N45d23'E`. Isto važi za ugao na upitu komande {{cmd:ROTATE}}, za svaki drugi upit koji traži ugao, i u polju ugla u {{ui:Dinamički unos}}.

## Stepeni, minuti, sekunde

`45°23'30"`, `45d23'30"`, `45d30'` ili `45d` je ugao od X ose, u smeru suprotnom od kretanja kazaljke na satu. Znak `°` ili `d` je potreban: `45-23-30` se čita kao računanje (45 − 23 − 30). Minuti i sekunde moraju biti manji od 60. Običan broj, uz računanje (`360/7`), i dalje radi.

## Kako se prikazuju uglovi

Ukucajte {{cmd:AUNITS}} (ili izaberite {{ui:Format ugla}} u {{ui:Svojstva}} › {{ui:Trenutna podešavanja}}) i izaberite:

- **Decimalni stepeni** (podrazumevano): `44.6083°`.
- **Stepeni, minuti, sekunde**: `44°36'30"`.
- **Geodetski azimuti**: `N45°23'30"E`.

Tačnost prati ono što unesete za {{cmd:AUNITS}}: 0 prikazuje stepene, 2 minute, 4 sekunde, a 5 do 8 dodaju decimale sekunde. Format se prikazuje u {{cmd:DIST}}, u statusnoj traci, u dinamičkom unosu i savetima za praćenje, i u poljima ugla u {{ui:Svojstva}} (polje koje menjate prihvata bilo koji od gore navedenih oblika). To je jedan korak poništavanja i čuva se u DWG i DXF datotekama (`$AUNITS`, `$AUPREC`); LISP ga čita i upisuje kao `AUNITS` i `AUPREC`.
