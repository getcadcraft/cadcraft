---
title: Redigera kommandoalias
summary: Behåll egna kommandoalias i en textfil i det välbekanta formatet, importera och exportera en .pgp-fil och läs in den igen med REINIT.
keywords: alias, aliases, aliasedit, pgp, genväg, kortnamn, reinit, tangentbord, anpassa, redigera alias
from: 2282d36f
---

## Vad du lär dig

Hur du lägger till egna kortnamn för kommandon, till exempel `LL` för {{cmd:LINE}}, allt i en textfil.

## Lägg till ett alias

1. Öppna {{ui:Vy}} › {{ui:Mer}} › {{ui:Redigera alias…}}, eller skriv {{cmd:ALIASEDIT}} och tryck på {{key:Enter}}.
2. Lägg till en rad med aliaset, ett kommatecken och kommandot efter en stjärna:

```
LL,     *LINE
```

3. Klicka på {{ui:Spara}}. Kommandoraden säger hur många av dina alias som används.
4. Skriv `LL` och tryck på {{key:Enter}}: LINE startar.

Dina alias ligger ovanpå CadCrafts egna. En av dina rader vinner över ett inbyggt alias med samma namn; tar du bort din rad är det inbyggda tillbaka.

## Rader CadCraft inte godkänner

Redigeraren listar varje problem med radnummer medan du skriver:

- kommandot finns inte;
- aliaset är redan ett kommandonamn (`LINE, *CIRCLE` skulle dölja LINE);
- raden är inte `ALIAS, *COMMAND`;
- samma alias finns på två rader (den senare vinner).

Rader som startar ett program på din dator, till exempel `NOTEPAD, START, 1, *File to edit: ,`, hoppas över med en notering: en app i webbläsaren kan inte starta program.

## Ta med dina alias från ett annat program

1. I aliasredigeraren klickar du på {{ui:Importera .pgp…}} och väljer filen. Du kan också släppa en `.pgp`-fil på ritningen.
2. Kontrollera problemen som listas (kommandon som CadCraft saknar avvisas, resten fungerar).
3. Klicka på {{ui:Spara}}.

{{ui:Exportera .pgp}} sparar CadCrafts alias och dina i en fil i samma format.

## Läs in filen igen

Skriv {{cmd:REINIT}} och tryck på {{key:Enter}} för att tillämpa aliasfilen igen. Den sparas i den här webbläsaren; skrivbordsappen sparar den i sin egen mapp, och molntjänsten synkroniserar den.

## Bokstäver för ett kommandos alternativ

Ett alias är ett namn på ett kommando. Om du vill ändra de bokstäver som svarar på ett kommandos alternativ (`P` för Polär i {{cmd:ARRAY}}), se [Ge kommandoalternativ egna bokstäver](topic:option-letters).

## Tangentbordsgenvägar för vilket kommando som helst

Ett alias skrivs; en genväg är en tangent. Så här ger du ett kommando en egen tangent:

1. Klicka på {{ui:Vy}} › {{ui:Mer}} › {{ui:Kortkommandon…}}, eller skriv `KEYS` och tryck på {{key:Enter}}.
2. Klicka i rutan {{ui:Tangent}} och tryck på tangenterna, till exempel {{key:Alt+Shift+C}}.
3. Skriv kommandot i {{ui:Kör}}, och om du vill vad som ska skrivas efter det: `CIRCLE`, eller `ZOOM E`.
4. Klicka på {{ui:Lägg till (A)}}.

En tangent kräver {{key:Mod}} eller {{key:Alt}} tillsammans med en bokstav eller siffra, eller en ledig funktionstangent ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tangenter som CadCraft, appen eller webbläsaren redan använder, och tangenter som en knapp under Mina verktyg har (se [Egna knappar](topic:my-tools)), avvisas, och rutan säger varför. Genvägar sparas i den här webbläsaren (eller skrivbordsappen); {{ui:Ta bort (R)}} tar bort en.
