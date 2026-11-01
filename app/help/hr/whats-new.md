---
title: Što je novo u 0.7
summary: PDF podloge i uvoz PDF-a, skenirani crteži s automatskim trasiranjem, pravi spline-ovi s naredbama SPLINE, SPLINEDIT i PEDIT, upravitelj stilova kotiranja, tekst koji zadržava oblikovanje, WBLOCK i vlastita mjerila, 3D puna tijela iz drugih programa, registracija skeniranja, ploča Laser, USD izvoz, Povijest i ispis u CadCraft Studiu, vođeni prvi crtež, alatna traka s bilo koje strane ili u manje redaka te više za AI pomoćnike.
keywords: što je novo, bilješke o izdanju, popis promjena, promjene, 0.7, verzija, nove značajke, pdf, pdfattach, pdfimport, podloga, sken, scanattach, scantrace, trasiranje, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, oblikovanje, wblock, scalelistedit, popis mjerila, acis, 3d puna tijela, registerscans, registracija skeniranja, icp, e57, las, laser, grbl, g-kôd, usd, usdout, povijest, verzije, usporedba, ispis, pisač, png, svg, stil ispisa, tip linije, vodič, podsjetnik, karta naredbi, položaj alatne trake, retci alatne trake, toolbardock, regen, regenall, trackpad, povlačenje, kodna stranica, ćirilica, korejski, kineski, japanski, elektrika, rcd, p&id, pid, acad.lsp, acaddoc.lsp, mapa podrške, pomoćnici, mcp, jedinice, portugalski
from: b9258ca6
---

Ovo se promijenilo u CadCraftu 0.7 u odnosu na 0.6. Velik dio zatražen je na Discordu. Popis je grupiran po područjima, s najvažnijim na početku.

## Novo

### PDF-ovi i skenirani crteži

