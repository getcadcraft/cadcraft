---
title: Myndir í teikningu
summary: Settu inn PNG- eða JPEG-mynd, klipptu hana að rétthyrningi eða marghyrningi, sýndu myndirnar sem DWG notar, og prentaðu þær skarpar.
keywords: pastearea, parea, afrita svæði, afritað svæði, markupcraft, raunstærð, raunverulegt, yfirlag, ole, ole2frame, innfelldur hlutur, líma mynd, líma skjámynd, ctrl+v, myndklippiborð, skjámynd, mynd, imageattach, iat, imageclip, clip, png, jpeg, jpg, merki, ljósmynd, raster, imagedef, xref, prenta, pdf, upplausn
from: 4025ac97
---

## Það sem þú býrð til

Merki fyrirtækis sett í titilreit, klippt að þeim hluta sem þú vilt, og PDF-skrá þar sem það prentast í sinni eigin upplausn.

## Setja inn mynd

1. Sláðu inn {{cmd:IMAGEATTACH}} (eða `IAT`) og ýttu á {{key:Enter}}. Veldu PNG- eða JPEG-skrá.
2. `Specify the lower-left corner`: smelltu, eða sláðu inn punkt.
3. `Specify its width`: breiddin í teikningareiningum. {{key:Enter}} heldur breiddinni sem boðin er: ein eining á pixla, eða breiddin sem þú gafst þessari skrá síðast (hvatningin segir hvor).
4. `Specify its rotation angle`: {{key:Enter}} fyrir enga.

Myndin er einn hlutur: veldu hana eftir ramma hennar, og færðu, afritaðu, snúðu, skalaðu eða eyddu henni eins og hverri annarri blokk.

:::note
Myndaskráin helst með teikningunni meðan hún er opin. Vistuð DWG nefnir skrána, eins og önnur forrit gera; hún geymir ekki pixlana. Geymdu myndina við hliðina á teikningunni.
:::

## Líma skjámynd eða afritaða mynd

1. Afritaðu myndina (skjámynd með {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=skjámyndatólið þitt}}, eða Copy image í öðru forriti eða vafra).
2. Bentu þangað sem hún á að fara á teikningunni og ýttu á {{key:Mod+V}}.

Neðra vinstra horn myndarinnar lendir við bendilinn (eða í miðju sýnarinnar), 40% jafn breið og það sem þú sérð; færðu, skalaðu og klipptu hana eins og hverja aðra mynd. Heiti hennar er heiti teikningarinnar með `-picture-1.png` (síðan `-2`, …), og ferillinn segir það.
{{ui:Breyta}} › {{ui:Meira}} › {{ui:Líma mynd}} gerir það sama úr valmyndinni (vafrinn gæti spurt fyrst).

DWG geymir aðeins heiti skráar myndar, svo þegar þú vistar teikninguna vistast myndin líka sem sín eigin skrá. Geymdu þær tvær í sömu möppu: teikningin sýnir myndina þaðan. Í vafranum er það annað niðurhal, og ferillinn segir það.
Með aðeins CadCraft-hluti á klippiborðinu líma {{key:Mod+V}} þá, eins og áður.

## Líma svæði afritað í MarkupCraft

{{ui:Afrita svæði}} í MarkupCraft afritar hluta blaðs sem mynd sem veit hve stór hún er. CadCraft límir hana í þeirri stærð.

1. Í MarkupCraft, afritaðu svæðið (rétthyrning, hring eða frjálsa lögun; {{ui:Afrita sem yfirlag}} ef þú vilt sjá teikninguna þína í gegnum það).
2. Í CadCraft, ýttu á {{key:Mod+V}}, eða sláðu inn {{cmd:PASTEAREA}} (eða `PAREA`), eða veldu {{ui:Breyta}} › {{ui:Meira}} › {{ui:Líma afritað svæði}}.
3. `Specify the lower-left corner of the copied area`: smelltu, eða sláðu inn punkt. Rammi í stærð svæðisins fylgir bendlinum.

Svona stór verður hún:

- **Blaðið hafði teikningarkvarða:** í raunstærð, í einingum teikningarinnar (1:50 smáatriði af 2 m stiga er 2 m langt í metrateikningu, 78.74 í tommuteikningu). Ekkert meira er spurt.
- **Blaðið hafði engan kvarða:** CadCraft segir stærð þess á pappírnum og spyr um kvarða: sláðu inn `100` fyrir 1:100 blað, ýttu á {{key:Enter}} fyrir pappírsstærðina, eða sláðu inn `P`, smelltu á tvo punkta á límdu myndinni og sláðu inn hve langt þeir eru í raun í sundur (eins og {{cmd:SCANSCALE}} gerir). Neðra vinstra horn helst þar sem þú settir það.

