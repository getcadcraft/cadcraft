---
title: Datoteke: što se otvara, a što sprema
summary: Formati koje CadCraft otvara, sprema i izvozi, što se zadržava ili pretvara te kamo datoteke idu.
keywords: xclip, isječak, granica xclipa, povezivanje isječenih, dwg, dxf, pdf, r12, otvori, spremi, izvoz, uvoz, formati, pretvorba, preuzimanje, saveas, dxfout, spremi kao, spremanje dwg, format, qsave, xref, xattach, povezani crtež, vanjska referenca, povezivanje, ponovno učitavanje, odvajanje
from: 6d68b34e
---

## Ukratko

| Format | Otvaranje | Spremanje | Napomene |
|---|---|---|---|
| DXF (tekstualni, bilo koja verzija) | Da | Da, kao DXF R12 ili DXF 2000 | Binarni DXF se odbija: prvo ga spremite kao tekstualni DXF. |
| DWG | Da | Da, kao DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018) | Čita i piše CadCraftova vlastita DWG knjižnica (datoteke AutoCAD R13 do 2018). Vaš DWG se nikada ne mijenja. Oštećene datoteke ili verzije koje čitač ne obrađuje odbijaju se uz poruku. |
| PDF | Unosi stranicu: kao podlogu ili kao objekte ([PDF podloge](topic:pdf-underlay)) | Da, plotanjem | Vektorski PDF lista ili modela u mjerilu. |

Svaki crtež koji otvorite (ili započnete s {{ui:Novo}}) dobiva vlastitu karticu preko područja crtanja; novi crtež koji nitko nije dirnuo koristi se umjesto dodavanja kartice. Kliknite karticu za prebacivanje, njezin {{ui:×}} za zatvaranje (CadCraft prvo pita ako ima nespremljenih promjena) ili složite otvorene crteže jedan pored drugog: vidi [Podjela zaslona](topic:split-screen).

## Otvaranje crteža

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Otvori}} ili upišite `OPEN`, a zatim odaberite datoteku.
- Ili povucite `.dwg` ili `.dxf` datoteku na područje crtanja.

Datoteka se čita unutar vašeg preglednika. Ne učitava se nikamo. Povijest izvještava koliko je objekata i slojeva ušlo i koliko je trajalo, a odjeljak {{ui:Crtež}} lijeve ploče prikazuje format, na primjer „DWG 2018 (AC1032)“.

DWG čitač dio je CadCrafta i dohvaća se s prvim DWG-om koji otvorite nakon učitavanja stranice (nekoliko stotina KB), pa nema zasebnog preuzimanja koje treba čekati. Datoteku čita u pozadini, pa stranica ostaje responzivna dok se velik DWG otvara.

### Što ulazi

