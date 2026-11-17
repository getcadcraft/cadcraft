---
title: Çfarë ka të re në 0.9
summary: Hatch-e që ndjekin kufirin e tyre, grupe shtresash, kate të grumbulluara, mure inteligjente 2D me dyer dhe dritare, stile tekstesh dhe një redaktor tekstesh të formatuar, rresht komandash lundrues, kapje në rrjetë, dhjetë mënyra për të vizatuar një hark, dhe panelin e Dokumenteve.
keywords: çfarë ka të re, 0.9, shënime lançimi, ndryshime, hatch, hatch i lidhur, hatchedit, skedar pat, skedar modeli, grupe shtresash, laygroup, kate, kate të grumbulluara, floorlayers, mure inteligjente, mur, derë, dritare, veglat e murit, stil teksti, stil, redaktor mtext, tekst paragrafi, formatim, rresht komandash lundrues, rresht komandash, pjesa e sipërme, kompakt, kapje në rrjetë, grid snap, f9, hark, panel dokumentesh, check out, përmasa çelikut UK, draw.io, tekst tajlandez, dxf r12, çfarë ka të re, 0.8, 0.8.1, version, veçori të reja, plotimi automatik, ghost, tab, sketchfix, photosketch, autosheet, detaje, gridmove, autodim, etiketa, redline, bashkim, git, fossil, access, vizatim pa shikim, kufij, azimute, aunits, shx, diagram, ole, historiku, krahaso, me fjalë, vetitë, këmbë dhe inç, shtyrje, gjuhët, pajisjet hyrëse, problemet, live, asistentët
from: 8b6dea0b
---

Kjo është ajo që ndryshoi në CadCraft 0.9, krahasuar me 0.8.1. CadCraft është aplikacioni i vizatimit 2D dhe 3D i CadCraft Studio 0.9 dhe tetë aplikacioneve të tij. 0.9 e përfundon vizatimin e planeve, shton stile tekstesh dhe një redaktor të vërtetë teksti, dhe ju jep më shumë hapësirë në ekran.

## E re

### Vizatimi i planeve

- **Hatch-e që ndjekin kufirin e tyre.** {{cmd:HATCH}} lidhet me atë që e kufizon. Zhvendosni, rrotulloni ose shkallëzoni kufirin dhe hatch-i dhe modeli i tij e ndjekin; ripunoni formën dhe hatch-i llogaritet sërish. {{cmd:HATCHEDIT}} (`HE`) e ndryshon një hatch më pas dhe bën ose prish lidhjen. Shihni [Hatch dhe zonat e mbushura](topic:hatch).
- **Skedarë modelesh hatch.** Te pyetja e {{cmd:HATCH}} `Pick internal point`, shkruani `F` (Skedar modeli) dhe zgjidhni një skedar `.pat`. Janë provuar vetëm skedarë të shkruar në formatin e zakonshëm.
- **Grupe shtresash.** Në {{ui:Veglat}} te panel {{ui:Shtresat}}: {{ui:Grup i ri}}, {{ui:Shto grupe të gatshme}}, {{ui:Grupo sipas emrit}}, dhe {{ui:Gjej një shtresë}}; ose shkruani {{cmd:LAYGROUP}} (`LG`). Shihni [Organizoni një vizatim me shtresa](topic:layers#group-layers).
- **Kate të grumbulluara.** {{cmd:FLOORS}} (`FLR`), ose {{ui:Katet…}} në menynë {{ui:Më shumë}} të grupit {{ui:Pamja}}. Një dritare pamjeje në një fletë mund të shfaqë një kat nën {{ui:Kati i shfaqur}} në Veti. {{cmd:FLOORLAYERS}} i kthen katet në shtresa për një skedar që shkon te dikush tjetër. Shihni [Grumbulloni katet në një vizatim](topic:floors).
- **Mure inteligjente 2D, dyer dhe dritare.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) dhe {{cmd:DELOPENING}}. Qoshet, bashkimet T dhe kryqëzimet llogariten për ju. Muret mbajnë një regjistër të mënyrës se si bashkohen, dhe Vetitë marrin Ndalo bashkimin në fillim / në fund, një Vijë vendndodhjeje dhe një Gjatësi të redaktueshme. Shihni [Vizato mure, dyer dhe dritare 2D](topic:walls-2d).
- **Veglat e murit në muret e planit.** Shkruani {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} dhe të tjerët. Ende nuk kanë butona në shirit. Shihni [Forma muresh, prerje, zhvendosje dhe kyçje për muret 2D](topic:wall-tools-2d).

