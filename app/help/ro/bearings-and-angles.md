---
title: Tastarea și afișarea orientărilor și unghiurilor în grade, minute și secunde
summary: Tastați o direcție ca orientare de topograf, cum ar fi N45°23'30"E, sau ca grade-minute-secunde oriunde se cere un unghi, și alegeți cum arată unghiurile în desen cu AUNITS.
keywords: orientare, bearing, bearings, topograf, surveyor, orientare pe cadran, quadrant bearing, N45E, grade minute secunde, degrees minutes seconds, DMS, unghi, angle, direcție, direction, lot, lots, trasare, lay out, drumuire, traverse, AUNITS, ANGUNITS, format unghi, angle format, polar, distanță directă, direct distance, DIST
from: af805567
---

Oriunde CadCraft cere un **unghi sau o direcție**, puteți tasta o **orientare pe cadran** sau un unghi în **grade, minute și secunde**, pe lângă un simplu număr de grade.

## Orientări

O orientare numește nordul sau sudul, un unghi de până la 90°, apoi estul sau vestul:

| Tastați | Direcție |
|---|---|
| `N45°23'30"E` sau `N45d23'30"E` | 45°23'30" de la nord spre est |
| `S10-30-00W` sau `S 10 30 W` | 10°30' de la sud spre vest (liniuțe sau spații între părți) |
| `N45.5E` | 45.5° de la nord spre est |
| `N`, `E`, `S`, `W` | direct nord, est, sud, vest |

Literele pot fi scrise cu majuscule sau minuscule; `W` înseamnă vest. `d` și `°` înseamnă același lucru; `'` înseamnă minute, iar `"` secunde.

Pentru a trasa o linie de lot de 20 m la N45°23'E, porniți {{cmd:LINE}} și tastați primul punct, apoi `@20<N45d23'E`. Același lucru funcționează la solicitarea unghiului de la {{cmd:ROTATE}} și la orice altă solicitare care cere un unghi, precum și în caseta unghiului din {{ui:Dynamic input}}.

## Grade, minute, secunde

`45°23'30"`, `45d23'30"`, `45d30'` sau `45d` este un unghi față de axa X, în sens invers acelor de ceasornic. Simbolul `°` sau `d` este necesar: `45-23-30` se citește ca aritmetică (45 − 23 − 30). Minutele și secundele trebuie să fie sub 60. Un număr simplu, cu aritmetică (`360/7`), funcționează în continuare.

## Cum se afișează unghiurile

Tastați {{cmd:AUNITS}} (sau alegeți {{ui:Angle format}} în {{ui:Properties}} › {{ui:Current settings}}) și alegeți:

- **Grade zecimale** (implicit): `44.6083°`.
- **Grade-minute-secunde**: `44°36'30"`.
- **Orientări de topograf**: `N45°23'30"E`.

Precizia urmează ce tastați pentru {{cmd:AUNITS}}: 0 arată grade, 2 minute, 4 secunde, iar de la 5 la 8 adaugă zecimale ale secundei. Formatul apare în {{cmd:DIST}}, în bara de stare, în introducerea dinamică și în sugestiile de urmărire, precum și în casetele de unghi din {{ui:Properties}} (o casetă pe care o editați acceptă oricare dintre formele de mai sus). Este un singur pas de anulare și se salvează în fișierele DWG și DXF (`$AUNITS`, `$AUPREC`); LISP îl citește și îl scrie ca `AUNITS` și `AUPREC`.
