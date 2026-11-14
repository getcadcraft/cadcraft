---
title: Datoteke: šta se otvara, šta se spašava
summary: Formati koje CadCraft otvara, spašava i izvozi, šta se zadržava ili pretvara, i gdje idu datoteke.
keywords: xclip, clip, xclip granica, veži isječeno, dwg, dxf, pdf, r12, otvori, spasi, izvoz, uvoz, formati, pretvaranje, preuzimanje, saveas, dxfout, spasi kao, dwg spašavanje, format, qsave, xref, xattach, povezani crtež, spoljna referenca, veži, ponovo učitaj, odvoji
from: 6d68b34e
---

## Ukratko

| Format | Otvori | Spasi | Napomene |
|---|---|---|---|
| DXF (tekst, bilo koja verzija) | Da | Da, kao DXF R12 ili DXF 2000 | Binarni DXF se odbija: prvo ga spasite kao tekstualni DXF. |
| DWG | Da | Da, kao DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018) | Čita i piše vlastita DWG biblioteka CadCraft-a (datoteke AutoCAD R13 do 2018). Vaš DWG se nikad ne mijenja. Oštećene datoteke, ili verzije koje čitač ne podržava, odbijaju se uz poruku. |
| PDF | Uvozi stranicu: kao podlogu ili kao objekte ([PDF podloge](topic:pdf-underlay)) | Da, štampanjem | Vektorski PDF lista, ili modela u razmjeri. |

Svaki crtež koji otvorite (ili pokrenete sa {{ui:Nova}}) dobija svoju karticu iznad područja crtanja. Novi crtež koji niko nije dirao koristi se umjesto dodavanja kartice. Kliknite karticu da je pređete, njen {{ui:×}} da je zatvorite (CadCraft prvo pita ako ima nesačuvanih izmjena), ili poredajte otvorene crteže jedan pored drugog: vidi [Podijeli ekran](topic:split-screen).

## Otvaranje crteža

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Otvori}}, ili upišite `OPEN`, pa izaberite datoteku.
- Ili prevucite `.dwg` ili `.dxf` datoteku na područje crtanja.

Datoteka se čita unutar vašeg preglednika. Ne šalje se nigdje. Historija javlja koliko je objekata i slojeva stiglo i koliko je to trajalo, a odjeljak {{ui:Crtež}} u lijevom panelu prikazuje format, na primjer „DWG 2018 (AC1032)“.

Čitač DWG-a je dio CadCraft-a i učitava se uz prvi DWG koji otvorite nakon što se stranica učita (nekoliko stotina KB), pa nema posebnog preuzimanja koje treba čekati. Čita datoteku u pozadini, pa stranica i dalje reaguje dok se velik DWG otvara.

### Šta ulazi

