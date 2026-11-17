---
title: Okusha ku-0.7 (kwangaphambili)
summary: Ama-underlay e-PDF nokungenisa kwe-PDF, imidwebo eskenwe nokulandelwa okuzenzakalelayo, ama-spline angempela nge-SPLINE, SPLINEDIT ne-PEDIT, isiphathi sezitayela zezilinganiso, umbhalo ogcina ukwakheka kwawo, WBLOCK nezikali zakho, izinto ze-3D ezivela kwezinye izinhlelo, ukubhalisa izikena, iphaneli ye-Laser, ukuthumela ngaphandle kwe-USD, Umlando nokushicilela ku-CadCraft Studio, umdwebo wokuqala oqondisiwe, ithuluzi ngakunoma iyiphi uhlangothi noma ngemigqa embalwa, nokunye okuningi kubasizi be-AI.
keywords: okusha 0.7, ukukhishwa kwangaphambili, amanothi okukhishwa, izinguquko, inguqulo, izici ezintsha, pdf, pdfattach, pdfimport, underlay, iskena, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, ukwakheka, wblock, scalelistedit, uhlu lwezikali, acis, izinhlobo ze-3d, registerscans, bhalisa izikena, icp, e57, las, laser, grbl, g-code, usd, usdout, umlando, izinguqulo, qhathanisa, imphrinta, png, svg, isitayela sokushicilela, linetype, uhambo, ishidi lesiqondiso, imephu yemiyalo, indawo yethuluzi, imigqa yethuluzi, toolbardock, regen, regenall, trackpad, swipe, ikhodi yekhasi, cyrillic, korean, chinese, japanese, electrical, rcd, p&id, pid, acad.lsp, acaddoc.lsp, ifolda yokusekela, abasizi, mcp, izinyunithi, isiPhuthugezi
from: d07ca034
---

Lokhu yiyo yonke into eshintshile ku-CadCraft 0.7, uma kuqhathaniswa no-0.6. Kuningi kwakho kwacelwa ku-Discord. Uhlu luhlelwe ngezindawo, okubaluleke kakhulu kuqala.

## Okusha

### Ama-PDF nemidwebo eskenwe

