---
title: Splini na polilaini: SPLINE, SPLINEDIT, PEDIT
summary: Chora mkunjo laini unaopita kwenye nukta au kutoka poligoni ya udhibiti, hariri mkao wake na nukta zake za kufaa na za udhibiti, na hariri polilaini (unganisha, funga, upana, weka mkunjo, spline, ondoa mkunjo) au ubadilishe spline kuwa polilaini.
keywords: spline, splinedit, spl, spe, pedit, pe, nukta za kufaa, nukta za udhibiti, uzito, nurbs, hariri polilaini, unganisha, weka mkunjo, ondoa mkunjo, badilisha kuwa polilaini, usahihi, tanjenti, mkunjo, uvumilivu wa kufaa
from: d31f72d8
---

## Utakachotengeneza

Mkunjo unaopita kwenye nukta tano, kisha mkunjo huo huo umehaririwa kwa njia tatu, na polilaini iliyojengwa kutoka mistari mitatu.

## Chora spline kupitia nukta

1. Andika `SPL` kisha bonyeza {{key:Enter}}.
2. Bofya au andika nukta ambazo mkunjo unapaswa kupita: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Bonyeza {{key:Enter}} baada ya ya mwisho.
3. {{ui:Tangenti ya mwanzo}}: bofya nukta ambayo mkunjo unapaswa kuelekea kwayo, au bonyeza {{key:Enter}} ili programu iamue. Fanya vivyo hivyo kwa tangenti ya mwisho.

Mkunjo unapita kila nukta. Andika [Funga (C)] badala ya {{key:Enter}} ili kuufunga (mkunjo unarudi kwenye nukta ya kwanza). {{key:U}} (Tendua) inarudisha nukta ya mwisho wakati unachora.

### Chora moja kutoka poligoni ya udhibiti

Andika `M` kwenye kidokezo cha kwanza, kisha [Vipeo vya udhibiti (C)] na shahada kutoka 1 hadi 5 (3 ndiyo ya kawaida). Sasa nukta unazochagua ni pembe za poligoni inayovuta mkunjo kuelekea kwazo; mkunjo unaanzia kwenye ya kwanza na kuishia kwenye ya mwisho. Ulioufunga unazunguka, bila pembe kwenye kiungo.

### Badilisha polilaini kuwa spline

Kwenye kidokezo cha kwanza andika [Kitu (O)], kisha uchague polilaini au mistari. Zinakuwa splini kupitia vipeo vyake; zile za asili zinaondoka.

## Hariri spline

Ichague kisha andika `SPE` (au andika `SPE` kisha ubofye). Vipini vinaonyesha nukta za kufaa (au nukta za udhibiti za spline isiyo nazo): buruta moja ili kuunda upya mkunjo. Kwenye kidokezo:

- **Data ya kufaa** (spline iliyochorwa kupitia nukta): [Ongeza (A)] inaongeza nukta ya kufaa (bofya mahali), [Futa (D)] inafuta moja (bofya karibu nayo), [Sogeza (M)] inasogeza moja (bofya karibu nayo, kisha bofya mahali pake jipya), [Tanjenti (T)] inaweka tanjenti za ncha, na [Safisha (P)] inaondoa nukta zote za kufaa, hivyo spline inahaririwa kwa nukta zake za udhibiti kuanzia hapo.
- **Hariri kipeo**: [Ongeza (A)] inaongeza nukta ya udhibiti bila kubadilisha mkunjo, [Sogeza (M)] inasogeza moja, na [Uzito (W)] inampa moja **uzito** (zaidi ya 1 inavuta mkunjo karibu nayo, chini ya 1 inauacha uende).
- **Fungua** au **Funga**, na **Geuza** (mkunjo unaenda upande mwingine).
- **Badilisha kuwa Polilaini** (`P`): spline inakuwa polilaini; usahihi ni idadi ya sehemu kila span inapata (10 ndiyo ya kawaida).
- **Tendua** inarudisha mabadiliko ya mwisho; [Toka (X)] inamaliza.

{{ui:Properties}} inaonyesha shahada ya spline, ina nukta ngapi za kufaa na za udhibiti, urefu wake, na inakuruhusu kuifungua au kuifunga.

## Hariri polilaini

Chagua polilaini kisha andika `PE`. Mstari, upinde au spline utakayochagua inatolewa kwanza kama polilaini ya kubadilishwa (spline inaomba usahihi).

- **Funga** / **Fungua** inaunganisha au inatenganisha ncha.
- [Unganisha (J)] inaongeza mistari, matao na polilaini ambazo ncha zake zinakutana na ncha ya polilaini. `Fuzz distance` ni umbali gani ncha zinaweza kuwa mbali na bado kuunganishwa (0 inamaanisha lazima zikutane).
- [Upana (W)] inapa polilaini nzima upana mmoja (0 inauondoa).
- [Weka mkunjo (F)] inabadilisha polilaini kuwa mkunjo laini unaopita kwenye vipeo vyake; **Spline** inabadilisha kuwa B-spline ya ujazo inayofuata vipeo (inaanza na kuishia kwenye vipeo vya kwanza na vya mwisho na inakaa karibu na vingine). Zote mbili zinakuwa polilaini za sehemu fupi, na pembe za asili zinahifadhiwa, hivyo [Ondoa mkunjo (D)] inazirudisha.
- **Ltype gen** inasema kama aina ya mstari yenye vitone inaendelea kwenye polilaini nzima au inaanza upya kwenye kila kipeo.
- **Geuza** inabadilisha mpangilio wa vipeo vyake. [Nyingi (M)] (kwenye kidokezo cha kwanza) inahariri polilaini kadhaa kwa chaguo zilezile.

Kuhariri vipeo vya polilaini kwenye {{ui:Properties}} au kwa vipini kunabaki kama ilivyokuwa: PEDIT haina mhariri wa vipeo.

## Katika faili

DWG na DXF 2000 zinaweka spline kama spline: shahada, nukta za udhibiti, vifundo, uzito, nukta za kufaa na tanjenti. Spline unayofungua usiyoibadilisha inaandikwa tena kama ilivyokuja. DXF R12 haina spline: inahifadhiwa kama polilaini kando ya mkunjo, na historia inasema ni ngapi.

Offset, trim, extend, fillet, break na join hazifanyi kazi kwenye splini. {{cmd:EXPLODE}} spline, au {{cmd:PEDIT}} yake, ili upate polilaini ambazo amri hizo zinakubali.

## Makosa ya kawaida

- **Mkunjo unapita kupita kiasi kati ya nukta zilizo karibu.** Mkunjo unaopita kwenye nukta unapinda pale nukta zilipo. Tumia nukta chache, au poligoni ya udhibiti.
- **"Hiyo si spline."** SPLINEDIT inakubali splini tu; {{cmd:PEDIT}} inahariri polilaini.
- **Spline iliyofungwa ya kufaa ina umbo tofauti kidogo kwenye programu nyingine.** CadCraft inaifunga kwa kiungo kimoja laini kwenye nukta ya kwanza; programu nyingine inaweza kuifunga kwa mkunjo wa mzunguko. Spline iliyofungwa ya nukta za udhibiti ni ileile kwenye zote mbili.
