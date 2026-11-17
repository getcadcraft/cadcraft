---
title: Kidirisha cha Sifa
summary: Ona na ubadilishe kila kitu kuhusu vitu vilivyochaguliwa, vingi kwa wakati mmoja: kuratibu pamoja na Z, ukubwa, maandishi, mipangilio ya vipimo, uwazi na zaidi. Sehemu zinakubali misemo na urefu wenye vitengo.
keywords: totals, urefu wa jumla, eneo la jumla, jumla, urefu wa uteuzi, sifa, palette ya sifa, ctrl+1, pr, ch, mo, ddmodify, inatofautiana, uteuzi wa haraka, pickadd, kuratibu, z, mwinuko, unene, uwazi, nyenzo, kiungo, msemo, quickcalc, kona, mtindo wa kipimo, uvumilivu, desimali
from: 10d6a829
---

## Utakachojifunza

Jinsi ya kufungua kidirisha cha Sifa, kubadilisha kitu kimoja au mia kwa hatua moja, kuandika kuratibu kamili (pamoja na Z), kutumia misemo na vitengo katika sehemu yoyote ya nambari, na kile kila aina ya kitu inaonyesha.

## Fungua

Kidirisha kipo upande wa kulia. Ili kukileta mbele:

- Bonyeza {{key:Mod+1}}, au chapa {{cmd:PROPERTIES}} (au `PR`, `CH`, `MO`).
- Bofya mara mbili kitu (maandishi na multileader hufungua kihariri chao cha maandishi badala yake).

Kidirisha ni kama paneli nyingine zinazohamishika: buruta mpini wake ili kukiegemeza kushoto, kulia au chini, au kiangushe juu ya mchoro ili kielee (angalia [Panga paneli na utumie kifuatiliaji cha pili](common:arrange-panels)).

### Kikunje

Kitufe cha pini kilicho juu kulia wa kidirisha kinawasha **kuficha kiotomatiki**: kidirisha kinajikunja hadi ukanda kwenye ukingo wa kulia, na mchoro unapata nafasi. Elekeza kwenye ukanda (au bonyeza {{key:Mod+1}}) nacho kinafunguka juu ya mchoro; ukiondoka kinajikunja tena. Bofya pini tena kukiweka wazi. {{cmd:PROPERTIESCLOSE}} pia hukikunja.

## Sehemu

Sifa zimepangwa katika sehemu unazoweza kukunja: **Jumla**, **Jiometri**, **Maandishi**, **Mistari na mishale**, **Kutoshea**, **Vitengo vya msingi**, **Vitengo mbadala**, **Uvumilivu**, **Mchoro**, **Nyingine**, na kwa bloku **Sifa za bloku** na **Kipengele cha maktaba**. Bofya jina la sehemu ili kuikunja au kuifungua; CadCraft inakumbuka zipi ulizokunja.

Buruta mstari mwembamba kati ya majina na thamani ili kufanya majina yawe mapana au membamba. Bofya mara mbili juu yake kuurudisha. Kwa kibodi, weka umakini juu yake na utumie vitufe vya mishale.

## Badilisha thamani

1. Bofya mstari. Kichwa kinasoma "Mstari".
2. Bofya kwenye {{ui:Urefu}}. Unapohariri, sehemu inaonyesha thamani kamili, si ile iliyozungushwa.
3. Chapa `2500` kisha bonyeza {{key:Enter}}. Mstari sasa una urefu wa 2500, ukibaki na nukta yake ya kuanza na pembe yake.

{{key:Enter}} au kubofya mahali pengine kunatumia thamani; {{key:Esc}} inarudisha thamani ya zamani. Kila mabadiliko ni hatua moja ya kutendua.

### Misemo na vitengo

Kila sehemu ya nambari inakubali zaidi ya nambari tupu:

| Unachoandika | Unachopata |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inchi, kwenye mchoro wa futi na inchi) |
| `900mm`, `3.5m`, `2ft` | Inabadilishwa kuwa vitengo vya mchoro |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (sehemu za pembe) |
| `0.5r`, `100g` | Radiani na gradi, kama digrii |

Urefu wenye kitengo unahitaji mchoro kuwa na vitengo: weka {{ui:Vitengo}} chini ya {{ui:Vitu vipya}} (bila kitu kilichochaguliwa) kwanza. Ingizo baya linakataliwa kwa noti chini ya kidirisha na hakuna kinachobadilika; kamwe halihifadhiwi kama 0. Kazi: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; pembe ziko kwa digrii.

## Badilisha vitu vingi kwa wakati mmoja

1. Chagua vitu kadhaa, kwa mfano mistari 8 na vipimo 4.
2. Kichwa kinasema "vitu 12", na orodha juu inatoa **Vyote (12)**, **Mstari (8)** na **Kipimo (4)**.
3. **Vyote** inaonyesha kila kitu ambacho kila kitu kinacho (tabaka, rangi, aina ya mstari…). Chagua **Kipimo (4)** kuona mipangilio ya vipimo.
4. Badilisha thamani, kwa mfano {{ui:Desimali}} kuwa `1`.

