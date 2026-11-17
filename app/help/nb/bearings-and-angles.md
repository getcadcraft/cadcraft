---
title: Skriv og vis retninger og vinkler i grader, minutter og sekunder
summary: Skriv en retning som en landmålers retningsvinkel, for eksempel N45°23'30"E, eller som grader, minutter og sekunder der en vinkel etterspørres. Velg hvordan tegningen viser vinkler med AUNITS.
keywords: retning, retninger, landmåler, kvadrantretning, N45E, grader minutter sekunder, DMS, vinkel, tomt, tomter, legge ut, polygontog, AUNITS, ANGUNITS, vinkelformat, polar, direkte avstand, DIST
from: af805567
---

Hvor som helst CadCraft spør etter en **vinkel eller en retning**, kan du skrive en **kvadrantretning** eller en vinkel i **grader, minutter og sekunder**. Et vanlig antall grader går også bra.

## Retninger

En retning angir nord eller sør, en vinkel opptil 90°, og deretter øst eller vest:

| Du skriver | Retning |
|---|---|
| `N45°23'30"E` eller `N45d23'30"E` | 45°23'30" fra nord mot øst |
| `S10-30-00W` eller `S 10 30 W` | 10°30' fra sør mot vest (bindestreker eller mellomrom mellom delene) |
| `N45.5E` | 45.5° fra nord mot øst |
| `N`, `E`, `S`, `W` | rett nord, øst, sør, vest |

Bokstavene kan skrives med store eller små bokstaver. På spansk betyr `O` også vest (oeste). `d` og `°` betyr det samme. `'` er minutter og `"` er sekunder.

For å legge ut en tomtelinje på 20 m på N45°23'E, start {{cmd:LINE}} og skriv første punkt. Skriv deretter `@20<N45d23'E`. Det samme virker ved {{cmd:ROTATE}}s vinkelspørsmål, ved hver annen ledetekst som spør etter en vinkel, og i vinkelboksen i {{ui:Dynamisk inndata}}.

## Grader, minutter, sekunder

`45°23'30"`, `45d23'30"`, `45d30'` eller `45d` er en vinkel fra X-aksen, mot klokken. `°` eller `d` må være med: `45-23-30` leses som regning (45 − 23 − 30). Minutter og sekunder må være under 60. Et vanlig tall, også med regning (`360/7`), virker fortsatt.

## Slik vises vinkler

Skriv {{cmd:AUNITS}} (eller velg {{ui:Vinkelformat}} i {{ui:Egenskaper}} › {{ui:Gjeldende innstillinger}}) og velg:

- **Desimalgrader** (standard): `44.6083°`.
- **Grader, minutter, sekunder**: `44°36'30"`.
- **Landmålerretninger**: `N45°23'30"E`.

Presisjonen følger det du skriver for {{cmd:AUNITS}}: 0 viser grader, 2 minutter, 4 sekunder, og 5 til 8 legger til desimaler av et sekund. Formatet vises i {{cmd:DIST}}, på statuslinjen, i dynamisk inndata og i sporingstips, og i vinkelboksene i {{ui:Egenskaper}}. En boks du redigerer, tar hvilken som helst av formene over. Det er ett steg å angre, og det lagres i DWG- og DXF-filer (`$AUNITS`, `$AUPREC`). LISP leser og skriver det som `AUNITS` og `AUPREC`.