- Linije, lukovi, kružnice, polilinije (s lučnim segmentima), elipse, točke, tekst i višeretčani tekst, puna tijela, šrafure (standardni uzorci crtani kao njihove linije, ostali kao ravan ton), reference blokova s atributima (vrijednosti koje možete uređivati; vidi [Atributi bloka](topic:attributes)), kote te layouti s viewportima.
- Spline-ovi ulaze kao spline-ovi (stupanj, kontrolne točke, čvorovi, težine, točke prilagodbe); vidi [Spline-ovi i polilinije](topic:splines).
- Višestruke vodilice s jednom vodilicom i tekstom ulaze kao CadCraftove višestruke vodilice koje možete uređivati (vidi {{cmd:MLEADER}}). Ostale (s blokom, više vodilica ili zakrivljenim linijama) crtaju se kako ih je nacrtao drugi program i pomiču kao cjelina; povijest kaže koliko ih je.
- Slike (rasteri) prikazuju se kao okvir s nazivom datoteke slike dok CadCraftu ne date datoteku s {{cmd:IMAGE}}: vidi [Slike u crtežu](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouti se prikazuju kao njihov okvir, a ono što je ispod ostaje vidljivo.
- Tablice u DWG-u ulaze kako ih je nacrtao drugi program.
- 3D plohe u prostoru modela ulaze na karticu {{ui:3D}}, a ne kao 2D objekti; tako i one unutar blokova, jednom po referenci bloka u modelu. U bloku i na listu crtaju se i ravno, kao obrisi. Vidi [Model u 3D-u](topic:3d-solids).
- Slojevi zadržavaju svoju boju te postavke uključenosti, zamrznutosti, zaključanosti i ispisa. DEFPOINTS se nikada ne ispisuje.
- Kote postaju prave, uredive CadCraftove kote gdje se njihove točke mogu pročitati. Prvo se prikazuju točno kako ih je nacrtao drugi program; čim jednu promijenite, CadCraft je ponovno crta u vlastitom stilu.
- Svaki layout postaje kartica lista. U drugom programu svaki layout ima skriveni prvi viewport koji je sam list; CadCraft ga izostavlja.

### Što još ne ulazi

Sve što CadCraft ne može nacrtati broji se, a ne pogađa. Okvir „O ovoj datoteci“ u lijevoj ploči navodi to kao „Još nije prikazano:“ iza čega slijedi svaka vrsta objekta i koliko ih je. Tipični slučajevi su tablice u DXF-u, mreže i 3D puna tijela unutar blokova. 3D puna tijela, regije i tijela u prostoru modela prikazuju se na kartici 3D (vidi [Model u 3D-u](topic:3d-solids#solids-from-other-programs)). Viewporti zakrenuti u datoteci prikazuju se zakrenuti, kao i ondje, i zadržavaju zakret kad spremite; tako i trenutni UCS, imenovani UCS-ovi i zakrenut pogled.

Tekst se crta jednim fontom u stilu Helvetice. Natpis koji stane u jedan redak u užem fontu izvornog programa može se u CadCraftu prelomiti u dva retka.

## Spremanje

Postoje tri načina spremanja. Svaki preuzima kopiju.

- **Spremi**: pritisnite {{key:Mod+S}}, kliknite {{ui:Spremi}} ili upišite `SAVE` (također `QSAVE`). Sprema u formatu crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. DWG zadržava verziju s kojom je došao (datoteka iz 2018. sprema se kao 2018.). Novi crtež koristi format i DWG verziju koje ste posljednje odabrali u Spremi kao u ovom pregledniku; ako nikad niste birali, DWG u formatu AutoCAD 2000.
- **Spremi kao**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Spremi kao}} ili upišite `SAVEAS`. Dijaloški okvir {{ui:Spremi kopiju kao}} nudi {{ui:DWG}}, s popisom {{ui:Verzija}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, svaki s nazivom datoteke koji će dati, a trenutni format i verzija crteža već su odabrani. Kliknite {{ui:Spremi}} za preuzimanje ili {{ui:Odustani}} (ili {{key:Esc}}) da ništa ne spremite; povijest tada kaže „Nije spremljeno.“ Ono što odaberete ostaje: {{key:Mod+S}} to od tada koristi za ovaj crtež, a novi crteži u ovom pregledniku počinju s tim.
- **DXFOUT**: upišite `DXFOUT`. Uvijek preuzima kopiju DXF R12, a sljedeći {{key:Mod+S}} i dalje sprema u vlastitom formatu crteža.

Preglednik preuzima `<naziv crteža>.dwg` ili `<naziv crteža>.dxf`. Svako spremanje je **novo preuzimanje**; datoteka koju ste otvorili nikada se ne prepisuje niti mijenja. Povijest to potvrđuje, na primjer „Kopija je spremljena kao Plan.dwg (DWG (AutoCAD 2018)). Vaš izvorni Plan.dxf nije promijenjen.“ Za DXF kaže „(DXF R12, otvara se u svakom CAD programu)“. Retci ispod navode sve što se usput promijenilo.

Kada CadCraft radi u desktop aplikaciji, spremanje radi kao u drugim desktop programima: {{key:Mod+S}} zapisuje crtež natrag u datoteku koju ste otvorili, u njezinu formatu i verziji, a povijest kaže gdje je spremljen. {{ui:Spremi kao}} i izvozi prikazuju sustavski dijaloški okvir za spremanje, a `.dwg`, `.dxf` ili `.ccsheets` datoteka na koju dvaput kliknete otvara se u CadCraftu.

Za PDF umjesto toga plotajte (vidi dolje).

## Što DWG zadržava, a što mijenja

CadCraft DWG piše sam, unutar vašeg preglednika, istom DWG knjižnicom kojom ga čita. Verziju birate u Spremi kao: format AutoCAD 2000 (verzija datoteke AC1015) otvara se u najviše programa, uključujući stare; noviji formati (2004, AC1018, do 2018, AC1032) zadržavaju i prave boje. Ništa se ne učitava, a spremanje DWG-a radi offline.

Svaka verzija provjerava se čitanjem spremljenih datoteka natrag s čitačima DWG-a triju drugih programa i s CadCraftom samim. CadCraftov DWG još nije otvoren u samom AutoCADu.

### Što DWG zadržava

- Linije, lukove, kružnice, elipse, točke i polilinije s lučnim segmentima.
- Jednoretčani tekst s poravnanjem i faktorom širine.
- Višeretčani i prelomljeni tekst, kao višeretčani tekst. Drugi program ga ponovno prelama prema istoj širini.
- Boje objekata: po sloju, po bloku, 255 standardnih boja i prave boje u formatu 2004 i novijim.
- Slojeve s bojom, tipom linije, debljinom linije te postavkama uključenosti, zamrznutosti, zaključanosti i ispisa; vlastite tipove linija, debljine linija i mjerila tipova linija objekata, uzorke tipova linija i mjerilo tipova linija crteža.
- Jedinice crteža i format duljine (decimalni, stope i inči, razlomci…).
- Blokove s baznom točkom i definicijama atributa, uključujući nevidljive, konstantne i unaprijed zadane.
- Reference blokova s mjerilom, zakretom i vrijednostima atributa.
- Pune ispune i šrafure s uzorkom, s njihovim uzorkom, mjerilom i kutom (vlastite linije uzorka, pa drugi programi crtaju iste linije kao CadCraft).
- Kote, kao prave kote: drugi programi ih ponovno mjere kad se rastegnu. Svaka zadržava vlastite postavke (visinu teksta, veličinu strelice, decimale, format duljine) i svoj tekst te nosi nacrtanu kopiju koju ima svaka DWG kota.
- Listove (layoute): svaki list s veličinom papira i jedinicama, onim što je na njemu nacrtano te viewportima s njihovim pogledom i mjerilom.
- Imenovane poglede.
- Višestruke vodilice, kao višestruke vodilice.
- Nazive slojeva i blokova kako ste ih upisali, velikim i malim slovima. (DXF R12 ih piše velikim slovima.)

### Što DWG mijenja

Svaka od ovih stavki navedena je u povijesti nakon spremanja, kada se odnosi na vaš crtež.

| U CadCraftu | U spremljenom DWG-u |
|---|---|
| Prave boje (odabrane biračem boja), u formatu 2000 | Najbliža standardna boja: format 2000 ima samo 255. Spremite kao 2004 ili novije da ih zadržite |
| Imenovani pogledi lista | Pogledi papirnog prostora: DWG ne kaže koji je list, pa kad CadCraft ponovno otvori datoteku pripadaju prvom listu |
| Višeretčani tekst s faktorom širine | Uobičajena širina slova: u DWG-u se faktor širine odnosi samo na jednoretčani tekst |
| Nazivi slojeva ili blokova sa znakovima koje DWG ne dopušta | Promijenjeni: naziv iz povezanog crteža poput `Base\|Walls` postaje `Base$0$Walls` (kako ga naziva povezivanje povezanog crteža), a ostali znakovi postaju `_` |

### Zašto R12 i što se pretvara

Kada spremate kao DXF, CadCraft piše DXF R12, verziju koju može otvoriti svaki CAD program. Starija je od nekih značajki, pa se nekoliko stvari zapisuje u jednostavnijem obliku:

| U CadCraftu | U spremljenoj R12 datoteci |
|---|---|
| Višeretčani tekst | Jedan tekstualni objekt po retku |
| Elipse | Polilinije koje prate elipsu |
| Šrafure (iz otvorenih datoteka) | Samo njihovi obrisi |
| Prave boje (odabrane biračem boja) | Najbliža standardna boja |
| Debljine linija i vlastita mjerila tipova linija objekata | Izostavljeno: R12 nema ništa od toga (tipovi linija se zadržavaju) |
| Nazivi slojeva i blokova | Zapisani velikim slovima; razmaci i ostali znakovi postaju `_`, a nazivi se režu na 31 znak („Title block“ postaje `TITLE_BLOCK`) |
| Slojevi postavljeni da se ne ispisuju | Drugi će ih programi ispisati (CadCraft pamti postavku kada crtež ima list) |
| Kote | Prave kote s vlastitim nacrtanim blokom, pa ih drugi programi prikazuju kako ih vidite |
| Višestruke vodilice | Linije, strelica i tekst koje crtaju |
| Imenovani pogledi | Zadržani, s nazivima velikim slovima; pogledi lista vraćaju se na prvi list |
| Više listova | Prvi list je papirni prostor koji svaki program prikazuje; ostali se čuvaju kao blokovi nazvani `CCLAYOUT_1`, `CCLAYOUT_2` … koje CadCraft pretvara natrag u listove kad otvori datoteku |

Povijest navodi svaku od ovih stavki koja se odnosila na vaš crtež.

:::tip
Da biste na crtežu radili više dana, spremite kao DXF i sljedeći put otvorite taj DXF. Sve što CadCraft može nacrtati preživljava put tamo i natrag, uključujući kote, blokove i sve listove.
:::

## Povezani crteži (vanjske reference)

{{cmd:XATTACH}} (`XA`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Poveži crtež (xref)}}) povezuje drugi DWG ili DXF: odaberite datoteku, a zatim kliknite gdje ide ({{key:Enter}} ga stavlja na 0,0). Ulazi kao jedan blok nazvan prema datoteci, u pravom mjerilu kada dva crteža imaju različite jedinice. Njegovi slojevi i blokovi zadržavaju nazive s nazivom veze ispred — `Plan|Walls`, `Plan|Door` — pa se nikada ne miješaju s vašima: uključujte i isključujte povezane slojeve, zamrzavajte ih ili zaključavajte kao svoje. Veza je samo za čitanje: promijenite drugi crtež i ponovno ga učitajte. Ono što postavite na slojevima veze (boja, tip linije, debljina linije, uključeno/isključeno, zamrznuto, zaključano, ispis) zadržava se kad je ponovno učitate, kad crtež spremite kao DWG dok je veza još veza i kad drugi crtež poveže ovaj.

