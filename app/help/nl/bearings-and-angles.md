---
title: Richtingen en hoeken typen en tonen in graden, minuten, seconden
summary: Typ een richting als een richtingshoek van een landmeter, zoals N45°23'30"E, of als graden-minuten-seconden waar ook een hoek wordt gevraagd, en kies met AUNITS hoe de tekening hoeken toont.
keywords: richtingshoek, richtingshoeken, landmeter, kwadrantrichting, N45E, graden minuten seconden, DMS, hoek, richting, perceel, percelen, uitzetten, polygoon, AUNITS, ANGUNITS, hoeknotatie, polair, directe afstand, DIST
from: af805567
---

Overal waar CadCraft om een **hoek of een richting** vraagt, kunt u een **kwadrantrichting** typen of een hoek in **graden, minuten en seconden**, net zo goed als een gewoon aantal graden.

## Richtingen

Een richtingshoek noemt noord of zuid, een hoek tot 90°, en dan oost of west:

| U typt | Richting |
|---|---|
| `N45°23'30"E` of `N45d23'30"E` | 45°23'30" vanaf het noorden naar het oosten |
| `S10-30-00W` of `S 10 30 W` | 10°30' vanaf het zuiden naar het westen (streepjes of spaties tussen de delen) |
| `N45.5E` | 45.5° vanaf het noorden naar het oosten |
| `N`, `E`, `S`, `W` | recht noord, oost, zuid, west |

Letters mogen in elke vorm; in het Spaans betekent `O` ook west (oeste). `d` en `°` betekenen hetzelfde; `'` is minuten en `"` is seconden.

Om een perceellijn van 20 m te leggen op N45°23'E, start {{cmd:LINE}} en typ het eerste punt, dan `@20<N45d23'E`. Hetzelfde werkt bij de hoekprompt van {{cmd:ROTATE}} en bij elke andere prompt die om een hoek vraagt, en in het hoekveld van {{ui:Dynamische invoer}}.

## Graden, minuten, seconden

`45°23'30"`, `45d23'30"`, `45d30'` of `45d` is een hoek vanaf de X-as, tegen de klok in. De `°` of `d` is nodig: `45-23-30` wordt als rekensom gelezen (45 − 23 − 30). Minuten en seconden moeten onder 60 zijn. Een gewoon getal, met rekenen (`360/7`), werkt nog steeds.

## Hoe hoeken worden getoond

Typ {{cmd:AUNITS}} (of kies {{ui:Hoeknotatie}} in {{ui:Eigenschappen}} › {{ui:Huidige instellingen}}) en kies:

- **Decimale graden** (de standaard): `44.6083°`.
- **Graden-minuten-seconden**: `44°36'30"`.
- **Richtingshoeken van landmeters**: `N45°23'30"E`.

De precisie volgt wat u voor {{cmd:AUNITS}} invoert: 0 toont graden, 2 minuten, 4 seconden, en 5 tot 8 voegt decimalen van een seconde toe. De notatie wordt getoond in {{cmd:DIST}}, in de statusbalk, in de dynamische invoer en de tracering-tips, en in de hoekvelden van {{ui:Eigenschappen}} (een veld dat u bewerkt, accepteert elk van de vormen hierboven). Het is één stap ongedaan te maken en wordt bewaard in DWG- en DXF-bestanden (`$AUNITS`, `$AUPREC`); LISP leest en schrijft het als `AUNITS` en `AUPREC`.
