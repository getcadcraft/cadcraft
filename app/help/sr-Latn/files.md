---
title: Datoteke: šta se otvara, šta se čuva
summary: Formati koje CadCraft otvara, čuva i izvozi, šta se zadržava ili pretvara, i gde datoteke završavaju.
keywords: xclip, clip, granica isečka, vezati isečeno, dwg, dxf, pdf, r12, otvori, sačuvaj, izvezi, uvezi, formati, konverzija, preuzimanje, saveas, dxfout, sačuvaj kao, čuvanje dwg, format, qsave, xref, xattach, povezani crtež, spoljna referenca, vezati, ponovo učitaj, odvoji
from: b8c5778d
---

## Ukratko

| Format | Otvaranje | Čuvanje | Napomene |
|---|---|---|---|
| DXF (tekst ili binarni, bilo koja verzija) | Da | Da, kao DXF R12, DXF 2000 ili DXF 2000 (binarni) | Binarni DXF se otvara kao tekstualni i čuva se nazad kao binarni. |
| DWG | Da | Da, kao DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018) | Čita i piše CadCraft-ova sopstvena DWG biblioteka (datoteke AutoCAD R13 do 2018). Vaš DWG se nikada ne menja. Oštećene datoteke ili verzije koje čitač ne obrađuje se odbijaju uz poruku. |
| PDF | Uvozi jednu stranicu: kao podlogu ili kao objekte ([PDF podloge](topic:pdf-underlay)) | Da, štampanjem | Vektorski PDF lista, ili modela u razmeri. |

Svaki crtež koji otvorite (ili počnete sa {{ui:Novo}}) dobija svoj jezičak iznad područja crtanja; novi crtež koji niko još nije dirao koristi se umesto dodavanja jezička. Kliknite jezičak da biste prešli na njega, {{ui:×}} da ga zatvorite (CadCraft pita pre toga ako ima nesačuvanih izmena), ili poređajte otvorene crteže jedan pored drugog: vidi [Podelite ekran](topic:split-screen).

## Otvaranje crteža

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Otvori}}, ili ukucajte `OPEN`, pa izaberite datoteku.
- Ili prevucite datoteku `.dwg` ili `.dxf` na područje crtanja.

Datoteka se čita u vašem pregledaču. Ne šalje se nigde. Istorija prijavljuje koliko je objekata i slojeva uneto i koliko je to trajalo, a odeljak {{ui:Crtež}} u levom panelu prikazuje format, na primer „DWG 2018 (AC1032)“.

Čitač DWG-a je deo CadCraft-a i učitava se uz prvi DWG koji otvorite nakon učitavanja stranice (nekoliko stotina KB), pa nema posebnog preuzimanja koje treba čekati. Čita datoteku u pozadini, pa stranica i dalje reaguje dok se velik DWG otvara.

DXF se čita u delovima od oko 4 MB, nikada kao jedan blok teksta, pa se DXF veći od 512 MB takođe otvara. Ograničava ga memorija vašeg računara: dok se DXF otvara, očekujte da troši oko 16 do 20 puta veličinu datoteke (DXF od 100 MB sa oko 690,000 objekata trošio je oko 1.5 GB u našem testu).

### Šta ulazi