{{cmd:XREF}} (`XR`): `?` navodi veze (učitane ili ne, koja datoteka, koliko referenci); `A` povezuje; `R` ponovno učitava jednu iz njezine datoteke (ponovno odaberite datoteku: preglednik sam ne može doći do vaših mapa); `B` povezuje jednu u crtež (postaje obični blokovi i slojevi nazvani `Plan$0$Walls`); `D` odvaja jednu (njezine reference i slojevi nestaju). Svaka je jedan korak poništavanja.

{{cmd:XCLIP}} (`XC`) izrezuje reference blokova i veze: odaberite ih, `N` za novu granicu, zatim `R` i dva kuta ili `P` i točke poligona ({{key:Enter}} ga zatvara); `D` uklanja isječak. Samo ono što leži unutra prikazuje se i ispisuje, a isječak se pomiče s referencom. DWG i DXF 2000 zadržavaju isječke; DXF R12 sprema referencu cijelu i to kaže. Kada povezujete u crtež vezu koja ima izrezane reference, {{cmd:XREF}} `B` pita: `A` povezuje sve, `C` zadržava samo izrezani dio svake reference (linije i lukovi režu se na granici; tekstovi i ugniježđeni blokovi ostaju kad je njihova točka umetanja unutra).

Crtež koji otvorite može povezivati datoteke koje CadCraft ne vidi: kaže koliko ih nije učitano. Koristite {{cmd:XREF}}, `R` i odaberite svaku datoteku da ih vidite.

