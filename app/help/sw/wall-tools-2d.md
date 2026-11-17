---
title: Maumbo, mikato, ofseti na kufuli za kuta za 2D
summary: Chora kuta kama mistatili, poligoni na arcs, gawanya na uunganishe tena, sogeza kwa kipimo, na funga ukuta mmoja kwenye mwingine au kwenye mstari wa gridi. Zana zile zile za kuta za BimCraft.
keywords: ukuta, upau wa kuta, vitufe vya ukuta, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, mtindo wa kuunganisha, mkato wa mshazari, butu, kukatwa mraba, kufuli, mpini, buruta mwisho, zungusha, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, kiungio, zuia kuunganisha, funga, mstari wa gridi, gawanya, pengo, ofseti, mstari wa nafasi
from: f41e7433
---

Zana hizi zinafanya kazi kwenye kuta za 2D kutoka `WALL` (tazama "Chora kuta mahiri, milango na madirisha kwa 2D"). Zinatumia kanuni zile zile za zana za kuta za BimCraft, kwa hiyo ukuta unafanya kazi kwa namna ileile katika programu zote mbili.

## Zilipo zana

- Kwenye upau wa zana, kikundi cha {{ui:Kuta}} kina {{ui:Ukuta}}, {{ui:Mstatili}}, {{ui:Gawanya}} na {{ui:Ofseti}}. Menyu yake ya {{ui:Zaidi}} ina zana nyingine zote za ukuta, kila moja na ikoni yake.
- Katika mitindo ya menyu ya ribbon, kichupo cha {{ui:Kuta}} kina paneli {{ui:Chora kuta}}, {{ui:Kata}}, {{ui:Weka na urekebishe}}, {{ui:Shikilia}} na {{ui:Unganisha}}.
- Katika mpangilio, safu za zana na sanduku la zana zinaonyesha kikundi kile kile cha {{ui:Kuta}}.
- Unaweza pia kuandika amri yoyote iliyotajwa hapa chini.

## Viungio vinahifadhiwa

Ncha ya ukuta inapogusa ukuta mwingine, CadCraft inahifadhi kiungio hicho pamoja na kuta zote mbili. Haihesabu tena viungio kutoka mahali ncha zilipo. Kwa hiyo:

- Kuta zilizounganishwa na ukuta unaousogeza zinafuata na zinabaki zimeunganishwa. Ncha zao zinateleza kwenye mistari yao yenyewe, kwa hiyo hakuna kinachogeuka.
- Ukiburuta ncha moja ya ukuta kwa mpini wake, ukuta uliounganishwa hapo unabaki na mwelekeo wake pia. Ncha yake inateleza kwenye mstari wake yenyewe ili kukutana na ukuta unaoburutwa, kwa hiyo ncha iliyoburutwa inatua kwenye mstari huo, si kila mara chini ya kielekezi. Onyesho la kukagua linaonyesha wapi. Ukuta unaogonga ukuta unaoburutwa unafuata kwenye mstari wake yenyewe. Kuburuta ncha moja kwa moja kwenye ukuta kunabadilisha urefu wake, na ukuta uliounganishwa hapo unasogea nao.
- `ROTATE` kwenye ukuta uliounganishwa inafanya kazi kwa namna ile ile: ncha za majirani zao zinateleza kwenye mistari yao yenyewe hadi ukuta uliozungushwa.
- Ili kusogeza kona, chagua kuta zote mbili zinazokutana hapo kisha uburute mpini wa kona. Kuta zote mbili zinabaki kwenye kona na zote mbili zinazunguka. Kuta zilizo mbali zaidi zinabaki kama zilivyokuwa.
- Shikilia {{key:Alt}} unapobonyeza mahali pipya pa mpini ili kuvunja viungio kwa makusudi: ukuta unakwenda pale ulipouweka na hakuna kinachofuata.
- Ikiwa kuburuta kungezungusha ukuta uliounganishwa nyuma kupitia ncha yake ya mbali, kitendo kinakataliwa na hakuna kinachobadilika.
- Ukuta unaochora kwa {{ui:Zuia viungio}} (`D` kwenye `WALL`), au unaozima kwenye {{ui:Sifa}} ({{ui:Zuia kiungio mwanzoni}}, {{ui:Zuia kiungio mwishoni}}), unabaki huru kwenye ncha hiyo, hata kama unagusa ukuta mwingine, hadi uuruhusu tena.
- `WALLDISJOIN` ({{ui:Zuia kuunganisha}} kwenye kikundi cha {{ui:Kuta}}) hufanya kitu kile kile kwa kubofya: bonyeza ukuta karibu na ncha moja ili kuzuia viungio kwenye ncha hiyo, kisha ubonyeze tena ili kuviruhusu.
- Mchoro wa zamani haujahifadhi viungio bado. Mabadiliko ya kwanza unayofanya yanavitafuta mara moja, kutoka jinsi kuta zilivyosimama kabla ya mabadiliko, kisha yanavihifadhi. `WALLJOINS` inafanya hivyo mara moja.
- Faili za DWG na DXF zinabeba viungio ndani ya kila ukuta. CadCraft inavisoma tena kama vilivyohifadhiwa. Programu isiyohifadhi data ya ziada inaonyesha kuta kama bloku za kawaida na inapoteza viungio. Kiungio ambacho kuta zake zilisogezwa kwenye programu nyingine kinapotea wakati wowote unapobadilisha mojawapo ya kuta.

