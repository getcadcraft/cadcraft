---
title: Panga mchoro kwa madarasa
summary: Madarasa hupanga vitu kwa njia ya pili, kuvuka tabaka (Lighting-Fixtures-Spot): yaonyeshe na uyafiche, yape rangi, aina ya mstari, unene wa mstari, kujaza na mtindo wa maandishi ambavyo vitu vinaweza kuchukua "kwa darasa", na uweke darasa ambalo vitu vipya huingia.
keywords: darasa, madarasa, CLASSES, CLS, CLASS, kwa darasa, ByClass, darasa linalotumika, tumia wakati wa kuunda, Hakuna, tabaka la usanifu, skeli ya tabaka, mwinuko, Vectorworks
from: 672de9cb
---

Tabaka zinasema *kitu kiko wapi* kwenye mchoro; madarasa yanasema *kitu ni nini*. Ukuta uliopo kwenye tabaka `Level 1` unaweza kuwa katika darasa `Walls-Exterior`, na taa ya doa kwenye tabaka `Ceiling` katika darasa `Lighting-Fixtures-Spot`. Unaweza kuficha taa zote kwenye kila tabaka kwa mara moja, au kuchapisha kila ukuta wa nje kwa mstari mzito zaidi, bila kuhamisha chochote kati ya matabaka.

Kila kitu huanza katika darasa **Hakuna**. Mchoro usio na madarasa yake wenyewe unafanya kazi kama hapo awali.

## Fungua paneli ya Madarasa

Andika `CLASSES` (au `CLS`) kisha bonyeza {{key:Enter}}, au chagua {{ui:Madarasa…}} kwenye menyu ya {{ui:Zaidi}} ya kikundi cha {{ui:Mwonekano}}. Paneli hufunguka juu ya mchoro na hubaki wazi unapochora.

- **Ongeza darasa:** andika jina lake kwenye kisanduku kilicho juu kisha bonyeza {{key:Enter}}. Alama `-` hutengeneza ngazi: `Lighting-Fixtures-Spot` iko chini ya `Lighting-Fixtures`, ambalo liko chini ya `Lighting`; ngazi zinazokosekana zinaongezwa kwa ajili yako.
- **Onyesha au ficha:** jicho lililo karibu na darasa. Kuficha darasa kunaficha kila darasa lililo chini yake, kwenye skrini na kwenye karatasi.
- **Darasa linalotumika:** kitufe cha duara. Vitu vipya unavyochora huingia kwenye darasa linalotumika.
- **Chagua darasa:** bonyeza jina lake. Vitufe na mipangilio iliyo chini ya orodha kisha hufanya kazi juu yake.

Namba iliyo mwishoni mwa kila safu mlalo ni idadi ya vitu vilivyomo kwenye darasa hilo (kwenye modeli, kwenye karatasi na ndani ya ufafanuzi wa bloku).

## Weka vitu katika darasa

Chagua vitu, chagua darasa kwenye paneli kisha chagua {{ui:Weka darasa}}. Tia alama {{ui:Kwa darasa}} kwanza ili vichukue rangi, aina ya mstari, unene wa mstari, kujaza na mtindo wa maandishi kutoka darasani. Unaweza pia:

- andika `CLASS` vitu vikiwa vimechaguliwa kisha ingiza jina la darasa (jina jipya linatengeneza darasa);
- andika `CLASS` bila kitu chochote kuchaguliwa ili kuweka darasa linalotumika; `?` huorodhesha madarasa pamoja na idadi zao;
- tumia sehemu ya {{ui:Daraja}} ya paneli ya {{ui:Sifa}}: darasa, na swichi ya … kwa darasa kwa rangi, aina ya mstari na unene wa mstari (kujaza kwa mistari ya kivuli, mtindo wa maandishi kwa maandishi);
- chagua kwa darasa kwa `QSELECT`: chagua sifa {{ui:Daraja}}.

{{ui:Chagua vitu vyake}} huchagua kila kitu cha darasa lililochaguliwa kwenye karatasi iliyo wazi (au kwenye modeli).

## Kitu kinavyochorwa: kitu, darasa, tabaka

Rangi, aina ya mstari, unene wa mstari, kujaza na mtindo wa maandishi wa kitu vinaweza kuwa **kwa darasa**, kama vinavyoweza kuwa kwa tabaka. CadCraft inatafuta kwa mpangilio huu:

1. Thamani ya kitu chenyewe, isipokuwa thamani hiyo ni kwa darasa.
2. Thamani ya darasa, kitu kinapoichukua kwa darasa na darasa likiwa nayo.
3. Thamani ya tabaka.

Darasa ambalo rangi (au aina ya mstari …) ni {{ui:Haijawekwa}} hupitisha kitu kwenye tabaka lake. Chagua darasa kisha weka {{ui:Rangi}}, {{ui:Aina ya mstari}}, {{ui:Unene wa mstari}}, {{ui:Kujaza (mistari ya kivuli)}} na {{ui:Mtindo wa maandishi}} chini ya vitufe. Tia alama {{ui:Tumia wakati wa kuunda}} ili vitu vipya vilivyochorwa katika darasa hilo vichukue zote kwa darasa.

Kila mabadiliko kwenye paneli ni hatua moja ya {{ui:Tendua}}.

## Badilisha jina na ufute

{{ui:Badilisha jina}} huhariri jina papo hapo: bonyeza {{key:Enter}} kuliweka, {{key:Esc}} kuliacha. Madarasa yaliyo chini yake hufuata (`Lighting-Spot` inakuwa `Light-Spot` wakati `Lighting` inapokuwa `Light`), na vitu vyake pamoja na ubadilishaji wowote wa viewport pia hufuata.

{{ui:Futa}} huondoa darasa na kila darasa lililo chini yake. Vitu vyao huhamia **Hakuna**. {{ui:Tendua}} moja huvirudisha vyote. **Hakuna** haiwezi kubadilishwa jina wala kufutwa.

## Tabaka za usanifu

Chini ya {{ui:Tabaka za usanifu}}, kila tabaka linaweza kubeba skeli (`1:50`) na mwinuko. Tabaka la usanifu ni tabaka la kawaida: nafasi ya modeli na karatasi zinafanya kazi kama hapo awali, na skeli na mwinuko vinahifadhiwa pamoja na mchoro kwa zana zitakazovitumia.

## Katika faili za DWG na DXF

Madarasa yanahifadhiwa katika kila toleo la DWG ambalo CadCraft huhifadhi na katika DXF (R12 na 2000). Darasa la kila kitu ni data yake ya ziada (programu `CADCRAFT_CLASS`), kwa hiyo AutoCAD na programu nyingine huliweka pamoja na kitu. Orodha ya madarasa, rangi na mwonekano vinahifadhiwa katika bloku moja isiyotumika iitwayo `CADCRAFT_CLASSES`; programu nyingine ikiiondoa bloku hiyo, CadCraft bado inapata darasa la kila kitu na madarasa yanarudi na mipangilio ya chaguo-msingi.

Programu nyingine hazijui madarasa: huchora kila kitu kwa thamani zake au za tabaka lake.

Angalia pia [Ubadilishaji wa darasa kwenye viewport](topic:viewport-overrides) na [Panga mchoro kwa tabaka](topic:layers).
