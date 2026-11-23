---
title: Zemljevid ukazov: kaj vnesti
summary: Vsi ukazi, ki jih ima CadCraft, s kratkimi imeni od A do Z, sestavljeni iz samega programa, ter navade iz drugih risarskih programov, ki se razlikujejo.
keywords: zemljevid ukazov, ukazi, aliasi, kratka imena, prihajam iz, seznam ukazov, kaj vnesti, izbriši, prirezi, enakovredno, razlike
from: 9426856f
---

CadCraft sprejme imena ukazov in kratka imena, ki jih ljudje poznajo iz drugih risarskih programov: vnesite `L` za črto, `TR` za prirezovanje, `E` za brisanje. Zato za večino ni treba učiti nobene preglednice prevodov: ime, ki ga poznate, je tukaj enako. Spodnji seznam je vsak ukaz, ki ga ima CadCraft, sestavljen iz samega programa. {{key:Enter}} ponovi zadnjega, `HELP` v ukazni vrstici izpiše isti seznam.

Nekateri niso enaki ali še niso izdelani:

- **Shrani** prenese kopijo v brskalnik ({{cmd:SAVE}}, {{cmd:SAVEAS}}); v CadCraft Studio zapiše datoteko. Glejte [Prihajam iz drugega risarskega programa](topic:coming-from).
- **PLOT** naredi PDF (tudi PNG in SVG), s tabelo slogov izrisa; upravitelja nastavitev strani ni.
- **DIMSTYLE** in **PEDIT** sta izdelana; **PEDIT** nima možnosti za urejanje oglišč (to naredijo ročice).
- **TABLE** ni izdelan; {{cmd:XREF}}, {{cmd:SPLINE}} in {{cmd:WBLOCK}} so izdelani.
- Lastni ukazi rutine (AutoLISP `C:NAME`) se pokažejo, ko jo naložite z {{cmd:APPLOAD}}; tukaj niso navedeni.

## Vsi ukazi (402)

