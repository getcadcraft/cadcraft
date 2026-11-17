---
title: Sæt tegningens grænser
summary: LIMITS sætter et rektangel for tegningen: gitteret udfylder det, ZOOM Alle viser det, og med grænserne tændt afvises punkter uden for det. De gemmes i DWG- og DXF-filer.
keywords: grænser, tegningsgrænser, LIMITS, LIMMIN, LIMMAX, LIMCHECK, gitter, uden for grænser, arkstørrelse, tegneområde, zoom alle, afgrænsning
from: 9e97b30d
---

**Tegningens grænser** er et rektangel, der siger, hvor stor tegningen er tænkt at være: området, du planlægger at tegne i, fx et ark på 420 × 297. En ny tegning har ingen, så gitteret og tegneområdet er ubegrænset, som før.

## Sæt dem

Skriv {{cmd:LIMITS}} og svar:

- `Angiv nedre venstre hjørne eller [ON/OFF] <0,0>`: et punkt, eller {{key:Enter}} for at beholde det aktuelle.
- `Angiv øvre højre hjørne <420,297>`: et punkt, eller {{key:Enter}} for at beholde det aktuelle. Det skal ligge over og til højre for det første.

Eller skriv `ON` eller `OFF` ved det første spørgsmål for at tænde eller slukke kontrollen uden at ændre rektanglet. At sætte hjørnerne er ét trin i fortryd, og det samme gælder hver ON og OFF.

## Hvad de gør

- **Gitteret udfylder grænserne** og stopper ved deres kant. Det er et billede af området, så slå {{ui:Gitter}} til for at se det.
- **ZOOM Alle** ({{cmd:ZOOM}}, derefter {{ui:Alle}}) viser grænserne og tegningen sammen; {{ui:Udstrækning}} viser stadig kun tegningen.
- **Med grænserne tændt** afvises et punkt, du skriver eller klikker uden for dem, med `**Uden for grænserne`, og prompten bliver stående. Det gælder de kommandoer, der laver objekter: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, målsætningskommandoerne og nogle få flere. Kommandoer, der kun flytter, vælger eller måler, er ikke begrænset, og det er heller ikke indsætning, træk i greb eller et objekt, en LISP-rutine laver: grænserne er en vejledning til tegning, ikke en mur. Med grænserne slukket afvises intet.
- Objekter, der allerede ligger uden for, bliver, hvor de er.

## I filer og LISP

De gemmes i DWG og DXF som `$LIMMIN`, `$LIMMAX` og `$LIMCHECK`. En fil fra et andet program, der kun har det programs standardgrænser (0,0 til 12,9 eller 420,297, kontrol fra), åbnes uden grænser, så dens gitter ikke presses ind i et lille rektangel; en fil med egne grænser, eller med kontrollen tændt, beholder dem. I LISP læser `(getvar "LIMMIN")`, `LIMMAX` og `LIMCHECK` dem, og `setvar` skriver dem, som ét trin i fortryd.

Grænserne hører til modellen. Et ark (et layout) har sin egen papirstørrelse.
