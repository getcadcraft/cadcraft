---
title: Datoteke: šta se otvara, šta se snima
summary: Formati koje CadCraft otvara, snima i izvozi, šta se čuva ili pretvara, i gdje idu datoteke.
keywords: xclip, isječak, granica isječka, veži isječeno, dwg, dxf, pdf, r12, otvori, snimi, izvoz, uvoz, formati, pretvorba, preuzimanje, saveas, dxfout, spasi kao, dwg snimanje, format, qsave, xref, xattach, povezani crtež, vanjska referenca, veži, ponovo učitaj, odvoji
from: b8c5778d
---

## Pregled

| Format | Otvaranje | Snimanje | Napomene |
|---|---|---|---|
| DXF (tekstualni ili binarni, bilo koja verzija) | Da | Da, kao DXF R12, DXF 2000 ili DXF 2000 (binarni) | Binarni DXF se otvara kao tekstualni i snima se natrag kao binarni. |
| DWG | Da | Da, kao DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018) | Čita i piše vlastita DWG biblioteka programa CadCraft (datoteke AutoCAD R13 do 2018). Vaš DWG nikad nije promijenjen. Oštećene datoteke ili verzije koje čitač ne podržava odbijaju se uz poruku. |
| PDF | Uvozi stranicu: kao podlogu ili kao objekte ([PDF podloge](topic:pdf-underlay)) | Da, štampanjem | Vektorski PDF lista, ili modela u razmjeri. |

Svaki crtež koji otvorite (ili pokrenete s {{ui:Nova}}) dobija svoj jezičak iznad područja crtanja; novi crtež koji niko još nije dirao koristi se umjesto dodavanja jezička. Kliknite jezičak da se prebacite, {{ui:×}} da ga zatvorite (CadCraft prije pita ako ima nesnimljenih promjena), ili poređajte otvorene crteže jedan pored drugog: pogledajte [Podijeli ekran](topic:split-screen).

## Otvaranje crteža

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Otvori}}, ili upišite `OPEN`, pa izaberite datoteku.
- Ili prevucite datoteku `.dwg` ili `.dxf` na područje crtanja.

Datoteka se čita unutar vašeg pregledača. Ne šalje se nigdje. Historija navodi koliko je objekata i slojeva uvezeno i koliko je to trajalo, a odjeljak {{ui:Crtež}} u lijevom panelu prikazuje format, na primjer "DWG 2018 (AC1032)".

DWG čitač je dio CadCrafta i učitava se uz prvi DWG koji otvorite nakon učitavanja stranice (nekoliko stotina KB), tako da nema posebnog preuzimanja na koje treba čekati. Čita datoteku u pozadini, pa stranica i dalje reaguje dok se velik DWG otvara.

DXF se čita u dijelovima od oko 4 MB, nikad kao jedan blok teksta, pa se DXF veći od 512 MB također otvara. Ograničenje je memorija vašeg računara: dok se DXF otvara, očekujte da troši otprilike 16 do 20 puta veličinu datoteke (DXF od 100 MB s oko 690,000 objekata koristio je oko 1.5 GB u našem testu).

### Šta ulazi

