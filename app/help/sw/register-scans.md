---
title: Unganisha skani kadhaa kuwa moja
summary: Weka skani zilizopigwa kutoka sehemu tofauti kwenye fremu moja kwa kutumia jozi za nukta zilizochaguliwa au malengo yaliyoandikwa, zisafishe kwa ICP, hifadhi usajili kama mradi, na hamisha wingu lililosajiliwa kama LAS au E57. Amri ni REGISTERSCANS.
keywords: sajili, usajili, skani, wingu la nukta, icp, iterative closest point, malengo, jozi za nukta, mabadiliko magumu, panga, unganisha, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Utakachofanya

Skani kadhaa za eneo moja (kila moja kutoka nafasi yake ya skana) huanza katika viwianishi vyake. Zisajili: mpe kila skani mahali pamoja, ili zote ziwe kwenye fremu moja; kisha hifadhi hilo kama mradi na uandike wingu lililosajiliwa kama faili moja la LAS au E57.

## Weka skani

1. Fungua kidirisha (andika `REGISTERSCANS` (au `REGSCAN`)). {{ui:Add scans…}} inakubali faili za LAS, LAZ, E57, PLY, PCD, PTX, PTS au XYZ, au zidondoshe kwenye kidirisha. Skani zenye vitengo tofauti hukataliwa kwa ujumbe: badilisha moja kwanza.
2. Chagua {{ui:Scan to move}} na {{ui:Place against}}. Picha inaonyesha kila skani kwenye fremu kama ilivyo sasa, kila moja rangi yake: {{ui:Plan}}, {{ui:Front}} au {{ui:Side}}; buruta kusogeza, tumia gurudumu kukuza.
3. **Kwa jozi za nukta.** Bofya {{ui:Pick a pair}}, kisha nukta kwenye skani ya kusogeza, kisha mahali hapo hapo kwenye skani nyingine (kona, lengo, msingi wa nguzo). Fanya hivi angalau mara tatu, kwa nukta zisiwe kwenye mstari mmoja na zitawanywe. Bofya {{ui:Place by pairs}}: skani inawekwa kwa mkadirio wa mraba mdogo zaidi (least-squares), na **Imebaki** inaonyesha kila jozi bado inakosea kwa kiasi gani. Jozi yenye namba kubwa ni chaguo baya: iondoe kwa alama ya msalaba kisha uweke tena.
4. **Kwa malengo.** Ikiwa kuratibu halisi za nukta zinajulikana (malengo yaliyopimwa), bofya {{ui:Pick, then type target}}, bofya nukta kwenye skani yake, kisha andika X, Y na Z za lengo kwenye safu mlalo. Jozi na malengo yaliyoandikwa vinaweza kuchanganywa kwa uhuru.

## Boresha kwa ICP

Jozi zinatoa mpangilio mbaya. {{ui:Refine}} husogeza skani hadi nyuso zake ziwe juu ya za skani nyingine: kwanza **nukta hadi nukta**, kisha **nukta hadi ndege**. Jedwali linaorodhesha kila hatua pamoja na kosa lake na idadi ya nukta zilizolingana; mstari wa juu yake unaonyesha kosa likishuka. {{ui:Stop}} humaliza mzunguko baada ya hatua inayoendelea na kuhifadhi kile kilichofikiwa. {{ui:Undo}} huondoa mzunguko mzima (au mpangilio wa mwisho); {{ui:Reset}} inarudisha skani kwenye viwianishi vya faili lake.

Ili iwe haraka kwenye laptop, ICP inafanya kazi kwenye sehemu iliyopunguzwa ya nukta ({{ui:Points used}}, 5,000 hadi 60,000) na inapuuza mechi zilizo mbali zaidi ya {{ui:Largest match distance}} (kwa chaguo-msingi 5% ya ukubwa wa skani, inayopungua inapotulia). Inahitaji mpangilio mbaya kwanza: skani zinazoingiliana kidogo huripoti kwamba haziwezi kulinganishwa. Nyuso zilizo bapa tu au nyoofu tu haziwezi kurekebisha nafasi kando yake; ongeza jozi katika hali hiyo.

## Hifadhi na hamisha

- {{ui:Save project}} huandika faili dogo la `.ccscans.json`: jina la kila skani, ukubwa wake na alama ya vidole ya 64 KB zake za kwanza, pamoja na mabadiliko yake. Halina nukta. {{ui:Open project…}} hutafuta faili za skani kwa marejeo hayo (faili lazima ziwe zimeongezwa kwanza) na kurudisha kila mabadiliko.
- {{ui:Export LAS}} na {{ui:Export E57}} huandika faili moja yenye kila skani mahali pake lililosajiliwa. Nukta za asili hazibadilishwi; mabadiliko yanatumika njiani kutoka. Ikiwa {{ui:Read every point from the files}} imewashwa, kila faili husomwa tena kwa kila nukta (hadi milioni 20 kwa skani); ikizimwa, nukta zinazoonekana kwenye kitazamaji pekee ndizo zinaandikwa.
- {{ui:Show registered cloud}} (CadCraft) huandika LAS na kuiambatanisha chini ya mchoro kwenye viwianishi vyake, kama wingu lingine lolote.

:::note
Hakuna kinachopakiwa. Usajili unafanya kazi kwa vitengo vya faili zenyewe na unahifadhi milimita: LAS huandikwa kwa skeli inayotosha (hadi 0.1 mm), E57 kwa double. Mfumo wa viwianishi hubebwa kwenda LAS tu wakati kila skani inataja msimbo ule ule wa EPSG. Mwandishi wa E57 ni wetu; unakaguliwa kwa kuusoma faili zake tena kwa msomaji huu na kwa libE57Format.
:::
