---
title: Fest til punkter på objekter
summary: Bruk objektfang, Ortho og rutenettet for å velge eksakte endepunkter, midtpunkter, sentre og skjæringspunkter med musen.
keywords: osnap, objektfang, endepunkt, midtpunkt, senter, skjæringspunkt, vinkelrett, kvadrant, nærmeste, node, innsetting, ortho, rutenett, f3, f8, f7, polarsporing, polar, polarang, sporing av objektfang, otrack, sporing, f10, f11
from: 3cf17f94
---

## Hva du skal lage

Et rektangel med sine to diagonaler, en sirkel sentrert der de krysser, og en linje fra midten av én side og ut til sirkelen. Hvert punkt velges med musen, og hvert punkt er eksakt.

## Hvordan fangingen fungerer

Mens en kommando ber om et punkt, leter CadCraft etter festepunkter innenfor omtrent 10 piksler fra krysset. Når den finner ett, vises en markør og en etikett («Endepunkt», «Skjæringspunkt»), og et klikk havner **eksakt** på det punktet, ikke der krysset er.

Fang er på når {{ui:Fang}} i statuslinjen er trykket inn. {{key:F3}} slår det av og på.

Fangene du kan bruke, er:

| Fang | Havner på |
|---|---|
| Endepunkt | Endene av linjer, buer og polylinjesegmenter |
| Midtpunkt | Midten av linjer, buer og polylinjesegmenter |
| Sentrum | Sentrum av sirkler og buer, og av polylinjens buesegmenter |
| Kvadrant | 0-, 90-, 180- og 270-graderspunktene til sirkler og buer |
| Skjæringspunkt | Der to objekter krysser hverandre |
| Vinkelrett | Punktet på et objekt som står rett på det siste punktet (krever et basispunkt) |
| Tangent | Punktet på en sirkel eller bue der en linje fra det siste punktet akkurat berører den. Uten et siste punkt ennå (en linjes første punkt), sier markøren «utsatt»: berøringspunktet regnes ut når neste punkt er kjent, så en linje fra Tangent til Tangent berører begge sirklene |
| Nærmeste | Det nærmeste punktet på et hvilket som helst objekt |
| Node | Punktobjekter |
| Innsettingspunkt | Innsettingspunktet til tekst og blokkreferanser |

Alle er på som standard, unntatt Tangent og Nærmeste. Nærmeste vinner gjerne når du vil ha noe annet; slå på Tangent når du trenger det.

## Velg fangene dine

1. Klikk den lille pilen ved siden av {{ui:Fang}} i statuslinjen. Listen {{ui:Objektfang}} åpnes.
2. Kryss av eller av fangene. Endringene gjelder med en gang.
3. Klikk pilen igjen for å lukke listen.

CadCraft husker valget ditt, og innstillingene for {{ui:Rutenett}}, {{ui:Ortho}} og {{ui:Fang}}, i denne nettleseren.

## Fremgangsmåte

1. Skriv `REC` og trykk {{key:Enter}}.
2. Skriv `0,0` og trykk {{key:Enter}}.
3. Skriv `@4000,3000` og trykk {{key:Enter}}. Et rektangel vises.
4. Klikk {{ui:Utstrekning}}.
5. Skriv `L` og trykk {{key:Enter}}.
6. Flytt krysset til nedre venstre hjørne. Markøren viser «Endepunkt». Klikk.
7. Flytt til øvre høyre hjørne til «Endepunkt» vises. Klikk.
8. Trykk {{key:Enter}} for å avslutte linjen.
9. Trykk {{key:Enter}} igjen for å gjenta {{cmd:LINE}}, og tegn den andre diagonalen fra nedre høyre hjørne til øvre venstre hjørne på samme måte.
10. Skriv `C` og trykk {{key:Enter}} for å starte en sirkel.
11. Flytt krysset dit diagonalene krysser. Markøren viser «Skjæringspunkt». Klikk.
12. Skriv `800` og trykk {{key:Enter}}.

Du bør se en sirkel sentrert eksakt i krysningen.

13. Skriv `L` og trykk {{key:Enter}}.
14. Flytt til midten av venstre side av rektangelet, til «Midtpunkt» vises. Klikk.
15. Flytt krysset inn på sirkelen, på venstre side. Markøren viser «Vinkelrett» eller «Kvadrant»; begge er samme punkt her. Klikk.
16. Trykk {{key:Enter}}.

Den nye linjen går fra midten av venstre side og stopper eksakt på sirkelen.

## Hopp over et fang for ett klikk

