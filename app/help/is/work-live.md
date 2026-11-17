---
title: Vinna saman að einni teikningu með Live TeamWork
summary: Hvað breytist í CadCraft meðan þú ert í Live TeamWork-lotu frá CadCraft Studio: bendlar og val annarra, hlutir sem einhver er að breyta, læsingar gestgjafans, þín eigin afturköllun og tenging úr vafra á sama neti.
keywords: live, live teamwork, studio live, saman, vinna saman, samvinna, lota, deila í beinni, tengja, bendill, haldið, breyting, læsing, livelock, liveunlock, livehold, halda lagi, halda svæði, lás, afturkalla, gestgjafi, aðstoðarmaður, sama skrá, margir, hægur, takmörk, hver breytti, nýlegar breytingar, breytingaskrá
from: 0497d2a3
---

## Hvað þú lærir

Hvað þú sérð og hvað gerist við breytingarnar þínar þegar margir vinna á einni teikningu í einu. CadCraft Studio ræsir og tengist Live TeamWork-lotunni ({{ui:Deila í beinni}}, {{ui:Tengja}}); þessi síða fjallar um teikninguna sjálfa.

## Allir teikna í einu

Teiknaðu og breyttu eins og venjulega. Þínar eigin breytingar birtast strax, jafnvel áður en hinir hafa þær, og breytingar þeirra birtast á skjánum þínum augnabliki eftir að þeir gera þær. Allar skipanir virka: teikning, breytingar, lög, blokkir, blöð, víddir, þvinganir.

Tveir geta breytt sama hlutnum. Þegar þú breytir mismunandi hlutum, eins og lit og endapunkti einnar línu, haldast báðar breytingar. Þegar þú breytir sama atriðinu vinnur seinni breytingin.

Það sem er eingöngu þitt: núverandi lag, litur og textahæð fyrir nýja hluti, víddastillingar þínar, sýnin þín, skiptur skjár og UCS. Teikningin er sameiginleg; hvernig þú horfir á hana er það ekki.

## Aðrir á teikningunni þinni

- **Bendlar:** bendill hvers og eins sést með nafni hans í hans eigin lit, og skipuninni sem hann keyrir. Þú sérð bendla fólks sem vinnur nálægt því sem er á skjánum þínum.
- **Val:** það sem einhver hefur valið er dregið út í hans lit.
- **Verið er að breyta:** hlutur sem einhver hefur valið ber merki eins og „Ana is editing" › „Ana er að breyta". Þú getur enn breytt lit hans eða fært hann, en þú getur ekki eytt, sprengt eða skrifað hann upp á nýtt fyrr en hún sleppir. Að velja hann segir þér hver hefur hann.
- **Hver breytti síðast:** veldu einn hlut sem einhver annar breytti í þessari lotu, og skipanalínan segir hver, og hvað breytingin var („Ben changed that last: CIRCLE." › „Ben breytti þessu síðast: CIRCLE."). Live-spjald Studio sýnir allar nýlegar breytingar undir {{ui:Nýlegar breytingar}}. Ekkert af þessu er vistað í teikningunni: það varir eins lengi og lotan.

## Halda lagi eða svæði meðan þú vinnur þar

Á stórri teikningu með nokkrum, segðu hvaða hluti er þinn í bili:

1. Skrifaðu `LIVEHOLD` og ýttu á {{key:Enter}}.
2. Veldu `L` og skrifaðu heiti lags (Enter heldur núverandi lagi), eða veldu `A` og smelltu á tvö horn svæðis.
3. Breytingar annarra á því lagi, eða á hlutum á svæðinu, eru teknar til baka og þeim er sagt að þú sért að vinna þar. Þú sérð svæðið þitt sem strikaðan ramma. Aðrir sjá það í þínum lit með nafni þínu, og lögin sem þú heldur eru talin efst til vinstri á teikningu þeirra.
4. `LIVEHOLD`, og síðan `R`, sleppir öllu sem þú heldur. Að fara úr lotunni sleppir því líka.

Hver sem er í lotunni getur haldið, gestgjafinn meðtalinn; læsingar gestgjafans gilda enn ofan á. Hald er aldrei vistað í skránni.

## Þegar breyting er tekin til baka

Afrit gestgjafans af teikningunni athugar sérhverja breytingu. Sumar komast ekki inn, og CadCraft tekur þær til baka á skjánum þínum og segir hvers vegna á skipanalínunni, til dæmis:

- einhver eyddi hlutnum, eða laginu eða blokkinni sem hann þarf, rétt á undan þér;
- einhver er að breyta þeim hlut, eða heldur lagi hans eða svæðinu sem hann er á;
- gestgjafinn læsti honum;
- blokkin sem þú setur var hreinsuð, eða lag sem þú eyðir hefur enn hluti á sér.

