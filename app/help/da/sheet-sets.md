---
title: Arksæt
summary: Saml ark fra mange tegninger i én nummereret liste, udfyld deres tegningshoveder fra sættet, udgiv hele sættet som én PDF, og arkivér sættet som en zip.
keywords: arksæt, arksætshåndtering, ssm, sheetset, ccsheets, dst, arkliste, arkindeks, tegningshoved, felter, udgiv, omnummerér, arkivér, etransmit, transmittal, undersæt, forsideark, tegningsliste
from: 2c855720
---

## Hvad du lærer

Sådan samler du ark (layouts) fra flere tegningsfiler i et **arksæt**, nummererer og titler dem, lader deres tegningshoveder blive udfyldt for dig, udgiver hele sættet som én PDF og pakker alt i én zip, du kan sende.

Et arksæt bor i en lille fil for sig selv, `<navn>.ccsheets`, i mappen med tegningerne. Sætfilen lister arkene med stier fra den mappe, så du kan flytte eller kopiere hele mappen.

:::note
At åbne en mappe for at læse og skrive kræver Chrome eller Edge (de kan lade en side arbejde i en mappe, du vælger), eller desktop-appen. Andre browsere åbner et sæt som skrivebeskyttet: du kan kigge i det og udgive det, og sætfilen downloades i stedet for at blive gemt.
:::

## Opret et sæt

1. Find sektionen {{ui:Arksæt}} i venstre panel, og åbn dens menu {{ui:Sæt}}. At skrive {{cmd:SHEETSET}} (eller `SSM`) fører dig også dertil.
2. Vælg {{ui:Nyt sæt…}}. Giv sættet et navn, og hvis du vil, projektets navn og nummer.
3. Vælg mappen, der indeholder tegningerne. Sætfilen gemmes dér.

For at åbne et sæt senere vælger du {{ui:Åbn sæt…}} og vælger den samme mappe. Hvis mappen indeholder mere end ét sæt, spørger CadCraft, hvilket.

## Tilføj ark

1. Vælg {{ui:Tilføj ark fra en tegning…}} og vælg en af tegningerne i mappen.
2. CadCraft læser den tegning i baggrunden (den åbnes ikke på skærmen) og lister dens ark. Sæt flueben ved dem, du vil have, og klik på {{ui:OK}}.
3. Vælg et ark, og tryk {{key:F2}} (eller {{ui:Omdøb og omnummerér…}}) for at give det et nummer og en titel, for eksempel `A-101` og `Plantegning`.

{{ui:Nyt ark fra skabelon…}} laver en ny tegning ud fra et andet tegnings ark (dets tegningshoved og viewports), navngivet efter det nye ark, og tilføjer den. Sættet husker den tegning, du brugte som skabelon.

## Ordn sættet

- **Undersæt** grupperer ark, for eksempel Arkitektur › Planer: vælg, hvor det skal ligge, og vælg {{ui:Nyt undersæt…}}.
- **Rækkefølge**: træk et ark til et andet sted på listen, eller over på et undersæt for at flytte det dertil. Med tastaturet vælger du det og trykker {{key:Alt+Up}} eller {{key:Alt+Down}}.
- **Åbn et ark**: dobbeltklik på det (eller tryk {{key:Enter}}). Dets tegning åbnes i sin egen fane, på det ark.
- **Fjern**: vælg det, og tryk {{key:Delete}}. Selve tegningen ændres ikke.
- **Fortryd**: {{ui:Fortryd sætændring}} og {{ui:Gentag sætændring}} går igennem de ændringer, du har lavet i sættet.
- **Omnummerér**: {{ui:Omnummerér ark…}} nummererer alle ark, eller et undersæts, i listens rækkefølge: et præfiks, en start og et trin (`A-` og `101` giver A-101, A-102 …).

Hver ændring gemmes i sætfilen med det samme.

## Nummerér ark ud fra deres felter

I stedet for at nummerere ark i hånden lader du en regel bygge hvert nummer ud fra arkets felter, så et ark, der flyttes til en anden etage eller disciplin, selv får sit nye nummer.

1. Giv hvert ark sine felter: vælg det, klik på {{ui:Omdøb…}}, og skriv i {{ui:Dette arks felter}} ét felt pr. linje, for eksempel `DISCIPLINE = A` og `LEVEL = 1`. Et felt hele sættet deler (sig `DISCIPLINE = A`) kan i stedet stå i sættets {{ui:Egenskaber…}}.
2. Åbn panelets menu, og klik på {{ui:Nummereringsregel…}}.
3. Skriv reglen, for eksempel `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` tæller op blandt de ark, hvis andre felter er ens, så etage 1 får A-101, A-102, og etage 2 starter forfra ved A-201. `{SEQ:2}` skriver den med to cifre; `{SUBSET}` er navnet på det undersæt, et ark ligger i.
4. Vælg, hvad der sker, når et felt ændres: {{ui:Omnummerér arkene}} holder numrene i overensstemmelse med reglen efter hver ændring; det andet valg nummererer dem én gang, nu.

