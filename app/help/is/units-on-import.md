---
title: Einingar við innflutning: skrá gefur upp einingar sínar, eða spurt er fyrst
summary: Þegar skrá sem þú flytur inn í teikningu gefur upp einingar sínar breytir CadCraft henni og segir frá því. Þegar hún gerir það ekki spyr CadCraft áður en nokkuð er sett og man svar þitt fyrir þá skrá.
keywords: einingar, innflutningur, innsetning, xref, festa, XATTACH, INSERT, OBJ, DWG, DXF, punktaský, safnhlutur, millimetrar, metrar, tommur, fet, mælikvarði, rangt stærð, of stórt, of lítið, 1000 sinnum, spyrja, munað, INSUNITS
from: 558f1293
---

## Það sem þú gerir

Fluttu skrá inn í teikningu og gakktu úr skugga um að hún komi inn í réttri stærð.

## Skref

1. Fluttu skrána inn eins og venjulega: `INSERT` › Skrá, `XATTACH`, `POINTCLOUDATTACH`, eða {{ui:Skrár}} í safnspjaldinu.
2. Ef skráin gefur upp einingar sínar er ekkert spurt. Skipanalínan segir hvaða einingar skráin gefur upp, og mælikvarðann sem er notaður þegar þær eru ólíkar einingum teikningarinnar.
3. Ef hún gerir það ekki spyr reitur hvaða **einingar** skráin hefur. Veldu hvað ein eining í skránni er og smelltu á {{ui:Nota þessar einingar}}. Ekkert er sett fyrr en þú hefur svarað.
4. {{ui:Hætta við}} (eða {{key:Esc}}) setur ekkert inn.

## Hvaða skrár gefa upp einingar sínar

- **DWG og DXF**: innsetningareiningar teikningarinnar (`$INSUNITS`). Skrá án þeirra er spurð.
- **Punktaský**: LAS og LAZ með hnitakerfi, E57, PTX og PLY gefa upp sínar einingar. Aðrar eru spurðar.
- **OBJ**: gefur aldrei upp einingar. Þú ert spurð/ur.
- **glTF og GLB**: metrar, samkvæmt eigin reglu sniðsins.
- **Myndir**: hafa enga stærð í sjálfum sér. `IMAGEATTACH` spyr um breidd, og býður breiddina sem þú gafst þeirri skrá áður.
- **Skannanir**: skönnun sem gefur upp þéttleika sinn (punkta á tommu) er sett inn í sinni raunverulegu stærð í einingum teikningarinnar; `SCANATTACH` spyr samt um breiddina.
- **Viðbótin Punktaský**: spyr þegar þú býrð til ský úr skrá sem gefur ekki upp neina einingu, og merkir tölur skýsins með þeirri einingu sem það ber.

## Gott að vita

- Að opna DWG eða DXF sem sína eigin teikningu spyr einskis: skipanalínan segir hvaða einingar skráin gefur upp, eða að hún gefi enga upp. Eiginleikar stilla einingar teikningar.
- Þegar þessi teikning hefur heldur engar einingar er ekki hægt að umbreyta skrá: hún er sett inn tölu fyrir tölu og skipanalínan segir það.
- Svarið er munað fyrir þá skrá á þessari tölvu, í öllum CadCraft-forritum. Næst þegar hún kemur inn er ekki spurt, og skipanalínan segir að munaðar einingar hafi verið notaðar.
- Til að vera spurð/ur aftur: skipanaspjaldið ({{key:Mod+K}}) › **Spyrja aftur um einingar innfluttra skráa**.
