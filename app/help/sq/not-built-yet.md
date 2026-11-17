---
title: Ende nuk është ndërtuar
summary: Çfarë nuk bën ende ky version i aplikacionit të hartimit CadCraft, dhe çfarë të bësh sot në vend të tij.
keywords: mungesë, kufizime, ctb, stb, stili i printimit, vetitë, ucs, anotative, bllok dinamik, spline, plani i zhvillimit, nuk mbështetet, ruajtja dwg, vijëzim, shtrirje, grup, bashkim, matchprop, ndarje, gjatësim, lloji i vijës, trashësia e vijës, xref, re, 3d, solide, booleane, multiudhëheqës, wipeout
from: 87e56521
---

CadCraft është në zhvillim. Kjo faqe liston atë që versioni aktual nuk e bën ende, që të mos e kërkoni kot. Çdo artikull thotë çfarë të bëni sot në vend të tij.

## Skedarët dhe ruajtja

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| Një DWG i CadCraft-it i verifikuar në vetë AutoCAD | Çdo version i ruajtur lexohet përsëri nga tre programe të tjera me lexuesit e tyre DWG dhe nga CadCraft. Shih [Çfarë mban dhe çfarë ndryshon një DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Ruajtja e DXF më të re se 2000 | Ruaje si DXF 2000, ose si DWG deri në AutoCAD 2018. |
| Ruajtja mbi skedarin e hapur në shfletues | Çdo ruajtje shkarkon një kopje të re; zëvendëso vetë skedarin e vjetër nëse dëshiron. Në CadCraft Studio, {{key:Mod+S}} shkruan përsëri te skedari që ke hapur. |
| Ruajtja në re dhe sinkronizimi midis kompjuterëve | CadCraft nuk i dërgon ende ruajtjet e veta në re: mbaji skedarët DWG dhe DXF në dosjet e tua. Në CadCraft Studio, [Historiku](topic:history) liston versionet në re të një vizatimi të ruajtur diku tjetër, dhe kopjet e ruajtjeve të tua në këtë kompjuter. |
| Mbivendosje, dhe redaktimi i një vizatimi të lidhur në vend | Bashkange vizatimin si lidhje dhe ringarkoje pasi të ndryshosh vizatimin tjetër. Një lidhje mbetet lidhje kur ruan si DWG, dhe {{cmd:XCLIP}} e pret. |
| Imazhe në DXF; wipeout-e që fshehin ç'ka nën to | DXF e mban imazhin si kornizën e tij me emrin e skedarit; DWG e mban si imazh: shih [Imazhet në një vizatim](topic:pictures). Një wipeout shfaqet si korniza e tij. |
| Redaktimi i multiudhëheqësve me vija udhëheqëse të lakuara, me vija udhëheqëse në të dy anët e përmbajtjes, ose me një bllok të kthyer ose të shkallëzuar jo njëtrajtësisht | Ato vizatohen si i vizatoi programi tjetër dhe lëvizin si një e vetme. Multiudhëheqësit me vija udhëheqëse të drejta drejt një pike mbërritjeje, dhe me tekst ose bllok si përmbajtje, hyjnë të redaktueshëm ({{cmd:MLEADEREDIT}}). |
| Në tabela nga programe të tjera: një qelizë që mban një bllok, formatim teksti brenda një qelize, kufij dhe ngjyra për qelizë të tabelës së një DXF, një tabelë e ndarë në kolona | Tabela hapet si tabelë e redaktueshme ({{cmd:TABLEDIT}}) dhe shfaqet si e vizatoi programi tjetër derisa ta redaktosh; pastaj CadCraft e rivizaton nga qelizat e saj: tekst i thjeshtë, formula si `=G3*H3` dhe `=Sum(I3:I9)`, drejtimi dhe lartësia e tekstit. Një qelizë me bllok mbetet e zbrazët atëherë. Një tabelë DWG e pa prekur ruhet përsëri me të dhënat e qelizave me të cilat erdhi. |
| Një objekt tabele i vërtetë në një DXF të ruajtur | Një DWG e mban tabelën si tabelë që programet e tjera mund ta redaktojnë. Një DXF e mban si bllokun që e vizaton, me regjistrimin e vet të CadCraft: CadCraft e hap përsëri si tabelë; programet e tjera shohin një bllok. Një tabelë e pasqyruar ose e shkallëzuar jo njëtrajtësisht ruhet kështu edhe në një DWG. |
| Kopjo dhe ngjit me programe të tjera | Kujtesa e kopjimit të CadCraft funksionon midis vizatimeve dhe skedave të CadCraft në të njëjtin shfletues, jo me programe të tjera. Ruaje si DWG ose DXF dhe hape atje. Shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste). |

