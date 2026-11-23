---
title: Harta e komandave: çfarë të shkruash
summary: Çdo komandë që ka CadCraft me emrat e saj të shkurtër, nga A te Z, e krijuar nga vetë programi, dhe zakonet nga programe të tjera vizatimi që ndryshojnë.
keywords: harta e komandave, komandat, aliasët, emra të shkurtër, nga vjen, lista e komandave, çfarë të shkruash, erase, trim, ekuivalent, dallime
from: 9426856f
---

CadCraft i merr emrat e komandave dhe emrat e shkurtër që njerëzit i njohin nga programe të tjera vizatimi: shkruaj `L` për një vijë, `TR` për ta prerë, `E` për ta fshirë. Kështu nuk ka tabelë përkthimi për të mësuar për shumicën e tyre: emri që e njeh këtu është ai që përdor. Lista më poshtë është çdo komandë që ka CadCraft, e krijuar nga vetë programi. {{key:Enter}} përsërit të fundit; `HELP` në rreshtin e komandës shfaq të njëjtën listë.

Ato që nuk janë të njëjta, ose nuk janë ndërtuar:

- **Ruaj** shkarkon një kopje në shfletues ({{cmd:SAVE}}, {{cmd:SAVEAS}}); në CadCraft Studio shkruan skedarin. Shih [Nga programe të tjera vizatimi](topic:coming-from).
- **PLOT** bën një PDF (edhe PNG dhe SVG), me një tabelë stilesh printimi; nuk ka menaxher faqeje.
- **DIMSTYLE** dhe **PEDIT** janë ndërtuar; **PEDIT** nuk ka opsionin Edit-vertex (këtë e bëjnë grips).
- **TABLE** nuk është ndërtuar; {{cmd:XREF}}, {{cmd:SPLINE}} dhe {{cmd:WBLOCK}} janë.
- Komandat e një rutine (AutoLISP `C:NAME`) shfaqen pasi e ngarkon me {{cmd:APPLOAD}}; nuk listohen këtu.

## Të gjitha komandat (402)

