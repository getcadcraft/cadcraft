---
title: Što je novo u 0.7 (ranije)
summary: PDF podloge i uvoz PDF-a, skenirani crteži s automatskim praćenjem, pravi splajnovi sa SPLINE, SPLINEDIT i PEDIT, upravitelj stilova kota, tekst koji zadržava svoje oblikovanje, WBLOCK i vlastita mjerila, 3D tijela iz drugih programa, registracija skenova, ploča Laser, izvoz USD, Povijest i ispis u CadCraft Studiju, vođeni prvi crtež, alatna traka na bilo kojoj strani ili u manje redaka te više za AI pomoćnike.
keywords: što je novo 0.7, ranije izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove značajke, pdf, pdfattach, pdfimport, podloga, skeniranje, scanattach, scantrace, praćenje, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, oblikovanje, wblock, scalelistedit, popis mjerila, acis, 3d tijela, registerscans, registracija skenova, icp, e57, las, laser, grbl, g-code, usd, usdout, povijest, verzije, usporedba, ispis, pisač, png, svg, stil plota, vrsta linije, vodič, podsjetnik, mapa naredbi, položaj alatne trake, retci alatne trake, toolbardock, regen, regenall, trackpad, prevlačenje, kodna stranica, ćirilica, korejski, kineski, japanski, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, mapa podrške, pomoćnici, mcp, jedinice, portugalski
from: d07ca034
---

Ovo se promijenilo u CadCraftu 0.7 u odnosu na 0.6. Velik dio toga zatražen je na Discordu. Popis je grupiran po područjima, s najvažnijim na početku.

## Novo

### PDF-ovi i skenirani crteži

