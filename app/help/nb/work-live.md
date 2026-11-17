---
title: Arbeid på én tegning sammen med Live TeamWork
summary: Hva som endres i CadCraft mens du er i en Live TeamWork-økt fra CadCraft Studio: andre folks markører og utvalg, objekter noen redigerer, vertens låser, din egen angring, og å bli med fra en nettleser på samme nettverk.
keywords: live, live teamwork, studio live, sammen, samarbeid, samredigering, økt, del live, bli med, markør, holdt, redigering, lås, livelock, liveunlock, livehold, hold layer, hold område, hengelås, angre, vert, assistent, samme fil, mange personer, treg, grense, hvem endret, nylige endringer, endringslogg
from: 0497d2a3
---

## Hva du lærer

Hva du ser, og hva som skjer med endringene dine, mens flere personer arbeider på én tegning samtidig. CadCraft Studio starter og blir med i Live TeamWork-økten (Del live, Bli med). Denne siden handler om selve tegningen.

## Alle tegner samtidig

Tegn og rediger som vanlig. Dine egne endringer vises med en gang, selv før de andre har dem, og deres endringer dukker opp på skjermen din et øyeblikk etter at de har gjort dem. Hver kommando virker: tegning, endring, layer, blokker, ark, måltilsettinger, betingelser.

To personer kan endre det samme objektet. Når du endrer forskjellige ting, for eksempel fargen og et endepunkt på én linje, beholdes begge endringene. Når du endrer det samme, vinner den siste endringen.

Det som er ditt alene: gjeldende layer, farge og teksthøyde for nye objekter, dine innstillinger for måltilsetting, visningen din, delt skjerm og UCS. Tegningen er delt. Hvordan du ser på den, er ikke det.

## Andre på tegningen din

- **Markører:** hver persons peker vises med navnet sitt i sin egen farge, og kommandoen de kjører. Du ser markørene til folk som arbeider nær det som er på skjermen din.
- **Utvalg:** det noen har valgt, tegnes opp med omriss i deres farge.
- **Under redigering:** et objekt noen har valgt, har en merkelapp som «Ana redigerer». Du kan fortsatt endre farge eller flytte det, men du kan ikke slette, eksplodere eller skrive det inn på nytt før de slipper det. Når du velger det, forteller det deg hvem som har det.
- **Hvem som endret det sist:** velg ett objekt som noen andre endret i denne økten, så sier kommandolinjen hvem, og hva endringen var («Ben endret det sist: CIRCLE.»). Studios Live-panel lister hver nylige endring under {{ui:Nylige endringer}}. Ingenting av dette lagres i tegningen: det varer så lenge økten varer.

## Hold et layer eller et område mens du arbeider der

På en stor tegning med flere personer, si hvilken del som er din for nå:

1. Skriv `LIVEHOLD` og trykk {{key:Enter}}.
2. Velg `L` og skriv et layernavn (Enter beholder gjeldende layer), eller velg `A` og velg to hjørner på et område.
3. Andre folks endringer på det layeret, eller på objekter i området, tas tilbake, og de får beskjed om at du arbeider der. Du ser området ditt som en stiplet ramme. Andre ser det i din farge med navnet ditt, og layerne du holder, lister opp øverst til venstre i tegningen deres.
4. `LIVEHOLD`, og så `R`, frigjør alt du holder. Å forlate økten frigjør det også.

Alle i økten kan holde, også verten. Vertens låser gjelder fortsatt i tillegg. Et hold lagres aldri i filen.

## Når en endring tas tilbake

Vertens kopi av tegningen sjekker hver endring. Noen få kan ikke gå inn, og CadCraft tar dem tilbake på skjermen din og sier hvorfor på kommandolinjen, for eksempel:

- noen slettet objektet, eller layeret eller blokken det trenger, like før deg;
- noen redigerer det objektet, eller holder layeret eller området det ligger i;
- verten låste det;
- blokken du plasserer, ble ryddet bort, eller et layer du sletter, har fortsatt objekter på seg.

## Angre angrer ditt eget arbeid

{{key:Mod+Z}} og {{ui:Angre}} angrer din egen siste kommando, hele den, og lar alle andres arbeid være. Når noen har endret det samme siden, angres ingenting, og kommandolinjen sier hvem som endret det. {{key:Mod+Y}} gjør om.

## Låser (verten)

Verten kan beskytte objekter eller et helt layer, slik at ingen endrer dem, verten selv inkludert, før de låses opp:

1. Velg objektene, skriv `LIVELOCK` og trykk {{key:Enter}}. Eller skriv `LIVELOCK` uten noe valgt, og velg `L` for å låse et layer etter navn: objekter som legges til på det layeret senere, låses også.
2. Låste objekter tegnes stiplet, med en merkelapp «Låst av verten» på alles skjermer.
3. `LIVEUNLOCK` låser dem opp på samme måte.

Låser hører til økten: de avsluttes når den avsluttes, og de lagres aldri i filen.

## Bli med på samme fil

Hvis du åpnet den samme filen som verten åpnet (fra en delt mappe eller samme kopi), bli med fra ditt eget CadCraft-vindu i Studio: åpne {{ui:Nyttelast}}-panelet og bruk {{ui:Bli med her}} med vertens kode. Bare endringene som er gjort siden verten åpnet den, reiser, så en stor tegning er klar med en gang. Hvis filen din er en annen, erstatter vertens tegning den på skjermen din (filen din forblir som den er). Dette virker bare mens tegningen din er uendret siden du åpnet den.

## Assistenter i en live-økt

En assistent koblet til CadCraft-vinduet ditt (se hjelpen om å arbeide med KI-assistenter) blir med i økten som sin egen deltaker, og vises for alle som «Assistent (via <ditt navn>)». Verten slipper den inn, som for en person. Verts egen assistent blir med med en gang. Endringene har sin egen angring: din {{key:Mod+Z}} angrer ditt arbeid, og assistentens angre angrer bare dens egne. Den forlater økten når du kobler den fra eller forlater, og den kan bare arbeide i økten mens du kan redigere.

## Bli med fra en nettleser

En kollega uten Studio kan skanne bildet under vertens kode med en telefon, et nettbrett eller en datamaskin på samme nettverk. CadCraft åpnes i nettleseren, ber om navnet ditt på kommandolinjen, og fylles med vertens tegning når verten slipper deg inn. En invitasjonslenke lar noen bli med fra et annet nettverk: verten trenger en Team Cloud Plan-plass for programmet, alle andre blir med gratis, og lenken virker bare så lenge vertens økt er åpen.

## Mange personer på én tegning

Hver redigering går til alle i økten, så jo flere personer, desto lengre tid tar hver endring å nå hver enkelt av dem. Tregere bærbare datamaskiner og forbindelser faller bakpå først. En økts vanlige størrelse er 20 personer. Verten kan tillate flere for én økt (se hjelpen om å arbeide sammen live). Hvis tegningen føles treg med mange personer, hjelper færre personer, færre som redigerer samtidig, eller en bedre forbindelse.

## Når økten avsluttes

Bare verten lagrer tegningen. Når verten avslutter økten, beholder alle andre en ulagret kopi. Lagre den hvis du vil beholde den.

:::note
Noe som er tatt tilbake, tegnes oppå objektene rundt det på din egen skjerm til du åpner tegningen på nytt. Skravurer og fylte objekter som overlapper, kan se annerledes ut enn vertens kopi. Tegningen i seg selv er den samme.
:::
