---
title: Mapa naredbi - šta ukucati
summary: Svaka naredba koju CadCraft ima, sa kratkim nazivima, od A do Z, napravljena iz samog programa, i navike iz drugih programa za crtanje koje se razlikuju.
keywords: mapa naredbi, naredbe, skraćenice, kratki nazivi, dolazak iz, spisak naredbi, šta ukucati, obriši, skrati, ekvivalent, razlike
from: 9426856f
---

CadCraft preuzima nazive naredbi i kratke nazive koje ljudi znaju iz drugih programa za crtanje: ukucajte `L` za liniju, `TR` za skraćivanje, `E` za brisanje. Zato za većinu njih nema tabele prijevoda koju treba učiti: naziv koji poznajete je i ovdje. Spisak ispod je svaka naredba koju CadCraft ima, napravljena iz samog programa. {{key:Enter}} ponavlja posljednju, a `HELP` u komandnoj liniji ispisuje isti spisak.

Nekoliko njih nije isto, ili nije napravljeno:

- **Spasi** (Save) preuzima kopiju u pregledaču ({{cmd:SAVE}}, {{cmd:SAVEAS}}); u CadCraft Studio upisuje datoteku. Pogledajte [Dolazak iz drugog softvera za crtanje](topic:coming-from).
- **PLOT** pravi PDF (također PNG i SVG), sa tabelom stilova štampe; nema upravljača postavkama stranice.
- **DIMSTYLE** i **PEDIT** su napravljene; **PEDIT** nema opciju Uredi vrh (to rade hvataljke).
- **TABLE** nije napravljena; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} jesu.
- Vlastite naredbe rutine (AutoLISP `C:NAME`) pojavljuju se nakon što je učitate pomoću {{cmd:APPLOAD}}; ovdje nisu navedene.

## Sve naredbe (402)

