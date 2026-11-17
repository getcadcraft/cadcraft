---
title: Datoteke: što se otvara, što se sprema
summary: Formati koje CadCraft otvara, sprema i izvozi, što se čuva ili pretvara te gdje datoteke završavaju.
keywords: xclip, clip, granica odrezivanja, spoji odrezano, dwg, dxf, pdf, r12, otvori, spremi, izvoz, uvoz, formati, pretvorba, preuzimanje, saveas, dxfout, spremi kao, format dwg, format, qsave, xref, xattach, vanjska referenca, bind, ponovno učitaj, odspoji
from: b8c5778d
---

## Ukratko

| Format | Otvaranje | Spremanje | Napomene |
|---|---|---|---|
| DXF (tekstualni ili binarni, bilo koja verzija) | Da | Da, kao DXF R12, DXF 2000 ili DXF 2000 (binarni) | Binarni DXF se otvara kao i tekstualni i sprema se natrag kao binarni. |
| DWG | Da | Da, kao DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018) | Čita i zapisuje ga vlastita DWG biblioteka CadCrafta (datoteke AutoCAD R13 do 2018). Vaš DWG se nikad ne mijenja. Oštećene datoteke ili verzije koje čitač ne podržava odbijaju se uz poruku. |
| PDF | Donosi stranicu: kao podlogu ili kao objekte ([PDF podloge](topic:pdf-underlay)) | Da, ispisom | Vektorski PDF lista ili modela u mjerilu. |

Svaki crtež koji otvorite (ili pokrenete s {{ui:Nova}}) dobiva vlastitu karticu iznad područja crtanja; novi crtež koji još nitko nije dirao koristi se umjesto dodavanja kartice. Kliknite karticu za prebacivanje, njezin {{ui:×}} za zatvaranje (CadCraft prvo pita ako postoje nespremljene promjene), ili složite otvorene crteže jedan uz drugi: pogledajte [Podijeli zaslon](topic:split-screen).

## Otvaranje crteža

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Otvori}}, ili upišite `OPEN`, zatim odaberite datoteku.
- Ili povucite datoteku `.dwg` ili `.dxf` na područje crtanja.

Datoteka se čita unutar vašeg preglednika. Nigdje se ne učitava. Povijest javlja koliko je objekata i slojeva uneseno i koliko je to trajalo, a odjeljak {{ui:Crtež}} u lijevoj ploči prikazuje format, na primjer "DWG 2018 (AC1032)".

DWG čitač dio je CadCrafta i učitava se uz prvi DWG koji otvorite nakon učitavanja stranice (nekoliko stotina KB), tako da nema zasebnog preuzimanja za čekanje. Čita datoteku u pozadini, pa stranica i dalje reagira dok se velik DWG otvara.

DXF se čita u dijelovima od oko 4 MB, nikad kao jedan blok teksta, pa se DXF veći od 512 MB također otvara. Ograničava vaše računalo i njegova memorija: dok se DXF otvara, očekujte da troši otprilike 16 do 20 puta veličinu datoteke (DXF od 100 MB s oko 690 000 objekata koristio je oko 1.5 GB u našem testu).

### Što dolazi

