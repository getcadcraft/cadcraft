---
title: Weka vipimo kwenye mpango
summary: Ongeza vipimo vya mstari, vilivyoelekezwa, vya pembe, radius na kipenyo, viunganishe kwa Endelea na Msingi, na ubadilishe maandishi yake.
keywords: kipimo, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, mnyororo, mfuatano, kuandika, pata, tafuta, upau wa zana, pima, mm, cm, m, km, vitengo
from: 9ee65123
---

## Utakachotengeneza

Chumba kilichopimwa: upana na urefu wa jumla, mfuatano wa vipimo kando ya ukuta mmoja, ukuta ulioelekezwa, kona yenye mviringo na pembe.

Kabla ya kuanza, soma [Weka ukubwa wa vipimo](topic:dimension-settings) ikiwa mchoro wako ni mkubwa: maandishi ya kipimo yana urefu wa vitengo 2.5 kwa chaguo-msingi, ambayo ni madogo mno kwenye mchoro unaopimwa kwa milimita. Kwa hatua zilizo hapa chini, andika `DIMSCALE`, bonyeza {{key:Enter}}, andika `50` kisha bonyeza {{key:Enter}} kwanza.

## Zana za kipimo ziko wapi

Katika mtindo wa menyu ya CadCraft (ule ambao CadCraft inaanza nao), zana za kipimo ziko kwenye upau wa zana juu ya mchoro, katika kundi la {{ui:Fafanua}}: {{ui:Mstari}}, {{ui:Sambamba}}, {{ui:Pembe}}, {{ui:Radius}} na {{ui:Kipenyo}}. Menyu ya {{ui:Zaidi}} ya kundi hilo ina {{ui:Endelea na kipimo}} na {{ui:Kipimo cha msingi}}. Elea kielekezi juu ya kitufe ili kuona kinachofanya.

- Kwa mtindo wa {{ui:Mtindo wa kawaida wa uchoraji}} au {{ui:Utepe}}, fungua kichupo cha {{ui:Fafanua}}: zana ziko katika paneli yake ya {{ui:Vipimo}}. {{ui:Mtindo wa kawaida wa uchoraji}} pia ina {{ui:Mstari}} kwenye kichupo cha {{ui:Nyumbani}}, chini ya {{ui:Maelezo}}. Tazama [Menyu, vitufe na kipanya](topic:menus-keys-and-mouse).
- Au andika amri kwenye mstari wa amri chini ya mchoro, kisha bonyeza {{key:Enter}}: `DLI` (mstari), `DAL` (sambamba), `DAN` (pembe), `DRA` (radius), `DDI` (kipenyo), `DCO` (endelea), `DBA` (msingi).
- Kwenye skrini nyembamba upau wa zana ni safu moja: telezesha kando ili kufikia {{ui:Fafanua}}.

