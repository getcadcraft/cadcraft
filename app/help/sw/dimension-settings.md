---
title: Weka ukubwa wa vipimo, desimali na skeli
summary: Chagua urefu wa maandishi, ukubwa wa mshale, desimali na skeli ya jumla kwa vipimo vipya, badilisha vilivyopo, na elewa jinsi mitindo ya vipimo inavyofanya kazi katika CadCraft.
keywords: mtindo wa kipimo, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, skeli ya jumla, desimali, ukubwa wa mshale, skeli ya kipimo, dimtextunit, vitengo katika maandishi, mm, cm, m, km, milimita, mita, dimlfac, dimpost
from: 8ec82a07
---

## Utakachojifunza

Maandishi ya kipimo na mishale ni makubwa kiasi gani, jinsi ya kuviweka kwa mchoro unaochapishwa kwa 1:50 au 1:100, na jinsi ya kubadilisha vipimo ulivyoshatengeneza.

## Jinsi ukubwa wa vipimo unavyofanya kazi

Kila kipimo kina seti yake ya ukubwa: urefu wa maandishi, ukubwa wa mshale, desimali, nafasi kuzunguka maandishi, umbali ambao mistari ya kiendelezi inaenda zaidi ya mstari wa kipimo, na umbali inapoanzia kutoka kwenye kitu. Chaguo-msingi zinakaribiana na mtindo wa kawaida wa ISO:

| Mpangilio | Chaguo-msingi | Amri |
|---|---|---|
| Urefu wa maandishi | 2.5 | {{cmd:DIMTXT}} |
| Ukubwa wa mshale | 2.5 | {{cmd:DIMASZ}} |
| Desimali | 2 (sufuri za mwisho zinaondolewa) | {{cmd:DIMDEC}} |
| Nafasi kuzunguka maandishi | 0.625 | {{cmd:DIMGAP}} |
| Kiendelezi zaidi ya mstari wa kipimo | 1.25 | {{cmd:DIMEXE}} |
| Kukabiliana na kitu | 0.625 | {{cmd:DIMEXO}} |
| Skeli ya jumla | 1 | {{cmd:DIMSCALE}} |

Kila ukubwa unazidishwa na **skeli ya jumla**. Weka ukubwa kama unavyoutaka kwenye karatasi (maandishi ya 2.5 mm), kisha weka skeli ya jumla sawa na skeli ya kuchapisha (50 kwa 1:50). Maandishi basi yana urefu wa 2.5 × 50 = 125 vitengo vya mchoro, na yanachapishwa kwa 2.5 mm.

:::note
Mitindo ya vipimo yenye majina inasimamiwa na {{cmd:DIMSTYLE}}: tazama sehemu hapa chini. Kila kipimo pia kinahifadhi mipangilio kilichotengenezwa nayo, kwa hiyo bado unaweza kubadilisha kipimo kimoja tu katika {{ui:Sifa}}.
:::

## Weka ukubwa wa vipimo vipya

Njia zote mbili hapa chini zinabadilisha vipimo utakavyotengeneza baadaye tu.

### Katika paneli ya Mipangilio ya sasa

1. Bonyeza {{key:Esc}} ili kisichochaguliwa. Kwenye kichupo cha {{ui:Modeli}}, paneli ya kulia inasoma {{ui:Mipangilio ya sasa}}.
2. Shuka chini kwenye paneli hadi {{ui:Vipimo vipya}}, ukipita safu za tabaka, rangi, vitengo na {{ui:Tabaka 0}} (kwenye skrini ndogo inaanzia chini ya ukingo wa chini). Bofya {{ui:Skeli ya jumla}}, andika `50` kisha bonyeza {{key:Enter}}.
3. Weka {{ui:Urefu wa maandishi}}, {{ui:Ukubwa wa mshale}} na {{ui:Desimali}} kwa namna hiyo hiyo ukitaka thamani nyingine.

Upau wa hali unathibitisha kila moja, kwa mfano "Skeli ya jumla ya vipimo vipya: 50".

### Kwenye mstari wa amri

1. Andika `DIMSCALE` kisha bonyeza {{key:Enter}}.
2. Kwenye `Enter new value for DIMSCALE <1>`, andika `50` kisha bonyeza {{key:Enter}}.

Historia inathibitisha "DIMSCALE = 50. Vipimo vipya vinaitumia; chagua vilivyopo ili kubadilisha vyao." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} na {{cmd:DIMEXO}} zinafanya kazi kwa namna hiyo. Bonyeza {{key:Enter}} kwenye kidokezo ili kuweka thamani ya sasa.

### Futi na inchi katika vipimo

