---
title: Hamisha, nakili, zungusha, badilisha ukubwa, geuza kioo, nyoosha na safu ya nakala
summary: Panga samani ndani ya chumba kwa amri za msingi za kubadilisha, ukitumia nukta za msingi, umbali ulioandikwa na tendua.
keywords: hamisha, nakili, zungusha, badilisha ukubwa, kioo, nyoosha, safu ya nakala, unganisha, matchprop, linganisha sifa, painter, arrayrect, arraypolar, safu ya polar, futa, tenganisha, tendua, rudia, nukta ya msingi, uhamisho, badilisha, panga, gawanya kwa usawa, weka umbali sawa
from: 8eaeee6c
---

## Utakachotengeneza

Meza yenye kiti kimoja, kilichonakiliwa kuzunguka meza, kugeuzwa, kugeuzwa kioo na kubadilishwa ukubwa. Njiani utatumia {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} na {{cmd:UNDO}}.

## Chora vipande

1. Andika `REC` kisha bonyeza {{key:Enter}}, andika `0,0` kisha bonyeza {{key:Enter}}, kisha andika `@1800,900` kisha bonyeza {{key:Enter}}. Hii ni meza.
2. Andika `REC` kisha bonyeza {{key:Enter}}, andika `300,-700` kisha bonyeza {{key:Enter}}, kisha andika `@450,450` kisha bonyeza {{key:Enter}}. Hiki ni kiti, chini ya meza.
3. Bofya {{ui:Extents}}.

## Hamisha: nukta ya msingi, kisha nukta ya pili

Kila hamisho, nakili, zungusha na badilisha ukubwa huanza kutoka **nukta ya msingi**: nukta inayobebwa au kuzungushwa kuizunguka.

1. Bofya kiti ili kukichagua.
2. Andika `M` kisha bonyeza {{key:Enter}}. Historia inasema `1 found`.
3. Kwenye `Specify base point`, elekeza kona ya juu-kushoto ya kiti (Ncha) kisha ubofye.
4. Kwenye `Specify second point`, andika `@0,200` kisha bonyeza {{key:Enter}}.

Kiti kinasogea juu kwa 200, karibu zaidi na meza.

:::tip
Andika `D` kwenye `Specify base point` ili kutoa uhamisho badala yake: CadCraft kisha inauliza `Specify displacement`, nawe unaandika umbali wa upande na juu, kama `0,200` (hakuna haja ya `@`).
:::

## Nakili, mara nyingi upendavyo

1. Bofya kiti.
2. Andika `CO` kisha bonyeza {{key:Enter}}.
3. Elekeza kona ya chini-kushoto ya kiti na ubofye kama nukta ya msingi.
4. Andika `@600,0` kisha bonyeza {{key:Enter}}. Nakala moja inaonekana umbali wa 600 kulia.
5. Andika `@600,0` tena kisha bonyeza {{key:Enter}}. Nakala ya pili inaonekana 1200 kulia kwa asili.
6. Bonyeza {{key:Enter}} kumaliza amri.

{{cmd:COPY}} inaendelea hadi ubonyeze {{key:Enter}}. Kila nakala huwekwa kwa umbali kutoka nukta ya msingi hadi nukta uliyotoa. Nukta ya `@` huhesabu kutoka nukta ya mwisho uliyoingiza, ambayo baada ya nakala ya kwanza ni nukta ya nakala hiyo, kwa hiyo `@600,0` mara mbili hutoa nakala kwa 600 na 1200. Andika `U` kisha bonyeza {{key:Enter}} ili kuondoa nakala ya mwisho bila kuacha amri.

Unapaswa kuona viti vitatu mfululizo chini ya meza.

:::tip
{{cmd:COPY}} ni kwa nakala ndani ya mchoro mmoja, zilizowekwa kwa nukta ya msingi. Ili kupeleka vitu kwenye mchoro au kichupo kingine, au kuvibandika baadaye, tumia ubao wa kunakili: {{key:Mod+C}}, kisha {{key:Mod+V}}. {{key:Mod+D}} hutengeneza nakala moja inayosogea na kielekezi. Angalia [Nakili, bandika na rudufu](topic:copy-paste).
:::

## Geuza safu kwa upande mwingine

1. Buruta dirisha la kuvuka (kutoka kulia kwenda kushoto) juu ya viti vitatu, bila kugusa meza.
2. Andika `MI` kisha bonyeza {{key:Enter}}.
3. Kwenye `Specify first point of mirror line`, elekeza nukta ya kati ya upande wa kushoto wa meza kisha ubofye.
4. Kwenye `Specify second point of mirror line`, elekeza nukta ya kati ya upande wa kulia wa meza kisha ubofye.
5. Kwenye `Erase source objects? [Yes/No] <N>`, bonyeza {{key:Enter}} ili kuviweka.