- Linije, lukovi, krugovi, polilinije (s lučnim segmentima), elipse, tačke, tekst i višelinijski tekst, solidi, šrafure (standardni obrasci nacrtani kao svoje linije, ostali kao ravan ton), reference blokova s njihovim atributima (vrijednosti koje možete uređivati; pogledajte [Atributi bloka](topic:attributes)), kote, i listovi sa svojim prozorima pregleda.
- Splajnovi ulaze kao splajnovi (stepen, kontrolne tačke, čvorovi, težine, tačke prilagođavanja); pogledajte [Splajnovi i polilinije](topic:splines).
- Višestruke vodeće oznake s jednom vodećom linijom i tekstom ulaze kao CadCraft višestruke vodeće oznake koje možete uređivati (pogledajte {{cmd:MLEADER}}). Ostale (s blokom, nekoliko vodećih linija ili zakrivljenim linijama) crtaju se kako ih je nacrtao drugi program i pomjeraju se kao cjelina; historija kaže koliko ih je.
- Slike (pictures) prikazuju se kao okvir s imenom datoteke slike dok ne dodijelite CadCraftu datoteku s {{cmd:IMAGE}}: pogledajte [Slike u crtežu](topic:pictures#show-the-pictures-a-dwg-uses). Maske (wipeout) prikazuju se kao svoj okvir, a ono što je ispod ostaje vidljivo.
- Tabele u DWG-u ulaze onako kako ih je nacrtao drugi program.
- 3D površine u modelskom prostoru ulaze na kartici {{ui:3D}}, a ne kao 2D objekti; tako i one unutar blokova, jednom po referenci bloka u modelu. U bloku i na listu crtaju se i ravno, kao obrisi. Pogledajte [Model u 3D](topic:3d-solids).
- Slojevi zadržavaju boju, uključeno, zamrznuto, zaključano i postavke štampanja. DEFPOINTS se nikad ne štampa.
- Kote postaju stvarne, izmjenjive CadCraft kote tamo gdje se njihove tačke mogu pročitati. Prvo se prikazuju tačno kako ih je nacrtao drugi program; čim promijenite jednu, CadCraft je ponovo crta u svom stilu.
- Svaki raspored postaje jezičak lista. U drugom programu svaki raspored ima skriveni prvi prozor pregleda koji je sam list; CadCraft ga izostavlja.

### Šta još ne ulazi

Sve što CadCraft ne može nacrtati se broji, a ne pogađa. Okvir "O ovoj datoteci" u lijevom panelu navodi to kao "Još nije prikazano:", uz svaku vrstu objekta i koliko ih ima. Tipični slučajevi su tabele u DXF-u, mreže i 3D solidi unutar blokova. 3D solidi, regioni i tijela u modelskom prostoru prikazuju se na kartici 3D (pogledajte [Model u 3D](topic:3d-solids#solids-from-other-programs)). Prozori pregleda koji su u datoteci zakrenuti prikazuju se zakrenuti, kao i tamo, i zadržavaju zakretanje kad snimite; isto tako trenutni UCS, imenovani UCS-ovi i zakrenuti prikaz.

Tekst se crta jednim fontom u stilu Helvetica. Oznaka koja stane u jedan red u užem fontu originalnog programa može preći u dva reda u CadCraftu.

## Snimanje

Postoje tri načina snimanja. Svaki preuzima kopiju.

- **Spasi**: pritisnite {{key:Mod+S}}, kliknite {{ui:Spasi}}, ili upišite `SAVE` (također `QSAVE`). Snima u formatu crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. DWG zadržava verziju u kojoj je došao (datoteka 2018 snima se kao 2018). Novi crtež koristi format i DWG verziju koje ste zadnje izabrali pod {{ui:Spasi kao}} u ovom pregledaču; ako niste nikad birali, DWG u formatu AutoCAD 2000.
- **Spasi kao**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Spasi kao}}, ili upišite `SAVEAS`. Dijalog {{ui:Spasi kopiju kao}} nudi {{ui:DWG}}, listu {{ui:Verzija}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, svaki s imenom datoteke koje će dati, a s trenutnim formatom i verzijom crteža već izabranim. Kliknite {{ui:Spasi}} da preuzmete, ili {{ui:Otkaži}} (ili {{key:Esc}}) da ne snimite ništa; historija tada kaže "Nije spašeno." Izbor koji napravite ostaje: {{key:Mod+S}} koristi ga za ovaj crtež od tada, a novi crteži u ovom pregledaču počinju s njim.
- **DXFOUT**: upišite `DXFOUT`. Uvijek preuzme kopiju DXF R12, a sljedeće {{key:Mod+S}} i dalje snima u vlastitom formatu crteža.

Pregledač preuzima `<drawing name>.dwg` ili `<drawing name>.dxf`. Svako snimanje je **novo preuzimanje**; datoteka koju ste otvorili nikad se ne prepisuje niti mijenja. Historija to potvrđuje, na primjer: "Spašena kopija kao Plan.dwg (DWG (AutoCAD 2018)). Vaš original Plan.dxf nije promijenjen." Za DXF piše "(DXF R12, otvara se u bilo kojem CAD programu)". Redovi ispod navode sve što se promijenilo usput.

Kada CadCraft radi u desktop aplikaciji, snimanje radi kao u drugim desktop programima: {{key:Mod+S}} upisuje crtež natrag u datoteku koju ste otvorili, u njenom formatu i verziji, a historija kaže gdje je snimljen. {{ui:Spasi kao}} i izvozi prikazuju dijalog sistema za snimanje, a `.dwg`, `.dxf` ili `.ccsheets` datoteka koju dvaput kliknete otvara se u CadCraftu.

Za PDF, štampajte umjesto toga (pogledajte dolje).

## Šta DWG čuva i mijenja

CadCraft piše DWG sam, unutar vašeg pregledača, istom DWG bibliotekom kojom i čita. Izaberite verziju pod {{ui:Spasi kao}}: format AutoCAD 2000 (verzija datoteke AC1015) otvara se u najviše programa, uključujući stare; noviji formati (2004, AC1018, do 2018, AC1032) također čuvaju prave boje. Ništa se ne šalje, a snimanje DWG-a radi van mreže.

Svaka verzija se provjerava tako što se snimljene datoteke ponovo čitaju DWG čitačima tri druga programa i samim CadCraftom. DWG iz CadCrafta još nije otvoren u samom AutoCADu.

### Šta DWG čuva

- Linije, lukovi, krugovi, elipse, tačke i polilinije s njihovim lučnim segmentima.
- Jednolinijski tekst s poravnanjem i faktorom širine.
- Višelinijski i prelomljeni tekst, kao višelinijski tekst. Drugi program ga ponovo prelama iz iste širine.
- Boje objekata: po sloju, po bloku, 255 standardnih boja, i prave boje u formatu 2004 i kasnijim.
- Slojevi s bojom, vrstom linije, debljinom linije i postavkama uključeno, zamrznuto, zaključano i štampanje; objektne vrste linija, debljine linija i razmjere vrsta linija, obrasci vrsta linija i razmjera vrsta linija crteža.
- Jedinice crteža i format dužine (decimalni, stope i inči, razlomci…).
- Blokovi s njihovom baznom tačkom i definicijama atributa, uključujući nevidljive, konstantne i unaprijed postavljene.
- Reference blokova s njihovom razmjerom, rotacijom i vrijednostima atributa.
- Pune popune, i šrafure s obrascem, razmjerom i uglom (linije samog obrasca, pa drugi programi crtaju iste linije kao CadCraft).
- Kote, kao stvarne kote: drugi programi ih ponovo mjere kad se rastegnu. Svaka zadržava svoje postavke (visinu teksta, veličinu strelice, decimale, format dužine) i svoj tekst, i nosi nacrtanu kopiju koju svaka DWG kota ima.
- Listovi (layouts): svaki list s veličinom papira i jedinicama, što je nacrtano na njemu, i njegovi prozori pregleda s pogledom i razmjerom.
- Imenovani pogledi.
- Višestruke vodeće oznake, kao višestruke vodeće oznake.
- Imena slojeva i blokova kako ste ih upisali, velikim i malim slovima. (DXF R12 ih piše velikim slovima.)

### Šta DWG mijenja

Svako od ovoga se navodi u historiji nakon snimanja, kad se odnosi na vaš crtež.

| U CadCraftu | U snimljenom DWG-u |
|---|---|
| Prave boje (izabrane pipetom), u formatu 2000 | Najbliža standardna boja: format 2000 ima samo 255. Snimite kao 2004 ili kasnije da ih zadržite |
| Imenovani pogledi lista | Pogledi u prostoru papira: DWG ne kaže koji list, pa kad CadCraft ponovo otvori datoteku, pripadaju prvom listu |
| Višelinijski tekst s faktorom širine | Normalna širina slova: u DWG-u faktor širine važi samo za jednolinijski tekst |
| Imena slojeva ili blokova sa znakovima koje DWG ne dozvoljava | Promijenjeno: ime iz povezanog crteža kao `Base\|Walls` postaje `Base$0$Walls` (način na koji vezivanje povezanog crteža imenuje), a ostali znakovi postaju `_` |

### Zašto R12, i šta se pretvara

Kada snimite kao DXF, CadCraft piše DXF R12, verziju koju može otvoriti svaki CAD program. Starija je od nekih mogućnosti, pa se neke stvari pišu jednostavnije:

| U CadCraftu | U snimljenoj R12 datoteci |
|---|---|
| Višelinijski tekst | Jedan tekstualni objekat po redu |
| Elipse | Polilinije koje prate elipsu |
| Šrafure (iz otvorenih datoteka) | Samo njihovi obrisi |
| Prave boje (izabrane pipetom) | Najbliža standardna boja |
| Debljine linija i objektne razmjere vrsta linija | Izostavljeno: R12 nema ni jedno ni drugo (vrste linija se čuvaju) |
| Imena slojeva i blokova | Pišu se velikim slovima; razmaci i drugi znakovi postaju `_`, a imena se skraćuju na 31 znak (`"Title block"` postaje `TITLE_BLOCK`) |
| Slojevi postavljeni da se ne štampaju | Drugi programi će ih štampati (CadCraft pamti postavku kad crtež ima list) |
| Kote | Stvarne kote sa vlastitim nacrtanim blokom, pa ih drugi programi prikazuju kako ih vidite |
| Višestruke vodeće oznake | Linije, strelica i tekst koje crtaju |
| Imenovani pogledi | Sačuvani, s imenima velikim slovima; pogledi lista se vraćaju na prvi list |
| Nekoliko listova | Prvi list je prostor papira koji svaki program prikazuje; ostali se čuvaju kao blokovi imenovani `CCLAYOUT_1`, `CCLAYOUT_2` … koje CadCraft pretvara natrag u listove kad otvori datoteku |

Historija navodi svaku od ovih stvari koja se odnosila na vaš crtež.

:::tip
Da radite na crtežu više dana, snimite kao DXF i sljedeći put otvorite taj DXF. Sve što CadCraft može nacrtati prolazi kroz taj ciklus neoštećeno, uključujući kote, blokove i sve listove.
:::

## Povezani crteži (vanjske reference)

{{cmd:XATTACH}} (`XA`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Poveži crtež (xref)}}) povezuje drugi DWG ili DXF: izaberite datoteku, pa kliknite gdje ide ({{key:Enter}} ga postavlja na 0,0). Ulazi kao jedan blok imenovan po datoteci, u pravoj razmjeri kad dva crteža imaju različite jedinice. Njegovi slojevi i blokovi zadržavaju imena s imenom veze ispred: `Plan|Walls`, `Plan|Door`. Tako se nikad ne miješaju s vašim: uključujte i isključujte, zamrzavajte ili zaključavajte povezane slojeve kao i svoje. Veza je samo za čitanje: promijenite drugi crtež i ponovo ga učitajte. Ono što postavite na slojeve veze (boja, vrsta linije, debljina, uključeno/isključeno, zamrznuto, zaključano, štampanje) zadržava se kad ponovo učitate, kad snimite crtež kao DWG dok je veza još veza, i kad drugi crtež poveže ovaj.

