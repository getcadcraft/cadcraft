---
title: Kom i gang med CadCraft
summary: Hva tegneappen CadCraft gjør, hvor den kjører, og den første tegningen din fra en tom skjerm til en lagret fil.
keywords: start, første tegning, ny, åpne, lagre, lagre som, begynne, veiledning, innføring, hurtigstart
from: 1a56c575
---

CadCraft er en 2D-tegneapp. Du tegner og redigerer linjer, buer, polylinjer, tekst, måltilsettinger og blokker, setter opp ark med tegningshoder og visningsområder, og plotter dem til PDF. Den åpner DWG- og DXF-tegninger og lagrer dem som DWG eller DXF.

Den kjører i nettleseren din. Det er ingenting å installere: nettstedet gir deg adressen, og hele appen lastes inn i siden. Tegningene dine åpnes fra din egen datamaskin og lagres tilbake dit. **Ingenting lastes opp.**

Hvis du har tegnet før, les [Hvis du kommer fra annen tegneprogramvare](topic:coming-from) etter denne siden. De fleste vanene følger med, og de få som ikke gjør det, er listet der.

## Foretrekker du veiledning?

Skriv `TOUR` (eller klikk {{ui:Ta omvisningen}} på startkortet, eller {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Ta omvisningen igjen}}). Seks korte trinn i en boks over tegningen: tegn en linje og en sirkel, flytt den, trim den, slett noe og måltilsett det. Hvert trinn er ferdig når du gjør det, og du kan hoppe over et trinn eller hele omvisningen. Den starter av seg selv bare første gang. [Jukselappen](topic:cheat-sheet) har de 40 kommandoene du bruker mest, og [kommandokartet](topic:command-map) hver eneste kommando.

## Dette trenger du

- En oppdatert Chrome, Edge, Firefox eller Safari på en Mac-, Windows- eller Linux-datamaskin. Se [Nettlesere og plattformer](common:browsers).
- En mus med hjul er mest behagelig. En styreflate fungerer; se [Mus, styreflate og berøring](topic:mouse-trackpad-touch).
- Et tastatur. CadCraft styres med innskrevne kommandoer, som de fleste tegneprogrammer.

## Ideen i ett avsnitt

Du skriver en kommando (eller klikker knappen), og kommandolinjen nederst stiller deg spørsmål ett om gangen: «Angi første punkt», «Angi neste punkt». Du svarer på hvert spørsmål ved å klikke i tegningen eller skrive en verdi, og så trykke {{key:Enter}}. {{key:Esc}} avbryter. Det er hele samspillsmodellen; alt annet er detaljer.

## Din første tegning

Du skal tegne et rektangel på 4000 ganger 3000 av linjer, sette en sirkel i midten og lagre filen.

1. Åpne CadCraft. Kommandolinjen nederst viser `Kommando:` og tegneområdet viser et kort «Begynn å tegne».
2. Skriv `L` og trykk {{key:Enter}}. Du trenger ikke klikke kommandolinjen først: det du skriver hvor som helst, havner der.
3. Spørsmålet endres til `Angi første punkt:`. Skriv `0,0` og trykk {{key:Enter}}.
4. Skriv `@4000,0` og trykk {{key:Enter}}. En linje dukker opp og løper mot høyre. `@` betyr «fra siste punkt».
5. Skriv `@0,3000` og trykk {{key:Enter}}.
6. Skriv `@-4000,0` og trykk {{key:Enter}}.
7. Skriv `C` og trykk {{key:Enter}}. `C` er alternativet Close: den siste linjen går tilbake til første punkt, og kommandoen avsluttes.
8. Klikk {{ui:Utstrekning}} i gruppen Visning på verktøylinjen. Rektangelet fyller skjermen.

Du skal nå se fire linjer som danner et rektangel, og historikken over kommandolinjen lister det du skrev.

9. Skriv `C` og trykk {{key:Enter}} for å starte sirkelkommandoen.
10. Skriv `2000,1500` og trykk {{key:Enter}} for sentrum.
11. Skriv `500` og trykk {{key:Enter}} for radius.

En sirkel dukker opp midt i rektangelet.

12. Trykk {{key:Mod+S}}, eller klikk {{ui:Lagre}} i gruppen Fil.

Nettleseren laster ned `Drawing1.dwg` til den vanlige nedlastingsmappen din, og historikken sier at den lagret en kopi som DWG. Den filen åpnes i CadCraft igjen, og i de fleste andre CAD-programmer. (Hvis du har valgt DXF i {{ui:Lagre som}} tidligere, i denne nettleseren, lagres en ny tegning som `Drawing1.dxf` i stedet.)

:::tip
Trykk {{key:Enter}} på en tom kommandolinje for å gjenta forrige kommando. Trykk {{key:Space}} i stedet for {{key:Enter}} hvis du foretrekker det: utenfor tekst gjør den det samme.
:::

## Åpne en eksisterende tegning

1. Trykk {{key:Mod+O}}, eller klikk {{ui:Åpne}}.
2. Velg en `.dwg`- eller `.dxf`-fil i filvelgeren.

Du kan også dra en DWG- eller DXF-fil fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren}} og slippe den på tegneområdet. Filen leses i siden; den forlater aldri datamaskinen din.

Se [Filer: hva som åpnes, hva som lagres](topic:files) for hva som beholdes og hva som konverteres.

## Lagring: hva du kan vente

Lagring i en nettleser fungerer annerledes enn i et skrivebordsprogram:

- {{ui:Lagre}} **laster alltid ned en ny kopi**. Den skriver ikke over filen du åpnet. Hvis en fil med samme navn allerede ligger i nedlastingsmappen din, legger nettleseren vanligvis til et tall, for eksempel `Drawing1 (1).dwg`.
- {{ui:Lagre}} bruker tegningens format: DWG hvis du åpnet en DWG, DXF hvis du åpnet en DXF. For å velge trykker du {{key:Mod+Shift+S}} eller klikker {{ui:Lagre som}}, og velger {{ui:DWG}} (og versjonen), {{ui:DXF R12}} eller {{ui:DXF 2000}}. Se [Lagring](topic:files#saving).
- Filen du åpnet blir aldri endret.
- Å åpne en annen fil, eller {{ui:Ny}}, legger den i en egen fane over tegningen, så ingenting du har åpent lukkes. Hvis du lukker en tegnings fane eller forlater siden med ulagrede endringer, spør CadCraft først: {{ui:Lagre en kopi først}}, forkast eller {{ui:Avbryt}}. Å lukke nettleserfanen viser i stedet nettleserens eget spørsmål «Forlate nettstedet?».

Skylagring finnes ikke ennå. Hvor filene dine havner og hvorfor de forblir private, forklares i [Filene dine og personvern](common:your-files).

## Veien videre

Trykk {{key:F1}} eller klikk {{ui:Hjelp}} i linjen øverst for å åpne denne hjelpen ved siden av tegningen når som helst. Den fungerer uten forbindelse.

- [CadCraft-skjermen](topic:workspace) navngir hver linje og hvert panel.
- [Tegn med koordinater](topic:draw-with-coordinates) er den beste første gjennomgangen.
- [Tastatur og mus](topic:keyboard) lister hver tast.
- Skriv `HELP` på kommandolinjen for en liste over alle kommandoer, eller les [Kommandoreferansen](topic:commands).
