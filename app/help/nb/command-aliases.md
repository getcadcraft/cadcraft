---
title: Rediger kommandoaliaser
summary: Behold dine egne kommandoaliaser i én tekstfil i det kjente formatet, importer og eksporter en .pgp-fil, og last den inn på nytt med REINIT.
keywords: alias, aliaser, aliasedit, pgp, snarvei, kort navn, reinit, tastatur, tilpass, rediger aliaser
from: 6ab6fa0e
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

Aliasene dine ligger over CadCraft sine egne. En linje fra deg vinner over et innebygd alias med samme navn. Fjerner du linjen, kommer det innebygde tilbake.

## Linjer CadCraft avviser

Redigeringen lister hvert problem med linjenummer mens du skriver:

- kommandoen finnes ikke;
- aliaset er selv en kommandos navn (`LINE, *CIRCLE` ville skjule LINE);
- linjen er ikke `ALIAS, *COMMAND`;
- det samme aliaset står på to linjer (den senere vinner).

Linjer som starter et program på datamaskinen din, for eksempel `NOTEPAD, START, 1, *File to edit: ,`, hoppes over med en merknad: et program i nettleseren kan ikke starte programmer.

## Ta med aliasene dine fra et annet program

1. I aliasredigeringen klikker du {{ui:Importer .pgp…}} og velger filen. Du kan også slippe en `.pgp`-fil på tegningen.
2. Sjekk problemene som listes (kommandoer CadCraft ikke har, avvises, resten fungerer).
3. Klikk {{ui:Lagre}}.

{{ui:Eksporter .pgp}} lagrer CadCraft sine aliaser og dine som én fil i samme format.

## Last inn filen på nytt

Skriv {{cmd:REINIT}} og trykk {{key:Enter}} for å bruke aliasfilen på nytt. Den lagres i denne nettleseren. Skrivebordsappen vil lagre den i sin egen mappe, og skytjenesten vil synkronisere den.

## Tastatursnarveier for enhver kommando

Et alias skrives. En snarvei er en tast. Slik gir du en kommando en egen tast:

1. Klikk {{ui:Visning}} › {{ui:Mer}} › {{ui:Hurtigtaster…}}, eller skriv `KEYS` og trykk {{key:Enter}}.
2. Klikk boksen {{ui:Tast}} og trykk tastene, for eksempel {{key:Alt+Shift+C}}.
3. I {{ui:Kjører}} skriver du kommandoen, og om du vil, det som skal skrives etter den: `CIRCLE`, eller `ZOOM E`.
4. Klikk {{ui:Legg til}}.

En tast må ha {{key:Mod}} eller {{key:Alt}} sammen med en bokstav eller et siffer, eller en ledig funksjonstast ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Taster som CadCraft, appen eller nettleseren allerede bruker, og taster som en knapp under Mine verktøy har (se [Egne knapper](topic:my-tools)), avvises, og boksen sier hvorfor. Snarveier lagres i denne nettleseren (eller skrivebordsappen). {{ui:Fjern}} tar en bort.
