---
title: Nýtt í 0.7 (eldra)
summary: PDF-undirlög og PDF-innflutningur, skannaðar teikningar með sjálfvirkri rekningu, alvöru ferlar með SPLINE, SPLINEDIT og PEDIT, stjórnun víddarstíla, texti sem heldur sniði sínu, WBLOCK og eigin kvarðar, þrívíddarfleygar frá öðrum forritum, skráning skanna, Laser-spjald, USD-útflutningur, Saga og prentun í CadCraft Studio, fyrsta teikning með leiðsögn, tækjastikan á hvorri hlið eða í færri línum, og meira fyrir gervigreindaraðstoðarmenn.
keywords: nýtt 0.7, eldri útgáfa, útgáfuskýringar, breytingaskrá, breytingar, 0.7, útgáfa, nýir eiginleikar, pdf, pdfattach, pdfimport, undirlag, skönnun, scanattach, scantrace, rekja, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, snið, wblock, kvarðalisti, scalelistedit, acis, þrívíddarfleygar, registerscans, skráning skanna, icp, e57, las, laser, grbl, g-code, usd, usdout, saga, útgáfur, bera saman, prenta, prentari, png, svg, plotstíll, línugerð, leiðsögn, svindlblað, skipanakort, staða tækjastikunnar, línur tækjastikunnar, toolbardock, regen, regenall, snertiflötur, strjúka, kóðasíða, kýrillískt, kóreskt, kínverskt, japanskt, rafmagn, rcd, p&id, pid, acad.lsp, acaddoc.lsp, stuðningsmappa, aðstoðarmenn, mcp, einingar, portúgalska
from: d07ca034
---

Þetta breyttist í CadCraft 0.7 miðað við 0.6. Mikið af þessu var óskað eftir á Discord. Listinn er flokkaður eftir svæðum, með því mikilvægasta fyrst.

## Nýtt

### PDF-skjöl og skannaðar teikningar

