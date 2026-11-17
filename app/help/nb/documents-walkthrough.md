---
title: Dokumenter og revisjoner (vaulten)
summary: En steg-for-steg-gjennomgang av én ekte jobb: sett en prosjektmappe under kontroll, sjekk ut en tegning, endre den, sjekk den inn med en merknad, send den til gjennomgang, godkjenn og frigi den, se historikken og hva som bruker den, hva en annen person ser mens den er låst, og hvordan det virker med skymapper.
keywords: vault, dokumenter, steg-for-steg-veiledning, veiledning, sjekk ut, sjekk inn, revisjon, frigi, godkjenn, lås, historikk, hvor brukt, skymappe, prosjektmappe, dokumenthåndtering, pdm, to personer, delt mappe
from: 3829528d
---

## Hva du gjør

Du er Ana, og jobber med Riverside Clinic sammen med en kollega, Ben. Prosjektets tegninger ligger i én mappe dere begge når (en delt disk, en synkronisert mappe, eller en skymappe). Til slutt har én fil gått fra sin første kopi til frigitt revisjon **A**, er endret igjen som **B.1**, du har sett hvem som gjorde hva, og du har sett hva Ben ser når du holder filen.

Alt lagres i en skjult mappe `.ccvault` ved siden av filene dine: ingen server, ingenting lastes opp (en skymappe er unntaket, se det siste trinnet). For alle knapper og regler på ett sted, se emnet *Dokumenter: utsjekking, revisjoner og frigivelse* der appen din har det.

## 1. Sett opp prosjektmappen

1. Velg {{ui:Dokumenter…}} i **Vis**-fanens **{{ui:Mer}}**-meny, eller skriv `DOCUMENTS` (eller `DOCS`) og trykk {{key:Enter}}.
2. Velg {{ui:Velg prosjektmappen}} og velg mappen som inneholder prosjektets tegninger. (Prosjektmapper fungerer i Studio og i nettlesere som kan åpne en mappe, for eksempel Chrome og Edge. I andre nettlesere sier panelet det.)
3. Velg {{ui:Endre}} ved **Du:** og skriv navnet ditt, `Ana` (hvis det spør, også navnet på denne datamaskinen). Panelet sier nå *Du: Ana på* og datamaskinen din. Navnet ditt står på alt du gjør.
4. Velg {{ui:Start en vault i denne mappen}} og skriv prosjektets navn, `Riverside clinic`. Panelet sier *Vault er startet for Riverside clinic.*

## 2. Ta en fil under kontroll

1. Åpne **Filer som ikke er i vaulten** og velg {{ui:Legg til}} ved `plans/A-101.dxf`.
2. Den vises under **Filer i vaulten** med revisjon **A.1**, status **Arbeid pågår**. A.1 er dens første kopi; vaulten beholder en kopi av hver revisjon.

## 3. Sjekk ut, endre, sjekk inn

1. Velg {{ui:Åpne}} ved `plans/A-101.dxf`. Tegningen åpnes i CadCraft, og panelet lukkes slik at du kan se den. Panelet er fortsatt én kommando unna: `DOCUMENTS`.
2. Åpne panelet igjen og velg {{ui:Sjekk ut}}. Raden sier nå **Sjekket ut til deg**. En låsefil er laget i `.ccvault/locks`; ingen andre kan sjekke ut denne filen før du sjekker den inn.
3. Tegn noe: legg til en linje, flytt en vegg. Ingenting du gjør kan lagres over vaultens fil med mindre tegningen er sjekket ut til deg; Lagre som fungerer alltid for en kopi av din egen.
4. Åpne panelet, velg {{ui:Sjekk inn}} og skriv hva som endret seg (`Flyttet døren`). Panelet sier *sjekket inn som A.2*. Filen i prosjektmappen er nå tegningen du hadde åpen, og låsen er borte. Innsjekk uten endring beholder revisjonen.

Hvis du ombestemmer deg, gir {{ui:Angre utsjekking}} filen tilbake uten en ny revisjon.

## 4. Gjennomgang og frigivelse

1. Velg {{ui:Send til gjennomgang}}. Statusen blir **Til gjennomgang**, og filen er skrivebeskyttet.
2. Før du godkjenner, velg {{ui:Prosjektinnstillinger}} og list opp hvem som kan godkjenne (ett navn per linje), for eksempel `Ben` og `Carla`, og kryss av regelen om at godkjenneren må være noen annen enn forfatteren. Velg {{ui:Lagre innstillinger}}. Nå nekter selve vaulten alle andre.
3. Ben (eller Carla) velger {{ui:Godkjenn}} og skriver godkjennerens navn. Statusen blir **Frigitt**, og revisjonen blir **A**, med *godkjent av* og navnet. En frigitt fil er skrivebeskyttet. {{ui:Send tilbake}} ville ha returnert den til Arbeid pågår, med en grunn.

