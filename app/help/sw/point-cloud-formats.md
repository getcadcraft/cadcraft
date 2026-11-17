---
title: Miundo ya wingu la nukta: kinachoambatishwa na cha kuhamisha
summary: Faili zipi za skani za leza zinaambatishwa chini ya mchoro, zipi ni muundo wa mtengenezaji wa skana, na cha kuhamisha kutoka programu ya skana ili skani iambatishwe hapa.
keywords: wingu la nukta, pointcloudattach, pcattach, skani ya leza, skani, miundo, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, hamisha, haiwezi kufunguka, haisomwi
from: 20a5f4ee
---

## Kinachoambatishwa hapa

Ambatisha hivi kwa {{cmd:POINTCLOUDATTACH}}, {{ui:Fungua}} au kwa kuviangusha kwenye ukurasa (angalia mada kuhusu kufuatilia mistari iliyojengwa juu ya wingu la nukta):

| Muundo | Kiendelezi | Kinachosomwa |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: nukta, rangi, nguvu ya mwanga, madaraja ya LiDAR, mfumo wa kuratibu na vitengo vyake. LAZ hadi 1 GB. |
| E57 | `.e57` | Kila skani kwenye faili, kila moja ikiwekwa kwa mkao wake; rangi, au nguvu ya mwanga faili isipokuwa na rangi; mita. Picha zilizo kwenye faili zimeachwa (inasemwa). Hadi nukta milioni 6 na 512 MB kwa sasa: hamisha skani kubwa kama LAS au LAZ. |
| PLY | `.ply` | Maandishi na binary (mpangilio wa baiti zote mbili): x y z za vertex, rangi na nguvu ya mwanga. Nyuso zimeachwa (inasemwa). |
| PCD | `.pcd` | Maandishi na binary: x y z, rangi zilizofungwa au tofauti, nguvu ya mwanga. Faili za PCD zilizobanwa bado hazisomwi: zihifadhi kama binary au maandishi. |
| PTX | `.ptx` | Skani moja au zaidi, kila moja ikiwekwa kwa mabadiliko yake; nukta ambazo skana haikupima zimeachwa. Mita. |
| PTS, XYZ | `.pts`, `.xyz` | Maandishi: x y z, pamoja na nguvu ya mwanga na rangi safu hizo zikiwepo. |

## Faili zinazosomwa na programu ya skana pekee

Baadhi ya faili za skani ni muundo wa mtengenezaji wa skana, pasipo maelezo yaliyochapishwa wala msomaji wa wazi. CadCraft haiwezi kuzisoma: kuambatisha moja kunaonyesha ni nini na cha kufanya kwenye mstari wa amri. Hamisha skani kutoka programu ya mtengenezaji kama E57 au LAS (au PTX, PTS), kisha ambatisha faili iliyohamishwa.

| Faili | Kiendelezi | Hamisha kutoka |
|---|---|---|
| Mradi wa ReCap | `.rcp` | ReCap: fungua mradi na uuhamishe. Mradi unaelekeza tu kwenye skani zake, kwa hiyo kunakili `.rcp` peke yake hakutoi nukta. |
| Skani ya ReCap | `.rcs` | ReCap: fungua mradi ambao skani ni wake na uuhamishe. |
| Skani ya FARO | `.fls` | FARO SCENE. |
| Skani ya Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Skani ya Trimble | `.tzf` | Trimble RealWorks au Trimble Business Center. |
| Skani ya Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Export inapoomba muundo, LAS au LAZ huhifadhi kila kitu ambacho CadCraft inakitumia (rangi, nguvu ya mwanga, madaraja, mfumo wa kuratibu na vitengo vyake) kwenye faili ndogo zaidi.
:::

## Kwa nini faili hizi hazisomwi

Miundo hiyo haijachapishwa, na njia pekee ya kuisoma ni maktaba ya programu ya kila mtengenezaji yenyewe, chini ya masharti yake. CadCraft inasoma miundo tu ambayo inaweza kuisoma kwa msimbo wake kwenye kompyuta yako, kwa hiyo skani haihitaji kutumwa popote ili kuambatishwa.
