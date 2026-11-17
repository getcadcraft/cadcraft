---
title: Arksett
summary: Samle ark fra mange tegninger i én nummerert liste, fyll tegningshodene deres fra settet, publiser dem som én PDF og arkiver settet som en zip.
keywords: arksett, arksettbehandler, ssm, sheetset, ccsheets, dst, arkliste, arkindeks, tegningshode, felt, publiser, nummerer på nytt, arkiver, etransmit, oversendelse, undersett, forsideark, tegningsliste
from: 2c855720
---

## Hva du lærer

Hvordan du samler ark (layouter) fra flere tegningsfiler i et **arksett**, nummererer dem og gir dem titler, lar tegningshodene deres fylles ut for deg, publiserer hele settet som én PDF, og pakker alt i én zip som du kan sende.

Et arksett ligger i en egen liten fil, `<name>.ccsheets`, i mappen som holder tegningene. Settfilen lister arkene med stier fra den mappen, så du kan flytte eller kopiere hele mappen.

:::note
For å åpne en mappe for å lese og skrive trenger du Chrome eller Edge (de kan la en side arbeide i en mappe du velger), eller skrivebordsappen. Andre nettlesere åpner et sett skrivebeskyttet: du kan se på det og publisere det, og settfilen lastes ned i stedet for å lagres.
:::

## Start et sett

1. Finn seksjonen {{ui:Arksett}} i venstre panel, og åpne menyen {{ui:Sett}}. Å skrive {{cmd:SHEETSET}} (eller `SSM`) tar deg også dit.
2. Velg {{ui:Nytt sett…}}. Gi settet et navn, og om du vil, prosjektnavnet og -nummeret.
3. Velg mappen som holder tegningene. Settfilen lagres der.

For å åpne et sett senere, velg {{ui:Åpne sett…}} og velg den samme mappen. Hvis mappen har mer enn ett sett, spør CadCraft hvilket.

## Legg til ark

1. Velg {{ui:Legg til ark fra en tegning…}} og velg en av tegningene i mappen.
2. CadCraft leser tegningen i bakgrunnen (den åpnes ikke på skjermen) og lister arkene den har. Kryss av for dem du vil ha, og klikk {{ui:OK}}.
3. Velg et ark og trykk {{key:F2}} (eller {{ui:Gi nytt navn og nummer…}}) for å gi det et nummer og en tittel, for eksempel `A-101` og `Floor plan`.

{{ui:Nytt ark fra mal…}} lager en ny tegning fra arket i en annen tegning (dets tegningshode og utsnitt), oppkalt etter det nye arket, og legger den til. Settet husker tegningen du brukte som mal.

## Ordne settet

- **Undersett** grupperer ark, for eksempel Arkitektur › Planer: velg stedet der det skal ligge, og velg {{ui:Nytt undersett…}}.
- **Rekkefølge**: dra et ark til et annet sted i listen, eller over et undersett for å flytte det dit. Med tastaturet velger du det og trykker {{key:Alt+Up}} eller {{key:Alt+Down}}.
- **Åpne et ark**: dobbeltklikk på det (eller trykk {{key:Enter}}). Tegningen åpnes i sin egen fane, på det arket.
- **Fjern**: velg det og trykk {{key:Delete}}. Selve tegningen endres ikke.
- **Angre**: {{ui:Angre settendring}} og {{ui:Gjør om settendring}} går gjennom det du endret i settet.
- **Nummerer på nytt**: {{ui:Nummerer ark på nytt…}} nummererer hvert ark, eller ett undersetts, i listens rekkefølge: et prefiks, en start og et trinn (`A-` og `101` gir A-101, A-102 …).

Hver endring lagres i settfilen med en gang.

## Nummerer ark ut fra feltene deres

I stedet for å nummerere ark for hånd, la en regel bygge hvert nummer av arkets felt. Da får et ark som flyttes til en annen etasje eller et annet fag, nytt nummer av seg selv.

1. Gi hvert ark sine felt: velg det, klikk {{ui:Gi nytt navn…}}, og skriv i {{ui:Felt for dette arket}} ett felt per linje, for eksempel `DISCIPLINE = A` og `LEVEL = 1`. Et felt som hele settet deler (for eksempel `DISCIPLINE = A`), kan i stedet settes i settets {{ui:Egenskaper…}}.
2. Åpne menyen i panelet, og klikk {{ui:Nummereringsregel…}}.
3. Skriv regelen, for eksempel `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` teller opp blant arkene der de andre feltene er like, så etasje 1 får A-101, A-102, og etasje 2 starter på nytt med A-201. `{SEQ:2}` skriver det med to sifre. `{SUBSET}` er navnet på undersettet et ark ligger i.
4. Velg hva som skjer når et felt endres: {{ui:Nummerer arkene på nytt}} holder numrene i tråd med regelen etter hver endring. Det andre valget nummererer dem én gang, nå.

