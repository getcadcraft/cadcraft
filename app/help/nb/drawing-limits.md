---
title: Sett tegningsgrenser
summary: LIMITS setter et rektangel for tegningen: rutenettet fyller det, ZOOM All viser det, og med grensene på blir punkter utenfor det avvist. De lagres i DWG- og DXF-filer.
keywords: grenser, tegningsgrenser, LIMITS, LIMMIN, LIMMAX, LIMCHECK, rutenett, utenfor grenser, arkstørrelse, tegneområde, zoom all, avgrensning
from: 9e97b30d
---

**Tegningsgrenser** er et rektangel som sier hvor stor tegningen er tenkt å være: området du planlegger å tegne i, for eksempel et ark på 420 × 297. En ny tegning har ingen, så rutenettet og tegneområdet er ubegrenset, som før.

## Sett dem

Skriv {{cmd:LIMITS}} og svar:

- `Specify lower left corner or [ON/OFF] <0,0>`: et punkt, eller {{key:Enter}} for å beholde det gjeldende.
- `Specify upper right corner <420,297>`: et punkt, eller {{key:Enter}} for å beholde det gjeldende. Det må ligge over og til høyre for det første.

Eller skriv `ON` eller `OFF` ved det første spørsmålet for å slå kontrollen av eller på uten å endre rektangelet. Å sette hjørnene er ett steg i Angre, og det samme gjelder hver ON og OFF.

## Hva de gjør

- **Rutenettet fyller grensene** og stopper ved kanten. Det er et bilde av området, så slå på {{ui:Rutenett}} for å se det.
- **ZOOM All** ({{cmd:ZOOM}}, deretter {{ui:All}}) viser grensene og tegningen sammen; {{ui:Utstrekning}} viser fortsatt bare tegningen.
- **Med grensene PÅ** blir et punkt du skriver eller klikker utenfor dem avvist med `**Outside limits`, og ledeteksten forblir. Det gjelder kommandoene som lager objekter: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, måle-kommandoene og noen få til. Kommandoer som bare flytter, velger eller måler, er ikke begrenset, og det er heller ikke liming, dra i et håndtak, eller et objekt en LISP-rutine lager: grensene er en veiledning for tegning, ikke en vegg. Med grensene AV blir ingenting avvist.
- Objekter som allerede er utenfor, blir liggende der de er.

## I filer og LISP

De lagres i DWG og DXF som `$LIMMIN`, `$LIMMAX` og `$LIMCHECK`. En fil fra et annet program som bare har det programmets standardgrenser (0,0 til 12,9 eller 420,297, kontroll av), åpnes uten grenser, slik at rutenettet ikke presses inn i et lite rektangel; en fil med egne grenser, eller med kontrollen på, beholder dem. I LISP leser `(getvar "LIMMIN")`, `LIMMAX` og `LIMCHECK` dem, og `setvar` skriver dem, som ett steg i Angre.

Grensene hører til modellen. Et ark (et layout) har sin egen papirstørrelse.