| Komanda | Emrat e shkurtër | Çfarë bën |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Rrotullon pamjen 3D me butonin e majtë |
| `ACCESS` | `AX` | Ndez ose fik vizatimin pa shikim: rezultatet lexohen nga lexuesi i ekranit, ka një kursor tastiere mbi vizatim, tinguj kapjeje dhe komanda të folura. |
| `ALIASEDIT` | | Redakton aliasët e komandave në një skedar teksti (formatin e njohur L, *LINE) |
| `ALIGN` | `AL` | Lëviz dhe rrotullon objektet që pikat burimore të bien mbi pikat e destinacionit (një, dy ose tre çifte), dhe i shkallëzon nëse do |
| `ALIGNPANEL` | `ALP` | Hap panelin Përputh dhe shpërndaj |
| `ALIGNTO` | | Vendos në të njëjtën vijë skajet e majta, qendrën, të djathtat, sipërmet, mesin ose poshtët e objekteve të zgjedhura, mbi përzgjedhjen, objektin e parë ose të fundit të zgjedhur, ose një pikë |
| `ANNOALLVISIBLE` | `ANNOALL` | Shfaq objektet anotative në çdo shkallë, ose vetëm aty ku shkalla e dritares së pamjes (ose e vizatimit) është në listën e tyre |
| `ANNOSCALE` | `CANNOSCALE` | Cakton shkallën e anotimit të vizatimit: tekstet dhe përmasat anotative riçmohen që të printohen në të njëjtën madhësi |
| `APPLOAD` | `AP` | Ngarko aplikacione: rutina LISP (.lsp) dhe skedarët e tyre të dialogut (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Hark: 3-Point, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | Sipërfaqja dhe perimetri me pika ose të një objekti; Add dhe Subtract mbajnë një total të vazhdueshëm (AA) |
| `ARRAY` | `AR` | Kopje në rreshta dhe kolona, ose rreth një qendre (AR) |
| `ARRAYASSOCIATIVITY` | | Cakton nëse komandat ARRAY bëjnë grupe që mbeten të redaktueshëm (1) ose kopje të thjeshta (0) |
| `ARRAYCLOSE` | | Mbaron redaktimin e objekteve burimore të një grupi |
| `ARRAYEDIT` | | Ndryshon një grup të bërë me opsionin Associative: numrat, hapësirat, objektet burimore, një artikull |
| `ARRAYPATH` | | Kopje të objekteve përgjatë një vije, harku, polivijeje ose kurbe tjetër |
| `ARRAYPOLAR` | | Kopje rreth një pike qendrore |
| `ARRAYRECT` | | Kopje në rreshta dhe kolona |
| `ASBUILT` | `ASB` | ASBUILT lexon pikat e ndërtimit të matura nga një ekip (CSV / TXT, siç i shkruan EXPORTPOINTS) dhe i krahason me pikat e vizatimit: brenda ose jashtë tolerancës, të pamatura, shtesë. I shënon në shtresën AS-BUILT dhe shkarkon një raport CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Përcakton një atribut (një etiketë për të cilën një bllok kërkon një vlerë) për ta vënë në një bllok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Redakton vlerat e atributeve të një reference blloku në rreshtin e komandës, një pas tjetrit (Enter mban një vlerë) |
| `ATTSYNC` | | Sjell referencat e një blloku në përputhje me përkufizimet e atributeve: të rejat shtohen me parazgjedhjet e tyre, të hequrat largohen, pozicionet dhe teksti rivendosen; vlerat mbahen |
| `AUDIT` | | Kontrollon vizatimin e hapur për dëmtime: numra që nuk janë të fundëm, objekte pa madhësi, shtresa që mungojnë, blloqe, stile dhe lloje vijash, blloqe që përmbajnë veten, id të përbashkëta, përmasa dhe vijëzime të prishura. Liston çfarë gjen sipas llojit dhe pyet para se të rregullojë; rregullimi është një hap zhbërjeje. |
| `AUNITS` | `ANGUNITS` | Si shfaqen dhe shkruhen këndet: gradë dhjetore, gradë-minuta-sekonda ose drejtime topografike si N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Plotësimi automatik i vizatimit ndezur ose fikur, ose liston çfarë sugjerojnë modelet e vizatimit tani. |
| `AUTOCONSTRAIN` | | Shton kufizime të përputhura, horizontale dhe vertikale aty ku gjeometria është tashmë afër |
| `AUTODIM` | `ADIM` | Përmasë sipas rregullave: madhësia e përgjithshme, zinxhirë përgjatë anëve, hapje, diametra vrimash dhe hapësira rrjete, pa përsëritur ç'është tashmë e përmasuar. |
| `AUTOSHEET` | `ASH` | Shtrin fletët vetë: zgjedh letrën dhe shkallët standarde dhe vendos çdo pamje me një titull dhe një bllok titulli. |
| `BATTMAN` | | Menaxheri i atributeve të blloqeve: renditja, etiketat, kërkesat, parazgjedhjet dhe mënyrat e atributeve të një blloku, pastaj referencat e tij përditësohen |
| `BCLOSE` | | Mbyll redaktuesin e blloqeve: ruaj bllokun ose hiq ndryshimet |
| `BCONVERT` | | BCONVERT gjen gjeometri që përsëritet dhe e kthen në referenca blloku. Zgjidh objektet që përsëriten: çdo grup tjetër objektesh në hapësirën e hapur që është e njëjta gjeometri, e zhvendosur dhe e rrotulluar me çdo kënd, gjendet, dhe me Mirrored ose Scaled të ndezur gjithashtu gjenden pasqyrime dhe kopje në madhësi tjetër. Jepi bllokut të ri një emër dhe një pikë bazë; zgjedhja dhe çdo kopje bëhen referenca të tij, secila me rrotullimin dhe shkallën e vet. Ose zgjidh Block dhe emëro një bllok ekzistues për të gjetur kopje të lira të objekteve të tij. Një kopje duhet të ketë të njëjtën shtresë, ngjyrë, lloj vije dhe trashësi vije, përveç nëse Properties është vendosur në Ignore. Objektet në shtresa të kyçura lihen rehat. Një hap zhbërjeje. |
| `BEDIT` | `BE` | Redaktuesi i blloqeve: redakto objektet dhe atributet e një blloku; BCLOSE ruan (BE) |
| `BLEND` | | BLEND: një spline midis skajeve të dy kurbave të hapura, zgjedhur afër skajeve për t'u bashkuar. CONtinuity: Tangent ndjek të dy drejtimet, Smooth ndjek edhe mënyrën si lakohen. |
| `BLOCK` | `B`, `BMAKE` | Bën një bllok nga objekte (ato bëhen një referencë) |
| `BLOCKREPLACE` | | BLOCKREPLACE: çdo referencë e një blloku bëhet referencë e një tjetri, në të njëjtin vend me të njëjtën shkallë dhe rrotullim. Vlerat e atributeve që kanë të dy blloqet mbahen. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE shfaq panelin e Blloqeve me kursorin në filtrin e tij. Paneli shfaq një figurë për çdo bllok (ato të vendosur më së fundi të parët), si listë ose rrjetë; kliko një figurë ose zvarrite mbi vizatim për ta vendosur bllokun me INSERT. Te Libraries, shto një skedar DWG ose DXF tënd: blloqet e tij listohen me figura dhe kopjohen në këtë vizatim kur vendos një. Në CadCraft Studio mund të shtohet edhe një dosje vizatimesh, dhe skedarët dhe dosjet mbahen mend. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolonat, grupimi, renditja, titulli, totalet dhe shënimet e një tabele listë materialesh |
| `BOMEXPORT` | | Ruan një tabelë listë materialesh si skedar .csv |
| `BOMTABLE` | `BOM` | Një tabelë e gjallë listë materialesh e një zone, ose e gjithë vizatimit |
| `BOMUPDATE` | | Përditëson çdo tabelë listë materialesh tani, edhe ato të ngrira |
| `BOMZONE` | `BZONE` | Një zonë me emër të vizatimit për një listë materialesh: dy qoshe, një shumëkëndësh, ose konturi i një objekti të mbyllur |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): zgjidh një pikë brenda një zone të mbyllur dhe merr një polivijë të mbyllur rreth saj. Harqet mbeten harqe. Islands vizaton konturet e zonave brenda saj gjithashtu. |
| `BOX` | | Një kuti: dy qoshe dhe një lartësi (3D) |
| `BPARAMETER` | `BPARAM` | Nuk është ndërtuar ende: shtimi i një parametri (si Visibility) te një bllok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametrat e blloqeve: parametra me emër me formula, dhe disa parametra dukshmërie në një bllok. Punon në redaktuesin e blloqeve (cakton objektet e zgjedhura në një gjendje) dhe mbi një referencë të zgjedhur (vlerat dhe gjendjet e veta). |
| `BREAK` | `BR` | Pre një vijë, hark, rreth ose polivijë midis dy pikave (BR) |
| `BREAKATPOINT` | | Ndan një vijë, hark ose polivijë në dy në një pikë |
| `BREAKLINE` | | Vizaton një vijë me një simbol prerjeje; madhësia e saj dhe zgjatja përtej skajeve mbahen mend. |
| `BREPLACE` | | BREPLACE zëvendëson një bllok me një tjetër. Të zgjedhura: zgjidh referencat e blloqeve dhe emëro bllokun për ta përdorur në vend të tyre. Të gjitha: emëro një bllok dhe zëvendësuesin e tij, dhe çdo referencë në çdo hapësirë dhe brenda blloqeve të tjerë ndryshon. Një referencë mban vendin, shkallën, rrotullimin dhe shtresën e saj, dhe vlerat e atributeve që kanë të dy blloqet; vlerat që bllokut të ri nuk i kanë vend bien dhe emërohen. |
| `BSEARCH` | | BSEARCH gjen blloqe. Emri: pjesë e një emri blloku, ose një model me * dhe ?. Atributi: një vlerë (ose TAG=vlerë) e mbajtur nga atributet e një reference. Gjeometria: zgjidh objekte ose një referencë blloku, dhe blloqet me formë të paktën 85% të ngjashme listohen, më i miri i pari; madhësia, rrotullimi dhe pasqyrimi nuk numërohen. Referencat e gjetura në hapësirën e hapur zgjidhen, gati për komandën tjetër. |
| `BURST` | | Shpërthen referencat e blloqeve dhe mban atë që thonë atributet e tyre: çdo vlerë bëhet tekst në shtresën e atributit. |
| `BVHIDE` | `BVH` | Në redaktuesin e blloqeve: fsheh objektet në gjendjen aktuale të dukshmërisë. |
| `BVSHOW` | `BVSH` | Në redaktuesin e blloqeve: shfaq objektet që gjendja aktuale e dukshmërisë i fsheh (shfaqen të zbehura për t'u zgjedhur). |
| `BVSTATE` | `BVS` | Në redaktuesin e blloqeve, te një bllok me gjendje dukshmërie: kalo në një gjendje, ose shto, riemëro ose fshi një. |
| `CAL` | | Llogarit një gjatësi ose numër: + − * / dhe kllapa, siç i shkruan kudo |
| `CENTERLINE` | `CL` | Vijë qendrore midis dy vijave: në mes të tyre, ose përgjatë bisektorit kur takohen (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Shenja e qendrës: një kryq në qendrën e një rrethi ose harku, me vija qendrore deri pak përtej tij (CM) |
| `CHAMFER` | `CHA` | Pjerr qoshen midis dy vijave (D dy distanca, A gjatësi dhe kënd, P çdo qoshe e një polivijeje) |
| `CHSPACE` | | CHSPACE: zhvendos objektet mes një fletë dhe modelit përmes një dritareje pamjeje. Shkallëzohen dhe rrotullohen që të duken njësoj nga ana tjetër. Në një fletë shkojnë te modeli; ndërsa punon përmes një dritareje pamjeje (MSPACE) vijnë në fletë. |
| `CIRCLE` | `C` | Qendra dhe rrezja, diametri, 2 ose 3 pika |
| `CLASS` | | Vendos objektet e zgjedhura në një klasë, ose kur nuk ka asgjë të zgjedhur cakton klasën aktive (? i liston) |
| `CLASSES` | `CLS` | Paneli i Klasave: klasat renditin objektet mbi shtresa; i shfaq, fsheh dhe i stilon, dhe i mbishkruan për çdo dritare pamjeje (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ankoro ose lundro rreshtin e komandës, bëje një rresht, cakto rreshtat e historikut, ose hap historikun (F2) |
| `COMPARESETTINGS` | `CMPSET` | Krahason stilet e përmasave, stilet e tekstit, shtresat, fletët ose njësitë: dy në këtë vizatim, ose ky vizatim kundrejt një tjetri të hapur, dhe kopjo një vlerë. |
| `CONSTRAINTBAR` | `CBAR` | Shfaq ose fsheh shiritat e kufizimeve (Showall / Hideall, ose për objekt) |
| `COPY` | `CO`, `CP` | Kopjo objekte, sa herë klikon |
| `COPYBASE` | | Kopjo objekte në kujtesën e ndërmjetme me një pikë bazë që zgjedh |
| `COPYCLIP` | | Kopjo objekte në kujtesën e ndërmjetme (Ctrl+C); PASTECLIP i vendos |
| `COUNT` | `BCOUNT` | Numëro referencat e blloqeve: zgjidh një për të zgjedhur dhe numëruar çdo referencë të blloqut të tij |
| `COUNTTABLE` | | Vendos një tabelë numrash blloqesh |
| `CREDITS` | | Vendos kreditet e Bibliotekës në vizatim si tabelë. Ekzekutoje sërish për ta përditësuar tabelën nga elementet e vizatimit tani. |
| `CURSORSIZE` | | Madhësia e kryqëzores: 100 e nxjerr nga skaji në skaj të vizatimit (Cilësimet › Kursori › Ekran i plotë) |
| `CUTCLIP` | | Prit objekte në kujtesën e ndërmjetme (Ctrl+X): kopjo, pastaj fshi |
| `CYLINDER` | `CYL` | Një cilindër: qendra, rrezja dhe lartësia (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listo blloqet, atributet e tyre dhe vetitë e objekteve si tabelë në vizatim ose skedar CSV |
| `DATALINK` | `DL` | Një tabelë nga një skedar CSV që mban mend skedarin, që të lexohet sërish |
| `DATALINKUPDATE` | `DLU` | Lexo sërish skedarin e një lidhjeje të dhënash dhe mbush sërish tabelat e tij |
| `DCALIGNED` | `DCALI` | Kufizim përmasor: distanca reale mes pikave, një pike dhe një vije, ose dy vijave |
| `DCANGULAR` | `DCANG` | Kufizim përmasor: këndi mes dy vijave, ose i një harku |
| `DCCONVERT` | | Kthen përmasat e vizatuara mbi gjeometri të kufizueshme në kufizime përmasore |
| `DCDIAMETER` | `DCDIA` | Kufizim përmasor: diametri i një rrethi ose harku |
| `DCDISPLAY` | | Shfaq ose fsheh kufizimet përmasore në vizatim |
| `DCHORIZONTAL` | `DCHOR` | Kufizim përmasor: distanca horizontale |
| `DCLINEAR` | `DCLIN` | Kufizim përmasor: distanca horizontale ose vertikale, nga vendi ku e vendos |
| `DCRADIUS` | `DCRAD` | Kufizim përmasor: rrezja e një rrethi ose harku |
| `DCVERTICAL` | `DCVER` | Kufizim përmasor: distanca vertikale |
| `DELBLOCKS` | | Fshi blloqe: çdo referencë (edhe ato të brendshme, në çdo fletë) dhe përkufizimet |
| `DELCONSTRAINT` | `DELCON` | Heq çdo kufizim (gjeometrik dhe përmasor) nga objektet që zgjedh |
| `DELOPENING` | | Heq një derë ose dritare nga një mur. |
| `DESCRIBE` | `DESC` | Thotë ç'mban vizatimi: sa objekte, çfarë lloji, sa i madh, ç'është zgjedhur. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Pastron zgjedhjen (Esc) |
| `DETAILS` | `DET` | Detajet e vetë zyrës tënde, të gjetura për atë që vizaton: gjej, shto një bllok, listo, hiq, ndiz ose fik sugjerimet. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Vizato një diagram nga tekst: një diagram rrjedhe Mermaid, një diagram komponentësh PlantUML, D2, një listë nga-te ose XML draw.io, si blloqe dhe lidhje që mund t'i redaktosh |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distanca reale mes dy pikave |
| `DIMANGULAR` | `DAN`, `DIMANG` | Këndi mes dy vijave, i një harku, ose me tre pika |
| `DIMARC` | `DAR` | Përmasë e gjatësisë së harkut: distanca përgjatë një harku, me simbolin e harkut (DAR) |
| `DIMASZ` | | Cilësim i përmasës: madhësia e shigjetës |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Përmasa të stivosura nga një vijë bazë |
| `DIMBREAK` | `DBREAK` | Prish vijat e përmasës dhe të zgjatjes aty ku kryqëzojnë objekte të tjerë (Auto), mes dy pikave (Manual), ose heq prishjet |
| `DIMCONSTRAINT` | `DCON` | Kufizime përmasore: lineare, e përputhur, këndore, rreze, diametër, konverto |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Një zinxhir përmasash, secila nga fundi i së fundit |
| `DIMDEC` | | Cilësim i përmasës: vende dhjetore |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diametri i një harku ose rrethi |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liron përmasat nga objektet me të cilat janë lidhur (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ndrysho tekstin e përmasës (Home, New text, Rotate) ose e prirë vijat e zgjatjes (Oblique) |
| `DIMEXE` | | Cilësim i përmasës: zgjatja përtej vijës së përmasës |
| `DIMEXO` | | Cilësim i përmasës: largësia nga origjina |
| `DIMGAP` | | Cilësim i përmasës: hapësira rreth tekstit |
| `DIMINSPECT` | | Përmasë kontrolli: një kornizë rreth vlerës me një etiketë dhe sa shpesh kontrollohet pjesa |
| `DIMJOGGED` | `DJO`, `JOG` | Përmasë rrezeje me thyerje: një rreze e vizatuar nga një pikë më e afërt kur qendra është larg (DJO) |
| `DIMJOGLINE` | `DJL` | Shton një simbol thyerjeje te një vijë përmase lineare ose e përputhur, për të treguar se distanca nuk është vizatuar në përmasë (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distanca horizontale ose vertikale (R për çdo kënd) |
| `DIMLUNIT` | | Cilësim i përmasës: formati i gjatësisë (1 shkencor, 2 dhjetor, 3 inxhinierik, 4 arkitekturor, 5 thyesor) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Përmasë ordinate: distanca X ose Y e një pike nga origjina UCS, mbi një udhëheqës (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Mbishkruan variablat e përmasës te përmasat e zgjedhura pa e ndryshuar stilin e tyre; Clear i kthen në stil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Rrezja e një harku ose rrethi |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Lidh pikat e një përmase me objekte, që të ndjekë dhe të matet sërish kur ata lëvizin (DRE) |
| `DIMSCALE` | | Cilësim i përmasës: shkalla e përgjithshme (madhësitë × kjo) |
| `DIMSPACE` | | Hapësirë e barabartë mes përmasave paralele, e matur nga një përmasë bazë (0 i vendos në rresht, Auto është dyfishi i lartësisë së tekstit) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Krijo, ndrysho, cakto aktualen, fshi, zbato dhe krahaso stile përmasash të emëruara (dialogu; -DIMSTYLE në rreshtin e komandës) |
| `DIMTEDIT` | `DIMTED` | Lëviz tekstin e përmasës majtas, djathtas ose në qendër të vijës së përmasës, ose e kthen |
| `DIMTEXTUNIT` | `DTU` | Teksti i përmasës në mm, cm, m ose km, ose në njësitë e vetë vizatimit: përmasat e zgjedhura, ose ato të reja (DTU) |
| `DIMTXT` | | Cilësim i përmasës: lartësia e tekstit |
| `DIST` | `DI` | Distanca dhe këndi mes dy pikave |
| `DISTRIBUTE` | | Shpërndaj objektet e zgjedhura në mënyrë të barabartë, anash ose lart e poshtë: hapa të barabartë midis qendrave, ose hapësira të barabarta; dy të jashtmet mbeten |
| `DIVIDE` | `DIV` | DIVIDE (DIV): shenja që pritin një vijë, hark, rreth, polivijë, spline ose elips në pjesë të barabarta. Pika, ose me Block një bllok në çdo shenjë. |
| `DOCUMENTS` | `DOCS` | Hap panelin e Dokumenteve: kontrollo vizatimet nxjerr dhe fut, revizionet, gjendjet e publikimit dhe miratimin për një dosje projekti |
| `DOOR` | `DR` | Vendos një derë në një mur. Ana ku klikon është ana ku hapet. |
| `DRAWORDER` | | Ndrysho renditjen e vizatimit: sill objektet përpara, dërgoji prapa, ose vendosi mbi ose nën objekte të tjerë. |
| `DUPLICATE` | `DUP` | Një kopje që lëviz me treguesin: kliko për ta vendosur (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Vetitë e vizatimit: titulli, autori dhe të tjera, dhe çifte emri-vlerë të tuat |
| `DXFOUT` | | Shkarko vizatimin si DXF R12 (Ruaj mban formatin e vet) |
| `EATTEDIT` | `DDATTE` | Redakto atributet e një reference blloku: vlerat, tekstin dhe vetitë, një atribut në çdo herë |
| `ELLIPSE` | `EL` | Pikat fundore të boshtit dhe gjysmëboshti tjetër |
| `ERASE` | `E`, `DELETE` | Hiq objekte |
| `EXPLODE` | `X` | Thyen polivijat, blloqet dhe përmasat në pjesët e tyre |
| `EXPORT` | `EXP` | Ruaj një kopje të vizatimit në një lloj skedari që shkruan një shtojcë |
| `EXPORT3D` | `3DEXPORT` | Eksporto modelin 3D: GLB, OBJ ose STL |
| `EXPORTPOINTS` | `EXPPTS` | Shkruaj pika, dhe pikat e futjes së blloqeve me një atribut si përshkrim, në një skedar CSV ose TXT (PNEZD, PENZD ose XYZ) për programe BIM dhe topografie |
| `EXTEND` | `EX` | Zgjat objekte deri te të tjerët: kliko pranë një skaji, zvarrit mes disa, ose Shift+klik për të prerë |
| `EXTRIM` | | EXTRIM: zgjidh një skaj prerës, pastaj një anë. Gjithçka që kryqëzon skajin pritet në atë anë. Pjesët që do të largoheshin shfaqen kur lëviz treguesin. |
| `EXTRUDE` | `EXT` | Nxjerr objekte 2D të mbyllura në trupa të ngurtë (3D) |
| `FIELD` | | Vendos një fushë në tekst, në një qelizë tabele ose në një atribut: një datë, emri i skedarit, numri i fletës, një veti vizatimi, sipërfaqja ose gjatësia e një objekti, ose një formulë |
| `FILLET` | `F` | Rrumbullakos ose katrorizo qoshen mes dy objekteve (R rreze, P çdo qoshe e një polivijeje, M disa) |
| `FIND` | | Gjej dhe zëvendëso fjalë në tekst, vlera atributesh dhe tekst përmase |
| `FLATTEN` | | Vendos lartësinë (Z) dhe trashësinë e objekteve të zgjedhura në 0, edhe në blloqet që përdorin. |
| `FLOOR` | | Zgjidh katin ku vizaton, shto një, ose zhvendos ose kopjo zgjedhjen tek ai. |
| `FLOORLAYERS` | | Kthen katet në shtresa të quajtura Floor-Layer, për një skedar që do t'i dërgohet dikujt pa kate. |
| `FLOORS` | `FLR` | Hap panelin e Katëve: stivos katet në një hapësirë modeli. |
| `GCCOINCIDENT` | | Kufizim: dy pika takohen, ose një pikë mbetet mbi një objekt |
| `GCCOLLINEAR` | | Kufizim: dy vija mbeten në një vijë |
| `GCCONCENTRIC` | | Kufizim: dy rrethe ose harqe kanë një qendër të përbashkët |
| `GCEQUAL` | | Kufizim: dy vija mbeten me të njëjtën gjatësi, ose dy rrethe/harqe me të njëjtën rreze |
| `GCFIX` | | Kufizim: një pikë ose një objekt i tërë mbetet aty ku është |
| `GCHORIZONTAL` | | Kufizim: një vijë (ose dy pika) mbetet horizontale |
| `GCPARALLEL` | | Kufizim: dy vija mbeten paralele |
| `GCPERPENDICULAR` | | Kufizim: dy vija mbeten në kënd të drejtë |
| `GCSYMMETRIC` | | Kufizim: dy pika, vija ose rrathë pasqyrojnë njëri-tjetrin përmes një vije |
| `GCTANGENT` | | Kufizim: një vijë dhe një rreth ose hark (ose dy prej tyre) mbeten tangjente |
| `GCVERTICAL` | | Kufizim: një vijë (ose dy pika) mbetet vertikale |
| `GDSIN` | `GDS` | Shiko një skemë IC (një skedar GDSII): çdo shtresë dhe llojë të dhënash si shtresë vizatimi, e sheshtë, në njësi përdoruesi; vetëm për shikim dhe matje (provë laboratorike) |
| `GEOMCONSTRAINT` | `GCON` | Kufizime gjeometrike: horizontale, vertikale, paralele, tangjente, bashkëpikë… |
| `GLBOUT` | | Eksporto modelin 3D si GLB (glTF) |
| `GRADIENT` | `GD` | Mbush një zonë me gradient të një ose dy ngjyrash |
| `GRID` | | Cakto rrjetën: distanca mes vijave, çdo vijë e N-të si vijë kryesore, ON ose OFF, ose Auto për ta ndjekur sërish zmadhimin |
| `GRIDMOVE` | `GM` | Lëviz një vijë rrjete dhe ç'varet prej saj: muret shtrihen, kolonat, flluskat dhe etiketat lëvizin, përmasat ndjekin. |
| `GROUP` | `G` | GROUP (G): i jep objekteve të zgjedhura një emër që kanë të përbashkët. Një klikim mbi një prej tyre zgjedh të gjitha. Enter te emri bën një grup pa emër. |
| `GROUPEDIT` | | GROUPEDIT: ndrysho një grup. Zgjidh një nga objektet e tij ose jepi Name, pastaj Add ose Remove objekte, REName e riemëron, ndryshon Description-in e tij, ose thotë nëse një klikim e zgjedh të tërë. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Mbush një zonë me mbushje të ngurtë ose me model: kliko brenda saj, ose zgjidh objekte të mbyllura (H) |
| `HATCHEDIT` | `HE` | Ndrysho një vijëzim: modelin, shkallën, këndin, origjinën dhe lidhjen me një kufi. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Rikrijon polivijat kufitare nga një vijëzim, të lidhura me të ose jo |
| `HATCHTOBACK` | | Dërgo çdo vijëzim prapa çdo gjëje tjetër. |
| `HELP` | `?` | Kjo listë |
| `HIDEOBJECTS` | | Fsheh objektet e zgjedhura deri te UNISOLATEOBJECTS. Nuk ruhet me vizatimin. |
| `HISTORY` | `HIST` | HISTORY (HIST): versionet e këtij vizatimi — kopjet e mbajtura në këtë kompjuter kur Studio e ruan, dhe versionet e cloud-it — për t'i hapur, rikthyer dhe krahasuar me ç'ndryshoi, të treguar me ngjyrë. |
| `ID` | | Koordinatat e një pike |
| `IMAGE` | `IM` | Jep CadCraft skedarët e figurave që përdor një vizatim (një DWG ruan vetëm ku ishin). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Vendos një figurë (PNG ose JPEG) nga një skedar. |
| `IMAGECLIP` | `ICL` | Pret një figurë me një drejtkëndësh ose shumëkëndësh, ose heq prerjen e saj. |
| `IMPORT` | `IMP` | Importo një skedar të një lloji që e lexon një shtojcë, në këtë vizatim |
| `INSERT` | `I`, `DDINSERT` | Vendos një bllok (S shkallë, R rrotullo); F nga një skedar DWG/DXF, L nga biblioteka |
| `INTERSECT` | `IN` | Mban vetëm atë që kanë trupat e ngurtë të përbashkët (3D), ose sipërfaqen që kanë të përbashkët zonat 2D |
| `ISODRAFT` | | ISODRAFT: vizatim izometrik ndezur ose fikur, ose drejt e në planin Left, Top ose Right. Kur është i ndezur, Ortho dhe gjurmimi polar ndjekin dy boshtet e planit, rrjeta vizatohet izometrike, dhe ELLIPSE ka Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Shfaq vetëm objektet e zgjedhura; çdo gjë tjetër në këtë hapësirë fshihet deri te UNISOLATEOBJECTS. Nuk ruhet me vizatimin. |
| `ISOPLANE` | | ISOPLANE: zgjidh planin izometrik ku vizaton: Left, Top ose Right. Enter kalon te tjetri, ashtu si bën F5 kur vizatimi izometrik është i ndezur. |
| `JOIN` | `J` | Bashko vija, harqe dhe polivija që takohen skaj më skaj në një polivijë; vija në një vijë në një vijë (J) |
| `LASER` | `LASERCUT` | Hap panelin Lazer: dërgo shtresat te një prerës ose gdhendës lazer (G-code GRBL) |
| `LASSOMODE` | | Shtyp dhe zvarrit vizaton një lasso (1) ose një drejtkëndësh (0) |
| `LAYDEL` | | Fshi një shtresë dhe çdo objekt mbi të (në model, në fletë dhe në blloqe) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Hap menaxherin e shtresave: çdo shtresë në një tabelë |
| `LAYERPANEL` | | Shfaq panelin e shtresave |
| `LAYFRZ` | | Ngrij shtresën e çdo objekti që zgjedh |
| `LAYGROUP` | `LG` | Grupo shtresat në dosje në panelin Shtresat. |
| `LAYISO` | | Izolo shtresat e objekteve të zgjedhura (çdo shtresë tjetër fiket) |
| `LAYLOCKFADE` | | Cakto sa zbehen objektet në shtresa të kyçura, dhe nëse një klikim mund t'i zgjedhë. |
| `LAYMCUR` | | Bëj shtresën e objektit që zgjedh aktuale |
| `LAYMRG` | | Bashko shtresa: objektet e tyre zhvendosen te një shtresë synim, dhe shtresat e bashkuara zhduken |
| `LAYOFF` | | Fik shtresën e çdo objekti që zgjedh |
| `LAYON` | | Ndiz çdo shtresë |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Një fletë e re me një bllok titulli dhe një dritare pamjeje |
| `LAYTHW` | | Shkrin çdo shtresë |
| `LAYUNISO` | | Ndiz sërish shtresat që LAYISO i fiku |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Kthen tekstin e shkruar me fonte të vjetra vietnameze (fonte TCVN3 / ABC si .VnTime, dhe fonte VNI si VNI-Times) në Unicode. Ky tekst shfaqet tashmë ashtu si lexohet; kjo e rishkruan përfundimisht, me një numërim dhe një hap zhbërjeje. |
| `LENGTHEN` | `LEN` | Zgjat ose shkurton vija, harqe dhe polivija: me një sasi, një përqindje, deri në një total, ose duke zvarritur (LEN) |
| `LIBRARY` | `LIB` | Paneli i bibliotekës: vendos elemente, kontrollo për përditësime, kredite |
| `LIMITS` | | Cakto kufijtë e vizatimit: ON, OFF, ose cepat e poshtëm majtas dhe të sipërm djathtas. Me kufijtë ON, pikat jashtë tyre refuzohen |
| `LINE` | `L` | Segmente të drejta, secili objekt i vetë |
| `LINETYPE` | `LT`, `CELTYPE` | Lloji i vijës që marrin objektet e reja (sipas shtresës, sipas bllokut, ose një me emër) |
| `LINKVIEWS` | `SYNCVIEWS` | Lëviz dhe zmadho çdo panel së bashku (ekran i ndarë), për të krahasuar dy vizatime ose revizione |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ose VLIDE) hap redaktuesin LISP: një dritare për të shkruar, ngarkuar dhe provuar një rutinë. Ngarko në vizatim lexon çdo formë, si bën ngarkimi i skedarit me APPLOAD, dhe krijon komandat e saj. Ekzekuto zgjedhjen vlerëson format e zgjedhura, ose formën ku është kursori. Konsola tregon çfarë shtypi rutina dhe çdo gabim me rreshtin e vet. Kllapa përputhëse shënohet ndërsa shkruan dhe Enter zbraz rreshtin e ri. New, Open dhe Save punojnë me një skedar .lsp. Listat pranë tekstit tregojnë funksionet që përcakton rutina, ato që thërret e që ky LISP nuk i ka ende, dhe çdo funksion që ka. Dritarja nuk e bllokon vizatimin, kështu që një rutinë mund të kërkojë pika; Stop ose Esc përfundon një rutinë që po punon. |
| `LIST` | `LI`, `LS` | Përshkruan objektet në historik |
| `LTSCALE` | `LTS` | Shkalla e llojit të vijës së vizatimit (çdo vijë dhe hapësirë shumëzohet me të) |
| `LWDISPLAY` | `LWT` | Shfaq ose fsheh trashësitë e vijave në ekran (butoni LWT në shiritin e statusit) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Trashësia e vijës që marrin objektet e reja (sipas shtresës, sipas bllokut, paracaktuar, ose mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | shtresa harte nën hapësirën e modelit: sistemi koordinativ i vizatimit, pllakat, WMS, WMTS, ArcGIS, figura |
| `MASSPROP` | | MASSPROP: vetitë e seksionit të rajoneve dhe objekteve të mbyllura: sipërfaqja, perimetri, qendra e rëndësisë, momentet dhe produkti i inercisë, rrezet e rrotullimit dhe boshtet kryesore. Saktë për vija dhe harqe. Mund ta shkruajë raportin në një skedar teksti. |
| `MATCHPROP` | `MA`, `PAINTER` | Përputh vetitë: kopjo shtresën, ngjyrën dhe të tjera të një objekti mbi të tjerë (MA) |
| `MEASURE` | `ME` | MEASURE (ME): një shenjë çdo gjatësi të dhënë përgjatë një vije, harku, rrethi, polivijeje, spline ose elipse, nga skaji më i afërt me zgjedhjen tënde. Pika, ose me Block një bllok në çdo shenjë. |
| `MEASUREGEOM` | `MEA` | Mat një distancë, një rreze, një kënd ose një sipërfaqe (MEA) |
| `MINSERT` | | MINSERT: vendos një bllok në rreshta dhe kolona me një herë. Çdo njëri është referencë e vet, kështu që çdonjërin mund ta zhvendosësh ose fshish. |
| `MIRROR` | `MI` | Pasqyro objekte përmes një vije |
| `MLEADER` | `MLD`, `MLEAD` | Udhëheqës shumëfish: një shigjetë, një udhëheqës dhe një shënim, si një objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Vendos në rresht udhëheqësit shumëfish me njërin prej tyre sipas një drejtimi, me hapësirë të barabartë, ose të shpërndarë mes dy pikave (MLA) |
| `MLEADERCOLLECT` | `MLC` | Mblidh disa udhëheqës shumëfish në një: blloqet e tyre në një rresht ose kolonë, ose shënimet e tyre nën njëri-tjetrin (MLC) |
| `MLEADEREDIT` | `MLE` | Shto vija udhëheqëse te një udhëheqës shumëfish ose hiqi; ndërro përmbajtjen e tij mes tekstit dhe një blloku (MLE) |
| `MLINE` | | Vizato vija paralele së bashku, të bashkuara në qoshe. |
| `MOVE` | `M` | Zhvendos objekte me një pikë bazë dhe një pikë të dytë |
| `MSPACE` | `MS` | Punon mbi modelin përmes një dritareje pamjeje të fletës së hapur (ose dyklik brenda dritares). |
| `MTEXT` | `MT`, `T` | Tekst paragrafi: zvarrit gjerësinë e tij, pastaj shkruaj në vend; Enter fillon një paragraf të ri (T) |
| `MVIEW` | `MV` | Një dritare pamjeje mbi modelin, në një paraqitje |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pamje të emëruara: ruaj pamjen në ekran (ose një dritare) me një emër dhe kthehu tek ajo (NV) |
| `NCOPY` | | Kopjo objekte nga një referencë blloku ose një vizatim i lidhur në vizatim, pa e shpërthyer. |
| `NEARBY` | | Thotë çfarë ndodhet pranë kursorit, më i afërti i pari, me distancën dhe anën. |
| `NEW` | | Nis një vizatim të ri |
| `OBJECTSCALE` | `OBJSCALE` | Shkallët e anotimit të tekstit dhe përmasave anotative: shto një shkallë, fshi një, shto shkallën aktuale, ose listoji (çdo dritare pamjeje i shfaq në madhësinë për shkallën e vet) |
| `OBJOUT` | | Eksporto modelin 3D si OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Standardi i zyrës: lartësitë e tekstit në letër, shtresat, fushat e blokut të titullit dhe shabllonet në një regjistrim. Shfaq atë në fuqi dhe nga vjen; Import një regjistrim .json në këtë vizatim, shto shtresat e zyrës që i mungojnë vizatimit, listo fushat e blokut të titullit. |
| `OFFSET` | `O` | Kopje paralele në një distancë |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: si OFFSET i mbyll hapësirat te qoshet e jashtme të një polivijeje. 0 zgjat segmentet, 1 shton një hark, 2 shton një prerje të drejtë. Mbahet për këtë sesion. |
| `OLELIST` | `OLES` | Listo objektet OLE që mban një vizatim dhe vendos një kopje të figurës së një prej tyre aty ku zgjedh |
| `OPEN` | | Hap një DWG ose DXF nga ky kompjuter |
| `OPENIN3D` | | Hap këtë vizatim në aplikacionin e modelimit 3D, në një skedë të re (asgjë nuk ngarkohet) |
| `OPTIONKEYS` | `OPTKEYS` | Jep opsioneve të komandave shkronjat e tua (ARRAY.PO, P), në një skedar teksti |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Hap menunë e kapjes së objekteve: zgjidh cilat kapje janë të ndezura. Gjithashtu klikimi me të djathtën te Kapje në shiritin e statusit. |
| `OVERKILL` | | Fshi objekte të dyfishta dhe bashko vija dhe harqe që mbivendosen ose takohen skaj më skaj, brenda një tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Paneli i Parametrave: parametrat e përdoruesit dhe kufizimet përmasore në një tabelë |
| `PARTSLIST` | `PLIST` | Një tabelë listë pjesësh e çdo pjese standarde dhe profili çeliku të vendosur nga Biblioteka |
| `PASTEAREA` | `PAREA` | Ngjit një zonë të kopjuar në MarkupCraft (Copy area) në madhësinë e saj reale, si figurë. |
| `PASTEBLOCK` | | PASTEBLOCK: ngjit atë që kopjove si një bllok. Blloku merr një emër të vetin; RENAME i jep emrin tënd. |
| `PASTECLIP` | | Ngjit kujtesën e ndërmjetme: ndjek kursorin, kliko aty ku shkon (Ctrl+V) |
| `PASTEORIG` | | Ngjit kujtesën e ndërmjetme në koordinatat nga ku u kopjua (Ctrl+Shift+V) |
| `PDF` | | Jep CadCraft skedarët PDF që përdorin nënshtresat e vizatimit |
| `PDFADJUST` | | Zbeh, kontrast, monokrome ose e fik një nënshtresë PDF |
| `PDFATTACH` | `PDFATT` | Bashkëngjit një faqe PDF si nënshtresë (PDFATTACH) |
| `PDFCLIP` | | Pret një nënshtresë PDF me një drejtkëndësh ose shumëkëndësh |
| `PDFIMPORT` | `PDFIM` | Kthen vijat, mbushjet dhe tekstin e një faqeje PDF në objekte vizatimi (PDFIMPORT) |
| `PDFLAYERS` | | Ndiz ose fik shtresat e një nënshtrese PDF |
| `PEDIT` | `PE` | Redakto një polivijë: mbyll, hap, bashko, gjerësi, përshtat kurbën, kurbë spline, zhkurbëzo, gjenerim i llojit të vijës, kthe; vija, harqe dhe spline mund të bëhen polivija |
| `PENPRESSURE` | | Nëse presioni i një goditjeje stilolapsi cakton trashësinë e vijës së asaj që bëjnë SKETCHFIX dhe SKETCHLIVE (i ndezur si parazgjedhje). Mbahet në këtë shfletues. |
| `PHOTOSKETCH` | `PSK` | Kthen një foto skice dore në letër në vija dhe harqe në një shkallë, duke drejtuar perspektivën dhe duke i dhënë çdo ngjyrë stilolapsi shtresën e vet. |
| `PICKSTYLE` | | PICKSTYLE: nëse zgjedhja e një objekti të një grupi zgjedh të gjithë grupin (1, cilësimi fillestar) ose vetëm atë objekt (0). Mbahet për këtë sesion. |
| `PLAN` | | Rrotullo pamjen që boshti X i UCS (UCS aktuale, një Ucs i ruajtur, ose Botërore) të jetë horizontal në ekran. Asgjë në vizatim nuk lëviz. |
| `PLINE` | `PL` | Një polivijë me segmente vije dhe harqe |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Printo në PDF: një paraqitje, ose modeli në një shkallë |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabela stilesh printimi: cakto si printohet çdo ngjyrë (ngjyrë, e zezë, gri, bojë, trashësi vije); ruhet me vizatimin (STYLESMANAGER) |
| `POINT` | `PO` | Objekte pike |
| `POINTCLOUD` | `PC` | reja e bashkangjitur e pikave: prerje, lartësi, trashësi, ngjyrë, madhësi, e dukshme, zmadhim, shkëputje |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | bashkëngjit një re pikash (LAS, LAZ, XYZ, PTS) nën vizatim |
| `POLARANG` | | Hapi i gjurmimit polar në gradë (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Një shumëkëndësh i rregullt |
| `PRESSPULL` | | Shtyj ose tërhiq një faqe të një trupi të ngurtë (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Hap panelin e Vetive (edhe Ctrl+1, ose dyklik një objekti) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Palos panelin e Vetive në skajin e dritares |
| `PSPACE` | `PS` | Largohu nga dritarja e pamjes në të cilën punon dhe kthehu në fletë (ose dyklik jashtë saj). |
| `PUBLISH` | `-PUBLISH` | Printo disa ose të gjitha fletët në një PDF (një faqe dhe një shenjues për fletë) |
| `PURGE` | `PU` | Hiq përkufizimet e blloqeve që nuk përdoren nga askush |
| `QDIM` | | Përmasë e shpejtë: përmas disa objekte njëherësh (të vazhdueshme, me vijë bazë, të shkallëzuara, ordinate, rreze ose diametër) |
| `QPMODE` | `QP` | Vetitë e shpejta me kursorin ndezur ose fikur |
| `QSELECT` | `QS` | Zgjedhje e shpejtë: çdo objekt i një lloji, shtresa, ngjyra, madhësia ose emri i të cilit përputhet (QS) |
| `RASTERSNAP` | | Ndez ose fik kapjen te vijat e fletëve të skanuara. |
| `RAY` | | Rreze: një vijë ndërtimi nga një pikë, pa fund në një drejtim. |
| `RECOVER` | | Hap një DXF ose DWG të dëmtuar: kalon ç'nuk mund të lexohet në vend se ta refuzojë skedarin, thotë ç'u kalua, pastaj kontrollon dhe rregullon vizatimin si bën AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Një polivijë e mbyllur nga dy qoshe |
| `REDLINE` | `RDL` | Redline në revizion: lexo paketën redline të MarkupCraft, prano ose refuzo çdo ndryshim, rrethoji të pranuarit me një re revizioni dhe një regjistër revizionesh, dhe ruaj skedarin e përgjigjeve (RDL) |
| `REDO` | | Ribëj ç'u zhbë |
| `REFCLOSE` | | Përfundo redaktimin e një blloku në vend: ruaje, ose hiq ndryshimet |
| `REFEDIT` | | Redakto një bllok në vend, aty ku ndodhet një referencë e tij, me pjesën tjetër të vizatimit të zbehur; REFCLOSE e ruan |
| `REGEN` | `RE` | Ribëj ç'vizatohet në këtë skedë nga vizatimi |
| `REGENALL` | `REA` | Ribëj ç'vizatohet në çdo skedë, panel dhe vizatim të hapur |
| `REGION` | `REG` | REGION (REG): bën zona të sheshta (rajone) nga objekte të mbyllura, ose nga vija, harqe dhe polivija që mbyllen në një unazë skaj më skaj. UNION, SUBTRACT dhe INTERSECT pastaj i kombinojnë rajonet, dhe MASSPROP jep vetitë e tyre të seksionit. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Regjistro disa skanime: vendosi në një kornizë me çifte pikash ose objektiva të zgjedhur, përmirëso me ICP, eksporto një LAS ose E57 |
| `REINIT` | | Ringarko skedarin e aliaseve |
| `RENAME` | `-RENAME`, `REN` | Riemëro një shtresë ose bllok (çdo objekt ose referencë e ndjek) |
| `REVCLOUD` | `RC` | Re revizioni: rrumbullak një drejtkëndësh, shumëkëndësh, një shteg të lirë ose një objekt (RC) |
| `REVOLVE` | `REV` | Rrotullo objekte 2D të mbyllura rreth një boshti në trupa të ngurtë (3D) |
| `ROTATE` | `RO` | Rrotullo objekte rreth një pike bazë |
| `SAMPLES` | `SAMPLE` | Hap një nga vizatimet shembull të CadCraft (një set arkitekture, një as-built) për të mësuar prej tij |
| `SAVE` | `QSAVE` | Shkarko vizatimin në formatin e vet (DWG ose DXF) |
| `SAVEAS` | | Shkarko vizatimin si DWG ose DXF: zgjidh cilin |
| `SAYSEL` | | Thotë çfarë është zgjedhur, një fjali për çdo objekt. |
| `SCALE` | `SC` | Shkallëzo objekte rreth një pike bazë |
| `SCALELISTEDIT` | `SCALELIST` | Shto, redakto dhe fshi shkallët e vetë vizatimit; shfaqen në listat e shkallës së dritares së pamjes dhe printimit, dhe ruhen në skedar (SCALELIST) |
| `SCANALIGN` | `SCL` | Vendos një fletë të skanuar mbi dy pika: lëviz, rrotullo dhe, nëse zgjedh, shkallëzo. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Fut një vizatim të skanuar: një PNG, JPEG ose TIFF (një faqe ose të gjitha faqet e një skedari me shumë faqe) ose një faqe PDF që është figurë. |
| `SCANCLEAN` | `SCC` | Bëje një fletë të skanuar të zezë e të bardhë dhe hiq njollat. |
| `SCANCROP` | `SCR` | Pret një fletë të skanuar në një dritare. |
| `SCANDESKEW` | `SCD` | Gjej këndin ku shtrihen vijat e gjata të një fletë të skanuar dhe rrotullo fletën drejt sapo pranon këndin. |
| `SCANERASE` | `SCE` | Fshi një zonë të një fletë të skanuar: një drejtkëndësh, një shumëkëndësh ose një lasso. |
| `SCANINFO` | `SCI` | Shfaq skedarin origjinal të një fletë të skanuar dhe hapat e marrë që nga atëherë. |
| `SCANSCALE` | `SCS` | Shkallëzo një fletë të skanuar: zgjidh dy pika mbi të dhe shkruaj distancën reale mes tyre. |
| `SCANTRACE` | `SCT` | Gjurmo një fletë të skanuar në vija dhe harqe në një shtresë të re, me një tolerancë që cakton. Teksti dhe vijëzimi mbeten si raster. |
| `SELECT` | | Zgjidh objekte tani (për P, Previous, në komandën tjetër) |
| `SELECTALL` | `AI_SELALL` | Zgjidh çdo objekt që mund ta redaktosh në këtë skedë (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Zgjidh çdo objekt si ata që zgjedh: të njëjtin lloj, shtresë dhe ngjyrë (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Shfaq panelin e Grupit të Fletëve: fletë nga shumë vizatime, të numëruara, të publikuara si një PDF. |
| `SHORTCUTS` | `KEYS` | Jep çdo komande një tast të vetin (Ctrl ose Alt me një shkronjë, ose një tast funksioni të lirë), i mbajtur në këtë shfletues ose aplikacion desktop. |
| `SHXFONTS` | `SHX` | Jep CadCraft fonte SHX nga një dosje ose skedarë, që stilet e tekstit që i emërojnë të vizatohen me to (listo, hiq, kthe) |
| `SKETCHFIX` | `SKF` | Vizato vija të lira; çdo njëra bëhet një vijë, rreth, hark, drejtkëndësh ose polivijë e pastër, katrore dhe e bashkuar me të tjerat. |
| `SKETCHLIVE` | `SKL` | Skico me stilolaps: çdo goditje bëhet një vijë, rreth, hark ose drejtkëndësh i saktë kur e ngre stilolapsin, i kapur te vizatimi, me madhësinë për ta shkruar mbi të. |
| `SPLINE` | `SPL` | Vizato një spline përmes pikave (ose me një poligon kontrolli), ose kthe një polivijë në një të tillë |
| `SPLINEDIT` | `SPE` | Redakto një spline: pika përshtatjeje, pika kontrolli dhe pesha, hap ose mbyll, kthe, ose shndërroje në polivijë |
| `SPLIT` | | Ndaj zonën e vizatimit në panele (si VPORTS në model; edhe nga një fletë) |
| `STEELMEMBER` | `SMEMBER` | Një element çeliku në 3D nga një profil standard: dy pika (një trart) ose një pikë bazë dhe një lartësi (Column) |
| `STLOUT` | | Eksporto modelin 3D si STL (milimetra) |
| `STRETCH` | `S` | Shtrij: tërhiq një dritare kryqëzuese mbi skajet për të lëvizur; ç'është brenda lëviz, pjesa tjetër qëndron (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stile teksti: fonti, lartësia, gjerësia dhe prirja që merr teksti i ri (dialogu; -STYLE në rreshtin e komandës) |
| `SUBTRACT` | `SU` | Heq trupa të ngurtë nga të tjerët (3D), ose zona 2D nga zona të tjera |
| `SWBOUT` | `SWMACRO` | Shkarko një makro për SolidWorks (.swb) që e ndërton modelin si një skicë të vetme të kufizuar |
| `SWEEP` | | Zhvendos objekte 2D të mbyllura përgjatë një shtegu (vijë, polivijë, hark, rreth) në trupa të ngurtë (3D) |
| `TABLE` | `TB` | Bën një tabelë: rreshta dhe kolona, ose nga qelizat e një fletëllogaritjeje në kujtesën e ndërmjetme ose një skedar CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redakto një tabelë: shkruaj në një qelizë, fut dhe fshi rreshta dhe kolona, madhësi, qeliza të bashkuara, shtrirje |
| `TABLEEXPORT` | | Ruaj atë që tregon një tabelë si skedar CSV |
| `TABLEPASTE` | `PASTETABLE` | Bën një tabelë nga qelizat e një fletëllogaritjeje në kujtesën e ndërmjetme |
| `TABLESTYLE` | `TS` | Stile tabelash: lartësitë e tekstit, shtrirja, margjina dhe kufijtë për rreshtat e titullit, kokës dhe të dhënave |
| `TAGS` | | Etiketa në referenca blloqesh: përcakto një etiketë (lloji, vlerat e lejuara, blloqet ku zbatohet), vendose te referencat e zgjedhura, dhe listoje si një orar që mund ta ruash si CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst një rreshti; Enter fillon rreshtin tjetër |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redakto tekstin në vend: zgjidh një tekst (ose kliko dy herë mbi të) (ED) |
| `TEXTMASK` | `TMASK` | Vendos një maskë sfondi prapa teksteve (sfondin e vizatimit ose një ngjyrë), ose e heq. |
| `TEXTTOFRONT` | | Sill të gjithë tekstin, përmasat dhe udhëheqësit përpara çdo gjëje tjetër. |
| `TOOLBAR` | | Zgjidh çfarë shfaqin butonat e shiritit të veglave: ikona dhe tekst, vetëm ikona, ose vetëm tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Vendos shiritin e veglave në krye, fund, majtas ose djathtas të dritares |
| `TOOLBARROWS` | | Zgjidh sa rreshta përdor shiriti i veglave: mbështill për t'u përshtatur, 2, ose 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | Bëj shiritat mbi vizatim standardë ose kompakte |
| `TOUCHCROSSHAIR` | `TCX` | Kryqëzorja e zhvendosur për vizatim me gisht: një gisht lëviz një kryqëzore që ndodhet mbi dhe pranë tij, që gishti të mos e mbulojë pikën. Ngritja e gishtit nuk zgjedh asgjë; butoni Click ose një prekje me një gisht të dytë zgjedh te kryqëzorja, dhe mbajtja e Click ndërsa lëviz zvarrit. Një shtypje e gjatë ose butoni Enter është Enter. Dy gishta lëvizin dhe zmadhojnë. Opsionet: ON, OFF, Auto (vetëm aty ku gishti është treguesi i vetëm), Distance, Side. |
| `TOUR` | `TUTORIAL` | Bëj sërish turin gjashtë hapësh të vizatimit të parë |
| `TRIM` | `TR` | Pre objektet deri ku kryqëzohen të tjerët: kliko një pjesë, zvarrit mes disa, ose Shift+klik për ta zgjatur |
| `TRIMEXTENDMODE` | | Si nisin TRIM dhe EXTEND: 1 Quick (çdo objekt është skaj prerës ose kufi), 0 Standard (zgjedh skajet së pari) |
| `TTR` | | Një rreth tangjent me dy objekte, me një rreze që jep ti (njëlloj si CIRCLE T). |
| `TURNLEFT` | | Rrotullo pamjen 90° majtas (në drejtim të kundërt të akrepave): UCS Z -90, dhe pamja ndjek. Asgjë në vizatim nuk lëviz. |
| `TURNRIGHT` | | Rrotullo pamjen 90° djathtas (në drejtim të akrepave): UCS Z 90, dhe pamja ndjek. Asgjë në vizatim nuk lëviz. |
| `TURNWORLD` | | Kthehu te bota: UCS World, dhe pamja është sërish horizontale. |
| `TXT2MTXT` | `T2M` | Bashko tekste një rreshti në një tekst paragrafi, nga lart poshtë. |
| `UCS` | | Sistemi yt koordinativ: një origjinë dhe një bosht X (origjina, kënd Z, 3point, OBject, Previous, World, NAmed). Pikat që shkruan, ortho, gjurmimi polar, rrjeta dhe teksti i ri e ndjekin; pamja kthehet që boshti X të jetë horizontal. Asgjë në vizatim nuk lëviz. |
| `UNDO` | `U` | Zhbëj komandën e fundit |
| `UNGROUP` | | UNGROUP: çmonto grupet. Zgjidh objekte të grupeve, ose jep një Name. Objektet mbeten në vizatim. |
| `UNION` | `UNI` | Bashko trupat e ngurtë në një (3D), ose zona 2D në një zonë |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Shfaq sërish çdo objekt të fshehur nga ISOLATEOBJECTS ose HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Si shfaqen dhe shkruhen gjatësitë: dhjetore, këmbë dhe inç, thyesa (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Llogarit sërish fushat, dhe zgjidh kur përditësohen vetvetiu |
| `USDOUT` | | Eksporto modelin 3D si USD (teksti .usda, binari .usdc ose një paketë .usdz) |
| `VIEW` | `-VIEW`, `V` | Pamje standarde 3D, perspektivë ose paralele (3D) |
| `VIEWBASE` | `FLATSHOT` | Vendos një pamje 2D të sheshtë të trupave 3D (përpara, sipër, anë ose izometrike, vijat e fshehura me viza) në një fletë ose në model |
| `VIEWLABEL` | `VL` | Titull pamjeje në një fletë që tregon emrin e pamjes së dritares së pamjes së vet, dhe ndryshon me të. |
| `VOICE` | | Ndez ose fik komandat e folura. Njihen në këtë kompjuter. |
| `VPCLIP` | | Pret një dritare pamjeje të fletës me një objekt të mbyllur ose një shumëkëndësh të vizatuar; Delete e bën sërish drejtkëndësh |
| `VPLAYER` | | Ngrij ose shkrij shtresa vetëm në disa dritare pamjeje (Freeze, Thaw, Reset), dhe zgjidh cilat shtresa fillojnë të ngrira në dritare të reja (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Ndaj zonën e vizatimit në panele, secili me pamjen e vet (në fletë: një dritare pamjeje, si MVIEW) |
| `VPVIEW` | | Cakto çfarë shfaq një dritare pamjeje: zgjidh një dritare mbi modelin |
| `VSCURRENT` | `VS`, `SHADEMODE` | Stili vizual i pamjes 3D: me hije, skaje, vijë e fshehur, tel, rreze-X |
| `WALL` | `WA` | Vizato mure 2D si një polivijë. Ato bashkohen, dhe mbajnë dyer dhe dritare. |
| `WALLARC` | `WARC` | Vizato një hark muresh. Muret e planit janë të drejta, kështu që harku vizatohet si mure të shkurtra të drejta (15 gradë secili) që bashkohen. |
| `WALLDELSEG` | | Fshi një pjesë muri mes dy pikave. Ajo që mbetet mbetet si një ose dy mure. |
| `WALLDIM` | | Shkruaj një vlerë të re për një përmasë: muri në skajin e saj të largët zhvendoset katror me veten, muri në skajin e parë mbetet, dhe muret e bashkuar me të ndjekin. |
| `WALLDISJOIN` | | Zgjidh një mur pranë njërit skaj për të ndaluar bashkimet në atë skaj: skaji vizatohet katror dhe asgjë nuk e ndjek. Zgjidhe sërish për t'i lejuar. |
| `WALLGRID` | | Kyç një mur me një vijë rrjete: gjatë saj, ose me një skaj mbi të. Zhvendos vijën me GRIDMOVE dhe muri e ndjek. |
| `WALLHOLD` | | Përputh dhe kyç: një mur ruan vendin e vet ndaj një muri tjetër (në vijën e tij, ose në distancën që ka). Nëse njëri lëviz, tjetri e ndjek. |
| `WALLHOLDDIM` | | Kyç distancën mes dy mureve paralele. Nëse njëri lëviz, tjetri e ndjek për ta mbajtur. |
| `WALLHOLDS` | | Listo kyçjet e mureve. |
| `WALLJOINS` | | Jep çdo muri të një vizatimi të vjetër id-në e tij dhe ruaj bashkimet mes tyre. Kjo ndodh edhe në ndryshimin e parë që bën. |
| `WALLJOINSTYLE` | | Kliko një qoshe ku takohen dy mure skaj më skaj për të ndryshuar si vizatohet: mitër, butt, square off. T ndërron cili mur kalon. |
| `WALLOFFSET` | `WO` | Zhvendos një mur katror me veten për një distancë (muret e bashkuar me të ndjekin), ose bëj një kopje në atë distancë. |
| `WALLPICK` | | Bëj mure mbi një vijë ose polivijë në vizatim, me vijat e bashkuara me të nëse thua Yes. |
| `WALLPOLY` | `WP` | Vizato mure rreth një shumëkëndëshi të rregullt me 3 deri 64 brinjë, si POLYGON. |
| `WALLRECT` | `WR` | Vizato katër mure të bashkuar nga dy qoshe të kundërta, si RECTANG. |
| `WALLREJOIN` | | Bëj dy pjesë të një muri sërish një mur të vetëm. I pari mban vendin e vet në vizatim. |
| `WALLROT` | | Vizato katër mure të bashkuar si një drejtkëndësh të rrotulluar në çfarëdo kënd: krahu i parë, pastaj sa larg del tjetri. |
| `WALLSPLIT` | `WS` | Ndaj një mur në dy në një pikë ose aty ku kryqëzon një mur tjetër. Pjesët mbeten të bashkuara përveç nëse kërkon një hapësirë ose skaje të lira. Dyert dhe dritaret shkojnë me pjesën e tyre. |
| `WALLSPLITGAP` | | Ndaj një mur duke lënë një hapësirë: shkruaj hapësirën, zgjidh murin, pastaj pikën. Pjesët mbajnë skaje të lira dhe mund të bashkohen sërish. |
| `WALLSTRETCH` | | Shtrij me një dritare: skajet e mureve brenda saj lëvizin, muret të tërë brenda lëvizin të tërë, dhe muret që ngjiten në anët e tyre rrëshqasin me to. |
| `WALLTAN` | | Vazhdo një mur me një hark që largohet prej tij përgjatë murit (vizatohet si mure të shkurtra të drejta). |
| `WALLTRACE` | | Bëj mure rreth zonës më të vogël të mbyllur vijash dhe murësh rreth pikës ku klikon. |
| `WALLUNHOLD` | | Hiq kyçjet nga një mur (dhe kyçjet e mureve të tjerë me të). |
| `WBLOCK` | `W`, `-WBLOCK` | Shkruaj një bllok, disa objekte ose tërë vizatimin në një skedar të ri DWG ose DXF (W) |
| `WEDGE` | `WE` | Një kunj: dy qoshe dhe një lartësi; zbret larg qoshes së parë (3D) |
| `WHEREAMI` | `WHERE` | Thotë ku është kursori. |
| `WHOHAS` | | Thotë kush ka hapur një vizatim. CadCraft Studio mban një skedar të vogël kyçjeje pranë çdo vizatimi të hapur (Plan.dwg.cclock: kush, që kur, cilën version) dhe e heq kur mbyllet. Opsionet: Current (vizatimi i hapur), File (zgjidh një), FOlder (çdo vizatim në një dosje që është hapur diku), Path (shkruaj një), Name (emri që shohin të tjerët). Një kyçje që nuk është rifreskuar për pesë minuta thuhet e vjetëruar. Nuk është e disponueshme në shfletues. |
| `WINDOW` | `WN` | Vendos një dritare në një mur. |
| `XATTACH` | `XA` | Lidh një DWG ose DXF tjetër me këtë vizatim, të shfaqur vetëm për lexim (XREF i liston dhe i ringarkon) |
| `XCLIP` | `XC` | Pret referencat e blloqeve dhe vizatimet e lidhura me një drejtkëndësh ose shumëkëndësh, ose heq prerjen. |
| `XLINE` | `XL` | Vijë ndërtimi, pa fund në të dyja anët: nëpër dy pika, horizontale, vertikale, me një kënd, duke e ndarë një kënd në dysh, ose e zhvendosur nga një vijë. |
| `XREF` | `XR`, `-XREF` | Vizatime të lidhura (referenca të jashtme): listo, bashkëngjit, ringarko, lidh, shkëput |
| `ZOOM` | `Z` | Shtrirja, ose një dritare |
