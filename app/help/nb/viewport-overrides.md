---
title: Klasseoverstyringer for visningsområder
summary: På et ark: skjul en klasse, eller gi den en annen farge, linjevekt eller fyll i ett visningsområde bare. Modellen og de andre visningsområdene forblir som de er.
keywords: visningsområde, klasseoverstyring, visningsoverstyring, skjul klasse i visningsområde, ark, layout, VPLAYER, plott, Vectorworks
from: c1a2b51f
---

Et ark viser ofte den samme modellen mer enn én gang: en plan med møbler og en plan uten, eller en belysningsplan der bare lysene er i farge. En klasseoverstyring for visningsområdet endrer hvordan én [klasse](topic:classes) vises, **bare i det visningsområdet**.

1. Åpne arket og velg ett visningsområde.
2. Åpne klassepanelet (`CLASSES`) og velg klassen.
3. Under {{ui:Dette visningsområdet}} kryss av for {{ui:Skjul i dette visningsområdet}}, eller sett {{ui:Farge her}}, {{ui:Linjevekt her}} eller {{ui:Fyll her}}.

Listen nedenfor viser hver klasse dette visningsområdet endrer. {{ui:Fjern dette visningsområdets overstyringer}} fjerner dem alle. Hver endring er ett angrestegg.

## Hva en overstyring endrer

- **Skjul** skjuler klassen og alle klasser under den i dette visningsområdet.
- **Farge, linjevekt og fyll** endrer objektene i klassen som ikke har sin egen verdi satt på selve objektet, altså objekter som henter den fra klassen eller fra layeret. Et objekt med egen farge beholder den, slik som med en layer-overstyring i visningsområdet.

Overstyringer vises på skjermen og i plott og PDF-er, også et arkssett som publiseres til PDF. De virker sammen med visningsområdets frosne layer og layer-overstyringer.

Overstyringer lagres med tegningen i DWG og DXF (med klasselisten, i blokken `CADCRAFT_CLASSES`), og de kommer tilbake på samme visningsområde når filen åpnes i CadCraft.
