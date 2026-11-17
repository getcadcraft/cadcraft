---
title: Mistari ya kivuli na maeneo ya kujaza
summary: Jaza eneo kwa rangi thabiti au muundo wa kawaida kwa kubofya ndani yake au kwa kuchagua maumbo yaliyofungwa, weka skeli na pembe ya muundo, na badilisha mistari ya kivuli baadaye.
keywords: mistari ya kivuli, hatch, bhatch, jaza, rangi thabiti, solid fill, muundo, pattern, ansi31, ansi37, brick, earth, net, mistari ya sehemu, poché, kisiwa, mpaka, skeli, pembe
from: 14399174
---

## Utakachounda

Sehemu ya ukuta iliyojazwa muundo wa ANSI31, nguzo iliyoachwa tupu ndani yake, na kujaza rangi thabiti kwenye nguzo.

## Mistari ya kivuli kwa kubofya ndani ya eneo

1. Chora mstatili (`REC`, `0,0`, `@2000,1200`) na duara ndani yake (`C`, `1000,600`, `300`). Bofya {{ui:Mipaka}}.
2. Bofya {{ui:Mistari ya kivuli}} kwenye kikundi cha {{ui:Chora}}, au andika `H` kisha bonyeza {{key:Enter}}. Historia inaonyesha muundo wa sasa, kwa mfano `Mistari ya kivuli ya sasa: ANSI31, skeli 1, pembe 0°`.
3. Andika `P` kisha bonyeza {{key:Enter}}, andika `ANSI31` kisha bonyeza {{key:Enter}}.
4. Andika `SC` kisha bonyeza {{key:Enter}}, andika `20` kisha bonyeza {{key:Enter}}. Ukubwa wa muundo unapimwa kwenye karatasi, kwa hiyo mchoro uliochapishwa kwa 1:20 unataka skeli 20.
5. Kwenye `Bainisha nukta ya ndani`, bofya ndani ya mstatili, nje ya duara. Mistari ya kivuli inaonekana kama onyesho la awali.
6. Bonyeza {{key:Enter}}. Mstatili umejazwa; duara ndani yake inabaki tupu, kwa sababu ni kisiwa.

Bofya ndani ya maeneo kadhaa kabla ya kubonyeza {{key:Enter}} ili yawe mistari moja ya kivuli. `U` huondoa eneo la mwisho.

## Kujaza rangi thabiti

1. Andika `H` kisha bonyeza {{key:Enter}}.
2. Andika `P`, bonyeza {{key:Enter}}, andika `SOLID` kisha bonyeza {{key:Enter}}.
3. Bofya ndani ya duara, kisha bonyeza {{key:Enter}}.

## Chagua maumbo yaliyofungwa

Badala ya kubofya ndani, andika `S` (chagua vitu) kwenye `Bainisha nukta ya ndani`, chagua polilaini zilizofungwa, duara au duaradufu zilizofungwa, kisha bonyeza {{key:Enter}}. Maumbo yaliyo ndani ya mengine hubaki tupu kwa zamu (lile la nje limejazwa, linalofuata ndani yake linabaki tupu, na kadhalika).

## Miundo

Andika `?` kwenye swali la muundo kupata orodha. Miundo ya kawaida ni ANSI31 hadi ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH, na SOLID. Kwenye mchoro wenye vipimo vya inchi (au futi na inchi kama umbizo la urefu), ukubwa wa inchi wa miundo hutumika, kama kwenye AutoCAD; vinginevyo ukubwa wa milimita.

{{ui:Pembe}} (`A`) huzungusha muundo wote: ANSI31 kwa 90° huelekea upande mwingine.

**Faili za muundo.** Andika `F` (faili ya muundo) kwenye `Bainisha nukta ya ndani` kisha uchague faili ya `.pat`. Miundo iliyomo itajiunga kwenye orodha; ukiwa na zaidi ya moja utaulizwa ipi itumike. Faili isiyo na muundo ambao CadCraft inaweza kusoma itasema hivyo, na muundo wowote uliouruka utahesabiwa. Ukubwa katika faili ya `.pat` hauna kipimo chake; husomwa kwa vitengo vya mchoro. Ni faili zilizoandikwa kwa mpangilio wa kawaida wa `.pat` pekee ndizo zimejaribiwa; hakuna iliyotengenezwa na programu nyingine.

## Badilisha mistari ya kivuli

Chagua (bofya mojawapo ya mistari yake). Katika {{ui:Sifa}}: {{ui:Muundo}}, {{ui:Skeli ya muundo}} na {{ui:Pembe ya muundo}}. Mistari ya kivuli kutoka michoro iliyofunguliwa huonyesha muundo wake ikiwa ni mojawapo ya ile ya kawaida; nyingine huonyeshwa kwa toni nyepesi ya rangi yake.