- **Settu PDF-síðu undir teikninguna.** {{cmd:PDFATTACH}} (`PDFATT`) setur síðu í raunstærð eða mælikvarða sem þú skrifar. Smelltu á línur hennar, dofnaðu hana, gerðu hana einlita ({{cmd:PDFADJUST}}), klipptu hana ({{cmd:PDFCLIP}}) og skiptu um lög PDF-skjalsins ({{cmd:PDFLAYERS}}). Hún prentast sem línur, fyllingar og texti, og DWG eða DXF 2000 geymir hana sem tengil í skrána. Þegar þú opnar PDF með {{ui:Open}} er spurt hvort festa eigi það við eða flytja það inn. Sjá [PDF-undirlög og PDF-innflutningur](topic:pdf-underlay).
- **Breyttu PDF-síðu í teikniefni.** {{cmd:PDFIMPORT}} (`PDFIM`) býr til línur, fjöllínur, hringi, boga, heilar skyggingar og texta á lögum sem heita eftir PDF-skjalinu, í raunstærð, í mælikvarða sem þú skrifar, eða skalað út frá tveimur punktum og raunverulegri fjarlægð, í einu skrefi sem hægt er að afturkalla. Sjá [Flytja inn síðu](topic:pdf-underlay#import-a-page).
- **Skannaðar teikningar.** {{cmd:SCANATTACH}} sækir PNG, JPEG eða TIFF (eina síðu eða allar) eða PDF-síðu sem er mynd. Síðan er hægt að kvarða hana út frá tveimur punktum ({{cmd:SCANSCALE}}), jafna hana ({{cmd:SCANALIGN}}), rétta hana eftir eigin löngu línum ({{cmd:SCANDESKEW}}), gera hana svarthvíta og fjarlægja bletti ({{cmd:SCANCLEAN}}), klippa hana til og stroka út hluta hennar. Hvert skref er eitt skref sem hægt er að afturkalla og upprunalega skráin er geymd. Sjá [Skannaðar teikningar og rekningin](topic:scanned-drawings).
- **Rekja skann í línur og boga.** {{cmd:SCANTRACE}} teiknar línur skannsins sem línur og boga á nýju lagi, SCAN-TRACE, innan skekkjumarka sem þú setur, og skilur texta og skyggingar eftir óbreytt. Skýrslan segir hvað var búið til og hvað var skilið eftir, og hún er ekki fullyrðing um að niðurstaðan sé rétt: athugaðu hana við blaðið. {{cmd:RASTERSNAP}} gerir að verkum að hlutasmellur finna enda, horn og skurðpunkta skannsins. Ekkert er sent neitt og ekkert þjálfað líkan er notað. Sjá [Rekningin](topic:scanned-drawings#the-trace).

### Teikning og breytingar

- **Alvöru ferlar.** {{cmd:SPLINE}} (`SPL`) teiknar feril í gegnum punkta eða út frá stjórnpunktum (stig 1 til 5), með endasnertlum. {{cmd:SPLINEDIT}} (`SPE`) færir, bætir við og eyðir passapunktum eða stjórnpunktum, setur vigtir, opnar, lokar, snýr við eða breytir ferli í fjöllínu. Ferlar úr DWG- og DXF-skrám opnast sem ferlar, og DWG og DXF 2000 vista þá sem ferla. Sjá [Ferlar og fjöllínur](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) lokar og opnar fjöllínur, tengir línur og boga við þær, setur eina breidd, lagar feril í gegnum hornpunkta eða feril meðfram þeim, og tekur hann til baka með Decurve, snýr þeim við og breytir mörgum í einu. Sjá [Breyta fjöllínu](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skrifar blokk, nokkra hluti eða alla teikninguna í nýja DWG- eða DXF-skrá sem geymir aðeins þau lög, stíla og blokkir sem þeir nota. Sjá [Skrifa blokk eða hluti í eigin skrá](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN og REGENALL.** {{cmd:REGEN}} (`RE`) teiknar flipann sem þú ert á aftur úr teikningunni, {{cmd:REGENALL}} (`REA`) alla flipa, rúður og opnar teikningar. Sjá [REGEN og REGENALL](topic:commands#regen-and-regenall).

### Texti og víddir

- **Texti heldur sniði sínu.** Málsgreinatexti úr öðrum forritum heldur litum sínum fyrir hvert orð, feitletrun og skáletrun, undirstrikun, staflaðar brotatölur og hæðum: hann er teiknaður á skjánum og í PDF-skjölum, heldur sér þegar þú breytir orðunum og er vistaður aftur. Sjá [Snið inni í málsgreinatexta frá öðrum forritum](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Stjórnun víddarstíla.** {{cmd:DIMSTYLE}} (`D`) býr til, breytir, ber saman og beitir nefndum víddarstílum; breyting á stíl breytir öllum víddum sem nota hann. {{cmd:DIMEDIT}} (`DED`) setur texta aftur, skrifar nýjan texta, snýr honum eða hallar framlengingarlínunum. {{cmd:DIMTEDIT}} færir textann til vinstri, hægri eða í miðju. Sjá [Nefndir víddarstílar](topic:dimension-settings#named-dimension-styles).
- **Eigin kvarðar.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) bætir kvörðum eins og 1:75 við kvarðalista sýniglugga og prentunar. Þeir eru vistaðir í teikningunni (DWG og DXF 2000), og teikning úr öðru forriti kemur með sinn eigin lista. Sjá [Kvarðar](topic:units-papers-scales#scales).
- **Texti í öðrum stafrófum.** DXF-skrár vistaðar með kýrillískum, kóreskum, kínverskum, japönskum eða víetnömskum kóðasíðum opnast nú með texta sínum, og kínverskur, japanskur og kóreskur texti prentast í PDF-skjölum (prentunin sækir stærra letur í fyrsta skipti sem það þarf). Sjá [Letur](topic:text#font).

### Útprentun og prentun

- **Meira í plotstílatöflum.** Fyrir hvern lit getur tafla nú líka stillt línugerð, línuenda og línutengingu, og fyllingarstíl sem prentar heilar fyllingar sem skyggingarlínur. Taflan hefur sinn eigin lista yfir línuþykktir og línugerðarkvarða. Sjá [Plotstílatöflur](topic:plot-pdf#plot-style-tables).
- **Prenta, og PNG- og SVG-skrár.** Útprentunarglugginn hefur {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) og {{ui:Download SVG}}. Í CadCraft Studio listar hann prentara tölvunnar, pappír þeirra og fjölda eintaka. Sjá [Prenta](topic:plot-pdf#print) og [Mynda- og SVG-skrár](topic:plot-pdf#picture-and-svg-files).

### Þrívídd og punktaský

- **Þrívíddarfleygar frá öðrum forritum.** Fleygar, svæði og líkamar í líkanrými teikningar birtast á þrívíddarflipanum, eingöngu til lestrar, og vistun sem DWG skrifar þá óbreytta til baka. Fletir á yfirborðum sem CadCraft teiknar ekki enn eru taldir upp, ekki giskað á þá. Sjá [Fleygar frá öðrum forritum](topic:3d-solids#solids-from-other-programs).
- **Skráðu nokkrar skannanir.** {{cmd:REGISTERSCANS}} (`REGSCAN`) setur skannanir sem teknar eru frá mismunandi stöðum í einn ramma, eftir punktapörum eða skrifuðum hnitum markmiðs. Hún fínstillir þær með ICP, vistar skráninguna sem litla verkefnaskrá og skrifar skráða punktaskýið sem eina LAS- eða E57-skrá. Sjá [Skráðu nokkrar skannanir í eina](topic:register-scans).
- **USD-útflutningur.** {{cmd:USDOUT}}, eða {{cmd:EXPORT3D}} › {{ui:USD}}, skrifar fleyga þrívíddarflipans sem `.usda`, `.usdc` eða `.usdz`. Sjá [Flytja þrívíddarlíkanið út sem USD](topic:usd).
- **Reikningar á þrívíddarflipanum.** Þar sem verkfæri þrívíddarflipans biðja um fjarlægð geturðu skrifað reikning, eins og á skipanalínunni. Sjá [Reikningar í skrifuðu gildi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Gerð hluta

- **Sendu teikningu í leysi.** {{cmd:LASER}}, eða {{ui:View}} › {{ui:More}} › {{ui:Laser…}}, opnar spjald yfir teikningunni: hvert lag sker, rispar, grafar línur, fyllir form, grefur mynd eða er ekki sent, með afli sínu, hraða og umferðum. Forskoðunin fylgir breytingum þínum, {{ui:Save G-code…}} skrifar GRBL-G-kóða í leysistillingu, og í Chrome eða Edge getur spjaldið rammað verkið og sent það yfir USB. Stillingarnar eru vistaðar í teikningunni (DWG og DXF). Sjá [Senda teikningu í leysi](topic:laser-cutting).
- **Rafmagnstákn í rafmagnsviðbótinni.** Gagna-, síma- og sjónvarpsinnstungur, lykil- og tímarofar, hitastillir, neyðarskilti, skynjarar, kallpunktur og hljóðgjafi, vifta, vatnshitari, eldavél, hleðslupunktur fyrir rafbíla, orkumælir og undirtafla, og RCD- og RCBO-tákn. Rás getur borið RCD, töfluyfirlitið hefur RCD-dálk, og athuganirnar nefna innstungurásir án RCD upp á 30 mA eða minna. Þetta er áminning við hönnun, ekki kóðaskoðun.
- **P&ID-viðbót.** P&ID teiknar ferlamyndir: tákn með tengipunktum, ferla- og merkjalínur, merki, línunúmer, lista yfir línur, búnað, mæla og loka (CSV eða vinnubók) og athuganir. Hún fylgir CadCraft og er slökkt þar til þú kveikir á henni í {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}. Þetta er teiknihjálp, ekki verkfræðileg samþykkt, og textinn á henni er eingöngu á ensku enn sem komið er.

### Byrjun og skjárinn

- **Fyrsta teikning með leiðsögn.** {{cmd:TOUR}} (eða {{ui:Take the tour}} á byrjunarkortinu) leiðir þig í gegnum sex skref í raunverulegu teikningunni: línu, hring, færslu, klippingu, eyðingu og vídd. Hún byrjar sjálf í fyrsta skipti sem CadCraft opnast með engu í. Sjá [Viltu fá leiðsögn?](topic:getting-started#prefer-to-be-guided)
- **Svindlblað og skipanakort.** [Svindlblaðið](topic:cheat-sheet) hefur 40 algengar skipanir á einni síðu, einnig sem PDF til prentunar, og [skipanakortið](topic:command-map) listar skipanir með stuttnöfnum sínum í stafrófsröð.
- **Tækjastikan á hvorri hlið.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: efst (eins og áður), neðst, vinstra megin eða hægra megin, eða skrifaðu {{cmd:TOOLBARDOCK}}. Sjá [Staða tækjastikunnar](topic:settings#toolbar-position).
- **Línur tækjastikunnar.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: vefja til að passa, 2 línur eða 1 línu, fyrir CadCraft-tækjastikuna og stílana Drafting classic og Ribbon. {{key:Shift+Ctrl+F1}} fer í gegnum þær, {{key:Ctrl+F1}} í gegnum það sem hnapparnir sýna, og {{cmd:TOOLBARROWS}} og {{cmd:TOOLBAR}} stilla þær. Byrjunarvísbendingin er með lokunarhnapp. Þakkir til GJoe2, sem sendi þetta sem beiðni um samruna (pull request). Sjá [Línur tækjastikunnar](topic:settings#toolbar-rows).

### Í CadCraft Studio

- **Saga.** {{cmd:HISTORY}} (`HIST`), eða {{ui:View}} › {{ui:More}} › {{ui:History…}}: afritin sem Studio geymir þegar þú opnar og vistar teikningu, og skýútgáfur teikningarinnar ef þú opnaðir hana úr skýinu. Opnaðu eða endurheimtu eina, eða berðu tvær saman, með því sem var bætt við, fjarlægt og breytt sýnt í lit. Sjá [Saga](topic:history).
- **acad.lsp og acaddoc.lsp.** Veldu stuðningsmöppu í {{cmd:APPLOAD}}: þessar tvær skrár hleðjast þegar CadCraft ræsist (acaddoc.lsp aftur fyrir hvern nýjan teikniflipa), og `S::STARTUP` keyrir á eftir þeim. Sjá [Hleðsla forrita](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Útprentunargluggi í eigin glugga.** Hnappur í titilstiku hans færir hann í glugga sem þú getur sett á annan skjá. Sjá [Færa glugga](common:arrange-panels#move-a-dialog).

### Fyrir gervigreindaraðstoðarmenn

- **Skrár eftir nafni, í möppum sem þú velur.** Í CadCraft Studio getur aðstoðarmaður opnað, vistað og prentað skrár eftir nafni, og gefið skipun þá skrá sem hún biður um (INSERT úr skrá, útflutningur COUNT, SAVEAS, PLOT), en aðeins innan þeirra mappa sem þú bætir við undir {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}. Sjá [Láttu hann nota skrár í möppum sem þú velur](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Færri köll.** Aðstoðarmaður getur skrifað heila skipanalínu í einu, haldið skipun opinni milli kalla, talið hluti eftir gerð og lagi án þess að lista þá, og sett blokk með eigindagildum sínum í einu skrefi.
- **Án glugga.** Skipanalínan `cadcraft` skrifar SVG-prentanir og breytir, prentar, athugar eða lýsir mörgum skrám í einu. MCP-pakkinn er ekki kominn út enn. Sjá [Vinna með skrár án þess að opna CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Breytt

- **Snertiflöturinn færir.** Færðu tvo fingur á snertifletinum og 2D-sýnin fylgir þeim; klípa og músarhjólið stjórna aðdrættinum. Sjá [Mús, snertiflötur og snerting](topic:mouse-trackpad-touch).
- **OLE-hlutir haldast.** OLE-hlutir sem DXF inniheldur birtast sem mynd sín eða sem merktur rammi, og DXF 2000 vistar þá aftur. OLE-hlutir DWG eru geymdir og skrifaðir til baka þegar þú vistar sem DWG, en ekki sýndir enn. Áður töpuðust þeir við vistun. Sjá [Hlutir frá öðrum forritum (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Einingar nýrrar teikningar** fylgja einingunni sem þú stjörnumerkir í {{ui:Settings}} › {{ui:General}} › {{ui:Units}}.

## Lagað

- Skipulag sem opnaðist tómt, eða missti sýniglugga og sýndi allt líkanið í hans stað, opnast nú með raunverulegum sýnigluggum sínum. Skipulag án tengingar við innihald sitt er geymt og opnunarskýrslan segir það.
- DXF-skrár í eldri kóðasíðum sýndu brenglaðan kýrillískan og kóreskan texta. Þær lesast rétt núna.
- Málsgreinatexti úr öðrum forritum missti sniði sínu þegar hann var opnaður og var vistaður aftur sem venjulegur texti.

## Í öllum forritum

- **Einingar.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} hefur einn lista hvorn fyrir lengd, flatarmál, rúmmál, horn og halla, með nákvæmu stærðunum sem skilgreiningar eininganna gefa (bandaríski landmælingafótur er sín eigin eining). Slökktu á þeim einingum sem þú notar aldrei og þær hverfa af listunum; stjörnumerktu eina og nýtt verk byrjar í henni. Skrá heldur alltaf sinni eigin einingu. Í CadCraft stjörnumerkir stjarnan einingar nýrrar teikningar þegar það er eining sem teikning getur borið. Reitur CadCraft fyrir {{ui:Units}} fylgir ekki rofunum enn. Þegar teikning hefur einingar getur lengd sem þú skrifar borið hvaða einingarmerki sem er. Sjá [Einingar, skrifuð gildi og einingalistarnir](common:unit-lists).
- **Þéttara skipulag og spjöld sem hverfa.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} kemur meira á skjáinn (snertiskjáir og símar halda stórum hnöppum sínum). Hvert hliðarspjald hefur mjóa titilstiku: dragðu hana til að festa eða fljóta spjaldið, slepptu henni á titilstiku annars spjalds til að deila einum ramma sem flipum, festu hana til að renna út að kanti, eða feldu hana og sæktu hana aftur af kantinum. Sjá [Raða spjöldum](common:arrange-panels#make-the-layout-denser).
- **Gluggar færast.** Dragðu glugga á titilstikunni úr vegi teikningarinnar; hann kemur aftur þangað sem þú skildir hann eftir. Tvísmelltu á titilstikuna til að miðja hann aftur. Sjá [Færa glugga](common:arrange-panels#move-a-dialog).
- **Uppskriftir fyrir gervigreindaraðstoðarmenn.** Tíu unnin verkefni fyrir þinn eigin aðstoðarmann (taka til teikningu, prenta sett, athuga teikningar, spyrja líkan spurninga, taka saman magntöku, prófa afbrigði hluta og fleira), hvert með verkfærunum sem það kallar og heimildunum sem það þarf, og hvert keyrt aftur af prófunum okkar. Forritin innihalda enga gervigreind. Sjá [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes).
- **Tungumál.** **Português (Portugal)** er nýtt í {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Það, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** hafa nú hvert orð forritanna, sem drög sem innfæddur málhafi hefur ekki yfirfarið. Hjálparefnið er á ensku.
- **CadCraft Studio** segir af hverju athugun á uppfærslu mistókst (engin skrá fyrir kerfið þitt enn, ekkert net, röng undirskrift) í stað þess að segja bara „Lokið", og hættir að sýna kortið „Nýtt í" sem þú lokaðir fyrr en nýrri útgáfa kemur.

## Ekki í þessari útgáfu enn

- **0.7 er ekki undirritað með kóða.** Undirritun og Microsoft Store-pakkinn færðust yfir í 0.8 því staðfesting skírteinisins hefur ekki borist enn. Athugaðu SHA-256 gildið við hverja skrá á getcadcraft.com/download. Á Windows, ef SmartScreen stöðvar uppsetninguna, veldu {{ui:Frekari upplýsingar}}, síðan {{ui:Keyra samt}}. Á Mac, í fyrsta skipti, hægrismelltu á CadCraft Studio og veldu {{ui:Open}}. CadCraft Studio er ekki í forritaverslun enn, og það er ekki til iPad- eða iPhone-útgáfa enn.
- Horna- og hallalistarnir í {{ui:Units}} eru vistaðir, en enginn reitur les þá enn.
- OLE-hlutir DWG eru geymdir en ekki sýndir, og lýsigagnamyndir (metafile) inni í OLE-hlutum eru ekki teiknaðar.
- Lestur á plotstílatöflum (CTB-skrám) úr öðrum forritum bíður eftir sýnishorni.
- Eldri asískur texti skrifaður sem `\M+`-kóðar er lesinn, en hefur ekki verið athugaður við skrá úr öðru forriti enn.
- PDF-undirlög: myndir inni á síðunni sjást á skjánum en eru ekki prentaðar, prentun aðstoðarmanns sleppir undirlögum, og ekki hefur verið athugað hvernig önnur forrit lesa vistaðan klippistað og kvarða.
- Saga: CadCraft sendir ekki vistanir sínar í skýið enn, svo skýútgáfurnar eru þær sem vistaðar voru úr öðrum tækjum og af vefnum. Sagan er aðeins í CadCraft Studio.
- Ekki hefur verið athugað hvort Studio geymir stuðningsmöppu acad.lsp eftir endurræsingu; ef það biður um hana, veldu möppuna aftur í {{cmd:APPLOAD}}.
- Laser-spjaldið hefur ekki verið prófað á alvöru leysi enn: prófaðu hverja stillingu á afklippu. CadCraft Studio hefur ekkert Web Serial, svo í Studio vistar spjaldið aðeins G-kóða.
- Skráning skanna hefur verið prófuð á tilbúnum skönnunum, ekki enn á sett frá alvöru skanna.
- Tveggja fingra hliðrun hefur verið prófuð með hermdum snertiflatarviðburðum, ekki enn á alvöru snertifleti.
- {{cmd:PEDIT}} hefur engan valkost til að breyta hornpunkti (notaðu handföng eða Eiginleika). Hliðrun, klipping, framlenging, ábrún, brot og tenging taka ekki ferla enn, og hæð ferils (Z) er ekki geymd.
- Nýjum málsgreinatexta er ekki hægt að gefa sniðkóða enn, og SVG-prentanir sýna sniðinn texta í einum lit.
- „Öll teikningin" í WBLOCK skrifar aðeins líkanið, ekki blöðin. Núverandi víddarstíll er ekki vistaður í skránni: teikning opnast með Standard sem núverandi.
- Valmyndarborðastílarnir hafa enn engan lista yfir lög, liti eða línugerðir: notaðu {{ui:Layers}}-spjaldið og {{ui:Properties}}.
- Punktaský eru enn ekki vistuð í teikningunni eða prentuð, og E57-skrár opnast með allt að 6 milljón punkta og 512 MB.
- DWG-skrár sem CadCraft vistar hafa ekki verið athugaðar í AutoCAD sjálfu enn.

Allt annað er í [Ekki smíðað enn](topic:not-built-yet).
