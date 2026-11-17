---
title: Weka mipaka ya mchoro
summary: LIMITS huweka mstatili kwa mchoro: gridi inaujaza, ZOOM All unaonyesha, na mipaka ikiwa imewashwa, nukta zilizo nje yake zinakataliwa. Zinahifadhiwa kwenye faili za DWG na DXF.
keywords: mipaka, mipaka ya mchoro, LIMITS, LIMMIN, LIMMAX, LIMCHECK, gridi, nje ya mipaka, ukubwa wa karatasi, eneo la mchoro, zoom all, mpaka
from: 9e97b30d
---

**Mipaka ya mchoro** ni mstatili unaoonyesha mchoro unakusudiwa kuwa wa ukubwa gani: eneo unalopanga kuchora ndani yake, kama karatasi ya 420 × 297. Mchoro mpya hauna mipaka, kwa hiyo gridi na eneo la mchoro havina kikomo, kama zamani.

## Weka

Andika {{cmd:LIMITS}} kisha ujibu:

- `Bainisha kona ya chini kushoto au [ON/OFF] <0,0>`: nukta, au {{key:Enter}} kubakiza ile ya sasa.
- `Bainisha kona ya juu kulia <420,297>`: nukta, au {{key:Enter}} kubakiza ile ya sasa. Lazima iwe juu na kulia kwa ile ya kwanza.

Au andika `ON` au `OFF` kwenye swali la kwanza ili kubadilisha ukaguzi bila kubadilisha mstatili. Kuweka kona ni hatua moja ya kutendua, na kila ON na OFF pia.

## Yanachofanya

- **Gridi inajaza mipaka** na inasimama kwenye ukingo wake. Ni picha ya eneo, kwa hiyo washa {{ui:Gridi}} ili kuiona.
- **ZOOM All** ({{cmd:ZOOM}}, kisha {{ui:Zote}}) inaonyesha mipaka na mchoro pamoja; {{ui:Mipaka}} bado inaonyesha mchoro tu.
- **Mipaka ikiwa ON**, nukta uliyoandika au uliyobofya nje yake inakataliwa kwa `**Nje ya mipaka` na ujumbe unabaki. Inahusu amri zinazotengeneza vitu: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, amri za vipimo na nyingine chache. Amri zinazosogeza, kuchagua au kupima tu hazina kikomo, wala kubandika, kuvuta mpini, au kitu ambacho routine ya LISP inakitengeneza: mipaka ni mwongozo wa kuchora, si ukuta. Mipaka ikiwa OFF, hakuna kinachokataliwa.
- Vitu vilivyo nje tayari vinabaki pale vilipo.

## Kwenye faili na LISP

Zinahifadhiwa kwenye DWG na DXF kama `$LIMMIN`, `$LIMMAX` na `$LIMCHECK`. Faili kutoka programu nyingine yenye mipaka yake ya chaguo-msingi tu (0,0 hadi 12,9 au 420,297, ukaguzi umezimwa) inafunguka bila mipaka, ili gridi yake isibanwe ndani ya mstatili mdogo; faili yenye mipaka yake, au yenye ukaguzi umewashwa, inaiweka. Katika LISP, `(getvar "LIMMIN")`, `LIMMAX` na `LIMCHECK` zinazisoma, na `setvar` inaziandika, kama hatua moja ya kutendua.

Mipaka ni ya modeli. Karatasi (mpangilio) ina ukubwa wake wa karatasi.
