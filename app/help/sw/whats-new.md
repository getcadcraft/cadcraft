---
title: Kilichobadilika katika 0.8 na 0.8.1
summary: Kielelezo hafifu kinachokamilisha mchoro wako, michoro ya kalamu na picha za michoro zinazogeuzwa kuwa jiometri, karatasi zinazojipanga zenyewe, maelezo yanayopendekezwa unapochora, GRIDMOVE na AUTODIM, lebo, faili rafiki kwa kuunganisha, marekebisho yanayotokana na alama nyekundu, uchoraji bila kuona, mipaka ya mchoro, mielekeo, fonti za SHX, michoro kutoka maandishi, na marekebisho katika 0.8.1.
keywords: kilichobadilika, nini kipya, maelezo ya toleo, orodha ya mabadiliko, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, kukamilisha kiotomatiki, kielelezo hafifu, tab, sketchfix, photosketch, autosheet, maelezo ya kina, gridmove, autodim, lebo, redline, unganisha, git, fossil, ufikiaji, uchoraji bila kuona, msomaji wa skrini, mipaka, mielekeo, aunits, shx, mchoro, ole, historia, linganisha, kwa maneno, sifa, futi na inchi, nyoosha, lugha, vifaa vya kuingiza, matatizo, moja kwa moja, wasaidizi
from: 9dd82db5
---

Hiki ndicho kilichobadilika katika CadCraft 0.8 na 0.8.1, ikilinganishwa na 0.7. 0.8 (1 Novemba 2026) inaongeza visaidizi vya kuchora vinavyofanya kazi kutokana na mchoro wako mwenyewe, kwa kanuni zilizo kwenye kompyuta yako na bila modeli, na 0.8.1 (2 Novemba 2026) inarekebisha hitilafu zilizoripotiwa baada ya toleo hilo.

## Mpya

### Kuchora kinachokamilisha wazo lako

- **Kielelezo hafifu kinaonyesha kinachofuata.** Bila amri inayoendeshwa, kielelezo hafifu cha kijivu chenye mistari-mistari kinaonyesha kile ambacho mifumo ya mchoro wako inasema kinafuata: nguzo inayofuata kwa nafasi ile ile, hatua inayofuata ya ngazi, ukuta unaokosekana wa chumba. Bonyeza {{key:Tab}} ili kuchora kama hatua moja ya kutendua, au {{key:Esc}} ili kukiondoa. Kinatazama vitu vipya zaidi tu, kwa hiyo kinabaki laini kwenye mchoro mkubwa. Kizime katika {{ui:Mipangilio}} › {{ui:CadCraft}} au kwa {{cmd:AUTOCOMPLETE}} `Off`.
- **Nukta inayofuata unapochora mstari.** Katikati ya {{cmd:LINE}} au {{cmd:PLINE}}, kielelezo hafifu ni nukta inayofuata: hatua inayofuata ya ngazi, kona ya nne ya mstatili, au nukta inayoufunga. Sogeza kielekezi karibu nayo kisha bonyeza {{key:Tab}}, kana kwamba umebofya hapo.
- **Michoro ya kalamu inakuwa jiometri sahihi.** {{cmd:SKETCHFIX}}: chora mistari myepesi kwa kalamu, kipanya au kidole, na kila mmoja unageuka kuwa mstari, duara, tao, mstatili au polilaini safi, ukivutwa kwenye kile kilichokwisha kuchorwa. Tazama [Chora kwa kalamu na upate jiometri sahihi](topic:sketch-with-a-pen).
- **Picha ya mchoro wa mkono inakuwa mchoro.** {{cmd:PHOTOSKETCH}} (`PSK`) inatafuta karatasi kwenye picha, inanyoosha mtazamo, inatumia ukubwa wa karatasi na skeli unayotoa, na inanakili mistari ya kalamu kwenye tabaka moja kwa kila rangi ya kalamu. Maandishi hayanakiliwi.
- **Kipime kwa kanuni.** {{cmd:AUTODIM}} (`ADIM`) inatengeneza minyororo ya vipimo kando ya pande unazochagua, ukubwa wa jumla, upana wa fursa, kipenyo cha matundu na, kwa `Grid`, nafasi ya gridi. Haitarudia kipimo ambacho tayari kipo.
- **Sogeza mstari wa gridi na seti nzima inafuata.** {{cmd:GRIDMOVE}} (`GM`): kuta zinazoishia kwenye mstari wa gridi zinanyooka pamoja nao, kuta zilizo kando yake, nguzo, kiputo chake na lebo vinasogea, na vipimo vilivyo juu yake vinapima nafasi mpya. Hatua moja ya kutendua.

