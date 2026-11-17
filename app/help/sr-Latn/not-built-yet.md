---
title: Još nije napravljeno
summary: Šta ova verzija CadCraft aplikacije za crtanje još ne radi i šta možete da uradite umesto toga danas.
keywords: nedostaje, ograničenja, ctb, stb, stil štampanja, svojstva, ucs, anotativno, dinamički blok, spline, plan razvoja, nije podržano, čuvanje dwg, šrafura, istezanje, niz, spajanje, matchprop, prelom, produženje, tip linije, debljina linije, xref, oblak, 3d, tela, bulove operacije, višestruka pokazna linija, wipeout
from: 87e56521
---

CadCraft je u razvoju. Ova stranica navodi šta trenutna verzija ne radi, da ne biste tražili. Svaka stavka kaže šta da uradite umesto toga danas.

## Datoteke i čuvanje

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| CadCraft DWG proveren u samom AutoCAD-u | Svaka sačuvana verzija se čita nazad DWG čitačima tri druga programa i samog CadCraft-a. Pogledajte [Šta DWG čuva i menja](topic:files#what-a-dwg-keeps-and-changes). |
| Čuvanje DXF-a novijeg od 2000 | Sačuvajte kao DXF 2000 ili kao DWG do AutoCAD 2018. |
| Čuvanje preko otvorene datoteke u pregledaču | Svako čuvanje preuzima novu kopiju; ako želite, sami zamenite staru datoteku. U CadCraft Studio, {{key:Mod+S}} upisuje promene u datoteku koju ste otvorili. |
| Čuvanje u oblaku i sinhronizacija između računara | CadCraft još ne šalje sačuvane datoteke u oblak: čuvajte DWG i DXF datoteke u svojim fasciklama. U CadCraft Studio, [Istorija](topic:history) prikazuje verzije crteža u oblaku sačuvane sa drugog mesta i kopije vaših sopstvenih čuvanja na ovom računaru. |
| Podloge i izmena povezanog crteža na licu mesta | Priložite crtež kao vezu i učitajte ga ponovo posle promene drugog crteža. Veza ostaje veza kada sačuvate kao DWG, a {{cmd:XCLIP}} je seče. |
| Slike u DXF-u; wipeout-i koji skrivaju ono što je ispod | DXF čuva sliku kao njen okvir sa imenom datoteke; DWG je čuva kao sliku — pogledajte [Slike u crtežu](topic:pictures). Wipeout se prikazuje kao svoj okvir. |
| Izmena višestrukih pokaznih linija sa krivim pokaznim linijama, sa pokaznim linijama s obe strane sadržaja ili sa blokom koji je okrenut ili razmeren neravnomerno | Crtaju se onako kako ih je nacrtao drugi program i pomeraju se kao jedno. Višestruke pokazne linije sa pravim pokaznim linijama do jednog odredišta, i tekst ili blok kao sadržaj, mogu da se menjaju ({{cmd:MLEADEREDIT}}). |
| U tabelama iz drugih programa: ćelija koja sadrži blok, oblikovanje teksta unutar ćelije, ivice i boje po ćeliji tabele iz DXF-a, tabela razbijena u kolone | Tabela se otvara kao tabela koja se može menjati ({{cmd:TABLEDIT}}) i prikazuje se onako kako ju je nacrtao drugi program dok je ne izmenite; zatim CadCraft crta tabelu iz njenih ćelija: običan tekst, formule kao što su `=G3*H3` i `=Sum(I3:I9)`, poravnanje i visine teksta. Ćelija sa blokom je tada prazna. Nepromenjena DWG tabela se čuva sa podacima ćelija koje je imala. |
| Prava objekat tabele u sačuvanom DXF-u | DWG čuva tabelu kao tabelu koju drugi programi mogu da menjaju. DXF je čuva kao blok koji je crta, uz CadCraft-ov sopstveni zapis: CadCraft je ponovo otvara kao tabelu; drugi programi vide blok. Tabela ogledalski preslikana ili neravnomerno razmerena se tako čuva i u DWG-u. |
| Kopiranje i lepljenje sa drugim programima | Privremena memorija CadCraft-a radi između CadCraft crteža i kartica u istom pregledaču, ne sa drugim programima. Sačuvajte kao DWG ili DXF i otvorite ga tamo. Pogledajte [Kopiraj, nalepi i dupliraj](topic:copy-paste). |

## Crtanje i uređivanje

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Šablone šrafura koje CadCraft nema i gradijentne ispune tačno onako kako ih crtaju drugi programi | Otvorene šrafure sa šablonima koje CadCraft nema prikazuju se kao ton. Gradijentna ispuna ({{cmd:GRADIENT}}) se crta na CadCraft-ov način za svaki tip: po vrsti slična ispunama drugih programa, ne tačka po tačka. DWG 2004 i noviji je čuvaju kao pravu gradijentnu šrafuru; u DXF 2000 ili DWG 2000 datoteci je samo CadCraft ponovo čita, a drugi programi vide punu ispunu. Šabloni se učitavaju iz `.pat` datoteke, a šrafura može biti povezana sa svojom granicom i tada je prati: pogledajte [Šrafura i površine ispune](topic:hatch). |
| Tipovi linija sa oblicima ili tekstom i debljine linija u sačuvanom DXF R12 | Oblici i tekst u tipu linije datoteke se izostavljaju iz njenih crtica; sačuvajte kao DWG da zadržite debljine linija. |
| Šrafure sa šablonom u sačuvanom DXF-u | R12 nema šrafuru: čuvaju se kao njihove konture. Sačuvajte kao DWG da zadržite šablon. |
| Nizovi koje je napravio drugi program ili ih on može menjati; redovi i nivoi u nizovima po putanji i polarnim nizovima; niz koji prati krivu svoje putanje | Niz napravljen kao pridružen (ASsociative, {{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; menja se sa {{cmd:ARRAYEDIT}}) čuva se kao referenca bloka sa CadCraft-ovim sopstvenim brojevima: drugi programi ga prikazuju, pomeraju, štampaju i rastavljaju, ali ne mogu da menjaju njegove brojeve, a niz napravljen u drugom programu se ovde otvara kao obična referenca bloka. Niz po putanji zadržava kopiju svoje putanje: naknadna izmena krive ne pomera stavke. |
| Isečeni prozori pogleda na listovima ka drugim programima i iz njih | Prozor pogleda isečen sa {{cmd:VPCLIP}} ili napravljen sa {{cmd:MVIEW}} Polygonal ili Object čuva se sa CadCraft-ovom sopstvenom konturom: drugi programi ga otvaraju kao pravougaonik oko njega, a prozor pogleda isečen u drugom programu se ovde otvara kao svoj pravougaonik. DXF R12 čuva samo pravougaonik. |
| {{cmd:STRETCH}} sa ukrštenim poligonom | Koristite jedan ili više ukrštenih prozora. |
| {{cmd:PEDIT}} Edit vertex (jedno teme u trenutku u komandnoj liniji) | Hvatači i pregledač temena u Svojstvima (sva temena, njihove širine i ispupčenje). Ostatak PEDIT-a je napravljen: pogledajte [Spline i polilinije](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} i {{cmd:JOIN}} na elipsama i splajnovima | {{cmd:EXPLODE}} splajn (ili ga {{cmd:PEDIT}}) da dobijete polilniju koju ove komande prihvataju. |
| Zaobljenje i obaranje ivice između lučnog segmenta polilinije i susednog segmenta; zaobljenje koje spaja liniju u polilniju | {{cmd:EXPLODE}} polilinije, pa zaobljite delove. Luk zaobljenja se dodaje kao sopstveni objekat. |
| Skraćivanje i produženje: opcija Project (3D) i produženje lučnog kraja polilinije | Skratite u ravni crteža; za lučni kraj rastavite polilniju ili ponovo nacrtajte luk. |
| OLE objekti: umetanje, pokretanje ili uređivanje; prikazivanje onih u DWG-u na mestima gde ih datoteka smešta; metafajl slike | Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole). Objekti DXF-a se prikazuju kao njihova bitmapa ili označen okvir; objekti DWG-a se čuvaju, ali se ne crtaju na mestu (OLELIST ih navodi i stavlja kopiju slike gde kažete). |
| Kucanje kodova oblikovanja (podebljano, razlomci u slogu, boje po reči) u tekstu pasusa; fontovi osim jednog fonta sličnog Helveticau; kolone | Oblikovanje koje je došlo u datoteci se zadržava, crta i čuva (pogledajte Tekst); novi tekst pasusa ima jednu visinu i boju. |
| Tekst pasusa uređen pod svojim uglom | Uređivač se otvara u nivou; tekst zadržava svoj ugao. |
| Višestruke pokazne linije sačuvane kao objekti višestrukih pokaznih linija u DXF-u | DWG ih čuva kao višestruke pokazne linije, sa svakom pokaznom linijom i blokom kao sadržajem; DXF čuva ono što one crtaju (linije, vrhove strelica i tekst ili blok). |
| U tabelama ({{cmd:TABLE}}): tekst koji se prelama unutar ćelije, tabele koje se razbijaju na delove, sopstveni tekstualni stil stila tabele i boje po vrsti reda u dijalogu, veza sa podacima na tabelarnoj datoteci (`.xlsx`) ili ona koja sama čita datoteku | Tekst ćelije se prelama samo tamo gde ga vi prelomite ({{key:Alt+Enter}}); proširite kolonu. {{cmd:DATALINK}} čita `.csv` datoteku, a {{cmd:DATALINKUPDATE}} traži da ponovo izaberete datoteku. {{cmd:DATAEXTRACTION}} i {{cmd:COUNTTABLE}} prave tabelu koja sama ne prati crtež: pokrenite ih ponovo (brojanje uživo: {{cmd:BOMTABLE}}). |
| Definicije atributa sačuvane zasebno u datoteci (van bloka), atributi sa više redova | Pre čuvanja stavite definicije atributa u blok: same se čuvaju kao tekst koji prikazuje oznaku. |
| Stanja slojeva (čuvanje i vraćanje toga koji su slojevi uključeni) | Koristite {{cmd:LAYISO}} / {{cmd:LAYUNISO}} ili ručno uključujte i isključujte slojeve. |
| Izbor poligonom prozora i ukrštenim poligonom, i sačuvani filteri izbora | Ograda (`F`), Prozor, Ukrštanje, Ukloni (`R`), {{cmd:QSELECT}} za pravilo. |

## Panel Svojstva

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Crtanje izbora uklapanja (Fit), i vodoravni položaj teksta i tekst ispod linije na kotama osim linearnih i poravnatih | Čuvaju se na objektu, prikazuju se u {{ui:Properties}} i čuvaju se; CadCraft smešta tekst po svom pravilu. |
| Materijali koje vide drugi programi | Sačuvana datoteka čuva ime materijala za CadCraft; drugi programi prikazuju materijal sloja. |
| Prozirnost u DWG 2000 i DXF datotekama | Drugi programi prikazuju te objekte kao pune; CadCraft čuva prozirnost. Sačuvajte kao DWG 2004 ili noviji da bi je svi videli. |
| Veza šrafure napravljena u drugom programu | CadCraft čuva sopstvenu vezu u DWG i DXF 2000 datotekama; veze napravljene u drugim programima se ne čitaju. Koristite `HATCHEDIT` i Veza (Link): pogledajte [Šrafura i površine ispune](topic:hatch). |
| Koordinate u Svojstvima u UCS-u | Svojstva prikazuju svetske koordinate; traka stanja i {{cmd:ID}} prikazuju UCS koordinate. Pogledajte [Okrenite prikaz i koristite sopstvene koordinate](topic:ucs-and-turned-view). |
| Zaseban položaj anotativnog objekta u svakoj njegovoj razmeri; čitanje zapisa po razmeri koje drugi programi čuvaju | Anotativni tekst ili kota čuva listu razmera ({{cmd:OBJECTSCALE}}), a svaki prozor pogleda ga prikazuje u veličini za svoju razmeru, na istom mestu. Lista se čuva kao CadCraft-ovi sopstveni podaci: drugi program vidi objekat u jednoj razmeri za koju je dimenzionisan, a lista napravljena u drugom programu se ne čita. Pogledajte [Jedinice, listovi i razmere](topic:units-papers-scales#annotate-by-scale). |
| Promena rastojanja, uglova ili preokreta dinamičkog bloka; dinamički blokovi koji ostaju dinamički kada sačuvate u drugoj DWG verziji ili kao DXF | Prebacite njegovo stanje vidljivosti u {{ui:Properties}} › {{ui:Custom}}; njegove druge vrednosti se tamo prikazuju samo za čitanje. Ostaje dinamički kada ga sačuvate kao DWG u verziji u kojoj je crtež stigao. Pogledajte [Dinamički blokovi](topic:dynamic-blocks). |
| Tolerancija prileganja splajna, stepen splajna 6 i viši, 3D splajnovi | Tačke prileganja i kontrolne tačke, stepeni od 1 do 5 i težine su napravljeni: pogledajte [Spline i polilinije](topic:splines). Visina splajna (Z) se ne čuva. |

## Pomagala za preciznost

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Praćenje od tačaka kroz komande i dijalog podešavanja praćenja (relativni polarni uglovi, dodatni uglovi) | {{cmd:POLARANG}} postavlja korak; ponovo uhvatite tačke u sledećoj komandi. |
| Hvatanje za mrežu | Unesite koordinate; mreža je samo vizuelni vodič. |
| Opcije Arc (luk) i Length (dužina) pri izboru uglova površine, i zapremina u MEASUREGEOM-u | Nacrtajte konturu sa {{cmd:PLINE}} (uključujući lukove), zatim {{cmd:AREA}} `O`. |
| Dinamički unos za hvatače i njegova lista opcija (strelica nadole) | Komandna linija prikazuje opcije. |
| Uglovi u stepenima-minutima-sekundama, gradima ili geodetskim azimutima | Unesite decimalne stepene: `30.5` za 30°30'. |
| Dijalog upravljača pogleda; imenovani pogledi lista koji se vraćaju na taj list | {{cmd:NAMEDVIEW}} navodi i vraća poglede. Sačuvana datoteka ih čuva, ali se pogledi lista vraćaju na prvi list. |

## Listovi, kote i štampanje

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Polja za razmeru prozora pogleda, imenovani objekat kao što su sloj ili blok, hiperveza, i polja skupa listova osim broja i imena lista; polja zapisana kao objekti polja koje drugi programi ažuriraju | {{cmd:FIELD}} ima datum, ime datoteke, broj i ime lista i broj, svojstva crteža ({{cmd:DWGPROPS}}), površinu, dužinu i druga svojstva objekta, i formule, u tekstu, atributima i ćelijama tabele. Drugi program prikazuje CadCraft polje kao tekst koji je poslednji pročitao; CadCraft čita datum, ime datoteke, svojstvo, list i polja izraza drugog programa, a ostale vrste ostavlja kao tekst. Razmeru prozora pogleda unosite ručno. |
| Čuvanje koji stil kote je tekući; tekst kote prevučen na slobodno mesto | Crtež se otvara sa tekućim stilom Standard. Tekst leži na liniji kote ({{cmd:DIMTEDIT}} Left / Right / Center). Pogledajte [Podešavanje veličina kota](topic:dimension-settings). |
| Dvolinijske uglovne kote koje se mogu uređivati iz otvorenih datoteka koje CadCraft ne može da protumači | Prikazuju se onako kako su nacrtane u datoteci. Koordinatne kote, kote dužine luka i prelomljenog radijusa se otvaraju kao kote koje možete uređivati. |
| Provera CTB čitača na datoteci iz drugog programa (čitač je napravljen po objavljenom opisu), imenovani stilovi štampanja (STB), dithering, brojevi olovaka, sivi tonovi iz CTB-a i prilagodljivo podešavanje tipa linije u stilu štampanja | Napravite tabelu u {{ui:Plot style tables}} (boja, siva, mastilo, debljina linije, tip linije, kraj i spoj linije, i stil ispune po boji): pogledajte [Tabele stilova štampanja](topic:plot-pdf#plot-style-tables). |
| Podešavanja stranice | Izaberite papir, razmeru i stil štampanja u dijalogu {{ui:Plot to PDF}}; list čuva svoj stil štampanja. |
| Hindi i drugi pisani sistemi koji zahtevaju složeno oblikovanje u PDF-ovima, i retki ideogrami (evropska pisma, ćirilica, grčki, hebrejski, arapski, persijski, urdu, tajlandski, kineski, japanski i korejski štampani tekst) | Štampaju se kao „?“. |
| Tekst arapskim pismom i kineski, japanski ili korejski tekst u istom štampanom PDF-u | Štampanje nosi jedan font: jedno od dva pisma se štampa kao „?“. |
| Eksplicitne oznake smera u tekstu (ugrađene, prepisane i izolovane oznake) | Zanemaruju se: svaki red se uređuje samo po svojim slovima. |
| Slike unutar priložene PDF stranice, u štampanju | Linije, ispune i tekst stranice se štampaju. Stranica koja je samo slika se unosi sa {{cmd:SCANATTACH}}, i slike se štampaju. Pogledajte [PDF podloge](topic:pdf-underlay#plot-and-save). |
| Slanje posla laseru iz CadCraft Studio (Studio nema Web Serial) | Sačuvajte G-kod i pošaljite ga sopstvenim programom lasera ili iz Chrome-a ili Edge-a. Pogledajte [Pošaljite crtež laseru](topic:laser-cutting#send-from-the-browser). |

## Ograničenja i parametri

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Ograničenja na listovima, u blokovima, na elipsama, splajnovima ili tekstu | Ograničavajte na kartici {{ui:Model}}, na linijama, polilinijama, krugovima, lukovima i tačkama. |
| Glatko (G2), i direktno ograničavanje ispupčenja luka polilinije | Tangentno i jednako; segment luka prati svoja dva kraja. |
| Referentna (vođena) dimenziona ograničenja, i `3Point` u {{cmd:DCANGULAR}} | Obična kota (DIMLINEAR …) prikazuje vrednost bez upravljanja njome. |
| Dimenziona ograničenja fiksne veličine na papiru, i njihovo štampanje | Prikazuju se samo na ekranu; dodajte obične kote za štampanje. |
| Ograničenja sačuvana kroz EXPLODE, BREAK, JOIN i druge komande koje prave nove objekte, i na skraćenim polilinijama | Ponovo ih ograničite (AUTOCONSTRAIN pomaže). {{cmd:MIRROR}} i {{cmd:TRIM}} linija, lukova i krugova ih zadržavaju. |
| Tabele dizajna (konfiguracije) u CadCraft-u | Promenite parametre u panelu. |
| Proveren povratni tok sa SolidWorks-om | Proverite skicu koju makro pravi pre nego što se oslonite na nju. |

## 3D

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Zaobljenja, obaranja ivica, ljuske i lofti; provlačenja (sweep) duž putanje koja se uzdiže (3D putanje) | Izvlačite konture sa lukovima, guranje i povlačenje strana, rotiranje i provlačenje duž ravnih putanja. |
| Izvlačenje u drugom smeru osim nagore | Nacrtajte oblik na tlu i izvucite ga nagore ili nadole (sa zakošenjem ili duž putanje ako želite); zatim rotirajte telo. |
| Visina i debljina 2D objekata | Crtež leži na tlu (visina 0) na kartici 3D. |
| Uređivanje tela, regiona i tela iz drugih programa; prikaz onih unutar blokova; njihove strane na provučenim, loft ili drugim slobodnim površinama; polyface i poligonalne mreže | Tela u prostoru modela se prikazuju na kartici 3D kao što jesu i čuvaju se nepromenjena u DWG-u; ono što se ne crta navodi se kada se kartica 3D otvori. Tražite mreže kao 3D strane u prostoru modela. Pogledajte [Tela iz drugih programa](topic:3d-solids#solids-from-other-programs). |
| Kopiranje i lepljenje tela | Na kartici 3D koristite {{cmd:COPY}}. Privremena memorija sadrži samo 2D objekte. |
| Preseci, pogledi koji prate kasnije promene tela, i senčena tela na štampanim listovima | {{cmd:VIEWBASE}} pravi ravne poglede (snimak); pokrenite ga ponovo posle promene tela. |
| Materijali, teksture i podešavanja osvetljenja | Vizuelni stilovi: senčeno, ivice, skrivena linija, žičani model, X-ray. |
| Mapni slojevi štampani, na prozorima pogleda listova i na kartici 3D; slike iz datoteka sačuvanih sa crtežom; lokacija crteža zapisana za druge programe u DWG 2000–2007 i DXF R12 | Mapni slojevi se prikazuju ispod prostora modela na ekranu; sistem i lista slojeva se čuvaju sa crtežom: pogledajte [Mapni slojevi ispod crteža](topic:map-layers). |
| E57 skeniranja preko 6 miliona tačaka ili 512 MB, sopstvene datoteke proizvođača skenera (RCP, RCS, FLS, LGS, TZF, ZFS), oblak tačaka sačuvan sa crtežom ili štampan, hvatanje za oblak na kartici 3D, uspravni (presečni) isečci na kartici Model | Izvezite velika skeniranja ili skeniranja proizvođača kao LAS ili LAZ ([Formati oblaka tačaka](topic:point-cloud-formats)); priložite oblak svaki put kada otvorite crtež; ocrtavajte izvedene linije iz isečka plana na kartici Model: pogledajte [Ocrtavanje izvedenih linija preko oblaka tačaka](topic:point-clouds). |
| Registracija skeniranja: samostalno traženje meta (sfera, šahovskih tabli) u skeniranju, rešavanje svih skeniranja zajedno (bundle adjustment), razmera, registracija u odnosu na model | Birajte odgovarajuće tačke ili unesite koordinate meta, zatim doterajte jedno skeniranje u jednom trenutku pomoću ICP-a: pogledajte [Registrujte više skeniranja u jedno](topic:register-scans). |

## Rutine i prilagođavanje

| Još nije napravljeno | Umesto toga, danas |
|---|---|
| Kompajlovani ili zaštićeni LISP (.fas, .vlx), izvorni programi (.arx, .crx, .dbx) i VBA (.dvb) | Učitajte izvorni .lsp kod rutine sa {{cmd:APPLOAD}}. |
| `grread` iz LISP-a, reaktori (`vlr-…`), funkcije krivih (`vlax-curve-…`), rečnici i prošireni podaci, `acet-…` iz Express Tools-a | Ostatak jezika radi: pogledajte [Pokretanje LISP rutina](topic:run-lisp). Komandna linija navodi nedostajuću funkciju kada rutina na nju naiđe. |
| Slike i slajdovi u dijalogu rutine | Prikazuju se kao prazni okviri; ostatak dijaloga radi. |
| CraftScript (.craft), Lua i Python u CadCraft-u | Pokrenite ih u radnom prostoru Script programa PartCraft. |
| Liste slojeva, boja i tipova linija unutar stilova menija trake | Koristite panel {{ui:Layers}} i {{ui:Properties}}. |
| Startni paket i aliasi sačuvani na računaru ili sinhronizovani | Čuvaju se u ovom pregledaču; desktop aplikacija i usluga u oblaku će ih čuvati za vas. U Studio-u se `acad.lsp` i `acaddoc.lsp` čitaju iz fascikle za podršku koju izaberete (Učitaj aplikacije). |

## Pomoć

Pomoć opisuje ovu verziju. Kada se nešto doda, prelazi sa ove stranice u vodiče.
