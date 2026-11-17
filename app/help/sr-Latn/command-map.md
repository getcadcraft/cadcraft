---
title: Mapa komandi: šta ukucati
summary: Svaka komanda koju CadCraft ima, sa njenim skraćenim nazivima, od A do Z, napravljena iz samog programa, i navike iz drugih programa za crtanje koje se razlikuju.
keywords: mapa komandi, komande, alijasi, skraćeni nazivi, dolazak iz, spisak komandi, šta ukucati, izbriši, obreži, ekvivalent, razlike
from: 3bdfd3e6
---

CadCraft preuzima nazive komandi i skraćene nazive koje ljudi znaju iz drugih programa za crtanje: ukucajte `L` za liniju, `TR` za obrezivanje, `E` za brisanje. Zato za većinu komandi ne postoji tabela prevoda koju treba učiti: naziv koji poznajete je ovde isti. Spisak ispod sadrži svaku komandu koju CadCraft ima, napravljen iz samog programa. {{key:Enter}} ponavlja poslednju komandu; `HELP` u komandnoj liniji ispisuje isti spisak.

Nekoliko njih koji nisu isti ili nisu napravljeni:

- **Sačuvaj** preuzima kopiju u pregledaču ({{cmd:SAVE}}, {{cmd:SAVEAS}}); u CadCraft Studiju upisuje datoteku. Pogledajte [Prelazak sa drugog softvera za crtanje](topic:coming-from).
- **PLOT** pravi PDF (takođe PNG i SVG), sa tabelom stilova štampanja; nema menadžera podešavanja stranice.
- **DIMSTYLE** i **PEDIT** su napravljeni; **PEDIT** nema opciju Izmena temena (to rade hvatišta).
- **TABLE** nije napravljena; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} jesu.
- Sopstvene komande rutine (AutoLISP `C:NAME`) pojavljuju se nakon što je učitate sa {{cmd:APPLOAD}}; ovde nisu navedene.

## Sve komande (398)