- Linije, lukovi, krugovi, polilinije (sa lučnim segmentima), elipse, tačke, tekst i višeredni tekst, čvrsta tela, šrafure (standardni obrasci nacrtani kao svoje linije, ostali kao ravan ton), reference blokova sa njihovim atributima (vrednosti koje možete menjati; vidi [Atributi bloka](topic:attributes)), kote i listovi sa njihovim prozorima pogleda.
- Splajnovi ulaze kao splajnovi (stepen, kontrolne tačke, čvorovi, težine, tačke prilagođavanja); vidi [Splajnovi i polilinije](topic:splines).
- Višestruke oznake sa jednom linijom pokazivača i tekstom ulaze kao CadCraft višestruke oznake koje možete menjati (vidi {{cmd:MLEADER}}). Ostale (sa blokom, više linija pokazivača ili krivim linijama) crtaju se kako ih je nacrtao drugi program i pomeraju se kao jedno; istorija kaže koliko ih je.
- Slike se prikazuju kao okvir sa nazivom datoteke slike dok ne date CadCraft-u datoteku pomoću {{cmd:IMAGE}}: vidi [Slike u crtežu](topic:pictures#show-the-pictures-a-dwg-uses). Maskiranja (wipeouts) se prikazuju kao njihov okvir, a ono što je ispod njih ostaje vidljivo.
- Tabele u DWG-u ulaze onako kako ih je nacrtao drugi program.
- 3D površine u prostoru modela ulaze na kartici {{ui:3D}}, a ne kao 2D objekti; isto važi za one unutar blokova, po jednom za svaku referencu bloka u modelu. U bloku i na listu takođe se crtaju ravno, kao obrisi. Vidi [Model u 3D](topic:3d-solids).
- Slojevi zadržavaju svoju boju, uključen, zamrznut, zaključan i podešavanja štampanja. DEFPOINTS se nikada ne štampa.
- Kote postaju stvarne, izmenjive CadCraft kote tamo gde se njihove tačke mogu pročitati. Prvo se prikazuju tačno kako ih je nacrtao drugi program; čim promenite jednu, CadCraft je ponovo crta u svom stilu.
- Svaki raspored postaje karticu lista. U drugom programu svaki raspored ima skriveni prvi prozor pogleda koji je sam list; CadCraft ga izostavlja.

### Šta još ne ulazi

Sve što CadCraft ne može da nacrta se broji, ne pogađa. Okvir „O ovoj datoteci“ u levom panelu navodi to kao „Još nije prikazano:“, zatim svaku vrstu objekta i koliko ih ima. Tipični slučajevi su tabele u DXF-u, mreže i 3D čvrsta tela unutar blokova. 3D čvrsta tela, regioni i tela u prostoru modela prikazuju se na kartici 3D (vidi [Model u 3D](topic:3d-solids#solids-from-other-programs)). Prozori pogleda zakrenuti u datoteci prikazuju se zakrenuti, kao i tamo, i zadržavaju zakret kada sačuvate; tako je i sa trenutnim UCS-om, imenovanim UCS-ovima i zakrenutim prikazom.

Tekst se crta jednim fontom u stilu Helvetice. Oznaka koja staje u jedan red u užem fontu originalnog programa može se prelomiti u dva reda u CadCraft-u.

## Čuvanje

Postoje tri načina čuvanja. Svaki preuzima kopiju.

- **Sačuvaj**: pritisnite {{key:Mod+S}}, kliknite {{ui:Sačuvaj}}, ili ukucajte `SAVE` (takođe `QSAVE`). Čuva u formatu crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. DWG zadržava verziju u kojoj je došao (datoteka iz 2018 čuva se kao 2018). Novi crtež koristi format i DWG verziju koju ste poslednji put izabrali u „Sačuvaj kao“ u ovom pregledaču; ako niste nikada izabrali, DWG u formatu AutoCAD 2000.
- **Sačuvaj kao**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Sačuvaj kao}}, ili ukucajte `SAVEAS`. Dijalog {{ui:Sačuvaj kopiju kao}} nudi {{ui:DWG}}, sa listom {{ui:Verzija}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, svaki sa nazivom datoteke koji će dobiti, a trenutni format i verzija crteža već su izabrani. Kliknite {{ui:Sačuvaj}} da preuzmete, ili {{ui:Otkaži}} (ili {{key:Esc}}) da ne sačuvate ništa; istorija tada kaže „Nije sačuvano.“ Ono što izaberete ostaje: {{key:Mod+S}} to koristi za ovaj crtež od tada, a novi crteži u ovom pregledaču počinju sa tim.
- **DXFOUT**: ukucajte `DXFOUT`. Uvek preuzima kopiju DXF R12, a sledeće {{key:Mod+S}} i dalje čuva u sopstvenom formatu crteža.

Pregledač preuzima `<drawing name>.dwg` ili `<drawing name>.dxf`. Svako čuvanje je **novo preuzimanje**; datoteka koju ste otvorili se nikada ne prepisuje niti menja. Istorija to potvrđuje, na primer „Sačuvana kopija kao Plan.dwg (DWG (AutoCAD 2018)). Vaš original Plan.dxf nije promenjen.“ Za DXF piše „(DXF R12, otvara se u bilo kom CAD programu)“. Redovi ispod nje navode sve što se promenilo na putu.

Kada CadCraft radi u desktop aplikaciji, čuvanje radi kao u drugim desktop programima: {{key:Mod+S}} upisuje crtež nazad u datoteku koju ste otvorili, u njenom formatu i verziji, a istorija kaže gde je sačuvan. {{ui:Sačuvaj kao}} i izvozi prikazuju dijalog za čuvanje sistema, a datoteka `.dwg`, `.dxf` ili `.ccsheets` na koju dvaput kliknete otvara se u CadCraft-u.

Za PDF, umesto toga štampajte (vidi dole).

## Šta DWG čuva i menja

CadCraft piše DWG sam, u vašem pregledaču, istom bibliotekom DWG-a kojom i čita. Izaberite verziju u „Sačuvaj kao“: format AutoCAD 2000 (verzija datoteke AC1015) otvara se u većini programa, i u starijima; noviji formati (2004, AC1018, do 2018, AC1032) takođe čuvaju prave boje. Ništa se ne šalje, a čuvanje DWG-a radi van mreže.

Svaka verzija se proverava čitanjem sačuvanih datoteka pomoću čitača DWG-a tri druga programa i samog CadCraft-a. CadCraft DWG još nije otvoren u samom AutoCAD-u.

### Šta DWG čuva

- Linije, lukovi, krugovi, elipse, tačke i polilinije sa njihovim lučnim segmentima.
- Jednoredni tekst sa svojim poravnanjem i faktorom širine.
- Višeredni i prelomljeni tekst, kao višeredni tekst. Drugi program ga ponovo prelama iz iste širine.
- Boje objekata: po sloju, po bloku, 255 standardnih boja, i prave boje u formatu 2004 i kasnijem.
- Slojevi sa svojom bojom, tipom linije, debljinom linije i podešavanjima uključen, zamrznut, zaključan i štampanje; sopstveni tipovi linija, debljine i razmere tipova linija objekata, obrasci tipova linija i razmera tipa linije crteža.
- Jedinice crteža i format dužine (decimalni, stope i inči, razlomci…).
- Blokovi sa osnovnom tačkom i definicijama atributa, uključujući nevidljive, konstantne i unapred podešene.
- Reference blokova sa svojom razmerom, rotacijom i vrednostima atributa.
- Puna popuna i šrafure sa obrascem, razmerom i uglom (sopstvene linije obrasca, pa drugi programi crtaju iste linije koje crta CadCraft).
- Kote, kao prave kote: drugi programi ih ponovo mere kada se rastegnu. Svaka zadržava svoja podešavanja (visina teksta, veličina strelice, decimale, format dužine) i svoj tekst, i nosi nacrtanu kopiju koju ima svaka DWG kota.
- Listovi (rasporedi): svaki list sa svojom veličinom papira i jedinicama, šta je na njemu nacrtano, i svojim prozorima pogleda sa njihovim prikazom i razmerom.
- Imenovani prikazi.
- Višestruke oznake, kao višestruke oznake.
- Nazivi slojeva i blokova kako ste ih ukucali, velikim i malim slovima. (DXF R12 ih upisuje velikim slovima.)

### Šta DWG menja

Svaka od ovih stavki se navodi u istoriji nakon čuvanja, kada se odnosi na vaš crtež.

| U CadCraft-u | U sačuvanom DWG-u |
|---|---|
| Prave boje (izabrane pomoću birača boja), u formatu 2000 | Najbliža standardna boja: format 2000 ima samo 255. Sačuvajte kao 2004 ili kasnije da ih zadržite |
| Imenovani prikazi lista | Prikazi u prostoru papira: DWG ne kaže koji list, pa kada CadCraft ponovo otvori datoteku, pripadaju prvom listu |
| Višeredni tekst sa faktorom širine | Normalna širina slova: u DWG-u faktor širine važi samo za jednoredni tekst |
| Nazivi slojeva ili blokova sa znakovima koje DWG ne dozvoljava | Promenjeno: naziv iz povezanog crteža kao `Base\|Walls` postaje `Base$0$Walls` (način na koji vezivanje povezanog crteža daje nazive), a ostali znakovi postaju `_` |

### Zašto R12, i šta se pretvara

Kada čuvate kao DXF, CadCraft piše DXF R12, verziju koju može da otvori svaki CAD program. Starija je od nekih funkcija, pa se neke stvari upisuju u jednostavnijem obliku:

| U CadCraft-u | U sačuvanoj R12 datoteci |
|---|---|
| Višeredni tekst | Jedan tekstualni objekat po redu |
| Elipse | Polilinije koje prate elipsu |
| Šrafure (iz otvorenih datoteka) | Samo njihovi obrisi |
| Prave boje (izabrane pomoću birača boja) | Najbliža standardna boja |
| Debljine linija i sopstvene razmere tipova linija objekata | Izostavljeno: R12 nema ni jedno ni drugo (tipovi linija se čuvaju) |
| Nazivi slojeva i blokova | Upisuju se velikim slovima; razmaci i drugi znakovi postaju `_`, a nazivi se skraćuju na 31 znak („Title block“ postaje `TITLE_BLOCK`) |
| Slojevi podešeni da se ne štampaju | Drugi programi će ih štampati (CadCraft pamti podešavanje kada crtež ima list) |
| Kote | Prave kote sa sopstvenim nacrtanim blokom, pa ih drugi programi prikazuju kako ih vi vidite |
| Višestruke oznake | Linije, strelica i tekst koje crtaju |
| Imenovani prikazi | Zadržani, sa nazivima velikim slovima; prikazi lista se vraćaju na prvi list |
| Više listova | Prvi list je prostor papira koji svaki program prikazuje; ostali se čuvaju kao blokovi nazvani `CCLAYOUT_1`, `CCLAYOUT_2` … koje CadCraft pretvara nazad u listove kada otvori datoteku |

Istorija navodi svaku od ovih stavki koja se odnosila na vaš crtež.

:::tip
Da biste nastavili rad na crtežu tokom nekoliko dana, sačuvajte kao DXF i sledeći put otvorite taj DXF. Sve što CadCraft može da nacrta preživi taj ciklus, uključujući kote, blokove i sve listove.
:::

## Povezani crteži (spoljne reference)

{{cmd:XATTACH}} (`XA`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Poveži crtež (xref)}}) povezuje drugi DWG ili DXF: izaberite datoteku, pa kliknite gde ide ({{key:Enter}} ga stavlja na 0,0). Ulazi kao jedan blok nazvan po datoteci, u pravoj razmeri kada dva crteža imaju različite jedinice. Njegovi slojevi i blokovi zadržavaju svoje nazive uz naziv veze ispred: `Plan|Walls`, `Plan|Door`. Tako se nikada ne mešaju sa vašima: uključujte i isključujte, zamrzavajte ili zaključavajte povezane slojeve kao svoje. Veza je samo za čitanje: promenite drugi crtež i ponovo ga učitajte. Ono što podesite na slojevima veze (boja, tip linije, debljina, uključen ili isključen, zamrznut, zaključan, štampanje) zadržava se kada je ponovo učitate, kada sačuvate crtež kao DWG dok je veza i dalje veza, i kada drugi crtež poveže ovaj.

