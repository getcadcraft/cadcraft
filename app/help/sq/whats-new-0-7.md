---
title: Çfarë ka të re në 0.7 (më herët)
summary: Nënvizime PDF dhe importim PDF, vizatime të skanuara me gjurmim automatik, spline të vërteta me SPLINE, SPLINEDIT dhe PEDIT, menaxher stilesh përmasash, tekst që e ruan formatimin, WBLOCK dhe shkallët tuaja, solidë 3D nga programe të tjera, regjistrim skanimesh, panel Lazer, eksport USD, Historiku dhe printimi në CadCraft Studio, vizatimi i parë i udhëzuar, shiriti i veglave në çdo anë ose në më pak rreshta, dhe më shumë për asistentët AI.
keywords: çfarë ka të re 0.7, version më i hershëm, shënime lançimi, ndryshime, 0.7, version, veçori të reja, pdf, pdfattach, pdfimport, nënvizim, skanim, scanattach, scantrace, gjurmim, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatim, wblock, scalelistedit, listë shkallësh, acis, solidë 3d, registerscans, regjistro skanimet, icp, e57, las, lazer, grbl, g-code, usd, usdout, historiku, versione, krahaso, printo, printer, png, svg, stil plotimi, linetype, udhëzues, fletë shpejtimi, harta e komandave, pozicioni i veglave, toolbardock, regen, regenall, trackpad, rrëshqitje, faqe kodesh, cirilik, koreanisht, kinezisht, japonisht, elektrik, rcd, p&id, pid, acad.lsp, acaddoc.lsp, dosja e mbështetjes, asistentët, mcp, njësi, portugalisht
from: d07ca034
---

Kjo është ajo që ndryshoi në CadCraft 0.7, krahasuar me 0.6. Shumë prej saj u kërkua në Discord. Lista është grupuar sipas fushës, me më të rëndësishmet e para.

## E re

### PDF dhe vizatime të skanuara