## Afturköllun afturkallar þína eigin vinnu

{{key:Mod+Z}} og {{ui:Undo}} afturkalla þína eigin síðustu skipun, öll, og skilja vinnu allra annarra eftir. Þegar einhver breytti sama atriðinu síðan er ekkert afturkallað og skipanalínan segir hver breytti því. {{key:Mod+Y}} endurgerir.

## Læsingar (gestgjafinn)

Gestgjafinn getur varið hluti eða heilt lag þannig að enginn breyti þeim, gestgjafinn meðtalinn, þar til þeir eru opnaðir:

1. Veldu hlutina, skrifaðu síðan `LIVELOCK` og ýttu á {{key:Enter}}. Eða skrifaðu `LIVELOCK` án þess að neitt sé valið og veldu `L` til að læsa lagi eftir nafni: hlutir sem bætast síðar við það lag eru líka læstir.
2. Læstir hlutir eru teiknaðir strikaðir með merkinu „Locked by the host" › „Læst af gestgjafanum" á skjá allra.
3. `LIVEUNLOCK` opnar þá á sama hátt.

Læsingar tilheyra lotunni: þær enda þegar hún endar og eru aldrei vistaðar í skránni.

## Tengstu við sömu skrána

Ef þú opnaðir sömu skrá og gestgjafinn opnaði (úr sameiginlegri möppu eða sama eintaki), tengstu úr þínum eigin CadCraft-glugga í Studio: opnaðu {{ui:Live}}-spjaldið og notaðu {{ui:Tengja hér}} með kóða gestgjafans. Aðeins breytingarnar sem gerðar eru síðan gestgjafinn opnaði skrána ferðast, svo stór teikning er tilbúin strax. Ef skráin þín er önnur, kemur teikning gestgjafans í stað hennar á skjánum þínum (skráin þín helst eins og hún er). Þetta virkar aðeins á meðan teikningin þín er óbreytt frá því þú opnaðir hana.

## Aðstoðarmenn í beinni lotu

Aðstoðarmaður sem er tengdur CadCraft-glugganum þínum (sjá hjálpina um vinnu með gervigreindaraðstoðarmönnum) tengist lotunni sem sinn eigin þátttakandi, sýndur öllum sem „Assistant (via <nafn þitt>)" › „Aðstoðarmaður (í gegnum <nafn þitt>)". Gestgjafinn hleypir honum inn eins og manneskju; aðstoðarmaður gestgjafans tengist strax. Breytingar hans hafa sína eigin afturköllun: {{key:Mod+Z}} afturkallar vinnu þína, og afturköllun aðstoðarmannsins afturkallar aðeins hans eigin. Hann fer úr lotunni þegar þú aftengir hann eða ferð, og hann getur aðeins unnið í lotunni meðan þú getur breytt.

## Tengstu úr vafra

Liðsfélagi án Studio getur skannað myndina undir kóða gestgjafans með síma, spjaldtölvu eða tölvu á sama neti. CadCraft opnast í vafranum, biður um nafnið þitt á skipanalínunni, og fyllist af teikningu gestgjafans þegar gestgjafinn hleypir þér inn. Boðshlekkur gerir að verkum að einhver getur tengst frá öðru neti: gestgjafinn þarf sæti í Team Cloud Plan fyrir forritið, en allir aðrir tengjast án endurgjalds, og hlekkurinn virkar aðeins meðan lota gestgjafans er opin.

## Margir á einni teikningu

Sérhver breyting fer til allra í lotunni, svo því fleiri sem eru, því lengri tíma tekur hver breyting að ná til hvers og eins, og hægari fartölvur og tengingar dragast aftur úr fyrst. Venjuleg stærð lotu er 20 manns; gestgjafinn getur leyft fleiri í einni lotu (sjá hjálpina um saman í beinni). Ef teikningin verður hæg með mörgum, hjálpar færri manns, færri sem breyta á sama augnabliki, eða betri tenging.

## Þegar lotunni lýkur

Aðeins gestgjafinn vistar teikninguna. Þegar gestgjafinn endar lotuna heldur allir hinir óvistuðu afriti: vistaðu það ef þú vilt halda því.

:::note
Eitthvað sem er tekið til baka er teiknað ofan á hlutunum í kring á þínum eigin skjá þar til þú opnar teikninguna aftur. Skygging og fylltir hlutir sem skarast gætu litið öðruvísi út en afrit gestgjafans; teikningin sjálf er sú sama.
:::
