---
title: Weka sehemu za chuma na sehemu za kawaida
summary: Chora sehemu za chuma, miinuko na wanachama wa 3D kutoka jedwali zilizochapishwa, weka boliti, nati, washa, pini, fani, funguo na gia kutoka viwango vyake, na zioreshe kwenye orodha ya sehemu.
keywords: chuma, sehemu, wasifu, umbo, umbo W, flensi pana, I-beam, chaneli, pembe, hss, tyubu, bomba, ipe, hea, heb, upn, boriti, nguzo, mwanachama, miinuko, aisc, en 10365, boliti, skrubu, nati, washa, pini, dowel, fani, funguo, shimo la funguo, gia, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, sehemu za kawaida, orodha ya sehemu, bili ya vifaa, bom, steelmember, partslist
from: 547c1048
---

Kichupo cha {{ui:Standard}} cha maktaba kina aina mbili za vitu, vilivyotengenezwa hapa hapa kutoka jedwali zilizochapishwa (hakuna kinachopakuliwa):

- **Sehemu za chuma**: ukubwa 1,335. W, S, C, L, HSS na Bomba kutoka AISC Shapes Database v16.0; IPE, HEA, HEB na UPN kutoka EN 10365:2017. DetailCraft inatumia jedwali hilo hilo.
- **Sehemu za kawaida**: skrubu za kichwa cha hexagoni (ISO 4017), boliti za hexagoni (ISO 4014), nati za hexagoni (ISO 4032), washa tupu (ISO 7089), boliti na nati za hexagoni za inchi (ASME B18.2.1 na B18.2.2), pini sambamba (ISO 2338), fani za mpira zenye groove ya kina (ISO 15), funguo sambamba (DIN 6885-1) na gia za spur (moduli kutoka ISO 54).

Kila kitu hapa kimeshirikishwa chini ya CC0: kitumie kwa chochote, bila kutaja chanzo.

## Weka sehemu ya chuma

1. Fungua maktaba ({{ui:Library}} kwenye kikundi cha Bloku, au andika `LIB`) kisha ubofye kichupo cha {{ui:Standard}}.
2. Chagua familia kwenye orodha ya kwanza, kwa mfano {{ui:W shapes}}. Andika kwenye kisanduku cha utafutaji ili kupunguza ukubwa: `W12` inaonyesha kila W12.
3. Kwenye {{ui:Place as}}, chagua:
   - {{ui:Section}}: sehemu ya msalaba, ikiwa na kituo chake kwenye nukta ya kuingiza.
   - {{ui:Elevation}}: mwanachama anavyoonekana kutoka pembeni, mradi {{ui:Length (mm)}} unasema, kuanzia katikati ya ncha yake ya kushoto.
   - {{ui:3D member}}: kiasi thabiti kwenye kichupo cha 3D (chini).
4. Bofya {{ui:Place}} kwenye kadi ya ukubwa huo, kisha ubofye mahali unapoenda, kama kwa kipengee chochote cha maktaba.

Sehemu ya mkato au miinuko inakuwa bloku. Sifa zake zinabeba ukubwa, jedwali linakotoka, urefu (kwa miinuko) na nyenzo unayoweza kujaza.

:::note
Sehemu za S, chaneli na UPN zinachorwa na flensi sambamba za unene wa wastani, na pembe zenye kona za mraba: flensi halisi zina mteremko na kona zina mviringo. W, IPE, HEA na HEB zina mikunjo yao ya msingi, na HSS zina radius za kona zao.
:::

## Tengeneza mwanachama wa 3D

Chagua {{ui:3D member}} kisha ubofye {{ui:Place}}, au andika {{cmd:STEELMEMBER}} (`SMEMBER`) kwenye mstari wa amri:

1. Kwenye `Section size`, bonyeza {{key:Enter}} kwa ukubwa unaoonyeshwa, au andika mmoja, kwa mfano `HSS6x6x1/4` au `IPE300`.
2. Bofya nukta ya kuanza, kisha nukta ya mwisho. Mwanachama unakimbia kati yao, ukikaa juu ya ardhi.
3. Kwa nguzo, andika [Nguzo (C)], bofya nukta yake ya msingi kisha uandike urefu wake.

Mwanachama ni kiasi thabiti kwenye kichupo cha 3D. Sogeza au nakili kama kiasi kingine chochote hapo. {{key:Mod+Z}} kinauondoa tena.

## Weka sehemu ya kawaida

1. Kwenye kichupo cha {{ui:Standard}}, chagua familia, kwa mfano {{ui:Hex head screws}}.
2. Kwa skrubu, boliti, pini au funguo, andika {{ui:Length (mm)}} yake (inchi kwa familia za inchi). Kwa gia, andika {{ui:Teeth}}, {{ui:Face width (mm)}} na {{ui:Bore (mm)}}. Acha kisanduku tupu kwa thamani ya kawaida inayoonyeshwa ndani yake.
3. Bofya {{ui:Place}} kwenye ukubwa huo kisha ubofye mahali unapoenda.

Skrubu, boliti na pini zinachorwa kutoka pembeni, uso wa kuzaa wa kichwa ukiwa kwenye nukta ya kuingiza; nati, washa, fani na gia zinaangalia uso; funguo zinatoka juu. Nyuzi zinachorwa kwa njia ya kawaida: mzizi kama mstari mwembamba, na mwisho wa nyuzi kama mnene. Gia zinachorwa kama duara lake la ncha, duara la lami na duara la mzizi, si jino kwa jino.

Bloku ya kila sehemu inabeba aina yake, kiwango, ukubwa, urefu na nyenzo kama sifa, pamoja na uzito wake kutoka umbo la kawaida la chuma. Badilisha nyenzo kwenye paneli ya {{ui:Properties}}.

Sehemu hizo hizo pia ziko kwenye Maktaba kama vipengee, na PartCraft inazifungua kama sehemu za vigezo ({{ui:Standard part}} kwenye kikundi chake cha {{ui:File}}).

## Tengeneza orodha ya sehemu

- Kwenye maktaba, bofya {{ui:Parts list}}: kila sehemu ya kawaida na sehemu ya chuma kwenye mchoro, ikipangwa kwa aina, kiwango, ukubwa, urefu na nyenzo, pamoja na wingi na namba za vipengee. {{ui:Download CSV}} inahifadhi kwa lahajedwali.
- Ili kuichora, andika {{cmd:PARTSLIST}} (`PLIST`), bofya kona ya juu kushoto ya jedwali, kisha ubonyeze {{key:Enter}} kwa urefu wa kawaida wa maandishi au uandike mmoja.

Orodha inasomwa kutoka sifa za bloku, hivyo bado ni sahihi baada ya mchoro kuhifadhiwa kama DWG au DXF na kufunguliwa tena.

## Makosa ya kawaida

- **"Hakuna sehemu ya chuma inayoitwa …"**: andika ukubwa jinsi kichupo cha {{ui:Standard}} kinavyoorodhesha: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Mwanachama uko kwenye kichupo cha 3D, si kwenye mpango.** {{cmd:STEELMEMBER}} inatengeneza kiasi thabiti; fungua kichupo cha 3D ili kukiona. Ili kuonyesha chuma kwenye mpango, weka pia {{ui:Section}} au {{ui:Elevation}}.
- **Urefu nje ya mpaka.** Boliti lazima iwe ndefu kuliko kichwa chake, na funguo ziwe ndefu kuliko upana wake. Mstari chini ya kadi unasema thamani gani ilikataliwa.
