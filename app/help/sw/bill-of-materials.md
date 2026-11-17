---
title: Orodha za vifaa kwa kanda
summary: Weka alama maeneo ya mchoro kama kanda na uweke jedwali kwa kila moja linalohesabu bloku zilizo ndani yake. Majedwali yanafuata mchoro unapofanya kazi, na unachagua safu gani kila moja inaonyesha.
keywords: orodha ya vifaa, BOM, orodha ya sehemu, ratiba, kanda, eneo, jedwali, hesabu, kiasi, sifa, safu, nambari ya kipengee, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Kanda** ni eneo lenye jina katika mchoro. **Jedwali la orodha ya vifaa** linaorodhesha kilicho ndani ya kanda moja, au katika mchoro mzima: kila bloku pamoja na kiasi chake na thamani zake za sifa. Mchoro unaweza kuwa na kanda na majedwali mengi unavyohitaji, na kanda moja inaweza kuwa na majedwali kadhaa yenye safu tofauti.

Zana ziko kwenye kichupo cha Bloku chini ya {{ui:Orodha ya vifaa}}, kwenye menyu ya Zaidi ya kikundi cha Bloku, na zinaweza kuandikwa.

## Tengeneza kanda

Andika {{cmd:BOMZONE}} kisha

- bonyeza pembe mbili zilizo kinyume kwa mstatili,
- chagua {{ui:Poligoni}}, bonyeza kila pembe kisha bonyeza Enter kuifunga, au
- chagua {{ui:Kitu (O)}} kisha uchague polilaini iliyofungwa, duara, duaradufu au spline iliyofungwa. Muhtasari wake unanakiliwa; kitu kinabaki kama kilivyo.

Kisha andika jina la kanda. Kanda inachorwa kama muhtasari wa vitone na jina lake juu ya pembe ya juu kushoto, kwenye tabaka `BOM-ZONES`, ambalo halichapishwi. Washa uchapishaji kwa tabaka hilo ikiwa unataka kanda kwenye karatasi.

Kanda ni polilaini ya kawaida iliyofungwa: isogeze, inyooshe au buruta vishikio vyake, na jina lake linafuata. Ili kubadilisha jina la kanda, hariri maandishi ya jina, au tumia {{cmd:BOMZONE}} na {{ui:Badilisha jina}}. {{ui:Maeneo}} inaorodhesha kila kanda na majedwali mangapi ina.

## Weka jedwali

Andika {{cmd:BOMTABLE}} (au {{cmd:BOM}}), chagua muhtasari wa kanda au jina lake, toa kimo cha maandishi kisha ubonyeze mahali pembe ya juu kushoto ya jedwali inapokwenda. Bonyeza Enter badala ya kuchagua kanda, au chagua {{ui:Yote}}, kwa jedwali la mchoro mzima.

Jedwali jipya linaonyesha nambari ya kipengee, kiasi, jina la bloku na safu kwa kila sifa ambazo bloku zinabeba (sita za kwanza; nyingine zinatolewa bila alama). Bloku zenye jina lile lile na thamani zile zile za sifa zinashiriki safu moja.

## Kinachohesabiwa kuwa ndani

- Bloku inahesabiwa katika kanda inayoshikilia **nukta yake ya kuingiza**.
- Mstari, tao, duara, polilaini, duaradufu, spline au kivuli kinahesabiwa **kizima** katika kanda inayoshikilia katikati ya mipaka yake (kwa mstari, nukta yake ya katikati). Urefu wake haukatwi kwenye ukingo wa kanda.
- Nukta iliyo kwenye ukingo kabisa iko ndani.
- Kanda zinaweza kuingiliana. Kila kanda inahesabu yenyewe, hivyo kitu kilicho katika mwingiliano kiko katika majedwali yote mawili.

## Majedwali yanafuata mchoro

Unapoongeza, kusogeza, kunakili au kufuta bloku, kuhariri sifa, au kubadilisha umbo au kusogeza kanda, kila jedwali linachorwa upya katika hatua ile ile. Kutendua kunatengua uhariri wako na mabadiliko ya jedwali pamoja.

Ili kuzuia jedwali lisifuate, weka alama kwenye {{ui:Imegandishwa}} kwenye mipangilio yake. Jedwali lililogandishwa linabadilika tu unapohariri mipangilio yake au kuandika {{cmd:BOMUPDATE}}, ambayo inasasisha kila jedwali sasa.

## Chagua safu

Chagua jedwali kisha andika {{cmd:BOMEDIT}}. Kwenye kisanduku cha mazungumzo:

- **Safu**: weka alama kwenye zinazoonyeshwa (kipengee, kiasi, jina, tabaka, urefu, eneo, maelezo na kila sifa), andika kichwa chako kwa yoyote kati yake, na zisogeze juu au chini.
- {{ui:Panga safu mlalo kwa}}: jina la bloku na thamani za sifa, jina la bloku pekee, tabaka, au sifa moja. Katika safu mlalo iliyounganishwa, thamani inayotofautiana kati ya bloku inasomeka "inatofautiana".
- {{ui:Panga kwa}} safu yoyote, kwa kupanda au kushuka.
- {{ui:Kichwa}}, {{ui:Onyesha kichwa}} na {{ui:Safu mlalo ya jumla}}.
- {{ui:Hesabu mistari kwa tabaka}} inaongeza safu mlalo moja kwa kila tabaka pamoja na idadi ya vitu, urefu wao wote na, kwa maumbo yaliyofungwa, eneo lao lote, katika vitengo vya mchoro.
- **Maelezo**: weka alama kwenye safu ya Maelezo, kisha andika maelezo kwa safu mlalo yoyote ya jedwali chini ya kisanduku cha mazungumzo.

Kila jedwali linabakiza chaguo zake.

## Nambari za vipengee

Safu mlalo inabakiza nambari yake ya kipengee muda wote iko kwenye jedwali. Safu mpya inachukua nambari inayofuata iliyo huru, na nambari iliyoshatolewa haitumiki tena, hivyo alama za puto na maelezo yanayonukuu nambari yanabaki sahihi. {{ui:Hesabu upya vipengele}} inazihesabu kuanzia 1 kwa mpangilio unaoonekana.

Safu mlalo inatambulika kwa kile inachokipanga: badilisha jinsi safu zinavyopangwa, au badilisha thamani ya sifa ambayo upangaji unaitumia, na safu hiyo inahesabiwa kama mpya.

## Hamisha na programu nyingine

{{cmd:BOMEXPORT}}, au {{ui:Hamisha CSV}} kwenye kisanduku cha mazungumzo, inahifadhi jedwali kama faili ya .csv kwa lahajedwali.

Katika faili ya DWG au DXF, jedwali ni bloku ya kawaida ya mistari na maandishi, hivyo programu nyingine zinaonyesha na kuchapisha kama lilivyochorwa. Hapo si kitu cha jedwali, na halisasishwi katika programu nyingine. Kiungo chake na kanda kinahifadhiwa kwenye faili kama data ya upanuzi ambayo CadCraft inaisoma tena, hivyo jedwali linakuwa hai tena utakapofungua mchoro tena katika CadCraft. DXF ya R12 ya mchoro usio na karatasi haihifadhi mpangilio wa "haichapishwi" wa tabaka la kanda.

Kutenganisha jedwali kunaligeuza kuwa mistari na maandishi huru na kumaliza kiungo.