Unapaswa kuona viti vitatu chini ya meza na viti vitatu vya kioo juu yake. Maandishi katika uteuzi wa kioo yanabaki yanasomeka: yamewekwa kama kioo lakini hayaandikwi nyuma.

## Zungusha kiti

1. Bofya kiti cha kulia kabisa chini ya meza.
2. Andika `RO` kisha bonyeza {{key:Enter}}.
3. Elekeza kona ya chini-kulia ya kiti na ubofye kama nukta ya msingi.
4. Andika `90` kisha bonyeza {{key:Enter}}.

Kiti kinazunguka digrii 90 kinyume cha saa kuzunguka nukta ya msingi. Pembe hasi huzunguka kwa saa. Badala ya kuandika, unaweza kubofya nukta ya pili: pembe hupimwa kutoka nukta ya msingi hadi nukta hiyo.

## Badilisha ukubwa wa meza

1. Chagua meza.
2. Andika `SC` kisha bonyeza {{key:Enter}}.
3. Elekeza kona ya chini-kushoto ya meza na ubofye kama nukta ya msingi.
4. Andika `1.2` kisha bonyeza {{key:Enter}}.

Meza ni kubwa kwa 20%, ikikua mbali na nukta ya msingi. Kipengele chini ya 1 hufanya iwe ndogo.

:::note
Ukibofya nukta badala ya kuandika kipengele cha ukubwa, kipengele ni umbali kutoka nukta ya msingi hadi nukta hiyo. Kubofya kitengo kimoja cha mchoro mbali kunatoa kipengele 1. Kuandika namba kwa kawaida ndicho unachotaka.
:::

## Tendua na rudia

- {{key:Mod+Z}}, kitufe cha {{ui:Undo}}, au `U` kisha {{key:Enter}} hutendua amri ya mwisho. Amri nzima ni hatua moja: kutendua {{cmd:COPY}} iliyotengeneza nakala tano kunaondoa zote tano.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, kitufe cha {{ui:Redo}}, au `REDO` hurejesha.
- Historia inasema kilichotenduliwa ("Imetendua COPY").

CadCraft huhifadhi hatua 500 za mwisho. Mipangilio ya tabaka (kuwasha, kuganda, kufunga, rangi) ni mipangilio, si mabadiliko, na haitenduliwi.

## Nyoosha chumba kiwe kipana

{{cmd:STRETCH}} (`S`, au {{ui:Stretch}}) husogeza tu kilichomo ndani ya dirisha la kuvuka: kona na ncha za mistari zilizo ndani yake zinahamia, kila kitu kingine kinabaki, hivyo chumba kinakuwa kipana badala ya kuhamia.

1. Andika `S` kisha bonyeza {{key:Enter}}.
2. Buruta dirisha kutoka kulia kwenda kushoto juu ya ukuta wa kulia, ili kufunike kona za ukuta na ncha za chochote kinachokutana nao.
3. Bonyeza {{key:Enter}}.
4. Bofya nukta ya msingi, kisha andika `@600,0` kisha bonyeza {{key:Enter}}.

Mstatili ni mpana zaidi kwa 600; mistari iliyoishia kwenye ukuta bado inaishia hapo. Upinde wenye ncha moja ndani unahifadhi urefu wake, miduara na maandishi husogea pale kituo chake au nukta ya kuingiza ilipo ndani, na kipimo kinapima urefu wake mpya. Vitu vilivyochaguliwa kimoja kimoja bila dirisha husogea tu.

Unaweza pia kuchagua kwanza: buruta dirisha la kuvuka (au lasso ya kuvuka) juu ya ukuta bila amri inayoendelea, kisha andika `S`. STRETCH inachukua uteuzi huo na kunyoosha kilichomo kwenye madirisha yake, kama ungeyaburuta kwenye kidokezo chake.

## Safu ya nakala: safu mlalo na safu wima, au kuzunguka kituo

{{cmd:ARRAY}} (`AR`, au {{ui:Array}}) hunakili uteuzi kwenye gridi au kwenye duara.

1. Chagua kiti, andika `AR`, kisha bonyeza {{key:Enter}}. Bonyeza {{key:Enter}} tena kwa Mstatili.
2. Onyesho la safu 4 wima na safu 3 mlalo linaonekana. Andika `COU`, bonyeza {{key:Enter}}, kisha `5` kwa safu wima na `2` kwa safu mlalo.
3. Andika `S`, bonyeza {{key:Enter}}, kisha `600` kati ya safu wima na `-900` kati ya safu mlalo (hasi huenda chini).
4. Bonyeza {{key:Enter}} kutengeneza nakala.