Vipimo vyote vinne vinabadilika, kwa hatua moja ya kutendua. Sehemu inayosoma **Inatofautiana** inamaanisha vitu vinatofautiana; kuandika thamani kunaiweka kwa vyote. Vitu vilivyo kwenye tabaka zilizofungwa vinaachwa kama vilivyo, na noti inasema vingapi.

## Jumla za uteuzi

Ukiwa na vitu kadhaa vilivyochaguliwa, sehemu ya {{ui:Jumla}} juu inasema:

- **Vitu**: vingapi vya kila aina, kwa mfano "mistari 8, polilaini 2, duara 1".
- **Urefu wa jumla**: mistari, matao na polilaini zikijumlishwa (splines zinahesabiwa pia), na vitu vingapi hivyo ni.
- **Eneo la jumla**: vilivyofungwa vikijumlishwa: duara, duaradufu nzima, polilaini zilizofungwa na mijazo (mashimo ya ujazo yanaondolewa).

Ziko katika muundo wa urefu wa mchoro (futi na inchi mchoro unapozitumia; maeneo basi ni inchi za mraba na futi za mraba). Upau wa hali unaonyesha urefu na eneo lilelile kila wakati vitu vimechaguliwa; {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Urefu na eneo la uteuzi}} › {{ui:Imefichwa}} inalizima hilo. Kwa kitu kimoja, {{ui:Jiometri}} inaonyesha urefu na eneo lake yenyewe, kama awali.

## Kuratibu

Kila nukta inaonyesha **X**, **Y** na **Z**: mwanzo na mwisho wa mstari, vituo, sehemu za kuingiza, nafasi za maandishi, kona ya sasa ya polilaini. Mistari pia inaonyesha **Delta X**, **Delta Y** na **Delta Z** (za kusoma tu). Polilaini na mijazo zina **Mwinuko** (Z moja kwa kitu kizima).

Kitufe cha msalaba kando ya jina la nukta kinakuruhusu kuichagua kwenye mchoro badala yake: bofya, kisha bofya nafasi mpya (snaps zinafanya kazi). Thamani ni kuratibu za dunia.

## Kwa ujumla

