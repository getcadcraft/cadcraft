---
title: Skipuleggðu teikningu með flokkum
summary: Flokkar raða hlutum á annan hátt, þvert yfir lög (`Lighting-Fixtures-Spot`): sýndu og feldu þá, gefðu þeim lit, línugerð, línuþykkt, fyllingu og textastíl sem hlutir geta tekið „eftir flokki“, og veldu flokkinn sem nýir hlutir fara í.
keywords: flokkur, flokkar, CLASSES, CLS, CLASS, eftir flokki, ByClass, virkur flokkur, notað við gerð, Ekkert, hönnunarlag, mælikvarði lags, hæð, Vectorworks
from: 672de9cb
---

Lög segja *hvar* hlutur á heima í teikningunni; flokkar segja *hvað* hann er. Veggur á laginu `Level 1` getur verið í flokknum `Walls-Exterior`, og loftljós á laginu `Ceiling` í flokknum `Lighting-Fixtures-Spot`. Þú getur falið öll ljós á öllum lögum í einu, eða prentað alla ytri veggi þykkari, án þess að færa neitt á milli laga.

Sérhver hlutur byrjar í flokknum **Ekkert**. Teikning án eigin flokka virkar nákvæmlega eins og áður.

## Opnaðu flokkaspjaldið

Skrifaðu `CLASSES` (eða `CLS`) og ýttu á {{key:Enter}}, eða veldu {{ui:Flokkar…}} í valmyndinni {{ui:Meira}} í hópnum {{ui:Sýn}}. Spjaldið opnast yfir teikningunni og er opið meðan þú teiknar.

- **Bættu við flokki:** skrifaðu nafnið í reitinn efst og ýttu á {{key:Enter}}. `-` býr til stig: `Lighting-Fixtures-Spot` liggur undir `Lighting-Fixtures`, sem liggur undir `Lighting`; vantandi stig eru bætt við fyrir þig.
- **Sýndu eða felldu:** augað við flokk. Að fela flokk felur alla flokka undir honum, á skjánum og á blaði.
- **Virkur flokkur:** hnappurinn með hringnum. Nýir hlutir sem þú teiknar fara í virka flokkinn.
- **Veldu flokk:** smelltu á nafn hans. Hnapparnir og stillingarnar hér fyrir neðan vinna þá með honum.

Talan aftast í hverri röð er hversu margir hlutir eru í þeim flokki (í líkaninu, á blöðum og innan blokkaskilgreininga).

## Settu hluti í flokk

Veldu hlutina, veldu flokk í spjaldinu og veldu {{ui:Setja flokk}}. Hakaðu fyrst við {{ui:Eftir flokki}} svo þeir taki lit, línugerð, línuþykkt, fyllingu og textastíl úr flokknum. Þú getur líka:

- skrifað `CLASS` með hlutum valda og slegið inn heiti flokks (nýtt heiti býr til flokkinn);
- skrifað `CLASS` án valins hlutar til að setja virka flokkinn; `?` listar flokkana með fjölda þeirra;
- notað kaflann {{ui:[Flokkur (C)]}} í eiginleikaspjaldinu: flokkinn og rofa {{ui:… eftir flokki}} fyrir lit, línugerð og línuþykkt (fyllingu fyrir skyggingar, textastíl fyrir texta);
- valið eftir flokki með `QSELECT`: veldu eiginleikann {{ui:[Flokkur (C)]}}.

{{ui:Velja hluti hans}} velur alla hluti valda flokksins á opna blaðinu (eða í líkaninu).

## Hvernig hlutur teiknast: hlutur, flokkur, lag

Litur, línugerð, línuþykkt, fylling og textastíll hlutar geta verið **eftir flokki**, á sama hátt og þeir geta verið eftir lagi. CadCraft leitar í þessari röð:

1. Eigið gildi hlutarins, nema það gildi sé eftir flokki.
2. Gildi flokksins, þegar hluturinn tekur það eftir flokki og flokkurinn hefur gildi.
3. Gildi lagsins.

Flokkur þar sem litur (eða línugerð …) er {{ui:Ekki stillt}} sendir hlutinn áfram til lags síns. Veldu flokk og stilltu {{ui:Litur}}, {{ui:Línugerð}}, {{ui:Línuþykkt}}, {{ui:Fylling (skygging)}} og {{ui:Textastíll}} fyrir neðan hnappana. Hakaðu við {{ui:Nota við gerð}} til að láta nýja hluti, sem teiknaðir eru í þeim flokki, taka þetta allt eftir flokki.

Hver breyting í spjaldinu er eitt skref í afturköllun.

## Endurnefna og eyða

{{ui:Endurnefna}} breytir heitinu á staðnum: ýttu á {{key:Enter}} til að halda því, {{key:Esc}} til að hætta. Flokkarnir undir því fylgja (`Lighting-Spot` verður `Light-Spot` þegar `Lighting` verður `Light`), og hlutir þeirra og yfirskriftir í sýniglugga fylgja líka.

{{ui:Eyða}} fjarlægir flokkinn og alla flokka undir honum. Hlutir þeirra fara í **Ekkert**. Eitt {{ui:Afturkalla}} skilar öllu. **Ekkert** er hvorki hægt að endurnefna né eyða.

## Hönnunarlög

Undir {{ui:Hönnunarlög}} getur hvert lag borið mælikvarða (`1:50`) og hæð. Hönnunarlag er venjulegt lag: líkan og blöð virka eins og áður, og mælikvarðinn og hæðin eru geymd með teikningunni fyrir þau verkfæri sem munu nota þau.

## Í DWG- og DXF-skrám

Flokkar eru geymdir í sérhverri DWG-útgáfu sem CadCraft vistar og í DXF (R12 og 2000). Flokkur hvers hlutar er eigin framlengd gögn (forritið `CADCRAFT_CLASS`), svo AutoCAD og önnur forrit geymi hann með hlutnum. Listi flokka, litir og sýnileiki eru geymd í einni ónotaðri blokk sem heitir `CADCRAFT_CLASSES`; ef annað forrit hreinsar þá blokk finnur CadCraft samt flokk hvers hlutar og flokkarnir koma aftur með sjálfgefnum stillingum.

Önnur forrit þekkja ekki flokka: þau teikna hvern hlut með eigin gildum eða gildum lagsins.

Sjá einnig [Yfirskriftir flokka í sýnigluggum](topic:viewport-overrides) og [Skipuleggðu teikningu með lögum](topic:layers).
