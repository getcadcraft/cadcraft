---
title: Çfarë ka të re në 0.8 dhe 0.8.1
summary: Një hije që e përfundon vizatimin tënd, skica me stilolaps dhe fotografi skicash të kthyera në gjeometri, fletë që shtrohen vetë, detaje të propozuara ndërsa vizaton, GRIDMOVE dhe AUTODIM, etiketa, skedarë të lehtë për bashkim, redline-e të kthyera në revizione, vizatim pa shikim, kufij vizatimi, azimute, fonte SHX, diagrame nga tekst, dhe ndreqje në 0.8.1.
keywords: çfarë ka të re, what's new, shënimet e versionit, regjistri i ndryshimeve, ndryshime, 0.8, 0.8.1, version, veçori të reja, plotësim automatik, hije, tab, sketchfix, photosketch, autosheet, detaje, gridmove, autodim, etiketa, redline, bashkim, git, fossil, qasje, vizatim pa shikim, lexues ekrani, kufij, azimute, aunits, shx, diagram, ole, historik, krahaso, me fjalë, veti, këmbë dhe inç, stretch, gjuhët, pajisje hyrjeje, probleme, live, asistentë
from: 9dd82db5
---

Ky është ajo që ndryshoi në CadCraft 0.8 dhe 0.8.1, krahasuar me 0.7. 0.8 (1 nëntor 2026) shton ndihmës vizatimi që punojnë nga vizatimi yt, me rregulla në kompjuterin tënd dhe pa model, ndërsa 0.8.1 (2 nëntor 2026) ndreq gabimet e raportuara pas tij.

## Të reja

### Vizatim që e përfundon mendimin tënd

- **Një hije tregon çfarë vjen më pas.** Kur nuk po ekzekutohet asnjë komandë, një hije gri me vija të ndërprera tregon atë që thonë modelet e vetë vizatimit tënd se vjen më pas: montantin e radhës me të njëjtën distancë, hapin e radhës të shkallës, murin që mungon të një dhome. Shtyp {{key:Tab}} për ta vizatuar si një hap zhbërjeje, ose {{key:Esc}} për ta hequr. Shikon vetëm objektet më të fundit, prandaj mbetet e rrjedhshme në një vizatim të madh. Fike në {{ui:Cilësimet}} › {{ui:CadCraft}} ose me {{cmd:AUTOCOMPLETE}} `Off`.
- **Pika tjetër kur vizaton një vijë.** Gjatë {{cmd:LINE}} ose {{cmd:PLINE}}, hija është pika tjetër: hapi i radhës i shkallës, katërta kulm e një drejtkëndëshi, ose pika që e mbyll. Afro kursorin dhe shtyp {{key:Tab}}, sikur të kishe klikuar atje.
- **Skicat me stilolaps bëhen gjeometri e saktë.** {{cmd:SKETCHFIX}}: vizato vija të lira me stilolaps, mouse ose gisht dhe secila bëhet një vijë, rreth, hark, drejtkëndësh ose polivijë e pastër, e ngjitur me atë që është tashmë e vizatuar. Shih [Skicoje me stilolaps dhe merr gjeometri të saktë](topic:sketch-with-a-pen).
- **Një fotografi e një skice bëhet vizatim.** {{cmd:PHOTOSKETCH}} (`PSK`) gjen letrën në foto, drejton perspektivën, zbaton madhësinë e letrës dhe shkallën që jep, dhe kalon vijat e stilolapsit në një shtresë për çdo ngjyrë stilolapsi. Shkrimi nuk kalohet.
- **Vendos përmasa sipas rregullave.** {{cmd:AUTODIM}} (`ADIM`) krijon zinxhirë përmasash përgjatë anëve që zgjedh, një përmasë të përgjithshme, gjerësi hapjesh, diametra vrimash dhe, me `Grid`, distancën e rrjetit. Nuk përsërit kurrë një përmasë që ekziston tashmë.
- **Zhvendos një vijë rrjeti dhe grupi ndjek.** {{cmd:GRIDMOVE}} (`GM`): muret që përfundojnë në vijën e rrjetit shtrihen me të, muret përgjatë saj, kolonat, flluska dhe etiketa e saj zhvendosen, dhe përmasat mbi të matin distancën e re. Një hap zhbërjeje.

### Fletë, detaje dhe etiketa

