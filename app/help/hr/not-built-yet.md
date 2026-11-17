---
title: Još nije izrađeno
summary: Što ova verzija aplikacije CadCraft za crtanje još ne radi i što umjesto toga možete raditi danas.
keywords: nedostaje, ograničenja, ctb, stb, stil ispisa, svojstva, ucs, anotativno, dinamički blok, spline, plan razvoja, nije podržano, spremanje dwg, šrafura, rastegni, niz, spoji, matchprop, prekini, produlji, tip linije, debljina linije, xref, oblak, 3d, puna tijela, bulovske operacije, višestruka vodilica, prekrivanje
from: 87e56521
---

CadCraft je u razvoju. Ova stranica navodi što trenutna verzija ne radi, da ga ne morate tražiti. Svaka stavka kaže što umjesto toga možete učiniti danas.

## Datoteke i spremanje

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Provjeren CadCraft DWG u samom AutoCADu | Svaka spremljena verzija se čita natrag s tri DWG čitača drugih programa i CadCraftom. Vidi [Što DWG čuva i mijenja](topic:files#what-a-dwg-keeps-and-changes). |
| Spremanje DXF-a novijeg od 2000 | Spremite kao DXF 2000 ili kao DWG do AutoCAD 2018. |
| Spremanje preko otvorene datoteke u pregledniku | Svako spremanje preuzima novu kopiju; ako želite, staru datoteku zamijenite sami. U CadCraft Studiju {{key:Mod+S}} zapisuje u datoteku koju ste otvorili. |
| Spremanje u oblak i sinkronizacija između računala | CadCraft još ne šalje spremljene datoteke u oblak: DWG i DXF datoteke čuvajte u vlastitim mapama. U CadCraft Studiju [Povijest](topic:history) prikazuje verzije crteža u oblaku koje su spremljene drugdje i kopije vaših spremanja na ovom računalu. |
| Overlayi i uređivanje povezanog crteža na licu mjesta | Priložite crtež kao vezu i ponovno ga učitajte nakon što promijenite drugi crtež. Veza ostaje vezom kad spremite kao DWG, a {{cmd:XCLIP}} je obrezuje. |
| Slike u DXF-u; prekrivanja koja skrivaju ono što je ispod | DXF čuva sliku kao njezin okvir s nazivom datoteke; DWG je čuva kao sliku: vidi [Slike u crtežu](topic:pictures). Prekrivanje se prikazuje kao svoj okvir. |
| Uređivanje višestrukih vodilica sa zakrivljenim vodilicama, s vodilicama s obje strane sadržaja ili s blokom koji je neravnomjerno okrenut ili skaliran | Crtaju se kao što ih je nacrtao drugi program i pomiču se kao cjelina. Višestruke vodilice s ravnim vodilicama do jednog odredišta te tekst ili blok kao sadržaj dolaze uredivi ({{cmd:MLEADEREDIT}}). |
| U tablicama iz drugih programa: ćelija koja sadrži blok, oblikovanje teksta unutar ćelije, rubovi i boje po ćeliji u tablici DXF-a, tablica razlomljena na stupce | Tablica se otvara kao urediva tablica ({{cmd:TABLEDIT}}) i prikazuje se kako ju je nacrtao drugi program dok je ne uredite; tada je CadCraft ponovno crta iz njezinih ćelija: običan tekst, formule kao `=G3*H3` i `=Sum(I3:I9)`, poravnanje i visine teksta. Ćelija s blokom tada je prazna. Nedirana DWG tablica se sprema natrag s podacima ćelija koje je imala. |
| Stvarni objekt tablice u spremljenom DXF-u | DWG čuva tablicu kao tablicu koju drugi programi mogu uređivati. DXF je čuva kao blok koji je crta, uz CadCraftov vlastiti zapis: CadCraft je ponovno otvara kao tablicu, a drugi programi vide blok. Zrcaljena ili neravnomjerno skalirana tablica se tako sprema i u DWG-u. |
| Kopiranje i lijepljenje s drugim programima | Međuspremnik CadCrafta radi između CadCraft crteža i kartica u istom pregledniku, ne s drugim programima. Spremite kao DWG ili DXF i otvorite ga tamo. Vidi [Kopiraj, zalijepi i dupliciraj](topic:copy-paste). |

## Crtanje i uređivanje

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Šrafure s uzorcima kojih CadCraft nema i prijelazi boja točno onako kako ih drugi programi crtaju | Otvorene šrafure s uzorcima kojih CadCraft nema prikazuju se kao ton. Prijelaz boja ({{cmd:GRADIENT}}) crta se na CadCraftov vlastiti način za svaku vrstu: sličan drugim programima po vrsti, ali ne točku po točku. DWG 2004 i noviji čuvaju ga kao pravu šrafuru s prijelazom; u datotekama DXF 2000 ili DWG 2000 čita ga samo CadCraft, a drugi programi vide punu ispunu. Uzorci se učitavaju iz datoteke `.pat`, a šrafura se može povezati s granicom i tada je prati: vidi [Šrafura i površine ispune](topic:hatch). |
| Tipovi linija s oblicima ili tekstom te debljine linija u spremljenom DXF R12 | Oblici i tekst u tipu linije datoteke izostavljaju se iz njezinih crtica; za čuvanje debljina linija spremite kao DWG. |
| Šrafure s uzorkom u spremljenom DXF-u | R12 nema šrafuru: spremaju se kao njihovi obrisi. Za čuvanje uzorka spremite kao DWG. |
| Nizovi koje je napravio drugi program ili ih on može uređivati; redovi i razine u nizovima po putu i polarnim nizovima; niz koji prati krivulju svog puta | Niz napravljen opcijom ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; mijenja se s {{cmd:ARRAYEDIT}}) sprema se kao referenca bloka s CadCraftovim vlastitim brojevima: drugi programi ga prikazuju, pomiču, ispisuju i rastavljaju, ali ne mogu mijenjati njegove brojeve, a niz napravljen u drugom programu ovdje se otvara kao obična referenca bloka. Niz po putu zadržava kopiju svog puta: naknadno uređivanje krivulje ne pomiče elemente. |
| Izrezani viewporti listova prema drugim programima i iz njih | Viewport izrezan s {{cmd:VPCLIP}} ili napravljen s {{cmd:MVIEW}} Polygonal ili Object sprema se s CadCraftovim vlastitim obrisom: drugi programi ga otvaraju kao pravokutnik oko njega, a viewport izrezan u drugom programu ovdje se otvara kao svoj pravokutnik. DXF R12 čuva samo pravokutnik. |
| {{cmd:STRETCH}} s poligonom križanja | Upotrijebite jedan ili više prozora križanja. |
| Uredi vrh u {{cmd:PEDIT}} (jedan vrh po jedan u naredbenom retku) | Ručke i preglednik vrhova u Svojstvima (svaki vrh, njegove širine i izbočina). Ostatak PEDIT-a je izrađen: vidi [Splineovi i polilinije](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} i {{cmd:JOIN}} na elipsama i splineovima | {{cmd:EXPLODE}} spline (ili ga {{cmd:PEDIT}}) da dobijete polilinijski objekt koji ove naredbe prihvaćaju. |
| Zaobljenje i skošenje između lučnog segmenta polilinije i susjednog segmenta; zaobljenje koje spaja liniju s polilinijom | Rastavite polilinijski objekt naredbom {{cmd:EXPLODE}}, zatim zaobljite dijelove. Luk zaobljenja dodaje se kao zaseban objekt. |
| Trim i extend: opcija Projekcija (3D) i produljenje lučnog kraja polilinije | Skratite u ravnini crteža; za lučni kraj rastavite polilinijski objekt ili ponovno nacrtajte luk. |
| OLE objekti: umetanje, pokretanje ili uređivanje; prikaz onih u DWG-u gdje ih datoteka stavlja; metafile slike | Vidi [Slike](topic:pictures#objects-from-other-programs-ole). Objekti DXF-a prikazuju se kao svoja bitmapa ili označeni okvir; objekti DWG-a čuvaju se, ali se ne crtaju na mjestu ({{cmd:OLELIST}} ih popisuje i postavlja kopiju slike gdje kažete). |
| Upisivanje oblikovnih kodova (podebljano, razlomci u stupcu, boje po riječi) u tekstu odlomka; fontovi osim jednoga fonta u stilu Helvetica; stupci | Oblikovanje koje je došlo u datoteci čuva se, crta i sprema (vidi Tekst); novi tekst odlomka ima jednu visinu i boju. |
| Tekst odlomka uređen pod svojom rotacijom | Uređivač se otvara vodoravno; tekst zadržava svoju rotaciju. |
| Višestruke vodilice spremljene kao objekti višestrukih vodilica u DXF-u | DWG ih čuva kao višestruke vodilice, sa svakom vodilicom i blokom kao sadržajem; DXF čuva ono što crtaju (linije, strelice i tekst ili blok). |
| U tablicama ({{cmd:TABLE}}): tekst koji se lomi unutar ćelije, tablice koje se razlamaju na dijelove, vlastiti tekstni stil stila tablice i boje po vrsti retka u dijaloškom okviru, veza podataka s datotekom proračunske tablice (`.xlsx`) ili ona koja sama čita datoteku | Tekst ćelije lomi se samo tamo gdje ga prelomite ({{key:Alt+Enter}}); proširite stupac. {{cmd:DATALINK}} čita datoteku `.csv`, a {{cmd:DATALINKUPDATE}} traži da ponovno odaberete datoteku. {{cmd:DATAEXTRACTION}} i {{cmd:COUNTTABLE}} prave tablicu koja sama ne prati crtež: pokrenite ih ponovno (živo brojanje: {{cmd:BOMTABLE}}). |
| Definicije atributa spremljene zasebno u datoteci (izvan bloka), atributi s više redaka | Prije spremanja stavite definicije atributa u blok: same se spremaju kao tekst koji prikazuje oznaku. |
| Stanja slojeva (spremanje i vraćanje koji su slojevi uključeni) | Upotrijebite {{cmd:LAYISO}} / {{cmd:LAYUNISO}} ili slojeve uključujte i isključujte ručno. |
| Odabir poligonom prozora i poligonom križanja te spremljeni filtri odabira | Ograda (`F`), Prozor (`W`), Križanje (`C`), Ukloni (`R`), {{cmd:QSELECT}} za pravilo. |

## Ploča Svojstva

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Prikaz izbora Fit te vodoravnog položaja teksta i teksta ispod linije na kotama osim linearnih i poravnatih | Čuvaju se uz objekt, prikazuju u Svojstvima i spremaju se; CadCraft tekst postavlja prema vlastitom pravilu. |
| Materijali koje vide drugi programi | Spremljena datoteka čuva naziv materijala za CadCraft; drugi programi prikazuju materijal sloja. |
| Prozirnost u datotekama DWG 2000 i DXF | Drugi programi te objekte prikazuju punima; CadCraft čuva prozirnost. Za sve spremite kao DWG 2004 ili noviji. |
| Veza šrafure napravljena u drugom programu | CadCraft sprema vlastitu vezu u datotekama DWG i DXF 2000; veze napravljene u drugim programima se ne čitaju. Upotrijebite `HATCHEDIT` i opciju Veza: vidi [Šrafura i površine ispune](topic:hatch). |
| Koordinate u Svojstvima u UCS-u | Svojstva prikazuju svjetske koordinate; statusna traka i {{cmd:ID}} prikazuju UCS koordinate. Vidi [Okrenite pogled i koristite vlastite koordinate](topic:ucs-and-turned-view). |
| Zaseban položaj za anotativni objekt na svakom njegovom mjerilu; čitanje zapisa po mjerilu koje drugi programi čuvaju | Anotativni tekst ili kota čuva popis mjerila ({{cmd:OBJECTSCALE}}), a svaki viewport ga prikazuje u veličini za svoje mjerilo, na istome mjestu. Popis se sprema kao CadCraftovi vlastiti podaci: drugi program vidi objekt u jednom mjerilu za koje je dimenzioniran, a popis napravljen u drugom programu se ne čita. Vidi [Jedinice, papiri i mjerila](topic:units-papers-scales#annotate-by-scale). |
| Mijenjanje udaljenosti, kutova ili zrcaljenja dinamičkog bloka; dinamički blokovi koji ostaju dinamički kad spremate u drugoj DWG verziji ili kao DXF | Promijenite njegovo stanje vidljivosti u Svojstva › {{ui:Custom}}; ostale vrijednosti tamo se prikazuju samo za čitanje. Ostaje dinamičan kad ga spremite kao DWG u verziji u kojoj je crtež došao. Vidi [Dinamički blokovi](topic:dynamic-blocks). |
| Tolerancija prilagodbe splinea, stupanj splinea 6 i viši, 3D splineovi | Prilagodba i kontrolne točke, stupnjevi od 1 do 5 te težine su izrađeni: vidi [Splineovi i polilinije](topic:splines). Visina splinea (Z) se ne čuva. |

## Pomagala za preciznost

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Praćenje od točaka kroz naredbe te dijaloški okvir postavki praćenja (relativni polarni kutovi, dodatni kutovi) | {{cmd:POLARANG}} postavlja korak; točke ponovno uhvatite u sljedećoj naredbi. |
| Hvatanje na mrežu | Upisujte koordinate; mreža je samo vizualni vodič. |
| Opcije Arc i Length pri odabiru kutova područja te MEASUREGEOM Volume | Nacrtajte obris s {{cmd:PLINE}} (uključujući lukove), zatim {{cmd:AREA}} `O`. |
| Dinamički unos za ručke i njegov popis opcija (strelica prema dolje) | Naredbeni redak prikazuje opcije. |
| Kutovi u stupnjevima, minutama i sekundama, gradima ili geodetskim smjerovima | Upisujte decimalne stupnjeve: `30.5` za 30°30'. |
| Dijaloški okvir upravitelja pogleda; imenovani pogledi lista koji se vraćaju na taj list | {{cmd:NAMEDVIEW}} popisuje i vraća poglede. Spremljena datoteka ih čuva, ali se pogledi lista vraćaju na prvi list. |

## Listovi, kote i ispis

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Polja za mjerilo viewporta, imenovani objekt kao što su sloj ili blok, hiperveza i polja skupa listova osim broja i naziva lista; polja zapisana kao objekti polja koje drugi programi ažuriraju | {{cmd:FIELD}} ima datum, naziv datoteke, broj lista, naziv i broj, svojstva crteža ({{cmd:DWGPROPS}}), površinu, duljinu i druga svojstva objekta te formule, u tekstu, atributima i ćelijama tablice. Drugi program prikazuje CadCraft polje kao tekst koji je zadnji pročitao; CadCraft čita datum, naziv datoteke, svojstvo, list i polja izraza drugog programa, a ostale vrste ostavlja kao tekst. Mjerilo viewporta upisuje se ručno. |
| Spremanje koji je stil kote trenutačan; tekst kote povučen na slobodno mjesto | Crtež se otvara s trenutačnim stilom Standard. Tekst stoji na mjernoj crti ({{cmd:DIMTEDIT}} Left / Right / Center). Vidi [Postavite veličine kota](topic:dimension-settings). |
| Uredive dvoredne kutne kote iz otvorenih datoteka koje CadCraft ne može razaznati | Prikazuju se kako su nacrtane u datoteci. Kote ordinate, duljine luka i prelomljenog radijusa otvaraju se kao kote koje možete uređivati. |
| Provjera CTB čitača prema datoteci drugog programa (izrađen je prema objavljenom opisu), imenovani stilovi ispisa (STB), dither, brojevi olovaka, sivi tonovi iz CTB-a i prilagodljiva vrsta linije u stilu ispisa | Napravite tablicu u {{ui:Tablice stilova ispisa}} (boja, siva, tinta, debljina linije, vrsta linije, kraj i spoj linije te stil ispune po boji): vidi [Tablice stilova ispisa](topic:plot-pdf#plot-style-tables). |
| Postavke stranice | Odaberite papir, mjerilo i stil ispisa u dijaloškom okviru {{ui:Ispis u PDF}}; list čuva svoj stil ispisa. |
| Hindski i druga pisma koja zahtijevaju složeno oblikovanje u PDF-ovima te rijetki ideogrami (ispis europskih pisama, ćirilice, grčkog, hebrejskog, arapskog, perzijskog, urdua, tajlandskog, kineskog, japanskog i korejskog) | Ispisuju se kao „?“. |
| Tekst arapskog pisma i kineskog, japanskog ili korejskog u istom ispisanom PDF-u | Ispis nosi jedan font: jedno od dva pisma ispisuje se kao „?“. |
| Izričite oznake smjera u tekstu (ugrađivanja, nadjačavanja, izolati) | Zanemaruju se: svaki se redak poređa samo prema svojim slovima. |
| Slike unutar priložene PDF stranice, u ispisu | Linije, ispune i tekst stranice se ispisuju. Stranica koja je samo slika unosi se s {{cmd:SCANATTACH}} i slike se ispisuju. Vidi [PDF podloge](topic:pdf-underlay#plot-and-save). |
| Slanje posla laseru iz CadCraft Studija (Studio nema Web Serial) | Spremite G-kod i pošaljite ga vlastitim programom lasera ili iz Chromea ili Edgea. Vidi [Pošaljite crtež laseru](topic:laser-cutting#send-from-the-browser). |

## Ograničenja i parametri

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Ograničenja na listovima, u blokovima, na elipsama, splineovima ili tekstu | Ograničite na kartici {{ui:Model}}, na linijama, polilinijama, kružnicama, lukovima i točkama. |
| Glatko (G2) i izravno ograničavanje izbočine luka polilinije | Tangentno i jednako; lučni segment prati dva svoja kraja. |
| Referentna (vođena) dimenzijska ograničenja i `3Point` u {{cmd:DCANGULAR}} | Obična kota (DIMLINEAR …) prikazuje vrijednost bez njezina vođenja. |
| Dimenzijska ograničenja fiksne veličine na papiru i njihov ispis | Prikazuju se samo na zaslonu; za ispis dodajte obične kote. |
| Ograničenja sačuvana kroz EXPLODE, BREAK, JOIN i druge naredbe koje stvaraju nove objekte te na skraćenim polilinijama | Ponovno ih ograničite (AUTOCONSTRAIN pomaže). {{cmd:MIRROR}} i {{cmd:TRIM}} linija, lukova i kružnica ih zadržavaju. |
| Tablice dizajna (konfiguracije) u CadCraftu | Mijenjajte parametre na ploči. |
| Provjerena potpuna povratna veza sa SolidWorksom | Provjerite skicu koju makro gradi prije nego se oslonite na nju. |

## 3D

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Zaobljenja, skošenja, ljuske i lofti; provlačenja duž putanje koja se uzdiže (3D putanje) | Izvucite obrise s lukovima, potisnite i povucite plohe, rotirajte te provucite duž ravnih putanja. |
| Izvlačenje u smjeru različitom od gore | Nacrtajte oblik na tlu i izvucite ga gore ili dolje (sa suženjem ili duž putanje ako želite); zatim rotirajte tijelo. |
| Visina i debljina 2D objekata | Crtež leži na tlu (visina 0) na kartici 3D. |
| Uređivanje tijela, regija i tijela iz drugih programa; prikaz onih unutar blokova; njihove plohe na provučenim, loftanim ili drugim slobodnim površinama; polyface i poligonske mreže | Tijela u prostoru modela prikazuju se na kartici 3D kako jesu i spremaju se natrag nepromijenjena u DWG-u; što se ne crta, popisuje se kad se kartica 3D otvori. Zatražite mreže kao 3D plohe u prostoru modela. Vidi [Tijela iz drugih programa](topic:3d-solids#solids-from-other-programs). |
| Kopiranje i lijepljenje tijela | Na kartici 3D upotrijebite {{cmd:COPY}}. Međuspremnik sadrži samo 2D objekte. |
| Presjeci, pogledi koji prate kasnije promjene tijela i zasjenjena tijela na ispisanim listovima | {{cmd:VIEWBASE}} postavlja ravne poglede (snimku); pokrenite ga ponovno nakon promjene tijela. |
| Materijali, teksture i postavke osvjetljenja | Vizualni stilovi: zasjenjeno, rubovi, skrivene linije, žičani model i rendgen. |
| Ispis karata, na viewportima listova i na kartici 3D; slike iz datoteka spremljenih s crtežom; lokacija crteža zapisana za druge programe u DWG 2000–2007 i DXF R12 | Karte se prikazuju ispod prostora modela na zaslonu; sustav i popis slojeva spremaju se s crtežom: vidi [Slojevi karte ispod crteža](topic:map-layers). |
| E57 skenovi s više od 6 milijuna točaka ili 512 MB, vlastite datoteke proizvođača skenera (RCP, RCS, FLS, LGS, TZF, ZFS), oblak točaka spremljen s crtežom ili ispisan, hvatanje na oblak na kartici 3D, uspravni (presječni) isječci na kartici Model | Veće skenove ili one vlastitih proizvođača izvezite kao LAS ili LAZ ([Formati oblaka točaka](topic:point-cloud-formats)); oblak priložite svaki put kad otvorite crtež; izvedene linije trasirajte iz tlocrtnog isječka na kartici Model: vidi [Ucrtajte izvedene linije preko oblaka točaka](topic:point-clouds). |
| Registriranje skenova: pronalaženje meta (kugle, šahovske ploče) u skenu samostalno, rješavanje svih skenova zajedno (bundle adjustment), mjerilo, registriranje prema modelu | Odaberite odgovarajuće točke ili upišite koordinate meta, zatim pročistite jedan po jedan sken s ICP-om: vidi [Registrirajte više skenova u jedan](topic:register-scans). |

## Rutine i prilagodba

| Još nije izrađeno | Umjesto toga, danas |
|---|---|
| Kompajlirani ili zaštićeni LISP (.fas, .vlx), izvorni programi (.arx, .crx, .dbx) i VBA (.dvb) | Učitajte izvorni `.lsp` kod rutine s {{cmd:APPLOAD}}. |
| LISP-ov `grread`, reaktori (`vlr-…`), funkcije krivulja (`vlax-curve-…`), rječnici i prošireni podaci, `acet-…` iz Express Toolsa | Ostatak jezika radi: vidi [Pokreni LISP rutine](topic:run-lisp). Naredbeni redak imenuje nedostajuću funkciju kad do nje rutina dođe. |
| Slike i slajdovi u dijaloškom okviru rutine | Prikazuju se kao prazni okviri; ostatak dijaloga radi. |
| CraftScript (.craft), Lua i Python u CadCraftu | Pokrenite ih u radnom prostoru Script u PartCraftu. |
| Popisi slojeva, boja i vrsta linija unutar stilova izbornika na vrpci | Upotrijebite ploču {{ui:Slojevi}} i {{ui:Svojstva}}. |
| Startup Suite i aliasi pohranjeni na vašem računalu ili sinkronizirani | Čuvaju se u ovom pregledniku; desktop aplikacija i usluga u oblaku čuvat će ih za vas. U Studiju se `acad.lsp` i `acaddoc.lsp` čitaju iz mape za podršku koju odaberete (Učitaj aplikacije). |

## Pomoć

Pomoć opisuje ovu verziju. Kad se nešto doda, premješta se s ove stranice u vodiče korak po korak.
