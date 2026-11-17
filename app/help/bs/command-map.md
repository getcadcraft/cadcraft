---
title: Mapa komandi: šta upisati
summary: Sve komande koje CadCraft ima, s njihovim kratkim imenima, od A do Z, napravljene iz samog programa, i navike iz drugih programa za crtanje koje se razlikuju.
keywords: mapa komandi, komande, aliasi, kratka imena, dolazak iz drugog programa, spisak komandi, šta upisati, brisanje, odsijecanje, ekvivalent, razlike
from: 3bdfd3e6
---

CadCraft preuzima nazive komandi i kratka imena koja ljudi poznaju iz drugih programa za crtanje: upiši `L` za liniju, `TR` za odsijecanje, `E` za brisanje. Zato za većinu njih ne postoji tabela prijevoda koju treba učiti: ime koje poznaješ ovdje je isto. Spisak ispod sadrži sve komande koje CadCraft ima, napravljen iz samog programa. {{key:Enter}} ponavlja posljednju komandu; `HELP` u komandnoj liniji ispisuje isti spisak.

Nekoliko njih nije isto, ili nije napravljeno:

- **Spasi** preuzima kopiju u pregledniku ({{cmd:SAVE}}, {{cmd:SAVEAS}}); u CadCraft Studiju upisuje datoteku. Vidi [Dolazak iz drugog softvera za crtanje](topic:coming-from).
- **PLOT** pravi PDF (također PNG i SVG), uz tabelu stilova ispisa; nema upravitelja postavki stranice.
- **DIMSTYLE** i **PEDIT** su napravljene; **PEDIT** nema opciju Uredi vrh (to rade ručice).
- **TABLE** nije napravljena; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} jesu.
- Vlastite komande rutine (AutoLISP `C:NAME`) pojavljuju se nakon što je učitaš pomoću {{cmd:APPLOAD}}; ovdje nisu navedene.

## Sve komande (398)

