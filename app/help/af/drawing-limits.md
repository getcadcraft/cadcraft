---
title: Stel die tekeningperke
summary: LIMITS stel 'n reghoek vir die tekening: die rooster vul dit, ZOOM Alles wys dit, en met die perke aan word punte buite dit geweier. Dit word in DWG- en DXF-lêers gestoor.
keywords: perke, tekeningperke, LIMITS, LIMMIN, LIMMAX, LIMCHECK, rooster, buite perke, blad grootte, tekengebied, zoem alles, grens
from: 9e97b30d
---

**Tekeningperke** is 'n reghoek wat sê hoe groot die tekening bedoel is: die gebied waarin jy van plan is om te teken, soos 'n blad van 420 × 297. 'n Nuwe tekening het geen perke nie, so die rooster en die tekengebied is onbeperk, soos voorheen.

## Stel hulle

Tik {{cmd:LIMITS}} en antwoord:

- `Spesifiseer linkeronderhoek of [ON/OFF] <0,0>`: 'n punt, of {{key:Enter}} om die huidige een te hou.
- `Spesifiseer regterbopunt <420,297>`: 'n punt, of {{key:Enter}} om die huidige een te hou. Dit moet bo en regs van die eerste wees.

Of tik `ON` of `OFF` by die eerste vraag om die kontrole aan of af te skakel sonder om die reghoek te verander. Die hoeke stel is een ontdoen-stap, en so is elke ON en OFF.

## Wat hulle doen

- **Die rooster vul die perke** en stop by hul rand. Dit is 'n prent van die gebied, so skakel {{ui:Grid}} aan om dit te sien.
- **ZOOM Alles** ({{cmd:ZOOM}}, dan {{ui:All}}) wys die perke en die tekening saam; {{ui:Extents}} wys steeds net die tekening.
- **Met die perke AAN** word 'n punt wat jy tik of klik buite hulle geweier met `**Buite perke` en die vraag bly staan. Dit geld vir die opdragte wat voorwerpe maak: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, die maatopdragte en 'n paar meer. Opdragte wat net skuif, kies of meet, word nie beperk nie, en ook nie plak, 'n grepsleep, of 'n voorwerp wat 'n LISP-roetine maak nie: die perke is 'n riglyn vir tekening, nie 'n muur nie. Met die perke AF word niks geweier nie.
- Voorwerpe wat reeds buite is, bly waar hulle is.

## In lêers en LISP

Hulle word in DWG en DXF gestoor as `$LIMMIN`, `$LIMMAX` en `$LIMCHECK`. 'n Lêer van 'n ander program wat net daardie program se standaardperke het (0,0 tot 12,9 of 420,297, kontrole af), open sonder enige, sodat sy rooster nie in 'n klein reghoek saamgedruk word nie; 'n lêer met sy eie perke, of met die kontrole aan, hou dit. In LISP lees `(getvar "LIMMIN")`, `LIMMAX` en `LIMCHECK` hulle, en `setvar` skryf hulle, as een ontdoen-stap.

Die perke behoort aan die model. 'n Blad ('n uitleg) het sy eie papiergrootte.
