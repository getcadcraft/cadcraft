---
title: Gi kommandoalternativer dine egne bokstaver
summary: Svar på en kommandos alternativer med bokstaver du velger, på ethvert språk, fra én tekstfil du kan redigere, importere og eksportere.
keywords: alternativbokstaver, optionkeys, optkeys, alternativnøkkelord, nøkkelord, omdefiner, kartlegging, tilpass, egne bokstaver, polar, matrise, P, PO, språk, oversett alternativer, kort form, importer, eksporter, tvetydig
from: 7c8328c6
---

## Hva du lærer

Hvordan du endrer bokstavene du skriver for å svare på en kommandos alternativer. For eksempel spør {{cmd:ARRAY}} `[Rectangular/POlar]`, og tar `PO` for Polar. Du kan få `P` eller andre bokstaver til å gjøre det samme, på ditt eget språk om du vil.

## Hvordan alternativer besvares

Når en kommando viser alternativer i hakeparenteser, er de store bokstavene dem du skriver: `POlar` er `PO`, `eXit` er `X`.

Du kan også skrive færre bokstaver. Passer det du skriver til bare ett av alternativene som vises, tar CadCraft det: med `[Rectangular/POlar]` er en enslig `P` Polar. Passer det til to, nevner kommandolinjen dem og spør igjen:

```
C could be COUnt, COLumns. Type more letters.
```

Tall gjettes aldri, så en skrevet avstand eller et antall leses alltid som et tall.

## Legg til egne bokstaver

Hver kommando beholder sine innebygde bokstaver. Du legger dine til oppå dem, så listen din bare inneholder det du endret.

1. Åpne {{ui:Innstillinger}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Alternativbokstaver}} og klikk {{ui:Rediger…}}. Eller skriv {{cmd:OPTIONKEYS}} og trykk {{key:Enter}}.
2. Under {{ui:Kommando}} velger du kommandoen, for eksempel `ARRAY`. Listen har hver kommando som spør om alternativer, og den starter på kommandoen du brukte sist.
3. Under {{ui:Alternativ}} velger du alternativet. Hver viser sine innebygde bokstaver i parentes, for eksempel `POlar (PO)`.
4. I {{ui:Dine bokstaver}} skriver du bokstavene du vil ha, for eksempel `P`, og klikker {{ui:Legg til}}.
5. Alternativet vises nå under {{ui:Dine bokstaver}} med sine innebygde bokstaver og dine. Klikk {{ui:Lagre}}.

Start {{cmd:ARRAY}}, velg et objekt og trykk {{key:Enter}}. Ledeteksten viser dine bokstaver etter alternativet, `POlar (P)`, og `P` svarer på det.

For å fjerne en, klikk x-et på slutten av raden og deretter {{ui:Lagre}}. Alternativet går tilbake til bare sine innebygde bokstaver.

## Bokstaver du ikke kan bruke

Redigeringsprogrammet avviser bokstaver som ville skjule noe kommandolinjen allerede leser, og sier hvorfor:

- de innebygde bokstavene til et annet alternativ for samme kommando (`R` for Polar i `ARRAY`, der `R` er Rectangular);
- et objektfangord på tre bokstaver eller mer, som `END`, `MID` eller `CEN`, og ordene `ALL` og `LAST`;
- de samme bokstavene for to ulike alternativer i én kommando.

Så lenge noe er listet i rødt, er {{ui:Lagre}} av: rett linjen eller fjern den, så kommer den tilbake. En ledetekst sine innebygde bokstaver vinner alltid over dine, så listen din kan aldri hindre et innebygd svar i å virke. Bokstaver som tilfeldigvis er en kommandos navn, som `L` eller `C`, er greie: ved et alternativ-ledetekst leser kommandolinjen et svar, den starter ikke en kommando.

Alternativene som listes for en kommando, kommer fra kommandoene som deler ledetekstene. Så nå og da lister en kommando et alternativ den bare spør om i noen tilfeller.

