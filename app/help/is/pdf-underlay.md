---
title: PDF-undirlög og PDF-innflutningur
summary: Settu PDF-síðu undir teikninguna til að rekja hana og prenta, eða breyttu línum og texta síðunnar í teikniþætti.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, undirlag, rekja, flytja inn pdf, skönnun, grunnmynd, dofna, klippa, lög, smellifesta, opna pdf
from: aa301d0f
---

## Tvær leiðir til að sækja PDF-síðu

- **Festa** ({{cmd:PDFATTACH}}) geymir PDF-skjalið sem mynd undir teikningunni. Þú rekur það, smellir á línur þess, dofnar það, klippir það, og það prentast með blaðinu. Teikningin geymir aðeins heiti skráarinnar.
- **Flytja inn** ({{cmd:PDFIMPORT}}) breytir línum, bogum, fyllingum og texta síðunnar í venjulega teikniþætti á lögum sem eru nefnd eftir PDF-skjalinu. Þú getur breytt þeim að vild og PDF-skjalið er ekki þörf eftir það.

Að opna PDF með {{ui:Opna}} spyr hvora leiðina þú vilt.

## Festa síðu

1. Skrifaðu `PDFATTACH` (eða `PDFATT`) og veldu PDF-skjalið. Ef það hefur margar síður, skrifaðu númer síðunnar.
2. Smelltu á innsetningarpunktinn (neðra vinstra horn síðunnar).
3. Ýttu á {{key:Enter}} fyrir raunstærð síðunnar, eða skrifaðu mælikvarðann: teikningareiningar á hvern PDF-punkt (punktur er 1/72 tomma, þannig að 0.3528 í millimetrateikningu).
4. Ýttu á {{key:Enter}} fyrir engan snúning, eða skrifaðu horn.

Síðan er hlutur eins og blokkarvísun: færðu, snúðu, breyttu stærð, afritaðu, eyddu og settu á lag. Slökktu á lagi hennar og hún hverfur. Auktu aðdráttinn og síðan er teiknuð aftur skörp.

## Rekja hana

Með {{ui:Smellifesta}} á smellir bendillinn á línur PDF-skjalsins: endapunkta, miðpunkta og skurðpunkta (og {{ui:Næsti}} þegar sú smellifesta er á). Texti sem er teiknaður sem stafir á síðunni er ekki smelltur.

## Stilla hana

- `PDFADJUST`: **Dofna** (0 til 80 prósent), **Andstæða** (0 til 100), **Einlitt** og **Kveikja/slökkva** til að fela hana án þess að eyða henni.
- `PDFCLIP`: sýnir aðeins rétthyrning eða marghyrning af síðunni; **Eyða** fjarlægir klippinguna.
- `PDFLAYERS`: PDF-skjal getur haft eigin lög. Skipunin listar þau; skrifaðu númer til að kveikja eða slökkva á því lagi fyrir þetta undirlag. Lögin sem skjalið hefur slökkt á byrja slökkt.

## Prenta og vista

PLOT prentar síðuna sem línur, fyllingar og texta (þannig er hún skörp og leitanleg). Myndir inni í PDF-skjalinu birtast á skjánum en eru ekki prentaðar enn.

DWG eða DXF 2000 geymir undirlagið sem tengil: heiti skráarinnar, síðuna, staðsetningu hennar, mælikvarða, snúning, klippingu, dofnun og andstæðu. PDF-skjalið sjálft er ekki í teikningunni. Opnaðu teikninguna aftur, skrifaðu `PDF` og veldu skrána aftur; síðurnar birtast sem rammar þangað til þú gerir það, og fá réttu stærðina þá. Eldri DXF (R12) hefur engin undirlög: það geymir rammann og heitið. Hvernig önnur forrit lesa vistaða klippingu og mælikvarða hefur ekki verið prófað í þeim enn.

## Flytja inn síðu

1. Skrifaðu `PDFIMPORT` (eða `PDFIM`) og veldu PDF-skjalið og síðuna.
2. Smelltu þar sem neðra vinstra horn síðunnar á að vera.
3. Ýttu á {{key:Enter}} fyrir raunstærð, skrifaðu mælikvarða, eða veldu **Tveir punktar**: síðan er teiknuð í raunstærð, þá smellirðu á tvo punkta í fjarlægð sem þú þekkir og skrifar raunverulega fjarlægðina; allt er þá skalað til samræmis.

Línur verða að línum og fjöllínum, hringir og bogar eru þekktir, fylltar form verða að heilum skyggingum, og texti verður texti á lagi sem endar á `-TEXT`. Þetta er eitt afturkallsskref. Myndir í PDF-skjalinu eru ekki fluttar inn: festu síðuna í staðinn. Skönnun (síða sem er aðeins mynd) hefur engar línur til að flytja inn.

PDF-skjöl eru lesin sem ótraustar skrár: engin handrit keyra, og mjög stór síða er stytt og sagt er frá því.