Teikning án eininga tekur millimetra, eins og PDF-undirlag. Yfirlag heldur pappírnum gegnsæjum og byrjar jafn dauft og það var afritað; utan hrings eða frjálsrar lögunar er það líka gegnsætt. Límda svæðið er mynd eins og hver önnur: færðu, snúðu, skalaðu, klipptu eða eyddu því, og allt límið er eitt skref í afturköllun. Vistað sem DWG er það IMAGE með sínum dofa og gegnsæi.

{{key:Mod+V}} límir svæðið þegar myndin á klippiborðinu er af svæðinu, eða þegar svæðið var afritað eftir allt sem þú afritaðir í CadCraft (og á síðustu 6 klukkustundum). Annars límir það eins og áður. {{cmd:PASTEAREA}} límir síðasta afritaða svæðið hvenær sem er.

## Sýna myndirnar sem DWG notar

DWG geymir aðeins hvar myndirnar voru, svo CadCraft sýnir hverja sem ramma með heiti skráarinnar.

1. Sláðu inn {{cmd:IMAGE}} (eða `IM`). Skipanalínan birtir hverja myndaskrá og hvort hún birtist.
2. Veldu skrárnar (nokkrar í einu). Skrá sem heiti inniheldur þá sem teikningin nefnir telst líka, því útflutningur bætir oft við verkefnaforskeyti.

## Klippa mynd

1. Sláðu inn {{cmd:IMAGECLIP}} (eða `ICL`) og veldu myndina.
2. Veldu `R` og smelltu á tvö horn, eða `P` og smelltu á punkta marghyrnings, og ýttu síðan á {{key:Enter}}. `D` fjarlægir klippinguna.

## Prenta myndir

Myndir fara í PDF-skrána sem myndir, í eigin upplausn og undir línunum. Í glugganum {{ui:Prenta}} geta {{ui:Myndir}} takmarkað þær við 600, 300 eða 150 dpi til að minnka skrána. JPEG fer inn eins og hún er.

## Hvað er vistað hvar

| Snið | Myndir |
|---|---|
| DWG (allar útgáfur) | Sem myndir (IMAGE), með klippingu sinni |
| DXF | Sem rammar þeirra með heiti skráarinnar; vistunin segir það |

## Hlutir frá öðrum forritum (OLE)

Teikning getur geymt hluti sem annað forrit bjó til, eins og mynd úr teikniforriti eða svæði úr töflureikni (OLE-hluti). CadCraft keyrir þá ekki og breytir þeim ekki, og getur ekki sett inn nýja. Það sem það gerir:

- **Í DXF** opnast OLE-hlutur sem rammi. Ef hluturinn vistaði mynd af sjálfum sér og sú mynd er bitmap, er hún teiknuð inni í rammanum; annars ber rammann merki með tegund hlutarins, eins og „Microsoft Excel Worksheet (OLE)“. Þú getur fært, afritað og eytt rammanum eins og blokk. {{cmd:SAVEAS}} í DXF 2000 skrifar hann aftur sem OLE-hlut, með gögnunum óbreyttum.
- **Í DWG** haldast hlutirnir og eru skrifaðir aftur þegar þú vistar sem DWG, bæti fyrir bæti, en þeir eru **ekki sýndir**: DWG geymir stað hlutarins inni í eigin gögnum, og CadCraft les það ekki enn. Ferillinn segir hve margir voru geymdir. Sláðu inn {{cmd:OLELIST}} til að sjá hvað þeir eru (tegund, stærð, hvort hver vistaði mynd) og til að setja afrit af mynd þar sem þú velur: **Staðsetja** biður um númerið, neðra vinstra hornið og breiddina, og teiknar ramma með myndinni í. Það afrit er rammi sem þú getur fært eða eytt; hluturinn sjálfur helst í teikningunni og er áfram skrifaður þegar þú vistar.
- Hlutur sem kom úr DXF er vistaður í DWG sem rammi og merki eingöngu; ferillinn segir það. Vistaðu sem DXF 2000 til að halda hlutnum sjálfum.
- Myndir sem eru metaskrár (það sem mörg forrit vista) eru ekki teiknaðar: rammi og merki birtast í staðinn.

## Algeng mistök

| Þú sérð | Af hverju | Lausn |
|---|---|---|
| Rammi með skráarheiti | CadCraft hefur ekki skrána | {{cmd:IMAGE}}, veldu síðan skrána |
| „Þetta er ekki mynd“ | Valinn hluturinn er ekki mynd | Veldu ramma myndarinnar |
