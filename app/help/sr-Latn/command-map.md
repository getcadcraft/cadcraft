---
title: Mapa komandi: šta ukucati
summary: Svaka komanda CadCraft-a sa svojim kratkim nazivima, od A do Z, napravljena iz samog programa, i navike iz drugih programa za crtanje koje se razlikuju.
keywords: mapa komandi, komande, skraćenice, kratki nazivi, dolazak iz, spisak komandi, šta ukucati, obriši, skrati, ekvivalent, razlike
from: 9426856f
---

CadCraft preuzima nazive komandi i kratke nazive koje ljudi znaju iz drugih programa za crtanje: ukucajte `L` za liniju, `TR` za skraćivanje, `E` za brisanje. Zato za većinu njih nema tabele prevoda koju treba naučiti: naziv koji znate je naziv ovde. Spisak ispod je svaka komanda koju CadCraft ima, napravljen iz samog programa. {{key:Enter}} ponavlja poslednju, a `HELP` u komandnoj liniji štampa isti spisak.

Nekoliko koje nisu iste, ili nisu napravljene:

- **Sačuvaj** (**Save**) preuzima kopiju u pregledaču ({{cmd:SAVE}}, {{cmd:SAVEAS}}); u CadCraft Studio-u upisuje datoteku. Vidi [Dolazak iz drugog softvera za crtanje](topic:coming-from).
- **PLOT** pravi PDF (takođe PNG i SVG), uz tabelu stilova štampanja; nema upravljača podešavanjem stranice.
- **DIMSTYLE** i **PEDIT** su napravljeni; **PEDIT** nema opciju Izmeni tačku (to rade hvatači).
- **TABLE** nije napravljen; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} jesu.
- Sopstvene komande rutine (AutoLISP `C:NAME`) pojavljuju se posle učitavanja sa {{cmd:APPLOAD}}; ovde nisu navedene.

## Sve komande (402)