{{cmd:XREF}} (`XR`): `?` navodi veze (učitane ili ne, koja datoteka, koliko referenci); `A` dodaje; `R` ponovo učitava jednu iz njene datoteke (izaberite datoteku ponovo: pregledač ne može sam pristupiti vašim mapama); `B` veže jednu (postaje obični blokovi i slojevi imenovani `Plan$0$Walls`); `D` odvaja jednu (njene reference i slojevi nestaju). Svaka je jedan korak poništavanja.

{{cmd:XCLIP}} (`XC`) isječe reference blokova i veze: označite ih, `N` za novu granicu, zatim `R` i dva ugla ili `P` i tačke poligona ({{key:Enter}} ga zatvara); `D` uklanja isječak. Vidljivo je i štampa se samo ono što je unutar, a isječak se pomjera s referencom. DWG i DXF 2000 zadržavaju isječke; DXF R12 snima cijelu referencu i to kaže. Kad vežete vezu koja ima isječene reference, {{cmd:XREF}} `B` pita: `A` veže sve, `C` zadržava samo isječeni dio svake reference (linije i lukovi se sijeku na granici; tekstovi i ugnježđeni blokovi ostaju ako je njihova tačka umetanja unutra).

Crtež koji otvorite može povezivati datoteke koje CadCraft ne vidi: kaže koliko nije učitano. Upotrijebite {{cmd:XREF}}, `R` i izaberite svaku datoteku da ih vidite.