| Ukaz | Kratka imena | Kaj naredi |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Zavrti 3D pogled z levim gumbom miške |
| `ACCESS` | `AX` | Vklopi ali izklopi risanje brez vida: rezultati se berejo prek bralnika zaslona, kazalec tipkovnice je na risbi, zvoki ob prilepljanju in glasovni ukazi. |
| `ALIASEDIT` |  | Uredi aliase ukazov v eni besedilni datoteki (znana oblika L, *LINE) |
| `ALIGN` | `AL` | Premakne in zasuka predmete tako, da izvorne točke pristanejo na ciljnih točkah (en, dva ali trije pari), in jih po želji skalira |
| `ALIGNPANEL` | `ALP` | Odpre podokno Poravnaj in razporedi |
| `ALIGNTO` |  | Poravna leve, srednje, desne, zgornje, sredinske ali spodnje robove izbranih predmetov na izbor, prvi ali zadnji izbrani predmet ali točko |
| `ANNOALLVISIBLE` | `ANNOALL` | Pokaže anotativne predmete pri vsakem merilu ali samo tam, kjer je merilo pogleda (ali risbe) na njihovem seznamu |
| `ANNOSCALE` | `CANNOSCALE` | Nastavi merilo anotacij risbe: anotativno besedilo in kote se preoblikujejo, da se natisnejo v isti velikosti |
| `APPLOAD` | `AP` | Naloži aplikacije: rutine LISP (.lsp) in njihove datoteke pogovornih oken (.dcl); Zagonski paket (AP) |
| `ARC` | `A` | Lok: 3 točke, začetek/središče/konec, začetek/središče/kot, začetek/središče/dolžina, začetek/konec/kot, začetek/konec/smer, začetek/konec/polmer, središče/začetek/konec, središče/začetek/kot, središče/začetek/dolžina, nadaljuj |
| `AREA` | `AA` | Površina in obseg po točkah ali predmetu; Dodaj in Odštej hranita tekočo vsoto (AA) |
| `ARRAY` | `AR` | Kopije v vrstah in stolpcih ali okoli središča (AR) |
| `ARRAYASSOCIATIVITY` |  | Nastavi, ali ukazi ARRAY naredijo matrike, ki ostanejo urejljive (1), ali navadne kopije (0) |
| `ARRAYCLOSE` |  | Konča urejanje izvornih predmetov matrike |
| `ARRAYEDIT` |  | Spremeni matriko, narejeno z možnostjo Associative: števila, razmike, izvorne predmete, en element |
| `ARRAYPATH` |  | Kopije predmetov vzdolž črte, loka, polilinije ali druge krivulje |
| `ARRAYPOLAR` |  | Kopije okoli središčne točke |
| `ARRAYRECT` |  | Kopije v vrstah in stolpcih |
| `ASBUILT` | `ASB` | ASBUILT prebere dejanske izmerjene točke, ki jih je izmerila ekipa (CSV / TXT, kot jih zapiše EXPORTPOINTS), in jih primerja s točkami risbe: znotraj ali zunaj tolerance, neizmerjene, odvečne. Označi jih na sloju AS-BUILT in prenese poročilo CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Določi atribut (oznako, za katero blok zahteva vrednost), ki ga damo v blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Uredi vrednosti atributov sklica na blok v ukazni vrstici, eno za drugo (Enter ohrani vrednost) |
| `ATTSYNC` |  | Uskladi sklice bloka z njegovimi definicijami atributov: nove dodane s privzetimi vrednostmi, odstranjene izbrisane, položaji in besedilo ponastavljeni; vrednosti ohranjene |
| `AUDIT` |  | Preveri odprto risbo za poškodbe: števila, ki niso končna, predmeti brez velikosti, manjkajoči sloji, bloki, slogi in vrste črt, bloki, ki vsebujejo sami sebe, skupni identifikatorji, pokvarjene kote in šrafure. Našteje, kaj je našel, po vrsti, in pred popravilom vpraša; popravilo je en korak razveljavitve. |
| `AUNITS` | `ANGUNITS` | Kako se koti prikazujejo in vnašajo: decimalne stopinje, stopinje-minute-sekunde ali smeri, na primer N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Samodejno dopolnjevanje risbe vklopljeno ali izklopljeno ali izpiše, kaj vzorci risbe zdaj predlagajo. |
| `AUTOCONSTRAIN` |  | Doda sovpadajoče, vodoravne in navpične omejitve tam, kjer je geometrija že blizu |
| `AUTODIM` | `ADIM` | Kotiranje po pravilih: skupna velikost, verige vzdolž stranic, odprtine, premeri lukenj in razmik mreže, brez ponavljanja že kotiranega. |
| `AUTOSHEET` | `ASH` | Sam razporedi liste: izbere papir in standardna merila ter postavi vsak pogled z napisom in glavo risbe. |
| `BATTMAN` |  | Upravitelj atributov bloka: vrstni red, oznake, pozivi, privzete vrednosti in načini atributov bloka, nato posodobljeni sklici |
| `BCLOSE` |  | Zapre urejevalnik blokov: shrani blok ali zavrže spremembe |
| `BCONVERT` |  | BCONVERT najde geometrijo, ki se ponavlja, in jo spremeni v sklice na bloke. Izberite predmete, ki se ponavljajo: najdena je vsaka druga skupina predmetov v odprtem prostoru, ki je enake geometrije, premaknjena in zasukana za poljuben kot; če je vklopljeno Zrcaljeno in Skalirano, tudi zrcalne slike in kopije pri drugi velikosti. Novemu bloku dajte ime in izhodiščno točko; izbor in vsaka kopija postaneta sklic nanj, vsak s svojo rotacijo in merilom. Ali izberite Blok in imenujte obstoječi blok, da najdete ohlapne kopije njegovih predmetov. Kopija mora imeti isti sloj, barvo, vrsto črte in debelino črte, razen če je Lastnosti nastavljen na Prezri. Predmeti na zaklenjenih slojih ostanejo nedotaknjeni. En korak razveljavitve. |
| `BEDIT` | `BE` | Urejevalnik blokov: uredi predmete in atribute bloka; BCLOSE shrani (BE) |
| `BLEND` |  | BLEND: spline med krajiščema dveh odprtih krivulj, izbranima blizu koncev za spoj. CONtinuity: Tangent sledi obema smerema, Smooth pa tudi temu, kako se krivita. |
| `BLOCK` | `B`, `BMAKE` | Naredi blok iz predmetov (postanejo en sklic) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: vsak sklic na en blok postane sklic na drugega, na istem mestu z istim merilom in rotacijo. Vrednosti atributov, ki jih imata oba bloka, ostanejo. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE pokaže podokno Bloki s kazalcem v njegovem filtru. Podokno prikaže sliko vsakega bloka (najprej tiste, ki so bili postavljeni nazadnje), kot seznam ali mrežo; kliknite sliko ali jo povlecite na risbo, da bloko postavite z INSERT. Pod Knjižnice dodajte lastno datoteko DWG ali DXF: njeni bloki so navedeni s slikami in se ob postavitvi kopirajo v to risbo. V CadCraft Studio je mogoče dodati tudi mapo risb; datoteke in mape se pomnijo. |
| `BOMEDIT` | `BOMCOLUMNS` | Stolpci, združevanje, razvrščanje, naslov, vsote in opombe tabele kosovnice |
| `BOMEXPORT` |  | Shrani tabelo kosovnice kot datoteko .csv |
| `BOMTABLE` | `BOM` | Živa tabela kosovnice ene cone ali celotne risbe |
| `BOMUPDATE` |  | Zdaj posodobi vse tabele kosovnice, tudi zamrznjene |
| `BOMZONE` | `BZONE` | Imenovano območje risbe za kosovnico: dva oglišča, mnogokotnik ali obris zaprtega predmeta |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): izberite točko znotraj zaprtega območja in dobite zaprto polilinijo okoli njega. Loki ostanejo loki. Otoki orišejo tudi območja znotraj njega. |
| `BOX` |  | Kvader: dve oglišči in višina (3D) |
| `BPARAMETER` | `BPARAM` | Še ni izdelano: dodajanje parametra (na primer Vidnost) bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametri bloka: poimenovani parametri s formulami in več parametrov vidnosti v enem bloku. Deluje v urejevalniku blokov (izbrane predmete dodelite stanju) in na izbranem sklicu (njegove lastne vrednosti in stanja). |
| `BREAK` | `BR` | Prekine črto, lok, krog ali polilinijo med dvema točkama (BR) |
| `BREAKATPOINT` |  | Razdeli črto, lok ali polilinijo na dva dela v točki |
| `BREAKLINE` |  | Nariše črto s simbolom preloma; njena velikost in podaljšek čez krajišča se pomnita. |
| `BREPLACE` |  | BREPLACE zamenja en blok z drugim. Izbrano: izberite sklice na bloke in imenujte blok, ki naj ga nadomesti. Vse: imenujte blok in njegovo zamenjavo; vsak sklic v vsakem prostoru in znotraj drugih blokov se spremeni. Sklic obdrži svoj položaj, merilo, rotacijo in sloj ter vrednosti atributov, ki jih imata oba bloka; vrednosti, za katere novi blok nima prostora, se opustijo in navedejo. |
| `BSEARCH` |  | BSEARCH najde bloke. Ime: del imena bloka ali vzorec z * in ?. Atribut: vrednost (ali TAG=vrednost), ki jo imajo atributi sklica. Geometrija: izberite predmete ali en sklic na blok; seznam blokov, katerih oblika je vsaj 85 % podobna, najboljši prvi; velikost, rotacija in zrcaljenje se ne štejejo. Najdeni sklici v odprtem prostoru so izbrani, pripravljeni za naslednji ukaz. |
| `BURST` |  | Razstavi sklice na bloke in ohrani, kar povedo njihovi atributi: vsaka vrednost postane besedilo na sloju atributa. |
| `BVHIDE` | `BVH` | V urejevalniku blokov: skrije predmete v trenutnem stanju vidnosti. |
| `BVSHOW` | `BVSH` | V urejevalniku blokov: pokaže predmete, ki jih trenutno stanje vidnosti skriva (prikažejo se zbledeli, da jih izberete). |
| `BVSTATE` | `BVS` | V urejevalniku blokov, pri bloku s stanji vidnosti: preklopi na stanje ali doda, preimenuje ali izbriše enega. |
| `CAL` |  | Izračuna dolžino ali število: + − * / in oklepaje, kot jih vnesete kjer koli |
| `CENTERLINE` | `CL` | Središčnica med dvema črtama: na pol poti med njima ali vzdolž simetrale, kadar se stikata (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Oznaka središča: križ v središču kroga ali loka, s središčnicama tik čez njega (CM) |
| `CHAMFER` | `CHA` | Posnemi oglišče med dvema črtama (D dve razdalji, A dolžina in kot, P vsako oglišče polilinije) |
| `CHSPACE` |  | CHSPACE: premakne predmete med listom in modelom prek pogleda. Skalirani so in zasukani, da so videti enako z druge strani. Na listu gredo v model; med delom prek pogleda (MSPACE) pridejo na list. |
| `CIRCLE` | `C` | Središče in polmer, premer, 2 ali 3 točke |
| `CLASS` |  | Izbrane predmete da v razred, ali pri praznem izboru nastavi aktivni razred (? jih izpiše) |
| `CLASSES` | `CLS` | Podokno Razredi: razredi razvrstijo predmete čez sloje; prikažete, skrijete in oblikujete jih ter jih nastavite po pogledu (CLS) |
| `COMMANDLINE` | `CMDLINE` | Pripne ali odpne ukazno vrstico, jo naredi eno vrstico, nastavi vrstice zgodovine ali odpre zgodovino (F2) |
| `COMPARESETTINGS` | `CMPSET` | Primerja sloge kot, sloge besedila, sloje, liste ali enote: dva v tej risbi ali ta risba z drugo odprto risbo, in prenese vrednost. |
| `CONSTRAINTBAR` | `CBAR` | Prikaže ali skrije vrstice omejitev (Showall / Hideall ali za vsak predmet) |
| `COPY` | `CO`, `CP` | Kopira predmete, kolikorkrat kliknete |
| `COPYBASE` |  | Kopira predmete v odložišče z izhodiščno točko, ki jo izberete |
| `COPYCLIP` |  | Kopira predmete v odložišče (Ctrl+C); PASTECLIP jih postavi |
| `COUNT` | `BCOUNT` | Šteje sklice na bloke: izberite enega, da izberete in preštejete vsak sklic tega bloka |
| `COUNTTABLE` |  | Postavi tabelo števila blokov |
| `CREDITS` |  | Zasluge knjižnice vstavi v risbo kot tabelo. Zaženite znova, da tabelo posodobite s predmeti, ki so zdaj v risbi. |
| `CURSORSIZE` |  | Velikost križca: 100 ga razteza od roba do roba risbe (Nastavitve › Kazalec › Celozaslonski način) |
| `CUTCLIP` |  | Izreže predmete v odložišče (Ctrl+X): kopira, nato izbriše |
| `CYLINDER` | `CYL` | Valj: središče, polmer in višina (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Našteje bloke, njihove atribute in lastnosti predmetov kot tabelo v risbi ali datoteki CSV |
| `DATALINK` | `DL` | Tabela iz datoteke CSV, ki si zapomni datoteko, zato jo je mogoče znova prebrati |
| `DATALINKUPDATE` | `DLU` | Znova prebere datoteko podatkovne povezave in znova napolni njene tabele |
| `DCALIGNED` | `DCALI` | Dimenzijska omejitev: prava razdalja med točkama, točko in črto ali dvema črtama |
| `DCANGULAR` | `DCANG` | Dimenzijska omejitev: kot med dvema črtama ali kot loka |
| `DCCONVERT` |  | Spremeni kote, narisane na geometriji, ki jo je mogoče omejiti, v dimenzijske omejitve |
| `DCDIAMETER` | `DCDIA` | Dimenzijska omejitev: premer kroga ali loka |
| `DCDISPLAY` |  | Prikaže ali skrije dimenzijske omejitve na risbi |
| `DCHORIZONTAL` | `DCHOR` | Dimenzijska omejitev: vodoravna razdalja |
| `DCLINEAR` | `DCLIN` | Dimenzijska omejitev: vodoravna ali navpična razdalja, od mesta, kjer jo postavite |
| `DCRADIUS` | `DCRAD` | Dimenzijska omejitev: polmer kroga ali loka |
| `DCVERTICAL` | `DCVER` | Dimenzijska omejitev: navpična razdalja |
| `DELBLOCKS` |  | Izbriše bloke: vsak sklic (tudi gnezdene, na vsakem listu) in definicije |
| `DELCONSTRAINT` | `DELCON` | Odstrani vse omejitve (geometrijske in dimenzijske) z izbranih predmetov |
| `DELOPENING` |  | Vrata ali okno vzame iz stene. |
| `DESCRIBE` | `DESC` | Pove, kaj risba vsebuje: koliko predmetov, katere vrste, kako velikih, kaj je izbrano. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Počisti izbor (Esc) |
| `DETAILS` | `DET` | Podrobnosti vašega podjetja, najdene za to, kar risate: poišči, dodaj blok, izpiši, odstrani, vklopi ali izklopi ponudbe. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Nariše diagram iz besedila: poteka Mermaid, komponentni diagram PlantUML, D2, seznam od-do ali XML draw.io, kot bloke in povezave, ki jih lahko uredite |
| `DIMALIGNED` | `DAL`, `DIMALI` | Prava razdalja med dvema točkama |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kot med dvema črtama, loka ali s tremi točkami |
| `DIMARC` | `DAR` | Kota dolžine loka: razdalja vzdolž loka, s simbolom loka (DAR) |
| `DIMASZ` |  | Nastavitev kote: velikost puščice |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kote, zložene od ene osnovne črte |
| `DIMBREAK` | `DBREAK` | Prekine kotne in pomožne merilne črte, kjer sekajo druge predmete (samodejno), med dvema točkama (ročno) ali odstrani prelome |
| `DIMCONSTRAINT` | `DCON` | Dimenzijske omejitve: linearne, poravnane, kotne, polmerne, premerne, pretvori |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Veriga kot, vsaka od konca zadnje |
| `DIMDEC` |  | Nastavitev kote: decimalna mesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Premer loka ali kroga |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Sprosti kote od predmetov, s katerimi so povezane (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Spremeni besedilo kote (Domov, Novo besedilo, Zasukaj) ali nagne pomožne merilne črte (Poševno) |
| `DIMEXE` |  | Nastavitev kote: podaljšek čez merilno črto |
| `DIMEXO` |  | Nastavitev kote: odmik od izhodišča |
| `DIMGAP` |  | Nastavitev kote: razmik okoli besedila |
| `DIMINSPECT` |  | Kota pregleda: okvir okoli vrednosti z oznako in pogostostjo preverjanja dela |
| `DIMJOGGED` | `DJO`, `JOG` | Kota polmera z lomom: polmer, narisan od bližje točke, ko je središče daleč (DJO) |
| `DIMJOGLINE` | `DJL` | Doda simbol preloma na merilno črto linearne ali poravnane kote, da pokaže, da razdalja ni narisana v merilu (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vodoravna ali navpična razdalja (R za poljuben kot) |
| `DIMLUNIT` |  | Nastavitev kote: oblika dolžine (1 znanstvena, 2 decimalna, 3 inženirska, 4 arhitekturna, 5 ulomkovna) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinatna kota: razdalja X ali Y točke od izhodišča UCS, na vodilki (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Prepiše spremenljivke kote na izbranih kotah brez spreminjanja njihovega sloga; Počisti vrne slog (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Polmer loka ali kroga |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Poveže točke kote s predmeti, da ji sledi in se znova izmeri, ko se premaknejo (DRE) |
| `DIMSCALE` |  | Nastavitev kote: skupno merilo (velikosti × to) |
| `DIMSPACE` |  | Enakomeren razmik med vzporednimi kotami, merjen od osnovne kote (0 jih poravna, Samodejno je dvakratna višina besedila) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Naredi, spremeni, nastavi kot tekoče, izbriše, uporabi in primerja imenovane sloge kot (pogovorno okno; -DIMSTYLE v ukazni vrstici) |
| `DIMTEDIT` | `DIMTED` | Premakne besedilo kote levo, desno ali na sredino merilne črte, ali ga obrne |
| `DIMTEXTUNIT` | `DTU` | Besedilo kote v mm, cm, m ali km ali v lastnih enotah risbe: izbrane kote, sicer nove (DTU) |
| `DIMTXT` |  | Nastavitev kote: višina besedila |
| `DIST` | `DI` | Razdalja in kot med dvema točkama |
| `DISTRIBUTE` |  | Izbrane predmete enakomerno razporedi, vstran ali navzgor in navzdol: enaki koraki med središči ali enaki razmiki; zunanja dva ostaneta |
| `DIVIDE` | `DIV` | DIVIDE (DIV): oznake, ki razdelijo črto, lok, krog, polilinijo, spline ali elipso na enake dele. Točke ali z možnostjo Blok blok na vsaki oznaki. |
| `DOCUMENTS` | `DOCS` | Odpre podokno Dokumenti: preverjanje risb ven in noter, revizije, stanja izdaje in odobritev za mapo projekta |
| `DOOR` | `DR` | Postavi vrata v steno. Stran, na katero kliknete, je stran, v katero se odpirajo. |
| `DRAWORDER` |  | Spremeni vrstni red risanja: predmete pripelje naprej, pošlje nazaj ali jih postavi nad ali pod druge predmete. |
| `DUPLICATE` | `DUP` | Kopija, ki se premika s kazalcem: kliknite, da jo odložite (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Lastnosti risbe: naslov, avtor in ostalo ter vaši pari ime in vrednost |
| `DXFOUT` |  | Prenese risbo kot DXF R12 (Shrani ohrani svojo obliko) |
| `EATTEDIT` | `DDATTE` | Uredi atribute sklica na blok: vrednosti, besedilo in lastnosti, en atribut naenkrat |
| `ELLIPSE` | `EL` | Krajišči osi in druga polovična os |
| `ERASE` | `E`, `DELETE` | Odstrani predmete |
| `EXPLODE` | `X` | Razstavi polilinije, bloke in kote na dele |
| `EXPORT` | `EXP` | Shrani kopijo risbe v vrsti datoteke, ki jo zapiše dodatek |
| `EXPORT3D` | `3DEXPORT` | Izvozi 3D model: GLB, OBJ ali STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapiše točke in vstavitvene točke blokov z enim atributom kot opis v datoteko CSV ali TXT (PNEZD, PENZD ali XYZ) za programe BIM in geodezijo |
| `EXTEND` | `EX` | Podaljša predmete, da segajo do drugih: kliknite blizu konca, povlecite čez več predmetov ali Shift+klik za prirezovanje |
| `EXTRIM` |  | EXTRIM: izberite en rezalni rob, nato stran. Vse, kar seka rob, se prireže na tej strani. Kose, ki bi odšli, prikaže premik kazalca. |
| `EXTRUDE` | `EXT` | Iztisne zaprte 2D predmete v telesa (3D) |
| `FIELD` |  | Postavi polje v besedilo, celico tabele ali atribut: datum, ime datoteke, številko lista, lastnost risbe, površino ali dolžino predmeta ali formulo |
| `FILLET` | `F` | Zaokroži ali pokvadratirajte oglišče med dvema predmetoma (R polmer, P vsako oglišče polilinije, M več) |
| `FIND` |  | Poišče in zamenja besede v besedilu, vrednostih atributov in besedilu kot |
| `FLATTEN` |  | Nastavi višino (Z) in debelino izbranih predmetov na 0, tudi v blokih, ki jih uporabljajo. |
| `FLOOR` |  | Izberite etažo, na kateri risate, dodajte novo ali premaknite ali kopirajte izbor nanjo. |
| `FLOORLAYERS` |  | Spremeni etaže v sloje z imeni Floor-Layer za datoteko, ki gre nekomu brez etaž. |
| `FLOORS` | `FLR` | Odpre podokno Etaže: zlaga etaže v enem modelnem prostoru. |
| `GCCOINCIDENT` |  | Omejitev: dve točki se srečata ali točka ostane na predmetu |
| `GCCOLLINEAR` |  | Omejitev: dve črti ostaneta na eni črti |
| `GCCONCENTRIC` |  | Omejitev: dva kroga ali loka imata skupno središče |
| `GCEQUAL` |  | Omejitev: dve črti ostaneta enako dolgi ali dva kroga/loka enakega polmera |
| `GCFIX` |  | Omejitev: točka ali celoten predmet ostane, kjer je |
| `GCHORIZONTAL` |  | Omejitev: črta (ali dve točki) ostane vodoravna |
| `GCPARALLEL` |  | Omejitev: dve črti ostaneta vzporedni |
| `GCPERPENDICULAR` |  | Omejitev: dve črti ostaneta pod pravim kotom |
| `GCSYMMETRIC` |  | Omejitev: dve točki, črti ali kroga se zrcalita čez črto |
| `GCTANGENT` |  | Omejitev: črta in krog ali lok (ali dva od njih) ostaneta tangentna |
| `GCVERTICAL` |  | Omejitev: črta (ali dve točki) ostane navpična |
| `GDSIN` | `GDS` | Ogled IC postavitve (datoteka GDSII): vsak sloj in datatype kot sloj risbe, ploski, v uporabniških enotah; samo za ogled in merjenje (laboratorijski poskus) |
| `GEOMCONSTRAINT` | `GCON` | Geometrijske omejitve: vodoravna, navpična, vzporedna, tangentna, sovpadajoča … |
| `GLBOUT` |  | Izvozi 3D model kot GLB (glTF) |
| `GRADIENT` | `GD` | Zapolni območje s prelivanjem ene ali dveh barv |
| `GRID` |  | Nastavi mrežo: razdaljo med črtami, vsako N-to črto kot glavno, VKLOPLJENO ali IZKLOPLJENO ali Samodejno, da znova sledi povečavi |
| `GRIDMOVE` | `GM` | Premakne mrežno črto in prinese, kar je nanjo obešeno: stene se raztegnejo, stebri, mehurčki in oznake se premaknejo, kote sledijo. |
| `GROUP` | `G` | GROUP (G): izbranim predmetom da skupno ime. Klik na enega od njih nato izbere vse. Enter pri imenu naredi neimenovano skupino. |
| `GROUPEDIT` |  | GROUPEDIT: spremeni skupino. Izberite enega od njenih predmetov ali podajte njeno ime, nato Dodaj ali Odstrani predmete, PREIMENUJ, spremeni njen opis ali določite, ali klik izbere celotno skupino. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Zapolni območje s polnilom ali vzorcem: kliknite v njem ali izberite zaprte predmete (H) |
| `HATCHEDIT` | `HE` | Spremeni šrafuro: vzorec, merilo, kot, izhodišče in njeno povezavo z mejo. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Ponovno naredi mejne polilinije iz šrafure, povezane z njo ali ne |
| `HATCHTOBACK` |  | Pošlje vse šrafure za vse ostalo. |
| `HELP` | `?` | Ta seznam |
| `HIDEOBJECTS` |  | Skrije izbrane predmete do UNISOLATEOBJECTS. Ni shranjeno z risbo. |
| `HISTORY` | `HIST` | HISTORY (HIST): različice te risbe — kopije, shranjene na tem računalniku, ko jo Studio shrani, in različice v oblaku — za odpiranje, obnovo in primerjavo z barvno označenimi spremembami. |
| `ID` |  | Koordinate točke |
| `IMAGE` | `IM` | Daje CadCraft slikovne datoteke, ki jih risba uporablja (DWG hrani samo, kje so bile). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Postavi sliko (PNG ali JPEG) iz datoteke. |
| `IMAGECLIP` | `ICL` | Obreže sliko na pravokotnik ali mnogokotnik ali odstrani obrez. |
| `IMPORT` | `IMP` | Uvozi datoteko vrste, ki jo dodatek bere, v to risbo |
| `INSERT` | `I`, `DDINSERT` | Postavi blok (S merilo, R zasuk); F iz datoteke DWG/DXF, L iz knjižnice |
| `INTERSECT` | `IN` | Ohrani le, kar imajo telesa skupnega (3D), ali območje, ki ga imajo 2D regije skupno |
| `ISODRAFT` |  | ISODRAFT: izometrično risanje vklopljeno ali izklopljeno, ali naravnost na ravnino Levo, Zgoraj ali Desno. Ko je vklopljeno, Orto in polarno sledenje sledita dvema osema ravnine, mreža je narisana izometrično, ELLIPSE pa ima Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Pokaže samo izbrane predmete; vse drugo v tem prostoru je skrito do UNISOLATEOBJECTS. Ni shranjeno z risbo. |
| `ISOPLANE` |  | ISOPLANE: izberite izometrično ravnino za risanje: Levo, Zgoraj ali Desno. Enter gre na naslednjo, kot F5, ko je izometrično risanje vklopljeno. |
| `JOIN` | `J` | Združi črte, loke in polilinije, ki se stikajo od konca do konca, v eno polilinijo; črte na eni črti v eno črto (J) |
| `LASER` | `LASERCUT` | Odpre podokno Laser: pošlje sloje rezalniku ali graverju (G-koda GRBL) |
| `LASSOMODE` |  | Pritisk in vlečenje riše lasso (1) ali pravokotnik (0) |
| `LAYDEL` |  | Izbriše sloj in vsak predmet nanj (v modelu, na listih in v blokih) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Odpre upravitelja slojev: vsi sloji v eni tabeli |
| `LAYERPANEL` |  | Prikaže podokno slojev |
| `LAYFRZ` |  | Zamrzne sloj vsakega predmeta, ki ga izberete |
| `LAYGROUP` | `LG` | Združi sloje v mape v podoknu Sloji. |
| `LAYISO` |  | Izolira sloje izbranih predmetov (vsi drugi sloji izklopljeni) |
| `LAYLOCKFADE` |  | Nastavi, kako zbledijo predmeti na zaklenjenih slojih in ali klik lahko nanje seže. |
| `LAYMCUR` |  | Naredi sloj predmeta, ki ga izberete, tekočega |
| `LAYMRG` |  | Združi sloje: njihovi predmeti preidejo na ciljni sloj, združeni sloji pa izginejo |
| `LAYOFF` |  | Izklopi sloj vsakega predmeta, ki ga izberete |
| `LAYON` |  | Vklopi vse sloje |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nov list z glavo risbe in pogledom |
| `LAYTHW` |  | Odmrzne vse sloje |
| `LAYUNISO` |  | Ponovno vklopi sloje, ki jih je LAYISO izklopil |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Pretvori besedilo, vneseno s starimi vietnamskimi pisavami (pisave TCVN3 / ABC, kot .VnTime, in pisave VNI, kot VNI-Times), v Unicode. Takšno besedilo je že prikazano, kot se bere; to ga dokončno prepiše s številom in enim korakom razveljavitve. |
| `LENGTHEN` | `LEN` | Podaljša ali skrajša črte, loke in polilinije: za količino, odstotek, na skupno dolžino ali z vlečenjem (LEN) |
| `LIBRARY` | `LIB` | Podokno knjižnice: postavitev elementov, preverjanje posodobitev, zasluge |
| `LIMITS` |  | Nastavi meje risbe: ON, OFF ali spodnje levo in zgornje desno oglišče. Z vklopljenimi mejami so točke zunaj njih zavrnjene |
| `LINE` | `L` | Ravni odseki, vsak je svoj predmet |
| `LINETYPE` | `LT`, `CELTYPE` | Vrsta črte, ki jo dobijo novi predmeti (po sloju, po bloku ali imenovana) |
| `LINKVIEWS` | `SYNCVIEWS` | Premika in povečuje vse podokna skupaj (razdeljen zaslon), za primerjavo dveh risb ali različic |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ali VLIDE) odpre urejevalnik LISP: okno za pisanje, nalaganje in preizkušanje rutine. Naloži v risbo prebere vsak obrazec, kot ga prebere nalaganje datoteke z APPLOAD, in naredi njene ukaze. Zaženi izbor oceni izbrane obrazce ali obrazec, v katerem je kazalec. Konzola prikaže, kaj je rutina izpisala, in vsako napako z vrstico. Ujemajoči se oklepaj je označen med tipkanjem, Enter pa zamakne novo vrstico. Novo, Odpri in Shrani delujejo na datoteki .lsp. Seznami ob besedilu prikazujejo funkcije, ki jih rutina določa, tiste, ki jih kliče, a jih ta LISP še nima, in vse, ki jih ima. Okno ne blokira risbe, zato lahko rutina zahteva točke; Stop ali Esc konča tečočo rutino. |
| `LIST` | `LI`, `LS` | Opiše predmete v zgodovini |
| `LTSCALE` | `LTS` | Merilo vrste črte risbe (vsaka črtica in presledek se z njim pomnožita) |
| `LWDISPLAY` | `LWT` | Prikaže ali skrije debeline črt na zaslonu (gumb LWT v vrstici stanja) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Debelina črte, ki jo dobijo novi predmeti (po sloju, po bloku, privzeta ali mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kartni sloji pod modelnim prostorom: koordinatni sistem risbe, ploščice, WMS, WMTS, ArcGIS, slike |
| `MASSPROP` |  | MASSPROP: lastnosti preseka regij in zaprtih predmetov: površina, obseg, težišče, momenti in produkt vztrajnosti, polmeri vrtenja in glavne osi. Natančno za črte in loke. Poročilo lahko zapiše v besedilno datoteko. |
| `MATCHPROP` | `MA`, `PAINTER` | Ujemanje lastnosti: kopira sloj, barvo in drugo enega predmeta na druge (MA) |
| `MEASURE` | `ME` | MEASURE (ME): oznaka vsako podano dolžino vzdolž črte, loka, kroga, polilinije, zlepka ali elipse, od krajišča, najbližjega vašemu kliku. Točke ali z možnostjo Blok blok na vsaki oznaki. |
| `MEASUREGEOM` | `MEA` | Izmeri razdaljo, polmer, kot ali površino (MEA) |
| `MINSERT` |  | MINSERT: postavi blok v vrstice in stolpce naenkrat. Vsak je svoj sklic, zato lahko katerega koli premaknete ali izbrišete. |
| `MIRROR` | `MI` | Zrcali predmete čez črto |
| `MLEADER` | `MLD`, `MLEAD` | Večkratna vodilka: puščica, vodilka in opomba kot en predmet (MLD) |
| `MLEADERALIGN` | `MLA` | Poravna večkratne vodilke z eno od njih v smeri, z enakim razmikom ali razporejene med dvema točkama (MLA) |
| `MLEADERCOLLECT` | `MLC` | Zbere več večkratnih vodilk v eno: njihovi bloki v vrstici ali stolpcu ali njihove opombe ena pod drugo (MLC) |
| `MLEADEREDIT` | `MLE` | Doda vodilne črte večkratni vodilki ali jih odstrani; preklopi njeno vsebino med besedilom in blokom (MLE) |
| `MLINE` |  | Riše vzporedne črte skupaj, na ogliščih spojene. |
| `MOVE` | `M` | Premakne predmete za osnovno točko in drugo točko |
| `MSPACE` | `MS` | Dela na modelu prek pogleda odprtega lista (ali dvakrat kliknite znotraj pogleda). |
| `MTEXT` | `MT`, `T` | Odstavčno besedilo: povlecite njegovo širino, nato pišite na mestu; Enter začne nov odstavek (T) |
| `MVIEW` | `MV` | Pogled na model, na postavitvi |
| `NAMEDVIEW` | `NV`, `VIEWS` | Imenovani pogledi: shranite pogled na zaslonu (ali okno) pod imenom in se vrnite nanj (NV) |
| `NCOPY` |  | Kopira predmete iz sklica na blok ali povezane risbe v risbo, ne da bi jo razstavil. |
| `NEARBY` |  | Pove, kaj je blizu kazalca, najbližje najprej, z razdaljo in stranjo. |
| `NEW` |  | Začne novo risbo |
| `OBJECTSCALE` | `OBJSCALE` | Merila anotacij anotativnega besedila in kot: dodaj merilo, izbriši enega, dodaj trenutno merilo ali jih izpiši (vsak pogled jih prikaže v velikosti za svoje merilo) |
| `OBJOUT` |  | Izvozi 3D model kot OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Pisarniški standard: višine besedila na papirju, sloji, polja glave risbe in predloge v enem zapisu. Pokaže veljavnega in od kod prihaja; Uvozi datoteko .json v to risbo, doda pisarniške sloje, ki jih risba nima, in našteje polja glave risbe. |
| `OFFSET` | `O` | Vzporedne kopije na razdalji |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kako OFFSET zapre reže na zunanjih ogliščih polilinije. 0 podaljša odseke, 1 doda lok, 2 doda ravni rez. Ohranjeno za to sejo. |
| `OLELIST` | `OLES` | Našteje predmete OLE, ki jih ima risba, in postavi kopijo slike enega, kjer izberete |
| `OPEN` |  | Odpre DWG ali DXF iz tega računalnika |
| `OPENIN3D` |  | Odpre to risbo v aplikaciji za 3D modeliranje, v novem zavihku (nič se ne naloži) |
| `OPTIONKEYS` | `OPTKEYS` | Daje možnostim ukazov lastne črke (ARRAY.PO, P) v eni besedilni datoteki |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Odpre meni lovljenja predmetov: izberite, katera lovljenja so vklopljena. Tudi desni klik na Lovljenje v vrstici stanja. |
| `OVERKILL` |  | Izbriše podvojene predmete in združi prekrivajoče se ali od konca do konca stične črte in loke v okviru tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Podokno Parametri: uporabniški parametri in dimenzijske omejitve v eni tabeli |
| `PARTSLIST` | `PLIST` | Tabela seznama delov vsakega standardnega dela in jeklenega profila, postavljenega iz knjižnice |
| `PASTEAREA` | `PAREA` | Prilepi območje, kopirano v MarkupCraft (Kopiraj območje), v pravi velikosti kot slika. |
| `PASTEBLOCK` |  | PASTEBLOCK: prilepi, kar ste kopirali, kot en blok. Blok dobi svoje ime; RENAME mu da vaše. |
| `PASTECLIP` |  | Prilepi odložišče: sledi kazalcu, kliknite, kamor naj gre (Ctrl+V) |
| `PASTEORIG` |  | Prilepi odložišče na koordinate, iz katerih je bilo kopirano (Ctrl+Shift+V) |
| `PDF` |  | Daje CadCraft datoteke PDF, ki jih uporabljajo podlage risbe |
| `PDFADJUST` |  | Zbledi, kontrast, enobarvno ali izklopi podlago PDF |
| `PDFATTACH` | `PDFATT` | Priloži stran PDF kot podlago (PDFATTACH) |
| `PDFCLIP` |  | Obreže podlago PDF na pravokotnik ali mnogokotnik |
| `PDFIMPORT` | `PDFIM` | Črte, polnila in besedilo strani PDF spremeni v predmete risbe (PDFIMPORT) |
| `PDFLAYERS` |  | Vklopi ali izklopi sloje podlage PDF |
| `PEDIT` | `PE` | Uredi polilinijo: zapri, odpri, združi, širina, prilagodi krivuljo, zlepek, odcepi, generiranje vrste črte, obrni; črte, loke in zlepke je mogoče spremeniti v polilinije |
| `PENPRESSURE` |  | Ali pritisk poteze pisala nastavi debelino črte tistega, kar naredita SKETCHFIX in SKETCHLIVE (privzeto vklopljeno). Hrani se v tem brskalniku. |
| `PHOTOSKETCH` | `PSK` | Iz fotografije ročne skice na papirju naredi črte in loke v merilu, izravna perspektivo in vsaki barvi pisala da svoj sloj. |
| `PICKSTYLE` |  | PICKSTYLE: ali izbira enega predmeta v skupini izbere celotno skupino (1, začetna nastavitev) ali samo ta predmet (0). Ohranjeno za to sejo. |
| `PLAN` |  | Zasuka pogled, da je os X UCS (trenutni ucs, shranjen Ucs ali Svet) vodoravna na zaslonu. Nič v risbi se ne premakne. |
| `PLINE` | `PL` | Polilinija iz odsekov črt in lokov |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Izris v PDF: list ali model v merilu |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabele slogov izrisa: nastavi, kako se vsaka barva izriše (barva, črna, siva, tiskarska barva, debelina črte); shranjeno z risbo (STYLESMANAGER) |
| `POINT` | `PO` | Točkovni predmeti |
| `POINTCLOUD` | `PC` | priložen oblak točk: rez, višina, debelina, barva, velikost, viden, povečava, odklopi |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | priloži oblak točk (LAS, LAZ, XYZ, PTS) pod risbo |
| `POLARANG` |  | Korak polarnega sledenja v stopinjah (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravilni mnogokotnik |
| `PRESSPULL` |  | Potisne ali povleče ploskev telesa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Odpre podokno Lastnosti (tudi Ctrl+1 ali dvojni klik na predmet) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Zloži podokno Lastnosti na rob okna |
| `PSPACE` | `PS` | Zapustite pogled, v katerem delate, in se vrnite na list (ali dvakrat kliknite zunaj njega). |
| `PUBLISH` | `-PUBLISH` | Izriše več ali vse liste v en PDF (stran in zaznamek na list) |
| `PURGE` | `PU` | Odstrani definicije blokov, ki jih nič ne uporablja |
| `QDIM` |  | Hitra kota: kotira več predmetov naenkrat (zvezno, izhodiščno, zamaknjeno, ordinatno, polmer ali premer) |
| `QPMODE` | `QP` | Hitre lastnosti s kazalcem vklopljene ali izklopljene |
| `QSELECT` | `QS` | Hitra izbira: vsi predmeti vrste, katerih sloj, barva, velikost ali ime se ujemajo (QS) |
| `RASTERSNAP` |  | Vklopi ali izklopi lovljenje na črte skeniranih listov. |
| `RAY` |  | Poltrak: konstrukcijska črta iz točke, neskončna na eno stran. |
| `RECOVER` |  | Odpre poškodovano DXF ali DWG: preskoči, kar ni mogoče prebrati, namesto da bi datoteko zavrnil, pove, kaj je preskočil, nato preveri in popravi risbo, kot to naredi AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Zaprta polilinija iz dveh oglišč |
| `REDLINE` | `RDL` | Rdeča označba v revizijo: prebere paket rdečih označb MarkupCraft, sprejme ali zavrne vsako spremembo, sprejete oblaci z dnevnikom revizij in shrani datoteko odgovorov (RDL) |
| `REDO` |  | Ponovi, kar je bilo razveljavljeno |
| `REFCLOSE` |  | Konča urejanje bloka na mestu: shrani ga ali zavrže spremembe |
| `REFEDIT` |  | Uredi blok na mestu, kjer je njegov sklic, ostalo risbo pa zbledi; REFCLOSE shrani |
| `REGEN` | `RE` | Obnovi, kar je narisano v tem zavihku, iz risbe |
| `REGENALL` | `REA` | Obnovi, kar je narisano v vsakem zavihku, podoknu in odprti risbi |
| `REGION` | `REG` | REGION (REG): iz zaprtih predmetov, ali iz črt, lokov in polilinij, ki se zaprejo v zanko od konca do konca, naredi ploske površine (regije). UNION, SUBTRACT in INTERSECT nato združijo regije, MASSPROP pa da njihove lastnosti preseka. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrira več skeniranj: postavi jih v en okvir po izbranih parih točk ali tarčah, izpopolni z ICP, izvozi en LAS ali E57 |
| `REINIT` |  | Ponovno naloži datoteko aliasov |
| `RENAME` | `-RENAME`, `REN` | Preimenuje sloj ali blok (vsak predmet ali sklic sledi) |
| `REVCLOUD` | `RC` | Oblak revizije: zaokroži pravokotnik, mnogokotnik, prosto pot ali predmet (RC) |
| `REVOLVE` | `REV` | Zavrti zaprte 2D predmete okoli osi v telesa (3D) |
| `ROTATE` | `RO` | Zavrti predmete okoli osnovne točke |
| `SAMPLES` | `SAMPLE` | Odpre enega od vzorčnih risb CadCraft (arhitekturni nabor, izvedeni stanje), da se naučite |
| `SAVE` | `QSAVE` | Prenese risbo v njeni obliki (DWG ali DXF) |
| `SAVEAS` |  | Prenese risbo kot DWG ali DXF: izberete, katero |
| `SAYSEL` |  | Pove, kaj je izbrano, po en stavek za vsak predmet. |
| `SCALE` | `SC` | Skalira predmete okoli osnovne točke |
| `SCALELISTEDIT` | `SCALELIST` | Dodaj, uredi in izbriši merila risbe; pojavijo se v seznamih meril pogleda in izrisa ter se shranijo v datoteko (SCALELIST) |
| `SCANALIGN` | `SCL` | Poravna skenirani list na dve točki: premakne, zasuka in, če izberete, skalira. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Vstavi skenirano risbo: PNG, JPEG ali TIFF (ena stran ali vse strani večstranske datoteke) ali stran PDF, ki je slika. |
| `SCANCLEAN` | `SCC` | Naredi skenirani list črno-belega in odstrani pike. |
| `SCANCROP` | `SCR` | Obreže skenirani list na okno. |
| `SCANDESKEW` | `SCD` | Najde kot, pod katerim ležijo dolge črte skeniranega lista, in list zasuka v pravokotno lego, ko sprejmete kot. |
| `SCANERASE` | `SCE` | Izbriše območje skeniranega lista: pravokotnik, mnogokotnik ali lasso. |
| `SCANINFO` | `SCI` | Pokaže prvotno datoteko skeniranega lista in korake od takrat. |
| `SCANSCALE` | `SCS` | Skalira skenirani list: izberite dve točki na njem in vnesite pravo razdaljo med njima. |
| `SCANTRACE` | `SCT` | Sledi skeniranemu listu v črte in loke na novem sloju, do tolerance, ki jo nastavite. Besedilo in šrafure ostanejo kot raster. |
| `SELECT` |  | Izbere predmete zdaj (za P, Prejšnji, v naslednjem ukazu) |
| `SELECTALL` | `AI_SELALL` | Izbere vsak predmet, ki ga lahko urejate na tem zavihku (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Izbere vsak predmet, podoben tistim, ki jih izberete: enaka vrsta, sloj in barva (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Prikaže podokno Komplet listov: listi iz mnogih risb, oštevilčeni, objavljeni kot en PDF. |
| `SHORTCUTS` | `KEYS` | Daje kateremu koli ukazu lastno tipko (Ctrl ali Alt s črko ali prosto funkcijsko tipko), shranjeno v tem brskalniku ali namizni aplikaciji. |
| `SHXFONTS` | `SHX` | Daje CadCraft pisave SHX iz mape ali datotek, da slogi besedila, ki jih imenujejo, risbe z njimi (seznam, odstrani, obrni) |
| `SKETCHFIX` | `SKF` | Riše proste poteze; vsaka postane čista črta, krog, lok, pravokotnik ali polilinija, poravnana in spojena z drugimi. |
| `SKETCHLIVE` | `SKL` | Skicira s pisalom: vsaka poteza postane natančna črta, krog, lok ali pravokotnik, ko dvignete pisalo, pripeta na risbo, njeno velikost pa lahko vnesete čez. |
| `SPLINE` | `SPL` | Nariše zlepek skozi točke (ali z nadzorno poligonalo) ali spremeni polilinijo v zlepek |
| `SPLINEDIT` | `SPE` | Uredi zlepek: prilagodi točke, nadzorne točke in uteži, odpre ali zapre, obrne ali pretvori v polilinijo |
| `SPLIT` |  | Razdeli območje risbe na podokna (kot VPORTS na modelu; tudi iz lista) |
| `STEELMEMBER` | `SMEMBER` | Jeklen element v 3D iz standardnega profila: dve točki (nosilec) ali osnovna točka in višina (steber) |
| `STLOUT` |  | Izvozi 3D model kot STL (milimetri) |
| `STRETCH` | `S` | Raztegni: povlecite križno okno čez konce, da premaknete; kar je znotraj, se premakne, ostalo ostane (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Slogi besedila: pisava, višina, širina in nagib, ki jih dobi novo besedilo (pogovorno okno; -STYLE v ukazni vrstici) |
| `SUBTRACT` | `SU` | Odvzame telesa od drugih (3D) ali 2D regije od regij |
| `SWBOUT` | `SWMACRO` | Prenese makro za SolidWorks (.swb), ki model spet zgradi kot eno omejeno skico |
| `SWEEP` |  | Pomakne zaprte 2D predmete vzdolž poti (črta, polilinija, lok, krog) v telesa (3D) |
| `TABLE` | `TB` | Naredi tabelo: vrstice in stolpce ali iz celic preglednice na odložišču ali datoteki CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Uredi tabelo: pišite v celico, vstavljajte in brišite vrstice in stolpce, velikosti, združene celice, poravnavo |
| `TABLEEXPORT` |  | Shrani, kar tabela prikazuje, kot datoteko CSV |
| `TABLEPASTE` | `PASTETABLE` | Naredi tabelo iz celic preglednice na odložišču |
| `TABLESTYLE` | `TS` | Slogi tabel: višine besedila, poravnava, razmik in obrobe za naslovne, glave in podatkovne vrstice |
| `TAGS` |  | Oznake na sklicih blokov: določite oznako (vrsto, dovoljene vrednosti, bloke, na katere se nanaša), jo nastavite na izbrane sklice in jih izpišite kot razpored, ki ga lahko shranite kot CSV |
| `TEXT` | `DT`, `DTEXT` | Enovrstično besedilo; Enter začne naslednjo vrstico |
| `TEXTEDIT` | `ED`, `DDEDIT` | Uredi besedilo na mestu: izberite besedilo (ali dvakrat kliknite) (ED) |
| `TEXTMASK` | `TMASK` | Postavi ozadje (ozadje risbe ali barvo) za besedilo ali ga odstrani. |
| `TEXTTOFRONT` |  | Vse besedilo, kote in vodilke pripelje pred vse ostalo. |
| `TOOLBAR` |  | Izberite, kaj kažejo gumbi orodne vrstice: ikone in besedilo, samo ikone ali samo besedilo (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Postavi orodno vrstico na vrh, dno, levo ali desno okna |
| `TOOLBARROWS` |  | Izberite, koliko vrstic uporablja orodna vrstica: prelom, da se prilega, 2 ali 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Naredi vrstice nad risbo standardne ali kompaktne |
| `TOUCHCROSSHAIR` | `TCX` | Zamaknjen križec za risanje s prstom: en prst premika križec, ki je nad njim in ob strani, zato prst ne pokrije točke izbora. Dvig prsta ničesar ne izbere; gumb Klik ali dotik z drugim prstom izbere na križcu, držanje Klik med premikom vleče. Dolg pritisk ali gumb Enter je Enter. Dva prsta premikata in povečujeta. Možnosti: ON, OFF, Auto (vklopljeno samo, kjer je prst edini kazalec), Distance (razdalja), Side (stran). |
| `TOUR` | `TUTORIAL` | Ponovno zažene šestkoračni ogled prve risbe |
| `TRIM` | `TR` | Prireže predmete do mesta, kjer jih drugi sekajo: kliknite kos, povlecite čez več kosov ali Shift+klik za podaljšanje |
| `TRIMEXTENDMODE` |  | Kako se TRIM in EXTEND začneta: 1 Hitro (vsak predmet je rezalni rob ali meja), 0 Standardno (najprej izberete robove) |
| `TTR` |  | Krog, tangenten na dva predmeta, s polmerom, ki ga podate (enako kot CIRCLE T). |
| `TURNLEFT` |  | Zasuka pogled za 90° v levo (v nasprotni smeri urinega kazalca): UCS Z -90, pogled sledi. Nič v risbi se ne premakne. |
| `TURNRIGHT` |  | Zasuka pogled za 90° v desno (v smeri urinega kazalca): UCS Z 90, pogled sledi. Nič v risbi se ne premakne. |
| `TURNWORLD` |  | Nazaj na svet: UCS Svet, pogled je spet vodoraven. |
| `TXT2MTXT` | `T2M` | Združi enovrstična besedila v eno odstavčno besedilo, od zgoraj navzdol. |
| `UCS` |  | Vaš lastni koordinatni sistem: izhodišče in os X (izhodišče, kot Z, 3point, OBject, Previous, World, NAmed). Vnesene točke, ortogonalno, polarno sledenje, mreža in novo besedilo mu sledijo; pogled se zasuka, da je njegova os X vodoravna. Nič v risbi se ne premakne. |
| `UNDO` | `U` | Razveljavi zadnji ukaz |
| `UNGROUP` |  | UNGROUP: razdeli skupine. Izberite predmete skupin ali podajte Ime. Predmeti ostanejo v risbi. |
| `UNION` | `UNI` | Združi telesa v eno (3D) ali 2D regije v eno regijo |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Ponovno pokaže vsak predmet, skrit z ISOLATEOBJECTS ali HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Kako so dolžine prikazane in vnesene: decimalno, čevlji in palci, ulomki (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Ponovno izračuna polja in izbere, kdaj se samodejno posodobijo |
| `USDOUT` |  | Izvozi 3D model kot USD (besedilo .usda, binarno .usdc ali paket .usdz) |
| `VIEW` | `-VIEW`, `V` | Standardni 3D pogledi, perspektivni ali vzporedni (3D) |
| `VIEWBASE` | `FLATSHOT` | Postavi ravni 2D pogled 3D teles (spredaj, zgoraj, s strani ali izometrično, skrite črte črtkane) na list ali v model |
| `VIEWLABEL` | `VL` | Naslov pogleda na listu, ki prikazuje ime pogleda njegovega pogleda in se z njim spreminja. |
| `VOICE` |  | Vklopi ali izklopi govorjene ukaze. Prepoznavajo se v tem računalniku. |
| `VPCLIP` |  | Obreže pogled lista na zaprt predmet ali narisan mnogokotnik; Delete ga spremeni nazaj v pravokotnik |
| `VPLAYER` |  | Zamrzne ali odmrzne sloje samo v nekaterih pogledih (Freeze, Thaw, Reset) in izbere, kateri sloji se novim pogledom privzeto zamrznejo (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Razdeli območje risbe na podokna, vsako s svojim pogledom (na listu: pogled, kot MVIEW) |
| `VPVIEW` |  | Nastavi, kaj pogled prikazuje: izberite okno na modelu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizualni slog 3D pogleda: senčeno, robovi, skrite črte, žični model, rentgen |
| `WALL` | `WA` | Riše 2D stene kot polilinijo. Spajajo se in nosijo vrata in okna. |
| `WALLARC` | `WARC` | Riše lok sten. Tlorisne stene so ravne, zato je lok narisan kot kratke ravne stene (po 15 stopinj), ki se spajajo. |
| `WALLDELSEG` |  | Izbriše kos stene med dvema točkama. Preostanek ostane ena ali dve steni. |
| `WALLDIM` |  | Vnesite novo vrednost za kóto: stena na drugem koncu se premakne pravokotno na sebe, stena na prvem koncu ostane, stene, pritrjene nanjo, sledijo. |
| `WALLDISJOIN` |  | Izberite steno blizu enega konca, da prepovete stike na tem koncu: konec je narisan pravokotno in nič mu ne sledi. Izberite jo znova, da jih dovolite. |
| `WALLGRID` |  | Zakleni steno na mrežno črto: vzdolž nje ali en konec na njej. Premaknite črto z GRIDMOVE in stena sledi. |
| `WALLHOLD` |  | Poravnaj in zakleni: stena ohrani svoj položaj glede na drugo steno (na njeni črti ali na razdalji, ki jo ima). Če se ena premakne, sledi druga. |
| `WALLHOLDDIM` |  | Zakleni razdaljo med dvema vzporednima stenama. Če se ena premakne, druga sledi, da jo ohrani. |
| `WALLHOLDS` |  | Izpiše zaklepe sten. |
| `WALLJOINS` |  | Vsaki steni starejše risbe da njen identifikator in shrani stike med njimi. To se zgodi tudi ob prvi spremembi, ki jo naredite. |
| `WALLJOINSTYLE` |  | Kliknite oglišče, kjer se dve steni stikata od konca do konca, da spremenite, kako je narisano: zarezno, ravno, pravokotno. T preklaplja, katera stena gre skozi. |
| `WALLOFFSET` | `WO` | Premakne steno pravokotno na samo sebe za razdaljo (stene, pritrjene nanjo, sledijo) ali naredi kopijo na tej razdalji. |
| `WALLPICK` |  | Naredi stene na črti ali poliliniji v risbi, s črtami, pritrjenimi nanjo, če rečete Da. |
| `WALLPOLY` | `WP` | Riše stene okoli pravilnega mnogokotnika s 3 do 64 stranicami, kot POLYGON. |
| `WALLRECT` | `WR` | Riše štiri spojene stene iz dveh nasprotnih oglišč, kot RECTANG. |
| `WALLREJOIN` |  | Naredi dva dela stene spet eno steno. Prvi ohrani svoj položaj v risbi. |
| `WALLROT` |  | Riše štiri spojene stene kot pravokotnik, zasukan pod poljubnim kotom: prva stran, nato kako daleč gre druga stran ven. |
| `WALLSPLIT` | `WS` | Razdeli steno na dva dela v točki ali tam, kjer jo seka druga stena. Deli ostanejo spojeni, razen če zahtevate režo ali proste konce. Vrata in okna gredo s svojim delom. |
| `WALLSPLITGAP` |  | Razdeli steno in pusti režo: vnesite režo, izberite steno, nato točko. Deli ohranijo proste konce in se lahko spet združijo. |
| `WALLSTRETCH` |  | Raztegni z oknom: konci sten znotraj njega se premaknejo, stene, ki so povsem znotraj, se premaknejo v celoti, stene, ki se naslanjajo na njihove strani, pa drsijo z njimi. |
| `WALLTAN` |  | Nadaljuje steno z lokom, ki iz nje odide vzdolž stene (narisan kot kratke ravne stene). |
| `WALLTRACE` |  | Naredi stene okoli najmanjšega zaprtega območja črt in sten okoli točke, na katero kliknete. |
| `WALLUNHOLD` |  | Odstrani zaklepe s stene (in zaklepe drugih sten nanjo). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapiše blok, nekaj predmetov ali celo risbo v novo datoteko DWG ali DXF (W) |
| `WEDGE` | `WE` | Klin: dve oglišči in višina; spušča se od prvega oglišča (3D) |
| `WHEREAMI` | `WHERE` | Pove, kje je kazalec. |
| `WHOHAS` |  | Pove, kdo ima risbo odprto. CadCraft Studio hrani majhno datoteko zaklepa poleg vsake odprte risbe (Plan.dwg.cclock: kdo, od kdaj, katera različica) in jo odstrani ob zaprtju. Možnosti: Current (odprta risba), File (izberite eno), FOlder (vsaka risba v mapi, ki je odprta nekje; s tem lahko Studio tam hrani datoteke zaklepov), Path (vnesite), Name (ime, ki ga vidijo drugi). Zaklep, ki ni osvežen pet minut, je zastarel. V brskalniku ni na voljo. |
| `WINDOW` | `WN` | Postavi okno v steno. |
| `XATTACH` | `XA` | Poveže drugo DWG ali DXF v to risbo, prikazano samo za branje (XREF jih izpiše in znova naloži) |
| `XCLIP` | `XC` | Obreže sklice na bloke in povezane risbe na pravokotnik ali mnogokotnik ali odstrani obrez. |
| `XLINE` | `XL` | Konstrukcijska črta, neskončna v obe smeri: skozi dve točki, vodoravna, navpična, pod kotom, razpolovnica kota ali odmik od črte. |
| `XREF` | `XR`, `-XREF` | Povezane risbe (zunanje reference): izpiši, priloži, znova naloži, veži, odstrani |
| `ZOOM` | `Z` | Obseg ali okno |