Hold {{key:Shift}} mens du klikker. Objektfang ignoreres for det klikket, og punktet havner eksakt der krysset er (eller langs Ortho-retningen, hvis Ortho er på).

## Ortho

{{ui:Ortho}} ({{key:F8}}) holder neste punkt rett over eller rett opp og ned fra basispunktet. Det gjelder for klikk og for direkte avstandsinnlegging (et enkelt tall skrevet ved ledeteksten). Objektfang vinner over Ortho: hvis en festemarkør vises, går klikket til festet.

## Polarsporing

{{ui:Polar}} ({{key:F10}}) er Ortho i flere vinkler. Mens en kommando har et basispunkt (det siste punktet på en linje, eller en flyttings basispunkt), retter pekeren seg inn når den kommer nær en stråle fra det i et multiplum av polartrinnet. Da vises en prikket linje, og en etikett ved krysset leser `Polar: 1200 < 30°`. Klikk for å bruke det punktet, eller skriv en avstand: `1200` går nøyaktig 1200 langs strålen.

Trinnet er 90° til du endrer det: skriv {{cmd:POLARANG}}, trykk {{key:Enter}}, og skriv `30` (eller 45, 22.5, 15 …). Polar og Ortho utelukker hverandre: slår du på den ene, slås den andre av.

## Sporing av objektfang

{{ui:Spor}} ({{key:F11}}) retter pekeren inn mot festepunkter du har hvilt på, slik at du kan velge et punkt på samme nivå som ett hjørne og over et annet, uten å tegne hjelpelinjer.

1. Slå på {{ui:Fang}} og {{ui:Spor}}, og start en kommando som ber om et punkt (`L`).
2. Hvil pekeren på et festepunkt, for eksempel et hjørne, i et halvt sekund uten å klikke. Et lite kryss markerer det: det er fanget. Hvil på det igjen for å slippe det.
3. Flytt pekeren rett bort fra det, horisontalt eller vertikalt. En prikket linje følger pekeren, og etiketten leser `Track: 600 < 90°`. Klikk, eller skriv en avstand.
4. Fang et andre punkt, og flytt til der vertikalen gjennom det ene møter horisontalen gjennom det andre: pekeren fester seg til krysningen (`Track: where two lines meet`).

Med {{ui:Polar}} på også, sporer fangede punkter i hver polarvinkel. Opptil sju punkter beholdes, til kommandoen avsluttes. {{key:Shift}} slår av sporing for ett klikk, slik som fang.

## Rutenett

{{ui:Rutenett}} ({{key:F7}}) viser et rutenett av linjer bak tegningen, med tykkere linjer for hver femte linje; avstanden endres når du zoomer. Det er bare en veiledning til du slår på {{ui:Rutenettfang}} ({{key:F9}}). Da havner klikk på nærmeste rutenettpunkt, med mindre et objektfang tar punktet først.

## Funksjonstaster på datamaskinen din

{{key:F9}} er Rutenettfang, {{key:F10}} er Polar og {{key:F11}} er Spor.

:::mac
På en Mac styrer F3, F7, F8 og F9 vanligvis Mission Control og media. Hold **fn** sammen med tasten, eller slå på standard funksjonstaster, slik det er beskrevet i [Taster, mus og styreflater](common:keys). Knappene i statuslinjen fungerer alltid.
:::

:::firefox
I Firefox er F7 også tasten for markørbrowsing. Hvis Firefox spør om du vil slå på markørbrowsing, velg **Nei**. Bruk {{ui:Rutenett}}-knappen hvis spørsmålet kommer tilbake.
:::

:::touch
På en berøringsskjerm finnes det ingen sveving, så festemarkøren vises bare der fingeren din berører. Zoom tett inn for små mål, eller skriv koordinater i stedet.
:::

## Vanlige feil

- **Klikket gikk til feil punkt.** Se på markørens etikett før du klikker: Endepunkt vinner over Midtpunkt når begge er nær. Zoom inn, eller fjern krysset for fang du ikke trenger.
- **Ingen markør vises.** {{ui:Fang}} er av, eller festet du vil ha, er ikke krysset av, eller objektet ligger på en layer som er av eller fryst.
- **Fang tar feil ting i en travel tegning.** Zoom inn. Festeavstanden måles i skjermpiksler, så når du zoomer inn, blir den mindre på tegningen.
- **Du forventer at Shift gir en rett linje.** I CadCraft slår Shift av fang for ett klikk. Bruk {{ui:Ortho}} for rette linjer.
- **Du forventer at punkter havner på rutenettpunkter.** Slå på {{ui:Rutenettfang}} ({{key:F9}}), eller skriv koordinater for runde tall.