## Vizatimi dhe redaktimi

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| Modele vijëzimi që CadCraft nuk i ka, dhe mbushje gradiente saktësisht si i pikturojnë programet e tjera | Vijëzimet e hapura me modele që CadCraft nuk i ka shfaqen si një ton. Një mbushje gradiente ({{cmd:GRADIENT}}) pikturohet në mënyrën e vet të CadCraft për çdo lloj: si ato të programeve të tjera për nga lloji, jo pikë për pikë. DWG 2004 e më vonë e mbajnë si vijëzim gradient të vërtetë; në një skedar DXF 2000 ose DWG 2000 vetëm CadCraft e lexon përsëri, dhe programet e tjera shohin një mbushje të ngurtë. Modelet ngarkohen nga një skedar `.pat`, dhe një vijëzim mund të lidhet me kufirin e tij dhe pastaj e ndjek: shih [Vijëzimi dhe zonat e mbushura](topic:hatch). |
| Lloje vijash me forma ose tekst në to, dhe trashësi vijash në një DXF R12 të ruajtur | Format dhe teksti në llojin e vijës të një skedari lihen jashtë vijëzave të tij; ruaje si DWG për të mbajtur trashësitë e vijave. |
| Vijëzime me modele në një DXF të ruajtur | R12 nuk ka vijëzim: ato ruhen si konturat e tyre. Ruaje si DWG për të mbajtur modelin. |
| Grupe që programe të tjera i kanë bërë ose mund t'i redaktojnë; rreshta dhe nivele në grupe shtegu dhe polare; një grup që ndjek kurbën e shtegut të vet | Një grup i bërë me Shoqërues (`AS`) ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; ndryshohet me {{cmd:ARRAYEDIT}}) ruhet si referencë bllokut me numrat e vet të CadCraft: programet e tjera e shfaqin, e zhvendosin, e printojnë dhe e shpërbëjnë, por nuk mund t'i ndryshojnë numrat e tij; një grup i bërë në një program tjetër hapet këtu si thjesht referencë bllok. Një grup shtegu mban një kopje të shtegut të vet: ndryshimi i kurbës më pas nuk i zhvendos elementët. |
| Pamjet e prera të fletëve drejt dhe nga programe të tjera | Një pamje e prerë me {{cmd:VPCLIP}} ose e bërë me {{cmd:MVIEW}} Shumëkëndësh ose Objekt ruhet me konturën e vet të CadCraft: programet e tjera e hapin si drejtkëndëshin rreth saj, dhe një pamje e prerë në një program tjetër hapet këtu si drejtkëndëshi i saj. DXF R12 e mban vetëm drejtkëndëshin. |
| {{cmd:STRETCH}} me poligon kryqëzues | Përdor një ose më shumë dritare kryqëzuese. |
| {{cmd:PEDIT}} Redakto kulmin (një kulm në çdo herë te rreshti i komandës) | Dorezat, dhe shfletuesi i kulmeve te Vetitë (çdo kulm, gjerësitë dhe fryrja e tij). Pjesa tjetër e PEDIT është ndërtuar: shih [Splines dhe polivijat](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} dhe {{cmd:JOIN}} mbi elipse dhe spline | {{cmd:EXPLODE}} një spline (ose {{cmd:PEDIT}} ta) për të marrë një polivijë që këto komanda e pranojnë. |
| Rrumbullakim dhe prerje këndi midis një segmenti harku të një polivije dhe segmentit pranë tij; rrumbullakim që bashkon një vijë në një polivijë | {{cmd:EXPLODE}} polivijën, pastaj rrumbullakos pjesët. Harku i rrumbullakimit shtohet si objekt i vetë. |
| Prerja dhe zgjatja: opsioni Projekt (3D) dhe zgjatja e skajit harkor të një polivije | Pritja në planin e vizatimit; për skajin harkor, shpërbëje polivijën ose vizato harkun përsëri. |
| Objekte OLE: futja, ekzekutimi ose redaktimi i tyre; shfaqja e atyre në një DWG ku skedari i vendos; imazhe metafile | Shih [Imazhet](topic:pictures#objects-from-other-programs-ole). Objektet e një DXF shfaqen si bitmap-i i tyre ose si kornizë me etiketë; ato të një DWG mbahen, nuk vizatohen në vend (OLELIST i liston dhe vendos një kopje të imazhit aty ku thua ti). |
| Shkrimi i kodeve të formatimit (të trashë, thyesa të grumbulluara, ngjyra sipas fjale) në tekst paragrafi; shkronja të tjera nga shkronja e vetme e stilit Helvetica; kolona | Formatimi që erdhi në një skedar mbahet, vizatohet dhe ruhet (shih Tekst); teksti i ri i paragrafit ka një lartësi dhe një ngjyrë. |
| Teksti i paragrafit i redaktuar në rrotullimin e tij | Redaktuesi hapet i niveluar; teksti mban rrotullimin e vet. |
| Multiudhëheqës të ruajtur si objekte multiudhëheqës në një DXF | Një DWG i mban si multiudhëheqës, me çdo vijë udhëheqëse dhe një bllok si përmbajtje; një DXF mban ato që vizatojnë (vijat, kokat e shigjetave, dhe tekstin ose blloku). |
| Në tabela ({{cmd:TABLE}}): tekst që mbështillet brenda një qelize, tabela që ndahen në pjesë, stili tekstual i vetë tabelës dhe ngjyra për lloj rreshti në një dialog, një lidhje të dhënash me një skedar fletëllogaritjeje (`.xlsx`) ose me një që e lexon vetë skedarin | Teksti i një qelize thyhet vetëm aty ku e thyen ti ({{key:Alt+Enter}}); zgjero kolonën. {{cmd:DATALINK}} lexon një skedar `.csv`, dhe {{cmd:DATALINKUPDATE}} të kërkon të zgjedhësh përsëri skedarin. {{cmd:DATAEXTRACTION}} dhe {{cmd:COUNTTABLE}} bëjnë një tabelë që nuk ndjek vizatimin vetë: ekzekutoje përsëri (një numërim i gjallë: {{cmd:BOMTABLE}}). |
| Përcaktimet e atributeve të mbajtura veçmas në një skedar të ruajtur (jashtë një bllok), atribute me shumë rreshta | Vendosi përcaktimet e atributeve në një bllok para ruajtjes: veçmas ato ruhen si tekst që shfaq etiketën. |
| Gjendjet e shtresave (ruajtja dhe rikthimi i shtresave që janë të ndezura) | Përdor {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, ose ndiz dhe fik shtresat me dorë. |
| Përzgjedhja me poligon dritareje dhe poligon kryqëzues, dhe filtrat e ruajtur të përzgjedhjes | Gardh (`F`), Dritare, Kryqëzim, Hiq (`R`), {{cmd:QSELECT}} për një rregull. |


## Paneli i Vetive

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| Vizatimi i zgjedhjeve Fit, dhe pozicioni horizontal i tekstit dhe teksti nën vijën e përmasave të tjera nga ato lineare dhe të drejtuara | Ato mbahen te objekti, shfaqen te Vetitë dhe ruhen; CadCraft e vendos tekstin sipas rregullit të vet. |
| Materialet që shohin programet e tjera | Një skedar i ruajtur mban emrin e materialit për CadCraft; programet e tjera shfaqin materialin e shtresës. |
| Transparenca në skedarë DWG 2000 dhe DXF | Programet e tjera i shfaqin ato objekte të ngurta; CadCraft e mban transparencën. Ruaje si DWG 2004 ose më vonë që të jetë për të gjithë. |
| Një lidhje vijëzimi e bërë në një program tjetër | CadCraft e ruan lidhjen e vet në skedarët DWG dhe DXF 2000; lidhjet e bëra në programe të tjera nuk lexohen. Përdor `HATCHEDIT` dhe Lidhje: shih [Vijëzimi dhe zonat e mbushura](topic:hatch). |
| Koordinatat te Vetitë në UCS | Vetitë shfaq koordinata botërore; shiriti i gjendjes dhe {{cmd:ID}} shfaqin ato të UCS. Shih [Rrotullo pamjen dhe përdor koordinatat e tua](topic:ucs-and-turned-view). |
| Një pozicion i veçantë për një objekt anotativ në çdo shkallë të vet; leximi i regjistrimeve për shkallë që mbajnë programet e tjera | Një tekst ose përmasë anotative mban një listë shkallësh ({{cmd:OBJECTSCALE}}) dhe çdo pamje e shfaq atë në madhësinë për shkallën e vet, në të njëjtin vend. Lista ruhet si të dhëna të veta të CadCraft: një program tjetër e sheh objektin në shkallën për të cilën është dimensionuar, dhe një listë e bërë në një program tjetër nuk lexohet. Shih [Njësitë, fletët dhe shkallët](topic:units-papers-scales#annotate-by-scale). |
| Ndryshimi i distancave, këndeve ose kthimeve të një blloku dinamik; blloqet dinamike që mbeten dinamike kur ruan në një version tjetër DWG ose si DXF | Ndërro gjendjen e dukshmërisë te Vetitë › {{ui:Të personalizuara}}; vlerat e tjera shfaqen aty vetëm për lexim. Mbetet dinamik kur e ruan si DWG në versionin me të cilin erdhi vizatimi. Shih [Blloqet dinamike](topic:dynamic-blocks). |
| Toleranca e përshtatjes së spline-it, shkalla e spline-it 6 e lart, spline-et 3D | Pikat e përshtatjes dhe të kontrollit, shkalla 1 deri 5 dhe peshat janë të ndërtuara: shih [Splines dhe polivijat](topic:splines). Lartësia (Z) e një spline nuk mbahet. |

## Ndihmat e saktësisë

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| Gjurmimi nga pikat ndërmjet komandave, dhe dialogu i cilësimeve të gjurmimit (këndet polare relative, këndet shtesë) | {{cmd:POLARANG}} cakton hapin; merr përsëri pikat në komandën tjetër. |
| Ngjitje në rrjet | Shkruaj koordinatat; rrjeti është vetëm një udhëzues vizual. |
| Opsionet Hark dhe Gjatësi gjatë zgjedhjes së kulmeve të një zone, dhe MEASUREGEOM Vëllim | Vizato konturën me {{cmd:PLINE}} (harqet përfshirë), pastaj {{cmd:AREA}} `O`. |
| Hyrja dinamike për dorezat, dhe lista e opsioneve të saj (shigjeta poshtë) | Rreshti i komandës shfaq opsionet. |
| Këndet në gradë-minuta-sekonda, gradë (grads) ose azimutet e topografit | Shkruaj gradët dhjetorë: `30.5` për 30°30'. |
| Një dialog menaxhimi pamjesh; pamjet e emëruara të një fletë që kthehen në atë fletë | {{cmd:NAMEDVIEW}} liston dhe rikthen pamjet. Një skedar i ruajtur i mban, por pamjet e një fletë kthehen te fleta e parë. |

## Fletët, përmasat dhe printimi

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| Fusha për shkallën e një pamjeje, një objekt të emëruar si një shtresë ose bllok, një lidhje, dhe fusha të grupit të fletëve përtej numrit dhe emrit të fletës; fusha të shkruara si objekte fushe që programet e tjera i përditësojnë | {{cmd:FIELD}} ka datën, emrin e skedarit, numrin, emrin dhe numërimin e fletës, vetitë e vizatimit ({{cmd:DWGPROPS}}), sipërfaqen, gjatësinë dhe vetitë e tjera të një objekti, dhe formula, në tekst, atribute dhe qeliza tabele. Një program tjetër e shfaq një fushë të CadCraft si tekstin që lexoi së fundi; CadCraft lexon fushat e datës, emrit të skedarit, vetisë, fletës dhe shprehjes së një programi tjetër, dhe i lë llojet e tjera si tekst. Shkalla e një pamjeje shkruhet me dorë. |
| Ruajtja e stilit aktual të përmasës; teksti i përmasës i zhvendosur në një vend të lirë | Një vizatim hapet me Standard aktual. Teksti qëndron mbi vijën e përmasës (DIMTEDIT Left / Right / Center). Shih [Vendos madhësitë e përmasave](topic:dimension-settings). |
| Përmasa këndore dyrreshtëshe të modifikueshme nga skedarë të hapur që CadCraft nuk i zgjidh dot | Shfaqen ashtu si janë vizatuar në skedar. Përmasat ordinate, gjatësia e harkut dhe rrezja e thyer hapen si përmasa që mund t'i redaktosh. |
| Kontrolli i lexuesit CTB kundrejt një skedari nga një program tjetër (është ndërtuar, sipas përshkrimit të publikuar), stilet e emëruara të printimit (STB), ditherimi, numrat e penave, shkallët gri nga një CTB dhe rregullimi adaptiv i llojit të vijës në një stil printimi | Bëj tabelën te {{ui:Tabelat e stilit të printimit}} (ngjyra, gri, bojë, trashësia, lloji i vijës, fundi dhe bashkimi i vijës, dhe stili i mbushjes për çdo ngjyrë): shih [Tabelat e stilit të printimit](topic:plot-pdf#plot-style-tables). |
| Konfigurimet e faqes | Zgjidh letrën, shkallën dhe stilin e printimit te dialogu {{ui:Nxirr në PDF}}; një fletë mban stilin e vet të printimit. |
| Hindi dhe shkrimet e tjera që kërkojnë formim kompleks në PDF, dhe ideogramet e rralla (printimi i shkrimeve evropiane, cirilik, grek, hebraik, arabisht, persisht, urdu, thai, kinez, japonez dhe koreanisht) | Printohen si "?". |
| Teksti me shkrim arab dhe kinez, japonez ose koreanisht në të njëjtin PDF të printuar | Një printim mban një shkronjë: një nga dy shkrimet printohet si "?". |
| Shënime të qarta drejtimi në tekst (futje, mbivendosje, izolime) | Injorohen: çdo rresht renditet vetëm sipas shkronjave të veta. |
| Imazhe brenda një faqeje PDF të bashkangjitur, në një printim | Vijat, mbushjet dhe teksti i faqes printohen. Një faqe që është vetëm imazh futet me {{cmd:SCANATTACH}}, dhe imazhet printohen. Shih [Nënshtresat PDF](topic:pdf-underlay#plot-and-save). |
| Dërgimi i një pune te një lazer nga CadCraft Studio (Studio nuk ka Web Serial) | Ruaje G-code dhe dërgoje me programin e vetë lazerit tënd, ose dërgoje nga Chrome ose Edge. Shih [Dërgo një vizatim te një lazer](topic:laser-cutting#send-from-the-browser). |

## Kufizimet dhe parametrat

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| Kufizime në fletë, në blloqe, në elipse, spline-e ose tekst | Kufizo te skeda {{ui:Modeli}}, mbi vija, polivija, rrathë, harqe dhe pika. |
| Të lëmuara (G2), dhe kufizimi direkt i fryrjes së harkut të një polivije | Tangjente dhe të barabarta; një segment harku ndjek dy skajet e tij. |
| Kufizime dimensionale referuese (të drejtuara), dhe `3Point` te {{cmd:DCANGULAR}} | Një përmasë e thjeshtë (DIMLINEAR …) shfaq një vlerë pa e drejtuar atë. |
| Kufizime dimensionale me madhësi fikse në letër, dhe printimi i tyre | Shfaqen vetëm në ekran; shto përmasa të thjeshta për printimin. |
| Kufizime të mbajtura nëpërmjet EXPLODE, BREAK, JOIN dhe komandave të tjera që krijojnë objekte të reja, dhe mbi polivijat e prera | Kufizoji përsëri (AUTOCONSTRAIN ndihmon). {{cmd:MIRROR}} dhe {{cmd:TRIM}} të vijave, harqeve dhe rrathëve i mbajnë ato. |
| Tabela projektimi (konfigurime) në CadCraft | Ndrysho parametrat në panel. |
| Një test i plotë kthimi me SolidWorks | Kontrollo skicën që ndërton makro para se të mbështetesh në të. |

## 3D

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| Rrumbullakime, prerje këndesh, guaska dhe loft-e; ekstrudime përgjatë një shtegu që ngjitet (shtigje 3D) | Ekstrudo konturat me harqe, shtyj dhe tërhiq sipërfaqet, rrotullo dhe lëviz përgjatë shtigjeve të sheshta. |
| Ekstrudim në drejtim tjetër nga lart | Vizato formën në tokë dhe ekstrudoje lart ose poshtë (me konicitet ose përgjatë një shtegu nëse do); rrotullo solidin më pas. |
| Lartësia dhe trashësia e objekteve 2D | Vizatimi shtrihet në tokë (lartësi 0) te skeda 3D. |
| Redaktimi i solidëve, rajoneve dhe trupave nga programe të tjera; shfaqja e atyre brenda blloqeve; sipërfaqet e tyre mbi sipërfaqe të lakuara, loft ose të lira; rrjetat polyface dhe poligonale | Solidët në hapësirën e modelit shfaqen te skeda 3D ashtu si janë dhe ruhen përsëri të pandryshuar në DWG; ajo që nuk vizatohet listohet kur hapet skeda 3D. Kërko rrjeta si fytyra 3D në hapësirën e modelit. Shih [Solidët nga programe të tjera](topic:3d-solids#solids-from-other-programs). |
| Kopjimi dhe ngjitja e solidëve | Te skeda 3D, përdor {{cmd:COPY}}. Kujtesa e kopjimit mban vetëm objekte 2D. |
| Prerje, pamje që ndjekin ndryshimet e mëvonshme të solidëve, dhe solidë të hijëzuar në fletë të printuara | {{cmd:VIEWBASE}} vendos pamje të sheshta (një fotografi); ekzekutoje përsëri pasi të ndryshosh solidët. |
| Materiale, tekstura dhe cilësime ndriçimi | Stilet vizualë: të hijëzuar, skajet, vija e fshehur, tela-kornizë, rreze-X. |
| Shtresat e hartës të printuara, në pamjet e fletëve dhe në skedën 3D; imazhe nga skedarë të ruajtur me vizatimin; vendndodhja e një vizatimi e shkruar për programe të tjera në DWG 2000–2007 dhe DXF R12 | Shtresat e hartës shfaqen nën hapësirën e modelit në ekran; sistemi dhe lista e shtresave ruhen me vizatimin: shih [Shtresat e hartës nën vizatim](topic:map-layers). |
| Skanimet E57 mbi 6 milionë pika ose 512 MB, skedarët e vetë prodhuesve të skanerëve (RCP, RCS, FLS, LGS, TZF, ZFS), një re pikash e ruajtur me vizatimin ose e printuar, kapja në një re në skedën 3D, feta vertikale (prerje) në skedën Modeli | Eksporto skanimet e mëdha ose të prodhuesve si LAS ose LAZ ([Formatet e reve të pikave](topic:point-cloud-formats)); bashkange re-n çdo herë që hap vizatimin; gjurmo nga një prerje plani në skedën Modeli: shih [Gjurmo vija si-ndërtuar mbi një re pikash](topic:point-clouds). |
| Regjistrimi i skanimeve: gjetja e shënjuesve (sferave, shahoreve) brenda një skanimi vetë, zgjidhja e të gjitha skanimeve së bashku (rregullimi i grupit), shkalla, regjistrimi kundrejt një modeli | Zgjidh pika që përputhen ose shkruaj koordinatat e shënjuesve, pastaj rafino një skanim në çdo herë me ICP: shih [Regjistro disa skanime në një](topic:register-scans). |

## Rutinat dhe përshtatja

| Ende nuk është ndërtuar | Në vend të kësaj, sot |
|---|---|
| LISP i kompiluar ose i mbrojtur (.fas, .vlx), programe amtare (.arx, .crx, .dbx) dhe VBA (.dvb) | Ngarko burimin `.lsp` të një rutine me {{cmd:APPLOAD}}. |
| `grread` i LISP-it, reaktorët (`vlr-…`), funksionet e kurbave (`vlax-curve-…`), fjalorët dhe të dhënat e zgjeruara, `acet-…` i Express Tools | Pjesa tjetër e gjuhës funksionon: shih [Ekzekuto rutinat LISP](topic:run-lisp). Rreshti i komandës emëron një funksion që mungon kur një rutinë arrin te ai. |
| Imazhe dhe slajde në dialogun e një rutine | Shfaqen si kornizë boshe; pjesa tjetër e dialogut funksionon. |
| CraftScript (.craft), Lua dhe Python në CadCraft | Ekzekutoji në hapësirën Script të PartCraft. |
| Lista të shtresave, ngjyrave dhe llojeve të vijave brenda stileve të menysë së shiritit | Përdor panelin {{ui:Shtresat}} dhe {{ui:Vetitë}}. |
| Startup Suite dhe aliasët e mbajtur në kompjuterin tënd ose të sinkronizuar | Mbahen në këtë shfletues; aplikacioni desktop dhe shërbimi në re do t'i mbajnë për ty. Në Studio, `acad.lsp` dhe `acaddoc.lsp` lexohen nga një dosje mbështetëse që zgjedh ti (Ngarko aplikacionet). |

## Ndihma

Ndihma përshkruan këtë version. Kur shtohet diçka, del nga kjo faqe dhe kalon në udhëzuesit.
