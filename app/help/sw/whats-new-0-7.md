---
title: Kilichomo kipya katika 0.7 (cha awali)
summary: Viwekeleo vya PDF na uingizaji wa PDF, michoro iliyoskaniwa yenye ufuatiliaji wa kiotomatiki, splines halisi kwa SPLINE, SPLINEDIT na PEDIT, kidhibiti cha mitindo ya vipimo, maandishi yanayobaki na uumbizaji wake, WBLOCK na mizani zako, solidi za 3D kutoka programu nyingine, kusajili skani, paneli ya Laser, usafirishaji wa USD, Historia na uchapishaji katika CadCraft Studio, mchoro wa kwanza unaoongozwa, upau wa zana upande wowote au katika safu chache, na zaidi kwa wasaidizi wa AI.
keywords: mpya 0.7, toleo la awali, maelezo ya toleo, historia ya mabadiliko, mabadiliko, 0.7, toleo, vipengele vipya, pdf, pdfattach, pdfimport, kiwekeleo, skani, scanattach, scantrace, ufuatiliaji, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, uumbizaji, wblock, scalelistedit, orodha ya mizani, acis, solidi za 3D, registerscans, kusajili skani, icp, e57, las, laser, grbl, g-code, usd, usdout, historia, matoleo, linganisha, chapisha, kichapishi, png, svg, jedwali la mtindo wa chapisho, aina ya mstari, ziara, karatasi ya mkato, ramani ya amri, nafasi ya upau wa zana, safu za upau wa zana, toolbardock, regen, regenall, trackpad, telezesha, ukurasa wa msimbo, cyrillic, kikorea, kichina, kijapani, umeme, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folda ya usaidizi, wasaidizi, mcp, vitengo, kireno
from: d07ca034
---

Hiki ndicho kilichobadilika katika CadCraft 0.7, ikilinganishwa na 0.6. Mengi yaliombwa kwenye Discord. Orodha imepangwa kwa eneo, na muhimu zaidi kwanza.

## Mpya

### PDF na michoro iliyoskaniwa