| Komanda | Kratka imena | Šta radi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Okreće 3D prikaz lijevim dugmetom miša |
| `ACCESS` | `AX` | Uključuje ili isključuje crtanje bez vida: rezultati se čitaju kroz čitač ekrana, kursor tastature na crtežu, zvuci hvatanja i izgovorene komande. |
| `ALIASEDIT` |  | Uređuje aliase komandi u jednoj tekstualnoj datoteci (poznati formati L, *LINE) |
| `ALIGN` | `AL` | Premješta i okreće objekte tako da izvorne tačke padnu na odredišne tačke (jedan, dva ili tri para), i po potrebi ih skalira |
| `ALIGNPANEL` | `ALP` | Otvara panel Poravnaj i raspodijeli |
| `ALIGNTO` |  | Poravnava lijeve, središnje, desne, gornje, srednje ili donje ivice odabranih objekata, prema odabiru, prvom ili posljednjem odabranom objektu, ili tački |
| `ANNOALLVISIBLE` | `ANNOALL` | Prikazuje anotativne objekte na svakoj razmjeri, ili samo tamo gdje je razmjera prozora pogleda (ili crteža) na njihovom spisku |
| `ANNOSCALE` | `CANNOSCALE` | Postavlja razmjeru anotacije crteža: anotativni tekst i kote se mijenjaju tako da se ispisuju u istoj veličini |
| `APPLOAD` | `AP` | Učitava aplikacije: LISP rutine (.lsp) i njihove datoteke dijaloga (.dcl); Paket za pokretanje (AP) |
| `ARC` | `A` | Luk: 3 tačke, Početak/Centar/Kraj, Početak/Centar/Ugao, Početak/Centar/Dužina, Početak/Kraj/Ugao, Početak/Kraj/Smjer, Početak/Kraj/Poluprečnik, Centar/Početak/Kraj, Centar/Početak/Ugao, Centar/Početak/Dužina, Nastavi |
| `AREA` | `AA` | Površina i obim po tačkama ili objektu; Dodaj i Oduzmi čuvaju tekući zbir (AA) |
| `ARRAY` | `AR` | Kopije u redovima i kolonama, ili u krugu oko centra (AR) |
| `ARRAYASSOCIATIVITY` |  | Određuje hoće li komande ARRAY praviti nizove koji ostaju izmjenjivi (1) ili obične kopije (0) |
| `ARRAYCLOSE` |  | Završava uređivanje izvornih objekata niza |
| `ARRAYEDIT` |  | Mijenja niz napravljen opcijom Pridruženo: brojeve, razmak, izvorne objekte, jednu stavku |
| `ARRAYPATH` |  | Kopije objekata duž linije, luka, polilinije ili druge krive |
| `ARRAYPOLAR` |  | Kopije u krugu oko središnje tačke |
| `ARRAYRECT` |  | Kopije u redovima i kolonama |
| `ASBUILT` | `ASB` | ASBUILT čita tačke izvedenog stanja koje je ekipa izmjerila (CSV / TXT, kako ih piše EXPORTPOINTS) i upoređuje ih s tačkama crteža: unutar ili van tolerancije, nije izmjereno, višak. Označava ih na sloju AS-BUILT i preuzima CSV izvještaj. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definiše atribut (oznaku za koju blok traži vrijednost) za stavljanje u blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Uređuje vrijednosti atributa referenci bloka u komandnoj liniji, jednu za drugom (Enter zadržava vrijednost) |
| `ATTSYNC` |  | Usklađuje reference bloka s definicijama atributa: nove se dodaju sa svojim zadanim vrijednostima, uklonjene se brišu, položaji i tekst se vraćaju; vrijednosti se čuvaju |
| `AUDIT` |  | Provjerava otvoreni crtež za oštećenja: brojeve koji nisu konačni, objekte bez veličine, nedostajuće slojeve, blokove, stilove i tipove linija, blokove koji sadrže sami sebe, zajedničke identifikatore, pokvarene kote i šrafure. Navodi što je pronašla po vrsti i pita prije popravke; popravka je jedan korak poništavanja. |
| `AUNITS` | `ANGUNITS` | Kako se uglovi prikazuju i upisuju: decimalni stepeni, stepeni-minute-sekunde ili pravci kao N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatsko dovršavanje crteža uključeno ili isključeno, ili ispisuje što obrasci crteža sada predlažu. |
| `AUTOCONSTRAIN` |  | Dodaje ograničenja koincidencije, horizontalnosti i vertikalnosti tamo gdje je geometrija već bliska |
| `AUTODIM` | `ADIM` | Kotiranje po pravilima: ukupna veličina, lanci duž stranica, otvori, prečnici rupa i razmak mreže, bez ponavljanja onoga što je već kotirano. |
| `AUTOSHEET` | `ASH` | Sam raspoređuje listove: bira papir i standardne razmjere i postavlja svaki pogled s natpisom i naslovnim blokom. |
| `BATTMAN` |  | Upravitelj atributa blokova: redoslijed, oznake, upiti, zadane vrijednosti i načini atributa bloka, zatim ažuriranje njegovih referenci |
| `BCLOSE` |  | Zatvara uređivač blokova: spašava blok ili odbacuje promjene |
| `BCONVERT` |  | BCONVERT pronalazi geometriju koja se ponavlja i pretvara je u reference blokova. Odaberi objekte koji se ponavljaju: pronalazi se svaki drugi skup objekata u otvorenom prostoru koji je ista geometrija, pomjerena i okrenuta pod bilo kojim uglom, a s uključenim Ogledalski i Skalirano pronalaze se i zrcalne slike i kopije druge veličine. Daj novom bloku ime i osnovnu tačku; odabir i svaka kopija postaju reference na njega, svaka sa svojom rotacijom i razmjerom. Ili izaberi Blok i imenuj postojeći blok da pronađeš slobodne kopije njegovih objekata. Kopija mora imati isti sloj, boju, tip linije i debljinu linije, osim ako je Svojstva postavljen na Zanemari. Objekti na zaključanim slojevima ostaju netaknuti. Jedan korak poništavanja. |
| `BEDIT` | `BE` | Uređivač blokova: uređuje objekte i atribute bloka; BCLOSE spašava (BE) |
| `BLEND` |  | BLEND: spline između krajeva dvije otvorene krive, odabrane blizu krajeva za spajanje. CONtinuity: Tangentno prati oba smjera, Glatko prati i kako se savijaju. |
| `BLOCK` | `B`, `BMAKE` | Pravi blok od objekata (postaju jedna referenca) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: svaka referenca na jedan blok postaje referenca na drugi, na istom mjestu, s istom razmjerom i rotacijom. Vrijednosti atributa koje oba bloka imaju se čuvaju. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE prikazuje panel Blokovi s kursorom u njegovom filteru. Panel prikazuje sliku svakog bloka (najnedavnije postavljeni prvi), kao spisak ili mrežu; klikni na sliku ili je prevuci na crtež da postaviš blok pomoću INSERT. Pod Bibliotekama dodaj vlastitu datoteku DWG ili DXF: njeni blokovi se prikazuju sa slikama i kopiraju se u ovaj crtež kad postaviš jedan. U CadCraft Studiju može se dodati i fascikla crteža, a datoteke i fascikle se pamte. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolone tabele spiska materijala, grupisanje, sortiranje, naslov, ukupni zbirovi i napomene |
| `BOMEXPORT` |  | Spašava tabelu spiska materijala kao datoteku .csv |
| `BOMTABLE` | `BOM` | Živa tabela spiska materijala jedne zone ili cijelog crteža |
| `BOMUPDATE` |  | Ažurira sve tabele spiska materijala odmah, i zamrznute |
| `BOMZONE` | `BZONE` | Imenovano područje crteža za spisak materijala: dva ugla, poligon ili obris zatvorenog objekta |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): odaberi tačku unutar zatvorene površine i dobij zatvorenu poliliniju oko nje. Lukovi ostaju lukovi. Otoci obrisuju i površine unutar nje. |
| `BOX` |  | Kutija: dva ugla i visina (3D) |
| `BPARAMETER` | `BPARAM` | Još nije napravljeno: dodavanje parametra (kao što je Vidljivost) bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri bloka: imenovani parametri s formulama, i nekoliko parametara vidljivosti u jednom bloku. Radi u uređivaču blokova (dodjeljuje odabrane objekte stanju) i na odabranoj referenci (njene vlastite vrijednosti i stanja). |
| `BREAK` | `BR` | Prekida liniju, luk, krug ili poliliniju između dvije tačke (BR) |
| `BREAKATPOINT` |  | Dijeli liniju, luk ili poliliniju na dva dijela u tački |
| `BREAKLINE` |  | Crta liniju sa simbolom prekida; njena veličina i produženje preko krajeva se pamte. |
| `BREPLACE` |  | BREPLACE mijenja jedan blok drugim. Odabrano: odaberi reference blokova i imenuj blok koji će se koristiti umjesto njih. Sve: imenuj blok i njegovu zamjenu, i svaka referenca u svakom prostoru i unutar drugih blokova se mijenja. Referenca zadržava svoje mjesto, razmjeru, rotaciju i sloj, i vrijednosti atributa koje oba bloka imaju; vrijednosti za koje novi blok nema mjesto se odbacuju i navode. |
| `BSEARCH` |  | BSEARCH pronalazi blokove. Ime: dio imena bloka, ili uzorak sa * i ?. Atribut: vrijednost (ili TAG=vrijednost) koju drže atributi reference. Geometrija: odaberi objekte ili jednu referencu bloka, i ispisuju se blokovi čiji je oblik najmanje 85% sličan, najbolji prvi; veličina, rotacija i ogledalska slika se ne računaju. Reference pronađene u otvorenom prostoru se označavaju, spremne za sljedeću komandu. |
| `BURST` |  | Rastavlja reference blokova i zadržava što njihovi atributi kažu: svaka vrijednost postaje tekst na sloju atributa. |
| `BVHIDE` | `BVH` | U uređivaču blokova: sakriva objekte u tekućem stanju vidljivosti. |
| `BVSHOW` | `BVSH` | U uređivaču blokova: prikazuje objekte koje tekuće stanje vidljivosti krije (prikazuju se izblijedjeli za odabir). |
| `BVSTATE` | `BVS` | U uređivaču blokova, na bloku sa stanjima vidljivosti: prebaci se na stanje ili dodaj, preimenuj ili obriši jedno. |
| `CAL` |  | Izračunava dužinu ili broj: + − * / i zagrade, kako ih upisuješ bilo gdje |
| `CENTERLINE` | `CL` | Središnja linija između dvije linije: na pola puta između njih, ili duž simetrale kad se sastaju (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Oznaka centra: križ u središtu kruga ili luka, sa središnjim linijama koje malo prelaze preko njega (CM) |
| `CHAMFER` | `CHA` | Skosi ugao između dvije linije (D dvije udaljenosti, A (A) dužina i ugao, P (P) svaki ugao polilinije) |
| `CHSPACE` |  | CHSPACE: pomjera objekte između lista i modela kroz prozor pogleda. Skaliraju se i okreću tako da izgledaju isto s druge strane. Na listu idu u model; dok radiš kroz prozor pogleda (MSPACE) dolaze na list. |
| `CIRCLE` | `C` | Centar i poluprečnik, prečnik, 2 ili 3 tačke |
| `CLASS` |  | Stavlja odabrane objekte u klasu, ili kad ništa nije odabrano postavlja aktivnu klasu (? ih navodi) |
| `CLASSES` | `CLS` | Panel Klase: klase razvrstavaju objekte kroz slojeve; prikazuj, sakrivaj i oblikuj ih, i nadjačaj ih po prozoru pogleda (CLS) |
| `COMMANDLINE` | `CMDLINE` | Priključi ili otkači komandnu liniju, učini je jednom linijom, postavi broj linija historije ili otvori historiju (F2) |
| `COMPARESETTINGS` | `CMPSET` | Upoređuje stilove kota, stilove teksta, slojeve, listove ili jedinice: dva u ovom crtežu, ili ovaj crtež s drugim otvorenim, i kopira vrijednost s jednog na drugi. |
| `CONSTRAINTBAR` | `CBAR` | Prikazuje ili skriva trake ograničenja (Prikaži sve / Sakrij sve, ili po objektu) |
| `COPY` | `CO`, `CP` | Kopira objekte, onoliko puta koliko klikneš |
| `COPYBASE` |  | Kopira objekte u privremenu memoriju s osnovnom tačkom koju odabereš |
| `COPYCLIP` |  | Kopira objekte u privremenu memoriju (Ctrl+C); PASTECLIP ih postavlja |
| `COUNT` | `BCOUNT` | Broji reference blokova: odaberi jednu da označiš i prebrojiš svaku referencu njenog bloka |
| `COUNTTABLE` |  | Postavlja tabelu broja blokova |
| `CREDITS` |  | Stavlja zasluge Biblioteke u crtež kao tabelu. Pokreni ponovo da ažuriraš tabelu prema stavkama u crtežu sada. |
| `CURSORSIZE` |  | Veličina nišana: 100 ga pruža od ivice do ivice crteža (Postavke › Kursor › Cijeli ekran) |
| `CUTCLIP` |  | Izrezuje objekte u privremenu memoriju (Ctrl+X): kopiraj, pa obriši |
| `CYLINDER` | `CYL` | Valjak: centar, poluprečnik i visina (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Navodi blokove, njihove atribute i svojstva objekata kao tabelu u crtežu ili CSV datoteku |
| `DATALINK` | `DL` | Tabela iz CSV datoteke koja pamti datoteku, pa se može ponovo pročitati |
| `DATALINKUPDATE` | `DLU` | Ponovo čita datoteku veze podataka i ponovo puni njene tabele |
| `DCALIGNED` | `DCALI` | Kotno ograničenje: stvarna udaljenost između tačaka, tačke i linije, ili dvije linije |
| `DCANGULAR` | `DCANG` | Kotno ograničenje: ugao između dvije linije, ili luka |
| `DCCONVERT` |  | Pretvara kote nacrtane na geometriji koja se može ograničiti u kotna ograničenja |
| `DCDIAMETER` | `DCDIA` | Kotno ograničenje: prečnik kruga ili luka |
| `DCDISPLAY` |  | Prikazuje ili skriva kotna ograničenja na crtežu |
| `DCHORIZONTAL` | `DCHOR` | Kotno ograničenje: horizontalna udaljenost |
| `DCLINEAR` | `DCLIN` | Kotno ograničenje: horizontalna ili vertikalna udaljenost, od mjesta gdje je postaviš |
| `DCRADIUS` | `DCRAD` | Kotno ograničenje: poluprečnik kruga ili luka |
| `DCVERTICAL` | `DCVER` | Kotno ograničenje: vertikalna udaljenost |
| `DELBLOCKS` |  | Briše blokove: svaku referencu (i ugniježđene, na svakom listu) i definicije |
| `DELCONSTRAINT` | `DELCON` | Uklanja svako ograničenje (geometrijsko i kotno) s objekata koje odabereš |
| `DELOPENING` |  | Vadi vrata ili prozor iz zida. |
| `DESCRIBE` | `DESC` | Kaže što crtež sadrži: koliko objekata, koje vrste, koliko su veliki, što je odabrano. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Briše odabir (Esc) |
| `DETAILS` | `DET` | Detalji vlastite firme, pronađeni za ono što crtaš: pronađi, dodaj blok, navedi, ukloni, uključi ili isključi ponude. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Crta dijagram iz teksta: Mermaid dijagram toka, PlantUML dijagram komponenti, D2, spisak od-do ili draw.io XML, kao blokovi i veze koje možeš uređivati |
| `DIMALIGNED` | `DAL`, `DIMALI` | Stvarna udaljenost između dvije tačke |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ugao između dvije linije, luka, ili pomoću tri tačke |
| `DIMARC` | `DAR` | Kota dužine luka: udaljenost duž luka, sa simbolom luka (DAR) |
| `DIMASZ` |  | Postavka kote: veličina strelice |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kote složene od jedne osnovne linije |
| `DIMBREAK` | `DBREAK` | Prekida kotne i pomoćne linije tamo gdje se ukrštaju s drugim objektima (Auto), između dvije tačke (Ručno), ili uklanja prekide |
| `DIMCONSTRAINT` | `DCON` | Kotna ograničenja: linearna, poravnana, uglovna, poluprečnik, prečnik, pretvori |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Lanac kota, svaka od kraja posljednje |
| `DIMDEC` |  | Postavka kote: decimalna mjesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Prečnik luka ili kruga |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Oslobađa kote od objekata za koje su vezane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Mijenja tekst kote (Početna, Novi tekst, Rotiraj) ili kosi pomoćne linije (Kosa) |
| `DIMEXE` |  | Postavka kote: produženje preko kotne linije |
| `DIMEXO` |  | Postavka kote: pomak od ishodišta |
| `DIMGAP` |  | Postavka kote: razmak oko teksta |
| `DIMINSPECT` |  | Kota inspekcije: okvir oko vrijednosti s oznakom i koliko često se dio provjerava |
| `DIMJOGGED` | `DJO`, `JOG` | Kota poluprečnika sa prelomom: poluprečnik nacrtan od bliže tačke kad je centar daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Dodaje simbol preloma na linearnu ili poravnanu kotnu liniju, da pokaže da udaljenost nije nacrtana u razmjeri (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontalna ili vertikalna udaljenost (R za bilo koji ugao) |
| `DIMLUNIT` |  | Postavka kote: format dužine (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomački) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kota ordinate: udaljenost tačke od ishodišta UCS po X ili Y, na vodilici (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Nadjačava varijable kote na odabranim kotama bez mijenjanja njihovog stila; Obriši vraća stil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Poluprečnik luka ili kruga |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Veže tačke kote za objekte, pa prati i ponovo mjeri kad se oni pomjere (DRE) |
| `DIMSCALE` |  | Postavka kote: ukupna razmjera (veličine × ovo) |
| `DIMSPACE` |  | Ravnomjeran razmak između paralelnih kota, mjeren od osnovne kote (0 ih poravnava, Auto je dvostruka visina teksta) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Pravi, mijenja, postavlja tekući, briše, primjenjuje i upoređuje imenovane stilove kota (dijalog; -DIMSTYLE u komandnoj liniji) |
| `DIMTEDIT` | `DIMTED` | Pomjera tekst kote lijevo, desno ili na sredinu kotne linije, ili ga okreće |
| `DIMTEXTUNIT` | `DTU` | Tekst kote u mm, cm, m ili km, ili u jedinicama samog crteža: odabrane kote, inače nove (DTU) |
| `DIMTXT` |  | Postavka kote: visina teksta |
| `DIST` | `DI` | Udaljenost i ugao između dvije tačke |
| `DISTRIBUTE` |  | Ravnomjerno raspoređuje odabrane objekte, s jedne na drugu stranu ili gore i dolje: jednaki koraci između centara, ili jednaki razmaci; vanjska dva ostaju |
| `DIVIDE` | `DIV` | DIVIDE (DIV): oznake koje dijele liniju, luk, krug, poliliniju, spline ili elipsu na jednake dijelove. Tačke, ili s Blokom blok na svakoj oznaci. |
| `DOCUMENTS` | `DOCS` | Otvara panel Dokumenti: odjavljuje i prijavljuje crteže, revizije, stanja izdanja i odobrenje za fasciklu projekta |
| `DOOR` | `DR` | Stavlja vrata u zid. Strana na koju klikneš je strana na koju se otvaraju. |
| `DRAWORDER` |  | Mijenja redoslijed crtanja: dovodi objekte naprijed, šalje ih nazad, ili ih stavlja iznad ili ispod drugih objekata. |
| `DUPLICATE` | `DUP` | Kopija koja se pomjera s kursorom: klikni da je spustiš (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Svojstva crteža: naslov, autor i ostalo, i tvoji vlastiti parovi imena i vrijednosti |
| `DXFOUT` |  | Preuzima crtež kao DXF R12 (Spasi zadržava vlastiti format) |
| `EATTEDIT` | `DDATTE` | Uređuje atribute reference bloka: vrijednosti, tekst i svojstva, jedan atribut po jedan |
| `ELLIPSE` | `EL` | Krajnje tačke osa i druga polovina ose |
| `ERASE` | `E`, `DELETE` | Uklanja objekte |
| `EXPLODE` | `X` | Rastavlja polilinije, blokove i kote na njihove dijelove |
| `EXPORT` | `EXP` | Spašava kopiju crteža u vrsti datoteke koju piše dodatak |
| `EXPORT3D` | `3DEXPORT` | Izvozi 3D model: GLB, OBJ ili STL |
| `EXPORTPOINTS` | `EXPPTS` | Piše tačke, i tačke umetanja blokova s jednim atributom kao opisom, u CSV ili TXT datoteku (PNEZD, PENZD ili XYZ) za BIM i geodetske programe |
| `EXTEND` | `EX` | Produžava objekte do drugih: klikni blizu kraja, prevuci kroz nekoliko, ili Shift+klik za odsijecanje |
| `EXTRIM` |  | EXTRIM: odaberi jednu ivicu za rezanje, pa stranu. Sve što prelazi ivicu se odsijeca s te strane. Dijelovi koji bi nestali pokazuju se dok pomjeraš kursor. |
| `EXTRUDE` | `EXT` | Izvlači zatvorene 2D objekte u tijela (3D) |
| `FIELD` |  | Stavlja polje u tekst, ćeliju tabele ili atribut: datum, naziv datoteke, broj lista, svojstvo crteža, površinu ili dužinu objekta, ili formulu |
| `FILLET` | `F` | Zaobljuje ili hvata ugao između dva objekta (R poluprečnik, P svaki ugao polilinije, M nekoliko) |
| `FIND` |  | Pronalazi i zamjenjuje riječi u tekstu, vrijednostima atributa i tekstu kote |
| `FLATTEN` |  | Postavlja visinu (Z) i debljinu odabranih objekata na 0, i u blokovima koje koriste. |
| `FLOOR` |  | Odabire sprat na kojem se crta, dodaje jedan, ili premješta ili kopira odabir na njega. |
| `FLOORLAYERS` |  | Pretvara spratove u slojeve nazvane Floor-Layer, za datoteku koja ide nekome bez spratova. |
| `FLOORS` | `FLR` | Otvara panel Spratovi: slaže spratove u jednom prostoru modela. |
| `GCCOINCIDENT` |  | Ograničenje: dvije tačke se sastaju, ili tačka ostaje na objektu |
| `GCCOLLINEAR` |  | Ograničenje: dvije linije ostaju na jednoj liniji |
| `GCCONCENTRIC` |  | Ograničenje: dva kruga ili luka dijele centar |
| `GCEQUAL` |  | Ograničenje: dvije linije ostaju iste dužine, ili dva kruga/luka istog poluprečnika |
| `GCFIX` |  | Ograničenje: tačka ili cijeli objekt ostaje tamo gdje jeste |
| `GCHORIZONTAL` |  | Ograničenje: linija (ili dvije tačke) ostaje horizontalna |
| `GCPARALLEL` |  | Ograničenje: dvije linije ostaju paralelne |
| `GCPERPENDICULAR` |  | Ograničenje: dvije linije ostaju pod pravim uglom |
| `GCSYMMETRIC` |  | Ograničenje: dvije tačke, linije ili krugovi se zrcale preko linije |
| `GCTANGENT` |  | Ograničenje: linija i krug ili luk (ili dva od njih) ostaju tangentni |
| `GCVERTICAL` |  | Ograničenje: linija (ili dvije tačke) ostaje vertikalna |
| `GDSIN` | `GDS` | Prikazuje IC raspored (datoteka GDSII toka): svaki sloj i tip podataka kao sloj crteža, ravno, u korisničkim jedinicama; samo za pregled i mjerenje (laboratorijska proba) |
| `GEOMCONSTRAINT` | `GCON` | Geometrijska ograničenja: horizontalnost, vertikalnost, paralelnost, tangentnost, koincidencija… |
| `GLBOUT` |  | Izvozi 3D model kao GLB (glTF) |
| `GRADIENT` | `GD` | Popunjava površinu prelivom jedne ili dvije boje |
| `GRIDMOVE` | `GM` | Pomjera liniju mreže i nosi ono što na njoj visi: zidovi se istežu, stubovi, oznake i naljepnice se pomjeraju, kote prate. |
| `GROUP` | `G` | GROUP (G): daje odabranim objektima zajedničko ime. Klik na jedan od njih tada odabire sve. Enter kod imena pravi grupu bez imena. |
| `GROUPEDIT` |  | GROUPEDIT: mijenja grupu. Odaberi jedan od njenih objekata ili daj njeno Ime, zatim Dodaj ili Ukloni objekte, PREIMENUJ je, mijenja njen Opis, ili kaže hoće li klik odabrati cijelu grupu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Popunjava površinu punim ispunom ili uzorkom: klikni unutra, ili odaberi zatvorene objekte (H) |
| `HATCHEDIT` | `HE` | Mijenja šrafuru: uzorak, razmjeru, ugao, ishodište i njenu vezu s granicom. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponovo pravi granične polilinije od šrafure, povezane s njom ili ne |
| `HATCHTOBACK` |  | Šalje svaku šrafuru iza svega ostalog. |
| `HELP` | `?` | Ovaj spisak |
| `HIDEOBJECTS` |  | Sakriva odabrane objekte do UNISOLATEOBJECTS. Ne čuva se u crtežu. |
| `HISTORY` | `HIST` | HISTORY (HIST): verzije ovog crteža — kopije sačuvane na ovom računaru kad ih Studio spašava, i verzije u oblaku — za otvaranje, vraćanje i upoređivanje, s promjenama prikazanim bojom. |
| `ID` |  | Koordinate tačke |
| `IMAGE` | `IM` | Daje CadCraft-u datoteke slika koje crtež koristi (DWG čuva samo gdje su bile). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Postavlja sliku (PNG ili JPEG) iz datoteke. |
| `IMAGECLIP` | `ICL` | Reže sliku na pravougaonik ili poligon, ili uklanja njen isječak. |
| `IMPORT` | `IMP` | Uvozi datoteku vrste koju čita dodatak, u ovaj crtež |
| `INSERT` | `I`, `DDINSERT` | Postavlja blok (S razmjera, R rotacija); F iz datoteke DWG/DXF, L iz biblioteke |
| `INTERSECT` | `IN` | Zadržava samo ono što tijela imaju zajedničko (3D), ili površinu koju dijele 2D regije |
| `ISODRAFT` |  | ISODRAFT: izometrijsko crtanje uključeno ili isključeno, ili ravno na ravan Lijevo, Gore ili Desno. Dok je uključeno, Orto i polarno praćenje prate dvije ose ravni, mreža se crta izometrijski, a ELLIPSE ima Izokrug. |
| `ISOLATEOBJECTS` | `ISOLATE` | Prikazuje samo odabrane objekte; sve ostalo u ovom prostoru je skriveno do UNISOLATEOBJECTS. Ne čuva se u crtežu. |
| `ISOPLANE` |  | ISOPLANE: odabire izometrijsku ravan za crtanje: Lijevo, Gore ili Desno. Enter prelazi na sljedeću, kao što F5 radi dok je izometrijsko crtanje uključeno. |
| `JOIN` | `J` | Spaja linije, lukove i polilinije koje se sastaju kraj do kraja u jednu poliliniju; linije na jednoj liniji u jednu liniju (J) |
| `LASER` | `LASERCUT` | Otvara panel Laser: šalje slojeve laserskom rezaču ili graveru (GRBL G-kod) |
| `LASSOMODE` |  | Pritisni i prevuci crta omču (1) ili pravougaonik (0) |
| `LAYDEL` |  | Briše sloj i svaki objekt na njemu (u modelu, na listovima i u blokovima) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otvara upravitelj slojeva: svaki sloj u jednoj tabeli |
| `LAYERPANEL` |  | Prikazuje panel slojeva |
| `LAYFRZ` |  | Zamrzava sloj svakog objekta koji odabereš |
| `LAYGROUP` | `LG` | Grupiše slojeve u fascikle na panelu Slojevi. |
| `LAYISO` |  | Izolira slojeve odabranih objekata (svi ostali slojevi isključeni) |
| `LAYLOCKFADE` |  | Određuje koliko objekti na zaključanim slojevima blijede, i može li klik da ih odabere. |
| `LAYMCUR` |  | Postavlja sloj objekta koji odabereš kao tekući |
| `LAYMRG` |  | Spaja slojeve: njihovi objekti prelaze na ciljni sloj, a spojeni slojevi nestaju |
| `LAYOFF` |  | Isključuje sloj svakog objekta koji odabereš |
| `LAYON` |  | Uključuje svaki sloj |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Novi list s naslovnim blokom i prozorom pogleda |
| `LAYTHW` |  | Odmrzava svaki sloj |
| `LAYUNISO` |  | Ponovo uključuje slojeve koje je LAYISO isključio |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pretvara tekst kucan starim vijetnamskim fontovima (TCVN3 / ABC fontovi kao .VnTime, i VNI fontovi kao VNI-Times) u Unicode. Takav tekst se već prikazuje kako se čita; ovo ga trajno prepisuje, uz brojanje i jedan korak poništavanja. |
| `LENGTHEN` | `LEN` | Produžava ili skraćuje linije, lukove i polilinije: za iznos, procenat, do ukupne vrijednosti, ili prevlačenjem (LEN) |
| `LIBRARY` | `LIB` | Panel biblioteke: postavlja stavke, provjerava ažuriranja, zasluge |
| `LIMITS` |  | Postavlja granice crteža: ON, OFF, ili donji lijevi i gornji desni ugao. Uz uključene granice, tačke izvan njih se odbijaju |
| `LINE` | `L` | Ravni segmenti, svaki kao zaseban objekat |
| `LINETYPE` | `LT`, `CELTYPE` | Tip linije koji novi objekti dobijaju (po sloju, po bloku, ili imenovani) |
| `LINKVIEWS` | `SYNCVIEWS` | Pomjera i zumira sve prozore zajedno (podijeljen ekran), za upoređivanje dva crteža ili revizije |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ili VLIDE) otvara LISP uređivač: prozor za pisanje, učitavanje i isprobavanje rutine. Učitavanje u crtež čita svaki oblik, kao što to radi učitavanje datoteke pomoću APPLOAD, i pravi njene komande. Pokretanje odabira izvršava odabrane oblike, ili oblik u kojem je kursor. Konzola prikazuje što je rutina ispisala i svaku grešku s njenom linijom. Odgovarajuća zagrada se označava dok kucaš, a Enter uvlači novu liniju. Novo, Otvori i Spasi rade s datotekom .lsp. Spiskovi pored teksta pokazuju funkcije koje rutina definiše, one koje poziva a LISP ih još nema, i sve koje ima. Prozor ne blokira crtež, pa rutina može tražiti tačke; Stop ili Esc prekida rutinu koja radi. |
| `LIST` | `LI`, `LS` | Opisuje objekte u historiji |
| `LTSCALE` | `LTS` | Razmjera tipa linije crteža (svaka crtica i razmak se množi s njom) |
| `LWDISPLAY` | `LWT` | Prikazuje ili skriva debljine linija na ekranu (dugme LWT u statusnoj traci) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Debljina linije koju novi objekti dobijaju (po sloju, po bloku, zadano, ili mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Slojevi karte ispod prostora modela: koordinatni sistem crteža, pločice, WMS, WMTS, ArcGIS, slike |
| `MASSPROP` |  | MASSPROP: svojstva presjeka regija i zatvorenih objekata: površina, obim, težište, momenti i proizvod inercije, poluprečnici inercije i glavne ose. Tačno za linije i lukove. Može upisati izvještaj u tekstualnu datoteku. |
| `MATCHPROP` | `MA`, `PAINTER` | Usklađuje svojstva: kopira sloj, boju i jošštošta jednog objekta na druge (MA) |
| `MEASURE` | `ME` | MEASURE (ME): oznaka na svaku zadanu dužinu duž linije, luka, kruga, polilinije, splina ili elipse, od kraja najbližeg tvom odabiru. Tačke, ili s Blokom blok na svakoj oznaci. |
| `MEASUREGEOM` | `MEA` | Mjeri udaljenost, poluprečnik, ugao ili površinu (MEA) |
| `MINSERT` |  | MINSERT: postavlja blok u redove i kolone odjednom. Svaki je zasebna referenca, pa možeš pomjeriti ili obrisati bilo koju od njih. |
| `MIRROR` | `MI` | Zrcali objekte preko linije |
| `MLEADER` | `MLD`, `MLEAD` | Višestruka vodilica: strelica, vodilica i napomena, kao jedan objekat (MLD) |
| `MLEADERALIGN` | `MLA` | Poravnava višestruke vodilice s jednom od njih u jednom smjeru, na jednakom razmaku, ili raspoređene između dvije tačke (MLA) |
| `MLEADERCOLLECT` | `MLC` | Skuplja nekoliko višestrukih vodilica u jednu: njihove blokove u redu ili koloni, ili njihove napomene jednu ispod druge (MLC) |
| `MLEADEREDIT` | `MLE` | Dodaje linije vodilice višestrukoj vodilici ili ih uklanja; mijenja njen sadržaj između teksta i bloka (MLE) |
| `MLINE` |  | Crta paralelne linije zajedno, spojene na uglovima. |
| `MOVE` | `M` | Pomjera objekte po osnovnoj tački i drugoj tački |
| `MSPACE` | `MS` | Radi na modelu kroz prozor pogleda otvorenog lista (ili dvostruki klik unutar prozora pogleda). |
| `MTEXT` | `MT`, `T` | Paragraf teksta: prevuci njegovu širinu, pa kucaj na mjestu; Enter počinje novi paragraf (T) |
| `MVIEW` | `MV` | Prozor pogleda na model, na rasporedu |
| `NAMEDVIEW` | `NV`, `VIEWS` | Imenovani pogledi: spašava pogled na ekranu (ili prozor) pod imenom i vraća se na njega (NV) |
| `NCOPY` |  | Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez rastavljanja. |
| `NEARBY` |  | Kaže što je blizu kursora, najbliže prvo, s udaljenošću i stranom. |
| `NEW` |  | Počinje novi crtež |
| `OBJECTSCALE` | `OBJSCALE` | Razmjere anotacije anotativnog teksta i kota: dodaj razmjeru, obriši jednu, dodaj tekuću razmjeru, ili ih navedi (svaki prozor pogleda ih prikazuje u veličini za svoju razmjeru) |
| `OBJOUT` |  | Izvozi 3D model kao OBJ |
| `OFFSET` | `O` | Paralelne kopije na udaljenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kako OFFSET zatvara praznine na vanjskim uglovima polilinije. 0 produžava segmente, 1 dodaje luk, 2 dodaje ravan rez. Zadržava se za ovu sesiju. |
| `OLELIST` | `OLES` | Navodi OLE objekte koje crtež nosi i stavlja kopiju slike jednog od njih tamo gdje želiš |
| `OPEN` |  | Otvara DWG ili DXF s ovog računara |
| `OPENIN3D` |  | Otvara ovaj crtež u aplikaciji za 3D modeliranje, u novoj kartici (ništa se ne otprema) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otvara meni hvatanja objekata: odaberi koja hvatanja su uključena. Također desni klik na Hvatanje u statusnoj traci. |
| `OVERKILL` |  | Briše duplirane objekte i spaja preklapajuće ili kraj-do-kraja linije i lukove, unutar tolerancije. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametri: korisnički parametri i kotna ograničenja u jednoj tabeli |
| `PARTSLIST` | `PLIST` | Tabela liste dijelova svakog standardnog dijela i čeličnog profila postavljenog iz Biblioteke |
| `PASTEAREA` | `PAREA` | Zalijepi područje kopirano u MarkupCraft (Kopiraj područje) u njegovoj pravoj veličini, kao slika. |
| `PASTEBLOCK` |  | PASTEBLOCK: zalijepi ono što si kopirao kao jedan blok. Blok dobija vlastito ime; RENAME mu daje tvoje. |
| `PASTECLIP` |  | Zalijepi privremenu memoriju: prati kursor, klikni gdje ide (Ctrl+V) |
| `PASTEORIG` |  | Zalijepi privremenu memoriju na koordinatama s kojih je kopirana (Ctrl+Shift+V) |
| `PDF` |  | Daje CadCraft-u PDF datoteke koje podloge crteža koriste |
| `PDFADJUST` |  | Izblijedi, kontrast, monohromatsko ili isključi PDF podlogu |
| `PDFATTACH` | `PDFATT` | Postavlja PDF stranicu kao podlogu (PDFATTACH) |
| `PDFCLIP` |  | Reže PDF podlogu na pravougaonik ili poligon |
| `PDFIMPORT` | `PDFIM` | Pretvara linije, ispune i tekst PDF stranice u objekte crteža (PDFIMPORT) |
| `PDFLAYERS` |  | Uključuje ili isključuje slojeve PDF podloge |
| `PEDIT` | `PE` | Uređuje poliliniju: zatvori, otvori, spoji, širina, prilagodi krivu, spline kriva, ukloni krivinu, generisanje tipa linije, obrni; linije, lukovi i splinovi mogu se pretvoriti u polilinije |
| `PHOTOSKETCH` | `PSK` | Pretvara fotografiju ručne skice na papiru u linije i lukove u razmjeri, ispravljajući perspektivu i dajući svakoj boji olovke vlastiti sloj. |
| `PICKSTYLE` |  | PICKSTYLE: odabir jednog objekta iz grupe bira cijelu grupu (1, početna postavka) ili samo taj objekat (0). Zadržava se za ovu sesiju. |
| `PLAN` |  | Okreće prikaz tako da je X osa UCS-a (Tekući ucs, sačuvani Ucs ili Svijet) vodoravna na ekranu. Ništa se u crtežu ne pomjera. |
| `PLINE` | `PL` | Polilinija od linijskih i lučnih segmenata |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Ispis u PDF: raspored, ili model u razmjeri |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele stilova ispisa: određuje kako se svaka boja ispisuje (boja, crna, siva, tinta, debljina linije); čuva se s crtežom (STYLESMANAGER) |
| `POINT` | `PO` | Objekti tačaka |
| `POINTCLOUD` | `PC` | priloženi oblak tačaka: presjek, visina, debljina, boja, veličina, vidljivost, zum, otkači |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | prilaže oblak tačaka (LAS, LAZ, XYZ, PTS) ispod crteža |
| `POLARANG` |  | Korak polarnog praćenja u stepenima (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravilan poligon |
| `PRESSPULL` |  | Gura ili vuče stranu tijela (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otvara panel Svojstva (također Ctrl+1, ili dvostruki klik na objekat) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Sklapa panel Svojstva do ivice prozora |
| `PSPACE` | `PS` | Napušta prozor pogleda u kojem radiš i vraća se na list (ili dvostruki klik izvan njega). |
| `PUBLISH` | `-PUBLISH` | Ispisuje nekoliko ili sve listove u jedan PDF (stranica i oznaka po listu) |
| `PURGE` | `PU` | Uklanja definicije blokova koje ništa ne koristi |
| `QDIM` |  | Brza kota: kotira nekoliko objekata odjednom (neprekidno, osnovno, naizmjenično, ordinata, poluprečnik ili prečnik) |
| `QPMODE` | `QP` | Brza svojstva uz kursor uključena ili isključena |
| `QSELECT` | `QS` | Brzi odabir: svaki objekat vrste čiji se sloj, boja, veličina ili ime poklapa (QS) |
| `RASTERSNAP` |  | Uključuje ili isključuje hvatanje za linije skeniranih listova. |
| `RAY` |  | Zraka: pomoćna linija iz tačke, beskonačna u jednom smjeru. |
| `RECOVER` |  | Otvara oštećenu DXF ili DWG: preskače ono što se ne može pročitati umjesto da odbije datoteku, kaže što je preskočeno, zatim provjerava i popravlja crtež kao AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zatvorena polilinija iz dva ugla |
| `REDLINE` | `RDL` | Crveno-revizija: čita paket crvenih izmjena MarkupCraft, prihvata ili odbija svaku promjenu, oblači prihvaćene u oblak s dnevnikom revizije, i sprema datoteku odgovora (RDL) |
| `REDO` |  | Ponavlja ono što je poništeno |
| `REFCLOSE` |  | Završava uređivanje bloka na mjestu: spašava ga ili odbacuje promjene |
| `REFEDIT` |  | Uređuje blok na mjestu gdje se nalazi njegova referenca, dok je ostatak crteža izblijedio; REFCLOSE ga spašava |
| `REGEN` | `RE` | Ponovo gradi ono što je nacrtano na ovoj kartici iz crteža |
| `REGENALL` | `REA` | Ponovo gradi ono što je nacrtano na svakoj kartici, prozoru i otvorenom crtežu |
| `REGION` | `REG` | REGION (REG): pravi ravne površine (regije) od zatvorenih objekata, ili od linija, lukova i polilinija koje zatvaraju petlju kraj do kraja. UNION, SUBTRACT i INTERSECT zatim kombinuju regije, a MASSPROP daje njihova svojstva presjeka. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registruje nekoliko skeniranja: postavlja ih u jedan okvir pomoću odabranih parova tačaka ili ciljeva, precizira s ICP, izvozi jednu LAS ili E57 datoteku |
| `REINIT` |  | Ponovo učitava datoteku aliasa |
| `RENAME` | `-RENAME`, `REN` | Preimenuje sloj ili blok (svaki objekat ili referenca slijedi) |
| `REVCLOUD` | `RC` | Oblak revizije: zaokružuje pravougaonik, poligon, slobodnu putanju ili objekat (RC) |
| `REVOLVE` | `REV` | Okreće zatvorene 2D objekte oko ose u tijela (3D) |
| `ROTATE` | `RO` | Rotira objekte oko osnovne tačke |
| `SAMPLES` | `SAMPLE` | Otvara jedan od CadCraft-ovih primjernih crteža (arhitektonski skup, stanje izvedeno) za učenje |
| `SAVE` | `QSAVE` | Preuzima crtež u njegovom formatu (DWG ili DXF) |
| `SAVEAS` |  | Preuzima crtež kao DWG ili DXF: biraš koji |
| `SAYSEL` |  | Kaže što je odabrano, po jedna rečenica za svaki objekat. |
| `SCALE` | `SC` | Skalira objekte oko osnovne tačke |
| `SCALELISTEDIT` | `SCALELIST` | Dodaje, uređuje i briše razmjere samog crteža; pojavljuju se na spiskovima razmjera prozora pogleda i ispisa i čuvaju se u datoteci (SCALELIST) |
| `SCANALIGN` | `SCL` | Poravnava skenirani list s dvije tačke: pomjera, okreće i, ako odabereš, skalira ga. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Umeće skenirani crtež: PNG, JPEG ili TIFF (jedna stranica ili sve stranice višestranične datoteke) ili PDF stranicu koja je slika. |
| `SCANCLEAN` | `SCC` | Pretvara skenirani list u crno-bijelo i uklanja mrlje. |
| `SCANCROP` | `SCR` | Reže skenirani list na prozor. |
| `SCANDESKEW` | `SCD` | Pronalazi ugao pod kojim leže duge linije skeniranog lista i okreće list da bude pravilan kad prihvatiš ugao. |
| `SCANERASE` | `SCE` | Briše područje skeniranog lista: pravougaonik, poligon ili omču. |
| `SCANINFO` | `SCI` | Prikazuje originalnu datoteku skeniranog lista i korake preduzete od tada. |
| `SCANSCALE` | `SCS` | Skalira skenirani list: odaberi dvije tačke na njemu i upiši pravu udaljenost među njima. |
| `SCANTRACE` | `SCT` | Pretvara skenirani list u linije i lukove na novom sloju, do tolerancije koju postaviš. Tekst i šrafura ostaju kao raster. |
| `SELECT` |  | Odabire objekte sada (za P, Prethodni, u sljedećoj komandi) |
| `SELECTALL` | `AI_SELALL` | Odabire svaki objekat koji možeš uređivati na ovoj kartici (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Odabire svaki objekat kao onaj koji odabereš: isti tip, sloj i boja (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Prikazuje panel Skup listova: listovi iz mnogo crteža, numerisani, objavljeni kao jedan PDF. |
| `SHORTCUTS` | `KEYS` | Daje bilo kojoj komandi vlastitu tipku (Ctrl ili Alt sa slovom, ili slobodnu funkcijsku tipku), zadržanu u ovom pregledniku ili desktop aplikaciji. |
| `SHXFONTS` | `SHX` | Daje CadCraft-u SHX fontove iz fascikle ili datoteka, pa stilovi teksta koji ih navode crtaju njima (spisak, ukloni, obrni) |
| `SKETCHFIX` | `SKF` | Crta slobodnoručne poteze; svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, usklađena i spojena s ostalima. |
| `SKETCHLIVE` | `SKL` | Skicira olovkom: svaki potez postaje precizna linija, krug, luk ili pravougaonik čim podigneš olovku, pritegnut na crtež, sa svojom veličinom za upisivanje preko. |
| `SPLINE` | `SPL` | Crta spline kroz tačke (ili s kontrolnim poligonom), ili pretvara poliliniju u njega |
| `SPLINEDIT` | `SPE` | Uređuje spline: tačke prilagođavanja, kontrolne tačke i težine, otvara ili zatvara ga, obrće ga, ili ga pretvara u poliliniju |
| `SPLIT` |  | Dijeli područje crtanja na prozore (kao VPORTS na modelu; također s lista) |
| `STEELMEMBER` | `SMEMBER` | Čelični element u 3D iz standardnog profila: dvije tačke (greda) ili osnovna tačka i visina (Stub) |
| `STLOUT` |  | Izvozi 3D model kao STL (milimetri) |
| `STRETCH` | `S` | Istezanje: prevuci okvir preko krajeva da pomjeriš; što je unutra se pomjera, ostalo ostaje (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stilovi teksta: font, visina, širina i nagib koje novi tekst preuzima (dijalog; -STYLE u komandnoj liniji) |
| `SUBTRACT` | `SU` | Uklanja tijela iz drugih (3D), ili 2D regije iz regija |
| `SWBOUT` | `SWMACRO` | Preuzima makro za SolidWorks (.swb) koji ponovo gradi model kao jednu ograničenu skicu |
| `SWEEP` |  | Provlači zatvorene 2D objekte duž putanje (linija, polilinija, luk, krug) u tijela (3D) |
| `TABLE` | `TB` | Pravi tabelu: redovi i kolone, ili iz ćelija tabele na privremenoj memoriji ili CSV datoteci |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Uređuje tabelu: kucaj u ćeliju, umeći i briši redove i kolone, veličine, spojene ćelije, poravnanje |
| `TABLEEXPORT` |  | Spašava što tabela prikazuje kao CSV datoteku |
| `TABLEPASTE` | `PASTETABLE` | Pravi tabelu iz ćelija tabele na privremenoj memoriji |
| `TABLESTYLE` | `TS` | Stilovi tabele: visine teksta, poravnanje, margine i ivice za redove naslova, zaglavlja i podataka |
| `TAGS` |  | Oznake na referencama blokova: definiše oznaku (vrsta, dozvoljene vrijednosti, blokovi na koje se odnosi), postavlja je na odabrane reference, i navodi ih kao raspored koji možeš spasiti kao CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst u jednom redu; Enter počinje sljedeći red |
| `TEXTEDIT` | `ED`, `DDEDIT` | Uređuje tekst na mjestu: odaberi tekst (ili ga dvostruko klikni) (ED) |
| `TEXTMASK` | `TMASK` | Stavlja pozadinsku masku iza teksta (pozadina crteža ili boja), ili je uklanja. |
| `TEXTTOFRONT` |  | Dovodi sav tekst, kote i vodilice ispred svega ostalog. |
| `TOOLBAR` |  | Bira što dugmad alatne trake prikazuju: ikone i tekst, samo ikone, ili samo tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Stavlja alatnu traku na vrh, dno, lijevu ili desnu stranu prozora |
| `TOOLBARROWS` |  | Bira koliko redova alatna traka koristi: prelamanje da stane, 2, ili 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Pravi trake iznad crteža standardnim ili kompaktnim |
| `TOUCHCROSSHAIR` | `TCX` | Nišan s pomakom za crtanje prstom: jedan prst pomjera nišan koji je iznad i pored njega, pa prst ne prekriva tačku odabira. Podizanje prsta ne bira ništa; dugme Klik ili dodir drugim prstom bira na nišanu, a držanje Klika dok pomjeraš prevlači. Dugo pritiskanje ili dugme Enter je Enter. Dva prsta pomjeraju i zumiraju. Opcije: ON, OFF, Auto (uključeno samo tamo gdje je prst jedini pokazivač), Udaljenost, Strana. |
| `TOUR` | `TUTORIAL` | Ponavlja šest koraka obilaska prvog crteža |
| `TRIM` | `TR` | Reže objekte do mjesta gdje ih prelaze drugi: klikni dio, prevuci kroz nekoliko, ili Shift+klik za produživanje |
| `TRIMEXTENDMODE` |  | Kako TRIM i EXTEND počinju: 1 Brzo (svaki objekat je ivica za rezanje ili granica), 0 Standardno (prvo biraš ivice) |
| `TTR` |  | Krug tangentan na dva objekta, s poluprečnikom koji daješ (isto kao CIRCLE T). |
| `TURNLEFT` |  | Okreće prikaz za 90° ulijevo (suprotno kazaljci na satu): UCS Z -90, i prikaz slijedi. Ništa se u crtežu ne pomjera. |
| `TURNRIGHT` |  | Okreće prikaz za 90° udesno (u smjeru kazaljke na satu): UCS Z 90, i prikaz slijedi. Ništa se u crtežu ne pomjera. |
| `TURNWORLD` |  | Nazad na svijet: UCS Svijet, i prikaz je ponovo vodoravan. |
| `TXT2MTXT` | `T2M` | Spaja tekstove u jednom redu u jedan paragraf teksta, od vrha prema dnu. |
| `UCS` |  | Tvoj vlastiti koordinatni sistem: ishodište i X osa (ishodište, ugao Z, 3tačke, OBject, Prethodni, Svijet, NAmed). Tačke koje upisuješ, orto, polarno praćenje, mreža i novi tekst ga prate; prikaz se okreće tako da mu je X osa vodoravna. Ništa se u crtežu ne pomjera. |
| `UNDO` | `U` | Poništava posljednju komandu |
| `UNGROUP` |  | UNGROUP: rastavlja grupe. Odaberi objekte grupa, ili daj Ime. Objekti ostaju u crtežu. |
| `UNION` | `UNI` | Spaja tijela u jedno (3D), ili 2D regije u jednu regiju |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponovo prikazuje svaki objekat sakriven pomoću ISOLATEOBJECTS ili HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kako se dužine prikazuju i upisuju: decimalno, stope i inči, razlomci (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponovo izračunava polja, i bira kada se sama ažuriraju |
| `USDOUT` |  | Izvozi 3D model kao USD (tekst .usda, binarni .usdc ili paket .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardni 3D pogledi, perspektivni ili paralelni (3D) |
| `VIEWBASE` | `FLATSHOT` | Postavlja ravan 2D pogled 3D tijela (sprijeda, odozgo, sa strane ili izometrijski, skrivene linije isprekidane) na list ili u model |
| `VIEWLABEL` | `VL` | Naslov pogleda na listu koji prikazuje naziv pogleda njegovog prozora i mijenja se s njim. |
| `VOICE` |  | Uključuje ili isključuje izgovorene komande. Prepoznaju se na ovom računaru. |
| `VPCLIP` |  | Reže prozor pogleda lista na zatvoreni objekat ili nacrtani poligon; Delete ga ponovo pretvara u pravougaonik |
| `VPLAYER` |  | Zamrzava ili odmrzava slojeve samo u nekim prozorima pogleda (Zamrzni, Odmrzni, Resetuj), i bira koji slojevi nekih novih prozora počinju zamrznuti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dijeli područje crtanja na prozore, svaki sa svojim pogledom (na listu: prozor pogleda, kao MVIEW) |
| `VPVIEW` |  | Postavlja što prozor pogleda prikazuje: odaberi prozor na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuelni stil 3D pogleda: sjenčano, ivice, skrivena linija, žičani okvir, rendgen |
| `WALL` | `WA` | Crta 2D zidove kao polilinija. Spajaju se i nose vrata i prozore. |
| `WALLARC` | `WARC` | Crta luk zidova. Zidovi u planu su ravni, pa se luk crta kao kratki ravni zidovi (po 15 stepeni) koji se spajaju. |
| `WALLDELSEG` |  | Briše dio zida između dvije tačke. Ono što ostane ostaje kao jedan ili dva zida. |
| `WALLDIM` |  | Upisuje novu vrijednost za kotu: zid na njegovom udaljenom kraju se pomjera pod pravim uglom prema sebi, zid na prvom kraju ostaje, a zidovi spojeni za njega slijede. |
| `WALLDISJOIN` |  | Odaberi zid blizu jednog kraja da zabraniš spajanje na tom kraju: kraj se crta pod pravim uglom i ništa ga ne slijedi. Odaberi ponovo da dozvoliš. |
| `WALLGRID` |  | Zaključava zid na liniju mreže: duž nje, ili jedan kraj na njoj. Pomjeri liniju s GRIDMOVE i zid slijedi. |
| `WALLHOLD` |  | Poravnava i zaključava: zid zadržava svoje mjesto u odnosu na drugi zid (na svojoj liniji, ili na udaljenosti koju ima). Ako se jedan pomjeri, drugi slijedi. |
| `WALLHOLDDIM` |  | Zaključava udaljenost između dva paralelna zida. Ako se jedan pomjeri, drugi slijedi da je zadrži. |
| `WALLHOLDS` |  | Navodi zaključavanja zidova. |
| `WALLJOINS` |  | Daje svakom zidu starijeg crteža njegov identifikator i čuva spojeve između njih. Ovo se dešava i pri prvoj promjeni koju napraviš. |
| `WALLJOINSTYLE` |  | Klikni ugao gdje se dva zida sastaju kraj do kraja da promijeniš kako se crta: pod kosinom, na kraj, pravougaono. T mijenja koji zid prolazi kroz. |
| `WALLOFFSET` | `WO` | Pomjera zid pod pravim uglom prema sebi za udaljenost (zidovi spojeni za njega slijede), ili pravi kopiju na toj udaljenosti. |
| `WALLPICK` |  | Pravi zidove na liniji ili polilinij u crtežu, s linijama spojenim za nju ako kažeš Da. |
| `WALLPOLY` | `WP` | Crta zidove oko pravilnog poligona od 3 do 64 strane, kao POLYGON. |
| `WALLRECT` | `WR` | Crta četiri spojena zida iz dva suprotna ugla, kao RECTANG. |
| `WALLREJOIN` |  | Ponovo pretvara dva dijela zida u jedan zid. Prvi zadržava svoje mjesto u crtežu. |
| `WALLROT` |  | Crta četiri spojena zida kao pravougaonik okrenut pod bilo kojim uglom: prva strana, zatim koliko daleko izvan. |
| `WALLSPLIT` | `WS` | Dijeli zid na dva u tački ili tamo gdje drugi zid prelazi. Dijelovi ostaju spojeni osim ako ne zatražiš prazninu ili slobodne krajeve. Vrata i prozori idu sa svojim dijelom. |
| `WALLSPLITGAP` |  | Dijeli zid ostavljajući prazninu: upiši prazninu, odaberi zid, pa tačku. Dijelovi zadržavaju slobodne krajeve i mogu se ponovo spojiti. |
| `WALLSTRETCH` |  | Istezanje s prozorom: krajevi zidova unutra se pomjeraju, zidovi potpuno unutra se pomjeraju cijeli, a zidovi koji se naslanjaju na njihove strane kližu s njima. |
| `WALLTAN` |  | Nastavlja zid lukom koji ga napušta duž zida (crta se kao kratki ravni zidovi). |
| `WALLTRACE` |  | Pravi zidove oko najmanje zatvorene površine linija i zidova oko tačke na koju kliknеš. |
| `WALLUNHOLD` |  | Skida zaključavanja sa zida (i zaključavanja drugih zidova za njega). |
| `WBLOCK` | `W`, `-WBLOCK` | Piše blok, neke objekte ili cijeli crtež u novu datoteku DWG ili DXF (W) |
| `WEDGE` | `WE` | Klin: dva ugla i visina; nagnut je od prvog ugla (3D) |
| `WHEREAMI` | `WHERE` | Kaže gdje je kursor. |
| `WHOHAS` |  | Kaže ko ima otvoren crtež. CadCraft Studio čuva malu datoteku zaključavanja pored svakog otvorenog crteža (Plan.dwg.cclock: ko, od kada, koja verzija) i uklanja je pri zatvaranju. Opcije: Tekući (otvoreni crtež), Datoteka (odaberi jednu), Fascikla (svaki crtež u fascikli koji je negdje otvoren; ovo također omogućava Studiju da čuva datoteke zaključavanja u toj fascikli), Putanja (upiši jednu), Ime (ime koje drugi vide). Zaključavanje koje nije osvježeno pet minuta se kaže da je zastarjelo. Nije dostupno u pregledniku. |
| `WINDOW` | `WN` | Stavlja prozor u zid. |
| `XATTACH` | `XA` | Povezuje drugu DWG ili DXF u ovaj crtež, prikazanu samo za čitanje (XREF ih navodi i ponovo učitava) |
| `XCLIP` | `XC` | Reže reference blokova i povezane crteže na pravougaonik ili poligon, ili uklanja isječak. |
| `XLINE` | `XL` | Pomoćna linija, beskonačna na obje strane: kroz dvije tačke, vodoravna, vertikalna, pod uglom, simetrala ugla, ili pomaknuta od linije. |
| `XREF` | `XR`, `-XREF` | Povezani crteži (vanjske reference): navođenje, dodavanje, ponovno učitavanje, vezivanje, odvajanje |
| `ZOOM` | `Z` | Obim, ili prozor |
