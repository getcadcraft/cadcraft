---
title: Giv kommandoens valgmuligheder egne bogstaver
summary: Svar på en kommandos valgmuligheder med bogstaver, du vælger, på ethvert sprog, fra én tekstfil du kan redigere, importere og eksportere.
keywords: valgmulighedsbogstaver, optionkeys, optkeys, valgmulighedsnøgle, nøgle, omlæg, mapping, tilpas, egne bogstaver, polar, array, P, PO, sprog, oversæt valgmuligheder, kort form, importér, eksportér, tvetydig
from: 7c8328c6
---

## Hvad du lærer

Sådan ændrer du de bogstaver, du skriver, for at svare på en kommandos valgmuligheder. For eksempel spørger {{cmd:ARRAY}} `[Rectangular/POlar]` og tager `PO` for Polar; du kan få `P` eller andre bogstaver til at gøre det samme, på dit eget sprog, hvis du vil.

## Sådan svares valgmuligheder

Når en kommando viser valgmuligheder i firkantede parenteser, er de store bogstaver dem, du skriver: `POlar` er `PO`, `eXit` er `X`.

Du kan også skrive færre bogstaver. Passer det, du skriver, kun til én af de viste valgmuligheder, tager CadCraft den: med `[Rectangular/POlar]` er et enkelt `P` Polar. Passer det til to, siger kommandolinjen hvilke, og spørger igen:

```
C could be COUnt, COLumns. Type more letters.
```

Tal gættes aldrig: en skrevet afstand eller et antal læses altid som et tal.

## Tilføj egne bogstaver

Hver kommando beholder sine indbyggede bogstaver. Du lægger dine egne oven på dem, så din liste kun rummer det, du ændrede.

1. Åbn {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Valgmulighedernes bogstaver}} og klik på {{ui:Redigér…}}. Eller skriv {{cmd:OPTIONKEYS}} og tryk {{key:Enter}}.
2. Under {{ui:Kommando}} vælger du kommandoen, for eksempel `ARRAY`. Listen har hver kommando, der spørger efter valgmuligheder, og den starter på den kommando, du brugte sidst.
3. Under {{ui:Valgmulighed}} vælger du valgmuligheden. Hver viser sine indbyggede bogstaver i parentes, for eksempel `POlar (PO)`.
4. I {{ui:Dine bogstaver}} skriver du de bogstaver, du vil have, for eksempel `P`, og klikker på {{ui:Tilføj}}.
5. Valgmuligheden vises nu under {{ui:Dine bogstaver}} med sine indbyggede bogstaver og dine. Klik på {{ui:Gem}}.

Start {{cmd:ARRAY}}, vælg et objekt og tryk {{key:Enter}}. Prompten viser dine bogstaver efter valgmuligheden, `POlar (P)`, og `P` svarer på den.

For at fjerne en, klik på x'et i enden af dens række og derefter på {{ui:Gem}}. Valgmuligheden går tilbage til kun sine indbyggede bogstaver.

## Bogstaver du ikke kan bruge

Redigeringsprogrammet afviser bogstaver, der ville skjule noget, kommandolinjen allerede læser, og siger hvorfor:

- de indbyggede bogstaver for en anden valgmulighed af samme kommando (`R` for Polar i `ARRAY`, hvor `R` er Rectangular);
- et objektfangord på tre bogstaver eller mere, såsom `END`, `MID` eller `CEN`, og ordene `ALL` og `LAST`;
- de samme bogstaver for to forskellige valgmuligheder i én kommando.

Så længe noget står med rødt, er {{ui:Gem}} slået fra: ret linjen eller fjern den, så er den tilbage. En prompts indbyggede bogstaver vinder altid over dine, så din liste kan aldrig stoppe et indbygget svar. Bogstaver, der tilfældigvis er en kommandos navn, som `L` eller `C`, er fine: ved en valgmulighedsprompt læser kommandolinjen et svar, ikke en kommando.

Valgmulighederne, en kommando viser, kommer fra de kommandoer, der deler dens prompter, så en kommando nu og da viser en valgmulighed, den kun spørger om i nogle tilfælde.

