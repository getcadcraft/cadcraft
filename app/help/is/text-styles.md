---
title: Stilltu leturgerð og stærð texta með textastílum
summary: Búðu til nefnda textastíla með leturgerð, hæð, breidd og halla, veldu einn sem núverandi fyrir nýjan texta, og breyttu stíl til að breyta öllum texta sem notar hann.
keywords: textastíll, stíll, STYLE, ST, TEXTSTYLE, -STYLE, leturgerð, texta hæð, breiddarstuðull, hallahorn, breyta leturgerð, sjálfgefinn stíll, nota stíl, DDSTYLE
from: bd5a4883
---

## Það sem þú munt gera

Búa til textastíl sem heitir `Athugasemdir` með eigin leturgerð og hæð, nota hann fyrir nýjan texta, og síðar breyta stílnum svo sérhver athugasemd sem notar hann breytist í einu.

## Skref

1. Skrifaðu {{cmd:STYLE}} (`ST`) og ýttu á {{key:Enter}}, eða smelltu á {{ui:Textastíll}} á tækjastikunni {{ui:Teikna}}. Glugginn {{ui:Textastíll}} listar stílana í teikningunni. Sérhver teikning hefur `Standard`.
2. Smelltu á {{ui:Nýr…}}, skrifaðu `Athugasemdir` sem nafn nýja stílsins og smelltu á {{ui:Í lagi}}. Stöðulínan segir „Textastíll Athugasemdir búinn til og settur sem núverandi.“
3. Í {{ui:Leturgerð}} veldu eða skrifaðu heiti leturgerðar. Stilltu {{ui:Hæð (0 = spyrja í hvert skipti)}} á tölu, til dæmis `2.5`, svo sérhver nýr texti fái þá hæð. Skildu hann eftir sem `0` til að vera spurður í hvert skipti.
4. Stilltu {{ui:Breiddarstuðull}} og {{ui:Hallahorn (°)}} ef þú vilt mjórri, breiðari eða hallandi stafi. Sýnislínan sýnir útkomuna.
5. Smelltu á {{ui:Loka}}. Teiknaðu texta með {{cmd:TEXT}} eða {{cmd:MTEXT}}: nýr texti tekur núverandi stíl.
6. Til að nota stíl sem þú hefur þegar búið til, opnaðu gluggann aftur, veldu hann í listanum og smelltu á {{ui:Setja sem núverandi}}.
7. Til að setja stíl á texta sem þegar er teiknaður, veldu textann, opnaðu gluggann, veldu stílinn og smelltu á {{ui:Setja á valinn texta}}.

## Breyta stíl síðar

Breyttu leturgerð, hæð, breidd eða halla stíls í glugganum og sérhver texti sem notar hann fylgir, í einu skrefi í afturköllun ({{key:Mod+Z}}). Stöðulínan segir hversu marga texta það fylgdi.

## Athugasemdir

- {{ui:Eyða}} hafnar `Standard`, og stíl sem texti notar enn: breyttu þeim texta í annan stíl fyrst.
- Stílarnir eru vistaðir í STYLE-töflu teikningarinnar, þannig að DXF- og DWG-skrár geyma þá.
- Í skipanalínunni gerir `-STYLE` það sama með valkostunum [Núverandi (C)], Nýr, [Leturgerð (F)], Hæð, [Breidd (W)], [Halli (O)], [Eyða (D)] og Listi.
- Leturgerð sem er ekki á tölvunni sem les teikninguna birtist í annarri leturgerð.