Kada spremate, učitana veza se **povezuje u crtež** u datoteci (drugi programi vide obične blokove i slojeve nazvane `Plan$0$…`), a povijest to kaže. Veza koja nije učitana ostaje veza na svoju datoteku, u DWG-u i DXF-u.

## Otvori u 3D-u

{{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraftu}} ({{cmd:OPENIN3D}}) otvara crtež u aplikaciji za 3D modeliranje u novoj kartici, kao DWG, bez učitavanja. Promjene napravljene ondje ostaju ondje; ondje ih i spremite. Stavka izbornika prikazuje se samo gdje ta aplikacija može preuzeti predani crtež.

## Plotanje PDF-a

Pritisnite {{key:Mod+P}}, kliknite {{ui:Ispis}} ili upišite `PLOT`. PDF se izrađuje unutar preglednika i preuzima, ili otvara u novoj kartici za ispis. Vidi [Plotanje u PDF](topic:plot-pdf).

## Kamo datoteke idu

Svako spremanje i svako plotanje je preuzimanje, pa datoteke završavaju gdje vaš preglednik stavlja preuzimanja: obično u mapi Preuzimanja. Da svaki put birate mapu, promijenite postavku preuzimanja u pregledniku; [Preglednici i računala](common:browsers) pokazuje gdje.