| Komanda | Skraćeni nazivi | Šta radi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitira 3D prikaz levim tasterom miša |
| `ACCESS` | `AX` | Uključuje ili isključuje crtanje bez vida: rezultate izgovara čitač ekrana, tastaturni kursor je na crtežu, zvuci hvatanja i komande izgovorene glasom. |
| `ALIASEDIT` |  | Menja alijase komandi u jednoj tekstualnoj datoteci (poznati format L, *LINE) |
| `ALIGN` | `AL` | Pomera i okreće objekte tako da izvorne tačke padnu na odredišne tačke (jedan, dva ili tri para), i po želji ih razmerava |
| `ALIGNPANEL` | `ALP` | Otvara panel Poravnaj i rasporedi |
| `ALIGNTO` |  | Poravnava leve, srednje, desne, gornje, središnje ili donje ivice izabranih objekata, prema izboru, prvom ili poslednjem izabranom objektu, ili tački |
| `ANNOALLVISIBLE` | `ANNOALL` | Prikazuje objekte napomena na svakoj razmeri, ili samo tamo gde je razmera prozora pogleda (ili crteža) na njihovom spisku |
| `ANNOSCALE` | `CANNOSCALE` | Postavlja razmeru napomena crteža: tekst i kote napomena menjaju veličinu da bi se štampali u istoj veličini |
| `APPLOAD` | `AP` | Učitava aplikacije: LISP rutine (.lsp) i njihove datoteke dijaloga (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Luk: 3 tačke, Početak/Centar/Kraj, Početak/Centar/Ugao, Početak/Centar/Dužina, Početak/Kraj/Ugao, Početak/Kraj/Pravac, Početak/Kraj/Poluprečnik, Centar/Početak/Kraj, Centar/Početak/Ugao, Centar/Početak/Dužina, Nastavi |
| `AREA` | `AA` | Površina i obim po tačkama ili objektu; Dodaj i Oduzmi čuvaju tekući zbir (AA) |
| `ARRAY` | `AR` | Kopije u redovima i kolonama, ili u krug oko centra (AR) |
| `ARRAYASSOCIATIVITY` |  | Postavlja da li komande ARRAY prave nizove koji ostaju izmenljivi (1) ili obične kopije (0) |
| `ARRAYCLOSE` |  | Završava izmenu izvornih objekata niza |
| `ARRAYEDIT` |  | Menja niz napravljen opcijom Pridruženo: brojeve, razmak, izvorne objekte, jednu stavku |
| `ARRAYPATH` |  | Kopije objekata duž linije, luka, polilinije ili druge krive |
| `ARRAYPOLAR` |  | Kopije oko tačke centra |
| `ARRAYRECT` |  | Kopije u redovima i kolonama |
| `ASBUILT` | `ASB` | ASBUILT čita tačke izvedenog stanja koje je ekipa izmerila (CSV / TXT, kako ih upisuje EXPORTPOINTS) i poredi ih sa tačkama crteža: unutar ili van tolerancije, nije izmereno, višak. Označava ih na sloju AS-BUILT i preuzima CSV izveštaj. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definiše atribut (oznaku za koju blok traži vrednost) za ubacivanje u blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Menja vrednosti atributa referenci bloka u komandnoj liniji, jednu za drugom (Enter zadržava vrednost) |
| `ATTSYNC` |  | Usklađuje reference bloka sa definicijama atributa: nove se dodaju sa podrazumevanim vrednostima, uklonjene se brišu, položaji i tekst se vraćaju; vrednosti se čuvaju |
| `AUDIT` |  | Proverava otvoreni crtež zbog oštećenja: brojevi koji nisu konačni, objekti bez veličine, nedostajući slojevi, blokovi, stilovi i tipovi linija, blokovi koji sadrže sami sebe, zajednički identifikatori, neispravne kote i šrafure. Navodi šta je našla po vrsti i pita pre ispravke; ispravka je jedan korak opoziva. |
| `AUNITS` | `ANGUNITS` | Kako se uglovi prikazuju i unose: decimalni stepeni, stepeni-minuti-sekunde ili pravci kao N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatsko dovršavanje crteža uključeno ili isključeno, ili navodi šta obrasci crteža sada predlažu. |
| `AUTOCONSTRAIN` |  | Dodaje podudarnost, horizontalna i vertikalna ograničenja tamo gde je geometrija već blizu |
| `AUTODIM` | `ADIM` | Kotira prema pravilima: ukupne dimenzije, lanci duž strana, otvori, prečnici rupa i razmak mreže, bez ponavljanja onoga što je već kotirano. |
| `AUTOSHEET` | `ASH` | Sama raspoređuje listove: bira papir i standardne razmere i smešta svaki pogled sa natpisom i blokom naslova. |
| `BATTMAN` |  | Menadžer atributa blokova: redosled, oznake, upiti, podrazumevane vrednosti i režimi atributa bloka, zatim ažuriranje njegovih referenci |
| `BCLOSE` |  | Zatvara editor blokova: čuva blok ili odbacuje izmene |
| `BCONVERT` |  | BCONVERT pronalazi geometriju koja se ponavlja i pretvara je u reference blokova. Izaberite objekte koji se ponavljaju: nalazi se svaki drugi skup objekata u otvorenom prostoru koji je ista geometrija, pomeren i okrenut pod bilo kojim uglom; uz uključene opcije Ogledalo ili Razmera nalaze se i ogledalske slike i kopije drugačije veličine. Dajte novom bloku naziv i osnovnu tačku; izbor i svaka kopija postaju reference na njega, svaka sa sopstvenom rotacijom i razmerom. Ili izaberite Blok i imenujte postojeći blok da biste našli rasute kopije njegovih objekata. Kopija mora imati isti sloj, boju, tip i debljinu linije, osim ako je Svojstva postavljeno na Zanemari. Objekti na zaključanim slojevima ostaju netaknuti. Jedan korak opoziva. |
| `BEDIT` | `BE` | Editor blokova: menja objekte i atribute bloka; BCLOSE čuva (BE) |
| `BLEND` |  | BLEND: spline između krajeva dve otvorene krive, izabran blizu krajeva da bi se spojile. CONtinuity: Tangenta prati oba smera, Glatko prati i to kako se savijaju. |
| `BLOCK` | `B`, `BMAKE` | Pravi blok od objekata (postaju jedna referenca) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: svaka referenca na jedan blok postaje referenca na drugi, na istom mestu, sa istom razmerom i rotacijom. Vrednosti atributa koje oba bloka imaju se čuvaju. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE prikazuje panel Blokovi sa kursorom u njegovom filteru. Panel prikazuje sliku svakog bloka (najskoriji postavljeni prvi), kao spisak ili mrežu; kliknite sliku ili je prevucite na crtež da postavite blok sa INSERT. Pod Biblioteke dodajte sopstvenu DWG ili DXF datoteku: njeni blokovi se navode sa slikama i kopiraju se u ovaj crtež kad postavite jedan. U CadCraft Studiju može se dodati i fascikla crteža, a datoteke i fascikle se pamte. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolone tabele specifikacije materijala, grupisanje, sortiranje, naslov, zbirovi i napomene |
| `BOMEXPORT` |  | Čuva tabelu specifikacije materijala kao datoteku .csv |
| `BOMTABLE` | `BOM` | Tabela specifikacije materijala uživo jedne zone ili celog crteža |
| `BOMUPDATE` |  | Ažurira sve tabele specifikacije materijala odmah, i zamrznute |
| `BOMZONE` | `BZONE` | Imenovana oblast crteža za specifikaciju materijala: dva ugla, poligon ili kontura zatvorenog objekta |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): izaberite tačku unutar zatvorene oblasti i dobijate zatvorenu poliliniju oko nje. Lukovi ostaju lukovi. Ostrva obrisuje i oblasti unutar nje. |
| `BOX` |  | Kutija: dva ugla i visina (3D) |
| `BPARAMETER` | `BPARAM` | Još nije napravljeno: dodavanje parametra (kao što je Vidljivost) bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri bloka: imenovani parametri sa formulama i više parametara vidljivosti u jednom bloku. Radi u editoru blokova (dodeljuje izabrane objekte stanju) i na izabranoj referenci (sopstvene vrednosti i stanja). |
| `BREAK` | `BR` | Prelama liniju, luk, krug ili poliliniju između dve tačke (BR) |
| `BREAKATPOINT` |  | Deli liniju, luk ili poliliniju na dva dela u tački |
| `BREAKLINE` |  | Crta liniju sa simbolom preloma; njena veličina i produžetak preko krajeva se pamte. |
| `BREPLACE` |  | BREPLACE menja jedan blok drugim. Izabrano: izaberite reference blokova i imenujte blok koji treba koristiti umesto njih. Sve: imenujte blok i njegovu zamenu, i svaka referenca u svakom prostoru i unutar drugih blokova se menja. Referenca zadržava mesto, razmeru, rotaciju i sloj, i vrednosti atributa koje oba bloka imaju; vrednosti za koje novi blok nema mesta se odbacuju i imenuju. |
| `BSEARCH` |  | BSEARCH traži blokove. Naziv: deo naziva bloka, ili obrazac sa * i ?. Atribut: vrednost (ili TAG=vrednost) koju imaju atributi reference. Geometrija: izaberite objekte ili jednu referencu bloka, pa se navode blokovi čiji je oblik najmanje 85% sličan, najbolji prvi; veličina, rotacija i ogledalo se ne računaju. Reference nađene u otvorenom prostoru se biraju, spremne za sledeću komandu. |
| `BURST` |  | Raspada reference blokova i zadržava šta kažu njihovi atributi: svaka vrednost postaje tekst na sloju atributa. |
| `BVHIDE` | `BVH` | U editoru blokova: sakriva objekte u tekućem stanju vidljivosti. |
| `BVSHOW` | `BVSH` | U editoru blokova: prikazuje objekte koje tekuće stanje vidljivosti krije (prikazuju se izbledelo da bi se izabrali). |
| `BVSTATE` | `BVS` | U editoru blokova, na bloku sa stanjima vidljivosti: prebacuje na stanje, ili dodaje, preimenuje ili briše jedno. |
| `CAL` |  | Izračunava dužinu ili broj: + − * / i zagrade, kako ih ukucate bilo gde |
| `CENTERLINE` | `CL` | Osna linija između dve linije: na sredini između njih, ili duž simetrale kad se sastaju (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Oznaka centra: krst u centru kruga ili luka, sa osnim linijama do malo preko njega (CM) |
| `CHAMFER` | `CHA` | Skosi ugao između dve linije (D dve udaljenosti, A dužina i ugao, P svaki ugao polilinije) |
| `CHSPACE` |  | CHSPACE: premešta objekte između lista i modela kroz prozor pogleda. Razmeravaju se i okreću da izgledaju isto sa druge strane. Na listu idu u model; dok radite kroz prozor pogleda (MSPACE), dolaze na list. |
| `CIRCLE` | `C` | Centar i poluprečnik, prečnik, 2 ili 3 tačke |
| `CLASS` |  | Stavlja izabrane objekte u klasu, ili kad ništa nije izabrano postavlja aktivnu klasu (? ih navodi) |
| `CLASSES` | `CLS` | Panel Klase: klase razvrstavaju objekte preko slojeva; prikaži, sakrij i stiluj ih, i nadjačaj ih po prozoru pogleda (CLS) |
| `COMMANDLINE` | `CMDLINE` | Zakači ili otkači komandnu liniju, načini je jednim redom, podesi redove istorije ili otvori istoriju (F2) |
| `COMPARESETTINGS` | `CMPSET` | Upoređuje stilove kota, stilove teksta, slojeve, listove ili jedinice: dva u ovom crtežu, ili ovaj crtež sa drugim otvorenim, i kopira vrednost preko. |
| `CONSTRAINTBAR` | `CBAR` | Prikaži ili sakrij trake ograničenja (Showall / Hideall, ili po objektu) |
| `COPY` | `CO`, `CP` | Kopira objekte, koliko puta kliknete |
| `COPYBASE` |  | Kopira objekte u privremenu memoriju sa osnovnom tačkom koju izaberete |
| `COPYCLIP` |  | Kopira objekte u privremenu memoriju (Ctrl+C); PASTECLIP ih nalepljuje |
| `COUNT` | `BCOUNT` | Broji reference blokova: izaberite jednu da izaberete i prebrojite svaku referencu njenog bloka |
| `COUNTTABLE` |  | Postavlja tabelu brojeva blokova |
| `CREDITS` |  | Stavlja zasluge biblioteke u crtež kao tabelu. Pokrenite ponovo da osvežite tabelu prema stavkama koje su sada u crtežu. |
| `CURSORSIZE` |  | Veličina ukrštenog kursora: 100 ga pruža od ivice do ivice crteža (Podešavanja › Kursor › Ceo ekran) |
| `CUTCLIP` |  | Seče objekte u privremenu memoriju (Ctrl+X): kopira, pa briše |
| `CYLINDER` | `CYL` | Cilindar: centar, poluprečnik i visina (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Navodi blokove, njihove atribute i svojstva objekata kao tabelu u crtežu ili CSV datoteku |
| `DATALINK` | `DL` | Tabela iz CSV datoteke koja pamti datoteku, pa može ponovo da se čita |
| `DATALINKUPDATE` | `DLU` | Ponovo čita datoteku veze podataka i ponovo puni njene tabele |
| `DCALIGNED` | `DCALI` | Dimenzionalno ograničenje: prava udaljenost između tačaka, tačke i linije, ili dve linije |
| `DCANGULAR` | `DCANG` | Dimenzionalno ograničenje: ugao između dve linije, ili luka |
| `DCCONVERT` |  | Pretvara kote nacrtane na geometriji koja se može ograničiti u dimenzionalna ograničenja |
| `DCDIAMETER` | `DCDIA` | Dimenzionalno ograničenje: prečnik kruga ili luka |
| `DCDISPLAY` |  | Prikazuje ili sakriva dimenzionalna ograničenja na crtežu |
| `DCHORIZONTAL` | `DCHOR` | Dimenzionalno ograničenje: horizontalna udaljenost |
| `DCLINEAR` | `DCLIN` | Dimenzionalno ograničenje: horizontalna ili vertikalna udaljenost, od mesta gde je postavljate |
| `DCRADIUS` | `DCRAD` | Dimenzionalno ograničenje: poluprečnik kruga ili luka |
| `DCVERTICAL` | `DCVER` | Dimenzionalno ograničenje: vertikalna udaljenost |
| `DELBLOCKS` |  | Briše blokove: svaka referenca (i ugnježdene, na svakom listu) i definicije |
| `DELCONSTRAINT` | `DELCON` | Uklanja svako ograničenje (geometrijsko i dimenzionalno) sa objekata koje izaberete |
| `DELOPENING` |  | Vadi vrata ili prozor iz zida. |
| `DESCRIBE` | `DESC` | Kaže šta crtež sadrži: koliko objekata, koje vrste, kako velikih, šta je izabrano. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Poništava izbor (Esc) |
| `DETAILS` | `DET` | Detalji vaše firme, pronađeni za ono što crtate: pronađi, dodaj blok, navedi, ukloni, uključi ili isključi ponude. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Crta dijagram iz teksta: Mermaid dijagram toka, PlantUML dijagram komponenti, D2, spisak od-do ili draw.io XML, kao blokove i veze koje možete menjati |
| `DIMALIGNED` | `DAL`, `DIMALI` | Prava udaljenost između dve tačke |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ugao između dve linije, luka, ili po tri tačke |
| `DIMARC` | `DAR` | Kota dužine luka: udaljenost duž luka, sa simbolom luka (DAR) |
| `DIMASZ` |  | Podešavanje kote: veličina strelice |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kote poređane od jedne osnovne linije |
| `DIMBREAK` | `DBREAK` | Prelama linije kote i produžne linije gde seku druge objekte (Auto), između dve tačke (Ručno), ili uklanja prelome |
| `DIMCONSTRAINT` | `DCON` | Dimenzionalna ograničenja: linearna, poravnata, ugaona, poluprečnik, prečnik, pretvori |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Lanac kota, svaka od kraja poslednje |
| `DIMDEC` |  | Podešavanje kote: decimalna mesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Prečnik luka ili kruga |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Oslobađa kote od objekata za koje su vezane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Menja tekst kote (Početak, Novi tekst, Rotiraj) ili kosi produžne linije (Kosi) |
| `DIMEXE` |  | Podešavanje kote: produženje preko linije kote |
| `DIMEXO` |  | Podešavanje kote: pomeraj od početne tačke |
| `DIMGAP` |  | Podešavanje kote: razmak oko teksta |
| `DIMINSPECT` |  | Kota kontrole: okvir oko vrednosti sa oznakom i učestalošću provere dela |
| `DIMJOGGED` | `DJO`, `JOG` | Kota prelomljenog poluprečnika: poluprečnik nacrtan od bliže tačke kad je centar daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Dodaje simbol preloma na liniju linearne ili poravnate kote, da pokaže da udaljenost nije nacrtana u razmeri (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontalna ili vertikalna udaljenost (R za bilo koji ugao) |
| `DIMLUNIT` |  | Podešavanje kote: format dužine (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomački) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kota koordinate: X ili Y udaljenost tačke od početka UCS, na vodilici (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Nadjačava promenljive kote na izabranim kotama bez promene njihovog stila; Obriši vraća stil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Poluprečnik luka ili kruga |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Veže tačke kote za objekte, pa prati i ponovo meri kad se oni pomere (DRE) |
| `DIMSCALE` |  | Podešavanje kote: ukupna razmera (veličine × ovo) |
| `DIMSPACE` |  | Ravnomeran razmak između paralelnih kota, meren od osnovne kote (0 ih poravnava, Auto je dvostruka visina teksta) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Pravi, menja, postavlja tekući, briše, primenjuje i upoređuje imenovane stilove kota (dijalog; -DIMSTYLE u komandnoj liniji) |
| `DIMTEDIT` | `DIMTED` | Pomera tekst kote levo, desno ili na sredinu linije kote, ili ga okreće |
| `DIMTEXTUNIT` | `DTU` | Tekst kote u mm, cm, m ili km, ili u sopstvenim jedinicama crteža: izabrane kote, inače nove (DTU) |
| `DIMTXT` |  | Podešavanje kote: visina teksta |
| `DIST` | `DI` | Udaljenost i ugao između dve tačke (DI) |
| `DISTRIBUTE` |  | Ravnomerno raspoređuje izabrane objekte, levo-desno ili gore-dole: jednaki koraci između centara, ili jednaki razmaci; dva spoljašnja ostaju |
| `DIVIDE` | `DIV` | DIVIDE (DIV): oznake koje seku liniju, luk, krug, poliliniju, spline ili elipsu na jednake delove. Tačke, ili sa Blokom blok na svakoj oznaci. |
| `DOCUMENTS` | `DOCS` | Otvara panel Dokumenti: odjavljuje i prijavljuje crteže, revizije, stanja izdanja i odobrenje za fasciklu projekta |
| `DOOR` | `DR` | Postavlja vrata u zid. Strana na koju kliknete je strana na koju se otvaraju. |
| `DRAWORDER` |  | Menja redosled crtanja: dovodi objekte napred, šalje ih nazad, ili ih stavlja iznad ili ispod drugih objekata. |
| `DUPLICATE` | `DUP` | Kopija koja se pomera sa pokazivačem: kliknite da je spustite (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Svojstva crteža: naslov, autor i ostalo, i vaši sopstveni parovi imena i vrednosti |
| `DXFOUT` |  | Preuzima crtež kao DXF R12 (Sačuvaj zadržava sopstveni format) |
| `EATTEDIT` | `DDATTE` | Menja atribute reference bloka: vrednosti, tekst i svojstva, jedan atribut po jedan |
| `ELLIPSE` | `EL` | Krajnje tačke ose i druga polu-osa |
| `ERASE` | `E`, `DELETE` | Uklanja objekte |
| `EXPLODE` | `X` | Razlaže polilinije, blokove i kote na njihove delove |
| `EXPORT` | `EXP` | Čuva kopiju crteža u vrsti datoteke koju dodatak piše |
| `EXPORT3D` | `3DEXPORT` | Izvozi 3D model: GLB, OBJ ili STL |
| `EXPORTPOINTS` | `EXPPTS` | Upisuje tačke, i tačke umetanja blokova sa jednim atributom kao opisom, u CSV ili TXT datoteku (PNEZD, PENZD ili XYZ) za programe za BIM i geodetska merenja |
| `EXTEND` | `EX` | Produžava objekte da se sretnu sa drugima: kliknite blizu kraja, prevucite kroz nekoliko, ili Shift+klik za skraćivanje |
| `EXTRIM` |  | EXTRIM: izaberite jednu ivicu za sečenje, pa stranu. Sve što seče ivicu biva skraćeno na toj strani. Delovi koji bi nestali prikazuju se dok pomerate pokazivač. |
| `EXTRUDE` | `EXT` | Izvlači zatvorene 2D objekte u tela (3D) |
| `FIELD` |  | Stavlja polje u tekst, ćeliju tabele ili atribut: datum, naziv datoteke, broj lista, svojstvo crteža, površinu ili dužinu objekta, ili formulu |
| `FILLET` | `F` | Zaobljava ili uglačava ugao između dva objekta (R poluprečnik, P svaki ugao polilinije, M više) |
| `FIND` |  | Pronalazi i menja reči u tekstu, vrednostima atributa i tekstu kote |
| `FLATTEN` |  | Postavlja visinu (Z) i debljinu izabranih objekata na 0, i u blokovima koje koriste. |
| `FLOOR` |  | Bira sprat na kom crtate, dodaje jedan, ili pomera ili kopira izbor na njega. |
| `FLOORLAYERS` |  | Pretvara spratove u slojeve nazvane Floor-Layer, za datoteku koja ide nekome bez spratova. |
| `FLOORS` | `FLR` | Otvara panel Spratovi: slaže spratove u jednom modelskom prostoru. |
| `GCCOINCIDENT` |  | Ograničenje: dve tačke se spajaju, ili tačka ostaje na objektu |
| `GCCOLLINEAR` |  | Ograničenje: dve linije ostaju na jednoj liniji |
| `GCCONCENTRIC` |  | Ograničenje: dva kruga ili luka dele centar |
| `GCEQUAL` |  | Ograničenje: dve linije ostaju iste dužine, ili dva kruga/luka istog poluprečnika |
| `GCFIX` |  | Ograničenje: tačka ili ceo objekat ostaje gde jeste |
| `GCHORIZONTAL` |  | Ograničenje: linija (ili dve tačke) ostaje horizontalna |
| `GCPARALLEL` |  | Ograničenje: dve linije ostaju paralelne |
| `GCPERPENDICULAR` |  | Ograničenje: dve linije ostaju pod pravim uglom |
| `GCSYMMETRIC` |  | Ograničenje: dve tačke, linije ili krugovi se ogledaju preko linije |
| `GCTANGENT` |  | Ograničenje: linija i krug ili luk (ili dva od njih) ostaju tangentni |
| `GCVERTICAL` |  | Ograničenje: linija (ili dve tačke) ostaje vertikalna |
| `GDSIN` | `GDS` | Pregled IC rasporeda (datoteka GDSII toka): svaki sloj i tip podataka kao sloj crteža, ravno, u korisničkim jedinicama; samo za pregled i merenje (laboratorijska proba) |
| `GEOMCONSTRAINT` | `GCON` | Geometrijska ograničenja: horizontalna, vertikalna, paralelna, tangentna, podudarna… |
| `GLBOUT` |  | Izvozi 3D model kao GLB (glTF) |
| `GRADIENT` | `GD` | Popunjava oblast gradijentom jedne ili dve boje |
| `GRIDMOVE` | `GM` | Pomera liniju mreže i nosi ono što na njoj visi: zidovi se razvlače, stubovi, mehurići i oznake se pomeraju, kote prate. |
| `GROUP` | `G` | GROUP (G): daje izabranim objektima zajedničko ime. Klik na jedan od njih tada bira sve. Enter kod imena pravi grupu bez imena. |
| `GROUPEDIT` |  | GROUPEDIT: menja grupu. Izaberite jedan njen objekat ili unesite njeno Ime, pa Dodaj ili Ukloni objekte, PREIMENUJ je, menja njen Opis, ili kaže da li klik bira celu grupu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Popunjava oblast punom ispunom ili obrascem: kliknite unutra, ili izaberite zatvorene objekte (H) |
| `HATCHEDIT` | `HE` | Menja šrafuru: obrazac, razmeru, ugao, početnu tačku i njenu vezu sa granicom. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponovo pravi granične polilinije iz šrafure, povezane sa njom ili ne |
| `HATCHTOBACK` |  | Šalje svaku šrafuru iza svega ostalog. |
| `HELP` | `?` | Ovaj spisak |
| `HIDEOBJECTS` |  | Sakriva izabrane objekte do UNISOLATEOBJECTS. Ne čuva se sa crtežom. |
| `HISTORY` | `HIST` | HISTORY (HIST): verzije ovog crteža — kopije sačuvane na ovom računaru kad ih Studio čuva, i verzije u oblaku — da otvorite, vratite i uporedite sa onim što se promenilo, prikazano bojom. |
| `ID` |  | Koordinate tačke |
| `IMAGE` | `IM` | Daje CadCraft datoteke slika koje crtež koristi (DWG čuva samo gde su bile). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Postavlja sliku (PNG ili JPEG) iz datoteke. |
| `IMAGECLIP` | `ICL` | Iseca sliku na pravougaonik ili poligon, ili uklanja njen isečak. |
| `IMPORT` | `IMP` | Uvozi datoteku vrste koju dodatak čita, u ovaj crtež |
| `INSERT` | `I`, `DDINSERT` | Postavlja blok (S razmera, R rotiraj); F iz DWG/DXF datoteke, L iz biblioteke |
| `INTERSECT` | `IN` | Zadržava samo ono što tela imaju zajedničko (3D), ili površinu koju dele 2D oblasti |
| `ISODRAFT` |  | ISODRAFT: izometrijsko crtanje uključeno ili isključeno, ili direktno na ravan Levo, Gore ili Desno. Dok je uključeno, Orto i polarno praćenje prate dve ose ravni, mreža se crta izometrijski, a ELLIPSE ima Izokrug. |
| `ISOLATEOBJECTS` | `ISOLATE` | Prikazuje samo izabrane objekte; sve ostalo u ovom prostoru je skriveno do UNISOLATEOBJECTS. Ne čuva se sa crtežom. |
| `ISOPLANE` |  | ISOPLANE: bira izometrijsku ravan za crtanje: Levo, Gore ili Desno. Enter ide na sledeću, kao što F5 radi dok je izometrijsko crtanje uključeno. |
| `JOIN` | `J` | Spaja linije, lukove i polilinije koji se spajaju kraj do kraja u jednu poliliniju; linije na jednoj liniji u jednu liniju (J) |
| `LASER` | `LASERCUT` | Otvara panel Laser: šalje slojeve laserskom rezaču ili graveru (GRBL G-kod) |
| `LASSOMODE` |  | Pritisnite i prevucite crta lasso (1) ili pravougaonik (0) |
| `LAYDEL` |  | Briše sloj i svaki objekat na njemu (u modelu, na listovima i u blokovima) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otvara menadžer slojeva: svaki sloj u jednoj tabeli |
| `LAYERPANEL` |  | Prikazuje panel slojeva |
| `LAYFRZ` |  | Zamrzava sloj svakog objekta koji izaberete |
| `LAYGROUP` | `LG` | Grupiše slojeve u fascikle u panelu Slojevi. |
| `LAYISO` |  | Izoluje slojeve izabranih objekata (svi ostali slojevi isključeni) |
| `LAYLOCKFADE` |  | Podešava koliko objekti na zaključanim slojevima blede, i da li klik može da ih izabere. |
| `LAYMCUR` |  | Postavlja kao tekući sloj objekta koji izaberete |
| `LAYMRG` |  | Spaja slojeve: njihovi objekti se premeštaju na ciljni sloj, a spojeni slojevi nestaju |
| `LAYOFF` |  | Isključuje sloj svakog objekta koji izaberete |
| `LAYON` |  | Uključuje svaki sloj |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Novi list sa blokom naslova i prozorom pogleda |
| `LAYTHW` |  | Odmrzava svaki sloj |
| `LAYUNISO` |  | Ponovo uključuje slojeve koje je LAYISO isključio |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pretvara tekst ukucan starim vijetnamskim fontovima (TCVN3 / ABC fontovi kao .VnTime, i VNI fontovi kao VNI-Times) u Unicode. Takav tekst se već prikazuje kako glasi; ovo ga prepisuje zauvek, uz broj i jedan korak opoziva. |
| `LENGTHEN` | `LEN` | Produžava ili skraćuje linije, lukove i polilinije: za iznos, procenat, na ukupno, ili prevlačenjem (LEN) |
| `LIBRARY` | `LIB` | Panel biblioteke: postavlja stavke, proverava ažuriranja, zasluge |
| `LIMITS` |  | Postavlja granice crteža: ON, OFF, ili donji levi i gornji desni ugao. Sa uključenim granicama, tačke van njih se odbijaju |
| `LINE` | `L` | Prave duži, svaka kao svoj objekat |
| `LINETYPE` | `LT`, `CELTYPE` | Tip linije koji novi objekti dobijaju (po sloju, po bloku, ili imenovan) |
| `LINKVIEWS` | `SYNCVIEWS` | Pomera i zumira sva okna zajedno (podeljen ekran), da uporedite dva crteža ili revizije |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ili VLIDE) otvara LISP editor: prozor za pisanje, učitavanje i isprobavanje rutine. Učitavanje u crtež čita svaki oblik, kao što učitavanje datoteke sa APPLOAD radi, i pravi njene komande. Pokreni izbor izvršava izabrane oblike, ili oblik u kome je kursor. Konzola pokazuje šta je rutina ispisala i svaku grešku sa njenim redom. Odgovarajuća zagrada se obeležava dok kucate, a Enter uvlači novi red. Novo, Otvori i Sačuvaj rade sa .lsp datotekom. Spiskovi pored teksta pokazuju funkcije koje rutina definiše, one koje poziva a ovaj LISP još nema, i sve koje ima. Prozor ne blokira crtež, pa rutina može da traži tačke; Stop ili Esc prekida rutinu koja radi. |
| `LIST` | `LI`, `LS` | Opisuje objekte u istoriji |
| `LTSCALE` | `LTS` | Razmera tipa linije crteža (svaka crtica i praznina se njome množi) |
| `LWDISPLAY` | `LWT` | Prikazuje ili sakriva debljine linija na ekranu (dugme LWT u statusnoj traci) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Debljina linije koju novi objekti dobijaju (po sloju, po bloku, podrazumevano, ili mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Slojevi karte ispod modelskog prostora: koordinatni sistem crteža, pločice, WMS, WMTS, ArcGIS, slike |
| `MASSPROP` |  | MASSPROP: svojstva preseka oblasti i zatvorenih objekata: površina, obim, težište, momenti i proizvod inercije, radijusi inercije i glavne ose. Tačno za linije i lukove. Može upisati izveštaj u tekstualnu datoteku. |
| `MATCHPROP` | `MA`, `PAINTER` | Usklađuje svojstva: kopira sloj, boju i još toga jednog objekta na druge (MA) |
| `MEASURE` | `ME` | MEASURE (ME): oznaka na svakoj zadatoj dužini duž linije, luka, kruga, polilinije, splajna ili elipse, od kraja najbližeg vašem izboru. Tačke, ili sa Blokom blok na svakoj oznaci. |
| `MEASUREGEOM` | `MEA` | Meri udaljenost, poluprečnik, ugao ili površinu (MEA) |
| `MINSERT` |  | MINSERT: postavlja blok u redovima i kolonama odjednom. Svaki je sopstvena referenca, pa možete pomeriti ili obrisati bilo koju. |
| `MIRROR` | `MI` | Ogledala objekte preko linije |
| `MLEADER` | `MLD`, `MLEAD` | Višestruka vodilica: strelica, vodilica i beleška, kao jedan objekat (MLD) |
| `MLEADERALIGN` | `MLA` | Poravnava višestruke vodilice sa jednom od njih duž pravca, na jednakom razmaku, ili raspoređuje između dve tačke (MLA) |
| `MLEADERCOLLECT` | `MLC` | Skuplja nekoliko višestrukih vodilica u jednu: njihovi blokovi u redu ili koloni, ili njihove beleške jedna ispod druge (MLC) |
| `MLEADEREDIT` | `MLE` | Dodaje linije vodilice višestrukoj vodilici ili ih uklanja; prebacuje njen sadržaj između teksta i bloka (MLE) |
| `MLINE` |  | Crta paralelne linije zajedno, spojene u uglovima. |
| `MOVE` | `M` | Pomera objekte osnovnom tačkom i drugom tačkom |
| `MSPACE` | `MS` | Radi na modelu kroz prozor pogleda otvorenog lista (ili dvaput kliknite unutar prozora pogleda). |
| `MTEXT` | `MT`, `T` | Tekst pasusa: prevucite mu širinu, pa kucajte na mestu; Enter počinje novi pasus (T) |
| `MVIEW` | `MV` | Prozor pogleda na model, na listu |
| `NAMEDVIEW` | `NV`, `VIEWS` | Imenovani pogledi: sačuvajte pogled na ekranu (ili prozor) pod imenom i vratite se na njega (NV) |
| `NCOPY` |  | Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez raspadanja. |
| `NEARBY` |  | Kaže šta leži blizu kursora, najbliže prvo, sa rastojanjem i stranom. |
| `NEW` |  | Počinje novi crtež |
| `OBJECTSCALE` | `OBJSCALE` | Razmere napomena tekstova i kota sa napomenama: dodaje razmeru, briše jednu, dodaje tekuću razmeru, ili ih navodi (svaki prozor pogleda ih prikazuje u veličini za svoju razmeru) |
| `OBJOUT` |  | Izvozi 3D model kao OBJ |
| `OFFSET` | `O` | Paralelne kopije na udaljenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kako OFFSET zatvara praznine na spoljašnjim uglovima polilinije. 0 produžava segmente, 1 dodaje luk, 2 dodaje ravan rez. Čuva se za ovu sesiju. |
| `OLELIST` | `OLES` | Navodi OLE objekte koje crtež nosi i stavlja kopiju slike jednog gde izaberete |
| `OPEN` |  | Otvara DWG ili DXF sa ovog računara |
| `OPENIN3D` |  | Otvara ovaj crtež u aplikaciji za 3D modelovanje, u novoj kartici (ništa se ne otprema) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otvara meni hvatanja objekata: izaberite koja hvatanja su uključena. Takođe desni klik na Hvatanje u statusnoj traci. |
| `OVERKILL` |  | Briše duplirane objekte i spaja preklopljene ili linije i lukove kraj do kraja, u okviru tolerancije. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametri: korisnički parametri i dimenzionalna ograničenja u jednoj tabeli |
| `PARTSLIST` | `PLIST` | Tabela spiska delova svakog standardnog dela i čeličnog profila postavljenog iz Biblioteke |
| `PASTEAREA` | `PAREA` | Nalepljuje oblast kopiranu u MarkupCraft (Kopiraj oblast) u njenoj pravoj veličini, kao sliku. |
| `PASTEBLOCK` |  | PASTEBLOCK: nalepljuje ono što ste kopirali kao jedan blok. Blok dobija sopstveni naziv; RENAME daje vaš. |
| `PASTECLIP` |  | Nalepljuje iz privremene memorije: prati kursor, kliknite gde ide (Ctrl+V) |
| `PASTEORIG` |  | Nalepljuje iz privremene memorije na koordinate sa kojih je kopirano (Ctrl+Shift+V) |
| `PDF` |  | Dajte CadCraft PDF datoteke koje podloge crteža koriste |
| `PDFADJUST` |  | Zbleđuje, menja kontrast, monohromno ili isključuje PDF podlogu |
| `PDFATTACH` | `PDFATT` | Prikačuje PDF stranicu kao podlogu (PDFATTACH) |
| `PDFCLIP` |  | Iseca PDF podlogu na pravougaonik ili poligon |
| `PDFIMPORT` | `PDFIM` | Pretvara linije, ispune i tekst PDF stranice u objekte crteža (PDFIMPORT) |
| `PDFLAYERS` |  | Uključuje ili isključuje slojeve PDF podloge |
| `PEDIT` | `PE` | Menja poliliniju: zatvara, otvara, spaja, širina, prilagođena kriva, spline kriva, uklanja krivinu, generisanje tipa linije, obrće; linije, lukovi i splajnovi mogu se pretvoriti u polilinije |
| `PHOTOSKETCH` | `PSK` | Pretvara fotografiju ručne skice na papiru u linije i lukove u razmeri, ispravljajući perspektivu i dajući svakoj boji olovke sopstveni sloj. |
| `PICKSTYLE` |  | PICKSTYLE: da li izbor jednog objekta iz grupe bira celu grupu (1, početna postavka) ili samo taj objekat (0). Čuva se za ovu sesiju. |
| `PLAN` |  | Okreće pogled tako da X osa UCS (Tekući ucs, sačuvan Ucs, ili Svet) bude horizontalna na ekranu. Ništa u crtežu se ne pomera. |
| `PLINE` | `PL` | Polilinija od segmenata linija i lukova |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Štampa u PDF: list, ili model u razmeri |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele stilova štampanja: podešava kako se svaka boja štampa (boja, crna, siva, mastilo, debljina linije); čuva se uz crtež (STYLESMANAGER) |
| `POINT` | `PO` | Objekti tačaka |
| `POINTCLOUD` | `PC` | Priloženi oblak tačaka: isečak, visina, debljina, boja, veličina, vidljivost, zumiranje, odvajanje |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Prikačuje oblak tačaka (LAS, LAZ, XYZ, PTS) ispod crteža |
| `POLARANG` |  | Korak polarnog praćenja u stepenima (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravilan poligon |
| `PRESSPULL` |  | Gura ili vuče stranu tela (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otvara panel Svojstva (takođe Ctrl+1, ili dvaput kliknite objekat) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Sklapa panel Svojstva do ivice prozora |
| `PSPACE` | `PS` | Napušta prozor pogleda u kom radite i vraća se na list (ili dvaput kliknite van njega). |
| `PUBLISH` | `-PUBLISH` | Štampa nekoliko ili sve listove u jedan PDF (stranica i oznaka za svaki list) |
| `PURGE` | `PU` | Uklanja definicije blokova koje ništa ne koristi |
| `QDIM` |  | Brza kota: kotira nekoliko objekata odjednom (neprekidno, osnovno, naizmenično, koordinatno, poluprečnik ili prečnik) |
| `QPMODE` | `QP` | Brza svojstva uz kursor uključena ili isključena |
| `QSELECT` | `QS` | Brz izbor: svaki objekat vrste čiji se sloj, boja, veličina ili naziv poklapa (QS) |
| `RASTERSNAP` |  | Uključuje ili isključuje hvatanje za linije skeniranih listova. |
| `RAY` |  | Zrak: konstrukciona linija iz tačke, beskonačna u jednom smeru. |
| `RECOVER` |  | Otvara oštećenu DXF ili DWG: preskače ono što ne može da se pročita umesto da odbije datoteku, kaže šta je preskočeno, pa proverava i popravlja crtež kao AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zatvorena polilinija od dva ugla |
| `REDLINE` | `RDL` | Crveno do revizije: čita paket crvenih ispravki MarkupCraft, prihvata ili odbija svaku promenu, oblači prihvaćene u oblak sa dnevnikom revizija, i čuva datoteku odgovora (RDL) |
| `REDO` |  | Ponavlja ono što je opozvano |
| `REFCLOSE` |  | Završava izmenu bloka na mestu: čuva ga ili odbacuje izmene |
| `REFEDIT` |  | Menja blok na mestu, gde se nalazi njegova referenca, a ostatak crteža je zbledeo; REFCLOSE ga čuva |
| `REGEN` | `RE` | Ponovo gradi ono što je nacrtano na ovoj kartici iz crteža |
| `REGENALL` | `REA` | Ponovo gradi ono što je nacrtano na svakoj kartici, oknu i otvorenom crtežu |
| `REGION` | `REG` | REGION (REG): pravi ravne oblasti (regione) od zatvorenih objekata, ili od linija, lukova i polilinija koje se zatvaraju u petlju kraj do kraja. UNION, SUBTRACT i INTERSECT zatim spajaju regione, a MASSPROP daje njihova svojstva preseka. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registruje nekoliko skenova: postavlja ih u jedan okvir po izabranim parovima tačaka ili ciljevima, dotera ICP, izvozi jedan LAS ili E57 |
| `REINIT` |  | Ponovo učitava datoteku alijasa |
| `RENAME` | `-RENAME`, `REN` | Preimenuje sloj ili blok (svaki objekat ili referenca prati) |
| `REVCLOUD` | `RC` | Oblak revizije: zaokružuje pravougaonik, poligon, slobodnu putanju ili objekat (RC) |
| `REVOLVE` | `REV` | Okreće zatvorene 2D objekte oko ose u tela (3D) |
| `ROTATE` | `RO` | Rotira objekte oko osnovne tačke |
| `SAMPLES` | `SAMPLE` | Otvara jedan od CadCraft-ovih primera crteža (set arhitekture, izvedeno stanje) da učite iz njega |
| `SAVE` | `QSAVE` | Preuzima crtež u njegovom formatu (DWG ili DXF) |
| `SAVEAS` |  | Preuzima crtež kao DWG ili DXF: birate koji |
| `SAYSEL` |  | Kaže šta je izabrano, po jednu rečenicu za svaki objekat. |
| `SCALE` | `SC` | Razmerava objekte oko osnovne tačke |
| `SCALELISTEDIT` | `SCALELIST` | Dodaje, menja i briše sopstvene razmere crteža; pojavljuju se u spiskovima razmera prozora pogleda i štampanja i čuvaju se u datoteci (SCALELIST) |
| `SCANALIGN` | `SCL` | Poravnava skenirani list sa dve tačke: pomera, okreće i, ako želite, razmerava. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Ubacuje skenirani crtež: PNG, JPEG ili TIFF (jedna stranica ili sve stranice datoteke sa više stranica) ili PDF stranicu koja je slika. |
| `SCANCLEAN` | `SCC` | Pravi skenirani list crno-belim i uklanja mrlje. |
| `SCANCROP` | `SCR` | Seče skenirani list na prozor. |
| `SCANDESKEW` | `SCD` | Pronalazi ugao pod kojim leže duge linije skeniranog lista i okreće list da bude ravan kad prihvatite ugao. |
| `SCANERASE` | `SCE` | Briše oblast skeniranog lista: pravougaonik, poligon ili lasso. |
| `SCANINFO` | `SCI` | Prikazuje originalnu datoteku skeniranog lista i korake preduzete od tada. |
| `SCANSCALE` | `SCS` | Razmerava skenirani list: izaberite dve tačke na njemu i ukucajte stvarnu udaljenost između njih. |
| `SCANTRACE` | `SCT` | Pretvara skenirani list u linije i lukove na novom sloju, do tolerancije koju postavite. Tekst i šrafura ostaju kao rasterska slika. |
| `SELECT` |  | Bira objekte sada (za P, Prethodni, u sledećoj komandi) |
| `SELECTALL` | `AI_SELALL` | Bira svaki objekat koji možete menjati na ovoj kartici (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Bira svaki objekat sličan onima koje izaberete: ista vrsta, sloj i boja (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Prikazuje panel Skup listova: listovi iz mnogo crteža, numerisani, objavljeni kao jedan PDF. |
| `SHORTCUTS` | `KEYS` | Dodeljuje bilo kojoj komandi sopstveni taster (Ctrl ili Alt sa slovom, ili slobodan funkcijski taster), sačuvano u ovom pregledaču ili desktop aplikaciji. |
| `SHXFONTS` | `SHX` | Daje CadCraft SHX fontove iz fascikle ili datoteka, pa stilovi teksta koji ih navode crtaju njima (navedi, ukloni, obrni) |
| `SKETCHFIX` | `SKF` | Crtajte slobodne poteze; svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, poravnata i spojena sa ostalima. |
| `SKETCHLIVE` | `SKL` | Skicira olovkom: svaki potez postaje precizna linija, krug, luk ili pravougaonik čim podignete olovku, hvata se za crtež, sa veličinom koju ukucate preko. |
| `SPLINE` | `SPL` | Crta splajn kroz tačke (ili sa kontrolnim poligonom), ili pretvara poliliniju u njega |
| `SPLINEDIT` | `SPE` | Menja splajn: prilagođava tačke, kontrolne tačke i težine, otvara ili zatvara, obrće, ili pretvara u poliliniju |
| `SPLIT` |  | Deli površinu crtanja na okna (kao VPORTS na modelu; i sa lista) |
| `STEELMEMBER` | `SMEMBER` | Čelični element u 3D iz standardnog profila: dve tačke (greda) ili osnovna tačka i visina (Stub) |
| `STLOUT` |  | Izvozi 3D model kao STL (milimetri) |
| `STRETCH` | `S` | Razvlači: prevucite prozor preko krajeva da pomerite; šta je unutra se pomera, ostatak ostaje (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stilovi teksta: font, visina, širina i nagib koje novi tekst uzima (dijalog; -STYLE u komandnoj liniji) |
| `SUBTRACT` | `SU` | Oduzima tela od drugih (3D), ili 2D regione od regiona |
| `SWBOUT` | `SWMACRO` | Preuzima makro za SolidWorks (.swb) koji ponovo gradi model kao jednu ograničenu skicu |
| `SWEEP` |  | Prevlači zatvorene 2D objekte duž putanje (linija, polilinija, luk, krug) u tela (3D) |
| `TABLE` | `TB` | Pravi tabelu: redovi i kolone, ili iz ćelija tabele na privremenoj memoriji ili CSV datoteci (TB) |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Menja tabelu: kucajte u ćeliju, umeće i briše redove i kolone, veličine, spojene ćelije, poravnanje |
| `TABLEEXPORT` |  | Čuva ono što tabela prikazuje kao CSV datoteku |
| `TABLEPASTE` | `PASTETABLE` | Pravi tabelu iz ćelija tabele na privremenoj memoriji |
| `TABLESTYLE` | `TS` | Stilovi tabele: visine teksta, poravnanje, margine i ivice za naslov, zaglavlje i redove podataka |
| `TAGS` |  | Oznake na referencama blokova: definiše oznaku (vrsta, dozvoljene vrednosti, blokovi na koje se odnosi), postavlja je na izabrane reference, i navodi ih kao spisak koji možete sačuvati kao CSV |
| `TEXT` | `DT`, `DTEXT` | Jednoredni tekst; Enter počinje sledeći red |
| `TEXTEDIT` | `ED`, `DDEDIT` | Menja tekst na mestu: izaberite tekst (ili dvaput kliknite jedan) (ED) |
| `TEXTMASK` | `TMASK` | Stavlja maskiranu pozadinu iza teksta (pozadina crteža ili boja), ili je uklanja. |
| `TEXTTOFRONT` |  | Dovodi sav tekst, kote i vodilice ispred svega ostalog. |
| `TOOLBAR` |  | Bira šta dugmad trake prikazuju: ikone i tekst, samo ikone, ili samo tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Postavlja traku pri vrhu, dnu, levoj ili desnoj strani prozora |
| `TOOLBARROWS` |  | Bira koliko redova traka koristi: prelamanje da stane, 2, ili 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Pravi trake iznad crteža standardne ili kompaktne |
| `TOUCHCROSSHAIR` | `TCX` | Ukršteni kursor sa pomakom za crtanje prstom: jedan prst pomera ukršteni kursor koji je iznad i sa strane, pa prst ne prekriva tačku izbora. Podizanje prsta ništa ne bira; dugme Klik ili dodir drugim prstom bira na ukrštenom kursoru, a držanje Klika dok se krećete prevlači. Dugo pritiskanje ili dugme Enter je Enter. Dva prsta pomeraju i zumiraju. Opcije: ON, OFF, Auto (uključeno samo tamo gde je prst jedini pokazivač), Distance (Rastojanje), Side (Strana). |
| `TOUR` | `TUTORIAL` | Ponovo pređite šestokoračni prvi obilazak crtanja |
| `TRIM` | `TR` | Skraćuje objekte do mesta gde ih seku drugi: kliknite deo, prevucite kroz nekoliko, ili Shift+klik da produžite |
| `TRIMEXTENDMODE` |  | Kako TRIM i EXTEND počinju: 1 Brzo (svaki objekat je ivica za sečenje ili granica), 0 Standardno (prvo izaberite ivice) |
| `TTR` |  | Krug tangentan na dva objekta, sa poluprečnikom koji zadajete (isto kao CIRCLE T). |
| `TURNLEFT` |  | Okreće pogled 90° ulevo (suprotno kazaljci na satu): UCS Z -90, i pogled prati. Ništa u crtežu se ne pomera. |
| `TURNRIGHT` |  | Okreće pogled 90° udesno (u smeru kazaljki na satu): UCS Z 90, i pogled prati. Ništa u crtežu se ne pomera. |
| `TURNWORLD` |  | Nazad na svet: UCS Svet, i pogled je ponovo ravan. |
| `TXT2MTXT` | `T2M` | Spaja jednoredne tekstove u jedan tekst pasusa, odozgo nadole. |
| `UCS` |  | Vaš sopstveni koordinatni sistem: početna tačka i X osa (origin, Z ugao, 3point, OBject, Previous, World, NAmed). Tačke koje ukucate, orto, polarno praćenje, mreža i novi tekst ga prate; pogled se okreće tako da njegova X osa bude horizontalna. Ništa u crtežu se ne pomera. |
| `UNDO` | `U` | Opoziva poslednju komandu |
| `UNGROUP` |  | UNGROUP: rastavlja grupe. Izaberite objekte grupa, ili zadajte Ime. Objekti ostaju u crtežu. |
| `UNION` | `UNI` | Spaja tela u jedno (3D), ili 2D regione u jedan region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponovo prikazuje svaki objekat skriven sa ISOLATEOBJECTS ili HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kako se dužine prikazuju i unose: decimalno, stope i inči, razlomci (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponovo izračunava polja i bira kada se sama ažuriraju |
| `USDOUT` |  | Izvozi 3D model kao USD (.usda tekst, .usdc binarno ili .usdz paket) |
| `VIEW` | `-VIEW`, `V` | Standardni 3D pogledi, perspektivni ili paralelni (3D) |
| `VIEWBASE` | `FLATSHOT` | Postavlja ravan 2D pogled 3D tela (sprednji, gornji, bočni ili izometrijski, skrivene linije isprekidane) na list ili u model |
| `VIEWLABEL` | `VL` | Naslov pogleda na listu koji prikazuje naziv pogleda njegovog prozora i menja se s njim. |
| `VOICE` |  | Uključuje ili isključuje izgovorene komande. Prepoznaju se na ovom računaru. |
| `VPCLIP` |  | Iseče prozor pogleda lista na zatvoreni objekat ili nacrtani poligon; Delete ga ponovo pravi pravougaonikom |
| `VPLAYER` |  | Zamrzava ili odmrzava slojeve samo u nekim prozorima pogleda (Freeze, Thaw, Reset), i bira koji slojevi novi prozori pogleda počinju zamrznuti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Deli površinu crtanja na okna, svako sa sopstvenim pogledom (na listu: prozor pogleda, kao MVIEW) |
| `VPVIEW` |  | Postavlja šta prozor pogleda prikazuje: izaberite prozor na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuelni stil 3D pogleda: senčeno, ivice, skrivena linija, žičani model, rendgen |
| `WALL` | `WA` | Crta 2D zidove kao polilinija. Spajaju se i nose vrata i prozore. |
| `WALLARC` | `WARC` | Crta luk zidova. Zidovi u planu su pravi, pa se luk crta kao kratki pravi zidovi (po 15 stepeni) koji se spajaju. |
| `WALLDELSEG` |  | Briše deo zida između dve tačke. Ostatak ostaje kao jedan ili dva zida. |
| `WALLDIM` |  | Ukucajte novu vrednost za kotu: zid na njenom dalekom kraju se pomera normalno na sebe, zid na prvom kraju ostaje, a zidovi spojeni za njega prate. |
| `WALLDISJOIN` |  | Izaberite zid blizu jednog kraja da zabranite spajanje na tom kraju: kraj se crta pod pravim uglom i ništa ga ne prati. Izaberite ponovo da dozvolite. |
| `WALLGRID` |  | Zaključava zid za liniju mreže: duž nje, ili jedan kraj na njoj. Pomerite liniju sa GRIDMOVE i zid prati. |
| `WALLHOLD` |  | Poravnaj i zaključaj: zid zadržava svoje mesto prema drugom zidu (na njegovoj liniji, ili na rastojanju koje ima). Ako se jedan pomeri, drugi prati. |
| `WALLHOLDDIM` |  | Zaključava rastojanje između dva paralelna zida. Ako se jedan pomeri, drugi prati da ga održi. |
| `WALLHOLDS` |  | Navodi zaključavanja na zidovima. |
| `WALLJOINS` |  | Daje svakom zidu starijeg crteža njegov identifikator i čuva spojeve između njih. Ovo se dešava i pri prvoj promeni koju napravite. |
| `WALLJOINSTYLE` |  | Kliknite ugao gde se dva zida sastaju kraj do kraja da promenite kako se crta: kosa linija, sučeljavanje, pravo odsecanje. T menja koji zid prolazi kroz. |
| `WALLOFFSET` | `WO` | Pomera zid normalno na sebe za rastojanje (zidovi spojeni za njega prate), ili pravi kopiju na tom rastojanju. |
| `WALLPICK` |  | Pravi zidove na liniji ili poliliniji u crtežu, sa linijama spojenim za nju ako kažete Da. |
| `WALLPOLY` | `WP` | Crta zidove oko pravilnog poligona sa 3 do 64 strane, kao POLYGON. |
| `WALLRECT` | `WR` | Crta četiri spojena zida od dva suprotna ugla, kao RECTANG. |
| `WALLREJOIN` |  | Pretvara dva dela zida opet u jedan zid. Prvi zadržava svoje mesto u crtežu. |
| `WALLROT` |  | Crta četiri spojena zida kao pravougaonik okrenut pod bilo kojim uglom: prva strana, pa koliko daleko napolje. |
| `WALLSPLIT` | `WS` | Deli zid na dva na tački ili gde ga seče drugi zid. Delovi ostaju spojeni osim ako ne tražite razmak ili slobodne krajeve. Vrata i prozori idu sa svojim delom. |
| `WALLSPLITGAP` |  | Deli zid ostavljajući razmak: ukucajte razmak, izaberite zid, pa tačku. Delovi zadržavaju slobodne krajeve i mogu se opet spojiti. |
| `WALLSTRETCH` |  | Razvlači sa prozorom: krajevi zidova unutar njega se pomeraju, zidovi potpuno unutra se pomeraju celi, a zidovi koji se naslanjaju na njihove strane kližu s njima. |
| `WALLTAN` |  | Nastavlja zid lukom koji iz njega izlazi duž zida (crta se kao kratki pravi zidovi). |
| `WALLTRACE` |  | Pravi zidove oko najmanje zatvorene oblasti linija i zidova oko tačke na koju kliknete. |
| `WALLUNHOLD` |  | Skida zaključavanja sa zida (i zaključavanja drugih zidova za njega). |
| `WBLOCK` | `W`, `-WBLOCK` | Upisuje blok, neke objekte ili ceo crtež u novu DWG ili DXF datoteku (W) |
| `WEDGE` | `WE` | Klin: dva ugla i visina; kosi se od prvog ugla (3D) |
| `WHEREAMI` | `WHERE` | Kaže gde je kursor. |
| `WHOHAS` |  | Kaže ko ima crtež otvoren. CadCraft Studio čuva mali fajl za zaključavanje pored svakog otvorenog crteža (Plan.dwg.cclock: ko, od kad, koja verzija) i uklanja ga pri zatvaranju. Opcije: Current (otvoreni crtež), File (izaberi jedan), FOlder (svaki crtež u fascikli koji je negde otvoren; ovo takođe omogućava Studiju da čuva datoteke zaključavanja u toj fascikli), Path (ukucaj jednu), Name (ime koje drugi vide). Zaključavanje koje nije osveženo pet minuta naziva se zastarelim. Nije dostupno u pregledaču. |
| `WINDOW` | `WN` | Postavlja prozor u zid. |
| `XATTACH` | `XA` | Povezuje drugi DWG ili DXF u ovaj crtež, prikazan samo za čitanje (XREF ih navodi i ponovo učitava) |
| `XCLIP` | `XC` | Iseca reference blokova i povezane crteže na pravougaonik ili poligon, ili uklanja isečak. |
| `XLINE` | `XL` | Konstrukciona linija, beskonačna u oba smera: kroz dve tačke, horizontalna, vertikalna, pod uglom, koja deli ugao, ili pomerena od linije. |
| `XREF` | `XR`, `-XREF` | Povezani crteži (spoljne reference): navedi, prikači, ponovo učitaj, veži, odveži |
| `ZOOM` | `Z` | Obuhvati sve, ili prozor |
