---
title: Tengeneza na weka bloku
summary: Geuza mlango uliochorwa kuwa bloku, uweke tena katika nafasi, skeli na pembe nyingine, na usafishe bloku zisizotumika.
keywords: bloku, bmake, ingiza, ddinsert, alama, purge, explode, redefine, nukta ya msingi, rejeleo, hesabu, bcount, ratiba, csv, sifa, uchimbaji wa data
from: 125a129d
---

## Unachokwenda kutengeneza

Alama ya mlango iliyogeuzwa kuwa bloku iitwayo `DOOR-900`, kisha kuwekwa mara tatu: kama ilivyochorwa, imezungushwa digrii 90, na imeakisiwa.

Bloku ni kundi lenye jina la vitu. Unaichora mara moja; kila mahali unapoitumia ni **rejeleo la bloku** linaloelekeza kwenye ufafanuzi mmoja. Sehemu ya {{ui:Blocks}} katika paneli ya kushoto inaorodhesha bloku zilizo kwenye mchoro na mara zinavyotumika.

## Chora mlango

1. Andika `L` kisha bonyeza {{key:Enter}}.
2. Andika `0,0` kisha bonyeza {{key:Enter}}.
3. Andika `@0,900` kisha bonyeza {{key:Enter}}, kisha bonyeza {{key:Enter}} tena. Hili ni jani la mlango.
4. Andika `A` kisha bonyeza {{key:Enter}}.
5. Andika `C` kisha bonyeza {{key:Enter}} ili kutoa kitovu kwanza.
6. Andika `0,0` kisha bonyeza {{key:Enter}} kwa kitovu.
7. Andika `900,0` kisha bonyeza {{key:Enter}} kwa nukta ya kuanzia.
8. Andika `0,900` kisha bonyeza {{key:Enter}} kwa nukta ya mwisho. Hii ni mwendo wa mlango.
9. Bofya {{ui:Extents}}.

Tao huenda kinyume cha saa kutoka nukta ya kuanzia hadi nukta ya mwisho.

## Tengeneza bloku

1. Andika `B` kisha bonyeza {{key:Enter}}, au bofya {{ui:Make}} katika kundi la Bloku.
2. Kwenye `Enter block name`, andika `DOOR-900` kisha bonyeza {{key:Enter}}.
3. Kwenye `Specify insertion base point`, andika `0,0` kisha bonyeza {{key:Enter}}. Hii ni bawaba: nukta itakayotua pale unapoweka bloku.
4. Kwenye `Select objects`, buruta dirisha kuzunguka jani na tao.
5. Bonyeza {{key:Enter}}.

Historia inasema `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Paneli ya {{ui:Blocks}} inaorodhesha DOOR-900 ikiwa na `1×` pembeni yake: rejeleo moja. Bofya mlango: sasa unachaguliwa kama kitu kimoja, "Rejeleo la bloku".

:::tip
Unaweza kuchagua vitu kwanza kisha kuandika `B`. CadCraft bado inauliza jina na nukta ya msingi, kisha inatumia uteuzi wako.
:::

## Ingiza bloku

1. Andika `I` kisha bonyeza {{key:Enter}}, au bofya {{ui:Insert}} karibu na DOOR-900 kwenye paneli ya {{ui:Blocks}}.
2. Kwenye `Enter block name or [File/Library] <DOOR-900>`, bonyeza {{key:Enter}}. (Kitufe cha {{ui:Insert}} cha paneli kinajaza jina kwa ajili yako.)
3. Mlango unafuata msalaba. Bofya mahali bawaba inapostahili kuwa.

Mlango wa pili unaonekana.

## Ingiza ukiwa umezungushwa au umebadilishwa skeli

1. Andika `I` kisha bonyeza {{key:Enter}}, kisha bonyeza {{key:Enter}} ili kukubali jina.
2. Kwenye `Specify insertion point [Scale/Rotate]`, andika `R` kisha bonyeza {{key:Enter}}.
3. Andika `90` kisha bonyeza {{key:Enter}}. Onyesho la kukagua linazunguka.
4. Bofya ili kuliweka.

Andika `S` badala yake ili kuweka kipengele cha skeli; kinatumika kwa pande zote mbili. Skeli na mzunguko vinakumbukwa kwa uingizaji ujao. Ili kuakisi mlango, ingiza kisha utumie {{cmd:MIRROR}} kwenye rejeleo.

## Badilisha bloku iliyowekwa

Chagua rejeleo la bloku. Katika paneli ya kulia unaweza kubadilisha {{ui:X}}, {{ui:Y}}, {{ui:Scale X}}, {{ui:Scale Y}} na {{ui:Rotation}}. {{ui:Scale X}} hasi huigeuza.

## Fafanua upya bloku

Ili kubadilisha kila mlango kwa mara moja, tengeneza bloku yenye jina lilelile:

1. Chora toleo jipya la mlango.
2. Andika `B` kisha bonyeza {{key:Enter}}, kisha andika `DOOR-900`.
3. Kwenye `Block "DOOR-900" already exists. Redefine it?`, andika `Y` kisha bonyeza {{key:Enter}}.
4. Toa nukta ya msingi na uchague vitu vipya, kama hapo awali.

Kila rejeleo la DOOR-900 sasa linaonyesha toleo jipya.

Au hariri bloku yenyewe: {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}) inaifungua peke yake, na {{ui:Save block}} inairudisha. Tazama [Sifa za bloku](topic:attributes#change-a-block-the-block-editor).

## Hesabu bloku na usafirishe ratiba

Andika {{cmd:COUNT}} (au {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}), kisha:

- bofya mlango mmoja: kila mlango katika nafasi hii unachaguliwa, na historia inaonyesha kuna mingapi hapa na katika mchoro wote;
- au bonyeza {{key:Enter}}: historia inaorodhesha kila bloku pamoja na hesabu yake, kubwa zaidi kwanza;
- au andika `E`, kisha `C` kwa CSV ya hesabu (kwenye modeli, kwenye karatasi, jumla) au `A` kwa safu moja kwa kila rejeleo pamoja na tabaka lake, nafasi, mzunguko na kila thamani ya sifa — ratiba unayoweza kufungua kwenye lahajedwali.

Bloku zisizo na jina (vipimo, jedwali) na marejeleo ndani ya bloku nyingine hazihesabiwi. Seli zinazoanza kama fomula (`=`, `+`, `-`, `@`) hupata `'` mbele yake ili lahajedwali ionyeshe kama maandishi.