## Mtindo wa kiungio cha kona

Kona ambapo kuta mbili zinakutana ncha kwa ncha inachorwa kama {{ui:Mkato wa mshazari}} isipokuwa uchague mtindo mwingine.

- `WALLJOINSTYLE` ({{ui:Mtindo wa kuunganisha}} kwenye kikundi cha {{ui:Kuta}}): bonyeza kona. Kila bonyezo linakwenda kwenye mtindo unaofuata: {{ui:Mkato wa mshazari}}, {{ui:Butu}}, {{ui:Kukatwa mraba}}, kisha {{ui:Mkato wa mshazari}} tena. Andika `T` kubadilisha ni ipi kati ya kuta mbili inayopita kwenye kona uliyobonyeza mwisho. Bonyeza {{key:Enter}} kumaliza. Mara moja ya amri ni hatua moja ya kutendua.
- {{ui:Butu}}: ukuta mmoja unapita hadi uso wa mbali wa mwingine, na mwingine unasimama kwenye ubavu wake. {{ui:Kukatwa mraba}}: vivyo hivyo, lakini ukuta unaopita unaishia kwa mraba kwa yenyewe. Kwenye pembe ya kulia zinaonekana zinafanana.
- Kwenye {{ui:Sifa}} ya ukuta: {{ui:Mtindo wa kuunganisha mwanzoni}}, {{ui:Mtindo wa kuunganisha mwishoni}}, na {{ui:Hupita mwanzoni}}, {{ui:Hupita mwishoni}}.
- Mtindo unahifadhiwa pamoja na kuta zote mbili na unasafiri kwenye faili za DWG na DXF. Nakala ya ukuta inaanza bila mtindo huo.
- Kiungio cha T hakina mtindo wa kuchagua: ukuta ambao ubavu wake unaguswa unapita. Kona ambapo kuta tatu au zaidi zinakutana inabaki mkato wa mshazari. Vivyo hivyo kona yenye ncha kali sana (chini ya takriban digrii 30) na kuta mbili kwenye mstari mmoja.

## Chora maumbo ya ukuta

Kila moja hutengeneza kuta katika hatua moja ya kutendua, pamoja na kona zilizounganishwa. Katika `WALL`, `O` huweka ofseti ya nafasi (kuta inakwenda umbali gani kushoto kwa mibofyo yako), na `D` huzima kuunganisha kwa kuta utakazochora baadaye.

- `WALLRECT` (`WR`): kona mbili zilizo kinyume, kama `RECTANG`.
- `WALLROT`: upande wa kwanza, kisha umbali wa upande wa pili, kwa mstatili wa pembe yoyote.
- `WALLPOLY` (`WP`): idadi ya pande (3 hadi 64), katikati, `I` kwa ndani ya duara au `C` kwa nje ya duara, kisha radius, kama `POLYGON`.
- `WALLARC` (`WARC`): katikati, mwanzo, mwisho. `D` inageuza arc upande mwingine.
- `WALLTAN`: bonyeza karibu na ncha ya ukuta, kisha ncha ya arc, ambayo inaanza kwenye ukuta huo.
- `WALLPICK`: bonyeza mstari au polilaini kisha useme kama uchukue pia mistari iliyounganishwa nayo.
- `WALLTRACE`: bonyeza ndani ya eneo lililofungwa la mistari na kuta ili kuweka kuta kuzunguka dogo kabisa.

