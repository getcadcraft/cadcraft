---
title: Harta e komandave: çfarë të shkruash
summary: Çdo komandë që ka CadCraft me emrat e shkurtër, nga A në Z, e nxjerrë nga vetë programi, dhe zakonet nga programe të tjera vizatimi që ndryshojnë.
keywords: harta e komandave, komandat, aliase, emra të shkurtër, nga programe të tjera, lista e komandave, çfarë të shkruash, fshi, pres, ekuivalent, dallime
from: 3bdfd3e6
---

CadCraft merr emrat e komandave dhe emrat e shkurtër që njerëzit i njohin nga programe të tjera vizatimi: shkruaj `L` për një vijë, `TR` për të prerë, `E` për të fshirë. Kështu nuk ka tabelë përkthimi për të mësuar për shumicën e tyre: emri që e njeh këtu është ai që duhet. Lista më poshtë përmban çdo komandë që ka CadCraft, e nxjerrë nga vetë programi. {{key:Enter}} përsërit të fundit; `HELP` në rreshtin e komandave shfaq të njëjtën listë.

Ato pak që nuk janë të njëjta, ose nuk janë ndërtuar:

- **Ruaj** shkarkon një kopje në shfletues ({{cmd:SAVE}}, {{cmd:SAVEAS}}); në CadCraft Studio shkruan skedarin. Shih [Nga programe të tjera vizatimi](topic:coming-from).
- **PLOT** krijon një PDF (edhe PNG dhe SVG), me një tabelë stilesh shtypjeje; nuk ka menaxher faqesh.
- **DIMSTYLE** dhe **PEDIT** janë të ndërtuara; **PEDIT** nuk ka opsionin Edit-vertex (këtë e bëjnë grips).
- **TABLE** nuk është e ndërtuar; {{cmd:XREF}}, {{cmd:SPLINE}} dhe {{cmd:WBLOCK}} janë.
- Komandat e një rutine (AutoLISP `C:NAME`) shfaqen pasi e ngarkon me {{cmd:APPLOAD}}; nuk listohen këtu.

## Të gjitha komandat (398)

