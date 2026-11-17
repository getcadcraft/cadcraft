---
title: Setja inn úr skrá eða safni
summary: Sæktu blokk, eða heila teikningu, úr annarri DWG- eða DXF-skrá, og settu hluti inn úr Safninu, skrá eða öðru safni, með heimildaskráningu og uppfærslum.
keywords: setja inn, skrá, safn, librarycraft, hlutur, búnaður, blokk úr annarri teikningu, wblock, hönnunarmiðstöð, heimildir, leyfi, uppfærsla, straumur, item.json
from: 316188d2
---

## Setja inn blokk úr annarri teikningu

1. Skrifaðu `I` og ýttu á {{key:Enter}}, eða smelltu á {{ui:Setja inn}} í hópnum {{ui:Blokkir}}.
2. Við `Sláðu inn heiti blokkar eða [Skrá (F)/Safn (L)]` skrifaðu `F` og ýttu á {{key:Enter}}.
3. Veldu DWG- eða DXF-skrána á þessari tölvu. Hún er lesin hér; hún er ekki opnuð og ekkert er hlaðið upp.
4. Í glugganum {{ui:Setja inn úr}} velurðu blokk af listanum (skrifaðu í {{ui:Sía blokkir}} til að finna hana), eða heldur {{ui:Öll teikningin}}. Smelltu á {{ui:Setja inn}}.
5. Smelltu þar sem hún á að fara, og fylltu inn eigindin sem hún biður um.

Heil teikning kemur inn sem ein blokk, nefnd eftir skránni. Blokkir inni í blokkinni sem þú valdir koma líka með. Lögin sem þær nota bætast við þessa teikningu.

Ef hin teikningin er í öðrum einingum (tommur og millimetrar, til dæmis) skalar CadCraft tilvísunina til samræmis og segir það í sögunni.

### Þegar nafn er þegar í notkun

Ef þessi teikning hefur þegar blokk með sama nafni spyr CadCraft:

- {{ui:Halda núverandi}} notar blokk þessarar teikningar með því nafni.
- {{ui:Endurnefna}} setur nýju blokkina inn sem `Nafn (2)`.

Öll innsetningin er eitt skref: {{key:Mod+Z}} tekur tilvísunina og afrituðu skilgreiningarnar burt aftur.

## Opna safnið

Smelltu á {{ui:Safn…}} í {{ui:Blokkir}}-spjaldinu, eða {{ui:Safn}} í hópnum {{ui:Blokkir}}, eða skrifaðu `LIB`. Við `INSERT`-spurninguna opnar `L` það líka.

Safnið hefur fjórar uppsprettur, sem flipar:

- {{ui:Safn}}: CadCraft-safnið. Leitaðu eftir heiti, framleiðanda eða gerð, og síaðu eftir flokki.
- {{ui:Skrár…}}: hlutaskrá (`item.json`) úr hvaða safni sem er, eða teikning, töflureikni eða þrívíddarlíkan til að búa til hluti úr: DWG eða DXF (hver blokk verður að hlut), CSV-skrá með dálkum fyrir heiti og stærð, eða glTF- eða OBJ-líkan. Ekkert er hlaðið upp.
- {{ui:Staðlaður}}: stálsnið (sem snið, útlit eða þrívíddarbita) og staðlaðir hlutir eins og boltar, rær og legur, búnir til hér úr birtum töflum. Sjá [Setja inn stálsnið og staðlaða hluti](topic:steel-and-standard-parts).
- {{ui:Aðrar straumar}}: önnur söfn sem svara á sama hátt og Safn. Settu inn vistfangið einu sinni; þessi vafri man það.

Hvert spjald sýnir forskoðun, heitið, framleiðanda og gerð, leyfið og útgáfuna. Hlutur sem hefur verið dreginn til baka er merktur {{ui:Dreginn til baka}} með ástæðunni; CadCraft spyr áður en þú setur einn slíkan inn.

## Setja inn hlut

1. Smelltu á {{ui:Setja inn}} á spjaldi.
2. Smelltu þar sem hluturinn á að fara. Skrifaðu fyrst `R` til að snúa honum, eða `S` til að skala hann.
3. Við `Sláðu inn hlutnúmer (CC-ITEM)` ýttu á {{key:Enter}} fyrir næsta laust númer, eða skrifaðu þitt eigið.

