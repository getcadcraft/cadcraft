---
title: Upišite i prikažite smjerne kutove i kutove u stupnjevima, minutama i sekundama
summary: Upišite smjer kao geodetski smjerni kut, poput N45°23'30"E, ili kao stupnjeve, minute i sekunde bilo gdje gdje se traži kut, te odaberite kako crtež prikazuje kutove pomoću AUNITS.
keywords: smjerni kut, smjerni kutovi, geodet, smjerni kut po kvadrantu, N45E, stupnjevi minute sekunde, DMS, kut, smjer, čestica, granica čestice, iskolčenje, poligonski vlak, AUNITS, ANGUNITS, oblik kuta, polarno, izravna udaljenost, DIST
from: af805567
---

Bilo gdje gdje CadCraft traži **kut ili smjer**, možete upisati **smjerni kut po kvadrantu** ili kut u **stupnjevima, minutama i sekundama**, kao i običan broj stupnjeva.

## Smjerni kutovi

Smjerni kut imenuje sjever ili jug, kut do 90°, zatim istok ili zapad:

| Upisujete | Smjer |
|---|---|
| `N45°23'30"E` ili `N45d23'30"E` | 45°23'30" od sjevera prema istoku |
| `S10-30-00W` ili `S 10 30 W` | 10°30' od juga prema zapadu (crtice ili razmaci među dijelovima) |
| `N45.5E` | 45.5° od sjevera prema istoku |
| `N`, `E`, `S`, `W` | točno sjever, istok, jug, zapad |

Slova mogu biti velika ili mala. Na španjolskom `O` također znači zapad (oeste). `d` i `°` znače isto; `'` su minute, a `"` su sekunde.

Da iscrtate liniju granice čestice dugu 20 m pod N45°23'E, pokrenite {{cmd:LINE}} i upišite prvu točku, zatim `@20<N45d23'E`. Isto vrijedi na upitu za kut naredbe {{cmd:ROTATE}} i na svakom drugom upitu koji traži kut, te u polju kuta u {{ui:Dinamički unos}}.

## Stupnjevi, minute, sekunde

`45°23'30"`, `45d23'30"`, `45d30'` ili `45d` je kut od osi X, suprotno od kazaljke na satu. Oznaka `°` ili `d` je potrebna: `45-23-30` se čita kao računanje (45 − 23 − 30). Minute i sekunde moraju biti manje od 60. Obični broj, uz računanje (`360/7`), i dalje radi.

## Kako se kutovi prikazuju

Upišite {{cmd:AUNITS}} (ili odaberite {{ui:Oblik kuta}} u {{ui:Svojstva}} › {{ui:Trenutne postavke}}) i odaberite:

- **Decimalni stupnjevi** (zadano): `44.6083°`.
- **Stupnjevi, minute, sekunde**: `44°36'30"`.
- **Geodetski smjerni kutovi**: `N45°23'30"E`.

Preciznost prati što upišete za {{cmd:AUNITS}}: 0 prikazuje stupnjeve, 2 minute, 4 sekunde, a 5 do 8 dodaje decimale sekunde. Oblik se prikazuje u {{cmd:DIST}}, na statusnoj traci, u dinamičkom unosu i u savjetima praćenja, te u poljima kuta u {{ui:Svojstva}} (polje koje uređujete prima bilo koji od gore navedenih oblika). To je jedan korak poništavanja i sprema se u DWG i DXF datotekama (`$AUNITS`, `$AUPREC`); LISP ih čita i zapisuje kao `AUNITS` i `AUPREC`.
