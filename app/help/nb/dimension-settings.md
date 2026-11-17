---
title: Angi målstørrelser, desimaler og skala
summary: Velg teksthøyde, pilstørrelse, desimaler og samlet skala for nye mål, endre eksisterende mål, og forstå hvordan måltilsettingsstiler virker i CadCraft.
keywords: måltilsettingsstil, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, samlet skala, desimaler, pilstørrelse, annoteringsskala, dimtextunit, enheter i teksten, mm, cm, m, km, millimeter, meter, dimlfac, dimpost
from: 8ec82a07
---

## Hva du lærer

Hvor store måltekst og piler er, hvordan du setter dem for en tegning som skrives ut i 1:50 eller 1:100, og hvordan du endrer mål du allerede har laget.

## Hvordan målstørrelser virker

Hvert mål har sitt eget sett med størrelser: teksthøyde, pilstørrelse, desimaler, avstanden rundt teksten, hvor langt målehjelpelinjene går forbi målelinjen, og hvor langt de starter fra objektet. Standardverdiene ligger nær den vanlige ISO-stilen:

| Innstilling | Standard | Kommando |
|---|---|---|
| Teksthøyde | 2.5 | {{cmd:DIMTXT}} |
| Pilstørrelse | 2.5 | {{cmd:DIMASZ}} |
| Desimaler | 2 (etterfølgende nuller fjernes) | {{cmd:DIMDEC}} |
| Avstand rundt teksten | 0.625 | {{cmd:DIMGAP}} |
| Forlengelse forbi målelinjen | 1.25 | {{cmd:DIMEXE}} |
| Forskyvning fra objektet | 0.625 | {{cmd:DIMEXO}} |
| Samlet skala | 1 | {{cmd:DIMSCALE}} |

Hver størrelse ganges med den **samlede skalaen**. Sett størrelsene slik du vil ha dem på papiret (2.5 mm tekst), og sett den samlede skalaen til utskriftsskalaen (50 for 1:50). Teksten er da 2.5 × 50 = 125 tegningsenheter høy, og skrives ut med 2.5 mm.

:::note
Navngitte måltilsettingsstiler håndteres med {{cmd:DIMSTYLE}}: se avsnittet under. Hvert mål beholder også innstillingene det ble laget med, så du kan fortsatt endre ett mål alene i {{ui:Egenskaper}}.
:::

## Sett størrelsene for nye mål

Begge måtene under endrer bare mål du lager etterpå.

### I panelet Gjeldende innstillinger

1. Trykk {{key:Esc}} slik at ingenting er valgt. På fanen {{ui:Modell}} står det høyre panelet {{ui:Gjeldende innstillinger}}.
2. Rull ned i panelet til {{ui:Nye mål}}, forbi radene for lag, farge, enheter og Layer 0 (på en liten skjerm starter den under nederste kant). Klikk i {{ui:Samlet skala}}, skriv `50` og trykk {{key:Enter}}.
3. Sett {{ui:Teksthøyde}}, {{ui:Pilstørrelse}} og {{ui:Desimaler}} på samme måte hvis du vil ha andre verdier.

Statuslinjen bekrefter hver av dem, for eksempel «Samlet skala for nye mål: 50».

### På kommandolinjen

1. Skriv `DIMSCALE` og trykk {{key:Enter}}.
2. Ved `Enter new value for DIMSCALE <1>`, skriv `50` og trykk {{key:Enter}}.

Historikken bekrefter «DIMSCALE = 50. New dimensions use it; select existing ones to change theirs.» {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} og {{cmd:DIMEXO}} fungerer på samme måte. Trykk {{key:Enter}} ved ledeteksten for å beholde gjeldende verdi.

### Fot og tommer i mål

