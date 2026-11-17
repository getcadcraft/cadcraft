---
title: Karta naredbi: što upisati
summary: Svaka naredba koju CadCraft ima s kraticama, od A do Z, izrađena iz samog programa, i navike iz drugih programa za crtanje koje se razlikuju.
keywords: karta naredbi, naredbe, aliasi, kratice, dolazak iz, popis naredbi, što upisati, brisanje, skraćivanje, ekvivalent, razlike
from: 3bdfd3e6
---

CadCraft preuzima nazive naredbi i kratice koje ljudi poznaju iz drugih programa za crtanje: upišite `L` za liniju, `TR` za skraćivanje, `E` za brisanje. Zato za većinu njih nema tablice prijevoda koju treba učiti: naziv koji poznajete ovdje je isti. Popis ispod sadrži svaku naredbu koju CadCraft ima, izrađen iz samog programa. {{key:Enter}} ponavlja posljednju naredbu; `HELP` u naredbenom retku ispisuje isti popis.

Nekoliko naredbi koje nisu iste ili nisu izrađene:

- **Spremi** preuzima kopiju u pregledniku ({{cmd:SAVE}}, {{cmd:SAVEAS}}); u CadCraft Studiju zapisuje datoteku. Vidi [Dolazak iz drugog softvera za crtanje](topic:coming-from).
- **PLOT** izrađuje PDF (također PNG i SVG), s tablicom stilova plotanja; nema upravitelja postavki stranice.
- **DIMSTYLE** i **PEDIT** su izrađene; **PEDIT** nema opciju Uredi vrh (to rade ručke).
- **TABLE** još nije izrađena; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} jesu.
- Naredbe vlastite rutine (AutoLISP `C:NAME`) pojavljuju se nakon što je učitate pomoću {{cmd:APPLOAD}}; ovdje nisu navedene.

## Sve naredbe (398)