- **Fletë që shtrohen vetë.** {{cmd:AUTOSHEET}} merr pamjet e tua me emër (ose pjesët e veçanta të modelit), zgjedh një madhësi letre dhe një shkallë standarde, dhe vendos pamjet në fletë të reja me një bllok titulli dhe një mbishkrim emri dhe shkalle. Gjithçka mbetet e redaktueshme. Shih [Shtrimi i fletëve për mua](topic:lay-out-sheets-for-me).
- **Detajet e firmës tënde, të propozuara ndërsa vizaton.** {{cmd:DETAILS}} (`DET`) mban blloqet e tua të detajeve. Kur ajo që zgjedh përputhet me një bllok nga fjalët në shtresat, emrat e blloqeve dhe shënimet e tij, shiriti i gjendjes e thotë; zgjidhe dhe vendose. {{cmd:DETAILS}} › Ndaj vendos listën tënde në dosjen Dokumente dhe sjell atë që ka shtuar ekipi yt. Cilësimet i fik propozimet.
- **Etiketa mbi blloqe.** {{cmd:TAGS}} përcakton një etiketë (llojin, vlerat që mund të marrë, blloqet ku zbatohet), e vendos te referencat e blloqeve që zgjedh dhe i liston si tabelë që mund ta ruash si CSV. Përkufizimet mbahen në DWG. Shih [Etiketat](topic:tags).
- **Kufijtë e vizatimit.** {{cmd:LIMITS}} vendos një drejtkëndësh për vizatimin: rrjeti e mbush dhe zmadhimi Të gjitha e shfaq. Kufijtë shfaqen si kontur dhe ruhen në DWG dhe DXF, bashkë me kufijtë e letrës. Shih [Vendos kufijtë e vizatimit](topic:drawing-limits).

### Punë me njerëz të tjerë dhe me programe të tjera

- **Kthe një shënim në revizion.** {{cmd:REDLINE}} lexon paketën që shkruan MarkupCraft dhe liston çdo ndryshim. Prano ose refuzo secilin me një shënim; ato të pranuara marrin një re revizioni dhe një regjistër revizionesh në një hap zhbërjeje të vetëm, dhe ruan skedarin e përgjigjeve që mbyll shënimet në MarkupCraft. Shih [Kthe një shënim në revizion](topic:redline-to-revision).
- **Vizatime që git dhe Fossil mund t'i bashkojnë.** Me {{ui:Skedarë të lehtë për bashkim}} të aktivizuar në {{ui:Cilësimet}} › {{ui:CadCraft}}, çdo objekt merr një çelës që nuk ndryshon kurrë (skedarët janë rreth 10 për qind më të mëdhenj). `cadcraft merge base ours theirs` më pas bashkon ndryshimet e dy personave në një objekt DWG ose DXF pas objekti dhe raporton vetëm aty ku dy persona kanë ndryshuar të njëjtën gjë. Shih [Bashko ndryshimet e dy personave në një vizatim](topic:merge-drawings).
- **Çfarë ndryshoi, me fjalë.** Te Historiku, Krahaso jep një listë të thjeshtë: ku ndryshuan gjërat, sa të mëdha janë vendet, çfarë u shtua, u hoq ose u ndryshua, dhe teksti që u redaktua. Shih [Thuaj me fjalë çfarë ndryshoi](topic:changes-in-words).
- **Azimute dhe kënde.** Shkruaj një drejtim si azimut gjeodezik si N45°23'30"E, ose në gradë, minuta dhe sekonda, kudo ku kërkohet një kënd; AUNITS cakton si shfaqen këndet. Shih [Shkruaj dhe shfaq azimutet dhe këndet](topic:bearings-and-angles).
- **Fontet e tua SHX.** I jep CadCraft një dosje me fonte SHX dhe stile tekstesh që i emërtojnë, dhe vizatohen me to, në ekran dhe në printime. Shih [Vizato tekst me fontet e tua SHX](topic:shx-fonts).
- **Një diagram nga tekst.** {{cmd:DIAGRAM}} lexon një diagram rrjedhe Mermaid, një diagram komponentësh PlantUML, D2 ose një listë nga-te, dhe vizaton blloqe dhe lidhës që mund t'i redaktosh. Shih [Vizato një diagram nga tekst](topic:text-to-diagram).
- **Objekte OLE në një DWG.** {{cmd:OLELIST}} liston objektet OLE që mbart një DWG dhe që CadCraft nuk mund t'i vendosë vetë, dhe vendos një kopje të një fotografie aty ku thua. Shih [Fotografitë](topic:pictures#objects-from-other-programs-ole).
- **Llogaritjet e tua qëndrojnë me vizatimin.** Fletët e llogaritjes dhe arsyet e projektimit mbahen në DWG bashkë me tabelën e klasave.

### Vizatim pa shikim

- Aktivizo {{ui:Vizatim pa shikim}} në {{ui:Cilësimet}} (ose shkruaj {{cmd:ACCESS}} dhe përgjigju `On`). CadCraft lexon çdo komandë dhe rezultat me lexuesin e ekranit tënd, përshkruan vizatimin dhe atë që është pranë kursorit, të lë të lëvizësh kursorin dhe të zgjedhësh pika me tastierë, dhe luan një tingull për çdo kapje dhe çdo dorezë. Aty ku shfletuesi yt mund të njohë fjalimin në kompjuterin tënd, komandat mund të diktohen. Shih [Vizato pa shikim](topic:draft-without-sight).