## Ett valg for alle kommandoer

Under {{ui:Kommando}} velger du {{ui:Alle kommandoer}}. Alternativene er da alle alternativer enhver kommando har, for eksempel eXit eller Undo. Bokstaver du legger til der, svarer på det alternativet hvor som helst en kommando tilbyr det. Bokstaver lagt til for én kommando vinner over disse.

## Bokstaver på ditt eget språk

Bokstavene kan være fra et hvilket som helst alfabet, så du kan svare på alternativer uten å bytte tastatur: legg til `З` for Close under {{ui:Alle kommandoer}}, eller `П` for POlar i `ARRAY`.

CadCraft leveres bare med engelske bokstaver. Din egen liste er måten du, kontoret ditt eller folk som deler språket ditt, setter opp resten på. {{ui:Eksporter}} lager en fil du kan gi videre.

## Rediger som tekst

{{ui:Rediger som tekst}} i redigeringsprogrammet viser den samme listen som tekstlinjer, én per alternativ. Det er også det {{ui:Eksporter}} lagrer:

```
ARRAY.PO,  P
*.X,       Q
```

Hver linje er kommandoen, et punktum, alternativets innebygde bokstaver, et komma og dine bokstaver. En stjerne i stedet for kommandoen betyr hver kommando. En linje som starter med `;`, er en merknad.

## Hva som forblir det samme

- De innebygde bokstavene virker fortsatt ved siden av dine.
- Rutiner og verktøylinjeknapper bruker fortsatt de innebygde bokstavene, så ingenting du lastet inn, går i stykker. For å skrive de innebygde bokstavene selv der dine egne ville komme i veien, sett en understrek først: `_PO`.
- En kommandos korte navn er noe annet: se [Rediger kommandoaliaser](topic:command-aliases).

## Linjer CadCraft avviser

Når du redigerer som tekst eller importerer en fil, lister redigeringsprogrammet hvert problem med linjenummer:

- kommandoen finnes ikke (et kommandoalias er greit: `AR.PO` leses som `ARRAY.PO`);
- linjen er ikke `COMMAND.OPTION, LETTERS`;
- bokstavene har et mellomrom eller et tegn i seg (bare bokstaver og siffer, 16 på det meste);
- samme bokstaver svarer på to ulike alternativer i én kommando.

## Importer og eksporter

{{ui:Eksporter}} lagrer bokstavene dine som en tekstfil, for å beholde dem eller gi til noen andre. {{ui:Importer…}} leser en slik fil. Begge finnes i redigeringsprogrammet og i {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Alternativbokstaver}}.

I Innstillinger erstatter {{ui:Importer…}} filen din med den du velger. En fil med en linje som kolliderer eller ikke kan brukes, tas ikke imot. Åpne redigeringsprogrammet og importer der for å se linjene. I redigeringsprogrammet fyller den bare boksen: ingenting endres før du klikker {{ui:Lagre}}.

## Last på nytt eller fjern

Skriv {{cmd:REINIT}} og trykk {{key:Enter}} for å bruke filen din på nytt. For å fjerne en bokstav, slett linjen og klikk {{ui:Lagre}}.

## Dine bokstaver følger kontoen din

Når du er logget inn på getcadcraft.com, beholdes bokstavene dine med kontoen din. Åpner du CadCraft i en annen nettleser eller på en annen datamaskin med samme konto, kommer de av seg selv. Kommandolinjen sier `Option letters from your account`. Har du endret dem to steder, vinner den nyeste kopien, og den den erstattet, beholdes én gang.

{{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Alternativbokstaver}} sier hvor de står. Er du logget ut eller frakoblet, blir de i denne nettleseren, og går til kontoen din neste gang du lagrer dem mens du er logget inn.

Relatert: [Rediger kommandoaliaser](topic:command-aliases) · [CadCraft-innstillinger](topic:settings) · [Kommandoer](topic:commands)
