---
title: Stykklister etter sone
summary: Merk områder i en tegning som soner, og plasser en tabell for hver sone som teller blokkene inni. Tabellene følger tegningen mens du arbeider, og du velger hvilke kolonner hver viser.
keywords: stykkliste, BOM, delliste, sone, område, tabell, telling, antall, attributt, kolonner, artikkelnummer, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

En **sone** er et navngitt område i tegningen. En **stykklistetabell** lister det som ligger innenfor én sone, eller i hele tegningen: hver blokk med sitt antall og sine attributtverdier. En tegning kan ha så mange soner og tabeller du trenger. Én sone kan ha flere tabeller med ulike kolonner.

Verktøyene ligger på Blokker-fanen under {{ui:Stykkliste}}, i Mer-menyen i Blokker-gruppen, og de kan skrives.

## Lag en sone

Skriv {{cmd:BOMZONE}} og velg enten

- klikk to motsatte hjørner for et rektangel,
- velg {{ui:Mangekant}}, klikk hvert hjørne og trykk Enter for å lukke det, eller
- velg {{ui:Objekt}} og velg en lukket polylinje, en sirkel, en ellipse eller en lukket spline. Konturen kopieres. Objektet blir stående som det er.

Skriv deretter sonens navn. Sonen tegnes som en stiplet kontur med navnet over det øverste venstre hjørnet, på laget `BOM-ZONES`, som ikke plottes. Slå på plotting for det laget hvis du vil ha soner på papir.

En sone er en vanlig lukket polylinje. Flytt den, strekk den eller dra i håndtakene, og navnet følger med. For å gi en sone nytt navn, rediger navnets tekst, eller bruk {{cmd:BOMZONE}} og {{ui:Gi nytt navn}}. {{ui:Soner}} lister hver sone og hvor mange tabeller den har.

## Plasser en tabell

Skriv {{cmd:BOMTABLE}} (eller {{cmd:BOM}}), velg sonens kontur eller navnet, angi teksthøyden og klikk der tabellens øverste venstre hjørne skal. Trykk Enter i stedet for å velge en sone, eller velg {{ui:Hele}}, for en tabell over hele tegningen.

En ny tabell viser postnummeret, antallet, blokknavnet og en kolonne for hvert attributt blokkene har. De seks første får kolonne. De andre tilbys uten avkrysning. Blokker med samme navn og samme attributtverdier deler en rad.

## Hva som regnes som innenfor

- En blokk regnes i sonen som holder dens **innsettingspunkt**.
- En linje, bue, sirkel, polylinje, ellipse, spline eller skravur regnes **hel** i sonen som holder midten av utstrekningen. For en linje er det midtpunktet. Lengden kuttes ikke ved sonens kant.
- Et punkt nøyaktig på kanten er innenfor.
- Soner kan overlappe. Hver sone teller for seg selv, så et objekt i overlappen er med i begge tabellene.

## Tabeller følger tegningen

Når du legger til, flytter, kopierer eller sletter en blokk, endrer en attributt, eller omformer eller flytter en sone, tegnes hver tabell på nytt i samme steg. Angre tar tilbake både redigeringen og tabellendringen.

For å stoppe en tabell fra å følge med, kryss av {{ui:Frosset}} i innstillingene. En frosset tabell endres bare når du redigerer innstillingene, eller skriver {{cmd:BOMUPDATE}}, som oppdaterer alle tabeller nå.

## Velg kolonnene

Velg en tabell og skriv {{cmd:BOMEDIT}}. I dialogen:

- **Kolonner**: kryss av dem som skal vises (nummer, antall, navn, layer, lengde, område, merknader og hvert attributt). Skriv din egen overskrift for en av dem, og flytt dem opp eller ned.
- {{ui:Grupper rader etter}}: blokknavn og attributtverdier, bare blokknavn, layer, eller ett attributt. I en sammenslått rad står «varierer» der en verdi er ulik mellom blokkene.
- {{ui:Sorter etter}} en hvilken som helst kolonne, stigende eller synkende.
- {{ui:Tittel}}, {{ui:Vis tittelen}} og {{ui:Summerad}}.
- {{ui:Tell linjeverk etter layer}} legger til én rad per layer med antall objekter, deres samlede lengde og, for lukkede former, deres samlede område. Målene er i tegningsenheter.
- **Merknader**: kryss av kolonnen Merknader, og skriv deretter en merknad for en hvilken som helst rad i tabellen nederst i dialogen.

Hver tabell beholder sine egne valg.

## Postnumre

En rad beholder sitt postnummer så lenge den er i tabellen. En ny rad tar neste ledige nummer. Et nummer som er gitt ut, brukes aldri igjen, så ballonger og merknader som viser til et nummer, forblir riktige. {{ui:Nummerer poster på nytt}} nummererer dem fra 1 i den rekkefølgen de vises.

En rad kjennes igjen på det den grupperer på. Endrer du hvordan rader grupperes, eller endrer en attributtverdi som grupperingen bruker, regnes raden som en ny.

## Eksport og andre programmer

{{cmd:BOMEXPORT}}, eller {{ui:Eksporter CSV}} i dialogen, lagrer en tabell som en .csv-fil for et regneark.

I en DWG- eller DXF-fil er en tabell en vanlig blokk med linjer og tekst. Andre programmer viser og plotter den slik den er tegnet. Den er ikke et tabellobjekt der, og den oppdateres ikke i andre programmer. Koblingen til sonen beholdes i filen som utvidelsesdata, som CadCraft leser tilbake. Tabellen er derfor levende igjen når du åpner tegningen i CadCraft på nytt. En R12-DXF av en tegning uten ark beholder ikke innstillingen «ikke plottet» for sonens layer.

Eksploder en tabell gjør den om til løse linjer og tekst, og avslutter koblingen.
