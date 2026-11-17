---
title: Weka vizuizi kwenye mchoro
summary: Weka mistari ikiwa mlalo, ncha zikiwa pamoja na vipimo vikiwa vimerekebishwa kwa vizuizi vya kijiometri na vya kipimo, na mchoro ufuate unapobadilisha kipimo.
keywords: kizuizi, vizuizi, vigezo, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, digrii za uhuru, imefungwa kikamilifu
from: f8f21fa4
---

## Utakachotengeneza

Bamba ambayo unabadilisha upana wake mahali pamoja: pande zake zinabaki mraba, kona moja inabaki pale pale, na urefu wake unabaki nusu ya upana.

Vizuizi vinafanya kazi kwenye mistari, polilaini, duara, matao na nukta kwenye kichupo cha {{ui:Modeli}}. Kila kizuizi unachoongeza ni hatua moja ya {{ui:Tendua}}.

## Chora na weka vizuizi kwenye mstari wa nje

1. Andika `REC` kisha bonyeza {{key:Enter}}. Andika `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Andika `AUTOCONSTRAIN` kisha bonyeza {{key:Enter}}. Andika `ALL`, {{key:Enter}}, kisha {{key:Enter}} tena.

   Historia inasema "vizuizi 4 vimetumika". Visanduku vidogo vyenye **H** na **V** vinaonekana karibu na pande: hivi ni pau za vizuizi.
3. Andika `GCFIX` kisha bonyeza {{key:Enter}}. Bofya karibu na kona ya chini kushoto. Kisanduku chenye ⊕ kinaonekana: kona hiyo inabaki pale ilipo.

`AUTOCONSTRAIN` inaongeza vizuizi vya kuunganisha pale ncha zinapokaribiana, na vizuizi vya mlalo au wima pale mistari iko karibu na usawa au wima. Andika `S` kwenye kidokezo chake ili kubadilisha ukaribu wake (0.05 vitengo vya mchoro na 1° kama mwanzo).

## Ongeza vipimo

1. Andika `DCHORIZONTAL` kisha bonyeza {{key:Enter}}.
2. Bofya karibu na kona ya chini kushoto, kisha karibu na kona ya chini kulia.
3. Bofya chini ya mstatili kwa ajili ya mstari wa kipimo.
4. Kidokezo kinaonyesha `Dimension text <d1=100>`. Andika `width=120` kisha bonyeza {{key:Enter}}.

   Mstatili sasa una upana wa 120, na lebo inasoma `width=120`.
5. Andika `DCVERTICAL` kisha bonyeza {{key:Enter}}, andika `O` kisha bonyeza {{key:Enter}}, kisha bofya upande wa kulia.
6. Bofya kulia kwake, andika `width/2` kisha bonyeza {{key:Enter}}.

   Ina urefu wa 60. Lebo inasoma `fx: d1=width/2`: usemi ndio unaoendesha kipimo.

Historia sasa inasema kwamba mstari wa nje umefungwa kikamilifu. Ili kubadilisha ukubwa wake, badilisha `width` (tazama [Tumia vigezo na milinganyo](topic:parameters)), au bofya mara mbili lebo ya `width=120`, andika thamani mpya kisha uchague {{ui:Tumia}}.

## Kuhamisha vitu vyenye vizuizi

Hamisha, zungusha, badilisha ukubwa, vishikio na paneli ya Sifa vyote vinahifadhi vizuizi: kitu ulichokihamisha kinashikiliwa, na vingine vinafuata. Vizuizi visipoweza kufuata, uhariri haufanyiki na historia inaeleza sababu, kwa mfano "Haijafanyika: vizuizi vinashikilia kitu hicho pale kilipo". Kufuta kitu kunaondoa vizuizi vyake pamoja nacho.

## Kuakisi na kukata vitu vyenye vizuizi

- {{cmd:MIRROR}} inanakili vizuizi kati ya vitu unavyoakisi hadi kwenye nakala. Pande (mguso wa tangenti unagusa upande upi, kipimo kinapimwa hadi upande upi) zinahesabiwa upya kwa nakala iliyoakisiwa, na vipimo vilivyonakiliwa vinapata majina yao wenyewe, kama ilivyo kwa kubandika. Kwa `Erase source objects` `Y`, vizuizi vinabaki kwenye vitu vilivyoakisiwa. Historia inasema vilivyofuatana.
- {{cmd:TRIM}} inahifadhi vizuizi vya mstari au tao kwenye kilichobaki: kizuizi kwenye ncha kinakwenda kwenye kipande kinachobaki na ncha hiyo, kanuni ya mwelekeo ({{ui:Mlalo}}, {{ui:Wima}}, {{ui:Sambamba}}, {{ui:Pembe ya kulia}}) inashikilia kila kipande, na kipimo kati ya ncha mbili za nje kinaendelea kupima hizo. Vizuizi vilivyoshikilia sehemu iliyokatwa, au urefu uliobadilishwa na kukata ({{ui:Sawa}}, mwendo wa tao), vinaondoka. Duara lililokatwa linahifadhi vizuizi vyake vya kituo na radius. Polilaini zilizokatwa zinapoteza vizuizi vyake.

## Vizuizi

| Amri | Inashikilia |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | mstari au sehemu iko mlalo au wima (`2P`: nukta mbili ziko mlalo au wima) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | mistari miwili iko sambamba, pembe ya kulia au kwenye mstari mmoja |
| {{cmd:GCCOINCIDENT}} | nukta mbili zimeungana; `O`: nukta kwenye mstari, duara au tao |
| {{cmd:GCTANGENT}} | mstari na duara au tao, au mawili kati yake, zinagusana |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | duara mbili au matao mawili yana kituo kimoja; urefu mbili au radius mbili ni sawa |
| {{cmd:GCSYMMETRIC}} | nukta mbili, mistari au duara zilizoakisiwa kwenye mstari |
| {{cmd:GCFIX}} | nukta (bofya karibu nayo) au kitu kizima (`O`) pale kilipo |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | umbali |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | radius, kipenyo, pembe kati ya mistari miwili au pembe ya tao |

{{cmd:GEOMCONSTRAINT}} na {{cmd:DIMCONSTRAINT}} zinauliza ipi; {{ui:Weka vikwazo}} na {{ui:Kipimo}} katika kundi la {{ui:Vigezo}} zinaziendesha, na {{ui:Zaidi}} hapo inaorodhesha kila moja. Mahali unapobofya ndipo huchagua sehemu: bofya karibu na ncha, katikati au kituo huchukua nukta hiyo; bofya kwenye polilaini huchukua sehemu iliyo chini yake. Kitu cha kwanza kinabaki, cha pili kinahamia kukutana nacho.

Kizuizi kinachogongana na vingine, au kisichoongeza chochote kwa sababu vingine tayari vinakimaanisha, kinakataliwa kwa ujumbe na hakuna kinachohama.

## Ona, chagua na ondoa

- Bofya kisanduku kwenye pau ya kizuizi (au mraba wa kuunganisha, au lebo ya kipimo) ili kuchagua kizuizi hicho; historia inakitaja. Bonyeza {{key:Delete}} ili kukiondoa.
- {{cmd:DELCONSTRAINT}} inaondoa vizuizi vyote kutoka kwenye vitu unavyochagua.
- {{cmd:CONSTRAINTBAR}}: `S` inaonyesha pau zote, `H` inazificha; chagua vitu kwanza ili kuonyesha au kuficha pau zao. {{ui:Zaidi}} ina {{ui:Onyesha pau za vizuizi}} na {{ui:Ficha pau za vizuizi}}.
- {{cmd:DCDISPLAY}} inaonyesha au kuficha vizuizi vya kipimo. Havichapishwi kamwe.
- {{cmd:DCCONVERT}} inageuza vipimo vilivyochorwa kwenye mistari, duara na matao kuwa vizuizi vya kipimo.

:::note
Ukiwa umetumia uchoraji wa parametriki wa AutoCAD, majina ya amri na maelekezo ni yale yale. Vizuizi na vigezo vinahifadhiwa kwenye faili za DWG na DXF kwa namna ambayo programu nyingine huzipuuza; tazama [Faili](topic:files#constraints-in-files).
:::