Ništa što otvorite ili spremite ne šalje se nama. Vidi [Kamo idu vaše datoteke](common:your-files).

## PLN i PLA projektne datoteke

CadCraft otvara DWG i DXF crteže, a ne Archicadove vlastite datoteke (`.pln`, `.pla`, `.tpl`, `.bpn`). Otvaranje jedne govori vam što je. U Archicadu spremite poglede ili layoute koji vam trebaju kao DWG i otvorite ih ovdje ili izvezite model kao IFC i otvorite ga u BimCraftu. Gdje BimCraft može preuzeti datoteku, CadCraft nudi {{ui:Otvori u BimCraftu}}.

## Ako se stranica zatvori prije spremanja

CadCraft čuva kopiju svakog crteža koji promijenite, samo u ovom pregledniku, trenutak nakon što prestanete uređivati. Ako se kartica zatvori, preglednik prestane raditi ili se računalo ponovno pokrene prije nego što spremite, CadCraft pri sljedećem pokretanju pita **Oporaviti svoj rad?**: {{ui:Oporavi}} ponovno otvara crtež, nespremljen, u vlastitoj kartici. Spremanje crteža uklanja njegovu kopiju. Vidi [Oporavak vašeg rada](common:recover).

## Online i offline

Otvaranje, crtanje, spremanje (DWG i DXF) i plotanje događaju se na vašem računalu, pa rade bez veze nakon što se CadCraft učita.

Da CadCraft koristite bez ikakve veze, kliknite {{ui:Spremi za offline}} na traci pri vrhu dok ste online. Natpis broji naprijed („Spremanje 40 od 212“) i završava na „Spremno za offline“. Spremljena kopija uključuje DWG čitač, ukupno oko 5 MB, pa se **DWG datoteke otvaraju i offline** kada je spremljena. Ponovno kliknite gumb za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}}. „Spremanje nije uspjelo“ znači da se neke datoteke nisu preuzele: provjerite vezu i kliknite da pokušate ponovno. „Offline nije dostupan“ znači da ovaj prozor preglednika ne može čuvati kopiju (privatni prozori i neka upravljana računala).

Bez spremljene kopije DWG čitač dohvaća se prvi put kad otvorite DWG nakon učitavanja stranice, pa otvaranje DWG-a offline može propasti; DXF datoteke ga nikada ne trebaju. Ne osvježavajte stranicu offline osim ako je CadCraft spremljen.

Pojedinosti su u [Rad offline](common:offline).

:::offline
Sada ste offline. Crteži se spremaju kao DWG ili DXF i plotaju normalno, a DXF datoteke se otvaraju. DWG datoteke se otvaraju ako CadCraft prikazuje „Spremno za offline“ ili ako se DWG čitač već učitao u ovoj kartici.
:::

## Ograničenja u datotekama

Ograničenja i parametri (vidi [Ograničavanje crteža](topic:constraints)) spremaju se i u DWG i u DXF. Svaki ograničeni objekt nosi malu CadCraftovu bilješku (proširene podatke), a neiskorišteni blok nazvan `CADCRAFT_PARAMETRIC` drži ograničenja i tablicu parametara. Drugi programi otvaraju crtež normalno i zanemaruju oboje; mogu izbrisati neiskorišteni blok kad čiste crtež. Bilješke upućuju na objekte njihovim vlastitim ključem, a ne ručkama datoteke, pa ih program koji preimenuje ručke ne kvari. Kada je drugi program izbrisao ili promijenio ograničeni objekt, CadCraft pri otvaranju datoteke odbacuje ograničenja na njemu i kaže koliko ih je. Datoteka bez njih otvara se bez ograničenja.

Skica izvezena iz modelera dijelova (`.json`) također se otvara: vidi [Prijenos skica u druge modelere dijelova i iz njih](topic:solidworks-sketches).

## Još nije dostupno

- Višestruke vodilice kao objekti višestrukih vodilica u spremljenom DXF-u (R12 ih nema: spremaju se kao ono što crtaju).
- Slike u spremljenom DXF-u (spremaju se kao njihovi okviri; DWG ih čuva kao slike) i wipeouti koji skrivaju ono što je ispod.
- Spremanje novije DXF verzije od 2000.
- Spremanje u oblaku i sinkronizacija između računala.

Cijeli popis vidi u [Još nije izrađeno](topic:not-built-yet).