| Sehemu | Ni nini |
|---|---|
| {{ui:Tabaka}}, {{ui:Rangi}}, {{ui:Aina ya mstari}}, {{ui:Skeli ya aina ya mstari}}, {{ui:Unene wa mstari}} | Kama kwenye kidirisha cha tabaka; {{ui:Kwa tabaka}} hufuata tabaka |
| {{ui:Uwazi}} | Kwa tabaka, kwa bloku, au 0 hadi 90% |
| {{ui:Unene}} | Jinsi mistari, duara, matao, polilaini, nukta na maandishi yanavyoenea kwenye Z |
| {{ui:Nyenzo}} | Kwa tabaka, kwa bloku, Global au jina ambalo mchoro ulilileta |
| {{ui:Mtindo wa kuchapisha}} | Kusoma tu: michoro inachapisha kwa rangi, kupitia [jedwali la mtindo wa kuchapisha](topic:plot-pdf#plot-style-tables) la karatasi |
| {{ui:Kiungo}} | Anwani ya wavuti iliyohifadhiwa na kitu |

## Kila aina inaonyesha nini

| Kilichochaguliwa | Unachoweza kubadilisha |
|---|---|
| Mstari | X, Y, Z ya mwanzo na mwisho; urefu; pembe |
| Duara | Kituo; radius; kipenyo; mzunguko; eneo (kila kimoja kinaweka radius) |
| Tao | Kituo; radius; pembe ya mwanzo na mwisho; pembe jumla; chord (inaonyesha urefu wa tao na eneo) |
| Duaradufu | Kituo; radius kuu na ndogo; uwiano wa radius; pembe ya mhimili mkuu; pembe ya mwanzo na mwisho |
| Polilaini | Kivinjari cha vertex (hapa chini); upana wa kimataifa; mwinuko; kufungwa; eneo ikiwa imefungwa (inapima kuhusu kituo chake) |
| Maandishi | Maudhui; mtindo; kupanga; kimo; mzunguko; kipengele cha upana; pembe ya kuinamisha; upana uliofafanuliwa; nafasi ya mistari; annotative; nafasi |
| Marejeo ya bloku | Sehemu ya kuingiza; mzunguko; kipimo X, Y, Z na kipimo sawa; thamani za sifa |
| Kujaza | Muundo; kipimo; pembe; asili; ushirikiano; utambuzi wa visiwa; rangi ya usuli; mwinuko |
| Kipimo | Tazama hapa chini |
| Multileader | Maandishi; kimo; upana; upande wa maandishi; ukubwa wa ncha ya mshale; umbali wa kutua; nukta ya ncha ya mshale |
| Viewport | Kipimo; kituo na ukubwa kwenye karatasi; kituo cha mwonekano kwenye modeli; imewashwa; onyesho limefungwa |

### Vertex za polilaini

{{ui:Kona ya sasa}} inaonyesha vertex ipi sehemu zilizo chini yake ni zake. Tumia vitufe vya mishale, au chapa nambari, kuhamia vertex nyingine; hakuna kikomo cha ngapi. Kila vertex ina X, Y, upana wa sehemu ya mwanzo na mwisho, na bulge ya sehemu inayoanzia hapo (0 = moja kwa moja).

## Vipimo

Kipimo kinaonyesha **Mtindo wa kipimo** wake, kinachopima, nukta zake, na kila mpangilio:

- **Mistari na mishale:** mshale kwa kila ncha, ukubwa wa mshale, ukubwa wa alama, rangi na unene wa mistari ya kipimo na mistari ya kiendelezi, kuficha nusu yoyote au mstari wowote wa kiendelezi, kuhamishwa kwa mstari wa kiendelezi na urefu wake.
- **Maandishi:** kubatilisha (acha tupu kwa thamani iliyopimwa; `<>` inawakilisha hiyo ndani ya maandishi yako mwenyewe), mtindo, rangi, kimo, kuhamishwa, nafasi ya wima na mlalo, daima mlalo, mzunguko, ujazo wa usuli.
- **Kutoshea:** kipimo cha jumla, nafasi ya mistari ya msingi, kinachosogea nafasi inapokosekana, kusogea kwa maandishi.
- **Vitengo vya msingi:** muundo, desimali, kuzungusha, kiambishi awali, kiambishi tamati, kipimo cha kupima, alama ya desimali, kuzuia sufuri za mwanzo na za mwisho; kwa pembe, muundo wa pembe na desimali zake.
- **Vitengo mbadala:** kimewashwa au kimezimwa, muundo, desimali, kizidishi (25.4 hubadilisha inchi kuwa milimita), kuzungusha, kiambishi awali na tamati.
- **Uvumilivu:** hakuna, linganifu, mkengeuko, mipaka au msingi, pamoja na thamani za juu na chini, desimali, kimo na nafasi.

Kubadilisha yoyote kati ya hizo kwenye kipimo kilichofunguliwa kunaondoa mchoro ambao programu nyingine ilikitengeneza, na CadCraft inakichora upya.

:::note
Nafasi ya mlalo ya maandishi (kando ya mstari wa kwanza au wa pili wa kiendelezi) na maandishi chini ya mstari huchorwa kwenye vipimo vya mstari na vilivyopangwa; kwenye vipimo vingine huhifadhiwa na kuandikwa lakini bado hayachorwi. Chaguo za Kutoshea huhifadhiwa na kuandikwa lakini bado hazichorwi: CadCraft huweka maandishi kwa kanuni yake yenyewe (juu ya mstari, nje ikiwa hayatoshi).
:::

## Hakuna kitu kilichochaguliwa

Bila kitu kilichochaguliwa, kidirisha kinaonyesha:

- **Vitu vipya:** tabaka, rangi, aina ya mstari, unene wa mstari na kimo cha maandishi ambavyo vitu vipya vinapata; vitengo vya mchoro na muundo wa urefu; aina ya mstari na unene wa tabaka ya sasa; ukubwa wa vipimo vipya. Kwenye karatasi, jina la karatasi, karatasi na mwelekeo vinakuja kwanza.
- **Mwonekano:** kituo, kimo na upana wa kile kilichopo kwenye skrini. Andika thamani ili kuhamisha mwonekano hapo.
- **Nyingine:** ikoni ya UCS imewashwa au imezimwa, UCS (daima Dunia: CadCraft bado haina mifumo ya kuratibu ya mtumiaji) na kipimo cha ufafanuzi.

## Vifungo vilivyo juu

| Kitufe | Hufanya |
|---|---|
| Faneli | {{cmd:QSELECT}}: chagua kwa aina na sifa |
| Kishale | {{cmd:SELECT}}: chagua vitu kwenye mstari wa amri |
| Pamoja au 1 | Kama bofya inaongeza kwenye uteuzi (pamoja) au inabadilisha (1); mpangilio uleule wa Mipangilio, {{ui:CadCraft}} |
| Pini | Kuficha kiotomatiki, hapo juu |

## Makosa ya kawaida

- **Kuandika kwenye sehemu hakukufanya chochote.** Bonyeza {{key:Enter}} au bofya mahali pengine kuitumia. Sehemu nyekundu na noti vinamaanisha ingizo limekataliwa.
- **Urefu wenye kitengo umekataliwa.** Mchoro hauna vitengo. Weka {{ui:Vitengo}} bila kitu kilichochaguliwa.
- **Ni Tabaka na Rangi pekee zinazoonekana.** Aina kadhaa za vitu zimechaguliwa na **Vyote** imechaguliwa. Chagua aina moja kwenye orodha juu.
- **Baadhi ya vitu havikubadilika.** Viko kwenye tabaka iliyofungwa. Fungua tabaka kwenye kidirisha cha tabaka.
- **Herufi ulizoandika ziliingia kwenye sehemu.** Wakati sehemu ina kishale, vitufe vinaandika hapo. Bonyeza {{key:Enter}} au {{key:Esc}}, kisha chapa amri.