Ili kuonyesha urefu kwa milimita, sentimita, mita au kilomita, tazama [Vipimo katika mm, cm, m au km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Chora kitu cha kupima

1. Andika `PL` kisha bonyeza {{key:Enter}}.
2. Andika `0,0` kisha bonyeza {{key:Enter}}.
3. Andika `@6000,0` kisha bonyeza {{key:Enter}}.
4. Andika `@1500<60` kisha bonyeza {{key:Enter}}.
5. Andika `@0,2700` kisha bonyeza {{key:Enter}}.
6. Andika `@-6750,0` kisha bonyeza {{key:Enter}}.
7. Andika `C` kisha bonyeza {{key:Enter}}. Mstari wa nje unafungwa.
8. Andika `C` kisha bonyeza {{key:Enter}} kuanza duara.
9. Bofya ndani ya chumba, mbali na kuta, kwa kituo.
10. Andika `600` kisha bonyeza {{key:Enter}}. Hii ni nguzo.
11. Bofya {{ui:Mipaka}}.

## Mstari: mlalo au wima

1. Andika `DLI` kisha bonyeza {{key:Enter}}.
2. Kwenye `Specify first extension line origin`, nasa kwenye kona ya chini kushoto (Mwisho) kisha ubofye.
3. Kwenye `Specify second extension line origin`, nasa kwenye kona ya chini kulia kisha ubofye.
4. Sogeza msalaba chini ya chumba. Kipimo kinafuata, kikiwa mlalo.
5. Bofya mahali pa mstari wa kipimo.

Historia inasema `Dimension text = 6000`.

Mahali unapoweka mstari ndipo mwelekeo unapoamuliwa: chini au juu hutoa kipimo cha mlalo, kushoto au kulia hutoa cha wima. Ili kulazimisha, andika `H` (mlalo), `V` (wima) au `R` (iliyozungushwa, kisha pembe) kabla ya kuuweka.

:::tip
Bonyeza {{key:Enter}} kwenye kidokezo cha kwanza badala ya kuchagua nukta, kisha bofya mstari, tao, duara au sehemu ya polilaini. CadCraft inachukua ncha zote mbili kwa ajili yako.
:::

## Endelea: mfuatano wa vipimo

{{cmd:DIMCONTINUE}} ({{ui:Fafanua}} › {{ui:Zaidi}} › {{ui:Endelea na kipimo}}, au `DCO`) inaendelea kutoka kipimo cha mwisho cha mstari au kilichoelekezwa ulichotengeneza, kila kipya kikianzia pale la mwisho lilipomalizikia.

1. Andika `DLI` kisha bonyeza {{key:Enter}}.
2. Andika `0,0` kisha bonyeza {{key:Enter}} kwa asili ya kwanza.
3. Andika `2000,0` kisha bonyeza {{key:Enter}} kwa asili ya pili.
4. Bofya chini ya chumba kuweka kipimo.
5. Andika `DCO` kisha bonyeza {{key:Enter}}.
6. Andika `4500,0` kisha bonyeza {{key:Enter}}. Kipimo cha pili kinafuata kile cha kwanza, kwenye mstari uleule.
7. Nasa kwenye kona ya chini kulia kisha ubofye. Cha tatu kinakamilisha mfuatano.
8. Bonyeza {{key:Enter}} kumaliza amri.

:::note
Hapa nukta zimeandikwa kama kuratibu kamili kwa makusudi. Nukta ya `@` inahesabu kutoka nukta ya mwisho uliyotoa, na nukta ya mwisho ni mahali ulipoweka mstari wa kipimo uliopita, si mwisho wa kipimo. Nukta kamili, kunasa au umbali wa moja kwa moja ukiwa na {{ui:Ortho}} imewashwa ni salama zaidi katika mfuatano wa vipimo.
:::

Andika `U` kisha bonyeza {{key:Enter}} ili kurudisha kipimo cha mwisho katika mfuatano bila kutoka kwenye amri.

## Msingi: vipimo vilivyopangwa kutoka mstari mmoja

{{cmd:DIMBASELINE}} ({{ui:Fafanua}} › {{ui:Zaidi}} › {{ui:Kipimo cha msingi}}, au `DBA`) inapima kila kipimo kipya kutoka nukta ya kwanza ya kile cha mwisho, na kupanga kila kimoja mbali zaidi kwa hatua moja.

1. Andika `DLI` kisha bonyeza {{key:Enter}}.
2. Nasa kwenye kona ya chini kushoto kisha ubofye.
3. Nasa kwenye kona ya juu kushoto kisha ubofye.
4. Sogeza msalaba kushoto mwa chumba kisha ubofye. Kipimo cha wima kinaonekana.
5. Andika `DBA` kisha bonyeza {{key:Enter}}.
6. Nasa kwenye ncha ya juu ya ukuta wa digrii 60 (Mwisho) kisha ubofye. Kipimo cha pili cha wima kinaonekana, mbali zaidi kwa hatua moja kuliko cha kwanza.
7. Bonyeza {{key:Enter}} kumaliza.

## Sambamba: urefu halisi wa mstari unaoelekea chini

1. Andika `DAL` kisha bonyeza {{key:Enter}}.
2. Bonyeza {{key:Enter}} kuchagua kitu.
3. Bofya ukuta wa digrii 60.
4. Sogea nje kisha ubofye kuweka.

Maandishi yanasoma 1500: urefu halisi, unaopimwa kwenye ukuta.

## Radius na kipenyo

1. Andika `DRA` kisha bonyeza {{key:Enter}}.
2. Bofya duara la nguzo.
3. Sogeza msalaba. Kiongozi kinaelekea kutoka katikati kuelekea msalaba.
4. Bofya kuweka maandishi.

Maandishi yanasoma `R600`. {{cmd:DIMDIAMETER}} (`DDI`) inafanya hivyo hivyo kwa alama ya ⌀ na kipenyo.

## Pembe

Kuta hapa ni polilaini moja, kwa hiyo pima kona kwa kilele chake. (Kati ya mistari miwili tofauti, unaweza kubofya mistari badala yake.)

1. Andika `DAN` kisha bonyeza {{key:Enter}}.
2. Kwenye `Select arc, circle or line, or Enter for a vertex`, bonyeza {{key:Enter}}.
3. Kwenye `Specify angle vertex`, nasa kwenye kona ya chini kulia kisha ubofye.
4. Kwenye `Specify first angle endpoint`, nasa kwenye kona ya chini kushoto kisha ubofye.
5. Kwenye `Specify second angle endpoint`, nasa kwenye ncha ya juu ya ukuta wa digrii 60 kisha ubofye.
6. Sogeza msalaba ndani ya chumba, karibu na kona, kisha ubofye.

Maandishi yanasoma `120°`, pembe ya ndani ya kona. Ukiiweka upande wa pili wa kona, kipimo kinapima pembe ya upande huo badala yake. Bofya tao kwenye kidokezo cha kwanza ili kupima pembe inayofunikwa nalo, au bofya mistari miwili ili kupima pembe kati yake.

## Badilisha maandishi

Ili kuandika maandishi yako mwenyewe, andika `T` kisha bonyeza {{key:Enter}} kabla hujaweka kipimo, kisha andika maandishi. Katika maandishi yako, `<>` inawakilisha thamani iliyopimwa: `<> TYP.` inatoa `6000 TYP.`. Bonyeza {{key:Enter}} kwenye mstari tupu ili kuweka thamani iliyopimwa.

Ili kubadilisha kipimo kilichopo:

1. Bofya.
2. Kwenye paneli ya kulia, andika kwenye {{ui:Maandishi}}. Iache tupu kwa thamani iliyopimwa.
3. Bonyeza {{key:Enter}}.

## Vipimo hufuata jiometri

Kipimo kinakumbuka nukta zake. Buruta mojawapo ya vishikizo vyake, au sogeza, zungusha au badilisha ukubwa wake pamoja na vitu inavyopima, nacho kinapimwa tena. Ukinyoosha jiometri bila kusogeza kipimo, kipimo hakifuati: kinabaki na nukta zake.

## Makosa ya kawaida

- **Maandishi na mishale ni midogo mno au mikubwa mno.** Weka skeli ya jumla: tazama [Weka ukubwa wa vipimo](topic:dimension-settings).
- **"Bofya nukta ndani ya pembe unayotaka kupima."** Nukta uliyobofya kwa kipimo cha pembe iko kwenye moja ya miguu. Isogeze ndani ya pembe.
- **Endelea ilianza kutoka kipimo kisicho sahihi.** Daima huendelea kutoka kipimo cha mwisho cha mstari au kilichoelekezwa kilichotengenezwa katika kipindi hiki. Tengeneza (au tengeneza upya) kile cha kuendelea kutoka kwanza.
- **Kipimo kilitoka wima.** Uliweka upande. Andika `H` kabla ya kukiweka.
- **Futi na inchi.** Weka kwanza muundo wa urefu wa mchoro kuwa {{ui:Usanifu majengo}}, au {{ui:Muundo}} wa kipimo katika {{ui:Sifa}}: tazama [Futi na inchi katika vipimo](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Nambari hazipo katika kitengo unachotaka.** Chagua {{ui:Vitengo katika maandishi}}: tazama [Vipimo katika mm, cm, m au km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