Hluturinn verður blokk sem heitir `LIB_<nafn>_v<útgáfa>`, teiknuð í einingum þessarar teikningar. Ef teikningin hefur engar einingar er hluturinn settur inn í millímetrum og sagan segir það; stilltu {{ui:Einingar}} í hægra spjaldinu fyrst.

Gögn hans fylgja með sem ósýnileg eigindi: auðkenni og útgáfa hlutarins, leyfi og heimildaskráning, framleiðandi, gerð, flokkur og stærðir. Sjá [Eigindi blokka](topic:attributes).

## Hlutir á þínu tungumáli

Hlutur getur borið heiti sitt og lýsingu á öðrum tungumálum. Þegar hann hefur þau á því tungumáli sem CadCraft er stillt á (Stillingar › Almennt › Tungumál), nota spjaldið og heiti hlutar blokkarinnar þau. Blokkin sjálf heldur heiti sem er búið til úr eigin heiti hlutarins, þannig að teikning hefur eina blokk fyrir hvern hlut, sama hvaða tungumál setti hann inn.

## Athuga uppfærslur

1. Opnaðu safnið.
2. Smelltu á {{ui:Athuga uppfærslur}}.

Sérhver safnhlutur í teikningunni er á listanum með hlutnúmerum sínum, og hvort hann er uppfærður, hefur nýrri útgáfu (og hvað breyttist), eða var dreginn til baka. Smelltu á {{ui:Uppfæra}} í línu, eða á {{ui:Uppfæra allt}}. Sérhver tilvísun færist yfir á blokk nýju útgáfunnar og heldur hlutnúmeri, magni, staðsetningu, horni og lagi sínu. {{key:Mod+Z}} afturkallar uppfærslu.

## Heimildaskráning fyrir það sem þú notaðir

Smelltu á {{ui:Heimildir safnsins}}. Hver hlutur er á listanum með heimildalínu sinni og leyfi.

- {{ui:Afrita heimildaskráningu}} afritar línu eins hlutar; {{ui:Afrita allt}} afritar allar línurnar.
- {{ui:Sækja CSV}} vistar listann með hlutnúmerum, framleiðendum, gerðum, leyfum og heimildaskráningum. Hann opnast í hvaða töflureikni sem er.

Leyfi eins og CC BY biðja þig um að geta höfundarins þar sem þú notar verkið. Settu línurnar á teikninguna, í forskriftina eða í verkefnaskýringarnar.

## Tákn og eignir

Safnið hefur þrjár gerðir hluta: Tákn (teikniviðmið, 2D), Gerðir (það sem frumefni er gert úr) og Eignir (líkamlegir hlutir). Í flipanum {{ui:Safn}} sýnir listinn {{ui:Tegund hlutar}} Tákn og eignir saman, aðeins Tákn, eða aðeins Eignir. Gerðir eru það sem BimCraft-verkefni er byggt úr, þannig að CadCraft sýnir þær ekki.

## Skráðu þig inn í safnið

Smelltu á {{ui:Skráðu þig inn í safnið}}. Lítill gluggi opnast á vefsíðunni; þegar þú ert innskráður þar getur CadCraft sýnt hluti teymisins þíns og skráð það sem þú setur inn, þannig að þú heyrir þegar hlutur sem þú notaðir breytist. Innskráningin gildir fyrir þennan vafraflipa. Þú getur afturkallað hana hvenær sem er af öryggissíðu aðgangsins þíns.

## Algengar mistök

- **„Að búa til hluti úr IFC-gerðum er í BimCraft."** IFC- og fjölskylduskrár eru lesnar í BimCraft-forritinu. Búðu hlutinn þar til eða í Safninu, og notaðu síðan `item.json` hans hér.
- **„Ekki náðist í safnið."** Þú ert án nettengingar, eða safnið liggur niðri. Hlutir sem þegar eru í teikningunni hafa ekki áhrif.
- **Hlutur er of stór eða of lítill.** Einingar teikningarinnar eru rangar eða ekki stilltar. Afturkallaðu, stilltu {{ui:Einingar}} og settu hann inn aftur.