- Linije, lukovi, kružnice, polilinije (s lučnim segmentima), elipse, točke, tekst i višeredni tekst, solidi, šrafure (standardni uzorci nacrtani kao svoje linije, ostali kao ravni ton), reference blokova s njihovim atributima (vrijednosti koje možete uređivati; pogledajte [Atributi bloka](topic:attributes)), kote, i rasporedi s njihovim viewportima.
- Splinovi dolaze kao splinovi (stupanj, kontrolne točke, čvorovi, težine, točke prilagodbe); pogledajte [Splinovi i polilinije](topic:splines).
- Višestruke vodilice s jednom vodilicom i tekstom dolaze kao višestruke vodilice CadCrafta koje možete uređivati (pogledajte {{cmd:MLEADER}}). Ostale (s blokom, više vodilica ili zakrivljenim linijama) crtaju se onako kako ih je nacrtao drugi program i pomiču se kao cjelina; povijest kaže koliko ih je.
- Slike (images) prikazuju se kao okvir s nazivom datoteke slike dok CadCraftu ne date datoteku naredbom {{cmd:IMAGE}}: pogledajte [Slike u crtežu](topic:pictures#show-the-pictures-a-dwg-uses). Prekrivanja se prikazuju kao njihov okvir, a ono što je ispod njih ostaje vidljivo.
- Tablice u DWG-u dolaze onako kako ih je nacrtao drugi program.
- 3D plohe u prostoru modela dolaze na kartici {{ui:3D}}, a ne kao 2D objekti; isto vrijedi i za one unutar blokova, jednom po referenci bloka u modelu. U bloku i na listu također se crtaju ravno, kao obrisi. Pogledajte [Model u 3D](topic:3d-solids).
- Slojevi čuvaju svoju boju, postavke uključeno, zamrznuto, zaključano i ispisa. DEFPOINTS se nikad ne ispisuje.
- Kote postaju prave, uredive kote CadCrafta tamo gdje se njihove točke mogu očitati. Prvo se prikazuju točno onako kako ih je nacrtao drugi program; čim promijenite jednu, CadCraft je ponovno crta u svom stilu.
- Svaki raspored postaje kartica lista. U drugom programu svaki raspored ima skriveni prvi viewport koji je sam list; CadCraft ga izostavlja.

### Što još ne dolazi

Sve što CadCraft ne može nacrtati se broji, a ne pogađa. Okvir "O ovoj datoteci" u lijevoj ploči navodi to kao "Još nije prikazano:" nakon čega slijedi svaka vrsta objekta i koliko ih ima. Tipični slučajevi su tablice u DXF-u, mreže i 3D solidi unutar blokova. 3D solidi, regije i tijela u prostoru modela prikazuju se na kartici 3D (pogledajte [Model u 3D](topic:3d-solids#solids-from-other-programs)). Viewporti koji su u datoteci zakrenuti prikazuju se zakrenuti, kao i tamo, i zadržavaju zakret kad spremite; tako je i s trenutnim UCS-om, imenovanim UCS-ovima i zakrenutim pogledom.

Tekst se crta jednim fontom u stilu Helvetice. Oznaka koja stane u jedan redak u užem fontu izvornog programa može se prelomiti u dva retka u CadCraftu.

## Spremanje

Postoje tri načina spremanja. Svaki preuzima kopiju.

- **Spremi**: pritisnite {{key:Mod+S}}, kliknite {{ui:Spremi}}, ili upišite `SAVE` (također `QSAVE`). Sprema u formatu crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. DWG zadržava verziju s kojom je došao (datoteka iz 2018 sprema se kao 2018). Novi crtež koristi format i DWG verziju koju ste zadnje odabrali u {{ui:Spremi kao}} u ovom pregledniku; ako niste nikad birali, DWG u formatu AutoCAD 2000.
- **Spremi kao**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Spremi kao}}, ili upišite `SAVEAS`. Dijaloški okvir {{ui:Spremi kopiju kao}} nudi {{ui:DWG}}, s popisom {{ui:Verzija}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, svaki s nazivom datoteke koji će dobiti, a trenutni format i verzija crteža već su odabrani. Kliknite {{ui:Spremi}} za preuzimanje, ili {{ui:Odustani}} (ili {{key:Esc}}) da ništa ne spremite; povijest tada kaže "Nije spremljeno." Što odaberete ostaje: {{key:Mod+S}} to koristi za ovaj crtež od tada, a novi crteži u ovom pregledniku počinju s tim.
- **DXFOUT**: upišite `DXFOUT`. Uvijek preuzima kopiju DXF R12, a sljedeći {{key:Mod+S}} i dalje sprema u vlastitom formatu crteža.

Preglednik preuzima `<naziv crteža>.dwg` ili `<naziv crteža>.dxf`. Svako spremanje je **novo preuzimanje**; datoteka koju ste otvorili nikad se ne prepisuje niti mijenja. Povijest to potvrđuje, na primjer "Spremljena kopija kao Plan.dwg (DWG (AutoCAD 2018)). Vaša izvorna Plan.dxf nije promijenjena." Za DXF piše "(DXF R12, otvara se u bilo kojem CAD programu)". Retci ispod nje navode sve što se promijenilo usput.

Kad CadCraft radi u desktop aplikaciji, spremanje radi kao u drugim desktop programima: {{key:Mod+S}} zapisuje crtež natrag u datoteku koju ste otvorili, u vlastitom formatu i verziji, a povijest kaže gdje je spremljen. {{ui:Spremi kao}} i izvozi prikazuju dijaloški okvir za spremanje sustava, a `.dwg`, `.dxf` ili `.ccsheets` datoteka koju dvaput kliknete otvara se u CadCraftu.

Za PDF ispišite umjesto spremanja (pogledajte dolje).

## Što DWG zadržava i mijenja

CadCraft sam zapisuje DWG unutar vašeg preglednika, s istom DWG bibliotekom kojom ga čita. Verziju odaberite u {{ui:Spremi kao}}: format AutoCAD 2000 (verzija datoteke AC1015) otvara se u najviše programa, uključujući stare; noviji formati (2004, AC1018, do 2018, AC1032) također zadržavaju prave boje. Ništa se ne učitava, a spremanje DWG-a radi i offline.

Svaka verzija provjerava se čitanjem spremljenih datoteka DWG čitačima triju drugih programa i samim CadCraftom. DWG iz CadCrafta još nije otvoren u samom AutoCADu.

### Što DWG zadržava

- Linije, lukove, kružnice, elipse, točke i polilinije s njihovim lučnim segmentima.
- Jednoredni tekst s njegovim poravnanjem i faktorom širine.
- Višeredni i prelomljeni tekst, kao višeredni tekst. Drugi program ga ponovno prelama iz iste širine.
- Boje objekata: po sloju, po bloku, 255 standardnih boja, i prave boje u formatu 2004 i kasnijim.
- Slojevi s bojom, vrstom linije, debljinom linije i postavkama uključeno, zamrznuto, zaključano i ispisa; vlastite vrste linija, debljine linija i mjerila vrsta linija objekata, uzorci vrsta linija i mjerilo vrste linije crteža.
- Jedinice crteža i oblik duljine (decimalni, stope i inči, razlomci…).
- Blokovi s njihovom baznom točkom i definicijama atributa, uključujući nevidljive, konstantne i unaprijed postavljene.
- Reference blokova s njihovim mjerilom, rotacijom i vrijednostima atributa.
- Puni ispuni i šrafure s uzorcima, mjerilom i kutom (vlastite linije uzorka, pa drugi programi crtaju iste linije kao CadCraft).
- Kote, kao prave kote: drugi programi ih ponovno mjere kad se istežu. Svaka zadržava svoje postavke (visinu teksta, veličinu strelice, decimale, oblik duljine) i svoj tekst, te nosi nacrtanu kopiju koju ima svaka DWG kota.
- Listovi (rasporedi): svaki list s veličinom papira i jedinicama, što je nacrtano na njemu, i njegovi viewporti s pogledom i mjerilom.
- Imenovani pogledi.
- Višestruke vodilice, kao višestruke vodilice.
- Nazivi slojeva i blokova onako kako ste ih upisali, velikim i malim slovima. (DXF R12 ih zapisuje velikim slovima.)

### Što DWG mijenja

Svaka od ovih stavki navodi se u povijesti nakon spremanja, kad se odnosi na vaš crtež.

| U CadCraftu | U spremljenom DWG-u |
|---|---|
| Prave boje (odabrane alatom za odabir boje), u formatu 2000 | Najbliža standardna boja: format 2000 ima samo 255. Spremite kao 2004 ili kasnije da ih zadržite |
| Imenovani pogledi lista | Pogledi u papirnom prostoru: DWG ne kaže koji list, pa kad CadCraft ponovno otvori datoteku, pripadaju prvom listu |
| Višeredni tekst s faktorom širine | Normalna širina slova: u DWG-u se faktor širine primjenjuje samo na jednoredni tekst |
| Nazivi slojeva ili blokova sa znakovima koje DWG ne dopušta | Promijenjeno: naziv iz povezanog crteža poput `Base\|Walls` postaje `Base$0$Walls` (način na koji ga imenuje vezanje povezanog crteža), a ostali znakovi postaju `_` |

### Zašto R12 i što se pretvara

Kad spremate kao DXF, CadCraft zapisuje DXF R12, verziju koju može otvoriti svaki CAD program. Starija je od nekih značajki, pa se neke stvari zapisuju u jednostavnijem obliku:

| U CadCraftu | U spremljenoj R12 datoteci |
|---|---|
| Višeredni tekst | Jedan tekstualni objekt po retku |
| Elipse | Polilinije koje prate elipsu |
| Šrafure (iz otvorenih datoteka) | Samo njihovi obrisi |
| Prave boje (odabrane alatom za odabir boje) | Najbliža standardna boja |
| Debljine linija i vlastita mjerila vrsta linija objekata | Izostavljeno: R12 nema ni jedno ni drugo (vrste linija se čuvaju) |
| Nazivi slojeva i blokova | Zapisani velikim slovima; razmaci i drugi znakovi postaju `_`, a nazivi se skraćuju na 31 znak ("Title block" postaje `TITLE_BLOCK`) |
| Slojevi postavljeni da se ne ispisuju | Drugi programi će ih ispisati (CadCraft pamti postavku kad crtež ima list) |
| Kote | Prave kote sa svojim nacrtanim blokom, pa ih drugi programi prikazuju kako ih vidite |
| Višestruke vodilice | Linije, strelica i tekst koje crtaju |
| Imenovani pogledi | Zadržani, s nazivima velikim slovima; pogledi lista vraćaju se na prvi list |
| Više listova | Prvi list je papirni prostor koji svaki program prikazuje; ostali se čuvaju kao blokovi nazvani `CCLAYOUT_1`, `CCLAYOUT_2` … koje CadCraft pretvara natrag u listove kad otvori datoteku |

Povijest navodi svaku od ovih stavki koja se primijenila na vaš crtež.

:::tip
Da nastavite raditi na crtežu kroz nekoliko dana, spremite kao DXF i sljedeći put otvorite taj DXF. Sve što CadCraft može nacrtati preživljava ciklus, uključujući kote, blokove i sve listove.
:::

## Vanjske reference (Xref)

{{cmd:XATTACH}} (`XA`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Poveži crtež (xref)}}) povezuje drugi DWG ili DXF: odaberite datoteku, zatim kliknite gdje ide ({{key:Enter}} ga stavlja na 0,0). Dolazi kao jedan blok nazvan po datoteci, u pravom mjerilu kad dva crteža imaju različite jedinice. Njegovi slojevi i blokovi zadržavaju svoje nazive uz naziv veze ispred: `Plan|Walls`, `Plan|Door`, pa se nikad ne miješaju s vašima: uključujte i isključujte, zamrzavajte ili zaključavajte povezane slojeve kao svoje. Veza je samo za čitanje: promijenite drugi crtež i ponovno ga učitajte. Ono što postavite na slojeve veze (boju, vrstu linije, debljinu linije, uključeno/isključeno, zamrznuto, zaključano, ispis) zadržava se kad je ponovno učitate, kad spremite crtež kao DWG dok je veza još veza, i kad drugi crtež poveže ovaj.

