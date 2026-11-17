---
title: Dokumenter: sjekk ut, revisjoner og utgivelse
summary: Hold kontroll over tegningene i en prosjektmappe: sjekk ut en fil slik at ingen andre endrer den, sjekk den inn som en ny revisjon, send den til gjennomgang og gi den ut med navnet til en godkjenner; historikk, hva som bruker hva, en stykkliste og tegningshoder som viser revisjonen.
keywords: prosjektinnstillinger, godkjennere, administratorer, revisjonsbokstaver, ASME, skrivebeskyttet, sammenlign revisjoner, åpne kopi, partcraft, bimcraft, documents, DOCUMENTS, DOCS, vault, dokumenthåndtering, pdm, sjekk ut, sjekk inn, utsjekking, innsjekking, lås, revisjon, rev, revisjonsbokstav, utgivelse, utgitt, godkjenning, godkjenn, gjennomgang, foreldet, hvor brukt, bom, stykkliste, tegningshode, revisjonsfelt, prosjektmappe
from: ee938722
---

## Hva du skal lage

En prosjektmappe der hver tegning har en revisjon (A.1, A.2 … deretter A, B …) og en tilstand (Under arbeid, Til gjennomgang, Utgitt, Foreldet), der bare én person om gangen kan endre en fil, og der hver utsjekking, innsjekking, godkjenning og brutt utsjekking blir skrevet ned med hvem som gjorde det og når.

Alt lagres i selve mappen, i en skjult `.ccvault`-mappe ved siden av tegningene dine. En mappe på en delt stasjon eller en synkronisert mappe fungerer for et helt team. Det finnes ingen server, og ingenting lastes opp.

## Åpne Dokumenter

Skriv `DOCUMENTS` (eller `DOCS`) og trykk {{key:Enter}}. Panelet åpnes ved siden av tegningen.

Velg {{ui:Velg prosjektmappen}} og velg mappen som inneholder prosjektets tegninger. Prosjektmapper fungerer i CadCraft Studio og i nettlesere som kan åpne en mappe (Chrome, Edge). I andre nettlesere sier panelet fra om det.

Første gang skriver du inn navnet ditt (det går på alt du gjør) og navnet på denne datamaskinen. Hvis du er logget inn, er navnet ditt allerede der.

## Start en vault

En mappe som ikke er en vault ennå, tilbyr {{ui:Start en vault i denne mappen}}. Skriv inn prosjektets navn. Åpne deretter {{ui:Filer utenfor vault}} og velg {{ui:Legg til}} ved siden av hver fil du vil ta under kontroll. En fil du legger til, starter på revisjon **A.1**, Under arbeid.

## Endre en tegning

1. Velg {{ui:Åpne}} ved siden av en tegning. Den åpnes i CadCraft. Hvis den ikke er sjekket ut til deg, kan du se på den, men ikke endre den: {{ui:Lagre}} nekter å skrive over den og forklarer hvorfor (bruk {{ui:Lagre som}} for å beholde en kopi av din egen).
2. Velg {{ui:Sjekk ut}}. Ingen andre kan sjekke den ut nå; panelet viser dem hvem som har den, på hvilken datamaskin og siden når.
3. Tegn.
4. Velg {{ui:Sjekk inn}} og si hva som er endret. Tegningen du har åpen, lagres i prosjektmappen i sitt eget format og blir den neste revisjonen (A.1, deretter A.2). Innsjekking uten endringer beholder revisjonen.

{{ui:Angre utsjekking}} gir filen tilbake uten en ny revisjon.

## Gjennomgang og utgivelse

- {{ui:Send til gjennomgang}}: filen er skrivebeskyttet mens den gjennomgås.
- {{ui:Godkjenn}}: skriv inn godkjennerens navn. A.3 blir **A**, Utgitt. Utgitte filer er skrivebeskyttet.
- {{ui:Send tilbake}}: tilbake til Under arbeid, med årsaken.
- {{ui:Ny revisjon}} på en utgitt fil sjekker den ut for neste bokstav: første innsjekking blir **B.1**. {{ui:Angre utsjekking}} før det, så står den på A.
- {{ui:Gjør foreldet}} trekker en utgitt fil tilbake.

Et prosjekt kan ha en liste over hvem som kan godkjenne, og kan kreve at godkjenneren ikke er den som sjekket inn filen (se Prosjektinnstillinger nedenfor).