- **Vendosni një faqe PDF nën vizatim.** {{cmd:PDFATTACH}} (`PDFATT`) vendos një faqe në madhësinë e saj reale ose në një shkallë që shkruani. Kapni te vijat e saj, zbehni, bëjeni monokrome ({{cmd:PDFADJUST}}), prisni ({{cmd:PDFCLIP}}) dhe ndërroni shtresat e vetë PDF-së ({{cmd:PDFLAYERS}}). Plotohet si vija, mbushje dhe tekst, dhe një DWG ose DXF 2000 e mban si lidhje me skedarin. Hapja e një PDF me {{ui:Hap}} pyet nëse ta bashkëngjitni ose importoni. Shihni [Nënvizimet PDF dhe importimi PDF](topic:pdf-underlay).
- **Ktheni një faqe PDF në objekte vizatimi.** {{cmd:PDFIMPORT}} (`PDFIM`) bën vija, polivija, rrathë, harqe, hatch-e të ngurta dhe tekst në shtresa të emërtuara sipas PDF-së, në madhësinë reale, një shkallë të shkruar, ose të shkallëzuar nga dy pika dhe një distancë reale, në një hap zhbërjeje. Shihni [Importo një faqe](topic:pdf-underlay#import-a-page).
- **Vizatime të skanuara.** {{cmd:SCANATTACH}} sjell një PNG, JPEG ose TIFF (një faqe ose të gjitha) ose një faqe PDF që është figurë. Pastaj shkallëzojeni nga dy pika ({{cmd:SCANSCALE}}), drejtojeni ({{cmd:SCANALIGN}}), drejtojeni këndin nga vijat e veta të gjata ({{cmd:SCANDESKEW}}), bëjeni të zi e të bardhë dhe hiqni njollat ({{cmd:SCANCLEAN}}), prisni dhe fshini pjesë të tij. Çdo hap është një hap zhbërjeje dhe skedari origjinal ruhet. Shihni [Vizatimet e skanuara dhe gjurmimi](topic:scanned-drawings).
- **Gjurmoni një skanim në vija dhe harqe.** {{cmd:SCANTRACE}} i vizaton vijat e skanimit si vija dhe harqe në një shtresë të re, SCAN-TRACE, me një tolerancë që caktoni, dhe lë tekstin dhe vijëzimet ashtu siç janë. Raporti thotë çfarë bëri dhe çfarë la, dhe nuk është një pohim që rezultati është i saktë: kontrolloni me fletën. {{cmd:RASTERSNAP}} lejon kapjet e objekteve të gjejnë skajet, këndet dhe kryqëzimet e skanimit. Asgjë nuk dërgohet askund dhe nuk përdoret asnjë model i trajnuar. Shihni [Gjurmimi](topic:scanned-drawings#the-trace).

### Vizatimi dhe redaktimi

- **Spline të vërteta.** {{cmd:SPLINE}} (`SPL`) vizaton një kurbë që kalon nëpër pika ose nga pikat e kontrollit (shkalla 1 deri 5), me tangjentet e skajeve; {{cmd:SPLINEDIT}} (`SPE`) zhvendos, shton dhe fshin pika të përshtatjes ose kontrollit, cakton peshat, i hap, i mbyll, i kthen mbrapsht, ose e kthen një spline në polivijë. Spline nga skedarët DWG dhe DXF hapen si spline, dhe DWG dhe DXF 2000 i ruajnë si spline. Shihni [Spline dhe polivija](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) mbyll dhe hap polivijat, bashkon vija dhe harqe me to, cakton një gjerësi të vetme, përshtat një kurbë nëpër kulmet ose një spline përgjatë tyre dhe e kthen me Decurve, i kthen mbrapsht dhe redakton disa njëherësh. Shihni [Redakto një polivijë](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) shkruan një bllok, disa objekte ose të gjithë vizatimin në një DWG ose DXF të re, që mban vetëm shtresat, stilet dhe blloqet që përdor. Shihni [Shkruani një bllok ose objekte në një skedar të vetin](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN dhe REGENALL.** {{cmd:REGEN}} (`RE`) rivizaton skedën ku jeni nga vizatimi, {{cmd:REGENALL}} (`REA`) çdo skedë, panel dhe vizatim të hapur. Shihni [REGEN dhe REGENALL](topic:commands#regen-and-regenall).

### Tekst dhe përmasa

- **Teksti e ruan formatimin.** Teksti paragrafësh nga programe të tjera e mban ngjyrën për fjalë, të trashë dhe të pjerrët, nënvizimin, thyesat e grumbulluara dhe lartësitë: vizatohet në ekran dhe në PDF, ruhet kur redaktoni fjalët, dhe kthehet e ruajtur. Shihni [Formatimi brenda tekstit paragrafësh nga programe të tjera](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Menaxher i stileve të përmasave.** {{cmd:DIMSTYLE}} (`D`) krijon, ndryshon, krahason dhe zbaton stile të emërtuara përmasash; ndryshimi i një stili ndryshon çdo përmasë që e përdor. {{cmd:DIMEDIT}} (`DED`) e kthen tekstin në vend, shkruan tekst të ri, e kthen ose e prish vijat e zgjatimit; {{cmd:DIMTEDIT}} e zhvendos tekstin majtas, djathtas ose në qendër. Shihni [Stilet e emërtuara të përmasave](topic:dimension-settings#named-dimension-styles).
- **Shkallët tuaja.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) shton shkallë si 1:75 në listat e shkallëve të dritares së pamjes dhe të plotimit; ruhen në vizatim (DWG dhe DXF 2000), dhe një vizatim nga një program tjetër sjell listën e vet. Shihni [Shkallët](topic:units-papers-scales#scales).
- **Tekst në alfabete të tjera.** Skedarët DXF të ruajtur në faqet e kodeve cirilike, koreane, kineze, japoneze ose vietnameze hapen tani me tekstin e tyre, dhe teksti kinez, japonez dhe korean printohet në PDF (plotimi merr një font më të madh herën e parë që e nevojitet). Shihni [Font](topic:text#font).

### Plotimi dhe printimi

- **Më shumë në tabelat e stilit të plotimit.** Për çdo ngjyrë, një tabelë mund të caktojë tani edhe një linetype, fundin dhe bashkimin e vijës, dhe një stil mbushjeje që printon mbushjet e ngurta si vija hatch; tabela ka listën e vet të trashësive dhe një shkallë linetype. Shihni [Tabelat e stilit të plotimit](topic:plot-pdf#plot-style-tables).
- **Printimi, dhe skedarët PNG dhe SVG.** Dialogu i Plotimit ka {{ui:Printo…}}, {{ui:Shkarko PNG}} (300 dpi) dhe {{ui:Shkarko SVG}}. Në CadCraft Studio liston printuesit e kompjuterit, letrën e tyre dhe numrin e kopjeve. Shihni [Printimi](topic:plot-pdf#print) dhe [Skedarët e figurave dhe SVG](topic:plot-pdf#picture-and-svg-files).

### 3D dhe re pikash

- **Solidë 3D nga programe të tjera.** Solidët, rajonet dhe trupat në hapësirën e modelit të një vizatimi shfaqen në skedën 3D, vetëm për lexim, dhe ruajtja si DWG i shkruan përsëri pa ndryshim. Sipërfaqet mbi superfici që CadCraft nuk i vizaton ende listohen, nuk merren me supozim. Shihni [Solidët nga programe të tjera](topic:3d-solids#solids-from-other-programs).
- **Regjistro disa skanime.** {{cmd:REGISTERSCANS}} (`REGSCAN`) vendos skanime të marra nga pozicione të ndryshme në një kornizë të vetme, me çifte pikash ose koordinata target të shkruara, i rafinon me ICP, e ruan regjistrimin si një skedar të vogël projekti, dhe shkruan renë e regjistruar si një skedar të vetëm LAS ose E57. Shihni [Regjistro disa skanime në një](topic:register-scans).
- **Eksporti USD.** {{cmd:USDOUT}}, ose {{cmd:EXPORT3D}} › {{ui:USD}}, shkruan solidët e skedës 3D si `.usda`, `.usdc` ose `.usdz`. Shihni [Eksporto modelin 3D si USD](topic:usd).
- **Llogaritje në skedën 3D.** Aty ku veglat e skedës 3D kërkojnë një distancë, mund të shkruani një llogaritje, ashtu si në rreshtin e komandës. Shihni [Aritmetika në një vlerë të shkruar](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Krijimi i gjërave

- **Dërgoni një vizatim te lazeri.** {{cmd:LASER}}, ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Lazer…}}, hap një panel mbi vizatim: çdo shtresë pret, gërvishtet, gdhend vija, mbush forma, gdhend një figurë ose nuk dërgohet, me fuqinë, shpejtësinë dhe kalimet e saj. Pamja paraprake ndjek redaktimet tuaja, {{ui:Ruaj G-code…}} shkruan G-code GRBL për modalitetin lazer, dhe në Chrome ose Edge paneli mund ta kornizojë punën dhe ta dërgojë me USB. Cilësimet ruhen në vizatim (DWG dhe DXF). Shihni [Dërgoni një vizatim te lazeri](topic:laser-cutting).
- **Simbolet e instalimeve të ndërtesës në shtesën Elektrike.** Prizat e të dhënave, telefonit dhe TV-së, çelësat me çelës dhe kohë, një termostat, shenja dalje, detektorë, pika thirrjeje dhe sirenë, një ventilator, ngrohës uji, sobë, pikë ngarkimi të automjeteve elektrike, matës energjie dhe nënpanel, dhe simbolet RCD dhe RCBO. Një qark mund të mbajë një RCD, tabela e panelit ka një kolonë RCD, dhe kontrollet emërtojnë qarqet e prizave pa RCD prej 30 mA ose më pak. Është një kujtesë planifikimi, jo një kontroll kodi.
- **Një shtesë P&ID.** P&ID vizaton diagrame procesi: simbole me pika lidhjeje, vija procesi dhe sinjalesh, etiketa, numra vijash, lista të vijave, pajisjeve, instrumenteve dhe valvulave (CSV ose një libër pune) dhe kontrolle. Vjen me CadCraft dhe është e fikur derisa ta ndezni në {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Shtojcat}}. Është një ndihmë vizatimi, jo një miratim inxhinierik, dhe fjalët e saj janë vetëm në anglisht për tani.

### Fillimi dhe ekrani

- **Vizatimi i parë i udhëzuar.** {{cmd:TOUR}} (ose {{ui:Shiko turin}} në kartën e fillimit) ju udhëzon në gjashtë hapa në vizatimin e vërtetë: një vijë, një rreth, një zhvendosje, një prerje, një fshirje dhe një përmasë. Nis vetë herën e parë që CadCraft hapet pa asgjë brenda. Shihni [Preferoni udhëzim?](topic:getting-started#prefer-to-be-guided)
- **Fletë shpejtimi dhe hartë komandash.** [Fleta e shpejtimit](topic:cheat-sheet) ka 40 komandat e përditshme në një faqe, edhe si PDF për ta printuar, dhe [harta e komandave](topic:command-map) liston komandat me emrat e tyre të shkurtër, nga A në Z.
- **Shiriti i veglave në çdo anë.** {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Pozicioni i shiritit të veglave}}: sipër (si më parë), poshtë, majtas ose djathtas, ose shkruani {{cmd:TOOLBARDOCK}}. Shihni [Pozicioni i shiritit të veglave](topic:settings#toolbar-position).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Rreshtat e shiritit të veglave}}: përshtat për t'u futur, 2 rreshta ose 1 rresht, për shiritin e CadCraft dhe stilet Drafting klasik dhe Ribbon. {{key:Shift+Ctrl+F1}} kalon ndër to, {{key:Ctrl+F1}} ndër ato që shfaqin butonat, dhe {{cmd:TOOLBARROWS}} dhe {{cmd:TOOLBAR}} i caktojnë ato. Kërkesa e fillimit ka një buton mbylljeje. Faleminderit GJoe2, që e dërgoi këtë si pull request. Shihni [Rreshtat e shiritit të veglave](topic:settings#toolbar-rows).

### Në CadCraft Studio

- **Historiku.** {{cmd:HISTORY}} (`HIST`), ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Historiku…}}: kopjet që Studio mban kur hapni dhe ruani një vizatim, dhe versionet në re të vizatimit kur e keni hapur nga reja. Hapni ose rikthehni një, ose krahasoni dy, me atë që u shtua, u hoq dhe u ndryshua e shfaqur me ngjyra. Shihni [Historiku](topic:history).
- **acad.lsp dhe acaddoc.lsp.** Zgjidhni një dosje mbështetjeje në {{cmd:APPLOAD}}: ato dy skedarë ngarkohen kur niset CadCraft (acaddoc.lsp përsëri për çdo skedë vizatimi të re), dhe `S::STARTUP` ekzekutohet pas tyre. Shihni [Ngarko aplikacionet](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialogu i Plotimit në dritaren e vet.** Një buton në shiritin e titullit të tij e zhvendos në një dritare që mund ta vendosni në një monitor tjetër. Shihni [Zhvendosni një dialog](common:arrange-panels#move-a-dialog).

### Për asistentët AI

- **Skedarë me emër, në dosje që zgjidhni.** Në CadCraft Studio një asistent mund të hapë, ruajë dhe plotojë skedarë me emër, dhe t'i japë një komande skedarin që kërkon (INSERT nga një skedar, eksporti i COUNT, SAVEAS, PLOT), por vetëm brenda dosjeve që shtoni nën {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Asistentët}} › {{ui:Dosjet që mund t'i përdorë}}. Shihni [Lejoje të përdorë skedarë në dosje që zgjidhni](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Më pak thirrje.** Një asistent mund të shkruajë një rresht të plotë komande me një herë, të mbajë një komandë të hapur midis thirrjeve të veta, të numërojë objektet sipas tipit dhe shtresës pa i listuar, dhe të vendosë një bllok me vlerat e atributeve në një hap.
- **Pa dritare.** Rreshti i komandës `cadcraft` shkruan plotime SVG dhe konverton, plotojë, kontrollon ose përshkruan shumë skedarë njëherësh. Paketa MCP nuk është botuar ende. Shihni [Punoni me skedarë pa hapur CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## E ndryshuar

- **Fleta e gishtave lëviz.** Lëvizni dy gishta në një fletë prekjeje dhe pamja 2D i ndjek; shtrëngoni dhe rrota e miut zmadhon. Shihni [Miu, fleta e prekjes dhe prekja](topic:mouse-trackpad-touch).
- **Objektet OLE ruhen.** Objektet e mbërthyera të një DXF shfaqen si figura ose si një kornizë me etiketë, dhe ruhen përsëri nga DXF 2000. Ato të një DWG mbahen dhe shkruhen përsëri kur ruani si DWG, por nuk shfaqen ende. Më parë, humbeshin kur ruheshin. Shihni [Objektet nga programe të tjera (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Njësitë e një vizatimi të ri** ndjekin njësinë që yjëzoni në {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}}.

## E rregulluar

- Paraqitjet që hapeshin bosh, ose humbnin një dritare pamjeje dhe shfaqnin të gjithë modelin në vend të saj, tani hapen me dritaret e tyre reale. Një paraqitje pa lidhje me përmbajtjen e vet ruhet dhe raporti i hapjes e thotë këtë.
- Skedarët DXF në faqet e vjetra kodesh shfaqnin tekst cirilik dhe korean të prishur. Tani lexohen mirë.
- Teksti paragrafësh nga programe të tjera humbte formatimin kur hapej dhe ruhej i thjeshtë.

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e anketimit të SHBA-së është njësi e vetme). Fikni njësitë që nuk i përdorni kurrë dhe ato largohen nga listat; yjëzoni një dhe puna e re fillon me të. Një skedar e mban gjithmonë njësinë e vet. Në CadCraft, yllu cakton njësitë e një vizatimi të ri kur është një njësi që vizatimi mund ta mbajë; kutia e vetë CadCraft {{ui:Njësitë}} nuk ndjek ende ndërrimet. Kur një vizatim ka njësi, një gjatësi që shkruani mund të mbajë shenjën e çdo njësie. Shihni [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që fshihen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakt}} nxjerr më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqeni për ta lidhur ose lëvizur lirë, hidheni mbi shiritin e një paneli tjetër për të ndarë një kornizë si skeda, ngrijeni për ta lëvizur në skaj, ose fshihni dhe rikthejeni nga skaji. Shihni [Rregulloni panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiqeni një dialog nga shiriti i titullit jashtë rrugës së vizatimit; kthehet aty ku e lamë. Klikoni dy herë shiritin e titullit për ta vendosur sërish në qendër. Shihni [Zhvendosni një dialog](common:arrange-panels#move-a-dialog).
- **Receta për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tuaj (rregulloni një vizatim, plotoni një grup, kontrolloni vizatime, bëni pyetje modelit, mblidhni një llogaritje sasish, provoni një variant pjese…), secila me mjetet që thërret dhe lejet që i duhen, dhe secila e riluajtur nga testet tona. Aplikacionet nuk përmbajnë AI. Shihni [Receta për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re në {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si draft që nuk është shqyrtuar ende nga një folës amtare. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** thotë pse dështoi kontrolli i përditësimit (nuk ka ende skedar për sistemin tuaj, nuk ka rrjet, nënshkrim i gabuar) në vend që thjesht "U krye", dhe nuk sjell më përsëri një kartë Çfarë ka të re që keni mbyllur, derisa të ketë një version më të ri.

## Ende jo në këtë version

- **0.7 nuk është me nënshkrim kodi.** Nënshkrimi dhe paketa e Microsoft Store u shtynë në 0.8, sepse validimi i certifikatës nuk ka ardhur ende. Kontrolloni SHA-256 pranë secilit skedar në getcadcraft.com/download. Në Windows, nëse SmartScreen e ndal instaluesin, zgjidhni {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, herën e parë, klikoni me të djathtën mbi CadCraft Studio dhe zgjidhni {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Këndi dhe lista e pjerrësisë në {{ui:Njësitë}} ruhen, por asnjë kuti nuk i lexon ende.
- Objektet OLE të një DWG mbahen por nuk shfaqen, dhe figurat metafile brenda objekteve OLE nuk vizatohen.
- Leximi i tabelave të stilit të plotimit (skedarë CTB) nga programe të tjera pret një skedar mostër.
- Teksti i vjetër aziatik i shkruar si kode `\M+` lexohet, por nuk është kontrolluar ende me një skedar nga një program tjetër.
- Nënvizimet PDF: figurat brenda faqes shfaqen në ekran por nuk plotohen; një plotim i asistentit i lë nënvizimet jashtë, dhe nuk është kontrolluar si i lexojnë programet e tjera prerjen dhe shkallën e ruajtur.
- Historiku: CadCraft nuk i dërgon ende ruajtjet e veta në re, kështu që versionet në re janë ato të ruajtura nga pajisje të tjera dhe nga uebi. Historiku është vetëm në CadCraft Studio.
- Nuk është kontrolluar ende nëse Studio e mban dosjen e mbështetjes acad.lsp pas një rinisjeje; nëse e pyet, zgjidhni dosjen sërish në APPLOAD.
- Paneli Lazer nuk është provuar ende në një lazer të vërtetë: provoni çdo cilësim në mbetje materiali. CadCraft Studio nuk ka Web Serial, kështu që në Studio paneli ruan vetëm G-code.
- Regjistrimi i skanimeve është provuar në skanime të përgjithshme, jo ende në një grup të një skaneri të vërtetë.
- Lëvizja me dy gishta është provuar me ngjarje të simuluara të fletës së prekjes, jo ende në një fletë të vërtetë prekjeje.
- {{cmd:PEDIT}} nuk ka opsionin Redakto kulm (përdorni kapëset ose Vetitë). Zhvendosja, prerja, zgjatimi, rrumbullakimi, thyerja dhe bashkimi nuk pranojnë ende spline; lartësia (Z) e një spline nuk ruhet.
- Teksti i ri paragrafësh nuk mund të marrë ende kode formatimi, dhe plotimet SVG shfaqin tekstin e formatuar në një ngjyrë.
- Entire drawing i WBLOCK shkruan vetëm modelin, jo fletët. Stili aktual i përmasave nuk ruhet në skedar: një vizatim hapet me Standard si aktual.
- Stilet e menusë me shirit nuk kanë ende lista shtresash, ngjyrash ose linetype: përdorni panelin {{ui:Shtresat}} dhe {{ui:Vetitë}}.
- Re pikash nuk ruhen ende në vizatim dhe nuk plotohen, dhe skedarët E57 hapen deri në 6 milion pika dhe 512 MB.
- Skedarët DWG të ruajtur nga CadCraft nuk janë kontrolluar ende në vetë AutoCAD.

Gjithçka tjetër është në [Ende nuk është ndërtuar](topic:not-built-yet).
