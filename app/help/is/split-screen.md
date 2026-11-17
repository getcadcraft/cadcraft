---
title: Skipta skjánum
summary: Sýndu teikninguna í tveimur, þremur eða fjórum rúðum með eigin aðdrætti, settu blað við hliðina á líkaninu og opnaðu nokkrar teikningar hlið við hlið.
keywords: skipta, skipta skjá, rúður, vports, viewports, flísalögð, raða, hlið við hlið, staflað, tvær teikningar, flipar, skjalaflipar, bera saman, skil, líkan og blað, nokkrar teikningar, opnar teikningar
from: ee2f034b
---

## Það sem þú munt læra

Hvernig á að skoða eina teikningu í nokkrum rúðum í einu, hver með eigin aðdrætti, og hvernig á að opna nokkrar teikningar og sjá þær hlið við hlið.

## Skipta einni teikningu í rúður

1. Opnaðu teikningu, eða teiknaðu nokkrar línur og hringi.
2. Opnaðu {{ui:Sýn}} › {{ui:Meira}} og veldu {{ui:Skipta hlið við hlið}} (eða skrifaðu {{cmd:VPORTS}}, síðan `2`, síðan {{key:Enter}}).

Teikningarsvæðið skiptist í tvær rúður sem sýna báðar sömu sýn. Virka rúðan hefur bláan ramma og fær krosshárið.

3. Smelltu í hina rúðuna. Hún verður virk. (Fyrsti smellurinn skiptir bara um rúðu; smelltu aftur til að velja.)
4. Aðdráttur með hjólinu. Aðeins sú rúða aðdregur.
5. Dragðu línuna á milli rúðanna til að gera aðra breiðari. {{key:Home}} á fókusuðu skili setur hana aftur í miðjuna.

{{cmd:VPORTS}} tekur líka við `3` (tvær rúður öðru megin og ein stór hinum megin: `L` eða `R`), `4`, og `SI` til að fá eina rúðu aftur. Sýn virku rúðunnar fyllir þá svæðið. Á blaði bætir {{cmd:VPORTS}} í staðinn sýnarglugga við blaðið (eins og í AutoCAD); skrifaðu {{cmd:SPLIT}} þar, eða notaðu Sýn-valmyndina.

## Teikna úr einni rúðu í aðra

1. Skiptu hlið við hlið, og aðdreifðu hverja rúðu á mismunandi horn teikningarinnar.
2. Skrifaðu `L` og ýttu á {{key:Enter}}, og smelltu á fyrsta punktinn í vinstri rúðunni.
3. Smelltu einu sinni í hægri rúðunni til að gera hana virka, og smelltu síðan á annan punkt þar.

Línan liggur á milli staðanna tveggja. Skipunin heldur áfram þegar þú skiptir um rúðu, og gúmmíbandið sést í öllum rúðum.

## Líkanið við hlið blaðs

1. Skiptu hlið við hlið.
2. Smelltu á hægri rúðuna, og smelltu síðan á flipa blaðs undir teikningunni.

Hægri rúðan sýnir blaðið; sú vinstri sýnir enn líkanið. Hver rúða geymir sitt eigið rými, þannig að þú getur teiknað á líkanið og fylgst með því hvernig sýnargluggi blaðsins fylgir.

## Nokkrar teikningar í einum glugga

1. Opnaðu teikningu. Opnaðu síðan aðra (eða ýttu á {{ui:Ný}}).

Hver teikning opnast í sínum eigin flipa yfir teikningarsvæðinu. Smelltu á flipa til að skipta; skipanalínan, spjöldin og afturköllun fylgja teikningunni sem þú skiptir yfir í. {{key:Mod+C}} í einni teikningu og {{key:Mod+V}} í annarri afritar hluti á milli þeirra.

2. Smelltu á {{ui:Raða opnum teikningum hlið við hlið}} (skiptitáknið í enda flipanna), eða staflaða táknið við hliðina á því.

Hver rúða sýnir nú eina af opnu teikningunum, allt að fjórar. Smelltu á rúðu til að vinna í þeirri teikningu.

3. Smelltu á {{ui:×}} á flipa til að loka þeirri teikningu. Ef hún hefur óvistaðar breytingar spyr CadCraft fyrst.

:::tip
Ef þú opnar teikningu meðan glugginn geymir aðeins nýja, ónotaða teikningu, er sá flipi notaður í stað þess að bæta við öðrum.
:::

## Hreyfa og aðdraga saman

Til að bera saman tvær útgáfur, raðaðu þeim hlið við hlið, smelltu síðan á {{ui:Tengja sýn rúðanna}} (tengitáknið í enda flipanna), eða veldu það í {{ui:Sýn}} › {{ui:Meira}}, eða skrifaðu {{cmd:LINKVIEWS}} og `ON`. Nú færir hliðrun eða aðdráttur í einni rúðu allar rúður sem sýna líkanið (eða allar rúður sem sýna blað) á sama stað, þannig að teikningarnar tvær haldast í takt. {{cmd:LINKVIEWS}} `OFF` leyfir hverri rúðu að hreyfast sjálfstætt aftur.

## Algeng mistök

- **Smellurinn minn gerði ekkert.** Hann gerði þá rúðu virka. Smelltu aftur til að velja eða teikna.
- **Hjólið aðdró ranga rúðu.** Hjólið aðdregur rúðuna undir bendlinum og gerir hana virka.
- **Rúðurnar fóru aftur í eina.** Þegar teikning er opnuð birtist hún eins og hún var vistuð; teikning sem var vistuð án rúða opnast í einni.
- **Að yfirgefa síðuna varar við óvistuðum breytingum sem ég sé ekki.** Annar flipi geymir teikningu með breytingum. Skiptu yfir í hann og vistaðu, eða farðu án þess að vista.