| Naredba | Kratki nazivi | Šta radi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitira 3D prikaz lijevim tasterom miša |
| `ACCESS` | `AX` | Uključuje ili isključuje crtanje bez vida: rezultati se čitaju preko čitača ekrana, kursor s tastature na crtežu, zvukovi hvatanja i izgovorene naredbe. |
| `ALIASEDIT` |  | Uređuje skraćenice naredbi u jednoj tekstualnoj datoteci (poznati format L, *LINE) |
| `ALIGN` | `AL` | Pomjera i okreće objekte tako da izvorne tačke padnu na odredišne tačke (jedan, dva ili tri para), i po potrebi ih skalira |
| `ALIGNPANEL` | `ALP` | Otvara panel Poravnaj i raspodijeli |
| `ALIGNTO` |  | Poravnava lijeve, srednje, desne, gornje, središnje ili donje ivice odabranih objekata, na odabiru, prvom ili posljednjem izabranom objektu, ili na tački |
| `ANNOALLVISIBLE` | `ANNOALL` | Prikazuje anotativne objekte na svakoj razmjeri, ili samo tamo gdje je razmjera prikaza (ili crteža) na njihovom spisku |
| `ANNOSCALE` | `CANNOSCALE` | Postavlja razmjeru anotacija crteža: anotativni tekst i kote se mijenjaju da se štampaju u istoj veličini |
| `APPLOAD` | `AP` | Učitava aplikacije: LISP rutine (.lsp) i njihove datoteke dijaloga (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Luk: 3 tačke, Početak/Centar/Kraj, Početak/Centar/Ugao, Početak/Centar/Dužina, Početak/Kraj/Ugao, Početak/Kraj/Pravac, Početak/Kraj/Poluprečnik, Centar/Početak/Kraj, Centar/Početak/Ugao, Centar/Početak/Dužina, Nastavi |
| `AREA` | `AA` | Površina i obim po tačkama ili objektu; Dodaj i Oduzmi čuvaju tekući zbir (AA) |
| `ARRAY` | `AR` | Kopije u redovima i kolonama, ili oko centra (AR) |
| `ARRAYASSOCIATIVITY` |  | Postavlja da li naredbe ARRAY prave nizove koji ostaju uređivi (1) ili obične kopije (0) |
| `ARRAYCLOSE` |  | Završava uređivanje izvornih objekata niza |
| `ARRAYEDIT` |  | Mijenja niz napravljen s opcijom Pridruženo: brojevi, razmak, izvorni objekti, jedna stavka |
| `ARRAYPATH` |  | Kopije objekata duž linije, luka, polilinije ili druge krive |
| `ARRAYPOLAR` |  | Kopije oko centralne tačke |
| `ARRAYRECT` |  | Kopije u redovima i kolonama |
| `ASBUILT` | `ASB` | ASBUILT čita tačke izvedenog stanja koje je ekipa izmjerila (CSV / TXT, kako ih piše EXPORTPOINTS) i poredi ih s tačkama crteža: unutar ili van tolerancije, nije izmjereno, višak. Označava ih na sloju AS-BUILT i preuzima CSV izvještaj. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definiše atribut (oznaku za koju blok traži vrijednost) za stavljanje u blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Uređuje vrijednosti atributa reference bloka u komandnoj liniji, jednu po jednu (Enter zadržava vrijednost) |
| `ATTSYNC` |  | Usklađuje reference bloka s njegovim definicijama atributa: nove se dodaju sa zadanim vrijednostima, uklonjene se odbacuju, pozicije i tekst se vraćaju na početak; vrijednosti se čuvaju |
| `AUDIT` |  | Provjerava otvoreni crtež radi oštećenja: brojevi koji nisu konačni, objekti bez veličine, nedostajući slojevi, blokovi, stilovi i vrste linija, blokovi koji sadrže sami sebe, zajednički ID-ovi, pokvarene kote i šrafure. Navodi nađeno po vrsti i pita prije popravke; popravka je jedan korak poništavanja. |
| `AUNITS` | `ANGUNITS` | Kako se uglovi prikazuju i ukucavaju: decimalni stepeni, stepeni-minute-sekunde ili azimuti kao N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatsko dovršavanje crteža uključeno ili isključeno, ili spisak onoga što uzorci crteža sada predlažu. |
| `AUTOCONSTRAIN` |  | Dodaje koincidentna, horizontalna i vertikalna ograničenja tamo gdje je geometrija već blizu |
| `AUTODIM` | `ADIM` | Kotiranje po pravilima: ukupna veličina, lanci duž stranica, otvori, promjeri rupa i razmak mreže, bez ponavljanja onoga što je već kotirano. |
| `AUTOSHEET` | `ASH` | Sam slaže listove: bira papir i standardne razmjere i postavlja svaki pogled sa natpisom i naslovnim blokom. |
| `BATTMAN` |  | Upravljač atributima bloka: redoslijed, oznake, upiti, zadane vrijednosti i načini atributa bloka, zatim ažuriranje njegovih referenci |
| `BCLOSE` |  | Zatvara uređivač blokova: spasi blok ili odbaci promjene |
| `BCONVERT` |  | BCONVERT pronalazi geometriju koja se ponavlja i pretvara je u reference blokova. Odaberite objekte koji se ponavljaju: svaki drugi skup objekata u otvorenom prostoru koji je ista geometrija, pomjerena i okrenuta pod bilo kojim uglom, se nalazi; uz uključene Zrcalno ili Skalirano nalaze se i zrcalne slike i kopije drugih veličina. Dajte novom bloku naziv i osnovnu tačku; odabir i svaka kopija postaju reference na njega, svaka sa svojom rotacijom i razmjerom. Ili izaberite Block i imenujte postojeći blok da nađete rasute kopije njegovih objekata. Kopija mora imati isti sloj, boju, vrstu linije i debljinu osim ako je Svojstva postavljeno na Zanemari. Objekti na zaključanim slojevima ostaju netaknuti. Jedan korak poništavanja. |
| `BEDIT` | `BE` | Uređivač blokova: uređuje objekte i atribute bloka; BCLOSE spašava (BE) |
| `BLEND` |  | BLEND: spline između krajeva dvije otvorene krive, izabran blizu krajeva da se spoje. CONtinuity: Tangent prati oba smjera, Smooth prati i kako se savijaju. |
| `BLOCK` | `B`, `BMAKE` | Pravi blok od objekata (postaju jedna referenca) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: svaka referenca na jedan blok postaje referenca na drugi, na istom mjestu s istom razmjerom i rotacijom. Vrijednosti atributa koje oba bloka imaju se zadržavaju. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE prikazuje panel Blokovi sa kursorom u njegovom filteru. Panel prikazuje sliku svakog bloka (najnedavnije postavljeni prvi), kao spisak ili mrežu; kliknite sliku ili je prevucite na crtež da postavite blok s INSERT. Pod Libraries dodajte vlastitu DWG ili DXF datoteku: njeni blokovi su navedeni sa slikama i kopiraju se u ovaj crtež kad postavite jedan. U CadCraft Studio može se dodati i fascikla crteža, a datoteke i fascikle se pamte. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolone tabele sastavnice, grupisanje, sortiranje, naslov, zbirovi i napomene |
| `BOMEXPORT` |  | Spasi tabelu sastavnice kao .csv datoteku |
| `BOMTABLE` | `BOM` | Živa tabela sastavnice jedne zone ili cijelog crteža |
| `BOMUPDATE` |  | Ažurira sve tabele sastavnice odmah, i zamrznute |
| `BOMZONE` | `BZONE` | Imenovana oblast crteža za sastavnicu: dva ugla, poligon ili obris zatvorenog objekta |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): odaberite tačku unutar zatvorenog područja i dobijte zatvorenu polilinju oko njega. Lukovi ostaju lukovi. Ostrva obrisuju i područja unutra. |
| `BOX` |  | Kutija: dva ugla i visina (3D) |
| `BPARAMETER` | `BPARAM` | Još nije napravljeno: dodavanje parametra (kao Visibility) bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri bloka: imenovani parametri sa formulama i više parametara vidljivosti u jednom bloku. Radi u uređivaču blokova (dodjeljuje odabrane objekte stanju) i na odabranoj referenci (njene vlastite vrijednosti i stanja). |
| `BREAK` | `BR` | Prelama liniju, luk, krug ili poliliniju između dvije tačke (BR) |
| `BREAKATPOINT` |  | Dijeli liniju, luk ili poliliniju u dva na tački |
| `BREAKLINE` |  | Crta liniju sa simbolom prekida; njena veličina i produženje preko krajeva se pamte. |
| `BREPLACE` |  | BREPLACE zamjenjuje jedan blok drugim. Odabrano: izaberite reference blokova i imenujte blok koji se koristi umjesto njih. Sve: imenujte blok i njegovu zamjenu, i svaka referenca u svakom prostoru i unutar drugih blokova se mijenja. Referenca zadržava mjesto, razmjeru, rotaciju i sloj, i vrijednosti atributa koje oba bloka imaju; vrijednosti za koje novi blok nema mjesto se odbacuju i navode. |
| `BSEARCH` |  | BSEARCH nalazi blokove. Naziv: dio naziva bloka, ili uzorak sa * i ?. Atribut: vrijednost (ili TAG=vrijednost) koju drže atributi reference. Geometrija: odaberite objekte ili jednu referencu bloka, i navode se blokovi čiji je oblik najmanje 85% sličan, najbolji prvi; veličina, rotacija i zrcaljenje se ne računaju. Reference nađene u otvorenom prostoru se odabiru, spremne za sljedeću naredbu. |
| `BURST` |  | Razlaže reference blokova i zadržava šta njihovi atributi kažu: svaka vrijednost postaje tekst na sloju atributa. |
| `BVHIDE` | `BVH` | U uređivaču blokova: sakriva objekte u trenutnom stanju vidljivosti. |
| `BVSHOW` | `BVSH` | U uređivaču blokova: prikazuje objekte koje trenutno stanje vidljivosti skriva (prikazuju se zatamnjeni da se mogu odabrati). |
| `BVSTATE` | `BVS` | U uređivaču blokova, na bloku sa stanjima vidljivosti: pređite na stanje, ili dodajte, preimenujte ili obrišite jedno. |
| `CAL` |  | Računa dužinu ili broj: + − * / i zagrade, kako ih ukucate bilo gdje |
| `CENTERLINE` | `CL` | Središnja linija između dvije linije: na pola puta između njih, ili duž simetrale kad se sastaju (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Oznaka centra: krst u centru kruga ili luka, sa središnjim linijama do tačno iza njega (CM) |
| `CHAMFER` | `CHA` | Skosi ugao između dvije linije (D dvije udaljenosti, A dužina i ugao, P svaki ugao polilinije) |
| `CHSPACE` |  | CHSPACE: pomjera objekte između lista i modela kroz prikaz. Skaliraju se i okreću da izgledaju isto s druge strane. Na listu idu u model; dok radite kroz prikaz (MSPACE) dolaze na list. |
| `CIRCLE` | `C` | Centar i poluprečnik, prečnik, 2 ili 3 tačke |
| `CLASS` |  | Stavlja odabrane objekte u klasu, ili bez odabira postavlja aktivnu klasu (? ih navodi) |
| `CLASSES` | `CLS` | Panel Klase: klase razvrstavaju objekte kroz slojeve; prikazuje, skriva i stilizuje ih, i poništava ih po prikazu (CLS) |
| `COMMANDLINE` | `CMDLINE` | Prikači ili učini plutajućom komandnu liniju, učini je jednom linijom, postavi njene linije historije, ili otvori historiju (F2) |
| `COMPARESETTINGS` | `CMPSET` | Upoređuje stilove kota, stilove teksta, slojeve, listove ili jedinice: dva u ovom crtežu, ili ovaj crtež s drugim otvorenim, i prenosi vrijednost. |
| `CONSTRAINTBAR` | `CBAR` | Prikazuje ili sakriva trake ograničenja (Showall / Hideall, ili po objektu) |
| `COPY` | `CO`, `CP` | Kopira objekte, koliko puta kliknete |
| `COPYBASE` |  | Kopira objekte u međuspremnik s osnovnom tačkom koju izaberete |
| `COPYCLIP` |  | Kopira objekte u međuspremnik (Ctrl+C); PASTECLIP ih postavlja |
| `COUNT` | `BCOUNT` | Broji reference blokova: odaberite jednu da odaberete i prebrojite svaku referencu njenog bloka |
| `COUNTTABLE` |  | Postavlja tabelu brojeva blokova |
| `CREDITS` |  | Stavlja zasluge biblioteke u crtež kao tabelu. Pokrenite ponovo da osvježite tabelu iz stavki koje su sada u crtežu. |
| `CURSORSIZE` |  | Veličina nišana: 100 ga pokreće od ivice do ivice crteža (Postavke › Kursor › Preko cijelog ekrana) |
| `CUTCLIP` |  | Izreže objekte u međuspremnik (Ctrl+X): kopira, pa briše |
| `CYLINDER` | `CYL` | Cilindar: centar, poluprečnik i visina (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Navodi blokove, njihove atribute i svojstva objekata kao tabelu u crtežu ili CSV datoteku |
| `DATALINK` | `DL` | Tabela iz CSV datoteke koja pamti datoteku, pa može ponovo da se čita |
| `DATALINKUPDATE` | `DLU` | Ponovo čita datoteku veze podataka i ponovo puni njene tabele |
| `DCALIGNED` | `DCALI` | Dimenziono ograničenje: stvarna udaljenost između tačaka, tačke i linije, ili dvije linije |
| `DCANGULAR` | `DCANG` | Dimenziono ograničenje: ugao između dvije linije, ili luka |
| `DCCONVERT` |  | Pretvara kote nacrtane na geometriji koja se može ograničiti u dimenziona ograničenja |
| `DCDIAMETER` | `DCDIA` | Dimenziono ograničenje: prečnik kruga ili luka |
| `DCDISPLAY` |  | Prikazuje ili sakriva dimenziona ograničenja na crtežu |
| `DCHORIZONTAL` | `DCHOR` | Dimenziono ograničenje: horizontalna udaljenost |
| `DCLINEAR` | `DCLIN` | Dimenziono ograničenje: horizontalna ili vertikalna udaljenost, od mjesta gdje je postavite |
| `DCRADIUS` | `DCRAD` | Dimenziono ograničenje: poluprečnik kruga ili luka |
| `DCVERTICAL` | `DCVER` | Dimenziono ograničenje: vertikalna udaljenost |
| `DELBLOCKS` |  | Briše blokove: svaku referencu (i ugnježdene, na svakom listu) i definicije |
| `DELCONSTRAINT` | `DELCON` | Uklanja svako ograničenje (geometrijsko i dimenziono) s objekata koje odaberete |
| `DELOPENING` |  | Vadi vrata ili prozor iz zida. |
| `DESCRIBE` | `DESC` | Kaže šta crtež sadrži: koliko objekata, koje vrste, kako veliko, šta je odabrano. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Briše odabir (Esc) |
| `DETAILS` | `DET` | Vlastiti detalji vaše firme, nađeni za ono što crtate: nađi, dodaj blok, navedi, ukloni, uključi ili isključi ponude. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Crta dijagram iz teksta: Mermaid dijagram toka, PlantUML dijagram komponenti, D2, spisak od-do ili draw.io XML, kao blokovi i spojnice koje možete uređivati |
| `DIMALIGNED` | `DAL`, `DIMALI` | Stvarna udaljenost između dvije tačke |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ugao između dvije linije, luka, ili po tri tačke |
| `DIMARC` | `DAR` | Kota dužine luka: udaljenost duž luka, sa simbolom luka (DAR) |
| `DIMASZ` |  | Postavka kote: veličina strelice |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kote naslagane od jedne bazne linije |
| `DIMBREAK` | `DBREAK` | Prelama linije kote i produžne linije gdje sijeku druge objekte (Auto), između dvije tačke (Manual), ili uklanja prelome |
| `DIMCONSTRAINT` | `DCON` | Dimenziona ograničenja: linearna, poravnata, ugaona, poluprečnik, prečnik, pretvori |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Lanac kota, svaka od kraja posljednje |
| `DIMDEC` |  | Postavka kote: decimalna mjesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Prečnik luka ili kruga |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Oslobađa kote od objekata za koje su vezane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Mijenja tekst kote (Home, New text, Rotate) ili nagiba produžne linije (Oblique) |
| `DIMEXE` |  | Postavka kote: produženje preko linije kote |
| `DIMEXO` |  | Postavka kote: odmak od početka |
| `DIMGAP` |  | Postavka kote: razmak oko teksta |
| `DIMINSPECT` |  | Kota inspekcije: okvir oko vrijednosti sa oznakom i koliko često se dio provjerava |
| `DIMJOGGED` | `DJO`, `JOG` | Kota poluprečnika sa prelomom: poluprečnik nacrtan od bliže tačke kad je centar daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Dodaje simbol preloma na liniju linearne ili poravnate kote, da pokaže da udaljenost nije nacrtana u razmjeri (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontalna ili vertikalna udaljenost (R za bilo koji ugao) |
| `DIMLUNIT` |  | Postavka kote: format dužine (1 naučni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomački) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kota ordinate: X ili Y udaljenost tačke od početka UCS, na vodilici (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Prepisuje varijable kote na odabranim kotama bez mijenjanja njihovog stila; Clear vraća stil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Poluprečnik luka ili kruga |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Vezuje tačke kote za objekte, pa prati i ponovo mjeri kad se oni pomjere (DRE) |
| `DIMSCALE` |  | Postavka kote: ukupna razmjera (veličine × ovo) |
| `DIMSPACE` |  | Jednak razmak između paralelnih kota, mjeren od bazne kote (0 ih poravnava, Auto je dvostruka visina teksta) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Pravi, mijenja, postavlja tekuće, briše, primjenjuje i upoređuje imenovane stilove kota (dijalog; -DIMSTYLE u komandnoj liniji) |
| `DIMTEDIT` | `DIMTED` | Pomjera tekst kote lijevo, desno ili u centar linije kote, ili ga okreće |
| `DIMTEXTUNIT` | `DTU` | Tekst kote u mm, cm, m ili km, ili u sopstvenim jedinicama crteža: odabrane kote, inače nove (DTU) |
| `DIMTXT` |  | Postavka kote: visina teksta |
| `DIST` | `DI` | Udaljenost i ugao između dvije tačke |
| `DISTRIBUTE` |  | Raspoređuje odabrane objekte ravnomjerno, lijevo-desno ili gore-dolje: jednaki koraci između centara, ili jednaki razmaci; spoljašnja dva ostaju |
| `DIVIDE` | `DIV` | DIVIDE (DIV): oznake koje dijele liniju, luk, krug, polilinju, spline ili elipsu na jednake dijelove. Tačke, ili sa Block blok na svakoj oznaci. |
| `DOCUMENTS` | `DOCS` | Otvara panel Dokumenti: provjera crteža prema gore i dolje, revizije, stanja izdanja i odobrenje za fasciklu projekta |
| `DOOR` | `DR` | Stavlja vrata u zid. Strana na koju kliknete je strana u koju se otvaraju. |
| `DRAWORDER` |  | Mijenja redoslijed crtanja: dovodi objekte naprijed, šalje ih nazad, ili ih stavlja iznad ili ispod drugih objekata. |
| `DUPLICATE` | `DUP` | Kopija koja se pomjera s pokazivačem: kliknite da je spustite (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Svojstva crteža: naslov, autor i ostalo, i vaši parovi naziv i vrijednost |
| `DXFOUT` |  | Preuzima crtež kao DXF R12 (Spasi zadržava svoj format) |
| `EATTEDIT` | `DDATTE` | Uređuje atribute reference bloka: vrijednosti, tekst i svojstva, jedan atribut po jedan |
| `ELLIPSE` | `EL` | Krajnje tačke ose i druga polu-osa |
| `ERASE` | `E`, `DELETE` | Uklanja objekte |
| `EXPLODE` | `X` | Razlaže polilinije, blokove i kote na dijelove |
| `EXPORT` | `EXP` | Spasi kopiju crteža u vrsti datoteke koju piše dodatak |
| `EXPORT3D` | `3DEXPORT` | Izvozi 3D model: GLB, OBJ ili STL |
| `EXPORTPOINTS` | `EXPPTS` | Upisuje tačke, i tačke umetanja blokova s jednim atributom kao opisom, u CSV ili TXT datoteku (PNEZD, PENZD ili XYZ) za programe za BIM i geodeziju |
| `EXTEND` | `EX` | Produžava objekte do drugih: kliknite blizu kraja, prevucite kroz nekoliko, ili Shift+klik za obrezivanje |
| `EXTRIM` |  | EXTRIM: izaberite jednu rubnu ivicu, zatim stranu. Sve što prelazi ivicu obreže se na toj strani. Dijelovi koji bi nestali pokazuju se dok pomjerate pokazivač. |
| `EXTRUDE` | `EXT` | Izvlači zatvorene 2D objekte u tijela (3D) |
| `FIELD` |  | Stavlja polje u tekst, ćeliju tabele ili atribut: datum, naziv datoteke, broj lista, svojstvo crteža, površinu ili dužinu objekta, ili formulu |
| `FILLET` | `F` | Zaobljuje ili izravnava ugao između dva objekta (R poluprečnik, P svaki ugao polilinije, M nekoliko) |
| `FIND` |  | Traži i zamjenjuje riječi u tekstu, vrijednostima atributa i tekstu kote |
| `FLATTEN` |  | Postavlja visinu (Z) i debljinu odabranih objekata na 0, i u blokovima koje koriste. |
| `FLOOR` |  | Bira pod za crtanje, dodaje jedan, ili pomjera ili kopira odabir na njega. |
| `FLOORLAYERS` |  | Pretvara podove u slojeve nazvane Floor-Layer, za datoteku koja ide nekome bez podova. |
| `FLOORS` | `FLR` | Otvara panel Podovi: slaže podove u jednom modelskom prostoru. |
| `GCCOINCIDENT` |  | Ograničenje: dvije tačke se sastaju, ili tačka ostaje na objektu |
| `GCCOLLINEAR` |  | Ograničenje: dvije linije ostaju na jednoj liniji |
| `GCCONCENTRIC` |  | Ograničenje: dva kruga ili luka dijele centar |
| `GCEQUAL` |  | Ograničenje: dvije linije ostaju iste dužine, ili dva kruga/luka isti poluprečnik |
| `GCFIX` |  | Ograničenje: tačka ili cijeli objekat ostaje gdje jeste |
| `GCHORIZONTAL` |  | Ograničenje: linija (ili dvije tačke) ostaje horizontalna |
| `GCPARALLEL` |  | Ograničenje: dvije linije ostaju paralelne |
| `GCPERPENDICULAR` |  | Ograničenje: dvije linije ostaju pod pravim uglom |
| `GCSYMMETRIC` |  | Ograničenje: dvije tačke, linije ili krugovi se ogledaju jedni o drugima preko linije |
| `GCTANGENT` |  | Ograničenje: linija i krug ili luk (ili dva od njih) ostaju tangentni |
| `GCVERTICAL` |  | Ograničenje: linija (ili dvije tačke) ostaje vertikalna |
| `GDSIN` | `GDS` | Pregled IC rasporeda (GDSII stream datoteka): svaki sloj i tip podataka kao sloj crteža, ravno, u korisničkim jedinicama; samo za pregled i mjerenje (laboratorijska proba) |
| `GEOMCONSTRAINT` | `GCON` | Geometrijska ograničenja: horizontalna, vertikalna, paralelna, tangentna, koincidentna… |
| `GLBOUT` |  | Izvozi 3D model kao GLB (glTF) |
| `GRADIENT` | `GD` | Ispunjava područje gradijentom jedne ili dvije boje |
| `GRID` |  | Postavlja mrežu: razmak između linija, svaka N-ta linija kao glavna, ON ili OFF, ili Auto da ponovo prati zumiranje |
| `GRIDMOVE` | `GM` | Pomjera liniju mreže i ono što visi na njoj: zidovi se rastežu, stubovi, baloni i oznake se pomjeraju, kote prate. |
| `GROUP` | `G` | GROUP (G): dajte odabranim objektima zajednički naziv. Klik na jedan od njih tada bira sve. Enter na nazivu pravi grupu bez naziva. |
| `GROUPEDIT` |  | GROUPEDIT: mijenja grupu. Izaberite jedan od njenih objekata ili dajte njen naziv, zatim Add ili Remove objekte, REName je preimenuje, mijenja njen opis, ili kaže da li klik bira cijelu grupu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Ispunjava područje punom ispunom ili uzorkom: kliknite unutra, ili odaberite zatvorene objekte (H) |
| `HATCHEDIT` | `HE` | Mijenja šrafuru: uzorak, razmjeru, ugao, početak i njenu vezu s granicom. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponovo pravi granične polilinije iz šrafure, povezane s njom ili ne |
| `HATCHTOBACK` |  | Šalje svaku šrafuru iza svega ostalog. |
| `HELP` | `?` | Ovaj spisak |
| `HIDEOBJECTS` |  | Sakriva odabrane objekte do UNISOLATEOBJECTS. Ne čuva se u crtežu. |
| `HISTORY` | `HIST` | HISTORY (HIST): verzije ovog crteža — kopije koje se čuvaju na ovom računaru kad ih Studio spasi, i verzije u cloudu — za otvaranje, vraćanje i poređenje s promjenama obojenim. |
| `ID` |  | Koordinate tačke |
| `IMAGE` | `IM` | Daje CadCraft-u datoteke slika koje crtež koristi (DWG čuva samo gdje su bile). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Postavlja sliku (PNG ili JPEG) iz datoteke. |
| `IMAGECLIP` | `ICL` | Obreže sliku na pravougaonik ili poligon, ili uklanja obrezivanje. |
| `IMPORT` | `IMP` | Uvozi datoteku vrste koju čita dodatak, u ovaj crtež |
| `INSERT` | `I`, `DDINSERT` | Postavlja blok (S razmjera, R rotacija); F iz DWG/DXF datoteke, L iz biblioteke |
| `INTERSECT` | `IN` | Zadržava samo ono što tijela imaju zajedničko (3D), ili površinu koju 2D regije dijele |
| `ISODRAFT` |  | ISODRAFT: izometrijsko crtanje uključeno ili isključeno, ili direktno na ravan Left, Top ili Right. Dok je uključeno, Ortho i polarno praćenje slijede dvije ose ravni, mreža se crta izometrijski, a ELLIPSE ima Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Prikazuje samo odabrane objekte; sve drugo u ovom prostoru skriveno je do UNISOLATEOBJECTS. Ne čuva se u crtežu. |
| `ISOPLANE` |  | ISOPLANE: izaberite izometrijsku ravan za crtanje: Left, Top ili Right. Enter prelazi na sljedeću, kao F5 dok je izometrijsko crtanje uključeno. |
| `JOIN` | `J` | Spaja linije, lukove i polilinije koji se sastaju kraj na kraj u jednu polilinju; linije na jednoj liniji u jednu liniju (J) |
| `LASER` | `LASERCUT` | Otvara panel Laser: šalje slojeve laserskoj rezačici ili graveru (GRBL G-kod) |
| `LASSOMODE` |  | Pritisak i prevlačenje crtaju lasso (1) ili pravougaonik (0) |
| `LAYDEL` |  | Briše sloj i svaki objekat na njemu (u modelu, na listovima i u blokovima) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otvara upravljač slojevima: svaki sloj u jednoj tabeli |
| `LAYERPANEL` |  | Prikazuje panel slojeva |
| `LAYFRZ` |  | Zamrzava sloj svakog objekta koji izaberete |
| `LAYGROUP` | `LG` | Grupiše slojeve u fascikle u panelu Slojevi. |
| `LAYISO` |  | Izolira slojeve odabranih objekata (svi ostali slojevi isključeni) |
| `LAYLOCKFADE` |  | Postavlja koliko objekti na zaključanim slojevima blijede, i da li klik može da ih odabere. |
| `LAYMCUR` |  | Pravi sloj objekta koji izaberete tekućim |
| `LAYMRG` |  | Spaja slojeve: njihovi objekti idu na ciljni sloj, a spojeni slojevi nestaju |
| `LAYOFF` |  | Isključuje sloj svakog objekta koji izaberete |
| `LAYON` |  | Uključuje sve slojeve |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Novi list sa naslovnim blokom i prikazom |
| `LAYTHW` |  | Odmrzava sve slojeve |
| `LAYUNISO` |  | Ponovo uključuje slojeve koje je LAYISO isključio |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pretvara tekst ukucan starim vijetnamskim fontovima (TCVN3 / ABC fontovi kao .VnTime, i VNI fontovi kao VNI-Times) u Unicode. Takav tekst se već prikazuje kako se čita; ovo ga prepisuje zauvijek, s brojem i jednim korakom poništavanja. |
| `LENGTHEN` | `LEN` | Produžava ili skraćuje linije, lukove i polilinije: za iznos, procenat, do ukupne dužine, ili prevlačenjem (LEN) |
| `LIBRARY` | `LIB` | Panel biblioteke: postavljanje stavki, provjera ažuriranja, zasluge |
| `LIMITS` |  | Postavlja granice crteža: ON, OFF, ili donji lijevi i gornji desni ugao. Uz granice ON, tačke izvan njih se odbijaju. |
| `LINE` | `L` | Prave dionice, svaka je sopstveni objekat |
| `LINETYPE` | `LT`, `CELTYPE` | Vrsta linije koju dobijaju novi objekti (po sloju, po bloku, ili imenovana) |
| `LINKVIEWS` | `SYNCVIEWS` | Pomjera i zumira sva okna zajedno (podijeljen ekran), za poređenje dva crteža ili revizije |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ili VLIDE) otvara LISP uređivač: prozor za pisanje, učitavanje i isprobavanje rutine. Učitaj u crtež čita svaki oblik, kao što APPLOAD učitava datoteku, i pravi njene naredbe. Pokreni odabir izvršava odabrane oblike, ili oblik u kome je kursor. Konzola prikazuje šta je rutina ispisala i svaku grešku s njenim redom. Zagrada koja odgovara označava se dok kucate, a Enter uvlači novi red. New, Open i Save rade na .lsp datoteci. Spiskovi uz tekst prikazuju funkcije koje rutina definiše, one koje poziva a ovaj LISP još nema, i sve koje ima. Prozor ne blokira crtež, pa rutina može tražiti tačke; Stop ili Esc završava rutinu koja se izvršava. |
| `LIST` | `LI`, `LS` | Opisuje objekte u historiji |
| `LTSCALE` | `LTS` | Razmjera vrste linije crteža (svaka crtica i razmak se množi s njom) |
| `LWDISPLAY` | `LWT` | Prikazuje ili skriva debljine linija na ekranu (dugme LWT u statusnoj traci) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Debljina linije koju dobijaju novi objekti (po sloju, po bloku, zadano, ili mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Slojevi karte ispod modelskog prostora: koordinatni sistem crteža, pločice, WMS, WMTS, ArcGIS, slike |
| `MASSPROP` |  | MASSPROP: svojstva presjeka regija i zatvorenih objekata: površina, obim, centroid, momenti i proizvod inercije, radijusi inercije i glavne ose. Tačno za linije i lukove. Može upisati izvještaj u tekstualnu datoteku. |
| `MATCHPROP` | `MA`, `PAINTER` | Uskladi svojstva: kopira sloj, boju i još toga s jednog objekta na druge (MA) |
| `MEASURE` | `ME` | MEASURE (ME): oznaka na svakoj zadanoj dužini duž linije, luka, kruga, polilinije, spline ili elipse, od kraja najbližeg vašem izboru. Tačke, ili sa Block blok na svakoj oznaci. |
| `MEASUREGEOM` | `MEA` | Mjeri udaljenost, poluprečnik, ugao ili površinu (MEA) |
| `MINSERT` |  | MINSERT: postavlja blok u redove i kolone odjednom. Svaka je sopstvena referenca, pa možete pomjeriti ili obrisati bilo koju. |
| `MIRROR` | `MI` | Ogledalo objekata preko linije |
| `MLEADER` | `MLD`, `MLEAD` | Višestruka vodilica: strelica, vodilica i napomena, kao jedan objekat (MLD) |
| `MLEADERALIGN` | `MLA` | Poravnava višestruke vodilice s jednom od njih duž smjera, na jednakom razmaku, ili raspoređeno između dvije tačke (MLA) |
| `MLEADERCOLLECT` | `MLC` | Skuplja nekoliko višestrukih vodilica u jednu: njihovi blokovi u redu ili koloni, ili njihove napomene jedna ispod druge (MLC) |
| `MLEADEREDIT` | `MLE` | Dodaje linije vodilice višestrukoj vodilici ili ih uklanja; mijenja njen sadržaj između teksta i bloka (MLE) |
| `MLINE` |  | Crta paralelne linije zajedno, spojene na uglovima. |
| `MOVE` | `M` | Pomjera objekte osnovnom tačkom i drugom tačkom |
| `MSPACE` | `MS` | Radi na modelu kroz prikaz otvorenog lista (ili dvaput kliknite unutar prikaza). |
| `MTEXT` | `MT`, `T` | Tekst pasusa: prevucite njegovu širinu, zatim ukucavajte na mjestu; Enter počinje novi pasus (T) |
| `MVIEW` | `MV` | Prikaz na model, na listu |
| `NAMEDVIEW` | `NV`, `VIEWS` | Imenovani pogledi: spasi pogled na ekranu (ili prozor) pod nazivom i vrati se na njega (NV) |
| `NCOPY` |  | Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez razlaganja. |
| `NEARBY` |  | Kaže šta je blizu kursora, najbliže prvo, sa udaljenošću i stranom. |
| `NEW` |  | Počinje novi crtež |
| `OBJECTSCALE` | `OBJSCALE` | Razmjere anotacija anotativnog teksta i kota: dodaj razmjeru, obriši jednu, dodaj tekuću, ili ih navedi (svaki prikaz ih prikazuje u veličini za svoju razmjeru) |
| `OBJOUT` |  | Izvozi 3D model kao OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Standard kancelarije: visine teksta na papiru, slojevi, polja naslovnog bloka i šabloni u jednom zapisu. Prikazuje važeći i odakle dolazi; Import uvozi .json zapis u ovaj crtež, dodaje kancelarijske slojeve koji nedostaju, navodi polja naslovnog bloka. |
| `OFFSET` | `O` | Paralelne kopije na udaljenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kako OFFSET zatvara praznine na spoljašnjim uglovima polilinije. 0 produžava segmente, 1 dodaje luk, 2 dodaje ravan rez. Čuva se za ovu sesiju. |
| `OLELIST` | `OLES` | Navodi OLE objekte koje crtež nosi i stavlja kopiju slike jednog gdje izaberete |
| `OPEN` |  | Otvara DWG ili DXF s ovog računara |
| `OPENIN3D` |  | Otvara ovaj crtež u 3D aplikaciji za modeliranje, u novoj kartici (ništa se ne šalje) |
| `OPTIONKEYS` | `OPTKEYS` | Daje opcijama naredbi vlastita slova (ARRAY.PO, P), u jednoj tekstualnoj datoteci |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otvara meni hvatanja objekata: izaberite koja hvatanja su uključena. Takođe desni klik na Hvatanje u statusnoj traci. |
| `OVERKILL` |  | Briše duple objekte i spaja preklapajuće ili kraj-na-kraj linije i lukove, u okviru tolerancije. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametri: korisnički parametri i dimenziona ograničenja u jednoj tabeli |
| `PARTSLIST` | `PLIST` | Tabela spiska dijelova za svaki standardni dio i čelični presjek postavljen iz Biblioteke |
| `PASTEAREA` | `PAREA` | Zalijepi područje kopirano u MarkupCraft (Kopiraj područje) u njegovoj pravoj veličini, kao slika. |
| `PASTEBLOCK` |  | PASTEBLOCK: zalijepi ono što ste kopirali kao jedan blok. Blok dobija sopstveni naziv; RENAME mu daje vaš. |
| `PASTECLIP` |  | Lijepi međuspremnik: prati kursor, kliknite gdje ide (Ctrl+V) |
| `PASTEORIG` |  | Lijepi međuspremnik na koordinatama odakle je kopiran (Ctrl+Shift+V) |
| `PDF` |  | Daje CadCraft-u PDF datoteke koje koriste podloge crteža |
| `PDFADJUST` |  | Stišava, kontrast, monohromno ili isključuje PDF podlogu |
| `PDFATTACH` | `PDFATT` | Priključuje stranicu PDF-a kao podlogu (PDFATTACH) |
| `PDFCLIP` |  | Obreže PDF podlogu na pravougaonik ili poligon |
| `PDFIMPORT` | `PDFIM` | Pretvara linije, ispune i tekst stranice PDF-a u objekte crteža (PDFIMPORT) |
| `PDFLAYERS` |  | Uključuje ili isključuje slojeve PDF podloge |
| `PEDIT` | `PE` | Uređuje polilinju: zatvara, otvara, spaja, širina, uklapanje krive, spline kriva, ukidanje krivljenja, generisanje vrste linije, obrće; linije, lukovi i splinovi mogu se pretvoriti u polilinije |
| `PENPRESSURE` |  | Da li pritisak poteza olovke postavlja debljinu linije onoga što prave SKETCHFIX i SKETCHLIVE (zadano uključeno). Čuva se u ovom pregledaču. |
| `PHOTOSKETCH` | `PSK` | Pretvara fotografiju skice olovkom na papiru u linije i lukove u razmjeri, ispravlja perspektivu i daje svakoj boji olovke svoj sloj. |
| `PICKSTYLE` |  | PICKSTYLE: da li odabir jednog objekta iz grupe bira cijelu grupu (1, početna postavka) ili samo taj objekat (0). Čuva se za ovu sesiju. |
| `PLAN` |  | Okreće pogled tako da je X osa UCS (tekući ucs, sačuvani Ucs, ili World) vodoravna na ekranu. Ništa u crtežu se ne pomjera. |
| `PLINE` | `PL` | Polilinija od linijskih i lučnih segmenata |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Štampa u PDF: list, ili model u razmjeri |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele stilova štampe: postavlja šta svaka boja štampa kao (boja, crna, siva, tinta, debljina linije); čuva se uz crtež (STYLESMANAGER) |
| `POINT` | `PO` | Objekti tačaka |
| `POINTCLOUD` | `PC` | Priloženi oblak tačaka: rez, visina, debljina, boja, veličina, vidljivo, zum, odvoji |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Priloži oblak tačaka (LAS, LAZ, XYZ, PTS) ispod crteža |
| `POLARANG` |  | Korak polarnog praćenja u stepenima (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravilan poligon |
| `PRESSPULL` |  | Gura ili vuče stranu tijela (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otvara panel Svojstva (također Ctrl+1, ili dvaput kliknite objekat) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Sklapa panel Svojstva do ivice prozora |
| `PSPACE` | `PS` | Napušta prikaz u kojem radite i vraća se na list (ili dvaput kliknite van njega). |
| `PUBLISH` | `-PUBLISH` | Štampa nekoliko ili svih listova u jedan PDF (stranica i zabilješka po listu) |
| `PURGE` | `PU` | Uklanja definicije blokova koje ništa ne koristi |
| `QDIM` |  | Brza kota: kotira nekoliko objekata odjednom (kontinuirano, bazno, naizmjenično, ordinata, poluprečnik ili prečnik) |
| `QPMODE` | `QP` | Brza svojstva kursorom uključena ili isključena |
| `QSELECT` | `QS` | Brzi odabir: svaki objekat vrste čiji se sloj, boja, veličina ili naziv poklapa (QS) |
| `RASTERSNAP` |  | Uključuje ili isključuje hvatanje za linije skeniranih listova. |
| `RAY` |  | Zraka: pomoćna linija iz tačke, beskonačna u jednom smjeru. |
| `RECOVER` |  | Otvara oštećenu DXF ili DWG: preskače ono što se ne može pročitati umjesto da odbije datoteku, kaže šta je preskočeno, zatim provjerava i popravlja crtež kao AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zatvorena polilinija iz dva ugla |
| `REDLINE` | `RDL` | Označavanje u reviziju: čita paket označavanja MarkupCraft, prihvata ili odbija svaku izmjenu, oblači prihvaćene u revizijski oblak s revizijskim dnevnikom i spašava datoteku odgovora (RDL) |
| `REDO` |  | Ponovo radi ono što je poništeno |
| `REFCLOSE` |  | Završava uređivanje bloka na mjestu: spasi ga ili odbaci promjene |
| `REFEDIT` |  | Uređuje blok na mjestu, gdje sjedi njegova referenca, a ostatak crteža blijedi; REFCLOSE spašava |
| `REGEN` | `RE` | Ponovo gradi šta je nacrtano u ovoj kartici iz crteža |
| `REGENALL` | `REA` | Ponovo gradi šta je nacrtano u svakoj kartici, oknu i otvorenom crtežu |
| `REGION` | `REG` | REGION (REG): pravi ravne oblasti (regije) od zatvorenih objekata, ili od linija, lukova i polilinija koje se zatvaraju u petlju kraj-na-kraj. UNION, SUBTRACT i INTERSECT zatim kombinuju regije, a MASSPROP daje njihova svojstva presjeka. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registruje nekoliko skeniranja: postavlja ih u jedan okvir po odabranim parovima tačaka ili ciljevima, dorađuje ICP, izvozi jedan LAS ili E57 |
| `REINIT` |  | Ponovo učitava vašu datoteku skraćenica |
| `RENAME` | `-RENAME`, `REN` | Preimenuje sloj ili blok (svaki objekat ili referenca slijedi) |
| `REVCLOUD` | `RC` | Revizijski oblak: zaokružuje pravougaonik, poligon, slobodnu putanju ili objekat (RC) |
| `REVOLVE` | `REV` | Okreće zatvorene 2D objekte oko ose u tijela (3D) |
| `ROTATE` | `RO` | Okreće objekte oko osnovne tačke |
| `SAMPLES` | `SAMPLE` | Otvara jedan od CadCraft-ovih uzoraka crteža (arhitektonski set, izvedeno stanje) za učenje |
| `SAVE` | `QSAVE` | Preuzima crtež u njegovom formatu (DWG ili DXF) |
| `SAVEAS` |  | Preuzima crtež kao DWG ili DXF: izaberite koji |
| `SAYSEL` |  | Kaže šta je odabrano, jednu rečenicu po objektu. |
| `SCALE` | `SC` | Skalira objekte oko osnovne tačke |
| `SCALELISTEDIT` | `SCALELIST` | Dodaje, uređuje i briše vlastite razmjere crteža; pojavljuju se u spiscima razmjera prikaza i štampe i čuvaju se u datoteci (SCALELIST) |
| `SCANALIGN` | `SCL` | Poravnava skenirani list s dvije tačke: pomjera, okreće i, ako želite, skalira ga. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Umeće skenirani crtež: PNG, JPEG ili TIFF (jedna stranica ili sve stranice) ili PDF stranicu koja je slika. |
| `SCANCLEAN` | `SCC` | Pravi skenirani list crno-bijelim i uklanja mrlje. |
| `SCANCROP` | `SCR` | Obreže skenirani list na prozor. |
| `SCANDESKEW` | `SCD` | Pronalazi ugao pod kojim leže duge linije skeniranog lista i okreće list pravo kad prihvatite ugao. |
| `SCANERASE` | `SCE` | Briše područje skeniranog lista: pravougaonik, poligon ili lasso. |
| `SCANINFO` | `SCI` | Prikazuje originalnu datoteku skeniranog lista i korake od tada. |
| `SCANSCALE` | `SCS` | Skalira skenirani list: izaberite dvije tačke na njemu i ukucajte pravu udaljenost između njih. |
| `SCANTRACE` | `SCT` | Ocrtava skenirani list u linije i lukove na novom sloju, do tolerancije koju postavite. Tekst i šrafura ostaju kao raster. |
| `SELECT` |  | Bira objekte sada (za P, Prethodni, u sljedećoj naredbi) |
| `SELECTALL` | `AI_SELALL` | Bira svaki objekat koji možete uređivati na ovoj kartici (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Bira svaki objekat kao onaj koji izaberete: isti tip, sloj i boja (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Prikazuje panel Set listova: listovi iz mnogo crteža, numerisani, objavljeni kao jedan PDF. |
| `SHORTCUTS` | `KEYS` | Daje bilo kojoj naredbi vlastiti taster (Ctrl ili Alt uz slovo, ili slobodan funkcijski taster), čuva se u ovom pregledaču ili desktop aplikaciji. |
| `SHXFONTS` | `SHX` | Daje CadCraft-u SHX fontove iz fascikle ili datoteka, pa stilovi teksta koji ih imenuju crtaju se u njima (spisak, ukloni, obrnuto) |
| `SKETCHFIX` | `SKF` | Crtajte slobodne poteze; svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, pravo i spojeno s ostalima. |
| `SKETCHLIVE` | `SKL` | Skicirajte olovkom: svaki potez postaje precizna linija, krug, luk ili pravougaonik čim podignete olovku, uhvaćen za crtež, sa veličinom koju možete prepisati. |
| `SPLINE` | `SPL` | Crta spline kroz tačke (ili s kontrolnim poligonom), ili pretvara polilinju u njega |
| `SPLINEDIT` | `SPE` | Uređuje spline: tačke uklapanja, kontrolne tačke i težine, otvara ili zatvara, obrće ga ili pretvara u polilinju |
| `SPLIT` |  | Dijeli područje crteža na okna (kao VPORTS na modelu; i s lista) |
| `STEELMEMBER` | `SMEMBER` | Čelični element u 3D iz standardnog presjeka: dvije tačke (greda) ili osnovna tačka i visina (stub) |
| `STLOUT` |  | Izvozi 3D model kao STL (milimetri) |
| `STRETCH` | `S` | Rastezanje: prevucite prozor preko krajeva da pomjerite; ono što je unutra se pomjera, ostalo ostaje (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stilovi teksta: font, visina, širina i nagib koje novi tekst dobija (dijalog; -STYLE u komandnoj liniji) |
| `SUBTRACT` | `SU` | Oduzima tijela od drugih (3D), ili 2D regije od regija |
| `SWBOUT` | `SWMACRO` | Preuzima makro za SolidWorks (.swb) koji ponovo gradi model kao jednu ograničenu skicu |
| `SWEEP` |  | Provlači zatvorene 2D objekte duž putanje (linija, polilinija, luk, krug) u tijela (3D) |
| `TABLE` | `TB` | Pravi tabelu: redovi i kolone, ili iz ćelija tabele na međuspremniku ili CSV datoteci |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Uređuje tabelu: ukucajte u ćeliju, umetnite i brišite redove i kolone, veličine, spojene ćelije, poravnanje |
| `TABLEEXPORT` |  | Spasi ono što tabela prikazuje kao CSV datoteku |
| `TABLEPASTE` | `PASTETABLE` | Pravi tabelu iz ćelija tabele na međuspremniku |
| `TABLESTYLE` | `TS` | Stilovi tabela: visine teksta, poravnanje, margina i ivice za naslov, zaglavlje i redove podataka |
| `TAGS` |  | Oznake na referencama blokova: definiše oznaku (vrsta, dozvoljene vrijednosti, blokovi na koje se odnosi), postavlja je na odabrane reference, i navodi ih kao raspored koji možete spasiti kao CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst u jednom redu; Enter počinje sljedeći red |
| `TEXTEDIT` | `ED`, `DDEDIT` | Uređuje tekst na mjestu: izaberite tekst (ili dvaput kliknite) (ED) |
| `TEXTMASK` | `TMASK` | Stavlja pozadinsku masku iza teksta (pozadina crteža ili boja), ili je uklanja. |
| `TEXTTOFRONT` |  | Dovodi sav tekst, kote i vodilice ispred svega ostalog. |
| `TOOLBAR` |  | Bira šta dugmad trake s alatima prikazuju: ikone i tekst, samo ikone ili samo tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Stavlja traku s alatima na vrh, dno, lijevo ili desno prozora |
| `TOOLBARROWS` |  | Bira koliko redova koristi traka s alatima: prelomi da stane, 2, ili 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gornje trake iznad crteža postavlja na standardne ili kompaktne |
| `TOUCHCROSSHAIR` | `TCX` | Nišan s pomakom za crtanje prstom: jedan prst pomjera nišan koji je iznad i pored njega, tako da prst ne pokriva tačku koju birate. Podizanje prsta ništa ne bira; dugme Klik ili dodir drugim prstom bira na nišanu, a držanje Klik dok se pomjerate prevlači. Dugi pritisak ili dugme Enter je Enter. Dva prsta pomjeraju i zumiraju. Opcije: ON, OFF, Auto (uključeno samo gdje je prst jedini pokazivač), Distance, Side. |
| `TOUR` | `TUTORIAL` | Ponovo pokreće šestorazredni uvod u prvi crtež |
| `TRIM` | `TR` | Sječe objekte do mjesta gdje ih drugi sijeku: kliknite komad, prevucite kroz nekoliko, ili Shift+klik za produžavanje |
| `TRIMEXTENDMODE` |  | Kako TRIM i EXTEND počinju: 1 Quick (svaki objekat je rubna ivica ili granica), 0 Standard (prvo birate ivice) |
| `TTR` |  | Krug tangentan na dva objekta, s poluprečnikom koji zadajete (isto kao CIRCLE T). |
| `TURNLEFT` |  | Okreće pogled 90° ulijevo (suprotno kazaljci): UCS Z -90, i pogled prati. Ništa u crtežu se ne pomjera. |
| `TURNRIGHT` |  | Okreće pogled 90° udesno (u smjeru kazaljke): UCS Z 90, i pogled prati. Ništa u crtežu se ne pomjera. |
| `TURNWORLD` |  | Nazad na svijet: UCS World, i pogled je ponovo vodoravan. |
| `TXT2MTXT` | `T2M` | Spaja tekstove u jednom redu u tekst pasusa, odozgo nadole. |
| `UCS` |  | Vaš sopstveni koordinatni sistem: početak i X osa (početak, ugao Z, 3tačke, OBject, Previous, World, NAmed). Tačke koje ukucate, ortogonalno, polarno praćenje, mreža i novi tekst ga prate; pogled se okreće tako da je njegova X osa vodoravna. Ništa u crtežu se ne pomjera. |
| `UNDO` | `U` | Poništava posljednju naredbu |
| `UNGROUP` |  | UNGROUP: rastavlja grupe. Odaberite objekte grupa, ili dajte Name. Objekti ostaju u crtežu. |
| `UNION` | `UNI` | Spaja tijela u jedno (3D), ili 2D regije u jednu regiju |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponovo prikazuje svaki objekat skriven s ISOLATEOBJECTS ili HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kako se dužine prikazuju i ukucavaju: decimalno, stope i inči, razlomci (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponovo računa polja, i bira kad se sama ažuriraju |
| `USDOUT` |  | Izvozi 3D model kao USD (.usda tekst, .usdc binarno ili .usdz paket) |
| `VIEW` | `-VIEW`, `V` | Standardni 3D pogledi, perspektivni ili paralelni (3D) |
| `VIEWBASE` | `FLATSHOT` | Postavlja ravan 2D pogled 3D tijela (sprijeda, odozgo, sa strane ili izometrijski, skrivene linije isprekidane) na list ili u model |
| `VIEWLABEL` | `VL` | Naslov pogleda na listu koji prikazuje naziv pogleda svog prikaza i mijenja se s njim. |
| `VOICE` |  | Uključuje ili isključuje izgovorene naredbe. Prepoznaju se na ovom računaru. |
| `VPCLIP` |  | Obreže prikaz lista na zatvoreni objekat ili nacrtani poligon; Delete ga ponovo čini pravougaonikom |
| `VPLAYER` |  | Zamrzava ili odmrzava slojeve samo u nekim prikazima (Freeze, Thaw, Reset), i bira koji slojevi novi prikazi počinju zamrznuti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dijeli područje crteža na okna, svaki sa svojim pogledom (na listu: prikaz, kao MVIEW) |
| `VPVIEW` |  | Postavlja šta prikaz prikazuje: izaberite prozor na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuelni stil 3D pogleda: senčeno, ivice, skrivena linija, žičani model, rendgen |
| `WALL` | `WA` | Crta 2D zidove kao polilinije. Spajaju se, i nose vrata i prozore. |
| `WALLARC` | `WARC` | Crta luk zidova. Zidovi u planu su pravi, pa se luk crta kao kratki pravi zidovi (po 15 stepeni) koji se spajaju. |
| `WALLDELSEG` |  | Briše dio zida između dvije tačke. Ostatak ostaje kao jedan ili dva zida. |
| `WALLDIM` |  | Ukucajte novu vrijednost za kotu: zid na njenom dalekom kraju pomjera se pod pravim uglom prema sebi, zid na prvom kraju se drži, a zidovi spojeni uz njega prate. |
| `WALLDISJOIN` |  | Izaberite zid blizu jednog kraja da zabranite spojeve na tom kraju: kraj se crta pod pravim uglom i ništa ga ne prati. Izaberite ga ponovo da ih dozvolite. |
| `WALLGRID` |  | Zaključava zid za liniju mreže: duž nje, ili jedan kraj na njoj. Pomjerite liniju s GRIDMOVE i zid prati. |
| `WALLHOLD` |  | Poravnaj i zaključaj: zid zadržava svoje mjesto u odnosu na drugi zid (na svojoj liniji, ili na razmaku koji ima). Ako se jedan pomjeri, drugi prati. |
| `WALLHOLDDIM` |  | Zaključava razmak između dva paralelna zida. Ako se jedan pomjeri, drugi prati da ga zadrži. |
| `WALLHOLDS` |  | Navodi zaključavanja zidova. |
| `WALLJOINS` |  | Daje svakom zidu starog crteža njegov ID i pamti spojeve među njima. Ovo se takođe dešava pri prvoj promjeni koju napravite. |
| `WALLJOINSTYLE` |  | Kliknite ugao gdje se dva zida sastaju kraj na kraj da promijenite kako se crta: kosi spoj, ravno, pravo odsječeno. T mijenja koji zid prolazi kroz. |
| `WALLOFFSET` | `WO` | Pomjera zid pod pravim uglom prema sebi za udaljenost (spojeni zidovi prate), ili pravi kopiju na toj udaljenosti. |
| `WALLPICK` |  | Pravi zidove na liniji ili polilinji u crtežu, sa linijama spojenim uz njih ako kažete Yes. |
| `WALLPOLY` | `WP` | Crta zidove oko pravilnog poligona od 3 do 64 strane, kao POLYGON. |
| `WALLRECT` | `WR` | Crta četiri spojena zida iz dva suprotna ugla, kao RECTANG. |
| `WALLREJOIN` |  | Ponovo pretvara dva dijela zida u jedan zid. Prvi zadržava svoje mjesto u crtežu. |
| `WALLROT` |  | Crta četiri spojena zida kao pravougaonik okrenut pod bilo kojim uglom: prva strana, zatim koliko daleko ide druga. |
| `WALLSPLIT` | `WS` | Dijeli zid u dva na tački ili tamo gdje drugi zid siječe. Dijelovi ostaju spojeni osim ako ne tražite razmak ili slobodne krajeve. Vrata i prozori idu sa svojim dijelom. |
| `WALLSPLITGAP` |  | Dijeli zid ostavljajući razmak: ukucajte razmak, izaberite zid, pa tačku. Dijelovi zadržavaju slobodne krajeve i mogu se ponovo spojiti. |
| `WALLSTRETCH` |  | Rasteže s prozorom: krajevi zida unutar njega se pomjeraju, zidovi potpuno unutra se pomjeraju cijeli, a zidovi koji udaraju u njihove strane kližu s njima. |
| `WALLTAN` |  | Nastavlja zid lukom koji polazi od njega duž zida (crta se kao kratki pravi zidovi). |
| `WALLTRACE` |  | Pravi zidove oko najmanjeg zatvorenog područja linija i zidova oko tačke koju kliknete. |
| `WALLUNHOLD` |  | Skida zaključavanja sa zida (i zaključavanja drugih zidova za njega). |
| `WBLOCK` | `W`, `-WBLOCK` | Upisuje blok, neke objekte ili cijeli crtež u novu DWG ili DXF datoteku (W) |
| `WEDGE` | `WE` | Klin: dva ugla i visina; kosi se od prvog ugla (3D) |
| `WHEREAMI` | `WHERE` | Kaže gdje je kursor. |
| `WHOHAS` |  | Kaže ko ima crtež otvoren. CadCraft Studio čuva malu zaključanu datoteku pored svakog otvorenog crteža (Plan.dwg.cclock: ko, od kad, koja verzija) i uklanja je pri zatvaranju. Opcije: Current (otvoreni crtež), File (izaberite jedan), FOlder (svaki crtež u fascikli koji je negdje otvoren; ovo takođe dopušta Studiju da čuva datoteke zaključavanja u toj fascikli), Path (ukucajte jedan), Name (ime koje drugi vide). Zaključavanje koje nije osvježeno pet minuta smatra se zastarjelim. Nije dostupno u pregledaču. |
| `WINDOW` | `WN` | Stavlja prozor u zid. |
| `XATTACH` | `XA` | Povezuje drugi DWG ili DXF u ovaj crtež, prikazan samo za čitanje (XREF ih navodi i ponovo učitava) |
| `XCLIP` | `XC` | Obreže reference blokova i povezane crteže na pravougaonik ili poligon, ili uklanja obrezivanje. |
| `XLINE` | `XL` | Pomoćna linija, beskonačna u oba smjera: kroz dvije tačke, horizontalna, vertikalna, pod uglom, dijeli ugao, ili pomaknuta od linije. |
| `XREF` | `XR`, `-XREF` | Povezani crteži (spoljašnje reference): navodi, priključuje, ponovo učitava, veže, odvaja |
| `ZOOM` | `Z` | Granice, ili prozor |