Kad snimite, učitana veza se **veže** u datoteku (drugi programi vide obične blokove i slojeve imenovane `Plan$0$…`), a historija to kaže. Veza koja nije učitana ostaje veza na svoju datoteku, u DWG-u i DXF-u.

## Otvaranje u 3D

{{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}} ({{cmd:OPENIN3D}}) otvara crtež u aplikaciji za 3D modeliranje u novom jezičku, kao DWG, bez slanja. Izmjene napravljene tamo ostaju tamo; snimite ih tamo. Stavka menija se prikazuje samo tamo gdje ta aplikacija može preuzeti predani crtež.

## Štampanje PDF-a

Pritisnite {{key:Mod+P}}, kliknite {{ui:Ispiši}} ili upišite `PLOT`. PDF se pravi unutar pregledača i preuzima se, ili se otvara u novom jezičku za štampanje. Pogledajte [Štampaj u PDF](topic:plot-pdf).

## Gdje idu datoteke

Svako snimanje i svako štampanje je preuzimanje, pa datoteke završe gdje vaš pregledač stavlja preuzimanja: obično u mapu Preuzimanja. Da birate mapu svaki put, promijenite postavku preuzimanja u svom pregledaču; [Pregledači i računari](common:browsers) pokazuje gdje.

Ništa što otvorite ili snimite ne šalje se nama. Pogledajte [Gdje idu vaše datoteke](common:your-files).

