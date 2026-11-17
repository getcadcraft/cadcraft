---
title: Ofseti, punguza, ongeza urefu, kunja kona na kata kona kwenye kuta
summary: Geuza mistari mmoja kuwa kuta mbili kwa Ofseti, safisha kona kwa Kunja kona, na kata na urefushe mistari kwa Punguza na Ongeza urefu.
keywords: ofseti, offset, punguza, trim, ongeza urefu, extend, kunja kona, fillet, kata kona, chamfer, bevel, vunja, breakatpoint, lengthen, kuta, kona, kata, sambamba, radius, usafishaji
from: c6c5cbd0
---

## Utakachotengeneza

Chumba kidogo chenye kuta za unene 200: uso wa ndani unachorwa, uso wa nje unapatikana kwa ofseti, kona zinasafishwa, na mlango unakatwa kwenye ukuta mmoja.

## Chora uso wa ndani

1. Andika `L` kisha bonyeza {{key:Enter}}.
2. Andika `0,0` kisha bonyeza {{key:Enter}}.
3. Andika `@5000,0` kisha bonyeza {{key:Enter}}.
4. Andika `@0,4000` kisha bonyeza {{key:Enter}}.
5. Andika `@-5000,0` kisha bonyeza {{key:Enter}}.
6. Andika `C` kisha bonyeza {{key:Enter}}.
7. Bofya {{ui:Extents}}.

Una mistari minne tofauti. (Polilaini iliyofungwa ingeweza kupanuliwa kwa mara moja; mistari tofauti inaonyesha jinsi Kunja kona inavyosafisha kona.)

## Panua uso wa nje kwa Ofseti

1. Andika `O` kisha bonyeza {{key:Enter}}. Kidokezo kinasomeka `Specify offset distance [Through] <Through>:`.
2. Andika `200` kisha bonyeza {{key:Enter}}.
3. Kwenye `Select object to offset`, bofya mstari wa chini.
4. Kwenye `Specify point on side to offset`, bofya mahali popote chini yake. Mstari sambamba unaonekana 200 chini.
5. Bofya mstari wa kulia, kisha bofya upande wake wa kulia.
6. Bofya mstari wa juu, kisha bofya juu yake.
7. Bofya mstari wa kushoto, kisha bofya upande wake wa kushoto.
8. Bonyeza {{key:Enter}} kumaliza amri.

Unapaswa kuona mistari minne ya nje, kila moja ikiwa na urefu sawa na mstari wake wa ndani, hivyo kona za nje hazikutani.

:::tip
Bonyeza {{key:Enter}} kwenye kidokezo cha umbali ili kutumia umbali wa mwisho tena. Andika `T` kwa Through: kisha kila nakala inapita kwenye nukta unayobofya, kwa umbali wowote huo.
:::

{{cmd:OFFSET}} inafanya kazi kwenye mistari, mapinde, miduara na polilaini. Kuweka ofseti kwenye polilaini iliyofungwa kunapanua muhtasari mzima, pamoja na kona.

## Safisha kona za nje kwa Kunja kona

{{cmd:FILLET}} inaunganisha mistari miwili kwenye kona: inapunguza au kurefusha zote mbili ili zikutane. Kwa radius ya 0 kona inakuwa ya mraba.

1. Andika `F` kisha bonyeza {{key:Enter}}. Kidokezo kinasomeka `Select first line [Radius]:`.
2. Ikiwa kunja kwako cha mwisho kilitumia radius, andika `R`, bonyeza {{key:Enter}}, andika `0` kisha bonyeza {{key:Enter}}.
3. Bofya mstari wa chini wa nje karibu na ncha yake ya kulia.
4. Kwenye `Select second line`, bofya mstari wa kulia wa nje karibu na ncha yake ya chini.

Mistari miwili sasa inakutana kwenye kona kali, na amri inaisha.

5. Bonyeza {{key:Enter}} kurudia {{cmd:FILLET}}, kisha fanya kona inayofuata.
6. Rudia hadi kona zote nne za nje zikutane.

Bofya kila mstari kwenye sehemu unayotaka **kuhifadhi**. Kwa radius kubwa kuliko 0, Kunja kona inaongeza upinde kati ya mistari badala yake.

:::tip
Andika `M` kwenye kidokezo cha kwanza ili kufanya kona zote nne kwa mara moja, au chora uso wa nje kama polilaini moja iliyofungwa na uandike `P`: kila kona inafanywa kwa wakati mmoja. Shikilia {{key:Shift}} unapobofya mstari wa pili kwa kona kali bila kubadilisha radius.
:::

## Kata kona kwa Chamfer

{{cmd:CHAMFER}} hukata kona kwa mstari ulionyooka.

1. Andika `CHA` kisha bonyeza {{key:Enter}}.
2. Andika `D` kisha bonyeza {{key:Enter}}. Andika `300` kisha bonyeza {{key:Enter}} kwa umbali wa kwanza, kisha bonyeza {{key:Enter}} tena kutumia 300 kwa wa pili pia.
3. Bofya mstari wa juu wa ndani karibu na ncha yake ya kushoto, kisha mstari wa kushoto wa ndani karibu na ncha yake ya juu.

Kona inakatwa nyuma 300 kwenye kila mstari na mstari wa kata unaziunganisha. Andika `A` badala ya `D` kutoa urefu kwenye mstari wa kwanza na pembe.

## Kata mlango kwa Punguza

Kwanza chora nguzo mbili za mlango kuvuka ukuta wa chini, kisha punguza mistari ya ukuta kati yake.