Godkjennerens navn er navnet som er skrevet i panelet; det er en oversikt over hvem som signerte, ikke et bevis på identitet.

## 5. En ny revisjon

1. På den frigitte filen, velg {{ui:Ny revisjon}}. Du holder den for neste bokstav.
2. Endre den, og velg deretter {{ui:Sjekk inn}}. Revisjonen er **B.1**, arbeid pågår. Frigi den på samme måte, og den blir **B**. {{ui:Angre utsjekking}} før den første innsjekkingen lar den stå på **A**.

Revisjonsbokstavene går A, B … Z, AA, AB. Hvis standarden din hopper over noen bokstaver, hopper prosjektinnstillingen *Bruk ASME Y14.35-rekkefølgen* over I, O, Q, S, X og Z for de neste revisjonene.

## 6. Se hva som skjedde

Velg filens navn for å åpne detaljene:

- **{{ui:Historikk}}**: hver hendelse, nyeste først, med hvem, hvilken datamaskin og når: *Sjekket inn A.2* av Ana, *Frigitt* av Ben, og så videre.
- **{{ui:Revisjoner}}**: revisjonstabellen. {{ui:Åpne kopi}} åpner en revisjon som en vanlig kopi som ikke kan overskrive vaultens fil; {{ui:Sammenlign med}} lister hva som ble lagt til, fjernet og endret mot revisjonen før den, eller en annen.
- **{{ui:Bruker}}**: tegningene den lenker til (xrefs).
- **{{ui:Brukt av}}**: {{ui:Brukt av}} lister hver annen tegning i vaulten som lenker til denne: endrer du en basisplan, vet du hvilke ark du må sjekke.

## Revisjon på arket

Med tegningen åpen (og et layout i den), velg {{ui:Revisjonsfelt}}: en tabell over de frigitte revisjonene tegnes øverst til høyre på arket. Velg {{ui:Fyll tegningshoder}} for å fylle tegningshodets attributter merket `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` eller `APPROVED_BY` med filens revisjon, status, dato og godkjenner. Når du godkjenner neste frigivelse, oppdateres revisjonsfeltet.

## 7. Hva Ben ser mens du holder filen

Sjekk nå filen ut igjen, og be Ben åpne samme prosjektmappe på sin datamaskin og åpne panelet. På filens rad ser han **Sjekket ut av Ana på** din datamaskin **siden** klokkeslettet, og ingen {{ui:Sjekk ut}}-knapp. Hvis han likevel prøver, nekter vaulten: låsen er en fil systemet ikke vil lage to ganger, så to personer kan ikke begge holde filen, selv i samme brøkdel av et sekund, når mappen ligger på disk i Studio. (I en nettleser gir mappen bare et best mulig forsøk, og panelet sier det under **{{ui:Mappe}}**.)

Hvis Ana er borte og Ben trenger filen, {{ui:Bryt utsjekking}} frigjør den. Han må skrive en grunn; den går i loggen sammen med hvis utsjekking det var. Når prosjektet har listet opp administratorer, kan bare de gjøre det. En utsjekking som er eldre enn grensen for utdatert (14 dager som standard) merkes *lenge*. Etter bruddet blir Anas sene innsjekking avvist, slik at dere ikke kan overskrive hverandre.

## 8. Skymapper

En skymappe er en prosjektmappe som lagres i teamets skylagring, slik at teamet ikke trenger en delt disk. I Studio, innlogget med din CadCraft-konto, viser panelet {{ui:Åpne en skymappe}} ved siden av {{ui:Velg prosjektmappen}}. Velg den og velg mappen, som listes som arbeidsområde / mappe. En eier av arbeidsområdet oppretter mappen først, og teamets skylagring må være aktiv. Alt over virker likt; serveren lager låsen, som er streng på tvers av personer. Hvis du ikke er logget inn, ber panelet deg logge inn. I en vanlig nettleserfane tilbys ikke skyknappen; bruk Studio.

## Prøv det

Gjør de åtte trinnene over med en kopi av en ekte fil. For de to-personers-trinnene trenger du en annen person, eller to vinduer med to navn. Hvis du prøver med en ekte delt mappe, lister Fellestestingssiden en sjekk som spør nettopp dette, og tar imot resultater.