## Prosjektinnstillinger

Åpne {{ui:Prosjektinnstillinger}} i panelet:

- **Godkjennere**: ett navn per linje. Når det finnes noen, er det bare de som kan godkjenne en utgivelse.
- **Godkjenneren må være noen annen enn forfatteren**: firøyneprinsippet.
- **Administratorer**: ett navn per linje. Når det finnes noen, er det bare de som kan bryte andres utsjekking eller endre disse innstillingene.
- **Revisjonsbokstaver som skal utelates**: {{ui:Bruk ASME Y14.35-sekvensen}} hopper over I, O, Q, S, X og Z, eller skriv dine egne bokstaver. Bokstaver som allerede er gitt, beholdes; valget gjelder for de neste revisjonene.
- **En utsjekking regnes som utdatert etter**: antall dager (14 som standard).

Velg {{ui:Lagre innstillinger}}. Endringen skrives i loggen med hvem som gjorde den.

## Noen har latt en fil stå utsjekket

{{ui:Bryt utsjekking}} frigjør en fil som noen andre har sjekket ut (de er borte, eller datamaskinen deres har krasjet). Du må skrive inn en årsak: den skrives i loggen sammen med hvems utsjekking det var. Når prosjektet har administratorer, er det bare de som kan gjøre dette. En utsjekking som er eldre enn 14 dager, merkes som lenge siden.

## Historikk, revisjoner, bruker, brukt av

Velg en fils navn for å se:

- {{ui:Historikk}}: alle hendelser, nyeste først, med hvem, hvilken datamaskin og når.
- {{ui:Revisjoner}}: hver revisjon som er lagret. En kopi av hver revisjon ligger i vault (det samme innholdet lagres bare én gang). {{ui:Åpne kopi}} åpner den revisjonen som en vanlig kopi som ikke kan overskrive vault-filen. {{ui:Sammenlign med}} viser hva som er lagt til, fjernet og endret mellom den revisjonen og den forrige (eller en annen du velger), og farger det på tegningen.
- {{ui:Bruker}}: tegningene den lenker til (xrefs), dokumentene en IFC-modell peker på, delene i en PartCraft-sammenstilling.
- {{ui:Brukt av}}: alle filer i vault som bruker denne.

{{ui:Stykkliste (CSV)}} lagrer listen over alt en fil bruker, nivå for nivå, med mengder, revisjoner og tilstander, til et regneark.

## En revisjonsblokk på arket

Med en tegning åpen som har et layout, velg {{ui:Revisjonsfelt}}. En tabell over de utgitte revisjonene (revisjon, dato, av, godkjent, beskrivelse) tegnes øverst til høyre på arket du ser på. Når du godkjenner en utgivelse, oppdateres tabellen.

## Revisjon i tegningshodet

Gi attributtene i tegningshodet ditt en av disse taggene og velg {{ui:Fyll tegningshoder}} på den åpne tegningen:

| Tagg | Fylles med |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revisjonen (B, eller B.2 mens den arbeides på) |
| `VAULT.STATE` | tilstanden (Utgitt …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datoen for den siste revisjonen |
| `VAULT.APPROVER`, `APPROVED_BY` | hvem som godkjente den siste utgivelsen |

## PartCraft og BimCraft

PartCraft og BimCraft har det samme Dokumenter-panelet for sine egne filer: deler og sammenstillinger i PartCraft, IFC-modeller i BimCraft. Innsjekking lagrer modellen som er åpen, i prosjektmappen, og en sammenstilling viser hvilke deler den bruker og en stykkliste.

## Greit å vite

- To personer på samme delte mappe kan ikke begge sjekke ut en fil: utsjekkingen er en fil systemet nekter å lage to ganger. I en nettleser, og i en Studio med et skall som er eldre enn denne funksjonen, er dette så strengt som mappen tillater: to utsjekkinger i samme brøkdel av et sekund kan begge lykkes. Panelet sier hvilken som gjelder.
- Ikke rediger eller slett `.ccvault`-mappen for hånd. Loggen i den er protokollen; vault bygger listen sin på nytt fra den om nødvendig.
- Å endre en fil i mappen uten å sjekke den ut, vises som {{ui:Endret i mappen uten utsjekking}}.