- Linije, lukovi, krugovi, polilinije (sa lučnim segmentima), elipse, tačke, tekst i višeredni tekst, solidi, šrafure (standardni uzorci nacrtani kao svoje linije, ostali kao ravan ton), reference blokova sa svojim atributima (vrijednosti koje možete uređivati; vidi [Atributi blokova](topic:attributes)), kote, i listovi sa svojim prozorima pregleda.
- Splajnovi ulaze kao splajnovi (stepen, kontrolne tačke, čvorovi, težine, tačke prileganja); vidi [Splajnovi i polilinije](topic:splines).
- Multivođice sa jednom vodećom linijom i tekstom ulaze kao CadCraft multivođice koje možete uređivati (vidi {{cmd:MLEADER}}). Ostale (sa blokom, više vodećih linija ili krivim linijama) crtaju se onako kako ih je nacrtao drugi program i pomjeraju se kao cjelina; istorija kaže koliko ih je.
- Slike se prikazuju kao okvir sa imenom datoteke slike, dok im ne dadete datoteku preko {{cmd:IMAGE}}: vidi [Slike u crtežu](topic:pictures#show-the-pictures-a-dwg-uses). Bijeli ispuni (wipeouts) prikazuju se kao okvir, a ono što je ispod njih ostaje vidljivo.
- Tabele u DWG-u ulaze onako kako ih je nacrtao drugi program.
- 3D površine u modelskom prostoru ulaze na kartici {{ui:3D}}, a ne kao 2D objekti; isto i one unutar blokova, po jednom za svaku referencu bloka u modelu. U bloku i na listu one se takođe crtaju ravne, kao obrisi. Vidi [Model u 3D](topic:3d-solids).
- Slojevi zadržavaju boju, uključeno, zamrznuto, zaključano i postavke štampanja. DEFPOINTS se nikad ne štampa.
- Kote postaju prave, izmjenjive CadCraft kote tamo gdje se njihove tačke mogu pročitati. Najprije se prikazuju tačno onako kako ih je nacrtao drugi program; čim promijenite jednu, CadCraft je ponovo crta u svom stilu.
- Svaki raspored postaje karticom lista. U drugom programu svaki raspored ima skriveni prvi prozor pregleda koji je sam list; CadCraft ga izostavlja.

### Šta još ne ulazi

Sve što CadCraft ne može nacrtati se broji, a ne pogađa. Okvir „O ovoj datoteci“ u lijevom panelu navodi to kao „Još nije prikazano:“, pa svaku vrstu objekta i koliko ih ima. Tipični slučajevi su tabele u DXF-u, mreže i 3D solidi unutar blokova. 3D solidi, regije i tijela u modelskom prostoru prikazuju se na kartici 3D (vidi [Model u 3D](topic:3d-solids#solids-from-other-programs)). Prozori pregleda koji su u datoteci zakrenuti prikazuju se zakrenuti, kao i tamo, i zadržavaju zakret pri spašavanju; isto tako i trenutni UCS, imenovani UCS-ovi i zakrenut pogled.

Tekst se crta jednim fontom u stilu Helvetice. Oznaka koja stane u jedan red u užem fontu originalnog programa može se prelomiti na dva reda u CadCraft-u.

## Spašavanje

Postoje tri načina za spašavanje. Svaki preuzima kopiju.

- **Spasi**: pritisnite {{key:Mod+S}}, kliknite {{ui:Spasi}}, ili upišite `SAVE` (također `QSAVE`). Sprema se u formatu crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. DWG zadržava verziju u kojoj je došao (datoteka iz 2018 spašava se kao 2018). Novi crtež koristi format i DWG verziju koju ste posljednji izabrali u {{ui:Spasi kao}} u ovom pregledniku; ako niste nikad birali, DWG u formatu AutoCAD 2000.
- **Spasi kao**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Spasi kao}}, ili upišite `SAVEAS`. Dijalog {{ui:Spasi kopiju kao}} nudi {{ui:DWG}}, sa listom {{ui:Verzija}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, svaki sa imenom datoteke koje će dati, a trenutni format i verzija crteža već izabrani. Kliknite {{ui:Spasi}} za preuzimanje, ili {{ui:Otkaži}} (ili {{key:Esc}}) da ništa ne spasite; historija tada kaže „Nije spašeno.“ Ono što izaberete ostaje: {{key:Mod+S}} od tada koristi taj izbor za ovaj crtež, a novi crteži u ovom pregledniku počinju s njim.
- **DXFOUT**: upišite `DXFOUT`. Uvijek preuzima kopiju DXF R12, a sljedeće {{key:Mod+S}} i dalje spašava u formatu samog crteža.

Preuzeta datoteka se zove `<ime crteža>.dwg` ili `<ime crteža>.dxf`. Svako spašavanje je **novo preuzimanje**; datoteka koju ste otvorili nikad se ne prepisuje niti mijenja. Historija to potvrđuje, na primjer: „Spašena kopija kao Plan.dwg (DWG (AutoCAD 2018)). Vaš original Plan.dxf nije promijenjen.“ Za DXF piše „(DXF R12, otvara se u bilo kojem CAD programu)“. Redovi ispod nje navode šta se promijenilo pri tome.

Kada CadCraft radi u desktop aplikaciji, spašavanje funkcioniše kao u drugim desktop programima: {{key:Mod+S}} upisuje crtež nazad u datoteku koju ste otvorili, u njenom formatu i verziji, a historija kaže gdje je spašen. {{ui:Spasi kao}} i izvozi prikazuju dijalog sistema za spašavanje, a `.dwg`, `.dxf` ili `.ccsheets` datoteka na koju dvaput kliknete otvara se u CadCraft-u.

Za PDF, štampajte umjesto toga (vidi dolje).

## Šta DWG zadržava i mijenja

CadCraft sam piše DWG, unutar vašeg preglednika, istom bibliotekom kojom i čita. Verziju birate u {{ui:Spasi kao}}: format AutoCAD 2000 (verzija datoteke AC1015) otvara se u najviše programa, uključujući stare; noviji formati (2004, AC1018, do 2018, AC1032) takođe zadržavaju prave boje. Ništa se ne šalje, a spašavanje DWG-a radi van mreže.

Svaka verzija se provjerava tako što se spašene datoteke ponovo čitaju čitačima DWG-a tri druga programa i samim CadCraft-om. CadCraft DWG još nije otvoren u samom AutoCAD-u.

### Šta DWG zadržava

- Linije, lukovi, krugovi, elipse, tačke i polilinije sa svojim lučnim segmentima.
- Jednoredni tekst sa svojim poravnanjem i faktorom širine.
- Višeredni i prelomljeni tekst, kao višeredni tekst. Drugi program ga ponovo prelama iz iste širine.
- Boje objekata: po sloju, po bloku, 255 standardnih boja, i prave boje u formatu 2004 i kasnije.
- Slojevi sa svojom bojom, tipom linije, debljinom linije i postavkama uključeno, zamrznuto, zaključano i štampanje; vlastiti tipovi linija, debljine i razmjere tipova linija objekata, uzorci tipova linija i razmjera tipova linija crteža.
- Jedinice crteža i format dužine (decimalni, stope i inči, razlomci…).
- Blokovi sa svojom osnovnom tačkom i definicijama atributa, uključujući nevidljive, konstantne i unaprijed postavljene.
- Reference blokova sa svojom razmjerom, rotacijom i vrijednostima atributa.
- Pune popune i uzorkovane šrafure sa svojim uzorkom, razmjerom i uglom (linije samog uzorka, pa drugi programi crtaju iste linije koje crta CadCraft).
- Kote, kao prave kote: drugi programi ih ponovo mjere kad se rastegnu. Svaka zadržava svoje postavke (visina teksta, veličina strelice, decimale, format dužine) i svoj tekst, i nosi nacrtanu kopiju koju svaka DWG kota ima.
- Listovi (layouts): svaki list sa veličinom papira i jedinicama, onim što je na njemu nacrtano, i svojim prozorima pregleda sa pogledom i razmjerom.
- Imenovani pogledi.
- Multivođice, kao multivođice.
- Imena slojeva i blokova onako kako ste ih upisali, malim i velikim slovima. (DXF R12 ih piše velikim slovima.)

### Šta DWG mijenja

Svaka od ovih stavki se navodi u historiji nakon spašavanja, kada se odnosi na vaš crtež.

| U CadCraft-u | U spašenom DWG-u |
|---|---|
| Prave boje (izabrane biračem boja), u formatu 2000 | Najbliža standardna boja: format 2000 ima samo 255. Spasite kao 2004 ili kasnije da ih zadržite |
| Imenovani pogledi lista | Pogledi u prostoru papira: DWG ne kaže koji list, pa kad CadCraft ponovo otvori datoteku, pripadaju prvom listu |
| Višeredni tekst sa faktorom širine | Normalna širina slova: u DWG-u faktor širine važi samo za jednoredni tekst |
| Imena slojeva ili blokova sa znakovima koje DWG ne dozvoljava | Promijenjeno: ime iz povezanog crteža kao `Base\|Walls` postaje `Base$0$Walls` (kako ga imenuje vezivanje povezanog crteža), a ostali znakovi postaju `_` |

### Zašto R12, i šta se pretvara

Kad spašavate kao DXF, CadCraft piše DXF R12, verziju koju može otvoriti svaki CAD program. Starija je od nekih funkcija, pa se neke stvari zapisuju u jednostavnijem obliku:

| U CadCraft-u | U spašenoj R12 datoteci |
|---|---|
| Višeredni tekst | Jedan tekstualni objekat po redu |
| Elipse | Polilinije koje prate elipsu |
| Šrafure (iz otvorenih datoteka) | Samo njihovi obrisi |
| Prave boje (izabrane biračem boja) | Najbliža standardna boja |
| Debljine linija i razmjere tipova linija objekata | Izostavljeno: R12 nema ni jedno ni drugo (tipovi linija se zadržavaju) |
| Imena slojeva i blokova | Pisana velikim slovima; razmaci i ostali znakovi postaju `_`, a imena se skraćuju na 31 znak („Title block“ postaje `TITLE_BLOCK`) |
| Slojevi postavljeni da se ne štampaju | Drugi programi će ih štampati (CadCraft pamti postavku kad crtež ima list) |
| Kote | Prave kote sa vlastitim nacrtanim blokom, pa ih drugi programi prikazuju onako kako ih vidite |
| Multivođice | Linije, strelica i tekst koje crtaju |
| Imenovani pogledi | Zadržani, sa imenima velikim slovima; pogledi lista vraćaju se na prvi list |
| Više listova | Prvi list je prostor papira koji svaki program prikazuje; ostali se zadržavaju kao blokovi imenovani `CCLAYOUT_1`, `CCLAYOUT_2` … koje CadCraft pretvara nazad u listove kad otvori datoteku |

Historija navodi svaku od ovih stavki koja se odnosi na vaš crtež.

:::tip
Da biste radili na crtežu kroz više dana, spasite ga kao DXF i sljedeći put otvorite taj DXF. Sve što CadCraft može nacrtati preživi taj ciklus, uključujući kote, blokove i sve listove.
:::

## Povezani crteži (spoljne reference)

{{cmd:XATTACH}} (`XA`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Poveži crtež (xref)}}) povezuje drugi DWG ili DXF: izaberite datoteku, pa kliknite gdje ide ({{key:Enter}} ga stavlja na 0,0). Ulazi kao jedan blok imenovan po datoteci, u pravoj razmjeri kad dva crteža imaju različite jedinice. Njegovi slojevi i blokovi zadržavaju imena uz ime veze ispred: `Plan|Walls`, `Plan|Door`, pa se nikad ne miješaju s vašima: uključujte i isključujte, zamrzavajte ili zaključavajte povezane slojeve kao i svoje. Veza je samo za čitanje: promijenite drugi crtež i ponovo ga učitajte. Ono što postavite na slojeve veze (boju, tip linije, debljinu, uključeno/isključeno, zamrznuto, zaključano, štampanje) zadržava se kad je ponovo učitate, kad spasite crtež kao DWG dok je veza još veza, i kad drugi crtež poveže ovaj.