{{cmd:XREF}} (`XR`): `?` navodi veze (učitane ili ne, koja datoteka, koliko referenci); `A` povezuje; `R` ponovno učitava jednu iz njezine datoteke (ponovno odaberite datoteku: preglednik sam ne može doći do vaših mapa); `B` vezuje jednu (postaje obični blokovi i slojevi nazvani `Plan$0$Walls`); `D` odspaja jednu (njezine reference i slojevi nestaju). Svaka je jedan korak poništavanja.

{{cmd:XCLIP}} (`XC`) reže reference blokova i veza: odaberite ih, `N` za novu granicu, zatim `R` i dva kuta ili `P` i točke poligona ({{key:Enter}} ga zatvara); `D` uklanja odrezivanje. Prikazuje se i ispisuje samo ono što je unutar granice, a odrezivanje se pomiče s referencom. DWG i DXF 2000 zadržavaju odrezivanja; DXF R12 sprema referencu cijelu i to kaže. Kad vežete vezu koja ima odrezane reference, {{cmd:XREF}} `B` pita: `A` vezuje sve, `C` zadržava samo odrezani dio svake reference (linije i lukovi se režu na granici; tekstovi i ugniježđeni blokovi ostaju ako im je točka umetanja unutra).

Otvoreni crtež može povezivati datoteke koje CadCraft ne može vidjeti: kaže koliko ih nije učitano. Upotrijebite {{cmd:XREF}}, `R` i odaberite svaku datoteku da ih vidite.

