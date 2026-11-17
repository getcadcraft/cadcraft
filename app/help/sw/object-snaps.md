---
title: Nasa pointi kwenye vitu
summary: Tumia vinasa vya vitu, Ortho na gridi kuchagua ncha, vituo vya kati, vituo na makutano kwa usahihi kwa kipanya.
keywords: osnap, object snap, endpoint, midpoint, center, intersection, perpendicular, quadrant, nearest, node, insertion, ortho, grid, f3, f8, f7, polar tracking, polar, polarang, object snap tracking, otrack, tracking, f10, f11
from: 3cf17f94
---

## Unachokwenda kutengeneza

Mstatili wenye diagonali zake mbili, duara lililowekwa katikati pale zinapovuka, na mstari kutoka katikati ya upande mmoja hadi kwenye duara. Kila nukta inachaguliwa kwa kipanya, na kila nukta ni sahihi.

## Jinsi kunasa kunavyofanya kazi

Amri inapoomba nukta, CadCraft inatafuta pointi za kunasa ndani ya takriban pikseli 10 kutoka msalaba. Ikiipata, alama na lebo huonekana ("Ncha", "Makutano"), na bofya inatua **kwa usahihi** kwenye nukta hiyo, si pale msalaba ulipo.

Vinasa vinawashwa pale {{ui:Snap}} katika upau wa hali inapokuwa imebonyezwa. {{key:F3}} huwasha na kuzima.

Vinasa unavyoweza kutumia ni:

| Kinasa | Hutua kwenye |
|---|---|
| Ncha | Ncha za mistari, matao na sehemu za polilaini |
| Kituo cha kati | Katikati ya mistari, matao na sehemu za polilaini |
| Kituo | Kituo cha duara na matao, na cha sehemu za tao za polilaini |
| Robo | Pointi za digrii 0, 90, 180 na 270 za duara na matao |
| Makutano | Pale vitu viwili vinapovuka |
| Pembe-wima | Nukta kwenye kitu iliyo mraba kwa nukta ya mwisho (inahitaji nukta ya msingi) |
| Tanjenti | Nukta kwenye duara au tao pale mstari kutoka nukta ya mwisho unapogusa tu. Bila nukta ya mwisho bado (nukta ya kwanza ya mstari), alama inasema "deferred": nukta ya kugusa inahesabiwa mara nukta inayofuata inapojulikana, hivyo mstari kutoka Tanjenti hadi Tanjenti unagusa miduara yote miwili |
| Karibu zaidi | Nukta iliyo karibu zaidi kwenye kitu chochote |
| Nodi | Vitu vya nukta |
| Uingizaji | Nukta ya kuingiza ya maandishi na marejeleo ya bloku |

Vyote vimewashwa kwa chaguo-msingi isipokuwa Tanjenti na Karibu zaidi. Karibu zaidi mara nyingi hushinda pale unapotaka kitu kingine; washa Tanjenti unapoihitaji.

## Chagua vinasa vyako

1. Bofya mshale mdogo ulio karibu na {{ui:Snap}} katika upau wa hali. Orodha ya {{ui:Object snaps}} inafunguka.
2. Tia alama au ondoa alama kwenye vinasa. Mabadiliko yanaanza mara moja.
3. Bofya mshale tena kufunga orodha.

CadCraft inakumbuka chaguo lako, na mipangilio ya {{ui:Grid}}, {{ui:Ortho}} na {{ui:Snap}}, kwenye kivinjari hiki.

## Hatua

1. Andika `REC` kisha bonyeza {{key:Enter}}.
2. Andika `0,0` kisha bonyeza {{key:Enter}}.
3. Andika `@4000,3000` kisha bonyeza {{key:Enter}}. Mstatili unaonekana.
4. Bofya {{ui:Extents}}.
5. Andika `L` kisha bonyeza {{key:Enter}}.
6. Sogeza msalaba hadi kona ya chini kushoto. Alama inaonyesha "Ncha". Bofya.
7. Sogeza hadi kona ya juu kulia hadi "Ncha" ionekane. Bofya.
8. Bonyeza {{key:Enter}} kumaliza mstari.
9. Bonyeza {{key:Enter}} tena kurudia {{cmd:LINE}}, kisha chora diagonali nyingine kutoka kona ya chini kulia hadi kona ya juu kushoto kwa njia ile ile.
10. Andika `C` kisha bonyeza {{key:Enter}} kuanza duara.
11. Sogeza msalaba pale diagonali zinapovuka. Alama inaonyesha "Makutano". Bofya.
12. Andika `800` kisha bonyeza {{key:Enter}}.

Unapaswa kuona duara lililowekwa katikati kabisa ya makutano.

13. Andika `L` kisha bonyeza {{key:Enter}}.
14. Sogeza hadi katikati ya upande wa kushoto wa mstatili hadi "Kituo cha kati" ionekane. Bofya.
15. Sogeza msalaba juu ya duara, upande wake wa kushoto. Alama inaonyesha "Pembe-wima" au "Robo"; hapa ni nukta moja. Bofya.
16. Bonyeza {{key:Enter}}.

Mstari mpya unatoka katikati ya upande wa kushoto na kusimama kabisa kwenye duara.

## Ruka kinasa kwa bofya moja

Shikilia {{key:Shift}} unapobofya. Vinasa vya vitu vinapuuzwa kwa bofya hiyo, na nukta inaenda kabisa pale msalaba ulipo (au kwenye mwelekeo wa Ortho, ikiwa Ortho imewashwa).