- **Weka ukurasa wa PDF chini ya mchoro.** {{cmd:PDFATTACH}} (`PDFATT`) inaweka ukurasa kwa ukubwa wake halisi au kipimo unachoandika. Shikamana na mistari yake, ififishe, ifanye nyeusi-nyeupe ({{cmd:PDFADJUST}}), ikate ({{cmd:PDFCLIP}}) na ubadilishe tabaka za PDF yenyewe ({{cmd:PDFLAYERS}}). Inachapishwa kama mistari, kujaza na maandishi, na DWG au DXF 2000 inaihifadhi kama kiungo cha faili. Kufungua PDF kwa {{ui:Fungua}} kunauliza kama uiambatanishe au uiingize. Tazama [Viwekeleo vya PDF na uingizaji wa PDF](topic:pdf-underlay).
- **Geuza ukurasa wa PDF kuwa vitu vya kuchora.** {{cmd:PDFIMPORT}} (`PDFIM`) inatengeneza mistari, polilaini, duara, arcs, mistari ya kivuli thabiti na maandishi kwenye tabaka zinazopewa jina la PDF, kwa ukubwa halisi, kipimo unachoandika, au kupimwa kutoka nukta mbili na umbali halisi, katika hatua moja ya kutendua. Tazama [Ingiza ukurasa](topic:pdf-underlay#import-a-page).
- **Michoro iliyoskaniwa.** {{cmd:SCANATTACH}} inaleta PNG, JPEG au TIFF (ukurasa mmoja au wote) au ukurasa wa PDF ambao ni picha. Kisha ipime kutoka nukta mbili ({{cmd:SCANSCALE}}), ipange ({{cmd:SCANALIGN}}), inyooshe kutoka mistari yake mirefu ({{cmd:SCANDESKEW}}), ifanye nyeusi-nyeupe na uondoe madoa ({{cmd:SCANCLEAN}}), uikate na ufute sehemu zake. Kila hatua ni hatua moja ya kutendua, na faili asili inahifadhiwa. Tazama [Michoro iliyoskaniwa na ufuatiliaji](topic:scanned-drawings).
- **Fuatilia skani kuwa mistari na arcs.** {{cmd:SCANTRACE}} inachora mistari ya skani kama mistari na arcs kwenye tabaka mpya, SCAN-TRACE, kwa uvumilivu unaouweka, na inaacha maandishi na mistari ya kivuli kama yalivyo. Ripoti inaonyesha kilichotengenezwa na kilichoachwa. Si dai kwamba matokeo ni sahihi: ikague dhidi ya karatasi. {{cmd:RASTERSNAP}} inaruhusu viambatanisho vya vitu kupata ncha, pembe na makutano ya skani. Hakuna kinachotumwa popote na hakuna modeli iliyofunzwa inayotumika. Tazama [Ufuatiliaji](topic:scanned-drawings#the-trace).

### Kuchora na kuhariri

- **Splines halisi.** {{cmd:SPLINE}} (`SPL`) inachora mkunjo unaopita kwenye nukta au kutoka nukta za udhibiti (shahada 1 hadi 5), kwa tangenti za ncha. {{cmd:SPLINEDIT}} (`SPE`) inasogeza, kuongeza na kufuta nukta za kufaa au za udhibiti, kuweka uzito, kufungua, kufunga, kugeuza, au kubadilisha spline kuwa polilaini. Splines kutoka faili za DWG na DXF zinafunguka kama splines, na DWG na DXF 2000 zinazihifadhi kama splines. Tazama [Splines na polilaini](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) inafunga na kufungua polilaini, inaunganisha mistari na arcs kwake, inaweka upana mmoja, inapitisha mkunjo kwenye vipeo au spline kwenye vipeo hivyo na kuirudisha kwa Decurve, inageuza, na inahariri nyingi kwa mara moja. Tazama [Hariri polilaini](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) inaandika bloku, vitu kadhaa au mchoro mzima kwenye DWG au DXF mpya inayobeba tabaka, mitindo na bloku zinazotumika pekee. Tazama [Andika bloku au vitu kwenye faili yao wenyewe](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN na REGENALL.** {{cmd:REGEN}} (`RE`) inachora upya kichupo ulichopo kutoka kwenye mchoro, na {{cmd:REGENALL}} (`REA`) inachora kila kichupo, paneli na mchoro uliofunguliwa. Tazama [REGEN na REGENALL](topic:commands#regen-and-regenall).

### Maandishi na vipimo

- **Maandishi yanahifadhi uumbizaji wake.** Maandishi ya aya kutoka programu nyingine yanahifadhi rangi zake kwa neno, herufi nzito na italiki, mstari chini, sehemu zilizopangwa juu ya nyingine, na urefu wake. Yanachorwa kwenye skrini na kwenye PDF, yanabaki unapohariri maneno, na yanahifadhiwa tena. Tazama [Uumbizaji ndani ya maandishi ya aya kutoka programu nyingine](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Kidhibiti cha mitindo ya vipimo.** {{cmd:DIMSTYLE}} (`D`) inatengeneza, kubadilisha, kulinganisha na kutumia mitindo ya vipimo yenye majina. Kubadilisha mtindo kunabadilisha kila kipimo kinachoutumia. {{cmd:DIMEDIT}} (`DED`) inarudisha maandishi, inaandika maandishi mapya, na inageuza au kuinamisha mistari ya viendelezo. {{cmd:DIMTEDIT}} inasogeza maandishi kushoto, kulia au katikati. Tazama [Mitindo ya vipimo yenye majina](topic:dimension-settings#named-dimension-styles).
- **Mizani zako.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) inaongeza mizani kama 1:75 kwenye orodha za mizani za mwonekano na chapisho. Zinahifadhiwa kwenye mchoro (DWG na DXF 2000), na mchoro kutoka programu nyingine unaleta orodha yake. Tazama [Mizani](topic:units-papers-scales#scales).
- **Maandishi kwa alfabeti nyingine.** Faili za DXF zilizohifadhiwa kwa kurasa za msimbo za Cyrillic, Kikorea, Kichina, Kijapani au Kivietinamu sasa zinafunguka na maandishi yake. Maandishi ya Kichina, Kijapani na Kikorea yanachapishwa kwenye PDF (chapisho linapakua fonti kubwa zaidi mara ya kwanza inapoihitaji). Tazama [Fonti](topic:text#font).

### Kuchapisha na kuchapa

- **Zaidi katika majedwali ya mtindo wa chapisho.** Kwa kila rangi, jedwali sasa linaweza pia kuweka aina ya mstari, mwisho wa mstari na muunganiko wa mstari, na mtindo wa kujaza unaochapisha kujaza thabiti kama mistari ya kivuli. Jedwali lina orodha yake ya unene wa mstari na kipimo cha aina ya mstari. Tazama [Majedwali ya mtindo wa chapisho](topic:plot-pdf#plot-style-tables).
- **Chapisha, na faili za PNG na SVG.** Kidirisha cha Chapisho kina {{ui:Chapisha…}}, {{ui:Pakua PNG}} (300 dpi) na {{ui:Pakua SVG}}. Katika CadCraft Studio kinaorodhesha vichapishi vya kompyuta, karatasi zao na idadi ya nakala. Tazama [Chapisha](topic:plot-pdf#print) na [Picha na faili za SVG](topic:plot-pdf#picture-and-svg-files).

### 3D na wingu za pointi

- **Solidi za 3D kutoka programu nyingine.** Solidi, mikoa na miili katika nafasi ya modeli ya mchoro zinaonekana kwenye kichupo cha 3D, kwa kusoma tu. Kuhifadhi kama DWG kunazirudisha bila kubadilika. Nyuso kwenye nyuso ambazo CadCraft bado haichori zinaorodheshwa, hazikisiwi. Tazama [Solidi kutoka programu nyingine](topic:3d-solids#solids-from-other-programs).
- **Sajili skani kadhaa.** {{cmd:REGISTERSCANS}} (`REGSCAN`) inaweka skani zilizochukuliwa kutoka nafasi tofauti kwenye fremu moja, kwa jozi za nukta au kwa viwianishi lengwa unavyoandika. Inazisafisha kwa ICP, inahifadhi usajili kama faili ndogo ya mradi, na inaandika wingu lililosajiliwa kama faili moja ya LAS au E57. Tazama [Sajili skani kadhaa kuwa moja](topic:register-scans).
- **Usafirishaji wa USD.** {{cmd:USDOUT}}, au {{cmd:EXPORT3D}} › {{ui:USD}}, inaandika solidi za kichupo cha 3D kama `.usda`, `.usdc` au `.usdz`. Tazama [Hamisha modeli ya 3D kama USD](topic:usd).
- **Hesabu kwenye kichupo cha 3D.** Pale zana za kichupo cha 3D zinapouliza umbali, unaweza kuandika hesabu, kama kwenye mstari wa amri. Tazama [Hesabu katika thamani iliyoandikwa](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Kutengeneza vitu

- **Tuma mchoro kwa laser.** {{cmd:LASER}}, au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Laser…}}, inafungua paneli juu ya mchoro: kila tabaka hukata, hukwaruza, huchonga mistari, hujaza maumbo, huchonga picha au haitumwi, pamoja na nguvu, kasi na pasi zake. Onyesho la kukagua linafuata mabadiliko yako. {{ui:Hifadhi G-code…}} inaandika G-code ya hali ya laser ya GRBL. Katika Chrome au Edge paneli inaweza kuunda fremu ya kazi na kuituma kupitia USB. Mipangilio inahifadhiwa kwenye mchoro (DWG na DXF). Tazama [Tuma mchoro kwa laser](topic:laser-cutting).
- **Alama za usakinishaji wa jengo kwenye nyongeza ya Umeme.** Soketi za data, simu na TV, swichi za funguo na za muda, kidhibiti joto, alama ya kutoka, vigunduzi, kitufe cha tahadhari na kipaza sauti, feni, hita ya maji, jiko, sehemu ya kuchaji EV, mita ya nishati na sub-board, na alama za RCD na RCBO. Saketi inaweza kubeba RCD, jedwali la paneli lina safu ya RCD, na ukaguzi unataja saketi za soketi zisizo na RCD ya 30 mA au chini. Ni ukumbusho wa upangaji, si ukaguzi wa kanuni.
- **Nyongeza ya P&ID.** P&ID inachora michoro ya mchakato: alama zenye sehemu za kuunganisha, mistari ya mchakato na ya ishara, lebo, nambari za mistari, orodha za mistari, vifaa, ala na vali (CSV au kitabu cha kazi), na ukaguzi. Inakuja pamoja na CadCraft na imezimwa mpaka uiwashe kwenye {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Programu-jalizi}}. Ni msaada wa kuchora, si idhini ya kihandisi, na maneno yake yako kwa Kiingereza tu kwa sasa.

### Kuanza na skrini

- **Mchoro wa kwanza unaoongozwa.** {{cmd:TOUR}} (au {{ui:Anza ziara}} kwenye kadi ya kuanzia) inakuongoza katika hatua sita kwenye mchoro halisi: mstari, duara, kusogeza, kupunguza, kufuta na kipimo. Inaanza yenyewe mara ya kwanza CadCraft inapofunguka ikiwa haina kitu. Tazama [Unapendelea kuongozwa?](topic:getting-started#prefer-to-be-guided)
- **Karatasi ya mkato na ramani ya amri.** [Karatasi ya mkato](topic:cheat-sheet) ina amri 40 za kila siku kwenye ukurasa mmoja, pia kama PDF ya kuchapisha. [Ramani ya amri](topic:command-map) inaorodhesha amri kwa majina yake mafupi, kuanzia A hadi Z.
- **Upau wa zana upande wowote.** {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Nafasi ya upau wa zana}}: juu (kama awali), chini, kushoto au kulia, au andika {{cmd:TOOLBARDOCK}}. Tazama [Nafasi ya upau wa zana](topic:settings#toolbar-position).
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Safu za upau wa zana}}: kujikunja ili kutoshea, safu 2 au safu 1, kwa upau wa zana wa CadCraft na kwa mitindo ya Drafting classic na Ribbon. {{key:Shift+Ctrl+F1}} inapitia hizo, {{key:Ctrl+F1}} inapitia kile vitufe vinachoonyesha, na {{cmd:TOOLBARROWS}} na {{cmd:TOOLBAR}} zinaziweka. Kidokezo cha kuanzia kina kitufe cha kufunga. Asante kwa GJoe2, aliyetuma hili kama pull request. Tazama [Safu za upau wa zana](topic:settings#toolbar-rows).

### Katika CadCraft Studio

- **Historia.** {{cmd:HISTORY}} (`HIST`), au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Historia…}}: nakala ambazo Studio inahifadhi unapofungua na kuhifadhi mchoro, na matoleo ya wingu ya mchoro ulipoufungua kutoka wingu. Fungua au rudisha moja, au linganisha mawili, kwa vilivyoongezwa, vilivyoondolewa na vilivyobadilishwa vinavyoonyeshwa kwa rangi. Tazama [Historia](topic:history).
- **acad.lsp na acaddoc.lsp.** Chagua folda ya usaidizi kwenye {{cmd:APPLOAD}}: faili hizo mbili zinapakiwa CadCraft inapoanza (acaddoc.lsp tena kwa kila kichupo kipya cha mchoro), na `S::STARTUP` inaendeshwa baada yake. Tazama [Pakia programu](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Kidirisha cha Chapisho katika dirisha lake.** Kitufe kwenye upau wa kichwa wake kinakihamisha kwenye dirisha unaloweza kuweka kwenye kifuatilizi kingine. Tazama [Sogeza kidirisha](common:arrange-panels#move-a-dialog).

## Kwa wasaidizi wa AI

- **Faili kwa jina, katika folda unazochagua.** Katika CadCraft Studio msaidizi anaweza kufungua, kuhifadhi na kuchapisha faili kwa jina, na kumpa amri faili inayoiomba (INSERT kutoka faili, usafirishaji wa COUNT, SAVEAS, PLOT). Lakini hilo linafanyika ndani ya folda unazoongeza chini ya {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Wasaidizi}} › {{ui:Folda anazoweza kutumia}} pekee. Tazama [Ruhusu itumie faili kwenye folda unazochagua](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Simu chache.** Msaidizi anaweza kuandika mstari mzima wa amri kwa mara moja, kuweka amri wazi kati ya wito wake, kuhesabu vitu kwa aina na tabaka bila kuviorodhesha, na kuweka bloku pamoja na thamani zake za sifa kwa hatua moja.
- **Bila dirisha.** Mstari wa amri wa `cadcraft` unaandika michoro ya SVG, na unabadilisha, kuchapisha, kukagua au kuelezea faili nyingi kwa mara moja. Kifurushi cha MCP bado hakijachapishwa. Tazama [Fanya kazi na faili bila kufungua CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Vilivyobadilika

- **Trackpad inasogeza.** Sogeza vidole viwili kwenye trackpad na mwonekano wa 2D unavifuata. Kubana na gurudumu la kipanya vinakuza. Tazama [Kipanya, trackpad na kugusa](topic:mouse-trackpad-touch).
- **Vitu vya OLE vinahifadhiwa.** Vitu vilivyopachikwa vya DXF vinaonekana kama picha yake au kama fremu yenye lebo, na vinahifadhiwa tena na DXF 2000. Vya DWG vinahifadhiwa na kuandikwa tena unapohifadhi kama DWG, lakini havionyeshwi bado. Awali vilipotea unapohifadhi. Tazama [Vitu kutoka programu nyingine (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Vitengo vya mchoro mpya** vinafuata kitengo unachochagua kwenye {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Vitengo}}.

## Vilivyorekebishwa

- Mipangilio ya karatasi iliyofunguka tupu, au iliyopoteza mwonekano na kuonyesha modeli nzima mahali pake, sasa inafunguka na mionekano yake halisi. Mpangilio usio na kiungo cha yaliyomo unahifadhiwa, na ripoti ya kufungua inasema hivyo.
- Faili za DXF kwenye kurasa za msimbo za zamani zilionyesha maandishi ya Cyrillic na Kikorea yaliyoharibika. Sasa yanasomeka vizuri.
- Maandishi ya aya kutoka programu nyingine yalipoteza uumbizaji wake yalipofunguliwa, na yalihifadhiwa tena kama matupu.

## Kwa kila programu

- **Vitengo.** {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Vitengo}} ina orodha moja kila moja kwa urefu, eneo, ujazo, pembe na mteremko, kwa ukubwa halisi unaotolewa na ufafanuzi wa vitengo (futi ya utafiti ya US ni kitengo chake yenyewe). Zima vitengo usivyotumia kabisa na vinatoka kwenye orodha. Kile ulichokichagua kwa nyota, kazi mpya inaanzia hapo. Faili daima inabaki na kitengo chake. Kwenye CadCraft, chaguo hilo huweka vitengo vya mchoro mpya pale kitengo ni kinachoweza kubebwa na mchoro. Kisanduku cha {{ui:Vitengo}} cha CadCraft chenyewe bado hakifuati swichi. Mchoro ukishakuwa na vitengo, urefu unaouandika unaweza kubeba alama ya kitengo chochote. Tazama [Vitengo, thamani zilizoandikwa na orodha za vitengo](common:unit-lists).
- **Mpangilio mnene zaidi na paneli zinazojificha kwa nadhifu.** {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kompakt}} inatoshea zaidi kwenye skrini (skrini za kugusa na simu zinabaki na vitufe vyake vikubwa). Kila paneli ya upande ina upau mwembamba wa kichwa: uuvute ili kuiweka au kuielea, uiachie kwenye upau wa paneli nyingine ili kushiriki fremu moja kama vichupo, ibandike ili iteleze hadi ukingoni, au ifiche na uirudishe kutoka ukingoni. Tazama [Panga paneli](common:arrange-panels#make-the-layout-denser).
- **Vidirisha vinasogea.** Vuta kidirisha kwa upau wake wa kichwa kiondoke njiani mwa mchoro. Kinarudi pale ulipokiacha. Bofya mara mbili upau wa kichwa ili kukitia katikati tena. Tazama [Sogeza kidirisha](common:arrange-panels#move-a-dialog).
- **Mapishi kwa wasaidizi wa AI.** Maombi kumi ya mfano kwa msaidizi wako mwenyewe (kupanga mchoro, kuchapisha seti, kukagua michoro, kuuliza modeli maswali, kujumlisha ukadiriaji wa kiasi, kujaribu tofauti ya sehemu…), kila moja na zana inazoitumia na ruhusa inazohitaji. Kila moja inachezwa tena na majaribio yetu. Programu hazina AI. Tazama [Mapishi kwa wasaidizi wa AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya katika {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Lugha}}. Pia **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia** sasa zina kila neno la programu, kama rasimu ambazo bado hazijakaguliwa na mzawa. Makala za usaidizi ni kwa Kiingereza.
- **CadCraft Studio** inasema kwa nini ukaguzi wa sasisho umeshindwa (hakuna faili ya mfumo wako bado, hakuna mtandao, sahihi mbaya) badala ya kusema tu "Imekamilika". Haileti tena kadi ya Kilichomo kipya ambayo umeifunga, hadi toleo jipya litoke.

## Bado kwenye toleo hili

- **0.7 haijasainiwa kwa msimbo.** Usainishaji, na kifurushi cha Microsoft Store, vimehamishwa hadi 0.8 kwa sababu uthibitishaji wa cheti bado haujafika. Angalia SHA-256 iliyo karibu na kila faili kwenye getcadcraft.com/download. Kwenye Windows, ikiwa SmartScreen inasimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, mara ya kwanza, bonyeza kulia CadCraft Studio kisha uchague {{ui:Fungua}}. CadCraft Studio bado haipatikani kwenye duka la programu, na bado hakuna toleo la iPad au iPhone.
- Orodha za pembe na mteremko kwenye {{ui:Vitengo}} zinahifadhiwa, lakini hakuna kisanduku kinachozisoma bado.
- OLE za DWG zinahifadhiwa lakini hazionyeshwi, na picha za metafile ndani ya vitu vya OLE hazichorwi.
- Kusoma majedwali ya mtindo wa chapisho (faili za CTB) kutoka programu nyingine kunasubiri faili ya sampuli.
- Maandishi ya Kiasia ya zamani yaliyoandikwa kama msimbo wa `\M+` yanasomwa, lakini bado hayajakaguliwa dhidi ya faili kutoka programu nyingine.
- Viwekeleo vya PDF: picha ndani ya ukurasa zinaonyeshwa kwenye skrini lakini hazichapishwi. Chapisho la msaidizi linaacha viwekeleo, na jinsi programu nyingine zinavyosoma kipunguzo na mizani iliyohifadhiwa bado haijakaguliwa ndani yake.
- Historia: CadCraft bado haipeleki nakala zake kwenye wingu, kwa hiyo matoleo ya wingu ni yale yaliyohifadhiwa kutoka vifaa vingine na kwenye wavuti. Historia ipo kwenye CadCraft Studio pekee.
- Kama Studio inahifadhi folda ya usaidizi ya acad.lsp baada ya kuanzishwa upya bado haijakaguliwa. Ikiuliza, chagua folda tena kwenye APPLOAD.
- Paneli ya Laser bado haijajaribiwa kwenye laser halisi: jaribu kila mpangilio kwenye chakavu. CadCraft Studio haina Web Serial, kwa hiyo kwenye Studio paneli huhifadhi G-code pekee.
- Kusajili skani kumejaribiwa kwenye skani zilizotengenezwa, si bado kwenye seti ya skana halisi.
- Kusogeza kwa vidole viwili kumejaribiwa kwa matukio ya trackpad ya kuiga, si bado kwenye trackpad halisi.
- {{cmd:PEDIT}} haina chaguo la Hariri kipeo (tumia mipini au Sifa). Offset, trim, extend, fillet, break na join hazichukui splines bado, na urefu wa spline (Z) haubaki.
- Maandishi mapya ya aya hayawezi kupewa misimbo ya uumbizaji bado, na chapisho za SVG zinaonyesha maandishi yaliyoumbizwa kwa rangi moja.
- WBLOCK ya Mchoro mzima inaandika modeli pekee, si karatasi. Mtindo wa sasa wa vipimo haubaki kwenye faili: mchoro unafunguka na Standard kama wa sasa.
- Mitindo ya menyu ya ribbon haina orodha za tabaka, rangi au aina ya mstari bado: tumia paneli ya {{ui:Tabaka}} na {{ui:Sifa}}.
- Wingu za pointi bado hazihifadhiwi kwenye mchoro wala kuchapishwa, na faili za E57 zinafunguka hadi pointi milioni 6 na 512 MB.
- Faili za DWG zilizohifadhiwa na CadCraft bado hazijakaguliwa kwenye AutoCAD yenyewe.

Kila kingine kiko kwenye [Bado hakijajengwa](topic:not-built-yet).
