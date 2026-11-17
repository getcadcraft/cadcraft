---
title: Åbn en DWG, rediger den og gem en kopi
summary: Åbn en tegning, nogen har sendt dig, tjek hvad der kom med, lav en ændring, og send en kopi tilbage som DWG eller DXF.
keywords: dwg, dxf, åbn, import, eksport, gem, r12, rundtur, konsulent, xref, tjek tegning, saveas, gem som, dwg-gem, format
from: 49de4bf6
---

## Hvad du skal gøre

Åbn en DWG fra en konsulent, tjek hvad CadCraft kunne og ikke kunne vise, tilføj en note, plot et ark til PDF og gem en kopi, du sender tilbage, som DWG eller DXF.

## Åbn filen

1. Tryk {{key:Mod+O}}, eller klik på {{ui:Åbn}}.
2. Vælg `.dwg`-filen.

Statuslinjen viser "Læser …", mens tegningen læses. Når den er færdig, fylder tegningen skærmen, og historikken siger fx "plan.dwg er åbnet: 18,240 objekter på 64 lag" med, hvor lang tid det tog.

:::offline
Du er offline. Hvis knappen {{ui:Gem til offline brug}} viser "Klar offline", åbnes DWG-filer normalt. Hvis ikke, og der ikke er åbnet en DWG i denne fane endnu, kan åbning af en DWG mislykkes, fordi CadCraft's DWG-læser hentes sammen med den første DWG: åbn en DXF i stedet, eller gem CadCraft til offline brug næste gang du er online. Se [Arbejde offline](common:offline).
:::

## Tjek hvad der kom med

1. Kig på sektionen {{ui:Tegning}} i venstre panel: format og version, enheder, antal objekter og lag samt ark.
2. Læs boksen "Om denne fil" under den, hvis der er en.

Boksen viser:

- **Ikke vist endnu:** objekter CadCraft ikke kan tegne endnu, efter type og antal. De er udeladt, ikke gættet på.
- **Layouts (ark) er kommet med:** åbn dem med fanerne under tegningen.
- **Målsætninger, der kun kunne læses, som de er tegnet.**

3. Klik dig igennem fanerne under tegningen for at se hvert ark.
4. Tjek {{ui:Enheder}} i {{ui:Aktuelle indstillinger}} (intet valgt, fanen {{ui:Model}}). Hvis der står {{ui:Uden enheder}}, men du ved, at tegningen er i millimeter, så angiv det, så arkets og plottets skalaer læses rigtigt.

:::tip
Hvis du forventede en del af tegningen og ikke kan se den, så tjek panelet {{ui:Lag}}: laget kan være slukket eller frosset i filen. Klik på dets navn for at gøre det aktuelt; det tænder det.
:::

## Lav din ændring

1. Lav et lag til dine noter: klik på {{ui:Nyt lag}}, skriv `NOTES` og tryk {{key:Enter}}.
2. Skriv `DT` og tryk {{key:Enter}}.
3. Klik, hvor noten skal være.
4. Skriv en teksthøjde, der passer til tegningen (se [Tilføj tekst og etiketter](topic:text)), og tryk {{key:Enter}}.
5. Tryk {{key:Enter}} for at beholde rotationen på 0.
6. Skriv din note, og tryk {{key:Enter}}.
7. Tryk {{key:Enter}} igen for at afslutte.

Redigeringer af importerede målsætninger er fine: så snart du ændrer en, tegner CadCraft den igen i sin egen stil.

## Plot et ark til gennemsyn

1. Klik på arkets fane.
2. Tryk {{key:Mod+P}}.
3. Klik på {{ui:Download PDF}}.

Se [Plot til PDF](topic:plot-pdf).

## Gem en kopi

1. Tryk {{key:Mod+S}}, eller klik på {{ui:Gem}}.

Du åbnede en DWG, så browseren downloader `<navn>.dwg` i den version, DWG'en kom i. Historikken siger fx "Kopi er gemt som Plan.dwg (DWG (AutoCAD 2018))." og lister på linjerne under det alt, der blev ændret undervejs.