## PLN i PLA datoteke projekta

CadCraft otvara DWG i DXF crteže, ne Archicadove vlastite datoteke (`.pln`, `.pla`, `.tpl`, `.bpn`). Kad otvorite jednu, dobijete poruku šta je. U Archicadu snimite poglede ili listove koje trebate kao DWG i otvorite ih ovdje, ili izvezite model kao IFC i otvorite ga u BimCraftu. Gdje BimCraft može preuzeti datoteku, CadCraft nudi {{ui:Otvori u BimCraftu}}.

## Ako se stranica zatvori prije snimanja

CadCraft čuva kopiju svakog crteža koji promijenite, samo u ovom pregledaču, ubrzo nakon što prestanete uređivati. Ako se jezičak zatvori, pregledač stane ili računar ponovo pokrene prije nego snimite, CadCraft pita **Oporaviti vaš rad?** sljedeći put kad se pokrene: {{ui:Oporavi}} ponovo otvara crtež, nesnimljen, u vlastitom jezičku. Snimanje crteža uklanja njegovu kopiju. Pogledajte [Oporavak rada](common:recover).

## Na mreži i van mreže

Otvaranje, crtanje, snimanje (DWG i DXF) i štampanje sve se odvija na vašem računaru, pa radi bez veze nakon što se CadCraft učita.

Da koristite CadCraft bez ikakve veze, kliknite {{ui:Spasi za rad van mreže}} u traci na vrhu dok ste na mreži. Oznaka broji ("Spašavanje 40 od 212") i završava s "Spremno za rad van mreže". Sačuvana kopija uključuje DWG čitač, ukupno oko 5 MB, pa se **DWG datoteke otvaraju i van mreže** nakon što se sačuva. Kliknite dugme ponovo za {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. "Nije moguće spasiti" znači da neke datoteke nisu preuzete: provjerite vezu i kliknite da pokušate ponovo. "Rad van mreže nije dostupan" znači da ovaj prozor pregledača ne može sačuvati kopiju (privatni prozori i neki upravljani računari).

Bez sačuvane kopije, DWG čitač se preuzima kad prvi put otvorite DWG nakon učitavanja stranice, pa otvaranje DWG-a van mreže može da ne uspije; DXF datoteke mu nikad ne trebaju. Nemojte osvježavati stranicu van mreže osim ako CadCraft nije sačuvan.

Pogledajte [Rad van mreže](common:offline) za detalje.

:::offline
Trenutno ste van mreže. Crteži se snimaju kao DWG ili DXF i štampaju normalno, a DXF datoteke se otvaraju. DWG datoteke se otvaraju ako CadCraft pokazuje "Spremno za rad van mreže", ili ako je DWG čitač već učitan u ovom jezičku.
:::

## Ograničenja u datotekama

Ograničenja i parametri (pogledajte [Ograničavanje crteža](topic:constraints)) snimaju se i u DWG-u i u DXF-u. Svaki ograničeni objekat nosi malu CadCraft napomenu (proširene podatke), a nekorišteni blok imenovan `CADCRAFT_PARAMETRIC` čuva ograničenja i tabelu parametara. Drugi programi otvaraju crtež normalno i ignorišu oboje; mogu obrisati nekorišteni blok kad očiste. Napomene se odnose na objekte preko njihovog vlastitog ključa, a ne preko ručki datoteke, pa program koji preimenuje ručke ih ne pokvari. Kad drugi program obriše ili promijeni ograničeni objekat, CadCraft odbacuje ograničenja na njemu kad otvori datoteku i kaže koliko ih je. Datoteka bez njih se otvara bez ograničenja.

Skica izvezena iz programa za modeliranje dijelova (`.json`) također se otvara: pogledajte [Premještanje skica u druge programe za dijelove i iz njih](topic:solidworks-sketches).

## Još nije dostupno

- Višestruke vodeće oznake kao objekti višestrukih vodećih oznaka u snimljenom DXF-u (R12 ih nema: snimaju se kao ono što crtaju).
- Slike u snimljenom DXF-u (snimaju se kao njihovi okviri; DWG ih čuva kao slike), i maske (wipeout) koje skrivaju ono što je ispod.
- Snimanje novije DXF verzije od 2000.
- Snimanje u oblak i sinhronizacija između računara.

Pogledajte [Još nije napravljeno](topic:not-built-yet) za cijeli spisak.
