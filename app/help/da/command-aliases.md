---
title: Rediger kommandoaliasser
summary: Behold dine egne kommandoaliasser i én tekstfil i det velkendte format, importér og eksportér en .pgp-fil, og indlæs den igen med REINIT.
keywords: alias, aliasser, aliasedit, pgp, genvej, kort navn, reinit, tastatur, tilpas, rediger aliasser
from: 2282d36f
---

## Hvad du lærer

Sådan tilføjer du dine egne korte navne til kommandoer, for eksempel `LL` for {{cmd:LINE}}, alt sammen i én tekstfil.

## Tilføj et alias

1. Åbn {{ui:Visning}} › {{ui:Mere}} › {{ui:Redigér aliasser…}}, eller skriv {{cmd:ALIASEDIT}} og tryk {{key:Enter}}.
2. Tilføj en linje med aliaset, et komma og kommandoen efter en stjerne:

```
LL,     *LINE
```

3. Klik på {{ui:Gem}}. Kommandolinjen siger, hvor mange af dine aliasser der er i brug.
4. Skriv `LL` og tryk {{key:Enter}}: LINE starter.

Dine aliasser ligger oven på CadCraft's egne. En af dine linjer vinder over et indbygget alias med samme navn; fjerner du din linje, er det indbyggede tilbage.

## Linjer CadCraft afviser

Redigeringsprogrammet viser hvert problem med linjenummer, mens du skriver:

- kommandoen findes ikke;
- aliaset er selv en kommandos navn (`LINE, *CIRCLE` ville skjule LINE);
- linjen er ikke `ALIAS, *KOMMANDO`;
- det samme alias står på to linjer (den senere vinder).

Linjer der starter et program på din computer, som `NOTEPAD, START, 1, *File to edit: ,`, springes over med en besked, for et program i browseren kan ikke starte programmer.

## Hent dine aliasser fra et andet program

1. I aliasredigeringen klik på {{ui:Importér .pgp…}} og vælg filen. Du kan også slippe en `.pgp`-fil på tegningen.
2. Kontrollér de viste problemer (kommandoer CadCraft ikke har, afvises; resten virker).
3. Klik på {{ui:Gem}}.

{{ui:Eksportér .pgp}} gemmer CadCrafts aliasser og dine som én fil i samme format.

## Indlæs filen igen

Skriv {{cmd:REINIT}} og tryk {{key:Enter}} for at anvende din aliasfil igen. Den gemmes i denne browser; desktop-appen gemmer den i sin egen mappe, og cloud-tjenesten synkroniserer den.

## Bogstaver til en kommandos valgmuligheder

Et alias navngiver en kommando. For at ændre de bogstaver der svarer på en kommandos valgmuligheder (`P` for Polar i {{cmd:ARRAY}}), se [Giv kommandoens valgmuligheder egne bogstaver](topic:option-letters).

## Genvejstaster til en vilkårlig kommando

Et alias skrives; en genvej er en tast. For at give en kommando en tast af din egen:

1. Klik på {{ui:Visning}} › {{ui:Mere}} › {{ui:Tastaturgenveje…}}, eller skriv `KEYS` og tryk {{key:Enter}}.
2. Klik i feltet {{ui:Tast}} og tryk tasterne, for eksempel {{key:Alt+Shift+C}}.
3. I {{ui:Kører}} skriver du kommandoen, og hvis du vil, hvad der skal skrives efter den: `CIRCLE`, eller `ZOOM E`.
4. Klik på {{ui:Tilføj}}.

En genvej kræver {{key:Mod}} eller {{key:Alt}} sammen med et bogstav eller et ciffer, eller en ledig funktionstast ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Taster som CadCraft, appen eller browseren allerede bruger, og taster som en knap under Mine værktøjer har (se [Knapper af egen](topic:my-tools)), afvises, og feltet siger hvorfor. Genveje gemmes i denne browser (eller desktop-appen); {{ui:Fjern}} fjerner en.