{{cmd:XREF}} (`XR`): `?` navodi veze (učitane ili ne, koja datoteka, koliko referenci); `A` [Dodaj (A)] dodaje novu vezu; `R` [Osvježi (R)] ponovo učitava jednu iz njene datoteke (ponovo izaberite datoteku: preglednik sam ne može doći do vaših fascikli); `B` [Veži (B)] pretvara je u obične blokove i slojeve imenovane `Plan$0$Walls`; `D` [Odvoji (D)] uklanja jednu (njene reference i slojevi nestaju). Svaka je jedan korak poništavanja.

{{cmd:XCLIP}} (`XC`) isijeca reference blokova i veze: izaberite ih, `N` za novu granicu, zatim `R` [Pravougaonik (R)] i dva ugla ili `P` [Poligon (P)] i tačke poligona ({{key:Enter}} ga zatvara); `D` [Ukloni (D)] uklanja isječak. Vidi se i štampa se samo ono što je unutra, a isječak se pomjera s referencom. DWG i DXF 2000 zadržavaju isječke; DXF R12 spašava referencu cijelu i to kaže. Kad vežete vezu koja ima isječene reference, {{cmd:XREF}} `B` pita: `A` [Veži sve (A)] vezuje sve, a `C` [Zadrži samo odsječeni dio (C)] zadržava samo isječeni dio svake reference (linije i lukovi se sijeku na granici; tekstovi i ugnježđeni blokovi ostaju ako im je tačka umetanja unutra).

