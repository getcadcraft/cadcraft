---
title: Datoteke: šta se otvara, šta se čuva
summary: Formati koje CadCraft otvara, čuva i izvozi, šta se zadržava ili pretvara i gde datoteke završavaju.
keywords: xclip, clip, granica isecanja, veži isečeno, dwg, dxf, pdf, r12, otvori, sačuvaj, izvezi, uvezi, formati, pretvaranje, preuzimanje, saveas, dxfout, sačuvaj kao, čuvanje dwg, format, qsave, xref, xattach, povezan crtež, spoljna referenca, veži, ponovo učitaj, odvoji
from: 6d68b34e
---

## Ukratko

| Format | Otvaranje | Čuvanje | Napomene |
|---|---|---|---|
| DXF (tekst, bilo koja verzija) | Da | Da, kao DXF R12 ili DXF 2000 | Binarni DXF se ne prihvata: prvo ga sačuvajte kao tekstualni DXF. |
| DWG | Da | Da, kao DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018) | Čita i piše CadCraft-ova sopstvena DWG biblioteka (datoteke AutoCAD R13 do 2018). Vaš DWG se nikada ne menja. Oštećene datoteke ili verzije koje čitač ne obrađuje odbijaju se uz poruku. |
| PDF | Donosi stranu: kao podlogu ili kao objekte ([PDF podloge](topic:pdf-underlay)) | Da, štampanjem | Vektorski PDF lista, ili modela u razmeri. |

Svaki crtež koji otvorite (ili počnete sa {{ui:Novo}}) dobija svoju karticu iznad površine za crtanje; novi crtež koji niko nije dotakao koristi se umesto dodavanja kartice. Kliknite karticu za prebacivanje, njeno {{ui:×}} za zatvaranje (CadCraft pita pre toga ako ima nesačuvanih izmena), ili poređajte otvorene crteže jedan pored drugog: pogledajte [Podela ekrana](topic:split-screen).

## Otvaranje crteža

- Pritisnite {{key:Mod+O}}, kliknite {{ui:Otvori}}, ili ukucajte `OPEN`, pa izaberite datoteku.
- Ili prevucite datoteku `.dwg` ili `.dxf` na površinu za crtanje.

Datoteka se čita u vašem pregledaču. Ne šalje se nigde. Istorija prikazuje koliko je objekata i slojeva ušlo i koliko je trajalo, a odeljak {{ui:Crtež}} u levom panelu prikazuje format, na primer „DWG 2018 (AC1032)“.

Čitač DWG-a je deo CadCraft-a i preuzima se uz prvi DWG koji otvorite nakon učitavanja stranice (nekoliko stotina KB), pa nema posebnog preuzimanja na čekanje. Datoteku čita u pozadini, tako da stranica i dalje reaguje dok se velik DWG otvara.

### Šta ulazi