Nye mål bruker tegningens lengdeformat: sett det med {{ui:Lengdeformat}} i {{ui:Gjeldende innstillinger}} eller {{cmd:UNITS}} (se [Fot og tommer](topic:units-papers-scales#feet-and-inches-and-fractions)), og neste mål leser `12'-6 1/2"`. {{cmd:DIMLUNIT}} setter bare målenes format (2 desimaler, 3 ingeniør, 4 arkitekt, 5 brøk). For et mål du allerede har laget, velg det og velg {{ui:Format}} i {{ui:Egenskaper}}; med et brøkformat tar boksen {{ui:Brøk}} to-potensen (4 = 1/16).

## Mål i mm, cm, m eller km

Et mål måler i tegningsenheter. Det kan skrive lengden i millimeter, centimeter, meter eller kilometer i stedet, med enheten etter tallet: en 1250 mm vegg leses `1250 mm`, `125 cm`, `1.25 m` eller `0.00125 km`.

1. Sett tegningens {{ui:Enheter}} i {{ui:Gjeldende innstillinger}} først (se [Enheter, papirstørrelser og skala](topic:units-papers-scales#drawing-units)), slik at CadCraft vet hva én tegningsenhet er. En tegning uten enheter leses som millimeter, og {{cmd:DIMTEXTUNIT}} sier det.
2. For nye mål: trykk {{key:Esc}} slik at ingenting er valgt, og velg under {{ui:Nye mål}} {{ui:Enheter i teksten}}: {{ui:Tegningsenheter}}, `mm`, `cm`, `m` eller `km`.
3. For mål du allerede har laget: velg dem, og i {{ui:Egenskaper}} › {{ui:Primære enheter}} velg {{ui:Enheter i teksten}}.

Eller skriv {{cmd:DIMTEXTUNIT}} (`DTU`) og svar `D`, `MM`, `CM`, `M` eller `KM`: med mål valgt endrer den dem (ett angre-steg), uten valg setter den nye mål.

{{ui:Desimaler}} ({{cmd:DIMDEC}}) setter fortsatt hvor mange desimaler som vises: med meter og 3 desimaler leses 1234 mm som `1.234 m`. Teksten skrives som et desimaltall. På et ark måles mål i arkets papirenhet (millimeter eller tommer).

En lagret DWG eller DXF beholder valget som målets målskala (DIMLFAC) og et suffiks (DIMPOST, ` m`), slik at andre programmer viser samme tekst. Hvis du senere endrer tegningens {{ui:Enheter}}, tilpasses mål skrevet i mm, cm, m eller km på nytt, slik at de fortsatt sier riktig lengde. {{ui:Satt for hånd (skala eller suffiks)}} betyr at målets {{ui:Målskala}} eller suffiks ble satt på en annen måte; velg en enhet for å erstatte dem.

## Endre mål du allerede har laget

1. Klikk ett mål. Overskriften i høyre panel leser {{ui:Måltilsetting}}.
2. Innstillingene er i seksjoner; rull ned i panelet for å nå de senere:
   - {{ui:Generelt}}: {{ui:Måltilsettingsstil}}
   - {{ui:Geometri}}: {{ui:Type}} og {{ui:Måling}} (kun lesing)
   - {{ui:Tekst}}: {{ui:Overstyring av tekst}} og {{ui:Teksthøyde}}
   - {{ui:Linjer og piler}}: {{ui:Pilstørrelse}}
   - {{ui:Tilpasning}}: {{ui:Samlet skala}}
   - {{ui:Primære enheter}}: {{ui:Desimaler}}
3. Skriv en ny verdi og trykk {{key:Enter}}.

Målet tegnes om med en gang. For vinkelmål setter {{ui:Desimaler (°)}} desimalene i vinkelen.

:::note
Med flere mål valgt viser panelet radene de har felles, og en verdi som er ulik mellom dem står som {{ui:Varierer}}. En verdi du skriver endrer alle valgte mål i ett steg, så ett {{key:Mod+Z}} setter dem tilbake.
:::

## Mål fra åpnede tegninger

Et mål fra en åpnet DWG eller DXF vises nøyaktig slik det andre programmet tegnet det. Panelet sier «Shown as the program that made it drew it. Change it and CadCraft draws it again in its own style.» Så snart du endrer en verdi, flytter et håndtak eller flytter målet, tegner CadCraft det på nytt med sine egne pilspisser og skrifttype, med størrelsene den leste fra filen.

Noen mål kan bare leses som tegnet, ikke som redigerbare mål; panelet viser da «Drawn from» og et blokknavn, og boksen «About this file» teller dem.

## Vanlige feil

- **Endring av DIMSCALE endret ingenting på skjermen.** Innstillingen gjelder nye mål. Velg eksisterende mål og endre {{ui:Samlet skala}} i panelet.
- **Desimaler viser færre sifre enn angitt.** Etterfølgende nuller fjernes: med 2 desimaler vises `1250` og `1250.5`, ikke `1250.00`.
- **Teksten har riktig høyde på papir i et visningsområde, men feil i en modellutskrift.** Den samlede skalaen må samsvare med skalaen du skriver ut i. Utskrift med tilpasning til papir gir en merkelig skala; velg en standard skala i utskriftsdialogen.
- **Enheter som mm eller m i teksten.** Velg {{ui:Enheter i teksten}} (se [Mål i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). For et annet ord etter tallet, skriv det i en overstyring: `<> TYP.`.

## Navngitte måltilsettingsstiler

Skriv `DIMSTYLE` (`D`) for å åpne {{ui:Måltilsettingsstilbehandler}}. Den lister tegningens stiler, hvor mange mål som bruker hver, og hvilken som er gjeldende. **Standard** finnes alltid.

- {{ui:Gjør aktiv}}: nye mål bruker den stilens innstillinger og får dens navn.
- {{ui:Ny…}}: en ny stil som starter som en kopi av en du velger.
- {{ui:Endre…}}: de samme feltene som måltilsettingsdelen i {{ui:Egenskaper}} (linjer og piler, tekst, tilpasning, enheter, alternative enheter, toleranser). Trykker du {{ui:OK}}, endres stilen **og hvert mål som bruker den endres med den**, innstilling for innstilling. En innstilling du endret på ett mål alene, blir stående slik den er med mindre stilen endret den innstillingen.
- {{ui:Gi nytt navn…}} og {{ui:Slett}}: Standard kan ikke gis nytt navn eller slettes, og heller ikke den gjeldende stilen eller en stil som mål bruker.
- {{ui:Sammenlign…}}: hva som skiller to stiler.
- {{ui:Bruk på valgte}}: velg mål først; de tar stilens innstillinger og navn.

`-DIMSTYLE` gjør det samme på kommandolinjen: `Restore`, `Save` (de gjeldende innstillingene, også det du skrev med {{cmd:DIMTXT}} og de andre, under et navn), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Stilene lagres i en DWG eller DXF (dens tabell for måltilsettingsstiler) og leses fra filene du åpner. Den *gjeldende* stilen lagres ikke: en tegning åpnes med Standard som gjeldende. Standard beholder sine egne innstillinger mens en annen stil er gjeldende.

## Endre måltekst og målehjelpelinjer

{{cmd:DIMEDIT}} (`DED`) virker på målene du velger: **Hjem** setter teksten tilbake der stilen plasserer den, **Ny** skriver annen tekst (`<>` står for målet), **Roter** roterer teksten, **Skrå** skråstiller målehjelpelinjene til lineære og innrettede mål til en vinkel du skriver (trykk {{key:Enter}} for ingen). {{cmd:DIMTEDIT}} flytter teksten til **Venstre**, **Høyre** eller **Midten** av målelinjen, eller roterer den (**Vinkel**), eller sender den **Hjem**. Teksten står alltid på målelinjen: den kan ikke dras til et fritt sted.
