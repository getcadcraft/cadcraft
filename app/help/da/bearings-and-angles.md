---
title: Angiv og vis retninger og vinkler i grader, minutter og sekunder
summary: Skriv en retning som en landmålers retning, f.eks. N45°23'30"E, eller som grader, minutter og sekunder hvor som helst en vinkel spørges om, og vælg hvordan tegningen viser vinkler med AUNITS.
keywords: retning, retninger, landmåler, kvadrantretning, N45E, grader minutter sekunder, DMS, vinkel, retning, grundgrænse, grund, grunde, udlæg, polygontræk, AUNITS, ANGUNITS, vinkelformat, polar, direkte afstand, DIST
from: af805567
---

Hvor som helst CadCraft spørger efter en **vinkel eller en retning**, kan du skrive en **kvadrantretning** eller en vinkel i **grader, minutter og sekunder**, ligesom et almindeligt antal grader.

## Retninger

En retning angiver nord eller syd, en vinkel op til 90°, og derefter øst eller vest:

| Du skriver | Retning |
|---|---|
| `N45°23'30"E` eller `N45d23'30"E` | 45°23'30" fra nord mod øst |
| `S10-30-00W` eller `S 10 30 W` | 10°30' fra syd mod vest (bindestreger eller mellemrum mellem delene) |
| `N45.5E` | 45.5° fra nord mod øst |
| `N`, `E`, `S`, `W` | lige nord, øst, syd, vest |

Bogstaver kan være store eller små. `d` og `°` betyder det samme; `'` er minutter og `"` er sekunder.

For at udlægge en grundgrænse på 20 m lang på N45°23'E, start {{cmd:LINE}} og skriv det første punkt, og skriv derefter `@20<N45d23'E`. Det samme virker ved {{cmd:ROTATE}}'s vinkelprompt og ved alle andre prompter der spørger efter en vinkel, og i vinkelfeltet i {{ui:Dynamisk input}}.

## Grader, minutter, sekunder

`45°23'30"`, `45d23'30"`, `45d30'` eller `45d` er en vinkel fra X-aksen, mod uret. `°` eller `d` er nødvendig: `45-23-30` læses som regning (45 − 23 − 30). Minutter og sekunder skal være under 60. Et almindeligt tal, med regning (`360/7`), virker stadig.

## Sådan vises vinkler

Skriv {{cmd:AUNITS}} (eller vælg {{ui:Vinkelformat}} i {{ui:Egenskaber}} › {{ui:Aktuelle indstillinger}}) og vælg:

- **Decimalgrader** (standard): `44.6083°`.
- **Grader, minutter, sekunder**: `44°36'30"`.
- **Landmålerretninger**: `N45°23'30"E`.

Præcisionen følger det du skriver for {{cmd:AUNITS}}: 0 viser grader, 2 minutter, 4 sekunder, og 5 til 8 tilføjer decimaler af et sekund. Formatet vises i {{cmd:DIST}}, på statuslinjen, i dynamisk input og i sporingstips, og i vinkelfelterne i {{ui:Egenskaber}}. Et felt du redigerer tager alle former ovenfor. Det er ét fortryd-trin og gemmes i DWG- og DXF-filer (`$AUNITS`, `$AUPREC`). LISP læser og skriver det som `AUNITS` og `AUPREC`.