| Komanda | Kratki nazivi | Šta radi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitira 3D prikaz levim dugmetom |
| `ACCESS` | `AX` | Uključuje ili isključuje crtanje bez vida: rezultati izgovoreni preko čitača ekrana, tastaturni kursor na crtežu, zvuci hvatanja i izgovorene komande. |
| `ALIASEDIT` | | Uređuje skraćenice komandi u jednoj tekstualnoj datoteci (poznati format L, *LINE) |
| `ALIGN` | `AL` | Pomera i okreće objekte tako da izvorne tačke padnu na odredišne tačke (jedan, dva ili tri para), i po potrebi ih razmerava |
| `ALIGNPANEL` | `ALP` | Otvara panel Poravnaj i raspodeli |
| `ALIGNTO` | | Poravnava leve, središnje, desne, gornje, srednje ili donje ivice izabranih objekata, na izboru, na prvom ili poslednjem izabranom objektu, ili na tački |
| `ANNOALLVISIBLE` | `ANNOALL` | Prikazuje anotativne objekte na svakoj razmeri, ili samo tamo gde je razmera prozora pogleda (ili crteža) na njihovom spisku |
| `ANNOSCALE` | `CANNOSCALE` | Postavlja razmeru anotacija crteža: anotativni tekst i kote se razmeravaju da se štampaju u istoj veličini |
| `APPLOAD` | `AP` | Učitava aplikacije: LISP rutine (.lsp) i njihove datoteke dijaloga (.dcl); Startni paket (AP) |
| `ARC` | `A` | Luk: 3 tačke, Početak/Centar/Kraj, Početak/Centar/Ugao, Početak/Centar/Dužina, Početak/Kraj/Ugao, Početak/Kraj/Pravac, Početak/Kraj/Poluprečnik, Centar/Početak/Kraj, Centar/Početak/Ugao, Centar/Početak/Dužina, Nastavi |
| `AREA` | `AA` | Površina i obim po tačkama ili nekog objekta; Dodaj i Oduzmi čuvaju tekući zbir (AA) |
| `ARRAY` | `AR` | Kopije u redovima i kolonama, ili u krugu oko centra (AR) |
| `ARRAYASSOCIATIVITY` | | Određuje da li komande ARRAY prave nizove koji ostaju izmenljivi (1) ili obične kopije (0) |
| `ARRAYCLOSE` | | Završava uređivanje izvornih objekata niza |
| `ARRAYEDIT` | | Menja niz napravljen opcijom Pridruženo: brojevi, razmak, izvorni objekti, jedna stavka |
| `ARRAYPATH` | | Kopije objekata duž linije, luka, polilinije ili druge krive |
| `ARRAYPOLAR` | | Kopije u krugu oko središnje tačke |
| `ARRAYRECT` | | Kopije u redovima i kolonama |
| `ASBUILT` | `ASB` | ASBUILT čita izmerene tačke izvedenog stanja koje je izmerila ekipa (CSV / TXT, kako ih piše EXPORTPOINTS) i poredi ih sa tačkama crteža: unutar ili van tolerancije, nije izmereno, višak. Obeležava ih na sloju AS-BUILT i preuzima CSV izveštaj. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definiše atribut (oznaku za koju blok traži vrednost) za stavljanje u blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Menja vrednosti atributa reference bloka u komandnoj liniji, jednu za drugom (Enter zadržava vrednost) |
| `ATTSYNC` | | Usklađuje reference bloka sa njegovim definicijama atributa: nove dodaje sa podrazumevanim vrednostima, uklonjene izbacuje, pozicije i tekst se resetuju; vrednosti se čuvaju |
| `AUDIT` | | Proverava otvoreni crtež za oštećenja: brojevi koji nisu konačni, objekti bez veličine, nedostajući slojevi, blokovi, stilovi i tipovi linija, blokovi koji sadrže sami sebe, zajednički identifikatori, neispravne kote i šrafure. Navodi šta nalazi po vrsti i pita pre popravke; popravka je jedan korak opozivanja. |
| `AUNITS` | `ANGUNITS` | Kako se uglovi prikazuju i unose: decimalni stepeni, stepeni-minuti-sekunde ili pravci kao N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatsko dovršavanje crteža uključeno ili isključeno, ili navodi šta uzorci crteža sada predlažu. |
| `AUTOCONSTRAIN` | | Dodaje podudarnost, vodoravna i uspravna ograničenja tamo gde je geometrija već blizu |
| `AUTODIM` | `ADIM` | Kotiranje po pravilima: ukupna veličina, lanci duž strana, otvori, prečnici rupa i razmak mreže, bez ponavljanja onoga što je već kotirano. |
| `AUTOSHEET` | `ASH` | Sam slaže listove: bira papir i standardne razmere i postavlja svaki prikaz sa natpisom i naslovnim blokom. |
| `BATTMAN` | | Upravljač atributima bloka: redosled, oznake, upiti, podrazumevane vrednosti i režimi atributa bloka, zatim ažuriranje njegovih referenci |
| `BCLOSE` | | Zatvara urednik bloka: čuva blok ili odbacuje izmene |
| `BCONVERT` | | BCONVERT nalazi geometriju koja se ponavlja i pretvara je u reference bloka. Izaberite objekte koji se ponavljaju: svaki drugi skup objekata u otvorenom prostoru koji je ista geometrija, pomeren i okrenut za bilo koji ugao, biće nađen, a sa uključenim Ogledalski ili Razmera nalaze se i ogledalske slike i kopije drugačije veličine. Novom bloku dajte naziv i osnovnu tačku; izbor i svaka kopija postaju reference na njega, svaka sa sopstvenom rotacijom i razmerom. Ili izaberite Blok i imenujte postojeći blok da nađete slobodne kopije njegovih objekata. Kopija mora imati isti sloj, boju, tip i debljinu linije, osim ako Svojstva nisu postavljena na Ignoriši. Objekti na zaključanim slojevima se ne diraju. Jedan korak opozivanja. |
| `BEDIT` | `BE` | Urednik bloka: uređuje objekte i atribute bloka; BCLOSE čuva (BE) |
| `BLEND` | | BLEND: spline između krajeva dve otvorene krive, izabranih blizu krajeva da se spoje. CONtinuity: Tangent prati oba pravca, Smooth prati i kako se savijaju. |
| `BLOCK` | `B`, `BMAKE` | Pravi blok od objekata (postaju jedna referenca) |
| `BLOCKREPLACE` | | BLOCKREPLACE: svaka referenca jednog bloka postaje referenca drugog, na istom mestu, sa istom razmerom i rotacijom. Vrednosti atributa koje oba bloka imaju se čuvaju. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE prikazuje panel Blokovi sa kursorom u njegovom filteru. Panel prikazuje sliku svakog bloka (najskorije postavljeni prvi), kao spisak ili mrežu; kliknite sliku ili je prevucite na crtež da postavite blok sa INSERT. Pod Bibliotekama dodajte sopstvenu DWG ili DXF datoteku: njeni blokovi se navode sa slikama i kopiraju se u ovaj crtež kada postavite jedan. U CadCraft Studio-u se može dodati i fascikla crteža, a datoteke i fascikle se pamte. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolone tabele specifikacije materijala, grupisanje, sortiranje, naslov, zbirovi i napomene |
| `BOMEXPORT` | | Čuva tabelu specifikacije materijala kao .csv datoteku |
| `BOMTABLE` | `BOM` | Živa tabela specifikacije materijala jedne zone ili celog crteža |
| `BOMUPDATE` | | Ažurira svaku tabelu specifikacije materijala sada, i zamrznute |
| `BOMZONE` | `BZONE` | Imenovana oblast crteža za specifikaciju materijala: dva ugla, poligon ili obris zatvorenog objekta |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): izaberite tačku unutar zatvorene površine i dobijate zatvorenu polilinju oko nje. Lukovi ostaju lukovi. Ostrva obuhvataju i unutrašnje površine. |
| `BOX` | | Kutija: dva ugla i visina (3D) |
| `BPARAMETER` | `BPARAM` | Još nije napravljeno: dodavanje parametra (kao što je Vidljivost) bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri bloka: imenovani parametri sa formulama, i više parametara vidljivosti u jednom bloku. Radi u uredniku blokova (dodeljuje izabrane objekte stanju) i nad izabranom referencom (sopstvene vrednosti i stanja). |
| `BREAK` | `BR` | Prelomi liniju, luk, krug ili polilinju između dve tačke (BR) |
| `BREAKATPOINT` | | Deli liniju, luk ili polilinju na dva dela u tački |
| `BREAKLINE` | | Crta liniju sa simbolom preloma; njena veličina i produženje preko krajeva se pamte. |
| `BREPLACE` | | BREPLACE menja jedan blok drugim: izabrane reference blokova i ime bloka koji ide umesto njih. Sve: imenujte blok i njegovu zamenu, i svaka referenca u svakom prostoru i unutar drugih blokova se menja. Referenca zadržava svoje mesto, razmeru, rotaciju i sloj, i vrednosti atributa koje oba bloka imaju; vrednosti za koje novi blok nema mesto se odbacuju i navode. |
| `BSEARCH` | | BSEARCH nalazi blokove. Ime: deo naziva bloka, ili šablon sa * i ?. Atribut: vrednost (ili TAG=vrednost) koju drže atributi reference. Geometrija: izaberite objekte ili jednu referencu bloka, i navode se blokovi čiji je oblik najmanje 85% sličan, najbolji prvi; veličina, rotacija i ogledalo se ne računaju. Reference nađene u otvorenom prostoru se biraju, spremne za sledeću komandu. |
| `BURST` | | Razbija reference blokova i zadržava ono što kažu njihovi atributi: svaka vrednost postaje tekst na sloju tog atributa. |
| `BVHIDE` | `BVH` | U uredniku blokova: sakriva objekte u trenutnom stanju vidljivosti. |
| `BVSHOW` | `BVSH` | U uredniku blokova: prikazuje objekte koje trenutno stanje vidljivosti krije (prikazani su zatamnjeni da se mogu izabrati). |
| `BVSTATE` | `BVS` | U uredniku blokova, na bloku sa stanjima vidljivosti: prelazi na stanje, ili dodaje, preimenuje ili briše stanje. |
| `CAL` | | Računa dužinu ili broj: + − * / i zagrade, kako ih ukucate bilo gde |
| `CENTERLINE` | `CL` | Središnja linija između dve linije: na pola puta između njih, ili duž simetrale kada se sretnu (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Oznaka centra: krst u centru kruga ili luka, sa središnjim linijama do malo iza njega (CM) |
| `CHAMFER` | `CHA` | Skida ivicu ugla između dve linije (D dva rastojanja, A dužina i ugao, P svaki ugao polilinije) |
| `CHSPACE` | | CHSPACE: pomera objekte između lista i modela kroz prozor pogleda. Razmeravaju se i okreću da izgledaju isto sa druge strane. Na listu idu u model; dok radite kroz prozor pogleda (MSPACE), dolaze na list. |
| `CIRCLE` | `C` | Centar i poluprečnik, prečnik, 2 ili 3 tačke |
| `CLASS` | | Stavlja izabrane objekte u klasu, ili, bez izbora, postavlja aktivnu klasu (? ih navodi) |
| `CLASSES` | `CLS` | Panel Klase: klase razvrstavaju objekte kroz slojeve; prikazuje, sakriva i stilizuje ih, i poništava ih po prozoru pogleda (CLS) |
| `COMMANDLINE` | `CMDLINE` | Zakači ili učini lebdećom komandnu liniju, načini je jednim redom, postavi redove istorije ili otvori istoriju (F2) |
| `COMPARESETTINGS` | `CMPSET` | Poredi stilove kota, stilove teksta, slojeve, listove ili jedinice: dva u ovom crtežu, ili ovaj crtež protiv drugog otvorenog, i kopira vrednost preko. |
| `CONSTRAINTBAR` | `CBAR` | Prikazuje ili sakriva trake ograničenja (Showall / Hideall, ili po objektu) |
| `COPY` | `CO`, `CP` | Kopira objekte, onoliko puta koliko kliknete |
| `COPYBASE` | | Kopira objekte u klipbord sa osnovnom tačkom koju izaberete |
| `COPYCLIP` | | Kopira objekte u klipbord (Ctrl+C); PASTECLIP ih postavlja |
| `COUNT` | `BCOUNT` | Broji reference blokova: izaberite jednu da izaberete i prebrojite svaku referencu njenog bloka |
| `COUNTTABLE` | | Postavlja tabelu brojeva blokova |
| `CREDITS` | | Stavlja zasluge biblioteke u crtež kao tabelu. Pokrenite ponovo da osvežite tabelu iz stavki crteža sada. |
| `CURSORSIZE` | | Veličina ukrštenog kursora: 100 ga pokreće od ivice do ivice crteža (Podešavanja › Kursor › Ceo ekran) |
| `CUTCLIP` | | Seče objekte u klipbord (Ctrl+X): kopira, pa briše |
| `CYLINDER` | `CYL` | Cilindar: centar, poluprečnik i visina (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Navodi blokove, njihove atribute i svojstva objekata kao tabelu u crtežu ili CSV datoteku |
| `DATALINK` | `DL` | Tabela iz CSV datoteke koja pamti datoteku, pa može ponovo da se pročita |
| `DATALINKUPDATE` | `DLU` | Ponovo čita datoteku veze podataka i ponovo puni njene tabele |
| `DCALIGNED` | `DCALI` | Dimenziono ograničenje: prava udaljenost između tačaka, tačke i linije, ili dve linije |
| `DCANGULAR` | `DCANG` | Dimenziono ograničenje: ugao između dve linije, ili luka |
| `DCCONVERT` | | Pretvara kote nacrtane na geometriji koja se može ograničiti u dimenziona ograničenja |
| `DCDIAMETER` | `DCDIA` | Dimenziono ograničenje: prečnik kruga ili luka |
| `DCDISPLAY` | | Prikazuje ili sakriva dimenziona ograničenja na crtežu |
| `DCHORIZONTAL` | `DCHOR` | Dimenziono ograničenje: vodoravna udaljenost |
| `DCLINEAR` | `DCLIN` | Dimenziono ograničenje: vodoravna ili uspravna udaljenost, od mesta gde je postavite |
| `DCRADIUS` | `DCRAD` | Dimenziono ograničenje: poluprečnik kruga ili luka |
| `DCVERTICAL` | `DCVER` | Dimenziono ograničenje: uspravna udaljenost |
| `DELBLOCKS` | | Briše blokove: svaku referencu (i ugnježdene, na svakom listu) i definicije |
| `DELCONSTRAINT` | `DELCON` | Uklanja svako ograničenje (geometrijsko i dimenziono) sa objekata koje izaberete |
| `DELOPENING` | | Vadi vrata ili prozor iz zida. |
| `DESCRIBE` | `DESC` | Kaže šta crtež sadrži: koliko objekata, koje vrste, koliko su veliki, šta je izabrano. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Briše izbor (Esc) |
| `DETAILS` | `DET` | Detalji vaše firme, nađeni za ono što crtate: nađi, dodaj blok, navedi, ukloni, uključi ili isključi ponude. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Crta dijagram iz teksta: Mermaid dijagram toka, PlantUML dijagram komponenti, D2, spisak od-do ili draw.io XML, kao blokovi i veze koje možete menjati |
| `DIMALIGNED` | `DAL`, `DIMALI` | Prava udaljenost između dve tačke |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ugao između dve linije, luka, ili po tri tačke |
| `DIMARC` | `DAR` | Kota dužine luka: udaljenost duž luka, sa simbolom luka (DAR) |
| `DIMASZ` | | Podešavanje kote: veličina strelice |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kote složene iz jedne osnovne linije |
| `DIMBREAK` | `DBREAK` | Prekida linije kote i linije produženja tamo gde seku druge objekte (Auto), između dve tačke (Manual), ili uklanja prekide |
| `DIMCONSTRAINT` | `DCON` | Dimenziona ograničenja: linearna, poravnata, uglovna, poluprečnik, prečnik, pretvori |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Lanac kota, svaka od kraja poslednje |
| `DIMDEC` | | Podešavanje kote: decimalna mesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Prečnik luka ili kruga |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Oslobađa kote od objekata za koje su vezane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Menja tekst kote (Početna, Novi tekst, Okreni) ili kosi linije produženja (Kosi) |
| `DIMEXE` | | Podešavanje kote: produženje preko linije kote |
| `DIMEXO` | | Podešavanje kote: pomak od početka |
| `DIMGAP` | | Podešavanje kote: razmak oko teksta |
| `DIMINSPECT` | | Kota inspekcije: okvir oko vrednosti sa oznakom i učestalošću provere dela |
| `DIMJOGGED` | `DJO`, `JOG` | Kota poluprečnika sa prelomom: poluprečnik nacrtan od bliže tačke kada je centar daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Dodaje simbol preloma na liniju linearne ili poravnate kote, da pokaže da rastojanje nije nacrtano u razmeri (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vodoravna ili uspravna udaljenost (R za bilo koji ugao) |
| `DIMLUNIT` | | Podešavanje kote: format dužine (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomak) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kota koordinate: X ili Y udaljenost tačke od početka UCS-a, na vodilici (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Poništava promenljive kote na izabranim kotama bez menjanja njihovog stila; Clear vraća stil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Poluprečnik luka ili kruga |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Vezuje tačke kote za objekte, pa prati i ponovo meri kada se oni pomere (DRE) |
| `DIMSCALE` | | Podešavanje kote: opšta razmera (veličine × ovo) |
| `DIMSPACE` | | Ravnomeran razmak između paralelnih kota, meren od osnovne kote (0 ih poravnava, Auto je dvostruka visina teksta) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Pravi, menja, postavlja tekući, briše, primenjuje i poredi imenovane stilove kota (dijalog; -DIMSTYLE u komandnoj liniji) |
| `DIMTEDIT` | `DIMTED` | Pomera tekst kote levo, desno ili u centar linije kote, ili ga okreće |
| `DIMTEXTUNIT` | `DTU` | Tekst kote u mm, cm, m ili km, ili u sopstvenim jedinicama crteža: izabrane kote, inače nove (DTU) |
| `DIMTXT` | | Podešavanje kote: visina teksta |
| `DIST` | `DI` | Udaljenost i ugao između dve tačke |
| `DISTRIBUTE` | | Ravnomerno raspoređuje izabrane objekte, u stranu ili gore-dole: jednaki koraci između centara, ili jednaki razmaci; dve spoljne ostaju |
| `DIVIDE` | `DIV` | DIVIDE (DIV): oznake koje seku liniju, luk, krug, polilinju, spline ili elipsu na jednake delove. Tačke, ili sa Blok, blok na svakoj oznaci. |
| `DOCUMENTS` | `DOCS` | Otvara panel Dokumenti: provera crteža pozajmljenih i vraćenih, revizije, stanja izdanja i odobrenje za projektnu fasciklu |
| `DOOR` | `DR` | Stavlja vrata u zid. Strana na koju kliknete je strana na koju se otvaraju. |
| `DRAWORDER` | | Menja redosled crtanja: dovodi objekte napred, šalje ih nazad, ili ih stavlja iznad ili ispod drugih objekata. |
| `DUPLICATE` | `DUP` | Kopija koja se pomera sa pokazivačem: kliknite da je spustite (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Svojstva crteža: naslov, autor i ostalo, i vaši sopstveni parovi naziva i vrednosti |
| `DXFOUT` | | Preuzima crtež kao DXF R12 (Sačuvaj zadržava svoj format) |
| `EATTEDIT` | `DDATTE` | Menja atribute reference bloka: vrednosti, tekst i svojstva, jedan atribut po jedan |
| `ELLIPSE` | `EL` | Krajnje tačke ose i druga polu-osa |
| `ERASE` | `E`, `DELETE` | Uklanja objekte |
| `EXPLODE` | `X` | Razbija polilinije, blokove i kote na njihove delove |
| `EXPORT` | `EXP` | Čuva kopiju crteža u vrsti datoteke koju piše dodatak |
| `EXPORT3D` | `3DEXPORT` | Izvozi 3D model: GLB, OBJ ili STL |
| `EXPORTPOINTS` | `EXPPTS` | Piše tačke, i tačke umetanja blokova sa jednim atributom kao opisom, u CSV ili TXT datoteku (PNEZD, PENZD ili XYZ) za programe za BIM i geodeziju |
| `EXTEND` | `EX` | Produžava objekte do drugih: kliknite blizu kraja, prevucite kroz više, ili Shift+klik za skraćivanje |
| `EXTRIM` | | EXTRIM: izaberite jednu reznu ivicu, zatim stranu. Sve što prelazi preko ivice skraćuje se na toj strani. Delovi koji bi otišli se prikazuju dok pomerate pokazivač. |
| `EXTRUDE` | `EXT` | Izvlači zatvorene 2D objekte u tela (3D) |
| `FIELD` | | Stavlja polje u tekst, ćeliju tabele ili atribut: datum, naziv datoteke, broj lista, svojstvo crteža, površinu ili dužinu objekta, ili formulu |
| `FILLET` | `F` | Zaobljava ili kvadrira ugao između dva objekta (R poluprečnik, P svaki ugao polilinije, M više) |
| `FIND` | | Traži i menja reči u tekstu, vrednostima atributa i tekstu kota |
| `FLATTEN` | | Postavlja visinu (Z) i debljinu izabranih objekata na 0, i u blokovima koje koriste. |
| `FLOOR` | | Bira sprat na kome crtate, dodaje jedan, ili pomera ili kopira izbor na njega. |
| `FLOORLAYERS` | | Pretvara spratove u slojeve nazvane Floor-Layer, za datoteku koja ide nekome bez spratova. |
| `FLOORS` | `FLR` | Otvara panel Spratovi: slaže spratove u jednom modelskom prostoru. |
| `GCCOINCIDENT` | | Ograničenje: dve tačke se sastaju, ili tačka ostaje na objektu |
| `GCCOLLINEAR` | | Ograničenje: dve linije ostaju na jednoj liniji |
| `GCCONCENTRIC` | | Ograničenje: dva kruga ili luka dele centar |
| `GCEQUAL` | | Ograničenje: dve linije ostaju iste dužine, ili dva kruga/luka isti poluprečnik |
| `GCFIX` | | Ograničenje: tačka ili ceo objekat ostaje gde je |
| `GCHORIZONTAL` | | Ograničenje: linija (ili dve tačke) ostaje vodoravna |
| `GCPARALLEL` | | Ograničenje: dve linije ostaju paralelne |
| `GCPERPENDICULAR` | | Ograničenje: dve linije ostaju pod pravim uglom |
| `GCSYMMETRIC` | | Ograničenje: dve tačke, linije ili krugovi se ogledaju preko linije |
| `GCTANGENT` | | Ograničenje: linija i krug ili luk (ili dva od njih) ostaju tangentni |
| `GCVERTICAL` | | Ograničenje: linija (ili dve tačke) ostaje uspravna |
| `GDSIN` | `GDS` | Pregled IC rasporeda (GDSII datoteka toka): svaki sloj i tip podataka kao sloj crteža, ravno, u korisničkim jedinicama; samo za pregled i merenje (laboratorijski test) |
| `GEOMCONSTRAINT` | `GCON` | Geometrijska ograničenja: vodoravno, uspravno, paralelno, tangentno, podudarno… |
| `GLBOUT` | | Izvozi 3D model kao GLB (glTF) |
| `GRADIENT` | `GD` | Ispunjava površinu gradijentom jedne ili dve boje |
| `GRID` | | Postavlja mrežu: rastojanje između linija, svaka N-ta linija kao glavna, ON ili OFF, ili Auto da ponovo prati zum |
| `GRIDMOVE` | `GM` | Pomera liniju mreže i ono što visi na njoj: zidovi se rastežu, stubovi, mehurići i oznake se pomeraju, kote prate. |
| `GROUP` | `G` | GROUP (G): daje izabranim objektima naziv koji dele. Klik na jedan od njih tada bira sve. Enter na nazivu pravi neimenovanu grupu. |
| `GROUPEDIT` | | GROUPEDIT: menja grupu. Izaberite jedan od njenih objekata ili dajte njen naziv, zatim Dodaj ili Ukloni objekte, REName preimenuje, menja njen opis, ili kaže da li klik bira celu grupu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Ispunjava površinu punom ispunom ili šablonom: kliknite unutra, ili izaberite zatvorene objekte (H) |
| `HATCHEDIT` | `HE` | Menja šrafuru: šablon, razmera, ugao, početna tačka i njena veza sa granicom. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponovo pravi granične polilinije iz šrafure, povezane sa njom ili ne |
| `HATCHTOBACK` | | Šalje svaku šrafuru iza svega ostalog. |
| `HELP` | `?` | Ovaj spisak |
| `HIDEOBJECTS` | | Sakriva izabrane objekte dok ne pokrenete UNISOLATEOBJECTS. Ne čuva se sa crtežom. |
| `HISTORY` | `HIST` | HISTORY (HIST): verzije ovog crteža — kopije koje se čuvaju na ovom računaru kada ih Studio sačuva, i verzije u oblaku — za otvaranje, vraćanje i poređenje sa onim što je promenjeno, prikazano bojom. |
| `ID` | | Koordinate tačke |
| `IMAGE` | `IM` | Daje CadCraft-u datoteke slika koje crtež koristi (DWG čuva samo gde su bile). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Postavlja sliku (PNG ili JPEG) iz datoteke. |
| `IMAGECLIP` | `ICL` | Seče sliku na pravougaonik ili poligon, ili uklanja njen isečak. |
| `IMPORT` | `IMP` | Uvozi datoteku vrste koju čita dodatak, u ovaj crtež |
| `INSERT` | `I`, `DDINSERT` | Postavlja blok (S razmera, R okreće); F iz DWG/DXF datoteke, L iz biblioteke |
| `INTERSECT` | `IN` | Zadržava samo ono što tela imaju zajedničko (3D), ili površinu koju dele 2D regije |
| `ISODRAFT` | | ISODRAFT: izometrijsko crtanje uključeno ili isključeno, ili pravo na ravan Levo, Gore ili Desno. Dok je uključeno, Ortogonalno i polarno praćenje prate dve ose ravni, mreža je izometrijska, a ELLIPSE ima Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Prikazuje samo izabrane objekte; sve drugo u ovom prostoru je sakriveno dok ne pokrenete UNISOLATEOBJECTS. Ne čuva se sa crtežom. |
| `ISOPLANE` | | ISOPLANE: birate izometrijsku ravan na kojoj crtate: Levo, Gore ili Desno. Enter prelazi na sledeću, kao što F5 radi dok je izometrijsko crtanje uključeno. |
| `JOIN` | `J` | Spaja linije, lukove i polilinije koji se sreću kraj uz kraj u jednu polilinju; linije na jednoj liniji u jednu liniju (J) |
| `LASER` | `LASERCUT` | Otvara panel Laser: šalje slojeve laserskom rezaču ili graveru (GRBL G-kod) |
| `LASSOMODE` | | Pritisak i prevlačenje crtaju omču (1) ili pravougaonik (0) |
| `LAYDEL` | | Briše sloj i svaki objekat na njemu (u modelu, na listovima i u blokovima) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otvara upravljač slojevima: svaki sloj u jednoj tabeli |
| `LAYERPANEL` | | Prikazuje panel slojeva. |
| `LAYFRZ` | | Zamrzava sloj svakog objekta koji izaberete |
| `LAYGROUP` | `LG` | Grupiše slojeve u fascikle u panelu Slojevi. |
| `LAYISO` | | Izoluje slojeve izabranih objekata (svi ostali slojevi isključeni) |
| `LAYLOCKFADE` | | Postavlja koliko objekti na zaključanim slojevima blede i da li klik može da ih izabere. |
| `LAYMCUR` | | Postavlja sloj objekta koji izaberete kao tekući |
| `LAYMRG` | | Spaja slojeve: njihovi objekti prelaze na ciljni sloj, a spojeni slojevi nestaju |
| `LAYOFF` | | Isključuje sloj svakog objekta koji izaberete |
| `LAYON` | | Uključuje svaki sloj. |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Novi list sa naslovnim blokom i prozorom pogleda |
| `LAYTHW` | | Odmrzava svaki sloj. |
| `LAYUNISO` | | Ponovo uključuje slojeve koje je LAYISO isključio |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pretvara tekst ukucan starim vijetnamskim fontovima (TCVN3 / ABC fontovi kao .VnTime, i VNI fontovi kao VNI-Times) u Unicode. Takav tekst se već prikazuje kako se čita; ovo ga trajno prepisuje, uz brojanje i jedan korak opozivanja. |
| `LENGTHEN` | `LEN` | Produžava ili skraćuje linije, lukove i polilinije: za iznos, procenat, do ukupne dužine, ili prevlačenjem (LEN) |
| `LIBRARY` | `LIB` | Panel biblioteke: postavite stavke, proverite ažuriranja, zasluge |
| `LIMITS` | | Postavlja granice crteža: ON, OFF, ili donji levi i gornji desni ugao. Kada su granice ON, tačke van njih se odbijaju |
| `LINE` | `L` | Prave duži, svaka je sopstveni objekat |
| `LINETYPE` | `LT`, `CELTYPE` | Tip linije koji nove objekte dobijaju (po sloju, po bloku, ili imenovan) |
| `LINKVIEWS` | `SYNCVIEWS` | Pomera i zumira sva okna zajedno (podeljen ekran), da uporedite dva crteža ili revizije |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ili VLIDE) otvara LISP uređivač: prozor za pisanje, učitavanje i probu rutine. Učitaj u crtež čita svaki oblik, kao što APPLOAD čita datoteku, i pravi njene komande. Pokreni izbor izvršava izabrane oblike, ili oblik u kome je kursor. Konzola prikazuje šta je rutina štampala i svaku grešku sa njenim redom. Zagrada u paru se obeležava dok kucate, a Enter uvlači novi red. Novo, Otvori i Sačuvaj rade nad .lsp datotekom. Spiskovi pored teksta prikazuju funkcije koje rutina definiše, one koje poziva a ovaj LISP još nema, i sve što ima. Prozor ne blokira crtež, pa rutina može tražiti tačke; Zaustavi ili Esc završava rutinu koja radi. |
| `LIST` | `LI`, `LS` | Opisuje objekte u istoriji |
| `LTSCALE` | `LTS` | Razmera tipa linije crteža (svaka crtica i razmak se množi njome) |
| `LWDISPLAY` | `LWT` | Prikazuje ili sakriva debljine linija na ekranu (dugme LWT u statusnoj traci) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Debljina koju nove objekte dobijaju (po sloju, po bloku, podrazumevano, ili mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Slojevi karte ispod modelskog prostora: koordinatni sistem crteža, pločice, WMS, WMTS, ArcGIS, slike |
| `MASSPROP` | | MASSPROP: svojstva preseka regija i zatvorenih objekata: površina, obim, težište, momenti i proizvod inercije, poluprečnici inercije i glavne ose. Tačno za linije i lukove. Izveštaj može da se upiše u tekstualnu datoteku. |
| `MATCHPROP` | `MA`, `PAINTER` | Usklađuje svojstva: kopira sloj, boju i više sa jednog objekta na druge (MA) |
| `MEASURE` | `ME` | MEASURE (ME): oznaka na svakoj zadatoj dužini duž linije, luka, kruga, polilinije, splajna ili elipse, od kraja najbližeg vašem izboru. Tačke, ili sa Blok, blok na svakoj oznaci. |
| `MEASUREGEOM` | `MEA` | Meri udaljenost, poluprečnik, ugao ili površinu (MEA) |
| `MINSERT` | | MINSERT: postavlja blok u redove i kolone odjednom. Svaki je sopstvena referenca, pa možete pomeriti ili obrisati bilo koji. |
| `MIRROR` | `MI` | Ogledalski preslikava objekte preko linije |
| `MLEADER` | `MLD`, `MLEAD` | Višestruka vodilica: strelica, vodilica i beleška, kao jedan objekat (MLD) |
| `MLEADERALIGN` | `MLA` | Poravnava višestruke vodilice sa jednom od njih duž pravca, na jednakom razmaku, ili raspoređene između dve tačke (MLA) |
| `MLEADERCOLLECT` | `MLC` | Skuplja nekoliko višestrukih vodilica u jednu: njihovi blokovi u redu ili koloni, ili njihove beleške jedna ispod druge (MLC) |
| `MLEADEREDIT` | `MLE` | Dodaje linije vodilica višestrukoj vodilici ili ih uklanja; prebacuje njen sadržaj između teksta i bloka (MLE) |
| `MLINE` | | Crta paralelne linije zajedno, spojene na uglovima. |
| `MOVE` | `M` | Pomera objekte za osnovnu tačku i drugu tačku |
| `MSPACE` | `MS` | Radi na modelu kroz prozor pogleda otvorenog lista (ili dvostruki klik unutar prozora pogleda). |
| `MTEXT` | `MT`, `T` | Pasusni tekst: prevucite njegovu širinu, zatim kucajte na mestu; Enter počinje novi pasus (T) |
| `MVIEW` | `MV` | Prozor pogleda na model, na rasporedu |
| `NAMEDVIEW` | `NV`, `VIEWS` | Imenovani prikazi: sačuvajte prikaz na ekranu (ili prozor) pod nazivom i vratite se na njega (NV) |
| `NCOPY` | | Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez razbijanja. |
| `NEARBY` | | Kaže šta leži blizu kursora, najbliže prvo, sa rastojanjem i stranom. |
| `NEW` | | Počinje novi crtež |
| `OBJECTSCALE` | `OBJSCALE` | Anotativne razmere anotativnog teksta i kota: dodaje razmeru, briše jednu, dodaje tekuću razmeru, ili ih navodi (svaki prozor pogleda ih prikazuje u veličini za svoju razmeru) |
| `OBJOUT` | | Izvozi 3D model kao OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Kancelarijski standard: visine teksta na papiru, slojevi, polja naslovnog bloka i šabloni u jednom zapisu. Prikazuje onaj koji važi i odakle dolazi; Uvezi .json zapis u ovaj crtež, dodaje kancelarijske slojeve koji crtežu nedostaju, navodi polja naslovnog bloka. |
| `OFFSET` | `O` | Paralelne kopije na rastojanju |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: kako OFFSET zatvara razmake na spoljnim uglovima polilinije. 0 produžava segmente, 1 dodaje luk, 2 dodaje pravi rez. Zadržava se za ovu sesiju. |
| `OLELIST` | `OLES` | Navodi OLE objekte koje crtež nosi i stavlja kopiju slike jednog gde izaberete |
| `OPEN` | | Otvara DWG ili DXF sa ovog računara |
| `OPENIN3D` | | Otvara ovaj crtež u aplikaciji za 3D modelovanje, u novoj kartici (ništa se ne šalje) |
| `OPTIONKEYS` | `OPTKEYS` | Daje opcijama komandi sopstvena slova (ARRAY.PO, P), u jednoj tekstualnoj datoteci |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otvara meni hvatanja objekata: birate koja hvatanja su uključena. Takođe desni klik na Hvatanje u statusnoj traci. |
| `OVERKILL` | | Briše duple objekte i spaja preklapajuće ili kraj-do-kraja linije i lukove, unutar tolerancije. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametri: korisnički parametri i dimenziona ograničenja u jednoj tabeli |
| `PARTSLIST` | `PLIST` | Tabela spiska delova: svaki standardni deo i čelični profil postavljen iz Biblioteke |
| `PASTEAREA` | `PAREA` | Lepi područje kopirano u MarkupCraft (Copy area) u njegovoj pravoj veličini, kao slika. |
| `PASTEBLOCK` | | PASTEBLOCK: lepi ono što ste kopirali kao jedan blok. Blok dobija sopstveni naziv; RENAME mu daje vaš. |
| `PASTECLIP` | | Lepi klipbord: prati kursor, kliknite gde ide (Ctrl+V) |
| `PASTEORIG` | | Lepi klipbord na koordinatama sa kojih je kopiran (Ctrl+Shift+V) |
| `PDF` | | Daje CadCraft-u PDF datoteke koje podloge crteža koriste |
| `PDFADJUST` | | Zamagljuje, menja kontrast, pretvara u monohromatsko ili isključuje PDF podlogu |
| `PDFATTACH` | `PDFATT` | Priključuje PDF stranu kao podlogu (PDFATTACH) |
| `PDFCLIP` | | Seče PDF podlogu na pravougaonik ili poligon |
| `PDFIMPORT` | `PDFIM` | Pretvara linije, ispune i tekst PDF strane u objekte crteža (PDFIMPORT) |
| `PDFLAYERS` | | Uključuje ili isključuje slojeve PDF podloge |
| `PEDIT` | `PE` | Menja polilinju: zatvara, otvara, spaja, širina, uklapanje krive, splajn kriva, ispravljanje, generisanje tipa linije, obrtanje; linije, lukovi i splajnovi mogu se pretvoriti u polilinje |
| `PENPRESSURE` | | Da li pritisak poteza olovke postavlja debljinu linije onoga što SKETCHFIX i SKETCHLIVE prave (uključeno kao početna postavka). Čuva se u ovom pregledaču. |
| `PHOTOSKETCH` | `PSK` | Pretvara fotografiju ručne skice na papiru u linije i lukove u razmeri, ispravljajući perspektivu i dajući svakoj boji olovke sopstveni sloj. |
| `PICKSTYLE` | | PICKSTYLE: da li izbor jednog objekta grupe bira celu grupu (1, početna postavka) ili samo taj objekat (0). Zadržava se za ovu sesiju. |
| `PLAN` | | Okreće prikaz tako da je X osa UCS-a (Tekući ucs, sačuvan Ucs, ili Svet) vodoravna na ekranu. Ništa u crtežu se ne pomera. |
| `PLINE` | `PL` | Polilinija segmenata linija i lukova |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Štampa u PDF: list, ili model u razmeri |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele stilova štampanja: podešava kako svaka boja štampa (boja, crna, siva, mastilo, debljina linije); čuva se uz crtež (STYLESMANAGER) |
| `POINT` | `PO` | Objekti tačke |
| `POINTCLOUD` | `PC` | priloženi oblak tačaka: presek, visina, debljina, boja, veličina, vidljivo, zum, otkači |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | priloži oblak tačaka (LAS, LAZ, XYZ, PTS) ispod crteža |
| `POLARANG` | | Korak polarnog praćenja u stepenima (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravilan poligon |
| `PRESSPULL` | | Gura ili vuče stranu tela (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otvara panel Svojstva (takođe Ctrl+1, ili dvostruki klik na objekat) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Sklapa panel Svojstva do ivice prozora |
| `PSPACE` | `PS` | Napušta prozor pogleda u kome radite i vraća se na list (ili dvostruki klik van njega). |
| `PUBLISH` | `-PUBLISH` | Štampa nekoliko ili sve listove u jedan PDF (stranica i obeleživač po listu) |
| `PURGE` | `PU` | Uklanja definicije blokova koje ništa ne koristi |
| `QDIM` | | Brza kota: kotira više objekata odjednom (neprekidno, osnovno, naizmenično, koordinatno, poluprečnik ili prečnik) |
| `QPMODE` | `QP` | Brza svojstva uz kursor, uključena ili isključena |
| `QSELECT` | `QS` | Brzi izbor: svaki objekat vrste čiji se sloj, boja, veličina ili naziv poklapa (QS) |
| `RASTERSNAP` | | Uključuje ili isključuje hvatanje za linije skeniranih listova. |
| `RAY` | | Zraka: pomoćna linija iz tačke, bez kraja u jednom smeru. |
| `RECOVER` | | Otvara oštećen DXF ili DWG: preskače ono što ne može da se pročita umesto da odbije datoteku, kaže šta je preskočeno, zatim proverava i popravlja crtež kao AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zatvorena polilinija iz dva ugla |
| `REDLINE` | `RDL` | Crvena izmena u reviziju: čita paket crvenih izmena MarkupCraft, prihvata ili odbacuje svaku promenu, oblakom obeležava prihvaćene sa dnevnikom revizije, i čuva datoteku odgovora (RDL) |
| `REDO` | | Ponovo radi ono što je opozvano |
| `REFCLOSE` | | Završava uređivanje bloka na mestu: sačuvaj ga, ili odbaci izmene |
| `REFEDIT` | | Uređuje blok na mestu, gde se nalazi njegova referenca, sa ostatkom crteža zatamnjenim; REFCLOSE čuva |
| `REGEN` | `RE` | Ponovo gradi ono što je nacrtano na ovoj kartici iz crteža |
| `REGENALL` | `REA` | Ponovo gradi ono što je nacrtano na svakoj kartici, oknu i otvorenom crtežu |
| `REGION` | `REG` | REGION (REG): pravi ravne oblasti (regije) od zatvorenih objekata, ili od linija, lukova i polilinija koje se zatvaraju petljom kraj-do-kraja. UNION, SUBTRACT i INTERSECT zatim kombinuju regije, a MASSPROP daje njihova svojstva preseka. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registruje nekoliko skeniranja: postavlja ih u jedan okvir po izabranim parovima tačaka ili metama, doteruje sa ICP, izvozi jedan LAS ili E57 |
| `REINIT` | | Ponovo učitava datoteku skraćenica |
| `RENAME` | `-RENAME`, `REN` | Preimenuje sloj ili blok (svaki objekat ili referenca prati) |
| `REVCLOUD` | `RC` | Oblak revizije: zaokružuje pravougaonik, poligon, slobodnu putanju ili objekat (RC) |
| `REVOLVE` | `REV` | Okreće zatvorene 2D objekte oko ose u tela (3D) |
| `ROTATE` | `RO` | Okreće objekte oko osnovne tačke |
| `SAMPLES` | `SAMPLE` | Otvara jedan od uzoračkih crteža CadCraft-a (arhitektonski skup, izvedeno stanje) da učite iz njih |
| `SAVE` | `QSAVE` | Preuzima crtež u njegovom formatu (DWG ili DXF) |
| `SAVEAS` | | Preuzima crtež kao DWG ili DXF: birate koji |
| `SAYSEL` | | Kaže šta je izabrano, jedna rečenica za svaki objekat. |
| `SCALE` | `SC` | Razmerava objekte oko osnovne tačke |
| `SCALELISTEDIT` | `SCALELIST` | Dodaje, menja i briše sopstvene razmere crteža; pojavljuju se u spisku razmera prozora pogleda i štampe i čuvaju se u datoteci (SCALELIST) |
| `SCANALIGN` | `SCL` | Poravnava skenirani list na dve tačke: pomera, okreće i, ako izaberete, razmerava ga. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Umeće skenirani crtež: PNG, JPEG ili TIFF (jedna strana ili sve strane višestrane datoteke) ili PDF strana koja je slika. |
| `SCANCLEAN` | `SCC` | Pravi skenirani list crno-belim i uklanja mrlje. |
| `SCANCROP` | `SCR` | Seče skenirani list na prozor. |
| `SCANDESKEW` | `SCD` | Nalazi ugao pod kojim leže duge linije skeniranog lista i okreće list da bude pravilan kada prihvatite ugao. |
| `SCANERASE` | `SCE` | Briše oblast skeniranog lista: pravougaonik, poligon ili omču. |
| `SCANINFO` | `SCI` | Prikazuje originalnu datoteku skeniranog lista i korake od tada. |
| `SCANSCALE` | `SCS` | Razmerava skenirani list: izaberite dve tačke na njemu i ukucajte pravo rastojanje između njih. |
| `SCANTRACE` | `SCT` | Pretvara skenirani list u linije i lukove na novom sloju, do tolerancije koju postavite. Tekst i šrafura ostaju kao raster. |
| `SELECT` | | Bira objekte odmah (za P, Prethodni, u sledećoj komandi) |
| `SELECTALL` | `AI_SELALL` | Bira svaki objekat koji možete menjati na ovoj kartici (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Bira svaki objekat kao one koje izaberete: isti tip, sloj i boja (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Prikazuje panel Skup listova: listovi iz mnogih crteža, numerisani, objavljeni kao jedan PDF. |
| `SHORTCUTS` | `KEYS` | Daje bilo kojoj komandi sopstveni taster (Ctrl ili Alt uz slovo, ili slobodan funkcijski taster), čuvan u ovom pregledaču ili desktop aplikaciji. |
| `SHXFONTS` | `SHX` | Daje CadCraft-u SHX fontove iz fascikle ili datoteka, pa stilovi teksta koji ih navode crtaju se njima (spisak, uklanjanje, obrtanje) |
| `SKETCHFIX` | `SKF` | Crta slobodnom rukom poteze; svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, poravnata i spojena sa ostalima. |
| `SKETCHLIVE` | `SKL` | Skicira olovkom: svaki potez postaje precizna linija, krug, luk ili pravougaonik čim podignete olovku, pritegnut uz crtež, sa veličinom koju možete prepisati. |
| `SPLINE` | `SPL` | Crta splajn kroz tačke (ili sa kontrolnim poligonom), ili pretvara polilinju u njega |
| `SPLINEDIT` | `SPE` | Menja splajn: tačke uklapanja, kontrolne tačke i težine, otvara ili zatvara, obrće ili pretvara u polilinju |
| `SPLIT` | | Deli područje crteža na okna (kao VPORTS na modelu; i sa lista) |
| `STEELMEMBER` | `SMEMBER` | Čelični element u 3D iz standardnog preseka: dve tačke (greda) ili osnovna tačka i visina (stub) |
| `STLOUT` | | Izvozi 3D model kao STL (milimetri) |
| `STRETCH` | `S` | Istezanje: prevucite prozor preko krajeva da pomerite; šta je unutra se pomera, ostalo ostaje (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stilovi teksta: font, visina, širina i nagib koje novi tekst dobija (dijalog; -STYLE u komandnoj liniji) |
| `SUBTRACT` | `SU` | Oduzima tela od drugih (3D), ili 2D regije od regija |
| `SWBOUT` | `SWMACRO` | Preuzima makro za SolidWorks (.swb) koji ponovo gradi model kao jednu ograničenu skicu |
| `SWEEP` | | Provlači zatvorene 2D objekte duž putanje (linija, polilinija, luk, krug) u tela (3D) |
| `TABLE` | `TB` | Pravi tabelu: redove i kolone, ili iz ćelija tabele na klipbordu ili CSV datoteci |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Menja tabelu: kucanje u ćeliju, umetanje i brisanje redova i kolona, veličine, spojene ćelije, poravnanje |
| `TABLEEXPORT` | | Čuva ono što tabela prikazuje kao CSV datoteku |
| `TABLEPASTE` | `PASTETABLE` | Pravi tabelu iz ćelija tabele na klipbordu |
| `TABLESTYLE` | `TS` | Stilovi tabela: visine teksta, poravnanje, margina i ivice za naslov, zaglavlje i redove podataka |
| `TAGS` | | Oznake na referencama blokova: definiše oznaku (vrsta, dozvoljene vrednosti, blokovi na koje se odnosi), postavlja je na izabrane reference i navodi ih kao raspored koji možete sačuvati kao CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst u jednom redu; Enter počinje sledeći red |
| `TEXTEDIT` | `ED`, `DDEDIT` | Menja tekst na mestu: izaberite tekst (ili dvostruki klik na njega) (ED) |
| `TEXTMASK` | `TMASK` | Stavlja pozadinsku masku iza teksta (pozadina crteža ili boja), ili je uklanja. |
| `TEXTTOFRONT` | | Dovodi sav tekst, kote i vodilice ispred svega ostalog. |
| `TOOLBAR` | | Bira šta dugmad na alatnoj traci prikazuju: ikone i tekst, samo ikone ili samo tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Stavlja alatnu traku na vrh, dno, levo ili desno prozora |
| `TOOLBARROWS` | | Bira koliko redova alatna traka koristi: prelamaj da stane, 2 ili 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | Čini trake iznad crteža standardnim ili kompaktnim |
| `TOUCHCROSSHAIR` | `TCX` | Ukršteni kursor sa pomakom za crtanje prstom: jedan prst pomera ukršteni kursor koji stoji iznad i sa strane, pa prst ne prekriva tačku izbora. Podizanje prsta ništa ne bira; dugme Klik ili dodir drugim prstom bira na ukrštenom kursoru, a držanje Klika dok pomerate prevlači. Dugi pritisak ili dugme Enter je Enter. Dva prsta pomeraju i zumiraju. Opcije: ON, OFF, Auto (uključeno samo tamo gde je prst jedini pokazivač), Distance, Side. |
| `TOUR` | `TUTORIAL` | Ponovo pokreće šestorazredni obilazak prvog crteža |
| `TRIM` | `TR` | Seče objekte nazad do mesta gde ih drugi seku: kliknite deo, prevucite kroz više, ili Shift+klik za produženje |
| `TRIMEXTENDMODE` | | Kako TRIM i EXTEND počinju: 1 Brzo (svaki objekat je rezna ivica ili granica), 0 Standardno (prvo birate ivice) |
| `TTR` | | Krug tangentan na dva objekta, sa poluprečnikom koji date (isto kao CIRCLE T). |
| `TURNLEFT` | | Okreće prikaz 90° ulevo (suprotno kazaljci na satu): UCS Z -90, a prikaz prati. Ništa u crtežu se ne pomera. |
| `TURNRIGHT` | | Okreće prikaz 90° udesno (u smeru kazaljki): UCS Z 90, a prikaz prati. Ništa u crtežu se ne pomera. |
| `TURNWORLD` | | Nazad na svet: UCS Svet, a prikaz je ponovo vodoravan. |
| `TXT2MTXT` | `T2M` | Spaja tekstove u jednom redu u jedan pasusni tekst, odozgo nadole. |
| `UCS` | | Vaš sopstveni koordinatni sistem: početak i X osa (početak, ugao Z, 3tačke, OBjekat, Prethodni, Svet, NAzvan). Tačke koje ukucate, ortogonalno, polarno praćenje, mreža i novi tekst ga prate; prikaz se okreće tako da je njegova X osa vodoravna. Ništa u crtežu se ne pomera. |
| `UNDO` | `U` | Opoziva poslednju komandu |
| `UNGROUP` | | UNGROUP: rastavlja grupe. Izaberite objekte grupa, ili dajte Naziv. Objekti ostaju u crtežu. |
| `UNION` | `UNI` | Spaja tela u jedno (3D), ili 2D regije u jednu regiju |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponovo prikazuje svaki objekat sakriven sa ISOLATEOBJECTS ili HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kako se dužine prikazuju i unose: decimalno, stope i inči, razlomci (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponovo računa polja i bira kada se sama ažuriraju |
| `USDOUT` | | Izvozi 3D model kao USD (.usda tekst, .usdc binarno ili .usdz paket) |
| `VIEW` | `-VIEW`, `V` | Standardni 3D prikazi, perspektivni ili paralelni (3D) |
| `VIEWBASE` | `FLATSHOT` | Postavlja ravan 2D prikaz 3D tela (sprijeda, odozgo, sa strane ili izometrijski, skrivene linije isprekidane) na list ili u model |
| `VIEWLABEL` | `VL` | Naslov prikaza na listu koji prikazuje naziv pogleda svog prozora pogleda i menja se s njim. |
| `VOICE` | | Uključuje ili isključuje izgovorene komande. Prepoznaju se na ovom računaru. |
| `VPCLIP` | | Seče prozor pogleda lista na zatvoren objekat ili nacrtani poligon; Delete ga ponovo pravi pravougaonikom |
| `VPLAYER` | | Zamrzava ili odmrzava slojeve samo u nekim prozorima pogleda (Freeze, Thaw, Reset), i bira koji slojevi novi prozori pogleda počinju zamrznuti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Deli područje crteža na okna, svako sa sopstvenim prikazom (na listu: prozor pogleda, kao MVIEW) |
| `VPVIEW` | | Postavlja šta prozor pogleda prikazuje: birate prozor na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuelni stil 3D prikaza: senčeno, ivice, skrivena linija, žičani model, rendgen |
| `WALL` | `WA` | Crta 2D zidove kao polilinju. Spajaju se i nose vrata i prozore. |
| `WALLARC` | `WARC` | Crta luk zidova. Zidovi u planu su pravi, pa se luk crta kao kratki pravi zidovi (po 15 stepeni) koji se spajaju. |
| `WALLDELSEG` | | Briše deo zida između dve tačke. Ono što ostane ostaje kao jedan ili dva zida. |
| `WALLDIM` | | Ukucajte novu vrednost za kotu: zid na njegovom dalekom kraju se pomera pravo u odnosu na sebe, zid na prvom kraju ostaje, a zidovi spojeni uz njega prate. |
| `WALLDISJOIN` | | Izaberite zid blizu jednog kraja da zabranite spajanje na tom kraju: kraj se crta pravo i ništa ga ne prati. Ponovo ga izaberite da ih dozvolite. |
| `WALLGRID` | | Zaključava zid za liniju mreže: duž nje, ili jedan kraj na njoj. Pomerite liniju sa GRIDMOVE i zid prati. |
| `WALLHOLD` | | Poravnava i zaključava: zid zadržava mesto u odnosu na drugi zid (na njegovoj liniji, ili na rastojanju koje ima). Ako se jedan pomeri, drugi prati. |
| `WALLHOLDDIM` | | Zaključava rastojanje između dva paralelna zida. Ako se jedan pomeri, drugi prati da ga zadrži. |
| `WALLHOLDS` | | Navodi zaključavanja na zidovima. |
| `WALLJOINS` | | Daje svakom zidu starijeg crteža njegov identifikator i čuva spojeve između njih. Ovo se dešava i pri prvoj promeni koju napravite. |
| `WALLJOINSTYLE` | | Kliknite ugao gde se dva zida sreću kraj uz kraj da promenite kako se crta: pokošen, ravan, pravo odsečen. T menja koji zid prolazi. |
| `WALLOFFSET` | `WO` | Pomera zid pravo u odnosu na sebe za rastojanje (zidovi spojeni uz njega prate), ili pravi kopiju na tom rastojanju. |
| `WALLPICK` | | Pravi zidove na liniji ili polilinji u crtežu, sa linijama spojenim uz nju ako kažete Da. |
| `WALLPOLY` | `WP` | Crta zidove oko pravilnog poligona od 3 do 64 strane, kao POLYGON. |
| `WALLRECT` | `WR` | Crta četiri spojena zida iz dva suprotna ugla, kao RECTANG. |
| `WALLREJOIN` | | Pravi dva dela zida opet jednim zidom. Prvi zadržava svoje mesto u crtežu. |
| `WALLROT` | | Crta četiri spojena zida kao pravougaonik okrenut pod bilo kojim uglom: prva strana, zatim koliko daleko ide druga. |
| `WALLSPLIT` | `WS` | Deli zid na dva na tački ili tamo gde drugi zid prelazi. Delovi ostaju spojeni osim ako ne tražite razmak ili slobodne krajeve. Vrata i prozori idu sa svojim delom. |
| `WALLSPLITGAP` | | Deli zid ostavljajući razmak: ukucajte razmak, izaberite zid, zatim tačku. Delovi zadržavaju slobodne krajeve i mogu se opet spojiti. |
| `WALLSTRETCH` | | Istezanje prozorom: krajevi zidova unutar njega se pomeraju, zidovi potpuno unutra se pomeraju celi, a zidovi koji se naslanjaju na njihove strane kližu s njima. |
| `WALLTAN` | | Nastavlja zid lukom koji polazi od njega duž zida (crta se kao kratki pravi zidovi). |
| `WALLTRACE` | | Pravi zidove oko najmanje zatvorene oblasti linija i zidova oko tačke na koju kliknete. |
| `WALLUNHOLD` | | Skida zaključavanja sa zida (i zaključavanja drugih zidova uz njega). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapisuje blok, neke objekte ili ceo crtež u novu DWG ili DXF datoteku (W) |
| `WEDGE` | `WE` | Klin: dva ugla i visina; nagnut je od prvog ugla (3D) |
| `WHEREAMI` | `WHERE` | Kaže gde je kursor. |
| `WHOHAS` | | Kaže ko ima crtež otvoren. CadCraft Studio čuva malu datoteku zaključavanja uz svaki otvoreni crtež (Plan.dwg.cclock: ko, od kada, koja verzija) i uklanja je pri zatvaranju. Opcije: Current (otvoreni crtež), File (izaberite jedan), FOlder (svaki crtež u fascikli koji je negde otvoren; ovo takođe dozvoljava Studiju da čuva datoteke zaključavanja u toj fascikli), Path (ukucajte), Name (ime koje drugi vide). Zaključavanje osvežavano pet minuta ili više smatra se zastarelim. Nije dostupno u pregledaču. |
| `WINDOW` | `WN` | Stavlja prozor u zid. |
| `XATTACH` | `XA` | Povezuje još jedan DWG ili DXF u ovaj crtež, prikazan samo za čitanje (XREF ih navodi i ponovo učitava) |
| `XCLIP` | `XC` | Seče reference blokova i povezane crteže na pravougaonik ili poligon, ili uklanja isečak. |
| `XLINE` | `XL` | Pomoćna linija, bez kraja u oba smera: kroz dve tačke, vodoravna, uspravna, pod uglom, simetrala ugla, ili pomaknuta od linije. |
| `XREF` | `XR`, `-XREF` | Povezani crteži (spoljne reference): navodi, priključuje, ponovo učitava, veže, odvaja |
| `ZOOM` | `Z` | Granice, ili prozor |