Regelen lagres i settfilen. Mens den nummererer av seg selv, endre et arks felt i stedet for nummeret.

## Fyll tegningshoder fra settet

Et tegningshode får teksten sin fra settet når attributtene er merket med et felts navn:

| Kode | Hva den viser |
|---|---|
| `SHEETNUMBER` (eller `SHEET_NO`, `DWG_NO`) | Arkets nummer |
| `SHEETTITLE` (eller `TITLE`, `SHEET_TITLE`) | Arkets tittel |
| `SHEETDESC` | Arkets beskrivelse |
| `PROJECTNAME` (eller `PROJECT`) | Prosjektnavnet |
| `PROJECTNUMBER` (eller `PROJECT_NO`, `JOB_NO`) | Prosjektnummeret |
| `SHEETSETNAME` | Settets navn |
| `SHEETINDEX`, `SHEETCOUNT` | «3 av 12», og 12 |
| Egne, for eksempel `CLIENT` | Det du skrev for den i {{ui:Settfelt…}} |

{{ui:Settfelt…}} har prosjektnavnet og prosjektnummeret, og dine egne felt, ett per linje som `NAME = value`.

{{ui:Oppdater tegninger}} skriver nummerne, titlene og feltene inn i tegningshodene for hver tegning i settet, og gir nytt navn til hver arkfane i tråd med settet (som standard nummer og tittel, for eksempel `A-101 Floor plan`; {{ui:Settfelt…}} › {{ui:Layout tab names}} endrer det). Hver tegning lagres der den ligger, i sitt eget format og sin egen versjon. Etter at du har nummerert eller gitt nytt navn til ark på nytt, kjør det igjen, så følger fanene og tegningshodene med.

## En arkliste på forsideark

Velg forsidearket i listen, og velg {{ui:Sett arklisten på dette arket}}. En tabell over alle arkene (nummer og tittel, under undersettet) legges øverst til venstre på arket. {{ui:Oppdater tegninger}} og {{ui:Publiser til PDF}} holder den oppdatert. Den er én blokk, `CC_SHEETLIST`: flytt den som enhver blokkreferanse.

## Publiser settet

{{ui:Publiser til PDF}} lager én PDF med én side per ark, i settets rekkefølge, i hvert arks egen papirstørrelse, med et bokmerke per ark («A-101 — Plan»). Med et undersett valgt spør CadCraft om du vil publisere bare det undersettet. Tegningshodene i PDF-en fylles fra settet, selv før du oppdaterer tegningene. Selve tegningene endres ikke av publiseringen. PDF-en lastes ned.

{{ui:Publiser til DWG…}} skriver hvert ark som en egen DWG (DWG 2018): modellen og det ene arket, med tegningshodet fylt fra settet, navngitt etter nummer og tittel (`A-101 Level 1 floor plan.dwg`). Velg {{ui:DWG}}, eller {{ui:DWG + PDF}} for settets PDF ved siden av dem. En `publish.json` lister hver fil med størrelse og SHA-256. Når mappen til settet kan skrives til (CadCraft Studio, eller en mappe du valgte i nettleseren), legges filene i en mappe `<set name> - published`. Ellers lastes de ned som én zip. [Klasseoverstyringer for utsnitt](topic:viewport-overrides) følger med i hver DWG.

## Arkiver settet

{{ui:Arkiver som zip}} pakker settfilen, hver tegning den bruker, og det de lenker til (lenkede tegninger, og deres igjen, og bilder), med mappene deres bevart. I tillegg legges det til en `Transmittal.txt` som lister hver fil. En lenke som ikke er i settets mappe, listes der som manglende. Lenker finnes ved sin sti fra tegningen, deretter ved filnavnet hvor som helst i mappen.

## Settfilen

`.ccsheets`-filen er JSON som du kan lese i en hvilken som helst tekstbehandler:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Stiene er relative til settets mappe, med `/` mellom mappene. CadCraft kontrollerer filen når den åpnes: en absolutt sti, et ark uten fil eller layout, eller tekst som ikke er ren, utelates, og historikken sier det.

## Feilsøking

| Hva du ser | Hvorfor | Hva du gjør |
|---|---|---|
| «Denne mappen er skrivebeskyttet her» | Nettleseren kan ikke skrive i mappen | Bruk Chrome eller Edge, eller skrivebordsappen. I mellomtiden holder {{ui:Last ned settfilen}} endringene dine |
| Et ark mangler i PDF-en: «har ingen layout som heter …» | Arkets layout ble gitt nytt navn eller fjernet i tegningen | Åpne tegningen og sjekk fanene. Fjern arket og legg det til igjen |
| Et tegningshode forblir tomt | Attributtene har andre koder | Gi attributtkodene nytt navn til feltnavnene over (BEDIT) |
| «har allerede en layout som heter … så fanen ble ikke gitt nytt navn» | To ark i én tegning ville fått samme fanenavn | Gi ett av dem et annet nummer eller en annen tittel |
