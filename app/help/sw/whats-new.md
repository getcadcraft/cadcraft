---
title: Kipya katika 0.7
summary: Underlays za PDF na uingizaji wa PDF, michoro iliyoskaniwa yenye ufuatiliaji wa kiotomatiki, splines halisi kwa SPLINE, SPLINEDIT na PEDIT, kidhibiti cha mitindo ya vipimo, maandishi yanayohifadhi umbizo lake, WBLOCK na skeli zako mwenyewe, solidi za 3D kutoka programu nyingine, kusajili skani, paneli ya Laser, uhamishaji wa USD, Historia na uchapishaji katika CadCraft Studio, mchoro wa kwanza unaoongozwa, upau wa zana upande wowote au kwa safu chache, na zaidi kwa wasaidizi wa AI.
keywords: kipya, nini kipya, maelezo ya toleo, mabadiliko, 0.7, toleo, vipengele vipya, pdf, pdfattach, pdfimport, underlay, skani, scanattach, scantrace, ufuatiliaji, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, umbizo, wblock, scalelistedit, orodha ya skeli, acis, solidi za 3d, registerscans, sajili skani, icp, e57, las, laser, grbl, g-code, usd, usdout, historia, matoleo, linganisha, chapisha, printer, png, svg, mtindo wa chapisho, linetype, ziara, karatasi ya muhtasari, ramani ya amri, nafasi ya upau wa zana, safu za upau wa zana, toolbardock, regen, regenall, trackpad, swipe, ukurasa wa msimbo, cyrillic, korean, chinese, japanese, umeme, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folda ya usaidizi, wasaidizi, mcp, vitengo, kireno
from: b9258ca6
---

Hiki ndicho kilichobadilika katika CadCraft 0.7, ikilinganishwa na 0.6. Mengi yake yaliombwa kwenye Discord. Orodha imepangwa kwa eneo, na muhimu zaidi ikiwa ya kwanza.

## Mpya

### PDF na michoro iliyoskaniwa

