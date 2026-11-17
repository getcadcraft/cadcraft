---
title: Saga: útgáfur og hvað breyttist
summary: Skoðaðu útgáfur teikningar (afrit sem Studio geymir þegar þú vistar, og útgáfur í skýinu), opnaðu eða endurheimtu eina, og berðu saman tvær með breytingunum sýndum í lit.
keywords: saga, útgáfur, útgáfusaga, endurheimta, fyrri útgáfa, afturkalla vistun, bera saman, bera saman teikningar, dwgcompare, breytingar, bætt við, fjarlægt, breytt, skyndimynd, öryggisafrit, skýjaútgáfur
from: 141d37b3
---

## Hvað þú býrð til

Skoðun á eldri útgáfu teikningar, og listi yfir það sem er öðruvísi en núna: hvað var bætt við, hvað var fjarlægt og hvað breyttist, merkt með lit á teikningunni.

## Opna Sögu

Skrifaðu `HISTORY` (eða `HIST`) og ýttu á {{key:Enter}}, eða veldu {{ui:Saga…}} í {{ui:Meira}}-valmyndinni í hópnum {{ui:Sýn}}. Spjaldið opnast við hlið teikningarinnar og er opið meðan þú vinnur, þannig að þú getur hliðrað og zoomað teikninguna með litunum á henni.

Sagan virkar í CadCraft Studio. Í vafra segir spjaldið bara það.

## Hvaðan útgáfurnar koma

- **Á þessari tölvu.** Í hvert sinn sem þú opnar teikningu úr skrá í Studio, og í hvert sinn sem þú vistar hana, geymir Studio afrit af skránni í eigin geymslu á þessari tölvu. Fyrsta afritið er {{ui:Eins og opnað var}}: skráin eins og hún var áður en þú vistaðir hana fyrst yfir. Studio geymir nýjustu 25 afrit af hverri teikningu, og þau elstu fara fyrst þegar öll afritin samanlagt fara yfir 400 MB. Vistun sem breytir engu geymir ekkert. Ekkert er hlaðið upp.
- **Í skýinu.** Þegar þú opnar teikningu úr skýjaskrám þínum í Studio sýnir spjaldið líka {{ui:Í skýinu}}: hverja útgáfu sem skýið geymir, með númeri hennar, hver vistaði hana og athugasemdinni. Spjaldið les þær aðeins. CadCraft sendir enn ekki eigin vistanir í skýið, þannig að þetta eru útgáfur vistaðar frá öðrum tækjum og vefnum. Skráðu þig aftur inn í Studio ef það segir að innskráningin sé runnin út.

Teikning sem þú hefur ekki vistað ennþá hefur engin afrit: vistaðu hana fyrst.

## Opna eða endurheimta útgáfu

- {{ui:Opna}} setur þá útgáfu í flipa út af fyrir sig. Teikningin þín er ekki snert.
- {{ui:Endurheimta}} kemur í stað þessarar teikningar með þeirri útgáfu. Það spyr fyrst. Studio geymir afrit af teikningunni eins og hún er núna í Sögu (merkt {{ui:Áður en endurheimt}}) áður en það gerir það, og ekkert er skrifað í skrána fyrr en þú vistar. Ekki er hægt að afturkalla endurheimt með {{key:Mod+Z}}; notaðu það afrit.

## Bera saman

1. Smelltu á {{ui:Bera saman}} við útgáfu. Hún er borin saman við {{ui:Teikningin eins og hún er núna}}; til að bera hana saman við aðra útgáfu skaltu fyrst velja hana í {{ui:Bera saman við}}.
2. Lestu niðurstöðuna undir listanum: hversu margir hlutir bættust við, voru fjarlægðir og breyttust, og listi yfir þá. Smelltu á atriði í listanum til að færa sýnina á það.
3. Á teikningunni:
   - **grænir** hlutir voru bættir við,
   - **rauðir** hlutir voru fjarlægðir (þeir eru aðeins í eldri útgáfunni),
   - **appelsínugulir** hlutir breyttust: nýja lögunin er heil og sú gamla strikuð.
4. {{ui:Sýna á teikningunni}} kveikir og slekkur á litunum; {{ui:Hreinsa litina}} tekur niðurstöðuna burt. Að loka spjaldinu hreinsar þá líka.

Listinn segir hvað breyttist í breyttum hlut: texti hans, að hann færðist, lögun hans, lag, litur, línugerð eða línuþykkt. Hvert blað er borið saman út af fyrir sig; litirnir sjást á blaðinu sem er opið.

:::note
Teikning hefur ekkert varanlegt númer fyrir hvern hlut, þannig að CadCraft parar hluti eftir því hvað þeir eru: sami hluturinn beggja vegna er óbreyttur; hlutur af sömu gerð og lagi sem liggur innan eigin stærðar frá gömlum hlut er sami hluturinn, breyttur; það sem eftir er er bætt við eða fjarlægt. Hlutur sem var færður langt frá upprunalegum stað sýnist fjarlægður á einum stað og bættur við á hinum. Blokkartilvísun telur innihald blokkarinnar.
:::

## Algengar mistök

- **„Engin afrit enn."** Studio geymir afrit við hverja opnun og vistun teikningar sem hefur skrá á þessari tölvu. Teikning opnuð úr vafraflipa, eða sem aldrei hefur verið vistuð, hefur engin.
- **Skýjalistinn vantar.** Hann birtist fyrir teikningu sem er opnuð úr skýinu í Studio; skrá sem opnuð er af diski er ekki skýjateikning.
- **Allt virðist breytt.** Tvær útgáfur vistaðar af mismunandi forritum skrifa sömu teikningu á mismunandi hátt (nöfn nafnlausra blokka, námundun). Berðu saman útgáfur sem CadCraft hefur vistað.