{{cmd:XREF}} (`XR`): `?` navodi veze (učitane ili ne, koja datoteka, koliko referenci); `A` povezuje; `R` ponovo učitava jednu iz njene datoteke (ponovo izaberite datoteku: pregledač sam ne može da pristupi vašim fasciklama); `B` vezuje jednu (postaje obični blokovi i slojevi nazvani `Plan$0$Walls`); `D` odvaja jednu (njene reference i slojevi nestaju). Svaka je jedan korak opozivanja.

{{cmd:XCLIP}} (`XC`) isecaju reference blokova i veze: izaberite ih, `N` za novu granicu, zatim `R` i dva ugla ili `P` i tačke poligona ({{key:Enter}} ga zatvara); `D` uklanja isečak. Prikazuje se i štampa se samo ono što je unutar granice, a isečak se pomera sa referencom. DWG i DXF 2000 čuvaju isečke; DXF R12 čuva referencu celu i to kaže. Kada vezujete vezu koja ima isečene reference, {{cmd:XREF}} `B` pita: `A` vezuje sve, `C` zadržava samo isečeni deo svake reference (linije i lukovi se seku na granici; tekstovi i ugnježđeni blokovi ostaju ako je njihova tačka umetanja unutra).

Crtež koji otvorite može povezivati datoteke koje CadCraft ne vidi: kaže koliko ih nije učitano. Koristite {{cmd:XREF}}, `R` i izaberite svaku datoteku da ih vidite.