### Karatasi, maelezo ya kina na lebo

- **Karatasi zinazojipanga zenyewe.** {{cmd:AUTOSHEET}} inachukua mionekano yako iliyopewa majina (au sehemu tofauti za modeli), inachagua ukubwa wa karatasi na skeli ya kawaida, kisha inaweka mionekano kwenye karatasi mpya zenye kichwa cha mchoro na maelezo ya jina na skeli. Kila kitu bado kinaweza kuhaririwa. Tazama [Panga karatasi kwa ajili yangu](topic:lay-out-sheets-for-me).
- **Maelezo ya kina ya kampuni yako, yanayopendekezwa unapochora.** {{cmd:DETAILS}} (`DET`) inahifadhi bloku zako za maelezo ya kina. Kile unachochagua kinapolingana na mojawapo kwa maneno yaliyo kwenye tabaka zake, majina ya bloku na maelezo, upau wa hali unasema hivyo; chagua na uweke. {{cmd:DETAILS}} › Share huweka orodha yako kwenye folda yako ya Documents na kuleta kile ambacho timu yako imeongeza. {{ui:Mipangilio}} inazima mapendekezo.
- **Lebo kwenye bloku.** {{cmd:TAGS}} inafafanua lebo (aina yake, thamani zinazoruhusiwa, bloku zinazohusika), inaiweka kwenye marejeo ya bloku unayochagua, na kuziorodhesha kama jedwali unaloweza kuhifadhi kama CSV. Ufafanuzi unahifadhiwa ndani ya DWG. Tazama [Lebo](topic:tags).
- **Mipaka ya mchoro.** {{cmd:LIMITS}} inaweka mstatili kwa ajili ya mchoro: gridi inajaza ndani yake na zoom All inaonyesha. Mipaka inaonekana kama mstari wa nje na inahifadhiwa katika DWG na DXF, pamoja na mipaka ya karatasi. Tazama [Weka mipaka ya mchoro](topic:drawing-limits).

### Kufanya kazi na watu wengine na programu nyingine

