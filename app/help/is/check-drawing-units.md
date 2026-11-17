---
title: Athugaðu í hvaða einingum teikning er
summary: Sjáðu hvort opnuð teikning er í millimetrum, tommum eða öðru, athugaðu með mælingu og veistu af hverju annað forrit getur gefið upp aðrar einingar fyrir sama DXF.
keywords: einingar, hvaða einingar, hvaða einingar, athuga einingar, millimetrar, mm, tommur, metrakerfi, enskar einingar, DXF einingar, STEP í DXF, rangar einingar, tommur eða mm, INSUNITS, MEASUREMENT, teikningareiningar, PartCraft DXF
from: c0ee75bb
---

## Það sem þú gerir

Finndu hvað ein eining í opnaðri teikningu merkir og gakktu úr skugga um að tölurnar sem þú lest séu sú stærð sem þú býst við.

## Skref

1. Opnaðu teikninguna, ýttu síðan á {{key:Esc}} svo ekkert sé valið, á flipanum {{ui:Líkan}}.
2. Í hægra spjaldinu, undir {{ui:Núverandi stillingar}}, lestu {{ui:Einingar}}. Þar kemur fram hvað ein teikningareining merkir: {{ui:Millimetrar}}, {{ui:Tommur}}, {{ui:Fet}} og svo framvegis. DXF skrá sem vistuð er úr PartCraft segir {{ui:Millimetrar}}.
3. Athugaðu með því að mæla eitthvað sem þú veist stærðina á. Skrifaðu {{cmd:DIST}} og veldu tvo enda brúnar eða gats. Ef hlutur sem þú þekkir, 25 mm, sýnir `25`, er teikningin í millimetrum; ef hann sýnir um `0.98`, er hún í tommum.

{{ui:Án eininga}} þýðir að skráin segir ekki til um það. CadCraft notar þá einingu blaðsins (millimetra á ISO-pappír, tommur á bandarískum pappír), og tölurnar eru jafn réttar og forritið sem skrifaði þær.

## Ef einingarnar eru rangar

Breyting á {{ui:Einingar}} **breytir engu í stærð**: tölurnar haldast eins og þær eru og aðeins merking þeirra breytist. Því skaltu aðeins stilla hana þannig að hún lýsi því hvað teikningin er í raun. Ef tölurnar eru í millimetrum en {{ui:Einingar}} segir {{ui:Tommur}}, veldu {{ui:Millimetrar}}. Ef þú þarft rúmfræðina sjálfa í öðrum einingum, skalaðu hana með {{cmd:SCALE}} (25.4 úr tommum í millimetra, 1/25.4 í hina áttina) og stilltu síðan {{ui:Einingar}}.

Hvernig lengdir eru skrifaðar (aukastafir, fet og tommur, brot) er sérstök stilling, {{ui:Lengdarsnið}}: sjá [Einingar, pappírsstærðir og mælikvarðar](topic:units-papers-scales).

## Af hverju annað forrit getur sagt tommur

DXF skrá tilgreinir einingar sínar í hausnum. Elsta gerð DXF, R12, hafði enga breytu fyrir einingar, svo forrit sem les R12 stranglega hunsar þá sem skrifuð er þar og fellur aftur á sjálfgefna einingu sína, sem er oft tommur. Rúmfræðin í skránni er hin sama hvort sem er: aðeins merkingin er önnur. PartCraft skrifar DXF skrár sínar sem R12 og gefur upp millimetra á tvo vegu (`$INSUNITS` 4 og `$MEASUREMENT` 1) svo fleiri forrit lesi þær rétt. Ef forrit segir enn tommur, stilltu einingar þess á millimetra þegar þú opnar skrána.

Ef skrá er flutt inn í teikningu (í stað þess að vera opnuð) eru einingar hennar umreiknaðar: sjá [Einingar við innflutning](topic:units-on-import).