Vipimo vipya vinatumia muundo wa urefu wa mchoro: uweke kwa {{ui:Muundo wa urefu}} katika {{ui:Mipangilio ya sasa}} au kwa {{cmd:UNITS}} (tazama [Futi na inchi](topic:units-papers-scales#feet-and-inches-and-fractions)), na kipimo kinachofuata kinasoma `12'-6 1/2"`. {{cmd:DIMLUNIT}} inaweka muundo wa vipimo tu (2 desimali, 3 uhandisi, 4 {{ui:Usanifu majengo}}, 5 sehemu). Kwa kipimo ulichotengeneza tayari, kichague kisha uchague {{ui:Muundo}} katika {{ui:Sifa}}; kwa muundo wa sehemu, kisanduku chake cha {{ui:Sehemu}} kinachukua nguvu ya mbili (4 = 1/16).

## Vipimo katika mm, cm, m au km

Kipimo kinapima katika vitengo vya mchoro. Kinaweza kuandika urefu huo kwa milimita, sentimita, mita au kilomita badala yake, huku kitengo kikiwa baada ya nambari: ukuta wa 1250 mm unasoma `1250 mm`, `125 cm`, `1.25 m` au `0.00125 km`.

1. Weka kwanza {{ui:Vitengo}} vya mchoro katika {{ui:Mipangilio ya sasa}} (tazama [Vitengo, ukubwa wa karatasi na skeli](topic:units-papers-scales#drawing-units)), ili CadCraft ijue kitengo kimoja cha mchoro ni nini. Mchoro usio na kitengo unasomwa kama milimita, na {{cmd:DIMTEXTUNIT}} inasema hivyo.
2. Kwa vipimo vipya: bonyeza {{key:Esc}} ili kisichochaguliwa, kisha chini ya {{ui:Vipimo vipya}} chagua {{ui:Vitengo katika maandishi}}: {{ui:Vitengo vya mchoro}}, `mm`, `cm`, `m` au `km`.
3. Kwa vipimo ulivyoshatengeneza: vichague, kisha katika {{ui:Sifa}} › {{ui:Vitengo vikuu}} chagua {{ui:Vitengo katika maandishi}}.

Au andika {{cmd:DIMTEXTUNIT}} (`DTU`) kisha ujibu `D`, `MM`, `CM`, `M` au `KM`: vipimo vikiwa vimechaguliwa vinabadilishwa (hatua moja ya kutendua), bila chochote kilichochaguliwa huweka vipimo vipya.

{{ui:Desimali}} ({{cmd:DIMDEC}}) bado inaweka idadi ya desimali zinazoonekana: kwa mita na desimali 3, 1234 mm inasoma `1.234 m`. Maandishi yanaandikwa kama nambari ya desimali. Kwenye laha, vipimo vinapimwa katika kitengo cha karatasi ya laha (milimita au inchi).

DWG au DXF iliyohifadhiwa inahifadhi chaguo hilo kama skeli ya kipimo ya kipimo (DIMLFAC) na kiambishi (DIMPOST, ` m`), ili programu nyingine zionyeshe maandishi yale yale. Ukibadilisha baadaye {{ui:Vitengo}} vya mchoro, vipimo vilivyoandikwa kwa mm, cm, m au km vinapangwa upya, ili viendelee kuonyesha urefu sahihi. {{ui:Weka kwa mkono (skeli au kiambishi)}} inamaanisha kwamba {{ui:Skeli ya kipimo}} au kiambishi cha kipimo viliwekwa kwa njia nyingine; chagua kitengo ili kuvibadilisha.

## Badilisha vipimo ulivyoshatengeneza

1. Bofya kipimo kimoja. Kichwa cha paneli ya kulia kinasoma {{ui:Kipimo}}.
2. Mipangilio iko katika sehemu; shuka chini kwenye paneli kufikia zile za baadaye:
   - {{ui:Jumla}}: {{ui:Mtindo wa kipimo}}
   - {{ui:Jiometri}}: {{ui:Aina}} na {{ui:Kipimo}} (kusomwa tu)
   - {{ui:Maandishi}}: {{ui:Maandishi ya kubadilisha}} na {{ui:Urefu wa maandishi}}
   - {{ui:Mistari na mishale}}: {{ui:Ukubwa wa mshale}}
   - {{ui:Kutoshea}}: {{ui:Skeli ya jumla}}
   - {{ui:Vitengo vikuu}}: {{ui:Desimali}}
3. Andika thamani mpya kisha bonyeza {{key:Enter}}.

Kipimo kinachorudi kuchorwa papo hapo. Kwa vipimo vya pembe, {{ui:Desimali (°)}} inaweka desimali za pembe.

:::note
Vipimo kadhaa vikichaguliwa, paneli inaonyesha safu zinazoshirikiwa, na thamani inayotofautiana kati yake inasomeka {{ui:Hutofautiana}}. Thamani utakayoandika inabadilisha kila kipimo kilichochaguliwa katika hatua moja, kwa hiyo {{key:Mod+Z}} moja inavirudisha vyote.
:::

## Vipimo kutoka michoro iliyofunguliwa

Kipimo kutoka DWG au DXF iliyofunguliwa kinaonyeshwa jinsi programu iliyokitengeneza ilivyokichora. Paneli yake inasema "Inaonyeshwa jinsi programu iliyokitengeneza ilivyokichora. Ukikibadilisha, CadCraft inakichora upya kwa mtindo wake." Mara tu unapobadilisha thamani yoyote, kusogeza kishikizo, au kusogeza kipimo chenyewe, CadCraft inakichora upya kwa vichwa vyake vya mshale na fonti yake, ikitumia ukubwa uliousoma kutoka kwenye faili.

Baadhi ya vipimo vinaweza kusomwa tu jinsi vilivyochorwa, si kama vipimo vinavyoharirika; paneli basi inaonyesha "Imechorwa kutoka" pamoja na jina la bloku, na kisanduku cha "About this file" kinavihesabu.

## Makosa ya kawaida

- **Kubadilisha DIMSCALE hakukubadilisha chochote kwenye skrini.** Mpangilio ni wa vipimo vipya. Chagua vilivyopo kisha ubadilishe {{ui:Skeli ya jumla}} kwenye paneli.
- **Desimali zinaonyesha tarakimu chache kuliko ulizoweka.** Sufuri za mwisho zinaondolewa: desimali 2 zinaonyesha `1250` na `1250.5`, si `1250.00`.
- **Maandishi yana urefu sahihi kwenye karatasi ndani ya kionekano lakini si sahihi kwenye chapisho la mfano.** Skeli ya jumla lazima ilingane na skeli unayochapisha. Kuchapisha kwa "Inafaa karatasi" kunatoa skeli isiyo ya kawaida; chagua skeli ya kawaida kwenye kisanduku cha kuchapisha.
- **Vitengo kama mm au m kwenye maandishi.** Chagua {{ui:Vitengo katika maandishi}} (tazama [Vipimo katika mm, cm, m au km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Kwa neno lingine lolote baada ya nambari, liandike kwenye kubadilisha: `<> TYP.`.

## Mitindo ya vipimo yenye majina

Andika `DIMSTYLE` (`D`) kufungua {{ui:Msimamizi wa mitindo ya kipimo}}. Inaorodhesha mitindo ya mchoro, idadi ya vipimo vinavyotumia kila moja, na ile ya sasa. **Standard** iko kila wakati.

- {{ui:Weka ya sasa}}: vipimo vipya vinatumia mipangilio ya mtindo huo na kubeba jina lake.
- {{ui:Mpya…}}: mtindo mpya unaoanza kama nakala ya ule uliouchagua.
- {{ui:Badilisha…}}: sehemu zilezile za kipimo katika {{ui:Sifa}} (mistari na mishale, maandishi, kutoshea, vitengo, vitengo mbadala, uvumilivu). Bonyeza {{ui:Sawa}} na mtindo unabadilika, **na kila kipimo kinachoutumia kinabadilika nao**, mpangilio kwa mpangilio. Mpangilio uliobadilisha kwenye kipimo kimoja tu unabaki ulivyo isipokuwa mtindo ubadilishe mpangilio huo.
- {{ui:Badili jina…}} na {{ui:Futa}}: Standard haiwezi kubadilishwa jina wala kufutwa, wala mtindo wa sasa, wala ule ambao vipimo vinautumia.
- {{ui:Linganisha…}}: kinachotofautiana kati ya mitindo miwili.
- {{ui:Tumia kwa zilizochaguliwa}}: chagua vipimo kwanza; vinachukua mipangilio ya mtindo na jina lake.

`-DIMSTYLE` inafanya hivyo hivyo kwenye mstari wa amri: `Restore`, `Save` (mipangilio ya sasa, ikijumuisha ulichoandika kwa {{cmd:DIMTXT}} na nyingine, chini ya jina), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Mitindo imehifadhiwa kwenye DWG au DXF (jedwali lake la mitindo ya vipimo) na inasomwa kutoka kwenye faili unazofungua. Mtindo wa *sasa* hauhifadhiwi: mchoro unafunguka na Standard kama ya sasa. Standard inabaki na mipangilio yake wakati mtindo mwingine ni wa sasa.

## Badilisha maandishi ya kipimo na mistari ya kiendelezi

{{cmd:DIMEDIT}} (`DED`) inafanya kazi kwenye vipimo unavyochagua: **Home** inarudisha maandishi mahali mtindo unapoyaweka, **New** inaandika maandishi mengine (`<>` inawakilisha kipimo), **Rotate** inazungusha maandishi, **Oblique** inaelekeza mistari ya kiendelezi ya vipimo vya mstari na vilivyoelekezwa kwa pembe unayoandika (bonyeza {{key:Enter}} kwa hakuna). {{cmd:DIMTEDIT}} inahamisha maandishi kwenda **Left**, **Right** au **Center** ya mstari wa kipimo, au kuyazungusha (**Angle**), au kuyatuma **Home**. Maandishi daima yako kwenye mstari wa kipimo: hayawezi kuburutwa mahali huru.
