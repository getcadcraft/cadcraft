---
title: Zemljevid ukazov: kaj vnesti
summary: Vsak ukaz, ki ga ima CadCraft, s kratkimi imeni, od A do Z, pripravljen iz samega programa, ter navade iz drugih programov za risanje, ki se razlikujejo.
keywords: zemljevid ukazov, ukazi, kratka imena, bližnjice, prihajam iz, seznam ukazov, kaj vnesti, izbriši, prirezi, enakovredno, razlike
from: 3bdfd3e6
---

CadCraft sprejme imena ukazov in kratka imena, ki jih ljudje poznajo iz drugih programov za risanje: vnesite `L` za črto, `TR` za prirez, `E` za brisanje. Tako za večino ni treba učiti nobene preglednice prevodov: ime, ki ga poznate, je tukaj isto. Spodnji seznam vsebuje vse ukaze, ki jih ima CadCraft, pripravljen iz samega programa. {{key:Enter}} ponovi zadnji ukaz; `HELP` v ukazni vrstici izpiše isti seznam.

Redki, ki niso enaki ali še niso izdelani:

- **Shrani** prenese kopijo v brskalnik ({{cmd:SAVE}}, {{cmd:SAVEAS}}); v CadCraft Studio zapiše datoteko. Glejte [Prihod iz drugih programov za risanje](topic:coming-from).
- **PLOT** naredi PDF (tudi PNG in SVG), s tabelo slogov izrisa; upravitelja nastavitev strani ni.
- **DIMSTYLE** in **PEDIT** sta izdelana; **PEDIT** nima možnosti Uredi oglišče (to naredijo ročice).
- **TABLE** ni izdelana; {{cmd:XREF}}, {{cmd:SPLINE}} in {{cmd:WBLOCK}} so.
- Lastni ukazi rutine (AutoLISP `C:NAME`) se pokažejo, ko jo naložite z {{cmd:APPLOAD}}; tukaj niso navedeni.

## Vsi ukazi (398)