- **Stavite PDF stranicu ispod crteža.** {{cmd:PDFATTACH}} (`PDFATT`) postavlja stranicu u njezinoj stvarnoj veličini ili mjerilu koje upišete. Hvatajte se za njezine linije, učinite je blijedom, pretvorite u crno-bijelu ({{cmd:PDFADJUST}}), izrežite ({{cmd:PDFCLIP}}) i uključujte ili isključujte slojeve samog PDF-a ({{cmd:PDFLAYERS}}). Plotira se kao linije, ispune i tekst, a DWG ili DXF 2000 čuva je kao poveznicu na datoteku. Otvaranje PDF-a s {{ui:Otvori}} pita želite li ga priložiti ili uvesti. Vidi [PDF podloge i uvoz PDF-a](topic:pdf-underlay).
- **Pretvorite PDF stranicu u objekte crteža.** {{cmd:PDFIMPORT}} (`PDFIM`) pravi linije, polilinije, kružnice, lukove, pune šrafure i tekst na slojevima nazvanima po PDF-u, u stvarnoj veličini, upisanom mjerilu ili mjerilu iz dviju točaka i stvarne udaljenosti, u jednom koraku poništavanja. Vidi [Uvoz stranice](topic:pdf-underlay#import-a-page).
- **Skenirani crteži.** {{cmd:SCANATTACH}} učitava PNG, JPEG ili TIFF (jednu stranicu ili sve) ili PDF stranicu koja je slika. Zatim je skalirajte iz dviju točaka ({{cmd:SCANSCALE}}), poravnajte ({{cmd:SCANALIGN}}), ispravite joj okomitost prema njezinim vlastitim dugim linijama ({{cmd:SCANDESKEW}}), pretvorite u crno-bijelo i uklonite mrlje ({{cmd:SCANCLEAN}}), izrežite je i izbrišite dijelove. Svaki korak je jedan korak poništavanja, a izvorna datoteka se čuva. Vidi [Skenirani crteži i praćenje](topic:scanned-drawings).
- **Pratite skenirani crtež u linije i lukove.** {{cmd:SCANTRACE}} crta linije skena kao linije i lukove na novom sloju SCAN-TRACE, s tolerancijom koju postavite, a tekst i šrafure ostavlja kakvi jesu. Izvješće kaže što je napravljeno i što je ostavljeno, i nije tvrdnja da je rezultat točan: provjerite ga prema listu. {{cmd:RASTERSNAP}} omogućuje da hvatanje objekata pronalazi krajeve, kutove i sjecišta skena. Ništa se ne šalje nigdje i ne koristi se nikakav istrenirani model. Vidi [Praćenje](topic:scanned-drawings#the-trace).

### Crtanje i uređivanje

- **Pravi splajnovi.** {{cmd:SPLINE}} (`SPL`) crta krivulju kroz točke ili iz kontrolnih točaka (stupanj 1 do 5), s krajnjim tangentama. {{cmd:SPLINEDIT}} (`SPE`) pomiče, dodaje i briše točke prilagodbe ili kontrolne točke, postavlja težine, otvara, zatvara, obrće ili pretvara splajn u polilinija. Splajnovi iz DWG i DXF datoteka otvaraju se kao splajnovi, a DWG i DXF 2000 ih spremaju kao splajnove. Vidi [Splajnovi i polilinije](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zatvara i otvara polilinije, spaja linije i lukove s njima, postavlja jednu širinu, provlači krivulju kroz vrhove ili splajn duž njih (a vraća se s Decurve), obrće i uređuje više njih odjednom. Vidi [Uređivanje polilinije](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapisuje blok, neke objekte ili cijeli crtež u novi DWG ili DXF koji sadrži samo slojeve, stilove i blokove koje koriste. Vidi [Zapisivanje bloka ili objekata u vlastitu datoteku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) ponovno iscrtava karticu na kojoj jeste iz crteža, a {{cmd:REGENALL}} (`REA`) svaku karticu, okno i otvoreni crtež. Vidi [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i kote

- **Tekst zadržava svoje oblikovanje.** Odlomački tekst iz drugih programa zadržava boje po riječima, podebljanje i kosi tekst, podcrtavanje, složene razlomke i visine: iscrtan je na zaslonu i u PDF-ovima, zadržava se kad uređujete riječi i sprema se natrag. Vidi [Oblikovanje unutar odlomačnog teksta iz drugih programa](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Upravitelj stilova kota.** {{cmd:DIMSTYLE}} (`D`) pravi, mijenja, uspoređuje i primjenjuje imenovane stilove kota; promjena stila mijenja svaku kotu koja ga koristi. {{cmd:DIMEDIT}} (`DED`) vraća tekst na mjesto, upisuje novi tekst, te uključuje ili isključuje tekst i kosi pomoćne mjerne crte. {{cmd:DIMTEDIT}} pomiče tekst lijevo, desno ili na sredinu. Vidi [Imenovani stilovi kota](topic:dimension-settings#named-dimension-styles).
- **Vlastita mjerila.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje mjerila poput 1:75 na popise mjerila viewporta i plotanja. Spremaju se u crtež (DWG i DXF 2000), a crtež iz drugog programa donosi vlastiti popis. Vidi [Mjerila](topic:units-papers-scales#scales).
- **Tekst u drugim abecedama.** DXF datoteke spremljene u ćiriličnim, korejskim, kineskim, japanskim ili vijetnamskim kodnim stranicama sada se otvaraju s tekstom, a kineski, japanski i korejski tekst ispisuje se u PDF-ovima (plotanje pri prvoj potrebi preuzme veći font). Vidi [Font](topic:text#font).

### Plotanje i ispis

- **Više u tablicama stilova plota.** Za svaku boju tablica sada može postaviti i vrstu linije, kraj linije i spoj linija te stil ispune koji ispisuje pune ispune kao šrafurne linije. Tablica ima svoj popis debljina linija i mjerilo vrste linije. Vidi [Tablice stilova plota](topic:plot-pdf#plot-style-tables).
- **Ispis te PNG i SVG datoteke.** Dijalog plotanja ima {{ui:Ispis…}}, {{ui:Preuzmi PNG}} (300 dpi) i {{ui:Preuzmi SVG}}. U CadCraft Studiju navodi pisače na računalu, njihov papir i broj kopija. Vidi [Ispis](topic:plot-pdf#print) i [Slike i SVG datoteke](topic:plot-pdf#picture-and-svg-files).

### 3D i oblaci točaka

- **3D tijela iz drugih programa.** Tijela, područja i tijela u modelskom prostoru crteža prikazuju se na 3D kartici, samo za čitanje, a spremanje u DWG ih vraća nepromijenjene. Plohe na površinama koje CadCraft još ne crta navode se, ne pogađaju se. Vidi [Tijela iz drugih programa](topic:3d-solids#solids-from-other-programs).
- **Registracija više skenova.** {{cmd:REGISTERSCANS}} (`REGSCAN`) stavlja skenove snimljene s različitih pozicija u jedan okvir, po parovima točaka ili upisanim ciljnim koordinatama, dotjeruje ih ICP-om, sprema registraciju kao malu projektnu datoteku i zapisuje registrirani oblak kao jednu LAS ili E57 datoteku. Vidi [Registrirajte više skenova u jedan](topic:register-scans).
- **Izvoz USD-a.** {{cmd:USDOUT}}, ili {{cmd:EXPORT3D}} › {{ui:USD}}, zapisuje tijela 3D kartice kao `.usda`, `.usdc` ili `.usdz`. Vidi [Izvoz 3D modela kao USD](topic:usd).
- **Izračuni na 3D kartici.** Gdje alati 3D kartice traže udaljenost, možete upisati izračun, kao u naredbenom retku. Vidi [Aritmetika u upisanoj vrijednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Izrada

- **Pošaljite crtež na laser.** {{cmd:LASER}}, ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}, otvara ploču preko crteža: svaki sloj reže, ureže, graviranjem crta linije, ispunjava oblike, graviranjem prenosi sliku ili se ne šalje, s vlastitom snagom, brzinom i prolazima. Pregled prati vaše izmjene, {{ui:Spremi G-kôd…}} zapisuje GRBL G-kod za laserski način, a u Chromeu ili Edgeu ploča može uokviriti posao i poslati ga preko USB-a. Postavke se spremaju u crtež (DWG i DXF). Vidi [Slanje crteža na laser](topic:laser-cutting).
- **Simboli instalacija u dodatku Elektro.** Utičnice za podatke, telefon i TV, ključne i vremenske sklopke, termostat, znak izlaza, detektori, pozivna točka i zvučnik, ventilator, bojler, štednjak, točka za punjenje električnih vozila, brojilo energije i podrazdjelnik, te simboli RCD i RCBO. Strujni krug može imati RCD, tablica razdjelnika ima stupac RCD, a provjere imenuju utičnične strujne krugove bez RCD-a od 30 mA ili manje. To je podsjetnik za planiranje, a ne provjera propisa.
- **Dodatak P&ID.** P&ID crta dijagrame procesa: simbole s točkama spajanja, linije procesa i signala, oznake, brojeve linija, popise linija, opreme, instrumenata i ventila (CSV ili radna knjiga) te provjere. Dolazi uz CadCraft i isključen je dok ga ne uključite u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Dodaci}}. To je pomagalo za crtanje, a ne inženjersko odobrenje, a njegove riječi su za sada samo na engleskom.

### Početak i zaslon

- **Vođeni prvi crtež.** {{cmd:TOUR}} (ili {{ui:Pokreni vodič}} na početnoj kartici) vodi kroz šest koraka u stvarnom crtežu: liniju, kružnicu, pomicanje, skraćivanje, brisanje i kotu. Počinje sam od sebe prvi put kad se CadCraft otvori praznog. Vidi [Želite li vođenje?](topic:getting-started#prefer-to-be-guided)
- **Podsjetnik i mapa naredbi.** [Podsjetnik](topic:cheat-sheet) ima 40 svakodnevnih naredbi na jednoj stranici, također kao PDF za ispis, a [mapa naredbi](topic:command-map) popisuje naredbe s njihovim kratkim imenima, od A do Z.
- **Alatna traka na bilo kojoj strani.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Položaj alatne trake}}: gore (kao prije), dolje, lijevo ili desno, ili upišite {{cmd:TOOLBARDOCK}}. Vidi [Položaj alatne trake](topic:settings#toolbar-position).
- **Retci alatne trake.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Retci alatne trake}}: prelamanje da stane, 2 retka ili 1 redak, za alatnu traku CadCrafta te stilove Drafting classic i Ribbon. {{key:Shift+Ctrl+F1}} prolazi kroz njih, {{key:Ctrl+F1}} kroz ono što gumbi prikazuju, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} ih postavljaju. Početni savjet ima gumb za zatvaranje. Hvala GJoe2 koji je ovo poslao kao pull request. Vidi [Retci alatne trake](topic:settings#toolbar-rows).

### U CadCraft Studiju

- **Povijest.** {{cmd:HISTORY}} (`HIST`), ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Povijest…}}: kopije koje Studio čuva kad otvorite i spremite crtež te verzije crteža u oblaku ako ste ga otvorili iz oblaka. Otvorite ili vratite jednu, ili usporedite dvije, pri čemu se dodano, uklonjeno i promijenjeno prikazuje bojom. Vidi [Povijest](topic:history).
- **acad.lsp i acaddoc.lsp.** Odaberite mapu podrške u {{cmd:APPLOAD}}: te dvije datoteke učitavaju se kad se CadCraft pokrene (acaddoc.lsp ponovno za svaku novu karticu crteža), a `S::STARTUP` izvršava se nakon njih. Vidi [Učitavanje aplikacija](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dijalog plotanja u vlastitom prozoru.** Gumb u naslovnoj traci premješta ga u prozor koji možete staviti na drugi monitor. Vidi [Premjestite dijalog](common:arrange-panels#move-a-dialog).

### Za AI pomoćnike

- **Datoteke po imenu, u mapama koje odaberete.** U CadCraft Studiju pomoćnik može otvarati, spremati i plotirati datoteke po imenu te naredbi dati datoteku koju ona traži (INSERT iz datoteke, izvoz COUNT-a, SAVEAS, PLOT), ali samo unutar mapa koje dodate pod {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Pomoćnici}} › {{ui:Mape koje smije koristiti}}. Vidi [Neka koristi datoteke u mapama koje odaberete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Manje poziva.** Pomoćnik može upisati cijeli redak naredbe odjednom, zadržati naredbu otvorenom između poziva, brojati objekte po vrsti i sloju bez njihova popisivanja te umetnuti blok s vrijednostima atributa u jednom koraku.
- **Bez prozora.** Naredbeni redak `cadcraft` zapisuje SVG plotove te pretvara, plotira, provjerava ili opisuje mnogo datoteka odjednom. MCP paket još nije objavljen. Vidi [Rad s datotekama bez otvaranja CadCrafta](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Promijenjeno

- **Trackpad pomiče.** Pomaknite dva prsta na trackpadu i 2D prikaz ih prati; štipanje i kotačić miša zumiraju. Vidi [Miš, trackpad i dodir](topic:mouse-trackpad-touch).
- **OLE objekti se čuvaju.** DXF-ovi ugrađeni objekti prikazuju se kao svoja slika ili kao označeni okvir i spremaju se natrag pri spremanju u DXF 2000. DWG-ovi se čuvaju i zapisuju kad spremite kao DWG, ali se još ne prikazuju. Prije su se pri spremanju gubili. Vidi [Objekti iz drugih programa (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jedinice novog crteža** prate jedinicu koju označite u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}}.

## Ispravljeno

- Layouti koji su se otvarali prazni ili su izgubili viewport i u njegovo mjesto prikazivali cijeli model sada se otvaraju sa stvarnim viewportima. Layout bez poveznice na svoj sadržaj zadržava se, a otvoreni izvještaj to kaže.
- DXF datoteke u starijim kodnim stranicama prikazivale su iskrivljen ćirilični i korejski tekst. Sada se čitaju ispravno.
- Odlomački tekst iz drugih programa gubio je oblikovanje pri otvaranju, a pri spremanju se spremao kao običan tekst.

## U svim aplikacijama

- **Jedinice.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jedinice}} ima po jedan popis za duljinu, površinu, volumen, kut i nagib, s točnim veličinama koje daju definicije jedinica (američka geodetska stopa ima vlastitu jedinicu). Isključite jedinice koje nikad ne koristite i one nestaju s popisa; jednu označite zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U CadCraftu zvjezdica postavlja jedinice novog crteža kad je to jedinica koju crtež može nositi. CadCraftov vlastiti okvir {{ui:Jedinice}} još ne prati prekidače. Kad crtež ima jedinice, duljina koju upišete može nositi oznaku bilo koje jedinice. Vidi [Jedinice, upisane vrijednosti i popisi jedinica](common:unit-lists).
- **Gušći raspored i ploče koje se same sklanjaju.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Gustoća rasporeda}} › {{ui:Sažeto}} stane više na zaslon (zasloni osjetljivi na dodir i telefoni zadržavaju velike gumbe). Svaka bočna ploča ima tanku naslovnu traku: povucite je da je usidrite ili odvojite, ispustite na traku druge ploče da dijelite jedan okvir kao kartice, pričvrstite je da kliže do ruba ili je sakrijte i vratite s ruba. Vidi [Rasporedite ploče](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomiču.** Povucite dijalog za naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvostrukim klikom na naslovnu traku ponovno ga centrirate. Vidi [Premjestite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI pomoćnike.** Deset primjera zahtjeva za vašeg pomoćnika (sredite crtež, plotirajte set, provjerite crteže, postavite pitanja modelu, zbrojite predmjer, isprobajte varijantu dijela…), svaki s alatima koje zove i dopuštenjima koja treba, a svaki ponovno odigravaju naši testovi. Aplikacije ne sadrže AI. Vidi [Recepti za AI pomoćnike](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** nov je u {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Jezik}}. Njega, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao radne verzije koje izvorni govornik još nije pregledao. Stranice pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (nema datoteke za vaš sustav, nema mreže, neispravan potpis) umjesto samo „Gotovo“, i prestaje vraćati karticu {{ui:Što je novo}} koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalacijski program, odaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu prvi put desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. CadCraft Studio još nije u trgovini aplikacija, a još nema verzije za iPad ni iPhone.
- Popisi kutova i nagiba u {{ui:Jedinice}} se spremaju, ali ih još nijedan okvir ne čita.
- Crteži OLE objekata DWG-a se čuvaju, ali se ne prikazuju, a metadatoteke slika unutar OLE objekata se ne crtaju.
- Čitanje tablica stilova plota (CTB datoteke) iz drugih programa čeka uzorak datoteke.
- Stariji azijski tekst zapisan kao `\M+` kodovi se čita, ali još nije provjeren s datotekom iz drugog programa.
- PDF podloge: slike unutar stranice prikazuju se na zaslonu, ali se ne plotiraju, plot pomoćnika izostavlja podloge, a to kako ostali programi čitaju spremljeni isječak i mjerilo nije provjereno.
- Povijest: CadCraft još ne šalje svoja spremanja u oblak, pa su verzije u oblaku one spremljene s drugih uređaja i s weba. Povijest je samo u CadCraft Studiju.
- Je li Studio zadržava mapu podrške acad.lsp nakon ponovnog pokretanja još nije provjereno; ako to zatraži, odaberite mapu ponovno u APPLOAD-u.
- Ploča Laser još nije isprobana na pravom laseru: svaku postavku provjerite na otpadnom materijalu. CadCraft Studio nema Web Serial, pa u Studiju ploča samo sprema G-kod.
- Registracija skenova isprobana je na izmišljenim skenovima, još ne na skupu pravog skenera.
- Dvoprstno pomicanje isprobano je simuliranim događajima trackpada, još ne na pravom trackpadu.
- {{cmd:PEDIT}} nema opciju Edit vertex (koristite ručke ili Svojstva). Offset, trim, extend, fillet, break i join još ne uzimaju splajnove, a visina splajna (Z) se ne čuva.
- Novi odlomački tekst još ne može imati kodove oblikovanja, a SVG plotovi prikazuju oblikovani tekst u jednoj boji.
- Opcija WBLOCK-a Cijeli crtež zapisuje samo model, ne i listove. Trenutni stil kota se ne sprema u datoteku: crtež se otvara sa stilom Standard kao trenutnim.
- Stilovi s vrpcom nemaju još popise slojeva, boja ni vrsta linija: koristite ploču {{ui:Slojevi}} i {{ui:Svojstva}}.
- Oblaci točaka se još ne spremaju u crtež niti plotaju, a E57 datoteke se otvaraju do 6 milijuna točaka i 512 MB.
- CadCraftove spremljene DWG datoteke još nisu provjerene u samom AutoCADu.

Sve ostalo nalazi se u [Još nije izrađeno](topic:not-built-yet).
