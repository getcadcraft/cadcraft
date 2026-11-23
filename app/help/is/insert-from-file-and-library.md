---
title: Setja inn úr skrá eða safni
summary: Færðu blokk, eða heila teikningu, inn úr annarri DWG- eða DXF-skrá, og settu hluti úr Safninu, skrá eða öðru safni, með heimildum sínum og uppfærslum.
keywords: setja inn, skrá, safn, librarycraft, hlutur, búnaður, blokk úr annarri teikningu, wblock, hönnunarmiðstöð, heimildir, eignarhald, leyfi, uppfærsla, straumur, item.json
from: f6e4e452
---

## Setja inn blokk úr annarri teikningu

1. Skrifaðu `I` og ýttu á {{key:Enter}}, eða smelltu á {{ui:Setja inn}} í hópnum Blokkir.
2. Skipanalínan neðst í glugganum spyr `Enter block name or [File/Library]`. Skrifaðu `F` þar og ýttu á {{key:Enter}}.
3. Veldu DWG- eða DXF-skrána á þessari tölvu. Hún er lesin hér; hún er ekki opnuð og ekkert er sent upp.
4. Í glugganum {{ui:Setja inn úr}} velurðu blokk af listanum (skrifaðu í {{ui:Sía blokkir}} til að finna hana), eða heldur {{ui:Öll teikningin}}. Smelltu á {{ui:Setja inn}}.
5. Smelltu þar sem hún á að fara, og fylltu út allar eigindir sem hún biður um.

Þú getur líka byrjað í spjaldinu {{ui:Blokkir}}: skrifaðu `F` í reitinn {{ui:Sía blokkir}} og ýttu á {{key:Enter}}, eða skrifaðu eitthvað sem engin blokk passar við og smelltu á {{ui:Úr skrá…}}. `L` og {{ui:Safn…}} opna safnið á sama hátt. Fyrir útgáfu 0.10.1 svaraði stafur sem skrifaður var í {{ui:Sía blokkir}} aðeins með blokkum þessarar teikningar og sagði „No block matches the filter.“

Til að hafa teikningu með þínum eigin blokkum við höndina smelltu á {{ui:Bæta við teikningu}} undir {{ui:Söfn}} í spjaldinu {{ui:Blokkir}} og veldu DWG- eða DXF-skrána. Blokkir hennar eru taldar upp með myndum; smelltu á eina til að setja hana inn.

Öll teikningin kemur inn sem ein blokk sem heitir eftir skránni. Blokkir inni í blokkinni sem þú valdir koma líka. Lögin sem þær nota bætast við þessa teikningu.

Ef hin teikningin er í öðrum einingum (tommum og millimetrum, til dæmis) skalar CadCraft tilvísunina til samræmis og segir það í sögunni.

### Þegar nafn er þegar í notkun

Ef þessi teikning hefur nú þegar blokk með sama nafni spyr CadCraft:

- {{ui:Halda núverandi}} notar blokk þessarar teikningar með því nafni.
- {{ui:Endurnefna}} setur nýju blokkina inn sem `Name (2)`.

Öll innsetningin er eitt skref: {{key:Mod+Z}} tekur tilvísunina og afrituðu skilgreiningarnar burt aftur.

## Opnaðu safnið

Smelltu á {{ui:Safn…}} í spjaldinu {{ui:Blokkir}}, eða {{ui:Safn}} í hópnum Blokkir, eða skrifaðu `LIB`. Við spurninguna `INSERT` opnar `L` það líka.

Safnið hefur fjórar uppsprettur, sem flipa:

- {{ui:Safn}}: CadCraft-safnið. Leitaðu eftir heiti, framleiðanda eða gerð, og síaðu eftir flokki.
- {{ui:Skrár…}}: hlutaskrá (`item.json`) úr hvaða safni sem er, eða teikning, töflureikni eða þrívíðarlíkan til að búa til hluti úr: DWG eða DXF (hver blokk verður hlutur), CSV með dálkunum heiti og stærð, eða glTF- eða OBJ-líkan. Ekkert er sent upp.
- {{ui:Staðlað}}: stálprófílar (sem snið, útlit eða þrívíðir bitar) og staðlaðir hlutir eins og boltar, rær og legur, búnir til hér úr birtum töflum. Sjá [Setja stálprófíla og staðlaða hluti inn](topic:steel-and-standard-parts).
- {{ui:Aðrar straumar}}: önnur söfn sem svara eins og Safn gerir. Bættu við vistfangi þeirra einu sinni; þessi vafri man það.

Hvert spjald sýnir forskoðun, heitið, framleiðanda og gerð, leyfið og útgáfuna. Hlutur sem hefur verið dreginn til baka er merktur {{ui:Afturkölluð}} ásamt ástæðunni; CadCraft spyr áður en þú setur hann inn.

## Settu inn hlut

1. Smelltu á {{ui:Setja inn}} á spjaldi.
2. Smelltu þar sem hluturinn á að fara. Skrifaðu `R` fyrst til að snúa honum, eða `S` til að skala hann.
3. Við `Enter Item number (CC-ITEM)` ýtirðu á {{key:Enter}} fyrir næsta laust númer, eða slærð inn þitt eigið.