- **Beka ikhasi le-PDF ngaphansi komdwebo.** {{cmd:PDFATTACH}} (`PDFATT`) ibeka ikhasi ngobukhulu balo bangempela noma isikali osithayiphayo. Yenza isnap emigqeni yalo, uyenze ibe mpunga ({{cmd:PDFADJUST}}), uyinqume ({{cmd:PDFCLIP}}) uphinde ushintshe izingqimba zePDF ngayo ({{cmd:PDFLAYERS}}). Iplotwa njengemigqa, ukugcwaliswa nombhalo, futhi i-DWG noma i-DXF 2000 iyigcina njengesixhumanisi efayeleni. Ukuvula i-PDF nge-{{ui:Vula}} kubuza ukuthi uyinamathisele noma uyingenise. Bona [Ama-PDF underlay nokungenisa kwe-PDF](topic:pdf-underlay).
- **Guqula ikhasi le-PDF ibe izinto zomdwebo.** {{cmd:PDFIMPORT}} (`PDFIM`) yenza imigqa, ama-polyline, izindilinga, ama-arc, ama-hatch aqinile nombhalo ngaphansi kwezingqimba ezibizwa ngegama le-PDF, ngobukhulu bangempela, isikali osithayiphayo, noma ukukalwa kusukela kumaphoyinti amabili nebanga langempela, ngesinyathelo sokuhlehlisa esisodwa. Bona [Ngenisa ikhasi](topic:pdf-underlay#import-a-page).
- **Imidwebo eskenwe.** {{cmd:SCANATTACH}} ilethe i-PNG, i-JPEG noma i-TIFF (ikhasi elilodwa noma wonke) noma ikhasi le-PDF elingumfanekiso. Bese uyilinganisa ngamaphoyinti amabili ({{cmd:SCANSCALE}}), uyilinganise ({{cmd:SCANALIGN}}), uyenze isikwele ngemigqa yayo emide ({{cmd:SCANDESKEW}}), uyenze mnyama nomhlophe futhi ususe izinhlamvu ({{cmd:SCANCLEAN}}), uyisike futhi ususe izingxenye zayo. Isinyathelo ngasinye siyisinyathelo esisodwa sokuhlehlisa, nefayela lokuqala liyagcinwa. Bona [Imidwebo eskenwe nokulandelwa](topic:scanned-drawings).
- **Landela iskena zibe yimigqa nama-arc.** {{cmd:SCANTRACE}} idweba imigqa yeskena njengemigqa nama-arc engqimbeni entsha, i-SCAN-TRACE, ngokubekezelela okusethwe nguwe, futhi ishiya umbhalo nokufaka umbala njengoba kunjalo. Umbiko uchaza okwenziwe nokushiyiwe, futhi awusho ukuthi umphumela ulungile: uhlole nesheet. {{cmd:RASTERSNAP}} ivumela ama-object snap ukuthola iziphetho, amakhona nokuhlangana kweskena. Akukho lutho oluthunyelwa noma kuphi futhi akusetshenziswa imodeli efundisiwe. Bona [Ukulandelwa](topic:scanned-drawings#the-trace).

### Ukudweba nokuhlela

- **Ama-spline angempela.** {{cmd:SPLINE}} (`SPL`) idweba ijika phakathi kwamaphoyinti noma kusuka kumaphoyinti okulawula (ibanga 1 kuya ku-5), namathangenti asekugcineni; {{cmd:SPLINEDIT}} (`SPE`) ihambisa, yengeza futhi isuse amaphoyinti okulinganisa noma okulawula, isethe izisindo, ivula, ivala, iguqule ukuqondiswa, noma iguqule i-spline ibe i-polyline. Ama-spline avela kumafayela e-DWG ne-DXF avula njengama-spline, futhi i-DWG ne-DXF 2000 ayagcina njengama-spline. Bona [Ama-spline nama-polyline](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) ivala futhi ivule ama-polyline, ihlanganise imigqa namaarc kuwo, isethe ububanzi obubodwa, ilinganise ijika phakathi kwamavertex noma i-spline ngaphansi kwawo, futhi ayibuyisele ngeDecurve, iguqule ukuqondiswa, futhi ihlele amaningi ngesikhathi esisodwa. Bona [Hlela i-polyline](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) ibhala ibhulokhi, izinto ezithile noma umdwebo wonke kufayela elisha le-DWG noma i-DXF elibamba kuphela izingqimba, izitayela namabhulokhi abasebenzisayo. Bona [Bhala ibhulokhi noma izinto efayeleni lazo](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ne-REGENALL.** {{cmd:REGEN}} (`RE`) ihlaziya ithebhu oyikhona emdwebeni, {{cmd:REGENALL}} (`REA`) yonke amathebhu, amaphaneli nemidwebo evulekile. Bona [REGEN ne-REGENALL](topic:commands#regen-and-regenall).

### Umbhalo nezilinganiso

- **Umbhalo ugcina ukwakheka kwawo.** Umbhalo wesigaba ovela kwezinye izinhlelo ugcina imibala ngamagama, okuqinile nokuthambekile, ukugqamisa, izinhlamvu zesigaba zibekwe phezu kwenye nobude bawo: adwetshwa ekuskrinini nasemaPDF, agcinwa lapho uhlela amagama, futhi agcinwa emuva. Bona [Ukwakheka phakathi kombhalo wesigaba ovela kwezinye izinhlelo](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Isiphathi sezitayela zezilinganiso.** {{cmd:DIMSTYLE}} (`D`) yenza, iguqule, ifanise futhi isebenzise izitayela zezilinganiso ezinamagama; ukushintsha isitayela kushintsha yonke isilinganiso esisisebenzisayo. {{cmd:DIMEDIT}} (`DED`) ibuyisela umbhalo, ifaka umbhalo omusha, iwuphendulela noma ithambekisa imigqa yokwelula; {{cmd:DIMTEDIT}} ihambisa umbhalo ngakwesobunxele, ngakwesokudla noma emaphakathi. Bona [Izitayela zezilinganiso ezinamagama](topic:dimension-settings#named-dimension-styles).
- **Izikali zakho.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) yengeza izikali ezifana ne-1:75 ohlwini lwezikali zamabhodlela nokushicilela; zigcinwa emdwebeni (DWG ne-DXF 2000), futhi umdwebo ovela kwenye inhlelo uletha uhlu lwawo. Bona [Izikali](topic:units-papers-scales#scales).
- **Umbhalo kwezinye izimbobo.** Amafayela e-DXF agcinwe ngamakhodi ekhasi aseCyrillic, aseKorea, aseChina, aseJapan noma aseVietnam asevula manje nombhalo wawo, futhi umbhalo waseChina, waseJapan naseKorea uyaphrintwa kuma-PDF (i-plot ilanda ifonti enkulu ngesikhathi esisodwa lapho idinga). Bona [Ifonti](topic:text#font).

### Ukuplotha nokushicilela

- **Okwengeziwe kumatheyibhili esitayela sokushicilela.** Ngombala ngamunye ithebula manje lingasetha nohlobo lomugqa, ukuphela komugqa nokuhlangana kwawo, kanye nesitayela sokugcwalisa esishicilela ukugcwaliswa okuqinile njengemigqa ye-hatch; ithebula linohlu lwalo lwamabanga omugqa kanye nesikali sohlobo lomugqa. Bona [Amatheyibhili esitayela sokushicilela](topic:plot-pdf#plot-style-tables).
- **Ukushicilela, namafayela e-PNG ne-SVG.** Ingxoxo ye-Plot inawo {{ui:Phrinta…}}, {{ui:Landa i-PNG}} (300 dpi) ne-{{ui:Landa i-SVG}}. Ku-CadCraft Studio ibala izimshini zokuphrinta zekhompyutha, iphepha lazo nenani lezikhophi. Bona [Phrinta](topic:plot-pdf#print) kanye [Amafayela esithombe ne-SVG](topic:plot-pdf#picture-and-svg-files).

### 3D nemifantu yamaphoyinti

- **Izinto ze-3D ezivela kwezinye izinhlelo.** Izinto eziqinile, izifunda nemizimba emkhathini womdwebo zivela kuthebhu ye-3D, zifundeka kuphela, futhi ukugcina njenge-DWG kuzibuyisela ngaphandle kokushintsha. Ubuso ezindaweni ze-CadCraft ingakadwebi kuhlolwa njengokuthi zinanaphi, hhayi ukuqagela. Bona [Izinto eziqinile ezivela kwezinye izinhlelo](topic:3d-solids#solids-from-other-programs).
- **Bhalisa izikena eziningi.** {{cmd:REGISTERSCANS}} (`REGSCAN`) ibeka izikena ezithathwe ezindaweni ezahlukene ngaphansi kwefreyimu eyodwa, ngamapheya amaphoyinti noma izixhumanisi ezibhaliwe, iyiqinisa nge-ICP, igcina ukubhalisa njengefayela elincane leprojekthi, futhi ibhala ifu elibhalisiwe njengefayela elilodwa le-LAS noma le-E57. Bona [Bhalisa izikena eziningi zibe yodwa](topic:register-scans).
- **Ukuthumela i-USD ngaphandle.** {{cmd:USDOUT}}, noma {{cmd:EXPORT3D}} › {{ui:USD}}, ibhala izinto ze-3D ngaphandle njenge-`.usda`, `.usdc` noma `.usdz`. Bona [Khipha imodeli ye-3D njenge-USD](topic:usd).
- **Okubalwayo kuthebhu ye-3D.** Lapho amathuluzi ethebhu ye-3D ecela ibanga, ungathayipha ukubala, njengasemugqeni womyalo. Bona [Ukubalwa kumanani athayipheke](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Ukwenza izinto

- **Thumela umdwebo kulaser.** {{cmd:LASER}}, noma {{ui:View}} › {{ui:More}} › {{ui:Laser…}}, ivula iphaneli phezu komdwebo: ingqimba ngayinye iyasika, iyabhala, ibhale imigqa, igcwalise izimo, ibhale isithombe noma ayithunyelwa, nenani lamandla, isivinini nezindlela. Ukubuka kulandela okuhleliwe, {{ui:Londoloza i-G-code…}} ibhala i-G-code yemodi ye-laser ye-GRBL, futhi ku-Chrome noma ku-Edge iphaneli ingasho umkhawulo womsebenzi futhi ayithumele nge-USB. Izilungiselelo zigcinwa emdwebeni (DWG ne-DXF). Bona [Thumela umdwebo kulaser](topic:laser-cutting).
- **Izimpawu zokufakwa kwezakhiwo kwi-add-on ye-Electrical.** Izimbobo zedatha, zocingo nezikrini ze-TV, amaswishi okhiye nesikhathi, ithemostat, uphawu lokuphuma, amadivayisi okuthola, ibhuzela nesiqapheli, ifeni, isishisi samanzi, isitofu, indawo yokushaja i-EV, imitha yamandla nebhodi elingaphansi, nezimpawu ze-RCD ne-RCBO. Isekethe ingaba ne-RCD, ithebula lezincwadi zephaneli linekholomu ye-RCD, nokuhlola kubiza izekethe zesokhethi ezingenayo i-RCD ye-30 mA noma ngaphansi kwayo. Yisikhumbuzo sokuhlela, hhayi ukuhlola kwekhodi.
- **I-add-on ye-P&ID.** I-P&ID idweba amadayagrama wenqubo: izimpawu ngamaphoyinti okuxhuma, imigqa yenqubo nesignali, amathegi, izinombolo zemigqa, uhlu lwemigqa, lwezinto, lwezinsizakalo nelwamavalvu (i-CSV noma incwadi yomsebenzi) nokuhlola. Yefika nge-CadCraft futhi ivalwe kuze kuvulwe kuzilungiselelo {{ui:Izilungiselelo}} › {{ui:Jikelele}} › {{ui:Okwengeziwe}}. Yisisiza sokudweba, hhayi ukuvunywa kwezobunjiniyela, futhi amagama ayo ngesiNgisi kuphela okwamanje.

### Ukuqala nesikrini

- **Umdwebo wokuqala oqondisiwe.** {{cmd:TOUR}} (noma {{ui:Thatha uhambo}} ekhadini lokuqala) ikuhambisa ngezinyathelo eziyisithupha emdwebeni wangempela: umugqa, indilinga, ukuhambisa, ukusika, ukususa nesilinganiso. Iqala yodwa ngesikhathi esiqala ngaso i-CadCraft ivula ingenalutho. Bona [Uthanda ukuqondiswa?](topic:getting-started#prefer-to-be-guided)
- **Ishidi lesiqondiso esisheshayo nemephu yemiyalo.** [Ishidi lesiqondiso esisheshayo](topic:cheat-sheet) linemiyalo engu-40 yansuku zonke ngekhasi elilodwa, nayo njenge-PDF yokushicilela, futhi [imephu yemiyalo](topic:command-map) ibala imiyalo ngamagama ayo amafushane, u-A kuya ku-Z.
- **Ithuluzi ngakunoma iyiphi uhlangothi.** {{ui:Izilungiselelo}} › {{ui:CadCraft}} › {{ui:Indawo yebha yamathuluzi}}: phezulu (njengakuqala), phansi, ngakwesobunxele noma ngakwesokudla, noma uthayipha {{cmd:TOOLBARDOCK}}. Bona [Indawo yebha yamathuluzi](topic:settings#toolbar-position).
- **Imigqa yamathuluzi.** {{ui:Izilungiselelo}} › {{ui:CadCraft}} › {{ui:Imigqa yamathuluzi}}: ukuhlanganisa ukuze kulingane, imigqa emi-2 noma eyi-1, kwethuluzi le-CadCraft nakuzitayela ze-Drafting classic ne-Ribbon. {{key:Shift+Ctrl+F1}} ihamba phakathi kwazo, {{key:Ctrl+F1}} phakathi kokuboniswa izinkinobho, futhi {{cmd:TOOLBARROWS}} ne-{{cmd:TOOLBAR}} zizisetha. Isiphakamiso sokuqala sinenkinobho yokuvala. Siyabonga ku-GJoe2, owethule lokhu njenge-pull request. Bona [Imigqa yamathuluzi](topic:settings#toolbar-rows).

### Ku-CadCraft Studio

- **Umlando.** {{cmd:HISTORY}} (`HIST`), noma {{ui:View}} › {{ui:More}} › {{ui:Umlando…}}: amakhophi i-Studio agcina lapho uvula futhi ulondoloza umdwebo, nezinguqulo ze-cloud zomdwebo uma uwuvule usuka ku-cloud. Vula noma buyisela enye, noma qhathanisa ezimbili, nokungezwa, ukususwa nokushintshwa okubonakala ngombala. Bona [Umlando](topic:history).
- **acad.lsp no-acaddoc.lsp.** Khetha ifolda yokusekela ku-{{cmd:APPLOAD}}: lezi zifayela ezimbili ziyalayisha lapho i-CadCraft iqala (i-acaddoc.lsp futhi kwithebhu ngayinye yomdwebo omusha), futhi i-`S::STARTUP` iyasebenza ngemva kwazo. Bona [Layisha izinhlelo](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Ingxoxo ye-Plot ngewindi layo.** Inkinobho esihlokweni sayo ihambisa ibe yiwindi ongalibeka kwenye imonitha. Bona [Hambisa ingxoxo](common:arrange-panels#move-a-dialog).

### Kubasizi be-AI

- **Amafayela ngegama, emafolda oyikhethayo.** Ku-CadCraft Studio umsizi angavula, alondoloze futhi ahlele amafayela ngegama, futhi anike umyalo ifayela eyicelayo (INSERT kusuka kwefayela, ukukhishwa kwe-COUNT, SAVEAS, PLOT), kodwa kuphela ngaphakathi kwamafolda owengeza ngaphansi kwe-{{ui:Izilungiselelo}} › {{ui:CadCraft}} › {{ui:Abasizi}} › {{ui:Amafolda angasetshenziswa}}. Bona [Vumela ukusebenzisa amafayela emafolda okhethile](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Imiyalelo emincane.** Umsizi angabhala umugqa wonke womyalo ngesikhathi esisodwa, agcine umyalo uvulekile phakathi kwemibizo yakhe, abale izinto ngohlobo nengqimba ngaphandle kokuzibhala, nokufaka ibhulokhi namanani ezakhiwo zayo ngesinyathelo esisodwa.
- **Ngaphandle kwewindi.** Umugqa womyalo we-`cadcraft` ubhala ama-SVG plot futhi uguqule, uplotte, uhlole noma uchaze amafayela amaningi ngesikhathi esisodwa. Iphakheji ye-MCP alikashicilelwa. Bona [Sebenza namafayela ngaphandle kokuvula CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Kushintshiwe

- **Ithrackpad iyahambisa.** Hambisa iminwe emibili ku-trackpad futhi umbono ongu-2D uyayilandela; i-pinch nevili le-mouse kuyasondeza. Bona [Imbewu, i-trackpad nokuthinta](topic:mouse-trackpad-touch).
- **Izinto ze-OLE ziyagcinwa.** Izinto ezipachikiwe ze-DXF zibonakala njengesithombe sazo noma njengefreyimu enesihloko, futhi ziyagcinwa lapho ugcina nge-DXF 2000. Ezinye ze-DWG ziyagcinwa futhi zibhalwe ngaphansi kwalapho ulondoloza njenge-DWG, kodwa azikabonakali okwamanje. Ngaphambili zazilahleka lapho ulondoloza. Bona [Izinto ezivela kwezinye izinhlelo (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Izinyunithi zomdwebo omusha** zilandela iyunithi oyikhethayo ku-{{ui:Izilungiselelo}} › {{ui:Jikelele}} › {{ui:Amayunithi}}.

## Kulungisiwe

- Ama-layout avula engenalutho, noma alahla i-viewport abonisa imodeli yonke esikhundleni sayo, manje avula nama-viewport awo angempela. I-layout engenalo ixhumanisi nokuqukethwe kwayo iyagcinwa, futhi umbiko wokuvula uyasho lokho.
- Amafayela e-DXF ngamakhodi ekhasi amadala ayebonisa umbhalo waseCyrillic naseKorea ogxobile. Manje uyafundeka ngokulungile.
- Umbhalo wesigaba ovela kwezinye izinhlelo wawulahlekelwa ukwakheka kwawo uma uvulwa futhi ugcinwe emuva ungenawo.

## Kuzo zonke izinhlelo

- **Izinyunithi.** {{ui:Izilungiselelo}} › {{ui:Jikelele}} › {{ui:Amayunithi}} linohlu olulodwa ngalunye lobude, indawo, ivolumu, i-engeli nokuthambeka, namasayizi angokoqobo njengoba azichaza (i-foot yokuhlola yase-US iyunithi yayo). Vala izinyunithi ongazisebenzisi, futhi zishiya izinhlu zezinyunithi; khetha olodwa, futhi umsebenzi omusha uqala kuwo. Ifayela lihlala linayo iyunithi yalo. Ku-CadCraft isinyathelo sisetha izinyunithi zomdwebo omusha uma iyunithi ingaphathwa umdwebo; ibhokisi lika-CadCraft {{ui:Amayunithi}} alilandeli izinkinobho okwamanje. Uma umdwebo usuneyunithi, ibanga oliphrinta lingaba noma iyiphi iyunithi. Bona [Izinyunithi, amanani athayipheke nohlu lwezinyunithi](common:unit-lists).
- **Isakhiwo esiminyene nephaneli ezicwebezela.** {{ui:Izilungiselelo}} › {{ui:Jikelele}} › {{ui:Ubukhulu besakhiwo}} › {{ui:Okuncane}} kwengeza okwengeziwe esikrinini (izikrini zokuthinta nama-foni agcina izinkinobho zawo ezinkulu). Ngayinye yamaphaneli ohlangothini inebha yesihloko esincane: yidonsele ukuze uyihlanganise noma uyiphephe, uyilahle ebhareni yephaneli elinye ukuze wabelane ngefreyimu ibe ngamathebhu, uyibophe ukuze ishelele ngasemphethelweni, noma uyifihle bese uyibuyisa emphethelweni. Bona [Hlela amaphaneli](common:arrange-panels#make-the-layout-denser).
- **Izingxoxo ziyahamba.** Donsa ingxoxo ngebha yesihloko uyikhiphe ezindleleni zomdwebo; ibuyela lapho wayishiya khona. Chofoza kabili ibha yesihloko ukuze uyigxile kabusha. Bona [Hambisa ingxoxo](common:arrange-panels#move-a-dialog).
- **Izincomo zabasizi be-AI.** Izicelo eziyishumi ezisebenzayo zomsizi wakho (hlela umdwebo, plotha isethi, hlola imidwebo, buza imodeli imibuzo, bala ukubalwa kwamanani, zama ukuhluka kwengxenye…), ngayinye nemithi ibiza nezimvume ezidingekayo, futhi ngayinye iphindwa ngamavivinyo ethu. Izinhlelo azinayo i-AI. Bona [Izincomo zabasizi be-AI](common:assistants-recipes).
- **Izilimi.** **Português (Portugal)** itsha ku-{{ui:Izilungiselelo}} › {{ui:Jikelele}} › {{ui:Ulimi}}. Yona, **Português (Brasil)**, **Español (México)** kanye **Bahasa Indonesia** manje zinawo wonke amagama ezinhlelo, njengemisebenzi engakabuyekezwa yisikhulumi sendabuko. Izihloko zosizo zisesiNgisi.
- **CadCraft Studio** ichaza ukuthi kungani ukuhlola isibuyekezo kwehlulekile (akukho fayela lesistimu yakho okwamanje, akukho inethiwekhi, isiginecha esiyinkinga), kunokuthi "Kwenziwe" nje, futhi ayiphindi ikhadi le-What's new eliwuvalile kuze kube khona ukukhishwa okusha.

## Akukakufinyelelwa kule nguqulo

- **0.7 ayisayinwanga ngekhodi.** Ukusayina, nephakheji yeMicrosoft Store, kudlulele ku-0.8 ngoba ukuqinisekiswa kwesitifiketi akukafiki. Hlola i-SHA-256 eseceleni kwefayela ngalinye ku-getcadcraft.com/download. Ku-Windows, uma i-SmartScreen imisa i-installer, khetha {{ui:Ulwazi oluningi}}, bese {{ui:Yenza noma kunjalo}}. Ku-Mac, okokuqala, chofoza kwesokudla i-CadCraft Studio bese ukhetha {{ui:Vula}}. I-CadCraft Studio ayikakabi kwesitolo sezinhlelo, futhi akukakhiwa ukwakha kwe-iPad noma i-iPhone.
- Uhlu lwama-engeli nokuthambeka ku-{{ui:Amayunithi}} lugcinwa, kodwa akukho ibhokisi elikufundayo okwamanje.
- Izinto ze-OLE ze-DWG ziyagcinwa kodwa azibonakali, futhi izithombe ze-metafile ngaphakathi kwezinto ze-OLE azidwetshwa.
- Ukufunda amatheyibhili esitayela sokushicilela (amafayela e-CTB) avela kwezinye izinhlelo kulinde ifayela lesampula.
- Umbhalo wase-Asia wakudala obhalwe ngamakhodi e-`\M+` uyafundeka, kodwa awukahlolwa ngefayela elivela kwenye inhlelo.
- Ama-PDF underlay: izithombe ngaphakathi kwekhasi ziboniswa ekuskrinini kodwa azishicilelwa, ukushicilelwa komsizi kushiya ama-underlay ngaphandle, futhi indlela ezinye izinhlelo ezifunda ngayo ukusikwa nesikali egcinwe ngayo ayikahlolwa kuzo.
- Umlando: i-CadCraft ayikathumeli ukulondolozwa kwayo ku-cloud, ngakho izinguqulo ze-cloud ziyizo ezigcinwe kwamanye amadivayisi nakwiwebhu. Umlando ukhona ku-CadCraft Studio kuphela.
- Ifolda yokusekela ye-acad.lsp ukuthi iyagcinwa yini Studio ngemuva kokuqalisa kabusha ayikahlolwa; uma ibuza, khetha kabusha ifolda ku-APPLOAD.
- Iphaneli ye-Laser ayikakavivinywa kulaser yangempela: hlola zonke izilungiselelo kwindle elahlekile. I-CadCraft Studio ayinayo i-Web Serial, ngakho ku-Studio iphaneli igcina i-G-code kuphela.
- Ukubhalisa izikena kuvivinywe ngezikena ezenziwe, hhayi okwamanje esethini yesikena sangempela.
- Ukuhambisa ngeminwe emibili kuvivinywe ngemicimbi ye-trackpad elingisiwe, hhayi ku-trackpad yangempela okwamanje.
- {{cmd:PEDIT}} ayinayo inketho ethi Edit vertex (sebenzisa ama-grip noma i-Properties). I-Offset, i-trim, i-extend, i-fillet, i-break nejoyina aziwuthathi ama-spline okwamanje; ukuphakama kwe-spline (Z) akugcinwa.
- Umbhalo omusha wesigaba awukwazi ukunikezwa amakhodi wokwakheka okwamanje, futhi izinkombandlela ze-SVG zibonisa umbhalo owakhiwe ngombala owodwa.
- I-Entire drawing ye-WBLOCK ibhala imodeli kuphela, hhayi amashidi. Isitayela sezilinganiso samanje asigcinwa efayeleni: umdwebo uvula nge-Standard njengamanje.
- Izitayela zemenyu ye-ribbon azinazo izinhlu zezingqimba, zemibala noma zohlobo lomugqa okwamanje: sebenzisa iphaneli ye-{{ui:Izingqimba}} ne-{{ui:Izakhiwo}}.
- Amafu amaphoyinti awagcinwa emdwebeni noma adwetshwe okwamanje, futhi amafayela e-E57 avula kuya ku-6 million amaphoyinti nango-512 MB.
- Amafayela e-DWG agcinwe yi-CadCraft awakahlolwa ku-AutoCAD ngqo okwamanje.

Konke okunye kukuthi [Akukakhiwa okwamanje](topic:not-built-yet).