## Vunja na safisha

- {{cmd:EXPLODE}} (`X`) hugeuza rejeleo la bloku lililochaguliwa kuwa vitu tofauti. Ufafanuzi unabaki.
- {{cmd:PURGE}} (`PU`) huondoa ufafanuzi wa bloku ambao hakuna kinachoutumia tena. Historia inasema imeondoa mingapi.

## Majina ya bloku

Jina linaweza kuwa herufi hadi 255 na kuwa na nafasi, lakini haliwezi kuanza na nyota, na haliwezi kuwa na `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` au backtick. Unapohifadhi DXF R12, majina yanaandikwa kwa herufi kubwa; herufi nyingine isipokuwa herufi, tarakimu, `$`, `_` na `-` hubadilika kuwa `_`, na majina yanakatwa hadi herufi 31; historia inasema mangapi yamebadilika. Majina mafupi ya herufi kubwa, tarakimu na viunganishi, kama `DOOR-900`, yanabaki vilevile. DWG iliyohifadhiwa huweka majina kama ulivyoandika, herufi kubwa na ndogo; herufi ambazo DWG haziruhusu tu ndizo hubadilika (`|` inakuwa `$0$`, nyingine zinakuwa `_`).

## Andika bloku au vitu kwenye faili lao

Andika `W` ({{cmd:WBLOCK}}) kisha uchague **Vitu**, **Bloku** au **Mchoro mzima**. Matokeo ni DWG au DXF mpya inayobeba tu tabaka, mitindo na bloku inazotumia, huku nukta yako ya msingi ikiwa asili yake. Kwa vitu, unaweza kuviweka, kuvigeuza kuwa bloku, au kuvifuta kutoka mchoro huu.

## Makosa ya kawaida

- **Bloku ilitua mbali na msalaba.** Nukta ya msingi haikuwa kwenye vitu. Tengeneza bloku tena ukiweka nukta ya msingi kwenye kona au bawaba.
- **"Hakuna vitu vilivyochaguliwa; hakuna kilichotengenezwa."** Ulibonyeza {{key:Enter}} kabla ya kuchagua chochote.
- **"Mchoro huu bado hauna bloku: F huingiza moja kutoka faili, L kutoka maktaba (au tengeneza moja kwa BLOCK)."** Andika `F` ili kuleta bloku kutoka mchoro mwingine, au `L` kwa maktaba. Tazama [Ingiza kutoka faili au maktaba](topic:insert-from-file-and-library).
- **"Dirisha la mwonekano haliwezi kuingia kwenye bloku."** Acha fremu za madirisha ya mwonekano nje ya uteuzi.