| Naredba | Kratice | Što radi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Zakreće 3D prikaz lijevom tipkom miša |
| `ACCESS` | `AX` | Uključuje ili isključuje crtanje bez vida: rezultati se izgovaraju kroz čitač zaslona, kursor tipkovnicom na crtežu, zvukovi hvatanja i izgovorene naredbe. |
| `ALIASEDIT` |  | Uređuje aliase naredbi u jednoj tekstualnoj datoteci (poznati oblik L, *LINE) |
| `ALIGN` | `AL` | Pomiče i zakreće objekte tako da izvorišne točke dođu na odredišne točke (jedan, dva ili tri para) te ih po želji skalira |
| `ALIGNPANEL` | `ALP` | Otvara ploču Poravnaj i raspodijeli |
| `ALIGNTO` |  | Poravnava lijeve, središnje, desne, gornje, srednje ili donje rubove odabranih objekata, prema odabiru, prvom ili posljednjem odabranom objektu ili točki |
| `ANNOALLVISIBLE` | `ANNOALL` | Prikazuje anotativne objekte u svakom mjerilu ili samo tamo gdje je mjerilo viewporta (ili crteža) na njihovu popisu |
| `ANNOSCALE` | `CANNOSCALE` | Postavlja mjerilo anotacije crteža: anotativni tekst i kote mijenjaju veličinu tako da se ispisuju u jednakoj veličini |
| `APPLOAD` | `AP` | Učitava aplikacije: LISP rutine (.lsp) i njihove datoteke dijaloških okvira (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Luk: 3 točke, Početak/Središte/Kraj, Početak/Središte/Kut, Početak/Središte/Duljina, Početak/Kraj/Kut, Početak/Kraj/Smjer, Početak/Kraj/Radijus, Središte/Početak/Kraj, Središte/Početak/Kut, Središte/Početak/Duljina, Nastavi |
| `AREA` | `AA` | Površina i opseg po točkama ili objekta; Dodaj i Oduzmi zadržavaju zbroj (AA) |
| `ARRAY` | `AR` | Kopije u redcima i stupcima ili oko središta (AR) |
| `ARRAYASSOCIATIVITY` |  | Postavlja hoće li naredbe ARRAY izrađuju nizove koji ostaju uredivi (1) ili obične kopije (0) |
| `ARRAYCLOSE` |  | Završava uređivanje izvornih objekata niza |
| `ARRAYEDIT` |  | Mijenja niz izrađen opcijom Pridruženo: brojeve, razmak, izvorne objekte, jednu stavku |
| `ARRAYPATH` |  | Kopije objekata duž linije, luka, polilinije ili druge krivulje |
| `ARRAYPOLAR` |  | Kopije oko središnje točke |
| `ARRAYRECT` |  | Kopije u redcima i stupcima |
| `ASBUILT` | `ASB` | ASBUILT čita točke izvedenog stanja koje je ekipa izmjerila (CSV / TXT, kako ih zapisuje EXPORTPOINTS) i uspoređuje ih s točkama crteža: unutar ili izvan tolerancije, nije izmjereno, dodatno. Označava ih na sloju AS-BUILT i preuzima CSV izvješće. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definira atribut (oznaku za koju blok traži vrijednost) za stavljanje u blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Uređuje vrijednosti atributa referenci bloka u naredbenom retku, jednu za drugom (Enter zadržava vrijednost) |
| `ATTSYNC` |  | Usklađuje reference bloka s njegovim definicijama atributa: nove se dodaju sa zadanim vrijednostima, uklonjene se izbacuju, položaji i tekst se vraćaju na zadano; vrijednosti se zadržavaju |
| `AUDIT` |  | Provjerava otvoreni crtež za oštećenja: brojeve koji nisu konačni, objekte bez veličine, nedostajuće slojeve, blokove, stilove i tipove linija, blokove koji sadrže sami sebe, zajedničke identifikatore, oštećene kote i šrafure. Popisuje što je pronašla po vrsti i pita prije ispravka; ispravak je jedan korak poništavanja. |
| `AUNITS` | `ANGUNITS` | Kako se kutovi prikazuju i upisuju: decimalni stupnjevi, stupnjevi-minute-sekunde ili smjerni kutovi poput N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatsko dovršavanje crteža uključeno ili isključeno, ili popis onoga što obrasci crteža sada predlažu. |
| `AUTOCONSTRAIN` |  | Dodaje podudarna, horizontalna i vertikalna ograničenja tamo gdje je geometrija već blizu |
| `AUTODIM` | `ADIM` | Kotira prema pravilima: ukupne dimenzije, lanci duž stranica, otvori, promjeri rupa i razmak mreže, bez ponavljanja onoga što je već okotirano. |
| `AUTOSHEET` | `ASH` | Sam slaže listove: bira papir i standardna mjerila te smješta svaki pogled s natpisom i zaglavljem crteža. |
| `BATTMAN` |  | Upravitelj atributa bloka: redoslijed, oznake, upiti, zadane vrijednosti i načini atributa bloka, zatim ažuriranje njegovih referenci |
| `BCLOSE` |  | Zatvara uređivač blokova: sprema blok ili odbacuje promjene |
| `BCONVERT` |  | BCONVERT pronalazi geometriju koja se ponavlja i pretvara je u reference blokova. Odaberite objekte koji se ponavljaju: pronalazi se svaki drugi skup objekata u otvorenom prostoru koji ima istu geometriju, pomaknut i zakrenut za bilo koji kut, a uz uključene opcije Zrcaljeno ili Skalirano pronalazi i zrcalne slike te kopije u drugoj veličini. Dajte novom bloku naziv i baznu točku; odabir i svaka kopija postaju reference na njega, svaka sa svojom rotacijom i mjerilom. Ili odaberite Blok i navedite postojeći blok da biste pronašli slobodne kopije njegovih objekata. Kopija mora imati isti sloj, boju, tip linije i debljinu linije, osim ako je Svojstva postavljeno na Zanemari. Objekti na zaključanim slojevima ostaju netaknuti. Jedan korak poništavanja. |
| `BEDIT` | `BE` | Uređivač blokova: uređuje objekte i atribute bloka; BCLOSE sprema (BE) |
| `BLEND` |  | BLEND: spline između krajeva dviju otvorenih krivulja, odabranih blizu krajeva za spajanje. CON (kontinuitet): Tangenta prati oba smjera, Glatko (S) prati i savijanje. |
| `BLOCK` | `B`, `BMAKE` | Izrađuje blok od objekata (postaju jedna referenca) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: svaka referenca na jedan blok postaje referenca na drugi, na istom mjestu, s istim mjerilom i rotacijom. Vrijednosti atributa koje oba bloka imaju se zadržavaju. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE prikazuje ploču Blokovi s kursorom u njezinu filteru. Ploča prikazuje sliku svakog bloka (prvo one postavljene nedavno), kao popis ili mrežu; kliknite sliku ili je povucite na crtež da biste postavili blok naredbom INSERT. U odjeljku Knjižnice dodajte vlastitu datoteku DWG ili DXF: njezini su blokovi popisani sa slikama i kopiraju se u ovaj crtež kad postavite jedan. U CadCraft Studiju može se dodati i mapa crteža, a datoteke i mape se pamte. |
| `BOMEDIT` | `BOMCOLUMNS` | Stupci, grupiranje, sortiranje, naslov, ukupni zbrojevi i napomene tablice sastavnice |
| `BOMEXPORT` |  | Sprema tablicu sastavnice kao datoteku .csv |
| `BOMTABLE` | `BOM` | Aktivna tablica sastavnice jedne zone ili cijelog crteža |
| `BOMUPDATE` |  | Odmah ažurira svaku tablicu sastavnice, uključujući zamrznute |
| `BOMZONE` | `BZONE` | Imenovano područje crteža za sastavnicu: dva kuta, poligon ili obris zatvorenog objekta |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): odaberite točku unutar zatvorenog područja i dobijte zatvorenu polilinij oko njega. Lukovi ostaju lukovi. Otoci (I) obrisuje i područja unutar njega. |
| `BOX` |  | Kvadar: dva kuta i visina (3D) |
| `BPARAMETER` | `BPARAM` | Još nije izrađeno: dodavanje parametra (kao što je Vidljivost) bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri bloka: imenovani parametri s formulama i više parametara vidljivosti u jednom bloku. Radi u uređivaču blokova (dodjeljuje odabrane objekte stanju) i na odabranoj referenci (njezine vlastite vrijednosti i stanja). |
| `BREAK` | `BR` | Prekida liniju, luk, kružnicu ili polilinij između dviju točaka (BR) |
| `BREAKATPOINT` |  | Dijeli liniju, luk ili polilinij na dva dijela u jednoj točki |
| `BREAKLINE` |  | Crta liniju sa simbolom prekida; njezina veličina i produljenje preko krajeva pamte se. |
| `BREPLACE` |  | BREPLACE zamjenjuje jedan blok drugim. Odabrano: odaberite reference blokova i navedite blok koji će se umjesto njih koristiti. Sve: navedite blok i njegovu zamjenu, pa se svaka referenca u svakom prostoru i unutar drugih blokova mijenja. Referenca zadržava svoje mjesto, mjerilo, rotaciju i sloj te vrijednosti atributa koje oba bloka imaju; vrijednosti za koje novi blok nema mjesta se odbacuju i navode. |
| `BSEARCH` |  | BSEARCH pronalazi blokove. Naziv: dio naziva bloka ili obrazac sa * i ?. Atribut: vrijednost (ili TAG=vrijednost) koju drže atributi reference. Geometrija: odaberite objekte ili jednu referencu bloka; popisuju se blokovi čiji je oblik najmanje 85 % sličan, najbolji prvi; veličina, rotacija i zrcaljenje se ne računaju. Reference pronađene u otvorenom prostoru se odabiru, spremne za sljedeću naredbu. |
| `BURST` |  | Rastavlja reference blokova i zadržava ono što kažu njihovi atributi: svaka vrijednost postaje tekst na sloju atributa. |
| `BVHIDE` | `BVH` | U uređivaču blokova: sakriva objekte u trenutnom stanju vidljivosti. |
| `BVSHOW` | `BVSH` | U uređivaču blokova: prikazuje objekte koje trenutno stanje vidljivosti skriva (prikazuju se izblijedjeli za odabir). |
| `BVSTATE` | `BVS` | U uređivaču blokova, na bloku sa stanjima vidljivosti: prelazi na stanje ili dodaje, preimenuje ili briše stanje. |
| `CAL` |  | Izračunava duljinu ili broj: + − * / i zagrade, kako ih upisujete bilo gdje |
| `CENTERLINE` | `CL` | Središnja linija između dviju linija: na sredini između njih ili duž simetrale kada se sastaju (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Oznaka središta: križ u središtu kružnice ili luka, sa središnjim linijama koje sežu malo izvan nje (CM) |
| `CHAMFER` | `CHA` | Skosi kut između dviju linija (Dvije udaljenosti, Duljina i kut (A), Svaki kut polilinije (P)) |
| `CHSPACE` |  | CHSPACE: pomiče objekte između lista i modela kroz viewport. Skaliraju se i zakreću tako da s druge strane izgledaju isto. Na listu odlaze u model; dok radite kroz viewport (MSPACE) dolaze na list. |
| `CIRCLE` | `C` | Središte i radijus, promjer, 2 ili 3 točke |
| `CLASS` |  | Stavlja odabrane objekte u klasu ili, ako ništa nije odabrano, postavlja aktivnu klasu (? ih popisuje) |
| `CLASSES` | `CLS` | Ploča Klase: klase razvrstavaju objekte preko slojeva; prikazuje, skriva i oblikuje ih te nadjačava po viewportu (CLS) |
| `COMMANDLINE` | `CMDLINE` | Usidruje ili odvaja naredbeni redak, pretvara ga u jedan redak, postavlja broj redaka povijesti ili otvara povijest (F2) |
| `COMPARESETTINGS` | `CMPSET` | Uspoređuje stilove kotiranja, stilove teksta, slojeve, listove ili jedinice: dva u ovom crtežu ili ovaj crtež s drugim otvorenim i prenosi vrijednost preko. |
| `CONSTRAINTBAR` | `CBAR` | Prikazuje ili skriva trake ograničenja (Prikaži sve / Sakrij sve, ili po objektu) |
| `COPY` | `CO`, `CP` | Kopira objekte, koliko puta kliknete |
| `COPYBASE` |  | Kopira objekte u međuspremnik s baznom točkom koju odaberete |
| `COPYCLIP` |  | Kopira objekte u međuspremnik (Ctrl+C); PASTECLIP ih postavlja |
| `COUNT` | `BCOUNT` | Broji reference blokova: odaberite jednu da odaberete i prebrojite svaku referencu njezina bloka |
| `COUNTTABLE` |  | Postavlja tablicu brojeva blokova |
| `CREDITS` |  | Stavlja zasluge knjižnice u crtež kao tablicu. Pokrenite ponovno da biste ažurirali tablicu prema stavkama u crtežu. |
| `CURSORSIZE` |  | Veličina nitnog križa: 100 ga proteže od ruba do ruba crteža (Postavke › Kursor › Cijeli zaslon) |
| `CUTCLIP` |  | Izrezuje objekte u međuspremnik (Ctrl+X): kopira, pa briše |
| `CYLINDER` | `CYL` | Valjak: središte, radijus i visina (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Popisuje blokove, njihove atribute i svojstva objekata kao tablicu u crtežu ili CSV datoteku |
| `DATALINK` | `DL` | Tablica iz CSV datoteke koja pamti datoteku, pa se može ponovno čitati |
| `DATALINKUPDATE` | `DLU` | Ponovno čita datoteku veze podataka i ponovno puni njezine tablice |
| `DCALIGNED` | `DCALI` | Kotno ograničenje: stvarna udaljenost između točaka, točke i linije ili dviju linija |
| `DCANGULAR` | `DCANG` | Kotno ograničenje: kut između dviju linija ili luka |
| `DCCONVERT` |  | Pretvara kote nacrtane na geometriji koja se može ograničiti u kotna ograničenja |
| `DCDIAMETER` | `DCDIA` | Kotno ograničenje: promjer kružnice ili luka |
| `DCDISPLAY` |  | Prikazuje ili skriva kotna ograničenja na crtežu |
| `DCHORIZONTAL` | `DCHOR` | Kotno ograničenje: horizontalna udaljenost |
| `DCLINEAR` | `DCLIN` | Kotno ograničenje: horizontalna ili vertikalna udaljenost, od mjesta gdje je postavite |
| `DCRADIUS` | `DCRAD` | Kotno ograničenje: radijus kružnice ili luka |
| `DCVERTICAL` | `DCVER` | Kotno ograničenje: vertikalna udaljenost |
| `DELBLOCKS` |  | Briše blokove: svaku referencu (i ugniježđene, na svakom listu) i definicije |
| `DELCONSTRAINT` | `DELCON` | Uklanja svako ograničenje (geometrijsko i kotno) s objekata koje odaberete |
| `DELOPENING` |  | Vadi vrata ili prozor iz zida. |
| `DESCRIBE` | `DESC` | Kaže što crtež sadrži: koliko objekata, koje vrste, koje veličine, što je odabrano. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Poništava odabir (Esc) |
| `DETAILS` | `DET` | Detalji vaše tvrtke, pronađeni za ono što crtate: pronađi, dodaj blok, popis, ukloni, uključi ili isključi prijedloge. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Crta dijagram iz teksta: Mermaid dijagram toka, PlantUML dijagram komponenti, D2, popis od-do ili draw.io XML, kao blokove i spojnice koje možete uređivati |
| `DIMALIGNED` | `DAL`, `DIMALI` | Stvarna udaljenost između dviju točaka |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kut između dviju linija, luka ili prema trima točkama |
| `DIMARC` | `DAR` | Kota duljine luka: udaljenost duž luka, sa simbolom luka (DAR) |
| `DIMASZ` |  | Postavka kotiranja: veličina strelice |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kote složene od jedne bazne linije |
| `DIMBREAK` | `DBREAK` | Prekida kotne i pomoćne mjerne crte tamo gdje sijeku druge objekte (Automatski), između dviju točaka (Ručno), ili uklanja prekide |
| `DIMCONSTRAINT` | `DCON` | Kotna ograničenja: linearna, poravnata, kutna, radijus, promjer, pretvori |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Lanac kota, svaka od kraja prethodne |
| `DIMDEC` |  | Postavka kotiranja: decimalna mjesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Promjer luka ili kružnice |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Oslobađa kote od objekata za koje su vezane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Mijenja tekst kote (Početna, Novi tekst, Zakreni) ili nagiba pomoćne mjerne crte (Kosa) |
| `DIMEXE` |  | Postavka kotiranja: produljenje preko mjerne crte |
| `DIMEXO` |  | Postavka kotiranja: odmak od ishodišta |
| `DIMGAP` |  | Postavka kotiranja: razmak oko teksta |
| `DIMINSPECT` |  | Kota inspekcije: okvir oko vrijednosti s oznakom i učestalošću provjere dijela |
| `DIMJOGGED` | `DJO`, `JOG` | Kota prelomljenog radijusa: radijus nacrtan iz bliže točke kad je središte daleko (DJO) |
| `DIMJOGLINE` | `DJL` | Dodaje simbol prijeloma na linearnu ili poravnatu mjernu crtu, da pokaže da udaljenost nije nacrtana u mjerilu (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontalna ili vertikalna udaljenost (R: bilo koji kut) |
| `DIMLUNIT` |  | Postavka kotiranja: format duljine (1 znanstveni, 2 decimalni, 3 inženjerski, 4 arhitektonski, 5 razlomci) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kota ordinate: X ili Y udaljenost točke od ishodišta UCS-a, na vodilici (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Nadjačava varijable kotiranja na odabranim kotama bez mijenjanja njihova stila; Očisti vraća stil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radijus luka ili kružnice |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Veže točke kote za objekte, pa prati i ponovno mjeri kad se oni pomaknu (DRE) |
| `DIMSCALE` |  | Postavka kotiranja: ukupno mjerilo (veličine × ovo) |
| `DIMSPACE` |  | Jednak razmak između paralelnih kota, mjeren od bazne kote (0 ih poravnava, Automatski je dvostruka visina teksta) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Izrađuje, mijenja, postavlja kao aktivne, briše, primjenjuje i uspoređuje imenovane stilove kotiranja (dijaloški okvir; -DIMSTYLE u naredbenom retku) |
| `DIMTEDIT` | `DIMTED` | Premješta tekst kote lijevo, desno ili na središte mjerne crte, ili ga okreće |
| `DIMTEXTUNIT` | `DTU` | Tekst kote u mm, cm, m ili km, ili u vlastitim jedinicama crteža: odabrane kote, inače nove (DTU) |
| `DIMTXT` |  | Postavka kotiranja: visina teksta |
| `DIST` | `DI` | Udaljenost i kut između dviju točaka |
| `DISTRIBUTE` |  | Jednako raspoređuje odabrane objekte, lijevo-desno ili gore-dolje: jednaki koraci između središta ili jednaki razmaci; vanjska dva ostaju |
| `DIVIDE` | `DIV` | DIVIDE (DIV): oznake koje dijele liniju, luk, kružnicu, polilinij, spline ili elipsu na jednake dijelove. Točke ili, uz Blok, blok na svakoj oznaci. |
| `DOCUMENTS` | `DOCS` | Otvara ploču Dokumenti: uzimanje i vraćanje crteža, revizije, stanja izdanja i odobrenje za mapu projekta |
| `DOOR` | `DR` | Postavlja vrata u zid. Strana na koju kliknete je strana u koju se otvaraju. |
| `DRAWORDER` |  | Mijenja redoslijed crtanja: dovodi objekte naprijed, šalje ih natrag ili ih stavlja iznad ili ispod drugih objekata. |
| `DUPLICATE` | `DUP` | Kopija koja se pomiče s pokazivačem: kliknite da je spustite (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Svojstva crteža: naslov, autor i ostalo te vaši vlastiti parovi naziva i vrijednosti |
| `DXFOUT` |  | Preuzima crtež kao DXF R12 (Spremi zadržava svoj format) |
| `EATTEDIT` | `DDATTE` | Uređuje atribute reference bloka: vrijednosti, tekst i svojstva, jedan po jedan atribut |
| `ELLIPSE` | `EL` | Krajnje točke osi i druga polovica osi |
| `ERASE` | `E`, `DELETE` | Uklanja objekte |
| `EXPLODE` | `X` | Rastavlja polilinije, blokove i kote na dijelove |
| `EXPORT` | `EXP` | Sprema kopiju crteža u vrsti datoteke koju zapisuje dodatak |
| `EXPORT3D` | `3DEXPORT` | Izvozi 3D model: GLB, OBJ ili STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapisuje točke i točke umetanja blokova s jednim atributom kao opisom u CSV ili TXT datoteku (PNEZD, PENZD ili XYZ) za BIM i geodetske programe |
| `EXTEND` | `EX` | Produljuje objekte do drugih: kliknite blizu kraja, povucite preko nekoliko ili Shift+klik za skraćivanje |
| `EXTRIM` |  | EXTRIM: odaberite jedan rub rezanja, zatim stranu. Sve što prelazi preko ruba skraćuje se na toj strani. Dijelovi koji bi bili uklonjeni prikazuju se dok pomičete pokazivač. |
| `EXTRUDE` | `EXT` | Izvlači zatvorene 2D objekte u puna tijela (3D) |
| `FIELD` |  | Postavlja polje u tekst, ćeliju tablice ili atribut: datum, naziv datoteke, broj lista, svojstvo crteža, površinu ili duljinu objekta, ili formulu |
| `FILLET` | `F` | Zaobljuje ili izravnava kut između dvaju objekata (Radijus, Svaki kut polilinije (P), Nekoliko (M)) |
| `FIND` |  | Pronalazi i zamjenjuje riječi u tekstu, vrijednostima atributa i tekstu kota |
| `FLATTEN` |  | Postavlja visinu (Z) i debljinu odabranih objekata na 0, također u blokovima koje koriste |
| `FLOOR` |  | Odabire etažu za crtanje, dodaje jednu, ili premješta ili kopira odabir na nju. |
| `FLOORLAYERS` |  | Pretvara etaže u slojeve nazvane Floor-Layer, za datoteku koja ide nekome bez etaža. |
| `FLOORS` | `FLR` | Otvara ploču Etaže: slaže etaže u jedan prostor modela. |
| `GCCOINCIDENT` |  | Ograničenje: dvije točke se podudaraju, ili točka ostaje na objektu |
| `GCCOLLINEAR` |  | Ograničenje: dvije linije ostaju na jednoj liniji |
| `GCCONCENTRIC` |  | Ograničenje: dvije kružnice ili dva luka dijele središte |
| `GCEQUAL` |  | Ograničenje: dvije linije ostaju jednake duljine, ili dvije kružnice/luka jednakog radijusa |
| `GCFIX` |  | Ograničenje: točka ili cijeli objekt ostaje na mjestu |
| `GCHORIZONTAL` |  | Ograničenje: linija (ili dvije točke) ostaje horizontalna |
| `GCPARALLEL` |  | Ograničenje: dvije linije ostaju paralelne |
| `GCPERPENDICULAR` |  | Ograničenje: dvije linije ostaju pod pravim kutom |
| `GCSYMMETRIC` |  | Ograničenje: dvije točke, linije ili kružnice zrcale jedna drugu preko linije |
| `GCTANGENT` |  | Ograničenje: linija i kružnica ili luk (ili dva od njih) ostaju tangentni |
| `GCVERTICAL` |  | Ograničenje: linija (ili dvije točke) ostaje vertikalna |
| `GDSIN` | `GDS` | Prikazuje raspored IC-a (datoteku GDSII toka): svaki sloj i tip podataka kao sloj crteža, ravno, u korisničkim jedinicama; samo za pregled i mjerenje (eksperimentalno) |
| `GEOMCONSTRAINT` | `GCON` | Geometrijska ograničenja: horizontalno, vertikalno, paralelno, tangentno, podudarno… |
| `GLBOUT` |  | Izvozi 3D model kao GLB (glTF) |
| `GRADIENT` | `GD` | Ispunjava područje prijelazom boja jedne ili dviju boja |
| `GRIDMOVE` | `GM` | Pomiče liniju mreže i nosi ono što na njoj visi: zidovi se rastežu, stupovi, krugovi i oznake se pomiču, kote prate. |
| `GROUP` | `G` | GROUP (G): dajte odabranim objektima zajedničko ime. Klik na jedan od njih zatim odabire sve. Enter na nazivu stvara grupu bez imena. |
| `GROUPEDIT` |  | GROUPEDIT: mijenja grupu. Odaberite jedan od njezinih objekata ili navedite Name, zatim Add ili Remove za objekte, REName za preimenovanje, Description za opis ili odredite hoće li klik odabrati cijelu grupu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Ispunjava područje punom ispunom ili uzorkom: kliknite unutar njega ili odaberite zatvorene objekte (H) |
| `HATCHEDIT` | `HE` | Mijenja šrafuru: uzorak, mjerilo, kut, ishodište i njezinu vezu s granicom. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponovno izrađuje granične polilinije iz šrafure, povezane s njom ili ne |
| `HATCHTOBACK` |  | Šalje svaku šrafuru iza svega ostalog. |
| `HELP` | `?` | Ovaj popis |
| `HIDEOBJECTS` |  | Skriva odabrane objekte do UNISOLATEOBJECTS. Ne sprema se s crtežom. |
| `HISTORY` | `HIST` | HISTORY (HIST): verzije ovog crteža — kopije zadržane na ovom računalu kad ih Studio sprema, i verzije u oblaku — za otvaranje, vraćanje i usporedbu s promjenama prikazanim u boji. |
| `ID` |  | Koordinate točke |
| `IMAGE` | `IM` | Daje CadCraftu datoteke slika koje crtež koristi (DWG pohranjuje samo gdje su bile). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Postavlja sliku (PNG ili JPEG) iz datoteke. |
| `IMAGECLIP` | `ICL` | Izrezuje sliku na pravokutnik ili poligon, ili uklanja njezin izrez. |
| `IMPORT` | `IMP` | Uvozi datoteku vrste koju čita dodatak, u ovaj crtež |
| `INSERT` | `I`, `DDINSERT` | Postavlja blok (Skaliraj, Rotiraj); F iz datoteke DWG/DXF, L iz knjižnice |
| `INTERSECT` | `IN` | Zadržava samo ono što puna tijela imaju zajedničko (3D), ili područje koje dijele 2D regije |
| `ISODRAFT` |  | ISODRAFT: izometrijsko crtanje uključeno ili isključeno, ili izravno na lijevu, gornju ili desnu ravninu. Dok je uključeno, ortogonalno i polarno praćenje slijede dvije osi ravnine, mreža se crta izometrijski, a ELLIPSE ima Izokružnicu. |
| `ISOLATEOBJECTS` | `ISOLATE` | Prikazuje samo odabrane objekte; sve ostalo u ovom prostoru skriveno je do UNISOLATEOBJECTS. Ne sprema se s crtežom. |
| `ISOPLANE` |  | ISOPLANE: odaberite izometrijsku ravninu za crtanje: lijevu, gornju ili desnu. Enter prelazi na sljedeću, kao što F5 radi dok je izometrijsko crtanje uključeno. |
| `JOIN` | `J` | Spaja linije, lukove i polilinije koje se sastaju kraj do kraja u jednu polilinij; linije na jednoj liniji u jednu liniju (J) |
| `LASER` | `LASERCUT` | Otvara ploču Laser: šalje slojeve laserskom rezaču ili graviraču (GRBL G-kod) |
| `LASSOMODE` |  | Pritisak i povlačenje crtaju laso (1) ili pravokutnik (0) |
| `LAYDEL` |  | Briše sloj i svaki objekt na njemu (u modelu, na listovima i u blokovima) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otvara upravitelja slojeva: svaki sloj u jednoj tablici |
| `LAYERPANEL` |  | Prikazuje ploču slojeva |
| `LAYFRZ` |  | Zamrzava sloj svakog objekta koji odaberete |
| `LAYGROUP` | `LG` | Grupira slojeve u mape na ploči Slojevi. |
| `LAYISO` |  | Izolira slojeve odabranih objekata (svi ostali slojevi isključeni) |
| `LAYLOCKFADE` |  | Postavlja koliko objekti na zaključanim slojevima blijede i može li ih klik odabrati. |
| `LAYMCUR` |  | Postavlja sloj objekta koji odaberete kao aktivni |
| `LAYMRG` |  | Spaja slojeve: njihovi objekti prelaze na ciljni sloj, a spojeni slojevi nestaju |
| `LAYOFF` |  | Isključuje sloj svakog objekta koji odaberete |
| `LAYON` |  | Uključuje svaki sloj |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Novi list sa zaglavljem i viewportom |
| `LAYTHW` |  | Odmrzava svaki sloj |
| `LAYUNISO` |  | Ponovno uključuje slojeve koje je LAYISO isključio |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pretvara tekst upisan starim vijetnamskim fontovima (TCVN3 / ABC fontovi kao što je .VnTime, i VNI fontovi kao što je VNI-Times) u Unicode. Takav tekst se već prikazuje onako kako glasi; ova naredba ga trajno prepisuje, uz brojanje i jedan korak poništavanja. |
| `LENGTHEN` | `LEN` | Produljuje ili skraćuje linije, lukove i polilinije: za iznos, postotak, na ukupnu duljinu ili povlačenjem (LEN) |
| `LIBRARY` | `LIB` | Ploča knjižnice: postavljanje stavki, provjera ažuriranja, zasluge |
| `LIMITS` |  | Postavlja granice crteža: ON, OFF, ili donji lijevi i gornji desni kut. Kad su granice uključene, točke izvan njih se odbijaju |
| `LINE` | `L` | Ravni segmenti, svaki kao zaseban objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Tip linije koji novi objekti dobivaju (po sloju, po bloku ili imenovani) |
| `LINKVIEWS` | `SYNCVIEWS` | Pomiče i zumira sve okvire zajedno (podijeljeni zaslon), za usporedbu dvaju crteža ili revizija |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ili VLIDE) otvara LISP uređivač: prozor za pisanje, učitavanje i isprobavanje rutine. Učitavanje u crtež čita svaki oblik, kao što to čini učitavanje datoteke naredbom APPLOAD, i stvara njezine naredbe. Pokreni odabir izvršava odabrane oblike ili oblik u kojem je kursor. Konzola prikazuje što je rutina ispisala i svaku pogrešku s njezinim retkom. Odgovarajuća zagrada označava se dok tipkate, a Enter uvlači novi redak. New, Open i Save rade s datotekom .lsp. Popisi uz tekst prikazuju funkcije koje rutina definira, one koje poziva a ovaj LISP ih još nema, i svaku funkciju koju ima. Prozor ne blokira crtež, pa rutina može tražiti točke; Stop ili Esc završava rutinu koja se izvodi. |
| `LIST` | `LI`, `LS` | Opisuje objekte u povijesti |
| `LTSCALE` | `LTS` | Mjerilo tipa linije crteža (svaka crtica i razmak množe se s njim) |
| `LWDISPLAY` | `LWT` | Prikazuje ili skriva debljine linija na zaslonu (gumb LWT u statusnoj traci) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Debljina linije koju novi objekti dobivaju (po sloju, po bloku, zadano ili mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Karte slojeva ispod prostora modela: koordinatni sustav crteža, pločice, WMS, WMTS, ArcGIS, slike |
| `MASSPROP` |  | MASSPROP: svojstva presjeka regija i zatvorenih objekata: površina, opseg, težište, momenti i produkt inercije, radijusi tromosti i glavne osi. Točno za linije i lukove. Može zapisati izvješće u tekstualnu datoteku. |
| `MATCHPROP` | `MA`, `PAINTER` | Usklađuje svojstva: kopira sloj, boju i još toga s jednog objekta na druge (MA) |
| `MEASURE` | `ME` | MEASURE (ME): oznaka svake zadane duljine duž linije, luka, kružnice, polilinije, splinea ili elipse, od kraja najbližeg vašem odabiru. Točke ili, uz Blok, blok na svakoj oznaci. |
| `MEASUREGEOM` | `MEA` | Mjeri udaljenost, radijus, kut ili površinu (MEA) |
| `MINSERT` |  | MINSERT: postavlja blok u redcima i stupcima odjednom. Svaki je zasebna referenca, pa možete pomaknuti ili izbrisati bilo koju od njih. |
| `MIRROR` | `MI` | Zrcali objekte preko linije |
| `MLEADER` | `MLD`, `MLEAD` | Višestruka vodilica: strelica, vodilica i bilješka, kao jedan objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Poravnava višestruke vodilice s jednom od njih duž smjera, na jednakom razmaku, ili ih raspoređuje između dviju točaka (MLA) |
| `MLEADERCOLLECT` | `MLC` | Skuplja nekoliko višestrukih vodilica u jednu: njihove blokove u redu ili stupcu, ili njihove bilješke jednu ispod druge (MLC) |
| `MLEADEREDIT` | `MLE` | Dodaje ili uklanja vodilice višestruke vodilice; mijenja njezin sadržaj između teksta i bloka (MLE) |
| `MLINE` |  | Crta paralelne linije zajedno, spojene u kutovima. |
| `MOVE` | `M` | Pomiče objekte prema baznoj točki i drugoj točki |
| `MSPACE` | `MS` | Radi na modelu kroz viewport otvorenog lista (ili dvostruki klik unutar viewporta). |
| `MTEXT` | `MT`, `T` | Tekst odlomka: povucite njegovu širinu, zatim upisujte na mjestu; Enter započinje novi odlomak (T) |
| `MVIEW` | `MV` | Viewport na model, na layoutu |
| `NAMEDVIEW` | `NV`, `VIEWS` | Imenovani pogledi: sprema pogled na zaslonu (ili prozor) pod nazivom i vraća se na njega (NV) |
| `NCOPY` |  | Kopira objekte iz reference bloka ili povezanog crteža u crtež, bez rastavljanja. |
| `NEARBY` |  | Kaže što leži blizu kursora, najbliže prvo, s udaljenosti i stranom. |
| `NEW` |  | Započinje novi crtež |
| `OBJECTSCALE` | `OBJSCALE` | Mjerila anotacije anotativnog teksta i kota: dodaje mjerilo, briše jedno, dodaje trenutno mjerilo ili ih popisuje (svaki viewport ih prikazuje u veličini za svoje mjerilo) |
| `OBJOUT` |  | Izvozi 3D model kao OBJ |
| `OFFSET` | `O` | Paralelne kopije na udaljenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kako OFFSET zatvara praznine na vanjskim kutovima polilinije. 0 produljuje segmente, 1 dodaje luk, 2 dodaje ravni rez. Zadržava se za ovu sesiju. |
| `OLELIST` | `OLES` | Popisuje OLE objekte koje crtež sadrži i stavlja kopiju slike jednog na mjesto koje odaberete |
| `OPEN` |  | Otvara DWG ili DXF s ovog računala |
| `OPENIN3D` |  | Otvara ovaj crtež u aplikaciji za 3D modeliranje, u novoj kartici (ništa se ne učitava) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otvara izbornik hvatanja objekata: odaberite koja su hvatanja uključena. Također desni klik na Hvatanje u statusnoj traci. |
| `OVERKILL` |  | Briše dvostruke objekte i spaja preklapajuće ili kraj-do-kraja linije i lukove, unutar tolerancije. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Ploča Parametri: korisnički parametri i kotna ograničenja u jednoj tablici |
| `PARTSLIST` | `PLIST` | Tablica popisa dijelova svakog standardnog dijela i čeličnog profila postavljenog iz knjižnice |
| `PASTEAREA` | `PAREA` | Zalijepi područje kopirano u programu MarkupCraft (Kopiraj područje) u stvarnoj veličini, kao sliku. |
| `PASTEBLOCK` |  | PASTEBLOCK: zalijepi ono što ste kopirali kao jedan blok. Blok dobiva vlastiti naziv; RENAME mu daje vaš. |
| `PASTECLIP` |  | Zalijepi međuspremnik: prati kursor, kliknite gdje ide (Ctrl+V) |
| `PASTEORIG` |  | Zalijepi međuspremnik na koordinate iz kojih je kopiran (Ctrl+Shift+V) |
| `PDF` |  | Daje CadCraftu PDF datoteke koje podloge crteža koriste |
| `PDFADJUST` |  | Prigušuje, mijenja kontrast, prikazuje jednobojno ili isključuje PDF podlogu. |
| `PDFATTACH` | `PDFATT` | Priključuje stranicu PDF-a kao podlogu (PDFATTACH) |
| `PDFCLIP` |  | Izrezuje PDF podlogu na pravokutnik ili poligon |
| `PDFIMPORT` | `PDFIM` | Pretvara linije, ispune i tekst stranice PDF-a u objekte crteža (PDFIMPORT) |
| `PDFLAYERS` |  | Uključuje ili isključuje slojeve PDF podloge |
| `PEDIT` | `PE` | Uređuje polilinije: zatvara, otvara, spaja, širina, prilagođena krivulja, spline krivulja, poništi krivulju, generiranje tipa linije, obrni; linije, lukovi i splineovi mogu se pretvoriti u polilinije |
| `PHOTOSKETCH` | `PSK` | Pretvara fotografiju ručne skice na papiru u linije i lukove u mjerilu, ispravljajući perspektivu i dajući svakoj boji olovke vlastiti sloj. |
| `PICKSTYLE` |  | PICKSTYLE: odabir jednog objekta grupe odabire cijelu grupu (1, početna postavka) ili samo taj objekt (0). Zadržava se za ovu sesiju. |
| `PLAN` |  | Okreće pogled tako da X os UCS-a (trenutni ucs, spremljeni Ucs ili World) bude vodoravna na zaslonu. Ništa u crtežu se ne pomiče. |
| `PLINE` | `PL` | Polilinija od segmenata linija i lukova |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plotanje u PDF: layout ili model u mjerilu |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tablice stilova plotanja: postavlja kako se svaka boja ispisuje (boja, crna, siva, tinta, debljina linije); čuva se s crtežom (STYLESMANAGER) |
| `POINT` | `PO` | Objekti točke |
| `POINTCLOUD` | `PC` | priloženi oblak točaka: isječak, visina, debljina, boja, veličina, vidljivo, zumiranje, odvajanje |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | priloži oblak točaka (LAS, LAZ, XYZ, PTS) ispod crteža |
| `POLARANG` |  | Korak polarnog praćenja u stupnjevima (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravilni poligon |
| `PRESSPULL` |  | Gura ili vuče plohu punog tijela (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otvara ploču Svojstva (također Ctrl+1, ili dvostruki klik na objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Sklapa ploču Svojstva do ruba prozora |
| `PSPACE` | `PS` | Izlazi iz viewporta u kojem radite i vraća se na list (ili dvostruki klik izvan njega). |
| `PUBLISH` | `-PUBLISH` | Plota nekoliko ili sve listove u jedan PDF (stranica i oznaka po listu) |
| `PURGE` | `PU` | Uklanja definicije blokova koje ništa ne koristi |
| `QDIM` |  | Brza kota: kotira nekoliko objekata odjednom (kontinuirano, bazno, naizmjenično, ordinata, radijus ili promjer) |
| `QPMODE` | `QP` | Brza svojstva uz kursor uključena ili isključena |
| `QSELECT` | `QS` | Brzi odabir: svaki objekt vrste čiji se sloj, boja, veličina ili naziv podudara (QS) |
| `RASTERSNAP` |  | Uključuje ili isključuje hvatanje za linije skeniranih listova. |
| `RAY` |  | Zraka: konstrukcijska linija iz točke, beskonačna u jednom smjeru. |
| `RECOVER` |  | Otvara oštećenu datoteku DXF ili DWG: preskače ono što se ne može pročitati umjesto da odbije datoteku, kaže što je preskočeno, zatim provjerava i popravlja crtež kao što to radi AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zatvorena polilinija iz dva kuta |
| `REDLINE` | `RDL` | Redline u reviziju: čita paket redline koji je izradio MarkupCraft, prihvaća ili odbija svaku promjenu, označava prihvaćene oblakom s dnevnikom revizija i sprema datoteku odgovora (RDL) |
| `REDO` |  | Ponavlja ono što je poništeno |
| `REFCLOSE` |  | Završava uređivanje bloka na mjestu: sprema ga ili odbacuje promjene |
| `REFEDIT` |  | Uređuje blok na mjestu gdje se nalazi njegova referenca, dok ostatak crteža blijedi; REFCLOSE ga sprema |
| `REGEN` | `RE` | Ponovno izrađuje ono što je nacrtano na ovoj kartici iz crteža |
| `REGENALL` | `REA` | Ponovno izrađuje ono što je nacrtano na svakoj kartici, okviru i otvorenom crtežu |
| `REGION` | `REG` | REGION (REG): izrađuje ravna područja (regije) od zatvorenih objekata, ili od linija, lukova i polilinija koje zatvaraju petlju kraj do kraja. UNION, SUBTRACT i INTERSECT zatim kombiniraju regije, a MASSPROP daje njihova svojstva presjeka. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrira nekoliko skeniranja: postavlja ih u jedan okvir prema odabranim parovima točaka ili ciljevima, dorađuje s ICP-om, izvozi jednu datoteku LAS ili E57 |
| `REINIT` |  | Ponovno učitava vašu datoteku aliasa |
| `RENAME` | `-RENAME`, `REN` | Preimenuje sloj ili blok (svaki objekt ili referenca slijedi) |
| `REVCLOUD` | `RC` | Revizijski oblak: zaobljuje pravokutnik, poligon, slobodnu putanju ili objekt (RC) |
| `REVOLVE` | `REV` | Okreće zatvorene 2D objekte oko osi u puna tijela (3D) |
| `ROTATE` | `RO` | Rotira objekte oko bazne točke |
| `SAMPLES` | `SAMPLE` | Otvara jedan od primjernih crteža programa CadCraft (arhitektonski skup, izvedeno stanje) za učenje |
| `SAVE` | `QSAVE` | Preuzima crtež u njegovom formatu (DWG ili DXF) |
| `SAVEAS` |  | Preuzima crtež kao DWG ili DXF: odaberite koji |
| `SAYSEL` |  | Kaže što je odabrano, jednu rečenicu za svaki. |
| `SCALE` | `SC` | Skalira objekte oko bazne točke |
| `SCALELISTEDIT` | `SCALELIST` | Dodaje, uređuje i briše vlastita mjerila crteža; pojavljuju se na popisima mjerila viewporta i plotanja te se spremaju u datoteku (SCALELIST) |
| `SCANALIGN` | `SCL` | Poravnava skenirani list prema dvjema točkama: pomiče, rotira i, ako želite, skalira ga. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Umeće skenirani crtež: PNG, JPEG ili TIFF (jednu stranicu ili sve stranice višestraničke datoteke) ili stranicu PDF-a koja je slika. |
| `SCANCLEAN` | `SCC` | Pretvara skenirani list u crno-bijelo i uklanja mrlje. |
| `SCANCROP` | `SCR` | Kadrira skenirani list na prozor. |
| `SCANDESKEW` | `SCD` | Pronalazi kut pod kojim leže duge linije skeniranog lista i okreće list da bude ravan kad prihvatite kut. |
| `SCANERASE` | `SCE` | Briše područje skeniranog lista: pravokutnik, poligon ili laso. |
| `SCANINFO` | `SCI` | Prikazuje izvornu datoteku skeniranog lista i korake poduzete od tada. |
| `SCANSCALE` | `SCS` | Skalira skenirani list: odaberite dvije točke na njemu i upišite stvarnu udaljenost između njih. |
| `SCANTRACE` | `SCT` | Pretvara skenirani list u linije i lukove na novom sloju, uz toleranciju koju postavite. Tekst i šrafure ostaju kao raster. |
| `SELECT` |  | Odabire objekte sada (za Prethodni, P, u sljedećoj naredbi) |
| `SELECTALL` | `AI_SELALL` | Odabire svaki objekt koji možete uređivati na ovoj kartici (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Odabire svaki objekt sličan onima koje odaberete: iste vrste, sloja i boje (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Prikazuje ploču Skup listova: listove iz mnogih crteža, numerirane, objavljene kao jedan PDF. |
| `SHORTCUTS` | `KEYS` | Dodjeljuje bilo kojoj naredbi vlastitu tipku (Ctrl ili Alt sa slovom, ili slobodnu funkcijsku tipku), spremljenu u ovom pregledniku ili aplikaciji za računalo. |
| `SHXFONTS` | `SHX` | Daje CadCraftu SHX fontove iz mape ili datoteka, tako da stilovi teksta koji ih navode crtaju njima (popis, ukloni, obrni) |
| `SKETCHFIX` | `SKF` | Crta slobodne poteze; svaki postaje čista linija, kružnica, luk, pravokutnik ili polilinija, poravnata i spojena s ostalima. |
| `SKETCHLIVE` | `SKL` | Skicira olovkom: svaki potez postaje precizna linija, kružnica, luk ili pravokutnik kad podignete olovku, hvata se za crtež, s veličinom koju možete prepisati upisom. |
| `SPLINE` | `SPL` | Crta spline kroz točke (ili s kontrolnim poligonom), ili pretvara polilinije u spline |
| `SPLINEDIT` | `SPE` | Uređuje spline: točke prilagodbe, kontrolne točke i težine, otvara ili zatvara ga, obrće ga ili pretvara u polilinije |
| `SPLIT` |  | Dijeli područje crtanja na okvire (kao VPORTS na modelu; i s lista) |
| `STEELMEMBER` | `SMEMBER` | Čelični štap u 3D iz standardnog profila: dvije točke (greda) ili bazna točka i visina (Stup) |
| `STLOUT` |  | Izvozi 3D model kao STL (milimetri) |
| `STRETCH` | `S` | Rasteže: povucite prozor križanja preko krajeva za pomicanje; ono što je unutra se pomiče, ostatak ostaje (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Stilovi teksta: font, visina, širina i nagib koje novi tekst preuzima (dijaloški okvir; -STYLE u naredbenom retku) |
| `SUBTRACT` | `SU` | Oduzima puna tijela od drugih (3D), ili 2D regije od regija |
| `SWBOUT` | `SWMACRO` | Preuzima makronaredbu za SolidWorks (.swb) koja model ponovno izrađuje kao jednu ograničenu skicu |
| `SWEEP` |  | Provlači zatvorene 2D objekte duž putanje (linija, polilinija, luk, kružnica) u puna tijela (3D) |
| `TABLE` | `TB` | Izrađuje tablicu: retke i stupce, ili iz ćelija proračunske tablice u međuspremniku ili CSV datoteci |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Uređuje tablicu: upisivanje u ćeliju, umetanje i brisanje redaka i stupaca, veličine, spojene ćelije, poravnanje |
| `TABLEEXPORT` |  | Sprema prikazano u tablici kao CSV datoteku |
| `TABLEPASTE` | `PASTETABLE` | Izrađuje tablicu iz ćelija proračunske tablice u međuspremniku |
| `TABLESTYLE` | `TS` | Stilovi tablice: visine teksta, poravnanje, margina i obrube za retke naslova, zaglavlja i podataka |
| `TAGS` |  | Oznake na referencama blokova: definira oznaku (vrsta, dopuštene vrijednosti, blokovi na koje se odnosi), postavlja je na odabrane reference i popisuje ih kao specifikaciju koju možete spremiti kao CSV |
| `TEXT` | `DT`, `DTEXT` | Jednoredni tekst; Enter započinje sljedeći redak |
| `TEXTEDIT` | `ED`, `DDEDIT` | Uređuje tekst na mjestu: odaberite tekst (ili dvostruki klik na njega) (ED) |
| `TEXTMASK` | `TMASK` | Stavlja pozadinsku masku iza teksta (pozadina crteža ili boja), ili je uklanja. |
| `TEXTTOFRONT` |  | Dovodi sav tekst, kote i vodilice ispred svega ostalog. |
| `TOOLBAR` |  | Odabire što gumbi alatne trake prikazuju: ikone i tekst, samo ikone ili samo tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Stavlja alatnu traku na vrh, dno, lijevo ili desno od prozora |
| `TOOLBARROWS` |  | Odabire koliko redaka alatna traka koristi: prijelom da stane, 2 ili 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Postavlja trake iznad crteža na standardne ili kompaktne |
| `TOUCHCROSSHAIR` | `TCX` | Pomaknuti nitni križ za crtanje prstom: jedan prst pomiče nitni križ koji je iznad njega i sa strane, pa prst ne prekriva točku odabira. Podizanje prsta ništa ne odabire; gumb Klik ili dodir drugim prstom odabire na nitnom križu, a držanje Klika dok pomičete povlači. Dugi pritisak ili gumb Enter je Enter. Dva prsta pomiču prikaz (pan) i zumiraju. Opcije: ON, OFF, Auto (uključeno samo tamo gdje je prst jedini pokazivač), Udaljenost (D), Strana (S). |
| `TOUR` | `TUTORIAL` | Ponovno pokreće vodič korak po korak za prvi crtež od šest koraka |
| `TRIM` | `TR` | Skraćuje objekte do mjesta gdje ih druge sijeku: kliknite dio, povucite preko nekoliko ili Shift+klik za produljenje |
| `TRIMEXTENDMODE` |  | Kako počinju TRIM i EXTEND: 1 Brzo (svaki objekt je rub rezanja ili granica), 0 Standardno (prvo odaberite rubove) |
| `TTR` |  | Kružnica tangentna na dva objekta, s radijusom koji zadajete (isto kao CIRCLE T). |
| `TURNLEFT` |  | Okreće pogled 90° ulijevo (suprotno kazaljci na satu): UCS Z -90, a pogled slijedi. Ništa u crtežu se ne pomiče. |
| `TURNRIGHT` |  | Okreće pogled 90° udesno (u smjeru kazaljke na satu): UCS Z 90, a pogled slijedi. Ništa u crtežu se ne pomiče. |
| `TURNWORLD` |  | Vraća na svijet: UCS World, a pogled je ponovno vodoravan. |
| `TXT2MTXT` | `T2M` | Spaja jednoredne tekstove u jedan tekst odlomka, odozgo prema dolje. |
| `UCS` |  | Vaš vlastiti koordinatni sustav: ishodište i X os (ishodište, kut Z, 3point, OBject, Prethodni, Svijet, NAmed). Točke koje upišete, ortogonalno, polarno praćenje, mreža i novi tekst slijede ga; pogled se okreće tako da je njegova X os vodoravna. Ništa u crtežu se ne pomiče. |
| `UNDO` | `U` | Poništava posljednju naredbu |
| `UNGROUP` |  | UNGROUP: rastavlja grupe. Odaberite objekte grupa ili navedite Name. Objekti ostaju u crtežu. |
| `UNION` | `UNI` | Spaja puna tijela u jedno (3D), ili 2D regije u jednu regiju |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponovno prikazuje svaki objekt skriven naredbom ISOLATEOBJECTS ili HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kako se duljine prikazuju i upisuju: decimalno, stope i inči, razlomci (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponovno izračunava polja i odabire kada se ona sama ažuriraju |
| `USDOUT` |  | Izvozi 3D model kao USD (tekst .usda, binarni .usdc ili paket .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardni 3D pogledi, perspektivni ili paralelni (3D) |
| `VIEWBASE` | `FLATSHOT` | Postavlja ravan 2D pogled 3D punih tijela (sprijeda, odozgo, sa strane ili izometrijski, skrivene linije isprekidane) na list ili u model |
| `VIEWLABEL` | `VL` | Naslov pogleda na listu koji prikazuje naziv pogleda svog viewporta i mijenja se s njim. |
| `VOICE` |  | Uključuje ili isključuje izgovorene naredbe. Prepoznaju se na ovom računalu. |
| `VPCLIP` |  | Izrezuje viewport lista na zatvoreni objekt ili nacrtani poligon; Delete ga ponovno pretvara u pravokutnik |
| `VPLAYER` |  | Zamrzava ili odmrzava slojeve samo u nekim viewportima (Freeze, Thaw, Reset), i odabire koji slojevi nove viewporte započinju zamrznuti (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dijeli područje crtanja na okvire, svaki sa svojim pogledom (na listu: viewport, kao MVIEW) |
| `VPVIEW` |  | Postavlja što viewport prikazuje: odaberite prozor na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizualni stil 3D pogleda: sjenčano, rubovi, skrivena linija, žičani model, rendgen |
| `WALL` | `WA` | Crta 2D zidove kao polilinija. Spajaju se i nose vrata i prozore. |
| `WALLARC` | `WARC` | Crta luk zidova. Tlocrtni zidovi su ravni, pa se luk crta kao kratki ravni zidovi (po 15 stupnjeva) koji se spajaju. |
| `WALLDELSEG` |  | Briše dio zida između dviju točaka. Ono što ostane ostaje kao jedan ili dva zida. |
| `WALLDIM` |  | Upišite novu vrijednost kote: zid na njezinu dalekom kraju pomiče se okomito na sebe, zid na prvom kraju ostaje, a zidovi spojeni s njim slijede. |
| `WALLDISJOIN` |  | Odaberite zid blizu jednog kraja da zabranite spajanje na tom kraju: kraj se crta okomito i ništa ga ne slijedi. Odaberite ga ponovno da dopustite spajanje. |
| `WALLGRID` |  | Zaključava zid na liniju mreže: duž nje, ili jedan kraj na njoj. Pomaknite liniju s GRIDMOVE i zid slijedi. |
| `WALLHOLD` |  | Poravnava i zaključava: zid zadržava svoje mjesto u odnosu na drugi zid (na svojoj liniji ili na udaljenosti koju ima). Ako se jedan pomakne, drugi slijedi. |
| `WALLHOLDDIM` |  | Zaključava udaljenost između dvaju paralelnih zidova. Ako se jedan pomakne, drugi slijedi da je zadrži. |
| `WALLHOLDS` |  | Popisuje zaključavanja zidova. |
| `WALLJOINS` |  | Daje svakom zidu starijeg crteža njegov identifikator i sprema spojeve među njima. To se događa i pri vašoj prvoj promjeni. |
| `WALLJOINSTYLE` |  | Kliknite kut gdje se dva zida sastaju kraj do kraja da promijenite način crtanja: pokos (mitre), sučeljeno (butt), izravnano (square off). T mijenja koji zid prolazi kroz njega. |
| `WALLOFFSET` | `WO` | Pomiče zid okomito na sebe za udaljenost (zidovi spojeni s njim slijede), ili izrađuje kopiju na toj udaljenosti. |
| `WALLPICK` |  | Izrađuje zidove od linija ili polilinija u crtežu, s linijama spojenim na njih ako kažete Da. |
| `WALLPOLY` | `WP` | Crta zidove oko pravilnog poligona od 3 do 64 stranice, kao POLYGON. |
| `WALLRECT` | `WR` | Crta četiri spojena zida od dvaju suprotnih kutova, kao RECTANG. |
| `WALLREJOIN` |  | Ponovno pretvara dva dijela zida u jedan zid. Prvi zadržava svoje mjesto u crtežu. |
| `WALLROT` |  | Crta četiri spojena zida kao pravokutnik zakrenut pod bilo kojim kutom: prva stranica, zatim koliko je daleko. |
| `WALLSPLIT` | `WS` | Dijeli zid na dva u točki ili tamo gdje ga siječe drugi zid. Dijelovi ostaju spojeni osim ako ne zatražite prazninu ili slobodne krajeve. Vrata i prozori idu sa svojim dijelom. |
| `WALLSPLITGAP` |  | Dijeli zid ostavljajući prazninu: upišite prazninu, odaberite zid, zatim točku. Dijelovi zadržavaju slobodne krajeve i mogu se ponovno spojiti. |
| `WALLSTRETCH` |  | Rasteže prozorom: krajevi zidova unutar njega se pomiču, zidovi potpuno unutar njega pomiču se cijeli, a zidovi koji naliježu na njegove strane kližu s njima. |
| `WALLTAN` |  | Nastavlja zid lukom koji iz njega izlazi duž zida (crta se kao kratki ravni zidovi). |
| `WALLTRACE` |  | Izrađuje zidove oko najmanjeg zatvorenog područja linija i zidova oko točke na koju kliknete. |
| `WALLUNHOLD` |  | Skida zaključavanja sa zida (i zaključavanja drugih zidova na njega). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapisuje blok, neke objekte ili cijeli crtež u novu datoteku DWG ili DXF (W) |
| `WEDGE` | `WE` | Klin: dva kuta i visina; nagnut je od prvog kuta (3D) |
| `WHEREAMI` | `WHERE` | Kaže gdje je kursor. |
| `WHOHAS` |  | Kaže tko ima otvoren crtež. CadCraft Studio uz svaki otvoreni crtež čuva malu datoteku zaključavanja (Plan.dwg.cclock: tko, od kada, koja verzija) i uklanja je pri zatvaranju. Opcije: Current (otvoreni crtež), File (odaberite jednu), FOlder (svaki crtež u mapi koji je negdje otvoren; to također omogućuje Studiju da čuva datoteke zaključavanja u toj mapi), Path (upišite jednu), Name (naziv koji drugi vide). Zaključavanje koje se ne osvježi pet minuta smatra se zastarjelim. Nije dostupno u pregledniku. |
| `WINDOW` | `WN` | Postavlja prozor u zid. |
| `XATTACH` | `XA` | Povezuje drugi DWG ili DXF u ovaj crtež, prikazan samo za čitanje (XREF ih popisuje i ponovno učitava) |
| `XCLIP` | `XC` | Izrezuje reference blokova i povezane crteže na pravokutnik ili poligon, ili uklanja izrez. |
| `XLINE` | `XL` | Konstrukcijska linija, beskonačna u oba smjera: kroz dvije točke, horizontalna, vertikalna, pod kutom, koja raspolavlja kut ili pomaknuta od linije. |
| `XREF` | `XR`, `-XREF` | Vanjske reference (Xref): popis, priloži, ponovno učitaj, veži, odvoji |
| `ZOOM` | `Z` | Opseg ili prozor |