1. Andika `L` kisha bonyeza {{key:Enter}}.
2. Andika `1000,200` kisha bonyeza {{key:Enter}}.
3. Andika `@0,-600` kisha bonyeza {{key:Enter}}, kisha bonyeza {{key:Enter}} tena.
4. Bonyeza {{key:Enter}} kurudia {{cmd:LINE}}.
5. Andika `1900,200` kisha bonyeza {{key:Enter}}.
6. Andika `@0,-600` kisha bonyeza {{key:Enter}}, kisha bonyeza {{key:Enter}} tena.

Sasa una mistari miwili mifupi inayovuka ukuta wa chini umbali wa 900 kutoka nyingine.

7. Andika `TR` kisha bonyeza {{key:Enter}}. Historia inasema `Current settings: Quick mode, edges: No extend`.
8. Bofya mstari wa ndani wa chini kati ya nguzo mbili. Kipande hicho kinatoweka. (Tulia kielekezi juu yake kwanza: kipande kitakachoondoka kinageuka kijivu na chenye mistari-nukta.)
9. Bofya mstari wa nje wa chini kati ya nguzo mbili. Kipande hicho nacho kinatoweka.
10. Bofya sehemu ya kila nguzo inayotoka juu ya ukuta, na sehemu iliyo chini yake.
11. Bonyeza {{key:Enter}} kumaliza amri.

Unapaswa kuona ufunguzi wa 900 kwenye ukuta wa chini, huku nguzo zikifunga ncha za ukuta.

Katika hali ya Haraka (chaguo-msingi), Punguza haikuulizi kwanza uchague kingo za kukatia: kila kitu kinachoonekana ni kingo ya kukatia. Chagua kipande unachotaka kiondoke, au buruta njia kupitia vipande vingi ili kuvipunguza vyote kwa mara moja. Andika `U` kisha bonyeza {{key:Enter}} kurudisha uchaguzi au buruta wa mwisho bila kuacha amri. Uzio, kuvuka, kingo ulizochagua, na {{key:Shift}} kurefusha yako katika [Punguza na urefushe](topic:trim-and-extend).

## Refusha mstari hadi ukutane na mwingine

{{cmd:EXTEND}} hurefusha mstari, upinde au ncha ya polilaini hadi ukutane na kitu kinachofuata kwenye mwelekeo huo.

1. Andika `L` kisha bonyeza {{key:Enter}}.
2. Andika `1000,2000` kisha bonyeza {{key:Enter}}.
3. Andika `@2000,0` kisha bonyeza {{key:Enter}}, kisha bonyeza {{key:Enter}} tena. Mstari unasimama 2000 kabla ya ukuta wa kulia.
4. Andika `EX` kisha bonyeza {{key:Enter}}.
5. Bofya mstari mpya karibu na ncha yake ya kulia.
6. Bonyeza {{key:Enter}} kumaliza amri.

Mstari sasa unafika hadi uso wa ndani wa ukuta wa kulia. Kila kitu kinachoonekana ni mpaka; chagua karibu na ncha inayopaswa kukua. Ndani ya {{cmd:TRIM}}, {{key:Shift}}+bofya hufanya jambo hilo hilo.

## Vunja na urefushe

{{cmd:BREAK}} (`BR`, au {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) hukata pengo bila kingo ya kukatia: bofya kitu mahali pengo linapoanzia (bofya hiyo ni nukta ya kwanza), kisha bofya mahali linapoishia. Kwenye duara, sehemu inayokwenda kinyume cha saa kutoka nukta ya kwanza hadi ya pili ndiyo inayoondoka. `F` kwenye swali la pili hukuruhusu kutoa tena nukta ya kwanza, na {{cmd:BREAKATPOINT}} hugawanya kitu kuwa viwili kwenye nukta moja bila pengo.

{{cmd:LENGTHEN}} (`LEN`) hubadilisha urefu kwenye ncha moja:

1. Andika `LEN` kisha bonyeza {{key:Enter}}. Bofya mstari kuona urefu wake wa sasa; kidokezo kinauliza tena.
2. Chagua namna: `DE` (Delta: kiasi cha kuongeza, hasi kukiondoa; `A` kwa pembe ya upinde), `P` (Percent: 50 huupunguza nusu), `T` (Total: urefu unaopaswa kuwa) au `DY` (Dynamic: buruta ncha).
3. Bofya kila kitu karibu na ncha inayopaswa kusogea. `U` inarudisha la mwisho; {{key:Enter}} inamaliza.

Mistari, mapinde na polilaini wazi (sehemu yao ya mwisho) vinaweza kurefushwa.

## Makosa ya kawaida

- **Mstari mzima ulitoweka.** Hakuna kilichoukatiza, kwa hiyo hali ya Haraka iliufuta. Andika `U` kuurudisha; hakikisha mstari wa kukatia unaukatiza kweli (kuza ndani) na kwamba hauko kwenye tabaka lililozimwa.
- **"No boundary in that direction."** Refusha haikupata chochote cha kugonga. Chagua karibu zaidi na ncha inayopaswa kukua.
- **"Radius is too large."** Upinde ungepita ncha ya mojawapo ya mistari. Tumia radius ndogo.
- **"Only the first or last segment of an open polyline can be cut back."** Chagua sehemu mbili za polilaini zilizo karibu, au andika `P` ili kuzungusha kila kona yake.
- **Ofseti ilienda upande mbaya.** Upande ni pale unapobofya baada ya kuchagua kitu. Tendua kwa {{key:Mod+Z}}, kisha ubofye upande mwingine.
- **"Cannot offset that far."** Ofseti ingegeuza upinde, duara au polilaini ndani nje. Tumia umbali mdogo.
