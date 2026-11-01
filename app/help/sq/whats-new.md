---
title: Çfarë është e re në 0.7
summary: Nënshtresat PDF dhe importi i PDF, vizatime të skanuara me gjurmim automatik, spline reale me SPLINE, SPLINEDIT dhe PEDIT, një menaxher stilesh përmasash, tekst që ruan formatimin e vet, WBLOCK dhe shkallët e tua, solide 3D nga programe të tjera, regjistrimi i skanimeve, një panel Lazer, eksport USD, Historik dhe printim në CadCraft Studio, një vizatim i parë i udhëzuar, shiriti i veglave në çdo anë ose në më pak rreshta, dhe më shumë për asistentët AI.
keywords: çfarë është e re, shënime versioni, regjistri i ndryshimeve, ndryshime, 0.7, version, veçori të reja, pdf, pdfattach, pdfimport, nënshtresë, skanim, scanattach, scantrace, gjurmim, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatim, wblock, scalelistedit, listë shkallësh, acis, solide 3d, registerscans, regjistro skanimet, icp, e57, las, lazer, grbl, g-code, usd, usdout, historik, versione, krahaso, printo, printer, png, svg, stil printimi, lloj vije, udhëzues, fleta referuese, harta e komandave, pozicioni i shiritit të veglave, rreshtat e shiritit të veglave, toolbardock, regen, regenall, trackpad, rrëshqitje, faqe kodimi, kirilik, koreane, kineze, japoneze, elektrike, rcd, p&id, pid, acad.lsp, acaddoc.lsp, dosje mbështetëse, asistentë, mcp, njësi, portugalisht
from: b9258ca6
---

Kjo është ajo që ndryshoi në CadCraft 0.7, krahasuar me 0.6. Shumica e tij u kërkua në Discord. Lista është grupuar sipas fushës, me më të rëndësishmet e para.

## E re

### PDF-të dhe vizatimet e skanuara