Kuta za mpango ni zilizonyooka, kwa hiyo arc inachorwa kama kuta fupi zilizonyooka, kila moja ya digrii 15. Zinaungana kama kona nyingine yoyote.

## Kata kuta

- `WALLSPLIT` (`WS`): bonyeza ukuta, kisha nukta. `C` inakata pale ukuta mwingine unapoukatiza, `G` inaacha pengo kati ya vipande, `F` inafanya ncha za kukatwa kuwa huru badala ya kuunganishwa. Kipande cha kwanza kinabaki pale ukuta ulipokuwa kwenye mchoro, na milango na madirisha vinaenda na kipande chao. Kukata kupitia mlango au dirisha kunakataliwa.
- `WALLSPLITGAP` ({{ui:Gawanya kwa pengo}}): mgawanyo uleule, lakini unauliza pengo kwanza.
- `WALLDELSEG`: bonyeza ukuta, kisha ncha mbili za kipande cha kufuta.
- `WALLREJOIN`: bonyeza sehemu mbili za ukuta mmoja ili kuzifanya kuwa moja tena.

## Sogeza kuta kwa umbali

- `WALLDIM`: bonyeza kipimo cha mstari au kilichopangwa kinachotoka ukuta mmoja hadi mwingine, kisha uandike thamani mpya. Ukuta wa mbali unasogea mraba kwa yenyewe, ukuta wa ncha ya kwanza unabaki, na kuta zilizounganishwa nao zinafuata.
- `WALLOFFSET` (`WO`): bonyeza ukuta, kisha upande wa kuusogezea (`D` huandika umbali, `C` hutengeneza nakala badala yake).
- `WALLSTRETCH`: dirisha kuzunguka ncha za kuta, kisha nukta ya msingi na nukta ya pili.
- Kwenye {{ui:Sifa}}, {{ui:Urefu}} uliondikwa unaweka mwanzo na kuchukua pamoja nao ukuta uliounganishwa kwenye ncha ya mbali, na {{ui:Unene}} mpya unakua mbali na {{ui:Mstari wa nafasi}} uliyochagua (upande wa kushoto, upande wa kulia au katikati).

## Funga kuta

Kufuli inabaki na ukuta kwenye faili. Ukisogeza ukuta mmoja uliofungwa, mwingine unafuata. Ikiwa mabadiliko moja yanasogeza kuta zote mbili kwa njia tofauti, kitendo kinakataliwa na hakuna kinachobadilika.

- `WALLHOLD`: funga ukuta kwa ukuta mwingine. `A` inausogeza kwanza kwenye mstari wa ukuta mwingine, `K` inabaki na umbali uliokuwa nao.
- `WALLHOLDDIM`: funga umbali kati ya kuta mbili sambamba.
- `WALLGRID`: funga ukuta kwenye mstari wa gridi (mstari kwenye tabaka la gridi wenye lebo yake kwa maandishi kwenye ncha moja), ama kando yake au ncha moja juu yake. Ukuta uliofungwa kando ya mstari unabaki na umbali wake kutoka kwake. Sogeza mstari wa gridi kwa `GRIDMOVE` nao ukuta unafuata wote, pamoja na kuta zilizounganishwa. Ukuta unaolala kando ya mstari wa gridi unasogea wote pamoja nao hata bila kufuli, na ukuta unaoishia tu kwenye mstari unanyoshwa na ncha hiyo.
- `WALLHOLDS` inaorodhesha kufuli. `WALLUNHOLD` inaondoa kufuli kwenye ukuta.
- Kila kufuli inaonyesha kufuli ndogo kwenye mpango: kando ya katikati ya ukuta uliofungwa, au kando ya ncha iliyofungwa kwenye mstari wa gridi. Bonyeza kufuli ndogo ili kuondoa kufuli hiyo.

## Bado hapa hakuna

Kufuli zinatumia mistari ya katikati ya kuta. Kuta hapa hazina tabaka, kwa hiyo hakuna kipaumbele cha tabaka kwenye makutano, na kuta hazipindi (tazama arc zilizo juu). Hakuna aliyejaribu zana hizi kwenye mchoro mkubwa bado, na hazijakaguliwa kwenye programu nyingine ya CAD.