## Ét valg for hver kommando

Under {{ui:Kommando}} vælger du {{ui:Alle kommandoer}}. Valgmulighederne er så alle de valgmuligheder, enhver kommando har, såsom eXit eller Fortryd. Bogstaver du tilføjer der, svarer på den valgmulighed, hvor en kommando tilbyder den. Bogstaver tilføjet for en enkelt kommando vinder over disse.

## Bogstaver på dit eget sprog

Bogstaverne kan være fra ethvert alfabet, så du kan svare på valgmuligheder uden at skifte tastatur: tilføj `З` for Close under {{ui:Alle kommandoer}}, eller `П` for POlar i `ARRAY`.

CadCraft leveres kun med de engelske bogstaver. Din egen liste er, hvordan du, dit kontor eller folk, der deler dit sprog, sætter resten op, og {{ui:Eksportér}} laver en fil, du kan give videre.

## Rediger som tekst

{{ui:Redigér som tekst}} i redigeringsprogrammet viser den samme liste som linjer tekst, én pr. valgmulighed, og det er også, hvad {{ui:Eksportér}} gemmer:

```
ARRAY.PO,  P
*.X,       Q
```

Hver linje er kommandoen, et punktum, valgmulighedens indbyggede bogstaver, et komma og dine bogstaver. En stjerne i stedet for kommandoen betyder hver kommando. En linje, der starter med `;`, er en note.

## Hvad der forbliver det samme

- De indbyggede bogstaver virker stadig ved siden af dine.
- Rutiner og værktøjslinjeknapper bruger stadig de indbyggede bogstaver, så intet, du har indlæst, går i stykker. For selv at skrive de indbyggede bogstaver, hvor dine egne ville komme i vejen, sæt en understreg først: `_PO`.
- En kommandos korte navn er noget andet: se [Rediger kommandoaliasser](topic:command-aliases).

## Linjer CadCraft afviser

Når du redigerer som tekst eller importerer en fil, viser redigeringsprogrammet hvert problem med linjenummer:

- kommandoen findes ikke (en kommandos alias er fint: `AR.PO` læses som `ARRAY.PO`);
- linjen er ikke `KOMMANDO.VALGMULIGHED, BOGSTAVER`;
- bogstaverne har et mellemrum eller et tegn i sig (kun bogstaver og cifre, højst 16);
- de samme bogstaver svarer på to forskellige valgmuligheder i én kommando.

## Import og eksport

{{ui:Eksportér}} gemmer dine bogstaver som en tekstfil, til at beholde eller give til andre. {{ui:Importér…}} læser en sådan fil. Begge findes i redigeringsprogrammet og i {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Valgmulighedernes bogstaver}}.

I indstillingerne erstatter {{ui:Importér…}} din fil med den, du vælger. En fil med en linje, der kolliderer, eller som ikke kan bruges, tages ikke; åbn redigeringsprogrammet og importér den der for at se linjerne. I redigeringsprogrammet fylder den kun feltet: intet ændres, før du klikker på {{ui:Gem}}.

## Genindlæs eller fjern

Skriv {{cmd:REINIT}} og tryk {{key:Enter}} for at anvende din fil igen. For at fjerne et bogstav, slet dets linje og klik på {{ui:Gem}}.

## Dine bogstaver følger din konto

Når du er logget ind på getcadcraft.com, gemmes dine bogstaver på din konto. Åbner du CadCraft i en anden browser eller på en anden computer med samme konto, kommer de af sig selv; kommandolinjen siger `Option letters from your account`. Har du ændret dem to steder, vinder den nyeste kopi, og den, den erstattede, beholdes én gang.

{{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Valgmulighedernes bogstaver}} siger, hvordan de står. Logget ud eller offline bliver de i denne browser og går til din konto næste gang, du gemmer dem, mens du er logget ind.

Relateret: [Rediger kommandoaliasser](topic:command-aliases) · [CadCraft-indstillinger](topic:settings) · [Kommandoreference](topic:commands)