Datoteka koju otvorite može povezivati datoteke koje CadCraft ne može vidjeti: kaže koliko ih nije učitano. Koristite {{cmd:XREF}}, `R` i izaberite svaku datoteku da ih vidite.

Kad spašavate, učitana veza se **veže** u datoteku (drugi programi vide obične blokove i slojeve imenovane `Plan$0$…`), a historija to kaže. Veza koja nije učitana ostaje veza na svoju datoteku, u DWG-u i DXF-u.

## Otvaranje u 3D

{{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}} ({{cmd:OPENIN3D}}) otvara crtež u aplikaciji za 3D modeliranje, u novoj kartici, kao DWG, bez slanja. Promjene napravljene tamo ostaju tamo; tamo ih i spasite. Stavka menija se prikazuje samo tamo gdje ta aplikacija može preuzeti predani crtež.

## Štampanje u PDF

Pritisnite {{key:Mod+P}}, kliknite {{ui:Štampaj}}, ili upišite `PLOT`. PDF se pravi unutar preglednika i preuzima se, ili se otvara u novoj kartici za štampanje. Vidi [Štampaj u PDF](topic:plot-pdf).

## Gdje idu datoteke

Svako spašavanje i svako štampanje je preuzimanje, pa datoteke završe gdje vaš preglednik stavlja preuzimanja: obično u fascikli Preuzimanja. Da birate fasciklu svaki put, promijenite postavku preuzimanja u pregledniku; [Preglednici i računari](common:browsers) pokazuje gdje.