- **Vendos një faqe PDF nën vizatim.** {{cmd:PDFATTACH}} (`PDFATT`) vendos një faqe në madhësinë e saj reale ose në një shkallë që shkruan ti. Kap në vijat e saj, zbeh, bëje monokrome ({{cmd:PDFADJUST}}), pritu ({{cmd:PDFCLIP}}) dhe ndërro shtresat e vetë PDF-së ({{cmd:PDFLAYERS}}). Printohet si vija, mbushje dhe tekst, dhe një DWG ose DXF 2000 e mban si lidhje me skedarin. Hapja e një PDF me {{ui:Hap}} pyet nëse do ta bashkosh ose importosh. Shih [Nënshtresat PDF dhe importi i PDF](topic:pdf-underlay).
- **Kthe një faqe PDF në objekte vizatimi.** {{cmd:PDFIMPORT}} (`PDFIM`) bën vija, polivija, rrathë, harqe, mbushje të ngurta dhe tekst në shtresa me emrin e PDF-së, në madhësinë reale, në një shkallë të shkruar, ose të shkallëzuar nga dy pika dhe një distancë reale, në një hap të vetëm zhbërjeje. Shih [Importo një faqe](topic:pdf-underlay#import-a-page).
- **Vizatime të skanuara.** {{cmd:SCANATTACH}} sjell një PNG, JPEG ose TIFF (një faqe ose të gjitha), ose një faqe PDF që është figurë. Pastaj shkallëzoje nga dy pika ({{cmd:SCANSCALE}}), rreshtoje ({{cmd:SCANALIGN}}), drejtoje nga vijat e veta të gjata ({{cmd:SCANDESKEW}}), bëje të zi e të bardhë dhe hiq njollat ({{cmd:SCANCLEAN}}), prej dhe fshi pjesë të tij. Çdo hap është një hap zhbërjeje, dhe skedari origjinal ruhet. Shih [Vizatimet e skanuara dhe gjurmimi](topic:scanned-drawings).
- **Gjurmo një skanim në vija dhe harqe.** {{cmd:SCANTRACE}} vizaton vijat e skanimit si vija dhe harqe në një shtresë të re, SCAN-TRACE, me një tolerancë që cakton ti, dhe i lë tekstin dhe vijëzimin ashtu siç janë. Raporti thotë çfarë bëri dhe çfarë la, dhe nuk është pohim që rezultati është i saktë: kontrollo me fletën. {{cmd:RASTERSNAP}} lejon kapjet e objekteve të gjejnë skajet, qoshet dhe kryqëzimet e skanimit. Asgjë nuk dërgohet askund, dhe nuk përdoret asnjë model i trajnuar. Shih [Gjurmimi](topic:scanned-drawings#the-trace).

### Vizatimi dhe redaktimi

- **Spline reale.** {{cmd:SPLINE}} (`SPL`) vizaton një kurbë përmes pikave ose nga pikat e kontrollit (shkalla 1 deri 5), me tangjente skaji; {{cmd:SPLINEDIT}} (`SPE`) zhvendos, shton dhe fshin pika përshtatjeje ose kontrolli, cakton peshat, hap, mbyll, kthen anasjelltas, ose e kthen një spline në polivijë. Splinet nga skedarët DWG dhe DXF hapen si spline, dhe DWG dhe DXF 2000 i ruajnë si spline. Shih [Splinet dhe polivijat](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) mbyll dhe hap polivijat, bashkon vija dhe harqe me to, cakton një gjerësi të vetme, përshtat një kurbë përmes kulmeve ose një spline përgjatë tyre dhe e kthen me Decurve, kthen anasjelltas, dhe redakton disa njëkohësisht. Shih [Redakto një polivijë](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) shkruan një bllok, disa objekte ose të gjithë vizatimin në një DWG ose DXF të ri që mban vetëm shtresat, stilet dhe blloqet që përdor. Shih [Shkruaj një bllok ose objekte në një skedar të vet](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN dhe REGENALL.** {{cmd:REGEN}} (`RE`) ri-vizaton skedën ku je nga vizatimi, {{cmd:REGENALL}} (`REA`) çdo skedë, panel dhe vizatim të hapur. Shih [REGEN dhe REGENALL](topic:commands#regen-and-regenall).

### Teksti dhe përmasat

- **Teksti ruan formatimin e vet.** Teksti paragraf nga programe të tjera ruan ngjyrat për fjalë, të trasha dhe të pjerrëta, nënvizimin, thyesat e grumbulluara dhe lartësitë: vizatohen në ekran dhe në PDF, mbahen kur redakton fjalët, dhe ruhen përsëri. Shih [Formatimi brenda tekstit paragraf nga programe të tjera](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Një menaxher stilesh përmasash.** {{cmd:DIMSTYLE}} (`D`) krijon, ndryshon, krahason dhe aplikon stile të emërtuara përmasash; ndryshimi i një stili ndryshon çdo përmasë që e përdor. {{cmd:DIMEDIT}} (`DED`) rikthen tekstin, shkruan tekst të ri, e kthen ose i prin vijat e zgjatjes; {{cmd:DIMTEDIT}} zhvendos tekstin majtas, djathtas ose në qendër. Shih [Stilet e emërtuara të përmasave](topic:dimension-settings#named-dimension-styles).
- **Shkallët e tua.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) shton shkalla si 1:75 në listat e shkallëve të dritares së pamjes dhe të printimit; ruhen në vizatim (DWG dhe DXF 2000), dhe një vizatim nga një program tjetër sjell listën e vet. Shih [Shkallët](topic:units-papers-scales#scales).
- **Tekst në alfabete të tjera.** Skedarët DXF të ruajtur në faqet e kodeve kirilike, koreane, kineze, japoneze ose vietnameze tani hapen me tekstin e tyre, dhe teksti kinez, japonez dhe korean printohet në PDF (printimi shkarkon një shkronjë më të madhe herën e parë që ia nevojitet). Shih [Shkronja](topic:text#font).

### Printimi

- **Më shumë në tabelat e stilit të printimit.** Për çdo ngjyrë, një tabelë mund të caktojë tani edhe një lloj vije, fundin dhe bashkimin e vijës, dhe një stil mbushjeje që printon mbushjet e ngurta si vija vijëzimi; tabela ka listën e vet të gjerësive të vijës dhe një shkallë të llojit të vijës. Shih [Tabelat e stilit të printimit](topic:plot-pdf#plot-style-tables).
- **Printo, dhe skedarë PNG dhe SVG.** Dialogu Plot ka {{ui:Printo…}}, {{ui:Shkarko PNG}} (300 dpi) dhe {{ui:Shkarko SVG}}. Në CadCraft Studio liston printuesit e kompjuterit, letrën e tyre dhe numrin e kopjeve. Shih [Printimi](topic:plot-pdf#print) dhe [Skedarët e figurave dhe SVG](topic:plot-pdf#picture-and-svg-files).

### 3D dhe retë e pikave

- **Solide 3D nga programe të tjera.** Solidet, rajonet dhe trupat në hapësirën e modelit të një vizatimi shfaqen në skedën 3D, vetëm për lexim, dhe ruajtja si DWG i shkruan përsëri të pandryshuar. Sipërfaqet mbi sipërfaqe që CadCraft s'i vizaton ende listohen, nuk merren me supozim. Shih [Solidet nga programe të tjera](topic:3d-solids#solids-from-other-programs).
- **Regjistro disa skanime.** {{cmd:REGISTERSCANS}} (`REGSCAN`) vendos skanime të marra nga pozicione të ndryshme në një kornizë të vetme, me çifte pikash ose koordinata të shkruara të synimit, i rafinon me ICP, e ruan regjistrimin si një skedar projekti të vogël, dhe shkruan retë e regjistruara si një skedar të vetëm LAS ose E57. Shih [Regjistro disa skanime në një](topic:register-scans).
- **Eksport USD.** {{cmd:USDOUT}}, ose {{cmd:EXPORT3D}} › {{ui:USD}}, shkruan solidet e skedës 3D si `.usda`, `.usdc` ose `.usdz`. Shih [Eksporto modelin 3D si USD](topic:usd).
- **Llogaritje në skedën 3D.** Aty ku veglat e skedës 3D kërkojnë një distancë, mund të shkruash një llogaritje, si në rreshtin e komandave. Shih [Aritmetika në një vlerë të shkruar](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Bërja e gjërave

- **Dërgo një vizatim te një lazer.** {{cmd:LASER}}, ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Lazer…}}, hap një panel mbi vizatim: çdo shtresë pret, gërvishtet, gdhend vija, mbush forma, gdhend një figurë, ose nuk dërgohet, me fuqinë, shpejtësinë dhe kalimet e saj. Pamja paraprake ndjek redaktimet e tua, {{ui:Ruaj G-code…}} shkruan G-code të modit lazer GRBL, dhe në Chrome ose Edge paneli mund ta kornizojë punën dhe ta dërgojë me USB. Cilësimet ruhen në vizatim (DWG dhe DXF). Shih [Dërgo një vizatim te një lazer](topic:laser-cutting).
- **Simbole instalimesh ndërtimi në shtojcën Elektrike.** Prizat për të dhëna, telefon dhe TV, çelësat me kohë dhe me çelës, një termostat, shenja dalje, detektorë, pikë thirrjeje dhe sirenë, një ventilator, ngrohës uji, sobë, pikë ngarkimi për EV, matës energjie dhe nën-tabelë, dhe simbole RCD dhe RCBO. Një qark mund të mbajë një RCD, tabela e paneleve ka një kolonë RCD, dhe kontrollet emërtojnë qarqet e prizave pa RCD prej 30 mA ose më pak. Është një kujtesë planifikimi, jo një kontroll kodi.
- **Një shtojcë P&ID.** P&ID vizaton diagrama procesi: simbole me pika lidhjeje, vija procesi dhe sinjali, etiketa, numra vijash, lista linjash, pajisjesh, instrumentesh dhe valvulash (CSV ose një fletëllogaritëse) dhe kontrolle. Vjen me CadCraft dhe është e fikur derisa ta ndezësh te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Shtojcat}}. Është një ndihmë hartimi, jo një miratim inxhinierik, dhe fjalët e saj janë vetëm në anglisht për tani.

### Nisja dhe ekrani

- **Një vizatim i parë i udhëzuar.** {{cmd:TOUR}} (ose {{ui:Shiko turin}} te kartela e fillimit) të çon përmes gjashtë hapave në vizatimin e vërtetë: një vijë, një rreth, një zhvendosje, një prerje, një fshirje dhe një përmasë. Nis vetvetiu herën e parë kur CadCraft hapet pa asgjë brenda. Shih [Preferon të udhëhiqesh?](topic:getting-started#prefer-to-be-guided)
- **Një fletë referimi dhe një hartë komandash.** [Fleta referuese](topic:cheat-sheet) ka 40 komandat e përditshme në një faqe, edhe si PDF për printim, dhe [harta e komandave](topic:command-map) liston komandat me emrat e tyre të shkurtër, nga A në Z.
- **Shiriti i veglave në çdo anë.** {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Pozicioni i shiritit të veglave}}: lart (si më parë), poshtë, majtas ose djathtas, ose shkruaj {{cmd:TOOLBARDOCK}}. Shih [Pozicioni i shiritit të veglave](topic:settings#toolbar-position).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Rreshtat e shiritit të veglave}}: mbështillu për t'u futur, 2 rreshta ose 1 rresht, për shiritin e veglave CadCraft dhe për stilet Drafting classic dhe Ribbon. {{key:Shift+Ctrl+F1}} kalon mes tyre, {{key:Ctrl+F1}} mes asaj që shfaqin butonat, dhe {{cmd:TOOLBARROWS}} dhe {{cmd:TOOLBAR}} i cakton. Shiriti i fillimit ka një buton mbylljeje. Faleminderit GJoe2-it, që e dërgoi këtë si pull request. Shih [Rreshtat e shiritit të veglave](topic:settings#toolbar-rows).

### Në CadCraft Studio

- **Historiku.** {{cmd:HISTORY}} (`HIST`), ose {{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Historiku…}}: kopjet që Studio mban kur hap dhe ruan një vizatim, dhe versionet në re të vizatimit kur e hape nga re. Hap ose rikthe një, ose krahaso dy, me çfarë u shtua, u hoq dhe u ndryshua e treguar me ngjyra. Shih [Historiku](topic:history).
- **acad.lsp dhe acaddoc.lsp.** Zgjidh një dosje mbështetëse te {{cmd:APPLOAD}}: ato dy skedarë ngarkohen kur nis CadCraft (acaddoc.lsp sërish për çdo skedë të re vizatimi), dhe `S::STARTUP` ekzekutohet pas tyre. Shih [Ngarko aplikacionet](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialogu Plot në dritaren e vet.** Një buton në shiritin e titullit të tij e zhvendos në një dritare që mund ta vendosësh në një monitor tjetër. Shih [Zhvendos një dialog](common:arrange-panels#move-a-dialog).

### Për asistentët AI

- **Skedarë sipas emrit, në dosje që zgjedh ti.** Në CadCraft Studio një asistent mund të hapë, ruajë dhe printojë skedarë sipas emrit, dhe t'i japë një komande skedarin që kërkon (INSERT nga një skedar, eksporti i COUNT, SAVEAS, PLOT), por vetëm brenda dosjeve që shton nën {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Asistentët}} › {{ui:Dosjet që mund t'i përdorë}}. Shih [Lëre të përdorë skedarë në dosje që zgjedh ti](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Më pak thirrje.** Një asistent mund të shkruajë një rresht të plotë komandash me një herë, të mbajë një komandë të hapur mes thirrjeve të veta, të numërojë objektet sipas llojit dhe shtresës pa i listuar, dhe të vendosë një bllok me vlerat e atributeve të tij në një hap.
- **Pa dritare.** Rreshti i komandave `cadcraft` shkruan printime SVG dhe konverton, printon, kontrollon ose përshkruan shumë skedarë njëkohësisht. Paketa MCP nuk është publikuar ende. Shih [Puno me skedarë pa hapur CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## E ndryshuar

- **Një trackpad lëviz pamjen.** Lëviz dy gishta mbi trackpad dhe pamja 2D i ndjek; mbledhja dhe rrota e miut zmadhojnë. Shih [Miu, trackpad-i dhe prekja](topic:mouse-trackpad-touch).
- **Objektet OLE ruhen.** Objektet e mbështjella të një DXF shfaqen si figurë ose kornizë me etiketë, dhe ruhen përsëri nga DXF 2000. Ato të një DWG ruhen dhe shkruhen përsëri kur ruan si DWG, por nuk shfaqen ende. Më parë humbnin gjatë ruajtjes. Shih [Objektet nga programe të tjera (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Njësitë e një vizatimi të ri** ndjekin njësinë që shënon me yll te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}}.

## E rregulluar

- Paraqitjet që hapeshin bosh, ose humbnin një dritare pamjeje dhe shfaqnin të gjithë modelin në vend të saj, tani hapen me dritaret e tyre reale. Një paraqitje pa lidhje me përmbajtjen e vet mbahet, dhe raporti i hapjes e thotë këtë.
- Skedarët DXF në faqet e vjetra të kodeve shfaqnin tekst kirilik dhe koreans të prishur. Tani lexohen mirë.
- Teksti paragraf nga programe të tjera humbte formatimin kur hapej, dhe ruhej si i thjeshtë.

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e anketës së SHBA është njësi e vetme). Fik njësitë që s'i përdor kurrë dhe ato largohen nga listat; shëno një dhe punët e reja fillojnë me të. Një skedar mban gjithmonë njësinë e vet. Në CadCraft, shënimi me yll cakton njësitë e një vizatimi të ri kur është njësi që një vizatim mund ta mbajë; kutia e vetë CadCraft {{ui:Njësitë}} ende nuk e ndjek këtë. Kur një vizatim ka njësi, një gjatësi që shkruan mund të mbajë shenjën e çdo njësie. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që fshihen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} vendos më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit titulli të hollë: tërhiqe për ta dokuar ose lëvizur lirshëm, lëshoje mbi shiritin e një paneli tjetër për të ndarë një kornizë si skeda, fikse për ta rrëshqitur në skaj, ose fshihe dhe kthehu nga skaji. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiq një dialog nga shiriti i titullit për ta larguar nga vizatimi; kthehet aty ku e le. Kliko dy herë shiritin e titullit për ta vendosur sërish në qendër. Shih [Zhvendos një dialog](common:arrange-panels#move-a-dialog).
- **Recetat për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tënd (rregullo një vizatim, printo një grup, kontrollo vizatime, bëj pyetje modelit, llogarit një preventiv, provo një variant pjese…), secila me veglat që thërret dhe lejet që kërkon, dhe secila e ripërsëritur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Recetat për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si draft-e që nuk i ka shqyrtuar ende një folës amtar. Temat e ndihmës janë në anglisht.
- **CadCraft Studio** thotë pse dështoi kontrolli i përditësimit (s'ka ende skedar për sistemin tënd, s'ka rrjet, nënshkrim i gabuar) në vend që të thotë vetëm "Done", dhe nuk kthen më kartelën "Çfarë është e re" që ke mbyllur derisa të ketë një version më të ri.

## Jo ende në këtë version

- **0.7 nuk është me nënshkrim kodi.** Nënshkrimi dhe paketa e Microsoft Store kaluan në 0.8, sepse validimi i certifikatës nuk ka ardhur ende. Kontrollo SHA-256 pranë çdo skedari te getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në Mac, herën e parë, kliko me të djathtën CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Lista e këndit dhe e pjerrësisë te {{ui:Njësitë}} ruhet, por asnjë kuti nuk e lexon ende.
- OLE objektet e një DWG mbahen, por nuk shfaqen, dhe figurat metafile brenda objekteve OLE nuk vizatohen.
- Leximi i tabelave të stilit të printimit (skedarë CTB) nga programe të tjera pret një skedar shembull.
- Teksti aziatik më i vjetër i shkruar si kode `\M+` lexohet, por nuk është kontrolluar ende me një skedar nga një program tjetër.
- Nënshtresat PDF: figurat brenda faqes shfaqen në ekran por nuk printohen, një printim i asistentit i lë jashtë nënshtresat, dhe nuk është kontrolluar ende si e lexojnë programet e tjera prerjen dhe shkallën e ruajtur.
- Historiku: CadCraft nuk i dërgon ende ruajtjet e veta në re, kështu që versionet në re janë ato të ruajtura nga pajisje të tjera dhe nga uebi. Historiku është vetëm në CadCraft Studio.
- Nuk është kontrolluar ende nëse Studio e mban dosjen mbështetëse acad.lsp pas një rinisjeje; nëse pyet, zgjidh dosjen sërish në APPLOAD.
- Paneli Laser nuk është provuar ende në një lazer të vërtetë: testo çdo cilësim në mbetje materiali. CadCraft Studio nuk ka Web Serial, kështu që në Studio paneli ruan vetëm G-code.
- Regjistrimi i skanimeve është testuar me skanime të trilluara, jo ende me një grup nga një skaner i vërtetë.
- Lëvizja me dy gishta është provuar me ngjarje trackpad të simuluara, jo ende në një trackpad të vërtetë.
- {{cmd:PEDIT}} nuk ka opsionin Edit vertex (përdor grips ose Properties). Offset, trim, extend, fillet, break dhe join nuk pranojnë ende spline; lartësia (Z) e një spline nuk ruhet.
- Teksti i ri paragraf nuk mund të marrë ende kode formatimi, dhe daljet SVG tregojnë tekstin e formatuar në një ngjyrë.
- Opsioni "Entire drawing" i WBLOCK shkruan vetëm modelin, jo fletët. Stili aktual i përmasave nuk ruhet në skedar: një vizatim hapet me Standard aktual.
- Stilet me meny ribbon nuk kanë ende lista shtresash, ngjyrash ose llojesh vijash: përdor panelin {{ui:Shtresat}} dhe {{ui:Vetitë}}.
- Retë e pikave ende nuk ruhen në vizatim dhe nuk printohen, dhe skedarët E57 hapen deri në 6 milionë pika dhe 512 MB.
- Skedarët DWG të ruajtur nga CadCraft nuk janë kontrolluar ende në vetë AutoCAD.

Çdo gjë tjetër është te [Jo ende e ndërtuar](topic:not-built-yet).
