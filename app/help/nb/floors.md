---
title: Stable etasjer i én tegning
summary: Tegn første etasje over første etasje ved de samme koordinatene, og slå av hver etasje etter tur, uten Xrefs.
keywords: etasje, etasjer, FLOORS, FLR, FLOOR, FLOORLAYERS, plan, nivå, stable, designlag, modellrom, underlegg, xref
from: 7440fc87
---

Etasjer lar deg stable planer i ett modellrom. Hver etasje har sine egne objekter, og lag fungerer på tvers av alle sammen. En vegg på `P-Walls` kan ligge på hvilken som helst etasje.

## Start

Skriv `FLOORS` (`FLR`), eller velg {{ui:Etasjer…}} i menyen {{ui:Mer}} i gruppen {{ui:Visning}}, og velg deretter {{ui:Start med etasjer}}. Det du har tegnet til nå, havner i første etasje.

## Tegn på en etasje

Velg etasjen med den runde knappen i panelet. Nye objekter legges på den.

Andre etasjer som er på, vises nedtonet under den. Du kan feste til dem, slik at første etasje står på linje med første etasje, men du kan ikke endre dem før du gjør dem til den aktive etasjen. Øyet slår en etasje av. Vegger kobler bare til vegger på sin egen etasje.

For å starte en etasje fra den under: velg det du vil ha, velg etasjen i panelet og trykk {{ui:Kopier dit}}.

## Legg etasjer på ark

Velg et visningsområde på et ark og velg etasjen under {{ui:Vist etasje}} i Egenskaper. Et visningsområde uten valgt etasje viser alle etasjene som er på.

## Send filen til noen andre

Andre CAD-programmer kjenner ikke etasjer, så de viser alle etasjene sammen. Før du sender en fil, velg {{ui:Gjør etasjer om til layere}} i panelet, eller skriv `FLOORLAYERS`. Hvert objekt flyttes til et lag oppkalt etter sin etasje, for eksempel `Ground floor-P-Walls`, slik at mottakeren fortsatt kan slå av hver etasje. Angre tar det tilbake. CadCraft beholder etasjene i DWG- eller DXF-filen den lagrer.