- **Weka ukurasa wa PDF chini ya mchoro.** {{cmd:PDFATTACH}} (`PDFATT`) inaweka ukurasa kwa ukubwa wake halisi au skeli unayoandika. Unganisha na mistari yake, ufifishe, uufanye wa rangi moja ({{cmd:PDFADJUST}}), ukate ({{cmd:PDFCLIP}}) na ubadilishe tabaka za PDF yenyewe ({{cmd:PDFLAYERS}}). Inachapisha kama mistari, mijazo na maandishi, na DWG au DXF 2000 inaihifadhi kama kiunganishi cha faili. Kufungua PDF kwa {{ui:Fungua}} kunauliza kama uiambatishe au uiingize. Tazama [Underlays za PDF na uingizaji wa PDF](topic:pdf-underlay).
- **Geuza ukurasa wa PDF kuwa vitu vya mchoro.** {{cmd:PDFIMPORT}} (`PDFIM`) inatengeneza mistari, polilaini, duara, matao, mistari ya kivuli imara na maandishi kwenye tabaka zilizopewa jina la PDF, kwa ukubwa halisi, skeli uliyoandika, au skeli kutoka pointi mbili na umbali halisi, katika hatua moja ya kutendua. Tazama [Ingiza ukurasa](topic:pdf-underlay#import-a-page).
- **Michoro iliyoskaniwa.** {{cmd:SCANATTACH}} inaleta PNG, JPEG au TIFF (ukurasa mmoja au wote) au ukurasa wa PDF ulio picha. Kisha iweke kwenye skeli kutoka pointi mbili ({{cmd:SCANSCALE}}), ipange ({{cmd:SCANALIGN}}), inyooshe kutoka mistari yake mirefu ({{cmd:SCANDESKEW}}), ifanye nyeusi na nyeupe na uondoe madoa ({{cmd:SCANCLEAN}}), ikate na ufute sehemu zake. Kila hatua ni hatua moja ya kutendua na faili asili linahifadhiwa. Tazama [Michoro iliyoskaniwa na ufuatiliaji](topic:scanned-drawings).
- **Fuatilia skani kuwa mistari na matao.** {{cmd:SCANTRACE}} inachora mistari ya skani kama mistari na matao kwenye tabaka mpya, SCAN-TRACE, kwa uvumilivu unaouweka, na inaacha maandishi na mistari ya kivuli kama yalivyo. Ripoti inasema ilichotengeneza na kilichoachwa, na haidai kwamba matokeo ni sahihi: yakague dhidi ya karatasi. {{cmd:RASTERSNAP}} inaruhusu vinasa vya vitu kupata ncha, pembe na makutano ya skani. Hakuna kinachotumwa popote na hakuna modeli iliyofunzwa inayotumika. Tazama [Ufuatiliaji](topic:scanned-drawings#the-trace).

### Kuchora na kuhariri

- **Splines halisi.** {{cmd:SPLINE}} (`SPL`) inachora mkunjo kupitia pointi au kutoka pointi za udhibiti (shahada 1 hadi 5), zenye tanjenti za ncha; {{cmd:SPLINEDIT}} (`SPE`) inasogeza, kuongeza na kufuta pointi za kufaa au za udhibiti, inaweka uzito, inafungua, inafunga, inageuza, au inageuza spline kuwa polilaini. Splines kutoka faili za DWG na DXF zinafunguka kama splines, na DWG na DXF 2000 zinazihifadhi kama splines. Tazama [Splines na polilaini](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) inafunga na kufungua polilaini, inaunganisha mistari na matao kwake, inaweka upana mmoja, inatoshea mkunjo kupitia vipeo au spline kando yake na kuirudisha kwa Decurve, inageuza, na inahariri kadhaa kwa mara moja. Tazama [Hariri polilaini](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) inaandika bloku, baadhi ya vitu au mchoro wote kwenye DWG au DXF mpya inayoshikilia tabaka, mitindo na bloku zinazotumika pekee. Tazama [Andika bloku au vitu kwenye faili lao](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN na REGENALL.** {{cmd:REGEN}} (`RE`) inachora upya kichupo ulichopo kutoka kwenye mchoro, {{cmd:REGENALL}} (`REA`) kila kichupo, paneli na mchoro uliofunguliwa. Tazama [REGEN na REGENALL](topic:commands#regen-and-regenall).

### Maandishi na vipimo

- **Maandishi yanahifadhi umbizo lake.** Maandishi ya aya kutoka programu nyingine yanahifadhi rangi za kila neno, nzito na italiki, mstari wa chini, sehemu zilizopangwa na urefu wake: yanachorwa kwenye skrini na kwenye PDF, yanabaki unapohariri maneno, na yanahifadhiwa tena. Tazama [Umbizo ndani ya maandishi ya aya kutoka programu nyingine](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Kidhibiti cha mitindo ya vipimo.** {{cmd:DIMSTYLE}} (`D`) inatengeneza, kubadilisha, kulinganisha na kutumia mitindo ya vipimo yenye majina; kubadilisha mtindo kunabadilisha kila kipimo kinachoutumia. {{cmd:DIMEDIT}} (`DED`) inarudisha maandishi, inaandika maandishi mapya, na inageuza au kuinamisha mistari ya upanuzi; {{cmd:DIMTEDIT}} inahamisha maandishi kushoto, kulia au katikati. Tazama [Mitindo ya vipimo yenye majina](topic:dimension-settings#named-dimension-styles).
- **Skeli zako mwenyewe.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) inaongeza skeli kama 1:75 kwenye orodha za skeli za dirisha la mwonekano na za uchapishaji; zinahifadhiwa ndani ya mchoro (DWG na DXF 2000), na mchoro kutoka programu nyingine unaleta orodha yake. Tazama [Skeli](topic:units-papers-scales#scales).
- **Maandishi ya alfabeti nyingine.** Faili za DXF zilizohifadhiwa kwenye kurasa za msimbo za Cyrillic, Korean, Chinese, Japanese au Vietnamese sasa zinafunguka na maandishi yao, na maandishi ya Kichina, Kijapani na Kikorea yanachapishwa kwenye PDF (uchapishaji unapakua fonti kubwa zaidi mara ya kwanza inapoihitaji). Tazama [Fonti](topic:text#font).

### Uchapishaji

- **Zaidi katika majedwali ya mitindo ya chapisho.** Kwa kila rangi, jedwali sasa linaweza pia kuweka aina ya mstari, mwisho wa mstari na muunganiko wa mstari, na mtindo wa kujaza unaochapisha mijazo imara kama mistari ya kivuli; jedwali lina orodha yake ya uzito wa mistari na kipimo cha aina ya mstari. Tazama [Majedwali ya mitindo ya chapisho](topic:plot-pdf#plot-style-tables).
- **Chapisha, na faili za PNG na SVG.** Kisanduku cha Chapisha kina {{ui:Chapisha…}}, {{ui:Pakua PNG}} (300 dpi) na {{ui:Pakua SVG}}. Katika CadCraft Studio kinaorodhesha printa za kompyuta, karatasi zao na idadi ya nakala. Tazama [Chapisha](topic:plot-pdf#print) na [Faili za picha na SVG](topic:plot-pdf#picture-and-svg-files).

### 3D na wingu la pointi

- **Solidi za 3D kutoka programu nyingine.** Solidi, regions na bodies kwenye nafasi ya modeli ya mchoro zinaonyeshwa kwenye kichupo cha 3D, kwa kusoma tu, na kuhifadhi kama DWG kunazirudisha bila kubadilishwa. Nyuso kwenye sehemu ambazo CadCraft bado haichori zinaorodheshwa, hazikisiwi. Tazama [Solidi kutoka programu nyingine](topic:3d-solids#solids-from-other-programs).
- **Sajili skani kadhaa.** {{cmd:REGISTERSCANS}} (`REGSCAN`) inaweka skani zilizochukuliwa kutoka nafasi tofauti kwenye fremu moja, kwa jozi za pointi au kuratibu za lengo ulizoandika, inazisafisha kwa ICP, inahifadhi usajili kama faili dogo la mradi, na inaandika wingu lililosajiliwa kama faili moja la LAS au E57. Tazama [Sajili skani kadhaa kuwa moja](topic:register-scans).
- **Uhamishaji wa USD.** {{cmd:USDOUT}}, au {{cmd:EXPORT3D}} › {{ui:USD}}, inaandika solidi za kichupo cha 3D kama `.usda`, `.usdc` au `.usdz`. Tazama [Hamisha modeli ya 3D kama USD](topic:usd).
- **Hesabu kwenye kichupo cha 3D.** Pale zana za kichupo cha 3D zinapouliza umbali, unaweza kuandika hesabu, kama kwenye mstari wa amri. Tazama [Hesabu katika thamani iliyoandikwa](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Kutengeneza vitu

- **Tuma mchoro kwenye laser.** {{cmd:LASER}}, au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Laser…}}, inafungua paneli juu ya mchoro: kila tabaka hukatwa, hukwaruzwa, huchonga mistari, hujaza maumbo, huchonga picha au haitumwi, pamoja na nguvu, kasi na pasi zake. Onyesho la awali linafuata mabadiliko yako, {{ui:Hifadhi G-code…}} inaandika G-code ya hali ya laser ya GRBL, na katika Chrome au Edge paneli inaweza kuzungusha kazi kwenye fremu na kuituma kupitia USB. Mipangilio inahifadhiwa ndani ya mchoro (DWG na DXF). Tazama [Tuma mchoro kwenye laser](topic:laser-cutting).
- **Alama za usakinishaji wa umeme katika nyongeza ya Umeme.** Vituo vya data, simu na TV, swichi za ufunguo na za muda, kidhibiti joto, ishara ya kutoka, vigunduzi, kituo cha kengele na kipaza sauti, feni, hita ya maji, jiko, sehemu ya kuchaji magari ya umeme, mita ya nishati na bodi ndogo, na alama za RCD na RCBO. Mzunguko unaweza kubeba RCD, jedwali la paneli lina safu ya RCD, na ukaguzi unataja mizunguko ya soketi isiyo na RCD ya 30 mA au chini. Ni kikumbusho cha upangaji, si ukaguzi wa kanuni.
- **Nyongeza ya P&ID.** P&ID inachora michoro ya michakato: alama zenye pointi za muunganisho, mistari ya mchakato na ya ishara, lebo, nambari za mistari, orodha za mistari, vifaa, vyombo na vali (CSV au kitabu cha kazi) na ukaguzi. Inakuja na CadCraft na imezimwa hadi uiwashe kwenye {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Programu-jalizi}}. Ni msaada wa kuchora, si idhini ya kihandisi, na maneno yake ni kwa Kiingereza pekee kwa sasa.

### Kuanza na skrini

- **Mchoro wa kwanza unaoongozwa.** {{cmd:TOUR}} (au {{ui:Anza ziara}} kwenye kadi ya kuanza) inakuongoza kwa hatua sita kwenye mchoro halisi: mstari, duara, kuhamisha, kukata, kufuta na kipimo. Inaanza yenyewe mara ya kwanza CadCraft inapofunguka ikiwa tupu. Tazama [Unapendelea kuongozwa?](topic:getting-started#prefer-to-be-guided)
- **Karatasi ya muhtasari na ramani ya amri.** [Karatasi ya muhtasari](topic:cheat-sheet) ina amri 40 za kila siku kwenye ukurasa mmoja, pia kama PDF ya kuchapisha, na [ramani ya amri](topic:command-map) inaorodhesha amri pamoja na majina yao mafupi, kuanzia A hadi Z.
- **Upau wa zana upande wowote.** {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Nafasi ya upau wa zana}}: juu (kama awali), chini, kushoto au kulia, au andika {{cmd:TOOLBARDOCK}}. Tazama [Nafasi ya upau wa zana](topic:settings#toolbar-position).
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Safu za upau wa zana}}: funga ili utoshee, safu 2 au safu 1, kwa upau wa zana wa CadCraft na kwa mitindo ya Drafting classic na Ribbon. {{key:Shift+Ctrl+F1}} inapitia safu, {{key:Ctrl+F1}} inapitia kile vitufe vinavyoonyesha, na {{cmd:TOOLBARROWS}} na {{cmd:TOOLBAR}} zinaziweka. Kidokezo cha mwanzo kina kitufe cha kufunga. Asante kwa GJoe2, aliyetuma hili kama pull request. Tazama [Safu za upau wa zana](topic:settings#toolbar-rows).

### Katika CadCraft Studio

- **Historia.** {{cmd:HISTORY}} (`HIST`), au {{ui:Mwonekano}} › {{ui:Zaidi}} › {{ui:Historia…}}: nakala ambazo Studio huhifadhi unapofungua na kuhifadhi mchoro, na matoleo ya wingu ya mchoro ukiwa umeufungua kutoka wingu. Fungua au rejesha moja, au linganisha mawili, huku kilichoongezwa, kilichoondolewa na kilichobadilishwa kikionyeshwa kwa rangi. Tazama [Historia](topic:history).
- **acad.lsp na acaddoc.lsp.** Chagua folda ya usaidizi katika {{cmd:APPLOAD}}: faili hizo mbili hupakiwa CadCraft inapoanza (acaddoc.lsp tena kwa kila kichupo kipya cha mchoro), na `S::STARTUP` inaendeshwa baadaye. Tazama [Pakia programu](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Kisanduku cha Chapisha kwenye dirisha lake.** Kitufe kwenye upau wake wa kichwa kinahamisha kisanduku ndani ya dirisha unaloweza kuweka kwenye kifuatiliaji kingine. Tazama [Hamisha kisanduku](common:arrange-panels#move-a-dialog).

### Kwa wasaidizi wa AI

- **Faili kwa jina, kwenye folda unazochagua.** Katika CadCraft Studio msaidizi anaweza kufungua, kuhifadhi na kuchapisha faili kwa jina, na kumpa amri faili analoliomba (INSERT kutoka faili, usafirishaji wa COUNT, SAVEAS, PLOT), lakini ndani ya folda unazoongeza chini ya {{ui:Mipangilio}} › {{ui:CadCraft}} › {{ui:Wasaidizi}} › {{ui:Folda anazoweza kutumia}} tu. Tazama [Mruhusu kutumia faili kwenye folda unazochagua](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Simu chache.** Msaidizi anaweza kuandika mstari mzima wa amri kwa mara moja, kuweka amri wazi kati ya simu zake, kuhesabu vitu kwa aina na tabaka bila kuviorodhesha, na kuweka bloku pamoja na thamani zake za sifa kwa hatua moja.
- **Bila dirisha.** Mstari wa amri wa `cadcraft` unaandika uchapishaji wa SVG na kubadilisha, kuchapisha, kukagua au kueleza faili nyingi kwa mara moja. Kifurushi cha MCP bado hakijachapishwa. Tazama [Fanyia kazi faili bila kufungua CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Kimebadilika

- **Trackpad inasogeza.** Sogeza vidole viwili kwenye trackpad na mwonekano wa 2D unavifuata; kubana na gurudumu la panya kunakuza. Tazama [Panya, trackpad na mguso](topic:mouse-trackpad-touch).
- **Vitu vya OLE vinahifadhiwa.** Vitu vilivyopachikwa vya DXF vinaonekana kama picha yake au fremu yenye lebo, na vinahifadhiwa tena na DXF 2000. Vya DWG vinahifadhiwa na kuandikwa tena unapohifadhi kama DWG, lakini bado havionyeshwi. Awali vilipotea wakati wa kuhifadhi. Tazama [Vitu kutoka programu nyingine (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Vitengo vya mchoro mpya** vinafuata kitengo ulichoweka alama ya nyota katika {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Vitengo}}.

## Kimerekebishwa

- Mipangilio iliyofunguka tupu, au iliyopoteza dirisha la mwonekano na kuonyesha modeli nzima mahali pake, sasa inafunguka na madirisha yake halisi ya mwonekano. Mpangilio usio na kiungo kwa yaliyomo yake unahifadhiwa na ripoti ya ufunguzi inasema hivyo.
- Faili za DXF kwenye kurasa za zamani za msimbo zilionyesha maandishi ya Cyrillic na Korea yaliyoharibika. Sasa yanasomwa sawa.
- Maandishi ya aya kutoka programu nyingine yalipoteza umbizo lake yalipofunguliwa na yalihifadhiwa tena bila umbizo.

## Katika kila programu

- **Vitengo.** {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Vitengo}} ina orodha moja kwa kila urefu, eneo, ujazo, pembe na mteremko, pamoja na ukubwa kamili ambao ufafanuzi wa vitengo unatoa (futi ya uchunguzi wa Marekani ni kitengo chake). Zima vitengo usivyotumia kamwe navyo vinaondoka kwenye orodha; weka alama ya nyota kwenye kimoja na kazi mpya inaanza nacho. Faili daima linabaki na kitengo chake. Katika CadCraft, nyota huweka vitengo vya mchoro mpya pale ni kitengo ambacho mchoro unaweza kubeba; kisanduku cha {{ui:Vitengo}} cha CadCraft chenyewe bado hakifuati swichi. Mchoro ukishakuwa na vitengo, urefu unaoandika unaweza kubeba alama ya kitengo chochote. Tazama [Vitengo, thamani zilizoandikwa na orodha za vitengo](common:unit-lists).
- **Mpangilio mnene na paneli zinazojificha.** {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Msongamano wa mpangilio}} › {{ui:Kubana}} inatoshea zaidi kwenye skrini (skrini za mguso na simu zinabaki na vitufe vyake vikubwa). Kila paneli ya kando ina upau mwembamba wa kichwa: uburute kuiweka au kuielea, uiangushe kwenye upau wa paneli nyingine kushiriki fremu moja kama vichupo, ibandike ili iteleze kwenye ukingo, au ifiche na uirudishe kutoka ukingoni. Tazama [Panga paneli](common:arrange-panels#make-the-layout-denser).
- **Visanduku vinahamishika.** Burua kisanduku kwa upau wake wa kichwa nje ya njia ya mchoro; kinarudi pale ulipokiacha. Bofya mara mbili upau wa kichwa ili kukiweka katikati tena. Tazama [Hamisha kisanduku](common:arrange-panels#move-a-dialog).
- **Mapendekezo kwa wasaidizi wa AI.** Maombi kumi yaliyofanyiwa kazi kwa msaidizi wako mwenyewe (kupanga mchoro, kuchapisha seti, kukagua michoro, kuuliza modeli maswali, kujumlisha hesabu za kiasi, kujaribu toleo la sehemu…), kila moja na zana inazoita na ruhusa inazohitaji, na kila moja inachezwa tena na majaribio yetu. Programu zenyewe hazina AI. Tazama [Mapendekezo kwa wasaidizi wa AI](common:assistants-recipes).
- **Lugha.** **Português (Portugal)** ni mpya kwenye {{ui:Mipangilio}} › {{ui:Jumla}} › {{ui:Lugha}}. Pamoja na **Português (Brasil)**, **Español (México)** na **Bahasa Indonesia**, sasa zina kila neno la programu, kama rasimu ambazo bado hazijakaguliwa na mzawa. Mada za msaada ziko kwa Kiingereza.
- **CadCraft Studio** inaeleza kwa nini ukaguzi wa sasisho ulishindwa (hakuna faili kwa mfumo wako bado, hakuna mtandao, sahihi mbaya) badala ya kusema tu "Done", na inaacha kurudisha kadi ya Kipya uliyoifunga hadi toleo jipya litolewe.

## Bado si katika toleo hili

- **0.7 haijasainiwa kwa msimbo.** Kusaini, na kifurushi cha Microsoft Store, vimehamia 0.8 kwa sababu uthibitishaji wa cheti bado haujafika. Kagua SHA-256 kando ya kila faili kwenye getcadcraft.com/download. Kwenye Windows, ikiwa SmartScreen inasimamisha kisakinishi, chagua {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}. Kwenye Mac, mara ya kwanza, bofya kulia CadCraft Studio na uchague {{ui:Fungua}}. CadCraft Studio bado haiko kwenye duka la programu, na bado hakuna toleo la iPad au iPhone.
- Swichi za pembe na mteremko kwenye {{ui:Vitengo}} zinahifadhiwa, lakini hakuna kisanduku kinachozisoma bado.
- OLE za DWG zinahifadhiwa lakini hazionyeshwi, na picha za metafile ndani ya vitu vya OLE hazichorwi.
- Kusoma majedwali ya mitindo ya chapisho (faili za CTB) kutoka programu nyingine kunasubiri faili la mfano.
- Maandishi ya Kiasia ya zamani yaliyoandikwa kama misimbo ya `\M+` yanasomwa, lakini bado hayajakaguliwa dhidi ya faili kutoka programu nyingine.
- Underlays za PDF: picha ndani ya ukurasa zinaonyeshwa kwenye skrini lakini hazichapishwi, chapisho la msaidizi linaacha underlays nje, na jinsi programu nyingine zinavyosoma kata na skeli iliyohifadhiwa haijakaguliwa katika programu hizo.
- Historia: CadCraft bado haituma hifadhi zake kwenye wingu, kwa hiyo matoleo ya wingu ni yale yaliyohifadhiwa kutoka vifaa vingine na wavuti. Historia ipo CadCraft Studio pekee.
- Kama Studio inahifadhi folda ya usaidizi ya acad.lsp baada ya kuanzishwa upya bado haijakaguliwa; ikiuliza, chagua folda tena katika APPLOAD.
- Paneli ya Laser haijajaribiwa kwenye laser halisi bado: jaribu kila mpangilio kwenye chakavu. CadCraft Studio haina Web Serial, kwa hiyo katika Studio paneli inahifadhi G-code pekee.
- Usajili wa skani umejaribiwa kwenye skani za kubuni, si bado kwenye seti ya skana halisi.
- Kusogeza kwa vidole viwili kumejaribiwa kwa matukio ya trackpad yaliyoigwa, si bado kwenye trackpad halisi.
- {{cmd:PEDIT}} haina chaguo la Edit vertex (tumia grips au Sifa). Offset, trim, extend, fillet, break na join hazichukui splines bado; urefu wa spline (Z) haubakishwi.
- Maandishi mapya ya aya hayawezi kupewa misimbo ya umbizo bado, na chapisho la SVG linaonyesha maandishi yenye umbizo kwa rangi moja.
- Kipengele cha WBLOCK cha Mchoro wote kinaandika modeli pekee, si karatasi. Mtindo wa vipimo wa sasa haujahifadhiwa kwenye faili: mchoro unafunguka na Standard kama wa sasa.
- Mitindo ya menyu ya ribbon bado haina orodha za tabaka, rangi au aina ya mstari: tumia paneli ya {{ui:Tabaka}} na {{ui:Sifa}}.
- Wingu la pointi bado halihifadhiwi kwenye mchoro wala kuchapishwa, na faili za E57 zinafunguka hadi pointi milioni 6 na 512 MB.
- DWG zilizohifadhiwa na CadCraft bado hazijakaguliwa katika AutoCAD yenyewe.

Kila kitu kingine kiko katika [Bado halijajengwa](topic:not-built-yet).