Pri spremanju se učitana veza **veže** u datoteku (drugi programi vide obične blokove i slojeve nazvane `Plan$0$…`), a povijest to kaže. Veza koja nije učitana ostaje veza na svoju datoteku, u DWG-u i DXF-u.

## Otvaranje u 3D

{{ui:View}} › {{ui:Više}} › {{ui:Otvori u ModelCraftu}} ({{cmd:OPENIN3D}}) otvara crtež u aplikaciji za 3D modeliranje u novoj kartici, kao DWG, bez učitavanja. Promjene napravljene tamo ostaju tamo; spremite ih tamo. Stavka izbornika prikazuje se samo tamo gdje ta aplikacija može preuzeti predani crtež.

## Ispis PDF-a

Pritisnite {{key:Mod+P}}, kliknite {{ui:Ispis}}, ili upišite `PLOT`. PDF se izrađuje u pregledniku i preuzima se, ili se otvara u novoj kartici za ispis. Pogledajte [Ispis u PDF](topic:plot-pdf).

## Gdje završavaju datoteke

Svako spremanje i svaki ispis je preuzimanje, pa datoteke završavaju gdje vaš preglednik stavlja preuzimanja: obično u mapi Preuzimanja. Da svaki put birate mapu, promijenite postavku preuzimanja u pregledniku; [Preglednici i računala](common:browsers) pokazuje gdje.

