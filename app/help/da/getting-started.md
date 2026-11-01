---
title: Kom i gang med CadCraft
summary: Hvad tegneappen CadCraft gør, hvor den kører, og din første tegning fra en tom skærm til en gemt fil.
keywords: start, første tegning, ny, åbn, gem, gem som, begynd, vejledning, introduktion, hurtig start
from: 1a56c575
---

CadCraft er en 2D-tegneapp. Du tegner og redigerer linjer, buer, polylinjer, tekst, målsætninger og blokke, sætter ark op med tegningshoveder og viewports og plotter dem til PDF. Den åbner DWG- og DXF-tegninger og gemmer dem som DWG eller DXF.

Den kører i din webbrowser. Der er intet at installere: webstedet giver dig adressen, og hele appen indlæses på siden. Dine tegninger åbnes fra din egen computer og gemmes tilbage dertil. **Der uploades ikke noget.**

Hvis du har tegnet før, så læs [Hvis du kommer fra andet tegneprogram](topic:coming-from) efter denne side. De fleste vaner kan bruges igen, og de få, der ikke kan, står opført dér.

## Vil du hellere guides?

Skriv `TOUR` (eller klik på {{ui:Tag rundvisningen}} på startkortet eller {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Tag rundvisningen igen}}). Seks korte trin i en boks over tegningen: tegn en linje og en cirkel, flyt den, beskær den, slet noget og målsæt det. Hvert trin er færdigt, når du gør det, og du kan springe et trin eller hele rundvisningen over. Den starter af sig selv kun første gang. [Snydearket](topic:cheat-sheet) har de 40 kommandoer, du bruger mest, og [kommandokortet](topic:command-map) hver eneste kommando.

## Det her skal du bruge

- En nyere Chrome, Edge, Firefox eller Safari på en Mac-, Windows- eller Linux-computer. Se [Browsere og platforme](common:browsers).
- En mus med hjul er mest behagelig. En pegeplade virker; se [Mus, pegeplade og touch](topic:mouse-trackpad-touch).
- Et tastatur. CadCraft styres med indtastede kommandoer, som de fleste tegneprogrammer.

## Ideen i ét afsnit

Du skriver en kommando (eller klikker på dens knap), og kommandolinjen nederst stiller dig spørgsmål ét ad gangen: "Angiv første punkt", "Angiv næste punkt". Du besvarer hvert spørgsmål ved at klikke i tegningen eller skrive en værdi og trykke på {{key:Enter}}. {{key:Esc}} annullerer. Det er hele samspillet; alt andet er detaljer.

## Din første tegning

Du skal tegne et rektangel på 4000 gange 3000 af linjer, sætte en cirkel i midten og gemme filen.

1. Åbn CadCraft. Kommandolinjen nederst viser `Kommando:`, og tegneområdet viser et kort "Begynd at tegne".
2. Skriv `L` og tryk på {{key:Enter}}. Du behøver ikke klikke på kommandolinjen først: det, du skriver hvor som helst, havner dér.
3. Prompten ændrer sig til `Angiv første punkt:`. Skriv `0,0` og tryk på {{key:Enter}}.
4. Skriv `@4000,0` og tryk på {{key:Enter}}. En linje dukker op og løber mod højre. `@` betyder "fra det sidste punkt".
5. Skriv `@0,3000` og tryk på {{key:Enter}}.
6. Skriv `@-4000,0` og tryk på {{key:Enter}}.
7. Skriv `C` og tryk på {{key:Enter}}. `C` er tilvalget Luk: den sidste linje går tilbage til det første punkt, og kommandoen slutter.
8. Klik på {{ui:Udstrækning}} i gruppen Visning på værktøjslinjen. Rektanglet fylder skærmen.

Du skal nu se fire linjer, der danner et rektangel, og historikken over kommandolinjen viser, hvad du skrev.

9. Skriv `C` og tryk på {{key:Enter}} for at starte cirkelkommandoen.
10. Skriv `2000,1500` og tryk på {{key:Enter}} for centrum.
11. Skriv `500` og tryk på {{key:Enter}} for radius.

En cirkel dukker op midt i rektanglet.

12. Tryk på {{key:Mod+S}}, eller klik på {{ui:Gem}} i gruppen Fil.

Browseren downloader `Drawing1.dwg` til din sædvanlige mappe til downloads, og historikken siger, at den gemte en kopi som DWG. Den fil kan åbnes i CadCraft igen og i de fleste andre CAD-programmer. (Hvis du i denne browser tidligere valgte DXF i {{ui:Gem som}}, gemmes en ny tegning som `Drawing1.dxf` i stedet.)

:::tip
Tryk på {{key:Enter}} på en tom kommandolinje for at gentage den sidste kommando. Tryk på {{key:Space}} i stedet for {{key:Enter}}, hvis du foretrækker det: uden for tekst gør den det samme.
:::

## Åbn en eksisterende tegning

1. Tryk på {{key:Mod+O}}, eller klik på {{ui:Åbn}}.
2. Vælg en `.dwg`- eller `.dxf`-fil i filvælgeren.

Du kan også trække en DWG- eller DXF-fil fra {{pick:mac=Finder|windows=Stifinder|linux=filhåndteringen}} og slippe den på tegneområdet. Filen læses på siden; den forlader aldrig din computer.

Se [Filer: hvad der åbnes, hvad der gemmes](topic:files) for det, der beholdes, og det, der konverteres.

## At gemme: det her kan du forvente

At gemme i en browser fungerer anderledes end i et skrivebordsprogram:

- {{ui:Gem}} **downloader altid en ny kopi**. Den overskriver ikke den fil, du åbnede. Hvis en fil med samme navn allerede ligger i din mappe til downloads, tilføjer browseren som regel et tal, som `Drawing1 (1).dwg`.
- {{ui:Gem}} bruger tegningens format: DWG, hvis du åbnede en DWG, DXF, hvis du åbnede en DXF. For at vælge trykker du på {{key:Mod+Shift+S}} eller klikker på {{ui:Gem som}} og vælger derefter {{ui:DWG}} (og dens version), {{ui:DXF R12}} eller {{ui:DXF 2000}}. Se [Gem](topic:files#saving).
- Den fil, du åbnede, bliver aldrig ændret.
- At åbne en anden fil eller {{ui:Ny}} lægger den i sin egen fane over tegningen, så intet, du har åbent, lukkes. Hvis du lukker en tegnings fane eller forlader siden med ugemte ændringer, spørger CadCraft først: {{ui:Gem først en kopi}}, kassér eller {{ui:Annuller}}. Når du lukker browserfanen, vises i stedet browserens eget spørgsmål, "Forlad webstedet?".

Gemning i skyen er der ikke endnu. Hvor dine filer havner, og hvorfor de forbliver private, forklares i [Dine filer og fortrolighed](common:your-files).

## Hvor du kan gå videre

Tryk på {{key:F1}} eller klik på {{ui:Hjælp}} i linjen øverst for at åbne denne hjælp ved siden af tegningen når som helst. Den virker uden forbindelse.

- [CadCraft-skærmen](topic:workspace) navngiver hver linje og hvert panel.
- [Tegn med koordinater](topic:draw-with-coordinates) er den bedste første gennemgang.
- [Tastatur og mus](topic:keyboard) viser hver tast.
- Skriv `HELP` på kommandolinjen for en liste over alle kommandoer, eller læs [Kommandoreferencen](topic:commands).