| Komanda | Emrat e shkurtër | Çfarë bën |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Rrotullo pamjen 3D me butonin e majtë |
| `ACCESS` | `AX` | Ndez ose fik vizatimin pa shikim: rezultatet lexohen nga lexuesi i ekranit, një kursor tastiere mbi vizatim, tinguj kapjeje dhe komanda të folura. |
| `ALIASEDIT` |  | Ndrysho aliaset e komandave në një skedar teksti (formati i njohur L, *LINE) |
| `ALIGN` | `AL` | Lëviz dhe rrotullo objektet që pikat burim të bien mbi pikat destinacion (një, dy ose tre çifte), dhe zmadhoji nëse dëshiron |
| `ALIGNPANEL` | `ALP` | Hap panelin Rreshto dhe shpërndaj |
| `ALIGNTO` |  | Rreshto skajet e majtë, qendrën, djathtë, lart, mesin ose poshtë të objekteve të përzgjedhura: mbi përzgjedhjen, objektin e parë ose të fundit të zgjedhur, ose një pikë |
| `ANNOALLVISIBLE` | `ANNOALL` | Shfaq objektet anotative në çdo shkallë, ose vetëm kur shkalla e dritares së pamjes (ose e vizatimit) është në listën e tyre |
| `ANNOSCALE` | `CANNOSCALE` | Vendos shkallën e anotimit të vizatimit: teksti dhe përmasat anotative ndryshojnë madhësinë që të shtypen në të njëjtën madhësi |
| `APPLOAD` | `AP` | Ngarko aplikacione: rutina LISP (.lsp) dhe skedarët e dialogut të tyre (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Hark: 3 pika, Fillim/Qendër/Fund, Fillim/Qendër/Kënd, Fillim/Qendër/Gjatësi, Fillim/Fund/Kënd, Fillim/Fund/Drejtim, Fillim/Fund/Rreze, Qendër/Fillim/Fund, Qendër/Fillim/Kënd, Qendër/Fillim/Gjatësi, Vazhdo |
| `AREA` | `AA` | Sipërfaqja dhe perimetri sipas pikave ose të një objekti; Shto dhe Zbrit mbajnë një totale që rritet (AA) |
| `ARRAY` | `AR` | Kopje në rreshta dhe kolona, ose rreth një qendre (AR) |
| `ARRAYASSOCIATIVITY` |  | Cakton nëse komandat ARRAY bëjnë grupe që mbeten të redaktueshme (1) ose kopje të thjeshta (0) |
| `ARRAYCLOSE` |  | Mbyll redaktimin e objekteve burim të një grupi |
| `ARRAYEDIT` |  | Ndrysho një grup të krijuar me opsionin Associative: numrat, hapësirat, objektet burim, një element |
| `ARRAYPATH` |  | Kopje të objekteve përgjatë një vije, harku, polivijë ose kurbe tjetër |
| `ARRAYPOLAR` |  | Kopje rreth një pike qendër |
| `ARRAYRECT` |  | Kopje në rreshta dhe kolona |
| `ASBUILT` | `ASB` | ASBUILT lexon pikat e matura në terren nga ekipi (CSV / TXT, siç i shkruan EXPORTPOINTS) dhe i krahason me pikat e vizatimit: brenda ose jashtë tolerancës, të pamatura, shtesë. I shënon në shtresën AS-BUILT dhe shkarkon një raport CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Përcakto një atribut (një etiketë që një bllok kërkon një vlerë) për ta vendosur në një bllok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Ndrysho vlerat e atributeve të një reference blloku në rreshtin e komandave, një pas tjetrit (Enter e mban vlerën) |
| `ATTSYNC` |  | Sill referencat e një blloku në përputhje me përcaktimet e atributeve: shtohen të rejat me vlerat e tyre fillestare, hiqen ato të fshira, rivendosen pozicionet dhe teksti; vlerat mbahen |
| `AUDIT` |  | Kontrollon vizatimin e hapur për dëmtime: numra që nuk janë të fundëm, objekte pa madhësi, shtresa, blloqe, stile dhe lloje vijash që mungojnë, blloqe që përmbajnë veten, ID të përbashkëta, përmasa dhe vijëzime të prishura. Liston ç'gjen sipas llojit dhe pyet para se ta rregullojë; rregullimi është një hap zhbërjeje. |
| `AUNITS` | `ANGUNITS` | Si shfaqen dhe shkruhen këndet: gradë dhjetore, gradë-minuta-sekonda ose drejtime si N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Plotësimi automatik i vizatimit ndezur ose fikur, ose listo sugjerimet nga modelet e vizatimit tani. |
| `AUTOCONSTRAIN` |  | Shto kufizimet e bashkëpjesshme, horizontale dhe vertikale aty ku gjeometria është tashmë afër |
| `AUTODIM` | `ADIM` | Vendos përmasa sipas rregullave: madhësia e përgjithshme, zinxhirët përgjatë anëve, hapjet, diametrat e vrimave dhe hapësira e rrjetës, pa përsëritur atë që është tashmë e përmasuar. |
| `AUTOSHEET` | `ASH` | Vendos fletët vetë: zgjedh letrën dhe shkallët standarde dhe vendos çdo pamje me një titull dhe bllok titulli. |
| `BATTMAN` |  | Menaxheri i atributeve të blloqeve: renditja, etiketat, kërkesat, vlerat fillestare dhe mënyrat e atributeve të një blloku, pastaj referencat e tij përditësohen |
| `BCLOSE` |  | Mbyll redaktuesin e blloqeve: ruaj blloqet ose hidh ndryshimet |
| `BCONVERT` |  | BCONVERT gjen gjeometri që përsëritet dhe e kthen në referenca blloku. Përzgjidh objektet që përsëriten: çdo grup tjetër objektesh në hapësirën e hapur që është e njëjta gjeometri, e zhvendosur dhe e rrotulluar me çfarëdo kënd, gjendet, dhe me Mirrored ose Scaled të ndezur gjenden edhe pasqyrat dhe kopjet në madhësi tjetër. Jepi bllokut të ri një emër dhe një pikë bazë; përzgjedhja dhe çdo kopje bëhen referenca të tij, secila me rrotullimin dhe shkallën e vet. Ose zgjidh Block dhe emëro një bllok ekzistues për të gjetur kopje të lira të objekteve të tij. Një kopje duhet të ketë të njëjtën shtresë, ngjyrë, lloj vije dhe trashësi vije, përveç nëse Properties është vënë në Ignore. Objektet në shtresa të kyçura lihen rehat. Një hap zhbërjeje. |
| `BEDIT` | `BE` | Redaktuesi i blloqeve: ndrysho objektet dhe atributet e një blloku; BCLOSE ruan (BE) |
| `BLEND` |  | BLEND: një spline midis skajeve të dy kurbave të hapura, zgjidhur afër skajeve për t'i bashkuar. CONtinuity: Tangent ndjek të dyja drejtimet, Smooth ndjek edhe mënyrën si përkulen. |
| `BLOCK` | `B`, `BMAKE` | Krijo një bllok nga objekte (bëhen një referencë) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: çdo referencë e një blloku bëhet referencë e një tjetri, në të njëjtin vend me të njëjtën shkallë dhe rrotullim. Vlerat e atributeve që të dy blloqet i kanë mbahen. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE shfaq panelin Bllokje me kursorin në filtrin e tij. Paneli shfaq një figurë për çdo bllok (ata të vendosur më së fundi të parët), si listë ose rrjet; kliko një figurë ose zvarrite mbi vizatim për ta vendosur blloku me INSERT. Nën Libraries, shto një skedar DWG ose DXF të tënd: blloqet e tij listohen me figura dhe kopjohen në këtë vizatim kur vendos një. Në CadCraft Studio mund të shtohet edhe një dosje vizatimesh, dhe skedarët dhe dosjet mbahen mend. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolonat, grupimi, renditja, titulli, totalet dhe shënimet e një tabele listë materialesh |
| `BOMEXPORT` |  | Ruaj një tabelë listë materialesh si skedar .csv |
| `BOMTABLE` | `BOM` | Një tabelë e drejtpërdrejtë listë materialesh e një zone, ose e gjithë vizatimit |
| `BOMUPDATE` |  | Përditëso tani çdo tabelë listë materialesh, edhe ato të ngrira |
| `BOMZONE` | `BZONE` | Një zonë me emër e vizatimit për listën e materialeve: dy kënde, një shumëkëndësh, ose kontur i një objekti të mbyllur |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): zgjidh një pikë brenda një zone të mbyllur dhe merr një polivijë të mbyllur rreth saj. Harqet mbeten harqe. Islands vizaton edhe kontûret e zonave brenda saj. |
| `BOX` |  | Një kuti: dy kënde dhe një lartësi (3D) |
| `BPARAMETER` | `BPARAM` | Nuk është ndërtuar ende: shtimi i një parametri (si Visibility) në një bllok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametrat e blloqeve: parametra të emërtuar me formula, dhe disa parametra dukshmërie në një bllok. Punon në redaktuesin e blloqeve (cakto objektet e përzgjedhura në një gjendje) dhe mbi një referencë të zgjedhur (vlerat dhe gjendjet e veta). |
| `BREAK` | `BR` | Pri një vijë, hark, rreth ose polivijë midis dy pikave (BR) |
| `BREAKATPOINT` |  | Ndaj një vijë, hark ose polivijë në dy në një pikë |
| `BREAKLINE` |  | Vizato një vijë me simbolin e prerjes; madhësia e saj dhe zgjatja përtej skajeve mbahen mend. |
| `BREPLACE` |  | BREPLACE zëvendëson një bllok me një tjetër. Përzgjedhur: zgjidh referenca blloqesh dhe emëro blloku që do përdoret në vend të tyre. All: emëro një bllok dhe zëvendësimin e tij, dhe çdo referencë në çdo hapësirë dhe brenda blloqeve të tjerë ndryshon. Një referencë mban vendin, shkallën, rrotullimin dhe shtresën e vet, dhe vlerat e atributeve që të dy blloqet i kanë; vlerat që blloku i ri nuk ka vend për to hidhen dhe emërtohen. |
| `BSEARCH` |  | BSEARCH gjen blloqe. Name: pjesë e emrit të një blloku, ose një model me * dhe ?. Attribute: një vlerë (ose TAG=vlerë) që mbajnë atributet e një reference. Geometry: zgjidh objekte ose një referencë blloku, dhe listohen blloqet formën e të cilëve është të paktën 85% e ngjashme, më të mirët të parët; madhësia, rrotullimi dhe pasqyrimi nuk numërohen. Referencat e gjetura në hapësirën e hapur përzgjidhen, gati për komandën e radhës. |
| `BURST` |  | Shpërbëj referencat e blloqeve dhe ruaj ç'thonë atributet e tyre: çdo vlerë bëhet tekst në shtresën e atributit. |
| `BVHIDE` | `BVH` | Në redaktuesin e blloqeve: fshih objektet në gjendjen aktuale të dukshmërisë. |
| `BVSHOW` | `BVSH` | Në redaktuesin e blloqeve: shfaq objektet që gjendja aktuale e dukshmërisë i fsheh (shfaqen të zbehura për t'u zgjedhur). |
| `BVSTATE` | `BVS` | Në redaktuesin e blloqeve, në një bllok me gjendje dukshmërie: kalo në një gjendje, ose shto, riemëro ose fshi një të tillë. |
| `CAL` |  | Llogarit një gjatësi ose numër: + − * / dhe kllapa, siç i shkruan kudo |
| `CENTERLINE` | `CL` | Vijë qendre midis dy vijash: në mes të tyre, ose përgjatë përgjysmuesit kur takohen (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Shenja e qendrës: një kryq në qendër të një rrethi ose harku, me vija qendre që shkojnë pak përtej tij (CM) |
| `CHAMFER` | `CHA` | Pjerr kënddrejtën midis dy vijash (D dy distanca, A gjatësi dhe kënd, P çdo kënd i një polivije) |
| `CHSPACE` |  | CHSPACE: lëviz objekte midis një fletë dhe modelit përmes një dritareje pamjeje. Shkallëzohen dhe rrotullohen që të duken njësoj nga ana tjetër. Në një fletë shkojnë te modeli; ndërsa punon përmes një dritareje pamjeje (MSPACE) vijnë në fletë. |
| `CIRCLE` | `C` | Qendër dhe rreze, diametër, 2 ose 3 pika |
| `CLASS` |  | Vendos objektet e përzgjedhura në një klasë, ose pa asnjë të përzgjedhur cakto klasën aktive (? i liston) |
| `CLASSES` | `CLS` | Paneli Classes: klasat grupojnë objekte nëpër shtresa; shfaqi, fshihi dhe stilizoi, dhe mbishkruaji për çdo dritare pamjeje (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ankoro ose lëshoje rreshtin e komandave, bëje një rresht, cakto rreshtat e historikut, ose hap historikun (F2) |
| `COMPARESETTINGS` | `CMPSET` | Krahaso stilet e përmasave, stilet e tekstit, shtresat, fletët ose njësitë: dy në këtë vizatim, ose ky vizatim me një tjetër të hapur, dhe kopjo një vlerë mes tyre. |
| `CONSTRAINTBAR` | `CBAR` | Shfaq ose fshih shiritat e kufizimeve (Showall / Hideall, ose për objekt) |
| `COPY` | `CO`, `CP` | Kopjo objekte, aq herë sa kliko |
| `COPYBASE` |  | Kopjo objekte në kujtesën e fragmenteve me një pikë bazë që zgjedh |
| `COPYCLIP` |  | Kopjo objekte në kujtesën e fragmenteve (Ctrl+C); PASTECLIP i vendos |
| `COUNT` | `BCOUNT` | Numëro referencat e blloqeve: zgjidh një për të përzgjedhur dhe numëruar çdo referencë të blloqeve të saj |
| `COUNTTABLE` |  | Vendos një tabelë me numërimet e blloqeve |
| `CREDITS` |  | Vendos kreditet e Bibliotekës në vizatim si tabelë. Ekzekutoje sërish për ta përditësuar tabelën nga objektet e vizatimit tani. |
| `CURSORSIZE` |  | Madhësia e kryqëzimit: 100 e shtrin nga njëra anë në tjetrën e vizatimit (Settings › Cursor › Full screen) |
| `CUTCLIP` |  | Pri objekte në kujtesën e fragmenteve (Ctrl+X): kopjo, pastaj fshi |
| `CYLINDER` | `CYL` | Një cilindër: qendër, rreze dhe lartësi (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listo blloqet, atributet dhe vetitë e objekteve si tabelë në vizatim ose në një skedar CSV |
| `DATALINK` | `DL` | Një tabelë nga një skedar CSV që mban mend skedarin, që të mund të lexohet sërish |
| `DATALINKUPDATE` | `DLU` | Lexo sërish skedarin e një lidhjeje të dhënash dhe mbush tabelat e saj |
| `DCALIGNED` | `DCALI` | Kufizim përmasor: distanca e vërtetë midis pikave, një pike dhe një vije, ose dy vijave |
| `DCANGULAR` | `DCANG` | Kufizim përmasor: këndi midis dy vijash, ose i një harku |
| `DCCONVERT` |  | Kthe përmasat e vizatuara mbi gjeometri të kufizueshme në kufizime përmasore |
| `DCDIAMETER` | `DCDIA` | Kufizim përmasor: diametri i një rrethi ose harku |
| `DCDISPLAY` |  | Shfaq ose fshih kufizimet përmasore në vizatim |
| `DCHORIZONTAL` | `DCHOR` | Kufizim përmasor: distanca horizontale |
| `DCLINEAR` | `DCLIN` | Kufizim përmasor: distanca horizontale ose vertikale, nga vendi ku e vendos |
| `DCRADIUS` | `DCRAD` | Kufizim përmasor: rrezja e një rrethi ose harku |
| `DCVERTICAL` | `DCVER` | Kufizim përmasor: distanca vertikale |
| `DELBLOCKS` |  | Fshi blloqe: çdo referencë (edhe ato brenda të tjerëve, në çdo fletë) dhe përcaktimet |
| `DELCONSTRAINT` | `DELCON` | Hiq çdo kufizim (gjeometrik dhe përmasor) nga objektet që përzgjedh |
| `DELOPENING` |  | Nxirr një derë ose dritare nga një mur. |
| `DESCRIBE` | `DESC` | Thuaj ç'përmban vizatimi: sa objekte, çfarë lloji, sa të mëdha, çfarë është përzgjedhur. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Pastro përzgjedhjen (Esc) |
| `DETAILS` | `DET` | Detajet e veta të firmës, të gjetura për atë që vizaton: gjej, shto një bllok, listo, hiq, ndiz ose fik ofertat. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Vizato një diagram nga tekst: një diagram rrjedhe Mermaid, një diagram komponentësh PlantUML, D2, një listë nga-te ose XML draw.io, si blloqe dhe lidhës që mund t'i ndryshosh |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distanca e vërtetë midis dy pikave |
| `DIMANGULAR` | `DAN`, `DIMANG` | Këndi midis dy vijash, i një harku, ose me tre pika |
| `DIMARC` | `DAR` | Përmasë gjatësie harku: distanca përgjatë një harku, me simbolin e harkut (DAR) |
| `DIMASZ` |  | Cilësim përmasash: madhësia e shigjetës |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Përmasa të radhitura nga një vijë bazë |
| `DIMBREAK` | `DBREAK` | Pri vijat e përmasës dhe të zgjatjes aty ku kryqëzojnë objekte të tjerë (Auto), midis dy pikave (Manual), ose hiq prerjet |
| `DIMCONSTRAINT` | `DCON` | Kufizime përmasore: lineare, të rreshtuara, këndore, rreze, diametër, konverto |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Një zinxhir përmasash, secila nga fundi i së fundit |
| `DIMDEC` |  | Cilësim përmasash: vende dhjetore |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diametri i një harku ose rrethi |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liro përmasat nga objektet me të cilët janë lidhur (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ndrysho tekstin e përmasës (Home, New text, Rotate) ose pjerr vijat zgjatuese (Oblique) |
| `DIMEXE` |  | Cilësim përmasash: zgjatja përtej vijës së përmasës |
| `DIMEXO` |  | Cilësim përmasash: shmangia nga origjina |
| `DIMGAP` |  | Cilësim përmasash: hapësira rreth tekstit |
| `DIMINSPECT` |  | Përmasë inspektimi: një kornizë rreth vlerës me një etiketë dhe sa shpesh kontrollohet pjesa |
| `DIMJOGGED` | `DJO`, `JOG` | Përmasë rrezeje e thyer: një rreze e vizatuar nga një pikë më e afërt kur qendra është larg (DJO) |
| `DIMJOGLINE` | `DJL` | Shto një simbol thyerjeje në vijën e një përmase lineare ose të rreshtuar, që të tregojë se distanca nuk është vizatuar në shkallë (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distanca horizontale ose vertikale (R për çdo kënd) |
| `DIMLUNIT` |  | Cilësim përmasash: formati i gjatësisë (1 shkencor, 2 dhjetor, 3 inxhinierik, 4 arkitektonik, 5 thyesor) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Përmasë ordinate: distanca X ose Y e një pike nga origjina e UCS, me udhëheqës (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Mbishkruaj variablat e përmasave në përmasat e përzgjedhura pa ndryshuar stilin e tyre; Clear i kthen stilin (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Rrezja e një harku ose rrethi |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Lidh pikat e një përmase me objekte, që ndjek dhe matet sërish kur ata lëvizin (DRE) |
| `DIMSCALE` |  | Cilësim përmasash: shkalla e përgjithshme (madhësitë × kjo) |
| `DIMSPACE` |  | Hapësirë e barabartë midis përmasave paralele, e matur nga një përmasë bazë (0 i rreshton, Auto është dyfishi i lartësisë së tekstit) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Krijo, ndrysho, cakto aktualin, fshi, apliko dhe krahaso stile përmasash me emër (dialogu; -DIMSTYLE në rreshtin e komandave) |
| `DIMTEDIT` | `DIMTED` | Lëviz tekstin e përmasës majtas, djathtas ose në mes të vijës së përmasës, ose ktheje |
| `DIMTEXTUNIT` | `DTU` | Teksti i përmasës në mm, cm, m ose km, ose në njësitë e vizatimit: përmasat e përzgjedhura, ose të reja (DTU) |
| `DIMTXT` |  | Cilësim përmasash: lartësia e tekstit |
| `DIST` | `DI` | Distanca dhe këndi midis dy pikave |
| `DISTRIBUTE` |  | Hapëso objektet e përzgjedhura në mënyrë të barabartë, anash ose lart e poshtë: hapa të barabartë midis qendrave, ose hapësira të barabarta; dy të jashtmit mbeten |
| `DIVIDE` | `DIV` | DIVIDE (DIV): shenja që ndajnë një vijë, hark, rreth, polivijë, spline ose elips në pjesë të barabarta. Pika, ose me Block një bllok në çdo shenjë. |
| `DOCUMENTS` | `DOCS` | Hap panelin Dokumente: nxirr dhe fut vizatime, revizionet, gjendjet e publikimit dhe miratimin për një dosje projekti |
| `DOOR` | `DR` | Vendos një derë në një mur. Ana ku klikon është ana ku hapet. |
| `DRAWORDER` |  | Ndrysho renditjen e vizatimit: sill objektet përpara, dërgoji mbrapa, ose vendosi mbi ose nën objekte të tjerë. |
| `DUPLICATE` | `DUP` | Një kopje që lëviz me treguesin: kliko për ta vendosur (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Vetitë e vizatimit: titulli, autori dhe të tjerat, dhe çiftet e tua emër-vlerë |
| `DXFOUT` |  | Shkarko vizatimin si DXF R12 (Ruaj mban formatin e vet) |
| `EATTEDIT` | `DDATTE` | Ndrysho atributet e një reference blloku: vlerat, tekstin dhe vetitë, një atribut në çdo herë |
| `ELLIPSE` | `EL` | Skajet e boshtit dhe gjysmëboshti tjetër |
| `ERASE` | `E`, `DELETE` | Hiq objekte |
| `EXPLODE` | `X` | Shpërbëj polivijat, blloqet dhe përmasat në pjesët e tyre |
| `EXPORT` | `EXP` | Ruaj një kopje të vizatimit në një lloj skedari që shkruan një shtojcë |
| `EXPORT3D` | `3DEXPORT` | Eksporto modelin 3D: GLB, OBJ ose STL |
| `EXPORTPOINTS` | `EXPPTS` | Shkruaj pikat, dhe pikat e futjes së blloqeve me një atribut si përshkrim, në një skedar CSV ose TXT (PNEZD, PENZD ose XYZ) për programet BIM dhe topografi |
| `EXTEND` | `EX` | Zgjat objektet që të takojnë të tjerët: kliko afër një skaji, tërhiq nëpër disa, ose Shift+kliko për të prerë |
| `EXTRIM` |  | EXTRIM: zgjidh një skaj prerjeje, pastaj një anë. Gjithçka që kryqëzon skajin pritet në atë anë. Pjesët që do të humbin shfaqen ndërsa lëviz treguesin. |
| `EXTRUDE` | `EXT` | Ekstrudo objekte 2D të mbyllura në trupa të ngurtë (3D) |
| `FIELD` |  | Vendos një fushë në tekst, në një qelizë tabele ose në një atribut: një datë, emri i skedarit, numri i fletës, një veti vizatimi, sipërfaqja ose gjatësia e një objekti, ose një formulë |
| `FILLET` | `F` | Rrumbullako ose drejto kënddrejtën midis dy objekteve (R rreze, P çdo kënd i një polivije, M disa) |
| `FIND` |  | Gjej dhe zëvendëso fjalë në tekst, vlera atributesh dhe tekst përmasash |
| `FLATTEN` |  | Vendos lartësinë (Z) dhe trashësinë e objekteve të përzgjedhura në 0, edhe në blloqet që përdorin. |
| `FLOOR` |  | Zgjidh katin ku vizaton, shto një të ri, ose lëviz ose kopjo përzgjedhjen në të. |
| `FLOORLAYERS` |  | Ktheji katet në shtresa me emrin Floor-Layer, për një skedar që do t'i shkojë dikujt pa katet. |
| `FLOORS` | `FLR` | Hap panelin Katet: vendos katet e njëri-tjetrit në një hapësirë modeli. |
| `GCCOINCIDENT` |  | Kufizim: dy pika takohen, ose një pikë mbetet mbi një objekt |
| `GCCOLLINEAR` |  | Kufizim: dy vija mbeten në një vijë |
| `GCCONCENTRIC` |  | Kufizim: dy rrethe ose harqe ndajnë një qendër |
| `GCEQUAL` |  | Kufizim: dy vija mbeten me të njëjtën gjatësi, ose dy rrethe/harqe me të njëjtën rreze |
| `GCFIX` |  | Kufizim: një pikë ose një objekt i tërë mbetet aty ku është |
| `GCHORIZONTAL` |  | Kufizim: një vijë (ose dy pika) mbetet horizontale |
| `GCPARALLEL` |  | Kufizim: dy vija mbeten paralele |
| `GCPERPENDICULAR` |  | Kufizim: dy vija mbeten në kënd të drejtë |
| `GCSYMMETRIC` |  | Kufizim: dy pika, vija ose rrathë pasqyrojnë njëri-tjetrin përmes një vije |
| `GCTANGENT` |  | Kufizim: një vijë dhe një rreth ose hark (ose dy prej tyre) mbeten tangjente |
| `GCVERTICAL` |  | Kufizim: një vijë (ose dy pika) mbetet vertikale |
| `GDSIN` | `GDS` | Shiko një skemë IC (një skedar rrjedhe GDSII): çdo shtresë dhe llojin e të dhënave si shtresë vizatimi, e sheshtë, në njësi përdoruesi; vetëm për shikim dhe matje (provë laboratorike) |
| `GEOMCONSTRAINT` | `GCON` | Kufizime gjeometrike: horizontale, vertikale, paralele, tangjente, bashkëpjesë… |
| `GLBOUT` |  | Eksporto modelin 3D si GLB (glTF) |
| `GRADIENT` | `GD` | Mbush një zonë me një gradient të një ose dy ngjyrash |
| `GRIDMOVE` | `GM` | Lëviz një vijë rrjeti dhe bart ç'varet prej saj: muret shtrihen, kolonat, flluskat dhe etiketat lëvizin, përmasat ndjekin. |
| `GROUP` | `G` | GROUP (G): i jep objekteve të përzgjedhura një emër të përbashkët. Një klikim mbi një prej tyre përzgjedh të gjithë. Enter te emri bën një grup pa emër. |
| `GROUPEDIT` |  | GROUPEDIT: ndrysho një grup. Zgjidh një nga objektet e tij ose jep emrin, pastaj Add ose Remove objekte, REName e riemëron, ndrysho Description, ose thuaj nëse një klikim e përzgjedh të tërin. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Mbush një zonë me një mbushje të ngurtë ose me një model: kliko brenda, ose përzgjidh objekte të mbyllura (H) |
| `HATCHEDIT` | `HE` | Ndrysho një vijëzim: modelin, shkallën, kënd, origjinën dhe lidhjen me një kufi. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Rikrijon polivijat kufi nga një vijëzim, të lidhura me të ose jo |
| `HATCHTOBACK` |  | Dërgo çdo vijëzim pas çdo gjëje tjetër. |
| `HELP` | `?` | Kjo listë |
| `HIDEOBJECTS` |  | Fshih objektet e përzgjedhura deri te UNISOLATEOBJECTS. Nuk ruhet me vizatimin. |
| `HISTORY` | `HIST` | HISTORY (HIST): versionet e këtij vizatimi — kopje të mbajtura në këtë kompjuter kur Studio e ruan, dhe versionet e cloud-it — për t'i hapur, rikthyer dhe krahasuar me ndryshimet e shfaqura me ngjyrë. |
| `ID` |  | Koordinatat e një pike |
| `IMAGE` | `IM` | Jepi CadCraft-it skedarët e figurave që përdor një vizatim (një DWG ruan vetëm ku ishin). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Vendos një figurë (PNG ose JPEG) nga një skedar. |
| `IMAGECLIP` | `ICL` | Pritje e një figure në një drejtkëndësh ose shumëkëndësh, ose hiq prerjen. |
| `IMPORT` | `IMP` | Importo në këtë vizatim një skedar të një lloji që lexon një shtojcë |
| `INSERT` | `I`, `DDINSERT` | Vendos një bllok (S shkallë, R rrotullo); F nga një skedar DWG/DXF, L nga biblioteka |
| `INTERSECT` | `IN` | Mbaj vetëm atë që trupat kanë të përbashkët (3D), ose zonën që kanë të përbashkët rajonet 2D |
| `ISODRAFT` |  | ISODRAFT: vizatimi izometrik ndezur ose fikur, ose drejtpërdrejt mbi planin Left, Top ose Right. Kur është ndezur, Ortho dhe gjurmimi polar ndjekin dy boshtet e planit, rrjeti vizatohet izometrik, dhe ELLIPSE ka Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Shfaq vetëm objektet e përzgjedhura; çdo gjë tjetër në këtë hapësirë fshihet deri te UNISOLATEOBJECTS. Nuk ruhet me vizatimin. |
| `ISOPLANE` |  | ISOPLANE: zgjidh planin izometrik ku vizaton: Left, Top ose Right. Enter kalon te tjetri, ashtu si F5 kur vizatimi izometrik është ndezur. |
| `JOIN` | `J` | Bashko vija, harqe dhe polivija që takohen skaj më skaj në një polivijë; vija në një vijë në një vijë (J) |
| `LASER` | `LASERCUT` | Hap panelin Lazer: dërgo shtresat te një prerës ose gravues lazer (G-kod GRBL) |
| `LASSOMODE` |  | Shtyp dhe tërhiq vizaton një lasso (1) ose një drejtkëndësh (0) |
| `LAYDEL` |  | Fshi një shtresë dhe çdo objekt mbi të (në model, në fletë dhe në bllok) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Hap menaxherin e shtresave: çdo shtresë në një tabelë |
| `LAYERPANEL` |  | Shfaq panelin e shtresave |
| `LAYFRZ` |  | Ngrije shtresën e çdo objekti që zgjedh |
| `LAYGROUP` | `LG` | Grupo shtresat në dosje në panelin Shtresat. |
| `LAYISO` |  | Izolo shtresat e objekteve të përzgjedhura (çdo shtresë tjetër fikur) |
| `LAYLOCKFADE` |  | Cakto sa zbehen objektet në shtresa të kyçura, dhe nëse një klikim mund t'i zgjedhë. |
| `LAYMCUR` |  | Bëje shtresën e objektit që zgjedh aktuale |
| `LAYMRG` |  | Bashko shtresat: objektet e tyre lëvizin në një shtresë synim, dhe shtresat e bashkuara zhduken |
| `LAYOFF` |  | Fik shtresën e çdo objekti që zgjedh |
| `LAYON` |  | Ndiz çdo shtresë |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Një fletë e re me bllok titulli dhe një dritare pamjeje |
| `LAYTHW` |  | Shkrij çdo shtresë |
| `LAYUNISO` |  | Ndiz sërish shtresat që LAYISO i fiku |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Kthen tekstin e shkruar me fonte të vjetra vietnamheze (fonte TCVN3 / ABC si .VnTime, dhe fonte VNI si VNI-Times) në Unicode. Ky tekst shfaqet tashmë si lexohet; kjo e rishkruan përgjithmonë, me një numërim dhe një hap zhbërjeje. |
| `LENGTHEN` | `LEN` | Zgjat ose shkurto vijat, harqet dhe polivijat: me një shumë, një përqindje, deri në një total, ose duke tërhequr (LEN) |
| `LIBRARY` | `LIB` | Paneli i bibliotekës: vendos artikuj, kontrollo përditësimet, kreditet |
| `LIMITS` |  | Cakto kufijtë e vizatimit: ON, OFF, ose cepat poshtë-majtas dhe lart-djathtas. Me kufijtë ON, pikat jashtë tyre refuzohen |
| `LINE` | `L` | Segmente të drejta, secili objekt i vet |
| `LINETYPE` | `LT`, `CELTYPE` | Lloji i vijës që marrin objektet e rinj (sipas shtresës, sipas blloku, ose një me emër) |
| `LINKVIEWS` | `SYNCVIEWS` | Lëviz dhe zmadho çdo panel bashkë (ekran i ndarë), për të krahasuar dy vizatime ose revizione |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ose VLIDE) hap redaktuesin LISP: një dritare për të shkruar, ngarkuar dhe provuar një rutinë. Ngarkimi në vizatim lexon çdo formë, si kur ngarkon skedarin me APPLOAD, dhe krijon komandat e saj. Run selection vlerëson format e përzgjedhura, ose formën ku është kursori. Konsola shfaq çfarë printoi rutina dhe çdo gabim me rreshtin e vet. Kllapa përkatëse shënohet ndërsa shkruan dhe Enter e zhvendos rreshtin e ri. New, Open dhe Save punojnë me një skedar .lsp. Listat pranë tekstit tregojnë funksionet që përcakton rutina, ato që thërret e që ky LISP s'i ka ende, dhe të gjitha ato që ka. Dritarja nuk e bllokon vizatimin, kështu që një rutinë mund të kërkojë pika; Stop ose Esc ndalon një rutinë që po punon. |
| `LIST` | `LI`, `LS` | Përshkruaj objektet në historik |
| `LTSCALE` | `LTS` | Shkalla e llojit të vijës së vizatimit (çdo vizë dhe hapësirë shumëzohet me të) |
| `LWDISPLAY` | `LWT` | Shfaq ose fshih trashësitë e vijave në ekran (butoni LWT në shiritin e gjendjes) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Trashësia që marrin objektet e rinj (sipas shtresës, sipas blloku, parazgjedhur, ose mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | shtresa harte nën hapësirën e modelit: sistemi koordinativ i vizatimit, pllaka, WMS, WMTS, ArcGIS, figura |
| `MASSPROP` |  | MASSPROP: vetitë e prerjes së rajoneve dhe objekteve të mbyllura: sipërfaqja, perimetri, qendra e masës, momentet dhe produkti i inercisë, rrezet e xhirimit dhe boshtet kryesore. Saktë për vija dhe harqe. Mund ta shkruajë raportin në një skedar tekst. |
| `MATCHPROP` | `MA`, `PAINTER` | Përputh vetitë: kopjo shtresën, ngjyrën dhe më shumë të një objekti mbi të tjerë (MA) |
| `MEASURE` | `ME` | MEASURE (ME): një shenjë çdo gjatësi të dhënë përgjatë një vije, harku, rrethi, polivije, spline ose elipse, nga skaji më i afërt me zgjedhjen tënde. Pika, ose me Block një bllok në çdo shenjë. |
| `MEASUREGEOM` | `MEA` | Mat një distancë, një rreze, një kënd ose një sipërfaqe (MEA) |
| `MINSERT` |  | MINSERT: vendos një bllok në rreshta dhe kolona në një herë. Çdo njëri është referencë e vet, kështu që mund të lëvizësh ose fshish çdo prej tyre. |
| `MIRROR` | `MI` | Pasqyro objekte përmes një vije |
| `MLEADER` | `MLD`, `MLEAD` | Udhëheqës i shumëfishtë: një shigjetë, një udhëheqës dhe një shënim, si një objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Rreshto udhëheqësit e shumëfishtë me një prej tyre sipas një drejtimi, me hapësirë të barabartë, ose të shpërndarë midis dy pikave (MLA) |
| `MLEADERCOLLECT` | `MLC` | Mblidh disa udhëheqës të shumëfishtë në një: blloqet e tyre në rresht ose kolonë, ose shënimet e tyre njëri nën tjetrin (MLC) |
| `MLEADEREDIT` | `MLE` | Shto vija udhëheqëse te një udhëheqës i shumëfishtë ose hiqi ato; ndërro përmbajtjen e tij midis tekstit dhe një blloku (MLE) |
| `MLINE` |  | Vizato vija paralele së bashku, të lidhura në kënde. |
| `MOVE` | `M` | Lëviz objekte me një pikë bazë dhe një pikë të dytë |
| `MSPACE` | `MS` | Punon në model përmes një dritareje pamjeje të fletës së hapur (ose kliko dy herë brenda dritares). |
| `MTEXT` | `MT`, `T` | Tekst paragrafi: tërhiq gjerësinë e tij, pastaj shkruaj në vend; Enter fillon paragraf të ri (T) |
| `MVIEW` | `MV` | Një dritare pamjeje mbi modelin, në një fletë |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pamje me emër: ruaj pamjen në ekran (ose një dritare) me një emër dhe kthehu tek ajo (NV) |
| `NCOPY` |  | Kopjo objekte nga një referencë blloku ose nga një vizatim i lidhur në vizatim, pa e shpërbërë. |
| `NEARBY` |  | Thuaj çfarë është afër kursorit, më i afërti i pari, me distancën dhe anën. |
| `NEW` |  | Fillo një vizatim të ri |
| `OBJECTSCALE` | `OBJSCALE` | Shkallët e anotimit të tekstit dhe përmasave anotative: shto një shkallë, fshi një, shto shkallën aktuale, ose listoji (çdo dritare pamjeje i shfaq në madhësinë e shkallës së vet) |
| `OBJOUT` |  | Eksporto modelin 3D si OBJ |
| `OFFSET` | `O` | Kopje paralele në një distancë |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: si OFFSET mbyll hapësirat te këndet e jashtme të një polivije. 0 zgjat segmentet, 1 shton një hark, 2 shton një prerje të drejtë. Mbahet për këtë sesion. |
| `OLELIST` | `OLES` | Listo objektet OLE që mban një vizatim dhe vendos një kopje të figurës së njërit aty ku zgjedh |
| `OPEN` |  | Hap një DWG ose DXF nga ky kompjuter |
| `OPENIN3D` |  | Hap këtë vizatim në aplikacionin e modelimit 3D, në një skedë të re (asgjë nuk ngarkohet) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Hap menynë e kapjes së objekteve: zgjidh cilat kapje janë ndezur. Edhe një klikim me butonin e djathtë mbi Snap në shiritin e gjendjes. |
| `OVERKILL` |  | Fshi objekte të dyfishtë dhe bashko vija dhe harqe që mbivendosen ose janë skaj më skaj, brenda një toleranце. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Paneli i Parametrave: parametrat e përdoruesit dhe kufizimet përmasore në një tabelë |
| `PARTSLIST` | `PLIST` | Një tabelë listë pjesësh e çdo pjese standarde dhe profili çeliku të vendosur nga Biblioteka |
| `PASTEAREA` | `PAREA` | Ngjit një zonë të kopjuar në MarkupCraft (Copy area) në madhësinë e vet të vërtetë, si figurë. |
| `PASTEBLOCK` |  | PASTEBLOCK: ngjit çfarë kopjove si një bllok. Blloku merr një emër të vetin; RENAME i jep tëndin. |
| `PASTECLIP` |  | Ngjit kujtesën e fragmenteve: ndjek kursorin, kliko aty ku shkon (Ctrl+V) |
| `PASTEORIG` |  | Ngjit kujtesën e fragmenteve në koordinatat nga u kopjua (Ctrl+Shift+V) |
| `PDF` |  | Jepi CadCraft-it skedarët PDF që përdorin nënvizimet e vizatimit |
| `PDFADJUST` |  | Zbeh, kontrasto, bëje monokrome ose fik një nënvizim PDF |
| `PDFATTACH` | `PDFATT` | Bashkëngjit një faqe PDF si nënvizim (PDFATTACH) |
| `PDFCLIP` |  | Pri një nënvizim PDF në një drejtkëndësh ose shumëkëndësh |
| `PDFIMPORT` | `PDFIM` | Kthe vijat, mbushjet dhe tekstin e një faqeje PDF në objekte vizatimi (PDFIMPORT) |
| `PDFLAYERS` |  | Ndiz ose fik shtresat e një nënvizimi PDF |
| `PEDIT` | `PE` | Ndrysho një polivijë: mbyll, hap, bashko, gjerësi, përshtat kurbën, kurbë spline, shpërbëj kurbën, gjenerim i llojit të vijës, kthe; vijat, harqet dhe splines mund të kthehen në polivijë |
| `PHOTOSKETCH` | `PSK` | Kthen një foto të një skice dore në letër në vija dhe harqe në një shkallë, duke drejtuar perspektivën dhe duke i dhënë çdo ngjyre stilolapsi shtresën e vet. |
| `PICKSTYLE` |  | PICKSTYLE: nëse zgjedhja e një objekti të një grupi zgjedh tërë grupin (1, cilësimi fillestar) ose vetëm atë objekt (0). Mbahet për këtë sesion. |
| `PLAN` |  | Kthe pamjen që boshti X i UCS (UCS aktuale, një Ucs e ruajtur, ose World) të jetë horizontal në ekran. Asgjë në vizatim nuk lëviz. |
| `PLINE` | `PL` | Një polivijë me segmente vijash dhe harqesh |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Shtyp në PDF: një fletë, ose modeli në një shkallë |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabelat e stilit të shtypjes: cakto çfarë shtypet për çdo ngjyrë (ngjyrë, e zezë, gri, bojë, trashësi vije); mbahet me vizatimin (STYLESMANAGER) |
| `POINT` | `PO` | Objekte pikë |
| `POINTCLOUD` | `PC` | reja e pikave e bashkëngjitur: prerje, lartësi, trashësi, ngjyrë, madhësi, e dukshme, zmadhim, shkëput |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | bashkëngjit një re pikash (LAS, LAZ, XYZ, PTS) nën vizatimin |
| `POLARANG` |  | Hapi i gjurmimit polar në gradë (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Një shumëkëndësh i rregullt |
| `PRESSPULL` |  | Shty ose tërhiq një faqe të një trupi të ngurtë (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Hap panelin Vetitë (edhe Ctrl+1, ose kliko dy herë mbi një objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Palos panelin Vetitë në skajin e dritares |
| `PSPACE` | `PS` | Lër dritaren e pamjes ku punon dhe kthehu në fletë (ose kliko dy herë jashtë saj). |
| `PUBLISH` | `-PUBLISH` | Shtyp disa ose të gjitha fletët në një PDF të vetme (një faqe dhe një shenjues për fletë) |
| `PURGE` | `PU` | Hiq përcaktimet e blloqeve që nuk përdoren nga asgjë |
| `QDIM` |  | Përmasë e shpejtë: përmaso disa objekte njëherësh (vazhdim, bazë, e shkallëzuar, ordinate, rreze ose diametër) |
| `QPMODE` | `QP` | Vetitë e shpejta pranë kursorit ndezur ose fikur |
| `QSELECT` | `QS` | Zgjedhje e shpejtë: çdo objekt i një lloji whose shtresa, ngjyra, madhësia ose emri përputhet (QS) |
| `RASTERSNAP` |  | Ndez ose fik kapjen te vijat e fletëve të skanuara. |
| `RAY` |  | Rreze: një vijë ndërtimi nga një pikë, pa fund në një drejtim. |
| `RECOVER` |  | Hap një DXF ose DWG të dëmtuar: kalon pjesët që s'lexohen në vend që ta refuzojë skedarin, thotë çfarë u kalua, pastaj kontrollon dhe riparon vizatimin si AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Një polivijë e mbyllur nga dy kënde |
| `REDLINE` | `RDL` | Redline në revizion: lexo një paketë redline MarkupCraft, prano ose refuzo çdo ndryshim, rrethoji të pranuarit me një regjistër revizioni, dhe ruaj skedarin e përgjigjeve (RDL) |
| `REDO` |  | Ribëj atë që u zhbë |
| `REFCLOSE` |  | Mbaro redaktimin e një blloku në vend: ruaje, ose hidh ndryshimet |
| `REFEDIT` |  | Redakto një bllok në vend, aty ku ndodhet një referencë e tij, me pjesën tjetër të vizatimit të zbehur; REFCLOSE e ruan |
| `REGEN` | `RE` | Rindërto atë që vizatohet në këtë skedë nga vizatimi |
| `REGENALL` | `REA` | Rindërto atë që vizatohet në çdo skedë, panel dhe vizatim të hapur |
| `REGION` | `REG` | REGION (REG): krijo zona të sheshta (rajone) nga objekte të mbyllura, ose nga vija, harqe dhe polivija që mbyllen skaj më skaj. UNION, SUBTRACT dhe INTERSECT më pas i bashkojnë rajonet, dhe MASSPROP jep vetitë e prerjes së tyre. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Regjistro disa skanime: vendosi në një kornizë me çifte pikash të zgjedhura ose me synime, rafino me ICP, eksporto një LAS ose E57 |
| `REINIT` |  | Ringarko skedarin e aliaseve |
| `RENAME` | `-RENAME`, `REN` | Riemëro një shtresë ose një bllok (çdo objekt ose referencë ndjek) |
| `REVCLOUD` | `RC` | Re revizioni: rrethoje me një drejtkëndësh, shumëkëndësh, rrugë me dorë të lirë ose objekt (RC) |
| `REVOLVE` | `REV` | Rrotullo objekte 2D të mbyllura rreth një boshti në trupa të ngurtë (3D) |
| `ROTATE` | `RO` | Rrotullo objekte rreth një pike baze |
| `SAMPLES` | `SAMPLE` | Hap një nga vizatimet shembull të CadCraft (një grup arkitektonik, një as-built) për të mësuar prej tyre |
| `SAVE` | `QSAVE` | Shkarko vizatimin në formatin e tij (DWG ose DXF) |
| `SAVEAS` |  | Shkarko vizatimin si DWG ose DXF: zgjidh cilin |
| `SAYSEL` |  | Thuaj çfarë është përzgjedhur, një fjali për secilin. |
| `SCALE` | `SC` | Shkallëzo objekte rreth një pike baze |
| `SCALELISTEDIT` | `SCALELIST` | Shto, ndrysho dhe fshi shkallët e vetë vizatimit; shfaqen në listat e shkallës së dritares së pamjes dhe të shtypjes dhe ruhen në skedar (SCALELIST) |
| `SCANALIGN` | `SCL` | Rreshto një fletë të skanuar me dy pika: lëviz, rrotullo dhe, nëse zgjedh, shkallëzo. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Fut një vizatim të skanuar: një PNG, JPEG ose TIFF (një faqe ose të gjitha faqet e një skedari me shumë faqe) ose një faqe PDF që është figurë. |
| `SCANCLEAN` | `SCC` | Bëje një fletë të skanuar bardhë e zi dhe hiq njollat. |
| `SCANCROP` | `SCR` | Pri një fletë të skanuar në një dritare. |
| `SCANDESKEW` | `SCD` | Gjej këndin ku shtrihen vijat e gjata të një fletë të skanuar dhe rrotullo fletën drejt kur pranon këndin. |
| `SCANERASE` | `SCE` | Fshi një zonë të një fletë të skanuar: një drejtkëndësh, shumëkëndësh ose lasso. |
| `SCANINFO` | `SCI` | Shfaq skedarin origjinal të një fletë të skanuar dhe hapat e kryer që atëherë. |
| `SCANSCALE` | `SCS` | Shkallëzo një fletë të skanuar: zgjidh dy pika mbi të dhe shkruaj distancën e vërtetë midis tyre. |
| `SCANTRACE` | `SCT` | Gjurmo një fletë të skanuar në vija dhe harqe në një shtresë të re, me një tolerancë që cakton. Teksti dhe vijëzimi mbeten si raster. |
| `SELECT` |  | Zgjidh objekte tani (për P, Previous, në komandën e radhës) |
| `SELECTALL` | `AI_SELALL` | Zgjidh çdo objekt që mund ta ndryshosh në këtë skedë (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Zgjidh çdo objekt si ata që zgjedh: i njëjti lloj, shtresë dhe ngjyrë (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Shfaq panelin Grupi i Fletëve: fletë nga shumë vizatime, të numëruara, të publikuara si një PDF të vetme. |
| `SHORTCUTS` | `KEYS` | Jepi çdo komande një tastë të vetin (Ctrl ose Alt me një shkronjë, ose një tastë funksioni të lirë), i mbajtur në këtë shfletues ose aplikacion desktop. |
| `SHXFONTS` | `SHX` | Jepi CadCraft fonte SHX nga një dosje ose skedarë, që stilet e tekstit që i emërtojnë të vizatojnë me to (listo, hiq, kthe mbrapsht) |
| `SKETCHFIX` | `SKF` | Vizato vija me dorë të lirë; çdo një bëhet një vijë, rreth, hark, drejtkëndësh ose polivijë e pastër, e drejtuar dhe e bashkuar me të tjerat. |
| `SKETCHLIVE` | `SKL` | Skico me stilolaps: çdo goditje bëhet një vijë, rreth, hark ose drejtkëndësh i saktë kur e ngre stilolapsin, i kapur te vizatimi, me madhësinë për ta shkruar mbi të. |
| `SPLINE` | `SPL` | Vizato një spline përmes pikave (ose me një poligon kontrolli), ose kthe një polivijë në një të tillë |
| `SPLINEDIT` | `SPE` | Ndrysho një spline: pika përshtatjeje, pika kontrolli dhe peshat, hap ose mbyll, kthe mbrapsht, ose kthe në polivijë |
| `SPLIT` |  | Ndaj zonën e vizatimit në panele (si VPORTS në model; edhe nga një fletë) |
| `STEELMEMBER` | `SMEMBER` | Një element çeliku në 3D nga një profil standard: dy pika (një trari) ose një pikë baze dhe një lartësi (Column) |
| `STLOUT` |  | Eksporto modelin 3D si STL (milimetra) |
| `STRETCH` | `S` | Shtrirje: tërhiq një dritare që kryqëzon skajet për të lëvizur; ç'është brenda lëviz, pjesa tjetër mbetet (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stilet e tekstit: fonti, lartësia, gjerësia dhe prirja që merr teksti i ri (dialogu; -STYLE në rreshtin e komandave) |
| `SUBTRACT` | `SU` | Hiq trupa nga të tjerët (3D), ose rajone 2D nga rajone |
| `SWBOUT` | `SWMACRO` | Shkarko një makro për SolidWorks (.swb) që rindërton modelin si një skicë të vetme të kufizuar |
| `SWEEP` |  | Kalo objekte 2D të mbyllura përgjatë një rruge (vijë, polivijë, hark, rreth) në trupa të ngurtë (3D) |
| `TABLE` | `TB` | Krijo një tabelë: rreshta dhe kolona, ose nga qeliza të një fletëllogaritjeje në kujtesën e fragmenteve ose një skedar CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redakto një tabelë: shkruaj në një qelizë, fut dhe fshi rreshta e kolona, përmasa, qeliza të bashkuara, drejtim |
| `TABLEEXPORT` |  | Ruaj atë që shfaq një tabelë si skedar CSV |
| `TABLEPASTE` | `PASTETABLE` | Krijo një tabelë nga qelizat e një fletëllogaritjeje në kujtesën e fragmenteve |
| `TABLESTYLE` | `TS` | Stilet e tabelave: lartësitë e tekstit, drejtimi, margjina dhe kufijtë për rreshtin e titullit, të kokës dhe rreshtat e të dhënave |
| `TAGS` |  | Etiketa mbi referencat e blloqeve: përcakto një etiketë (lloji, vlerat e lejuara, blloqet ku zbatohet), vendose te referencat e përzgjedhura, dhe listoji si një tabelë që mund ta ruash si CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst me një rresht; Enter fillon rreshtin tjetër |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redakto tekstin në vend: zgjidh një tekst (ose kliko dy herë mbi të) (ED) |
| `TEXTMASK` | `TMASK` | Vendos një maskë sfondi pas teksteve (sfondin e vizatimit ose një ngjyrë), ose e heq. |
| `TEXTTOFRONT` |  | Sill të gjithë tekstin, përmasat dhe udhëheqësit përpara gjithçkaje tjetër. |
| `TOOLBAR` |  | Zgjidh çfarë shfaqin butonat e shiritit: ikona dhe tekst, vetëm ikona, ose vetëm tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Vendose shiritin lart, poshtë, majtas ose djathtas të dritares |
| `TOOLBARROWS` |  | Zgjidh sa rreshta përdor shiriti: përshtat, 2, ose 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Bëj shiritat mbi vizatim standardë ose kompakt |
| `TOUCHCROSSHAIR` | `TCX` | Kryqëzim i zhvendosur për vizatim me gisht: një gisht lëviz një kryqëzim që ndodhet sipër dhe anash, kështu gishti nuk e mbulon pikën. Ngritja e gishtit nuk zgjedh asgjë; butoni Click ose një prekje me gisht të dytë zgjedh te kryqëzimi, dhe mbajtja e Click ndërsa lëviz tërheq. Shtypja e gjatë ose butoni Enter është Enter. Dy gishta lëvizin dhe zmadhojnë. Opsionet: ON, OFF, Auto (ndezur vetëm aty ku gishti është treguesi i vetëm), Distance, Side. |
| `TOUR` | `TUTORIAL` | Bëje sërish turin e parë të vizatimit në gjashtë hapa |
| `TRIM` | `TR` | Pres objektet deri aty ku i kryqëzojnë të tjerët: kliko një pjesë, tërhiq nëpër disa, ose Shift+kliko për ta zgjatur |
| `TRIMEXTENDMODE` |  | Si nisin TRIM dhe EXTEND: 1 Quick (çdo objekt është skaj prerjeje ose kufi), 0 Standard (zgjidh skajet e para) |
| `TTR` |  | Një rreth tangjent me dy objekte, me një rreze që jep ti (njëlloj me CIRCLE T). |
| `TURNLEFT` |  | Kthe pamjen 90° majtas (drejtim akrepave të orës mbrapsht): UCS Z -90, dhe pamja ndjek. Asgjë në vizatim nuk lëviz. |
| `TURNRIGHT` |  | Kthe pamjen 90° djathtas (drejtim akrepave të orës): UCS Z 90, dhe pamja ndjek. Asgjë në vizatim nuk lëviz. |
| `TURNWORLD` |  | Kthehu te bota: UCS World, dhe pamja është sërish horizontale. |
| `TXT2MTXT` | `T2M` | Bashko tekste me një rresht në një tekst paragrafi, nga lart poshtë. |
| `UCS` |  | Sistemi yt koordinativ: një origjinë dhe një bosht X (origjina, kënd Z, 3point, OBject, Previous, World, NAmed). Pikat që shkruan, ortho, gjurmimi polar, rrjeti dhe teksti i ri e ndjekin; pamja kthehet që boshti i saj X të jetë horizontal. Asgjë në vizatim nuk lëviz. |
| `UNDO` | `U` | Zhbëj komandën e fundit |
| `UNGROUP` |  | UNGROUP: çmontoji grupet. Zgjidh objekte të grupeve, ose jep një Name. Objektet mbeten në vizatim. |
| `UNION` | `UNI` | Bashko trupa në një (3D), ose rajone 2D në një rajon |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Shfaq sërish çdo objekt të fshehur nga ISOLATEOBJECTS ose HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Si shfaqen dhe shkruhen gjatësitë: dhjetore, këmbë dhe inç, thyesa (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Llogarit sërish fushat, dhe zgjidh kur përditësohen vetë |
| `USDOUT` |  | Eksporto modelin 3D si USD (tekst .usda, binar .usdc ose një paketë .usdz) |
| `VIEW` | `-VIEW`, `V` | Pamjet standarde 3D, perspektivë ose paralele (3D) |
| `VIEWBASE` | `FLATSHOT` | Vendos një pamje të sheshtë 2D të trupave 3D (para, sipër, anë ose izometrike, vija të fshehura me vija të ndërprera) në një fletë ose në model |
| `VIEWLABEL` | `VL` | Titull pamjeje në një fletë që shfaq emrin e pamjes së dritares së pamjes së saj, dhe ndryshon me të. |
| `VOICE` |  | Ndez ose fik komandat me zë. Njihen në këtë kompjuter. |
| `VPCLIP` |  | Pri një dritare pamjeje të fletës në një objekt të mbyllur ose një shumëkëndësh të vizatuar; Delete e kthen sërish në drejtkëndësh |
| `VPLAYER` |  | Ngrij ose shkrij shtresa vetëm në disa dritare pamjeje (Freeze, Thaw, Reset), dhe zgjidh cilat shtresa fillojnë të ngrira në dritaret e reja (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Ndaj zonën e vizatimit në panele, secili me pamjen e vet (në një fletë: një dritare pamjeje, si MVIEW) |
| `VPVIEW` |  | Cakto çfarë shfaq një dritare pamjeje: zgjidh një dritare mbi modelin |
| `VSCURRENT` | `VS`, `SHADEMODE` | Stili vizual i pamjes 3D: me hije, skaje, vija të fshehura, tel, rreze-X |
| `WALL` | `WA` | Vizato mure 2D si një polivijë. Ato bashkohen dhe mbajnë dyer dhe dritare. |
| `WALLARC` | `WARC` | Vizato një hark muresh. Muret në plan janë të drejta, kështu që harku vizatohet si mure të shkurtra të drejta (15 gradë secili) që bashkohen. |
| `WALLDELSEG` |  | Fshi një pjesë muri midis dy pikash. Ajo që mbetet mbetet si një ose dy mure. |
| `WALLDIM` |  | Shkruaj një vlerë të re për një përmasë: muri në skajin e tij të largët lëviz pingul me vetveten, muri në skajin e parë mbetet, dhe muret e bashkuara me të ndjekin. |
| `WALLDISJOIN` |  | Zgjidh një mur afër një skaji për të ndaluar bashkimet në atë skaj: skaji vizatohet pingul dhe asgjë nuk e ndjek. Zgjidhe sërish për t'i lejuar. |
| `WALLGRID` |  | Kyç një mur me një vijë rrjeti: përgjatë saj, ose një skaj mbi të. Lëviz vijën me GRIDMOVE dhe muri ndjek. |
| `WALLHOLD` |  | Rreshto dhe kyç: një mur mban vendin e vet kundrejt një muri tjetër (në vijën e tij, ose në distancën që ka). Nëse lëviz njëri, tjetri ndjek. |
| `WALLHOLDDIM` |  | Kyç distancën midis dy mureve paralele. Nëse lëviz njëri, tjetri ndjek për ta mbajtur. |
| `WALLHOLDS` |  | Listo kyçjet e mureve. |
| `WALLJOINS` |  | Jepi çdo muri të një vizatimi më të vjetër ID-në e tij dhe ruaj bashkimet midis tyre. Kjo ndodh edhe në ndryshimin e parë që bën. |
| `WALLJOINSTYLE` |  | Kliko një kënd ku takohen dy mure skaj më skaj për të ndryshuar si vizatohet: me prerje këndore, me prerje të drejtë, ose e prerë drejt. T ndërron cilin mur e kalon. |
| `WALLOFFSET` | `WO` | Lëviz një mur pingul me vetveten për një distancë (muret e bashkuara me të ndjekin), ose krijo një kopje në atë distancë. |
| `WALLPICK` |  | Krijo mure mbi një vijë ose polivijë në vizatim, me vijat e bashkuara me të nëse thua Yes. |
| `WALLPOLY` | `WP` | Vizato mure rreth një shumëkëndëshi të rregullt me 3 deri 64 anë, si POLYGON. |
| `WALLRECT` | `WR` | Vizato katër mure të bashkuara nga dy kënde të kundërta, si RECTANG. |
| `WALLREJOIN` |  | Bëj dy pjesë të një muri sërish një mur. I pari mban vendin e vet në vizatim. |
| `WALLROT` |  | Vizato katër mure të bashkuara si një drejtkëndësh të rrotulluar me çdo kënd: fillimisht ana e parë, pastaj sa larg dalin. |
| `WALLSPLIT` | `WS` | Ndaj një mur në dy në një pikë ose aty ku kryqëzon një mur tjetër. Pjesët mbeten të bashkuara përveç nëse kërkon një hapësirë ose skaje të lira. Dyert dhe dritaret shkojnë me pjesën e tyre. |
| `WALLSPLITGAP` |  | Ndaj një mur duke lënë një hapësirë: shkruaj hapësirën, zgjidh murin, pastaj pikën. Pjesët mbajnë skaje të lira dhe mund të ribashkohen. |
| `WALLSTRETCH` |  | Shtrirje me dritare: skajet e mureve brenda saj lëvizin, muret tërësisht brenda lëvizin të tëra, dhe muret që futen në anët e tyre rrëshqasin me to. |
| `WALLTAN` |  | Vazhdo një mur me një hark që largohet nga ai përgjatë murit (vizatohet si mure të shkurtra të drejta). |
| `WALLTRACE` |  | Krijo mure rreth zonës më të vogël të mbyllur me vija dhe mure rreth pikës ku klikon. |
| `WALLUNHOLD` |  | Hiq kyçjet nga një mur (dhe kyçjet e mureve të tjerë me të). |
| `WBLOCK` | `W`, `-WBLOCK` | Shkruaj një bllok, disa objekte, ose të gjithë vizatimin në një skedar të ri DWG ose DXF (W) |
| `WEDGE` | `WE` | Një pykë: dy kënde dhe një lartësi; pjerret larg kndit të parë (3D) |
| `WHEREAMI` | `WHERE` | Thuaj ku është kursori. |
| `WHOHAS` |  | Thotë kush e ka hapur një vizatim. CadCraft Studio mban një skedar të vogël kyçjeje pranë çdo vizatimi të hapur (Plan.dwg.cclock: kush, që kur, cila version) dhe e heq kur mbyllet. Opsionet: Current (vizatimi i hapur), File (zgjidh një), FOlder (çdo vizatim në një dosje që është i hapur diku; kjo gjithashtu e lejon Studio të mbajë skedarë kyçjeje në atë dosje), Path (shkruaj një), Name (emri që shohin të tjerët). Një kyçje që nuk rifreskohet për pesë minuta thuhet e vjetëruar. Nuk është e disponueshme në shfletues. |
| `WINDOW` | `WN` | Vendos një dritare në një mur. |
| `XATTACH` | `XA` | Lidh një tjetër DWG ose DXF në këtë vizatim, të shfaqur vetëm për lexim (XREF i liston dhe i ringarkon) |
| `XCLIP` | `XC` | Pri referencat e blloqeve dhe vizatimet e lidhura në një drejtkëndësh ose shumëkëndësh, ose hiq prerjen. |
| `XLINE` | `XL` | Vijë ndërtimi, pa fund në të dy anët: përmes dy pikave, horizontale, vertikale, në një kënd, përgjysmuese e një këndi, ose e zhvendosur nga një vijë. |
| `XREF` | `XR`, `-XREF` | Vizatime të lidhura (referenca të jashtme): listo, bashkëngjit, ringarko, lidh, shkëput |
| `ZOOM` | `Z` | Shtrirja, ose një dritare |
