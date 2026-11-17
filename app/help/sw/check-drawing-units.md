---
title: Angalia mchoro uko katika vitengo gani
summary: Ona kama mchoro uliofunguliwa uko katika milimita, inchi au kitu kingine, uthibitishe kwa kupima, na ujue kwa nini programu nyingine inaweza kutaja vitengo tofauti kwa DXF ile ile.
keywords: vitengo, vitengo gani, vitengo vipi, angalia vitengo, milimita, mm, inchi, metriki, imperial, vitengo vya DXF, STEP kwenda DXF, vitengo visivyo sahihi, inchi au mm, INSUNITS, MEASUREMENT, vitengo vya mchoro, PartCraft DXF
from: c0ee75bb
---

## Utakachofanya

Tafuta kitengo kimoja katika mchoro uliofunguliwa kinamaanisha nini, na uhakikishe namba unazosoma ni ukubwa unaotarajia.

## Hatua

1. Fungua mchoro, kisha bonyeza {{key:Esc}} ili hakuna kilichochaguliwa, kwenye kichupo cha {{ui:Modeli}}.
2. Kwenye paneli ya kulia, chini ya {{ui:Mipangilio ya sasa}}, soma {{ui:Vitengo}}. Inasema kitengo kimoja cha mchoro kinamaanisha nini: {{ui:Milimita}}, {{ui:Inchi}}, {{ui:Futi}} na kadhalika. DXF iliyohifadhiwa kutoka PartCraft inasema {{ui:Milimita}}.
3. Thibitisha kwa kupima kitu ambacho ukubwa wake unaujua. Andika {{cmd:DIST}} kisha chagua ncha mbili za ukingo au tundu. Ikiwa kipande unachokijua ni 25 mm na kinasoma `25`, mchoro uko katika milimita; ikisoma takriban `0.98`, uko katika inchi.

{{ui:Bila kipimo}} inamaanisha faili haisemi. Kisha CadCraft inakichukulia kama kitengo cha karatasi (milimita kwenye karatasi za ISO, inchi kwenye karatasi za US), na namba ni sahihi kama vile programu iliyozitengeneza ilivyo sahihi.

## Vitengo vikiwa si sahihi

Kubadilisha {{ui:Vitengo}} **hakubadilishi ukubwa wa kitu chochote**: namba zinabaki zile zile, na maana yake tu ndiyo inayobadilika. Kwa hiyo iweke ili tu kusema mchoro ulivyo kweli. Ikiwa namba ni milimita na {{ui:Vitengo}} inasema {{ui:Inchi}}, chagua {{ui:Milimita}}. Ikiwa unahitaji jiometri yenyewe katika vitengo vingine, ipime kwa {{cmd:SCALE}} (25.4 kutoka inchi kwenda milimita, 1/25.4 kwa upande mwingine) kisha uweke {{ui:Vitengo}}.

Jinsi urefu unavyoandikwa (desimali, futi na inchi, sehemu) ni mpangilio tofauti, {{ui:Muundo wa urefu}}: angalia [Vitengo, saizi za karatasi na skeli](topic:units-papers-scales).

## Kwa nini programu nyingine inaweza kusema inchi

DXF inataja vitengo vyake kwenye kichwa chake. DXF kongwe kabisa, R12, haikuwa na kigezo chochote cha vitengo, kwa hiyo programu inayosoma R12 kwa ukali inapuuza kilichoandikwa hapo na kutumia chaguo-msingi lake, ambalo mara nyingi ni inchi. Jiometri ya faili ni ile ile kwa vyovyote vile: lebo tu ndiyo hutofautiana. PartCraft huandika DXF zake kama R12 na kutaja milimita kwa njia mbili (`$INSUNITS` 4 na `$MEASUREMENT` 1) ili programu nyingi zizisome kwa usahihi. Ikiwa programu bado inasema inchi, weka vitengo vyake kuwa milimita unapofungua faili.

Kuleta faili ndani ya mchoro (badala ya kuifungua) kunabadilisha vitengo vyake: angalia [Vitengo wakati wa kuingiza](topic:units-on-import).
