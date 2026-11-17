---
title: Fuatilia mistari ya hali halisi juu ya wingu la nukta
summary: Ambatanisha skani ya leza (LAS, LAZ, E57, PLY, PCD, PTX, PTS au XYZ) chini ya mchoro, kata kipande cha mpango kupitia humo, kisha chora kuta, milango na nguzo ukinasa kwenye nukta zake.
keywords: wingu la nukta, pointcloudattach, pcattach, pointcloud, pc, skani ya leza, skani, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, hali halisi, kama ilivyojengwa, upimaji, kipande, kata mpango, nodi, kunasa, fuatilia, hali iliyopo
from: b0e0aae5
---

## Utakachotengeneza

Mpango wa sakafu wa hali halisi: kuta za jengo lililoskaniwa zikichorwa kama mistari na polilaini kikamilifu juu ya nukta za skani.

## Ambatanisha wingu

1. Weka vitengo vya mchoro kwanza ikiwa havina (kisanduku cha {{ui:Units}} katika {{ui:Properties}}, au {{cmd:UNITS}}): CadCraft hubadilisha wingu kutoka vitengo vyake hadi vya mchoro.
2. Andika {{cmd:POINTCLOUDATTACH}} (au `PCATTACH`) kisha bonyeza {{key:Enter}}. Chagua faili la `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` au `.xyz` (mada kuhusu miundo ya wingu la nukta inaeleza kila moja huleta nini, na cha kuhamisha kutoka programu ya skana yenyewe). Unaweza pia kufungua faili kwa {{ui:Open}}, kulidondosha kwenye ukurasa, au kulituma kutoka {{ui:Trace in CadCraft}} ya kitazamaji cha BIM.
3. `Kona ya chini kushoto ya wingu`: bonyeza {{key:Enter}} ili kuhifadhi viratibu vya faili lenyewe (skani iliyosajiliwa kwenye mradi hupangika na mchoro), au bofya mahali kona ya chini kushoto itakapokwenda.
4. Mstari wa amri unaonyesha nukta ngapi zinaonekana. Mwonekano hukuza hadi wingu; liko chini ya mistari ya mchoro, kila nukta ikionekana kutoka juu.

## Kata kipande cha mpango na fuatilia

1. Andika {{cmd:POINTCLOUD}} (au `PC`), kisha `[Kipande (S)]` kwa {{ui:Slice}}. Ukanda mwembamba tu, m 1.2 juu ya nukta ya chini kabisa ya wingu, ndio unaonekana: kuta, nafasi za milango na nguzo husomeka kama mpango wa sakafu.
2. `[Urefu (H)]` huweka urefu wa kata, `[Unene (T)]` unene wake (kwa vitengo vya mchoro). {{key:Enter}} hukamilisha amri.
3. Washa kunasa kitu ({{key:F3}}) pamoja na {{ui:Node}} miongoni mwa vinasa. Chora kwa {{cmd:LINE}} au {{cmd:PLINE}}: kielekezi kitanasa kwenye nukta za kipande, kikiwekewa lebo "Wingu la nukta". Ncha, katikati na vituo vya mchoro lenyewe vinashinda wingu, hivyo kufunga polilaini hukutua kwenye nukta yake ya kwanza.
4. Badilisha urefu wa kata ili kufuatilia ngazi nyingine, kisha zima kipande (`S` tena) ili kuona wingu zima.

## Chaguo zaidi

Katika {{cmd:POINTCLOUD}}: `[Rangi (C)]` huweka rangi za nukta kwa rangi za faili, urefu, nguvu ya mwanga, daraja la LiDAR au rangi moja; `[Ukubwa wa nukta (SI)]` huweka ukubwa wa nukta; `[Ficha (V)]` huficha au kuonyesha wingu; `[Kuza (Z)]` hukuza hadi wingu; `[Tenganisha (D)]` huliondoa.

Kichupo cha 3D pia kinaonyesha wingu, na nukta yake ya chini ikiwa ardhini, pamoja na kipande hicho hicho.

:::note
Wingu si sehemu ya mchoro: halihifadhiwi kwenye DWG wala DXF, na kutendua hakulibadilishi.Liambatanishe tena utakapofungua mchoro baadaye. Faili husomwa kwenye kompyuta hii; hakuna kinachopakiwa. Skani kubwa sana hupunguzwa sawasawa hadi nukta milioni 2. Faili za E57 hufunguka hadi nukta milioni 6 na 512 MB kwa sasa: hamisha skani kubwa zaidi kama LAS au LAZ.
:::

## Chapisha

{{cmd:PLOT}} huchapisha wingu pamoja na mchoro, chini ya mistari: katika uchapishaji wa modeli ({{ui:Everything}} inajumuisha eneo la wingu) na katika kila dirisha la mpangilio, kwenye PDF, PNG, SVG na kile unachotuma kwa kichapishi. Huchapisha kile kilichopo kwenye skrini: kipande ikiwa kipande kimewashwa, rangi ulizochagua, na kufichwa ukiwa umeficha. Karatasini nukta huwa mraba mdogo, nukta ya juu zaidi ikishinda kila moja, na uchapishaji huweka hadi takriban 400,000 kati yake (wingu lenye msongamano mkubwa sana huchapishwa kwa mraba mkubwa zaidi). Wingu huchapishwa tu kwenye mchoro uliouambatanisha; halichapishwi kamwe kwenye nafasi ya karatasi yenyewe, bali tu kupitia dirisha la mwonekano.

## Skani kadhaa

Skani zilizochukuliwa kutoka nafasi tofauti zinaweza kusajiliwa kuwa fremu moja, kuboreshwa kwa ICP na kuhamishwa kama LAS au E57 moja: tazama [Sajili skani kadhaa kuwa moja](topic:register-scans).