Kada čuvate, učitana veza se **vezuje** u datoteku (drugi programi vide obične blokove i slojeve nazvane `Plan$0$…`), a istorija to kaže. Veza koja nije učitana ostaje veza na svoju datoteku, u DWG-u i DXF-u.

## Otvaranje u 3D

{{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}} ({{cmd:OPENIN3D}}) otvara crtež u aplikaciji za 3D modelovanje u novom jezičku, kao DWG, bez slanja. Izmene napravljene tamo ostaju tamo; sačuvajte ih tamo. Stavka menija se prikazuje samo tamo gde ta aplikacija može da primi predati crtež.

## Štampanje PDF-a

Pritisnite {{key:Mod+P}}, kliknite {{ui:Štampaj}}, ili ukucajte `PLOT`. PDF se pravi u pregledaču i preuzima se, ili otvara u novom jezičku za štampanje. Vidi [Štampanje u PDF](topic:plot-pdf).

## Gde završavaju datoteke

Svako čuvanje i svako štampanje je preuzimanje, pa datoteke završavaju gde pregledač stavlja preuzimanja: obično u fasciklu Preuzimanja. Da biste svaki put birali fasciklu, promenite podešavanje preuzimanja u pregledaču; [Pregledači i računari](common:browsers) pokazuje gde.