- **Geuza alama kuwa marekebisho.** {{cmd:REDLINE}} inasoma kifurushi ambacho MarkupCraft inakiandika na kuorodhesha kila badiliko. Kubali au kukataa kila moja kwa maelezo; zilizokubaliwa zinapata wingu la marekebisho na kumbukumbu ya marekebisho kwa hatua moja ya kutendua, nawe unahifadhi faili la majibu linalofunga alama katika MarkupCraft. Tazama [Geuza alama kuwa marekebisho](topic:redline-to-revision).
- **Michoro ambayo git na Fossil zinaweza kuunganisha.** Ukiwasha {{ui:Faili rafiki kwa kuunganisha}} katika {{ui:Mipangilio}} › {{ui:CadCraft}}, kila kitu kinapata ufunguo usiobadilika (faili ni takriban asilimia 10 kubwa zaidi). `cadcraft merge base ours theirs` kisha inaunganisha mabadiliko ya watu wawili kwenye DWG au DXF moja, kitu kwa kitu, na kuripoti tu pale ambapo watu wawili wamebadilisha kitu kile kile. Tazama [Unganisha mabadiliko ya watu wawili kwenye mchoro mmoja](topic:merge-drawings).
- **Kilichobadilika, kwa maneno.** Katika Historia, Linganisha inatoa orodha rahisi: mahali palipobadilika, ukubwa wa maeneo hayo, kilichoongezwa, kilichoondolewa au kilichobadilishwa, na maandishi yaliyohaririwa. Tazama [Eleza kwa maneno kilichobadilika](topic:changes-in-words).
- **Mielekeo na pembe.** Andika mwelekeo kama mwelekeo wa mpima ardhi, kwa mfano N45°23'30"E, au kwa digrii, dakika na sekunde, popote pembe inapohitajika; AUNITS huweka jinsi pembe zinavyoonyeshwa. Tazama [Andika na onyesha mielekeo na pembe](topic:bearings-and-angles).
- **Fonti zako za SHX.** Ipe CadCraft folda ya fonti za SHX, na mitindo ya maandishi inayozitaja huchorwa kwa fonti hizo, kwenye skrini na kwenye chapa. Tazama [Chora maandishi kwa fonti zako za SHX](topic:shx-fonts).
- **Mchoro kutoka maandishi.** {{cmd:DIAGRAM}} inasoma mchoro wa mtiririko wa Mermaid, mchoro wa vipengele wa PlantUML, D2 au orodha ya kutoka-hadi, kisha inachora bloku na viunganishi unavyoweza kuhariri. Tazama [Chora mchoro kutoka maandishi](topic:text-to-diagram).
- **Vitu vya OLE kwenye DWG.** {{cmd:OLELIST}} inaorodhesha vitu vya OLE ambavyo DWG inavibeba na ambavyo CadCraft haiwezi kuviweka yenyewe, na inaweka nakala ya picha mahali unapoeleza. Tazama [Picha](topic:pictures#objects-from-other-programs-ole).
- **Hesabu zako zinabaki na mchoro.** Karatasi za hesabu na sababu za usanifu zinahifadhiwa ndani ya DWG pamoja na jedwali la madarasa.

### Kuchora bila kuona

- Washa {{ui:Uchoraji bila kuona}} katika {{ui:Mipangilio}} (au andika {{cmd:ACCESS}} na ujibu `On`). CadCraft inatamka kila amri na matokeo kupitia msomaji wako wa skrini, inaeleza mchoro na kilicho karibu na kielekezi, inakuruhusu kusogeza kielekezi na kuchagua nukta kwa kibodi, na inatoa sauti kwa kila kuvuta-kwenye-nukta na kila mpini. Ambapo kivinjari chako kinaweza kutambua sauti kwenye kompyuta yako, amri zinaweza kutamkwa. Tazama [Chora bila kuona](topic:draft-without-sight).

### Katika kila programu

- **Lugha.** Lugha 54; kumi ni mpya (Kilithuania, Kilatvia, Kibosnia, Kimarathi, Kitelugu, Kialbania, Kiafrikaans, Kifilipino, Kiswahili, Kiuzbeki). Lugha zaidi ya Kiingereza ni rasimu za mashine hadi mzawa azisome.
- **Vifaa vya kuingiza.** Trackpad, kalamu, kipanya cha 3D, kidhibiti cha mchezo na vidhibiti vya MIDI.
- **Safu za upau wa zana na gridi ya sifa.** {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Safu za upau wa zana}} inatoa Wrap, safu 2 au safu 1 katika programu nyingine. CadCraft inahifadhi mpangilio wake katika {{ui:Mipangilio}} › {{ui:CadCraft}} (tazama [Safu za upau wa zana](topic:settings#toolbar-rows)). Gridi ya sifa ya pamoja iko katika programu nyingine tatu, si katika CadCraft.
- **Matatizo, Moja kwa moja na programu-jalizi.** Paneli ya pamoja ya Matatizo inayoonya katika kila programu, mwonekano wa Moja kwa moja unaoonyesha nani yuko wapi katika CadCraft Studio (tazama [Fanyia kazi mchoro mmoja pamoja](topic:work-live)), na orodha ya programu-jalizi.
- **Unganisha AI yako.** Muunganisho mmoja kutoka CadCraft Studio hadi programu zote nane, ukiwa na kiwango cha kusoma tu, kupendekeza au kuhariri kwa kila programu, na kumbukumbu ya maneno rahisi ya kile msaidizi alichofanya. CadCraft haina AI yake yenyewe, na Uliza katika kila programu hutumia AI unayounganisha.

## Imerekebishwa katika 0.8.1

- **Sifa zilionyesha 150 badala ya 12'-6"** katika michoro ya futi na inchi. Sehemu ambazo programu yenyewe inazisoma zinarudisha maandishi yake.
- **Faili za DWG ambazo sehemu ya madarasa ilisomwa kama aina isiyo sahihi** (GitHub cadcraft#5) sasa zinafunguka ipasavyo.
- **Msalaba wa kielekezi hauonekani tena nyuma ya madirisha ibukizi.**
- **Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha wakati programu inaendesha.** Hapo awali yalikuwa Kiingereza pekee. Bado hayajajaribiwa kwenye kila jukwaa: tuambie lugha isipobadilika.
- **Tableti zikiwa wima** hutoa urefu wa ziada wa gridi kwa turubai, na hali ya karatasi huanza kwa 760 px au chini.
- **STRETCH yenye dirisha linalovuka, na LIMITS,** viliripotiwa kwenye Studio 0.8.0 na tayari vilikuwa sahihi katika toleo la wavuti la 0.8; kisakinishi cha aliyeripoti kilikuwa cha zamani. Studio 0.8.1 inavibeba.

## Bado si katika toleo hili

- **0.8 na 0.8.1 hazijasainiwa kwa msimbo.** Windows inaweza kuonya (chagua {{ui:Taarifa zaidi}}, kisha {{ui:Endesha hata hivyo}}); kwenye Mac, bonyeza kulia CadCraft Studio na uchague {{ui:Open}}. Matoleo ya maduka yamesimamishwa, na toleo la iPad na iPhone halikujengwa upya kwa 0.8.1.
- **Michoro ya kalamu na picha za michoro ya mkono** zimejaribiwa tu kwenye picha za kubuni na kipanya, bado si kwa kalamu halisi, skrini ya kugusa au mchoro wa mkono kwenye karatasi.
- **Uchoraji bila kuona** umejaribiwa kwa ukaguzi wa kiotomatiki, bado si kwa msomaji wa skrini au mjaribu asiyeona.
- **Kushiriki maelezo** hakujakaguliwa na watu wawili, na folda ya Team Cloud Plan kama folda ya Documents haijajengwa.
- **Kuunganisha** kunafanya kazi kwa faili za DWG na DXF za CadCraft; kwa faili za programu nyingine hakijajengwa.
- **Kutendua katika madirisha mengi:** CadCraft inaripoti kila hatua iliyokamilika, lakini Studio bado haina Tendua moja kwa programu zote; kila programu hutendua hatua zake yenyewe.
- **Vitu vya OLE vya DWG** vinahifadhiwa lakini havichorwi mahali pake.
- **Kusoma jedwali za mitindo ya chapa (faili za CTB)** kutoka programu nyingine kumejengwa lakini hakujakaguliwa dhidi ya faili kutoka programu nyingine.
- **Unganisha AI yako:** kuunganisha kwa mbofyo mmoja katika Studio, kiunganishi kilichopangishwa kwa AI ya kivinjari, ufunguo wako wa API ndani ya Studio na kifurushi cha MCP kilichochapishwa havijaahidiwa katika toleo hili.

Kwa toleo lililotangulia, tazama [Kilichobadilika katika 0.7](topic:whats-new-0-7).
