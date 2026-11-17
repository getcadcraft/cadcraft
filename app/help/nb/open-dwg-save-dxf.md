---
title: Åpne en DWG, rediger den og lagre en kopi
summary: Åpne en tegning noen har sendt deg, kontroller hva som kom inn, gjør en endring, og send en kopi tilbake som DWG eller DXF.
keywords: dwg, dxf, åpne, importer, eksporter, lagre, r12, tur-retur, konsulent, xref, kontroller tegning, lagre som, saveas, dwg-lagring, format
from: 49de4bf6
---

## Hva du skal gjøre

Åpne en DWG fra en konsulent, kontroller hva CadCraft kunne og ikke kunne vise, legg til et notat, plott et ark til PDF og lagre en kopi å sende tilbake, som DWG eller DXF.

## Åpne filen

1. Trykk {{key:Mod+O}}, eller klikk {{ui:Åpne}}.
2. Velg `.dwg`-filen.

Statuslinjen viser "Leser …" mens tegningen leses. Når den er ferdig, fyller tegningen skjermen, og historikken sier for eksempel "Åpnet plan.dwg: 18,240 objekter på 64 layer", med hvor lang tid det tok.

:::offline
Du er frakoblet. Hvis knappen {{ui:Lagre for frakoblet bruk}} viser «Klar for frakoblet bruk», åpnes DWG-filer normalt. Hvis ikke, og ingen DWG er åpnet i denne fanen ennå, kan åpning av en DWG mislykkes, fordi CadCraft sin DWG-leser hentes med den første DWG. Åpne en DXF i stedet, eller lagre CadCraft for frakoblet bruk neste gang du er tilkoblet. Se [Arbeide frakoblet](common:offline).
:::

## Kontroller hva som kom inn

1. Se på {{ui:Tegning}}-seksjonen i venstre panel: format og versjon, enheter, antall objekter og layere, og ark.
2. Les boksen «Om denne filen» under den, hvis det er en.

Boksen lister:

- **Ikke vist ennå:** objekter CadCraft ikke kan tegne ennå, etter type og antall. De utelates, ikke gjettes.
- **Layouter (ark) kom inn:** åpne dem med fanene under tegningen.
- **Måltilsetninger som bare kunne leses slik de er tegnet.**

3. Klikk gjennom fanene under tegningen for å se hvert ark.
4. Kontroller {{ui:Enheter}} i {{ui:Gjeldende innstillinger}} (ingenting valgt, fanen {{ui:Modell}}). Hvis det står {{ui:Uten enhet}}, men du vet at tegningen er i millimeter, sett den, slik at arkets og plottets målestokker blir riktige.

:::tip
Hvis du forventet en del av tegningen og ikke kan se den, sjekk {{ui:Layer}}-panelet: layeret kan være av eller frosset i filen. Klikk på navnet for å gjøre det aktivt; det slår det på.
:::

## Gjør endringen din

1. Lag et layer for notatene dine: klikk {{ui:Nytt layer}}, skriv `NOTES` og trykk {{key:Enter}}.
2. Skriv `DT` og trykk {{key:Enter}}.
3. Klikk der notatet skal stå.
4. Skriv en teksthøyde som passer tegningen (se [Legg til tekst og merkelapper](topic:text)), og trykk {{key:Enter}}.
5. Trykk {{key:Enter}} for å beholde rotasjonen på 0.
6. Skriv notatet ditt og trykk {{key:Enter}}.
7. Trykk {{key:Enter}} igjen for å avslutte.

Endringer av importerte mål er greie: så snart du endrer ett, tegner CadCraft det på nytt i sin egen stil.

## Plott et ark til gjennomgang

1. Klikk arkets fane.
2. Trykk {{key:Mod+P}}.
3. Klikk {{ui:Last ned PDF}}.

Se [Plott til PDF](topic:plot-pdf).

## Lagre en kopi

1. Trykk {{key:Mod+S}}, eller klikk {{ui:Lagre}}.

Du åpnet en DWG, så nettleseren laster ned `<name>.dwg`, i den versjonen DWG-en kom i. Historikken sier for eksempel "Lagret en kopi som Plan.dwg (DWG (AutoCAD 2018))." og lister, på linjene under, alt som endret seg underveis.