Ništa što otvorite ili spremite ne šaljemo nama. Pogledajte [Gdje završavaju vaše datoteke](common:your-files).

## Projektne datoteke PLN i PLA

CadCraft otvara DWG i DXF crteže, a ne vlastite datoteke Archicada (`.pln`, `.pla`, `.tpl`, `.bpn`). Kad otvorite jednu, javlja vam što je. U Archicadu spremite poglede ili rasporede koji su vam potrebni kao DWG i otvorite ih ovdje, ili izvezite model kao IFC i otvorite ga u BimCraftu. Gdje BimCraft može preuzeti datoteku, CadCraft nudi {{ui:Otvori u BimCraftu}}.

## Ako se stranica zatvori prije spremanja

CadCraft čuva kopiju svakog crteža koji promijenite, samo u ovom pregledniku, nakon kratkog vremena otkad prestanete uređivati. Ako se kartica zatvori, preglednik se zaustavi ili se računalo ponovno pokrene prije nego što spremite, CadCraft pri sljedećem pokretanju pita **Oporaviti vaš rad?**: {{ui:Oporavi}} ponovno otvara crtež, nespremljen, u njegovoj kartici. Spremanje crteža uklanja njegovu kopiju. Pogledajte [Oporavak vašeg rada](common:recover).

## Online i offline

Otvaranje, crtanje, spremanje (DWG i DXF) i ispis rade na vašem računalu, pa rade bez veze kad se CadCraft jednom učita.

Za korištenje programa CadCraft bez ikakve veze kliknite {{ui:Spremi za offline}} u traci na vrhu dok ste online. Oznaka broji ("Spremanje 40 od 212") i završava s "Offline spreman". Spremljena kopija uključuje DWG čitač, ukupno oko 5 MB, pa se **DWG datoteke otvaraju i offline** nakon spremanja. Kliknite gumb ponovno za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}}. "Nije moguće spremiti" znači da neke datoteke nisu preuzete: provjerite vezu i kliknite za ponovni pokušaj. "Offline nije dostupno" znači da ovaj prozor preglednika ne može zadržati kopiju (privatni prozori i neka upravljana računala).

Bez spremljene kopije DWG čitač se preuzima pri prvom otvaranju DWG-a nakon učitavanja stranice, pa otvaranje DWG-a offline može ne uspjeti; DXF datoteke ga nikad ne trebaju. Ne ponovno učitavajte stranicu offline osim ako CadCraft nije spremljen.

Pogledajte [Rad offline](common:offline) za pojedinosti.

:::offline
Trenutno ste offline. Crteži se spremaju kao DWG ili DXF i normalno se ispisuju, a DXF datoteke se otvaraju. DWG datoteke se otvaraju ako CadCraft prikazuje "Offline spreman", ili ako je DWG čitač već učitan u ovoj kartici.
:::

## Ograničenja u datotekama

Ograničenja i parametri (pogledajte [Ograničite crtež](topic:constraints)) spremaju se i u DWG i u DXF. Svaki ograničeni objekt nosi mali CadCraft zapis (proširene podatke), a neiskorišteni blok nazvan `CADCRAFT_PARAMETRIC` drži ograničenja i tablicu parametara. Drugi programi otvaraju crtež normalno i zanemaruju oboje; mogu obrisati neiskorišteni blok kad čiste datoteku. Zapisi se odnose na objekte po njihovom vlastitom ključu, a ne po ručkama datoteke, pa program koji prenumerira ručke ih ne pokvari. Kad je drugi program izbrisao ili promijenio ograničeni objekt, CadCraft pri otvaranju datoteke odbacuje ograničenja na njemu i kaže koliko ih je. Datoteka bez njih otvara se bez ograničenja.

Skica izvezena iz modelara dijelova (`.json`) također se otvara: pogledajte [Premještanje skica prema drugim modelarima dijelova i iz njih](topic:solidworks-sketches).

## Još nije dostupno

- Višestruke vodilice kao objekti višestrukih vodilica u spremljenom DXF-u (R12 ih nema: spremaju se kao ono što crtaju).
- Slike u spremljenom DXF-u (spremaju se kao njihovi okviri; DWG ih zadržava kao slike), te prekrivanja koja skrivaju ono što je ispod.
- Spremanje DXF verzije novije od 2000.
- Spremanje u oblak i sinkronizacija između računala.

Pogledajte [Još nije izrađeno](topic:not-built-yet) za cijeli popis.