2. Læs disse linjer, før du sender filen. [Hvad en DWG bevarer og ændrer](topic:files#what-a-dwg-keeps-and-changes) forklarer hver enkelt.

Din oprindelige DWG ændres aldrig. Hver gemning er en ny download.

## Gem som DWG eller DXF

For selv at vælge formatet:

1. Tryk {{key:Mod+Shift+S}}, eller klik på {{ui:Gem som}}.

Dialogen {{ui:Gem en kopi som}} åbner med fire valg, hver med det filnavn den giver: {{ui:DWG}} med sin liste {{ui:Version}}, {{ui:DXF R12}}, {{ui:DXF 2000}} og {{ui:DXF 2000 (binary)}}. Tegningens nuværende format og version er allerede valgt.

2. Klik på det format, du vil have. For DWG, vælg den version det andet kontor bruger, eller en ældre: AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000.
3. Klik på {{ui:Gem}}.

Kopien downloades. Fra nu af gemmer {{key:Mod+S}} denne tegning i det format, og nye tegninger starter også med det i denne browser. {{ui:Annuller}} eller {{key:Esc}} gemmer intet, og historikken siger "Ikke gemt."

Hvilken du skal vælge:

- **DWG** bevarer mest: ark med deres viewports, rigtige målsætninger, skraveringsmønstre, lag- og bloknavne som du skrev dem, og flerlinjet tekst som flerlinjet tekst. AutoCAD 2000-versionen åbnes i de fleste programmer; 2004 og nyere bevarer også ægte farver.
- **DXF 2000** er en tekstfil, der bevarer næsten det samme som en DWG: hvert ark som et layout med sine viewports, rigtige målsætninger, skraveringsmønstre, ægte farver, linjetykkelser, linjetyper og navne som du skrev dem. Den åbnes i AutoCAD 2000 og nyere og de fleste CAD-programmer. Flere henvisningslinjer bliver til de linjer, pilespidser og tekst, de tegner. En DXF, der åbnes i version 2000 eller nyere, gemmes som DXF 2000.
- **DXF 2000 (binary)** indeholder det samme som DXF 2000 i formatets binære form: en mindre fil, der bevarer hvert tal præcist. Binære DXF-filer fra andre programmer åbnes ligesom tekstbaserede, og en tegning åbnet fra en binær DXF gemmes tilbage som binær.
- **DXF R12** åbnes i næsten alle CAD-programmer. Den bevarer det første ark med dets viewports samt CadCraft's andre ark. Den forenkler nyere ting, fx flerlinjet tekst og skraveringer.

## Hvad den anden part vil se

I en DWG:

- Linjer, buer, cirkler, ellipser, polylinjer, tekst, flerlinjet tekst, blokke med deres attributter, massive udfyldninger, skraveringsmønstre og lag, som du ser dem.
- Rigtige målsætninger: det andet program måler dem igen, når de strækkes.
- Hvert ark, med sit papir og sine viewports.
- Flere henvisningslinjer som flere henvisningslinjer. I AutoCAD 2000-versionen bliver ægte farver til den nærmeste standardfarve.

I en DXF R12:

- Linjer, buer, cirkler, polylinjer, tekst, blokreferencer og målsætninger, som du ser dem. Målsætninger forbliver rigtige målsætninger.
- Lagnavne med store bogstaver, og mellemrum erstattet med `_`.
- Det første ark som tegningens papirrum, med dets viewports. Yderligere ark kommer som blokke med navnene `CCLAYOUT_1` og så videre; hvis de har brug for hvert ark som et layout, så plot også PDF'er af hvert ark til dem.
- Flerlinjet tekst som separate linjer, ellipser som polylinjer, skraveringer som konturer.

Uanset hvad: alt, der blev angivet som "Ikke vist endnu", da du åbnede DWG'en, er **ikke** med i kopien, medmindre historikken siger, at det blev bevaret. En DWG's OLE-objekter og dens 3D-legemer i modelrummet skrives tilbage, når du gemmer som DWG. Fortæl det, og send en PDF også.

## Almindelige fejl

- **"CadCraft åbner DWG- og DXF-tegninger."** Filen har en anden endelse. Tjek, at den er en `.dwg` eller `.dxf`.
- **"Denne tegning kunne ikke læses."** DWG'en er beskadiget, eller den er i en version, læseren ikke håndterer. Bed om en DXF, eller om DWG'en gemt i en ældre version.
- **"Denne binære DXF slutter midt i et objekt."** Filen er afkortet eller beskadiget. Skriv RECOVER for at åbne det, der kan læses, eller bed om filen igen.
- **Den gemte fil hedder `navn (1).dwg` eller `navn (1).dxf`.** Browseren gør det, når en fil med samme navn allerede findes i mappen.
- **De har et ældre program, der ikke kan åbne DWG'en.** Gem som DWG med {{ui:Version}} {{ui:AutoCAD 2000}}, eller som {{ui:DXF R12}}: næsten alle CAD-programmer åbner den.
- **Dele af tegningen mangler.** Eksterne referencer (xrefs) indlæses ikke, før du vælger deres filer ({{cmd:XREF}}, `R`), og billeder vises som rammer med deres filnavne.