2. Les disse linjene før du sender filen. [Hva en DWG beholder og endrer](topic:files#what-a-dwg-keeps-and-changes) forklarer hver av dem.

Den opprinnelige DWG-en din endres aldri. Hver lagring er en ny nedlasting.

## Lagre som DWG eller DXF

For å velge format selv:

1. Trykk {{key:Mod+Shift+S}}, eller klikk {{ui:Lagre som}}.

Dialogboksen {{ui:Lagre en kopi som}} åpnes med fire valg, hver med filnavnet den vil gi: {{ui:DWG}}, med sin {{ui:Versjon}}-liste, {{ui:DXF R12}}, {{ui:DXF 2000}} og {{ui:DXF 2000 (binary)}}. Tegningens nåværende format og versjon er allerede valgt.

2. Klikk formatet du vil ha. For DWG, velg versjonen den andre kontoret bruker, eller en eldre: AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000.
3. Klikk {{ui:Lagre}}.

Kopien lastes ned. Fra nå av lagrer {{key:Mod+S}} denne tegningen i det formatet, og nye tegninger starter med det også, i denne nettleseren. {{ui:Avbryt}} eller {{key:Esc}} lagrer ingenting, og historikken sier "Ikke lagret."

Slik velger du:

- **DWG** beholder mest: ark med deres visningsområder, ekte måltilsetninger, skraveringsmønstre, layer- og blokknavn slik du skrev dem, og flerlinjetekst som flerlinjetekst. AutoCAD 2000-versjonen åpnes i flest programmer; 2004 og nyere beholder også ekte farger.
- **DXF 2000** er en tekstfil som beholder nesten alt en DWG beholder: hvert ark som en layout med sine visningsområder, ekte måltilsetninger, skraveringsmønstre, ekte farger, linjevekter, linjetyper, og navn slik du skrev dem. Den åpnes i AutoCAD 2000 og nyere og i de fleste CAD-programmer. Flerhjelpelinjer blir linjene, pilspissene og teksten de tegner. En DXF åpnet i versjon 2000 eller nyere lagres som DXF 2000.
- **DXF 2000 (binary)** har samme innhold som DXF 2000, i det binære formatet: en mindre fil som beholder hvert tall nøyaktig. Binære DXF-filer fra andre programmer åpnes som tekstfiler, og en tegning åpnet fra en binær DXF lagres tilbake som binær.
- **DXF R12** åpnes i nesten alle CAD-programmer. Den beholder det første arket med sine visningsområder, og CadCraft sine andre ark. Den forenkler nyere ting, som flerlinjetekst og skraveringer.

## Hva den andre kontoret vil se

I en DWG:

- Linjer, buer, sirkler, ellipser, polylinjer, tekst, flerlinjetekst, blokker med attributtene sine, heldekkende fyll, skraveringsmønstre og lag slik du ser dem.
- Ekte måltilsetninger: det andre programmet måler dem på nytt når de strekkes.
- Hvert ark, med sitt papir og sine visningsområder.
- Flerhjelpelinjer som flerhjelpelinjer. I AutoCAD 2000-versjonen blir ekte farger nærmeste standardfarge.

I en DXF R12:

- Linjer, buer, sirkler, polylinjer, tekst, blokkreferanser og måltilsetninger slik du ser dem. Måltilsetningene forblir ekte måltilsetninger.
- Layernavn med store bokstaver, og mellomrom gjort om til `_`.
- Det første arket som tegningens papirrom, med sine visningsområder. Flere ark kommer som blokker kalt `CCLAYOUT_1` og så videre; hvis de trenger hvert ark som en layout, plott PDF-er av hvert ark til dem også.
- Flerlinjetekst som separate linjer, ellipser som polylinjer, skraveringer som konturer.

Uansett: alt som er oppført som «Ikke vist ennå» da du åpnet DWG-en, er **ikke** med i kopien, med mindre historikken sier at det ble beholdt. En DWGs OLE-objekter og dens 3D-volumlegemer i modellrom skrives tilbake når du lagrer som DWG. Si fra til dem, og send også en PDF.

## Vanlige feil

- **«CadCraft åpner DWG- og DXF-tegninger.»** Filen har en annen filendelse. Sjekk at den er en `.dwg` eller `.dxf`.
- **«Denne tegningen kunne ikke leses.»** DWG-en er skadet, eller den er i en versjon leseren ikke håndterer. Be om en DXF, eller om DWG-en lagret i en eldre versjon.
- **«Denne binære DXF-en slutter midt i et objekt.»** Filen er kuttet av eller skadet. Skriv RECOVER for å åpne det som kan leses, eller be om filen på nytt.
- **Den lagrede filen heter `name (1).dwg` eller `name (1).dxf`.** Nettleseren gjør det når en fil med samme navn allerede ligger i mappen.
- **De har et eldre program som ikke kan åpne DWG-en.** Lagre som DWG med {{ui:Versjon}} {{ui:AutoCAD 2000}}, eller som {{ui:DXF R12}}: nesten alle CAD-programmer åpner den.
- **Deler av tegningen mangler.** Eksterne referanser (xref) lastes ikke før du velger filene deres ({{cmd:XREF}}, `R`), og bilder vises som rammer med filnavnene sine.