| Ukaz | Kratka imena | Kaj naredi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitirajte 3D-pogled z levim gumbom miške |
| `ACCESS` | `AX` | Vklop ali izklop risanja brez vida: rezultati, izgovorjeni prek bralnika zaslona, kazalec tipkovnice na risbi, zvoki lovljenja in izgovorjeni ukazi. |
| `ALIASEDIT` |  | Uredite bližnjice ukazov v eni besedilni datoteki (znana oblika L, *LINE) |
| `ALIGN` | `AL` | Premaknite in zasukajte objekte tako, da izvorne točke pristanejo na ciljnih točkah (en, dva ali trije pari), po želji pa jih spremenite v merilu |
| `ALIGNPANEL` | `ALP` | Odprite podokno Poravnaj in razporedi |
| `ALIGNTO` |  | Poravnajte levi, srednji, desni, zgornji, sredinski ali spodnji rob izbranih objektov glede na izbor, prvi ali zadnji izbrani objekt ali točko |
| `ANNOALLVISIBLE` | `ANNOALL` | Prikažite opombne objekte pri vsakem merilu ali samo tam, kjer je merilo pogleda (ali risbe) na njihovem seznamu |
| `ANNOSCALE` | `CANNOSCALE` | Nastavite opombno merilo risbe: opombno besedilo in kote se spremenijo tako, da se natisnejo v isti velikosti |
| `APPLOAD` | `AP` | Naložite aplikacije: rutine LISP (.lsp) in njihove datoteke pogovornih oken (.dcl); zagonski paket (AP) |
| `ARC` | `A` | Lok: 3 točke, Začetek/Središče/Konec, Začetek/Središče/Kot, Začetek/Središče/Dolžina, Začetek/Konec/Kot, Začetek/Konec/Smer, Začetek/Konec/Polmer, Središče/Začetek/Konec, Središče/Začetek/Kot, Središče/Začetek/Dolžina, Nadaljuj |
| `AREA` | `AA` | Površina in obseg po točkah ali objektu; Dodaj in Odštej hranita tekočo vsoto (AA) |
| `ARRAY` | `AR` | Kopije v vrsticah in stolpcih ali okoli središča (AR) |
| `ARRAYASSOCIATIVITY` |  | Nastavi, ali ukazi ARRAY ustvarijo polja, ki ostanejo urejljiva (1), ali navadne kopije (0) |
| `ARRAYCLOSE` |  | Konča urejanje izvornih objektov polja |
| `ARRAYEDIT` |  | Spremeni polje, ustvarjeno z možnostjo Pridružen: števila, razmike, izvorne objekte, en element |
| `ARRAYPATH` |  | Kopije objektov vzdolž črte, loka, polilinije ali druge krivulje |
| `ARRAYPOLAR` |  | Kopije okoli središčne točke |
| `ARRAYRECT` |  | Kopije v vrsticah in stolpcih |
| `ASBUILT` | `ASB` | ASBUILT prebere točke izvedenega stanja, ki jih je izmerila ekipa (CSV / TXT, kot jih zapiše EXPORTPOINTS), in jih primerja s točkami risbe: znotraj ali zunaj tolerance, neizmerjene, odvečne. Označi jih na sloju AS-BUILT in prenese poročilo CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Določite atribut (oznako, za katero blok zahteva vrednost), ki ga dodate v blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Uredite vrednosti atributov sklica na blok v ukazni vrstici, enega za drugim (Enter ohrani vrednost) |
| `ATTSYNC` |  | Uskladite sklice bloka z njegovimi definicijami atributov: novi se dodajo s privzetimi vrednostmi, odstranjeni se izpustijo, položaji in besedilo se ponastavijo; vrednosti se ohranijo |
| `AUDIT` |  | Preveri odprto risbo za poškodbe: števila, ki niso končna, objekti brez velikosti, manjkajoči sloji, bloki, slogi in tipi črt, bloki, ki vsebujejo sami sebe, skupni identifikatorji, pokvarjene kote in šrafure. Našteje, kar najde, po vrstah, in pred popravilom vpraša; popravilo je en korak razveljavitve. |
| `AUNITS` | `ANGUNITS` | Kako so koti prikazani in vneseni: decimalne stopinje, stopinje-minute-sekunde ali smeri, npr. N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Samodejno dopolnjevanje risbe vklopljeno ali izklopljeno, ali izpišite, kaj vzorci risbe zdaj predlagajo. |
| `AUTOCONSTRAIN` |  | Dodajte omejitve sovpadanja, vodoravnosti in navpičnosti tam, kjer je geometrija že blizu |
| `AUTODIM` | `ADIM` | Kotirajte po pravilih: skupna velikost, verige vzdolž stranic, odprtine, premeri lukenj in razmik mreže, brez ponavljanja že kotiranega. |
| `AUTOSHEET` | `ASH` | Razporedi liste samodejno: izbere papir in standardna merila ter postavi vsak pogled z napisom in glavo risbe. |
| `BATTMAN` |  | Upravitelj atributov blokov: vrstni red, oznake, pozivi, privzete vrednosti in načini atributov bloka, nato posodobljeni sklici |
| `BCLOSE` |  | Zapri urejevalnik blokov: shrani blok ali zavrži spremembe |
| `BCONVERT` |  | BCONVERT najde geometrijo, ki se ponavlja, in jo spremeni v sklice na blok. Izberite objekte, ki se ponavljajo: najde se vsak drug nabor objektov v odprtem prostoru, ki ima isto geometrijo, premaknjeno in zasukano pod poljubnim kotom, in ob vklopu Zrcaljeno in Merjeno tudi zrcalne slike in kopije druge velikosti. Novemu bloku dajte ime in izhodiščno točko; izbor in vsaka kopija postaneta sklica nanj, vsak s svojim zasukom in merilom. Ali izberite Blok in imenujte obstoječi blok, da najdete ohlapne kopije njegovih objektov. Kopija mora imeti isti sloj, barvo, tip črte in debelino črte, razen če je Lastnosti nastavljena na Prezri. Objekti na zaklenjenih slojih ostanejo nedotaknjeni. En korak razveljavitve. |
| `BEDIT` | `BE` | Urejevalnik blokov: uredite objekte in atribute bloka; BCLOSE shrani (BE) |
| `BLEND` |  | BLEND: zlepek med konci dveh odprtih krivulj, izbranih blizu koncev, da se povežeta. Zveznost: Tangenta sledi obema smerema, Gladko tudi temu, kako se krivita. |
| `BLOCK` | `B`, `BMAKE` | Ustvarite blok iz objektov (postanejo en sklic) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: vsak sklic na en blok postane sklic na drugega, na istem mestu z istim merilom in zasukom. Vrednosti atributov, ki jih imata oba bloka, se ohranijo. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE prikaže podokno Bloki s kurzorjem v filtru. Podokno prikazuje sliko vsakega bloka (najprej tisti, ki so bili nazadnje postavljeni), kot seznam ali mrežo; kliknite sliko ali jo povlecite na risbo, da postavite blok z INSERT. Pod Knjižnice dodajte lastno datoteko DWG ali DXF: njeni bloki so navedeni s slikami in se kopirajo v to risbo, ko jo postavite. V CadCraft Studio je mogoče dodati tudi mapo risb, datoteke in mape pa se zapomnijo. |
| `BOMEDIT` | `BOMCOLUMNS` | Stolpci tabele kosovnice, združevanje, razvrščanje, naslov, skupne vsote in opombe |
| `BOMEXPORT` |  | Shranite tabelo kosovnice kot datoteko .csv |
| `BOMTABLE` | `BOM` | Živa tabela kosovnice ene cone ali celotne risbe |
| `BOMUPDATE` |  | Takoj posodobi vse tabele kosovnice, tudi zamrznjene |
| `BOMZONE` | `BZONE` | Imenovano območje risbe za kosovnico: dva vogala, mnogokotnik ali obris zaprtega objekta |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): izberite točko znotraj zaprtega območja in dobite zaprto polilinijo okoli njega. Loki ostanejo loki. Otoki obrišejo tudi območja znotraj njega. |
| `BOX` |  | Kvader: dva vogala in višina (3D) |
| `BPARAMETER` | `BPARAM` | Še ni izdelano: dodajanje parametra (npr. Vidnost) bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri bloka: poimenovani parametri s formulami in več parametrov vidnosti v enem bloku. Deluje v urejevalniku bloka (izbrane objekte dodelite stanju) in na izbranem sklicu (njegove lastne vrednosti in stanja). |
| `BREAK` | `BR` | Prelomite črto, lok, krog ali polilinijo med dvema točkama (BR) |
| `BREAKATPOINT` |  | Razdelite črto, lok ali polilinijo na dva dela v točki |
| `BREAKLINE` |  | Narišite črto s simbolom preloma; njena velikost in podaljšek čez konce se zapomnita. |
| `BREPLACE` |  | BREPLACE zamenja en blok z drugim. Izbrano: izberite sklice blokov in imenujte blok, ki naj ga nadomesti. Vse: imenujte blok in njegovo zamenjavo; vsak sklic v vseh prostorih in znotraj drugih blokov se spremeni. Sklic ohrani svoje mesto, merilo, zasuk in sloj ter vrednosti atributov, ki jih imata oba bloka; vrednosti, za katere novi blok nima mesta, se opustijo in imenujejo. |
| `BSEARCH` |  | BSEARCH najde bloke. Ime: del imena bloka ali vzorec z * in ?. Atribut: vrednost (ali TAG=vrednost), ki jo imajo atributi sklica. Geometrija: izberite objekte ali en sklic na blok in navedeni bodo bloki, katerih oblika je vsaj 85 % podobna, najboljši prvi; velikost, zasuk in zrcaljenje se ne štejejo. Najdeni sklici v odprtem prostoru so izbrani in pripravljeni za naslednji ukaz. |
| `BURST` |  | Razstavite sklice blokov in ohranite, kar povedo njihovi atributi: vsaka vrednost postane besedilo na sloju atributa. |
| `BVHIDE` | `BVH` | V urejevalniku bloka: skrijte objekte v trenutnem stanju vidnosti. |
| `BVSHOW` | `BVSH` | V urejevalniku bloka: prikažite objekte, ki jih trenutno stanje vidnosti skriva (prikažejo se zbledeli, da jih lahko izberete). |
| `BVSTATE` | `BVS` | V urejevalniku bloka, pri bloku s stanji vidnosti: preklopite na stanje ali dodajte, preimenujte ali izbrišite stanje. |
| `CAL` |  | Izračunajte dolžino ali število: + − * / in oklepaje, kot jih vnesete kjerkoli |
| `CENTERLINE` | `CL` | Središčna črta med dvema črtama: na sredini med njima ali vzdolž simetrale, ko se stikata (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Središčna oznaka: križ v središču kroga ali loka s središčnicami, ki segajo malo čez njega (CM) |
| `CHAMFER` | `CHA` | Pokosite kot med dvema črtama (D dve razdalji, A dolžina in kot, P vsak kot polilinije) |
| `CHSPACE` |  | CHSPACE: premaknite objekte med listom in modelom prek pogleda. Zmanjšajo se ali zasukajo, da izgledajo enako z druge strani. Na listu gredo v model; med delom prek pogleda (MSPACE) pridejo na list. |
| `CIRCLE` | `C` | Središče in polmer, premer, 2 ali 3 točke |
| `CLASS` |  | Postavite izbrane objekte v razred ali brez izbora nastavite aktivni razred (? jih izpiše) |
| `CLASSES` | `CLS` | Podokno Razredi: razredi razvrščajo objekte preko slojev; prikažite, skrijte in oblikujte jih ter jih nadomestite po pogledih (CLS) |
| `COMMANDLINE` | `CMDLINE` | Pripnite ali odpnite ukazno vrstico, naredite jo ene vrstice, nastavite število vrstic zgodovine ali odprite zgodovino (F2) |
| `COMPARESETTINGS` | `CMPSET` | Primerjajte sloge kotiranja, sloge besedila, sloje, liste ali enote: dva v tej risbi ali ta risba proti drugi odprti in kopirajte vrednost. |
| `CONSTRAINTBAR` | `CBAR` | Prikažite ali skrijte vrstice omejitev (Pokaži vse / Skrij vse ali za posamezen objekt) |
| `COPY` | `CO`, `CP` | Kopirajte objekte, kolikorkrat kliknete |
| `COPYBASE` |  | Kopirajte objekte v odložišče z izhodiščno točko, ki jo izberete |
| `COPYCLIP` |  | Kopirajte objekte v odložišče (Ctrl+C); PASTECLIP jih prilepi |
| `COUNT` | `BCOUNT` | Štetje sklicev blokov: izberite enega, da izberete in preštejete vse sklice njegovega bloka |
| `COUNTTABLE` |  | Postavite tabelo števila blokov |
| `CREDITS` |  | Vstavi zasluge knjižnice v risbo kot tabelo. Ponovno zaženite, da tabelo posodobite glede na elemente, ki so zdaj v risbi. |
| `CURSORSIZE` |  | Velikost križca: 100 ga razpne čez risbo od roba do roba (Nastavitve › Kurzor › Celozaslonski način) |
| `CUTCLIP` |  | Izrežite objekte v odložišče (Ctrl+X): kopirajte in nato izbrišite |
| `CYLINDER` | `CYL` | Valj: središče, polmer in višina (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Seznam blokov, njihovih atributov in lastnosti objektov kot tabela v risbi ali datoteki CSV |
| `DATALINK` | `DL` | Tabela iz datoteke CSV, ki si zapomni datoteko, da jo je mogoče znova prebrati |
| `DATALINKUPDATE` | `DLU` | Ponovno preberite datoteko povezave podatkov in znova napolnite njene tabele |
| `DCALIGNED` | `DCALI` | Dimenzijska omejitev: prava razdalja med točkama, točko in črto ali dvema črtama |
| `DCANGULAR` | `DCANG` | Dimenzijska omejitev: kot med dvema črtama ali loka |
| `DCCONVERT` |  | Spremenite kote, narisane na geometriji, ki jo je mogoče omejiti, v dimenzijske omejitve |
| `DCDIAMETER` | `DCDIA` | Dimenzijska omejitev: premer kroga ali loka |
| `DCDISPLAY` |  | Prikažite ali skrijte dimenzijske omejitve na risbi |
| `DCHORIZONTAL` | `DCHOR` | Dimenzijska omejitev: vodoravna razdalja |
| `DCLINEAR` | `DCLIN` | Dimenzijska omejitev: vodoravna ali navpična razdalja, od mesta, kamor jo postavite |
| `DCRADIUS` | `DCRAD` | Dimenzijska omejitev: polmer kroga ali loka |
| `DCVERTICAL` | `DCVER` | Dimenzijska omejitev: navpična razdalja |
| `DELBLOCKS` |  | Izbrišite bloke: vsak sklic (tudi gnezdene, na vsakem listu) in definicije |
| `DELCONSTRAINT` | `DELCON` | Odstranite vse omejitve (geometrijske in dimenzijske) iz izbranih objektov |
| `DELOPENING` |  | Odstranite vrata ali okno iz stene. |
| `DESCRIBE` | `DESC` | Povejte, kaj risba vsebuje: koliko objektov, katere vrste, kako velikih, kaj je izbrano. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Počisti izbor (Esc) |
| `DETAILS` | `DET` | Detajli vašega podjetja, najdeni za to, kar risate: poiščite, dodajte blok, seznam, odstranite, vklopite ali izklopite ponudbe. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Narišite diagram iz besedila: diagram poteka Mermaid, diagram komponent PlantUML, D2, seznam od-do ali XML draw.io kot bloke in povezave, ki jih lahko urejate |
| `DIMALIGNED` | `DAL`, `DIMALI` | Prava razdalja med dvema točkama |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kot med dvema črtama, lokom ali po treh točkah |
| `DIMARC` | `DAR` | Kota dolžine loka: razdalja vzdolž loka s simbolom loka (DAR) |
| `DIMASZ` |  | Nastavitev kotiranja: velikost puščice |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kote zložene od ene osnovne črte |
| `DIMBREAK` | `DBREAK` | Prelomite pomožne in merilne črte tam, kjer sekajo druge objekte (Samodejno), med dvema točkama (Ročno) ali odstranite preloma |
| `DIMCONSTRAINT` | `DCON` | Dimenzijske omejitve: linearne, poravnane, kotne, polmer, premer, pretvori |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Veriga kot, vsaka od konca zadnje |
| `DIMDEC` |  | Nastavitev kotiranja: decimalna mesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Premer loka ali kroga |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Sprostite kote od objektov, na katere so vezane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Spremenite besedilo kote (Domov, Novo besedilo, Zasukaj) ali nagnite pomožne črte (Poševno) |
| `DIMEXE` |  | Nastavitev kotiranja: podaljšek čez merilno črto |
| `DIMEXO` |  | Nastavitev kotiranja: odmik od izhodišča |
| `DIMGAP` |  | Nastavitev kotiranja: razmik okoli besedila |
| `DIMINSPECT` |  | Kota pregleda: okvir okoli vrednosti z oznako in pogostostjo preverjanja dela |
| `DIMJOGGED` | `DJO`, `JOG` | Kota polmera z zlomom: polmer narisan iz bližje točke, ko je središče daleč (DJO) |
| `DIMJOGLINE` | `DJL` | Dodajte simbol zloma na linearno ali poravnano merilno črto, da pokažete, da razdalja ni narisana v merilu (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vodoravna ali navpična razdalja (R za poljuben kot) |
| `DIMLUNIT` |  | Nastavitev kotiranja: format dolžine (1 znanstveni, 2 decimalni, 3 inženirski, 4 arhitekturni, 5 ulomki) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinatna kota: razdalja X ali Y točke od izhodišča UCS, na vodilki (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Prepišite spremenljivke kotiranja na izbranih kotah, ne da bi spremenili njihov slog; Počisti vrne slog (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Polmer loka ali kroga |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Povežite točke kote z objekti, da sledi in se znova meri, ko se premaknejo (DRE) |
| `DIMSCALE` |  | Nastavitev kotiranja: splošno merilo (velikosti × to) |
| `DIMSPACE` |  | Enakomeren razmik med vzporednimi kotami, merjen od osnovne kote (0 jih poravna, Samodejno je dvakratna višina besedila) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Ustvarite, spremenite, nastavite trenutnega, izbrišite, uporabite in primerjajte poimenovane sloge kotiranja (pogovorno okno; -DIMSTYLE v ukazni vrstici) |
| `DIMTEDIT` | `DIMTED` | Premaknite besedilo kote levo, desno ali na sredino merilne črte ali ga obrnite |
| `DIMTEXTUNIT` | `DTU` | Besedilo kote v mm, cm, m ali km ali v lastnih enotah risbe: izbrane kote, sicer nove (DTU) |
| `DIMTXT` |  | Nastavitev kotiranja: višina besedila |
| `DIST` | `DI` | Razdalja in kot med dvema točkama |
| `DISTRIBUTE` |  | Enakomerno razporedite izbrane objekte, vodoravno ali navpično: enaki koraki med središči ali enaki razmiki; zunanja dva ostaneta |
| `DIVIDE` | `DIV` | DIVIDE (DIV): oznake, ki razdelijo črto, lok, krog, polilinijo, zlepek ali elipso na enake dele. Točke ali z Blokom blok pri vsaki oznaki. |
| `DOCUMENTS` | `DOCS` | Odprite podokno Dokumenti: preverite risbe ven in noter, revizije, stanja izdaje in odobritve za mapo projekta |
| `DOOR` | `DR` | Postavite vrata v steno. Stran, na katero kliknete, je stran, v katero se odpirajo. |
| `DRAWORDER` |  | Spremenite vrstni red risanja: objekte prenesite v ospredje, pošljite v ozadje ali jih postavite nad ali pod druge objekte. |
| `DUPLICATE` | `DUP` | Kopija, ki se premika s kazalcem: kliknite, da jo postavite (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Lastnosti risbe: naslov, avtor in ostalo ter vaši lastni pari imen in vrednosti |
| `DXFOUT` |  | Prenesite risbo kot DXF R12 (Shrani ohrani svojo obliko) |
| `EATTEDIT` | `DDATTE` | Uredite atribute sklica na blok: vrednosti, besedilo in lastnosti, en atribut naenkrat |
| `ELLIPSE` | `EL` | Krajišči osi in druga polos |
| `ERASE` | `E`, `DELETE` | Odstranite objekte |
| `EXPLODE` | `X` | Razbijte polilinije, bloke in kote na dele |
| `EXPORT` | `EXP` | Shranite kopijo risbe v vrsto datoteke, ki jo zapiše dodatek |
| `EXPORT3D` | `3DEXPORT` | Izvozite 3D-model: GLB, OBJ ali STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapišite točke in vstavitvene točke blokov z enim atributom kot opis v datoteko CSV ali TXT (PNEZD, PENZD ali XYZ) za programe BIM in geodezijo |
| `EXTEND` | `EX` | Podaljšajte objekte do drugih: kliknite blizu konca, povlecite čez več ali Shift+klik za prirez |
| `EXTRIM` |  | EXTRIM: izberite en rezalni rob, nato stran. Vse, kar seka rob, se obreže na tej strani. Kosi, ki bi odšli, se prikažejo, ko premikate kazalec. |
| `EXTRUDE` | `EXT` | Iztisnite zaprte 2D-objekte v telesa (3D) |
| `FIELD` |  | Vstavite polje v besedilo, celico tabele ali atribut: datum, ime datoteke, številko lista, lastnost risbe, površino ali dolžino objekta ali formulo |
| `FILLET` | `F` | Zaokrožite ali poravnajte kot med dvema objektoma (R polmer, P vsak kot polilinije, M več) |
| `FIND` |  | Poiščite in zamenjajte besede v besedilu, vrednostih atributov in besedilu kot |
| `FLATTEN` |  | Nastavite višino (Z) in debelino izbranih objektov na 0, tudi v blokih, ki jih uporabljajo. |
| `FLOOR` |  | Izberite etažo za risanje, dodajte eno ali premaknite ali kopirajte izbor nanjo. |
| `FLOORLAYERS` |  | Spremenite etaže v sloje z imeni Floor-Layer za datoteko, ki gre nekomu brez etaž. |
| `FLOORS` | `FLR` | Odprite podokno Etaže: zložite etaže v enem modelnem prostoru. |
| `GCCOINCIDENT` |  | Omejitev: dve točki se srečata ali točka ostane na objektu |
| `GCCOLLINEAR` |  | Omejitev: dve črti ostaneta na isti črti |
| `GCCONCENTRIC` |  | Omejitev: dva kroga ali loka delita središče |
| `GCEQUAL` |  | Omejitev: dve črti ostaneta enako dolgi ali dva kroga ali loka enakega polmera |
| `GCFIX` |  | Omejitev: točka ali cel objekt ostane na mestu |
| `GCHORIZONTAL` |  | Omejitev: črta (ali dve točki) ostane vodoravna |
| `GCPARALLEL` |  | Omejitev: dve črti ostaneta vzporedni |
| `GCPERPENDICULAR` |  | Omejitev: dve črti ostaneta pod pravim kotom |
| `GCSYMMETRIC` |  | Omejitev: dve točki, črti ali krogi se zrcalita čez črto |
| `GCTANGENT` |  | Omejitev: črta in krog ali lok (ali dva od njih) ostaneta tangentna |
| `GCVERTICAL` |  | Omejitev: črta (ali dve točki) ostane navpična |
| `GDSIN` | `GDS` | Oglejte si postavitev IC (datoteka toka GDSII): vsak sloj in tip podatkov kot sloj risbe, ploski, v uporabniških enotah; samo za ogled in merjenje (laboratorijski poskus) |
| `GEOMCONSTRAINT` | `GCON` | Geometrijske omejitve: vodoravna, navpična, vzporedna, tangentna, sovpadajoča … |
| `GLBOUT` |  | Izvozite 3D-model kot GLB (glTF) |
| `GRADIENT` | `GD` | Zapolni območje s prelivom ene ali dveh barv |
| `GRIDMOVE` | `GM` | Premaknite črto mreže in odnesite, kar visi nanjo: stene se raztegnejo, stebri, oznake in značke se premaknejo, kote sledijo. |
| `GROUP` | `G` | GROUP (G): izbranim objektom dajte skupno ime. Klik na enega izmed njih nato izbere vse. Enter pri imenu ustvari skupino brez imena. |
| `GROUPEDIT` |  | GROUPEDIT: spremenite skupino. Izberite enega od njenih objektov ali vnesite njeno Ime, nato Dodaj ali Odstrani objekte, PREIMENUJ jo, spremenite njen Opis ali določite, ali klik izbere celoto. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Zapolnite območje s polnim polnilom ali vzorcem: kliknite znotraj ali izberite zaprte objekte (H) |
| `HATCHEDIT` | `HE` | Spremenite šrafuro: vzorec, merilo, kot, izhodišče in povezavo z robom. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Znova ustvari robne polilinije iz šrafure, povezane z njo ali ne |
| `HATCHTOBACK` |  | Pošljite vse šrafure za vse ostalo. |
| `HELP` | `?` | Ta seznam |
| `HIDEOBJECTS` |  | Skrijte izbrane objekte do UNISOLATEOBJECTS. Ne shrani se z risbo. |
| `HISTORY` | `HIST` | HISTORY (HIST): različice te risbe — kopije, shranjene na tem računalniku, ko jo Studio shrani, in različice v oblaku — za odpiranje, obnovo in primerjavo z barvno označenimi spremembami. |
| `ID` |  | Koordinate točke |
| `IMAGE` | `IM` | Dajte CadCraft slikovne datoteke, ki jih risba uporablja (DWG hrani le, kje so bile). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Postavite sliko (PNG ali JPEG) iz datoteke. |
| `IMAGECLIP` | `ICL` | Obrežite sliko na pravokotnik ali mnogokotnik ali odstranite njen obrez. |
| `IMPORT` | `IMP` | Uvozite datoteko vrste, ki jo dodatek bere, v to risbo |
| `INSERT` | `I`, `DDINSERT` | Postavite blok (S merilo, R zasuk); F iz datoteke DWG/DXF, L iz knjižnice |
| `INTERSECT` | `IN` | Ohranite le tisto, kar imajo telesa skupno (3D), ali območje, ki ga imajo skupaj 2D-regije |
| `ISODRAFT` |  | ISODRAFT: izometrično risanje vklopljeno ali izklopljeno ali naravnost na ravnino Levo, Zgoraj ali Desno. Ko je vklopljeno, Ortogonalno in polarno sledenje sledita dvema osema ravnine, mreža je narisana izometrično, ELLIPSE pa ima Izokrog. |
| `ISOLATEOBJECTS` | `ISOLATE` | Pokažite samo izbrane objekte; vse drugo v tem prostoru je skrito do UNISOLATEOBJECTS. Ne shrani se z risbo. |
| `ISOPLANE` |  | ISOPLANE: izberite izometrično ravnino za risanje: Levo, Zgoraj ali Desno. Enter gre na naslednjo, kot pri tipki F5, ko je izometrično risanje vklopljeno. |
| `JOIN` | `J` | Združite črte, loke in polilinije, ki se stikajo od konca do konca, v eno polilinijo; črte na isti črti v eno črto (J) |
| `LASER` | `LASERCUT` | Odprite podokno Laser: pošljite sloje laserskemu rezalniku ali graverju (G-koda GRBL) |
| `LASSOMODE` |  | Pritisnite in povlecite nariše lasso (1) ali pravokotnik (0) |
| `LAYDEL` |  | Izbrišite sloj in vse objekte na njem (v modelu, na listih in v blokih) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Odprite upravitelja slojev: vsi sloji v eni tabeli |
| `LAYERPANEL` |  | Prikažite podokno slojev |
| `LAYFRZ` |  | Zamrznite sloj vsakega objekta, ki ga izberete |
| `LAYGROUP` | `LG` | Združite sloje v mape v podoknu Sloji. |
| `LAYISO` |  | Izolirajte sloje izbranih objektov (vsi drugi sloji izklopljeni) |
| `LAYLOCKFADE` |  | Nastavite, koliko zbledijo objekti na zaklenjenih slojih in ali jih klik lahko izbere. |
| `LAYMCUR` |  | Naredite trenutni sloj objekta, ki ga izberete |
| `LAYMRG` |  | Združite sloje: njihovi objekti se premaknejo na ciljni sloj, združeni sloji pa izginejo |
| `LAYOFF` |  | Izklopite sloj vsakega objekta, ki ga izberete |
| `LAYON` |  | Vklopite vse sloje |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nov list z glavo risbe in pogledom |
| `LAYTHW` |  | Odmrznite vse sloje |
| `LAYUNISO` |  | Znova vklopite sloje, ki jih je LAYISO izklopil |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pretvori besedilo, vneseno s starimi vietnamskimi pisavami (TCVN3 / pisave ABC, kot .VnTime, in pisave VNI, kot VNI-Times), v Unicode. Takšno besedilo je že prikazano, kot se bere; to ga dokončno prepiše, s številom in enim korakom razveljavitve. |
| `LENGTHEN` | `LEN` | Podaljšajte ali skrajšajte črte, loke in polilinije: za znesek, odstotek, na skupno vrednost ali z vlečenjem (LEN) |
| `LIBRARY` | `LIB` | Podokno knjižnice: postavite elemente, preverite posodobitve, zasluge |
| `LIMITS` |  | Nastavite meje risbe: VKLOP, IZKLOP ali spodnji levi in zgornji desni vogal. Ko so meje vklopljene, se točke zunaj njih zavrnejo. |
| `LINE` | `L` | Ravni odseki, vsak svoj objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Tip črte, ki ga dobijo novi objekti (po sloju, po bloku ali poimenovani) |
| `LINKVIEWS` | `SYNCVIEWS` | Pomikajte in povečujte vse podokne skupaj (razdeljen zaslon), da primerjate dve risbi ali reviziji |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ali VLIDE) odpre urejevalnik LISP: okno za pisanje, nalaganje in preizkušanje rutine. Nalaganje v risbo prebere vsak obrazec, kot ga prebere nalaganje datoteke z APPLOAD, in ustvari njene ukaze. Zaženi izbor ovrednoti izbrane obrazce ali obrazec, v katerem je kurzor. Konzola prikaže, kaj je rutina izpisala, in vsako napako z vrstico. Ujemajoči se oklepaj je označen med tipkanjem, Enter pa zamakne novo vrstico. Novo, Odpri in Shrani delujejo na datoteki .lsp. Seznami ob besedilu prikazujejo funkcije, ki jih rutina definira, tiste, ki jih kliče, a jih ta LISP še nima, in vse funkcije, ki jih ima. Okno ne blokira risbe, zato rutina lahko zahteva točke; Stop ali Esc konča tekočo rutino. |
| `LIST` | `LI`, `LS` | Opišite objekte v zgodovini |
| `LTSCALE` | `LTS` | Merilo tipa črte risbe (vsaka črta in presledek se pomnožita z njim) |
| `LWDISPLAY` | `LWT` | Prikažite ali skrijte debeline črt na zaslonu (gumb LWT v vrstici stanja) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Debelina črte, ki jo dobijo novi objekti (po sloju, po bloku, privzeta ali mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Sloji zemljevida pod modelnim prostorom: koordinatni sistem risbe, ploščice, WMS, WMTS, ArcGIS, slike |
| `MASSPROP` |  | MASSPROP: lastnosti prerezov regij in zaprtih objektov: površina, obseg, težišče, momenti in produkt vztrajnosti, polmeri vztrajnosti in glavne osi. Za črte in loke je natančen. Poročilo lahko zapiše v besedilno datoteko. |
| `MATCHPROP` | `MA`, `PAINTER` | Ujemanje lastnosti: kopirajte sloj, barvo in več lastnosti enega objekta na druge (MA) |
| `MEASURE` | `ME` | MEASURE (ME): oznaka vsake dane dolžine vzdolž črte, loka, kroga, polilinije, zlepka ali elipse, od konca najbližjega vašemu izboru. Točke ali z Blokom blok pri vsaki oznaki. |
| `MEASUREGEOM` | `MEA` | Izmerite razdaljo, polmer, kot ali površino (MEA) |
| `MINSERT` |  | MINSERT: postavite blok v vrstice in stolpce naenkrat. Vsak je svoj sklic, zato lahko premaknete ali izbrišete katerega koli. |
| `MIRROR` | `MI` | Zrcalite objekte čez črto |
| `MLEADER` | `MLD`, `MLEAD` | Večkratna vodilka: puščica, vodilka in opomba kot en objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Poravnajte večkratne vodilke z eno od njih v smeri, z enakim razmikom ali razporejene med dvema točkama (MLA) |
| `MLEADERCOLLECT` | `MLC` | Zberite več večkratnih vodilk v eno: njihove bloke v vrsti ali stolpcu ali njihove opombe ena pod drugo (MLC) |
| `MLEADEREDIT` | `MLE` | Dodajte vodilne črte večkratni vodilki ali jih odstranite; preklopite njeno vsebino med besedilom in blokom (MLE) |
| `MLINE` |  | Narišite vzporedne črte skupaj, povezane na vogalih. |
| `MOVE` | `M` | Premaknite objekte z izhodiščno točko in drugo točko |
| `MSPACE` | `MS` | Delajte na modelu prek pogleda odprtega lista (ali dvakrat kliknite znotraj pogleda). |
| `MTEXT` | `MT`, `T` | Odstavčno besedilo: povlecite njegovo širino, nato tipkajte na mestu; Enter začne nov odstavek (T) |
| `MVIEW` | `MV` | Pogled na model na listu |
| `NAMEDVIEW` | `NV`, `VIEWS` | Poimenovani pogledi: shranite pogled na zaslonu (ali okno) pod imenom in se vrnite nanj (NV) |
| `NCOPY` |  | Kopirajte objekte iz sklica na blok ali povezane risbe v risbo, ne da bi jo razstavili. |
| `NEARBY` |  | Povejte, kaj leži blizu kurzorja, najbližje najprej, z razdaljo in stranjo. |
| `NEW` |  | Začnite novo risbo |
| `OBJECTSCALE` | `OBJSCALE` | Opombna merila opombnega besedila in kot: dodajte merilo, izbrišite ga, dodajte trenutno merilo ali jih naštejte (vsak pogled jih prikaže v velikosti za svoje merilo) |
| `OBJOUT` |  | Izvozite 3D-model kot OBJ |
| `OFFSET` | `O` | Vzporedne kopije na razdalji |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kako OFFSET zapre reže na zunanjih vogalih polilinije. 0 podaljša segmente, 1 doda lok, 2 doda ravni rez. Ohrani se za to sejo. |
| `OLELIST` | `OLES` | Seznam objektov OLE, ki jih ima risba, in postavite kopijo slike enega, kjer želite |
| `OPEN` |  | Odprite DWG ali DXF iz tega računalnika |
| `OPENIN3D` |  | Odprite to risbo v 3D-modelirnem programu, v novem zavihku (nič se ne naloži) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Odprite meni lovljenja objektov: izberite, kateri lovilci so vklopljeni. Tudi desni klik na Lovljenje v vrstici stanja. |
| `OVERKILL` |  | Izbrišite podvojene objekte in združite prekrivajoče se ali od konca do konca stikajoče se črte in loke v dani toleranci. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Podokno Parametri: uporabniški parametri in dimenzijske omejitve v eni tabeli |
| `PARTSLIST` | `PLIST` | Tabela seznama delov za vsak standardni del in jeklen profil, postavljen iz knjižnice |
| `PASTEAREA` | `PAREA` | Prilepite območje, kopirano v MarkupCraft (Kopiraj območje), v pravi velikosti, kot sliko. |
| `PASTEBLOCK` |  | PASTEBLOCK: prilepite, kar ste kopirali, kot en blok. Blok dobi svoje ime; RENAME mu da vaše. |
| `PASTECLIP` |  | Prilepite odložišče: sledi kurzorju, kliknite, kam naj gre (Ctrl+V) |
| `PASTEORIG` |  | Prilepite odložišče na koordinate, iz katerih je bilo kopirano (Ctrl+Shift+V) |
| `PDF` |  | Dajte CadCraft datoteke PDF, ki jih uporabljajo podlage risbe |
| `PDFADJUST` |  | Zbledite, nastavite kontrast, monokromatično ali izklopite podlago PDF |
| `PDFATTACH` | `PDFATT` | Pripnite stran PDF kot podlago (PDFATTACH) |
| `PDFCLIP` |  | Obrežite podlago PDF na pravokotnik ali mnogokotnik |
| `PDFIMPORT` | `PDFIM` | Pretvorite črte, polnila in besedilo strani PDF v objekte risbe (PDFIMPORT) |
| `PDFLAYERS` |  | Vklopite ali izklopite sloje podlage PDF |
| `PEDIT` | `PE` | Uredite polilinijo: zapri, odpri, združi, širina, prilagodi krivuljo, zlepek, odstrani krivuljo, generiranje tipa črte, obrni; črte, loki in zlepki se lahko spremenijo v polilinije |
| `PHOTOSKETCH` | `PSK` | Spremeni fotografijo skice z roko na papirju v črte in loke v merilu, izravna perspektivo in da vsaki barvi peresa svoj sloj. |
| `PICKSTYLE` |  | PICKSTYLE: ali izbira enega objekta skupine izbere celotno skupino (1, začetna nastavitev) ali samo ta objekt (0). Ohrani se za to sejo. |
| `PLAN` |  | Zasukajte pogled, da je os X UCS (trenutni ucs, shranjen Ucs ali Svet) vodoravna na zaslonu. Nič v risbi se ne premakne. |
| `PLINE` | `PL` | Polilinija iz odsekov črt in lokov |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Izris v PDF: list ali model v merilu |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele slogov izrisa: nastavite, kaj se natisne za vsako barvo (barva, črna, siva, tinta, debelina črte); ohrani z risbo (STYLESMANAGER) |
| `POINT` | `PO` | Točkovni objekti |
| `POINTCLOUD` | `PC` | pripeti oblak točk: prerez, višina, debelina, barva, velikost, vidnost, povečava, odpni |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | pripnite oblak točk (LAS, LAZ, XYZ, PTS) pod risbo |
| `POLARANG` |  | Korak polarnega sledenja v stopinjah (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravilni mnogokotnik |
| `PRESSPULL` |  | Potisnite ali povlecite ploskev telesa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Odprite podokno Lastnosti (tudi Ctrl+1 ali dvojni klik na objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Zložite podokno Lastnosti na rob okna |
| `PSPACE` | `PS` | Zapustite pogled, v katerem delate, in se vrnite na list (ali dvakrat kliknite zunaj njega). |
| `PUBLISH` | `-PUBLISH` | Izrišite več ali vse liste v en PDF (stran in zaznamek za vsak list) |
| `PURGE` | `PU` | Odstranite definicije blokov, ki jih nič ne uporablja |
| `QDIM` |  | Hitra kota: kotirajte več objektov naenkrat (zvezno, osnovno, zamaknjeno, ordinatno, polmer ali premer) |
| `QPMODE` | `QP` | Hitre lastnosti ob kurzorju vklopljene ali izklopljene |
| `QSELECT` | `QS` | Hitri izbor: vsak objekt vrste, katerega sloj, barva, velikost ali ime se ujema (QS) |
| `RASTERSNAP` |  | Vklopite ali izklopite lovljenje na črte skeniranih listov. |
| `RAY` |  | Žarek: konstrukcijska črta iz točke, neskončna na eno stran. |
| `RECOVER` |  | Odpre poškodovano DXF ali DWG: preskoči, kar ni mogoče prebrati, namesto da zavrne datoteko, pove, kaj je preskočeno, nato preveri in popravi risbo kot AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zaprta polilinija iz dveh vogalov |
| `REDLINE` | `RDL` | Redline v revizijo: preberite paket redline MarkupCraft, sprejmite ali zavrnite vsako spremembo, zaključene sprejete obkrožite z revizijskim dnevnikom in shranite datoteko odgovorov (RDL) |
| `REDO` |  | Ponovite, kar je bilo razveljavljeno |
| `REFCLOSE` |  | Končajte urejanje bloka na mestu: shranite ga ali zavrzite spremembe |
| `REFEDIT` |  | Uredite blok na mestu, kjer sedi sklic nanj, z zbledelim ostalim delom risbe; REFCLOSE shrani |
| `REGEN` | `RE` | Znova zgradite, kar je narisano v tem zavihku iz risbe |
| `REGENALL` | `REA` | Znova zgradite, kar je narisano v vsakem zavihku, podoknu in odprti risbi |
| `REGION` | `REG` | REGION (REG): ustvarite ravna območja (regije) iz zaprtih objektov ali iz črt, lokov in polilinij, ki sklenejo zanko od konca do konca. UNION, SUBTRACT in INTERSECT nato združijo regije, MASSPROP pa da njihove lastnosti prereza. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrirajte več skeniranj: postavite jih v en okvir z izbranimi pari točk ali tarčami, izpopolnite z ICP, izvozite en LAS ali E57 |
| `REINIT` |  | Znova naložite datoteko svojih bližnjic |
| `RENAME` | `-RENAME`, `REN` | Preimenujte sloj ali blok (vsak objekt ali sklic se prilagodi) |
| `REVCLOUD` | `RC` | Oblak revizije: zaokrožite pravokotnik, mnogokotnik, prosto pot ali objekt (RC) |
| `REVOLVE` | `REV` | Zavrtite zaprte 2D-objekte okoli osi v telesa (3D) |
| `ROTATE` | `RO` | Zasukajte objekte okoli izhodiščne točke |
| `SAMPLES` | `SAMPLE` | Odprite enega od vzorčnih risb CadCraft (arhitekturni komplet, izvedeno stanje), da se učite |
| `SAVE` | `QSAVE` | Prenesite risbo v njeni obliki (DWG ali DXF) |
| `SAVEAS` |  | Prenesite risbo kot DWG ali DXF: izberite, katero |
| `SAYSEL` |  | Povejte, kaj je izbrano, po en stavek za vsakega. |
| `SCALE` | `SC` | Spremenite merilo objektov okoli izhodiščne točke |
| `SCALELISTEDIT` | `SCALELIST` | Dodajte, uredite in izbrišite lastna merila risbe; prikažejo se v seznamih meril pogleda in izrisa ter se shranijo v datoteko (SCALELIST) |
| `SCANALIGN` | `SCL` | Poravnajte skenirani list na dve točki: premaknite, zasukajte in, če želite, spremenite merilo. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Vstavite skenirano risbo: PNG, JPEG ali TIFF (ena stran ali vse strani večstranske datoteke) ali stran PDF, ki je slika. |
| `SCANCLEAN` | `SCC` | Naredite skenirani list črno-belo in odstranite pikice. |
| `SCANCROP` | `SCR` | Obrežite skenirani list na okno. |
| `SCANDESKEW` | `SCD` | Poiščite kot, pod katerim ležijo dolge črte skeniranega lista, in ga zasukajte naravnost, ko kot potrdite. |
| `SCANERASE` | `SCE` | Izbrišite območje skeniranega lista: pravokotnik, mnogokotnik ali lasso. |
| `SCANINFO` | `SCI` | Pokažite izvirno datoteko skeniranega lista in korake od takrat. |
| `SCANSCALE` | `SCS` | Spremenite merilo skeniranega lista: izberite dve točki na njem in vnesite pravo razdaljo med njima. |
| `SCANTRACE` | `SCT` | Pretvorite skenirani list v črte in loke na novem sloju, z dopustno odstopanje, ki ga nastavite. Besedilo in šrafura ostaneta kot rastrska. |
| `SELECT` |  | Izberite objekte zdaj (za P, Prejšnji, v naslednjem ukazu) |
| `SELECTALL` | `AI_SELALL` | Izberite vsak objekt, ki ga lahko urejate na tem zavihku (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Izberite vsak objekt, kot so tisti, ki jih izberete: isti tip, sloj in barva (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Prikaže podokno Komplet listov: listi iz mnogih risb, oštevilčeni, izrisani kot en PDF. |
| `SHORTCUTS` | `KEYS` | Dajte kateremu koli ukazu lastno tipko (Ctrl ali Alt s črko ali prosta funkcijska tipka), shranjeno v tem brskalniku ali namiznem programu. |
| `SHXFONTS` | `SHX` | Dajte CadCraft pisave SHX iz mape ali datotek, da slogi besedila, ki jih imenujejo, rišejo z njimi (seznam, odstrani, obrni) |
| `SKETCHFIX` | `SKF` | Narišite proste poteze; vsaka postane čista črta, krog, lok, pravokotnik ali polilinija, poravnana in povezana z drugimi. |
| `SKETCHLIVE` | `SKL` | Skicirajte s peresom: vsaka poteza postane natančna črta, krog, lok ali pravokotnik, ko dvignete pero, prilepljen na risbo, z velikostjo, ki jo vnesete čez. |
| `SPLINE` | `SPL` | Narišite zlepek skozi točke (ali s kontrolnim poligonom) ali spremenite polilinijo v zlepek |
| `SPLINEDIT` | `SPE` | Uredite zlepek: prilagodite točke, kontrolne točke in uteži, ga odprite ali zaprite, obrnite ali pretvorite v polilinijo |
| `SPLIT` |  | Razdelite risalno površino na podokna (kot VPORTS na modelu; tudi iz lista) |
| `STEELMEMBER` | `SMEMBER` | Jekleni element v 3D iz standardnega profila: dve točki (nosilec) ali izhodiščna točka in višina (steber) |
| `STLOUT` |  | Izvozite 3D-model kot STL (milimetri) |
| `STRETCH` | `S` | Raztegnite: povlecite križno okno čez konce za premik; kar je znotraj, se premakne, ostalo ostane (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Slogi besedila: pisava, višina, širina in nagib, ki ga zajame novo besedilo (pogovorno okno; -STYLE v ukazni vrstici) |
| `SUBTRACT` | `SU` | Odvzemite telesa od drugih (3D) ali 2D-regije od regij |
| `SWBOUT` | `SWMACRO` | Prenesite makro za SolidWorks (.swb), ki obnovi model kot en omejen skic |
| `SWEEP` |  | Pomaknite zaprte 2D-objekte vzdolž poti (črta, polilinija, lok, krog) v telesa (3D) |
| `TABLE` | `TB` | Ustvarite tabelo: vrstice in stolpce ali iz celic preglednice na odložišču ali datoteki CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Uredite tabelo: vtipkajte v celico, vstavite in izbrišite vrstice in stolpce, velikosti, združene celice, poravnavo |
| `TABLEEXPORT` |  | Shranite, kar tabela prikazuje, kot datoteko CSV |
| `TABLEPASTE` | `PASTETABLE` | Ustvarite tabelo iz celic preglednice na odložišču |
| `TABLESTYLE` | `TS` | Slogi tabel: višine besedila, poravnava, rob in obrobe za naslov, glavo in podatkovne vrstice |
| `TAGS` |  | Oznake na sklicih blokov: določite oznako (vrsta, dovoljene vrednosti, bloki, na katere velja), jo nastavite na izbrane sklice in jih izpišite kot razpored, ki ga lahko shranite kot CSV |
| `TEXT` | `DT`, `DTEXT` | Enovrstično besedilo; Enter začne naslednjo vrstico |
| `TEXTEDIT` | `ED`, `DDEDIT` | Uredite besedilo na mestu: izberite besedilo (ali ga dvakrat kliknite) (ED) |
| `TEXTMASK` | `TMASK` | Postavite ozadje za maskiranje za besedilo (ozadje risbe ali barvo) ali ga odstranite. |
| `TEXTTOFRONT` |  | Vsa besedila, kote in vodilke prenesite pred vse drugo. |
| `TOOLBAR` |  | Izberite, kaj prikazujejo gumbi orodne vrstice: ikone in besedilo, samo ikone ali samo besedilo (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Postavite orodno vrstico na vrh, dno, levo ali desno okna |
| `TOOLBARROWS` |  | Izberite, koliko vrstic uporablja orodna vrstica: prelom, da se prilega, 2 ali 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Naredite vrstice nad risbo standardne ali kompaktne |
| `TOUCHCROSSHAIR` | `TCX` | Premaknjen križec za risanje s prstom: en prst premika križec, ki je nad in ob njem, tako da prst ne pokrije točke izbora. Dvig prsta ničesar ne izbere; gumb Klik ali dotik z drugim prstom izbere na križcu, držanje Klika med premikanjem vleče. Dolg pritisk ali gumb Enter je Enter. Dva prsta premikata in povečujeta. Možnosti: VKLOP, IZKLOP, Samodejno (vklopljeno le, kjer je prst edini kazalec), Razdalja, Stran. |
| `TOUR` | `TUTORIAL` | Ponovite šestkoračni ogled prve risbe |
| `TRIM` | `TR` | Prirežite objekte do mesta, kjer jih sekajo drugi: kliknite kos, povlecite čez več ali Shift+klik za podaljšanje |
| `TRIMEXTENDMODE` |  | Kako se začneta TRIM in EXTEND: 1 Hitro (vsak objekt je rezalni rob ali meja), 0 Standardno (najprej izberite robove) |
| `TTR` |  | Krog, tangenten na dva objekta, s polmerom, ki ga podate (enako kot CIRCLE T). |
| `TURNLEFT` |  | Zavrtite pogled za 90° v levo (v nasprotni smeri urnega kazalca): UCS Z -90, pogled sledi. Nič v risbi se ne premakne. |
| `TURNRIGHT` |  | Zavrtite pogled za 90° v desno (v smeri urnega kazalca): UCS Z 90, pogled sledi. Nič v risbi se ne premakne. |
| `TURNWORLD` |  | Nazaj na svet: UCS Svet, pogled je spet vodoraven. |
| `TXT2MTXT` | `T2M` | Združite enovrstična besedila v eno odstavčno besedilo, od zgoraj navzdol. |
| `UCS` |  | Vaš koordinatni sistem: izhodišče in os X (izhodišče, kot Z, 3točke, OBjekt, Prejšnji, Svet, POimenovan). Točke, ki jih vnesete, orto, polarno sledenje, mreža in novo besedilo mu sledijo; pogled se zasuka, da je njegova os X vodoravna. Nič v risbi se ne premakne. |
| `UNDO` | `U` | Razveljavite zadnji ukaz |
| `UNGROUP` |  | UNGROUP: razstavite skupine. Izberite objekte skupin ali podajte Ime. Objekti ostanejo v risbi. |
| `UNION` | `UNI` | Združite telesa v enega (3D) ali 2D-regije v eno regijo |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Znova pokažite vse objekte, skrite z ISOLATEOBJECTS ali HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kako so dolžine prikazane in vnesene: decimalno, čevlji in palci, ulomki (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponovno izračunajte polja in izberite, kdaj se samodejno posodobijo |
| `USDOUT` |  | Izvozite 3D-model kot USD (besedilo .usda, binarno .usdc ali paket .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardni 3D-pogledi, perspektivni ali vzporedni (3D) |
| `VIEWBASE` | `FLATSHOT` | Postavite ravni 2D-pogled 3D-teles (spredaj, zgoraj, stran ali izometrično, skrite črte črtkane) na list ali v model |
| `VIEWLABEL` | `VL` | Naslov pogleda na listu, ki prikazuje ime pogleda njegovega pogleda in se spreminja z njim. |
| `VOICE` |  | Vklopite ali izklopite govorjene ukaze. Prepoznani so na tem računalniku. |
| `VPCLIP` |  | Obreže pogled lista na zaprt objekt ali narisan mnogokotnik; Delete ga spet naredi za pravokotnik |
| `VPLAYER` |  | Zamrznite ali odmrznite sloje samo v nekaterih pogledih (Zamrzni, Odmrzni, Ponastavi) in izberite, katere sloje novi pogledi začnejo zamrznjeni (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Razdelite risalno površino na podokna, vsako s svojim pogledom (na listu: pogled, kot MVIEW) |
| `VPVIEW` |  | Nastavite, kaj pogled prikazuje: izberite okno na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizualni slog 3D-pogleda: senčeno, robovi, skrita črta, žični model, rentgen |
| `WALL` | `WA` | Narišite 2D-stene kot polilinijo. Povežejo se in nosijo vrata in okna. |
| `WALLARC` | `WARC` | Narišite lok sten. Tlorisne stene so ravne, zato je lok narisan kot kratke ravne stene (vsaka po 15 stopinj), ki se povezujejo. |
| `WALLDELSEG` |  | Izbrišite kos stene med dvema točkama. Kar ostane, ostane kot ena ali dve steni. |
| `WALLDIM` |  | Vnesite novo vrednost za koto: stena na njenem oddaljenem koncu se premakne pravokotno na samo sebe, stena na prvem koncu ostane, stene, povezane z njo, sledijo. |
| `WALLDISJOIN` |  | Izberite steno blizu enega konca, da onemogočite povezave na tem koncu: konec je narisan pravokotno in ga nič ne sledi. Izberite ponovno, da jih dovolite. |
| `WALLGRID` |  | Zaklenite steno na črto mreže: vzdolž nje ali eden konec nanjo. Premaknite črto z GRIDMOVE in stena sledi. |
| `WALLHOLD` |  | Poravnajte in zaklenite: stena ohrani svoje mesto glede na drugo steno (na svoji črti ali na razdalji, ki jo ima). Če se ena premakne, sledi druga. |
| `WALLHOLDDIM` |  | Zaklenite razdaljo med dvema vzporednima stenama. Če se ena premakne, druga sledi, da jo ohrani. |
| `WALLHOLDS` |  | Naštejte zaklepe na stenah. |
| `WALLJOINS` |  | Vsaki steni starejše risbe dajte njen identifikator in shranite povezave med njimi. To se zgodi tudi ob prvi spremembi, ki jo naredite. |
| `WALLJOINSTYLE` |  | Kliknite vogal, kjer se dve steni stikata od konca do konca, da spremenite, kako je narisan: poševno, na stik, pravokotno odrezano. T preklopi, katera stena teče čez. |
| `WALLOFFSET` | `WO` | Premaknite steno pravokotno na samo sebe za razdaljo (stene, povezane z njo, sledijo) ali naredite kopijo na tej razdalji. |
| `WALLPICK` |  | Naredite stene na črti ali polilinije v risbi, s povezanimi črtami, če rečete Da. |
| `WALLPOLY` | `WP` | Narišite stene okoli pravilnega mnogokotnika s 3 do 64 stranicami, kot POLYGON. |
| `WALLRECT` | `WR` | Narišite štiri povezane stene iz dveh nasprotnih vogalov, kot RECTANG. |
| `WALLREJOIN` |  | Naredite dva dela stene spet eno steno. Prvi ohrani svoje mesto v risbi. |
| `WALLROT` |  | Narišite štiri povezane stene kot pravokotnik, zasukan pod poljubnim kotom: prva stran, nato kako daleč ven. |
| `WALLSPLIT` | `WS` | Razdelite steno na dva dela v točki ali tam, kjer jo seka druga stena. Deli ostanejo povezani, razen če zahtevate režo ali proste konce. Vrata in okna gredo s svojim delom. |
| `WALLSPLITGAP` |  | Razdelite steno z režo: vnesite režo, izberite steno, nato točko. Deli ohranijo proste konce in jih je mogoče znova povezati. |
| `WALLSTRETCH` |  | Raztegnite z oknom: konci sten znotraj njega se premaknejo, cele stene znotraj se premaknejo v celoti, stene, ki se naslanjajo na njihove strani, drsijo z njimi. |
| `WALLTAN` |  | Nadaljujte steno z lokom, ki iz nje odide vzdolž stene (narisan kot kratke ravne stene). |
| `WALLTRACE` |  | Naredite stene okoli najmanjšega zaprtega območja črt in sten okoli točke, na katero kliknete. |
| `WALLUNHOLD` |  | Odstranite zaklepe stene (in zaklepe drugih sten nanjo). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapišite blok, nekaj objektov ali celotno risbo v novo datoteko DWG ali DXF (W) |
| `WEDGE` | `WE` | Klin: dva vogala in višina; nagiba se stran od prvega vogala (3D) |
| `WHEREAMI` | `WHERE` | Povejte, kje je kurzor. |
| `WHOHAS` |  | Pove, kdo ima risbo odprto. CadCraft Studio hrani majhno zaklepno datoteko ob vsaki odprti risbi (Plan.dwg.cclock: kdo, od kdaj, katera različica) in jo odstrani ob zaprtju. Možnosti: Trenutna (odprta risba), Datoteka (izberite eno), Mapa (vse risbe v mapi, ki so odprte kjerkoli; to tudi omogoči Studiu, da v tej mapi hrani zaklepne datoteke), Pot (vnesite eno), Ime (ime, ki ga vidijo drugi). Zaklep, ki ni osvežen pet minut, je zastarel. V brskalniku ni na voljo. |
| `WINDOW` | `WN` | Postavite okno v steno. |
| `XATTACH` | `XA` | Povežite drugo DWG ali DXF s to risbo, prikazano samo za branje (XREF jih izpiše in znova naloži) |
| `XCLIP` | `XC` | Obrežite sklice blokov in povezane risbe na pravokotnik ali mnogokotnik ali odstranite obrez. |
| `XLINE` | `XL` | Konstrukcijska črta, neskončna na obe strani: skozi dve točki, vodoravna, navpična, pod kotom, razpolavlja kot ali z odmikom od črte. |
| `XREF` | `XR`, `-XREF` | Povezane risbe (zunanje reference): izpiši, pripni, znova naloži, veži, odpni |
| `ZOOM` | `Z` | Obseg ali okno |