Ništa što otvorite ili sačuvate ne šalje se nama. Vidi [Gde idu vaše datoteke](common:your-files).

## PLN i PLA projektne datoteke

CadCraft otvara DWG i DXF crteže, a ne Archicad-ove sopstvene datoteke (`.pln`, `.pla`, `.tpl`, `.bpn`). Otvaranje jedne vam kaže šta je. U Archicad-u sačuvajte prikaze ili listove koji su vam potrebni kao DWG i otvorite ih ovde, ili izvezite model kao IFC i otvorite ga u BimCraft-u. Kada BimCraft može da preuzme datoteku, CadCraft nudi {{ui:Otvori u BimCraft-u}}.

## Ako se stranica zatvori pre čuvanja

CadCraft čuva kopiju svakog crteža koji promenite, samo u ovom pregledaču, trenutak nakon što prestanete da uređujete. Ako se jezičak zatvori, pregledač se zaustavi ili računar ponovo pokrene pre nego što sačuvate, CadCraft pita **Oporaviti vaš rad?** sledeći put kada se pokrene: {{ui:Oporavi}} ponovo otvara crtež, nesačuvan, u sopstvenom jezičku. Čuvanje crteža uklanja njegovu kopiju. Vidi [Oporavak vašeg rada](common:recover).

## Na mreži i van mreže

Otvaranje, crtanje, čuvanje (DWG i DXF) i štampanje sve se odvija na vašem računaru, pa rade bez veze kada se CadCraft učita.

Da biste koristili CadCraft bez ikakve veze, kliknite {{ui:Sačuvaj za rad van mreže}} na traci na vrhu dok ste na mreži. Oznaka broji („Čuvanje 40 od 212“) i završava se sa „Spremno za rad van mreže“. Sačuvana kopija uključuje čitač DWG-a, ukupno oko 5 MB, pa se **DWG datoteke takođe otvaraju van mreže** kada se sačuvaju. Ponovo kliknite dugme za {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. „Nije moguće sačuvati“ znači da neke datoteke nisu preuzete: proverite vezu i kliknite da pokušate ponovo. „Rad van mreže nije dostupan“ znači da ovaj prozor pregledača ne može da čuva kopiju (privatni prozori i neki upravljani računari).

Bez sačuvane kopije, čitač DWG-a se preuzima kada prvi put otvorite DWG nakon učitavanja stranice, pa otvaranje DWG-a van mreže može da ne uspe; DXF datoteke nikada to ne zahtevaju. Ne osvežavajte stranicu van mreže osim ako CadCraft nije sačuvan.

Vidi [Rad van mreže](common:offline) za detalje.

:::offline
Trenutno ste van mreže. Crteži se čuvaju kao DWG ili DXF i štampaju normalno, a DXF datoteke se otvaraju. DWG datoteke se otvaraju ako CadCraft prikazuje „Spremno za rad van mreže“, ili ako je čitač DWG-a već učitan u ovom jezičku.
:::

## Ograničenja u datotekama

Ograničenja i parametri (vidi [Ograničavanje crteža](topic:constraints)) čuvaju se i u DWG-u i u DXF-u. Svaki objekat sa ograničenjem nosi malu CadCraft belešku (prošireni podaci), a nekorišćeni blok nazvan `CADCRAFT_PARAMETRIC` drži ograničenja i tabelu parametara. Drugi programi otvaraju crtež normalno i ignorišu oba; mogu obrisati nekorišćeni blok kada ga očiste. Beleške se odnose na objekte po njihovom sopstvenom ključu, a ne po ručkama datoteke, pa program koji prenumeriše ručke ne narušava ih. Kada je drugi program obrisao ili promenio objekat sa ograničenjem, CadCraft odbacuje ograničenja na njemu kada otvori datoteku i kaže koliko ih je. Datoteka bez njih otvara se bez ograničenja.

Skica izvezena iz alata za modelovanje delova (`.json`) takođe se otvara: vidi [Prenos skica u i iz drugih alata za delove](topic:solidworks-sketches).

## Još nije urađeno

- Višestruke oznake kao objekti višestruke oznake u sačuvanom DXF-u (R12 ih nema: čuvaju se kao ono što crtaju).
- Slike u sačuvanom DXF-u (čuvaju se kao njihovi okviri; DWG ih čuva kao slike), i maskiranja koja skrivaju ono što je ispod.
- Čuvanje DXF verzije novije od 2000.
- Čuvanje u oblaku i sinhronizacija između računara.

Vidi [Još nije napravljeno](topic:not-built-yet) za punu listu.