Hluturinn verður blokk sem heitir `LIB_<name>_v<version>`, teiknuð í einingum þessarar teikningar. Ef teikningin hefur engar einingar fer hluturinn inn í millimetrum og sagan segir það; stilltu {{ui:Einingar}} í hægra spjaldinu fyrst.

Gögn hans fylgja með sem ósýnilegar eigindir: auðkenni hlutarins og útgáfa hans, leyfi og eignarhald, framleiðandi, gerð, flokkur og stærðir. Sjá [Eigindir blokka](topic:attributes).

## Hlutir á þínu tungumáli

Hlutur getur borið heiti sitt og lýsingu á öðrum tungumálum. Þegar hann á þau á tungumálinu sem CadCraft er stillt á (Stillingar › Almennt › Tungumál) nota spjaldið og heiti hlutarins í blokkinni þau. Blokkin sjálf heldur heiti sem er búið til úr eigin heiti hlutarins, svo teikning hefur eina blokk á hvern hlut, hvaða tungumál sem setti hann inn.

## Athugaðu uppfærslur

1. Opnaðu safnið.
2. Smelltu á {{ui:Athuga uppfærslur}}.

Sérhver safnhlutur í teikningunni er talinn upp með hlutanúmerum sínum og því hvort hann er uppfærður, hvort hann hefur nýrri útgáfu (og hvað breyttist), eða hvort hann var dreginn til baka. Smelltu á {{ui:Uppfæra}} í línu, eða {{ui:Uppfæra allt}}. Sérhver tilvísun færist yfir á blokk nýju útgáfunnar og heldur hlutanúmeri sínu, magni, stað, horni og lagi. {{key:Mod+Z}} afturkallar uppfærslu.

## Skráðu það sem þú notaðir

Smelltu á {{ui:Heimildir safnsins}}. Hver hlutur er talinn upp með heimildalínu sinni og leyfi.

- {{ui:Afrita heimildaskráningu}} afritar línu eins hlutar; {{ui:Afrita allt}} afritar sérhverja línu.
- {{ui:Sækja CSV}} vistar listann með hlutanúmerum, framleiðendum, gerðum, leyfum og heimildum. Hann opnast í hvaða töflureikni sem er.

Leyfi eins og CC BY biðja þig um að geta höfundarins þar sem þú notar verkið. Settu línurnar á teikninguna, í verklýsinguna eða í verkskýrslurnar.

## Tákn og eignir

Safnið hefur þrjár gerðir hluta: Tákn (teiknitákn, 2D), Gerðir (úr hverju frumefni er gert) og Eignir (efnislegir hlutir). Á flipanum {{ui:Safn}} sýnir listinn {{ui:Tegund hlutar}} Tákn og eignir saman, aðeins Tákn, eða aðeins Eignir. Gerðir eru það sem BimCraft-verkefni eru byggð úr, svo CadCraft telur þær ekki upp.

## Skráðu þig inn í safnið

Smelltu á {{ui:Skráðu þig inn í safnið}}. Lítill gluggi opnast á vefsíðunni; þegar þú ert skráður inn þar getur CadCraft sýnt hluti liðs þíns og skráð það sem þú setur inn, svo þú heyrir þegar hlutur sem þú notaðir breytist. Innskráningin gildir fyrir þennan vafraflipa. Afturkallaðu hana hvenær sem er af öryggissíðu aðgangsins þíns.

## Geymdu þína eigin hluti í Hlutunum mínum

{{ui:Hlutirnir mínir}} er einkalisti í Safninu sem aðeins þú sérð. Hann er ekki í opinbera safninu, ekki í leit og ekki sýndur liðinu þínu, og hann fylgir aðganginum þínum í hverja tölvu þar sem þú skráir þig inn í safnið.

1. Í spjaldi Safnsins smelltu á {{ui:Skrár…}} og lestu skrá.
2. Á hlutnum sem þú vilt aftur smelltu á {{ui:Geyma í hlutunum mínum}}.
3. Síðar smelltu á {{ui:Hlutirnir mínir}} og smelltu á {{ui:Setja inn}}. Hann er settur inn eins og hver annar safnhlutur, og {{ui:Athuga uppfærslur}} nær yfir hann.
4. {{ui:Fjarlægja úr hlutunum mínum}} tekur hann af listanum. Afrit sem þegar eru sett inn í teikningar haldast.

Þú þarft að vera skráð(ur) inn í safnið. Að lesa skrá sendir ekkert upp; að geyma hlut sendir aðeins þann hlut á aðganginn þinn.

:::note
Hlutirnir mínir eru í prófun og gætu ekki verið opnir fyrir aðganginn þinn enn. Ef stendur „My objects is not open for this account yet“ geturðu samt sett inn hluti úr þínum eigin skrám með {{ui:Skrár…}}.
:::

## Algeng mistök

- **„Making items from IFC types is in BimCraft.“** IFC- og fjölskylduskrár eru lesnar í BimCraft-forritinu. Búðu til hlutinn þar eða í Safninu, og notaðu síðan `item.json` hans hér.
- **„The library could not be reached.“** Þú ert án nettengingar, eða safnið liggur niðri. Hlutir sem þegar eru í teikningunni verða ekki fyrir áhrifum.
- **Hlutur er of stór eða of lítill.** Einingar teikningarinnar eru rangar eða ekki stilltar. Afturkallaðu, stilltu {{ui:Einingar}} og settu hlutinn inn aftur.