- Linije, lukovi, krugovi, polilinije (sa lučnim segmentima), elipse, tačke, tekst i višeredni tekst, solidi, šrafure (standardni uzorci nacrtani kao svoje linije, ostali kao ravan ton), reference blokova sa njihovim atributima (vrednosti koje možete menjati; pogledajte [Atributi blokova](topic:attributes)), kote i rasporedi sa svojim prozorima pogleda.
- Splajnovi ulaze kao splajnovi (stepen, kontrolne tačke, čvorovi, težine, tačke prilagođavanja); pogledajte [Splajnovi i polilinije](topic:splines).
- Višestruke oznake sa jednom linijom pokazivanja i tekstom ulaze kao CadCraft višestruke oznake koje možete menjati (pogledajte {{cmd:MLEADER}}). Ostale (sa blokom, više linija pokazivanja ili krivim linijama) nacrtane su kako ih je nacrtao drugi program i pomeraju se kao jedna celina; istorija kaže koliko ih je.
- Slike (pictures) prikazuju se kao okvir sa nazivom datoteke slike dok ne date CadCraft-u datoteku preko {{cmd:IMAGE}}: pogledajte [Slike u crtežu](topic:pictures#show-the-pictures-a-dwg-uses). Pokrivači (wipeouts) prikazuju se kao svoj okvir, a ono što je ispod njih ostaje vidljivo.
- Tabele u DWG-u ulaze onako kako ih je nacrtao drugi program.
- 3D površine u modelskom prostoru ulaze na kartici {{ui:3D}}, a ne kao 2D objekti; isto važi i za one unutar blokova, po jednom za svaku referencu bloka u modelu. U bloku i na listu takođe se crtaju ravne, kao konture. Pogledajte [Model u 3D](topic:3d-solids).
- Slojevi zadržavaju boju, uključeno, zamrznuto, zaključano i podešavanja štampanja. DEFPOINTS se nikada ne štampa.
- Kote postaju prave, izmenljive CadCraft kote tamo gde se njihove tačke mogu pročitati. Najpre se prikazuju tačno onako kako ih je nacrtao drugi program; čim promenite jednu, CadCraft je ponovo crta u svom stilu.
- Svaki raspored postaje karticom lista. U drugom programu svaki raspored ima skriven prvi prozor pogleda koji je sam list; CadCraft ga izostavlja.

### Šta još ne ulazi

Sve što CadCraft ne može da nacrta se broji, a ne pogađa. Okvir „O ovoj datoteci“ u levom panelu navodi to pod „Još nije prikazano:“ uz svaku vrstu objekta i broj. Tipični slučajevi su tabele u DXF-u, mreže i 3D solidi unutar blokova. 3D solidi, regioni i tela u modelskom prostoru prikazuju se na kartici 3D (pogledajte [Model u 3D](topic:3d-solids#solids-from-other-programs)). Prozori pogleda zakrenuti u datoteci prikazuju se zakrenuti, kao tamo, i zadržavaju zakret kada čuvate; isto važi i za trenutni UCS, imenovane UCS-ove i zakrenut pogled.

Tekst se crta jednim fontom u stilu Helvetice. Oznaka koja staje u jedan red u užem fontu originalnog programa može se prelomiti u dva reda u CadCraft-u.

## Čuvanje

Postoje tri načina za čuvanje. Svaki preuzima kopiju.

- **Sačuvaj**: pritisnite {{key:Mod+S}}, kliknite {{ui:Sačuvaj}}, ili ukucajte `SAVE` (takođe `QSAVE`). Čuva u formatu crteža: DWG ako ste otvorili DWG, DXF ako ste otvorili DXF. DWG zadržava verziju u kojoj je došao (datoteka iz 2018. čuva se kao 2018). Novi crtež koristi format i DWG verziju koju ste poslednje izabrali u {{ui:Sačuvaj kao}} u ovom pregledaču; ako niste birali, DWG u formatu AutoCAD 2000.
- **Sačuvaj kao**: pritisnite {{key:Mod+Shift+S}}, kliknite {{ui:Sačuvaj kao}}, ili ukucajte `SAVEAS`. Dijalog {{ui:Sačuvaj kopiju kao}} nudi {{ui:DWG}}, sa listom {{ui:Verzija}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000), {{ui:DXF R12}} i {{ui:DXF 2000}}, svaki sa nazivom datoteke koji će dobiti, a trenutni format i verzija crteža već su izabrani. Kliknite {{ui:Sačuvaj}} za preuzimanje, ili {{ui:Otkaži}} (ili {{key:Esc}}) da ništa ne sačuvate; istorija tada kaže „Nije sačuvano.“. Ono što izaberete ostaje: {{key:Mod+S}} koristi to za ovaj crtež od tada, a novi crteži u ovom pregledaču počinju sa tim.
- **DXFOUT**: ukucajte `DXFOUT`. Uvek preuzima kopiju DXF R12, a sledeće {{key:Mod+S}} i dalje čuva u sopstvenom formatu crteža.

Pregledač preuzima `<naziv crteža>.dwg` ili `<naziv crteža>.dxf`. Svako čuvanje je **novo preuzimanje**; datoteka koju ste otvorili se nikada ne prepisuje niti menja. Istorija to potvrđuje, na primer: „Sačuvana kopija kao Plan.dwg (DWG (AutoCAD 2018)). Vaš originalni Plan.dxf je nepromenjen.“ Za DXF piše „(DXF R12, otvara se u bilo kom CAD programu)“. Redovi ispod navode šta se promenilo tokom čuvanja.

Kada CadCraft radi u desktop aplikaciji, čuvanje radi kao u drugim desktop programima: {{key:Mod+S}} upisuje crtež nazad u datoteku koju ste otvorili, u sopstvenom formatu i verziji, a istorija kaže gde je sačuvano. {{ui:Sačuvaj kao}} i izvozi prikazuju dijalog za čuvanje sistema, a datoteka `.dwg`, `.dxf` ili `.ccsheets` na koju dvaput kliknete otvara se u CadCraft-u.

Za PDF, štampajte (pogledajte niže).

## Šta DWG zadržava i menja

CadCraft sam piše DWG u vašem pregledaču, istom bibliotekom kojom ga čita. Izaberite verziju u {{ui:Sačuvaj kao}}: format AutoCAD 2000 (verzija datoteke AC1015) otvara se u većini programa, uključujući stare; noviji formati (2004, AC1018, do 2018, AC1032) zadržavaju i prave boje. Ništa se ne šalje na server, a čuvanje DWG-a radi i van mreže.

Svaka verzija se proverava tako što se sačuvane datoteke ponovo čitaju čitačima DWG-a tri druga programa i samim CadCraft-om. CadCraft DWG još nije otvoren u samom AutoCAD-u.

### Šta DWG zadržava

- Linije, lukovi, krugovi, elipse, tačke i polilinije sa njihovim lučnim segmentima.
- Jednoredni tekst sa poravnanjem i faktorom širine.
- Višeredni i prelomljeni tekst, kao višeredni tekst. Drugi program ga ponovo prelama iz iste širine.
- Boje objekata: po sloju, po bloku, 255 standardnih boja i prave boje u formatu 2004 i kasnijim.
- Slojevi sa bojom, tipom linije, debljinom linije i podešavanjima uključeno, zamrznuto, zaključano i štampanje; sopstveni tipovi linija, debljine i razmere tipova linija objekata, obrasci tipova linija i razmera tipova linija crteža.
- Jedinice crteža i format dužine (decimalni, stope i inči, razlomci…).
- Blokovi sa svojom osnovnom tačkom i definicijama atributa, uključujući nevidljive, konstantne i unapred podešene.
- Reference blokova sa svojom razmerom, rotacijom i vrednostima atributa.
- Pune popune i šrafure sa uzorkom, razmerom i uglom (linije samog uzorka, tako da drugi programi crtaju iste linije kao CadCraft).
- Kote, kao prave kote: drugi programi ih ponovo mere kada se razvuku. Svaka zadržava svoja podešavanja (visina teksta, veličina strelice, decimale, format dužine) i svoj tekst, i nosi nacrtanu kopiju koju svaka DWG kota ima.
- Listovi (rasporedi): svaki list sa svojom veličinom papira i jedinicama, onim što je na njemu nacrtano, i svojim prozorima pogleda sa pogledom i razmerom.
- Imenovani pogledi.
- Višestruke oznake, kao višestruke oznake.
- Nazivi slojeva i blokova kako ste ih ukucali, sa velikim i malim slovima. (DXF R12 ih piše velikim slovima.)

### Šta DWG menja

Svaka od ovih stavki navodi se u istoriji nakon čuvanja, kada se odnosi na vaš crtež.

| U CadCraft-u | U sačuvanom DWG-u |
|---|---|
| Prave boje (izabrane pipetom boja), u formatu 2000 | Najbliža standardna boja: format 2000 ima samo 255. Sačuvajte kao 2004 ili kasnije da ih zadržite |
| Imenovani pogledi lista | Pogledi u prostoru papira: DWG ne kaže koji list, pa kada CadCraft ponovo otvori datoteku, pripadaju prvom listu |
| Višeredni tekst sa faktorom širine | Normalna širina slova: u DWG-u se faktor širine primenjuje samo na jednoredni tekst |
| Nazivi slojeva ili blokova sa znakovima koje DWG ne dozvoljava | Promenjeno: naziv iz povezanog crteža, kao `Base\|Walls`, postaje `Base$0$Walls` (način na koji ga imenuje vezivanje povezanog crteža), a ostali znaci postaju `_` |

### Zašto R12 i šta se pretvara

Kada čuvate kao DXF, CadCraft piše DXF R12, verziju koju može da otvori svaki CAD program. Starija je od nekih funkcija, pa se neke stvari zapisuju u jednostavnijem obliku:

| U CadCraft-u | U sačuvanoj R12 datoteci |
|---|---|
| Višeredni tekst | Jedan tekstualni objekat po redu |
| Elipse | Polilinije koje prate elipsu |
| Šrafure (iz otvorenih datoteka) | Samo njihove konture |
| Prave boje (izabrane pipetom boja) | Najbliža standardna boja |
| Debljine linija i sopstvene razmere tipova linija objekata | Izostavljeno: R12 nema ni jedno ni drugo (tipovi linija se zadržavaju) |
| Nazivi slojeva i blokova | Pišu se velikim slovima; razmaci i ostali znaci postaju `_`, a nazivi se skraćuju na 31 znak („Title block“ postaje `TITLE_BLOCK`) |
| Slojevi podešeni da se ne štampaju | Drugi programi će ih štampati (CadCraft pamti podešavanje kada crtež ima list) |
| Kote | Prave kote sa sopstvenim nacrtanim blokom, pa ih drugi programi prikazuju kako ih vidite |
| Višestruke oznake | Linije, strelica i tekst koje crtaju |
| Imenovani pogledi | Zadržani, sa nazivima velikim slovima; pogledi lista se vraćaju na prvi list |
| Više listova | Prvi list je prostor papira koji svaki program prikazuje; ostali se čuvaju kao blokovi nazvani `CCLAYOUT_1`, `CCLAYOUT_2` … koje CadCraft pretvara nazad u listove kada otvori datoteku |

Istorija navodi svaku od ovih stavki koja se odnosila na vaš crtež.

:::tip
Da nastavite rad na crtežu tokom nekoliko dana, sačuvajte kao DXF i sledeći put otvorite taj DXF. Sve što CadCraft može da nacrta preživi taj ciklus, uključujući kote, blokove i sve listove.
:::

## Povezani crteži (spoljne reference)

{{cmd:XATTACH}} (`XA`, ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Poveži crtež (xref)}}) povezuje drugi DWG ili DXF: izaberite datoteku, pa kliknite gde ide ({{key:Enter}} ga stavlja na 0,0). Ulazi kao jedan blok nazvan po datoteci, u pravoj razmeri kada dva crteža imaju različite jedinice. Njegovi slojevi i blokovi zadržavaju svoje nazive uz ispred naziv veze, kao `Plan|Walls`, `Plan|Door`, pa se nikada ne mešaju sa vašim: uključujte i isključujte povezane slojeve, zamrzavajte ih ili zaključavajte kao svoje. Veza je samo za čitanje: promenite drugi crtež i ponovo ga učitajte. Ono što podesite na slojevima veze (boja, tip linije, debljina, uključeno/isključeno, zamrznuto, zaključano, štampanje) zadržava se kada ga ponovo učitate, kada sačuvate crtež kao DWG dok je veza još veza, i kada drugi crtež poveže ovaj.

{{cmd:XREF}} (`XR`): `?` navodi veze (učitane ili ne, koja datoteka, koliko referenci); `A` dodaje; `R` ponovo učitava jednu iz njene datoteke (ponovo izaberite datoteku: pregledač sam ne može da dođe do vaših fascikli); `B` vezuje jednu (postaje obični blokovi i slojevi nazvani `Plan$0$Walls`); `D` odvezuje jednu (njene reference i slojevi nestaju). Svaka je jedan korak poništavanja.

{{cmd:XCLIP}} (`XC`) iseca reference blokova i veze: izaberite ih, `N` za novu granicu, zatim `R` i dva ugla ili `P` i tačke poligona ({{key:Enter}} ga zatvara); `D` uklanja isecanje. Prikazuje se i štampa se samo ono što je unutra, a isečak se pomera zajedno sa referencom. DWG i DXF 2000 zadržavaju isečke; DXF R12 čuva referencu celu i to kaže. Kada vežete vezu koja ima isečene reference, {{cmd:XREF}} `B` pita: `A` vezuje sve, `C` zadržava samo isečeni deo svake reference (linije i lukovi se seku na granici; tekstovi i ugnježđeni blokovi ostaju ako im je tačka umetanja unutra).

Crtež koji otvorite može povezivati datoteke koje CadCraft ne vidi: on kaže koliko nije učitano. Koristite {{cmd:XREF}}, `R` i izaberite svaku datoteku da ih vidite.

Kada čuvate, učitana veza se **vezuje** u datoteku (drugi programi vide obične blokove i slojeve nazvane `Plan$0$…`), a istorija to kaže. Veza koja nije učitana ostaje veza ka svojoj datoteci, u DWG-u i DXF-u.

## Otvaranje u 3D

{{ui:Pogled}} › {{ui:Više}} › {{ui:Otvori u ModelCraft}} ({{cmd:OPENIN3D}}) otvara crtež u aplikaciji za 3D modelovanje na novoj kartici, kao DWG, bez slanja na server. Izmene napravljene tamo ostaju tamo; sačuvajte ih tamo. Stavka menija se prikazuje samo tamo gde ta aplikacija može da primi predati crtež.

## Štampanje u PDF

Pritisnite {{key:Mod+P}}, kliknite {{ui:Štampaj}}, ili ukucajte `PLOT`. PDF se pravi u pregledaču i preuzima se, ili otvara na novoj kartici za štampanje. Pogledajte [Štampanje u PDF](topic:plot-pdf).

## Gde završavaju datoteke

Svako čuvanje i svako štampanje je preuzimanje, pa datoteke završe gde vaš pregledač stavlja preuzimanja: obično u fasciklu Preuzimanja. Da birate fasciklu svaki put, promenite podešavanje preuzimanja u pregledaču; [Pregledači i računari](common:browsers) pokazuje gde.

Ništa što otvorite ili sačuvate ne šalje se nama. Pogledajte [Gde idu vaše datoteke](common:your-files).

## PLN i PLA projektne datoteke

CadCraft otvara DWG i DXF crteže, a ne sopstvene datoteke Archicad-a (`.pln`, `.pla`, `.tpl`, `.bpn`). Kada otvorite jednu, dobijate poruku šta je. U Archicad-u sačuvajte poglede ili rasporede koji su vam potrebni kao DWG i otvorite ih ovde, ili izvezite model kao IFC i otvorite ga u BimCraft-u. Gde BimCraft može da preuzme datoteku, CadCraft nudi {{ui:Otvori u BimCraft-u}}.

## Ako se stranica zatvori pre čuvanja

CadCraft čuva kopiju svakog crteža koji promenite, samo u ovom pregledaču, čim prestanete da uređujete. Ako se kartica zatvori, pregledač se zaustavi ili računar ponovo pokrene pre nego što sačuvate, CadCraft pri sledećem pokretanju pita **Oporaviti vaš rad?**: {{ui:Oporavi}} ponovo otvara crtež, nesačuvan, na sopstvenoj kartici. Čuvanje crteža uklanja njegovu kopiju. Pogledajte [Oporavak vašeg rada](common:recover).

## Na mreži i van mreže

Otvaranje, crtanje, čuvanje (DWG i DXF) i štampanje sve se odvija na vašem računaru, pa rade bez veze kada se CadCraft učita.

Da koristite CadCraft bez ikakve veze, kliknite {{ui:Sačuvaj za rad van mreže}} u traci na vrhu dok ste na mreži. Oznaka broji („Čuvanje 40 od 212“) i završava se sa „Spremno za rad van mreže“. Sačuvana kopija uključuje DWG čitač, ukupno oko 5 MB, pa se **DWG datoteke otvaraju i van mreže** kada se sačuva. Ponovo kliknite dugme za {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. „Nije moguće sačuvati“ znači da neke datoteke nisu preuzete: proverite vezu i kliknite da pokušate ponovo. „Rad van mreže nije dostupan“ znači da ovaj prozor pregledača ne može da čuva kopiju (privatni prozori i neki upravljani računari).

Bez sačuvane kopije, DWG čitač se preuzima kada prvi put otvorite DWG nakon učitavanja stranice, pa otvaranje DWG-a van mreže može da ne uspe; DXF datoteke mu nikada ne trebaju. Ne osvežavajte stranicu van mreže osim ako CadCraft nije sačuvan.

Pogledajte [Rad van mreže](common:offline) za detalje.

:::offline
Trenutno ste van mreže. Crteži se čuvaju kao DWG ili DXF i normalno štampaju, a DXF datoteke se otvaraju. DWG datoteke se otvaraju ako CadCraft prikazuje „Spremno za rad van mreže“ ili ako je DWG čitač već učitan u ovoj kartici.
:::

## Ograničenja u datotekama

Ograničenja i parametri (pogledajte [Ograničavanje crteža](topic:constraints)) čuvaju se i u DWG-u i u DXF-u. Svaki ograničen objekat nosi malu CadCraft napomenu (prošireni podaci), a neiskorišćeni blok nazvan `CADCRAFT_PARAMETRIC` čuva ograničenja i tabelu parametara. Drugi programi otvaraju crtež normalno i ignorišu oba; mogu da obrišu neiskorišćeni blok kada čiste. Napomene se odnose na objekte preko njihovog sopstvenog ključa, a ne preko rukovaoca datoteke, pa program koji menja brojeve rukovaoca ne narušava ih. Kada drugi program obriše ili promeni ograničen objekat, CadCraft pri otvaranju datoteke odbacuje ograničenja na njemu i kaže koliko ih je. Datoteka bez njih otvara se bez ograničenja.

Skica izvezena iz alata za modeliranje delova (`.json`) takođe se otvara: pogledajte [Premeštanje skica u druge alate za modeliranje delova](topic:solidworks-sketches).

## Još nije dostupno

- Višestruke oznake kao objekti višestrukih oznaka u sačuvanom DXF-u (R12 ih nema: čuvaju se kao ono što crtaju).
- Slike u sačuvanom DXF-u (čuvaju se kao svoji okviri; DWG ih zadržava kao slike), i pokrivači koji skrivaju ono što je ispod.
- Čuvanje DXF verzije novije od 2000.
- Čuvanje u oblaku i sinhronizacija između računara.

Pogledajte [Još nije napravljeno](topic:not-built-yet) za punu listu.