Reglen gemmes i sætfilen. Mens den nummererer af sig selv, skal du ændre et arks felter frem for dets nummer.

## Udfyld tegningshoveder fra sættet

Et tegningshoved får sin tekst fra sættet, når dets attributter er mærket med et felts navn:

| Mærke | Hvad det viser |
|---|---|
| `SHEETNUMBER` (eller `SHEET_NO`, `DWG_NO`) | Arkets nummer |
| `SHEETTITLE` (eller `TITLE`, `SHEET_TITLE`) | Arkets titel |
| `SHEETDESC` | Arkets beskrivelse |
| `PROJECTNAME` (eller `PROJECT`) | Projektets navn |
| `PROJECTNUMBER` (eller `PROJECT_NO`, `JOB_NO`) | Projektets nummer |
| `SHEETSETNAME` | Sættets navn |
| `SHEETINDEX`, `SHEETCOUNT` | "3 of 12", og 12 |
| Dine egne, for eksempel `CLIENT` | Det, du skrev til det i {{ui:Sætfelter…}} |

{{ui:Sætfelter…}} rummer projektets navn og nummer og dine egne felter, ét pr. linje som `NAVN = værdi`.

{{ui:Opdatér tegninger}} skriver numre, titler og felter ind i tegningshovederne for hver tegning i sættet, og omdøber hver arks layoutfane, som sættet siger (som standard nummer og titel, for eksempel `A-101 Plantegning`; {{ui:Sætfelter…}} › {{ui:Layoutfanernes navne}} ændrer det). Hver tegning gemmes på sin plads, i sit eget format og sin egen version. Når du har omnummereret eller omdøbt ark, kører du den igen, så følger fanerne og tegningshovederne med.

## En arkliste på forsidearket

Vælg forsidearket på listen, og vælg {{ui:Læg arklisten på dette ark}}. En tabel over alle ark (nummer og titel, under deres undersæt) lægges i arkets øverste venstre hjørne. {{ui:Opdatér tegninger}} og {{ui:Udgiv til PDF}} holder den opdateret. Det er én blok, `CC_SHEETLIST`: flyt den, som du ville flytte enhver blokreference.

## Udgiv sættet

{{ui:Udgiv til PDF}} laver én PDF med en side pr. ark, i sættets rækkefølge, i hvert arks egen papirstørrelse, med et bogmærke pr. ark ("A-101 — Plantegning"). Med et undersæt valgt spørger CadCraft, om kun det undersæt skal udgives. Tegningshovederne i PDF'en udfyldes fra sættet, selv før du har opdateret tegningerne; selve tegningerne ændres ikke af udgivelsen. PDF'en downloades.

{{ui:Udgiv til DWG…}} skriver hvert ark som sin egen DWG (DWG 2018): modellen og netop det ark, med dets tegningshoved udfyldt fra sættet, navngivet efter sit nummer og sin titel (`A-101 Level 1 floor plan.dwg`). Vælg {{ui:DWG}}, eller {{ui:DWG + PDF}} for sættets PDF ved siden af dem. En `publish.json` lister hver fil med dens størrelse og SHA-256. Når sættets mappe kan skrives til (CadCraft Studio, eller en mappe du valgte i browseren), lægges filerne i en mappe `<sættets navn> - published`; ellers downloades de som én zip. Viewport-[klassetilsidesættelser](topic:viewport-overrides) følger med i hver DWG.

## Arkivér sættet

{{ui:Arkivér som zip}} pakker sætfilen, hver tegning den bruger, og det de tegninger linker til (linkede tegninger, og deres igen, og billeder), med deres mapper bevaret, plus en `Transmittal.txt`, der lister hver fil. Et link, der ikke er i sættets mappe, står dér som manglende. Links findes via deres sti fra tegningen, og derefter via deres filnavn hvor som helst i mappen.

## Sætfilen

`.ccsheets`-filen er JSON, som du kan læse i enhver teksteditor:

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

Stier er relative til sættets mappe, med `/` mellem mapper. CadCraft kontrollerer filen, når den åbner den: en absolut sti, et ark uden fil eller layout, eller tekst, der ikke er ren, udelades, og historikken siger det.

## Fejlfinding

| Hvad du ser | Hvorfor | Hvad du gør |
|---|---|---|
| "This folder is read only here" | Browseren kan ikke skrive i mappen | Brug Chrome eller Edge, eller desktop-appen; imens holder {{ui:Download sætfilen}} dine ændringer |
| Et ark er udeladt af PDF'en: "has no layout named …" | Arkets layout blev omdøbt eller fjernet i sin tegning | Åbn tegningen, og kontrollér dens faner; fjern arket, og tilføj det igen |
| Et tegningshoved forbliver tomt | Dets attributter har andre mærker | Omdøb attributmærkerne til felternes navne ovenfor (BEDIT) |
| "already has a layout named … so that tab was not renamed" | To ark i én tegning ville få samme fanenavn | Giv et af dem et andet nummer eller en anden titel |