### Teksti

- **Stile tekstesh.** {{cmd:STYLE}} (`ST`), ose {{ui:Stili i tekstit}} në shiritin {{ui:Vizato}}: stile të emërtuara me font, lartësi, faktor gjerësie dhe pjerrësi. Shihni [Vendosni fontin dhe madhësinë e tekstit me stile tekstesh](topic:text-styles).
- **Një redaktor i formatuar i tekstit paragrafësh.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ose një klikim i dyfishtë mbi tekst hap një kuti me font, madhësi, të trashë, të pjerrët, nënvizim, vijë të prerë, ngjyrë, shtrirje dhe shenjat e shkallës, plus-minus dhe diametrit, plus {{ui:OK}} dhe {{ui:Anulo}}. Shihni [Formatoni tekstin paragraf](topic:format-paragraph-text).
- **Një diagram nga XML i draw.io.** {{cmd:DIAGRAM}} (`T2D`) lexon edhe XML-në e draw.io të ngjitur. Shihni [Vizatoni një diagram nga teksti](topic:text-to-diagram).
- **Tekst tajlandez në plotimin PDF.** Më parë printohej si pikëpyetje.

### Më shumë hapësirë dhe ndihma vizatimi

- **Rresht komandash lundrues dhe zonë e sipërme më kompakte.** Tërhiqeni kapësen e rreshtit të komandës për ta bërë lundrues, tërhiqeni skajin e sipërm për më pak rreshta, {{key:F2}} hap historikun. {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Rreshti i komandës}} dhe zgjedhjet e zonës së sipërme kanë të njëjtat cilësime. Shihni [Cilësimet](topic:settings#command-line).
- **Menyja e kapjes së objekteve.** Klikoni me të djathtën mbi {{ui:Kapje}} në shiritin e gjendjes, ose shkruani {{cmd:OSNAP}}.
- **Kapje në rrjetë.** Butoni {{ui:Kapje në rrjetë}} në shiritin e gjendjes, ose {{key:F9}}: pikat e zgjedhura shkojnë te pika më e afërt e rrjetës kur asnjë kapje objekti nuk e mori pikën.
- **Hark në dhjetë mënyra, dhe Vazhdo.** {{ui:Hark}} në shiritin {{ui:Vizato}} ose {{cmd:ARC}}: 3 pika, familja Start/Qendër/Fund dhe familja Qendër/Start/Fund, dhe Vazhdo (shtypni {{key:Enter}} te pika e fillimit) nga vija, harku ose polivija e fundit.
- **Panel dokumentesh.** {{cmd:DOCUMENTS}} (`DOCS`) ose {{ui:Dokumentet…}} në menynë {{ui:Më shumë}} të grupit {{ui:Pamja}}: revizioni, gjendja dhe marrja për redaktim për çdo vizatim në një dosje projekti. Hapet si dialog i qendërzuar. Shihni [Dokumentet](topic:documents).

### Skedarët

- **Përmasa çeliku UK.** 976 seksione në panelin Standard, të shkruara ashtu si në vizatime (për shembull `305x165x40 UB`).
- **Paketa afrikano-jugore** (praktikë vizatimi dhe rregulla ndërtimi) si paketa të shtesës Rregullat e ndërtimit. Numrat nuk janë verifikuar.
- **Shtesa për CadCraft,** shtohen sipas kërkesës dhe janë të fikura si parazgjedhje: dizajni i ndriçimit të brendshëm, dizajni i çipave (HDL në skemë), gdhendja me ruter, simulimi i qarqeve, rrota zinxhiri me dhëmbë me rul dhe paketa vendore të Rregullave të ndërtimit.

## E rregulluar

- Lëvizja, rrotullimi ose shkallëzimi i një hatch-i linte modelin e vet pas.
- {{cmd:GRIDMOVE}} zhvendoste një mur të tërë plani që fillon vetëm te vija e rrjetit. Tani një mur gjykohet sipas skajeve të vet.
- Rrjeta shfaqej vetëm brenda kufijve të vizatimit edhe me kufijtë të fikur.
- Lista e blloqeve në panelin anësor lëviz, dhe një emër që nuk është bllok liston blloqet që fillojnë me të ("A dëshironi të thoni?").
- Skedarët DXF R12 që AutoCAD i refuzonte ("Unknown group 1001 for table") tani hapen atje.
- Skedarët shumë të mëdhenj (rreth 70,000 entitete e lart) dështonin me "Maximum call stack size exceeded".
- Skedarët DWG nga AutoCAD 2018 e tutje me version të lartë mirëmbajtjeje dështonin me "bad BITLONG code 11".
- Në kutinë e tekstit paragraf, një madhësi e re e shkruar për një pjesë të zgjedhur e ruan përzgjedhjen.

## Në çdo aplikacion

Shënime (tooltip) Bootstrap për çdo kontroll me ndihmë, një këshillë fillimi që mund ta mbyllni, skeda që lëvizin kur nuk futen, dhe titulli i skedës së shfletuesit që ndjek vizatimin e hapur (`<drawing> - CadCraft | CadCraft`). {{ui:Cilësimet}} › {{ui:Paraqitja}} tani është një listë me zgjedhje me dy rreshta. Lista e gjuhëve në {{ui:Cilësimet}} është më e gjatë se në 0.8. Bashkëpunimi i drejtpërdrejtë, koleksionet e Bibliotekës dhe njësitë e peshës dhe temperaturës përshkruhen në shënimet e Studio.

## Kufij të sinqertë

- Teksti paragraf nuk ka lista me pika ose numra, lineal tabulacioni ose drejtim. Plotimet PDF e vendosin tekstin në Helvetica.
- Muret e planit janë të drejta, kështu që një hark vizatohet si mure të shkurtra. Kontrolli i komunitetit mbi veglën e murit është në pritje.
- Grupet e shtresave nuk shkruhen në formatin e vet të AutoCAD, kështu që AutoCAD shfaq një listë të sheshtë. Programet e tjera shfaqin të gjitha katet bashkë, përveç nëse ekzekutoni {{cmd:FLOORLAYERS}}.
- Panelit të Dokumenteve nuk i është provuar nga dy persona në një ndarje të vërtetë. Gdhendja me ruter nuk është provuar në asnjë makinë të vërtetë. Vlerësimi i ndriçimit u kontrollua me një gjurmim fotonesh, jo me një program tjetër. Shtesat inxhinierike janë mjete kontrolli, jo zëvendësim i rishikimit nga një inxhinier.
- Gjuhët e tjera nga anglishtja janë draft me makinë, dhe disa nga fjalët e reja janë vetëm në anglisht.

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në CadCraft 0.8 dhe 0.8.1, krahasuar me 0.7. 0.8 (1 nëntor 2026) shton ndihmës vizatimi që punojnë nga vizatimi juaj, me rregulla në kompjuterin tuaj dhe pa model, dhe 0.8.1 (2 nëntor 2026) rregulloi gabimet e raportuara pas tij.

### E re

**Vizatim që e përfundon mendimin tuaj**

- **Një hije tregon çfarë vjen më pas.** Pa një komandë që po ekzekutohet, një hije gri me vija tregon çfarë thonë modelet e vizatimit tuaj për të ardhmen: pllaka tjetër me të njëjtën distancë, hapi tjetër i shkallës, muri që mungon i një dhome. Shtypni {{key:Tab}} për ta vizatuar si një hap zhbërjeje, ose {{key:Esc}} për ta mbyllur. Shikon vetëm objektet më të reja, prandaj mbetet e lëmuar në një vizatim të madh. Fikeni në {{ui:Cilësimet}} › {{ui:CadCraft}} ose me {{cmd:AUTOCOMPLETE}} `Off`.
- **Pika tjetër kur vizatoni një vijë.** Në mes të {{cmd:LINE}} ose {{cmd:PLINE}} hija është pika tjetër: hapi tjetër i shkallës, këndi i katërt i një drejtkëndëshi, ose pika që e mbyll. Sillni kursorin pranë dhe shtypni {{key:Tab}}, sikur të keni klikuar atje.
- **Skicat me stilolaps bëhen gjeometri e saktë.** {{cmd:SKETCHFIX}}: vizatoni vija të shkurtra me stilolaps, mi ose gisht dhe secila bëhet një vijë, rreth, hark, drejtkëndësh ose polivijë e pastër, e kapur në atë që është vizatuar tashmë. Shihni [Skiconi me stilolaps dhe merrni gjeometri të saktë](topic:sketch-with-a-pen).
- **Një foto e një skice bëhet vizatim.** {{cmd:PHOTOSKETCH}} (`PSK`) gjen letrën në një foto, drejton perspektivën, zbaton madhësinë e letrës dhe shkallën që jepni, dhe gjurmon vijat e stilolapsit në një shtresë për çdo ngjyrë stilolapsi. Shkronjat nuk gjurmohen.
- **Vendosni përmasat sipas rregullave.** {{cmd:AUTODIM}} (`ADIM`) bën zinxhirë përmasash përgjatë anëve që zgjidhni, një madhësi të përgjithshme, gjerësi hapjesh, diametra vrimash dhe, me `Grid`, distancën e rrjetës. Nuk përsërit kurrë një përmasë që ekziston tashmë.
- **Zhvendosni një vijë rrjeti dhe grupi ndjek.** {{cmd:GRIDMOVE}} (`GM`): muret që mbarojnë në vijën e rrjetit shtrihen me të, muret përgjatë saj, kolonat, flluska dhe etiketa e saj zhvendosen, dhe përmasat mbi të e matin distancën e re. Një hap zhbërjeje.

**Fletë, detaje dhe etiketa**

- **Fletë që e rregullojnë vetë veten.** {{cmd:AUTOSHEET}} merr pamjet tuaja të emërtuara (ose pjesët e veçanta të modelit), zgjedh një madhësi letre dhe një shkallë standarde, dhe i vendos pamjet në fletë të reja me një bllok titulli dhe një mbishkrim emri dhe shkalle. Gjithçka mbetet e redaktueshme. Shihni [Rregulloji fletët për mua](topic:lay-out-sheets-for-me).
- **Detajet e firmës suaj, të ofruara ndërsa vizatoni.** {{cmd:DETAILS}} (`DET`) mban blloqet tuaja të detajeve. Kur ajo që përzgjidhni përputhet me një nga fjalët e shtresave, emrat e blloqeve dhe shënimet e tyre, rreshti i gjendjes e thotë këtë; zgjidhni dhe vendoseni. {{cmd:DETAILS}} › Share e vendos listën tuaj në dosjen Dokumente dhe sjell atë që ka shtuar ekipi juaj. Cilësimet i fikin ofertat.
- **Etiketa në blloqe.** {{cmd:TAGS}} përcakton një etiketë (llojin e saj, vlerat që mund të marrë, blloqet ku zbatohet), e vendos te referencat e blloqeve që përzgjidhni, dhe i liston si një tabelë që mund ta ruani si CSV. Përkufizimet mbahen në DWG. Shihni [Etiketat](topic:tags).
- **Kufijtë e vizatimit.** {{cmd:LIMITS}} cakton një drejtkëndësh për vizatimin: rrjeta e mbush dhe zoom All e shfaq. Kufijtë shfaqen si kontur dhe ruhen në DWG dhe DXF, me kufijtë e letrës. Shihni [Caktoni kufijtë e vizatimit](topic:drawing-limits).

**Të punuarit me njerëz të tjerë dhe programe të tjera**

- **Kthejeni një markup në revizion.** {{cmd:REDLINE}} lexon paketën që shkruan MarkupCraft dhe liston çdo ndryshim. Pranoni ose refuzoni secilin me një shënim; të pranuarit marrin një re revizioni dhe një regjistër revizionesh në një hap zhbërjeje, dhe ruani skedarin e përgjigjeve që mbyll markup-et në MarkupCraft. Shihni [Kthejeni një markup në revizion](topic:redline-to-revision).
- **Vizatime që git dhe Fossil mund t'i bashkojnë.** Me {{ui:Skedarë të lehtë për bashkim}} të ndezur në {{ui:Cilësimet}} › {{ui:CadCraft}}, çdo objekt merr një çelës që nuk ndryshon kurrë (skedarët janë rreth 10 për qind më të mëdhenj). `cadcraft merge base ours theirs` bashkon pastaj redaktimet e dy personave mbi një objekt DWG ose DXF, objekt për objekt, dhe raporton vetëm aty ku dy persona kanë ndryshuar të njëjtën gjë. Shihni [Bashkoni redaktimet e dy personave mbi një vizatim](topic:merge-drawings).
- **Çfarë ndryshoi, me fjalë.** Te Historiku, Krahaso jep një listë të thjeshtë: ku ndryshuan gjërat, sa të mëdha janë vendet, çfarë u shtua, u hoq ose u ndryshua, dhe teksti që u redaktua. Shihni [Thuaje me fjalë çfarë ndryshoi](topic:changes-in-words).
- **Drejtimet dhe këndet.** Shkruani një drejtim si azimut topografik, për shembull N45°23'30"E, ose në gradë, minuta dhe sekonda, kudo ku kërkohet një kënd; AUNITS cakton si shfaqen këndet. Shihni [Shkruani dhe shfaqni azimutet dhe këndet](topic:bearings-and-angles).
- **Fontet tuaja SHX.** Jepini CadCraft një dosje fontesh SHX dhe stilet e teksteve që i emërojnë vizatohen me to, në ekran dhe në plotime. Shihni [Vizatoni tekst me fontet tuaja SHX](topic:shx-fonts).
- **Një diagram nga teksti.** {{cmd:DIAGRAM}} lexon një diagram rrjedhe Mermaid, një diagram komponentësh PlantUML, D2 ose një listë nga-në dhe vizaton blloqe dhe lidhës që mund t'i redaktoni. Shihni [Vizatoni një diagram nga teksti](topic:text-to-diagram).
- **Objektet OLE në një DWG.** {{cmd:OLELIST}} liston objektet OLE që mban një DWG dhe që CadCraft nuk mund t'i vendosë vetë, dhe vendos një kopje të një figure aty ku thoni ju. Shihni [Figurat](topic:pictures#objects-from-other-programs-ole).
- **Llogaritjet tuaja qëndrojnë me vizatimin.** Fletët e llogaritjeve dhe arsyet e projektimit mbahen në DWG me tabelën e klasave.

**Vizatim pa shikim**

- Ndizni {{ui:Vizatim pa shikim}} në {{ui:Cilësimet}} (ose shkruani {{cmd:ACCESS}} dhe përgjigjuni `On`). CadCraft thotë çdo komandë dhe rezultat nëpërmjet lexuesit tuaj të ekranit, përshkruan vizatimin dhe atë që është pranë kursorit, ju lejon të lëvizni kursorin dhe të zgjidhni pika me tastierë, dhe luan një tingull për çdo kapje dhe kapëse. Aty ku shfletuesi juaj njeh të folurit në kompjuterin tuaj, komandat mund të thuhen me zë. Shihni [Vizatoni pa shikim](topic:draft-without-sight).

**Në çdo aplikacion**

- **Gjuhët.** 54 gjuhë; dhjetë janë të reja (Lituanisht, Letonisht, Boshnjakisht, Marathi, Telugu, Shqip, Afrikanisht, Filipinisht, Suahili, Uzbekisht). Gjuhët përveç anglishtes janë draft me makinë derisa një folës amtare t'i lexojë.
- **Pajisjet hyrëse.** Kontrolle për skedën e prekjes, stilolapsin, mausin 3D, kontrolluesin e lojës dhe MIDI.
- **Rreshtat e veglave dhe grila e vetive.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ofron Mbështjell, 2 rreshta ose 1 rresht në aplikacionet e tjera. CadCraft e mban cilësimin e vet te {{ui:Cilësimet}} › {{ui:CadCraft}} (shih [Rreshtat e shiritit të veglave](topic:settings#toolbar-rows)). Grila e përbashkët e vetive është në tre aplikacione të tjera, jo në CadCraft.
- **Problemet, Live dhe shtesat.** Një panel i përbashkët Problemet që paralajmëron në çdo aplikacion, një pamje Live e kujt është ku në CadCraft Studio (shih [Punoni bashkë mbi një vizatim](topic:work-live)), dhe një listë shtesash.
- **Lidhni AI-në tuaj.** Një lidhje nga CadCraft Studio në të tetë aplikacionet, me një nivel vetëm-lexim, sugjerim ose redaktim për çdo aplikacion, dhe një regjistër me fjalë të thjeshta të asaj që bëri asistenti. CadCraft nuk ka AI të vetin, dhe Pyet në çdo aplikacion përdor AI-në që lidhni ju.

### Të rregulluara në 0.8.1

- **Vetitë tregonin 150 në vend të 12'-6"** në vizatime me këmbë dhe inç. Fushat që aplikacioni i lexon vetë e marrin tekstin e tyre përsëri.
- **Skedarë DWG ku seksioni i klasave lexohej si lloj i gabuar** (GitHub cadcraft#5) tani hapen saktë.
- **Kryqi nuk shfaqet më pas dritareve të kërcyera.**
- **Studio dhe edicionet e paketuara mund të ndërrojnë gjuhën gjatë ekzekutimit.** Më parë ishin vetëm në anglisht. Nuk është provuar ende në çdo platformë: na tregoni nëse gjuha nuk ndryshon.
- **Tabletët në portret** i japin hapësirën e tepërt të rrjetës fushës së vizatimit, dhe modaliteti i fletëve nis në 760 px ose më pak.
- **STRETCH me dritare kryqëzuese, dhe LIMITS,** u raportuan në Studio 0.8.0 dhe ishin tashmë të sakta në ndërtimin për web 0.8; instaluesi i raportuesit ishte më i vjetër. Studio 0.8.1 i përmban.

### Ende jo në këtë version

- **0.8 dhe 0.8.1 nuk janë me nënshkrim kodi.** Windows mund të paralajmërojë (zgjidhni {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}); në Mac, klikoni me të djathtën mbi CadCraft Studio dhe zgjidhni {{ui:Hap}}. Versionet për dyqane janë në pritje, dhe ndërtimi për iPad dhe iPhone nuk u rindërtua për 0.8.1.
- **Skicat me stilolaps dhe fotot e skicave** janë provuar vetëm në foto të përgjithshme dhe me mi, jo ende me stilolaps të vërtetë, ekran prekjeje ose skicë me dorë në letër.
- **Vizatimi pa shikim** është testuar me kontrolle të automatizuara, jo ende me lexues ekrani ose me një testues të verbër.
- **Ndarja e detajeve** nuk ka pasur kontroll nga dy persona, dhe një dosje Team Cloud Plan si dosje Dokumente nuk është ndërtuar.
- **Bashkimi** funksionon për skedarët DWG dhe DXF të CadCraft; i njëjti për skedarët e programeve të tjera nuk është ndërtuar.
- **Anulimi midis dritareve:** CadCraft raporton çdo hap të përfunduar, por Studio nuk ka ende një Zhbëj të vetëm për të gjitha aplikacionet; çdo aplikacion zhbën hapat e vet.
- **OLE objektet e një DWG** mbahen por nuk vizatohen në vendin e tyre.
- **Leximi i tabelave të stilit të plotimit (skedarë CTB)** nga programe të tjera është ndërtuar, por nuk është kontrolluar me një skedar nga një program tjetër.
- **Lidhni AI-në tuaj:** lidhja me një klik në Studio, lidhësi i strehuar për AI në shfletues, çelësi juaj API brenda Studio dhe paketa MCP e publikuar nuk premtohen në këtë version.

Për versionin para këtij, shihni [Çfarë ka të re në 0.7](topic:whats-new-0-7).
