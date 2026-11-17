---
title: Još nije izgrađeno
summary: Šta ova verzija CadCraft aplikacije za crtanje još ne radi i šta raditi umjesto toga danas.
keywords: nedostaje, ograničenja, ctb, stb, stil štampe, svojstva, ucs, anotativno, dinamički blok, spline, plan razvoja, nije podržano, spremanje DWG, šrafura, istezanje, niz, spajanje, matchprop, prekid, produži, vrsta linije, debljina linije, xref, oblak, 3d, tijela, booleove operacije, multileader, wipeout
from: 87e56521
---

CadCraft je u razvoju. Ova stranica navodi šta trenutna verzija ne radi, da to ne tražite. Svaka stavka kaže šta raditi umjesto toga danas.

## Datoteke i spremanje

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| CadCraft DWG provjeren u samom AutoCAD-u | Svaka spremljena verzija se čita nazad pomoću DWG čitača tri druga programa i CadCraft-a. Vidi [Šta DWG zadržava, a šta mijenja](topic:files#what-a-dwg-keeps-and-changes). |
| Spremanje DXF-a novijeg od 2000 | Spasi kao DXF 2000 ili kao DWG do AutoCAD 2018. |
| Spremanje preko otvorene datoteke u pregledniku | Svako spremanje preuzima novu kopiju; staru datoteku sam zamijeni ako želiš. U CadCraft Studiju, {{key:Mod+S}} upisuje nazad u datoteku koju si otvorio. |
| Spremanje u oblak i sinhronizacija među računarima | CadCraft još ne šalje spremanja u oblak: čuvaj DWG i DXF datoteke u svojim mapama. U CadCraft Studiju, [Historija](topic:history) navodi verzije crteža iz oblaka koji su spremljeni negdje drugdje i kopije tvojih spremanja na ovom računaru. |
| Podloge i uređivanje povezanog crteža na licu mjesta | Priloži crtež kao vezu i ponovo ga učitaj nakon izmjene drugog crteža. Veza ostaje veza kad spasiš kao DWG, a {{cmd:XCLIP}} je odsijeca. |
| Slike u DXF-u; brisanja (wipeout) koja skrivaju ono što je ispod | DXF čuva sliku kao njen okvir s nazivom datoteke; DWG je čuva kao sliku — vidi [Slike u crtežu](topic:pictures). Brisanje se prikazuje kao svoj okvir. |
| Uređivanje višestrukih vodilica sa zakrivljenim linijama vodilice, s linijama vodilice na obje strane sadržaja ili s blokom koji je neravnomjerno okrenut ili skaliran | Crtaju se onako kako ih je nacrtao drugi program i pomjeraju se kao cjelina. Višestruke vodilice s ravnim linijama vodilice do jednog odredišta, i tekst ili blok kao sadržaj, dolaze kao uređive ({{cmd:MLEADEREDIT}}). |
| U tabelama iz drugih programa: ćelija koja sadrži blok, oblikovanje teksta unutar ćelije, ivice i boje po ćeliji u tabeli DXF-a, tabela razbijena u kolone | Tabela se otvara kao uređiva tabela ({{cmd:TABLEDIT}}) i prikazuje se onako kako ju je drugi program nacrtao dok je ne uređiš; tada je CadCraft ponovo crta iz njenih ćelija: običan tekst, formule kao `=G3*H3` i `=Sum(I3:I9)`, poravnanje i visine teksta. Ćelija s blokom tada je prazna. Netaknuta DWG tabela se spašava nazad s podacima ćelija koje je imala. |
| Prava objektna tabela u spremljenom DXF-u | DWG čuva tabelu kao tabelu koju drugi programi mogu uređivati. DXF je čuva kao blok koji je crta, uz CadCraft-ov vlastiti zapis: CadCraft je ponovo otvara kao tabelu; drugi programi vide blok. Ogledalski ili neravnomjerno skalirana tabela se tako spašava i u DWG-u. |
| Kopiranje i lijepljenje s drugim programima | CadCraft-ov međuspremnik radi između CadCraft crteža i kartica u istom pregledniku, ne s drugim programima. Spasi kao DWG ili DXF i otvori ga tamo. Vidi [Kopiraj, zalijepi i dupliciraj](topic:copy-paste). |

## Crtanje i uređivanje

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Uzorci šrafura koje CadCraft nema i gradijentne ispune onako kako ih drugi programi boje | Otvorene šrafure s uzorcima koje CadCraft nema prikazuju se kao ton. Gradijentna ispuna ({{cmd:GRADIENT}}) boji se CadCraft-ovim načinom za svaki tip: slično drugim programima po vrsti, ne tačku po tačku. DWG 2004 i noviji je čuvaju kao pravu gradijentnu šrafuru; u datoteci DXF 2000 ili DWG 2000 je čita samo CadCraft, a drugi programi vide punu ispunu. Uzorci se učitavaju iz `.pat` datoteke, a šrafura se može povezati s granicom i tada je prati: vidi [Šrafura i površine ispune](topic:hatch). |
| Vrste linija s oblicima ili tekstom i debljine linija u spremljenom DXF R12 | Oblici i tekst u vrsti linije datoteke izostavljaju se iz njenih crtica; spasi kao DWG da zadržiš debljine linija. |
| Šrafure s uzorkom u spremljenom DXF-u | R12 nema šrafure: spremaju se kao njihove konture. Spasi kao DWG da zadržiš uzorak. |
| Nizovi koje je napravio drugi program ili koje može uređivati; redovi i nivoi u nizovima duž putanje i polarnim nizovima; niz koji prati krivu svoje putanje | Niz napravljen s ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; mijenja se s {{cmd:ARRAYEDIT}}) sprema se kao referenca bloka s CadCraft-ovim vlastitim brojevima: drugi programi ga prikazuju, pomjeraju, štampaju i rastavljaju, ali ne mogu mijenjati njegove brojeve, a niz napravljen u drugom programu se ovdje otvara kao obična referenca bloka. Niz duž putanje čuva kopiju svoje putanje: naknadna izmjena krive ne pomjera stavke. |
| Isječeni prozori pogleda listova iz i u druge programe | Prozor pogleda isječen s {{cmd:VPCLIP}} ili napravljen s {{cmd:MVIEW}} Polygonal ili Object sprema se s CadCraft-ovom vlastitom konturom: drugi programi ga otvaraju kao pravougaonik oko njega, a prozor pogleda isječen u drugom programu ovdje se otvara kao svoj pravougaonik. DXF R12 čuva samo pravougaonik. |
| {{cmd:STRETCH}} s ukrštenim poligonom | Koristi jedan ili više ukrštenih prozora. |
| {{cmd:PEDIT}} Edit vertex (jedno teme po jedno u komandnoj liniji) | Hvatišta i pregledač temena u Svojstvima (svako teme, njegove širine i ispupčenje). Ostatak PEDIT-a je izgrađen: vidi [Splajnovi i polilinije](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} i {{cmd:JOIN}} na elipsama i splajnovima | {{cmd:EXPLODE}} splajn (ili ga {{cmd:PEDIT}}) da dobiješ polilinij koji ove komande primaju. |
| Zaobljenje i skošenje između segmenta luka polilinije i susjednog segmenta; zaobljenje koje spaja liniju u polilinij | {{cmd:EXPLODE}} polilinij, pa zaobli dijelove. Luk zaobljenja se dodaje kao zaseban objekt. |
| Odsijecanje i produžavanje: opcija Projekt (3D) i produženje kraja luka polilinije | Odsijecaj u ravni crteža; za kraj luka rastavi polilinij ili ponovo nacrtaj luk. |
| OLE objekti: umetanje, pokretanje ili uređivanje; prikazivanje onih u DWG-u gdje ih datoteka stavlja; slike metafajla | Vidi [Slike](topic:pictures#objects-from-other-programs-ole). Objekti DXF-a se prikazuju kao njihova bitmapa ili označeni okvir; objekti DWG-a se čuvaju, ne crtaju na mjestu (OLELIST ih navodi i postavlja kopiju slike gdje kažeš). |
| Unošenje kodova oblikovanja (podebljano, slagani razlomci, boje po riječi) u tekst paragrafa; fontovi osim jednog fonta u stilu Helvetica; kolone | Oblikovanje koje je došlo u datoteci se čuva, crta i sprema (vidi Tekst); novi tekst paragrafa ima jednu visinu i boju. |
| Tekst paragrafa uređen pod svojom rotacijom | Uređivač se otvara ravno; tekst zadržava svoju rotaciju. |
| Višestruke vodilice spremljene kao objekti višestrukih vodilica u DXF-u | DWG ih čuva kao višestruke vodilice, sa svakom linijom vodilice i blokom kao sadržajem; DXF čuva ono što crtaju (linije, strelice, i tekst ili blok). |
| U tabelama ({{cmd:TABLE}}): tekst koji se prelama unutar ćelije, tabele koje se razbijaju na dijelove, sopstveni tekstualni stil stila tabele i boje po vrsti reda u dijalogu, veza s podacima na proračunsku tabelu (`.xlsx`) ili na onu koja sama čita datoteku | Tekst ćelije se lomi samo tamo gdje ga sam prelomiš ({{key:Alt+Enter}}); proširi kolonu. {{cmd:DATALINK}} čita `.csv` datoteku, a {{cmd:DATALINKUPDATE}} traži da ponovo odabereš datoteku. {{cmd:DATAEXTRACTION}} i {{cmd:COUNTTABLE}} prave tabelu koja sama ne prati crtež: pokreni ih ponovo (živo brojanje: {{cmd:BOMTABLE}}). |
| Definicije atributa čuvane odvojeno u spremljenoj datoteci (van bloka), atributi s više redova | Stavi definicije atributa u blok prije spremanja: same po sebi se spašavaju kao tekst koji prikazuje oznaku. |
| Stanja slojeva (spremanje i vraćanje koji slojevi su uključeni) | Koristi {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, ili uključuj i isključuj slojeve ručno. |
| Izbor prozorom-poligonom i ukrštenim poligonom, i spremljeni filteri izbora | Ograda (`F`), Prozor, Ukrštanje, Ukloni (`R`), {{cmd:QSELECT}} za pravilo. |

## Panel Svojstva

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Crtanje izbora Fit i horizontalni položaj teksta i tekst ispod linije na kotama osim linearnih i poravnatih | Čuvaju se na objektu, prikazuju se u Svojstvima i spremaju se; CadCraft postavlja tekst po svom pravilu. |
| Materijali koje drugi programi vide | Spremljena datoteka čuva naziv materijala za CadCraft; drugi programi prikazuju materijal sloja. |
| Prozirnost u DWG 2000 i DXF datotekama | Drugi programi prikazuju te objekte punim; CadCraft čuva prozirnost. Spasi kao DWG 2004 ili noviji da bi je svi vidjeli. |
| Veza šrafure napravljena u drugom programu | CadCraft sprema svoju vezu u DWG i DXF 2000 datotekama; veze napravljene u drugim programima se ne čitaju. Koristi `HATCHEDIT` i Veza: vidi [Šrafura i površine ispune](topic:hatch). |
| Koordinate u Svojstvima u UCS-u | Svojstva prikazuju svjetske koordinate; statusna traka i {{cmd:ID}} prikazuju UCS. Vidi [Okreni pogled i koristi svoje koordinate](topic:ucs-and-turned-view). |
| Zaseban položaj za anotativni objekt na svakoj od njegovih razmjera; čitanje zapisa po razmjeri koje drugi programi čuvaju | Anotativni tekst ili kota čuva listu razmjera ({{cmd:OBJECTSCALE}}), i svaki prozor pogleda ga prikazuje u veličini za svoju razmjeru, na istom mjestu. Lista se sprema kao CadCraft-ovi vlastiti podaci: drugi program vidi objekt u jednoj razmjeri za koju je dimenzioniran, a lista napravljena u drugom programu se ne čita. Vidi [Jedinice, listovi i razmjere](topic:units-papers-scales#annotate-by-scale). |
| Mijenjanje udaljenosti, uglova ili preokreta dinamičkog bloka; dinamički blokovi ostaju dinamični kad spasiš u drugoj DWG verziji ili kao DXF | Promijeni njegovo stanje vidljivosti u Svojstva › {{ui:Prilagođeno}}; njegove druge vrijednosti tamo se prikazuju samo za čitanje. Ostaje dinamički kad ga spasiš kao DWG u verziji u kojoj je crtež došao. Vidi [Dinamički blokovi](topic:dynamic-blocks). |
| Tolerancija prilagođavanja splajna, stepen splajna 6 i viši, 3D splajnovi | Prilagođavanje i kontrolne tačke, stepen 1 do 5 i težine su izgrađeni: vidi [Splajnovi i polilinije](topic:splines). Visina splajna (Z) se ne čuva. |

## Pomagala za preciznost

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Praćenje od tačaka kroz komande i dijalog postavki praćenja (relativni polarni uglovi, dodatni uglovi) | {{cmd:POLARANG}} postavlja korak; ponovo uhvati tačke u sljedećoj komandi. |
| Hvatanje na mrežu | Upiši koordinate; mreža je samo vizuelni vodič. |
| Opcije Luk i Dužina pri biranju uglova površine i MEASUREGEOM Volume | Nacrtaj konturu s {{cmd:PLINE}} (uključujući lukove), zatim {{cmd:AREA}} `O`. |
| Dinamički unos za hvatišta i njegova lista opcija (strelica prema dolje) | Komandna linija prikazuje opcije. |
| Uglovi u stepenima-minutama-sekundama, gradima ili geodetskim azimutima | Upiši decimalne stepene: `30.5` za 30°30'. |
| Dijalog upravitelja pogleda; imenovani pogledi lista koji se vraćaju na taj list | {{cmd:NAMEDVIEW}} navodi i vraća poglede. Spremljena datoteka ih čuva, ali pogledi lista se vraćaju na prvi list. |

## Listovi, kote i štampanje

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Polja za razmjeru prozora pogleda, imenovani objekt kao što je sloj ili blok, hiperveza, i polja skupa listova preko broja i naziva lista; polja zapisana kao polja-objekti koje drugi programi ažuriraju | {{cmd:FIELD}} ima datum, naziv datoteke, broj, naziv i broj listova, svojstva crteža ({{cmd:DWGPROPS}}), površinu, dužinu i druga svojstva objekta, i formule, u tekstu, atributima i ćelijama tabele. Drugi program prikazuje CadCraft-ovo polje kao tekst koji je zadnji pročitao; CadCraft čita datum, naziv datoteke, svojstvo, list i polja izraza drugog programa, a ostale vrste ostavlja kao tekst. Razmjera prozora pogleda se upisuje ručno. |
| Spremanje koji stil kote je aktivan; tekst kote prevučen na slobodno mjesto | Crtež se otvara sa Standard aktivnim. Tekst stoji na liniji kote (DIMTEDIT Left / Right / Center). Vidi [Postavi veličine kota](topic:dimension-settings). |
| Uređive dvolinijske uglovne kote iz otvorenih datoteka koje CadCraft ne može razriješiti | Prikazuju se onako kako su nacrtane u datoteci. Ordinatne, dužine luka i prelomljene radijusne kote se otvaraju kao kote koje možeš uređivati. |
| Provjera CTB čitača prema datoteci iz drugog programa (izgrađen je, prema objavljenom opisu), imenovani stilovi štampe (STB), dithering, brojevi olovaka, sivi tonovi iz CTB-a i prilagodljivo podešavanje vrste linije u stilu štampe | Napravi tabelu u {{ui:Tabele stilova štampe}} (boja, siva, tinta, debljina linije, vrsta linije, kraj i spoj linije, i stil ispune po boji): vidi [Tabele stilova štampe](topic:plot-pdf#plot-style-tables). |
| Postavke listova | Odaberi papir, razmjeru i stil štampe u dijalogu {{ui:Štampaj u PDF}}; list čuva svoj stil štampe. |
| Hindi i drugi jezici koji trebaju složeno oblikovanje u PDF-ovima, i rijetki ideogrami (evropska pisma, ćirilica, grčki, hebrejski, arapski, perzijski, urdu, tajlandski, kineski, japanski i korejski štampa) | Štampaju se kao "?". |
| Tekst arapskim pismom i kineskim, japanskim ili korejskim u istom štampanom PDF-u | Štampa nosi jedan font: jedno od dva pisma se štampa kao "?". |
| Eksplicitne oznake smjera u tekstu (ugradnje, nadjačavanja, izolati) | Ignorišu se: svaki red se slaže samo po svojim slovima. |
| Slike unutar priložene PDF stranice, u štampi | Linije, ispune i tekst stranice se štampaju. Stranica koja je samo slika ide s {{cmd:SCANATTACH}}, i slike se štampaju. Vidi [PDF podloge](topic:pdf-underlay#plot-and-save). |
| Slanje posla laseru iz CadCraft Studija (Studio nema Web Serial) | Spasi G-kod i pošalji ga vlastitim programom lasera, ili ga pošalji iz Chrome ili Edge. Vidi [Pošalji crtež laseru](topic:laser-cutting#send-from-the-browser). |

## Ograničenja i parametri

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Ograničenja na listovima, u blokovima, na elipsama, splajnovima ili tekstu | Ograniči na kartici {{ui:Model}}, na linijama, polilinijama, krugovima, lukovima i tačkama. |
| Glatko (G2) i direktno ograničavanje ugla luka polilinije | Tangentno i jednako; segment luka prati svoja dva kraja. |
| Referentna (vođena) dimenziona ograničenja, i `3Point` u {{cmd:DCANGULAR}} | Obična kota (DIMLINEAR …) prikazuje vrijednost bez upravljanja njome. |
| Dimenziona ograničenja fiksne veličine na papiru, i njihovo štampanje | Prikazuju se samo na ekranu; dodaj obične kote za štampu. |
| Ograničenja zadržana kroz EXPLODE, BREAK, JOIN i druge komande koje prave nove objekte, i na skraćenim polilinijama | Ponovo ih ograniči (AUTOCONSTRAIN pomaže). {{cmd:MIRROR}} i {{cmd:TRIM}} linija, lukova i krugova ih zadržavaju. |
| Tabele dizajna (konfiguracije) u CadCraft-u | Promijeni parametre u panelu. |
| Provjereni prijenos tamo i nazad sa SolidWorks-om | Provjeri skicu koju makro gradi prije nego se osloniš na nju. |

## 3D

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Zaobljenja, skošenja, ljuske i lofti; zamasi duž putanje koja se uzdiže (3D putanje) | Izvuci konture s lukovima, guraj i vuci površine, rotiraj i zamahni duž ravnih putanja. |
| Izvlačenje u drugom smjeru od gore | Nacrtaj oblik na podlozi i izvuci ga gore ili dolje (sa suženjem ili duž putanje ako želiš); zatim rotiraj tijelo. |
| Visina i debljina 2D objekata | Crtež leži na podlozi (visina 0) na 3D kartici. |
| Uređivanje tijela, regiona i tijela iz drugih programa; prikazivanje onih unutar blokova; njihove površine na zamahnutim, lofting ili drugim slobodnim površinama; polyface i poligonske mreže | Tijela u modelskom prostoru prikazuju se na 3D kartici kakva jesu i vraćaju se nepromijenjena u DWG; što nije nacrtano navodi se kad se 3D kartica otvori. Zatraži mreže kao 3D površine u modelskom prostoru. Vidi [Tijela iz drugih programa](topic:3d-solids#solids-from-other-programs). |
| Kopiranje i lijepljenje tijela | Na 3D kartici koristi {{cmd:COPY}}. Međuspremnik sadrži samo 2D objekte. |
| Presjeci, pogledi koji prate kasnije izmjene tijela, i osjenčena tijela na štampanim listovima | {{cmd:VIEWBASE}} postavlja ravne poglede (snimak); pokreni ga ponovo nakon izmjene tijela. |
| Materijali, teksture i postavke osvjetljenja | Vizuelni stilovi: osjenčeno, ivice, skriveni prikaz linija, žičani okvir, X-ray. |
| Kartografski slojevi štampani, na prozorima pogleda listova i na 3D kartici; slike iz datoteka spremljenih s crtežom; zapis lokacije crteža za druge programe u DWG 2000–2007 i DXF R12 | Kartografski slojevi se prikazuju ispod modelskog prostora na ekranu; sistem i lista slojeva se spremaju s crtežom: vidi [Kartografski slojevi ispod crteža](topic:map-layers) |
| E57 skenovi preko 6 miliona tačaka ili 512 MB, vlastite datoteke proizvođača skenera (RCP, RCS, FLS, LGS, TZF, ZFS), oblak tačaka spremljen s crtežom ili štampan, hvatanje za oblak na 3D kartici, uspravni (presječni) isječci na kartici Model | Izvezi velike ili proizvođačke skenove kao LAS ili LAZ ([Formati oblaka tačaka](topic:point-cloud-formats)); priloži oblak svaki put kad otvoriš crtež; ucrtaj iz presjeka osnove na kartici Model: vidi [Ucrtaj stvarne linije preko oblaka tačaka](topic:point-clouds) |
| Registracija skenova: samostalno pronalaženje meta (sfere, šahovske ploče) u skenu, rješavanje svih skenova zajedno (bundle adjustment), skaliranje, registracija prema modelu | Odaberi odgovarajuće tačke ili upiši koordinate meta, zatim dotjeruj jedan po jedan sken pomoću ICP: vidi [Registruj više skenova u jedan](topic:register-scans) |

## Rutine i prilagođavanje

| Još nije izgrađeno | Umjesto toga, danas |
|---|---|
| Kompajlovani ili zaštićeni LISP (.fas, .vlx), izvorni programi (.arx, .crx, .dbx) i VBA (.dvb) | Učitaj .lsp izvor rutine s {{cmd:APPLOAD}}. |
| LISP-ov `grread`, reaktori (`vlr-…`), funkcije krivih (`vlax-curve-…`), rječnici i prošireni podaci, `acet-…` iz Express Tools | Ostatak jezika radi: vidi [Pokreni LISP rutine](topic:run-lisp). Komandna linija imenuje nedostajuću funkciju kad rutina do nje dođe. |
| Slike i slajdovi u dijalogu rutine | Prikazuju se kao prazni okviri; ostatak dijaloga radi. |
| CraftScript (.craft), Lua i Python u CadCraft-u | Pokreni ih u radnom prostoru za skripte u PartCraft-u. |
| Liste slojeva, boja i vrsta linija unutar stilova menija trake | Koristi panel {{ui:Slojevi}} i {{ui:Svojstva}}. |
| Startup Suite i aliasi čuvani na tvom računaru ili sinhronizovani | Čuvaju se u ovom pregledniku; desktop aplikacija i cloud servis će ih čuvati za tebe. U Studiju, `acad.lsp` i `acaddoc.lsp` se čitaju iz mape podrške koju odabereš (Učitaj aplikacije). |

## Pomoć

Pomoć opisuje ovu verziju. Kad se nešto doda, prelazi s ove stranice u vodiče.
