---
title: Rediger kommandoaliaser
summary: Behold egne kommandoaliaser i én tekstfil i det kjente formatet, importer og eksporter en .pgp-fil, og last den inn på nytt med REINIT.
keywords: alias, aliaser, aliasedit, pgp, snarvei, kort navn, reinit, tastatur, tilpass, rediger aliaser
from: 2282d36f
---

## Hva du lærer

Hvordan du legger til egne korte navn for kommandoer, for eksempel `LL` for {{cmd:LINE}}, alt i én tekstfil.

## Legg til et alias

1. Åpne {{ui:Visning}} › {{ui:Mer}} › {{ui:Rediger aliaser…}}, eller skriv {{cmd:ALIASEDIT}} og trykk {{key:Enter}}.
2. Legg til en linje med aliaset, et komma og kommandoen etter en stjerne:

```
LL,     *LINE
```

3. Klikk {{ui:Lagre}}. Kommandolinjen sier hvor mange av aliasene dine som er i bruk.
4. Skriv `LL` og trykk {{key:Enter}}: LINE starter.

Aliasene dine ligger over CadCrafts egne. En linje fra deg vinner over et innebygd alias med samme navn; fjerner du linjen, kommer det innebygde tilbake.

## Linjer CadCraft avviser

Redigeringsprogrammet viser hvert problem med linjenummer mens du skriver:

- kommandoen finnes ikke;
- aliaset er selv navnet på en kommando (`LINE, *CIRCLE` ville skjule LINE);
- linjen er ikke `ALIAS, *COMMAND`;
- samme alias står på to linjer (den senere vinner).

Linjer som starter et program på datamaskinen din, som `NOTEPAD, START, 1, *File to edit: ,`, hoppes over med en merknad: et program i nettleseren kan ikke starte programmer.

## Ta med aliasene dine fra et annet program

1. I aliasredigeringen klikk {{ui:Importer .pgp…}} og velg filen. Du kan også slippe en `.pgp`-fil på tegningen.
2. Kontroller problemene som listes (kommandoer CadCraft ikke har, avvises; resten fungerer).
3. Klikk {{ui:Lagre}}.

{{ui:Eksporter .pgp}} lagrer CadCrafts aliaser og dine som én fil i samme format.

## Last filen på nytt

Skriv {{cmd:REINIT}} og trykk {{key:Enter}} for å bruke aliasfilen din på nytt. Den lagres i denne nettleseren; skrivebordsappen lagrer den i sin egen mappe, og skytjenesten synkroniserer den.

## Bokstaver for en kommandos alternativer

Et alias gir navn til en kommando. For å endre bokstavene som svarer på en kommandos alternativer (`P` for Polar i {{cmd:ARRAY}}), se [Gi kommandoalternativer egne bokstaver](topic:option-letters).

## Hurtigtaster for enhver kommando

Et alias skrives; en hurtigtast er en tast. For å gi en kommando en egen tast:

1. Klikk {{ui:Visning}} › {{ui:Mer}} › {{ui:Hurtigtaster…}}, eller skriv `KEYS` og trykk {{key:Enter}}.
2. Klikk boksen {{ui:Tast}} og trykk tastene, for eksempel {{key:Alt+Shift+C}}.
3. I {{ui:Kjører}} skriver du kommandoen, og om du vil, det som skal skrives etter den: `CIRCLE`, eller `ZOOM E`.
4. Klikk {{ui:Legg til}}.

En tast trenger {{key:Mod}} eller {{key:Alt}} med en bokstav eller et siffer, eller en ledig funksjonstast ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Taster som CadCraft, appen eller nettleseren allerede bruker, og taster som en egen verktøyknapp har (se [Egne knapper](topic:my-tools)), avvises, og boksen sier hvorfor. Snarveier lagres i denne nettleseren (eller skrivebordsappen); {{ui:Fjern}} tar en bort.