## Makosa ya kawaida

- **"Hakuna mpaka uliofungwa kuzunguka nukta hiyo."** Kuna pengo kwenye mstari wa nje, au sehemu yake iko nje ya skrini: CadCraft huangalia tu kilichopo kwenye skrini. Funga pengo (kuza karibu na pembe), au toa zoom.
- **"Muundo ni mnene mno kuchorwa kwa kipimo hiki."** Mistari ingekuwa karibu zaidi ya mchoro unavyoweza kuonyesha. Tumia skeli kubwa zaidi: jaribu skeli ya uchapishaji (20 kwa 1:20).
- **Muundo unaonekana mkubwa au mdogo mno.** Skeli ni vitengo vya mchoro kwa kila kitengo cha muundo; angalia hatua ya 4 hapo juu.
- **Kusogeza mstari wa nje hakusogezi mistari ya kivuli.** Mistari ya kivuli haijafungwa kwenye mpaka wake. Sogeza zote mbili, au jaza tena.

## Mistari ya kivuli inayobaki na mpaka wake

Mistari ya kivuli unayotengeneza kwa `HATCH` inakumbuka kinachoifunga. Sogeza, geuza au kuza mpaka, na mistari ya kivuli pamoja na muundo wake vitafuata. Buruta kishikio kubadilisha umbo la mpaka, na mistari ya kivuli itahesabiwa upya. Sogeza mistari ya kivuli peke yake, na mpaka wake utafuata, kama umbo lililojazwa kwenye programu ya michoro.

Kiungo kinaisha, na mstari wa amri unasema hivyo, ikiwa mpaka haufungi tena au umebadilisha umbo la mistari ya kivuli kwa mkono. Mistari ya kivuli yenyewe inabaki. Andika `AS` wakati wa kujaza ili kutengeneza mistari ya kivuli inayojitegemea. Nakili mistari ya kivuli pamoja na mpaka wake, na nakala itakuwa na kiungo chake.

`HATCHEDIT` (`HE`) hubadilisha muundo, skeli, pembe na asili ya mistari ya kivuli, na huiunganisha na mpaka au kumaliza kiungo. Kiungo kinahifadhiwa kwenye faili za DWG na DXF 2000. Faili ya DXF R12 haina kitu cha mistari ya kivuli, na viungo vilivyotengenezwa na programu nyingine havisomwi: tumia `HATCHEDIT` na Kiungo kwa hizo.

Mistari ya kivuli isiyo na mpaka tena (mpaka ulifutwa, au faili ilikuja bila hiyo) inaweza kurudisha mpaka: `HATCHGENERATEBOUNDARY` (`HGB`) huchora polilaini iliyofungwa kuzunguka kila kitanzi cha mistari ya kivuli na, ukijibu Ndiyo, huiunganisha nayo.

## Kujaza gradient

`GRADIENT` (`GD`) hujaza eneo kwa gradient badala ya muundo: chaguo zile zile za `HATCH`, baada ya kuuliza aina (mstari, silinda, sferi, nusu sferi, iliyopinda, na kila moja ikigeuzwa), rangi moja yenye tint au rangi mbili, pembe, na kama iwe ya katikati au la. Katika `HATCH`, chaguo `G` hufanya vivyo hivyo. `HATCHEDIT` `G`, au {{ui:Sifa}} chini ya Gradient, hubadilisha gradient au kugeuza mistari yoyote ya kivuli kuwa gradient.

Gradient inaonekana kwenye skrini na kwenye chapa. Hifadhi kama DWG 2004 au mpya zaidi, na programu nyingine zitapata mistari ya kivuli halisi ya gradient. DXF 2000 na DWG 2000 hazina gradient: hapo CadCraft inaiweka kwa matumizi yake yenyewe, na programu nyingine huona kujaza rangi thabiti kwa rangi ya kwanza.

## Kukata mistari ya kivuli

`TRIM` hukata mistari ya kivuli kama kitu kingine chochote. Bofya mistari ya kivuli upande wa ukingo wa kukatia unaotaka kuondolewa: kingo zinagawanya eneo lililojazwa, na kipande hicho huondolewa. Katika hali ya Haraka kila kitu ni ukingo wa kukatia; chagua kingo kwanza (chaguo `T`) pale kuna vingi. Mistari ya kivuli iliyokatwa haiunganishwi tena na mpaka wake, kwa sababu haijazi tena.