### Në çdo aplikacion

- **Gjuhët.** 54 gjuhë; dhjetë janë të reja (lituanisht, letonisht, boshnjakisht, marathi, telugu, shqip, afrikanisht, filipinisht, suahili, uzbekisht). Gjuhët përveç anglishtes janë përkthime automatike të përafërta derisa t'i lexojë një folës amtar.
- **Pajisjet e hyrjes.** Trackpad, stilolaps, mouse 3D, kontrollues lojërash dhe kontrolle MIDI.
- **Rreshtat e shiritit të veglave dhe tabela e vetive.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ofron Wrap, 2 rreshta ose 1 rresht në aplikacionet e tjera. CadCraft mban cilësimin e vet te {{ui:Cilësimet}} › {{ui:CadCraft}} (shih [Rreshtat e shiritit të veglave](topic:settings#toolbar-rows)). Tabela e përbashkët e vetive është në tre aplikacione të tjera, jo në CadCraft.
- **Probleme, Live dhe shtojcat.** Një panel i përbashkët Problemesh që paralajmëron në çdo aplikacion, një pamje Live e kujt është ku në CadCraft Studio (shih [Punoni bashkërisht në një vizatim](topic:work-live)), dhe një listë shtojcash.
- **Lidh AI-në tënde.** Një lidhje nga CadCraft Studio me të tetë aplikacionet, me një nivel vetëm-lexim, sugjerim ose redaktim për çdo aplikacion, dhe një regjistër me fjalë të thjeshta të asaj që bëri asistenti. CadCraft nuk ka AI të vetën, dhe Pyet në çdo aplikacion përdor AI-në që lidh ti.

## Të ndrequra në 0.8.1

- **Vetitë shfaqnin 150 në vend të 12'-6"** në vizatime me këmbë dhe inç. Fushat që aplikacioni i lexon vetë rikthejnë tekstin e tyre.
- **Skedarët DWG te të cilët seksioni i klasave u lexua si lloj i gabuar** (GitHub cadcraft#5) hapen tani saktë.
- **Kryqi i kursorit nuk shfaqet më pas dritareve kërcyese.**
- **Studio dhe edicionet e paketuara mund të ndërrojnë gjuhën gjatë ekzekutimit.** Më parë ishin vetëm në anglisht. Ende nuk u testua në çdo platformë: na thuaj nëse gjuha nuk ndryshon.
- **Tabletat në pozicion vertikal** i japin lartësinë e rezervuar të rrjetit pamjes, dhe mënyra e fletëve fillon në 760 px ose më pak.
- **STRETCH me dritare kryqëzuese, dhe LIMITS,** u raportuan në Studio 0.8.0 dhe ishin tashmë të sakta në versionin web 0.8; instaluesi i raportuesit ishte më i vjetër. Studio 0.8.1 i mban.

## Ende jo në këtë version

- **0.8 dhe 0.8.1 nuk janë të nënshkruara me kod.** Windows mund të paralajmërojë (zgjidh {{ui:Informacion shtesë}}, pastaj {{ui:Ekzekuto gjithsesi}}); në Mac, kliko me butonin e djathtë mbi CadCraft Studio dhe zgjidh {{ui:Hap}}. Versionet për dyqan janë në pritje, dhe versioni për iPad dhe iPhone nuk u rindërtua për 0.8.1.
- **Skicat me stilolaps dhe fotografitë e skicave** janë provuar vetëm në fotografi të trilluara dhe me mouse, jo ende me stilolaps të vërtetë, ekran prekjeje ose skicë me dorë në letër.
- **Vizatimi pa shikim** është testuar me kontrolle automatike, jo ende me lexues ekrani ose testues të verbër.
- **Ndarja e detajeve** nuk ka pasur kontroll me dy persona, dhe një dosje Team Cloud Plan si dosja Dokumente nuk është ndërtuar.
- **Bashkimi** funksionon për skedarët DWG dhe DXF të CadCraft; i njëjti gjë për skedarët e aplikacioneve të tjera nuk është ndërtuar.
- **Zhbërja midis dritareve:** CadCraft raporton çdo hap të përfunduar, por Studio nuk ka ende një Zhbëj të vetme për të gjitha aplikacionet; çdo aplikacion zhbën hapat e vet.
- **Objektet OLE të një DWG** ruhen, por nuk vizatohen në vend.
- **Leximi i tabelave të stilit të printimit (skedarë CTB)** nga programe të tjera është ndërtuar, por nuk është kontrolluar me një skedar nga një program tjetër.
- **Lidh AI-në tënde:** lidhja me një klik në Studio, lidhësi i strehuar për AI në shfletues, çelësi yt API brenda Studio dhe paketa e publikuar MCP nuk premtohen në këtë version.

Për versionin para këtij, shih [Çfarë ka të re në 0.7](topic:whats-new-0-7).