Kwa mduara wa viti kuzunguka meza, chagua `PO` (Polar) badala yake, bofya kituo cha meza, kisha weka `I` (vipengee), `F` (pembe ya kujaza: 360 kwa mzunguko kamili, 180 kwa nusu) na `ROT` (kama nakala zinageuka kuelekea kituo). {{cmd:ARRAYRECT}} na {{cmd:ARRAYPOLAR}} zinaruka swali hilo.

## Unganisha vipande kuwa polilaini moja

{{cmd:JOIN}} (`J`, au {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): chagua mistari, mapinde na polilaini wazi ambazo ncha zake zinakutana, kisha bonyeza {{key:Enter}}. Zinakuwa polilaini moja, imefungwa zikizunguka kabisa, ambayo kisha unaweza kuipanulia kwa mara moja. Mistari iliyo kwenye mstari mmoja inakuwa mstari mmoja hata kukiwa na mapengo; mapinde ya duara moja yanakuwa upinde mmoja, au duara.

## Linganisha sifa

{{cmd:MATCHPROP}} (`MA`, au {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): bofya kitu chenye muonekano unaoutaka, kisha chagua vitu vya kubadilisha na ubonyeze {{key:Enter}}. Vinachukua tabaka na rangi yake; maandishi yanachukua urefu wake, kipimo kinachukua vipimo vyake, na hatch inachukua muundo wake. Andika `S` (Mipangilio) kwenye swali la pili ili kuzima yoyote kati ya hizi.

## Panga vitu

**Kwa nukta.** {{cmd:ALIGN}} (`AL`, au {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): chagua vitu kisha bonyeza {{key:Enter}}, kisha bofya nukta juu yake (chanzo) na mahali inapopaswa kwenda (lengwa).

- Jozi moja inavisogeza. Bonyeza {{key:Enter}} kwenye `Specify second source point` kusimama hapo.
- Jozi mbili pia zinavigeuza, hivyo mstari kati ya nukta mbili za chanzo unalala kwenye mstari kati ya nukta mbili za lengwa. CadCraft kisha inauliza `Scale objects based on alignment points?`: `Y` huvifanya vikubwe au vidogo kwa kiasi hicho pia.
- Jozi ya tatu huvigeuza kioo ikiwa nukta zake mbili ziko pande tofauti za mstari huo.

**Kingo na nafasi.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (au `ALIGNPANEL`) hufungua paneli ndogo juu ya mchoro. Chagua vitu, kisha:

- chagua cha kupangia kwenye {{ui:Align to}} (uteuzi wote, kitu cha kwanza au cha mwisho ulichochagua, au nukta uliyobofya) kisha bofya {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} au {{ui:Bottom}};
- au chagua {{ui:Equal gaps}} au {{ui:Equal centres}} kisha bofya {{ui:Across}} au {{ui:Up and down}}: vitu viwili vya nje vinabaki, vilivyobaki vinapangwa kwa usawa kati yao (vitu vitatu angalau).

Kila bofya ni hatua moja ya kutendua, na uteuzi unabaki, hivyo unaweza kujaribu nyingine. Kila kitu kinahesabiwa kwa kisanduku chake cha mipaka, katika UCS ikiwa imewekwa. Kwenye mstari wa amri, sawa na hiyo ni {{cmd:ALIGNTO}} na {{cmd:DISTRIBUTE}}.

## Futa na tenganisha

- {{cmd:ERASE}} (`E`, au {{key:Delete}}) huondoa vitu vilivyochaguliwa.
- {{cmd:EXPLODE}} (`X`) hugawanya polilaini kuwa mistari na mapinde, marejeo ya bloku kuwa vitu vyake, na kipimo kuwa mistari, vichwa vya mishale na maandishi. Vipimo vilivyogawanywa havipimi tena vyenyewe.

## Makosa ya kawaida

- **Kuandika umbali bila `@` kwenye nukta ya pili.** `600,0` ni nukta kamili 600,0, si "600 kulia". Tumia `@600,0`, au `600` tupu huku msalaba ukielekeza upande sahihi.
- **Mzunguko ulienda upande mbaya.** Pembe chanya hugeuka kinyume cha saa.
- **Kutendua kuliondoa zaidi ya ulivyotarajia.** Kutendua moja huchukua amri nzima ya mwisho, pamoja na kila nakala iliyotengenezwa nayo.
- **Amri haikuomba kuchagua vitu.** Vitu vilikuwa tayari vimechaguliwa, kwa hiyo ilivitumia. Bonyeza {{key:Esc}} kwanza ili kuanza bila chochote kilichochaguliwa.
