---
title: Pekeren hopper eller henger etter over tegningen
summary: Hva som kan gjøres når krysset ikke følger musen jevnt, på en eldre eller tregere datamaskin.
keywords: markøren hopper, pekeren henger etter, krysset går tregt, rykkete markør, gammel datamaskin, gammelt skjermkort, integrert grafikk, maskinvareakselerasjon, jevnere peker, treg bærbar
from: 39dc9057
---

CadCraft kjører i nettleseren (CadCraft Studio er også en visning i nettleseren), så ingenting i den er bygget for ett bestemt skjermkort eller et annet. Krysset tegnes av appen, og det betyr at det bare kan bevege seg så raskt som appen rekker å tegne et bilde.

## La CadCraft skru ned ekstrafunksjonene

1. Åpne {{ui:Innstillinger}} (tannhjulet øverst til høyre) og bli på fanen {{ui:CadCraft}}.
2. Velg {{ui:Jevnere peker på tregere datamaskiner}}.
3. Velg {{ui:På}}.

Når den er på, brukes datamaskinens egen krysspeker i stedet for det tegnede krysset og plukkeboksen (også krysset i fullskjerm), og objektet under pekeren lyser opp når pekeren står stille, i stedet for mens den beveger seg. Objektfang, sporing og gummibåndet fungerer som før.

{{ui:Automatisk}} er innstillingen CadCraft starter med: den følger med på hvor lang tid bildene tar mens pekeren beveges, og slår dette på av seg selv når bildene forblir trege i noen sekunder. Den gir beskjed én gang når det skjer. {{ui:Av}} beholder det tegnede krysset uansett hastighet.

## Hvis det fortsatt er tregt

- Kontroller at maskinvareakselerasjon er på i nettleseren: åpne `chrome://gpu` (eller `edge://gpu`) i en ny fane. Hvis de første linjene sier «Software only» eller «Disabled», tegner nettleseren uten skjermkortet. Oppdatering av skjermkortdriveren hjelper ofte.
- Lukk andre tunge faner og programmer, og prøv et mindre nettleservindu.
- Gi oss beskjed via {{ui:Hjelp}}, {{ui:Rapporter et problem}}: oppgi om nettleseren eller CadCraft Studio brukes, versjonen, og hva gpu-siden viser.