Ništa što otvorite ili spasite ne šalje se nama. Vidi [Gdje idu vaše datoteke](common:your-files).

## PLN i PLA projektne datoteke

CadCraft otvara DWG i DXF crteže, a ne Archicadove vlastite datoteke (`.pln`, `.pla`, `.tpl`, `.bpn`). Kad otvorite jednu, kaže vam šta je. U Archicadu spasite poglede ili listove koji vam trebaju kao DWG i otvorite ih ovdje, ili izvezite model kao IFC i otvorite ga u BimCraftu. Gdje BimCraft može preuzeti datoteku, CadCraft nudi {{ui:Otvori u BimCraftu}}.

## Ako se stranica zatvori prije spašavanja

CadCraft čuva kopiju svakog crteža koji promijenite, samo u ovom pregledniku, nakon kratkog vremena otkako prestanete uređivati. Ako se kartica zatvori, preglednik se zaustavi ili se računar ponovo pokrene prije spašavanja, CadCraft pri sljedećem pokretanju pita **Oporaviti vaš rad?** {{ui:Oporavi}} ponovo otvara crtež, nespašen, u njegovoj kartici. Spašavanje crteža briše njegovu kopiju. Vidi [Oporavak vašeg rada](common:recover).

## Na mreži i van nje

Otvaranje, crtanje, spašavanje (DWG i DXF) i štampanje sve se odvija na vašem računaru, pa rade bez veze kad se CadCraft učita.

Da koristite CadCraft bez ikakve veze, kliknite {{ui:Spasi za rad van mreže}} u traci na vrhu dok ste na mreži. Oznaka broji („Spašavanje 40 od 212“) i završava se sa „Spremno za rad van mreže“. Sačuvana kopija uključuje čitač DWG-a, ukupno oko 5 MB, pa se **DWG datoteke otvaraju i van mreže** kad je kopija sačuvana. Kliknite dugme ponovo za {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. „Nije moguće spasiti“ znači da neke datoteke nisu preuzete: provjerite vezu i kliknite da pokušate ponovo. „Rad van mreže nije dostupan“ znači da ovaj prozor preglednika ne može čuvati kopiju (privatni prozori i neki upravljani računari).

Bez sačuvane kopije, čitač DWG-a preuzima se prvi put kad otvorite DWG nakon učitavanja stranice, pa otvaranje DWG-a van mreže može da ne uspije; DXF datoteke mu nikad ne trebaju. Ne osvježavajte stranicu van mreže osim ako CadCraft nije sačuvan.

Vidi [Rad van mreže](common:offline) za detalje.

:::offline
Trenutno ste van mreže. Crteži se spašavaju kao DWG ili DXF i normalno se štampaju, a DXF datoteke se otvaraju. DWG datoteke se otvaraju ako CadCraft prikazuje „Spremno za rad van mreže“, ili ako je čitač DWG-a već učitan u ovoj kartici.
:::

## Ograničenja u datotekama

Ograničenja i parametri (vidi [Ograničenje crteža](topic:constraints)) spašavaju se i u DWG-u i u DXF-u. Svaki ograničeni objekat nosi malu CadCraft bilješku (prošireni podaci), a neiskorišćeni blok imenovan `CADCRAFT_PARAMETRIC` čuva ograničenja i tabelu parametara. Drugi programi otvaraju crtež normalno i ignorišu oboje; mogu obrisati neiskorišćeni blok kad ga očiste. Bilješke upućuju na objekte preko njihovog vlastitog ključa, a ne preko identifikatora (handles) datoteke, pa program koji preimenuje identifikatore ih ne kvari. Kad je drugi program obrisao ili promijenio ograničeni objekat, CadCraft pri otvaranju datoteke odbacuje ograničenja na njemu i kaže koliko ih je. Datoteka bez njih otvara se bez ograničenja.

Skica izvezena iz alata za modeliranje dijelova (`.json`) takođe se otvara: vidi [Premještanje skica iz i u druge alate za modeliranje dijelova](topic:solidworks-sketches).

## Još nije dostupno

- Multivođice kao objekti multivođice u spašenom DXF-u (R12 ih nema: spašavaju se kao ono što crtaju).
- Slike u spašenom DXF-u (spašavaju se kao njihovi okviri; DWG ih zadržava kao slike), i bijeli ispuni koji skrivaju ono što je ispod.
- Spašavanje DXF verzije novije od 2000.
- Spašavanje u oblaku i sinhronizacija između računara.

Vidi [Još nije izrađeno](topic:not-built-yet) za cijeli spisak.
