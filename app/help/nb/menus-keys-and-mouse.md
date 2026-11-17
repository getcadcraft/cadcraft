---
title: Menyer, taster og mus
summary: Velg en menystil som passer til måten du allerede jobber på, gi en kommando din egen tast eller en tast som skriver en kommando, flytt kommandoer mellom båndfaner, og velg hva hjulet og musknappene gjør.
keywords: menystil, menyer, bånd, verktøylinje, kommandolinje, hurtigtaster, snarveier, taster, tilpass, endre, tilordne på nytt, snarveier, tekstbaserte taster, mus, hjul, inverter, zoomretning, midtknapp, høyreknapp, panorer, eksporter, importer, bytte, kjent, klassisk tegning
from: 8bbf4f88
---

CadCraft sine kommandoer er de samme uansett hvordan du når dem, og kommandolinjen er alltid der med sine aliaser (`L`, `C`, `TR` …). En **menystil** avgjør bare hvor knappene står på skjermen, hva de heter der og hvilke taster som kjører dem. Velg en i {{ui:Innstillinger}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menyer, taster og mus}}; endringen skjer med én gang, og denne nettleseren husker den.

## De tre stilene

| Stil | Hva du får |
|---|---|
| {{ui:CadCraft}} | CadCrafts egen verktøylinje: Fil, Tegn, Endre, Merk, Parametrisk, Blokker, Ark, Rediger og Visning, hver med en {{ui:Mer}}-meny. Utgangspunktet. |
| {{ui:Klassisk tegning}} | Et bånd lagt ut slik klassiske 2D-tegneprogrammer legger sine: en {{ui:Fil}}-meny og hurtigknapper, deretter fanene {{ui:Hjem}} (Tegn, Endre, Merknad, Layer, Blokk, Egenskaper, Verktøy, Utklippstavle), {{ui:Sett inn}}, {{ui:Merk}}, {{ui:Parametrisk}}, {{ui:Visning}}, {{ui:Administrer}}, {{ui:Utdata}} og {{ui:3D}}. Skriv kommandoer som vanlig. Midtknappen panorerer; et høyreklikk er {{key:Enter}}, og å dra med høyreknappen gjør ingenting. |
| {{ui:Bånd}} | Et bånd med enkle oppgavefaner: {{ui:Tegn}}, {{ui:Endre}}, {{ui:Merk}}, {{ui:Parametrisk}}, {{ui:Blokker}}, {{ui:Ark}}, {{ui:Visning}}, {{ui:3D}} og {{ui:Verktøy}}, med en {{ui:Fil}}-meny og hurtigknapper til høyre. Midt- og høyreknappen panorerer, som i CadCrafts egen stil. |

Alle stiler beholder CadCrafts taster: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, og {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} for tegnehjelpene. Bokstaver er aldri taster: CadCraft skriver dem inn på kommandolinjen.

Båndene har også verktøyene til Layer-panelet og tegnehjelpene i statuslinjen. Fanen {{ui:3D}} fylles når 3D-fanen under tegningen er åpnet; et 3D-verktøy valgt på modellfanen åpner 3D-fanen først, og et 2D-verktøy valgt på 3D-fanen går først tilbake til modellfanen.

:::tip
En tast som hører til CadCrafts egen oppsett, men som stilen din har gitt en annen kommando, gjør ingenting, og statuslinjen sier hvor kommandoen gikk («I Mine taster er Ortho Ctrl+Alt+O»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltastene beholder alltid sin betydning. Mens en kommando kjører, eller mens bokstaver skrives på kommandolinjen, hører tastene til kommandolinjen.
:::

## Gjør det til ditt eget

1. Velg stilen som ligner mest på det du vil ha, og klikk {{ui:Tilpass…}}.
2. Under {{ui:Taster og menyer}} finner du en kommando (søkeboksen hjelper). Klikk {{ui:Legg til en tast}} og trykk tasten. Klikk en tast for å fjerne den.
3. Med et bånd flytter {{ui:Hvor den står}} kommandoen til en annen fane og et annet panel, til {{ui:Fil}}-menyen, eller til {{ui:Bare taster}}.
4. Under {{ui:Mus}} setter du hjulet og knappene som panorerer tegningen.
5. Gi den et navn og klikk {{ui:Lagre}}.

Å lagre en innebygd stil lager en egen kopi («Min klassisk tegning»); den innebygde endres aldri. En tast gitt til to kommandoer vises i rødt og må rettes før du kan lagre.

## Taster som skriver en kommando

{{cmd:SHORTCUTS}} (Visning › Mer › {{ui:Hurtigtaster…}}) gir en tast en hel kommandolinje, for eksempel {{key:Ctrl+Alt+L}} for `LINE` eller {{key:F9}} for `ZOOM E`. Disse tastene hører til stilen i bruk: første gang denne versjonen åpnes, føres tastene du laget i en eldre versjon over til din egen stil «Mine CadCraft-taster», én gang, og virker som før. Eksport av stilen tar dem med.

## Mus

- **Musehjul**: {{ui:Rulling opp zoomer inn}} (utgangspunktet) eller {{ui:Rulling opp zoomer ut}}, og hvor raskt. Å klype med styreflaten zoomer alltid i den retningen fingrene beveger seg.
- **Panorer tegningen med**: midtknappen, høyreknappen, eller begge. Et høyreklikk uten å dra er alltid {{key:Enter}}. Venstreknappen velger og tegner alltid i CadCraft, så å krysse av for den endrer ingenting her.
- **Å dra i 3D-visningene**: 3D-fanen beholder sine egne knapper i alle stiler (venstre roterer, midt og høyre panorerer).

## Ta den med deg

{{ui:Eksporter}} lagrer stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Importer…}} legger til en, fra en annen datamaskin eller en kollega. En importert fil kan bare peke på CadCrafts egne kommandoer: alt annet i den utelates og telles i statuslinjen. {{ui:Slett denne stilen}} fjerner en av dine egne.

:::note
Disse innstillingene holdes i denne nettleseren. {{ui:Bruk denne stilen i alle apper}} under stilkortene gjør at alle apper åpnes i sin tilsvarende stil (sin egen verktøylinje, et bånd eller Klassisk tegning), med endringene du har gjort i hver app. CadCraft har ingen menylinjestil: når en annen apps menylinje velges for alle apper, beholder CadCraft sin egen verktøylinje.
:::

Relatert: [Tastatur og mus](topic:keyboard) · [CadCraft-innstillinger](topic:settings) · [Fra andre tegneprogrammer](topic:coming-from) · [Kommandoaliaser](topic:command-aliases)