- **Stavite stranicu PDF-a ispod crteža.** {{cmd:PDFATTACH}} (`PDFATT`) postavlja stranicu u pravoj veličini ili u mjerilu koje upišete. Hvatajte njezine linije, izblijedite je, učinite je jednobojnom ({{cmd:PDFADJUST}}), izrežite je ({{cmd:PDFCLIP}}) i uključujte vlastite slojeve PDF-a ({{cmd:PDFLAYERS}}). Plotira se kao linije, ispune i tekst, a DWG ili DXF 2000 zadržava je kao vezu na datoteku. Otvaranje PDF-a s {{ui:Otvori}} pita hoćete li ga priložiti ili uvesti. Vidi [PDF podloge i uvoz PDF-a](topic:pdf-underlay).
- **Pretvorite stranicu PDF-a u objekte crteža.** {{cmd:PDFIMPORT}} (`PDFIM`) izrađuje linije, polilinije, kružnice, lukove, pune šrafure i tekst na slojevima nazvanim prema PDF-u, u pravoj veličini, u upisanom mjerilu ili skalirano iz dvije točke i stvarne udaljenosti, u jednom koraku poništavanja. Vidi [Uvoz stranice](topic:pdf-underlay#import-a-page).
- **Skenirani crteži.** {{cmd:SCANATTACH}} unosi PNG, JPEG ili TIFF (jednu stranicu ili sve) ili stranicu PDF-a koja je slika. Zatim je skalirajte iz dvije točke ({{cmd:SCANSCALE}}), poravnajte ({{cmd:SCANALIGN}}), ispravite prema njezinim dugim linijama ({{cmd:SCANDESKEW}}), učinite crno-bijelom i uklonite mrlje ({{cmd:SCANCLEAN}}), obrežite i izbrišite dijelove. Svaki je korak jedan korak poništavanja, a izvorna datoteka se čuva. Vidi [Skenirani crteži i trasiranje](topic:scanned-drawings).
- **Trasirajte sken u linije i lukove.** {{cmd:SCANTRACE}} crta linije skena kao linije i lukove na novom sloju, SCAN-TRACE, s tolerancijom koju postavite, a tekst i šrafure ostavlja kakvi jesu. Izvješće kaže što je izradio i što je ostavio, a nije tvrdnja da je rezultat točan: provjerite ga prema listu. {{cmd:RASTERSNAP}} omogućuje da hvatanja objekata pronađu krajeve, kutove i sjecišta skena. Ništa se nikamo ne šalje i ne koristi se trenirani model. Vidi [Trasiranje](topic:scanned-drawings#the-trace).

### Crtanje i uređivanje

- **Pravi spline-ovi.** {{cmd:SPLINE}} (`SPL`) crta krivulju kroz točke ili iz kontrolnih točaka (stupanj 1 do 5), s tangentama na krajevima; {{cmd:SPLINEDIT}} (`SPE`) pomiče, dodaje i briše točke prilagodbe ili kontrolne točke, postavlja težine, otvara, zatvara, obrće ili pretvara spline u poliliniju. Spline-ovi iz DWG i DXF datoteka otvaraju se kao spline-ovi, a DWG i DXF 2000 spremaju ih kao spline-ove. Vidi [Spline-ovi i polilinije](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zatvara i otvara polilinije, spaja im linije i lukove, postavlja jednu širinu, provlači krivulju kroz vrhove ili spline uz njih i vraća je s Decurve, obrće i uređuje više njih odjednom. Vidi [Uređivanje polilinije](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapisuje blok, neke objekte ili cijeli crtež u novi DWG ili DXF koji sadrži samo slojeve, stilove i blokove koje koriste. Vidi [Zapisivanje bloka ili objekata u vlastitu datoteku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) ponovno crta karticu na kojoj ste iz crteža, {{cmd:REGENALL}} (`REA`) svaku karticu, ploču i otvoreni crtež. Vidi [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i kote

- **Tekst zadržava oblikovanje.** Odlomci teksta iz drugih programa zadržavaju boje po riječi, podebljano i kurziv, podcrtano, složene razlomke i visine: crtaju se na zaslonu i u PDF-ovima, zadržavaju se kad uređujete riječi i spremaju natrag. Vidi [Oblikovanje unutar odlomaka teksta iz drugih programa](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Upravitelj stilova kotiranja.** {{cmd:DIMSTYLE}} (`D`) izrađuje, mijenja, uspoređuje i primjenjuje imenovane stilove kotiranja; promjena stila mijenja svaku kotu koja ga koristi. {{cmd:DIMEDIT}} (`DED`) vraća tekst, upisuje novi tekst, zakreće ga ili nakošuje pomoćne mjerne crte; {{cmd:DIMTEDIT}} pomiče tekst ulijevo, udesno ili u sredinu. Vidi [Imenovani stilovi kotiranja](topic:dimension-settings#named-dimension-styles).
- **Vlastita mjerila.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje mjerila poput 1:75 popisima mjerila viewporta i ispisa; spremaju se u crtežu (DWG i DXF 2000), a crtež iz drugog programa donosi vlastiti popis. Vidi [Mjerila](topic:units-papers-scales#scales).
- **Tekst u drugim pismima.** DXF datoteke spremljene u ćirilićnim, korejskim, kineskim, japanskim ili vijetnamskim kodnim stranicama sada se otvaraju s tekstom, a kineski, japanski i korejski tekst ispisuje se u PDF-ovima (ispis dohvaća veći font prvi put kad ga treba). Vidi [Font](topic:text#font).

### Plotanje i ispis

- **Više u tablicama stilova ispisa.** Za svaku boju tablica sada može postaviti i tip linije, završetak i spoj linije te stil ispune koji pune ispune ispisuje kao šrafurne linije; tablica ima vlastiti popis debljina linija i mjerilo tipa linije. Vidi [Tablice stilova ispisa](topic:plot-pdf#plot-style-tables).
- **Ispis te PNG i SVG datoteke.** Dijaloški okvir Ispis ima {{ui:Ispis…}}, {{ui:Preuzmi PNG}} (300 dpi) i {{ui:Preuzmi SVG}}. U CadCraft Studiu navodi pisače računala, njihov papir i broj kopija. Vidi [Ispis](topic:plot-pdf#print) i [Slike i SVG datoteke](topic:plot-pdf#picture-and-svg-files).

### 3D i oblaci točaka

- **3D puna tijela iz drugih programa.** Puna tijela, regije i tijela u prostoru modela crteža prikazuju se na kartici 3D, samo za čitanje, a spremanje kao DWG zapisuje ih natrag nepromijenjena. Plohe na površinama koje CadCraft još ne crta navode se, a ne pogađaju. Vidi [Puna tijela iz drugih programa](topic:3d-solids#solids-from-other-programs).
- **Registracija više skeniranja.** {{cmd:REGISTERSCANS}} (`REGSCAN`) postavlja skeniranja snimljena s različitih položaja u jedan okvir, parovima točaka ili upisanim koordinatama ciljeva, doteruje ih ICP-om, sprema registraciju kao malu projektnu datoteku i zapisuje registrirani oblak kao jednu LAS ili E57 datoteku. Vidi [Registracija više skeniranja u jedno](topic:register-scans).
- **USD izvoz.** {{cmd:USDOUT}} ili {{cmd:EXPORT3D}} › {{ui:USD}} zapisuje puna tijela kartice 3D kao `.usda`, `.usdc` ili `.usdz`. Vidi [Izvoz 3D modela kao USD](topic:usd).
- **Izračuni na kartici 3D.** Gdje alati kartice 3D traže udaljenost, možete upisati izračun, kao u naredbenom retku. Vidi [Aritmetika u upisanoj vrijednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Izrada predmeta

- **Pošaljite crtež laseru.** {{cmd:LASER}} ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}} otvara ploču preko crteža: svaki sloj reže, zarezuje, gravira linije, ispunjava oblike, gravira sliku ili se ne šalje, sa svojom snagom, brzinom i brojem prolaza. Pregled prati vaše izmjene, {{ui:Spremi G-kôd…}} zapisuje G-kôd u načinu lasera za GRBL, a u Chromeu ili Edgeu ploča može uokviriti posao i poslati ga preko USB-a. Postavke se spremaju u crtežu (DWG i DXF). Vidi [Slanje crteža laseru](topic:laser-cutting).
- **Simboli instalacija zgrada u dodatku Electrical.** Podatkovne, telefonske i TV utičnice, tipkala i vremenske sklopke, termostat, oznaka izlaza, detektori, javljač i sirena, ventilator, bojler, štednjak, punionica za električna vozila, brojilo energije i podrazdjelnik te simboli RCD i RCBO. Strujni krug može imati RCD, tablica razdjelnika ima stupac RCD, a provjere navode utičnične krugove bez RCD-a od 30 mA ili manje. To je podsjetnik za planiranje, a ne provjera propisa.
- **Dodatak P&ID.** P&ID crta procesne dijagrame: simbole s priključnim točkama, procesne i signalne linije, oznake, brojeve linija, popise linija, opreme, instrumenata i ventila (CSV ili radna knjiga) i provjere. Dolazi s CadCraftom i isključen je dok ga ne uključite u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Dodaci}}. Pomagalo je za crtanje, a ne inženjersko odobrenje, a njegovi su tekstovi zasad samo na engleskom.

### Početak rada i zaslon

- **Vođeni prvi crtež.** {{cmd:TOUR}} (ili {{ui:Pokreni vodič}} na početnoj kartici) provodi vas kroz šest koraka u pravom crtežu: linija, kružnica, pomak, skraćivanje, brisanje i kota. Sam se pokreće prvi put kad se CadCraft otvori bez ikakvog sadržaja. Vidi [Želite li da vas netko vodi?](topic:getting-started#prefer-to-be-guided)
- **Podsjetnik i karta naredbi.** [Podsjetnik](topic:cheat-sheet) ima 40 svakodnevnih naredbi na jednoj stranici, i kao PDF za ispis, a [karta naredbi](topic:command-map) navodi naredbe s njihovim kratkim nazivima, od A do Ž.
- **Alatna traka s bilo koje strane.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Položaj alatne trake}}: gore (kao prije), dolje, lijevo ili desno, ili upišite {{cmd:TOOLBARDOCK}}. Vidi [Položaj alatne trake](topic:settings#toolbar-position).
- **Retci alatne trake.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Retci alatne trake}}: prelomi da stane, 2 retka ili 1 redak, za CadCraftovu alatnu traku te stilove Drafting classic i Ribbon. {{key:Shift+Ctrl+F1}} prolazi kroz njih, {{key:Ctrl+F1}} kroz ono što gumbi prikazuju, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} ih postavljaju. Savjet na početku ima gumb za zatvaranje. Hvala GJoe2, koji je ovo poslao kao pull request. Vidi [Retci alatne trake](topic:settings#toolbar-rows).

### U CadCraft Studiu

- **Povijest.** {{cmd:HISTORY}} (`HIST`) ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Povijest…}}: kopije koje Studio čuva kad otvorite i spremite crtež te verzije crteža u oblaku kad ste ga otvorili iz oblaka. Otvorite ili vratite jednu ili usporedite dvije, s dodanim, uklonjenim i promijenjenim prikazanim bojom. Vidi [Povijest](topic:history).
- **acad.lsp i acaddoc.lsp.** Odaberite mapu podrške u {{cmd:APPLOAD}}: te se dvije datoteke učitavaju kad se CadCraft pokrene (acaddoc.lsp ponovno za svaku novu karticu crteža), a `S::STARTUP` se izvodi nakon njih. Vidi [Učitavanje aplikacija](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dijaloški okvir Ispis u vlastitom prozoru.** Gumb u njegovoj naslovnoj traci premješta ga u prozor koji možete staviti na drugi monitor. Vidi [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).

### Za AI pomoćnike

- **Datoteke po nazivu, u mapama koje odaberete.** U CadCraft Studiu pomoćnik može otvarati, spremati i plotati datoteke po nazivu te naredbi predati datoteku koju traži (INSERT iz datoteke, izvoz iz COUNT, SAVEAS, PLOT), ali samo unutar mapa koje dodate pod {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Pomoćnici}} › {{ui:Mape koje smije koristiti}}. Vidi [Neka koristi datoteke u mapama koje odaberete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Manje poziva.** Pomoćnik može upisati cijeli naredbeni redak odjednom, držati naredbu otvorenom između svojih poziva, brojati objekte po vrsti i sloju bez njihova popisivanja i postaviti blok s vrijednostima atributa u jednom koraku.
- **Bez prozora.** Naredbeni redak `cadcraft` zapisuje SVG ispise te pretvara, plotira, provjerava ili opisuje mnogo datoteka odjednom. MCP paket još nije objavljen. Vidi [Rad na datotekama bez otvaranja CadCrafta](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Promijenjeno

- **Trackpad pomiče prikaz.** Pomaknite dva prsta po trackpadu i 2D prikaz ih prati; razmicanje prstiju i kotačić miša zumiraju. Vidi [Miš, trackpad i dodir](topic:mouse-trackpad-touch).
- **OLE objekti se zadržavaju.** Ugrađeni objekti iz DXF-a prikazuju se kao njihova slika ili označen okvir, a DXF 2000 sprema ih natrag. Oni iz DWG-a zadržavaju se i zapisuju natrag kad spremite kao DWG, ali se još ne prikazuju. Prije su se gubili pri spremanju. Vidi [Objekti iz drugih programa (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jedinice novog crteža** prate jedinicu koju označite zvjezdicom u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}}.

## Ispravljeno

- Layouti koji su se otvarali prazni ili su gubili viewport i umjesto njega prikazivali cijeli model sada se otvaraju sa stvarnim viewportima. Layout bez veze na svoj sadržaj se zadržava, a izvješće o otvaranju to kaže.
- DXF datoteke u starijim kodnim stranicama prikazivale su iskrivljen ćirilični i korejski tekst. Sada se čitaju ispravno.
- Odlomci teksta iz drugih programa gubili su oblikovanje pri otvaranju i spremali se natrag bez njega.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, obujam, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa je zasebna jedinica). Isključite jedinice koje nikad ne koristite i one napuštaju popise jedinica; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava vlastitu jedinicu. U CadCraftu zvjezdica postavlja jedinice novog crteža kada je to jedinica koju crtež može nositi; CadCraftov vlastiti okvir {{ui:Jedinice}} još ne prati prekidače. Kada crtež ima jedinice, duljina koju upišete može nositi oznaku bilo koje jedinice. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Zbijeno}} smješta više na zaslon (zasloni osjetljivi na dodir i mobiteli zadržavaju velike gumbe). Svaka bočna ploča ima usku naslovnu traku: povucite je da usidrite ili odvojite ploču, ispustite je na traku druge ploče da dijele jedan okvir kao kartice, prikvačite je da se uvlači do ruba ili je sakrijte i vratite s ruba. Vidi [Raspored ploča](common:arrange-panels#make-the-layout-denser).
- **Dijaloški okviri se pomiču.** Povucite dijaloški okvir za naslovnu traku da ga maknete s puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovno centrirate. Vidi [Pomicanje dijaloškog okvira](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset razrađenih zahtjeva za vašeg pomoćnika (urediti crtež, plotati komplet, provjeriti crteže, postavljati pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dopuštenjima koja treba, a svaki ponovno izvodimo našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. On, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje još nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za vaš sustav, nema mreže, loš potpis) umjesto samo „Gotovo“ te prestaje vraćati karticu Što je novo koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Storea premješteni su u 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 pored svake datoteke na getcadcraft.com/download. Na Windowsima, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, a zatim {{ui:Svejedno pokreni}}. Na Macu, prvi put, desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija i još nema verzije za iPad ni iPhone.
- Popisi kuta i nagiba u {{ui:Jedinice}} su spremljeni, ali ih još nijedan okvir ne čita.
- OLE objekti iz DWG-a se zadržavaju, ali se ne prikazuju, a slike metadatoteka unutar OLE objekata ne crtaju se.
- Čitanje tablica stilova ispisa (CTB datoteka) iz drugih programa čeka primjer datoteke.
- Stariji azijski tekst zapisan kodovima `\M+` se čita, ali još nije provjeren prema datoteci iz drugog programa.
- PDF podloge: slike unutar stranice prikazuju se na zaslonu, ali se ne plotaju, pomoćnikov ispis izostavlja podloge, a kako drugi programi čitaju spremljeni isječak i mjerilo u njima nije provjereno.
- Povijest: CadCraft još ne šalje svoja spremanja u oblak, pa su verzije u oblaku one spremljene s drugih uređaja i weba. Povijest postoji samo u CadCraft Studiu.
- Čuva li Studio mapu podrške acad.lsp nakon ponovnog pokretanja još nije provjereno; ako pita, ponovno odaberite mapu u APPLOAD.
- Ploča Laser još nije isprobana na stvarnom laseru: svaku postavku isprobajte na otpadu. CadCraft Studio nema Web Serial, pa u Studiu ploča samo sprema G-kôd.
- Registracija skeniranja testirana je na izmišljenim skeniranjima, još ne na skupu stvarnog skenera.
- Pomicanje prikaza s dva prsta isprobano je simuliranim događajima trackpada, još ne na stvarnom trackpadu.
- {{cmd:PEDIT}} nema opciju Edit vertex (koristite ručke ili Svojstva). Odmak, skraćivanje, produživanje, zaobljenje, prekid i spajanje još ne prihvaćaju spline-ove; visina (Z) spline-a se ne zadržava.
- Novom odlomku teksta još se ne mogu dati kodovi oblikovanja, a SVG ispisi prikazuju oblikovani tekst u jednoj boji.
- WBLOCK-ov Entire drawing zapisuje samo model, a ne listove. Trenutni stil kotiranja ne sprema se u datoteku: crtež se otvara sa Standard kao aktivnim.
- Stilovi izbornika s vrpcom još nemaju popise slojeva, boja ni tipova linija: koristite ploču {{ui:Slojevi}} i {{ui:Svojstva}}.
- Oblaci točaka se i dalje ne spremaju u crtežu niti plotaju, a E57 datoteke otvaraju se do 6 milijuna točaka i 512 MB.
- CadCraftove spremljene DWG datoteke još nisu provjerene u samom AutoCADu.

Sve ostalo je u [Još nije izrađeno](topic:not-built-yet).