## Ortho

{{ui:Ortho}} ({{key:F8}}) huweka nukta inayofuata ikienda moja kwa moja kando au juu na chini kutoka nukta ya msingi. Inatumika kwa bofya na kwa uingizaji wa umbali wa moja kwa moja (nambari tupu iliyoandikwa kwenye ombi). Vinasa vya vitu vinashinda Ortho: alama ya kinasa ikionekana, bofya inaenda kwenye kinasa.

## Ufuatiliaji wa polar

{{ui:Polar}} ({{key:F10}}) ni Ortho katika pembe nyingi zaidi. Amri inapokuwa na nukta ya msingi (nukta ya mwisho ya mstari, au nukta ya msingi ya kuhamisha), kielekezi hujipanga pale kinapokaribia mwelekeo kutoka hapo katika kizidishi cha hatua ya polar: mstari wenye nukta unaonekana, na lebo karibu na msalaba inasoma `Polar: 1200 < 30°`. Bofya kutumia nukta hiyo, au andika umbali: `1200` inaenda hasa 1200 kwenye mwelekeo huo.

Hatua ni 90° mpaka ubadilishe: andika {{cmd:POLARANG}}, bonyeza {{key:Enter}}, kisha andika `30` (au 45, 22.5, 15 …). Polar na Ortho hazikubaliani: kuwasha moja kunazima nyingine.

## Ufuatiliaji wa kinasa cha kitu

{{ui:Track}} ({{key:F11}}) hupanga kielekezi kwenye pointi za kunasa ulizokaa juu yake, ili uweze kuchagua nukta iliyo sawa na kona moja na juu ya nyingine bila kuchora mistari msaidizi.

1. Washa {{ui:Snap}} na {{ui:Track}}, kisha anzisha amri inayoomba nukta (`L`).
2. Weka kielekezi juu ya nukta ya kunasa, kama kona, kwa nusu sekunde, bila kubofya. Msalaba mdogo unaiweka alama: imekamatwa. Kaa juu yake tena ili kuiachia.
3. Sogeza kielekezi moja kwa moja mbali nayo, kwa mlalo au wima. Mstari wenye nukta unafuata kielekezi na lebo inasoma `Track: 600 < 90°`. Bofya, au andika umbali.
4. Kamata nukta ya pili, kisha sogeza hadi pale wima kutoka moja inapokutana na mlalo kutoka nyingine: kielekezi kinanasa kwenye makutano hayo (`Track: where two lines meet`).

Kwa {{ui:Polar}} pia kuwashwa, nukta zilizokamatwa zinafuatilia kila pembe ya polar. Hadi nukta saba zinahifadhiwa, hadi amri iishe. {{key:Shift}} huzima ufuatiliaji kwa bofya moja, kama vinasa.

## Gridi

{{ui:Grid}} ({{key:F7}}) inaonyesha gridi ya mistari nyuma ya mchoro, na mistari minene kila mstari wa tano; nafasi yake inabadilika unapokuza. Ni mwongozo tu hadi uwashe {{ui:Grid snap}} ({{key:F9}}): ndipo bofya zinatua kwenye nukta ya gridi iliyo karibu zaidi, isipokuwa kinasa cha kitu kichukue nukta kwanza.

## Vitufe vya kazi kwenye kompyuta yako

{{key:F9}} ni Kunasa gridi, {{key:F10}} ni Polar na {{key:F11}} ni Fuatilia.

:::mac
Kwenye Mac, F3, F7, F8 na F9 kwa kawaida hudhibiti Mission Control na midia. Shikilia **fn** pamoja na kitufe hicho, au washa vitufe vya kawaida vya kazi, kama ilivyoelezwa katika [Vitufe, panya na padi za kugusa](common:keys). Vitufe vya upau wa hali vinafanya kazi kila wakati.
:::

:::firefox
Katika Firefox, F7 pia ni kitufe cha kuvinjari kwa kielekezi cha maandishi (caret browsing). Firefox ikiuliza kama uwashe caret browsing, chagua **Hapana**. Tumia kitufe cha {{ui:Grid}} ikiwa swali hilo linarudi mara kwa mara.
:::

:::touch
Kwenye skrini ya kugusa hakuna kuelea, kwa hivyo alama ya kinasa huonekana tu pale kidole kinapogusa. Kuza karibu kwa malengo madogo, au andika kuratibu badala yake.
:::

## Makosa ya kawaida

- **Bofya ilienda kwenye nukta isiyo sahihi.** Angalia lebo ya alama kabla ya kubofya: Ncha inashinda Kituo cha kati pale vyote viwili viko karibu. Kuza karibu, au ondoa alama vinasa usivyohitaji.
- **Hakuna alama inayoonekana.** {{ui:Snap}} imezimwa, au kinasa unachotaka hakijatiwa alama, au kitu kiko kwenye tabaka lililozimwa au lililoganda.
- **Vinasa vinanasa kitu kisichofaa katika mchoro uliojaa.** Kuza karibu. Umbali wa kinasa unapimwa kwa pikseli za skrini, kwa hivyo kukuza karibu kunaufanya uwe mdogo kwenye mchoro.
- **Kutarajia Shift itoe mstari ulionyooka.** Katika CadCraft, Shift huzima vinasa kwa bofya moja. Tumia {{ui:Ortho}} kwa mistari iliyonyooka.
- **Kutarajia nukta zitue kwenye nukta za gridi.** Washa {{ui:Grid snap}} ({{key:F9}}), au andika kuratibu kwa namba za pande zote.
